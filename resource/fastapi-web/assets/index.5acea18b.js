import{B as G,_ as H}from"./index.c0f50ad7.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css                *//* empty css              *//* empty css                *//* empty css               *//* empty css                */import{d as J,e as d,B as m,C as c,aH as t,aG as r,aL as u,aM as i,F as B,aJ as C,aI as L,aD as _,aE as P,u as Q,aK as j,aF as W,bE as X,bA as Y,bB as Z,b2 as x,b1 as ee,bO as ae,bP as le,bi as te,aS as oe,bQ as re,aT as se,aU as ne,b5 as ue,bI as de,bR as me,g as ie}from"./arco.e79a5475.js";import{u as pe}from"./loading.d06bc570.js";import{f as ce,h as _e}from"./vue.2a7862c7.js";import{e as ye,c as fe}from"./key.e289002c.js";import{q as be}from"./corp.d247a35f.js";import{a as ge}from"./model.82ed5b80.js";import{f as ve}from"./agent.68373156.js";import"./chart.f33778db.js";import"./base.87fcf6e2.js";const ke={class:"container"},he={class:"wrapper"},Ve={class:"submit-btn"},we={name:"KeyUpdate"},$e=J({...we,setup(qe){const{loading:U,setLoading:s}=pe(!1),{proxy:I}=ie(),D=ce(),F=_e(),y=d([]);(async()=>{s(!0);try{const{data:e}=await be();y.value=e.items}catch{}finally{s(!1)}})();const f=d([]);(async()=>{s(!0);try{const{data:e}=await ge();f.value=e.items}catch{}finally{s(!1)}})();const b=d([]);(async()=>{s(!0);try{const{data:e}=await ve();b.value=e.items}catch{}finally{s(!1)}})();const g=d(),l=d({id:"",corp:"",key:"",remark:"",lb_strategy:"1",weight:d(20),status:1,models:[],model_agents:[],is_agents_only:!1}),M=async()=>{var a;if(!await((a=g.value)==null?void 0:a.validate())){s(!0);try{await ye(l.value).then(()=>{I.$message.success("\u66F4\u65B0\u6210\u529F"),D.push({name:"ModelKeyList"})})}catch{}finally{s(!1)}}};return(async(e={id:F.query.id})=>{s(!0);try{const{data:a}=await fe(e);l.value.id=a.id,l.value.corp=a.corp,l.value.key=a.key,l.value.remark=a.remark,l.value.status=a.status,l.value.lb_strategy=String(a.lb_strategy),l.value.weight=a.weight,l.value.models=a.models,l.value.model_agents=a.model_agents,l.value.is_agents_only=a.is_agents_only}catch{}finally{s(!1)}})(),(e,a)=>{const v=G,p=j,S=W,k=X,h=Y,V=Z,n=x,A=ee,K=ae,w=le,$=te,R=oe,T=re,E=se,q=ne,N=ue,O=de,z=me;return m(),c("div",ke,[t(S,{class:"container-breadcrumb"},{default:r(()=>[t(p,null,{default:r(()=>[t(v)]),_:1}),t(p,null,{default:r(()=>[u(i(e.$t("menu.key")),1)]),_:1}),t(p,null,{default:r(()=>[u(i(e.$t("menu.key.update")),1)]),_:1})]),_:1}),t(z,{loading:Q(U),style:{width:"100%"}},{default:r(()=>[t(O,{class:"general-card","body-style":{padding:"0 20px 20px 20px"},bordered:!1},{default:r(()=>[B("div",he,[t(N,{ref_key:"formRef",ref:g,model:l.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:r(()=>[t(k,{orientation:"left"},{default:r(()=>[u(i(e.$t("model.title.baseInfo")),1)]),_:1}),t(n,{field:"corp",label:e.$t("key.label.corp"),rules:[{required:!0,message:e.$t("key.error.corp.required")}]},{default:r(()=>[t(V,{modelValue:l.value.corp,"onUpdate:modelValue":a[0]||(a[0]=o=>l.value.corp=o),placeholder:e.$t("key.placeholder.corp"),"allow-search":""},{default:r(()=>[(m(!0),c(C,null,L(y.value,o=>(m(),_(h,{key:o.id,value:o.id,label:o.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),t(n,{field:"key",label:e.$t("key.label.key"),rules:[{required:!0,message:e.$t("key.error.key.required")}]},{default:r(()=>[t(A,{modelValue:l.value.key,"onUpdate:modelValue":a[1]||(a[1]=o=>l.value.key=o),placeholder:e.$t("key.placeholder.update.key"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),t(n,{field:"remark",label:e.$t("key.label.remark"),rules:[{required:!1}]},{default:r(()=>[t(K,{modelValue:l.value.remark,"onUpdate:modelValue":a[2]||(a[2]=o=>l.value.remark=o),placeholder:e.$t("key.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(k,{orientation:"left"},{default:r(()=>[u(i(e.$t("model.title.advanced")),1)]),_:1}),t(n,{field:"lb_strategy",label:e.$t("model.agent.label.lb_strategy"),rules:[{required:!0}]},{default:r(()=>[t($,{size:"large"},{default:r(()=>[t(w,{modelValue:l.value.lb_strategy,"onUpdate:modelValue":a[3]||(a[3]=o=>l.value.lb_strategy=o),value:"1","default-checked":!0},{default:r(()=>[u(" \u8F6E\u8BE2 ")]),_:1},8,["modelValue"]),t(w,{modelValue:l.value.lb_strategy,"onUpdate:modelValue":a[4]||(a[4]=o=>l.value.lb_strategy=o),value:"2"},{default:r(()=>[u("\u6743\u91CD")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label"]),l.value.lb_strategy==="2"?(m(),_(n,{key:0,field:"weight",label:e.$t("model.agent.label.weight"),rules:[{required:l.value.lb_strategy==="2",message:e.$t("model.agent.error.weight.required")}]},{default:r(()=>[t(R,{modelValue:l.value.weight,"onUpdate:modelValue":a[5]||(a[5]=o=>l.value.weight=o),precision:0,min:0,max:999,placeholder:e.$t("model.agent.placeholder.weight")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):P("",!0),t(n,{field:"models",label:e.$t("key.label.models")},{default:r(()=>[t(T,{modelValue:l.value.models,"onUpdate:modelValue":a[6]||(a[6]=o=>l.value.models=o),"allow-search":!0,"allow-clear":!0,"tree-checkable":!0,"tree-checked-strategy":"child",data:f.value,placeholder:e.$t("key.placeholder.models"),"max-tag-count":3},null,8,["modelValue","data","placeholder"])]),_:1},8,["label"]),t(n,{field:"model_agents",label:e.$t("key.label.modelAgents")},{default:r(()=>[t(V,{modelValue:l.value.model_agents,"onUpdate:modelValue":a[7]||(a[7]=o=>l.value.model_agents=o),placeholder:e.$t("key.placeholder.modelAgents"),"max-tag-count":3,multiple:"","allow-search":"","allow-clear":""},{default:r(()=>[(m(!0),c(C,null,L(b.value,o=>(m(),_(h,{key:o.id,value:o.id,label:o.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{field:"is_agents_only",label:e.$t("key.label.isAgentsOnly")},{default:r(()=>[t(E,{modelValue:l.value.is_agents_only,"onUpdate:modelValue":a[8]||(a[8]=o=>l.value.is_agents_only=o)},null,8,["modelValue"])]),_:1},8,["label"]),t($,null,{default:r(()=>[B("div",Ve,[t(q,{type:"secondary",onClick:a[9]||(a[9]=o=>e.$router.push({name:"ModelKeyList"}))},{default:r(()=>[u(i(e.$t("button.cancel")),1)]),_:1}),t(q,{type:"primary",onClick:M},{default:r(()=>[u(i(e.$t("button.submit")),1)]),_:1})])]),_:1})]),_:1},8,["model"])])]),_:1})]),_:1},8,["loading"])])}}});const aa=H($e,[["__scopeId","data-v-61cd4ae7"]]);export{aa as default};
