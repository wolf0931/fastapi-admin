import{u as Me,j as Oe,o as Qe,x as Re,I as Ae,y as He,_ as je}from"./index.ad938b79.js";/* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css              *//* empty css                *//* empty css               *//* empty css              */import{c as M,S as Ge}from"./sortable.esm.e1dbc7e6.js";/* empty css               *//* empty css                *//* empty css               *//* empty css               */import{d as Je,r as oe,e as p,c as O,w as Ke,B as D,C as z,aH as t,aG as l,aL as v,aM as m,u as s,F as w,aJ as Q,aI as R,aD as se,D as We,bR as u,n as Xe,aW as ue,aK as Ye,aF as Ze,aS as ea,b2 as aa,bC as ta,b1 as la,bD as oa,bB as sa,bE as ua,b5 as na,bF as ra,ab as ia,aU as da,bi as ca,bj as pa,bl as ma,bm as _a,b4 as fa,bG as va,bS as ba,aT as ha,bH as ga,bI as ya,a_ as qa,bA as wa,bJ as $a,g as Ca}from"./arco.eaecec6c.js";import{u as Da}from"./loading.4b5db008.js";import{s as ka,q as Va,a as xa,b as Ua,c as Sa,d as za}from"./admin_user.f1c0ce17.js";import{q as Fa}from"./model.2565ec92.js";import"./chart.54f38119.js";import"./vue.4ed7ee05.js";import"./base.87fcf6e2.js";const Ia={class:"container"},Ba={class:"action-icon"},Na={class:"action-icon"},Ta={id:"tableSetting"},Pa={style:{"margin-right":"4px",cursor:"move"}},La={class:"title"},Ea={name:"UserList"},Ma=Je({...Ea,setup(Oa){const{proxy:B}=Ca(),ne=oe({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),A=p([]);(async()=>{try{const{data:e}=await Fa();A.value=e.items}catch{}})();const re=async e=>{r(!0);try{await ka(e),B.$message.success("\u5220\u9664\u6210\u529F"),x()}catch{}finally{r(!1)}},H=()=>({user_id:p(),name:"",email:"",quota_expires_at:[],status:p(),updated_at:[]}),{loading:ie,setLoading:r}=Da(!0),{t:i}=Me(),_=p([]),n=p(H()),$=p([]),F=p([]),N=p("medium"),k={current:1,pageSize:10,showTotal:!0,showPageSize:!0},I=oe({...k}),de=O(()=>[{name:i("searchTable.size.mini"),value:"mini"},{name:i("searchTable.size.small"),value:"small"},{name:i("searchTable.size.medium"),value:"medium"},{name:i("searchTable.size.large"),value:"large"}]),ce=O(()=>[{title:i("user.columns.userId"),dataIndex:"user_id",slotName:"user_id",align:"center",width:80},{title:i("user.columns.name"),dataIndex:"name",slotName:"name",align:"center",ellipsis:!0,tooltip:!0},{title:i("user.columns.email"),dataIndex:"email",slotName:"email",align:"center",ellipsis:!0,tooltip:!0},{title:i("user.columns.quota"),dataIndex:"quota",slotName:"quota",align:"center",ellipsis:!0,tooltip:!0},{title:i("user.columns.used_quota"),dataIndex:"used_quota",slotName:"used_quota",align:"center",ellipsis:!0,tooltip:!0},{title:i("user.columns.quota_expires_at"),dataIndex:"quota_expires_at",slotName:"quota_expires_at",align:"center",width:160},{title:i("user.columns.status"),dataIndex:"status",slotName:"status",align:"center"},{title:i("user.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:318}]),pe=O(()=>[{label:i("user.dict.status.1"),value:1},{label:i("user.dict.status.2"),value:2}]),V=async(e={...k})=>{r(!0);try{const{data:o}=await Va(e);_.value=o.items,I.current=e.current,I.pageSize=e.pageSize,I.total=o.paging.total}catch{}finally{r(!1)}},x=()=>{V({...k,...n.value})},me=e=>{V({...k,...n.value,current:e})},_e=e=>{k.pageSize=e,V({...k,...n.value})};V();const fe=()=>{n.value=H()},ve=async e=>{r(!0);try{await xa(e),B.$message.success("\u64CD\u4F5C\u6210\u529F"),x()}catch{}finally{r(!1)}},be=async e=>{r(!0);try{await Ua(e),B.$message.success("\u64CD\u4F5C\u6210\u529F"),x()}catch{}finally{r(!1)}},he=(e,o)=>{N.value=e},ge=(e,o,c)=>{e?$.value.splice(c,0,o):$.value=F.value.filter(b=>b.dataIndex!==o.dataIndex)},j=(e,o,c,b=!1)=>{const g=b?M(e):e;return o>-1&&c>-1&&g.splice(o,1,g.splice(c,1,g[o]).pop()),g},ye=e=>{e&&Xe(()=>{const o=document.getElementById("tableSetting");new Ge(o,{onEnd(c){const{oldIndex:b,newIndex:g}=c;j($.value,b,g),j(F.value,b,g)}})})};Ke(()=>ce.value,e=>{$.value=M(e),$.value.forEach((o,c)=>{o.checked=!0}),F.value=M($.value)},{deep:!0,immediate:!0});const U=p(!1),S=p(!1),G=p(),d=p({}),J=p(),C=p({}),qe=async e=>{r(!0);try{d.value.quota=p(),d.value.user_id=e.user_id,d.value.quota_expires_at=e.quota_expires_at,U.value=!0}catch{}finally{r(!1)}},we=async e=>{r(!0);try{C.value.user_id=e.user_id,e.models&&e.models.length>0&&e.models[0]!=="undefined"?C.value.models=e.models:C.value.models=[],S.value=!0}catch{}finally{r(!1)}},$e=async e=>{var c;if(await((c=G.value)==null?void 0:c.validate())){U.value=!0,e(!1);return}r(!0);try{await Sa(d.value),ue.success(i("user.success.grantQuota")),e(),V()}catch{}finally{r(!1)}},Ce=()=>{U.value=!1},De=async e=>{var c;if(await((c=J.value)==null?void 0:c.validate())){S.value=!0,e(!1);return}r(!0);try{await za(C.value),ue.success(i("user.success.models")),e(),V()}catch{}finally{r(!1)}},ke=()=>{S.value=!1};return(e,o)=>{const c=Oe,b=Ye,g=Ze,K=ea,y=aa,h=ta,W=la,X=oa,Y=sa,T=ua,P=na,Z=ra,Ve=ia,q=da,ee=Qe,ae=ca,L=pa,xe=Re,Ue=ma,Se=_a,ze=Ae,Fe=He,Ie=fa,Be=va,te=ba,Ne=ha,Te=ga,Pe=ya,le=qa,Le=wa,Ee=$a;return D(),z("div",Ia,[t(g,{class:"container-breadcrumb"},{default:l(()=>[t(b,null,{default:l(()=>[t(c)]),_:1}),t(b,null,{default:l(()=>[v(m(e.$t("menu.user")),1)]),_:1}),t(b,null,{default:l(()=>[v(m(e.$t("menu.user.list")),1)]),_:1})]),_:1}),t(Ee,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:l(()=>[t(T,null,{default:l(()=>[t(h,{flex:1},{default:l(()=>[t(P,{model:n.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:l(()=>[t(T,{gutter:16},{default:l(()=>[t(h,{span:8},{default:l(()=>[t(y,{field:"user_id",label:e.$t("user.form.userId")},{default:l(()=>[t(K,{modelValue:n.value.user_id,"onUpdate:modelValue":o[0]||(o[0]=a=>n.value.user_id=a),placeholder:e.$t("user.form.userId.placeholder"),min:1,"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(h,{span:8},{default:l(()=>[t(y,{field:"name",label:e.$t("user.form.name")},{default:l(()=>[t(W,{modelValue:n.value.name,"onUpdate:modelValue":o[1]||(o[1]=a=>n.value.name=a),placeholder:e.$t("user.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(h,{span:8},{default:l(()=>[t(y,{field:"email",label:e.$t("user.form.email")},{default:l(()=>[t(W,{modelValue:n.value.email,"onUpdate:modelValue":o[2]||(o[2]=a=>n.value.email=a),placeholder:e.$t("user.form.email.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(h,{span:8},{default:l(()=>[t(y,{field:"quota_expires_at",label:e.$t("user.form.quota_expires_at")},{default:l(()=>[t(X,{modelValue:n.value.quota_expires_at,"onUpdate:modelValue":o[3]||(o[3]=a=>n.value.quota_expires_at=a),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),t(h,{span:8},{default:l(()=>[t(y,{field:"status",label:e.$t("user.form.status")},{default:l(()=>[t(Y,{modelValue:n.value.status,"onUpdate:modelValue":o[4]||(o[4]=a=>n.value.status=a),options:s(pe),placeholder:e.$t("user.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),t(h,{span:8},{default:l(()=>[t(y,{field:"updated_at",label:e.$t("user.form.updated_at")},{default:l(()=>[t(X,{modelValue:n.value.updated_at,"onUpdate:modelValue":o[5]||(o[5]=a=>n.value.updated_at=a),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(Z,{style:{height:"84px"},direction:"vertical"}),t(h,{flex:"86px",style:{"text-align":"right"}},{default:l(()=>[t(ae,{direction:"vertical",size:18},{default:l(()=>[t(q,{type:"primary",onClick:x},{icon:l(()=>[t(Ve)]),default:l(()=>[v(" "+m(e.$t("user.form.search")),1)]),_:1}),t(q,{onClick:fe},{icon:l(()=>[t(ee)]),default:l(()=>[v(" "+m(e.$t("user.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(Z,{style:{"margin-top":"0","margin-bottom":"16px"}}),t(T,{style:{"margin-bottom":"16px"}},{default:l(()=>[t(h,{span:12},{default:l(()=>[t(ae,null,{default:l(()=>[t(q,{type:"primary",onClick:o[6]||(o[6]=a=>e.$router.push({name:"UserCreate"}))},{default:l(()=>[v(m(e.$t("user.operation.create")),1)]),_:1})]),_:1})]),_:1}),t(h,{span:12,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:l(()=>[t(L,{content:e.$t("searchTable.actions.refresh")},{default:l(()=>[w("div",{class:"action-icon",onClick:x},[t(ee,{size:"18"})])]),_:1},8,["content"]),t(Se,{onSelect:he},{content:l(()=>[(D(!0),z(Q,null,R(s(de),a=>(D(),se(Ue,{key:a.value,value:a.value,class:We({active:a.value===N.value})},{default:l(()=>[w("span",null,m(a.name),1)]),_:2},1032,["value","class"]))),128))]),default:l(()=>[t(L,{content:e.$t("searchTable.actions.density")},{default:l(()=>[w("div",Ba,[t(xe,{size:"18"})])]),_:1},8,["content"])]),_:1}),t(L,{content:e.$t("searchTable.actions.columnSetting")},{default:l(()=>[t(Be,{trigger:"click",position:"bl",onPopupVisibleChange:ye},{content:l(()=>[w("div",Ta,[(D(!0),z(Q,null,R(F.value,(a,f)=>(D(),z("div",{key:a.dataIndex,class:"setting"},[w("div",Pa,[t(Fe)]),w("div",null,[t(Ie,{modelValue:a.checked,"onUpdate:modelValue":E=>a.checked=E,onChange:E=>ge(E,a,f)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),w("div",La,m(a.title==="#"?"\u5E8F\u5217\u53F7":a.title),1)]))),128))])]),default:l(()=>[w("div",Na,[t(ze,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),t(Pe,{"row-key":"id",loading:s(ie),pagination:I,columns:$.value,data:_.value,bordered:!1,size:N.value,"row-selection":ne,onPageChange:me,onPageSizeChange:_e},{quota:l(({record:a})=>[v(" $"+m(a.quota!==0?parseFloat((a.quota/5e5).toFixed(6)):"0.00"),1)]),used_quota:l(({record:a})=>[v(" $"+m(a.used_quota>0?parseFloat((a.used_quota/5e5).toFixed(6)):"0.00"),1)]),quota_expires_at:l(({rowIndex:a})=>[t(te,{modelValue:_.value[a].quota_expires_at,"onUpdate:modelValue":f=>_.value[a].quota_expires_at=f,placeholder:e.$t("user.columns.placeholder.quota_expires_at"),"time-picker-props":{defaultValue:"23:59:59"},"disabled-date":f=>s(u)(f).isBefore(s(u)()),"show-time":"",shortcuts:[{label:"1",value:()=>s(u)(new Date(_.value[a].quota_expires_at||new Date)).add(1,"day")},{label:"7",value:()=>s(u)(new Date(_.value[a].quota_expires_at||new Date)).add(7,"day")},{label:"15",value:()=>s(u)(new Date(_.value[a].quota_expires_at||new Date)).add(15,"day")},{label:"30",value:()=>s(u)(new Date(_.value[a].quota_expires_at||new Date)).add(30,"day")},{label:"90",value:()=>s(u)(new Date(_.value[a].quota_expires_at||new Date)).add(90,"day")},{label:"180",value:()=>s(u)(new Date(_.value[a].quota_expires_at||new Date)).add(180,"day")},{label:"365",value:()=>s(u)(new Date(_.value[a].quota_expires_at||new Date)).add(365,"day")}],onChange:f=>ve({id:`${_.value[a].id}`,quota_expires_at:`${_.value[a].quota_expires_at}`})},{default:l(()=>[t(q,{style:{width:"150px"}},{default:l(()=>[v(m(_.value[a].quota_expires_at||e.$t("user.columns.placeholder.quota_expires_at")),1)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","disabled-date","shortcuts","onChange"])]),status:l(({record:a})=>[t(Ne,{modelValue:a.status,"onUpdate:modelValue":f=>a.status=f,"checked-value":1,"unchecked-value":2,onChange:f=>be({id:`${a.id}`,status:Number(`${a.status}`)})},null,8,["modelValue","onUpdate:modelValue","onChange"])]),operations:l(({record:a})=>[t(q,{type:"text",size:"small",onClick:f=>qe({user_id:`${a.user_id}`,quota_expires_at:`${a.quota_expires_at}`})},{default:l(()=>[v(m(e.$t("user.columns.operations.grantQuota")),1)]),_:2},1032,["onClick"]),t(q,{type:"text",size:"small",onClick:f=>we({user_id:`${a.user_id}`,models:`${a.models}`.split(",")})},{default:l(()=>[v(m(e.$t("user.columns.operations.models")),1)]),_:2},1032,["onClick"]),t(q,{type:"text",size:"small",onClick:f=>e.$router.push({name:"UserDetail",query:{id:`${a.id}`}})},{default:l(()=>[v(m(e.$t("user.columns.operations.view")),1)]),_:2},1032,["onClick"]),t(q,{type:"text",size:"small",onClick:f=>e.$router.push({name:"UserUpdate",query:{id:`${a.id}`}})},{default:l(()=>[v(m(e.$t("user.columns.operations.update")),1)]),_:2},1032,["onClick"]),t(Te,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417?",onOk:f=>re({id:`${a.id}`})},{default:l(()=>[t(q,{type:"text",size:"small"},{default:l(()=>[v(m(e.$t("user.columns.operations.delete")),1)]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),t(le,{visible:U.value,"onUpdate:visible":o[9]||(o[9]=a=>U.value=a),title:e.$t("user.form.title.grantQuota"),"ok-text":e.$t("user.button.save"),onCancel:Ce,onBeforeOk:$e},{default:l(()=>[t(P,{ref_key:"formRef",ref:G,model:d.value},{default:l(()=>[t(y,{field:"quota",label:e.$t("user.label.quota"),rules:[{required:!0,message:e.$t("user.error.quota.required")}]},{default:l(()=>[t(K,{modelValue:d.value.quota,"onUpdate:modelValue":o[7]||(o[7]=a=>d.value.quota=a),placeholder:e.$t("user.placeholder.grant_quota"),precision:0,min:-9999999999999,max:9999999999999},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),t(y,{field:"quota_expires_at",label:e.$t("user.label.quota_expires_at")},{default:l(()=>[t(te,{modelValue:d.value.quota_expires_at,"onUpdate:modelValue":o[8]||(o[8]=a=>d.value.quota_expires_at=a),placeholder:e.$t("user.placeholder.quota_expires_at"),"time-picker-props":{defaultValue:"23:59:59"},"disabled-date":a=>s(u)(a).isBefore(s(u)()),style:{width:"100%"},"show-time":"",shortcuts:[{label:"1",value:()=>s(u)(new Date(d.value.quota_expires_at||new Date)).add(1,"day")},{label:"7",value:()=>s(u)(new Date(d.value.quota_expires_at||new Date)).add(7,"day")},{label:"15",value:()=>s(u)(new Date(d.value.quota_expires_at||new Date)).add(15,"day")},{label:"30",value:()=>s(u)(new Date(d.value.quota_expires_at||new Date)).add(30,"day")},{label:"90",value:()=>s(u)(new Date(d.value.quota_expires_at||new Date)).add(90,"day")},{label:"180",value:()=>s(u)(new Date(d.value.quota_expires_at||new Date)).add(180,"day")},{label:"365",value:()=>s(u)(new Date(d.value.quota_expires_at||new Date)).add(365,"day")}]},null,8,["modelValue","placeholder","disabled-date","shortcuts"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["visible","title","ok-text"]),t(le,{visible:S.value,"onUpdate:visible":o[11]||(o[11]=a=>S.value=a),title:e.$t("user.form.title.models"),"ok-text":e.$t("user.button.save"),width:700,onCancel:ke,onBeforeOk:De},{default:l(()=>[t(P,{ref_key:"modelsFormRef",ref:J,model:C.value},{default:l(()=>[t(y,{field:"models",label:e.$t("user.label.models")},{default:l(()=>[t(Y,{modelValue:C.value.models,"onUpdate:modelValue":o[10]||(o[10]=a=>C.value.models=a),placeholder:e.$t("user.placeholder.models"),multiple:"","allow-search":"","allow-clear":""},{default:l(()=>[(D(!0),z(Q,null,R(A.value,a=>(D(),se(Le,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["visible","title","ok-text"])]),_:1})])}}});const _t=je(Ma,[["__scopeId","data-v-9a9e4bad"]]);export{_t as default};
