import{u as Ue,z as De,o as Ae,x as Te,I as Be,y as Le,_ as Ne}from"./index.dee4ecd9.js";/* empty css               *//* empty css                *//* empty css               *//* empty css              *//* empty css              *//* empty css                *//* empty css                *//* empty css               *//* empty css              *//* empty css                */import{c as x,S as Fe}from"./sortable.esm.2109e0e3.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css              */import{d as Pe,r as Z,e as m,c as E,w as Re,B as u,C as v,aH as a,aG as t,aL as b,aM as p,aJ as U,aI as D,aD as A,u as K,F as k,D as xe,aE as Ee,n as Ke,aW as Me,aK as Oe,aF as je,b1 as He,b2 as Ge,bA as Je,bB as Qe,bC as We,bD as Xe,bE as Ye,b5 as Ze,bF as ea,ab as aa,aU as la,bi as ta,bj as oa,bl as na,bm as sa,b4 as pa,bG as ia,aT as ua,bH as da,bI as ra,aS as ma,bK as ca,a_ as _a,bJ as fa}from"./arco.aed15247.js";import{u as va}from"./loading.b5911e1d.js";import{s as ba,q as ha,a as ya,b as ga,c as ka}from"./app.ae648272.js";import{q as $a}from"./model.a2e6dd96.js";import"./chart.9aa6eafa.js";import"./vue.0cc5b64a.js";import"./base.87fcf6e2.js";const wa={class:"container"},Va={class:"action-icon"},Ca={class:"action-icon"},Ia={id:"tableSetting"},qa={style:{"margin-right":"4px",cursor:"move"}},za={class:"title"},Sa={key:0},Ua={key:1},Da={key:0},Aa={key:1},Ta={name:"AppList"},Ba=Pe({...Ta,setup(La){const ee=Z({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),T=m([]);(async()=>{try{const{data:e}=await $a();T.value=e.items}catch{}})();const ae=async e=>{_(!0);try{await ba(e),z()}catch{}finally{_(!1)}},M=()=>({app_id:m(),name:"",models:[],key:"",type:m(),status:m(),created_at:[]}),{loading:le,setLoading:_}=va(!0),{t:i}=Ue(),O=m([]),s=m(M()),$=m([]),C=m([]),B=m("medium"),w={current:1,pageSize:10,showTotal:!0,showPageSize:!0},I=Z({...w}),te=E(()=>[{name:i("searchTable.size.mini"),value:"mini"},{name:i("searchTable.size.small"),value:"small"},{name:i("searchTable.size.medium"),value:"medium"},{name:i("searchTable.size.large"),value:"large"}]),oe=E(()=>[{title:i("app.columns.appId"),dataIndex:"app_id",slotName:"app_id",align:"center",width:80},{title:i("app.columns.name"),dataIndex:"name",slotName:"name",align:"center",ellipsis:!0,tooltip:!0},{title:i("app.columns.models"),dataIndex:"model_names",slotName:"model_names",align:"center",ellipsis:!0,tooltip:!0},{title:i("app.columns.quota"),dataIndex:"quota",slotName:"quota",align:"center",width:120},{title:i("app.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:65},{title:i("app.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:132},{title:i("app.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:320}]),ne=E(()=>[{label:i("app.dict.status.1"),value:1},{label:i("app.dict.status.2"),value:2}]),q=async(e={...w})=>{_(!0);try{const{data:o}=await ha(e);O.value=o.items,I.current=e.current,I.pageSize=e.pageSize,I.total=o.paging.total}catch{}finally{_(!1)}},z=()=>{q({...w,...s.value})},se=e=>{q({...w,...s.value,current:e})},pe=e=>{w.pageSize=e,q({...w,...s.value})};q();const ie=()=>{s.value=M()},ue=async e=>{_(!0);try{await ya(e),z()}catch{}finally{_(!1)}},de=(e,o)=>{B.value=e},re=(e,o,r)=>{e?$.value.splice(r,0,o):$.value=C.value.filter(c=>c.dataIndex!==o.dataIndex)},j=(e,o,r,c=!1)=>{const h=c?x(e):e;return o>-1&&r>-1&&h.splice(o,1,h.splice(r,1,h[o]).pop()),h},me=e=>{e&&Ke(()=>{const o=document.getElementById("tableSetting");new Fe(o,{onEnd(r){const{oldIndex:c,newIndex:h}=r;j($.value,c,h),j(C.value,c,h)}})})};Re(()=>oe.value,e=>{$.value=x(e),$.value.forEach((o,r)=>{o.checked=!0}),C.value=x($.value)},{deep:!0,immediate:!0});const V=m(!1),H=m(),n=m({}),ce=async e=>{_(!0);try{const{data:o}=await ga(e);n.value.app_id=o.app_id,n.value.key=o.key,V.value=!0}catch{}finally{_(!1)}},_e=async e=>{var r;if(await((r=H.value)==null?void 0:r.validate())){V.value=!0,e(!1);return}_(!0);try{await ka(n.value),navigator.clipboard.writeText(n.value.key),Me.success(i("app.success.key_config")),e()}catch{}finally{_(!1)}},fe=()=>{V.value=!1};return(e,o)=>{const r=De,c=Oe,h=je,S=He,d=Ge,f=Je,G=Qe,L=We,ve=Xe,N=Ye,J=Ze,Q=ea,be=aa,g=la,W=Ae,X=ta,F=oa,he=Te,ye=na,ge=sa,ke=Be,$e=Le,we=pa,Ve=ia,Y=ua,Ce=da,Ie=ra,qe=ma,P=ca,ze=_a,Se=fa;return u(),v("div",wa,[a(h,{class:"container-breadcrumb"},{default:t(()=>[a(c,null,{default:t(()=>[a(r)]),_:1}),a(c,null,{default:t(()=>[b(p(e.$t("menu.app")),1)]),_:1}),a(c,null,{default:t(()=>[b(p(e.$t("menu.app.list")),1)]),_:1})]),_:1}),a(Se,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:t(()=>[a(N,null,{default:t(()=>[a(f,{flex:1},{default:t(()=>[a(J,{model:s.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:t(()=>[a(N,{gutter:16},{default:t(()=>[a(f,{span:8},{default:t(()=>[a(d,{field:"app_id",label:e.$t("app.form.appId")},{default:t(()=>[a(S,{modelValue:s.value.app_id,"onUpdate:modelValue":o[0]||(o[0]=l=>s.value.app_id=l),placeholder:e.$t("app.form.appId.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(f,{span:8},{default:t(()=>[a(d,{field:"name",label:e.$t("app.form.name")},{default:t(()=>[a(S,{modelValue:s.value.name,"onUpdate:modelValue":o[1]||(o[1]=l=>s.value.name=l),placeholder:e.$t("app.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(f,{span:8},{default:t(()=>[a(d,{field:"models",label:e.$t("app.form.models")},{default:t(()=>[a(L,{modelValue:s.value.models,"onUpdate:modelValue":o[2]||(o[2]=l=>s.value.models=l),placeholder:e.$t("app.form.selectDefault"),"max-tag-count":2,multiple:"","allow-search":"","allow-clear":""},{default:t(()=>[(u(!0),v(U,null,D(T.value,l=>(u(),A(G,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(f,{span:8},{default:t(()=>[a(d,{field:"key",label:e.$t("app.form.key")},{default:t(()=>[a(S,{modelValue:s.value.key,"onUpdate:modelValue":o[3]||(o[3]=l=>s.value.key=l),placeholder:e.$t("app.form.key.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(f,{span:8},{default:t(()=>[a(d,{field:"status",label:e.$t("app.form.status")},{default:t(()=>[a(L,{modelValue:s.value.status,"onUpdate:modelValue":o[4]||(o[4]=l=>s.value.status=l),options:K(ne),placeholder:e.$t("app.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),a(f,{span:8},{default:t(()=>[a(d,{field:"created_at",label:e.$t("app.form.created_at")},{default:t(()=>[a(ve,{modelValue:s.value.created_at,"onUpdate:modelValue":o[5]||(o[5]=l=>s.value.created_at=l),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(Q,{style:{height:"84px"},direction:"vertical"}),a(f,{flex:"86px",style:{"text-align":"right"}},{default:t(()=>[a(X,{direction:"vertical",size:18},{default:t(()=>[a(g,{type:"primary",onClick:z},{icon:t(()=>[a(be)]),default:t(()=>[b(" "+p(e.$t("app.form.search")),1)]),_:1}),a(g,{onClick:ie},{icon:t(()=>[a(W)]),default:t(()=>[b(" "+p(e.$t("app.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(Q,{style:{"margin-top":"0","margin-bottom":"16px"}}),a(N,{style:{"margin-bottom":"16px"}},{default:t(()=>[a(f,{span:12},{default:t(()=>[a(X,null,{default:t(()=>[a(g,{type:"primary",onClick:o[6]||(o[6]=l=>e.$router.push({name:"AppCreate"}))},{default:t(()=>[b(p(e.$t("app.operation.create")),1)]),_:1})]),_:1})]),_:1}),a(f,{span:12,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:t(()=>[a(F,{content:e.$t("searchTable.actions.refresh")},{default:t(()=>[k("div",{class:"action-icon",onClick:z},[a(W,{size:"18"})])]),_:1},8,["content"]),a(ge,{onSelect:de},{content:t(()=>[(u(!0),v(U,null,D(K(te),l=>(u(),A(ye,{key:l.value,value:l.value,class:xe({active:l.value===B.value})},{default:t(()=>[k("span",null,p(l.name),1)]),_:2},1032,["value","class"]))),128))]),default:t(()=>[a(F,{content:e.$t("searchTable.actions.density")},{default:t(()=>[k("div",Va,[a(he,{size:"18"})])]),_:1},8,["content"])]),_:1}),a(F,{content:e.$t("searchTable.actions.columnSetting")},{default:t(()=>[a(Ve,{trigger:"click",position:"bl",onPopupVisibleChange:me},{content:t(()=>[k("div",Ia,[(u(!0),v(U,null,D(C.value,(l,y)=>(u(),v("div",{key:l.dataIndex,class:"setting"},[k("div",qa,[a($e)]),k("div",null,[a(we,{modelValue:l.checked,"onUpdate:modelValue":R=>l.checked=R,onChange:R=>re(R,l,y)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),k("div",za,p(l.title==="#"?"\u5E8F\u5217\u53F7":l.title),1)]))),128))])]),default:t(()=>[k("div",Ca,[a(ke,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),a(Ie,{"row-key":"id",loading:K(le),pagination:I,columns:$.value,data:O.value,bordered:!1,size:B.value,"row-selection":ee,onPageChange:se,onPageSizeChange:pe},{model_names:t(({record:l})=>[l.model_names?(u(),v("span",Sa,p(l.model_names.join(",")),1)):(u(),v("span",Ua,p(e.$t("app.columns.models.no_limit")),1))]),quota:t(({record:l})=>[l.is_limit_quota?(u(),v("span",Da,p(l.quota.toLocaleString()),1)):(u(),v("span",Aa,p(e.$t("app.columns.quota.no_limit")),1))]),status:t(({record:l})=>[a(Y,{modelValue:l.status,"onUpdate:modelValue":y=>l.status=y,"checked-value":1,"unchecked-value":2,onChange:y=>ue({id:`${l.id}`,status:Number(`${l.status}`)})},null,8,["modelValue","onUpdate:modelValue","onChange"])]),operations:t(({record:l})=>[a(g,{type:"text",size:"small",onClick:y=>e.$router.push({name:"AppDetail",query:{id:`${l.id}`}})},{default:t(()=>[b(p(e.$t("app.columns.operations.view")),1)]),_:2},1032,["onClick"]),a(g,{type:"text",size:"small",onClick:y=>e.$router.push({name:"AppUpdate",query:{id:`${l.id}`}})},{default:t(()=>[b(p(e.$t("app.columns.operations.update")),1)]),_:2},1032,["onClick"]),a(g,{type:"text",size:"small",onClick:y=>ce({app_id:`${l.app_id}`})},{default:t(()=>[b(p(e.$t("app.columns.operations.createKey")),1)]),_:2},1032,["onClick"]),a(g,{type:"text",size:"small",onClick:y=>e.$router.push({name:"KeyAppList",query:{app_id:`${l.app_id}`}})},{default:t(()=>[b(p(e.$t("app.columns.operations.manageKey")),1)]),_:2},1032,["onClick"]),a(Ce,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417?",onOk:y=>ae({id:`${l.id}`})},{default:t(()=>[a(g,{type:"text",size:"small"},{default:t(()=>[b(p(e.$t("app.columns.operations.delete")),1)]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),a(ze,{visible:V.value,"onUpdate:visible":o[14]||(o[14]=l=>V.value=l),title:e.$t("app.form.title.keyConfig"),"ok-text":e.$t("app.button.save"),onCancel:fe,onBeforeOk:_e},{default:t(()=>[a(J,{ref_key:"formRef",ref:H,model:n.value},{default:t(()=>[a(d,{field:"key",label:e.$t("app.label.key")},{default:t(()=>[a(S,{modelValue:n.value.key,"onUpdate:modelValue":o[7]||(o[7]=l=>n.value.key=l),placeholder:e.$t("app.placeholder.key"),readonly:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(d,{field:"is_limit_quota",label:e.$t("app.label.isLimitQuota")},{default:t(()=>[a(Y,{modelValue:n.value.is_limit_quota,"onUpdate:modelValue":o[8]||(o[8]=l=>n.value.is_limit_quota=l)},null,8,["modelValue"])]),_:1},8,["label"]),n.value.is_limit_quota?(u(),A(d,{key:0,field:"quota",label:e.$t("app.label.quota"),rules:[{required:!0,message:e.$t("app.error.quota.required")}]},{default:t(()=>[a(qe,{modelValue:n.value.quota,"onUpdate:modelValue":o[9]||(o[9]=l=>n.value.quota=l),placeholder:e.$t("app.placeholder.quota"),precision:0,min:0,max:9999999999999},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):Ee("",!0),a(d,{field:"models",label:e.$t("app.label.models")},{default:t(()=>[a(L,{modelValue:n.value.models,"onUpdate:modelValue":o[10]||(o[10]=l=>n.value.models=l),placeholder:e.$t("app.placeholder.models"),"max-tag-count":3,multiple:"","allow-clear":""},{default:t(()=>[(u(!0),v(U,null,D(T.value,l=>(u(),A(G,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(d,{field:"ip_whitelist",label:e.$t("app.label.ip_whitelist")},{default:t(()=>[a(P,{modelValue:n.value.ip_whitelist,"onUpdate:modelValue":o[11]||(o[11]=l=>n.value.ip_whitelist=l),placeholder:e.$t("app.placeholder.ip_whitelist"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(d,{field:"ip_blacklist",label:e.$t("app.label.ip_blacklist")},{default:t(()=>[a(P,{modelValue:n.value.ip_blacklist,"onUpdate:modelValue":o[12]||(o[12]=l=>n.value.ip_blacklist=l),placeholder:e.$t("app.placeholder.ip_blacklist"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(d,{field:"remark",label:e.$t("app.placeholder.remark")},{default:t(()=>[a(P,{modelValue:n.value.remark,"onUpdate:modelValue":o[13]||(o[13]=l=>n.value.remark=l),placeholder:e.$t("app.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["visible","title","ok-text"])]),_:1})])}}});const pl=Ne(Ba,[["__scopeId","data-v-5ac1026b"]]);export{pl as default};