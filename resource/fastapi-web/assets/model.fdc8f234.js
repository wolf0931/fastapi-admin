import{u as Ke,B as Oe,p as Re,y as Te,i as He,z as je,_ as Ge}from"./index.9a5ce5ca.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css              */import{d as Je,r as oe,e as s,c as R,w as ne,B as c,C,aH as a,aG as l,aL as u,aM as d,aJ as I,aI as D,aD as A,u as x,F as v,D as Qe,g as We,n as Xe,aK as Ye,aF as Ze,bA as et,bB as tt,b2 as at,bC as lt,b1 as ot,bD as nt,bE as st,b5 as ut,bF as it,ab as dt,aU as rt,bi as ct,bj as mt,bl as pt,bm as _t,b4 as ft,bG as yt,ad as gt,aT as vt,bH as kt,bI as bt,aV as ht,bJ as Ct}from"./arco.931e3328.js";import{h as wt,u as $t}from"./vue.49cbc69b.js";import{u as Vt}from"./loading.244b3590.js";import{q as Ft}from"./common.4fed7ae4.js";import{s as It,q as Dt,a as St,b as zt,c as Bt}from"./key.9fa35437.js";import{c as T,S as Et}from"./sortable.esm.9fec1c24.js";import{q as qt}from"./model.9b703bd6.js";import{f as At}from"./agent.e4e53401.js";import{q as xt}from"./corp.01ad92bb.js";import{_ as Lt}from"./index.vue_vue_type_script_setup_true_lang.d11bef80.js";import"./chart.2d48c0df.js";import"./base.87fcf6e2.js";/* empty css                *//* empty css                */const Nt={class:"container"},Ut={class:"action-icon"},Mt={class:"action-icon"},Pt={id:"tableSetting"},Kt={style:{"margin-right":"4px",cursor:"move"}},Ot={class:"title"},Rt={name:"KeyList"},Tt=Je({...Rt,setup(Ht){const{loading:se,setLoading:m}=Vt(!0),{proxy:w}=We(),S=wt(),ue=oe({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),H=s([]);(async()=>{m(!0);try{const{data:e}=await xt();H.value=e.items}catch{}finally{m(!1)}})();const j=s([]);(async()=>{try{const{data:e}=await qt();j.value=e.items}catch{}})();const G=s([]);(async()=>{try{const{data:e}=await At();G.value=e.items;const o=new Array(0);S.query.agent_id&&(o[0]=S.query.agent_id,n.value.model_agents=o)}catch{}})();const ie=async e=>{m(!0);try{await It(e),w.$message.success("\u5220\u9664\u6210\u529F"),F()}catch{}finally{m(!1)}},J=()=>({type:2,corp:"",key:"",models:[],model_agents:s(),quota:s(),status:s(),created_at:[]}),{t:i}=Ke(),Q=s([]),n=s(J()),k=s([]),z=s([]),L=s("medium"),b=s([]),h=s(!0),W=s(),$={current:1,pageSize:20,showTotal:!0,showPageSize:!0,pageSizeOptions:[20,50,100,500,1e3]},B=oe({...$}),de=R(()=>[{name:i("size.mini"),value:"mini"},{name:i("size.small"),value:"small"},{name:i("size.medium"),value:"medium"},{name:i("size.large"),value:"large"}]),re=R(()=>[{title:i("key.columns.corp"),dataIndex:"corp_name",slotName:"corp_name",align:"center",width:110},{title:i("key.columns.key"),dataIndex:"key",slotName:"key",align:"center",width:230},{title:i("key.columns.models"),dataIndex:"model_names",slotName:"model_names",align:"center",ellipsis:!0,tooltip:!0},{title:i("key.columns.model_agents"),dataIndex:"model_agent_names",slotName:"model_agent_names",align:"center",ellipsis:!0,tooltip:!0},{title:i("key.columns.used_quota"),dataIndex:"used_quota",slotName:"used_quota",align:"center",ellipsis:!0,tooltip:!0},{title:i("key.columns.remark"),dataIndex:"remark",slotName:"remark",align:"center",ellipsis:!0,tooltip:!0},{title:i("key.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:65},{title:i("key.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:132},{title:i("key.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:170}]),ce=R(()=>[{label:i("key.dict.status.1"),value:1},{label:i("key.dict.status.2"),value:2}]),X=new Array(0);S.query.agent_id&&(X[0]=S.query.agent_id);const E=async(e={...$,type:2,model_agents:X})=>{m(!0);try{const{data:o}=await Dt(e);Q.value=o.items,B.current=e.current,B.pageSize=e.pageSize,B.total=o.paging.total}catch{}finally{m(!1)}},F=()=>{E({...$,...n.value})},me=e=>{E({...$,...n.value,current:e})},pe=e=>{$.pageSize=e,E({...$,...n.value})};E();const _e=()=>{n.value=J()},fe=async e=>{m(!0);try{await St(e),w.$message.success("\u64CD\u4F5C\u6210\u529F"),F()}catch{}finally{m(!1)}},ye=(e,o)=>{L.value=e},ge=(e,o,p)=>{e?k.value.splice(p,0,o):k.value=z.value.filter(_=>_.dataIndex!==o.dataIndex)},Y=(e,o,p,_=!1)=>{const y=_?T(e):e;return o>-1&&p>-1&&y.splice(o,1,y.splice(p,1,y[o]).pop()),y},ve=e=>{e&&Xe(()=>{const o=document.getElementById("tableSetting");new Et(o,{onEnd(p){const{oldIndex:_,newIndex:y}=p;Y(k.value,_,y),Y(z.value,_,y)}})})};ne(()=>re.value,e=>{k.value=T(e),k.value.forEach((o,p)=>{o.checked=!0}),z.value=T(k.value)},{deep:!0,immediate:!0});const ke=e=>{b.value=e,h.value=!e.length},N=e=>{if(b.value.length===0)w.$message.info("\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E");else{let o=`\u662F\u5426\u786E\u5B9A\u64CD\u4F5C\u6240\u9009\u7684${b.value.length}\u6761\u6570\u636E?`;switch(e.action){case"status":e.value===1?o=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009\u7684${b.value.length}\u6761\u6570\u636E?`:o=`\u662F\u5426\u786E\u5B9A\u7981\u7528\u6240\u9009\u7684${b.value.length}\u6761\u6570\u636E?`;break;case"delete":o=`\u662F\u5426\u786E\u5B9A\u5220\u9664\u6240\u9009\u7684${b.value.length}\u6761\u6570\u636E?`;break}w.$modal.warning({title:"\u8B66\u544A",titleAlign:"start",content:o,hideCancel:!1,onOk:()=>{m(!0),e.ids=b.value,zt(e).then(p=>{m(!1),w.$message.success("\u64CD\u4F5C\u6210\u529F"),F(),W.value.selectAll(!1)})}})}},{copy:be,copied:Z}=$t(),he=async e=>{const{data:o}=await Bt({id:e});be(o.key)};ne(Z,()=>{Z.value&&w.$message.success("\u590D\u5236\u6210\u529F")});const U=s(!1),ee=s(),Ce=e=>{U.value=!0,ee.value=e},we=()=>{U.value=!1};return(e,o)=>{const p=Oe,_=Ye,y=Ze,M=et,q=tt,V=at,f=lt,$e=ot,Ve=nt,P=st,Fe=ut,te=it,Ie=dt,g=rt,ae=Re,le=ct,K=mt,De=Te,Se=pt,ze=_t,Be=He,Ee=je,qe=ft,Ae=yt,xe=gt,Le=vt,Ne=kt,Ue=bt,Me=ht,Pe=Ct;return c(),C("div",Nt,[a(y,{class:"container-breadcrumb"},{default:l(()=>[a(_,null,{default:l(()=>[a(p)]),_:1}),a(_,null,{default:l(()=>[u(d(e.$t("menu.key")),1)]),_:1}),a(_,null,{default:l(()=>[u(d(e.$t("menu.key.model.list")),1)]),_:1})]),_:1}),a(Pe,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:l(()=>[a(P,null,{default:l(()=>[a(f,{flex:1},{default:l(()=>[a(Fe,{model:n.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:l(()=>[a(P,{gutter:16},{default:l(()=>[a(f,{span:8},{default:l(()=>[a(V,{field:"corp",label:e.$t("key.form.corp")},{default:l(()=>[a(q,{modelValue:n.value.corp,"onUpdate:modelValue":o[0]||(o[0]=t=>n.value.corp=t),placeholder:e.$t("key.form.selectDefault"),"allow-search":"","allow-clear":""},{default:l(()=>[(c(!0),C(I,null,D(H.value,t=>(c(),A(M,{key:t.id,value:t.id,label:t.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(f,{span:8},{default:l(()=>[a(V,{field:"key",label:e.$t("key.form.key")},{default:l(()=>[a($e,{modelValue:n.value.key,"onUpdate:modelValue":o[1]||(o[1]=t=>n.value.key=t),placeholder:e.$t("key.form.key.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(f,{span:8},{default:l(()=>[a(V,{field:"models",label:e.$t("key.form.models")},{default:l(()=>[a(q,{modelValue:n.value.models,"onUpdate:modelValue":o[2]||(o[2]=t=>n.value.models=t),placeholder:e.$t("key.form.selectDefault"),"max-tag-count":2,multiple:"","allow-search":"","allow-clear":""},{default:l(()=>[(c(!0),C(I,null,D(j.value,t=>(c(),A(M,{key:t.id,value:t.id,label:t.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(f,{span:8},{default:l(()=>[a(V,{field:"model_agents",label:e.$t("key.form.modelAgents")},{default:l(()=>[a(q,{modelValue:n.value.model_agents,"onUpdate:modelValue":o[3]||(o[3]=t=>n.value.model_agents=t),placeholder:e.$t("key.form.selectDefault"),"max-tag-count":2,multiple:"","allow-search":"","allow-clear":""},{default:l(()=>[(c(!0),C(I,null,D(G.value,t=>(c(),A(M,{key:t.id,value:t.id,label:t.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(f,{span:8},{default:l(()=>[a(V,{field:"status",label:e.$t("key.form.status")},{default:l(()=>[a(q,{modelValue:n.value.status,"onUpdate:modelValue":o[4]||(o[4]=t=>n.value.status=t),options:x(ce),placeholder:e.$t("key.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),a(f,{span:8},{default:l(()=>[a(V,{field:"created_at",label:e.$t("key.form.created_at")},{default:l(()=>[a(Ve,{modelValue:n.value.created_at,"onUpdate:modelValue":o[5]||(o[5]=t=>n.value.created_at=t),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(te,{style:{height:"84px"},direction:"vertical"}),a(f,{flex:"86px",style:{"text-align":"right"}},{default:l(()=>[a(le,{direction:"vertical",size:18},{default:l(()=>[a(g,{type:"primary",onClick:F},{icon:l(()=>[a(Ie)]),default:l(()=>[u(" "+d(e.$t("key.form.search")),1)]),_:1}),a(g,{onClick:_e},{icon:l(()=>[a(ae)]),default:l(()=>[u(" "+d(e.$t("key.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(te,{style:{"margin-top":"0","margin-bottom":"16px"}}),a(P,{style:{"margin-bottom":"16px"}},{default:l(()=>[a(f,{span:12},{default:l(()=>[a(le,null,{default:l(()=>[a(g,{type:"primary",onClick:o[6]||(o[6]=t=>e.$router.push({name:"KeyCreate"}))},{default:l(()=>[u(d(e.$t("key.operation.create")),1)]),_:1}),a(g,{type:"primary",status:"success",disabled:h.value,title:h.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:o[7]||(o[7]=t=>N({action:"status",value:1}))},{default:l(()=>[u(" \u542F\u7528 ")]),_:1},8,["disabled","title"]),a(g,{type:"primary",status:"danger",disabled:h.value,title:h.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:o[8]||(o[8]=t=>N({action:"status",value:2}))},{default:l(()=>[u(" \u7981\u7528 ")]),_:1},8,["disabled","title"]),a(g,{type:"primary",status:"danger",disabled:h.value,title:h.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:o[9]||(o[9]=t=>N({action:"delete"}))},{default:l(()=>[u(" \u5220\u9664 ")]),_:1},8,["disabled","title"])]),_:1})]),_:1}),a(f,{span:12,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:l(()=>[a(K,{content:e.$t("actions.refresh")},{default:l(()=>[v("div",{class:"action-icon",onClick:F},[a(ae,{size:"18"})])]),_:1},8,["content"]),a(ze,{onSelect:ye},{content:l(()=>[(c(!0),C(I,null,D(x(de),t=>(c(),A(Se,{key:t.value,value:t.value,class:Qe({active:t.value===L.value})},{default:l(()=>[v("span",null,d(t.name),1)]),_:2},1032,["value","class"]))),128))]),default:l(()=>[a(K,{content:e.$t("actions.density")},{default:l(()=>[v("div",Ut,[a(De,{size:"18"})])]),_:1},8,["content"])]),_:1}),a(K,{content:e.$t("actions.column_setting")},{default:l(()=>[a(Ae,{trigger:"click",position:"bl",onPopupVisibleChange:ve},{content:l(()=>[v("div",Pt,[(c(!0),C(I,null,D(z.value,(t,r)=>(c(),C("div",{key:t.dataIndex,class:"setting"},[v("div",Kt,[a(Ee)]),v("div",null,[a(qe,{modelValue:t.checked,"onUpdate:modelValue":O=>t.checked=O,onChange:O=>ge(O,t,r)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),v("div",Ot,d(t.title==="#"?"\u5E8F\u5217\u53F7":t.title),1)]))),128))])]),default:l(()=>[v("div",Mt,[a(Be,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),a(Ue,{ref_key:"tableRef",ref:W,"row-key":"id",loading:x(se),pagination:B,columns:k.value,data:Q.value,bordered:!1,size:L.value,"row-selection":ue,onPageChange:me,onPageSizeChange:pe,onSelectionChange:ke},{key:l(({record:t})=>[u(d(t.key.length>11?t.key.substr(0,10)+t.key.substr(-10):t.key)+" ",1),a(xe,{class:"copy-btn",onClick:r=>he(t.id)},null,8,["onClick"])]),model_names:l(({record:t})=>{var r;return[u(d(((r=t==null?void 0:t.model_names)==null?void 0:r.join(","))||"-"),1)]}),model_agent_names:l(({record:t})=>{var r;return[u(d(((r=t==null?void 0:t.model_agent_names)==null?void 0:r.join(","))||"-"),1)]}),used_quota:l(({record:t})=>[u(" $"+d(t.used_quota>0?x(Ft)(t.used_quota):"0.00"),1)]),remark:l(({record:t})=>[u(d(t.remark||"-"),1)]),status:l(({record:t})=>[a(Le,{modelValue:t.status,"onUpdate:modelValue":r=>t.status=r,"checked-value":1,"unchecked-value":2,onChange:r=>fe({id:`${t.id}`,status:Number(`${t.status}`)})},null,8,["modelValue","onUpdate:modelValue","onChange"])]),operations:l(({record:t})=>[a(g,{type:"text",size:"small",onClick:r=>Ce(t.id)},{default:l(()=>[u(d(e.$t("key.columns.operations.view")),1)]),_:2},1032,["onClick"]),a(g,{type:"text",size:"small",onClick:r=>e.$router.push({name:"KeyUpdate",query:{id:`${t.id}`}})},{default:l(()=>[u(d(e.$t("key.columns.operations.update")),1)]),_:2},1032,["onClick"]),a(Ne,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417?",onOk:r=>ie({id:`${t.id}`})},{default:l(()=>[a(g,{type:"text",size:"small"},{default:l(()=>[u(d(e.$t("key.columns.operations.delete")),1)]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),a(Me,{title:e.$t("menu.key.detail"),"unmount-on-close":"","render-to-body":"",width:700,footer:!1,visible:U.value,onCancel:we},{default:l(()=>[a(Lt,{id:ee.value},null,8,["id"])]),_:1},8,["title","visible"])]),_:1})])}}});const Ia=Ge(Tt,[["__scopeId","data-v-4437e19f"]]);export{Ia as default};
