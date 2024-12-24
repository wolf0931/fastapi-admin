package site_config

import (
	"context"
	"github.com/iimeta/fastapi-admin/internal/service"

	"github.com/iimeta/fastapi-admin/api/site_config/v1"
)

func (c *ControllerV1) BatchOperate(ctx context.Context, req *v1.BatchOperateReq) (res *v1.BatchOperateRes, err error) {

	if !service.Auth().Authenticator(ctx, req) {
		return
	}

	err = service.SiteConfig().BatchOperate(ctx, req.SiteConfigBatchOperateReq)

	return
}