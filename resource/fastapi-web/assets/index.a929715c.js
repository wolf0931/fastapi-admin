import{a as J,_ as A,b as T,g as ce,I as ue}from"./index.657eaa95.js";/* empty css               */import{d as D,c as q,B as r,aD as m,aG as e,aH as a,aL as p,aM as u,u as c,bh as Q,bA as U,bF as Z,r as X,bR as V,bu as C,bk as Y,bU as ee,bi as P,bV as ae,bW as te,b8 as ie,b9 as pe,F as v,e as E,aZ as oe,bX as N,bY as O,bJ as I,bN as G,j as _e,aE as L,bZ as me,bI as ge,C as M,aJ as W,aI as K,br as fe,b7 as j,b_ as ve,bE as le,b$ as he,c0 as ye,bT as be}from"./arco.aed15247.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css                */import{u as H}from"./loading.b5911e1d.js";/* empty css               *//* empty css              *//* empty css              *//* empty css                *//* empty css               *//* empty css              */import"./chart.9aa6eafa.js";import"./vue.0cc5b64a.js";const xe=D({__name:"banner",setup(g){const o=J(),i=q(()=>({name:o.name}));return(t,h)=>{const n=Q,l=U,d=Z;return r(),m(l,{class:"banner"},{default:e(()=>[a(l,{span:8},{default:e(()=>[a(n,{heading:5,style:{"margin-top":"0"}},{default:e(()=>[p(u(t.$t("workplace.welcome"))+" "+u(c(i).name),1)]),_:1})]),_:1}),a(d,{class:"panel-border"})]),_:1})}}});const we=A(xe,[["__scopeId","data-v-5803762b"]]);function ke(g){return T.get(`/api/v1/dashboard/call/data/${g}`)}function $e(){return T.get("/api/v1/dashboard/base/data")}function Ce(){return T.get("/api/v1/dashboard/expense")}function Fe(g){return T.get("/api/v1/dashboard/data/top5",{params:g})}function Ee(g){return T.get(`/api/v1/dashboard/model/percent/${g}`)}const F=g=>(ie("data-v-c9658c6a"),g=g(),pe(),g),De=F(()=>v("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image"},null,-1)),Se=F(()=>v("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/288b89194e657603ff40db39e8072640.svg~tplv-49unhts6dw-image.image"},null,-1)),Be=F(()=>v("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/288b89194e657603ff40db39e8072640.svg~tplv-49unhts6dw-image.image"},null,-1)),Ae=F(()=>v("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image"},null,-1)),Ie=F(()=>v("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image"},null,-1)),Le=F(()=>v("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image"},null,-1)),Re=F(()=>v("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/fdc66b07224cdf18843c6076c2587eb5.svg~tplv-49unhts6dw-image.image"},null,-1)),ze=F(()=>v("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image"},null,-1)),Te=F(()=>v("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image"},null,-1)),Me=F(()=>v("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image"},null,-1)),qe=F(()=>v("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/fdc66b07224cdf18843c6076c2587eb5.svg~tplv-49unhts6dw-image.image"},null,-1)),Ue=F(()=>v("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image"},null,-1)),Ve=D({__name:"data-panel",setup(g){const o=X({});return(async()=>{try{const{data:t}=await $e();o.app=t.app,o.today_app=t.today_app,o.model=t.model,o.app_key=t.app_key,o.model_key=t.model_key,o.user=t.user,o.today_user=t.today_user,o.call=t.call}catch{}})(),(t,h)=>{const n=Y,l=ee,d=P,s=ae,x=Z,k=te,_=V("permission");return r(),m(k,{cols:24,"row-gap":12,class:"panel"},{default:e(()=>[a(s,{class:"panel-col",span:{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6}},{default:e(()=>[a(d,null,{default:e(()=>[a(n,{size:54,class:"col-avatar"},{default:e(()=>[De]),_:1}),a(l,{title:t.$t("workplace.call"),value:c(o).call,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1}),a(s,{class:"panel-col",span:{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6}},{default:e(()=>[a(d,null,{default:e(()=>[a(n,{size:54,class:"col-avatar"},{default:e(()=>[Se]),_:1}),a(l,{title:t.$t("workplace.app"),value:c(o).app,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1}),C((r(),m(s,{class:"panel-col",span:{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6}},{default:e(()=>[a(d,null,{default:e(()=>[a(n,{size:54,class:"col-avatar"},{default:e(()=>[Be]),_:1}),a(l,{title:t.$t("workplace.todayApp"),value:c(o).today_app,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1})),[[_,["admin"]]]),a(s,{class:"panel-col",span:{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6},style:{"border-right":"none"}},{default:e(()=>[a(d,null,{default:e(()=>[a(n,{size:54,class:"col-avatar"},{default:e(()=>[Ae]),_:1}),a(l,{title:t.$t("workplace.appKey"),value:c(o).app_key,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1}),C((r(),m(s,{span:24},{default:e(()=>[a(x,{class:"panel-border"})]),_:1})),[[_,["admin"]]]),C((r(),m(s,{class:"panel-col",span:{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6}},{default:e(()=>[a(d,null,{default:e(()=>[a(n,{size:54,class:"col-avatar"},{default:e(()=>[Ie]),_:1}),a(l,{title:t.$t("workplace.user"),value:c(o).user,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1})),[[_,["admin"]]]),C((r(),m(s,{class:"panel-col",span:{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6},style:{"border-right":"none"}},{default:e(()=>[a(d,null,{default:e(()=>[a(n,{size:54,class:"col-avatar"},{default:e(()=>[Le]),_:1}),a(l,{title:t.$t("workplace.todayUser"),value:c(o).today_user,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1})),[[_,["admin"]]]),a(s,{class:"panel-col",span:{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6},style:{"border-right":"none","border-left":"1px solid rgb(var(--gray-2))"}},{default:e(()=>[a(d,null,{default:e(()=>[a(n,{size:54,class:"col-avatar"},{default:e(()=>[Re]),_:1}),a(l,{title:t.$t("workplace.model"),value:c(o).model,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1}),C((r(),m(s,{class:"panel-col",span:{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6},style:{"border-right":"none","border-left":"1px solid rgb(var(--gray-2))"}},{default:e(()=>[a(d,null,{default:e(()=>[a(n,{size:54,class:"col-avatar"},{default:e(()=>[ze]),_:1}),a(l,{title:t.$t("workplace.modelKey"),value:c(o).model_key,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1})),[[_,["admin"]]]),C((r(),m(s,{span:24},{default:e(()=>[a(x,{class:"panel-border"})]),_:1})),[[_,["admin"]]]),C((r(),m(s,{class:"panel-col",span:{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6}},{default:e(()=>[a(d,null,{default:e(()=>[a(n,{size:54,class:"col-avatar"},{default:e(()=>[Te]),_:1}),a(l,{title:t.$t("workplace.user"),value:c(o).user,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1})),[[_,["admin"]]]),C((r(),m(s,{class:"panel-col",span:{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6},style:{"border-right":"none"}},{default:e(()=>[a(d,null,{default:e(()=>[a(n,{size:54,class:"col-avatar"},{default:e(()=>[Me]),_:1}),a(l,{title:t.$t("workplace.todayUser"),value:c(o).today_user,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1})),[[_,["admin"]]]),C((r(),m(s,{class:"panel-col",span:{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6},style:{"border-right":"none","border-left":"1px solid rgb(var(--gray-2))"}},{default:e(()=>[a(d,null,{default:e(()=>[a(n,{size:54,class:"col-avatar"},{default:e(()=>[qe]),_:1}),a(l,{title:t.$t("workplace.model"),value:c(o).model,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1})),[[_,["admin"]]]),C((r(),m(s,{class:"panel-col",span:{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6},style:{"border-right":"none","border-left":"1px solid rgb(var(--gray-2))"}},{default:e(()=>[a(d,null,{default:e(()=>[a(n,{size:54,class:"col-avatar"},{default:e(()=>[Ue]),_:1}),a(l,{title:t.$t("workplace.modelKey"),value:c(o).model_key,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1})),[[_,["admin"]]]),a(s,{span:24},{default:e(()=>[a(x,{class:"panel-border"})]),_:1})]),_:1})}}});const Pe=A(Ve,[["__scopeId","data-v-c9658c6a"]]);function se(g){const o=ce(),i=q(()=>o.theme==="dark");return{chartOption:q(()=>g(i.value))}}const Ne=D({__name:"data-chart",setup(g){const o=y=>y.map(f=>`<div class="content-panel">
        <p>
          <span style="background-color: ${f.color}" class="tooltip-item-icon"></span>
          <span>${f.seriesName}</span>
        </p>
        <span class="tooltip-value">
        ${f.value.toLocaleString()}
        </span>
      </div>`).join("");function i(y){return{type:"text",bottom:"28",...y,style:{text:"",textAlign:"center",fill:"#4E5969",fontSize:12}}}const t=localStorage.getItem("userRole"),{loading:h,setLoading:n}=H(!0),l=E(15),d=E([]),s=E([]),x=E([]),k=E([]),_=E([]),S=E([i({left:"3%"}),i({right:8})]),{chartOption:B}=se(y=>({grid:{left:"3%",right:"8",top:"10",bottom:"50"},legend:{bottom:-3,icon:"circle",textStyle:{color:"#4E5969"}},xAxis:{type:"category",offset:2,data:d.value,boundaryGap:!1,axisLabel:{color:"#4E5969",formatter(f,b){return b===0||b===d.value.length-1?"":`${f}`}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,interval:f=>f===0?!1:f!==d.value.length-1,lineStyle:{color:y?"#3F3F3F":"#E5E8EF"}},axisPointer:{show:!0,lineStyle:{color:"#23ADFF",width:2}}},yAxis:{type:"value",axisLabel:{formatter(f,b){return b===0?f:f>=1e9?`${f/1e9}b`:f>=1e4?`${f/1e4}w`:f>=1e3?`${f/1e3}k`:`${f}`}},axisLine:{show:!1},splitLine:{lineStyle:{type:"dashed",color:y?"#3F3F3F":"#E5E8EF"}}},tooltip:{show:!0,trigger:"axis",formatter(f){const[b]=f;return`<div>
            <p class="tooltip-title">${b.axisValueLabel}</p>
            ${o(f)}
          </div>`},className:"echarts-tooltip-diy"},graphic:{elements:S.value},series:[{name:"\u8C03\u7528\u6570",data:s.value,type:"line",smooth:!0,showSymbol:!1,color:y?"#3D72F6":"#00B2FF",symbol:"circle",symbolSize:10,emphasis:{focus:"series",itemStyle:{borderWidth:2,borderColor:"#E0E3FF"}}},{name:"\u4EE4\u724C\u6570",data:x.value,type:"line",smooth:!0,showSymbol:!1,color:y?"#A079DC":"#246EFF",symbol:"circle",symbolSize:10,emphasis:{focus:"series",itemStyle:{borderWidth:2,borderColor:"#E2F2FF"}}},{name:t==="admin"?"\u7528\u6237\u6570":"\u5E94\u7528\u6570",data:t==="admin"?k.value:_.value,type:"line",smooth:!0,showSymbol:!1,color:"#A079DC",symbol:"circle",symbolSize:10,emphasis:{focus:"series",itemStyle:{borderWidth:2,borderColor:"#E2F2FF"}}}]})),R=async y=>{n(!0);try{d.value=[],s.value=[],x.value=[],k.value=[],_.value=[];const{data:f}=await ke(y);f.items.forEach((b,z)=>{d.value.push(b.date),s.value.unshift(b.call),x.value.unshift(b.tokens),k.value.unshift(b.user),_.value.unshift(b.app),z===0&&(S.value[0].style.text=b.date),z===f.items.length-1&&(S.value[1].style.text=b.date)})}catch{}finally{n(!1)}},$=y=>{R(y)};return R(15),(y,f)=>{const b=N,z=O,w=oe("Chart"),ne=I,re=G;return r(),m(re,{loading:c(h),style:{width:"100%"}},{default:e(()=>[a(ne,{class:"general-card","header-style":{padding:"20px 20px 8px 20px"},"body-style":{padding:"20px"},title:y.$t("workplace.callData"),bordered:!1},{extra:e(()=>[a(z,{"model-value":l.value,"onUpdate:modelValue":f[0]||(f[0]=de=>l.value=de),type:"button",onChange:$},{default:e(()=>[a(b,{value:7},{default:e(()=>[p(u(y.$t("workplace.dateRange7")),1)]),_:1}),a(b,{value:15},{default:e(()=>[p(u(y.$t("workplace.dateRange15")),1)]),_:1}),a(b,{value:30},{default:e(()=>[p(u(y.$t("workplace.dateRange30")),1)]),_:1})]),_:1},8,["model-value","onChange"])]),default:e(()=>[a(w,{height:"380px",option:c(B)},null,8,["option"])]),_:1},8,["title"])]),_:1},8,["loading"])}}}),Oe=D({__name:"data-top5",setup(g){const o=localStorage.getItem("userRole"),{loading:i,setLoading:t}=H(),h=E(15);let n=15,l="user";o==="user"&&(l="app");const d=E(),s=async()=>{try{t(!0);const{data:_}=await Fe({days:n,data_type:l});d.value=_.items}catch{}finally{t(!1)}},x=_=>{l=_,s()},k=_=>{n=_,s()};return s(),(_,S)=>{const B=N,R=O,$=me,y=ge,f=P,b=I,z=G;return r(),m(z,{loading:c(i),style:{width:"100%"}},{default:e(()=>[a(b,{class:"general-card","header-style":{padding:"20px 20px 8px 20px"},"body-style":{padding:"17px 20px 21px 20px"},bordered:!1},{title:e(()=>[p(u(_.$t("workplace.dataTop5")),1)]),extra:e(()=>[a(R,{"model-value":h.value,"onUpdate:modelValue":S[0]||(S[0]=w=>h.value=w),type:"button",onChange:k},{default:e(()=>[a(B,{value:7},{default:e(()=>[p(u(_.$t("workplace.dateRange7")),1)]),_:1}),a(B,{value:15},{default:e(()=>[p(u(_.$t("workplace.dateRange15")),1)]),_:1}),a(B,{value:30},{default:e(()=>[p(u(_.$t("workplace.dateRange30")),1)]),_:1})]),_:1},8,["model-value","onChange"])]),default:e(()=>[a(f,{direction:"vertical",size:10,fill:""},{default:e(()=>[a(R,{"model-value":c(l),"onUpdate:modelValue":S[1]||(S[1]=w=>_e(l)?l.value=w:l=w),type:"button",onChange:x},{default:e(()=>[c(o)==="admin"?(r(),m(B,{key:0,value:"user"},{default:e(()=>[p(u(_.$t("workplace.dataTop5.user")),1)]),_:1})):L("",!0),c(o)==="user"?(r(),m(B,{key:1,value:"app"},{default:e(()=>[p(u(_.$t("workplace.dataTop5.app")),1)]),_:1})):L("",!0),a(B,{value:"model"},{default:e(()=>[p(u(_.$t("workplace.dataTop5.model")),1)]),_:1})]),_:1},8,["model-value","onChange"]),a(y,{data:d.value,pagination:!1,bordered:!1,scroll:{x:"100%",y:"270px"}},{columns:e(()=>[a($,{title:"\u6392\u540D","data-index":"key",width:60},{cell:e(({rowIndex:w})=>[p(u(w+1),1)]),_:1}),c(l)==="user"&&c(o)==="admin"?(r(),m($,{key:0,title:"\u7528\u6237ID","data-index":"user_id"})):L("",!0),c(l)==="app"&&c(o)==="user"?(r(),m($,{key:1,title:"\u5E94\u7528ID","data-index":"app_id"})):L("",!0),c(l)==="model"?(r(),m($,{key:2,title:"\u6A21\u578B","data-index":"model",width:180})):L("",!0),a($,{title:"\u8C03\u7528\u6570","data-index":"call"},{cell:e(({record:w})=>[p(u(w.call.toLocaleString()),1)]),_:1}),c(l)==="user"||c(l)==="app"?(r(),m($,{key:3,title:"\u6A21\u578B\u6570","data-index":"models"},{cell:e(({record:w})=>[p(u(w.models.toLocaleString()),1)]),_:1})):L("",!0),c(l)==="model"&&c(o)==="admin"?(r(),m($,{key:4,title:"\u7528\u6237\u6570","data-index":"user"},{cell:e(({record:w})=>[p(u(w.user.toLocaleString()),1)]),_:1})):L("",!0),c(l)==="model"&&c(o)==="user"?(r(),m($,{key:5,title:"\u5E94\u7528\u6570","data-index":"app"},{cell:e(({record:w})=>[p(u(w.app.toLocaleString()),1)]),_:1})):L("",!0),a($,{title:"\u4EE4\u724C\u6570","data-index":"tokens"},{cell:e(({record:w})=>[p(u(w.tokens.toLocaleString()),1)]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})]),_:1},8,["loading"])}}});const Ge=A(Oe,[["__scopeId","data-v-df0dd3fc"]]),We=D({__name:"model-percent",setup(g){const{loading:o,setLoading:i}=H(!0),t=E(15),h=E({models:[],items:[]}),{chartOption:n}=se(s=>({legend:{left:"center",data:h.value.models,bottom:-5,icon:"circle",itemStyle:{borderWidth:0},textStyle:{color:"#4E5969"}},tooltip:{show:!0,trigger:"item"},series:[{type:"pie",radius:"65%",label:{formatter:"{d}%",fontSize:14,color:s?"rgba(255, 255, 255, 0.7)":"#4E5969"},itemStyle:{borderWidth:1,borderColor:"#D9F6FF"},data:h.value.items}]})),l=async s=>{i(!0);try{const{data:x}=await Ee(s);h.value=x}catch{}finally{i(!1)}},d=s=>{l(s)};return l(15),(s,x)=>{const k=N,_=O,S=oe("Chart"),B=I,R=G;return r(),m(R,{loading:c(o),style:{width:"100%"}},{default:e(()=>[a(B,{class:"general-card","header-style":{padding:"20px 20px 8px 20px"},"body-style":{padding:"20px"},bordered:!1},{title:e(()=>[p(u(s.$t("workplace.modelPercent")),1)]),extra:e(()=>[a(_,{"model-value":t.value,"onUpdate:modelValue":x[0]||(x[0]=$=>t.value=$),type:"button",onChange:d},{default:e(()=>[a(k,{value:7},{default:e(()=>[p(u(s.$t("workplace.dateRange7")),1)]),_:1}),a(k,{value:15},{default:e(()=>[p(u(s.$t("workplace.dateRange15")),1)]),_:1}),a(k,{value:30},{default:e(()=>[p(u(s.$t("workplace.dateRange30")),1)]),_:1})]),_:1},8,["model-value","onChange"])]),default:e(()=>[a(S,{height:"306px",option:c(n)},null,8,["option"])]),_:1})]),_:1},8,["loading"])}}});const Ke=A(We,[["__scopeId","data-v-d89eb393"]]),je={class:"icon"},He=D({__name:"quick-operation",setup(g){const o=[{text:"workplace.appManagement",icon:"icon-apps",router:"AppList",permission:["user"]},{text:"workplace.modelManagement",icon:"icon-common",router:"ModelList",permission:["admin"]},{text:"workplace.keyManagement",icon:"icon-safe",router:"KeyAppList",permission:["user"]},{text:"workplace.keyManagement",icon:"icon-safe",router:"KeyModelList",permission:["admin"]},{text:"workplace.agentManagement",icon:"icon-bug",router:"ModelAgentList",permission:["admin"]},{text:"workplace.userManagement",icon:"icon-user",router:"UserList",permission:["admin"]},{text:"workplace.chatManagement",icon:"icon-wechat",router:"ChatList",permission:["admin"]}];return(i,t)=>{const h=j,n=ve,l=U,d=le,s=I,x=V("permission");return r(),m(s,{class:"general-card",title:i.$t("workplace.quick.operation"),"header-style":{padding:"20px 20px 0 20px"},"body-style":{padding:"24px 20px 0 20px"},bordered:!1},{extra:e(()=>[a(h,null,{default:e(()=>[p(u(i.$t("workplace.quickOperation.setup")),1)]),_:1})]),default:e(()=>[a(d,{gutter:8},{default:e(()=>[(r(),M(W,null,K(o,k=>C(a(l,{key:k.text,span:8,class:"wrapper",onClick:_=>i.$router.push({name:k.router})},{default:e(()=>[v("div",je,[(r(),m(fe(k.icon)))]),a(n,{class:"text"},{default:e(()=>[p(u(i.$t(k.text)),1)]),_:2},1024)]),_:2},1032,["onClick"]),[[x,k.permission]])),64))]),_:1})]),_:1},8,["title"])}}}),Je={class:"header"},Qe=["src"],Ze=D({__name:"user-info",setup(g){const o=J();return(i,t)=>{const h=ue,n=Y,l=Q,d=P,s=I;return r(),m(s,{class:"general-card","header-style":{padding:"20px 20px 0 20px"},"body-style":{padding:"20px"},bordered:!1},{default:e(()=>[v("div",Je,[a(d,{size:12,direction:"vertical",align:"center",onClick:t[0]||(t[0]=x=>i.$router.push({name:"Center"}))},{default:e(()=>[a(n,{size:64},{"trigger-icon":e(()=>[a(h)]),default:e(()=>[v("img",{src:c(o).avatar||"https://www.fastapi.ai/logo.png"},null,8,Qe)]),_:1}),a(l,{heading:6,style:{margin:"0"}},{default:e(()=>[p(u(c(o).name),1)]),_:1})]),_:1})])]),_:1})}}});const Xe=A(Ze,[["__scopeId","data-v-20271a0e"]]),Ye=D({__name:"expense",setup(g){const o=X({});return(async()=>{try{const{data:t}=await Ce();o.quota=t.quota}catch{}})(),(t,h)=>{const n=ee,l=I;return r(),m(l,{class:"general-card",title:t.$t("workplace.expense"),"header-style":{padding:"20px 20px 0 20px"},"body-style":{padding:"20px"},bordered:!1},{default:e(()=>[v("div",null,[v("div",null,[a(n,{title:t.$t("workplace.current.quota"),value:c(o).quota,"show-group-separator":""},null,8,["title","value"])])])]),_:1},8,["title"])}}});const ea=A(Ye,[["__scopeId","data-v-78363d36"]]);const aa=["src"],ta=D({__name:"author",setup(g){const o=["https://www.fastapi.ai/Author.png","https://www.fastapi.ai/AuthorQQ.png"];return(i,t)=>{const h=he,n=ye,l=I;return r(),m(l,{class:"general-card",title:i.$t("workplace.author"),"header-style":{padding:"20px 20px 0 20px"},"body-style":{padding:"20px"},bordered:!1},{default:e(()=>[a(n,{"indicator-type":"slider","show-arrow":"hover","auto-play":"",style:{height:"252px"}},{default:e(()=>[(r(),M(W,null,K(o,(d,s)=>a(h,{key:s},{default:e(()=>[v("div",null,[v("img",{class:"author",src:d},null,8,aa)])]),_:2},1024)),64))]),_:1})]),_:1},8,["title"])}}});const oa=A(ta,[["__scopeId","data-v-b5343284"]]),la={class:"item-content"},sa=D({__name:"announcement",setup(g){const o=[{type:"orangered",label:"\u6D3B\u52A8",content:"\u5185\u5BB9\u6700\u65B0\u4F18\u60E0\u6D3B\u52A8"},{type:"cyan",label:"\u6D88\u606F",content:"\u65B0\u589E\u5185\u5BB9\u5C1A\u672A\u901A\u8FC7\u5BA1\u6838\uFF0C\u8BE6\u60C5\u8BF7\u70B9\u51FB\u67E5\u770B\u3002"},{type:"blue",label:"\u901A\u77E5",content:"\u5F53\u524D\u4EA7\u54C1\u8BD5\u7528\u671F\u5373\u5C06\u7ED3\u675F\uFF0C\u5982\u9700\u7EED\u8D39\u8BF7\u70B9\u51FB\u67E5\u770B\u3002"},{type:"blue",label:"\u901A\u77E5",content:"1\u6708\u65B0\u7CFB\u7EDF\u5347\u7EA7\u8BA1\u5212\u901A\u77E5"},{type:"cyan",label:"\u6D88\u606F",content:"\u65B0\u589E\u5185\u5BB9\u5DF2\u7ECF\u901A\u8FC7\u5BA1\u6838\uFF0C\u8BE6\u60C5\u8BF7\u70B9\u51FB\u67E5\u770B\u3002"}];return(i,t)=>{const h=j,n=be,l=I;return r(),m(l,{class:"general-card",title:i.$t("workplace.announcement"),"header-style":{padding:"20px 20px 0 20px"},"body-style":{padding:"15px 20px 13px 20px"},bordered:!1},{extra:e(()=>[a(h,null,{default:e(()=>[p(u(i.$t("workplace.viewMore")),1)]),_:1})]),default:e(()=>[v("div",null,[(r(),M(W,null,K(o,(d,s)=>v("div",{key:s,class:"item"},[a(n,{color:d.type,size:"small"},{default:e(()=>[p(u(d.label),1)]),_:2},1032,["color"]),v("span",la,u(d.content),1)])),64))])]),_:1},8,["title"])}}});const na=A(sa,[["__scopeId","data-v-75b8d4ff"]]);const ra={};function da(g,o){const i=j,t=U,h=le,n=I;return r(),m(n,{class:"general-card",title:g.$t("workplace.docs"),"header-style":{padding:"20px 20px 0 20px"},"body-style":{padding:"0 20px"},style:{height:"178px"},bordered:!1},{extra:e(()=>[a(i,null,{default:e(()=>[p(u(g.$t("workplace.viewMore")),1)]),_:1})]),default:e(()=>[a(h,null,{default:e(()=>[a(t,{span:12},{default:e(()=>[a(i,null,{default:e(()=>[p(u(g.$t("workplace.docs.productOverview")),1)]),_:1})]),_:1}),a(t,{span:12},{default:e(()=>[a(i,null,{default:e(()=>[p(u(g.$t("workplace.docs.userGuide")),1)]),_:1})]),_:1}),a(t,{span:12},{default:e(()=>[a(i,null,{default:e(()=>[p(u(g.$t("workplace.docs.workflow")),1)]),_:1})]),_:1}),a(t,{span:12},{default:e(()=>[a(i,null,{default:e(()=>[p(u(g.$t("workplace.docs.interfaceDocs")),1)]),_:1})]),_:1}),a(t,{span:12},{default:e(()=>[a(i,null,{default:e(()=>[p(u(g.$t("workplace.docs.interfaceDocs")),1)]),_:1})]),_:1}),a(t,{span:12},{default:e(()=>[a(i,null,{default:e(()=>[p(u(g.$t("workplace.docs.interfaceDocs")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])}const ca=A(ra,[["render",da],["__scopeId","data-v-5fa699d0"]]),ua={class:"container"},ia={class:"left-side"},pa={class:"panel"},_a={class:"right-side"},ma={class:"panel moduler-wrap"},ga={name:"Dashboard"},fa=D({...ga,setup(g){return(o,i)=>{const t=ae,h=te,n=V("permission");return r(),M("div",ua,[v("div",ia,[v("div",pa,[a(we),a(Pe),a(Ne)]),a(h,{cols:24,"col-gap":16,"row-gap":16,style:{"margin-top":"16px"}},{default:e(()=>[a(t,{span:{xs:24,sm:24,md:24,lg:12,xl:12,xxl:12}},{default:e(()=>[a(Ge)]),_:1}),a(t,{span:{xs:24,sm:24,md:24,lg:12,xl:12,xxl:12}},{default:e(()=>[a(Ke)]),_:1})]),_:1})]),v("div",_a,[a(h,{cols:24,"row-gap":16},{default:e(()=>[a(t,{span:24},{default:e(()=>[v("div",ma,[a(Xe)])]),_:1}),C((r(),m(t,{class:"panel moduler-wrap",span:24},{default:e(()=>[a(ea)]),_:1})),[[n,["user"]]]),a(t,{class:"panel moduler-wrap",span:24},{default:e(()=>[a(He)]),_:1}),a(t,{class:"panel",span:24},{default:e(()=>[a(oa)]),_:1}),C((r(),m(t,{class:"panel",span:24},{default:e(()=>[a(na)]),_:1})),[[n,["admin"]]]),a(t,{class:"panel",span:24},{default:e(()=>[a(ca)]),_:1})]),_:1})])])}}});const Ra=A(fa,[["__scopeId","data-v-6231c526"]]);export{Ra as default};
