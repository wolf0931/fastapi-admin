import{u as ie,E as Ne,p as Pe,y as Re,i as qe,z as He,_ as Te}from"./index.9a222177.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               */import{c as H,S as Me}from"./sortable.esm.734c0c44.js";/* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css              */import{d as ce,e as c,B as r,C as h,aH as e,aG as t,u as s,aD as D,aM as d,aL as b,bK as Oe,bL as je,c0 as Ge,bM as Je,bX as Ke,bI as re,r as ae,c as le,w as We,bP as Xe,bu as ne,F as w,aJ as oe,aI as se,D as Qe,n as Ye,aK as Ze,aF as et,aS as tt,b2 as at,bC as lt,bD as nt,bE as ot,b5 as st,bF as it,ab as ct,aU as rt,bi as dt,bj as ut,bl as _t,bm as mt,b4 as pt,bG as ft,aV as bt,a_ as vt,bJ as gt,g as ht}from"./arco.f6ea4e94.js";import{u as de}from"./loading.b2615842.js";import{q as T}from"./common.4fed7ae4.js";import{q as yt,a as kt,s as wt}from"./finance.af9a1872.js";/* empty css                *//* empty css                */import"./chart.6e5bd655.js";import"./vue.945ef37b.js";import"./base.87fcf6e2.js";const xt={style:{margin:"10px 0 0 10px"}},Ct={key:1},$t={key:1},Bt={key:1},Dt={key:1},It={name:"BillDetail"},St=ce({...It,props:{id:{type:String,default:""}},setup(M){const E=M,{t:v}=ie(),{loading:$,setLoading:x}=de(!0),o=c({});return(async(m={id:E.id})=>{x(!0);try{const{data:p}=await yt(m);o.value=p}catch{}finally{x(!1)}})(),(m,p)=>{const g=Oe,y=je,C=Ge,I=Je,S=Ke,k=re;return r(),h("div",xt,[e(I,{column:2,bordered:""},{default:t(()=>[e(C,{label:s(v)("bill.detail.label.stat_date")},{default:t(()=>[s($)?(r(),D(y,{key:0,animation:!0},{default:t(()=>[e(g,{rows:1})]),_:1})):(r(),h("span",Ct,d(o.value.stat_date||"-"),1))]),_:1},8,["label"]),e(C,{label:s(v)("bill.detail.label.user_id")},{default:t(()=>[s($)?(r(),D(y,{key:0,animation:!0},{default:t(()=>[e(g,{rows:1})]),_:1})):(r(),h("span",$t,d(o.value.user_id||"-"),1))]),_:1},8,["label"]),e(C,{label:s(v)("bill.detail.label.total")},{default:t(()=>[s($)?(r(),D(y,{key:0,animation:!0},{default:t(()=>[e(g,{rows:1})]),_:1})):(r(),h("span",Bt,d(o.value.total||"-"),1))]),_:1},8,["label"]),e(C,{label:s(v)("bill.detail.label.tokens")},{default:t(()=>[s($)?(r(),D(y,{key:0,animation:!0},{default:t(()=>[e(g,{rows:1})]),_:1})):(r(),h("span",Dt,d(o.value.tokens>0?`$${s(T)(o.value.tokens)}`:"$0.00"),1))]),_:1},8,["label"])]),_:1}),e(k,{style:{"margin-top":"15px"},data:o.value.model_stats,pagination:!1,bordered:!1},{columns:t(()=>[e(S,{title:s(v)("bill.detail.label.model"),"data-index":"model",align:"center"},{cell:t(({record:f})=>[b(d(f.model||"-"),1)]),_:1},8,["title"]),e(S,{title:s(v)("bill.detail.label.total"),"data-index":"total",align:"center"},{cell:t(({record:f})=>[b(d(f.total||"-"),1)]),_:1},8,["title"]),e(S,{title:s(v)("bill.detail.label.tokens"),"data-index":"tokens",align:"center"},{cell:t(({record:f})=>[b(d(f.tokens>0?`$${s(T)(f.tokens)}`:"$0.00"),1)]),_:1},8,["title"])]),_:1},8,["data"])])}}}),Ft={class:"container"},zt={class:"action-icon"},Vt={class:"action-icon"},Et={id:"tableSetting"},Lt={style:{"margin-right":"4px",cursor:"move"}},Ut={class:"title"},At={name:"BillList"},Nt=ce({...At,setup(M){const E=ae({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),v=()=>({user_id:c(),stat_date:[]}),{loading:$,setLoading:x}=de(!0),{t:o}=ie(),L=c([]),m=c(v()),p=c([]),g=c([]),y=c("medium"),C=c(),I=c([]),S=c(!0),k={current:1,pageSize:20,showTotal:!0,showPageSize:!0,pageSizeOptions:[20,50,100,500,1e3]},f=ae({...k}),ue=le(()=>[{name:o("size.mini"),value:"mini"},{name:o("size.small"),value:"small"},{name:o("size.medium"),value:"medium"},{name:o("size.large"),value:"large"}]),_e=le(()=>[{title:o("finance.columns.user_id"),dataIndex:"user_id",slotName:"user_id",align:"center"},{title:o("finance.columns.total"),dataIndex:"total",slotName:"total",align:"center"},{title:o("finance.columns.models"),dataIndex:"models",slotName:"models",align:"center"},{title:o("finance.columns.tokens"),dataIndex:"tokens",slotName:"tokens",align:"center"},{title:o("finance.columns.stat_date"),dataIndex:"stat_date",slotName:"stat_date",align:"center"},{title:o("common.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:75}]),z=async(a={...k})=>{x(!0);try{const{data:l}=await kt(a);L.value=l.items,f.current=a.current,f.pageSize=a.pageSize,f.total=l.paging.total}catch{}finally{x(!1)}},O=()=>{z({...k,...m.value})},me=a=>{z({...k,...m.value,current:a})},pe=a=>{k.pageSize=a,z({...k,...m.value})};z();const fe=(a,l)=>{y.value=a},be=(a,l,u)=>{a?p.value.splice(u,0,l):p.value=g.value.filter(_=>_.dataIndex!==l.dataIndex)},j=(a,l,u,_=!1)=>{const i=_?H(a):a;return l>-1&&u>-1&&i.splice(l,1,i.splice(u,1,i[l]).pop()),i},ve=a=>{a&&Ye(()=>{const l=document.getElementById("tableSetting");new Me(l,{onEnd(u){const{oldIndex:_,newIndex:i}=u;j(p.value,_,i),j(g.value,_,i)}})})};We(()=>_e.value,a=>{p.value=H(a),p.value.forEach((l,u)=>{l.checked=!0}),g.value=H(p.value)},{deep:!0,immediate:!0});const{proxy:G}=ht(),ge=a=>{I.value=a,S.value=!a.length},J=c(),F=c(!1),V=c({}),he=async a=>{var u;if(await((u=J.value)==null?void 0:u.validate())){F.value=!0,a(!1);return}a(),K({stat_date:V.value.stat_date})},ye=()=>{F.value=!1},K=a=>{if(I.value.length===0&&!a.stat_date){F.value=!0;return}x(!0),a.ids=I.value,wt(a).then(l=>{x(!1),G.$message.success("\u5BFC\u51FA\u6210\u529F"),C.value.selectAll(!1);const u=new Blob([l.data],{type:"application/vnd.ms-excel"}),_=window.URL.createObjectURL(u),i=document.createElement("a");i.href=_,i.setAttribute("download","\u8D26\u5355\u660E\u7EC6.xlsx"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(_)}).catch(l=>{G.$message.error("\u5BFC\u51FA\u5931\u8D25, \u8BF7\u8054\u7CFB\u7BA1\u7406\u5458",l)})},U=c(!1),W=c(),ke=a=>{U.value=!0,W.value=a},we=()=>{U.value=!1};return(a,l)=>{const u=Ne,_=Ze,i=et,xe=tt,A=at,B=lt,X=nt,N=ot,Q=st,Y=it,Ce=ct,P=rt,Z=dt,$e=Pe,R=ut,Be=Re,De=_t,Ie=mt,Se=qe,Fe=He,ze=pt,Ve=ft,Ee=re,Le=bt,Ue=vt,Ae=gt,ee=Xe("permission");return r(),h("div",Ft,[e(i,{class:"container-breadcrumb"},{default:t(()=>[e(_,null,{default:t(()=>[e(u)]),_:1}),e(_,null,{default:t(()=>[b(d(a.$t("menu.finance")),1)]),_:1}),e(_,null,{default:t(()=>[b(d(a.$t("menu.bill.list")),1)]),_:1})]),_:1}),e(Ae,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:t(()=>[ne((r(),D(N,null,{default:t(()=>[e(B,{flex:1},{default:t(()=>[e(Q,{model:m.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:t(()=>[e(N,{gutter:16},{default:t(()=>[e(B,{span:8},{default:t(()=>[e(A,{field:"name",label:a.$t("finance.form.user_id")},{default:t(()=>[e(xe,{modelValue:m.value.user_id,"onUpdate:modelValue":l[0]||(l[0]=n=>m.value.user_id=n),placeholder:a.$t("finance.form.user_id.placeholder"),min:1,"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(B,{span:8},{default:t(()=>[e(A,{field:"stat_date",label:a.$t("finance.form.stat_date")},{default:t(()=>[e(X,{modelValue:m.value.stat_date,"onUpdate:modelValue":l[1]||(l[1]=n=>m.value.stat_date=n),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(Y,{style:{height:"42px"},direction:"vertical"}),e(B,{flex:"86px",style:{"text-align":"right"}},{default:t(()=>[e(Z,{direction:"vertical",size:18},{default:t(()=>[e(P,{type:"primary",onClick:O},{icon:t(()=>[e(Ce)]),default:t(()=>[b(" "+d(a.$t("finance.form.search")),1)]),_:1})]),_:1})]),_:1})]),_:1})),[[ee,["admin"]]]),ne(e(Y,{style:{"margin-top":"0","margin-bottom":"16px"}},null,512),[[ee,["admin"]]]),e(N,{style:{"margin-bottom":"16px"}},{default:t(()=>[e(B,{span:12},{default:t(()=>[e(Z,null,{default:t(()=>[e(P,{type:"primary",onClick:l[2]||(l[2]=n=>K({}))},{default:t(()=>[b(" \u5BFC\u51FA ")]),_:1})]),_:1})]),_:1}),e(B,{span:12,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:t(()=>[e(R,{content:a.$t("actions.refresh")},{default:t(()=>[w("div",{class:"action-icon",onClick:O},[e($e,{size:"18"})])]),_:1},8,["content"]),e(Ie,{onSelect:fe},{content:t(()=>[(r(!0),h(oe,null,se(s(ue),n=>(r(),D(De,{key:n.value,value:n.value,class:Qe({active:n.value===y.value})},{default:t(()=>[w("span",null,d(n.name),1)]),_:2},1032,["value","class"]))),128))]),default:t(()=>[e(R,{content:a.$t("actions.density")},{default:t(()=>[w("div",zt,[e(Be,{size:"18"})])]),_:1},8,["content"])]),_:1}),e(R,{content:a.$t("actions.column_setting")},{default:t(()=>[e(Ve,{trigger:"click",position:"bl",onPopupVisibleChange:ve},{content:t(()=>[w("div",Et,[(r(!0),h(oe,null,se(g.value,(n,te)=>(r(),h("div",{key:n.dataIndex,class:"setting"},[w("div",Lt,[e(Fe)]),w("div",null,[e(ze,{modelValue:n.checked,"onUpdate:modelValue":q=>n.checked=q,onChange:q=>be(q,n,te)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),w("div",Ut,d(n.title==="#"?"\u5E8F\u5217\u53F7":n.title),1)]))),128))])]),default:t(()=>[w("div",Vt,[e(Se,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),e(Ee,{ref_key:"tableRef",ref:C,"row-key":"id",loading:s($),pagination:f,columns:p.value,data:L.value,bordered:!1,size:y.value,"row-selection":E,onPageChange:me,onPageSizeChange:pe,onSelectionChange:ge},{total:t(({record:n})=>[b(d(n.total.toLocaleString()),1)]),tokens:t(({record:n})=>[b(d(n.tokens>0?`$${s(T)(n.tokens)}`:"$0.00"),1)]),operations:t(({record:n})=>[e(P,{type:"text",size:"small",onClick:te=>ke(n.id)},{default:t(()=>[b(d(a.$t("operations.view")),1)]),_:2},1032,["onClick"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),e(Le,{title:a.$t("menu.bill.detail"),"unmount-on-close":"","render-to-body":"",width:700,footer:!1,visible:U.value,onCancel:we},{default:t(()=>[e(St,{id:W.value},null,8,["id"])]),_:1},8,["title","visible"]),e(Ue,{visible:F.value,"onUpdate:visible":l[4]||(l[4]=n=>F.value=n),title:a.$t("finance.form.title.bill_export"),onCancel:ye,onBeforeOk:he},{default:t(()=>[e(Q,{ref_key:"billExportForm",ref:J,model:V.value},{default:t(()=>[e(A,{field:"stat_date",label:a.$t("finance.form.stat_date"),rules:[{required:!0,message:a.$t("finance.error.stat_date.required")}]},{default:t(()=>[e(X,{modelValue:V.value.stat_date,"onUpdate:modelValue":l[3]||(l[3]=n=>V.value.stat_date=n),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"])]),_:1})])}}});const ua=Te(Nt,[["__scopeId","data-v-b75a691e"]]);export{ua as default};
