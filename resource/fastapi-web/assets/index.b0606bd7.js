import{_ as R,E as ee}from"./index.1c6e070a.js";/* empty css               *//* empty css                */import{d as B,e as $,B as i,aD as f,aG as a,aH as l,aL as n,aM as v,bC as O,bA as P,b2 as Q,b1 as j,bK as le,aU as G,b5 as J,F as z,aE as y,C as q,aJ as S,aI as I,bu as ae,bv as oe,bX as re,bi as X,aS as de,aT as te,b4 as ue,a5 as ne,a4 as se,bz as me,bs as ie,u as fe,aK as pe,aF as _e,bL as ce,bM as ve,bJ as ge,bN as be}from"./arco.4feddc20.js";import{u as H}from"./loading.274ad4c6.js";import{q as we,d as ye}from"./model.4a181a70.js";/* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css              *//* empty css               *//* empty css               *//* empty css                */import{f as he}from"./agent.72b75954.js";/* empty css               */import"./chart.a7e777d6.js";import"./vue.05d7acac.js";import"./base.87fcf6e2.js";const Ve=B({__name:"base-info",emits:["changeStep"],setup(L,{emit:h}){const c=$(),d=$({corp:"",name:"",model:"",type:"1",base_url:"",path:"",prompt:"",remark:""}),b=async()=>{var m;await((m=c.value)==null?void 0:m.validate())||h("changeStep","forward",{...d.value})};return(s,m)=>{const u=O,e=P,_=Q,g=j,C=le,k=G,M=J;return i(),f(M,{ref_key:"formRef",ref:c,model:d.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:a(()=>[l(_,{field:"corp",label:s.$t("model.label.corp"),rules:[{required:!0,message:s.$t("model.error.corp.required")}]},{default:a(()=>[l(e,{modelValue:d.value.corp,"onUpdate:modelValue":m[0]||(m[0]=o=>d.value.corp=o),placeholder:s.$t("model.placeholder.corp"),"allow-search":""},{default:a(()=>[l(u,{value:"OpenAI"},{default:a(()=>[n("OpenAI")]),_:1}),l(u,{value:"Baidu"},{default:a(()=>[n("\u767E\u5EA6")]),_:1}),l(u,{value:"Xfyun"},{default:a(()=>[n("\u79D1\u5927\u8BAF\u98DE")]),_:1}),l(u,{value:"Aliyun"},{default:a(()=>[n("\u963F\u91CC\u4E91")]),_:1}),l(u,{value:"ZhipuAI"},{default:a(()=>[n("\u667A\u8C31AI")]),_:1}),l(u,{value:"Google"},{default:a(()=>[n("Google")]),_:1}),l(u,{value:"DeepSeek"},{default:a(()=>[n("DeepSeek")]),_:1}),l(u,{value:"Midjourney"},{default:a(()=>[n("Midjourney")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(_,{field:"name",label:s.$t("model.label.name"),rules:[{required:!0,message:s.$t("model.error.name.required")}]},{default:a(()=>[l(g,{modelValue:d.value.name,"onUpdate:modelValue":m[1]||(m[1]=o=>d.value.name=o),placeholder:s.$t("model.placeholder.name")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(_,{field:"model",label:s.$t("model.label.model"),rules:[{required:!0,message:s.$t("model.error.model.required")}]},{default:a(()=>[l(g,{modelValue:d.value.model,"onUpdate:modelValue":m[2]||(m[2]=o=>d.value.model=o),placeholder:s.$t("model.placeholder.model")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(_,{field:"type",label:s.$t("model.label.type"),rules:[{required:!0,message:s.$t("model.error.type.required")}]},{default:a(()=>[l(e,{modelValue:d.value.type,"onUpdate:modelValue":m[3]||(m[3]=o=>d.value.type=o),placeholder:s.$t("model.placeholder.type"),"allow-search":""},{default:a(()=>[l(u,{value:"1"},{default:a(()=>[n("\u6587\u751F\u6587")]),_:1}),l(u,{value:"2"},{default:a(()=>[n("\u6587\u751F\u56FE")]),_:1}),l(u,{value:"3"},{default:a(()=>[n("\u56FE\u751F\u6587")]),_:1}),l(u,{value:"4"},{default:a(()=>[n("\u56FE\u751F\u56FE")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(_,{field:"base_url",label:s.$t("model.label.base_url")},{default:a(()=>[l(g,{modelValue:d.value.base_url,"onUpdate:modelValue":m[4]||(m[4]=o=>d.value.base_url=o),placeholder:s.$t("model.placeholder.base_url")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"path",label:s.$t("model.label.path")},{default:a(()=>[l(g,{modelValue:d.value.path,"onUpdate:modelValue":m[5]||(m[5]=o=>d.value.path=o),placeholder:s.$t("model.placeholder.path")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"prompt",label:s.$t("model.label.prompt")},{default:a(()=>[l(C,{modelValue:d.value.prompt,"onUpdate:modelValue":m[6]||(m[6]=o=>d.value.prompt=o),placeholder:s.$t("model.placeholder.prompt")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"remark",label:s.$t("model.label.remark")},{default:a(()=>[l(C,{modelValue:d.value.remark,"onUpdate:modelValue":m[7]||(m[7]=o=>d.value.remark=o),placeholder:s.$t("model.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,null,{default:a(()=>[l(k,{type:"primary",onClick:b},{default:a(()=>[n(v(s.$t("model.button.next")),1)]),_:1})]),_:1})]),_:1},8,["model"])}}});const $e=R(Ve,[["__scopeId","data-v-65480a78"]]),ke=B({__name:"advanced",emits:["changeStep"],setup(L,{emit:h}){const{setLoading:c}=H(!0),d=$([]);(async()=>{c(!0);try{const{data:o}=await we();d.value=o.items}catch{}finally{c(!1)}})();const s=$([]);(async()=>{c(!0);try{const{data:o}=await he();s.value=o.items}catch{}finally{c(!1)}})();const u=$(),e=$({billing_method:"1",prompt_ratio:1,completion_ratio:1,fixed_quota:1,data_format:"1",is_public:!0,is_enable_model_agent:!1,model_agents:[],is_forward:!1,forward_config:{forward_rule:"1",match_rule:["2"],target_model:"",decision_model:"",keywords:[],target_models:[]}}),_=()=>{e.value.forward_config.keywords.push(""),e.value.forward_config.target_models.push("")},g=()=>{e.value.is_forward?e.value.forward_config.forward_rule==="2"?(e.value.forward_config.keywords=[""],e.value.forward_config.target_models=[""],e.value.forward_config.target_model=""):e.value.forward_config.forward_rule==="1"&&(e.value.forward_config.keywords=[],e.value.forward_config.target_models=[]):(e.value.forward_config.target_model="",e.value.forward_config.keywords=[],e.value.forward_config.target_models=[])},C=o=>{e.value.forward_config.keywords.length>1&&(e.value.forward_config.keywords.splice(o,1),e.value.forward_config.target_models.splice(o,1))},k=async()=>{var t;e.value.is_forward||(e.value.forward_config.forward_rule="",e.value.forward_config.match_rule=[],e.value.forward_config.target_model="",e.value.forward_config.keywords=[],e.value.forward_config.target_models=[]),e.value.forward_config.forward_rule==="1"&&(e.value.forward_config.keywords=[],e.value.forward_config.target_models=[]),await((t=u.value)==null?void 0:t.validate())||h("changeStep","submit",{...e.value})},M=()=>{h("changeStep","backward")};return(o,t)=>{const F=re,D=X,p=Q,N=de,T=te,U=O,A=P,K=ue,Z=j,W=ne,E=G,Y=se,x=J;return i(),f(x,{ref_key:"formRef",ref:u,model:e.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:a(()=>[l(p,{field:"billing_method",label:o.$t("model.label.billingMethod"),rules:[{required:!0,message:o.$t("model.error.billingMethod.required")}]},{default:a(()=>[l(D,{size:"large"},{default:a(()=>[l(F,{modelValue:e.value.billing_method,"onUpdate:modelValue":t[0]||(t[0]=r=>e.value.billing_method=r),value:"1","default-checked":!0},{default:a(()=>[n("\u500D\u7387")]),_:1},8,["modelValue"]),l(F,{modelValue:e.value.billing_method,"onUpdate:modelValue":t[1]||(t[1]=r=>e.value.billing_method=r),value:"2"},{default:a(()=>[n("\u56FA\u5B9A\u989D\u5EA6")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label","rules"]),e.value.billing_method==="1"?(i(),f(p,{key:0,field:"prompt_ratio",label:o.$t("model.label.promptRatio"),rules:[{required:!0,message:o.$t("model.error.promptRatio.required")}]},{default:a(()=>[l(N,{modelValue:e.value.prompt_ratio,"onUpdate:modelValue":t[2]||(t[2]=r=>e.value.prompt_ratio=r),min:.001,placeholder:o.$t("model.placeholder.promptRatio"),style:{width:"80%","margin-right":"5px"}},null,8,["modelValue","min","placeholder"]),z("div",null," $"+v(parseFloat((1e3/(5e5/e.value.prompt_ratio)).toFixed(6)))+"/k ",1)]),_:1},8,["label","rules"])):y("",!0),e.value.billing_method==="1"?(i(),f(p,{key:1,field:"completion_ratio",label:o.$t("model.label.completionRatio"),rules:[{required:!0,message:o.$t("model.error.completionRatio.required")}]},{default:a(()=>[l(N,{modelValue:e.value.completion_ratio,"onUpdate:modelValue":t[3]||(t[3]=r=>e.value.completion_ratio=r),min:.001,placeholder:o.$t("model.placeholder.completionRatio"),style:{width:"80%","margin-right":"5px"}},null,8,["modelValue","min","placeholder"]),z("div",null," $"+v(parseFloat((1e3/(5e5/e.value.completion_ratio)).toFixed(6)))+"/k ",1)]),_:1},8,["label","rules"])):y("",!0),e.value.billing_method==="2"?(i(),f(p,{key:2,field:"fixed_quota",label:o.$t("model.label.fixedQuota"),rules:[{required:!0,message:o.$t("model.error.fixedQuota.required")}]},{default:a(()=>[l(N,{modelValue:e.value.fixed_quota,"onUpdate:modelValue":t[4]||(t[4]=r=>e.value.fixed_quota=r),min:0,max:9999999999999,placeholder:o.$t("model.placeholder.fixedQuota")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):y("",!0),l(p,{field:"data_format",label:o.$t("model.label.dataFormat"),rules:[{required:!0,message:o.$t("model.error.dataFormat.required")}]},{default:a(()=>[l(D,{size:"large"},{default:a(()=>[l(F,{modelValue:e.value.data_format,"onUpdate:modelValue":t[5]||(t[5]=r=>e.value.data_format=r),value:"1","default-checked":!0},{default:a(()=>[n("\u7EDF\u4E00\u683C\u5F0F")]),_:1},8,["modelValue"]),l(F,{modelValue:e.value.data_format,"onUpdate:modelValue":t[6]||(t[6]=r=>e.value.data_format=r),value:"2"},{default:a(()=>[n("\u5B98\u65B9\u683C\u5F0F")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label","rules"]),l(p,{field:"is_public",label:o.$t("model.label.isPublic"),rules:[{required:!0}]},{default:a(()=>[l(T,{modelValue:e.value.is_public,"onUpdate:modelValue":t[7]||(t[7]=r=>e.value.is_public=r)},null,8,["modelValue"])]),_:1},8,["label"]),l(p,{field:"is_enable_model_agent",label:o.$t("model.label.isEnableModelAgent")},{default:a(()=>[l(T,{modelValue:e.value.is_enable_model_agent,"onUpdate:modelValue":t[8]||(t[8]=r=>e.value.is_enable_model_agent=r)},null,8,["modelValue"])]),_:1},8,["label"]),e.value.is_enable_model_agent?(i(),f(p,{key:3,field:"model_agents",label:o.$t("model.label.modelAgents"),rules:[{required:!0,message:o.$t("model.error.modelAgents.required")}]},{default:a(()=>[l(A,{modelValue:e.value.model_agents,"onUpdate:modelValue":t[9]||(t[9]=r=>e.value.model_agents=r),placeholder:o.$t("model.placeholder.modelAgents"),"max-tag-count":3,multiple:"","allow-search":"","allow-clear":""},{default:a(()=>[(i(!0),q(S,null,I(s.value,r=>(i(),f(U,{key:r.id,value:r.id,label:r.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):y("",!0),l(p,{field:"model_forward",label:o.$t("model.label.modelForward")},{default:a(()=>[l(T,{modelValue:e.value.is_forward,"onUpdate:modelValue":t[10]||(t[10]=r=>e.value.is_forward=r),onChange:g},null,8,["modelValue"])]),_:1},8,["label"]),e.value.is_forward?(i(),f(p,{key:4,field:"forward_config.forward_rule",label:o.$t("model.label.forwardRule"),rules:[{required:!0,message:o.$t("model.error.forwardRule.required")}]},{default:a(()=>[l(A,{modelValue:e.value.forward_config.forward_rule,"onUpdate:modelValue":t[11]||(t[11]=r=>e.value.forward_config.forward_rule=r),placeholder:o.$t("model.placeholder.forwardRule"),onChange:g},{default:a(()=>[l(U,{value:"1"},{default:a(()=>[n("\u5168\u90E8\u8F6C\u53D1")]),_:1}),l(U,{value:"2"},{default:a(()=>[n("\u6309\u5173\u952E\u5B57")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):y("",!0),e.value.is_forward&&e.value.forward_config.forward_rule==="1"?(i(),f(p,{key:5,field:"forward_config.target_model",label:o.$t("model.label.targetModel"),rules:[{required:!0,message:o.$t("model.error.targetModel.required")}]},{default:a(()=>[l(A,{modelValue:e.value.forward_config.target_model,"onUpdate:modelValue":t[12]||(t[12]=r=>e.value.forward_config.target_model=r),placeholder:o.$t("model.placeholder.targetModel"),"allow-search":""},{default:a(()=>[(i(!0),q(S,null,I(d.value,r=>(i(),f(U,{key:r.id,value:r.id,label:r.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):y("",!0),e.value.is_forward&&e.value.forward_config.forward_rule==="2"?(i(),f(p,{key:6,field:"forward_config.match_rule",label:o.$t("model.label.matchRule"),rules:[{required:!0,message:o.$t("model.error.matchRule.required")}]},{default:a(()=>[l(D,{size:"large"},{default:a(()=>[l(K,{modelValue:e.value.forward_config.match_rule,"onUpdate:modelValue":t[13]||(t[13]=r=>e.value.forward_config.match_rule=r),value:"1","default-checked":!0},{default:a(()=>[n("\u667A\u80FD\u5339\u914D")]),_:1},8,["modelValue"]),l(K,{modelValue:e.value.forward_config.match_rule,"onUpdate:modelValue":t[14]||(t[14]=r=>e.value.forward_config.match_rule=r),value:"2"},{default:a(()=>[n("\u6B63\u5219\u5339\u914D")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label","rules"])):y("",!0),e.value.is_forward&&e.value.forward_config.forward_rule==="2"&&e.value.forward_config.match_rule.includes("1")?(i(),f(p,{key:7,field:"forward_config.decision_model",label:o.$t("model.label.decisionModel"),rules:[{required:!0,message:o.$t("model.error.decisionModel.required")}]},{default:a(()=>[l(A,{modelValue:e.value.forward_config.decision_model,"onUpdate:modelValue":t[15]||(t[15]=r=>e.value.forward_config.decision_model=r),placeholder:o.$t("model.placeholder.decisionModel"),"allow-search":""},{default:a(()=>[(i(!0),q(S,null,I(d.value,r=>(i(),f(U,{key:r.id,value:r.id,label:r.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):y("",!0),(i(!0),q(S,null,I(e.value.forward_config.keywords,(r,w)=>ae((i(),f(p,{key:w,field:`forward_config.keywords[${w}]`&&`forward_config.target_models[${w}]`,label:`${w+1}. `+o.$t("model.label.keywords"),rules:[{required:!0,message:o.$t("model.error.keywordsAndtargetModel.required")}]},{default:a(()=>[l(Z,{modelValue:e.value.forward_config.keywords[w],"onUpdate:modelValue":V=>e.value.forward_config.keywords[w]=V,placeholder:o.$t("model.placeholder.keywords"),style:{width:"40%","margin-right":"5px"}},null,8,["modelValue","onUpdate:modelValue","placeholder"]),l(A,{modelValue:e.value.forward_config.target_models[w],"onUpdate:modelValue":V=>e.value.forward_config.target_models[w]=V,placeholder:o.$t("model.placeholder.targetModel"),style:{width:"40%"},"allow-search":""},{default:a(()=>[(i(!0),q(S,null,I(d.value,V=>(i(),f(U,{key:V.id,value:V.id,label:V.name},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"]),l(E,{type:"primary",shape:"circle",style:{margin:"0 10px 0 10px"},onClick:_},{default:a(()=>[l(W)]),_:1}),l(E,{type:"secondary",shape:"circle",onClick:V=>C(w)},{default:a(()=>[l(Y)]),_:2},1032,["onClick"])]),_:2},1032,["field","label","rules"])),[[oe,e.value.is_forward&&e.value.forward_config.forward_rule==="2"]])),128)),l(p,null,{default:a(()=>[l(D,null,{default:a(()=>[l(E,{type:"secondary",onClick:M},{default:a(()=>[n(v(o.$t("model.button.prev")),1)]),_:1}),l(E,{type:"primary",onClick:k},{default:a(()=>[n(v(o.$t("model.button.next")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])}}});const qe=R(ke,[["__scopeId","data-v-2756fd42"]]),Ce={class:"success-wrap"},Fe=B({__name:"success",emits:["changeStep"],setup(L,{emit:h}){const c=()=>{h("changeStep",1)};return(d,b)=>{const s=me,m=G,u=X;return i(),q("div",Ce,[l(s,{status:"success",title:d.$t("model.success.title"),subtitle:d.$t("model.success.create.subTitle")},null,8,["title","subtitle"]),l(u,{size:16},{default:a(()=>[l(m,{key:"finish",type:"secondary",onClick:b[0]||(b[0]=e=>d.$router.push({name:"ModelList"}))},{default:a(()=>[n(v(d.$t("model.button.finish")),1)]),_:1}),l(m,{key:"again",type:"primary",onClick:c},{default:a(()=>[n(v(d.$t("model.button.again")),1)]),_:1})]),_:1})])}}});const Ue=R(Fe,[["__scopeId","data-v-77484237"]]),Me={class:"container"},Ae={class:"wrapper"},Se={name:"ModelCreate"},Ie=B({...Se,setup(L){const{loading:h,setLoading:c}=H(!1),d=$(1),b=$({}),s=async()=>{c(!0);try{await ye(b.value),d.value=3,b.value={}}catch{}finally{c(!1)}},m=(u,e)=>{if(typeof u=="number"){d.value=u;return}if(u==="forward"||u==="submit"){if(b.value={...b.value,...e},u==="submit"){s();return}d.value+=1}else u==="backward"&&(d.value-=1)};return(u,e)=>{const _=ee,g=pe,C=_e,k=ce,M=ve,o=ge,t=be;return i(),q("div",Me,[l(C,{class:"container-breadcrumb"},{default:a(()=>[l(g,null,{default:a(()=>[l(_)]),_:1}),l(g,null,{default:a(()=>[n(v(u.$t("menu.model")),1)]),_:1}),l(g,null,{default:a(()=>[n(v(u.$t("menu.model.create")),1)]),_:1})]),_:1}),l(t,{loading:fe(h),style:{width:"100%"}},{default:a(()=>[l(o,{class:"general-card",bordered:!1},{default:a(()=>[z("div",Ae,[l(M,{current:d.value,"onUpdate:current":e[0]||(e[0]=F=>d.value=F),style:{width:"660px"},"line-less":"",class:"steps"},{default:a(()=>[l(k,{description:u.$t("model.subTitle.baseInfo")},{default:a(()=>[n(v(u.$t("model.title.baseInfo")),1)]),_:1},8,["description"]),l(k,{description:u.$t("model.subTitle.advanced")},{default:a(()=>[n(v(u.$t("model.title.advanced")),1)]),_:1},8,["description"]),l(k,{description:u.$t("model.subTitle.create.finish")},{default:a(()=>[n(v(u.$t("model.title.create.finish")),1)]),_:1},8,["description"])]),_:1},8,["current"]),(i(),f(ie,null,[d.value===1?(i(),f($e,{key:0,onChangeStep:m})):d.value===2?(i(),f(qe,{key:1,onChangeStep:m})):d.value===3?(i(),f(Ue,{key:2,onChangeStep:m})):y("",!0)],1024))])]),_:1})]),_:1},8,["loading"])])}}});const Ye=R(Ie,[["__scopeId","data-v-9fb2a161"]]);export{Ye as default};
