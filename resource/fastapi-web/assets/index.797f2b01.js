import{C as I,_ as U}from"./index.ca71b56b.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css                */import{d as L,e as d,B as N,C as S,aH as e,aG as o,aL as s,aM as u,F as q,u as R,aK as T,aF as D,b1 as E,b2 as K,aS as A,aT as G,bK as H,aU as J,bi as M,b5 as j,bJ as z,bN as O,g as P}from"./arco.eaecec6c.js";import{u as Q}from"./loading.4b5db008.js";import{e as W}from"./corp.0fb6d36e.js";import{f as X}from"./vue.4ed7ee05.js";import"./chart.54f38119.js";import"./base.87fcf6e2.js";const Y={class:"container"},Z={class:"wrapper"},x={name:"CorpCreate"},ee=L({...x,setup(ae){const{proxy:b}=P(),$=X(),m=d(),r=d({name:"",code:"",sort:d(),is_public:!0,remark:""}),{loading:v,setLoading:c}=Q(!1),V=async()=>{var l;if(!await((l=m.value)==null?void 0:l.validate())){c(!0);try{await W(r.value).then(()=>{b.$message.success("\u65B0\u5EFA\u6210\u529F"),$.push({name:"CorpList"})})}catch{}finally{c(!1)}}};return(a,l)=>{const i=I,p=T,g=D,_=E,n=K,h=A,C=G,y=H,f=J,k=M,w=j,B=z,F=O;return N(),S("div",Y,[e(g,{class:"container-breadcrumb"},{default:o(()=>[e(p,null,{default:o(()=>[e(i)]),_:1}),e(p,null,{default:o(()=>[s(u(a.$t("menu.corp")),1)]),_:1}),e(p,null,{default:o(()=>[s(u(a.$t("menu.corp.create")),1)]),_:1})]),_:1}),e(F,{loading:R(v),style:{width:"100%"}},{default:o(()=>[e(B,{class:"general-card",bordered:!1},{default:o(()=>[q("div",Z,[e(w,{ref_key:"formRef",ref:m,model:r.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:o(()=>[e(n,{field:"name",label:a.$t("corp.label.name"),rules:[{required:!0,message:a.$t("corp.error.name.required")},{match:/^.{1,100}$/,message:a.$t("corp.error.name.pattern")}]},{default:o(()=>[e(_,{modelValue:r.value.name,"onUpdate:modelValue":l[0]||(l[0]=t=>r.value.name=t),placeholder:a.$t("corp.placeholder.name"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(n,{field:"code",label:a.$t("corp.label.code"),rules:[{required:!0,message:a.$t("corp.error.code.required")},{match:/^.{1,100}$/,message:a.$t("corp.error.code.pattern")}]},{default:o(()=>[e(_,{modelValue:r.value.code,"onUpdate:modelValue":l[1]||(l[1]=t=>r.value.code=t),placeholder:a.$t("corp.placeholder.code"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(n,{field:"sort",label:a.$t("corp.label.sort")},{default:o(()=>[e(h,{modelValue:r.value.sort,"onUpdate:modelValue":l[2]||(l[2]=t=>r.value.sort=t),placeholder:a.$t("corp.placeholder.sort"),precision:0,min:-10,max:999},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(n,{field:"is_public",label:a.$t("corp.label.is_public")},{default:o(()=>[e(C,{modelValue:r.value.is_public,"onUpdate:modelValue":l[3]||(l[3]=t=>r.value.is_public=t)},null,8,["modelValue"])]),_:1},8,["label"]),e(n,{field:"remark",label:a.$t("corp.label.remark")},{default:o(()=>[e(y,{modelValue:r.value.remark,"onUpdate:modelValue":l[4]||(l[4]=t=>r.value.remark=t),placeholder:a.$t("corp.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(n,null,{default:o(()=>[e(k,null,{default:o(()=>[e(f,{type:"secondary",onClick:l[5]||(l[5]=t=>a.$router.push({name:"CorpList"}))},{default:o(()=>[s(u(a.$t("corp.button.cancel")),1)]),_:1}),e(f,{type:"primary",onClick:V},{default:o(()=>[s(u(a.$t("corp.button.submit")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])])]),_:1})]),_:1},8,["loading"])])}}});const _e=U(ee,[["__scopeId","data-v-a205db88"]]);export{_e as default};
