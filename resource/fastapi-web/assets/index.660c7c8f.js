import{_ as B,E as Y}from"./index.6574130b.js";/* empty css               *//* empty css                */import{d as R,e as $,B as i,aD as p,aG as a,aH as l,aL as m,aM as g,bB as K,bC as O,b2 as P,b1 as Q,bK as x,aU as z,b5 as j,aE as k,C as U,aJ as I,aI as E,bu as ee,bv as le,bX as ae,bi as J,aS as oe,aT as re,a5 as te,a4 as de,bz as ue,F as ne,bs as se,u as me,aK as ie,aF as pe,bL as fe,bM as _e,bJ as ce,bN as ve}from"./arco.aed15247.js";import{u as X}from"./loading.b5911e1d.js";import{q as be,c as ge}from"./model.f3bbeeb1.js";/* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css              *//* empty css               *//* empty css               *//* empty css                */import{e as we}from"./agent.70422e92.js";/* empty css               */import"./chart.9aa6eafa.js";import"./vue.0cc5b64a.js";import"./base.87fcf6e2.js";const ye=R({__name:"base-info",emits:["changeStep"],setup(L,{emit:y}){const c=$(),r=$({corp:"",name:"",model:"",type:"1",base_url:"",path:"",prompt:"",remark:""}),b=async()=>{var s;await((s=c.value)==null?void 0:s.validate())||y("changeStep","forward",{...r.value})};return(n,s)=>{const d=K,e=O,f=P,v=Q,q=x,h=z,F=j;return i(),p(F,{ref_key:"formRef",ref:c,model:r.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:a(()=>[l(f,{field:"corp",label:n.$t("model.label.corp"),rules:[{required:!0,message:n.$t("model.error.corp.required")}]},{default:a(()=>[l(e,{modelValue:r.value.corp,"onUpdate:modelValue":s[0]||(s[0]=o=>r.value.corp=o),placeholder:n.$t("model.placeholder.corp")},{default:a(()=>[l(d,{value:"OpenAI"},{default:a(()=>[m("OpenAI")]),_:1}),l(d,{value:"Baidu"},{default:a(()=>[m("\u767E\u5EA6")]),_:1}),l(d,{value:"Xfyun"},{default:a(()=>[m("\u79D1\u5927\u8BAF\u98DE")]),_:1}),l(d,{value:"Aliyun"},{default:a(()=>[m("\u963F\u91CC\u4E91")]),_:1}),l(d,{value:"ZhipuAI"},{default:a(()=>[m("\u667A\u8C31AI")]),_:1}),l(d,{value:"Midjourney"},{default:a(()=>[m("Midjourney")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(f,{field:"name",label:n.$t("model.label.name"),rules:[{required:!0,message:n.$t("model.error.name.required")}]},{default:a(()=>[l(v,{modelValue:r.value.name,"onUpdate:modelValue":s[1]||(s[1]=o=>r.value.name=o),placeholder:n.$t("model.placeholder.name")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(f,{field:"model",label:n.$t("model.label.model"),rules:[{required:!0,message:n.$t("model.error.model.required")}]},{default:a(()=>[l(v,{modelValue:r.value.model,"onUpdate:modelValue":s[2]||(s[2]=o=>r.value.model=o),placeholder:n.$t("model.placeholder.model")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(f,{field:"type",label:n.$t("model.label.type"),rules:[{required:!0,message:n.$t("model.error.type.required")}]},{default:a(()=>[l(e,{modelValue:r.value.type,"onUpdate:modelValue":s[3]||(s[3]=o=>r.value.type=o),placeholder:n.$t("model.placeholder.type")},{default:a(()=>[l(d,{value:"1"},{default:a(()=>[m("\u6587\u751F\u6587")]),_:1}),l(d,{value:"2"},{default:a(()=>[m("\u6587\u751F\u56FE")]),_:1}),l(d,{value:"3"},{default:a(()=>[m("\u56FE\u751F\u6587")]),_:1}),l(d,{value:"4"},{default:a(()=>[m("\u56FE\u751F\u56FE")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(f,{field:"base_url",label:n.$t("model.label.base_url")},{default:a(()=>[l(v,{modelValue:r.value.base_url,"onUpdate:modelValue":s[4]||(s[4]=o=>r.value.base_url=o),placeholder:n.$t("model.placeholder.base_url")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(f,{field:"path",label:n.$t("model.label.path")},{default:a(()=>[l(v,{modelValue:r.value.path,"onUpdate:modelValue":s[5]||(s[5]=o=>r.value.path=o),placeholder:n.$t("model.placeholder.path")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(f,{field:"prompt",label:n.$t("model.label.prompt")},{default:a(()=>[l(q,{modelValue:r.value.prompt,"onUpdate:modelValue":s[6]||(s[6]=o=>r.value.prompt=o),placeholder:n.$t("model.placeholder.prompt")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(f,{field:"remark",label:n.$t("model.label.remark")},{default:a(()=>[l(q,{modelValue:r.value.remark,"onUpdate:modelValue":s[7]||(s[7]=o=>r.value.remark=o),placeholder:n.$t("model.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(f,null,{default:a(()=>[l(h,{type:"primary",onClick:b},{default:a(()=>[m(g(n.$t("model.button.next")),1)]),_:1})]),_:1})]),_:1},8,["model"])}}});const Ve=B(ye,[["__scopeId","data-v-f50e3504"]]),$e=R({__name:"advanced",emits:["changeStep"],setup(L,{emit:y}){const{setLoading:c}=X(!0),r=$([]);(async()=>{c(!0);try{const{data:o}=await be();r.value=o.items}catch{}finally{c(!1)}})();const n=$([]);(async()=>{c(!0);try{const{data:o}=await we();n.value=o.items}catch{}finally{c(!1)}})();const d=$(),e=$({billing_method:"1",prompt_ratio:1,completion_ratio:1,fixed_quota:1,data_format:"1",is_public:!0,is_enable_model_agent:!1,model_agents:[],is_forward:!1,forward_config:{forward_rule:"1",target_model:"",keywords:[],target_models:[]}}),f=()=>{e.value.forward_config.keywords.push(""),e.value.forward_config.target_models.push("")},v=()=>{e.value.is_forward?e.value.forward_config.forward_rule==="2"?(e.value.forward_config.keywords=[""],e.value.forward_config.target_models=[""],e.value.forward_config.target_model=""):e.value.forward_config.forward_rule==="1"&&(e.value.forward_config.keywords=[],e.value.forward_config.target_models=[]):(e.value.forward_config.target_model="",e.value.forward_config.keywords=[],e.value.forward_config.target_models=[])},q=o=>{e.value.forward_config.keywords.length>1&&(e.value.forward_config.keywords.splice(o,1),e.value.forward_config.target_models.splice(o,1))},h=async()=>{var u;e.value.is_forward||(e.value.forward_config.forward_rule="",e.value.forward_config.target_model="",e.value.forward_config.keywords=[],e.value.forward_config.target_models=[]),e.value.forward_config.forward_rule==="1"&&(e.value.forward_config.keywords=[],e.value.forward_config.target_models=[]),await((u=d.value)==null?void 0:u.validate())||y("changeStep","submit",{...e.value})},F=()=>{y("changeStep","backward")};return(o,u)=>{const C=ae,D=J,_=P,N=oe,T=re,M=K,A=O,G=Q,H=te,S=z,Z=de,W=j;return i(),p(W,{ref_key:"formRef",ref:d,model:e.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:a(()=>[l(_,{field:"billing_method",label:o.$t("model.label.billingMethod"),rules:[{required:!0,message:o.$t("model.error.billingMethod.required")}]},{default:a(()=>[l(D,{size:"large"},{default:a(()=>[l(C,{modelValue:e.value.billing_method,"onUpdate:modelValue":u[0]||(u[0]=t=>e.value.billing_method=t),value:"1","default-checked":!0},{default:a(()=>[m("\u500D\u7387")]),_:1},8,["modelValue"]),l(C,{modelValue:e.value.billing_method,"onUpdate:modelValue":u[1]||(u[1]=t=>e.value.billing_method=t),value:"2"},{default:a(()=>[m("\u56FA\u5B9A\u989D\u5EA6")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label","rules"]),e.value.billing_method==="1"?(i(),p(_,{key:0,field:"prompt_ratio",label:o.$t("model.label.promptRatio"),rules:[{required:!0,message:o.$t("model.error.promptRatio.required")}]},{default:a(()=>[l(N,{modelValue:e.value.prompt_ratio,"onUpdate:modelValue":u[2]||(u[2]=t=>e.value.prompt_ratio=t),min:.001,placeholder:o.$t("model.placeholder.promptRatio")},null,8,["modelValue","min","placeholder"])]),_:1},8,["label","rules"])):k("",!0),e.value.billing_method==="1"?(i(),p(_,{key:1,field:"completion_ratio",label:o.$t("model.label.completionRatio"),rules:[{required:!0,message:o.$t("model.error.completionRatio.required")}]},{default:a(()=>[l(N,{modelValue:e.value.completion_ratio,"onUpdate:modelValue":u[3]||(u[3]=t=>e.value.completion_ratio=t),min:.001,placeholder:o.$t("model.placeholder.completionRatio")},null,8,["modelValue","min","placeholder"])]),_:1},8,["label","rules"])):k("",!0),e.value.billing_method==="2"?(i(),p(_,{key:2,field:"fixed_quota",label:o.$t("model.label.fixedQuota"),rules:[{required:!0,message:o.$t("model.error.fixedQuota.required")}]},{default:a(()=>[l(N,{modelValue:e.value.fixed_quota,"onUpdate:modelValue":u[4]||(u[4]=t=>e.value.fixed_quota=t),min:0,max:9999999999999,placeholder:o.$t("model.placeholder.fixedQuota")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):k("",!0),l(_,{field:"data_format",label:o.$t("model.label.dataFormat"),rules:[{required:!0,message:o.$t("model.error.dataFormat.required")}]},{default:a(()=>[l(D,{size:"large"},{default:a(()=>[l(C,{modelValue:e.value.data_format,"onUpdate:modelValue":u[5]||(u[5]=t=>e.value.data_format=t),value:"1","default-checked":!0},{default:a(()=>[m("\u7EDF\u4E00\u683C\u5F0F")]),_:1},8,["modelValue"]),l(C,{modelValue:e.value.data_format,"onUpdate:modelValue":u[6]||(u[6]=t=>e.value.data_format=t),value:"2"},{default:a(()=>[m("\u5B98\u65B9\u683C\u5F0F")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label","rules"]),l(_,{field:"is_public",label:o.$t("model.label.isPublic"),rules:[{required:!0}]},{default:a(()=>[l(T,{modelValue:e.value.is_public,"onUpdate:modelValue":u[7]||(u[7]=t=>e.value.is_public=t)},null,8,["modelValue"])]),_:1},8,["label"]),l(_,{field:"is_enable_model_agent",label:o.$t("model.label.isEnableModelAgent")},{default:a(()=>[l(T,{modelValue:e.value.is_enable_model_agent,"onUpdate:modelValue":u[8]||(u[8]=t=>e.value.is_enable_model_agent=t)},null,8,["modelValue"])]),_:1},8,["label"]),e.value.is_enable_model_agent?(i(),p(_,{key:3,field:"model_agents",label:o.$t("model.label.modelAgents"),rules:[{required:!0,message:o.$t("model.error.modelAgents.required")}]},{default:a(()=>[l(A,{modelValue:e.value.model_agents,"onUpdate:modelValue":u[9]||(u[9]=t=>e.value.model_agents=t),placeholder:o.$t("model.placeholder.modelAgents"),"max-tag-count":3,multiple:"","allow-clear":""},{default:a(()=>[(i(!0),U(I,null,E(n.value,t=>(i(),p(M,{key:t.id,value:t.id,label:t.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):k("",!0),l(_,{field:"model_forward",label:o.$t("model.label.modelForward")},{default:a(()=>[l(T,{modelValue:e.value.is_forward,"onUpdate:modelValue":u[10]||(u[10]=t=>e.value.is_forward=t),onChange:v},null,8,["modelValue"])]),_:1},8,["label"]),e.value.is_forward?(i(),p(_,{key:4,field:"forward_config.forward_rule",label:o.$t("model.label.forwardRule"),rules:[{required:!0,message:o.$t("model.error.forwardRule.required")}]},{default:a(()=>[l(A,{modelValue:e.value.forward_config.forward_rule,"onUpdate:modelValue":u[11]||(u[11]=t=>e.value.forward_config.forward_rule=t),placeholder:o.$t("model.placeholder.forwardRule"),onChange:v},{default:a(()=>[l(M,{value:"1"},{default:a(()=>[m("\u5168\u90E8\u8F6C\u53D1")]),_:1}),l(M,{value:"2"},{default:a(()=>[m("\u6309\u5173\u952E\u5B57")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):k("",!0),e.value.is_forward&&e.value.forward_config.forward_rule==="1"?(i(),p(_,{key:5,field:"forward_config.target_model",label:o.$t("model.label.targetModel"),rules:[{required:!0,message:o.$t("model.error.targetModel.required")}]},{default:a(()=>[l(A,{modelValue:e.value.forward_config.target_model,"onUpdate:modelValue":u[12]||(u[12]=t=>e.value.forward_config.target_model=t),placeholder:o.$t("model.placeholder.targetModel")},{default:a(()=>[(i(!0),U(I,null,E(r.value,t=>(i(),p(M,{key:t.id,value:t.id,label:t.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):k("",!0),(i(!0),U(I,null,E(e.value.forward_config.keywords,(t,w)=>ee((i(),p(_,{key:w,field:`forward_config.keywords[${w}]`&&`forward_config.target_models[${w}]`,label:`${w+1}. `+o.$t("model.label.keywords"),rules:[{required:!0,message:o.$t("model.error.keywordsAndtargetModel.required")}]},{default:a(()=>[l(G,{modelValue:e.value.forward_config.keywords[w],"onUpdate:modelValue":V=>e.value.forward_config.keywords[w]=V,placeholder:o.$t("model.placeholder.keywords"),style:{width:"40%","margin-right":"5px"}},null,8,["modelValue","onUpdate:modelValue","placeholder"]),l(A,{modelValue:e.value.forward_config.target_models[w],"onUpdate:modelValue":V=>e.value.forward_config.target_models[w]=V,placeholder:o.$t("model.placeholder.targetModel"),style:{width:"40%"}},{default:a(()=>[(i(!0),U(I,null,E(r.value,V=>(i(),p(M,{key:V.id,value:V.id,label:V.name},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"]),l(S,{type:"primary",shape:"circle",style:{margin:"0 10px 0 10px"},onClick:f},{default:a(()=>[l(H)]),_:1}),l(S,{type:"secondary",shape:"circle",onClick:V=>q(w)},{default:a(()=>[l(Z)]),_:2},1032,["onClick"])]),_:2},1032,["field","label","rules"])),[[le,e.value.is_forward&&e.value.forward_config.forward_rule==="2"]])),128)),l(_,null,{default:a(()=>[l(D,null,{default:a(()=>[l(S,{type:"secondary",onClick:F},{default:a(()=>[m(g(o.$t("model.button.prev")),1)]),_:1}),l(S,{type:"primary",onClick:h},{default:a(()=>[m(g(o.$t("model.button.next")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])}}});const he=B($e,[["__scopeId","data-v-8931d164"]]),ke={class:"success-wrap"},qe=R({__name:"success",emits:["changeStep"],setup(L,{emit:y}){const c=()=>{y("changeStep",1)};return(r,b)=>{const n=ue,s=z,d=J;return i(),U("div",ke,[l(n,{status:"success",title:r.$t("model.success.title"),subtitle:r.$t("model.success.create.subTitle")},null,8,["title","subtitle"]),l(d,{size:16},{default:a(()=>[l(s,{key:"finish",type:"secondary",onClick:b[0]||(b[0]=e=>r.$router.push({name:"ModelList"}))},{default:a(()=>[m(g(r.$t("model.button.finish")),1)]),_:1}),l(s,{key:"again",type:"primary",onClick:c},{default:a(()=>[m(g(r.$t("model.button.again")),1)]),_:1})]),_:1})])}}});const Ce=B(qe,[["__scopeId","data-v-77484237"]]),Ue={class:"container"},Fe={class:"wrapper"},Me={name:"ModelCreate"},Ae=R({...Me,setup(L){const{loading:y,setLoading:c}=X(!1),r=$(1),b=$({}),n=async()=>{c(!0);try{await ge(b.value),r.value=3,b.value={}}catch{}finally{c(!1)}},s=(d,e)=>{if(typeof d=="number"){r.value=d;return}if(d==="forward"||d==="submit"){if(b.value={...b.value,...e},d==="submit"){n();return}r.value+=1}else d==="backward"&&(r.value-=1)};return(d,e)=>{const f=Y,v=ie,q=pe,h=fe,F=_e,o=ce,u=ve;return i(),U("div",Ue,[l(q,{class:"container-breadcrumb"},{default:a(()=>[l(v,null,{default:a(()=>[l(f)]),_:1}),l(v,null,{default:a(()=>[m(g(d.$t("menu.model")),1)]),_:1}),l(v,null,{default:a(()=>[m(g(d.$t("menu.model.create")),1)]),_:1})]),_:1}),l(u,{loading:me(y),style:{width:"100%"}},{default:a(()=>[l(o,{class:"general-card",bordered:!1},{default:a(()=>[ne("div",Fe,[l(F,{current:r.value,"onUpdate:current":e[0]||(e[0]=C=>r.value=C),style:{width:"660px"},"line-less":"",class:"steps"},{default:a(()=>[l(h,{description:d.$t("model.subTitle.baseInfo")},{default:a(()=>[m(g(d.$t("model.title.baseInfo")),1)]),_:1},8,["description"]),l(h,{description:d.$t("model.subTitle.advanced")},{default:a(()=>[m(g(d.$t("model.title.advanced")),1)]),_:1},8,["description"]),l(h,{description:d.$t("model.subTitle.create.finish")},{default:a(()=>[m(g(d.$t("model.title.create.finish")),1)]),_:1},8,["description"])]),_:1},8,["current"]),(i(),p(se,null,[r.value===1?(i(),p(Ve,{key:0,onChangeStep:s})):r.value===2?(i(),p(he,{key:1,onChangeStep:s})):r.value===3?(i(),p(Ce,{key:2,onChangeStep:s})):k("",!0)],1024))])]),_:1})]),_:1},8,["loading"])])}}});const Ze=B(Ae,[["__scopeId","data-v-25925057"]]);export{Ze as default};