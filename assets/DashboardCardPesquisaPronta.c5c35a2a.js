var m=Object.defineProperty;var _=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var p=(t,s,o)=>s in t?m(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o,h=(t,s)=>{for(var o in s||(s={}))v.call(s,o)&&p(t,o,s[o]);if(_)for(var o of _(s))g.call(s,o)&&p(t,o,s[o]);return t};import{a as k,s as x,o as u,c as f,g as e,z as d,A as C,B as y,f as B}from"./vendor.d72107b9.js";import{u as E}from"./DashboardView.c27c3208.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.9f9557c7.js";import"./proposicaoService.8f275e90.js";const D={class:"card-dashboard-body"},w={class:"card-dashboard-header"},z={class:"card-dashboard-title"},A={class:"bi card-dashboard-icon"},I=["xlink:href"],P={class:"card-dashboard-subtitle"},q={class:"card-dashboard-text"},M=k({props:{config:null},setup(t){const s=t,o=E(),c=x(),a=h({},s.config);function b(){var r;(r=c.value)==null||r.dispatchEvent(new CustomEvent("card-click",{bubbles:!0,detail:{tipo:a.tipo,titulo:a.titulo}}))}return(r,i)=>{var n,l;return u(),f("div",{class:"col-sm-12 col-md-6 col-lg-4 offset-lg-2 d-flex align-items-stretch",onClick:b,ref_key:"root",ref:c},[e("a",{onClick:i[0]||(i[0]=C(()=>{},["prevent"])),class:y(["card-dashboard",{"card-dashboard--ativo":((l=(n=B(o).cardAtivo)==null?void 0:n.tipo)==null?void 0:l.toString())===a.tipo}])},[e("div",D,[e("div",w,[e("span",z,d(a.totalItens),1),(u(),f("svg",A,[e("use",{"xlink:href":"#"+a.icone},null,8,I)]))]),e("h2",P,d(a.titulo),1),e("span",q,d(a.subtitulo),1)])],2)],512)}}});var J=S(M,[["__scopeId","data-v-01e043b8"]]);export{J as default};