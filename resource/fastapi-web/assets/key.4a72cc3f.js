import{c as t,A as r}from"./index.e0d6ab41.js";function s(e){return t.post("/api/v1/key/create",e)}function n(e){return t.post("/api/v1/key/page",e)}function u(e){return t.post("/api/v1/key/delete",e)}function p(e){return t.get("/api/v1/key/detail",{params:e,paramsSerializer:a=>r.stringify(a)})}function o(e){return t.post("/api/v1/key/update",e)}function y(e){return t.post("/api/v1/key/change/status",e)}function c(e){return t.post("/api/v1/key/batch/operate",e)}export{y as a,c as b,p as c,s as d,o as e,n as q,u as s};