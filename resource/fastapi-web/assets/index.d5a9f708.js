import{u as Ue,z as Ae,m as Te,v as Le,I as Be,w as Ne,_ as Fe}from"./index.95d19ec3.js";import{u as Pe}from"./loading.e3b9231d.js";/* empty css                *//* empty css               *//* empty css              *//* empty css              *//* empty css                *//* empty css                *//* empty css               *//* empty css               */import{c as E,S as Re}from"./sortable.esm.e23cfe8e.js";/* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css              */import{d as Ee,r as Z,e as c,c as K,w as Ke,B as u,C as b,aH as a,aG as t,aL as m,aM as p,aD as D,aE as Me,aJ as U,aI as A,u as M,F as g,D as Oe,n as He,aX as je,aK as Ge,aF as Je,b2 as Qe,b3 as Xe,bB as We,bC as Ye,bD as Ze,bE as xe,bF as ea,b6 as aa,bG as la,ab as ta,aV as oa,bj as na,a5 as sa,bk as pa,bm as ia,bn as ua,b5 as da,bH as ra,bI as ca,bJ as ma,aU as _a,aT as fa,bL as va,a$ as ba,bK as ha}from"./arco.a6f3e581.js";import{s as ya,q as ga,a as ka,b as $a,c as wa}from"./app.1d8cd086.js";import{q as Va}from"./model.cc15f1d7.js";import"./chart.5d3761cb.js";import"./vue.7b8f6a6a.js";const Ca={class:"container"},Ia={class:"action-icon"},za={class:"action-icon"},qa={id:"tableSetting"},Sa={style:{"margin-right":"4px",cursor:"move"}},Da={class:"title"},Ua={key:0},Aa={key:1},Ta={key:0,class:"circle red"},La={key:1,class:"circle"},Ba={name:"AppList"},Na=Ee({...Ba,setup(Fa){const x=Z({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),T=c([]);(async()=>{try{const{data:e}=await Va();T.value=e.items}catch{}})();const ee=async e=>{f(!0);try{await ya(e),q()}catch{}finally{f(!1)}},O=()=>({app_id:c(),name:"",models:[],key:"",type:c(),status:c(),created_at:[]}),{loading:ae,setLoading:f}=Pe(!0),{t:i}=Ue(),H=c([]),s=c(O()),k=c([]),V=c([]),L=c("medium"),C={current:1,pageSize:10,showTotal:!0,showPageSize:!0},I=Z({...C}),le=K(()=>[{name:i("searchTable.size.mini"),value:"mini"},{name:i("searchTable.size.small"),value:"small"},{name:i("searchTable.size.medium"),value:"medium"},{name:i("searchTable.size.large"),value:"large"}]),te=K(()=>[{title:i("app.columns.appId"),dataIndex:"app_id",slotName:"app_id",align:"center",width:80},{title:i("app.columns.name"),dataIndex:"name",slotName:"name",align:"center",width:150},{title:i("app.columns.models"),dataIndex:"model_names",slotName:"model_names",align:"center",ellipsis:!0,tooltip:!0},{title:i("app.columns.quota"),dataIndex:"quota",slotName:"quota",align:"center",width:120},{title:i("app.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:80},{title:i("app.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:170},{title:i("app.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:370}]),oe=K(()=>[{label:i("app.dict.status.1"),value:1},{label:i("app.dict.status.2"),value:2}]),z=async(e={current:1,pageSize:10})=>{f(!0);try{const{data:o}=await ga(e);H.value=o.items,I.current=e.current,I.pageSize=e.pageSize,I.total=o.paging.total}catch{}finally{f(!1)}},q=()=>{z({...C,...s.value})},ne=e=>{z({...C,...s.value,current:e})},se=e=>{z({...C,...s.value,pageSize:e})};z();const pe=()=>{s.value=O()},ie=async e=>{f(!0);try{e.status=e.status===1?2:1,await ka(e),q()}catch{}finally{f(!1)}},ue=(e,o)=>{L.value=e},de=(e,o,r)=>{e?k.value.splice(r,0,o):k.value=V.value.filter(_=>_.dataIndex!==o.dataIndex)},j=(e,o,r,_=!1)=>{const h=_?E(e):e;return o>-1&&r>-1&&h.splice(o,1,h.splice(r,1,h[o]).pop()),h},re=e=>{e&&He(()=>{const o=document.getElementById("tableSetting");new Re(o,{onEnd(r){const{oldIndex:_,newIndex:h}=r;j(k.value,_,h),j(V.value,_,h)}})})};Ke(()=>te.value,e=>{k.value=E(e),k.value.forEach((o,r)=>{o.checked=!0}),V.value=E(k.value)},{deep:!0,immediate:!0});const w=c(!1),G=c(),n=c({}),ce=async e=>{f(!0);try{const{data:o}=await $a(e);n.value.app_id=o.app_id,n.value.key=o.key,w.value=!0}catch{}finally{f(!1)}},me=async e=>{var r;if(await((r=G.value)==null?void 0:r.validate())){w.value=!0,e(!1);return}f(!0);try{await wa(n.value),navigator.clipboard.writeText(n.value.key),je.success(i("app.success.key_config")),e()}catch{}finally{f(!1)}},_e=()=>{w.value=!1};return(e,o)=>{const r=Ae,_=Ge,h=Je,S=Qe,d=Xe,v=We,J=Ye,B=Ze,fe=xe,N=ea,Q=aa,X=la,ve=ta,y=oa,W=Te,Y=na,be=sa,F=pa,he=Le,ye=ia,ge=ua,ke=Be,$e=Ne,we=da,Ve=ra,Ce=ca,Ie=ma,ze=_a,qe=fa,P=va,Se=ba,De=ha;return u(),b("div",Ca,[a(h,{class:"container-breadcrumb"},{default:t(()=>[a(_,null,{default:t(()=>[a(r)]),_:1}),a(_,null,{default:t(()=>[m(p(e.$t("menu.app")),1)]),_:1}),a(_,null,{default:t(()=>[m(p(e.$t("menu.app.list")),1)]),_:1})]),_:1}),a(De,{class:"general-card",title:e.$t("menu.app.list"),bordered:!1},{extra:t(()=>[a(Se,{visible:w.value,"onUpdate:visible":o[14]||(o[14]=l=>w.value=l),title:e.$t("app.form.title.keyConfig"),"ok-text":e.$t("app.button.save"),onCancel:_e,onBeforeOk:me},{default:t(()=>[a(Q,{ref_key:"formRef",ref:G,model:n.value},{default:t(()=>[a(d,{field:"key",label:e.$t("app.label.key")},{default:t(()=>[a(S,{modelValue:n.value.key,"onUpdate:modelValue":o[7]||(o[7]=l=>n.value.key=l),placeholder:e.$t("app.placeholder.key"),readonly:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(d,{field:"is_limit_quota",label:e.$t("app.label.isLimitQuota")},{default:t(()=>[a(ze,{modelValue:n.value.is_limit_quota,"onUpdate:modelValue":o[8]||(o[8]=l=>n.value.is_limit_quota=l)},null,8,["modelValue"])]),_:1},8,["label"]),n.value.is_limit_quota?(u(),D(d,{key:0,field:"quota",label:e.$t("app.label.quota"),rules:[{required:!0,message:e.$t("app.error.quota.required")}]},{default:t(()=>[a(qe,{modelValue:n.value.quota,"onUpdate:modelValue":o[9]||(o[9]=l=>n.value.quota=l),precision:0,min:1,placeholder:e.$t("app.placeholder.quota")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):Me("",!0),a(d,{field:"models",label:e.$t("app.label.models")},{default:t(()=>[a(B,{modelValue:n.value.models,"onUpdate:modelValue":o[10]||(o[10]=l=>n.value.models=l),placeholder:e.$t("app.placeholder.models"),"max-tag-count":3,multiple:"","allow-clear":""},{default:t(()=>[(u(!0),b(U,null,A(T.value,l=>(u(),D(J,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(d,{field:"ip_whitelist",label:e.$t("app.label.ip_whitelist")},{default:t(()=>[a(P,{modelValue:n.value.ip_whitelist,"onUpdate:modelValue":o[11]||(o[11]=l=>n.value.ip_whitelist=l),placeholder:e.$t("app.placeholder.ip_whitelist"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(d,{field:"ip_blacklist",label:e.$t("app.label.ip_blacklist")},{default:t(()=>[a(P,{modelValue:n.value.ip_blacklist,"onUpdate:modelValue":o[12]||(o[12]=l=>n.value.ip_blacklist=l),placeholder:e.$t("app.placeholder.ip_blacklist"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(d,{field:"remark",label:e.$t("app.placeholder.remark")},{default:t(()=>[a(P,{modelValue:n.value.remark,"onUpdate:modelValue":o[13]||(o[13]=l=>n.value.remark=l),placeholder:e.$t("app.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["visible","title","ok-text"])]),default:t(()=>[a(N,null,{default:t(()=>[a(v,{flex:1},{default:t(()=>[a(Q,{model:s.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:t(()=>[a(N,{gutter:16},{default:t(()=>[a(v,{span:8},{default:t(()=>[a(d,{field:"app_id",label:e.$t("app.form.appId")},{default:t(()=>[a(S,{modelValue:s.value.app_id,"onUpdate:modelValue":o[0]||(o[0]=l=>s.value.app_id=l),placeholder:e.$t("app.form.appId.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(v,{span:8},{default:t(()=>[a(d,{field:"name",label:e.$t("app.form.name")},{default:t(()=>[a(S,{modelValue:s.value.name,"onUpdate:modelValue":o[1]||(o[1]=l=>s.value.name=l),placeholder:e.$t("app.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(v,{span:8},{default:t(()=>[a(d,{field:"models",label:e.$t("app.form.models")},{default:t(()=>[a(B,{modelValue:s.value.models,"onUpdate:modelValue":o[2]||(o[2]=l=>s.value.models=l),placeholder:e.$t("app.form.selectDefault"),"max-tag-count":3,multiple:"","allow-search":"","allow-clear":""},{default:t(()=>[(u(!0),b(U,null,A(T.value,l=>(u(),D(J,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(v,{span:8},{default:t(()=>[a(d,{field:"key",label:e.$t("app.form.key")},{default:t(()=>[a(S,{modelValue:s.value.key,"onUpdate:modelValue":o[3]||(o[3]=l=>s.value.key=l),placeholder:e.$t("app.form.key.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(v,{span:8},{default:t(()=>[a(d,{field:"status",label:e.$t("app.form.status")},{default:t(()=>[a(B,{modelValue:s.value.status,"onUpdate:modelValue":o[4]||(o[4]=l=>s.value.status=l),options:M(oe),placeholder:e.$t("app.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),a(v,{span:8},{default:t(()=>[a(d,{field:"created_at",label:e.$t("app.form.created_at")},{default:t(()=>[a(fe,{modelValue:s.value.created_at,"onUpdate:modelValue":o[5]||(o[5]=l=>s.value.created_at=l),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(X,{style:{height:"84px"},direction:"vertical"}),a(v,{flex:"86px",style:{"text-align":"right"}},{default:t(()=>[a(Y,{direction:"vertical",size:18},{default:t(()=>[a(y,{type:"primary",onClick:q},{icon:t(()=>[a(ve)]),default:t(()=>[m(" "+p(e.$t("app.form.search")),1)]),_:1}),a(y,{onClick:pe},{icon:t(()=>[a(W)]),default:t(()=>[m(" "+p(e.$t("app.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(X,{style:{"margin-top":"0"}}),a(N,{style:{"margin-bottom":"16px"}},{default:t(()=>[a(v,{span:12},{default:t(()=>[a(Y,null,{default:t(()=>[a(y,{type:"primary",onClick:o[6]||(o[6]=l=>e.$router.push({name:"AppCreate"}))},{icon:t(()=>[a(be)]),default:t(()=>[m(" "+p(e.$t("app.operation.create")),1)]),_:1})]),_:1})]),_:1}),a(v,{span:12,style:{display:"flex","align-items":"center","justify-content":"end"}},{default:t(()=>[a(F,{content:e.$t("searchTable.actions.refresh")},{default:t(()=>[g("div",{class:"action-icon",onClick:q},[a(W,{size:"18"})])]),_:1},8,["content"]),a(ge,{onSelect:ue},{content:t(()=>[(u(!0),b(U,null,A(M(le),l=>(u(),D(ye,{key:l.value,value:l.value,class:Oe({active:l.value===L.value})},{default:t(()=>[g("span",null,p(l.name),1)]),_:2},1032,["value","class"]))),128))]),default:t(()=>[a(F,{content:e.$t("searchTable.actions.density")},{default:t(()=>[g("div",Ia,[a(he,{size:"18"})])]),_:1},8,["content"])]),_:1}),a(F,{content:e.$t("searchTable.actions.columnSetting")},{default:t(()=>[a(Ve,{trigger:"click",position:"bl",onPopupVisibleChange:re},{content:t(()=>[g("div",qa,[(u(!0),b(U,null,A(V.value,(l,$)=>(u(),b("div",{key:l.dataIndex,class:"setting"},[g("div",Sa,[a($e)]),g("div",null,[a(we,{modelValue:l.checked,"onUpdate:modelValue":R=>l.checked=R,onChange:R=>de(R,l,$)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),g("div",Da,p(l.title==="#"?"\u5E8F\u5217\u53F7":l.title),1)]))),128))])]),default:t(()=>[g("div",za,[a(ke,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),a(Ie,{"row-key":"id",loading:M(ae),pagination:I,columns:k.value,data:H.value,bordered:!1,size:L.value,"row-selection":x,onPageChange:ne,onPageSizeChange:se},{quota:t(({record:l})=>[l.is_limit_quota?(u(),b("span",Ua,p(l.quota.toLocaleString()),1)):(u(),b("span",Aa,p(e.$t("app.columns.quota.no_limit")),1))]),status:t(({record:l})=>[l.status===2?(u(),b("span",Ta)):(u(),b("span",La)),m(" "+p(e.$t(`app.dict.status.${l.status}`)),1)]),operations:t(({record:l})=>[a(y,{type:"text",size:"small",onClick:$=>e.$router.push({name:"AppDetail",query:{id:`${l.id}`}})},{default:t(()=>[m(p(e.$t("app.columns.operations.view")),1)]),_:2},1032,["onClick"]),a(y,{type:"text",size:"small",onClick:$=>e.$router.push({name:"AppUpdate",query:{id:`${l.id}`}})},{default:t(()=>[m(p(e.$t("app.columns.operations.update")),1)]),_:2},1032,["onClick"]),a(y,{type:"text",size:"small",onClick:$=>ce({app_id:`${l.app_id}`})},{default:t(()=>[m(p(e.$t("app.columns.operations.createKey")),1)]),_:2},1032,["onClick"]),a(y,{type:"text",size:"small",onClick:$=>e.$router.push({name:"KeyAppList",query:{app_id:`${l.app_id}`}})},{default:t(()=>[m(p(e.$t("app.columns.operations.manageKey")),1)]),_:2},1032,["onClick"]),a(y,{type:"text",size:"small",onClick:$=>ie({id:`${l.id}`,status:Number(`${l.status}`)})},{default:t(()=>[m(p(e.$t(`app.columns.operations.status.${l.status}`)),1)]),_:2},1032,["onClick"]),a(Ce,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417?",onOk:$=>ee({id:`${l.id}`})},{default:t(()=>[a(y,{type:"text",size:"small"},{default:t(()=>[m(p(e.$t("app.columns.operations.delete")),1)]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"])]),_:1},8,["title"])])}}});const pl=Fe(Na,[["__scopeId","data-v-69459b8e"]]);export{pl as default};
