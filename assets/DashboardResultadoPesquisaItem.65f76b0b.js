import{g as p,i as f}from"./index.3d5fa411.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{a as l,s as r,o as c,c as m,g as i,z as u,f as t,y as h,h as g,e as n}from"./vendor.d72107b9.js";import y from"./CardProposicao.4639bdb0.js";import P from"./AcoesPermitidas.264cf2d2.js";const b={class:"card-proposicao-header"},x={class:"card-proposicao-title"},B=l({props:{emenda:null},setup(s){const e=r(s.emenda);return(d,v)=>{var a;return c(),m("div",b,[i("span",x,u((a=e.value.metadados)==null?void 0:a.titulo),1)])}}});var E=_(B,[["__scopeId","data-v-5b4c121a"]]);const k={class:"card-proposicao"},C={class:"card-proposicao-sigla"},V={class:"card-proposicao-body"},D=l({props:{item:null,acoesPermitidas:null},setup(s){const o=s,e=r(o.item),d=r(o.acoesPermitidas);function v(a){return a}return(a,I)=>(c(),m("div",k,[i("span",C,u(t(p)(e.value).sigla),1),i("div",V,[t(f)(e.value)?(c(),h(E,{key:0,emenda:e.value},null,8,["emenda"])):g("",!0),n(y,{proposicao:t(p)(e.value)},null,8,["proposicao"]),n(P,{item:e.value,"acoes-permitidas":d.value},null,8,["item","acoes-permitidas"])])]))}});var q=_(D,[["__scopeId","data-v-d99a2d56"]]);export{q as default};
