import{_ as U,E as Q}from"./index.ff8851ab.js";/* empty css               *//* empty css                */import{d as w,e as F,B as _,aD as y,aG as l,aH as e,aL as n,aM as V,bB as B,bC as D,b2 as E,b1 as j,bK as J,aU as A,b5 as R,aE as C,C as S,aJ as P,aI as X,bX as G,bi as L,aS as H,aT as Z,bz as W,F as Y,bs as x,u as ee,aK as le,aF as ae,bL as oe,bM as te,bJ as ue,bN as de}from"./arco.aed15247.js";import{u as M}from"./loading.b5911e1d.js";import{d as N,e as re}from"./model.42b18730.js";/* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css              *//* empty css               */import{h as T}from"./vue.0cc5b64a.js";/* empty css               *//* empty css                */import{e as ne}from"./agent.05c4975f.js";/* empty css               */import"./chart.9aa6eafa.js";import"./base.87fcf6e2.js";const se=w({__name:"base-info",emits:["changeStep"],setup($,{emit:v}){const{setLoading:c}=M(!0),i=T(),b=F(),u=F({id:"",corp:"",name:"",model:"",type:"",remark:"",base_url:"",path:"",prompt:"",status:1});(async(d={id:i.query.id})=>{c(!0);try{const{data:t}=await N(d);u.value.id=t.id,u.value.corp=t.corp,u.value.name=t.name,u.value.model=t.model,u.value.type=String(t.type),u.value.remark=t.remark,u.value.base_url=t.base_url,u.value.path=t.path,u.value.prompt=t.prompt,u.value.status=t.status}catch{}finally{c(!1)}})();const a=async()=>{var t;await((t=b.value)==null?void 0:t.validate())||v("changeStep","forward",{...u.value})};return(d,t)=>{const p=B,r=D,o=E,g=j,h=J,f=A,k=R;return _(),y(k,{ref_key:"formRef",ref:b,model:u.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:l(()=>[e(o,{field:"corp",label:d.$t("model.label.corp"),rules:[{required:!0,message:d.$t("model.error.corp.required")}]},{default:l(()=>[e(r,{modelValue:u.value.corp,"onUpdate:modelValue":t[0]||(t[0]=m=>u.value.corp=m),placeholder:d.$t("model.placeholder.corp")},{default:l(()=>[e(p,{value:"OpenAI"},{default:l(()=>[n("OpenAI")]),_:1}),e(p,{value:"Baidu"},{default:l(()=>[n("\u767E\u5EA6")]),_:1}),e(p,{value:"Xfyun"},{default:l(()=>[n("\u79D1\u5927\u8BAF\u98DE")]),_:1}),e(p,{value:"Aliyun"},{default:l(()=>[n("\u963F\u91CC\u4E91")]),_:1}),e(p,{value:"ZhipuAI"},{default:l(()=>[n("\u667A\u8C31AI")]),_:1}),e(p,{value:"Midjourney"},{default:l(()=>[n("Midjourney")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(o,{field:"name",label:d.$t("model.label.name"),rules:[{required:!0,message:d.$t("model.error.name.required")}]},{default:l(()=>[e(g,{modelValue:u.value.name,"onUpdate:modelValue":t[1]||(t[1]=m=>u.value.name=m),placeholder:d.$t("model.placeholder.name")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(o,{field:"model",label:d.$t("model.label.model"),rules:[{required:!0,message:d.$t("model.error.model.required")},{message:d.$t("model.error.model.pattern")}]},{default:l(()=>[e(g,{modelValue:u.value.model,"onUpdate:modelValue":t[2]||(t[2]=m=>u.value.model=m),placeholder:d.$t("model.placeholder.model")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(o,{field:"type",label:d.$t("model.label.type"),rules:[{required:!0,message:d.$t("model.error.type.required")}]},{default:l(()=>[e(r,{modelValue:u.value.type,"onUpdate:modelValue":t[3]||(t[3]=m=>u.value.type=m),placeholder:d.$t("model.placeholder.type")},{default:l(()=>[e(p,{value:"1"},{default:l(()=>[n("\u6587\u751F\u6587")]),_:1}),e(p,{value:"2"},{default:l(()=>[n("\u6587\u751F\u56FE")]),_:1}),e(p,{value:"3"},{default:l(()=>[n("\u56FE\u751F\u6587")]),_:1}),e(p,{value:"4"},{default:l(()=>[n("\u56FE\u751F\u56FE")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(o,{field:"base_url",label:d.$t("model.label.base_url")},{default:l(()=>[e(g,{modelValue:u.value.base_url,"onUpdate:modelValue":t[4]||(t[4]=m=>u.value.base_url=m),placeholder:d.$t("model.placeholder.base_url")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(o,{field:"path",label:d.$t("model.label.path")},{default:l(()=>[e(g,{modelValue:u.value.path,"onUpdate:modelValue":t[5]||(t[5]=m=>u.value.path=m),placeholder:d.$t("model.placeholder.path")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(o,{field:"prompt",label:d.$t("model.label.prompt")},{default:l(()=>[e(h,{modelValue:u.value.prompt,"onUpdate:modelValue":t[6]||(t[6]=m=>u.value.prompt=m),placeholder:d.$t("model.placeholder.prompt")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(o,{field:"remark",label:d.$t("model.label.remark")},{default:l(()=>[e(h,{modelValue:u.value.remark,"onUpdate:modelValue":t[7]||(t[7]=m=>u.value.remark=m),placeholder:d.$t("model.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(o,null,{default:l(()=>[e(f,{type:"primary",onClick:a},{default:l(()=>[n(V(d.$t("model.button.next")),1)]),_:1})]),_:1})]),_:1},8,["model"])}}});const me=U(se,[["__scopeId","data-v-7d50c5d3"]]),ie=w({__name:"advanced",emits:["changeStep"],setup($,{emit:v}){const{setLoading:c}=M(!0),i=T(),b=F([]);(async()=>{c(!0);try{const{data:r}=await ne();b.value=r.items}catch{}finally{c(!1)}})();const q=F(),a=F({billing_method:"1",prompt_ratio:1,completion_ratio:1,fixed_quota:1,data_format:"",is_enable_model_agent:!1,model_agents:[],is_public:!0});(async(r={id:i.query.id})=>{c(!0);try{const{data:o}=await N(r);a.value.billing_method=String(o.billing_method),a.value.prompt_ratio=o.prompt_ratio,a.value.completion_ratio=o.completion_ratio,a.value.fixed_quota=o.fixed_quota,a.value.data_format=String(o.data_format),a.value.is_enable_model_agent=o.is_enable_model_agent,a.value.model_agents=o.model_agents,a.value.is_public=o.is_public}catch{}finally{c(!1)}})();const t=async()=>{var o;await((o=q.value)==null?void 0:o.validate())||v("changeStep","submit",{...a.value})},p=()=>{v("changeStep","backward")};return(r,o)=>{const g=G,h=L,f=E,k=H,m=Z,z=B,K=D,I=A,O=R;return _(),y(O,{ref_key:"formRef",ref:q,model:a.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:l(()=>[e(f,{field:"billing_method",label:r.$t("model.label.billingMethod"),rules:[{required:!0,message:r.$t("model.error.billingMethod.required")}]},{default:l(()=>[e(h,{size:"large"},{default:l(()=>[e(g,{modelValue:a.value.billing_method,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value.billing_method=s),value:"1"},{default:l(()=>[n("\u500D\u7387")]),_:1},8,["modelValue"]),e(g,{modelValue:a.value.billing_method,"onUpdate:modelValue":o[1]||(o[1]=s=>a.value.billing_method=s),value:"2"},{default:l(()=>[n("\u56FA\u5B9A\u989D\u5EA6")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label","rules"]),a.value.billing_method==="1"?(_(),y(f,{key:0,field:"prompt_ratio",label:r.$t("model.label.promptRatio"),rules:[{required:!0,message:r.$t("model.error.promptRatio.required")}]},{default:l(()=>[e(k,{modelValue:a.value.prompt_ratio,"onUpdate:modelValue":o[2]||(o[2]=s=>a.value.prompt_ratio=s),min:.001,placeholder:r.$t("model.placeholder.promptRatio")},null,8,["modelValue","min","placeholder"])]),_:1},8,["label","rules"])):C("",!0),a.value.billing_method==="1"?(_(),y(f,{key:1,field:"completion_ratio",label:r.$t("model.label.completionRatio"),rules:[{required:!0,message:r.$t("model.error.completionRatio.required")}]},{default:l(()=>[e(k,{modelValue:a.value.completion_ratio,"onUpdate:modelValue":o[3]||(o[3]=s=>a.value.completion_ratio=s),min:.001,placeholder:r.$t("model.placeholder.completionRatio")},null,8,["modelValue","min","placeholder"])]),_:1},8,["label","rules"])):C("",!0),a.value.billing_method==="2"?(_(),y(f,{key:2,field:"fixed_quota",label:r.$t("model.label.fixedQuota"),rules:[{required:!0,message:r.$t("model.error.fixedQuota.required")}]},{default:l(()=>[e(k,{modelValue:a.value.fixed_quota,"onUpdate:modelValue":o[4]||(o[4]=s=>a.value.fixed_quota=s),min:0,max:9999999999999,placeholder:r.$t("model.placeholder.fixedQuota")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):C("",!0),e(f,{field:"data_format",label:r.$t("model.label.dataFormat"),rules:[{required:!0,message:r.$t("model.error.dataFormat.required")}]},{default:l(()=>[e(h,{size:"large"},{default:l(()=>[e(g,{modelValue:a.value.data_format,"onUpdate:modelValue":o[5]||(o[5]=s=>a.value.data_format=s),value:"1"},{default:l(()=>[n("\u7EDF\u4E00\u683C\u5F0F")]),_:1},8,["modelValue"]),e(g,{modelValue:a.value.data_format,"onUpdate:modelValue":o[6]||(o[6]=s=>a.value.data_format=s),value:"2"},{default:l(()=>[n("\u5B98\u65B9\u683C\u5F0F")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label","rules"]),e(f,{field:"is_public",label:r.$t("model.label.isPublic"),rules:[{required:!0}]},{default:l(()=>[e(m,{modelValue:a.value.is_public,"onUpdate:modelValue":o[7]||(o[7]=s=>a.value.is_public=s)},null,8,["modelValue"])]),_:1},8,["label"]),e(f,{field:"is_enable_model_agent",label:r.$t("model.label.isEnableModelAgent")},{default:l(()=>[e(m,{modelValue:a.value.is_enable_model_agent,"onUpdate:modelValue":o[8]||(o[8]=s=>a.value.is_enable_model_agent=s)},null,8,["modelValue"])]),_:1},8,["label"]),a.value.is_enable_model_agent?(_(),y(f,{key:3,field:"model_agents",label:r.$t("model.label.modelAgents"),rules:[{required:!0,message:r.$t("model.error.modelAgents.required")}]},{default:l(()=>[e(K,{modelValue:a.value.model_agents,"onUpdate:modelValue":o[9]||(o[9]=s=>a.value.model_agents=s),placeholder:r.$t("model.placeholder.modelAgents"),"max-tag-count":3,multiple:"","allow-clear":""},{default:l(()=>[(_(!0),S(P,null,X(b.value,s=>(_(),y(z,{key:s.id,value:s.id,label:s.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):C("",!0),e(f,null,{default:l(()=>[e(h,null,{default:l(()=>[e(I,{type:"secondary",onClick:p},{default:l(()=>[n(V(r.$t("model.button.prev")),1)]),_:1}),e(I,{type:"primary",onClick:t},{default:l(()=>[n(V(r.$t("model.button.next")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])}}});const pe=U(ie,[["__scopeId","data-v-1c818c0a"]]);const _e={},fe={class:"success-wrap"};function ce($,v){const c=W,i=A,b=L;return _(),S("div",fe,[e(c,{status:"success",title:$.$t("model.success.title"),subtitle:$.$t("model.success.update.subTitle")},null,8,["title","subtitle"]),e(b,{size:16},{default:l(()=>[e(i,{key:"finish",type:"secondary",onClick:v[0]||(v[0]=u=>$.$router.push({name:"ModelList"}))},{default:l(()=>[n(V($.$t("model.button.return")),1)]),_:1}),e(i,{key:"again",type:"primary",onClick:v[1]||(v[1]=u=>$.$router.push({name:"ModelDetail",query:{id:`${$.$route.query.id}`}}))},{default:l(()=>[n(V($.$t("model.button.view")),1)]),_:1})]),_:1})])}const be=U(_e,[["render",ce],["__scopeId","data-v-829f16db"]]),ve={class:"container"},ge={class:"wrapper"},ye={name:"ModelUpdate"},$e=w({...ye,setup($){const{loading:v,setLoading:c}=M(!1),i=F(1),b=F({}),u=async()=>{c(!0);try{await re(b.value),i.value=3,b.value={}}catch{}finally{c(!1)}},q=(a,d)=>{if(typeof a=="number"){i.value=a;return}if(a==="forward"||a==="submit"){if(b.value={...b.value,...d},a==="submit"){u();return}i.value+=1}else a==="backward"&&(i.value-=1)};return(a,d)=>{const t=Q,p=le,r=ae,o=oe,g=te,h=ue,f=de;return _(),S("div",ve,[e(r,{class:"container-breadcrumb"},{default:l(()=>[e(p,null,{default:l(()=>[e(t)]),_:1}),e(p,null,{default:l(()=>[n(V(a.$t("menu.model")),1)]),_:1}),e(p,null,{default:l(()=>[n(V(a.$t("menu.model.update")),1)]),_:1})]),_:1}),e(f,{loading:ee(v),style:{width:"100%"}},{default:l(()=>[e(h,{class:"general-card",bordered:!1},{default:l(()=>[Y("div",ge,[e(g,{current:i.value,"onUpdate:current":d[0]||(d[0]=k=>i.value=k),style:{width:"660px"},"line-less":"",class:"steps"},{default:l(()=>[e(o,{description:a.$t("model.subTitle.baseInfo")},{default:l(()=>[n(V(a.$t("model.title.baseInfo")),1)]),_:1},8,["description"]),e(o,{description:a.$t("model.subTitle.advanced")},{default:l(()=>[n(V(a.$t("model.title.advanced")),1)]),_:1},8,["description"]),e(o,{description:a.$t("model.subTitle.update.finish")},{default:l(()=>[n(V(a.$t("model.title.update.finish")),1)]),_:1},8,["description"])]),_:1},8,["current"]),(_(),y(x,null,[i.value===1?(_(),y(me,{key:0,onChangeStep:q})):i.value===2?(_(),y(pe,{key:1,onChangeStep:q})):i.value===3?(_(),y(be,{key:2,onChangeStep:q})):C("",!0)],1024))])]),_:1})]),_:1},8,["loading"])])}}});const ze=U($e,[["__scopeId","data-v-18d55c77"]]);export{ze as default};