import{C as U,_ as L}from"./index.6b5e2a5c.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                */import{d as N,e as d,B as S,C as q,aH as e,aG as l,aL as n,aM as u,F as f,u as R,aK as T,aF as D,b1 as E,b2 as A,aS as G,aT as H,bN as J,aU as K,bi as M,b5 as O,bJ as j,bO as z,g as P}from"./arco.931e3328.js";import{u as Q}from"./loading.244b3590.js";import{e as W}from"./corp.c622a9fb.js";import{f as X}from"./vue.49cbc69b.js";import"./chart.2d48c0df.js";import"./base.87fcf6e2.js";const Y={class:"container"},Z={class:"wrapper"},x={class:"submit-btn"},ee={name:"CorpCreate"},ae=N({...ee,setup(oe){const{proxy:$}=P(),v=X(),m=d(),r=d({name:"",code:"",sort:d(),is_public:!0,remark:""}),{loading:V,setLoading:c}=Q(!1),g=async()=>{var o;if(!await((o=m.value)==null?void 0:o.validate())){c(!0);try{await W(r.value).then(()=>{$.$message.success("\u65B0\u5EFA\u6210\u529F"),v.push({name:"CorpList"})})}catch{}finally{c(!1)}}};return(a,o)=>{const i=U,p=T,h=D,_=E,s=A,y=G,C=H,k=J,b=K,w=M,B=O,F=j,I=z;return S(),q("div",Y,[e(h,{class:"container-breadcrumb"},{default:l(()=>[e(p,null,{default:l(()=>[e(i)]),_:1}),e(p,null,{default:l(()=>[n(u(a.$t("menu.corp")),1)]),_:1}),e(p,null,{default:l(()=>[n(u(a.$t("menu.corp.create")),1)]),_:1})]),_:1}),e(I,{loading:R(V),style:{width:"100%"}},{default:l(()=>[e(F,{class:"general-card","body-style":{padding:"0 20px 20px 20px"},bordered:!1},{default:l(()=>[f("div",Z,[e(B,{ref_key:"formRef",ref:m,model:r.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:l(()=>[e(s,{field:"name",label:a.$t("corp.label.name"),rules:[{required:!0,message:a.$t("corp.error.name.required")},{match:/^.{1,100}$/,message:a.$t("corp.error.name.pattern")}]},{default:l(()=>[e(_,{modelValue:r.value.name,"onUpdate:modelValue":o[0]||(o[0]=t=>r.value.name=t),placeholder:a.$t("corp.placeholder.name"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(s,{field:"code",label:a.$t("corp.label.code"),rules:[{required:!0,message:a.$t("corp.error.code.required")},{match:/^.{1,100}$/,message:a.$t("corp.error.code.pattern")}]},{default:l(()=>[e(_,{modelValue:r.value.code,"onUpdate:modelValue":o[1]||(o[1]=t=>r.value.code=t),placeholder:a.$t("corp.placeholder.code"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(s,{field:"sort",label:a.$t("corp.label.sort")},{default:l(()=>[e(y,{modelValue:r.value.sort,"onUpdate:modelValue":o[2]||(o[2]=t=>r.value.sort=t),placeholder:a.$t("corp.placeholder.sort"),precision:0,min:-10,max:999},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(s,{field:"is_public",label:a.$t("corp.label.is_public")},{default:l(()=>[e(C,{modelValue:r.value.is_public,"onUpdate:modelValue":o[3]||(o[3]=t=>r.value.is_public=t)},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{field:"remark",label:a.$t("corp.label.remark")},{default:l(()=>[e(k,{modelValue:r.value.remark,"onUpdate:modelValue":o[4]||(o[4]=t=>r.value.remark=t),placeholder:a.$t("corp.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(w,null,{default:l(()=>[f("div",x,[e(b,{type:"secondary",onClick:o[5]||(o[5]=t=>a.$router.push({name:"CorpList"}))},{default:l(()=>[n(u(a.$t("button.cancel")),1)]),_:1}),e(b,{type:"primary",onClick:g},{default:l(()=>[n(u(a.$t("button.submit")),1)]),_:1})])]),_:1})]),_:1},8,["model"])])]),_:1})]),_:1},8,["loading"])])}}});const be=L(ae,[["__scopeId","data-v-0e7a1c39"]]);export{be as default};
