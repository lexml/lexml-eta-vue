var E=Object.defineProperty,P=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var _=(r,t,o)=>t in r?E(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,d=(r,t)=>{for(var o in t||(t={}))A.call(t,o)&&_(r,o,t[o]);if(p)for(var o of p(t))O.call(t,o)&&_(r,o,t[o]);return r},f=(r,t)=>P(r,L(t));import{d as w,a as l,o as D,c as I,b as m,u as h,e as T,f as b,F as V,r as R,g as C,h as S,i as N,j as k}from"./vendor.447b1bdc.js";const $=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}};$();const q="modulepreload",v={},x="/lexml-eta-vue/",c=function(t,o){return!o||o.length===0?t():Promise.all(o.map(i=>{if(i=`${x}${i}`,i in v)return;v[i]=!0;const e=i.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${n}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":q,e||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),e)return new Promise((a,u)=>{s.addEventListener("load",a),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};const B={class:"bs-eta"},H=w({setup(r){const t=l(()=>c(()=>import("./HeaderArea.8a442124.js"),["assets/HeaderArea.8a442124.js","assets/HeaderArea.ad3ed8fc.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.447b1bdc.js"]));l(()=>c(()=>import("./FooterArea.ae014c87.js"),["assets/FooterArea.ae014c87.js","assets/FooterArea.2d1a8da3.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.447b1bdc.js"]));const o=l(()=>c(()=>import("./IconesSvg.d9fb6427.js"),["assets/IconesSvg.d9fb6427.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.447b1bdc.js"]));return(i,e)=>{const n=R("router-view");return D(),I(V,null,[m(h(t)),T("div",B,[m(n)]),b("",!0),m(h(o))],64)}}}),F=[{path:"/",name:"home",component:()=>c(()=>import("./DashboardView.75ccda07.js").then(function(r){return r.D}),["assets/DashboardView.75ccda07.js","assets/vendor.447b1bdc.js","assets/proposicaoService.8f275e90.js"])},{path:"/edicao",name:"edicao",component:()=>c(()=>import("./EditorEmendaView.f808052a.js"),["assets/EditorEmendaView.f808052a.js","assets/vendor.447b1bdc.js"]),props:!0},{path:"/pesquisa-proposicao",name:"PesquisaProposicao",component:()=>c(()=>import("./PesquisaProposicaoView.249f439b.js").then(function(r){return r.P}),["assets/PesquisaProposicaoView.249f439b.js","assets/PesquisaProposicaoView.bdb1ce75.css","assets/vendor.447b1bdc.js","assets/proposicaoService.8f275e90.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0}],W=C({history:S(),routes:F,scrollBehavior(r,t,o){return new Promise(e=>{if(!o)e(!1);else{const n=new Date;let s=0;const a=()=>{clearInterval(s);const u=(new Date().getTime()-n.getTime())/1e3,y=document.body.scrollHeight;u<2e3&&y<o.top?s=window.setTimeout(()=>{a()},100):e(f(d({},o),{behavior:"auto"}))};a()}})}}),g=N(H);g.use(k()).use(W);g.mount("#app");export{c as _};
