import{b as t}from"./index.8811ab93.js";import{q as n}from"./base.87fcf6e2.js";function i(e){return t.post("/api/v1/model/agent/create",e)}function s(e){return t.post("/api/v1/model/agent/page",e)}function u(){return t.get("/api/v1/model/agent/list")}function g(e){return t.post("/api/v1/model/agent/delete",e)}function l(e){return t.get("/api/v1/model/agent/detail",{params:e,paramsSerializer:a=>n.stringify(a)})}function d(e){return t.post("/api/v1/model/agent/update",e)}function p(e){return t.post("/api/v1/model/agent/change/status",e)}export{p as a,i as b,l as c,d,u as e,s as q,g as s};