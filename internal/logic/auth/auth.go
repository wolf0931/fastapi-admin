package auth

import (
	"context"
	"fmt"
	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
	"github.com/gogf/gf/v2/os/gtime"
	"github.com/gogf/gf/v2/text/gstr"
	"github.com/gogf/gf/v2/util/gconv"
	"github.com/gogf/gf/v2/util/gmeta"
	"github.com/gogf/gf/v2/util/grand"
	"github.com/iimeta/fastapi-admin/internal/config"
	"github.com/iimeta/fastapi-admin/internal/consts"
	"github.com/iimeta/fastapi-admin/internal/core"
	"github.com/iimeta/fastapi-admin/internal/dao"
	"github.com/iimeta/fastapi-admin/internal/errors"
	"github.com/iimeta/fastapi-admin/internal/model"
	"github.com/iimeta/fastapi-admin/internal/model/do"
	"github.com/iimeta/fastapi-admin/internal/service"
	"github.com/iimeta/fastapi-admin/utility/cache"
	"github.com/iimeta/fastapi-admin/utility/crypto"
	"github.com/iimeta/fastapi-admin/utility/logger"
	"github.com/iimeta/fastapi-admin/utility/redis"
	"github.com/iimeta/fastapi-admin/utility/util"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"strings"
	"time"
)

type sAuth struct {
	tokenCache *cache.Cache // [token]User
}

func init() {
	service.RegisterAuth(New())
}

func New() service.IAuth {
	return &sAuth{
		tokenCache: cache.New(),
	}
}

// 身份核验
func (s *sAuth) Authenticator(ctx context.Context, req interface{}) bool {

	role := gmeta.Get(req, "role").String()
	if role != "*" && !gstr.Contains(role, service.Session().GetRole(ctx)) {
		g.RequestFromCtx(ctx).Response.WriteJson(g.Map{"code": 401, "message": "Unauthorized"})
		return false
	}

	return true
}

// 注册接口
func (s *sAuth) Register(ctx context.Context, params model.RegisterReq, channel ...string) error {

	if len(channel) == 0 {
		channel = []string{consts.CHANNEL_REGISTER}
	}

	// 验证验证码是否正确
	if !service.Common().VerifyCode(ctx, channel[0], params.Account, params.Code) {
		return errors.New("验证码填写错误")
	}

	if dao.User.IsAccountExist(ctx, params.Account) {
		return errors.New(params.Account + " 账号已存在")
	}

	models, err := service.Model().PublicModels(ctx)
	if err != nil {
		logger.Error(ctx, err)
		return err
	}

	salt := grand.Letters(8)
	id := util.GenerateId()

	user := &do.User{
		Id:      id,
		UserId:  core.IncrUserId(ctx),
		Name:    params.Account,
		Email:   params.Account,
		Models:  models,
		Status:  1,
		Creator: id,
	}

	siteConfig := service.SiteConfig().GetSiteConfigByDomain(ctx, params.Domain)
	if siteConfig != nil && siteConfig.RegisterTips == "" && siteConfig.GrantQuota > 0 {
		user.Quota = siteConfig.GrantQuota
		if siteConfig.QuotaExpiresAt > 0 {
			user.QuotaExpiresAt = gtime.Now().Add(time.Duration(siteConfig.QuotaExpiresAt) * time.Minute).TimestampMilli()
		}
	}

	if siteConfig == nil && config.Cfg.App.Register.GrantQuota > 0 {
		user.Quota = config.Cfg.App.Register.GrantQuota
		if config.Cfg.App.Register.QuotaExpiresAt > 0 {
			user.QuotaExpiresAt = gtime.Now().Add(config.Cfg.App.Register.QuotaExpiresAt * time.Minute).TimestampMilli()
		}
	}

	uid, err := dao.User.Insert(ctx, user)
	if err != nil {
		logger.Error(ctx, err)
		return err
	}

	if _, err = dao.User.CreateAccount(ctx, &do.Account{
		Uid:      uid,
		UserId:   user.UserId,
		Account:  params.Account,
		Password: crypto.EncryptPassword(params.Password + salt),
		Salt:     salt,
		Status:   1,
		Creator:  uid,
	}); err != nil {
		logger.Error(ctx, err)
		return err
	}

	_ = service.Common().DelCode(ctx, consts.CHANNEL_REGISTER, params.Account)

	if user.Quota != 0 {

		// 交易记录
		if _, err = dao.DealRecord.Insert(ctx, &do.DealRecord{
			UserId: user.UserId,
			Quota:  user.Quota,
			Status: 1,
		}); err != nil {
			logger.Error(ctx, err)
			return err
		}

		if _, err = redis.HIncrBy(ctx, fmt.Sprintf(consts.API_USAGE_KEY, user.UserId), consts.USER_QUOTA_FIELD, int64(user.Quota)); err != nil {
			logger.Error(ctx, err)
			return err
		}
	}

	return nil
}

// 登录接口
func (s *sAuth) Login(ctx context.Context, params model.LoginReq) (res *model.LoginRes, err error) {

	defer func() {
		if err != nil {
			if val, _ := redis.Incr(ctx, fmt.Sprintf(consts.LOCK_LOGIN, params.Account)); val == 1 {
				_, _ = redis.Expire(ctx, fmt.Sprintf(consts.LOCK_LOGIN, params.Account), 30*60) // 锁定30分钟
			}
		} else {
			_, _ = redis.Del(ctx, fmt.Sprintf(consts.LOCK_LOGIN, params.Account))
		}
	}()

	val, err := redis.GetInt(ctx, fmt.Sprintf(consts.LOCK_LOGIN, params.Account))
	if err == nil && val >= 5 {
		return nil, errors.New("登录失败次数过多, 请稍后再试")
	}

	r := g.RequestFromCtx(ctx)
	ip := r.GetClientIp()
	token := ""

	if params.Channel == consts.USER_CHANNEL {

		if params.Method == consts.METHOD_CODE {
			// 验证验证码是否正确
			if !service.Common().VerifyCode(ctx, consts.CHANNEL_LOGIN, params.Account, params.Code) {
				return nil, errors.New("验证码填写错误")
			}
		}

		accountInfo, err := dao.User.FindAccount(ctx, params.Account)

		if params.Method == consts.METHOD_ACCOUNT {

			if err != nil {
				if errors.Is(err, mongo.ErrNoDocuments) {
					return nil, errors.New("账号或密码不正确")
				}
				logger.Error(ctx, err)
				return nil, err
			}

			if accountInfo.Status == 2 {
				return nil, errors.New("账号已被禁用")
			}

			if !crypto.VerifyPassword(accountInfo.Password, params.Password+accountInfo.Salt) {
				return nil, errors.New("账号或密码不正确")
			}

		} else if params.Method == consts.METHOD_CODE {

			if err != nil {
				if errors.Is(err, mongo.ErrNoDocuments) {

					if len(config.Cfg.App.Register.SupportEmailSuffix) > 0 {

						isSupport := false
						for _, emailSuffix := range config.Cfg.App.Register.SupportEmailSuffix {
							if isSupport = gstr.HasSuffix(params.Account, emailSuffix); isSupport {
								break
							}
						}

						if !isSupport {
							return nil, errors.New(fmt.Sprintf("邮箱仅支持 %s 后缀", config.Cfg.App.Register.SupportEmailSuffix))
						}
					}

					if siteConfig := service.SiteConfig().GetSiteConfigByDomain(ctx, params.Domain); siteConfig != nil {

						if siteConfig.RegisterTips != "" {
							return nil, errors.New(siteConfig.RegisterTips)
						}

						if len(siteConfig.SupportEmailSuffix) > 0 {

							isSupport := false
							for _, emailSuffix := range siteConfig.SupportEmailSuffix {
								if isSupport = gstr.HasSuffix(params.Account, emailSuffix); isSupport {
									break
								}
							}

							if !isSupport {
								return nil, errors.New(fmt.Sprintf("邮箱仅支持 %s 后缀", siteConfig.SupportEmailSuffix))
							}
						}
					}

					if err = s.Register(ctx, model.RegisterReq{
						Account:  params.Account,
						Password: grand.Letters(8),
						Terminal: params.Terminal,
						Code:     params.Code,
						Domain:   params.Domain,
					}, consts.CHANNEL_LOGIN); err != nil {
						logger.Error(ctx, err)
						return nil, err
					}

					accountInfo, err = dao.User.FindAccount(ctx, params.Account)
					if err != nil {
						logger.Error(ctx, err)
						return nil, err
					}

				} else {
					logger.Error(ctx, err)
					return nil, err
				}

			} else {
				if accountInfo.Status == 2 {
					return nil, errors.New("账号已被禁用")
				}
			}

		} else {
			return nil, errors.New("账号或密码不正确")
		}

		user, err := dao.User.FindOne(ctx, bson.M{"_id": accountInfo.Uid, "status": 1})
		if err != nil {
			if errors.Is(err, mongo.ErrNoDocuments) {
				return nil, errors.New("用户不存在或已被禁用")
			}
			logger.Error(ctx, err)
			return nil, err
		}

		r.SetCtxVar("uid", user.Id)

		// 记录登录IP和时间
		if err = dao.Account.UpdateById(gctx.WithCtx(r.GetCtx()), accountInfo.Id, bson.M{
			"login_ip":   ip,
			"login_time": gtime.TimestampMilli(),
		}); err != nil {
			logger.Error(ctx, err)
		}

		if token, err = s.GenUserToken(ctx, &model.User{
			Id:        user.Id,
			UserId:    user.UserId,
			Name:      user.Name,
			Avatar:    user.Avatar,
			Email:     user.Email,
			Phone:     user.Phone,
			Quota:     user.Quota,
			UsedQuota: user.UsedQuota,
			Models:    user.Models,
			Account:   accountInfo.Account,
			CreatedAt: util.FormatDateTime(user.CreatedAt),
			UpdatedAt: util.FormatDateTime(user.UpdatedAt),
		}, true); err != nil {
			logger.Error(ctx, err)
			return nil, err
		}

	} else if params.Channel == consts.ADMIN_CHANNEL {

		admin, err := dao.SysAdmin.FindOne(ctx, bson.M{
			"$or": bson.A{
				bson.M{"account": params.Account},
				bson.M{"email": params.Account},
			},
		})
		if err != nil {
			if errors.Is(err, mongo.ErrNoDocuments) {

				count, err := dao.SysAdmin.EstimatedDocumentCount(ctx)
				if err != nil {
					logger.Error(ctx, err)
					return nil, err
				}

				// 初次登录自动创建账号
				if count == 0 {

					if err = service.SysAdmin().Create(ctx, model.SysAdminCreateReq{
						Name:     params.Account,
						Account:  params.Account,
						Password: params.Password,
					}); err != nil {
						logger.Error(ctx, err)
						return nil, err
					}

					if admin, err = dao.SysAdmin.FindOne(ctx, bson.M{"account": params.Account}); err != nil {
						logger.Error(ctx, err)
						return nil, err
					}

				} else {
					return nil, errors.New("账号或密码不正确")
				}
			} else {
				logger.Error(ctx, err)
				return nil, err
			}
		}

		if admin.Status == 2 {
			return nil, errors.New("账号已被禁用")
		}

		if !crypto.VerifyPassword(admin.Password, params.Password+admin.Salt) {
			return nil, errors.New("账号或密码不正确")
		}

		r.SetCtxVar("uid", admin.Id)

		// 记录登录ip和时间
		if err = dao.SysAdmin.UpdateById(gctx.WithCtx(r.GetCtx()), admin.Id, bson.M{
			"login_ip":   ip,
			"login_time": gtime.TimestampMilli(),
		}); err != nil {
			logger.Error(ctx, err)
		}

		if token, err = s.GenAdminToken(ctx, &model.SysAdmin{
			Id:        admin.Id,
			UserId:    admin.UserId,
			Name:      admin.Name,
			Avatar:    admin.Avatar,
			Email:     admin.Email,
			Phone:     admin.Phone,
			Account:   admin.Account,
			Remark:    admin.Remark,
			Status:    admin.Status,
			CreatedAt: admin.CreatedAt,
			UpdatedAt: admin.UpdatedAt,
		}, true); err != nil {
			logger.Error(ctx, err)
			return nil, err
		}
	}

	time.Sleep(time.Duration(grand.N(150, 200)) * time.Millisecond)

	return &model.LoginRes{
		Type:      "Bearer",
		Token:     token,
		ExpiresIn: 3600 * 6,
	}, nil
}

// 退出登录接口
func (s *sAuth) Logout(ctx context.Context) error {

	token := g.RequestFromCtx(ctx).GetHeader("Authorization")
	token = strings.TrimSpace(strings.TrimPrefix(token, "Bearer"))

	key := fmt.Sprintf(consts.USER_SESSION, token)

	if gstr.HasPrefix(token, consts.ADMIN_TOKEN_PREFIX) {
		key = fmt.Sprintf(consts.ADMIN_SESSION, token)
	}

	if _, err := redis.Del(ctx, key); err != nil {
		logger.Error(ctx, err)
		return err
	}

	if _, err := s.tokenCache.Remove(ctx, key); err != nil {
		logger.Error(ctx, err)
		return err
	}

	return nil
}

// 账号找回接口
func (s *sAuth) Forget(ctx context.Context, params model.ForgetReq) error {

	// 验证验证码是否正确
	if !service.Common().VerifyCode(ctx, consts.CHANNEL_FORGET_ACCOUNT, params.Account, params.Code) {
		return errors.New("验证码填写错误")
	}

	account, err := dao.User.FindAccount(ctx, params.Account)
	if err != nil || account.Id == "" {
		return errors.New(params.Account + " 账号不存在")
	}

	if err = dao.User.ChangePasswordByUserId(ctx, account.UserId, params.Password); err != nil {
		logger.Error(ctx, err)
		return errors.New("找回密码失败")
	}

	_ = service.Common().DelCode(ctx, consts.CHANNEL_FORGET_ACCOUNT, params.Account)

	return nil
}

// 生成用户Token
func (s *sAuth) GenUserToken(ctx context.Context, user *model.User, isSaveSession bool) (token string, err error) {

	token = util.NewKey(consts.USER_TOKEN_PREFIX, 32, gconv.String(user.UserId))

	if isSaveSession {

		if err = redis.SetEX(ctx, fmt.Sprintf(consts.USER_SESSION, token), gjson.MustEncodeString(user), 3600*6); err != nil {
			logger.Error(ctx, err)
			return
		}

		if err = s.tokenCache.Set(ctx, fmt.Sprintf(consts.USER_SESSION, token), user, time.Second*3600*6); err != nil {
			logger.Errorf(ctx, "GenUserToken key: %s, error: %v", fmt.Sprintf(consts.USER_SESSION, token), err)
			return
		}
	}

	return token, err
}

// 根据Token获取用户信息
func (s *sAuth) GetUserByToken(ctx context.Context, token string) (*model.User, error) {

	if tokenCache := s.tokenCache.GetVal(ctx, fmt.Sprintf(consts.USER_SESSION, token)); tokenCache != nil {
		return tokenCache.(*model.User), nil
	}

	reply, err := redis.Get(ctx, fmt.Sprintf(consts.USER_SESSION, token))
	if err != nil {
		logger.Error(ctx, err)
		return nil, err
	}

	if reply == nil || reply.IsNil() {
		return nil, errors.New("session is nil")
	}

	user := new(model.User)
	if err = reply.Struct(&user); err != nil {
		logger.Error(ctx, err)
		return nil, err
	}

	if ttl, err := redis.TTL(ctx, fmt.Sprintf(consts.USER_SESSION, token)); err != nil {
		logger.Error(ctx, err)
	} else {
		if err = s.tokenCache.Set(ctx, fmt.Sprintf(consts.USER_SESSION, token), user, time.Second*time.Duration(ttl)); err != nil {
			logger.Errorf(ctx, "GetUserByToken key: %s, error: %v", fmt.Sprintf(consts.USER_SESSION, token), err)
		}
	}

	return user, nil
}

// 生成管理员Token
func (s *sAuth) GenAdminToken(ctx context.Context, admin *model.SysAdmin, isSaveSession bool) (token string, err error) {

	token = util.NewKey(consts.ADMIN_TOKEN_PREFIX, 32, admin.Id)

	if isSaveSession {

		if err = redis.SetEX(ctx, fmt.Sprintf(consts.ADMIN_SESSION, token), gjson.MustEncodeString(admin), 3600*6); err != nil {
			logger.Error(ctx, err)
			return
		}

		if err = s.tokenCache.Set(ctx, fmt.Sprintf(consts.ADMIN_SESSION, token), admin, time.Second*3600*6); err != nil {
			logger.Errorf(ctx, "GenAdminToken key: %s, error: %v", fmt.Sprintf(consts.ADMIN_SESSION, token), err)
			return
		}
	}

	return token, err
}

// 根据Token获取管理员信息
func (s *sAuth) GetAdminByToken(ctx context.Context, token string) (*model.SysAdmin, error) {

	if tokenCache := s.tokenCache.GetVal(ctx, fmt.Sprintf(consts.ADMIN_SESSION, token)); tokenCache != nil {
		return tokenCache.(*model.SysAdmin), nil
	}

	reply, err := redis.Get(ctx, fmt.Sprintf(consts.ADMIN_SESSION, token))
	if err != nil {
		logger.Error(ctx, err)
		return nil, err
	}

	if reply == nil || reply.IsNil() {
		return nil, errors.New("session is nil")
	}

	admin := new(model.SysAdmin)
	if err = reply.Struct(&admin); err != nil {
		logger.Error(ctx, err)
		return nil, err
	}

	if ttl, err := redis.TTL(ctx, fmt.Sprintf(consts.ADMIN_SESSION, token)); err != nil {
		logger.Error(ctx, err)
	} else {
		if err = s.tokenCache.Set(ctx, fmt.Sprintf(consts.ADMIN_SESSION, token), admin, time.Second*time.Duration(ttl)); err != nil {
			logger.Errorf(ctx, "GetAdminByToken key: %s, error: %v", fmt.Sprintf(consts.ADMIN_SESSION, token), err)
		}
	}

	return admin, nil
}
