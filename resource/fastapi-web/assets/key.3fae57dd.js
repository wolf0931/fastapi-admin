import{x as t,y as r}from"./index.55aa5e71.js";function n(e){return t.post("/api/v1/key/create",e)}function s(e){return t.post("/api/v1/key/page",e)}function u(e){return t.post("/api/v1/key/delete",e)}function p(e){return t.get("/api/v1/key/detail",{params:e,paramsSerializer:a=>r.stringify(a)})}function y(e){return t.post("/api/v1/key/update",e)}export{n as a,p as b,y as c,s as q,u as s};