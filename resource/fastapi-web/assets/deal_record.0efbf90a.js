import{u as be,E as he,p as ye,y as we,i as ke,z as Ce,_ as xe}from"./index.6b5e2a5c.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css              */import{d as ze,r as R,e as u,c as V,w as Ie,bR as Se,B as d,C as v,aH as e,aG as t,aL as b,aM as _,bu as E,aD as L,u as h,F as p,aJ as U,aI as T,D as Ve,n as $e,aK as De,aF as qe,aS as Be,b2 as Fe,bC as Ne,bB as Pe,bD as Re,bE as Ee,b5 as Le,bF as Ue,ab as Te,aU as Ae,bi as Me,bj as je,bl as Ge,bm as He,b4 as Je,bG as Oe,bI as Ke,bJ as We}from"./arco.931e3328.js";import{u as Qe}from"./loading.244b3590.js";import{q as A}from"./common.4fed7ae4.js";import{b as Xe}from"./finance.fbc136d1.js";import{c as $,S as Ye}from"./sortable.esm.9fec1c24.js";import"./chart.2d48c0df.js";import"./vue.49cbc69b.js";import"./base.87fcf6e2.js";const Ze={class:"container"},et={class:"action-icon"},tt={class:"action-icon"},at={id:"tableSetting"},nt={style:{"margin-right":"4px",cursor:"move"}},ot={class:"title"},st={key:0,class:"circle red"},lt={key:1,class:"circle"},ct={name:"DealRecordList"},it=ze({...ct,setup(rt){const M=R({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),j=()=>({user_id:u(),status:u(),created_at:[]}),{loading:G,setLoading:D}=Qe(!0),{t:c}=be(),q=u([]),s=u(j()),m=u([]),y=u([]),C=u("medium"),H=u(),f={current:1,pageSize:20,showTotal:!0,showPageSize:!0,pageSizeOptions:[20,50,100,500,1e3]},w=R({...f}),J=V(()=>[{name:c("size.mini"),value:"mini"},{name:c("size.small"),value:"small"},{name:c("size.medium"),value:"medium"},{name:c("size.large"),value:"large"}]),O=V(()=>[{title:c("finance.columns.user_id"),dataIndex:"user_id",slotName:"user_id",align:"center"},{title:c("finance.columns.quota"),dataIndex:"quota",slotName:"quota",align:"center"},{title:c("finance.columns.status"),dataIndex:"status",slotName:"status",align:"center"},{title:c("finance.columns.created_at"),dataIndex:"created_at",slotName:"created_at",align:"center"}]),K=V(()=>[{label:c("finance.dict.status.1"),value:1}]),k=async(a={...f})=>{D(!0);try{const{data:o}=await Xe(a);q.value=o.items,w.current=a.current,w.pageSize=a.pageSize,w.total=o.paging.total}catch{}finally{D(!1)}},B=()=>{k({...f,...s.value})},W=a=>{k({...f,...s.value,current:a})},Q=a=>{f.pageSize=a,k({...f,...s.value})};k();const X=(a,o)=>{C.value=a},Y=(a,o,i)=>{a?m.value.splice(i,0,o):m.value=y.value.filter(l=>l.dataIndex!==o.dataIndex)},F=(a,o,i,l=!1)=>{const r=l?$(a):a;return o>-1&&i>-1&&r.splice(o,1,r.splice(i,1,r[o]).pop()),r},Z=a=>{a&&$e(()=>{const o=document.getElementById("tableSetting");new Ye(o,{onEnd(i){const{oldIndex:l,newIndex:r}=i;F(m.value,l,r),F(y.value,l,r)}})})};return Ie(()=>O.value,a=>{m.value=$(a),m.value.forEach((o,i)=>{o.checked=!0}),y.value=$(m.value)},{deep:!0,immediate:!0}),(a,o)=>{const i=he,l=De,r=qe,ee=Be,x=Fe,g=Ne,te=Pe,ae=Re,z=Ee,ne=Le,N=Ue,oe=Te,se=Ae,le=Me,ce=ye,I=je,ie=we,re=Ge,ue=He,de=ke,_e=Ce,pe=Je,me=Oe,fe=Ke,ge=We,P=Se("permission");return d(),v("div",Ze,[e(r,{class:"container-breadcrumb"},{default:t(()=>[e(l,null,{default:t(()=>[e(i)]),_:1}),e(l,null,{default:t(()=>[b(_(a.$t("menu.finance")),1)]),_:1}),e(l,null,{default:t(()=>[b(_(a.$t("menu.deal_record.list")),1)]),_:1})]),_:1}),e(ge,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:t(()=>[E((d(),L(z,null,{default:t(()=>[e(g,{flex:1},{default:t(()=>[e(ne,{model:s.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:t(()=>[e(z,{gutter:16},{default:t(()=>[e(g,{span:8},{default:t(()=>[e(x,{field:"name",label:a.$t("finance.form.user_id")},{default:t(()=>[e(ee,{modelValue:s.value.user_id,"onUpdate:modelValue":o[0]||(o[0]=n=>s.value.user_id=n),placeholder:a.$t("finance.form.user_id.placeholder"),min:1,"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(g,{span:8},{default:t(()=>[e(x,{field:"status",label:a.$t("finance.form.status")},{default:t(()=>[e(te,{modelValue:s.value.status,"onUpdate:modelValue":o[1]||(o[1]=n=>s.value.status=n),options:h(K),placeholder:a.$t("finance.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),e(g,{span:8},{default:t(()=>[e(x,{field:"created_at",label:a.$t("finance.form.created_at")},{default:t(()=>[e(ae,{modelValue:s.value.created_at,"onUpdate:modelValue":o[2]||(o[2]=n=>s.value.created_at=n),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(N,{style:{height:"42px"},direction:"vertical"}),e(g,{flex:"86px",style:{"text-align":"right"}},{default:t(()=>[e(le,{direction:"vertical",size:18},{default:t(()=>[e(se,{type:"primary",onClick:B},{icon:t(()=>[e(oe)]),default:t(()=>[b(" "+_(a.$t("finance.form.search")),1)]),_:1})]),_:1})]),_:1})]),_:1})),[[P,["admin"]]]),E(e(N,{style:{"margin-top":"0","margin-bottom":"16px"}},null,512),[[P,["admin"]]]),e(z,{style:{"margin-bottom":"16px"}},{default:t(()=>[e(g,{span:24,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:t(()=>[e(I,{content:a.$t("actions.refresh")},{default:t(()=>[p("div",{class:"action-icon",onClick:B},[e(ce,{size:"18"})])]),_:1},8,["content"]),e(ue,{onSelect:X},{content:t(()=>[(d(!0),v(U,null,T(h(J),n=>(d(),L(re,{key:n.value,value:n.value,class:Ve({active:n.value===C.value})},{default:t(()=>[p("span",null,_(n.name),1)]),_:2},1032,["value","class"]))),128))]),default:t(()=>[e(I,{content:a.$t("actions.density")},{default:t(()=>[p("div",et,[e(ie,{size:"18"})])]),_:1},8,["content"])]),_:1}),e(I,{content:a.$t("actions.column_setting")},{default:t(()=>[e(me,{trigger:"click",position:"bl",onPopupVisibleChange:Z},{content:t(()=>[p("div",at,[(d(!0),v(U,null,T(y.value,(n,ve)=>(d(),v("div",{key:n.dataIndex,class:"setting"},[p("div",nt,[e(_e)]),p("div",null,[e(pe,{modelValue:n.checked,"onUpdate:modelValue":S=>n.checked=S,onChange:S=>Y(S,n,ve)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),p("div",ot,_(n.title==="#"?"\u5E8F\u5217\u53F7":n.title),1)]))),128))])]),default:t(()=>[p("div",tt,[e(de,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),e(fe,{ref_key:"tableRef",ref:H,"row-key":"id",loading:h(G),pagination:w,columns:m.value,data:q.value,bordered:!1,size:C.value,"row-selection":M,onPageChange:W,onPageSizeChange:Q},{quota:t(({record:n})=>[b(_(n.quota>0?`$${h(A)(n.quota)}`:n.quota<0?`-$${h(A)(-n.quota)}`:"$0.00"),1)]),remark:t(({record:n})=>[b(_(n.remark||"-"),1)]),status:t(({record:n})=>[n.status===2?(d(),v("span",st)):(d(),v("span",lt)),b(" "+_(a.$t(`finance.dict.status.${n.status}`)),1)]),_:1},8,["loading","pagination","columns","data","size","row-selection"])]),_:1})])}}});const Pt=xe(it,[["__scopeId","data-v-56362e4a"]]);export{Pt as default};
