import{A as E,_ as G}from"./index.755b51fd.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css              *//* empty css              *//* empty css                *//* empty css              *//* empty css               *//* empty css               */import{d as J,e as f,B as _,C as g,aH as e,aG as t,aL as r,aM as b,F as y,aJ as K,aI as P,aD as v,u as i,aE as h,bP as n,aK as H,aF as O,b1 as W,b2 as X,bA as Y,bB as Z,aT as ee,aS as ae,bQ as le,bR as te,bS as oe,bK as ue,aU as se,bi as re,b5 as ie,bJ as pe,bL as de,g as ne}from"./arco.06d431a4.js";import{u as me}from"./loading.403a6ba1.js";import{h as _e,f as ce}from"./vue.4e689e11.js";import{q as be}from"./common.4956e59d.js";import{e as fe,f as ve}from"./app.01965b5b.js";import{q as qe}from"./model.686141d5.js";import"./chart.ac3cbee9.js";import"./base.87fcf6e2.js";const ye={class:"container"},he={class:"wrapper"},$e={class:"submit-btn"},ke={name:"AppUpdate"},Ve=J({...ke,setup(ge){const{loading:w,setLoading:m}=me(!1),{proxy:C}=ne(),B=_e(),L=ce(),$=f([]);(async()=>{m(!0);try{const{data:l}=await qe();$.value=l.items}catch{}finally{m(!1)}})();const k=f(),a=f({id:"",name:"",remark:"",status:1,models:[],is_limit_quota:!1,quota:f(),quota_expires_at:"",ip_whitelist:"",ip_blacklist:""}),R=async()=>{var o;if(!await((o=k.value)==null?void 0:o.validate())){m(!0);try{await fe(a.value).then(()=>{C.$message.success("\u66F4\u65B0\u6210\u529F"),L.push({name:"AppList"})})}catch{}finally{m(!1)}}};(async(l={id:B.query.id})=>{var o,c;m(!0);try{const{data:s}=await ve(l);a.value.id=s.id,a.value.name=s.name,a.value.remark=s.remark,a.value.status=s.status,a.value.models=s.models,a.value.is_limit_quota=s.is_limit_quota,a.value.quota=s.quota,a.value.quota_expires_at=s.quota_expires_at,a.value.ip_whitelist=((o=s==null?void 0:s.ip_whitelist)==null?void 0:o.join(`
`))||"",a.value.ip_blacklist=((c=s==null?void 0:s.ip_blacklist)==null?void 0:c.join(`
`))||""}catch{}finally{m(!1)}})();const U=l=>{a.value.quota=l*5e5};return(l,o)=>{const c=E,s=H,A=O,F=W,p=X,I=Y,D=Z,S=ee,x=ae,d=le,N=te,M=oe,q=ue,V=se,Q=re,j=ie,T=pe,z=de;return _(),g("div",ye,[e(A,{class:"container-breadcrumb"},{default:t(()=>[e(s,null,{default:t(()=>[e(c)]),_:1}),e(s,null,{default:t(()=>[r(b(l.$t("menu.app")),1)]),_:1}),e(s,null,{default:t(()=>[r(b(l.$t("menu.app.update")),1)]),_:1})]),_:1}),e(z,{loading:i(w),style:{width:"100%"}},{default:t(()=>[e(T,{class:"general-card","body-style":{padding:"0 20px 20px 20px"},bordered:!1},{default:t(()=>[y("div",he,[e(j,{ref_key:"formRef",ref:k,model:a.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:t(()=>[e(p,{field:"name",label:l.$t("app.label.name"),rules:[{required:!0,message:l.$t("app.error.name.required")},{match:/^.{1,100}$/,message:l.$t("app.error.name.pattern")}]},{default:t(()=>[e(F,{modelValue:a.value.name,"onUpdate:modelValue":o[0]||(o[0]=u=>a.value.name=u),placeholder:l.$t("app.placeholder.name")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(p,{field:"models",label:l.$t("app.label.models")},{default:t(()=>[e(D,{modelValue:a.value.models,"onUpdate:modelValue":o[1]||(o[1]=u=>a.value.models=u),placeholder:l.$t("app.placeholder.models"),"max-tag-count":3,multiple:"","allow-search":"","allow-clear":""},{default:t(()=>[(_(!0),g(K,null,P($.value,u=>(_(),v(I,{key:u.id,value:u.id,label:u.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),e(p,{field:"is_limit_quota",label:l.$t("app.label.isLimitQuota")},{default:t(()=>[e(S,{modelValue:a.value.is_limit_quota,"onUpdate:modelValue":o[2]||(o[2]=u=>a.value.is_limit_quota=u)},null,8,["modelValue"])]),_:1},8,["label"]),a.value.is_limit_quota?(_(),v(p,{key:0,field:"quota",label:l.$t("app.label.quota"),rules:[{required:!0,message:l.$t("app.error.quota.required")}]},{default:t(()=>[e(x,{modelValue:a.value.quota,"onUpdate:modelValue":o[3]||(o[3]=u=>a.value.quota=u),placeholder:l.$t("app.placeholder.quota"),precision:0,min:0,max:9999999999999,style:{width:"492px","margin-right":"10px"}},null,8,["modelValue","placeholder"]),y("div",null," $"+b(a.value.quota?i(be)(a.value.quota):"0"),1)]),_:1},8,["label","rules"])):h("",!0),a.value.is_limit_quota?(_(),v(p,{key:1},{default:t(()=>[e(N,{type:"button",onChange:U},{default:t(()=>[e(d,{value:1},{default:t(()=>[r(" $1 ")]),_:1}),e(d,{value:5},{default:t(()=>[r(" $5 ")]),_:1}),e(d,{value:10},{default:t(()=>[r(" $10 ")]),_:1}),e(d,{value:20},{default:t(()=>[r(" $20 ")]),_:1}),e(d,{value:50},{default:t(()=>[r(" $50 ")]),_:1}),e(d,{value:100},{default:t(()=>[r(" $100 ")]),_:1}),e(d,{value:200},{default:t(()=>[r(" $200 ")]),_:1}),e(d,{value:500},{default:t(()=>[r(" $500 ")]),_:1}),e(d,{value:1e3},{default:t(()=>[r(" $1000 ")]),_:1})]),_:1},8,["onChange"])]),_:1})):h("",!0),a.value.is_limit_quota?(_(),v(p,{key:2,field:"quota_expires_at",label:l.$t("app.label.quota_expires_at")},{default:t(()=>[e(M,{modelValue:a.value.quota_expires_at,"onUpdate:modelValue":o[4]||(o[4]=u=>a.value.quota_expires_at=u),placeholder:l.$t("app.placeholder.quota_expires_at"),"time-picker-props":{defaultValue:"23:59:59"},"disabled-date":u=>i(n)(u).isBefore(i(n)()),style:{width:"100%"},"show-time":"",shortcuts:[{label:"1",value:()=>i(n)().add(1,"day")},{label:"7",value:()=>i(n)().add(7,"day")},{label:"15",value:()=>i(n)().add(15,"day")},{label:"30",value:()=>i(n)().add(30,"day")},{label:"90",value:()=>i(n)().add(90,"day")},{label:"180",value:()=>i(n)().add(180,"day")},{label:"365",value:()=>i(n)().add(365,"day")}]},null,8,["modelValue","placeholder","disabled-date","shortcuts"])]),_:1},8,["label"])):h("",!0),e(p,{field:"ip_whitelist",label:l.$t("app.label.ip_whitelist")},{default:t(()=>[e(q,{modelValue:a.value.ip_whitelist,"onUpdate:modelValue":o[5]||(o[5]=u=>a.value.ip_whitelist=u),placeholder:l.$t("app.placeholder.ip_whitelist"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(p,{field:"ip_blacklist",label:l.$t("app.label.ip_blacklist")},{default:t(()=>[e(q,{modelValue:a.value.ip_blacklist,"onUpdate:modelValue":o[6]||(o[6]=u=>a.value.ip_blacklist=u),placeholder:l.$t("app.placeholder.ip_blacklist"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(p,{field:"remark",label:l.$t("app.label.remark"),rules:[{required:!1}]},{default:t(()=>[e(q,{modelValue:a.value.remark,"onUpdate:modelValue":o[7]||(o[7]=u=>a.value.remark=u),placeholder:l.$t("app.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(Q,null,{default:t(()=>[y("div",$e,[e(V,{type:"secondary",onClick:o[8]||(o[8]=u=>l.$router.push({name:"AppList"}))},{default:t(()=>[r(b(l.$t("form.button.cancel")),1)]),_:1}),e(V,{type:"primary",onClick:R},{default:t(()=>[r(b(l.$t("form.button.submit")),1)]),_:1})])]),_:1})]),_:1},8,["model"])])]),_:1})]),_:1},8,["loading"])])}}});const He=G(Ve,[["__scopeId","data-v-b1102817"]]);export{He as default};
