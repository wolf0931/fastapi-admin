import{u as qe,E as Pe,o as He,x as Re,I as je,y as Ge,_ as Je}from"./index.1e5fc0c8.js";/* empty css               *//* empty css              *//* empty css              *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css              *//* empty css                */import{c as j,S as Xe}from"./sortable.esm.2109e0e3.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css              */import{d as Ze,r as se,e as d,c as A,w as Ke,B as b,C as w,aH as l,aG as u,aL as n,aM as m,u as I,F as h,aJ as L,aI as T,aD as G,D as Qe,n as We,aK as Ye,aF as el,bC as ll,b2 as tl,bA as al,b1 as ul,bD as ol,bE as nl,b5 as sl,bF as dl,ab as il,aU as rl,bi as cl,bj as ml,bl as pl,bm as fl,b4 as vl,bG as _l,aT as gl,bH as bl,bI as yl,bB as Cl,a_ as hl,bJ as $l,g as El}from"./arco.aed15247.js";import{u as Fl}from"./loading.b5911e1d.js";import{q as wl,s as kl,a as Bl,b as Dl,c as Vl}from"./model.93efeb72.js";import{f as Al}from"./agent.3d051772.js";import"./chart.9aa6eafa.js";import"./vue.0cc5b64a.js";import"./base.87fcf6e2.js";const Il={class:"container"},Sl={class:"action-icon"},zl={class:"action-icon"},Ml={id:"tableSetting"},Ul={style:{"margin-right":"4px",cursor:"move"}},Ol={class:"title"},Ll={name:"ModelList"},Tl=Ze({...Ll,setup(Nl){const{proxy:N}=El(),de=se({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),J=d([]);(async()=>{try{const{data:e}=await wl();J.value=e.items}catch{}})();const X=d([]);(async()=>{try{const{data:e}=await Al();X.value=e.items}catch{}})();const ie=async e=>{y(!0);try{await kl(e),k()}catch{}finally{y(!1)}},Z=()=>({corp:"",name:"",model:"",type:d(),status:d(),created_at:[]}),{loading:re,setLoading:y}=Fl(!0),{t:o}=qe(),K=d([]),i=d(Z()),$=d([]),S=d([]),x=d("medium"),p=d([]),s=d(!0),Q=d(),F={current:1,pageSize:10,showTotal:!0,showPageSize:!0},z=se({...F}),ce=A(()=>[{name:o("searchTable.size.mini"),value:"mini"},{name:o("searchTable.size.small"),value:"small"},{name:o("searchTable.size.medium"),value:"medium"},{name:o("searchTable.size.large"),value:"large"}]),me=A(()=>[{title:o("model.columns.corp"),dataIndex:"corp",slotName:"corp",align:"center",width:110},{title:o("model.columns.name"),dataIndex:"name",slotName:"name",align:"center"},{title:o("model.columns.model"),dataIndex:"model",slotName:"model",align:"center"},{title:o("model.columns.prompt_price"),dataIndex:"prompt_price",slotName:"prompt_price",align:"center"},{title:o("model.columns.completion_price"),dataIndex:"completion_price",slotName:"completion_price",align:"center"},{title:o("model.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:65},{title:o("model.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:132},{title:o("model.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:170}]),pe=A(()=>[{label:o("model.dict.corp.OpenAI"),value:"OpenAI"},{label:o("model.dict.corp.Baidu"),value:"Baidu"},{label:o("model.dict.corp.Xfyun"),value:"Xfyun"},{label:o("model.dict.corp.Aliyun"),value:"Aliyun"},{label:o("model.dict.corp.ZhipuAI"),value:"ZhipuAI"},{label:o("model.dict.corp.Midjourney"),value:"Midjourney"}]),fe=A(()=>[{label:o("model.dict.type.1"),value:1},{label:o("model.dict.type.2"),value:2},{label:o("model.dict.type.3"),value:3},{label:o("model.dict.type.4"),value:4}]),ve=A(()=>[{label:o("model.dict.status.1"),value:1},{label:o("model.dict.status.2"),value:2}]),M=async(e={...F})=>{y(!0);try{const{data:t}=await Bl(e);K.value=t.items,z.current=e.current,z.pageSize=e.pageSize,z.total=t.paging.total}catch{}finally{y(!1)}},k=()=>{M({...F,...i.value})},_e=e=>{M({...F,...i.value,current:e})},ge=e=>{F.pageSize=e,M({...F,...i.value})};M();const be=()=>{i.value=Z()},ye=async e=>{y(!0);try{await Dl(e),k()}catch{}finally{y(!1)}},Ce=(e,t)=>{x.value=e},he=(e,t,r)=>{e?$.value.splice(r,0,t):$.value=S.value.filter(v=>v.dataIndex!==t.dataIndex)},W=(e,t,r,v=!1)=>{const g=v?j(e):e;return t>-1&&r>-1&&g.splice(t,1,g.splice(r,1,g[t]).pop()),g},$e=e=>{e&&We(()=>{const t=document.getElementById("tableSetting");new Xe(t,{onEnd(r){const{oldIndex:v,newIndex:g}=r;W($.value,v,g),W(S.value,v,g)}})})};Ke(()=>me.value,e=>{$.value=j(e),$.value.forEach((t,r)=>{t.checked=!0}),S.value=j($.value)},{deep:!0,immediate:!0});const Y=d(),B=d(!1),U=d({}),Ee=async e=>{var r;if(await((r=Y.value)==null?void 0:r.validate())){B.value=!0,e(!1);return}e(),f({action:"forward",value:"all",target_model:U.value.target_model})},Fe=()=>{B.value=!1},ee=d(),D=d(!1),O=d({}),we=async e=>{var r;if(await((r=ee.value)==null?void 0:r.validate())){D.value=!0,e(!1);return}e(),f({action:"agent",value:"all",model_agents:O.value.model_agents})},ke=()=>{D.value=!1},Be=e=>{p.value=e,s.value=!e.length},f=e=>{if(p.value.length===0)N.$message.info("\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E");else{let t=`\u662F\u5426\u786E\u5B9A\u64CD\u4F5C\u6240\u9009\u7684${p.value.length}\u6761\u6570\u636E?`;switch(e.action){case"agent":e.value===!0?t=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009${p.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406?`:e.value===!1?t=`\u662F\u5426\u786E\u5B9A\u5173\u95ED\u6240\u9009${p.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406?`:e.value==="all"&&(e.model_agents?t=`\u662F\u5426\u786E\u5B9A\u5C06\u6240\u9009${p.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406\u542F\u7528\u5E76\u4F7F\u7528\u6240\u9009\u7684\u6A21\u578B\u4EE3\u7406?`:D.value=!0);break;case"forward":e.value===!0?t=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009${p.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1?`:e.value===!1?t=`\u662F\u5426\u786E\u5B9A\u5173\u95ED\u6240\u9009${p.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1?`:e.value==="all"&&(e.target_model?t=`\u662F\u5426\u786E\u5B9A\u5C06\u6240\u9009${p.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1\u542F\u7528\u5E76\u5168\u90E8\u8F6C\u53D1\u5230\u6240\u9009\u6A21\u578B?`:B.value=!0);break;case"status":e.value===1?t=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009\u7684${p.value.length}\u6761\u6570\u636E?`:t=`\u662F\u5426\u786E\u5B9A\u7981\u7528\u6240\u9009\u7684${p.value.length}\u6761\u6570\u636E?`;break;case"delete":t=`\u662F\u5426\u786E\u5B9A\u5220\u9664\u6240\u9009\u7684${p.value.length}\u6761\u6570\u636E?`;break}if(e.action==="agent"&&e.value==="all"&&!e.model_agents||e.action==="forward"&&e.value==="all"&&!e.target_model)return;N.$modal.warning({title:"\u8B66\u544A",titleAlign:"start",content:t,hideCancel:!1,onOk:()=>{y(!0),e.ids=p.value,Vl(e).then(r=>{y(!1),N.$message.success("\u64CD\u4F5C\u6210\u529F"),k(),Q.value.selectAll(!1)})}})}};return(e,t)=>{const r=Pe,v=Ye,g=el,V=ll,C=tl,_=al,le=ul,De=ol,q=nl,P=sl,te=dl,Ve=il,c=rl,ae=He,ue=cl,H=ml,Ae=Re,Ie=pl,Se=fl,ze=je,Me=Ge,Ue=vl,Oe=_l,Le=gl,Te=bl,Ne=yl,oe=Cl,ne=hl,xe=$l;return b(),w("div",Il,[l(g,{class:"container-breadcrumb"},{default:u(()=>[l(v,null,{default:u(()=>[l(r)]),_:1}),l(v,null,{default:u(()=>[n(m(e.$t("menu.model")),1)]),_:1}),l(v,null,{default:u(()=>[n(m(e.$t("menu.model.list")),1)]),_:1})]),_:1}),l(xe,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:u(()=>[l(q,null,{default:u(()=>[l(_,{flex:1},{default:u(()=>[l(P,{model:i.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:u(()=>[l(q,{gutter:16},{default:u(()=>[l(_,{span:8},{default:u(()=>[l(C,{field:"corp",label:e.$t("model.form.corp")},{default:u(()=>[l(V,{modelValue:i.value.corp,"onUpdate:modelValue":t[0]||(t[0]=a=>i.value.corp=a),options:I(pe),placeholder:e.$t("model.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),l(_,{span:8},{default:u(()=>[l(C,{field:"name",label:e.$t("model.form.name")},{default:u(()=>[l(le,{modelValue:i.value.name,"onUpdate:modelValue":t[1]||(t[1]=a=>i.value.name=a),placeholder:e.$t("model.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),l(_,{span:8},{default:u(()=>[l(C,{field:"model",label:e.$t("model.form.model")},{default:u(()=>[l(le,{modelValue:i.value.model,"onUpdate:modelValue":t[2]||(t[2]=a=>i.value.model=a),placeholder:e.$t("model.form.model.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),l(_,{span:8},{default:u(()=>[l(C,{field:"type",label:e.$t("model.form.type")},{default:u(()=>[l(V,{modelValue:i.value.type,"onUpdate:modelValue":t[3]||(t[3]=a=>i.value.type=a),options:I(fe),placeholder:e.$t("model.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),l(_,{span:8},{default:u(()=>[l(C,{field:"status",label:e.$t("model.form.status")},{default:u(()=>[l(V,{modelValue:i.value.status,"onUpdate:modelValue":t[4]||(t[4]=a=>i.value.status=a),options:I(ve),placeholder:e.$t("model.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),l(_,{span:8},{default:u(()=>[l(C,{field:"created_at",label:e.$t("model.form.created_at")},{default:u(()=>[l(De,{modelValue:i.value.created_at,"onUpdate:modelValue":t[5]||(t[5]=a=>i.value.created_at=a),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l(te,{style:{height:"84px"},direction:"vertical"}),l(_,{flex:"86px",style:{"text-align":"right"}},{default:u(()=>[l(ue,{direction:"vertical",size:18},{default:u(()=>[l(c,{type:"primary",onClick:k},{icon:u(()=>[l(Ve)]),default:u(()=>[n(" "+m(e.$t("model.form.search")),1)]),_:1}),l(c,{onClick:be},{icon:u(()=>[l(ae)]),default:u(()=>[n(" "+m(e.$t("model.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),l(te,{style:{"margin-top":"0","margin-bottom":"16px"}}),l(q,{style:{"margin-bottom":"16px"}},{default:u(()=>[l(_,{span:12},{default:u(()=>[l(ue,null,{default:u(()=>[l(c,{type:"primary",onClick:t[6]||(t[6]=a=>e.$router.push({name:"ModelCreate"}))},{default:u(()=>[n(m(e.$t("model.operation.create")),1)]),_:1}),l(c,{type:"primary",status:"success",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[7]||(t[7]=a=>f({action:"agent",value:"all"}))},{default:u(()=>[n(" \u5168\u90E8\u4EE3\u7406 ")]),_:1},8,["disabled","title"]),l(c,{type:"primary",status:"success",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[8]||(t[8]=a=>f({action:"agent",value:!0}))},{default:u(()=>[n(" \u542F\u7528\u4EE3\u7406 ")]),_:1},8,["disabled","title"]),l(c,{type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[9]||(t[9]=a=>f({action:"agent",value:!1}))},{default:u(()=>[n(" \u5173\u95ED\u4EE3\u7406 ")]),_:1},8,["disabled","title"]),l(c,{type:"primary",status:"success",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[10]||(t[10]=a=>f({action:"forward",value:"all"}))},{default:u(()=>[n(" \u5168\u90E8\u8F6C\u53D1 ")]),_:1},8,["disabled","title"]),l(c,{type:"primary",status:"success",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[11]||(t[11]=a=>f({action:"forward",value:!0}))},{default:u(()=>[n(" \u542F\u7528\u8F6C\u53D1 ")]),_:1},8,["disabled","title"]),l(c,{type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[12]||(t[12]=a=>f({action:"forward",value:!1}))},{default:u(()=>[n(" \u5173\u95ED\u8F6C\u53D1 ")]),_:1},8,["disabled","title"]),l(c,{type:"primary",status:"success",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[13]||(t[13]=a=>f({action:"status",value:1}))},{default:u(()=>[n(" \u542F\u7528 ")]),_:1},8,["disabled","title"]),l(c,{type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[14]||(t[14]=a=>f({action:"status",value:2}))},{default:u(()=>[n(" \u7981\u7528 ")]),_:1},8,["disabled","title"]),l(c,{type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[15]||(t[15]=a=>f({action:"delete"}))},{default:u(()=>[n(" \u5220\u9664 ")]),_:1},8,["disabled","title"])]),_:1})]),_:1}),l(_,{span:12,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:u(()=>[l(H,{content:e.$t("searchTable.actions.refresh")},{default:u(()=>[h("div",{class:"action-icon",onClick:k},[l(ae,{size:"18"})])]),_:1},8,["content"]),l(Se,{onSelect:Ce},{content:u(()=>[(b(!0),w(L,null,T(I(ce),a=>(b(),G(Ie,{key:a.value,value:a.value,class:Qe({active:a.value===x.value})},{default:u(()=>[h("span",null,m(a.name),1)]),_:2},1032,["value","class"]))),128))]),default:u(()=>[l(H,{content:e.$t("searchTable.actions.density")},{default:u(()=>[h("div",Sl,[l(Ae,{size:"18"})])]),_:1},8,["content"])]),_:1}),l(H,{content:e.$t("searchTable.actions.columnSetting")},{default:u(()=>[l(Oe,{trigger:"click",position:"bl",onPopupVisibleChange:$e},{content:u(()=>[h("div",Ml,[(b(!0),w(L,null,T(S.value,(a,E)=>(b(),w("div",{key:a.dataIndex,class:"setting"},[h("div",Ul,[l(Me)]),h("div",null,[l(Ue,{modelValue:a.checked,"onUpdate:modelValue":R=>a.checked=R,onChange:R=>he(R,a,E)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),h("div",Ol,m(a.title==="#"?"\u5E8F\u5217\u53F7":a.title),1)]))),128))])]),default:u(()=>[h("div",zl,[l(ze,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),l(Ne,{ref_key:"tableRef",ref:Q,"row-key":"id",loading:I(re),pagination:z,columns:$.value,data:K.value,bordered:!1,size:x.value,"row-selection":de,onPageChange:_e,onPageSizeChange:ge,onSelectionChange:Be},{type:u(({record:a})=>[n(m(e.$t(`model.dict.type.${a.type}`)),1)]),corp:u(({record:a})=>[n(m(e.$t(`model.dict.corp.${a.corp}`)),1)]),prompt_price:u(({record:a})=>[n(m(a.billing_method===1?`$${a.prompt_price}/k`:"-"),1)]),completion_price:u(({record:a})=>[n(m(a.billing_method===1?`$${a.completion_price}/k`:`$${a.fixed_price}/\u6B21`),1)]),status:u(({record:a})=>[l(Le,{modelValue:a.status,"onUpdate:modelValue":E=>a.status=E,"checked-value":1,"unchecked-value":2,onChange:E=>ye({id:`${a.id}`,status:Number(`${a.status}`)})},null,8,["modelValue","onUpdate:modelValue","onChange"])]),operations:u(({record:a})=>[l(c,{type:"text",size:"small",onClick:E=>e.$router.push({name:"ModelDetail",query:{id:`${a.id}`}})},{default:u(()=>[n(m(e.$t("model.columns.operations.view")),1)]),_:2},1032,["onClick"]),l(c,{type:"text",size:"small",onClick:E=>e.$router.push({name:"ModelUpdate",query:{id:`${a.id}`}})},{default:u(()=>[n(m(e.$t("model.columns.operations.update")),1)]),_:2},1032,["onClick"]),l(Te,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417?",onOk:E=>ie({id:`${a.id}`})},{default:u(()=>[l(c,{type:"text",size:"small"},{default:u(()=>[n(m(e.$t("model.columns.operations.delete")),1)]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),l(ne,{visible:D.value,"onUpdate:visible":t[17]||(t[17]=a=>D.value=a),title:e.$t("model.form.title.model_agent"),onCancel:ke,onBeforeOk:we},{default:u(()=>[l(P,{ref_key:"agentForm",ref:ee,model:O.value},{default:u(()=>[l(C,{field:"model_agents",label:e.$t("model.label.model_agents"),rules:[{required:!0,message:e.$t("model.error.model_agents.required")}]},{default:u(()=>[l(V,{modelValue:O.value.model_agents,"onUpdate:modelValue":t[16]||(t[16]=a=>O.value.model_agents=a),placeholder:e.$t("model.placeholder.model_agents"),"max-tag-count":15,multiple:"","allow-clear":""},{default:u(()=>[(b(!0),w(L,null,T(X.value,a=>(b(),G(oe,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),l(ne,{visible:B.value,"onUpdate:visible":t[19]||(t[19]=a=>B.value=a),title:e.$t("model.form.title.forward"),onCancel:Fe,onBeforeOk:Ee},{default:u(()=>[l(P,{ref_key:"forwardForm",ref:Y,model:U.value},{default:u(()=>[l(C,{field:"target_model",label:e.$t("model.label.target_model"),rules:[{required:!0,message:e.$t("model.error.target_model.required")}]},{default:u(()=>[l(V,{modelValue:U.value.target_model,"onUpdate:modelValue":t[18]||(t[18]=a=>U.value.target_model=a),placeholder:e.$t("model.placeholder.target_model")},{default:u(()=>[(b(!0),w(L,null,T(J.value,a=>(b(),G(oe,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"])]),_:1})])}}});const ct=Je(Tl,[["__scopeId","data-v-3537e5f8"]]);export{ct as default};