import{u as ge,F as he,o as ye,x as we,I as Ve,y as $e,_ as Ce}from"./index.ca71b56b.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css              */import{c as T,S as ke}from"./sortable.esm.e1dbc7e6.js";/* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css               *//* empty css              */import{d as Ie,r as R,e as p,c as C,w as Se,B as m,C as b,aH as e,aG as a,aL as v,aM as u,aJ as B,aI as N,aD as j,u as k,F as _,D as xe,n as ze,aK as De,aF as Te,bA as Be,bB as Ne,b2 as Fe,bC as Le,b1 as Ue,bD as Pe,bE as Ee,b5 as Ae,bF as Me,ab as qe,aU as Oe,bi as Re,bj as je,bl as Ge,bm as He,b4 as Je,bG as Ke,bI as Qe,bJ as We}from"./arco.eaecec6c.js";import{u as Xe}from"./loading.4b5db008.js";import{a as Ye}from"./model.039d3b23.js";import{q as Ze}from"./corp.0fb6d36e.js";import"./chart.54f38119.js";import"./vue.4ed7ee05.js";import"./base.87fcf6e2.js";const et={class:"container"},tt={class:"action-icon"},at={class:"action-icon"},lt={id:"tableSetting"},ot={style:{"margin-right":"4px",cursor:"move"}},nt={class:"title"},st={key:0,class:"circle red"},ct={key:1,class:"circle"},dt={name:"ModelList"},it=Ie({...dt,setup(rt){const{loading:G,setLoading:y}=Xe(!0),H=R({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),F=()=>({corp:"",name:"",model:"",type:p(),status:p(),created_at:[]}),L=p([]);(async()=>{y(!0);try{const{data:t}=await Ze();L.value=t.items}catch{}finally{y(!1)}})();const{t:n}=ge(),U=p([]),s=p(F()),f=p([]),w=p([]),I=p("medium"),g={current:1,pageSize:10,showTotal:!0,showPageSize:!0},V=R({...g}),J=C(()=>[{name:n("searchTable.size.mini"),value:"mini"},{name:n("searchTable.size.small"),value:"small"},{name:n("searchTable.size.medium"),value:"medium"},{name:n("searchTable.size.large"),value:"large"}]),K=C(()=>[{title:n("model.columns.corp"),dataIndex:"corp_name",slotName:"corp_name",align:"center",width:110},{title:n("model.columns.name"),dataIndex:"name",slotName:"name",align:"center"},{title:n("model.columns.model"),dataIndex:"model",slotName:"model",align:"center"},{title:n("model.columns.type"),dataIndex:"type",slotName:"type",align:"center"},{title:n("model.columns.prompt_price"),dataIndex:"prompt_price",slotName:"prompt_price",align:"center"},{title:n("model.columns.completion_price"),dataIndex:"completion_price",slotName:"completion_price",align:"center"},{title:n("model.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:75},{title:n("model.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:132}]),Q=C(()=>[{label:n("model.dict.type.1"),value:1},{label:n("model.dict.type.2"),value:2},{label:n("model.dict.type.3"),value:3},{label:n("model.dict.type.4"),value:4},{label:n("model.dict.type.100"),value:100}]),W=C(()=>[{label:n("model.dict.status.1"),value:1},{label:n("model.dict.status.2"),value:2}]),$=async(t={...g})=>{y(!0);try{const{data:o}=await Ye(t);U.value=o.items,V.current=t.current,V.pageSize=t.pageSize,V.total=o.paging.total}catch{}finally{y(!1)}},P=()=>{$({...g,...s.value})},X=t=>{$({...g,...s.value,current:t})},Y=t=>{g.pageSize=t,$({...g,...s.value})};$();const Z=()=>{s.value=F()},ee=(t,o)=>{I.value=t},te=(t,o,c)=>{t?f.value.splice(c,0,o):f.value=w.value.filter(d=>d.dataIndex!==o.dataIndex)},E=(t,o,c,d=!1)=>{const i=d?T(t):t;return o>-1&&c>-1&&i.splice(o,1,i.splice(c,1,i[o]).pop()),i},ae=t=>{t&&ze(()=>{const o=document.getElementById("tableSetting");new ke(o,{onEnd(c){const{oldIndex:d,newIndex:i}=c;E(f.value,d,i),E(w.value,d,i)}})})};return Se(()=>K.value,t=>{f.value=T(t),f.value.forEach((o,c)=>{o.checked=!0}),w.value=T(f.value)},{deep:!0,immediate:!0}),(t,o)=>{const c=he,d=De,i=Te,le=Be,S=Ne,h=Fe,r=Le,A=Ue,oe=Pe,x=Ee,ne=Ae,M=Me,se=qe,q=Oe,O=ye,ce=Re,z=je,de=we,ie=Ge,re=He,me=Ve,ue=$e,pe=Je,_e=Ke,fe=Qe,be=We;return m(),b("div",et,[e(i,{class:"container-breadcrumb"},{default:a(()=>[e(d,null,{default:a(()=>[e(c)]),_:1}),e(d,null,{default:a(()=>[v(u(t.$t("menu.my.model")),1)]),_:1})]),_:1}),e(be,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:a(()=>[e(x,null,{default:a(()=>[e(r,{flex:1},{default:a(()=>[e(ne,{model:s.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:a(()=>[e(x,{gutter:16},{default:a(()=>[e(r,{span:8},{default:a(()=>[e(h,{field:"corp",label:t.$t("model.form.corp")},{default:a(()=>[e(S,{modelValue:s.value.corp,"onUpdate:modelValue":o[0]||(o[0]=l=>s.value.corp=l),placeholder:t.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},{default:a(()=>[(m(!0),b(B,null,N(L.value,l=>(m(),j(le,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(r,{span:8},{default:a(()=>[e(h,{field:"name",label:t.$t("model.form.name")},{default:a(()=>[e(A,{modelValue:s.value.name,"onUpdate:modelValue":o[1]||(o[1]=l=>s.value.name=l),placeholder:t.$t("model.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(r,{span:8},{default:a(()=>[e(h,{field:"model",label:t.$t("model.form.model")},{default:a(()=>[e(A,{modelValue:s.value.model,"onUpdate:modelValue":o[2]||(o[2]=l=>s.value.model=l),placeholder:t.$t("model.form.model.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(r,{span:8},{default:a(()=>[e(h,{field:"type",label:t.$t("model.form.type")},{default:a(()=>[e(S,{modelValue:s.value.type,"onUpdate:modelValue":o[3]||(o[3]=l=>s.value.type=l),options:k(Q),placeholder:t.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),e(r,{span:8},{default:a(()=>[e(h,{field:"status",label:t.$t("model.form.status")},{default:a(()=>[e(S,{modelValue:s.value.status,"onUpdate:modelValue":o[4]||(o[4]=l=>s.value.status=l),options:k(W),placeholder:t.$t("model.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),e(r,{span:8},{default:a(()=>[e(h,{field:"created_at",label:t.$t("model.form.created_at")},{default:a(()=>[e(oe,{modelValue:s.value.created_at,"onUpdate:modelValue":o[5]||(o[5]=l=>s.value.created_at=l),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(M,{style:{height:"84px"},direction:"vertical"}),e(r,{flex:"86px",style:{"text-align":"right"}},{default:a(()=>[e(ce,{direction:"vertical",size:18},{default:a(()=>[e(q,{type:"primary",onClick:P},{icon:a(()=>[e(se)]),default:a(()=>[v(" "+u(t.$t("model.form.search")),1)]),_:1}),e(q,{onClick:Z},{icon:a(()=>[e(O)]),default:a(()=>[v(" "+u(t.$t("model.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(M,{style:{"margin-top":"0"}}),e(x,{style:{"margin-bottom":"16px"}},{default:a(()=>[e(r,{span:24,style:{display:"flex","align-items":"center","justify-content":"end"}},{default:a(()=>[e(z,{content:t.$t("searchTable.actions.refresh")},{default:a(()=>[_("div",{class:"action-icon",onClick:P},[e(O,{size:"18"})])]),_:1},8,["content"]),e(re,{onSelect:ee},{content:a(()=>[(m(!0),b(B,null,N(k(J),l=>(m(),j(ie,{key:l.value,value:l.value,class:xe({active:l.value===I.value})},{default:a(()=>[_("span",null,u(l.name),1)]),_:2},1032,["value","class"]))),128))]),default:a(()=>[e(z,{content:t.$t("searchTable.actions.density")},{default:a(()=>[_("div",tt,[e(de,{size:"18"})])]),_:1},8,["content"])]),_:1}),e(z,{content:t.$t("searchTable.actions.columnSetting")},{default:a(()=>[e(_e,{trigger:"click",position:"bl",onPopupVisibleChange:ae},{content:a(()=>[_("div",lt,[(m(!0),b(B,null,N(w.value,(l,ve)=>(m(),b("div",{key:l.dataIndex,class:"setting"},[_("div",ot,[e(ue)]),_("div",null,[e(pe,{modelValue:l.checked,"onUpdate:modelValue":D=>l.checked=D,onChange:D=>te(D,l,ve)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_("div",nt,u(l.title==="#"?"\u5E8F\u5217\u53F7":l.title),1)]))),128))])]),default:a(()=>[_("div",at,[e(me,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),e(fe,{"row-key":"id",loading:k(G),pagination:V,columns:f.value,data:U.value,bordered:!1,size:I.value,"row-selection":H,onPageChange:X,onPageSizeChange:Y},{type:a(({record:l})=>[v(u(t.$t(`model.dict.type.${l.type}`)),1)]),prompt_price:a(({record:l})=>[v(u(l.billing_method===1?`$${l.prompt_price}/k`:"-"),1)]),completion_price:a(({record:l})=>[v(u(l.billing_method===1?`$${l.completion_price}/k`:`$${l.fixed_price}/\u6B21`),1)]),status:a(({record:l})=>[l.status===2?(m(),b("span",st)):(m(),b("span",ct)),v(" "+u(t.$t(`model.dict.status.${l.status}`)),1)]),_:1},8,["loading","pagination","columns","data","size","row-selection"])]),_:1})])}}});const Ut=Ce(it,[["__scopeId","data-v-600527b5"]]);export{Ut as default};
