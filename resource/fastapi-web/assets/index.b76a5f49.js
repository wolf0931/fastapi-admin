import{u as ml,H as cl,p as pl,y as fl,i as vl,z as _l,_ as gl}from"./index.9a5ce5ca.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css              */import{d as bl,r as Fe,e as n,c as X,w as yl,B as o,C as p,aH as a,aG as u,aL as i,aM as c,aJ as I,aI as z,aD as f,u as k,aE as C,F as V,D as kl,n as Cl,aK as $l,aF as hl,bA as El,bB as Fl,b2 as wl,bC as Bl,b1 as Vl,bD as Dl,bE as Al,b5 as ql,bF as Il,ab as zl,aU as Sl,bi as Ul,bj as Ml,bl as Ll,bm as Ol,b4 as xl,bG as Hl,aT as Nl,bH as Pl,bI as Tl,aV as Rl,a_ as Ql,bZ as jl,bJ as Gl,g as Jl}from"./arco.931e3328.js";import{u as Zl}from"./loading.244b3590.js";import{p as S,q as ne}from"./common.4fed7ae4.js";import{q as Kl,s as Wl,a as Xl,b as Yl,c as et,d as lt}from"./model.9b703bd6.js";import{c as se,S as tt}from"./sortable.esm.9fec1c24.js";import{f as at}from"./agent.e4e53401.js";import{q as ut}from"./corp.01ad92bb.js";import ot from"./index.30dd1668.js";import"./chart.2d48c0df.js";import"./vue.49cbc69b.js";import"./base.87fcf6e2.js";/* empty css                *//* empty css                */const nt={class:"container"},st={class:"action-icon"},it={class:"action-icon"},dt={id:"tableSetting"},rt={style:{"margin-right":"4px",cursor:"move"}},mt={class:"title"},ct={key:0},pt={key:1},ft={key:2},vt={key:3},_t={key:4},gt={key:0},bt={key:1},yt={key:2},kt={key:3},Ct={key:4},$t={name:"ModelList"},ht=bl({...$t,setup(Et){const{loading:we,setLoading:b}=Zl(!0),{proxy:U}=Jl(),Be=Fe({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),ie=n([]);(async()=>{b(!0);try{const{data:e}=await ut();ie.value=e.items}catch{}finally{b(!1)}})();const Y=n([]);(async()=>{try{const{data:e}=await Kl();Y.value=e.items}catch{}})();const de=n([]);(async()=>{try{const{data:e}=await at();de.value=e.items}catch{}})();const Ve=async e=>{b(!0);try{await Wl(e),U.$message.success("\u5220\u9664\u6210\u529F"),M()}catch{}finally{b(!1)}},re=()=>({corp:"",name:"",model:"",type:n(),status:n(),created_at:[]}),{t:m}=ml(),y=n([]),v=n(re()),D=n([]),T=n([]),ee=n("medium"),_=n([]),s=n(!0),me=n();let ce=!1;const A={current:1,pageSize:20,showTotal:!0,showPageSize:!0,pageSizeOptions:[20,50,100,500,1e3]},R=Fe({...A}),De=X(()=>[{name:m("size.mini"),value:"mini"},{name:m("size.small"),value:"small"},{name:m("size.medium"),value:"medium"},{name:m("size.large"),value:"large"}]),Ae=X(()=>[{title:m("model.columns.corp"),dataIndex:"corp_name",slotName:"corp_name",align:"center",width:110},{title:m("model.columns.name"),dataIndex:"name",slotName:"name",align:"center"},{title:m("model.columns.model"),dataIndex:"model",slotName:"model",align:"center"},{title:m("model.columns.prompt_price"),dataIndex:"prompt_ratio",slotName:"prompt_ratio",align:"center"},{title:m("model.columns.completion_price"),dataIndex:"completion_ratio",slotName:"completion_ratio",align:"center"},{title:m("model.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:65},{title:m("model.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:132},{title:m("model.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:170}]),qe=X(()=>[{label:m("model.dict.type.1"),value:1},{label:m("model.dict.type.2"),value:2},{label:m("model.dict.type.3"),value:3},{label:m("model.dict.type.4"),value:4},{label:m("model.dict.type.100"),value:100}]),Ie=X(()=>[{label:m("model.dict.status.1"),value:1},{label:m("model.dict.status.2"),value:2}]),Q=async(e={...A})=>{b(!0);try{const{data:t}=await Xl(e);y.value=t.items,R.current=e.current,R.pageSize=e.pageSize,R.total=t.paging.total,ce=t.items.length===0}catch{}finally{b(!1)}},M=()=>{Q({...A,...v.value})},ze=e=>{Q({...A,...v.value,current:e})},Se=e=>{A.pageSize=e,Q({...A,...v.value})};Q();const Ue=()=>{v.value=re()},Me=async e=>{b(!0);try{await Yl(e),U.$message.success("\u64CD\u4F5C\u6210\u529F"),M()}catch{}finally{b(!1)}},Le=(e,t)=>{ee.value=e},Oe=(e,t,d)=>{e?D.value.splice(d,0,t):D.value=T.value.filter(E=>E.dataIndex!==t.dataIndex)},pe=(e,t,d,E=!1)=>{const w=E?se(e):e;return t>-1&&d>-1&&w.splice(t,1,w.splice(d,1,w[t]).pop()),w},xe=e=>{e&&Cl(()=>{const t=document.getElementById("tableSetting");new tt(t,{onEnd(d){const{oldIndex:E,newIndex:w}=d;pe(D.value,E,w),pe(T.value,E,w)}})})};yl(()=>Ae.value,e=>{D.value=se(e),D.value.forEach((t,d)=>{t.checked=!0}),T.value=se(D.value)},{deep:!0,immediate:!0});const L=n(!1),fe=n(),h=n({}),ve=n(),O=n(!1),j=n({}),He=async()=>{b(!0);try{h.value.url="",h.value.key="",h.value.is_config_model_agent=!0,L.value=!0}catch{}finally{b(!1)}},Ne=async e=>{var d;if(await((d=fe.value)==null?void 0:d.validate())){L.value=!0,e(!1);return}b(!0);try{await et(h.value),e(),window.location.reload()}catch{e(!1)}finally{b(!1)}},Pe=()=>{L.value=!1},Te=async e=>{var d;if(await((d=ve.value)==null?void 0:d.validate())){O.value=!0,e(!1);return}e(),g({action:"agent",value:"all",model_agents:j.value.model_agents})},Re=()=>{O.value=!1},_e=n(),x=n(!1),G=n({}),Qe=async e=>{var d;if(await((d=_e.value)==null?void 0:d.validate())){x.value=!0,e(!1);return}e(),g({action:"forward",value:"all",target_model:G.value.target_model})},je=()=>{x.value=!1},ge=n(),H=n(!1),J=n({}),Ge=async e=>{var d;if(await((d=ge.value)==null?void 0:d.validate())){H.value=!0,e(!1);return}e(),g({action:"fallback",value:"all",fallback_model:J.value.fallback_model})},Je=()=>{H.value=!1},Ze=e=>{_.value=e,s.value=!e.length},g=e=>{if(_.value.length===0)U.$message.info("\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E");else{let t=`\u662F\u5426\u786E\u5B9A\u64CD\u4F5C\u6240\u9009\u7684${_.value.length}\u6761\u6570\u636E?`;switch(e.action){case"agent":e.value===!0?t=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406?`:e.value===!1?t=`\u662F\u5426\u786E\u5B9A\u5173\u95ED\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406?`:e.value==="all"&&(e.model_agents?t=`\u662F\u5426\u786E\u5B9A\u5C06\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406\u542F\u7528\u5E76\u4F7F\u7528\u6240\u9009\u7684\u6A21\u578B\u4EE3\u7406?`:O.value=!0);break;case"forward":e.value===!0?t=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1?`:e.value===!1?t=`\u662F\u5426\u786E\u5B9A\u5173\u95ED\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1?`:e.value==="all"&&(e.target_model?t=`\u662F\u5426\u786E\u5B9A\u5C06\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1\u542F\u7528\u5E76\u5168\u90E8\u8F6C\u53D1\u5230\u6240\u9009\u6A21\u578B?`:x.value=!0);break;case"fallback":e.value===!0?t=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u540E\u5907\u6A21\u578B?`:e.value===!1?t=`\u662F\u5426\u786E\u5B9A\u5173\u95ED\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u540E\u5907\u6A21\u578B?`:e.value==="all"&&(e.fallback_model?t=`\u662F\u5426\u786E\u5B9A\u5C06\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u540E\u5907\u6A21\u578B\u542F\u7528\u5E76\u5168\u90E8\u540E\u5907\u5230\u6240\u9009\u6A21\u578B?`:H.value=!0);break;case"status":e.value===1?t=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009\u7684${_.value.length}\u6761\u6570\u636E?`:t=`\u662F\u5426\u786E\u5B9A\u7981\u7528\u6240\u9009\u7684${_.value.length}\u6761\u6570\u636E?`;break;case"delete":t=`\u662F\u5426\u786E\u5B9A\u5220\u9664\u6240\u9009\u7684${_.value.length}\u6761\u6570\u636E?`;break}if(e.action==="agent"&&e.value==="all"&&!e.model_agents||e.action==="forward"&&e.value==="all"&&!e.target_model||e.action==="fallback"&&e.value==="all"&&!e.fallback_model)return;U.$modal.warning({title:"\u8B66\u544A",titleAlign:"start",content:t,hideCancel:!1,onOk:()=>{b(!0),e.ids=_.value,lt(e).then(d=>{b(!1),U.$message.success("\u64CD\u4F5C\u6210\u529F"),M(),me.value.selectAll(!1)})}})}},le=n(!1),be=n([]),Ke=e=>{be.value=e,le.value=!0},te=n(!1),ye=n(),We=e=>{te.value=!0,ye.value=e},Xe=()=>{te.value=!1};return(e,t)=>{const d=cl,E=$l,w=hl,Z=El,q=Fl,$=wl,F=Bl,K=Vl,Ye=Dl,ae=Al,N=ql,ke=Il,el=zl,r=Sl,Ce=pl,$e=Ul,ue=Ml,ll=fl,tl=Ll,al=Ol,ul=vl,ol=_l,nl=xl,sl=Hl,he=Nl,il=Pl,Ee=Tl,dl=Rl,P=Ql,W=jl,rl=Gl;return o(),p("div",nt,[a(w,{class:"container-breadcrumb"},{default:u(()=>[a(E,null,{default:u(()=>[a(d)]),_:1}),a(E,null,{default:u(()=>[i(c(e.$t("menu.model")),1)]),_:1}),a(E,null,{default:u(()=>[i(c(e.$t("menu.model.list")),1)]),_:1})]),_:1}),a(rl,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:u(()=>[a(ae,null,{default:u(()=>[a(F,{flex:1},{default:u(()=>[a(N,{model:v.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:u(()=>[a(ae,{gutter:16},{default:u(()=>[a(F,{span:8},{default:u(()=>[a($,{field:"corp",label:e.$t("model.form.corp")},{default:u(()=>[a(q,{modelValue:v.value.corp,"onUpdate:modelValue":t[0]||(t[0]=l=>v.value.corp=l),placeholder:e.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},{default:u(()=>[(o(!0),p(I,null,z(ie.value,l=>(o(),f(Z,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(F,{span:8},{default:u(()=>[a($,{field:"name",label:e.$t("model.form.name")},{default:u(()=>[a(K,{modelValue:v.value.name,"onUpdate:modelValue":t[1]||(t[1]=l=>v.value.name=l),placeholder:e.$t("model.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(F,{span:8},{default:u(()=>[a($,{field:"model",label:e.$t("model.form.model")},{default:u(()=>[a(K,{modelValue:v.value.model,"onUpdate:modelValue":t[2]||(t[2]=l=>v.value.model=l),placeholder:e.$t("model.form.model.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(F,{span:8},{default:u(()=>[a($,{field:"type",label:e.$t("model.form.type")},{default:u(()=>[a(q,{modelValue:v.value.type,"onUpdate:modelValue":t[3]||(t[3]=l=>v.value.type=l),options:k(qe),placeholder:e.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),a(F,{span:8},{default:u(()=>[a($,{field:"status",label:e.$t("model.form.status")},{default:u(()=>[a(q,{modelValue:v.value.status,"onUpdate:modelValue":t[4]||(t[4]=l=>v.value.status=l),options:k(Ie),placeholder:e.$t("model.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),a(F,{span:8},{default:u(()=>[a($,{field:"created_at",label:e.$t("model.form.created_at")},{default:u(()=>[a(Ye,{modelValue:v.value.created_at,"onUpdate:modelValue":t[5]||(t[5]=l=>v.value.created_at=l),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(ke,{style:{height:"84px"},direction:"vertical"}),a(F,{flex:"86px",style:{"text-align":"right"}},{default:u(()=>[a($e,{direction:"vertical",size:18},{default:u(()=>[a(r,{type:"primary",onClick:M},{icon:u(()=>[a(el)]),default:u(()=>[i(" "+c(e.$t("model.form.search")),1)]),_:1}),a(r,{onClick:Ue},{icon:u(()=>[a(Ce)]),default:u(()=>[i(" "+c(e.$t("model.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(ke,{style:{"margin-top":"0","margin-bottom":"16px"}}),a(ae,{style:{"margin-bottom":"16px"}},{default:u(()=>[a(F,{span:12},{default:u(()=>[a($e,null,{default:u(()=>[a(r,{type:"primary",onClick:t[6]||(t[6]=l=>e.$router.push({name:"ModelCreate"}))},{default:u(()=>[i(c(e.$t("model.operation.create")),1)]),_:1}),k(ce)?(o(),f(r,{key:0,type:"primary",status:"success",onClick:t[7]||(t[7]=l=>He())},{default:u(()=>[i(" \u521D\u59CB\u5316 ")]),_:1})):C("",!0),y.value.length!==0?(o(),f(r,{key:1,type:"primary",status:"warning",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[8]||(t[8]=l=>g({action:"agent",value:"all"}))},{default:u(()=>[i(" \u5168\u90E8\u4EE3\u7406 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:2,type:"primary",status:"success",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[9]||(t[9]=l=>g({action:"agent",value:!0}))},{default:u(()=>[i(" \u542F\u7528\u4EE3\u7406 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:3,type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[10]||(t[10]=l=>g({action:"agent",value:!1}))},{default:u(()=>[i(" \u5173\u95ED\u4EE3\u7406 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:4,type:"primary",status:"warning",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[11]||(t[11]=l=>g({action:"forward",value:"all"}))},{default:u(()=>[i(" \u5168\u90E8\u8F6C\u53D1 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:5,type:"primary",status:"success",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[12]||(t[12]=l=>g({action:"forward",value:!0}))},{default:u(()=>[i(" \u542F\u7528\u8F6C\u53D1 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:6,type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[13]||(t[13]=l=>g({action:"forward",value:!1}))},{default:u(()=>[i(" \u5173\u95ED\u8F6C\u53D1 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:7,type:"primary",status:"warning",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[14]||(t[14]=l=>g({action:"fallback",value:"all"}))},{default:u(()=>[i(" \u5168\u90E8\u540E\u5907 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:8,type:"primary",status:"success",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[15]||(t[15]=l=>g({action:"fallback",value:!0}))},{default:u(()=>[i(" \u542F\u7528\u540E\u5907 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:9,type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[16]||(t[16]=l=>g({action:"fallback",value:!1}))},{default:u(()=>[i(" \u5173\u95ED\u540E\u5907 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:10,type:"primary",status:"success",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[17]||(t[17]=l=>g({action:"status",value:1}))},{default:u(()=>[i(" \u542F\u7528 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:11,type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[18]||(t[18]=l=>g({action:"status",value:2}))},{default:u(()=>[i(" \u7981\u7528 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:12,type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[19]||(t[19]=l=>g({action:"delete"}))},{default:u(()=>[i(" \u5220\u9664 ")]),_:1},8,["disabled","title"])):C("",!0)]),_:1})]),_:1}),a(F,{span:12,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:u(()=>[a(ue,{content:e.$t("actions.refresh")},{default:u(()=>[V("div",{class:"action-icon",onClick:M},[a(Ce,{size:"18"})])]),_:1},8,["content"]),a(al,{onSelect:Le},{content:u(()=>[(o(!0),p(I,null,z(k(De),l=>(o(),f(tl,{key:l.value,value:l.value,class:kl({active:l.value===ee.value})},{default:u(()=>[V("span",null,c(l.name),1)]),_:2},1032,["value","class"]))),128))]),default:u(()=>[a(ue,{content:e.$t("actions.density")},{default:u(()=>[V("div",st,[a(ll,{size:"18"})])]),_:1},8,["content"])]),_:1}),a(ue,{content:e.$t("actions.column_setting")},{default:u(()=>[a(sl,{trigger:"click",position:"bl",onPopupVisibleChange:xe},{content:u(()=>[V("div",dt,[(o(!0),p(I,null,z(T.value,(l,B)=>(o(),p("div",{key:l.dataIndex,class:"setting"},[V("div",rt,[a(ol)]),V("div",null,[a(nl,{modelValue:l.checked,"onUpdate:modelValue":oe=>l.checked=oe,onChange:oe=>Oe(oe,l,B)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),V("div",mt,c(l.title==="#"?"\u5E8F\u5217\u53F7":l.title),1)]))),128))])]),default:u(()=>[V("div",it,[a(ul,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),a(Ee,{ref_key:"tableRef",ref:me,"row-key":"id",loading:k(we),pagination:R,columns:D.value,data:y.value,bordered:!1,size:ee.value,"row-selection":Be,onPageChange:ze,onPageSizeChange:Se,onSelectionChange:Ze},{type:u(({record:l})=>[i(c(e.$t(`model.dict.type.${l.type}`)),1)]),prompt_ratio:u(({record:l})=>[l.type===5?(o(),p("span",ct,c(l.audio_quota.billing_method===1?`$${k(S)(l.audio_quota.prompt_ratio)}/k`:"-"),1)):l.type===6?(o(),p("span",pt,"-")):l.type!==100?(o(),p("span",ft,c(l.text_quota.billing_method===1?`$${k(S)(l.text_quota.prompt_ratio)}/k`:"-"),1)):l.type===100?(o(),p("span",vt,c(l.multimodal_quota.text_quota.billing_method===1?`$${k(S)(l.multimodal_quota.text_quota.prompt_ratio)}/k`:"-"),1)):(o(),p("span",_t," - "))]),completion_ratio:u(({record:l})=>[l.type===2?(o(),p("span",gt,[a(r,{type:"text",size:"small",onClick:B=>Ke(l.image_quotas)},{default:u(()=>[i(" \u67E5\u770B ")]),_:2},1032,["onClick"])])):l.type===5?(o(),p("span",bt,"-")):l.type===6?(o(),p("span",yt,c(l.audio_quota.billing_method===1?`$${k(S)(l.audio_quota.completion_ratio)}/min`:`$${k(ne)(l.audio_quota.fixed_quota)}/\u6B21`),1)):l.type!==100?(o(),p("span",kt,c(l.text_quota.billing_method===1?`$${k(S)(l.text_quota.completion_ratio)}/k`:`$${k(ne)(l.text_quota.fixed_quota)}/\u6B21`),1)):(o(),p("span",Ct,c(`$${k(S)(l.multimodal_quota.text_quota.completion_ratio)}/k`),1))]),status:u(({record:l})=>[a(he,{modelValue:l.status,"onUpdate:modelValue":B=>l.status=B,"checked-value":1,"unchecked-value":2,onChange:B=>Me({id:`${l.id}`,status:Number(`${l.status}`)})},null,8,["modelValue","onUpdate:modelValue","onChange"])]),operations:u(({record:l})=>[a(r,{type:"text",size:"small",onClick:B=>We(l.id)},{default:u(()=>[i(c(e.$t("model.columns.operations.view")),1)]),_:2},1032,["onClick"]),a(r,{type:"text",size:"small",onClick:B=>e.$router.push({name:"ModelUpdate",query:{id:`${l.id}`}})},{default:u(()=>[i(c(e.$t("model.columns.operations.update")),1)]),_:2},1032,["onClick"]),a(il,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417?",onOk:B=>Ve({id:`${l.id}`})},{default:u(()=>[a(r,{type:"text",size:"small"},{default:u(()=>[i(c(e.$t("model.columns.operations.delete")),1)]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),a(dl,{title:e.$t("menu.model.detail"),"unmount-on-close":"","render-to-body":"",width:700,footer:!1,visible:te.value,onCancel:Xe},{default:u(()=>[a(ot,{id:ye.value},null,8,["id"])]),_:1},8,["title","visible"]),a(P,{visible:L.value,"onUpdate:visible":t[23]||(t[23]=l=>L.value=l),title:e.$t("model.form.title.init_model"),onCancel:Pe,onBeforeOk:Ne},{default:u(()=>[a(N,{ref_key:"initForm",ref:fe,model:h.value},{default:u(()=>[a($,{field:"url",label:e.$t("model.label.url"),rules:[{required:!0,message:e.$t("model.error.url.required")}]},{default:u(()=>[a(K,{modelValue:h.value.url,"onUpdate:modelValue":t[20]||(t[20]=l=>h.value.url=l),placeholder:e.$t("model.placeholder.url"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),a($,{field:"key",label:e.$t("model.label.key"),rules:[{required:!0,message:e.$t("model.error.key.required")}]},{default:u(()=>[a(K,{modelValue:h.value.key,"onUpdate:modelValue":t[21]||(t[21]=l=>h.value.key=l),placeholder:e.$t("model.placeholder.key"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),a($,{field:"is_config_model_agent",label:e.$t("model.label.is_config_model_agent")},{default:u(()=>[a(he,{modelValue:h.value.is_config_model_agent,"onUpdate:modelValue":t[22]||(t[22]=l=>h.value.is_config_model_agent=l)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),a(P,{visible:O.value,"onUpdate:visible":t[25]||(t[25]=l=>O.value=l),title:e.$t("model.form.title.model_agent"),onCancel:Re,onBeforeOk:Te},{default:u(()=>[a(N,{ref_key:"agentForm",ref:ve,model:j.value},{default:u(()=>[a($,{field:"model_agents",label:e.$t("model.label.model_agents"),rules:[{required:!0,message:e.$t("model.error.model_agents.required")}]},{default:u(()=>[a(q,{modelValue:j.value.model_agents,"onUpdate:modelValue":t[24]||(t[24]=l=>j.value.model_agents=l),placeholder:e.$t("model.placeholder.model_agents"),"max-tag-count":15,multiple:"","allow-search":"","allow-clear":""},{default:u(()=>[(o(!0),p(I,null,z(de.value,l=>(o(),f(Z,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),a(P,{visible:x.value,"onUpdate:visible":t[27]||(t[27]=l=>x.value=l),title:e.$t("model.form.title.forward"),onCancel:je,onBeforeOk:Qe},{default:u(()=>[a(N,{ref_key:"forwardForm",ref:_e,model:G.value},{default:u(()=>[a($,{field:"target_model",label:e.$t("model.label.target_model"),rules:[{required:!0,message:e.$t("model.error.target_model.required")}]},{default:u(()=>[a(q,{modelValue:G.value.target_model,"onUpdate:modelValue":t[26]||(t[26]=l=>G.value.target_model=l),placeholder:e.$t("model.placeholder.target_model"),"allow-search":""},{default:u(()=>[(o(!0),p(I,null,z(Y.value,l=>(o(),f(Z,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),a(P,{visible:H.value,"onUpdate:visible":t[29]||(t[29]=l=>H.value=l),title:e.$t("model.form.title.fallback"),onCancel:Je,onBeforeOk:Ge},{default:u(()=>[a(N,{ref_key:"fallbackForm",ref:ge,model:J.value},{default:u(()=>[a($,{field:"fallback_model",label:e.$t("model.label.fallback_model"),rules:[{required:!0,message:e.$t("model.error.fallback_model.required")}]},{default:u(()=>[a(q,{modelValue:J.value.fallback_model,"onUpdate:modelValue":t[28]||(t[28]=l=>J.value.fallback_model=l),placeholder:e.$t("model.placeholder.fallback_model"),"allow-search":""},{default:u(()=>[(o(!0),p(I,null,z(Y.value,l=>(o(),f(Z,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),a(P,{visible:le.value,"onUpdate:visible":t[30]||(t[30]=l=>le.value=l),title:e.$t("model.columns.completion_price"),width:"500px","hide-cancel":"",simple:""},{default:u(()=>[a(Ee,{data:be.value,pagination:!1,bordered:!1},{columns:u(()=>[a(W,{title:"\u5BBD\u5EA6","data-index":"width",align:"center"}),a(W,{title:"\u9AD8\u5EA6","data-index":"height",align:"center"}),a(W,{title:"\u4EF7\u683C","data-index":"fixed_quota",align:"center"},{cell:u(({record:l})=>[i(c(`$${k(ne)(l.fixed_quota)}/\u5F20`),1)]),_:1}),a(W,{title:"\u9ED8\u8BA4","data-index":"is_default",align:"center"},{cell:u(({record:l})=>[i(c(l.is_default?"\u662F":"-"),1)]),_:1})]),_:1},8,["data"])]),_:1},8,["visible","title"])]),_:1})])}}});const oa=gl(ht,[["__scopeId","data-v-18fd7dac"]]);export{oa as default};
