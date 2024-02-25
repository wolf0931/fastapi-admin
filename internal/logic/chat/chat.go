package key

import (
	"context"
	"github.com/gogf/gf/v2/os/gtime"
	"github.com/iimeta/fastapi-admin/internal/dao"
	"github.com/iimeta/fastapi-admin/internal/model"
	"github.com/iimeta/fastapi-admin/internal/service"
	"github.com/iimeta/fastapi-admin/utility/db"
	"github.com/iimeta/fastapi-admin/utility/logger"
	"github.com/iimeta/fastapi-admin/utility/util"
	"go.mongodb.org/mongo-driver/bson"
	"time"
)

type sChat struct{}

func init() {
	service.RegisterChat(New())
}

func New() service.IChat {
	return &sChat{}
}

// 聊天详情
func (s *sChat) Detail(ctx context.Context, id string) (*model.Chat, error) {

	key, err := dao.Chat.FindById(ctx, id)
	if err != nil {
		logger.Error(ctx, err)
		return nil, err
	}

	return &model.Chat{
		Id:                 key.Id,
		TraceId:            key.TraceId,
		UserId:             key.UserId,
		AppId:              key.AppId,
		Corp:               key.Corp,
		ModelId:            key.ModelId,
		Name:               key.Name,
		Model:              key.Model,
		Type:               key.Type,
		Key:                key.Key,
		IsEnableModelAgent: key.IsEnableModelAgent,
		ModelAgentId:       key.ModelAgentId,
		Stream:             key.Stream,
		Prompt:             key.Prompt,
		Completion:         key.Completion,
		PromptRatio:        key.PromptRatio,
		CompletionRatio:    key.CompletionRatio,
		PromptTokens:       key.PromptTokens,
		CompletionTokens:   key.CompletionTokens,
		TotalTokens:        key.TotalTokens,
		ConnTime:           key.ConnTime,
		Duration:           key.Duration,
		TotalTime:          key.TotalTime,
		InternalTime:       key.InternalTime,
		ReqTime:            util.FormatDatetime(key.ReqTime),
		ReqDate:            key.ReqDate,
		ClientIp:           key.ClientIp,
		RemoteIp:           key.RemoteIp,
		ErrMsg:             key.ErrMsg,
		Status:             key.Status,
		Creator:            key.Creator,
		Updater:            key.Updater,
		CreatedAt:          util.FormatDatetime(key.CreatedAt),
		UpdatedAt:          util.FormatDatetime(key.UpdatedAt),
	}, nil
}

// 聊天分页列表
func (s *sChat) Page(ctx context.Context, params model.ChatPageReq) (*model.ChatPageRes, error) {

	paging := &db.Paging{
		Page:     params.Page,
		PageSize: params.PageSize,
	}

	filter := bson.M{}

	if service.Session().IsUserRole(ctx) {
		filter["user_id"] = service.Session().GetUserId(ctx)
	}

	if params.AppId != 0 {
		filter["app_id"] = params.AppId
	}

	if params.Key != "" {
		filter["creator"] = params.Key
	}

	if len(params.Models) > 0 {
		filter["model_id"] = bson.M{
			"$in": params.Models,
		}
	}

	if params.TotalTime != 0 {
		filter["total_time"] = bson.M{
			"$gte": params.TotalTime,
		}
	}

	if params.Status != 0 {
		filter["status"] = params.Status
	}

	if len(params.ReqTimes) > 0 {
		gte := gtime.NewFromStrFormat(params.ReqTimes[0], time.DateTime).TimestampMilli()
		lte := gtime.NewFromStrLayout(params.ReqTimes[1], time.DateTime).TimestampMilli() + 999
		filter["req_time"] = bson.M{
			"$gte": gte,
			"$lte": lte,
		}
	}

	results, err := dao.Chat.FindByPage(ctx, paging, filter, "-updated_at")
	if err != nil {
		logger.Error(ctx, err)
		return nil, err
	}

	items := make([]*model.Chat, 0)
	for _, result := range results {
		items = append(items, &model.Chat{
			Id:                 result.Id,
			UserId:             result.UserId,
			AppId:              result.AppId,
			Corp:               result.Corp,
			ModelId:            result.ModelId,
			Name:               result.Name,
			Model:              result.Model,
			IsEnableModelAgent: result.IsEnableModelAgent,
			Stream:             result.Stream,
			PromptTokens:       result.PromptTokens,
			CompletionTokens:   result.CompletionTokens,
			TotalTokens:        result.TotalTokens,
			ConnTime:           result.ConnTime,
			Duration:           result.Duration,
			TotalTime:          result.TotalTime,
			InternalTime:       result.InternalTime,
			ReqTime:            util.FormatDatetime(result.ReqTime),
			Status:             result.Status,
			Creator:            result.Creator,
		})
	}

	return &model.ChatPageRes{
		Items: items,
		Paging: &model.Paging{
			Page:     paging.Page,
			PageSize: paging.PageSize,
			Total:    paging.Total,
		},
	}, nil
}
