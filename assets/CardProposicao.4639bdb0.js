import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{a as i,s as _,D as d,o as u,c as l,g as e,z as r,f as m}from"./vendor.d72107b9.js";const f={class:"card-proposicao-dados"},v={class:"card-proposicao-numero"},g={class:"card-proposicao-text"},x=i({props:{proposicao:null},setup(c){const o=_(c.proposicao),t=d(()=>`${o.value.sigla} ${p(o.value.numero)}/${o.value.ano}`);function p(s){const a=Number(s);return isNaN(a)?s:a.toString()}return(s,a)=>(u(),l("div",null,[e("span",f,[e("span",v,r(m(t)),1)]),e("span",g,r(o.value.ementa),1)]))}});var B=n(x,[["__scopeId","data-v-311a38d6"]]);export{B as default};
