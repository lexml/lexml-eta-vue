var m=Object.defineProperty;var _=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var p=(a,s,o)=>s in a?m(a,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[s]=o,h=(a,s)=>{for(var o in s||(s={}))v.call(s,o)&&p(a,o,s[o]);if(_)for(var o of _(s))k.call(s,o)&&p(a,o,s[o]);return a};import{a as x,q as C,o as u,c as b,f as r,z as e,H as g,I as y,u as E}from"./vendor.7a07ef18.js";import{u as S}from"./DashboardView.aed23846.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.633d349e.js";import"./proposicaoService.8f275e90.js";const D={class:"card-dashboard-body"},I={class:"card-dashboard-header"},q={class:"card-dashboard-title"},w={class:"bi card-dashboard-icon"},z=["xlink:href"],P={class:"card-dashboard-subtitle"},A={class:"card-dashboard-text"},H=x({props:{dados:null},setup(a){const s=a,o=S(),i=C(),t=h({},s.dados);function f(){var d;(d=i.value)==null||d.dispatchEvent(new CustomEvent("card-click",{bubbles:!0,detail:{tipo:t.tipo,titulo:t.titulo}}))}return(d,c)=>{var n,l;return u(),b("div",{class:"col-lg-3 col-sm-12 d-flex align-items-stretch",onClick:f,ref_key:"root",ref:i},[r("a",{onClick:c[0]||(c[0]=g(()=>{},["prevent"])),class:y(["card-dashboard",{"card-dashboard--ativo":((l=(n=E(o).cardAtivo)==null?void 0:n.tipo)==null?void 0:l.toString())===t.tipo}])},[r("div",D,[r("div",I,[r("span",q,e(t.totalItens),1),(u(),b("svg",w,[r("use",{"xlink:href":"#"+t.icone},null,8,z)]))]),r("h2",P,e(t.titulo),1),r("span",A,e(t.subtitulo),1)])],2)],512)}}});var J=B(H,[["__scopeId","data-v-00f41d12"]]);export{J as default};
