import{u as Oe,F as Ge,p as Ke,y as Qe,i as We,z as Xe,_ as Ze}from"./index.c1002398.js";/* empty css                *//* empty css                *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css              *//* empty css                *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css              */import{d as et,r as pe,e as g,c as K,w as fe,bQ as tt,B as t,C as i,aH as a,aG as e,aL as d,aM as s,bu as k,aD as n,aJ as L,aI as P,u as _,F as B,D as at,aE as ye,bR as ve,n as lt,g as ot,aK as nt,aF as st,bA as ut,bB as it,b2 as dt,bC as _t,b1 as rt,aS as ct,bS as mt,bD as pt,b5 as ft,bE as yt,ab as vt,aU as kt,bi as ht,bj as bt,bl as gt,bm as wt,b4 as $t,bF as Ct,c1 as Ft,bM as Dt,bH as Bt,bJ as It,bK as xt,ad as Et,bL as Vt,bN as At,ba as St,b6 as zt,aV as qt,bI as Nt}from"./arco.86f0f56d.js";import{u as Lt}from"./loading.0ba7f8b6.js";import{q as Pt}from"./common.7a0e8d62.js";import{V as Mt,d as Ut,e as Tt,i as Yt}from"./styles.4dd70594.js";import{g as Rt}from"./app.066c120e.js";import{c as Q,S as Ht}from"./sortable.esm.07e6d21c.js";import{q as jt}from"./model.d972967d.js";import{u as Jt}from"./vue.e2e8d4fd.js";import"./chart.dbe284dd.js";import"./base.87fcf6e2.js";const Ot={class:"container"},Gt={class:"action-icon"},Kt={class:"action-icon"},Qt={id:"tableSetting"},Wt={style:{"margin-right":"4px",cursor:"move"}},Xt={class:"title"},Zt={style:{margin:"10px 0 30px 10px"}},ea={key:1},ta={key:1},aa={key:1},la={key:1},oa={key:1},na={key:1},sa={key:1},ua={key:1,style:{"max-height":"220px",display:"block",overflow:"auto"}},ia={key:1,style:{"max-height":"220px",display:"block",overflow:"auto"}},da={key:1},_a={key:1},ra={key:1},ca={key:1},ma={key:1},pa={key:1,style:{"max-height":"220px",display:"block",overflow:"auto"}},fa={key:1},ya={key:1},va={key:1},ka={key:1},ha={key:1},ba={key:1},ga={key:1},wa={key:1},$a={key:1},Ca={key:1},Fa={key:1},Da={key:1},Ba={key:1},Ia={key:1},xa={key:1},Ea={key:1},Va={key:1},Aa={key:1},Sa={key:1,style:{"max-height":"220px",display:"block",overflow:"auto"}},za={key:1,style:{"max-height":"220px",display:"block",overflow:"auto"}},qa={key:1},Na={key:1},La={key:1},Pa={key:1},Ma={key:1},Ua={key:1},Ta={key:1},Ya={key:1},Ra={key:1},Ha={key:1},ja={key:1,style:{"max-height":"220px",display:"block",overflow:"auto"}},Ja={key:1},Oa={name:"ChatList"},Ga=et({...Oa,setup(Ka){const ke=pe({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),W=g([]);(async()=>{try{const{data:u}=await Rt();W.value=u.items}catch{}})();const X=g([]);(async()=>{try{const{data:u}=await jt();X.value=u.items}catch{}})();const Z=()=>({app_id:g(),trace_id:g(),user_id:g(),key:"",models:[],total_time:g(),status:g(),req_time:[ve().format("YYYY-MM-DD 00:00:00"),ve().format("YYYY-MM-DD 23:59:59")]}),{loading:r,setLoading:ee}=Lt(!0),{t:b}=Oe(),te=g([]),h=g(Z()),x=g([]),S=g([]),M=g("medium"),E={current:1,pageSize:20,showTotal:!0,showPageSize:!0,pageSizeOptions:[20,50,100,500,1e3]},z=pe({...E}),he=K(()=>[{name:b("size.mini"),value:"mini"},{name:b("size.small"),value:"small"},{name:b("size.medium"),value:"medium"},{name:b("size.large"),value:"large"}]),V=localStorage.getItem("userRole"),ae=K(()=>[{title:b(V==="admin"?"chat.columns.user_id":"chat.columns.app_id"),dataIndex:V==="admin"?"user_id":"app_id",slotName:V==="admin"?"user_id":"app_id",align:"center",width:75},{title:b("chat.columns.model"),dataIndex:"model",slotName:"model",align:"center"},{title:b("chat.columns.prompt"),dataIndex:"prompt",slotName:"prompt",align:"center",ellipsis:!0,tooltip:!0},{title:b("chat.columns.images"),dataIndex:"images",slotName:"images",align:"center"},{title:b("chat.columns.total_price"),dataIndex:"total_tokens",slotName:"total_tokens",align:"center"},{title:b("chat.columns.total_time"),dataIndex:"total_time",slotName:"total_time",align:"center"},{title:b("chat.columns.internal_time"),dataIndex:"internal_time",slotName:"internal_time",align:"center"},{title:b("chat.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:65},{title:b("chat.columns.req_time"),dataIndex:"req_time",slotName:"req_time",align:"center",width:132},{title:b("chat.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:75}]);V==="user"&&ae.value.splice(6,1);const le=K(()=>[{label:b("chat.dict.status.1"),value:1},{label:b("chat.dict.status.2"),value:2},{label:b("chat.dict.status.-1"),value:-1}]);V==="admin"&&le.value.push({label:b("chat.dict.status.3"),value:3},{label:b("chat.dict.status.-100"),value:-100});const q=async(u={...E,...h.value})=>{ee(!0);try{const{data:c}=await Ut(u);te.value=c.items,z.current=u.current,z.pageSize=u.pageSize,z.total=c.paging.total}catch{}finally{ee(!1)}},oe=()=>{q({...E,...h.value})},be=u=>{q({...E,...h.value,current:u})},ge=u=>{E.pageSize=u,q({...E,...h.value})};q();const we=()=>{h.value=Z()},$e=(u,c)=>{M.value=u},Ce=(u,c,$)=>{u?x.value.splice($,0,c):x.value=S.value.filter(F=>F.dataIndex!==c.dataIndex)},ne=(u,c,$,F=!1)=>{const D=F?Q(u):u;return c>-1&&$>-1&&D.splice(c,1,D.splice($,1,D[c]).pop()),D},Fe=u=>{u&&lt(()=>{const c=document.getElementById("tableSetting");new Ht(c,{onEnd($){const{oldIndex:F,newIndex:D}=$;ne(x.value,F,D),ne(S.value,F,D)}})})};fe(()=>ae.value,u=>{x.value=Q(u),x.value.forEach((c,$)=>{c.checked=!0}),S.value=Q(x.value)},{deep:!0,immediate:!0});const U=g(!1),{copy:se,copied:ue}=Jt(),{proxy:De}=ot(),l=g({}),Be=async u=>{U.value=!0,r.value=!0;try{const{data:c}=await Tt({id:u});l.value=c}catch{}finally{r.value=!1}},Ie=()=>{U.value=!1},ie=u=>{se(u)};fe(ue,()=>{ue.value&&De.$message.success("\u590D\u5236\u6210\u529F")});const T=async(u,c)=>{const{data:$}=await Yt({id:u,field:c});se($.value)},de=g(),Y=g(!1),xe=u=>{de.value=u,Y.value=!0};return(u,c)=>{const $=Ge,F=nt,D=st,_e=ut,R=it,I=dt,C=_t,H=rt,Ee=ct,Ve=mt,j=pt,Ae=ft,re=yt,Se=vt,N=kt,ce=Ke,me=ht,J=bt,ze=Qe,qe=gt,Ne=wt,Le=We,Pe=Xe,Me=$t,Ue=Ct,Te=Ft,y=Dt,Ye=Bt,m=It,p=xt,A=Et,f=Vt,O=At,Re=St,He=zt,je=qt,Je=Nt,v=tt("permission");return t(),i("div",Ot,[a(D,{class:"container-breadcrumb"},{default:e(()=>[a(F,null,{default:e(()=>[a($)]),_:1}),a(F,null,{default:e(()=>[d(s(u.$t("menu.image")),1)]),_:1}),a(F,null,{default:e(()=>[d(s(u.$t("menu.image.list")),1)]),_:1})]),_:1}),a(Je,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:e(()=>[a(j,null,{default:e(()=>[a(C,{flex:1},{default:e(()=>[a(Ae,{model:h.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:e(()=>[a(j,{gutter:16},{default:e(()=>[k((t(),n(C,{span:8},{default:e(()=>[a(I,{field:"app_id",label:u.$t("chat.form.app_id")},{default:e(()=>[a(R,{modelValue:h.value.app_id,"onUpdate:modelValue":c[0]||(c[0]=o=>h.value.app_id=o),placeholder:u.$t("chat.form.selectDefault"),"allow-search":"","allow-clear":""},{default:e(()=>[(t(!0),i(L,null,P(W.value,o=>(t(),n(_e,{key:o.app_id,value:o.app_id,label:o.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})),[[v,["user"]]]),k((t(),n(C,{span:8},{default:e(()=>[a(I,{field:"trace_id",label:u.$t("chat.form.trace_id")},{default:e(()=>[a(H,{modelValue:h.value.trace_id,"onUpdate:modelValue":c[1]||(c[1]=o=>h.value.trace_id=o),placeholder:u.$t("chat.form.trace_id.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})),[[v,["admin"]]]),k((t(),n(C,{span:8},{default:e(()=>[a(I,{field:"user_id",label:u.$t("chat.form.user_id")},{default:e(()=>[a(H,{modelValue:h.value.user_id,"onUpdate:modelValue":c[2]||(c[2]=o=>h.value.user_id=o),placeholder:u.$t("chat.form.user_id.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})),[[v,["admin"]]]),k((t(),n(C,{span:8},{default:e(()=>[a(I,{field:"key",label:u.$t("chat.form.key")},{default:e(()=>[a(H,{modelValue:h.value.key,"onUpdate:modelValue":c[3]||(c[3]=o=>h.value.key=o),placeholder:u.$t("chat.form.key.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})),[[v,["user"]]]),a(C,{span:8},{default:e(()=>[a(I,{field:"models",label:u.$t("chat.form.models")},{default:e(()=>[a(R,{modelValue:h.value.models,"onUpdate:modelValue":c[4]||(c[4]=o=>h.value.models=o),placeholder:u.$t("chat.form.selectDefault"),"max-tag-count":2,multiple:"","allow-search":"","allow-clear":""},{default:e(()=>[(t(!0),i(L,null,P(X.value,o=>(t(),n(_e,{key:o.id,value:o.id,label:o.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(C,{span:8},{default:e(()=>[a(I,{field:"total_time",label:u.$t("chat.form.total_time")},{default:e(()=>[a(Ee,{modelValue:h.value.total_time,"onUpdate:modelValue":c[5]||(c[5]=o=>h.value.total_time=o),precision:0,min:1,placeholder:u.$t("chat.form.total_time.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(C,{span:8},{default:e(()=>[a(I,{field:"status",label:u.$t("chat.form.status")},{default:e(()=>[a(R,{modelValue:h.value.status,"onUpdate:modelValue":c[6]||(c[6]=o=>h.value.status=o),options:_(le),placeholder:u.$t("chat.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),a(C,{span:8},{default:e(()=>[a(I,{field:"req_time",label:u.$t("chat.form.req_time")},{default:e(()=>[a(Ve,{modelValue:h.value.req_time,"onUpdate:modelValue":c[7]||(c[7]=o=>h.value.req_time=o),placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"],"time-picker-props":{defaultValue:["00:00:00","23:59:59"]},"show-time":""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(re,{style:{height:"84px"},direction:"vertical"}),a(C,{flex:"86px",style:{"text-align":"right"}},{default:e(()=>[a(me,{direction:"vertical",size:18},{default:e(()=>[a(N,{type:"primary",onClick:oe},{icon:e(()=>[a(Se)]),default:e(()=>[d(" "+s(u.$t("chat.form.search")),1)]),_:1}),a(N,{onClick:we},{icon:e(()=>[a(ce)]),default:e(()=>[d(" "+s(u.$t("chat.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(re,{style:{"margin-top":"0"}}),a(j,{style:{"margin-bottom":"16px"}},{default:e(()=>[a(C,{span:24,style:{display:"flex","align-items":"center","justify-content":"end"}},{default:e(()=>[a(J,{content:u.$t("actions.refresh")},{default:e(()=>[B("div",{class:"action-icon",onClick:oe},[a(ce,{size:"18"})])]),_:1},8,["content"]),a(Ne,{onSelect:$e},{content:e(()=>[(t(!0),i(L,null,P(_(he),o=>(t(),n(qe,{key:o.value,value:o.value,class:at({active:o.value===M.value})},{default:e(()=>[B("span",null,s(o.name),1)]),_:2},1032,["value","class"]))),128))]),default:e(()=>[a(J,{content:u.$t("actions.density")},{default:e(()=>[B("div",Gt,[a(ze,{size:"18"})])]),_:1},8,["content"])]),_:1}),a(J,{content:u.$t("actions.column_setting")},{default:e(()=>[a(Ue,{trigger:"click",position:"bl",onPopupVisibleChange:Fe},{content:e(()=>[B("div",Qt,[(t(!0),i(L,null,P(S.value,(o,w)=>(t(),i("div",{key:o.dataIndex,class:"setting"},[B("div",Wt,[a(Pe)]),B("div",null,[a(Me,{modelValue:o.checked,"onUpdate:modelValue":G=>o.checked=G,onChange:G=>Ce(G,o,w)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),B("div",Xt,s(o.title==="#"?"\u5E8F\u5217\u53F7":o.title),1)]))),128))])]),default:e(()=>[B("div",Kt,[a(Le,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),a(Ye,{"row-key":"id",loading:_(r),pagination:z,columns:x.value,data:te.value,bordered:!1,size:M.value,"row-selection":ke,onPageChange:be,onPageSizeChange:ge},{user_id:e(({record:o})=>[d(s(o.is_smart_match?"-":o.user_id),1)]),images:e(({record:o})=>[a(N,{type:"text",size:"small",onClick:w=>xe(o.id)},{default:e(()=>[d("\u67E5\u770B")]),_:2},1032,["onClick"]),de.value===o.id?(t(),n(Te,{key:0,visible:Y.value,"onUpdate:visible":c[8]||(c[8]=w=>Y.value=w),"src-list":o.images},null,8,["visible","src-list"])):ye("",!0)]),total_tokens:e(({record:o})=>[d(s(o.total_tokens?`$${_(Pt)(o.total_tokens)}`:o.status===1&&o.billing_method===2?0:"-"),1)]),total_time:e(({record:o})=>[o.total_time>18e4?k((t(),n(y,{key:0,color:"red"},{default:e(()=>[d(s(o.total_time),1)]),_:2},1024)),[[v,["user"]]]):o.total_time>12e4?k((t(),n(y,{key:1,color:"orange"},{default:e(()=>[d(s(o.total_time),1)]),_:2},1024)),[[v,["user"]]]):o.total_time>9e4?k((t(),n(y,{key:2,color:"gold"},{default:e(()=>[d(s(o.total_time),1)]),_:2},1024)),[[v,["user"]]]):k((t(),n(y,{key:3,color:"green"},{default:e(()=>[d(s(o.total_time||"-"),1)]),_:2},1024)),[[v,["user"]]]),o.total_time>12e4?k((t(),n(y,{key:4,color:"red"},{default:e(()=>[d(s(o.total_time),1)]),_:2},1024)),[[v,["admin"]]]):o.total_time>9e4?k((t(),n(y,{key:5,color:"orange"},{default:e(()=>[d(s(o.total_time),1)]),_:2},1024)),[[v,["admin"]]]):o.total_time>6e4?k((t(),n(y,{key:6,color:"gold"},{default:e(()=>[d(s(o.total_time),1)]),_:2},1024)),[[v,["admin"]]]):k((t(),n(y,{key:7,color:"green"},{default:e(()=>[d(s(o.total_time||"-"),1)]),_:2},1024)),[[v,["admin"]]])]),internal_time:e(({record:o})=>[o.internal_time>1e3?k((t(),n(y,{key:0,color:"red"},{default:e(()=>[d(s(o.internal_time),1)]),_:2},1024)),[[v,["user"]]]):o.internal_time>500?k((t(),n(y,{key:1,color:"orange"},{default:e(()=>[d(s(o.internal_time),1)]),_:2},1024)),[[v,["user"]]]):o.internal_time>300?k((t(),n(y,{key:2,color:"gold"},{default:e(()=>[d(s(o.internal_time),1)]),_:2},1024)),[[v,["user"]]]):k((t(),n(y,{key:3,color:"green"},{default:e(()=>[d(s(o.internal_time||"-"),1)]),_:2},1024)),[[v,["user"]]]),o.internal_time>500?k((t(),n(y,{key:4,color:"red"},{default:e(()=>[d(s(o.internal_time),1)]),_:2},1024)),[[v,["admin"]]]):o.internal_time>300?k((t(),n(y,{key:5,color:"orange"},{default:e(()=>[d(s(o.internal_time),1)]),_:2},1024)),[[v,["admin"]]]):o.internal_time>100?k((t(),n(y,{key:6,color:"gold"},{default:e(()=>[d(s(o.internal_time),1)]),_:2},1024)),[[v,["admin"]]]):k((t(),n(y,{key:7,color:"green"},{default:e(()=>[d(s(o.internal_time||"-"),1)]),_:2},1024)),[[v,["admin"]]])]),status:e(({record:o})=>[o.status===-1?(t(),n(y,{key:0,color:"red"},{default:e(()=>[d(s(u.$t(`chat.dict.status.${o.status}`)),1)]),_:2},1024)):o.status===2?(t(),n(y,{key:1,color:"gold"},{default:e(()=>[d(s(u.$t(`chat.dict.status.${o.status}`)),1)]),_:2},1024)):o.status===3?(t(),n(y,{key:2,color:"orange"},{default:e(()=>[d(s(u.$t(`chat.dict.status.${o.status}`)),1)]),_:2},1024)):(t(),n(y,{key:3,color:"green"},{default:e(()=>[d(s(u.$t(`chat.dict.status.${o.status}`)),1)]),_:2},1024))]),operations:e(({record:o})=>[a(N,{type:"text",size:"small",onClick:w=>Be(o.id)},{default:e(()=>[d(s(u.$t("chat.columns.operations.view")),1)]),_:2},1032,["onClick"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),a(je,{title:"\u65E5\u5FD7\u8BE6\u60C5",visible:U.value,width:700,footer:!1,"unmount-on-close":"","render-to-body":"",onCancel:Ie},{default:e(()=>[B("div",Zt,[k((t(),n(O,{column:2,bordered:"","value-style":{width:"350px",padding:"5px 8px 5px 20px"}},{default:e(()=>[a(f,{label:"Trace ID",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",ea,[d(s(l.value.trace_id)+" ",1),a(A,{class:"copy-btn",onClick:c[9]||(c[9]=o=>ie(l.value.trace_id))})]))]),_:1}),a(f,{label:"Host",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",ta,s(l.value.host||"-"),1))]),_:1}),a(f,{label:"\u8C03\u7528\u5BC6\u94A5",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",aa,[d(s(l.value.creator)+" ",1),a(A,{class:"copy-btn",onClick:c[10]||(c[10]=o=>T(l.value.id,"creator"))})]))]),_:1}),a(f,{label:"\u7528\u6237ID"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),i("span",la,s(l.value.user_id||"-"),1))]),_:1}),a(f,{label:"\u5E94\u7528ID",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),i("span",oa,s(l.value.app_id||"-"),1))]),_:1}),a(f,{label:"\u6A21\u578B"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",na,s(l.value.model||"-"),1))]),_:1}),a(f,{label:"\u6A21\u578B\u7C7B\u578B"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",sa,s(u.$t(`chat.dict.type.${l.value.type}`)),1))]),_:1}),a(f,{label:"\u63D0\u793A\u8BCD",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",ua,s(l.value.prompt||"-"),1))]),_:1}),a(f,{label:"\u56DE\u7B54"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",ia,s(l.value.image_data||"-"),1))]),_:1}),a(f,{label:"\u82B1\u8D39\u4EE4\u724C\u6570",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",da,s(l.value.total_tokens?l.value.total_tokens:l.value.status===1&&l.value.text_quota.billing_method===2?0:"-"),1))]),_:1}),a(f,{label:"\u603B\u8017\u65F6",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",_a,[l.value.total_time>18e4?(t(),n(y,{key:0,color:"red"},{default:e(()=>[d(s(l.value.total_time)+" ms ",1)]),_:1})):l.value.total_time>12e4?(t(),n(y,{key:1,color:"orange"},{default:e(()=>[d(s(l.value.total_time)+" ms ",1)]),_:1})):l.value.total_time>9e4?(t(),n(y,{key:2,color:"gold"},{default:e(()=>[d(s(l.value.total_time)+" ms ",1)]),_:1})):(t(),n(y,{key:3,color:"green"},{default:e(()=>[d(s(l.value.total_time||"-")+" ms",1)]),_:1}))]))]),_:1}),a(f,{label:"\u7ED3\u679C",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",ra,[l.value.status===1?(t(),n(y,{key:0,color:"green"},{default:e(()=>[d(s(u.$t(`chat.dict.status.${l.value.status}`)),1)]),_:1})):l.value.status===2?(t(),n(y,{key:1,color:"gold"},{default:e(()=>[d(s(u.$t(`chat.dict.status.${l.value.status}`)),1)]),_:1})):l.value.status===3?(t(),n(y,{key:2,color:"orange"},{default:e(()=>[d(s(u.$t(`chat.dict.status.${l.value.status}`)),1)]),_:1})):(t(),n(y,{key:3,color:"red"},{default:e(()=>[d(s(u.$t(`chat.dict.status.${l.value.status}`)),1)]),_:1}))]))]),_:1}),a(f,{label:"\u5BA2\u6237\u7AEFIP",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),i("span",ca,s(l.value.client_ip||"-"),1))]),_:1}),a(f,{label:"\u8BF7\u6C42\u65F6\u95F4",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),i("span",ma,s(l.value.req_time||"-"),1))]),_:1}),a(f,{label:"\u9519\u8BEF\u4FE1\u606F",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",pa,s(l.value.err_msg||"-"),1))]),_:1})]),_:1})),[[v,["user"]]]),k((t(),n(O,{column:2,bordered:"","value-style":{width:"350px",padding:"5px 8px 5px 20px"}},{default:e(()=>[a(f,{label:"Trace ID",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",fa,[d(s(l.value.trace_id)+" ",1),a(A,{class:"copy-btn",onClick:c[11]||(c[11]=o=>ie(l.value.trace_id))})]))]),_:1}),a(f,{label:"Host"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",ya,s(l.value.host||"-"),1))]),_:1}),a(f,{label:"\u8C03\u7528\u5BC6\u94A5",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",va,[d(s(l.value.is_smart_match?"-":l.value.creator)+" ",1),l.value.is_smart_match?ye("",!0):(t(),n(A,{key:0,class:"copy-btn",onClick:c[12]||(c[12]=o=>T(l.value.id,"creator"))}))]))]),_:1}),a(f,{label:"\u7528\u6237ID"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),i("span",ka,s(l.value.is_smart_match?"-":l.value.user_id||"-"),1))]),_:1}),a(f,{label:"\u5E94\u7528ID",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),i("span",ha,s(l.value.is_smart_match?"-":l.value.app_id||"-"),1))]),_:1}),a(f,{label:"\u516C\u53F8"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",ba,s(l.value.corp_name),1))]),_:1}),a(f,{label:"\u6A21\u578B\u7C7B\u578B"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",ga,s(u.$t(`chat.dict.type.${l.value.type}`)),1))]),_:1}),a(f,{label:"\u8BF7\u6C42\u6A21\u578B\u540D\u79F0"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),i("span",wa,s(l.value.name||"-"),1))]),_:1}),a(f,{label:"\u8BF7\u6C42\u6A21\u578B"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",$a,s(l.value.model||"-"),1))]),_:1}),a(f,{label:"\u771F\u5B9E\u6A21\u578B\u540D\u79F0"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",Ca,s(l.value.real_model_name),1))]),_:1}),a(f,{label:"\u771F\u5B9E\u6A21\u578B"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",Fa,s(l.value.real_model),1))]),_:1}),a(f,{label:"\u540E\u5907\u4EE3\u7406"},{default:e(()=>{var o,w;return[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),i("span",Da,s(((w=(o=l.value)==null?void 0:o.fallback_config)==null?void 0:w.model_agent_name)||"-"),1))]}),_:1}),a(f,{label:"\u540E\u5907\u6A21\u578B"},{default:e(()=>{var o,w;return[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),i("span",Ba,s(((w=(o=l.value)==null?void 0:o.fallback_config)==null?void 0:w.model)||"-"),1))]}),_:1}),a(f,{label:"\u542F\u7528\u8F6C\u53D1"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",Ia,s(u.$t(`chat.dict.is_enable_forward.${l.value.is_enable_forward||!1}`)),1))]),_:1}),a(f,{label:"\u8F6C\u53D1\u89C4\u5219"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",xa,s(l.value.is_enable_forward?u.$t(`chat.dict.forward_rule.${l.value.forward_config.forward_rule||"1"}`):"-"),1))]),_:1}),a(f,{label:"\u542F\u7528\u4EE3\u7406",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",Ea,s(u.$t(`chat.dict.is_enable_model_agent.${l.value.is_enable_model_agent||!1}`)),1))]),_:1}),a(f,{label:"\u4EE3\u7406\u540D\u79F0"},{default:e(()=>{var o,w;return[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),i("span",Va,s(((w=(o=l.value)==null?void 0:o.model_agent)==null?void 0:w.name)||"-"),1))]}),_:1}),a(f,{label:"\u5BC6\u94A5"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",Aa,[d(s(l.value.key?l.value.key.length>0?l.value.key.substr(0,l.value.key.length/2>10?10:l.value.key.length/2)+"************************************"+l.value.key.substr(-(l.value.key.length/2>5?5:l.value.key.length/2)):l.value.key:"-")+" ",1),a(A,{class:"copy-btn",onClick:c[13]||(c[13]=o=>T(l.value.id,"key"))})]))]),_:1}),a(f,{label:"\u63D0\u793A\u8BCD",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",Sa,s(l.value.prompt||"-"),1))]),_:1}),a(f,{label:"\u56DE\u7B54"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",za,s(l.value.image_data||"-"),1))]),_:1}),a(f,{label:"\u8BA1\u8D39\u65B9\u5F0F",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",qa,s(u.$t("chat.dict.billing_method.2")),1))]),_:1}),a(f,{label:"\u82B1\u8D39\u4EE4\u724C\u6570"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",Na,s(l.value.total_tokens?l.value.total_tokens:l.value.status===1&&l.value.text_quota.billing_method===2?0:"-"),1))]),_:1}),a(f,{label:"\u603B\u8017\u65F6",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",La,[l.value.total_time>12e4?(t(),n(y,{key:0,color:"red"},{default:e(()=>[d(s(l.value.total_time)+" ms ",1)]),_:1})):l.value.total_time>9e4?(t(),n(y,{key:1,color:"orange"},{default:e(()=>[d(s(l.value.total_time)+" ms ",1)]),_:1})):l.value.total_time>6e4?(t(),n(y,{key:2,color:"gold"},{default:e(()=>[d(s(l.value.total_time)+" ms ",1)]),_:1})):(t(),n(y,{key:3,color:"green"},{default:e(()=>[d(s(l.value.total_time||"-")+" ms",1)]),_:1}))]))]),_:1}),a(f,{label:"\u5185\u8017"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",Pa,[l.value.internal_time>500?(t(),n(y,{key:0,color:"red"},{default:e(()=>[d(s(l.value.internal_time)+" ms ",1)]),_:1})):l.value.internal_time>300?(t(),n(y,{key:1,color:"orange"},{default:e(()=>[d(s(l.value.internal_time)+" ms ",1)]),_:1})):l.value.internal_time>100?(t(),n(y,{key:2,color:"gold"},{default:e(()=>[d(s(l.value.internal_time)+" ms ",1)]),_:1})):(t(),n(y,{key:3,color:"green"},{default:e(()=>[d(s(l.value.internal_time||"-")+" ms",1)]),_:1}))]))]),_:1}),a(f,{label:"\u7ED3\u679C",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",Ma,[l.value.status===1?(t(),n(y,{key:0,color:"green"},{default:e(()=>[d(s(u.$t(`chat.dict.status.${l.value.status}`)),1)]),_:1})):l.value.status===2?(t(),n(y,{key:1,color:"gold"},{default:e(()=>[d(s(u.$t(`chat.dict.status.${l.value.status}`)),1)]),_:1})):l.value.status===3?(t(),n(y,{key:2,color:"orange"},{default:e(()=>[d(s(u.$t(`chat.dict.status.${l.value.status}`)),1)]),_:1})):(t(),n(y,{key:3,color:"red"},{default:e(()=>[d(s(u.$t(`chat.dict.status.${l.value.status}`)),1)]),_:1}))]))]),_:1}),a(f,{label:"\u672C\u5730IP",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),i("span",Ua,s(l.value.local_ip||"-"),1))]),_:1}),a(f,{label:"\u5BA2\u6237\u7AEFIP",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),i("span",Ta,s(l.value.client_ip||"-"),1))]),_:1}),a(f,{label:"\u8FDC\u7A0BIP",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),i("span",Ya,s(l.value.remote_ip||"-"),1))]),_:1}),a(f,{label:"\u8BF7\u6C42\u65F6\u95F4",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),i("span",Ra,s(l.value.req_time||"-"),1))]),_:1}),a(f,{label:"\u521B\u5EFA\u65F6\u95F4",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),i("span",Ha,s(l.value.created_at||"-"),1))]),_:1}),a(f,{label:"\u9519\u8BEF\u4FE1\u606F",span:2},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),i("span",ja,s(l.value.err_msg||"-"),1))]),_:1})]),_:1})),[[v,["admin"]]]),k((t(),n(O,{layout:"inline-vertical",column:2,style:{"margin-top":"10px",position:"relative"}},{default:e(()=>[a(f,{span:2},{default:e(()=>[a(He,{type:"card"},{default:e(()=>[a(Re,{key:"1",title:"\u6A21\u578B\u4EE3\u7406"},{default:e(()=>[_(r)?(t(),n(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:3})]),_:1})):(t(),n(me,{key:1},{default:e(()=>[l.value.model_agent?(t(),n(_(Mt),{key:0,data:l.value.model_agent,"show-length":!0},null,8,["data"])):(t(),i("span",Ja,"-"))]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})),[[v,["admin"]]])])]),_:1},8,["visible"])]),_:1})])}}});const Al=Ze(Ga,[["__scopeId","data-v-2538602d"]]);export{Al as default};
