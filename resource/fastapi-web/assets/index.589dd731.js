import{a as q,_ as k,x as L,e as R,z as Q}from"./index.b0965d26.js";/* empty css               */import{d as w,c as D,B as d,aD as _,aG as a,aH as e,aL as y,aM as v,u as g,bi as A,bB as E,bG as T,r as I,bS as B,bv as b,bl as M,bT as F,bj as G,bU as O,bV as V,b9 as K,ba as N,F as p,e as S,a_ as X,b8 as C,bL as $,bO as Y,C as P,aJ as Z,aI as ee,bs as ae,bW as te,bF as U}from"./arco.1898f1ea.js";/* empty css                *//* empty css               *//* empty css               */import{u as se}from"./loading.c1e55f23.js";/* empty css              */import{L as z}from"./chart.0ff1b134.js";import"./vue.88a8ef0b.js";const oe=w({__name:"banner",setup(l){const s=q(),r=D(()=>({name:s.name}));return(t,u)=>{const o=A,c=E,m=T;return d(),_(c,{class:"banner"},{default:a(()=>[e(c,{span:8},{default:a(()=>[e(o,{heading:5,style:{"margin-top":"0"}},{default:a(()=>[y(v(t.$t("workplace.welcome"))+" "+v(g(r).name),1)]),_:1})]),_:1}),e(m,{class:"panel-border"})]),_:1})}}});const ne=k(oe,[["__scopeId","data-v-5803762b"]]);function le(){return L.get("/api/v1/dashboard/call/data")}function re(){return L.get("/api/v1/dashboard/base/data")}function W(){return L.get("/api/v1/dashboard/expense")}const x=l=>(K("data-v-18290ebf"),l=l(),N(),l),ce=x(()=>p("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image"},null,-1)),ie=x(()=>p("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/288b89194e657603ff40db39e8072640.svg~tplv-49unhts6dw-image.image"},null,-1)),de=x(()=>p("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/288b89194e657603ff40db39e8072640.svg~tplv-49unhts6dw-image.image"},null,-1)),pe=x(()=>p("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image"},null,-1)),_e=x(()=>p("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image"},null,-1)),ue=x(()=>p("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image"},null,-1)),me=x(()=>p("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/fdc66b07224cdf18843c6076c2587eb5.svg~tplv-49unhts6dw-image.image"},null,-1)),fe=x(()=>p("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image"},null,-1)),ge=w({__name:"data-panel",setup(l){const s=I({});return(async()=>{try{const{data:t}=await re();s.app=t.app,s.today_app=t.today_app,s.model=t.model,s.app_key=t.app_key,s.model_key=t.model_key,s.user=t.user,s.today_user=t.today_user,s.call=t.call}catch{}})(),(t,u)=>{const o=M,c=F,m=G,f=O,n=T,i=V,h=B("permission");return d(),_(i,{cols:24,"row-gap":16,class:"panel"},{default:a(()=>[e(f,{class:"panel-col",span:{xs:12,sm:12,md:12,lg:12,xl:12,xxl:6}},{default:a(()=>[e(m,null,{default:a(()=>[e(o,{size:54,class:"col-avatar"},{default:a(()=>[ce]),_:1}),e(c,{title:t.$t("workplace.call"),value:g(s).call,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1}),e(f,{class:"panel-col",span:{xs:12,sm:12,md:12,lg:12,xl:12,xxl:6}},{default:a(()=>[e(m,null,{default:a(()=>[e(o,{size:54,class:"col-avatar"},{default:a(()=>[ie]),_:1}),e(c,{title:t.$t("workplace.app"),value:g(s).app,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1}),b((d(),_(f,{class:"panel-col",span:{xs:12,sm:12,md:12,lg:12,xl:12,xxl:6}},{default:a(()=>[e(m,null,{default:a(()=>[e(o,{size:54,class:"col-avatar"},{default:a(()=>[de]),_:1}),e(c,{title:t.$t("workplace.todayApp"),value:g(s).today_app,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1})),[[h,["admin"]]]),e(f,{class:"panel-col",span:{xs:12,sm:12,md:12,lg:12,xl:12,xxl:6},style:{"border-right":"none"}},{default:a(()=>[e(m,null,{default:a(()=>[e(o,{size:54,class:"col-avatar"},{default:a(()=>[pe]),_:1}),e(c,{title:t.$t("workplace.appKey"),value:g(s).app_key,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1}),b((d(),_(f,{span:24},{default:a(()=>[e(n,{class:"panel-border"})]),_:1})),[[h,["admin"]]]),b((d(),_(f,{class:"panel-col",span:{xs:12,sm:12,md:12,lg:12,xl:12,xxl:6}},{default:a(()=>[e(m,null,{default:a(()=>[e(o,{size:54,class:"col-avatar"},{default:a(()=>[_e]),_:1}),e(c,{title:t.$t("workplace.user"),value:g(s).user,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1})),[[h,["admin"]]]),b((d(),_(f,{class:"panel-col",span:{xs:12,sm:12,md:12,lg:12,xl:12,xxl:6},style:{"border-right":"none"}},{default:a(()=>[e(m,null,{default:a(()=>[e(o,{size:54,class:"col-avatar"},{default:a(()=>[ue]),_:1}),e(c,{title:t.$t("workplace.todayUser"),value:g(s).today_user,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1})),[[h,["admin"]]]),e(f,{class:"panel-col",span:{xs:12,sm:12,md:12,lg:12,xl:12,xxl:6},style:{"border-right":"none","border-left":"1px solid rgb(var(--gray-2))"}},{default:a(()=>[e(m,null,{default:a(()=>[e(o,{size:54,class:"col-avatar"},{default:a(()=>[me]),_:1}),e(c,{title:t.$t("workplace.model"),value:g(s).model,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1}),b((d(),_(f,{class:"panel-col",span:{xs:12,sm:12,md:12,lg:12,xl:12,xxl:6},style:{"border-right":"none","border-left":"1px solid rgb(var(--gray-2))"}},{default:a(()=>[e(m,null,{default:a(()=>[e(o,{size:54,class:"col-avatar"},{default:a(()=>[fe]),_:1}),e(c,{title:t.$t("workplace.modelKey"),value:g(s).model_key,"show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1})),[[h,["admin"]]]),e(f,{span:24},{default:a(()=>[e(n,{class:"panel-border"})]),_:1})]),_:1})}}});const he=k(ge,[["__scopeId","data-v-18290ebf"]]);function ve(l){const s=R(),r=D(()=>s.theme==="dark");return{chartOption:D(()=>l(r.value))}}const ye=w({__name:"data-chart",setup(l){function s(n){return{type:"text",bottom:"8",...n,style:{text:"",textAlign:"center",fill:"#4E5969",fontSize:12}}}const{loading:r,setLoading:t}=se(!0),u=S([]),o=S([]),c=S([s({left:"5%"}),s({right:0})]),{chartOption:m}=ve(()=>({grid:{left:"5%",right:"8",top:"10",bottom:"30"},xAxis:{type:"category",offset:2,data:u.value,boundaryGap:!1,axisLabel:{color:"#4E5969",formatter(n,i){return i===0||i===u.value.length-1?"":`${n}`}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,interval:n=>!(n===0||n===u.value.length-1),lineStyle:{color:"#E5E8EF"}},axisPointer:{show:!0,lineStyle:{color:"#23ADFF",width:2}}},yAxis:{type:"value",axisLine:{show:!1},axisLabel:{formatter(n,i){return i===0?n:n>=1e4?`${n/1e4}w`:n>=1e3?`${n/1e3}k`:`${n}`}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#E5E8EF"}}},tooltip:{trigger:"axis",formatter(n){const[i]=n;return`<div>
            <p class="tooltip-title">${i.axisValueLabel}</p>
            <div class="content-panel"><span>\u8C03\u7528\u6570</span><span class="tooltip-value">${i.value.toLocaleString()}</span></div>
          </div>`},className:"echarts-tooltip-diy"},graphic:{elements:c.value},series:[{data:o.value,type:"line",smooth:!0,symbolSize:12,emphasis:{focus:"series",itemStyle:{borderWidth:2}},lineStyle:{width:3,color:new z(0,0,1,0,[{offset:0,color:"rgba(30, 231, 255, 1)"},{offset:.5,color:"rgba(36, 154, 255, 1)"},{offset:1,color:"rgba(111, 66, 251, 1)"}])},showSymbol:!1,areaStyle:{opacity:.8,color:new z(0,0,0,1,[{offset:0,color:"rgba(17, 126, 255, 0.16)"},{offset:1,color:"rgba(17, 128, 255, 0)"}])}}]}));return(async()=>{t(!0);try{const{data:n}=await le();n.items.forEach((i,h)=>{u.value.push(i.date),o.value.push(i.count),h===0&&(c.value[0].style.text=i.date),h===n.items.length-1&&(c.value[1].style.text=i.date)})}catch{}finally{t(!1)}})(),(n,i)=>{const h=C,j=X("Chart"),H=$,J=Y;return d(),_(J,{loading:g(r),style:{width:"100%"}},{default:a(()=>[e(H,{class:"general-card","header-style":{paddingBottom:0},"body-style":{paddingTop:"20px"},title:n.$t("workplace.callData"),bordered:!1},{extra:a(()=>[e(h,null,{default:a(()=>[y(v(n.$t("workplace.viewMore")),1)]),_:1})]),default:a(()=>[e(j,{height:"406px",option:g(m)},null,8,["option"])]),_:1},8,["title"])]),_:1},8,["loading"])}}}),be={class:"icon"},we=w({__name:"quick-operation",setup(l){const s=[{text:"workplace.appManagement",icon:"icon-apps",router:"AppList",permission:["user"]},{text:"workplace.modelManagement",icon:"icon-common",router:"ModelList",permission:["admin"]},{text:"workplace.keyManagement",icon:"icon-safe",router:"KeyAppList",permission:["user"]},{text:"workplace.keyManagement",icon:"icon-safe",router:"KeyModelList",permission:["admin"]},{text:"workplace.advanced",icon:"icon-settings",permission:["user","admin"]}];return(r,t)=>{const u=C,o=te,c=E,m=U,f=$,n=B("permission");return d(),_(f,{class:"general-card",title:r.$t("workplace.quick.operation"),"header-style":{paddingBottom:"0"},"body-style":{padding:"24px 20px 0 20px"},bordered:!1},{extra:a(()=>[e(u,null,{default:a(()=>[y(v(r.$t("workplace.quickOperation.setup")),1)]),_:1})]),default:a(()=>[e(m,{gutter:8},{default:a(()=>[(d(),P(Z,null,ee(s,i=>b(e(c,{key:i.text,span:8,class:"wrapper",onClick:h=>r.$router.push({name:i.router})},{default:a(()=>[p("div",be,[(d(),_(ae(i.icon)))]),e(o,{class:"text"},{default:a(()=>[y(v(r.$t(i.text)),1)]),_:2},1024)]),_:2},1032,["onClick"]),[[n,i.permission]])),64))]),_:1})]),_:1},8,["title"])}}}),xe={class:"header"},ke=["src"],$e=w({__name:"user-info",setup(l){const s=q();return(r,t)=>{const u=Q,o=M,c=A,m=G,f=$;return d(),_(f,{class:"general-card","header-style":{paddingBottom:"0"},"body-style":{paddingTop:"26px"},bordered:!1},{default:a(()=>[p("div",xe,[e(m,{size:12,direction:"vertical",align:"center"},{default:a(()=>[e(o,{size:64},{"trigger-icon":a(()=>[e(u)]),default:a(()=>[p("img",{src:g(s).avatar||"https://fastapi.ai/logo.png"},null,8,ke)]),_:1}),e(c,{heading:6,style:{margin:"0"}},{default:a(()=>[y(v(g(s).name),1)]),_:1})]),_:1})])]),_:1})}}});const Se=k($e,[["__scopeId","data-v-172fe450"]]),De=w({__name:"expense",setup(l){const s=I({});return(async()=>{try{const{data:t}=await W();s.quota=t.quota}catch{}})(),(t,u)=>{const o=F,c=$;return d(),_(c,{class:"general-card",title:t.$t("workplace.expense"),"header-style":{paddingBottom:"0"},"body-style":{paddingTop:"26px"},bordered:!1},{default:a(()=>[p("div",null,[p("div",null,[e(o,{title:t.$t("workplace.current.quota"),value:g(s).quota,"show-group-separator":""},null,8,["title","value"])])])]),_:1},8,["title"])}}});const Le=k(De,[["__scopeId","data-v-d672d823"]]),Ee=l=>(K("data-v-b58aa47e"),l=l(),N(),l),Ie=Ee(()=>p("div",null,[p("img",{class:"author",src:"https://fastapi.ai/Author.png"})],-1)),Be=w({__name:"author",setup(l){const s=I({});return(async()=>{try{const{data:t}=await W();s.quota=t.quota}catch{}})(),(t,u)=>{const o=$;return d(),_(o,{class:"general-card",title:t.$t("workplace.author"),"header-style":{paddingBottom:"0"},"body-style":{paddingTop:"17px"},bordered:!1},{default:a(()=>[Ie]),_:1},8,["title"])}}});const Ce=k(Be,[["__scopeId","data-v-b58aa47e"]]);const ze={};function qe(l,s){const r=C,t=E,u=U,o=$;return d(),_(o,{class:"general-card",title:l.$t("workplace.docs"),"header-style":{paddingBottom:0},"body-style":{paddingTop:0},style:{height:"153px"},bordered:!1},{extra:a(()=>[e(r,null,{default:a(()=>[y(v(l.$t("workplace.viewMore")),1)]),_:1})]),default:a(()=>[e(u,null,{default:a(()=>[e(t,{span:12},{default:a(()=>[e(r,null,{default:a(()=>[y(v(l.$t("workplace.docs.productOverview")),1)]),_:1})]),_:1}),e(t,{span:12},{default:a(()=>[e(r,null,{default:a(()=>[y(v(l.$t("workplace.docs.userGuide")),1)]),_:1})]),_:1}),e(t,{span:12},{default:a(()=>[e(r,null,{default:a(()=>[y(v(l.$t("workplace.docs.workflow")),1)]),_:1})]),_:1}),e(t,{span:12},{default:a(()=>[e(r,null,{default:a(()=>[y(v(l.$t("workplace.docs.interfaceDocs")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])}const Ae=k(ze,[["render",qe],["__scopeId","data-v-b4704de9"]]),Te={class:"container"},Me={class:"left-side"},Fe={class:"panel"},Ge={class:"right-side"},Oe={class:"panel moduler-wrap"},Ve={name:"Dashboard"},Ke=w({...Ve,setup(l){return(s,r)=>{const t=O,u=V,o=B("permission");return d(),P("div",Te,[p("div",Me,[p("div",Fe,[e(ne),e(he),e(ye)])]),p("div",Ge,[e(u,{cols:24,"row-gap":16},{default:a(()=>[e(t,{span:24},{default:a(()=>[p("div",Oe,[e(Se)])]),_:1}),b((d(),_(t,{class:"panel moduler-wrap",span:24},{default:a(()=>[e(Le)]),_:1})),[[o,["user"]]]),b((d(),_(t,{class:"panel moduler-wrap",span:24},{default:a(()=>[e(we)]),_:1})),[[o,["admin"]]]),e(t,{class:"panel",span:24},{default:a(()=>[e(Ce)]),_:1}),b((d(),_(t,{class:"panel",span:24},{default:a(()=>[e(Ae)]),_:1})),[[o,["admin"]]])]),_:1})])])}}});const Ye=k(Ke,[["__scopeId","data-v-58e8e5dc"]]);export{Ye as default};