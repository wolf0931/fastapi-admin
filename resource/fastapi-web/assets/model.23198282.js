import{u as Ie,E as Ve,m as ze,v as Se,I as De,w as qe,_ as Ae}from"./index.2884bedb.js";import{u as Le}from"./loading.f132a353.js";/* empty css               *//* empty css              *//* empty css              *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css                */import{c as N,S as Te}from"./sortable.esm.1b2eaf52.js";/* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css              */import{d as Be,r as Q,e as _,c as S,w as Fe,B as c,C as y,aH as t,aG as l,aL as u,aM as s,u as D,aJ as q,aI as A,aD as P,F as g,D as Ne,n as Pe,aK as Ke,aF as Me,bD as Ue,b3 as Ee,bB as Oe,b2 as xe,bC as Re,bE as je,bF as He,b6 as Ge,bG as Je,ab as Qe,aV as We,bj as Xe,a5 as Ye,bk as Ze,bm as et,bn as tt,b5 as at,bH as lt,bI as ot,bJ as nt,bK as st}from"./arco.25045eac.js";import{h as ut}from"./vue.8f4cc2df.js";import{s as it,a as ct,b as rt}from"./key.d91976fe.js";import{q as dt}from"./model.be0d19d1.js";import{e as mt}from"./agent.63eec52f.js";import"./chart.871a9cd2.js";const pt={class:"container"},_t={class:"action-icon"},ft={class:"action-icon"},yt={id:"tableSetting"},gt={style:{"margin-right":"4px",cursor:"move"}},vt={class:"title"},kt={key:0,class:"circle red"},bt={key:1,class:"circle"},ht={name:"KeyList"},$t=Be({...ht,setup(wt){const K=ut(),W=Q({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),M=_([]);(async()=>{try{const{data:e}=await dt();M.value=e.items}catch{}})();const U=_([]);(async()=>{try{const{data:e}=await mt();U.value=e.items}catch{}})();const X=async e=>{b(!0);try{await it(e),V()}catch{}finally{b(!1)}},E=()=>({type:2,corp:"",key:"",models:[],model_agents:[],quota:_(),status:_(),created_at:[]}),{loading:Y,setLoading:b}=Le(!0),{t:i}=Ie(),O=_([]),n=_(E()),v=_([]),w=_([]),L=_("medium"),h={current:1,pageSize:10,showTotal:!0,showPageSize:!0},C=Q({...h}),Z=S(()=>[{name:i("searchTable.size.mini"),value:"mini"},{name:i("searchTable.size.small"),value:"small"},{name:i("searchTable.size.medium"),value:"medium"},{name:i("searchTable.size.large"),value:"large"}]),ee=S(()=>[{title:i("key.columns.corp"),dataIndex:"corp",slotName:"corp",align:"center",width:100},{title:i("key.columns.key"),dataIndex:"key",slotName:"key",align:"center",ellipsis:!0,tooltip:!0},{title:i("key.columns.models"),dataIndex:"model_names",slotName:"model_names",align:"center",ellipsis:!0,tooltip:!0},{title:i("key.columns.quota"),dataIndex:"quota",slotName:"quota",align:"center",width:80},{title:i("key.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:80},{title:i("key.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:170},{title:i("key.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:220}]),te=S(()=>[{label:i("key.dict.corp.OpenAI"),value:"OpenAI"}]),ae=S(()=>[{label:i("key.dict.status.1"),value:1},{label:i("key.dict.status.2"),value:2}]),x=new Array(0);K.query.agent_id&&(x[0]=K.query.agent_id);const I=async(e={...h,type:2,model_agents:x})=>{b(!0);try{const{data:o}=await ct(e);O.value=o.items,C.current=e.current,C.pageSize=e.pageSize,C.total=o.paging.total}catch{}finally{b(!1)}},V=()=>{I({...h,...n.value})},le=e=>{I({...h,...n.value,current:e})},oe=e=>{h.pageSize=e,I({...h,...n.value})};I();const ne=()=>{n.value=E()},se=async e=>{b(!0);try{e.status=e.status===1?2:1,await rt(e),V()}catch{}finally{b(!1)}},ue=(e,o)=>{L.value=e},ie=(e,o,m)=>{e?v.value.splice(m,0,o):v.value=w.value.filter(r=>r.dataIndex!==o.dataIndex)},R=(e,o,m,r=!1)=>{const p=r?N(e):e;return o>-1&&m>-1&&p.splice(o,1,p.splice(m,1,p[o]).pop()),p},ce=e=>{e&&Pe(()=>{const o=document.getElementById("tableSetting");new Te(o,{onEnd(m){const{oldIndex:r,newIndex:p}=m;R(v.value,r,p),R(w.value,r,p)}})})};return Fe(()=>ee.value,e=>{v.value=N(e),v.value.forEach((o,m)=>{o.checked=!0}),w.value=N(v.value)},{deep:!0,immediate:!0}),(e,o)=>{const m=Ve,r=Ke,p=Me,z=Ue,$=Ee,d=Oe,re=xe,j=Re,de=je,T=He,me=Ge,H=Je,pe=Qe,k=We,G=ze,J=Xe,_e=Ye,B=Ze,fe=Se,ye=et,ge=tt,ve=De,ke=qe,be=at,he=lt,$e=ot,we=nt,Ce=st;return c(),y("div",pt,[t(p,{class:"container-breadcrumb"},{default:l(()=>[t(r,null,{default:l(()=>[t(m)]),_:1}),t(r,null,{default:l(()=>[u(s(e.$t("menu.key")),1)]),_:1}),t(r,null,{default:l(()=>[u(s(e.$t("menu.key.model.list")),1)]),_:1})]),_:1}),t(Ce,{class:"general-card",title:e.$t("menu.key.model.list"),bordered:!1},{default:l(()=>[t(T,null,{default:l(()=>[t(d,{flex:1},{default:l(()=>[t(me,{model:n.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:l(()=>[t(T,{gutter:16},{default:l(()=>[t(d,{span:8},{default:l(()=>[t($,{field:"corp",label:e.$t("key.form.corp")},{default:l(()=>[t(z,{modelValue:n.value.corp,"onUpdate:modelValue":o[0]||(o[0]=a=>n.value.corp=a),options:D(te),placeholder:e.$t("key.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),t(d,{span:8},{default:l(()=>[t($,{field:"key",label:e.$t("key.form.key")},{default:l(()=>[t(re,{modelValue:n.value.key,"onUpdate:modelValue":o[1]||(o[1]=a=>n.value.key=a),placeholder:e.$t("key.form.key.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(d,{span:8},{default:l(()=>[t($,{field:"models",label:e.$t("key.form.models")},{default:l(()=>[t(z,{modelValue:n.value.models,"onUpdate:modelValue":o[2]||(o[2]=a=>n.value.models=a),placeholder:e.$t("key.form.selectDefault"),"max-tag-count":3,multiple:"","allow-search":"","allow-clear":""},{default:l(()=>[(c(!0),y(q,null,A(M.value,a=>(c(),P(j,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(d,{span:8},{default:l(()=>[t($,{field:"model_agents",label:e.$t("key.form.modelAgents")},{default:l(()=>[t(z,{modelValue:n.value.model_agents,"onUpdate:modelValue":o[3]||(o[3]=a=>n.value.model_agents=a),placeholder:e.$t("key.form.selectDefault"),"max-tag-count":3,multiple:"","allow-search":"","allow-clear":""},{default:l(()=>[(c(!0),y(q,null,A(U.value,a=>(c(),P(j,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(d,{span:8},{default:l(()=>[t($,{field:"status",label:e.$t("key.form.status")},{default:l(()=>[t(z,{modelValue:n.value.status,"onUpdate:modelValue":o[4]||(o[4]=a=>n.value.status=a),options:D(ae),placeholder:e.$t("key.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),t(d,{span:8},{default:l(()=>[t($,{field:"created_at",label:e.$t("key.form.created_at")},{default:l(()=>[t(de,{modelValue:n.value.created_at,"onUpdate:modelValue":o[5]||(o[5]=a=>n.value.created_at=a),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(H,{style:{height:"84px"},direction:"vertical"}),t(d,{flex:"86px",style:{"text-align":"right"}},{default:l(()=>[t(J,{direction:"vertical",size:18},{default:l(()=>[t(k,{type:"primary",onClick:V},{icon:l(()=>[t(pe)]),default:l(()=>[u(" "+s(e.$t("key.form.search")),1)]),_:1}),t(k,{onClick:ne},{icon:l(()=>[t(G)]),default:l(()=>[u(" "+s(e.$t("key.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(H,{style:{"margin-top":"0"}}),t(T,{style:{"margin-bottom":"16px"}},{default:l(()=>[t(d,{span:12},{default:l(()=>[t(J,null,{default:l(()=>[t(k,{type:"primary",onClick:o[6]||(o[6]=a=>e.$router.push({name:"KeyCreate"}))},{icon:l(()=>[t(_e)]),default:l(()=>[u(" "+s(e.$t("key.operation.create")),1)]),_:1})]),_:1})]),_:1}),t(d,{span:12,style:{display:"flex","align-items":"center","justify-content":"end"}},{default:l(()=>[t(B,{content:e.$t("searchTable.actions.refresh")},{default:l(()=>[g("div",{class:"action-icon",onClick:V},[t(G,{size:"18"})])]),_:1},8,["content"]),t(ge,{onSelect:ue},{content:l(()=>[(c(!0),y(q,null,A(D(Z),a=>(c(),P(ye,{key:a.value,value:a.value,class:Ne({active:a.value===L.value})},{default:l(()=>[g("span",null,s(a.name),1)]),_:2},1032,["value","class"]))),128))]),default:l(()=>[t(B,{content:e.$t("searchTable.actions.density")},{default:l(()=>[g("div",_t,[t(fe,{size:"18"})])]),_:1},8,["content"])]),_:1}),t(B,{content:e.$t("searchTable.actions.columnSetting")},{default:l(()=>[t(he,{trigger:"click",position:"bl",onPopupVisibleChange:ce},{content:l(()=>[g("div",yt,[(c(!0),y(q,null,A(w.value,(a,f)=>(c(),y("div",{key:a.dataIndex,class:"setting"},[g("div",gt,[t(ke)]),g("div",null,[t(be,{modelValue:a.checked,"onUpdate:modelValue":F=>a.checked=F,onChange:F=>ie(F,a,f)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),g("div",vt,s(a.title==="#"?"\u5E8F\u5217\u53F7":a.title),1)]))),128))])]),default:l(()=>[g("div",ft,[t(ve,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),t(we,{"row-key":"id",loading:D(Y),pagination:C,columns:v.value,data:O.value,bordered:!1,size:L.value,"row-selection":W,onPageChange:le,onPageSizeChange:oe},{type:l(({record:a})=>[u(s(e.$t(`key.dict.type.${a.type}`)),1)]),corp:l(({record:a})=>[u(s(e.$t(`key.dict.corp.${a.corp}`)),1)]),model_names:l(({record:a})=>{var f;return[u(s(((f=a==null?void 0:a.model_names)==null?void 0:f.join(","))||"-"),1)]}),dataFormat:l(({record:a})=>[u(s(e.$t(`key.dict.data_format.${a.data_format}`)),1)]),quota:l(({record:a})=>[u(s((a==null?void 0:a.quota)||"-"),1)]),status:l(({record:a})=>[a.status===2?(c(),y("span",kt)):(c(),y("span",bt)),u(" "+s(e.$t(`key.dict.status.${a.status}`)),1)]),operations:l(({record:a})=>[t(k,{type:"text",size:"small",onClick:f=>e.$router.push({name:"KeyDetail",query:{id:`${a.id}`}})},{default:l(()=>[u(s(e.$t("key.columns.operations.view")),1)]),_:2},1032,["onClick"]),t(k,{type:"text",size:"small",onClick:f=>e.$router.push({name:"KeyUpdate",query:{id:`${a.id}`}})},{default:l(()=>[u(s(e.$t("key.columns.operations.update")),1)]),_:2},1032,["onClick"]),t(k,{type:"text",size:"small",onClick:f=>se({id:`${a.id}`,status:Number(`${a.status}`)})},{default:l(()=>[u(s(e.$t(`key.columns.operations.status.${a.status}`)),1)]),_:2},1032,["onClick"]),t($e,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417?",onOk:f=>X({id:`${a.id}`})},{default:l(()=>[t(k,{type:"text",size:"small"},{default:l(()=>[u(s(e.$t("key.columns.operations.delete")),1)]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"])]),_:1},8,["title"])])}}});const Qt=Ae($t,[["__scopeId","data-v-b478a204"]]);export{Qt as default};
