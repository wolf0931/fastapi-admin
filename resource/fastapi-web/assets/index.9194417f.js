import{B as T,_ as J}from"./index.6b5e2a5c.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css                */import{d as z,e as i,B as n,C as p,aH as l,aG as s,aL as d,aM as m,F as q,aJ as y,aI as b,aD as v,u as E,aK as G,aF as H,bF as j,bA as P,bB as Q,b2 as W,b1 as X,bN as Y,aT as Z,aU as x,bi as ee,b5 as ae,bJ as le,bO as te,g as oe}from"./arco.931e3328.js";import{u as se}from"./loading.244b3590.js";import{f as re,h as ne}from"./vue.49cbc69b.js";import{e as ue,c as de}from"./key.492a45f4.js";import{q as me}from"./corp.c622a9fb.js";import{q as ie}from"./model.bc7b5d49.js";import{f as pe}from"./agent.4cfe43e9.js";import"./chart.2d48c0df.js";import"./base.87fcf6e2.js";const ce={class:"container"},_e={class:"wrapper"},fe={class:"submit-btn"},ye={name:"KeyUpdate"},be=z({...ye,setup(ve){const{loading:B,setLoading:r}=se(!1),{proxy:C}=oe(),F=re(),M=ne(),g=i([]);(async()=>{r(!0);try{const{data:e}=await me();g.value=e.items}catch{}finally{r(!1)}})();const k=i([]);(async()=>{r(!0);try{const{data:e}=await ie();k.value=e.items}catch{}finally{r(!1)}})();const $=i([]);(async()=>{r(!0);try{const{data:e}=await pe();$.value=e.items}catch{}finally{r(!1)}})();const h=i(),o=i({id:"",corp:"",key:"",remark:"",status:1,models:[],model_agents:[],is_agents_only:!1}),U=async()=>{var a;if(!await((a=h.value)==null?void 0:a.validate())){r(!0);try{await ue(o.value).then(()=>{C.$message.success("\u66F4\u65B0\u6210\u529F"),F.push({name:"ModelKeyList"})})}catch{}finally{r(!1)}}};return(async(e={id:M.query.id})=>{r(!0);try{const{data:a}=await de(e);o.value.id=a.id,o.value.corp=a.corp,o.value.key=a.key,o.value.remark=a.remark,o.value.status=a.status,o.value.models=a.models,o.value.model_agents=a.model_agents,o.value.is_agents_only=a.is_agents_only}catch{}finally{r(!1)}})(),(e,a)=>{const V=T,c=G,A=H,w=j,_=P,f=Q,u=W,I=X,K=Y,D=Z,L=x,R=ee,S=ae,N=le,O=te;return n(),p("div",ce,[l(A,{class:"container-breadcrumb"},{default:s(()=>[l(c,null,{default:s(()=>[l(V)]),_:1}),l(c,null,{default:s(()=>[d(m(e.$t("menu.key")),1)]),_:1}),l(c,null,{default:s(()=>[d(m(e.$t("menu.key.update")),1)]),_:1})]),_:1}),l(O,{loading:E(B),style:{width:"100%"}},{default:s(()=>[l(N,{class:"general-card","body-style":{padding:"0 20px 20px 20px"},bordered:!1},{default:s(()=>[q("div",_e,[l(S,{ref_key:"formRef",ref:h,model:o.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:s(()=>[l(w,{orientation:"left"},{default:s(()=>[d(m(e.$t("model.title.baseInfo")),1)]),_:1}),l(u,{field:"corp",label:e.$t("key.label.corp"),rules:[{required:!0,message:e.$t("key.error.corp.required")}]},{default:s(()=>[l(f,{modelValue:o.value.corp,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value.corp=t),placeholder:e.$t("key.placeholder.corp"),"allow-search":""},{default:s(()=>[(n(!0),p(y,null,b(g.value,t=>(n(),v(_,{key:t.id,value:t.id,label:t.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(u,{field:"key",label:e.$t("key.label.key"),rules:[{required:!0,message:e.$t("key.error.key.required")}]},{default:s(()=>[l(I,{modelValue:o.value.key,"onUpdate:modelValue":a[1]||(a[1]=t=>o.value.key=t),placeholder:e.$t("key.placeholder.update.key"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(u,{field:"remark",label:e.$t("key.label.remark"),rules:[{required:!1}]},{default:s(()=>[l(K,{modelValue:o.value.remark,"onUpdate:modelValue":a[2]||(a[2]=t=>o.value.remark=t),placeholder:e.$t("key.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(w,{orientation:"left"},{default:s(()=>[d(m(e.$t("model.title.advanced")),1)]),_:1}),l(u,{field:"models",label:e.$t("key.label.models"),rules:[{required:!1}]},{default:s(()=>[l(f,{modelValue:o.value.models,"onUpdate:modelValue":a[3]||(a[3]=t=>o.value.models=t),placeholder:e.$t("key.placeholder.models"),"max-tag-count":3,multiple:"","allow-search":"","allow-clear":""},{default:s(()=>[(n(!0),p(y,null,b(k.value,t=>(n(),v(_,{key:t.id,value:t.id,label:t.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(u,{field:"model_agents",label:e.$t("key.label.modelAgents")},{default:s(()=>[l(f,{modelValue:o.value.model_agents,"onUpdate:modelValue":a[4]||(a[4]=t=>o.value.model_agents=t),placeholder:e.$t("key.placeholder.modelAgents"),"max-tag-count":3,multiple:"","allow-search":"","allow-clear":""},{default:s(()=>[(n(!0),p(y,null,b($.value,t=>(n(),v(_,{key:t.id,value:t.id,label:t.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(u,{field:"is_agents_only",label:e.$t("key.label.isAgentsOnly")},{default:s(()=>[l(D,{modelValue:o.value.is_agents_only,"onUpdate:modelValue":a[5]||(a[5]=t=>o.value.is_agents_only=t)},null,8,["modelValue"])]),_:1},8,["label"]),l(R,null,{default:s(()=>[q("div",fe,[l(L,{type:"secondary",onClick:a[6]||(a[6]=t=>e.$router.push({name:"ModelKeyList"}))},{default:s(()=>[d(m(e.$t("button.cancel")),1)]),_:1}),l(L,{type:"primary",onClick:U},{default:s(()=>[d(m(e.$t("button.submit")),1)]),_:1})])]),_:1})]),_:1},8,["model"])])]),_:1})]),_:1},8,["loading"])])}}});const Ee=J(be,[["__scopeId","data-v-9e14927b"]]);export{Ee as default};
