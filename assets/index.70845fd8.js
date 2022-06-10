var Gd=Object.defineProperty,Qd=Object.defineProperties;var Wd=Object.getOwnPropertyDescriptors;var Da=Object.getOwnPropertySymbols;var Zd=Object.prototype.hasOwnProperty,Xd=Object.prototype.propertyIsEnumerable;var Ra=(o,e,t)=>e in o?Gd(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,Ke=(o,e)=>{for(var t in e||(e={}))Zd.call(e,t)&&Ra(o,t,e[t]);if(Da)for(var t of Da(e))Xd.call(e,t)&&Ra(o,t,e[t]);return o},Kt=(o,e)=>Qd(o,Wd(e));import{d as Yd,a as Jd,u as ep,b as Bn,o as tp,c as op,e as Vn,f as La,g as ip,h as rp,F as np,r as sp,i as ap,j as lp,k as cp,l as up}from"./vendor.d72107b9.js";const dp=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}};dp();const pp="modulepreload",Ma={},hp="/lexml-eta-vue/",Ui=function(e,t){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=`${hp}${i}`,i in Ma)return;Ma[i]=!0;const r=i.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${n}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":pp,r||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),r)return new Promise((d,c)=>{s.addEventListener("load",d),s.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},fp=o=>{const e=[...o];return e.sort((t,i)=>{const r=new Date(t.metadados.datUltimoAcesso);return new Date(i.metadados.datUltimoAcesso).getTime()-r.getTime()}),e},ja=o=>{window.localStorage.setItem("emendas",JSON.stringify(o))},Xs=Yd({id:"appStore",state:()=>({emendas:[]}),getters:{},actions:{adicionarEmenda(o){const e=Ke({},o),t=this.emendas.findIndex(i=>{var r,n;return((r=i.metadados)==null?void 0:r.id)===((n=e.metadados)==null?void 0:n.id)});t>=0?this.emendas[t]=e:this.emendas.push(e),this.emendas=fp(this.emendas),ja(this.emendas)},lerEmendas(){return this.emendas=JSON.parse(window.localStorage.getItem("emendas")||"[]"),this.emendas},removerDaLista(o){this.emendas=this.emendas.filter(e=>{var t,i;return((t=e.metadados)==null?void 0:t.id)!==((i=o.metadados)==null?void 0:i.id)}),ja(this.emendas)}}}),mp=o=>"emenda"in o,vp=o=>mp(o)?o.emenda.proposicao:o,We=[];for(let o=0;o<256;o++)We[o]=(o<16?"0":"")+o.toString(16);const gp=()=>{const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return We[o&255]+We[o>>8&255]+We[o>>16&255]+We[o>>24&255]+"-"+We[e&255]+We[e>>8&255]+"-"+We[e>>16&15|64]+We[e>>24&255]+"-"+We[t&63|128]+We[t>>8&255]+"-"+We[t>>16&255]+We[t>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]};let Pn;var bp={configModulo:o=>Pn=o};const L0=(o,e)=>{if(o){const{sigla:t,numero:i,ano:r}=vp(o),n={sigla:t,numero:i,ano:r};e&&(n.ondeCouber=e),Pn.push({path:"/edicao",query:n})}},M0=o=>{const e=o;e.metadados.id=e.metadados.id||gp(),e.metadados.datAlteracao=new Date,e.metadados.datUltimoAcesso=new Date;const t=JSON.stringify(e,null,4),i=new Blob([t],{type:"application/json"}),{sigla:r,numero:n,ano:s}=e.emenda.proposicao,d=`${r} ${n}/${s}.emenda.json`,c=URL.createObjectURL(i),p=document.createElement("a");p.href=c,p.download=d,document.body.appendChild(p),p.click(),Xs().adicionarEmenda(e)},j0=o=>{if(o){o.metadados.datUltimoAcesso=new Date;const{sigla:e,numero:t,ano:i}=o.emenda.proposicao,r={sigla:e,numero:t,ano:i};o.emenda.tipo==="emendaArtigoOndeCouber"&&(r.ondeCouber=!0),Pn.push({name:"edicao",query:r,params:{emendaEmDisco:JSON.stringify(o),titulo:o.metadados.titulo}})}},$0=()=>{const o=document.getElementById("fileUpload");o!=null&&o.click()},U0=o=>{const e=o.target;if(e&&e.files){const t=new FileReader;t.readAsText(e.files[0]),t.onloadend=i=>{var r;if((r=i.target)!=null&&r.result){const n=JSON.parse(i.target.result),s=n;s.metadados.datAlteracao=new Date(n.datAlteracao),s.metadados.datUltimoAcesso=new Date;const{sigla:d,numero:c,ano:p}=s.emenda.proposicao,u={sigla:d,numero:c,ano:p};s.emenda.tipo==="emendaArtigoOndeCouber"&&(u.ondeCouber=!0),Xs().adicionarEmenda(s),Pn.push({name:"edicao",query:u,params:{emendaEmDisco:JSON.stringify(s),titulo:s.metadados.titulo}})}}}};const yp={class:"bs-eta"},xp=Jd({setup(o){bp.configModulo(ep());const e=Bn(()=>Ui(()=>import("./HeaderArea.334ad89d.js"),["assets/HeaderArea.334ad89d.js","assets/HeaderArea.1c64915d.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.d72107b9.js"]));Bn(()=>Ui(()=>import("./FooterArea.7bce4361.js"),["assets/FooterArea.7bce4361.js","assets/FooterArea.ebc43ff2.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.d72107b9.js"]));const t=Bn(()=>Ui(()=>import("./IconesSvg.76eb3f8a.js"),["assets/IconesSvg.76eb3f8a.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.d72107b9.js"]));return Xs().lerEmendas(),(r,n)=>{const s=sp("router-view");return tp(),op(np,null,[Vn(La(e)),ip("div",yp,[Vn(s)]),rp("",!0),Vn(La(t))],64)}}}),wp=[{path:"/",name:"home",component:()=>Ui(()=>import("./DashboardView.e3c7655b.js").then(function(o){return o.D}),["assets/DashboardView.e3c7655b.js","assets/DashboardView.5f18c293.css","assets/vendor.d72107b9.js","assets/proposicaoService.8f275e90.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/edicao",name:"edicao",component:()=>Ui(()=>import("./EditorEmendaView.fb3a2084.js"),["assets/EditorEmendaView.fb3a2084.js","assets/vendor.d72107b9.js"]),props:!0},{path:"/pesquisa-proposicao",name:"PesquisaProposicao",component:()=>Ui(()=>import("./PesquisaProposicaoView.41ed6e22.js").then(function(o){return o.P}),["assets/PesquisaProposicaoView.41ed6e22.js","assets/PesquisaProposicaoView.d0506868.css","assets/vendor.d72107b9.js","assets/proposicaoService.8f275e90.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0}],Ap=ap({history:lp(),routes:wp,scrollBehavior(o,e,t){return new Promise(i=>{if(!t)i(!1);else{const r=new Date;let n=0;const s=()=>{clearInterval(n);const d=(new Date().getTime()-r.getTime())/1e3,c=document.body.scrollHeight;d<2e3&&c<t.top?n=window.setTimeout(()=>{s()},100):i(Kt(Ke({},t),{behavior:"auto"}))};s()}})}}),ln=Symbol("defaultState"),Pc=Symbol("delegatesFocus"),Qo=Symbol("firstRender"),Nc=Symbol("focusTarget"),Os=Symbol("hasDynamicTemplate"),Cc=Symbol("ids"),cn=Symbol("nativeInternals"),Pi=Symbol("raiseChangeEvents"),mo=Symbol("render"),un=Symbol("renderChanges"),dr=Symbol("rendered"),pr=Symbol("rendering"),qs=Symbol("setState"),br=Symbol("shadowRoot"),Is=Symbol("shadowRootMode"),Ss=Symbol("state"),hr=Symbol("stateEffects"),Tc=Symbol("template");function Ir(o,e){return typeof e=="boolean"?e:typeof e=="string"&&(e===""||o.toLowerCase()===e.toLowerCase())}function Do(o,e){let t=e;for(;t;){const i=t.assignedSlot||t.parentNode||t.host;if(i===o)return!0;t=i}return!1}function vn(o){const e=jc(o,i=>i instanceof HTMLElement&&i.matches('a[href],area[href],button:not([disabled]),details,iframe,input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[contentEditable="true"],[tabindex]')&&i.tabIndex>=0),{value:t}=e.next();return t instanceof HTMLElement?t:null}function Dc(o,e){return Array.prototype.findIndex.call(o,t=>t===e||Do(t,e))}function Rc(o,e){const t=e.composedPath()[0];return o===t||Do(o,t)}function*Lc(o){o&&(yield o,yield*function*(e){let t=e;for(;t=t instanceof HTMLElement&&t.assignedSlot?t.assignedSlot:t instanceof ShadowRoot?t.host:t.parentNode,t;)yield t}(o))}function Sr(o,e,t){o.toggleAttribute(e,t),o[cn]&&o[cn].states&&o[cn].states.toggle(e,t)}const Mc={checked:!0,defer:!0,disabled:!0,hidden:!0,ismap:!0,multiple:!0,noresize:!0,readonly:!0,selected:!0};function*jc(o,e){let t;if(e(o)&&(yield o),o instanceof HTMLElement&&o.shadowRoot)t=o.shadowRoot.children;else{const i=o instanceof HTMLSlotElement?o.assignedNodes({flatten:!0}):[];t=i.length>0?i:o.childNodes}if(t)for(let i=0;i<t.length;i++)yield*jc(t[i],e)}const Ce={html:(o,...e)=>Bt.html(o,...e).content},Bt={html(o,...e){const t=document.createElement("template");return t.innerHTML=String.raw(o,...e),t}},$a=new Map;function $c(o){if(typeof o=="function"){let e;try{e=new o}catch(t){if(t.name!=="TypeError")throw t;(function(i){let r;const n=/^[A-Za-z][A-Za-z0-9_$]*$/,s=i.name&&i.name.match(n);if(s){const p=/([A-Z])/g;r=s[0].replace(p,(u,a,l)=>l>0?`-${a}`:a).toLowerCase()}else r="custom-element";let d,c=$a.get(r)||0;for(;d=`${r}-${c}`,customElements.get(d);c++);customElements.define(d,i),$a.set(r,c+1)})(o),e=new o}return e}return document.createElement(o)}function ks(o,e){const t=o.parentNode;if(!t)throw"An element must have a parent before it can be substituted.";return(o instanceof HTMLElement||o instanceof SVGElement)&&(e instanceof HTMLElement||e instanceof SVGElement)&&(Array.prototype.forEach.call(o.attributes,i=>{e.getAttribute(i.name)||i.name==="class"||i.name==="style"||e.setAttribute(i.name,i.value)}),Array.prototype.forEach.call(o.classList,i=>{e.classList.add(i)}),Array.prototype.forEach.call(o.style,i=>{e.style[i]||(e.style[i]=o.style[i])})),e.append(...o.childNodes),t.replaceChild(e,o),e}function Vi(o,e){if(typeof e=="function"&&o.constructor===e||typeof e=="string"&&o instanceof Element&&o.localName===e)return o;{const t=$c(e);return ks(o,t),t}}const Ua={tabindex:"tabIndex"},Fa={tabIndex:"tabindex"};function Uc(o){if(o===HTMLElement)return[];const e=Object.getPrototypeOf(o.prototype).constructor;let t=e.observedAttributes;t||(t=Uc(e));const i=Object.getOwnPropertyNames(o.prototype).filter(r=>{const n=Object.getOwnPropertyDescriptor(o.prototype,r);return n&&typeof n.set=="function"}).map(r=>function(n){let s=Fa[n];if(!s){const d=/([A-Z])/g;s=n.replace(d,"-$1").toLowerCase(),Fa[n]=s}return s}(r)).filter(r=>t.indexOf(r)<0);return t.concat(i)}const Yr=Symbol("state"),Hn=Symbol("raiseChangeEventsInNextRender"),wi=Symbol("changedSinceLastRender");function Ep(o,e){const t={};for(const n in e)i=e[n],r=o[n],(i instanceof Date&&r instanceof Date?i.getTime()===r.getTime():i===r)||(t[n]=!0);var i,r;return t}const za=new Map,Kn=Symbol("shadowIdProxy"),Fc=Symbol("proxyElement"),_p={get(o,e){const t=o[Fc][br];return t&&typeof e=="string"?t.getElementById(e):null}},co=function(o){return class extends o{attributeChangedCallback(e,t,i){if(super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i),i!==t&&!this[pr]){const r=function(n){let s=Ua[n];if(!s){const d=/-([a-z])/g;s=n.replace(d,c=>c[1].toUpperCase()),Ua[n]=s}return s}(e);if(r in this){const n=Mc[e]?Ir(e,i):i;this[r]=n}}}static get observedAttributes(){return Uc(this)}}}(function(o){class e extends o{constructor(){super(),this[Qo]=void 0,this[Pi]=!1,this[wi]=null,this[qs](this[ln])}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[un]()}get[ln](){return super[ln]||{}}[mo](i){super[mo]&&super[mo](i)}[un](){this[Qo]===void 0&&(this[Qo]=!0);const i=this[wi];if(this[Qo]||i){const r=this[Pi];this[Pi]=this[Hn],this[pr]=!0,this[mo](i),this[pr]=!1,this[wi]=null,this[dr](i),this[Qo]=!1,this[Pi]=r,this[Hn]=r}}[dr](i){super[dr]&&super[dr](i)}async[qs](i){this[pr]&&console.warn(`${this.constructor.name} called [setState] during rendering, which you should avoid.
See https://elix.org/documentation/ReactiveMixin.`);const{state:r,changed:n}=function(d,c){const p=Object.assign({},d[Yr]),u={};let a=c;for(;;){const l=Ep(p,a);if(Object.keys(l).length===0)break;Object.assign(p,a),Object.assign(u,l),a=d[hr](p,l)}return{state:p,changed:u}}(this,i);if(this[Yr]&&Object.keys(n).length===0)return;Object.freeze(r),this[Yr]=r,this[Pi]&&(this[Hn]=!0);const s=this[Qo]===void 0||this[wi]!==null;this[wi]=Object.assign(this[wi]||{},n),this.isConnected&&!s&&(await Promise.resolve(),this[un]())}get[Ss](){return this[Yr]}[hr](i,r){return super[hr]?super[hr](i,r):{}}}return new URLSearchParams(location.search).get("elixdebug")==="true"&&Object.defineProperty(e.prototype,"state",{get(){return this[Ss]}}),e}(function(o){return class extends o{get[Cc](){if(!this[Kn]){const e={[Fc]:this};this[Kn]=new Proxy(e,_p)}return this[Kn]}[mo](e){if(super[mo]&&super[mo](e),!this[br]){const t=function(i){let r=i[Os]?void 0:za.get(i.constructor);if(r===void 0){if(r=i[Tc],r&&!(r instanceof HTMLTemplateElement))throw`Warning: the [template] property for ${i.constructor.name} must return an HTMLTemplateElement.`;i[Os]||za.set(i.constructor,r||null)}return r}(this);if(t){const i=this.attachShadow({delegatesFocus:this[Pc],mode:this[Is]}),r=document.importNode(t.content,!0);i.append(r),this[br]=i}else this[br]=null}}get[Is](){return"open"}}}(HTMLElement))),Ps=Symbol("checkSize"),ii=Symbol("closestAvailableItemIndex"),Ns=Symbol("contentSlot"),G=ln,gn=Symbol("defaultTabIndex"),Ys=Pc,ji=Symbol("effectEndTarget"),Ve=Qo,Cs=Nc,fr=Symbol("getItemText"),vo=Symbol("goDown"),Xt=Symbol("goEnd"),Ni=Symbol("goFirst"),Ci=Symbol("goLast"),go=Symbol("goLeft"),bo=Symbol("goNext"),yo=Symbol("goPrevious"),xo=Symbol("goRight"),Yt=Symbol("goStart"),Ti=Symbol("goToItemWithPrefix"),wo=Symbol("goUp"),Op=Os,ae=Cc,ri=Symbol("inputDelegate"),qp=Symbol("itemsDelegate"),Oe=Symbol("keydown"),Ip=Symbol("mouseenter"),Sp=Symbol("mouseleave"),Xo=cn,oe=Pi,Q=mo,kp=un,Pp=Symbol("renderDataToElement"),ee=dr,tr=pr,bt=Symbol("scrollTarget"),W=qs,et=br,Np=Is,Js=Symbol("startEffect"),T=Ss,ye=hr,Cp=Symbol("swipeDown"),Tp=Symbol("swipeDownComplete"),Dp=Symbol("swipeLeft"),Rp=Symbol("swipeLeftTransitionEnd"),Lp=Symbol("swipeRight"),Mp=Symbol("swipeRightTransitionEnd"),jp=Symbol("swipeUp"),$p=Symbol("swipeUpComplete"),Up=Symbol("swipeStart"),Fp=Symbol("swipeTarget"),Hi=Symbol("tap"),ce=Tc,zp=Symbol("toggleSelectedFlag");new URLSearchParams(location.search).get("elixdebug")==="true"&&(window.elix={internal:{checkSize:Ps,closestAvailableItemIndex:ii,contentSlot:Ns,defaultState:G,defaultTabIndex:gn,delegatesFocus:Ys,effectEndTarget:ji,firstRender:Ve,focusTarget:Cs,getItemText:fr,goDown:vo,goEnd:Xt,goFirst:Ni,goLast:Ci,goLeft:go,goNext:bo,goPrevious:yo,goRight:xo,goStart:Yt,goToItemWithPrefix:Ti,goUp:wo,hasDynamicTemplate:Op,ids:ae,inputDelegate:ri,itemsDelegate:qp,keydown:Oe,mouseenter:Ip,mouseleave:Sp,nativeInternals:Xo,event,raiseChangeEvents:oe,render:Q,renderChanges:kp,renderDataToElement:Pp,rendered:ee,rendering:tr,scrollTarget:bt,setState:W,shadowRoot:et,shadowRootMode:Np,startEffect:Js,state:T,stateEffects:ye,swipeDown:Cp,swipeDownComplete:Tp,swipeLeft:Dp,swipeLeftTransitionEnd:Rp,swipeRight:Lp,swipeRightTransitionEnd:Mp,swipeUp:jp,swipeUpComplete:$p,swipeStart:Up,swipeTarget:Fp,tap:Hi,template:ce,toggleSelectedFlag:zp}});const Jr=Symbol("previousBodyStyleOverflow"),en=Symbol("previousDocumentMarginRight"),zc=Symbol("wrap"),Gn=Symbol("wrappingFocus");function ea(o){return class extends o{[Oe](e){const t=vn(this[et]);if(t){const i=document.activeElement&&(document.activeElement===t||document.activeElement.contains(t)),r=this[et].activeElement,n=r&&(r===t||Do(r,t));(i||n)&&e.key==="Tab"&&e.shiftKey&&(this[Gn]=!0,this[ae].focusCatcher.focus(),this[Gn]=!1)}return super[Oe]&&super[Oe](e)||!1}[Q](e){super[Q]&&super[Q](e),this[Ve]&&this[ae].focusCatcher.addEventListener("focus",()=>{if(!this[Gn]){const t=vn(this[et]);t&&t.focus()}})}[zc](e){const t=Ce.html`
        <style>
          #focusCapture {
            display: flex;
            height: 100%;
            overflow: hidden;
            width: 100%;
          }

          #focusCaptureContainer {
            align-items: center;
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;
            position: relative;
          }
        </style>
        <div id="focusCapture">
          <div id="focusCaptureContainer"></div>
          <div id="focusCatcher" tabindex="0"></div>
        </div>
      `,i=t.getElementById("focusCaptureContainer");i&&(e.replaceWith(t),i.append(e))}}}function Nn(o){return class extends o{constructor(){super(),this.addEventListener("keydown",async e=>{this[oe]=!0,this[T].focusVisible||this[W]({focusVisible:!0}),this[Oe](e)&&(e.preventDefault(),e.stopImmediatePropagation()),await Promise.resolve(),this[oe]=!1})}attributeChangedCallback(e,t,i){if(e==="tabindex"){let r;i===null?r=-1:(r=Number(i),isNaN(r)&&(r=this[gn]?this[gn]:0)),this.tabIndex=r}else super.attributeChangedCallback(e,t,i)}get[G](){const e=this[Ys]?-1:0;return Object.assign(super[G]||{},{tabIndex:e})}[Oe](e){return!!super[Oe]&&super[Oe](e)}[Q](e){super[Q]&&super[Q](e),e.tabIndex&&(this.tabIndex=this[T].tabIndex)}get tabIndex(){return super.tabIndex}set tabIndex(e){super.tabIndex!==e&&(super.tabIndex=e),this[tr]||this[W]({tabIndex:e})}}}ea.wrap=zc;const Bp=function(o){return class extends o{get[G](){return Object.assign(super[G]||{},{role:null})}[Q](e){if(super[Q]&&super[Q](e),e.role){const{role:t}=this[T];t?this.setAttribute("role",t):this.removeAttribute("role")}}get role(){return super.role}set role(e){const t=String(e);super.role=t,this[tr]||this[W]({s:t})}}}(co);class ta extends Bp{get[G](){return Object.assign(super[G],{role:"none"})}get[ce](){return Bt.html`
      <style>
        :host {
          display: inline-block;
          height: 100%;
          left: 0;
          position: fixed;
          top: 0;
          touch-action: manipulation;
          width: 100%;
        }
      </style>
      <slot></slot>
    `}}class Bc extends ta{constructor(){super(),"PointerEvent"in window||this.addEventListener("touchmove",e=>{e.touches.length===1&&e.preventDefault()})}}const tn=Symbol("closePromise"),Qn=Symbol("closeResolve");function Vc(o){return class extends o{attributeChangedCallback(e,t,i){if(e==="opened"){const r=Ir(e,i);this.opened!==r&&(this.opened=r)}else super.attributeChangedCallback(e,t,i)}async close(e){super.close&&await super.close(),this[W]({closeResult:e}),await this.toggle(!1)}get closed(){return this[T]&&!this[T].opened}get closeFinished(){return this[T].closeFinished}get closeResult(){return this[T].closeResult}get[G](){const e={closeResult:null,opened:!1};return this[Js]&&Object.assign(e,{closeFinished:!0,effect:"close",effectPhase:"after",openCloseEffects:!0}),Object.assign(super[G]||{},e)}async open(){super.open&&await super.open(),this[W]({closeResult:void 0}),await this.toggle(!0)}get opened(){return this[T]&&this[T].opened}set opened(e){this[W]({closeResult:void 0}),this.toggle(e)}[Q](e){if(super[Q](e),e.opened){const{opened:t}=this[T];Sr(this,"opened",t)}if(e.closeFinished){const{closeFinished:t}=this[T];Sr(this,"closed",t)}}[ee](e){if(super[ee]&&super[ee](e),e.opened&&this[oe]){const i=new CustomEvent("opened-changed",{bubbles:!0,detail:{closeResult:this[T].closeResult,opened:this[T].opened}});this.dispatchEvent(i);const r=new CustomEvent("openedchange",{bubbles:!0,detail:{closeResult:this[T].closeResult,opened:this[T].opened}});if(this.dispatchEvent(r),this[T].opened){const n=new CustomEvent("opened",{bubbles:!0});this.dispatchEvent(n);const s=new CustomEvent("open",{bubbles:!0});this.dispatchEvent(s)}else{const n=new CustomEvent("closed",{bubbles:!0,detail:{closeResult:this[T].closeResult}});this.dispatchEvent(n);const s=new CustomEvent("close",{bubbles:!0,detail:{closeResult:this[T].closeResult}});this.dispatchEvent(s)}}const t=this[Qn];this.closeFinished&&t&&(this[Qn]=null,this[tn]=null,t(this[T].closeResult))}[ye](e,t){const i=super[ye]?super[ye](e,t):{};if(t.openCloseEffects||t.effect||t.effectPhase||t.opened){const{effect:r,effectPhase:n,openCloseEffects:s,opened:d}=e;Object.assign(i,{closeFinished:s?r==="close"&&n==="after":!d})}return i}async toggle(e=!this.opened){if(super.toggle&&await super.toggle(e),e!==this[T].opened){const t={opened:e};this[T].openCloseEffects&&(t.effect=e?"open":"close",this[T].effectPhase==="after"&&(t.effectPhase="before")),await this[W](t)}}whenClosed(){return this[tn]||(this[tn]=new Promise(e=>{this[Qn]=e})),this[tn]}}}class Hc extends co{get[ce](){return Bt.html`
      <style>
        :host {
          display: inline-block;
          position: relative;
        }
      </style>
      <slot></slot>
    `}}const Wn=Symbol("appendedToDocument"),mr=Symbol("assignedZIndex"),Vo=Symbol("restoreFocusToElement");function Ba(o){const e=function(){const t=document.body.querySelectorAll("*"),i=Array.from(t,r=>{const n=getComputedStyle(r);let s=0;if(n.position!=="static"&&n.zIndex!=="auto"){const d=n.zIndex?parseInt(n.zIndex):0;s=isNaN(d)?0:d}return s});return Math.max(...i)}()+1;o[mr]=e,o.style.zIndex=e.toString()}function Ts(o){const e=getComputedStyle(o).zIndex,t=o.style.zIndex,i=!isNaN(parseInt(t));if(e==="auto")return i;if(e==="0"&&!i){const r=o.assignedSlot||(o instanceof ShadowRoot?o.host:o.parentNode);if(!(r instanceof HTMLElement))return!0;if(!Ts(r))return!1}return!0}function Kc(o){return class extends o{get[Ns](){const e=this[et]&&this[et].querySelector("slot:not([name])");return this[et]&&e||console.warn(`SlotContentMixin expects ${this.constructor.name} to define a shadow tree that includes a default (unnamed) slot.
See https://elix.org/documentation/SlotContentMixin.`),e}get[G](){return Object.assign(super[G]||{},{content:null})}[ee](e){if(super[ee]&&super[ee](e),this[Ve]){const t=this[Ns];t&&t.addEventListener("slotchange",async()=>{this[oe]=!0;const i=t.assignedNodes({flatten:!0});Object.freeze(i),this[W]({content:i}),await Promise.resolve(),this[oe]=!1})}}}}const Vp=Vc(function(o){return class extends o{get autoFocus(){return this[T].autoFocus}set autoFocus(e){this[W]({autoFocus:e})}get[G](){return Object.assign(super[G]||{},{autoFocus:!0,persistent:!1})}async open(){this[T].persistent||this.isConnected||(this[Wn]=!0,document.body.append(this)),super.open&&await super.open()}[Q](e){super[Q]&&super[Q](e),this[Ve]&&this.addEventListener("blur",t=>{const i=t.relatedTarget||document.activeElement;i instanceof HTMLElement&&(Do(this,i)||(this.opened?this[Vo]=i:(i.focus(),this[Vo]=null)))}),(e.effectPhase||e.opened||e.persistent)&&!this[T].persistent&&((this.closeFinished===void 0?this.closed:this.closeFinished)?this[mr]&&(this.style.zIndex="",this[mr]=null):this[mr]?this.style.zIndex=this[mr]:Ts(this)||Ba(this))}[ee](e){if(super[ee]&&super[ee](e),this[Ve]&&this[T].persistent&&!Ts(this)&&Ba(this),e.opened&&this[T].autoFocus)if(this[T].opened){this[Vo]||document.activeElement===document.body||(this[Vo]=document.activeElement);const t=vn(this);t&&t.focus()}else this[Vo]&&(this[Vo].focus(),this[Vo]=null);!this[Ve]&&!this[T].persistent&&this.closeFinished&&this[Wn]&&(this[Wn]=!1,this.parentNode&&this.parentNode.removeChild(this))}get[ce](){const e=super[ce]||Bt.html``;return e.content.append(Ce.html`
        <style>
          :host([closed]) {
            display: none;
          }
        </style>
      `),e}}}(Kc(co)));class Gc extends Vp{get backdrop(){return this[ae]&&this[ae].backdrop}get backdropPartType(){return this[T].backdropPartType}set backdropPartType(e){this[W]({backdropPartType:e})}get[G](){return Object.assign(super[G],{backdropPartType:ta,framePartType:Hc})}get frame(){return this[ae].frame}get framePartType(){return this[T].framePartType}set framePartType(e){this[W]({framePartType:e})}[Q](e){super[Q](e),Va(this[et],this[T],e)}[ee](e){super[ee](e),e.opened&&this[T].content&&this[T].content.forEach(t=>{t[Ps]&&t[Ps]()})}get[ce](){const e=super[ce];return e.content.append(Ce.html`
      <style>
        :host {
          display: inline-grid;
          /* Constrain content if overlay's height is constrained. */
          grid-template: minmax(0, 1fr) / minmax(0, 1fr);
          max-height: 100vh;
          max-width: 100vw;
          outline: none;
          position: fixed;
          -webkit-tap-highlight-color: transparent;
        }

        [part~="frame"] {
          box-sizing: border-box;
          display: grid;
          overscroll-behavior: contain;
          pointer-events: initial;
          position: relative;
        }

        #frameContent {
          display: grid;
          grid-template: minmax(0, 1fr) / minmax(0, 1fr);
          overflow: hidden;
        }
      </style>
      <div id="backdrop" part="backdrop" tabindex="-1"></div>
      <div id="frame" part="frame" role="none">
        <div id="frameContent">
          <slot></slot>
        </div>
      </div>
    `),Va(e.content,this[T]),e}}function Va(o,e,t){if(!t||t.backdropPartType){const{backdropPartType:i}=e,r=o.getElementById("backdrop");r&&Vi(r,i)}if(!t||t.framePartType){const{framePartType:i}=e,r=o.getElementById("frame");r&&Vi(r,i)}}const Hp=function(o){return class extends o{get[G](){return Object.assign(super[G]||{},{role:"dialog"})}[Oe](e){let t=!1;return e.key==="Escape"&&(this.close({canceled:"Escape"}),t=!0),t||super[Oe]&&super[Oe](e)||!1}[Q](e){if(super[Q]&&super[Q](e),e.opened)if(this[T].opened&&document.documentElement){const t=document.documentElement.clientWidth,i=window.innerWidth-t;this[Jr]=document.body.style.overflow,this[en]=i>0?document.documentElement.style.marginRight:null,document.body.style.overflow="hidden",i>0&&(document.documentElement.style.marginRight=`${i}px`)}else this[Jr]!=null&&(document.body.style.overflow=this[Jr],this[Jr]=null),this[en]!=null&&(document.documentElement.style.marginRight=this[en],this[en]=null);if(e.role){const{role:t}=this[T];this.setAttribute("role",t)}}get role(){return super.role}set role(e){super.role=e,this[tr]||this[W]({role:e})}}}(ea(Nn(Gc)));class Qc extends Hp{get[G](){return Object.assign(super[G],{backdropPartType:Bc,tabIndex:-1})}get[ce](){const e=super[ce],t=e.content.querySelector("#frame");return this[ea.wrap](t),e.content.append(Ce.html`
        <style>
          :host {
            height: 100%;
            left: 0;
            pointer-events: initial;
            top: 0;
            width: 100%;
          }
        </style>
      `),e}}class Kp extends Qc{get choiceButtons(){return this[T].choiceButtons}get choiceButtonPartType(){return this[T].choiceButtonPartType}set choiceButtonPartType(e){this[W]({choiceButtonPartType:e})}get choices(){return this[T].choices}set choices(e){this[W]({choices:e})}get[G](){return Object.assign(super[G],{choiceButtonPartType:"button",choiceButtons:[],choices:["OK"]})}[Oe](e){let t=!1;const i=e.key.length===1&&e.key.toLowerCase();if(i){const r=this.choices.find(n=>n[0].toLowerCase()===i);r&&(this.close({choice:r}),t=!0)}return t||super[Oe]&&super[Oe](e)||!1}[Q](e){super[Q](e),this[Ve]&&this[ae].choiceButtonContainer.addEventListener("click",async t=>{const i=t.target;if(i instanceof HTMLElement){const r=i.textContent;this[oe]=!0,await this.close({choice:r}),this[oe]=!1}}),e.choiceButtons&&function(t,i){const r=[...i],n=t.childNodes.length,s=r.length,d=Math.max(n,s);for(let c=0;c<d;c++){const p=t.childNodes[c],u=r[c];c>=n?t.append(u):c>=s?t.removeChild(t.childNodes[s]):p!==u&&(r.indexOf(p,c)>=c?t.insertBefore(u,p):t.replaceChild(u,p))}}(this[ae].choiceButtonContainer,this[T].choiceButtons)}[ye](e,t){const i=super[ye](e,t);if(t.choiceButtonPartType||t.choices){const r=e.choices.map(n=>{const s=$c(e.choiceButtonPartType);return"part"in s&&(s.part="choice-button"),s.textContent=n,s});Object.freeze(r),Object.assign(i,{choiceButtons:r})}return i}get[ce](){const e=super[ce],t=e.content.querySelector("slot:not([name])");return t&&t.replaceWith(Ce.html`
        <div id="alertDialogContent">
          <slot></slot>
          <div id="choiceButtonContainer" part="choice-button-container"></div>
        </div>
      `),e}}const Wc=document.createElement("div");Wc.attachShadow({mode:"open",delegatesFocus:!0});const Gp=Wc.shadowRoot.delegatesFocus;function Zn(o){if("selectedText"in o)return o.selectedText;if("value"in o&&"options"in o){const e=o.value,t=o.options.find(i=>i.value===e);return t?t.innerText:""}return"value"in o?o.value:o.innerText}function Xn(o,e){const{ariaLabel:t,ariaLabelledby:i}=e,r=o.isConnected?o.getRootNode():null;let n=null;if(i&&r)n=i.split(" ").map(d=>{const c=r.getElementById(d);return c?c===o&&e.value!==null?e.selectedText:Zn(c):""}).join(" ");else if(t)n=t;else if(r){const s=o.id;if(s){const d=r.querySelector(`[for="${s}"]`);d instanceof HTMLElement&&(n=Zn(d))}if(n===null){const d=o.closest("label");d&&(n=Zn(d))}}return n&&(n=n.trim()),n}let Yo=!1;const ir=Symbol("focusVisibleChangedListener");function Zc(o){return class extends o{constructor(){super(),this.addEventListener("focusout",e=>{Promise.resolve().then(()=>{const t=e.relatedTarget||document.activeElement,i=this===t,r=Do(this,t);!i&&!r&&(this[W]({focusVisible:!1}),document.removeEventListener("focusvisiblechange",this[ir]),this[ir]=null)})}),this.addEventListener("focusin",()=>{Promise.resolve().then(()=>{this[T].focusVisible!==Yo&&this[W]({focusVisible:Yo}),this[ir]||(this[ir]=()=>{this[W]({focusVisible:Yo})},document.addEventListener("focusvisiblechange",this[ir]))})})}get[G](){return Object.assign(super[G]||{},{focusVisible:!1})}[Q](e){if(super[Q]&&super[Q](e),e.focusVisible){const{focusVisible:t}=this[T];this.toggleAttribute("focus-visible",t)}}get[ce](){const e=super[ce]||Bt.html``;return e.content.append(Ce.html`
        <style>
          :host {
            outline: none;
          }

          :host([focus-visible]:focus-within) {
            outline-color: Highlight; /* Firefox */
            outline-color: -webkit-focus-ring-color; /* All other browsers */
            outline-style: auto;
          }
        </style>
      `),e}}}function Ha(o){if(Yo!==o){Yo=o;const e=new CustomEvent("focus-visible-changed",{detail:{focusVisible:Yo}});document.dispatchEvent(e);const t=new CustomEvent("focusvisiblechange",{detail:{focusVisible:Yo}});document.dispatchEvent(t)}}function oa(o){return class extends o{get[Ys](){return!0}focus(e){const t=this[Cs];t&&t.focus(e)}get[Cs](){return vn(this[et])}}}window.addEventListener("keydown",()=>{Ha(!0)},{capture:!0}),window.addEventListener("mousedown",()=>{Ha(!1)},{capture:!0});const Ka=Symbol("extends"),Yn=Symbol("delegatedPropertySetters"),Qp={a:!0,area:!0,button:!0,details:!0,iframe:!0,input:!0,select:!0,textarea:!0},Wp={address:["scroll"],blockquote:["scroll"],caption:["scroll"],center:["scroll"],dd:["scroll"],dir:["scroll"],div:["scroll"],dl:["scroll"],dt:["scroll"],fieldset:["scroll"],form:["reset","scroll"],frame:["load"],h1:["scroll"],h2:["scroll"],h3:["scroll"],h4:["scroll"],h5:["scroll"],h6:["scroll"],iframe:["load"],img:["abort","error","load"],input:["abort","change","error","select","load"],li:["scroll"],link:["load"],menu:["scroll"],object:["error","scroll"],ol:["scroll"],p:["scroll"],script:["error","load"],select:["change","scroll"],tbody:["scroll"],tfoot:["scroll"],thead:["scroll"],textarea:["change","select","scroll"]},Zp=["click","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","wheel"],Xp={abort:!0,change:!0,reset:!0},Yp=["address","article","aside","blockquote","canvas","dd","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","section","table","tfoot","ul","video"],Ga=["accept-charset","autoplay","buffered","challenge","codebase","colspan","contenteditable","controls","crossorigin","datetime","dirname","for","formaction","http-equiv","icon","ismap","itemprop","keytype","language","loop","manifest","maxlength","minlength","muted","novalidate","preload","radiogroup","readonly","referrerpolicy","rowspan","scoped","usemap"],Jp=oa(co);class ia extends Jp{constructor(){super();const e=this;!this[Xo]&&e.attachInternals&&(this[Xo]=e.attachInternals())}attributeChangedCallback(e,t,i){if(Ga.indexOf(e)>=0){const r=Object.assign({},this[T].innerAttributes,{[e]:i});this[W]({innerAttributes:r})}else super.attributeChangedCallback(e,t,i)}blur(){this.inner.blur()}get[G](){return Object.assign(super[G],{innerAttributes:{}})}get[gn](){return Qp[this.extends]?0:-1}get extends(){return this.constructor[Ka]}get inner(){const e=this[ae]&&this[ae].inner;return e||console.warn("Attempted to get an inner standard element before it was instantiated."),e}static get observedAttributes(){return[...super.observedAttributes,...Ga]}[Q](e){super[Q](e);const t=this.inner;if(this[Ve]&&((Wp[this.extends]||[]).forEach(i=>{t.addEventListener(i,()=>{const r=new Event(i,{bubbles:Xp[i]||!1});this.dispatchEvent(r)})}),"disabled"in t&&Zp.forEach(i=>{this.addEventListener(i,r=>{t.disabled&&r.stopImmediatePropagation()})})),e.tabIndex&&(t.tabIndex=this[T].tabIndex),e.innerAttributes){const{innerAttributes:i}=this[T];for(const r in i)eh(t,r,i[r])}this.constructor[Yn].forEach(i=>{if(e[i]){const r=this[T][i];(i==="selectionEnd"||i==="selectionStart")&&r===null||(t[i]=r)}})}[ee](e){if(super[ee](e),e.disabled){const{disabled:t}=this[T];t!==void 0&&Sr(this,"disabled",t)}}get[ce](){const e=Yp.includes(this.extends)?"block":"inline-block",t=this.extends;return Bt.html`
      <style>
        :host {
          display: ${e}
        }
        
        [part~="inner"] {
          box-sizing: border-box;
          height: 100%;
          width: 100%;
        }
      </style>
      <${t} id="inner" part="inner ${t}">
        <slot></slot>
      </${t}>
    `}static wrap(e){class t extends ia{}t[Ka]=e;const i=document.createElement(e);return function(r,n){const s=Object.getOwnPropertyNames(n);r[Yn]=[],s.forEach(d=>{const c=Object.getOwnPropertyDescriptor(n,d);if(!c)return;const p=function(u,a){if(typeof a.value=="function"){if(u!=="constructor")return function(l,h){const f=function(...m){this.inner[l](...m)};return{configurable:h.configurable,enumerable:h.enumerable,value:f,writable:h.writable}}(u,a)}else if(typeof a.get=="function"||typeof a.set=="function")return function(l,h){const f={configurable:h.configurable,enumerable:h.enumerable};return h.get&&(f.get=function(){return function(m,v){return m[T][v]||m[et]&&m.inner[v]}(this,l)}),h.set&&(f.set=function(m){(function(v,g,y){v[T][g]!==y&&v[W]({[g]:y})})(this,l,m)}),h.writable&&(f.writable=h.writable),f}(u,a);return null}(d,c);p&&(Object.defineProperty(r.prototype,d,p),p.set&&r[Yn].push(d))})}(t,Object.getPrototypeOf(i)),t}}function eh(o,e,t){Mc[e]?typeof t=="string"?o.setAttribute(e,""):t===null&&o.removeAttribute(e):t!=null?o.setAttribute(e,t.toString()):o.removeAttribute(e)}const th=function(o){return class extends o{get[G](){return Object.assign(super[G]||{},{composeFocus:!Gp})}[Q](e){super[Q]&&super[Q](e),this[Ve]&&this.addEventListener("mousedown",t=>{if(this[T].composeFocus&&t.button===0&&t.target instanceof Element){const i=function(r){for(const n of Lc(r)){const s=n[Nc]||n,d=s;if(s instanceof HTMLElement&&s.tabIndex>=0&&!d.disabled&&!(s instanceof HTMLSlotElement))return s}return null}(t.target);i&&(i.focus(),t.preventDefault())}})}}}(function(o){return class extends o{get ariaLabel(){return this[T].ariaLabel}set ariaLabel(e){this[T].removingAriaAttribute||this[W]({ariaLabel:String(e)})}get ariaLabelledby(){return this[T].ariaLabelledby}set ariaLabelledby(e){this[T].removingAriaAttribute||this[W]({ariaLabelledby:String(e)})}get[G](){return Object.assign(super[G]||{},{ariaLabel:null,ariaLabelledby:null,inputLabel:null,removingAriaAttribute:!1})}[Q](e){if(super[Q]&&super[Q](e),this[Ve]&&this.addEventListener("focus",()=>{this[oe]=!0;const t=Xn(this,this[T]);this[W]({inputLabel:t}),this[oe]=!1}),e.inputLabel){const{inputLabel:t}=this[T];t?this[ri].setAttribute("aria-label",t):this[ri].removeAttribute("aria-label")}}[ee](e){super[ee]&&super[ee](e),this[Ve]&&(window.requestIdleCallback||setTimeout)(()=>{const r=Xn(this,this[T]);this[W]({inputLabel:r})});const{ariaLabel:t,ariaLabelledby:i}=this[T];e.ariaLabel&&!this[T].removingAriaAttribute&&this.getAttribute("aria-label")&&(this.setAttribute("delegated-label",t),this[W]({removingAriaAttribute:!0}),this.removeAttribute("aria-label")),e.ariaLabelledby&&!this[T].removingAriaAttribute&&this.getAttribute("aria-labelledby")&&(this.setAttribute("delegated-labelledby",i),this[W]({removingAriaAttribute:!0}),this.removeAttribute("aria-labelledby")),e.removingAriaAttribute&&this[T].removingAriaAttribute&&this[W]({removingAriaAttribute:!1})}[ye](e,t){const i=super[ye]?super[ye](e,t):{};if(t.ariaLabel&&e.ariaLabel||t.selectedText&&e.ariaLabelledby&&this.matches(":focus-within")){const r=Xn(this,e);Object.assign(i,{inputLabel:r})}return i}}}(Zc(ia.wrap("button"))));class oh extends th{get[G](){return Object.assign(super[G],{role:"button"})}get[ri](){return this[ae].inner}[Hi](){const e=new MouseEvent("click",{bubbles:!0,cancelable:!0});this.dispatchEvent(e)}get[ce](){const e=super[ce];return e.content.append(Ce.html`
        <style>
          :host {
            display: inline-flex;
            outline: none;
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
          }

          [part~="button"] {
            align-items: center;
            background: none;
            border: none;
            color: inherit;
            flex: 1;
            font: inherit;
            outline: none;
            padding: 0;
          }
        </style>
      `),e}}class ih extends function(e){return class extends e{get[ce](){const t=super[ce];return t.content.append(Ce.html`
        <style>
          :host([disabled]) ::slotted(*) {
            opacity: 0.5;
          }

          [part~="button"] {
            display: inline-flex;
            justify-content: center;
            margin: 0;
            position: relative;
          }
        </style>
      `),t}}}(oh){}class Xc extends ih{get[ce](){const e=super[ce];return e.content.append(Ce.html`
        <style>
          [part~="button"] {
            background: #eee;
            border: 1px solid #ccc;
            padding: 0.25em 0.5em;
          }
        </style>
      `),e}}class rh extends Bc{get[ce](){const e=super[ce];return e.content.append(Ce.html`
        <style>
          :host {
            background: rgba(0, 0, 0, 0.2);
          }
        </style>
      `),e}}class ra extends Hc{get[ce](){const e=super[ce];return e.content.append(Ce.html`
        <style>
          :host {
            background: white;
            border: 1px solid rgba(0, 0, 0, 0.2);
            box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
            box-sizing: border-box;
          }
        </style>
      `),e}}function Yc(o){return class extends o{get[G](){return Object.assign(super[G]||{},{backdropPartType:rh,framePartType:ra})}}}class nh extends Yc(Kp){get[G](){return Object.assign(super[G],{choiceButtonPartType:Xc})}get[ce](){const e=super[ce];return e.content.append(Ce.html`
        <style>
          [part~="frame"] {
            padding: 1em;
          }

          [part~="choice-button-container"] {
            margin-top: 1em;
          }

          [part~="choice-button"]:not(:first-child) {
            margin-left: 0.5em;
          }
        </style>
      `),e}}customElements.define("elix-alert-dialog",class extends nh{});class sh extends Yc(Qc){}customElements.define("elix-dialog",class extends sh{});const ah={a:"link",article:"region",button:"button",h1:"sectionhead",h2:"sectionhead",h3:"sectionhead",h4:"sectionhead",h5:"sectionhead",h6:"sectionhead",hr:"sectionhead",iframe:"region",link:"link",menu:"menu",ol:"list",option:"option",output:"liveregion",progress:"progressbar",select:"select",table:"table",td:"td",textarea:"textbox",th:"th",ul:"list"};function Qa(o){const e=o[et],t=e&&e.querySelector("slot:not([name])");return t&&t.parentNode instanceof Element&&function(i){for(const r of Lc(i))if(r instanceof HTMLElement&&lh(r))return r;return null}(t.parentNode)||o}function lh(o){const e=getComputedStyle(o),t=e.overflowX,i=e.overflowY;return t==="scroll"||t==="auto"||i==="scroll"||i==="auto"}function on(o,e,t){const i=o[ii](o[T],{direction:t,index:e});if(i<0)return!1;const r=o[T].currentIndex!==i;return r&&o[W]({currentIndex:i}),r}const ch=["applet","basefont","embed","font","frame","frameset","isindex","keygen","link","multicol","nextid","noscript","object","param","script","style","template","noembed"];function Wa(o,e,t){const i=o[T].items,r=t?0:i.length-1,n=t?i.length:0,s=t?1:-1;let d,c,p=null;const{availableItemFlags:u}=o[T];for(d=r;d!==n;d+=s)if((!u||u[d])&&(c=i[d].getBoundingClientRect(),c.top<=e&&e<=c.bottom)){p=i[d];break}if(!p||!c)return null;const a=getComputedStyle(p),l=a.paddingTop?parseFloat(a.paddingTop):0,h=a.paddingBottom?parseFloat(a.paddingBottom):0,f=c.top+l,m=f+p.clientHeight-l-h;return t&&f<=e||!t&&m>=e?d:d-s}function Za(o,e){const t=o[T].items,i=o[T].currentIndex,r=o[bt].getBoundingClientRect(),n=Wa(o,e?r.bottom:r.top,e);let s;if(n&&i===n){const c=t[i].getBoundingClientRect(),p=o[bt].clientHeight;s=Wa(o,e?c.bottom+p:c.top-p,e)}else s=n;if(!s){const c=e?t.length-1:0;s=o[ii]?o[ii](o[T],{direction:e?-1:1,index:c}):c}const d=s!==i;if(d){const c=o[oe];o[oe]=!0,o[W]({currentIndex:s}),o[oe]=c}return d}const Jt=Symbol("typedPrefix"),dn=Symbol("prefixTimeout");function Jc(o){const e=o;e[dn]&&(clearTimeout(e[dn]),e[dn]=!1)}function Ds(o){o[Jt]="",Jc(o)}function Xa(o){Jc(o),o[dn]=setTimeout(()=>{Ds(o)},1e3)}function na(o){return class extends o{connectedCallback(){const e=getComputedStyle(this).direction==="rtl";this[W]({rightToLeft:e}),super.connectedCallback()}}}function uh(o){return class extends o{get[G](){return Object.assign(super[G]||{},{items:null})}[ye](e,t){const i=super[ye]?super[ye](e,t):{};if(t.content){const r=e.content,n=r?Array.prototype.filter.call(r,s=>{return(d=s)instanceof Element&&(!d.localName||ch.indexOf(d.localName)<0);var d}):null;n&&Object.freeze(n),Object.assign(i,{items:n})}return i}}}const dh=function(o){return class extends o{get[G](){const e=super[G];return Object.assign(e,{itemRole:e.itemRole||"menuitem",role:e.role||"menu"})}get itemRole(){return this[T].itemRole}set itemRole(e){this[W]({itemRole:e})}[Q](e){super[Q]&&super[Q](e);const t=this[T].items;if((e.items||e.itemRole)&&t){const{itemRole:i}=this[T];t.forEach(r=>{i===ah[r.localName]?r.removeAttribute("role"):r.setAttribute("role",i)})}if(e.role){const{role:i}=this[T];this.setAttribute("role",i)}}get role(){return super.role}set role(e){super.role=e,this[tr]||this[W]({role:e})}}}(function(o){return class extends o{attributeChangedCallback(e,t,i){if(e==="current-index")this.currentIndex=Number(i);else if(e==="current-item-required"){const r=Ir(e,i);this.currentItemRequired!==r&&(this.currentItemRequired=r)}else if(e==="cursor-operations-wrap"){const r=Ir(e,i);this.cursorOperationsWrap!==r&&(this.cursorOperationsWrap=r)}else super.attributeChangedCallback(e,t,i)}get currentIndex(){const{items:e,currentIndex:t}=this[T];return e&&e.length>0?t:-1}set currentIndex(e){isNaN(e)||this[W]({currentIndex:e})}get currentItem(){const{items:e,currentIndex:t}=this[T];return e&&e[t]}set currentItem(e){const{items:t}=this[T];if(!t)return;const i=t.indexOf(e);this[W]({currentIndex:i})}get currentItemRequired(){return this[T].currentItemRequired}set currentItemRequired(e){this[W]({currentItemRequired:e})}get cursorOperationsWrap(){return this[T].cursorOperationsWrap}set cursorOperationsWrap(e){this[W]({cursorOperationsWrap:e})}goFirst(){return super.goFirst&&super.goFirst(),this[Ni]()}goLast(){return super.goLast&&super.goLast(),this[Ci]()}goNext(){return super.goNext&&super.goNext(),this[bo]()}goPrevious(){return super.goPrevious&&super.goPrevious(),this[yo]()}[ee](e){if(super[ee]&&super[ee](e),e.currentIndex&&this[oe]){const{currentIndex:t}=this[T],i=new CustomEvent("current-index-changed",{bubbles:!0,detail:{currentIndex:t}});this.dispatchEvent(i);const r=new CustomEvent("currentindexchange",{bubbles:!0,detail:{currentIndex:t}});this.dispatchEvent(r)}}}}(function(o){return class extends o{[ee](e){super[ee]&&super[ee](e),e.currentItem&&this.scrollCurrentItemIntoView()}scrollCurrentItemIntoView(){super.scrollCurrentItemIntoView&&super.scrollCurrentItemIntoView();const{currentItem:e,items:t}=this[T];if(!e||!t)return;const i=this[bt].getBoundingClientRect(),r=e.getBoundingClientRect(),n=r.bottom-i.bottom,s=r.left-i.left,d=r.right-i.right,c=r.top-i.top,p=this[T].orientation||"both";p!=="horizontal"&&p!=="both"||(d>0?this[bt].scrollLeft+=d:s<0&&(this[bt].scrollLeft+=Math.ceil(s))),p!=="vertical"&&p!=="both"||(n>0?this[bt].scrollTop+=n:c<0&&(this[bt].scrollTop+=Math.ceil(c)))}get[bt](){return super[bt]||Qa(this)}}}(oa(function(o){return class extends o{get[G](){return Object.assign(super[G]||{},{canGoDown:null,canGoLeft:null,canGoRight:null,canGoUp:null})}[vo](){return super[vo]&&super[vo](),this[bo]()}[Xt](){return super[Xt]&&super[Xt](),this[Ci]()}[go](){return super[go]&&super[go](),this[T]&&this[T].rightToLeft?this[bo]():this[yo]()}[xo](){return super[xo]&&super[xo](),this[T]&&this[T].rightToLeft?this[yo]():this[bo]()}[Yt](){return super[Yt]&&super[Yt](),this[Ni]()}[wo](){return super[wo]&&super[wo](),this[yo]()}[ye](e,t){const i=super[ye]?super[ye](e,t):{};if(t.canGoNext||t.canGoPrevious||t.languageDirection||t.orientation||t.rightToLeft){const{canGoNext:r,canGoPrevious:n,orientation:s,rightToLeft:d}=e,c=s==="horizontal"||s==="both",p=s==="vertical"||s==="both";Object.assign(i,{canGoDown:p&&r,canGoLeft:!!c&&(d?r:n),canGoRight:!!c&&(d?n:r),canGoUp:p&&n})}return i}}}(function(o){return class extends o{get items(){return this[T]?this[T].items:null}[ee](e){if(super[ee]&&super[ee](e),!this[Ve]&&e.items&&this[oe]){const t=new CustomEvent("items-changed",{bubbles:!0});this.dispatchEvent(t);const i=new CustomEvent("itemschange",{bubbles:!0});this.dispatchEvent(i)}}}}(function(o){return class extends o{[ii](e,t={}){const i=t.direction!==void 0?t.direction:1,r=t.index!==void 0?t.index:e.currentIndex,n=t.wrap!==void 0?t.wrap:e.cursorOperationsWrap,{items:s}=e,d=s?s.length:0;if(d===0)return-1;if(n){let c=(r%d+d)%d;const p=((c-i)%d+d)%d;for(;c!==p;){if(!e.availableItemFlags||e.availableItemFlags[c])return c;c=((c+i)%d+d)%d}}else for(let c=r;c>=0&&c<d;c+=i)if(!e.availableItemFlags||e.availableItemFlags[c])return c;return-1}get[G](){return Object.assign(super[G]||{},{currentIndex:-1,desiredCurrentIndex:null,currentItem:null,currentItemRequired:!1,cursorOperationsWrap:!1})}[Ni](){return super[Ni]&&super[Ni](),on(this,0,1)}[Ci](){return super[Ci]&&super[Ci](),on(this,this[T].items.length-1,-1)}[bo](){super[bo]&&super[bo]();const{currentIndex:e,items:t}=this[T];return on(this,e<0&&t?0:e+1,1)}[yo](){super[yo]&&super[yo]();const{currentIndex:e,items:t}=this[T];return on(this,e<0&&t?t.length-1:e-1,-1)}[ye](e,t){const i=super[ye]?super[ye](e,t):{};if(t.availableItemFlags||t.items||t.currentIndex||t.currentItemRequired){const{currentIndex:r,desiredCurrentIndex:n,currentItem:s,currentItemRequired:d,items:c}=e,p=c?c.length:0;let u,a=n;if(t.items&&!t.currentIndex&&s&&p>0&&c[r]!==s){const h=c.indexOf(s);h>=0&&(a=h)}else t.currentIndex&&(r<0&&s!==null||r>=0&&(p===0||c[r]!==s)||n===null)&&(a=r);d&&a<0&&(a=0),a<0?(a=-1,u=-1):p===0?u=-1:(u=Math.max(Math.min(p-1,a),0),u=this[ii](e,{direction:1,index:u,wrap:!1}),u<0&&(u=this[ii](e,{direction:-1,index:u-1,wrap:!1})));const l=c&&c[u]||null;Object.assign(i,{currentIndex:u,desiredCurrentIndex:a,currentItem:l})}return i}}}(function(o){return class extends o{get[G](){return Object.assign(super[G]||{},{texts:null})}[fr](e){return super[fr]?super[fr](e):(t=e).getAttribute("aria-label")||t.getAttribute("alt")||t.innerText||t.textContent||"";var t}[ye](e,t){const i=super[ye]?super[ye](e,t):{};if(t.items){const{items:r}=e,n=function(s,d){return s?Array.from(s,c=>d(c)):null}(r,this[fr]);n&&(Object.freeze(n),Object.assign(i,{texts:n}))}return i}}}(function(o){return class extends o{[vo](){if(super[vo])return super[vo]()}[Xt](){if(super[Xt])return super[Xt]()}[go](){if(super[go])return super[go]()}[xo](){if(super[xo])return super[xo]()}[Yt](){if(super[Yt])return super[Yt]()}[wo](){if(super[wo])return super[wo]()}[Oe](e){let t=!1;if(e.target===this){const i=this[T].orientation||"both",r=i==="horizontal"||i==="both",n=i==="vertical"||i==="both";switch(e.key){case"ArrowDown":n&&(t=e.altKey?this[Xt]():this[vo]());break;case"ArrowLeft":!r||e.metaKey||e.altKey||(t=this[go]());break;case"ArrowRight":!r||e.metaKey||e.altKey||(t=this[xo]());break;case"ArrowUp":n&&(t=e.altKey?this[Yt]():this[wo]());break;case"End":t=this[Xt]();break;case"Home":t=this[Yt]()}}return t||super[Oe]&&super[Oe](e)||!1}}}(Nn(function(o){return class extends o{[Oe](e){let t=!1;if(this.orientation!=="horizontal")switch(e.key){case"PageDown":t=this.pageDown();break;case"PageUp":t=this.pageUp()}return t||super[Oe]&&super[Oe](e)}get orientation(){return super.orientation||this[T]&&this[T].orientation||"both"}pageDown(){return super.pageDown&&super.pageDown(),Za(this,!0)}pageUp(){return super.pageUp&&super.pageUp(),Za(this,!1)}get[bt](){return super[bt]||Qa(this)}}}(function(o){return class extends o{constructor(){super(),Ds(this)}[Ti](e){if(super[Ti]&&super[Ti](e),e==null||e.length===0)return!1;const t=e.toLowerCase(),i=this[T].texts.findIndex(r=>r.substr(0,e.length).toLowerCase()===t);if(i>=0){const r=this[T].currentIndex;return this[W]({currentIndex:i}),this[T].currentIndex!==r}return!1}[Oe](e){let t;switch(e.key){case"Backspace":(function(i){const r=i,n=r[Jt]?r[Jt].length:0;n>0&&(r[Jt]=r[Jt].substr(0,n-1)),i[Ti](r[Jt]),Xa(i)})(this),t=!0;break;case"Escape":Ds(this);break;default:e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||function(i,r){const n=i,s=n[Jt]||"";n[Jt]=s+r,i[Ti](n[Jt]),Xa(i)}(this,e.key)}return t||super[Oe]&&super[Oe](e)}}}(na(function(o){return uh(Kc(o))}(function(o){return class extends o{constructor(){super(),this.addEventListener("mousedown",e=>{e.button===0&&(this[oe]=!0,this[Hi](e),this[oe]=!1)})}[Q](e){super[Q]&&super[Q](e),this[Ve]&&Object.assign(this.style,{touchAction:"manipulation",mozUserSelect:"none",msUserSelect:"none",webkitUserSelect:"none",userSelect:"none"})}[Hi](e){const t=e.composedPath?e.composedPath()[0]:e.target,{items:i,currentItemRequired:r}=this[T];if(i&&t instanceof Node){const n=Dc(i,t),s=n>=0?i[n]:null;(s&&!s.disabled||!s&&!r)&&(this[W]({currentIndex:n}),e.stopPropagation())}}}}(co)))))))))))))));class eu extends dh{get[G](){return Object.assign(super[G],{availableItemFlags:null,highlightCurrentItem:!0,orientation:"vertical",currentItemFocused:!1})}async flashCurrentItem(){const e=this[T].focusVisible,t=matchMedia("(pointer: fine)").matches;(e||t)&&(this[W]({highlightCurrentItem:!1}),await new Promise(r=>setTimeout(r,75)),this[W]({highlightCurrentItem:!0}),await new Promise(r=>setTimeout(r,75)))}[Q](e){super[Q](e),this[Ve]&&(this.addEventListener("disabledchange",r=>{this[oe]=!0;const n=r.target,{items:s}=this[T],d=s===null?-1:s.indexOf(n);if(d>=0){const c=this[T].availableItemFlags.slice();c[d]=!n.disabled,this[W]({availableItemFlags:c})}this[oe]=!1}),"PointerEvent"in window?this.addEventListener("pointerdown",r=>this[Hi](r)):this.addEventListener("touchstart",r=>this[Hi](r)),this.removeAttribute("tabindex"));const{currentIndex:t,items:i}=this[T];if((e.items||e.currentIndex||e.highlightCurrentItem)&&i){const{highlightCurrentItem:r}=this[T];i.forEach((n,s)=>{n.toggleAttribute("current",r&&s===t)})}(e.items||e.currentIndex||e.currentItemFocused||e.focusVisible)&&i&&i.forEach((r,n)=>{const s=n===t,d=t<0&&n===0;this[T].currentItemFocused?s||d||r.removeAttribute("tabindex"):(s||d)&&(r.tabIndex=0)})}[ee](e){if(super[ee](e),!this[Ve]&&e.currentIndex&&!this[T].currentItemFocused){const{currentItem:t}=this[T];(t instanceof HTMLElement?t:this).focus(),this[W]({currentItemFocused:!0})}}get[bt](){return this[ae].content}[ye](e,t){const i=super[ye](e,t);if(t.currentIndex&&Object.assign(i,{currentItemFocused:!1}),t.items){const{items:r}=e,n=r===null?null:r.map(s=>!s.disabled);Object.assign(i,{availableItemFlags:n})}return i}get[ce](){return Bt.html`
      <style>
        :host {
          box-sizing: border-box;
          cursor: default;
          display: inline-flex;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }

        #content {
          display: flex;
          flex: 1;
          flex-direction: column;
          max-height: 100%;
          overflow-x: hidden;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch; /* for momentum scrolling */
        }
        
        ::slotted(*) {
          flex-shrink: 0;
          outline: none;
          touch-action: manipulation;
        }

        ::slotted(option) {
          font: inherit;
          min-height: inherit;
        }
      </style>
      <div id="content" role="none">
        <slot></slot>
      </div>
    `}}const Ai=Symbol("documentMouseupListener");async function ph(o){const e=this,t=e[et].elementsFromPoint(o.clientX,o.clientY);if(e.opened){const i=t.indexOf(e[ae].source)>=0,r=e[ae].popup,n=t.indexOf(r)>=0,s=r.frame&&t.indexOf(r.frame)>=0;i?e[T].dragSelect&&(e[oe]=!0,e[W]({dragSelect:!1}),e[oe]=!1):n||s||(e[oe]=!0,await e.close(),e[oe]=!1)}}function Jn(o){o[T].opened&&o.isConnected?o[Ai]||(o[Ai]=ph.bind(o),document.addEventListener("mouseup",o[Ai])):o[Ai]&&(document.removeEventListener("mouseup",o[Ai]),o[Ai]=null)}function sa(o){return class extends o{get[G](){return Object.assign(super[G]||{},{disabled:!1})}get disabled(){return this[T].disabled}set disabled(e){this[W]({disabled:e})}[ee](e){if(super[ee]&&super[ee](e),e.disabled&&(this.toggleAttribute("disabled",this.disabled),this[oe])){const t=new CustomEvent("disabled-changed",{bubbles:!0});this.dispatchEvent(t);const i=new CustomEvent("disabledchange",{bubbles:!0});this.dispatchEvent(i)}}}}function Ya(o,e,t,i){const r=tu(o,t,i);let n=0,s=0;const d=t==="above"||t==="below";switch(t){case"above":n=r.y-e.top;break;case"below":n=e.bottom-r.y;break;case"left":s=r.x-e.left;break;case"right":s=e.right-r.x}switch(i){case"bottom":n=r.y-e.top;break;case"center":d?s=e.width:n=e.height;break;case"stretch":d?s=o.width:n=o.height;break;case"left":s=e.right-r.x;break;case"right":s=r.x-e.left;break;case"top":n=e.bottom-r.y}return n=Math.max(0,n),s=Math.max(0,s),{height:n,width:s}}function tu(o,e,t){let i=0,r=0;const n=e==="above"||e==="below";switch(e){case"above":r=o.top;break;case"below":r=o.bottom;break;case"left":case"right":i=o[e]}switch(t){case"bottom":case"top":r=o[t];break;case"left":case"right":i=o[t];break;case"center":n?i=o.left+o.width/2:r=o.top+o.height/2;break;case"stretch":n?i=o.left:r=o.top}return{x:i,y:r}}function hh(o,e,t,i){const r=function(d){const{align:c,direction:p,rightToLeft:u}=d,a="below",l={above:"above",below:"below",column:"below","column-reverse":"above",left:"left",right:"right",row:u?"left":"right","row-reverse":u?"right":"left"}[p]||a,h={above:"horizontal",below:"horizontal",left:"vertical",right:"vertical"}[l],f={horizontal:"left",vertical:"top"}[h];return{align:{horizontal:{center:"center",end:u?"left":"right",left:"left",right:"right",start:u?"right":"left",stretch:"stretch"},vertical:{bottom:"bottom",center:"center",end:"bottom",start:"top",stretch:"stretch",top:"top"}}[h][c]||f,direction:l,rightToLeft:u}}(i),n=function(d,c){const p={above:"below",below:"above",left:"right",right:"left"},u={top:"bottom",bottom:"top",left:"right",right:"left"},a=[{align:c,direction:d}];return c==="center"||c==="stretch"?a.push({align:c,direction:p[d]}):(a.push({align:u[c],direction:d}),a.push({align:c,direction:p[d]}),a.push({align:u[c],direction:p[d]})),a}(r.direction,r.align);n.sort((d,c)=>function(p,u,a,l,h){const f=Ya(a,h,p.direction,p.align),m=Ya(a,h,u.direction,u.align),v=l.width<=f.width,g=l.height<=f.height,y=v||g,b=v&&g,x=l.width<=m.width,w=l.height<=m.height,A=x||w,S=x&&w,q=f.width*f.height,P=m.width*m.height;return b&&S?0:b?-1:S?1:y&&!A?-1:A&&!y?1:y&&q>P?-1:A&&P>q?1:q>P?-1:P>q?1:0}(d,c,o,e,t));const s=n[0];return s.rect=function(d,c,p,u,a){const l=tu(d,u,a);let{x:h,y:f,bottom:m,right:v}=p,g=0,y=0,b=c.height,x=c.width;const w=u==="above"||u==="below";switch(u){case"above":y=l.y-c.height,m=l.y;break;case"below":y=l.y,f=l.y;break;case"left":g=l.x-c.width,v=l.x;break;case"right":g=l.x,h=l.x}switch(a){case"bottom":y=l.y-c.height,m=l.y;break;case"left":g=l.x,h=l.x;break;case"center":w?g=l.x-c.width/2:y=l.y-c.height/2;break;case"right":g=l.x-c.width,v=l.x;break;case"stretch":w?(g=l.x,x=d.width):(y=l.y,b=d.height);break;case"top":y=l.y,f=l.y}return g=Math.max(g,h),y=Math.max(y,f),x=Math.min(x,v-g),b=Math.min(b,m-y),new DOMRect(g,y,x,b)}(o,e,t,s.direction,s.align),s}const Gt=Symbol("implicitCloseListener");async function fh(o){const e=this,t=o.relatedTarget||document.activeElement;t instanceof Element&&!Do(e,t)&&(e[oe]=!0,await e.close({canceled:"window blur"}),e[oe]=!1)}async function mh(o){const e=this,t=o.type!=="resize"||e[T].closeOnWindowResize;!Rc(e,o)&&t&&(e[oe]=!0,await e.close({canceled:`window ${o.type}`}),e[oe]=!1)}const vh=Nn(function(o){return class extends o{get closeOnWindowResize(){return this[T].closeOnWindowResize}set closeOnWindowResize(e){this[W]({closeOnWindowResize:e})}get[G](){return Object.assign(super[G]||{},{closeOnWindowResize:!0,role:"alert"})}[Oe](e){let t=!1;return e.key==="Escape"&&(this.close({canceled:"Escape"}),t=!0),t||super.keydown&&super.keydown(e)||!1}[Q](e){if(super[Q]&&super[Q](e),this[Ve]&&this.addEventListener("blur",fh.bind(this)),e.role){const{role:t}=this[T];this.setAttribute("role",t)}}[ee](e){super[ee]&&super[ee](e),e.opened&&(this.opened?("requestIdleCallback"in window?window.requestIdleCallback:setTimeout)(()=>{var i;this.opened&&((i=this)[Gt]=mh.bind(i),window.addEventListener("blur",i[Gt]),window.addEventListener("resize",i[Gt]),window.addEventListener("scroll",i[Gt]))}):(t=this)[Gt]&&(window.removeEventListener("blur",t[Gt]),window.removeEventListener("resize",t[Gt]),window.removeEventListener("scroll",t[Gt]),t[Gt]=null));var t}get role(){return super.role}set role(e){super.role=e,this[tr]||this[W]({role:e})}}}(Gc));class aa extends vh{[Q](e){super[Q](e),e.backdropPartType&&(this[ae].backdrop.addEventListener("mousedown",Ja.bind(this)),"PointerEvent"in window||this[ae].backdrop.addEventListener("touchend",Ja))}}async function Ja(o){const e=this;e[oe]=!0,await e.close({canceled:"mousedown outside"}),e[oe]=!1,o.preventDefault(),o.stopPropagation()}const rr=Symbol("resizeListener"),gh=sa(Zc(na(Vc(co))));function es(o){const{popupAlign:e,popupDirection:t,rightToLeft:i}=o[T],r=hh(o[ae].source.getBoundingClientRect(),o[ae].popup.getBoundingClientRect(),ou(),{align:e,direction:t,rightToLeft:i});o[W]({popupLayout:r})}function el(o,e,t){if(!t||t.popupPartType){const{popupPartType:i}=e,r=o.getElementById("popup");r&&Vi(r,i)}if(!t||t.sourcePartType){const{sourcePartType:i}=e,r=o.getElementById("source");r&&Vi(r,i)}}function ou(){const o=window.visualViewport;return o?new DOMRect(o.offsetLeft,o.offsetTop,o.width,o.height):new DOMRect(0,0,window.innerWidth,window.innerHeight)}const bh=oa(Nn(function(o){return class extends o{connectedCallback(){super.connectedCallback(),Jn(this)}get[G](){return Object.assign(super[G]||{},{dragSelect:!0})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),Jn(this)}[ee](e){super[ee](e),e.opened&&Jn(this)}[ye](e,t){const i=super[ye](e,t);return t.opened&&e.opened&&Object.assign(i,{dragSelect:!0}),i}}}(class extends gh{get[G](){return Object.assign(super[G],{ariaHasPopup:"true",popupAlign:"start",popupDirection:"column",popupLayout:null,popupPartType:aa,sourcePartType:"div"})}get[ri](){return this[ae].source}get frame(){return this[ae].popup.frame}get horizontalAlign(){return this[T].popupAlign}set horizontalAlign(o){console.warn('The "horizontalAlign" property has been renamed to "popupAlign"; the "horizontal-align" attribute is now "popup-align".'),this[W]({popupAlign:o})}get popupAlign(){return this[T].popupAlign}set popupAlign(o){this[W]({popupAlign:o})}get popupDirection(){return this[T].popupDirection}set popupDirection(o){this[W]({popupDirection:o})}get popupPosition(){return this[T].popupPosition}set popupPosition(o){console.warn('The "popupPosition" property has been renamed to "popupDirection"; the "popup-position" attribute is now "popup-direction".'),this[W]({popupPosition:o})}get popupPartType(){return this[T].popupPartType}set popupPartType(o){this[W]({popupPartType:o})}[Q](o){if(super[Q](o),el(this[et],this[T],o),this[Ve]||o.ariaHasPopup){const{ariaHasPopup:e}=this[T];e===null?this[ri].removeAttribute("aria-haspopup"):this[ri].setAttribute("aria-haspopup",this[T].ariaHasPopup)}if(o.popupPartType&&(this[ae].popup.addEventListener("open",()=>{this.opened||(this[oe]=!0,this.open(),this[oe]=!1)}),this[ae].popup.addEventListener("close",e=>{if(!this.closed){this[oe]=!0;const t=e.detail.closeResult;this.close(t),this[oe]=!1}})),o.opened||o.popupLayout){const{opened:e,popupLayout:t}=this[T];if(e)if(t){const i=this[ae].popup,r=function(n){const{align:s,direction:d,rect:c}=n,p=ou(),u={},a=d==="above"||d==="below";switch(d){case"above":u.bottom=p.bottom-c.bottom+"px";break;case"below":u.top=`${c.top}px`;break;case"left":u.right=p.right-c.right+"px";break;case"right":u.left=`${c.left}px`}switch(s){case"bottom":u.bottom=p.bottom-c.bottom+"px";break;case"center":case"stretch":a?(u.left=`${c.left}px`,u.right=p.right-c.right+"px"):(u.bottom=p.bottom-c.bottom+"px",u.top=`${c.top}px`);break;case"left":u.left=`${c.left}px`;break;case"right":u.right=p.right-c.right+"px";break;case"top":u.top=`${c.top}px`}return u}(t);Object.assign(i.style,r,{opacity:""})}else Object.assign(this[ae].popup.style,{bottom:"",left:"",opacity:0,right:"",top:""});else Object.assign(this[ae].popup.style,{bottom:"",left:"",opacity:"",right:"",top:""})}if(o.opened){const{opened:e}=this[T];this[ae].popup.opened=e}if(o.disabled&&"disabled"in this[ae].source){const{disabled:e}=this[T];this[ae].source.disabled=e}if(o.popupLayout){const{popupLayout:e}=this[T];if(e){const{align:t,direction:i}=e,r=this[ae].popup;"position"in r&&(r.position=i),"align"in r&&(r.align=t)}}}[ee](o){super[ee](o);const{opened:e}=this[T];var t;o.opened?e?(t=this,setTimeout(()=>{t[T].opened&&(es(t),function(i){const r=i;r[rr]=()=>{es(i)},(window.visualViewport||window).addEventListener("resize",r[rr])}(t))})):function(i){const r=i;r[rr]&&((window.visualViewport||window).removeEventListener("resize",r[rr]),r[rr]=null)}(this):o.popupLayout&&this[T].opened&&!this[T].popupLayout&&es(this)}get sourcePartType(){return this[T].sourcePartType}set sourcePartType(o){this[W]({sourcePartType:o})}[ye](o,e){const t=super[ye](o,e);return(e.opened&&!o.opened||o.opened&&(e.popupAlign||e.popupDirection||e.rightToLeft))&&Object.assign(t,{popupLayout:null}),t}get[ce](){const o=super[ce];return o.content.append(Ce.html`
      <style>
        :host {
          display: inline-block;
          position: relative;
        }

        [part~="source"] {
          height: 100%;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          width: 100%;
        }

        [part~="popup"] {
          max-height: 100%;
          max-width: 100%;
          outline: none;
          position: fixed;
        }
      </style>
      <div id="source" part="source">
        <slot name="source"></slot>
      </div>
      <div id="popup" part="popup" exportparts="backdrop, frame" role="none">
        <slot></slot>
      </div>
    `),el(o.content,this[T]),o}})));async function yh(o){const e=this,t=o.relatedTarget||document.activeElement;t instanceof Element&&!Do(e,t)&&(e[oe]=!0,await e.close({canceled:"blur"}),e[oe]=!1)}const Ei=Symbol("documentMousemoveListener");function xh(o){const e=this,{hasHoveredOverItemSinceOpened:t,opened:i}=e[T];if(i){const r=o.composedPath?o.composedPath()[0]:o.target,n=e.items;if(r&&r instanceof Node&&n){const s=Dc(n,r),d=n[s],c=d&&!d.disabled?s:-1;(t||c>=0)&&c!==e[T].currentIndex&&(e[oe]=!0,e[W]({currentIndex:c}),c>=0&&!t&&e[W]({hasHoveredOverItemSinceOpened:!0}),e[oe]=!1)}}}function ts(o){o[T].opened&&o.isConnected?o[Ei]||(o[Ei]=xh.bind(o),document.addEventListener("mousemove",o[Ei])):o[Ei]&&(document.removeEventListener("mousemove",o[Ei]),o[Ei]=null)}async function tl(o){const e=o[oe],t=o[T].currentIndex>=0,i=o.items;if(i){const r=t?i[o[T].currentIndex]:void 0,n=o[T].popupList;t&&"flashCurrentItem"in n&&await n.flashCurrentItem();const s=o[oe];o[oe]=e,await o.close(r),o[oe]=s}}const wh=function(o){return class extends o{connectedCallback(){super.connectedCallback(),ts(this)}get[G](){return Object.assign(super[G]||{},{currentIndex:-1,hasHoveredOverItemSinceOpened:!1,popupList:null})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),ts(this)}[Oe](e){let t=!1;return e.key==="Enter"&&this.opened&&(tl(this),t=!0),t||super[Oe]&&super[Oe](e)||!1}[Q](e){if(super[Q]&&super[Q](e),e.popupList){const{popupList:t}=this[T];t&&(t.addEventListener("mouseup",async i=>{const r=this[T].currentIndex;this[T].dragSelect||r>=0?(i.stopPropagation(),this[oe]=!0,await tl(this),this[oe]=!1):i.stopPropagation()}),t.addEventListener("currentindexchange",i=>{this[oe]=!0;const r=i;this[W]({currentIndex:r.detail.currentIndex}),this[oe]=!1}))}if(e.currentIndex||e.popupList){const{currentIndex:t,popupList:i}=this[T];i&&"currentIndex"in i&&(i.currentIndex=t)}}[ee](e){if(super[ee]&&super[ee](e),e.opened){if(this[T].opened){const{popupList:t}=this[T];t.scrollCurrentItemIntoView&&setTimeout(()=>{t.scrollCurrentItemIntoView()})}ts(this)}}[ye](e,t){const i=super[ye]?super[ye](e,t):{};return t.opened&&e.opened&&Object.assign(i,{hasHoveredOverItemSinceOpened:!1}),i}}}(class extends bh{get[G](){return Object.assign(super[G],{sourcePartType:"button"})}[Oe](o){let e;switch(o.key){case" ":case"ArrowDown":case"ArrowUp":this.closed&&(this.open(),e=!0);break;case"Enter":this.opened||(this.open(),e=!0);break;case"Escape":this.opened&&(this.close({canceled:"Escape"}),e=!0)}if(e=super[Oe]&&super[Oe](o),!e&&this.opened&&!o.metaKey&&!o.altKey)switch(o.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":case"PageDown":case"PageUp":case" ":e=!0}return e}[Q](o){if(super[Q](o),this[Ve]&&(this.addEventListener("blur",yh.bind(this)),this[ae].source.addEventListener("focus",async e=>{const t=Rc(this[ae].popup,e),i=this[T].popupHeight!==null;!t&&this.opened&&i&&(this[oe]=!0,await this.close(),this[oe]=!1)})),o.opened){const{opened:e}=this[T];this.toggleAttribute("opened",e)}o.sourcePartType&&this[ae].source.addEventListener("mousedown",e=>{if(this.disabled)return void e.preventDefault();const t=e;t.button&&t.button!==0||(setTimeout(()=>{this.opened||(this[oe]=!0,this.open(),this[oe]=!1)}),e.stopPropagation())}),o.popupPartType&&this[ae].popup.removeAttribute("tabindex")}get[ce](){const o=super[ce];return o.content.append(Ce.html`
        <style>
          [part~="source"] {
            cursor: default;
            outline: none;
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
            -moz-user-select: none;
            -ms-user-select: none;
            -webkit-user-select: none;
            user-select: none;
          }

          :host([opened][focus-visible]) {
            outline: none;
          }
        </style>
      `),o}});class Ah extends wh{get[G](){return Object.assign(super[G],{menuPartType:eu})}get items(){const e=this[ae]&&this[ae].menu;return e?e.items:null}get menuPartType(){return this[T].menuPartType}set menuPartType(e){this[W]({menuPartType:e})}[Q](e){if(super[Q](e),ol(this[et],this[T],e),e.menuPartType&&(this[ae].menu.addEventListener("blur",async t=>{const i=t.relatedTarget||document.activeElement;this.opened&&!Do(this[ae].menu,i)&&(this[oe]=!0,await this.close(),this[oe]=!1)}),this[ae].menu.addEventListener("mousedown",t=>{t.button===0&&this.opened&&(t.stopPropagation(),t.preventDefault())})),e.opened){const{opened:t}=this[T];this[ae].source.setAttribute("aria-expanded",t.toString())}}[ee](e){super[ee](e),e.menuPartType&&this[W]({popupList:this[ae].menu})}[ye](e,t){const i=super[ye](e,t);return t.opened&&!e.opened&&Object.assign(i,{currentIndex:-1}),i}get[ce](){const e=super[ce],t=e.content.querySelector("slot:not([name])");return t&&t.replaceWith(Ce.html`
        <div id="menu" part="menu">
          <slot></slot>
        </div>
      `),ol(e.content,this[T]),e.content.append(Ce.html`
      <style>
        [part~="menu"] {
          max-height: 100%;
        }
      </style>
    `),e}}function ol(o,e,t){if(!t||t.menuPartType){const{menuPartType:i}=e,r=o.getElementById("menu");r&&Vi(r,i)}}const Eh=sa(co);class iu extends Eh{get[G](){return Object.assign(super[G],{direction:"down"})}get direction(){return this[T].direction}set direction(e){this[W]({direction:e})}[Q](e){if(super[Q](e),e.direction){const{direction:t}=this[T];this[ae].downIcon.style.display=t==="down"?"block":"none",this[ae].upIcon.style.display=t==="up"?"block":"none"}}get[ce](){return Bt.html`
      <style>
        :host {
          display: inline-block;
        }
      </style>
      <div id="downIcon" part="toggle-icon down-icon">
        <slot name="down-icon"></slot>
      </div>
      <div id="upIcon" part="toggle-icon up-icon">
        <slot name="up-icon"></slot>
      </div>
    `}}function il(o,e,t){if(!t||t.popupTogglePartType){const{popupTogglePartType:i}=e,r=o.getElementById("popupToggle");r&&Vi(r,i)}}class _h extends eu{get[ce](){const e=super[ce];return e.content.append(Ce.html`
        <style>
          :host ::slotted(*) {
            padding: 0.25em 1em;
          }
          
          :host ::slotted([current]) {
            background: highlight;
            color: highlighttext;
          }

          @media (pointer: coarse) {
            ::slotted(*) {
              padding: 1em;
            }
          }
        </style>
      `),e}}class Oh extends iu{get[ce](){const e=super[ce],t=e.content.getElementById("downIcon"),i=Ce.html`
      <svg
        id="downIcon"
        part="toggle-icon down-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 5"
      >
        <path d="M 0 0 l5 5 5 -5 z" />
      </svg>
    `.firstElementChild;t&&i&&ks(t,i);const r=e.content.getElementById("upIcon"),n=Ce.html`
      <svg
        id="upIcon"
        part="toggle-icon up-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 5"
      >
        <path d="M 0 5 l5 -5 5 5 z" />
      </svg>
    `.firstElementChild;return r&&n&&ks(r,n),e.content.append(Ce.html`
        <style>
          :host {
            align-items: center;
            display: inline-flex;
            padding: 2px;
          }

          :host(:not([disabled])):hover {
            background: #eee;
          }

          [part~="toggle-icon"] {
            fill: currentColor;
            height: 10px;
            margin: 0.25em;
            width: 10px;
          }
        </style>
      `),e}}class qh extends ta{}class Ih extends aa{get[G](){return Object.assign(super[G],{backdropPartType:qh,framePartType:ra})}}class Sh extends function(e){return class extends e{get[G](){return Object.assign(super[G]||{},{popupTogglePartType:iu})}get popupTogglePartType(){return this[T].popupTogglePartType}set popupTogglePartType(t){this[W]({popupTogglePartType:t})}[Q](t){if(super[Q](t),il(this[et],this[T],t),t.popupDirection||t.popupTogglePartType){const{popupDirection:i}=this[T],r=i==="above"||i==="column-reverse"?"up":"down",n=this[ae].popupToggle;"direction"in n&&(n.direction=r)}if(t.disabled){const{disabled:i}=this[T];this[ae].popupToggle.disabled=i}}get[ce](){const t=super[ce],i=t.content.querySelector('[part~="source"]');return i&&i.append(Ce.html`
          <div
            id="popupToggle"
            part="popup-toggle"
            exportparts="toggle-icon, down-icon, up-icon"
            tabindex="-1"
          ></div>
      `),il(t.content,this[T]),t.content.append(Ce.html`
      <style>
        [part~="popup-toggle"] {
          outline: none;
        }

        [part~="source"] {
          align-items: center;
          display: flex;
        }
      </style>
    `),t}}}(Ah){get[G](){return Object.assign(super[G],{menuPartType:_h,popupPartType:Ih,popupTogglePartType:Oh,sourcePartType:Xc})}get[ce](){const e=super[ce];return e.content.append(Ce.html`
        <style>
          [part~="menu"] {
            background: window;
            border: none;
            padding: 0.5em 0;
          }
        </style>
      `),e}}customElements.define("elix-menu-button",class extends Sh{});class kh extends function(e){return class extends e{constructor(){super();const t=this;!this[Xo]&&t.attachInternals&&(this[Xo]=t.attachInternals())}attributeChangedCallback(t,i,r){if(t==="current"){const n=Ir(t,r);this.current!==n&&(this.current=n)}else super.attributeChangedCallback(t,i,r)}get[G](){return Object.assign(super[G]||{},{current:!1})}[Q](t){if(super[Q](t),t.current){const{current:i}=this[T];Sr(this,"current",i)}}[ee](t){if(super[ee]&&super[ee](t),t.current){const{current:i}=this[T],r=new CustomEvent("current-changed",{bubbles:!0,detail:{current:i}});this.dispatchEvent(r);const n=new CustomEvent("currentchange",{bubbles:!0,detail:{current:i}});this.dispatchEvent(n)}}get current(){return this[T].current}set current(t){this[W]({current:t})}}}(sa(function(e){return class extends e{constructor(){super();const t=this;!this[Xo]&&t.attachInternals&&(this[Xo]=t.attachInternals())}get[G](){return Object.assign(super[G]||{},{selected:!1})}[Q](t){if(super[Q](t),t.selected){const{selected:i}=this[T];Sr(this,"selected",i)}}[ee](t){if(super[ee]&&super[ee](t),t.selected){const{selected:i}=this[T],r=new CustomEvent("selected-changed",{bubbles:!0,detail:{selected:i}});this.dispatchEvent(r);const n=new CustomEvent("selectedchange",{bubbles:!0,detail:{selected:i}});this.dispatchEvent(n)}}get selected(){return this[T].selected}set selected(t){this[W]({selected:t})}}}(co))){}class Ph extends kh{get[ce](){return Bt.html`
      <style>
        :host {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 10pt;
          white-space: nowrap;
        }

        :host([disabled]) {
          opacity: 0.5;
        }

        #checkmark {
          height: 1em;
          visibility: hidden;
          width: 1em;
        }

        :host([selected]) #checkmark {
          visibility: visible;
        }
      </style>
      <svg id="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="4 6 18 12">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
      </svg>
      <slot></slot>
    `}}customElements.define("elix-menu-item",class extends Ph{});class Nh extends co{get disabled(){return!0}[Q](e){super[Q](e),this[Ve]&&this.setAttribute("aria-hidden","true")}}class Ch extends Nh{get[ce](){return Bt.html`
      <style>
        :host {
          padding: 0 !important;
        }

        hr {
          border-bottom-width: 0px;
          border-color: #fff; /* Ends up as light gray */
          border-top-width: 1px;
          margin: 0.25em 0;
        }
      </style>
      <hr>
    `}}customElements.define("elix-menu-separator",class extends Ch{});const pn=Symbol("timeout"),Th=na(function(o){return class extends o{get[ji](){return super[ji]||this}[Q](e){super[Q]&&super[Q](e),this[Ve]&&(this[ji]===this?this:this[et]).addEventListener("transitionend",t=>{const i=this[T].effectEndTarget||this[ji];t.target===i&&this[W]({effectPhase:"after"})})}[ee](e){if(super[ee]&&super[ee](e),e.effect||e.effectPhase){const{effect:t,effectPhase:i}=this[T],r=new CustomEvent("effect-phase-changed",{bubbles:!0,detail:{effect:t,effectPhase:i}});this.dispatchEvent(r);const n=new CustomEvent("effectphasechange",{bubbles:!0,detail:{effect:t,effectPhase:i}});this.dispatchEvent(n),t&&(i!=="after"&&this.offsetHeight,i==="before"&&this[W]({effectPhase:"during"}))}}async[Js](e){await this[W]({effect:e,effectPhase:"before"})}}}(aa));class Dh extends Th{constructor(){super(),this.addEventListener("mouseout",()=>{rl(this)}),this.addEventListener("mouseover",()=>{ru(this)})}attributeChangedCallback(e,t,i){e==="duration"?this.duration=Number(i):super.attributeChangedCallback(e,t,i)}get[G](){return Object.assign(super[G],{duration:null,fromEdge:"bottom"})}get duration(){return this[T].duration}set duration(e){isNaN(e)||this[W]({duration:e})}get[ji](){return this[ae].frame}get fromEdge(){return this[T].fromEdge}set fromEdge(e){this[W]({fromEdge:e})}[Q](e){if(super[Q](e),e.fromEdge){const t={bottom:{alignItems:"center",justifyContent:"flex-end"},"bottom-left":{alignItems:"flex-start",justifyContent:"flex-end"},"bottom-right":{alignItems:"flex-end",justifyContent:"flex-end"},top:{alignItems:"center",justifyContent:null},"top-left":{alignItems:"flex-start",justifyContent:null},"top-right":{alignItems:"flex-end",justifyContent:null}};Object.assign(this.style,t[this[T].fromEdge])}if(e.effect||e.effectPhase||e.fromEdge||e.rightToLeft){const{effect:t,effectPhase:i,fromEdge:r,rightToLeft:n}=this[T],s={"bottom-left":"bottom-right","bottom-right":"bottom-left","top-left":"top-right","top-right":"top-left"},d=n&&s[r]||r,c={bottom:"translateY(100%)","bottom-left":"translateX(-100%)","bottom-right":"translateX(100%)",top:"translateY(-100%)","top-left":"translateX(-100%)","top-right":"translateX(100%)"},p={bottom:"translateY(0)","bottom-left":"translateX(0)","bottom-right":"translateX(0)",top:"translateY(0)","top-left":"translateX(0)","top-right":"translateX(0)"},u=t==="open"&&i!=="before"||t==="close"&&i==="before",a=u?1:0,l=u?p[d]:c[d];Object.assign(this[ae].frame.style,{opacity:a,transform:l})}}[ee](e){super[ee](e),rl(this)}}function ru(o){const e=o;e[pn]&&(clearTimeout(e[pn]),e[pn]=null)}function rl(o){o.opened&&function(e){ru(e);const t=e[T].duration;t!==null&&t>0&&(e[pn]=setTimeout(()=>{e.close()},t))}(o)}class Rh extends Dh{get[G](){return Object.assign(super[G],{framePartType:ra})}get[ce](){const e=super[ce];return e.content.append(Ce.html`
        <style>
          :host {
            align-items: initial;
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: initial;
            left: 0;
            outline: none;
            pointer-events: none;
            top: 0;
            -webkit-tap-highlight-color: transparent;
            width: 100%;
          }

          [part~="frame"] {
            margin: 1em;
            transition-duration: 0.25s;
            transition-property: opacity, transform;
            will-change: opacity, transform;
          }
        </style>
      `),e}}/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */var nl,nr;function le(o,e,t,i){var r,n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,i);else for(var d=o.length-1;d>=0;d--)(r=o[d])&&(s=(n<3?r(s):n>3?r(e,t,s):r(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}customElements.define("elix-toast",class extends Rh{}),nl=typeof self!="undefined"?self:void 0,nr=function(){return function(o){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i,l:!1,exports:{}};return o[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=o,t.c=e,t.d=function(i,r,n){t.o(i,r)||Object.defineProperty(i,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(i){var r=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(r,"a",r),r},t.o=function(i,r){return Object.prototype.hasOwnProperty.call(i,r)},t.p="",t(t.s=109)}([function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=t(17),r=t(18),n=t(19),s=t(45),d=t(46),c=t(47),p=t(48),u=t(49),a=t(12),l=t(32),h=t(33),f=t(31),m=t(1),v={Scope:m.Scope,create:m.create,find:m.find,query:m.query,register:m.register,Container:i.default,Format:r.default,Leaf:n.default,Embed:p.default,Scroll:s.default,Block:c.default,Inline:d.default,Text:u.default,Attributor:{Attribute:a.default,Class:l.default,Style:h.default,Store:f.default}};e.default=v},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,h){l.__proto__=h}||function(l,h){for(var f in h)h.hasOwnProperty(f)&&(l[f]=h[f])},function(l,h){function f(){this.constructor=l}i(l,h),l.prototype=h===null?Object.create(h):(f.prototype=h.prototype,new f)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(l){function h(f){var m=this;return f="[Parchment] "+f,(m=l.call(this,f)||this).message=f,m.name=m.constructor.name,m}return r(h,l),h}(Error);e.ParchmentError=n;var s,d={},c={},p={},u={};function a(l,h){var f;if(h===void 0&&(h=s.ANY),typeof l=="string")f=u[l]||d[l];else if(l instanceof Text||l.nodeType===Node.TEXT_NODE)f=u.text;else if(typeof l=="number")l&s.LEVEL&s.BLOCK?f=u.block:l&s.LEVEL&s.INLINE&&(f=u.inline);else if(l instanceof HTMLElement){var m=(l.getAttribute("class")||"").split(/\s+/);for(var v in m)if(f=c[m[v]])break;f=f||p[l.tagName]}return f==null?null:h&s.LEVEL&f.scope&&h&s.TYPE&f.scope?f:null}e.DATA_KEY="__blot",function(l){l[l.TYPE=3]="TYPE",l[l.LEVEL=12]="LEVEL",l[l.ATTRIBUTE=13]="ATTRIBUTE",l[l.BLOT=14]="BLOT",l[l.INLINE=7]="INLINE",l[l.BLOCK=11]="BLOCK",l[l.BLOCK_BLOT=10]="BLOCK_BLOT",l[l.INLINE_BLOT=6]="INLINE_BLOT",l[l.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",l[l.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",l[l.ANY=15]="ANY"}(s=e.Scope||(e.Scope={})),e.create=function(l,h){var f=a(l);if(f==null)throw new n("Unable to create "+l+" blot");var m=f,v=l instanceof Node||l.nodeType===Node.TEXT_NODE?l:m.create(h);return new m(v,h)},e.find=function l(h,f){return f===void 0&&(f=!1),h==null?null:h[e.DATA_KEY]!=null?h[e.DATA_KEY].blot:f?l(h.parentNode,f):null},e.query=a,e.register=function l(){for(var h=[],f=0;f<arguments.length;f++)h[f]=arguments[f];if(h.length>1)return h.map(function(g){return l(g)});var m=h[0];if(typeof m.blotName!="string"&&typeof m.attrName!="string")throw new n("Invalid definition");if(m.blotName==="abstract")throw new n("Cannot register abstract class");if(u[m.blotName||m.attrName]=m,typeof m.keyName=="string")d[m.keyName]=m;else if(m.className!=null&&(c[m.className]=m),m.tagName!=null){Array.isArray(m.tagName)?m.tagName=m.tagName.map(function(g){return g.toUpperCase()}):m.tagName=m.tagName.toUpperCase();var v=Array.isArray(m.tagName)?m.tagName:[m.tagName];v.forEach(function(g){p[g]!=null&&m.className!=null||(p[g]=m)})}return m}},function(o,e,t){var i=t(51),r=t(11),n=t(3),s=t(20),d=String.fromCharCode(0),c=function(p){Array.isArray(p)?this.ops=p:p!=null&&Array.isArray(p.ops)?this.ops=p.ops:this.ops=[]};c.prototype.insert=function(p,u){var a={};return p.length===0?this:(a.insert=p,u!=null&&typeof u=="object"&&Object.keys(u).length>0&&(a.attributes=u),this.push(a))},c.prototype.delete=function(p){return p<=0?this:this.push({delete:p})},c.prototype.retain=function(p,u){if(p<=0)return this;var a={retain:p};return u!=null&&typeof u=="object"&&Object.keys(u).length>0&&(a.attributes=u),this.push(a)},c.prototype.push=function(p){var u=this.ops.length,a=this.ops[u-1];if(p=n(!0,{},p),typeof a=="object"){if(typeof p.delete=="number"&&typeof a.delete=="number")return this.ops[u-1]={delete:a.delete+p.delete},this;if(typeof a.delete=="number"&&p.insert!=null&&(u-=1,typeof(a=this.ops[u-1])!="object"))return this.ops.unshift(p),this;if(r(p.attributes,a.attributes)){if(typeof p.insert=="string"&&typeof a.insert=="string")return this.ops[u-1]={insert:a.insert+p.insert},typeof p.attributes=="object"&&(this.ops[u-1].attributes=p.attributes),this;if(typeof p.retain=="number"&&typeof a.retain=="number")return this.ops[u-1]={retain:a.retain+p.retain},typeof p.attributes=="object"&&(this.ops[u-1].attributes=p.attributes),this}}return u===this.ops.length?this.ops.push(p):this.ops.splice(u,0,p),this},c.prototype.chop=function(){var p=this.ops[this.ops.length-1];return p&&p.retain&&!p.attributes&&this.ops.pop(),this},c.prototype.filter=function(p){return this.ops.filter(p)},c.prototype.forEach=function(p){this.ops.forEach(p)},c.prototype.map=function(p){return this.ops.map(p)},c.prototype.partition=function(p){var u=[],a=[];return this.forEach(function(l){(p(l)?u:a).push(l)}),[u,a]},c.prototype.reduce=function(p,u){return this.ops.reduce(p,u)},c.prototype.changeLength=function(){return this.reduce(function(p,u){return u.insert?p+s.length(u):u.delete?p-u.delete:p},0)},c.prototype.length=function(){return this.reduce(function(p,u){return p+s.length(u)},0)},c.prototype.slice=function(p,u){p=p||0,typeof u!="number"&&(u=1/0);for(var a=[],l=s.iterator(this.ops),h=0;h<u&&l.hasNext();){var f;h<p?f=l.next(p-h):(f=l.next(u-h),a.push(f)),h+=s.length(f)}return new c(a)},c.prototype.compose=function(p){var u=s.iterator(this.ops),a=s.iterator(p.ops),l=[],h=a.peek();if(h!=null&&typeof h.retain=="number"&&h.attributes==null){for(var f=h.retain;u.peekType()==="insert"&&u.peekLength()<=f;)f-=u.peekLength(),l.push(u.next());h.retain-f>0&&a.next(h.retain-f)}for(var m=new c(l);u.hasNext()||a.hasNext();)if(a.peekType()==="insert")m.push(a.next());else if(u.peekType()==="delete")m.push(u.next());else{var v=Math.min(u.peekLength(),a.peekLength()),g=u.next(v),y=a.next(v);if(typeof y.retain=="number"){var b={};typeof g.retain=="number"?b.retain=v:b.insert=g.insert;var x=s.attributes.compose(g.attributes,y.attributes,typeof g.retain=="number");if(x&&(b.attributes=x),m.push(b),!a.hasNext()&&r(m.ops[m.ops.length-1],b)){var w=new c(u.rest());return m.concat(w).chop()}}else typeof y.delete=="number"&&typeof g.retain=="number"&&m.push(y)}return m.chop()},c.prototype.concat=function(p){var u=new c(this.ops.slice());return p.ops.length>0&&(u.push(p.ops[0]),u.ops=u.ops.concat(p.ops.slice(1))),u},c.prototype.diff=function(p,u){if(this.ops===p.ops)return new c;var a=[this,p].map(function(v){return v.map(function(g){if(g.insert!=null)return typeof g.insert=="string"?g.insert:d;throw new Error("diff() called "+(v===p?"on":"with")+" non-document")}).join("")}),l=new c,h=i(a[0],a[1],u),f=s.iterator(this.ops),m=s.iterator(p.ops);return h.forEach(function(v){for(var g=v[1].length;g>0;){var y=0;switch(v[0]){case i.INSERT:y=Math.min(m.peekLength(),g),l.push(m.next(y));break;case i.DELETE:y=Math.min(g,f.peekLength()),f.next(y),l.delete(y);break;case i.EQUAL:y=Math.min(f.peekLength(),m.peekLength(),g);var b=f.next(y),x=m.next(y);r(b.insert,x.insert)?l.retain(y,s.attributes.diff(b.attributes,x.attributes)):l.push(x).delete(y)}g-=y}}),l.chop()},c.prototype.eachLine=function(p,u){u=u||`
`;for(var a=s.iterator(this.ops),l=new c,h=0;a.hasNext();){if(a.peekType()!=="insert")return;var f=a.peek(),m=s.length(f)-a.peekLength(),v=typeof f.insert=="string"?f.insert.indexOf(u,m)-m:-1;if(v<0)l.push(a.next());else if(v>0)l.push(a.next(v));else{if(p(l,a.next(1).attributes||{},h)===!1)return;h+=1,l=new c}}l.length()>0&&p(l,{},h)},c.prototype.transform=function(p,u){if(u=!!u,typeof p=="number")return this.transformPosition(p,u);for(var a=s.iterator(this.ops),l=s.iterator(p.ops),h=new c;a.hasNext()||l.hasNext();)if(a.peekType()!=="insert"||!u&&l.peekType()==="insert")if(l.peekType()==="insert")h.push(l.next());else{var f=Math.min(a.peekLength(),l.peekLength()),m=a.next(f),v=l.next(f);if(m.delete)continue;v.delete?h.push(v):h.retain(f,s.attributes.transform(m.attributes,v.attributes,u))}else h.retain(s.length(a.next()));return h.chop()},c.prototype.transformPosition=function(p,u){u=!!u;for(var a=s.iterator(this.ops),l=0;a.hasNext()&&l<=p;){var h=a.peekLength(),f=a.peekType();a.next(),f!=="delete"?(f==="insert"&&(l<p||!u)&&(p+=h),l+=h):p-=Math.min(h,p-l)}return p},o.exports=c},function(o,e){var t=Object.prototype.hasOwnProperty,i=Object.prototype.toString,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,s=function(u){return typeof Array.isArray=="function"?Array.isArray(u):i.call(u)==="[object Array]"},d=function(u){if(!u||i.call(u)!=="[object Object]")return!1;var a,l=t.call(u,"constructor"),h=u.constructor&&u.constructor.prototype&&t.call(u.constructor.prototype,"isPrototypeOf");if(u.constructor&&!l&&!h)return!1;for(a in u);return a===void 0||t.call(u,a)},c=function(u,a){r&&a.name==="__proto__"?r(u,a.name,{enumerable:!0,configurable:!0,value:a.newValue,writable:!0}):u[a.name]=a.newValue},p=function(u,a){if(a==="__proto__"){if(!t.call(u,a))return;if(n)return n(u,a).value}return u[a]};o.exports=function u(){var a,l,h,f,m,v,g=arguments[0],y=1,b=arguments.length,x=!1;for(typeof g=="boolean"&&(x=g,g=arguments[1]||{},y=2),(g==null||typeof g!="object"&&typeof g!="function")&&(g={});y<b;++y)if((a=arguments[y])!=null)for(l in a)h=p(g,l),g!==(f=p(a,l))&&(x&&f&&(d(f)||(m=s(f)))?(m?(m=!1,v=h&&s(h)?h:[]):v=h&&d(h)?h:{},c(g,{name:l,newValue:u(x,v,f)})):f!==void 0&&c(g,{name:l,newValue:f}));return g}},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BlockEmbed=e.bubbleFormats=void 0;var i=function(){function y(b,x){for(var w=0;w<x.length;w++){var A=x[w];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(b,A.key,A)}}return function(b,x,w){return x&&y(b.prototype,x),w&&y(b,w),b}}(),r=function y(b,x,w){b===null&&(b=Function.prototype);var A=Object.getOwnPropertyDescriptor(b,x);if(A===void 0){var S=Object.getPrototypeOf(b);return S===null?void 0:y(S,x,w)}if("value"in A)return A.value;var q=A.get;return q!==void 0?q.call(w):void 0},n=a(t(3)),s=a(t(2)),d=a(t(0)),c=a(t(16)),p=a(t(6)),u=a(t(7));function a(y){return y&&y.__esModule?y:{default:y}}function l(y,b){if(!(y instanceof b))throw new TypeError("Cannot call a class as a function")}function h(y,b){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||typeof b!="object"&&typeof b!="function"?y:b}function f(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(y,b):y.__proto__=b)}var m=function(y){function b(){return l(this,b),h(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return f(b,y),i(b,[{key:"attach",value:function(){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"attach",this).call(this),this.attributes=new d.default.Attributor.Store(this.domNode)}},{key:"delta",value:function(){return new s.default().insert(this.value(),(0,n.default)(this.formats(),this.attributes.values()))}},{key:"format",value:function(x,w){var A=d.default.query(x,d.default.Scope.BLOCK_ATTRIBUTE);A!=null&&this.attributes.attribute(A,w)}},{key:"formatAt",value:function(x,w,A,S){this.format(A,S)}},{key:"insertAt",value:function(x,w,A){if(typeof w=="string"&&w.endsWith(`
`)){var S=d.default.create(v.blotName);this.parent.insertBefore(S,x===0?this:this.next),S.insertAt(0,w.slice(0,-1))}else r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertAt",this).call(this,x,w,A)}}]),b}(d.default.Embed);m.scope=d.default.Scope.BLOCK_BLOT;var v=function(y){function b(x){l(this,b);var w=h(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,x));return w.cache={},w}return f(b,y),i(b,[{key:"delta",value:function(){return this.cache.delta==null&&(this.cache.delta=this.descendants(d.default.Leaf).reduce(function(x,w){return w.length()===0?x:x.insert(w.value(),g(w))},new s.default).insert(`
`,g(this))),this.cache.delta}},{key:"deleteAt",value:function(x,w){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"deleteAt",this).call(this,x,w),this.cache={}}},{key:"formatAt",value:function(x,w,A,S){w<=0||(d.default.query(A,d.default.Scope.BLOCK)?x+w===this.length()&&this.format(A,S):r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"formatAt",this).call(this,x,Math.min(w,this.length()-x-1),A,S),this.cache={})}},{key:"insertAt",value:function(x,w,A){if(A!=null)return r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertAt",this).call(this,x,w,A);if(w.length!==0){var S=w.split(`
`),q=S.shift();q.length>0&&(x<this.length()-1||this.children.tail==null?r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertAt",this).call(this,Math.min(x,this.length()-1),q):this.children.tail.insertAt(this.children.tail.length(),q),this.cache={});var P=this;S.reduce(function(_,I){return(P=P.split(_,!0)).insertAt(0,I),I.length},x+q.length)}}},{key:"insertBefore",value:function(x,w){var A=this.children.head;r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertBefore",this).call(this,x,w),A instanceof c.default&&A.remove(),this.cache={}}},{key:"length",value:function(){return this.cache.length==null&&(this.cache.length=r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"length",this).call(this)+1),this.cache.length}},{key:"moveChildren",value:function(x,w){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"moveChildren",this).call(this,x,w),this.cache={}}},{key:"optimize",value:function(x){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"optimize",this).call(this,x),this.cache={}}},{key:"path",value:function(x){return r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"path",this).call(this,x,!0)}},{key:"removeChild",value:function(x){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"removeChild",this).call(this,x),this.cache={}}},{key:"split",value:function(x){var w=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(w&&(x===0||x>=this.length()-1)){var A=this.clone();return x===0?(this.parent.insertBefore(A,this),this):(this.parent.insertBefore(A,this.next),A)}var S=r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"split",this).call(this,x,w);return this.cache={},S}}]),b}(d.default.Block);function g(y){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return y==null?b:(typeof y.formats=="function"&&(b=(0,n.default)(b,y.formats())),y.parent==null||y.parent.blotName=="scroll"||y.parent.statics.scope!==y.statics.scope?b:g(y.parent,b))}v.blotName="block",v.tagName="P",v.defaultChild="break",v.allowedChildren=[p.default,d.default.Embed,u.default],e.bubbleFormats=g,e.BlockEmbed=m,e.default=v},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.overload=e.expandConfig=void 0;var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},r=function(P,_){if(Array.isArray(P))return P;if(Symbol.iterator in Object(P))return function(I,E){var O=[],k=!0,N=!1,C=void 0;try{for(var M,U=I[Symbol.iterator]();!(k=(M=U.next()).done)&&(O.push(M.value),!E||O.length!==E);k=!0);}catch(K){N=!0,C=K}finally{try{!k&&U.return&&U.return()}finally{if(N)throw C}}return O}(P,_);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function P(_,I){for(var E=0;E<I.length;E++){var O=I[E];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(_,O.key,O)}}return function(_,I,E){return I&&P(_.prototype,I),E&&P(_,E),_}}();t(50);var s=v(t(2)),d=v(t(14)),c=v(t(8)),p=v(t(9)),u=v(t(0)),a=t(15),l=v(a),h=v(t(3)),f=v(t(10)),m=v(t(34));function v(P){return P&&P.__esModule?P:{default:P}}function g(P,_,I){return _ in P?Object.defineProperty(P,_,{value:I,enumerable:!0,configurable:!0,writable:!0}):P[_]=I,P}function y(P,_){if(!(P instanceof _))throw new TypeError("Cannot call a class as a function")}var b=(0,f.default)("quill"),x=function(){function P(_){var I=this,E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(y(this,P),this.options=w(_,E),this.container=this.options.container,this.container==null)return b.error("Invalid Quill container",_);this.options.debug&&P.debug(this.options.debug);var O=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",this.container.__quill=this,this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,this.emitter=new c.default,this.scroll=u.default.create(this.root,{emitter:this.emitter,whitelist:this.options.formats}),this.editor=new d.default(this.scroll),this.selection=new l.default(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.theme.init(),this.emitter.on(c.default.events.EDITOR_CHANGE,function(N){N===c.default.events.TEXT_CHANGE&&I.root.classList.toggle("ql-blank",I.editor.isBlank())}),this.emitter.on(c.default.events.SCROLL_UPDATE,function(N,C){var M=I.selection.lastRange,U=M&&M.length===0?M.index:void 0;A.call(I,function(){return I.editor.update(null,C,U)},N)});var k=this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">`+O+"<p><br></p></div>");this.setContents(k),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable()}return n(P,null,[{key:"debug",value:function(_){_===!0&&(_="log"),f.default.level(_)}},{key:"find",value:function(_){return _.__quill||u.default.find(_)}},{key:"import",value:function(_){return this.imports[_]==null&&b.error("Cannot import "+_+". Are you sure it was registered?"),this.imports[_]}},{key:"register",value:function(_,I){var E=this,O=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(typeof _!="string"){var k=_.attrName||_.blotName;typeof k=="string"?this.register("formats/"+k,_,I):Object.keys(_).forEach(function(N){E.register(N,_[N],I)})}else this.imports[_]==null||O||b.warn("Overwriting "+_+" with",I),this.imports[_]=I,(_.startsWith("blots/")||_.startsWith("formats/"))&&I.blotName!=="abstract"?u.default.register(I):_.startsWith("modules")&&typeof I.register=="function"&&I.register()}}]),n(P,[{key:"addContainer",value:function(_){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(typeof _=="string"){var E=_;(_=document.createElement("div")).classList.add(E)}return this.container.insertBefore(_,I),_}},{key:"blur",value:function(){this.selection.setRange(null)}},{key:"deleteText",value:function(_,I,E){var O=this,k=S(_,I,E),N=r(k,4);return _=N[0],I=N[1],E=N[3],A.call(this,function(){return O.editor.deleteText(_,I)},E,_,-1*I)}},{key:"disable",value:function(){this.enable(!1)}},{key:"enable",value:function(){var _=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];this.scroll.enable(_),this.container.classList.toggle("ql-disabled",!_)}},{key:"focus",value:function(){var _=this.scrollingContainer.scrollTop;this.selection.focus(),this.scrollingContainer.scrollTop=_,this.scrollIntoView()}},{key:"format",value:function(_,I){var E=this,O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:c.default.sources.API;return A.call(this,function(){var k=E.getSelection(!0),N=new s.default;if(k==null)return N;if(u.default.query(_,u.default.Scope.BLOCK))N=E.editor.formatLine(k.index,k.length,g({},_,I));else{if(k.length===0)return E.selection.format(_,I),N;N=E.editor.formatText(k.index,k.length,g({},_,I))}return E.setSelection(k,c.default.sources.SILENT),N},O)}},{key:"formatLine",value:function(_,I,E,O,k){var N,C=this,M=S(_,I,E,O,k),U=r(M,4);return _=U[0],I=U[1],N=U[2],k=U[3],A.call(this,function(){return C.editor.formatLine(_,I,N)},k,_,0)}},{key:"formatText",value:function(_,I,E,O,k){var N,C=this,M=S(_,I,E,O,k),U=r(M,4);return _=U[0],I=U[1],N=U[2],k=U[3],A.call(this,function(){return C.editor.formatText(_,I,N)},k,_,0)}},{key:"getBounds",value:function(_){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,E=void 0;E=typeof _=="number"?this.selection.getBounds(_,I):this.selection.getBounds(_.index,_.length);var O=this.container.getBoundingClientRect();return{bottom:E.bottom-O.top,height:E.height,left:E.left-O.left,right:E.right-O.left,top:E.top-O.top,width:E.width}}},{key:"getContents",value:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-_,E=S(_,I),O=r(E,2);return _=O[0],I=O[1],this.editor.getContents(_,I)}},{key:"getFormat",value:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.getSelection(!0),I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return typeof _=="number"?this.editor.getFormat(_,I):this.editor.getFormat(_.index,_.length)}},{key:"getIndex",value:function(_){return _.offset(this.scroll)}},{key:"getLength",value:function(){return this.scroll.length()}},{key:"getLeaf",value:function(_){return this.scroll.leaf(_)}},{key:"getLine",value:function(_){return this.scroll.line(_)}},{key:"getLines",value:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE;return typeof _!="number"?this.scroll.lines(_.index,_.length):this.scroll.lines(_,I)}},{key:"getModule",value:function(_){return this.theme.modules[_]}},{key:"getSelection",value:function(){var _=arguments.length>0&&arguments[0]!==void 0&&arguments[0];return _&&this.focus(),this.update(),this.selection.getRange()[0]}},{key:"getText",value:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-_,E=S(_,I),O=r(E,2);return _=O[0],I=O[1],this.editor.getText(_,I)}},{key:"hasFocus",value:function(){return this.selection.hasFocus()}},{key:"insertEmbed",value:function(_,I,E){var O=this,k=arguments.length>3&&arguments[3]!==void 0?arguments[3]:P.sources.API;return A.call(this,function(){return O.editor.insertEmbed(_,I,E)},k,_)}},{key:"insertText",value:function(_,I,E,O,k){var N,C=this,M=S(_,0,E,O,k),U=r(M,4);return _=U[0],N=U[2],k=U[3],A.call(this,function(){return C.editor.insertText(_,I,N)},k,_,I.length)}},{key:"isEnabled",value:function(){return!this.container.classList.contains("ql-disabled")}},{key:"off",value:function(){return this.emitter.off.apply(this.emitter,arguments)}},{key:"on",value:function(){return this.emitter.on.apply(this.emitter,arguments)}},{key:"once",value:function(){return this.emitter.once.apply(this.emitter,arguments)}},{key:"pasteHTML",value:function(_,I,E){this.clipboard.dangerouslyPasteHTML(_,I,E)}},{key:"removeFormat",value:function(_,I,E){var O=this,k=S(_,I,E),N=r(k,4);return _=N[0],I=N[1],E=N[3],A.call(this,function(){return O.editor.removeFormat(_,I)},E,_)}},{key:"scrollIntoView",value:function(){this.selection.scrollIntoView(this.scrollingContainer)}},{key:"setContents",value:function(_){var I=this,E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c.default.sources.API;return A.call(this,function(){_=new s.default(_);var O=I.getLength(),k=I.editor.deleteText(0,O),N=I.editor.applyDelta(_),C=N.ops[N.ops.length-1];return C!=null&&typeof C.insert=="string"&&C.insert[C.insert.length-1]===`
`&&(I.editor.deleteText(I.getLength()-1,1),N.delete(1)),k.compose(N)},E)}},{key:"setSelection",value:function(_,I,E){if(_==null)this.selection.setRange(null,I||P.sources.API);else{var O=S(_,I,E),k=r(O,4);_=k[0],I=k[1],E=k[3],this.selection.setRange(new a.Range(_,I),E),E!==c.default.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer)}}},{key:"setText",value:function(_){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c.default.sources.API,E=new s.default().insert(_);return this.setContents(E,I)}},{key:"update",value:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c.default.sources.USER,I=this.scroll.update(_);return this.selection.update(_),I}},{key:"updateContents",value:function(_){var I=this,E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c.default.sources.API;return A.call(this,function(){return _=new s.default(_),I.editor.applyDelta(_,E)},E,!0)}}]),P}();function w(P,_){if((_=(0,h.default)(!0,{container:P,modules:{clipboard:!0,keyboard:!0,history:!0}},_)).theme&&_.theme!==x.DEFAULTS.theme){if(_.theme=x.import("themes/"+_.theme),_.theme==null)throw new Error("Invalid theme "+_.theme+". Did you register it?")}else _.theme=m.default;var I=(0,h.default)(!0,{},_.theme.DEFAULTS);[I,_].forEach(function(O){O.modules=O.modules||{},Object.keys(O.modules).forEach(function(k){O.modules[k]===!0&&(O.modules[k]={})})});var E=Object.keys(I.modules).concat(Object.keys(_.modules)).reduce(function(O,k){var N=x.import("modules/"+k);return N==null?b.error("Cannot load "+k+" module. Are you sure you registered it?"):O[k]=N.DEFAULTS||{},O},{});return _.modules!=null&&_.modules.toolbar&&_.modules.toolbar.constructor!==Object&&(_.modules.toolbar={container:_.modules.toolbar}),_=(0,h.default)(!0,{},x.DEFAULTS,{modules:E},I,_),["bounds","container","scrollingContainer"].forEach(function(O){typeof _[O]=="string"&&(_[O]=document.querySelector(_[O]))}),_.modules=Object.keys(_.modules).reduce(function(O,k){return _.modules[k]&&(O[k]=_.modules[k]),O},{}),_}function A(P,_,I,E){if(this.options.strict&&!this.isEnabled()&&_===c.default.sources.USER)return new s.default;var O=I==null?null:this.getSelection(),k=this.editor.delta,N=P();if(O!=null&&(I===!0&&(I=O.index),E==null?O=q(O,N,_):E!==0&&(O=q(O,I,E,_)),this.setSelection(O,c.default.sources.SILENT)),N.length()>0){var C,M,U=[c.default.events.TEXT_CHANGE,N,k,_];(C=this.emitter).emit.apply(C,[c.default.events.EDITOR_CHANGE].concat(U)),_!==c.default.sources.SILENT&&(M=this.emitter).emit.apply(M,U)}return N}function S(P,_,I,E,O){var k={};return typeof P.index=="number"&&typeof P.length=="number"?typeof _!="number"?(O=E,E=I,I=_,_=P.length,P=P.index):(_=P.length,P=P.index):typeof _!="number"&&(O=E,E=I,I=_,_=0),(I===void 0?"undefined":i(I))==="object"?(k=I,O=E):typeof I=="string"&&(E!=null?k[I]=E:O=I),[P,_,k,O=O||c.default.sources.API]}function q(P,_,I,E){if(P==null)return null;var O=void 0,k=void 0;if(_ instanceof s.default){var N=[P.index,P.index+P.length].map(function(K){return _.transformPosition(K,E!==c.default.sources.USER)}),C=r(N,2);O=C[0],k=C[1]}else{var M=[P.index,P.index+P.length].map(function(K){return K<_||K===_&&E===c.default.sources.USER?K:I>=0?K+I:Math.max(_,K+I)}),U=r(M,2);O=U[0],k=U[1]}return new a.Range(O,k-O)}x.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,scrollingContainer:null,strict:!0,theme:"default"},x.events=c.default.events,x.sources=c.default.sources,x.version="1.3.7",x.imports={delta:s.default,parchment:u.default,"core/module":p.default,"core/theme":m.default},e.expandConfig=w,e.overload=S,e.default=x},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function a(l,h){for(var f=0;f<h.length;f++){var m=h[f];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(l,m.key,m)}}return function(l,h,f){return h&&a(l.prototype,h),f&&a(l,f),l}}(),r=function a(l,h,f){l===null&&(l=Function.prototype);var m=Object.getOwnPropertyDescriptor(l,h);if(m===void 0){var v=Object.getPrototypeOf(l);return v===null?void 0:a(v,h,f)}if("value"in m)return m.value;var g=m.get;return g!==void 0?g.call(f):void 0},n=d(t(7)),s=d(t(0));function d(a){return a&&a.__esModule?a:{default:a}}function c(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}function p(a,l){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||typeof l!="object"&&typeof l!="function"?a:l}var u=function(a){function l(){return c(this,l),p(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return function(h,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);h.prototype=Object.create(f&&f.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(h,f):h.__proto__=f)}(l,a),i(l,[{key:"formatAt",value:function(h,f,m,v){if(l.compare(this.statics.blotName,m)<0&&s.default.query(m,s.default.Scope.BLOT)){var g=this.isolate(h,f);v&&g.wrap(m,v)}else r(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"formatAt",this).call(this,h,f,m,v)}},{key:"optimize",value:function(h){if(r(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"optimize",this).call(this,h),this.parent instanceof l&&l.compare(this.statics.blotName,this.parent.statics.blotName)>0){var f=this.parent.isolate(this.offset(),this.length());this.moveChildren(f),f.wrap(this)}}}],[{key:"compare",value:function(h,f){var m=l.order.indexOf(h),v=l.order.indexOf(f);return m>=0||v>=0?m-v:h===f?0:h<f?-1:1}}]),l}(s.default.Inline);u.allowedChildren=[u,s.default.Embed,n.default],u.order=["cursor","inline","underline","strike","italic","bold","script","link","code"],e.default=u},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(0);function n(c,p){if(!(c instanceof p))throw new TypeError("Cannot call a class as a function")}function s(c,p){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!p||typeof p!="object"&&typeof p!="function"?c:p}var d=function(c){function p(){return n(this,p),s(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return function(u,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);u.prototype=Object.create(a&&a.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(u,a):u.__proto__=a)}(p,c),p}(((i=r)&&i.__esModule?i:{default:i}).default.Text);e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function p(u,a){for(var l=0;l<a.length;l++){var h=a[l];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(u,h.key,h)}}return function(u,a,l){return a&&p(u.prototype,a),l&&p(u,l),u}}(),r=function p(u,a,l){u===null&&(u=Function.prototype);var h=Object.getOwnPropertyDescriptor(u,a);if(h===void 0){var f=Object.getPrototypeOf(u);return f===null?void 0:p(f,a,l)}if("value"in h)return h.value;var m=h.get;return m!==void 0?m.call(l):void 0},n=s(t(54));function s(p){return p&&p.__esModule?p:{default:p}}var d=(0,s(t(10)).default)("quill:events");["selectionchange","mousedown","mouseup","click"].forEach(function(p){document.addEventListener(p,function(){for(var u=arguments.length,a=Array(u),l=0;l<u;l++)a[l]=arguments[l];[].slice.call(document.querySelectorAll(".ql-container")).forEach(function(h){var f;h.__quill&&h.__quill.emitter&&(f=h.__quill.emitter).handleDOM.apply(f,a)})})});var c=function(p){function u(){(function(l,h){if(!(l instanceof h))throw new TypeError("Cannot call a class as a function")})(this,u);var a=function(l,h){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!h||typeof h!="object"&&typeof h!="function"?l:h}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));return a.listeners={},a.on("error",d.error),a}return function(a,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);a.prototype=Object.create(l&&l.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(a,l):a.__proto__=l)}(u,p),i(u,[{key:"emit",value:function(){d.log.apply(d,arguments),r(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"emit",this).apply(this,arguments)}},{key:"handleDOM",value:function(a){for(var l=arguments.length,h=Array(l>1?l-1:0),f=1;f<l;f++)h[f-1]=arguments[f];(this.listeners[a.type]||[]).forEach(function(m){var v=m.node,g=m.handler;(a.target===v||v.contains(a.target))&&g.apply(void 0,[a].concat(h))})}},{key:"listenDOM",value:function(a,l,h){this.listeners[a]||(this.listeners[a]=[]),this.listeners[a].push({node:l,handler:h})}}]),u}(n.default);c.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},c.sources={API:"api",SILENT:"silent",USER:"user"},e.default=c},function(o,e,t){function i(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function n(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};i(this,n),this.quill=s,this.options=d};r.DEFAULTS={},e.default=r},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=["error","warn","log","info"],r="warn";function n(d){if(i.indexOf(d)<=i.indexOf(r)){for(var c,p=arguments.length,u=Array(p>1?p-1:0),a=1;a<p;a++)u[a-1]=arguments[a];(c=console)[d].apply(c,u)}}function s(d){return i.reduce(function(c,p){return c[p]=n.bind(console,p,d),c},{})}n.level=s.level=function(d){r=d},e.default=s},function(o,e,t){var i=Array.prototype.slice,r=t(52),n=t(53),s=o.exports=function(p,u,a){return a||(a={}),p===u||(p instanceof Date&&u instanceof Date?p.getTime()===u.getTime():!p||!u||typeof p!="object"&&typeof u!="object"?a.strict?p===u:p==u:function(l,h,f){var m,v;if(d(l)||d(h)||l.prototype!==h.prototype)return!1;if(n(l))return!!n(h)&&(l=i.call(l),h=i.call(h),s(l,h,f));if(c(l)){if(!c(h)||l.length!==h.length)return!1;for(m=0;m<l.length;m++)if(l[m]!==h[m])return!1;return!0}try{var g=r(l),y=r(h)}catch{return!1}if(g.length!=y.length)return!1;for(g.sort(),y.sort(),m=g.length-1;m>=0;m--)if(g[m]!=y[m])return!1;for(m=g.length-1;m>=0;m--)if(v=g[m],!s(l[v],h[v],f))return!1;return typeof l==typeof h}(p,u,a))};function d(p){return p==null}function c(p){return!(!p||typeof p!="object"||typeof p.length!="number"||typeof p.copy!="function"||typeof p.slice!="function"||p.length>0&&typeof p[0]!="number")}},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=t(1),r=function(){function n(s,d,c){c===void 0&&(c={}),this.attrName=s,this.keyName=d;var p=i.Scope.TYPE&i.Scope.ATTRIBUTE;c.scope!=null?this.scope=c.scope&i.Scope.LEVEL|p:this.scope=i.Scope.ATTRIBUTE,c.whitelist!=null&&(this.whitelist=c.whitelist)}return n.keys=function(s){return[].map.call(s.attributes,function(d){return d.name})},n.prototype.add=function(s,d){return!!this.canAdd(s,d)&&(s.setAttribute(this.keyName,d),!0)},n.prototype.canAdd=function(s,d){return i.query(s,i.Scope.BLOT&(this.scope|i.Scope.TYPE))!=null&&(this.whitelist==null||(typeof d=="string"?this.whitelist.indexOf(d.replace(/["']/g,""))>-1:this.whitelist.indexOf(d)>-1))},n.prototype.remove=function(s){s.removeAttribute(this.keyName)},n.prototype.value=function(s){var d=s.getAttribute(this.keyName);return this.canAdd(s,d)&&d?d:""},n}();e.default=r},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Code=void 0;var i=function(g,y){if(Array.isArray(g))return g;if(Symbol.iterator in Object(g))return function(b,x){var w=[],A=!0,S=!1,q=void 0;try{for(var P,_=b[Symbol.iterator]();!(A=(P=_.next()).done)&&(w.push(P.value),!x||w.length!==x);A=!0);}catch(I){S=!0,q=I}finally{try{!A&&_.return&&_.return()}finally{if(S)throw q}}return w}(g,y);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function g(y,b){for(var x=0;x<b.length;x++){var w=b[x];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(y,w.key,w)}}return function(y,b,x){return b&&g(y.prototype,b),x&&g(y,x),y}}(),n=function g(y,b,x){y===null&&(y=Function.prototype);var w=Object.getOwnPropertyDescriptor(y,b);if(w===void 0){var A=Object.getPrototypeOf(y);return A===null?void 0:g(A,b,x)}if("value"in w)return w.value;var S=w.get;return S!==void 0?S.call(x):void 0},s=a(t(2)),d=a(t(0)),c=a(t(4)),p=a(t(6)),u=a(t(7));function a(g){return g&&g.__esModule?g:{default:g}}function l(g,y){if(!(g instanceof y))throw new TypeError("Cannot call a class as a function")}function h(g,y){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!y||typeof y!="object"&&typeof y!="function"?g:y}function f(g,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);g.prototype=Object.create(y&&y.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(g,y):g.__proto__=y)}var m=function(g){function y(){return l(this,y),h(this,(y.__proto__||Object.getPrototypeOf(y)).apply(this,arguments))}return f(y,g),y}(p.default);m.blotName="code",m.tagName="CODE";var v=function(g){function y(){return l(this,y),h(this,(y.__proto__||Object.getPrototypeOf(y)).apply(this,arguments))}return f(y,g),r(y,[{key:"delta",value:function(){var b=this,x=this.domNode.textContent;return x.endsWith(`
`)&&(x=x.slice(0,-1)),x.split(`
`).reduce(function(w,A){return w.insert(A).insert(`
`,b.formats())},new s.default)}},{key:"format",value:function(b,x){if(b!==this.statics.blotName||!x){var w=this.descendant(u.default,this.length()-1),A=i(w,1)[0];A!=null&&A.deleteAt(A.length()-1,1),n(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"format",this).call(this,b,x)}}},{key:"formatAt",value:function(b,x,w,A){if(x!==0&&d.default.query(w,d.default.Scope.BLOCK)!=null&&(w!==this.statics.blotName||A!==this.statics.formats(this.domNode))){var S=this.newlineIndex(b);if(!(S<0||S>=b+x)){var q=this.newlineIndex(b,!0)+1,P=S-q+1,_=this.isolate(q,P),I=_.next;_.format(w,A),I instanceof y&&I.formatAt(0,b-q+x-P,w,A)}}}},{key:"insertAt",value:function(b,x,w){if(w==null){var A=this.descendant(u.default,b),S=i(A,2),q=S[0],P=S[1];q.insertAt(P,x)}}},{key:"length",value:function(){var b=this.domNode.textContent.length;return this.domNode.textContent.endsWith(`
`)?b:b+1}},{key:"newlineIndex",value:function(b){var x=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(x)return this.domNode.textContent.slice(0,b).lastIndexOf(`
`);var w=this.domNode.textContent.slice(b).indexOf(`
`);return w>-1?b+w:-1}},{key:"optimize",value:function(b){this.domNode.textContent.endsWith(`
`)||this.appendChild(d.default.create("text",`
`)),n(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"optimize",this).call(this,b);var x=this.next;x!=null&&x.prev===this&&x.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===x.statics.formats(x.domNode)&&(x.optimize(b),x.moveChildren(this),x.remove())}},{key:"replace",value:function(b){n(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"replace",this).call(this,b),[].slice.call(this.domNode.querySelectorAll("*")).forEach(function(x){var w=d.default.find(x);w==null?x.parentNode.removeChild(x):w instanceof d.default.Embed?w.remove():w.unwrap()})}}],[{key:"create",value:function(b){var x=n(y.__proto__||Object.getPrototypeOf(y),"create",this).call(this,b);return x.setAttribute("spellcheck",!1),x}},{key:"formats",value:function(){return!0}}]),y}(c.default);v.blotName="code-block",v.tagName="PRE",v.TAB="  ",e.Code=m,e.default=v},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},r=function(w,A){if(Array.isArray(w))return w;if(Symbol.iterator in Object(w))return function(S,q){var P=[],_=!0,I=!1,E=void 0;try{for(var O,k=S[Symbol.iterator]();!(_=(O=k.next()).done)&&(P.push(O.value),!q||P.length!==q);_=!0);}catch(N){I=!0,E=N}finally{try{!_&&k.return&&k.return()}finally{if(I)throw E}}return P}(w,A);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function w(A,S){for(var q=0;q<S.length;q++){var P=S[q];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(A,P.key,P)}}return function(A,S,q){return S&&w(A.prototype,S),q&&w(A,q),A}}(),s=g(t(2)),d=g(t(20)),c=g(t(0)),p=g(t(13)),u=g(t(24)),a=t(4),l=g(a),h=g(t(16)),f=g(t(21)),m=g(t(11)),v=g(t(3));function g(w){return w&&w.__esModule?w:{default:w}}var y=/^[ -~]*$/,b=function(){function w(A){(function(S,q){if(!(S instanceof q))throw new TypeError("Cannot call a class as a function")})(this,w),this.scroll=A,this.delta=this.getDelta()}return n(w,[{key:"applyDelta",value:function(A){var S=this,q=!1;this.scroll.update();var P=this.scroll.length();return this.scroll.batchStart(),(A=function(_){return _.reduce(function(I,E){if(E.insert===1){var O=(0,f.default)(E.attributes);return delete O.image,I.insert({image:E.attributes.image},O)}if(E.attributes==null||E.attributes.list!==!0&&E.attributes.bullet!==!0||((E=(0,f.default)(E)).attributes.list?E.attributes.list="ordered":(E.attributes.list="bullet",delete E.attributes.bullet)),typeof E.insert=="string"){var k=E.insert.replace(/\r\n/g,`
`).replace(/\r/g,`
`);return I.insert(k,E.attributes)}return I.push(E)},new s.default)}(A)).reduce(function(_,I){var E=I.retain||I.delete||I.insert.length||1,O=I.attributes||{};if(I.insert!=null){if(typeof I.insert=="string"){var k=I.insert;k.endsWith(`
`)&&q&&(q=!1,k=k.slice(0,-1)),_>=P&&!k.endsWith(`
`)&&(q=!0),S.scroll.insertAt(_,k);var N=S.scroll.line(_),C=r(N,2),M=C[0],U=C[1],K=(0,v.default)({},(0,a.bubbleFormats)(M));if(M instanceof l.default){var J=M.descendant(c.default.Leaf,U),Ie=r(J,1)[0];K=(0,v.default)(K,(0,a.bubbleFormats)(Ie))}O=d.default.attributes.diff(K,O)||{}}else if(i(I.insert)==="object"){var R=Object.keys(I.insert)[0];if(R==null)return _;S.scroll.insertAt(_,R,I.insert[R])}P+=E}return Object.keys(O).forEach(function($){S.scroll.formatAt(_,E,$,O[$])}),_+E},0),A.reduce(function(_,I){return typeof I.delete=="number"?(S.scroll.deleteAt(_,I.delete),_):_+(I.retain||I.insert.length||1)},0),this.scroll.batchEnd(),this.update(A)}},{key:"deleteText",value:function(A,S){return this.scroll.deleteAt(A,S),this.update(new s.default().retain(A).delete(S))}},{key:"formatLine",value:function(A,S){var q=this,P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.scroll.update(),Object.keys(P).forEach(function(_){if(q.scroll.whitelist==null||q.scroll.whitelist[_]){var I=q.scroll.lines(A,Math.max(S,1)),E=S;I.forEach(function(O){var k=O.length();if(O instanceof p.default){var N=A-O.offset(q.scroll),C=O.newlineIndex(N+E)-N+1;O.formatAt(N,C,_,P[_])}else O.format(_,P[_]);E-=k})}}),this.scroll.optimize(),this.update(new s.default().retain(A).retain(S,(0,f.default)(P)))}},{key:"formatText",value:function(A,S){var q=this,P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Object.keys(P).forEach(function(_){q.scroll.formatAt(A,S,_,P[_])}),this.update(new s.default().retain(A).retain(S,(0,f.default)(P)))}},{key:"getContents",value:function(A,S){return this.delta.slice(A,A+S)}},{key:"getDelta",value:function(){return this.scroll.lines().reduce(function(A,S){return A.concat(S.delta())},new s.default)}},{key:"getFormat",value:function(A){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,q=[],P=[];S===0?this.scroll.path(A).forEach(function(I){var E=r(I,1)[0];E instanceof l.default?q.push(E):E instanceof c.default.Leaf&&P.push(E)}):(q=this.scroll.lines(A,S),P=this.scroll.descendants(c.default.Leaf,A,S));var _=[q,P].map(function(I){if(I.length===0)return{};for(var E=(0,a.bubbleFormats)(I.shift());Object.keys(E).length>0;){var O=I.shift();if(O==null)return E;E=x((0,a.bubbleFormats)(O),E)}return E});return v.default.apply(v.default,_)}},{key:"getText",value:function(A,S){return this.getContents(A,S).filter(function(q){return typeof q.insert=="string"}).map(function(q){return q.insert}).join("")}},{key:"insertEmbed",value:function(A,S,q){return this.scroll.insertAt(A,S,q),this.update(new s.default().retain(A).insert(function(P,_,I){return _ in P?Object.defineProperty(P,_,{value:I,enumerable:!0,configurable:!0,writable:!0}):P[_]=I,P}({},S,q)))}},{key:"insertText",value:function(A,S){var q=this,P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return S=S.replace(/\r\n/g,`
`).replace(/\r/g,`
`),this.scroll.insertAt(A,S),Object.keys(P).forEach(function(_){q.scroll.formatAt(A,S.length,_,P[_])}),this.update(new s.default().retain(A).insert(S,(0,f.default)(P)))}},{key:"isBlank",value:function(){if(this.scroll.children.length==0)return!0;if(this.scroll.children.length>1)return!1;var A=this.scroll.children.head;return A.statics.blotName===l.default.blotName&&!(A.children.length>1)&&A.children.head instanceof h.default}},{key:"removeFormat",value:function(A,S){var q=this.getText(A,S),P=this.scroll.line(A+S),_=r(P,2),I=_[0],E=_[1],O=0,k=new s.default;I!=null&&(O=I instanceof p.default?I.newlineIndex(E)-E+1:I.length()-E,k=I.delta().slice(E,E+O-1).insert(`
`));var N=this.getContents(A,S+O).diff(new s.default().insert(q).concat(k)),C=new s.default().retain(A).concat(N);return this.applyDelta(C)}},{key:"update",value:function(A){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,P=this.delta;if(S.length===1&&S[0].type==="characterData"&&S[0].target.data.match(y)&&c.default.find(S[0].target)){var _=c.default.find(S[0].target),I=(0,a.bubbleFormats)(_),E=_.offset(this.scroll),O=S[0].oldValue.replace(u.default.CONTENTS,""),k=new s.default().insert(O),N=new s.default().insert(_.value()),C=new s.default().retain(E).concat(k.diff(N,q));A=C.reduce(function(M,U){return U.insert?M.insert(U.insert,I):M.push(U)},new s.default),this.delta=P.compose(A)}else this.delta=this.getDelta(),A&&(0,m.default)(P.compose(A),this.delta)||(A=P.diff(this.delta,q));return A}}]),w}();function x(w,A){return Object.keys(A).reduce(function(S,q){return w[q]==null||(A[q]===w[q]?S[q]=A[q]:Array.isArray(A[q])?A[q].indexOf(w[q])<0&&(S[q]=A[q].concat([w[q]])):S[q]=[A[q],w[q]]),S},{})}e.default=b},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Range=void 0;var i=function(v,g){if(Array.isArray(v))return v;if(Symbol.iterator in Object(v))return function(y,b){var x=[],w=!0,A=!1,S=void 0;try{for(var q,P=y[Symbol.iterator]();!(w=(q=P.next()).done)&&(x.push(q.value),!b||x.length!==b);w=!0);}catch(_){A=!0,S=_}finally{try{!w&&P.return&&P.return()}finally{if(A)throw S}}return x}(v,g);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function v(g,y){for(var b=0;b<y.length;b++){var x=y[b];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(g,x.key,x)}}return function(g,y,b){return y&&v(g.prototype,y),b&&v(g,b),g}}(),n=p(t(0)),s=p(t(21)),d=p(t(11)),c=p(t(8));function p(v){return v&&v.__esModule?v:{default:v}}function u(v){if(Array.isArray(v)){for(var g=0,y=Array(v.length);g<v.length;g++)y[g]=v[g];return y}return Array.from(v)}function a(v,g){if(!(v instanceof g))throw new TypeError("Cannot call a class as a function")}var l=(0,p(t(10)).default)("quill:selection"),h=function v(g){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;a(this,v),this.index=g,this.length=y},f=function(){function v(g,y){var b=this;a(this,v),this.emitter=y,this.scroll=g,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=n.default.create("cursor",this),this.lastRange=this.savedRange=new h(0,0),this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,function(){b.mouseDown||setTimeout(b.update.bind(b,c.default.sources.USER),1)}),this.emitter.on(c.default.events.EDITOR_CHANGE,function(x,w){x===c.default.events.TEXT_CHANGE&&w.length()>0&&b.update(c.default.sources.SILENT)}),this.emitter.on(c.default.events.SCROLL_BEFORE_UPDATE,function(){if(b.hasFocus()){var x=b.getNativeRange();x!=null&&x.start.node!==b.cursor.textNode&&b.emitter.once(c.default.events.SCROLL_UPDATE,function(){try{b.setNativeRange(x.start.node,x.start.offset,x.end.node,x.end.offset)}catch{}})}}),this.emitter.on(c.default.events.SCROLL_OPTIMIZE,function(x,w){if(w.range){var A=w.range,S=A.startNode,q=A.startOffset,P=A.endNode,_=A.endOffset;b.setNativeRange(S,q,P,_)}}),this.update(c.default.sources.SILENT)}return r(v,[{key:"handleComposition",value:function(){var g=this;this.root.addEventListener("compositionstart",function(){g.composing=!0}),this.root.addEventListener("compositionend",function(){if(g.composing=!1,g.cursor.parent){var y=g.cursor.restore();if(!y)return;setTimeout(function(){g.setNativeRange(y.startNode,y.startOffset,y.endNode,y.endOffset)},1)}})}},{key:"handleDragging",value:function(){var g=this;this.emitter.listenDOM("mousedown",document.body,function(){g.mouseDown=!0}),this.emitter.listenDOM("mouseup",document.body,function(){g.mouseDown=!1,g.update(c.default.sources.USER)})}},{key:"focus",value:function(){this.hasFocus()||(this.root.focus(),this.setRange(this.savedRange))}},{key:"format",value:function(g,y){if(this.scroll.whitelist==null||this.scroll.whitelist[g]){this.scroll.update();var b=this.getNativeRange();if(b!=null&&b.native.collapsed&&!n.default.query(g,n.default.Scope.BLOCK)){if(b.start.node!==this.cursor.textNode){var x=n.default.find(b.start.node,!1);if(x==null)return;if(x instanceof n.default.Leaf){var w=x.split(b.start.offset);x.parent.insertBefore(this.cursor,w)}else x.insertBefore(this.cursor,b.start.node);this.cursor.attach()}this.cursor.format(g,y),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}}},{key:"getBounds",value:function(g){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,b=this.scroll.length();g=Math.min(g,b-1),y=Math.min(g+y,b-1)-g;var x=void 0,w=this.scroll.leaf(g),A=i(w,2),S=A[0],q=A[1];if(S==null)return null;var P=S.position(q,!0),_=i(P,2);x=_[0],q=_[1];var I=document.createRange();if(y>0){I.setStart(x,q);var E=this.scroll.leaf(g+y),O=i(E,2);if(S=O[0],q=O[1],S==null)return null;var k=S.position(q,!0),N=i(k,2);return x=N[0],q=N[1],I.setEnd(x,q),I.getBoundingClientRect()}var C="left",M=void 0;return x instanceof Text?(q<x.data.length?(I.setStart(x,q),I.setEnd(x,q+1)):(I.setStart(x,q-1),I.setEnd(x,q),C="right"),M=I.getBoundingClientRect()):(M=S.domNode.getBoundingClientRect(),q>0&&(C="right")),{bottom:M.top+M.height,height:M.height,left:M[C],right:M[C],top:M.top,width:0}}},{key:"getNativeRange",value:function(){var g=document.getSelection();if(g==null||g.rangeCount<=0)return null;var y=g.getRangeAt(0);if(y==null)return null;var b=this.normalizeNative(y);return l.info("getNativeRange",b),b}},{key:"getRange",value:function(){var g=this.getNativeRange();return g==null?[null,null]:[this.normalizedToRange(g),g]}},{key:"hasFocus",value:function(){return document.activeElement===this.root}},{key:"normalizedToRange",value:function(g){var y=this,b=[[g.start.node,g.start.offset]];g.native.collapsed||b.push([g.end.node,g.end.offset]);var x=b.map(function(S){var q=i(S,2),P=q[0],_=q[1],I=n.default.find(P,!0),E=I.offset(y.scroll);return _===0?E:I instanceof n.default.Container?E+I.length():E+I.index(P,_)}),w=Math.min(Math.max.apply(Math,u(x)),this.scroll.length()-1),A=Math.min.apply(Math,[w].concat(u(x)));return new h(A,w-A)}},{key:"normalizeNative",value:function(g){if(!m(this.root,g.startContainer)||!g.collapsed&&!m(this.root,g.endContainer))return null;var y={start:{node:g.startContainer,offset:g.startOffset},end:{node:g.endContainer,offset:g.endOffset},native:g};return[y.start,y.end].forEach(function(b){for(var x=b.node,w=b.offset;!(x instanceof Text)&&x.childNodes.length>0;)if(x.childNodes.length>w)x=x.childNodes[w],w=0;else{if(x.childNodes.length!==w)break;w=(x=x.lastChild)instanceof Text?x.data.length:x.childNodes.length+1}b.node=x,b.offset=w}),y}},{key:"rangeToNative",value:function(g){var y=this,b=g.collapsed?[g.index]:[g.index,g.index+g.length],x=[],w=this.scroll.length();return b.forEach(function(A,S){A=Math.min(w-1,A);var q,P=y.scroll.leaf(A),_=i(P,2),I=_[0],E=_[1],O=I.position(E,S!==0),k=i(O,2);q=k[0],E=k[1],x.push(q,E)}),x.length<2&&(x=x.concat(x)),x}},{key:"scrollIntoView",value:function(g){var y=this.lastRange;if(y!=null){var b=this.getBounds(y.index,y.length);if(b!=null){var x=this.scroll.length()-1,w=this.scroll.line(Math.min(y.index,x)),A=i(w,1)[0],S=A;if(y.length>0){var q=this.scroll.line(Math.min(y.index+y.length,x));S=i(q,1)[0]}if(A!=null&&S!=null){var P=g.getBoundingClientRect();b.top<P.top?g.scrollTop-=P.top-b.top:b.bottom>P.bottom&&(g.scrollTop+=b.bottom-P.bottom)}}}}},{key:"setNativeRange",value:function(g,y){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:g,x=arguments.length>3&&arguments[3]!==void 0?arguments[3]:y,w=arguments.length>4&&arguments[4]!==void 0&&arguments[4];if(l.info("setNativeRange",g,y,b,x),g==null||this.root.parentNode!=null&&g.parentNode!=null&&b.parentNode!=null){var A=document.getSelection();if(A!=null)if(g!=null){this.hasFocus()||this.root.focus();var S=(this.getNativeRange()||{}).native;if(S==null||w||g!==S.startContainer||y!==S.startOffset||b!==S.endContainer||x!==S.endOffset){g.tagName=="BR"&&(y=[].indexOf.call(g.parentNode.childNodes,g),g=g.parentNode),b.tagName=="BR"&&(x=[].indexOf.call(b.parentNode.childNodes,b),b=b.parentNode);var q=document.createRange();q.setStart(g,y),q.setEnd(b,x),A.removeAllRanges(),A.addRange(q)}}else A.removeAllRanges(),this.root.blur(),document.body.focus()}}},{key:"setRange",value:function(g){var y=arguments.length>1&&arguments[1]!==void 0&&arguments[1],b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:c.default.sources.API;if(typeof y=="string"&&(b=y,y=!1),l.info("setRange",g),g!=null){var x=this.rangeToNative(g);this.setNativeRange.apply(this,u(x).concat([y]))}else this.setNativeRange(null);this.update(b)}},{key:"update",value:function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c.default.sources.USER,y=this.lastRange,b=this.getRange(),x=i(b,2),w=x[0],A=x[1];if(this.lastRange=w,this.lastRange!=null&&(this.savedRange=this.lastRange),!(0,d.default)(y,this.lastRange)){var S;!this.composing&&A!=null&&A.native.collapsed&&A.start.node!==this.cursor.textNode&&this.cursor.restore();var q,P=[c.default.events.SELECTION_CHANGE,(0,s.default)(this.lastRange),(0,s.default)(y),g];(S=this.emitter).emit.apply(S,[c.default.events.EDITOR_CHANGE].concat(P)),g!==c.default.sources.SILENT&&(q=this.emitter).emit.apply(q,P)}}}]),v}();function m(v,g){try{g.parentNode}catch{return!1}return g instanceof Text&&(g=g.parentNode),v.contains(g)}e.Range=h,e.default=f},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function u(a,l){for(var h=0;h<l.length;h++){var f=l[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(a,f.key,f)}}return function(a,l,h){return l&&u(a.prototype,l),h&&u(a,h),a}}(),n=function u(a,l,h){a===null&&(a=Function.prototype);var f=Object.getOwnPropertyDescriptor(a,l);if(f===void 0){var m=Object.getPrototypeOf(a);return m===null?void 0:u(m,l,h)}if("value"in f)return f.value;var v=f.get;return v!==void 0?v.call(h):void 0},s=t(0);function d(u,a){if(!(u instanceof a))throw new TypeError("Cannot call a class as a function")}function c(u,a){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?u:a}var p=function(u){function a(){return d(this,a),c(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,u),r(a,[{key:"insertInto",value:function(l,h){l.children.length===0?n(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"insertInto",this).call(this,l,h):this.remove()}},{key:"length",value:function(){return 0}},{key:"value",value:function(){return""}}],[{key:"value",value:function(){}}]),a}(((i=s)&&i.__esModule?i:{default:i}).default.Embed);p.blotName="break",p.tagName="BR",e.default=p},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,a){u.__proto__=a}||function(u,a){for(var l in a)a.hasOwnProperty(l)&&(u[l]=a[l])},function(u,a){function l(){this.constructor=u}i(u,a),u.prototype=a===null?Object.create(a):(l.prototype=a.prototype,new l)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(44),s=t(30),d=t(1),c=function(u){function a(l){var h=u.call(this,l)||this;return h.build(),h}return r(a,u),a.prototype.appendChild=function(l){this.insertBefore(l)},a.prototype.attach=function(){u.prototype.attach.call(this),this.children.forEach(function(l){l.attach()})},a.prototype.build=function(){var l=this;this.children=new n.default,[].slice.call(this.domNode.childNodes).reverse().forEach(function(h){try{var f=p(h);l.insertBefore(f,l.children.head||void 0)}catch(m){if(m instanceof d.ParchmentError)return;throw m}})},a.prototype.deleteAt=function(l,h){if(l===0&&h===this.length())return this.remove();this.children.forEachAt(l,h,function(f,m,v){f.deleteAt(m,v)})},a.prototype.descendant=function(l,h){var f=this.children.find(h),m=f[0],v=f[1];return l.blotName==null&&l(m)||l.blotName!=null&&m instanceof l?[m,v]:m instanceof a?m.descendant(l,v):[null,-1]},a.prototype.descendants=function(l,h,f){h===void 0&&(h=0),f===void 0&&(f=Number.MAX_VALUE);var m=[],v=f;return this.children.forEachAt(h,f,function(g,y,b){(l.blotName==null&&l(g)||l.blotName!=null&&g instanceof l)&&m.push(g),g instanceof a&&(m=m.concat(g.descendants(l,y,v))),v-=b}),m},a.prototype.detach=function(){this.children.forEach(function(l){l.detach()}),u.prototype.detach.call(this)},a.prototype.formatAt=function(l,h,f,m){this.children.forEachAt(l,h,function(v,g,y){v.formatAt(g,y,f,m)})},a.prototype.insertAt=function(l,h,f){var m=this.children.find(l),v=m[0],g=m[1];if(v)v.insertAt(g,h,f);else{var y=f==null?d.create("text",h):d.create(h,f);this.appendChild(y)}},a.prototype.insertBefore=function(l,h){if(this.statics.allowedChildren!=null&&!this.statics.allowedChildren.some(function(f){return l instanceof f}))throw new d.ParchmentError("Cannot insert "+l.statics.blotName+" into "+this.statics.blotName);l.insertInto(this,h)},a.prototype.length=function(){return this.children.reduce(function(l,h){return l+h.length()},0)},a.prototype.moveChildren=function(l,h){this.children.forEach(function(f){l.insertBefore(f,h)})},a.prototype.optimize=function(l){if(u.prototype.optimize.call(this,l),this.children.length===0)if(this.statics.defaultChild!=null){var h=d.create(this.statics.defaultChild);this.appendChild(h),h.optimize(l)}else this.remove()},a.prototype.path=function(l,h){h===void 0&&(h=!1);var f=this.children.find(l,h),m=f[0],v=f[1],g=[[this,l]];return m instanceof a?g.concat(m.path(v,h)):(m!=null&&g.push([m,v]),g)},a.prototype.removeChild=function(l){this.children.remove(l)},a.prototype.replace=function(l){l instanceof a&&l.moveChildren(this),u.prototype.replace.call(this,l)},a.prototype.split=function(l,h){if(h===void 0&&(h=!1),!h){if(l===0)return this;if(l===this.length())return this.next}var f=this.clone();return this.parent.insertBefore(f,this.next),this.children.forEachAt(l,this.length(),function(m,v,g){m=m.split(v,h),f.appendChild(m)}),f},a.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},a.prototype.update=function(l,h){var f=this,m=[],v=[];l.forEach(function(g){g.target===f.domNode&&g.type==="childList"&&(m.push.apply(m,g.addedNodes),v.push.apply(v,g.removedNodes))}),v.forEach(function(g){if(!(g.parentNode!=null&&g.tagName!=="IFRAME"&&document.body.compareDocumentPosition(g)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var y=d.find(g);y!=null&&(y.domNode.parentNode!=null&&y.domNode.parentNode!==f.domNode||y.detach())}}),m.filter(function(g){return g.parentNode==f.domNode}).sort(function(g,y){return g===y?0:g.compareDocumentPosition(y)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1}).forEach(function(g){var y=null;g.nextSibling!=null&&(y=d.find(g.nextSibling));var b=p(g);b.next==y&&b.next!=null||(b.parent!=null&&b.parent.removeChild(f),f.insertBefore(b,y||void 0))})},a}(s.default);function p(u){var a=d.find(u);if(a==null)try{a=d.create(u)}catch{a=d.create(d.Scope.INLINE),[].slice.call(u.childNodes).forEach(function(h){a.domNode.appendChild(h)}),u.parentNode&&u.parentNode.replaceChild(a.domNode,u),a.attach()}return a}e.default=c},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,a){u.__proto__=a}||function(u,a){for(var l in a)a.hasOwnProperty(l)&&(u[l]=a[l])},function(u,a){function l(){this.constructor=u}i(u,a),u.prototype=a===null?Object.create(a):(l.prototype=a.prototype,new l)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(12),s=t(31),d=t(17),c=t(1),p=function(u){function a(l){var h=u.call(this,l)||this;return h.attributes=new s.default(h.domNode),h}return r(a,u),a.formats=function(l){return typeof this.tagName=="string"||(Array.isArray(this.tagName)?l.tagName.toLowerCase():void 0)},a.prototype.format=function(l,h){var f=c.query(l);f instanceof n.default?this.attributes.attribute(f,h):h&&(f==null||l===this.statics.blotName&&this.formats()[l]===h||this.replaceWith(l,h))},a.prototype.formats=function(){var l=this.attributes.values(),h=this.statics.formats(this.domNode);return h!=null&&(l[this.statics.blotName]=h),l},a.prototype.replaceWith=function(l,h){var f=u.prototype.replaceWith.call(this,l,h);return this.attributes.copy(f),f},a.prototype.update=function(l,h){var f=this;u.prototype.update.call(this,l,h),l.some(function(m){return m.target===f.domNode&&m.type==="attributes"})&&this.attributes.build()},a.prototype.wrap=function(l,h){var f=u.prototype.wrap.call(this,l,h);return f instanceof a&&f.statics.scope===this.statics.scope&&this.attributes.move(f),f},a}(d.default);e.default=p},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,p){c.__proto__=p}||function(c,p){for(var u in p)p.hasOwnProperty(u)&&(c[u]=p[u])},function(c,p){function u(){this.constructor=c}i(c,p),c.prototype=p===null?Object.create(p):(u.prototype=p.prototype,new u)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(30),s=t(1),d=function(c){function p(){return c!==null&&c.apply(this,arguments)||this}return r(p,c),p.value=function(u){return!0},p.prototype.index=function(u,a){return this.domNode===u||this.domNode.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(a,1):-1},p.prototype.position=function(u,a){var l=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return u>0&&(l+=1),[this.parent.domNode,l]},p.prototype.value=function(){var u;return(u={})[this.statics.blotName]=this.statics.value(this.domNode)||!0,u},p.scope=s.Scope.INLINE_BLOT,p}(n.default);e.default=d},function(o,e,t){var i=t(11),r=t(3),n={attributes:{compose:function(d,c,p){typeof d!="object"&&(d={}),typeof c!="object"&&(c={});var u=r(!0,{},c);for(var a in p||(u=Object.keys(u).reduce(function(l,h){return u[h]!=null&&(l[h]=u[h]),l},{})),d)d[a]!==void 0&&c[a]===void 0&&(u[a]=d[a]);return Object.keys(u).length>0?u:void 0},diff:function(d,c){typeof d!="object"&&(d={}),typeof c!="object"&&(c={});var p=Object.keys(d).concat(Object.keys(c)).reduce(function(u,a){return i(d[a],c[a])||(u[a]=c[a]===void 0?null:c[a]),u},{});return Object.keys(p).length>0?p:void 0},transform:function(d,c,p){if(typeof d!="object")return c;if(typeof c=="object"){if(!p)return c;var u=Object.keys(c).reduce(function(a,l){return d[l]===void 0&&(a[l]=c[l]),a},{});return Object.keys(u).length>0?u:void 0}}},iterator:function(d){return new s(d)},length:function(d){return typeof d.delete=="number"?d.delete:typeof d.retain=="number"?d.retain:typeof d.insert=="string"?d.insert.length:1}};function s(d){this.ops=d,this.index=0,this.offset=0}s.prototype.hasNext=function(){return this.peekLength()<1/0},s.prototype.next=function(d){d||(d=1/0);var c=this.ops[this.index];if(c){var p=this.offset,u=n.length(c);if(d>=u-p?(d=u-p,this.index+=1,this.offset=0):this.offset+=d,typeof c.delete=="number")return{delete:d};var a={};return c.attributes&&(a.attributes=c.attributes),typeof c.retain=="number"?a.retain=d:typeof c.insert=="string"?a.insert=c.insert.substr(p,d):a.insert=c.insert,a}return{retain:1/0}},s.prototype.peek=function(){return this.ops[this.index]},s.prototype.peekLength=function(){return this.ops[this.index]?n.length(this.ops[this.index])-this.offset:1/0},s.prototype.peekType=function(){return this.ops[this.index]?typeof this.ops[this.index].delete=="number"?"delete":typeof this.ops[this.index].retain=="number"?"retain":"insert":"retain"},s.prototype.rest=function(){if(this.hasNext()){if(this.offset===0)return this.ops.slice(this.index);var d=this.offset,c=this.index,p=this.next(),u=this.ops.slice(this.index);return this.offset=d,this.index=c,[p].concat(u)}return[]},o.exports=n},function(o,e){var t=function(){function i(u,a){return a!=null&&u instanceof a}var r,n,s;try{r=Map}catch{r=function(){}}try{n=Set}catch{n=function(){}}try{s=Promise}catch{s=function(){}}function d(u,a,l,h,f){typeof a=="object"&&(l=a.depth,h=a.prototype,f=a.includeNonEnumerable,a=a.circular);var m=[],v=[],g=typeof Buffer!="undefined";return a===void 0&&(a=!0),l===void 0&&(l=1/0),function y(b,x){if(b===null)return null;if(x===0)return b;var w,A;if(typeof b!="object")return b;if(i(b,r))w=new r;else if(i(b,n))w=new n;else if(i(b,s))w=new s(function(N,C){b.then(function(M){N(y(M,x-1))},function(M){C(y(M,x-1))})});else if(d.__isArray(b))w=[];else if(d.__isRegExp(b))w=new RegExp(b.source,p(b)),b.lastIndex&&(w.lastIndex=b.lastIndex);else if(d.__isDate(b))w=new Date(b.getTime());else{if(g&&Buffer.isBuffer(b))return w=Buffer.allocUnsafe?Buffer.allocUnsafe(b.length):new Buffer(b.length),b.copy(w),w;i(b,Error)?w=Object.create(b):h===void 0?(A=Object.getPrototypeOf(b),w=Object.create(A)):(w=Object.create(h),A=h)}if(a){var S=m.indexOf(b);if(S!=-1)return v[S];m.push(b),v.push(w)}for(var q in i(b,r)&&b.forEach(function(N,C){var M=y(C,x-1),U=y(N,x-1);w.set(M,U)}),i(b,n)&&b.forEach(function(N){var C=y(N,x-1);w.add(C)}),b){var P;A&&(P=Object.getOwnPropertyDescriptor(A,q)),P&&P.set==null||(w[q]=y(b[q],x-1))}if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(b);for(q=0;q<_.length;q++){var I=_[q];(!(O=Object.getOwnPropertyDescriptor(b,I))||O.enumerable||f)&&(w[I]=y(b[I],x-1),O.enumerable||Object.defineProperty(w,I,{enumerable:!1}))}}if(f){var E=Object.getOwnPropertyNames(b);for(q=0;q<E.length;q++){var O,k=E[q];(O=Object.getOwnPropertyDescriptor(b,k))&&O.enumerable||(w[k]=y(b[k],x-1),Object.defineProperty(w,k,{enumerable:!1}))}}return w}(u,l)}function c(u){return Object.prototype.toString.call(u)}function p(u){var a="";return u.global&&(a+="g"),u.ignoreCase&&(a+="i"),u.multiline&&(a+="m"),a}return d.clonePrototype=function(u){if(u===null)return null;var a=function(){};return a.prototype=u,new a},d.__objToStr=c,d.__isDate=function(u){return typeof u=="object"&&c(u)==="[object Date]"},d.__isArray=function(u){return typeof u=="object"&&c(u)==="[object Array]"},d.__isRegExp=function(u){return typeof u=="object"&&c(u)==="[object RegExp]"},d.__getRegExpFlags=p,d}();typeof o=="object"&&o.exports&&(o.exports=t)},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(v,g){if(Array.isArray(v))return v;if(Symbol.iterator in Object(v))return function(y,b){var x=[],w=!0,A=!1,S=void 0;try{for(var q,P=y[Symbol.iterator]();!(w=(q=P.next()).done)&&(x.push(q.value),!b||x.length!==b);w=!0);}catch(_){A=!0,S=_}finally{try{!w&&P.return&&P.return()}finally{if(A)throw S}}return x}(v,g);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function v(g,y){for(var b=0;b<y.length;b++){var x=y[b];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(g,x.key,x)}}return function(g,y,b){return y&&v(g.prototype,y),b&&v(g,b),g}}(),n=function v(g,y,b){g===null&&(g=Function.prototype);var x=Object.getOwnPropertyDescriptor(g,y);if(x===void 0){var w=Object.getPrototypeOf(g);return w===null?void 0:v(w,y,b)}if("value"in x)return x.value;var A=x.get;return A!==void 0?A.call(b):void 0},s=h(t(0)),d=h(t(8)),c=t(4),p=h(c),u=h(t(16)),a=h(t(13)),l=h(t(25));function h(v){return v&&v.__esModule?v:{default:v}}function f(v){return v instanceof p.default||v instanceof c.BlockEmbed}var m=function(v){function g(y,b){(function(w,A){if(!(w instanceof A))throw new TypeError("Cannot call a class as a function")})(this,g);var x=function(w,A){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!A||typeof A!="object"&&typeof A!="function"?w:A}(this,(g.__proto__||Object.getPrototypeOf(g)).call(this,y));return x.emitter=b.emitter,Array.isArray(b.whitelist)&&(x.whitelist=b.whitelist.reduce(function(w,A){return w[A]=!0,w},{})),x.domNode.addEventListener("DOMNodeInserted",function(){}),x.optimize(),x.enable(),x}return function(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(y,b):y.__proto__=b)}(g,v),r(g,[{key:"batchStart",value:function(){this.batch=!0}},{key:"batchEnd",value:function(){this.batch=!1,this.optimize()}},{key:"deleteAt",value:function(y,b){var x=this.line(y),w=i(x,2),A=w[0],S=w[1],q=this.line(y+b),P=i(q,1)[0];if(n(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"deleteAt",this).call(this,y,b),P!=null&&A!==P&&S>0){if(A instanceof c.BlockEmbed||P instanceof c.BlockEmbed)return void this.optimize();if(A instanceof a.default){var _=A.newlineIndex(A.length(),!0);if(_>-1&&(A=A.split(_+1))===P)return void this.optimize()}else if(P instanceof a.default){var I=P.newlineIndex(0);I>-1&&P.split(I+1)}var E=P.children.head instanceof u.default?null:P.children.head;A.moveChildren(P,E),A.remove()}this.optimize()}},{key:"enable",value:function(){var y=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];this.domNode.setAttribute("contenteditable",y)}},{key:"formatAt",value:function(y,b,x,w){(this.whitelist==null||this.whitelist[x])&&(n(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"formatAt",this).call(this,y,b,x,w),this.optimize())}},{key:"insertAt",value:function(y,b,x){if(x==null||this.whitelist==null||this.whitelist[b]){if(y>=this.length())if(x==null||s.default.query(b,s.default.Scope.BLOCK)==null){var w=s.default.create(this.statics.defaultChild);this.appendChild(w),x==null&&b.endsWith(`
`)&&(b=b.slice(0,-1)),w.insertAt(0,b,x)}else{var A=s.default.create(b,x);this.appendChild(A)}else n(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"insertAt",this).call(this,y,b,x);this.optimize()}}},{key:"insertBefore",value:function(y,b){if(y.statics.scope===s.default.Scope.INLINE_BLOT){var x=s.default.create(this.statics.defaultChild);x.appendChild(y),y=x}n(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"insertBefore",this).call(this,y,b)}},{key:"leaf",value:function(y){return this.path(y).pop()||[null,-1]}},{key:"line",value:function(y){return y===this.length()?this.line(y-1):this.descendant(f,y)}},{key:"lines",value:function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE,x=function w(A,S,q){var P=[],_=q;return A.children.forEachAt(S,q,function(I,E,O){f(I)?P.push(I):I instanceof s.default.Container&&(P=P.concat(w(I,E,_))),_-=O}),P};return x(this,y,b)}},{key:"optimize",value:function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.batch!==!0&&(n(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"optimize",this).call(this,y,b),y.length>0&&this.emitter.emit(d.default.events.SCROLL_OPTIMIZE,y,b))}},{key:"path",value:function(y){return n(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"path",this).call(this,y).slice(1)}},{key:"update",value:function(y){if(this.batch!==!0){var b=d.default.sources.USER;typeof y=="string"&&(b=y),Array.isArray(y)||(y=this.observer.takeRecords()),y.length>0&&this.emitter.emit(d.default.events.SCROLL_BEFORE_UPDATE,b,y),n(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"update",this).call(this,y.concat([])),y.length>0&&this.emitter.emit(d.default.events.SCROLL_UPDATE,b,y)}}}]),g}(s.default.Scroll);m.blotName="scroll",m.className="ql-editor",m.tagName="DIV",m.defaultChild="block",m.allowedChildren=[p.default,c.BlockEmbed,l.default],e.default=m},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.SHORTKEY=e.default=void 0;var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},r=function(E,O){if(Array.isArray(E))return E;if(Symbol.iterator in Object(E))return function(k,N){var C=[],M=!0,U=!1,K=void 0;try{for(var J,Ie=k[Symbol.iterator]();!(M=(J=Ie.next()).done)&&(C.push(J.value),!N||C.length!==N);M=!0);}catch(R){U=!0,K=R}finally{try{!M&&Ie.return&&Ie.return()}finally{if(U)throw K}}return C}(E,O);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function E(O,k){for(var N=0;N<k.length;N++){var C=k[N];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(O,C.key,C)}}return function(O,k,N){return k&&E(O.prototype,k),N&&E(O,N),O}}(),s=m(t(21)),d=m(t(11)),c=m(t(3)),p=m(t(2)),u=m(t(20)),a=m(t(0)),l=m(t(5)),h=m(t(10)),f=m(t(9));function m(E){return E&&E.__esModule?E:{default:E}}function v(E,O,k){return O in E?Object.defineProperty(E,O,{value:k,enumerable:!0,configurable:!0,writable:!0}):E[O]=k,E}var g=(0,h.default)("quill:keyboard"),y=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey",b=function(E){function O(k,N){(function(M,U){if(!(M instanceof U))throw new TypeError("Cannot call a class as a function")})(this,O);var C=function(M,U){if(!M)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!U||typeof U!="object"&&typeof U!="function"?M:U}(this,(O.__proto__||Object.getPrototypeOf(O)).call(this,k,N));return C.bindings={},Object.keys(C.options.bindings).forEach(function(M){(M!=="list autofill"||k.scroll.whitelist==null||k.scroll.whitelist.list)&&C.options.bindings[M]&&C.addBinding(C.options.bindings[M])}),C.addBinding({key:O.keys.ENTER,shiftKey:null},q),C.addBinding({key:O.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},function(){}),/Firefox/i.test(navigator.userAgent)?(C.addBinding({key:O.keys.BACKSPACE},{collapsed:!0},w),C.addBinding({key:O.keys.DELETE},{collapsed:!0},A)):(C.addBinding({key:O.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/},w),C.addBinding({key:O.keys.DELETE},{collapsed:!0,suffix:/^.?$/},A)),C.addBinding({key:O.keys.BACKSPACE},{collapsed:!1},S),C.addBinding({key:O.keys.DELETE},{collapsed:!1},S),C.addBinding({key:O.keys.BACKSPACE,altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},w),C.listen(),C}return function(k,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof N);k.prototype=Object.create(N&&N.prototype,{constructor:{value:k,enumerable:!1,writable:!0,configurable:!0}}),N&&(Object.setPrototypeOf?Object.setPrototypeOf(k,N):k.__proto__=N)}(O,E),n(O,null,[{key:"match",value:function(k,N){return N=I(N),!["altKey","ctrlKey","metaKey","shiftKey"].some(function(C){return!!N[C]!==k[C]&&N[C]!==null})&&N.key===(k.which||k.keyCode)}}]),n(O,[{key:"addBinding",value:function(k){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},M=I(k);if(M==null||M.key==null)return g.warn("Attempted to add invalid keyboard binding",M);typeof N=="function"&&(N={handler:N}),typeof C=="function"&&(C={handler:C}),M=(0,c.default)(M,N,C),this.bindings[M.key]=this.bindings[M.key]||[],this.bindings[M.key].push(M)}},{key:"listen",value:function(){var k=this;this.quill.root.addEventListener("keydown",function(N){if(!N.defaultPrevented){var C=N.which||N.keyCode,M=(k.bindings[C]||[]).filter(function(we){return O.match(N,we)});if(M.length!==0){var U=k.quill.getSelection();if(U!=null&&k.quill.hasFocus()){var K=k.quill.getLine(U.index),J=r(K,2),Ie=J[0],R=J[1],$=k.quill.getLeaf(U.index),F=r($,2),z=F[0],V=F[1],se=U.length===0?[z,V]:k.quill.getLeaf(U.index+U.length),ne=r(se,2),ue=ne[0],De=ne[1],be=z instanceof a.default.Text?z.value().slice(0,V):"",ut=ue instanceof a.default.Text?ue.value().slice(De):"",Ne={collapsed:U.length===0,empty:U.length===0&&Ie.length()<=1,format:k.quill.getFormat(U),offset:R,prefix:be,suffix:ut};M.some(function(we){if(we.collapsed!=null&&we.collapsed!==Ne.collapsed||we.empty!=null&&we.empty!==Ne.empty||we.offset!=null&&we.offset!==Ne.offset)return!1;if(Array.isArray(we.format)){if(we.format.every(function(He){return Ne.format[He]==null}))return!1}else if(i(we.format)==="object"&&!Object.keys(we.format).every(function(He){return we.format[He]===!0?Ne.format[He]!=null:we.format[He]===!1?Ne.format[He]==null:(0,d.default)(we.format[He],Ne.format[He])}))return!1;return!(we.prefix!=null&&!we.prefix.test(Ne.prefix)||we.suffix!=null&&!we.suffix.test(Ne.suffix)||we.handler.call(k,U,Ne)===!0)})&&N.preventDefault()}}}})}}]),O}(f.default);function x(E,O){var k,N=E===b.keys.LEFT?"prefix":"suffix";return v(k={key:E,shiftKey:O,altKey:null},N,/^$/),v(k,"handler",function(C){var M=C.index;E===b.keys.RIGHT&&(M+=C.length+1);var U=this.quill.getLeaf(M);return!(r(U,1)[0]instanceof a.default.Embed&&(E===b.keys.LEFT?O?this.quill.setSelection(C.index-1,C.length+1,l.default.sources.USER):this.quill.setSelection(C.index-1,l.default.sources.USER):O?this.quill.setSelection(C.index,C.length+1,l.default.sources.USER):this.quill.setSelection(C.index+C.length+1,l.default.sources.USER),1))}),k}function w(E,O){if(!(E.index===0||this.quill.getLength()<=1)){var k=this.quill.getLine(E.index),N=r(k,1)[0],C={};if(O.offset===0){var M=this.quill.getLine(E.index-1),U=r(M,1)[0];if(U!=null&&U.length()>1){var K=N.formats(),J=this.quill.getFormat(E.index-1,1);C=u.default.attributes.diff(K,J)||{}}}var Ie=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(O.prefix)?2:1;this.quill.deleteText(E.index-Ie,Ie,l.default.sources.USER),Object.keys(C).length>0&&this.quill.formatLine(E.index-Ie,Ie,C,l.default.sources.USER),this.quill.focus()}}function A(E,O){var k=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(O.suffix)?2:1;if(!(E.index>=this.quill.getLength()-k)){var N={},C=0,M=this.quill.getLine(E.index),U=r(M,1)[0];if(O.offset>=U.length()-1){var K=this.quill.getLine(E.index+1),J=r(K,1)[0];if(J){var Ie=U.formats(),R=this.quill.getFormat(E.index,1);N=u.default.attributes.diff(Ie,R)||{},C=J.length()}}this.quill.deleteText(E.index,k,l.default.sources.USER),Object.keys(N).length>0&&this.quill.formatLine(E.index+C-1,k,N,l.default.sources.USER)}}function S(E){var O=this.quill.getLines(E),k={};if(O.length>1){var N=O[0].formats(),C=O[O.length-1].formats();k=u.default.attributes.diff(C,N)||{}}this.quill.deleteText(E,l.default.sources.USER),Object.keys(k).length>0&&this.quill.formatLine(E.index,1,k,l.default.sources.USER),this.quill.setSelection(E.index,l.default.sources.SILENT),this.quill.focus()}function q(E,O){var k=this;E.length>0&&this.quill.scroll.deleteAt(E.index,E.length);var N=Object.keys(O.format).reduce(function(C,M){return a.default.query(M,a.default.Scope.BLOCK)&&!Array.isArray(O.format[M])&&(C[M]=O.format[M]),C},{});this.quill.insertText(E.index,`
`,N,l.default.sources.USER),this.quill.setSelection(E.index+1,l.default.sources.SILENT),this.quill.focus(),Object.keys(O.format).forEach(function(C){N[C]==null&&(Array.isArray(O.format[C])||C!=="link"&&k.quill.format(C,O.format[C],l.default.sources.USER))})}function P(E){return{key:b.keys.TAB,shiftKey:!E,format:{"code-block":!0},handler:function(O){var k=a.default.query("code-block"),N=O.index,C=O.length,M=this.quill.scroll.descendant(k,N),U=r(M,2),K=U[0],J=U[1];if(K!=null){var Ie=this.quill.getIndex(K),R=K.newlineIndex(J,!0)+1,$=K.newlineIndex(Ie+J+C),F=K.domNode.textContent.slice(R,$).split(`
`);J=0,F.forEach(function(z,V){E?(K.insertAt(R+J,k.TAB),J+=k.TAB.length,V===0?N+=k.TAB.length:C+=k.TAB.length):z.startsWith(k.TAB)&&(K.deleteAt(R+J,k.TAB.length),J-=k.TAB.length,V===0?N-=k.TAB.length:C-=k.TAB.length),J+=z.length+1}),this.quill.update(l.default.sources.USER),this.quill.setSelection(N,C,l.default.sources.SILENT)}}}}function _(E){return{key:E[0].toUpperCase(),shortKey:!0,handler:function(O,k){this.quill.format(E,!k.format[E],l.default.sources.USER)}}}function I(E){if(typeof E=="string"||typeof E=="number")return I({key:E});if((E===void 0?"undefined":i(E))==="object"&&(E=(0,s.default)(E,!1)),typeof E.key=="string")if(b.keys[E.key.toUpperCase()]!=null)E.key=b.keys[E.key.toUpperCase()];else{if(E.key.length!==1)return null;E.key=E.key.toUpperCase().charCodeAt(0)}return E.shortKey&&(E[y]=E.shortKey,delete E.shortKey),E}b.keys={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},b.DEFAULTS={bindings:{bold:_("bold"),italic:_("italic"),underline:_("underline"),indent:{key:b.keys.TAB,format:["blockquote","indent","list"],handler:function(E,O){if(O.collapsed&&O.offset!==0)return!0;this.quill.format("indent","+1",l.default.sources.USER)}},outdent:{key:b.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],handler:function(E,O){if(O.collapsed&&O.offset!==0)return!0;this.quill.format("indent","-1",l.default.sources.USER)}},"outdent backspace":{key:b.keys.BACKSPACE,collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler:function(E,O){O.format.indent!=null?this.quill.format("indent","-1",l.default.sources.USER):O.format.list!=null&&this.quill.format("list",!1,l.default.sources.USER)}},"indent code-block":P(!0),"outdent code-block":P(!1),"remove tab":{key:b.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,handler:function(E){this.quill.deleteText(E.index-1,1,l.default.sources.USER)}},tab:{key:b.keys.TAB,handler:function(E){this.quill.history.cutoff();var O=new p.default().retain(E.index).delete(E.length).insert("	");this.quill.updateContents(O,l.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(E.index+1,l.default.sources.SILENT)}},"list empty enter":{key:b.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function(E,O){this.quill.format("list",!1,l.default.sources.USER),O.format.indent&&this.quill.format("indent",!1,l.default.sources.USER)}},"checklist enter":{key:b.keys.ENTER,collapsed:!0,format:{list:"checked"},handler:function(E){var O=this.quill.getLine(E.index),k=r(O,2),N=k[0],C=k[1],M=(0,c.default)({},N.formats(),{list:"checked"}),U=new p.default().retain(E.index).insert(`
`,M).retain(N.length()-C-1).retain(1,{list:"unchecked"});this.quill.updateContents(U,l.default.sources.USER),this.quill.setSelection(E.index+1,l.default.sources.SILENT),this.quill.scrollIntoView()}},"header enter":{key:b.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,handler:function(E,O){var k=this.quill.getLine(E.index),N=r(k,2),C=N[0],M=N[1],U=new p.default().retain(E.index).insert(`
`,O.format).retain(C.length()-M-1).retain(1,{header:null});this.quill.updateContents(U,l.default.sources.USER),this.quill.setSelection(E.index+1,l.default.sources.SILENT),this.quill.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler:function(E,O){var k=O.prefix.length,N=this.quill.getLine(E.index),C=r(N,2),M=C[0],U=C[1];if(U>k)return!0;var K=void 0;switch(O.prefix.trim()){case"[]":case"[ ]":K="unchecked";break;case"[x]":K="checked";break;case"-":case"*":K="bullet";break;default:K="ordered"}this.quill.insertText(E.index," ",l.default.sources.USER),this.quill.history.cutoff();var J=new p.default().retain(E.index-U).delete(k+1).retain(M.length()-2-U).retain(1,{list:K});this.quill.updateContents(J,l.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(E.index-k,l.default.sources.SILENT)}},"code exit":{key:b.keys.ENTER,collapsed:!0,format:["code-block"],prefix:/\n\n$/,suffix:/^\s+$/,handler:function(E){var O=this.quill.getLine(E.index),k=r(O,2),N=k[0],C=k[1],M=new p.default().retain(E.index+N.length()-C-2).retain(1,{"code-block":null}).delete(1);this.quill.updateContents(M,l.default.sources.USER)}},"embed left":x(b.keys.LEFT,!1),"embed left shift":x(b.keys.LEFT,!0),"embed right":x(b.keys.RIGHT,!1),"embed right shift":x(b.keys.RIGHT,!0)}},e.default=b,e.SHORTKEY=y},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(u,a){if(Array.isArray(u))return u;if(Symbol.iterator in Object(u))return function(l,h){var f=[],m=!0,v=!1,g=void 0;try{for(var y,b=l[Symbol.iterator]();!(m=(y=b.next()).done)&&(f.push(y.value),!h||f.length!==h);m=!0);}catch(x){v=!0,g=x}finally{try{!m&&b.return&&b.return()}finally{if(v)throw g}}return f}(u,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function u(a,l,h){a===null&&(a=Function.prototype);var f=Object.getOwnPropertyDescriptor(a,l);if(f===void 0){var m=Object.getPrototypeOf(a);return m===null?void 0:u(m,l,h)}if("value"in f)return f.value;var v=f.get;return v!==void 0?v.call(h):void 0},n=function(){function u(a,l){for(var h=0;h<l.length;h++){var f=l[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(a,f.key,f)}}return function(a,l,h){return l&&u(a.prototype,l),h&&u(a,h),a}}(),s=c(t(0)),d=c(t(7));function c(u){return u&&u.__esModule?u:{default:u}}var p=function(u){function a(l,h){(function(m,v){if(!(m instanceof v))throw new TypeError("Cannot call a class as a function")})(this,a);var f=function(m,v){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!v||typeof v!="object"&&typeof v!="function"?m:v}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return f.selection=h,f.textNode=document.createTextNode(a.CONTENTS),f.domNode.appendChild(f.textNode),f._length=0,f}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,u),n(a,null,[{key:"value",value:function(){}}]),n(a,[{key:"detach",value:function(){this.parent!=null&&this.parent.removeChild(this)}},{key:"format",value:function(l,h){if(this._length!==0)return r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"format",this).call(this,l,h);for(var f=this,m=0;f!=null&&f.statics.scope!==s.default.Scope.BLOCK_BLOT;)m+=f.offset(f.parent),f=f.parent;f!=null&&(this._length=a.CONTENTS.length,f.optimize(),f.formatAt(m,a.CONTENTS.length,l,h),this._length=0)}},{key:"index",value:function(l,h){return l===this.textNode?0:r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"index",this).call(this,l,h)}},{key:"length",value:function(){return this._length}},{key:"position",value:function(){return[this.textNode,this.textNode.data.length]}},{key:"remove",value:function(){r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"remove",this).call(this),this.parent=null}},{key:"restore",value:function(){if(!this.selection.composing&&this.parent!=null){var l=this.textNode,h=this.selection.getNativeRange(),f=void 0,m=void 0,v=void 0;if(h!=null&&h.start.node===l&&h.end.node===l){var g=[l,h.start.offset,h.end.offset];f=g[0],m=g[1],v=g[2]}for(;this.domNode.lastChild!=null&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);if(this.textNode.data!==a.CONTENTS){var y=this.textNode.data.split(a.CONTENTS).join("");this.next instanceof d.default?(f=this.next.domNode,this.next.insertAt(0,y),this.textNode.data=a.CONTENTS):(this.textNode.data=y,this.parent.insertBefore(s.default.create(this.textNode),this),this.textNode=document.createTextNode(a.CONTENTS),this.domNode.appendChild(this.textNode))}if(this.remove(),m!=null){var b=[m,v].map(function(w){return Math.max(0,Math.min(f.data.length,w-1))}),x=i(b,2);return m=x[0],v=x[1],{startNode:f,startOffset:m,endNode:f,endOffset:v}}}}},{key:"update",value:function(l,h){var f=this;if(l.some(function(v){return v.type==="characterData"&&v.target===f.textNode})){var m=this.restore();m&&(h.range=m)}}},{key:"value",value:function(){return""}}]),a}(s.default.Embed);p.blotName="cursor",p.className="ql-cursor",p.tagName="span",p.CONTENTS="\uFEFF",e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=s(t(0)),r=t(4),n=s(r);function s(u){return u&&u.__esModule?u:{default:u}}function d(u,a){if(!(u instanceof a))throw new TypeError("Cannot call a class as a function")}function c(u,a){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?u:a}var p=function(u){function a(){return d(this,a),c(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,u),a}(i.default.Container);p.allowedChildren=[n.default,r.BlockEmbed,p],e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.ColorStyle=e.ColorClass=e.ColorAttributor=void 0;var i,r=function(){function h(f,m){for(var v=0;v<m.length;v++){var g=m[v];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(f,g.key,g)}}return function(f,m,v){return m&&h(f.prototype,m),v&&h(f,v),f}}(),n=function h(f,m,v){f===null&&(f=Function.prototype);var g=Object.getOwnPropertyDescriptor(f,m);if(g===void 0){var y=Object.getPrototypeOf(f);return y===null?void 0:h(y,m,v)}if("value"in g)return g.value;var b=g.get;return b!==void 0?b.call(v):void 0},s=t(0),d=(i=s)&&i.__esModule?i:{default:i};function c(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function p(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}var u=function(h){function f(){return c(this,f),p(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments))}return function(m,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);m.prototype=Object.create(v&&v.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(m,v):m.__proto__=v)}(f,h),r(f,[{key:"value",value:function(m){var v=n(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"value",this).call(this,m);return v.startsWith("rgb(")?(v=v.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),"#"+v.split(",").map(function(g){return("00"+parseInt(g).toString(16)).slice(-2)}).join("")):v}}]),f}(d.default.Attributor.Style),a=new d.default.Attributor.Class("color","ql-color",{scope:d.default.Scope.INLINE}),l=new u("color","color",{scope:d.default.Scope.INLINE});e.ColorAttributor=u,e.ColorClass=a,e.ColorStyle=l},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.sanitize=e.default=void 0;var i,r=function(){function a(l,h){for(var f=0;f<h.length;f++){var m=h[f];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(l,m.key,m)}}return function(l,h,f){return h&&a(l.prototype,h),f&&a(l,f),l}}(),n=function a(l,h,f){l===null&&(l=Function.prototype);var m=Object.getOwnPropertyDescriptor(l,h);if(m===void 0){var v=Object.getPrototypeOf(l);return v===null?void 0:a(v,h,f)}if("value"in m)return m.value;var g=m.get;return g!==void 0?g.call(f):void 0},s=t(6);function d(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}function c(a,l){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||typeof l!="object"&&typeof l!="function"?a:l}var p=function(a){function l(){return d(this,l),c(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return function(h,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);h.prototype=Object.create(f&&f.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(h,f):h.__proto__=f)}(l,a),r(l,[{key:"format",value:function(h,f){if(h!==this.statics.blotName||!f)return n(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"format",this).call(this,h,f);f=this.constructor.sanitize(f),this.domNode.setAttribute("href",f)}}],[{key:"create",value:function(h){var f=n(l.__proto__||Object.getPrototypeOf(l),"create",this).call(this,h);return h=this.sanitize(h),f.setAttribute("href",h),f.setAttribute("rel","noopener noreferrer"),f.setAttribute("target","_blank"),f}},{key:"formats",value:function(h){return h.getAttribute("href")}},{key:"sanitize",value:function(h){return u(h,this.PROTOCOL_WHITELIST)?h:this.SANITIZED_URL}}]),l}(((i=s)&&i.__esModule?i:{default:i}).default);function u(a,l){var h=document.createElement("a");h.href=a;var f=h.href.slice(0,h.href.indexOf(":"));return l.indexOf(f)>-1}p.blotName="link",p.tagName="A",p.SANITIZED_URL="about:blank",p.PROTOCOL_WHITELIST=["http","https","mailto","tel"],e.default=p,e.sanitize=u},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r=function(){function a(l,h){for(var f=0;f<h.length;f++){var m=h[f];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(l,m.key,m)}}return function(l,h,f){return h&&a(l.prototype,h),f&&a(l,f),l}}(),n=d(t(23)),s=d(t(107));function d(a){return a&&a.__esModule?a:{default:a}}var c=0;function p(a,l){a.setAttribute(l,a.getAttribute(l)!=="true")}var u=function(){function a(l){var h=this;(function(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")})(this,a),this.select=l,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("mousedown",function(){h.togglePicker()}),this.label.addEventListener("keydown",function(f){switch(f.keyCode){case n.default.keys.ENTER:h.togglePicker();break;case n.default.keys.ESCAPE:h.escape(),f.preventDefault()}}),this.select.addEventListener("change",this.update.bind(this))}return r(a,[{key:"togglePicker",value:function(){this.container.classList.toggle("ql-expanded"),p(this.label,"aria-expanded"),p(this.options,"aria-hidden")}},{key:"buildItem",value:function(l){var h=this,f=document.createElement("span");return f.tabIndex="0",f.setAttribute("role","button"),f.classList.add("ql-picker-item"),l.hasAttribute("value")&&f.setAttribute("data-value",l.getAttribute("value")),l.textContent&&f.setAttribute("data-label",l.textContent),f.addEventListener("click",function(){h.selectItem(f,!0)}),f.addEventListener("keydown",function(m){switch(m.keyCode){case n.default.keys.ENTER:h.selectItem(f,!0),m.preventDefault();break;case n.default.keys.ESCAPE:h.escape(),m.preventDefault()}}),f}},{key:"buildLabel",value:function(){var l=document.createElement("span");return l.classList.add("ql-picker-label"),l.innerHTML=s.default,l.tabIndex="0",l.setAttribute("role","button"),l.setAttribute("aria-expanded","false"),this.container.appendChild(l),l}},{key:"buildOptions",value:function(){var l=this,h=document.createElement("span");h.classList.add("ql-picker-options"),h.setAttribute("aria-hidden","true"),h.tabIndex="-1",h.id="ql-picker-options-"+c,c+=1,this.label.setAttribute("aria-controls",h.id),this.options=h,[].slice.call(this.select.options).forEach(function(f){var m=l.buildItem(f);h.appendChild(m),f.selected===!0&&l.selectItem(m)}),this.container.appendChild(h)}},{key:"buildPicker",value:function(){var l=this;[].slice.call(this.select.attributes).forEach(function(h){l.container.setAttribute(h.name,h.value)}),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}},{key:"escape",value:function(){var l=this;this.close(),setTimeout(function(){return l.label.focus()},1)}},{key:"close",value:function(){this.container.classList.remove("ql-expanded"),this.label.setAttribute("aria-expanded","false"),this.options.setAttribute("aria-hidden","true")}},{key:"selectItem",value:function(l){var h=arguments.length>1&&arguments[1]!==void 0&&arguments[1],f=this.container.querySelector(".ql-selected");if(l!==f&&(f!=null&&f.classList.remove("ql-selected"),l!=null&&(l.classList.add("ql-selected"),this.select.selectedIndex=[].indexOf.call(l.parentNode.children,l),l.hasAttribute("data-value")?this.label.setAttribute("data-value",l.getAttribute("data-value")):this.label.removeAttribute("data-value"),l.hasAttribute("data-label")?this.label.setAttribute("data-label",l.getAttribute("data-label")):this.label.removeAttribute("data-label"),h))){if(typeof Event=="function")this.select.dispatchEvent(new Event("change"));else if((typeof Event=="undefined"?"undefined":i(Event))==="object"){var m=document.createEvent("Event");m.initEvent("change",!0,!0),this.select.dispatchEvent(m)}this.close()}}},{key:"update",value:function(){var l=void 0;if(this.select.selectedIndex>-1){var h=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];l=this.select.options[this.select.selectedIndex],this.selectItem(h)}else this.selectItem(null);var f=l!=null&&l!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",f)}}]),a}();e.default=u},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=g(t(0)),r=g(t(5)),n=t(4),s=g(n),d=g(t(16)),c=g(t(25)),p=g(t(24)),u=g(t(35)),a=g(t(6)),l=g(t(22)),h=g(t(7)),f=g(t(55)),m=g(t(42)),v=g(t(23));function g(y){return y&&y.__esModule?y:{default:y}}r.default.register({"blots/block":s.default,"blots/block/embed":n.BlockEmbed,"blots/break":d.default,"blots/container":c.default,"blots/cursor":p.default,"blots/embed":u.default,"blots/inline":a.default,"blots/scroll":l.default,"blots/text":h.default,"modules/clipboard":f.default,"modules/history":m.default,"modules/keyboard":v.default}),i.default.register(s.default,d.default,p.default,a.default,l.default,h.default),e.default=r.default},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=t(1),r=function(){function n(s){this.domNode=s,this.domNode[i.DATA_KEY]={blot:this}}return Object.defineProperty(n.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),n.create=function(s){if(this.tagName==null)throw new i.ParchmentError("Blot definition missing tagName");var d;return Array.isArray(this.tagName)?(typeof s=="string"&&(s=s.toUpperCase(),parseInt(s).toString()===s&&(s=parseInt(s))),d=typeof s=="number"?document.createElement(this.tagName[s-1]):this.tagName.indexOf(s)>-1?document.createElement(s):document.createElement(this.tagName[0])):d=document.createElement(this.tagName),this.className&&d.classList.add(this.className),d},n.prototype.attach=function(){this.parent!=null&&(this.scroll=this.parent.scroll)},n.prototype.clone=function(){var s=this.domNode.cloneNode(!1);return i.create(s)},n.prototype.detach=function(){this.parent!=null&&this.parent.removeChild(this),delete this.domNode[i.DATA_KEY]},n.prototype.deleteAt=function(s,d){this.isolate(s,d).remove()},n.prototype.formatAt=function(s,d,c,p){var u=this.isolate(s,d);if(i.query(c,i.Scope.BLOT)!=null&&p)u.wrap(c,p);else if(i.query(c,i.Scope.ATTRIBUTE)!=null){var a=i.create(this.statics.scope);u.wrap(a),a.format(c,p)}},n.prototype.insertAt=function(s,d,c){var p=c==null?i.create("text",d):i.create(d,c),u=this.split(s);this.parent.insertBefore(p,u)},n.prototype.insertInto=function(s,d){d===void 0&&(d=null),this.parent!=null&&this.parent.children.remove(this);var c=null;s.children.insertBefore(this,d),d!=null&&(c=d.domNode),this.domNode.parentNode==s.domNode&&this.domNode.nextSibling==c||s.domNode.insertBefore(this.domNode,c),this.parent=s,this.attach()},n.prototype.isolate=function(s,d){var c=this.split(s);return c.split(d),c},n.prototype.length=function(){return 1},n.prototype.offset=function(s){return s===void 0&&(s=this.parent),this.parent==null||this==s?0:this.parent.children.offset(this)+this.parent.offset(s)},n.prototype.optimize=function(s){this.domNode[i.DATA_KEY]!=null&&delete this.domNode[i.DATA_KEY].mutations},n.prototype.remove=function(){this.domNode.parentNode!=null&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},n.prototype.replace=function(s){s.parent!=null&&(s.parent.insertBefore(this,s.next),s.remove())},n.prototype.replaceWith=function(s,d){var c=typeof s=="string"?i.create(s,d):s;return c.replace(this),c},n.prototype.split=function(s,d){return s===0?this:this.next},n.prototype.update=function(s,d){},n.prototype.wrap=function(s,d){var c=typeof s=="string"?i.create(s,d):s;return this.parent!=null&&this.parent.insertBefore(c,this.next),c.appendChild(this),c},n.blotName="abstract",n}();e.default=r},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=t(12),r=t(32),n=t(33),s=t(1),d=function(){function c(p){this.attributes={},this.domNode=p,this.build()}return c.prototype.attribute=function(p,u){u?p.add(this.domNode,u)&&(p.value(this.domNode)!=null?this.attributes[p.attrName]=p:delete this.attributes[p.attrName]):(p.remove(this.domNode),delete this.attributes[p.attrName])},c.prototype.build=function(){var p=this;this.attributes={};var u=i.default.keys(this.domNode),a=r.default.keys(this.domNode),l=n.default.keys(this.domNode);u.concat(a).concat(l).forEach(function(h){var f=s.query(h,s.Scope.ATTRIBUTE);f instanceof i.default&&(p.attributes[f.attrName]=f)})},c.prototype.copy=function(p){var u=this;Object.keys(this.attributes).forEach(function(a){var l=u.attributes[a].value(u.domNode);p.format(a,l)})},c.prototype.move=function(p){var u=this;this.copy(p),Object.keys(this.attributes).forEach(function(a){u.attributes[a].remove(u.domNode)}),this.attributes={}},c.prototype.values=function(){var p=this;return Object.keys(this.attributes).reduce(function(u,a){return u[a]=p.attributes[a].value(p.domNode),u},{})},c}();e.default=d},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,c){d.__proto__=c}||function(d,c){for(var p in c)c.hasOwnProperty(p)&&(d[p]=c[p])},function(d,c){function p(){this.constructor=d}i(d,c),d.prototype=c===null?Object.create(c):(p.prototype=c.prototype,new p)});function n(d,c){return(d.getAttribute("class")||"").split(/\s+/).filter(function(p){return p.indexOf(c+"-")===0})}Object.defineProperty(e,"__esModule",{value:!0});var s=function(d){function c(){return d!==null&&d.apply(this,arguments)||this}return r(c,d),c.keys=function(p){return(p.getAttribute("class")||"").split(/\s+/).map(function(u){return u.split("-").slice(0,-1).join("-")})},c.prototype.add=function(p,u){return!!this.canAdd(p,u)&&(this.remove(p),p.classList.add(this.keyName+"-"+u),!0)},c.prototype.remove=function(p){n(p,this.keyName).forEach(function(u){p.classList.remove(u)}),p.classList.length===0&&p.removeAttribute("class")},c.prototype.value=function(p){var u=(n(p,this.keyName)[0]||"").slice(this.keyName.length+1);return this.canAdd(p,u)?u:""},c}(t(12).default);e.default=s},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,c){d.__proto__=c}||function(d,c){for(var p in c)c.hasOwnProperty(p)&&(d[p]=c[p])},function(d,c){function p(){this.constructor=d}i(d,c),d.prototype=c===null?Object.create(c):(p.prototype=c.prototype,new p)});function n(d){var c=d.split("-"),p=c.slice(1).map(function(u){return u[0].toUpperCase()+u.slice(1)}).join("");return c[0]+p}Object.defineProperty(e,"__esModule",{value:!0});var s=function(d){function c(){return d!==null&&d.apply(this,arguments)||this}return r(c,d),c.keys=function(p){return(p.getAttribute("style")||"").split(";").map(function(u){return u.split(":")[0].trim()})},c.prototype.add=function(p,u){return!!this.canAdd(p,u)&&(p.style[n(this.keyName)]=u,!0)},c.prototype.remove=function(p){p.style[n(this.keyName)]="",p.getAttribute("style")||p.removeAttribute("style")},c.prototype.value=function(p){var u=p.style[n(this.keyName)];return this.canAdd(p,u)?u:""},c}(t(12).default);e.default=s},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function n(s,d){for(var c=0;c<d.length;c++){var p=d[c];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(s,p.key,p)}}return function(s,d,c){return d&&n(s.prototype,d),c&&n(s,c),s}}(),r=function(){function n(s,d){(function(c,p){if(!(c instanceof p))throw new TypeError("Cannot call a class as a function")})(this,n),this.quill=s,this.options=d,this.modules={}}return i(n,[{key:"init",value:function(){var s=this;Object.keys(this.options.modules).forEach(function(d){s.modules[d]==null&&s.addModule(d)})}},{key:"addModule",value:function(s){var d=this.quill.constructor.import("modules/"+s);return this.modules[s]=new d(this.quill,this.options.modules[s]||{}),this.modules[s]}}]),n}();r.DEFAULTS={modules:{}},r.themes={default:r},e.default=r},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function u(a,l){for(var h=0;h<l.length;h++){var f=l[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(a,f.key,f)}}return function(a,l,h){return l&&u(a.prototype,l),h&&u(a,h),a}}(),r=function u(a,l,h){a===null&&(a=Function.prototype);var f=Object.getOwnPropertyDescriptor(a,l);if(f===void 0){var m=Object.getPrototypeOf(a);return m===null?void 0:u(m,l,h)}if("value"in f)return f.value;var v=f.get;return v!==void 0?v.call(h):void 0},n=d(t(0)),s=d(t(7));function d(u){return u&&u.__esModule?u:{default:u}}var c="\uFEFF",p=function(u){function a(l){(function(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")})(this,a);var h=function(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return h.contentNode=document.createElement("span"),h.contentNode.setAttribute("contenteditable",!1),[].slice.call(h.domNode.childNodes).forEach(function(f){h.contentNode.appendChild(f)}),h.leftGuard=document.createTextNode(c),h.rightGuard=document.createTextNode(c),h.domNode.appendChild(h.leftGuard),h.domNode.appendChild(h.contentNode),h.domNode.appendChild(h.rightGuard),h}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,u),i(a,[{key:"index",value:function(l,h){return l===this.leftGuard?0:l===this.rightGuard?1:r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"index",this).call(this,l,h)}},{key:"restore",value:function(l){var h=void 0,f=void 0,m=l.data.split(c).join("");if(l===this.leftGuard)if(this.prev instanceof s.default){var v=this.prev.length();this.prev.insertAt(v,m),h={startNode:this.prev.domNode,startOffset:v+m.length}}else f=document.createTextNode(m),this.parent.insertBefore(n.default.create(f),this),h={startNode:f,startOffset:m.length};else l===this.rightGuard&&(this.next instanceof s.default?(this.next.insertAt(0,m),h={startNode:this.next.domNode,startOffset:m.length}):(f=document.createTextNode(m),this.parent.insertBefore(n.default.create(f),this.next),h={startNode:f,startOffset:m.length}));return l.data=c,h}},{key:"update",value:function(l,h){var f=this;l.forEach(function(m){if(m.type==="characterData"&&(m.target===f.leftGuard||m.target===f.rightGuard)){var v=f.restore(m.target);v&&(h.range=v)}})}}]),a}(n.default.Embed);e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.AlignStyle=e.AlignClass=e.AlignAttribute=void 0;var i,r=t(0),n=(i=r)&&i.__esModule?i:{default:i},s={scope:n.default.Scope.BLOCK,whitelist:["right","center","justify"]},d=new n.default.Attributor.Attribute("align","align",s),c=new n.default.Attributor.Class("align","ql-align",s),p=new n.default.Attributor.Style("align","text-align",s);e.AlignAttribute=d,e.AlignClass=c,e.AlignStyle=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.BackgroundStyle=e.BackgroundClass=void 0;var i,r=t(0),n=(i=r)&&i.__esModule?i:{default:i},s=t(26),d=new n.default.Attributor.Class("background","ql-bg",{scope:n.default.Scope.INLINE}),c=new s.ColorAttributor("background","background-color",{scope:n.default.Scope.INLINE});e.BackgroundClass=d,e.BackgroundStyle=c},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.DirectionStyle=e.DirectionClass=e.DirectionAttribute=void 0;var i,r=t(0),n=(i=r)&&i.__esModule?i:{default:i},s={scope:n.default.Scope.BLOCK,whitelist:["rtl"]},d=new n.default.Attributor.Attribute("direction","dir",s),c=new n.default.Attributor.Class("direction","ql-direction",s),p=new n.default.Attributor.Style("direction","direction",s);e.DirectionAttribute=d,e.DirectionClass=c,e.DirectionStyle=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.FontClass=e.FontStyle=void 0;var i,r=function(){function f(m,v){for(var g=0;g<v.length;g++){var y=v[g];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}return function(m,v,g){return v&&f(m.prototype,v),g&&f(m,g),m}}(),n=function f(m,v,g){m===null&&(m=Function.prototype);var y=Object.getOwnPropertyDescriptor(m,v);if(y===void 0){var b=Object.getPrototypeOf(m);return b===null?void 0:f(b,v,g)}if("value"in y)return y.value;var x=y.get;return x!==void 0?x.call(g):void 0},s=t(0),d=(i=s)&&i.__esModule?i:{default:i};function c(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")}function p(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}var u={scope:d.default.Scope.INLINE,whitelist:["serif","monospace"]},a=new d.default.Attributor.Class("font","ql-font",u),l=function(f){function m(){return c(this,m),p(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return function(v,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);v.prototype=Object.create(g&&g.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(v,g):v.__proto__=g)}(m,f),r(m,[{key:"value",value:function(v){return n(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"value",this).call(this,v).replace(/["']/g,"")}}]),m}(d.default.Attributor.Style),h=new l("font","font-family",u);e.FontStyle=h,e.FontClass=a},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.SizeStyle=e.SizeClass=void 0;var i,r=t(0),n=(i=r)&&i.__esModule?i:{default:i},s=new n.default.Attributor.Class("size","ql-size",{scope:n.default.Scope.INLINE,whitelist:["small","large","huge"]}),d=new n.default.Attributor.Style("size","font-size",{scope:n.default.Scope.INLINE,whitelist:["10px","18px","32px"]});e.SizeClass=s,e.SizeStyle=d},function(o,e,t){o.exports={align:{"":t(76),center:t(77),right:t(78),justify:t(79)},background:t(80),blockquote:t(81),bold:t(82),clean:t(83),code:t(58),"code-block":t(58),color:t(84),direction:{"":t(85),rtl:t(86)},float:{center:t(87),full:t(88),left:t(89),right:t(90)},formula:t(91),header:{1:t(92),2:t(93)},italic:t(94),image:t(95),indent:{"+1":t(96),"-1":t(97)},link:t(98),list:{ordered:t(99),bullet:t(100),check:t(101)},script:{sub:t(102),super:t(103)},strike:t(104),underline:t(105),video:t(106)}},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.getLastChangeIndex=e.default=void 0;var i=function(){function p(u,a){for(var l=0;l<a.length;l++){var h=a[l];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(u,h.key,h)}}return function(u,a,l){return a&&p(u.prototype,a),l&&p(u,l),u}}(),r=s(t(0)),n=s(t(5));function s(p){return p&&p.__esModule?p:{default:p}}var d=function(p){function u(a,l){(function(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")})(this,u);var h=function(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,a,l));return h.lastRecorded=0,h.ignoreChange=!1,h.clear(),h.quill.on(n.default.events.EDITOR_CHANGE,function(f,m,v,g){f!==n.default.events.TEXT_CHANGE||h.ignoreChange||(h.options.userOnly&&g!==n.default.sources.USER?h.transform(m):h.record(m,v))}),h.quill.keyboard.addBinding({key:"Z",shortKey:!0},h.undo.bind(h)),h.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},h.redo.bind(h)),/Win/i.test(navigator.platform)&&h.quill.keyboard.addBinding({key:"Y",shortKey:!0},h.redo.bind(h)),h}return function(a,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);a.prototype=Object.create(l&&l.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(a,l):a.__proto__=l)}(u,p),i(u,[{key:"change",value:function(a,l){if(this.stack[a].length!==0){var h=this.stack[a].pop();this.stack[l].push(h),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(h[a],n.default.sources.USER),this.ignoreChange=!1;var f=c(h[a]);this.quill.setSelection(f)}}},{key:"clear",value:function(){this.stack={undo:[],redo:[]}}},{key:"cutoff",value:function(){this.lastRecorded=0}},{key:"record",value:function(a,l){if(a.ops.length!==0){this.stack.redo=[];var h=this.quill.getContents().diff(l),f=Date.now();if(this.lastRecorded+this.options.delay>f&&this.stack.undo.length>0){var m=this.stack.undo.pop();h=h.compose(m.undo),a=m.redo.compose(a)}else this.lastRecorded=f;this.stack.undo.push({redo:a,undo:h}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}}},{key:"redo",value:function(){this.change("redo","undo")}},{key:"transform",value:function(a){this.stack.undo.forEach(function(l){l.undo=a.transform(l.undo,!0),l.redo=a.transform(l.redo,!0)}),this.stack.redo.forEach(function(l){l.undo=a.transform(l.undo,!0),l.redo=a.transform(l.redo,!0)})}},{key:"undo",value:function(){this.change("undo","redo")}}]),u}(s(t(9)).default);function c(p){var u=p.reduce(function(l,h){return l+=h.delete||0},0),a=p.length()-u;return function(l){var h=l.ops[l.ops.length-1];return h!=null&&(h.insert!=null?typeof h.insert=="string"&&h.insert.endsWith(`
`):h.attributes!=null&&Object.keys(h.attributes).some(function(f){return r.default.query(f,r.default.Scope.BLOCK)!=null}))}(p)&&(a-=1),a}d.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1},e.default=d,e.getLastChangeIndex=c},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BaseTooltip=void 0;var i=function(){function _(I,E){for(var O=0;O<E.length;O++){var k=E[O];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(I,k.key,k)}}return function(I,E,O){return E&&_(I.prototype,E),O&&_(I,O),I}}(),r=function _(I,E,O){I===null&&(I=Function.prototype);var k=Object.getOwnPropertyDescriptor(I,E);if(k===void 0){var N=Object.getPrototypeOf(I);return N===null?void 0:_(N,E,O)}if("value"in k)return k.value;var C=k.get;return C!==void 0?C.call(O):void 0},n=f(t(3)),s=f(t(2)),d=f(t(8)),c=f(t(23)),p=f(t(34)),u=f(t(59)),a=f(t(60)),l=f(t(28)),h=f(t(61));function f(_){return _&&_.__esModule?_:{default:_}}function m(_,I){if(!(_ instanceof I))throw new TypeError("Cannot call a class as a function")}function v(_,I){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!I||typeof I!="object"&&typeof I!="function"?_:I}function g(_,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof I);_.prototype=Object.create(I&&I.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(_,I):_.__proto__=I)}var y=[!1,"center","right","justify"],b=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],x=[!1,"serif","monospace"],w=["1","2","3",!1],A=["small",!1,"large","huge"],S=function(_){function I(E,O){m(this,I);var k=v(this,(I.__proto__||Object.getPrototypeOf(I)).call(this,E,O));return E.emitter.listenDOM("click",document.body,function N(C){if(!document.body.contains(E.root))return document.body.removeEventListener("click",N);k.tooltip==null||k.tooltip.root.contains(C.target)||document.activeElement===k.tooltip.textbox||k.quill.hasFocus()||k.tooltip.hide(),k.pickers!=null&&k.pickers.forEach(function(M){M.container.contains(C.target)||M.close()})}),k}return g(I,_),i(I,[{key:"addModule",value:function(E){var O=r(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"addModule",this).call(this,E);return E==="toolbar"&&this.extendToolbar(O),O}},{key:"buildButtons",value:function(E,O){E.forEach(function(k){(k.getAttribute("class")||"").split(/\s+/).forEach(function(N){if(N.startsWith("ql-")&&(N=N.slice(3),O[N]!=null))if(N==="direction")k.innerHTML=O[N][""]+O[N].rtl;else if(typeof O[N]=="string")k.innerHTML=O[N];else{var C=k.value||"";C!=null&&O[N][C]&&(k.innerHTML=O[N][C])}})})}},{key:"buildPickers",value:function(E,O){var k=this;this.pickers=E.map(function(N){if(N.classList.contains("ql-align"))return N.querySelector("option")==null&&P(N,y),new a.default(N,O.align);if(N.classList.contains("ql-background")||N.classList.contains("ql-color")){var C=N.classList.contains("ql-background")?"background":"color";return N.querySelector("option")==null&&P(N,b,C==="background"?"#ffffff":"#000000"),new u.default(N,O[C])}return N.querySelector("option")==null&&(N.classList.contains("ql-font")?P(N,x):N.classList.contains("ql-header")?P(N,w):N.classList.contains("ql-size")&&P(N,A)),new l.default(N)}),this.quill.on(d.default.events.EDITOR_CHANGE,function(){k.pickers.forEach(function(N){N.update()})})}}]),I}(p.default);S.DEFAULTS=(0,n.default)(!0,{},p.default.DEFAULTS,{modules:{toolbar:{handlers:{formula:function(){this.quill.theme.tooltip.edit("formula")},image:function(){var _=this,I=this.container.querySelector("input.ql-image[type=file]");I==null&&((I=document.createElement("input")).setAttribute("type","file"),I.setAttribute("accept","image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),I.classList.add("ql-image"),I.addEventListener("change",function(){if(I.files!=null&&I.files[0]!=null){var E=new FileReader;E.onload=function(O){var k=_.quill.getSelection(!0);_.quill.updateContents(new s.default().retain(k.index).delete(k.length).insert({image:O.target.result}),d.default.sources.USER),_.quill.setSelection(k.index+1,d.default.sources.SILENT),I.value=""},E.readAsDataURL(I.files[0])}}),this.container.appendChild(I)),I.click()},video:function(){this.quill.theme.tooltip.edit("video")}}}}});var q=function(_){function I(E,O){m(this,I);var k=v(this,(I.__proto__||Object.getPrototypeOf(I)).call(this,E,O));return k.textbox=k.root.querySelector('input[type="text"]'),k.listen(),k}return g(I,_),i(I,[{key:"listen",value:function(){var E=this;this.textbox.addEventListener("keydown",function(O){c.default.match(O,"enter")?(E.save(),O.preventDefault()):c.default.match(O,"escape")&&(E.cancel(),O.preventDefault())})}},{key:"cancel",value:function(){this.hide()}},{key:"edit",value:function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"link",O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),O!=null?this.textbox.value=O:E!==this.root.getAttribute("data-mode")&&(this.textbox.value=""),this.position(this.quill.getBounds(this.quill.selection.savedRange)),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute("data-"+E)||""),this.root.setAttribute("data-mode",E)}},{key:"restoreFocus",value:function(){var E=this.quill.scrollingContainer.scrollTop;this.quill.focus(),this.quill.scrollingContainer.scrollTop=E}},{key:"save",value:function(){var E,O,k=this.textbox.value;switch(this.root.getAttribute("data-mode")){case"link":var N=this.quill.root.scrollTop;this.linkRange?(this.quill.formatText(this.linkRange,"link",k,d.default.sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",k,d.default.sources.USER)),this.quill.root.scrollTop=N;break;case"video":O=(E=k).match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||E.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/),k=O?(O[1]||"https")+"://www.youtube.com/embed/"+O[2]+"?showinfo=0":(O=E.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))?(O[1]||"https")+"://player.vimeo.com/video/"+O[2]+"/":E;case"formula":if(!k)break;var C=this.quill.getSelection(!0);if(C!=null){var M=C.index+C.length;this.quill.insertEmbed(M,this.root.getAttribute("data-mode"),k,d.default.sources.USER),this.root.getAttribute("data-mode")==="formula"&&this.quill.insertText(M+1," ",d.default.sources.USER),this.quill.setSelection(M+2,d.default.sources.USER)}}this.textbox.value="",this.hide()}}]),I}(h.default);function P(_,I){var E=arguments.length>2&&arguments[2]!==void 0&&arguments[2];I.forEach(function(O){var k=document.createElement("option");O===E?k.setAttribute("selected","selected"):k.setAttribute("value",O),_.appendChild(k)})}e.BaseTooltip=q,e.default=S},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function r(){this.head=this.tail=null,this.length=0}return r.prototype.append=function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];this.insertBefore(n[0],null),n.length>1&&this.append.apply(this,n.slice(1))},r.prototype.contains=function(n){for(var s,d=this.iterator();s=d();)if(s===n)return!0;return!1},r.prototype.insertBefore=function(n,s){n&&(n.next=s,s!=null?(n.prev=s.prev,s.prev!=null&&(s.prev.next=n),s.prev=n,s===this.head&&(this.head=n)):this.tail!=null?(this.tail.next=n,n.prev=this.tail,this.tail=n):(n.prev=null,this.head=this.tail=n),this.length+=1)},r.prototype.offset=function(n){for(var s=0,d=this.head;d!=null;){if(d===n)return s;s+=d.length(),d=d.next}return-1},r.prototype.remove=function(n){this.contains(n)&&(n.prev!=null&&(n.prev.next=n.next),n.next!=null&&(n.next.prev=n.prev),n===this.head&&(this.head=n.next),n===this.tail&&(this.tail=n.prev),this.length-=1)},r.prototype.iterator=function(n){return n===void 0&&(n=this.head),function(){var s=n;return n!=null&&(n=n.next),s}},r.prototype.find=function(n,s){s===void 0&&(s=!1);for(var d,c=this.iterator();d=c();){var p=d.length();if(n<p||s&&n===p&&(d.next==null||d.next.length()!==0))return[d,n];n-=p}return[null,0]},r.prototype.forEach=function(n){for(var s,d=this.iterator();s=d();)n(s)},r.prototype.forEachAt=function(n,s,d){if(!(s<=0))for(var c,p=this.find(n),u=p[0],a=n-p[1],l=this.iterator(u);(c=l())&&a<n+s;){var h=c.length();n>a?d(c,n-a,Math.min(s,a+h-n)):d(c,0,Math.min(h,n+s-a)),a+=h}},r.prototype.map=function(n){return this.reduce(function(s,d){return s.push(n(d)),s},[])},r.prototype.reduce=function(n,s){for(var d,c=this.iterator();d=c();)s=n(s,d);return s},r}();e.default=i},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,u){p.__proto__=u}||function(p,u){for(var a in u)u.hasOwnProperty(a)&&(p[a]=u[a])},function(p,u){function a(){this.constructor=p}i(p,u),p.prototype=u===null?Object.create(u):(a.prototype=u.prototype,new a)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(17),s=t(1),d={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},c=function(p){function u(a){var l=p.call(this,a)||this;return l.scroll=l,l.observer=new MutationObserver(function(h){l.update(h)}),l.observer.observe(l.domNode,d),l.attach(),l}return r(u,p),u.prototype.detach=function(){p.prototype.detach.call(this),this.observer.disconnect()},u.prototype.deleteAt=function(a,l){this.update(),a===0&&l===this.length()?this.children.forEach(function(h){h.remove()}):p.prototype.deleteAt.call(this,a,l)},u.prototype.formatAt=function(a,l,h,f){this.update(),p.prototype.formatAt.call(this,a,l,h,f)},u.prototype.insertAt=function(a,l,h){this.update(),p.prototype.insertAt.call(this,a,l,h)},u.prototype.optimize=function(a,l){var h=this;a===void 0&&(a=[]),l===void 0&&(l={}),p.prototype.optimize.call(this,l);for(var f=[].slice.call(this.observer.takeRecords());f.length>0;)a.push(f.pop());for(var m=function(b,x){x===void 0&&(x=!0),b!=null&&b!==h&&b.domNode.parentNode!=null&&(b.domNode[s.DATA_KEY].mutations==null&&(b.domNode[s.DATA_KEY].mutations=[]),x&&m(b.parent))},v=function(b){b.domNode[s.DATA_KEY]!=null&&b.domNode[s.DATA_KEY].mutations!=null&&(b instanceof n.default&&b.children.forEach(v),b.optimize(l))},g=a,y=0;g.length>0;y+=1){if(y>=100)throw new Error("[Parchment] Maximum optimize iterations reached");for(g.forEach(function(b){var x=s.find(b.target,!0);x!=null&&(x.domNode===b.target&&(b.type==="childList"?(m(s.find(b.previousSibling,!1)),[].forEach.call(b.addedNodes,function(w){var A=s.find(w,!1);m(A,!1),A instanceof n.default&&A.children.forEach(function(S){m(S,!1)})})):b.type==="attributes"&&m(x.prev)),m(x))}),this.children.forEach(v),f=(g=[].slice.call(this.observer.takeRecords())).slice();f.length>0;)a.push(f.pop())}},u.prototype.update=function(a,l){var h=this;l===void 0&&(l={}),(a=a||this.observer.takeRecords()).map(function(f){var m=s.find(f.target,!0);return m==null?null:m.domNode[s.DATA_KEY].mutations==null?(m.domNode[s.DATA_KEY].mutations=[f],m):(m.domNode[s.DATA_KEY].mutations.push(f),null)}).forEach(function(f){f!=null&&f!==h&&f.domNode[s.DATA_KEY]!=null&&f.update(f.domNode[s.DATA_KEY].mutations||[],l)}),this.domNode[s.DATA_KEY].mutations!=null&&p.prototype.update.call(this,this.domNode[s.DATA_KEY].mutations,l),this.optimize(a,l)},u.blotName="scroll",u.defaultChild="block",u.scope=s.Scope.BLOCK_BLOT,u.tagName="DIV",u}(n.default);e.default=c},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,p){c.__proto__=p}||function(c,p){for(var u in p)p.hasOwnProperty(u)&&(c[u]=p[u])},function(c,p){function u(){this.constructor=c}i(c,p),c.prototype=p===null?Object.create(p):(u.prototype=p.prototype,new u)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(18),s=t(1),d=function(c){function p(){return c!==null&&c.apply(this,arguments)||this}return r(p,c),p.formats=function(u){if(u.tagName!==p.tagName)return c.formats.call(this,u)},p.prototype.format=function(u,a){var l=this;u!==this.statics.blotName||a?c.prototype.format.call(this,u,a):(this.children.forEach(function(h){h instanceof n.default||(h=h.wrap(p.blotName,!0)),l.attributes.copy(h)}),this.unwrap())},p.prototype.formatAt=function(u,a,l,h){this.formats()[l]!=null||s.query(l,s.Scope.ATTRIBUTE)?this.isolate(u,a).format(l,h):c.prototype.formatAt.call(this,u,a,l,h)},p.prototype.optimize=function(u){c.prototype.optimize.call(this,u);var a=this.formats();if(Object.keys(a).length===0)return this.unwrap();var l=this.next;l instanceof p&&l.prev===this&&function(h,f){if(Object.keys(h).length!==Object.keys(f).length)return!1;for(var m in h)if(h[m]!==f[m])return!1;return!0}(a,l.formats())&&(l.moveChildren(this),l.remove())},p.blotName="inline",p.scope=s.Scope.INLINE_BLOT,p.tagName="SPAN",p}(n.default);e.default=d},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,p){c.__proto__=p}||function(c,p){for(var u in p)p.hasOwnProperty(u)&&(c[u]=p[u])},function(c,p){function u(){this.constructor=c}i(c,p),c.prototype=p===null?Object.create(p):(u.prototype=p.prototype,new u)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(18),s=t(1),d=function(c){function p(){return c!==null&&c.apply(this,arguments)||this}return r(p,c),p.formats=function(u){var a=s.query(p.blotName).tagName;if(u.tagName!==a)return c.formats.call(this,u)},p.prototype.format=function(u,a){s.query(u,s.Scope.BLOCK)!=null&&(u!==this.statics.blotName||a?c.prototype.format.call(this,u,a):this.replaceWith(p.blotName))},p.prototype.formatAt=function(u,a,l,h){s.query(l,s.Scope.BLOCK)!=null?this.format(l,h):c.prototype.formatAt.call(this,u,a,l,h)},p.prototype.insertAt=function(u,a,l){if(l==null||s.query(a,s.Scope.INLINE)!=null)c.prototype.insertAt.call(this,u,a,l);else{var h=this.split(u),f=s.create(a,l);h.parent.insertBefore(f,h)}},p.prototype.update=function(u,a){navigator.userAgent.match(/Trident/)?this.build():c.prototype.update.call(this,u,a)},p.blotName="block",p.scope=s.Scope.BLOCK_BLOT,p.tagName="P",p}(n.default);e.default=d},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,d){s.__proto__=d}||function(s,d){for(var c in d)d.hasOwnProperty(c)&&(s[c]=d[c])},function(s,d){function c(){this.constructor=s}i(s,d),s.prototype=d===null?Object.create(d):(c.prototype=d.prototype,new c)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(s){function d(){return s!==null&&s.apply(this,arguments)||this}return r(d,s),d.formats=function(c){},d.prototype.format=function(c,p){s.prototype.formatAt.call(this,0,this.length(),c,p)},d.prototype.formatAt=function(c,p,u,a){c===0&&p===this.length()?this.format(u,a):s.prototype.formatAt.call(this,c,p,u,a)},d.prototype.formats=function(){return this.statics.formats(this.domNode)},d}(t(19).default);e.default=n},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,p){c.__proto__=p}||function(c,p){for(var u in p)p.hasOwnProperty(u)&&(c[u]=p[u])},function(c,p){function u(){this.constructor=c}i(c,p),c.prototype=p===null?Object.create(p):(u.prototype=p.prototype,new u)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(19),s=t(1),d=function(c){function p(u){var a=c.call(this,u)||this;return a.text=a.statics.value(a.domNode),a}return r(p,c),p.create=function(u){return document.createTextNode(u)},p.value=function(u){var a=u.data;return a.normalize&&(a=a.normalize()),a},p.prototype.deleteAt=function(u,a){this.domNode.data=this.text=this.text.slice(0,u)+this.text.slice(u+a)},p.prototype.index=function(u,a){return this.domNode===u?a:-1},p.prototype.insertAt=function(u,a,l){l==null?(this.text=this.text.slice(0,u)+a+this.text.slice(u),this.domNode.data=this.text):c.prototype.insertAt.call(this,u,a,l)},p.prototype.length=function(){return this.text.length},p.prototype.optimize=function(u){c.prototype.optimize.call(this,u),this.text=this.statics.value(this.domNode),this.text.length===0?this.remove():this.next instanceof p&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},p.prototype.position=function(u,a){return[this.domNode,u]},p.prototype.split=function(u,a){if(a===void 0&&(a=!1),!a){if(u===0)return this;if(u===this.length())return this.next}var l=s.create(this.domNode.splitText(u));return this.parent.insertBefore(l,this.next),this.text=this.statics.value(this.domNode),l},p.prototype.update=function(u,a){var l=this;u.some(function(h){return h.type==="characterData"&&h.target===l.domNode})&&(this.text=this.statics.value(this.domNode))},p.prototype.value=function(){return this.text},p.blotName="text",p.scope=s.Scope.INLINE_BLOT,p}(n.default);e.default=d},function(o,e,t){var i=document.createElement("div");if(i.classList.toggle("test-class",!1),i.classList.contains("test-class")){var r=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(n,s){return arguments.length>1&&!this.contains(n)==!s?s:r.call(this,n)}}String.prototype.startsWith||(String.prototype.startsWith=function(n,s){return s=s||0,this.substr(s,n.length)===n}),String.prototype.endsWith||(String.prototype.endsWith=function(n,s){var d=this.toString();(typeof s!="number"||!isFinite(s)||Math.floor(s)!==s||s>d.length)&&(s=d.length),s-=n.length;var c=d.indexOf(n,s);return c!==-1&&c===s}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(n){if(this===null)throw new TypeError("Array.prototype.find called on null or undefined");if(typeof n!="function")throw new TypeError("predicate must be a function");for(var s,d=Object(this),c=d.length>>>0,p=arguments[1],u=0;u<c;u++)if(s=d[u],n.call(p,s,u,d))return s}}),document.addEventListener("DOMContentLoaded",function(){document.execCommand("enableObjectResizing",!1,!1),document.execCommand("autoUrlDetect",!1,!1)})},function(o,e){var t=-1;function i(u,a,l){if(u==a)return u?[[0,u]]:[];(l<0||u.length<l)&&(l=null);var h=n(u,a),f=u.substring(0,h);h=s(u=u.substring(h),a=a.substring(h));var m=u.substring(u.length-h),v=function(g,y){var b;if(!g)return[[1,y]];if(!y)return[[t,g]];var x=g.length>y.length?g:y,w=g.length>y.length?y:g,A=x.indexOf(w);if(A!=-1)return b=[[1,x.substring(0,A)],[0,w],[1,x.substring(A+w.length)]],g.length>y.length&&(b[0][0]=b[2][0]=t),b;if(w.length==1)return[[t,g],[1,y]];var S=function(N,C){var M=N.length>C.length?N:C,U=N.length>C.length?C:N;if(M.length<4||2*U.length<M.length)return null;function K(ne,ue,De){for(var be,ut,Ne,we,He=ne.substring(De,De+Math.floor(ne.length/4)),$e=-1,dt="";($e=ue.indexOf(He,$e+1))!=-1;){var Ht=n(ne.substring(De),ue.substring($e)),Ze=s(ne.substring(0,De),ue.substring(0,$e));dt.length<Ze+Ht&&(dt=ue.substring($e-Ze,$e)+ue.substring($e,$e+Ht),be=ne.substring(0,De-Ze),ut=ne.substring(De+Ht),Ne=ue.substring(0,$e-Ze),we=ue.substring($e+Ht))}return 2*dt.length>=ne.length?[be,ut,Ne,we,dt]:null}var J,Ie,R,$,F,z=K(M,U,Math.ceil(M.length/4)),V=K(M,U,Math.ceil(M.length/2));if(!z&&!V)return null;J=V?z&&z[4].length>V[4].length?z:V:z,N.length>C.length?(Ie=J[0],R=J[1],$=J[2],F=J[3]):($=J[0],F=J[1],Ie=J[2],R=J[3]);var se=J[4];return[Ie,R,$,F,se]}(g,y);if(S){var q=S[0],P=S[1],_=S[2],I=S[3],E=S[4],O=i(q,_),k=i(P,I);return O.concat([[0,E]],k)}return function(N,C){for(var M=N.length,U=C.length,K=Math.ceil((M+U)/2),J=K,Ie=2*K,R=new Array(Ie),$=new Array(Ie),F=0;F<Ie;F++)R[F]=-1,$[F]=-1;R[J+1]=0,$[J+1]=0;for(var z=M-U,V=z%2!=0,se=0,ne=0,ue=0,De=0,be=0;be<K;be++){for(var ut=-be+se;ut<=be-ne;ut+=2){for(var Ne=J+ut,we=(Ze=ut==-be||ut!=be&&R[Ne-1]<R[Ne+1]?R[Ne+1]:R[Ne-1]+1)-ut;Ze<M&&we<U&&N.charAt(Ze)==C.charAt(we);)Ze++,we++;if(R[Ne]=Ze,Ze>M)ne+=2;else if(we>U)se+=2;else if(V&&(dt=J+z-ut)>=0&&dt<Ie&&$[dt]!=-1&&Ze>=($e=M-$[dt]))return r(N,C,Ze,we)}for(var He=-be+ue;He<=be-De;He+=2){for(var $e,dt=J+He,Ht=($e=He==-be||He!=be&&$[dt-1]<$[dt+1]?$[dt+1]:$[dt-1]+1)-He;$e<M&&Ht<U&&N.charAt(M-$e-1)==C.charAt(U-Ht-1);)$e++,Ht++;if($[dt]=$e,$e>M)De+=2;else if(Ht>U)ue+=2;else if(!V){var Ze;if((Ne=J+z-He)>=0&&Ne<Ie&&R[Ne]!=-1&&(we=J+(Ze=R[Ne])-Ne,Ze>=($e=M-$e)))return r(N,C,Ze,we)}}}return[[t,N],[1,C]]}(g,y)}(u=u.substring(0,u.length-h),a=a.substring(0,a.length-h));return f&&v.unshift([0,f]),m&&v.push([0,m]),d(v),l!=null&&(v=function(g,y){var b=function(P,_){if(_===0)return[0,P];for(var I=0,E=0;E<P.length;E++){var O=P[E];if(O[0]===t||O[0]===0){var k=I+O[1].length;if(_===k)return[E+1,P];if(_<k){P=P.slice();var N=_-I,C=[O[0],O[1].slice(0,N)],M=[O[0],O[1].slice(N)];return P.splice(E,1,C,M),[E+1,P]}I=k}}throw new Error("cursor_pos is out of bounds!")}(g,y),x=b[1],w=b[0],A=x[w],S=x[w+1];if(A==null||A[0]!==0)return g;if(S!=null&&A[1]+S[1]===S[1]+A[1])return x.splice(w,2,S,A),p(x,w,2);if(S!=null&&S[1].indexOf(A[1])===0){x.splice(w,2,[S[0],A[1]],[0,A[1]]);var q=S[1].slice(A[1].length);return q.length>0&&x.splice(w+2,0,[S[0],q]),p(x,w,3)}return g}(v,l)),v=function(g){for(var y=!1,b=function(S){return S.charCodeAt(0)>=56320&&S.charCodeAt(0)<=57343},x=function(S){return S.charCodeAt(S.length-1)>=55296&&S.charCodeAt(S.length-1)<=56319},w=2;w<g.length;w+=1)g[w-2][0]===0&&x(g[w-2][1])&&g[w-1][0]===t&&b(g[w-1][1])&&g[w][0]===1&&b(g[w][1])&&(y=!0,g[w-1][1]=g[w-2][1].slice(-1)+g[w-1][1],g[w][1]=g[w-2][1].slice(-1)+g[w][1],g[w-2][1]=g[w-2][1].slice(0,-1));if(!y)return g;var A=[];for(w=0;w<g.length;w+=1)g[w][1].length>0&&A.push(g[w]);return A}(v),v}function r(u,a,l,h){var f=u.substring(0,l),m=a.substring(0,h),v=u.substring(l),g=a.substring(h),y=i(f,m),b=i(v,g);return y.concat(b)}function n(u,a){if(!u||!a||u.charAt(0)!=a.charAt(0))return 0;for(var l=0,h=Math.min(u.length,a.length),f=h,m=0;l<f;)u.substring(m,f)==a.substring(m,f)?m=l=f:h=f,f=Math.floor((h-l)/2+l);return f}function s(u,a){if(!u||!a||u.charAt(u.length-1)!=a.charAt(a.length-1))return 0;for(var l=0,h=Math.min(u.length,a.length),f=h,m=0;l<f;)u.substring(u.length-f,u.length-m)==a.substring(a.length-f,a.length-m)?m=l=f:h=f,f=Math.floor((h-l)/2+l);return f}function d(u){u.push([0,""]);for(var a,l=0,h=0,f=0,m="",v="";l<u.length;)switch(u[l][0]){case 1:f++,v+=u[l][1],l++;break;case t:h++,m+=u[l][1],l++;break;case 0:h+f>1?(h!==0&&f!==0&&((a=n(v,m))!==0&&(l-h-f>0&&u[l-h-f-1][0]==0?u[l-h-f-1][1]+=v.substring(0,a):(u.splice(0,0,[0,v.substring(0,a)]),l++),v=v.substring(a),m=m.substring(a)),(a=s(v,m))!==0&&(u[l][1]=v.substring(v.length-a)+u[l][1],v=v.substring(0,v.length-a),m=m.substring(0,m.length-a))),h===0?u.splice(l-f,h+f,[1,v]):f===0?u.splice(l-h,h+f,[t,m]):u.splice(l-h-f,h+f,[t,m],[1,v]),l=l-h-f+(h?1:0)+(f?1:0)+1):l!==0&&u[l-1][0]==0?(u[l-1][1]+=u[l][1],u.splice(l,1)):l++,f=0,h=0,m="",v=""}u[u.length-1][1]===""&&u.pop();var g=!1;for(l=1;l<u.length-1;)u[l-1][0]==0&&u[l+1][0]==0&&(u[l][1].substring(u[l][1].length-u[l-1][1].length)==u[l-1][1]?(u[l][1]=u[l-1][1]+u[l][1].substring(0,u[l][1].length-u[l-1][1].length),u[l+1][1]=u[l-1][1]+u[l+1][1],u.splice(l-1,1),g=!0):u[l][1].substring(0,u[l+1][1].length)==u[l+1][1]&&(u[l-1][1]+=u[l+1][1],u[l][1]=u[l][1].substring(u[l+1][1].length)+u[l+1][1],u.splice(l+1,1),g=!0)),l++;g&&d(u)}var c=i;function p(u,a,l){for(var h=a+l-1;h>=0&&h>=a-1;h--)if(h+1<u.length){var f=u[h],m=u[h+1];f[0]===m[1]&&u.splice(h,2,[f[0],f[1]+m[1]])}return u}c.INSERT=1,c.DELETE=t,c.EQUAL=0,o.exports=c},function(o,e){function t(i){var r=[];for(var n in i)r.push(n);return r}(o.exports=typeof Object.keys=="function"?Object.keys:t).shim=t},function(o,e){var t=function(){return Object.prototype.toString.call(arguments)}()=="[object Arguments]";function i(n){return Object.prototype.toString.call(n)=="[object Arguments]"}function r(n){return n&&typeof n=="object"&&typeof n.length=="number"&&Object.prototype.hasOwnProperty.call(n,"callee")&&!Object.prototype.propertyIsEnumerable.call(n,"callee")||!1}(e=o.exports=t?i:r).supported=i,e.unsupported=r},function(o,e){var t=Object.prototype.hasOwnProperty,i="~";function r(){}function n(d,c,p){this.fn=d,this.context=c,this.once=p||!1}function s(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(i=!1)),s.prototype.eventNames=function(){var d,c,p=[];if(this._eventsCount===0)return p;for(c in d=this._events)t.call(d,c)&&p.push(i?c.slice(1):c);return Object.getOwnPropertySymbols?p.concat(Object.getOwnPropertySymbols(d)):p},s.prototype.listeners=function(d,c){var p=i?i+d:d,u=this._events[p];if(c)return!!u;if(!u)return[];if(u.fn)return[u.fn];for(var a=0,l=u.length,h=new Array(l);a<l;a++)h[a]=u[a].fn;return h},s.prototype.emit=function(d,c,p,u,a,l){var h=i?i+d:d;if(!this._events[h])return!1;var f,m,v=this._events[h],g=arguments.length;if(v.fn){switch(v.once&&this.removeListener(d,v.fn,void 0,!0),g){case 1:return v.fn.call(v.context),!0;case 2:return v.fn.call(v.context,c),!0;case 3:return v.fn.call(v.context,c,p),!0;case 4:return v.fn.call(v.context,c,p,u),!0;case 5:return v.fn.call(v.context,c,p,u,a),!0;case 6:return v.fn.call(v.context,c,p,u,a,l),!0}for(m=1,f=new Array(g-1);m<g;m++)f[m-1]=arguments[m];v.fn.apply(v.context,f)}else{var y,b=v.length;for(m=0;m<b;m++)switch(v[m].once&&this.removeListener(d,v[m].fn,void 0,!0),g){case 1:v[m].fn.call(v[m].context);break;case 2:v[m].fn.call(v[m].context,c);break;case 3:v[m].fn.call(v[m].context,c,p);break;case 4:v[m].fn.call(v[m].context,c,p,u);break;default:if(!f)for(y=1,f=new Array(g-1);y<g;y++)f[y-1]=arguments[y];v[m].fn.apply(v[m].context,f)}}return!0},s.prototype.on=function(d,c,p){var u=new n(c,p||this),a=i?i+d:d;return this._events[a]?this._events[a].fn?this._events[a]=[this._events[a],u]:this._events[a].push(u):(this._events[a]=u,this._eventsCount++),this},s.prototype.once=function(d,c,p){var u=new n(c,p||this,!0),a=i?i+d:d;return this._events[a]?this._events[a].fn?this._events[a]=[this._events[a],u]:this._events[a].push(u):(this._events[a]=u,this._eventsCount++),this},s.prototype.removeListener=function(d,c,p,u){var a=i?i+d:d;if(!this._events[a])return this;if(!c)return--this._eventsCount==0?this._events=new r:delete this._events[a],this;var l=this._events[a];if(l.fn)l.fn!==c||u&&!l.once||p&&l.context!==p||(--this._eventsCount==0?this._events=new r:delete this._events[a]);else{for(var h=0,f=[],m=l.length;h<m;h++)(l[h].fn!==c||u&&!l[h].once||p&&l[h].context!==p)&&f.push(l[h]);f.length?this._events[a]=f.length===1?f[0]:f:--this._eventsCount==0?this._events=new r:delete this._events[a]}return this},s.prototype.removeAllListeners=function(d){var c;return d?(c=i?i+d:d,this._events[c]&&(--this._eventsCount==0?this._events=new r:delete this._events[c])):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prototype.setMaxListeners=function(){return this},s.prefixed=i,s.EventEmitter=s,o!==void 0&&(o.exports=s)},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.matchText=e.matchSpacing=e.matchNewline=e.matchBlot=e.matchAttributor=e.default=void 0;var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},r=function(R,$){if(Array.isArray(R))return R;if(Symbol.iterator in Object(R))return function(F,z){var V=[],se=!0,ne=!1,ue=void 0;try{for(var De,be=F[Symbol.iterator]();!(se=(De=be.next()).done)&&(V.push(De.value),!z||V.length!==z);se=!0);}catch(ut){ne=!0,ue=ut}finally{try{!se&&be.return&&be.return()}finally{if(ne)throw ue}}return V}(R,$);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function R($,F){for(var z=0;z<F.length;z++){var V=F[z];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty($,V.key,V)}}return function($,F,z){return F&&R($.prototype,F),z&&R($,z),$}}(),s=b(t(3)),d=b(t(2)),c=b(t(0)),p=b(t(5)),u=b(t(10)),a=b(t(9)),l=t(36),h=t(37),f=b(t(13)),m=t(26),v=t(38),g=t(39),y=t(40);function b(R){return R&&R.__esModule?R:{default:R}}function x(R,$,F){return $ in R?Object.defineProperty(R,$,{value:F,enumerable:!0,configurable:!0,writable:!0}):R[$]=F,R}var w=(0,u.default)("quill:clipboard"),A="__ql-matcher",S=[[Node.TEXT_NODE,Ie],[Node.TEXT_NODE,K],["br",function(R,$){return O($,`
`)||$.insert(`
`),$}],[Node.ELEMENT_NODE,K],[Node.ELEMENT_NODE,U],[Node.ELEMENT_NODE,J],[Node.ELEMENT_NODE,M],[Node.ELEMENT_NODE,function(R,$){var F={},z=R.style||{};return z.fontStyle&&E(R).fontStyle==="italic"&&(F.italic=!0),z.fontWeight&&(E(R).fontWeight.startsWith("bold")||parseInt(E(R).fontWeight)>=700)&&(F.bold=!0),Object.keys(F).length>0&&($=I($,F)),parseFloat(z.textIndent||0)>0&&($=new d.default().insert("	").concat($)),$}],["li",function(R,$){var F=c.default.query(R);if(F==null||F.blotName!=="list-item"||!O($,`
`))return $;for(var z=-1,V=R.parentNode;!V.classList.contains("ql-clipboard");)(c.default.query(V)||{}).blotName==="list"&&(z+=1),V=V.parentNode;return z<=0?$:$.compose(new d.default().retain($.length()-1).retain(1,{indent:z}))}],["b",C.bind(C,"bold")],["i",C.bind(C,"italic")],["style",function(){return new d.default}]],q=[l.AlignAttribute,v.DirectionAttribute].reduce(function(R,$){return R[$.keyName]=$,R},{}),P=[l.AlignStyle,h.BackgroundStyle,m.ColorStyle,v.DirectionStyle,g.FontStyle,y.SizeStyle].reduce(function(R,$){return R[$.keyName]=$,R},{}),_=function(R){function $(F,z){(function(se,ne){if(!(se instanceof ne))throw new TypeError("Cannot call a class as a function")})(this,$);var V=function(se,ne){if(!se)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!ne||typeof ne!="object"&&typeof ne!="function"?se:ne}(this,($.__proto__||Object.getPrototypeOf($)).call(this,F,z));return V.quill.root.addEventListener("paste",V.onPaste.bind(V)),V.container=V.quill.addContainer("ql-clipboard"),V.container.setAttribute("contenteditable",!0),V.container.setAttribute("tabindex",-1),V.matchers=[],S.concat(V.options.matchers).forEach(function(se){var ne=r(se,2),ue=ne[0],De=ne[1];(z.matchVisual||De!==J)&&V.addMatcher(ue,De)}),V}return function(F,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof z);F.prototype=Object.create(z&&z.prototype,{constructor:{value:F,enumerable:!1,writable:!0,configurable:!0}}),z&&(Object.setPrototypeOf?Object.setPrototypeOf(F,z):F.__proto__=z)}($,R),n($,[{key:"addMatcher",value:function(F,z){this.matchers.push([F,z])}},{key:"convert",value:function(F){if(typeof F=="string")return this.container.innerHTML=F.replace(/\>\r?\n +\</g,"><"),this.convert();var z=this.quill.getFormat(this.quill.selection.savedRange.index);if(z[f.default.blotName]){var V=this.container.innerText;return this.container.innerHTML="",new d.default().insert(V,x({},f.default.blotName,z[f.default.blotName]))}var se=this.prepareMatching(),ne=r(se,2),ue=ne[0],De=ne[1],be=N(this.container,ue,De);return O(be,`
`)&&be.ops[be.ops.length-1].attributes==null&&(be=be.compose(new d.default().retain(be.length()-1).delete(1))),w.log("convert",this.container.innerHTML,be),this.container.innerHTML="",be}},{key:"dangerouslyPasteHTML",value:function(F,z){var V=arguments.length>2&&arguments[2]!==void 0?arguments[2]:p.default.sources.API;if(typeof F=="string")this.quill.setContents(this.convert(F),z),this.quill.setSelection(0,p.default.sources.SILENT);else{var se=this.convert(z);this.quill.updateContents(new d.default().retain(F).concat(se),V),this.quill.setSelection(F+se.length(),p.default.sources.SILENT)}}},{key:"onPaste",value:function(F){var z=this;if(!F.defaultPrevented&&this.quill.isEnabled()){var V=this.quill.getSelection(),se=new d.default().retain(V.index),ne=this.quill.scrollingContainer.scrollTop;this.container.focus(),this.quill.selection.update(p.default.sources.SILENT),setTimeout(function(){se=se.concat(z.convert()).delete(V.length),z.quill.updateContents(se,p.default.sources.USER),z.quill.setSelection(se.length()-V.length,p.default.sources.SILENT),z.quill.scrollingContainer.scrollTop=ne,z.quill.focus()},1)}}},{key:"prepareMatching",value:function(){var F=this,z=[],V=[];return this.matchers.forEach(function(se){var ne=r(se,2),ue=ne[0],De=ne[1];switch(ue){case Node.TEXT_NODE:V.push(De);break;case Node.ELEMENT_NODE:z.push(De);break;default:[].forEach.call(F.container.querySelectorAll(ue),function(be){be[A]=be[A]||[],be[A].push(De)})}}),[z,V]}}]),$}(a.default);function I(R,$,F){return($===void 0?"undefined":i($))==="object"?Object.keys($).reduce(function(z,V){return I(z,V,$[V])},R):R.reduce(function(z,V){return V.attributes&&V.attributes[$]?z.push(V):z.insert(V.insert,(0,s.default)({},x({},$,F),V.attributes))},new d.default)}function E(R){if(R.nodeType!==Node.ELEMENT_NODE)return{};var $="__ql-computed-style";return R[$]||(R[$]=window.getComputedStyle(R))}function O(R,$){for(var F="",z=R.ops.length-1;z>=0&&F.length<$.length;--z){var V=R.ops[z];if(typeof V.insert!="string")break;F=V.insert+F}return F.slice(-1*$.length)===$}function k(R){if(R.childNodes.length===0)return!1;var $=E(R);return["block","list-item"].indexOf($.display)>-1}function N(R,$,F){return R.nodeType===R.TEXT_NODE?F.reduce(function(z,V){return V(R,z)},new d.default):R.nodeType===R.ELEMENT_NODE?[].reduce.call(R.childNodes||[],function(z,V){var se=N(V,$,F);return V.nodeType===R.ELEMENT_NODE&&(se=$.reduce(function(ne,ue){return ue(V,ne)},se),se=(V[A]||[]).reduce(function(ne,ue){return ue(V,ne)},se)),z.concat(se)},new d.default):new d.default}function C(R,$,F){return I(F,R,!0)}function M(R,$){var F=c.default.Attributor.Attribute.keys(R),z=c.default.Attributor.Class.keys(R),V=c.default.Attributor.Style.keys(R),se={};return F.concat(z).concat(V).forEach(function(ne){var ue=c.default.query(ne,c.default.Scope.ATTRIBUTE);ue!=null&&(se[ue.attrName]=ue.value(R),se[ue.attrName])||((ue=q[ne])==null||ue.attrName!==ne&&ue.keyName!==ne||(se[ue.attrName]=ue.value(R)||void 0),(ue=P[ne])==null||ue.attrName!==ne&&ue.keyName!==ne||(ue=P[ne],se[ue.attrName]=ue.value(R)||void 0))}),Object.keys(se).length>0&&($=I($,se)),$}function U(R,$){var F=c.default.query(R);if(F==null)return $;if(F.prototype instanceof c.default.Embed){var z={},V=F.value(R);V!=null&&(z[F.blotName]=V,$=new d.default().insert(z,F.formats(R)))}else typeof F.formats=="function"&&($=I($,F.blotName,F.formats(R)));return $}function K(R,$){return O($,`
`)||(k(R)||$.length()>0&&R.nextSibling&&k(R.nextSibling))&&$.insert(`
`),$}function J(R,$){if(k(R)&&R.nextElementSibling!=null&&!O($,`

`)){var F=R.offsetHeight+parseFloat(E(R).marginTop)+parseFloat(E(R).marginBottom);R.nextElementSibling.offsetTop>R.offsetTop+1.5*F&&$.insert(`
`)}return $}function Ie(R,$){var F=R.data;if(R.parentNode.tagName==="O:P")return $.insert(F.trim());if(F.trim().length===0&&R.parentNode.classList.contains("ql-clipboard"))return $;if(!E(R.parentNode).whiteSpace.startsWith("pre")){var z=function(V,se){return(se=se.replace(/[^\u00a0]/g,"")).length<1&&V?" ":se};F=(F=F.replace(/\r\n/g," ").replace(/\n/g," ")).replace(/\s\s+/g,z.bind(z,!0)),(R.previousSibling==null&&k(R.parentNode)||R.previousSibling!=null&&k(R.previousSibling))&&(F=F.replace(/^\s+/,z.bind(z,!1))),(R.nextSibling==null&&k(R.parentNode)||R.nextSibling!=null&&k(R.nextSibling))&&(F=F.replace(/\s+$/,z.bind(z,!1)))}return $.insert(F)}_.DEFAULTS={matchers:[],matchVisual:!0},e.default=_,e.matchAttributor=M,e.matchBlot=U,e.matchNewline=K,e.matchSpacing=J,e.matchText=Ie},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function u(a,l){for(var h=0;h<l.length;h++){var f=l[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(a,f.key,f)}}return function(a,l,h){return l&&u(a.prototype,l),h&&u(a,h),a}}(),n=function u(a,l,h){a===null&&(a=Function.prototype);var f=Object.getOwnPropertyDescriptor(a,l);if(f===void 0){var m=Object.getPrototypeOf(a);return m===null?void 0:u(m,l,h)}if("value"in f)return f.value;var v=f.get;return v!==void 0?v.call(h):void 0},s=t(6);function d(u,a){if(!(u instanceof a))throw new TypeError("Cannot call a class as a function")}function c(u,a){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?u:a}var p=function(u){function a(){return d(this,a),c(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,u),r(a,[{key:"optimize",value:function(l){n(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"optimize",this).call(this,l),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}],[{key:"create",value:function(){return n(a.__proto__||Object.getPrototypeOf(a),"create",this).call(this)}},{key:"formats",value:function(){return!0}}]),a}(((i=s)&&i.__esModule?i:{default:i}).default);p.blotName="bold",p.tagName=["STRONG","B"],e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.addControls=e.default=void 0;var i=function(v,g){if(Array.isArray(v))return v;if(Symbol.iterator in Object(v))return function(y,b){var x=[],w=!0,A=!1,S=void 0;try{for(var q,P=y[Symbol.iterator]();!(w=(q=P.next()).done)&&(x.push(q.value),!b||x.length!==b);w=!0);}catch(_){A=!0,S=_}finally{try{!w&&P.return&&P.return()}finally{if(A)throw S}}return x}(v,g);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function v(g,y){for(var b=0;b<y.length;b++){var x=y[b];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(g,x.key,x)}}return function(g,y,b){return y&&v(g.prototype,y),b&&v(g,b),g}}(),n=u(t(2)),s=u(t(0)),d=u(t(5)),c=u(t(10)),p=u(t(9));function u(v){return v&&v.__esModule?v:{default:v}}function a(v,g){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!g||typeof g!="object"&&typeof g!="function"?v:g}var l=(0,c.default)("quill:toolbar"),h=function(v){function g(y,b){(function(S,q){if(!(S instanceof q))throw new TypeError("Cannot call a class as a function")})(this,g);var x,w=a(this,(g.__proto__||Object.getPrototypeOf(g)).call(this,y,b));if(Array.isArray(w.options.container)){var A=document.createElement("div");m(A,w.options.container),y.container.parentNode.insertBefore(A,y.container),w.container=A}else typeof w.options.container=="string"?w.container=document.querySelector(w.options.container):w.container=w.options.container;return w.container instanceof HTMLElement?(w.container.classList.add("ql-toolbar"),w.controls=[],w.handlers={},Object.keys(w.options.handlers).forEach(function(S){w.addHandler(S,w.options.handlers[S])}),[].forEach.call(w.container.querySelectorAll("button, select"),function(S){w.attach(S)}),w.quill.on(d.default.events.EDITOR_CHANGE,function(S,q){S===d.default.events.SELECTION_CHANGE&&w.update(q)}),w.quill.on(d.default.events.SCROLL_OPTIMIZE,function(){var S=w.quill.selection.getRange(),q=i(S,1)[0];w.update(q)}),w):(x=l.error("Container required for toolbar",w.options),a(w,x))}return function(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(y,b):y.__proto__=b)}(g,v),r(g,[{key:"addHandler",value:function(y,b){this.handlers[y]=b}},{key:"attach",value:function(y){var b=this,x=[].find.call(y.classList,function(A){return A.indexOf("ql-")===0});if(x){if(x=x.slice(3),y.tagName==="BUTTON"&&y.setAttribute("type","button"),this.handlers[x]==null){if(this.quill.scroll.whitelist!=null&&this.quill.scroll.whitelist[x]==null)return void l.warn("ignoring attaching to disabled format",x,y);if(s.default.query(x)==null)return void l.warn("ignoring attaching to nonexistent format",x,y)}var w=y.tagName==="SELECT"?"change":"click";y.addEventListener(w,function(A){var S=void 0;if(y.tagName==="SELECT"){if(y.selectedIndex<0)return;var q=y.options[y.selectedIndex];S=!q.hasAttribute("selected")&&(q.value||!1)}else S=!y.classList.contains("ql-active")&&(y.value||!y.hasAttribute("value")),A.preventDefault();b.quill.focus();var P=b.quill.selection.getRange(),_=i(P,1)[0];if(b.handlers[x]!=null)b.handlers[x].call(b,S);else if(s.default.query(x).prototype instanceof s.default.Embed){if(!(S=prompt("Enter "+x)))return;b.quill.updateContents(new n.default().retain(_.index).delete(_.length).insert(function(I,E,O){return E in I?Object.defineProperty(I,E,{value:O,enumerable:!0,configurable:!0,writable:!0}):I[E]=O,I}({},x,S)),d.default.sources.USER)}else b.quill.format(x,S,d.default.sources.USER);b.update(_)}),this.controls.push([x,y])}}},{key:"update",value:function(y){var b=y==null?{}:this.quill.getFormat(y);this.controls.forEach(function(x){var w=i(x,2),A=w[0],S=w[1];if(S.tagName==="SELECT"){var q=void 0;if(y==null)q=null;else if(b[A]==null)q=S.querySelector("option[selected]");else if(!Array.isArray(b[A])){var P=b[A];typeof P=="string"&&(P=P.replace(/\"/g,'\\"')),q=S.querySelector('option[value="'+P+'"]')}q==null?(S.value="",S.selectedIndex=-1):q.selected=!0}else if(y==null)S.classList.remove("ql-active");else if(S.hasAttribute("value")){var _=b[A]===S.getAttribute("value")||b[A]!=null&&b[A].toString()===S.getAttribute("value")||b[A]==null&&!S.getAttribute("value");S.classList.toggle("ql-active",_)}else S.classList.toggle("ql-active",b[A]!=null)})}}]),g}(p.default);function f(v,g,y){var b=document.createElement("button");b.setAttribute("type","button"),b.classList.add("ql-"+g),y!=null&&(b.value=y),v.appendChild(b)}function m(v,g){Array.isArray(g[0])||(g=[g]),g.forEach(function(y){var b=document.createElement("span");b.classList.add("ql-formats"),y.forEach(function(x){if(typeof x=="string")f(b,x);else{var w=Object.keys(x)[0],A=x[w];Array.isArray(A)?function(S,q,P){var _=document.createElement("select");_.classList.add("ql-"+q),P.forEach(function(I){var E=document.createElement("option");I!==!1?E.setAttribute("value",I):E.setAttribute("selected","selected"),_.appendChild(E)}),S.appendChild(_)}(b,w,A):f(b,w,A)}}),v.appendChild(b)})}h.DEFAULTS={},h.DEFAULTS={container:null,handlers:{clean:function(){var v=this,g=this.quill.getSelection();if(g!=null)if(g.length==0){var y=this.quill.getFormat();Object.keys(y).forEach(function(b){s.default.query(b,s.default.Scope.INLINE)!=null&&v.quill.format(b,!1)})}else this.quill.removeFormat(g,d.default.sources.USER)},direction:function(v){var g=this.quill.getFormat().align;v==="rtl"&&g==null?this.quill.format("align","right",d.default.sources.USER):v||g!=="right"||this.quill.format("align",!1,d.default.sources.USER),this.quill.format("direction",v,d.default.sources.USER)},indent:function(v){var g=this.quill.getSelection(),y=this.quill.getFormat(g),b=parseInt(y.indent||0);if(v==="+1"||v==="-1"){var x=v==="+1"?1:-1;y.direction==="rtl"&&(x*=-1),this.quill.format("indent",b+x,d.default.sources.USER)}},link:function(v){v===!0&&(v=prompt("Enter link URL:")),this.quill.format("link",v,d.default.sources.USER)},list:function(v){var g=this.quill.getSelection(),y=this.quill.getFormat(g);v==="check"?y.list==="checked"||y.list==="unchecked"?this.quill.format("list",!1,d.default.sources.USER):this.quill.format("list","unchecked",d.default.sources.USER):this.quill.format("list",v,d.default.sources.USER)}}},e.default=h,e.addControls=m},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function c(p,u){for(var a=0;a<u.length;a++){var l=u[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(p,l.key,l)}}return function(p,u,a){return u&&c(p.prototype,u),a&&c(p,a),p}}(),n=function c(p,u,a){p===null&&(p=Function.prototype);var l=Object.getOwnPropertyDescriptor(p,u);if(l===void 0){var h=Object.getPrototypeOf(p);return h===null?void 0:c(h,u,a)}if("value"in l)return l.value;var f=l.get;return f!==void 0?f.call(a):void 0},s=t(28),d=function(c){function p(u,a){(function(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")})(this,p);var l=function(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,u));return l.label.innerHTML=a,l.container.classList.add("ql-color-picker"),[].slice.call(l.container.querySelectorAll(".ql-picker-item"),0,7).forEach(function(h){h.classList.add("ql-primary")}),l}return function(u,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);u.prototype=Object.create(a&&a.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(u,a):u.__proto__=a)}(p,c),r(p,[{key:"buildItem",value:function(u){var a=n(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"buildItem",this).call(this,u);return a.style.backgroundColor=u.getAttribute("value")||"",a}},{key:"selectItem",value:function(u,a){n(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"selectItem",this).call(this,u,a);var l=this.label.querySelector(".ql-color-label"),h=u&&u.getAttribute("data-value")||"";l&&(l.tagName==="line"?l.style.stroke=h:l.style.fill=h)}}]),p}(((i=s)&&i.__esModule?i:{default:i}).default);e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function c(p,u){for(var a=0;a<u.length;a++){var l=u[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(p,l.key,l)}}return function(p,u,a){return u&&c(p.prototype,u),a&&c(p,a),p}}(),n=function c(p,u,a){p===null&&(p=Function.prototype);var l=Object.getOwnPropertyDescriptor(p,u);if(l===void 0){var h=Object.getPrototypeOf(p);return h===null?void 0:c(h,u,a)}if("value"in l)return l.value;var f=l.get;return f!==void 0?f.call(a):void 0},s=t(28),d=function(c){function p(u,a){(function(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")})(this,p);var l=function(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,u));return l.container.classList.add("ql-icon-picker"),[].forEach.call(l.container.querySelectorAll(".ql-picker-item"),function(h){h.innerHTML=a[h.getAttribute("data-value")||""]}),l.defaultItem=l.container.querySelector(".ql-selected"),l.selectItem(l.defaultItem),l}return function(u,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);u.prototype=Object.create(a&&a.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(u,a):u.__proto__=a)}(p,c),r(p,[{key:"selectItem",value:function(u,a){n(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"selectItem",this).call(this,u,a),u=u||this.defaultItem,this.label.innerHTML=u.innerHTML}}]),p}(((i=s)&&i.__esModule?i:{default:i}).default);e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function n(s,d){for(var c=0;c<d.length;c++){var p=d[c];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(s,p.key,p)}}return function(s,d,c){return d&&n(s.prototype,d),c&&n(s,c),s}}(),r=function(){function n(s,d){var c=this;(function(p,u){if(!(p instanceof u))throw new TypeError("Cannot call a class as a function")})(this,n),this.quill=s,this.boundsContainer=d||document.body,this.root=s.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE,this.quill.root===this.quill.scrollingContainer&&this.quill.root.addEventListener("scroll",function(){c.root.style.marginTop=-1*c.quill.root.scrollTop+"px"}),this.hide()}return i(n,[{key:"hide",value:function(){this.root.classList.add("ql-hidden")}},{key:"position",value:function(s){var d=s.left+s.width/2-this.root.offsetWidth/2,c=s.bottom+this.quill.root.scrollTop;this.root.style.left=d+"px",this.root.style.top=c+"px",this.root.classList.remove("ql-flip");var p=this.boundsContainer.getBoundingClientRect(),u=this.root.getBoundingClientRect(),a=0;if(u.right>p.right&&(a=p.right-u.right,this.root.style.left=d+a+"px"),u.left<p.left&&(a=p.left-u.left,this.root.style.left=d+a+"px"),u.bottom>p.bottom){var l=u.bottom-u.top,h=s.bottom-s.top+l;this.root.style.top=c-h+"px",this.root.classList.add("ql-flip")}return a}},{key:"show",value:function(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}}]),n}();e.default=r},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(x,w){if(Array.isArray(x))return x;if(Symbol.iterator in Object(x))return function(A,S){var q=[],P=!0,_=!1,I=void 0;try{for(var E,O=A[Symbol.iterator]();!(P=(E=O.next()).done)&&(q.push(E.value),!S||q.length!==S);P=!0);}catch(k){_=!0,I=k}finally{try{!P&&O.return&&O.return()}finally{if(_)throw I}}return q}(x,w);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function x(w,A,S){w===null&&(w=Function.prototype);var q=Object.getOwnPropertyDescriptor(w,A);if(q===void 0){var P=Object.getPrototypeOf(w);return P===null?void 0:x(P,A,S)}if("value"in q)return q.value;var _=q.get;return _!==void 0?_.call(S):void 0},n=function(){function x(w,A){for(var S=0;S<A.length;S++){var q=A[S];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(w,q.key,q)}}return function(w,A,S){return A&&x(w.prototype,A),S&&x(w,S),w}}(),s=h(t(3)),d=h(t(8)),c=t(43),p=h(c),u=h(t(27)),a=t(15),l=h(t(41));function h(x){return x&&x.__esModule?x:{default:x}}function f(x,w){if(!(x instanceof w))throw new TypeError("Cannot call a class as a function")}function m(x,w){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!w||typeof w!="object"&&typeof w!="function"?x:w}function v(x,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof w);x.prototype=Object.create(w&&w.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),w&&(Object.setPrototypeOf?Object.setPrototypeOf(x,w):x.__proto__=w)}var g=[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"]],y=function(x){function w(A,S){f(this,w),S.modules.toolbar!=null&&S.modules.toolbar.container==null&&(S.modules.toolbar.container=g);var q=m(this,(w.__proto__||Object.getPrototypeOf(w)).call(this,A,S));return q.quill.container.classList.add("ql-snow"),q}return v(w,x),n(w,[{key:"extendToolbar",value:function(A){A.container.classList.add("ql-snow"),this.buildButtons([].slice.call(A.container.querySelectorAll("button")),l.default),this.buildPickers([].slice.call(A.container.querySelectorAll("select")),l.default),this.tooltip=new b(this.quill,this.options.bounds),A.container.querySelector(".ql-link")&&this.quill.keyboard.addBinding({key:"K",shortKey:!0},function(S,q){A.handlers.link.call(A,!q.format.link)})}}]),w}(p.default);y.DEFAULTS=(0,s.default)(!0,{},p.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(x){if(x){var w=this.quill.getSelection();if(w==null||w.length==0)return;var A=this.quill.getText(w);/^\S+@\S+\.\S+$/.test(A)&&A.indexOf("mailto:")!==0&&(A="mailto:"+A),this.quill.theme.tooltip.edit("link",A)}else this.quill.format("link",!1)}}}}});var b=function(x){function w(A,S){f(this,w);var q=m(this,(w.__proto__||Object.getPrototypeOf(w)).call(this,A,S));return q.preview=q.root.querySelector("a.ql-preview"),q}return v(w,x),n(w,[{key:"listen",value:function(){var A=this;r(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"listen",this).call(this),this.root.querySelector("a.ql-action").addEventListener("click",function(S){A.root.classList.contains("ql-editing")?A.save():A.edit("link",A.preview.textContent),S.preventDefault()}),this.root.querySelector("a.ql-remove").addEventListener("click",function(S){if(A.linkRange!=null){var q=A.linkRange;A.restoreFocus(),A.quill.formatText(q,"link",!1,d.default.sources.USER),delete A.linkRange}S.preventDefault(),A.hide()}),this.quill.on(d.default.events.SELECTION_CHANGE,function(S,q,P){if(S!=null){if(S.length===0&&P===d.default.sources.USER){var _=A.quill.scroll.descendant(u.default,S.index),I=i(_,2),E=I[0],O=I[1];if(E!=null){A.linkRange=new a.Range(S.index-O,E.length());var k=u.default.formats(E.domNode);return A.preview.textContent=k,A.preview.setAttribute("href",k),A.show(),void A.position(A.quill.getBounds(A.linkRange))}}else delete A.linkRange;A.hide()}})}},{key:"show",value:function(){r(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"show",this).call(this),this.root.removeAttribute("data-mode")}}]),w}(c.BaseTooltip);b.TEMPLATE=['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-action"></a>','<a class="ql-remove"></a>'].join(""),e.default=y},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=K(t(29)),r=t(36),n=t(38),s=t(64),d=K(t(65)),c=K(t(66)),p=t(67),u=K(p),a=t(37),l=t(26),h=t(39),f=t(40),m=K(t(56)),v=K(t(68)),g=K(t(27)),y=K(t(69)),b=K(t(70)),x=K(t(71)),w=K(t(72)),A=K(t(73)),S=t(13),q=K(S),P=K(t(74)),_=K(t(75)),I=K(t(57)),E=K(t(41)),O=K(t(28)),k=K(t(59)),N=K(t(60)),C=K(t(61)),M=K(t(108)),U=K(t(62));function K(J){return J&&J.__esModule?J:{default:J}}i.default.register({"attributors/attribute/direction":n.DirectionAttribute,"attributors/class/align":r.AlignClass,"attributors/class/background":a.BackgroundClass,"attributors/class/color":l.ColorClass,"attributors/class/direction":n.DirectionClass,"attributors/class/font":h.FontClass,"attributors/class/size":f.SizeClass,"attributors/style/align":r.AlignStyle,"attributors/style/background":a.BackgroundStyle,"attributors/style/color":l.ColorStyle,"attributors/style/direction":n.DirectionStyle,"attributors/style/font":h.FontStyle,"attributors/style/size":f.SizeStyle},!0),i.default.register({"formats/align":r.AlignClass,"formats/direction":n.DirectionClass,"formats/indent":s.IndentClass,"formats/background":a.BackgroundStyle,"formats/color":l.ColorStyle,"formats/font":h.FontClass,"formats/size":f.SizeClass,"formats/blockquote":d.default,"formats/code-block":q.default,"formats/header":c.default,"formats/list":u.default,"formats/bold":m.default,"formats/code":S.Code,"formats/italic":v.default,"formats/link":g.default,"formats/script":y.default,"formats/strike":b.default,"formats/underline":x.default,"formats/image":w.default,"formats/video":A.default,"formats/list/item":p.ListItem,"modules/formula":P.default,"modules/syntax":_.default,"modules/toolbar":I.default,"themes/bubble":M.default,"themes/snow":U.default,"ui/icons":E.default,"ui/picker":O.default,"ui/icon-picker":N.default,"ui/color-picker":k.default,"ui/tooltip":C.default},!0),e.default=i.default},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.IndentClass=void 0;var i,r=function(){function l(h,f){for(var m=0;m<f.length;m++){var v=f[m];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(h,v.key,v)}}return function(h,f,m){return f&&l(h.prototype,f),m&&l(h,m),h}}(),n=function l(h,f,m){h===null&&(h=Function.prototype);var v=Object.getOwnPropertyDescriptor(h,f);if(v===void 0){var g=Object.getPrototypeOf(h);return g===null?void 0:l(g,f,m)}if("value"in v)return v.value;var y=v.get;return y!==void 0?y.call(m):void 0},s=t(0),d=(i=s)&&i.__esModule?i:{default:i};function c(l,h){if(!(l instanceof h))throw new TypeError("Cannot call a class as a function")}function p(l,h){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!h||typeof h!="object"&&typeof h!="function"?l:h}var u=function(l){function h(){return c(this,h),p(this,(h.__proto__||Object.getPrototypeOf(h)).apply(this,arguments))}return function(f,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);f.prototype=Object.create(m&&m.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(f,m):f.__proto__=m)}(h,l),r(h,[{key:"add",value:function(f,m){if(m==="+1"||m==="-1"){var v=this.value(f)||0;m=m==="+1"?v+1:v-1}return m===0?(this.remove(f),!0):n(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"add",this).call(this,f,m)}},{key:"canAdd",value:function(f,m){return n(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"canAdd",this).call(this,f,m)||n(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"canAdd",this).call(this,f,parseInt(m))}},{key:"value",value:function(f){return parseInt(n(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"value",this).call(this,f))||void 0}}]),h}(d.default.Attributor.Class),a=new u("indent","ql-indent",{scope:d.default.Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});e.IndentClass=a},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(4);function n(c,p){if(!(c instanceof p))throw new TypeError("Cannot call a class as a function")}function s(c,p){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!p||typeof p!="object"&&typeof p!="function"?c:p}var d=function(c){function p(){return n(this,p),s(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return function(u,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);u.prototype=Object.create(a&&a.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(u,a):u.__proto__=a)}(p,c),p}(((i=r)&&i.__esModule?i:{default:i}).default);d.blotName="blockquote",d.tagName="blockquote",e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function p(u,a){for(var l=0;l<a.length;l++){var h=a[l];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(u,h.key,h)}}return function(u,a,l){return a&&p(u.prototype,a),l&&p(u,l),u}}(),n=t(4);function s(p,u){if(!(p instanceof u))throw new TypeError("Cannot call a class as a function")}function d(p,u){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!u||typeof u!="object"&&typeof u!="function"?p:u}var c=function(p){function u(){return s(this,u),d(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments))}return function(a,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);a.prototype=Object.create(l&&l.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(a,l):a.__proto__=l)}(u,p),r(u,null,[{key:"formats",value:function(a){return this.tagName.indexOf(a.tagName)+1}}]),u}(((i=n)&&i.__esModule?i:{default:i}).default);c.blotName="header",c.tagName=["H1","H2","H3","H4","H5","H6"],e.default=c},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ListItem=void 0;var i=function(){function f(m,v){for(var g=0;g<v.length;g++){var y=v[g];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}return function(m,v,g){return v&&f(m.prototype,v),g&&f(m,g),m}}(),r=function f(m,v,g){m===null&&(m=Function.prototype);var y=Object.getOwnPropertyDescriptor(m,v);if(y===void 0){var b=Object.getPrototypeOf(m);return b===null?void 0:f(b,v,g)}if("value"in y)return y.value;var x=y.get;return x!==void 0?x.call(g):void 0},n=c(t(0)),s=c(t(4)),d=c(t(25));function c(f){return f&&f.__esModule?f:{default:f}}function p(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")}function u(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}function a(f,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);f.prototype=Object.create(m&&m.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(f,m):f.__proto__=m)}var l=function(f){function m(){return p(this,m),u(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return a(m,f),i(m,[{key:"format",value:function(v,g){v!==h.blotName||g?r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"format",this).call(this,v,g):this.replaceWith(n.default.create(this.statics.scope))}},{key:"remove",value:function(){this.prev==null&&this.next==null?this.parent.remove():r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"remove",this).call(this)}},{key:"replaceWith",value:function(v,g){return this.parent.isolate(this.offset(this.parent),this.length()),v===this.parent.statics.blotName?(this.parent.replaceWith(v,g),this):(this.parent.unwrap(),r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"replaceWith",this).call(this,v,g))}}],[{key:"formats",value:function(v){return v.tagName===this.tagName?void 0:r(m.__proto__||Object.getPrototypeOf(m),"formats",this).call(this,v)}}]),m}(s.default);l.blotName="list-item",l.tagName="LI";var h=function(f){function m(v){p(this,m);var g=u(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,v)),y=function(b){if(b.target.parentNode===v){var x=g.statics.formats(v),w=n.default.find(b.target);x==="checked"?w.format("list","unchecked"):x==="unchecked"&&w.format("list","checked")}};return v.addEventListener("touchstart",y),v.addEventListener("mousedown",y),g}return a(m,f),i(m,null,[{key:"create",value:function(v){var g=v==="ordered"?"OL":"UL",y=r(m.__proto__||Object.getPrototypeOf(m),"create",this).call(this,g);return v!=="checked"&&v!=="unchecked"||y.setAttribute("data-checked",v==="checked"),y}},{key:"formats",value:function(v){return v.tagName==="OL"?"ordered":v.tagName==="UL"?v.hasAttribute("data-checked")?v.getAttribute("data-checked")==="true"?"checked":"unchecked":"bullet":void 0}}]),i(m,[{key:"format",value:function(v,g){this.children.length>0&&this.children.tail.format(v,g)}},{key:"formats",value:function(){return v={},g=this.statics.blotName,y=this.statics.formats(this.domNode),g in v?Object.defineProperty(v,g,{value:y,enumerable:!0,configurable:!0,writable:!0}):v[g]=y,v;var v,g,y}},{key:"insertBefore",value:function(v,g){if(v instanceof l)r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"insertBefore",this).call(this,v,g);else{var y=g==null?this.length():g.offset(this),b=this.split(y);b.parent.insertBefore(v,b)}}},{key:"optimize",value:function(v){r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"optimize",this).call(this,v);var g=this.next;g!=null&&g.prev===this&&g.statics.blotName===this.statics.blotName&&g.domNode.tagName===this.domNode.tagName&&g.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(g.moveChildren(this),g.remove())}},{key:"replace",value:function(v){if(v.statics.blotName!==this.statics.blotName){var g=n.default.create(this.statics.defaultChild);v.moveChildren(g),this.appendChild(g)}r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"replace",this).call(this,v)}}]),m}(d.default);h.blotName="list",h.scope=n.default.Scope.BLOCK_BLOT,h.tagName=["OL","UL"],h.defaultChild="list-item",h.allowedChildren=[l],e.ListItem=l,e.default=h},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(56);function n(c,p){if(!(c instanceof p))throw new TypeError("Cannot call a class as a function")}function s(c,p){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!p||typeof p!="object"&&typeof p!="function"?c:p}var d=function(c){function p(){return n(this,p),s(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return function(u,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);u.prototype=Object.create(a&&a.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(u,a):u.__proto__=a)}(p,c),p}(((i=r)&&i.__esModule?i:{default:i}).default);d.blotName="italic",d.tagName=["EM","I"],e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function u(a,l){for(var h=0;h<l.length;h++){var f=l[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(a,f.key,f)}}return function(a,l,h){return l&&u(a.prototype,l),h&&u(a,h),a}}(),n=function u(a,l,h){a===null&&(a=Function.prototype);var f=Object.getOwnPropertyDescriptor(a,l);if(f===void 0){var m=Object.getPrototypeOf(a);return m===null?void 0:u(m,l,h)}if("value"in f)return f.value;var v=f.get;return v!==void 0?v.call(h):void 0},s=t(6);function d(u,a){if(!(u instanceof a))throw new TypeError("Cannot call a class as a function")}function c(u,a){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?u:a}var p=function(u){function a(){return d(this,a),c(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,u),r(a,null,[{key:"create",value:function(l){return l==="super"?document.createElement("sup"):l==="sub"?document.createElement("sub"):n(a.__proto__||Object.getPrototypeOf(a),"create",this).call(this,l)}},{key:"formats",value:function(l){return l.tagName==="SUB"?"sub":l.tagName==="SUP"?"super":void 0}}]),a}(((i=s)&&i.__esModule?i:{default:i}).default);p.blotName="script",p.tagName=["SUB","SUP"],e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(6);function n(c,p){if(!(c instanceof p))throw new TypeError("Cannot call a class as a function")}function s(c,p){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!p||typeof p!="object"&&typeof p!="function"?c:p}var d=function(c){function p(){return n(this,p),s(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return function(u,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);u.prototype=Object.create(a&&a.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(u,a):u.__proto__=a)}(p,c),p}(((i=r)&&i.__esModule?i:{default:i}).default);d.blotName="strike",d.tagName="S",e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(6);function n(c,p){if(!(c instanceof p))throw new TypeError("Cannot call a class as a function")}function s(c,p){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!p||typeof p!="object"&&typeof p!="function"?c:p}var d=function(c){function p(){return n(this,p),s(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return function(u,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);u.prototype=Object.create(a&&a.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(u,a):u.__proto__=a)}(p,c),p}(((i=r)&&i.__esModule?i:{default:i}).default);d.blotName="underline",d.tagName="U",e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function h(f,m){for(var v=0;v<m.length;v++){var g=m[v];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(f,g.key,g)}}return function(f,m,v){return m&&h(f.prototype,m),v&&h(f,v),f}}(),n=function h(f,m,v){f===null&&(f=Function.prototype);var g=Object.getOwnPropertyDescriptor(f,m);if(g===void 0){var y=Object.getPrototypeOf(f);return y===null?void 0:h(y,m,v)}if("value"in g)return g.value;var b=g.get;return b!==void 0?b.call(v):void 0},s=t(0),d=(i=s)&&i.__esModule?i:{default:i},c=t(27);function p(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function u(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}var a=["alt","height","width"],l=function(h){function f(){return p(this,f),u(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments))}return function(m,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);m.prototype=Object.create(v&&v.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(m,v):m.__proto__=v)}(f,h),r(f,[{key:"format",value:function(m,v){a.indexOf(m)>-1?v?this.domNode.setAttribute(m,v):this.domNode.removeAttribute(m):n(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"format",this).call(this,m,v)}}],[{key:"create",value:function(m){var v=n(f.__proto__||Object.getPrototypeOf(f),"create",this).call(this,m);return typeof m=="string"&&v.setAttribute("src",this.sanitize(m)),v}},{key:"formats",value:function(m){return a.reduce(function(v,g){return m.hasAttribute(g)&&(v[g]=m.getAttribute(g)),v},{})}},{key:"match",value:function(m){return/\.(jpe?g|gif|png)$/.test(m)||/^data:image\/.+;base64/.test(m)}},{key:"sanitize",value:function(m){return(0,c.sanitize)(m,["http","https","data"])?m:"//:0"}},{key:"value",value:function(m){return m.getAttribute("src")}}]),f}(d.default.Embed);l.blotName="image",l.tagName="IMG",e.default=l},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function h(f,m){for(var v=0;v<m.length;v++){var g=m[v];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(f,g.key,g)}}return function(f,m,v){return m&&h(f.prototype,m),v&&h(f,v),f}}(),n=function h(f,m,v){f===null&&(f=Function.prototype);var g=Object.getOwnPropertyDescriptor(f,m);if(g===void 0){var y=Object.getPrototypeOf(f);return y===null?void 0:h(y,m,v)}if("value"in g)return g.value;var b=g.get;return b!==void 0?b.call(v):void 0},s=t(4),d=t(27),c=(i=d)&&i.__esModule?i:{default:i};function p(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function u(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}var a=["height","width"],l=function(h){function f(){return p(this,f),u(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments))}return function(m,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);m.prototype=Object.create(v&&v.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(m,v):m.__proto__=v)}(f,h),r(f,[{key:"format",value:function(m,v){a.indexOf(m)>-1?v?this.domNode.setAttribute(m,v):this.domNode.removeAttribute(m):n(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"format",this).call(this,m,v)}}],[{key:"create",value:function(m){var v=n(f.__proto__||Object.getPrototypeOf(f),"create",this).call(this,m);return v.setAttribute("frameborder","0"),v.setAttribute("allowfullscreen",!0),v.setAttribute("src",this.sanitize(m)),v}},{key:"formats",value:function(m){return a.reduce(function(v,g){return m.hasAttribute(g)&&(v[g]=m.getAttribute(g)),v},{})}},{key:"sanitize",value:function(m){return c.default.sanitize(m)}},{key:"value",value:function(m){return m.getAttribute("src")}}]),f}(s.BlockEmbed);l.blotName="video",l.className="ql-video",l.tagName="IFRAME",e.default=l},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.FormulaBlot=void 0;var i=function(){function f(m,v){for(var g=0;g<v.length;g++){var y=v[g];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}return function(m,v,g){return v&&f(m.prototype,v),g&&f(m,g),m}}(),r=function f(m,v,g){m===null&&(m=Function.prototype);var y=Object.getOwnPropertyDescriptor(m,v);if(y===void 0){var b=Object.getPrototypeOf(m);return b===null?void 0:f(b,v,g)}if("value"in y)return y.value;var x=y.get;return x!==void 0?x.call(g):void 0},n=c(t(35)),s=c(t(5)),d=c(t(9));function c(f){return f&&f.__esModule?f:{default:f}}function p(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")}function u(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}function a(f,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);f.prototype=Object.create(m&&m.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(f,m):f.__proto__=m)}var l=function(f){function m(){return p(this,m),u(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return a(m,f),i(m,null,[{key:"create",value:function(v){var g=r(m.__proto__||Object.getPrototypeOf(m),"create",this).call(this,v);return typeof v=="string"&&(window.katex.render(v,g,{throwOnError:!1,errorColor:"#f00"}),g.setAttribute("data-value",v)),g}},{key:"value",value:function(v){return v.getAttribute("data-value")}}]),m}(n.default);l.blotName="formula",l.className="ql-formula",l.tagName="SPAN";var h=function(f){function m(){p(this,m);var v=u(this,(m.__proto__||Object.getPrototypeOf(m)).call(this));if(window.katex==null)throw new Error("Formula module requires KaTeX.");return v}return a(m,f),i(m,null,[{key:"register",value:function(){s.default.register(l,!0)}}]),m}(d.default);e.FormulaBlot=l,e.default=h},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.CodeToken=e.CodeBlock=void 0;var i=function(){function m(v,g){for(var y=0;y<g.length;y++){var b=g[y];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(v,b.key,b)}}return function(v,g,y){return g&&m(v.prototype,g),y&&m(v,y),v}}(),r=function m(v,g,y){v===null&&(v=Function.prototype);var b=Object.getOwnPropertyDescriptor(v,g);if(b===void 0){var x=Object.getPrototypeOf(v);return x===null?void 0:m(x,g,y)}if("value"in b)return b.value;var w=b.get;return w!==void 0?w.call(y):void 0},n=c(t(0)),s=c(t(5)),d=c(t(9));function c(m){return m&&m.__esModule?m:{default:m}}function p(m,v){if(!(m instanceof v))throw new TypeError("Cannot call a class as a function")}function u(m,v){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!v||typeof v!="object"&&typeof v!="function"?m:v}function a(m,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);m.prototype=Object.create(v&&v.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(m,v):m.__proto__=v)}var l=function(m){function v(){return p(this,v),u(this,(v.__proto__||Object.getPrototypeOf(v)).apply(this,arguments))}return a(v,m),i(v,[{key:"replaceWith",value:function(g){this.domNode.textContent=this.domNode.textContent,this.attach(),r(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"replaceWith",this).call(this,g)}},{key:"highlight",value:function(g){var y=this.domNode.textContent;this.cachedText!==y&&((y.trim().length>0||this.cachedText==null)&&(this.domNode.innerHTML=g(y),this.domNode.normalize(),this.attach()),this.cachedText=y)}}]),v}(c(t(13)).default);l.className="ql-syntax";var h=new n.default.Attributor.Class("token","hljs",{scope:n.default.Scope.INLINE}),f=function(m){function v(g,y){p(this,v);var b=u(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,g,y));if(typeof b.options.highlight!="function")throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");var x=null;return b.quill.on(s.default.events.SCROLL_OPTIMIZE,function(){clearTimeout(x),x=setTimeout(function(){b.highlight(),x=null},b.options.interval)}),b.highlight(),b}return a(v,m),i(v,null,[{key:"register",value:function(){s.default.register(h,!0),s.default.register(l,!0)}}]),i(v,[{key:"highlight",value:function(){var g=this;if(!this.quill.selection.composing){this.quill.update(s.default.sources.USER);var y=this.quill.getSelection();this.quill.scroll.descendants(l).forEach(function(b){b.highlight(g.options.highlight)}),this.quill.update(s.default.sources.SILENT),y!=null&&this.quill.setSelection(y,s.default.sources.SILENT)}}}]),v}(d.default);f.DEFAULTS={highlight:window.hljs==null?null:function(m){return window.hljs.highlightAuto(m).value},interval:1e3},e.CodeBlock=l,e.CodeToken=h,e.default=f},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'},function(o,e){o.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'},function(o,e){o.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'},function(o,e){o.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'},function(o,e){o.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BubbleTooltip=void 0;var i=function y(b,x,w){b===null&&(b=Function.prototype);var A=Object.getOwnPropertyDescriptor(b,x);if(A===void 0){var S=Object.getPrototypeOf(b);return S===null?void 0:y(S,x,w)}if("value"in A)return A.value;var q=A.get;return q!==void 0?q.call(w):void 0},r=function(){function y(b,x){for(var w=0;w<x.length;w++){var A=x[w];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(b,A.key,A)}}return function(b,x,w){return x&&y(b.prototype,x),w&&y(b,w),b}}(),n=a(t(3)),s=a(t(8)),d=t(43),c=a(d),p=t(15),u=a(t(41));function a(y){return y&&y.__esModule?y:{default:y}}function l(y,b){if(!(y instanceof b))throw new TypeError("Cannot call a class as a function")}function h(y,b){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||typeof b!="object"&&typeof b!="function"?y:b}function f(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(y,b):y.__proto__=b)}var m=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]],v=function(y){function b(x,w){l(this,b),w.modules.toolbar!=null&&w.modules.toolbar.container==null&&(w.modules.toolbar.container=m);var A=h(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,x,w));return A.quill.container.classList.add("ql-bubble"),A}return f(b,y),r(b,[{key:"extendToolbar",value:function(x){this.tooltip=new g(this.quill,this.options.bounds),this.tooltip.root.appendChild(x.container),this.buildButtons([].slice.call(x.container.querySelectorAll("button")),u.default),this.buildPickers([].slice.call(x.container.querySelectorAll("select")),u.default)}}]),b}(c.default);v.DEFAULTS=(0,n.default)(!0,{},c.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(y){y?this.quill.theme.tooltip.edit():this.quill.format("link",!1)}}}}});var g=function(y){function b(x,w){l(this,b);var A=h(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,x,w));return A.quill.on(s.default.events.EDITOR_CHANGE,function(S,q,P,_){if(S===s.default.events.SELECTION_CHANGE)if(q!=null&&q.length>0&&_===s.default.sources.USER){A.show(),A.root.style.left="0px",A.root.style.width="",A.root.style.width=A.root.offsetWidth+"px";var I=A.quill.getLines(q.index,q.length);if(I.length===1)A.position(A.quill.getBounds(q));else{var E=I[I.length-1],O=A.quill.getIndex(E),k=Math.min(E.length()-1,q.index+q.length-O),N=A.quill.getBounds(new p.Range(O,k));A.position(N)}}else document.activeElement!==A.textbox&&A.quill.hasFocus()&&A.hide()}),A}return f(b,y),r(b,[{key:"listen",value:function(){var x=this;i(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"listen",this).call(this),this.root.querySelector(".ql-close").addEventListener("click",function(){x.root.classList.remove("ql-editing")}),this.quill.on(s.default.events.SCROLL_OPTIMIZE,function(){setTimeout(function(){if(!x.root.classList.contains("ql-hidden")){var w=x.quill.getSelection();w!=null&&x.position(x.quill.getBounds(w))}},1)})}},{key:"cancel",value:function(){this.show()}},{key:"position",value:function(x){var w=i(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"position",this).call(this,x),A=this.root.querySelector(".ql-tooltip-arrow");if(A.style.marginLeft="",w===0)return w;A.style.marginLeft=-1*w-A.offsetWidth/2+"px"}}]),b}(d.BaseTooltip);g.TEMPLATE=['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join(""),e.BubbleTooltip=g,e.default=v},function(o,e,t){o.exports=t(63)}]).default},typeof exports=="object"&&typeof module=="object"?module.exports=nr():typeof define=="function"&&define.amd?define([],nr):typeof exports=="object"?exports.Quill=nr():nl.Quill=nr();const la=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ca=Symbol(),sl=new Map;class nu{constructor(e,t){if(this._$cssResult$=!0,t!==ca)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=sl.get(this.cssText);return la&&e===void 0&&(sl.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const Hr=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,r,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[n+1],o[0]);return new nu(t,ca)},al=la?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(i=>new nu(typeof i=="string"?i:i+"",ca))(t)})(o):o;var os;const ll=window.trustedTypes,Lh=ll?ll.emptyScript:"",cl=window.reactiveElementPolyfillSupport,Rs={toAttribute(o,e){switch(e){case Boolean:o=o?Lh:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},su=(o,e)=>e!==o&&(e==e||o==o),is={attribute:!0,type:String,converter:Rs,reflect:!1,hasChanged:su};class Di extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Eh(i,t);r!==void 0&&(this._$Eu.set(r,i),e.push(r))}),e}static createProperty(e,t=is){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||is}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(al(r))}else e!==void 0&&t.push(al(e));return t}static _$Eh(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{la?i.adoptedStyleSheets=r.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):r.forEach(n=>{const s=document.createElement("style"),d=window.litNonce;d!==void 0&&s.setAttribute("nonce",d),s.textContent=n.cssText,i.appendChild(s)})})(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=is){var r,n;const s=this.constructor._$Eh(e,i);if(s!==void 0&&i.reflect===!0){const d=((n=(r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&n!==void 0?n:Rs.toAttribute)(t,i.type);this._$Ei=e,d==null?this.removeAttribute(s):this.setAttribute(s,d),this._$Ei=null}}_$AK(e,t){var i,r,n;const s=this.constructor,d=s._$Eu.get(e);if(d!==void 0&&this._$Ei!==d){const c=s.getPropertyOptions(d),p=c.converter,u=(n=(r=(i=p)===null||i===void 0?void 0:i.fromAttribute)!==null&&r!==void 0?r:typeof p=="function"?p:null)!==null&&n!==void 0?n:Rs.fromAttribute;this._$Ei=d,this[d]=u(t,c.type),this._$Ei=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||su)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,n)=>this[n]=r),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(i)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$ES(i,this[i],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rs;Di.finalized=!0,Di.elementProperties=new Map,Di.elementStyles=[],Di.shadowRootOptions={mode:"open"},cl==null||cl({ReactiveElement:Di}),((os=globalThis.reactiveElementVersions)!==null&&os!==void 0?os:globalThis.reactiveElementVersions=[]).push("1.3.1");const Ki=globalThis.trustedTypes,ul=Ki?Ki.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ao=`lit$${(Math.random()+"").slice(9)}$`,au="?"+Ao,Mh=`<${au}>`,Gi=document,kr=(o="")=>Gi.createComment(o),Pr=o=>o===null||typeof o!="object"&&typeof o!="function",dl=Array.isArray,sr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pl=/-->/g,hl=/>/g,Ho=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,fl=/'/g,ml=/"/g,vl=/^(?:script|style|textarea|title)$/i,xe=(o=>(e,...t)=>({_$litType$:o,strings:e,values:t}))(1),di=Symbol.for("lit-noChange"),Fe=Symbol.for("lit-nothing"),gl=new WeakMap,Fi=Gi.createTreeWalker(Gi,129,null,!1);class Nr{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,s=0;const d=e.length-1,c=this.parts,[p,u]=((a,l)=>{const h=a.length-1,f=[];let m,v=l===2?"<svg>":"",g=sr;for(let b=0;b<h;b++){const x=a[b];let w,A,S=-1,q=0;for(;q<x.length&&(g.lastIndex=q,A=g.exec(x),A!==null);)q=g.lastIndex,g===sr?A[1]==="!--"?g=pl:A[1]!==void 0?g=hl:A[2]!==void 0?(vl.test(A[2])&&(m=RegExp("</"+A[2],"g")),g=Ho):A[3]!==void 0&&(g=Ho):g===Ho?A[0]===">"?(g=m!=null?m:sr,S=-1):A[1]===void 0?S=-2:(S=g.lastIndex-A[2].length,w=A[1],g=A[3]===void 0?Ho:A[3]==='"'?ml:fl):g===ml||g===fl?g=Ho:g===pl||g===hl?g=sr:(g=Ho,m=void 0);const P=g===Ho&&a[b+1].startsWith("/>")?" ":"";v+=g===sr?x+Mh:S>=0?(f.push(w),x.slice(0,S)+"$lit$"+x.slice(S)+Ao+P):x+Ao+(S===-2?(f.push(void 0),b):P)}const y=v+(a[h]||"<?>")+(l===2?"</svg>":"");if(!Array.isArray(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ul!==void 0?ul.createHTML(y):y,f]})(e,t);if(this.el=Nr.createElement(p,i),Fi.currentNode=this.el.content,t===2){const a=this.el.content,l=a.firstChild;l.remove(),a.append(...l.childNodes)}for(;(r=Fi.nextNode())!==null&&c.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const a=[];for(const l of r.getAttributeNames())if(l.endsWith("$lit$")||l.startsWith(Ao)){const h=u[s++];if(a.push(l),h!==void 0){const f=r.getAttribute(h.toLowerCase()+"$lit$").split(Ao),m=/([.?@])?(.*)/.exec(h);c.push({type:1,index:n,name:m[2],strings:f,ctor:m[1]==="."?$h:m[1]==="?"?Fh:m[1]==="@"?zh:Cn})}else c.push({type:6,index:n})}for(const l of a)r.removeAttribute(l)}if(vl.test(r.tagName)){const a=r.textContent.split(Ao),l=a.length-1;if(l>0){r.textContent=Ki?Ki.emptyScript:"";for(let h=0;h<l;h++)r.append(a[h],kr()),Fi.nextNode(),c.push({type:2,index:++n});r.append(a[l],kr())}}}else if(r.nodeType===8)if(r.data===au)c.push({type:2,index:n});else{let a=-1;for(;(a=r.data.indexOf(Ao,a+1))!==-1;)c.push({type:7,index:n}),a+=Ao.length-1}n++}}static createElement(e,t){const i=Gi.createElement("template");return i.innerHTML=e,i}}function Qi(o,e,t=o,i){var r,n,s,d;if(e===di)return e;let c=i!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[i]:t._$Cu;const p=Pr(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==p&&((n=c==null?void 0:c._$AO)===null||n===void 0||n.call(c,!1),p===void 0?c=void 0:(c=new p(o),c._$AT(o,t,i)),i!==void 0?((s=(d=t)._$Cl)!==null&&s!==void 0?s:d._$Cl=[])[i]=c:t._$Cu=c),c!==void 0&&(e=Qi(o,c._$AS(o,e.values),c,i)),e}class jh{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:r}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Gi).importNode(i,!0);Fi.currentNode=n;let s=Fi.nextNode(),d=0,c=0,p=r[0];for(;p!==void 0;){if(d===p.index){let u;p.type===2?u=new Kr(s,s.nextSibling,this,e):p.type===1?u=new p.ctor(s,p.name,p.strings,this,e):p.type===6&&(u=new Bh(s,this,e)),this.v.push(u),p=r[++c]}d!==(p==null?void 0:p.index)&&(s=Fi.nextNode(),d++)}return n}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Kr{constructor(e,t,i,r){var n;this.type=2,this._$AH=Fe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cg=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Qi(this,e,t),Pr(e)?e===Fe||e==null||e===""?(this._$AH!==Fe&&this._$AR(),this._$AH=Fe):e!==this._$AH&&e!==di&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):(i=>{var r;return dl(i)||typeof((r=i)===null||r===void 0?void 0:r[Symbol.iterator])=="function"})(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==Fe&&Pr(this._$AH)?this._$AA.nextSibling.data=e:this.k(Gi.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Nr.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.m(i);else{const s=new jh(n,this),d=s.p(this.options);s.m(i),this.k(d),this._$AH=s}}_$AC(e){let t=gl.get(e.strings);return t===void 0&&gl.set(e.strings,t=new Nr(e)),t}S(e){dl(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new Kr(this.M(kr()),this.M(kr()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Cn{constructor(e,t,i,r,n){this.type=1,this._$AH=Fe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Fe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const n=this.strings;let s=!1;if(n===void 0)e=Qi(this,e,t,0),s=!Pr(e)||e!==this._$AH&&e!==di,s&&(this._$AH=e);else{const d=e;let c,p;for(e=n[0],c=0;c<n.length-1;c++)p=Qi(this,d[i+c],t,c),p===di&&(p=this._$AH[c]),s||(s=!Pr(p)||p!==this._$AH[c]),p===Fe?e=Fe:e!==Fe&&(e+=(p!=null?p:"")+n[c+1]),this._$AH[c]=p}s&&!r&&this.C(e)}C(e){e===Fe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class $h extends Cn{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===Fe?void 0:e}}const Uh=Ki?Ki.emptyScript:"";class Fh extends Cn{constructor(){super(...arguments),this.type=4}C(e){e&&e!==Fe?this.element.setAttribute(this.name,Uh):this.element.removeAttribute(this.name)}}class zh extends Cn{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=Qi(this,e,t,0))!==null&&i!==void 0?i:Fe)===di)return;const r=this._$AH,n=e===Fe&&r!==Fe||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==Fe&&(r===Fe||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Bh{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Qi(this,e)}}const bl=window.litHtmlPolyfillSupport;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ns,ss;bl==null||bl(Nr,Kr),((rs=globalThis.litHtmlVersions)!==null&&rs!==void 0?rs:globalThis.litHtmlVersions=[]).push("2.2.2");class tt extends Di{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((i,r,n)=>{var s,d;const c=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:r;let p=c._$litPart$;if(p===void 0){const u=(d=n==null?void 0:n.renderBefore)!==null&&d!==void 0?d:null;c._$litPart$=p=new Kr(r.insertBefore(kr(),u),u,void 0,n!=null?n:{})}return p._$AI(i),p})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return di}}tt.finalized=!0,tt._$litElement$=!0,(ns=globalThis.litElementHydrateSupport)===null||ns===void 0||ns.call(globalThis,{LitElement:tt});const yl=globalThis.litElementPolyfillSupport;yl==null||yl({LitElement:tt}),((ss=globalThis.litElementVersions)!==null&&ss!==void 0?ss:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=o=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(o,e):((t,i)=>{const{kind:r,elements:n}=i;return{kind:r,elements:n,finisher(s){window.customElements.define(t,s)}}})(o,e),Vh=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Kt(Ke({},e),{finisher(t){t.createProperty(e.key,o)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function Be(o){return(e,t)=>t!==void 0?((i,r,n)=>{r.constructor.createProperty(n,i)})(o,e,t):Vh(o,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function bn(o){return Be(Kt(Ke({},o),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lu=({finisher:o,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const n=(r=t.originalKey)!==null&&r!==void 0?r:t.key,s=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:Kt(Ke({},t),{key:n});return o!=null&&(s.finisher=function(d){o(d,n)}),s}{const n=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),o==null||o(n,i)}};function Jo(o,e){return lu({descriptor:t=>{const i={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var n,s;return this[r]===void 0&&(this[r]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xl(o){return lu({descriptor:e=>({get(){var t,i;return(i=(t=this.renderRoot)===null||t===void 0?void 0:t.querySelectorAll(o))!==null&&i!==void 0?i:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var as;(as=window.HTMLSlotElement)===null||as===void 0||as.prototype.assignedElements;/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Gr=o=>e=>class extends e{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=o.subscribe(()=>this.stateChanged(o.getState())),this.stateChanged(o.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(t){}};function nt(o){return"Minified Redux error #"+o+"; visit https://redux.js.org/Errors?code="+o+" for the full message or use the non-minified dev environment for full errors. "}var wl=typeof Symbol=="function"&&Symbol.observable||"@@observable",ls=function(){return Math.random().toString(36).substring(7).split("").join(".")},yn={INIT:"@@redux/INIT"+ls(),REPLACE:"@@redux/REPLACE"+ls(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ls()}};function Hh(o){if(typeof o!="object"||o===null)return!1;for(var e=o;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(o)===e}const D={agrupadorGenerico:{tipo:"DispositivoAgrupadorGenerico",name:void 0,tagId:"dg",descricao:void 0,descricaoPlural:void 0,tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo","Secao"],tiposPermitidosFilhos:["Parte","Livro","Titulo","Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},alinea:{tipo:"Alinea",name:"Alinea",tagId:"ali",descricao:"Al\xEDnea",descricaoPlural:"Al\xEDneas",tiposPermitidosPai:["Inciso"],tiposPermitidosFilhos:["Item"],tipoProvavelFilho:"Item",INDICADOR_SEQUENCIA:[";","; e","; ou"],INDICADOR_FIM_SEQUENCIA:["."],INDICADOR_DESDOBRAMENTO:[":"]},articulacao:{tipo:"Articulacao",name:"Articulacao",tagId:"",descricao:"Articula\xE7\xE3o",descricaoPlural:"Articula\xE7\xF5es",tiposPermitidosPai:[],tiposPermitidosFilhos:["Parte","Livro","Titulo","Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["."],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:[":"]},artigo:{tipo:"Artigo",name:"Artigo",tagId:"art",descricao:"Artigo",descricaoPlural:"Artigos",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo","Secao","Subsecao"],tiposPermitidosFilhos:["Paragrafo","Inciso"],tipoProvavelFilho:"Inciso",INDICADOR_SEQUENCIA:["."],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:[":"]},capitulo:{tipo:"Capitulo",name:"Capitulo",tagId:"cap",descricao:"Cap\xEDtulo",descricaoPlural:"Cap\xEDtulos",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo"],tiposPermitidosFilhos:["Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},caput:{tipo:"Caput",name:"Caput",tagId:"cpt",descricao:"Caput",descricaoPlural:"Capita",tiposPermitidosPai:["Artigo"],tiposPermitidosFilhos:["Inciso"],tipoProvavelFilho:"Inciso",INDICADOR_SEQUENCIA:["."],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:[":"]},generico:{tipo:"DispositivoGenerico",name:void 0,tagId:"gen",descricao:"Dispositivo gen\xE9rico",descricaoPlural:"Dispositivos gen\xE9ricos",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo","Secao","Subsecao"],tiposPermitidosFilhos:["Paragrafo","Inciso","Alinea","Item"],tipoProvavelFilho:"DispositivoGenerico",INDICADOR_SEQUENCIA:[";","; e","; ou"],INDICADOR_FIM_SEQUENCIA:["."],INDICADOR_DESDOBRAMENTO:[":"]},inciso:{tipo:"Inciso",name:"Inciso",tagId:"inc",descricao:"Inciso",descricaoPlural:"Incisos",tiposPermitidosPai:["Artigo","Caput","Paragrafo"],tiposPermitidosFilhos:["Alinea"],tipoProvavelFilho:"Alinea",INDICADOR_SEQUENCIA:[";","; e","; ou"],INDICADOR_FIM_SEQUENCIA:["."],INDICADOR_DESDOBRAMENTO:[":"]},item:{tipo:"Item",name:"Item",tagId:"ite",descricao:"Item",descricaoPlural:"Itens",tiposPermitidosPai:["Alinea"],tiposPermitidosFilhos:[],tipoProvavelFilho:"DispositivoGenerico",INDICADOR_SEQUENCIA:[";","; e","; ou"],INDICADOR_FIM_SEQUENCIA:["."],INDICADOR_DESDOBRAMENTO:[":"]},livro:{tipo:"Livro",name:"Livro",tagId:"liv",descricao:"Livro",descricaoPlural:"Livros",tiposPermitidosPai:["Articulacao","Parte"],tiposPermitidosFilhos:["Titulo","Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},omissis:{tipo:"Omissis",name:"Omissis",tagId:"omi",descricao:"Linha pontilhada (omissis)",descricaoPlural:"Linhas pontilhadas (omissis)",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo","Secao","Subsecao","Artigo","Caput","Paragrafo","Alinea","Inciso"],tiposPermitidosFilhos:["Parte","Livro","Titulo","Capitulo","Secao","Subsecao","Artigo","Paragrafo","Alinea","Inciso","Item"],tipoProvavelFilho:void 0,INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:["NA"]},paragrafo:{tipo:"Paragrafo",name:"Paragrafo",tagId:"par",descricao:"Par\xE1grafo",descricaoPlural:"Par\xE1grafos",tiposPermitidosPai:["Artigo"],tiposPermitidosFilhos:["Inciso"],tipoProvavelFilho:"Inciso",INDICADOR_SEQUENCIA:["."],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:[":"]},parte:{tipo:"Parte",name:"Parte",tagId:"prt",descricao:"Parte",descricaoPlural:"Partes",tiposPermitidosPai:["Articulacao"],tiposPermitidosFilhos:["Livro","Titulo","Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},secao:{tipo:"Secao",name:"Secao",tagId:"sec",descricao:"Se\xE7\xE3o",descricaoPlural:"Se\xE7\xF5es",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo"],tiposPermitidosFilhos:["Subsecao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},subsecao:{tipo:"Subsecao",name:"Subsecao",tagId:"sub",descricao:"Subse\xE7\xE3o",descricaoPlural:"Subse\xE7\xF5es",tiposPermitidosPai:["Secao"],tiposPermitidosFilhos:["Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},titulo:{tipo:"Titulo",name:"Titulo",tagId:"tit",descricao:"T\xEDtulo",descricaoPlural:"T\xEDtulos",tiposPermitidosPai:["Articulacao","Parte","Livro"],tiposPermitidosFilhos:["Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]}};class Qe{constructor(e,t){var i;this.isDispositivoAlteracao=!1,this.descricao=`Adicionar ${(i=e==null?void 0:e.descricao)!==null&&i!==void 0?i:""} ${t!=null?t:""}`,this.tipo=e==null?void 0:e.tipo,this.posicao=t}execute(e,t,i,r=!1){return{type:"ADICIONAR_ELEMENTO",atual:e,novo:{tipo:i,isDispositivoAlteracao:this.isDispositivoAlteracao,conteudo:{texto:t}},hasDesmembramento:r,posicao:this.posicao}}}const ua=new Qe,cu=new Qe(D.artigo),uu=new Qe(D.artigo,"antes"),du=new Qe(D.artigo,"depois"),da=new Qe(D.alinea),pu=new Qe(D.alinea,"antes"),hu=new Qe(D.alinea,"depois"),Tn=new Qe(D.inciso),fu=new Qe(D.inciso,"antes"),mu=new Qe(D.inciso,"depois"),vu=new Qe(D.item),gu=new Qe(D.item,"antes"),bu=new Qe(D.item,"antes"),yu=new Qe(D.omissis),xu=new Qe(D.paragrafo),wu=new Qe(D.paragrafo,"antes"),Au=new Qe(D.paragrafo,"depois");class uo{constructor(e){this.descricao="Adicionar "+e.descricao,this.tipo=e.tipo}execute(e){return{type:"AGRUPAR_ELEMENTO",atual:e,novo:{tipo:this.tipo}}}}const Kh=new uo(D.parte),Gh=new uo(D.livro),Qh=new uo(D.titulo),Ls=new uo(D.capitulo),Wh=new uo(D.secao),Zh=new uo(D.subsecao),Xh=new class{constructor(){this.descricao="Atualizar dispositivo"}execute(o){return{type:"APLICAR_ALTERACOES_EMENDA",alteracoesEmenda:o}}},Yh=new class{constructor(){this.descricao="Atualizar dispositivo"}execute(o){return this.tipo=o.tipo,{type:"ATUALIZAR_ELEMENTO",atual:o}}},Jh=new class{constructor(){this.descricao="Atualizar Norma Referenciada"}execute(o){return this.tipo=o.tipo,{type:"ATUALIZAR_REFERENCIA_ELEMENTO",atual:o}}},Al=new class{constructor(){this.descricao="Atualizar dispositivo"}execute(o){return this.tipo=o.tipo,{type:"ATUALIZAR_TEXTO_ELEMENTO",atual:o}}},ef=new class{constructor(){this.descricao="Elemento selecionado"}execute(o){return{type:"ELEMENTO_SELECIONADO",atual:o}}};class Eu{constructor(){this.descricao="Informar norma alterada"}execute(e){return{type:"INFORMAR_NORMA",atual:e}}}const pa=new Eu;class _u{constructor(){this.descricao="Mover para baixo"}execute(e){return{type:"Mover para baixo",atual:e}}}const Ro=new _u;class Ou{constructor(){this.descricao="Mover para cima"}execute(e){return{type:"Mover para cima",atual:e}}}const Lo=new Ou;class Dn{constructor(){this.descricao="Remover dispositivo"}execute(e){return{type:"REMOVER_ELEMENTO",atual:e}}}const Vt=new Dn,tf=new class{constructor(){this.descricao="Remover dispositivo sem texto"}execute(o,e){return{type:"REMOVER_ELEMENTO_SEM_TEXTO",atual:o,key:e}}};class Rn{constructor(){this.descricao="Numerar e criar r\xF3tulo para o dispositivo "}execute(e,t,i){return this.tipo=e.tipo,{type:"RENUMERAR_ELEMENTO",atual:e,novo:{numero:t,existenteNaNorma:i}}}}const Ut=new Rn,ha=new class{constructor(){this.descricao="Abandonar modifica\xE7\xF5es do dispositivo"}execute(o){return{type:"RESTAURAR_ELEMENTO",atual:o}}},qu=new class{constructor(){this.descricao="Suprimir dispositivo"}execute(o){return{type:"SUPRIMIR_ELEMENTO",atual:o}}};class ie{constructor(e,t,i){this.descricao=t,this.tipo=e.tipo,this.nomeAcao=i}execute(e){return{type:"TRANSFORMAR_TIPO_ELEMENTO",subType:this.nomeAcao,atual:e,novo:{tipo:this.tipo}}}}const Iu=new ie(D.omissis,"Transformar em Omissis de Al\xEDnea","transformarAlineaEmOmissisAlinea"),Su=new ie(D.omissis,"Transformar em Omissis de Inciso de Caput","transformarIncisoCaputEmOmissisIncisoCaput"),ku=new ie(D.omissis,"Transformar em Omissis de Item","transformarItemEmOmissisItem"),Pu=new ie(D.omissis,"Transformar em Omissis de Par\xE1grafo","transformarParagrafoEmOmissisParagrafo"),Ms=new ie(D.omissis,"Transformar em Omissis de Inciso de Par\xE1grafo","transformarIncisoParagrafoEmOmissisIncisoParagrafo"),Cr=new ie(D.inciso,"Transformar Al\xEDnea em Inciso","transformarAlineaEmIncisoCaput"),Tr=new ie(D.inciso,"Transformar Al\xEDnea em Inciso","transformarAlineaEmIncisoParagrafo"),Nu=new ie(D.item,"Transformar Al\xEDnea em Item","transformarAlineaEmItem"),Cu=new ie(D.paragrafo,"Transformar Artigo em Par\xE1grafo","transformarArtigoEmParagrafo"),of=new ie(D.inciso,"Transformar em Inciso","transformarDispositivoGenericoEmInciso"),rf=new ie(D.alinea,"Transformar em Al\xEDnea","transformarDispositivoGenericoEmAlinea"),nf=new ie(D.item,"Transformar em Item","transformarDispositivoGenericoEmItem"),Dr=new ie(D.paragrafo,"Transformar Inciso em Par\xE1grafo","transformarIncisoParagrafoEmParagrafo"),Rr=new ie(D.paragrafo,"Transformar Inciso Caput em Par\xE1grafo","transformarIncisoCaputEmParagrafo"),El=new ie(D.alinea,"Transformar Inciso de Caput em Al\xEDnea","transformarIncisoCaputEmAlinea"),_l=new ie(D.alinea,"Transformar Inciso de Caput em Al\xEDnea","transformarIncisoParagrafoEmAlinea"),Tu=new ie(D.alinea,"Transformar Omissis em Al\xEDnea","transformarOmissisEmAlinea"),Du=new ie(D.artigo,"Transformar Omissis em Artigo","transformarOmissisEmArtigo"),Ru=new ie(D.inciso,"Transformar Omissis em Inciso de Caput","transformarOmissisEmIncisoCaput"),Lu=new ie(D.inciso,"Transformar Omissis em Inciso de Par\xE1grafo","transformarOmissisEmIncisoParagrafo"),Mu=new ie(D.item,"Transformar Omissis em Item","transformarOmissisEmItem"),ju=new ie(D.paragrafo,"Transformar Omissis em Par\xE1grafo","transformarOmissisEmParagrafo"),$u=new ie(D.alinea,"Transformar Item em Al\xEDnea","transformarItemEmAlinea"),Uu=new ie(D.artigo,"Transformar Par\xE1grafo em Artigo","transformarParagrafoEmArtigo"),Fu=new ie(D.inciso,"Transformar Par\xE1grafo em Inciso de Par\xE1grafo","transformarParagrafoEmIncisoParagrafo"),zu=new ie(D.inciso,"Transformar Par\xE1grafo em Inciso de Caput","transformarParagrafoEmIncisoCaput"),Bu=new class{constructor(){this.descricao="Articula\xE7\xE3o validada"}execute(){return{type:"VALIDAR_ARTICULACAO"}}},Vu=new class{constructor(){this.descricao="Elemento validado"}execute(o){return{type:"VALIDAR_ELEMENTO",atual:o}}};var L;(function(o){o.DISPOSITIVO_ADICIONADO="Dispositivo Adicionado",o.DISPOSITIVO_NOVO="Dispositivo Novo",o.DISPOSITIVO_MODIFICADO="Dispositivo Modificado",o.DISPOSITIVO_ORIGINAL="Dispositivo Original",o.DISPOSITIVO_SUPRIMIDO="Dispositivo Suprimido"})(L||(L={}));const fa=o=>[L.DISPOSITIVO_ADICIONADO.toString(),L.DISPOSITIVO_MODIFICADO.toString(),L.DISPOSITIVO_SUPRIMIDO.toString()].includes(o.situacao.descricaoSituacao),Hu=o=>!!fa(o)||o.pai!==void 0&&Hu(o.pai),qe=o=>o.tipo===D.articulacao.tipo,to=o=>o.tipo===D.generico.tipo,H=o=>o.tipo===D.artigo.tipo,ve=o=>o.tipo===D.caput.tipo,fe=o=>o.tipo===D.paragrafo.tipo,Ot=o=>o.tipo===D.inciso.tipo,st=o=>Ot(o)&&ve(o.pai),_o=o=>Ot(o)&&fe(o.pai),ni=o=>o.tipo===D.alinea.tipo,Ol=o=>o.tipo===D.item.tipo,me=o=>o.tipo===D.omissis.tipo,pe=o=>[D.articulacao.tipo,D.agrupadorGenerico.tipo,D.capitulo.tipo,D.livro.tipo,D.parte.tipo,D.secao.tipo,D.subsecao.tipo,D.titulo.tipo].includes(o.tipo),sf=o=>pe(o)&&!qe(o),ql=o=>o.tipo===D.agrupadorGenerico.tipo,Ri=o=>[D.paragrafo.tipo,D.inciso.tipo,D.alinea.tipo,D.item.tipo].includes(o.tipo);function Ku(o){return po(o.replace(/(<([^>]+)>)/gi,"").trim())}function ma(o,e){return e.map(t=>new RegExp(qo($i(t))+"\\s*$").test(o)).filter(t=>t)[0]===!0}function Qt(o){switch(o[0].trim()){case".":return"ponto";case":":return"dois pontos";case";":return"ponto e v\xEDrgula";case",":return"v\xEDrgula";default:return o[0].trim()}}function $i(o){return o.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}function qo(o){return o.replace(/\s+/g,"\\s+")}function po(o){return o.replace(/\s{2,}/g," ")}class Te{constructor(e){this.strs=new Array,e&&this.append(e)}append(e){e&&this.strs.push(e)}toString(){return function(e){let t="";return e.forEach(i=>{t+=i}),t}(this.strs)}}const Gu=/[\u0300-\u036f]/g;function Me(o){if(!o||qe(o))return o;if(o.pai===void 0)throw new Error("N\xE3o foi encontrada a articula\xE7\xE3o");return Me(o.pai)}function Qu(o,e){if(e.uuid===o)return e;if(e.filhos!==null){let t=null;const i=e.hasAlteracao()?e.alteracoes.filhos:e.filhos;for(let r=0;t===null&&r<i.length;r++)t=Qu(o,i[r]);return t}return null}const hn=(o,e)=>{if(e===void 0)throw new Error("uuid n\xE3o foi informado");return Qu(e,o)},Wi=o=>{var e;return Ue(o)?Wi(o.filhos[o.filhos.length-1]):(o==null?void 0:o.hasAlteracao())&&((e=o.alteracoes)===null||e===void 0?void 0:e.filhos.length)?Wi(o.alteracoes.filhos[o.alteracoes.filhos.length-1]):o},ot=o=>H(o)?Me(o).artigos.filter(e=>e.tipo===o.tipo):o.pai?o.pai.filhos.filter(e=>e.tipo===o.tipo):[o],Lr=(o,e,t)=>{if(o!=null&&o.filhos){for(let i=o==null?void 0:o.indexOf(e);i>=0;i--){const r=o==null?void 0:o.filhos[i];pe(r)&&t.push(r)}if(o!=null&&o.pai)return Lr(o.pai,e.pai,t)}return t},js=(o,e)=>{if(o&&o.pai)return o.pai&&o.pai.tipo===e?o.pai:js(o.pai,e)},va=o=>H(o.pai)?o.pai:va(o.pai),Wu=o=>{const e=o.pai;return H(e)&&!B(e)?o.pai:Wu(o.pai)},Qr=(o,e)=>{if(o!=null&&o.filhos){for(let t=(o==null?void 0:o.indexOf(e))-1;t>=0;t--){const i=o==null?void 0:o.filhos[t];if(H(i))return i;if(pe(i))return Zu(i)}if(o!=null&&o.pai)return Qr(o.pai,e.pai)}},Zu=o=>{if(o!==void 0&&o.filhos)for(let e=o.filhos.length-1;e>=0;e--){const t=o.filhos[e];if(H(t))return t;if(pe(t))return Zu(t)}},Il=o=>{const e=o.pai.indexOf(o);return o.pai.filhos.filter((t,i)=>i>e&&pe(t))[0]},Sl=o=>{var e;return((e=o.filhos)===null||e===void 0?void 0:e.filter(t=>to(t)).length)>0},Ae=o=>ot(o).length===1,ze=o=>{const e=ot(o);return e[e.length-1]===o},kl=o=>{const e=ot(o);return e.length>1&&e[e.length-2]===o},Lt=o=>ot(o)[0]===o,Ue=o=>o.filhos&&o.filhos.length>0,Se=o=>{const e=o.pai.indexOf(o);return e>0?o.pai.filhos[e-1]:void 0},oo=o=>{const e=ot(o),t=e.indexOf(o);return t>0?e[t-1]:void 0},mi=o=>{const e=o.pai.indexOf(o);return e===0?void 0:o.pai.filhos.filter((i,r)=>r<e&&(i.tipo===o.tipo||i.tipo===yu.tipo)).pop()},Mr=o=>{const e=o.pai.indexOf(o);return e<o.pai.filhos.length-1?o.pai.filhos[e+1]:void 0},pi=o=>{const e=ot(o),t=e.indexOf(o);return t<e.length-1?e[t+1]:void 0},ga=o=>{var e,t,i;const r=(e=o.pai)===null||e===void 0?void 0:e.indexOf(o);return(i=(t=o.pai)===null||t===void 0?void 0:t.filhos.filter((n,s)=>s<r&&n.tipo===o.tipo&&n.pai===o.pai))!==null&&i!==void 0?i:[]},ba=o=>{var e,t,i;const r=(e=o.pai)===null||e===void 0?void 0:e.indexOf(o);return(i=(t=o.pai)===null||t===void 0?void 0:t.filhos.filter((n,s)=>s>r&&n.tipo===o.tipo))!==null&&i!==void 0?i:[]},vi=o=>{const e=o.pai.indexOf(o);return e===o.pai.filhos.length-1?void 0:o.pai.filhos.filter((i,r)=>r>e&&(i.tipo===o.tipo||i.tipo===yu.tipo))[0]},Xu=(o,e=!1)=>{if(H(o)){const i=Me(o),r=Me(o).indexOfArtigo(o);return i.artigos.filter((n,s)=>s>r)}const t=o.pai.indexOf(o);return o.pai.filhos.filter((i,r)=>e?r>t:r>=t).filter(i=>o.tipo===i.tipo)},xn=o=>H(o)&&Ae(o),ya=o=>fe(o)&&Ae(o),xa=o=>o.cabecaAlteracao||vt(o)?o:xa(o.pai),vt=o=>B(o)&&qe(o.pai)&&o.pai.pai!==void 0,Yu=o=>ba(o).filter(e=>ao(e)&&e.numero==="1").length>0,kt=o=>{const e=xa(o),t=hi(e);return t.length>0&&t[t.length-1]===o},Le=o=>qe(o)&&o.pai!==void 0,B=o=>{if(o.isDispositivoAlteracao)return!0;try{return Me(o).pai!==void 0}catch{return!1}},ao=o=>o.situacao.descricaoSituacao===L.DISPOSITIVO_ORIGINAL,Ju=o=>o.situacao.descricaoSituacao===L.DISPOSITIVO_MODIFICADO||o.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO,hi=o=>Oo(o,[]),Oo=(o,e)=>{e.push(o);const t=o.hasAlteracao()?o.alteracoes.filhos:o.filhos;return t.length&&t.forEach(i=>Oo(i,e)),e},Mt=(o,e)=>{if(o)if(e(o),o.tipo===D.artigo.tipo){const t=o;t.caput&&(Mt(t.caput,e),o.alteracoes&&Mt(o.alteracoes,e),o.filhos.filter(i=>fe(i)||me(i)&&!ve(i.pai)).forEach(i=>{Mt(i,e)}))}else o.alteracoes&&Mt(o.alteracoes,e),o.filhos.forEach(t=>{Mt(t,e)})},Li=(o,e)=>{if(!o)return;let t=e(o);if(t)return t;if(o.tipo===D.artigo.tipo){const i=o;if(i.caput){if(t=Li(i.caput,e),t||o.alteracoes&&(t=Li(o.alteracoes,e),t))return t;for(const r of o.filhos.filter(n=>fe(n)||me(n)&&!ve(n.pai)))if(t=Li(r,e),t)return t}}else{if(o.alteracoes&&(t=Li(o.alteracoes,e),t))return t;for(const i of o.filhos)if(t=Li(i,e),t)return t}},si=o=>o&&!o.pai&&o.tipo===D.articulacao.tipo,wn=(o,e)=>{const t=af(e);let i=o;if(t){const r=o.artigos.find(n=>t===n.id);if(r){if(e===t||e===t+"_cpt")return r;i=r}}return Li(i,r=>e===r.id?r:void 0)},af=o=>{const e=/^art\d+(-\d+)*/.exec(o);return e!=null&&e.length?e[0]:void 0},lf=(o,e)=>{if(!o||!e)return!1;let t=o.pai;for(;t;){if(t===e)return!0;t=t.pai}return!1},ed=o=>{if(!o)return!1;let e=o.pai;for(;e;){if(e.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO)return!0;e=e.pai}return!1},td=o=>{const e=st(o)?o.pai.pai:o.pai;return!(e===void 0||!B(o)||o.situacao.descricaoSituacao!==L.DISPOSITIVO_ADICIONADO||vt(o))&&(e.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO&&!e.situacao.existeNaNormaAlterada||!(e.situacao.descricaoSituacao!==L.DISPOSITIVO_ADICIONADO||!vt(e))||td(e))};var Y;(function(o){o[o.INFO=0]="INFO",o[o.WARNING=1]="WARNING",o[o.ERROR=2]="ERROR"})(Y||(Y={}));const xt="...........................................................................................",at=o=>{var e;const t=H(o)?o.caput:o;return ma(t.texto,(e=t.INDICADOR_DESDOBRAMENTO)!==null&&e!==void 0?e:[])},An=o=>{var e;const t=H(o)?o.caput:o;return ma(t.texto,(e=t.INDICADOR_FIM_SEQUENCIA)!==null&&e!==void 0?e:[])},ei=o=>{var e;const t=H(o)?o.caput:o;return ma(t.texto,(e=t.INDICADOR_SEQUENCIA)!==null&&e!==void 0?e:[])},jr=xt+".\u201D (NR)",od=o=>new RegExp(qo($i("o seguinte acr\xE9scimo:"))+"\\s*$").test(o)||new RegExp(qo($i("os seguintes acr\xE9scimos:"))+"\\s*$").test(o)||new RegExp(qo($i("passa a vigorar com a seguinte altera\xE7\xE3o:"))+"\\s*$").test(o)||new RegExp(qo($i("passa a vigorar com as seguintes altera\xE7\xF5es:"))+"\\s*$").test(o),eo=o=>/^[.]*(?:\s*)["”“]?(\s*)?\(NR\)\s*$/.test(o)?jr:/["”]?(\s*)?\(NR\)?\s*$/.test(o)?o.replace(/["“](?!.*["”])/,"\u201D"):o!==xt&&o!==jr&&new RegExp("^[.]+$").test(o)?xt:o,id=o=>/\.["”](?:\s*\(NR\))\s*$/.test(o),Pl=o=>o!==void 0&&/.*:[\s]{1,2}["”“].*[.]["”“]$/.test(o),cf=o=>{var e;const t=[];return(qe(o)||o.texto)&&o.texto.trim().length!==0||t.push({tipo:Y.ERROR,descricao:"N\xE3o foi informado um texto para "+(o.artigoDefinido+" "+o.descricao)}),qe(o)||!o.texto||function(i){const r=document.createElement("div");return r.innerHTML=i,r.innerHTML===i}(o.texto)||t.push({tipo:Y.ERROR,descricao:"O conte\xFAdo do dispositivo n\xE3o \xE9 um HTML v\xE1lido"}),!qe(o)&&o.texto&&o.texto.trim().length>500&&t.push({tipo:Y.WARNING,descricao:"Pelo princ\xEDpio da concis\xE3o, o texto dos dispositivos n\xE3o deve ser extenso, devendo ser utilizadas frases curtas e concisas"}),Ri(o)&&!fe(o)&&o.texto&&/^[A-ZÀ-Ú]/.test(o.texto)&&t.push({tipo:Y.WARNING,descricao:`${o.descricao} deveria iniciar com letra min\xFAscula, a n\xE3o ser que se trate de uma situa\xE7\xE3o especial, como nome pr\xF3prio`}),!Ri(o)||fe(o)||me(o)||!o.texto||Ae(o)||ze(o)||kl(o)||Ue(o)||o.INDICADOR_SEQUENCIA===void 0||function(i){const r=i.replace(/(<([^>]+)>)/gi,"").trim();return r.length>0?r.charAt(r.length-1):""}(o.texto)===o.INDICADOR_SEQUENCIA[0]||t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria terminar com ${Qt(o.INDICADOR_SEQUENCIA)}. ${ei(o)?"A varia\xE7\xE3o informada s\xF3 \xE9 permitida para o pen\xFAltimo elemento":""}`}),!H(o)&&!fe(o)||!o.texto||/^[...]{3,}/.test(o.texto)||/^[A-ZÀ-Ú]/.test(o.texto)||t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria iniciar com letra mai\xFAscula`}),B(o)||pe(o)||me(o)||!o.texto||!(!H(o)&&Ue(o)||H(o)&&Ue(o.caput))||at(o)||t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria terminar com ${Qt(o.INDICADOR_DESDOBRAMENTO)}`}),B(o)||!Ri(o)||fe(o)||!o.texto||!Ae(o)&&!ze(o)||Sl(o.pai)||Ue(o)||An(o)||t.push({tipo:Y.ERROR,descricao:`\xDAltimo dispositivo de uma sequ\xEAncia deveria terminar com ${Qt(o.INDICADOR_FIM_SEQUENCIA)}`}),B(o)||!Ri(o)||fe(o)||!o.texto||Ae(o)||!kl(o)||Ue(o)||ei(o)||t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria terminar com uma das seguintes possibilidades: ${o.INDICADOR_SEQUENCIA.join("     ")}`}),B(o)||!H(o)&&!fe(o)||!o.texto||Ue(o)||o.hasAlteracao()||Ae(o)||ei(o)||Pl(o.texto)||t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria terminar com ${Qt(o.INDICADOR_SEQUENCIA)}`}),!B(o)&&H(o)&&o.texto&&o.hasAlteracao()&&!at(o)&&!od(o.texto)&&t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria terminar com ${Qt(o.INDICADOR_DESDOBRAMENTO)}`}),B(o)||!H(o)||!o.texto||o.hasAlteracao()||Ue(o)&&Ue(o.caput)||!at(o)||t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria terminar com ${Qt(o.INDICADOR_SEQUENCIA)}`}),!B(o)&&H(o)&&o.hasAlteracao()&&!(!((e=o.alteracoes)===null||e===void 0)&&e.base)&&t.push({tipo:Y.ERROR,descricao:"\xC9 necess\xE1rio informar a norma a ser alterada"}),B(o)&&!pe(o)&&o.texto!==xt&&o.texto&&(!H(o)&&Ue(o)||H(o)&&Ue(o.caput))&&!at(o)&&t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria terminar com ${Qt(o.INDICADOR_DESDOBRAMENTO)}`}),!(B(o)&&fe(o)&&o.texto)||Ue(o)||Ae(o)||ze(o)||ei(o)||t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria terminar com ${Qt(o.INDICADOR_SEQUENCIA)}`}),!B(o)||!kt(o)||o.texto&&id(o.texto)||t.push({tipo:Y.ERROR,descricao:"O \xFAltimo dispositivo do bloco de altera\xE7\xE3o deve terminar com: <b>.&#8221; (NR)</b>"}),B(o)&&o.texto&&!kt(o)&&/.*["”“]$/.test(o.texto)&&!Pl(o.texto)&&!/”.*(NR)/.test(o.texto)&&t.push({tipo:Y.ERROR,descricao:"Somente o \xFAltimo dispositivo do bloco de altera\xE7\xE3o poderia ser finalizado com aspas"}),B(o)&&o.texto&&!kt(o)&&/”.*(NR)/.test(o.texto)&&t.push({tipo:Y.ERROR,descricao:"Somente o \xFAltimo dispositivo do bloco de altera\xE7\xE3o poderia terminar com &#8221; (NR)"}),B(o)&&o.texto&&o===xa(o)&&o.filhos.length===0&&(o.texto===jr||o.texto===xt)&&t.push({tipo:Y.ERROR,descricao:"N\xE3o foi informada nenhuma altera\xE7\xE3o"}),!(B(o)&&o.texto&&Ri(o))||fe(o)||me(o)||o.pai.filhos.filter(i=>me(i)).length!==0||!Ae(o)||Sl(o.pai)||Ue(o)||An(o)||kt(o)||t.push({tipo:Y.ERROR,descricao:`\xDAltimo dispositivo de uma sequ\xEAncia deveria terminar com ${Qt(o.INDICADOR_FIM_SEQUENCIA)}`}),t},uf=o=>pe(o)?(e=>{const t=[];var i,r;return qe(e)||e.texto&&e.texto.trim().length!==0||t.push({tipo:Y.ERROR,descricao:`N\xE3o foi informado um texto para ${e.artigoDefinido} ${e.descricao}`}),!qe(e)&&e.texto&&(i=e.texto,/[.,:]\s*$/.test(i))&&t.push({tipo:Y.ERROR,descricao:`N\xE3o pode haver sinal de pontua\xE7\xE3o ao final do texto d${e.artigoDefinido} ${e.descricao}`}),!qe(e)&&(r=e.texto,/<.+>/g.test(r==null?void 0:r.trim()))&&t.push({tipo:Y.ERROR,descricao:`Texto d${e.artigoDefinido} ${e.descricao} n\xE3o pode possuir formata\xE7\xE3o`}),t})(o):cf(o);var Nl;function or(o){return class extends o{constructor(){super(...arguments),this.tipoGenero="feminino",this.artigoDefinido="a",this.pronomePossessivoSingular=" da ",this.pronomePossessivoPlural=" das ",this.artigoDefinidoSingular=" a ",this.artigoDefinidoPlural=" as ",this.artigoIndefinidoSingular=" uma ",this.artigoDefinidoPrecedidoPreposicaoASingular=" \xE0 ",this.artigoDefinidoPrecedidoPreposicaoAPlural=" \xE0s ",this.contracaoEmArtigoDefinidoSingular=" na "}}}function Ln(o){return class extends o{constructor(){super(...arguments),this.tipoGenero="indefinido",this.artigoDefinido="",this.pronomePossessivoSingular="",this.pronomePossessivoPlural="",this.artigoDefinidoSingular="",this.artigoDefinidoPlural="",this.artigoIndefinidoSingular="",this.artigoDefinidoPrecedidoPreposicaoASingular="",this.artigoDefinidoPrecedidoPreposicaoAPlural="",this.contracaoEmArtigoDefinidoSingular=""}}}function ho(o){return class extends o{constructor(){super(...arguments),this.tipoGenero="masculino",this.artigoDefinido="o",this.pronomePossessivoSingular=" do ",this.pronomePossessivoPlural=" dos ",this.artigoDefinidoSingular=" o ",this.artigoDefinidoPlural=" os ",this.artigoIndefinidoSingular=" um ",this.artigoDefinidoPrecedidoPreposicaoASingular=" ao ",this.artigoDefinidoPrecedidoPreposicaoAPlural=" aos ",this.contracaoEmArtigoDefinidoSingular=" no "}}}(function(o){o.MASCULINO="masculino",o.FEMININO="feminino",o.INDEFINIDO="indefinido"})(Nl||(Nl={}));const rd=new(or(Object)),nd=new(ho(Object)),df=new(Ln(Object)),wa=o=>o==="F"?rd:o==="M"?nd:df;class pf{constructor(e,t){this.nome=e,this.genero=typeof t=="string"?wa(t):t}}const En={autoridades:[{urn:"federal",descricao:"Federal"},{urn:"senado.federal",descricao:"Senado Federal"},{urn:"congresso.nacional",descricao:"Congresso Nacional"}],tiposDocumento:[{urn:"lei",descricao:"Lei",genero:"F"},{urn:"lei.complementar",descricao:"Lei Complementar",genero:"F"},{urn:"lei.delegada",descricao:"Lei Delegada",genero:"F"},{urn:"decreto.legislativo",descricao:"Decreto Legislativo",genero:"M"},{urn:"decreto.lei",descricao:"Decreto-Lei",genero:"M"},{urn:"decreto",descricao:"Decreto",genero:"M"},{urn:"consolidacao.leis.trabalho",descricao:"Consolida\xE7\xE3o das Leis do Trabalho",genero:"F"},{urn:"resolucao",descricao:"Resolu\xE7\xE3o",genero:"F"},{urn:"regimento.interno",descricao:"Regimento Interno",genero:"M"},{urn:"constituicao",descricao:"Constitui\xE7\xE3o",genero:"F"},{urn:"ato.disposicoes.constitucionais.transitorias",descricao:"Ato das Disposi\xE7\xF5es Constitucionais Transit\xF3rias",genero:"M"},{urn:"medida.provisoria",descricao:"Medida Provis\xF3ria",genero:"F"},{urn:"medida.provisoria;mpv",descricao:"Medida Provis\xF3ria",genero:"F"},{urn:"emenda.constitucional",descricao:"Emenda Constitucional",genero:"F"},{urn:"emenda.constitucional.revisao",descricao:"Emenda Constitucional de Revis\xE3o",genero:"F"},{urn:"proposta.emenda.constitucional;pec",descricao:"Proposta de Emenda Constitucional",genero:"F"},{urn:"projeto.lei;pl",descricao:"Projeto de Lei",genero:"M"},{urn:"projeto.lei;pls",descricao:"Projeto de Lei do Senado",genero:"M"},{urn:"projeto.lei.complementar;plp",descricao:"Projeto de Lei Complementar",genero:"M"},{urn:"projeto.lei.complementar;pls",descricao:"Projeto de Lei Complementar do Senado",genero:"M"},{urn:"projeto.lei;plc",descricao:"Projeto de Lei da C\xE2mara",genero:"M"},{urn:"projeto.lei.complementar;plc",descricao:"Projeto de Lei Complementar da C\xE2mara",genero:"M"},{urn:"projeto.lei.conversao;plv",descricao:"Projeto de Lei de Convers\xE3o",genero:"M"},{urn:"projeto.resolucao;prs",descricao:"Projeto de Resolu\xE7\xE3o do Senado",genero:"M"},{urn:"projeto.decreto.legislativo;pds",descricao:"Projeto de Decreto Legislativo",genero:"M"},{urn:"projeto.decreto.legislativo;pdl",descricao:"Projeto de Decreto Legislativo",genero:"M"},{urn:"substitutivo.projeto.lei.senado;scd",descricao:"Substitutivo da C\xE2mara dos Deputados",genero:"M"},{urn:"emenda.projeto.lei.senado;ecd",descricao:"Emenda(s) da C\xE2mara dos Deputados",genero:"F"}],fakeUrns:[{sigla:"PEC",urnAutoridade:"senado.federal",urnTipoDocumento:"proposta.emenda.constitucional;pec"},{sigla:"PL",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei;pl"},{sigla:"PLS",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei;pls"},{sigla:"PLP",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei.complementar;plp"},{sigla:"PLC",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei;plc"},{sigla:"PLV",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei.conversao;plv"},{sigla:"PRS",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.resolucao;prs"},{sigla:"PDS",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.decreto.legislativo;pds"},{sigla:"PDL",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.decreto.legislativo;pdl"},{sigla:"SCD",urnAutoridade:"senado.federal",urnTipoDocumento:"substitutivo.projeto.lei.senado;scd"},{sigla:"ECD",urnAutoridade:"senado.federal",urnTipoDocumento:"emenda.projeto.lei.senado;ecd"},{sigla:"MPV",urnAutoridade:"senado.federal",urnTipoDocumento:"medida.provisoria;mpv"}],siglas:[{urnAutoridade:"federal",urnTipoDocumento:"medida.provisoria",sigla:"MPV"},{urnAutoridade:"congresso.nacional",urnTipoDocumento:"projeto.lei",sigla:"PLN"},{urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei",sigla:"PLS"},{urnAutoridade:"congresso.nacional",urnTipoDocumento:"medida.provisoria",sigla:"MPV"},{urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei.senado.federal",sigla:"PLS"},{urnAutoridade:"camara.deputados",urnTipoDocumento:"projeto.lei",sigla:"PLC"}],atalhosUrn:[{urnTipoDocumento:"constituicao",urnAutoridade:"federal",urn:"urn:lex:br:federal:constituicao:1988-10-05;1988",nome:"Constitui\xE7\xE3o Federal"},{urnTipoDocumento:"ato.disposicoes.constitucionais.transitorias",urnAutoridade:"federal",urn:"urn:lex:br:federal:ato.disposicoes.constitucionais.transitorias:1988-10-05;1988",nome:"Ato das Disposi\xE7\xF5es Constitucionais Transit\xF3rias - ADCT"},{urnTipoDocumento:"consolidacao.leis.trabalho",urnAutoridade:"federal",urn:"urn:lex:br:federal:decreto.lei:1943-05-01;5452",nome:"Consolida\xE7\xE3o das Leis do Trabalho - CLT, aprovada pelo Decreto-Lei n\xBA 5.452, de 1\xBA de maio de 1943",genero:"F"},{urnTipoDocumento:"regimento.interno",urnAutoridade:"senado.federal",urn:"urn:lex:br:senado.federal:resolucao:1970-11-27;93",nome:"Regimento Interno do Senado Federal",genero:"M"},{urnTipoDocumento:"regimento.interno",urnAutoridade:"congresso.nacional",urn:"urn:lex:br:congresso.nacional:resolucao:1970-08-11;1",nome:"Regimento Comum do Congresso Nacional",genero:"M"}],eventos:[{urn:"leitura",tipoTextoProcessoLegislativo:"Texto inicial",genero:"M"},{urn:"aprovacao.substitutivo.decisao.terminativa",tipoTextoProcessoLegislativo:"Reda\xE7\xE3o do vencido em turno suplementar na Comiss\xE3o",substitutivo:"s",genero:"F"},{urn:"aprovacao.substitutivo",tipoTextoProcessoLegislativo:"Reda\xE7\xE3o do vencido em turno suplementar no Plen\xE1rio",substitutivo:"s",genero:"F"},{urn:"apresentacao.substitutivo",tipoTextoProcessoLegislativo:"Texto do substitutivo",substitutivo:"s",genero:"M"}]},hf=o=>{var e,t,i,r,n;const s=(e=Mo(o))!==null&&e!==void 0?e:{},d=c=>c.urnTipoDocumento===s.urn;return(n=(i=(t=En.siglas.find(d))===null||t===void 0?void 0:t.sigla)!==null&&i!==void 0?i:(r=En.fakeUrns.find(d))===null||r===void 0?void 0:r.sigla)!==null&&n!==void 0?n:""},Mo=o=>{var e;const t=(e=o.replace("urn:lex:br:",""))===null||e===void 0?void 0:e.split(":");return En.tiposDocumento.filter(i=>i.urn===t[1])[0]},Wr=o=>{var e,t,i;const r=(e=o.replace("urn:lex:br:",""))===null||e===void 0?void 0:e.split(":");return((t=r[2])===null||t===void 0?void 0:t.indexOf(";"))>-1?(i=r[2])===null||i===void 0?void 0:i.substring(r[2].indexOf(";")+1):""},ai=o=>{var e,t,i,r,n;const s=(e=o.replace("urn:lex:br:",""))===null||e===void 0?void 0:e.split(":"),d=(t=s[2])===null||t===void 0?void 0:t.substring(0,s[2].indexOf(";"));if(/\d{4}$/.test(d))return d;const c=(n=(r=(i=s[2])===null||i===void 0?void 0:i.substring(0,s[2].indexOf(";")))===null||r===void 0?void 0:r.split("-"))===null||n===void 0?void 0:n.reverse();return c?c.join("/"):""},ff=o=>ai(o).split("/").slice(-1)[0],sd=o=>{const e=o.indexOf("!");return e!==-1?o.substring(0,e):o},ad=o=>{const e=o.match(/^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](\d{4})$/);return e?`${e[3]}-${e[2]}-${e[1]}`:""},ld=o=>{var e,t;const i=(e=(d=>{var c;const p=(c=d.replace("urn:lex:br:",""))===null||c===void 0?void 0:c.split(":");return En.autoridades.filter(u=>u.urn===p[0])[0]})(o))===null||e===void 0?void 0:e.urn,r=(t=Mo(o))===null||t===void 0?void 0:t.urn,n=/^\d{1,5}$/.test(Wr(o)),s=/\d{4}$/.test(ai(o))?ai(o):ad(ai(o));return(o==null?void 0:o.startsWith("urn:lex:br:"))&&i&&r&&n&&s},_n=o=>{var e;const t=sd(o),i=Wr(t),r=(e=Mo(t))===null||e===void 0?void 0:e.descricao,n=ai(t),[s,d,c]=n.split("/").map(u=>parseInt(u)),p=n.length>7?mf(new Date(c,d-1,s)):void 0;return(r||"")+(i?" n\xBA "+parseInt(i).toLocaleString("pt-BR"):"")+(p?", de "+p:"")},mf=o=>o?o.getDate()+" de "+o.toLocaleDateString("pt-BR",{month:"long"})+" de "+o.getFullYear():void 0,cs={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XV:40,X:10,IX:9,V:5,IV:4,I:1},cd=o=>/^0(-[a-z]+)?$/i.test(o),us=o=>/^\d+$/.test(o),No=o=>/^\d{1,}([-]?[a-zA-Z]+)?$/.test(o),Aa=o=>/[a-zA-Z]+/.test(o),Mn=o=>/^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/i.test(o),ud=o=>{if(!Aa(o))throw new Error(`O valor ${o} n\xE3o \xE9 uma sequ\xEAncia de letras v\xE1lida.`);o=o.toLowerCase();let e=0;return[...o].forEach(t=>e=t.toLowerCase().charCodeAt(0)-97+1+26*e),e.toString()},$s=o=>{const e=parseInt(o);return e?Us(e):o},Us=o=>{let e="",t=0;for(;o>0;)t=(o-1)%26,o=(o-t-1)/26,e=e.replace(/^/,String.fromCharCode(97+t));return e},dd=o=>{if(o.startsWith("0"))return"0";if(!Mn(o))throw new Error("O valor '"+o+"' n\xE3o \xE9 um n\xFAmero em algarismo romano v\xE1lido.");let e=0,t=1;for(let i=(o=o.toLowerCase()).length-1;i>=0;i--){const r=vf(o.charAt(i));r>t&&(t=r),r<t?e-=r:e+=r}return e.toString()},vf=o=>{switch(o.toLowerCase()){case"i":return 1;case"v":return 5;case"x":return 10;case"l":return 50;case"c":return 100;case"d":return 500;case"m":return 1e3;default:return 0}},yr=o=>{let e,t="",i=o.search(/[a-zA-Z-]/)===-1?parseInt(o):parseInt(o.substring(0,o.search(/[a-zA-Z-]/)));const r=o.search(/[a-zA-Z-]/)===-1?"":o.substring(o.search(/[a-zA-Z-]/));for(const n in cs){if(e=Math.floor(i/cs[n]),e>=0)for(let s=0;s<e;s++)t+=n;i%=cs[n]}return t+r},Nt=(o,e)=>{const t=o.search(/-[a-zA-Z-]/)===-1?o:o.substring(0,o.search(/-[a-zA-Z-]/)),i=o.search(/-[a-zA-Z-]/)===-1?"":o.substring(o.search(/-[a-zA-Z-]/));return(e?e(t):t)+(i==null?void 0:i.toUpperCase())},Cl=(o,e)=>{const t=o==null?void 0:o.split("-"),i=e==null?void 0:e.split("-"),[r,...n]=t,[s,...d]=i;if(!r||s&&parseInt(r)<parseInt(s))return 1;if(!s||r&&parseInt(r)>parseInt(s))return-1;if(o&&e&&e.includes(o))return 1;for(let c=0;c<(n==null?void 0:n.length);c++)for(let p=0;c<(d==null?void 0:d.length);c++){if(n[c]>d[p])return-1;if(n[c]<d[p]||n.length>c+1&&d.length===p+1||n.length===c+1&&d.length<p+1)return 1}return 0},gf=o=>{var e;return(H(o)?(e=(t=>{const i=Me(t).indexOfArtigo(t);return i===-1||Me(t).artigos.length===i+1?[]:Me(t).artigos.filter((r,n)=>n>i)})(o))!==null&&e!==void 0?e:[]:ba(o)).filter(t=>ao(t)).length>0},bf=o=>{let e=0;const t=o.tipo;do(ao(o)||Ju(o))&&o.tipo===t&&e++,o=H(o)?Qr(o.pai,o):Se(o);while(o!==void 0);return e},yf=o=>{let e=0;const t=o.tipo;for(;o!==void 0&&!ao(o)&&!Ju(o)&&o.tipo===t;)e++,o=H(o)?Qr(o.pai,o):Se(o);return e},jn=o=>(e=>{const t=bf(e);if(ao(e))return new ar(t);const i=yf(e),r=t>0,n=gf(e);if(!r&&!n)return new ar(i);if(!r&&n){const s=new ar(0);return s.addNovoSeqOrdem(i),s}if(r&&n){const s=new ar(t);return s.addNovoSeqOrdem(i),s}return new ar(t+i)})(o).getNumeracao(Hu(o)),xf={Artigo:o=>us(o)||/^(artigo )?[uúÚ]nico$/i.test(o),Paragrafo:o=>us(o)||/^(par[aáÁ]grafo )?[uúÚ]nico$/i.test(o),Inciso:Mn,Alinea:Aa,Item:us};class ar{constructor(e){this.seq=e}addNovoSeqOrdem(e){this.seq>0?this.letras=Us(e).toUpperCase():e>1&&(this.letras=Us(e-1).toUpperCase())}getNumeracao(e){var t;return this.seq+(e&&this.letras?"-":"")+((t=this.letras)!==null&&t!==void 0?t:"")}}const wf=o=>B(o)?(e=>{var t,i,r,n,s,d,c,p,u;const a=[];return e===null&&a.push({tipo:Y.ERROR,descricao:"O dispositivo n\xE3o foi informado"}),e!==null&&e.numero!==void 0&&e.numero.trim().length===0&&a.push({tipo:Y.ERROR,descricao:"O dispositivo n\xE3o cont\xE9m numera\xE7\xE3o"}),e!==null&&((t=e.rotulo)===null||t===void 0?void 0:t.trim().length)===0&&a.push({tipo:Y.ERROR,descricao:"O dispositivo n\xE3o cont\xE9m r\xF3tulo"}),e===null||to(e)||!(!((i=e.rotulo)===null||i===void 0)&&i.endsWith(e.tipo))||e.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO&&((r=pi(e))===null||r===void 0?void 0:r.numero)==="1"&&((n=pi(e))===null||n===void 0?void 0:n.situacao.descricaoSituacao)!==L.DISPOSITIVO_ADICIONADO||a.push({tipo:Y.ERROR,descricao:"O r\xF3tulo informado n\xE3o \xE9 v\xE1lido. Numere o dispositivo"}),e!==null&&B(e)&&fe(e)&&!Ae(e)&&((s=e.rotulo)===null||s===void 0?void 0:s.endsWith("\xFAnico."))&&a.push({tipo:Y.ERROR,descricao:`Quando houver mais de um ${e.descricao}, n\xE3o pode se tratar de '${e.descricao} \xFAnico'`}),e===null||vt(e)||e.numero===void 0||((d=e.pai)===null||d===void 0?void 0:d.indexOf(e))!==0||e.numero==="1"||a.push({tipo:Y.ERROR,descricao:"\xC9 necess\xE1rio um omissis antes deste dispositivo"}),e===null||!me(e)||((c=Se(e))===null||c===void 0?void 0:c.tipo)!==D.omissis.name&&((p=Mr(e))===null||p===void 0?void 0:p.tipo)!==D.omissis.name||a.push({tipo:Y.ERROR,descricao:"N\xE3o pode haver mais de um omissis sequencialmente"}),e!==null&&e.numero!==void 0&&e.pai.indexOf(e)>0&&ga(e).filter(l=>l.numero!==void 0).filter(l=>l!==e).filter(l=>e.numero!==l.numero&&Cl(e.numero,l.numero)===1).length>0&&a.push({tipo:Y.ERROR,descricao:"O dispositivo tem n\xFAmero menor ao de algum dispositivo anterior"}),e!==null&&e.numero!==void 0&&!e.pai.isLastFilho(e)&&Xu(e).filter(l=>l!==e&&e.pai===l.pai&&l.numero!==void 0).filter(l=>Cl(l.numero,e.numero)===1).length>0&&a.push({tipo:Y.ERROR,descricao:"O dispositivo tem n\xFAmero maior do que algum dispositivo posterior"}),e!==null&&!vt(e)&&e.numero!==void 0&&ot(e).filter(l=>l.numero&&l.numero===e.numero).length>1&&a.push({tipo:Y.ERROR,descricao:"O dispositivo tem n\xFAmero igual ao de outro dispositivo"}),e!==null&&!vt(e)&&e.numero!==void 0&&e.pai.indexOf(e)>0&&oo(e)&&e.tipo!==((u=oo(e))===null||u===void 0?void 0:u.rotulo)&&!me(Se(e))&&parseInt(e.numero)!==parseInt(oo(e).numero)+1&&a.push({tipo:Y.ERROR,descricao:"\xC9 necess\xE1rio um omissis antes deste dispositivo"}),a})(o):(e=>{const t=[];return e===null&&t.push({tipo:Y.ERROR,descricao:"O dispositivo n\xE3o foi informado"}),e!==null&&e.numero&&e.numero.trim().length===0&&t.push({tipo:Y.ERROR,descricao:"O dispositivo n\xE3o cont\xE9m numera\xE7\xE3o"}),e!==null&&e.rotulo&&e.rotulo.trim().length===0&&t.push({tipo:Y.ERROR,descricao:"O dispositivo n\xE3o cont\xE9m r\xF3tulo"}),t})(o),Re=o=>ao(o)?[]:(e=>{var t,i;const r=[];if(e===null&&r.push({tipo:Y.ERROR,descricao:"O dispositivo n\xE3o foi informado"}),e!==null&&e.filhos.length>0&&e.tiposPermitidosFilhos.length===0&&r.push({tipo:Y.ERROR,descricao:`Segundo a Legisla\xE7\xE3o vigente, ${e.descricao} n\xE3o poderia possuir filhos`}),e!==null&&B(e)&&e.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO&&((t=pi(e))===null||t===void 0?void 0:t.numero)==="1"&&((i=pi(e))===null||i===void 0?void 0:i.situacao.descricaoSituacao)!==L.DISPOSITIVO_ADICIONADO&&r.push({tipo:Y.ERROR,descricao:"N\xE3o \xE9 permitido um dispositivo de altera\xE7\xE3o da norma antes do primeiro dispositivo"}),e!==null&&(to(e)||ql(e))&&r.push({tipo:Y.ERROR,descricao:"N\xE3o foi poss\xEDvel validar a natureza deste dispositivo com base na legisla\xE7\xE3o vigente"}),e===null||!e.pai||ql(e.pai)||to(e)||e.tiposPermitidosPai.includes(e.pai.tipo)||r.push({tipo:Y.ERROR,descricao:`Segundo a Legisla\xE7\xE3o vigente, ${e.descricao} somente poderia pertencer a ${e.tiposPermitidosPai.join(", ")}`}),e!==null&&!to&&e.filhos.length>0&&(e.tiposPermitidosFilhos.length===0||e.filhos.filter(n=>!e.tiposPermitidosFilhos.includes(n.tipo)).length>0)){const n=e.tiposPermitidosFilhos.length===0?"n\xE3o poderia possuir filhos":`somente poderia possuir ${e.tiposPermitidosFilhos.join(", ")}`;r.push({tipo:Y.ERROR,descricao:`Segundo a Legisla\xE7\xE3o vigente, ${e.descricao} ${n}`})}return r})(o).concat(uf(o),wf(o),(e=>{const t=[];return e.alteracoes&&e.alteracoes.base?(ld(e.alteracoes.base)||t.push({tipo:Y.ERROR,descricao:"N\xE3o foi informada uma norma alterada v\xE1lida"}),t):[]})(o));class $r{constructor(e){this.descricaoSituacao=L.DISPOSITIVO_SUPRIMIDO,this.dispositivoOriginal=e}getAcoesPermitidas(e,t){const i=[];return(st(e)?e.pai.pai:e.pai).situacao.descricaoSituacao!==L.DISPOSITIVO_SUPRIMIDO&&(i.push(ha),i.push(...t.filter(r=>r.descricao.startsWith("Adicionar")&&e.tipo===r.tipo))),i}}const xr=o=>qe(o)?"cpt_alt1":o.tagId?o.tagId+(ve(o)?"":me(o)?ga(o).length+1:o.numero?(H(o)||fe(o))&&o.numero==="1"&&Ae(o)?"1u":(e=>{const t=e==null?void 0:e.split("-"),[i,...r]=t,n=r.map(s=>ud(s));return(n==null?void 0:n.length)>0?i+"-"+(n==null?void 0:n.join("-").toUpperCase()):i})(o.numero):`[urn:${o.uuid}]`):void 0,On=(o,e=[])=>{if(qe(o)&&o.pai===void 0)return;const t=xr(o);if(t&&e.unshift(t),H(o)){if(B(o)){const i=Me(o);On(i,e)}}else On(o.pai,e)},Co=o=>{const e=[];return On(o,e),e.join("_")},Fs=o=>{var e,t;return((t=(e=o.hierarquia)===null||e===void 0?void 0:e.pai)===null||t===void 0?void 0:t.uuidAlteracao)!==void 0||o.uuidAlteracao!==void 0},pd=(o,e=0)=>(o==null?void 0:o.pai)===void 0||pe(o)?e:H(o)?B(o)?++e:e:(e=vt(o==null?void 0:o.pai)?e+2:++e,H(o==null?void 0:o.pai)?e:pd(o.pai,e)),Af=o=>{var e;const t=o.pai?ve(o.pai)?o.pai.pai:o.pai:void 0;return{tipo:t==null?void 0:t.tipo,uuid:t==null?void 0:t.uuid,uuidAlteracao:t&&B(o)?(e=Me(o).pai)===null||e===void 0?void 0:e.uuid:void 0}},Z=(o,e=!0)=>{var t,i,r;const n=o.pai;return{tipo:o.tipo,nivel:pd(o),agrupador:pe(o),hierarquia:{pai:n?Af(o):void 0,posicao:n?n.indexOf(o):void 0,numero:o.numero},editavel:!(qe(o)||o.situacao instanceof $r),sendoEditado:!1,uuid:o.uuid,lexmlId:o.id&&o.numero&&xr(o),numero:o.numero,rotulo:(t=o.rotulo)!==null&&t!==void 0?t:"",conteudo:{texto:o.texto},norma:(i=o.alteracoes)===null||i===void 0?void 0:i.base,existeNaNormaAlterada:o.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO?o.situacao.existeNaNormaAlterada:void 0,index:0,acoesPossiveis:e?o.getAcoesPossiveis(o):[],descricaoSituacao:(r=o.situacao)===null||r===void 0?void 0:r.descricaoSituacao,mensagens:ao(o)?[]:o.mensagens}},Ur=(o,e)=>{e.filhos!==void 0&&e.filhos.forEach(t=>{var i;const r=Z(t);H(t)&&(r.conteudo.texto=t.caput.texto),o.push(r),H(t)&&t.hasAlteracao()&&((i=t.alteracoes)===null||i===void 0||i.filhos.forEach(n=>{o.push(Z(n)),Ur(o,n)})),Ur(o,t)})},mt=o=>{var e;const t=[];return t.push(Z(o,!0)),H(o)&&o.hasAlteracao()&&H(o)&&o.hasAlteracao()&&((e=o.alteracoes)===null||e===void 0||e.filhos.forEach(i=>{t.push(Z(i)),Ur(t,i)})),Ur(t,o),t},ke=(o,e,t=!1)=>{var i;const r=((s,d)=>{var c,p;return!Fs(d)||Le(s)?s:(p=(c=ke(s,{uuid:d.hierarquia?d.hierarquia.pai.uuidAlteracao:d.uuidAlteracao}))===null||c===void 0?void 0:c.alteracoes)!==null&&p!==void 0?p:s})(o,e);if(!t&&Fs(e)){const s=r.pai?r.pai:ke(r,{uuid:e.hierarquia?e.hierarquia.pai.uuidAlteracao:e.uuidAlteracao});return s!=null&&s.alteracoes?(i=s.alteracoes)===null||i===void 0?void 0:i.filhos.flatMap(d=>{const c=[];return Oo(d,c),c}).filter(d=>d.uuid===e.uuid)[0]:void 0}if((e==null?void 0:e.tipo)===D.artigo.tipo){const s=r.filhos.find(d=>d.uuid===e.uuid);if(s)return s}const n=(e==null?void 0:e.tipo)===D.articulacao.tipo||(e==null?void 0:e.uuid)===void 0?r:hn(r,e.uuid);if(n!==null)return n},_i=(o,e,t)=>{var i;const r=Re(e);if(r.length>0||e.mensagens&&((i=e.mensagens)===null||i===void 0?void 0:i.length)>0){e.mensagens=r;const n=Z(e,t);n.mensagens=Re(e),o.push(n)}},Zr=(o,e=!0)=>{const t=[];if(!o)return[];if(B(o)&&Ue(o)&&o.filhos.filter(i=>i.tipo===D.omissis.tipo).length>0&&(_i(t,o),o.filhos.filter(i=>i.tipo===D.omissis.tipo).forEach(i=>_i(t,i))),Ri(o)||to(o)){const i=st(o)?o.pai.pai:o.pai;_i(t,i),pe(i)&&_i(t,st(o)?o.pai.pai:o.pai),ot(o).forEach(r=>{(e||r!==o)&&_i(t,r,!0)})}else!e||qe(o)||pe(o)||_i(t,o,!0);return t},fi=o=>(H(o)||fe(o))&&ot(o).length<=2?ot(o).filter(e=>o.uuid!==e.uuid):Xu(o,!0).filter(e=>e.tipo===o.tipo),hd=o=>fi(o).map(e=>(e.mensagens=Re(e),Z(e)));var j;(function(o){o.ArticulacaoAtualizada="ArticulacaoAtualizada",o.ComandoEmendaGerado="ComandoEmendaGerado",o.DocumentoCarregado="DocumentoCarregado",o.InformarNorma="InformarNorma",o.ElementoModificado="ElementoModificado",o.ElementoIncluido="ElementoIncluido",o.ElementoRemovido="ElementoRemovido",o.ElementoRenumerado="ElementoRenumerado",o.ElementoRestaurado="ElementoRestaurado",o.ElementoSuprimido="ElementoSuprimido",o.ElementoValidado="ElementoValidado",o.ElementoSelecionado="ElementoSelecionado",o.ElementoMarcado="ElementoMarcado",o.SituacaoElementoModificada="SituacaoElementoModificada"})(j||(j={}));const Ef=(o,e)=>((t,i)=>{const r=mt(t);return{articulacao:t,modo:i,past:[],present:[],future:[],ui:{events:[{stateType:j.DocumentoCarregado,elementos:r}]}}})(e.articulacao,e.classificacao),Ea=function(o=0){return{next:()=>++o}}();function lt(o){return class extends o{constructor(){super(...arguments),this.mensagens=[]}}}class fd{constructor(e){this.tipoAcao=e,this.isDispositivoAlteracao=!0,this.descricao=e==="INICIAR_BLOCO"?"Inserir bloco de altera\xE7\xE3o":"Finalizar bloco de altera\xE7\xE3o"}execute(e,t,i,r=!1){return{type:"ADICIONAR_ELEMENTO",subType:this.tipoAcao,atual:e,novo:{tipo:i,isDispositivoAlteracao:this.isDispositivoAlteracao,conteudo:{texto:t}},hasDesmembramento:r}}}const jo=new fd("INICIAR_BLOCO"),_f=new fd("FINALIZAR_BLOCO");function ct(o){return class extends o{get alteracoes(){}hasAlteracao(){return!1}}}var qn,ft;function gt(o){return class extends o{constructor(){super(...arguments),this.tipoConteudo=qn.ConteudoTexto,this.texto=""}}}function $o(o){return class extends o{addFilho(e,t){if(t&&this.filhos.indexOf(t)>=0){const i=this.filhos.indexOf(t)+1;this.isLastFilho(t)?this.filhos.push(e):this.filhos.splice(i,0,e)}else this.filhos.push(e);H(e)&&Me(e).addArtigo(e,t)}addFilhoOnPosition(e,t){var i;if(this.filhos.splice(t,0,e),H(e)){const r=(i=Se(e))!==null&&i!==void 0?i:Qr(e.pai.pai,e.pai),n=Me(e),s=r?n.indexOfArtigo(r)+1:0;n.addArtigoOnPosition(e,s)}}hasArtigos(){return this.filhos.filter(e=>H(e)).length>0}isLastFilho(e){return this.filhos.indexOf(e)===this.filhos.length-1}get filhos(){var e;return this._filhos=(e=this._filhos)!==null&&e!==void 0?e:[],this._filhos}indexOf(e){return this.filhos.indexOf(e)}removeFilho(e){this._filhos=this.filhos.filter(t=>t.uuid!==e.uuid),H(e)&&Me(e).removeArtigo(e)}renumeraFilhos(){var e;this.filhos.filter(t=>!H(t)).forEach(t=>{t.numero=jn(t),t.createRotulo(t),t.id=Co(t)}),(e=Me(this.filhos[0]))===null||e===void 0||e.renumeraArtigos()}}}function gi(o){return class extends o{addFilho(e,t){if(t){const i=this.filhos.indexOf(t)+1;this.isLastFilho(t)?this.filhos.push(e):this.filhos.splice(i,0,e)}else this.filhos.push(e)}addFilhoOnPosition(e,t){this.filhos.splice(t,0,e)}hasArtigos(){return this.filhos.filter(e=>H(e)).length>0}isLastFilho(e){return this.filhos.indexOf(e)===this.filhos.length-1}get filhos(){var e;return this._filhos=(e=this._filhos)!==null&&e!==void 0?e:[],this._filhos}indexOf(e){return this.filhos.indexOf(e)}removeFilho(e){this._filhos=this.filhos.filter(t=>t.uuid!==e.uuid)}renumeraFilhos(){this.filhos.forEach(e=>{B(e)&&Yu(e)||e.situacao.descricaoSituacao===L.DISPOSITIVO_NOVO||e.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO?(e.numero=jn(e),e.createRotulo(e),e.id=Co(e)):e.createRotulo(e)})}}}function Uo(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoAgrupadorLcp95",this.informouAgrupadorUnico=!1}getNomeAgrupadorUnico(e){return`${e.descricao} \xFAnic${e.artigoDefinido}`.toLocaleUpperCase()}normalizaNumeracao(e){const t=e.trim().split(/\s+/);if(t.length!==2)return"";const i=t[1].split("-");return Mn(i[0])?(i[0]=dd(i[0]),i.join("-")):""}createNumeroFromRotulo(e){if(e)if(this.informouAgrupadorUnico=/.*[uú]nic[ao]/i.test(e),this.informouAgrupadorUnico)this.numero="1";else{const t=this.normalizaNumeracao(e);this.numero=this.informouAgrupadorUnico?"1":No(t)?t:void 0}}createRotulo(e){var t;const i=e.descricao===void 0?(t=e.name)!==null&&t!==void 0?t:"":e.descricao.toLocaleUpperCase();this.numero===void 0?this.rotulo=vt(e)?"\u201C"+e.tipo:e.tipo:this.numero===void 0||No(this.numero)?e.isDispositivoAlteracao&&vt(e)?this.rotulo="\u201C"+(this.informouAgrupadorUnico?this.getNomeAgrupadorUnico(e):i+" "+Nt(this.numero,yr)):ot(e).length===1?this.rotulo=this.getNomeAgrupadorUnico(e):this.rotulo=i+" "+Nt(this.numero,yr):this.rotulo=i+" "+this.numero}getNumeracaoParaComandoEmenda(){const e=new Te,t=this.numero?Nt(this.numero,yr):"???";e.append(this.descricao+" "+t);const i=this.pai;return i&&!si(i)&&(e.append(i.pronomePossessivoSingular),e.append(" "),e.append(i.getNumeracaoParaComandoEmenda())),e.toString()}getNumeracaoComRotuloParaComandoEmenda(){return this.getNumeracaoParaComandoEmenda()}}}(function(o){o.ConteudoTexto="Conte\xFAdo de Texto"})(qn||(qn={})),function(o){o.EMENDA="emenda",o.EMENDA_ARTIGO_ONDE_COUBER="emendaArtigoOndeCouber",o.NORMA="norma",o.PROJETO="projeto"}(ft||(ft={}));const te=[];te.push(pa),te.push(Ro),te.push(Lo),te.push(Ut),te.push(jo),te.push(_f),te.push(Iu),te.push(Su),te.push(ku),te.push(Pu),te.push(Ms),te.push(Cr),te.push(Tr),te.push(Nu),te.push(Cu),te.push(of),te.push(rf),te.push(nf),te.push(Dr),te.push($u),te.push(Rr),te.push(Tu),te.push(Du),te.push(Ru),te.push(Lu),te.push(Mu),te.push(ju),te.push(Uu),te.push(Fu),te.push(zu),te.push(Vt),te.push(ha),te.push(qu),te.push(Vu),te.push(Kh),te.push(Gh),te.push(Qh),te.push(Ls),te.push(Wh),te.push(Zh),te.push(uu),te.push(du),te.push(pu),te.push(hu),te.push(fu),te.push(mu),te.push(gu),te.push(bu),te.push(wu),te.push(Au);const Wo=[];Wo.push(ua),Wo.push(cu),Wo.push(da),Wo.push(Tn),Wo.push(vu),Wo.push(xu);const Of=o=>te.includes(o),_a=[...te,...Wo,Bu],zi=o=>_a.filter(e=>e instanceof uo&&e.tipo===o)[0];function Fo(o){return class extends o{getAcoesPossiveis(e){var t,i,r,n;const s=[];if(!pe(e))return[];if(ga(e).length===0&&ba(e).length>0&&e.filhos.filter(d=>pe(d)).length>0||s.push(Vt),e.pai&&qe(e.pai)&&pe(e.pai)&&oo(e)===void 0){const d=(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.indexOf(e.pai.tipo);(i=e.tiposPermitidosPai)===null||i===void 0||i.filter((c,p)=>p>d).forEach(c=>s.push(zi(c)))}if(e.pai&&!qe(e.pai)&&pe(e.pai)&&e.pai.indexOf(e)===0){const d=(r=e.tiposPermitidosPai)===null||r===void 0?void 0:r.indexOf(e.pai.tipo);(n=e.tiposPermitidosPai)===null||n===void 0||n.filter((c,p)=>p>d).forEach(c=>s.push(zi(c)))}return e.pai&&e.pai.indexOf(e)>0&&pe(e.pai)&&!qe(e.pai)&&s.push(zi(e.pai.tipo)),B(e)&&s.push(Ut),e.getAcoesPermitidas(e,s)}getAcaoPossivelTab(e){}getAcaoPossivelShiftTab(e){}}}const Fr=o=>{var e,t;return B(o.pai)&&o.filhos.length===0&&o.tipo!==D.omissis.name&&((e=Se(o))===null||e===void 0?void 0:e.tipo)!==D.omissis.name&&((t=Mr(o))===null||t===void 0?void 0:t.tipo)!==D.omissis.name};class Oa{constructor(){this.descricaoSituacao=L.DISPOSITIVO_NOVO}getAcoesPermitidas(e,t){return[...new Set(t)].filter(i=>i!==void 0).filter(i=>i.descricao!=="Adicionar"&&i.descricao!=="Atualizar dispositivo").sort((i,r)=>i.descricao.localeCompare(r.descricao))}}function it(o){return class extends o{constructor(){super(...arguments),this.situacao=new Oa}getAcoesPermitidas(e,t){var i;return(i=this.situacao)===null||i===void 0?void 0:i.getAcoesPermitidas(e,t)}}}class rt{constructor(e){this.tipo=D[e].tipo,this.tagId=D[e].tagId,this.name=D[e].name,this.descricao=D[e].descricao,this.descricaoPlural=D[e].descricaoPlural,this.tiposPermitidosPai=D[e].tiposPermitidosPai,this.tiposPermitidosFilhos=D[e].tiposPermitidosFilhos,this.tipoProvavelFilho=D[e].tipoProvavelFilho,this.INDICADOR_SEQUENCIA=D[e].INDICADOR_SEQUENCIA,this.INDICADOR_FIM_SEQUENCIA=D[e].INDICADOR_FIM_SEQUENCIA,this.INDICADOR_DESDOBRAMENTO=D[e].INDICADOR_DESDOBRAMENTO}}const qa=(o,e)=>{e.tipoProvavelFilho!==void 0&&o.filhos.forEach((t,i)=>{var r;const n=de(H(e)&&D.inciso.name===e.tipoProvavelFilho?e.caput:e,e.tipoProvavelFilho);n.texto=(r=t.texto)!==null&&r!==void 0?r:"",n.situacao=t.situacao,n.mensagens=Re(t),t.filhos&&qa(t,n),i===o.filhos.length-1&&e.renumeraFilhos()})},md=(o,e)=>{o.tipo===e.tipo&&o.filhos.forEach(t=>{var i;const r=de(H(e)&&ve(t.pai)?e.caput:e,t.tipo);t.rotulo?r.rotulo=t.rotulo:r.createRotulo(r),r.texto=(i=t.texto)!==null&&i!==void 0?i:"",r.situacao=t.situacao,o.removeFilho(t),r.mensagens=Re(t),t.filhos&&(o.tipo===e.tipo?md(t,r):qa(t,r)),o.filhos.length===0&&e.renumeraFilhos()})},qf=it(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return ni(e)?(t.push(Vt),B(e)&&e.situacao.descricaoSituacao!==L.DISPOSITIVO_ADICIONADO&&e.numero==="1"||t.push(pu),t.push(hu),vi(e)!==void 0&&t.push(Ro),mi(e)!==void 0&&t.push(Lo),B(e)&&t.push(Ut),B(e)&&kt(e)&&t.push(jo),(e.texto.length===0||ei(e))&&t.push(da),(e.texto.length===0||at(e))&&t.push(vu),(Ae(e)||ze(e))&&t.push(fe(e.pai.pai)?Tr:Cr),Lt(e)&&(Se(e)===void 0||me(Se(e)))||t.push(Nu),Fr(e)&&t.push(Iu),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){var t;if(ni(e))return(t=e.tiposPermitidosFilhos)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ie).filter(n=>n instanceof ie&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}getAcaoPossivelShiftTab(e){var t;if(ni(e))return Ae(e)||ze(e)?fe(e.pai.pai)?Tr:Cr:(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ie).filter(n=>n instanceof ie&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(lt(or(ct(gt(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoAlineaLcp95",this.SUFIXO=")"}normalizaNumeracao(e){const t=/[a-z]+(-[a-zA-Z]+)*/.exec(e.trim());return t?t[0]:qo(e).trim().replace(/\)$/,"").trim()}createNumeroFromRotulo(e){this.numero=Nt(this.normalizaNumeracao(e),cd(e)?null:ud)}createRotulo(){this.rotulo=this.numero===void 0?D.alinea.name:Nt(this.numero,$s)+this.SUFIXO}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerada]":"\u201C"+Nt(this.numero,$s)+"\u201D"}getNumeracaoComRotuloParaComandoEmenda(){var e,t;return this.numero===void 0?((e=D.alinea.descricao)===null||e===void 0?void 0:e.toLocaleLowerCase())+" [ainda n\xE3o numerada]":((t=D.alinea.descricao)===null||t===void 0?void 0:t.toLocaleLowerCase())+" "+this.getNumeracaoParaComandoEmenda()}}}(gi(rt)))))))),If=it(function(o){return class extends o{getAcoesPossiveis(e){var t,i,r,n,s,d;const c=[];if(!H(e))return[];if(c.push(ua),c.push(Vt),vi(e)!==void 0&&c.push(Ro),mi(e)!==void 0&&c.push(Lo),vt(e)&&B(e)&&e.situacao.descricaoSituacao!==L.DISPOSITIVO_ADICIONADO&&e.numero==="1"||c.push(uu),c.push(du),B(e)&&c.push(Ut),e.alteracoes&&c.push(pa),e.hasAlteracao()||B(e)||e.texto.length!==0&&at(e)||c.push(cu),e.hasAlteracao()||B(e)||e.texto.length!==0&&!at(e)||c.push(Tn),e.hasAlteracao()||B(e)||Ue(e)||c.push(jo),e.pai.indexOf(e)>0&&Se(e)!==void 0&&!me(Se(e))&&c.push(Cu),e.pai&&!B(e)&&qe(e.pai)&&e.pai.filhos.filter(p=>pe(p)).length===0&&c.push(Ls),e.pai&&B(e)&&pe(e.pai)&&c.push(Ls),!B(e)&&e.pai&&(p=>{const u=p.pai.indexOf(p);return p.pai.filhos.filter((a,l)=>l>u&&pe(a)).length>0})(e)&&c.push(zi(Il(e).tipo)),!B(e)&&pe(e.pai)){const p=(i=(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.indexOf(e.pai.tipo))!==null&&i!==void 0?i:0;(r=e.tiposPermitidosPai)===null||r===void 0||r.filter(()=>p>0).filter((u,a)=>e.pai.indexOf(e)>0?a>=p:a>p).forEach(u=>c.push(zi(u)))}if(!B(e)&&pe(e.pai)&&!qe(e.pai)&&e.pai.indexOf(e)>0&&(p=>{var u;return((u=p.pai)===null||u===void 0?void 0:u.pai)!==void 0&&Lr(p.pai.pai,p.pai,[]).length>0})(e)){const p=(s=(n=e.tiposPermitidosPai)===null||n===void 0?void 0:n.indexOf(e.pai.tipo))!==null&&s!==void 0?s:0,u=Lr(e.pai.pai,e.pai,[]).reduce((a,l)=>a.includes(l.tipo)&&Il(l)!==void 0?a:a.concat(l.tipo),[]);(d=e.tiposPermitidosPai)===null||d===void 0||d.filter(()=>p>0).filter(a=>u.includes(a)).forEach(a=>c.push(zi(a)))}return e.getAcoesPermitidas(e,c)}getAcaoPossivelTab(e){var t;if(H(e))return(t=e.tiposPermitidosFilhos)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ie).filter(n=>n instanceof ie&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}getAcaoPossivelShiftTab(e){var t;if(e.tiposPermitidosFilhos)return st(e)&&(Ae(e)||ze(e))?Rr:_o(e)&&(Ae(e)||ze(e))?Dr:ni(e)&&(Ae(e)||ze(e))?fe(e.pai.pai)?Tr:Cr:(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ie).filter(n=>n instanceof ie&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(lt(ho(function(o){return class extends o{hasAlteracao(){var e;return!!this.alteracoes&&((e=this.alteracoes.filhos)===null||e===void 0?void 0:e.length)>0}}}(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoArtigoLcp95",this.PREFIXO="Art. ",this.SUFIXO="\xBA",this.ARTIGO_UNICO="Artigo \xFAnico.",this.informouArtigoUnico=!1}normalizaNumeracao(e){return e.replace(/["”“]/g,"").replace(/\./g,"").replace(/artigo [uú]nico/i,"1").replace(/(art[.]{0,1})/i,"").replace(/[º]/i,"").trim()}createNumeroFromRotulo(e){const t=this.normalizaNumeracao(e);this.informouArtigoUnico=/.*[uú]nico/i.test(e),this.numero=this.informouArtigoUnico?"1":No(t)?t:void 0}createRotulo(e){e===void 0?this.rotulo=D.artigo.descricao:e.situacao.descricaoSituacao!==L.DISPOSITIVO_ADICIONADO||e.situacao.tipoEmenda!==ft.EMENDA_ARTIGO_ONDE_COUBER||B(e)?this.numero===void 0?this.rotulo=vt(e)?"\u201C"+e.tipo:e.tipo:this.numero===void 0||No(this.numero)?vt(e)?this.rotulo="\u201C"+(this.informouArtigoUnico?this.ARTIGO_UNICO:this.PREFIXO+this.getNumeroAndSufixoNumeracao()):Me(e).artigos.length===1?this.rotulo=this.ARTIGO_UNICO:this.rotulo=this.PREFIXO+this.numero===void 0?void 0:this.PREFIXO+this.getNumeroAndSufixoNumeracao():this.rotulo=this.PREFIXO+this.numero+this.SUFIXO:this.rotulo="Art."}getNumeroAndSufixoNumeracao(e=!1){var t;const i=(t=this.numero)===null||t===void 0?void 0:t.split("-"),[r,...n]=i,s=parseInt(r!=null?r:"1",10)<10;return(s?r+this.SUFIXO:r)+(n.length>0?"-"+(n==null?void 0:n.map($s).join("-").toUpperCase()):"")+(e||s&&!n.length?"":".")}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerado]":this.informouArtigoUnico?"artigo \xFAnico":this.getNumeroAndSufixoNumeracao(!0)}getNumeracaoComRotuloParaComandoEmenda(){var e;return this.numero===void 0?((e=D.artigo.descricao)===null||e===void 0?void 0:e.toLowerCase())+" [ainda n\xE3o numerado]":this.informouArtigoUnico?"artigo \xFAnico":"art. "+this.getNumeroAndSufixoNumeracao(!0)}}}(function(o){return class extends o{get filhos(){const e=this.getIncisosCaput(),t=this.paragrafos;return e.concat(t)}getIncisosCaput(){var e,t;return(t=(e=this.caput)===null||e===void 0?void 0:e.filhos)!==null&&t!==void 0?t:[]}get paragrafos(){var e;return this._paragrafos=(e=this._paragrafos)!==null&&e!==void 0?e:[],this._paragrafos}addFilhoOnPosition(e,t){Ot(e)?this.caput.addFilhoOnPosition(e,t):this.paragrafos.splice(t-this.getIncisosCaput().length,0,e)}addFilho(e,t){ve(e)?this.caput=e:Ot(e)?this.addIncisoCaput(e,t):this.addParagrafo(e,t)}removeFilho(e){var t;Ot(e)?(t=this.caput)===null||t===void 0||t.removeFilho(e):this.removeParagrafo(e)}addIncisoCaput(e,t){this.caput.addFilho(e,t)}addParagrafo(e,t){if(t){const i=this.paragrafos.indexOf(t)+1;this.isLastFilho(t)?this.paragrafos.push(e):this.paragrafos.splice(i,0,e)}else this.paragrafos.push(e)}removeParagrafo(e){var t;this._paragrafos=(t=this._paragrafos)===null||t===void 0?void 0:t.filter(i=>i.uuid!==e.uuid?i:i.pai=void 0)}isLastFilho(e){return this.paragrafos.indexOf(e)===this.paragrafos.length-1}indexOf(e){return Ot(e)?this.caput.indexOf(e):this.filhos.indexOf(e)}renumeraIncisos(){var e;(e=this.caput)===null||e===void 0||e.renumeraFilhos()}renumeraParagrafos(){this.paragrafos.forEach(e=>{B(e)&&Yu(e)||e.situacao.descricaoSituacao===L.DISPOSITIVO_NOVO||e.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO?(e.numero=jn(e),e.createRotulo(e),e.id=Co(e)):e.createRotulo(e)})}isParagrafoUnico(){return this.paragrafos.length===1}renumeraFilhos(){this.renumeraIncisos(),this.renumeraParagrafos()}}}(class extends rt{constructor(){super("artigo")}get texto(){var o,e;return(e=(o=this.caput)===null||o===void 0?void 0:o.texto)!==null&&e!==void 0?e:""}set texto(o){this.caput.texto=o}}))))))),Sf=it(function(o){return class extends o{getAcoesPossiveis(e){return[]}getAcaoPossivelTab(e){}getAcaoPossivelShiftTab(e){}}}(lt(ho(ct(gt(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoIndisponivel"}createRotulo(){this.rotulo=void 0}createNumeroFromRotulo(){}getNumeracaoParaComandoEmenda(){return""}getNumeracaoComRotuloParaComandoEmenda(){return"caput"}}}(gi(rt)))))))),kf=it(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return to(e)?(t.push(Vt),B(e)&&kt(e)&&t.push(jo),(fe(e.pai)||ve(e.pai)||Ot(e.pai)||ni(e.pai))&&e.pai.tipoProvavelFilho.length>0&&t.push(_a.filter(i=>i instanceof ie&&i.nomeAcao==="transformarDispositivoGenericoEm"+e.pai.tipoProvavelFilho)[0]),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){}getAcaoPossivelShiftTab(e){}}}(lt(Ln(ct(gt(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoDispositivoGenericoLcp95",this.SUFIXO=" -"}createNumeroFromRotulo(){}createRotulo(){this.rotulo=this.numero===void 0?"dg":this.numero+this.SUFIXO}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"dg":this.numero}getNumeracaoComRotuloParaComandoEmenda(){return this.getNumeracaoParaComandoEmenda()}}}(gi(rt)))))))),Pf=it(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return Ot(e)?(t.push(Vt),B(e)&&e.situacao.descricaoSituacao!==L.DISPOSITIVO_ADICIONADO&&e.numero==="1"||t.push(fu),t.push(mu),vi(e)!==void 0&&t.push(Ro),mi(e)!==void 0&&t.push(Lo),B(e)&&t.push(Ut),B(e)&&kt(e)&&t.push(jo),at(e)&&t.push(da),ei(e)&&t.push(Tn),An(e)&&ze(e)&&t.push(xu),!st(e)||Lt(e)&&(Se(e)===void 0||me(Se(e)))||t.push(El),st(e)&&(Ae(e)||ze(e))&&t.push(Rr),st(e)&&Fr(e)&&t.push(Su),_o(e)&&(Ae(e)||Lt(e))&&t.push(Ms),_o(e)&&(!Lt(e)||Se(e)!==void 0&&me(Se(e)))&&t.push(_l),_o(e)&&Fr(e)&&t.push(Ms),_o(e)&&(Ae(e)||ze(e))&&t.push(Dr),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){var t;if(Ot(e))return!st(e)||Ae(e)&&Lt(e)?_o(e)&&(Ae(e)||ze(e))?_l:(t=e.tiposPermitidosFilhos)===null||t===void 0?void 0:t.map(i=>{const r=Ot(e)?e.pai.tipo:"",n=i.endsWith(D.inciso.name)?!fe(e)||Ae(e)&&Lt(e)?"IncisoCaput":"IncisoParagrafo":i,s="transformar"+e.tipo+r+"Em"+n;return e.getAcoesPossiveis(e).filter(d=>d instanceof ie).filter(d=>d instanceof ie&&d.nomeAcao&&s&&d.nomeAcao===s)[0]})[0]:El}getAcaoPossivelShiftTab(e){var t;if(Ot(e))return st(e)&&(Ae(e)||ze(e))?Rr:_o(e)&&(Ae(e)||ze(e))?Dr:(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ie).filter(n=>n instanceof ie&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(lt(ho(ct(gt(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoIncisoLcp95",this.SUFIXO=" \u2013"}normalizaNumeracao(e){const t=/[CDILMVX]+(-[a-zA-Z]+)*/.exec(e);return t?t[0]:qo(e).trim().replace(/-$/,"").trim()}createNumeroFromRotulo(e){const t=Nt(this.normalizaNumeracao(e),cd(e)?null:dd);this.numero=No(t)?t:void 0}createRotulo(){if(this.numero){const e=this.numero.search(/[a-zA-Z-]/)===-1?parseInt(this.numero):parseInt(this.numero.substring(0,this.numero.search(/[a-zA-Z-]/))),t=this.numero.search(/[a-zA-Z-]/)===-1?"":this.numero.substring(this.numero.search(/[a-zA-Z-]/));this.rotulo=(e===0?e+t:Nt(this.numero,yr))+this.SUFIXO}else this.rotulo=D.inciso.name}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerado]":Nt(this.numero,yr)}getNumeracaoComRotuloParaComandoEmenda(){var e,t;return this.numero===void 0?((e=D.inciso.descricao)===null||e===void 0?void 0:e.toLocaleLowerCase())+" [ainda n\xE3o numerado]":((t=D.inciso.descricao)===null||t===void 0?void 0:t.toLocaleLowerCase())+" "+this.getNumeracaoParaComandoEmenda()}}}(gi(rt)))))))),Nf=it(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return Ol(e)?(t.push(Vt),B(e)&&e.situacao.descricaoSituacao!==L.DISPOSITIVO_ADICIONADO&&e.numero==="1"||t.push(gu),t.push(bu),vi(e)!==void 0&&t.push(Ro),mi(e)!==void 0&&t.push(Lo),B(e)&&t.push(Ut),B(e)&&kt(e)&&t.push(jo),(Ae(e)||ze(e))&&t.push($u),Fr(e)&&t.push(ku),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){var t;if(Ol)return(t=e.tiposPermitidosFilhos)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ie).filter(n=>n instanceof ie&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}getAcaoPossivelShiftTab(e){var t;if(e.tiposPermitidosFilhos)return(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ie).filter(n=>n instanceof ie&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(lt(ho(ct(gt(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoItemLcp95",this.SUFIXO="."}normalizaNumeracao(e){const t=/\d+(-[a-zA-Z]+)*/.exec(e.trim());return t?t[0]:qo(e).trim().replace(/\.$/,"").trim()}createNumeroFromRotulo(e){const t=this.normalizaNumeracao(e);this.numero=No(t)?t:void 0}createRotulo(){this.rotulo=this.numero===void 0?D.item.name:Nt(this.numero)+this.SUFIXO}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerado]":Nt(this.numero)}getNumeracaoComRotuloParaComandoEmenda(){var e,t;return this.numero===void 0?((e=D.item.descricao)===null||e===void 0?void 0:e.toLocaleLowerCase())+" [ainda n\xE3o numerado]":((t=D.item.descricao)===null||t===void 0?void 0:t.toLocaleLowerCase())+" "+this.getNumeracaoParaComandoEmenda()}}}(gi(rt)))))))),Cf=it(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return fe(e)?(t.push(Vt),B(e)&&e.situacao.descricaoSituacao!==L.DISPOSITIVO_ADICIONADO&&e.numero==="1"||t.push(wu),t.push(Au),vi(e)!==void 0&&t.push(Ro),mi(e)!==void 0&&t.push(Lo),B(e)&&t.push(Ut),e.texto&&at(e)&&t.push(Tn),!Lt(e)&&!Ae(e)||Se(e)&&me(Se(e))||t.push(zu),!Lt(e)&&fe(Se(e))&&t.push(Fu),(ze(e)||Ae(e))&&t.push(Uu),Fr(e)&&t.push(Pu),B(e)&&kt(e)&&t.push(jo),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){var t;if(fe(e))return(t=e.tiposPermitidosFilhos)===null||t===void 0?void 0:t.map(i=>{const r=i.endsWith(D.inciso.name)?fe(e)&&!Ae(e)&&!Lt(e)&&fe(Se(e))?"IncisoParagrafo":"IncisoCaput":i,n="transformar"+e.tipo+"Em"+r;return e.getAcoesPossiveis(e).filter(s=>s instanceof ie).filter(s=>s instanceof ie&&s.nomeAcao&&n&&s.nomeAcao===n)[0]})[0]}getAcaoPossivelShiftTab(e){var t;if(e.tiposPermitidosFilhos)return st(e)&&(Ae(e)||ze(e))?Rr:_o(e)&&(Ae(e)||ze(e))?Dr:ni(e)&&(Ae(e)||ze(e))?fe(e.pai.pai)?Tr:Cr:(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ie).filter(n=>n instanceof ie&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(lt(ho(ct(gt(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoParagrafoLcp95",this.PREFIXO="\xA7 ",this.SUFIXO="\xBA",this.PARAGRAFO_UNICO="Par\xE1grafo \xFAnico.",this.informouParagrafoUnico=!1}normalizaNumeracao(e){return e.trim().replace(/\./g,"").replace(/§/i,"").replace(/par[aá]grafo [uú]nico/i,"1").replace(/[º]/i,"").trim()}createNumeroFromRotulo(e){const t=this.normalizaNumeracao(e);this.informouParagrafoUnico=/.*[uú]nico/i.test(e),this.numero=this.informouParagrafoUnico?"1":No(t)?t:void 0}createRotulo(e){var t;this.numero!==void 0&&e?No(this.numero)?e.isDispositivoAlteracao?this.rotulo=this.informouParagrafoUnico?this.PARAGRAFO_UNICO:this.PREFIXO+this.getNumeroAndSufixoNumeracao():((t=e.pai)===null||t===void 0?void 0:t.filhos.filter(i=>fe(i)).length)===1?this.rotulo=this.PARAGRAFO_UNICO:this.rotulo=this.PREFIXO+this.numero===void 0?void 0:this.PREFIXO+this.getNumeroAndSufixoNumeracao():this.rotulo=this.getNumeroAndSufixoNumeracao():this.rotulo=D.paragrafo.name}getNumeroAndSufixoNumeracao(e=!1){if(!this.numero)return"";const t=this.numero.search(/[a-zA-Z-]/)===-1?parseInt(this.numero):parseInt(this.numero.substring(0,this.numero.search(/[a-zA-Z-]/))),i=this.numero.search(/[a-zA-Z-]/)===-1?"":this.numero.substring(this.numero.search(/[a-zA-Z-]/)),r=t<10;return(r?t+this.SUFIXO:t)+((i==null?void 0:i.length)>0?i:"")+(e||r&&!(i!=null&&i.length)?"":".")}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerado]":this.isParagrafoUnico()?"par\xE1grafo \xFAnico":this.getNumeroAndSufixoNumeracao(!0)}getNumeracaoComRotuloParaComandoEmenda(){var e;return this.numero===void 0?((e=D.paragrafo.descricao)===null||e===void 0?void 0:e.toLocaleLowerCase())+" [ainda n\xE3o numerado]":this.isParagrafoUnico()?"par\xE1grafo \xFAnico":"\xA7 "+this.getNumeroAndSufixoNumeracao(!0)}isParagrafoUnico(){var e;return this.isDispositivoAlteracao&&this.informouParagrafoUnico||!this.isDispositivoAlteracao&&((e=this.pai)===null||e===void 0?void 0:e.filhos.filter(t=>fe(t)).length)===1}}}(gi(rt)))))))),Tf=it(Fo(lt(Ln(ct(gt(Uo($o(class extends rt{constructor(){super("articulacao")}get artigos(){var o;return(o=this._artigos)!==null&&o!==void 0?o:[]}addArtigo(o,e){var t;this._artigos=(t=this._artigos)!==null&&t!==void 0?t:[],e!==void 0?this._artigos.splice(this._artigos.indexOf(e)+1,0,o):this._artigos.push(o)}addArtigoOnPosition(o,e){var t;this._artigos=(t=this._artigos)!==null&&t!==void 0?t:[],this._artigos.splice(e,0,o)}removeArtigo(o){var e;this._artigos=(e=this._artigos)!==null&&e!==void 0?e:[],this._artigos=this._artigos.filter(t=>t.uuid!==o.uuid)}renumeraArtigos(){this.artigos.filter(o=>o.situacao.descricaoSituacao===L.DISPOSITIVO_NOVO||o.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO).forEach(o=>{B(o)||(o.numero=jn(o)),o.createRotulo(o),o.id=Co(o);const e=o.caput;e&&(e.id=Co(e))})}indexOfArtigo(o){return this.artigos.indexOf(o)}})))))))),Df=it(Fo(lt(ho(ct(gt(Uo($o(rt)))))))),Rf=it(Fo(lt(Ln(ct(gt(Uo($o(rt)))))))),Lf=it(Fo(lt(ho(ct(gt(Uo($o(rt)))))))),Mf=it(Fo(lt(or(ct(gt(Uo($o(rt)))))))),jf=it(Fo(lt(or(ct(gt(Uo($o(rt)))))))),$f=it(Fo(lt(or(ct(gt(Uo($o(rt)))))))),Uf=it(Fo(lt(ho(ct(gt(Uo($o(rt)))))))),Ff=it(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return me(e)?(t.push(Vt),vi(e)!==void 0&&t.push(Ro),mi(e)!==void 0&&t.push(Lo),B(e)&&!to(e)&&t.push(Ut),B(e)&&kt(e)&&t.push(jo),qe(e.pai)&&Se(e)!==void 0&&t.push(Du),ve(e.pai)&&t.push(Ru),H(e.pai)&&t.push(ju),fe(e.pai)&&t.push(Lu),Ot(e.pai)&&t.push(Tu),ni(e.pai)&&t.push(Mu),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){}getAcaoPossivelShiftTab(e){}}}(or(ct(function(o){return class extends o{constructor(){super(...arguments),this.tipoConteudo=qn.ConteudoTexto,this._texto=xt}get texto(){return this._texto}set texto(e){const t=eo(e);this._texto=t===jr?jr:xt}}}(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoIndisponivel"}createRotulo(){this.rotulo=void 0}createNumeroFromRotulo(){}getNumeracaoParaComandoEmenda(){return""}getNumeracaoComRotuloParaComandoEmenda(){return""}}}(gi(rt))))))),de=(o,e,t,i)=>{const r=vd(e,o);return i!==void 0&&i>=0?o.addFilhoOnPosition(r,i):t?o.addFilho(r,t):o.addFilho(r),r},vd=(o,e)=>{let t;switch(o.toLowerCase()){case"alinea":t=new qf(o.toLowerCase());break;case"artigo":t=new If,t.caput=vd(D.caput.tipo,t);break;case"capitulo":t=new Df(o.toLowerCase());break;case"caput":t=new Sf(o.toLowerCase());break;case"inciso":t=new Pf(o.toLowerCase());break;case"item":t=new Nf(o.toLowerCase());break;case"livro":t=new Lf(o.toLowerCase());break;case"omissis":t=new Ff(o.toLowerCase());break;case"paragrafo":t=new Cf(o.toLowerCase());break;case"parte":t=new Mf(o.toLowerCase());break;case"secao":t=new $f(o.toLowerCase());break;case"subsecao":t=new jf(o.toLowerCase());break;case"titulo":t=new Uf(o.toLowerCase());break;default:t=e&&pe(e)?new Rf("agrupadorGenerico"):new kf("generico"),t.mensagens=[],t.mensagens.push({tipo:Y.WARNING,descricao:"N\xE3o foi poss\xEDvel validar a natureza deste dispositivo com base na legisla\xE7\xE3o vigente"})}return t.uuid=Ea.next(),t.name=o,t.pai=e,t.isDispositivoAlteracao=B(t),Kf(t),t},Ia=()=>{const o=new Tf;return o.uuid=Ea.next(),o},Sa=o=>{o.alteracoes=Ia(),o.alteracoes.pai=o},Tl=(o,e)=>{var t,i,r,n,s,d,c,p,u,a,l,h,f,m,v,g,y,b,x,w,A,S,q,P,_,I,E,O;let k;if(B(o))if(e.subType==="INICIAR_BLOCO")k=wr(D.artigo.tipo,Me(o)),k.texto=((r=(i=(t=e.novo)===null||t===void 0?void 0:t.conteudo)===null||i===void 0?void 0:i.texto)===null||r===void 0?void 0:r.length)>0?(s=(n=e.novo)===null||n===void 0?void 0:n.conteudo)===null||s===void 0?void 0:s.texto:"";else if(e.subType==="FINALIZAR_BLOCO"){const N=Me(o);k=rn(N.pai),k.texto=eo((p=(c=(d=e.novo)===null||d===void 0?void 0:d.conteudo)===null||c===void 0?void 0:c.texto)!==null&&p!==void 0?p:"")}else if(((N,C)=>{var M,U,K;if(!B(N))return!1;const J=va(N);return ze(J)&&id(eo((K=(U=(M=C.atual)===null||M===void 0?void 0:M.conteudo)===null||U===void 0?void 0:U.texto)!==null&&K!==void 0?K:""))&&kt(N)})(o,e)){const N=Me(o);k=e.subType==="INICIAR_BLOCO"?wr(D.artigo.tipo,N):rn(N.pai),k.texto=e.subType==="INICIAR_BLOCO"?"":eo((l=(a=(u=e.novo)===null||u===void 0?void 0:u.conteudo)===null||a===void 0?void 0:a.texto)!==null&&l!==void 0?l:"")}else k=rn(o),k.createRotulo(),k.texto=((m=(f=(h=e.novo)===null||h===void 0?void 0:h.conteudo)===null||f===void 0?void 0:f.texto)===null||m===void 0?void 0:m.length)>0?eo((y=(g=(v=e.novo)===null||v===void 0?void 0:v.conteudo)===null||g===void 0?void 0:g.texto)!==null&&y!==void 0?y:""):"";else o.alteracoes||od((x=(b=e.atual)===null||b===void 0?void 0:b.conteudo)===null||x===void 0?void 0:x.texto)||((w=e.novo)===null||w===void 0?void 0:w.isDispositivoAlteracao)?(o.hasAlteracao()||Sa(o),k=wr(o.tipo,o.alteracoes),k.texto=((q=(S=(A=e.novo)===null||A===void 0?void 0:A.conteudo)===null||S===void 0?void 0:S.texto)===null||q===void 0?void 0:q.length)>0?(_=(P=e.novo)===null||P===void 0?void 0:P.conteudo)===null||_===void 0?void 0:_.texto:""):(k=rn(o),k.texto=(O=(E=(I=e.novo)===null||I===void 0?void 0:I.conteudo)===null||E===void 0?void 0:E.texto)!==null&&O!==void 0?O:"");return k},rn=o=>o.hasAlteracao()?zf(o):H(o)?B(o)?de(o.caput,D.inciso.tipo,void 0,0):Vf(o):pe(o)?Hf(o):B(o)?me(o)?de(o.pai,H(o.pai)?D.paragrafo.tipo:o.pai.tipoProvavelFilho,o):Ue(o)||at(o)?de(o,o.tipoProvavelFilho,o):de(o.pai,o.tipo,o):Bf(o),zf=o=>{var e;return o.pai.isLastFilho(o)&&((e=o==null?void 0:o.pai)===null||e===void 0?void 0:e.pai)?de(o.pai.pai,o.pai.tipo,o.pai):de(o.pai,o.tipo,o)},Bf=o=>{if(at(o)){const e=o.tipoProvavelFilho;return o.pai.filhos.length>0?de(o,e,void 0,0):de(o,e)}if(o.situacao.descricaoSituacao!==L.DISPOSITIVO_ORIGINAL&&An(o)&&o.pai.isLastFilho(o)){if(st(o)){const e=o.pai.pai;return e.filhos.filter(t=>fe(t)).length>0?de(e,D.paragrafo.tipo,void 0,0):de(e,D.paragrafo.tipo)}return de(o.pai.pai,o.pai.tipo,o.pai)}return de(o.pai,o.tipo,o)},Vf=o=>{if(at(o)){const e=o.tipoProvavelFilho;if(e===D.inciso.tipo){const t=o.caput;return t.filhos.length>0?de(t,e,void 0,0):de(t,e)}return o.pai.filhos.length>0?de(o,e,void 0,0):de(o,e)}return ei(o)&&o.filhos.length>0&&fe(o.filhos[0])?de(o,D.paragrafo.tipo,void 0,0):de(o.pai,o.tipo,o)},Hf=o=>de(o,D.artigo.tipo,void 0,0),wr=(o,e,t,i)=>{const r=de(e,o,t,i);return r.createRotulo(r),r},Kf=o=>{B(o)&&(o.renumeraFilhos=()=>{},H(o)&&(o.caput.renumeraFilhos=()=>{}),Me(o).renumeraFilhos=()=>{},Me(o).renumeraArtigos=()=>{})};class Io extends Oa{constructor(){super(...arguments),this.descricaoSituacao=L.DISPOSITIVO_ADICIONADO,this.tipoEmenda=ft.EMENDA}getAcoesPermitidas(e,t){return[...new Set(t)].filter(i=>i!==void 0).filter(i=>i.descricao!=="Adicionar"&&i.descricao!=="Atualizar dispositivo").filter(i=>{var r;return!(!((r=i.descricao)===null||r===void 0)&&r.startsWith("Mover"))||(n=>{var s;return((s=n.pai.filhos)===null||s===void 0?void 0:s.filter(d=>d.situacao.descricaoSituacao!==L.DISPOSITIVO_ADICIONADO).length)===0})(e)}).sort((i,r)=>i.descricao.localeCompare(r.descricao))}}class lo{constructor(){this.descricaoSituacao=L.DISPOSITIVO_ORIGINAL}getAcoesPermitidas(e,t){const i=t.filter(r=>!(r instanceof uo)).filter(r=>!(r instanceof Dn)).filter(r=>{var n;return!(!((n=r.descricao)===null||n===void 0)&&n.startsWith("Mover"))}).filter(r=>!(r instanceof ie)).filter(r=>!(r instanceof Rn)).filter(r=>!(r instanceof Eu));return hi(e).filter(r=>fa(r)).length===0&&i.push(qu),i}}const Dl=(o,e)=>{var t;let i;if(e.endsWith("EmOmissis")){const n=e.replace("transformar","").replace("EmOmissis","");i="transformar"+n+"EmOmissis"+n}else i=e;return(t=o.getAcoesPossiveis(o).filter(n=>n instanceof ie).filter(n=>n.nomeAcao===e||n.nomeAcao.replaceAll("IncisoCaput","Inciso").replaceAll("IncisoParagrafo","Inciso")===i)[0])===null||t===void 0?void 0:t.nomeAcao},Ar=(o,e)=>o.getAcoesPossiveis(o).filter(t=>t instanceof e).length>0,gd=(o,e,t)=>{var i,r,n,s,d,c,p,u,a;if(t&&((i=t.ui)===null||i===void 0?void 0:i.events)){const l=Ge(t.ui.events,j.ElementoModificado);if(l&&l.elementos&&((n=(r=l.elementos[0])===null||r===void 0?void 0:r.conteudo)===null||n===void 0?void 0:n.texto)===o.texto)return!0}return o.texto!==""&&((d=(s=e.atual)===null||s===void 0?void 0:s.conteudo)===null||d===void 0?void 0:d.texto)===""||((p=(c=e.atual)===null||c===void 0?void 0:c.conteudo)===null||p===void 0?void 0:p.texto)&&o.texto.localeCompare((a=(u=e.atual)===null||u===void 0?void 0:u.conteudo)===null||a===void 0?void 0:a.texto)!==0},Rl=o=>{const e=Z(o);return e.mensagens=Re(o),e},ti=o=>{var e;o.uuid=Ea.next(),(e=o.filhos)===null||e===void 0||e.forEach(t=>ti(t))},Zi=(o,e)=>qe(o)||(t=>H(t)&&Me(t).indexOfArtigo(t)===0)(e)||e.pai.indexOf(e)===0?o:Wi(o),Ko=o=>o!==void 0&&o!=="",bd=(o,e=!1)=>{const t=[];return hi(o).forEach(i=>{if(e){const r=Re(i);r&&(i.mensagens=r,t.push(Z(i)))}else t.push(Z(i))}),t};class Xe{constructor(){this.eventos=[],this.eventos=Wf()}add(e,t){const i=this.get(e);t.forEach(r=>{var n;return Qf(i,r)||(n=i.elementos)===null||n===void 0?void 0:n.push(r)})}build(){return this.eventos.filter(e=>e.elementos&&e.elementos.length>0)}get(e){return this.eventos.filter(t=>t.stateType===e)[0]}setReferencia(e){this.get(j.ElementoIncluido).referencia=e}}const Ll=(o,e)=>{const t=new Xe;return t.setReferencia(Z(Zi(o,e))),t.add(j.ElementoIncluido,bd(e)),t.add(j.ElementoRenumerado,hd(e)),t.add(j.ElementoValidado,Zr(e,!1)),t},fn=o=>{const e=new Xe,t=Z(o);return t.mensagens=Re(o),e.add(j.ElementoModificado,[t]),e.add(j.ElementoValidado,Zr(o)),e},mn=(o,e)=>{o.mensagens=Re(o);const t=Z(o),i=e?[e]:[];return i.push(t),[{stateType:j.ElementoModificado,elementos:i},{stateType:j.ElementoValidado,elementos:Zr(o,!0)}]},Gf=(o,e)=>{const t=mt(e),i=fi(e),r=Se(e),n=e.pai;n.removeFilho(e),n.renumeraFilhos(),Le(n)&&n.filhos.length===0&&(n.pai.alteracoes=void 0);const s=r&&(xn(r)||ya(r))?r:ve(n)?n.pai:n;return o.artigos.length===1&&i.push(o.artigos[0]),((c,p,u)=>{const a=new Xe;return a.add(j.ElementoRemovido,c),a.add(j.ElementoRenumerado,p.map(l=>Z(l))),a.add(j.ElementoValidado,u),a})(t,i,Zr(s,!1)).build()},Ml=o=>{var e,t,i,r,n,s,d,c,p;o.numero=(t=(e=o.situacao.dispositivoOriginal)===null||e===void 0?void 0:e.numero)!==null&&t!==void 0?t:"",o.rotulo=(r=(i=o.situacao.dispositivoOriginal)===null||i===void 0?void 0:i.rotulo)!==null&&r!==void 0?r:"",o.id=(s=(n=o.situacao.dispositivoOriginal)===null||n===void 0?void 0:n.lexmlId)!==null&&s!==void 0?s:"",o.texto=o.situacao.descricaoSituacao===L.DISPOSITIVO_MODIFICADO?(p=(c=(d=o.situacao.dispositivoOriginal)===null||d===void 0?void 0:d.conteudo)===null||c===void 0?void 0:c.texto)!==null&&p!==void 0?p:"":o.texto,o.situacao=new lo},Ge=(o,e)=>o==null?void 0:o.filter(t=>t.stateType===e)[0],Qf=(o,e)=>(o==null?void 0:o.elementos.map(t=>{var i,r;return t.uuid===e.uuid&&t.rotulo===e.rotulo&&((i=t.conteudo)===null||i===void 0?void 0:i.texto)===((r=e.conteudo)===null||r===void 0?void 0:r.texto)}).filter(t=>t).length)>0,Wf=()=>[{stateType:j.ElementoIncluido,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoRemovido,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoModificado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoRenumerado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoRestaurado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoSuprimido,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoValidado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoSelecionado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoMarcado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.SituacaoElementoModificada,referencia:void 0,pai:void 0,elementos:[]}],ht=(o,e)=>{const t=o.past?o.past:[];return t.push(JSON.parse(JSON.stringify(e))),t},Zf=(o,e)=>{const t=o.future?o.future:[];return t.push(JSON.parse(JSON.stringify(e))),t},jt=(o,e)=>{var t;return{articulacao:o.articulacao,modo:o.modo,past:o.past,present:o.present,future:o.future,ui:{events:(t=o.ui)===null||t===void 0?void 0:t.events,message:e}}},jl=(o,e)=>{const t=o.pai.indexOf(o);return e==="antes"?t:t===o.pai.filhos.length-1?void 0:t+1},Xf=(o,e)=>{var t,i,r,n,s,d,c,p,u,a,l,h,f,m,v,g,y,b,x,w,A;let S=!1;const q=ke(o.articulacao,e.atual,!0);if(q===void 0||q.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO&&at(q)||q.situacao.descricaoSituacao!==L.DISPOSITIVO_NOVO&&q.situacao.descricaoSituacao!==L.DISPOSITIVO_ADICIONADO&&at(q)&&!Ko((i=(t=e.novo)===null||t===void 0?void 0:t.conteudo)===null||i===void 0?void 0:i.texto)&&(q.hasAlteracao()&&((r=q.alteracoes)===null||r===void 0?void 0:r.filhos)&&ao(q.alteracoes.filhos[0])&&!me(q.alteracoes.filhos[0])&&q.alteracoes.filhos[0].numero==="1"||B(q)&&Ue(q)&&ao(q.filhos[0])&&!me(q.filhos[0])&&!fe(q.filhos[0])&&q.filhos[0].numero==="1"))return o;const P=q.pai.indexOf(q)===0?!e.posicao&&q.hasAlteracao()?q:st(q)?q.pai.pai:q.pai:q.pai.filhos[q.pai.indexOf(q)-1];((n=q.situacao)===null||n===void 0?void 0:n.descricaoSituacao)===L.DISPOSITIVO_ORIGINAL&&Ko((d=(s=e.novo)===null||s===void 0?void 0:s.conteudo)===null||d===void 0?void 0:d.texto)&&(e.atual.conteudo.texto=q.texto,e.novo.conteudo.texto=void 0);const _=xn(q)||ya(q),I=Rl(q),E=[];if(Ur(E,q),gd(q,e,o)&&(q.texto=B(q)?eo((u=(p=e.atual.conteudo)===null||p===void 0?void 0:p.texto)!==null&&u!==void 0?u:""):(c=e.atual.conteudo)===null||c===void 0?void 0:c.texto,S=!0),((C,M)=>{var U,K,J;return!(!pe(C)||!C.pai||C.situacao.descricaoSituacao===L.DISPOSITIVO_NOVO||Qr(C.pai,C))||to(C)||at(C)&&!Ar(C,Qe)||((U=C.situacao)===null||U===void 0?void 0:U.descricaoSituacao)===L.DISPOSITIVO_ORIGINAL&&Ko((J=(K=M.novo)===null||K===void 0?void 0:K.conteudo)===null||J===void 0?void 0:J.texto)})(q,e))return jt(o,{tipo:Y.INFO,descricao:"N\xE3o \xE9 poss\xEDvel criar dispositivos nessa situa\xE7\xE3o"});let O;if(O=H(q)?e.posicao&&e.posicao==="antes"?de(q.pai,q.tipo,void 0,jl(q,e.posicao)):e.posicao&&e.posicao==="depois"?de(q.pai,q.tipo,q):q.hasAlteracao()?wr(D.artigo.tipo,q.alteracoes,void 0,0):Tl(q,e):e.posicao?de(q.pai,q.tipo,void 0,jl(q,e.posicao)):Tl(q,e),((a=q.situacao)===null||a===void 0?void 0:a.descricaoSituacao)===L.DISPOSITIVO_ORIGINAL||((l=q.situacao)===null||l===void 0?void 0:l.descricaoSituacao)===L.DISPOSITIVO_MODIFICADO||((h=q.situacao)===null||h===void 0?void 0:h.descricaoSituacao)===L.DISPOSITIVO_SUPRIMIDO||q.situacao instanceof Io){O.situacao=new Io,O.situacao.tipoEmenda=o.modo;const C=O.pai;Le(C)&&C.filhos.length===1&&(C.situacao=new Io)}Ko((m=(f=e.novo)===null||f===void 0?void 0:f.conteudo)===null||m===void 0?void 0:m.texto)&&q.tipo===O.tipo&&Ue(q)&&md(q,O),B(O)&&(O.createRotulo(O),(v=O.mensagens)===null||v===void 0||v.push({tipo:Y.WARNING,descricao:"\xC9 necess\xE1rio informar o r\xF3tulo do dispositivo"})),O.pai.renumeraFilhos();const k=e.posicao&&e.posicao==="antes"?Ll(P,O):Ll(q,O),N=Rl(q);if(Ko((y=(g=e.novo)===null||g===void 0?void 0:g.conteudo)===null||y===void 0?void 0:y.texto)&&q.tipo===O.tipo&&E&&E.length>0&&k.add(j.ElementoRemovido,E),pe(O)&&ot(O).length===2){const C=ot(O).filter(M=>M!==O);k.add(j.ElementoModificado,[Z(C[0])])}return(S||Ko((x=(b=e.novo)===null||b===void 0?void 0:b.conteudo)===null||x===void 0?void 0:x.texto))&&k.add(j.ElementoModificado,[I,N]),(S||Ko((A=(w=e.novo)===null||w===void 0?void 0:w.conteudo)===null||A===void 0?void 0:A.texto)||me(q))&&k.add(j.ElementoValidado,[N]),(xn(q)||_)&&(k.add(j.ElementoValidado,[N]),k.add(j.ElementoRenumerado,[N])),e.posicao&&e.posicao==="antes"&&k.add(j.ElementoRenumerado,fi(O).map(C=>Z(C))),{articulacao:o.articulacao,modo:o.modo,past:ht(o,k.build()),present:k.build(),future:[],ui:{events:k.build()}}},Yf=(o,e)=>{var t,i,r,n,s;const d=ke(o.articulacao,e.atual,!0);if(d===void 0)return o;if(vt(d)){const b=d.pai.indexOf(d),x=wr(e.novo.tipo,d.pai,void 0,b);x.situacao=new Io,x.addFilho(d),d.pai=x,d.createRotulo(d);const w=new Xe;return w.setReferencia(Z(b===0?x.pai.pai:x.pai.filhos[b-1])),w.add(j.ElementoIncluido,[Z(x)]),w.add(j.ElementoRenumerado,[Z(d)]),{articulacao:o.articulacao,modo:o.modo,past:ht(o,w.build()),present:w.build(),future:[],ui:{events:w.build()}}}const c=Se(d),p=d.pai.indexOf(d),u=d.pai.filhos.filter((b,x)=>x>=p&&b.tipo!==e.novo.tipo).map(b=>mt(b)).flat();let a,l;var h,f;gd(d,e)&&(d.texto=B(d)?eo((r=(i=e.atual.conteudo)===null||i===void 0?void 0:i.texto)!==null&&r!==void 0?r:""):(t=e.atual.conteudo)===null||t===void 0?void 0:t.texto),h=d,f=e.novo.tipo,h.pai.tipo===f?(a=de(d.pai.pai,e.novo.tipo,void 0,d.pai.pai.indexOf(d.pai)+1),l=oo(a)):!B(d)&&((b,x)=>js(b,x)!==void 0)(d,e.novo.tipo)||((b,x)=>Lr(b.pai.pai,b.pai,[]).filter(w=>w.tipo===x).length>0)(d,e.novo.tipo)?(l=(n=js(d,e.novo.tipo))!==null&&n!==void 0?n:((b,x)=>[...new Set(Lr(b.pai,b,[]))].filter(w=>w.tipo===x).reverse()[0])(d,e.novo.tipo),a=de(l.pai,e.novo.tipo,l)):(a=de(d.pai,e.novo.tipo,void 0,d.pai.indexOf(d)),l=c!=null?c:d.pai),a.texto=(s=e.novo.conteudo)===null||s===void 0?void 0:s.texto;const m=d.pai.filhos.filter((b,x)=>x>=p&&b.tipo!==e.novo.tipo);((b,x)=>{x.map(w=>{const A=w.pai;ti(w);const S=H(w)?oo(w):void 0;return A==null||A.removeFilho(w),w.pai=b,b.addFilho(w,S),w})})(a,m),a.renumeraFilhos(),a.pai.renumeraFilhos();const v=[...hd(a)].concat(a.filhos.filter((b,x)=>x>=p&&b.tipo!==d.tipo).map(b=>mt(b)).flat()),g=oo(a);g&&ot(a).length===2&&v.unshift(Z(g));const y=new Xe;return y.setReferencia(Z(Zi(l.pai&&qe(l)&&Le(l)?l.pai:l,a))),y.add(j.ElementoIncluido,mt(a)),y.add(j.ElementoRemovido,u),y.add(j.ElementoRenumerado,v),{articulacao:o.articulacao,modo:o.modo,past:ht(o,y.build()),present:y.build(),future:[],ui:{events:y.build()}}};class Er{constructor(e){this.descricaoSituacao=L.DISPOSITIVO_MODIFICADO,this.dispositivoOriginal=e}getAcoesPermitidas(e,t){const i=t.filter(r=>!(r instanceof uo)).filter(r=>!(r instanceof Dn)).filter(r=>!(r instanceof Rn)).filter(r=>{var n;return!(!((n=r.descricao)===null||n===void 0)&&n.startsWith("Mover"))}).filter(r=>r.descricao!=="Adicionar"&&r.descricao!=="Atualizar dispositivo").filter(r=>!(r instanceof ie));return i.push(ha),i.filter(r=>r!==void 0).sort((r,n)=>r.descricao.localeCompare(n.descricao))}}const Jf=(o,e)=>e.dispositivosAdicionados.map(t=>em(o,t)),em=(o,e)=>{const t={stateType:j.ElementoIncluido,referencia:void 0,pai:void 0,elementos:[]},i=yd(o.articulacao,e);if(i){if(!t.referencia){const r=oo(i),n=ve(i.pai)?i.pai.pai:i.pai;t.referencia=Z(tm(r||n,i))}Mt(i,r=>{var n;if(!ve(r)&&!Le(r)){const s=Z(r);s.lexmlId=Co(r),(n=t.elementos)===null||n===void 0||n.push(s)}})}return t},tm=(o,e)=>{const t=Zi(o,e);return t.id!==e.id?t:e.pai.filhos[e.pai.filhos.length-2]},yd=(o,e)=>{var t,i;let r;const n=e.tipo==="Caput";if(e.idIrmaoAnterior){const s=wn(o,$l(e.idIrmaoAnterior));s&&(r=s.tipo===e.tipo||s.tipo==="Omissis"?de(s.pai,e.tipo,s):de(s,e.tipo))}else if(e.idPai){const s=wn(o,$l(e.idPai));s&&(e.tipo!=="Inciso"&&e.tipo!=="Omissis"||s.tipo!=="Artigo"?n?(s.texto=(t=e.texto)!==null&&t!==void 0?t:"",r=s.caput):e.tipo==="Alteracao"?(Sa(s),r=s.alteracoes,s.alteracoes.id=e.id,s.alteracoes.base=e.urnNormaAlterada):(r=de(s,e.tipo,void 0,0),r.texto=(i=e.texto)!==null&&i!==void 0?i:""):r=de(s.caput,e.tipo,void 0,0))}else r=de(o,e.tipo,void 0,0);if(r){r.id=e.id;const s=new Io;r.situacao=s,s.existeNaNormaAlterada=!!e.existeNaNormaAlterada,n||me(r)||qe(r)||(e.abreAspas?(r.rotulo="\u201C"+e.rotulo,r.cabecaAlteracao=!0):(r.rotulo=e.rotulo,r.createNumeroFromRotulo(e.rotulo))),qe(r)||(e.fechaAspas?(r.notaAlteracao=e.notaAlteracao,r.texto=e.texto+`\u201D ${e.notaAlteracao}`):r.texto=e.texto)}return r&&e.filhos&&e.filhos.forEach((s,d)=>{d===0?s.idPai=e.id:s.idIrmaoAnterior=e.filhos[d-1].id,yd(o,s)}),r},$l=o=>o.replace(/(_cpt)$/,""),om=(o,e)=>{var t;const i=ke(o.articulacao,e.atual,!0),r=e.atual.norma,n=(i==null?void 0:i.alteracoes.base)||"",s=new RegExp(`<a.+href=.${n}.*?>.*?</a>`,"ig"),d=_n(r);if(i===void 0||!i.alteracoes||n===r&&i.texto.match(s))return o.ui=[],o;const c=`<a href="${p=r}"> ${_n(p)} </a>`;var p;const u=i.texto;if(i.texto.match(s))i.texto=u.replace(s,c);else if(i.texto.includes(d))i.texto=u.replace(d,c);else{const m=parseInt(localStorage.indexCursor);i.texto=[u.slice(0,m),c,u.slice(m)].join(" "),localStorage.removeItem("indexCursor")}const a=Z(i);i.alteracoes.base=r,((t=i.situacao)===null||t===void 0?void 0:t.descricaoSituacao)===L.DISPOSITIVO_ORIGINAL&&(i.situacao=new Er(a));const l=new Xe,h=Z(i,!0);h.mensagens=Re(i),l.add(j.ElementoValidado,[h]),l.add(j.ElementoModificado,[h]),l.add(j.SituacaoElementoModificada,[h]);const f=fn(i);return{articulacao:o.articulacao,modo:o.modo,past:ht(o,mn(i,a)),present:f.build(),future:o.future,ui:{events:l.build()}}},Ul=(o,e)=>{const t=ke(o.articulacao,e.atual,!0);if(t===void 0)return o.ui=[],o;if(!((f,m)=>{const v=Dl(f,m.subType);return f.getAcoesPossiveis(f).filter(g=>g instanceof ie&&g.nomeAcao&&g.nomeAcao===v).length>0})(t,e))return o;const i=Se(t);e.subType=Dl(t,e.subType);const r=[...mt(t)],n=fi(t),s=((f,m)=>{var v,g;const y=f.pai;let b,x;switch(m.subType){case"transformarAlineaEmItem":case"transformarIncisoCaputEmAlinea":case"transformarIncisoParagrafoEmAlinea":case"transformarParagrafoEmIncisoParagrafo":case"transformarArtigoEmParagrafo":x=Se(f),b=de(x,m.novo.tipo);break;case"transformarDispositivoGenericoEmInciso":case"transformarDispositivoGenericoEmAlinea":case"transformarDispositivoGenericoEmItem":case"transformarOmissisEmAlinea":case"transformarOmissisEmArtigo":case"transformarOmissisEmIncisoCaput":case"transformarOmissisEmIncisoParagrafo":case"transformarOmissisEmItem":case"transformarOmissisEmParagrafo":case"transformarAlineaEmOmissisAlinea":case"transformarItemEmOmissisItem":case"transformarParagrafoEmOmissisParagrafo":case"transformarIncisoCaputEmOmissisIncisoCaput":case"transformarIncisoParagrafoEmOmissisIncisoParagrafo":x=y,b=de(y,m.novo.tipo,void 0,y==null?void 0:y.indexOf(f));break;case"transformarParagrafoEmInciso":if(fe(f)&&(Lt(f)||Ae(f))){x=y,b=de(x.caput,m.novo.tipo);break}x=Se(f),b=de(x,m.novo.tipo);break;case"transformarParagrafoEmIncisoCaput":x=y,b=de(x.caput,m.novo.tipo);break;default:x=f.pai.pai,b=de(x,m.novo.tipo,f.pai)}return b.texto=(g=(v=m.atual.conteudo)===null||v===void 0?void 0:v.texto)!==null&&g!==void 0?g:f.texto,b.createRotulo(b),b.situacao=f.situacao,b.mensagens=Re(b),y==null||y.removeFilho(f),y==null||y.renumeraFilhos(),x==null||x.renumeraFilhos(),qa(f,b),b})(t,e),d=fi(s).concat(n),c=bd(s,!0),p=st(s)?s.pai.pai:s.pai;i&&ya(i)&&(i.pai.renumeraFilhos(),d.unshift(i));const u=Se(s);if(u){const f=Re(u);u.mensagens!==f&&c.unshift(Z(u))}const a=c.filter(f=>f.uuid===p.uuid).length>0?t.pai:p;a.mensagens=Re(a),c.unshift(Z(a));const l=u!=null?u:s.pai,h=((f,m,v,g,y)=>{const b=new Xe;return b.setReferencia(Z(Zi(f,m))),b.add(j.ElementoIncluido,mt(m)),b.add(j.ElementoRemovido,v),b.add(j.ElementoRenumerado,g),b.add(j.ElementoValidado,y.filter(x=>x.mensagens.length>0)),b})(ve(l)?l.pai:l,s,r,d.map(f=>(f.mensagens=Re(f),Z(f))),c);return{articulacao:o.articulacao,modo:o.modo,past:ht(o,h.build()),present:h.build(),future:[],ui:{events:h.build()}}},ds=(o,e)=>{if(Fs(e)){const t=Le(o)?o.pai:hn(o,e.hierarquia.pai.uuidAlteracao);if(t)return t.alteracoes||(t.alteracoes=Ia(),t.alteracoes.pai=t),e.hierarquia.pai.tipo===D.articulacao.tipo?t.alteracoes:hn(t.alteracoes,e.hierarquia.pai.uuid)}return hn(o,e.hierarquia.pai.uuid)},Fl=(o,e)=>{var t,i,r;const n=de(H(e)&&(o.tipo===D.inciso.name||(s=>{var d,c;const p=(c=(d=s.lexmlId)===null||d===void 0?void 0:d.split("_"))!==null&&c!==void 0?c:[];return s.tipo===D.omissis.tipo&&p.length>1&&p[p.length-2]==="cpt"})(o))?e.caput:e,o.tipo,void 0,o.hierarquia.posicao);return n.uuid=o.uuid,n.id=o.lexmlId,n.texto=(i=(t=o==null?void 0:o.conteudo)===null||t===void 0?void 0:t.texto)!==null&&i!==void 0?i:"",n.numero=(r=o==null?void 0:o.hierarquia)===null||r===void 0?void 0:r.numero,n.rotulo=o==null?void 0:o.rotulo,n.mensagens=o==null?void 0:o.mensagens,n.situacao=(s=>{switch(s){case L.DISPOSITIVO_ADICIONADO:return new Io;case L.DISPOSITIVO_NOVO:return new Oa;default:return new lo}})(o.descricaoSituacao),n},zl=(o,e,t)=>{if(e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0){const i=e.elementos[0],r=ds(o.articulacao,i),n=((s,d)=>{const c=d.shift(),p=ds(s,c),u=Fl(c,p),a=[u];return d==null||d.forEach(l=>{var h,f;const m=((h=l.hierarquia)===null||h===void 0?void 0:h.pai)===((f=c==null?void 0:c.hierarquia)===null||f===void 0?void 0:f.pai)?u.pai:ds(s,l),v=Fl(l,m);a.push(v)}),a})(o.articulacao,e.elementos);if(r==null||r.renumeraFilhos(),t){const s=i.hierarquia.posicao===0?qe(r)&&Le(r)?r.pai:r:Wi(Se(n[0]));if(s){const d=ke(o.articulacao,s);d?t.referencia=Z(d):jt(o,{tipo:Y.ERROR,descricao:"Erro inesperado"})}}return e.stateType===j.ElementoIncluido&&(t.referencia=e.referencia),n.map(s=>Z(s))}return[]},Bl=(o,e)=>e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0?(e.elementos.forEach(t=>{const i=ke(o.articulacao,t,!0);if(i){const r=i.pai;r.removeFilho(i),r.renumeraFilhos()}}),e.elementos):[],Vl=(o,e,t,i)=>e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0?(e.elementos.forEach(r=>{var n,s,d,c,p,u,a;const l=ke(o.articulacao,r,!0);i instanceof lo?(l.numero=(s=(n=l.situacao.dispositivoOriginal)===null||n===void 0?void 0:n.numero)!==null&&s!==void 0?s:"",l.rotulo=(c=(d=l.situacao.dispositivoOriginal)===null||d===void 0?void 0:d.rotulo)!==null&&c!==void 0?c:"",l.texto=(a=(u=(p=l.situacao.dispositivoOriginal)===null||p===void 0?void 0:p.conteudo)===null||u===void 0?void 0:u.texto)!==null&&a!==void 0?a:"",l.situacao=new lo):l.situacao=new i(Z(l)),t.elementos.push(Z(l))}),t.elementos):[],Hl=(o,e,t=!1)=>{if(e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0){const i=[];let r=0;return e.elementos.forEach(n=>{var s,d,c,p;const u=ke(o.articulacao,n,!0);u&&(t&&r===u.uuid||r!==u.uuid)&&(u.situacao.descricaoSituacao===L.DISPOSITIVO_MODIFICADO?(u.texto=(d=(s=u.situacao.dispositivoOriginal.conteudo)===null||s===void 0?void 0:s.texto)!==null&&d!==void 0?d:"",u.situacao=new lo):(n.descricaoSituacao===L.DISPOSITIVO_MODIFICADO&&(u.situacao=new Er(Z(u))),u.texto=(p=(c=n.conteudo)===null||c===void 0?void 0:c.texto)!==null&&p!==void 0?p:""),u.alteracoes&&(u.alteracoes.base=n.norma),u.mensagens=Re(u),i.push(Z(u)),r=u.uuid)}),i}return[]},Kl=(o,e)=>{if(e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0){const t=[];return e.elementos.forEach(i=>{const r=ke(o.articulacao,i,!0);r&&t.push(Z(r))}),t}return[]},Gl=(o,e)=>{const t=Ge(e,j.ElementoValidado);if(t!==void 0&&t.elementos!==void 0&&t.elementos[0]!==void 0){const i=[];return t.elementos.forEach(r=>{const n=ke(o.articulacao,r,!0);n&&(n.mensagens=Re(n),n.mensagens.length>0&&i.push(Z(n)))}),i}return[]},Ql=(o,e)=>{const t=ke(o.articulacao,e.atual,!0);if(t===void 0)return o.ui=[],o;if(!Ar(t,Dn))return jt(o,{tipo:Y.ERROR,descricao:"N\xE3o \xE9 poss\xEDvel excluir um dispositivo original mas apenas suprimi-lo."});if(!B(t)&&(xn(t)||o.articulacao.filhos.length===1&&o.articulacao.filhos[0]===t&&!Ue(t)))return jt(o,{tipo:Y.ERROR,descricao:"N\xE3o \xE9 poss\xEDvel excluir o \xFAnico dispositivo dispon\xEDvel."});const i=pe(t)?((r,n)=>{let s=n.pai.indexOf(n);const d=n.pai.filhos.filter((y,b)=>b<s&&pe(y)),c=n.pai,p=[...mt(n)],u=oo(n),a=(d==null?void 0:d.length)>0&&!B(n)?d.reverse()[0]:n.pai,l=(d==null?void 0:d.length)>0&&!B(n)?d.reverse()[0]:s>0?Wi(a.filhos[s-1]):a,h=qe(l)?a:Wi(l),f=n.filhos.map(y=>(y.pai=a,c.removeFilho(y),ti(y),(d==null?void 0:d.length)>0?a.addFilho(y):a.addFilhoOnPosition(y,s++),y));n.pai.removeFilho(n),a==null||a.renumeraFilhos(),c.renumeraFilhos();const m=f.map(y=>mt(y)).flat(),v=a.filhos.filter((y,b)=>b>=s&&(pe(y)||vt(y))).map(y=>Z(y)).flat();u&&ot(u).length===1&&v.unshift(Z(u));const g=new Xe;return g.setReferencia(qe(h)&&Le(h)?Z(h.pai):Z(h)),g.add(j.ElementoIncluido,m),g.add(j.ElementoRemovido,p),g.add(j.ElementoRenumerado,v),g.build()})(o.articulacao,t):Gf(o.articulacao,t);return{articulacao:o.articulacao,modo:o.modo,past:ht(o,i),present:i,future:[],ui:{events:i}}},im=o=>({stateType:j.ElementoMarcado,elementos:[Z(o)],moverParaFimLinha:!0}),rm=(o,e)=>(!o.modo.startsWith("emenda")||e.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO)&&!Ue(e),Wl=(o,e)=>e?o.tipo!=="Alinea"?e.toUpperCase():e.split("-").map((t,i)=>i>0?t.toUpperCase():t).join("-"):"",nm=(o,e)=>{var t,i;const r=ke(o.articulacao,e.atual,!0);if(r===void 0)return o.ui=[],o;if(!(hi(r).filter(d=>fa(d)).length>0)&&((t=r.situacao)===null||t===void 0?void 0:t.descricaoSituacao)!==L.DISPOSITIVO_MODIFICADO&&((i=r.situacao)===null||i===void 0?void 0:i.descricaoSituacao)!==L.DISPOSITIVO_SUPRIMIDO)return o;const s=((d,c)=>{const p=[];c.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO?hi(c).filter(l=>l.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO).forEach(l=>{Ml(l),p.push(Z(l))}):(Ml(c),p.push(Z(c)));const u=new Xe;return u.add(j.ElementoRestaurado,p),u.build()})(o.articulacao,r);return{articulacao:o.articulacao,modo:o.modo,past:ht(o,s),present:s,future:[],ui:{events:s}}},zs=(o,e)=>{o.length!==0&&(o==null||o.forEach(t=>{e.add(t.situacao.descricaoSituacao),zs(t.filhos,e)}))},sm=(o,e)=>{var t;const i=ke(o.articulacao,e.atual,!0);if(i===void 0||((t=i.situacao)===null||t===void 0?void 0:t.descricaoSituacao)!==L.DISPOSITIVO_ORIGINAL)return o.ui=[],o;if(!(n=>{var s;const d=new Set;return d.add(n.situacao.descricaoSituacao),zs(n.filhos,d),n.alteracoes&&zs((s=n.alteracoes)===null||s===void 0?void 0:s.filhos,d),d.size===1&&[...d][0]===L.DISPOSITIVO_ORIGINAL})(i))return jt(o,{tipo:Y.ERROR,descricao:"S\xF3 \xE9 poss\xEDvel suprimir dispositivos que n\xE3o tenham sofrido modifica\xE7\xE3o."});const r=((n,s)=>{hi(s).forEach(c=>c.situacao=new $r(Z(c))),s.alteracoes&&s.alteracoes.filhos.length>0&&s.alteracoes.filhos.forEach(c=>hi(c).forEach(p=>p.situacao=new $r(Z(p))));const d=new Xe;return d.add(j.ElementoSuprimido,mt(s)),d.build()})(o.articulacao,i);return{articulacao:o.articulacao,modo:o.modo,past:ht(o,r),present:r,future:[],ui:{events:r}}},am=function(o){for(var e=Object.keys(o),t={},i=0;i<e.length;i++){var r=e[i];typeof o[r]=="function"&&(t[r]=o[r])}var n,s=Object.keys(t);try{(function(d){Object.keys(d).forEach(function(c){var p=d[c];if(p(void 0,{type:yn.INIT})===void 0)throw new Error(nt(12));if(p(void 0,{type:yn.PROBE_UNKNOWN_ACTION()})===void 0)throw new Error(nt(13))})})(t)}catch(d){n=d}return function(d,c){if(d===void 0&&(d={}),n)throw n;for(var p=!1,u={},a=0;a<s.length;a++){var l=s[a],h=t[l],f=d[l],m=h(f,c);if(m===void 0)throw c&&c.type,new Error(nt(14));u[l]=m,p=p||m!==f}return(p=p||s.length!==Object.keys(d).length)?u:d}}({appReducer:(o={},e)=>(e.type,o),elementoReducer:(o={},e)=>{switch(e.type){case"APLICAR_ALTERACOES_EMENDA":return((t,i)=>{const r={articulacao:t.articulacao,modo:t.modo,past:[],present:[],future:[],ui:{events:[]}},n=new Xe;return i.alteracoesEmenda.dispositivosSuprimidos&&(n.add(j.ElementoSuprimido,[]),i.alteracoesEmenda.dispositivosSuprimidos.forEach(s=>{const d=wn(t.articulacao,s.id);d&&Mt(d,c=>{var p;c.situacao=new $r(Z(c)),(p=n.get(j.ElementoSuprimido).elementos)===null||p===void 0||p.push(Z(c))})})),i.alteracoesEmenda.dispositivosModificados&&(n.add(j.ElementoModificado,[]),i.alteracoesEmenda.dispositivosModificados.forEach(s=>{var d;const c=wn(t.articulacao,s.id);c&&(c.situacao=new Er(Z(c)),c.texto=s.texto,(d=n.get(j.ElementoModificado).elementos)===null||d===void 0||d.push(Z(c)))})),i.alteracoesEmenda.dispositivosAdicionados&&n.eventos.push(...Jf(t,i.alteracoesEmenda)),r.ui.events=n.build(),r})(o,e);case"ATUALIZAR_ELEMENTO":return((t,i)=>{var r,n,s,d;const c=ke(t.articulacao,i.atual,!0);if(c===void 0||c.texto===i.atual.conteudo.texto)return t.ui=[],t;const p=Z(c);c.texto=B(c)?eo((s=(n=i.atual.conteudo)===null||n===void 0?void 0:n.texto)!==null&&s!==void 0?s:""):(r=i.atual.conteudo)===null||r===void 0?void 0:r.texto,((d=c.situacao)===null||d===void 0?void 0:d.descricaoSituacao)===L.DISPOSITIVO_ORIGINAL&&(c.situacao=new Er(p));const u=fn(c);return{articulacao:t.articulacao,modo:t.modo,past:ht(t,mn(c,p)),present:u.build(),future:t.future,ui:{events:u.build()}}})(o,e);case"ATUALIZAR_REFERENCIA_ELEMENTO":return om(o,e);case"ATUALIZAR_TEXTO_ELEMENTO":return((t,i)=>{var r,n,s,d;const c=ke(t.articulacao,i.atual,!0);if(c===void 0||c.texto===i.atual.conteudo.texto)return t.ui=[],t;const p=Z(c);c.texto=B(c)?eo((s=(n=i.atual.conteudo)===null||n===void 0?void 0:n.texto)!==null&&s!==void 0?s:""):(r=i.atual.conteudo)===null||r===void 0?void 0:r.texto,((d=c.situacao)===null||d===void 0?void 0:d.descricaoSituacao)===L.DISPOSITIVO_ORIGINAL&&(c.situacao=new Er(p));const u=new Xe,a=Z(c,!0);a.mensagens=Re(c),((h,f)=>{var m,v;return((v=(m=f.atual)===null||m===void 0?void 0:m.conteudo)===null||v===void 0?void 0:v.texto)!==h})(c.texto,i)&&u.add(j.ElementoModificado,[a]),u.add(j.SituacaoElementoModificada,[a]),u.add(j.ElementoValidado,Zr(c));const l=fn(c);return{articulacao:t.articulacao,modo:t.modo,past:ht(t,mn(c,p)),present:l.build(),future:[],ui:{events:u.build()}}})(o,e);case"ADICIONAR_ELEMENTO":return Xf(o,e);case"AGRUPAR_ELEMENTO":return Yf(o,e);case"TRANSFORMAR_TIPO_ELEMENTO":return Ul(o,e);case"ELEMENTO_SELECIONADO":return((t,i)=>{const r=ke(t.articulacao,i.atual,!0);if(r===void 0)return t.ui.events=[],t;r.mensagens=Re(r);const n=Z(r,!0),s=[{stateType:j.ElementoSelecionado,elementos:[n]}];return{articulacao:t.articulacao,modo:t.modo,past:t.past,present:t.present,future:t.future,ui:{events:s}}})(o,e);case"INFORMAR_NORMA":return((t,i)=>{const r=ke(t.articulacao,i.atual,!0);if(r===void 0)return t.ui.events=[],t;r.mensagens=Re(r);const n=Z(r,!0),s=[{stateType:j.InformarNorma,elementos:[n]}];return{articulacao:t.articulacao,modo:t.modo,past:t.past,present:t.present,future:[],ui:{events:s}}})(o,e);case"Mover para baixo":return((t,i)=>{const r=ke(t.articulacao,i.atual,!0);if(r===void 0)return t.ui=[],t;if(!Ar(r,_u))return jt(t,{tipo:Y.ERROR,descricao:"Opera\xE7\xE3o n\xE3o permitida."});const n=vi(r);if(n===void 0)return t;const s=[...mt(r),...mt(n)],d=fi(r),c=r.pai,p=c.indexOf(r);ti(r),ti(n),c.removeFilho(r),c.removeFilho(n),c.addFilhoOnPosition(n,p),c.addFilhoOnPosition(r,p+1),r.pai=c,n.pai=c,c.renumeraFilhos();const u=p===0?st(n)||B(r)&&r.tipo==="Artigo"?c.pai:c:Se(n),a=new Xe;return a.setReferencia(Z(Zi(u,n))),a.add(j.ElementoIncluido,Oo(n,[]).concat(Oo(r,[])).map(l=>(l.mensagens=Re(l),Z(l)))),a.add(j.ElementoRemovido,s),a.add(j.ElementoRenumerado,d.map(l=>Z(l))),a.add(j.ElementoMarcado,[Z(r),i.atual]),a.add(j.ElementoSelecionado,[Z(r)]),{articulacao:t.articulacao,modo:t.modo,past:ht(t,a.build()),present:a.build(),future:[],ui:{events:a.build()}}})(o,e);case"Mover para cima":return((t,i)=>{var r;const n=ke(t.articulacao,i.atual,!0);if(n===void 0)return t.ui=[],t;if(!Ar(n,Ou))return jt(t,{tipo:Y.ERROR,descricao:"Opera\xE7\xE3o n\xE3o permitida."});const s=mi(n);if(s===void 0)return t;const d=[...mt(s),...mt(n)],c=fi(n),p=n.pai,u=p.indexOf(s);ti(s),ti(n),p.removeFilho(s),p.removeFilho(n),p.addFilhoOnPosition(n,u),p.addFilhoOnPosition(s,u+1),n.pai=p,s.pai=p,p.renumeraFilhos();const a=u===0?((r=n.pai)===null||r===void 0?void 0:r.tipo)===D.caput.tipo||B(n)&&n.tipo==="Artigo"?p.pai:p:Se(n),l=new Xe;return l.setReferencia(Z(Zi(a,n))),l.add(j.ElementoIncluido,Oo(n,[]).concat(Oo(s,[])).map(h=>(h.mensagens=Re(h),Z(h)))),l.add(j.ElementoRemovido,d),l.add(j.ElementoRenumerado,c.map(h=>Z(h))),l.add(j.ElementoMarcado,[Z(n),i.atual]),l.add(j.ElementoSelecionado,[Z(n)]),{articulacao:t.articulacao,modo:t.modo,past:ht(t,l.build()),present:l.build(),future:[],ui:{events:l.build()}}})(o,e);case"RENUMERAR_ELEMENTO":return((t,i)=>{var r,n,s,d;const c=ke(t.articulacao,i.atual,!0);if(c===void 0)return t.ui=[],t;if(!Ar(c,Rn))return jt(t,{tipo:Y.INFO,descricao:"Nessa situa\xE7\xE3o, n\xE3o \xE9 poss\xEDvel renumerar o dispositivo"});if(B(c)&&((n=Wl(c,(r=i.novo)===null||r===void 0?void 0:r.numero))===null||n===void 0?void 0:n.startsWith("0")))return jt(t,{tipo:Y.INFO,descricao:"N\xE3o pode haver um dispositivo com esse r\xF3tulo em altera\xE7\xE3o de norma"});const p=ht(t,mn(c));try{const a=Wl(c,(s=i.novo)===null||s===void 0?void 0:s.numero);c.createNumeroFromRotulo(a)}catch(a){return jt(t,{tipo:Y.ERROR,descricao:"O r\xF3tulo informado \xE9 inv\xE1lido",detalhe:a})}c.createRotulo(c),((d=c.situacao)===null||d===void 0?void 0:d.descricaoSituacao)===L.DISPOSITIVO_ADICIONADO&&(c.situacao.existeNaNormaAlterada=i.novo.existenteNaNorma);const u=fn(c);return{articulacao:t.articulacao,modo:t.modo,past:p,present:u.build(),future:t.future,ui:{events:u.build()}}})(o,e);case"RESTAURAR_ELEMENTO":return nm(o,e);case"SUPRIMIR_ELEMENTO":return sm(o,e);case"ABRIR_ARTICULACAO":return Ef(0,e);case"REDO":return(t=>{var i;if(t.future===void 0||t.future.length===0)return t.ui=[],t;const r=t.future.pop(),n={articulacao:t.articulacao,modo:t.modo,past:ht(t,r),present:[],future:t.future,ui:{events:[]}},s=new Xe;s.add(j.ElementoRemovido,Bl(t,Ge(r,j.ElementoRemovido))),s.add(j.ElementoIncluido,zl(t,Ge(r,j.ElementoIncluido),Ge(s.eventos,j.ElementoIncluido))),s.add(j.ElementoModificado,Hl(t,Ge(r,j.ElementoModificado),!0)),s.add(j.ElementoSuprimido,Vl(t,Ge(r,j.ElementoSuprimido),Ge(s.eventos,j.ElementoSuprimido),$r)),s.add(j.ElementoRenumerado,Kl(t,Ge(r,j.ElementoRenumerado))),s.add(j.ElementoValidado,Gl(t,r));const d=(i=Ge(r,j.ElementoMarcado))===null||i===void 0?void 0:i.elementos;return d&&(s.add(j.ElementoMarcado,d),s.add(j.ElementoSelecionado,[d[0]])),n.ui.events=s.build(),n.present=s.build(),n})(o);case"REMOVER_ELEMENTO":return Ql(o,e);case"REMOVER_ELEMENTO_SEM_TEXTO":return((t,i)=>{var r;const n=ke(t.articulacao,i.atual,!0);if(n===void 0||!rm(t,n))return t.ui=[],t;const s=Se(n),d=Ql(t,i);return i.key==="Backspace"&&s&&((r=d.ui)===null||r===void 0||r.events.push(im(s))),d})(o,e);case"SHIFT_TAB":case"TAB":return((t,i)=>{const r=ke(t.articulacao,i.atual,!0);if(r===void 0)return t.ui=[],t;const n=i.type==="TAB"?r.getAcaoPossivelTab(r):r.getAcaoPossivelShiftTab(r);if(!n)return t.ui=[],t;const s={type:"TRANSFORMAR_TIPO_ELEMENTO",subType:n.nomeAcao,atual:i.atual,novo:{tipo:n.tipo}};return Ul(t,s)})(o,e);case"UNDO":return(t=>{var i;if(t.past===void 0||t.past.length===0)return t.ui=[],t;const r=t.past.pop(),n={articulacao:t.articulacao,modo:t.modo,past:t.past,present:[],future:Zf(t,r),ui:{events:[]}},s=new Xe;s.add(j.ElementoRemovido,Bl(t,Ge(r,j.ElementoIncluido))),s.add(j.ElementoIncluido,zl(t,Ge(r,j.ElementoRemovido),Ge(s.eventos,j.ElementoIncluido))),s.add(j.ElementoRestaurado,Vl(t,Ge(r,j.ElementoSuprimido),Ge(s.eventos,j.ElementoRestaurado),lo)),s.add(j.ElementoModificado,Hl(t,Ge(r,j.ElementoModificado))),s.add(j.ElementoRenumerado,Kl(t,Ge(r,j.ElementoRenumerado))),s.add(j.ElementoValidado,Gl(t,r));const d=(i=Ge(r,j.ElementoMarcado))===null||i===void 0?void 0:i.elementos;return d&&(s.add(j.ElementoMarcado,[d[1],d[0]]),s.add(j.ElementoSelecionado,[d[1]])),n.ui.events=s.build(),n.present=s.build(),n})(o);case"VALIDAR_ELEMENTO":return((t,i)=>{const r=ke(t.articulacao,i.atual,!0);if(r===void 0)return t.ui=[],t;r.mensagens=Re(r);const n=Z(r,!0),s=[{stateType:j.ElementoValidado,elementos:[n]}];return{articulacao:t.articulacao,modo:t.modo,past:t.past,present:t.present,future:t.future,ui:{events:s}}})(o,e);case"VALIDAR_ARTICULACAO":return(t=>{const i=[];Oo(t.articulacao,[]).forEach(n=>{const s=Re(n);(s==null?void 0:s.length)>0&&(n.mensagens=s,i.push(Z(n)))});const r=[{stateType:j.ElementoValidado,elementos:i}];return{articulacao:t.articulacao,modo:t.modo,past:t.past,present:t.present,future:t.future,ui:{events:r}}})(o);default:return o}},alertaReducer:(o={alertas:[]},e)=>{var t;switch(e.type){case"ADICIONAR_ALERTA":return{alertas:[...o.alertas,e.alerta]};case"REMOVER_ALERTA":return{alertas:(t=o.alertas)===null||t===void 0?void 0:t.filter(({id:i})=>i!==e.id)};case"LIMPAR_ALERTAS":return{alertas:[]};default:return o}}}),he=function o(e,t,i){var r;if(typeof t=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(nt(0));if(typeof t=="function"&&i===void 0&&(i=t,t=void 0),i!==void 0){if(typeof i!="function")throw new Error(nt(1));return i(o)(e,t)}if(typeof e!="function")throw new Error(nt(2));var n=e,s=t,d=[],c=d,p=!1;function u(){c===d&&(c=d.slice())}function a(){if(p)throw new Error(nt(3));return s}function l(v){if(typeof v!="function")throw new Error(nt(4));if(p)throw new Error(nt(5));var g=!0;return u(),c.push(v),function(){if(g){if(p)throw new Error(nt(6));g=!1,u();var y=c.indexOf(v);c.splice(y,1),d=null}}}function h(v){if(!Hh(v))throw new Error(nt(7));if(v.type===void 0)throw new Error(nt(8));if(p)throw new Error(nt(9));try{p=!0,s=n(s,v)}finally{p=!1}for(var g=d=c,y=0;y<g.length;y++)(0,g[y])();return v}function f(v){if(typeof v!="function")throw new Error(nt(10));n=v,h({type:yn.REPLACE})}function m(){var v,g=l;return(v={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(nt(11));function b(){y.next&&y.next(a())}return b(),{unsubscribe:g(b)}}})[wl]=function(){return this},v}return h({type:yn.INIT}),(r={dispatch:h,subscribe:l,getState:a,replaceReducer:f})[wl]=m,r}(am,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());let ps=class extends Gr(he)(tt){constructor(){super(),this.elementos=[],this.tabIndex=-1}createRenderRoot(){return this}render(){return xe`
      <style>
        lexml-eta-editor {
          display: block;
          height: 100%;
        }

        lexml-eta-editor:focus {
          outline: 0;
          border: 0px solid #f1f1f1;
          -webkit-box-shadow: 0px;
          box-shadow: none;
        }
      </style>
      <lexml-eta-editor></lexml-eta-editor>
    `}};le([Be({type:Array})],ps.prototype,"elementos",void 0),ps=le([It("lexml-eta-articulacao")],ps);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lm=2;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Bs extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}{constructor(e){if(super(e),this.it=Fe,e.type!==lm)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Fe||e==null)return this.ft=void 0,this.it=e;if(e===di)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Bs.directiveName="unsafeHTML",Bs.resultType=1;const In=(o=>(...e)=>({_$litDirective$:o,values:e}))(Bs);let hs=class extends tt{update(o){super.update(o)}buildTemplateComando(o){const e=o==null?void 0:o.reduce((t,i)=>t+`<p> ${i.cabecalho} </p>`,"");return xe`${e}`}buildTemplateCitacao(o){return o.replaceAll("<Rotulo>","<b>").replaceAll("</Rotulo>","</b> ").replaceAll("<Alteracao>",'<div class="alteracao">').replaceAll("</Alteracao>","</div> ").replaceAll("<Omissis/>"," ..........................................................")}render(){var o,e;const t=(o=this.emenda)===null||o===void 0?void 0:o.cabecalhoComum,i=(e=this.emenda)===null||e===void 0?void 0:e.comandos;return xe`
      <style>
        :host {
          --lexml-emenda-comando-height: 100%;
          --lexml-emenda-comando-overflow: hidden;
          --lexml-emenda-comando-border: 1px solid #ccc;
        }
        .lexml-emenda-comando {
          display: block;
          border: var(--lexml-emenda-comando-border);
          height: var(--lexml-emenda-comando-height);
          overflow: var(--lexml-emenda-comando-overflow);
          overflow-y: scroll;
          padding: 0 10px;
          margin: 0px 5px;
          font-size: 14px;
        }
        .lexml-emenda-comando:focus {
          outline: 0;
          border: 0px solid #f1f1f1;
          -webkit-box-shadow: 0px;
          box-shadow: none;
        }

        .lexml-emenda-tituloComando {
          margin: 3px 10px;
          text-align: center;
          font-weight: bold;
        }

        .lexml-emenda-cabecalhoComando,
        .lexml-emenda-complementoComando {
          display: block;
          margin-top: 1em;
          text-align: justify;
          text-indent: 3em;
        }

        .lexml-emenda-citacaoComando {
          display: block;
          margin-top: 1em;
        }

        .lexml-emenda-citacaoComando p {
          text-align: justify;
          text-indent: 3em;
          margin: 0;
        }

        .lexml-emenda-citacaoComando div.alteracao {
          margin-left: 4em;
        }

        .lexml-emenda-citacaoComando div.alteracao p {
          text-indent: 2em;
        }
      </style>

      <div class="lexml-emenda-comando">
        <p class="lexml-emenda-tituloComando">Comando de emenda</p>

        ${t?In(`<p class="lexml-emenda-cabecalhoComando">${t}</p>`):""}
        ${i==null?void 0:i.map(r=>In('<div class="lexml-emenda-cabecalhoComando">'+(r.rotulo?`<strong>${r.rotulo}</strong> `:"")+r.cabecalho+'</div><div class="lexml-emenda-citacaoComando">'+this.buildTemplateCitacao(r.citacao)+"</div>"+(r.complemento?'<div class="lexml-emenda-complementoComando">'+r.complemento+"</div>":"")))}
      </div>
    `}};le([Be({type:Object})],hs.prototype,"emenda",void 0),hs=le([It("lexml-emenda-comando")],hs);const cm=xe`
  <style>
    :root {
      --elemento-padding-factor: 20;
    }

    #lx-eta-box {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 30px calc(100% - 30px);
      height: 100%;
    }

    #lx-eta-box .ql-toolbar.ql-snow {
      border: 1px solid #ccc;
      box-sizing: border-box;
      padding: 3px 10px 3px 10px;
    }

    #lx-eta-box .ql-snow.ql-toolbar button,
    .ql-snow .ql-toolbar button {
      height: 20px !important;
      padding: 0px !important;
      width: 24px !important;
      margin: 0px !important;
    }

    #lx-eta-barra-ferramenta button:focus {
      outline: 0;
      border: 0px solid #f1f1f1;
      -webkit-box-shadow: 0px;
      box-shadow: none;
    }

    #lx-eta-barra-ferramenta .lx-eta-ql-button {
      font-size: 1.1em;
      color: #444444;
    }

    .lx-eta-rebate-180-graus {
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    #lx-eta-editor {
      overflow-y: auto;
    }

    #lx-eta-editor .ql-editor {
      font-family: sans-serif, 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
      font-size: 1rem;
      line-height: 1.42;
      color: #646260;
      text-transform: none !important;
      padding: 0 10px 0 8px;
      min-height: 250px;
      overflow-x: hidden;
    }

    #lx-eta-editor .ql-editor *:focus {
      outline: 0;
      border: 0px solid #f1f1f1;
      -webkit-box-shadow: 0px;
      box-shadow: none;
    }

    #lx-eta-editor .ql-editor label:before {
      content: attr(data-rotulo) ' ';
    }

    #toast-msg {
      padding: 1em;
      font-size: 1.1em;
    }

    .lx-eta-dropbtn {
      background-color: transparent;
      color: #444444;
      width: 26px;
      font-weight: bold;
      vertical-align: middle;
      border: none;
      cursor: pointer;
      text-align: center;
    }

    .lx-eta-dropdown {
      position: relative;
      display: inline-block;
    }

    .lx-eta-dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
      z-index: 1;
    }

    .lx-eta-dropdown-content div {
      color: black;
      padding: 5px 16px;
      text-decoration: none;
      display: block;
      white-space: nowrap;
      font-weight: normal !important;
      text-align: left;
      cursor: pointer;
    }

    .lx-eta-dropdown-content div:hover {
      background-color: #e5e5e5;
    }

    .lx-eta-dropdown:hover .lx-eta-dropdown-content {
      display: block;
    }

    .lx-eta-dropdown:hover .lx-eta-dropbtn {
      background-color: #e1e1e1;
    }

    .lx-eta-btn-disp-atual {
      margin-left: 10px !important;
      text-decoration: underline;
    }

    .lx-eta-btn-desfazer {
      margin-left: 10px !important;
    }

    .icon-undo-redo {
      width: 19px;
      height: 16px !important;
    }

    .icon-undo-redo:hover {
      fill: #0066cc;
    }

    .lx-eta-dropdown-content-right {
      right: 0;
    }

    .ql-snow .ql-hidden {
      display: none;
    }

    .ql-snow .ql-tooltip::before {
      content: 'Acesse a norma:';
    }

    .ql-snow .ql-tooltip a.ql-action::after {
      display: none;
    }

    .ql-snow .ql-tooltip a.ql-remove::before {
      display: none;
    }

    .ql-snow .ql-tooltip a.ql-preview {
      max-width: 300px;
    }

    .btn--artigoOndeCouber {
    }

    .container__linha {
      display: flex;
      width: 100%;
    }

    .container__linha--reverse {
      flex-direction: row-reverse;
    }

    .container__texto {
      flex: 1;
    }

    .container__menu {
      width: 30px;
      vertical-align: top;
      text-align: center;
    }

    .container__elemento--padrao {
      width: 100%;
      min-height: 26px;
      border: 3px solid #ffffff;
      line-height: 1.42;
      margin: 0;
      padding: 0 5px 0 0;
    }

    .container__elemento--articulacao {
      width: 100%;
      min-height: 1px;
      line-height: 0.42;
      margin: 1px;
    }

    .agrupador {
      text-align: center;
    }

    .rotulo {
      cursor: pointer;
    }

    .texto__rotulo {
      color: black;
      font-weight: 600;
      font-size: 1rem;
    }

    .texto__rotulo--agrupador {
      display: block;
    }

    .texto__rotulo--padrao {
      float: left;
      margin-right: 10px;
    }

    .Omissis {
      word-break: break-all;
      word-break: break-word;
      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
    }

    .dispositivo--adicionado {
      color: green;
    }

    .dispositivo--modificado {
      color: blue;
    }

    .dispositivo--suprimido {
      color: red;
    }

    .texto--suprimido {
      text-decoration: line-through;
    }

    .container__elemento--ativo {
      border: 3px solid #24d421;
      border-radius: 4px;
    }

    .mensagem {
      font-size: 0.8em;
      font-weight: normal;
      border: 1px solid;
      padding: 4px 10px;
      margin: 2px;
      display: inline-block;
      border-radius: 2px;
    }

    .mensagem--success {
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
    }

    .mensagem--info {
      color: #0c5460;
      background-color: #d1ecf1;
      border-color: #bee5eb;
    }

    .mensagem--warning {
      color: #856404;
      background-color: #fff3cd;
      border-color: #ffeeba;
    }

    .mensagem--danger {
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    }

    lexml-eta-help {
      float: right;
    }

    #lx-eta-buffer {
      display: none;
      height: 0px;
    }
  </style>
`,um=xe`
  <style>
    /*!
    * Quill Editor v1.3.7
    * https://quilljs.com/
    * Copyright (c) 2014, Jason Chen
    * Copyright (c) 2013, salesforce.com
    */
    .ql-container {
      box-sizing: border-box;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 13px;
      height: 100%;
      margin: 0px;
      position: relative;
    }
    .ql-container.ql-disabled .ql-tooltip {
      visibility: hidden;
    }
    .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
      pointer-events: none;
    }
    .ql-clipboard {
      left: -100000px;
      height: 1px;
      overflow-y: hidden;
      position: absolute;
      top: 50%;
    }
    .ql-clipboard p {
      margin: 0;
      padding: 0;
    }
    .ql-editor {
      box-sizing: border-box;
      line-height: 1.42;
      height: 100%;
      outline: none;
      overflow-y: auto;
      padding: 12px 15px;
      tab-size: 4;
      -moz-tab-size: 4;
      text-align: left;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .ql-editor > * {
      cursor: text;
    }
    .ql-editor p,
    .ql-editor ol,
    .ql-editor ul,
    .ql-editor pre,
    .ql-editor blockquote,
    .ql-editor h1,
    .ql-editor h2,
    .ql-editor h3,
    .ql-editor h4,
    .ql-editor h5,
    .ql-editor h6 {
      margin: 0;
      padding: 0;
      counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol,
    .ql-editor ul {
      padding-left: 1.5em;
    }
    .ql-editor ol > li,
    .ql-editor ul > li {
      list-style-type: none;
    }
    .ql-editor ul > li::before {
      content: '\\2022';
    }
    .ql-editor ul[data-checked='true'],
    .ql-editor ul[data-checked='false'] {
      pointer-events: none;
    }
    .ql-editor ul[data-checked='true'] > li *,
    .ql-editor ul[data-checked='false'] > li * {
      pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before,
    .ql-editor ul[data-checked='false'] > li::before {
      color: #777;
      cursor: pointer;
      pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before {
      content: '\\2611';
    }
    .ql-editor ul[data-checked='false'] > li::before {
      content: '\\2610';
    }
    .ql-editor li::before {
      display: inline-block;
      white-space: nowrap;
      width: 1.2em;
    }
    .ql-editor li:not(.ql-direction-rtl)::before {
      margin-left: -1.5em;
      margin-right: 0.3em;
      text-align: right;
    }
    .ql-editor li.ql-direction-rtl::before {
      margin-left: 0.3em;
      margin-right: -1.5em;
    }
    .ql-editor ol li:not(.ql-direction-rtl),
    .ql-editor ul li:not(.ql-direction-rtl) {
      padding-left: 1.5em;
    }
    .ql-editor ol li.ql-direction-rtl,
    .ql-editor ul li.ql-direction-rtl {
      padding-right: 1.5em;
    }
    .ql-editor ol li {
      counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
      counter-increment: list-0;
    }
    .ql-editor ol li:before {
      content: counter(list-0, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
      counter-increment: list-1;
    }
    .ql-editor ol li.ql-indent-1:before {
      content: counter(list-1, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
      counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-2 {
      counter-increment: list-2;
    }
    .ql-editor ol li.ql-indent-2:before {
      content: counter(list-2, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-2 {
      counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-3 {
      counter-increment: list-3;
    }
    .ql-editor ol li.ql-indent-3:before {
      content: counter(list-3, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-3 {
      counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-4 {
      counter-increment: list-4;
    }
    .ql-editor ol li.ql-indent-4:before {
      content: counter(list-4, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-4 {
      counter-reset: list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-5 {
      counter-increment: list-5;
    }
    .ql-editor ol li.ql-indent-5:before {
      content: counter(list-5, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-5 {
      counter-reset: list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-6 {
      counter-increment: list-6;
    }
    .ql-editor ol li.ql-indent-6:before {
      content: counter(list-6, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-6 {
      counter-reset: list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-7 {
      counter-increment: list-7;
    }
    .ql-editor ol li.ql-indent-7:before {
      content: counter(list-7, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-7 {
      counter-reset: list-8 list-9;
    }
    .ql-editor ol li.ql-indent-8 {
      counter-increment: list-8;
    }
    .ql-editor ol li.ql-indent-8:before {
      content: counter(list-8, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-8 {
      counter-reset: list-9;
    }
    .ql-editor ol li.ql-indent-9 {
      counter-increment: list-9;
    }
    .ql-editor ol li.ql-indent-9:before {
      content: counter(list-9, decimal) '. ';
    }
    .ql-editor .ql-indent-1:not(.ql-direction-rtl) {
      text-indent: 6em;
      padding-left: 3em;
    }
    .ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
      padding-left: 4.5em;
    }
    .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
      padding-right: 3em;
    }
    .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
      padding-right: 4.5em;
    }
    .ql-editor .ql-indent-2:not(.ql-direction-rtl) {
      padding-left: 6em;
    }
    .ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
      padding-left: 7.5em;
    }
    .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
      padding-right: 6em;
    }
    .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
      padding-right: 7.5em;
    }
    .ql-editor .ql-indent-3:not(.ql-direction-rtl) {
      padding-left: 9em;
    }
    .ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
      padding-left: 10.5em;
    }
    .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
      padding-right: 9em;
    }
    .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
      padding-right: 10.5em;
    }
    .ql-editor .ql-indent-4:not(.ql-direction-rtl) {
      padding-left: 12em;
    }
    .ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
      padding-left: 13.5em;
    }
    .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
      padding-right: 12em;
    }
    .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
      padding-right: 13.5em;
    }
    .ql-editor .ql-indent-5:not(.ql-direction-rtl) {
      padding-left: 15em;
    }
    .ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
      padding-left: 16.5em;
    }
    .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
      padding-right: 15em;
    }
    .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
      padding-right: 16.5em;
    }
    .ql-editor .ql-indent-6:not(.ql-direction-rtl) {
      padding-left: 18em;
    }
    .ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
      padding-left: 19.5em;
    }
    .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
      padding-right: 18em;
    }
    .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
      padding-right: 19.5em;
    }
    .ql-editor .ql-indent-7:not(.ql-direction-rtl) {
      padding-left: 21em;
    }
    .ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
      padding-left: 22.5em;
    }
    .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
      padding-right: 21em;
    }
    .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
      padding-right: 22.5em;
    }
    .ql-editor .ql-indent-8:not(.ql-direction-rtl) {
      padding-left: 24em;
    }
    .ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
      padding-left: 25.5em;
    }
    .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
      padding-right: 24em;
    }
    .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
      padding-right: 25.5em;
    }
    .ql-editor .ql-indent-9:not(.ql-direction-rtl) {
      padding-left: 27em;
    }
    .ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
      padding-left: 28.5em;
    }
    .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
      padding-right: 27em;
    }
    .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
      padding-right: 28.5em;
    }
    .ql-editor .ql-video {
      display: block;
      max-width: 100%;
    }
    .ql-editor .ql-video.ql-align-center {
      margin: 0 auto;
    }
    .ql-editor .ql-video.ql-align-right {
      margin: 0 0 0 auto;
    }
    .ql-editor .ql-bg-black {
      background-color: #000;
    }
    .ql-editor .ql-bg-red {
      background-color: #e60000;
    }
    .ql-editor .ql-bg-orange {
      background-color: #f90;
    }
    .ql-editor .ql-bg-yellow {
      background-color: #ff0;
    }
    .ql-editor .ql-bg-green {
      background-color: #008a00;
    }
    .ql-editor .ql-bg-blue {
      background-color: #06c;
    }
    .ql-editor .ql-bg-purple {
      background-color: #93f;
    }
    .ql-editor .ql-color-white {
      color: #fff;
    }
    .ql-editor .ql-color-red {
      color: #e60000;
    }
    .ql-editor .ql-color-orange {
      color: #f90;
    }
    .ql-editor .ql-color-yellow {
      color: #ff0;
    }
    .ql-editor .ql-color-green {
      color: #008a00;
    }
    .ql-editor .ql-color-blue {
      color: #06c;
    }
    .ql-editor .ql-color-purple {
      color: #93f;
    }
    .ql-editor .ql-font-serif {
      font-family: Georgia, Times New Roman, serif;
    }
    .ql-editor .ql-font-monospace {
      font-family: Monaco, Courier New, monospace;
    }
    .ql-editor .ql-size-small {
      font-size: 0.75em;
    }
    .ql-editor .ql-size-large {
      font-size: 1.5em;
    }
    .ql-editor .ql-size-huge {
      font-size: 2.5em;
    }
    .ql-editor .ql-direction-rtl {
      direction: rtl;
      text-align: inherit;
    }
    .ql-editor .ql-align-center {
      text-align: center;
    }
    .ql-editor .ql-align-justify {
      text-align: justify;
    }
    .ql-editor .ql-align-right {
      text-align: right;
    }
    .ql-editor.ql-blank::before {
      color: rgba(0, 0, 0, 0.6);
      content: attr(data-placeholder);
      font-style: italic;
      left: 15px;
      pointer-events: none;
      position: absolute;
      right: 15px;
    }
    .ql-snow.ql-toolbar:after,
    .ql-snow .ql-toolbar:after {
      clear: both;
      content: '';
      display: table;
    }
    .ql-snow.ql-toolbar button,
    .ql-snow .ql-toolbar button {
      background: none;
      border: none;
      cursor: pointer;
      display: inline-block;
      float: left;
      height: 24px;
      padding: 3px 5px;
      width: 28px;
    }
    .ql-snow.ql-toolbar button svg,
    .ql-snow .ql-toolbar button svg {
      float: left;
      height: 100%;
    }
    .ql-snow.ql-toolbar button:active:hover,
    .ql-snow .ql-toolbar button:active:hover {
      outline: none;
    }
    .ql-snow.ql-toolbar input.ql-image[type='file'],
    .ql-snow .ql-toolbar input.ql-image[type='file'] {
      display: none;
    }
    .ql-snow.ql-toolbar button:hover,
    .ql-snow .ql-toolbar button:hover,
    .ql-snow.ql-toolbar button:focus,
    .ql-snow .ql-toolbar button:focus,
    .ql-snow.ql-toolbar button.ql-active,
    .ql-snow .ql-toolbar button.ql-active,
    .ql-snow.ql-toolbar .ql-picker-label:hover,
    .ql-snow .ql-toolbar .ql-picker-label:hover,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active,
    .ql-snow.ql-toolbar .ql-picker-item:hover,
    .ql-snow .ql-toolbar .ql-picker-item:hover,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
      color: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
      fill: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-stroke,
    .ql-snow .ql-toolbar button:hover .ql-stroke,
    .ql-snow.ql-toolbar button:focus .ql-stroke,
    .ql-snow .ql-toolbar button:focus .ql-stroke,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
      stroke: #06c;
    }
    @media (pointer: coarse) {
      .ql-snow.ql-toolbar button:hover:not(.ql-active),
      .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
      }
      .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
      .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
      .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
      .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
      }
      .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
      .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
      .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
      .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
      }
    }
    .ql-snow {
      box-sizing: border-box;
    }
    .ql-snow * {
      box-sizing: border-box;
    }
    .ql-snow .ql-hidden {
      display: none;
    }
    .ql-snow .ql-out-bottom,
    .ql-snow .ql-out-top {
      visibility: hidden;
    }
    .ql-snow .ql-tooltip {
      position: absolute;
      transform: translateY(10px);
    }
    .ql-snow .ql-tooltip a {
      cursor: pointer;
      text-decoration: none;
    }
    .ql-snow .ql-tooltip.ql-flip {
      transform: translateY(-10px);
    }
    .ql-snow .ql-formats {
      display: inline-block;
      vertical-align: middle;
    }
    .ql-snow .ql-formats:after {
      clear: both;
      content: '';
      display: table;
    }
    .ql-snow .ql-stroke {
      fill: none;
      stroke: #444;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 2;
    }
    .ql-snow .ql-stroke-miter {
      fill: none;
      stroke: #444;
      stroke-miterlimit: 10;
      stroke-width: 2;
    }
    .ql-snow .ql-fill,
    .ql-snow .ql-stroke.ql-fill {
      fill: #444;
    }
    .ql-snow .ql-empty {
      fill: none;
    }
    .ql-snow .ql-even {
      fill-rule: evenodd;
    }
    .ql-snow .ql-thin,
    .ql-snow .ql-stroke.ql-thin {
      stroke-width: 1;
    }
    .ql-snow .ql-transparent {
      opacity: 0.4;
    }
    .ql-snow .ql-direction svg:last-child {
      display: none;
    }
    .ql-snow .ql-direction.ql-active svg:last-child {
      display: inline;
    }
    .ql-snow .ql-direction.ql-active svg:first-child {
      display: none;
    }
    .ql-snow .ql-editor h1 {
      font-size: 2em;
    }
    .ql-snow .ql-editor h2 {
      font-size: 1.5em;
    }
    .ql-snow .ql-editor h3 {
      font-size: 1.17em;
    }
    .ql-snow .ql-editor h4 {
      font-size: 1em;
    }
    .ql-snow .ql-editor h5 {
      font-size: 0.83em;
    }
    .ql-snow .ql-editor h6 {
      font-size: 0.67em;
    }
    .ql-snow .ql-editor a {
      text-decoration: underline;
    }
    .ql-snow .ql-editor blockquote {
      border-left: 4px solid #ccc;
      margin-bottom: 5px;
      margin-top: 5px;
      padding-left: 16px;
    }
    .ql-snow .ql-editor code,
    .ql-snow .ql-editor pre {
      background-color: #f0f0f0;
      border-radius: 3px;
    }
    .ql-snow .ql-editor pre {
      white-space: pre-wrap;
      margin-bottom: 5px;
      margin-top: 5px;
      padding: 5px 10px;
    }
    .ql-snow .ql-editor code {
      font-size: 85%;
      padding: 2px 4px;
    }
    .ql-snow .ql-editor pre.ql-syntax {
      background-color: #23241f;
      color: #f8f8f2;
      overflow: visible;
    }
    .ql-snow .ql-editor img {
      max-width: 100%;
    }
    .ql-snow .ql-picker {
      color: #444;
      display: inline-block;
      float: left;
      font-size: 14px;
      font-weight: 500;
      height: 24px;
      position: relative;
      vertical-align: middle;
    }
    .ql-snow .ql-picker-label {
      cursor: pointer;
      display: inline-block;
      height: 100%;
      padding-left: 8px;
      padding-right: 2px;
      position: relative;
      width: 100%;
    }
    .ql-snow .ql-picker-label::before {
      display: inline-block;
      line-height: 22px;
    }
    .ql-snow .ql-picker-options {
      background-color: #fff;
      display: none;
      min-width: 100%;
      padding: 4px 8px;
      position: absolute;
      white-space: nowrap;
    }
    .ql-snow .ql-picker-options .ql-picker-item {
      cursor: pointer;
      display: block;
      padding-bottom: 5px;
      padding-top: 5px;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label {
      color: #ccc;
      z-index: 2;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
      fill: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
      stroke: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-options {
      display: block;
      margin-top: -1px;
      top: 100%;
      z-index: 1;
    }
    .ql-snow .ql-color-picker,
    .ql-snow .ql-icon-picker {
      width: 28px;
    }
    .ql-snow .ql-color-picker .ql-picker-label,
    .ql-snow .ql-icon-picker .ql-picker-label {
      padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-label svg,
    .ql-snow .ql-icon-picker .ql-picker-label svg {
      right: 4px;
    }
    .ql-snow .ql-icon-picker .ql-picker-options {
      padding: 4px 0px;
    }
    .ql-snow .ql-icon-picker .ql-picker-item {
      height: 24px;
      width: 24px;
      padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-options {
      padding: 3px 5px;
      width: 152px;
    }
    .ql-snow .ql-color-picker .ql-picker-item {
      border: 1px solid transparent;
      float: left;
      height: 16px;
      margin: 2px;
      padding: 0px;
      width: 16px;
    }
    .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
      position: absolute;
      margin-top: -9px;
      right: 0;
      top: 50%;
      width: 18px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
      content: attr(data-label);
    }
    .ql-snow .ql-picker.ql-header {
      width: 98px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item::before {
      content: 'Normal';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
      content: 'Heading 1';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
      content: 'Heading 2';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
      content: 'Heading 3';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
      content: 'Heading 4';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
      content: 'Heading 5';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
      content: 'Heading 6';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
      font-size: 2em;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
      font-size: 1.5em;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
      font-size: 1.17em;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
      font-size: 1em;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
      font-size: 0.83em;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
      font-size: 0.67em;
    }
    .ql-snow .ql-picker.ql-font {
      width: 108px;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item::before {
      content: 'Sans Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
      content: 'Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
      content: 'Monospace';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
      font-family: Georgia, Times New Roman, serif;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
      font-family: Monaco, Courier New, monospace;
    }
    .ql-snow .ql-picker.ql-size {
      width: 98px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item::before {
      content: 'Normal';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
      content: 'Small';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
      content: 'Large';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
      content: 'Huge';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
      font-size: 10px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
      font-size: 18px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
      font-size: 32px;
    }
    .ql-snow .ql-color-picker.ql-background .ql-picker-item {
      background-color: #fff;
    }
    .ql-snow .ql-color-picker.ql-color .ql-picker-item {
      background-color: #000;
    }
    .ql-toolbar.ql-snow {
      border: 1px solid #ccc;
      box-sizing: border-box;
      font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
      padding: 8px;
    }
    .ql-toolbar.ql-snow .ql-formats {
      margin-right: 15px;
    }
    .ql-toolbar.ql-snow .ql-picker-label {
      border: 1px solid transparent;
    }
    .ql-toolbar.ql-snow .ql-picker-options {
      border: 1px solid transparent;
      box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
      border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
      border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
      border-color: #000;
    }
    .ql-toolbar.ql-snow + .ql-container.ql-snow {
      border-top: 0px;
    }
    .ql-snow .ql-tooltip {
      background-color: #fff;
      border: 1px solid #ccc;
      box-shadow: 0px 0px 5px #ddd;
      color: #444;
      padding: 5px 12px;
      white-space: nowrap;
    }
    .ql-snow .ql-tooltip::before {
      content: 'Visit URL:';
      line-height: 26px;
      margin-right: 8px;
    }
    .ql-snow .ql-tooltip input[type='text'] {
      display: none;
      border: 1px solid #ccc;
      font-size: 13px;
      height: 26px;
      margin: 0px;
      padding: 3px 5px;
      width: 170px;
    }
    .ql-snow .ql-tooltip a.ql-preview {
      display: inline-block;
      max-width: 200px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      vertical-align: top;
    }
    .ql-snow .ql-tooltip a.ql-action::after {
      border-right: 1px solid #ccc;
      content: 'Edit';
      margin-left: 16px;
      padding-right: 8px;
    }
    .ql-snow .ql-tooltip a.ql-remove::before {
      content: 'Remove';
      margin-left: 8px;
    }
    .ql-snow .ql-tooltip a {
      line-height: 26px;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-preview,
    .ql-snow .ql-tooltip.ql-editing a.ql-remove {
      display: none;
    }
    .ql-snow .ql-tooltip.ql-editing input[type='text'] {
      display: inline-block;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
      border-right: 0px;
      content: 'Save';
      padding-right: 0px;
    }
    .ql-snow .ql-tooltip[data-mode='link']::before {
      content: 'Enter link:';
    }
    .ql-snow .ql-tooltip[data-mode='formula']::before {
      content: 'Enter formula:';
    }
    .ql-snow .ql-tooltip[data-mode='video']::before {
      content: 'Enter video:';
    }
    .ql-snow a {
      color: #06c;
    }
    .ql-container.ql-snow {
      border: 1px solid #ccc;
    }
  </style>
`;class Zl extends class{}{constructor(){super(...arguments),this.nivel=0,this.rotulo="",this.agrupador=!1,this.editavel=!0,this.sendoEditado=!1,this.index=0}}const Oi=(o,e)=>new ie(D[e.toLowerCase()],"Transformar "+o.tipo+"em "+D[e.toLowerCase()].name,"transformar"+o.tipo+"Em"+D[e.toLowerCase()].name).execute(o),dm=Quill.import("blots/block");class fo extends dm{get linha(){return this.parent.parent.parent}get tamanho(){return this.length()-1}get tagName(){return this.domNode.tagName}get html(){return this.domNode.innerHTML!=="<br>"?this.domNode.innerHTML.replace("&nbsp;",""):""}set html(e){this.domNode.innerHTML=e}constructor(e){super(e)}}var zr;(function(o){o[o.Esquerda=0]="Esquerda",o[o.Direita=1]="Direita"})(zr||(zr={}));class io extends fo{constructor(){super(io.create())}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.setAttribute("class",io.className),e}}io.blotName="blotMenu",io.tagName="DIV",io.className="lx-eta-dropdown";class So extends fo{constructor(){super(So.create())}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.setAttribute("class",So.className),e.innerHTML="&vellip;",e}}So.blotName="blotMenuBotao",So.tagName="DIV",So.className="lx-eta-dropbtn";class ko extends fo{constructor(e){super(ko.create(e))}static create(e){const t=super.create(),i=e===zr.Esquerda?"":" lx-eta-dropdown-content-right";return t.setAttribute("contenteditable","false"),t.setAttribute("class",ko.className+i),t}}ko.blotName="blotMenuConteudo",ko.tagName="DIV",ko.className="lx-eta-dropdown-content";class Po extends fo{constructor(e,t){super(Po.create(e,t))}static create(e,t){var i;const r=super.create();return r.setAttribute("contenteditable","false"),r.setAttribute("class",Po.className),r.innerHTML=(i=e.descricao)!==null&&i!==void 0?i:"",r.addEventListener("mousedown",()=>{var n;if(e.descricao==pa.descricao){const s=(n=document.getSelection())===null||n===void 0?void 0:n.focusOffset;localStorage.setItem("indexCursor",JSON.stringify(s))}t(e.descricao)}),r}}Po.blotName="blotMenuItem",Po.tagName="DIV",Po.className="lx-eta-dropdown-content-item";class Je extends fo{constructor(e){super(Je.create(e))}static create(e){const t=super.create();return t.setAttribute("contenteditable","false"),t.setAttribute("class",Je.getClasseCSS(e.agrupador)),t.setAttribute("data-rotulo",e.rotulo),t.innerHTML="",t.onclick=()=>t.dispatchEvent(new CustomEvent("rotulo",{bubbles:!0,cancelable:!0,detail:{elemento:e}})),t}get rotulo(){return this.domNode.getAttribute("data-rotulo")}format(e,t){e===Je.blotName?this.domNode.setAttribute("data-rotulo",t):e===Je.formatoStyle?this.domNode.setAttribute("style",Je.criarAtributoStyle(t)):super.format(e,t)}static criarAtributoStyle(e){let t=e.tipo==="Articulacao"?"color: #373634; font-weight: 600; line-height: 0.42;":"color: #373634; font-weight: 600; line-height: 1.42;";return t=e.agrupador?`${t} display: block; font-size: 1rem; text-align: center;`:`${t} float: left; margin-right: 10px;`,t}static getClasseCSS(e){return"texto__rotulo"+(e?" texto__rotulo--agrupador":" texto__rotulo--padrao")}}Je.blotName="rotulo",Je.tagName="LABEL",Je.formatoStyle="STYLE";class Ct extends fo{constructor(){super(Ct.create())}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.innerHTML="&nbsp;",e}}Ct.blotName="espaco",Ct.tagName="ESPACO",Ct.className="espaco";const pm=Quill.import("blots/container");class Ye extends pm{constructor(e){var t,i,r,n,s;super(Ye.create(e)),this._lexmlId=(t=e.lexmlId)!==null&&t!==void 0?t:"",this._editavel=e.editavel,this._nivel=e.nivel,this._numero=(i=e.numero)!==null&&i!==void 0?i:"",this._tipo=(r=e.tipo)!==null&&r!==void 0?r:"",this._agrupador=e.agrupador,this._hierarquia=!((s=(n=e.hierarquia)===null||n===void 0?void 0:n.pai)===null||s===void 0)&&s.uuidAlteracao?e.hierarquia:void 0,this._descricaoSituacao=e.descricaoSituacao?e.descricaoSituacao:void 0,this._existeNaNormaAlterada=e.existeNaNormaAlterada}static criarId(e){return`lxEtaId${e!=null?e:0}`}static create(e){const t=super.create();return t.setAttribute("contenteditable",e!=null&&e.editavel?"true":"false"),t.setAttribute("class",Ye.className+" "+Ye.getClasseCSS(e)),t.setAttribute("id",Ye.criarId(e.uuid)),t.setAttribute("cellpadding","0"),t.setAttribute("cellspacing","0"),t.setAttribute("border","0"),t}get blotRotulo(){var e,t;return(t=(e=this.children.head)===null||e===void 0?void 0:e.children)===null||t===void 0?void 0:t.head.children.head}get blotConteudo(){var e;return(e=this.blotRotulo)===null||e===void 0?void 0:e.next}get containerDireito(){return this.children.head.children.tail}get blotContainerDireito(){return this.containerDireito.children.head}get tamanho(){return this.length()-1}get id(){var e;return(e=this.domNode.getAttribute("id"))!==null&&e!==void 0?e:""}set agrupador(e){this._agrupador=e}get agrupador(){return this._agrupador}set editavel(e){this._editavel=e,this.blotConteudo.domNode.contentEditable=this._editavel}get editavel(){return this._editavel}set hierarquia(e){this._hierarquia=e}get hierarquia(){return this._hierarquia}set nivel(e){this._nivel=e}get nivel(){return this._nivel}set numero(e){this._numero=e}get numero(){return this._numero}set tipo(e){this._tipo=e}get tipo(){return this._tipo}set descricaoSituacao(e){this._descricaoSituacao=e}get descricaoSituacao(){return this._descricaoSituacao}set existeNaNormaAlterada(e){this._existeNaNormaAlterada=e}get existeNaNormaAlterada(){return this._existeNaNormaAlterada}get uuid(){return parseInt(this.id.substr(7),0)}set lexmlId(e){this._lexmlId=e}get lexmlId(){var e;return(e=this._lexmlId)!==null&&e!==void 0?e:""}get html(){return this.domNode.innerHTML!=="<br>"?this.domNode.innerHTML:""}set html(e){this.domNode.innerHTML=e}setEstilo(e){let t="",i="texto__dispositivo";switch(e.descricaoSituacao){case L.DISPOSITIVO_ADICIONADO:t="dispositivo--adicionado";break;case L.DISPOSITIVO_MODIFICADO:t="dispositivo--modificado";break;case L.DISPOSITIVO_SUPRIMIDO:t="dispositivo--suprimido",i="texto--suprimido"}this.blotRotulo.domNode.setAttribute("class",`${Je.getClasseCSS(this._agrupador)} ${t} ${e.numero===void 0?"rotulo":""}`),this.blotConteudo.domNode.setAttribute("class",`${t} ${i}`)}format(e,t){e===Ye.blotName?this.domNode.setAttribute("style",Ye.criarAtributoStyle(t)):super.format(e,t)}ativarBorda(){this.domNode.classList.add("container__elemento--ativo")}desativarBorda(){this.domNode.classList.remove("container__elemento--ativo"),this.limparContainerDireito()}limparContainerDireito(){this.blotContainerDireito.tagName!==Ct.tagName&&(this.blotContainerDireito.remove(),new Ct().insertInto(this.containerDireito))}static criarAtributoStyle(e){let t=e.tipo==="Articulacao"?"width: 100%; min-height: 1px; line-height: 0.42; margin: 1px":"width: 100%; min-height: 26px; border: 1px solid #ffffff; line-height: 1.42; margin: 0px 2px 0px 5px !important;";return e.agrupador&&(t=`${t} text-align: center;`),t}static getClasseCSS(e){let t=e.tipo==="Articulacao"?"container__elemento--articulacao":"container__elemento--padrao";return e.agrupador&&(t=`${t} agrupador`),t}}function Pe(o){o.stopPropagation(),o.preventDefault()}Ye.blotName="containerTable",Ye.tagName="DIV",Ye.className="container__elemento";class hm{constructor(e,t){this.callback=e,this.canceled=t}isCanceled(){var e;return(e=this.canceled)!==null&&e!==void 0&&e}cancel(){this.canceled=!0}}class _t{constructor(){this.subscriptions=[]}subscribe(e){const t=new hm(e);return this.subscriptions.push(t),t}notify(e){this.subscriptions.forEach(t=>{t.isCanceled()||setTimeout(()=>{t.callback(e)},1)})}clean(){this.subscriptions=[]}}const fm=/([a-zA-Z0-9áéíóúÁÉÍÓÚãẽĩõũÃẼĨÕŨàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛçÇýÝỹỸỳỲÿŸŶŷñÑ '!@#$%&*()_\-+=`'{[^~}\]<,>.:;?/|\\ªº¹²³£¢¬§¿¡“”])/i,mm=/([^a-zA-Z0-9áéíóúÁÉÍÓÚãẽĩõũÃẼĨÕŨàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛçÇýÝỹỸỳỲÿŸŶŷñÑ '!@#$%&*()_\-+=`'{[^~}\]<,>.:;?/|\\ªº¹²³£¢¬§¿¡“”])/gi,xd=Quill.import("modules/keyboard");class vm extends xd{constructor(e,t){super(e,t),this.operacaoTecladoInvalida=new _t,this.adicionaElementoTeclaEnter=new _t,this.removeElemento=new _t,this.removeElementoSemTexto=new _t,this.renumeraElemento=new _t,this.transformaElemento=new _t,this.moveElemento=new _t,this.onChange=new _t,this.altGraphPressionado=!1}listen(){this.quill.root.addEventListener("keyup",e=>{e.key==="AltGraph"&&(this.altGraphPressionado=!1),!e.ctrlKey||e.altKey||e.shiftKey||!"biBI".includes(e.key)?this.quill.cursorDeTextoEstaSobreLink()||e.key==="Backspace"&&this.quill.cursorDeTextoEstaSobreLink(-1)||!this.isTeclaQueAlteraTexto(e)||this.onChange.notify("keyboard"):this.onHotKeyToolbar()}),this.quill.root.addEventListener("keypress",e=>{this.quill.cursorDeTextoEstaSobreLink()&&e.key.length===1&&Pe(e)}),this.quill.root.addEventListener("keydown",e=>{if(e.key==="AltGraph"&&(this.altGraphPressionado=!0),this.quill.cursorDeTextoEstaSobreLink()||e.key==="Backspace"&&this.quill.cursorDeTextoEstaSobreLink(-1)){if(["Delete","Backspace"].includes(e.key)||!e.ctrlKey&&e.key.length===1||e.ctrlKey&&"xvXV".includes(e.key)||e.altKey&&"0123456789".includes(e.key))return void Pe(e)}else e.ctrlKey?(e.altKey||e.metaKey||(e.key==="Delete"?Pe(e):e.key==="Home"?this.onTeclaHome(e):e.key==="End"?this.onTeclaEnd(e):e.key==="ArrowUp"||e.key==="ArrowDown"?this.onHotKeyMover(e):e.key.toLowerCase()!=="a"||e.shiftKey?e.key.toLowerCase()==="d"?this.onTeclaCtrlD(e):e.key.toLowerCase()==="z"?this.onTeclaCtrlZ(e):e.key.toLowerCase()==="y"?this.onTeclaCtrlY(e):e.ctrlKey&&e.shiftKey&&e.key.toLowerCase()==="a"?this.onTeclaCtrlShiftA(e):e.key!=="b"&&e.key!=="i"&&e.key!=="x"&&e.key!=="v"||this.onValidarTecla(e):this.onTeclaCtrlA(e)),(e.altKey||e.metaKey)&&(["a","l","n","o","p","t"].includes(e.key.toLowerCase())?this.onHotKeyTransformacaoTipo(e):e.key.toLowerCase()==="r"&&this.onHotKeyRenumeraDispositivo(e))):e.key==="ArrowRight"?this.onTeclaArrowRight(e):e.key==="ArrowLeft"?this.onTeclaArrowLeft(e):e.key==="ArrowDown"||e.key==="ArrowUp"?this.onTeclaArrowDownOuUp(e):e.key==="Enter"?this.onTeclaEnter(e):e.key==="Escape"?this.onTeclaEscape(e):e.key==="Delete"?this.onTeclaDelete(e):e.key==="Backspace"?this.onTeclaBackspace(e):e.key==="Tab"?this.onTeclaTab(e):e.key.length===1&&fm.test(e.key)&&this.onValidarTecla(e)}),super.listen()}isTeclaComCaracterGrafico(e){return e.location!==3&&"123456=[]/".includes(e.key)}isTeclaQueAlteraTexto(e){return!(e.ctrlKey||e.altKey||e.metaKey)&&!(this.altGraphPressionado&&!this.isTeclaComCaracterGrafico(e))&&!(!["Delete","Backspace"].includes(e.key)&&e.key.length!==1)}verificarOperacaoTecladoPermitida(){const e=this.quill.textoSelecionado;if(e.conteudo&&e.quantidadeCR>0){if(e.quantidadeCR===1&&/\n$/gi.test(e.conteudo)){const t=this.quill.getSelection(!0);return this.quill.setSelection(t.index,t.length-1,Quill.sources.API),!0}return this.operacaoTecladoInvalida.notify(),!1}return!0}onTeclaArrowRight(e){const t=this.quill.getSelection(!0),[i,r]=this.quill.getLine(t.index);r===i.tamanho&&(i.linha.next&&this.quill.setIndex(this.quill.getIndex(i.linha.next.blotConteudo),Quill.sources.USER),Pe(e))}onTeclaArrowLeft(e){const t=this.quill.getSelection(!0),[i,r]=this.quill.getLine(t.index);if(r===0){if(i.linha.prev){const n=i.linha.prev,s=this.quill.getIndex(n.blotConteudo)+n.blotConteudo.tamanho;this.quill.setIndex(s,Quill.sources.USER)}Pe(e)}}onTeclaArrowDownOuUp(e){this.quill.isProcessandoMudancaLinha&&Pe(e)}onTeclaEnter(e){if(this.verificarOperacaoTecladoPermitida()){const t=this.quill.getSelection(!0);this.quill.setSelection(t.index,0,Quill.sources.SILENT),this.adicionaElementoTeclaEnter.notify(t)}Pe(e)}onTeclaEscape(e){const t=this.quill.getSelection(!0);this.quill.setIndex(t.index,Quill.sources.SILENT),this.quill.setSelection(this.quill.inicioConteudoAtual,0,Quill.sources.SILENT),Pe(e)}onTeclaDelete(e){const t=this.quill.getSelection(!0);this.quill.linhaAtual.blotConteudo.html?this.verificarOperacaoTecladoPermitida()&&t.index!==this.quill.fimConteudoAtual||Pe(e):(Pe(e),this.removeElementoSemTexto.notify(e.key))}onTeclaBackspace(e){const t=this.quill.getSelection(!0);this.quill.linhaAtual.blotConteudo.html?(!this.verificarOperacaoTecladoPermitida()||t.index===this.quill.inicioConteudoAtual&&t.length===0)&&Pe(e):(Pe(e),this.removeElementoSemTexto.notify(e.key))}onValidarTecla(e){this.verificarOperacaoTecladoPermitida()||Pe(e)}onTeclaHome(e){const t=this.quill.getIndex(this.quill.getPrimeiraLinha().blotConteudo);this.quill.setIndex(t,Quill.sources.USER),this.quill.scroll.domNode.scrollTo(0,0),Pe(e)}onTeclaEnd(e){var t,i;const r=(i=this.quill.getIndex(this.quill.getUltimaLinha().blotConteudo)+((t=this.quill.getUltimaLinha().blotConteudo)===null||t===void 0?void 0:t.tamanho))!==null&&i!==void 0?i:0;this.quill.setIndex(r,Quill.sources.USER),this.quill.scroll.domNode.scrollTo(0,this.quill.scroll.domNode.scrollHeight),Pe(e)}onTeclaCtrlD(e){this.removeElemento.notify(),Pe(e)}onTeclaTab(e){this.transformaElemento.notify(e),Pe(e)}onTeclaCtrlZ(e){this.quill.undo(),Pe(e)}onTeclaCtrlY(e){this.quill.redo(),Pe(e)}onTeclaCtrlA(e){const t=this.quill.getIndex(this.quill.scroll.children.head.blotConteudo);this.quill.setSelection(t,this.quill.getLength(),Quill.sources.SILENT),Pe(e)}onTeclaCtrlShiftA(e){this.quill.setSelection(this.quill.inicioConteudoAtual,this.quill.linhaAtual.blotConteudo.tamanho,Quill.sources.SILENT),Pe(e)}onHotKeyRenumeraDispositivo(e){this.renumeraElemento.notify(e),Pe(e)}onHotKeyMover(e){this.moveElemento.notify(e),Pe(e)}onHotKeyTransformacaoTipo(e){this.transformaElemento.notify(e),Pe(e)}onHotKeyToolbar(){var e;!((e=document.getSelection())===null||e===void 0)&&e.toString()&&this.onChange.notify("toolbar(hotkey)")}}class li extends fo{constructor(e){super(li.create(e)),this._htmlAnt=""}static create(e){var t,i;const r=super.create(),n=((i=(t=e.conteudo)===null||t===void 0?void 0:t.texto)!==null&&i!==void 0?i:"").trim();return r.setAttribute("contenteditable",e!=null&&e.editavel?"true":"false"),r.innerHTML=n!==""?n:"<br>",r}set htmlAnt(e){this._htmlAnt=e}get htmlAnt(){return this._htmlAnt}get alterado(){return this._htmlAnt!==this.html}}li.blotName="texto",li.tagName="P",li.className="texto__dispositivo";class ci extends fo{constructor(e){super(ci.create(e))}static create(e){const t=super.create();let i="";return i=e.tipo===Y.INFO?"mensagem--info":e.tipo===Y.WARNING?"mensagem--warning":"mensagem--danger",t.setAttribute("contenteditable","false"),t.classList.add(i),t.innerHTML=e.descricao?e.descricao:"",t}}ci.blotName="mensagem",ci.tagName="div",ci.className="mensagem";class Xi extends fo{constructor(){super(Xi.create())}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.setAttribute("style","font-size: 0.8em;"),e}}Xi.blotName="mensagens",Xi.tagName="MENSAGENS";const gm=Quill.import("modules/clipboard");class bm extends gm{constructor(e,t){super(e,t),this.onChange=new _t,this.quill.root.addEventListener("cut",i=>{var r;if(this.quill.cursorDeTextoEstaSobreLink())return void Pe(i);!((r=document.getSelection())===null||r===void 0)&&r.toString()&&this.onChange.notify("clipboard")}),this.quill.root.addEventListener("paste",i=>{var r;if(this.quill.cursorDeTextoEstaSobreLink())return void Pe(i);!((r=i.clipboardData)===null||r===void 0)&&r.getData("text/plain")&&this.onChange.notify("clipboard")})}convert(e){if(typeof e=="string")return this.container.innerHTML=e,super.convert();this.container.innerHTML=this.container.innerHTML.replace(mm,""),this.container.innerHTML=this.container.innerHTML.replace(/(<p\s*)/gi," <p"),this.container.innerHTML=this.container.innerHTML.replace(/(<br\s*\/>)/gi," "),this.container.innerHTML=this.container.innerHTML.replace(/<(?!strong)(?!\/strong)(?!em)(?!\/em)(?!sub)(?!\/sub)(?!sup)(?!\/sup)(.*?)>/gi,""),this.container.innerHTML=this.container.innerHTML.replace(/<([a-z]+) .*?=".*?( *\/?>)/gi,"<$1$2");const t=super.convert();return this.container.innerHTML="",t}onPaste(e){var t;e.preventDefault();const i=this.quill.getSelection(),r=(t=e==null?void 0:e.clipboardData)===null||t===void 0?void 0:t.getData("text/html"),n=new DOMParser().parseFromString(r,"text/html");let s="";const d=["A","B","STRONG","I","EM","SUP","SUB"],c=(p,u)=>{for(u(p),p=p.firstChild;p;)c(p,u),p=p.nextSibling};c(n,function(p){d.includes(p.tagName)?s+=p.outerHTML:p.nodeType!==3||d.includes(p.parentElement.tagName)||(s+=p.nodeValue)}),this.quill.clipboard.dangerouslyPasteHTML(i.index,s)}}const ym=Quill.import("blots/container");class ro extends ym{constructor(e){super(ro.create()),this.alinhamentoMenu=e}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.setAttribute("class",ro.className),e}}ro.blotName="containerTdDireito",ro.tagName="DIV",ro.className="container__menu";const xm=Quill.import("blots/container");class $t extends xm{constructor(e){super($t.create(e))}static create(e){const t=super.create();t.setAttribute("contenteditable",e.editavel?"true":"false"),t.setAttribute("class",$t.className+" container__texto--nivel"+e.nivel);const i=Number(getComputedStyle(document.documentElement).getPropertyValue("--elemento-padding-factor"));if(i){const r=(e.agrupador?0:e.nivel)*i+5;t.setAttribute("style",`padding-left: ${r}px;`)}return t}}$t.blotName="containerTdEsquerdo",$t.tagName="DIV",$t.className="container__texto",$t.classLevel="level";const wm=Quill.import("blots/container");class no extends wm{constructor(e,t){super(no.create(e,t))}static create(e,t){const i=super.create(),r=t===zr.Esquerda?" container__linha--reverse":"";return i.setAttribute("contenteditable",e?"true":"false"),i.setAttribute("class",no.className+r),i}}no.blotName="containerTr",no.tagName="DIV",no.className="container__linha";class Am extends Quill{constructor(e,t){super(e,t)}getConteudoHtml(e,t,i){const r=this.scroll.children.head;return this.setConteudo(this.converterHtmlParaDelta(e),Quill.sources.SILENT),this.deleteText(t+i,r.length()-i-1,Quill.sources.SILENT),t>0&&this.deleteText(0,t,Quill.sources.SILENT),r.domNode.innerHTML}converterHtmlParaDelta(e){return this.clipboard.convert(e!=null?e:"")}converterDeltaParaHtml(e){return this.setConteudo(e,Quill.sources.SILENT),this.scroll.children.head.domNode.innerHTML}setConteudo(e,t){var i;const r=this.scroll.children.head;let n=0;r.length()>1&&this.deleteText(n,r.length()-1,t!=null?t:Quill.sources.SILENT),this.insertText(n," ",Quill.sources.SILENT),(i=e.ops)===null||i===void 0||i.forEach(s=>{s.attributes?this.insertText(n,s.insert,s.attributes,t!=null?t:Quill.sources.SILENT):this.insertText(n,s.insert,t!=null?t:Quill.sources.SILENT),n+=s.insert.length}),this.deleteText(n,1,Quill.sources.SILENT)}}class _e extends Quill{constructor(e,t,i){super(e,i),this._undoEstruturaVazio=!0,this._redoEstruturaVazio=!0,this._processandoMudancaLinha=!1,this.undoRedoEstrutura=new _t,this.elementoSelecionado=new _t,this.aspasAberta=!1,this.observableSelectionChange=new _t,this.onSelectionChange=(r,n)=>{const s=this.linhaAtual;this._mudouDeLinha=this.verificarMudouLinha(r,n),this._mudouDeLinha&&(this.observableSelectionChange.notify(s),this.aspasAberta=!1,this.limparHistory())},this.onTextChange=()=>{this._linhaAtual&&setTimeout(()=>{this.acertarAspas()},0)},this.on("text-change",this.onTextChange),this.on("selection-change",this.onSelectionChange),this.buffer=new Am(t,{}),this.root.addEventListener("dragstart",r=>{r.preventDefault()}),this.root.addEventListener("drop",r=>{r.preventDefault()})}get mudouDeLinha(){var e;return(e=this._mudouDeLinha)!==null&&e!==void 0&&e}get linhaAnterior(){return this._linhaAnterior}get linhaAtual(){return this._linhaAtual}get inicioConteudoAtual(){return this.getIndex(this.linhaAtual.blotConteudo)}get fimConteudoAtual(){return this.inicioConteudoAtual+this.linhaAtual.blotConteudo.tamanho}get textoSelecionado(){var e,t,i;const r=(e=this.getSelection(!0))!==null&&e!==void 0?e:{index:0,length:0},n=this.getText().substr(r.index,r.length);return{conteudo:n,quantidadeCR:(i=(t=n.match(/(\n)/gi))===null||t===void 0?void 0:t.length)!==null&&i!==void 0?i:0}}get isUndoEstruturaVazio(){return this._undoEstruturaVazio}set undoEstruturaVazio(e){this._undoEstruturaVazio=e}get isRedoEstruturaVazio(){return this._redoEstruturaVazio}set redoEstruturaVazio(e){this._redoEstruturaVazio=e}get isProcessandoMudancaLinha(){return this._processandoMudancaLinha}set processandoMudancaLinha(e){this._processandoMudancaLinha=e}static configurar(){const e=_e.import("parchment"),t=new e.Attributor.Attribute("id","id",{scope:e.Scope.BLOCK}),i=new e.Attributor.Style("paddingLeft","padding-left",{scope:e.Scope.BLOCK}),r=new e.Attributor.Style("border","border",{scope:e.Scope.BLOCK}),n=new e.Attributor.Style("borderColor","border-color",{scope:e.Scope.BLOCK}),s=new e.Attributor.Style("display","display",{scope:e.Scope.BLOCK}),d=new e.Attributor.Style("aria-label","aria-label",{scope:e.Scope.BLOCK}),c=new e.Attributor.Attribute("dataRotulo","data-rotulo",{scope:e.Scope.BLOCK});_e.register("modules/clipboard",bm,!0),_e.register("modules/keyboard",vm,!0),_e.register(li,!0),_e.register(Ct,!0),_e.register(ci,!0),_e.register(Xi,!0),_e.register(So,!0),_e.register(ko,!0),_e.register(Po,!0),_e.register(io,!0),_e.register(Je,!0),_e.register(Ye,!0),_e.register($t,!0),_e.register(ro,!0),_e.register(no,!0),_e.register(t,!0),_e.register(i,!0),_e.register(r,!0),_e.register(n,!0),_e.register(s,!0),_e.register(d,!0),_e.register(c,!0)}destroi(){var e,t;this.off("text-change",this.onTextChange),this.off("selection-change",this.onSelectionChange),(e=this.keyboard)===null||e===void 0||e.operacaoTecladoInvalida.clean(),(t=this.keyboard)===null||t===void 0||t.adicionaElementoTeclaEnter.clean()}getConteudoHtmlParteLinha(e,t,i){return this.buffer.getConteudoHtml(e.html,t,i)}getPrimeiraLinha(){return this.scroll.children.head}getUltimaLinha(){return this.scroll.children.tail}getLinha(e,t=this.getPrimeiraLinha()){return t.uuid===e?t:t.next?this.getLinha(e,t.next):void 0}getLinhaPorId(e){return Quill.find(this.getHtmlElement(Ye.criarId(e)),!1)}setIndex(e,t=Quill.sources.USER){var i;const r=(i=this.getSelection(!0))!==null&&i!==void 0?i:{index:0,length:0};e===r.index&&r.length===0||this.setSelection(e,0,t)}setConteudoLinha(e,t,i){var r;let n=this.getIndex(e);e.length()>1&&this.deleteText(n,e.length()-1,i!=null?i:Quill.sources.SILENT),this.insertText(n," ",Quill.sources.SILENT),(r=t.ops)===null||r===void 0||r.forEach(s=>{s.attributes?this.insertText(n,s.insert,s.attributes,i!=null?i:Quill.sources.SILENT):this.insertText(n,s.insert,i!=null?i:Quill.sources.SILENT),n+=s.insert.length}),this.deleteText(n,1,Quill.sources.SILENT)}converterHtmlParaDelta(e){return this.buffer.converterHtmlParaDelta(e)}converterDeltaParaHtml(e){return this.buffer.converterDeltaParaHtml(e)}irProximaLinha(){var e;const t=this.getIndex((e=this._linhaAtual)===null||e===void 0?void 0:e.next.blotConteudo);this.setSelection(t,0)}desmarcarLinhaAtual(e){this._linhaAnterior=e,e==null||e.desativarBorda()}marcarLinhaAtual(e){e&&e.tipo!=="Articulacao"&&(this.atualizarLinhaCorrente(e),this.elementoSelecionado.notify(e.uuid))}undo(){this.history.stack.undo.length===0?this.isUndoEstruturaVazio||this.undoRedoEstrutura.notify(_e.UNDO):(this.history.undo(),this.focus())}redo(){this.history.stack.redo.length===0?this.isRedoEstruturaVazio||this.undoRedoEstrutura.notify(_e.REDO):(this.history.redo(),this.focus())}limparHistory(){setTimeout(()=>{this.history.clear()},0)}desmarcarLinhas(){document.querySelectorAll(".container__elemento--ativo").forEach(e=>{this.getLinhaPorId(parseInt(e.id.substr(7),0)).desativarBorda()})}verificarMudouLinha(e,t){if(t&&(e==null?void 0:e.index)===0&&(e==null?void 0:e.length)===0)return this.setSelection(t.index,0),!1;if(e){const i=this.getLine(e.index)[0],r=i.linha;if(i.tagName!==Je.tagName&&i.tagName!==Ct.tagName&&i.tagName!==io.tagName&&i.tagName!==Xi.tagName||this.setSelection(this.getIndex(i.linha.blotConteudo),0,Quill.sources.SILENT),t){const n=this.getLine(t.index)[0];if(n&&r===n.linha)return!1}return this.desmarcarLinhas(),this.marcarLinhaAtual(r),!0}return!1}getHtmlElement(e){return this.root.querySelector(`#${e}`)}acertarAspas(){var e,t;if(this._linhaAtual){const i=this.inicioConteudoAtual,r=(t=this.getText(i,(e=this.linhaAtual)===null||e===void 0?void 0:e.blotConteudo.tamanho))!==null&&t!==void 0?t:"";let n=i;if(r.indexOf('"')>-1)for(let s=0;s<r.length;s++)r[s]==='"'&&(n+=s,this.deleteText(n,1,Quill.sources.SILENT),this.insertText(n,this.aspasAberta?"\u201D":"\u201C",Quill.sources.SILENT),this.aspasAberta=!this.aspasAberta,n=i)}}atualizarLinhaCorrente(e){this.processandoMudancaLinha=!0,this._linhaAtual=e,this._linhaAtual.blotConteudo.htmlAnt=this._linhaAtual.blotConteudo.html,e.ativarBorda(),this.scrollToElemento(e.uuid)}scrollToElemento(e){const t=this.getHtmlElement(Ye.criarId(e));setTimeout(()=>{this.isInEtaBoxViewport(t)||this.scrollIntoEtaBox(t)},0)}scrollIntoEtaBox(e){var t;const i=e.offsetTop;(t=e.closest(".ql-editor"))===null||t===void 0||t.scrollTo(0,i)}isInEtaBoxViewport(e){const t=e.getBoundingClientRect(),i=e.closest("#lx-eta-box").getBoundingClientRect().bottom;return t.top>=0&&t.bottom<=i}cursorDeTextoEstaSobreLink(e=0){var t;const i=this.getSelection(!0),r=this.getContents(i.index+e,1).ops;return!!r&&((t=r[0].attributes)===null||t===void 0?void 0:t.link)}}_e.UNDO="undo",_e.REDO="redo";class vr{static criarContainerLinha(e){const t=new Ye(e),i=new no(e.editavel,this.alinhamentoMenu),r=new $t(e),n=new ro(this.alinhamentoMenu);return new Je(e).insertInto(r),new li(e).insertInto(r),new Ct().insertInto(n),r.insertInto(i),n.insertInto(i),i.insertInto(t),t}static criarContainerMensagens(e){const t=new no(!1,this.alinhamentoMenu),i=new $t(e),r=new ro(this.alinhamentoMenu);return e.mensagens&&e.mensagens.length>0&&e.mensagens.forEach(n=>{new ci(n).insertInto(i)}),new Ct().insertInto(r),i.insertInto(t),r.insertInto(t),t}}async function Em(o,e,t,i){var r;const n=document.createElement("elix-dialog"),s=document.createRange().createContextualFragment(`
    <style>
    h1.normaDiv {
      font-size: 1em;
      padding: 0.5em;
      font-weight: bold;
    }
    .normaDiv {
      display: grid;
      grid-template-columns: [labels] auto [controls] 1fr;
      grid-auto-flow: row;
      grid-gap: .8em;
      padding: 0.5em;
    }
    .normaDiv > label  {
      grid-column: labels;
      grid-row: auto;
    }
    .normaDiv > input,
    .normaDiv > select {
      grid-column: controls;
      grid-row: auto;
      padding: 0.5em;
    }
  </style>
  <h1 class="normaDiv">Dados da norma vigente</h1>
  <div name="normaDiv" class="normaDiv">
    <label for="tipoNorma">Tipo </label>
      <select name="tipos" name="tipoNorma" id="tipoNorma">      
      <option value="decreto">Decreto</option>
      <option value="decreto-lei">Decreto-Lei</option>
      <option value="lei" selected>Lei</option>
      <option value="lei.complementar">Lei Complementar</option>
      <option value="lei.delegada">Lei Delegada</option>
      <option value="medida.provisoria">Medida Provis\xF3ria</option>
    </select>    
    <label for="numeroNorma">N\xFAmero </label>
    <input type="text" name="numeroNorma" id="numeroNorma" placeholder="8666 (n\xFAmero sem ponto)">
    <label for="dataNorma">Data</label>
    <input type="text" name="dataNorma" id="dataNorma" placeholder="21/06/1993">

    <div style="margin-top: 10px;">
      <button>Ok</button>
      <button>Cancelar</button>
    </div>
    <div class="erro" style="margin-top: 10px; color: red; display: none;"></div>

  </div>


  `),d=o.norma?(r=Mo(o.norma))===null||r===void 0?void 0:r.urn:void 0,c=o.norma?Wr(o.norma):void 0,p=o.norma?ai(o.norma):void 0,u=s.querySelector("#tipoNorma"),a=s.querySelector("#numeroNorma"),l=s.querySelector("#dataNorma");d&&(u.value=d),c&&(a.value=c),p&&(l.value=p);const h=s.querySelectorAll("button"),f=h[0],m=h[1],v=s.querySelector(".erro");f.onclick=()=>{const g=((y,b,x,w)=>{var A;return`urn:lex:br:${y}:${b}:${(A=ad(w))!==null&&A!==void 0?A:w};${x}`})("federal",u.value,a==null?void 0:a.value,l==null?void 0:l.value);ld(g)?(e.focus(),n.close(),v.style.display="none",o.norma=g,t.dispatch(i.execute(o))):(v.innerText="Dados inv\xE1lidos",v.style.display="block")},m.onclick=()=>{e.focus(),n.close()},n.appendChild(s),await n.open()}vr.alinhamentoMenu=zr.Esquerda;let Xl=class extends Gr(he)(tt){constructor(){super(),this.inscricoes=[],this.onSelectionChange=(o,e,t)=>{(o==null?void 0:o.length)===0&&t===Quill.sources.USER&&this.ajustarLinkParaNorma()},this.tabIndex=-1}get quill(){return this._quill}createRenderRoot(){return this}async firstUpdated(){this.inicializar(this.configEditor()),this.querySelectorAll(".ql-bold, .ql-italic, .ql-script").forEach(o=>{o.addEventListener("click",e=>{e.stopImmediatePropagation()})})}stateChanged(o){var e,t;this.quill?(this.quill.undoEstruturaVazio=((e=o.elementoReducer.past)!==null&&e!==void 0?e:[]).length===0,this.quill.redoEstruturaVazio=((t=o.elementoReducer.future)!==null&&t!==void 0?t:[]).length===0,o.elementoReducer.ui&&(o.elementoReducer.ui.message?this.alertar(o.elementoReducer.ui.message.descricao):this.processarStateEvents(o.elementoReducer.ui.events))):this.quillNaoInicializado(o)}disconnectedCallback(){this.inscricoes.forEach(o=>o.cancel()),this.removeEventListener("ontextchange",o=>console.log(o)),this.removeEventListener("rotulo",o=>console.log(o)),this.destroiQuill(),super.disconnectedCallback()}render(){return xe`
      ${um}
      ${cm}
      <style>
        :host {
          --lx-eta-editor-height: 100%;
          --lx-eta-editor-overflow: display;
        }
        #lx-eta-editor {
          height: var(--lx-eta-editor-height);
          overflow: var(--lx-eta-editor-overflow);
          display: block;
        }
      </style>
      <div id="lx-eta-box">
        <div id="lx-eta-barra-ferramenta">
          <button class="ql-bold" title="Negrito (Ctrl+b)"></button>
          <button class="ql-italic" title="Itálico (Ctrl+i)"></button>
          <button class="ql-script" value="sub" title="Subscrito"></button>
          <button class="ql-script" value="super" title="Sobrescrito"></button>

          <button @click=${this.onClickUndo} class="lx-eta-ql-button lx-eta-btn-desfazer" title="Desfazer (Ctrl+Z)">
            <svg class="icon-undo-redo" id="undo" viewBox="0 0 512 512">
              <path
                d="M488,256c0,123.4-100.5,223.9-223.9,223.9c-48.8,0-95.2-15.6-134.2-44.9c-14.1-10.6-17-30.7-6.4-44.8 c10.6-14.1,30.6-16.9,44.8-6.4c27.8,20.9,61,31.9,95.9,31.9c88.1,0,159.8-71.7,159.8-159.8S352.3,96.2,264.2,96.2 c-37.5,0-73.1,13.5-101.3,36.6L208,178c17,17,5,46.1-19.1,46.1H43.2c-10.6,0-19.2-8.6-19.2-19.2V59C24,35,53.1,23,70.1,40l47.6,47.6 c40.2-34.9,91.8-55.5,146.4-55.5C387.5,32.1,488,132.6,488,256z"
              />
            </svg>
          </button>
          <button @click=${this.onClickRedo} class="lx-eta-ql-button" title="Refazer (Ctrl+y)">
            <svg class="icon-undo-redo lx-eta-rebate-180-graus" id="redo" viewBox="0 0 512 512">
              <path
                d="M488,256c0,123.4-100.5,223.9-223.9,223.9c-48.8,0-95.2-15.6-134.2-44.9c-14.1-10.6-17-30.7-6.4-44.8 c10.6-14.1,30.6-16.9,44.8-6.4c27.8,20.9,61,31.9,95.9,31.9c88.1,0,159.8-71.7,159.8-159.8S352.3,96.2,264.2,96.2 c-37.5,0-73.1,13.5-101.3,36.6L208,178c17,17,5,46.1-19.1,46.1H43.2c-10.6,0-19.2-8.6-19.2-19.2V59C24,35,53.1,23,70.1,40l47.6,47.6 c40.2-34.9,91.8-55.5,146.4-55.5C387.5,32.1,488,132.6,488,256z"
              />
            </svg>
          </button>
          <button type="button" class="ql-clean">
            <svg class="" viewBox="0 0 18 18">
              <line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"></line>
              <line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"></line>
              <line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"></line>
              <line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"></line>
              <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"></rect>
            </svg>
          </button>

          <button @click=${this.onClickDispositivoAtual} class="lx-eta-ql-button lx-eta-btn-disp-atual" title="Localizar dispositivo atual">D</button>
          <input type="button" @click=${this.artigoOndeCouber} class="${"ql-hidden"} btn--artigoOndeCouber" value="Propor artigo onde couber" title="Artigo onde couber"></input>
          <lexml-eta-help></lexml-eta-help>
        </div>
        <div id="lx-eta-editor"></div>
      </div>
      <elix-toast id="toast-alerta" duration="3000">
        <div id="toast-msg"></div>
      </elix-toast>
      <div id="lx-eta-buffer"><p></p></div>
    `}formatacaoAlterada(){var o;!((o=document.getSelection())===null||o===void 0)&&o.toString()&&this.agendarEmissaoEventoOnChange("toolbar")}onClickUndo(){this.quill.undo()}onClickRedo(){this.quill.redo()}onClickDispositivoAtual(){this.quill.setSelection(this.quill.getIndex(this.quill.linhaAtual.blotConteudo),0,Quill.sources.SILENT),this.quill.focus()}artigoOndeCouber(){}ajustarLinkParaNorma(){const o=document.querySelector("a.ql-preview"),e=o==null?void 0:o.getAttribute("href");if(e!=null&&e.startsWith("urn")){const t="https://normas.leg.br/?urn="+e;o.setAttribute("href",t),o.innerHTML=(i=>{var r;const n=sd(i),s=Wr(n),d=(r=Mo(n))===null||r===void 0?void 0:r.descricao,c=ai(n);return(d||"")+(s?" n\xBA "+s:"")+(c.length>7?" de "+c:"")})(e)}}onBold(o){this.quill.keyboard.verificarOperacaoTecladoPermitida()&&(this.quill.format("bold",o),this.formatacaoAlterada())}onItalic(o){this.quill.keyboard.verificarOperacaoTecladoPermitida()&&(this.quill.format("italic",o),this.formatacaoAlterada())}onScript(o){this.quill.keyboard.verificarOperacaoTecladoPermitida()&&(this.quill.format("script",o),this.formatacaoAlterada())}onOperacaoInvalida(){this.alertar("Opera\xE7\xE3o n\xE3o permitida.")}isDesmembramento(o,e,t){return(e+t).localeCompare(o)!==0}adicionarElemento(o){var e,t;const i=this.quill.linhaAtual,r=i.blotConteudo,n=(e=this.quill.inicioConteudoAtual)!==null&&e!==void 0?e:0,s=(t=n+r.tamanho)!==null&&t!==void 0?t:0;let d="",c="";if(o.index===n)d="",c=r.html;else if(o.index===s)d=r.html,c="";else{const u=s-o.index;d=this.quill.getConteudoHtmlParteLinha(r,0,r.tamanho-u),c=this.quill.getConteudoHtmlParteLinha(r,o.index-n,u)}const p=this.criarElemento(i.uuid,i.lexmlId,i.tipo,d,i.numero,i.hierarquia);if(this.isDesmembramento(r.htmlAnt,d,c)){const u=this.criarElemento(i.uuid,i.lexmlId,i.tipo,d+c,i.numero,i.hierarquia);he.dispatch(Al.execute(u))}he.dispatch(ua.execute(p,c))}async renumerarElemento(){var o,e;const t=this.quill.linhaAtual,i=t.blotConteudo.html,r=this.criarElemento((o=t.uuid)!==null&&o!==void 0?o:0,t.lexmlId,(e=t.tipo)!==null&&e!==void 0?e:"","",t.numero,t.hierarquia,t.descricaoSituacao,t.existeNaNormaAlterada);let n;if(!((y,b)=>{var x,w,A,S;const q=ke(y,b);return q!==void 0&&((w=(x=b.hierarquia)===null||x===void 0?void 0:x.pai)===null||w===void 0?void 0:w.uuidAlteracao)!==void 0&&b.descricaoSituacao!==L.DISPOSITIVO_ORIGINAL&&b.descricaoSituacao!==L.DISPOSITIVO_SUPRIMIDO&&!(B(q)&&q.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO&&((A=pi(q))===null||A===void 0?void 0:A.numero)==="1"&&((S=pi(q))===null||S===void 0?void 0:S.situacao.descricaoSituacao)!==L.DISPOSITIVO_ADICIONADO)})(he.getState().elementoReducer.articulacao,r))return;const s=document.createElement("elix-dialog"),d=r.descricaoSituacao===L.DISPOSITIVO_ADICIONADO,c=document.createRange().createContextualFragment(`
      <div style="padding: 15px; text-align: center">
        <div>
          Numera\xE7\xE3o do dispositivo:
          <input type="text" style="width: 60px">
        </div>
        <div class="erro" style="margin-top: 10px; color: red; display: none;"></div>
        <div id="dispositivoDeNorma">
          <p>O dispositivo j\xE1 existe na norma a ser alterada?</p>
            <div>
              <input type="radio" id="existente" name="existeNaNorma" value=true>
              <label for="existente">Sim</label>
            </div>

            <div>
              <input type="radio" id="adicionado" name="existeNaNorma" value=false>
              <label for="adicionado">N\xE3o</label>
            </div>

        </div>
        <div style="margin-top: 10px;">
          <button>Ok</button>
          <button>Cancelar</button>
        </div>
      </div>
    `),p=c.querySelector("input");var u;p.value=`${u=t.blotRotulo.rotulo,u.replace(/\./g,"").replace(/["“]/g,"").replace(/^Parte$/i,"").replace(/^Livro$/i,"").replace(/^Titulo$/i,"").replace(/^Capitulo$/i,"").replace(/^Secao$/i,"").replace(/^Subsecao$/i,"").replace(/^Artigo$/i,"").replace(/^Paragrafo$/i,"").replace(/^Inciso$/i,"").replace(/^Alinea$/i,"").replace(/^Item$/i,"").replace(/Art/i,"").replace(/§/i,"").replace(/§/i,"").replace(/[º]/i,"").replace(/[–-][/s]*$/,"").replace(/[)][/s]*$/,"").trim()}`;const a=c.getElementById("dispositivoDeNorma");if(r.existeNaNormaAlterada!==void 0&&(c.getElementById(r.existeNaNormaAlterada?"existente":"adicionado").checked=!0),d){const y=((b,x)=>{const w=ke(b,x);return!!w&&td(w)})(he.getState().elementoReducer.articulacao,r);a.disabled=y,a.style.display=y?"none":"block",c.querySelector('input[id="existente"]').checked=r.existeNaNormaAlterada}const l=c.querySelectorAll("button"),h=l[0],f=l[1],m=c.querySelector(".erro");h.onclick=()=>{var y;v()&&(this.quill.focus(),s.close(),((y=r.conteudo)===null||y===void 0?void 0:y.texto)!==i&&(r.conteudo.texto=i,he.dispatch(Yh.execute(r))),he.dispatch(Ut.execute(r,p.value.trim(),n==="true")))},f.onclick=()=>{this.quill.focus(),s.close()};const v=()=>{if(a&&!a.disabled&&(document.querySelectorAll('input[name="existeNaNorma"]').forEach(y=>y.checked?n=y.value:void 0),d&&n===void 0)){const y="\xC9 necess\xE1rio informar se se trata de dispositivo existente na norma alterada";return m.innerText=y,m.style.display="block",!1}return m.style.display="none",!0},g=()=>{const y=p.value;return/^\s*$/.test(y)?"A numera\xE7\xE3o n\xE3o pode ser vazia.":""};p.onkeyup=y=>{let b=g();b||!r.tipo||((x,w)=>{const A=x.split("-"),S=A[0],q=A.slice(1,A.length).join("-"),P=(xf[w]||Mn)(S)&&S!=="0";return A.length===1?P:P&&Aa(q)})(p.value,r.tipo)||(b="Numera\xE7\xE3o inv\xE1lida."),m.innerText=b,m.style.display=b?"block":"none",h.disabled=Boolean(b),h.disabled||y.key==="Enter"&&h.click()},s.appendChild(c),h.disabled=Boolean(g()),await s.open()}removerElementoSemTexto(o){var e,t;const i=this.quill.linhaAtual,r=this.criarElemento((e=i.uuid)!==null&&e!==void 0?e:0,i.lexmlId,(t=i.tipo)!==null&&t!==void 0?t:"","",i.numero,i.hierarquia);he.dispatch(tf.execute(r,o))}removerElemento(){const o=this.quill.linhaAtual,e=`Voc\xEA realmente deseja remover o dispositivo ${o.blotRotulo.rotulo}`;this.confirmar(e,["Sim","N\xE3o"],t=>{var i,r;const n=t.detail.closeResult;if((n&&n.choice)==="Sim"){const s=this.criarElemento((i=o.uuid)!==null&&i!==void 0?i:0,o.lexmlId,(r=o.tipo)!==null&&r!==void 0?r:"","",o.numero,o.hierarquia);he.dispatch(Vt.execute(s))}this.quill.focus()})}moverElemento(o){const e=this.quill.linhaAtual,t=e.blotConteudo.html,i=this.criarElemento(e.uuid,e.lexmlId,e.tipo,t,e.numero,e.hierarquia);o.key==="ArrowUp"?he.dispatch(Lo.execute(i)):o.key==="ArrowDown"&&he.dispatch(Ro.execute(i))}transformarElemento(o){const e=this.quill.linhaAtual,t=e.blotConteudo.html,i=this.criarElemento(e.uuid,e.lexmlId,e.tipo,t,e.numero,e.hierarquia);o.key.toLowerCase()==="a"?he.dispatch(Oi(i,D.artigo.name)):o.key.toLowerCase()==="l"?he.dispatch(Oi(i,D.alinea.name)):o.key.toLowerCase()==="n"?he.dispatch(Oi(i,D.inciso.name)):o.key.toLowerCase()==="o"?he.dispatch(Oi(i,D.omissis.name)):o.key.toLowerCase()==="p"?he.dispatch(Oi(i,D.paragrafo.name)):o.key.toLowerCase()==="t"?he.dispatch(Oi(i,D.item.name)):xd.keys.TAB&&he.dispatch(o.shiftKey?{type:"SHIFT_TAB",atual:i}:(r=>({type:"TAB",atual:r}))(i))}elementoSelecionado(o){var e;const t=this.quill.linhaAtual,i=this.criarElemento(o,t.lexmlId,(e=t.tipo)!==null&&e!==void 0?e:"","",t.numero,t.hierarquia);he.dispatch(ef.execute(i)),this.quill.processandoMudancaLinha=!1}undoRedoEstrutura(o){o==="undo"?he.dispatch({type:"UNDO"}):he.dispatch({type:"REDO"})}processarStateEvents(o){o==null||o.forEach(i=>{var r;switch(i.stateType){case j.DocumentoCarregado:this.destroiQuill(),this.inicializar(this.configEditor()),this.carregarArticulacao((r=i.elementos)!==null&&r!==void 0?r:[]);break;case j.InformarNorma:Em(i.elementos[0],this.quill,he,Jh);break;case j.ElementoIncluido:this.inserirNovoElementoNoQuill(i.elementos[0],i.referencia,!0),this.inserirNovosElementosNoQuill(i,!0);break;case j.ElementoModificado:case j.ElementoRestaurado:this.atualizarQuill(i),this.montarMenuContexto(i);break;case j.ElementoSuprimido:this.atualizarSituacao(i),this.montarMenuContexto(i);break;case j.ElementoRemovido:this.removerLinhaQuill(i);break;case j.ElementoRenumerado:this.renumerarQuill(i);break;case j.ElementoValidado:this.atualizarMensagemQuill(i);break;case j.ElementoSelecionado:this.montarMenuContexto(i),this.atualizarMensagemQuill(i);break;case j.ElementoMarcado:this.marcarLinha(i);break;case j.SituacaoElementoModificada:this.atualizarSituacao(i),this.montarMenuContexto(i)}this.quill.limparHistory()});const e=[j.ElementoModificado,j.ElementoSuprimido,j.ElementoRestaurado,j.ElementoIncluido,j.ElementoRemovido,j.ElementoRenumerado],t=o==null?void 0:o.filter(i=>e.includes(i.stateType)).map(i=>i.stateType);t!=null&&t.length&&this.agendarEmissaoEventoOnChange("stateEvents")}marcarLinha(o){this.quill.desmarcarLinhaAtual(this.quill.linhaAtual);const e=o.elementos[0],t=this.quill.getLinha(e.uuid),i=this.quill.getIndex(t.blotConteudo);this.quill.setIndex(i,Quill.sources.SILENT),this.quill.atualizarLinhaCorrente(t),this.elementoSelecionado(t.uuid),o.moverParaFimLinha&&setTimeout(()=>{const r=this.quill.getSelection().index+this.quill.linhaAtual.blotConteudo.html.length;this.quill.setSelection(r,0,Quill.sources.USER)},0)}processarEscolhaMenu(o){var e,t,i,r;if(o==="Remover dispositivo")this.removerElemento();else if(o===Ut.descricao)this.renumerarElemento();else{const n=this.quill.linhaAtual,s=this.criarElemento((e=n.uuid)!==null&&e!==void 0?e:0,n.lexmlId,(t=n.tipo)!==null&&t!==void 0?t:"","",n.numero,n.hierarquia);s.conteudo.texto=(i=n.blotConteudo.html)!==null&&i!==void 0?i:"",he.dispatch((r=o,_a.filter(d=>d.descricao===r.trim())[0]).execute(s))}}inserirNovoElementoNoQuill(o,e,t){var i;const r=this.quill.getLinha(e.uuid);if(r){const n=vr.criarContainerLinha(o);r.next?n.insertInto(this.quill.scroll,r.next):n.insertInto(this.quill.scroll);const s=he.getState().elementoReducer.modo===ft.EMENDA_ARTIGO_ONDE_COUBER;if(((i=this.quill.linhaAtual)===null||i===void 0?void 0:i.blotConteudo.html)!==""||n.blotConteudo.html===""||s){if(t){this.quill.desmarcarLinhaAtual(this.quill.linhaAtual),this.quill.marcarLinhaAtual(n);try{this.quill.setIndex(this.quill.getIndex(n.blotConteudo),Quill.sources.SILENT)}catch{}}}else this.quill.linhaAtual.blotConteudo.htmlAnt=this.quill.linhaAtual.blotConteudo.html;this.quill.linhaAtual.descricaoSituacao=o.descricaoSituacao,this.quill.linhaAtual.existeNaNormaAlterada=o.existeNaNormaAlterada,this.quill.linhaAtual.setEstilo(o)}}inserirNovosElementosNoQuill(o,e){var t;const i=(t=o.elementos)!==null&&t!==void 0?t:[];for(let r=1;r<i.length;r++)this.inserirNovoElementoNoQuill(i[r],i[r-1],e)}atualizarSituacao(o){var e;let t;((e=o.elementos)!==null&&e!==void 0?e:[]).map(i=>{var r;t=this.quill.getLinha((r=i.uuid)!==null&&r!==void 0?r:0,t),t&&i.descricaoSituacao!==t.descricaoSituacao&&(t.descricaoSituacao=i.descricaoSituacao,t.setEstilo(i))})}atualizarQuill(o){var e;let t;((e=o.elementos)!==null&&e!==void 0?e:[]).map(i=>{var r,n,s,d,c;if(t=this.quill.getLinha((r=i.uuid)!==null&&r!==void 0?r:0,t),t){let p=!1;i.editavel!==t.editavel&&(t.editavel=i.editavel),i.rotulo!==t.blotRotulo.html&&(t.numero=(n=i.numero)!==null&&n!==void 0?n:"",t.blotRotulo.format(Je.blotName,i.rotulo)),i.nivel!==t.nivel&&(t.nivel=i.nivel,t.format(Ye.blotName,i),p=!0),i.agrupador!==t.agrupador&&(t.agrupador=i.agrupador,t.blotRotulo.format(Je.formatoStyle,i),p||t.format(Ye.blotName,i)),((s=i.conteudo)===null||s===void 0?void 0:s.texto)!==t.blotConteudo.html&&(t.blotConteudo.html=(c=(d=i.conteudo)===null||d===void 0?void 0:d.texto)!==null&&c!==void 0?c:""),i.descricaoSituacao!==t.descricaoSituacao&&(t.descricaoSituacao=i.descricaoSituacao,t.setEstilo(i)),i.existeNaNormaAlterada!==t.existeNaNormaAlterada&&(t.existeNaNormaAlterada=i.existeNaNormaAlterada),t.children.length===2&&t.children.tail.remove(),i.mensagens&&i.mensagens.length>0&&vr.criarContainerMensagens(i).insertInto(t)}})}removerLinhaQuill(o){var e;let t;((e=o.elementos)!==null&&e!==void 0?e:[]).forEach(n=>{var s;t=this.quill.getLinha((s=n.uuid)!==null&&s!==void 0?s:0,t),t&&t.remove()});const i=this.quill.getLine(this.quill.getSelection(!0).index)[0].linha,r=this.quill.getIndex(i.blotConteudo);this.quill.setSelection(r,0,Quill.sources.SILENT),this.quill.marcarLinhaAtual(i)}renumerarQuill(o){var e;let t;((e=o.elementos)!==null&&e!==void 0?e:[]).map(i=>{var r;t=this.quill.getLinha((r=i.uuid)!==null&&r!==void 0?r:0,t),t&&t.blotRotulo.format(Je.blotName,i.rotulo)})}atualizarMensagemQuill(o){var e;let t;((e=o.elementos)!==null&&e!==void 0?e:[]).map(i=>{var r;t=this.quill.getLinha((r=i.uuid)!==null&&r!==void 0?r:0,t),t&&((t==null?void 0:t.children.length)===2&&t.children.tail.remove(),i.mensagens&&i.mensagens.length>0&&vr.criarContainerMensagens(i).insertInto(t))})}montarMenuContexto(o){var e;const t=o.elementos?o.elementos[0]:new Zl,i=((e=t==null?void 0:t.acoesPossiveis)!==null&&e!==void 0?e:[]).filter(r=>Of(r));if(i.length>0){this.quill.linhaAtual||this.marcarLinha(o);const r=new io,n=new ko(this.quill.linhaAtual.containerDireito.alinhamentoMenu),s=d=>{this.processarEscolhaMenu(d),this.quill.focus()};new So().insertInto(r),i.forEach(d=>{new Po(d,s).insertInto(n)}),n.insertInto(r),this.quill.linhaAtual.blotContainerDireito.remove(),r.insertInto(this.quill.linhaAtual.containerDireito)}}criarElemento(o,e,t,i,r,n,s,d){const c=new Zl;return c.uuid=o,c.lexmlId=e,c.tipo=t,c.numero=r,c.conteudo={texto:i},c.hierarquia=n,c.descricaoSituacao=s,c.existeNaNormaAlterada=d,c}inicializar(o){const e=this.getHtmlElement("lx-eta-editor"),t=this.getHtmlElement("lx-eta-buffer");_e.configurar(),this._quill=new _e(e,t,o),this.quill.on("selection-change",this.onSelectionChange),this.inscricoes.push(this.quill.keyboard.operacaoTecladoInvalida.subscribe(this.onOperacaoInvalida.bind(this))),this.inscricoes.push(this.quill.keyboard.adicionaElementoTeclaEnter.subscribe(this.adicionarElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.moveElemento.subscribe(this.moverElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.removeElemento.subscribe(this.removerElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.removeElementoSemTexto.subscribe(this.removerElementoSemTexto.bind(this))),this.inscricoes.push(this.quill.keyboard.renumeraElemento.subscribe(this.renumerarElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.transformaElemento.subscribe(this.transformarElemento.bind(this))),this.inscricoes.push(this.quill.undoRedoEstrutura.subscribe(this.undoRedoEstrutura.bind(this))),this.inscricoes.push(this.quill.elementoSelecionado.subscribe(this.elementoSelecionado.bind(this))),this.inscricoes.push(this.quill.observableSelectionChange.subscribe(this.atualizarTextoElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.onChange.subscribe(this.agendarEmissaoEventoOnChange.bind(this))),this.inscricoes.push(this.quill.clipboard.onChange.subscribe(this.agendarEmissaoEventoOnChange.bind(this))),e.addEventListener("rotulo",i=>{i.stopImmediatePropagation(),this.renumerarElemento()})}agendarEmissaoEventoOnChange(o){clearTimeout(this.timerOnChange),this.timerOnChange=setTimeout(()=>this.emitirEventoOnChange(o),1e3)}atualizarTextoElemento(o){var e,t,i;if(!((e=o==null?void 0:o.blotConteudo)===null||e===void 0)&&e.alterado){const r=this.criarElemento(o.uuid,o.lexmlId,o.tipo,(i=(t=o.blotConteudo)===null||t===void 0?void 0:t.html)!==null&&i!==void 0?i:"",o.numero,o.hierarquia);he.dispatch(Al.execute(r))}}emitirEventoOnChange(o){this.atualizarTextoElemento(this.quill.linhaAtual),this.dispatchEvent(new CustomEvent("onchange",{bubbles:!0,composed:!0,detail:{origemEvento:o}}))}carregarArticulacao(o){setTimeout(()=>{this.quill.getLine(0)[0].remove(),o.forEach(e=>{vr.criarContainerLinha(e).insertInto(this.quill.scroll),e.tipo===D.generico.tipo&&he.dispatch(Vu.execute(e))}),this.quill.limparHistory(),o.length>1&&setTimeout(()=>{const e=this.quill.getLinha(o[1].uuid);e!=null&&e.blotConteudo&&this.quill.setSelection(this.quill.getIndex(e==null?void 0:e.blotConteudo),0,Quill.sources.USER)},0),he.dispatch(Bu.execute())},0)}configEditor(){return{formats:["bold","italic","link","script"],modules:{toolbar:{container:"#lx-eta-barra-ferramenta",handlers:{bold:this.onBold.bind(this),italic:this.onItalic.bind(this),script:this.onScript.bind(this)}},history:{delay:0,maxStack:500,userOnly:!0}},theme:"snow"}}async confirmar(o,e,t){const i=document.createElement("elix-alert-dialog");i.textContent=o,i.choices=e,i.addEventListener("close",t),await i.open()}alertar(o){const e=this.querySelector("#toast-alerta");this.querySelector("#toast-msg").innerHTML=o,e.fromEdge="top",e.open()}quillNaoInicializado(o){var e;let t=[];const i=r=>{setTimeout(()=>{this.quill?r.length>0&&this.carregarArticulacao(r):i(r)},70)};if(o.elementoReducer.ui){const r=o.elementoReducer.ui.events.find(n=>n.stateType===j.DocumentoCarregado);t=(e=r==null?void 0:r.elementos)!==null&&e!==void 0?e:[]}i(t)}getHtmlElement(o){return this.querySelector(`#${o}`)}destroiQuill(){this.getHtmlElement("lx-eta-editor").innerHTML="",this.getHtmlElement("lx-eta-buffer").innerHTML="",this.quill&&(this.quill.off("selection-change",this.onSelectionChange),this.quill.destroi()),this._quill=void 0}};Xl=le([It("lexml-eta-editor")],Xl);let nn=class extends tt{constructor(){super(...arguments),this.htmlAgrupador=()=>{var o,e,t;return xe`<p class="rotulo">${this.elemento.rotulo}</p>
      <p class="texto-agrupador">${In((t=(e=(o=this.elemento)===null||o===void 0?void 0:o.conteudo)===null||e===void 0?void 0:e.texto)!==null&&t!==void 0?t:"")}</p>`},this.htmlDispositivo=()=>{var o,e,t;return xe`
      <p class="texto" style="${`padding-left: ${20*this.elemento.nivel}px;`}">
        <span class="rotulo">${this.elemento.rotulo}</span>
        ${In((t=(e=(o=this.elemento)===null||o===void 0?void 0:o.conteudo)===null||e===void 0?void 0:e.texto)!==null&&t!==void 0?t:"")}
      </p>
    `}}render(){return xe`
      <div class="box">
        <div class="conteudo">${this.elemento.agrupador?this.htmlAgrupador():this.htmlDispositivo()}</div>
      </div>
    `}};nn.styles=Hr`
    :host {
      display: block;
      padding: 0px;
      margin: 0px;
      font-family: sans-serif, 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
      font-size: 1.1em;
      line-height: 1.2;
      color: #646260;
      text-transform: none !important;
    }

    p.rotulo {
      margin: 5px !important;
      color: #373634;
      font-weight: 600;
      text-align: center;
    }

    p.texto {
      margin: 5px !important;
    }

    p.texto-agrupador {
      margin: 5px !important;
      text-align: center;
    }

    span.rotulo {
      color: #373634;
      font-weight: 600;
    }
  `,le([Be({type:Object})],nn.prototype,"elemento",void 0),nn=le([It("lexml-eta-elemento")],nn);let fs=class extends tt{render(){return xe`
      <div class="lx-eta-help">
        <button class="lx-eta-helpbtn">&quest;</button>
        <div class="lx-eta-help-content">
          <div><b>ctrl-shift-a</b>&nbsp;-&nbsp;Seleciona o texto do dispositivo atual</div>
          <div><b>ctrl-a</b>&nbsp;-&nbsp;Seleciona todos os dispositivos da articulação</div>
          <div><b>ctrl-home</b>&nbsp;-&nbsp;Vai para o primeiro dispositivo</div>
          <div><b>ctrl-end</b>&nbsp;-&nbsp;Vai para o último dispositivo</div>
          <div><b>ctrl-&uarr;</b>&nbsp;-&nbsp;Move o dispositivo acima</div>
          <div><b>ctrl-&darr;</b>&nbsp;-&nbsp;Move o dispositivo abaixo</div>
          <hr></hr>
          <div><b>enter</b>&nbsp;-&nbsp;Finaliza a edição do dispositivo atual e cria um novo</div>
          <div><b>ctrl-d</b>&nbsp;-&nbsp;Remove dispositivo atual</div>
          <div><b>ctrl-z</b>&nbsp;-&nbsp;Desfaz ultima alteração</div>
          <div><b>ctrl-y</b>&nbsp;-&nbsp;Refaz alteração</div>
          <hr></hr>
          <div><b>ctrl-alt-A</b>&nbsp;-&nbsp;Transforma o dispositivo em artigo</div>
          <div><b>ctrl-alt-L</b>&nbsp;-&nbsp;Transforma o dispositivo em alínea</div>
          <div><b>ctrl-alt-N</b>&nbsp;-&nbsp;Transforma o dispositivo em inciso</div>
          <div><b>ctrl-alt-O</b>&nbsp;-&nbsp;Transforma o dispositivo em omissis</div>
          <div><b>ctrl-alt-P</b>&nbsp;-&nbsp;Transforma o dispositivo em parágrafo</div>
          <div><b>ctrl-alt-T</b>&nbsp;-&nbsp;Transforma o dispositivo em item</div>
          <div><b>tab</b>&nbsp;-&nbsp;Indenta para a direita o dispositivo, transformando-o no tipo mais provável</div>
          <div><b>shift-tab</b>&nbsp;-&nbsp;Recua o dispositivo para a esquerda, transformando-o no tipo mais provável</div>
          <hr></hr>
          <div><b>ctrl-alt-R</b>&nbsp;-&nbsp;Renumera o dispositivo</div>
        </div>
      </div>
    `}};fs.styles=Hr`
    :host {
      position: relative;
      display: inline-block;
    }

    .lx-eta-helpbtn {
      background-color: #ffffff;
      color: black;
      width: 26px;
      height: 22px;
      font-size: 1.1em;
      font-weight: bold;
      vertical-align: middle;
      border: none;
      cursor: pointer;
      text-align: center;
    }

    .lx-eta-help-content {
      display: none;
      position: absolute;
      right: 0;
      background-color: #f9f9f9;
      box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
      z-index: 1;
      width: calc(100vw - 30px);
      max-width: 400px;
    }

    .lx-eta-help-content div {
      color: black;
      padding: 2px 5px;
      text-decoration: none;
      display: block;
      white-space: wrap;
      font-size: 0.8em;
      font-weight: normal !important;
      text-align: left;
    }

    .lx-eta-help:hover .lx-eta-help-content {
      display: block;
    }
  `,fs=le([It("lexml-eta-help")],fs);let ms=class extends tt{constructor(){super(),this.texto="",this.toolbarOptions=[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],["blockquote"],["undo","redo"],[{align:[]}],["clean"]],this.icons=Quill.import("ui/icons"),this.init=()=>{var o;this.container=document.querySelector("#editor-justificativa"),this.container&&(this.quill=new Quill(this.container,{formats:["bold","italic","underline","align","list","script","blockquote"],modules:{toolbar:{container:this.toolbarOptions,handlers:{undo:this.undo,redo:this.redo}},history:{delay:0,maxStack:500,userOnly:!0},clipboard:{}},placeholder:"",theme:"snow"}),this.setContent(this.texto),(o=this.quill)===null||o===void 0||o.on("text-change",this.updateTexto))},this.setContent=o=>{this.quill&&(this.quill.root.innerHTML=o.replace(/indent/g,"ql-indent").replace(/align-justify/g,"ql-align-justify").replace(/align-center/g,"ql-align-center").replace(/align-right/g,"ql-align-right"))},this.updateTexto=()=>{var o,e;this.texto=!((o=this.quill)===null||o===void 0)&&o.root.innerHTML?(e=this.quill)===null||e===void 0?void 0:e.root.innerHTML.replace(/ql-indent/g,"indent").replace(/ql-align-justify/g,"align-justify").replace(/ql-align-center/g,"align-center").replace(/ql-align-right/g,"align-right"):""},this.undo=()=>{var o;return(o=this.quill)===null||o===void 0?void 0:o.history.undo()},this.redo=()=>{var o;return(o=this.quill)===null||o===void 0?void 0:o.history.redo()},this.icons.undo=`<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
    <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
    </svg>`,this.icons.redo=`<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
    <path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
    </svg>`}update(o){super.update(o)}createRenderRoot(){return this}render(){return xe`
      <link rel="stylesheet" href="http://cdn.quilljs.com/1.3.6/quill.snow.css" />
      <style>
        #editor-justificativa {
          height: 375px;
        }
        #editor-justificativa p:not(.ql-align-rigth, .ql-align-center) {
          text-indent: 3em;
        }
      </style>
      <div id="editor-justificativa"></div>
    `}firstUpdated(){this.init()}};le([Be({type:String})],ms.prototype,"texto",void 0),ms=le([It("lexml-emenda-justificativa")],ms);class _m{constructor(){this.dataUltimaModificacao=new Date().toISOString(),this.aplicacao="",this.versaoAplicacao="",this.modoEdicao=Vs.EMENDA,this.metadados={},this.proposicao=new Om,this.colegiadoApreciador=new qm,this.epigrafe=new Im,this.componentes=[new Sm],this.comandoEmenda=new _d,this.justificativa="",this.local="",this.autoria=new ka,this.opcoesImpressao=new Cm}}var Vs,Hs;(function(o){o.EMENDA="emenda",o.EMENDA_ARTIGO_ONDE_COUBER="emendaArtigoOndeCouber"})(Vs||(Vs={}));class Om{constructor(){this.urn="",this.sigla="",this.numero="",this.ano="",this.ementa="",this.identificacaoTexto=""}}class qm{constructor(){this.siglaCasaLegislativa="CN",this.tipoColegiado="Plen\xE1rio"}}class Im{constructor(){this.texto="",this.complemento=""}}class Sm{constructor(){this.urn="",this.articulado=!0,this.dispositivos=new wd}}class wd{constructor(){this.dispositivosSuprimidos=[],this.dispositivosModificados=[],this.dispositivosAdicionados=[]}}class Ad{constructor(){this.tipo="",this.id=""}}class km extends Ad{}class Ed extends Ad{}class Pm extends Ed{}class _d{constructor(){this.comandos=[]}}class Nm{constructor(e,t){this.cabecalho=e,this.citacao=t}}(function(o){o.NAO_IDENTIFICADO="N\xE3o identificado",o.PARLAMENTAR="Parlamentar",o.COMISSAO="Comiss\xE3o",o.CASA_LEGISLATIVA="Casa Legislativa"})(Hs||(Hs={}));class ka{constructor(){this.tipo=Hs.PARLAMENTAR,this.imprimirPartidoUF=!0,this.quantidadeAssinaturasAdicionaisSenadores=0,this.quantidadeAssinaturasAdicionaisDeputados=0,this.parlamentares=[]}}class Cm{constructor(){this.imprimirBrasao=!0,this.textoCabecalho="",this.reduzirEspacoEntreLinhas=!1}}class ge{constructor(e){this.nome=e,this.valores=new Array,this.atributos=new Te}toString(){if(!this.valores.length)return"<"+this.nome+this.atributos+"/>";const e=new Te("<"+this.nome+this.atributos+">");return this.valores.forEach(t=>{e.append(t)}),e.append("</"+this.nome+">"),e.toString()}add(e){return e&&this.valores.push(e),this}addAtributo(e,t){return this.atributos.append(" "),this.atributos.append(e),t&&(this.atributos.append("='"),this.atributos.append(t),this.atributos.append("'")),this}}class qt{static compare(e,t){if(!e||!t)throw new Error("Tentativa de compara\xE7\xE3o de dispositivo nulo.");if(!e.pai)return-1;if(!t.pai)return 1;const i=qt.getIndices(e),r=qt.getIndices(t);return qt.comparaIndices(i,r)}static getIndices(e){const t=[];let i=this.getPaiParaComparacao(e);for(;i;)t.push(this.getIndexDoFilho(i,e)),e=i,i=this.getPaiParaComparacao(e);return t.reverse(),t}static getPaiParaComparacao(e){if(e.pai)return H(e.pai)&&Le(e)?e.pai.caput:e.pai}static getIndexDoFilho(e,t){return ve(t)?0:fe(t)?e.filhos.indexOf(t)+1:Le(t)?-1:e.filhos.indexOf(t)}static comparaIndices(e,t){let i=0;const r=e.length,n=t.length;for(let s=0;s<r&&s<n&&i===0;s++)i=e[s]-t[s];return i===0&&(i=r-n),i}}class Od{static getAlteracao(e){let t=e;if(t.tipo===D.alteracao.tipo)return t;if(B(t)){for(;t&&t.tipo!==D.alteracao.tipo;)t=t.pai;return t}}static existeNaNormaAlterada(e){return e.situacao.existeNaNormaAlterada}}class X{static getDispositivosNaoOriginais(e){const t=[];return Mt(e,i=>{i.pai&&i.situacao.descricaoSituacao!==L.DISPOSITIVO_ORIGINAL&&t.push(i)}),t}static getDispositivosComando(e){const t=new Array;for(const i of e){if(i.situacao.descricaoSituacao===L.DISPOSITIVO_ORIGINAL||B(i)||Le(i))continue;const r=X.getDispositivoAfetado(i);r&&!t.includes(r)&&t.push(r)}return t}static getDispositivoAfetado(e){if(pe(e)||H(e))return e;const t=e.pai;return ve(t)&&t.pai.situacao.descricaoSituacao!==L.DISPOSITIVO_ORIGINAL?t.filhos.find(i=>i.situacao.descricaoSituacao===L.DISPOSITIVO_ORIGINAL)?e:t.pai:X.isAlteracaoIntegral(t)?X.getDispositivoAfetado(t):e}static getDispositivoAfetadoEmAlteracao(e){if(me(e)){if(X.isOmissisAdjacenteADispositivoDeEmenda(e))return}else if(e.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO&&X.isTextoOmitido(e))return;const t=ve(e.pai)?e.pai.pai:e.pai;return X.isAlteracaoIntegralEmAlteracao(t)?X.getDispositivoAfetadoEmAlteracao(t):e}static isTextoOmitido(e){var t;return me(e)||e.texto.startsWith(xt)||pe(e)&&!!(!((t=e.caput)===null||t===void 0)&&t.texto.startsWith(xt))}static getDescricaoSituacaoParaComandoEmenda(e){return e.isDispositivoAlteracao&&e.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO&&Od.existeNaNormaAlterada(e)?L.DISPOSITIVO_MODIFICADO:e.situacao.descricaoSituacao}static isMesmaSituacaoParaComandoEmenda(e,t){return this.getDescricaoSituacaoParaComandoEmenda(e)===this.getDescricaoSituacaoParaComandoEmenda(t)}static isAlteracaoIntegral(e){const t=this.getDescricaoSituacaoParaComandoEmenda(e);if(t===L.DISPOSITIVO_ORIGINAL)return!1;if(t===L.DISPOSITIVO_SUPRIMIDO||t===L.DISPOSITIVO_ADICIONADO)return!0;if(!e.filhos.length)return!H(e)||t!==L.DISPOSITIVO_ORIGINAL;for(const i of e.filhos)if(!X.isAlteracaoIntegral(i))return!1;return!0}static isAlteracaoIntegralEmAlteracao(e){return!Le(e)&&(e.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO&&!X.isTextoOmitido(e)||e.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO)}static getArvoreDispositivos(e){const t=new Map;return e.length&&e.forEach(i=>{this.atualizaMapa(i,t)}),t}static atualizaMapa(e,t){const i=this.getHierarquiaDispositivosDeUmDispositivo(e);let r=t;i.forEach(n=>{const s=r.get(n);if(s)r=s;else{const d=new Map;r.set(n,d),r=d}})}static getHierarquiaDispositivosDeUmDispositivo(e){const t=new Array;t.push(e);let i=e.pai;for(;i&&!si(i)&&!sf(i);)t.push(i),i=i.pai;return t.reverse(),t}static getArvoreDispositivosDeAlteracaoDeNorma(e){const t=new Map;if(!e.length)return t;for(const i of e)this.atualizaMapaDeAlteracaoDeNorma(i,t);return t}static atualizaMapaDeAlteracaoDeNorma(e,t){const i=this.getHierarquiaDispositivosDeUmDispositivo(e);let r=t;for(const n of i)if(B(n)&&!Le(n))if(r.has(n))r=r.get(n);else{const s=new Map;r.set(n,s),r=s}t=r}static isSequenciasPlural(e){const t=e.length;return t!==0&&(t>1||X.isSequenciaPlural(e[0]))}static isSequenciaPlural(e){const t=e.getQuantidadeRanges();return t!==0&&(t>1||e.getPrimeiroRange().getQuantidadeDispositivos()>1)}static getProximoAgrupador(e){let t=e;do t=Mr(t);while(t&&!pe(t));return t}static getDispositivoIrmaoPosterior(e){if(H(e)||pe(e))return this.getArtigoPosterior(e);if(!this.isUltimoDispositivoDoMesmoTipo(e)){const t=e.pai,i=t.filhos.indexOf(e)+1;return t.filhos[i]}}static getArtigoPosterior(e){const t=e.pai;if(t.filhos.length){for(let i=t.filhos.indexOf(e)+1;i<t.filhos.length;i++){const r=t.filhos[i];if(H(r))return r;if(pe(r)){const n=this.buscaProximoArtigo(r);if(n)return n}}if(t.pai)return this.getArtigoPosterior(t)}}static buscaProximoArtigo(e){const t=e.filhos;for(const i of t){if(H(i))return i;if(pe(i))return this.buscaProximoArtigo(i)}}static isUltimoDispositivoDoMesmoTipo(e){if(!e.pai)return!0;const t=e.pai,i=t.filhos.indexOf(e);return t.filhos.length===i+1||t.filhos[i+1].tipo!==e.tipo}static getFilhosEstiloLexML(e){if(H(e)){const t=e;return[t.caput,...t.filhos.filter(i=>fe(i)||me(i)&&!ve(i.pai))]}return e.filhos}static getDispositivoAnteriorDireto(e){const t=e.pai,i=this.getFilhosEstiloLexML(t),r=i.indexOf(e);if(!(r>0))return t;e=i[r-1];let n=this.getFilhosEstiloLexML(e);for(;n.length;)e=n[n.length-1],n=this.getFilhosEstiloLexML(e);return e}static getDispositivoPosteriorDireto(e){const t=this.getFilhosEstiloLexML(e);return t.length?t[0]:this.getProximoIrmaoRecursivo(e)}static getProximoIrmaoRecursivo(e){if(!e)return;const t=Mr(e);if(t)return t;{const i=e.pai;return i?void 0:this.getProximoIrmaoRecursivo(i)}}static getRotuloPais(e){const t=new Te;let i;for(;e&&!H(e);)i=e.pai,t.append(i.pronomePossessivoSingular),t.append(i.getNumeracaoComRotuloParaComandoEmenda()),e=i;return t.toString()}static getDispositivosNaAlteracaoParaComando(e){const t=new Array;Mt(e,r=>{r.situacao.descricaoSituacao!==L.DISPOSITIVO_ORIGINAL&&t.push(r)});const i=new Array;return t.forEach(r=>{const n=X.getDispositivoAfetadoEmAlteracao(r);n&&!i.includes(n)&&i.push(n)}),i.sort(qt.compare),i}static isOmissisAdjacenteADispositivoDeEmenda(e){if(!me(e))return!1;let t=X.getDispositivoAnteriorDireto(e);if(ve(t)&&(t=t.pai),t&&t.situacao.descricaoSituacao!==L.DISPOSITIVO_ORIGINAL)return!0;const i=X.getDispositivoPosteriorDireto(e);return!(!i||i.situacao.descricaoSituacao===L.DISPOSITIVO_ORIGINAL)}static isMesmoTipoParaComandoEmenda(e,t){return e.tipo===t.tipo&&(!H(e)||X.isAlteracaoIntegral(e)===X.isAlteracaoIntegral(t))}static getTextoDoDispositivoOuOmissis(e,t=!1){return e.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO||e.situacao.descricaoSituacao===L.DISPOSITIVO_MODIFICADO||ve(e)?X.trataTextoParaCitacao(e,t):e.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO?me(e)?"(Omissis suprimido)":"(Suprimido)":new ge("Omissis")}static trataTextoParaCitacao(e,t=!1){let i=H(e)?e.caput.texto:e.texto;return i=t?i.replace(/”( *(?:\(NR\)) *)?/,""):i.replace(/”( *(?:\(NR\)) *)?/,"\u2019$1 "),i.trim().replace(/\s{2,}/g," ").replace(/^<p>\s?/i,"").replace(/\s?<\/p>$/i,"").replace(/<\/?a.*?>/gi,"").replace(/\s([\\.,:?!])/g,"$1")}static isFechaAspas(e){const t=Ku(e.texto);return/”(?: ?(\(NR\)|\(AC\)))?$/.test(t)}static verificaNecessidadeRenumeracaoRedacaoFinal(e){for(const t of e)if(X.implicaEmRenumeracaoRedacaoFinal(t))return!0;return!1}static implicaEmRenumeracaoRedacaoFinal(e){return!(!e.rotulo||!/.*(?:0|-[A-Z]).*/i.test(e.rotulo))||!(!H(e)&&!fe(e)||ot(e).filter(t=>t.situacao.descricaoSituacao===L.DISPOSITIVO_ORIGINAL).length!==1)}}class Tm{constructor(){this.ultimoProcessado=void 0,this.adjacentesOmissis=[]}getTexto(e){e=e.filter(r=>r.pai.situacao.descricaoSituacao!==L.DISPOSITIVO_SUPRIMIDO),this.adjacentesOmissis=this.buscaDispositivosAdjacentesAsOmissis(e),e.push(...this.adjacentesOmissis),e.sort(qt.compare);const t=X.getArvoreDispositivosDeAlteracaoDeNorma(e),i=new Te;return this.montaCitacaoComando(i,t),i.toString().replace(/(<\/p>)$/,"\u201D$1")}buscaDispositivosAdjacentesAsOmissis(e){const t=new Array;for(const i of e)if(me(i)){const r=X.getDispositivoAnteriorDireto(i);if(e.includes(r)||t.push(r),!X.isFechaAspas(i)){const n=X.getDispositivoPosteriorDireto(i);n&&!e.includes(n)&&t.push(n)}}return t}montaCitacaoComando(e,t){var i;const r=[...t.keys()][0];t=t.get(r);const n=(i=r.rotulo)===null||i===void 0?void 0:i.replace("\u201C",""),s=new ge("p").add("\u201C").add(new ge("Rotulo").add(n)).add(X.getTextoDoDispositivoOuOmissis(r,!0));e.append(s.toString()),t.size>0&&(this.ultimoProcessado=r,this.writeDispositivoTo(e,t)),this.writeOmissisFinal(e,r)}writeDispositivoTo(e,t){const i=[...t.keys()];i.sort(qt.compare);for(const r of i){const n=t.get(r),s=X.getDispositivoAnteriorDireto(r);if(H(this.ultimoProcessado)&&!ve(r)?ve(s)||me(r)||e.append(new ge("p").add(new ge("Omissis")).toString()):this.ultimoProcessado===s||me(r)||s.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO||e.append(new ge("p").add(new ge("Omissis")).toString()),!ve(r))if(r.situacao.descricaoSituacao!==L.DISPOSITIVO_ORIGINAL){const d=new ge("p").add(new ge("Rotulo").add(r.rotulo)).add(X.getTextoDoDispositivoOuOmissis(r,!0));e.append(d.toString())}else if(this.hasFilhosPropostos(n)||this.adjacentesOmissis.includes(r)){const d=new ge("p");d.add(new ge("Rotulo").add(r.rotulo)),d.add(new ge("Omissis")),e.append(d.toString())}else e.append(new ge("Omissis").toString());this.ultimoProcessado=r,n&&n.size>0&&this.writeDispositivoTo(e,n)}}writeOmissisFinal(e,t){if(t.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO)return;let i=t,r=X.getFilhosEstiloLexML(i);for(;r.length;)i=r[r.length-1],r=X.getFilhosEstiloLexML(i);if(i.situacao.descricaoSituacao!==L.DISPOSITIVO_ORIGINAL||this.adjacentesOmissis.includes(i)&&!me(i)){if(!X.isFechaAspas(i)){const n=X.getDispositivoPosteriorDireto(i);n&&me(n)&&e.append(new ge("p").add(new ge("Omissis")).toString())}}else e.append(new ge("p").add(new ge("Omissis")).toString())}hasFilhosPropostos(e){if(!e||!e.size)return!1;const t=e;let i=!1;for(const[r,n]of t.entries()){if(r.situacao.descricaoSituacao!==L.DISPOSITIVO_ORIGINAL){i=!0;break}!i&&n&&(i=this.hasFilhosPropostos(n))}return i}}class qd{getTexto(e,t=!1){const i=new Te,r=ve(e)?e.pai.rotulo:e.rotulo,n=new ge("Rotulo").add(r==null?void 0:r.trim()),s=new ge("p").add("\u201C").add(n).add(X.trataTextoParaCitacao(e,t));if(this.necessitaOmissis(e)){const d=new ge("p").add(new ge("Omissis")).add("\u201D");i.append(s.toString()),i.append(d.toString())}else s.add("\u201D"),i.append(s.toString());return i.toString()}necessitaOmissis(e){return this.temFilhoNaoSuprimido(e)&&!B(e)}temFilhoNaoSuprimido(e){for(const t of e.filhos)if(t.situacao.descricaoSituacao!==L.DISPOSITIVO_SUPRIMIDO)return!0;return!1}}class Dm{getTexto(e){const t=new Te,i=new Array;Mt(e,s=>{s.situacao.descricaoSituacao!==L.DISPOSITIVO_ORIGINAL&&i.push(s)}),i.sort(qt.compare);const r=i.length,n=i.filter(s=>s.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO||me(s)).length;if(r-n>0){const s=i[0];i.length!==1||H(s)?this.getCitacoesMultiplas(t,i):this.getCitacaoSimples(t,s)}return t.toString()}getCitacaoSimples(e,t){const i=new qd;e.append(i.getTexto(t,!0))}getCitacoesMultiplas(e,t){let i,r,n=new Array;for(const s of t)i=H(s)?s:va(s),i!==r&&(n.length&&this.getCitacaoMultipla(e,n),n=[i],r=i),n.includes(s)||n.push(s);n.length&&this.getCitacaoMultipla(e,n)}getCitacaoMultipla(e,t){const i=new Tm;e.append(i.getTexto(t))}}class Rm{constructor(){this.emAlteracao=!1}getTexto(e){let t=X.getArvoreDispositivos(e);const i=new Te,r=[...t.keys()][0];t=t.get(r);const n=new ge("p").add("\u201C").add(new ge("Rotulo").add(r.rotulo)).add(X.getTextoDoDispositivoOuOmissis(r));return i.append(n.toString()),t.size&&(this.ultimoProcessado=r,this.writeDispositivoTo(i,t)),this.writeOmissisFinal(i,r),i.toString().replace(/(<\/p>(?:<\/Alteracao>)?)$/,"\u201D$1")}writeDispositivoTo(e,t){var i,r;const n=Array.from(t.keys());n.sort(qt.compare);for(const s of n){const d=t.get(s);if(Le(s)){e.append("<Alteracao>"),this.emAlteracao=!0,this.ultimoProcessado=s,d.size&&this.writeDispositivoTo(e,d),e.append("</Alteracao>");continue}if(ve(s)){this.ultimoProcessado=s,d.size&&this.writeDispositivoTo(e,d);continue}const c=X.getDispositivoAnteriorDireto(s);if(H(this.ultimoProcessado)&&!ve(s)?ve(c)||e.append(new ge("p").add(new ge("Omissis")).toString()):this.ultimoProcessado===c||this.ultimoProcessado.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO&&lf(c,this.ultimoProcessado)||e.append(new ge("p").add(new ge("Omissis")).toString()),s.situacao.descricaoSituacao!==L.DISPOSITIVO_ORIGINAL||this.hasFilhosPropostos(d)){const p=H(s)?s.caput:s,u=(i=s.rotulo)===null||i===void 0?void 0:i.startsWith("\u201C"),a=this.emAlteracao?(r=s.rotulo)===null||r===void 0?void 0:r.replace("\u201C",""):s.rotulo,l=new ge("p");u&&l.add("\u2018"),l.add(new ge("Rotulo").add(a)).add(X.getTextoDoDispositivoOuOmissis(p)),e.append(l.toString())}else e.append(new ge("p").add(new ge("Omissis")).toString());this.ultimoProcessado=s,d.size&&this.writeDispositivoTo(e,d)}}writeOmissisFinal(e,t){if(t.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO)return;let i=t;for(;i.filhos.length;)i=i.filhos[i.filhos.length-1];i.situacao.descricaoSituacao!==L.DISPOSITIVO_ORIGINAL||ed(i)||e.append(new ge("p").add(new ge("Omissis")).toString())}hasFilhosPropostos(e){if(!e.size)return!1;let t=!1;for(const[i,r]of e.entries()){if(i.situacao.descricaoSituacao!==L.DISPOSITIVO_ORIGINAL){t=!0;break}if(!t&&r.size&&(t=this.hasFilhosPropostos(r),t))break}return t}}class Lm{constructor(e){this.articulacao=e}getTexto(){const e=new Te,t=this.getDispositivosParaCitacao(),i=t.length,r=t.filter(n=>n.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO).length;if(i-r>0){const n=t[0];t.length!==1||H(n)?this.getCitacoesMultiplas(e,t):e.append(new qd().getTexto(n))}return e.toString()}getDispositivosParaCitacao(){const e=X.getDispositivosNaoOriginais(this.articulacao);e.sort(qt.compare);const t=new Array;return e.forEach(i=>{Le(i)?i.pai.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO&&t.push(i):B(i)?t.indexOf(i.pai)>=0&&t.push(i):ed(i)||t.push(i)}),t}getCitacoesMultiplas(e,t){let i,r,n=new Array;t.forEach(s=>{i=!H(s)&&!pe(s)||B(s)?Wu(s):s,i!==r&&(n.length&&this.getCitacaoMultipla(e,n),n=[],n.push(i),r=i),n.indexOf(s)<0&&n.push(s)}),n.length&&this.getCitacaoMultipla(e,n)}getCitacaoMultipla(e,t){e.append(new Rm().getTexto(t))}}const Id=(o,e)=>{o.splice(o.indexOf(e),1)};class St{constructor(e){this.dispositivos=[],e&&this.add(e)}isSituacao(e){return!!this.dispositivos.length&&this.dispositivos[0].situacao.descricaoSituacao===e}isTipo(e){return!!this.dispositivos.length&&this.dispositivos[0].tipo===e}add(e){return!!this.podeAdicionarAoRange(e)&&(this.dispositivos.push(e),!0)}addInicio(e){this.dispositivos.splice(0,0,e)}isUltimo(e){return this.dispositivos.indexOf(e)===this.dispositivos.length-1}getPrimeiro(){return this.dispositivos[0]}getUltimo(){return this.dispositivos[this.dispositivos.length-1]}getQuantidadeDispositivos(){return this.dispositivos.length}getAnterior(e){if(!(e<1))return this.dispositivos[e-1]}getNumeracaoParaComandoEmenda(){let e=this.dispositivos[0].getNumeracaoParaComandoEmenda();return this.dispositivos.length>1&&(e+=" a "+this.getUltimo().getNumeracaoParaComandoEmenda()),e}print(e,t){this.isRotuloNecessario(t)?this.printRotuloInicio(e,t):e.append(this.dispositivos[0].getNumeracaoParaComandoEmenda()),this.printSeparadorProximoDispositivo(e,t),this.printRotuloFimSeExistir(e)}printRotuloFimSeExistir(e){this.dispositivos.length>=2&&e.append(this.dispositivos[this.dispositivos.length-1].getNumeracaoParaComandoEmenda())}printSeparadorProximoDispositivo(e,t){const i=this.getRangeDispositivosPosterior(t);this.dispositivos.length>=3?e.append(" a "):this.dispositivos.length!==2||i?this.dispositivos.length>1&&this.dispositivos.length<3&&i&&e.append(", "):e.append(" e ")}printRotuloInicio(e,t){const i=this.getRangeDispositivosPosterior(t);this.hasApenasUmDispositivo()&&!i||i&&!this.isMesmoTipoSituacao(i)?e.append(this.getRotuloCompletoSingular(this.dispositivos[0])):e.append(this.getRotuloCompletoPlural(this.dispositivos[0]))}isMesmoTipoSituacao(e){return e.isTipo(this.dispositivos[0].tipo)&&e.isSituacao(this.dispositivos[0].situacao.descricaoSituacao)}hasApenasUmDispositivo(){return this.dispositivos.length===1}isRotuloNecessario(e){const t=this.getRangeDispositivosAnterior(e);return!t||!t.isMesmoTipoSituacao(this)||!(!this.isSituacao(L.DISPOSITIVO_ADICIONADO)||this.isMesmoPai(t))}isMesmoPai(e){return this.getPrimeiro().pai===e.getPrimeiro().pai}getRotuloCompletoSingular(e){const t=new Te;e.situacao.descricaoSituacao!==L.DISPOSITIVO_ADICIONADO?t.append(e.artigoDefinidoSingular):t.append(" ");const i=e.getNumeracaoComRotuloParaComandoEmenda();return i.endsWith(".")?t.append(i.substring(0,i.indexOf("."))):t.append(i),t.toString()}getRotuloCompletoPlural(e){const t=new Te;return e.situacao.descricaoSituacao!==L.DISPOSITIVO_ADICIONADO?t.append(e.artigoDefinidoPlural):t.append(" "),t.append(this.getTipoDispositivoPlural(e)),t.append(" "),t.append(e.getNumeracaoParaComandoEmenda()),t.toString()}getRangeDispositivosAnterior(e){const t=e.indexOf(this);if(t>0)return e[t-1]}getRangeDispositivosPosterior(e){if(e.length===1)return;const t=e.indexOf(this);return t>=0&&t<e.length-1?e[t+1]:void 0}getTipoDispositivoPlural(e){var t;return e.tipo===D.artigo.tipo?"arts.":e.tipo===D.paragrafo.tipo?"\xA7\xA7":((t=e.descricaoPlural)===null||t===void 0?void 0:t.toLocaleLowerCase())+""}podeAdicionarAoRange(e){if(this.isVazio())return!0;const t=this.getUltimo();return t.tipo===e.tipo&&!!X.isMesmaSituacaoParaComandoEmenda(t,e)&&!(!H(e)&&e.pai!==t.pai)&&pi(t)===e&&X.isAlteracaoIntegral(t)===X.isAlteracaoIntegral(e)}isVazio(){return this.dispositivos.length===0}toString(){const e=new Te;return this.dispositivos.forEach(t=>{e.append(" "),e.append(""+t.rotulo)}),e.toString()}getDispositivos(){return this.dispositivos}getDispositivo(e){return this.dispositivos[e]}}class Zo{constructor(){this.ranges=new Array,this.localizarArtigoEmAgrupador=!1,this.informarCaputDoDispositivo=!1}isVazio(){return this.ranges.length===0}add(e){this.ranges.push(e)}addInicio(e){this.ranges.unshift(e)}getQuantidadeRanges(){return this.ranges.length}getPrimeiroRange(){return this.ranges[0]}getPrimeiroDispositivo(){return this.ranges[0].getPrimeiro()}getUltimoDispositivo(){return this.ranges[this.ranges.length-1].getUltimo()}getRanges(){return this.ranges}setRanges(e){this.ranges=e}getRange(e){return this.ranges[e]}getTextoListaDeDispositivos(){const e=new Te,t=this.ranges.length;let i=1;for(const r of this.ranges)i>1&&(i===t?e.append(" e "):e.append(", ")),e.append(r.getNumeracaoParaComandoEmenda()),i++;return e.toString()}static debug(e){const t=new Te;for(const i of e)t.append("seq: "+i);console.log(t)}toString(){return this.ranges.toString()}remove(e){Id(this.ranges,e)}}class Ft{getSequencias(e){const t=this.getRanges(e);return this.agrupaRanges(t)}getRanges(e){let t=new Array,i=new St;for(const r of e)i.add(r)||(t.push(i),i=new St,i.add(r));return i.isVazio()||t.push(i),t=Ft.separaRangesDeDoisDispositivos(t),t}static separaRangesDeDoisDispositivos(e){const t=new Array;for(const i of e)i.getQuantidadeDispositivos()===2?(t.push(new St(i.getPrimeiro())),t.push(new St(i.getUltimo()))):t.push(i);return t}separaRangesDeDoisDispositivosEmSequencias(e){for(const t of e)t.setRanges(Ft.separaRangesDeDoisDispositivos(t.getRanges()))}agrupaRanges(e){const t=new Array;let i=new Zo;for(const r of e)i.isVazio()?(i.add(r),t.push(i)):this.isMesmaSequencia(i,r)?i.add(r):(i=new Zo,i.add(r),t.push(i));return t}isMesmaSequencia(e,t){const i=e.getPrimeiroDispositivo(),r=t.getUltimo();return X.isMesmoTipoParaComandoEmenda(i,r)&&X.isMesmaSituacaoParaComandoEmenda(i,r)&&(i.tipo===D.artigo.tipo||i.pai===r.pai)&&i.tipo!==D.omissis.tipo}separaDispositivosSeguidosDeOmissis(e){const t=new Array;for(const i of e)t.push(...this.separaDispositivosSeguidosDeOmissis2(i));return t}separaDispositivosSeguidosDeOmissis2(e){const t=new Array;let i=new Zo;t.push(i);let r=new St;i.add(r);for(const n of e.getRanges()){r.getQuantidadeDispositivos()>0&&(r=new St,i.add(r));for(const s of n.getDispositivos()){const d=Mr(s);d&&d.tipo===D.omissis.tipo?(this.adicionaouDispositivos(i,r)&&(r.getQuantidadeDispositivos()===0&&i.remove(r),i=new Zo,t.push(i),r=new St,i.add(r)),i.informarCaputDoDispositivo=!0,r.add(s),i=new Zo,t.push(i),r=new St,i.add(r)):r.add(s)}}return r.getQuantidadeDispositivos()===0&&i.remove(r),i.getQuantidadeRanges()===0&&Id(t,i),this.separaRangesDeDoisDispositivosEmSequencias(t),t}adicionaouDispositivos(e,t){return e.getQuantidadeRanges()>1||t.getQuantidadeDispositivos()>0}}class zo{constructor(e){this.dispositivos=e}static compare(e,t){var i,r;return!((i=e.dispositivos)===null||i===void 0)&&i.length?!((r=t.dispositivos)===null||r===void 0)&&r.length?qt.compare(e.dispositivos[0],t.dispositivos[0]):-1:1}}var so;(function(o){o[o.NENHUM=0]="NENHUM",o[o.DEFINIDO=1]="DEFINIDO",o[o.DEFINIDO_COM_PREPOSICAO_A=2]="DEFINIDO_COM_PREPOSICAO_A"})(so||(so={}));class zt{constructor(){this.artigoAntesDispositivo=so.NENHUM}getTexto(e){const t=new Te,i=e.length;let r=1;for(const n of e)r>1&&(r===i?t.append(" e "):t.append(", ")),n.informarCaputDoDispositivo?t.append(this.getReferenciaCaputDoDispositivo(n)):t.append(this.getTextoArtigoAntesSequencia(n)),t.append(this.getRotuloTipoDispositivo(n)),t.append(" "),t.append(n.getTextoListaDeDispositivos()),t.append(this.getRotuloPaisSequencia(n)),r++;return t.toString()}getReferenciaCaputDoDispositivo(e){const t=new Te,i=e.getPrimeiroDispositivo();if(i.tipo===D.caput.tipo)return this.getTextoArtigoAntesSequencia(e);const r=X.isSequenciaPlural(e);return t.append(this.getTextoArtigoAntesDispositivo(this.artigoAntesDispositivo,nd,r)),t.append(" caput "),e.getRange(0).getQuantidadeDispositivos()===1?t.append(i.pronomePossessivoSingular):t.append(i.pronomePossessivoPlural),t.toString()}getTextoArtigoAntesSequencia(e){const t=e.getPrimeiroDispositivo(),i=X.isSequenciaPlural(e);return this.getTextoArtigoAntesDispositivo(this.artigoAntesDispositivo,t,i)}getTextoArtigoAntesDispositivo(e,t,i){switch(e){case so.DEFINIDO:return i?t.artigoDefinidoPlural:t.artigoDefinidoSingular;case so.DEFINIDO_COM_PREPOSICAO_A:return i?t.artigoDefinidoPrecedidoPreposicaoAPlural:t.artigoDefinidoPrecedidoPreposicaoASingular;default:return""}}getRotuloTipoDispositivo(e){const t=e.getPrimeiroDispositivo();return zt.getRotuloTipoDispositivo(t,X.isSequenciaPlural(e))}static getRotuloTipoDispositivo(e,t){return e.getNumeracaoParaComandoEmenda().indexOf("\xFAnico")>=0?"":t?H(e)?"arts.":fe(e)?"\xA7\xA7":String(e.descricaoPlural).toLocaleLowerCase():H(e)?e.situacao.descricaoSituacao!==L.DISPOSITIVO_MODIFICADO||X.isAlteracaoIntegral(e)?"art.":"caput do art.":fe(e)?"\xA7":String(e.descricao).toLowerCase()}getRotuloPaisSequencia(e){const t=e.getPrimeiroDispositivo(),i=e.localizarArtigoEmAgrupador;return this.getRotuloPais(t,i)}getRotuloPais(e,t){var i;const r=new Te;let n;for(;!si(e);){if(n=e.pai,n&&Le(n)){if(e.tipo===D.omissis.tipo){const s=X.getDispositivoAnteriorDireto(e);if(s.tipo!==D.alteracao.tipo)return r.append("ap\xF3s "),r.append(s.artigoDefinidoSingular),r.append(s.getNumeracaoComRotuloParaComandoEmenda()),r.append(this.getRotuloPais(s,t)),r.toString()}break}if(n&&!si(n)&&(!pe(n)||H(e)&&t)){const s=B(e),d=!s&&e.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO,c=s&&!X.isTextoOmitido(e)&&e.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO&&!Od.existeNaNormaAlterada(e);if(d||c)r.append(n.artigoDefinidoPrecedidoPreposicaoASingular);else if(me(e)){const p=X.getDispositivoAnteriorDireto(e),u=X.getDispositivoPosteriorDireto(e);if(p===n&&u&&u.pai===n){const a=u.pronomePossessivoSingular+" "+((i=u.descricao)===null||i===void 0?void 0:i.toLowerCase())+" "+u.getNumeracaoParaComandoEmenda();r.append("antes "+a),r.append(n.pronomePossessivoSingular)}else if(!qe(p)||!p.pai)return r.append("ap\xF3s "),r.append(p.artigoDefinidoSingular),r.append(p.getNumeracaoComRotuloParaComandoEmenda()),r.append(this.getRotuloPais(p,t)),r.toString()}else r.append(n.pronomePossessivoSingular);r.append(n.getNumeracaoComRotuloParaComandoEmenda())}else if(H(e)&&si(n)&&t){const s=X.getProximoAgrupador(e);s&&(r.append(" antes "),r.append(s.pronomePossessivoSingular),r.append(s.getNumeracaoComRotuloParaComandoEmenda()))}if(!n)break;e=n}return r.toString()}setArtigoAntesDispositivo(e){this.artigoAntesDispositivo=e}}class Mm extends zo{constructor(e,t){super(e),this.dispositivos=e,this.generoNormaAlterada=t}getTexto(e,t,i){const r=new Te,n=new Ft().getSequencias(this.dispositivos);t||r.append(i?"; e ":"; "),r.append("acrescentar ");const s=new zt;if(r.append(s.getTexto(n)),i){const d=n[n.length-1];r.append(" "),H(d.getPrimeiroDispositivo())?r.append(this.generoNormaAlterada.artigoDefinidoPrecedidoPreposicaoASingular):r.append(this.generoNormaAlterada.pronomePossessivoSingular),r.append(" ")}return po(r.toString())}}class jm extends zo{constructor(e,t){super(e),this.dispositivos=e,this.generoNormaAlterada=t}getTexto(e,t,i){const r=new Te,n=new Ft,s=n.separaDispositivosSeguidosDeOmissis(n.getSequencias(this.dispositivos));t||r.append(i?"; e ":"; "),r.append("modificar ");const d=new zt;return d.setArtigoAntesDispositivo(so.DEFINIDO),r.append(d.getTexto(s)),i&&(r.append(" "),r.append(this.generoNormaAlterada.pronomePossessivoSingular),r.append(" ")),po(r.toString())}}class $m extends zo{constructor(e,t,i,r){super(e),this.dispositivos=e,this.alteracao=t,this.urnNormaAlterada=i,this.generoNormaAlterada=r}getTexto(e,t,i){const r=new Te,n=new Ft().getSequencias(this.dispositivos),s=X.isSequenciasPlural(n);t&&i?(r.append(s?"Suprimam-se ":"Suprima-se "),this.escreveDispositivoAlterado(r,this.alteracao.pai),r.append(" "),r.append(e.genero.pronomePossessivoSingular),r.append(" "),r.append(e.nome),r.append(" ")):(t||r.append(i?"; e ":"; "),r.append("suprimir "));const d=new zt;return d.setArtigoAntesDispositivo(so.DEFINIDO),r.append(d.getTexto(n)),i&&(r.append(" "),r.append(this.generoNormaAlterada.pronomePossessivoSingular),r.append(" "),t&&(r.append(_n(this.urnNormaAlterada)),r.append("."))),po(r.toString())}escreveDispositivoAlterado(e,t){e.append(t.pronomePossessivoSingular),e.append(zt.getRotuloTipoDispositivo(t,!1)),e.append(" "),e.append(t.getNumeracaoParaComandoEmenda()),e.append(X.getRotuloPais(t))}}class Um{constructor(e){this.alteracao=e}getTexto(e){const t=new Te,i=X.getDispositivosNaAlteracaoParaComando(this.alteracao),r=this.alteracao.base;if(!r)return"N\xE3o foi poss\xEDvel gerar o comando de emenda porque a norma alterada n\xE3o foi informada.";const n=(h=>{const f=Mo(h);return wa(f.genero)})(r);let s=!1;const d=new Array,c=i.filter(h=>h.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO);c.length&&d.push(new $m(c,this.alteracao,r,n));const p=i.filter(h=>X.getDescricaoSituacaoParaComandoEmenda(h)===L.DISPOSITIVO_MODIFICADO);p.length&&(d.push(new jm(p,n)),s=!0);const u=i.filter(h=>X.getDescricaoSituacaoParaComandoEmenda(h)===L.DISPOSITIVO_ADICIONADO);u.length&&(d.push(new Mm(u,n)),s=!0),d.sort(zo.compare),s&&(t.append("Altere-se "),this.escreveDispositivoAlterado(t,this.alteracao.pai),t.append(" "),t.append(e.genero.pronomePossessivoSingular),t.append(" "),t.append(e.nome),t.append(" para "));let a=0;const l=d.length-1;return d.forEach(h=>{t.append(h.getTexto(e,a===0,a===l)),a++}),s&&(this.escreveLei(t,r),this.temCitacao(p,u)?t.append(", nos termos a seguir:"):t.append(".")),po(t.toString())}temCitacao(e,t){return!!e.length||!!t.find(i=>!me(i))}escreveDispositivoAlterado(e,t){e.append(t.artigoDefinidoSingular),e.append(zt.getRotuloTipoDispositivo(t,!1)),e.append(" "),e.append(t.getNumeracaoParaComandoEmenda()),e.append(X.getRotuloPais(t))}escreveLei(e,t){e.append(_n(t))}}class Fm extends zo{constructor(e){super(e),this.dispositivos=e}getTexto(e,t,i){const r=new Te;let n=new Ft().getSequencias(this.dispositivos);n=this.trataLocalizacaoArtigoEmAgrupador(n);const s=X.isSequenciasPlural(n);t?r.append(s?"Acrescentem-se ":"Acrescente-se "):(r.append(i?"; e ":"; "),r.append(s?"acrescentem-se ":"acrescente-se "));const d=new zt;if(r.append(d.getTexto(n)),i){const c=n[n.length-1];!H(c.getPrimeiroDispositivo())||c.localizarArtigoEmAgrupador?r.append(e.genero.pronomePossessivoSingular):r.append(e.genero.artigoDefinidoPrecedidoPreposicaoASingular),r.append(e.nome),r.append(t?", com a seguinte reda\xE7\xE3o:":", nos termos a seguir:")}return po(r.toString())}trataLocalizacaoArtigoEmAgrupador(e){const t=new Array;for(const i of e)H(i.getPrimeiroDispositivo())?t.push(...this.trataLocalizacaoArtigoAgrupadorSequencia(i)):t.push(i);return t}trataLocalizacaoArtigoAgrupadorSequencia(e){const t=new Array,i=new Array;for(const c of e.getRanges())i.push(...c.getDispositivos());let r=!1;for(const c of i)if(this.isInclusaoArtigoProximoAgrupador(c)){r=!0;break}if(!r)return t.push(e),t;let n=new Zo;n.localizarArtigoEmAgrupador=!0,t.push(n);let s,d=new St;n.add(d);for(const c of i)d.isVazio()||(c.pai!==s.pai?(n=new Zo,n.localizarArtigoEmAgrupador=!0,t.push(n),d=new St,n.add(d)):X.getDispositivoIrmaoPosterior(s)!==c&&(d=new St,n.add(d))),d.add(c),s=c;for(const c of t)c.setRanges(Ft.separaRangesDeDoisDispositivos(c.getRanges()));return t}isInclusaoArtigoProximoAgrupador(e){return this.isInclusaoArtigoInicioAgrupador(e)||this.isInclusaoArtigoAntesAgrupador(e)}isInclusaoArtigoInicioAgrupador(e){const t=e.pai;return!(si(t)||!pe(t))&&t.filhos.indexOf(e)===0}isInclusaoArtigoAntesAgrupador(e){const t=e.pai,i=X.getDispositivoIrmaoPosterior(e);return!!i&&t!==i.pai}}class zm{constructor(e){this.dispositivos=e}getTexto(e){if(!this.dispositivos.length)return"";let t;const i=e.genero.contracaoEmArtigoDefinidoSingular+" "+e.nome;return t=this.dispositivos.length>1?"Acrescentem-se, onde couber, "+i+" os seguintes artigos:":"Acrescente-se, onde couber, "+i+" o seguinte artigo:",po(t)}}class Bm extends zo{constructor(e){super(e),this.dispositivos=e}getTexto(e,t,i){const r=new Te,n=new Ft().getSequencias(this.dispositivos);t?(r.append("D\xEA-se "),i||r.append("nova reda\xE7\xE3o ")):(r.append(i?"; e ":"; "),r.append("d\xEA-se nova reda\xE7\xE3o "));const s=new zt;return s.setArtigoAntesDispositivo(so.DEFINIDO_COM_PREPOSICAO_A),r.append(s.getTexto(n)),i&&(r.append(" "+e.genero.pronomePossessivoSingular+" "+e.nome),r.append(t?" a seguinte reda\xE7\xE3o:":", nos termos a seguir:")),po(r.toString())}}class Vm extends zo{constructor(e){super(e),this.dispositivos=e}getTexto(e,t,i){const r=new Te,n=new Ft().getSequencias(this.dispositivos),s=X.isSequenciasPlural(n);t?r.append(s?"Suprimam-se ":"Suprima-se "):(r.append(i?"; e ":"; "),r.append(s?"suprimam-se ":"suprima-se "));const d=new zt;return d.setArtigoAntesDispositivo(so.DEFINIDO),r.append(d.getTexto(n)),i&&(r.append(" "+e.genero.pronomePossessivoSingular+" "+e.nome),r.append(t?".":", nos termos a seguir:")),po(r.toString())}}class Hm{constructor(e){this.dispositivosEmenda=e}getTexto(e){let t="";const i=X.getDispositivosComando(this.dispositivosEmenda),r=i.filter(a=>a.situacao instanceof Io&&a.situacao.tipoEmenda===ft.EMENDA_ARTIGO_ONDE_COUBER);if(r.length){if(r.length<i.length)throw new Error("Adi\xE7\xE3o de artigos onde couber e outras altera\xE7\xF5es na mesma emenda.");return new zm(r).getTexto(e)}const n=[],s=i.filter(a=>a.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO);s.length&&n.push(new Vm(s));const d=i.filter(a=>a.situacao.descricaoSituacao===L.DISPOSITIVO_MODIFICADO);d.length&&n.push(new Bm(d));const c=i.filter(a=>a.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO);c.length&&n.push(new Fm(c)),n.sort(zo.compare);let p=0;const u=n.length-1;return n.forEach(a=>{t+=a.getTexto(e,p===0,p===u),p++}),t}}class Km{constructor(e,t){this.urn=e,this.articulacao=t}getComandoEmenda(){const e=new _d,t=X.getDispositivosNaoOriginais(this.articulacao),i=this.getDispositivosRepresentativosDeCadaComando(t);if(i.sort(qt.compare),!i.length)return e;const r=(n=>{const s=Mo(n);let d=wa(s.genero),c="Projeto";return d===rd&&(c=s.urn.startsWith("medida.provisoria")?"Medida Provis\xF3ria":"Proposta"),new pf(c,d)})(this.urn);return i.forEach(n=>{let s,d,c;qe(n)?(s=new Um(n).getTexto(r),d=new Dm().getTexto(n)):(s=new Hm(t).getTexto(r),d=new Lm(this.articulacao).getTexto(),c=this.getTextoComplemento(t));const p=new Nm(s,d);c&&(p.complemento=c),e.comandos.push(p)}),e.comandos.length>1&&(e.cabecalhoComum=this.montaCabecalhoComum(r,e.comandos.length),e.comandos.forEach((n,s)=>{n.rotulo=`Item ${s+1} \u2013`})),e}getDispositivosRepresentativosDeCadaComando(e){const t=[];let i=!1;return e.forEach(r=>{const n=Me(r);n&&Le(n)?t.includes(n)||n.pai.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO||n.pai.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO||t.push(n):i||(i=!0,t.push(r))}),t}montaCabecalhoComum(e,t){return`D\xEA-se nova reda\xE7\xE3o ${e.genero.artigoDefinidoPrecedidoPreposicaoASingular} ${e.nome} nos termos dos itens ${this.listarItens(t)} a seguir.`}listarItens(e){return Array(e).fill(0).map((t,i)=>i+1).join(", ").replace(/, (\d+?)$/," e $1")}getTextoComplemento(e){const t=e.filter(i=>!B(i)&&i.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO&&i.situacao.tipoEmenda!==ft.EMENDA_ARTIGO_ONDE_COUBER&&i.pai.situacao.descricaoSituacao!==L.DISPOSITIVO_ADICIONADO);if(t.length&&X.verificaNecessidadeRenumeracaoRedacaoFinal(t))return"Os dispositivos acima propostos e adjacentes dever\xE3o ser devidamente renumerados no momento da consolida\xE7\xE3o das emendas ao texto da proposi\xE7\xE3o."}}class Gm{constructor(e,t,i){this.tipoEmenda=e,this.urn=t,this.articulacao=i}getDispositivosEmenda(){const e=new wd;return this.preencheDispositivos(e),e}preencheDispositivos(e){const t=X.getDispositivosNaoOriginais(this.articulacao),i=t.filter(s=>s.situacao.descricaoSituacao===L.DISPOSITIVO_SUPRIMIDO&&s.pai.situacao.descricaoSituacao!==L.DISPOSITIVO_SUPRIMIDO);if(i.length)for(const s of i){const d=new km;d.tipo=this.getTipoDispositivoParaEmenda(s),d.id=s.id,d.rotulo=s.rotulo,e.dispositivosSuprimidos.push(d)}const r=t.filter(s=>s.situacao.descricaoSituacao===L.DISPOSITIVO_MODIFICADO);if(r.length)for(const s of r){const d=new Ed;if(H(s)){const c=s.caput;d.tipo=this.getTipoDispositivoParaEmenda(c),d.id=c.id,d.texto=c.texto}else d.tipo=this.getTipoDispositivoParaEmenda(s),d.id=s.id,d.texto=s.texto;d.rotulo=s.rotulo,s.isDispositivoAlteracao&&this.preencheAtributosAlteracao(s,d),e.dispositivosModificados.push(d)}const n=t.filter(s=>s.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO&&!(s.pai.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO||ve(s.pai)&&s.pai.pai.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO));if(n.length)for(const s of n){const d=this.criaDispositivoEmendaAdicionado(s);e.dispositivosAdicionados.push(d)}}criaDispositivoEmendaAdicionado(e,t=!0){var i,r,n;const s=new Pm;if(s.tipo=this.getTipoDispositivoParaEmenda(e),e.id||(e.id=Co(e)),s.id=e.id,ve(e)||Le(e)||me(e)||(s.rotulo=e.rotulo),H(e)||Le(e)||(s.texto=e.texto),t)if(ve(e)||Le(e))s.idPai=(i=e.pai)===null||i===void 0?void 0:i.id;else{const c=X.getFilhosEstiloLexML(e.pai);e!==c[0]?s.idIrmaoAnterior=c[c.indexOf(e)-1].id:si(e.pai)||(s.idPai=(r=e.pai)===null||r===void 0?void 0:r.id)}if(Le(e)){const c=e.base;c&&(s.urnNormaAlterada=c)}else e.isDispositivoAlteracao&&(s.existeNaNormaAlterada=(n=e.situacao)===null||n===void 0?void 0:n.existeNaNormaAlterada,this.preencheAtributosAlteracao(e,s));const d=X.getFilhosEstiloLexML(e);return ve(e)&&e.pai.alteracoes&&d.push(e.pai.alteracoes),d.length&&(s.filhos=[],d.forEach(c=>{(ve(c)||Le(c)||c.situacao.descricaoSituacao===L.DISPOSITIVO_ADICIONADO)&&s.filhos.push(this.criaDispositivoEmendaAdicionado(c,!1))})),s}getTipoDispositivoParaEmenda(e){return qe(e)?"Alteracao":e.tipo}preencheAtributosAlteracao(e,t){if(!me(e)&&t.texto&&t.texto.indexOf(xt)>=0&&(t.textoOmitido=!0),t.rotulo&&t.rotulo.indexOf("\u201C")>=0&&(t.abreAspas=!0,t.rotulo=t.rotulo.replace("\u201C","")),t.texto){const i=Ku(t.texto),r=/”(?: ?(\(NR\)|\(AC\)))?$/.exec(i);if(r){const n=r[0];t.fechaAspas=!0,r.length===2&&(t.notaAlteracao=r[1]),t.texto=t.texto.replace(new RegExp($i(n)),"")}}}}const $n=(o,e)=>{var t;let i;if(i=pe(o)?e.lXhier=[]:e.lXcontainersOmissis=[],H(o)){const r=Pa(o.caput);Qm(o,r.value),i.push(r),Yl((t=o.filhos)===null||t===void 0?void 0:t.filter(n=>!ve(n.pai)),i),$n(o.caput,r.value)}else Yl(o.filhos,i);return i},Qm=(o,e)=>{var t,i,r;o.hasAlteracao()&&(e.alteracao={TYPE_NAME:"br_gov_lexml__1.Alteracao",base:"",id:"",content:[]},e.alteracao.base=(i=(t=o.alteracoes)===null||t===void 0?void 0:t.base)!==null&&i!==void 0?i:"",e.alteracao.id=(n=>{const s=[];return On(n,s),s.join("_")+"_alt1"})(o.caput),(r=o.alteracoes.filhos)===null||r===void 0||r.forEach(n=>{const s=Pa(n);e.alteracao.content.push(s),$n(n,s.value)}))},Yl=(o,e)=>{o==null||o.forEach(t=>{const i=Pa(t);e.push(i),$n(t,i.value)})},Pa=o=>{const e={name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:o.tipo,prefix:"",key:`{http://www.lexml.gov.br/1.0}${o.tipo}`,string:`{http://www.lexml.gov.br/1.0}${o.tipo}`},value:{TYPE_NAME:"br_gov_lexml__1.DispositivoType"}};return Wm(o,e.value),e},Wm=(o,e)=>{e.href=ve(o)?xr(o.pai)+"_"+xr(o):xr(o),e.id=Co(o),o.rotulo&&/^["”“].*/.test(o.rotulo)?(e.abreAspas="s",e.rotulo=o.rotulo.substring(1)):ve(o)||me(o)||(e.rotulo=o.rotulo),ve(o)&&/”.*(NR)/.test(o.texto)&&(e.fechaAspas="s",e.notaAlteracao="NR"),pe(o)?e.nomeAgrupador={TYPE_NAME:"br_gov_lexml__1.GenInline",content:Jl(o)}:H(o)||(o.texto===xt?e.textoOmitido="s":e.p=[{TYPE_NAME:"br_gov_lexml__1.GenInline",content:Jl(o)}])},Jl=o=>{const e=/<a[^>]+href="(.*?)"[^>]*>(.*?)<\/a>/gi,t=[],i=o.texto.match(e);if(i)o.texto.startsWith(i[0])||t.push(o.texto.substring(0,o.texto.indexOf(i[0])));else{const r=o.texto.indexOf("\u201D (NR)");t.push(o.texto.substring(0,r===-1?void 0:r))}return i==null||i.forEach((r,n)=>{var s,d;const c=r.match(e)?r:"";t.push(Zm(c!=null?c:""));const p=((s=o.texto)===null||s===void 0?void 0:s.indexOf(r))+r.length;if(p<o.texto.length-1){const u=i[n+1]?o.texto.indexOf(i[n+1]):o.texto.length;t.push((d=o.texto.substring(p,u))===null||d===void 0?void 0:d.replace(/strong>/gi,"b>").replace(/em>/gi,"i>"))}}),t},Zm=o=>{var e;const t=o.match(/href="(.*?)"*>/i),i=t&&t[1]?t[1]:"",r=o.match(/<a[^>]+href=".*?"[^>]*>(.*?)<\/a>/);return{name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:"span",prefix:"",key:"{http://www.lexml.gov.br/1.0}span",string:"{http://www.lexml.gov.br/1.0}span"},value:{TYPE_NAME:"br_gov_lexml__1.GenInline",href:i,content:r&&r[1]?[(e=r[1])===null||e===void 0?void 0:e.trim()]:[""]}}};let Na=!1;const ec=(o,e=!1)=>{var t,i;if(Na=e,!(!((t=o==null?void 0:o.value)===null||t===void 0)&&t.projetoNorma))throw new Error("N\xE3o se trata de um documento lexml v\xE1lido");return Ke(Ke(Ke({classificacao:!((i=o.value)===null||i===void 0)&&i.projetoNorma.norma?ft.NORMA:ft.PROJETO,tipo:Mo(Un(o))},Xm(o)),Ym(o)),Jm(o.value.projetoNorma.norma?o.value.projetoNorma.norma:o.value.projetoNorma.projeto))},_r=o=>o==null?void 0:o.replace(/[\n]/g,"").trim(),Un=o=>{var e,t,i;return(i=(t=(e=o==null?void 0:o.value)===null||e===void 0?void 0:e.metadado)===null||t===void 0?void 0:t.identificacao)===null||i===void 0?void 0:i.urn},Xm=o=>({urn:Un(o)}),Ym=o=>{var e,t,i,r,n,s,d,c,p,u,a,l,h,f,m,v;const g=(s=(n=(r=(i=(t=(e=o==null?void 0:o.value)===null||e===void 0?void 0:e.projetoNorma)===null||t===void 0?void 0:t.norma)===null||i===void 0?void 0:i.parteInicial)===null||r===void 0?void 0:r.epigrafe)===null||n===void 0?void 0:n.content[0])!==null&&s!==void 0?s:"",y=Pd((u=(p=(c=(d=o==null?void 0:o.value)===null||d===void 0?void 0:d.projetoNorma)===null||c===void 0?void 0:c.norma)===null||p===void 0?void 0:p.parteInicial)===null||u===void 0?void 0:u.ementa.content),b=(v=(m=(f=(h=(l=(a=o==null?void 0:o.value)===null||a===void 0?void 0:a.projetoNorma)===null||l===void 0?void 0:l.norma)===null||h===void 0?void 0:h.parteInicial)===null||f===void 0?void 0:f.preambulo)===null||m===void 0?void 0:m.p[0].content[0])!==null&&v!==void 0?v:"";return{epigrafe:_r(g),ementa:_r(y),preambulo:_r(b)}},Jm=o=>({articulacao:e0(o.articulacao)}),e0=o=>{const e=Ia();return Or(e,o.lXhier),e},Or=(o,e)=>{o&&e&&(e==null||e.forEach(t=>{var i,r,n,s,d,c,p,u,a,l,h,f,m,v,g,y;let b;const x=(i=t.value)===null||i===void 0?void 0:i.notaAlteracao,w=((r=t.value)===null||r===void 0?void 0:r.fechaAspas)!==void 0?x?`\u201D (${x})`:"\u201D (NR)":"";((n=t.name)===null||n===void 0?void 0:n.localPart)==="Caput"?(((s=t.value)===null||s===void 0?void 0:s.abreAspas)==="s"?(b.rotulo="\u201C"+((d=t.value)===null||d===void 0?void 0:d.rotulo),b.cabecaAlteracao=!0,b.notaAlteracao=x):!((c=t.value)===null||c===void 0)&&c.rotulo&&(b.rotulo=t.value.rotulo,b.createNumeroFromRotulo(b.rotulo)),o.texto=!((p=t.value)===null||p===void 0)&&p.textoOmitido?xt:_r(kd(t))+w,o.caput.href=(u=t.value)===null||u===void 0?void 0:u.href,o.caput.id=(a=t.value)===null||a===void 0?void 0:a.id,tc(o,(l=t.value)===null||l===void 0?void 0:l.alteracao),Or(o.caput,(h=t.value)===null||h===void 0?void 0:h.lXcontainersOmissis)):((f=t.name)===null||f===void 0?void 0:f.localPart)==="alteracao"?(tc(o,t),Or(o.caput,(m=t.value)===null||m===void 0?void 0:m.lXcontainersOmissis)):(b=Sd(o,t),Or(b,(g=(v=t.value)===null||v===void 0?void 0:v.lXhier)!==null&&g!==void 0?g:(y=t.value)===null||y===void 0?void 0:y.lXcontainersOmissis))}))},tc=(o,e)=>{var t;e&&(Sa(o),o.alteracoes.id=e.id,o.alteracoes.base=e.base,Na&&(o.alteracoes.situacao=new lo),(t=e.content)===null||t===void 0||t.forEach(i=>{var r,n,s,d;const c=Sd(o.alteracoes,i);c.isDispositivoAlteracao=!0,c.rotulo="\u201C"+((r=i.value)===null||r===void 0?void 0:r.rotulo),Or(c,(s=(n=i.value)===null||n===void 0?void 0:n.lXhier)!==null&&s!==void 0?s:(d=i.value)===null||d===void 0?void 0:d.lXcontainersOmissis)}))},Sd=(o,e)=>{var t,i,r,n,s,d,c,p,u;const a=de(o,(t=e.name)===null||t===void 0?void 0:t.localPart),l=(i=e.value)===null||i===void 0?void 0:i.notaAlteracao,h=((r=e.value)===null||r===void 0?void 0:r.fechaAspas)!==void 0?l?`\u201D (${l})`:"\u201D (NR)":"";return me(a)||(((n=e.value)===null||n===void 0?void 0:n.abreAspas)==="s"?(a.rotulo="\u201C"+((s=e.value)===null||s===void 0?void 0:s.rotulo),a.cabecaAlteracao=!0,a.notaAlteracao=l):a.rotulo=(d=e.value)===null||d===void 0?void 0:d.rotulo,a.createNumeroFromRotulo(a.rotulo)),a.href=(c=e.value)===null||c===void 0?void 0:c.href,a.id=(p=e.value)===null||p===void 0?void 0:p.id,Na&&(a.situacao=new lo,H(a)&&(a.caput.situacao=new lo)),a.texto=!((u=e.value)===null||u===void 0)&&u.textoOmitido?xt:_r(kd(e))+h,a},kd=o=>{var e,t,i,r,n;let s="";return!((e=o.value)===null||e===void 0)&&e.nomeAgrupador?(t=o.value.nomeAgrupador.content[0])!==null&&t!==void 0?t:"":((n=(r=(i=o.value)===null||i===void 0?void 0:i.p)===null||r===void 0?void 0:r.map(d=>d))===null||n===void 0||n.map(d=>d.content).forEach(d=>s+=Pd(d)),s.replace(/b>/gi,"strong>").replace(/i>/gi,"em>"))},Pd=o=>{let e="";return o==null||o.forEach(t=>{var i;t.value?e+=`<a href="${(i=t.value).href}"> ${i.content[0]} </a>`:e+=t}),e},oc={name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:"LexML",prefix:"",key:"{http://www.lexml.gov.br/1.0}LexML",string:"{http://www.lexml.gov.br/1.0}LexML"},value:{TYPE_NAME:"br_gov_lexml__1.LexML",metadado:{TYPE_NAME:"br_gov_lexml__1.Metadado",identificacao:{TYPE_NAME:"br_gov_lexml__1.Identificacao",urn:""}},projetoNorma:{TYPE_NAME:"br_gov_lexml__1.ProjetoNorma",norma:{TYPE_NAME:"br_gov_lexml__1.HierarchicalStructure",parteInicial:{TYPE_NAME:"br_gov_lexml__1.ParteInicial",epigrafe:{TYPE_NAME:"br_gov_lexml__1.GenInline",id:"epigrafe",content:[""]},ementa:{TYPE_NAME:"br_gov_lexml__1.GenInline",id:"ementa",content:[""]},preambulo:{TYPE_NAME:"br_gov_lexml__1.TextoType",id:"preambulo",p:[{TYPE_NAME:"br_gov_lexml__1.GenInline",content:[""]}]}},articulacao:{TYPE_NAME:"br_gov_lexml__1.Articulacao",lXhier:[{name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:"Artigo",prefix:"",key:"{http://www.lexml.gov.br/1.0}Artigo",string:"{http://www.lexml.gov.br/1.0}Artigo"},value:{TYPE_NAME:"br_gov_lexml__1.DispositivoType",id:"art1",rotulo:"Art. 1\xBA",lXcontainersOmissis:[{name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:"Caput",prefix:"",key:"{http://www.lexml.gov.br/1.0}Caput",string:"{http://www.lexml.gov.br/1.0}Caput"},value:{TYPE_NAME:"br_gov_lexml__1.DispositivoType",id:"art1_cpt",p:[{TYPE_NAME:"br_gov_lexml__1.GenInline",content:[""]}]}}]}}]}}}}};let lr=class extends Gr(he)(tt){constructor(){super(...arguments),this.modo="",this.projetoNorma={},this._timerLoadEmenda=0}createRenderRoot(){return this}getDispositivosEmenda(){const o=this.modo;if(o!==ft.EMENDA&&o!==ft.EMENDA_ARTIGO_ONDE_COUBER)return;const e=this.projetoNorma.value.metadado.identificacao.urn,t=he.getState().elementoReducer.articulacao;return new Gm(o,e,t).getDispositivosEmenda()}getComandoEmenda(){const o=this.projetoNorma.value.metadado.identificacao.urn,e=he.getState().elementoReducer.articulacao;return new Km(o,e).getComandoEmenda()}getProjetoAtualizado(){const o=Ke({},this.projetoNorma),e=(t=he.getState().elementoReducer.articulacao,{TYPE_NAME:"br_gov_lexml__1.Articulacao",lXhier:$n(t,{articulacao:{}})});var t;return o.value.projetoNorma[o.value.projetoNorma.norma?"norma":"projeto"].articulacao.lXhier=e.lXhier,o}update(o){(this.hasChangedProjetoNorma(o)||this.hasChangedModo(o))&&(this.loadProjetoNorma(),document.querySelector("lexml-eta-articulacao").style.display="block"),this.dispositivosEmenda&&this.hasChangedEmenda(o)&&this.loadEmenda(),super.update(o)}hasChangedProjetoNorma(o){return o.has("projetoNorma")&&o.get("projetoNorma")!==void 0}hasChangedModo(o){return o.has("modo")&&o.get("modo")!==void 0}hasChangedEmenda(o){return o.has("dispositivosEmenda")&&o.get("dispositivosEmenda")}loadProjetoNorma(){var o,e,t,i,r;let n;if(this.projetoNorma&&this.projetoNorma.value||(this.projetoNorma=oc),this.modo===ft.EMENDA_ARTIGO_ONDE_COUBER){const d=(o=Un(this.projetoNorma))!==null&&o!==void 0?o:"";n=ec(oc,!0),n.urn=d;const c=n.articulacao.artigos[0];c.rotulo="Art.",c.numero="1",c.id="art1";const p=new Io;p.tipoEmenda=ft.EMENDA_ARTIGO_ONDE_COUBER,c.situacao=p,!((t=(e=this.dispositivosEmenda)===null||e===void 0?void 0:e.dispositivosAdicionados)===null||t===void 0)&&t.length&&n.articulacao.removeFilho(n.articulacao.filhos[0])}else n=ec(this.projetoNorma,this.modo===ft.EMENDA);var s;(r=(i=document.querySelector("lexml-emenda"))===null||i===void 0?void 0:i.querySelector("sl-tab"))===null||r===void 0||r.click(),he.dispatch((s=n.articulacao,{type:"ABRIR_ARTICULACAO",classificacao:this.modo,articulacao:s}))}loadEmenda(){this.dispositivosEmenda&&(clearInterval(this._timerLoadEmenda),this._timerLoadEmenda=window.setTimeout(()=>{he.dispatch(Xh.execute(this.dispositivosEmenda))},1e3))}render(){return xe`
      <style>
        #gtx-trans {
          display: block;
        }

        lexml-eta-articulacao {
          display: none;
          height: 100%;
        }

        lexml-eta-articulacao:focus {
          outline: 0;
          border: 0px solid #f1f1f1;
          -webkit-box-shadow: 0px;
          box-shadow: none;
        }
      </style>

      <lexml-eta-articulacao></lexml-eta-articulacao>
    `}};le([Be({type:String})],lr.prototype,"modo",void 0),le([Be({type:Object})],lr.prototype,"projetoNorma",void 0),le([Be({type:Object})],lr.prototype,"dispositivosEmenda",void 0),lr=le([It("lexml-eta")],lr);const t0=Hr`
  fieldset {
    border: 0;
    padding: 5px 0 20px 0;
  }

  legend {
    font-weight: normal;
  }

  .lexml-autoria {
    display: block;
    /* height: 100%; */
    /* padding: 0 10px; */
    /* margin: 0px 5px; */
    font-size: 1em;
    max-width: 700px;
  }

  .lexml-autocomplete {
    width: 100%;
  }

  .grid-autoria {
    display: grid;
    grid-template-columns: 3fr 2fr 250px;
  }

  .autoria-list {
    max-height: 185px;
    overflow: hidden;
    overflow-y: scroll;
  }

  .autoria-grid {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    padding: 0 0 4px 0;
  }

  .autoria-grid--col1 {
    flex: none;
    order: 0;
    flex-grow: 1;
  }

  .autoria-grid--col2 {
    flex: none;
    order: 1;
    flex-grow: 1;
  }

  .autoria-grid--col3 {
    flex: none;
    order: 2;
    flex-grow: 1;
  }

  [class^='autoria-grid--'] {
    margin: 0px 2px;
  }

  .autoria-grid:first-child {
    padding: 0 0 2px 0;
  }

  .autoria-header {
    width: 180px;
    padding: 0px 2px;
  }

  .autoria-buttons {
    width: 90px;
    text-align: right;
  }

  .autoria-input {
    width: 180px;
    padding: 1px 2px;
    margin: 0px;
  }

  .autoria-button {
    background-color: white;
    border: 1px solid #555;
    border-radius: 2px;
    padding: 2px 4px;
    cursor: pointer;
  }

  .autoria-label {
    display: none;
  }

  .autoria-icon {
    background-color: #555;
  }

  .icon-up {
    display: block;
    width: 16px;
    height: 16px;
    -webkit-mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z'/></svg>");
    mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z'/></svg>");
  }

  .icon-down {
    display: block;
    width: 16px;
    height: 16px;
    -webkit-mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>");
    mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>");
  }

  .icon-delete {
    display: block;
    width: 16px;
    height: 16px;
    -webkit-mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg>");
    mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg>");
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .assinaturas-adicionais {
    padding-top: 10px;
  }

  .assinaturas-adicionais div {
    padding-top: 5px;
  }

  .assinaturas-adicionais .autoria-input {
    display: block;
  }

  @media (max-width: 576px) {
    .autoria-grid {
      flex-direction: column;
    }

    .autoria-list {
      max-height: 410px;
    }
    .autoria-labels {
      display: none;
    }
    .autoria-label {
      display: block;
    }

    .autoria-buttons {
      width: calc(100% - 3px);
    }

    .autoria-input {
      width: calc(100% - 10px);
    }

    [class^='autoria-grid--'] {
      width: 100%;
      padding: 2px 0;
    }
  }
`,sn=new class{constructor(){this.identificacao="",this.nome="",this.sexo="M",this.siglaPartido="",this.siglaUF="",this.siglaCasaLegislativa="CD",this.cargo=""}};function ic(o=200){return function(e,t,i){return{get(){const r=(...n)=>{let s=0;const d=()=>{clearInterval(s),this._isProcessandoValidacao?s=window.setTimeout(()=>d(),o):i.value.apply(this,n)};d()};return Object.defineProperty(this,t,{value:r,configurable:!0,writable:!0}),r}}}}let wt=class extends tt{constructor(){super(...arguments),this._nomesAutocomplete=[],this._podeIncluirParlamentar=!0,this._parlamentaresAutocomplete=[],this._exibirTemplateTipoAutoria=!1,this._timerValidacao=0,this._isProcessandoValidacao=!1,this._isProcessandoMovimentacao=!1,this._lastIndexAutoCompleted=-1}set parlamentares(o){const e=this._parlamentaresAutocomplete;this._parlamentaresAutocomplete=o,this._nomesAutocomplete=o.map(t=>t.nome),this.requestUpdate("parlamentares",e)}get parlamentares(){return this._parlamentaresAutocomplete}set autoria(o){const e=this._autoriaOriginal;this._autoriaOriginal=o,this._autoria=o?Kt(Ke({},o),{parlamentares:[...o.parlamentares]}):new ka,this._autoria.parlamentares.length||(this._autoria.parlamentares=[Ke({},sn)]),this._podeIncluirParlamentar=this._isAllAutoresOk(),this.requestUpdate("autoria",e)}get autoria(){return this._autoriaOriginal}getAutoriaAtualizada(){return Kt(Ke({},this._autoria),{parlamentares:this._autoria.parlamentares.filter(o=>o.identificacao)})}render(){var o;return xe`
      <div class="lexml-autoria">
        <h3>Autoria</h3>
        ${this._getTipoAutoriaTemplate()}
        <div class="autoria-list">${this._getParlamentaresTemplate()}</div>
        <button id="btnNovoParlamentar" @click=${this._incluirNovoParlamentar} ?disabled=${!this._podeIncluirParlamentar}>
          Incluir ${this._autoria.parlamentares.length?"outro":""} parlamentar
        </button>
        ${this._getAssinaturasAdicionaisTemplate()}

        <div class="assinaturas-adicionais">
          <label>
            <input type="checkbox" id="chk-exibir-partido-uf" ?checked=${(o=this._autoria)===null||o===void 0?void 0:o.imprimirPartidoUF} @input=${e=>this._atualizarExibirPartidoUF(e)} />
            Imprimir partido e UF para os signatários
          </label>
        </div>
      </div>
    `}_getTipoAutoriaTemplate(){var o,e;return this._exibirTemplateTipoAutoria?xe`
          <fieldset class="autoria-label--tipo-autoria">
            <legend>Tipo de autoria</legend>
            <div class="control">
              <label class="radio">
                <input type="radio" id="opt-parlamentar" name="tipoAutoria" value="Parlamentar" ?checked=${((o=this._autoria)===null||o===void 0?void 0:o.tipo)==="Parlamentar"} />
                Parlamentar
              </label>
              <label class="radio">
                <input type="radio" id="opt-comissao" name="tipoAutoria" value="Comissão" ?checked=${((e=this._autoria)===null||e===void 0?void 0:e.tipo)==="Comiss\xE3o"} />
                Comissão
              </label>
            </div>
          </fieldset>
        `:xe`<div></div>`}_getParlamentaresTemplate(){var o;return xe`
      <div class="autoria-grid autoria-labels">
        <div class="autoria-grid--col1"><div class="autoria-header">Parlamentar</div></div>
        <div class="autoria-grid--col2"><div class="autoria-header">Cargo</div></div>
        <div class="autoria-grid--col3"><div class="autoria-buttons"></div></div>
      </div>
      ${(o=this._autoria)===null||o===void 0?void 0:o.parlamentares.map((e,t)=>this._getParlamentarAutocompleteTemplate(t))}
    `}_getParlamentarAutocompleteTemplate(o){var e;return xe`
      <div class="autoria-grid">
        <div class="autoria-grid--col1">
          <label for="defaultInput" class="autoria-label">Parlamentar</label>
          <lexml-autocomplete
            class="lexml-autocomplete"
            .items=${this._nomesAutocomplete}
            value=${this._autoria.parlamentares[o].nome}
            @input=${t=>this._validarNomeParlamentar(t,o)}
            @blur=${t=>this._validarNomeParlamentar(t,o)}
            @autocomplete=${t=>this._atualizarParlamentar(t,o)}
            @keyup=${t=>this._handleKeyUp(t,o)}
            @click=${this._handleClickAutoComplete}
          ></lexml-autocomplete>
        </div>

        <div class="autoria-grid--col2">
          <label for="tex-cargo" class="autoria-label">Cargo</label>
          <input
            type="text"
            id="tex-cargo"
            placeholder="ex: Presidente da Comissão ..., Líder do ..."
            class="autoria-input"
            aria-label="Cargo"
            .value=${(e=this._autoria.parlamentares[o].cargo)!==null&&e!==void 0?e:""}
            @input=${t=>this._atualizarCargo(t,o)}
            @keyup=${t=>this._handleKeyUp(t,o)}
          />
        </div>

        <div class="autoria-grid--col3">
          <div class="autoria-buttons">
            <button class="autoria-button" id="paraBaixo" aria-label="Para baixo" title="Para baixo" @click=${()=>this._moverParlamentar(o,1)}>
              <i class="autoria-icon icon-down"></i>
              <span class="sr-only">Para baixo</span>
            </button>
            <button class="autoria-button" id="paraBaixo" aria-label="Para cima" title="Para cima" @click=${()=>this._moverParlamentar(o,-1)}>
              <i class="autoria-icon icon-up"></i>
              <span class="sr-only">Para cima</span>
            </button>
            <button class="autoria-button" id="paraBaixo" aria-label="Excluir" title="Excluir" @click=${()=>this._excluirParlamentar(o)}>
              <i class="autoria-icon icon-delete"></i>
              <span class="sr-only">Exluir</span>
            </button>
          </div>
        </div>
      </div>
    `}_getAssinaturasAdicionaisTemplate(){return xe`
      <div>
        <div class="assinaturas-adicionais">
          <label for="num-assinaturas-adicionais-senadores" class="assinaturas-adicionais-label">Quantidade de assinaturas adicionais de Senadores</label>
          <input
            type="text"
            id="num-assinaturas-adicionais-senadores"
            class="autoria-input"
            aria-label="Assinaturas Adicionais Senadores"
            .value=${this._autoria.quantidadeAssinaturasAdicionaisSenadores.toString()}
            @input=${o=>this._atualizarQtdAssinaturasAdicionaisSenadores(o)}
          />
        </div>

        <div class="assinaturas-adicionais">
          <label for="num-assinaturas-adicionais-deputados" class="assinaturas-adicionais-label">Quantidade de assinaturas adicionais de Deputados Federais</label>
          <input
            type="text"
            id="num-assinaturas-adicionais-deputados"
            class="autoria-input"
            aria-label="Assinaturas Adicionais deputados"
            .value=${this._autoria.quantidadeAssinaturasAdicionaisDeputados.toString()}
            @input=${o=>this._atualizarQtdAssinaturasAdicionaisDeputados(o)}
          />
        </div>
      </div>
    `}updated(){this._isProcessandoMovimentacao=!1}_isAllAutoresOk(){return this._autoria.parlamentares.every(o=>o.identificacao)}_incluirNovoParlamentar(){this._autoria.parlamentares=((o,e)=>{const t=[...o];return t.push(e),t})(this._autoria.parlamentares,Ke({},sn)),this._podeIncluirParlamentar=!1,setTimeout(()=>this._autocompletes[this._autoria.parlamentares.length-1].focus(),200)}_moverParlamentar(o,e){this._autoria.parlamentares=((t,i,r)=>{const n=i+r;if(n<0||n>=t.length)return t;const s=[...t];return s.splice(n,0,s.splice(i,1)[0]),s})(this._autoria.parlamentares,o,e),this.requestUpdate()}_excluirParlamentar(o){this._autoria.parlamentares=((e,t)=>{const i=[...e];return i.splice(t,1),i})(this._autoria.parlamentares,o),this._autoria.parlamentares.length||(this._autoria.parlamentares=[Ke({},sn)]),this._podeIncluirParlamentar=this._isAllAutoresOk(),this.requestUpdate()}_validarNomeParlamentar(o,e){this._isProcessandoValidacao=!0;const t=o.type==="blur";t||clearInterval(this._timerValidacao),this._timerValidacao=window.setTimeout(()=>{var i;const r=this._autocompletes[e],n=this._autoria.parlamentares[e].cargo,s=(i=r.value)!==null&&i!==void 0?i:"",d=new RegExp("^"+s.normalize("NFD").replace(Gu,"")+"$","i"),c=this.parlamentares.find(u=>u.nome.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(d))||Kt(Ke({},sn),{nome:t?"":s}),p=!!c.identificacao;c.cargo=t&&!p?"":n,this._autoria.parlamentares[e]=Ke({},c),this._podeIncluirParlamentar=p&&this._isAllAutoresOk(),this._isProcessandoValidacao=!1},o.type==="blur"?200:0)}_atualizarParlamentar(o,e){const t=this.parlamentares.find(i=>i.nome===o.detail.value);if(t){const{cargo:i}=this._autoria.parlamentares[e];this._autoria.parlamentares[e]=Kt(Ke({},t),{cargo:i})}this._podeIncluirParlamentar=!!t&&this._isAllAutoresOk(),o.target.focus(),this._lastIndexAutoCompleted=e,this.requestUpdate()}_atualizarCargo(o,e){this._autoria.parlamentares[e].cargo=o.target.value}_atualizarQtdAssinaturasAdicionaisSenadores(o){this._autoria.quantidadeAssinaturasAdicionaisSenadores=Number(o.target.value)}_atualizarQtdAssinaturasAdicionaisDeputados(o){this._autoria.quantidadeAssinaturasAdicionaisDeputados=Number(o.target.value)}_atualizarExibirPartidoUF(o){this._autoria.imprimirPartidoUF=o.target.checked}_handleKeyUp(o,e){o.ctrlKey||o.altKey||o.shiftKey?!o.ctrlKey||o.altKey||o.shiftKey||(o.key==="ArrowUp"?this._isProcessandoMovimentacao||(this._isProcessandoMovimentacao=!0,this._moverParlamentar(e,-1),this._focarAutocompleteOuCargo(o.target,e,-1)):o.key==="ArrowDown"&&(this._isProcessandoMovimentacao||(this._isProcessandoMovimentacao=!0,this._moverParlamentar(e,1),this._focarAutocompleteOuCargo(o.target,e,1)))):o.key==="Enter"&&this._podeIncluirParlamentar&&e!==this._lastIndexAutoCompleted?(this._btnNovoParlamentar.click(),this._lastIndexAutoCompleted=-1):["ArrowUp","ArrowDown"].includes(o.key)&&this._autoria.parlamentares[e].identificacao&&this._focarAutocompleteOuCargo(o.target,e,o.key==="ArrowUp"?-1:1)}_focarAutocompleteOuCargo(o,e,t){const i=o.tagName==="LEXML-AUTOCOMPLETE"?this._autocompletes:this._inputCargos,r=e+t;r<0||r>=i.length||setTimeout(()=>i[r].focus(),0)}_handleClickAutoComplete(){window.setTimeout(()=>this._lastIndexAutoCompleted=-1,0)}};wt.styles=[t0],le([Jo("#btnNovoParlamentar")],wt.prototype,"_btnNovoParlamentar",void 0),le([xl("input#tex-cargo")],wt.prototype,"_inputCargos",void 0),le([xl("lexml-autocomplete")],wt.prototype,"_autocompletes",void 0),le([bn()],wt.prototype,"_nomesAutocomplete",void 0),le([bn()],wt.prototype,"_podeIncluirParlamentar",void 0),le([Be({type:Array})],wt.prototype,"parlamentares",null),le([Be({type:Object})],wt.prototype,"autoria",null),le([ic()],wt.prototype,"_moverParlamentar",null),le([ic()],wt.prototype,"_excluirParlamentar",null),wt=le([It("lexml-autoria")],wt);let qi=class extends tt{constructor(){super(...arguments),this.items=[],this.opened=!1,this.maxSuggestions=10,this._suggestions=[],this._bound={},this._blur=!1,this._mouseEnter=!1}render(){return xe`
      <style>
        ul {
          position: absolute;
          display: block;
          list-style-type: none;
          margin: 0;
          padding: 0;
          z-index: 10000;
          border: 1px solid grey;
          background: white;
        }
        li {
          padding: 4px;
        }
        li.active {
          background: whitesmoke;
        }
        [hidden] {
          display: none;
        }

        .lexml-autocomplete-input {
          width: 180px;
        }

        @media (max-width: 576px) {
          .lexml-autocomplete-label {
            width: calc(100% - 10px);
            display: block;
          }
          .lexml-autocomplete-input {
            width: calc(100% - 10px);
          }
        }
      </style>
      <slot id="dropdown-input"><input id="defaultInput" class="lexml-autocomplete-input" type="text" placeholder="Parlamentar" .value=${this.value||""} /></slot>
      <ul id="suggestions" ?hidden=${!this.opened} @mouseenter=${this._handleItemMouseEnter} @mouseleave=${this._handleItemMouseLeave}>
        ${this._suggestions.map(o=>xe`<li @click=${()=>this.autocomplete(o)}>${o}</li>`)}
      </ul>
    `}get contentElement(){if(this._inputEl)return this._inputEl;if(!this.hasUpdated)return;const o=this.shadowRoot.getElementById("dropdown-input").assignedElements();return this._inputEl=o.length?o[0]:this.shadowRoot.getElementById("defaultInput"),this._inputEl}get value(){return this.contentElement&&this.contentElement.value}set value(o){this.contentElement?this.contentElement.value=o:this._tempValue=o}firstUpdated(){this._suggestionEl=this.shadowRoot.getElementById("suggestions"),this._suggestionEl.style.width=`${this.contentElement.getBoundingClientRect().width}px`,this._bound.onKeyDown=this._handleKeyDown.bind(this),this._bound.onKeyUp=this._handleKeyUp.bind(this),this._bound.onFocus=this._handleFocus.bind(this),this._bound.onBlur=this._handleBlur.bind(this),this.contentElement.addEventListener("keydown",this._bound.onKeyDown),this.contentElement.addEventListener("keyup",this._bound.onKeyUp),this.contentElement.addEventListener("focus",this._bound.onFocus),this.contentElement.addEventListener("blur",this._bound.onBlur),this._tempValue!==void 0&&(this.contentElement.value=this._tempValue)}disconnectedCallback(){this.contentElement&&(this.contentElement.removeEventListener("keydown",this._bound.onKeyDown),this.contentElement.removeEventListener("keyup",this._bound.onKeyUp),this.contentElement.removeEventListener("focus",this._bound.onFocus),this.contentElement.removeEventListener("blur",this._bound.onBlur))}focus(o){this.contentElement&&this.contentElement.focus(o)}updated(o){o.has("opened")&&this.opened&&this._suggestionEl.childElementCount&&(this._highlightedEl=this._suggestionEl.children[0],this._highlightedEl.classList.add("active"))}open(){this._suggestionEl.style.width==="0px"&&(this._suggestionEl.style.width=`${this.contentElement.getBoundingClientRect().width}px`),this._suggestions.length&&(this.opened=!0)}close(){this.opened=!1,this._highlightedEl=null}suggest(o){this._suggestions=o||[],this._suggestions.length>1||this._suggestions.length===1&&this._suggestions[0]!==this.contentElement.value?this.open():this.close(),this.requestUpdate()}autocomplete(o){this.contentElement.value=o,this.close(),this.dispatchEvent(new CustomEvent("autocomplete",{detail:{value:o},composed:!0,bubbles:!0}))}_highlightPrev(){this._highlightedEl&&this._highlightedEl.previousElementSibling&&(this._highlightedEl.classList.remove("active"),this._highlightedEl=this._highlightedEl.previousElementSibling,this._highlightedEl.classList.add("active"))}_highlightNext(){this._highlightedEl&&this._highlightedEl.nextElementSibling&&(this._highlightedEl.classList.remove("active"),this._highlightedEl=this._highlightedEl.nextElementSibling,this._highlightedEl.classList.add("active"))}_handleKeyDown(o){o.key!=="ArrowUp"&&o.key!=="ArrowDown"||(o.preventDefault(),o.stopPropagation())}_handleKeyUp(o){var e,t;switch(o.key){case"ArrowUp":!((e=this._highlightedEl)===null||e===void 0)&&e.previousElementSibling&&(o.preventDefault(),o.stopPropagation(),this._highlightPrev());break;case"ArrowDown":!((t=this._highlightedEl)===null||t===void 0)&&t.nextElementSibling&&(o.preventDefault(),o.stopPropagation(),this._highlightNext());break;case"Enter":this._highlightedEl&&this._highlightedEl.click();break;default:if(this.items.length){const{value:i}=this.contentElement,r=i.normalize("NFD").replace(Gu,"");this.suggest(this._findSuggetions(r))}}}_findSuggetions(o,e=this.maxSuggestions){if(!o)return[];let t=this._filterStartWith(o,e);return t.length<this.maxSuggestions&&(t=[...t,...this._filterContains(o,this.maxSuggestions-t.length).filter(i=>!t.includes(i))]),t}_filterStartWith(o,e=this.maxSuggestions){const t=new RegExp("^"+o,"gi");return o&&this.items.filter(i=>i.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(t)).slice(0,e)||[]}_filterContains(o,e=this.maxSuggestions){const t=new RegExp(o,"gi");return o&&this.items.filter(i=>i.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(t)).slice(0,e)||[]}_handleFocus(){this._blur=!1,this._suggestions.length>1&&this.open()}_handleBlur(){this._blur=!0,setTimeout(()=>this.close(),200),this._suggestions=[]}_handleItemMouseEnter(){this._mouseEnter=!0}_handleItemMouseLeave(){this._mouseEnter=!1,this._blur&&setTimeout(()=>this.close(),500)}};le([Be({type:Array})],qi.prototype,"items",void 0),le([Be({type:Boolean,reflect:!0})],qi.prototype,"opened",void 0),le([Be({type:Number})],qi.prototype,"maxSuggestions",void 0),le([Be({type:String})],qi.prototype,"value",null),qi=le([It("lexml-autocomplete")],qi);let Ii=class extends tt{render(){return xe`
      <div class="lexml-data">
        <h3>Data</h3>
        <div class="control">
          <label class="radio">
            <input type="radio" id="opt-nao-informar" name="data" ?checked=${!this.data} @input=${()=>this.data=void 0} />
            Não informar
          </label>
          <label class="radio">
            <input type="radio" id="opt-data" name="data" ?checked=${!!this.data} @input=${this.setDate} />
            Data
            <input type="date" id="input-data" value=${this.data||this.getCurrentDate()} @input=${this.setDate} />
          </label>
        </div>
      </div>
    `}getCurrentDate(){return new Date().toLocaleDateString().split("/").reverse().join("-")}setDate(){this.inputData&&(this.data=this.inputData.value,this.optData.checked=!0)}};Ii.styles=Hr`
    .lexml-data {
      display: block;
      /* height: 100%; */
      /* padding: 5px 10px; */
      /* margin: 0px 5px; */
      font-size: 1em;
      max-width: 700px;
    }
  `,le([Jo("#input-data")],Ii.prototype,"inputData",void 0),le([Jo("#opt-data")],Ii.prototype,"optData",void 0),le([Be({type:String})],Ii.prototype,"data",void 0),Ii=le([It("lexml-data")],Ii);const o0=xe`
  <style>
    :root,
    :host,
    .sl-theme-light {
      --sl-color-gray-50: hsl(0 0% 97.5%);
      --sl-color-gray-100: hsl(240 4.8% 95.9%);
      --sl-color-gray-200: hsl(240 5.9% 90%);
      --sl-color-gray-300: hsl(240 4.9% 83.9%);
      --sl-color-gray-400: hsl(240 5% 64.9%);
      --sl-color-gray-500: hsl(240 3.8% 46.1%);
      --sl-color-gray-600: hsl(240 5.2% 33.9%);
      --sl-color-gray-700: hsl(240 5.3% 26.1%);
      --sl-color-gray-800: hsl(240 3.7% 15.9%);
      --sl-color-gray-900: hsl(240 5.9% 10%);
      --sl-color-gray-950: hsl(240 7.3% 8%);

      --sl-color-red-50: hsl(0 85.7% 97.3%);
      --sl-color-red-100: hsl(0 93.3% 94.1%);
      --sl-color-red-200: hsl(0 96.3% 89.4%);
      --sl-color-red-300: hsl(0 93.5% 81.8%);
      --sl-color-red-400: hsl(0 90.6% 70.8%);
      --sl-color-red-500: hsl(0 84.2% 60.2%);
      --sl-color-red-600: hsl(0 72.2% 50.6%);
      --sl-color-red-700: hsl(0 73.7% 41.8%);
      --sl-color-red-800: hsl(0 70% 35.3%);
      --sl-color-red-900: hsl(0 62.8% 30.6%);
      --sl-color-red-950: hsl(0 60% 19.6%);

      --sl-color-orange-50: hsl(33.3 100% 96.5%);
      --sl-color-orange-100: hsl(34.3 100% 91.8%);
      --sl-color-orange-200: hsl(32.1 97.7% 83.1%);
      --sl-color-orange-300: hsl(30.7 97.2% 72.4%);
      --sl-color-orange-400: hsl(27 96% 61%);
      --sl-color-orange-500: hsl(24.6 95% 53.1%);
      --sl-color-orange-600: hsl(20.5 90.2% 48.2%);
      --sl-color-orange-700: hsl(17.5 88.3% 40.4%);
      --sl-color-orange-800: hsl(15 79.1% 33.7%);
      --sl-color-orange-900: hsl(15.3 74.6% 27.8%);
      --sl-color-orange-950: hsl(15.2 69.1% 19%);

      --sl-color-amber-50: hsl(48 100% 96.1%);
      --sl-color-amber-100: hsl(48 96.5% 88.8%);
      --sl-color-amber-200: hsl(48 96.6% 76.7%);
      --sl-color-amber-300: hsl(45.9 96.7% 64.5%);
      --sl-color-amber-400: hsl(43.3 96.4% 56.3%);
      --sl-color-amber-500: hsl(37.7 92.1% 50.2%);
      --sl-color-amber-600: hsl(32.1 94.6% 43.7%);
      --sl-color-amber-700: hsl(26 90.5% 37.1%);
      --sl-color-amber-800: hsl(22.7 82.5% 31.4%);
      --sl-color-amber-900: hsl(21.7 77.8% 26.5%);
      --sl-color-amber-950: hsl(22.9 74.1% 16.7%);

      --sl-color-yellow-50: hsl(54.5 91.7% 95.3%);
      --sl-color-yellow-100: hsl(54.9 96.7% 88%);
      --sl-color-yellow-200: hsl(52.8 98.3% 76.9%);
      --sl-color-yellow-300: hsl(50.4 97.8% 63.5%);
      --sl-color-yellow-400: hsl(47.9 95.8% 53.1%);
      --sl-color-yellow-500: hsl(45.4 93.4% 47.5%);
      --sl-color-yellow-600: hsl(40.6 96.1% 40.4%);
      --sl-color-yellow-700: hsl(35.5 91.7% 32.9%);
      --sl-color-yellow-800: hsl(31.8 81% 28.8%);
      --sl-color-yellow-900: hsl(28.4 72.5% 25.7%);
      --sl-color-yellow-950: hsl(33.1 69% 13.9%);

      --sl-color-lime-50: hsl(78.3 92% 95.1%);
      --sl-color-lime-100: hsl(79.6 89.1% 89.2%);
      --sl-color-lime-200: hsl(80.9 88.5% 79.6%);
      --sl-color-lime-300: hsl(82 84.5% 67.1%);
      --sl-color-lime-400: hsl(82.7 78% 55.5%);
      --sl-color-lime-500: hsl(83.7 80.5% 44.3%);
      --sl-color-lime-600: hsl(84.8 85.2% 34.5%);
      --sl-color-lime-700: hsl(85.9 78.4% 27.3%);
      --sl-color-lime-800: hsl(86.3 69% 22.7%);
      --sl-color-lime-900: hsl(87.6 61.2% 20.2%);
      --sl-color-lime-950: hsl(86.5 60.6% 13.9%);

      --sl-color-green-50: hsl(138.5 76.5% 96.7%);
      --sl-color-green-100: hsl(140.6 84.2% 92.5%);
      --sl-color-green-200: hsl(141 78.9% 85.1%);
      --sl-color-green-300: hsl(141.7 76.6% 73.1%);
      --sl-color-green-400: hsl(141.9 69.2% 58%);
      --sl-color-green-500: hsl(142.1 70.6% 45.3%);
      --sl-color-green-600: hsl(142.1 76.2% 36.3%);
      --sl-color-green-700: hsl(142.4 71.8% 29.2%);
      --sl-color-green-800: hsl(142.8 64.2% 24.1%);
      --sl-color-green-900: hsl(143.8 61.2% 20.2%);
      --sl-color-green-950: hsl(144.3 60.7% 12%);

      --sl-color-emerald-50: hsl(151.8 81% 95.9%);
      --sl-color-emerald-100: hsl(149.3 80.4% 90%);
      --sl-color-emerald-200: hsl(152.4 76% 80.4%);
      --sl-color-emerald-300: hsl(156.2 71.6% 66.9%);
      --sl-color-emerald-400: hsl(158.1 64.4% 51.6%);
      --sl-color-emerald-500: hsl(160.1 84.1% 39.4%);
      --sl-color-emerald-600: hsl(161.4 93.5% 30.4%);
      --sl-color-emerald-700: hsl(162.9 93.5% 24.3%);
      --sl-color-emerald-800: hsl(163.1 88.1% 19.8%);
      --sl-color-emerald-900: hsl(164.2 85.7% 16.5%);
      --sl-color-emerald-950: hsl(164.3 87.5% 9.4%);

      --sl-color-teal-50: hsl(166.2 76.5% 96.7%);
      --sl-color-teal-100: hsl(167.2 85.5% 89.2%);
      --sl-color-teal-200: hsl(168.4 83.8% 78.2%);
      --sl-color-teal-300: hsl(170.6 76.9% 64.3%);
      --sl-color-teal-400: hsl(172.5 66% 50.4%);
      --sl-color-teal-500: hsl(173.4 80.4% 40%);
      --sl-color-teal-600: hsl(174.7 83.9% 31.6%);
      --sl-color-teal-700: hsl(175.3 77.4% 26.1%);
      --sl-color-teal-800: hsl(176.1 69.4% 21.8%);
      --sl-color-teal-900: hsl(175.9 60.8% 19%);
      --sl-color-teal-950: hsl(176.5 58.6% 11.4%);

      --sl-color-cyan-50: hsl(183.2 100% 96.3%);
      --sl-color-cyan-100: hsl(185.1 95.9% 90.4%);
      --sl-color-cyan-200: hsl(186.2 93.5% 81.8%);
      --sl-color-cyan-300: hsl(187 92.4% 69%);
      --sl-color-cyan-400: hsl(187.9 85.7% 53.3%);
      --sl-color-cyan-500: hsl(188.7 94.5% 42.7%);
      --sl-color-cyan-600: hsl(191.6 91.4% 36.5%);
      --sl-color-cyan-700: hsl(192.9 82.3% 31%);
      --sl-color-cyan-800: hsl(194.4 69.6% 27.1%);
      --sl-color-cyan-900: hsl(196.4 63.6% 23.7%);
      --sl-color-cyan-950: hsl(196.8 61% 16.1%);

      --sl-color-sky-50: hsl(204 100% 97.1%);
      --sl-color-sky-100: hsl(204 93.8% 93.7%);
      --sl-color-sky-200: hsl(200.6 94.4% 86.1%);
      --sl-color-sky-300: hsl(199.4 95.5% 73.9%);
      --sl-color-sky-400: hsl(198.4 93.2% 59.6%);
      --sl-color-sky-500: hsl(198.6 88.7% 48.4%);
      --sl-color-sky-600: hsl(200.4 98% 39.4%);
      --sl-color-sky-700: hsl(201.3 96.3% 32.2%);
      --sl-color-sky-800: hsl(201 90% 27.5%);
      --sl-color-sky-900: hsl(202 80.3% 23.9%);
      --sl-color-sky-950: hsl(202.3 73.8% 16.5%);

      --sl-color-blue-50: hsl(213.8 100% 96.9%);
      --sl-color-blue-100: hsl(214.3 94.6% 92.7%);
      --sl-color-blue-200: hsl(213.3 96.9% 87.3%);
      --sl-color-blue-300: hsl(211.7 96.4% 78.4%);
      --sl-color-blue-400: hsl(213.1 93.9% 67.8%);
      --sl-color-blue-500: hsl(217.2 91.2% 59.8%);
      --sl-color-blue-600: hsl(221.2 83.2% 53.3%);
      --sl-color-blue-700: hsl(224.3 76.3% 48%);
      --sl-color-blue-800: hsl(225.9 70.7% 40.2%);
      --sl-color-blue-900: hsl(224.4 64.3% 32.9%);
      --sl-color-blue-950: hsl(226.2 55.3% 18.4%);

      --sl-color-indigo-50: hsl(225.9 100% 96.7%);
      --sl-color-indigo-100: hsl(226.5 100% 93.9%);
      --sl-color-indigo-200: hsl(228 96.5% 88.8%);
      --sl-color-indigo-300: hsl(229.7 93.5% 81.8%);
      --sl-color-indigo-400: hsl(234.5 89.5% 73.9%);
      --sl-color-indigo-500: hsl(238.7 83.5% 66.7%);
      --sl-color-indigo-600: hsl(243.4 75.4% 58.6%);
      --sl-color-indigo-700: hsl(244.5 57.9% 50.6%);
      --sl-color-indigo-800: hsl(243.7 54.5% 41.4%);
      --sl-color-indigo-900: hsl(242.2 47.4% 34.3%);
      --sl-color-indigo-950: hsl(243.5 43.6% 22.9%);

      --sl-color-violet-50: hsl(250 100% 97.6%);
      --sl-color-violet-100: hsl(251.4 91.3% 95.5%);
      --sl-color-violet-200: hsl(250.5 95.2% 91.8%);
      --sl-color-violet-300: hsl(252.5 94.7% 85.1%);
      --sl-color-violet-400: hsl(255.1 91.7% 76.3%);
      --sl-color-violet-500: hsl(258.3 89.5% 66.3%);
      --sl-color-violet-600: hsl(262.1 83.3% 57.8%);
      --sl-color-violet-700: hsl(263.4 70% 50.4%);
      --sl-color-violet-800: hsl(263.4 69.3% 42.2%);
      --sl-color-violet-900: hsl(263.5 67.4% 34.9%);
      --sl-color-violet-950: hsl(265.1 61.5% 21.4%);

      --sl-color-purple-50: hsl(270 100% 98%);
      --sl-color-purple-100: hsl(268.7 100% 95.5%);
      --sl-color-purple-200: hsl(268.6 100% 91.8%);
      --sl-color-purple-300: hsl(269.2 97.4% 85.1%);
      --sl-color-purple-400: hsl(270 95.2% 75.3%);
      --sl-color-purple-500: hsl(270.7 91% 65.1%);
      --sl-color-purple-600: hsl(271.5 81.3% 55.9%);
      --sl-color-purple-700: hsl(272.1 71.7% 47.1%);
      --sl-color-purple-800: hsl(272.9 67.2% 39.4%);
      --sl-color-purple-900: hsl(273.6 65.6% 32%);
      --sl-color-purple-950: hsl(276 59.5% 16.5%);

      --sl-color-fuchsia-50: hsl(289.1 100% 97.8%);
      --sl-color-fuchsia-100: hsl(287 100% 95.5%);
      --sl-color-fuchsia-200: hsl(288.3 95.8% 90.6%);
      --sl-color-fuchsia-300: hsl(291.1 93.1% 82.9%);
      --sl-color-fuchsia-400: hsl(292 91.4% 72.5%);
      --sl-color-fuchsia-500: hsl(292.2 84.1% 60.6%);
      --sl-color-fuchsia-600: hsl(293.4 69.5% 48.8%);
      --sl-color-fuchsia-700: hsl(294.7 72.4% 39.8%);
      --sl-color-fuchsia-800: hsl(295.4 70.2% 32.9%);
      --sl-color-fuchsia-900: hsl(296.7 63.6% 28%);
      --sl-color-fuchsia-950: hsl(297.1 56.8% 14.5%);

      --sl-color-pink-50: hsl(327.3 73.3% 97.1%);
      --sl-color-pink-100: hsl(325.7 77.8% 94.7%);
      --sl-color-pink-200: hsl(325.9 84.6% 89.8%);
      --sl-color-pink-300: hsl(327.4 87.1% 81.8%);
      --sl-color-pink-400: hsl(328.6 85.5% 70.2%);
      --sl-color-pink-500: hsl(330.4 81.2% 60.4%);
      --sl-color-pink-600: hsl(333.3 71.4% 50.6%);
      --sl-color-pink-700: hsl(335.1 77.6% 42%);
      --sl-color-pink-800: hsl(335.8 74.4% 35.3%);
      --sl-color-pink-900: hsl(335.9 69% 30.4%);
      --sl-color-pink-950: hsl(336.2 65.4% 15.9%);

      --sl-color-rose-50: hsl(355.7 100% 97.3%);
      --sl-color-rose-100: hsl(355.6 100% 94.7%);
      --sl-color-rose-200: hsl(352.7 96.1% 90%);
      --sl-color-rose-300: hsl(352.6 95.7% 81.8%);
      --sl-color-rose-400: hsl(351.3 94.5% 71.4%);
      --sl-color-rose-500: hsl(349.7 89.2% 60.2%);
      --sl-color-rose-600: hsl(346.8 77.2% 49.8%);
      --sl-color-rose-700: hsl(345.3 82.7% 40.8%);
      --sl-color-rose-800: hsl(343.4 79.7% 34.7%);
      --sl-color-rose-900: hsl(341.5 75.5% 30.4%);
      --sl-color-rose-950: hsl(341.3 70.1% 17.1%);

      --sl-color-primary-50: var(--sl-color-sky-50);
      --sl-color-primary-100: var(--sl-color-sky-100);
      --sl-color-primary-200: var(--sl-color-sky-200);
      --sl-color-primary-300: var(--sl-color-sky-300);
      --sl-color-primary-400: var(--sl-color-sky-400);
      --sl-color-primary-500: var(--sl-color-sky-500);
      --sl-color-primary-600: var(--sl-color-sky-600);
      --sl-color-primary-700: var(--sl-color-sky-700);
      --sl-color-primary-800: var(--sl-color-sky-800);
      --sl-color-primary-900: var(--sl-color-sky-900);
      --sl-color-primary-950: var(--sl-color-sky-950);

      --sl-color-success-50: var(--sl-color-green-50);
      --sl-color-success-100: var(--sl-color-green-100);
      --sl-color-success-200: var(--sl-color-green-200);
      --sl-color-success-300: var(--sl-color-green-300);
      --sl-color-success-400: var(--sl-color-green-400);
      --sl-color-success-500: var(--sl-color-green-500);
      --sl-color-success-600: var(--sl-color-green-600);
      --sl-color-success-700: var(--sl-color-green-700);
      --sl-color-success-800: var(--sl-color-green-800);
      --sl-color-success-900: var(--sl-color-green-900);
      --sl-color-success-950: var(--sl-color-green-950);

      --sl-color-warning-50: var(--sl-color-amber-50);
      --sl-color-warning-100: var(--sl-color-amber-100);
      --sl-color-warning-200: var(--sl-color-amber-200);
      --sl-color-warning-300: var(--sl-color-amber-300);
      --sl-color-warning-400: var(--sl-color-amber-400);
      --sl-color-warning-500: var(--sl-color-amber-500);
      --sl-color-warning-600: var(--sl-color-amber-600);
      --sl-color-warning-700: var(--sl-color-amber-700);
      --sl-color-warning-800: var(--sl-color-amber-800);
      --sl-color-warning-900: var(--sl-color-amber-900);
      --sl-color-warning-950: var(--sl-color-amber-950);

      --sl-color-danger-50: var(--sl-color-red-50);
      --sl-color-danger-100: var(--sl-color-red-100);
      --sl-color-danger-200: var(--sl-color-red-200);
      --sl-color-danger-300: var(--sl-color-red-300);
      --sl-color-danger-400: var(--sl-color-red-400);
      --sl-color-danger-500: var(--sl-color-red-500);
      --sl-color-danger-600: var(--sl-color-red-600);
      --sl-color-danger-700: var(--sl-color-red-700);
      --sl-color-danger-800: var(--sl-color-red-800);
      --sl-color-danger-900: var(--sl-color-red-900);
      --sl-color-danger-950: var(--sl-color-red-950);

      --sl-color-neutral-50: var(--sl-color-gray-50);
      --sl-color-neutral-100: var(--sl-color-gray-100);
      --sl-color-neutral-200: var(--sl-color-gray-200);
      --sl-color-neutral-300: var(--sl-color-gray-300);
      --sl-color-neutral-400: var(--sl-color-gray-400);
      --sl-color-neutral-500: var(--sl-color-gray-500);
      --sl-color-neutral-600: var(--sl-color-gray-600);
      --sl-color-neutral-700: var(--sl-color-gray-700);
      --sl-color-neutral-800: var(--sl-color-gray-800);
      --sl-color-neutral-900: var(--sl-color-gray-900);
      --sl-color-neutral-950: var(--sl-color-gray-950);

      --sl-color-neutral-0: hsl(0, 0%, 100%);
      --sl-color-neutral-1000: hsl(0, 0%, 0%);

      --sl-border-radius-small: 0.1875rem;
      --sl-border-radius-medium: 0.25rem;
      --sl-border-radius-large: 0.5rem;
      --sl-border-radius-x-large: 1rem;

      --sl-border-radius-circle: 50%;
      --sl-border-radius-pill: 9999px;

      --sl-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);
      --sl-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);
      --sl-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);
      --sl-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);
      --sl-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);

      --sl-spacing-3x-small: 0.125rem;
      --sl-spacing-2x-small: 0.25rem;
      --sl-spacing-x-small: 0.5rem;
      --sl-spacing-small: 0.75rem;
      --sl-spacing-medium: 1rem;
      --sl-spacing-large: 1.25rem;
      --sl-spacing-x-large: 1.75rem;
      --sl-spacing-2x-large: 2.25rem;
      --sl-spacing-3x-large: 3rem;
      --sl-spacing-4x-large: 4.5rem;

      --sl-transition-x-slow: 1000ms;
      --sl-transition-slow: 500ms;
      --sl-transition-medium: 250ms;
      --sl-transition-fast: 150ms;
      --sl-transition-x-fast: 50ms;

      --sl-font-mono: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
      --sl-font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      --sl-font-serif: Georgia, 'Times New Roman', serif;

      --sl-font-size-2x-small: 0.625rem;
      --sl-font-size-x-small: 0.75rem;
      --sl-font-size-small: 0.875rem;
      --sl-font-size-medium: 1rem;
      --sl-font-size-large: 1.25rem;
      --sl-font-size-x-large: 1.5rem;
      --sl-font-size-2x-large: 2.25rem;
      --sl-font-size-3x-large: 3rem;
      --sl-font-size-4x-large: 4.5rem;

      --sl-font-weight-light: 300;
      --sl-font-weight-normal: 400;
      --sl-font-weight-semibold: 500;
      --sl-font-weight-bold: 700;

      --sl-letter-spacing-denser: -0.03em;
      --sl-letter-spacing-dense: -0.015em;
      --sl-letter-spacing-normal: normal;
      --sl-letter-spacing-loose: 0.075em;
      --sl-letter-spacing-looser: 0.15em;

      --sl-line-height-denser: 1;
      --sl-line-height-dense: 1.4;
      --sl-line-height-normal: 1.8;
      --sl-line-height-loose: 2.2;
      --sl-line-height-looser: 2.6;

      --sl-focus-ring-alpha: 40%;
      --sl-focus-ring-width: 3px;
      --sl-focus-ring: 0 0 0 var(--sl-focus-ring-width) hsl(198.6 88.7% 48.4% / var(--sl-focus-ring-alpha));

      --sl-button-font-size-small: var(--sl-font-size-x-small);
      --sl-button-font-size-medium: var(--sl-font-size-small);
      --sl-button-font-size-large: var(--sl-font-size-medium);

      --sl-input-height-small: 1.875rem;
      --sl-input-height-medium: 2.5rem;
      --sl-input-height-large: 3.125rem;

      --sl-input-background-color: var(--sl-color-neutral-0);
      --sl-input-background-color-hover: var(--sl-input-background-color);
      --sl-input-background-color-focus: var(--sl-input-background-color);
      --sl-input-background-color-disabled: var(--sl-color-neutral-100);
      --sl-input-border-color: var(--sl-color-neutral-300);
      --sl-input-border-color-hover: var(--sl-color-neutral-400);
      --sl-input-border-color-focus: var(--sl-color-primary-500);
      --sl-input-border-color-disabled: var(--sl-color-neutral-300);
      --sl-input-border-width: 1px;

      --sl-input-border-radius-small: var(--sl-border-radius-medium);
      --sl-input-border-radius-medium: var(--sl-border-radius-medium);
      --sl-input-border-radius-large: var(--sl-border-radius-medium);

      --sl-input-font-family: var(--sl-font-sans);
      --sl-input-font-weight: var(--sl-font-weight-normal);
      --sl-input-font-size-small: var(--sl-font-size-small);
      --sl-input-font-size-medium: var(--sl-font-size-medium);
      --sl-input-font-size-large: var(--sl-font-size-large);
      --sl-input-letter-spacing: var(--sl-letter-spacing-normal);

      --sl-input-color: var(--sl-color-neutral-700);
      --sl-input-color-hover: var(--sl-color-neutral-700);
      --sl-input-color-focus: var(--sl-color-neutral-700);
      --sl-input-color-disabled: var(--sl-color-neutral-900);
      --sl-input-icon-color: var(--sl-color-neutral-500);
      --sl-input-icon-color-hover: var(--sl-color-neutral-600);
      --sl-input-icon-color-focus: var(--sl-color-neutral-600);
      --sl-input-placeholder-color: var(--sl-color-neutral-500);
      --sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);
      --sl-input-spacing-small: var(--sl-spacing-small);
      --sl-input-spacing-medium: var(--sl-spacing-medium);
      --sl-input-spacing-large: var(--sl-spacing-large);

      --sl-input-filled-background-color: var(--sl-color-neutral-100);
      --sl-input-filled-background-color-hover: var(--sl-color-neutral-100);
      --sl-input-filled-background-color-focus: var(--sl-color-neutral-100);
      --sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);
      --sl-input-filled-color: var(--sl-color-neutral-800);
      --sl-input-filled-color-hover: var(--sl-color-neutral-800);
      --sl-input-filled-color-focus: var(--sl-color-neutral-700);
      --sl-input-filled-color-disabled: var(--sl-color-neutral-800);

      --sl-input-label-font-size-small: var(--sl-font-size-small);
      --sl-input-label-font-size-medium: var(--sl-font-size-medium);
      --sl-input-label-font-size-large: var(--sl-font-size-large);

      --sl-input-label-color: inherit;

      --sl-input-help-text-font-size-small: var(--sl-font-size-x-small);
      --sl-input-help-text-font-size-medium: var(--sl-font-size-small);
      --sl-input-help-text-font-size-large: var(--sl-font-size-medium);

      --sl-input-help-text-color: var(--sl-color-neutral-500);

      --sl-toggle-size: 1rem;

      --sl-overlay-background-color: hsl(240 3.8% 46.1% / 33%);

      --sl-panel-background-color: var(--sl-color-neutral-0);
      --sl-panel-border-color: var(--sl-color-neutral-200);
      --sl-panel-border-width: 1px;

      --sl-tooltip-border-radius: var(--sl-border-radius-medium);
      --sl-tooltip-background-color: var(--sl-color-neutral-800);
      --sl-tooltip-color: var(--sl-color-neutral-0);
      --sl-tooltip-font-family: var(--sl-font-sans);
      --sl-tooltip-font-weight: var(--sl-font-weight-normal);
      --sl-tooltip-font-size: var(--sl-font-size-small);
      --sl-tooltip-line-height: var(--sl-line-height-dense);
      --sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);
      --sl-tooltip-arrow-size: 4px;

      --sl-z-index-drawer: 700;
      --sl-z-index-dialog: 800;
      --sl-z-index-dropdown: 900;
      --sl-z-index-toast: 950;
      --sl-z-index-tooltip: 1000;
    }

    .sl-scroll-lock {
      overflow: hidden !important;
    }

    .sl-toast-stack {
      position: fixed;
      top: 0;
      right: 0;
      z-index: var(--sl-z-index-toast);
      width: 28rem;
      max-width: 100%;
      max-height: 100%;
      overflow: auto;
    }

    .sl-toast-stack sl-alert {
      --box-shadow: var(--sl-shadow-large);
      margin: var(--sl-spacing-medium);
    }
  </style>
`;var vs,gs,Ca=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ta=Symbol(),rc=new Map,Nd=class{constructor(o,e){if(this._$cssResult$=!0,e!==Ta)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o}get styleSheet(){let o=rc.get(this.cssText);return Ca&&o===void 0&&(rc.set(this.cssText,o=new CSSStyleSheet),o.replaceSync(this.cssText)),o}toString(){return this.cssText}},Cd=o=>new Nd(typeof o=="string"?o:o+"",Ta),Bo=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,r,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[n+1],o[0]);return new Nd(t,Ta)},nc=Ca?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Cd(t)})(o):o,sc=window.trustedTypes,i0=sc?sc.emptyScript:"",ac=window.reactiveElementPolyfillSupport,Ks={toAttribute(o,e){switch(e){case Boolean:o=o?i0:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Td=(o,e)=>e!==o&&(e==e||o==o),bs={attribute:!0,type:String,converter:Ks,reflect:!1,hasChanged:Td},Mi=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(o){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(o)}static get observedAttributes(){this.finalize();const o=[];return this.elementProperties.forEach((e,t)=>{const i=this._$Eh(t,e);i!==void 0&&(this._$Eu.set(i,t),o.push(i))}),o}static createProperty(o,e=bs){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(o,e),!e.noAccessor&&!this.prototype.hasOwnProperty(o)){const t=typeof o=="symbol"?Symbol():"__"+o,i=this.getPropertyDescriptor(o,t,e);i!==void 0&&Object.defineProperty(this.prototype,o,i)}}static getPropertyDescriptor(o,e,t){return{get(){return this[e]},set(i){const r=this[o];this[e]=i,this.requestUpdate(o,r,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(o){return this.elementProperties.get(o)||bs}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const o=Object.getPrototypeOf(this);if(o.finalize(),this.elementProperties=new Map(o.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(o){const e=[];if(Array.isArray(o)){const t=new Set(o.flat(1/0).reverse());for(const i of t)e.unshift(nc(i))}else o!==void 0&&e.push(nc(o));return e}static _$Eh(o,e){const t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof o=="string"?o.toLowerCase():void 0}o(){var o;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(o=this.constructor.l)===null||o===void 0||o.forEach(e=>e(this))}addController(o){var e,t;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(o),this.renderRoot!==void 0&&this.isConnected&&((t=o.hostConnected)===null||t===void 0||t.call(o))}removeController(o){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(o)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((o,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var o;const e=(o=this.shadowRoot)!==null&&o!==void 0?o:this.attachShadow(this.constructor.shadowRootOptions);return t=e,i=this.constructor.elementStyles,Ca?t.adoptedStyleSheets=i.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):i.forEach(r=>{const n=document.createElement("style"),s=window.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,t.appendChild(n)}),e;var t,i}connectedCallback(){var o;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(o=this._$Eg)===null||o===void 0||o.forEach(e=>{var t;return(t=e.hostConnected)===null||t===void 0?void 0:t.call(e)})}enableUpdating(o){}disconnectedCallback(){var o;(o=this._$Eg)===null||o===void 0||o.forEach(e=>{var t;return(t=e.hostDisconnected)===null||t===void 0?void 0:t.call(e)})}attributeChangedCallback(o,e,t){this._$AK(o,t)}_$ES(o,e,t=bs){var i,r;const n=this.constructor._$Eh(o,t);if(n!==void 0&&t.reflect===!0){const s=((r=(i=t.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&r!==void 0?r:Ks.toAttribute)(e,t.type);this._$Ei=o,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Ei=null}}_$AK(o,e){var t,i,r;const n=this.constructor,s=n._$Eu.get(o);if(s!==void 0&&this._$Ei!==s){const d=n.getPropertyOptions(s),c=d.converter,p=(r=(i=(t=c)===null||t===void 0?void 0:t.fromAttribute)!==null&&i!==void 0?i:typeof c=="function"?c:null)!==null&&r!==void 0?r:Ks.fromAttribute;this._$Ei=s,this[s]=p(e,d.type),this._$Ei=null}}requestUpdate(o,e,t){let i=!0;o!==void 0&&(((t=t||this.constructor.getPropertyOptions(o)).hasChanged||Td)(this[o],e)?(this._$AL.has(o)||this._$AL.set(o,e),t.reflect===!0&&this._$Ei!==o&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(o,t))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const o=this.scheduleUpdate();return o!=null&&await o,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,r)=>this[r]=i),this._$Et=void 0);let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(o=this._$Eg)===null||o===void 0||o.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(o){}_$AE(o){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostUpdated)===null||i===void 0?void 0:i.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(o)),this.updated(o)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(o){return!0}update(o){this._$E_!==void 0&&(this._$E_.forEach((e,t)=>this._$ES(t,this[t],e)),this._$E_=void 0),this._$EU()}updated(o){}firstUpdated(o){}};Mi.finalized=!0,Mi.elementProperties=new Map,Mi.elementStyles=[],Mi.shadowRootOptions={mode:"open"},ac==null||ac({ReactiveElement:Mi}),((vs=globalThis.reactiveElementVersions)!==null&&vs!==void 0?vs:globalThis.reactiveElementVersions=[]).push("1.2.3");var Yi=globalThis.trustedTypes,lc=Yi?Yi.createPolicy("lit-html",{createHTML:o=>o}):void 0,Eo=`lit$${(Math.random()+"").slice(9)}$`,Dd="?"+Eo,r0=`<${Dd}>`,Ji=document,Br=(o="")=>Ji.createComment(o),Vr=o=>o===null||typeof o!="object"&&typeof o!="function",cc=Array.isArray,cr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,uc=/-->/g,dc=/>/g,Go=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,pc=/'/g,hc=/"/g,fc=/^(?:script|style|textarea|title)$/i,yt=(o=>(e,...t)=>({_$litType$:o,strings:e,values:t}))(1),To=Symbol.for("lit-noChange"),je=Symbol.for("lit-nothing"),mc=new WeakMap,Bi=Ji.createTreeWalker(Ji,129,null,!1),Sn=class{constructor({strings:o,_$litType$:e},t){let i;this.parts=[];let r=0,n=0;const s=o.length-1,d=this.parts,[c,p]=((u,a)=>{const l=u.length-1,h=[];let f,m=a===2?"<svg>":"",v=cr;for(let y=0;y<l;y++){const b=u[y];let x,w,A=-1,S=0;for(;S<b.length&&(v.lastIndex=S,w=v.exec(b),w!==null);)S=v.lastIndex,v===cr?w[1]==="!--"?v=uc:w[1]!==void 0?v=dc:w[2]!==void 0?(fc.test(w[2])&&(f=RegExp("</"+w[2],"g")),v=Go):w[3]!==void 0&&(v=Go):v===Go?w[0]===">"?(v=f!=null?f:cr,A=-1):w[1]===void 0?A=-2:(A=v.lastIndex-w[2].length,x=w[1],v=w[3]===void 0?Go:w[3]==='"'?hc:pc):v===hc||v===pc?v=Go:v===uc||v===dc?v=cr:(v=Go,f=void 0);const q=v===Go&&u[y+1].startsWith("/>")?" ":"";m+=v===cr?b+r0:A>=0?(h.push(x),b.slice(0,A)+"$lit$"+b.slice(A)+Eo+q):b+Eo+(A===-2?(h.push(void 0),y):q)}const g=m+(u[l]||"<?>")+(a===2?"</svg>":"");if(!Array.isArray(u)||!u.hasOwnProperty("raw"))throw Error("invalid template strings array");return[lc!==void 0?lc.createHTML(g):g,h]})(o,e);if(this.el=Sn.createElement(c,t),Bi.currentNode=this.el.content,e===2){const u=this.el.content,a=u.firstChild;a.remove(),u.append(...a.childNodes)}for(;(i=Bi.nextNode())!==null&&d.length<s;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const a of i.getAttributeNames())if(a.endsWith("$lit$")||a.startsWith(Eo)){const l=p[n++];if(u.push(a),l!==void 0){const h=i.getAttribute(l.toLowerCase()+"$lit$").split(Eo),f=/([.?@])?(.*)/.exec(l);d.push({type:1,index:r,name:f[2],strings:h,ctor:f[1]==="."?n0:f[1]==="?"?a0:f[1]==="@"?l0:Fn})}else d.push({type:6,index:r})}for(const a of u)i.removeAttribute(a)}if(fc.test(i.tagName)){const u=i.textContent.split(Eo),a=u.length-1;if(a>0){i.textContent=Yi?Yi.emptyScript:"";for(let l=0;l<a;l++)i.append(u[l],Br()),Bi.nextNode(),d.push({type:2,index:++r});i.append(u[a],Br())}}}else if(i.nodeType===8)if(i.data===Dd)d.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(Eo,u+1))!==-1;)d.push({type:7,index:r}),u+=Eo.length-1}r++}}static createElement(o,e){const t=Ji.createElement("template");return t.innerHTML=o,t}};function er(o,e,t=o,i){var r,n,s,d;if(e===To)return e;let c=i!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[i]:t._$Cu;const p=Vr(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==p&&((n=c==null?void 0:c._$AO)===null||n===void 0||n.call(c,!1),p===void 0?c=void 0:(c=new p(o),c._$AT(o,t,i)),i!==void 0?((s=(d=t)._$Cl)!==null&&s!==void 0?s:d._$Cl=[])[i]=c:t._$Cu=c),c!==void 0&&(e=er(o,c._$AS(o,e.values),c,i)),e}var ys,xs,kn=class{constructor(o,e,t,i){var r;this.type=2,this._$AH=je,this._$AN=void 0,this._$AA=o,this._$AB=e,this._$AM=t,this.options=i,this._$Cg=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var o,e;return(e=(o=this._$AM)===null||o===void 0?void 0:o._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let o=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&o.nodeType===11&&(o=e.parentNode),o}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(o,e=this){o=er(this,o,e),Vr(o)?o===je||o==null||o===""?(this._$AH!==je&&this._$AR(),this._$AH=je):o!==this._$AH&&o!==To&&this.$(o):o._$litType$!==void 0?this.T(o):o.nodeType!==void 0?this.S(o):(t=>{var i;return cc(t)||typeof((i=t)===null||i===void 0?void 0:i[Symbol.iterator])=="function"})(o)?this.A(o):this.$(o)}M(o,e=this._$AB){return this._$AA.parentNode.insertBefore(o,e)}S(o){this._$AH!==o&&(this._$AR(),this._$AH=this.M(o))}$(o){this._$AH!==je&&Vr(this._$AH)?this._$AA.nextSibling.data=o:this.S(Ji.createTextNode(o)),this._$AH=o}T(o){var e;const{values:t,_$litType$:i}=o,r=typeof i=="number"?this._$AC(o):(i.el===void 0&&(i.el=Sn.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(t);else{const n=new class{constructor(d,c){this.v=[],this._$AN=void 0,this._$AD=d,this._$AM=c}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(d){var c;const{el:{content:p},parts:u}=this._$AD,a=((c=d==null?void 0:d.creationScope)!==null&&c!==void 0?c:Ji).importNode(p,!0);Bi.currentNode=a;let l=Bi.nextNode(),h=0,f=0,m=u[0];for(;m!==void 0;){if(h===m.index){let v;m.type===2?v=new kn(l,l.nextSibling,this,d):m.type===1?v=new m.ctor(l,m.name,m.strings,this,d):m.type===6&&(v=new c0(l,this,d)),this.v.push(v),m=u[++f]}h!==(m==null?void 0:m.index)&&(l=Bi.nextNode(),h++)}return a}m(d){let c=0;for(const p of this.v)p!==void 0&&(p.strings!==void 0?(p._$AI(d,p,c),c+=p.strings.length-2):p._$AI(d[c])),c++}}(r,this),s=n.p(this.options);n.m(t),this.S(s),this._$AH=n}}_$AC(o){let e=mc.get(o.strings);return e===void 0&&mc.set(o.strings,e=new Sn(o)),e}A(o){cc(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let t,i=0;for(const r of o)i===e.length?e.push(t=new kn(this.M(Br()),this.M(Br()),this,this.options)):t=e[i],t._$AI(r),i++;i<e.length&&(this._$AR(t&&t._$AB.nextSibling,i),e.length=i)}_$AR(o=this._$AA.nextSibling,e){var t;for((t=this._$AP)===null||t===void 0||t.call(this,!1,!0,e);o&&o!==this._$AB;){const i=o.nextSibling;o.remove(),o=i}}setConnected(o){var e;this._$AM===void 0&&(this._$Cg=o,(e=this._$AP)===null||e===void 0||e.call(this,o))}},Fn=class{constructor(o,e,t,i,r){this.type=1,this._$AH=je,this._$AN=void 0,this.element=o,this.name=e,this._$AM=i,this.options=r,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=je}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(o,e=this,t,i){const r=this.strings;let n=!1;if(r===void 0)o=er(this,o,e,0),n=!Vr(o)||o!==this._$AH&&o!==To,n&&(this._$AH=o);else{const s=o;let d,c;for(o=r[0],d=0;d<r.length-1;d++)c=er(this,s[t+d],e,d),c===To&&(c=this._$AH[d]),n||(n=!Vr(c)||c!==this._$AH[d]),c===je?o=je:o!==je&&(o+=(c!=null?c:"")+r[d+1]),this._$AH[d]=c}n&&!i&&this.k(o)}k(o){o===je?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,o!=null?o:"")}},n0=class extends Fn{constructor(){super(...arguments),this.type=3}k(o){this.element[this.name]=o===je?void 0:o}},s0=Yi?Yi.emptyScript:"",a0=class extends Fn{constructor(){super(...arguments),this.type=4}k(o){o&&o!==je?this.element.setAttribute(this.name,s0):this.element.removeAttribute(this.name)}},l0=class extends Fn{constructor(o,e,t,i,r){super(o,e,t,i,r),this.type=5}_$AI(o,e=this){var t;if((o=(t=er(this,o,e,0))!==null&&t!==void 0?t:je)===To)return;const i=this._$AH,r=o===je&&i!==je||o.capture!==i.capture||o.once!==i.once||o.passive!==i.passive,n=o!==je&&(i===je||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,o),this._$AH=o}handleEvent(o){var e,t;typeof this._$AH=="function"?this._$AH.call((t=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&t!==void 0?t:this.element,o):this._$AH.handleEvent(o)}},c0=class{constructor(o,e,t){this.element=o,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(o){er(this,o)}},vc=window.litHtmlPolyfillSupport;vc==null||vc(Sn,kn),((gs=globalThis.litHtmlVersions)!==null&&gs!==void 0?gs:globalThis.litHtmlVersions=[]).push("2.1.3");var Tt=class extends Mi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var o,e;const t=super.createRenderRoot();return(o=(e=this.renderOptions).renderBefore)!==null&&o!==void 0||(e.renderBefore=t.firstChild),t}update(o){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(o),this._$Dt=((t,i,r)=>{var n,s;const d=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:i;let c=d._$litPart$;if(c===void 0){const p=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:null;d._$litPart$=c=new kn(i.insertBefore(Br(),p),p,void 0,r!=null?r:{})}return c._$AI(t),c})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var o;super.connectedCallback(),(o=this._$Dt)===null||o===void 0||o.setConnected(!0)}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this._$Dt)===null||o===void 0||o.setConnected(!1)}render(){return To}};Tt.finalized=!0,Tt._$litElement$=!0,(ys=globalThis.litElementHydrateSupport)===null||ys===void 0||ys.call(globalThis,{LitElement:Tt});var gc=globalThis.litElementPolyfillSupport;gc==null||gc({LitElement:Tt}),((xs=globalThis.litElementVersions)!==null&&xs!==void 0?xs:globalThis.litElementVersions=[]).push("3.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bi=Bo`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,u0=Bo`
  ${bi}

  :host {
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);

    display: block;
  }

  .tab-group {
    display: flex;
    border: solid 1px transparent;
    border-radius: 0;
  }

  .tab-group .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group .tab-group__indicator {
    position: absolute;
    left: 0;
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid 2px var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: -2px;
    border-bottom: solid 2px var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid 2px var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * 2px);
    border-top: solid 2px var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-right: solid 2px var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * 2px);
    border-right: solid 2px var(--indicator-color);
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid 2px var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * 2px);
    border-left: solid 2px var(--indicator-color);
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;function bc(o,e,t="vertical",i="smooth"){const r=function(a,l){return{top:Math.round(a.getBoundingClientRect().top-l.getBoundingClientRect().top),left:Math.round(a.getBoundingClientRect().left-l.getBoundingClientRect().left)}}(o,e),n=r.top+e.scrollTop,s=r.left+e.scrollLeft,d=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,p=e.scrollTop,u=e.scrollTop+e.offsetHeight;t!=="horizontal"&&t!=="both"||(s<d?e.scrollTo({left:s,behavior:i}):s+o.clientWidth>c&&e.scrollTo({left:s-e.offsetWidth+o.clientWidth,behavior:i})),t!=="vertical"&&t!=="both"||(n<p?e.scrollTo({top:n,behavior:i}):n+o.clientHeight>u&&e.scrollTo({top:n-e.offsetHeight+o.clientHeight,behavior:i}))}var qr,Gs=new Set,d0=new MutationObserver(Rd),Qs=new Map,gr=document.documentElement.lang||navigator.language;function Rd(){gr=document.documentElement.lang||navigator.language,[...Gs.keys()].map(o=>{typeof o.requestUpdate=="function"&&o.requestUpdate()})}d0.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});var Ld=class{constructor(o){this.host=o,this.host.addController(this)}hostConnected(){Gs.add(this.host)}hostDisconnected(){Gs.delete(this.host)}term(o,...e){return function(t,i,...r){const n=t.toLowerCase().slice(0,2),s=t.length>2?t.toLowerCase():"",d=Qs.get(s),c=Qs.get(n);let p;if(d&&d[i])p=d[i];else if(c&&c[i])p=c[i];else{if(!qr||!qr[i])return console.error(`No translation found for: ${i}`),i;p=qr[i]}return typeof p=="function"?p(...r):p}(this.host.lang||gr,o,...e)}date(o,e){return function(t,i,r){return i=new Date(i),new Intl.DateTimeFormat(t,r).format(i)}(this.host.lang||gr,o,e)}number(o,e){return function(t,i,r){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(t,r).format(i)}(this.host.lang||gr,o,e)}relativeTime(o,e,t){return function(i,r,n,s){return new Intl.RelativeTimeFormat(i,s).format(r,n)}(this.host.lang||gr,o,e,t)}};(function(...o){o.map(e=>{const t=e.$code.toLowerCase();Qs.set(t,e),qr||(qr=e)}),Rd()})({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var p0=1,h0=2,Md=o=>(...e)=>({_$litDirective$:o,values:e}),jd=class{constructor(o){}get _$AU(){return this._$AM._$AU}_$AT(o,e,t){this._$Ct=o,this._$AM=e,this._$Ci=t}_$AS(o,e){return this.update(o,e)}update(o,e){return this.render(...e)}},Xr=Md(class extends jd{constructor(o){var e;if(super(o),o.type!==p0||o.name!=="class"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var t,i;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.et=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!(!((t=this.et)===null||t===void 0)&&t.has(n))&&this.st.add(n);return this.render(e)}const r=o.element.classList;this.st.forEach(n=>{n in e||(r.remove(n),this.st.delete(n))});for(const n in e){const s=!!e[n];s===this.st.has(n)||((i=this.et)===null||i===void 0?void 0:i.has(n))||(s?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return To}}),$d=Object.defineProperty,f0=Object.defineProperties,m0=Object.getOwnPropertyDescriptor,v0=Object.getOwnPropertyDescriptors,yc=Object.getOwnPropertySymbols,g0=Object.prototype.hasOwnProperty,b0=Object.prototype.propertyIsEnumerable,xc=(o,e,t)=>e in o?$d(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,yi=(o,e)=>{for(var t in e||(e={}))g0.call(e,t)&&xc(o,t,e[t]);if(yc)for(var t of yc(e))b0.call(e,t)&&xc(o,t,e[t]);return o},zn=(o,e)=>f0(o,v0(e)),re=(o,e,t,i)=>{for(var r,n=i>1?void 0:i?m0(e,t):e,s=o.length-1;s>=0;s--)(r=o[s])&&(n=(i?r(e,t,n):r(n))||n);return i&&n&&$d(e,t,n),n};function ui(o,e){const t=yi({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:n}=i;if(o in i){const s=o;i.update=function(d){if(d.has(s)){const c=d.get(s),p=this[s];c!==p&&(t.waitUntilFirstUpdate&&!this.hasUpdated||this[r](c,p))}n.call(this,d)}}}}function Pt(o,e,t){const i=new CustomEvent(e,yi({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return o.dispatchEvent(i),i}function wc(o,e){return new Promise(t=>{o.addEventListener(e,function i(r){r.target===o&&(o.removeEventListener(e,i),t())})})}var xi=o=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(o,e):((t,i)=>{const{kind:r,elements:n}=i;return{kind:r,elements:n,finisher(s){window.customElements.define(t,s)}}})(o,e),y0=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?zn(yi({},e),{finisher(t){t.createProperty(e.key,o)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function Ee(o){return(e,t)=>t!==void 0?((i,r,n)=>{r.constructor.createProperty(n,i)})(o,e,t):y0(o,e)}function Ud(o){return Ee(zn(yi({},o),{state:!0}))}var ws;function oi(o,e){return(({finisher:t,descriptor:i})=>(r,n)=>{var s;if(n===void 0){const d=(s=r.originalKey)!==null&&s!==void 0?s:r.key,c=i!=null?{kind:"method",placement:"prototype",key:d,descriptor:i(r.key)}:zn(yi({},r),{key:d});return t!=null&&(c.finisher=function(p){t(p,d)}),c}{const d=r.constructor;i!==void 0&&Object.defineProperty(r,n,i(n)),t==null||t(d,n)}})({descriptor:t=>{const i={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var n,s;return this[r]===void 0&&(this[r]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null),this[r]}}return i}})}(ws=window.HTMLSlotElement)===null||ws===void 0||ws.prototype.assignedElements;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pt=class extends Tt{constructor(){super(...arguments),this.localize=new Ld(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.preventIndicatorTransition(),this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(o=>{o.some(e=>!["aria-labelledby","aria-controls"].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels()),o.some(e=>e.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((o,e)=>{var t;o[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((t=this.getActiveTab())!=null?t:this.tabs[0],{emitEvents:!1}),e.unobserve(o[0].target))}).observe(this.tabGroup)})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}show(o){const e=this.tabs.find(t=>t.panel===o);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}getAllTabs(o=!1){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(e=>o?e.tagName.toLowerCase()==="sl-tab":e.tagName.toLowerCase()==="sl-tab"&&!e.disabled)}getAllPanels(){return[...this.body.querySelector("slot").assignedElements()].filter(o=>o.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(o=>o.active)}handleClick(o){const e=o.target.closest("sl-tab");(e==null?void 0:e.closest("sl-tab-group"))===this&&e!==null&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(o){const e=o.target.closest("sl-tab");if((e==null?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(o.key)&&e!==null&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),o.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(o.key))){const t=document.activeElement;if((t==null?void 0:t.tagName.toLowerCase())==="sl-tab"){let i=this.tabs.indexOf(t);o.key==="Home"?i=0:o.key==="End"?i=this.tabs.length-1:["top","bottom"].includes(this.placement)&&o.key==="ArrowLeft"||["start","end"].includes(this.placement)&&o.key==="ArrowUp"?i--:(["top","bottom"].includes(this.placement)&&o.key==="ArrowRight"||["start","end"].includes(this.placement)&&o.key==="ArrowDown")&&i++,i<0&&(i=this.tabs.length-1),i>this.tabs.length-1&&(i=0),this.tabs[i].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[i],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&bc(this.tabs[i],this.nav,"horizontal"),o.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}setActiveTab(o,e){if(e=yi({emitEvents:!0,scrollBehavior:"auto"},e),o!==this.activeTab&&!o.disabled){const t=this.activeTab;this.activeTab=o,this.tabs.map(i=>i.active=i===this.activeTab),this.panels.map(i=>{var r;return i.active=i.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&bc(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(t&&Pt(this,"sl-tab-hide",{detail:{name:t.panel}}),Pt(this,"sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(o=>{const e=this.panels.find(t=>t.name===o.panel);e&&(o.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",o.getAttribute("id")))})}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}repositionIndicator(){const o=this.getActiveTab();if(!o)return;const e=o.clientWidth,t=o.clientHeight,i=this.getAllTabs(!0),r=i.slice(0,i.indexOf(o)).reduce((n,s)=>({left:n.left+s.clientWidth,top:n.top+s.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.transform=`translateX(${r.left}px)`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${t}px`,this.indicator.style.transform=`translateY(${r.top}px)`}}preventIndicatorTransition(){const o=this.indicator.style.transition;this.indicator.style.transition="none",requestAnimationFrame(()=>{this.indicator.style.transition=o})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.panels=this.getAllPanels(),this.syncIndicator()}render(){return yt`
      <div
        part="base"
        class=${Xr({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?yt`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name="chevron-left"
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?yt`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name="chevron-right"
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <div part="body" class="tab-group__body">
          <slot @slotchange=${this.syncTabsAndPanels}></slot>
        </div>
      </div>
    `}};pt.styles=u0,re([oi(".tab-group")],pt.prototype,"tabGroup",2),re([oi(".tab-group__body")],pt.prototype,"body",2),re([oi(".tab-group__nav")],pt.prototype,"nav",2),re([oi(".tab-group__indicator")],pt.prototype,"indicator",2),re([Ud()],pt.prototype,"hasScrollControls",2),re([Ee()],pt.prototype,"placement",2),re([Ee()],pt.prototype,"activation",2),re([Ee({attribute:"no-scroll-controls",type:Boolean})],pt.prototype,"noScrollControls",2),re([Ee()],pt.prototype,"lang",2),re([ui("noScrollControls",{waitUntilFirstUpdate:!0})],pt.prototype,"updateScrollControls",1),re([ui("placement",{waitUntilFirstUpdate:!0})],pt.prototype,"syncIndicator",1),pt=re([xi("sl-tab-group")],pt);var x0=(()=>{const o=document.createElement("style");let e;try{document.head.appendChild(o),o.sheet.insertRule(":focus-visible { color: inherit }"),e=!0}catch{e=!1}finally{o.remove()}return e})(),Fd=Cd(x0?":focus-visible":":focus"),w0=Bo`
  ${bi}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button${Fd} {
    box-shadow: var(--sl-focus-ring);
  }
`,Rt=o=>o!=null?o:je,At=class extends Tt{constructor(){super(...arguments),this.label="",this.disabled=!1}render(){const o=!!this.href,e=yt`
      <sl-icon
        name=${Rt(this.name)}
        library=${Rt(this.library)}
        src=${Rt(this.src)}
        aria-hidden="true"
      ></sl-icon>
    `;return o?yt`
          <a
            part="base"
            class="icon-button"
            href=${Rt(this.href)}
            target=${Rt(this.target)}
            download=${Rt(this.download)}
            rel=${Rt(this.target?"noreferrer noopener":void 0)}
            role="button"
            aria-disabled=${this.disabled?"true":"false"}
            aria-label="${this.label}"
            tabindex=${this.disabled?"-1":"0"}
          >
            ${e}
          </a>
        `:yt`
          <button
            part="base"
            class=${Xr({"icon-button":!0,"icon-button--disabled":this.disabled})}
            ?disabled=${this.disabled}
            type="button"
            aria-label=${this.label}
          >
            ${e}
          </button>
        `}};At.styles=w0,re([oi(".icon-button")],At.prototype,"button",2),re([Ee()],At.prototype,"name",2),re([Ee()],At.prototype,"library",2),re([Ee()],At.prototype,"src",2),re([Ee()],At.prototype,"href",2),re([Ee()],At.prototype,"target",2),re([Ee()],At.prototype,"download",2),re([Ee()],At.prototype,"label",2),re([Ee({type:Boolean,reflect:!0})],At.prototype,"disabled",2),At=re([xi("sl-icon-button")],At);var zd="";function Ac(o){zd=o}var Bd=[...document.getElementsByTagName("script")],Ec=Bd.find(o=>o.hasAttribute("data-shoelace"));if(Ec)Ac(Ec.getAttribute("data-shoelace"));else{const o=Bd.find(t=>/shoelace(\.min)?\.js($|\?)/.test(t.src));let e="";o&&(e=o.getAttribute("src")),Ac(e.split("/").slice(0,-1).join("/"))}var _c={"check-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},A0=[{name:"default",resolver:o=>`${zd.replace(/\/$/,"")}/assets/icons/${o}.svg`},{name:"system",resolver:o=>o in _c?`data:image/svg+xml,${encodeURIComponent(_c[o])}`:""}],As=[];function Oc(o){return A0.find(e=>e.name===o)}var Es=new Map,_s=new Map;async function E0(o){if(_s.has(o))return _s.get(o);const e=await function(i,r="cors"){if(Es.has(i))return Es.get(i);const n=fetch(i,{mode:r}).then(async s=>({ok:s.ok,status:s.status,html:await s.text()}));return Es.set(i,n),n}(o),t={ok:e.ok,status:e.status,svg:null};if(e.ok){const i=document.createElement("div");i.innerHTML=e.html;const r=i.firstElementChild;t.svg=(r==null?void 0:r.tagName.toLowerCase())==="svg"?r.outerHTML:""}return _s.set(o,t),t}var _0=Bo`
  ${bi}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Ws=class extends jd{constructor(o){if(super(o),this.it=je,o.type!==h0)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(o){if(o===je||o==null)return this.vt=void 0,this.it=o;if(o===To)return o;if(typeof o!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(o===this.it)return this.vt;this.it=o;const e=[o];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Ws.directiveName="unsafeHTML",Ws.resultType=1;var Zs=class extends Ws{};Zs.directiveName="unsafeSVG",Zs.resultType=2;var O0=Md(Zs),q0=new DOMParser,Wt=class extends Tt{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){var o;super.connectedCallback(),o=this,As.push(o)}firstUpdated(){this.setIcon()}disconnectedCallback(){var o;super.disconnectedCallback(),o=this,As=As.filter(e=>e!==o)}getUrl(){const o=Oc(this.library);return this.name&&o?o.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var o;const e=Oc(this.library),t=this.getUrl();if(t)try{const i=await E0(t);if(t!==this.getUrl())return;if(i.ok){const r=q0.parseFromString(i.svg,"text/html").body.querySelector("svg");r!==null?((o=e==null?void 0:e.mutator)==null||o.call(e,r),this.svg=r.outerHTML,Pt(this,"sl-load")):(this.svg="",Pt(this,"sl-error"))}else this.svg="",Pt(this,"sl-error")}catch{Pt(this,"sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const o=typeof this.label=="string"&&this.label.length>0;return yt` <div
      part="base"
      class="icon"
      role=${Rt(o?"img":void 0)}
      aria-label=${Rt(o?this.label:void 0)}
      aria-hidden=${Rt(o?void 0:"true")}
    >
      ${O0(this.svg)}
    </div>`}};Wt.styles=_0,re([Ud()],Wt.prototype,"svg",2),re([Ee()],Wt.prototype,"name",2),re([Ee()],Wt.prototype,"src",2),re([Ee()],Wt.prototype,"label",2),re([Ee()],Wt.prototype,"library",2),re([ui("name"),ui("src"),ui("library")],Wt.prototype,"setIcon",1),Wt=re([xi("sl-icon")],Wt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I0=0;function Vd(){return++I0}var S0=Bo`
  ${bi}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab${Fd}:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
    box-shadow: inset var(--sl-focus-ring);
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-right: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-large);
    margin-left: var(--sl-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }
`,Zt=class extends Tt{constructor(){super(...arguments),this.localize=new Ld(this),this.attrId=Vd(),this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}focus(o){this.tab.focus(o)}blur(){this.tab.blur()}handleCloseClick(){Pt(this,"sl-close")}render(){return this.id=this.id.length>0?this.id:this.componentId,yt`
      <div
        part="base"
        class=${Xr({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        role="tab"
        aria-disabled=${this.disabled?"true":"false"}
        aria-selected=${this.active?"true":"false"}
        tabindex=${this.disabled||!this.active?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?yt`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Zt.styles=S0,re([oi(".tab")],Zt.prototype,"tab",2),re([Ee({reflect:!0})],Zt.prototype,"panel",2),re([Ee({type:Boolean,reflect:!0})],Zt.prototype,"active",2),re([Ee({type:Boolean})],Zt.prototype,"closable",2),re([Ee({type:Boolean,reflect:!0})],Zt.prototype,"disabled",2),re([Ee()],Zt.prototype,"lang",2),Zt=re([xi("sl-tab")],Zt);var k0=Bo`
  ${bi}

  :host {
    --padding: 0;

    display: block;
  }

  .tab-panel {
    border: solid 1px transparent;
    padding: var(--padding);
  }
`,ur=class extends Tt{constructor(){super(...arguments),this.attrId=Vd(),this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId}render(){return this.style.display=this.active?"block":"none",yt`
      <div part="base" class="tab-panel" role="tabpanel" aria-hidden=${this.active?"false":"true"}>
        <slot></slot>
      </div>
    `}};ur.styles=k0,re([Ee({reflect:!0})],ur.prototype,"name",2),re([Ee({type:Boolean,reflect:!0})],ur.prototype,"active",2),ur=re([xi("sl-tab-panel")],ur);var P0=Bo`
  ${bi}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--sl-font-size-x-small);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 3px 6px;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Si=class extends Tt{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return yt`
      <span
        part="base"
        class=${Xr({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Si.styles=P0,re([Ee({reflect:!0})],Si.prototype,"variant",2),re([Ee({type:Boolean,reflect:!0})],Si.prototype,"pill",2),re([Ee({type:Boolean,reflect:!0})],Si.prototype,"pulse",2),Si=re([xi("sl-badge")],Si);let Et=class extends Gr(he)(tt){constructor(){super(),this.modo="",this.projetoNorma={},this.existeObserverEmenda=!1,this.totalAlertas=0,this.autoria=new ka,this.parlamentares=[],this.getParlamentares().then(o=>this.parlamentares=o)}async getParlamentares(){return(await(await fetch("https://emendas-api.herokuapp.com/parlamentares")).json()).map(o=>({identificacao:o.id,nome:o.nome,sexo:o.sexo,siglaPartido:o.siglaPartido,siglaUF:o.siglaUF,siglaCasaLegislativa:o.siglaCasa}))}montarColegiadoApreciador(o,e){return{siglaCasaLegislativa:"CN",tipoColegiado:"Comiss\xE3o",siglaComissao:`CMMPV ${o}/${e}`}}montarLocalFromColegiadoApreciador(o){return o.tipoColegiado==="Comiss\xE3o"?"Sala da comiss\xE3o":"Sala das sess\xF5es"}montarEmendaBasicaFromProjetoNorma(o,e){const t=new _m;t.modoEdicao=e;const i=Un(this.projetoNorma);return t.componentes[0].urn=i,t.proposicao={urn:i,sigla:hf(i),numero:Wr(i),ano:ff(i),ementa:o.value.projetoNorma.norma.parteInicial.ementa.content[0],identificacaoTexto:""},t}getEmenda(){const o=this.montarEmendaBasicaFromProjetoNorma(this.projetoNorma,this.modo);return o.componentes[0].dispositivos=this._lexmlEta.getDispositivosEmenda(),o.comandoEmenda=this._lexmlEta.getComandoEmenda(),o.justificativa=this._lexmlJustificativa.texto,o.autoria=this._lexmlAutoria.getAutoriaAtualizada(),o.data=this._lexmlData.data,o.colegiadoApreciador=this.montarColegiadoApreciador(o.proposicao.numero,o.proposicao.ano),o.local=this.montarLocalFromColegiadoApreciador(o.colegiadoApreciador),o}setEmenda(o){this.modo=o.modoEdicao,this._lexmlEta.dispositivosEmenda=o.componentes[0].dispositivos,this.autoria=o.autoria,this._lexmlJustificativa.setContent(o.justificativa),this._lexmlData.data=o.data}createRenderRoot(){return this}updated(){(this==null?void 0:this.ajustarAltura())&&this.existeObserverEmenda!==!0&&this.observarAltura();const o=document.querySelector("#sl-tab-4");o==null||o.addEventListener("focus",e=>{e.stopImmediatePropagation();const t=e.target.querySelector("sl-badge");t&&(t.pulse=!1)})}pesquisarAlturaParentElement(o){if(o.parentElement===null)return 0;{const e=getComputedStyle(this).getPropertyValue("--min-height").replace("px","");return o.scrollHeight>=e?o.scrollHeight:this.pesquisarAlturaParentElement(o.parentElement)}}ajustarAltura(o){var e,t;let i=o!==void 0?o:this.pesquisarAlturaParentElement(this);const r=(t=(e=document.querySelector("sl-tab-group"))===null||e===void 0?void 0:e.shadowRoot)===null||t===void 0?void 0:t.querySelector(".tab-group__nav-container"),n=r==null?void 0:r.scrollHeight;return!!(n&&(i=i-n-2,i>0))&&(this==null||this.style.setProperty("--height",i+"px"),this==null||this.style.setProperty("--overflow","hidden"),!0)}observarAltura(){const o=new ResizeObserver(e=>{for(const t of e)t.contentBoxSize&&this.ajustarAltura(t.contentBoxSize[0].blockSize)});this.existeObserverEmenda=!0,o.observe(this)}render(){return xe`
      ${o0}
      <style>
        :root {
          --height: 100%;
          --overflow: visible;
          --min-height: 300px;
        }
        lexml-emenda {
        }
        lexml-eta {
        }
        sl-tab-panel {
          --padding: 0px;
        }
        sl-tab-panel::part(base) {
          height: var(--height);
          overflow: var(--overflow);
          /* overflow-y: auto; */
        }
        sl-tab-panel.overflow-hidden::part(base) {
          overflow-y: auto;
        }
        lexml-emenda-justificativa #editor-justificativa {
          height: calc(var(--height) - 44px);
          overflow: var(--overflow);
        }
        .badge-pulse {
          margin-left: 7px;
          height: 16px;
          margin-top: -4px;
        }
      </style>
      <sl-tab-group>
        <sl-tab slot="nav" panel="lexml-eta">Texto</sl-tab>
        <sl-tab slot="nav" panel="justificativa">Justificativa</sl-tab>
        <sl-tab slot="nav" panel="autoria">Data e Autoria</sl-tab>
        <sl-tab slot="nav" panel="avisos">
          Avisos
          <div class="badge-pulse" id="contadorAvisos">${this.totalAlertas>0?xe` <sl-badge variant="danger" pill pulse>${this.totalAlertas}</sl-badge> `:""}</div>
        </sl-tab>
        <sl-tab-panel name="lexml-eta">
          <lexml-eta id="lexmlEta" modo=${this.modo} .projetoNorma=${this.projetoNorma}></lexml-eta>
        </sl-tab-panel>
        <sl-tab-panel name="justificativa">
          <lexml-emenda-justificativa></lexml-emenda-justificativa>
        </sl-tab-panel>
        <sl-tab-panel name="autoria" class="overflow-hidden">
          <lexml-data></lexml-data>
          <hr />
          <lexml-autoria .parlamentares=${this.parlamentares} .autoria=${this.autoria}></lexml-autoria>
        </sl-tab-panel>
        <sl-tab-panel name="avisos" class="overflow-hidden">
          <lexml-eta-alertas></lexml-eta-alertas>
        </sl-tab-panel>
      </sl-tab-group>
    `}};function qc(o,e,t){return new Promise(i=>{if((t==null?void 0:t.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=o.animate(e,zn(yi({},t),{duration:N0()?0:t.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function N0(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ic(o){return Promise.all(o.getAnimations().map(e=>new Promise(t=>{const i=requestAnimationFrame(t);e.addEventListener("cancel",()=>i,{once:!0}),e.addEventListener("finish",()=>i,{once:!0}),e.cancel()})))}le([Be({type:String})],Et.prototype,"modo",void 0),le([Be({type:Object})],Et.prototype,"projetoNorma",void 0),le([Be({type:Boolean})],Et.prototype,"existeObserverEmenda",void 0),le([Be({type:Number})],Et.prototype,"totalAlertas",void 0),le([bn()],Et.prototype,"autoria",void 0),le([bn()],Et.prototype,"parlamentares",void 0),le([Jo("lexml-eta")],Et.prototype,"_lexmlEta",void 0),le([Jo("lexml-emenda-justificativa")],Et.prototype,"_lexmlJustificativa",void 0),le([Jo("lexml-autoria")],Et.prototype,"_lexmlAutoria",void 0),le([Jo("lexml-data")],Et.prototype,"_lexmlData",void 0),Et=le([It("lexml-emenda")],Et);var Hd=new Map,C0=new WeakMap;function Sc(o,e){Hd.set(o,function(t){return t!=null?t:{keyframes:[],options:{duration:0}}}(e))}function kc(o,e){const t=C0.get(o);return t!=null&&t[e]?t[e]:Hd.get(e)||{keyframes:[],options:{duration:0}}}var T0=Bo`
  ${bi}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--box-shadow);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-left: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-right: var(--sl-spacing-medium);
  }
`,ki=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Dt=class extends Tt{constructor(){super(...arguments),this.hasSlotController=new class{constructor(o,...e){this.slotNames=[],(this.host=o).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent.trim()!=="")return!0;if(o.nodeType===o.ELEMENT_NODE){const e=o;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(o){return this.host.querySelector(`:scope > [slot="${o}"]`)!==null}test(o){return o==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(o)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(o){const e=o.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}}(this,"icon","suffix"),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,wc(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wc(this,"sl-after-hide")}async toast(){return new Promise(o=>{ki.parentElement===null&&document.body.append(ki),ki.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ki.removeChild(this),o(),ki.querySelector("sl-alert")===null&&ki.remove()},{once:!0})})}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){Pt(this,"sl-show"),this.duration<1/0&&this.restartAutoHide(),await Ic(this.base),this.base.hidden=!1;const{keyframes:o,options:e}=kc(this,"alert.show");await qc(this.base,o,e),Pt(this,"sl-after-show")}else{Pt(this,"sl-hide"),clearTimeout(this.autoHideTimeout),await Ic(this.base);const{keyframes:o,options:e}=kc(this,"alert.hide");await qc(this.base,o,e),this.base.hidden=!0,Pt(this,"sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return yt`
      <div
        part="base"
        class=${Xr({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <span part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </span>

        <span part="message" class="alert__message">
          <slot></slot>
        </span>

        ${this.closable?yt`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x"
                library="system"
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};Dt.styles=T0,re([oi('[part="base"]')],Dt.prototype,"base",2),re([Ee({type:Boolean,reflect:!0})],Dt.prototype,"open",2),re([Ee({type:Boolean,reflect:!0})],Dt.prototype,"closable",2),re([Ee({reflect:!0})],Dt.prototype,"variant",2),re([Ee({type:Number})],Dt.prototype,"duration",2),re([ui("open",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleOpenChange",1),re([ui("duration")],Dt.prototype,"handleDurationChange",1),Dt=re([xi("sl-alert")],Dt),Sc("alert.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}}),Sc("alert.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});let an=class extends Gr(he)(tt){constructor(){super(...arguments),this.alertas=[]}stateChanged(o){this.alertas=o.alertaReducer.alertas}getAlertIcon(o){return o==="success"?xe`<sl-icon slot="icon" name="check2-circle"></sl-icon>`:o==="warning"?xe`<sl-icon slot="icon" name="exclamation-triangle"></sl-icon>`:o==="danger"?xe`<sl-icon slot="icon" name="exclamation-octagon"></sl-icon>`:xe`<sl-icon slot="icon" name="info-circle"></sl-icon>`}limparAlertas(){he.dispatch({type:"LIMPAR_ALERTAS"})}updated(o){var e,t,i;if(o.has("alertas")){const r=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelectorAll("sl-alert");r==null||r.forEach(d=>{d.addEventListener("sl-after-hide",c=>{he.dispatch(function(p){return{type:"REMOVER_ALERTA",id:p}}(c.target.id))})});const n=document.querySelector("lexml-emenda");n.totalAlertas=this.alertas.length;const s=((t=o.get("alertas"))===null||t===void 0?void 0:t.length)||0;if(n.totalAlertas>s){const d=(i=document.querySelector("#contadorAvisos"))===null||i===void 0?void 0:i.querySelector("sl-badge");d&&(d.pulse=!0)}}}render(){return xe`
      ${function*(o,e){if(o!==void 0){let t=0;for(const i of o)yield e(i,t++)}}(this.alertas,o=>xe`${o.podeFechar?xe` <sl-alert variant="${o.tipo}" id="${o.id}" open closable class="alert-closable"> ${this.getAlertIcon(o.tipo)} ${o.mensagem} </sl-alert> `:xe` <sl-alert variant="${o.tipo}" id="${o.id}" open> ${this.getAlertIcon(o.tipo)} ${o.mensagem} </sl-alert> `}`)}
    `}};an.styles=Hr`
    sl-alert {
      --box-shadow: var(--sl-shadow-x-large);
      margin: 20px;
    }
  `,le([Be({type:Array})],an.prototype,"alertas",void 0),an=le([It("lexml-eta-alertas")],an);const Kd=cp(xp);Kd.use(up()).use(Ap);Kd.mount("#app");export{Ui as _,$0 as a,M0 as b,L0 as c,j0 as d,vp as g,mp as i,U0 as s,Xs as u};
