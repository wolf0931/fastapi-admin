import{u as be,E as ve,o as ge,x as he,I as ye,y as we,_ as Ie}from"./index.1c6e070a.js";/* empty css               *//* empty css               *//* empty css              *//* empty css              *//* empty css                *//* empty css                *//* empty css               *//* empty css              */import{c as D,S as $e}from"./sortable.esm.fecf72a2.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css              */import{d as Ve,r as M,e as f,c as y,w as ke,B as b,C as h,aH as e,aG as a,aL as u,aM as c,u as w,F as p,aJ as O,aI as j,aD as Ce,D as Se,n as ze,aK as xe,aF as De,bA as Be,b2 as Te,bB as Ae,b1 as Ne,bD as Fe,bE as Ue,b5 as Pe,bF as Ee,ab as Le,aU as Me,bi as Oe,bj as je,bl as Ge,bm as Re,b4 as He,bG as Je,bI as Xe,bJ as Ze}from"./arco.4feddc20.js";import{u as qe}from"./loading.274ad4c6.js";import{a as Ke}from"./model.4a181a70.js";import"./chart.a7e777d6.js";import"./vue.05d7acac.js";import"./base.87fcf6e2.js";const Qe={class:"container"},We={class:"action-icon"},Ye={class:"action-icon"},ea={id:"tableSetting"},aa={style:{"margin-right":"4px",cursor:"move"}},la={class:"title"},ta={key:0,class:"circle red"},oa={key:1,class:"circle"},na={name:"ModelList"},sa=Ve({...na,setup(ca){const G=M({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),B=()=>({corp:"",name:"",model:"",type:f(),status:f(),created_at:[]}),{loading:R,setLoading:T}=qe(!0),{t:n}=be(),A=f([]),s=f(B()),_=f([]),I=f([]),k=f("medium"),v={current:1,pageSize:10,showTotal:!0,showPageSize:!0},$=M({...v}),H=y(()=>[{name:n("searchTable.size.mini"),value:"mini"},{name:n("searchTable.size.small"),value:"small"},{name:n("searchTable.size.medium"),value:"medium"},{name:n("searchTable.size.large"),value:"large"}]),J=y(()=>[{title:n("model.columns.corp"),dataIndex:"corp",slotName:"corp",align:"center",width:110},{title:n("model.columns.name"),dataIndex:"name",slotName:"name",align:"center"},{title:n("model.columns.model"),dataIndex:"model",slotName:"model",align:"center"},{title:n("model.columns.type"),dataIndex:"type",slotName:"type",align:"center"},{title:n("model.columns.prompt_price"),dataIndex:"prompt_price",slotName:"prompt_price",align:"center"},{title:n("model.columns.completion_price"),dataIndex:"completion_price",slotName:"completion_price",align:"center"},{title:n("model.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:75},{title:n("model.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:132}]),X=y(()=>[{label:n("model.dict.corp.OpenAI"),value:"OpenAI"},{label:n("model.dict.corp.Baidu"),value:"Baidu"},{label:n("model.dict.corp.Xfyun"),value:"Xfyun"},{label:n("model.dict.corp.Aliyun"),value:"Aliyun"},{label:n("model.dict.corp.ZhipuAI"),value:"ZhipuAI"},{label:n("model.dict.corp.Google"),value:"Google"},{label:n("model.dict.corp.DeepSeek"),value:"DeepSeek"},{label:n("model.dict.corp.Midjourney"),value:"Midjourney"}]),Z=y(()=>[{label:n("model.dict.type.1"),value:1},{label:n("model.dict.type.2"),value:2},{label:n("model.dict.type.3"),value:3},{label:n("model.dict.type.4"),value:4}]),q=y(()=>[{label:n("model.dict.status.1"),value:1},{label:n("model.dict.status.2"),value:2}]),V=async(l={...v})=>{T(!0);try{const{data:o}=await Ke(l);A.value=o.items,$.current=l.current,$.pageSize=l.pageSize,$.total=o.paging.total}catch{}finally{T(!1)}},N=()=>{V({...v,...s.value})},K=l=>{V({...v,...s.value,current:l})},Q=l=>{v.pageSize=l,V({...v,...s.value})};V();const W=()=>{s.value=B()},Y=(l,o)=>{k.value=l},ee=(l,o,d)=>{l?_.value.splice(d,0,o):_.value=I.value.filter(i=>i.dataIndex!==o.dataIndex)},F=(l,o,d,i=!1)=>{const r=i?D(l):l;return o>-1&&d>-1&&r.splice(o,1,r.splice(d,1,r[o]).pop()),r},ae=l=>{l&&ze(()=>{const o=document.getElementById("tableSetting");new $e(o,{onEnd(d){const{oldIndex:i,newIndex:r}=d;F(_.value,i,r),F(I.value,i,r)}})})};return ke(()=>J.value,l=>{_.value=D(l),_.value.forEach((o,d)=>{o.checked=!0}),I.value=D(_.value)},{deep:!0,immediate:!0}),(l,o)=>{const d=ve,i=xe,r=De,C=Be,g=Te,m=Ae,U=Ne,le=Fe,S=Ue,te=Pe,P=Ee,oe=Le,E=Me,L=ge,ne=Oe,z=je,se=he,ce=Ge,de=Re,ie=ye,re=we,me=He,ue=Je,pe=Xe,_e=Ze;return b(),h("div",Qe,[e(r,{class:"container-breadcrumb"},{default:a(()=>[e(i,null,{default:a(()=>[e(d)]),_:1}),e(i,null,{default:a(()=>[u(c(l.$t("menu.my.model")),1)]),_:1})]),_:1}),e(_e,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:a(()=>[e(S,null,{default:a(()=>[e(m,{flex:1},{default:a(()=>[e(te,{model:s.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:a(()=>[e(S,{gutter:16},{default:a(()=>[e(m,{span:8},{default:a(()=>[e(g,{field:"corp",label:l.$t("model.form.corp")},{default:a(()=>[e(C,{modelValue:s.value.corp,"onUpdate:modelValue":o[0]||(o[0]=t=>s.value.corp=t),options:w(X),placeholder:l.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),e(m,{span:8},{default:a(()=>[e(g,{field:"name",label:l.$t("model.form.name")},{default:a(()=>[e(U,{modelValue:s.value.name,"onUpdate:modelValue":o[1]||(o[1]=t=>s.value.name=t),placeholder:l.$t("model.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(m,{span:8},{default:a(()=>[e(g,{field:"model",label:l.$t("model.form.model")},{default:a(()=>[e(U,{modelValue:s.value.model,"onUpdate:modelValue":o[2]||(o[2]=t=>s.value.model=t),placeholder:l.$t("model.form.model.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(m,{span:8},{default:a(()=>[e(g,{field:"type",label:l.$t("model.form.type")},{default:a(()=>[e(C,{modelValue:s.value.type,"onUpdate:modelValue":o[3]||(o[3]=t=>s.value.type=t),options:w(Z),placeholder:l.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),e(m,{span:8},{default:a(()=>[e(g,{field:"status",label:l.$t("model.form.status")},{default:a(()=>[e(C,{modelValue:s.value.status,"onUpdate:modelValue":o[4]||(o[4]=t=>s.value.status=t),options:w(q),placeholder:l.$t("model.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),e(m,{span:8},{default:a(()=>[e(g,{field:"created_at",label:l.$t("model.form.created_at")},{default:a(()=>[e(le,{modelValue:s.value.created_at,"onUpdate:modelValue":o[5]||(o[5]=t=>s.value.created_at=t),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(P,{style:{height:"84px"},direction:"vertical"}),e(m,{flex:"86px",style:{"text-align":"right"}},{default:a(()=>[e(ne,{direction:"vertical",size:18},{default:a(()=>[e(E,{type:"primary",onClick:N},{icon:a(()=>[e(oe)]),default:a(()=>[u(" "+c(l.$t("model.form.search")),1)]),_:1}),e(E,{onClick:W},{icon:a(()=>[e(L)]),default:a(()=>[u(" "+c(l.$t("model.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(P,{style:{"margin-top":"0"}}),e(S,{style:{"margin-bottom":"16px"}},{default:a(()=>[e(m,{span:24,style:{display:"flex","align-items":"center","justify-content":"end"}},{default:a(()=>[e(z,{content:l.$t("searchTable.actions.refresh")},{default:a(()=>[p("div",{class:"action-icon",onClick:N},[e(L,{size:"18"})])]),_:1},8,["content"]),e(de,{onSelect:Y},{content:a(()=>[(b(!0),h(O,null,j(w(H),t=>(b(),Ce(ce,{key:t.value,value:t.value,class:Se({active:t.value===k.value})},{default:a(()=>[p("span",null,c(t.name),1)]),_:2},1032,["value","class"]))),128))]),default:a(()=>[e(z,{content:l.$t("searchTable.actions.density")},{default:a(()=>[p("div",We,[e(se,{size:"18"})])]),_:1},8,["content"])]),_:1}),e(z,{content:l.$t("searchTable.actions.columnSetting")},{default:a(()=>[e(ue,{trigger:"click",position:"bl",onPopupVisibleChange:ae},{content:a(()=>[p("div",ea,[(b(!0),h(O,null,j(I.value,(t,fe)=>(b(),h("div",{key:t.dataIndex,class:"setting"},[p("div",aa,[e(re)]),p("div",null,[e(me,{modelValue:t.checked,"onUpdate:modelValue":x=>t.checked=x,onChange:x=>ee(x,t,fe)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),p("div",la,c(t.title==="#"?"\u5E8F\u5217\u53F7":t.title),1)]))),128))])]),default:a(()=>[p("div",Ye,[e(ie,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),e(pe,{"row-key":"id",loading:w(R),pagination:$,columns:_.value,data:A.value,bordered:!1,size:k.value,"row-selection":G,onPageChange:K,onPageSizeChange:Q},{type:a(({record:t})=>[u(c(l.$t(`model.dict.type.${t.type}`)),1)]),corp:a(({record:t})=>[u(c(l.$t(`model.dict.corp.${t.corp}`)),1)]),prompt_price:a(({record:t})=>[u(c(t.billing_method===1?`$${t.prompt_price}/k`:"-"),1)]),completion_price:a(({record:t})=>[u(c(t.billing_method===1?`$${t.completion_price}/k`:`$${t.fixed_price}/\u6B21`),1)]),status:a(({record:t})=>[t.status===2?(b(),h("span",ta)):(b(),h("span",oa)),u(" "+c(l.$t(`model.dict.status.${t.status}`)),1)]),_:1},8,["loading","pagination","columns","data","size","row-selection"])]),_:1})])}}});const xa=Ie(sa,[["__scopeId","data-v-2f6da43b"]]);export{xa as default};
