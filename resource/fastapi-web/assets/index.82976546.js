import{u as ll,G as al,p as tl,y as ul,i as ol,z as nl,_ as sl}from"./index.8aedf95c.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css                */import{c as ae,S as dl}from"./sortable.esm.5d28075d.js";/* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css              */import{d as il,r as be,e as s,c as W,w as rl,B as o,C as F,aH as u,aG as t,aL as d,aM as _,aJ as I,aI as S,aD as c,u as w,aE as y,F as B,D as ml,n as cl,aK as pl,aF as fl,bA as vl,bB as gl,b2 as bl,bC as _l,b1 as yl,bD as kl,bE as Cl,b5 as El,bF as $l,ab as hl,aU as Fl,bi as wl,bj as Bl,bl as Vl,bm as Dl,b4 as Al,bG as ql,aT as Il,bH as Sl,bI as zl,a_ as Ul,bJ as Ml,g as Ll}from"./arco.06d431a4.js";import{u as Ol}from"./loading.403a6ba1.js";import{p as _e,q as Nl}from"./common.4956e59d.js";import{q as Tl,s as Hl,a as Pl,b as Rl,c as xl,d as Gl}from"./model.fda35fd5.js";import{f as jl}from"./agent.8fe47373.js";import{q as Jl}from"./corp.5a6ff653.js";import"./chart.ac3cbee9.js";import"./vue.4e689e11.js";import"./base.87fcf6e2.js";const Kl={class:"container"},Ql={class:"action-icon"},Wl={class:"action-icon"},Xl={id:"tableSetting"},Yl={style:{"margin-right":"4px",cursor:"move"}},Zl={class:"title"},ea={name:"ModelList"},la=il({...ea,setup(aa){const{loading:ye,setLoading:g}=Ol(!0),{proxy:z}=Ll(),ke=be({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),te=s([]);(async()=>{g(!0);try{const{data:e}=await Jl();te.value=e.items}catch{}finally{g(!1)}})();const X=s([]);(async()=>{try{const{data:e}=await Tl();X.value=e.items}catch{}})();const ue=s([]);(async()=>{try{const{data:e}=await jl();ue.value=e.items}catch{}})();const Ce=async e=>{g(!0);try{await Hl(e),z.$message.success("\u5220\u9664\u6210\u529F"),U()}catch{}finally{g(!1)}},oe=()=>({corp:"",name:"",model:"",type:s(),status:s(),created_at:[]}),{t:r}=ll(),b=s([]),p=s(oe()),V=s([]),H=s([]),Y=s("medium"),f=s([]),n=s(!0),ne=s();let se=!1;const A={current:1,pageSize:10,showTotal:!0,showPageSize:!0,pageSizeOptions:[10,50,100,500,1e3]},P=be({...A}),Ee=W(()=>[{name:r("searchTable.size.mini"),value:"mini"},{name:r("searchTable.size.small"),value:"small"},{name:r("searchTable.size.medium"),value:"medium"},{name:r("searchTable.size.large"),value:"large"}]),$e=W(()=>[{title:r("model.columns.corp"),dataIndex:"corp_name",slotName:"corp_name",align:"center",width:110},{title:r("model.columns.name"),dataIndex:"name",slotName:"name",align:"center"},{title:r("model.columns.model"),dataIndex:"model",slotName:"model",align:"center"},{title:r("model.columns.prompt_price"),dataIndex:"prompt_ratio",slotName:"prompt_ratio",align:"center"},{title:r("model.columns.completion_price"),dataIndex:"completion_ratio",slotName:"completion_ratio",align:"center"},{title:r("model.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:65},{title:r("model.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:132},{title:r("model.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:170}]),he=W(()=>[{label:r("model.dict.type.1"),value:1},{label:r("model.dict.type.2"),value:2},{label:r("model.dict.type.3"),value:3},{label:r("model.dict.type.4"),value:4},{label:r("model.dict.type.100"),value:100}]),Fe=W(()=>[{label:r("model.dict.status.1"),value:1},{label:r("model.dict.status.2"),value:2}]),R=async(e={...A})=>{g(!0);try{const{data:l}=await Pl(e);b.value=l.items,P.current=e.current,P.pageSize=e.pageSize,P.total=l.paging.total,se=l.items.length===0}catch{}finally{g(!1)}},U=()=>{R({...A,...p.value})},we=e=>{R({...A,...p.value,current:e})},Be=e=>{A.pageSize=e,R({...A,...p.value})};R();const Ve=()=>{p.value=oe()},De=async e=>{g(!0);try{await Rl(e),z.$message.success("\u64CD\u4F5C\u6210\u529F"),U()}catch{}finally{g(!1)}},Ae=(e,l)=>{Y.value=e},qe=(e,l,i)=>{e?V.value.splice(i,0,l):V.value=H.value.filter(E=>E.dataIndex!==l.dataIndex)},de=(e,l,i,E=!1)=>{const h=E?ae(e):e;return l>-1&&i>-1&&h.splice(l,1,h.splice(i,1,h[l]).pop()),h},Ie=e=>{e&&cl(()=>{const l=document.getElementById("tableSetting");new dl(l,{onEnd(i){const{oldIndex:E,newIndex:h}=i;de(V.value,E,h),de(H.value,E,h)}})})};rl(()=>$e.value,e=>{V.value=ae(e),V.value.forEach((l,i)=>{l.checked=!0}),H.value=ae(V.value)},{deep:!0,immediate:!0});const M=s(!1),ie=s(),C=s({}),re=s(),L=s(!1),x=s({}),Se=async()=>{g(!0);try{C.value.url="",C.value.key="",C.value.is_config_model_agent=!0,M.value=!0}catch{}finally{g(!1)}},ze=async e=>{var i;if(await((i=ie.value)==null?void 0:i.validate())){M.value=!0,e(!1);return}g(!0);try{await xl(C.value),e(),window.location.reload()}catch{}finally{g(!1)}},Ue=()=>{M.value=!1},Me=async e=>{var i;if(await((i=re.value)==null?void 0:i.validate())){L.value=!0,e(!1);return}e(),v({action:"agent",value:"all",model_agents:x.value.model_agents})},Le=()=>{L.value=!1},me=s(),O=s(!1),G=s({}),Oe=async e=>{var i;if(await((i=me.value)==null?void 0:i.validate())){O.value=!0,e(!1);return}e(),v({action:"forward",value:"all",target_model:G.value.target_model})},Ne=()=>{O.value=!1},ce=s(),N=s(!1),j=s({}),Te=async e=>{var i;if(await((i=ce.value)==null?void 0:i.validate())){N.value=!0,e(!1);return}e(),v({action:"fallback",value:"all",fallback_model:j.value.fallback_model})},He=()=>{N.value=!1},Pe=e=>{f.value=e,n.value=!e.length},v=e=>{if(f.value.length===0)z.$message.info("\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E");else{let l=`\u662F\u5426\u786E\u5B9A\u64CD\u4F5C\u6240\u9009\u7684${f.value.length}\u6761\u6570\u636E?`;switch(e.action){case"agent":e.value===!0?l=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406?`:e.value===!1?l=`\u662F\u5426\u786E\u5B9A\u5173\u95ED\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406?`:e.value==="all"&&(e.model_agents?l=`\u662F\u5426\u786E\u5B9A\u5C06\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406\u542F\u7528\u5E76\u4F7F\u7528\u6240\u9009\u7684\u6A21\u578B\u4EE3\u7406?`:L.value=!0);break;case"forward":e.value===!0?l=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1?`:e.value===!1?l=`\u662F\u5426\u786E\u5B9A\u5173\u95ED\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1?`:e.value==="all"&&(e.target_model?l=`\u662F\u5426\u786E\u5B9A\u5C06\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1\u542F\u7528\u5E76\u5168\u90E8\u8F6C\u53D1\u5230\u6240\u9009\u6A21\u578B?`:O.value=!0);break;case"fallback":e.value===!0?l=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u540E\u5907\u6A21\u578B?`:e.value===!1?l=`\u662F\u5426\u786E\u5B9A\u5173\u95ED\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u540E\u5907\u6A21\u578B?`:e.value==="all"&&(e.fallback_model?l=`\u662F\u5426\u786E\u5B9A\u5C06\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u540E\u5907\u6A21\u578B\u542F\u7528\u5E76\u5168\u90E8\u540E\u5907\u5230\u6240\u9009\u6A21\u578B?`:N.value=!0);break;case"status":e.value===1?l=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009\u7684${f.value.length}\u6761\u6570\u636E?`:l=`\u662F\u5426\u786E\u5B9A\u7981\u7528\u6240\u9009\u7684${f.value.length}\u6761\u6570\u636E?`;break;case"delete":l=`\u662F\u5426\u786E\u5B9A\u5220\u9664\u6240\u9009\u7684${f.value.length}\u6761\u6570\u636E?`;break}if(e.action==="agent"&&e.value==="all"&&!e.model_agents||e.action==="forward"&&e.value==="all"&&!e.target_model||e.action==="fallback"&&e.value==="all"&&!e.fallback_model)return;z.$modal.warning({title:"\u8B66\u544A",titleAlign:"start",content:l,hideCancel:!1,onOk:()=>{g(!0),e.ids=f.value,Gl(e).then(i=>{g(!1),z.$message.success("\u64CD\u4F5C\u6210\u529F"),U(),ne.value.selectAll(!1)})}})}};return(e,l)=>{const i=al,E=pl,h=fl,J=vl,q=gl,k=bl,$=_l,K=yl,Re=kl,Z=Cl,T=El,pe=$l,xe=hl,m=Fl,fe=tl,ve=wl,ee=Bl,Ge=ul,je=Vl,Je=Dl,Ke=ol,Qe=nl,We=Al,Xe=ql,ge=Il,Ye=Sl,Ze=zl,Q=Ul,el=Ml;return o(),F("div",Kl,[u(h,{class:"container-breadcrumb"},{default:t(()=>[u(E,null,{default:t(()=>[u(i)]),_:1}),u(E,null,{default:t(()=>[d(_(e.$t("menu.model")),1)]),_:1}),u(E,null,{default:t(()=>[d(_(e.$t("menu.model.list")),1)]),_:1})]),_:1}),u(el,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:t(()=>[u(Z,null,{default:t(()=>[u($,{flex:1},{default:t(()=>[u(T,{model:p.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:t(()=>[u(Z,{gutter:16},{default:t(()=>[u($,{span:8},{default:t(()=>[u(k,{field:"corp",label:e.$t("model.form.corp")},{default:t(()=>[u(q,{modelValue:p.value.corp,"onUpdate:modelValue":l[0]||(l[0]=a=>p.value.corp=a),placeholder:e.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},{default:t(()=>[(o(!0),F(I,null,S(te.value,a=>(o(),c(J,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),u($,{span:8},{default:t(()=>[u(k,{field:"name",label:e.$t("model.form.name")},{default:t(()=>[u(K,{modelValue:p.value.name,"onUpdate:modelValue":l[1]||(l[1]=a=>p.value.name=a),placeholder:e.$t("model.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),u($,{span:8},{default:t(()=>[u(k,{field:"model",label:e.$t("model.form.model")},{default:t(()=>[u(K,{modelValue:p.value.model,"onUpdate:modelValue":l[2]||(l[2]=a=>p.value.model=a),placeholder:e.$t("model.form.model.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),u($,{span:8},{default:t(()=>[u(k,{field:"type",label:e.$t("model.form.type")},{default:t(()=>[u(q,{modelValue:p.value.type,"onUpdate:modelValue":l[3]||(l[3]=a=>p.value.type=a),options:w(he),placeholder:e.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),u($,{span:8},{default:t(()=>[u(k,{field:"status",label:e.$t("model.form.status")},{default:t(()=>[u(q,{modelValue:p.value.status,"onUpdate:modelValue":l[4]||(l[4]=a=>p.value.status=a),options:w(Fe),placeholder:e.$t("model.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),u($,{span:8},{default:t(()=>[u(k,{field:"created_at",label:e.$t("model.form.created_at")},{default:t(()=>[u(Re,{modelValue:p.value.created_at,"onUpdate:modelValue":l[5]||(l[5]=a=>p.value.created_at=a),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),u(pe,{style:{height:"84px"},direction:"vertical"}),u($,{flex:"86px",style:{"text-align":"right"}},{default:t(()=>[u(ve,{direction:"vertical",size:18},{default:t(()=>[u(m,{type:"primary",onClick:U},{icon:t(()=>[u(xe)]),default:t(()=>[d(" "+_(e.$t("model.form.search")),1)]),_:1}),u(m,{onClick:Ve},{icon:t(()=>[u(fe)]),default:t(()=>[d(" "+_(e.$t("model.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),u(pe,{style:{"margin-top":"0","margin-bottom":"16px"}}),u(Z,{style:{"margin-bottom":"16px"}},{default:t(()=>[u($,{span:12},{default:t(()=>[u(ve,null,{default:t(()=>[u(m,{type:"primary",onClick:l[6]||(l[6]=a=>e.$router.push({name:"ModelCreate"}))},{default:t(()=>[d(_(e.$t("model.operation.create")),1)]),_:1}),w(se)?(o(),c(m,{key:0,type:"primary",status:"success",onClick:l[7]||(l[7]=a=>Se())},{default:t(()=>[d(" \u521D\u59CB\u5316 ")]),_:1})):y("",!0),b.value.length!==0?(o(),c(m,{key:1,type:"primary",status:"warning",disabled:n.value,title:n.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:l[8]||(l[8]=a=>v({action:"agent",value:"all"}))},{default:t(()=>[d(" \u5168\u90E8\u4EE3\u7406 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(m,{key:2,type:"primary",status:"success",disabled:n.value,title:n.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:l[9]||(l[9]=a=>v({action:"agent",value:!0}))},{default:t(()=>[d(" \u542F\u7528\u4EE3\u7406 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(m,{key:3,type:"primary",status:"danger",disabled:n.value,title:n.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:l[10]||(l[10]=a=>v({action:"agent",value:!1}))},{default:t(()=>[d(" \u5173\u95ED\u4EE3\u7406 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(m,{key:4,type:"primary",status:"warning",disabled:n.value,title:n.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:l[11]||(l[11]=a=>v({action:"forward",value:"all"}))},{default:t(()=>[d(" \u5168\u90E8\u8F6C\u53D1 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(m,{key:5,type:"primary",status:"success",disabled:n.value,title:n.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:l[12]||(l[12]=a=>v({action:"forward",value:!0}))},{default:t(()=>[d(" \u542F\u7528\u8F6C\u53D1 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(m,{key:6,type:"primary",status:"danger",disabled:n.value,title:n.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:l[13]||(l[13]=a=>v({action:"forward",value:!1}))},{default:t(()=>[d(" \u5173\u95ED\u8F6C\u53D1 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(m,{key:7,type:"primary",status:"warning",disabled:n.value,title:n.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:l[14]||(l[14]=a=>v({action:"fallback",value:"all"}))},{default:t(()=>[d(" \u5168\u90E8\u540E\u5907 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(m,{key:8,type:"primary",status:"success",disabled:n.value,title:n.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:l[15]||(l[15]=a=>v({action:"fallback",value:!0}))},{default:t(()=>[d(" \u542F\u7528\u540E\u5907 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(m,{key:9,type:"primary",status:"danger",disabled:n.value,title:n.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:l[16]||(l[16]=a=>v({action:"fallback",value:!1}))},{default:t(()=>[d(" \u5173\u95ED\u540E\u5907 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(m,{key:10,type:"primary",status:"success",disabled:n.value,title:n.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:l[17]||(l[17]=a=>v({action:"status",value:1}))},{default:t(()=>[d(" \u542F\u7528 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(m,{key:11,type:"primary",status:"danger",disabled:n.value,title:n.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:l[18]||(l[18]=a=>v({action:"status",value:2}))},{default:t(()=>[d(" \u7981\u7528 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(m,{key:12,type:"primary",status:"danger",disabled:n.value,title:n.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:l[19]||(l[19]=a=>v({action:"delete"}))},{default:t(()=>[d(" \u5220\u9664 ")]),_:1},8,["disabled","title"])):y("",!0)]),_:1})]),_:1}),u($,{span:12,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:t(()=>[u(ee,{content:e.$t("searchTable.actions.refresh")},{default:t(()=>[B("div",{class:"action-icon",onClick:U},[u(fe,{size:"18"})])]),_:1},8,["content"]),u(Je,{onSelect:Ae},{content:t(()=>[(o(!0),F(I,null,S(w(Ee),a=>(o(),c(je,{key:a.value,value:a.value,class:ml({active:a.value===Y.value})},{default:t(()=>[B("span",null,_(a.name),1)]),_:2},1032,["value","class"]))),128))]),default:t(()=>[u(ee,{content:e.$t("searchTable.actions.density")},{default:t(()=>[B("div",Ql,[u(Ge,{size:"18"})])]),_:1},8,["content"])]),_:1}),u(ee,{content:e.$t("searchTable.actions.columnSetting")},{default:t(()=>[u(Xe,{trigger:"click",position:"bl",onPopupVisibleChange:Ie},{content:t(()=>[B("div",Xl,[(o(!0),F(I,null,S(H.value,(a,D)=>(o(),F("div",{key:a.dataIndex,class:"setting"},[B("div",Yl,[u(Qe)]),B("div",null,[u(We,{modelValue:a.checked,"onUpdate:modelValue":le=>a.checked=le,onChange:le=>qe(le,a,D)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),B("div",Zl,_(a.title==="#"?"\u5E8F\u5217\u53F7":a.title),1)]))),128))])]),default:t(()=>[B("div",Wl,[u(Ke,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),u(Ze,{ref_key:"tableRef",ref:ne,"row-key":"id",loading:w(ye),pagination:P,columns:V.value,data:b.value,bordered:!1,size:Y.value,"row-selection":ke,onPageChange:we,onPageSizeChange:Be,onSelectionChange:Pe},{type:t(({record:a})=>[d(_(e.$t(`model.dict.type.${a.type}`)),1)]),prompt_ratio:t(({record:a})=>[d(_(a.text_quota.billing_method===1?`$${w(_e)(a.text_quota.prompt_ratio)}/k`:"-"),1)]),completion_ratio:t(({record:a})=>[d(_(a.text_quota.billing_method===1?`$${w(_e)(a.text_quota.completion_ratio)}/k`:`$${w(Nl)(a.text_quota.fixed_quota)}/\u6B21`),1)]),status:t(({record:a})=>[u(ge,{modelValue:a.status,"onUpdate:modelValue":D=>a.status=D,"checked-value":1,"unchecked-value":2,onChange:D=>De({id:`${a.id}`,status:Number(`${a.status}`)})},null,8,["modelValue","onUpdate:modelValue","onChange"])]),operations:t(({record:a})=>[u(m,{type:"text",size:"small",onClick:D=>e.$router.push({name:"ModelDetail",query:{id:`${a.id}`}})},{default:t(()=>[d(_(e.$t("model.columns.operations.view")),1)]),_:2},1032,["onClick"]),u(m,{type:"text",size:"small",onClick:D=>e.$router.push({name:"ModelUpdate",query:{id:`${a.id}`}})},{default:t(()=>[d(_(e.$t("model.columns.operations.update")),1)]),_:2},1032,["onClick"]),u(Ye,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417?",onOk:D=>Ce({id:`${a.id}`})},{default:t(()=>[u(m,{type:"text",size:"small"},{default:t(()=>[d(_(e.$t("model.columns.operations.delete")),1)]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),u(Q,{visible:M.value,"onUpdate:visible":l[23]||(l[23]=a=>M.value=a),title:e.$t("model.form.title.init_model"),onCancel:Ue,onBeforeOk:ze},{default:t(()=>[u(T,{ref_key:"initForm",ref:ie,model:C.value},{default:t(()=>[u(k,{field:"url",label:e.$t("model.label.url"),rules:[{required:!0,message:e.$t("model.error.url.required")}]},{default:t(()=>[u(K,{modelValue:C.value.url,"onUpdate:modelValue":l[20]||(l[20]=a=>C.value.url=a),placeholder:e.$t("model.placeholder.url"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),u(k,{field:"key",label:e.$t("model.label.key"),rules:[{required:!0,message:e.$t("model.error.key.required")}]},{default:t(()=>[u(K,{modelValue:C.value.key,"onUpdate:modelValue":l[21]||(l[21]=a=>C.value.key=a),placeholder:e.$t("model.placeholder.key"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),u(k,{field:"is_config_model_agent",label:e.$t("model.label.is_config_model_agent")},{default:t(()=>[u(ge,{modelValue:C.value.is_config_model_agent,"onUpdate:modelValue":l[22]||(l[22]=a=>C.value.is_config_model_agent=a)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),u(Q,{visible:L.value,"onUpdate:visible":l[25]||(l[25]=a=>L.value=a),title:e.$t("model.form.title.model_agent"),onCancel:Le,onBeforeOk:Me},{default:t(()=>[u(T,{ref_key:"agentForm",ref:re,model:x.value},{default:t(()=>[u(k,{field:"model_agents",label:e.$t("model.label.model_agents"),rules:[{required:!0,message:e.$t("model.error.model_agents.required")}]},{default:t(()=>[u(q,{modelValue:x.value.model_agents,"onUpdate:modelValue":l[24]||(l[24]=a=>x.value.model_agents=a),placeholder:e.$t("model.placeholder.model_agents"),"max-tag-count":15,multiple:"","allow-search":"","allow-clear":""},{default:t(()=>[(o(!0),F(I,null,S(ue.value,a=>(o(),c(J,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),u(Q,{visible:O.value,"onUpdate:visible":l[27]||(l[27]=a=>O.value=a),title:e.$t("model.form.title.forward"),onCancel:Ne,onBeforeOk:Oe},{default:t(()=>[u(T,{ref_key:"forwardForm",ref:me,model:G.value},{default:t(()=>[u(k,{field:"target_model",label:e.$t("model.label.target_model"),rules:[{required:!0,message:e.$t("model.error.target_model.required")}]},{default:t(()=>[u(q,{modelValue:G.value.target_model,"onUpdate:modelValue":l[26]||(l[26]=a=>G.value.target_model=a),placeholder:e.$t("model.placeholder.target_model"),"allow-search":""},{default:t(()=>[(o(!0),F(I,null,S(X.value,a=>(o(),c(J,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),u(Q,{visible:N.value,"onUpdate:visible":l[29]||(l[29]=a=>N.value=a),title:e.$t("model.form.title.fallback"),onCancel:He,onBeforeOk:Te},{default:t(()=>[u(T,{ref_key:"fallbackForm",ref:ce,model:j.value},{default:t(()=>[u(k,{field:"fallback_model",label:e.$t("model.label.fallback_model"),rules:[{required:!0,message:e.$t("model.error.fallback_model.required")}]},{default:t(()=>[u(q,{modelValue:j.value.fallback_model,"onUpdate:modelValue":l[28]||(l[28]=a=>j.value.fallback_model=a),placeholder:e.$t("model.placeholder.fallback_model"),"allow-search":""},{default:t(()=>[(o(!0),F(I,null,S(X.value,a=>(o(),c(J,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"])]),_:1})])}}});const za=sl(la,[["__scopeId","data-v-9e26ba2e"]]);export{za as default};