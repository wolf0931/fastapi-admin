import{u as q,_ as x,j as B}from"./index.ca71b56b.js";/* empty css                *//* empty css               */import{d as h,c as D,B as o,C as u,aH as t,aG as s,aJ as w,aI as L,u as k,aD as g,aM as v,bO as S,bP as U,bQ as C,bi as I,e as $,aL as y,aK as j,aF as z,bJ as F}from"./arco.eaecec6c.js";import{h as J}from"./vue.4ed7ee05.js";import{u as N}from"./loading.4b5db008.js";import{f as O}from"./admin_user.5d228bba.js";/* empty css                *//* empty css                */import"./chart.54f38119.js";import"./base.87fcf6e2.js";const P={class:"item-container"},R={key:1},V=h({__name:"profile-item",props:{type:{type:String,default:""},renderData:{type:Object,required:!0},loading:{type:Boolean,default:!1}},setup(d){const _=d,{t:a}=q(),p=D(()=>{var l;const{renderData:e}=_,c=[];return c.push({title:a("user.detail.title.baseInfo"),data:[{label:a("user.detail.label.userId"),value:e.user_id},{label:a("user.detail.label.account"),value:e.account},{label:a("user.detail.label.name"),value:e.name},{label:a("user.detail.label.email"),value:e.email},{label:a("user.detail.label.quota"),value:e.quota},{label:a("user.detail.label.used_quota"),value:e.used_quota},{label:a("user.detail.label.quota_expires_at"),value:e.quota_expires_at||"-"},{label:a("user.detail.label.models"),value:((l=e==null?void 0:e.model_names)==null?void 0:l.join(`
`))||"-"},{label:a("user.detail.label.remark"),value:(e==null?void 0:e.remark)||"-"},{label:a("user.detail.label.created_at"),value:e.created_at},{label:a("user.detail.label.updated_at"),value:e.updated_at}]}),c});return(e,c)=>{const l=S,n=U,m=C,r=I;return o(),u("div",P,[t(r,{size:16,direction:"vertical",fill:""},{default:s(()=>[(o(!0),u(w,null,L(k(p),(i,b)=>(o(),g(m,{key:b,"label-style":{textAlign:"right",width:"200px",paddingRight:"10px",color:"rgb(var(--gray-8))"},"value-style":{width:"400px"},title:i.title,data:i.data},{value:s(({value:f})=>[d.loading?(o(),g(n,{key:0,animation:!0},{default:s(()=>[t(l,{widths:["200px"],rows:1})]),_:1})):(o(),u("span",R,v(f),1))]),_:2},1032,["label-style","title","data"]))),128))]),_:1})])}}});const A=x(V,[["__scopeId","data-v-083408c4"]]),E={class:"container"},G={name:"UserDetail"},H=h({...G,setup(d){const{loading:_,setLoading:a}=N(!0),p=J(),e=$({});return(async(l={id:p.query.id})=>{a(!0);try{const{data:n}=await O(l);e.value=n}catch{}finally{a(!1)}})(),(l,n)=>{const m=B,r=j,i=z,b=F,f=I;return o(),u("div",E,[t(i,{class:"container-breadcrumb"},{default:s(()=>[t(r,null,{default:s(()=>[t(m)]),_:1}),t(r,null,{default:s(()=>[y(v(l.$t("menu.user")),1)]),_:1}),t(r,null,{default:s(()=>[y(v(l.$t("menu.user.detail")),1)]),_:1})]),_:1}),t(f,{direction:"vertical",size:16,fill:""},{default:s(()=>[t(b,{class:"general-card",bordered:!1},{default:s(()=>[t(A,{loading:k(_),"render-data":e.value},null,8,["loading","render-data"])]),_:1})]),_:1})])}}});const le=x(H,[["__scopeId","data-v-c56cc4fd"]]);export{le as default};
