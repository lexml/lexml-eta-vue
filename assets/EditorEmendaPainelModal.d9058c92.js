import{_ as d}from"./index.1f5bb009.js";import{d as x,a as u,E as l,o as c,c as m,b as t,w as o,u as e,e as E,k as r}from"./vendor.d7f829f9.js";const v=r(" Visualiza\xE7\xE3o "),f=["emenda"],V=r(" Ajuda "),D=x({props:{itensMenu:null,textoRotuloDispositivo:null,emenda:null},setup(n){const s=n,i=u(()=>d(()=>import("./PainelModal.33b97124.js"),["assets/PainelModal.33b97124.js","assets/vendor.d7f829f9.js"])),_=u(()=>d(()=>import("./EditorEmendaAjuda.9b42d43a.js"),["assets/EditorEmendaAjuda.9b42d43a.js","assets/EditorEmendaAjuda.b9bae960.css","assets/vendor.d7f829f9.js"])),p=l(()=>s.itensMenu),a=l(()=>s.emenda);return(A,h)=>(c(),m("div",null,[t(e(i),{id:"mdlVisualizacao"},{titulo:o(()=>[v]),corpo:o(()=>[e(a)?(c(),m("lexml-emenda-comando",{key:0,emenda:e(a)},null,8,f)):E("",!0)]),_:1}),t(e(i),{id:"mdlAjuda"},{titulo:o(()=>[V]),corpo:o(()=>[t(e(_),{"itens-menu":e(p),"texto-rotulo-dispositivo":n.textoRotuloDispositivo},null,8,["itens-menu","texto-rotulo-dispositivo"])]),_:1})]))}});export{D as default};