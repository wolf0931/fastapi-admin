import{b as r}from"./index.16caf63c.js";import{q as a}from"./base.87fcf6e2.js";function i(t){return r.post("/api/v1/corp/create",t)}function s(t){return r.post("/api/v1/corp/page",t)}function n(){return r.get("/api/v1/corp/list")}function u(t){return r.post("/api/v1/corp/delete",t)}function c(t){return r.get("/api/v1/corp/detail",{params:t,paramsSerializer:e=>a.stringify(e)})}function f(t){return r.post("/api/v1/corp/update",t)}function m(t){return r.post("/api/v1/corp/change/status",t)}function C(t){return r.post("/api/v1/corp/batch/operate",t)}export{s as a,m as b,C as c,i as d,c as e,f,n as q,u as s};