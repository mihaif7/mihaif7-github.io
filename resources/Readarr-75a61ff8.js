import{s as l}from"./service-56521882.js";import{_ as h,G as d,r as m,o as s,c as f,w as g,a as p,b as i,t as o,e as n}from"./index-5de1cfc6.js";const a="/api/v1",_={name:"Readarr",mixins:[l],props:{item:Object},components:{Generic:d},data:()=>({activity:null,missing:null,warnings:null,errors:null,serverError:!1}),created:function(){this.fetchConfig()},methods:{fetchConfig:function(){const e=t=>{console.error(t),this.serverError=!0};this.fetch(`${a}/health?apikey=${this.item.apikey}`).then(t=>{this.warnings=t.filter(r=>r.type==="warning").length,this.errors=t.filter(r=>r.type==="errors").length}).catch(e),this.fetch(`${a}/queue?apikey=${this.item.apikey}`).then(t=>{this.activity=t.totalRecords}).catch(e),this.fetch(`${a}/wanted/missing?apikey=${this.item.apikey}`).then(t=>{this.missing=t.totalRecords}).catch(e)}}},y={class:"notifs"},u={key:0,class:"notif activity",title:"Activity"},k={key:1,class:"notif missing",title:"Missing"},v={key:2,class:"notif warnings",title:"Warning"},w={key:3,class:"notif errors",title:"Error"},$={key:4,class:"notif errors",title:"Connection error to Readarr API, check url and apikey in config.yml"};function C(e,t,r,E,R,B){const c=m("Generic");return s(),f(c,{item:r.item},{indicator:g(()=>[p("div",y,[e.activity>0?(s(),i("strong",u,o(e.activity),1)):n("",!0),e.missing>0?(s(),i("strong",k,o(e.missing),1)):n("",!0),e.warnings>0?(s(),i("strong",v,o(e.warnings),1)):n("",!0),e.errors>0?(s(),i("strong",w,o(e.errors),1)):n("",!0),e.serverError?(s(),i("strong",$,"?")):n("",!0)])]),_:1},8,["item"])}const I=h(_,[["render",C],["__scopeId","data-v-205ec076"]]);export{I as default};
