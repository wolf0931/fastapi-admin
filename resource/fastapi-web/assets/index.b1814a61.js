import{G as re,_ as te}from"./index.755b51fd.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css                *//* empty css              *//* empty css               *//* empty css               *//* empty css                */import{d as ue,e as p,B as u,C as v,aH as o,aG as t,aL as s,aM as h,F as M,aJ as V,aI as y,aD as m,u as B,aE as _,bu as z,bv as G,aK as de,aF as ne,bF as se,bA as me,bB as ie,b2 as fe,b1 as _e,bK as pe,bQ as ge,bi as be,aS as ve,a5 as ce,aU as we,a4 as he,aT as Ve,b4 as ye,b5 as qe,bJ as $e,bL as ke,g as Ue}from"./arco.06d431a4.js";import{u as Ce}from"./loading.403a6ba1.js";import{f as Fe}from"./vue.4e689e11.js";import{p as J}from"./common.4956e59d.js";import{q as Me,e as Ae}from"./model.686141d5.js";import{q as Be}from"./corp.af260ef8.js";import{f as De}from"./agent.e20225e8.js";import"./chart.ac3cbee9.js";import"./base.87fcf6e2.js";const Le={class:"container"},Re={class:"wrapper"},Ee={class:"submit-btn"},Ie={name:"ModelCreate"},Qe=ue({...Ie,setup(Se){const{loading:P,setLoading:c}=Ce(!1),{proxy:H}=Ue(),O=Fe(),D=p([]);(async()=>{c(!0);try{const{data:l}=await Be();D.value=l.items}catch{}finally{c(!1)}})();const k=p([]);(async()=>{c(!0);try{const{data:l}=await Me();k.value=l.items}catch{}finally{c(!1)}})();const L=p([]);(async()=>{c(!0);try{const{data:l}=await De();L.value=l.items}catch{}finally{c(!1)}})();const R=p(),e=p({corp:"",name:"",model:"",type:"1",base_url:"",path:"",remark:"",is_enable_preset_config:!1,preset_config:{is_support_system_role:!0,system_role_prompt:"",min_tokens:p(),max_tokens:p()},text_quota:{billing_method:"1",prompt_ratio:1,completion_ratio:1,fixed_quota:1},image_quotas:[],data_format:"1",is_public:!0,is_enable_model_agent:!1,model_agents:[],is_enable_forward:!1,forward_config:{forward_rule:"1",match_rule:["2"],target_model:"",decision_model:"",keywords:[],target_models:[],content_length:p()},is_enable_fallback:!1,fallback_config:{fallback_model:""}}),j=async()=>{var r;if(e.value.is_enable_forward||(e.value.forward_config.forward_rule="",e.value.forward_config.match_rule=[],e.value.forward_config.target_model="",e.value.forward_config.keywords=[],e.value.forward_config.target_models=[],e.value.forward_config.content_length=p()),(e.value.forward_config.forward_rule==="1"||e.value.forward_config.forward_rule==="3")&&(e.value.forward_config.keywords=[],e.value.forward_config.target_models=[]),!await((r=R.value)==null?void 0:r.validate())){c(!0);try{await Ae(e.value).then(()=>{H.$message.success("\u65B0\u5EFA\u6210\u529F"),O.push({name:"ModelList"})})}catch{}finally{c(!1)}}},W=()=>{if(e.value.type==="2"){if(e.value.text_quota.billing_method="2",e.value.image_quotas.length===0){const l=[256,512,1024,1024,1792],r=[256,512,1024,1792,1024];for(let g=0;g<l.length;g+=1)I(l[g],r[g])}}else e.value.image_quotas=[]},E=()=>{e.value.is_enable_forward?e.value.forward_config.forward_rule==="2"?(e.value.forward_config.keywords=[""],e.value.forward_config.target_models=[""],e.value.forward_config.target_model="",e.value.forward_config.content_length=p()):(e.value.forward_config.forward_rule==="1"||e.value.forward_config.forward_rule==="3")&&(e.value.forward_config.keywords=[],e.value.forward_config.target_models=[]):(e.value.forward_config.target_model="",e.value.forward_config.keywords=[],e.value.forward_config.target_models=[],e.value.forward_config.content_length=p())},I=(l,r)=>{const g={fixed_quota:p(),width:l,height:r,is_default:e.value.image_quotas.length===0?"1":""};e.value.image_quotas.push(g)},X=l=>{e.value.image_quotas.length>1&&(e.value.image_quotas[l].is_default==="1"&&(e.value.image_quotas[l===0?1:0].is_default="1"),e.value.image_quotas.splice(l,1))},Y=l=>{for(let r=0;r<e.value.image_quotas.length;r+=1)r===l?e.value.image_quotas[r].is_default="1":e.value.image_quotas[r].is_default=""},Z=()=>{e.value.forward_config.keywords.push(""),e.value.forward_config.target_models.push("")},x=l=>{e.value.forward_config.keywords.length>1&&(e.value.forward_config.keywords.splice(l,1),e.value.forward_config.target_models.splice(l,1))};return(l,r)=>{const g=re,A=de,ee=ne,Q=se,f=me,w=ie,d=fe,U=_e,S=pe,C=ge,F=be,b=ve,N=ce,q=we,K=he,$=Ve,T=ye,le=qe,ae=$e,oe=ke;return u(),v("div",Le,[o(ee,{class:"container-breadcrumb"},{default:t(()=>[o(A,null,{default:t(()=>[o(g)]),_:1}),o(A,null,{default:t(()=>[s(h(l.$t("menu.model")),1)]),_:1}),o(A,null,{default:t(()=>[s(h(l.$t("menu.model.create")),1)]),_:1})]),_:1}),o(oe,{loading:B(P),style:{width:"100%"}},{default:t(()=>[o(ae,{class:"general-card","body-style":{padding:"0 20px 20px 20px"},bordered:!1},{default:t(()=>[M("div",Re,[o(le,{ref_key:"formRef",ref:R,model:e.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:t(()=>[o(Q,{orientation:"left"},{default:t(()=>[s(h(l.$t("model.title.baseInfo")),1)]),_:1}),o(d,{field:"corp",label:l.$t("model.label.corp"),rules:[{required:!0,message:l.$t("model.error.corp.required")}]},{default:t(()=>[o(w,{modelValue:e.value.corp,"onUpdate:modelValue":r[0]||(r[0]=a=>e.value.corp=a),placeholder:l.$t("model.placeholder.corp"),"allow-search":""},{default:t(()=>[(u(!0),v(V,null,y(D.value,a=>(u(),m(f,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),o(d,{field:"name",label:l.$t("model.label.name"),rules:[{required:!0,message:l.$t("model.error.name.required")}]},{default:t(()=>[o(U,{modelValue:e.value.name,"onUpdate:modelValue":r[1]||(r[1]=a=>e.value.name=a),placeholder:l.$t("model.placeholder.name")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),o(d,{field:"model",label:l.$t("model.label.model"),rules:[{required:!0,message:l.$t("model.error.model.required")}]},{default:t(()=>[o(U,{modelValue:e.value.model,"onUpdate:modelValue":r[2]||(r[2]=a=>e.value.model=a),placeholder:l.$t("model.placeholder.model")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),o(d,{field:"type",label:l.$t("model.label.type"),rules:[{required:!0,message:l.$t("model.error.type.required")}]},{default:t(()=>[o(w,{modelValue:e.value.type,"onUpdate:modelValue":r[3]||(r[3]=a=>e.value.type=a),placeholder:l.$t("model.placeholder.type"),"allow-search":"",onChange:W},{default:t(()=>[o(f,{value:"1"},{default:t(()=>[s("\u6587\u751F\u6587")]),_:1}),o(f,{value:"2"},{default:t(()=>[s("\u6587\u751F\u56FE")]),_:1}),o(f,{value:"3"},{default:t(()=>[s("\u56FE\u751F\u6587")]),_:1}),o(f,{value:"4"},{default:t(()=>[s("\u56FE\u751F\u56FE")]),_:1}),o(f,{value:"100"},{default:t(()=>[s("\u591A\u6A21\u6001")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),o(d,{field:"base_url",label:l.$t("model.label.base_url")},{default:t(()=>[o(U,{modelValue:e.value.base_url,"onUpdate:modelValue":r[4]||(r[4]=a=>e.value.base_url=a),placeholder:l.$t("model.placeholder.base_url")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(d,{field:"path",label:l.$t("model.label.path")},{default:t(()=>[o(U,{modelValue:e.value.path,"onUpdate:modelValue":r[5]||(r[5]=a=>e.value.path=a),placeholder:l.$t("model.placeholder.path")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(d,{field:"remark",label:l.$t("model.label.remark")},{default:t(()=>[o(S,{modelValue:e.value.remark,"onUpdate:modelValue":r[6]||(r[6]=a=>e.value.remark=a),placeholder:l.$t("model.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(Q,{orientation:"left"},{default:t(()=>[s(h(l.$t("model.title.advanced")),1)]),_:1}),o(d,{field:"text_quota.billing_method",label:l.$t("model.label.billingMethod"),rules:[{required:!0,message:l.$t("model.error.billingMethod.required")}]},{default:t(()=>[o(F,{size:"large"},{default:t(()=>[o(C,{modelValue:e.value.text_quota.billing_method,"onUpdate:modelValue":r[7]||(r[7]=a=>e.value.text_quota.billing_method=a),value:"1","default-checked":!0,disabled:e.value.type==="2"},{default:t(()=>[s("\u500D\u7387")]),_:1},8,["modelValue","disabled"]),o(C,{modelValue:e.value.text_quota.billing_method,"onUpdate:modelValue":r[8]||(r[8]=a=>e.value.text_quota.billing_method=a),value:"2"},{default:t(()=>[s("\u56FA\u5B9A\u989D\u5EA6")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label","rules"]),e.value.text_quota.billing_method==="1"?(u(),m(d,{key:0,field:"text_quota.prompt_ratio",label:l.$t("model.label.promptRatio"),rules:[{required:!0,message:l.$t("model.error.promptRatio.required")}]},{default:t(()=>[o(b,{modelValue:e.value.text_quota.prompt_ratio,"onUpdate:modelValue":r[9]||(r[9]=a=>e.value.text_quota.prompt_ratio=a),min:.001,placeholder:l.$t("model.placeholder.promptRatio"),style:{width:"90%","margin-right":"5px"}},null,8,["modelValue","min","placeholder"]),M("div",null," $"+h(B(J)(e.value.text_quota.prompt_ratio))+"/k ",1)]),_:1},8,["label","rules"])):_("",!0),e.value.text_quota.billing_method==="1"?(u(),m(d,{key:1,field:"text_quota.completion_ratio",label:l.$t("model.label.completionRatio"),rules:[{required:!0,message:l.$t("model.error.completionRatio.required")}]},{default:t(()=>[o(b,{modelValue:e.value.text_quota.completion_ratio,"onUpdate:modelValue":r[10]||(r[10]=a=>e.value.text_quota.completion_ratio=a),min:.001,placeholder:l.$t("model.placeholder.completionRatio"),style:{width:"90%","margin-right":"5px"}},null,8,["modelValue","min","placeholder"]),M("div",null," $"+h(B(J)(e.value.text_quota.completion_ratio))+"/k ",1)]),_:1},8,["label","rules"])):_("",!0),e.value.text_quota.billing_method==="2"&&e.value.type!=="2"?(u(),m(d,{key:2,field:"text_quota.fixed_quota",label:l.$t("model.label.fixedQuota"),rules:[{required:!0,message:l.$t("model.error.fixedQuota.required")}]},{default:t(()=>[o(b,{modelValue:e.value.text_quota.fixed_quota,"onUpdate:modelValue":r[11]||(r[11]=a=>e.value.text_quota.fixed_quota=a),min:0,max:9999999999999,placeholder:l.$t("model.placeholder.fixedQuota")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):_("",!0),(u(!0),v(V,null,y(e.value.image_quotas,(a,n)=>z((u(),m(d,{key:n,field:`image_quotas[${n}].width`&&`image_quotas[${n}].height`&&`image_quotas[${n}].fixed_quota`,label:`${n+1}. `+l.$t("model.label.image_quotas"),rules:[{required:!0,message:l.$t("model.error.image_quotas.required")}]},{default:t(()=>[o(b,{modelValue:e.value.image_quotas[n].width,"onUpdate:modelValue":i=>e.value.image_quotas[n].width=i,placeholder:l.$t("model.placeholder.image_quotas.width"),style:{width:"118px","margin-right":"5px"}},null,8,["modelValue","onUpdate:modelValue","placeholder"]),s(" \xD7 "),o(b,{modelValue:e.value.image_quotas[n].height,"onUpdate:modelValue":i=>e.value.image_quotas[n].height=i,placeholder:l.$t("model.placeholder.image_quotas.height"),style:{width:"118px","margin-left":"5px","margin-right":"5px"}},null,8,["modelValue","onUpdate:modelValue","placeholder"]),o(b,{modelValue:e.value.image_quotas[n].fixed_quota,"onUpdate:modelValue":i=>e.value.image_quotas[n].fixed_quota=i,placeholder:l.$t("model.placeholder.image_quotas.fixed_quota"),style:{width:"118px","margin-right":"5px"}},null,8,["modelValue","onUpdate:modelValue","placeholder"]),o(C,{modelValue:e.value.image_quotas[n].is_default,"onUpdate:modelValue":i=>e.value.image_quotas[n].is_default=i,value:"1",style:{width:"60px"},onChange:i=>Y(n)},{default:t(()=>[s("\u9ED8\u8BA4")]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"]),o(q,{type:"primary",shape:"circle",style:{margin:"0 10px 0 10px"},onClick:r[12]||(r[12]=i=>I())},{default:t(()=>[o(N)]),_:1}),o(q,{type:"secondary",shape:"circle",onClick:i=>X(n)},{default:t(()=>[o(K)]),_:2},1032,["onClick"])]),_:2},1032,["field","label","rules"])),[[G,e.value.type==="2"]])),128)),o(d,{field:"data_format",label:l.$t("model.label.dataFormat"),rules:[{required:!0,message:l.$t("model.error.dataFormat.required")}]},{default:t(()=>[o(F,{size:"large"},{default:t(()=>[o(C,{modelValue:e.value.data_format,"onUpdate:modelValue":r[13]||(r[13]=a=>e.value.data_format=a),value:"1","default-checked":!0},{default:t(()=>[s("\u7EDF\u4E00\u683C\u5F0F")]),_:1},8,["modelValue"]),o(C,{modelValue:e.value.data_format,"onUpdate:modelValue":r[14]||(r[14]=a=>e.value.data_format=a),value:"2"},{default:t(()=>[s("\u5B98\u65B9\u683C\u5F0F")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label","rules"]),o(d,{field:"is_public",label:l.$t("model.label.isPublic"),rules:[{required:!0}]},{default:t(()=>[o($,{modelValue:e.value.is_public,"onUpdate:modelValue":r[15]||(r[15]=a=>e.value.is_public=a)},null,8,["modelValue"])]),_:1},8,["label"]),o(d,{field:"is_enable_preset_config",label:l.$t("model.label.is_enable_preset_config")},{default:t(()=>[o($,{modelValue:e.value.is_enable_preset_config,"onUpdate:modelValue":r[16]||(r[16]=a=>e.value.is_enable_preset_config=a)},null,8,["modelValue"])]),_:1},8,["label"]),e.value.is_enable_preset_config?(u(),m(d,{key:3,field:"preset_config.is_support_system_role",label:l.$t("model.label.preset_config.is_support_system_role")},{default:t(()=>[o($,{modelValue:e.value.preset_config.is_support_system_role,"onUpdate:modelValue":r[17]||(r[17]=a=>e.value.preset_config.is_support_system_role=a)},null,8,["modelValue"])]),_:1},8,["label"])):_("",!0),e.value.is_enable_preset_config&&e.value.preset_config.is_support_system_role?(u(),m(d,{key:4,field:"preset_config.system_role_prompt",label:l.$t("model.label.preset_config.system_role_prompt")},{default:t(()=>[o(S,{modelValue:e.value.preset_config.system_role_prompt,"onUpdate:modelValue":r[18]||(r[18]=a=>e.value.preset_config.system_role_prompt=a),placeholder:l.$t("model.placeholder.preset_config.system_role_prompt")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):_("",!0),e.value.is_enable_preset_config?(u(),m(d,{key:5,field:"preset_config.max_tokens",label:l.$t("model.label.preset_config.max_tokens.range")},{default:t(()=>[o(b,{modelValue:e.value.preset_config.min_tokens,"onUpdate:modelValue":r[19]||(r[19]=a=>e.value.preset_config.min_tokens=a),placeholder:l.$t("model.placeholder.preset_config.min_tokens"),style:{width:"260px","margin-right":"5px"},min:0,max:2097152},null,8,["modelValue","placeholder"]),o(b,{modelValue:e.value.preset_config.max_tokens,"onUpdate:modelValue":r[20]||(r[20]=a=>e.value.preset_config.max_tokens=a),placeholder:l.$t("model.placeholder.preset_config.max_tokens"),style:{width:"260px"},min:0,max:2097152},null,8,["modelValue","placeholder"])]),_:1},8,["field","label"])):_("",!0),o(d,{field:"is_enable_model_agent",label:l.$t("model.label.isEnableModelAgent")},{default:t(()=>[o($,{modelValue:e.value.is_enable_model_agent,"onUpdate:modelValue":r[21]||(r[21]=a=>e.value.is_enable_model_agent=a)},null,8,["modelValue"])]),_:1},8,["label"]),e.value.is_enable_model_agent?(u(),m(d,{key:6,field:"model_agents",label:l.$t("model.label.modelAgents"),rules:[{required:!0,message:l.$t("model.error.modelAgents.required")}]},{default:t(()=>[o(w,{modelValue:e.value.model_agents,"onUpdate:modelValue":r[22]||(r[22]=a=>e.value.model_agents=a),placeholder:l.$t("model.placeholder.modelAgents"),"max-tag-count":3,multiple:"","allow-search":"","allow-clear":""},{default:t(()=>[(u(!0),v(V,null,y(L.value,a=>(u(),m(f,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):_("",!0),o(d,{field:"model_forward",label:l.$t("model.label.modelForward")},{default:t(()=>[o($,{modelValue:e.value.is_enable_forward,"onUpdate:modelValue":r[23]||(r[23]=a=>e.value.is_enable_forward=a),onChange:E},null,8,["modelValue"])]),_:1},8,["label"]),e.value.is_enable_forward?(u(),m(d,{key:7,field:"forward_config.forward_rule",label:l.$t("model.label.forwardRule"),rules:[{required:!0,message:l.$t("model.error.forwardRule.required")}]},{default:t(()=>[o(w,{modelValue:e.value.forward_config.forward_rule,"onUpdate:modelValue":r[24]||(r[24]=a=>e.value.forward_config.forward_rule=a),placeholder:l.$t("model.placeholder.forwardRule"),onChange:E},{default:t(()=>[o(f,{value:"1"},{default:t(()=>[s("\u5168\u90E8\u8F6C\u53D1")]),_:1}),o(f,{value:"2"},{default:t(()=>[s("\u6309\u5173\u952E\u5B57")]),_:1}),o(f,{value:"3"},{default:t(()=>[s("\u5185\u5BB9\u957F\u5EA6")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):_("",!0),e.value.is_enable_forward&&e.value.forward_config.forward_rule==="3"?(u(),m(d,{key:8,field:"forward_config.content_length",label:l.$t("model.label.content_length"),rules:[{required:!0,message:l.$t("model.error.content_length.required")}]},{default:t(()=>[o(b,{modelValue:e.value.forward_config.content_length,"onUpdate:modelValue":r[25]||(r[25]=a=>e.value.forward_config.content_length=a),min:1,max:9999999999999,placeholder:l.$t("model.placeholder.content_length")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):_("",!0),e.value.is_enable_forward&&(e.value.forward_config.forward_rule==="1"||e.value.forward_config.forward_rule==="3")?(u(),m(d,{key:9,field:"forward_config.target_model",label:l.$t("model.label.targetModel"),rules:[{required:!0,message:l.$t("model.error.targetModel.required")}]},{default:t(()=>[o(w,{modelValue:e.value.forward_config.target_model,"onUpdate:modelValue":r[26]||(r[26]=a=>e.value.forward_config.target_model=a),placeholder:l.$t("model.placeholder.targetModel"),"allow-search":""},{default:t(()=>[(u(!0),v(V,null,y(k.value,a=>(u(),m(f,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):_("",!0),e.value.is_enable_forward&&e.value.forward_config.forward_rule==="2"?(u(),m(d,{key:10,field:"forward_config.match_rule",label:l.$t("model.label.matchRule"),rules:[{required:!0,message:l.$t("model.error.matchRule.required")}]},{default:t(()=>[o(F,{size:"large"},{default:t(()=>[o(T,{modelValue:e.value.forward_config.match_rule,"onUpdate:modelValue":r[27]||(r[27]=a=>e.value.forward_config.match_rule=a),value:"1","default-checked":!0},{default:t(()=>[s("\u667A\u80FD\u5339\u914D")]),_:1},8,["modelValue"]),o(T,{modelValue:e.value.forward_config.match_rule,"onUpdate:modelValue":r[28]||(r[28]=a=>e.value.forward_config.match_rule=a),value:"2"},{default:t(()=>[s("\u6B63\u5219\u5339\u914D")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label","rules"])):_("",!0),e.value.is_enable_forward&&e.value.forward_config.forward_rule==="2"&&e.value.forward_config.match_rule.includes("1")?(u(),m(d,{key:11,field:"forward_config.decision_model",label:l.$t("model.label.decisionModel"),rules:[{required:!0,message:l.$t("model.error.decisionModel.required")}]},{default:t(()=>[o(w,{modelValue:e.value.forward_config.decision_model,"onUpdate:modelValue":r[29]||(r[29]=a=>e.value.forward_config.decision_model=a),placeholder:l.$t("model.placeholder.decisionModel"),"allow-search":""},{default:t(()=>[(u(!0),v(V,null,y(k.value,a=>(u(),m(f,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):_("",!0),(u(!0),v(V,null,y(e.value.forward_config.keywords,(a,n)=>z((u(),m(d,{key:n,field:`forward_config.keywords[${n}]`&&`forward_config.target_models[${n}]`,label:`${n+1}. `+l.$t("model.label.keywords"),rules:[{required:!0,message:l.$t("model.error.keywordsAndtargetModel.required")}]},{default:t(()=>[o(U,{modelValue:e.value.forward_config.keywords[n],"onUpdate:modelValue":i=>e.value.forward_config.keywords[n]=i,placeholder:l.$t("model.placeholder.keywords"),style:{width:"45%","margin-right":"5px"}},null,8,["modelValue","onUpdate:modelValue","placeholder"]),o(w,{modelValue:e.value.forward_config.target_models[n],"onUpdate:modelValue":i=>e.value.forward_config.target_models[n]=i,placeholder:l.$t("model.placeholder.targetModel"),style:{width:"40%"},"allow-search":""},{default:t(()=>[(u(!0),v(V,null,y(k.value,i=>(u(),m(f,{key:i.id,value:i.id,label:i.name},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"]),o(q,{type:"primary",shape:"circle",style:{margin:"0 10px 0 10px"},onClick:Z},{default:t(()=>[o(N)]),_:1}),o(q,{type:"secondary",shape:"circle",onClick:i=>x(n)},{default:t(()=>[o(K)]),_:2},1032,["onClick"])]),_:2},1032,["field","label","rules"])),[[G,e.value.is_enable_forward&&e.value.forward_config.forward_rule==="2"]])),128)),o(d,{field:"is_enable_fallback",label:l.$t("model.label.is_enable_fallback")},{default:t(()=>[o($,{modelValue:e.value.is_enable_fallback,"onUpdate:modelValue":r[30]||(r[30]=a=>e.value.is_enable_fallback=a)},null,8,["modelValue"])]),_:1},8,["label"]),e.value.is_enable_fallback?(u(),m(d,{key:12,field:"fallback_config.fallback_model",label:l.$t("model.label.fallback_model"),rules:[{required:!0,message:l.$t("model.error.fallback_model.required")}]},{default:t(()=>[o(w,{modelValue:e.value.fallback_config.fallback_model,"onUpdate:modelValue":r[31]||(r[31]=a=>e.value.fallback_config.fallback_model=a),placeholder:l.$t("model.placeholder.fallback_model"),"allow-search":""},{default:t(()=>[(u(!0),v(V,null,y(k.value,a=>(u(),m(f,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):_("",!0),o(F,null,{default:t(()=>[M("div",Ee,[o(q,{type:"secondary",onClick:r[32]||(r[32]=a=>l.$router.push({name:"ModelList"}))},{default:t(()=>[s(h(l.$t("form.button.cancel")),1)]),_:1}),o(q,{type:"primary",onClick:j},{default:t(()=>[s(h(l.$t("form.button.submit")),1)]),_:1})])]),_:1})]),_:1},8,["model"])])]),_:1})]),_:1},8,["loading"])])}}});const sl=te(Qe,[["__scopeId","data-v-ec11dd71"]]);export{sl as default};
