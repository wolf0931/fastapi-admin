import{u as xe,H as Ce,p as Ve,y as qe,i as Ie,z as ze,_ as Se}from"./index.cd10f7f1.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css               */import{d as De,r as Z,e as c,c as q,w as Be,B as s,C as d,aH as t,aG as a,aL as v,aM as u,aJ as L,aI as U,aD as W,u as m,F as g,D as Fe,n as Ee,aK as Ne,aF as Le,bA as Ue,bB as Ae,b2 as Pe,bC as Me,b1 as Te,bD as He,b5 as Oe,bE as Qe,ab as je,aU as Re,bi as Ge,bj as Je,bl as Ke,bm as Ze,b4 as We,bF as Xe,bH as Ye,bZ as et,a_ as tt,bI as at}from"./arco.3652aec2.js";import{u as ot}from"./loading.83b7fc7f.js";import{a as lt}from"./model.9a2a7ce6.js";import{c as A,S as nt}from"./sortable.esm.31555a8f.js";import{p as k,q as P}from"./common.4fed7ae4.js";import{q as st}from"./corp.3f8ab79e.js";import"./chart.f81658ef.js";import"./vue.4b1b521c.js";import"./base.87fcf6e2.js";const it={class:"container"},dt={class:"action-icon"},ut={class:"action-icon"},mt={id:"tableSetting"},ct={style:{"margin-right":"4px",cursor:"move"}},rt={class:"title"},pt={key:0},_t={key:1},ft={key:2},vt={key:3},gt={key:4},yt={key:0},bt={key:1},ht={key:2},kt={key:3},$t={key:4},wt={key:0,class:"circle red"},xt={key:1,class:"circle"},Ct={name:"ModelList"},Vt=De({...Ct,setup(qt){const{loading:X,setLoading:$}=ot(!0),Y=Z({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),M=()=>({corp:"",name:"",model:"",type:c(),remark:"",status:c()}),T=c([]);(async()=>{$(!0);try{const{data:o}=await st();T.value=o.items}catch{}finally{$(!1)}})();const{t:n}=xe(),H=c([]),i=c(M()),y=c([]),w=c([]),I=c("medium"),b={current:1,pageSize:20,showTotal:!0,showPageSize:!0,pageSizeOptions:[20,50,100,500,1e3]},x=Z({...b}),ee=q(()=>[{name:n("size.mini"),value:"mini"},{name:n("size.small"),value:"small"},{name:n("size.medium"),value:"medium"},{name:n("size.large"),value:"large"}]),te=q(()=>[{title:n("model.columns.corp"),dataIndex:"corp_name",slotName:"corp_name",align:"center",width:110},{title:n("model.columns.name"),dataIndex:"name",slotName:"name",align:"center",ellipsis:!0,tooltip:!0},{title:n("model.columns.model"),dataIndex:"model",slotName:"model",align:"center",ellipsis:!0,tooltip:!0},{title:n("model.columns.type"),dataIndex:"type",slotName:"type",align:"center"},{title:n("model.columns.prompt_price"),dataIndex:"prompt_ratio",slotName:"prompt_ratio",align:"center"},{title:n("model.columns.completion_price"),dataIndex:"completion_ratio",slotName:"completion_ratio",align:"center"},{title:n("model.columns.remark"),dataIndex:"remark",slotName:"remark",align:"center",ellipsis:!0,tooltip:!0},{title:n("model.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:75}]),ae=q(()=>[{label:n("model.dict.type.1"),value:1},{label:n("model.dict.type.2"),value:2},{label:n("model.dict.type.3"),value:3},{label:n("model.dict.type.4"),value:4},{label:n("model.dict.type.100"),value:100}]),oe=q(()=>[{label:n("model.dict.status.1"),value:1},{label:n("model.dict.status.2"),value:2}]),C=async(o={...b})=>{$(!0);try{const{data:l}=await lt(o);H.value=l.items,x.current=o.current,x.pageSize=o.pageSize,x.total=l.paging.total}catch{}finally{$(!1)}},O=()=>{C({...b,...i.value})},le=o=>{C({...b,...i.value,current:o})},ne=o=>{b.pageSize=o,C({...b,...i.value})};C();const se=()=>{i.value=M()},ie=(o,l)=>{I.value=o},de=(o,l,r)=>{o?y.value.splice(r,0,l):y.value=w.value.filter(p=>p.dataIndex!==l.dataIndex)},Q=(o,l,r,p=!1)=>{const _=p?A(o):o;return l>-1&&r>-1&&_.splice(l,1,_.splice(r,1,_[l]).pop()),_},ue=o=>{o&&Ee(()=>{const l=document.getElementById("tableSetting");new nt(l,{onEnd(r){const{oldIndex:p,newIndex:_}=r;Q(y.value,p,_),Q(w.value,p,_)}})})};Be(()=>te.value,o=>{y.value=A(o),y.value.forEach((l,r)=>{l.checked=!0}),w.value=A(y.value)},{deep:!0,immediate:!0});const z=c(!1),j=c([]),me=o=>{j.value=o,z.value=!0};return(o,l)=>{const r=Ce,p=Ne,_=Le,ce=Ue,S=Ae,h=Pe,f=Me,D=Te,B=He,re=Oe,R=Qe,pe=je,F=Re,G=Ve,_e=Ge,E=Je,fe=qe,ve=Ke,ge=Ze,ye=Ie,be=ze,he=We,ke=Xe,J=Ye,V=et,$e=tt,we=at;return s(),d("div",it,[t(_,{class:"container-breadcrumb"},{default:a(()=>[t(p,null,{default:a(()=>[t(r)]),_:1}),t(p,null,{default:a(()=>[v(u(o.$t("menu.my.model")),1)]),_:1})]),_:1}),t(we,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:a(()=>[t(B,null,{default:a(()=>[t(f,{flex:1},{default:a(()=>[t(re,{model:i.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:a(()=>[t(B,{gutter:16},{default:a(()=>[t(f,{span:8},{default:a(()=>[t(h,{field:"corp",label:o.$t("model.form.corp")},{default:a(()=>[t(S,{modelValue:i.value.corp,"onUpdate:modelValue":l[0]||(l[0]=e=>i.value.corp=e),placeholder:o.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},{default:a(()=>[(s(!0),d(L,null,U(T.value,e=>(s(),W(ce,{key:e.id,value:e.id,label:e.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(f,{span:8},{default:a(()=>[t(h,{field:"name",label:o.$t("model.form.name")},{default:a(()=>[t(D,{modelValue:i.value.name,"onUpdate:modelValue":l[1]||(l[1]=e=>i.value.name=e),placeholder:o.$t("model.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(f,{span:8},{default:a(()=>[t(h,{field:"model",label:o.$t("model.form.model")},{default:a(()=>[t(D,{modelValue:i.value.model,"onUpdate:modelValue":l[2]||(l[2]=e=>i.value.model=e),placeholder:o.$t("model.form.model.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(f,{span:8},{default:a(()=>[t(h,{field:"type",label:o.$t("model.form.type")},{default:a(()=>[t(S,{modelValue:i.value.type,"onUpdate:modelValue":l[3]||(l[3]=e=>i.value.type=e),options:m(ae),placeholder:o.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),t(f,{span:8},{default:a(()=>[t(h,{field:"status",label:o.$t("model.form.status")},{default:a(()=>[t(S,{modelValue:i.value.status,"onUpdate:modelValue":l[4]||(l[4]=e=>i.value.status=e),options:m(oe),placeholder:o.$t("model.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),t(f,{span:8},{default:a(()=>[t(h,{field:"remark",label:o.$t("model.form.remark")},{default:a(()=>[t(D,{modelValue:i.value.remark,"onUpdate:modelValue":l[5]||(l[5]=e=>i.value.remark=e),placeholder:o.$t("model.form.remark.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(R,{style:{height:"84px"},direction:"vertical"}),t(f,{flex:"86px",style:{"text-align":"right"}},{default:a(()=>[t(_e,{direction:"vertical",size:18},{default:a(()=>[t(F,{type:"primary",onClick:O},{icon:a(()=>[t(pe)]),default:a(()=>[v(" "+u(o.$t("model.form.search")),1)]),_:1}),t(F,{onClick:se},{icon:a(()=>[t(G)]),default:a(()=>[v(" "+u(o.$t("model.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(R,{style:{"margin-top":"0"}}),t(B,{style:{"margin-bottom":"16px"}},{default:a(()=>[t(f,{span:24,style:{display:"flex","align-items":"center","justify-content":"end"}},{default:a(()=>[t(E,{content:o.$t("actions.refresh")},{default:a(()=>[g("div",{class:"action-icon",onClick:O},[t(G,{size:"18"})])]),_:1},8,["content"]),t(ge,{onSelect:ie},{content:a(()=>[(s(!0),d(L,null,U(m(ee),e=>(s(),W(ve,{key:e.value,value:e.value,class:Fe({active:e.value===I.value})},{default:a(()=>[g("span",null,u(e.name),1)]),_:2},1032,["value","class"]))),128))]),default:a(()=>[t(E,{content:o.$t("actions.density")},{default:a(()=>[g("div",dt,[t(fe,{size:"18"})])]),_:1},8,["content"])]),_:1}),t(E,{content:o.$t("actions.column_setting")},{default:a(()=>[t(ke,{trigger:"click",position:"bl",onPopupVisibleChange:ue},{content:a(()=>[g("div",mt,[(s(!0),d(L,null,U(w.value,(e,K)=>(s(),d("div",{key:e.dataIndex,class:"setting"},[g("div",ct,[t(be)]),g("div",null,[t(he,{modelValue:e.checked,"onUpdate:modelValue":N=>e.checked=N,onChange:N=>de(N,e,K)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),g("div",rt,u(e.title==="#"?"\u5E8F\u5217\u53F7":e.title),1)]))),128))])]),default:a(()=>[g("div",ut,[t(ye,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),t(J,{"row-key":"id",loading:m(X),pagination:x,columns:y.value,data:H.value,bordered:!1,size:I.value,"row-selection":Y,onPageChange:le,onPageSizeChange:ne},{type:a(({record:e})=>[v(u(o.$t(`model.dict.type.${e.type}`)),1)]),prompt_ratio:a(({record:e})=>[e.type===5?(s(),d("span",pt,u(e.audio_quota.billing_method===1?`$${m(k)(e.audio_quota.prompt_ratio)}/k`:"-"),1)):e.type===6?(s(),d("span",_t,"-")):e.type!==100?(s(),d("span",ft,u(e.text_quota.billing_method===1?`$${m(k)(e.text_quota.prompt_ratio)}/k`:"-"),1)):e.type===100?(s(),d("span",vt,u(e.multimodal_quota.text_quota.billing_method===1?`$${m(k)(e.multimodal_quota.text_quota.prompt_ratio)}/k`:"-"),1)):(s(),d("span",gt," - "))]),completion_ratio:a(({record:e})=>[e.type===2?(s(),d("span",yt,[t(F,{type:"text",size:"small",onClick:K=>me(e.image_quotas)},{default:a(()=>[v(" \u67E5\u770B ")]),_:2},1032,["onClick"])])):e.type===5?(s(),d("span",bt,"-")):e.type===6?(s(),d("span",ht,u(e.audio_quota.billing_method===1?`$${m(k)(e.audio_quota.completion_ratio)}/min`:`$${m(P)(e.audio_quota.fixed_quota)}/\u6B21`),1)):e.type!==100?(s(),d("span",kt,u(e.text_quota.billing_method===1?`$${m(k)(e.text_quota.completion_ratio)}/k`:`$${m(P)(e.text_quota.fixed_quota)}/\u6B21`),1)):(s(),d("span",$t,u(`$${m(k)(e.multimodal_quota.text_quota.completion_ratio)}/k`),1))]),remark:a(({record:e})=>[v(u(e.remark||"-"),1)]),status:a(({record:e})=>[e.status===2?(s(),d("span",wt)):(s(),d("span",xt)),v(" "+u(o.$t(`model.dict.status.${e.status}`)),1)]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),t($e,{visible:z.value,"onUpdate:visible":l[6]||(l[6]=e=>z.value=e),title:o.$t("model.columns.completion_price"),width:"500px","hide-cancel":"",simple:""},{default:a(()=>[t(J,{data:j.value,pagination:!1,bordered:!1},{columns:a(()=>[t(V,{title:"\u5BBD\u5EA6","data-index":"width",align:"center"}),t(V,{title:"\u9AD8\u5EA6","data-index":"height",align:"center"}),t(V,{title:"\u4EF7\u683C","data-index":"fixed_quota",align:"center"},{cell:a(({record:e})=>[v(u(`$${m(P)(e.fixed_quota)}/\u5F20`),1)]),_:1}),t(V,{title:"\u9ED8\u8BA4","data-index":"is_default",align:"center"},{cell:a(({record:e})=>[v(u(e.is_default?"\u662F":"-"),1)]),_:1})]),_:1},8,["data"])]),_:1},8,["visible","title"])]),_:1})])}}});const Yt=Se(Vt,[["__scopeId","data-v-64a87d2d"]]);export{Yt as default};
