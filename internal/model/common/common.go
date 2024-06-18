package common

type TextQuota struct {
	BillingMethod   int     `bson:"billing_method,omitempty" json:"billing_method,omitempty"`           // 计费方式[1:倍率, 2:固定额度]
	PromptRatio     float64 `bson:"prompt_ratio,omitempty" json:"prompt_ratio,omitempty" d:"1"`         // 提示倍率(提问倍率)
	CompletionRatio float64 `bson:"completion_ratio,omitempty" json:"completion_ratio,omitempty" d:"1"` // 补全倍率(回答倍率)
	FixedQuota      int     `bson:"fixed_quota" json:"fixed_quota"`                                     // 固定额度
}

type ImageQuota struct {
	Width      int  `bson:"width,omitempty" json:"width,omitempty"`             // 宽度
	Height     int  `bson:"height,omitempty" json:"height,omitempty"`           // 高度
	FixedQuota int  `bson:"fixed_quota,omitempty" json:"fixed_quota,omitempty"` // 固定额度
	IsDefault  bool `bson:"is_default,omitempty" json:"is_default,omitempty"`   // 是否默认选项
}

type ForwardConfig struct {
	ForwardRule       int      `bson:"forward_rule,omitempty" json:"forward_rule,omitempty"`     // 转发规则[1:全部转发, 2:按关键字, 3:内容长度]
	MatchRule         []int    `bson:"match_rule,omitempty" json:"match_rule,omitempty"`         // 转发规则为2时的匹配规则[1:智能匹配, 2:正则匹配]
	TargetModel       string   `bson:"target_model,omitempty" json:"target_model,omitempty"`     // 转发规则为1和3时的目标模型
	DecisionModel     string   `bson:"decision_model,omitempty" json:"decision_model,omitempty"` // 转发规则为2时并且匹配规则为1时的判定模型
	Keywords          []string `bson:"keywords,omitempty" json:"keywords,omitempty"`             // 转发规则为2时的关键字
	TargetModels      []string `bson:"target_models,omitempty" json:"target_models,omitempty"`   // 转发规则为2时的目标模型
	ContentLength     int      `bson:"content_length,omitempty" json:"content_length,omitempty"` // 转发规则为3时的内容长度
	TargetModelName   string   `json:"target_model_name,omitempty"`                              // 转发规则为1和3时的目标模型名称
	DecisionModelName string   `json:"decision_model_name,omitempty"`                            // 转发规则为2时并且匹配规则为1时的判定模型名称
	TargetModelNames  []string `json:"target_model_names,omitempty"`                             // 转发规则为2时的目标模型名称
}

type FallbackConfig struct {
	FallbackModel     string `bson:"fallback_model,omitempty" json:"fallback_model,omitempty"`           // 后备模型
	FallbackModelName string `bson:"fallback_model_name,omitempty" json:"fallback_model_name,omitempty"` // 后备模型名称
}

type Message struct {
	Role    string `bson:"role,omitempty" json:"role,omitempty"`       // 角色
	Content string `bson:"content,omitempty" json:"content,omitempty"` // 内容
}

type Retry struct {
	IsRetry    bool   `bson:"is_retry,omitempty" json:"is_retry,omitempty"`       // 是否重试
	RetryCount int    `bson:"retry_count,omitempty" json:"retry_count,omitempty"` // 重试次数
	ErrMsg     string `bson:"err_msg,omitempty" json:"err_msg,omitempty"`         // 错误信息
}