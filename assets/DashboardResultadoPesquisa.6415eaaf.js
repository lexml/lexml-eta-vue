import{_ as u}from"./index.78d4c64a.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{a as f,b as m,o as r,c as i,g as s,z as d,I as h,F as v,J as b,h as g,e as y,f as I}from"./vendor.d72107b9.js";const E={key:0},P={class:"row justify-content-center"},k={class:"col-lg-8 p-3 mb-2 border-bottom border-light"},D={class:"lista-proposicao-header"},V={class:"badge rounded-pill bg-primary"},x={class:"row justify-content-center"},A={class:"col-lg-8"},B={class:"lista-proposicao mb-5"},C=f({props:{dados:null},setup(a){const n=m(()=>u(()=>import("./DashboardResultadoPesquisaItem.dddc19f1.js"),["assets/DashboardResultadoPesquisaItem.dddc19f1.js","assets/DashboardResultadoPesquisaItem.f4b560fa.css","assets/index.78d4c64a.js","assets/index.68742fa1.css","assets/vendor.d72107b9.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/CardProposicao.4639bdb0.js","assets/CardProposicao.456bf671.css","assets/AcoesPermitidas.63b13ca0.js","assets/AcoesPermitidas.bd995759.css"]));function c(e,t){return"idIdentificacao"in e?e.idIdentificacao+t:"metadados"in e?e.metadados.id:t}function l(e){return"idIdentificacao"in e?["criarEmenda"]:["abrir","excluir","criarEmenda"]}return(e,t)=>a.dados?(r(),i("div",E,[s("div",P,[s("div",k,[s("h3",D,d(a.dados.titulo),1),s("span",V,d(a.dados.totalItens),1),h(e.$slots,"default",{},void 0,!0)])]),s("div",x,[s("div",A,[s("ul",B,[(r(!0),i(v,null,b(a.dados.lista,(o,_)=>(r(),i("li",{key:c(o,_),class:"lista-proposicao-item"},[y(I(n),{item:o,"acoes-permitidas":l(o)},null,8,["item","acoes-permitidas"])]))),128))])])])])):g("",!0)}});var q=p(C,[["__scopeId","data-v-2a3ae2f1"]]);export{q as default};