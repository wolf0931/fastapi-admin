import{u as Ne,C as Re,o as xe,x as Ke,I as Pe,y as Me,_ as Oe}from"./index.e60636e1.js";/* empty css               *//* empty css                *//* empty css               *//* empty css              *//* empty css              *//* empty css                *//* empty css                *//* empty css               *//* empty css              *//* empty css                */import{c as O,S as je}from"./sortable.esm.2109e0e3.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css              */import{d as He,r as ue,e as d,c as j,w as Ge,B as r,C as v,aH as l,aG as t,aL as c,aM as s,aJ as S,aI as D,aD as B,u as H,F as h,D as Je,aE as Qe,n as We,aW as Xe,aK as Ye,aF as Ze,bB as ea,bC as aa,b2 as la,bA as ta,b1 as oa,aS as na,bD as ua,bE as sa,b5 as ia,bF as da,ab as ra,aU as pa,bi as ca,bj as ma,bl as _a,bm as fa,b4 as va,bG as ya,aT as ba,bH as ka,bI as ha,bK as ga,a_ as $a,bJ as Ca,g as wa}from"./arco.aed15247.js";import{h as Va}from"./vue.0cc5b64a.js";import{u as qa}from"./loading.b5911e1d.js";import{s as Fa,q as Ia,a as Sa,b as Da}from"./key.50a17ade.js";import{g as Ba,c as Ea}from"./app.a7fb034e.js";import{q as za}from"./model.3955e329.js";import"./chart.9aa6eafa.js";import"./base.87fcf6e2.js";const Ua={class:"container"},Aa={class:"action-icon"},Ta={class:"action-icon"},La={id:"tableSetting"},Na={style:{"margin-right":"4px",cursor:"move"}},Ra={class:"title"},xa={key:0},Ka={key:1},Pa={key:0},Ma={key:1},Oa={name:"AppKeyList"},ja=He({...Oa,setup(Ha){const{proxy:A}=wa(),se=Va(),ie=ue({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),G=d([]);(async()=>{try{const{data:e}=await Ba();G.value=e.items}catch{}})();const T=d([]);(async()=>{try{const{data:e}=await za();T.value=e.items}catch{}})();const de=async e=>{_(!0);try{await Fa(e),F()}catch{}finally{_(!1)}},J=()=>({type:1,app_id:d(),key:"",models:[],quota:d(),status:d(),created_at:[]}),{loading:re,setLoading:_}=qa(!0),{t:p}=Ne(),Q=d([]),u=d(J()),g=d([]),E=d([]),L=d("medium"),$=d([]),C=d(!0),W=d(),V={current:1,pageSize:10,showTotal:!0,showPageSize:!0},z=ue({...V}),pe=j(()=>[{name:p("searchTable.size.mini"),value:"mini"},{name:p("searchTable.size.small"),value:"small"},{name:p("searchTable.size.medium"),value:"medium"},{name:p("searchTable.size.large"),value:"large"}]),ce=j(()=>[{title:p("key.columns.app_id"),dataIndex:"app_id",slotName:"app_id",align:"center",width:80},{title:p("key.columns.key"),dataIndex:"key",slotName:"key",align:"center",ellipsis:!0,tooltip:!0},{title:p("key.columns.quota"),dataIndex:"quota",slotName:"quota",align:"center"},{title:p("key.columns.used_quota"),dataIndex:"used_quota",slotName:"used_quota",align:"center"},{title:p("key.columns.app.models"),dataIndex:"model_names",slotName:"model_names",align:"center",ellipsis:!0,tooltip:!0},{title:p("key.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:65},{title:p("key.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:132},{title:p("key.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:170}]),me=j(()=>[{label:p("key.dict.status.1"),value:1},{label:p("key.dict.status.2"),value:2}]),q=async(e={...V,type:1,app_id:se.query.app_id})=>{_(!0);try{const{data:o}=await Ia(e);Q.value=o.items,z.current=e.current,z.pageSize=e.pageSize,z.total=o.paging.total}catch{}finally{_(!1)}},F=()=>{q({...V,...u.value})},_e=e=>{q({...V,...u.value,current:e})},fe=e=>{V.pageSize=e,q({...V,...u.value})};q();const ve=()=>{u.value=J()},ye=async e=>{_(!0);try{await Sa(e),F()}catch{}finally{_(!1)}},be=(e,o)=>{L.value=e},ke=(e,o,i)=>{e?g.value.splice(i,0,o):g.value=E.value.filter(f=>f.dataIndex!==o.dataIndex)},X=(e,o,i,f=!1)=>{const b=f?O(e):e;return o>-1&&i>-1&&b.splice(o,1,b.splice(i,1,b[o]).pop()),b},he=e=>{e&&We(()=>{const o=document.getElementById("tableSetting");new je(o,{onEnd(i){const{oldIndex:f,newIndex:b}=i;X(g.value,f,b),X(E.value,f,b)}})})};Ge(()=>ce.value,e=>{g.value=O(e),g.value.forEach((o,i)=>{o.checked=!0}),E.value=O(g.value)},{deep:!0,immediate:!0});const I=d(!1),Y=d(),n=d({}),ge=async e=>{var o,i;_(!0);try{n.value.id=e.id,n.value.key=e.key,n.value.is_limit_quota=e.is_limit_quota,n.value.quota=e.quota,n.value.models=e.models,n.value.ip_whitelist=((o=e.ip_whitelist)==null?void 0:o.join(`
`))||"",n.value.ip_blacklist=((i=e.ip_blacklist)==null?void 0:i.join(`
`))||"",n.value.remark=e.remark,I.value=!0}catch{}finally{_(!1)}},$e=async e=>{var i;if(await((i=Y.value)==null?void 0:i.validate())){I.value=!0,e(!1);return}_(!0);try{await Ea(n.value),navigator.clipboard.writeText(n.value.key),Xe.success(p("app.success.key_config")),e(),q()}catch{}finally{_(!1)}},Ce=()=>{I.value=!1},we=e=>{$.value=e,C.value=!e.length},N=e=>{if($.value.length===0)A.$message.info("\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E");else{let o=`\u662F\u5426\u786E\u5B9A\u64CD\u4F5C\u6240\u9009\u7684${$.value.length}\u6761\u6570\u636E?`;switch(e.action){case"status":e.value===1?o=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009\u7684${$.value.length}\u6761\u6570\u636E?`:o=`\u662F\u5426\u786E\u5B9A\u7981\u7528\u6240\u9009\u7684${$.value.length}\u6761\u6570\u636E?`;break;case"delete":o=`\u662F\u5426\u786E\u5B9A\u5220\u9664\u6240\u9009\u7684${$.value.length}\u6761\u6570\u636E?`;break}A.$modal.warning({title:"\u8B66\u544A",titleAlign:"start",content:o,hideCancel:!1,onOk:()=>{_(!0),e.ids=$.value,Da(e).then(i=>{_(!1),A.$message.success("\u64CD\u4F5C\u6210\u529F"),F(),W.value.selectAll(!1)})}})}};return(e,o)=>{const i=Re,f=Ye,b=Ze,R=ea,U=aa,m=la,y=ta,Z=oa,ee=na,Ve=ua,x=sa,ae=ia,le=da,qe=ra,k=pa,te=xe,oe=ca,K=ma,Fe=Ke,Ie=_a,Se=fa,De=Pe,Be=Me,Ee=va,ze=ya,ne=ba,Ue=ka,Ae=ha,P=ga,Te=$a,Le=Ca;return r(),v("div",Ua,[l(b,{class:"container-breadcrumb"},{default:t(()=>[l(f,null,{default:t(()=>[l(i)]),_:1}),l(f,null,{default:t(()=>[c(s(e.$t("menu.key")),1)]),_:1}),l(f,null,{default:t(()=>[c(s(e.$t("menu.key.app.list")),1)]),_:1})]),_:1}),l(Le,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:t(()=>[l(x,null,{default:t(()=>[l(y,{flex:1},{default:t(()=>[l(ae,{model:u.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:t(()=>[l(x,{gutter:16},{default:t(()=>[l(y,{span:8},{default:t(()=>[l(m,{field:"app_id",label:e.$t("key.form.app")},{default:t(()=>[l(U,{modelValue:u.value.app_id,"onUpdate:modelValue":o[0]||(o[0]=a=>u.value.app_id=a),placeholder:e.$t("key.form.selectDefault"),"allow-clear":""},{default:t(()=>[(r(!0),v(S,null,D(G.value,a=>(r(),B(R,{key:a.app_id,value:a.app_id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),l(y,{span:8},{default:t(()=>[l(m,{field:"key",label:e.$t("key.form.key")},{default:t(()=>[l(Z,{modelValue:u.value.key,"onUpdate:modelValue":o[1]||(o[1]=a=>u.value.key=a),placeholder:e.$t("key.form.key.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),l(y,{span:8},{default:t(()=>[l(m,{field:"models",label:e.$t("key.form.models")},{default:t(()=>[l(U,{modelValue:u.value.models,"onUpdate:modelValue":o[2]||(o[2]=a=>u.value.models=a),placeholder:e.$t("key.form.selectDefault"),"max-tag-count":2,multiple:"","allow-search":"","allow-clear":""},{default:t(()=>[(r(!0),v(S,null,D(T.value,a=>(r(),B(R,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),l(y,{span:8},{default:t(()=>[l(m,{field:"quota",label:e.$t("key.form.quota")},{default:t(()=>[l(ee,{modelValue:u.value.quota,"onUpdate:modelValue":o[3]||(o[3]=a=>u.value.quota=a),precision:0,placeholder:e.$t("key.form.quota.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),l(y,{span:8},{default:t(()=>[l(m,{field:"status",label:e.$t("key.form.status")},{default:t(()=>[l(U,{modelValue:u.value.status,"onUpdate:modelValue":o[4]||(o[4]=a=>u.value.status=a),options:H(me),placeholder:e.$t("key.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),l(y,{span:8},{default:t(()=>[l(m,{field:"created_at",label:e.$t("key.form.created_at")},{default:t(()=>[l(Ve,{modelValue:u.value.created_at,"onUpdate:modelValue":o[5]||(o[5]=a=>u.value.created_at=a),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l(le,{style:{height:"84px"},direction:"vertical"}),l(y,{flex:"86px",style:{"text-align":"right"}},{default:t(()=>[l(oe,{direction:"vertical",size:18},{default:t(()=>[l(k,{type:"primary",onClick:F},{icon:t(()=>[l(qe)]),default:t(()=>[c(" "+s(e.$t("key.form.search")),1)]),_:1}),l(k,{onClick:ve},{icon:t(()=>[l(te)]),default:t(()=>[c(" "+s(e.$t("key.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),l(le,{style:{"margin-top":"0","margin-bottom":"16px"}}),l(x,{style:{"margin-bottom":"16px"}},{default:t(()=>[l(y,{span:12},{default:t(()=>[l(oe,null,{default:t(()=>[l(k,{type:"primary",status:"success",disabled:C.value,title:C.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:o[6]||(o[6]=a=>N({action:"status",value:1}))},{default:t(()=>[c(" \u542F\u7528 ")]),_:1},8,["disabled","title"]),l(k,{type:"primary",status:"danger",disabled:C.value,title:C.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:o[7]||(o[7]=a=>N({action:"status",value:2}))},{default:t(()=>[c(" \u7981\u7528 ")]),_:1},8,["disabled","title"]),l(k,{type:"primary",status:"danger",disabled:C.value,title:C.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:o[8]||(o[8]=a=>N({action:"delete"}))},{default:t(()=>[c(" \u5220\u9664 ")]),_:1},8,["disabled","title"])]),_:1})]),_:1}),l(y,{span:12,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:t(()=>[l(K,{content:e.$t("searchTable.actions.refresh")},{default:t(()=>[h("div",{class:"action-icon",onClick:F},[l(te,{size:"18"})])]),_:1},8,["content"]),l(Se,{onSelect:be},{content:t(()=>[(r(!0),v(S,null,D(H(pe),a=>(r(),B(Ie,{key:a.value,value:a.value,class:Je({active:a.value===L.value})},{default:t(()=>[h("span",null,s(a.name),1)]),_:2},1032,["value","class"]))),128))]),default:t(()=>[l(K,{content:e.$t("searchTable.actions.density")},{default:t(()=>[h("div",Aa,[l(Fe,{size:"18"})])]),_:1},8,["content"])]),_:1}),l(K,{content:e.$t("searchTable.actions.columnSetting")},{default:t(()=>[l(ze,{trigger:"click",position:"bl",onPopupVisibleChange:he},{content:t(()=>[h("div",La,[(r(!0),v(S,null,D(E.value,(a,w)=>(r(),v("div",{key:a.dataIndex,class:"setting"},[h("div",Na,[l(Be)]),h("div",null,[l(Ee,{modelValue:a.checked,"onUpdate:modelValue":M=>a.checked=M,onChange:M=>ke(M,a,w)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),h("div",Ra,s(a.title==="#"?"\u5E8F\u5217\u53F7":a.title),1)]))),128))])]),default:t(()=>[h("div",Ta,[l(De,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),l(Ae,{ref_key:"tableRef",ref:W,"row-key":"id",loading:H(re),pagination:z,columns:g.value,data:Q.value,bordered:!1,size:L.value,"row-selection":ie,onPageChange:_e,onPageSizeChange:fe,onSelectionChange:we},{quota:t(({record:a})=>[a.is_limit_quota?(r(),v("span",xa," $"+s(parseFloat((a.quota/5e5).toFixed(6))),1)):(r(),v("span",Ka,s(e.$t("key.columns.quota.no_limit")),1))]),used_quota:t(({record:a})=>[c(" $"+s(a.used_quota>0?parseFloat((a.used_quota/5e5).toFixed(6)):"0.00"),1)]),model_names:t(({record:a})=>[a.model_names?(r(),v("span",Pa,s(a.model_names.join(",")),1)):(r(),v("span",Ma,s(e.$t("key.columns.app.models.no_limit")),1))]),type:t(({record:a})=>[c(s(e.$t(`key.dict.type.${a.type}`)),1)]),corp:t(({record:a})=>[c(s(e.$t(`key.dict.corp.${a.corp}`)),1)]),dataFormat:t(({record:a})=>[c(s(e.$t(`key.dict.data_format.${a.data_format}`)),1)]),status:t(({record:a})=>[l(ne,{modelValue:a.status,"onUpdate:modelValue":w=>a.status=w,"checked-value":1,"unchecked-value":2,onChange:w=>ye({id:`${a.id}`,status:Number(`${a.status}`)})},null,8,["modelValue","onUpdate:modelValue","onChange"])]),operations:t(({record:a})=>[l(k,{type:"text",size:"small",onClick:w=>e.$router.push({name:"KeyDetail",query:{id:`${a.id}`}})},{default:t(()=>[c(s(e.$t("key.columns.operations.view")),1)]),_:2},1032,["onClick"]),l(k,{type:"text",size:"small",onClick:w=>ge(a)},{default:t(()=>[c(s(e.$t("key.columns.operations.update")),1)]),_:2},1032,["onClick"]),l(Ue,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417?",onOk:w=>de({id:`${a.id}`})},{default:t(()=>[l(k,{type:"text",size:"small"},{default:t(()=>[c(s(e.$t("key.columns.operations.delete")),1)]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),l(Te,{visible:I.value,"onUpdate:visible":o[16]||(o[16]=a=>I.value=a),title:e.$t("app.form.title.keyConfig"),"ok-text":e.$t("app.button.save"),onCancel:Ce,onBeforeOk:$e},{default:t(()=>[l(ae,{ref_key:"formRef",ref:Y,model:n.value},{default:t(()=>[l(m,{field:"key",label:e.$t("app.label.key")},{default:t(()=>[l(Z,{modelValue:n.value.key,"onUpdate:modelValue":o[9]||(o[9]=a=>n.value.key=a),placeholder:e.$t("app.placeholder.key"),readonly:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(m,{field:"is_limit_quota",label:e.$t("app.label.isLimitQuota")},{default:t(()=>[l(ne,{modelValue:n.value.is_limit_quota,"onUpdate:modelValue":o[10]||(o[10]=a=>n.value.is_limit_quota=a)},null,8,["modelValue"])]),_:1},8,["label"]),n.value.is_limit_quota?(r(),B(m,{key:0,field:"quota",label:e.$t("app.label.quota"),rules:[{required:!0,message:e.$t("app.error.quota.required")}]},{default:t(()=>[l(ee,{modelValue:n.value.quota,"onUpdate:modelValue":o[11]||(o[11]=a=>n.value.quota=a),placeholder:e.$t("app.placeholder.quota"),precision:0,min:0,max:9999999999999},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):Qe("",!0),l(m,{field:"models",label:e.$t("app.label.models")},{default:t(()=>[l(U,{modelValue:n.value.models,"onUpdate:modelValue":o[12]||(o[12]=a=>n.value.models=a),placeholder:e.$t("app.placeholder.models"),"max-tag-count":3,multiple:"","allow-clear":""},{default:t(()=>[(r(!0),v(S,null,D(T.value,a=>(r(),B(R,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(m,{field:"ip_whitelist",label:e.$t("app.label.ip_whitelist")},{default:t(()=>[l(P,{modelValue:n.value.ip_whitelist,"onUpdate:modelValue":o[13]||(o[13]=a=>n.value.ip_whitelist=a),placeholder:e.$t("app.placeholder.ip_whitelist"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(m,{field:"ip_blacklist",label:e.$t("app.label.ip_blacklist")},{default:t(()=>[l(P,{modelValue:n.value.ip_blacklist,"onUpdate:modelValue":o[14]||(o[14]=a=>n.value.ip_blacklist=a),placeholder:e.$t("app.placeholder.ip_blacklist"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(m,{field:"remark",label:e.$t("app.placeholder.remark")},{default:t(()=>[l(P,{modelValue:n.value.remark,"onUpdate:modelValue":o[15]||(o[15]=a=>n.value.remark=a),placeholder:e.$t("app.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["visible","title","ok-text"])]),_:1})])}}});const hl=Oe(ja,[["__scopeId","data-v-3d165716"]]);export{hl as default};