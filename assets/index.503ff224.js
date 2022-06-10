var hh=Object.defineProperty,fh=Object.defineProperties;var mh=Object.getOwnPropertyDescriptors;var zl=Object.getOwnPropertySymbols;var gh=Object.prototype.hasOwnProperty,vh=Object.prototype.propertyIsEnumerable;var Fl=(t,e,o)=>e in t?hh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,rt=(t,e)=>{for(var o in e||(e={}))gh.call(e,o)&&Fl(t,o,e[o]);if(zl)for(var o of zl(e))vh.call(e,o)&&Fl(t,o,e[o]);return t},uo=(t,e)=>fh(t,mh(e));import{d as bh,a as yh,u as xh,b as Ls,o as wh,c as _h,e as Ms,f as Ul,g as Ah,h as Eh,F as Oh,r as Sh,i as kh,j as Ih,k as qh,l as Ch}from"./vendor.d72107b9.js";const Ph=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}};Ph();const Th="modulepreload",Bl={},Nh="/lexml-eta-vue/",dr=function(e,o){return!o||o.length===0?e():Promise.all(o.map(i=>{if(i=`${Nh}${i}`,i in Bl)return;Bl[i]=!0;const r=i.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${n}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":Th,r||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),r)return new Promise((u,c)=>{s.addEventListener("load",u),s.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Dh=t=>{const e=[...t];return e.sort((o,i)=>{const r=new Date(o.metadados.datUltimoAcesso);return new Date(i.metadados.datUltimoAcesso).getTime()-r.getTime()}),e},Vl=t=>{window.localStorage.setItem("emendas",JSON.stringify(t))},Xa=bh({id:"appStore",state:()=>({emendas:[]}),getters:{},actions:{adicionarEmenda(t){const e=rt({},t),o=this.emendas.findIndex(i=>{var r,n;return((r=i.metadados)==null?void 0:r.id)===((n=e.metadados)==null?void 0:n.id)});o>=0?this.emendas[o]=e:this.emendas.push(e),this.emendas=Dh(this.emendas),Vl(this.emendas)},lerEmendas(){return this.emendas=JSON.parse(window.localStorage.getItem("emendas")||"[]"),this.emendas},removerDaLista(t){this.emendas=this.emendas.filter(e=>{var o,i;return((o=e.metadados)==null?void 0:o.id)!==((i=t.metadados)==null?void 0:i.id)}),Vl(this.emendas)}}}),Rh=t=>"emenda"in t,Lh=t=>Rh(t)?t.emenda.proposicao:t,lt=[];for(let t=0;t<256;t++)lt[t]=(t<16?"0":"")+t.toString(16);const Mh=()=>{const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,o=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return lt[t&255]+lt[t>>8&255]+lt[t>>16&255]+lt[t>>24&255]+"-"+lt[e&255]+lt[e>>8&255]+"-"+lt[e>>16&15|64]+lt[e>>24&255]+"-"+lt[o&63|128]+lt[o>>8&255]+"-"+lt[o>>16&255]+lt[o>>24&255]+lt[i&255]+lt[i>>8&255]+lt[i>>16&255]+lt[i>>24&255]};let bs;var $h={configModulo:t=>bs=t};const k0=(t,e)=>{if(t){const{sigla:o,numero:i,ano:r}=Lh(t),n={sigla:o,numero:i,ano:r};e&&(n.ondeCouber=e),bs.push({path:"/edicao",query:n})}},I0=t=>{const e=t;e.metadados.id=e.metadados.id||Mh(),e.metadados.datAlteracao=new Date,e.metadados.datUltimoAcesso=new Date;const o=JSON.stringify(e,null,4),i=new Blob([o],{type:"application/json"}),{sigla:r,numero:n,ano:s}=e.emenda.proposicao,u=`${r} ${n}/${s}.emenda.json`,c=URL.createObjectURL(i),d=document.createElement("a");d.href=c,d.download=u,document.body.appendChild(d),d.click(),Xa().adicionarEmenda(e)},q0=t=>{if(t){t.metadados.datUltimoAcesso=new Date;const{sigla:e,numero:o,ano:i}=t.emenda.proposicao,r={sigla:e,numero:o,ano:i};t.emenda.tipo==="emendaArtigoOndeCouber"&&(r.ondeCouber=!0),bs.push({name:"edicao",query:r,params:{emendaEmDisco:JSON.stringify(t),titulo:t.metadados.titulo}})}},C0=()=>{const t=document.getElementById("fileUpload");t!=null&&t.click()},P0=t=>{const e=t.target;if(e&&e.files){const o=new FileReader;o.readAsText(e.files[0]),o.onloadend=i=>{var r;if((r=i.target)!=null&&r.result){const n=JSON.parse(i.target.result),s=n;s.metadados.datAlteracao=new Date(n.datAlteracao),s.metadados.datUltimoAcesso=new Date;const{sigla:u,numero:c,ano:d}=s.emenda.proposicao,p={sigla:u,numero:c,ano:d};s.emenda.tipo==="emendaArtigoOndeCouber"&&(p.ondeCouber=!0),Xa().adicionarEmenda(s),bs.push({name:"edicao",query:p,params:{emendaEmDisco:JSON.stringify(s),titulo:s.metadados.titulo}})}}}};const jh={class:"bs-eta"},zh=yh({setup(t){$h.configModulo(xh());const e=Ls(()=>dr(()=>import("./HeaderArea.334ad89d.js"),["assets/HeaderArea.334ad89d.js","assets/HeaderArea.1c64915d.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.d72107b9.js"]));Ls(()=>dr(()=>import("./FooterArea.7bce4361.js"),["assets/FooterArea.7bce4361.js","assets/FooterArea.ebc43ff2.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.d72107b9.js"]));const o=Ls(()=>dr(()=>import("./IconesSvg.76eb3f8a.js"),["assets/IconesSvg.76eb3f8a.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.d72107b9.js"]));return Xa().lerEmendas(),(r,n)=>{const s=Sh("router-view");return wh(),_h(Oh,null,[Ms(Ul(e)),Ah("div",jh,[Ms(s)]),Eh("",!0),Ms(Ul(o))],64)}}}),Fh=[{path:"/",name:"home",component:()=>dr(()=>import("./DashboardView.45822af8.js").then(function(t){return t.D}),["assets/DashboardView.45822af8.js","assets/DashboardView.5f18c293.css","assets/vendor.d72107b9.js","assets/proposicaoService.8f275e90.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/edicao",name:"edicao",component:()=>dr(()=>import("./EditorEmendaView.df9fc2c9.js"),["assets/EditorEmendaView.df9fc2c9.js","assets/vendor.d72107b9.js"]),props:!0},{path:"/pesquisa-proposicao",name:"PesquisaProposicao",component:()=>dr(()=>import("./PesquisaProposicaoView.1711edf1.js").then(function(t){return t.P}),["assets/PesquisaProposicaoView.1711edf1.js","assets/PesquisaProposicaoView.d0506868.css","assets/vendor.d72107b9.js","assets/proposicaoService.8f275e90.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0}],Uh=kh({history:Ih(),routes:Fh,scrollBehavior(t,e,o){return new Promise(i=>{if(!o)i(!1);else{const r=new Date;let n=0;const s=()=>{clearInterval(n);const u=(new Date().getTime()-r.getTime())/1e3,c=document.body.scrollHeight;u<2e3&&c<o.top?n=window.setTimeout(()=>{s()},100):i(uo(rt({},o),{behavior:"auto"}))};s()}})}}),Bn=Symbol("defaultState"),Hu=Symbol("delegatesFocus"),wi=Symbol("firstRender"),Ku=Symbol("focusTarget"),xa=Symbol("hasDynamicTemplate"),Gu=Symbol("ids"),Vn=Symbol("nativeInternals"),tr=Symbol("raiseChangeEvents"),jo=Symbol("render"),Hn=Symbol("renderChanges"),Hr=Symbol("rendered"),Kr=Symbol("rendering"),wa=Symbol("setState"),Yr=Symbol("shadowRoot"),_a=Symbol("shadowRootMode"),Aa=Symbol("state"),Gr=Symbol("stateEffects"),Wu=Symbol("template");function cn(t,e){return typeof e=="boolean"?e:typeof e=="string"&&(e===""||t.toLowerCase()===e.toLowerCase())}function ni(t,e){let o=e;for(;o;){const i=o.assignedSlot||o.parentNode||o.host;if(i===t)return!0;o=i}return!1}function Jn(t){const e=Ju(t,i=>i instanceof HTMLElement&&i.matches('a[href],area[href],button:not([disabled]),details,iframe,input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[contentEditable="true"],[tabindex]')&&i.tabIndex>=0),{value:o}=e.next();return o instanceof HTMLElement?o:null}function Qu(t,e){return Array.prototype.findIndex.call(t,o=>o===e||ni(o,e))}function Zu(t,e){const o=e.composedPath()[0];return t===o||ni(t,o)}function*Xu(t){t&&(yield t,yield*function*(e){let o=e;for(;o=o instanceof HTMLElement&&o.assignedSlot?o.assignedSlot:o instanceof ShadowRoot?o.host:o.parentNode,o;)yield o}(t))}function un(t,e,o){t.toggleAttribute(e,o),t[Vn]&&t[Vn].states&&t[Vn].states.toggle(e,o)}const Yu={checked:!0,defer:!0,disabled:!0,hidden:!0,ismap:!0,multiple:!0,noresize:!0,readonly:!0,selected:!0};function*Ju(t,e){let o;if(e(t)&&(yield t),t instanceof HTMLElement&&t.shadowRoot)o=t.shadowRoot.children;else{const i=t instanceof HTMLSlotElement?t.assignedNodes({flatten:!0}):[];o=i.length>0?i:t.childNodes}if(o)for(let i=0;i<o.length;i++)yield*Ju(o[i],e)}const ze={html:(t,...e)=>ao.html(t,...e).content},ao={html(t,...e){const o=document.createElement("template");return o.innerHTML=String.raw(t,...e),o}},Hl=new Map;function ed(t){if(typeof t=="function"){let e;try{e=new t}catch(o){if(o.name!=="TypeError")throw o;(function(i){let r;const n=/^[A-Za-z][A-Za-z0-9_$]*$/,s=i.name&&i.name.match(n);if(s){const d=/([A-Z])/g;r=s[0].replace(d,(a,l,h)=>h>0?`-${l}`:l).toLowerCase()}else r="custom-element";let u,c=Hl.get(r)||0;for(;u=`${r}-${c}`,customElements.get(u);c++);customElements.define(u,i),Hl.set(r,c+1)})(t),e=new t}return e}return document.createElement(t)}function Ea(t,e){const o=t.parentNode;if(!o)throw"An element must have a parent before it can be substituted.";return(t instanceof HTMLElement||t instanceof SVGElement)&&(e instanceof HTMLElement||e instanceof SVGElement)&&(Array.prototype.forEach.call(t.attributes,i=>{e.getAttribute(i.name)||i.name==="class"||i.name==="style"||e.setAttribute(i.name,i.value)}),Array.prototype.forEach.call(t.classList,i=>{e.classList.add(i)}),Array.prototype.forEach.call(t.style,i=>{e.style[i]||(e.style[i]=t.style[i])})),e.append(...t.childNodes),o.replaceChild(e,t),e}function mr(t,e){if(typeof e=="function"&&t.constructor===e||typeof e=="string"&&t instanceof Element&&t.localName===e)return t;{const o=ed(e);return Ea(t,o),o}}const Kl={tabindex:"tabIndex"},Gl={tabIndex:"tabindex"};function td(t){if(t===HTMLElement)return[];const e=Object.getPrototypeOf(t.prototype).constructor;let o=e.observedAttributes;o||(o=td(e));const i=Object.getOwnPropertyNames(t.prototype).filter(r=>{const n=Object.getOwnPropertyDescriptor(t.prototype,r);return n&&typeof n.set=="function"}).map(r=>function(n){let s=Gl[n];if(!s){const u=/([A-Z])/g;s=n.replace(u,"-$1").toLowerCase(),Gl[n]=s}return s}(r)).filter(r=>o.indexOf(r)<0);return o.concat(i)}const Nn=Symbol("state"),$s=Symbol("raiseChangeEventsInNextRender"),Ki=Symbol("changedSinceLastRender");function Bh(t,e){const o={};for(const n in e)i=e[n],r=t[n],(i instanceof Date&&r instanceof Date?i.getTime()===r.getTime():i===r)||(o[n]=!0);var i,r;return o}const Wl=new Map,js=Symbol("shadowIdProxy"),od=Symbol("proxyElement"),Vh={get(t,e){const o=t[od][Yr];return o&&typeof e=="string"?o.getElementById(e):null}},Do=function(t){return class extends t{attributeChangedCallback(e,o,i){if(super.attributeChangedCallback&&super.attributeChangedCallback(e,o,i),i!==o&&!this[Kr]){const r=function(n){let s=Kl[n];if(!s){const u=/-([a-z])/g;s=n.replace(u,c=>c[1].toUpperCase()),Kl[n]=s}return s}(e);if(r in this){const n=Yu[e]?cn(e,i):i;this[r]=n}}}static get observedAttributes(){return td(this)}}}(function(t){class e extends t{constructor(){super(),this[wi]=void 0,this[tr]=!1,this[Ki]=null,this[wa](this[Bn])}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[Hn]()}get[Bn](){return super[Bn]||{}}[jo](i){super[jo]&&super[jo](i)}[Hn](){this[wi]===void 0&&(this[wi]=!0);const i=this[Ki];if(this[wi]||i){const r=this[tr];this[tr]=this[$s],this[Kr]=!0,this[jo](i),this[Kr]=!1,this[Ki]=null,this[Hr](i),this[wi]=!1,this[tr]=r,this[$s]=r}}[Hr](i){super[Hr]&&super[Hr](i)}async[wa](i){this[Kr]&&console.warn(`${this.constructor.name} called [setState] during rendering, which you should avoid.
See https://elix.org/documentation/ReactiveMixin.`);const{state:r,changed:n}=function(u,c){const d=Object.assign({},u[Nn]),p={};let a=c;for(;;){const l=Bh(d,a);if(Object.keys(l).length===0)break;Object.assign(d,a),Object.assign(p,l),a=u[Gr](d,l)}return{state:d,changed:p}}(this,i);if(this[Nn]&&Object.keys(n).length===0)return;Object.freeze(r),this[Nn]=r,this[tr]&&(this[$s]=!0);const s=this[wi]===void 0||this[Ki]!==null;this[Ki]=Object.assign(this[Ki]||{},n),this.isConnected&&!s&&(await Promise.resolve(),this[Hn]())}get[Aa](){return this[Nn]}[Gr](i,r){return super[Gr]?super[Gr](i,r):{}}}return new URLSearchParams(location.search).get("elixdebug")==="true"&&Object.defineProperty(e.prototype,"state",{get(){return this[Aa]}}),e}(function(t){return class extends t{get[Gu](){if(!this[js]){const e={[od]:this};this[js]=new Proxy(e,Vh)}return this[js]}[jo](e){if(super[jo]&&super[jo](e),!this[Yr]){const o=function(i){let r=i[xa]?void 0:Wl.get(i.constructor);if(r===void 0){if(r=i[Wu],r&&!(r instanceof HTMLTemplateElement))throw`Warning: the [template] property for ${i.constructor.name} must return an HTMLTemplateElement.`;i[xa]||Wl.set(i.constructor,r||null)}return r}(this);if(o){const i=this.attachShadow({delegatesFocus:this[Hu],mode:this[_a]}),r=document.importNode(o.content,!0);i.append(r),this[Yr]=i}else this[Yr]=null}}get[_a](){return"open"}}}(HTMLElement))),Oa=Symbol("checkSize"),Ci=Symbol("closestAvailableItemIndex"),Sa=Symbol("contentSlot"),Q=Bn,es=Symbol("defaultTabIndex"),Ya=Hu,cr=Symbol("effectEndTarget"),tt=wi,ka=Ku,Wr=Symbol("getItemText"),zo=Symbol("goDown"),vo=Symbol("goEnd"),or=Symbol("goFirst"),ir=Symbol("goLast"),Fo=Symbol("goLeft"),Uo=Symbol("goNext"),Bo=Symbol("goPrevious"),Vo=Symbol("goRight"),bo=Symbol("goStart"),rr=Symbol("goToItemWithPrefix"),Ho=Symbol("goUp"),Hh=xa,ce=Gu,Pi=Symbol("inputDelegate"),Kh=Symbol("itemsDelegate"),Ce=Symbol("keydown"),Gh=Symbol("mouseenter"),Wh=Symbol("mouseleave"),Oi=Vn,re=tr,Z=jo,Qh=Hn,Zh=Symbol("renderDataToElement"),oe=Hr,Ir=Kr,Rt=Symbol("scrollTarget"),J=wa,gt=Yr,Xh=_a,Ja=Symbol("startEffect"),D=Aa,Ee=Gr,Yh=Symbol("swipeDown"),Jh=Symbol("swipeDownComplete"),ef=Symbol("swipeLeft"),tf=Symbol("swipeLeftTransitionEnd"),of=Symbol("swipeRight"),rf=Symbol("swipeRightTransitionEnd"),nf=Symbol("swipeUp"),sf=Symbol("swipeUpComplete"),af=Symbol("swipeStart"),lf=Symbol("swipeTarget"),gr=Symbol("tap"),de=Wu,cf=Symbol("toggleSelectedFlag");new URLSearchParams(location.search).get("elixdebug")==="true"&&(window.elix={internal:{checkSize:Oa,closestAvailableItemIndex:Ci,contentSlot:Sa,defaultState:Q,defaultTabIndex:es,delegatesFocus:Ya,effectEndTarget:cr,firstRender:tt,focusTarget:ka,getItemText:Wr,goDown:zo,goEnd:vo,goFirst:or,goLast:ir,goLeft:Fo,goNext:Uo,goPrevious:Bo,goRight:Vo,goStart:bo,goToItemWithPrefix:rr,goUp:Ho,hasDynamicTemplate:Hh,ids:ce,inputDelegate:Pi,itemsDelegate:Kh,keydown:Ce,mouseenter:Gh,mouseleave:Wh,nativeInternals:Oi,event,raiseChangeEvents:re,render:Z,renderChanges:Qh,renderDataToElement:Zh,rendered:oe,rendering:Ir,scrollTarget:Rt,setState:J,shadowRoot:gt,shadowRootMode:Xh,startEffect:Ja,state:D,stateEffects:Ee,swipeDown:Yh,swipeDownComplete:Jh,swipeLeft:ef,swipeLeftTransitionEnd:tf,swipeRight:of,swipeRightTransitionEnd:rf,swipeUp:nf,swipeUpComplete:sf,swipeStart:af,swipeTarget:lf,tap:gr,template:de,toggleSelectedFlag:cf}});const Dn=Symbol("previousBodyStyleOverflow"),Rn=Symbol("previousDocumentMarginRight"),id=Symbol("wrap"),zs=Symbol("wrappingFocus");function el(t){return class extends t{[Ce](e){const o=Jn(this[gt]);if(o){const i=document.activeElement&&(document.activeElement===o||document.activeElement.contains(o)),r=this[gt].activeElement,n=r&&(r===o||ni(r,o));(i||n)&&e.key==="Tab"&&e.shiftKey&&(this[zs]=!0,this[ce].focusCatcher.focus(),this[zs]=!1)}return super[Ce]&&super[Ce](e)||!1}[Z](e){super[Z]&&super[Z](e),this[tt]&&this[ce].focusCatcher.addEventListener("focus",()=>{if(!this[zs]){const o=Jn(this[gt]);o&&o.focus()}})}[id](e){const o=ze.html`
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
      `,i=o.getElementById("focusCaptureContainer");i&&(e.replaceWith(o),i.append(e))}}}function ys(t){return class extends t{constructor(){super(),this.addEventListener("keydown",async e=>{this[re]=!0,this[D].focusVisible||this[J]({focusVisible:!0}),this[Ce](e)&&(e.preventDefault(),e.stopImmediatePropagation()),await Promise.resolve(),this[re]=!1})}attributeChangedCallback(e,o,i){if(e==="tabindex"){let r;i===null?r=-1:(r=Number(i),isNaN(r)&&(r=this[es]?this[es]:0)),this.tabIndex=r}else super.attributeChangedCallback(e,o,i)}get[Q](){const e=this[Ya]?-1:0;return Object.assign(super[Q]||{},{tabIndex:e})}[Ce](e){return!!super[Ce]&&super[Ce](e)}[Z](e){super[Z]&&super[Z](e),e.tabIndex&&(this.tabIndex=this[D].tabIndex)}get tabIndex(){return super.tabIndex}set tabIndex(e){super.tabIndex!==e&&(super.tabIndex=e),this[Ir]||this[J]({tabIndex:e})}}}el.wrap=id;const uf=function(t){return class extends t{get[Q](){return Object.assign(super[Q]||{},{role:null})}[Z](e){if(super[Z]&&super[Z](e),e.role){const{role:o}=this[D];o?this.setAttribute("role",o):this.removeAttribute("role")}}get role(){return super.role}set role(e){const o=String(e);super.role=o,this[Ir]||this[J]({s:o})}}}(Do);class tl extends uf{get[Q](){return Object.assign(super[Q],{role:"none"})}get[de](){return ao.html`
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
    `}}class rd extends tl{constructor(){super(),"PointerEvent"in window||this.addEventListener("touchmove",e=>{e.touches.length===1&&e.preventDefault()})}}const Ln=Symbol("closePromise"),Fs=Symbol("closeResolve");function nd(t){return class extends t{attributeChangedCallback(e,o,i){if(e==="opened"){const r=cn(e,i);this.opened!==r&&(this.opened=r)}else super.attributeChangedCallback(e,o,i)}async close(e){super.close&&await super.close(),this[J]({closeResult:e}),await this.toggle(!1)}get closed(){return this[D]&&!this[D].opened}get closeFinished(){return this[D].closeFinished}get closeResult(){return this[D].closeResult}get[Q](){const e={closeResult:null,opened:!1};return this[Ja]&&Object.assign(e,{closeFinished:!0,effect:"close",effectPhase:"after",openCloseEffects:!0}),Object.assign(super[Q]||{},e)}async open(){super.open&&await super.open(),this[J]({closeResult:void 0}),await this.toggle(!0)}get opened(){return this[D]&&this[D].opened}set opened(e){this[J]({closeResult:void 0}),this.toggle(e)}[Z](e){if(super[Z](e),e.opened){const{opened:o}=this[D];un(this,"opened",o)}if(e.closeFinished){const{closeFinished:o}=this[D];un(this,"closed",o)}}[oe](e){if(super[oe]&&super[oe](e),e.opened&&this[re]){const i=new CustomEvent("opened-changed",{bubbles:!0,detail:{closeResult:this[D].closeResult,opened:this[D].opened}});this.dispatchEvent(i);const r=new CustomEvent("openedchange",{bubbles:!0,detail:{closeResult:this[D].closeResult,opened:this[D].opened}});if(this.dispatchEvent(r),this[D].opened){const n=new CustomEvent("opened",{bubbles:!0});this.dispatchEvent(n);const s=new CustomEvent("open",{bubbles:!0});this.dispatchEvent(s)}else{const n=new CustomEvent("closed",{bubbles:!0,detail:{closeResult:this[D].closeResult}});this.dispatchEvent(n);const s=new CustomEvent("close",{bubbles:!0,detail:{closeResult:this[D].closeResult}});this.dispatchEvent(s)}}const o=this[Fs];this.closeFinished&&o&&(this[Fs]=null,this[Ln]=null,o(this[D].closeResult))}[Ee](e,o){const i=super[Ee]?super[Ee](e,o):{};if(o.openCloseEffects||o.effect||o.effectPhase||o.opened){const{effect:r,effectPhase:n,openCloseEffects:s,opened:u}=e;Object.assign(i,{closeFinished:s?r==="close"&&n==="after":!u})}return i}async toggle(e=!this.opened){if(super.toggle&&await super.toggle(e),e!==this[D].opened){const o={opened:e};this[D].openCloseEffects&&(o.effect=e?"open":"close",this[D].effectPhase==="after"&&(o.effectPhase="before")),await this[J](o)}}whenClosed(){return this[Ln]||(this[Ln]=new Promise(e=>{this[Fs]=e})),this[Ln]}}}class sd extends Do{get[de](){return ao.html`
      <style>
        :host {
          display: inline-block;
          position: relative;
        }
      </style>
      <slot></slot>
    `}}const Us=Symbol("appendedToDocument"),Qr=Symbol("assignedZIndex"),mi=Symbol("restoreFocusToElement");function Ql(t){const e=function(){const o=document.body.querySelectorAll("*"),i=Array.from(o,r=>{const n=getComputedStyle(r);let s=0;if(n.position!=="static"&&n.zIndex!=="auto"){const u=n.zIndex?parseInt(n.zIndex):0;s=isNaN(u)?0:u}return s});return Math.max(...i)}()+1;t[Qr]=e,t.style.zIndex=e.toString()}function Ia(t){const e=getComputedStyle(t).zIndex,o=t.style.zIndex,i=!isNaN(parseInt(o));if(e==="auto")return i;if(e==="0"&&!i){const r=t.assignedSlot||(t instanceof ShadowRoot?t.host:t.parentNode);if(!(r instanceof HTMLElement))return!0;if(!Ia(r))return!1}return!0}function ad(t){return class extends t{get[Sa](){const e=this[gt]&&this[gt].querySelector("slot:not([name])");return this[gt]&&e||console.warn(`SlotContentMixin expects ${this.constructor.name} to define a shadow tree that includes a default (unnamed) slot.
See https://elix.org/documentation/SlotContentMixin.`),e}get[Q](){return Object.assign(super[Q]||{},{content:null})}[oe](e){if(super[oe]&&super[oe](e),this[tt]){const o=this[Sa];o&&o.addEventListener("slotchange",async()=>{this[re]=!0;const i=o.assignedNodes({flatten:!0});Object.freeze(i),this[J]({content:i}),await Promise.resolve(),this[re]=!1})}}}}const df=nd(function(t){return class extends t{get autoFocus(){return this[D].autoFocus}set autoFocus(e){this[J]({autoFocus:e})}get[Q](){return Object.assign(super[Q]||{},{autoFocus:!0,persistent:!1})}async open(){this[D].persistent||this.isConnected||(this[Us]=!0,document.body.append(this)),super.open&&await super.open()}[Z](e){super[Z]&&super[Z](e),this[tt]&&this.addEventListener("blur",o=>{const i=o.relatedTarget||document.activeElement;i instanceof HTMLElement&&(ni(this,i)||(this.opened?this[mi]=i:(i.focus(),this[mi]=null)))}),(e.effectPhase||e.opened||e.persistent)&&!this[D].persistent&&((this.closeFinished===void 0?this.closed:this.closeFinished)?this[Qr]&&(this.style.zIndex="",this[Qr]=null):this[Qr]?this.style.zIndex=this[Qr]:Ia(this)||Ql(this))}[oe](e){if(super[oe]&&super[oe](e),this[tt]&&this[D].persistent&&!Ia(this)&&Ql(this),e.opened&&this[D].autoFocus)if(this[D].opened){this[mi]||document.activeElement===document.body||(this[mi]=document.activeElement);const o=Jn(this);o&&o.focus()}else this[mi]&&(this[mi].focus(),this[mi]=null);!this[tt]&&!this[D].persistent&&this.closeFinished&&this[Us]&&(this[Us]=!1,this.parentNode&&this.parentNode.removeChild(this))}get[de](){const e=super[de]||ao.html``;return e.content.append(ze.html`
        <style>
          :host([closed]) {
            display: none;
          }
        </style>
      `),e}}}(ad(Do)));class ld extends df{get backdrop(){return this[ce]&&this[ce].backdrop}get backdropPartType(){return this[D].backdropPartType}set backdropPartType(e){this[J]({backdropPartType:e})}get[Q](){return Object.assign(super[Q],{backdropPartType:tl,framePartType:sd})}get frame(){return this[ce].frame}get framePartType(){return this[D].framePartType}set framePartType(e){this[J]({framePartType:e})}[Z](e){super[Z](e),Zl(this[gt],this[D],e)}[oe](e){super[oe](e),e.opened&&this[D].content&&this[D].content.forEach(o=>{o[Oa]&&o[Oa]()})}get[de](){const e=super[de];return e.content.append(ze.html`
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
    `),Zl(e.content,this[D]),e}}function Zl(t,e,o){if(!o||o.backdropPartType){const{backdropPartType:i}=e,r=t.getElementById("backdrop");r&&mr(r,i)}if(!o||o.framePartType){const{framePartType:i}=e,r=t.getElementById("frame");r&&mr(r,i)}}const pf=function(t){return class extends t{get[Q](){return Object.assign(super[Q]||{},{role:"dialog"})}[Ce](e){let o=!1;return e.key==="Escape"&&(this.close({canceled:"Escape"}),o=!0),o||super[Ce]&&super[Ce](e)||!1}[Z](e){if(super[Z]&&super[Z](e),e.opened)if(this[D].opened&&document.documentElement){const o=document.documentElement.clientWidth,i=window.innerWidth-o;this[Dn]=document.body.style.overflow,this[Rn]=i>0?document.documentElement.style.marginRight:null,document.body.style.overflow="hidden",i>0&&(document.documentElement.style.marginRight=`${i}px`)}else this[Dn]!=null&&(document.body.style.overflow=this[Dn],this[Dn]=null),this[Rn]!=null&&(document.documentElement.style.marginRight=this[Rn],this[Rn]=null);if(e.role){const{role:o}=this[D];this.setAttribute("role",o)}}get role(){return super.role}set role(e){super.role=e,this[Ir]||this[J]({role:e})}}}(el(ys(ld)));class cd extends pf{get[Q](){return Object.assign(super[Q],{backdropPartType:rd,tabIndex:-1})}get[de](){const e=super[de],o=e.content.querySelector("#frame");return this[el.wrap](o),e.content.append(ze.html`
        <style>
          :host {
            height: 100%;
            left: 0;
            pointer-events: initial;
            top: 0;
            width: 100%;
          }
        </style>
      `),e}}class hf extends cd{get choiceButtons(){return this[D].choiceButtons}get choiceButtonPartType(){return this[D].choiceButtonPartType}set choiceButtonPartType(e){this[J]({choiceButtonPartType:e})}get choices(){return this[D].choices}set choices(e){this[J]({choices:e})}get[Q](){return Object.assign(super[Q],{choiceButtonPartType:"button",choiceButtons:[],choices:["OK"]})}[Ce](e){let o=!1;const i=e.key.length===1&&e.key.toLowerCase();if(i){const r=this.choices.find(n=>n[0].toLowerCase()===i);r&&(this.close({choice:r}),o=!0)}return o||super[Ce]&&super[Ce](e)||!1}[Z](e){super[Z](e),this[tt]&&this[ce].choiceButtonContainer.addEventListener("click",async o=>{const i=o.target;if(i instanceof HTMLElement){const r=i.textContent;this[re]=!0,await this.close({choice:r}),this[re]=!1}}),e.choiceButtons&&function(o,i){const r=[...i],n=o.childNodes.length,s=r.length,u=Math.max(n,s);for(let c=0;c<u;c++){const d=o.childNodes[c],p=r[c];c>=n?o.append(p):c>=s?o.removeChild(o.childNodes[s]):d!==p&&(r.indexOf(d,c)>=c?o.insertBefore(p,d):o.replaceChild(p,d))}}(this[ce].choiceButtonContainer,this[D].choiceButtons)}[Ee](e,o){const i=super[Ee](e,o);if(o.choiceButtonPartType||o.choices){const r=e.choices.map(n=>{const s=ed(e.choiceButtonPartType);return"part"in s&&(s.part="choice-button"),s.textContent=n,s});Object.freeze(r),Object.assign(i,{choiceButtons:r})}return i}get[de](){const e=super[de],o=e.content.querySelector("slot:not([name])");return o&&o.replaceWith(ze.html`
        <div id="alertDialogContent">
          <slot></slot>
          <div id="choiceButtonContainer" part="choice-button-container"></div>
        </div>
      `),e}}const ud=document.createElement("div");ud.attachShadow({mode:"open",delegatesFocus:!0});const ff=ud.shadowRoot.delegatesFocus;function Bs(t){if("selectedText"in t)return t.selectedText;if("value"in t&&"options"in t){const e=t.value,o=t.options.find(i=>i.value===e);return o?o.innerText:""}return"value"in t?t.value:t.innerText}function Vs(t,e){const{ariaLabel:o,ariaLabelledby:i}=e,r=t.isConnected?t.getRootNode():null;let n=null;if(i&&r)n=i.split(" ").map(u=>{const c=r.getElementById(u);return c?c===t&&e.value!==null?e.selectedText:Bs(c):""}).join(" ");else if(o)n=o;else if(r){const s=t.id;if(s){const u=r.querySelector(`[for="${s}"]`);u instanceof HTMLElement&&(n=Bs(u))}if(n===null){const u=t.closest("label");u&&(n=Bs(u))}}return n&&(n=n.trim()),n}let Si=!1;const Nr=Symbol("focusVisibleChangedListener");function dd(t){return class extends t{constructor(){super(),this.addEventListener("focusout",e=>{Promise.resolve().then(()=>{const o=e.relatedTarget||document.activeElement,i=this===o,r=ni(this,o);!i&&!r&&(this[J]({focusVisible:!1}),document.removeEventListener("focusvisiblechange",this[Nr]),this[Nr]=null)})}),this.addEventListener("focusin",()=>{Promise.resolve().then(()=>{this[D].focusVisible!==Si&&this[J]({focusVisible:Si}),this[Nr]||(this[Nr]=()=>{this[J]({focusVisible:Si})},document.addEventListener("focusvisiblechange",this[Nr]))})})}get[Q](){return Object.assign(super[Q]||{},{focusVisible:!1})}[Z](e){if(super[Z]&&super[Z](e),e.focusVisible){const{focusVisible:o}=this[D];this.toggleAttribute("focus-visible",o)}}get[de](){const e=super[de]||ao.html``;return e.content.append(ze.html`
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
      `),e}}}function Xl(t){if(Si!==t){Si=t;const e=new CustomEvent("focus-visible-changed",{detail:{focusVisible:Si}});document.dispatchEvent(e);const o=new CustomEvent("focusvisiblechange",{detail:{focusVisible:Si}});document.dispatchEvent(o)}}function ol(t){return class extends t{get[Ya](){return!0}focus(e){const o=this[ka];o&&o.focus(e)}get[ka](){return Jn(this[gt])}}}window.addEventListener("keydown",()=>{Xl(!0)},{capture:!0}),window.addEventListener("mousedown",()=>{Xl(!1)},{capture:!0});const Yl=Symbol("extends"),Hs=Symbol("delegatedPropertySetters"),mf={a:!0,area:!0,button:!0,details:!0,iframe:!0,input:!0,select:!0,textarea:!0},gf={address:["scroll"],blockquote:["scroll"],caption:["scroll"],center:["scroll"],dd:["scroll"],dir:["scroll"],div:["scroll"],dl:["scroll"],dt:["scroll"],fieldset:["scroll"],form:["reset","scroll"],frame:["load"],h1:["scroll"],h2:["scroll"],h3:["scroll"],h4:["scroll"],h5:["scroll"],h6:["scroll"],iframe:["load"],img:["abort","error","load"],input:["abort","change","error","select","load"],li:["scroll"],link:["load"],menu:["scroll"],object:["error","scroll"],ol:["scroll"],p:["scroll"],script:["error","load"],select:["change","scroll"],tbody:["scroll"],tfoot:["scroll"],thead:["scroll"],textarea:["change","select","scroll"]},vf=["click","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","wheel"],bf={abort:!0,change:!0,reset:!0},yf=["address","article","aside","blockquote","canvas","dd","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","section","table","tfoot","ul","video"],Jl=["accept-charset","autoplay","buffered","challenge","codebase","colspan","contenteditable","controls","crossorigin","datetime","dirname","for","formaction","http-equiv","icon","ismap","itemprop","keytype","language","loop","manifest","maxlength","minlength","muted","novalidate","preload","radiogroup","readonly","referrerpolicy","rowspan","scoped","usemap"],xf=ol(Do);class il extends xf{constructor(){super();const e=this;!this[Oi]&&e.attachInternals&&(this[Oi]=e.attachInternals())}attributeChangedCallback(e,o,i){if(Jl.indexOf(e)>=0){const r=Object.assign({},this[D].innerAttributes,{[e]:i});this[J]({innerAttributes:r})}else super.attributeChangedCallback(e,o,i)}blur(){this.inner.blur()}get[Q](){return Object.assign(super[Q],{innerAttributes:{}})}get[es](){return mf[this.extends]?0:-1}get extends(){return this.constructor[Yl]}get inner(){const e=this[ce]&&this[ce].inner;return e||console.warn("Attempted to get an inner standard element before it was instantiated."),e}static get observedAttributes(){return[...super.observedAttributes,...Jl]}[Z](e){super[Z](e);const o=this.inner;if(this[tt]&&((gf[this.extends]||[]).forEach(i=>{o.addEventListener(i,()=>{const r=new Event(i,{bubbles:bf[i]||!1});this.dispatchEvent(r)})}),"disabled"in o&&vf.forEach(i=>{this.addEventListener(i,r=>{o.disabled&&r.stopImmediatePropagation()})})),e.tabIndex&&(o.tabIndex=this[D].tabIndex),e.innerAttributes){const{innerAttributes:i}=this[D];for(const r in i)wf(o,r,i[r])}this.constructor[Hs].forEach(i=>{if(e[i]){const r=this[D][i];(i==="selectionEnd"||i==="selectionStart")&&r===null||(o[i]=r)}})}[oe](e){if(super[oe](e),e.disabled){const{disabled:o}=this[D];o!==void 0&&un(this,"disabled",o)}}get[de](){const e=yf.includes(this.extends)?"block":"inline-block",o=this.extends;return ao.html`
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
      <${o} id="inner" part="inner ${o}">
        <slot></slot>
      </${o}>
    `}static wrap(e){class o extends il{}o[Yl]=e;const i=document.createElement(e);return function(r,n){const s=Object.getOwnPropertyNames(n);r[Hs]=[],s.forEach(u=>{const c=Object.getOwnPropertyDescriptor(n,u);if(!c)return;const d=function(p,a){if(typeof a.value=="function"){if(p!=="constructor")return function(l,h){const f=function(...m){this.inner[l](...m)};return{configurable:h.configurable,enumerable:h.enumerable,value:f,writable:h.writable}}(p,a)}else if(typeof a.get=="function"||typeof a.set=="function")return function(l,h){const f={configurable:h.configurable,enumerable:h.enumerable};return h.get&&(f.get=function(){return function(m,g){return m[D][g]||m[gt]&&m.inner[g]}(this,l)}),h.set&&(f.set=function(m){(function(g,v,y){g[D][v]!==y&&g[J]({[v]:y})})(this,l,m)}),h.writable&&(f.writable=h.writable),f}(p,a);return null}(u,c);d&&(Object.defineProperty(r.prototype,u,d),d.set&&r[Hs].push(u))})}(o,Object.getPrototypeOf(i)),o}}function wf(t,e,o){Yu[e]?typeof o=="string"?t.setAttribute(e,""):o===null&&t.removeAttribute(e):o!=null?t.setAttribute(e,o.toString()):t.removeAttribute(e)}const _f=function(t){return class extends t{get[Q](){return Object.assign(super[Q]||{},{composeFocus:!ff})}[Z](e){super[Z]&&super[Z](e),this[tt]&&this.addEventListener("mousedown",o=>{if(this[D].composeFocus&&o.button===0&&o.target instanceof Element){const i=function(r){for(const n of Xu(r)){const s=n[Ku]||n,u=s;if(s instanceof HTMLElement&&s.tabIndex>=0&&!u.disabled&&!(s instanceof HTMLSlotElement))return s}return null}(o.target);i&&(i.focus(),o.preventDefault())}})}}}(function(t){return class extends t{get ariaLabel(){return this[D].ariaLabel}set ariaLabel(e){this[D].removingAriaAttribute||this[J]({ariaLabel:String(e)})}get ariaLabelledby(){return this[D].ariaLabelledby}set ariaLabelledby(e){this[D].removingAriaAttribute||this[J]({ariaLabelledby:String(e)})}get[Q](){return Object.assign(super[Q]||{},{ariaLabel:null,ariaLabelledby:null,inputLabel:null,removingAriaAttribute:!1})}[Z](e){if(super[Z]&&super[Z](e),this[tt]&&this.addEventListener("focus",()=>{this[re]=!0;const o=Vs(this,this[D]);this[J]({inputLabel:o}),this[re]=!1}),e.inputLabel){const{inputLabel:o}=this[D];o?this[Pi].setAttribute("aria-label",o):this[Pi].removeAttribute("aria-label")}}[oe](e){super[oe]&&super[oe](e),this[tt]&&(window.requestIdleCallback||setTimeout)(()=>{const r=Vs(this,this[D]);this[J]({inputLabel:r})});const{ariaLabel:o,ariaLabelledby:i}=this[D];e.ariaLabel&&!this[D].removingAriaAttribute&&this.getAttribute("aria-label")&&(this.setAttribute("delegated-label",o),this[J]({removingAriaAttribute:!0}),this.removeAttribute("aria-label")),e.ariaLabelledby&&!this[D].removingAriaAttribute&&this.getAttribute("aria-labelledby")&&(this.setAttribute("delegated-labelledby",i),this[J]({removingAriaAttribute:!0}),this.removeAttribute("aria-labelledby")),e.removingAriaAttribute&&this[D].removingAriaAttribute&&this[J]({removingAriaAttribute:!1})}[Ee](e,o){const i=super[Ee]?super[Ee](e,o):{};if(o.ariaLabel&&e.ariaLabel||o.selectedText&&e.ariaLabelledby&&this.matches(":focus-within")){const r=Vs(this,e);Object.assign(i,{inputLabel:r})}return i}}}(dd(il.wrap("button"))));class Af extends _f{get[Q](){return Object.assign(super[Q],{role:"button"})}get[Pi](){return this[ce].inner}[gr](){const e=new MouseEvent("click",{bubbles:!0,cancelable:!0});this.dispatchEvent(e)}get[de](){const e=super[de];return e.content.append(ze.html`
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
      `),e}}class Ef extends function(e){return class extends e{get[de](){const o=super[de];return o.content.append(ze.html`
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
      `),o}}}(Af){}class pd extends Ef{get[de](){const e=super[de];return e.content.append(ze.html`
        <style>
          [part~="button"] {
            background: #eee;
            border: 1px solid #ccc;
            padding: 0.25em 0.5em;
          }
        </style>
      `),e}}class Of extends rd{get[de](){const e=super[de];return e.content.append(ze.html`
        <style>
          :host {
            background: rgba(0, 0, 0, 0.2);
          }
        </style>
      `),e}}class rl extends sd{get[de](){const e=super[de];return e.content.append(ze.html`
        <style>
          :host {
            background: white;
            border: 1px solid rgba(0, 0, 0, 0.2);
            box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
            box-sizing: border-box;
          }
        </style>
      `),e}}function hd(t){return class extends t{get[Q](){return Object.assign(super[Q]||{},{backdropPartType:Of,framePartType:rl})}}}class Sf extends hd(hf){get[Q](){return Object.assign(super[Q],{choiceButtonPartType:pd})}get[de](){const e=super[de];return e.content.append(ze.html`
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
      `),e}}customElements.define("elix-alert-dialog",class extends Sf{});class kf extends hd(cd){}customElements.define("elix-dialog",class extends kf{});const If={a:"link",article:"region",button:"button",h1:"sectionhead",h2:"sectionhead",h3:"sectionhead",h4:"sectionhead",h5:"sectionhead",h6:"sectionhead",hr:"sectionhead",iframe:"region",link:"link",menu:"menu",ol:"list",option:"option",output:"liveregion",progress:"progressbar",select:"select",table:"table",td:"td",textarea:"textbox",th:"th",ul:"list"};function ec(t){const e=t[gt],o=e&&e.querySelector("slot:not([name])");return o&&o.parentNode instanceof Element&&function(i){for(const r of Xu(i))if(r instanceof HTMLElement&&qf(r))return r;return null}(o.parentNode)||t}function qf(t){const e=getComputedStyle(t),o=e.overflowX,i=e.overflowY;return o==="scroll"||o==="auto"||i==="scroll"||i==="auto"}function Mn(t,e,o){const i=t[Ci](t[D],{direction:o,index:e});if(i<0)return!1;const r=t[D].currentIndex!==i;return r&&t[J]({currentIndex:i}),r}const Cf=["applet","basefont","embed","font","frame","frameset","isindex","keygen","link","multicol","nextid","noscript","object","param","script","style","template","noembed"];function tc(t,e,o){const i=t[D].items,r=o?0:i.length-1,n=o?i.length:0,s=o?1:-1;let u,c,d=null;const{availableItemFlags:p}=t[D];for(u=r;u!==n;u+=s)if((!p||p[u])&&(c=i[u].getBoundingClientRect(),c.top<=e&&e<=c.bottom)){d=i[u];break}if(!d||!c)return null;const a=getComputedStyle(d),l=a.paddingTop?parseFloat(a.paddingTop):0,h=a.paddingBottom?parseFloat(a.paddingBottom):0,f=c.top+l,m=f+d.clientHeight-l-h;return o&&f<=e||!o&&m>=e?u:u-s}function oc(t,e){const o=t[D].items,i=t[D].currentIndex,r=t[Rt].getBoundingClientRect(),n=tc(t,e?r.bottom:r.top,e);let s;if(n&&i===n){const c=o[i].getBoundingClientRect(),d=t[Rt].clientHeight;s=tc(t,e?c.bottom+d:c.top-d,e)}else s=n;if(!s){const c=e?o.length-1:0;s=t[Ci]?t[Ci](t[D],{direction:e?-1:1,index:c}):c}const u=s!==i;if(u){const c=t[re];t[re]=!0,t[J]({currentIndex:s}),t[re]=c}return u}const yo=Symbol("typedPrefix"),Kn=Symbol("prefixTimeout");function fd(t){const e=t;e[Kn]&&(clearTimeout(e[Kn]),e[Kn]=!1)}function qa(t){t[yo]="",fd(t)}function ic(t){fd(t),t[Kn]=setTimeout(()=>{qa(t)},1e3)}function nl(t){return class extends t{connectedCallback(){const e=getComputedStyle(this).direction==="rtl";this[J]({rightToLeft:e}),super.connectedCallback()}}}function Pf(t){return class extends t{get[Q](){return Object.assign(super[Q]||{},{items:null})}[Ee](e,o){const i=super[Ee]?super[Ee](e,o):{};if(o.content){const r=e.content,n=r?Array.prototype.filter.call(r,s=>{return(u=s)instanceof Element&&(!u.localName||Cf.indexOf(u.localName)<0);var u}):null;n&&Object.freeze(n),Object.assign(i,{items:n})}return i}}}const Tf=function(t){return class extends t{get[Q](){const e=super[Q];return Object.assign(e,{itemRole:e.itemRole||"menuitem",role:e.role||"menu"})}get itemRole(){return this[D].itemRole}set itemRole(e){this[J]({itemRole:e})}[Z](e){super[Z]&&super[Z](e);const o=this[D].items;if((e.items||e.itemRole)&&o){const{itemRole:i}=this[D];o.forEach(r=>{i===If[r.localName]?r.removeAttribute("role"):r.setAttribute("role",i)})}if(e.role){const{role:i}=this[D];this.setAttribute("role",i)}}get role(){return super.role}set role(e){super.role=e,this[Ir]||this[J]({role:e})}}}(function(t){return class extends t{attributeChangedCallback(e,o,i){if(e==="current-index")this.currentIndex=Number(i);else if(e==="current-item-required"){const r=cn(e,i);this.currentItemRequired!==r&&(this.currentItemRequired=r)}else if(e==="cursor-operations-wrap"){const r=cn(e,i);this.cursorOperationsWrap!==r&&(this.cursorOperationsWrap=r)}else super.attributeChangedCallback(e,o,i)}get currentIndex(){const{items:e,currentIndex:o}=this[D];return e&&e.length>0?o:-1}set currentIndex(e){isNaN(e)||this[J]({currentIndex:e})}get currentItem(){const{items:e,currentIndex:o}=this[D];return e&&e[o]}set currentItem(e){const{items:o}=this[D];if(!o)return;const i=o.indexOf(e);this[J]({currentIndex:i})}get currentItemRequired(){return this[D].currentItemRequired}set currentItemRequired(e){this[J]({currentItemRequired:e})}get cursorOperationsWrap(){return this[D].cursorOperationsWrap}set cursorOperationsWrap(e){this[J]({cursorOperationsWrap:e})}goFirst(){return super.goFirst&&super.goFirst(),this[or]()}goLast(){return super.goLast&&super.goLast(),this[ir]()}goNext(){return super.goNext&&super.goNext(),this[Uo]()}goPrevious(){return super.goPrevious&&super.goPrevious(),this[Bo]()}[oe](e){if(super[oe]&&super[oe](e),e.currentIndex&&this[re]){const{currentIndex:o}=this[D],i=new CustomEvent("current-index-changed",{bubbles:!0,detail:{currentIndex:o}});this.dispatchEvent(i);const r=new CustomEvent("currentindexchange",{bubbles:!0,detail:{currentIndex:o}});this.dispatchEvent(r)}}}}(function(t){return class extends t{[oe](e){super[oe]&&super[oe](e),e.currentItem&&this.scrollCurrentItemIntoView()}scrollCurrentItemIntoView(){super.scrollCurrentItemIntoView&&super.scrollCurrentItemIntoView();const{currentItem:e,items:o}=this[D];if(!e||!o)return;const i=this[Rt].getBoundingClientRect(),r=e.getBoundingClientRect(),n=r.bottom-i.bottom,s=r.left-i.left,u=r.right-i.right,c=r.top-i.top,d=this[D].orientation||"both";d!=="horizontal"&&d!=="both"||(u>0?this[Rt].scrollLeft+=u:s<0&&(this[Rt].scrollLeft+=Math.ceil(s))),d!=="vertical"&&d!=="both"||(n>0?this[Rt].scrollTop+=n:c<0&&(this[Rt].scrollTop+=Math.ceil(c)))}get[Rt](){return super[Rt]||ec(this)}}}(ol(function(t){return class extends t{get[Q](){return Object.assign(super[Q]||{},{canGoDown:null,canGoLeft:null,canGoRight:null,canGoUp:null})}[zo](){return super[zo]&&super[zo](),this[Uo]()}[vo](){return super[vo]&&super[vo](),this[ir]()}[Fo](){return super[Fo]&&super[Fo](),this[D]&&this[D].rightToLeft?this[Uo]():this[Bo]()}[Vo](){return super[Vo]&&super[Vo](),this[D]&&this[D].rightToLeft?this[Bo]():this[Uo]()}[bo](){return super[bo]&&super[bo](),this[or]()}[Ho](){return super[Ho]&&super[Ho](),this[Bo]()}[Ee](e,o){const i=super[Ee]?super[Ee](e,o):{};if(o.canGoNext||o.canGoPrevious||o.languageDirection||o.orientation||o.rightToLeft){const{canGoNext:r,canGoPrevious:n,orientation:s,rightToLeft:u}=e,c=s==="horizontal"||s==="both",d=s==="vertical"||s==="both";Object.assign(i,{canGoDown:d&&r,canGoLeft:!!c&&(u?r:n),canGoRight:!!c&&(u?n:r),canGoUp:d&&n})}return i}}}(function(t){return class extends t{get items(){return this[D]?this[D].items:null}[oe](e){if(super[oe]&&super[oe](e),!this[tt]&&e.items&&this[re]){const o=new CustomEvent("items-changed",{bubbles:!0});this.dispatchEvent(o);const i=new CustomEvent("itemschange",{bubbles:!0});this.dispatchEvent(i)}}}}(function(t){return class extends t{[Ci](e,o={}){const i=o.direction!==void 0?o.direction:1,r=o.index!==void 0?o.index:e.currentIndex,n=o.wrap!==void 0?o.wrap:e.cursorOperationsWrap,{items:s}=e,u=s?s.length:0;if(u===0)return-1;if(n){let c=(r%u+u)%u;const d=((c-i)%u+u)%u;for(;c!==d;){if(!e.availableItemFlags||e.availableItemFlags[c])return c;c=((c+i)%u+u)%u}}else for(let c=r;c>=0&&c<u;c+=i)if(!e.availableItemFlags||e.availableItemFlags[c])return c;return-1}get[Q](){return Object.assign(super[Q]||{},{currentIndex:-1,desiredCurrentIndex:null,currentItem:null,currentItemRequired:!1,cursorOperationsWrap:!1})}[or](){return super[or]&&super[or](),Mn(this,0,1)}[ir](){return super[ir]&&super[ir](),Mn(this,this[D].items.length-1,-1)}[Uo](){super[Uo]&&super[Uo]();const{currentIndex:e,items:o}=this[D];return Mn(this,e<0&&o?0:e+1,1)}[Bo](){super[Bo]&&super[Bo]();const{currentIndex:e,items:o}=this[D];return Mn(this,e<0&&o?o.length-1:e-1,-1)}[Ee](e,o){const i=super[Ee]?super[Ee](e,o):{};if(o.availableItemFlags||o.items||o.currentIndex||o.currentItemRequired){const{currentIndex:r,desiredCurrentIndex:n,currentItem:s,currentItemRequired:u,items:c}=e,d=c?c.length:0;let p,a=n;if(o.items&&!o.currentIndex&&s&&d>0&&c[r]!==s){const h=c.indexOf(s);h>=0&&(a=h)}else o.currentIndex&&(r<0&&s!==null||r>=0&&(d===0||c[r]!==s)||n===null)&&(a=r);u&&a<0&&(a=0),a<0?(a=-1,p=-1):d===0?p=-1:(p=Math.max(Math.min(d-1,a),0),p=this[Ci](e,{direction:1,index:p,wrap:!1}),p<0&&(p=this[Ci](e,{direction:-1,index:p-1,wrap:!1})));const l=c&&c[p]||null;Object.assign(i,{currentIndex:p,desiredCurrentIndex:a,currentItem:l})}return i}}}(function(t){return class extends t{get[Q](){return Object.assign(super[Q]||{},{texts:null})}[Wr](e){return super[Wr]?super[Wr](e):(o=e).getAttribute("aria-label")||o.getAttribute("alt")||o.innerText||o.textContent||"";var o}[Ee](e,o){const i=super[Ee]?super[Ee](e,o):{};if(o.items){const{items:r}=e,n=function(s,u){return s?Array.from(s,c=>u(c)):null}(r,this[Wr]);n&&(Object.freeze(n),Object.assign(i,{texts:n}))}return i}}}(function(t){return class extends t{[zo](){if(super[zo])return super[zo]()}[vo](){if(super[vo])return super[vo]()}[Fo](){if(super[Fo])return super[Fo]()}[Vo](){if(super[Vo])return super[Vo]()}[bo](){if(super[bo])return super[bo]()}[Ho](){if(super[Ho])return super[Ho]()}[Ce](e){let o=!1;if(e.target===this){const i=this[D].orientation||"both",r=i==="horizontal"||i==="both",n=i==="vertical"||i==="both";switch(e.key){case"ArrowDown":n&&(o=e.altKey?this[vo]():this[zo]());break;case"ArrowLeft":!r||e.metaKey||e.altKey||(o=this[Fo]());break;case"ArrowRight":!r||e.metaKey||e.altKey||(o=this[Vo]());break;case"ArrowUp":n&&(o=e.altKey?this[bo]():this[Ho]());break;case"End":o=this[vo]();break;case"Home":o=this[bo]()}}return o||super[Ce]&&super[Ce](e)||!1}}}(ys(function(t){return class extends t{[Ce](e){let o=!1;if(this.orientation!=="horizontal")switch(e.key){case"PageDown":o=this.pageDown();break;case"PageUp":o=this.pageUp()}return o||super[Ce]&&super[Ce](e)}get orientation(){return super.orientation||this[D]&&this[D].orientation||"both"}pageDown(){return super.pageDown&&super.pageDown(),oc(this,!0)}pageUp(){return super.pageUp&&super.pageUp(),oc(this,!1)}get[Rt](){return super[Rt]||ec(this)}}}(function(t){return class extends t{constructor(){super(),qa(this)}[rr](e){if(super[rr]&&super[rr](e),e==null||e.length===0)return!1;const o=e.toLowerCase(),i=this[D].texts.findIndex(r=>r.substr(0,e.length).toLowerCase()===o);if(i>=0){const r=this[D].currentIndex;return this[J]({currentIndex:i}),this[D].currentIndex!==r}return!1}[Ce](e){let o;switch(e.key){case"Backspace":(function(i){const r=i,n=r[yo]?r[yo].length:0;n>0&&(r[yo]=r[yo].substr(0,n-1)),i[rr](r[yo]),ic(i)})(this),o=!0;break;case"Escape":qa(this);break;default:e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||function(i,r){const n=i,s=n[yo]||"";n[yo]=s+r,i[rr](n[yo]),ic(i)}(this,e.key)}return o||super[Ce]&&super[Ce](e)}}}(nl(function(t){return Pf(ad(t))}(function(t){return class extends t{constructor(){super(),this.addEventListener("mousedown",e=>{e.button===0&&(this[re]=!0,this[gr](e),this[re]=!1)})}[Z](e){super[Z]&&super[Z](e),this[tt]&&Object.assign(this.style,{touchAction:"manipulation",mozUserSelect:"none",msUserSelect:"none",webkitUserSelect:"none",userSelect:"none"})}[gr](e){const o=e.composedPath?e.composedPath()[0]:e.target,{items:i,currentItemRequired:r}=this[D];if(i&&o instanceof Node){const n=Qu(i,o),s=n>=0?i[n]:null;(s&&!s.disabled||!s&&!r)&&(this[J]({currentIndex:n}),e.stopPropagation())}}}}(Do)))))))))))))));class md extends Tf{get[Q](){return Object.assign(super[Q],{availableItemFlags:null,highlightCurrentItem:!0,orientation:"vertical",currentItemFocused:!1})}async flashCurrentItem(){const e=this[D].focusVisible,o=matchMedia("(pointer: fine)").matches;(e||o)&&(this[J]({highlightCurrentItem:!1}),await new Promise(r=>setTimeout(r,75)),this[J]({highlightCurrentItem:!0}),await new Promise(r=>setTimeout(r,75)))}[Z](e){super[Z](e),this[tt]&&(this.addEventListener("disabledchange",r=>{this[re]=!0;const n=r.target,{items:s}=this[D],u=s===null?-1:s.indexOf(n);if(u>=0){const c=this[D].availableItemFlags.slice();c[u]=!n.disabled,this[J]({availableItemFlags:c})}this[re]=!1}),"PointerEvent"in window?this.addEventListener("pointerdown",r=>this[gr](r)):this.addEventListener("touchstart",r=>this[gr](r)),this.removeAttribute("tabindex"));const{currentIndex:o,items:i}=this[D];if((e.items||e.currentIndex||e.highlightCurrentItem)&&i){const{highlightCurrentItem:r}=this[D];i.forEach((n,s)=>{n.toggleAttribute("current",r&&s===o)})}(e.items||e.currentIndex||e.currentItemFocused||e.focusVisible)&&i&&i.forEach((r,n)=>{const s=n===o,u=o<0&&n===0;this[D].currentItemFocused?s||u||r.removeAttribute("tabindex"):(s||u)&&(r.tabIndex=0)})}[oe](e){if(super[oe](e),!this[tt]&&e.currentIndex&&!this[D].currentItemFocused){const{currentItem:o}=this[D];(o instanceof HTMLElement?o:this).focus(),this[J]({currentItemFocused:!0})}}get[Rt](){return this[ce].content}[Ee](e,o){const i=super[Ee](e,o);if(o.currentIndex&&Object.assign(i,{currentItemFocused:!1}),o.items){const{items:r}=e,n=r===null?null:r.map(s=>!s.disabled);Object.assign(i,{availableItemFlags:n})}return i}get[de](){return ao.html`
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
    `}}const Gi=Symbol("documentMouseupListener");async function Nf(t){const e=this,o=e[gt].elementsFromPoint(t.clientX,t.clientY);if(e.opened){const i=o.indexOf(e[ce].source)>=0,r=e[ce].popup,n=o.indexOf(r)>=0,s=r.frame&&o.indexOf(r.frame)>=0;i?e[D].dragSelect&&(e[re]=!0,e[J]({dragSelect:!1}),e[re]=!1):n||s||(e[re]=!0,await e.close(),e[re]=!1)}}function Ks(t){t[D].opened&&t.isConnected?t[Gi]||(t[Gi]=Nf.bind(t),document.addEventListener("mouseup",t[Gi])):t[Gi]&&(document.removeEventListener("mouseup",t[Gi]),t[Gi]=null)}function sl(t){return class extends t{get[Q](){return Object.assign(super[Q]||{},{disabled:!1})}get disabled(){return this[D].disabled}set disabled(e){this[J]({disabled:e})}[oe](e){if(super[oe]&&super[oe](e),e.disabled&&(this.toggleAttribute("disabled",this.disabled),this[re])){const o=new CustomEvent("disabled-changed",{bubbles:!0});this.dispatchEvent(o);const i=new CustomEvent("disabledchange",{bubbles:!0});this.dispatchEvent(i)}}}}function rc(t,e,o,i){const r=gd(t,o,i);let n=0,s=0;const u=o==="above"||o==="below";switch(o){case"above":n=r.y-e.top;break;case"below":n=e.bottom-r.y;break;case"left":s=r.x-e.left;break;case"right":s=e.right-r.x}switch(i){case"bottom":n=r.y-e.top;break;case"center":u?s=e.width:n=e.height;break;case"stretch":u?s=t.width:n=t.height;break;case"left":s=e.right-r.x;break;case"right":s=r.x-e.left;break;case"top":n=e.bottom-r.y}return n=Math.max(0,n),s=Math.max(0,s),{height:n,width:s}}function gd(t,e,o){let i=0,r=0;const n=e==="above"||e==="below";switch(e){case"above":r=t.top;break;case"below":r=t.bottom;break;case"left":case"right":i=t[e]}switch(o){case"bottom":case"top":r=t[o];break;case"left":case"right":i=t[o];break;case"center":n?i=t.left+t.width/2:r=t.top+t.height/2;break;case"stretch":n?i=t.left:r=t.top}return{x:i,y:r}}function Df(t,e,o,i){const r=function(u){const{align:c,direction:d,rightToLeft:p}=u,a="below",l={above:"above",below:"below",column:"below","column-reverse":"above",left:"left",right:"right",row:p?"left":"right","row-reverse":p?"right":"left"}[d]||a,h={above:"horizontal",below:"horizontal",left:"vertical",right:"vertical"}[l],f={horizontal:"left",vertical:"top"}[h];return{align:{horizontal:{center:"center",end:p?"left":"right",left:"left",right:"right",start:p?"right":"left",stretch:"stretch"},vertical:{bottom:"bottom",center:"center",end:"bottom",start:"top",stretch:"stretch",top:"top"}}[h][c]||f,direction:l,rightToLeft:p}}(i),n=function(u,c){const d={above:"below",below:"above",left:"right",right:"left"},p={top:"bottom",bottom:"top",left:"right",right:"left"},a=[{align:c,direction:u}];return c==="center"||c==="stretch"?a.push({align:c,direction:d[u]}):(a.push({align:p[c],direction:u}),a.push({align:c,direction:d[u]}),a.push({align:p[c],direction:d[u]})),a}(r.direction,r.align);n.sort((u,c)=>function(d,p,a,l,h){const f=rc(a,h,d.direction,d.align),m=rc(a,h,p.direction,p.align),g=l.width<=f.width,v=l.height<=f.height,y=g||v,b=g&&v,x=l.width<=m.width,w=l.height<=m.height,_=x||w,I=x&&w,k=f.width*f.height,C=m.width*m.height;return b&&I?0:b?-1:I?1:y&&!_?-1:_&&!y?1:y&&k>C?-1:_&&C>k?1:k>C?-1:C>k?1:0}(u,c,t,e,o));const s=n[0];return s.rect=function(u,c,d,p,a){const l=gd(u,p,a);let{x:h,y:f,bottom:m,right:g}=d,v=0,y=0,b=c.height,x=c.width;const w=p==="above"||p==="below";switch(p){case"above":y=l.y-c.height,m=l.y;break;case"below":y=l.y,f=l.y;break;case"left":v=l.x-c.width,g=l.x;break;case"right":v=l.x,h=l.x}switch(a){case"bottom":y=l.y-c.height,m=l.y;break;case"left":v=l.x,h=l.x;break;case"center":w?v=l.x-c.width/2:y=l.y-c.height/2;break;case"right":v=l.x-c.width,g=l.x;break;case"stretch":w?(v=l.x,x=u.width):(y=l.y,b=u.height);break;case"top":y=l.y,f=l.y}return v=Math.max(v,h),y=Math.max(y,f),x=Math.min(x,g-v),b=Math.min(b,m-y),new DOMRect(v,y,x,b)}(t,e,o,s.direction,s.align),s}const po=Symbol("implicitCloseListener");async function Rf(t){const e=this,o=t.relatedTarget||document.activeElement;o instanceof Element&&!ni(e,o)&&(e[re]=!0,await e.close({canceled:"window blur"}),e[re]=!1)}async function Lf(t){const e=this,o=t.type!=="resize"||e[D].closeOnWindowResize;!Zu(e,t)&&o&&(e[re]=!0,await e.close({canceled:`window ${t.type}`}),e[re]=!1)}const Mf=ys(function(t){return class extends t{get closeOnWindowResize(){return this[D].closeOnWindowResize}set closeOnWindowResize(e){this[J]({closeOnWindowResize:e})}get[Q](){return Object.assign(super[Q]||{},{closeOnWindowResize:!0,role:"alert"})}[Ce](e){let o=!1;return e.key==="Escape"&&(this.close({canceled:"Escape"}),o=!0),o||super.keydown&&super.keydown(e)||!1}[Z](e){if(super[Z]&&super[Z](e),this[tt]&&this.addEventListener("blur",Rf.bind(this)),e.role){const{role:o}=this[D];this.setAttribute("role",o)}}[oe](e){super[oe]&&super[oe](e),e.opened&&(this.opened?("requestIdleCallback"in window?window.requestIdleCallback:setTimeout)(()=>{var i;this.opened&&((i=this)[po]=Lf.bind(i),window.addEventListener("blur",i[po]),window.addEventListener("resize",i[po]),window.addEventListener("scroll",i[po]))}):(o=this)[po]&&(window.removeEventListener("blur",o[po]),window.removeEventListener("resize",o[po]),window.removeEventListener("scroll",o[po]),o[po]=null));var o}get role(){return super.role}set role(e){super.role=e,this[Ir]||this[J]({role:e})}}}(ld));class al extends Mf{[Z](e){super[Z](e),e.backdropPartType&&(this[ce].backdrop.addEventListener("mousedown",nc.bind(this)),"PointerEvent"in window||this[ce].backdrop.addEventListener("touchend",nc))}}async function nc(t){const e=this;e[re]=!0,await e.close({canceled:"mousedown outside"}),e[re]=!1,t.preventDefault(),t.stopPropagation()}const Dr=Symbol("resizeListener"),$f=sl(dd(nl(nd(Do))));function Gs(t){const{popupAlign:e,popupDirection:o,rightToLeft:i}=t[D],r=Df(t[ce].source.getBoundingClientRect(),t[ce].popup.getBoundingClientRect(),vd(),{align:e,direction:o,rightToLeft:i});t[J]({popupLayout:r})}function sc(t,e,o){if(!o||o.popupPartType){const{popupPartType:i}=e,r=t.getElementById("popup");r&&mr(r,i)}if(!o||o.sourcePartType){const{sourcePartType:i}=e,r=t.getElementById("source");r&&mr(r,i)}}function vd(){const t=window.visualViewport;return t?new DOMRect(t.offsetLeft,t.offsetTop,t.width,t.height):new DOMRect(0,0,window.innerWidth,window.innerHeight)}const jf=ol(ys(function(t){return class extends t{connectedCallback(){super.connectedCallback(),Ks(this)}get[Q](){return Object.assign(super[Q]||{},{dragSelect:!0})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),Ks(this)}[oe](e){super[oe](e),e.opened&&Ks(this)}[Ee](e,o){const i=super[Ee](e,o);return o.opened&&e.opened&&Object.assign(i,{dragSelect:!0}),i}}}(class extends $f{get[Q](){return Object.assign(super[Q],{ariaHasPopup:"true",popupAlign:"start",popupDirection:"column",popupLayout:null,popupPartType:al,sourcePartType:"div"})}get[Pi](){return this[ce].source}get frame(){return this[ce].popup.frame}get horizontalAlign(){return this[D].popupAlign}set horizontalAlign(t){console.warn('The "horizontalAlign" property has been renamed to "popupAlign"; the "horizontal-align" attribute is now "popup-align".'),this[J]({popupAlign:t})}get popupAlign(){return this[D].popupAlign}set popupAlign(t){this[J]({popupAlign:t})}get popupDirection(){return this[D].popupDirection}set popupDirection(t){this[J]({popupDirection:t})}get popupPosition(){return this[D].popupPosition}set popupPosition(t){console.warn('The "popupPosition" property has been renamed to "popupDirection"; the "popup-position" attribute is now "popup-direction".'),this[J]({popupPosition:t})}get popupPartType(){return this[D].popupPartType}set popupPartType(t){this[J]({popupPartType:t})}[Z](t){if(super[Z](t),sc(this[gt],this[D],t),this[tt]||t.ariaHasPopup){const{ariaHasPopup:e}=this[D];e===null?this[Pi].removeAttribute("aria-haspopup"):this[Pi].setAttribute("aria-haspopup",this[D].ariaHasPopup)}if(t.popupPartType&&(this[ce].popup.addEventListener("open",()=>{this.opened||(this[re]=!0,this.open(),this[re]=!1)}),this[ce].popup.addEventListener("close",e=>{if(!this.closed){this[re]=!0;const o=e.detail.closeResult;this.close(o),this[re]=!1}})),t.opened||t.popupLayout){const{opened:e,popupLayout:o}=this[D];if(e)if(o){const i=this[ce].popup,r=function(n){const{align:s,direction:u,rect:c}=n,d=vd(),p={},a=u==="above"||u==="below";switch(u){case"above":p.bottom=d.bottom-c.bottom+"px";break;case"below":p.top=`${c.top}px`;break;case"left":p.right=d.right-c.right+"px";break;case"right":p.left=`${c.left}px`}switch(s){case"bottom":p.bottom=d.bottom-c.bottom+"px";break;case"center":case"stretch":a?(p.left=`${c.left}px`,p.right=d.right-c.right+"px"):(p.bottom=d.bottom-c.bottom+"px",p.top=`${c.top}px`);break;case"left":p.left=`${c.left}px`;break;case"right":p.right=d.right-c.right+"px";break;case"top":p.top=`${c.top}px`}return p}(o);Object.assign(i.style,r,{opacity:""})}else Object.assign(this[ce].popup.style,{bottom:"",left:"",opacity:0,right:"",top:""});else Object.assign(this[ce].popup.style,{bottom:"",left:"",opacity:"",right:"",top:""})}if(t.opened){const{opened:e}=this[D];this[ce].popup.opened=e}if(t.disabled&&"disabled"in this[ce].source){const{disabled:e}=this[D];this[ce].source.disabled=e}if(t.popupLayout){const{popupLayout:e}=this[D];if(e){const{align:o,direction:i}=e,r=this[ce].popup;"position"in r&&(r.position=i),"align"in r&&(r.align=o)}}}[oe](t){super[oe](t);const{opened:e}=this[D];var o;t.opened?e?(o=this,setTimeout(()=>{o[D].opened&&(Gs(o),function(i){const r=i;r[Dr]=()=>{Gs(i)},(window.visualViewport||window).addEventListener("resize",r[Dr])}(o))})):function(i){const r=i;r[Dr]&&((window.visualViewport||window).removeEventListener("resize",r[Dr]),r[Dr]=null)}(this):t.popupLayout&&this[D].opened&&!this[D].popupLayout&&Gs(this)}get sourcePartType(){return this[D].sourcePartType}set sourcePartType(t){this[J]({sourcePartType:t})}[Ee](t,e){const o=super[Ee](t,e);return(e.opened&&!t.opened||t.opened&&(e.popupAlign||e.popupDirection||e.rightToLeft))&&Object.assign(o,{popupLayout:null}),o}get[de](){const t=super[de];return t.content.append(ze.html`
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
    `),sc(t.content,this[D]),t}})));async function zf(t){const e=this,o=t.relatedTarget||document.activeElement;o instanceof Element&&!ni(e,o)&&(e[re]=!0,await e.close({canceled:"blur"}),e[re]=!1)}const Wi=Symbol("documentMousemoveListener");function Ff(t){const e=this,{hasHoveredOverItemSinceOpened:o,opened:i}=e[D];if(i){const r=t.composedPath?t.composedPath()[0]:t.target,n=e.items;if(r&&r instanceof Node&&n){const s=Qu(n,r),u=n[s],c=u&&!u.disabled?s:-1;(o||c>=0)&&c!==e[D].currentIndex&&(e[re]=!0,e[J]({currentIndex:c}),c>=0&&!o&&e[J]({hasHoveredOverItemSinceOpened:!0}),e[re]=!1)}}}function Ws(t){t[D].opened&&t.isConnected?t[Wi]||(t[Wi]=Ff.bind(t),document.addEventListener("mousemove",t[Wi])):t[Wi]&&(document.removeEventListener("mousemove",t[Wi]),t[Wi]=null)}async function ac(t){const e=t[re],o=t[D].currentIndex>=0,i=t.items;if(i){const r=o?i[t[D].currentIndex]:void 0,n=t[D].popupList;o&&"flashCurrentItem"in n&&await n.flashCurrentItem();const s=t[re];t[re]=e,await t.close(r),t[re]=s}}const Uf=function(t){return class extends t{connectedCallback(){super.connectedCallback(),Ws(this)}get[Q](){return Object.assign(super[Q]||{},{currentIndex:-1,hasHoveredOverItemSinceOpened:!1,popupList:null})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),Ws(this)}[Ce](e){let o=!1;return e.key==="Enter"&&this.opened&&(ac(this),o=!0),o||super[Ce]&&super[Ce](e)||!1}[Z](e){if(super[Z]&&super[Z](e),e.popupList){const{popupList:o}=this[D];o&&(o.addEventListener("mouseup",async i=>{const r=this[D].currentIndex;this[D].dragSelect||r>=0?(i.stopPropagation(),this[re]=!0,await ac(this),this[re]=!1):i.stopPropagation()}),o.addEventListener("currentindexchange",i=>{this[re]=!0;const r=i;this[J]({currentIndex:r.detail.currentIndex}),this[re]=!1}))}if(e.currentIndex||e.popupList){const{currentIndex:o,popupList:i}=this[D];i&&"currentIndex"in i&&(i.currentIndex=o)}}[oe](e){if(super[oe]&&super[oe](e),e.opened){if(this[D].opened){const{popupList:o}=this[D];o.scrollCurrentItemIntoView&&setTimeout(()=>{o.scrollCurrentItemIntoView()})}Ws(this)}}[Ee](e,o){const i=super[Ee]?super[Ee](e,o):{};return o.opened&&e.opened&&Object.assign(i,{hasHoveredOverItemSinceOpened:!1}),i}}}(class extends jf{get[Q](){return Object.assign(super[Q],{sourcePartType:"button"})}[Ce](t){let e;switch(t.key){case" ":case"ArrowDown":case"ArrowUp":this.closed&&(this.open(),e=!0);break;case"Enter":this.opened||(this.open(),e=!0);break;case"Escape":this.opened&&(this.close({canceled:"Escape"}),e=!0)}if(e=super[Ce]&&super[Ce](t),!e&&this.opened&&!t.metaKey&&!t.altKey)switch(t.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":case"PageDown":case"PageUp":case" ":e=!0}return e}[Z](t){if(super[Z](t),this[tt]&&(this.addEventListener("blur",zf.bind(this)),this[ce].source.addEventListener("focus",async e=>{const o=Zu(this[ce].popup,e),i=this[D].popupHeight!==null;!o&&this.opened&&i&&(this[re]=!0,await this.close(),this[re]=!1)})),t.opened){const{opened:e}=this[D];this.toggleAttribute("opened",e)}t.sourcePartType&&this[ce].source.addEventListener("mousedown",e=>{if(this.disabled)return void e.preventDefault();const o=e;o.button&&o.button!==0||(setTimeout(()=>{this.opened||(this[re]=!0,this.open(),this[re]=!1)}),e.stopPropagation())}),t.popupPartType&&this[ce].popup.removeAttribute("tabindex")}get[de](){const t=super[de];return t.content.append(ze.html`
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
      `),t}});class Bf extends Uf{get[Q](){return Object.assign(super[Q],{menuPartType:md})}get items(){const e=this[ce]&&this[ce].menu;return e?e.items:null}get menuPartType(){return this[D].menuPartType}set menuPartType(e){this[J]({menuPartType:e})}[Z](e){if(super[Z](e),lc(this[gt],this[D],e),e.menuPartType&&(this[ce].menu.addEventListener("blur",async o=>{const i=o.relatedTarget||document.activeElement;this.opened&&!ni(this[ce].menu,i)&&(this[re]=!0,await this.close(),this[re]=!1)}),this[ce].menu.addEventListener("mousedown",o=>{o.button===0&&this.opened&&(o.stopPropagation(),o.preventDefault())})),e.opened){const{opened:o}=this[D];this[ce].source.setAttribute("aria-expanded",o.toString())}}[oe](e){super[oe](e),e.menuPartType&&this[J]({popupList:this[ce].menu})}[Ee](e,o){const i=super[Ee](e,o);return o.opened&&!e.opened&&Object.assign(i,{currentIndex:-1}),i}get[de](){const e=super[de],o=e.content.querySelector("slot:not([name])");return o&&o.replaceWith(ze.html`
        <div id="menu" part="menu">
          <slot></slot>
        </div>
      `),lc(e.content,this[D]),e.content.append(ze.html`
      <style>
        [part~="menu"] {
          max-height: 100%;
        }
      </style>
    `),e}}function lc(t,e,o){if(!o||o.menuPartType){const{menuPartType:i}=e,r=t.getElementById("menu");r&&mr(r,i)}}const Vf=sl(Do);class bd extends Vf{get[Q](){return Object.assign(super[Q],{direction:"down"})}get direction(){return this[D].direction}set direction(e){this[J]({direction:e})}[Z](e){if(super[Z](e),e.direction){const{direction:o}=this[D];this[ce].downIcon.style.display=o==="down"?"block":"none",this[ce].upIcon.style.display=o==="up"?"block":"none"}}get[de](){return ao.html`
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
    `}}function cc(t,e,o){if(!o||o.popupTogglePartType){const{popupTogglePartType:i}=e,r=t.getElementById("popupToggle");r&&mr(r,i)}}class Hf extends md{get[de](){const e=super[de];return e.content.append(ze.html`
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
      `),e}}class Kf extends bd{get[de](){const e=super[de],o=e.content.getElementById("downIcon"),i=ze.html`
      <svg
        id="downIcon"
        part="toggle-icon down-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 5"
      >
        <path d="M 0 0 l5 5 5 -5 z" />
      </svg>
    `.firstElementChild;o&&i&&Ea(o,i);const r=e.content.getElementById("upIcon"),n=ze.html`
      <svg
        id="upIcon"
        part="toggle-icon up-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 5"
      >
        <path d="M 0 5 l5 -5 5 5 z" />
      </svg>
    `.firstElementChild;return r&&n&&Ea(r,n),e.content.append(ze.html`
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
      `),e}}class Gf extends tl{}class Wf extends al{get[Q](){return Object.assign(super[Q],{backdropPartType:Gf,framePartType:rl})}}class Qf extends function(e){return class extends e{get[Q](){return Object.assign(super[Q]||{},{popupTogglePartType:bd})}get popupTogglePartType(){return this[D].popupTogglePartType}set popupTogglePartType(o){this[J]({popupTogglePartType:o})}[Z](o){if(super[Z](o),cc(this[gt],this[D],o),o.popupDirection||o.popupTogglePartType){const{popupDirection:i}=this[D],r=i==="above"||i==="column-reverse"?"up":"down",n=this[ce].popupToggle;"direction"in n&&(n.direction=r)}if(o.disabled){const{disabled:i}=this[D];this[ce].popupToggle.disabled=i}}get[de](){const o=super[de],i=o.content.querySelector('[part~="source"]');return i&&i.append(ze.html`
          <div
            id="popupToggle"
            part="popup-toggle"
            exportparts="toggle-icon, down-icon, up-icon"
            tabindex="-1"
          ></div>
      `),cc(o.content,this[D]),o.content.append(ze.html`
      <style>
        [part~="popup-toggle"] {
          outline: none;
        }

        [part~="source"] {
          align-items: center;
          display: flex;
        }
      </style>
    `),o}}}(Bf){get[Q](){return Object.assign(super[Q],{menuPartType:Hf,popupPartType:Wf,popupTogglePartType:Kf,sourcePartType:pd})}get[de](){const e=super[de];return e.content.append(ze.html`
        <style>
          [part~="menu"] {
            background: window;
            border: none;
            padding: 0.5em 0;
          }
        </style>
      `),e}}customElements.define("elix-menu-button",class extends Qf{});class Zf extends function(e){return class extends e{constructor(){super();const o=this;!this[Oi]&&o.attachInternals&&(this[Oi]=o.attachInternals())}attributeChangedCallback(o,i,r){if(o==="current"){const n=cn(o,r);this.current!==n&&(this.current=n)}else super.attributeChangedCallback(o,i,r)}get[Q](){return Object.assign(super[Q]||{},{current:!1})}[Z](o){if(super[Z](o),o.current){const{current:i}=this[D];un(this,"current",i)}}[oe](o){if(super[oe]&&super[oe](o),o.current){const{current:i}=this[D],r=new CustomEvent("current-changed",{bubbles:!0,detail:{current:i}});this.dispatchEvent(r);const n=new CustomEvent("currentchange",{bubbles:!0,detail:{current:i}});this.dispatchEvent(n)}}get current(){return this[D].current}set current(o){this[J]({current:o})}}}(sl(function(e){return class extends e{constructor(){super();const o=this;!this[Oi]&&o.attachInternals&&(this[Oi]=o.attachInternals())}get[Q](){return Object.assign(super[Q]||{},{selected:!1})}[Z](o){if(super[Z](o),o.selected){const{selected:i}=this[D];un(this,"selected",i)}}[oe](o){if(super[oe]&&super[oe](o),o.selected){const{selected:i}=this[D],r=new CustomEvent("selected-changed",{bubbles:!0,detail:{selected:i}});this.dispatchEvent(r);const n=new CustomEvent("selectedchange",{bubbles:!0,detail:{selected:i}});this.dispatchEvent(n)}}get selected(){return this[D].selected}set selected(o){this[J]({selected:o})}}}(Do))){}class Xf extends Zf{get[de](){return ao.html`
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
    `}}customElements.define("elix-menu-item",class extends Xf{});class Yf extends Do{get disabled(){return!0}[Z](e){super[Z](e),this[tt]&&this.setAttribute("aria-hidden","true")}}class Jf extends Yf{get[de](){return ao.html`
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
    `}}customElements.define("elix-menu-separator",class extends Jf{});const Gn=Symbol("timeout"),em=nl(function(t){return class extends t{get[cr](){return super[cr]||this}[Z](e){super[Z]&&super[Z](e),this[tt]&&(this[cr]===this?this:this[gt]).addEventListener("transitionend",o=>{const i=this[D].effectEndTarget||this[cr];o.target===i&&this[J]({effectPhase:"after"})})}[oe](e){if(super[oe]&&super[oe](e),e.effect||e.effectPhase){const{effect:o,effectPhase:i}=this[D],r=new CustomEvent("effect-phase-changed",{bubbles:!0,detail:{effect:o,effectPhase:i}});this.dispatchEvent(r);const n=new CustomEvent("effectphasechange",{bubbles:!0,detail:{effect:o,effectPhase:i}});this.dispatchEvent(n),o&&(i!=="after"&&this.offsetHeight,i==="before"&&this[J]({effectPhase:"during"}))}}async[Ja](e){await this[J]({effect:e,effectPhase:"before"})}}}(al));class tm extends em{constructor(){super(),this.addEventListener("mouseout",()=>{uc(this)}),this.addEventListener("mouseover",()=>{yd(this)})}attributeChangedCallback(e,o,i){e==="duration"?this.duration=Number(i):super.attributeChangedCallback(e,o,i)}get[Q](){return Object.assign(super[Q],{duration:null,fromEdge:"bottom"})}get duration(){return this[D].duration}set duration(e){isNaN(e)||this[J]({duration:e})}get[cr](){return this[ce].frame}get fromEdge(){return this[D].fromEdge}set fromEdge(e){this[J]({fromEdge:e})}[Z](e){if(super[Z](e),e.fromEdge){const o={bottom:{alignItems:"center",justifyContent:"flex-end"},"bottom-left":{alignItems:"flex-start",justifyContent:"flex-end"},"bottom-right":{alignItems:"flex-end",justifyContent:"flex-end"},top:{alignItems:"center",justifyContent:null},"top-left":{alignItems:"flex-start",justifyContent:null},"top-right":{alignItems:"flex-end",justifyContent:null}};Object.assign(this.style,o[this[D].fromEdge])}if(e.effect||e.effectPhase||e.fromEdge||e.rightToLeft){const{effect:o,effectPhase:i,fromEdge:r,rightToLeft:n}=this[D],s={"bottom-left":"bottom-right","bottom-right":"bottom-left","top-left":"top-right","top-right":"top-left"},u=n&&s[r]||r,c={bottom:"translateY(100%)","bottom-left":"translateX(-100%)","bottom-right":"translateX(100%)",top:"translateY(-100%)","top-left":"translateX(-100%)","top-right":"translateX(100%)"},d={bottom:"translateY(0)","bottom-left":"translateX(0)","bottom-right":"translateX(0)",top:"translateY(0)","top-left":"translateX(0)","top-right":"translateX(0)"},p=o==="open"&&i!=="before"||o==="close"&&i==="before",a=p?1:0,l=p?d[u]:c[u];Object.assign(this[ce].frame.style,{opacity:a,transform:l})}}[oe](e){super[oe](e),uc(this)}}function yd(t){const e=t;e[Gn]&&(clearTimeout(e[Gn]),e[Gn]=null)}function uc(t){t.opened&&function(e){yd(e);const o=e[D].duration;o!==null&&o>0&&(e[Gn]=setTimeout(()=>{e.close()},o))}(t)}class om extends tm{get[Q](){return Object.assign(super[Q],{framePartType:rl})}get[de](){const e=super[de];return e.content.append(ze.html`
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
 */var dc,Rr;customElements.define("elix-toast",class extends om{}),dc=typeof self!="undefined"?self:void 0,Rr=function(){return function(t){var e={};function o(i){if(e[i])return e[i].exports;var r=e[i]={i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(i,r,n){o.o(i,r)||Object.defineProperty(i,r,{configurable:!1,enumerable:!0,get:n})},o.n=function(i){var r=i&&i.__esModule?function(){return i.default}:function(){return i};return o.d(r,"a",r),r},o.o=function(i,r){return Object.prototype.hasOwnProperty.call(i,r)},o.p="",o(o.s=109)}([function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=o(17),r=o(18),n=o(19),s=o(45),u=o(46),c=o(47),d=o(48),p=o(49),a=o(12),l=o(32),h=o(33),f=o(31),m=o(1),g={Scope:m.Scope,create:m.create,find:m.find,query:m.query,register:m.register,Container:i.default,Format:r.default,Leaf:n.default,Embed:d.default,Scroll:s.default,Block:c.default,Inline:u.default,Text:p.default,Attributor:{Attribute:a.default,Class:l.default,Style:h.default,Store:f.default}};e.default=g},function(t,e,o){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,h){l.__proto__=h}||function(l,h){for(var f in h)h.hasOwnProperty(f)&&(l[f]=h[f])},function(l,h){function f(){this.constructor=l}i(l,h),l.prototype=h===null?Object.create(h):(f.prototype=h.prototype,new f)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(l){function h(f){var m=this;return f="[Parchment] "+f,(m=l.call(this,f)||this).message=f,m.name=m.constructor.name,m}return r(h,l),h}(Error);e.ParchmentError=n;var s,u={},c={},d={},p={};function a(l,h){var f;if(h===void 0&&(h=s.ANY),typeof l=="string")f=p[l]||u[l];else if(l instanceof Text||l.nodeType===Node.TEXT_NODE)f=p.text;else if(typeof l=="number")l&s.LEVEL&s.BLOCK?f=p.block:l&s.LEVEL&s.INLINE&&(f=p.inline);else if(l instanceof HTMLElement){var m=(l.getAttribute("class")||"").split(/\s+/);for(var g in m)if(f=c[m[g]])break;f=f||d[l.tagName]}return f==null?null:h&s.LEVEL&f.scope&&h&s.TYPE&f.scope?f:null}e.DATA_KEY="__blot",function(l){l[l.TYPE=3]="TYPE",l[l.LEVEL=12]="LEVEL",l[l.ATTRIBUTE=13]="ATTRIBUTE",l[l.BLOT=14]="BLOT",l[l.INLINE=7]="INLINE",l[l.BLOCK=11]="BLOCK",l[l.BLOCK_BLOT=10]="BLOCK_BLOT",l[l.INLINE_BLOT=6]="INLINE_BLOT",l[l.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",l[l.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",l[l.ANY=15]="ANY"}(s=e.Scope||(e.Scope={})),e.create=function(l,h){var f=a(l);if(f==null)throw new n("Unable to create "+l+" blot");var m=f,g=l instanceof Node||l.nodeType===Node.TEXT_NODE?l:m.create(h);return new m(g,h)},e.find=function l(h,f){return f===void 0&&(f=!1),h==null?null:h[e.DATA_KEY]!=null?h[e.DATA_KEY].blot:f?l(h.parentNode,f):null},e.query=a,e.register=function l(){for(var h=[],f=0;f<arguments.length;f++)h[f]=arguments[f];if(h.length>1)return h.map(function(v){return l(v)});var m=h[0];if(typeof m.blotName!="string"&&typeof m.attrName!="string")throw new n("Invalid definition");if(m.blotName==="abstract")throw new n("Cannot register abstract class");if(p[m.blotName||m.attrName]=m,typeof m.keyName=="string")u[m.keyName]=m;else if(m.className!=null&&(c[m.className]=m),m.tagName!=null){Array.isArray(m.tagName)?m.tagName=m.tagName.map(function(v){return v.toUpperCase()}):m.tagName=m.tagName.toUpperCase();var g=Array.isArray(m.tagName)?m.tagName:[m.tagName];g.forEach(function(v){d[v]!=null&&m.className!=null||(d[v]=m)})}return m}},function(t,e,o){var i=o(51),r=o(11),n=o(3),s=o(20),u=String.fromCharCode(0),c=function(d){Array.isArray(d)?this.ops=d:d!=null&&Array.isArray(d.ops)?this.ops=d.ops:this.ops=[]};c.prototype.insert=function(d,p){var a={};return d.length===0?this:(a.insert=d,p!=null&&typeof p=="object"&&Object.keys(p).length>0&&(a.attributes=p),this.push(a))},c.prototype.delete=function(d){return d<=0?this:this.push({delete:d})},c.prototype.retain=function(d,p){if(d<=0)return this;var a={retain:d};return p!=null&&typeof p=="object"&&Object.keys(p).length>0&&(a.attributes=p),this.push(a)},c.prototype.push=function(d){var p=this.ops.length,a=this.ops[p-1];if(d=n(!0,{},d),typeof a=="object"){if(typeof d.delete=="number"&&typeof a.delete=="number")return this.ops[p-1]={delete:a.delete+d.delete},this;if(typeof a.delete=="number"&&d.insert!=null&&(p-=1,typeof(a=this.ops[p-1])!="object"))return this.ops.unshift(d),this;if(r(d.attributes,a.attributes)){if(typeof d.insert=="string"&&typeof a.insert=="string")return this.ops[p-1]={insert:a.insert+d.insert},typeof d.attributes=="object"&&(this.ops[p-1].attributes=d.attributes),this;if(typeof d.retain=="number"&&typeof a.retain=="number")return this.ops[p-1]={retain:a.retain+d.retain},typeof d.attributes=="object"&&(this.ops[p-1].attributes=d.attributes),this}}return p===this.ops.length?this.ops.push(d):this.ops.splice(p,0,d),this},c.prototype.chop=function(){var d=this.ops[this.ops.length-1];return d&&d.retain&&!d.attributes&&this.ops.pop(),this},c.prototype.filter=function(d){return this.ops.filter(d)},c.prototype.forEach=function(d){this.ops.forEach(d)},c.prototype.map=function(d){return this.ops.map(d)},c.prototype.partition=function(d){var p=[],a=[];return this.forEach(function(l){(d(l)?p:a).push(l)}),[p,a]},c.prototype.reduce=function(d,p){return this.ops.reduce(d,p)},c.prototype.changeLength=function(){return this.reduce(function(d,p){return p.insert?d+s.length(p):p.delete?d-p.delete:d},0)},c.prototype.length=function(){return this.reduce(function(d,p){return d+s.length(p)},0)},c.prototype.slice=function(d,p){d=d||0,typeof p!="number"&&(p=1/0);for(var a=[],l=s.iterator(this.ops),h=0;h<p&&l.hasNext();){var f;h<d?f=l.next(d-h):(f=l.next(p-h),a.push(f)),h+=s.length(f)}return new c(a)},c.prototype.compose=function(d){var p=s.iterator(this.ops),a=s.iterator(d.ops),l=[],h=a.peek();if(h!=null&&typeof h.retain=="number"&&h.attributes==null){for(var f=h.retain;p.peekType()==="insert"&&p.peekLength()<=f;)f-=p.peekLength(),l.push(p.next());h.retain-f>0&&a.next(h.retain-f)}for(var m=new c(l);p.hasNext()||a.hasNext();)if(a.peekType()==="insert")m.push(a.next());else if(p.peekType()==="delete")m.push(p.next());else{var g=Math.min(p.peekLength(),a.peekLength()),v=p.next(g),y=a.next(g);if(typeof y.retain=="number"){var b={};typeof v.retain=="number"?b.retain=g:b.insert=v.insert;var x=s.attributes.compose(v.attributes,y.attributes,typeof v.retain=="number");if(x&&(b.attributes=x),m.push(b),!a.hasNext()&&r(m.ops[m.ops.length-1],b)){var w=new c(p.rest());return m.concat(w).chop()}}else typeof y.delete=="number"&&typeof v.retain=="number"&&m.push(y)}return m.chop()},c.prototype.concat=function(d){var p=new c(this.ops.slice());return d.ops.length>0&&(p.push(d.ops[0]),p.ops=p.ops.concat(d.ops.slice(1))),p},c.prototype.diff=function(d,p){if(this.ops===d.ops)return new c;var a=[this,d].map(function(g){return g.map(function(v){if(v.insert!=null)return typeof v.insert=="string"?v.insert:u;throw new Error("diff() called "+(g===d?"on":"with")+" non-document")}).join("")}),l=new c,h=i(a[0],a[1],p),f=s.iterator(this.ops),m=s.iterator(d.ops);return h.forEach(function(g){for(var v=g[1].length;v>0;){var y=0;switch(g[0]){case i.INSERT:y=Math.min(m.peekLength(),v),l.push(m.next(y));break;case i.DELETE:y=Math.min(v,f.peekLength()),f.next(y),l.delete(y);break;case i.EQUAL:y=Math.min(f.peekLength(),m.peekLength(),v);var b=f.next(y),x=m.next(y);r(b.insert,x.insert)?l.retain(y,s.attributes.diff(b.attributes,x.attributes)):l.push(x).delete(y)}v-=y}}),l.chop()},c.prototype.eachLine=function(d,p){p=p||`
`;for(var a=s.iterator(this.ops),l=new c,h=0;a.hasNext();){if(a.peekType()!=="insert")return;var f=a.peek(),m=s.length(f)-a.peekLength(),g=typeof f.insert=="string"?f.insert.indexOf(p,m)-m:-1;if(g<0)l.push(a.next());else if(g>0)l.push(a.next(g));else{if(d(l,a.next(1).attributes||{},h)===!1)return;h+=1,l=new c}}l.length()>0&&d(l,{},h)},c.prototype.transform=function(d,p){if(p=!!p,typeof d=="number")return this.transformPosition(d,p);for(var a=s.iterator(this.ops),l=s.iterator(d.ops),h=new c;a.hasNext()||l.hasNext();)if(a.peekType()!=="insert"||!p&&l.peekType()==="insert")if(l.peekType()==="insert")h.push(l.next());else{var f=Math.min(a.peekLength(),l.peekLength()),m=a.next(f),g=l.next(f);if(m.delete)continue;g.delete?h.push(g):h.retain(f,s.attributes.transform(m.attributes,g.attributes,p))}else h.retain(s.length(a.next()));return h.chop()},c.prototype.transformPosition=function(d,p){p=!!p;for(var a=s.iterator(this.ops),l=0;a.hasNext()&&l<=d;){var h=a.peekLength(),f=a.peekType();a.next(),f!=="delete"?(f==="insert"&&(l<d||!p)&&(d+=h),l+=h):d-=Math.min(h,d-l)}return d},t.exports=c},function(t,e){var o=Object.prototype.hasOwnProperty,i=Object.prototype.toString,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,s=function(p){return typeof Array.isArray=="function"?Array.isArray(p):i.call(p)==="[object Array]"},u=function(p){if(!p||i.call(p)!=="[object Object]")return!1;var a,l=o.call(p,"constructor"),h=p.constructor&&p.constructor.prototype&&o.call(p.constructor.prototype,"isPrototypeOf");if(p.constructor&&!l&&!h)return!1;for(a in p);return a===void 0||o.call(p,a)},c=function(p,a){r&&a.name==="__proto__"?r(p,a.name,{enumerable:!0,configurable:!0,value:a.newValue,writable:!0}):p[a.name]=a.newValue},d=function(p,a){if(a==="__proto__"){if(!o.call(p,a))return;if(n)return n(p,a).value}return p[a]};t.exports=function p(){var a,l,h,f,m,g,v=arguments[0],y=1,b=arguments.length,x=!1;for(typeof v=="boolean"&&(x=v,v=arguments[1]||{},y=2),(v==null||typeof v!="object"&&typeof v!="function")&&(v={});y<b;++y)if((a=arguments[y])!=null)for(l in a)h=d(v,l),v!==(f=d(a,l))&&(x&&f&&(u(f)||(m=s(f)))?(m?(m=!1,g=h&&s(h)?h:[]):g=h&&u(h)?h:{},c(v,{name:l,newValue:p(x,g,f)})):f!==void 0&&c(v,{name:l,newValue:f}));return v}},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BlockEmbed=e.bubbleFormats=void 0;var i=function(){function y(b,x){for(var w=0;w<x.length;w++){var _=x[w];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(b,_.key,_)}}return function(b,x,w){return x&&y(b.prototype,x),w&&y(b,w),b}}(),r=function y(b,x,w){b===null&&(b=Function.prototype);var _=Object.getOwnPropertyDescriptor(b,x);if(_===void 0){var I=Object.getPrototypeOf(b);return I===null?void 0:y(I,x,w)}if("value"in _)return _.value;var k=_.get;return k!==void 0?k.call(w):void 0},n=a(o(3)),s=a(o(2)),u=a(o(0)),c=a(o(16)),d=a(o(6)),p=a(o(7));function a(y){return y&&y.__esModule?y:{default:y}}function l(y,b){if(!(y instanceof b))throw new TypeError("Cannot call a class as a function")}function h(y,b){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||typeof b!="object"&&typeof b!="function"?y:b}function f(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(y,b):y.__proto__=b)}var m=function(y){function b(){return l(this,b),h(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return f(b,y),i(b,[{key:"attach",value:function(){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"attach",this).call(this),this.attributes=new u.default.Attributor.Store(this.domNode)}},{key:"delta",value:function(){return new s.default().insert(this.value(),(0,n.default)(this.formats(),this.attributes.values()))}},{key:"format",value:function(x,w){var _=u.default.query(x,u.default.Scope.BLOCK_ATTRIBUTE);_!=null&&this.attributes.attribute(_,w)}},{key:"formatAt",value:function(x,w,_,I){this.format(_,I)}},{key:"insertAt",value:function(x,w,_){if(typeof w=="string"&&w.endsWith(`
`)){var I=u.default.create(g.blotName);this.parent.insertBefore(I,x===0?this:this.next),I.insertAt(0,w.slice(0,-1))}else r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertAt",this).call(this,x,w,_)}}]),b}(u.default.Embed);m.scope=u.default.Scope.BLOCK_BLOT;var g=function(y){function b(x){l(this,b);var w=h(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,x));return w.cache={},w}return f(b,y),i(b,[{key:"delta",value:function(){return this.cache.delta==null&&(this.cache.delta=this.descendants(u.default.Leaf).reduce(function(x,w){return w.length()===0?x:x.insert(w.value(),v(w))},new s.default).insert(`
`,v(this))),this.cache.delta}},{key:"deleteAt",value:function(x,w){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"deleteAt",this).call(this,x,w),this.cache={}}},{key:"formatAt",value:function(x,w,_,I){w<=0||(u.default.query(_,u.default.Scope.BLOCK)?x+w===this.length()&&this.format(_,I):r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"formatAt",this).call(this,x,Math.min(w,this.length()-x-1),_,I),this.cache={})}},{key:"insertAt",value:function(x,w,_){if(_!=null)return r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertAt",this).call(this,x,w,_);if(w.length!==0){var I=w.split(`
`),k=I.shift();k.length>0&&(x<this.length()-1||this.children.tail==null?r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertAt",this).call(this,Math.min(x,this.length()-1),k):this.children.tail.insertAt(this.children.tail.length(),k),this.cache={});var C=this;I.reduce(function(A,S){return(C=C.split(A,!0)).insertAt(0,S),S.length},x+k.length)}}},{key:"insertBefore",value:function(x,w){var _=this.children.head;r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertBefore",this).call(this,x,w),_ instanceof c.default&&_.remove(),this.cache={}}},{key:"length",value:function(){return this.cache.length==null&&(this.cache.length=r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"length",this).call(this)+1),this.cache.length}},{key:"moveChildren",value:function(x,w){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"moveChildren",this).call(this,x,w),this.cache={}}},{key:"optimize",value:function(x){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"optimize",this).call(this,x),this.cache={}}},{key:"path",value:function(x){return r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"path",this).call(this,x,!0)}},{key:"removeChild",value:function(x){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"removeChild",this).call(this,x),this.cache={}}},{key:"split",value:function(x){var w=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(w&&(x===0||x>=this.length()-1)){var _=this.clone();return x===0?(this.parent.insertBefore(_,this),this):(this.parent.insertBefore(_,this.next),_)}var I=r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"split",this).call(this,x,w);return this.cache={},I}}]),b}(u.default.Block);function v(y){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return y==null?b:(typeof y.formats=="function"&&(b=(0,n.default)(b,y.formats())),y.parent==null||y.parent.blotName=="scroll"||y.parent.statics.scope!==y.statics.scope?b:v(y.parent,b))}g.blotName="block",g.tagName="P",g.defaultChild="break",g.allowedChildren=[d.default,u.default.Embed,p.default],e.bubbleFormats=v,e.BlockEmbed=m,e.default=g},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.overload=e.expandConfig=void 0;var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},r=function(C,A){if(Array.isArray(C))return C;if(Symbol.iterator in Object(C))return function(S,E){var O=[],q=!0,P=!1,N=void 0;try{for(var L,U=S[Symbol.iterator]();!(q=(L=U.next()).done)&&(O.push(L.value),!E||O.length!==E);q=!0);}catch(W){P=!0,N=W}finally{try{!q&&U.return&&U.return()}finally{if(P)throw N}}return O}(C,A);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function C(A,S){for(var E=0;E<S.length;E++){var O=S[E];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(A,O.key,O)}}return function(A,S,E){return S&&C(A.prototype,S),E&&C(A,E),A}}();o(50);var s=g(o(2)),u=g(o(14)),c=g(o(8)),d=g(o(9)),p=g(o(0)),a=o(15),l=g(a),h=g(o(3)),f=g(o(10)),m=g(o(34));function g(C){return C&&C.__esModule?C:{default:C}}function v(C,A,S){return A in C?Object.defineProperty(C,A,{value:S,enumerable:!0,configurable:!0,writable:!0}):C[A]=S,C}function y(C,A){if(!(C instanceof A))throw new TypeError("Cannot call a class as a function")}var b=(0,f.default)("quill"),x=function(){function C(A){var S=this,E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(y(this,C),this.options=w(A,E),this.container=this.options.container,this.container==null)return b.error("Invalid Quill container",A);this.options.debug&&C.debug(this.options.debug);var O=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",this.container.__quill=this,this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,this.emitter=new c.default,this.scroll=p.default.create(this.root,{emitter:this.emitter,whitelist:this.options.formats}),this.editor=new u.default(this.scroll),this.selection=new l.default(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.theme.init(),this.emitter.on(c.default.events.EDITOR_CHANGE,function(P){P===c.default.events.TEXT_CHANGE&&S.root.classList.toggle("ql-blank",S.editor.isBlank())}),this.emitter.on(c.default.events.SCROLL_UPDATE,function(P,N){var L=S.selection.lastRange,U=L&&L.length===0?L.index:void 0;_.call(S,function(){return S.editor.update(null,N,U)},P)});var q=this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">`+O+"<p><br></p></div>");this.setContents(q),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable()}return n(C,null,[{key:"debug",value:function(A){A===!0&&(A="log"),f.default.level(A)}},{key:"find",value:function(A){return A.__quill||p.default.find(A)}},{key:"import",value:function(A){return this.imports[A]==null&&b.error("Cannot import "+A+". Are you sure it was registered?"),this.imports[A]}},{key:"register",value:function(A,S){var E=this,O=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(typeof A!="string"){var q=A.attrName||A.blotName;typeof q=="string"?this.register("formats/"+q,A,S):Object.keys(A).forEach(function(P){E.register(P,A[P],S)})}else this.imports[A]==null||O||b.warn("Overwriting "+A+" with",S),this.imports[A]=S,(A.startsWith("blots/")||A.startsWith("formats/"))&&S.blotName!=="abstract"?p.default.register(S):A.startsWith("modules")&&typeof S.register=="function"&&S.register()}}]),n(C,[{key:"addContainer",value:function(A){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(typeof A=="string"){var E=A;(A=document.createElement("div")).classList.add(E)}return this.container.insertBefore(A,S),A}},{key:"blur",value:function(){this.selection.setRange(null)}},{key:"deleteText",value:function(A,S,E){var O=this,q=I(A,S,E),P=r(q,4);return A=P[0],S=P[1],E=P[3],_.call(this,function(){return O.editor.deleteText(A,S)},E,A,-1*S)}},{key:"disable",value:function(){this.enable(!1)}},{key:"enable",value:function(){var A=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];this.scroll.enable(A),this.container.classList.toggle("ql-disabled",!A)}},{key:"focus",value:function(){var A=this.scrollingContainer.scrollTop;this.selection.focus(),this.scrollingContainer.scrollTop=A,this.scrollIntoView()}},{key:"format",value:function(A,S){var E=this,O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:c.default.sources.API;return _.call(this,function(){var q=E.getSelection(!0),P=new s.default;if(q==null)return P;if(p.default.query(A,p.default.Scope.BLOCK))P=E.editor.formatLine(q.index,q.length,v({},A,S));else{if(q.length===0)return E.selection.format(A,S),P;P=E.editor.formatText(q.index,q.length,v({},A,S))}return E.setSelection(q,c.default.sources.SILENT),P},O)}},{key:"formatLine",value:function(A,S,E,O,q){var P,N=this,L=I(A,S,E,O,q),U=r(L,4);return A=U[0],S=U[1],P=U[2],q=U[3],_.call(this,function(){return N.editor.formatLine(A,S,P)},q,A,0)}},{key:"formatText",value:function(A,S,E,O,q){var P,N=this,L=I(A,S,E,O,q),U=r(L,4);return A=U[0],S=U[1],P=U[2],q=U[3],_.call(this,function(){return N.editor.formatText(A,S,P)},q,A,0)}},{key:"getBounds",value:function(A){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,E=void 0;E=typeof A=="number"?this.selection.getBounds(A,S):this.selection.getBounds(A.index,A.length);var O=this.container.getBoundingClientRect();return{bottom:E.bottom-O.top,height:E.height,left:E.left-O.left,right:E.right-O.left,top:E.top-O.top,width:E.width}}},{key:"getContents",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-A,E=I(A,S),O=r(E,2);return A=O[0],S=O[1],this.editor.getContents(A,S)}},{key:"getFormat",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.getSelection(!0),S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return typeof A=="number"?this.editor.getFormat(A,S):this.editor.getFormat(A.index,A.length)}},{key:"getIndex",value:function(A){return A.offset(this.scroll)}},{key:"getLength",value:function(){return this.scroll.length()}},{key:"getLeaf",value:function(A){return this.scroll.leaf(A)}},{key:"getLine",value:function(A){return this.scroll.line(A)}},{key:"getLines",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE;return typeof A!="number"?this.scroll.lines(A.index,A.length):this.scroll.lines(A,S)}},{key:"getModule",value:function(A){return this.theme.modules[A]}},{key:"getSelection",value:function(){var A=arguments.length>0&&arguments[0]!==void 0&&arguments[0];return A&&this.focus(),this.update(),this.selection.getRange()[0]}},{key:"getText",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-A,E=I(A,S),O=r(E,2);return A=O[0],S=O[1],this.editor.getText(A,S)}},{key:"hasFocus",value:function(){return this.selection.hasFocus()}},{key:"insertEmbed",value:function(A,S,E){var O=this,q=arguments.length>3&&arguments[3]!==void 0?arguments[3]:C.sources.API;return _.call(this,function(){return O.editor.insertEmbed(A,S,E)},q,A)}},{key:"insertText",value:function(A,S,E,O,q){var P,N=this,L=I(A,0,E,O,q),U=r(L,4);return A=U[0],P=U[2],q=U[3],_.call(this,function(){return N.editor.insertText(A,S,P)},q,A,S.length)}},{key:"isEnabled",value:function(){return!this.container.classList.contains("ql-disabled")}},{key:"off",value:function(){return this.emitter.off.apply(this.emitter,arguments)}},{key:"on",value:function(){return this.emitter.on.apply(this.emitter,arguments)}},{key:"once",value:function(){return this.emitter.once.apply(this.emitter,arguments)}},{key:"pasteHTML",value:function(A,S,E){this.clipboard.dangerouslyPasteHTML(A,S,E)}},{key:"removeFormat",value:function(A,S,E){var O=this,q=I(A,S,E),P=r(q,4);return A=P[0],S=P[1],E=P[3],_.call(this,function(){return O.editor.removeFormat(A,S)},E,A)}},{key:"scrollIntoView",value:function(){this.selection.scrollIntoView(this.scrollingContainer)}},{key:"setContents",value:function(A){var S=this,E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c.default.sources.API;return _.call(this,function(){A=new s.default(A);var O=S.getLength(),q=S.editor.deleteText(0,O),P=S.editor.applyDelta(A),N=P.ops[P.ops.length-1];return N!=null&&typeof N.insert=="string"&&N.insert[N.insert.length-1]===`
`&&(S.editor.deleteText(S.getLength()-1,1),P.delete(1)),q.compose(P)},E)}},{key:"setSelection",value:function(A,S,E){if(A==null)this.selection.setRange(null,S||C.sources.API);else{var O=I(A,S,E),q=r(O,4);A=q[0],S=q[1],E=q[3],this.selection.setRange(new a.Range(A,S),E),E!==c.default.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer)}}},{key:"setText",value:function(A){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c.default.sources.API,E=new s.default().insert(A);return this.setContents(E,S)}},{key:"update",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c.default.sources.USER,S=this.scroll.update(A);return this.selection.update(A),S}},{key:"updateContents",value:function(A){var S=this,E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c.default.sources.API;return _.call(this,function(){return A=new s.default(A),S.editor.applyDelta(A,E)},E,!0)}}]),C}();function w(C,A){if((A=(0,h.default)(!0,{container:C,modules:{clipboard:!0,keyboard:!0,history:!0}},A)).theme&&A.theme!==x.DEFAULTS.theme){if(A.theme=x.import("themes/"+A.theme),A.theme==null)throw new Error("Invalid theme "+A.theme+". Did you register it?")}else A.theme=m.default;var S=(0,h.default)(!0,{},A.theme.DEFAULTS);[S,A].forEach(function(O){O.modules=O.modules||{},Object.keys(O.modules).forEach(function(q){O.modules[q]===!0&&(O.modules[q]={})})});var E=Object.keys(S.modules).concat(Object.keys(A.modules)).reduce(function(O,q){var P=x.import("modules/"+q);return P==null?b.error("Cannot load "+q+" module. Are you sure you registered it?"):O[q]=P.DEFAULTS||{},O},{});return A.modules!=null&&A.modules.toolbar&&A.modules.toolbar.constructor!==Object&&(A.modules.toolbar={container:A.modules.toolbar}),A=(0,h.default)(!0,{},x.DEFAULTS,{modules:E},S,A),["bounds","container","scrollingContainer"].forEach(function(O){typeof A[O]=="string"&&(A[O]=document.querySelector(A[O]))}),A.modules=Object.keys(A.modules).reduce(function(O,q){return A.modules[q]&&(O[q]=A.modules[q]),O},{}),A}function _(C,A,S,E){if(this.options.strict&&!this.isEnabled()&&A===c.default.sources.USER)return new s.default;var O=S==null?null:this.getSelection(),q=this.editor.delta,P=C();if(O!=null&&(S===!0&&(S=O.index),E==null?O=k(O,P,A):E!==0&&(O=k(O,S,E,A)),this.setSelection(O,c.default.sources.SILENT)),P.length()>0){var N,L,U=[c.default.events.TEXT_CHANGE,P,q,A];(N=this.emitter).emit.apply(N,[c.default.events.EDITOR_CHANGE].concat(U)),A!==c.default.sources.SILENT&&(L=this.emitter).emit.apply(L,U)}return P}function I(C,A,S,E,O){var q={};return typeof C.index=="number"&&typeof C.length=="number"?typeof A!="number"?(O=E,E=S,S=A,A=C.length,C=C.index):(A=C.length,C=C.index):typeof A!="number"&&(O=E,E=S,S=A,A=0),(S===void 0?"undefined":i(S))==="object"?(q=S,O=E):typeof S=="string"&&(E!=null?q[S]=E:O=S),[C,A,q,O=O||c.default.sources.API]}function k(C,A,S,E){if(C==null)return null;var O=void 0,q=void 0;if(A instanceof s.default){var P=[C.index,C.index+C.length].map(function(W){return A.transformPosition(W,E!==c.default.sources.USER)}),N=r(P,2);O=N[0],q=N[1]}else{var L=[C.index,C.index+C.length].map(function(W){return W<A||W===A&&E===c.default.sources.USER?W:S>=0?W+S:Math.max(A,W+S)}),U=r(L,2);O=U[0],q=U[1]}return new a.Range(O,q-O)}x.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,scrollingContainer:null,strict:!0,theme:"default"},x.events=c.default.events,x.sources=c.default.sources,x.version="1.3.7",x.imports={delta:s.default,parchment:p.default,"core/module":d.default,"core/theme":m.default},e.expandConfig=w,e.overload=I,e.default=x},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function a(l,h){for(var f=0;f<h.length;f++){var m=h[f];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(l,m.key,m)}}return function(l,h,f){return h&&a(l.prototype,h),f&&a(l,f),l}}(),r=function a(l,h,f){l===null&&(l=Function.prototype);var m=Object.getOwnPropertyDescriptor(l,h);if(m===void 0){var g=Object.getPrototypeOf(l);return g===null?void 0:a(g,h,f)}if("value"in m)return m.value;var v=m.get;return v!==void 0?v.call(f):void 0},n=u(o(7)),s=u(o(0));function u(a){return a&&a.__esModule?a:{default:a}}function c(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}function d(a,l){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||typeof l!="object"&&typeof l!="function"?a:l}var p=function(a){function l(){return c(this,l),d(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return function(h,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);h.prototype=Object.create(f&&f.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(h,f):h.__proto__=f)}(l,a),i(l,[{key:"formatAt",value:function(h,f,m,g){if(l.compare(this.statics.blotName,m)<0&&s.default.query(m,s.default.Scope.BLOT)){var v=this.isolate(h,f);g&&v.wrap(m,g)}else r(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"formatAt",this).call(this,h,f,m,g)}},{key:"optimize",value:function(h){if(r(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"optimize",this).call(this,h),this.parent instanceof l&&l.compare(this.statics.blotName,this.parent.statics.blotName)>0){var f=this.parent.isolate(this.offset(),this.length());this.moveChildren(f),f.wrap(this)}}}],[{key:"compare",value:function(h,f){var m=l.order.indexOf(h),g=l.order.indexOf(f);return m>=0||g>=0?m-g:h===f?0:h<f?-1:1}}]),l}(s.default.Inline);p.allowedChildren=[p,s.default.Embed,n.default],p.order=["cursor","inline","underline","strike","italic","bold","script","link","code"],e.default=p},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i,r=o(0);function n(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}function s(c,d){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?c:d}var u=function(c){function d(){return n(this,d),s(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return function(p,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);p.prototype=Object.create(a&&a.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(p,a):p.__proto__=a)}(d,c),d}(((i=r)&&i.__esModule?i:{default:i}).default.Text);e.default=u},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function d(p,a){for(var l=0;l<a.length;l++){var h=a[l];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(p,h.key,h)}}return function(p,a,l){return a&&d(p.prototype,a),l&&d(p,l),p}}(),r=function d(p,a,l){p===null&&(p=Function.prototype);var h=Object.getOwnPropertyDescriptor(p,a);if(h===void 0){var f=Object.getPrototypeOf(p);return f===null?void 0:d(f,a,l)}if("value"in h)return h.value;var m=h.get;return m!==void 0?m.call(l):void 0},n=s(o(54));function s(d){return d&&d.__esModule?d:{default:d}}var u=(0,s(o(10)).default)("quill:events");["selectionchange","mousedown","mouseup","click"].forEach(function(d){document.addEventListener(d,function(){for(var p=arguments.length,a=Array(p),l=0;l<p;l++)a[l]=arguments[l];[].slice.call(document.querySelectorAll(".ql-container")).forEach(function(h){var f;h.__quill&&h.__quill.emitter&&(f=h.__quill.emitter).handleDOM.apply(f,a)})})});var c=function(d){function p(){(function(l,h){if(!(l instanceof h))throw new TypeError("Cannot call a class as a function")})(this,p);var a=function(l,h){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!h||typeof h!="object"&&typeof h!="function"?l:h}(this,(p.__proto__||Object.getPrototypeOf(p)).call(this));return a.listeners={},a.on("error",u.error),a}return function(a,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);a.prototype=Object.create(l&&l.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(a,l):a.__proto__=l)}(p,d),i(p,[{key:"emit",value:function(){u.log.apply(u,arguments),r(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"emit",this).apply(this,arguments)}},{key:"handleDOM",value:function(a){for(var l=arguments.length,h=Array(l>1?l-1:0),f=1;f<l;f++)h[f-1]=arguments[f];(this.listeners[a.type]||[]).forEach(function(m){var g=m.node,v=m.handler;(a.target===g||g.contains(a.target))&&v.apply(void 0,[a].concat(h))})}},{key:"listenDOM",value:function(a,l,h){this.listeners[a]||(this.listeners[a]=[]),this.listeners[a].push({node:l,handler:h})}}]),p}(n.default);c.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},c.sources={API:"api",SILENT:"silent",USER:"user"},e.default=c},function(t,e,o){function i(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function n(s){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};i(this,n),this.quill=s,this.options=u};r.DEFAULTS={},e.default=r},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=["error","warn","log","info"],r="warn";function n(u){if(i.indexOf(u)<=i.indexOf(r)){for(var c,d=arguments.length,p=Array(d>1?d-1:0),a=1;a<d;a++)p[a-1]=arguments[a];(c=console)[u].apply(c,p)}}function s(u){return i.reduce(function(c,d){return c[d]=n.bind(console,d,u),c},{})}n.level=s.level=function(u){r=u},e.default=s},function(t,e,o){var i=Array.prototype.slice,r=o(52),n=o(53),s=t.exports=function(d,p,a){return a||(a={}),d===p||(d instanceof Date&&p instanceof Date?d.getTime()===p.getTime():!d||!p||typeof d!="object"&&typeof p!="object"?a.strict?d===p:d==p:function(l,h,f){var m,g;if(u(l)||u(h)||l.prototype!==h.prototype)return!1;if(n(l))return!!n(h)&&(l=i.call(l),h=i.call(h),s(l,h,f));if(c(l)){if(!c(h)||l.length!==h.length)return!1;for(m=0;m<l.length;m++)if(l[m]!==h[m])return!1;return!0}try{var v=r(l),y=r(h)}catch{return!1}if(v.length!=y.length)return!1;for(v.sort(),y.sort(),m=v.length-1;m>=0;m--)if(v[m]!=y[m])return!1;for(m=v.length-1;m>=0;m--)if(g=v[m],!s(l[g],h[g],f))return!1;return typeof l==typeof h}(d,p,a))};function u(d){return d==null}function c(d){return!(!d||typeof d!="object"||typeof d.length!="number"||typeof d.copy!="function"||typeof d.slice!="function"||d.length>0&&typeof d[0]!="number")}},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=o(1),r=function(){function n(s,u,c){c===void 0&&(c={}),this.attrName=s,this.keyName=u;var d=i.Scope.TYPE&i.Scope.ATTRIBUTE;c.scope!=null?this.scope=c.scope&i.Scope.LEVEL|d:this.scope=i.Scope.ATTRIBUTE,c.whitelist!=null&&(this.whitelist=c.whitelist)}return n.keys=function(s){return[].map.call(s.attributes,function(u){return u.name})},n.prototype.add=function(s,u){return!!this.canAdd(s,u)&&(s.setAttribute(this.keyName,u),!0)},n.prototype.canAdd=function(s,u){return i.query(s,i.Scope.BLOT&(this.scope|i.Scope.TYPE))!=null&&(this.whitelist==null||(typeof u=="string"?this.whitelist.indexOf(u.replace(/["']/g,""))>-1:this.whitelist.indexOf(u)>-1))},n.prototype.remove=function(s){s.removeAttribute(this.keyName)},n.prototype.value=function(s){var u=s.getAttribute(this.keyName);return this.canAdd(s,u)&&u?u:""},n}();e.default=r},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Code=void 0;var i=function(v,y){if(Array.isArray(v))return v;if(Symbol.iterator in Object(v))return function(b,x){var w=[],_=!0,I=!1,k=void 0;try{for(var C,A=b[Symbol.iterator]();!(_=(C=A.next()).done)&&(w.push(C.value),!x||w.length!==x);_=!0);}catch(S){I=!0,k=S}finally{try{!_&&A.return&&A.return()}finally{if(I)throw k}}return w}(v,y);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function v(y,b){for(var x=0;x<b.length;x++){var w=b[x];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(y,w.key,w)}}return function(y,b,x){return b&&v(y.prototype,b),x&&v(y,x),y}}(),n=function v(y,b,x){y===null&&(y=Function.prototype);var w=Object.getOwnPropertyDescriptor(y,b);if(w===void 0){var _=Object.getPrototypeOf(y);return _===null?void 0:v(_,b,x)}if("value"in w)return w.value;var I=w.get;return I!==void 0?I.call(x):void 0},s=a(o(2)),u=a(o(0)),c=a(o(4)),d=a(o(6)),p=a(o(7));function a(v){return v&&v.__esModule?v:{default:v}}function l(v,y){if(!(v instanceof y))throw new TypeError("Cannot call a class as a function")}function h(v,y){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!y||typeof y!="object"&&typeof y!="function"?v:y}function f(v,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);v.prototype=Object.create(y&&y.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(v,y):v.__proto__=y)}var m=function(v){function y(){return l(this,y),h(this,(y.__proto__||Object.getPrototypeOf(y)).apply(this,arguments))}return f(y,v),y}(d.default);m.blotName="code",m.tagName="CODE";var g=function(v){function y(){return l(this,y),h(this,(y.__proto__||Object.getPrototypeOf(y)).apply(this,arguments))}return f(y,v),r(y,[{key:"delta",value:function(){var b=this,x=this.domNode.textContent;return x.endsWith(`
`)&&(x=x.slice(0,-1)),x.split(`
`).reduce(function(w,_){return w.insert(_).insert(`
`,b.formats())},new s.default)}},{key:"format",value:function(b,x){if(b!==this.statics.blotName||!x){var w=this.descendant(p.default,this.length()-1),_=i(w,1)[0];_!=null&&_.deleteAt(_.length()-1,1),n(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"format",this).call(this,b,x)}}},{key:"formatAt",value:function(b,x,w,_){if(x!==0&&u.default.query(w,u.default.Scope.BLOCK)!=null&&(w!==this.statics.blotName||_!==this.statics.formats(this.domNode))){var I=this.newlineIndex(b);if(!(I<0||I>=b+x)){var k=this.newlineIndex(b,!0)+1,C=I-k+1,A=this.isolate(k,C),S=A.next;A.format(w,_),S instanceof y&&S.formatAt(0,b-k+x-C,w,_)}}}},{key:"insertAt",value:function(b,x,w){if(w==null){var _=this.descendant(p.default,b),I=i(_,2),k=I[0],C=I[1];k.insertAt(C,x)}}},{key:"length",value:function(){var b=this.domNode.textContent.length;return this.domNode.textContent.endsWith(`
`)?b:b+1}},{key:"newlineIndex",value:function(b){var x=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(x)return this.domNode.textContent.slice(0,b).lastIndexOf(`
`);var w=this.domNode.textContent.slice(b).indexOf(`
`);return w>-1?b+w:-1}},{key:"optimize",value:function(b){this.domNode.textContent.endsWith(`
`)||this.appendChild(u.default.create("text",`
`)),n(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"optimize",this).call(this,b);var x=this.next;x!=null&&x.prev===this&&x.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===x.statics.formats(x.domNode)&&(x.optimize(b),x.moveChildren(this),x.remove())}},{key:"replace",value:function(b){n(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"replace",this).call(this,b),[].slice.call(this.domNode.querySelectorAll("*")).forEach(function(x){var w=u.default.find(x);w==null?x.parentNode.removeChild(x):w instanceof u.default.Embed?w.remove():w.unwrap()})}}],[{key:"create",value:function(b){var x=n(y.__proto__||Object.getPrototypeOf(y),"create",this).call(this,b);return x.setAttribute("spellcheck",!1),x}},{key:"formats",value:function(){return!0}}]),y}(c.default);g.blotName="code-block",g.tagName="PRE",g.TAB="  ",e.Code=m,e.default=g},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},r=function(w,_){if(Array.isArray(w))return w;if(Symbol.iterator in Object(w))return function(I,k){var C=[],A=!0,S=!1,E=void 0;try{for(var O,q=I[Symbol.iterator]();!(A=(O=q.next()).done)&&(C.push(O.value),!k||C.length!==k);A=!0);}catch(P){S=!0,E=P}finally{try{!A&&q.return&&q.return()}finally{if(S)throw E}}return C}(w,_);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function w(_,I){for(var k=0;k<I.length;k++){var C=I[k];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(_,C.key,C)}}return function(_,I,k){return I&&w(_.prototype,I),k&&w(_,k),_}}(),s=v(o(2)),u=v(o(20)),c=v(o(0)),d=v(o(13)),p=v(o(24)),a=o(4),l=v(a),h=v(o(16)),f=v(o(21)),m=v(o(11)),g=v(o(3));function v(w){return w&&w.__esModule?w:{default:w}}var y=/^[ -~]*$/,b=function(){function w(_){(function(I,k){if(!(I instanceof k))throw new TypeError("Cannot call a class as a function")})(this,w),this.scroll=_,this.delta=this.getDelta()}return n(w,[{key:"applyDelta",value:function(_){var I=this,k=!1;this.scroll.update();var C=this.scroll.length();return this.scroll.batchStart(),(_=function(A){return A.reduce(function(S,E){if(E.insert===1){var O=(0,f.default)(E.attributes);return delete O.image,S.insert({image:E.attributes.image},O)}if(E.attributes==null||E.attributes.list!==!0&&E.attributes.bullet!==!0||((E=(0,f.default)(E)).attributes.list?E.attributes.list="ordered":(E.attributes.list="bullet",delete E.attributes.bullet)),typeof E.insert=="string"){var q=E.insert.replace(/\r\n/g,`
`).replace(/\r/g,`
`);return S.insert(q,E.attributes)}return S.push(E)},new s.default)}(_)).reduce(function(A,S){var E=S.retain||S.delete||S.insert.length||1,O=S.attributes||{};if(S.insert!=null){if(typeof S.insert=="string"){var q=S.insert;q.endsWith(`
`)&&k&&(k=!1,q=q.slice(0,-1)),A>=C&&!q.endsWith(`
`)&&(k=!0),I.scroll.insertAt(A,q);var P=I.scroll.line(A),N=r(P,2),L=N[0],U=N[1],W=(0,g.default)({},(0,a.bubbleFormats)(L));if(L instanceof l.default){var te=L.descendant(c.default.Leaf,U),Ne=r(te,1)[0];W=(0,g.default)(W,(0,a.bubbleFormats)(Ne))}O=u.default.attributes.diff(W,O)||{}}else if(i(S.insert)==="object"){var M=Object.keys(S.insert)[0];if(M==null)return A;I.scroll.insertAt(A,M,S.insert[M])}C+=E}return Object.keys(O).forEach(function(F){I.scroll.formatAt(A,E,F,O[F])}),A+E},0),_.reduce(function(A,S){return typeof S.delete=="number"?(I.scroll.deleteAt(A,S.delete),A):A+(S.retain||S.insert.length||1)},0),this.scroll.batchEnd(),this.update(_)}},{key:"deleteText",value:function(_,I){return this.scroll.deleteAt(_,I),this.update(new s.default().retain(_).delete(I))}},{key:"formatLine",value:function(_,I){var k=this,C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.scroll.update(),Object.keys(C).forEach(function(A){if(k.scroll.whitelist==null||k.scroll.whitelist[A]){var S=k.scroll.lines(_,Math.max(I,1)),E=I;S.forEach(function(O){var q=O.length();if(O instanceof d.default){var P=_-O.offset(k.scroll),N=O.newlineIndex(P+E)-P+1;O.formatAt(P,N,A,C[A])}else O.format(A,C[A]);E-=q})}}),this.scroll.optimize(),this.update(new s.default().retain(_).retain(I,(0,f.default)(C)))}},{key:"formatText",value:function(_,I){var k=this,C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Object.keys(C).forEach(function(A){k.scroll.formatAt(_,I,A,C[A])}),this.update(new s.default().retain(_).retain(I,(0,f.default)(C)))}},{key:"getContents",value:function(_,I){return this.delta.slice(_,_+I)}},{key:"getDelta",value:function(){return this.scroll.lines().reduce(function(_,I){return _.concat(I.delta())},new s.default)}},{key:"getFormat",value:function(_){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,k=[],C=[];I===0?this.scroll.path(_).forEach(function(S){var E=r(S,1)[0];E instanceof l.default?k.push(E):E instanceof c.default.Leaf&&C.push(E)}):(k=this.scroll.lines(_,I),C=this.scroll.descendants(c.default.Leaf,_,I));var A=[k,C].map(function(S){if(S.length===0)return{};for(var E=(0,a.bubbleFormats)(S.shift());Object.keys(E).length>0;){var O=S.shift();if(O==null)return E;E=x((0,a.bubbleFormats)(O),E)}return E});return g.default.apply(g.default,A)}},{key:"getText",value:function(_,I){return this.getContents(_,I).filter(function(k){return typeof k.insert=="string"}).map(function(k){return k.insert}).join("")}},{key:"insertEmbed",value:function(_,I,k){return this.scroll.insertAt(_,I,k),this.update(new s.default().retain(_).insert(function(C,A,S){return A in C?Object.defineProperty(C,A,{value:S,enumerable:!0,configurable:!0,writable:!0}):C[A]=S,C}({},I,k)))}},{key:"insertText",value:function(_,I){var k=this,C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return I=I.replace(/\r\n/g,`
`).replace(/\r/g,`
`),this.scroll.insertAt(_,I),Object.keys(C).forEach(function(A){k.scroll.formatAt(_,I.length,A,C[A])}),this.update(new s.default().retain(_).insert(I,(0,f.default)(C)))}},{key:"isBlank",value:function(){if(this.scroll.children.length==0)return!0;if(this.scroll.children.length>1)return!1;var _=this.scroll.children.head;return _.statics.blotName===l.default.blotName&&!(_.children.length>1)&&_.children.head instanceof h.default}},{key:"removeFormat",value:function(_,I){var k=this.getText(_,I),C=this.scroll.line(_+I),A=r(C,2),S=A[0],E=A[1],O=0,q=new s.default;S!=null&&(O=S instanceof d.default?S.newlineIndex(E)-E+1:S.length()-E,q=S.delta().slice(E,E+O-1).insert(`
`));var P=this.getContents(_,I+O).diff(new s.default().insert(k).concat(q)),N=new s.default().retain(_).concat(P);return this.applyDelta(N)}},{key:"update",value:function(_){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,C=this.delta;if(I.length===1&&I[0].type==="characterData"&&I[0].target.data.match(y)&&c.default.find(I[0].target)){var A=c.default.find(I[0].target),S=(0,a.bubbleFormats)(A),E=A.offset(this.scroll),O=I[0].oldValue.replace(p.default.CONTENTS,""),q=new s.default().insert(O),P=new s.default().insert(A.value()),N=new s.default().retain(E).concat(q.diff(P,k));_=N.reduce(function(L,U){return U.insert?L.insert(U.insert,S):L.push(U)},new s.default),this.delta=C.compose(_)}else this.delta=this.getDelta(),_&&(0,m.default)(C.compose(_),this.delta)||(_=C.diff(this.delta,k));return _}}]),w}();function x(w,_){return Object.keys(_).reduce(function(I,k){return w[k]==null||(_[k]===w[k]?I[k]=_[k]:Array.isArray(_[k])?_[k].indexOf(w[k])<0&&(I[k]=_[k].concat([w[k]])):I[k]=[_[k],w[k]]),I},{})}e.default=b},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Range=void 0;var i=function(g,v){if(Array.isArray(g))return g;if(Symbol.iterator in Object(g))return function(y,b){var x=[],w=!0,_=!1,I=void 0;try{for(var k,C=y[Symbol.iterator]();!(w=(k=C.next()).done)&&(x.push(k.value),!b||x.length!==b);w=!0);}catch(A){_=!0,I=A}finally{try{!w&&C.return&&C.return()}finally{if(_)throw I}}return x}(g,v);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function g(v,y){for(var b=0;b<y.length;b++){var x=y[b];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(v,x.key,x)}}return function(v,y,b){return y&&g(v.prototype,y),b&&g(v,b),v}}(),n=d(o(0)),s=d(o(21)),u=d(o(11)),c=d(o(8));function d(g){return g&&g.__esModule?g:{default:g}}function p(g){if(Array.isArray(g)){for(var v=0,y=Array(g.length);v<g.length;v++)y[v]=g[v];return y}return Array.from(g)}function a(g,v){if(!(g instanceof v))throw new TypeError("Cannot call a class as a function")}var l=(0,d(o(10)).default)("quill:selection"),h=function g(v){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;a(this,g),this.index=v,this.length=y},f=function(){function g(v,y){var b=this;a(this,g),this.emitter=y,this.scroll=v,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=n.default.create("cursor",this),this.lastRange=this.savedRange=new h(0,0),this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,function(){b.mouseDown||setTimeout(b.update.bind(b,c.default.sources.USER),1)}),this.emitter.on(c.default.events.EDITOR_CHANGE,function(x,w){x===c.default.events.TEXT_CHANGE&&w.length()>0&&b.update(c.default.sources.SILENT)}),this.emitter.on(c.default.events.SCROLL_BEFORE_UPDATE,function(){if(b.hasFocus()){var x=b.getNativeRange();x!=null&&x.start.node!==b.cursor.textNode&&b.emitter.once(c.default.events.SCROLL_UPDATE,function(){try{b.setNativeRange(x.start.node,x.start.offset,x.end.node,x.end.offset)}catch{}})}}),this.emitter.on(c.default.events.SCROLL_OPTIMIZE,function(x,w){if(w.range){var _=w.range,I=_.startNode,k=_.startOffset,C=_.endNode,A=_.endOffset;b.setNativeRange(I,k,C,A)}}),this.update(c.default.sources.SILENT)}return r(g,[{key:"handleComposition",value:function(){var v=this;this.root.addEventListener("compositionstart",function(){v.composing=!0}),this.root.addEventListener("compositionend",function(){if(v.composing=!1,v.cursor.parent){var y=v.cursor.restore();if(!y)return;setTimeout(function(){v.setNativeRange(y.startNode,y.startOffset,y.endNode,y.endOffset)},1)}})}},{key:"handleDragging",value:function(){var v=this;this.emitter.listenDOM("mousedown",document.body,function(){v.mouseDown=!0}),this.emitter.listenDOM("mouseup",document.body,function(){v.mouseDown=!1,v.update(c.default.sources.USER)})}},{key:"focus",value:function(){this.hasFocus()||(this.root.focus(),this.setRange(this.savedRange))}},{key:"format",value:function(v,y){if(this.scroll.whitelist==null||this.scroll.whitelist[v]){this.scroll.update();var b=this.getNativeRange();if(b!=null&&b.native.collapsed&&!n.default.query(v,n.default.Scope.BLOCK)){if(b.start.node!==this.cursor.textNode){var x=n.default.find(b.start.node,!1);if(x==null)return;if(x instanceof n.default.Leaf){var w=x.split(b.start.offset);x.parent.insertBefore(this.cursor,w)}else x.insertBefore(this.cursor,b.start.node);this.cursor.attach()}this.cursor.format(v,y),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}}},{key:"getBounds",value:function(v){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,b=this.scroll.length();v=Math.min(v,b-1),y=Math.min(v+y,b-1)-v;var x=void 0,w=this.scroll.leaf(v),_=i(w,2),I=_[0],k=_[1];if(I==null)return null;var C=I.position(k,!0),A=i(C,2);x=A[0],k=A[1];var S=document.createRange();if(y>0){S.setStart(x,k);var E=this.scroll.leaf(v+y),O=i(E,2);if(I=O[0],k=O[1],I==null)return null;var q=I.position(k,!0),P=i(q,2);return x=P[0],k=P[1],S.setEnd(x,k),S.getBoundingClientRect()}var N="left",L=void 0;return x instanceof Text?(k<x.data.length?(S.setStart(x,k),S.setEnd(x,k+1)):(S.setStart(x,k-1),S.setEnd(x,k),N="right"),L=S.getBoundingClientRect()):(L=I.domNode.getBoundingClientRect(),k>0&&(N="right")),{bottom:L.top+L.height,height:L.height,left:L[N],right:L[N],top:L.top,width:0}}},{key:"getNativeRange",value:function(){var v=document.getSelection();if(v==null||v.rangeCount<=0)return null;var y=v.getRangeAt(0);if(y==null)return null;var b=this.normalizeNative(y);return l.info("getNativeRange",b),b}},{key:"getRange",value:function(){var v=this.getNativeRange();return v==null?[null,null]:[this.normalizedToRange(v),v]}},{key:"hasFocus",value:function(){return document.activeElement===this.root}},{key:"normalizedToRange",value:function(v){var y=this,b=[[v.start.node,v.start.offset]];v.native.collapsed||b.push([v.end.node,v.end.offset]);var x=b.map(function(I){var k=i(I,2),C=k[0],A=k[1],S=n.default.find(C,!0),E=S.offset(y.scroll);return A===0?E:S instanceof n.default.Container?E+S.length():E+S.index(C,A)}),w=Math.min(Math.max.apply(Math,p(x)),this.scroll.length()-1),_=Math.min.apply(Math,[w].concat(p(x)));return new h(_,w-_)}},{key:"normalizeNative",value:function(v){if(!m(this.root,v.startContainer)||!v.collapsed&&!m(this.root,v.endContainer))return null;var y={start:{node:v.startContainer,offset:v.startOffset},end:{node:v.endContainer,offset:v.endOffset},native:v};return[y.start,y.end].forEach(function(b){for(var x=b.node,w=b.offset;!(x instanceof Text)&&x.childNodes.length>0;)if(x.childNodes.length>w)x=x.childNodes[w],w=0;else{if(x.childNodes.length!==w)break;w=(x=x.lastChild)instanceof Text?x.data.length:x.childNodes.length+1}b.node=x,b.offset=w}),y}},{key:"rangeToNative",value:function(v){var y=this,b=v.collapsed?[v.index]:[v.index,v.index+v.length],x=[],w=this.scroll.length();return b.forEach(function(_,I){_=Math.min(w-1,_);var k,C=y.scroll.leaf(_),A=i(C,2),S=A[0],E=A[1],O=S.position(E,I!==0),q=i(O,2);k=q[0],E=q[1],x.push(k,E)}),x.length<2&&(x=x.concat(x)),x}},{key:"scrollIntoView",value:function(v){var y=this.lastRange;if(y!=null){var b=this.getBounds(y.index,y.length);if(b!=null){var x=this.scroll.length()-1,w=this.scroll.line(Math.min(y.index,x)),_=i(w,1)[0],I=_;if(y.length>0){var k=this.scroll.line(Math.min(y.index+y.length,x));I=i(k,1)[0]}if(_!=null&&I!=null){var C=v.getBoundingClientRect();b.top<C.top?v.scrollTop-=C.top-b.top:b.bottom>C.bottom&&(v.scrollTop+=b.bottom-C.bottom)}}}}},{key:"setNativeRange",value:function(v,y){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:v,x=arguments.length>3&&arguments[3]!==void 0?arguments[3]:y,w=arguments.length>4&&arguments[4]!==void 0&&arguments[4];if(l.info("setNativeRange",v,y,b,x),v==null||this.root.parentNode!=null&&v.parentNode!=null&&b.parentNode!=null){var _=document.getSelection();if(_!=null)if(v!=null){this.hasFocus()||this.root.focus();var I=(this.getNativeRange()||{}).native;if(I==null||w||v!==I.startContainer||y!==I.startOffset||b!==I.endContainer||x!==I.endOffset){v.tagName=="BR"&&(y=[].indexOf.call(v.parentNode.childNodes,v),v=v.parentNode),b.tagName=="BR"&&(x=[].indexOf.call(b.parentNode.childNodes,b),b=b.parentNode);var k=document.createRange();k.setStart(v,y),k.setEnd(b,x),_.removeAllRanges(),_.addRange(k)}}else _.removeAllRanges(),this.root.blur(),document.body.focus()}}},{key:"setRange",value:function(v){var y=arguments.length>1&&arguments[1]!==void 0&&arguments[1],b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:c.default.sources.API;if(typeof y=="string"&&(b=y,y=!1),l.info("setRange",v),v!=null){var x=this.rangeToNative(v);this.setNativeRange.apply(this,p(x).concat([y]))}else this.setNativeRange(null);this.update(b)}},{key:"update",value:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c.default.sources.USER,y=this.lastRange,b=this.getRange(),x=i(b,2),w=x[0],_=x[1];if(this.lastRange=w,this.lastRange!=null&&(this.savedRange=this.lastRange),!(0,u.default)(y,this.lastRange)){var I;!this.composing&&_!=null&&_.native.collapsed&&_.start.node!==this.cursor.textNode&&this.cursor.restore();var k,C=[c.default.events.SELECTION_CHANGE,(0,s.default)(this.lastRange),(0,s.default)(y),v];(I=this.emitter).emit.apply(I,[c.default.events.EDITOR_CHANGE].concat(C)),v!==c.default.sources.SILENT&&(k=this.emitter).emit.apply(k,C)}}}]),g}();function m(g,v){try{v.parentNode}catch{return!1}return v instanceof Text&&(v=v.parentNode),g.contains(v)}e.Range=h,e.default=f},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function p(a,l){for(var h=0;h<l.length;h++){var f=l[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(a,f.key,f)}}return function(a,l,h){return l&&p(a.prototype,l),h&&p(a,h),a}}(),n=function p(a,l,h){a===null&&(a=Function.prototype);var f=Object.getOwnPropertyDescriptor(a,l);if(f===void 0){var m=Object.getPrototypeOf(a);return m===null?void 0:p(m,l,h)}if("value"in f)return f.value;var g=f.get;return g!==void 0?g.call(h):void 0},s=o(0);function u(p,a){if(!(p instanceof a))throw new TypeError("Cannot call a class as a function")}function c(p,a){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?p:a}var d=function(p){function a(){return u(this,a),c(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,p),r(a,[{key:"insertInto",value:function(l,h){l.children.length===0?n(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"insertInto",this).call(this,l,h):this.remove()}},{key:"length",value:function(){return 0}},{key:"value",value:function(){return""}}],[{key:"value",value:function(){}}]),a}(((i=s)&&i.__esModule?i:{default:i}).default.Embed);d.blotName="break",d.tagName="BR",e.default=d},function(t,e,o){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,a){p.__proto__=a}||function(p,a){for(var l in a)a.hasOwnProperty(l)&&(p[l]=a[l])},function(p,a){function l(){this.constructor=p}i(p,a),p.prototype=a===null?Object.create(a):(l.prototype=a.prototype,new l)});Object.defineProperty(e,"__esModule",{value:!0});var n=o(44),s=o(30),u=o(1),c=function(p){function a(l){var h=p.call(this,l)||this;return h.build(),h}return r(a,p),a.prototype.appendChild=function(l){this.insertBefore(l)},a.prototype.attach=function(){p.prototype.attach.call(this),this.children.forEach(function(l){l.attach()})},a.prototype.build=function(){var l=this;this.children=new n.default,[].slice.call(this.domNode.childNodes).reverse().forEach(function(h){try{var f=d(h);l.insertBefore(f,l.children.head||void 0)}catch(m){if(m instanceof u.ParchmentError)return;throw m}})},a.prototype.deleteAt=function(l,h){if(l===0&&h===this.length())return this.remove();this.children.forEachAt(l,h,function(f,m,g){f.deleteAt(m,g)})},a.prototype.descendant=function(l,h){var f=this.children.find(h),m=f[0],g=f[1];return l.blotName==null&&l(m)||l.blotName!=null&&m instanceof l?[m,g]:m instanceof a?m.descendant(l,g):[null,-1]},a.prototype.descendants=function(l,h,f){h===void 0&&(h=0),f===void 0&&(f=Number.MAX_VALUE);var m=[],g=f;return this.children.forEachAt(h,f,function(v,y,b){(l.blotName==null&&l(v)||l.blotName!=null&&v instanceof l)&&m.push(v),v instanceof a&&(m=m.concat(v.descendants(l,y,g))),g-=b}),m},a.prototype.detach=function(){this.children.forEach(function(l){l.detach()}),p.prototype.detach.call(this)},a.prototype.formatAt=function(l,h,f,m){this.children.forEachAt(l,h,function(g,v,y){g.formatAt(v,y,f,m)})},a.prototype.insertAt=function(l,h,f){var m=this.children.find(l),g=m[0],v=m[1];if(g)g.insertAt(v,h,f);else{var y=f==null?u.create("text",h):u.create(h,f);this.appendChild(y)}},a.prototype.insertBefore=function(l,h){if(this.statics.allowedChildren!=null&&!this.statics.allowedChildren.some(function(f){return l instanceof f}))throw new u.ParchmentError("Cannot insert "+l.statics.blotName+" into "+this.statics.blotName);l.insertInto(this,h)},a.prototype.length=function(){return this.children.reduce(function(l,h){return l+h.length()},0)},a.prototype.moveChildren=function(l,h){this.children.forEach(function(f){l.insertBefore(f,h)})},a.prototype.optimize=function(l){if(p.prototype.optimize.call(this,l),this.children.length===0)if(this.statics.defaultChild!=null){var h=u.create(this.statics.defaultChild);this.appendChild(h),h.optimize(l)}else this.remove()},a.prototype.path=function(l,h){h===void 0&&(h=!1);var f=this.children.find(l,h),m=f[0],g=f[1],v=[[this,l]];return m instanceof a?v.concat(m.path(g,h)):(m!=null&&v.push([m,g]),v)},a.prototype.removeChild=function(l){this.children.remove(l)},a.prototype.replace=function(l){l instanceof a&&l.moveChildren(this),p.prototype.replace.call(this,l)},a.prototype.split=function(l,h){if(h===void 0&&(h=!1),!h){if(l===0)return this;if(l===this.length())return this.next}var f=this.clone();return this.parent.insertBefore(f,this.next),this.children.forEachAt(l,this.length(),function(m,g,v){m=m.split(g,h),f.appendChild(m)}),f},a.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},a.prototype.update=function(l,h){var f=this,m=[],g=[];l.forEach(function(v){v.target===f.domNode&&v.type==="childList"&&(m.push.apply(m,v.addedNodes),g.push.apply(g,v.removedNodes))}),g.forEach(function(v){if(!(v.parentNode!=null&&v.tagName!=="IFRAME"&&document.body.compareDocumentPosition(v)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var y=u.find(v);y!=null&&(y.domNode.parentNode!=null&&y.domNode.parentNode!==f.domNode||y.detach())}}),m.filter(function(v){return v.parentNode==f.domNode}).sort(function(v,y){return v===y?0:v.compareDocumentPosition(y)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1}).forEach(function(v){var y=null;v.nextSibling!=null&&(y=u.find(v.nextSibling));var b=d(v);b.next==y&&b.next!=null||(b.parent!=null&&b.parent.removeChild(f),f.insertBefore(b,y||void 0))})},a}(s.default);function d(p){var a=u.find(p);if(a==null)try{a=u.create(p)}catch{a=u.create(u.Scope.INLINE),[].slice.call(p.childNodes).forEach(function(h){a.domNode.appendChild(h)}),p.parentNode&&p.parentNode.replaceChild(a.domNode,p),a.attach()}return a}e.default=c},function(t,e,o){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,a){p.__proto__=a}||function(p,a){for(var l in a)a.hasOwnProperty(l)&&(p[l]=a[l])},function(p,a){function l(){this.constructor=p}i(p,a),p.prototype=a===null?Object.create(a):(l.prototype=a.prototype,new l)});Object.defineProperty(e,"__esModule",{value:!0});var n=o(12),s=o(31),u=o(17),c=o(1),d=function(p){function a(l){var h=p.call(this,l)||this;return h.attributes=new s.default(h.domNode),h}return r(a,p),a.formats=function(l){return typeof this.tagName=="string"||(Array.isArray(this.tagName)?l.tagName.toLowerCase():void 0)},a.prototype.format=function(l,h){var f=c.query(l);f instanceof n.default?this.attributes.attribute(f,h):h&&(f==null||l===this.statics.blotName&&this.formats()[l]===h||this.replaceWith(l,h))},a.prototype.formats=function(){var l=this.attributes.values(),h=this.statics.formats(this.domNode);return h!=null&&(l[this.statics.blotName]=h),l},a.prototype.replaceWith=function(l,h){var f=p.prototype.replaceWith.call(this,l,h);return this.attributes.copy(f),f},a.prototype.update=function(l,h){var f=this;p.prototype.update.call(this,l,h),l.some(function(m){return m.target===f.domNode&&m.type==="attributes"})&&this.attributes.build()},a.prototype.wrap=function(l,h){var f=p.prototype.wrap.call(this,l,h);return f instanceof a&&f.statics.scope===this.statics.scope&&this.attributes.move(f),f},a}(u.default);e.default=d},function(t,e,o){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var p in d)d.hasOwnProperty(p)&&(c[p]=d[p])},function(c,d){function p(){this.constructor=c}i(c,d),c.prototype=d===null?Object.create(d):(p.prototype=d.prototype,new p)});Object.defineProperty(e,"__esModule",{value:!0});var n=o(30),s=o(1),u=function(c){function d(){return c!==null&&c.apply(this,arguments)||this}return r(d,c),d.value=function(p){return!0},d.prototype.index=function(p,a){return this.domNode===p||this.domNode.compareDocumentPosition(p)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(a,1):-1},d.prototype.position=function(p,a){var l=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return p>0&&(l+=1),[this.parent.domNode,l]},d.prototype.value=function(){var p;return(p={})[this.statics.blotName]=this.statics.value(this.domNode)||!0,p},d.scope=s.Scope.INLINE_BLOT,d}(n.default);e.default=u},function(t,e,o){var i=o(11),r=o(3),n={attributes:{compose:function(u,c,d){typeof u!="object"&&(u={}),typeof c!="object"&&(c={});var p=r(!0,{},c);for(var a in d||(p=Object.keys(p).reduce(function(l,h){return p[h]!=null&&(l[h]=p[h]),l},{})),u)u[a]!==void 0&&c[a]===void 0&&(p[a]=u[a]);return Object.keys(p).length>0?p:void 0},diff:function(u,c){typeof u!="object"&&(u={}),typeof c!="object"&&(c={});var d=Object.keys(u).concat(Object.keys(c)).reduce(function(p,a){return i(u[a],c[a])||(p[a]=c[a]===void 0?null:c[a]),p},{});return Object.keys(d).length>0?d:void 0},transform:function(u,c,d){if(typeof u!="object")return c;if(typeof c=="object"){if(!d)return c;var p=Object.keys(c).reduce(function(a,l){return u[l]===void 0&&(a[l]=c[l]),a},{});return Object.keys(p).length>0?p:void 0}}},iterator:function(u){return new s(u)},length:function(u){return typeof u.delete=="number"?u.delete:typeof u.retain=="number"?u.retain:typeof u.insert=="string"?u.insert.length:1}};function s(u){this.ops=u,this.index=0,this.offset=0}s.prototype.hasNext=function(){return this.peekLength()<1/0},s.prototype.next=function(u){u||(u=1/0);var c=this.ops[this.index];if(c){var d=this.offset,p=n.length(c);if(u>=p-d?(u=p-d,this.index+=1,this.offset=0):this.offset+=u,typeof c.delete=="number")return{delete:u};var a={};return c.attributes&&(a.attributes=c.attributes),typeof c.retain=="number"?a.retain=u:typeof c.insert=="string"?a.insert=c.insert.substr(d,u):a.insert=c.insert,a}return{retain:1/0}},s.prototype.peek=function(){return this.ops[this.index]},s.prototype.peekLength=function(){return this.ops[this.index]?n.length(this.ops[this.index])-this.offset:1/0},s.prototype.peekType=function(){return this.ops[this.index]?typeof this.ops[this.index].delete=="number"?"delete":typeof this.ops[this.index].retain=="number"?"retain":"insert":"retain"},s.prototype.rest=function(){if(this.hasNext()){if(this.offset===0)return this.ops.slice(this.index);var u=this.offset,c=this.index,d=this.next(),p=this.ops.slice(this.index);return this.offset=u,this.index=c,[d].concat(p)}return[]},t.exports=n},function(t,e){var o=function(){function i(p,a){return a!=null&&p instanceof a}var r,n,s;try{r=Map}catch{r=function(){}}try{n=Set}catch{n=function(){}}try{s=Promise}catch{s=function(){}}function u(p,a,l,h,f){typeof a=="object"&&(l=a.depth,h=a.prototype,f=a.includeNonEnumerable,a=a.circular);var m=[],g=[],v=typeof Buffer!="undefined";return a===void 0&&(a=!0),l===void 0&&(l=1/0),function y(b,x){if(b===null)return null;if(x===0)return b;var w,_;if(typeof b!="object")return b;if(i(b,r))w=new r;else if(i(b,n))w=new n;else if(i(b,s))w=new s(function(P,N){b.then(function(L){P(y(L,x-1))},function(L){N(y(L,x-1))})});else if(u.__isArray(b))w=[];else if(u.__isRegExp(b))w=new RegExp(b.source,d(b)),b.lastIndex&&(w.lastIndex=b.lastIndex);else if(u.__isDate(b))w=new Date(b.getTime());else{if(v&&Buffer.isBuffer(b))return w=Buffer.allocUnsafe?Buffer.allocUnsafe(b.length):new Buffer(b.length),b.copy(w),w;i(b,Error)?w=Object.create(b):h===void 0?(_=Object.getPrototypeOf(b),w=Object.create(_)):(w=Object.create(h),_=h)}if(a){var I=m.indexOf(b);if(I!=-1)return g[I];m.push(b),g.push(w)}for(var k in i(b,r)&&b.forEach(function(P,N){var L=y(N,x-1),U=y(P,x-1);w.set(L,U)}),i(b,n)&&b.forEach(function(P){var N=y(P,x-1);w.add(N)}),b){var C;_&&(C=Object.getOwnPropertyDescriptor(_,k)),C&&C.set==null||(w[k]=y(b[k],x-1))}if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(b);for(k=0;k<A.length;k++){var S=A[k];(!(O=Object.getOwnPropertyDescriptor(b,S))||O.enumerable||f)&&(w[S]=y(b[S],x-1),O.enumerable||Object.defineProperty(w,S,{enumerable:!1}))}}if(f){var E=Object.getOwnPropertyNames(b);for(k=0;k<E.length;k++){var O,q=E[k];(O=Object.getOwnPropertyDescriptor(b,q))&&O.enumerable||(w[q]=y(b[q],x-1),Object.defineProperty(w,q,{enumerable:!1}))}}return w}(p,l)}function c(p){return Object.prototype.toString.call(p)}function d(p){var a="";return p.global&&(a+="g"),p.ignoreCase&&(a+="i"),p.multiline&&(a+="m"),a}return u.clonePrototype=function(p){if(p===null)return null;var a=function(){};return a.prototype=p,new a},u.__objToStr=c,u.__isDate=function(p){return typeof p=="object"&&c(p)==="[object Date]"},u.__isArray=function(p){return typeof p=="object"&&c(p)==="[object Array]"},u.__isRegExp=function(p){return typeof p=="object"&&c(p)==="[object RegExp]"},u.__getRegExpFlags=d,u}();typeof t=="object"&&t.exports&&(t.exports=o)},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=function(g,v){if(Array.isArray(g))return g;if(Symbol.iterator in Object(g))return function(y,b){var x=[],w=!0,_=!1,I=void 0;try{for(var k,C=y[Symbol.iterator]();!(w=(k=C.next()).done)&&(x.push(k.value),!b||x.length!==b);w=!0);}catch(A){_=!0,I=A}finally{try{!w&&C.return&&C.return()}finally{if(_)throw I}}return x}(g,v);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function g(v,y){for(var b=0;b<y.length;b++){var x=y[b];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(v,x.key,x)}}return function(v,y,b){return y&&g(v.prototype,y),b&&g(v,b),v}}(),n=function g(v,y,b){v===null&&(v=Function.prototype);var x=Object.getOwnPropertyDescriptor(v,y);if(x===void 0){var w=Object.getPrototypeOf(v);return w===null?void 0:g(w,y,b)}if("value"in x)return x.value;var _=x.get;return _!==void 0?_.call(b):void 0},s=h(o(0)),u=h(o(8)),c=o(4),d=h(c),p=h(o(16)),a=h(o(13)),l=h(o(25));function h(g){return g&&g.__esModule?g:{default:g}}function f(g){return g instanceof d.default||g instanceof c.BlockEmbed}var m=function(g){function v(y,b){(function(w,_){if(!(w instanceof _))throw new TypeError("Cannot call a class as a function")})(this,v);var x=function(w,_){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!_||typeof _!="object"&&typeof _!="function"?w:_}(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,y));return x.emitter=b.emitter,Array.isArray(b.whitelist)&&(x.whitelist=b.whitelist.reduce(function(w,_){return w[_]=!0,w},{})),x.domNode.addEventListener("DOMNodeInserted",function(){}),x.optimize(),x.enable(),x}return function(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(y,b):y.__proto__=b)}(v,g),r(v,[{key:"batchStart",value:function(){this.batch=!0}},{key:"batchEnd",value:function(){this.batch=!1,this.optimize()}},{key:"deleteAt",value:function(y,b){var x=this.line(y),w=i(x,2),_=w[0],I=w[1],k=this.line(y+b),C=i(k,1)[0];if(n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"deleteAt",this).call(this,y,b),C!=null&&_!==C&&I>0){if(_ instanceof c.BlockEmbed||C instanceof c.BlockEmbed)return void this.optimize();if(_ instanceof a.default){var A=_.newlineIndex(_.length(),!0);if(A>-1&&(_=_.split(A+1))===C)return void this.optimize()}else if(C instanceof a.default){var S=C.newlineIndex(0);S>-1&&C.split(S+1)}var E=C.children.head instanceof p.default?null:C.children.head;_.moveChildren(C,E),_.remove()}this.optimize()}},{key:"enable",value:function(){var y=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];this.domNode.setAttribute("contenteditable",y)}},{key:"formatAt",value:function(y,b,x,w){(this.whitelist==null||this.whitelist[x])&&(n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"formatAt",this).call(this,y,b,x,w),this.optimize())}},{key:"insertAt",value:function(y,b,x){if(x==null||this.whitelist==null||this.whitelist[b]){if(y>=this.length())if(x==null||s.default.query(b,s.default.Scope.BLOCK)==null){var w=s.default.create(this.statics.defaultChild);this.appendChild(w),x==null&&b.endsWith(`
`)&&(b=b.slice(0,-1)),w.insertAt(0,b,x)}else{var _=s.default.create(b,x);this.appendChild(_)}else n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"insertAt",this).call(this,y,b,x);this.optimize()}}},{key:"insertBefore",value:function(y,b){if(y.statics.scope===s.default.Scope.INLINE_BLOT){var x=s.default.create(this.statics.defaultChild);x.appendChild(y),y=x}n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"insertBefore",this).call(this,y,b)}},{key:"leaf",value:function(y){return this.path(y).pop()||[null,-1]}},{key:"line",value:function(y){return y===this.length()?this.line(y-1):this.descendant(f,y)}},{key:"lines",value:function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE,x=function w(_,I,k){var C=[],A=k;return _.children.forEachAt(I,k,function(S,E,O){f(S)?C.push(S):S instanceof s.default.Container&&(C=C.concat(w(S,E,A))),A-=O}),C};return x(this,y,b)}},{key:"optimize",value:function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.batch!==!0&&(n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"optimize",this).call(this,y,b),y.length>0&&this.emitter.emit(u.default.events.SCROLL_OPTIMIZE,y,b))}},{key:"path",value:function(y){return n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"path",this).call(this,y).slice(1)}},{key:"update",value:function(y){if(this.batch!==!0){var b=u.default.sources.USER;typeof y=="string"&&(b=y),Array.isArray(y)||(y=this.observer.takeRecords()),y.length>0&&this.emitter.emit(u.default.events.SCROLL_BEFORE_UPDATE,b,y),n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"update",this).call(this,y.concat([])),y.length>0&&this.emitter.emit(u.default.events.SCROLL_UPDATE,b,y)}}}]),v}(s.default.Scroll);m.blotName="scroll",m.className="ql-editor",m.tagName="DIV",m.defaultChild="block",m.allowedChildren=[d.default,c.BlockEmbed,l.default],e.default=m},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.SHORTKEY=e.default=void 0;var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},r=function(E,O){if(Array.isArray(E))return E;if(Symbol.iterator in Object(E))return function(q,P){var N=[],L=!0,U=!1,W=void 0;try{for(var te,Ne=q[Symbol.iterator]();!(L=(te=Ne.next()).done)&&(N.push(te.value),!P||N.length!==P);L=!0);}catch(M){U=!0,W=M}finally{try{!L&&Ne.return&&Ne.return()}finally{if(U)throw W}}return N}(E,O);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function E(O,q){for(var P=0;P<q.length;P++){var N=q[P];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(O,N.key,N)}}return function(O,q,P){return q&&E(O.prototype,q),P&&E(O,P),O}}(),s=m(o(21)),u=m(o(11)),c=m(o(3)),d=m(o(2)),p=m(o(20)),a=m(o(0)),l=m(o(5)),h=m(o(10)),f=m(o(9));function m(E){return E&&E.__esModule?E:{default:E}}function g(E,O,q){return O in E?Object.defineProperty(E,O,{value:q,enumerable:!0,configurable:!0,writable:!0}):E[O]=q,E}var v=(0,h.default)("quill:keyboard"),y=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey",b=function(E){function O(q,P){(function(L,U){if(!(L instanceof U))throw new TypeError("Cannot call a class as a function")})(this,O);var N=function(L,U){if(!L)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!U||typeof U!="object"&&typeof U!="function"?L:U}(this,(O.__proto__||Object.getPrototypeOf(O)).call(this,q,P));return N.bindings={},Object.keys(N.options.bindings).forEach(function(L){(L!=="list autofill"||q.scroll.whitelist==null||q.scroll.whitelist.list)&&N.options.bindings[L]&&N.addBinding(N.options.bindings[L])}),N.addBinding({key:O.keys.ENTER,shiftKey:null},k),N.addBinding({key:O.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},function(){}),/Firefox/i.test(navigator.userAgent)?(N.addBinding({key:O.keys.BACKSPACE},{collapsed:!0},w),N.addBinding({key:O.keys.DELETE},{collapsed:!0},_)):(N.addBinding({key:O.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/},w),N.addBinding({key:O.keys.DELETE},{collapsed:!0,suffix:/^.?$/},_)),N.addBinding({key:O.keys.BACKSPACE},{collapsed:!1},I),N.addBinding({key:O.keys.DELETE},{collapsed:!1},I),N.addBinding({key:O.keys.BACKSPACE,altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},w),N.listen(),N}return function(q,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof P);q.prototype=Object.create(P&&P.prototype,{constructor:{value:q,enumerable:!1,writable:!0,configurable:!0}}),P&&(Object.setPrototypeOf?Object.setPrototypeOf(q,P):q.__proto__=P)}(O,E),n(O,null,[{key:"match",value:function(q,P){return P=S(P),!["altKey","ctrlKey","metaKey","shiftKey"].some(function(N){return!!P[N]!==q[N]&&P[N]!==null})&&P.key===(q.which||q.keyCode)}}]),n(O,[{key:"addBinding",value:function(q){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},L=S(q);if(L==null||L.key==null)return v.warn("Attempted to add invalid keyboard binding",L);typeof P=="function"&&(P={handler:P}),typeof N=="function"&&(N={handler:N}),L=(0,c.default)(L,P,N),this.bindings[L.key]=this.bindings[L.key]||[],this.bindings[L.key].push(L)}},{key:"listen",value:function(){var q=this;this.quill.root.addEventListener("keydown",function(P){if(!P.defaultPrevented){var N=P.which||P.keyCode,L=(q.bindings[N]||[]).filter(function(Se){return O.match(P,Se)});if(L.length!==0){var U=q.quill.getSelection();if(U!=null&&q.quill.hasFocus()){var W=q.quill.getLine(U.index),te=r(W,2),Ne=te[0],M=te[1],F=q.quill.getLeaf(U.index),B=r(F,2),V=B[0],K=B[1],ae=U.length===0?[V,K]:q.quill.getLeaf(U.index+U.length),se=r(ae,2),pe=se[0],Ue=se[1],Ae=V instanceof a.default.Text?V.value().slice(0,K):"",qt=pe instanceof a.default.Text?pe.value().slice(Ue):"",$e={collapsed:U.length===0,empty:U.length===0&&Ne.length()<=1,format:q.quill.getFormat(U),offset:M,prefix:Ae,suffix:qt};L.some(function(Se){if(Se.collapsed!=null&&Se.collapsed!==$e.collapsed||Se.empty!=null&&Se.empty!==$e.empty||Se.offset!=null&&Se.offset!==$e.offset)return!1;if(Array.isArray(Se.format)){if(Se.format.every(function(it){return $e.format[it]==null}))return!1}else if(i(Se.format)==="object"&&!Object.keys(Se.format).every(function(it){return Se.format[it]===!0?$e.format[it]!=null:Se.format[it]===!1?$e.format[it]==null:(0,u.default)(Se.format[it],$e.format[it])}))return!1;return!(Se.prefix!=null&&!Se.prefix.test($e.prefix)||Se.suffix!=null&&!Se.suffix.test($e.suffix)||Se.handler.call(q,U,$e)===!0)})&&P.preventDefault()}}}})}}]),O}(f.default);function x(E,O){var q,P=E===b.keys.LEFT?"prefix":"suffix";return g(q={key:E,shiftKey:O,altKey:null},P,/^$/),g(q,"handler",function(N){var L=N.index;E===b.keys.RIGHT&&(L+=N.length+1);var U=this.quill.getLeaf(L);return!(r(U,1)[0]instanceof a.default.Embed&&(E===b.keys.LEFT?O?this.quill.setSelection(N.index-1,N.length+1,l.default.sources.USER):this.quill.setSelection(N.index-1,l.default.sources.USER):O?this.quill.setSelection(N.index,N.length+1,l.default.sources.USER):this.quill.setSelection(N.index+N.length+1,l.default.sources.USER),1))}),q}function w(E,O){if(!(E.index===0||this.quill.getLength()<=1)){var q=this.quill.getLine(E.index),P=r(q,1)[0],N={};if(O.offset===0){var L=this.quill.getLine(E.index-1),U=r(L,1)[0];if(U!=null&&U.length()>1){var W=P.formats(),te=this.quill.getFormat(E.index-1,1);N=p.default.attributes.diff(W,te)||{}}}var Ne=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(O.prefix)?2:1;this.quill.deleteText(E.index-Ne,Ne,l.default.sources.USER),Object.keys(N).length>0&&this.quill.formatLine(E.index-Ne,Ne,N,l.default.sources.USER),this.quill.focus()}}function _(E,O){var q=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(O.suffix)?2:1;if(!(E.index>=this.quill.getLength()-q)){var P={},N=0,L=this.quill.getLine(E.index),U=r(L,1)[0];if(O.offset>=U.length()-1){var W=this.quill.getLine(E.index+1),te=r(W,1)[0];if(te){var Ne=U.formats(),M=this.quill.getFormat(E.index,1);P=p.default.attributes.diff(Ne,M)||{},N=te.length()}}this.quill.deleteText(E.index,q,l.default.sources.USER),Object.keys(P).length>0&&this.quill.formatLine(E.index+N-1,q,P,l.default.sources.USER)}}function I(E){var O=this.quill.getLines(E),q={};if(O.length>1){var P=O[0].formats(),N=O[O.length-1].formats();q=p.default.attributes.diff(N,P)||{}}this.quill.deleteText(E,l.default.sources.USER),Object.keys(q).length>0&&this.quill.formatLine(E.index,1,q,l.default.sources.USER),this.quill.setSelection(E.index,l.default.sources.SILENT),this.quill.focus()}function k(E,O){var q=this;E.length>0&&this.quill.scroll.deleteAt(E.index,E.length);var P=Object.keys(O.format).reduce(function(N,L){return a.default.query(L,a.default.Scope.BLOCK)&&!Array.isArray(O.format[L])&&(N[L]=O.format[L]),N},{});this.quill.insertText(E.index,`
`,P,l.default.sources.USER),this.quill.setSelection(E.index+1,l.default.sources.SILENT),this.quill.focus(),Object.keys(O.format).forEach(function(N){P[N]==null&&(Array.isArray(O.format[N])||N!=="link"&&q.quill.format(N,O.format[N],l.default.sources.USER))})}function C(E){return{key:b.keys.TAB,shiftKey:!E,format:{"code-block":!0},handler:function(O){var q=a.default.query("code-block"),P=O.index,N=O.length,L=this.quill.scroll.descendant(q,P),U=r(L,2),W=U[0],te=U[1];if(W!=null){var Ne=this.quill.getIndex(W),M=W.newlineIndex(te,!0)+1,F=W.newlineIndex(Ne+te+N),B=W.domNode.textContent.slice(M,F).split(`
`);te=0,B.forEach(function(V,K){E?(W.insertAt(M+te,q.TAB),te+=q.TAB.length,K===0?P+=q.TAB.length:N+=q.TAB.length):V.startsWith(q.TAB)&&(W.deleteAt(M+te,q.TAB.length),te-=q.TAB.length,K===0?P-=q.TAB.length:N-=q.TAB.length),te+=V.length+1}),this.quill.update(l.default.sources.USER),this.quill.setSelection(P,N,l.default.sources.SILENT)}}}}function A(E){return{key:E[0].toUpperCase(),shortKey:!0,handler:function(O,q){this.quill.format(E,!q.format[E],l.default.sources.USER)}}}function S(E){if(typeof E=="string"||typeof E=="number")return S({key:E});if((E===void 0?"undefined":i(E))==="object"&&(E=(0,s.default)(E,!1)),typeof E.key=="string")if(b.keys[E.key.toUpperCase()]!=null)E.key=b.keys[E.key.toUpperCase()];else{if(E.key.length!==1)return null;E.key=E.key.toUpperCase().charCodeAt(0)}return E.shortKey&&(E[y]=E.shortKey,delete E.shortKey),E}b.keys={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},b.DEFAULTS={bindings:{bold:A("bold"),italic:A("italic"),underline:A("underline"),indent:{key:b.keys.TAB,format:["blockquote","indent","list"],handler:function(E,O){if(O.collapsed&&O.offset!==0)return!0;this.quill.format("indent","+1",l.default.sources.USER)}},outdent:{key:b.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],handler:function(E,O){if(O.collapsed&&O.offset!==0)return!0;this.quill.format("indent","-1",l.default.sources.USER)}},"outdent backspace":{key:b.keys.BACKSPACE,collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler:function(E,O){O.format.indent!=null?this.quill.format("indent","-1",l.default.sources.USER):O.format.list!=null&&this.quill.format("list",!1,l.default.sources.USER)}},"indent code-block":C(!0),"outdent code-block":C(!1),"remove tab":{key:b.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,handler:function(E){this.quill.deleteText(E.index-1,1,l.default.sources.USER)}},tab:{key:b.keys.TAB,handler:function(E){this.quill.history.cutoff();var O=new d.default().retain(E.index).delete(E.length).insert("	");this.quill.updateContents(O,l.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(E.index+1,l.default.sources.SILENT)}},"list empty enter":{key:b.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function(E,O){this.quill.format("list",!1,l.default.sources.USER),O.format.indent&&this.quill.format("indent",!1,l.default.sources.USER)}},"checklist enter":{key:b.keys.ENTER,collapsed:!0,format:{list:"checked"},handler:function(E){var O=this.quill.getLine(E.index),q=r(O,2),P=q[0],N=q[1],L=(0,c.default)({},P.formats(),{list:"checked"}),U=new d.default().retain(E.index).insert(`
`,L).retain(P.length()-N-1).retain(1,{list:"unchecked"});this.quill.updateContents(U,l.default.sources.USER),this.quill.setSelection(E.index+1,l.default.sources.SILENT),this.quill.scrollIntoView()}},"header enter":{key:b.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,handler:function(E,O){var q=this.quill.getLine(E.index),P=r(q,2),N=P[0],L=P[1],U=new d.default().retain(E.index).insert(`
`,O.format).retain(N.length()-L-1).retain(1,{header:null});this.quill.updateContents(U,l.default.sources.USER),this.quill.setSelection(E.index+1,l.default.sources.SILENT),this.quill.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler:function(E,O){var q=O.prefix.length,P=this.quill.getLine(E.index),N=r(P,2),L=N[0],U=N[1];if(U>q)return!0;var W=void 0;switch(O.prefix.trim()){case"[]":case"[ ]":W="unchecked";break;case"[x]":W="checked";break;case"-":case"*":W="bullet";break;default:W="ordered"}this.quill.insertText(E.index," ",l.default.sources.USER),this.quill.history.cutoff();var te=new d.default().retain(E.index-U).delete(q+1).retain(L.length()-2-U).retain(1,{list:W});this.quill.updateContents(te,l.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(E.index-q,l.default.sources.SILENT)}},"code exit":{key:b.keys.ENTER,collapsed:!0,format:["code-block"],prefix:/\n\n$/,suffix:/^\s+$/,handler:function(E){var O=this.quill.getLine(E.index),q=r(O,2),P=q[0],N=q[1],L=new d.default().retain(E.index+P.length()-N-2).retain(1,{"code-block":null}).delete(1);this.quill.updateContents(L,l.default.sources.USER)}},"embed left":x(b.keys.LEFT,!1),"embed left shift":x(b.keys.LEFT,!0),"embed right":x(b.keys.RIGHT,!1),"embed right shift":x(b.keys.RIGHT,!0)}},e.default=b,e.SHORTKEY=y},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=function(p,a){if(Array.isArray(p))return p;if(Symbol.iterator in Object(p))return function(l,h){var f=[],m=!0,g=!1,v=void 0;try{for(var y,b=l[Symbol.iterator]();!(m=(y=b.next()).done)&&(f.push(y.value),!h||f.length!==h);m=!0);}catch(x){g=!0,v=x}finally{try{!m&&b.return&&b.return()}finally{if(g)throw v}}return f}(p,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function p(a,l,h){a===null&&(a=Function.prototype);var f=Object.getOwnPropertyDescriptor(a,l);if(f===void 0){var m=Object.getPrototypeOf(a);return m===null?void 0:p(m,l,h)}if("value"in f)return f.value;var g=f.get;return g!==void 0?g.call(h):void 0},n=function(){function p(a,l){for(var h=0;h<l.length;h++){var f=l[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(a,f.key,f)}}return function(a,l,h){return l&&p(a.prototype,l),h&&p(a,h),a}}(),s=c(o(0)),u=c(o(7));function c(p){return p&&p.__esModule?p:{default:p}}var d=function(p){function a(l,h){(function(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")})(this,a);var f=function(m,g){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!g||typeof g!="object"&&typeof g!="function"?m:g}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return f.selection=h,f.textNode=document.createTextNode(a.CONTENTS),f.domNode.appendChild(f.textNode),f._length=0,f}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,p),n(a,null,[{key:"value",value:function(){}}]),n(a,[{key:"detach",value:function(){this.parent!=null&&this.parent.removeChild(this)}},{key:"format",value:function(l,h){if(this._length!==0)return r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"format",this).call(this,l,h);for(var f=this,m=0;f!=null&&f.statics.scope!==s.default.Scope.BLOCK_BLOT;)m+=f.offset(f.parent),f=f.parent;f!=null&&(this._length=a.CONTENTS.length,f.optimize(),f.formatAt(m,a.CONTENTS.length,l,h),this._length=0)}},{key:"index",value:function(l,h){return l===this.textNode?0:r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"index",this).call(this,l,h)}},{key:"length",value:function(){return this._length}},{key:"position",value:function(){return[this.textNode,this.textNode.data.length]}},{key:"remove",value:function(){r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"remove",this).call(this),this.parent=null}},{key:"restore",value:function(){if(!this.selection.composing&&this.parent!=null){var l=this.textNode,h=this.selection.getNativeRange(),f=void 0,m=void 0,g=void 0;if(h!=null&&h.start.node===l&&h.end.node===l){var v=[l,h.start.offset,h.end.offset];f=v[0],m=v[1],g=v[2]}for(;this.domNode.lastChild!=null&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);if(this.textNode.data!==a.CONTENTS){var y=this.textNode.data.split(a.CONTENTS).join("");this.next instanceof u.default?(f=this.next.domNode,this.next.insertAt(0,y),this.textNode.data=a.CONTENTS):(this.textNode.data=y,this.parent.insertBefore(s.default.create(this.textNode),this),this.textNode=document.createTextNode(a.CONTENTS),this.domNode.appendChild(this.textNode))}if(this.remove(),m!=null){var b=[m,g].map(function(w){return Math.max(0,Math.min(f.data.length,w-1))}),x=i(b,2);return m=x[0],g=x[1],{startNode:f,startOffset:m,endNode:f,endOffset:g}}}}},{key:"update",value:function(l,h){var f=this;if(l.some(function(g){return g.type==="characterData"&&g.target===f.textNode})){var m=this.restore();m&&(h.range=m)}}},{key:"value",value:function(){return""}}]),a}(s.default.Embed);d.blotName="cursor",d.className="ql-cursor",d.tagName="span",d.CONTENTS="\uFEFF",e.default=d},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=s(o(0)),r=o(4),n=s(r);function s(p){return p&&p.__esModule?p:{default:p}}function u(p,a){if(!(p instanceof a))throw new TypeError("Cannot call a class as a function")}function c(p,a){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?p:a}var d=function(p){function a(){return u(this,a),c(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,p),a}(i.default.Container);d.allowedChildren=[n.default,r.BlockEmbed,d],e.default=d},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.ColorStyle=e.ColorClass=e.ColorAttributor=void 0;var i,r=function(){function h(f,m){for(var g=0;g<m.length;g++){var v=m[g];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(f,v.key,v)}}return function(f,m,g){return m&&h(f.prototype,m),g&&h(f,g),f}}(),n=function h(f,m,g){f===null&&(f=Function.prototype);var v=Object.getOwnPropertyDescriptor(f,m);if(v===void 0){var y=Object.getPrototypeOf(f);return y===null?void 0:h(y,m,g)}if("value"in v)return v.value;var b=v.get;return b!==void 0?b.call(g):void 0},s=o(0),u=(i=s)&&i.__esModule?i:{default:i};function c(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function d(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}var p=function(h){function f(){return c(this,f),d(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments))}return function(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}(f,h),r(f,[{key:"value",value:function(m){var g=n(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"value",this).call(this,m);return g.startsWith("rgb(")?(g=g.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),"#"+g.split(",").map(function(v){return("00"+parseInt(v).toString(16)).slice(-2)}).join("")):g}}]),f}(u.default.Attributor.Style),a=new u.default.Attributor.Class("color","ql-color",{scope:u.default.Scope.INLINE}),l=new p("color","color",{scope:u.default.Scope.INLINE});e.ColorAttributor=p,e.ColorClass=a,e.ColorStyle=l},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.sanitize=e.default=void 0;var i,r=function(){function a(l,h){for(var f=0;f<h.length;f++){var m=h[f];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(l,m.key,m)}}return function(l,h,f){return h&&a(l.prototype,h),f&&a(l,f),l}}(),n=function a(l,h,f){l===null&&(l=Function.prototype);var m=Object.getOwnPropertyDescriptor(l,h);if(m===void 0){var g=Object.getPrototypeOf(l);return g===null?void 0:a(g,h,f)}if("value"in m)return m.value;var v=m.get;return v!==void 0?v.call(f):void 0},s=o(6);function u(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}function c(a,l){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||typeof l!="object"&&typeof l!="function"?a:l}var d=function(a){function l(){return u(this,l),c(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return function(h,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);h.prototype=Object.create(f&&f.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(h,f):h.__proto__=f)}(l,a),r(l,[{key:"format",value:function(h,f){if(h!==this.statics.blotName||!f)return n(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"format",this).call(this,h,f);f=this.constructor.sanitize(f),this.domNode.setAttribute("href",f)}}],[{key:"create",value:function(h){var f=n(l.__proto__||Object.getPrototypeOf(l),"create",this).call(this,h);return h=this.sanitize(h),f.setAttribute("href",h),f.setAttribute("rel","noopener noreferrer"),f.setAttribute("target","_blank"),f}},{key:"formats",value:function(h){return h.getAttribute("href")}},{key:"sanitize",value:function(h){return p(h,this.PROTOCOL_WHITELIST)?h:this.SANITIZED_URL}}]),l}(((i=s)&&i.__esModule?i:{default:i}).default);function p(a,l){var h=document.createElement("a");h.href=a;var f=h.href.slice(0,h.href.indexOf(":"));return l.indexOf(f)>-1}d.blotName="link",d.tagName="A",d.SANITIZED_URL="about:blank",d.PROTOCOL_WHITELIST=["http","https","mailto","tel"],e.default=d,e.sanitize=p},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r=function(){function a(l,h){for(var f=0;f<h.length;f++){var m=h[f];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(l,m.key,m)}}return function(l,h,f){return h&&a(l.prototype,h),f&&a(l,f),l}}(),n=u(o(23)),s=u(o(107));function u(a){return a&&a.__esModule?a:{default:a}}var c=0;function d(a,l){a.setAttribute(l,a.getAttribute(l)!=="true")}var p=function(){function a(l){var h=this;(function(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")})(this,a),this.select=l,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("mousedown",function(){h.togglePicker()}),this.label.addEventListener("keydown",function(f){switch(f.keyCode){case n.default.keys.ENTER:h.togglePicker();break;case n.default.keys.ESCAPE:h.escape(),f.preventDefault()}}),this.select.addEventListener("change",this.update.bind(this))}return r(a,[{key:"togglePicker",value:function(){this.container.classList.toggle("ql-expanded"),d(this.label,"aria-expanded"),d(this.options,"aria-hidden")}},{key:"buildItem",value:function(l){var h=this,f=document.createElement("span");return f.tabIndex="0",f.setAttribute("role","button"),f.classList.add("ql-picker-item"),l.hasAttribute("value")&&f.setAttribute("data-value",l.getAttribute("value")),l.textContent&&f.setAttribute("data-label",l.textContent),f.addEventListener("click",function(){h.selectItem(f,!0)}),f.addEventListener("keydown",function(m){switch(m.keyCode){case n.default.keys.ENTER:h.selectItem(f,!0),m.preventDefault();break;case n.default.keys.ESCAPE:h.escape(),m.preventDefault()}}),f}},{key:"buildLabel",value:function(){var l=document.createElement("span");return l.classList.add("ql-picker-label"),l.innerHTML=s.default,l.tabIndex="0",l.setAttribute("role","button"),l.setAttribute("aria-expanded","false"),this.container.appendChild(l),l}},{key:"buildOptions",value:function(){var l=this,h=document.createElement("span");h.classList.add("ql-picker-options"),h.setAttribute("aria-hidden","true"),h.tabIndex="-1",h.id="ql-picker-options-"+c,c+=1,this.label.setAttribute("aria-controls",h.id),this.options=h,[].slice.call(this.select.options).forEach(function(f){var m=l.buildItem(f);h.appendChild(m),f.selected===!0&&l.selectItem(m)}),this.container.appendChild(h)}},{key:"buildPicker",value:function(){var l=this;[].slice.call(this.select.attributes).forEach(function(h){l.container.setAttribute(h.name,h.value)}),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}},{key:"escape",value:function(){var l=this;this.close(),setTimeout(function(){return l.label.focus()},1)}},{key:"close",value:function(){this.container.classList.remove("ql-expanded"),this.label.setAttribute("aria-expanded","false"),this.options.setAttribute("aria-hidden","true")}},{key:"selectItem",value:function(l){var h=arguments.length>1&&arguments[1]!==void 0&&arguments[1],f=this.container.querySelector(".ql-selected");if(l!==f&&(f!=null&&f.classList.remove("ql-selected"),l!=null&&(l.classList.add("ql-selected"),this.select.selectedIndex=[].indexOf.call(l.parentNode.children,l),l.hasAttribute("data-value")?this.label.setAttribute("data-value",l.getAttribute("data-value")):this.label.removeAttribute("data-value"),l.hasAttribute("data-label")?this.label.setAttribute("data-label",l.getAttribute("data-label")):this.label.removeAttribute("data-label"),h))){if(typeof Event=="function")this.select.dispatchEvent(new Event("change"));else if((typeof Event=="undefined"?"undefined":i(Event))==="object"){var m=document.createEvent("Event");m.initEvent("change",!0,!0),this.select.dispatchEvent(m)}this.close()}}},{key:"update",value:function(){var l=void 0;if(this.select.selectedIndex>-1){var h=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];l=this.select.options[this.select.selectedIndex],this.selectItem(h)}else this.selectItem(null);var f=l!=null&&l!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",f)}}]),a}();e.default=p},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=v(o(0)),r=v(o(5)),n=o(4),s=v(n),u=v(o(16)),c=v(o(25)),d=v(o(24)),p=v(o(35)),a=v(o(6)),l=v(o(22)),h=v(o(7)),f=v(o(55)),m=v(o(42)),g=v(o(23));function v(y){return y&&y.__esModule?y:{default:y}}r.default.register({"blots/block":s.default,"blots/block/embed":n.BlockEmbed,"blots/break":u.default,"blots/container":c.default,"blots/cursor":d.default,"blots/embed":p.default,"blots/inline":a.default,"blots/scroll":l.default,"blots/text":h.default,"modules/clipboard":f.default,"modules/history":m.default,"modules/keyboard":g.default}),i.default.register(s.default,u.default,d.default,a.default,l.default,h.default),e.default=r.default},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=o(1),r=function(){function n(s){this.domNode=s,this.domNode[i.DATA_KEY]={blot:this}}return Object.defineProperty(n.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),n.create=function(s){if(this.tagName==null)throw new i.ParchmentError("Blot definition missing tagName");var u;return Array.isArray(this.tagName)?(typeof s=="string"&&(s=s.toUpperCase(),parseInt(s).toString()===s&&(s=parseInt(s))),u=typeof s=="number"?document.createElement(this.tagName[s-1]):this.tagName.indexOf(s)>-1?document.createElement(s):document.createElement(this.tagName[0])):u=document.createElement(this.tagName),this.className&&u.classList.add(this.className),u},n.prototype.attach=function(){this.parent!=null&&(this.scroll=this.parent.scroll)},n.prototype.clone=function(){var s=this.domNode.cloneNode(!1);return i.create(s)},n.prototype.detach=function(){this.parent!=null&&this.parent.removeChild(this),delete this.domNode[i.DATA_KEY]},n.prototype.deleteAt=function(s,u){this.isolate(s,u).remove()},n.prototype.formatAt=function(s,u,c,d){var p=this.isolate(s,u);if(i.query(c,i.Scope.BLOT)!=null&&d)p.wrap(c,d);else if(i.query(c,i.Scope.ATTRIBUTE)!=null){var a=i.create(this.statics.scope);p.wrap(a),a.format(c,d)}},n.prototype.insertAt=function(s,u,c){var d=c==null?i.create("text",u):i.create(u,c),p=this.split(s);this.parent.insertBefore(d,p)},n.prototype.insertInto=function(s,u){u===void 0&&(u=null),this.parent!=null&&this.parent.children.remove(this);var c=null;s.children.insertBefore(this,u),u!=null&&(c=u.domNode),this.domNode.parentNode==s.domNode&&this.domNode.nextSibling==c||s.domNode.insertBefore(this.domNode,c),this.parent=s,this.attach()},n.prototype.isolate=function(s,u){var c=this.split(s);return c.split(u),c},n.prototype.length=function(){return 1},n.prototype.offset=function(s){return s===void 0&&(s=this.parent),this.parent==null||this==s?0:this.parent.children.offset(this)+this.parent.offset(s)},n.prototype.optimize=function(s){this.domNode[i.DATA_KEY]!=null&&delete this.domNode[i.DATA_KEY].mutations},n.prototype.remove=function(){this.domNode.parentNode!=null&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},n.prototype.replace=function(s){s.parent!=null&&(s.parent.insertBefore(this,s.next),s.remove())},n.prototype.replaceWith=function(s,u){var c=typeof s=="string"?i.create(s,u):s;return c.replace(this),c},n.prototype.split=function(s,u){return s===0?this:this.next},n.prototype.update=function(s,u){},n.prototype.wrap=function(s,u){var c=typeof s=="string"?i.create(s,u):s;return this.parent!=null&&this.parent.insertBefore(c,this.next),c.appendChild(this),c},n.blotName="abstract",n}();e.default=r},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=o(12),r=o(32),n=o(33),s=o(1),u=function(){function c(d){this.attributes={},this.domNode=d,this.build()}return c.prototype.attribute=function(d,p){p?d.add(this.domNode,p)&&(d.value(this.domNode)!=null?this.attributes[d.attrName]=d:delete this.attributes[d.attrName]):(d.remove(this.domNode),delete this.attributes[d.attrName])},c.prototype.build=function(){var d=this;this.attributes={};var p=i.default.keys(this.domNode),a=r.default.keys(this.domNode),l=n.default.keys(this.domNode);p.concat(a).concat(l).forEach(function(h){var f=s.query(h,s.Scope.ATTRIBUTE);f instanceof i.default&&(d.attributes[f.attrName]=f)})},c.prototype.copy=function(d){var p=this;Object.keys(this.attributes).forEach(function(a){var l=p.attributes[a].value(p.domNode);d.format(a,l)})},c.prototype.move=function(d){var p=this;this.copy(d),Object.keys(this.attributes).forEach(function(a){p.attributes[a].remove(p.domNode)}),this.attributes={}},c.prototype.values=function(){var d=this;return Object.keys(this.attributes).reduce(function(p,a){return p[a]=d.attributes[a].value(d.domNode),p},{})},c}();e.default=u},function(t,e,o){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,c){u.__proto__=c}||function(u,c){for(var d in c)c.hasOwnProperty(d)&&(u[d]=c[d])},function(u,c){function d(){this.constructor=u}i(u,c),u.prototype=c===null?Object.create(c):(d.prototype=c.prototype,new d)});function n(u,c){return(u.getAttribute("class")||"").split(/\s+/).filter(function(d){return d.indexOf(c+"-")===0})}Object.defineProperty(e,"__esModule",{value:!0});var s=function(u){function c(){return u!==null&&u.apply(this,arguments)||this}return r(c,u),c.keys=function(d){return(d.getAttribute("class")||"").split(/\s+/).map(function(p){return p.split("-").slice(0,-1).join("-")})},c.prototype.add=function(d,p){return!!this.canAdd(d,p)&&(this.remove(d),d.classList.add(this.keyName+"-"+p),!0)},c.prototype.remove=function(d){n(d,this.keyName).forEach(function(p){d.classList.remove(p)}),d.classList.length===0&&d.removeAttribute("class")},c.prototype.value=function(d){var p=(n(d,this.keyName)[0]||"").slice(this.keyName.length+1);return this.canAdd(d,p)?p:""},c}(o(12).default);e.default=s},function(t,e,o){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,c){u.__proto__=c}||function(u,c){for(var d in c)c.hasOwnProperty(d)&&(u[d]=c[d])},function(u,c){function d(){this.constructor=u}i(u,c),u.prototype=c===null?Object.create(c):(d.prototype=c.prototype,new d)});function n(u){var c=u.split("-"),d=c.slice(1).map(function(p){return p[0].toUpperCase()+p.slice(1)}).join("");return c[0]+d}Object.defineProperty(e,"__esModule",{value:!0});var s=function(u){function c(){return u!==null&&u.apply(this,arguments)||this}return r(c,u),c.keys=function(d){return(d.getAttribute("style")||"").split(";").map(function(p){return p.split(":")[0].trim()})},c.prototype.add=function(d,p){return!!this.canAdd(d,p)&&(d.style[n(this.keyName)]=p,!0)},c.prototype.remove=function(d){d.style[n(this.keyName)]="",d.getAttribute("style")||d.removeAttribute("style")},c.prototype.value=function(d){var p=d.style[n(this.keyName)];return this.canAdd(d,p)?p:""},c}(o(12).default);e.default=s},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function n(s,u){for(var c=0;c<u.length;c++){var d=u[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(s,d.key,d)}}return function(s,u,c){return u&&n(s.prototype,u),c&&n(s,c),s}}(),r=function(){function n(s,u){(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")})(this,n),this.quill=s,this.options=u,this.modules={}}return i(n,[{key:"init",value:function(){var s=this;Object.keys(this.options.modules).forEach(function(u){s.modules[u]==null&&s.addModule(u)})}},{key:"addModule",value:function(s){var u=this.quill.constructor.import("modules/"+s);return this.modules[s]=new u(this.quill,this.options.modules[s]||{}),this.modules[s]}}]),n}();r.DEFAULTS={modules:{}},r.themes={default:r},e.default=r},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function p(a,l){for(var h=0;h<l.length;h++){var f=l[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(a,f.key,f)}}return function(a,l,h){return l&&p(a.prototype,l),h&&p(a,h),a}}(),r=function p(a,l,h){a===null&&(a=Function.prototype);var f=Object.getOwnPropertyDescriptor(a,l);if(f===void 0){var m=Object.getPrototypeOf(a);return m===null?void 0:p(m,l,h)}if("value"in f)return f.value;var g=f.get;return g!==void 0?g.call(h):void 0},n=u(o(0)),s=u(o(7));function u(p){return p&&p.__esModule?p:{default:p}}var c="\uFEFF",d=function(p){function a(l){(function(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")})(this,a);var h=function(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return h.contentNode=document.createElement("span"),h.contentNode.setAttribute("contenteditable",!1),[].slice.call(h.domNode.childNodes).forEach(function(f){h.contentNode.appendChild(f)}),h.leftGuard=document.createTextNode(c),h.rightGuard=document.createTextNode(c),h.domNode.appendChild(h.leftGuard),h.domNode.appendChild(h.contentNode),h.domNode.appendChild(h.rightGuard),h}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,p),i(a,[{key:"index",value:function(l,h){return l===this.leftGuard?0:l===this.rightGuard?1:r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"index",this).call(this,l,h)}},{key:"restore",value:function(l){var h=void 0,f=void 0,m=l.data.split(c).join("");if(l===this.leftGuard)if(this.prev instanceof s.default){var g=this.prev.length();this.prev.insertAt(g,m),h={startNode:this.prev.domNode,startOffset:g+m.length}}else f=document.createTextNode(m),this.parent.insertBefore(n.default.create(f),this),h={startNode:f,startOffset:m.length};else l===this.rightGuard&&(this.next instanceof s.default?(this.next.insertAt(0,m),h={startNode:this.next.domNode,startOffset:m.length}):(f=document.createTextNode(m),this.parent.insertBefore(n.default.create(f),this.next),h={startNode:f,startOffset:m.length}));return l.data=c,h}},{key:"update",value:function(l,h){var f=this;l.forEach(function(m){if(m.type==="characterData"&&(m.target===f.leftGuard||m.target===f.rightGuard)){var g=f.restore(m.target);g&&(h.range=g)}})}}]),a}(n.default.Embed);e.default=d},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.AlignStyle=e.AlignClass=e.AlignAttribute=void 0;var i,r=o(0),n=(i=r)&&i.__esModule?i:{default:i},s={scope:n.default.Scope.BLOCK,whitelist:["right","center","justify"]},u=new n.default.Attributor.Attribute("align","align",s),c=new n.default.Attributor.Class("align","ql-align",s),d=new n.default.Attributor.Style("align","text-align",s);e.AlignAttribute=u,e.AlignClass=c,e.AlignStyle=d},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.BackgroundStyle=e.BackgroundClass=void 0;var i,r=o(0),n=(i=r)&&i.__esModule?i:{default:i},s=o(26),u=new n.default.Attributor.Class("background","ql-bg",{scope:n.default.Scope.INLINE}),c=new s.ColorAttributor("background","background-color",{scope:n.default.Scope.INLINE});e.BackgroundClass=u,e.BackgroundStyle=c},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.DirectionStyle=e.DirectionClass=e.DirectionAttribute=void 0;var i,r=o(0),n=(i=r)&&i.__esModule?i:{default:i},s={scope:n.default.Scope.BLOCK,whitelist:["rtl"]},u=new n.default.Attributor.Attribute("direction","dir",s),c=new n.default.Attributor.Class("direction","ql-direction",s),d=new n.default.Attributor.Style("direction","direction",s);e.DirectionAttribute=u,e.DirectionClass=c,e.DirectionStyle=d},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.FontClass=e.FontStyle=void 0;var i,r=function(){function f(m,g){for(var v=0;v<g.length;v++){var y=g[v];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}return function(m,g,v){return g&&f(m.prototype,g),v&&f(m,v),m}}(),n=function f(m,g,v){m===null&&(m=Function.prototype);var y=Object.getOwnPropertyDescriptor(m,g);if(y===void 0){var b=Object.getPrototypeOf(m);return b===null?void 0:f(b,g,v)}if("value"in y)return y.value;var x=y.get;return x!==void 0?x.call(v):void 0},s=o(0),u=(i=s)&&i.__esModule?i:{default:i};function c(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")}function d(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}var p={scope:u.default.Scope.INLINE,whitelist:["serif","monospace"]},a=new u.default.Attributor.Class("font","ql-font",p),l=function(f){function m(){return c(this,m),d(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return function(g,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);g.prototype=Object.create(v&&v.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(g,v):g.__proto__=v)}(m,f),r(m,[{key:"value",value:function(g){return n(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"value",this).call(this,g).replace(/["']/g,"")}}]),m}(u.default.Attributor.Style),h=new l("font","font-family",p);e.FontStyle=h,e.FontClass=a},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.SizeStyle=e.SizeClass=void 0;var i,r=o(0),n=(i=r)&&i.__esModule?i:{default:i},s=new n.default.Attributor.Class("size","ql-size",{scope:n.default.Scope.INLINE,whitelist:["small","large","huge"]}),u=new n.default.Attributor.Style("size","font-size",{scope:n.default.Scope.INLINE,whitelist:["10px","18px","32px"]});e.SizeClass=s,e.SizeStyle=u},function(t,e,o){t.exports={align:{"":o(76),center:o(77),right:o(78),justify:o(79)},background:o(80),blockquote:o(81),bold:o(82),clean:o(83),code:o(58),"code-block":o(58),color:o(84),direction:{"":o(85),rtl:o(86)},float:{center:o(87),full:o(88),left:o(89),right:o(90)},formula:o(91),header:{1:o(92),2:o(93)},italic:o(94),image:o(95),indent:{"+1":o(96),"-1":o(97)},link:o(98),list:{ordered:o(99),bullet:o(100),check:o(101)},script:{sub:o(102),super:o(103)},strike:o(104),underline:o(105),video:o(106)}},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.getLastChangeIndex=e.default=void 0;var i=function(){function d(p,a){for(var l=0;l<a.length;l++){var h=a[l];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(p,h.key,h)}}return function(p,a,l){return a&&d(p.prototype,a),l&&d(p,l),p}}(),r=s(o(0)),n=s(o(5));function s(d){return d&&d.__esModule?d:{default:d}}var u=function(d){function p(a,l){(function(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")})(this,p);var h=function(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,a,l));return h.lastRecorded=0,h.ignoreChange=!1,h.clear(),h.quill.on(n.default.events.EDITOR_CHANGE,function(f,m,g,v){f!==n.default.events.TEXT_CHANGE||h.ignoreChange||(h.options.userOnly&&v!==n.default.sources.USER?h.transform(m):h.record(m,g))}),h.quill.keyboard.addBinding({key:"Z",shortKey:!0},h.undo.bind(h)),h.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},h.redo.bind(h)),/Win/i.test(navigator.platform)&&h.quill.keyboard.addBinding({key:"Y",shortKey:!0},h.redo.bind(h)),h}return function(a,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);a.prototype=Object.create(l&&l.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(a,l):a.__proto__=l)}(p,d),i(p,[{key:"change",value:function(a,l){if(this.stack[a].length!==0){var h=this.stack[a].pop();this.stack[l].push(h),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(h[a],n.default.sources.USER),this.ignoreChange=!1;var f=c(h[a]);this.quill.setSelection(f)}}},{key:"clear",value:function(){this.stack={undo:[],redo:[]}}},{key:"cutoff",value:function(){this.lastRecorded=0}},{key:"record",value:function(a,l){if(a.ops.length!==0){this.stack.redo=[];var h=this.quill.getContents().diff(l),f=Date.now();if(this.lastRecorded+this.options.delay>f&&this.stack.undo.length>0){var m=this.stack.undo.pop();h=h.compose(m.undo),a=m.redo.compose(a)}else this.lastRecorded=f;this.stack.undo.push({redo:a,undo:h}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}}},{key:"redo",value:function(){this.change("redo","undo")}},{key:"transform",value:function(a){this.stack.undo.forEach(function(l){l.undo=a.transform(l.undo,!0),l.redo=a.transform(l.redo,!0)}),this.stack.redo.forEach(function(l){l.undo=a.transform(l.undo,!0),l.redo=a.transform(l.redo,!0)})}},{key:"undo",value:function(){this.change("undo","redo")}}]),p}(s(o(9)).default);function c(d){var p=d.reduce(function(l,h){return l+=h.delete||0},0),a=d.length()-p;return function(l){var h=l.ops[l.ops.length-1];return h!=null&&(h.insert!=null?typeof h.insert=="string"&&h.insert.endsWith(`
`):h.attributes!=null&&Object.keys(h.attributes).some(function(f){return r.default.query(f,r.default.Scope.BLOCK)!=null}))}(d)&&(a-=1),a}u.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1},e.default=u,e.getLastChangeIndex=c},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BaseTooltip=void 0;var i=function(){function A(S,E){for(var O=0;O<E.length;O++){var q=E[O];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(S,q.key,q)}}return function(S,E,O){return E&&A(S.prototype,E),O&&A(S,O),S}}(),r=function A(S,E,O){S===null&&(S=Function.prototype);var q=Object.getOwnPropertyDescriptor(S,E);if(q===void 0){var P=Object.getPrototypeOf(S);return P===null?void 0:A(P,E,O)}if("value"in q)return q.value;var N=q.get;return N!==void 0?N.call(O):void 0},n=f(o(3)),s=f(o(2)),u=f(o(8)),c=f(o(23)),d=f(o(34)),p=f(o(59)),a=f(o(60)),l=f(o(28)),h=f(o(61));function f(A){return A&&A.__esModule?A:{default:A}}function m(A,S){if(!(A instanceof S))throw new TypeError("Cannot call a class as a function")}function g(A,S){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!S||typeof S!="object"&&typeof S!="function"?A:S}function v(A,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);A.prototype=Object.create(S&&S.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(A,S):A.__proto__=S)}var y=[!1,"center","right","justify"],b=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],x=[!1,"serif","monospace"],w=["1","2","3",!1],_=["small",!1,"large","huge"],I=function(A){function S(E,O){m(this,S);var q=g(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,E,O));return E.emitter.listenDOM("click",document.body,function P(N){if(!document.body.contains(E.root))return document.body.removeEventListener("click",P);q.tooltip==null||q.tooltip.root.contains(N.target)||document.activeElement===q.tooltip.textbox||q.quill.hasFocus()||q.tooltip.hide(),q.pickers!=null&&q.pickers.forEach(function(L){L.container.contains(N.target)||L.close()})}),q}return v(S,A),i(S,[{key:"addModule",value:function(E){var O=r(S.prototype.__proto__||Object.getPrototypeOf(S.prototype),"addModule",this).call(this,E);return E==="toolbar"&&this.extendToolbar(O),O}},{key:"buildButtons",value:function(E,O){E.forEach(function(q){(q.getAttribute("class")||"").split(/\s+/).forEach(function(P){if(P.startsWith("ql-")&&(P=P.slice(3),O[P]!=null))if(P==="direction")q.innerHTML=O[P][""]+O[P].rtl;else if(typeof O[P]=="string")q.innerHTML=O[P];else{var N=q.value||"";N!=null&&O[P][N]&&(q.innerHTML=O[P][N])}})})}},{key:"buildPickers",value:function(E,O){var q=this;this.pickers=E.map(function(P){if(P.classList.contains("ql-align"))return P.querySelector("option")==null&&C(P,y),new a.default(P,O.align);if(P.classList.contains("ql-background")||P.classList.contains("ql-color")){var N=P.classList.contains("ql-background")?"background":"color";return P.querySelector("option")==null&&C(P,b,N==="background"?"#ffffff":"#000000"),new p.default(P,O[N])}return P.querySelector("option")==null&&(P.classList.contains("ql-font")?C(P,x):P.classList.contains("ql-header")?C(P,w):P.classList.contains("ql-size")&&C(P,_)),new l.default(P)}),this.quill.on(u.default.events.EDITOR_CHANGE,function(){q.pickers.forEach(function(P){P.update()})})}}]),S}(d.default);I.DEFAULTS=(0,n.default)(!0,{},d.default.DEFAULTS,{modules:{toolbar:{handlers:{formula:function(){this.quill.theme.tooltip.edit("formula")},image:function(){var A=this,S=this.container.querySelector("input.ql-image[type=file]");S==null&&((S=document.createElement("input")).setAttribute("type","file"),S.setAttribute("accept","image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),S.classList.add("ql-image"),S.addEventListener("change",function(){if(S.files!=null&&S.files[0]!=null){var E=new FileReader;E.onload=function(O){var q=A.quill.getSelection(!0);A.quill.updateContents(new s.default().retain(q.index).delete(q.length).insert({image:O.target.result}),u.default.sources.USER),A.quill.setSelection(q.index+1,u.default.sources.SILENT),S.value=""},E.readAsDataURL(S.files[0])}}),this.container.appendChild(S)),S.click()},video:function(){this.quill.theme.tooltip.edit("video")}}}}});var k=function(A){function S(E,O){m(this,S);var q=g(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,E,O));return q.textbox=q.root.querySelector('input[type="text"]'),q.listen(),q}return v(S,A),i(S,[{key:"listen",value:function(){var E=this;this.textbox.addEventListener("keydown",function(O){c.default.match(O,"enter")?(E.save(),O.preventDefault()):c.default.match(O,"escape")&&(E.cancel(),O.preventDefault())})}},{key:"cancel",value:function(){this.hide()}},{key:"edit",value:function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"link",O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),O!=null?this.textbox.value=O:E!==this.root.getAttribute("data-mode")&&(this.textbox.value=""),this.position(this.quill.getBounds(this.quill.selection.savedRange)),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute("data-"+E)||""),this.root.setAttribute("data-mode",E)}},{key:"restoreFocus",value:function(){var E=this.quill.scrollingContainer.scrollTop;this.quill.focus(),this.quill.scrollingContainer.scrollTop=E}},{key:"save",value:function(){var E,O,q=this.textbox.value;switch(this.root.getAttribute("data-mode")){case"link":var P=this.quill.root.scrollTop;this.linkRange?(this.quill.formatText(this.linkRange,"link",q,u.default.sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",q,u.default.sources.USER)),this.quill.root.scrollTop=P;break;case"video":O=(E=q).match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||E.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/),q=O?(O[1]||"https")+"://www.youtube.com/embed/"+O[2]+"?showinfo=0":(O=E.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))?(O[1]||"https")+"://player.vimeo.com/video/"+O[2]+"/":E;case"formula":if(!q)break;var N=this.quill.getSelection(!0);if(N!=null){var L=N.index+N.length;this.quill.insertEmbed(L,this.root.getAttribute("data-mode"),q,u.default.sources.USER),this.root.getAttribute("data-mode")==="formula"&&this.quill.insertText(L+1," ",u.default.sources.USER),this.quill.setSelection(L+2,u.default.sources.USER)}}this.textbox.value="",this.hide()}}]),S}(h.default);function C(A,S){var E=arguments.length>2&&arguments[2]!==void 0&&arguments[2];S.forEach(function(O){var q=document.createElement("option");O===E?q.setAttribute("selected","selected"):q.setAttribute("value",O),A.appendChild(q)})}e.BaseTooltip=k,e.default=I},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function r(){this.head=this.tail=null,this.length=0}return r.prototype.append=function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];this.insertBefore(n[0],null),n.length>1&&this.append.apply(this,n.slice(1))},r.prototype.contains=function(n){for(var s,u=this.iterator();s=u();)if(s===n)return!0;return!1},r.prototype.insertBefore=function(n,s){n&&(n.next=s,s!=null?(n.prev=s.prev,s.prev!=null&&(s.prev.next=n),s.prev=n,s===this.head&&(this.head=n)):this.tail!=null?(this.tail.next=n,n.prev=this.tail,this.tail=n):(n.prev=null,this.head=this.tail=n),this.length+=1)},r.prototype.offset=function(n){for(var s=0,u=this.head;u!=null;){if(u===n)return s;s+=u.length(),u=u.next}return-1},r.prototype.remove=function(n){this.contains(n)&&(n.prev!=null&&(n.prev.next=n.next),n.next!=null&&(n.next.prev=n.prev),n===this.head&&(this.head=n.next),n===this.tail&&(this.tail=n.prev),this.length-=1)},r.prototype.iterator=function(n){return n===void 0&&(n=this.head),function(){var s=n;return n!=null&&(n=n.next),s}},r.prototype.find=function(n,s){s===void 0&&(s=!1);for(var u,c=this.iterator();u=c();){var d=u.length();if(n<d||s&&n===d&&(u.next==null||u.next.length()!==0))return[u,n];n-=d}return[null,0]},r.prototype.forEach=function(n){for(var s,u=this.iterator();s=u();)n(s)},r.prototype.forEachAt=function(n,s,u){if(!(s<=0))for(var c,d=this.find(n),p=d[0],a=n-d[1],l=this.iterator(p);(c=l())&&a<n+s;){var h=c.length();n>a?u(c,n-a,Math.min(s,a+h-n)):u(c,0,Math.min(h,n+s-a)),a+=h}},r.prototype.map=function(n){return this.reduce(function(s,u){return s.push(n(u)),s},[])},r.prototype.reduce=function(n,s){for(var u,c=this.iterator();u=c();)s=n(s,u);return s},r}();e.default=i},function(t,e,o){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,p){d.__proto__=p}||function(d,p){for(var a in p)p.hasOwnProperty(a)&&(d[a]=p[a])},function(d,p){function a(){this.constructor=d}i(d,p),d.prototype=p===null?Object.create(p):(a.prototype=p.prototype,new a)});Object.defineProperty(e,"__esModule",{value:!0});var n=o(17),s=o(1),u={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},c=function(d){function p(a){var l=d.call(this,a)||this;return l.scroll=l,l.observer=new MutationObserver(function(h){l.update(h)}),l.observer.observe(l.domNode,u),l.attach(),l}return r(p,d),p.prototype.detach=function(){d.prototype.detach.call(this),this.observer.disconnect()},p.prototype.deleteAt=function(a,l){this.update(),a===0&&l===this.length()?this.children.forEach(function(h){h.remove()}):d.prototype.deleteAt.call(this,a,l)},p.prototype.formatAt=function(a,l,h,f){this.update(),d.prototype.formatAt.call(this,a,l,h,f)},p.prototype.insertAt=function(a,l,h){this.update(),d.prototype.insertAt.call(this,a,l,h)},p.prototype.optimize=function(a,l){var h=this;a===void 0&&(a=[]),l===void 0&&(l={}),d.prototype.optimize.call(this,l);for(var f=[].slice.call(this.observer.takeRecords());f.length>0;)a.push(f.pop());for(var m=function(b,x){x===void 0&&(x=!0),b!=null&&b!==h&&b.domNode.parentNode!=null&&(b.domNode[s.DATA_KEY].mutations==null&&(b.domNode[s.DATA_KEY].mutations=[]),x&&m(b.parent))},g=function(b){b.domNode[s.DATA_KEY]!=null&&b.domNode[s.DATA_KEY].mutations!=null&&(b instanceof n.default&&b.children.forEach(g),b.optimize(l))},v=a,y=0;v.length>0;y+=1){if(y>=100)throw new Error("[Parchment] Maximum optimize iterations reached");for(v.forEach(function(b){var x=s.find(b.target,!0);x!=null&&(x.domNode===b.target&&(b.type==="childList"?(m(s.find(b.previousSibling,!1)),[].forEach.call(b.addedNodes,function(w){var _=s.find(w,!1);m(_,!1),_ instanceof n.default&&_.children.forEach(function(I){m(I,!1)})})):b.type==="attributes"&&m(x.prev)),m(x))}),this.children.forEach(g),f=(v=[].slice.call(this.observer.takeRecords())).slice();f.length>0;)a.push(f.pop())}},p.prototype.update=function(a,l){var h=this;l===void 0&&(l={}),(a=a||this.observer.takeRecords()).map(function(f){var m=s.find(f.target,!0);return m==null?null:m.domNode[s.DATA_KEY].mutations==null?(m.domNode[s.DATA_KEY].mutations=[f],m):(m.domNode[s.DATA_KEY].mutations.push(f),null)}).forEach(function(f){f!=null&&f!==h&&f.domNode[s.DATA_KEY]!=null&&f.update(f.domNode[s.DATA_KEY].mutations||[],l)}),this.domNode[s.DATA_KEY].mutations!=null&&d.prototype.update.call(this,this.domNode[s.DATA_KEY].mutations,l),this.optimize(a,l)},p.blotName="scroll",p.defaultChild="block",p.scope=s.Scope.BLOCK_BLOT,p.tagName="DIV",p}(n.default);e.default=c},function(t,e,o){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var p in d)d.hasOwnProperty(p)&&(c[p]=d[p])},function(c,d){function p(){this.constructor=c}i(c,d),c.prototype=d===null?Object.create(d):(p.prototype=d.prototype,new p)});Object.defineProperty(e,"__esModule",{value:!0});var n=o(18),s=o(1),u=function(c){function d(){return c!==null&&c.apply(this,arguments)||this}return r(d,c),d.formats=function(p){if(p.tagName!==d.tagName)return c.formats.call(this,p)},d.prototype.format=function(p,a){var l=this;p!==this.statics.blotName||a?c.prototype.format.call(this,p,a):(this.children.forEach(function(h){h instanceof n.default||(h=h.wrap(d.blotName,!0)),l.attributes.copy(h)}),this.unwrap())},d.prototype.formatAt=function(p,a,l,h){this.formats()[l]!=null||s.query(l,s.Scope.ATTRIBUTE)?this.isolate(p,a).format(l,h):c.prototype.formatAt.call(this,p,a,l,h)},d.prototype.optimize=function(p){c.prototype.optimize.call(this,p);var a=this.formats();if(Object.keys(a).length===0)return this.unwrap();var l=this.next;l instanceof d&&l.prev===this&&function(h,f){if(Object.keys(h).length!==Object.keys(f).length)return!1;for(var m in h)if(h[m]!==f[m])return!1;return!0}(a,l.formats())&&(l.moveChildren(this),l.remove())},d.blotName="inline",d.scope=s.Scope.INLINE_BLOT,d.tagName="SPAN",d}(n.default);e.default=u},function(t,e,o){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var p in d)d.hasOwnProperty(p)&&(c[p]=d[p])},function(c,d){function p(){this.constructor=c}i(c,d),c.prototype=d===null?Object.create(d):(p.prototype=d.prototype,new p)});Object.defineProperty(e,"__esModule",{value:!0});var n=o(18),s=o(1),u=function(c){function d(){return c!==null&&c.apply(this,arguments)||this}return r(d,c),d.formats=function(p){var a=s.query(d.blotName).tagName;if(p.tagName!==a)return c.formats.call(this,p)},d.prototype.format=function(p,a){s.query(p,s.Scope.BLOCK)!=null&&(p!==this.statics.blotName||a?c.prototype.format.call(this,p,a):this.replaceWith(d.blotName))},d.prototype.formatAt=function(p,a,l,h){s.query(l,s.Scope.BLOCK)!=null?this.format(l,h):c.prototype.formatAt.call(this,p,a,l,h)},d.prototype.insertAt=function(p,a,l){if(l==null||s.query(a,s.Scope.INLINE)!=null)c.prototype.insertAt.call(this,p,a,l);else{var h=this.split(p),f=s.create(a,l);h.parent.insertBefore(f,h)}},d.prototype.update=function(p,a){navigator.userAgent.match(/Trident/)?this.build():c.prototype.update.call(this,p,a)},d.blotName="block",d.scope=s.Scope.BLOCK_BLOT,d.tagName="P",d}(n.default);e.default=u},function(t,e,o){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var c in u)u.hasOwnProperty(c)&&(s[c]=u[c])},function(s,u){function c(){this.constructor=s}i(s,u),s.prototype=u===null?Object.create(u):(c.prototype=u.prototype,new c)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(s){function u(){return s!==null&&s.apply(this,arguments)||this}return r(u,s),u.formats=function(c){},u.prototype.format=function(c,d){s.prototype.formatAt.call(this,0,this.length(),c,d)},u.prototype.formatAt=function(c,d,p,a){c===0&&d===this.length()?this.format(p,a):s.prototype.formatAt.call(this,c,d,p,a)},u.prototype.formats=function(){return this.statics.formats(this.domNode)},u}(o(19).default);e.default=n},function(t,e,o){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var p in d)d.hasOwnProperty(p)&&(c[p]=d[p])},function(c,d){function p(){this.constructor=c}i(c,d),c.prototype=d===null?Object.create(d):(p.prototype=d.prototype,new p)});Object.defineProperty(e,"__esModule",{value:!0});var n=o(19),s=o(1),u=function(c){function d(p){var a=c.call(this,p)||this;return a.text=a.statics.value(a.domNode),a}return r(d,c),d.create=function(p){return document.createTextNode(p)},d.value=function(p){var a=p.data;return a.normalize&&(a=a.normalize()),a},d.prototype.deleteAt=function(p,a){this.domNode.data=this.text=this.text.slice(0,p)+this.text.slice(p+a)},d.prototype.index=function(p,a){return this.domNode===p?a:-1},d.prototype.insertAt=function(p,a,l){l==null?(this.text=this.text.slice(0,p)+a+this.text.slice(p),this.domNode.data=this.text):c.prototype.insertAt.call(this,p,a,l)},d.prototype.length=function(){return this.text.length},d.prototype.optimize=function(p){c.prototype.optimize.call(this,p),this.text=this.statics.value(this.domNode),this.text.length===0?this.remove():this.next instanceof d&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},d.prototype.position=function(p,a){return[this.domNode,p]},d.prototype.split=function(p,a){if(a===void 0&&(a=!1),!a){if(p===0)return this;if(p===this.length())return this.next}var l=s.create(this.domNode.splitText(p));return this.parent.insertBefore(l,this.next),this.text=this.statics.value(this.domNode),l},d.prototype.update=function(p,a){var l=this;p.some(function(h){return h.type==="characterData"&&h.target===l.domNode})&&(this.text=this.statics.value(this.domNode))},d.prototype.value=function(){return this.text},d.blotName="text",d.scope=s.Scope.INLINE_BLOT,d}(n.default);e.default=u},function(t,e,o){var i=document.createElement("div");if(i.classList.toggle("test-class",!1),i.classList.contains("test-class")){var r=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(n,s){return arguments.length>1&&!this.contains(n)==!s?s:r.call(this,n)}}String.prototype.startsWith||(String.prototype.startsWith=function(n,s){return s=s||0,this.substr(s,n.length)===n}),String.prototype.endsWith||(String.prototype.endsWith=function(n,s){var u=this.toString();(typeof s!="number"||!isFinite(s)||Math.floor(s)!==s||s>u.length)&&(s=u.length),s-=n.length;var c=u.indexOf(n,s);return c!==-1&&c===s}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(n){if(this===null)throw new TypeError("Array.prototype.find called on null or undefined");if(typeof n!="function")throw new TypeError("predicate must be a function");for(var s,u=Object(this),c=u.length>>>0,d=arguments[1],p=0;p<c;p++)if(s=u[p],n.call(d,s,p,u))return s}}),document.addEventListener("DOMContentLoaded",function(){document.execCommand("enableObjectResizing",!1,!1),document.execCommand("autoUrlDetect",!1,!1)})},function(t,e){var o=-1;function i(p,a,l){if(p==a)return p?[[0,p]]:[];(l<0||p.length<l)&&(l=null);var h=n(p,a),f=p.substring(0,h);h=s(p=p.substring(h),a=a.substring(h));var m=p.substring(p.length-h),g=function(v,y){var b;if(!v)return[[1,y]];if(!y)return[[o,v]];var x=v.length>y.length?v:y,w=v.length>y.length?y:v,_=x.indexOf(w);if(_!=-1)return b=[[1,x.substring(0,_)],[0,w],[1,x.substring(_+w.length)]],v.length>y.length&&(b[0][0]=b[2][0]=o),b;if(w.length==1)return[[o,v],[1,y]];var I=function(P,N){var L=P.length>N.length?P:N,U=P.length>N.length?N:P;if(L.length<4||2*U.length<L.length)return null;function W(se,pe,Ue){for(var Ae,qt,$e,Se,it=se.substring(Ue,Ue+Math.floor(se.length/4)),Ze=-1,Ct="";(Ze=pe.indexOf(it,Ze+1))!=-1;){var co=n(se.substring(Ue),pe.substring(Ze)),ut=s(se.substring(0,Ue),pe.substring(0,Ze));Ct.length<ut+co&&(Ct=pe.substring(Ze-ut,Ze)+pe.substring(Ze,Ze+co),Ae=se.substring(0,Ue-ut),qt=se.substring(Ue+co),$e=pe.substring(0,Ze-ut),Se=pe.substring(Ze+co))}return 2*Ct.length>=se.length?[Ae,qt,$e,Se,Ct]:null}var te,Ne,M,F,B,V=W(L,U,Math.ceil(L.length/4)),K=W(L,U,Math.ceil(L.length/2));if(!V&&!K)return null;te=K?V&&V[4].length>K[4].length?V:K:V,P.length>N.length?(Ne=te[0],M=te[1],F=te[2],B=te[3]):(F=te[0],B=te[1],Ne=te[2],M=te[3]);var ae=te[4];return[Ne,M,F,B,ae]}(v,y);if(I){var k=I[0],C=I[1],A=I[2],S=I[3],E=I[4],O=i(k,A),q=i(C,S);return O.concat([[0,E]],q)}return function(P,N){for(var L=P.length,U=N.length,W=Math.ceil((L+U)/2),te=W,Ne=2*W,M=new Array(Ne),F=new Array(Ne),B=0;B<Ne;B++)M[B]=-1,F[B]=-1;M[te+1]=0,F[te+1]=0;for(var V=L-U,K=V%2!=0,ae=0,se=0,pe=0,Ue=0,Ae=0;Ae<W;Ae++){for(var qt=-Ae+ae;qt<=Ae-se;qt+=2){for(var $e=te+qt,Se=(ut=qt==-Ae||qt!=Ae&&M[$e-1]<M[$e+1]?M[$e+1]:M[$e-1]+1)-qt;ut<L&&Se<U&&P.charAt(ut)==N.charAt(Se);)ut++,Se++;if(M[$e]=ut,ut>L)se+=2;else if(Se>U)ae+=2;else if(K&&(Ct=te+V-qt)>=0&&Ct<Ne&&F[Ct]!=-1&&ut>=(Ze=L-F[Ct]))return r(P,N,ut,Se)}for(var it=-Ae+pe;it<=Ae-Ue;it+=2){for(var Ze,Ct=te+it,co=(Ze=it==-Ae||it!=Ae&&F[Ct-1]<F[Ct+1]?F[Ct+1]:F[Ct-1]+1)-it;Ze<L&&co<U&&P.charAt(L-Ze-1)==N.charAt(U-co-1);)Ze++,co++;if(F[Ct]=Ze,Ze>L)Ue+=2;else if(co>U)pe+=2;else if(!K){var ut;if(($e=te+V-it)>=0&&$e<Ne&&M[$e]!=-1&&(Se=te+(ut=M[$e])-$e,ut>=(Ze=L-Ze)))return r(P,N,ut,Se)}}}return[[o,P],[1,N]]}(v,y)}(p=p.substring(0,p.length-h),a=a.substring(0,a.length-h));return f&&g.unshift([0,f]),m&&g.push([0,m]),u(g),l!=null&&(g=function(v,y){var b=function(C,A){if(A===0)return[0,C];for(var S=0,E=0;E<C.length;E++){var O=C[E];if(O[0]===o||O[0]===0){var q=S+O[1].length;if(A===q)return[E+1,C];if(A<q){C=C.slice();var P=A-S,N=[O[0],O[1].slice(0,P)],L=[O[0],O[1].slice(P)];return C.splice(E,1,N,L),[E+1,C]}S=q}}throw new Error("cursor_pos is out of bounds!")}(v,y),x=b[1],w=b[0],_=x[w],I=x[w+1];if(_==null||_[0]!==0)return v;if(I!=null&&_[1]+I[1]===I[1]+_[1])return x.splice(w,2,I,_),d(x,w,2);if(I!=null&&I[1].indexOf(_[1])===0){x.splice(w,2,[I[0],_[1]],[0,_[1]]);var k=I[1].slice(_[1].length);return k.length>0&&x.splice(w+2,0,[I[0],k]),d(x,w,3)}return v}(g,l)),g=function(v){for(var y=!1,b=function(I){return I.charCodeAt(0)>=56320&&I.charCodeAt(0)<=57343},x=function(I){return I.charCodeAt(I.length-1)>=55296&&I.charCodeAt(I.length-1)<=56319},w=2;w<v.length;w+=1)v[w-2][0]===0&&x(v[w-2][1])&&v[w-1][0]===o&&b(v[w-1][1])&&v[w][0]===1&&b(v[w][1])&&(y=!0,v[w-1][1]=v[w-2][1].slice(-1)+v[w-1][1],v[w][1]=v[w-2][1].slice(-1)+v[w][1],v[w-2][1]=v[w-2][1].slice(0,-1));if(!y)return v;var _=[];for(w=0;w<v.length;w+=1)v[w][1].length>0&&_.push(v[w]);return _}(g),g}function r(p,a,l,h){var f=p.substring(0,l),m=a.substring(0,h),g=p.substring(l),v=a.substring(h),y=i(f,m),b=i(g,v);return y.concat(b)}function n(p,a){if(!p||!a||p.charAt(0)!=a.charAt(0))return 0;for(var l=0,h=Math.min(p.length,a.length),f=h,m=0;l<f;)p.substring(m,f)==a.substring(m,f)?m=l=f:h=f,f=Math.floor((h-l)/2+l);return f}function s(p,a){if(!p||!a||p.charAt(p.length-1)!=a.charAt(a.length-1))return 0;for(var l=0,h=Math.min(p.length,a.length),f=h,m=0;l<f;)p.substring(p.length-f,p.length-m)==a.substring(a.length-f,a.length-m)?m=l=f:h=f,f=Math.floor((h-l)/2+l);return f}function u(p){p.push([0,""]);for(var a,l=0,h=0,f=0,m="",g="";l<p.length;)switch(p[l][0]){case 1:f++,g+=p[l][1],l++;break;case o:h++,m+=p[l][1],l++;break;case 0:h+f>1?(h!==0&&f!==0&&((a=n(g,m))!==0&&(l-h-f>0&&p[l-h-f-1][0]==0?p[l-h-f-1][1]+=g.substring(0,a):(p.splice(0,0,[0,g.substring(0,a)]),l++),g=g.substring(a),m=m.substring(a)),(a=s(g,m))!==0&&(p[l][1]=g.substring(g.length-a)+p[l][1],g=g.substring(0,g.length-a),m=m.substring(0,m.length-a))),h===0?p.splice(l-f,h+f,[1,g]):f===0?p.splice(l-h,h+f,[o,m]):p.splice(l-h-f,h+f,[o,m],[1,g]),l=l-h-f+(h?1:0)+(f?1:0)+1):l!==0&&p[l-1][0]==0?(p[l-1][1]+=p[l][1],p.splice(l,1)):l++,f=0,h=0,m="",g=""}p[p.length-1][1]===""&&p.pop();var v=!1;for(l=1;l<p.length-1;)p[l-1][0]==0&&p[l+1][0]==0&&(p[l][1].substring(p[l][1].length-p[l-1][1].length)==p[l-1][1]?(p[l][1]=p[l-1][1]+p[l][1].substring(0,p[l][1].length-p[l-1][1].length),p[l+1][1]=p[l-1][1]+p[l+1][1],p.splice(l-1,1),v=!0):p[l][1].substring(0,p[l+1][1].length)==p[l+1][1]&&(p[l-1][1]+=p[l+1][1],p[l][1]=p[l][1].substring(p[l+1][1].length)+p[l+1][1],p.splice(l+1,1),v=!0)),l++;v&&u(p)}var c=i;function d(p,a,l){for(var h=a+l-1;h>=0&&h>=a-1;h--)if(h+1<p.length){var f=p[h],m=p[h+1];f[0]===m[1]&&p.splice(h,2,[f[0],f[1]+m[1]])}return p}c.INSERT=1,c.DELETE=o,c.EQUAL=0,t.exports=c},function(t,e){function o(i){var r=[];for(var n in i)r.push(n);return r}(t.exports=typeof Object.keys=="function"?Object.keys:o).shim=o},function(t,e){var o=function(){return Object.prototype.toString.call(arguments)}()=="[object Arguments]";function i(n){return Object.prototype.toString.call(n)=="[object Arguments]"}function r(n){return n&&typeof n=="object"&&typeof n.length=="number"&&Object.prototype.hasOwnProperty.call(n,"callee")&&!Object.prototype.propertyIsEnumerable.call(n,"callee")||!1}(e=t.exports=o?i:r).supported=i,e.unsupported=r},function(t,e){var o=Object.prototype.hasOwnProperty,i="~";function r(){}function n(u,c,d){this.fn=u,this.context=c,this.once=d||!1}function s(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(i=!1)),s.prototype.eventNames=function(){var u,c,d=[];if(this._eventsCount===0)return d;for(c in u=this._events)o.call(u,c)&&d.push(i?c.slice(1):c);return Object.getOwnPropertySymbols?d.concat(Object.getOwnPropertySymbols(u)):d},s.prototype.listeners=function(u,c){var d=i?i+u:u,p=this._events[d];if(c)return!!p;if(!p)return[];if(p.fn)return[p.fn];for(var a=0,l=p.length,h=new Array(l);a<l;a++)h[a]=p[a].fn;return h},s.prototype.emit=function(u,c,d,p,a,l){var h=i?i+u:u;if(!this._events[h])return!1;var f,m,g=this._events[h],v=arguments.length;if(g.fn){switch(g.once&&this.removeListener(u,g.fn,void 0,!0),v){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,c),!0;case 3:return g.fn.call(g.context,c,d),!0;case 4:return g.fn.call(g.context,c,d,p),!0;case 5:return g.fn.call(g.context,c,d,p,a),!0;case 6:return g.fn.call(g.context,c,d,p,a,l),!0}for(m=1,f=new Array(v-1);m<v;m++)f[m-1]=arguments[m];g.fn.apply(g.context,f)}else{var y,b=g.length;for(m=0;m<b;m++)switch(g[m].once&&this.removeListener(u,g[m].fn,void 0,!0),v){case 1:g[m].fn.call(g[m].context);break;case 2:g[m].fn.call(g[m].context,c);break;case 3:g[m].fn.call(g[m].context,c,d);break;case 4:g[m].fn.call(g[m].context,c,d,p);break;default:if(!f)for(y=1,f=new Array(v-1);y<v;y++)f[y-1]=arguments[y];g[m].fn.apply(g[m].context,f)}}return!0},s.prototype.on=function(u,c,d){var p=new n(c,d||this),a=i?i+u:u;return this._events[a]?this._events[a].fn?this._events[a]=[this._events[a],p]:this._events[a].push(p):(this._events[a]=p,this._eventsCount++),this},s.prototype.once=function(u,c,d){var p=new n(c,d||this,!0),a=i?i+u:u;return this._events[a]?this._events[a].fn?this._events[a]=[this._events[a],p]:this._events[a].push(p):(this._events[a]=p,this._eventsCount++),this},s.prototype.removeListener=function(u,c,d,p){var a=i?i+u:u;if(!this._events[a])return this;if(!c)return--this._eventsCount==0?this._events=new r:delete this._events[a],this;var l=this._events[a];if(l.fn)l.fn!==c||p&&!l.once||d&&l.context!==d||(--this._eventsCount==0?this._events=new r:delete this._events[a]);else{for(var h=0,f=[],m=l.length;h<m;h++)(l[h].fn!==c||p&&!l[h].once||d&&l[h].context!==d)&&f.push(l[h]);f.length?this._events[a]=f.length===1?f[0]:f:--this._eventsCount==0?this._events=new r:delete this._events[a]}return this},s.prototype.removeAllListeners=function(u){var c;return u?(c=i?i+u:u,this._events[c]&&(--this._eventsCount==0?this._events=new r:delete this._events[c])):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prototype.setMaxListeners=function(){return this},s.prefixed=i,s.EventEmitter=s,t!==void 0&&(t.exports=s)},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.matchText=e.matchSpacing=e.matchNewline=e.matchBlot=e.matchAttributor=e.default=void 0;var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},r=function(M,F){if(Array.isArray(M))return M;if(Symbol.iterator in Object(M))return function(B,V){var K=[],ae=!0,se=!1,pe=void 0;try{for(var Ue,Ae=B[Symbol.iterator]();!(ae=(Ue=Ae.next()).done)&&(K.push(Ue.value),!V||K.length!==V);ae=!0);}catch(qt){se=!0,pe=qt}finally{try{!ae&&Ae.return&&Ae.return()}finally{if(se)throw pe}}return K}(M,F);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function M(F,B){for(var V=0;V<B.length;V++){var K=B[V];K.enumerable=K.enumerable||!1,K.configurable=!0,"value"in K&&(K.writable=!0),Object.defineProperty(F,K.key,K)}}return function(F,B,V){return B&&M(F.prototype,B),V&&M(F,V),F}}(),s=b(o(3)),u=b(o(2)),c=b(o(0)),d=b(o(5)),p=b(o(10)),a=b(o(9)),l=o(36),h=o(37),f=b(o(13)),m=o(26),g=o(38),v=o(39),y=o(40);function b(M){return M&&M.__esModule?M:{default:M}}function x(M,F,B){return F in M?Object.defineProperty(M,F,{value:B,enumerable:!0,configurable:!0,writable:!0}):M[F]=B,M}var w=(0,p.default)("quill:clipboard"),_="__ql-matcher",I=[[Node.TEXT_NODE,Ne],[Node.TEXT_NODE,W],["br",function(M,F){return O(F,`
`)||F.insert(`
`),F}],[Node.ELEMENT_NODE,W],[Node.ELEMENT_NODE,U],[Node.ELEMENT_NODE,te],[Node.ELEMENT_NODE,L],[Node.ELEMENT_NODE,function(M,F){var B={},V=M.style||{};return V.fontStyle&&E(M).fontStyle==="italic"&&(B.italic=!0),V.fontWeight&&(E(M).fontWeight.startsWith("bold")||parseInt(E(M).fontWeight)>=700)&&(B.bold=!0),Object.keys(B).length>0&&(F=S(F,B)),parseFloat(V.textIndent||0)>0&&(F=new u.default().insert("	").concat(F)),F}],["li",function(M,F){var B=c.default.query(M);if(B==null||B.blotName!=="list-item"||!O(F,`
`))return F;for(var V=-1,K=M.parentNode;!K.classList.contains("ql-clipboard");)(c.default.query(K)||{}).blotName==="list"&&(V+=1),K=K.parentNode;return V<=0?F:F.compose(new u.default().retain(F.length()-1).retain(1,{indent:V}))}],["b",N.bind(N,"bold")],["i",N.bind(N,"italic")],["style",function(){return new u.default}]],k=[l.AlignAttribute,g.DirectionAttribute].reduce(function(M,F){return M[F.keyName]=F,M},{}),C=[l.AlignStyle,h.BackgroundStyle,m.ColorStyle,g.DirectionStyle,v.FontStyle,y.SizeStyle].reduce(function(M,F){return M[F.keyName]=F,M},{}),A=function(M){function F(B,V){(function(ae,se){if(!(ae instanceof se))throw new TypeError("Cannot call a class as a function")})(this,F);var K=function(ae,se){if(!ae)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!se||typeof se!="object"&&typeof se!="function"?ae:se}(this,(F.__proto__||Object.getPrototypeOf(F)).call(this,B,V));return K.quill.root.addEventListener("paste",K.onPaste.bind(K)),K.container=K.quill.addContainer("ql-clipboard"),K.container.setAttribute("contenteditable",!0),K.container.setAttribute("tabindex",-1),K.matchers=[],I.concat(K.options.matchers).forEach(function(ae){var se=r(ae,2),pe=se[0],Ue=se[1];(V.matchVisual||Ue!==te)&&K.addMatcher(pe,Ue)}),K}return function(B,V){if(typeof V!="function"&&V!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof V);B.prototype=Object.create(V&&V.prototype,{constructor:{value:B,enumerable:!1,writable:!0,configurable:!0}}),V&&(Object.setPrototypeOf?Object.setPrototypeOf(B,V):B.__proto__=V)}(F,M),n(F,[{key:"addMatcher",value:function(B,V){this.matchers.push([B,V])}},{key:"convert",value:function(B){if(typeof B=="string")return this.container.innerHTML=B.replace(/\>\r?\n +\</g,"><"),this.convert();var V=this.quill.getFormat(this.quill.selection.savedRange.index);if(V[f.default.blotName]){var K=this.container.innerText;return this.container.innerHTML="",new u.default().insert(K,x({},f.default.blotName,V[f.default.blotName]))}var ae=this.prepareMatching(),se=r(ae,2),pe=se[0],Ue=se[1],Ae=P(this.container,pe,Ue);return O(Ae,`
`)&&Ae.ops[Ae.ops.length-1].attributes==null&&(Ae=Ae.compose(new u.default().retain(Ae.length()-1).delete(1))),w.log("convert",this.container.innerHTML,Ae),this.container.innerHTML="",Ae}},{key:"dangerouslyPasteHTML",value:function(B,V){var K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:d.default.sources.API;if(typeof B=="string")this.quill.setContents(this.convert(B),V),this.quill.setSelection(0,d.default.sources.SILENT);else{var ae=this.convert(V);this.quill.updateContents(new u.default().retain(B).concat(ae),K),this.quill.setSelection(B+ae.length(),d.default.sources.SILENT)}}},{key:"onPaste",value:function(B){var V=this;if(!B.defaultPrevented&&this.quill.isEnabled()){var K=this.quill.getSelection(),ae=new u.default().retain(K.index),se=this.quill.scrollingContainer.scrollTop;this.container.focus(),this.quill.selection.update(d.default.sources.SILENT),setTimeout(function(){ae=ae.concat(V.convert()).delete(K.length),V.quill.updateContents(ae,d.default.sources.USER),V.quill.setSelection(ae.length()-K.length,d.default.sources.SILENT),V.quill.scrollingContainer.scrollTop=se,V.quill.focus()},1)}}},{key:"prepareMatching",value:function(){var B=this,V=[],K=[];return this.matchers.forEach(function(ae){var se=r(ae,2),pe=se[0],Ue=se[1];switch(pe){case Node.TEXT_NODE:K.push(Ue);break;case Node.ELEMENT_NODE:V.push(Ue);break;default:[].forEach.call(B.container.querySelectorAll(pe),function(Ae){Ae[_]=Ae[_]||[],Ae[_].push(Ue)})}}),[V,K]}}]),F}(a.default);function S(M,F,B){return(F===void 0?"undefined":i(F))==="object"?Object.keys(F).reduce(function(V,K){return S(V,K,F[K])},M):M.reduce(function(V,K){return K.attributes&&K.attributes[F]?V.push(K):V.insert(K.insert,(0,s.default)({},x({},F,B),K.attributes))},new u.default)}function E(M){if(M.nodeType!==Node.ELEMENT_NODE)return{};var F="__ql-computed-style";return M[F]||(M[F]=window.getComputedStyle(M))}function O(M,F){for(var B="",V=M.ops.length-1;V>=0&&B.length<F.length;--V){var K=M.ops[V];if(typeof K.insert!="string")break;B=K.insert+B}return B.slice(-1*F.length)===F}function q(M){if(M.childNodes.length===0)return!1;var F=E(M);return["block","list-item"].indexOf(F.display)>-1}function P(M,F,B){return M.nodeType===M.TEXT_NODE?B.reduce(function(V,K){return K(M,V)},new u.default):M.nodeType===M.ELEMENT_NODE?[].reduce.call(M.childNodes||[],function(V,K){var ae=P(K,F,B);return K.nodeType===M.ELEMENT_NODE&&(ae=F.reduce(function(se,pe){return pe(K,se)},ae),ae=(K[_]||[]).reduce(function(se,pe){return pe(K,se)},ae)),V.concat(ae)},new u.default):new u.default}function N(M,F,B){return S(B,M,!0)}function L(M,F){var B=c.default.Attributor.Attribute.keys(M),V=c.default.Attributor.Class.keys(M),K=c.default.Attributor.Style.keys(M),ae={};return B.concat(V).concat(K).forEach(function(se){var pe=c.default.query(se,c.default.Scope.ATTRIBUTE);pe!=null&&(ae[pe.attrName]=pe.value(M),ae[pe.attrName])||((pe=k[se])==null||pe.attrName!==se&&pe.keyName!==se||(ae[pe.attrName]=pe.value(M)||void 0),(pe=C[se])==null||pe.attrName!==se&&pe.keyName!==se||(pe=C[se],ae[pe.attrName]=pe.value(M)||void 0))}),Object.keys(ae).length>0&&(F=S(F,ae)),F}function U(M,F){var B=c.default.query(M);if(B==null)return F;if(B.prototype instanceof c.default.Embed){var V={},K=B.value(M);K!=null&&(V[B.blotName]=K,F=new u.default().insert(V,B.formats(M)))}else typeof B.formats=="function"&&(F=S(F,B.blotName,B.formats(M)));return F}function W(M,F){return O(F,`
`)||(q(M)||F.length()>0&&M.nextSibling&&q(M.nextSibling))&&F.insert(`
`),F}function te(M,F){if(q(M)&&M.nextElementSibling!=null&&!O(F,`

`)){var B=M.offsetHeight+parseFloat(E(M).marginTop)+parseFloat(E(M).marginBottom);M.nextElementSibling.offsetTop>M.offsetTop+1.5*B&&F.insert(`
`)}return F}function Ne(M,F){var B=M.data;if(M.parentNode.tagName==="O:P")return F.insert(B.trim());if(B.trim().length===0&&M.parentNode.classList.contains("ql-clipboard"))return F;if(!E(M.parentNode).whiteSpace.startsWith("pre")){var V=function(K,ae){return(ae=ae.replace(/[^\u00a0]/g,"")).length<1&&K?" ":ae};B=(B=B.replace(/\r\n/g," ").replace(/\n/g," ")).replace(/\s\s+/g,V.bind(V,!0)),(M.previousSibling==null&&q(M.parentNode)||M.previousSibling!=null&&q(M.previousSibling))&&(B=B.replace(/^\s+/,V.bind(V,!1))),(M.nextSibling==null&&q(M.parentNode)||M.nextSibling!=null&&q(M.nextSibling))&&(B=B.replace(/\s+$/,V.bind(V,!1)))}return F.insert(B)}A.DEFAULTS={matchers:[],matchVisual:!0},e.default=A,e.matchAttributor=L,e.matchBlot=U,e.matchNewline=W,e.matchSpacing=te,e.matchText=Ne},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function p(a,l){for(var h=0;h<l.length;h++){var f=l[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(a,f.key,f)}}return function(a,l,h){return l&&p(a.prototype,l),h&&p(a,h),a}}(),n=function p(a,l,h){a===null&&(a=Function.prototype);var f=Object.getOwnPropertyDescriptor(a,l);if(f===void 0){var m=Object.getPrototypeOf(a);return m===null?void 0:p(m,l,h)}if("value"in f)return f.value;var g=f.get;return g!==void 0?g.call(h):void 0},s=o(6);function u(p,a){if(!(p instanceof a))throw new TypeError("Cannot call a class as a function")}function c(p,a){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?p:a}var d=function(p){function a(){return u(this,a),c(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,p),r(a,[{key:"optimize",value:function(l){n(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"optimize",this).call(this,l),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}],[{key:"create",value:function(){return n(a.__proto__||Object.getPrototypeOf(a),"create",this).call(this)}},{key:"formats",value:function(){return!0}}]),a}(((i=s)&&i.__esModule?i:{default:i}).default);d.blotName="bold",d.tagName=["STRONG","B"],e.default=d},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.addControls=e.default=void 0;var i=function(g,v){if(Array.isArray(g))return g;if(Symbol.iterator in Object(g))return function(y,b){var x=[],w=!0,_=!1,I=void 0;try{for(var k,C=y[Symbol.iterator]();!(w=(k=C.next()).done)&&(x.push(k.value),!b||x.length!==b);w=!0);}catch(A){_=!0,I=A}finally{try{!w&&C.return&&C.return()}finally{if(_)throw I}}return x}(g,v);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function g(v,y){for(var b=0;b<y.length;b++){var x=y[b];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(v,x.key,x)}}return function(v,y,b){return y&&g(v.prototype,y),b&&g(v,b),v}}(),n=p(o(2)),s=p(o(0)),u=p(o(5)),c=p(o(10)),d=p(o(9));function p(g){return g&&g.__esModule?g:{default:g}}function a(g,v){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!v||typeof v!="object"&&typeof v!="function"?g:v}var l=(0,c.default)("quill:toolbar"),h=function(g){function v(y,b){(function(I,k){if(!(I instanceof k))throw new TypeError("Cannot call a class as a function")})(this,v);var x,w=a(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,y,b));if(Array.isArray(w.options.container)){var _=document.createElement("div");m(_,w.options.container),y.container.parentNode.insertBefore(_,y.container),w.container=_}else typeof w.options.container=="string"?w.container=document.querySelector(w.options.container):w.container=w.options.container;return w.container instanceof HTMLElement?(w.container.classList.add("ql-toolbar"),w.controls=[],w.handlers={},Object.keys(w.options.handlers).forEach(function(I){w.addHandler(I,w.options.handlers[I])}),[].forEach.call(w.container.querySelectorAll("button, select"),function(I){w.attach(I)}),w.quill.on(u.default.events.EDITOR_CHANGE,function(I,k){I===u.default.events.SELECTION_CHANGE&&w.update(k)}),w.quill.on(u.default.events.SCROLL_OPTIMIZE,function(){var I=w.quill.selection.getRange(),k=i(I,1)[0];w.update(k)}),w):(x=l.error("Container required for toolbar",w.options),a(w,x))}return function(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(y,b):y.__proto__=b)}(v,g),r(v,[{key:"addHandler",value:function(y,b){this.handlers[y]=b}},{key:"attach",value:function(y){var b=this,x=[].find.call(y.classList,function(_){return _.indexOf("ql-")===0});if(x){if(x=x.slice(3),y.tagName==="BUTTON"&&y.setAttribute("type","button"),this.handlers[x]==null){if(this.quill.scroll.whitelist!=null&&this.quill.scroll.whitelist[x]==null)return void l.warn("ignoring attaching to disabled format",x,y);if(s.default.query(x)==null)return void l.warn("ignoring attaching to nonexistent format",x,y)}var w=y.tagName==="SELECT"?"change":"click";y.addEventListener(w,function(_){var I=void 0;if(y.tagName==="SELECT"){if(y.selectedIndex<0)return;var k=y.options[y.selectedIndex];I=!k.hasAttribute("selected")&&(k.value||!1)}else I=!y.classList.contains("ql-active")&&(y.value||!y.hasAttribute("value")),_.preventDefault();b.quill.focus();var C=b.quill.selection.getRange(),A=i(C,1)[0];if(b.handlers[x]!=null)b.handlers[x].call(b,I);else if(s.default.query(x).prototype instanceof s.default.Embed){if(!(I=prompt("Enter "+x)))return;b.quill.updateContents(new n.default().retain(A.index).delete(A.length).insert(function(S,E,O){return E in S?Object.defineProperty(S,E,{value:O,enumerable:!0,configurable:!0,writable:!0}):S[E]=O,S}({},x,I)),u.default.sources.USER)}else b.quill.format(x,I,u.default.sources.USER);b.update(A)}),this.controls.push([x,y])}}},{key:"update",value:function(y){var b=y==null?{}:this.quill.getFormat(y);this.controls.forEach(function(x){var w=i(x,2),_=w[0],I=w[1];if(I.tagName==="SELECT"){var k=void 0;if(y==null)k=null;else if(b[_]==null)k=I.querySelector("option[selected]");else if(!Array.isArray(b[_])){var C=b[_];typeof C=="string"&&(C=C.replace(/\"/g,'\\"')),k=I.querySelector('option[value="'+C+'"]')}k==null?(I.value="",I.selectedIndex=-1):k.selected=!0}else if(y==null)I.classList.remove("ql-active");else if(I.hasAttribute("value")){var A=b[_]===I.getAttribute("value")||b[_]!=null&&b[_].toString()===I.getAttribute("value")||b[_]==null&&!I.getAttribute("value");I.classList.toggle("ql-active",A)}else I.classList.toggle("ql-active",b[_]!=null)})}}]),v}(d.default);function f(g,v,y){var b=document.createElement("button");b.setAttribute("type","button"),b.classList.add("ql-"+v),y!=null&&(b.value=y),g.appendChild(b)}function m(g,v){Array.isArray(v[0])||(v=[v]),v.forEach(function(y){var b=document.createElement("span");b.classList.add("ql-formats"),y.forEach(function(x){if(typeof x=="string")f(b,x);else{var w=Object.keys(x)[0],_=x[w];Array.isArray(_)?function(I,k,C){var A=document.createElement("select");A.classList.add("ql-"+k),C.forEach(function(S){var E=document.createElement("option");S!==!1?E.setAttribute("value",S):E.setAttribute("selected","selected"),A.appendChild(E)}),I.appendChild(A)}(b,w,_):f(b,w,_)}}),g.appendChild(b)})}h.DEFAULTS={},h.DEFAULTS={container:null,handlers:{clean:function(){var g=this,v=this.quill.getSelection();if(v!=null)if(v.length==0){var y=this.quill.getFormat();Object.keys(y).forEach(function(b){s.default.query(b,s.default.Scope.INLINE)!=null&&g.quill.format(b,!1)})}else this.quill.removeFormat(v,u.default.sources.USER)},direction:function(g){var v=this.quill.getFormat().align;g==="rtl"&&v==null?this.quill.format("align","right",u.default.sources.USER):g||v!=="right"||this.quill.format("align",!1,u.default.sources.USER),this.quill.format("direction",g,u.default.sources.USER)},indent:function(g){var v=this.quill.getSelection(),y=this.quill.getFormat(v),b=parseInt(y.indent||0);if(g==="+1"||g==="-1"){var x=g==="+1"?1:-1;y.direction==="rtl"&&(x*=-1),this.quill.format("indent",b+x,u.default.sources.USER)}},link:function(g){g===!0&&(g=prompt("Enter link URL:")),this.quill.format("link",g,u.default.sources.USER)},list:function(g){var v=this.quill.getSelection(),y=this.quill.getFormat(v);g==="check"?y.list==="checked"||y.list==="unchecked"?this.quill.format("list",!1,u.default.sources.USER):this.quill.format("list","unchecked",u.default.sources.USER):this.quill.format("list",g,u.default.sources.USER)}}},e.default=h,e.addControls=m},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function c(d,p){for(var a=0;a<p.length;a++){var l=p[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(d,l.key,l)}}return function(d,p,a){return p&&c(d.prototype,p),a&&c(d,a),d}}(),n=function c(d,p,a){d===null&&(d=Function.prototype);var l=Object.getOwnPropertyDescriptor(d,p);if(l===void 0){var h=Object.getPrototypeOf(d);return h===null?void 0:c(h,p,a)}if("value"in l)return l.value;var f=l.get;return f!==void 0?f.call(a):void 0},s=o(28),u=function(c){function d(p,a){(function(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")})(this,d);var l=function(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,p));return l.label.innerHTML=a,l.container.classList.add("ql-color-picker"),[].slice.call(l.container.querySelectorAll(".ql-picker-item"),0,7).forEach(function(h){h.classList.add("ql-primary")}),l}return function(p,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);p.prototype=Object.create(a&&a.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(p,a):p.__proto__=a)}(d,c),r(d,[{key:"buildItem",value:function(p){var a=n(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"buildItem",this).call(this,p);return a.style.backgroundColor=p.getAttribute("value")||"",a}},{key:"selectItem",value:function(p,a){n(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"selectItem",this).call(this,p,a);var l=this.label.querySelector(".ql-color-label"),h=p&&p.getAttribute("data-value")||"";l&&(l.tagName==="line"?l.style.stroke=h:l.style.fill=h)}}]),d}(((i=s)&&i.__esModule?i:{default:i}).default);e.default=u},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function c(d,p){for(var a=0;a<p.length;a++){var l=p[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(d,l.key,l)}}return function(d,p,a){return p&&c(d.prototype,p),a&&c(d,a),d}}(),n=function c(d,p,a){d===null&&(d=Function.prototype);var l=Object.getOwnPropertyDescriptor(d,p);if(l===void 0){var h=Object.getPrototypeOf(d);return h===null?void 0:c(h,p,a)}if("value"in l)return l.value;var f=l.get;return f!==void 0?f.call(a):void 0},s=o(28),u=function(c){function d(p,a){(function(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")})(this,d);var l=function(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,p));return l.container.classList.add("ql-icon-picker"),[].forEach.call(l.container.querySelectorAll(".ql-picker-item"),function(h){h.innerHTML=a[h.getAttribute("data-value")||""]}),l.defaultItem=l.container.querySelector(".ql-selected"),l.selectItem(l.defaultItem),l}return function(p,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);p.prototype=Object.create(a&&a.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(p,a):p.__proto__=a)}(d,c),r(d,[{key:"selectItem",value:function(p,a){n(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"selectItem",this).call(this,p,a),p=p||this.defaultItem,this.label.innerHTML=p.innerHTML}}]),d}(((i=s)&&i.__esModule?i:{default:i}).default);e.default=u},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function n(s,u){for(var c=0;c<u.length;c++){var d=u[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(s,d.key,d)}}return function(s,u,c){return u&&n(s.prototype,u),c&&n(s,c),s}}(),r=function(){function n(s,u){var c=this;(function(d,p){if(!(d instanceof p))throw new TypeError("Cannot call a class as a function")})(this,n),this.quill=s,this.boundsContainer=u||document.body,this.root=s.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE,this.quill.root===this.quill.scrollingContainer&&this.quill.root.addEventListener("scroll",function(){c.root.style.marginTop=-1*c.quill.root.scrollTop+"px"}),this.hide()}return i(n,[{key:"hide",value:function(){this.root.classList.add("ql-hidden")}},{key:"position",value:function(s){var u=s.left+s.width/2-this.root.offsetWidth/2,c=s.bottom+this.quill.root.scrollTop;this.root.style.left=u+"px",this.root.style.top=c+"px",this.root.classList.remove("ql-flip");var d=this.boundsContainer.getBoundingClientRect(),p=this.root.getBoundingClientRect(),a=0;if(p.right>d.right&&(a=d.right-p.right,this.root.style.left=u+a+"px"),p.left<d.left&&(a=d.left-p.left,this.root.style.left=u+a+"px"),p.bottom>d.bottom){var l=p.bottom-p.top,h=s.bottom-s.top+l;this.root.style.top=c-h+"px",this.root.classList.add("ql-flip")}return a}},{key:"show",value:function(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}}]),n}();e.default=r},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=function(x,w){if(Array.isArray(x))return x;if(Symbol.iterator in Object(x))return function(_,I){var k=[],C=!0,A=!1,S=void 0;try{for(var E,O=_[Symbol.iterator]();!(C=(E=O.next()).done)&&(k.push(E.value),!I||k.length!==I);C=!0);}catch(q){A=!0,S=q}finally{try{!C&&O.return&&O.return()}finally{if(A)throw S}}return k}(x,w);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function x(w,_,I){w===null&&(w=Function.prototype);var k=Object.getOwnPropertyDescriptor(w,_);if(k===void 0){var C=Object.getPrototypeOf(w);return C===null?void 0:x(C,_,I)}if("value"in k)return k.value;var A=k.get;return A!==void 0?A.call(I):void 0},n=function(){function x(w,_){for(var I=0;I<_.length;I++){var k=_[I];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(w,k.key,k)}}return function(w,_,I){return _&&x(w.prototype,_),I&&x(w,I),w}}(),s=h(o(3)),u=h(o(8)),c=o(43),d=h(c),p=h(o(27)),a=o(15),l=h(o(41));function h(x){return x&&x.__esModule?x:{default:x}}function f(x,w){if(!(x instanceof w))throw new TypeError("Cannot call a class as a function")}function m(x,w){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!w||typeof w!="object"&&typeof w!="function"?x:w}function g(x,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof w);x.prototype=Object.create(w&&w.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),w&&(Object.setPrototypeOf?Object.setPrototypeOf(x,w):x.__proto__=w)}var v=[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"]],y=function(x){function w(_,I){f(this,w),I.modules.toolbar!=null&&I.modules.toolbar.container==null&&(I.modules.toolbar.container=v);var k=m(this,(w.__proto__||Object.getPrototypeOf(w)).call(this,_,I));return k.quill.container.classList.add("ql-snow"),k}return g(w,x),n(w,[{key:"extendToolbar",value:function(_){_.container.classList.add("ql-snow"),this.buildButtons([].slice.call(_.container.querySelectorAll("button")),l.default),this.buildPickers([].slice.call(_.container.querySelectorAll("select")),l.default),this.tooltip=new b(this.quill,this.options.bounds),_.container.querySelector(".ql-link")&&this.quill.keyboard.addBinding({key:"K",shortKey:!0},function(I,k){_.handlers.link.call(_,!k.format.link)})}}]),w}(d.default);y.DEFAULTS=(0,s.default)(!0,{},d.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(x){if(x){var w=this.quill.getSelection();if(w==null||w.length==0)return;var _=this.quill.getText(w);/^\S+@\S+\.\S+$/.test(_)&&_.indexOf("mailto:")!==0&&(_="mailto:"+_),this.quill.theme.tooltip.edit("link",_)}else this.quill.format("link",!1)}}}}});var b=function(x){function w(_,I){f(this,w);var k=m(this,(w.__proto__||Object.getPrototypeOf(w)).call(this,_,I));return k.preview=k.root.querySelector("a.ql-preview"),k}return g(w,x),n(w,[{key:"listen",value:function(){var _=this;r(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"listen",this).call(this),this.root.querySelector("a.ql-action").addEventListener("click",function(I){_.root.classList.contains("ql-editing")?_.save():_.edit("link",_.preview.textContent),I.preventDefault()}),this.root.querySelector("a.ql-remove").addEventListener("click",function(I){if(_.linkRange!=null){var k=_.linkRange;_.restoreFocus(),_.quill.formatText(k,"link",!1,u.default.sources.USER),delete _.linkRange}I.preventDefault(),_.hide()}),this.quill.on(u.default.events.SELECTION_CHANGE,function(I,k,C){if(I!=null){if(I.length===0&&C===u.default.sources.USER){var A=_.quill.scroll.descendant(p.default,I.index),S=i(A,2),E=S[0],O=S[1];if(E!=null){_.linkRange=new a.Range(I.index-O,E.length());var q=p.default.formats(E.domNode);return _.preview.textContent=q,_.preview.setAttribute("href",q),_.show(),void _.position(_.quill.getBounds(_.linkRange))}}else delete _.linkRange;_.hide()}})}},{key:"show",value:function(){r(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"show",this).call(this),this.root.removeAttribute("data-mode")}}]),w}(c.BaseTooltip);b.TEMPLATE=['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-action"></a>','<a class="ql-remove"></a>'].join(""),e.default=y},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i=W(o(29)),r=o(36),n=o(38),s=o(64),u=W(o(65)),c=W(o(66)),d=o(67),p=W(d),a=o(37),l=o(26),h=o(39),f=o(40),m=W(o(56)),g=W(o(68)),v=W(o(27)),y=W(o(69)),b=W(o(70)),x=W(o(71)),w=W(o(72)),_=W(o(73)),I=o(13),k=W(I),C=W(o(74)),A=W(o(75)),S=W(o(57)),E=W(o(41)),O=W(o(28)),q=W(o(59)),P=W(o(60)),N=W(o(61)),L=W(o(108)),U=W(o(62));function W(te){return te&&te.__esModule?te:{default:te}}i.default.register({"attributors/attribute/direction":n.DirectionAttribute,"attributors/class/align":r.AlignClass,"attributors/class/background":a.BackgroundClass,"attributors/class/color":l.ColorClass,"attributors/class/direction":n.DirectionClass,"attributors/class/font":h.FontClass,"attributors/class/size":f.SizeClass,"attributors/style/align":r.AlignStyle,"attributors/style/background":a.BackgroundStyle,"attributors/style/color":l.ColorStyle,"attributors/style/direction":n.DirectionStyle,"attributors/style/font":h.FontStyle,"attributors/style/size":f.SizeStyle},!0),i.default.register({"formats/align":r.AlignClass,"formats/direction":n.DirectionClass,"formats/indent":s.IndentClass,"formats/background":a.BackgroundStyle,"formats/color":l.ColorStyle,"formats/font":h.FontClass,"formats/size":f.SizeClass,"formats/blockquote":u.default,"formats/code-block":k.default,"formats/header":c.default,"formats/list":p.default,"formats/bold":m.default,"formats/code":I.Code,"formats/italic":g.default,"formats/link":v.default,"formats/script":y.default,"formats/strike":b.default,"formats/underline":x.default,"formats/image":w.default,"formats/video":_.default,"formats/list/item":d.ListItem,"modules/formula":C.default,"modules/syntax":A.default,"modules/toolbar":S.default,"themes/bubble":L.default,"themes/snow":U.default,"ui/icons":E.default,"ui/picker":O.default,"ui/icon-picker":P.default,"ui/color-picker":q.default,"ui/tooltip":N.default},!0),e.default=i.default},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.IndentClass=void 0;var i,r=function(){function l(h,f){for(var m=0;m<f.length;m++){var g=f[m];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(h,g.key,g)}}return function(h,f,m){return f&&l(h.prototype,f),m&&l(h,m),h}}(),n=function l(h,f,m){h===null&&(h=Function.prototype);var g=Object.getOwnPropertyDescriptor(h,f);if(g===void 0){var v=Object.getPrototypeOf(h);return v===null?void 0:l(v,f,m)}if("value"in g)return g.value;var y=g.get;return y!==void 0?y.call(m):void 0},s=o(0),u=(i=s)&&i.__esModule?i:{default:i};function c(l,h){if(!(l instanceof h))throw new TypeError("Cannot call a class as a function")}function d(l,h){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!h||typeof h!="object"&&typeof h!="function"?l:h}var p=function(l){function h(){return c(this,h),d(this,(h.__proto__||Object.getPrototypeOf(h)).apply(this,arguments))}return function(f,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);f.prototype=Object.create(m&&m.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(f,m):f.__proto__=m)}(h,l),r(h,[{key:"add",value:function(f,m){if(m==="+1"||m==="-1"){var g=this.value(f)||0;m=m==="+1"?g+1:g-1}return m===0?(this.remove(f),!0):n(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"add",this).call(this,f,m)}},{key:"canAdd",value:function(f,m){return n(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"canAdd",this).call(this,f,m)||n(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"canAdd",this).call(this,f,parseInt(m))}},{key:"value",value:function(f){return parseInt(n(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"value",this).call(this,f))||void 0}}]),h}(u.default.Attributor.Class),a=new p("indent","ql-indent",{scope:u.default.Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});e.IndentClass=a},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i,r=o(4);function n(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}function s(c,d){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?c:d}var u=function(c){function d(){return n(this,d),s(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return function(p,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);p.prototype=Object.create(a&&a.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(p,a):p.__proto__=a)}(d,c),d}(((i=r)&&i.__esModule?i:{default:i}).default);u.blotName="blockquote",u.tagName="blockquote",e.default=u},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function d(p,a){for(var l=0;l<a.length;l++){var h=a[l];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(p,h.key,h)}}return function(p,a,l){return a&&d(p.prototype,a),l&&d(p,l),p}}(),n=o(4);function s(d,p){if(!(d instanceof p))throw new TypeError("Cannot call a class as a function")}function u(d,p){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!p||typeof p!="object"&&typeof p!="function"?d:p}var c=function(d){function p(){return s(this,p),u(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return function(a,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);a.prototype=Object.create(l&&l.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(a,l):a.__proto__=l)}(p,d),r(p,null,[{key:"formats",value:function(a){return this.tagName.indexOf(a.tagName)+1}}]),p}(((i=n)&&i.__esModule?i:{default:i}).default);c.blotName="header",c.tagName=["H1","H2","H3","H4","H5","H6"],e.default=c},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ListItem=void 0;var i=function(){function f(m,g){for(var v=0;v<g.length;v++){var y=g[v];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}return function(m,g,v){return g&&f(m.prototype,g),v&&f(m,v),m}}(),r=function f(m,g,v){m===null&&(m=Function.prototype);var y=Object.getOwnPropertyDescriptor(m,g);if(y===void 0){var b=Object.getPrototypeOf(m);return b===null?void 0:f(b,g,v)}if("value"in y)return y.value;var x=y.get;return x!==void 0?x.call(v):void 0},n=c(o(0)),s=c(o(4)),u=c(o(25));function c(f){return f&&f.__esModule?f:{default:f}}function d(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")}function p(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}function a(f,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);f.prototype=Object.create(m&&m.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(f,m):f.__proto__=m)}var l=function(f){function m(){return d(this,m),p(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return a(m,f),i(m,[{key:"format",value:function(g,v){g!==h.blotName||v?r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"format",this).call(this,g,v):this.replaceWith(n.default.create(this.statics.scope))}},{key:"remove",value:function(){this.prev==null&&this.next==null?this.parent.remove():r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"remove",this).call(this)}},{key:"replaceWith",value:function(g,v){return this.parent.isolate(this.offset(this.parent),this.length()),g===this.parent.statics.blotName?(this.parent.replaceWith(g,v),this):(this.parent.unwrap(),r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"replaceWith",this).call(this,g,v))}}],[{key:"formats",value:function(g){return g.tagName===this.tagName?void 0:r(m.__proto__||Object.getPrototypeOf(m),"formats",this).call(this,g)}}]),m}(s.default);l.blotName="list-item",l.tagName="LI";var h=function(f){function m(g){d(this,m);var v=p(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,g)),y=function(b){if(b.target.parentNode===g){var x=v.statics.formats(g),w=n.default.find(b.target);x==="checked"?w.format("list","unchecked"):x==="unchecked"&&w.format("list","checked")}};return g.addEventListener("touchstart",y),g.addEventListener("mousedown",y),v}return a(m,f),i(m,null,[{key:"create",value:function(g){var v=g==="ordered"?"OL":"UL",y=r(m.__proto__||Object.getPrototypeOf(m),"create",this).call(this,v);return g!=="checked"&&g!=="unchecked"||y.setAttribute("data-checked",g==="checked"),y}},{key:"formats",value:function(g){return g.tagName==="OL"?"ordered":g.tagName==="UL"?g.hasAttribute("data-checked")?g.getAttribute("data-checked")==="true"?"checked":"unchecked":"bullet":void 0}}]),i(m,[{key:"format",value:function(g,v){this.children.length>0&&this.children.tail.format(g,v)}},{key:"formats",value:function(){return g={},v=this.statics.blotName,y=this.statics.formats(this.domNode),v in g?Object.defineProperty(g,v,{value:y,enumerable:!0,configurable:!0,writable:!0}):g[v]=y,g;var g,v,y}},{key:"insertBefore",value:function(g,v){if(g instanceof l)r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"insertBefore",this).call(this,g,v);else{var y=v==null?this.length():v.offset(this),b=this.split(y);b.parent.insertBefore(g,b)}}},{key:"optimize",value:function(g){r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"optimize",this).call(this,g);var v=this.next;v!=null&&v.prev===this&&v.statics.blotName===this.statics.blotName&&v.domNode.tagName===this.domNode.tagName&&v.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(v.moveChildren(this),v.remove())}},{key:"replace",value:function(g){if(g.statics.blotName!==this.statics.blotName){var v=n.default.create(this.statics.defaultChild);g.moveChildren(v),this.appendChild(v)}r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"replace",this).call(this,g)}}]),m}(u.default);h.blotName="list",h.scope=n.default.Scope.BLOCK_BLOT,h.tagName=["OL","UL"],h.defaultChild="list-item",h.allowedChildren=[l],e.ListItem=l,e.default=h},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i,r=o(56);function n(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}function s(c,d){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?c:d}var u=function(c){function d(){return n(this,d),s(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return function(p,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);p.prototype=Object.create(a&&a.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(p,a):p.__proto__=a)}(d,c),d}(((i=r)&&i.__esModule?i:{default:i}).default);u.blotName="italic",u.tagName=["EM","I"],e.default=u},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function p(a,l){for(var h=0;h<l.length;h++){var f=l[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(a,f.key,f)}}return function(a,l,h){return l&&p(a.prototype,l),h&&p(a,h),a}}(),n=function p(a,l,h){a===null&&(a=Function.prototype);var f=Object.getOwnPropertyDescriptor(a,l);if(f===void 0){var m=Object.getPrototypeOf(a);return m===null?void 0:p(m,l,h)}if("value"in f)return f.value;var g=f.get;return g!==void 0?g.call(h):void 0},s=o(6);function u(p,a){if(!(p instanceof a))throw new TypeError("Cannot call a class as a function")}function c(p,a){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?p:a}var d=function(p){function a(){return u(this,a),c(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,p),r(a,null,[{key:"create",value:function(l){return l==="super"?document.createElement("sup"):l==="sub"?document.createElement("sub"):n(a.__proto__||Object.getPrototypeOf(a),"create",this).call(this,l)}},{key:"formats",value:function(l){return l.tagName==="SUB"?"sub":l.tagName==="SUP"?"super":void 0}}]),a}(((i=s)&&i.__esModule?i:{default:i}).default);d.blotName="script",d.tagName=["SUB","SUP"],e.default=d},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i,r=o(6);function n(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}function s(c,d){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?c:d}var u=function(c){function d(){return n(this,d),s(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return function(p,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);p.prototype=Object.create(a&&a.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(p,a):p.__proto__=a)}(d,c),d}(((i=r)&&i.__esModule?i:{default:i}).default);u.blotName="strike",u.tagName="S",e.default=u},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i,r=o(6);function n(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}function s(c,d){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?c:d}var u=function(c){function d(){return n(this,d),s(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return function(p,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);p.prototype=Object.create(a&&a.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(p,a):p.__proto__=a)}(d,c),d}(((i=r)&&i.__esModule?i:{default:i}).default);u.blotName="underline",u.tagName="U",e.default=u},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function h(f,m){for(var g=0;g<m.length;g++){var v=m[g];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(f,v.key,v)}}return function(f,m,g){return m&&h(f.prototype,m),g&&h(f,g),f}}(),n=function h(f,m,g){f===null&&(f=Function.prototype);var v=Object.getOwnPropertyDescriptor(f,m);if(v===void 0){var y=Object.getPrototypeOf(f);return y===null?void 0:h(y,m,g)}if("value"in v)return v.value;var b=v.get;return b!==void 0?b.call(g):void 0},s=o(0),u=(i=s)&&i.__esModule?i:{default:i},c=o(27);function d(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function p(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}var a=["alt","height","width"],l=function(h){function f(){return d(this,f),p(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments))}return function(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}(f,h),r(f,[{key:"format",value:function(m,g){a.indexOf(m)>-1?g?this.domNode.setAttribute(m,g):this.domNode.removeAttribute(m):n(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"format",this).call(this,m,g)}}],[{key:"create",value:function(m){var g=n(f.__proto__||Object.getPrototypeOf(f),"create",this).call(this,m);return typeof m=="string"&&g.setAttribute("src",this.sanitize(m)),g}},{key:"formats",value:function(m){return a.reduce(function(g,v){return m.hasAttribute(v)&&(g[v]=m.getAttribute(v)),g},{})}},{key:"match",value:function(m){return/\.(jpe?g|gif|png)$/.test(m)||/^data:image\/.+;base64/.test(m)}},{key:"sanitize",value:function(m){return(0,c.sanitize)(m,["http","https","data"])?m:"//:0"}},{key:"value",value:function(m){return m.getAttribute("src")}}]),f}(u.default.Embed);l.blotName="image",l.tagName="IMG",e.default=l},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function h(f,m){for(var g=0;g<m.length;g++){var v=m[g];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(f,v.key,v)}}return function(f,m,g){return m&&h(f.prototype,m),g&&h(f,g),f}}(),n=function h(f,m,g){f===null&&(f=Function.prototype);var v=Object.getOwnPropertyDescriptor(f,m);if(v===void 0){var y=Object.getPrototypeOf(f);return y===null?void 0:h(y,m,g)}if("value"in v)return v.value;var b=v.get;return b!==void 0?b.call(g):void 0},s=o(4),u=o(27),c=(i=u)&&i.__esModule?i:{default:i};function d(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function p(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}var a=["height","width"],l=function(h){function f(){return d(this,f),p(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments))}return function(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}(f,h),r(f,[{key:"format",value:function(m,g){a.indexOf(m)>-1?g?this.domNode.setAttribute(m,g):this.domNode.removeAttribute(m):n(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"format",this).call(this,m,g)}}],[{key:"create",value:function(m){var g=n(f.__proto__||Object.getPrototypeOf(f),"create",this).call(this,m);return g.setAttribute("frameborder","0"),g.setAttribute("allowfullscreen",!0),g.setAttribute("src",this.sanitize(m)),g}},{key:"formats",value:function(m){return a.reduce(function(g,v){return m.hasAttribute(v)&&(g[v]=m.getAttribute(v)),g},{})}},{key:"sanitize",value:function(m){return c.default.sanitize(m)}},{key:"value",value:function(m){return m.getAttribute("src")}}]),f}(s.BlockEmbed);l.blotName="video",l.className="ql-video",l.tagName="IFRAME",e.default=l},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.FormulaBlot=void 0;var i=function(){function f(m,g){for(var v=0;v<g.length;v++){var y=g[v];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}return function(m,g,v){return g&&f(m.prototype,g),v&&f(m,v),m}}(),r=function f(m,g,v){m===null&&(m=Function.prototype);var y=Object.getOwnPropertyDescriptor(m,g);if(y===void 0){var b=Object.getPrototypeOf(m);return b===null?void 0:f(b,g,v)}if("value"in y)return y.value;var x=y.get;return x!==void 0?x.call(v):void 0},n=c(o(35)),s=c(o(5)),u=c(o(9));function c(f){return f&&f.__esModule?f:{default:f}}function d(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")}function p(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}function a(f,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);f.prototype=Object.create(m&&m.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(f,m):f.__proto__=m)}var l=function(f){function m(){return d(this,m),p(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return a(m,f),i(m,null,[{key:"create",value:function(g){var v=r(m.__proto__||Object.getPrototypeOf(m),"create",this).call(this,g);return typeof g=="string"&&(window.katex.render(g,v,{throwOnError:!1,errorColor:"#f00"}),v.setAttribute("data-value",g)),v}},{key:"value",value:function(g){return g.getAttribute("data-value")}}]),m}(n.default);l.blotName="formula",l.className="ql-formula",l.tagName="SPAN";var h=function(f){function m(){d(this,m);var g=p(this,(m.__proto__||Object.getPrototypeOf(m)).call(this));if(window.katex==null)throw new Error("Formula module requires KaTeX.");return g}return a(m,f),i(m,null,[{key:"register",value:function(){s.default.register(l,!0)}}]),m}(u.default);e.FormulaBlot=l,e.default=h},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.CodeToken=e.CodeBlock=void 0;var i=function(){function m(g,v){for(var y=0;y<v.length;y++){var b=v[y];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(g,b.key,b)}}return function(g,v,y){return v&&m(g.prototype,v),y&&m(g,y),g}}(),r=function m(g,v,y){g===null&&(g=Function.prototype);var b=Object.getOwnPropertyDescriptor(g,v);if(b===void 0){var x=Object.getPrototypeOf(g);return x===null?void 0:m(x,v,y)}if("value"in b)return b.value;var w=b.get;return w!==void 0?w.call(y):void 0},n=c(o(0)),s=c(o(5)),u=c(o(9));function c(m){return m&&m.__esModule?m:{default:m}}function d(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")}function p(m,g){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!g||typeof g!="object"&&typeof g!="function"?m:g}function a(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}var l=function(m){function g(){return d(this,g),p(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}return a(g,m),i(g,[{key:"replaceWith",value:function(v){this.domNode.textContent=this.domNode.textContent,this.attach(),r(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"replaceWith",this).call(this,v)}},{key:"highlight",value:function(v){var y=this.domNode.textContent;this.cachedText!==y&&((y.trim().length>0||this.cachedText==null)&&(this.domNode.innerHTML=v(y),this.domNode.normalize(),this.attach()),this.cachedText=y)}}]),g}(c(o(13)).default);l.className="ql-syntax";var h=new n.default.Attributor.Class("token","hljs",{scope:n.default.Scope.INLINE}),f=function(m){function g(v,y){d(this,g);var b=p(this,(g.__proto__||Object.getPrototypeOf(g)).call(this,v,y));if(typeof b.options.highlight!="function")throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");var x=null;return b.quill.on(s.default.events.SCROLL_OPTIMIZE,function(){clearTimeout(x),x=setTimeout(function(){b.highlight(),x=null},b.options.interval)}),b.highlight(),b}return a(g,m),i(g,null,[{key:"register",value:function(){s.default.register(h,!0),s.default.register(l,!0)}}]),i(g,[{key:"highlight",value:function(){var v=this;if(!this.quill.selection.composing){this.quill.update(s.default.sources.USER);var y=this.quill.getSelection();this.quill.scroll.descendants(l).forEach(function(b){b.highlight(v.options.highlight)}),this.quill.update(s.default.sources.SILENT),y!=null&&this.quill.setSelection(y,s.default.sources.SILENT)}}}]),g}(u.default);f.DEFAULTS={highlight:window.hljs==null?null:function(m){return window.hljs.highlightAuto(m).value},interval:1e3},e.CodeBlock=l,e.CodeToken=h,e.default=f},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'},function(t,e){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'},function(t,e){t.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'},function(t,e){t.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'},function(t,e){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BubbleTooltip=void 0;var i=function y(b,x,w){b===null&&(b=Function.prototype);var _=Object.getOwnPropertyDescriptor(b,x);if(_===void 0){var I=Object.getPrototypeOf(b);return I===null?void 0:y(I,x,w)}if("value"in _)return _.value;var k=_.get;return k!==void 0?k.call(w):void 0},r=function(){function y(b,x){for(var w=0;w<x.length;w++){var _=x[w];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(b,_.key,_)}}return function(b,x,w){return x&&y(b.prototype,x),w&&y(b,w),b}}(),n=a(o(3)),s=a(o(8)),u=o(43),c=a(u),d=o(15),p=a(o(41));function a(y){return y&&y.__esModule?y:{default:y}}function l(y,b){if(!(y instanceof b))throw new TypeError("Cannot call a class as a function")}function h(y,b){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||typeof b!="object"&&typeof b!="function"?y:b}function f(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(y,b):y.__proto__=b)}var m=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]],g=function(y){function b(x,w){l(this,b),w.modules.toolbar!=null&&w.modules.toolbar.container==null&&(w.modules.toolbar.container=m);var _=h(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,x,w));return _.quill.container.classList.add("ql-bubble"),_}return f(b,y),r(b,[{key:"extendToolbar",value:function(x){this.tooltip=new v(this.quill,this.options.bounds),this.tooltip.root.appendChild(x.container),this.buildButtons([].slice.call(x.container.querySelectorAll("button")),p.default),this.buildPickers([].slice.call(x.container.querySelectorAll("select")),p.default)}}]),b}(c.default);g.DEFAULTS=(0,n.default)(!0,{},c.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(y){y?this.quill.theme.tooltip.edit():this.quill.format("link",!1)}}}}});var v=function(y){function b(x,w){l(this,b);var _=h(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,x,w));return _.quill.on(s.default.events.EDITOR_CHANGE,function(I,k,C,A){if(I===s.default.events.SELECTION_CHANGE)if(k!=null&&k.length>0&&A===s.default.sources.USER){_.show(),_.root.style.left="0px",_.root.style.width="",_.root.style.width=_.root.offsetWidth+"px";var S=_.quill.getLines(k.index,k.length);if(S.length===1)_.position(_.quill.getBounds(k));else{var E=S[S.length-1],O=_.quill.getIndex(E),q=Math.min(E.length()-1,k.index+k.length-O),P=_.quill.getBounds(new d.Range(O,q));_.position(P)}}else document.activeElement!==_.textbox&&_.quill.hasFocus()&&_.hide()}),_}return f(b,y),r(b,[{key:"listen",value:function(){var x=this;i(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"listen",this).call(this),this.root.querySelector(".ql-close").addEventListener("click",function(){x.root.classList.remove("ql-editing")}),this.quill.on(s.default.events.SCROLL_OPTIMIZE,function(){setTimeout(function(){if(!x.root.classList.contains("ql-hidden")){var w=x.quill.getSelection();w!=null&&x.position(x.quill.getBounds(w))}},1)})}},{key:"cancel",value:function(){this.show()}},{key:"position",value:function(x){var w=i(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"position",this).call(this,x),_=this.root.querySelector(".ql-tooltip-arrow");if(_.style.marginLeft="",w===0)return w;_.style.marginLeft=-1*w-_.offsetWidth/2+"px"}}]),b}(u.BaseTooltip);v.TEMPLATE=['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join(""),e.BubbleTooltip=v,e.default=g},function(t,e,o){t.exports=o(63)}]).default},typeof exports=="object"&&typeof module=="object"?module.exports=Rr():typeof define=="function"&&define.amd?define([],Rr):typeof exports=="object"?exports.Quill=Rr():dc.Quill=Rr();var Qs,Zs,ll=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,cl=Symbol(),pc=new Map,xd=class{constructor(t,e){if(this._$cssResult$=!0,e!==cl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=pc.get(this.cssText);return ll&&t===void 0&&(pc.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},wd=t=>new xd(typeof t=="string"?t:t+"",cl),Qe=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((i,r,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return new xd(o,cl)},hc=ll?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(const i of e.cssRules)o+=i.cssText;return wd(o)})(t):t,fc=window.trustedTypes,im=fc?fc.emptyScript:"",mc=window.reactiveElementPolyfillSupport,Ca={toAttribute(t,e){switch(e){case Boolean:t=t?im:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},_d=(t,e)=>e!==t&&(e==e||t==t),Xs={attribute:!0,type:String,converter:Ca,reflect:!1,hasChanged:_d},nr=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const i=this._$Eh(o,e);i!==void 0&&(this._$Eu.set(i,o),t.push(i))}),t}static createProperty(t,e=Xs){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Xs}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of o)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)e.unshift(hc(i))}else t!==void 0&&e.push(hc(t));return e}static _$Eh(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return o=e,i=this.constructor.elementStyles,ll?o.adoptedStyleSheets=i.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):i.forEach(r=>{const n=document.createElement("style"),s=window.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,o.appendChild(n)}),e;var o,i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=Xs){var i,r;const n=this.constructor._$Eh(t,o);if(n!==void 0&&o.reflect===!0){const s=((r=(i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&r!==void 0?r:Ca.toAttribute)(e,o.type);this._$Ei=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Ei=null}}_$AK(t,e){var o,i,r;const n=this.constructor,s=n._$Eu.get(t);if(s!==void 0&&this._$Ei!==s){const u=n.getPropertyOptions(s),c=u.converter,d=(r=(i=(o=c)===null||o===void 0?void 0:o.fromAttribute)!==null&&i!==void 0?i:typeof c=="function"?c:null)!==null&&r!==void 0?r:Ca.fromAttribute;this._$Ei=s,this[s]=d(e,u.type),this._$Ei=null}}requestUpdate(t,e,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||_d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,r)=>this[r]=i),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(o)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,o)=>this._$ES(o,this[o],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}};nr.finalized=!0,nr.elementProperties=new Map,nr.elementStyles=[],nr.shadowRootOptions={mode:"open"},mc==null||mc({ReactiveElement:nr}),((Qs=globalThis.reactiveElementVersions)!==null&&Qs!==void 0?Qs:globalThis.reactiveElementVersions=[]).push("1.2.3");var vr=globalThis.trustedTypes,gc=vr?vr.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ko=`lit$${(Math.random()+"").slice(9)}$`,Ad="?"+Ko,rm=`<${Ad}>`,br=document,dn=(t="")=>br.createComment(t),pn=t=>t===null||typeof t!="object"&&typeof t!="function",vc=Array.isArray,Lr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bc=/-->/g,yc=/>/g,gi=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,xc=/'/g,wc=/"/g,_c=/^(?:script|style|textarea|title)$/i,ye=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),Ft=Symbol.for("lit-noChange"),He=Symbol.for("lit-nothing"),Ac=new WeakMap,pr=br.createTreeWalker(br,129,null,!1),ts=class{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let r=0,n=0;const s=t.length-1,u=this.parts,[c,d]=((p,a)=>{const l=p.length-1,h=[];let f,m=a===2?"<svg>":"",g=Lr;for(let y=0;y<l;y++){const b=p[y];let x,w,_=-1,I=0;for(;I<b.length&&(g.lastIndex=I,w=g.exec(b),w!==null);)I=g.lastIndex,g===Lr?w[1]==="!--"?g=bc:w[1]!==void 0?g=yc:w[2]!==void 0?(_c.test(w[2])&&(f=RegExp("</"+w[2],"g")),g=gi):w[3]!==void 0&&(g=gi):g===gi?w[0]===">"?(g=f!=null?f:Lr,_=-1):w[1]===void 0?_=-2:(_=g.lastIndex-w[2].length,x=w[1],g=w[3]===void 0?gi:w[3]==='"'?wc:xc):g===wc||g===xc?g=gi:g===bc||g===yc?g=Lr:(g=gi,f=void 0);const k=g===gi&&p[y+1].startsWith("/>")?" ":"";m+=g===Lr?b+rm:_>=0?(h.push(x),b.slice(0,_)+"$lit$"+b.slice(_)+Ko+k):b+Ko+(_===-2?(h.push(void 0),y):k)}const v=m+(p[l]||"<?>")+(a===2?"</svg>":"");if(!Array.isArray(p)||!p.hasOwnProperty("raw"))throw Error("invalid template strings array");return[gc!==void 0?gc.createHTML(v):v,h]})(t,e);if(this.el=ts.createElement(c,o),pr.currentNode=this.el.content,e===2){const p=this.el.content,a=p.firstChild;a.remove(),p.append(...a.childNodes)}for(;(i=pr.nextNode())!==null&&u.length<s;){if(i.nodeType===1){if(i.hasAttributes()){const p=[];for(const a of i.getAttributeNames())if(a.endsWith("$lit$")||a.startsWith(Ko)){const l=d[n++];if(p.push(a),l!==void 0){const h=i.getAttribute(l.toLowerCase()+"$lit$").split(Ko),f=/([.?@])?(.*)/.exec(l);u.push({type:1,index:r,name:f[2],strings:h,ctor:f[1]==="."?nm:f[1]==="?"?am:f[1]==="@"?lm:xs})}else u.push({type:6,index:r})}for(const a of p)i.removeAttribute(a)}if(_c.test(i.tagName)){const p=i.textContent.split(Ko),a=p.length-1;if(a>0){i.textContent=vr?vr.emptyScript:"";for(let l=0;l<a;l++)i.append(p[l],dn()),pr.nextNode(),u.push({type:2,index:++r});i.append(p[a],dn())}}}else if(i.nodeType===8)if(i.data===Ad)u.push({type:2,index:r});else{let p=-1;for(;(p=i.data.indexOf(Ko,p+1))!==-1;)u.push({type:7,index:r}),p+=Ko.length-1}r++}}static createElement(t,e){const o=br.createElement("template");return o.innerHTML=t,o}};function yr(t,e,o=t,i){var r,n,s,u;if(e===Ft)return e;let c=i!==void 0?(r=o._$Cl)===null||r===void 0?void 0:r[i]:o._$Cu;const d=pn(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==d&&((n=c==null?void 0:c._$AO)===null||n===void 0||n.call(c,!1),d===void 0?c=void 0:(c=new d(t),c._$AT(t,o,i)),i!==void 0?((s=(u=o)._$Cl)!==null&&s!==void 0?s:u._$Cl=[])[i]=c:o._$Cu=c),c!==void 0&&(e=yr(t,c._$AS(t,e.values),c,i)),e}var Ys,Js,os=class{constructor(t,e,o,i){var r;this.type=2,this._$AH=He,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cg=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=yr(this,t,e),pn(t)?t===He||t==null||t===""?(this._$AH!==He&&this._$AR(),this._$AH=He):t!==this._$AH&&t!==Ft&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):(o=>{var i;return vc(o)||typeof((i=o)===null||i===void 0?void 0:i[Symbol.iterator])=="function"})(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==He&&pn(this._$AH)?this._$AA.nextSibling.data=t:this.S(br.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ts.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(o);else{const n=new class{constructor(u,c){this.v=[],this._$AN=void 0,this._$AD=u,this._$AM=c}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(u){var c;const{el:{content:d},parts:p}=this._$AD,a=((c=u==null?void 0:u.creationScope)!==null&&c!==void 0?c:br).importNode(d,!0);pr.currentNode=a;let l=pr.nextNode(),h=0,f=0,m=p[0];for(;m!==void 0;){if(h===m.index){let g;m.type===2?g=new os(l,l.nextSibling,this,u):m.type===1?g=new m.ctor(l,m.name,m.strings,this,u):m.type===6&&(g=new cm(l,this,u)),this.v.push(g),m=p[++f]}h!==(m==null?void 0:m.index)&&(l=pr.nextNode(),h++)}return a}m(u){let c=0;for(const d of this.v)d!==void 0&&(d.strings!==void 0?(d._$AI(u,d,c),c+=d.strings.length-2):d._$AI(u[c])),c++}}(r,this),s=n.p(this.options);n.m(o),this.S(s),this._$AH=n}}_$AC(t){let e=Ac.get(t.strings);return e===void 0&&Ac.set(t.strings,e=new ts(t)),e}A(t){vc(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const r of t)i===e.length?e.push(o=new os(this.M(dn()),this.M(dn()),this,this.options)):o=e[i],o._$AI(r),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},xs=class{constructor(t,e,o,i,r){this.type=1,this._$AH=He,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=He}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const r=this.strings;let n=!1;if(r===void 0)t=yr(this,t,e,0),n=!pn(t)||t!==this._$AH&&t!==Ft,n&&(this._$AH=t);else{const s=t;let u,c;for(t=r[0],u=0;u<r.length-1;u++)c=yr(this,s[o+u],e,u),c===Ft&&(c=this._$AH[u]),n||(n=!pn(c)||c!==this._$AH[u]),c===He?t=He:t!==He&&(t+=(c!=null?c:"")+r[u+1]),this._$AH[u]=c}n&&!i&&this.k(t)}k(t){t===He?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},nm=class extends xs{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===He?void 0:t}},sm=vr?vr.emptyScript:"",am=class extends xs{constructor(){super(...arguments),this.type=4}k(t){t&&t!==He?this.element.setAttribute(this.name,sm):this.element.removeAttribute(this.name)}},lm=class extends xs{constructor(t,e,o,i,r){super(t,e,o,i,r),this.type=5}_$AI(t,e=this){var o;if((t=(o=yr(this,t,e,0))!==null&&o!==void 0?o:He)===Ft)return;const i=this._$AH,r=t===He&&i!==He||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==He&&(i===He||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},cm=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){yr(this,t)}},Ec=window.litHtmlPolyfillSupport;Ec==null||Ec(ts,os),((Zs=globalThis.litHtmlVersions)!==null&&Zs!==void 0?Zs:globalThis.litHtmlVersions=[]).push("2.1.3");var Ve=class extends nr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((o,i,r)=>{var n,s;const u=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:i;let c=u._$litPart$;if(c===void 0){const d=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:null;u._$litPart$=c=new os(i.insertBefore(dn(),d),d,void 0,r!=null?r:{})}return c._$AI(o),c})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return Ft}};Ve.finalized=!0,Ve._$litElement$=!0,(Ys=globalThis.litElementHydrateSupport)===null||Ys===void 0||Ys.call(globalThis,{LitElement:Ve});var Oc=globalThis.litElementPolyfillSupport;Oc==null||Oc({LitElement:Ve}),((Js=globalThis.litElementVersions)!==null&&Js!==void 0?Js:globalThis.litElementVersions=[]).push("3.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var st=Qe`
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
`,um=Qe`
  ${st}

  :host {
    display: block;
  }

  .radio-group {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-large);
    padding-top: var(--sl-spacing-x-small);
  }

  .radio-group .radio-group__label {
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    padding: 0 var(--sl-spacing-2x-small);
  }

  ::slotted(sl-radio:not(:last-of-type)) {
    display: block;
    margin-bottom: var(--sl-spacing-2x-small);
  }

  .radio-group:not(.radio-group--has-fieldset) {
    border: none;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  .radio-group:not(.radio-group--has-fieldset) .radio-group__label {
    position: absolute;
    width: 0;
    height: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }
`,Pa=1,dm=2,Sc=3,kc=4,ul=t=>(...e)=>({_$litDirective$:t,values:e}),dl=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},bt=ul(class extends dl{constructor(t){var e;if(super(t),t.type!==Pa||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!(!((o=this.et)===null||o===void 0)&&o.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;this.st.forEach(n=>{n in e||(r.remove(n),this.st.delete(n))});for(const n in e){const s=!!e[n];s===this.st.has(n)||((i=this.et)===null||i===void 0?void 0:i.has(n))||(s?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Ft}}),Ed=Object.defineProperty,pm=Object.defineProperties,hm=Object.getOwnPropertyDescriptor,fm=Object.getOwnPropertyDescriptors,is=Object.getOwnPropertySymbols,Od=Object.prototype.hasOwnProperty,Sd=Object.prototype.propertyIsEnumerable,Ic=(t,e,o)=>e in t?Ed(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,Be=(t,e)=>{for(var o in e||(e={}))Od.call(e,o)&&Ic(t,o,e[o]);if(is)for(var o of is(e))Sd.call(e,o)&&Ic(t,o,e[o]);return t},Vt=(t,e)=>pm(t,fm(e)),pl=(t,e)=>{var o={};for(var i in t)Od.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(t!=null&&is)for(var i of is(t))e.indexOf(i)<0&&Sd.call(t,i)&&(o[i]=t[i]);return o},T=(t,e,o,i)=>{for(var r,n=i>1?void 0:i?hm(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i?r(e,o,n):r(n))||n);return i&&n&&Ed(e,o,n),n},ot=t=>e=>typeof e=="function"?((o,i)=>(window.customElements.define(o,i),i))(t,e):((o,i)=>{const{kind:r,elements:n}=i;return{kind:r,elements:n,finisher(s){window.customElements.define(o,s)}}})(t,e),mm=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Vt(Be({},e),{finisher(o){o.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function z(t){return(e,o)=>o!==void 0?((i,r,n)=>{r.constructor.createProperty(n,i)})(t,e,o):mm(t,e)}function Gt(t){return z(Vt(Be({},t),{state:!0}))}var ea;function Le(t,e){return(({finisher:o,descriptor:i})=>(r,n)=>{var s;if(n===void 0){const u=(s=r.originalKey)!==null&&s!==void 0?s:r.key,c=i!=null?{kind:"method",placement:"prototype",key:u,descriptor:i(r.key)}:Vt(Be({},r),{key:u});return o!=null&&(c.finisher=function(d){o(d,u)}),c}{const u=r.constructor;i!==void 0&&Object.defineProperty(r,n,i(n)),o==null||o(u,n)}})({descriptor:o=>{const i={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const r=typeof o=="symbol"?Symbol():"__"+o;i.get=function(){var n,s;return this[r]===void 0&&(this[r]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(t))!==null&&s!==void 0?s:null),this[r]}}return i}})}(ea=window.HTMLSlotElement)===null||ea===void 0||ea.prototype.assignedElements;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ta=["sl-radio","sl-radio-button"],vi=class extends Ve{constructor(){super(...arguments),this.hasButtonGroup=!1,this.label="",this.fieldset=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup")}getAllRadios(){return[...this.querySelectorAll(ta.join(","))].filter(t=>ta.includes(t.tagName.toLowerCase()))}handleRadioClick(t){const e=t.target.closest(ta.map(o=>`${o}:not([disabled])`).join(","));e&&this.getAllRadios().forEach(o=>{o.checked=o===e,o.input.tabIndex=o===e?0:-1})}handleKeyDown(t){var e;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.key)){const o=this.getAllRadios().filter(s=>!s.disabled),i=(e=o.find(s=>s.checked))!=null?e:o[0],r=["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let n=o.indexOf(i)+r;n<0&&(n=o.length-1),n>o.length-1&&(n=0),this.getAllRadios().forEach(s=>{s.checked=!1,s.input.tabIndex=-1}),o[n].focus(),o[n].checked=!0,o[n].input.tabIndex=0,t.preventDefault()}}handleSlotChange(){const t=this.getAllRadios(),e=t.find(o=>o.checked);this.hasButtonGroup=!!t.find(o=>o.tagName.toLowerCase()==="sl-radio-button"),t.forEach(o=>{o.setAttribute("role","radio"),o.input.tabIndex=-1}),e?e.input.tabIndex=0:t.length>0&&(t[0].input.tabIndex=0)}render(){const t=ye`
      <slot @click=${this.handleRadioClick} @keydown=${this.handleKeyDown} @slotchange=${this.handleSlotChange}></slot>
    `;return ye`
      <fieldset
        part="base"
        class=${bt({"radio-group":!0,"radio-group--has-fieldset":this.fieldset})}
      >
        <legend part="label" class="radio-group__label">
          <slot name="label">${this.label}</slot>
        </legend>
        ${this.hasButtonGroup?ye`<sl-button-group part="button-group">${t}</sl-button-group>`:t}
      </fieldset>
    `}};vi.styles=um,T([Le("slot:not([name])")],vi.prototype,"defaultSlot",2),T([Gt()],vi.prototype,"hasButtonGroup",2),T([z()],vi.prototype,"label",2),T([z({type:Boolean,attribute:"fieldset"})],vi.prototype,"fieldset",2),vi=T([ot("sl-radio-group")],vi);var gm=Qe`
  ${st}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,qc=["sl-button","sl-radio-button"],Mr=class extends Ve{constructor(){super(...arguments),this.label=""}handleFocus(t){const e=$r(t.target);e==null||e.classList.add("sl-button-group__button--focus")}handleBlur(t){const e=$r(t.target);e==null||e.classList.remove("sl-button-group__button--focus")}handleMouseOver(t){const e=$r(t.target);e==null||e.classList.add("sl-button-group__button--hover")}handleMouseOut(t){const e=$r(t.target);e==null||e.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const o=t.indexOf(e),i=$r(e);i!==null&&(i.classList.add("sl-button-group__button"),i.classList.toggle("sl-button-group__button--first",o===0),i.classList.toggle("sl-button-group__button--inner",o>0&&o<t.length-1),i.classList.toggle("sl-button-group__button--last",o===t.length-1))})}render(){return ye`
      <div
        part="base"
        class="button-group"
        role="group"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};function $r(t){return qc.includes(t.tagName.toLowerCase())?t:t.querySelector(qc.join(","))}Mr.styles=gm,T([Le("slot")],Mr.prototype,"defaultSlot",2),T([z()],Mr.prototype,"label",2),Mr=T([ot("sl-button-group")],Mr);var Wn=(()=>{const t=document.createElement("style");let e;try{document.head.appendChild(t),t.sheet.insertRule(":focus-visible { color: inherit }"),e=!0}catch{e=!1}finally{t.remove()}return e})(),ht=wd(Wn?":focus-visible":":focus"),kd=Qe`
  ${st}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default${ht}:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary${ht}:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success${ht}:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral${ht}:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning${ht}:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger${ht}:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default${ht}:not(.button--disabled) {
    border-color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary${ht}:not(.button--disabled) {
    border-color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success${ht}:not(.button--disabled) {
    border-color: var(--sl-color-success-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral${ht}:not(.button--disabled) {
    border-color: var(--sl-color-neutral-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning${ht}:not(.button--disabled) {
    border-color: var(--sl-color-warning-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger${ht}:not(.button--disabled) {
    border-color: var(--sl-color-danger-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text${ht}:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-right: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-left: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,vm=Qe`
  ${kd}
  label {
    display: inline-block;
    position: relative;
  }
  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Cc=(t,...e)=>({_$litStatic$:e.reduce((o,i,r)=>o+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1],t[0])}),Pc=new Map,Qn=(t=>(e,...o)=>{var i;const r=o.length;let n,s;const u=[],c=[];let d,p=0,a=!1;for(;p<r;){for(d=e[p];p<r&&(s=o[p],(n=(i=s)===null||i===void 0?void 0:i._$litStatic$)!==void 0);)d+=n+e[++p],a=!0;c.push(s),u.push(d),p++}if(p===r&&u.push(e[r]),a){const l=u.join("$$lit$$");(e=Pc.get(l))===void 0&&(u.raw=u,Pc.set(l,e=u)),o=c}return t(e,...o)})(ye),bm=class extends Event{constructor(t){super("formdata"),this.formData=t}},ym=class extends FormData{constructor(t){super(t),this.form=t,t.dispatchEvent(new bm(this))}append(t,e){let o=this.form.elements[t];if(o||(o=document.createElement("input"),o.type="hidden",o.name=t,this.form.appendChild(o)),this.has(t)){const i=this.getAll(t),r=i.indexOf(o.value);r!==-1&&i.splice(r,1),i.push(e),this.set(t,i)}else super.append(t,e);o.value=e}};function Tc(){window.FormData&&!function(){const t=document.createElement("form");let e=!1;return document.body.append(t),t.addEventListener("submit",o=>{new FormData(o.target),o.preventDefault()}),t.addEventListener("formdata",()=>e=!0),t.dispatchEvent(new Event("submit",{cancelable:!0})),t.remove(),e}()&&(window.FormData=ym,window.addEventListener("submit",t=>{t.defaultPrevented||new FormData(t.target)}))}document.readyState==="complete"?Tc():window.addEventListener("DOMContentLoaded",()=>Tc());var ws=class{constructor(t,e){(this.host=t).addController(this),this.options=Be({form:o=>o.closest("form"),name:o=>o.name,value:o=>o.value,disabled:o=>o.disabled,reportValidity:o=>typeof o.reportValidity!="function"||o.reportValidity()},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this)}hostConnected(){document.addEventListener("formdata",this.handleFormData,{capture:!0}),document.addEventListener("submit",this.handleFormSubmit,{capture:!0})}hostDisconnected(){document.removeEventListener("formdata",this.handleFormData,{capture:!0}),document.removeEventListener("submit",this.handleFormSubmit,{capture:!0})}handleFormData(t){const e=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host);e||typeof o!="string"||i===void 0||(Array.isArray(i)?i.forEach(r=>{t.formData.append(o,r.toString())}):t.formData.append(o,i.toString()))}handleFormSubmit(t){const e=this.options.form(this.host),o=this.options.disabled(this.host),i=this.options.reportValidity;t.target!==e||o||(e==null?void 0:e.noValidate)||i(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}submit(t){const e=this.options.form(this.host);if(e){const o=document.createElement("button");o.type="submit",o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",t&&["formaction","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&o.setAttribute(i,t.getAttribute(i))}),e.append(o),o.click(),o.remove()}}},qr=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}};function Id(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let o="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(o+=i.textContent)}),o}var xe=t=>t!=null?t:He;function Ke(t,e){const o=Be({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:n}=i;if(t in i){const s=t;i.update=function(u){if(u.has(s)){const c=u.get(s),d=this[s];c!==d&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[r](c,d))}n.call(this,u)}}}}function fe(t,e,o){const i=new CustomEvent(e,Be({bubbles:!0,cancelable:!1,composed:!0,detail:{}},o));return t.dispatchEvent(i),i}function xr(t,e){return new Promise(o=>{t.addEventListener(e,function i(r){r.target===t&&(t.removeEventListener(e,i),o())})})}var dt=class extends Ve{constructor(){super(...arguments),this.formSubmitController=new ws(this,{value:t=>t.checked?t.value:void 0}),this.hasSlotController=new qr(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.disabled=!1,this.checked=!1,this.invalid=!1,this.variant="default",this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio")}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}reportValidity(){return this.hiddenInput.reportValidity()}setCustomValidity(t){this.hiddenInput.setCustomValidity(t)}handleBlur(){this.hasFocus=!1,fe(this,"sl-blur")}handleClick(){this.disabled||(this.checked=!0)}handleFocus(){this.hasFocus=!0,fe(this,"sl-focus")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.hasUpdated&&fe(this,"sl-change")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.hasUpdated&&(this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity())}render(){return Qn`
      <div part="base">
        <input class="hidden-input" type="radio" aria-hidden="true" tabindex="-1" />
        <button
          part="button"
          class=${bt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          ?disabled=${this.disabled}
          type="button"
          name=${xe(this.name)}
          value=${xe(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <span part="prefix" class="button__prefix">
            <slot name="prefix"></slot>
          </span>
          <span part="label" class="button__label">
            <slot></slot>
          </span>
          <span part="suffix" class="button__suffix">
            <slot name="suffix"></slot>
          </span>
        </button>
      </div>
    `}};dt.styles=vm,T([Le(".button")],dt.prototype,"input",2),T([Le(".hidden-input")],dt.prototype,"hiddenInput",2),T([Gt()],dt.prototype,"hasFocus",2),T([z()],dt.prototype,"name",2),T([z()],dt.prototype,"value",2),T([z({type:Boolean,reflect:!0})],dt.prototype,"disabled",2),T([z({type:Boolean,reflect:!0})],dt.prototype,"checked",2),T([z({type:Boolean,reflect:!0})],dt.prototype,"invalid",2),T([Ke("checked")],dt.prototype,"handleCheckedChange",1),T([Ke("disabled",{waitUntilFirstUpdate:!0})],dt.prototype,"handleDisabledChange",1),T([z({reflect:!0})],dt.prototype,"variant",2),T([z({reflect:!0})],dt.prototype,"size",2),T([z({type:Boolean,reflect:!0})],dt.prototype,"pill",2),dt=T([ot("sl-radio-button")],dt);var Jr,qd=Qe`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }
`,xm=Qe`
  ${st}
  ${qd}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: var(--sl-focus-ring);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    box-shadow: var(--sl-focus-ring);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    padding-left: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    padding-right: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    padding-left: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    padding-right: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    padding-left: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    padding-right: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }
`,Ta=new Set,wm=new MutationObserver(Cd),Na=new Map,Zr=document.documentElement.lang||navigator.language;function Cd(){Zr=document.documentElement.lang||navigator.language,[...Ta.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}wm.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});var Cr=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Ta.add(this.host)}hostDisconnected(){Ta.delete(this.host)}term(t,...e){return function(o,i,...r){const n=o.toLowerCase().slice(0,2),s=o.length>2?o.toLowerCase():"",u=Na.get(s),c=Na.get(n);let d;if(u&&u[i])d=u[i];else if(c&&c[i])d=c[i];else{if(!Jr||!Jr[i])return console.error(`No translation found for: ${i}`),i;d=Jr[i]}return typeof d=="function"?d(...r):d}(this.host.lang||Zr,t,...e)}date(t,e){return function(o,i,r){return i=new Date(i),new Intl.DateTimeFormat(o,r).format(i)}(this.host.lang||Zr,t,e)}number(t,e){return function(o,i,r){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(o,r).format(i)}(this.host.lang||Zr,t,e)}relativeTime(t,e,o){return function(i,r,n,s){return new Intl.RelativeTimeFormat(i,s).format(r,n)}(this.host.lang||Zr,t,e,o)}};(function(...t){t.map(e=>{const o=e.$code.toLowerCase();Na.set(o,e),Jr||(Jr=e)}),Cd()})({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var _m={},Am=ul(class extends dl{constructor(t){if(super(t),t.type!==Sc&&t.type!==Pa&&t.type!==kc)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>e.strings===void 0)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Ft||e===He)return e;const o=t.element,i=t.name;if(t.type===Sc){if(e===o[i])return Ft}else if(t.type===kc){if(!!e===o.hasAttribute(i))return Ft}else if(t.type===Pa&&o.getAttribute(i)===e+"")return Ft;return((r,n=_m)=>{r._$AH=n})(t),e}}),be=class extends Ve{constructor(){super(...arguments),this.formSubmitController=new ws(this),this.hasSlotController=new qr(this,"help-text","label"),this.localize=new Cr(this),this.hasFocus=!1,this.isPasswordVisible=!1,this.type="text",this.size="medium",this.value="",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.togglePassword=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1}get valueAsDate(){var t,e;return(e=(t=this.input)==null?void 0:t.valueAsDate)!=null?e:null}set valueAsDate(t){this.updateComplete.then(()=>{this.input.valueAsDate=t,this.value=this.input.value})}get valueAsNumber(){var t,e;return(e=(t=this.input)==null?void 0:t.valueAsNumber)!=null?e:parseFloat(this.value)}set valueAsNumber(t){this.updateComplete.then(()=>{this.input.valueAsNumber=t,this.value=this.input.value})}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){this.input.setRangeText(t,e,o,i),this.value!==this.input.value&&(this.value=this.input.value,fe(this,"sl-input"),fe(this,"sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,fe(this,"sl-blur")}handleChange(){this.value=this.input.value,fe(this,"sl-change")}handleClearClick(t){this.value="",fe(this,"sl-clear"),fe(this,"sl-input"),fe(this,"sl-change"),this.input.focus(),t.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,fe(this,"sl-focus")}handleInput(){this.value=this.input.value,fe(this,"sl-input")}handleInvalid(){this.invalid=!0}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key!=="Enter"||e||this.formSubmitController.submit()}handlePasswordToggle(){this.isPasswordVisible=!this.isPasswordVisible}handleValueChange(){this.invalid=!this.input.checkValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e;return ye`
      <div
        part="form-control"
        class=${bt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${bt({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":this.value.length===0,"input--invalid":this.invalid})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.isPasswordVisible?"text":this.type}
              name=${xe(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${xe(this.placeholder)}
              minlength=${xe(this.minlength)}
              maxlength=${xe(this.maxlength)}
              min=${xe(this.min)}
              max=${xe(this.max)}
              step=${xe(this.step)}
              .value=${Am(this.value)}
              autocapitalize=${xe(this.autocapitalize)}
              autocomplete=${xe(this.autocomplete)}
              autocorrect=${xe(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${xe(this.spellcheck)}
              pattern=${xe(this.pattern)}
              enterkeyhint=${xe(this.enterkeyhint)}
              inputmode=${xe(this.inputmode)}
              aria-describedby="help-text"
              aria-invalid=${this.invalid?"true":"false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${this.clearable&&this.value.length>0?ye`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.togglePassword?ye`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.isPasswordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.isPasswordVisible?ye`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:ye`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};be.styles=xm,T([Le(".input__control")],be.prototype,"input",2),T([Gt()],be.prototype,"hasFocus",2),T([Gt()],be.prototype,"isPasswordVisible",2),T([z({reflect:!0})],be.prototype,"type",2),T([z({reflect:!0})],be.prototype,"size",2),T([z()],be.prototype,"name",2),T([z()],be.prototype,"value",2),T([z({type:Boolean,reflect:!0})],be.prototype,"filled",2),T([z({type:Boolean,reflect:!0})],be.prototype,"pill",2),T([z()],be.prototype,"label",2),T([z({attribute:"help-text"})],be.prototype,"helpText",2),T([z({type:Boolean})],be.prototype,"clearable",2),T([z({attribute:"toggle-password",type:Boolean})],be.prototype,"togglePassword",2),T([z()],be.prototype,"placeholder",2),T([z({type:Boolean,reflect:!0})],be.prototype,"disabled",2),T([z({type:Boolean,reflect:!0})],be.prototype,"readonly",2),T([z({type:Number})],be.prototype,"minlength",2),T([z({type:Number})],be.prototype,"maxlength",2),T([z()],be.prototype,"min",2),T([z()],be.prototype,"max",2),T([z({type:Number})],be.prototype,"step",2),T([z()],be.prototype,"pattern",2),T([z({type:Boolean,reflect:!0})],be.prototype,"required",2),T([z({type:Boolean,reflect:!0})],be.prototype,"invalid",2),T([z()],be.prototype,"autocapitalize",2),T([z()],be.prototype,"autocorrect",2),T([z()],be.prototype,"autocomplete",2),T([z({type:Boolean})],be.prototype,"autofocus",2),T([z()],be.prototype,"enterkeyhint",2),T([z({type:Boolean})],be.prototype,"spellcheck",2),T([z()],be.prototype,"inputmode",2),T([Ke("disabled",{waitUntilFirstUpdate:!0})],be.prototype,"handleDisabledChange",1),T([Ke("value",{waitUntilFirstUpdate:!0})],be.prototype,"handleValueChange",1),be=T([ot("sl-input")],be);var Pd="";function Nc(t){Pd=t}var Td=[...document.getElementsByTagName("script")],Dc=Td.find(t=>t.hasAttribute("data-shoelace"));if(Dc)Nc(Dc.getAttribute("data-shoelace"));else{const t=Td.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src));let e="";t&&(e=t.getAttribute("src")),Nc(e.split("/").slice(0,-1).join("/"))}var Rc={"check-lg":`
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
  `},Em=[{name:"default",resolver:t=>`${Pd.replace(/\/$/,"")}/assets/icons/${t}.svg`},{name:"system",resolver:t=>t in Rc?`data:image/svg+xml,${encodeURIComponent(Rc[t])}`:""}],oa=[];function Lc(t){return Em.find(e=>e.name===t)}var ia=new Map,ra=new Map;async function Om(t){if(ra.has(t))return ra.get(t);const e=await function(i,r="cors"){if(ia.has(i))return ia.get(i);const n=fetch(i,{mode:r}).then(async s=>({ok:s.ok,status:s.status,html:await s.text()}));return ia.set(i,n),n}(t),o={ok:e.ok,status:e.status,svg:null};if(e.ok){const i=document.createElement("div");i.innerHTML=e.html;const r=i.firstElementChild;o.svg=(r==null?void 0:r.tagName.toLowerCase())==="svg"?r.outerHTML:""}return ra.set(t,o),o}var Sm=Qe`
  ${st}

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
`,Da=class extends dl{constructor(t){if(super(t),this.it=He,t.type!==dm)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===He||t==null)return this.vt=void 0,this.it=t;if(t===Ft)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.vt;this.it=t;const e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Da.directiveName="unsafeHTML",Da.resultType=1;var Ra=class extends Da{};Ra.directiveName="unsafeSVG",Ra.resultType=2;var km=ul(Ra),Im=new DOMParser,ho=class extends Ve{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){var t;super.connectedCallback(),t=this,oa.push(t)}firstUpdated(){this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,oa=oa.filter(e=>e!==t)}getUrl(){const t=Lc(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var t;const e=Lc(this.library),o=this.getUrl();if(o)try{const i=await Om(o);if(o!==this.getUrl())return;if(i.ok){const r=Im.parseFromString(i.svg,"text/html").body.querySelector("svg");r!==null?((t=e==null?void 0:e.mutator)==null||t.call(e,r),this.svg=r.outerHTML,fe(this,"sl-load")):(this.svg="",fe(this,"sl-error"))}else this.svg="",fe(this,"sl-error")}catch{fe(this,"sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const t=typeof this.label=="string"&&this.label.length>0;return ye` <div
      part="base"
      class="icon"
      role=${xe(t?"img":void 0)}
      aria-label=${xe(t?this.label:void 0)}
      aria-hidden=${xe(t?void 0:"true")}
    >
      ${km(this.svg)}
    </div>`}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Mc(t){const e=t.tagName.toLowerCase();return t.getAttribute("tabindex")!=="-1"&&!t.hasAttribute("disabled")&&(!t.hasAttribute("aria-disabled")||t.getAttribute("aria-disabled")==="false")&&!(e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked"))&&t.offsetParent!==null&&window.getComputedStyle(t).visibility!=="hidden"&&(!(e!=="audio"&&e!=="video"||!t.hasAttribute("controls"))||!!t.hasAttribute("tabindex")||!(!t.hasAttribute("contenteditable")||t.getAttribute("contenteditable")==="false")||["button","input","select","textarea","a","audio","video","summary"].includes(e))}function Nd(t){var e,o;const i=[];return function r(n){n instanceof HTMLElement&&(i.push(n),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&r(n.shadowRoot)),[...n.querySelectorAll("*")].forEach(s=>r(s))}(t),{start:(e=i.find(r=>Mc(r)))!=null?e:null,end:(o=i.reverse().find(r=>Mc(r)))!=null?o:null}}ho.styles=Sm,T([Gt()],ho.prototype,"svg",2),T([z()],ho.prototype,"name",2),T([z()],ho.prototype,"src",2),T([z()],ho.prototype,"label",2),T([z()],ho.prototype,"library",2),T([Ke("name"),Ke("src"),Ke("library")],ho.prototype,"setIcon",1),ho=T([ot("sl-icon")],ho);var jr=[],La=new Set;function $c(t){La.add(t),document.body.classList.add("sl-scroll-lock")}function jc(t){La.delete(t),La.size===0&&document.body.classList.remove("sl-scroll-lock")}function Ma(t,e,o="vertical",i="smooth"){const r=function(a,l){return{top:Math.round(a.getBoundingClientRect().top-l.getBoundingClientRect().top),left:Math.round(a.getBoundingClientRect().left-l.getBoundingClientRect().left)}}(t,e),n=r.top+e.scrollTop,s=r.left+e.scrollLeft,u=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,d=e.scrollTop,p=e.scrollTop+e.offsetHeight;o!=="horizontal"&&o!=="both"||(s<u?e.scrollTo({left:s,behavior:i}):s+t.clientWidth>c&&e.scrollTo({left:s-e.offsetWidth+t.clientWidth,behavior:i})),o!=="vertical"&&o!=="both"||(n<d?e.scrollTo({top:n,behavior:i}):n+t.clientHeight>p&&e.scrollTo({top:n-e.offsetHeight+t.clientHeight,behavior:i}))}var qm=Qe`
  ${st}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-left: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }
`;function xo(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,Vt(Be({},o),{duration:Cm()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function Cm(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Zo(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{const i=requestAnimationFrame(o);e.addEventListener("cancel",()=>i,{once:!0}),e.addEventListener("finish",()=>i,{once:!0}),e.cancel()})))}var Dd=new Map,Pm=new WeakMap;function wo(t,e){Dd.set(t,function(o){return o!=null?o:{keyframes:[],options:{duration:0}}}(e))}function _o(t,e){const o=Pm.get(t);return o!=null&&o[e]?o[e]:Dd.get(e)||{keyframes:[],options:{duration:0}}}var Xt=class extends Ve{constructor(){super(...arguments),this.hasSlotController=new qr(this,"footer"),this.localize=new Cr(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new class{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){jr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){jr=jr.filter(t=>t!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return jr[jr.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:t,end:e}=Nd(this.element),o=this.tabDirection==="forward"?t:e;typeof(o==null?void 0:o.focus)=="function"&&o.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){t.key==="Tab"&&t.shiftKey&&(this.tabDirection="backward"),requestAnimationFrame(()=>this.checkFocus())}handleKeyUp(){this.tabDirection="forward"}}(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.modal.activate(),$c(this))}disconnectedCallback(){super.disconnectedCallback(),jc(this)}async show(){if(!this.open)return this.open=!0,xr(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xr(this,"sl-after-hide")}requestClose(t){if(fe(this,"sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const e=_o(this,"dialog.denyClose");xo(this.panel,e.keyframes,e.options)}else this.hide()}handleKeyDown(t){t.key==="Escape"&&(t.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){fe(this,"sl-show"),this.originalTrigger=document.activeElement,this.modal.activate(),$c(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Zo(this.dialog),Zo(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{fe(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=_o(this,"dialog.show"),o=_o(this,"dialog.overlay.show");await Promise.all([xo(this.panel,e.keyframes,e.options),xo(this.overlay,o.keyframes,o.options)]),fe(this,"sl-after-show")}else{fe(this,"sl-hide"),this.modal.deactivate(),await Promise.all([Zo(this.dialog),Zo(this.overlay)]);const t=_o(this,"dialog.hide"),e=_o(this,"dialog.overlay.hide");await Promise.all([xo(this.panel,t.keyframes,t.options),xo(this.overlay,e.keyframes,e.options)]),this.dialog.hidden=!0,jc(this);const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),fe(this,"sl-after-hide")}}render(){return ye`
      <div
        part="base"
        class=${bt({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${xe(this.noHeader?this.label:void 0)}
          aria-labelledby=${xe(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":ye`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="dialog__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click="${()=>this.requestClose("close-button")}"
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Xt.styles=qm,T([Le(".dialog")],Xt.prototype,"dialog",2),T([Le(".dialog__panel")],Xt.prototype,"panel",2),T([Le(".dialog__overlay")],Xt.prototype,"overlay",2),T([z({type:Boolean,reflect:!0})],Xt.prototype,"open",2),T([z({reflect:!0})],Xt.prototype,"label",2),T([z({attribute:"no-header",type:Boolean,reflect:!0})],Xt.prototype,"noHeader",2),T([Ke("open",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleOpenChange",1),Xt=T([ot("sl-dialog")],Xt),wo("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}}),wo("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}}),wo("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}}),wo("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),wo("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Tm=Qe`
  ${st}

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

  .icon-button${ht} {
    box-shadow: var(--sl-focus-ring);
  }
`,Mt=class extends Ve{constructor(){super(...arguments),this.label="",this.disabled=!1}render(){const t=!!this.href,e=ye`
      <sl-icon
        name=${xe(this.name)}
        library=${xe(this.library)}
        src=${xe(this.src)}
        aria-hidden="true"
      ></sl-icon>
    `;return t?ye`
          <a
            part="base"
            class="icon-button"
            href=${xe(this.href)}
            target=${xe(this.target)}
            download=${xe(this.download)}
            rel=${xe(this.target?"noreferrer noopener":void 0)}
            role="button"
            aria-disabled=${this.disabled?"true":"false"}
            aria-label="${this.label}"
            tabindex=${this.disabled?"-1":"0"}
          >
            ${e}
          </a>
        `:ye`
          <button
            part="base"
            class=${bt({"icon-button":!0,"icon-button--disabled":this.disabled})}
            ?disabled=${this.disabled}
            type="button"
            aria-label=${this.label}
          >
            ${e}
          </button>
        `}};Mt.styles=Tm,T([Le(".icon-button")],Mt.prototype,"button",2),T([z()],Mt.prototype,"name",2),T([z()],Mt.prototype,"library",2),T([z()],Mt.prototype,"src",2),T([z()],Mt.prototype,"href",2),T([z()],Mt.prototype,"target",2),T([z()],Mt.prototype,"download",2),T([z()],Mt.prototype,"label",2),T([z({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2),Mt=T([ot("sl-icon-button")],Mt);var Nm=Qe`
  ${st}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    text-align: left;
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    color: var(--sl-color-neutral-400);
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-right: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-left: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(${ht}:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }
`,fo=class extends Ve{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return ye`
      <div
        part="base"
        class=${bt({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span class="menu-item__check">
          <sl-icon name="check-lg" library="default" aria-hidden="true"></sl-icon>
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="default" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};fo.styles=Nm,T([Le(".menu-item")],fo.prototype,"menuItem",2),T([z({type:Boolean,reflect:!0})],fo.prototype,"checked",2),T([z()],fo.prototype,"value",2),T([z({type:Boolean,reflect:!0})],fo.prototype,"disabled",2),T([Ke("checked")],fo.prototype,"handleCheckedChange",1),T([Ke("disabled")],fo.prototype,"handleDisabledChange",1),fo=T([ot("sl-menu-item")],fo);var Dm=Qe`
  ${st}
  ${qd}

  :host {
    display: block;
  }

  .select {
    display: block;
  }

  .select__control {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .select__menu {
    max-height: 50vh;
    overflow: auto;
  }

  /* Standard selects */
  .select--standard .select__control {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    color: var(--sl-input-color);
  }

  .select--standard:not(.select--disabled) .select__control:hover {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
    color: var(--sl-input-color-hover);
  }

  .select--standard.select--focused:not(.select--disabled) .select__control {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: var(--sl-focus-ring);
    outline: none;
    color: var(--sl-input-color-focus);
  }

  .select--standard.select--disabled .select__control {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  /* Filled selects */
  .select--filled .select__control {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__control {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--focused:not(.select--disabled) .select__control {
    outline: none;
    background-color: var(--sl-input-filled-background-color-focus);
    box-shadow: var(--sl-focus-ring);
  }

  .select--filled.select--disabled .select__control {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--disabled .select__tags,
  .select--disabled .select__clear {
    pointer-events: none;
  }

  .select__prefix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__label {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    user-select: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .select__label::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .select__clear {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    width: 1.25em;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__suffix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__icon {
    flex: 0 0 auto;
    display: inline-flex;
    transition: var(--sl-transition-medium) transform ease;
  }

  .select--open .select__icon {
    transform: rotate(-180deg);
  }

  /* Placeholder */
  .select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color);
  }

  .select--disabled.select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Tags */
  .select__tags {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    margin-left: var(--sl-spacing-2x-small);
  }

  /* Hidden input (for form control validation to show) */
  .select__hidden-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  /*
   * Size modifiers
   */

  /* Small */
  .select--small .select__control {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
  }

  .select--small .select__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-small);
  }

  .select--small .select__label {
    margin: 0 var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-right: var(--sl-input-spacing-small);
  }

  .select--small .select__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-small);
  }

  .select--small .select__icon {
    margin-right: var(--sl-input-spacing-small);
  }

  .select--small .select__tags {
    padding-bottom: 2px;
  }

  .select--small .select__tags sl-tag {
    padding-top: 2px;
  }

  .select--small .select__tags sl-tag:not(:last-of-type) {
    margin-right: var(--sl-spacing-2x-small);
  }

  .select--small.select--has-tags .select__label {
    margin-left: 0;
  }

  /* Medium */
  .select--medium .select__control {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
  }

  .select--medium .select__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-medium);
  }

  .select--medium .select__label {
    margin: 0 var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-right: var(--sl-input-spacing-medium);
  }

  .select--medium .select__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-medium);
  }

  .select--medium .select__icon {
    margin-right: var(--sl-input-spacing-medium);
  }

  .select--medium .select__tags {
    padding-bottom: 3px;
  }

  .select--medium .select__tags sl-tag {
    padding-top: 3px;
  }

  .select--medium .select__tags sl-tag:not(:last-of-type) {
    margin-right: var(--sl-spacing-2x-small);
  }

  .select--medium.select--has-tags .select__label {
    margin-left: 0;
  }

  /* Large */
  .select--large .select__control {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
  }

  .select--large .select__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-large);
  }

  .select--large .select__label {
    margin: 0 var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-right: var(--sl-input-spacing-large);
  }

  .select--large .select__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-large);
  }

  .select--large .select__icon {
    margin-right: var(--sl-input-spacing-large);
  }

  .select--large .select__tags {
    padding-bottom: 4px;
  }
  .select--large .select__tags sl-tag {
    padding-top: 4px;
  }

  .select--large .select__tags sl-tag:not(:last-of-type) {
    margin-right: var(--sl-spacing-2x-small);
  }

  .select--large.select--has-tags .select__label {
    margin-left: 0;
  }

  /*
   * Pill modifier
   */
  .select--pill.select--small .select__control {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__control {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__control {
    border-radius: var(--sl-input-height-large);
  }
`,Ie=class extends Ve{constructor(){super(...arguments),this.formSubmitController=new ws(this),this.hasSlotController=new qr(this,"help-text","label"),this.localize=new Cr(this),this.hasFocus=!1,this.isOpen=!1,this.displayLabel="",this.displayTags=[],this.multiple=!1,this.maxTagsVisible=3,this.disabled=!1,this.name="",this.placeholder="",this.size="medium",this.hoist=!1,this.value="",this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.required=!1,this.clearable=!1,this.invalid=!1}connectedCallback(){super.connectedCallback(),this.handleMenuSlotChange=this.handleMenuSlotChange.bind(this),this.resizeObserver=new ResizeObserver(()=>this.resizeMenu()),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.syncItemsFromValue()})}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}getItemLabel(t){return Id(t.shadowRoot.querySelector("slot:not([name])"))}getItems(){return[...this.querySelectorAll("sl-menu-item")]}getValueAsArray(){return this.multiple&&this.value===""?[]:Array.isArray(this.value)?this.value:[this.value]}focus(t){this.control.focus(t)}blur(){this.control.blur()}handleBlur(){this.isOpen||(this.hasFocus=!1,fe(this,"sl-blur"))}handleClearClick(t){t.stopPropagation(),this.value=this.multiple?[]:"",fe(this,"sl-clear"),this.syncItemsFromValue()}handleDisabledChange(){this.disabled&&this.isOpen&&this.dropdown.hide(),this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus||(this.hasFocus=!0,fe(this,"sl-focus"))}handleKeyDown(t){const e=t.target,o=this.getItems(),i=o[0],r=o[o.length-1];if(e.tagName.toLowerCase()!=="sl-tag")if(t.key!=="Tab"){if(["ArrowDown","ArrowUp"].includes(t.key)){if(t.preventDefault(),this.isOpen||this.dropdown.show(),t.key==="ArrowDown")return this.menu.setCurrentItem(i),void i.focus();if(t.key==="ArrowUp")return this.menu.setCurrentItem(r),void r.focus()}t.ctrlKey||t.metaKey||this.isOpen||t.key.length!==1||(t.stopPropagation(),t.preventDefault(),this.dropdown.show(),this.menu.typeToSelect(t))}else this.isOpen&&this.dropdown.hide()}handleLabelClick(){this.focus()}handleMenuSelect(t){const e=t.detail.item;this.multiple?this.value=this.value.includes(e.value)?this.value.filter(o=>o!==e.value):[...this.value,e.value]:this.value=e.value,this.syncItemsFromValue()}handleMenuShow(){this.resizeMenu(),this.isOpen=!0}handleMenuHide(){this.isOpen=!1,this.control.focus()}handleMultipleChange(){var t;const e=this.getValueAsArray();this.value=this.multiple?e:(t=e[0])!=null?t:"",this.syncItemsFromValue()}async handleMenuSlotChange(){const t=this.getItems(),e=[];t.forEach(o=>{e.includes(o.value)&&console.error(`Duplicate value found in <sl-select> menu item: '${o.value}'`,o),e.push(o.value)}),await Promise.all(t.map(o=>o.render)).then(()=>this.syncItemsFromValue())}handleTagInteraction(t){t.composedPath().find(e=>e instanceof HTMLElement?e.classList.contains("tag__remove"):!1)&&t.stopPropagation()}async handleValueChange(){this.syncItemsFromValue(),await this.updateComplete,this.invalid=!this.input.checkValidity(),fe(this,"sl-change")}resizeMenu(){this.menu.style.width=`${this.control.clientWidth}px`,this.dropdown.reposition()}syncItemsFromValue(){const t=this.getItems(),e=this.getValueAsArray();if(t.map(o=>o.checked=e.includes(o.value)),this.multiple){const o=t.filter(i=>e.includes(i.value));if(this.displayLabel=o.length>0?this.getItemLabel(o[0]):"",this.displayTags=o.map(i=>ye`
          <sl-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button
            "
            variant="neutral"
            size=${this.size}
            ?pill=${this.pill}
            removable
            @click=${this.handleTagInteraction}
            @keydown=${this.handleTagInteraction}
            @sl-remove=${r=>{r.stopPropagation(),this.disabled||(i.checked=!1,this.syncValueFromItems())}}
          >
            ${this.getItemLabel(i)}
          </sl-tag>
        `),this.maxTagsVisible>0&&this.displayTags.length>this.maxTagsVisible){const i=this.displayTags.length;this.displayLabel="",this.displayTags=this.displayTags.slice(0,this.maxTagsVisible),this.displayTags.push(ye`
          <sl-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button
            "
            variant="neutral"
            size=${this.size}
          >
            +${i-this.maxTagsVisible}
          </sl-tag>
        `)}}else{const o=t.find(i=>i.value===e[0]);this.displayLabel=o?this.getItemLabel(o):"",this.displayTags=[]}}syncValueFromItems(){const t=this.getItems().filter(e=>e.checked).map(e=>e.value);this.multiple?this.value=this.value.filter(e=>t.includes(e)):this.value=t.length>0?t[0]:""}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.multiple?this.value.length>0:this.value!=="",i=!!this.label||!!t,r=!!this.helpText||!!e;return ye`
      <div
        part="form-control"
        class=${bt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-dropdown
            part="base"
            .hoist=${this.hoist}
            .placement=${this.placement}
            .stayOpenOnSelect=${this.multiple}
            .containingElement=${this}
            ?disabled=${this.disabled}
            class=${bt({select:!0,"select--open":this.isOpen,"select--empty":this.value.length===0,"select--focused":this.hasFocus,"select--clearable":this.clearable,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--standard":!this.filled,"select--filled":this.filled,"select--has-tags":this.multiple&&this.displayTags.length>0,"select--placeholder-visible":this.displayLabel==="","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large","select--pill":this.pill,"select--invalid":this.invalid})}
            @sl-show=${this.handleMenuShow}
            @sl-hide=${this.handleMenuHide}
          >
            <div
              part="control"
              slot="trigger"
              id="input"
              class="select__control"
              role="combobox"
              aria-describedby="help-text"
              aria-haspopup="true"
              aria-disabled=${this.disabled?"true":"false"}
              aria-expanded=${this.isOpen?"true":"false"}
              aria-controls="menu"
              tabindex=${this.disabled?"-1":"0"}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            >
              <span part="prefix" class="select__prefix">
                <slot name="prefix"></slot>
              </span>

              <div part="display-label" class="select__label">
                ${this.displayTags.length>0?ye` <span part="tags" class="select__tags"> ${this.displayTags} </span> `:this.displayLabel.length>0?this.displayLabel:this.placeholder}
              </div>

              ${this.clearable&&o?ye`
                    <button
                      part="clear-button"
                      class="select__clear"
                      @click=${this.handleClearClick}
                      aria-label=${this.localize.term("clearEntry")}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <span part="suffix" class="select__suffix">
                <slot name="suffix"></slot>
              </span>

              <span part="icon" class="select__icon" aria-hidden="true">
                <sl-icon name="chevron-down" library="system"></sl-icon>
              </span>

              <!-- The hidden input tricks the browser's built-in validation so it works as expected. We use an input
              instead of a select because, otherwise, iOS will show a list of options during validation. The focus
              handler is used to move focus to the primary control when it's marked invalid.  -->
              <input
                class="select__hidden-select"
                aria-hidden="true"
                ?required=${this.required}
                .value=${o?"1":""}
                tabindex="-1"
                @focus=${()=>this.control.focus()}
              />
            </div>

            <sl-menu part="menu" id="menu" class="select__menu" @sl-select=${this.handleMenuSelect}>
              <slot @slotchange=${this.handleMenuSlotChange}></slot>
            </sl-menu>
          </sl-dropdown>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ie.styles=Dm,T([Le(".select")],Ie.prototype,"dropdown",2),T([Le(".select__control")],Ie.prototype,"control",2),T([Le(".select__hidden-select")],Ie.prototype,"input",2),T([Le(".select__menu")],Ie.prototype,"menu",2),T([Gt()],Ie.prototype,"hasFocus",2),T([Gt()],Ie.prototype,"isOpen",2),T([Gt()],Ie.prototype,"displayLabel",2),T([Gt()],Ie.prototype,"displayTags",2),T([z({type:Boolean,reflect:!0})],Ie.prototype,"multiple",2),T([z({attribute:"max-tags-visible",type:Number})],Ie.prototype,"maxTagsVisible",2),T([z({type:Boolean,reflect:!0})],Ie.prototype,"disabled",2),T([z()],Ie.prototype,"name",2),T([z()],Ie.prototype,"placeholder",2),T([z()],Ie.prototype,"size",2),T([z({type:Boolean})],Ie.prototype,"hoist",2),T([z()],Ie.prototype,"value",2),T([z({type:Boolean,reflect:!0})],Ie.prototype,"filled",2),T([z({type:Boolean,reflect:!0})],Ie.prototype,"pill",2),T([z()],Ie.prototype,"label",2),T([z()],Ie.prototype,"placement",2),T([z({attribute:"help-text"})],Ie.prototype,"helpText",2),T([z({type:Boolean,reflect:!0})],Ie.prototype,"required",2),T([z({type:Boolean})],Ie.prototype,"clearable",2),T([z({type:Boolean,reflect:!0})],Ie.prototype,"invalid",2),T([Ke("disabled",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleDisabledChange",1),T([Ke("multiple")],Ie.prototype,"handleMultipleChange",1),T([Ke("value",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleValueChange",1),Ie=T([ot("sl-select")],Ie);var Rm=Qe`
  ${st}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--small .tag__remove {
    margin-left: var(--sl-spacing-2x-small);
    margin-right: calc(-1 * var(--sl-spacing-3x-small));
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag__remove {
    margin-left: var(--sl-spacing-2x-small);
    margin-right: calc(-1 * var(--sl-spacing-2x-small));
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    font-size: 1.4em;
    margin-left: var(--sl-spacing-2x-small);
    margin-right: calc(-1 * var(--sl-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,bi=class extends Ve{constructor(){super(...arguments),this.localize=new Cr(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){fe(this,"sl-remove")}render(){return ye`
      <span
        part="base"
        class=${bt({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        ${this.removable?ye`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
              ></sl-icon-button>
            `:""}
      </span>
    `}};bi.styles=Rm,T([z({reflect:!0})],bi.prototype,"variant",2),T([z({reflect:!0})],bi.prototype,"size",2),T([z({type:Boolean,reflect:!0})],bi.prototype,"pill",2),T([z({type:Boolean})],bi.prototype,"removable",2),bi=T([ot("sl-tag")],bi);var Lm=Qe`
  ${st}

  :host {
    display: block;
  }

  .menu {
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    background: var(--sl-panel-background-color);
    padding: var(--sl-spacing-x-small) 0;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,zr=class extends Ve{constructor(){super(...arguments),this.typeToSelectString=""}firstUpdated(){this.setAttribute("role","menu")}getAllItems(t={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.getAttribute("role")==="menuitem"&&!(!t.includeDisabled&&e.disabled))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){const e=this.getAllItems({includeDisabled:!1}),o=t.disabled?e[0]:t;e.forEach(i=>{i.setAttribute("tabindex",i===o?"0":"-1")})}typeToSelect(t){var e;const o=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?t.metaKey||t.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase(),Wn||o.forEach(i=>i.classList.remove("sl-focus-invisible"));for(const i of o)if(Id((e=i.shadowRoot)==null?void 0:e.querySelector("slot:not([name])")).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(i),i.focus();break}}handleClick(t){const e=t.target.closest("sl-menu-item");(e==null?void 0:e.disabled)===!1&&fe(this,"sl-select",{detail:{item:e}})}handleKeyUp(){Wn||this.getAllItems().forEach(t=>{t.classList.remove("sl-focus-invisible")})}handleKeyDown(t){if(t.key==="Enter"){const e=this.getCurrentItem();t.preventDefault(),e==null||e.click()}if(t.key===" "&&t.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems({includeDisabled:!1}),o=this.getCurrentItem();let i=o?e.indexOf(o):0;if(e.length>0)return t.preventDefault(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),void e[i].focus()}this.typeToSelect(t)}handleMouseDown(t){const e=t.target;e.getAttribute("role")==="menuitem"&&(this.setCurrentItem(e),Wn||e.classList.add("sl-focus-invisible"))}handleSlotChange(){const t=this.getAllItems({includeDisabled:!1});t.length>0&&this.setCurrentItem(t[0])}render(){return ye`
      <div
        part="base"
        class="menu"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @keyup=${this.handleKeyUp}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};function Pr(t){return t.split("-")[0]}function _s(t){return t.split("-")[1]}function As(t){return["top","bottom"].includes(Pr(t))?"x":"y"}function Rd(t){return t==="y"?"height":"width"}function zc(t,e,o){let{reference:i,floating:r}=t;const n=i.x+i.width/2-r.width/2,s=i.y+i.height/2-r.height/2,u=As(e),c=Rd(u),d=i[c]/2-r[c]/2,p=u==="x";let a;switch(Pr(e)){case"top":a={x:n,y:i.y-r.height};break;case"bottom":a={x:n,y:i.y+i.height};break;case"right":a={x:i.x+i.width,y:s};break;case"left":a={x:i.x-r.width,y:s};break;default:a={x:i.x,y:i.y}}switch(_s(e)){case"start":a[u]-=d*(o&&p?-1:1);break;case"end":a[u]+=d*(o&&p?-1:1)}return a}zr.styles=Lm,T([Le(".menu")],zr.prototype,"menu",2),T([Le("slot")],zr.prototype,"defaultSlot",2),zr=T([ot("sl-menu")],zr);function Mm(t){return typeof t!="number"?function(e){return Be({top:0,right:0,bottom:0,left:0},e)}(t):{top:t,right:t,bottom:t,left:t}}function rs(t){return Vt(Be({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}async function hl(t,e){var o;e===void 0&&(e={});const{x:i,y:r,platform:n,rects:s,elements:u,strategy:c}=t,{boundary:d="clippingAncestors",rootBoundary:p="viewport",elementContext:a="floating",altBoundary:l=!1,padding:h=0}=e,f=Mm(h),m=u[l?a==="floating"?"reference":"floating":a],g=rs(await n.getClippingRect({element:(o=await(n.isElement==null?void 0:n.isElement(m)))==null||o?m:m.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(u.floating)),boundary:d,rootBoundary:p})),v=rs(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({rect:a==="floating"?Vt(Be({},s.floating),{x:i,y:r}):s.reference,offsetParent:await(n.getOffsetParent==null?void 0:n.getOffsetParent(u.floating)),strategy:c}):s[a]);return{top:g.top-v.top+f.top,bottom:v.bottom-g.bottom+f.bottom,left:g.left-v.left+f.left,right:v.right-g.right+f.right}}var $m=Math.min,_i=Math.max;function Fc(t,e,o){return _i(t,$m(e,o))}var jm={left:"right",right:"left",bottom:"top",top:"bottom"};function $n(t){return t.replace(/left|right|bottom|top/g,e=>jm[e])}var zm={start:"end",end:"start"};function Uc(t){return t.replace(/start|end/g,e=>zm[e])}var Fm=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;const{placement:i,middlewareData:r,rects:n,initialPlacement:s,platform:u,elements:c}=e,d=t,{mainAxis:p=!0,crossAxis:a=!0,fallbackPlacements:l,fallbackStrategy:h="bestFit",flipAlignment:f=!0}=d,m=pl(d,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),g=Pr(i),v=l||(g===s||!f?[$n(s)]:function(C){const A=$n(C);return[Uc(C),A,Uc(A)]}(s)),y=[s,...v],b=await hl(e,m),x=[];let w=((o=r.flip)==null?void 0:o.overflows)||[];if(p&&x.push(b[g]),a){const{main:C,cross:A}=function(S,E,O){O===void 0&&(O=!1);const q=_s(S),P=As(S),N=Rd(P);let L=P==="x"?q===(O?"end":"start")?"right":"left":q==="start"?"bottom":"top";return E.reference[N]>E.floating[N]&&(L=$n(L)),{main:L,cross:$n(L)}}(i,n,await(u.isRTL==null?void 0:u.isRTL(c.floating)));x.push(b[C],b[A])}if(w=[...w,{placement:i,overflows:x}],!x.every(C=>C<=0)){var _,I;const C=((_=(I=r.flip)==null?void 0:I.index)!=null?_:0)+1,A=y[C];if(A)return{data:{index:C,overflows:w},reset:{skip:!1,placement:A}};let S="bottom";switch(h){case"bestFit":{var k;const E=(k=w.slice().sort((O,q)=>O.overflows.filter(P=>P>0).reduce((P,N)=>P+N,0)-q.overflows.filter(P=>P>0).reduce((P,N)=>P+N,0))[0])==null?void 0:k.placement;E&&(S=E);break}case"initialPlacement":S=s}return{reset:{placement:S}}}return{}}}},Um=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:i,placement:r,rects:n,platform:s,elements:u}=e,c=function(d,p,a,l){l===void 0&&(l=!1);const h=Pr(d),f=_s(d),m=As(d)==="x",g=["left","top"].includes(h)?-1:1;let v=1;f==="end"&&(v=-1),l&&m&&(v*=-1);const y=typeof a=="function"?a(Vt(Be({},p),{placement:d})):a,{mainAxis:b,crossAxis:x}=typeof y=="number"?{mainAxis:y,crossAxis:0}:Be({mainAxis:0,crossAxis:0},y);return m?{x:x*v,y:b*g}:{x:b*g,y:x*v}}(r,n,t,await(s.isRTL==null?void 0:s.isRTL(u.floating)));return{x:o+c.x,y:i+c.y,data:c}}}},Bm=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:i,platform:r,elements:n}=e,s=t,{apply:u}=s,c=pl(s,["apply"]),d=await hl(e,c),p=Pr(o),a=_s(o);let l,h;p==="top"||p==="bottom"?(l=p,h=a===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(h=p,l=a==="end"?"top":"bottom");const f=_i(d.left,0),m=_i(d.right,0),g=_i(d.top,0),v=_i(d.bottom,0),y={height:i.floating.height-(["left","right"].includes(o)?2*(g!==0||v!==0?g+v:_i(d.top,d.bottom)):d[l]),width:i.floating.width-(["top","bottom"].includes(o)?2*(f!==0||m!==0?f+m:_i(d.left,d.right)):d[h])};return u==null||u(Be(Be({},y),i)),{reset:{rects:!0}}}}};function fl(t){return(t==null?void 0:t.toString())==="[object Window]"}function si(t){if(t==null)return window;if(!fl(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function Sn(t){return si(t).getComputedStyle(t)}function Eo(t){return fl(t)?"":t?(t.nodeName||"").toLowerCase():""}function io(t){return t instanceof si(t).HTMLElement}function wr(t){return t instanceof si(t).Element}function ml(t){return t instanceof si(t).ShadowRoot||t instanceof ShadowRoot}function Es(t){const{overflow:e,overflowX:o,overflowY:i}=Sn(t);return/auto|scroll|overlay|hidden/.test(e+i+o)}function Vm(t){return["table","td","th"].includes(Eo(t))}function Bc(t){const e=navigator.userAgent.toLowerCase().includes("firefox"),o=Sn(t);return o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].includes(o.willChange)||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"}var Vc=Math.min,en=Math.max,ns=Math.round;function Oo(t,e){e===void 0&&(e=!1);const o=t.getBoundingClientRect();let i=1,r=1;return e&&io(t)&&(i=t.offsetWidth>0&&ns(o.width)/t.offsetWidth||1,r=t.offsetHeight>0&&ns(o.height)/t.offsetHeight||1),{width:o.width/i,height:o.height/r,top:o.top/r,right:o.right/i,bottom:o.bottom/r,left:o.left/i,x:o.left/i,y:o.top/r}}function Yo(t){return(e=t,(e instanceof si(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function Os(t){return fl(t)?{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}:{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Ld(t){return Oo(Yo(t)).left+Os(t).scrollLeft}function Hm(t,e,o){const i=io(e),r=Yo(e),n=Oo(t,i&&function(c){const d=Oo(c);return ns(d.width)!==c.offsetWidth||ns(d.height)!==c.offsetHeight}(e));let s={scrollLeft:0,scrollTop:0};const u={x:0,y:0};if(i||!i&&o!=="fixed")if((Eo(e)!=="body"||Es(r))&&(s=Os(e)),io(e)){const c=Oo(e,!0);u.x=c.x+e.clientLeft,u.y=c.y+e.clientTop}else r&&(u.x=Ld(r));return{x:n.left+s.scrollLeft-u.x,y:n.top+s.scrollTop-u.y,width:n.width,height:n.height}}function Ss(t){return Eo(t)==="html"?t:t.assignedSlot||t.parentNode||(ml(t)?t.host:null)||Yo(t)}function Hc(t){return io(t)&&getComputedStyle(t).position!=="fixed"?t.offsetParent:null}function $a(t){const e=si(t);let o=Hc(t);for(;o&&Vm(o)&&getComputedStyle(o).position==="static";)o=Hc(o);return o&&(Eo(o)==="html"||Eo(o)==="body"&&getComputedStyle(o).position==="static"&&!Bc(o))?e:o||function(i){let r=Ss(i);for(ml(r)&&(r=r.host);io(r)&&!["html","body"].includes(Eo(r));){if(Bc(r))return r;r=r.parentNode}return null}(t)||e}function Kc(t){if(io(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=Oo(t);return{width:e.width,height:e.height}}function Md(t){return["html","body","#document"].includes(Eo(t))?t.ownerDocument.body:io(t)&&Es(t)?t:Md(Ss(t))}function ss(t,e){var o;e===void 0&&(e=[]);const i=Md(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),n=si(i),s=r?[n].concat(n.visualViewport||[],Es(i)?i:[]):i,u=e.concat(s);return r?u:u.concat(ss(Ss(s)))}function Gc(t,e){return e==="viewport"?rs(function(o){const i=si(o),r=Yo(o),n=i.visualViewport;let s=r.clientWidth,u=r.clientHeight,c=0,d=0;return n&&(s=n.width,u=n.height,Math.abs(i.innerWidth/n.scale-n.width)<.01&&(c=n.offsetLeft,d=n.offsetTop)),{width:s,height:u,x:c,y:d}}(t)):wr(e)?function(o){const i=Oo(o),r=i.top+o.clientTop,n=i.left+o.clientLeft;return{top:r,left:n,x:n,y:r,right:n+o.clientWidth,bottom:r+o.clientHeight,width:o.clientWidth,height:o.clientHeight}}(e):rs(function(o){var i;const r=Yo(o),n=Os(o),s=(i=o.ownerDocument)==null?void 0:i.body,u=en(r.scrollWidth,r.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),c=en(r.scrollHeight,r.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0);let d=-n.scrollLeft+Ld(o);const p=-n.scrollTop;return Sn(s||r).direction==="rtl"&&(d+=en(r.clientWidth,s?s.clientWidth:0)-u),{width:u,height:c,x:d,y:p}}(Yo(t)))}function Km(t){const e=ss(Ss(t)),o=["absolute","fixed"].includes(Sn(t).position)&&io(t)?$a(t):t;return wr(o)?e.filter(i=>wr(i)&&function(r,n){const s=n.getRootNode==null?void 0:n.getRootNode();if(r.contains(n))return!0;if(s&&ml(s)){let u=n;do{if(u&&r===u)return!0;u=u.parentNode||u.host}while(u)}return!1}(i,o)&&Eo(i)!=="body"):[]}var Gm={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:i}=t;const r=[...o==="clippingAncestors"?Km(e):[].concat(o),i],n=r[0],s=r.reduce((u,c)=>{const d=Gc(e,c);return u.top=en(d.top,u.top),u.right=Vc(d.right,u.right),u.bottom=Vc(d.bottom,u.bottom),u.left=en(d.left,u.left),u},Gc(e,n));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:i}=t;const r=io(o),n=Yo(o);if(o===n)return e;let s={scrollLeft:0,scrollTop:0};const u={x:0,y:0};if((r||!r&&i!=="fixed")&&((Eo(o)!=="body"||Es(n))&&(s=Os(o)),io(o))){const c=Oo(o,!0);u.x=c.x+o.clientLeft,u.y=c.y+o.clientTop}return Vt(Be({},e),{x:e.x-s.scrollLeft+u.x,y:e.y-s.scrollTop+u.y})},isElement:wr,getDimensions:Kc,getOffsetParent:$a,getDocumentElement:Yo,getElementRects:t=>{let{reference:e,floating:o,strategy:i}=t;return{reference:Hm(e,$a(o),i),floating:Vt(Be({},Kc(o)),{x:0,y:0})}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>Sn(t).direction==="rtl"},Wm=(t,e,o)=>(async(i,r,n)=>{const{placement:s="bottom",strategy:u="absolute",middleware:c=[],platform:d}=n,p=await(d.isRTL==null?void 0:d.isRTL(r));let a=await d.getElementRects({reference:i,floating:r,strategy:u}),{x:l,y:h}=zc(a,s,p),f=s,m={};const g=new Set;for(let v=0;v<c.length;v++){const{name:y,fn:b}=c[v];if(g.has(y))continue;const{x,y:w,data:_,reset:I}=await b({x:l,y:h,initialPlacement:s,placement:f,strategy:u,middlewareData:m,rects:a,platform:d,elements:{reference:i,floating:r}});l=x!=null?x:l,h=w!=null?w:h,m=Vt(Be({},m),{[y]:Be(Be({},m[y]),_)}),I&&(typeof I=="object"&&(I.placement&&(f=I.placement),I.rects&&(a=I.rects===!0?await d.getElementRects({reference:i,floating:r,strategy:u}):I.rects),{x:l,y:h}=zc(a,f,p),I.skip!==!1&&g.add(y)),v=-1)}return{x:l,y:h,placement:f,strategy:u,middlewareData:m}})(t,e,Be({platform:Gm},o)),Qm=Qe`
  ${st}

  :host {
    display: inline-block;
  }

  .dropdown {
    position: relative;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__positioner {
    position: absolute;
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    box-shadow: var(--sl-shadow-large);
    overflow: auto;
    overscroll-behavior: none;
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  .dropdown__positioner[data-placement^='top'] .dropdown__panel {
    transform-origin: bottom;
  }

  .dropdown__positioner[data-placement^='bottom'] .dropdown__panel {
    transform-origin: top;
  }

  .dropdown__positioner[data-placement^='left'] .dropdown__panel {
    transform-origin: right;
  }

  .dropdown__positioner[data-placement^='right'] .dropdown__panel {
    transform-origin: left;
  }
`,pt=class extends Ve{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}async firstUpdated(){this.panel.hidden=!this.open,this.open&&(await this.updateComplete,this.addOpenListeners(),this.startPositioner())}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide(),this.stopPositioner()}focusOnTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleDocumentKeyDown(t){var e;if(t.key==="Escape")return this.hide(),void this.focusOnTrigger();if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item")return t.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout(()=>{var o,i,r;const n=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?(r=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:r.activeElement:document.activeElement;this.containingElement&&(n==null?void 0:n.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()})}}handleDocumentMouseDown(t){const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(t){Ma(t.target,this.panel)}handlePanelSelect(t){const e=t.target;this.stayOpenOnSelect||e.tagName.toLowerCase()!=="sl-menu"||(this.hide(),this.focusOnTrigger())}handlePopoverOptionsChange(){this.updatePositioner()}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(t){if(t.key==="Escape")return this.focusOnTrigger(),void this.hide();if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();const e=this.getMenu();if(e){const o=e.defaultSlot.assignedElements({flatten:!0}),i=o[0],r=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||this.show(),o.length>0&&requestAnimationFrame(()=>{t.key!=="ArrowDown"&&t.key!=="Home"||(e.setCurrentItem(i),i.focus()),t.key!=="ArrowUp"&&t.key!=="End"||(e.setCurrentItem(r),r.focus())}));const n=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&!n.includes(t.key)&&e.typeToSelect(t)}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find(o=>Nd(o).start);let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,xr(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xr(this,"sl-after-hide")}reposition(){this.updatePositioner()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){fe(this,"sl-show"),this.addOpenListeners(),await Zo(this),this.startPositioner(),this.panel.hidden=!1;const{keyframes:t,options:e}=_o(this,"dropdown.show");await xo(this.panel,t,e),fe(this,"sl-after-show")}else{fe(this,"sl-hide"),this.removeOpenListeners(),await Zo(this);const{keyframes:t,options:e}=_o(this,"dropdown.hide");await xo(this.panel,t,e),this.panel.hidden=!0,this.stopPositioner(),fe(this,"sl-after-hide")}}startPositioner(){this.stopPositioner(),this.updatePositioner(),this.positionerCleanup=function(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=!0,animationFrame:u=!1}=i;let c=!1;const d=r&&!u,p=n&&!u,a=s&&!u,l=d||p?[...wr(t)?ss(t):[],...ss(e)]:[];l.forEach(g=>{d&&g.addEventListener("scroll",o,{passive:!0}),p&&g.addEventListener("resize",o)});let h,f=null;a&&(f=new ResizeObserver(o),wr(t)&&f.observe(t),f.observe(e));let m=u?Oo(t):null;return u&&function g(){if(c)return;const v=Oo(t);!m||v.x===m.x&&v.y===m.y&&v.width===m.width&&v.height===m.height||o(),m=v,h=requestAnimationFrame(g)}(),()=>{var g;c=!0,l.forEach(v=>{d&&v.removeEventListener("scroll",o),p&&v.removeEventListener("resize",o)}),(g=f)==null||g.disconnect(),f=null,u&&cancelAnimationFrame(h)}}(this.trigger,this.positioner,this.updatePositioner.bind(this))}updatePositioner(){var t;this.open&&this.trigger&&this.positioner&&Wm(this.trigger,this.positioner,{placement:this.placement,middleware:[Um({mainAxis:this.distance,crossAxis:this.skidding}),Fm(),(t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:r}=e,n=t,{mainAxis:s=!0,crossAxis:u=!1,limiter:c={fn:v=>{let{x:y,y:b}=v;return{x:y,y:b}}}}=n,d=pl(n,["mainAxis","crossAxis","limiter"]),p={x:o,y:i},a=await hl(e,d),l=As(Pr(r)),h=l==="x"?"y":"x";let f=p[l],m=p[h];if(s){const v=l==="y"?"bottom":"right";f=Fc(f+a[l==="y"?"top":"left"],f,f-a[v])}if(u){const v=h==="y"?"bottom":"right";m=Fc(m+a[h==="y"?"top":"left"],m,m-a[v])}const g=c.fn(Vt(Be({},e),{[l]:f,[h]:m}));return Vt(Be({},g),{data:{x:g.x-o,y:g.y-i}})}}),Bm({apply:({width:e,height:o})=>{Object.assign(this.panel.style,{maxWidth:`${e}px`,maxHeight:`${o}px`})},padding:8})],strategy:this.hoist?"fixed":"absolute"}).then(({x:e,y:o,placement:i})=>{this.positioner.setAttribute("data-placement",i),Object.assign(this.positioner.style,{position:this.hoist?"fixed":"absolute",left:`${e}px`,top:`${o}px`})})}stopPositioner(){this.positionerCleanup&&(this.positionerCleanup(),this.positionerCleanup=void 0,this.positioner.removeAttribute("data-placement"))}render(){return ye`
      <div
        part="base"
        id="dropdown"
        class=${bt({dropdown:!0,"dropdown--open":this.open})}
      >
        <span
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <!-- Position the panel with a wrapper since the popover makes use of translate. This let's us add animations
        on the panel without interfering with the position. -->
        <div class="dropdown__positioner">
          <div
            part="panel"
            class="dropdown__panel"
            aria-hidden=${this.open?"false":"true"}
            aria-labelledby="dropdown"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `}};pt.styles=Qm,T([Le(".dropdown__trigger")],pt.prototype,"trigger",2),T([Le(".dropdown__panel")],pt.prototype,"panel",2),T([Le(".dropdown__positioner")],pt.prototype,"positioner",2),T([z({type:Boolean,reflect:!0})],pt.prototype,"open",2),T([z({reflect:!0})],pt.prototype,"placement",2),T([z({type:Boolean})],pt.prototype,"disabled",2),T([z({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],pt.prototype,"stayOpenOnSelect",2),T([z({attribute:!1})],pt.prototype,"containingElement",2),T([z({type:Number})],pt.prototype,"distance",2),T([z({type:Number})],pt.prototype,"skidding",2),T([z({type:Boolean})],pt.prototype,"hoist",2),T([Ke("distance"),Ke("hoist"),Ke("placement"),Ke("skidding")],pt.prototype,"handlePopoverOptionsChange",1),T([Ke("open",{waitUntilFirstUpdate:!0})],pt.prototype,"handleOpenChange",1),pt=T([ot("sl-dropdown")],pt),wo("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:100,easing:"ease"}}),wo("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:100,easing:"ease"}});var je=class extends Ve{constructor(){super(...arguments),this.formSubmitController=new ws(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")}}),this.hasSlotController=new qr(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,fe(this,"sl-blur")}handleFocus(){this.hasFocus=!0,fe(this,"sl-focus")}handleClick(t){if(this.disabled||this.loading)return t.preventDefault(),void t.stopPropagation();this.type==="submit"&&this.formSubmitController.submit(this)}render(){const t=!!this.href,e=t?Cc`a`:Cc`button`;return Qn`
      <${e}
        part="base"
        class=${bt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${xe(t?void 0:this.disabled)}
        type=${this.type}
        name=${xe(t?void 0:this.name)}
        value=${xe(t?void 0:this.value)}
        href=${xe(this.href)}
        target=${xe(this.target)}
        download=${xe(this.download)}
        rel=${xe(this.target?"noreferrer noopener":void 0)}
        role="button"
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?Qn`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?Qn`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};je.styles=kd,T([Le(".button")],je.prototype,"button",2),T([Gt()],je.prototype,"hasFocus",2),T([z({reflect:!0})],je.prototype,"variant",2),T([z({reflect:!0})],je.prototype,"size",2),T([z({type:Boolean,reflect:!0})],je.prototype,"caret",2),T([z({type:Boolean,reflect:!0})],je.prototype,"disabled",2),T([z({type:Boolean,reflect:!0})],je.prototype,"loading",2),T([z({type:Boolean,reflect:!0})],je.prototype,"outline",2),T([z({type:Boolean,reflect:!0})],je.prototype,"pill",2),T([z({type:Boolean,reflect:!0})],je.prototype,"circle",2),T([z()],je.prototype,"type",2),T([z()],je.prototype,"name",2),T([z()],je.prototype,"value",2),T([z()],je.prototype,"href",2),T([z()],je.prototype,"target",2),T([z()],je.prototype,"download",2),T([z()],je.prototype,"form",2),T([z({attribute:"formaction"})],je.prototype,"formAction",2),T([z({attribute:"formmethod"})],je.prototype,"formMethod",2),T([z({attribute:"formnovalidate",type:Boolean})],je.prototype,"formNoValidate",2),T([z({attribute:"formtarget"})],je.prototype,"formTarget",2),je=T([ot("sl-button")],je);var Zm=Qe`
  ${st}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,na=class extends Ve{render(){return ye`
      <svg part="base" class="spinner" role="status">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};function ue(t,e,o,i){var r,n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,o,i);else for(var u=t.length-1;u>=0;u--)(r=t[u])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}na.styles=Zm,na=T([ot("sl-spinner")],na);const gl=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vl=Symbol(),Wc=new Map;class $d{constructor(e,o){if(this._$cssResult$=!0,o!==vl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Wc.get(this.cssText);return gl&&e===void 0&&(Wc.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const kn=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((i,r,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return new $d(o,vl)},Qc=gl?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(const i of e.cssRules)o+=i.cssText;return(i=>new $d(typeof i=="string"?i:i+"",vl))(o)})(t):t;var sa;const Zc=window.trustedTypes,Xm=Zc?Zc.emptyScript:"",Xc=window.reactiveElementPolyfillSupport,ja={toAttribute(t,e){switch(e){case Boolean:t=t?Xm:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},jd=(t,e)=>e!==t&&(e==e||t==t),aa={attribute:!0,type:String,converter:ja,reflect:!1,hasChanged:jd};class sr extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var o;(o=this.l)!==null&&o!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((o,i)=>{const r=this._$Eh(i,o);r!==void 0&&(this._$Eu.set(r,i),e.push(r))}),e}static createProperty(e,o=aa){if(o.state&&(o.attribute=!1),this.finalize(),this.elementProperties.set(e,o),!o.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,o);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,o,i){return{get(){return this[o]},set(r){const n=this[e];this[o]=r,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||aa}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const o=this.properties,i=[...Object.getOwnPropertyNames(o),...Object.getOwnPropertySymbols(o)];for(const r of i)this.createProperty(r,o[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)o.unshift(Qc(r))}else e!==void 0&&o.push(Qc(e));return o}static _$Eh(e,o){const i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(o=>o(this))}addController(e){var o,i;((o=this._$Eg)!==null&&o!==void 0?o:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var o;(o=this._$Eg)===null||o===void 0||o.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,o)=>{this.hasOwnProperty(o)&&(this._$Et.set(o,this[o]),delete this[o])})}createRenderRoot(){var e;const o=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{gl?i.adoptedStyleSheets=r.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):r.forEach(n=>{const s=document.createElement("style"),u=window.litNonce;u!==void 0&&s.setAttribute("nonce",u),s.textContent=n.cssText,i.appendChild(s)})})(o,this.constructor.elementStyles),o}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostConnected)===null||i===void 0?void 0:i.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostDisconnected)===null||i===void 0?void 0:i.call(o)})}attributeChangedCallback(e,o,i){this._$AK(e,i)}_$ES(e,o,i=aa){var r,n;const s=this.constructor._$Eh(e,i);if(s!==void 0&&i.reflect===!0){const u=((n=(r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&n!==void 0?n:ja.toAttribute)(o,i.type);this._$Ei=e,u==null?this.removeAttribute(s):this.setAttribute(s,u),this._$Ei=null}}_$AK(e,o){var i,r,n;const s=this.constructor,u=s._$Eu.get(e);if(u!==void 0&&this._$Ei!==u){const c=s.getPropertyOptions(u),d=c.converter,p=(n=(r=(i=d)===null||i===void 0?void 0:i.fromAttribute)!==null&&r!==void 0?r:typeof d=="function"?d:null)!==null&&n!==void 0?n:ja.fromAttribute;this._$Ei=u,this[u]=p(o,c.type),this._$Ei=null}}requestUpdate(e,o,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||jd)(this[e],o)?(this._$AL.has(e)||this._$AL.set(e,o),i.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,n)=>this[n]=r),this._$Et=void 0);let o=!1;const i=this._$AL;try{o=this.shouldUpdate(i),o?(this.willUpdate(i),(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(i)):this._$EU()}catch(r){throw o=!1,this._$EU(),r}o&&this._$AE(i)}willUpdate(e){}_$AE(e){var o;(o=this._$Eg)===null||o===void 0||o.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((o,i)=>this._$ES(i,this[i],o)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var la;sr.finalized=!0,sr.elementProperties=new Map,sr.elementStyles=[],sr.shadowRootOptions={mode:"open"},Xc==null||Xc({ReactiveElement:sr}),((sa=globalThis.reactiveElementVersions)!==null&&sa!==void 0?sa:globalThis.reactiveElementVersions=[]).push("1.3.1");const _r=globalThis.trustedTypes,Yc=_r?_r.createPolicy("lit-html",{createHTML:t=>t}):void 0,Wo=`lit$${(Math.random()+"").slice(9)}$`,zd="?"+Wo,Ym=`<${zd}>`,Ar=document,hn=(t="")=>Ar.createComment(t),fn=t=>t===null||typeof t!="object"&&typeof t!="function",Jc=Array.isArray,Fr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eu=/-->/g,tu=/>/g,yi=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ou=/'/g,iu=/"/g,Fd=/^(?:script|style|textarea|title)$/i,Oe=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),$i=Symbol.for("lit-noChange"),Ye=Symbol.for("lit-nothing"),ru=new WeakMap,hr=Ar.createTreeWalker(Ar,129,null,!1),Jm=(t,e)=>{const o=t.length-1,i=[];let r,n=e===2?"<svg>":"",s=Fr;for(let c=0;c<o;c++){const d=t[c];let p,a,l=-1,h=0;for(;h<d.length&&(s.lastIndex=h,a=s.exec(d),a!==null);)h=s.lastIndex,s===Fr?a[1]==="!--"?s=eu:a[1]!==void 0?s=tu:a[2]!==void 0?(Fd.test(a[2])&&(r=RegExp("</"+a[2],"g")),s=yi):a[3]!==void 0&&(s=yi):s===yi?a[0]===">"?(s=r!=null?r:Fr,l=-1):a[1]===void 0?l=-2:(l=s.lastIndex-a[2].length,p=a[1],s=a[3]===void 0?yi:a[3]==='"'?iu:ou):s===iu||s===ou?s=yi:s===eu||s===tu?s=Fr:(s=yi,r=void 0);const f=s===yi&&t[c+1].startsWith("/>")?" ":"";n+=s===Fr?d+Ym:l>=0?(i.push(p),d.slice(0,l)+"$lit$"+d.slice(l)+Wo+f):d+Wo+(l===-2?(i.push(void 0),c):f)}const u=n+(t[o]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Yc!==void 0?Yc.createHTML(u):u,i]};class mn{constructor({strings:e,_$litType$:o},i){let r;this.parts=[];let n=0,s=0;const u=e.length-1,c=this.parts,[d,p]=Jm(e,o);if(this.el=mn.createElement(d,i),hr.currentNode=this.el.content,o===2){const a=this.el.content,l=a.firstChild;l.remove(),a.append(...l.childNodes)}for(;(r=hr.nextNode())!==null&&c.length<u;){if(r.nodeType===1){if(r.hasAttributes()){const a=[];for(const l of r.getAttributeNames())if(l.endsWith("$lit$")||l.startsWith(Wo)){const h=p[s++];if(a.push(l),h!==void 0){const f=r.getAttribute(h.toLowerCase()+"$lit$").split(Wo),m=/([.?@])?(.*)/.exec(h);c.push({type:1,index:n,name:m[2],strings:f,ctor:m[1]==="."?tg:m[1]==="?"?ig:m[1]==="@"?rg:ks})}else c.push({type:6,index:n})}for(const l of a)r.removeAttribute(l)}if(Fd.test(r.tagName)){const a=r.textContent.split(Wo),l=a.length-1;if(l>0){r.textContent=_r?_r.emptyScript:"";for(let h=0;h<l;h++)r.append(a[h],hn()),hr.nextNode(),c.push({type:2,index:++n});r.append(a[l],hn())}}}else if(r.nodeType===8)if(r.data===zd)c.push({type:2,index:n});else{let a=-1;for(;(a=r.data.indexOf(Wo,a+1))!==-1;)c.push({type:7,index:n}),a+=Wo.length-1}n++}}static createElement(e,o){const i=Ar.createElement("template");return i.innerHTML=e,i}}function Er(t,e,o=t,i){var r,n,s,u;if(e===$i)return e;let c=i!==void 0?(r=o._$Cl)===null||r===void 0?void 0:r[i]:o._$Cu;const d=fn(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==d&&((n=c==null?void 0:c._$AO)===null||n===void 0||n.call(c,!1),d===void 0?c=void 0:(c=new d(t),c._$AT(t,o,i)),i!==void 0?((s=(u=o)._$Cl)!==null&&s!==void 0?s:u._$Cl=[])[i]=c:o._$Cu=c),c!==void 0&&(e=Er(t,c._$AS(t,e.values),c,i)),e}class eg{constructor(e,o){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var o;const{el:{content:i},parts:r}=this._$AD,n=((o=e==null?void 0:e.creationScope)!==null&&o!==void 0?o:Ar).importNode(i,!0);hr.currentNode=n;let s=hr.nextNode(),u=0,c=0,d=r[0];for(;d!==void 0;){if(u===d.index){let p;d.type===2?p=new In(s,s.nextSibling,this,e):d.type===1?p=new d.ctor(s,d.name,d.strings,this,e):d.type===6&&(p=new ng(s,this,e)),this.v.push(p),d=r[++c]}u!==(d==null?void 0:d.index)&&(s=hr.nextNode(),u++)}return n}m(e){let o=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,o),o+=i.strings.length-2):i._$AI(e[o])),o++}}class In{constructor(e,o,i,r){var n;this.type=2,this._$AH=Ye,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=i,this.options=r,this._$Cg=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var e,o;return(o=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&o!==void 0?o:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&e.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=Er(this,e,o),fn(e)?e===Ye||e==null||e===""?(this._$AH!==Ye&&this._$AR(),this._$AH=Ye):e!==this._$AH&&e!==$i&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):(i=>{var r;return Jc(i)||typeof((r=i)===null||r===void 0?void 0:r[Symbol.iterator])=="function"})(e)?this.S(e):this.$(e)}M(e,o=this._$AB){return this._$AA.parentNode.insertBefore(e,o)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==Ye&&fn(this._$AH)?this._$AA.nextSibling.data=e:this.k(Ar.createTextNode(e)),this._$AH=e}T(e){var o;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=mn.createElement(r.h,this.options)),r);if(((o=this._$AH)===null||o===void 0?void 0:o._$AD)===n)this._$AH.m(i);else{const s=new eg(n,this),u=s.p(this.options);s.m(i),this.k(u),this._$AH=s}}_$AC(e){let o=ru.get(e.strings);return o===void 0&&ru.set(e.strings,o=new mn(e)),o}S(e){Jc(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let i,r=0;for(const n of e)r===o.length?o.push(i=new In(this.M(hn()),this.M(hn()),this,this.options)):i=o[r],i._$AI(n),r++;r<o.length&&(this._$AR(i&&i._$AB.nextSibling,r),o.length=r)}_$AR(e=this._$AA.nextSibling,o){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,o);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var o;this._$AM===void 0&&(this._$Cg=e,(o=this._$AP)===null||o===void 0||o.call(this,e))}}class ks{constructor(e,o,i,r,n){this.type=1,this._$AH=Ye,this._$AN=void 0,this.element=e,this.name=o,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ye}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,o=this,i,r){const n=this.strings;let s=!1;if(n===void 0)e=Er(this,e,o,0),s=!fn(e)||e!==this._$AH&&e!==$i,s&&(this._$AH=e);else{const u=e;let c,d;for(e=n[0],c=0;c<n.length-1;c++)d=Er(this,u[i+c],o,c),d===$i&&(d=this._$AH[c]),s||(s=!fn(d)||d!==this._$AH[c]),d===Ye?e=Ye:e!==Ye&&(e+=(d!=null?d:"")+n[c+1]),this._$AH[c]=d}s&&!r&&this.C(e)}C(e){e===Ye?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class tg extends ks{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===Ye?void 0:e}}const og=_r?_r.emptyScript:"";class ig extends ks{constructor(){super(...arguments),this.type=4}C(e){e&&e!==Ye?this.element.setAttribute(this.name,og):this.element.removeAttribute(this.name)}}class rg extends ks{constructor(e,o,i,r,n){super(e,o,i,r,n),this.type=5}_$AI(e,o=this){var i;if((e=(i=Er(this,e,o,0))!==null&&i!==void 0?i:Ye)===$i)return;const r=this._$AH,n=e===Ye&&r!==Ye||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==Ye&&(r===Ye||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var o,i;typeof this._$AH=="function"?this._$AH.call((i=(o=this.options)===null||o===void 0?void 0:o.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class ng{constructor(e,o,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Er(this,e)}}const nu=window.litHtmlPolyfillSupport;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ca,ua;nu==null||nu(mn,In),((la=globalThis.litHtmlVersions)!==null&&la!==void 0?la:globalThis.litHtmlVersions=[]).push("2.2.2");class vt extends sr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,o;const i=super.createRenderRoot();return(e=(o=this.renderOptions).renderBefore)!==null&&e!==void 0||(o.renderBefore=i.firstChild),i}update(e){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((i,r,n)=>{var s,u;const c=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:r;let d=c._$litPart$;if(d===void 0){const p=(u=n==null?void 0:n.renderBefore)!==null&&u!==void 0?u:null;c._$litPart$=d=new In(r.insertBefore(hn(),p),p,void 0,n!=null?n:{})}return d._$AI(i),d})(o,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return $i}}vt.finalized=!0,vt._$litElement$=!0,(ca=globalThis.litElementHydrateSupport)===null||ca===void 0||ca.call(globalThis,{LitElement:vt});const su=globalThis.litElementPolyfillSupport;su==null||su({LitElement:vt}),((ua=globalThis.litElementVersions)!==null&&ua!==void 0?ua:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=t=>e=>typeof e=="function"?((o,i)=>(window.customElements.define(o,i),i))(t,e):((o,i)=>{const{kind:r,elements:n}=i;return{kind:r,elements:n,finisher(s){window.customElements.define(o,s)}}})(t,e),sg=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?uo(rt({},e),{finisher(o){o.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function et(t){return(e,o)=>o!==void 0?((i,r,n)=>{r.constructor.createProperty(n,i)})(t,e,o):sg(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function as(t){return et(uo(rt({},t),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ud=({finisher:t,descriptor:e})=>(o,i)=>{var r;if(i===void 0){const n=(r=o.originalKey)!==null&&r!==void 0?r:o.key,s=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(o.key)}:uo(rt({},o),{key:n});return t!=null&&(s.finisher=function(u){t(u,n)}),s}{const n=o.constructor;e!==void 0&&Object.defineProperty(o,i,e(i)),t==null||t(n,i)}};function ki(t,e){return Ud({descriptor:o=>{const i={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const r=typeof o=="symbol"?Symbol():"__"+o;i.get=function(){var n,s;return this[r]===void 0&&(this[r]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(t))!==null&&s!==void 0?s:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function au(t){return Ud({descriptor:e=>({get(){var o,i;return(i=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelectorAll(t))!==null&&i!==void 0?i:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var da;(da=window.HTMLSlotElement)===null||da===void 0||da.prototype.assignedElements;/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const qn=t=>e=>class extends e{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=t.subscribe(()=>this.stateChanged(t.getState())),this.stateChanged(t.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(o){}};function _t(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var lu=typeof Symbol=="function"&&Symbol.observable||"@@observable",pa=function(){return Math.random().toString(36).substring(7).split("").join(".")},ls={INIT:"@@redux/INIT"+pa(),REPLACE:"@@redux/REPLACE"+pa(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+pa()}};function ag(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}const R={agrupadorGenerico:{tipo:"DispositivoAgrupadorGenerico",name:void 0,tagId:"dg",descricao:void 0,descricaoPlural:void 0,tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo","Secao"],tiposPermitidosFilhos:["Parte","Livro","Titulo","Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},alinea:{tipo:"Alinea",name:"Alinea",tagId:"ali",descricao:"Al\xEDnea",descricaoPlural:"Al\xEDneas",tiposPermitidosPai:["Inciso"],tiposPermitidosFilhos:["Item"],tipoProvavelFilho:"Item",INDICADOR_SEQUENCIA:[";","; e","; ou"],INDICADOR_FIM_SEQUENCIA:["."],INDICADOR_DESDOBRAMENTO:[":"]},articulacao:{tipo:"Articulacao",name:"Articulacao",tagId:"",descricao:"Articula\xE7\xE3o",descricaoPlural:"Articula\xE7\xF5es",tiposPermitidosPai:[],tiposPermitidosFilhos:["Parte","Livro","Titulo","Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["."],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:[":"]},artigo:{tipo:"Artigo",name:"Artigo",tagId:"art",descricao:"Artigo",descricaoPlural:"Artigos",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo","Secao","Subsecao"],tiposPermitidosFilhos:["Paragrafo","Inciso"],tipoProvavelFilho:"Inciso",INDICADOR_SEQUENCIA:["."],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:[":"]},capitulo:{tipo:"Capitulo",name:"Capitulo",tagId:"cap",descricao:"Cap\xEDtulo",descricaoPlural:"Cap\xEDtulos",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo"],tiposPermitidosFilhos:["Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},caput:{tipo:"Caput",name:"Caput",tagId:"cpt",descricao:"Caput",descricaoPlural:"Capita",tiposPermitidosPai:["Artigo"],tiposPermitidosFilhos:["Inciso"],tipoProvavelFilho:"Inciso",INDICADOR_SEQUENCIA:["."],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:[":"]},generico:{tipo:"DispositivoGenerico",name:void 0,tagId:"gen",descricao:"Dispositivo gen\xE9rico",descricaoPlural:"Dispositivos gen\xE9ricos",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo","Secao","Subsecao"],tiposPermitidosFilhos:["Paragrafo","Inciso","Alinea","Item"],tipoProvavelFilho:"DispositivoGenerico",INDICADOR_SEQUENCIA:[";","; e","; ou"],INDICADOR_FIM_SEQUENCIA:["."],INDICADOR_DESDOBRAMENTO:[":"]},inciso:{tipo:"Inciso",name:"Inciso",tagId:"inc",descricao:"Inciso",descricaoPlural:"Incisos",tiposPermitidosPai:["Artigo","Caput","Paragrafo"],tiposPermitidosFilhos:["Alinea"],tipoProvavelFilho:"Alinea",INDICADOR_SEQUENCIA:[";","; e","; ou"],INDICADOR_FIM_SEQUENCIA:["."],INDICADOR_DESDOBRAMENTO:[":"]},item:{tipo:"Item",name:"Item",tagId:"ite",descricao:"Item",descricaoPlural:"Itens",tiposPermitidosPai:["Alinea"],tiposPermitidosFilhos:[],tipoProvavelFilho:"DispositivoGenerico",INDICADOR_SEQUENCIA:[";","; e","; ou"],INDICADOR_FIM_SEQUENCIA:["."],INDICADOR_DESDOBRAMENTO:[":"]},livro:{tipo:"Livro",name:"Livro",tagId:"liv",descricao:"Livro",descricaoPlural:"Livros",tiposPermitidosPai:["Articulacao","Parte"],tiposPermitidosFilhos:["Titulo","Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},omissis:{tipo:"Omissis",name:"Omissis",tagId:"omi",descricao:"Linha pontilhada (omissis)",descricaoPlural:"Linhas pontilhadas (omissis)",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo","Secao","Subsecao","Artigo","Caput","Paragrafo","Alinea","Inciso"],tiposPermitidosFilhos:["Parte","Livro","Titulo","Capitulo","Secao","Subsecao","Artigo","Paragrafo","Alinea","Inciso","Item"],tipoProvavelFilho:void 0,INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:["NA"]},paragrafo:{tipo:"Paragrafo",name:"Paragrafo",tagId:"par",descricao:"Par\xE1grafo",descricaoPlural:"Par\xE1grafos",tiposPermitidosPai:["Artigo"],tiposPermitidosFilhos:["Inciso"],tipoProvavelFilho:"Inciso",INDICADOR_SEQUENCIA:["."],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:[":"]},parte:{tipo:"Parte",name:"Parte",tagId:"prt",descricao:"Parte",descricaoPlural:"Partes",tiposPermitidosPai:["Articulacao"],tiposPermitidosFilhos:["Livro","Titulo","Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},secao:{tipo:"Secao",name:"Secao",tagId:"sec",descricao:"Se\xE7\xE3o",descricaoPlural:"Se\xE7\xF5es",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo"],tiposPermitidosFilhos:["Subsecao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},subsecao:{tipo:"Subsecao",name:"Subsecao",tagId:"sub",descricao:"Subse\xE7\xE3o",descricaoPlural:"Subse\xE7\xF5es",tiposPermitidosPai:["Secao"],tiposPermitidosFilhos:["Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},titulo:{tipo:"Titulo",name:"Titulo",tagId:"tit",descricao:"T\xEDtulo",descricaoPlural:"T\xEDtulos",tiposPermitidosPai:["Articulacao","Parte","Livro"],tiposPermitidosFilhos:["Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]}};class at{constructor(e,o){var i;this.isDispositivoAlteracao=!1,this.descricao=`Adicionar ${(i=e==null?void 0:e.descricao)!==null&&i!==void 0?i:""} ${o!=null?o:""}`,this.tipo=e==null?void 0:e.tipo,this.posicao=o}execute(e,o,i,r=!1){return{type:"ADICIONAR_ELEMENTO",atual:e,novo:{tipo:i,isDispositivoAlteracao:this.isDispositivoAlteracao,conteudo:{texto:o}},hasDesmembramento:r,posicao:this.posicao}}}const bl=new at,Bd=new at(R.artigo),Vd=new at(R.artigo,"antes"),Hd=new at(R.artigo,"depois"),yl=new at(R.alinea),Kd=new at(R.alinea,"antes"),Gd=new at(R.alinea,"depois"),Is=new at(R.inciso),Wd=new at(R.inciso,"antes"),Qd=new at(R.inciso,"depois"),Zd=new at(R.item),Xd=new at(R.item,"antes"),Yd=new at(R.item,"antes"),Jd=new at(R.omissis),ep=new at(R.paragrafo),tp=new at(R.paragrafo,"antes"),op=new at(R.paragrafo,"depois");class Ro{constructor(e){this.descricao="Adicionar "+e.descricao,this.tipo=e.tipo}execute(e){return{type:"AGRUPAR_ELEMENTO",atual:e,novo:{tipo:this.tipo}}}}const lg=new Ro(R.parte),cg=new Ro(R.livro),ug=new Ro(R.titulo),za=new Ro(R.capitulo),dg=new Ro(R.secao),pg=new Ro(R.subsecao),hg=new class{constructor(){this.descricao="Atualizar dispositivo"}execute(t){return{type:"APLICAR_ALTERACOES_EMENDA",alteracoesEmenda:t}}},fg=new class{constructor(){this.descricao="Atualizar dispositivo"}execute(t){return this.tipo=t.tipo,{type:"ATUALIZAR_ELEMENTO",atual:t}}},mg=new class{constructor(){this.descricao="Atualizar Norma Referenciada"}execute(t){return this.tipo=t.tipo,{type:"ATUALIZAR_REFERENCIA_ELEMENTO",atual:t}}},cu=new class{constructor(){this.descricao="Atualizar dispositivo"}execute(t){return this.tipo=t.tipo,{type:"ATUALIZAR_TEXTO_ELEMENTO",atual:t}}},gg=new class{constructor(){this.descricao="Corrigir automaticamente"}execute(t,e){return{type:"AUTO_FIX",atual:t,mensagem:e}}},vg=new class{constructor(){this.descricao="Elemento selecionado"}execute(t){return{type:"ELEMENTO_SELECIONADO",atual:t}}};class ip{constructor(){this.descricao="Informar norma alterada"}execute(e){return{type:"INFORMAR_NORMA",atual:e}}}const xl=new ip;class rp{constructor(){this.descricao="Mover para baixo"}execute(e){return{type:"Mover para baixo",atual:e}}}const ai=new rp;class np{constructor(){this.descricao="Mover para cima"}execute(e){return{type:"Mover para cima",atual:e}}}const li=new np;class qs{constructor(){this.descricao="Remover dispositivo"}execute(e){return{type:"REMOVER_ELEMENTO",atual:e}}}const lo=new qs;class Cs{constructor(){this.descricao="Numerar e criar r\xF3tulo para o dispositivo "}execute(e,o,i){return this.tipo=e.tipo,{type:"RENUMERAR_ELEMENTO",atual:e,novo:{numero:o,existenteNaNorma:i}}}}const ro=new Cs,wl=new class{constructor(){this.descricao="Abandonar modifica\xE7\xF5es do dispositivo"}execute(t){return{type:"RESTAURAR_ELEMENTO",atual:t}}},sp=new class{constructor(){this.descricao="Suprimir dispositivo"}execute(t){return{type:"SUPRIMIR_ELEMENTO",atual:t}}};class ne{constructor(e,o,i){this.descricao=o,this.tipo=e.tipo,this.nomeAcao=i}execute(e){return{type:"TRANSFORMAR_TIPO_ELEMENTO",subType:this.nomeAcao,atual:e,novo:{tipo:this.tipo}}}}const ap=new ne(R.omissis,"Transformar em Omissis de Al\xEDnea","transformarAlineaEmOmissisAlinea"),lp=new ne(R.omissis,"Transformar em Omissis de Inciso de Caput","transformarIncisoCaputEmOmissisIncisoCaput"),cp=new ne(R.omissis,"Transformar em Omissis de Item","transformarItemEmOmissisItem"),up=new ne(R.omissis,"Transformar em Omissis de Par\xE1grafo","transformarParagrafoEmOmissisParagrafo"),Fa=new ne(R.omissis,"Transformar em Omissis de Inciso de Par\xE1grafo","transformarIncisoParagrafoEmOmissisIncisoParagrafo"),gn=new ne(R.inciso,"Transformar Al\xEDnea em Inciso","transformarAlineaEmIncisoCaput"),vn=new ne(R.inciso,"Transformar Al\xEDnea em Inciso","transformarAlineaEmIncisoParagrafo"),dp=new ne(R.item,"Transformar Al\xEDnea em Item","transformarAlineaEmItem"),pp=new ne(R.paragrafo,"Transformar Artigo em Par\xE1grafo","transformarArtigoEmParagrafo"),bg=new ne(R.inciso,"Transformar em Inciso","transformarDispositivoGenericoEmInciso"),yg=new ne(R.alinea,"Transformar em Al\xEDnea","transformarDispositivoGenericoEmAlinea"),xg=new ne(R.item,"Transformar em Item","transformarDispositivoGenericoEmItem"),bn=new ne(R.paragrafo,"Transformar Inciso em Par\xE1grafo","transformarIncisoParagrafoEmParagrafo"),yn=new ne(R.paragrafo,"Transformar Inciso Caput em Par\xE1grafo","transformarIncisoCaputEmParagrafo"),uu=new ne(R.alinea,"Transformar Inciso de Caput em Al\xEDnea","transformarIncisoCaputEmAlinea"),du=new ne(R.alinea,"Transformar Inciso de Caput em Al\xEDnea","transformarIncisoParagrafoEmAlinea"),hp=new ne(R.alinea,"Transformar Omissis em Al\xEDnea","transformarOmissisEmAlinea"),fp=new ne(R.artigo,"Transformar Omissis em Artigo","transformarOmissisEmArtigo"),mp=new ne(R.inciso,"Transformar Omissis em Inciso de Caput","transformarOmissisEmIncisoCaput"),gp=new ne(R.inciso,"Transformar Omissis em Inciso de Par\xE1grafo","transformarOmissisEmIncisoParagrafo"),vp=new ne(R.item,"Transformar Omissis em Item","transformarOmissisEmItem"),bp=new ne(R.paragrafo,"Transformar Omissis em Par\xE1grafo","transformarOmissisEmParagrafo"),yp=new ne(R.alinea,"Transformar Item em Al\xEDnea","transformarItemEmAlinea"),xp=new ne(R.artigo,"Transformar Par\xE1grafo em Artigo","transformarParagrafoEmArtigo"),wp=new ne(R.inciso,"Transformar Par\xE1grafo em Inciso de Par\xE1grafo","transformarParagrafoEmIncisoParagrafo"),_p=new ne(R.inciso,"Transformar Par\xE1grafo em Inciso de Caput","transformarParagrafoEmIncisoCaput"),Ap=new class{constructor(){this.descricao="Articula\xE7\xE3o validada"}execute(){return{type:"VALIDAR_ARTICULACAO"}}},Ep=new class{constructor(){this.descricao="Elemento validado"}execute(t){return{type:"VALIDAR_ELEMENTO",atual:t}}},wg=new class{constructor(){this.descricao="Remover dispositivo sem texto"}execute(t,e){return{type:"REMOVER_ELEMENTO_SEM_TEXTO",atual:t,key:e}}};var $;(function(t){t.DISPOSITIVO_ADICIONADO="Dispositivo Adicionado",t.DISPOSITIVO_NOVO="Dispositivo Novo",t.DISPOSITIVO_MODIFICADO="Dispositivo Modificado",t.DISPOSITIVO_ORIGINAL="Dispositivo Original",t.DISPOSITIVO_SUPRIMIDO="Dispositivo Suprimido"})($||($={}));const _l=t=>[$.DISPOSITIVO_ADICIONADO.toString(),$.DISPOSITIVO_MODIFICADO.toString(),$.DISPOSITIVO_SUPRIMIDO.toString()].includes(t.situacao.descricaoSituacao),Op=t=>!!_l(t)||t.pai!==void 0&&Op(t.pai),Te=t=>t.tipo===R.articulacao.tipo,So=t=>t.tipo===R.generico.tipo,G=t=>t.tipo===R.artigo.tipo,we=t=>t.tipo===R.caput.tipo,ge=t=>t.tipo===R.paragrafo.tipo,Ut=t=>t.tipo===R.inciso.tipo,Et=t=>Ut(t)&&we(t.pai),Go=t=>Ut(t)&&ge(t.pai),Ti=t=>t.tipo===R.alinea.tipo,pu=t=>t.tipo===R.item.tipo,ve=t=>t.tipo===R.omissis.tipo,me=t=>[R.articulacao.tipo,R.agrupadorGenerico.tipo,R.capitulo.tipo,R.livro.tipo,R.parte.tipo,R.secao.tipo,R.subsecao.tipo,R.titulo.tipo].includes(t.tipo),_g=t=>me(t)&&!Te(t),hu=t=>t.tipo===R.agrupadorGenerico.tipo,ar=t=>[R.paragrafo.tipo,R.inciso.tipo,R.alinea.tipo,R.item.tipo].includes(t.tipo);function cs(t){return Lo(t.replace(/(<([^>]+)>)/gi,"").trim())}function Al(t,e){return e.map(o=>new RegExp(Xo(ur(o))+"\\s*$").test(t)).filter(o=>o)[0]===!0}function mo(t){switch(t[0].trim()){case".":return"ponto";case":":return"dois pontos";case";":return"ponto e v\xEDrgula";case",":return"v\xEDrgula";default:return t[0].trim()}}function ur(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}function Xo(t){return t.replace(/\s+/g,"\\s+")}function Lo(t){return t.replace(/\s{2,}/g," ")}class Fe{constructor(e){this.strs=new Array,e&&this.append(e)}append(e){e&&this.strs.push(e)}toString(){return function(e){let o="";return e.forEach(i=>{o+=i}),o}(this.strs)}}const Sp=/[\u0300-\u036f]/g;function We(t){if(!t||Te(t))return t;if(t.pai===void 0)throw new Error("N\xE3o foi encontrada a articula\xE7\xE3o");return We(t.pai)}function kp(t,e){if(e.uuid===t)return e;if(e.filhos!==null){let o=null;const i=e.hasAlteracao()?e.alteracoes.filhos:e.filhos;for(let r=0;o===null&&r<i.length;r++)o=kp(t,i[r]);return o}return null}const Zn=(t,e)=>{if(e===void 0)throw new Error("uuid n\xE3o foi informado");return kp(e,t)},Or=t=>{var e;return Xe(t)?Or(t.filhos[t.filhos.length-1]):(t==null?void 0:t.hasAlteracao())&&((e=t.alteracoes)===null||e===void 0?void 0:e.filhos.length)?Or(t.alteracoes.filhos[t.alteracoes.filhos.length-1]):t},yt=t=>G(t)?We(t).artigos.filter(e=>e.tipo===t.tipo):t.pai?t.pai.filhos.filter(e=>e.tipo===t.tipo):[t],xn=(t,e,o)=>{if(t!=null&&t.filhos){for(let i=t==null?void 0:t.indexOf(e);i>=0;i--){const r=t==null?void 0:t.filhos[i];me(r)&&o.push(r)}if(t!=null&&t.pai)return xn(t.pai,e.pai,o)}return o},Ua=(t,e)=>{if(t&&t.pai)return t.pai&&t.pai.tipo===e?t.pai:Ua(t.pai,e)},El=t=>G(t.pai)?t.pai:El(t.pai),Ip=t=>{const e=t.pai;return G(e)&&!H(e)?t.pai:Ip(t.pai)},Cn=(t,e)=>{if(t!=null&&t.filhos){for(let o=(t==null?void 0:t.indexOf(e))-1;o>=0;o--){const i=t==null?void 0:t.filhos[o];if(G(i))return i;if(me(i))return qp(i)}if(t!=null&&t.pai)return Cn(t.pai,e.pai)}},qp=t=>{if(t!==void 0&&t.filhos)for(let e=t.filhos.length-1;e>=0;e--){const o=t.filhos[e];if(G(o))return o;if(me(o))return qp(o)}},fu=t=>{const e=t.pai.indexOf(t);return t.pai.filhos.filter((o,i)=>i>e&&me(o))[0]},mu=t=>{var e;return((e=t.filhos)===null||e===void 0?void 0:e.filter(o=>So(o)).length)>0},ke=t=>yt(t).length===1,Je=t=>{const e=yt(t);return e[e.length-1]===t},gu=t=>{const e=yt(t);return e.length>1&&e[e.length-2]===t},Jt=t=>yt(t)[0]===t,Xe=t=>t.filhos&&t.filhos.length>0,Pe=t=>{const e=t.pai.indexOf(t);return e>0?t.pai.filhos[e-1]:void 0},ko=t=>{const e=yt(t),o=e.indexOf(t);return o>0?e[o-1]:void 0},Bi=t=>{const e=t.pai.indexOf(t);return e===0?void 0:t.pai.filhos.filter((i,r)=>r<e&&(i.tipo===t.tipo||i.tipo===Jd.tipo)).pop()},ji=t=>{const e=t.pai.indexOf(t);return e<t.pai.filhos.length-1?t.pai.filhos[e+1]:void 0},zi=t=>{const e=yt(t),o=e.indexOf(t);return o<e.length-1?e[o+1]:void 0},Ol=t=>{var e,o,i;const r=(e=t.pai)===null||e===void 0?void 0:e.indexOf(t);return(i=(o=t.pai)===null||o===void 0?void 0:o.filhos.filter((n,s)=>s<r&&n.tipo===t.tipo&&n.pai===t.pai))!==null&&i!==void 0?i:[]},Sl=t=>{var e,o,i;const r=(e=t.pai)===null||e===void 0?void 0:e.indexOf(t);return(i=(o=t.pai)===null||o===void 0?void 0:o.filhos.filter((n,s)=>s>r&&n.tipo===t.tipo))!==null&&i!==void 0?i:[]},Vi=t=>{const e=t.pai.indexOf(t);return e===t.pai.filhos.length-1?void 0:t.pai.filhos.filter((i,r)=>r>e&&(i.tipo===t.tipo||i.tipo===Jd.tipo))[0]},Cp=(t,e=!1)=>{if(G(t)){const i=We(t),r=We(t).indexOfArtigo(t);return i.artigos.filter((n,s)=>s>r)}const o=t.pai.indexOf(t);return t.pai.filhos.filter((i,r)=>e?r>o:r>=o).filter(i=>t.tipo===i.tipo)},us=t=>G(t)&&ke(t),kl=t=>ge(t)&&ke(t),Il=t=>t.cabecaAlteracao||St(t)?t:Il(t.pai),St=t=>H(t)&&Te(t.pai)&&t.pai.pai!==void 0,Pp=t=>Sl(t).filter(e=>To(e)&&e.numero==="1").length>0,Wt=t=>{const e=Il(t),o=Fi(e);return o.length>0&&o[o.length-1]===t},Ge=t=>Te(t)&&t.pai!==void 0,H=t=>{if(t.isDispositivoAlteracao)return!0;try{return We(t).pai!==void 0}catch{return!1}},To=t=>t.situacao.descricaoSituacao===$.DISPOSITIVO_ORIGINAL,Tp=t=>t.situacao.descricaoSituacao===$.DISPOSITIVO_MODIFICADO||t.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO,Fi=t=>Qo(t,[]),Qo=(t,e)=>{e.push(t);const o=t.hasAlteracao()?t.alteracoes.filhos:t.filhos;return o.length&&o.forEach(i=>Qo(i,e)),e},eo=(t,e)=>{if(t)if(e(t),t.tipo===R.artigo.tipo){const o=t;o.caput&&(eo(o.caput,e),t.alteracoes&&eo(t.alteracoes,e),t.filhos.filter(i=>ge(i)||ve(i)&&!we(i.pai)).forEach(i=>{eo(i,e)}))}else t.alteracoes&&eo(t.alteracoes,e),t.filhos.forEach(o=>{eo(o,e)})},lr=(t,e)=>{if(!t)return;let o=e(t);if(o)return o;if(t.tipo===R.artigo.tipo){const i=t;if(i.caput){if(o=lr(i.caput,e),o||t.alteracoes&&(o=lr(t.alteracoes,e),o))return o;for(const r of t.filhos.filter(n=>ge(n)||ve(n)&&!we(n.pai)))if(o=lr(r,e),o)return o}}else{if(t.alteracoes&&(o=lr(t.alteracoes,e),o))return o;for(const i of t.filhos)if(o=lr(i,e),o)return o}},Ni=t=>t&&!t.pai&&t.tipo===R.articulacao.tipo,ds=(t,e)=>{const o=Ag(e);let i=t;if(o){const r=t.artigos.find(n=>o===n.id);if(r){if(e===o||e===o+"_cpt")return r;i=r}}return lr(i,r=>e===r.id?r:void 0)},Ag=t=>{const e=/^art\d+(-\d+)*/.exec(t);return e!=null&&e.length?e[0]:void 0},Eg=(t,e)=>{if(!t||!e)return!1;let o=t.pai;for(;o;){if(o===e)return!0;o=o.pai}return!1},Np=t=>{if(!t)return!1;let e=t.pai;for(;e;){if(e.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO)return!0;e=e.pai}return!1},Dp=t=>{const e=Et(t)?t.pai.pai:t.pai;return!(e===void 0||!H(t)||t.situacao.descricaoSituacao!==$.DISPOSITIVO_ADICIONADO||St(t))&&(e.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO&&!e.situacao.existeNaNormaAlterada||!(e.situacao.descricaoSituacao!==$.DISPOSITIVO_ADICIONADO||!St(e))||Dp(e))};var ee,Di;(function(t){t[t.INFO=0]="INFO",t[t.WARNING=1]="WARNING",t[t.ERROR=2]="ERROR"})(ee||(ee={})),function(t){t.OMISSIS_ANTES="\xC9 necess\xE1rio um omissis antes deste dispositivo",t.RENUMERAR_DISPOSITIVO="O r\xF3tulo informado n\xE3o \xE9 v\xE1lido. Numere o dispositivo"}(Di||(Di={}));const Lt="...........................................................................................",Ot=t=>{var e;const o=G(t)?t.caput:t;return Al(o.texto,(e=o.INDICADOR_DESDOBRAMENTO)!==null&&e!==void 0?e:[])},ps=t=>{var e;const o=G(t)?t.caput:t;return Al(o.texto,(e=o.INDICADOR_FIM_SEQUENCIA)!==null&&e!==void 0?e:[])},Ii=t=>{var e;const o=G(t)?t.caput:t;return Al(o.texto,(e=o.INDICADOR_SEQUENCIA)!==null&&e!==void 0?e:[])},wn=Lt+".\u201D (NR)",Rp=t=>new RegExp(Xo(ur("o seguinte acr\xE9scimo:"))+"\\s*$").test(t)||new RegExp(Xo(ur("os seguintes acr\xE9scimos:"))+"\\s*$").test(t)||new RegExp(Xo(ur("passa a vigorar com a seguinte altera\xE7\xE3o:"))+"\\s*$").test(t)||new RegExp(Xo(ur("passa a vigorar com as seguintes altera\xE7\xF5es:"))+"\\s*$").test(t),Ao=t=>/^[.]*(?:\s*)["”“]?(\s*)?\(NR\)\s*$/.test(t)?wn:/["”]?(\s*)?\(NR\)?\s*$/.test(t)?t.replace(/["“](?!.*["”])/,"\u201D"):t!==Lt&&t!==wn&&new RegExp("^[.]+$").test(t)?Lt:t,Lp=t=>/\.["”](?:\s*\(NR\))\s*$/.test(t),vu=t=>t!==void 0&&/.*:[\s]{1,2}["”“].*[.]["”“]$/.test(t),Og=t=>{var e;const o=[];return(Te(t)||t.texto)&&t.texto.trim().length!==0||o.push({tipo:ee.ERROR,descricao:"N\xE3o foi informado um texto para "+(t.artigoDefinido+" "+t.descricao)}),Te(t)||!t.texto||function(i){const r=document.createElement("div");return r.innerHTML=i,r.innerHTML===i}(t.texto)||o.push({tipo:ee.ERROR,descricao:"O conte\xFAdo do dispositivo n\xE3o \xE9 um HTML v\xE1lido"}),!Te(t)&&t.texto&&t.texto.trim().length>500&&o.push({tipo:ee.WARNING,descricao:"Pelo princ\xEDpio da concis\xE3o, o texto dos dispositivos n\xE3o deve ser extenso, devendo ser utilizadas frases curtas e concisas"}),ar(t)&&!ge(t)&&t.texto&&/^[A-ZÀ-Ú]/.test(cs(t.texto))&&o.push({tipo:ee.WARNING,descricao:`${t.descricao} deveria iniciar com letra min\xFAscula, a n\xE3o ser que se trate de uma situa\xE7\xE3o especial, como nome pr\xF3prio`}),!ar(t)||ge(t)||ve(t)||!t.texto||ke(t)||Je(t)||gu(t)||Xe(t)||t.INDICADOR_SEQUENCIA===void 0||function(i){const r=i.replace(/(<([^>]+)>)/gi,"").trim();return r.length>0?r.charAt(r.length-1):""}(t.texto)===t.INDICADOR_SEQUENCIA[0]||o.push({tipo:ee.ERROR,descricao:`${t.descricao} deveria terminar com ${mo(t.INDICADOR_SEQUENCIA)}. ${Ii(t)?"A varia\xE7\xE3o informada s\xF3 \xE9 permitida para o pen\xFAltimo elemento":""}`}),!G(t)&&!ge(t)||!t.texto||/^[...]{3,}/.test(t.texto)||/^[A-ZÀ-Ú]/.test(cs(t.texto))||o.push({tipo:ee.ERROR,descricao:`${t.descricao} deveria iniciar com letra mai\xFAscula`}),H(t)||me(t)||ve(t)||!t.texto||!(!G(t)&&Xe(t)||G(t)&&Xe(t.caput))||Ot(t)||o.push({tipo:ee.ERROR,descricao:`${t.descricao} deveria terminar com ${mo(t.INDICADOR_DESDOBRAMENTO)}`}),H(t)||!ar(t)||ge(t)||!t.texto||!ke(t)&&!Je(t)||mu(t.pai)||Xe(t)||ps(t)||o.push({tipo:ee.ERROR,descricao:`\xDAltimo dispositivo de uma sequ\xEAncia deveria terminar com ${mo(t.INDICADOR_FIM_SEQUENCIA)}`}),H(t)||!ar(t)||ge(t)||!t.texto||ke(t)||!gu(t)||Xe(t)||Ii(t)||o.push({tipo:ee.ERROR,descricao:`${t.descricao} deveria terminar com uma das seguintes possibilidades: ${t.INDICADOR_SEQUENCIA.join("     ")}`}),H(t)||!G(t)&&!ge(t)||!t.texto||Xe(t)||t.hasAlteracao()||ke(t)||Ii(t)||vu(t.texto)||o.push({tipo:ee.ERROR,descricao:`${t.descricao} deveria terminar com ${mo(t.INDICADOR_SEQUENCIA)}`}),!H(t)&&G(t)&&t.texto&&t.hasAlteracao()&&!Ot(t)&&!Rp(t.texto)&&o.push({tipo:ee.ERROR,descricao:`${t.descricao} deveria terminar com ${mo(t.INDICADOR_DESDOBRAMENTO)}`}),H(t)||!G(t)||!t.texto||t.hasAlteracao()||Xe(t)&&Xe(t.caput)||!Ot(t)||o.push({tipo:ee.ERROR,descricao:`${t.descricao} deveria terminar com ${mo(t.INDICADOR_SEQUENCIA)}`}),!H(t)&&G(t)&&t.hasAlteracao()&&!(!((e=t.alteracoes)===null||e===void 0)&&e.base)&&o.push({tipo:ee.ERROR,descricao:"\xC9 necess\xE1rio informar a norma a ser alterada"}),H(t)&&!me(t)&&t.texto!==Lt&&t.texto&&(!G(t)&&Xe(t)||G(t)&&Xe(t.caput))&&!Ot(t)&&o.push({tipo:ee.ERROR,descricao:`${t.descricao} deveria terminar com ${mo(t.INDICADOR_DESDOBRAMENTO)}`}),!(H(t)&&ge(t)&&t.texto)||Xe(t)||ke(t)||Je(t)||Ii(t)||ji(t)&&ve(ji(t))||o.push({tipo:ee.ERROR,descricao:`${t.descricao} deveria terminar com ${mo(t.INDICADOR_SEQUENCIA)}`}),!H(t)||!Wt(t)||t.texto&&Lp(t.texto)||o.push({tipo:ee.ERROR,descricao:"O \xFAltimo dispositivo do bloco de altera\xE7\xE3o deve terminar com: <b>.&#8221; (NR)</b>"}),H(t)&&t.texto&&!Wt(t)&&/.*["”“]$/.test(t.texto)&&!vu(t.texto)&&!/”.*(NR)/.test(t.texto)&&o.push({tipo:ee.ERROR,descricao:"Somente o \xFAltimo dispositivo do bloco de altera\xE7\xE3o poderia ser finalizado com aspas"}),H(t)&&t.texto&&!Wt(t)&&/”.*(NR)/.test(t.texto)&&o.push({tipo:ee.ERROR,descricao:"Somente o \xFAltimo dispositivo do bloco de altera\xE7\xE3o poderia terminar com &#8221; (NR)"}),H(t)&&t.texto&&t===Il(t)&&t.filhos.length===0&&(t.texto===wn||t.texto===Lt)&&o.push({tipo:ee.ERROR,descricao:"N\xE3o foi informada nenhuma altera\xE7\xE3o"}),!(H(t)&&t.texto&&ar(t))||ge(t)||ve(t)||t.pai.filhos.filter(i=>ve(i)).length!==0||!ke(t)||mu(t.pai)||Xe(t)||ps(t)||Wt(t)||o.push({tipo:ee.ERROR,descricao:`\xDAltimo dispositivo de uma sequ\xEAncia deveria terminar com ${mo(t.INDICADOR_FIM_SEQUENCIA)}`}),o},Sg=t=>me(t)?(e=>{const o=[];var i,r;return Te(e)||e.texto&&e.texto.trim().length!==0||o.push({tipo:ee.ERROR,descricao:`N\xE3o foi informado um texto para ${e.artigoDefinido} ${e.descricao}`}),!Te(e)&&e.texto&&(i=e.texto,/[.,:]\s*$/.test(i))&&o.push({tipo:ee.ERROR,descricao:`N\xE3o pode haver sinal de pontua\xE7\xE3o ao final do texto d${e.artigoDefinido} ${e.descricao}`}),!Te(e)&&(r=e.texto,/<.+>/g.test(r==null?void 0:r.trim()))&&o.push({tipo:ee.ERROR,descricao:`Texto d${e.artigoDefinido} ${e.descricao} n\xE3o pode possuir formata\xE7\xE3o`}),o})(t):Og(t);var bu;function Tr(t){return class extends t{constructor(){super(...arguments),this.tipoGenero="feminino",this.artigoDefinido="a",this.pronomePossessivoSingular=" da ",this.pronomePossessivoPlural=" das ",this.artigoDefinidoSingular=" a ",this.artigoDefinidoPlural=" as ",this.artigoIndefinidoSingular=" uma ",this.artigoDefinidoPrecedidoPreposicaoASingular=" \xE0 ",this.artigoDefinidoPrecedidoPreposicaoAPlural=" \xE0s ",this.contracaoEmArtigoDefinidoSingular=" na "}}}function Ps(t){return class extends t{constructor(){super(...arguments),this.tipoGenero="indefinido",this.artigoDefinido="",this.pronomePossessivoSingular="",this.pronomePossessivoPlural="",this.artigoDefinidoSingular="",this.artigoDefinidoPlural="",this.artigoIndefinidoSingular="",this.artigoDefinidoPrecedidoPreposicaoASingular="",this.artigoDefinidoPrecedidoPreposicaoAPlural="",this.contracaoEmArtigoDefinidoSingular=""}}}function Mo(t){return class extends t{constructor(){super(...arguments),this.tipoGenero="masculino",this.artigoDefinido="o",this.pronomePossessivoSingular=" do ",this.pronomePossessivoPlural=" dos ",this.artigoDefinidoSingular=" o ",this.artigoDefinidoPlural=" os ",this.artigoIndefinidoSingular=" um ",this.artigoDefinidoPrecedidoPreposicaoASingular=" ao ",this.artigoDefinidoPrecedidoPreposicaoAPlural=" aos ",this.contracaoEmArtigoDefinidoSingular=" no "}}}(function(t){t.MASCULINO="masculino",t.FEMININO="feminino",t.INDEFINIDO="indefinido"})(bu||(bu={}));const Mp=new(Tr(Object)),$p=new(Mo(Object)),kg=new(Ps(Object)),ql=t=>t==="F"?Mp:t==="M"?$p:kg;class Ig{constructor(e,o){this.nome=e,this.genero=typeof o=="string"?ql(o):o}}const hs={autoridades:[{urn:"federal",descricao:"Federal"},{urn:"senado.federal",descricao:"Senado Federal"},{urn:"congresso.nacional",descricao:"Congresso Nacional"}],tiposDocumento:[{urn:"lei",descricao:"Lei",genero:"F"},{urn:"lei.complementar",descricao:"Lei Complementar",genero:"F"},{urn:"lei.delegada",descricao:"Lei Delegada",genero:"F"},{urn:"decreto.legislativo",descricao:"Decreto Legislativo",genero:"M"},{urn:"decreto.lei",descricao:"Decreto-Lei",genero:"M"},{urn:"decreto",descricao:"Decreto",genero:"M"},{urn:"consolidacao.leis.trabalho",descricao:"Consolida\xE7\xE3o das Leis do Trabalho",genero:"F"},{urn:"resolucao",descricao:"Resolu\xE7\xE3o",genero:"F"},{urn:"regimento.interno",descricao:"Regimento Interno",genero:"M"},{urn:"constituicao",descricao:"Constitui\xE7\xE3o",genero:"F"},{urn:"ato.disposicoes.constitucionais.transitorias",descricao:"Ato das Disposi\xE7\xF5es Constitucionais Transit\xF3rias",genero:"M"},{urn:"medida.provisoria",descricao:"Medida Provis\xF3ria",genero:"F"},{urn:"medida.provisoria;mpv",descricao:"Medida Provis\xF3ria",genero:"F"},{urn:"emenda.constitucional",descricao:"Emenda Constitucional",genero:"F"},{urn:"emenda.constitucional.revisao",descricao:"Emenda Constitucional de Revis\xE3o",genero:"F"},{urn:"proposta.emenda.constitucional;pec",descricao:"Proposta de Emenda Constitucional",genero:"F"},{urn:"projeto.lei;pl",descricao:"Projeto de Lei",genero:"M"},{urn:"projeto.lei;pls",descricao:"Projeto de Lei do Senado",genero:"M"},{urn:"projeto.lei.complementar;plp",descricao:"Projeto de Lei Complementar",genero:"M"},{urn:"projeto.lei.complementar;pls",descricao:"Projeto de Lei Complementar do Senado",genero:"M"},{urn:"projeto.lei;plc",descricao:"Projeto de Lei da C\xE2mara",genero:"M"},{urn:"projeto.lei.complementar;plc",descricao:"Projeto de Lei Complementar da C\xE2mara",genero:"M"},{urn:"projeto.lei.conversao;plv",descricao:"Projeto de Lei de Convers\xE3o",genero:"M"},{urn:"projeto.resolucao;prs",descricao:"Projeto de Resolu\xE7\xE3o do Senado",genero:"M"},{urn:"projeto.decreto.legislativo;pds",descricao:"Projeto de Decreto Legislativo",genero:"M"},{urn:"projeto.decreto.legislativo;pdl",descricao:"Projeto de Decreto Legislativo",genero:"M"},{urn:"substitutivo.projeto.lei.senado;scd",descricao:"Substitutivo da C\xE2mara dos Deputados",genero:"M"},{urn:"emenda.projeto.lei.senado;ecd",descricao:"Emenda(s) da C\xE2mara dos Deputados",genero:"F"}],fakeUrns:[{sigla:"PEC",urnAutoridade:"senado.federal",urnTipoDocumento:"proposta.emenda.constitucional;pec"},{sigla:"PL",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei;pl"},{sigla:"PLS",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei;pls"},{sigla:"PLP",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei.complementar;plp"},{sigla:"PLC",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei;plc"},{sigla:"PLV",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei.conversao;plv"},{sigla:"PRS",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.resolucao;prs"},{sigla:"PDS",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.decreto.legislativo;pds"},{sigla:"PDL",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.decreto.legislativo;pdl"},{sigla:"SCD",urnAutoridade:"senado.federal",urnTipoDocumento:"substitutivo.projeto.lei.senado;scd"},{sigla:"ECD",urnAutoridade:"senado.federal",urnTipoDocumento:"emenda.projeto.lei.senado;ecd"},{sigla:"MPV",urnAutoridade:"senado.federal",urnTipoDocumento:"medida.provisoria;mpv"}],siglas:[{urnAutoridade:"federal",urnTipoDocumento:"medida.provisoria",sigla:"MPV"},{urnAutoridade:"congresso.nacional",urnTipoDocumento:"projeto.lei",sigla:"PLN"},{urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei",sigla:"PLS"},{urnAutoridade:"congresso.nacional",urnTipoDocumento:"medida.provisoria",sigla:"MPV"},{urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei.senado.federal",sigla:"PLS"},{urnAutoridade:"camara.deputados",urnTipoDocumento:"projeto.lei",sigla:"PLC"}],atalhosUrn:[{urnTipoDocumento:"constituicao",urnAutoridade:"federal",urn:"urn:lex:br:federal:constituicao:1988-10-05;1988",nome:"Constitui\xE7\xE3o Federal"},{urnTipoDocumento:"ato.disposicoes.constitucionais.transitorias",urnAutoridade:"federal",urn:"urn:lex:br:federal:ato.disposicoes.constitucionais.transitorias:1988-10-05;1988",nome:"Ato das Disposi\xE7\xF5es Constitucionais Transit\xF3rias - ADCT"},{urnTipoDocumento:"consolidacao.leis.trabalho",urnAutoridade:"federal",urn:"urn:lex:br:federal:decreto.lei:1943-05-01;5452",nome:"Consolida\xE7\xE3o das Leis do Trabalho - CLT, aprovada pelo Decreto-Lei n\xBA 5.452, de 1\xBA de maio de 1943",genero:"F"},{urnTipoDocumento:"regimento.interno",urnAutoridade:"senado.federal",urn:"urn:lex:br:senado.federal:resolucao:1970-11-27;93",nome:"Regimento Interno do Senado Federal",genero:"M"},{urnTipoDocumento:"regimento.interno",urnAutoridade:"congresso.nacional",urn:"urn:lex:br:congresso.nacional:resolucao:1970-08-11;1",nome:"Regimento Comum do Congresso Nacional",genero:"M"}],eventos:[{urn:"leitura",tipoTextoProcessoLegislativo:"Texto inicial",genero:"M"},{urn:"aprovacao.substitutivo.decisao.terminativa",tipoTextoProcessoLegislativo:"Reda\xE7\xE3o do vencido em turno suplementar na Comiss\xE3o",substitutivo:"s",genero:"F"},{urn:"aprovacao.substitutivo",tipoTextoProcessoLegislativo:"Reda\xE7\xE3o do vencido em turno suplementar no Plen\xE1rio",substitutivo:"s",genero:"F"},{urn:"apresentacao.substitutivo",tipoTextoProcessoLegislativo:"Texto do substitutivo",substitutivo:"s",genero:"M"}]},qg=t=>{var e,o,i,r,n;const s=(e=ci(t))!==null&&e!==void 0?e:{},u=c=>c.urnTipoDocumento===s.urn;return(n=(i=(o=hs.siglas.find(u))===null||o===void 0?void 0:o.sigla)!==null&&i!==void 0?i:(r=hs.fakeUrns.find(u))===null||r===void 0?void 0:r.sigla)!==null&&n!==void 0?n:""},ci=t=>{var e;const o=(e=t.replace("urn:lex:br:",""))===null||e===void 0?void 0:e.split(":");return hs.tiposDocumento.filter(i=>i.urn===o[1])[0]},Pn=t=>{var e,o,i;const r=(e=t.replace("urn:lex:br:",""))===null||e===void 0?void 0:e.split(":");return((o=r[2])===null||o===void 0?void 0:o.indexOf(";"))>-1?(i=r[2])===null||i===void 0?void 0:i.substring(r[2].indexOf(";")+1):""},Ri=t=>{var e,o,i,r,n;const s=(e=t.replace("urn:lex:br:",""))===null||e===void 0?void 0:e.split(":"),u=(o=s[2])===null||o===void 0?void 0:o.substring(0,s[2].indexOf(";"));if(/\d{4}$/.test(u))return u;const c=(n=(r=(i=s[2])===null||i===void 0?void 0:i.substring(0,s[2].indexOf(";")))===null||r===void 0?void 0:r.split("-"))===null||n===void 0?void 0:n.reverse();return c?c.join("/"):""},Cg=t=>Ri(t).split("/").slice(-1)[0],jp=t=>{const e=t.indexOf("!");return e!==-1?t.substring(0,e):t},zp=t=>{const e=t.match(/^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](\d{4})$/);return e?`${e[3]}-${e[2]}-${e[1]}`:""},Fp=t=>{var e,o;const i=(e=(u=>{var c;const d=(c=u.replace("urn:lex:br:",""))===null||c===void 0?void 0:c.split(":");return hs.autoridades.filter(p=>p.urn===d[0])[0]})(t))===null||e===void 0?void 0:e.urn,r=(o=ci(t))===null||o===void 0?void 0:o.urn,n=/^\d{1,5}$/.test(Pn(t)),s=/\d{4}$/.test(Ri(t))?Ri(t):zp(Ri(t));return(t==null?void 0:t.startsWith("urn:lex:br:"))&&i&&r&&n&&s},fs=t=>{var e;const o=jp(t),i=Pn(o),r=(e=ci(o))===null||e===void 0?void 0:e.descricao,n=Ri(o),[s,u,c]=n.split("/").map(p=>parseInt(p)),d=n.length>7?Pg(new Date(c,u-1,s)):void 0;return(r||"")+(i?" n\xBA "+parseInt(i).toLocaleString("pt-BR"):"")+(d?", de "+d:"")},Pg=t=>t?t.getDate()+" de "+t.toLocaleDateString("pt-BR",{month:"long"})+" de "+t.getFullYear():void 0,ha={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XV:40,X:10,IX:9,V:5,IV:4,I:1},Up=t=>/^0(-[a-z]+)?$/i.test(t),fa=t=>/^\d+$/.test(t),ii=t=>/^\d{1,}([-]?[a-zA-Z]+)?$/.test(t),Cl=t=>/[a-zA-Z]+/.test(t),Ts=t=>/^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/i.test(t),Bp=t=>{if(!Cl(t))throw new Error(`O valor ${t} n\xE3o \xE9 uma sequ\xEAncia de letras v\xE1lida.`);t=t.toLowerCase();let e=0;return[...t].forEach(o=>e=o.toLowerCase().charCodeAt(0)-97+1+26*e),e.toString()},Ba=t=>{const e=parseInt(t);return e?Va(e):t},Va=t=>{let e="",o=0;for(;t>0;)o=(t-1)%26,t=(t-o-1)/26,e=e.replace(/^/,String.fromCharCode(97+o));return e},Vp=t=>{if(t.startsWith("0"))return"0";if(!Ts(t))throw new Error("O valor '"+t+"' n\xE3o \xE9 um n\xFAmero em algarismo romano v\xE1lido.");let e=0,o=1;for(let i=(t=t.toLowerCase()).length-1;i>=0;i--){const r=Tg(t.charAt(i));r>o&&(o=r),r<o?e-=r:e+=r}return e.toString()},Tg=t=>{switch(t.toLowerCase()){case"i":return 1;case"v":return 5;case"x":return 10;case"l":return 50;case"c":return 100;case"d":return 500;case"m":return 1e3;default:return 0}},tn=t=>{let e,o="",i=t.search(/[a-zA-Z-]/)===-1?parseInt(t):parseInt(t.substring(0,t.search(/[a-zA-Z-]/)));const r=t.search(/[a-zA-Z-]/)===-1?"":t.substring(t.search(/[a-zA-Z-]/));for(const n in ha){if(e=Math.floor(i/ha[n]),e>=0)for(let s=0;s<e;s++)o+=n;i%=ha[n]}return o+r},Qt=(t,e)=>{const o=t.search(/-[a-zA-Z-]/)===-1?t:t.substring(0,t.search(/-[a-zA-Z-]/)),i=t.search(/-[a-zA-Z-]/)===-1?"":t.substring(t.search(/-[a-zA-Z-]/));return(e?e(o):o)+(i==null?void 0:i.toUpperCase())},yu=(t,e)=>{const o=t==null?void 0:t.split("-"),i=e==null?void 0:e.split("-"),[r,...n]=o,[s,...u]=i;if(!r||s&&parseInt(r)<parseInt(s))return 1;if(!s||r&&parseInt(r)>parseInt(s))return-1;if(t&&e&&e.includes(t))return 1;for(let c=0;c<(n==null?void 0:n.length);c++)for(let d=0;c<(u==null?void 0:u.length);c++){if(n[c]>u[d])return-1;if(n[c]<u[d]||n.length>c+1&&u.length===d+1||n.length===c+1&&u.length<d+1)return 1}return 0},Ng=t=>{var e;return(G(t)?(e=(o=>{const i=We(o).indexOfArtigo(o);return i===-1||We(o).artigos.length===i+1?[]:We(o).artigos.filter((r,n)=>n>i)})(t))!==null&&e!==void 0?e:[]:Sl(t)).filter(o=>To(o)).length>0},Dg=t=>{let e=0;const o=t.tipo;do(To(t)||Tp(t))&&t.tipo===o&&e++,t=G(t)?Cn(t.pai,t):Pe(t);while(t!==void 0);return e},Rg=t=>{let e=0;const o=t.tipo;for(;t!==void 0&&!To(t)&&!Tp(t)&&t.tipo===o;)e++,t=G(t)?Cn(t.pai,t):Pe(t);return e},Ns=t=>(e=>{const o=Dg(e);if(To(e))return new Ur(o);const i=Rg(e),r=o>0,n=Ng(e);if(!r&&!n)return new Ur(i);if(!r&&n){const s=new Ur(0);return s.addNovoSeqOrdem(i),s}if(r&&n){const s=new Ur(o);return s.addNovoSeqOrdem(i),s}return new Ur(o+i)})(t).getNumeracao(Op(t)),Lg={Artigo:t=>fa(t)||/^(artigo )?[uúÚ]nico$/i.test(t),Paragrafo:t=>fa(t)||/^(par[aáÁ]grafo )?[uúÚ]nico$/i.test(t),Inciso:Ts,Alinea:Cl,Item:fa};class Ur{constructor(e){this.seq=e}addNovoSeqOrdem(e){this.seq>0?this.letras=Va(e).toUpperCase():e>1&&(this.letras=Va(e-1).toUpperCase())}getNumeracao(e){var o;return this.seq+(e&&this.letras?"-":"")+((o=this.letras)!==null&&o!==void 0?o:"")}}const Mg=t=>H(t)?(e=>{var o,i,r,n,s,u,c,d,p;const a=[];return e===null&&a.push({tipo:ee.ERROR,descricao:"O dispositivo n\xE3o foi informado"}),e!==null&&e.numero!==void 0&&e.numero.trim().length===0&&a.push({tipo:ee.ERROR,descricao:"O dispositivo n\xE3o cont\xE9m numera\xE7\xE3o"}),e!==null&&((o=e.rotulo)===null||o===void 0?void 0:o.trim().length)===0&&a.push({tipo:ee.ERROR,descricao:"O dispositivo n\xE3o cont\xE9m r\xF3tulo"}),e===null||So(e)||!(!((i=e.rotulo)===null||i===void 0)&&i.endsWith(e.tipo))||e.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO&&((r=zi(e))===null||r===void 0?void 0:r.numero)==="1"&&((n=zi(e))===null||n===void 0?void 0:n.situacao.descricaoSituacao)!==$.DISPOSITIVO_ADICIONADO||a.push({tipo:ee.ERROR,descricao:Di.RENUMERAR_DISPOSITIVO,fix:!0}),e!==null&&H(e)&&ge(e)&&!ke(e)&&((s=e.rotulo)===null||s===void 0?void 0:s.endsWith("\xFAnico."))&&a.push({tipo:ee.ERROR,descricao:`Quando houver mais de um ${e.descricao}, n\xE3o pode se tratar de '${e.descricao} \xFAnico'`}),e===null||St(e)||e.numero===void 0||((u=e.pai)===null||u===void 0?void 0:u.indexOf(e))!==0||e.numero==="1"||a.push({tipo:ee.ERROR,descricao:Di.OMISSIS_ANTES,fix:!0}),e===null||!ve(e)||((c=Pe(e))===null||c===void 0?void 0:c.tipo)!==R.omissis.name&&((d=ji(e))===null||d===void 0?void 0:d.tipo)!==R.omissis.name||a.push({tipo:ee.ERROR,descricao:"N\xE3o pode haver mais de um omissis sequencialmente"}),e!==null&&e.numero!==void 0&&e.pai.indexOf(e)>0&&Ol(e).filter(l=>l.numero!==void 0).filter(l=>l!==e).filter(l=>e.numero!==l.numero&&yu(e.numero,l.numero)===1).length>0&&a.push({tipo:ee.ERROR,descricao:"O dispositivo tem n\xFAmero menor ao de algum dispositivo anterior"}),e!==null&&e.numero!==void 0&&!e.pai.isLastFilho(e)&&Cp(e).filter(l=>l!==e&&e.pai===l.pai&&l.numero!==void 0).filter(l=>yu(l.numero,e.numero)===1).length>0&&a.push({tipo:ee.ERROR,descricao:"O dispositivo tem n\xFAmero maior do que algum dispositivo posterior"}),e!==null&&!St(e)&&e.numero!==void 0&&yt(e).filter(l=>l.numero&&l.numero===e.numero).length>1&&a.push({tipo:ee.ERROR,descricao:"O dispositivo tem n\xFAmero igual ao de outro dispositivo"}),e!==null&&!St(e)&&e.numero!==void 0&&e.pai.indexOf(e)>0&&ko(e)&&e.tipo!==((p=ko(e))===null||p===void 0?void 0:p.rotulo)&&!ve(Pe(e))&&parseInt(e.numero)!==parseInt(ko(e).numero)+1&&a.push({tipo:ee.ERROR,descricao:Di.OMISSIS_ANTES,fix:!0}),a})(t):(e=>{const o=[];return e===null&&o.push({tipo:ee.ERROR,descricao:"O dispositivo n\xE3o foi informado"}),e!==null&&e.numero&&e.numero.trim().length===0&&o.push({tipo:ee.ERROR,descricao:"O dispositivo n\xE3o cont\xE9m numera\xE7\xE3o"}),e!==null&&e.rotulo&&e.rotulo.trim().length===0&&o.push({tipo:ee.ERROR,descricao:"O dispositivo n\xE3o cont\xE9m r\xF3tulo"}),o})(t),Me=t=>To(t)?[]:(e=>{var o,i;const r=[];if(e===null&&r.push({tipo:ee.ERROR,descricao:"O dispositivo n\xE3o foi informado"}),e!==null&&e.filhos.length>0&&e.tiposPermitidosFilhos.length===0&&r.push({tipo:ee.ERROR,descricao:`Segundo a Legisla\xE7\xE3o vigente, ${e.descricao} n\xE3o poderia possuir filhos`}),e!==null&&H(e)&&e.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO&&((o=zi(e))===null||o===void 0?void 0:o.numero)==="1"&&((i=zi(e))===null||i===void 0?void 0:i.situacao.descricaoSituacao)!==$.DISPOSITIVO_ADICIONADO&&r.push({tipo:ee.ERROR,descricao:"N\xE3o \xE9 permitido um dispositivo de altera\xE7\xE3o da norma antes do primeiro dispositivo"}),e!==null&&(So(e)||hu(e))&&r.push({tipo:ee.ERROR,descricao:"N\xE3o foi poss\xEDvel validar a natureza deste dispositivo com base na legisla\xE7\xE3o vigente"}),e===null||!e.pai||hu(e.pai)||So(e)||e.tiposPermitidosPai.includes(e.pai.tipo)||r.push({tipo:ee.ERROR,descricao:`Segundo a Legisla\xE7\xE3o vigente, ${e.descricao} somente poderia pertencer a ${e.tiposPermitidosPai.join(", ")}`}),e!==null&&!So&&e.filhos.length>0&&(e.tiposPermitidosFilhos.length===0||e.filhos.filter(n=>!e.tiposPermitidosFilhos.includes(n.tipo)).length>0)){const n=e.tiposPermitidosFilhos.length===0?"n\xE3o poderia possuir filhos":`somente poderia possuir ${e.tiposPermitidosFilhos.join(", ")}`;r.push({tipo:ee.ERROR,descricao:`Segundo a Legisla\xE7\xE3o vigente, ${e.descricao} ${n}`})}return r})(t).concat(Sg(t),Mg(t),(e=>{const o=[];return e.alteracoes&&e.alteracoes.base?(Fp(e.alteracoes.base)||o.push({tipo:ee.ERROR,descricao:"N\xE3o foi informada uma norma alterada v\xE1lida"}),o):[]})(t));class _n{constructor(e){this.descricaoSituacao=$.DISPOSITIVO_SUPRIMIDO,this.dispositivoOriginal=e}getAcoesPermitidas(e,o){const i=[];return(Et(e)?e.pai.pai:e.pai).situacao.descricaoSituacao!==$.DISPOSITIVO_SUPRIMIDO&&(i.push(wl),i.push(...o.filter(r=>r.descricao.startsWith("Adicionar")&&e.tipo===r.tipo))),i}}const on=t=>Te(t)?"cpt_alt1":t.tagId?t.tagId+(we(t)?"":ve(t)?Ol(t).length+1:t.numero?(G(t)||ge(t))&&t.numero==="1"&&ke(t)?"1u":(e=>{const o=e==null?void 0:e.split("-"),[i,...r]=o,n=r.map(s=>Bp(s));return(n==null?void 0:n.length)>0?i+"-"+(n==null?void 0:n.join("-").toUpperCase()):i})(t.numero):`[urn:${t.uuid}]`):void 0,ms=(t,e=[])=>{if(Te(t)&&t.pai===void 0)return;const o=on(t);if(o&&e.unshift(o),G(t)){if(H(t)){const i=We(t);ms(i,e)}}else ms(t.pai,e)},ri=t=>{const e=[];return ms(t,e),e.join("_")},Ha=t=>{var e,o;return((o=(e=t.hierarquia)===null||e===void 0?void 0:e.pai)===null||o===void 0?void 0:o.uuidAlteracao)!==void 0||t.uuidAlteracao!==void 0},Hp=(t,e=0)=>(t==null?void 0:t.pai)===void 0||me(t)?e:G(t)?H(t)?++e:e:(e=St(t==null?void 0:t.pai)?e+2:++e,G(t==null?void 0:t.pai)?e:Hp(t.pai,e)),$g=t=>{var e;const o=t.pai?we(t.pai)?t.pai.pai:t.pai:void 0;return{tipo:o==null?void 0:o.tipo,uuid:o==null?void 0:o.uuid,uuidAlteracao:o&&H(t)?(e=We(t).pai)===null||e===void 0?void 0:e.uuid:void 0}},X=(t,e=!0)=>{var o,i,r;const n=t.pai;return{tipo:t.tipo,nivel:Hp(t),agrupador:me(t),hierarquia:{pai:n?$g(t):void 0,posicao:n?n.indexOf(t):void 0,numero:t.numero},editavel:!(Te(t)||t.situacao instanceof _n),sendoEditado:!1,uuid:t.uuid,lexmlId:t.id&&t.numero&&on(t),numero:t.numero,rotulo:(o=t.rotulo)!==null&&o!==void 0?o:"",conteudo:{texto:t.texto},norma:(i=t.alteracoes)===null||i===void 0?void 0:i.base,existeNaNormaAlterada:t.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO?t.situacao.existeNaNormaAlterada:void 0,index:0,acoesPossiveis:e?t.getAcoesPossiveis(t):[],descricaoSituacao:(r=t.situacao)===null||r===void 0?void 0:r.descricaoSituacao,mensagens:To(t)?[]:t.mensagens}},An=(t,e)=>{e.filhos!==void 0&&e.filhos.forEach(o=>{var i;const r=X(o);G(o)&&(r.conteudo.texto=o.caput.texto),t.push(r),G(o)&&o.hasAlteracao()&&((i=o.alteracoes)===null||i===void 0||i.filhos.forEach(n=>{t.push(X(n)),An(t,n)})),An(t,o)})},Nt=t=>{var e;const o=[];return o.push(X(t,!0)),G(t)&&t.hasAlteracao()&&G(t)&&t.hasAlteracao()&&((e=t.alteracoes)===null||e===void 0||e.filhos.forEach(i=>{o.push(X(i)),An(o,i)})),An(o,t),o},De=(t,e,o=!1)=>{var i;const r=((s,u)=>{var c,d;return!Ha(u)||Ge(s)?s:(d=(c=De(s,{uuid:u.hierarquia?u.hierarquia.pai.uuidAlteracao:u.uuidAlteracao}))===null||c===void 0?void 0:c.alteracoes)!==null&&d!==void 0?d:s})(t,e);if(!o&&Ha(e)){const s=r.pai?r.pai:De(r,{uuid:e.hierarquia?e.hierarquia.pai.uuidAlteracao:e.uuidAlteracao});return s!=null&&s.alteracoes?(i=s.alteracoes)===null||i===void 0?void 0:i.filhos.flatMap(u=>{const c=[];return Qo(u,c),c}).filter(u=>u.uuid===e.uuid)[0]:void 0}if((e==null?void 0:e.tipo)===R.artigo.tipo){const s=r.filhos.find(u=>u.uuid===e.uuid);if(s)return s}const n=(e==null?void 0:e.tipo)===R.articulacao.tipo||(e==null?void 0:e.uuid)===void 0?r:Zn(r,e.uuid);if(n!==null)return n},Qi=(t,e,o)=>{var i;const r=Me(e);if(r.length>0||e.mensagens&&((i=e.mensagens)===null||i===void 0?void 0:i.length)>0){e.mensagens=r;const n=X(e,o);n.mensagens=Me(e),t.push(n)}},Tn=(t,e=!0)=>{const o=[];if(!t)return[];if(H(t)&&Xe(t)&&t.filhos.filter(i=>i.tipo===R.omissis.tipo).length>0&&(Qi(o,t),t.filhos.filter(i=>i.tipo===R.omissis.tipo).forEach(i=>Qi(o,i))),ar(t)||So(t)){const i=Et(t)?t.pai.pai:t.pai;Qi(o,i),me(i)&&Qi(o,Et(t)?t.pai.pai:t.pai),yt(t).forEach(r=>{(e||r!==t)&&Qi(o,r,!0)})}else!e||Te(t)||me(t)||Qi(o,t,!0);return o},Ui=t=>(G(t)||ge(t))&&yt(t).length<=2?yt(t).filter(e=>t.uuid!==e.uuid):Cp(t,!0).filter(e=>e.tipo===t.tipo),Kp=t=>Ui(t).map(e=>(e.mensagens=Me(e),X(e)));var j;(function(t){t.ArticulacaoAtualizada="ArticulacaoAtualizada",t.ComandoEmendaGerado="ComandoEmendaGerado",t.DocumentoCarregado="DocumentoCarregado",t.InformarNorma="InformarNorma",t.ElementoModificado="ElementoModificado",t.ElementoIncluido="ElementoIncluido",t.ElementoRemovido="ElementoRemovido",t.ElementoRenumerado="ElementoRenumerado",t.ElementoRestaurado="ElementoRestaurado",t.ElementoSuprimido="ElementoSuprimido",t.ElementoValidado="ElementoValidado",t.ElementoSelecionado="ElementoSelecionado",t.ElementoMarcado="ElementoMarcado",t.SituacaoElementoModificada="SituacaoElementoModificada"})(j||(j={}));const jg=(t,e)=>((o,i)=>{const r=Nt(o);return{articulacao:o,modo:i,past:[],present:[],future:[],ui:{events:[{stateType:j.DocumentoCarregado,elementos:r}]}}})(e.articulacao,e.classificacao),Pl=function(t=0){return{next:()=>++t}}();function kt(t){return class extends t{constructor(){super(...arguments),this.mensagens=[]}}}class Gp{constructor(e){this.tipoAcao=e,this.isDispositivoAlteracao=!0,this.descricao=e==="INICIAR_BLOCO"?"Inserir bloco de altera\xE7\xE3o":"Finalizar bloco de altera\xE7\xE3o"}execute(e,o,i,r=!1){return{type:"ADICIONAR_ELEMENTO",subType:this.tipoAcao,atual:e,novo:{tipo:i,isDispositivoAlteracao:this.isDispositivoAlteracao,conteudo:{texto:o}},hasDesmembramento:r}}}const ui=new Gp("INICIAR_BLOCO"),zg=new Gp("FINALIZAR_BLOCO");function It(t){return class extends t{get alteracoes(){}hasAlteracao(){return!1}}}var gs,Tt;function Dt(t){return class extends t{constructor(){super(...arguments),this.tipoConteudo=gs.ConteudoTexto,this.texto=""}}}function di(t){return class extends t{addFilho(e,o){if(o&&this.filhos.indexOf(o)>=0){const i=this.filhos.indexOf(o)+1;this.isLastFilho(o)?this.filhos.push(e):this.filhos.splice(i,0,e)}else this.filhos.push(e);G(e)&&We(e).addArtigo(e,o)}addFilhoOnPosition(e,o){var i;if(this.filhos.splice(o,0,e),G(e)){const r=(i=Pe(e))!==null&&i!==void 0?i:Cn(e.pai.pai,e.pai),n=We(e),s=r?n.indexOfArtigo(r)+1:0;n.addArtigoOnPosition(e,s)}}hasArtigos(){return this.filhos.filter(e=>G(e)).length>0}isLastFilho(e){return this.filhos.indexOf(e)===this.filhos.length-1}get filhos(){var e;return this._filhos=(e=this._filhos)!==null&&e!==void 0?e:[],this._filhos}indexOf(e){return this.filhos.indexOf(e)}removeFilho(e){this._filhos=this.filhos.filter(o=>o.uuid!==e.uuid),G(e)&&We(e).removeArtigo(e)}renumeraFilhos(){var e;this.filhos.filter(o=>!G(o)).forEach(o=>{o.numero=Ns(o),o.createRotulo(o),o.id=ri(o)}),(e=We(this.filhos[0]))===null||e===void 0||e.renumeraArtigos()}}}function Hi(t){return class extends t{addFilho(e,o){if(o){const i=this.filhos.indexOf(o)+1;this.isLastFilho(o)?this.filhos.push(e):this.filhos.splice(i,0,e)}else this.filhos.push(e)}addFilhoOnPosition(e,o){this.filhos.splice(o,0,e)}hasArtigos(){return this.filhos.filter(e=>G(e)).length>0}isLastFilho(e){return this.filhos.indexOf(e)===this.filhos.length-1}get filhos(){var e;return this._filhos=(e=this._filhos)!==null&&e!==void 0?e:[],this._filhos}indexOf(e){return this.filhos.indexOf(e)}removeFilho(e){this._filhos=this.filhos.filter(o=>o.uuid!==e.uuid)}renumeraFilhos(){this.filhos.forEach(e=>{H(e)&&Pp(e)||e.situacao.descricaoSituacao===$.DISPOSITIVO_NOVO||e.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO?(e.numero=Ns(e),e.createRotulo(e),e.id=ri(e)):e.createRotulo(e)})}}}function pi(t){return class extends t{constructor(){super(...arguments),this.type="NumeracaoAgrupadorLcp95",this.informouAgrupadorUnico=!1}getNomeAgrupadorUnico(e){return`${e.descricao} \xFAnic${e.artigoDefinido}`.toLocaleUpperCase()}normalizaNumeracao(e){const o=e.trim().split(/\s+/);if(o.length!==2)return"";const i=o[1].split("-");return Ts(i[0])?(i[0]=Vp(i[0]),i.join("-")):""}createNumeroFromRotulo(e){if(e)if(this.informouAgrupadorUnico=/.*[uú]nic[ao]/i.test(e),this.informouAgrupadorUnico)this.numero="1";else{const o=this.normalizaNumeracao(e);this.numero=this.informouAgrupadorUnico?"1":ii(o)?o:void 0}}createRotulo(e){var o;const i=e.descricao===void 0?(o=e.name)!==null&&o!==void 0?o:"":e.descricao.toLocaleUpperCase();this.numero===void 0?this.rotulo=St(e)?"\u201C"+e.tipo:e.tipo:this.numero===void 0||ii(this.numero)?e.isDispositivoAlteracao&&St(e)?this.rotulo="\u201C"+(this.informouAgrupadorUnico?this.getNomeAgrupadorUnico(e):i+" "+Qt(this.numero,tn)):yt(e).length===1?this.rotulo=this.getNomeAgrupadorUnico(e):this.rotulo=i+" "+Qt(this.numero,tn):this.rotulo=i+" "+this.numero}getNumeracaoParaComandoEmenda(){const e=new Fe,o=this.numero?Qt(this.numero,tn):"???";e.append(this.descricao+" "+o);const i=this.pai;return i&&!Ni(i)&&(e.append(i.pronomePossessivoSingular),e.append(" "),e.append(i.getNumeracaoParaComandoEmenda())),e.toString()}getNumeracaoComRotuloParaComandoEmenda(){return this.getNumeracaoParaComandoEmenda()}}}(function(t){t.ConteudoTexto="Conte\xFAdo de Texto"})(gs||(gs={})),function(t){t.EMENDA="emenda",t.EMENDA_ARTIGO_ONDE_COUBER="emendaArtigoOndeCouber",t.NORMA="norma",t.PROJETO="projeto"}(Tt||(Tt={}));const ie=[];ie.push(xl),ie.push(ai),ie.push(li),ie.push(ro),ie.push(ui),ie.push(zg),ie.push(ap),ie.push(lp),ie.push(cp),ie.push(up),ie.push(Fa),ie.push(gn),ie.push(vn),ie.push(dp),ie.push(pp),ie.push(bg),ie.push(yg),ie.push(xg),ie.push(bn),ie.push(yp),ie.push(yn),ie.push(hp),ie.push(fp),ie.push(mp),ie.push(gp),ie.push(vp),ie.push(bp),ie.push(xp),ie.push(wp),ie.push(_p),ie.push(lo),ie.push(wl),ie.push(sp),ie.push(Ep),ie.push(lg),ie.push(cg),ie.push(ug),ie.push(za),ie.push(dg),ie.push(pg),ie.push(Vd),ie.push(Hd),ie.push(Kd),ie.push(Gd),ie.push(Wd),ie.push(Qd),ie.push(Xd),ie.push(Yd),ie.push(tp),ie.push(op);const Ai=[];Ai.push(bl),Ai.push(Bd),Ai.push(yl),Ai.push(Is),Ai.push(Zd),Ai.push(ep);const Fg=t=>ie.includes(t),Tl=[...ie,...Ai,Ap],fr=t=>Tl.filter(e=>e instanceof Ro&&e.tipo===t)[0];function hi(t){return class extends t{getAcoesPossiveis(e){var o,i,r,n;const s=[];if(!me(e))return[];if(Ol(e).length===0&&Sl(e).length>0&&e.filhos.filter(u=>me(u)).length>0||s.push(lo),e.pai&&Te(e.pai)&&me(e.pai)&&ko(e)===void 0){const u=(o=e.tiposPermitidosPai)===null||o===void 0?void 0:o.indexOf(e.pai.tipo);(i=e.tiposPermitidosPai)===null||i===void 0||i.filter((c,d)=>d>u).forEach(c=>s.push(fr(c)))}if(e.pai&&!Te(e.pai)&&me(e.pai)&&e.pai.indexOf(e)===0){const u=(r=e.tiposPermitidosPai)===null||r===void 0?void 0:r.indexOf(e.pai.tipo);(n=e.tiposPermitidosPai)===null||n===void 0||n.filter((c,d)=>d>u).forEach(c=>s.push(fr(c)))}return e.pai&&e.pai.indexOf(e)>0&&me(e.pai)&&!Te(e.pai)&&s.push(fr(e.pai.tipo)),H(e)&&s.push(ro),e.getAcoesPermitidas(e,s)}getAcaoPossivelTab(e){}getAcaoPossivelShiftTab(e){}}}const En=t=>{var e,o;return H(t.pai)&&t.filhos.length===0&&t.tipo!==R.omissis.name&&((e=Pe(t))===null||e===void 0?void 0:e.tipo)!==R.omissis.name&&((o=ji(t))===null||o===void 0?void 0:o.tipo)!==R.omissis.name};class Nl{constructor(){this.descricaoSituacao=$.DISPOSITIVO_NOVO}getAcoesPermitidas(e,o){return[...new Set(o)].filter(i=>i!==void 0).filter(i=>i.descricao!=="Adicionar"&&i.descricao!=="Atualizar dispositivo").sort((i,r)=>i.descricao.localeCompare(r.descricao))}}function xt(t){return class extends t{constructor(){super(...arguments),this.situacao=new Nl}getAcoesPermitidas(e,o){var i;return(i=this.situacao)===null||i===void 0?void 0:i.getAcoesPermitidas(e,o)}}}class wt{constructor(e){this.tipo=R[e].tipo,this.tagId=R[e].tagId,this.name=R[e].name,this.descricao=R[e].descricao,this.descricaoPlural=R[e].descricaoPlural,this.tiposPermitidosPai=R[e].tiposPermitidosPai,this.tiposPermitidosFilhos=R[e].tiposPermitidosFilhos,this.tipoProvavelFilho=R[e].tipoProvavelFilho,this.INDICADOR_SEQUENCIA=R[e].INDICADOR_SEQUENCIA,this.INDICADOR_FIM_SEQUENCIA=R[e].INDICADOR_FIM_SEQUENCIA,this.INDICADOR_DESDOBRAMENTO=R[e].INDICADOR_DESDOBRAMENTO}}const Dl=(t,e)=>{e.tipoProvavelFilho!==void 0&&t.filhos.forEach((o,i)=>{var r;const n=he(G(e)&&R.inciso.name===e.tipoProvavelFilho?e.caput:e,e.tipoProvavelFilho);n.texto=(r=o.texto)!==null&&r!==void 0?r:"",n.situacao=o.situacao,n.mensagens=Me(o),o.filhos&&Dl(o,n),i===t.filhos.length-1&&e.renumeraFilhos()})},Wp=(t,e)=>{t.tipo===e.tipo&&t.filhos.forEach(o=>{var i;const r=he(G(e)&&we(o.pai)?e.caput:e,o.tipo);o.rotulo?r.rotulo=o.rotulo:r.createRotulo(r),r.texto=(i=o.texto)!==null&&i!==void 0?i:"",r.situacao=o.situacao,t.removeFilho(o),r.mensagens=Me(o),o.filhos&&(t.tipo===e.tipo?Wp(o,r):Dl(o,r)),t.filhos.length===0&&e.renumeraFilhos()})},Ug=xt(function(t){return class extends t{getAcoesPossiveis(e){const o=[];return Ti(e)?(o.push(lo),H(e)&&e.situacao.descricaoSituacao!==$.DISPOSITIVO_ADICIONADO&&e.numero==="1"||o.push(Kd),o.push(Gd),Vi(e)!==void 0&&o.push(ai),Bi(e)!==void 0&&o.push(li),H(e)&&o.push(ro),H(e)&&Wt(e)&&o.push(ui),(e.texto.length===0||Ii(e))&&o.push(yl),(e.texto.length===0||Ot(e))&&o.push(Zd),(ke(e)||Je(e))&&o.push(ge(e.pai.pai)?vn:gn),Jt(e)&&(Pe(e)===void 0||ve(Pe(e)))||o.push(dp),En(e)&&o.push(ap),e.getAcoesPermitidas(e,o)):[]}getAcaoPossivelTab(e){var o;if(Ti(e))return(o=e.tiposPermitidosFilhos)===null||o===void 0?void 0:o.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ne).filter(n=>n instanceof ne&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}getAcaoPossivelShiftTab(e){var o;if(Ti(e))return ke(e)||Je(e)?ge(e.pai.pai)?vn:gn:(o=e.tiposPermitidosPai)===null||o===void 0?void 0:o.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ne).filter(n=>n instanceof ne&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(kt(Tr(It(Dt(function(t){return class extends t{constructor(){super(...arguments),this.type="NumeracaoAlineaLcp95",this.SUFIXO=")"}normalizaNumeracao(e){const o=/[a-z]+(-[a-zA-Z]+)*/.exec(e.trim());return o?o[0]:Xo(e).trim().replace(/\)$/,"").trim()}createNumeroFromRotulo(e){this.numero=Qt(this.normalizaNumeracao(e),Up(e)?null:Bp)}createRotulo(){this.rotulo=this.numero===void 0?R.alinea.name:Qt(this.numero,Ba)+this.SUFIXO}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerada]":"\u201C"+Qt(this.numero,Ba)+"\u201D"}getNumeracaoComRotuloParaComandoEmenda(){var e,o;return this.numero===void 0?((e=R.alinea.descricao)===null||e===void 0?void 0:e.toLocaleLowerCase())+" [ainda n\xE3o numerada]":((o=R.alinea.descricao)===null||o===void 0?void 0:o.toLocaleLowerCase())+" "+this.getNumeracaoParaComandoEmenda()}}}(Hi(wt)))))))),Bg=xt(function(t){return class extends t{getAcoesPossiveis(e){var o,i,r,n,s,u;const c=[];if(!G(e))return[];if(c.push(bl),c.push(lo),Vi(e)!==void 0&&c.push(ai),Bi(e)!==void 0&&c.push(li),St(e)&&H(e)&&e.situacao.descricaoSituacao!==$.DISPOSITIVO_ADICIONADO&&e.numero==="1"||c.push(Vd),c.push(Hd),H(e)&&c.push(ro),e.alteracoes&&c.push(xl),e.hasAlteracao()||H(e)||e.texto.length!==0&&Ot(e)||c.push(Bd),e.hasAlteracao()||H(e)||e.texto.length!==0&&!Ot(e)||c.push(Is),e.hasAlteracao()||H(e)||Xe(e)||c.push(ui),e.pai.indexOf(e)>0&&Pe(e)!==void 0&&!ve(Pe(e))&&c.push(pp),e.pai&&!H(e)&&Te(e.pai)&&e.pai.filhos.filter(d=>me(d)).length===0&&c.push(za),e.pai&&H(e)&&me(e.pai)&&c.push(za),!H(e)&&e.pai&&(d=>{const p=d.pai.indexOf(d);return d.pai.filhos.filter((a,l)=>l>p&&me(a)).length>0})(e)&&c.push(fr(fu(e).tipo)),!H(e)&&me(e.pai)){const d=(i=(o=e.tiposPermitidosPai)===null||o===void 0?void 0:o.indexOf(e.pai.tipo))!==null&&i!==void 0?i:0;(r=e.tiposPermitidosPai)===null||r===void 0||r.filter(()=>d>0).filter((p,a)=>e.pai.indexOf(e)>0?a>=d:a>d).forEach(p=>c.push(fr(p)))}if(!H(e)&&me(e.pai)&&!Te(e.pai)&&e.pai.indexOf(e)>0&&(d=>{var p;return((p=d.pai)===null||p===void 0?void 0:p.pai)!==void 0&&xn(d.pai.pai,d.pai,[]).length>0})(e)){const d=(s=(n=e.tiposPermitidosPai)===null||n===void 0?void 0:n.indexOf(e.pai.tipo))!==null&&s!==void 0?s:0,p=xn(e.pai.pai,e.pai,[]).reduce((a,l)=>a.includes(l.tipo)&&fu(l)!==void 0?a:a.concat(l.tipo),[]);(u=e.tiposPermitidosPai)===null||u===void 0||u.filter(()=>d>0).filter(a=>p.includes(a)).forEach(a=>c.push(fr(a)))}return e.getAcoesPermitidas(e,c)}getAcaoPossivelTab(e){var o;if(G(e))return(o=e.tiposPermitidosFilhos)===null||o===void 0?void 0:o.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ne).filter(n=>n instanceof ne&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}getAcaoPossivelShiftTab(e){var o;if(e.tiposPermitidosFilhos)return Et(e)&&(ke(e)||Je(e))?yn:Go(e)&&(ke(e)||Je(e))?bn:Ti(e)&&(ke(e)||Je(e))?ge(e.pai.pai)?vn:gn:(o=e.tiposPermitidosPai)===null||o===void 0?void 0:o.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ne).filter(n=>n instanceof ne&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(kt(Mo(function(t){return class extends t{hasAlteracao(){var e;return!!this.alteracoes&&((e=this.alteracoes.filhos)===null||e===void 0?void 0:e.length)>0}}}(function(t){return class extends t{constructor(){super(...arguments),this.type="NumeracaoArtigoLcp95",this.PREFIXO="Art. ",this.SUFIXO="\xBA",this.ARTIGO_UNICO="Artigo \xFAnico.",this.informouArtigoUnico=!1}normalizaNumeracao(e){return e.replace(/["”“]/g,"").replace(/\./g,"").replace(/artigo [uú]nico/i,"1").replace(/(art[.]{0,1})/i,"").replace(/[º]/i,"").trim()}createNumeroFromRotulo(e){const o=this.normalizaNumeracao(e);this.informouArtigoUnico=/.*[uú]nico/i.test(e),this.numero=this.informouArtigoUnico?"1":ii(o)?o:void 0}createRotulo(e){e===void 0?this.rotulo=R.artigo.descricao:e.situacao.descricaoSituacao!==$.DISPOSITIVO_ADICIONADO||e.situacao.tipoEmenda!==Tt.EMENDA_ARTIGO_ONDE_COUBER||H(e)?this.numero===void 0?this.rotulo=St(e)?"\u201C"+e.tipo:e.tipo:this.numero===void 0||ii(this.numero)?St(e)?this.rotulo="\u201C"+(this.informouArtigoUnico?this.ARTIGO_UNICO:this.PREFIXO+this.getNumeroAndSufixoNumeracao()):We(e).artigos.length===1?this.rotulo=this.ARTIGO_UNICO:this.rotulo=this.PREFIXO+this.numero===void 0?void 0:this.PREFIXO+this.getNumeroAndSufixoNumeracao():this.rotulo=this.PREFIXO+this.numero+this.SUFIXO:this.rotulo="Art."}getNumeroAndSufixoNumeracao(e=!1){var o;const i=(o=this.numero)===null||o===void 0?void 0:o.split("-"),[r,...n]=i,s=parseInt(r!=null?r:"1",10)<10;return(s?r+this.SUFIXO:r)+(n.length>0?"-"+(n==null?void 0:n.map(Ba).join("-").toUpperCase()):"")+(e||s&&!n.length?"":".")}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerado]":this.informouArtigoUnico?"artigo \xFAnico":this.getNumeroAndSufixoNumeracao(!0)}getNumeracaoComRotuloParaComandoEmenda(){var e;return this.numero===void 0?((e=R.artigo.descricao)===null||e===void 0?void 0:e.toLowerCase())+" [ainda n\xE3o numerado]":this.informouArtigoUnico?"artigo \xFAnico":"art. "+this.getNumeroAndSufixoNumeracao(!0)}}}(function(t){return class extends t{get filhos(){const e=this.getIncisosCaput(),o=this.paragrafos;return e.concat(o)}getIncisosCaput(){var e,o;return(o=(e=this.caput)===null||e===void 0?void 0:e.filhos)!==null&&o!==void 0?o:[]}get paragrafos(){var e;return this._paragrafos=(e=this._paragrafos)!==null&&e!==void 0?e:[],this._paragrafos}addFilhoOnPosition(e,o){Ut(e)?this.caput.addFilhoOnPosition(e,o):this.paragrafos.splice(o-this.getIncisosCaput().length,0,e)}addFilho(e,o){we(e)?this.caput=e:Ut(e)?this.addIncisoCaput(e,o):this.addParagrafo(e,o)}removeFilho(e){var o;Ut(e)?(o=this.caput)===null||o===void 0||o.removeFilho(e):this.removeParagrafo(e)}addIncisoCaput(e,o){this.caput.addFilho(e,o)}addParagrafo(e,o){if(o){const i=this.paragrafos.indexOf(o)+1;this.isLastFilho(o)?this.paragrafos.push(e):this.paragrafos.splice(i,0,e)}else this.paragrafos.push(e)}removeParagrafo(e){var o;this._paragrafos=(o=this._paragrafos)===null||o===void 0?void 0:o.filter(i=>i.uuid!==e.uuid?i:i.pai=void 0)}isLastFilho(e){return this.paragrafos.indexOf(e)===this.paragrafos.length-1}indexOf(e){return Ut(e)?this.caput.indexOf(e):this.filhos.indexOf(e)}renumeraIncisos(){var e;(e=this.caput)===null||e===void 0||e.renumeraFilhos()}renumeraParagrafos(){this.paragrafos.forEach(e=>{H(e)&&Pp(e)||e.situacao.descricaoSituacao===$.DISPOSITIVO_NOVO||e.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO?(e.numero=Ns(e),e.createRotulo(e),e.id=ri(e)):e.createRotulo(e)})}isParagrafoUnico(){return this.paragrafos.length===1}renumeraFilhos(){this.renumeraIncisos(),this.renumeraParagrafos()}}}(class extends wt{constructor(){super("artigo")}get texto(){var t,e;return(e=(t=this.caput)===null||t===void 0?void 0:t.texto)!==null&&e!==void 0?e:""}set texto(t){this.caput.texto=t}}))))))),Vg=xt(function(t){return class extends t{getAcoesPossiveis(e){return[]}getAcaoPossivelTab(e){}getAcaoPossivelShiftTab(e){}}}(kt(Mo(It(Dt(function(t){return class extends t{constructor(){super(...arguments),this.type="NumeracaoIndisponivel"}createRotulo(){this.rotulo=void 0}createNumeroFromRotulo(){}getNumeracaoParaComandoEmenda(){return""}getNumeracaoComRotuloParaComandoEmenda(){return"caput"}}}(Hi(wt)))))))),Hg=xt(function(t){return class extends t{getAcoesPossiveis(e){const o=[];return So(e)?(o.push(lo),H(e)&&Wt(e)&&o.push(ui),(ge(e.pai)||we(e.pai)||Ut(e.pai)||Ti(e.pai))&&e.pai.tipoProvavelFilho.length>0&&o.push(Tl.filter(i=>i instanceof ne&&i.nomeAcao==="transformarDispositivoGenericoEm"+e.pai.tipoProvavelFilho)[0]),e.getAcoesPermitidas(e,o)):[]}getAcaoPossivelTab(e){}getAcaoPossivelShiftTab(e){}}}(kt(Ps(It(Dt(function(t){return class extends t{constructor(){super(...arguments),this.type="NumeracaoDispositivoGenericoLcp95",this.SUFIXO=" -"}createNumeroFromRotulo(){}createRotulo(){this.rotulo=this.numero===void 0?"dg":this.numero+this.SUFIXO}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"dg":this.numero}getNumeracaoComRotuloParaComandoEmenda(){return this.getNumeracaoParaComandoEmenda()}}}(Hi(wt)))))))),Kg=xt(function(t){return class extends t{getAcoesPossiveis(e){const o=[];return Ut(e)?(o.push(lo),H(e)&&e.situacao.descricaoSituacao!==$.DISPOSITIVO_ADICIONADO&&e.numero==="1"||o.push(Wd),o.push(Qd),Vi(e)!==void 0&&o.push(ai),Bi(e)!==void 0&&o.push(li),H(e)&&o.push(ro),H(e)&&Wt(e)&&o.push(ui),Ot(e)&&o.push(yl),Ii(e)&&o.push(Is),ps(e)&&Je(e)&&o.push(ep),!Et(e)||Jt(e)&&(Pe(e)===void 0||ve(Pe(e)))||o.push(uu),Et(e)&&(ke(e)||Je(e))&&o.push(yn),Et(e)&&En(e)&&o.push(lp),Go(e)&&(ke(e)||Jt(e))&&o.push(Fa),Go(e)&&(!Jt(e)||Pe(e)!==void 0&&ve(Pe(e)))&&o.push(du),Go(e)&&En(e)&&o.push(Fa),Go(e)&&(ke(e)||Je(e))&&o.push(bn),e.getAcoesPermitidas(e,o)):[]}getAcaoPossivelTab(e){var o;if(Ut(e))return!Et(e)||ke(e)&&Jt(e)?Go(e)&&(ke(e)||Je(e))?du:(o=e.tiposPermitidosFilhos)===null||o===void 0?void 0:o.map(i=>{const r=Ut(e)?e.pai.tipo:"",n=i.endsWith(R.inciso.name)?!ge(e)||ke(e)&&Jt(e)?"IncisoCaput":"IncisoParagrafo":i,s="transformar"+e.tipo+r+"Em"+n;return e.getAcoesPossiveis(e).filter(u=>u instanceof ne).filter(u=>u instanceof ne&&u.nomeAcao&&s&&u.nomeAcao===s)[0]})[0]:uu}getAcaoPossivelShiftTab(e){var o;if(Ut(e))return Et(e)&&(ke(e)||Je(e))?yn:Go(e)&&(ke(e)||Je(e))?bn:(o=e.tiposPermitidosPai)===null||o===void 0?void 0:o.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ne).filter(n=>n instanceof ne&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(kt(Mo(It(Dt(function(t){return class extends t{constructor(){super(...arguments),this.type="NumeracaoIncisoLcp95",this.SUFIXO=" \u2013"}normalizaNumeracao(e){const o=/[CDILMVX]+(-[a-zA-Z]+)*/.exec(e);return o?o[0]:Xo(e).trim().replace(/-$/,"").trim()}createNumeroFromRotulo(e){const o=Qt(this.normalizaNumeracao(e),Up(e)?null:Vp);this.numero=ii(o)?o:void 0}createRotulo(){if(this.numero){const e=this.numero.search(/[a-zA-Z-]/)===-1?parseInt(this.numero):parseInt(this.numero.substring(0,this.numero.search(/[a-zA-Z-]/))),o=this.numero.search(/[a-zA-Z-]/)===-1?"":this.numero.substring(this.numero.search(/[a-zA-Z-]/));this.rotulo=(e===0?e+o:Qt(this.numero,tn))+this.SUFIXO}else this.rotulo=R.inciso.name}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerado]":Qt(this.numero,tn)}getNumeracaoComRotuloParaComandoEmenda(){var e,o;return this.numero===void 0?((e=R.inciso.descricao)===null||e===void 0?void 0:e.toLocaleLowerCase())+" [ainda n\xE3o numerado]":((o=R.inciso.descricao)===null||o===void 0?void 0:o.toLocaleLowerCase())+" "+this.getNumeracaoParaComandoEmenda()}}}(Hi(wt)))))))),Gg=xt(function(t){return class extends t{getAcoesPossiveis(e){const o=[];return pu(e)?(o.push(lo),H(e)&&e.situacao.descricaoSituacao!==$.DISPOSITIVO_ADICIONADO&&e.numero==="1"||o.push(Xd),o.push(Yd),Vi(e)!==void 0&&o.push(ai),Bi(e)!==void 0&&o.push(li),H(e)&&o.push(ro),H(e)&&Wt(e)&&o.push(ui),(ke(e)||Je(e))&&o.push(yp),En(e)&&o.push(cp),e.getAcoesPermitidas(e,o)):[]}getAcaoPossivelTab(e){var o;if(pu)return(o=e.tiposPermitidosFilhos)===null||o===void 0?void 0:o.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ne).filter(n=>n instanceof ne&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}getAcaoPossivelShiftTab(e){var o;if(e.tiposPermitidosFilhos)return(o=e.tiposPermitidosPai)===null||o===void 0?void 0:o.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ne).filter(n=>n instanceof ne&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(kt(Mo(It(Dt(function(t){return class extends t{constructor(){super(...arguments),this.type="NumeracaoItemLcp95",this.SUFIXO="."}normalizaNumeracao(e){const o=/\d+(-[a-zA-Z]+)*/.exec(e.trim());return o?o[0]:Xo(e).trim().replace(/\.$/,"").trim()}createNumeroFromRotulo(e){const o=this.normalizaNumeracao(e);this.numero=ii(o)?o:void 0}createRotulo(){this.rotulo=this.numero===void 0?R.item.name:Qt(this.numero)+this.SUFIXO}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerado]":Qt(this.numero)}getNumeracaoComRotuloParaComandoEmenda(){var e,o;return this.numero===void 0?((e=R.item.descricao)===null||e===void 0?void 0:e.toLocaleLowerCase())+" [ainda n\xE3o numerado]":((o=R.item.descricao)===null||o===void 0?void 0:o.toLocaleLowerCase())+" "+this.getNumeracaoParaComandoEmenda()}}}(Hi(wt)))))))),Wg=xt(function(t){return class extends t{getAcoesPossiveis(e){const o=[];return ge(e)?(o.push(lo),H(e)&&e.situacao.descricaoSituacao!==$.DISPOSITIVO_ADICIONADO&&e.numero==="1"||o.push(tp),o.push(op),Vi(e)!==void 0&&o.push(ai),Bi(e)!==void 0&&o.push(li),H(e)&&o.push(ro),e.texto&&Ot(e)&&o.push(Is),!Jt(e)&&!ke(e)||Pe(e)&&ve(Pe(e))||o.push(_p),!Jt(e)&&ge(Pe(e))&&o.push(wp),(Je(e)||ke(e))&&o.push(xp),En(e)&&o.push(up),H(e)&&Wt(e)&&o.push(ui),e.getAcoesPermitidas(e,o)):[]}getAcaoPossivelTab(e){var o;if(ge(e))return(o=e.tiposPermitidosFilhos)===null||o===void 0?void 0:o.map(i=>{const r=i.endsWith(R.inciso.name)?ge(e)&&!ke(e)&&!Jt(e)&&ge(Pe(e))?"IncisoParagrafo":"IncisoCaput":i,n="transformar"+e.tipo+"Em"+r;return e.getAcoesPossiveis(e).filter(s=>s instanceof ne).filter(s=>s instanceof ne&&s.nomeAcao&&n&&s.nomeAcao===n)[0]})[0]}getAcaoPossivelShiftTab(e){var o;if(e.tiposPermitidosFilhos)return Et(e)&&(ke(e)||Je(e))?yn:Go(e)&&(ke(e)||Je(e))?bn:Ti(e)&&(ke(e)||Je(e))?ge(e.pai.pai)?vn:gn:(o=e.tiposPermitidosPai)===null||o===void 0?void 0:o.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ne).filter(n=>n instanceof ne&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(kt(Mo(It(Dt(function(t){return class extends t{constructor(){super(...arguments),this.type="NumeracaoParagrafoLcp95",this.PREFIXO="\xA7 ",this.SUFIXO="\xBA",this.PARAGRAFO_UNICO="Par\xE1grafo \xFAnico.",this.informouParagrafoUnico=!1}normalizaNumeracao(e){return e.trim().replace(/\./g,"").replace(/§/i,"").replace(/par[aá]grafo [uú]nico/i,"1").replace(/[º]/i,"").trim()}createNumeroFromRotulo(e){const o=this.normalizaNumeracao(e);this.informouParagrafoUnico=/.*[uú]nico/i.test(e),this.numero=this.informouParagrafoUnico?"1":ii(o)?o:void 0}createRotulo(e){var o;this.numero!==void 0&&e?ii(this.numero)?e.isDispositivoAlteracao?this.rotulo=this.informouParagrafoUnico?this.PARAGRAFO_UNICO:this.PREFIXO+this.getNumeroAndSufixoNumeracao():((o=e.pai)===null||o===void 0?void 0:o.filhos.filter(i=>ge(i)).length)===1?this.rotulo=this.PARAGRAFO_UNICO:this.rotulo=this.PREFIXO+this.numero===void 0?void 0:this.PREFIXO+this.getNumeroAndSufixoNumeracao():this.rotulo=this.getNumeroAndSufixoNumeracao():this.rotulo=R.paragrafo.name}getNumeroAndSufixoNumeracao(e=!1){if(!this.numero)return"";const o=this.numero.search(/[a-zA-Z-]/)===-1?parseInt(this.numero):parseInt(this.numero.substring(0,this.numero.search(/[a-zA-Z-]/))),i=this.numero.search(/[a-zA-Z-]/)===-1?"":this.numero.substring(this.numero.search(/[a-zA-Z-]/)),r=o<10;return(r?o+this.SUFIXO:o)+((i==null?void 0:i.length)>0?i:"")+(e||r&&!(i!=null&&i.length)?"":".")}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerado]":this.isParagrafoUnico()?"par\xE1grafo \xFAnico":this.getNumeroAndSufixoNumeracao(!0)}getNumeracaoComRotuloParaComandoEmenda(){var e;return this.numero===void 0?((e=R.paragrafo.descricao)===null||e===void 0?void 0:e.toLocaleLowerCase())+" [ainda n\xE3o numerado]":this.isParagrafoUnico()?"par\xE1grafo \xFAnico":"\xA7 "+this.getNumeroAndSufixoNumeracao(!0)}isParagrafoUnico(){var e;return this.isDispositivoAlteracao&&this.informouParagrafoUnico||!this.isDispositivoAlteracao&&((e=this.pai)===null||e===void 0?void 0:e.filhos.filter(o=>ge(o)).length)===1}}}(Hi(wt)))))))),Qg=xt(hi(kt(Ps(It(Dt(pi(di(class extends wt{constructor(){super("articulacao")}get artigos(){var t;return(t=this._artigos)!==null&&t!==void 0?t:[]}addArtigo(t,e){var o;this._artigos=(o=this._artigos)!==null&&o!==void 0?o:[],e!==void 0?this._artigos.splice(this._artigos.indexOf(e)+1,0,t):this._artigos.push(t)}addArtigoOnPosition(t,e){var o;this._artigos=(o=this._artigos)!==null&&o!==void 0?o:[],this._artigos.splice(e,0,t)}removeArtigo(t){var e;this._artigos=(e=this._artigos)!==null&&e!==void 0?e:[],this._artigos=this._artigos.filter(o=>o.uuid!==t.uuid)}renumeraArtigos(){this.artigos.filter(t=>t.situacao.descricaoSituacao===$.DISPOSITIVO_NOVO||t.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO).forEach(t=>{H(t)||(t.numero=Ns(t)),t.createRotulo(t),t.id=ri(t);const e=t.caput;e&&(e.id=ri(e))})}indexOfArtigo(t){return this.artigos.indexOf(t)}})))))))),Zg=xt(hi(kt(Mo(It(Dt(pi(di(wt)))))))),Xg=xt(hi(kt(Ps(It(Dt(pi(di(wt)))))))),Yg=xt(hi(kt(Mo(It(Dt(pi(di(wt)))))))),Jg=xt(hi(kt(Tr(It(Dt(pi(di(wt)))))))),ev=xt(hi(kt(Tr(It(Dt(pi(di(wt)))))))),tv=xt(hi(kt(Tr(It(Dt(pi(di(wt)))))))),ov=xt(hi(kt(Mo(It(Dt(pi(di(wt)))))))),iv=xt(function(t){return class extends t{getAcoesPossiveis(e){const o=[];return ve(e)?(o.push(lo),Vi(e)!==void 0&&o.push(ai),Bi(e)!==void 0&&o.push(li),H(e)&&!So(e)&&o.push(ro),H(e)&&Wt(e)&&o.push(ui),Te(e.pai)&&Pe(e)!==void 0&&o.push(fp),we(e.pai)&&o.push(mp),G(e.pai)&&o.push(bp),ge(e.pai)&&o.push(gp),Ut(e.pai)&&o.push(hp),Ti(e.pai)&&o.push(vp),e.getAcoesPermitidas(e,o)):[]}getAcaoPossivelTab(e){}getAcaoPossivelShiftTab(e){}}}(Tr(It(function(t){return class extends t{constructor(){super(...arguments),this.tipoConteudo=gs.ConteudoTexto,this._texto=Lt}get texto(){return this._texto}set texto(e){const o=Ao(e);this._texto=o===wn?wn:Lt}}}(function(t){return class extends t{constructor(){super(...arguments),this.type="NumeracaoIndisponivel"}createRotulo(){this.rotulo=void 0}createNumeroFromRotulo(){}getNumeracaoParaComandoEmenda(){return""}getNumeracaoComRotuloParaComandoEmenda(){return""}}}(Hi(wt))))))),he=(t,e,o,i)=>{const r=Qp(e,t);return i!==void 0&&i>=0?t.addFilhoOnPosition(r,i):o?t.addFilho(r,o):t.addFilho(r),r},Qp=(t,e)=>{let o;switch(t.toLowerCase()){case"alinea":o=new Ug(t.toLowerCase());break;case"artigo":o=new Bg,o.caput=Qp(R.caput.tipo,o);break;case"capitulo":o=new Zg(t.toLowerCase());break;case"caput":o=new Vg(t.toLowerCase());break;case"inciso":o=new Kg(t.toLowerCase());break;case"item":o=new Gg(t.toLowerCase());break;case"livro":o=new Yg(t.toLowerCase());break;case"omissis":o=new iv(t.toLowerCase());break;case"paragrafo":o=new Wg(t.toLowerCase());break;case"parte":o=new Jg(t.toLowerCase());break;case"secao":o=new tv(t.toLowerCase());break;case"subsecao":o=new ev(t.toLowerCase());break;case"titulo":o=new ov(t.toLowerCase());break;default:o=e&&me(e)?new Xg("agrupadorGenerico"):new Hg("generico"),o.mensagens=[],o.mensagens.push({tipo:ee.WARNING,descricao:"N\xE3o foi poss\xEDvel validar a natureza deste dispositivo com base na legisla\xE7\xE3o vigente"})}return o.uuid=Pl.next(),o.name=t,o.pai=e,o.isDispositivoAlteracao=H(o),lv(o),o},Rl=()=>{const t=new Qg;return t.uuid=Pl.next(),t},Ll=t=>{t.alteracoes=Rl(),t.alteracoes.pai=t},xu=(t,e)=>{var o,i,r,n,s,u,c,d,p,a,l,h,f,m,g,v,y,b,x,w,_,I,k,C,A,S,E,O;let q;if(H(t))if(e.subType==="INICIAR_BLOCO")q=rn(R.artigo.tipo,We(t)),q.texto=((r=(i=(o=e.novo)===null||o===void 0?void 0:o.conteudo)===null||i===void 0?void 0:i.texto)===null||r===void 0?void 0:r.length)>0?(s=(n=e.novo)===null||n===void 0?void 0:n.conteudo)===null||s===void 0?void 0:s.texto:"";else if(e.subType==="FINALIZAR_BLOCO"){const P=We(t);q=jn(P.pai),q.texto=Ao((d=(c=(u=e.novo)===null||u===void 0?void 0:u.conteudo)===null||c===void 0?void 0:c.texto)!==null&&d!==void 0?d:"")}else if(((P,N)=>{var L,U,W;if(!H(P))return!1;const te=El(P);return Je(te)&&Lp(Ao((W=(U=(L=N.atual)===null||L===void 0?void 0:L.conteudo)===null||U===void 0?void 0:U.texto)!==null&&W!==void 0?W:""))&&Wt(P)})(t,e)){const P=We(t);q=e.subType==="INICIAR_BLOCO"?rn(R.artigo.tipo,P):jn(P.pai),q.texto=e.subType==="INICIAR_BLOCO"?"":Ao((l=(a=(p=e.novo)===null||p===void 0?void 0:p.conteudo)===null||a===void 0?void 0:a.texto)!==null&&l!==void 0?l:"")}else q=jn(t),q.createRotulo(),q.texto=((m=(f=(h=e.novo)===null||h===void 0?void 0:h.conteudo)===null||f===void 0?void 0:f.texto)===null||m===void 0?void 0:m.length)>0?Ao((y=(v=(g=e.novo)===null||g===void 0?void 0:g.conteudo)===null||v===void 0?void 0:v.texto)!==null&&y!==void 0?y:""):"";else t.alteracoes||Rp((x=(b=e.atual)===null||b===void 0?void 0:b.conteudo)===null||x===void 0?void 0:x.texto)||((w=e.novo)===null||w===void 0?void 0:w.isDispositivoAlteracao)?(t.hasAlteracao()||Ll(t),q=rn(t.tipo,t.alteracoes),q.texto=((k=(I=(_=e.novo)===null||_===void 0?void 0:_.conteudo)===null||I===void 0?void 0:I.texto)===null||k===void 0?void 0:k.length)>0?(A=(C=e.novo)===null||C===void 0?void 0:C.conteudo)===null||A===void 0?void 0:A.texto:""):(q=jn(t),q.texto=(O=(E=(S=e.novo)===null||S===void 0?void 0:S.conteudo)===null||E===void 0?void 0:E.texto)!==null&&O!==void 0?O:"");return q},jn=t=>t.hasAlteracao()?rv(t):G(t)?H(t)?he(t.caput,R.inciso.tipo,void 0,0):sv(t):me(t)?av(t):H(t)?ve(t)?he(t.pai,G(t.pai)?R.paragrafo.tipo:t.pai.tipoProvavelFilho,t):Xe(t)||Ot(t)?he(t,t.tipoProvavelFilho,t):he(t.pai,t.tipo,t):nv(t),rv=t=>{var e;return t.pai.isLastFilho(t)&&((e=t==null?void 0:t.pai)===null||e===void 0?void 0:e.pai)?he(t.pai.pai,t.pai.tipo,t.pai):he(t.pai,t.tipo,t)},nv=t=>{if(Ot(t)){const e=t.tipoProvavelFilho;return t.pai.filhos.length>0?he(t,e,void 0,0):he(t,e)}if(t.situacao.descricaoSituacao!==$.DISPOSITIVO_ORIGINAL&&ps(t)&&t.pai.isLastFilho(t)){if(Et(t)){const e=t.pai.pai;return e.filhos.filter(o=>ge(o)).length>0?he(e,R.paragrafo.tipo,void 0,0):he(e,R.paragrafo.tipo)}return he(t.pai.pai,t.pai.tipo,t.pai)}return he(t.pai,t.tipo,t)},sv=t=>{if(Ot(t)){const e=t.tipoProvavelFilho;if(e===R.inciso.tipo){const o=t.caput;return o.filhos.length>0?he(o,e,void 0,0):he(o,e)}return t.pai.filhos.length>0?he(t,e,void 0,0):he(t,e)}return Ii(t)&&t.filhos.length>0&&ge(t.filhos[0])?he(t,R.paragrafo.tipo,void 0,0):he(t.pai,t.tipo,t)},av=t=>he(t,R.artigo.tipo,void 0,0),rn=(t,e,o,i)=>{const r=he(e,t,o,i);return r.createRotulo(r),r},lv=t=>{H(t)&&(t.renumeraFilhos=()=>{},G(t)&&(t.caput.renumeraFilhos=()=>{}),We(t).renumeraFilhos=()=>{},We(t).renumeraArtigos=()=>{})};class Jo extends Nl{constructor(){super(...arguments),this.descricaoSituacao=$.DISPOSITIVO_ADICIONADO,this.tipoEmenda=Tt.EMENDA}getAcoesPermitidas(e,o){return[...new Set(o)].filter(i=>i!==void 0).filter(i=>i.descricao!=="Adicionar"&&i.descricao!=="Atualizar dispositivo").filter(i=>{var r;return!(!((r=i.descricao)===null||r===void 0)&&r.startsWith("Mover"))||(n=>{var s;return((s=n.pai.filhos)===null||s===void 0?void 0:s.filter(u=>u.situacao.descricaoSituacao!==$.DISPOSITIVO_ADICIONADO).length)===0})(e)}).sort((i,r)=>i.descricao.localeCompare(r.descricao))}}class No{constructor(){this.descricaoSituacao=$.DISPOSITIVO_ORIGINAL}getAcoesPermitidas(e,o){const i=o.filter(r=>!(r instanceof Ro)).filter(r=>!(r instanceof qs)).filter(r=>{var n;return!(!((n=r.descricao)===null||n===void 0)&&n.startsWith("Mover"))}).filter(r=>!(r instanceof ne)).filter(r=>!(r instanceof Cs)).filter(r=>!(r instanceof ip));return Fi(e).filter(r=>_l(r)).length===0&&i.push(sp),i}}const wu=(t,e)=>{var o;let i;if(e.endsWith("EmOmissis")){const n=e.replace("transformar","").replace("EmOmissis","");i="transformar"+n+"EmOmissis"+n}else i=e;return(o=t.getAcoesPossiveis(t).filter(n=>n instanceof ne).filter(n=>n.nomeAcao===e||n.nomeAcao.replaceAll("IncisoCaput","Inciso").replaceAll("IncisoParagrafo","Inciso")===i)[0])===null||o===void 0?void 0:o.nomeAcao},nn=(t,e)=>t.getAcoesPossiveis(t).filter(o=>o instanceof e).length>0,Zp=(t,e,o)=>{var i,r,n,s,u,c,d,p,a;if(o&&((i=o.ui)===null||i===void 0?void 0:i.events)){const l=nt(o.ui.events,j.ElementoModificado);if(l&&l.elementos&&((n=(r=l.elementos[0])===null||r===void 0?void 0:r.conteudo)===null||n===void 0?void 0:n.texto)===t.texto)return!0}return t.texto!==""&&((u=(s=e.atual)===null||s===void 0?void 0:s.conteudo)===null||u===void 0?void 0:u.texto)===""||((d=(c=e.atual)===null||c===void 0?void 0:c.conteudo)===null||d===void 0?void 0:d.texto)&&t.texto.localeCompare((a=(p=e.atual)===null||p===void 0?void 0:p.conteudo)===null||a===void 0?void 0:a.texto)!==0},_u=t=>{const e=X(t);return e.mensagens=Me(t),e},qi=t=>{var e;t.uuid=Pl.next(),(e=t.filhos)===null||e===void 0||e.forEach(o=>qi(o))},Sr=(t,e)=>Te(t)||(o=>G(o)&&We(o).indexOfArtigo(o)===0)(e)||e.pai.indexOf(e)===0?t:Or(t),xi=t=>t!==void 0&&t!=="",Xp=(t,e=!1)=>{const o=[];return Fi(t).forEach(i=>{if(e){const r=Me(i);r&&(i.mensagens=r,o.push(X(i)))}else o.push(X(i))}),o};class ct{constructor(){this.eventos=[],this.eventos=dv()}add(e,o){const i=this.get(e);o.forEach(r=>{var n;return uv(i,r)||(n=i.elementos)===null||n===void 0?void 0:n.push(r)})}build(){return this.eventos.filter(e=>e.elementos&&e.elementos.length>0)}get(e){return this.eventos.filter(o=>o.stateType===e)[0]}setReferencia(e){this.get(j.ElementoIncluido).referencia=e}}const Au=(t,e)=>{const o=new ct;return o.setReferencia(X(Sr(t,e))),o.add(j.ElementoIncluido,Xp(e)),o.add(j.ElementoRenumerado,Kp(e)),o.add(j.ElementoValidado,Tn(e,!1)),o},Xn=t=>{const e=new ct,o=X(t);return o.mensagens=Me(t),e.add(j.ElementoModificado,[o]),e.add(j.ElementoValidado,Tn(t)),e},Yn=(t,e)=>{t.mensagens=Me(t);const o=X(t),i=e?[e]:[];return i.push(o),[{stateType:j.ElementoModificado,elementos:i},{stateType:j.ElementoValidado,elementos:Tn(t,!0)}]},cv=(t,e)=>{const o=Nt(e),i=Ui(e),r=Pe(e),n=e.pai;n.removeFilho(e),n.renumeraFilhos(),Ge(n)&&n.filhos.length===0&&(n.pai.alteracoes=void 0);const s=r&&(us(r)||kl(r))?r:we(n)?n.pai:n;return t.artigos.length===1&&i.push(t.artigos[0]),((c,d,p)=>{const a=new ct;return a.add(j.ElementoRemovido,c),a.add(j.ElementoRenumerado,d.map(l=>X(l))),a.add(j.ElementoValidado,p),a})(o,i,Tn(s,!1)).build()},Eu=t=>{var e,o,i,r,n,s,u,c,d;t.numero=(o=(e=t.situacao.dispositivoOriginal)===null||e===void 0?void 0:e.numero)!==null&&o!==void 0?o:"",t.rotulo=(r=(i=t.situacao.dispositivoOriginal)===null||i===void 0?void 0:i.rotulo)!==null&&r!==void 0?r:"",t.id=(s=(n=t.situacao.dispositivoOriginal)===null||n===void 0?void 0:n.lexmlId)!==null&&s!==void 0?s:"",t.texto=t.situacao.descricaoSituacao===$.DISPOSITIVO_MODIFICADO?(d=(c=(u=t.situacao.dispositivoOriginal)===null||u===void 0?void 0:u.conteudo)===null||c===void 0?void 0:c.texto)!==null&&d!==void 0?d:"":t.texto,t.situacao=new No},nt=(t,e)=>t==null?void 0:t.filter(o=>o.stateType===e)[0],uv=(t,e)=>(t==null?void 0:t.elementos.map(o=>{var i,r;return o.uuid===e.uuid&&o.rotulo===e.rotulo&&((i=o.conteudo)===null||i===void 0?void 0:i.texto)===((r=e.conteudo)===null||r===void 0?void 0:r.texto)}).filter(o=>o).length)>0,dv=()=>[{stateType:j.ElementoIncluido,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoRemovido,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoModificado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoRenumerado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoRestaurado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoSuprimido,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoValidado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoSelecionado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoMarcado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.SituacaoElementoModificada,referencia:void 0,pai:void 0,elementos:[]}],At=(t,e)=>{const o=t.past?t.past:[];return o.push(JSON.parse(JSON.stringify(e))),o},pv=(t,e)=>{const o=t.future?t.future:[];return o.push(JSON.parse(JSON.stringify(e))),o},to=(t,e)=>{var o;return{articulacao:t.articulacao,modo:t.modo,past:t.past,present:t.present,future:t.future,ui:{events:(o=t.ui)===null||o===void 0?void 0:o.events,message:e}}},Ou=(t,e)=>{const o=t.pai.indexOf(t);return e==="antes"?o:o===t.pai.filhos.length-1?void 0:o+1},hv=(t,e)=>{var o,i,r,n,s,u,c,d,p,a,l,h,f,m,g,v,y,b,x,w,_;let I=!1;const k=De(t.articulacao,e.atual,!0);if(k===void 0||k.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO&&Ot(k)||k.situacao.descricaoSituacao!==$.DISPOSITIVO_NOVO&&k.situacao.descricaoSituacao!==$.DISPOSITIVO_ADICIONADO&&Ot(k)&&!xi((i=(o=e.novo)===null||o===void 0?void 0:o.conteudo)===null||i===void 0?void 0:i.texto)&&(k.hasAlteracao()&&((r=k.alteracoes)===null||r===void 0?void 0:r.filhos)&&To(k.alteracoes.filhos[0])&&!ve(k.alteracoes.filhos[0])&&k.alteracoes.filhos[0].numero==="1"||(e.posicao===void 0||e.posicao==="depois")&&H(k)&&Xe(k)&&To(k.filhos[0])&&!ve(k.filhos[0])&&!ge(k.filhos[0])&&k.filhos[0].numero==="1"))return t;const C=k.pai.indexOf(k)===0?!e.posicao&&k.hasAlteracao()?k:Et(k)||St(k)?k.pai.pai:k.pai:k.pai.filhos[k.pai.indexOf(k)-1];((n=k.situacao)===null||n===void 0?void 0:n.descricaoSituacao)===$.DISPOSITIVO_ORIGINAL&&xi((u=(s=e.novo)===null||s===void 0?void 0:s.conteudo)===null||u===void 0?void 0:u.texto)&&(e.atual.conteudo.texto=k.texto,e.novo.conteudo.texto=void 0);const A=us(k)||kl(k),S=_u(k),E=[];if(An(E,k),Zp(k,e,t)&&(k.texto=H(k)?Ao((p=(d=e.atual.conteudo)===null||d===void 0?void 0:d.texto)!==null&&p!==void 0?p:""):(c=e.atual.conteudo)===null||c===void 0?void 0:c.texto,I=!0),((N,L)=>{var U,W,te;return!(!me(N)||!N.pai||N.situacao.descricaoSituacao===$.DISPOSITIVO_NOVO||Cn(N.pai,N))||So(N)||Ot(N)&&!nn(N,at)||((U=N.situacao)===null||U===void 0?void 0:U.descricaoSituacao)===$.DISPOSITIVO_ORIGINAL&&xi((te=(W=L.novo)===null||W===void 0?void 0:W.conteudo)===null||te===void 0?void 0:te.texto)})(k,e))return to(t,{tipo:ee.INFO,descricao:"N\xE3o \xE9 poss\xEDvel criar dispositivos nessa situa\xE7\xE3o"});let O;if(O=G(k)?e.posicao&&e.posicao==="antes"?he(k.pai,k.tipo,void 0,Ou(k,e.posicao)):e.posicao&&e.posicao==="depois"?he(k.pai,k.tipo,k):k.hasAlteracao()?rn(R.artigo.tipo,k.alteracoes,void 0,0):xu(k,e):e.posicao?he(k.pai,k.tipo,void 0,Ou(k,e.posicao)):xu(k,e),((a=k.situacao)===null||a===void 0?void 0:a.descricaoSituacao)===$.DISPOSITIVO_ORIGINAL||((l=k.situacao)===null||l===void 0?void 0:l.descricaoSituacao)===$.DISPOSITIVO_MODIFICADO||((h=k.situacao)===null||h===void 0?void 0:h.descricaoSituacao)===$.DISPOSITIVO_SUPRIMIDO||k.situacao instanceof Jo){O.situacao=new Jo,O.situacao.tipoEmenda=t.modo;const N=O.pai;Ge(N)&&N.filhos.length===1&&(N.situacao=new Jo)}xi((m=(f=e.novo)===null||f===void 0?void 0:f.conteudo)===null||m===void 0?void 0:m.texto)&&k.tipo===O.tipo&&Xe(k)&&Wp(k,O),H(O)&&(O.createRotulo(O),(g=O.mensagens)===null||g===void 0||g.push({tipo:ee.WARNING,descricao:"\xC9 necess\xE1rio informar o r\xF3tulo do dispositivo"})),O.pai.renumeraFilhos();const q=e.posicao&&e.posicao==="antes"?Au(C,O):Au(k,O),P=_u(k);if(xi((y=(v=e.novo)===null||v===void 0?void 0:v.conteudo)===null||y===void 0?void 0:y.texto)&&k.tipo===O.tipo&&E&&E.length>0&&q.add(j.ElementoRemovido,E),me(O)&&yt(O).length===2){const N=yt(O).filter(L=>L!==O);q.add(j.ElementoModificado,[X(N[0])])}return(I||xi((x=(b=e.novo)===null||b===void 0?void 0:b.conteudo)===null||x===void 0?void 0:x.texto))&&q.add(j.ElementoModificado,[S,P]),(I||xi((_=(w=e.novo)===null||w===void 0?void 0:w.conteudo)===null||_===void 0?void 0:_.texto)||ve(k))&&q.add(j.ElementoValidado,[P]),(us(k)||A)&&(q.add(j.ElementoValidado,[P]),q.add(j.ElementoRenumerado,[P])),e.posicao&&e.posicao==="antes"&&q.add(j.ElementoRenumerado,Ui(O).map(N=>X(N))),{articulacao:t.articulacao,modo:t.modo,past:At(t,q.build()),present:q.build(),future:[],ui:{events:q.build()}}},fv=(t,e)=>{var o,i,r,n,s;const u=De(t.articulacao,e.atual,!0);if(u===void 0)return t;if(St(u)){const b=u.pai.indexOf(u),x=rn(e.novo.tipo,u.pai,void 0,b);x.situacao=new Jo,x.addFilho(u),u.pai=x,u.createRotulo(u);const w=new ct;return w.setReferencia(X(b===0?x.pai.pai:x.pai.filhos[b-1])),w.add(j.ElementoIncluido,[X(x)]),w.add(j.ElementoRenumerado,[X(u)]),{articulacao:t.articulacao,modo:t.modo,past:At(t,w.build()),present:w.build(),future:[],ui:{events:w.build()}}}const c=Pe(u),d=u.pai.indexOf(u),p=u.pai.filhos.filter((b,x)=>x>=d&&b.tipo!==e.novo.tipo).map(b=>Nt(b)).flat();let a,l;var h,f;Zp(u,e)&&(u.texto=H(u)?Ao((r=(i=e.atual.conteudo)===null||i===void 0?void 0:i.texto)!==null&&r!==void 0?r:""):(o=e.atual.conteudo)===null||o===void 0?void 0:o.texto),h=u,f=e.novo.tipo,h.pai.tipo===f?(a=he(u.pai.pai,e.novo.tipo,void 0,u.pai.pai.indexOf(u.pai)+1),l=ko(a)):!H(u)&&((b,x)=>Ua(b,x)!==void 0)(u,e.novo.tipo)||((b,x)=>xn(b.pai.pai,b.pai,[]).filter(w=>w.tipo===x).length>0)(u,e.novo.tipo)?(l=(n=Ua(u,e.novo.tipo))!==null&&n!==void 0?n:((b,x)=>[...new Set(xn(b.pai,b,[]))].filter(w=>w.tipo===x).reverse()[0])(u,e.novo.tipo),a=he(l.pai,e.novo.tipo,l)):(a=he(u.pai,e.novo.tipo,void 0,u.pai.indexOf(u)),l=c!=null?c:u.pai),a.texto=(s=e.novo.conteudo)===null||s===void 0?void 0:s.texto;const m=u.pai.filhos.filter((b,x)=>x>=d&&b.tipo!==e.novo.tipo);((b,x)=>{x.map(w=>{const _=w.pai;qi(w);const I=G(w)?ko(w):void 0;return _==null||_.removeFilho(w),w.pai=b,b.addFilho(w,I),w})})(a,m),a.renumeraFilhos(),a.pai.renumeraFilhos();const g=[...Kp(a)].concat(a.filhos.filter((b,x)=>x>=d&&b.tipo!==u.tipo).map(b=>Nt(b)).flat()),v=ko(a);v&&yt(a).length===2&&g.unshift(X(v));const y=new ct;return y.setReferencia(X(Sr(l.pai&&Te(l)&&Ge(l)?l.pai:l,a))),y.add(j.ElementoIncluido,Nt(a)),y.add(j.ElementoRemovido,p),y.add(j.ElementoRenumerado,g),{articulacao:t.articulacao,modo:t.modo,past:At(t,y.build()),present:y.build(),future:[],ui:{events:y.build()}}};class sn{constructor(e){this.descricaoSituacao=$.DISPOSITIVO_MODIFICADO,this.dispositivoOriginal=e}getAcoesPermitidas(e,o){const i=o.filter(r=>!(r instanceof Ro)).filter(r=>!(r instanceof qs)).filter(r=>!(r instanceof Cs)).filter(r=>{var n;return!(!((n=r.descricao)===null||n===void 0)&&n.startsWith("Mover"))}).filter(r=>r.descricao!=="Adicionar"&&r.descricao!=="Atualizar dispositivo").filter(r=>!(r instanceof ne));return i.push(wl),i.filter(r=>r!==void 0).sort((r,n)=>r.descricao.localeCompare(n.descricao))}}const mv=(t,e)=>e.dispositivosAdicionados.map(o=>gv(t,o)),gv=(t,e)=>{const o={stateType:j.ElementoIncluido,referencia:void 0,pai:void 0,elementos:[]},i=Yp(t.articulacao,e);if(i){if(!o.referencia){const r=ko(i),n=we(i.pai)?i.pai.pai:i.pai;o.referencia=X(vv(r||n,i))}eo(i,r=>{var n;if(!we(r)&&!Ge(r)){const s=X(r);s.lexmlId=ri(r),(n=o.elementos)===null||n===void 0||n.push(s)}})}return o},vv=(t,e)=>{const o=Sr(t,e);return o.id!==e.id?o:e.pai.filhos[e.pai.filhos.length-2]},Yp=(t,e)=>{var o,i;let r;const n=e.tipo==="Caput";if(e.idIrmaoAnterior){const s=ds(t,Su(e.idIrmaoAnterior));s&&(r=s.tipo===e.tipo||s.tipo==="Omissis"?he(s.pai,e.tipo,s):he(s,e.tipo))}else if(e.idPai){const s=ds(t,Su(e.idPai));s&&(e.tipo!=="Inciso"&&e.tipo!=="Omissis"||s.tipo!=="Artigo"?n?(s.texto=(o=e.texto)!==null&&o!==void 0?o:"",r=s.caput):e.tipo==="Alteracao"?(Ll(s),r=s.alteracoes,s.alteracoes.id=e.id,s.alteracoes.base=e.urnNormaAlterada):(r=he(s,e.tipo,void 0,0),r.texto=(i=e.texto)!==null&&i!==void 0?i:""):r=he(s.caput,e.tipo,void 0,0))}else r=he(t,e.tipo,void 0,0);if(r){r.id=e.id;const s=new Jo;r.situacao=s,s.existeNaNormaAlterada=!!e.existeNaNormaAlterada,n||ve(r)||Te(r)||(e.abreAspas?(r.rotulo="\u201C"+e.rotulo,r.cabecaAlteracao=!0):(r.rotulo=e.rotulo,r.createNumeroFromRotulo(e.rotulo))),Te(r)||(e.fechaAspas?(r.notaAlteracao=e.notaAlteracao,r.texto=e.texto+`\u201D ${e.notaAlteracao}`):r.texto=e.texto)}return r&&e.filhos&&e.filhos.forEach((s,u)=>{u===0?s.idPai=e.id:s.idIrmaoAnterior=e.filhos[u-1].id,Yp(t,s)}),r},Su=t=>t.replace(/(_cpt)$/,""),bv=(t,e)=>{var o;const i=De(t.articulacao,e.atual,!0),r=e.atual.norma,n=(i==null?void 0:i.alteracoes.base)||"",s=new RegExp(`<a.+href=.${n}.*?>.*?</a>`,"ig"),u=fs(r);if(i===void 0||!i.alteracoes||n===r&&i.texto.match(s))return t.ui=[],t;const c=`<a href="${d=r}"> ${fs(d)} </a>`;var d;const p=i.texto;if(i.texto.match(s))i.texto=p.replace(s,c);else if(i.texto.includes(u))i.texto=p.replace(u,c);else{const m=parseInt(localStorage.indexCursor);i.texto=[p.slice(0,m),c,p.slice(m)].join(" "),localStorage.removeItem("indexCursor")}const a=X(i);i.alteracoes.base=r,((o=i.situacao)===null||o===void 0?void 0:o.descricaoSituacao)===$.DISPOSITIVO_ORIGINAL&&(i.situacao=new sn(a));const l=new ct,h=X(i,!0);h.mensagens=Me(i),l.add(j.ElementoValidado,[h]),l.add(j.ElementoModificado,[h]),l.add(j.SituacaoElementoModificada,[h]);const f=Xn(i);return{articulacao:t.articulacao,modo:t.modo,past:At(t,Yn(i,a)),present:f.build(),future:t.future,ui:{events:l.build()}}},ku=(t,e)=>{const o=De(t.articulacao,e.atual,!0);if(o===void 0)return t.ui=[],t;if(!((f,m)=>{const g=wu(f,m.subType);return f.getAcoesPossiveis(f).filter(v=>v instanceof ne&&v.nomeAcao&&v.nomeAcao===g).length>0})(o,e))return t;const i=Pe(o);e.subType=wu(o,e.subType);const r=[...Nt(o)],n=Ui(o),s=((f,m)=>{var g,v;const y=f.pai;let b,x;switch(m.subType){case"transformarAlineaEmItem":case"transformarIncisoCaputEmAlinea":case"transformarIncisoParagrafoEmAlinea":case"transformarParagrafoEmIncisoParagrafo":case"transformarArtigoEmParagrafo":x=Pe(f),b=he(x,m.novo.tipo);break;case"transformarDispositivoGenericoEmInciso":case"transformarDispositivoGenericoEmAlinea":case"transformarDispositivoGenericoEmItem":case"transformarOmissisEmAlinea":case"transformarOmissisEmArtigo":case"transformarOmissisEmIncisoCaput":case"transformarOmissisEmIncisoParagrafo":case"transformarOmissisEmItem":case"transformarOmissisEmParagrafo":case"transformarAlineaEmOmissisAlinea":case"transformarItemEmOmissisItem":case"transformarParagrafoEmOmissisParagrafo":case"transformarIncisoCaputEmOmissisIncisoCaput":case"transformarIncisoParagrafoEmOmissisIncisoParagrafo":x=y,b=he(y,m.novo.tipo,void 0,y==null?void 0:y.indexOf(f));break;case"transformarParagrafoEmInciso":if(ge(f)&&(Jt(f)||ke(f))){x=y,b=he(x.caput,m.novo.tipo);break}x=Pe(f),b=he(x,m.novo.tipo);break;case"transformarParagrafoEmIncisoCaput":x=y,b=he(x.caput,m.novo.tipo);break;default:x=f.pai.pai,b=he(x,m.novo.tipo,f.pai)}return b.texto=(v=(g=m.atual.conteudo)===null||g===void 0?void 0:g.texto)!==null&&v!==void 0?v:f.texto,b.createRotulo(b),b.situacao=f.situacao,b.mensagens=Me(b),y==null||y.removeFilho(f),y==null||y.renumeraFilhos(),x==null||x.renumeraFilhos(),Dl(f,b),b})(o,e),u=Ui(s).concat(n),c=Xp(s,!0),d=Et(s)?s.pai.pai:s.pai;i&&kl(i)&&(i.pai.renumeraFilhos(),u.unshift(i));const p=Pe(s);if(p){const f=Me(p);p.mensagens!==f&&c.unshift(X(p))}const a=c.filter(f=>f.uuid===d.uuid).length>0?o.pai:d;a.mensagens=Me(a),c.unshift(X(a));const l=p!=null?p:s.pai,h=((f,m,g,v,y)=>{const b=new ct;return b.setReferencia(X(Sr(f,m))),b.add(j.ElementoIncluido,Nt(m)),b.add(j.ElementoRemovido,g),b.add(j.ElementoRenumerado,v),b.add(j.ElementoValidado,y.filter(x=>x.mensagens.length>0)),b})(we(l)?l.pai:l,s,r,u.map(f=>(f.mensagens=Me(f),X(f))),c);return{articulacao:t.articulacao,modo:t.modo,past:At(t,h.build()),present:h.build(),future:[],ui:{events:h.build()}}},ma=(t,e)=>{if(Ha(e)){const o=Ge(t)?t.pai:Zn(t,e.hierarquia.pai.uuidAlteracao);if(o)return o.alteracoes||(o.alteracoes=Rl(),o.alteracoes.pai=o),e.hierarquia.pai.tipo===R.articulacao.tipo?o.alteracoes:Zn(o.alteracoes,e.hierarquia.pai.uuid)}return Zn(t,e.hierarquia.pai.uuid)},Iu=(t,e)=>{var o,i,r;const n=he(G(e)&&(t.tipo===R.inciso.name||(s=>{var u,c;const d=(c=(u=s.lexmlId)===null||u===void 0?void 0:u.split("_"))!==null&&c!==void 0?c:[];return s.tipo===R.omissis.tipo&&d.length>1&&d[d.length-2]==="cpt"})(t))?e.caput:e,t.tipo,void 0,t.hierarquia.posicao);return n.uuid=t.uuid,n.id=t.lexmlId,n.texto=(i=(o=t==null?void 0:t.conteudo)===null||o===void 0?void 0:o.texto)!==null&&i!==void 0?i:"",n.numero=(r=t==null?void 0:t.hierarquia)===null||r===void 0?void 0:r.numero,n.rotulo=t==null?void 0:t.rotulo,n.mensagens=t==null?void 0:t.mensagens,n.situacao=(s=>{switch(s){case $.DISPOSITIVO_ADICIONADO:return new Jo;case $.DISPOSITIVO_NOVO:return new Nl;default:return new No}})(t.descricaoSituacao),n},qu=(t,e,o)=>{if(e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0){const i=e.elementos[0],r=ma(t.articulacao,i),n=((s,u)=>{const c=u.shift(),d=ma(s,c),p=Iu(c,d),a=[p];return u==null||u.forEach(l=>{var h,f;const m=((h=l.hierarquia)===null||h===void 0?void 0:h.pai)===((f=c==null?void 0:c.hierarquia)===null||f===void 0?void 0:f.pai)?p.pai:ma(s,l),g=Iu(l,m);a.push(g)}),a})(t.articulacao,e.elementos);if(r==null||r.renumeraFilhos(),o){const s=i.hierarquia.posicao===0?Te(r)&&Ge(r)?r.pai:r:Or(Pe(n[0]));if(s){const u=De(t.articulacao,s);u?o.referencia=X(u):to(t,{tipo:ee.ERROR,descricao:"Erro inesperado"})}}return e.stateType===j.ElementoIncluido&&(o.referencia=e.referencia),n.map(s=>X(s))}return[]},Cu=(t,e)=>e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0?(e.elementos.forEach(o=>{const i=De(t.articulacao,o,!0);if(i){const r=i.pai;r.removeFilho(i),r.renumeraFilhos()}}),e.elementos):[],Pu=(t,e,o,i)=>e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0?(e.elementos.forEach(r=>{var n,s,u,c,d,p,a;const l=De(t.articulacao,r,!0);i instanceof No?(l.numero=(s=(n=l.situacao.dispositivoOriginal)===null||n===void 0?void 0:n.numero)!==null&&s!==void 0?s:"",l.rotulo=(c=(u=l.situacao.dispositivoOriginal)===null||u===void 0?void 0:u.rotulo)!==null&&c!==void 0?c:"",l.texto=(a=(p=(d=l.situacao.dispositivoOriginal)===null||d===void 0?void 0:d.conteudo)===null||p===void 0?void 0:p.texto)!==null&&a!==void 0?a:"",l.situacao=new No):l.situacao=new i(X(l)),o.elementos.push(X(l))}),o.elementos):[],Tu=(t,e,o=!1)=>{if(e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0){const i=[];let r=0;return e.elementos.forEach(n=>{var s,u,c,d;const p=De(t.articulacao,n,!0);p&&(o&&r===p.uuid||r!==p.uuid)&&(p.situacao.descricaoSituacao===$.DISPOSITIVO_MODIFICADO?(p.texto=(u=(s=p.situacao.dispositivoOriginal.conteudo)===null||s===void 0?void 0:s.texto)!==null&&u!==void 0?u:"",p.situacao=new No):(n.descricaoSituacao===$.DISPOSITIVO_MODIFICADO&&(p.situacao=new sn(X(p))),p.texto=(d=(c=n.conteudo)===null||c===void 0?void 0:c.texto)!==null&&d!==void 0?d:""),p.alteracoes&&(p.alteracoes.base=n.norma),p.mensagens=Me(p),i.push(X(p)),r=p.uuid)}),i}return[]},Nu=(t,e)=>{if(e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0){const o=[];return e.elementos.forEach(i=>{const r=De(t.articulacao,i,!0);r&&o.push(X(r))}),o}return[]},Du=(t,e)=>{const o=nt(e,j.ElementoValidado);if(o!==void 0&&o.elementos!==void 0&&o.elementos[0]!==void 0){const i=[];return o.elementos.forEach(r=>{const n=De(t.articulacao,r,!0);n&&(n.mensagens=Me(n),n.mensagens.length>0&&i.push(X(n)))}),i}return[]},Ru=(t,e)=>{const o=De(t.articulacao,e.atual,!0);if(o===void 0)return t.ui=[],t;if(!nn(o,qs))return to(t,{tipo:ee.ERROR,descricao:"N\xE3o \xE9 poss\xEDvel excluir um dispositivo original mas apenas suprimi-lo."});if(!H(o)&&(us(o)||t.articulacao.filhos.length===1&&t.articulacao.filhos[0]===o&&!Xe(o)))return to(t,{tipo:ee.ERROR,descricao:"N\xE3o \xE9 poss\xEDvel excluir o \xFAnico dispositivo dispon\xEDvel."});const i=me(o)?((r,n)=>{let s=n.pai.indexOf(n);const u=n.pai.filhos.filter((y,b)=>b<s&&me(y)),c=n.pai,d=[...Nt(n)],p=ko(n),a=(u==null?void 0:u.length)>0&&!H(n)?u.reverse()[0]:n.pai,l=(u==null?void 0:u.length)>0&&!H(n)?u.reverse()[0]:s>0?Or(a.filhos[s-1]):a,h=Te(l)?a:Or(l),f=n.filhos.map(y=>(y.pai=a,c.removeFilho(y),qi(y),(u==null?void 0:u.length)>0?a.addFilho(y):a.addFilhoOnPosition(y,s++),y));n.pai.removeFilho(n),a==null||a.renumeraFilhos(),c.renumeraFilhos();const m=f.map(y=>Nt(y)).flat(),g=a.filhos.filter((y,b)=>b>=s&&(me(y)||St(y))).map(y=>X(y)).flat();p&&yt(p).length===1&&g.unshift(X(p));const v=new ct;return v.setReferencia(Te(h)&&Ge(h)?X(h.pai):X(h)),v.add(j.ElementoIncluido,m),v.add(j.ElementoRemovido,d),v.add(j.ElementoRenumerado,g),v.build()})(t.articulacao,o):cv(t.articulacao,o);return{articulacao:t.articulacao,modo:t.modo,past:At(t,i),present:i,future:[],ui:{events:i}}},yv=t=>({stateType:j.ElementoMarcado,elementos:[X(t)],moverParaFimLinha:!0}),xv=(t,e)=>(!t.modo.startsWith("emenda")||e.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO)&&!Xe(e),Lu=(t,e)=>e?t.tipo!=="Alinea"?e.toUpperCase():e.split("-").map((o,i)=>i>0?o.toUpperCase():o).join("-"):"",wv=(t,e)=>{var o,i;const r=De(t.articulacao,e.atual,!0);if(r===void 0)return t.ui=[],t;if(!(Fi(r).filter(u=>_l(u)).length>0)&&((o=r.situacao)===null||o===void 0?void 0:o.descricaoSituacao)!==$.DISPOSITIVO_MODIFICADO&&((i=r.situacao)===null||i===void 0?void 0:i.descricaoSituacao)!==$.DISPOSITIVO_SUPRIMIDO)return t;const s=((u,c)=>{const d=[];c.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO?Fi(c).filter(l=>l.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO).forEach(l=>{Eu(l),d.push(X(l))}):(Eu(c),d.push(X(c)));const p=new ct;return p.add(j.ElementoRestaurado,d),p.build()})(t.articulacao,r);return{articulacao:t.articulacao,modo:t.modo,past:At(t,s),present:s,future:[],ui:{events:s}}},Ka=(t,e)=>{t.length!==0&&(t==null||t.forEach(o=>{e.add(o.situacao.descricaoSituacao),Ka(o.filhos,e)}))},_v=(t,e)=>{var o;const i=De(t.articulacao,e.atual,!0);if(i===void 0||((o=i.situacao)===null||o===void 0?void 0:o.descricaoSituacao)!==$.DISPOSITIVO_ORIGINAL)return t.ui=[],t;if(!(n=>{var s;const u=new Set;return u.add(n.situacao.descricaoSituacao),Ka(n.filhos,u),n.alteracoes&&Ka((s=n.alteracoes)===null||s===void 0?void 0:s.filhos,u),u.size===1&&[...u][0]===$.DISPOSITIVO_ORIGINAL})(i))return to(t,{tipo:ee.ERROR,descricao:"S\xF3 \xE9 poss\xEDvel suprimir dispositivos que n\xE3o tenham sofrido modifica\xE7\xE3o."});const r=((n,s)=>{Fi(s).forEach(c=>c.situacao=new _n(X(c))),s.alteracoes&&s.alteracoes.filhos.length>0&&s.alteracoes.filhos.forEach(c=>Fi(c).forEach(d=>d.situacao=new _n(X(d))));const u=new ct;return u.add(j.ElementoSuprimido,Nt(s)),u.build()})(t.articulacao,i);return{articulacao:t.articulacao,modo:t.modo,past:At(t,r),present:r,future:[],ui:{events:r}}},Av=function(t){for(var e=Object.keys(t),o={},i=0;i<e.length;i++){var r=e[i];typeof t[r]=="function"&&(o[r]=t[r])}var n,s=Object.keys(o);try{(function(u){Object.keys(u).forEach(function(c){var d=u[c];if(d(void 0,{type:ls.INIT})===void 0)throw new Error(_t(12));if(d(void 0,{type:ls.PROBE_UNKNOWN_ACTION()})===void 0)throw new Error(_t(13))})})(o)}catch(u){n=u}return function(u,c){if(u===void 0&&(u={}),n)throw n;for(var d=!1,p={},a=0;a<s.length;a++){var l=s[a],h=o[l],f=u[l],m=h(f,c);if(m===void 0)throw c&&c.type,new Error(_t(14));p[l]=m,d=d||m!==f}return(d=d||s.length!==Object.keys(u).length)?p:u}}({appReducer:(t={},e)=>(e.type,t),elementoReducer:(t={},e)=>{switch(e.type){case"APLICAR_ALTERACOES_EMENDA":return((o,i)=>{const r={articulacao:o.articulacao,modo:o.modo,past:[],present:[],future:[],ui:{events:[]}},n=new ct;return i.alteracoesEmenda.dispositivosSuprimidos&&(n.add(j.ElementoSuprimido,[]),i.alteracoesEmenda.dispositivosSuprimidos.forEach(s=>{const u=ds(o.articulacao,s.id);u&&eo(u,c=>{var d;c.situacao=new _n(X(c)),(d=n.get(j.ElementoSuprimido).elementos)===null||d===void 0||d.push(X(c))})})),i.alteracoesEmenda.dispositivosModificados&&(n.add(j.ElementoModificado,[]),i.alteracoesEmenda.dispositivosModificados.forEach(s=>{var u;const c=ds(o.articulacao,s.id);c&&(c.situacao=new sn(X(c)),c.texto=s.texto,(u=n.get(j.ElementoModificado).elementos)===null||u===void 0||u.push(X(c)))})),i.alteracoesEmenda.dispositivosAdicionados&&n.eventos.push(...mv(o,i.alteracoesEmenda)),r.ui.events=n.build(),r})(t,e);case"ATUALIZAR_ELEMENTO":return((o,i)=>{var r,n,s,u;const c=De(o.articulacao,i.atual,!0);if(c===void 0||c.texto===i.atual.conteudo.texto)return o.ui=[],o;const d=X(c);c.texto=H(c)?Ao((s=(n=i.atual.conteudo)===null||n===void 0?void 0:n.texto)!==null&&s!==void 0?s:""):(r=i.atual.conteudo)===null||r===void 0?void 0:r.texto,((u=c.situacao)===null||u===void 0?void 0:u.descricaoSituacao)===$.DISPOSITIVO_ORIGINAL&&(c.situacao=new sn(d));const p=Xn(c);return{articulacao:o.articulacao,modo:o.modo,past:At(o,Yn(c,d)),present:p.build(),future:o.future,ui:{events:p.build()}}})(t,e);case"ATUALIZAR_REFERENCIA_ELEMENTO":return bv(t,e);case"ATUALIZAR_TEXTO_ELEMENTO":return((o,i)=>{var r,n,s,u;const c=De(o.articulacao,i.atual,!0);if(c===void 0||c.texto===i.atual.conteudo.texto)return o.ui=[],o;const d=X(c);c.texto=H(c)?Ao((s=(n=i.atual.conteudo)===null||n===void 0?void 0:n.texto)!==null&&s!==void 0?s:""):(r=i.atual.conteudo)===null||r===void 0?void 0:r.texto,((u=c.situacao)===null||u===void 0?void 0:u.descricaoSituacao)===$.DISPOSITIVO_ORIGINAL&&(c.situacao=new sn(d));const p=new ct,a=X(c,!0);a.mensagens=Me(c),((h,f)=>{var m,g;return((g=(m=f.atual)===null||m===void 0?void 0:m.conteudo)===null||g===void 0?void 0:g.texto)!==h})(c.texto,i)&&p.add(j.ElementoModificado,[a]),p.add(j.SituacaoElementoModificada,[a]),p.add(j.ElementoValidado,Tn(c));const l=Xn(c);return{articulacao:o.articulacao,modo:o.modo,past:At(o,Yn(c,d)),present:l.build(),future:[],ui:{events:p.build()}}})(t,e);case"AUTO_FIX":return((o,i)=>{var r;const n=De(o.articulacao,i.atual,!0);if(n===void 0||!(u=>{var c,d;return((d=(c=u.mensagens)===null||c===void 0?void 0:c.filter(p=>p.fix))!==null&&d!==void 0?d:[]).length>0})(n))return o.ui=[],o;const s=new ct;if(((r=i.mensagem)===null||r===void 0?void 0:r.descricao)===Di.OMISSIS_ANTES){const u=Pe(n),c=he(n.pai,R.omissis.tipo,u,u?void 0:0);c.mensagens=Me(c);const d=X(c,!0);n.mensagens=Me(n);const p=X(n);s.add(j.ElementoIncluido,[d]),s.add(j.ElementoValidado,[p]),s.setReferencia(X(u!=null?u:n.pai))}return{articulacao:o.articulacao,modo:o.modo,past:At(o,s.build()),present:s.build(),future:[],ui:{events:s.build()}}})(t,e);case"ADICIONAR_ELEMENTO":return hv(t,e);case"AGRUPAR_ELEMENTO":return fv(t,e);case"TRANSFORMAR_TIPO_ELEMENTO":return ku(t,e);case"ELEMENTO_SELECIONADO":return((o,i)=>{const r=De(o.articulacao,i.atual,!0);if(r===void 0)return o.ui.events=[],o;r.mensagens=Me(r);const n=X(r,!0),s=[{stateType:j.ElementoSelecionado,elementos:[n]}];return{articulacao:o.articulacao,modo:o.modo,past:o.past,present:o.present,future:o.future,ui:{events:s}}})(t,e);case"INFORMAR_NORMA":return((o,i)=>{const r=De(o.articulacao,i.atual,!0);if(r===void 0)return o.ui.events=[],o;r.mensagens=Me(r);const n=X(r,!0),s=[{stateType:j.InformarNorma,elementos:[n]}];return{articulacao:o.articulacao,modo:o.modo,past:o.past,present:o.present,future:[],ui:{events:s}}})(t,e);case"Mover para baixo":return((o,i)=>{const r=De(o.articulacao,i.atual,!0);if(r===void 0)return o.ui=[],o;if(!nn(r,rp))return to(o,{tipo:ee.ERROR,descricao:"Opera\xE7\xE3o n\xE3o permitida."});const n=Vi(r);if(n===void 0)return o;const s=[...Nt(r),...Nt(n)],u=Ui(r),c=r.pai,d=c.indexOf(r);qi(r),qi(n),c.removeFilho(r),c.removeFilho(n),c.addFilhoOnPosition(n,d),c.addFilhoOnPosition(r,d+1),r.pai=c,n.pai=c,c.renumeraFilhos();const p=d===0?Et(n)||H(r)&&r.tipo==="Artigo"?c.pai:c:Pe(n),a=new ct;return a.setReferencia(X(Sr(p,n))),a.add(j.ElementoIncluido,Qo(n,[]).concat(Qo(r,[])).map(l=>(l.mensagens=Me(l),X(l)))),a.add(j.ElementoRemovido,s),a.add(j.ElementoRenumerado,u.map(l=>X(l))),a.add(j.ElementoMarcado,[X(r),i.atual]),a.add(j.ElementoSelecionado,[X(r)]),{articulacao:o.articulacao,modo:o.modo,past:At(o,a.build()),present:a.build(),future:[],ui:{events:a.build()}}})(t,e);case"Mover para cima":return((o,i)=>{var r;const n=De(o.articulacao,i.atual,!0);if(n===void 0)return o.ui=[],o;if(!nn(n,np))return to(o,{tipo:ee.ERROR,descricao:"Opera\xE7\xE3o n\xE3o permitida."});const s=Bi(n);if(s===void 0)return o;const u=[...Nt(s),...Nt(n)],c=Ui(n),d=n.pai,p=d.indexOf(s);qi(s),qi(n),d.removeFilho(s),d.removeFilho(n),d.addFilhoOnPosition(n,p),d.addFilhoOnPosition(s,p+1),n.pai=d,s.pai=d,d.renumeraFilhos();const a=p===0?((r=n.pai)===null||r===void 0?void 0:r.tipo)===R.caput.tipo||H(n)&&n.tipo==="Artigo"?d.pai:d:Pe(n),l=new ct;return l.setReferencia(X(Sr(a,n))),l.add(j.ElementoIncluido,Qo(n,[]).concat(Qo(s,[])).map(h=>(h.mensagens=Me(h),X(h)))),l.add(j.ElementoRemovido,u),l.add(j.ElementoRenumerado,c.map(h=>X(h))),l.add(j.ElementoMarcado,[X(n),i.atual]),l.add(j.ElementoSelecionado,[X(n)]),{articulacao:o.articulacao,modo:o.modo,past:At(o,l.build()),present:l.build(),future:[],ui:{events:l.build()}}})(t,e);case"RENUMERAR_ELEMENTO":return((o,i)=>{var r,n,s,u;const c=De(o.articulacao,i.atual,!0);if(c===void 0)return o.ui=[],o;if(!nn(c,Cs))return to(o,{tipo:ee.INFO,descricao:"Nessa situa\xE7\xE3o, n\xE3o \xE9 poss\xEDvel renumerar o dispositivo"});if(H(c)&&((n=Lu(c,(r=i.novo)===null||r===void 0?void 0:r.numero))===null||n===void 0?void 0:n.startsWith("0")))return to(o,{tipo:ee.INFO,descricao:"N\xE3o pode haver um dispositivo com esse r\xF3tulo em altera\xE7\xE3o de norma"});const d=At(o,Yn(c));try{const a=Lu(c,(s=i.novo)===null||s===void 0?void 0:s.numero);c.createNumeroFromRotulo(a)}catch(a){return to(o,{tipo:ee.ERROR,descricao:"O r\xF3tulo informado \xE9 inv\xE1lido",detalhe:a})}c.createRotulo(c),((u=c.situacao)===null||u===void 0?void 0:u.descricaoSituacao)===$.DISPOSITIVO_ADICIONADO&&(c.situacao.existeNaNormaAlterada=i.novo.existenteNaNorma);const p=Xn(c);return{articulacao:o.articulacao,modo:o.modo,past:d,present:p.build(),future:o.future,ui:{events:p.build()}}})(t,e);case"RESTAURAR_ELEMENTO":return wv(t,e);case"SUPRIMIR_ELEMENTO":return _v(t,e);case"ABRIR_ARTICULACAO":return jg(0,e);case"REDO":return(o=>{var i;if(o.future===void 0||o.future.length===0)return o.ui=[],o;const r=o.future.pop(),n={articulacao:o.articulacao,modo:o.modo,past:At(o,r),present:[],future:o.future,ui:{events:[]}},s=new ct;s.add(j.ElementoRemovido,Cu(o,nt(r,j.ElementoRemovido))),s.add(j.ElementoIncluido,qu(o,nt(r,j.ElementoIncluido),nt(s.eventos,j.ElementoIncluido))),s.add(j.ElementoModificado,Tu(o,nt(r,j.ElementoModificado),!0)),s.add(j.ElementoSuprimido,Pu(o,nt(r,j.ElementoSuprimido),nt(s.eventos,j.ElementoSuprimido),_n)),s.add(j.ElementoRenumerado,Nu(o,nt(r,j.ElementoRenumerado))),s.add(j.ElementoValidado,Du(o,r));const u=(i=nt(r,j.ElementoMarcado))===null||i===void 0?void 0:i.elementos;return u&&(s.add(j.ElementoMarcado,u),s.add(j.ElementoSelecionado,[u[0]])),n.ui.events=s.build(),n.present=s.build(),n})(t);case"REMOVER_ELEMENTO":return Ru(t,e);case"REMOVER_ELEMENTO_SEM_TEXTO":return((o,i)=>{var r;const n=De(o.articulacao,i.atual,!0);if(n===void 0||!xv(o,n))return o.ui=[],o;const s=Pe(n),u=Ru(o,i);return i.key==="Backspace"&&s&&((r=u.ui)===null||r===void 0||r.events.push(yv(s))),u})(t,e);case"SHIFT_TAB":case"TAB":return((o,i)=>{const r=De(o.articulacao,i.atual,!0);if(r===void 0)return o.ui=[],o;const n=i.type==="TAB"?r.getAcaoPossivelTab(r):r.getAcaoPossivelShiftTab(r);if(!n)return o.ui=[],o;const s={type:"TRANSFORMAR_TIPO_ELEMENTO",subType:n.nomeAcao,atual:i.atual,novo:{tipo:n.tipo}};return ku(o,s)})(t,e);case"UNDO":return(o=>{var i;if(o.past===void 0||o.past.length===0)return o.ui=[],o;const r=o.past.pop(),n={articulacao:o.articulacao,modo:o.modo,past:o.past,present:[],future:pv(o,r),ui:{events:[]}},s=new ct;s.add(j.ElementoRemovido,Cu(o,nt(r,j.ElementoIncluido))),s.add(j.ElementoIncluido,qu(o,nt(r,j.ElementoRemovido),nt(s.eventos,j.ElementoIncluido))),s.add(j.ElementoRestaurado,Pu(o,nt(r,j.ElementoSuprimido),nt(s.eventos,j.ElementoRestaurado),No)),s.add(j.ElementoModificado,Tu(o,nt(r,j.ElementoModificado))),s.add(j.ElementoRenumerado,Nu(o,nt(r,j.ElementoRenumerado))),s.add(j.ElementoValidado,Du(o,r));const u=(i=nt(r,j.ElementoMarcado))===null||i===void 0?void 0:i.elementos;return u&&(s.add(j.ElementoMarcado,[u[1],u[0]]),s.add(j.ElementoSelecionado,[u[1]])),n.ui.events=s.build(),n.present=s.build(),n})(t);case"VALIDAR_ELEMENTO":return((o,i)=>{const r=De(o.articulacao,i.atual,!0);if(r===void 0)return o.ui=[],o;r.mensagens=Me(r);const n=X(r,!0),s=[{stateType:j.ElementoValidado,elementos:[n]}];return{articulacao:o.articulacao,modo:o.modo,past:o.past,present:o.present,future:o.future,ui:{events:s}}})(t,e);case"VALIDAR_ARTICULACAO":return(o=>{const i=[];Qo(o.articulacao,[]).forEach(n=>{const s=Me(n);(s==null?void 0:s.length)>0&&(n.mensagens=s,i.push(X(n)))});const r=[{stateType:j.ElementoValidado,elementos:i}];return{articulacao:o.articulacao,modo:o.modo,past:o.past,present:o.present,future:o.future,ui:{events:r}}})(t);default:return t}},alertaReducer:(t={alertas:[]},e)=>{var o;switch(e.type){case"ADICIONAR_ALERTA":return t.alertas.filter(({id:i})=>i===e.alerta.id).length>0?{alertas:[...t.alertas]}:{alertas:[...t.alertas,e.alerta]};case"REMOVER_ALERTA":return{alertas:(o=t.alertas)===null||o===void 0?void 0:o.filter(({id:i})=>i!==e.id)};case"LIMPAR_ALERTAS":return{alertas:[]};default:return t}}}),le=function t(e,o,i){var r;if(typeof o=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(_t(0));if(typeof o=="function"&&i===void 0&&(i=o,o=void 0),i!==void 0){if(typeof i!="function")throw new Error(_t(1));return i(t)(e,o)}if(typeof e!="function")throw new Error(_t(2));var n=e,s=o,u=[],c=u,d=!1;function p(){c===u&&(c=u.slice())}function a(){if(d)throw new Error(_t(3));return s}function l(g){if(typeof g!="function")throw new Error(_t(4));if(d)throw new Error(_t(5));var v=!0;return p(),c.push(g),function(){if(v){if(d)throw new Error(_t(6));v=!1,p();var y=c.indexOf(g);c.splice(y,1),u=null}}}function h(g){if(!ag(g))throw new Error(_t(7));if(g.type===void 0)throw new Error(_t(8));if(d)throw new Error(_t(9));try{d=!0,s=n(s,g)}finally{d=!1}for(var v=u=c,y=0;y<v.length;y++)(0,v[y])();return g}function f(g){if(typeof g!="function")throw new Error(_t(10));n=g,h({type:ls.REPLACE})}function m(){var g,v=l;return(g={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(_t(11));function b(){y.next&&y.next(a())}return b(),{unsubscribe:v(b)}}})[lu]=function(){return this},g}return h({type:ls.INIT}),(r={dispatch:h,subscribe:l,getState:a,replaceReducer:f})[lu]=m,r}(Av,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());let ga=class extends qn(le)(vt){constructor(){super(),this.elementos=[],this.tabIndex=-1}createRenderRoot(){return this}render(){return Oe`
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
    `}};ue([et({type:Array})],ga.prototype,"elementos",void 0),ga=ue([Ht("lexml-eta-articulacao")],ga);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ev=2;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ga extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}{constructor(e){if(super(e),this.it=Ye,e.type!==Ev)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Ye||e==null)return this.ft=void 0,this.it=e;if(e===$i)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const o=[e];return o.raw=o,this.ft={_$litType$:this.constructor.resultType,strings:o,values:[]}}}Ga.directiveName="unsafeHTML",Ga.resultType=1;const vs=(t=>(...e)=>({_$litDirective$:t,values:e}))(Ga);let va=class extends vt{update(t){super.update(t)}buildTemplateComando(t){const e=t==null?void 0:t.reduce((o,i)=>o+`<p> ${i.cabecalho} </p>`,"");return Oe`${e}`}buildTemplateCitacao(t){return t.replaceAll("<Rotulo>","<b>").replaceAll("</Rotulo>","</b> ").replaceAll("<Alteracao>",'<div class="alteracao">').replaceAll("</Alteracao>","</div> ").replaceAll("<Omissis/>"," ..........................................................")}render(){var t,e;const o=(t=this.emenda)===null||t===void 0?void 0:t.cabecalhoComum,i=(e=this.emenda)===null||e===void 0?void 0:e.comandos;return Oe`
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

        ${o?vs(`<p class="lexml-emenda-cabecalhoComando">${o}</p>`):""}
        ${i==null?void 0:i.map(r=>vs('<div class="lexml-emenda-cabecalhoComando">'+(r.rotulo?`<strong>${r.rotulo}</strong> `:"")+r.cabecalho+'</div><div class="lexml-emenda-citacaoComando">'+this.buildTemplateCitacao(r.citacao)+"</div>"+(r.complemento?'<div class="lexml-emenda-complementoComando">'+r.complemento+"</div>":"")))}
      </div>
    `}};ue([et({type:Object})],va.prototype,"emenda",void 0),va=ue([Ht("lexml-emenda-comando")],va);const Ov=Oe`
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
      border-bottom: 1px dashed;
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
`,Sv=Oe`
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
`;class Mu extends class{}{constructor(){super(...arguments),this.nivel=0,this.rotulo="",this.agrupador=!1,this.editavel=!0,this.sendoEditado=!1,this.index=0}}const Zi=(t,e)=>new ne(R[e.toLowerCase()],"Transformar "+t.tipo+"em "+R[e.toLowerCase()].name,"transformar"+t.tipo+"Em"+R[e.toLowerCase()].name).execute(t),kv=Quill.import("blots/block");class $o extends kv{get linha(){return this.parent.parent.parent}get tamanho(){return this.length()-1}get tagName(){return this.domNode.tagName}get html(){return this.domNode.innerHTML!=="<br>"?this.domNode.innerHTML.replace("&nbsp;",""):""}set html(e){this.domNode.innerHTML=e}constructor(e){super(e)}}var On;(function(t){t[t.Esquerda=0]="Esquerda",t[t.Direita=1]="Direita"})(On||(On={}));class Io extends $o{constructor(){super(Io.create())}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.setAttribute("class",Io.className),e}}Io.blotName="blotMenu",Io.tagName="DIV",Io.className="lx-eta-dropdown";class ei extends $o{constructor(){super(ei.create())}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.setAttribute("class",ei.className),e.innerHTML="&vellip;",e}}ei.blotName="blotMenuBotao",ei.tagName="DIV",ei.className="lx-eta-dropbtn";class ti extends $o{constructor(e){super(ti.create(e))}static create(e){const o=super.create(),i=e===On.Esquerda?"":" lx-eta-dropdown-content-right";return o.setAttribute("contenteditable","false"),o.setAttribute("class",ti.className+i),o}}ti.blotName="blotMenuConteudo",ti.tagName="DIV",ti.className="lx-eta-dropdown-content";class oi extends $o{constructor(e,o){super(oi.create(e,o))}static create(e,o){var i;const r=super.create();return r.setAttribute("contenteditable","false"),r.setAttribute("class",oi.className),r.innerHTML=(i=e.descricao)!==null&&i!==void 0?i:"",r.addEventListener("mousedown",()=>{var n;if(e.descricao==xl.descricao){const s=(n=document.getSelection())===null||n===void 0?void 0:n.focusOffset;localStorage.setItem("indexCursor",JSON.stringify(s))}o(e.descricao)}),r}}oi.blotName="blotMenuItem",oi.tagName="DIV",oi.className="lx-eta-dropdown-content-item";class mt extends $o{constructor(e){super(mt.create(e))}static create(e){const o=super.create();return o.setAttribute("contenteditable","false"),o.setAttribute("class",mt.getClasseCSS(e.agrupador)),o.setAttribute("data-rotulo",e.rotulo),o.innerHTML="",o.onclick=()=>o.dispatchEvent(new CustomEvent("rotulo",{bubbles:!0,cancelable:!0,detail:{elemento:e}})),o}get rotulo(){return this.domNode.getAttribute("data-rotulo")}format(e,o){e===mt.blotName?this.domNode.setAttribute("data-rotulo",o):e===mt.formatoStyle?this.domNode.setAttribute("style",mt.criarAtributoStyle(o)):super.format(e,o)}static criarAtributoStyle(e){let o=e.tipo==="Articulacao"?"color: #373634; font-weight: 600; line-height: 0.42;":"color: #373634; font-weight: 600; line-height: 1.42;";return o=e.agrupador?`${o} display: block; font-size: 1rem; text-align: center;`:`${o} float: left; margin-right: 10px;`,o}static getClasseCSS(e){return"texto__rotulo"+(e?" texto__rotulo--agrupador":" texto__rotulo--padrao")}}mt.blotName="rotulo",mt.tagName="LABEL",mt.formatoStyle="STYLE";class Zt extends $o{constructor(){super(Zt.create())}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.innerHTML="&nbsp;",e}}Zt.blotName="espaco",Zt.tagName="ESPACO",Zt.className="espaco";const Iv=Quill.import("blots/container");class ft extends Iv{constructor(e){var o,i,r,n,s;super(ft.create(e)),this._lexmlId=(o=e.lexmlId)!==null&&o!==void 0?o:"",this._editavel=e.editavel,this._nivel=e.nivel,this._numero=(i=e.numero)!==null&&i!==void 0?i:"",this._tipo=(r=e.tipo)!==null&&r!==void 0?r:"",this._agrupador=e.agrupador,this._hierarquia=!((s=(n=e.hierarquia)===null||n===void 0?void 0:n.pai)===null||s===void 0)&&s.uuidAlteracao?e.hierarquia:void 0,this._descricaoSituacao=e.descricaoSituacao?e.descricaoSituacao:void 0,this._existeNaNormaAlterada=e.existeNaNormaAlterada}static criarId(e){return`lxEtaId${e!=null?e:0}`}static create(e){const o=super.create();return o.setAttribute("contenteditable",e!=null&&e.editavel?"true":"false"),o.setAttribute("class",ft.className+" "+ft.getClasseCSS(e)),o.setAttribute("id",ft.criarId(e.uuid)),o.setAttribute("cellpadding","0"),o.setAttribute("cellspacing","0"),o.setAttribute("border","0"),o}get blotRotulo(){var e,o;return(o=(e=this.children.head)===null||e===void 0?void 0:e.children)===null||o===void 0?void 0:o.head.children.head}get blotConteudo(){var e;return(e=this.blotRotulo)===null||e===void 0?void 0:e.next}get containerDireito(){return this.children.head.children.tail}get blotContainerDireito(){return this.containerDireito.children.head}get tamanho(){return this.length()-1}get id(){var e;return(e=this.domNode.getAttribute("id"))!==null&&e!==void 0?e:""}set agrupador(e){this._agrupador=e}get agrupador(){return this._agrupador}set editavel(e){this._editavel=e,this.blotConteudo.domNode.contentEditable=this._editavel}get editavel(){return this._editavel}set hierarquia(e){this._hierarquia=e}get hierarquia(){return this._hierarquia}set nivel(e){this._nivel=e}get nivel(){return this._nivel}set numero(e){this._numero=e}get numero(){return this._numero}set tipo(e){this._tipo=e}get tipo(){return this._tipo}set descricaoSituacao(e){this._descricaoSituacao=e}get descricaoSituacao(){return this._descricaoSituacao}set existeNaNormaAlterada(e){this._existeNaNormaAlterada=e}get existeNaNormaAlterada(){return this._existeNaNormaAlterada}get uuid(){return parseInt(this.id.substr(7),0)}set lexmlId(e){this._lexmlId=e}get lexmlId(){var e;return(e=this._lexmlId)!==null&&e!==void 0?e:""}get html(){return this.domNode.innerHTML!=="<br>"?this.domNode.innerHTML:""}set html(e){this.domNode.innerHTML=e}setEstilo(e){let o="",i="texto__dispositivo";switch(e.descricaoSituacao){case $.DISPOSITIVO_ADICIONADO:o="dispositivo--adicionado";break;case $.DISPOSITIVO_MODIFICADO:o="dispositivo--modificado";break;case $.DISPOSITIVO_SUPRIMIDO:o="dispositivo--suprimido",i="texto--suprimido"}this.blotRotulo.domNode.setAttribute("class",`${mt.getClasseCSS(this._agrupador)} ${o} ${e.numero===void 0?"rotulo":""}`),this.blotConteudo.domNode.setAttribute("class",`${o} ${i}`)}format(e,o){e===ft.blotName?this.domNode.setAttribute("style",ft.criarAtributoStyle(o)):super.format(e,o)}ativarBorda(){this.domNode.classList.add("container__elemento--ativo")}desativarBorda(){this.domNode.classList.remove("container__elemento--ativo"),this.limparContainerDireito()}limparContainerDireito(){this.blotContainerDireito.tagName!==Zt.tagName&&(this.blotContainerDireito.remove(),new Zt().insertInto(this.containerDireito))}static criarAtributoStyle(e){let o=e.tipo==="Articulacao"?"width: 100%; min-height: 1px; line-height: 0.42; margin: 1px":"width: 100%; min-height: 26px; border: 1px solid #ffffff; line-height: 1.42; margin: 0px 2px 0px 5px !important;";return e.agrupador&&(o=`${o} text-align: center;`),o}static getClasseCSS(e){let o=e.tipo==="Articulacao"?"container__elemento--articulacao":"container__elemento--padrao";return e.agrupador&&(o=`${o} agrupador`),o}}function Re(t){t.stopPropagation(),t.preventDefault()}ft.blotName="containerTable",ft.tagName="DIV",ft.className="container__elemento";class qv{constructor(e,o){this.callback=e,this.canceled=o}isCanceled(){var e;return(e=this.canceled)!==null&&e!==void 0&&e}cancel(){this.canceled=!0}}class zt{constructor(){this.subscriptions=[]}subscribe(e){const o=new qv(e);return this.subscriptions.push(o),o}notify(e){this.subscriptions.forEach(o=>{o.isCanceled()||setTimeout(()=>{o.callback(e)},1)})}clean(){this.subscriptions=[]}}const Cv=/([a-zA-Z0-9áéíóúÁÉÍÓÚãẽĩõũÃẼĨÕŨàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛçÇýÝỹỸỳỲÿŸŶŷñÑ '!@#$%&*()_\-+=`'{[^~}\]<,>.:;?/|\\ªº¹²³£¢¬§¿¡“”])/i,Pv=/([^a-zA-Z0-9áéíóúÁÉÍÓÚãẽĩõũÃẼĨÕŨàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛçÇýÝỹỸỳỲÿŸŶŷñÑ '!@#$%&*()_\-+=`'{[^~}\]<,>.:;?/|\\ªº¹²³£¢¬§¿¡“”])/gi,Jp=Quill.import("modules/keyboard");class Tv extends Jp{constructor(e,o){super(e,o),this.operacaoTecladoInvalida=new zt,this.adicionaElementoTeclaEnter=new zt,this.removeElemento=new zt,this.removeElementoSemTexto=new zt,this.renumeraElemento=new zt,this.transformaElemento=new zt,this.moveElemento=new zt,this.onChange=new zt,this.altGraphPressionado=!1}listen(){this.quill.root.addEventListener("keyup",e=>{e.key==="AltGraph"&&(this.altGraphPressionado=!1),!e.ctrlKey||e.altKey||e.shiftKey||!"biBI".includes(e.key)?this.quill.cursorDeTextoEstaSobreLink()||e.key==="Backspace"&&this.quill.cursorDeTextoEstaSobreLink(-1)||!this.isTeclaQueAlteraTexto(e)||this.onChange.notify("keyboard"):this.onHotKeyToolbar()}),this.quill.root.addEventListener("keypress",e=>{this.quill.cursorDeTextoEstaSobreLink()&&e.key.length===1&&Re(e)}),this.quill.root.addEventListener("keydown",e=>{if(e.key==="AltGraph"&&(this.altGraphPressionado=!0),this.quill.cursorDeTextoEstaSobreLink()||e.key==="Backspace"&&this.quill.cursorDeTextoEstaSobreLink(-1)){if(["Delete","Backspace"].includes(e.key)||!e.ctrlKey&&e.key.length===1||e.ctrlKey&&"xvXV".includes(e.key)||e.altKey&&"0123456789".includes(e.key))return void Re(e)}else e.ctrlKey?(e.altKey||e.metaKey||(e.key==="Delete"?Re(e):e.key==="Home"?this.onTeclaHome(e):e.key==="End"?this.onTeclaEnd(e):e.key==="ArrowUp"||e.key==="ArrowDown"?this.onHotKeyMover(e):e.key.toLowerCase()!=="a"||e.shiftKey?e.key.toLowerCase()==="d"?this.onTeclaCtrlD(e):e.key.toLowerCase()==="z"?this.onTeclaCtrlZ(e):e.key.toLowerCase()==="y"?this.onTeclaCtrlY(e):e.ctrlKey&&e.shiftKey&&e.key.toLowerCase()==="a"?this.onTeclaCtrlShiftA(e):e.key!=="b"&&e.key!=="i"&&e.key!=="x"&&e.key!=="v"||this.onValidarTecla(e):this.onTeclaCtrlA(e)),(e.altKey||e.metaKey)&&(["a","l","n","o","p","t"].includes(e.key.toLowerCase())?this.onHotKeyTransformacaoTipo(e):e.key.toLowerCase()==="r"&&this.onHotKeyRenumeraDispositivo(e))):e.key==="ArrowRight"?this.onTeclaArrowRight(e):e.key==="ArrowLeft"?this.onTeclaArrowLeft(e):e.key==="ArrowDown"||e.key==="ArrowUp"?this.onTeclaArrowDownOuUp(e):e.key==="Enter"?this.onTeclaEnter(e):e.key==="Escape"?this.onTeclaEscape(e):e.key==="Delete"?this.onTeclaDelete(e):e.key==="Backspace"?this.onTeclaBackspace(e):e.key==="Tab"?this.onTeclaTab(e):e.key.length===1&&Cv.test(e.key)&&this.onValidarTecla(e)}),super.listen()}isTeclaComCaracterGrafico(e){return e.location!==3&&"123456=[]/".includes(e.key)}isTeclaQueAlteraTexto(e){return!(e.ctrlKey||e.altKey||e.metaKey)&&!(this.altGraphPressionado&&!this.isTeclaComCaracterGrafico(e))&&!(!["Delete","Backspace"].includes(e.key)&&e.key.length!==1)}verificarOperacaoTecladoPermitida(){const e=this.quill.textoSelecionado;if(e.conteudo&&e.quantidadeCR>0){if(e.quantidadeCR===1&&/\n$/gi.test(e.conteudo)){const o=this.quill.getSelection(!0);return this.quill.setSelection(o.index,o.length-1,Quill.sources.API),!0}return this.operacaoTecladoInvalida.notify(),!1}return!0}onTeclaArrowRight(e){const o=this.quill.getSelection(!0),[i,r]=this.quill.getLine(o.index);r===i.tamanho&&(i.linha.next&&this.quill.setIndex(this.quill.getIndex(i.linha.next.blotConteudo),Quill.sources.USER),Re(e))}onTeclaArrowLeft(e){const o=this.quill.getSelection(!0),[i,r]=this.quill.getLine(o.index);if(r===0){if(i.linha.prev){const n=i.linha.prev,s=this.quill.getIndex(n.blotConteudo)+n.blotConteudo.tamanho;this.quill.setIndex(s,Quill.sources.USER)}Re(e)}}onTeclaArrowDownOuUp(e){this.quill.isProcessandoMudancaLinha&&Re(e)}onTeclaEnter(e){if(this.verificarOperacaoTecladoPermitida()){const o=this.quill.getSelection(!0);this.quill.setSelection(o.index,0,Quill.sources.SILENT),this.adicionaElementoTeclaEnter.notify(o)}Re(e)}onTeclaEscape(e){const o=this.quill.getSelection(!0);this.quill.setIndex(o.index,Quill.sources.SILENT),this.quill.setSelection(this.quill.inicioConteudoAtual,0,Quill.sources.SILENT),Re(e)}onTeclaDelete(e){const o=this.quill.getSelection(!0);this.quill.linhaAtual.blotConteudo.html?this.verificarOperacaoTecladoPermitida()&&o.index!==this.quill.fimConteudoAtual||Re(e):(Re(e),this.removeElementoSemTexto.notify(e.key))}onTeclaBackspace(e){const o=this.quill.getSelection(!0);this.quill.linhaAtual.blotConteudo.html?(!this.verificarOperacaoTecladoPermitida()||o.index===this.quill.inicioConteudoAtual&&o.length===0)&&Re(e):(Re(e),this.removeElementoSemTexto.notify(e.key))}onValidarTecla(e){this.verificarOperacaoTecladoPermitida()||Re(e)}onTeclaHome(e){const o=this.quill.getIndex(this.quill.getPrimeiraLinha().blotConteudo);this.quill.setIndex(o,Quill.sources.USER),this.quill.scroll.domNode.scrollTo(0,0),Re(e)}onTeclaEnd(e){var o,i;const r=(i=this.quill.getIndex(this.quill.getUltimaLinha().blotConteudo)+((o=this.quill.getUltimaLinha().blotConteudo)===null||o===void 0?void 0:o.tamanho))!==null&&i!==void 0?i:0;this.quill.setIndex(r,Quill.sources.USER),this.quill.scroll.domNode.scrollTo(0,this.quill.scroll.domNode.scrollHeight),Re(e)}onTeclaCtrlD(e){this.removeElemento.notify(),Re(e)}onTeclaTab(e){this.transformaElemento.notify(e),Re(e)}onTeclaCtrlZ(e){this.quill.undo(),Re(e)}onTeclaCtrlY(e){this.quill.redo(),Re(e)}onTeclaCtrlA(e){const o=this.quill.getIndex(this.quill.scroll.children.head.blotConteudo);this.quill.setSelection(o,this.quill.getLength(),Quill.sources.SILENT),Re(e)}onTeclaCtrlShiftA(e){this.quill.setSelection(this.quill.inicioConteudoAtual,this.quill.linhaAtual.blotConteudo.tamanho,Quill.sources.SILENT),Re(e)}onHotKeyRenumeraDispositivo(e){this.renumeraElemento.notify(e),Re(e)}onHotKeyMover(e){this.moveElemento.notify(e),Re(e)}onHotKeyTransformacaoTipo(e){this.transformaElemento.notify(e),Re(e)}onHotKeyToolbar(){var e;!((e=document.getSelection())===null||e===void 0)&&e.toString()&&this.onChange.notify("toolbar(hotkey)")}}class Li extends $o{constructor(e){super(Li.create(e)),this._htmlAnt=""}static create(e){var o,i;const r=super.create(),n=((i=(o=e.conteudo)===null||o===void 0?void 0:o.texto)!==null&&i!==void 0?i:"").trim();return r.setAttribute("contenteditable",e!=null&&e.editavel?"true":"false"),r.innerHTML=n!==""?n:"<br>",r}set htmlAnt(e){this._htmlAnt=e}get htmlAnt(){return this._htmlAnt}get alterado(){return this._htmlAnt!==this.html}}Li.blotName="texto",Li.tagName="P",Li.className="texto__dispositivo";class Mi extends $o{constructor(e){super(Mi.create(e))}static create(e){const o=super.create();let i="";return i=e.tipo===ee.INFO?"mensagem--info":e.tipo===ee.WARNING?"mensagem--warning":"mensagem--danger",o.setAttribute("contenteditable","false"),o.classList.add(i),o.innerHTML=e.descricao?e.descricao:"",e.fix&&(o.innerHTML+='<span class="mensagem__fix"> ( Fix dispon\xEDvel )</span>',o.onclick=()=>o.dispatchEvent(new CustomEvent("mensagem",{bubbles:!0,cancelable:!0,detail:{mensagem:e}}))),o}}Mi.blotName="mensagem",Mi.tagName="div",Mi.className="mensagem";class kr extends $o{constructor(){super(kr.create())}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.setAttribute("style","font-size: 0.8em;"),e}}kr.blotName="mensagens",kr.tagName="MENSAGENS";const Nv=Quill.import("modules/clipboard");class Dv extends Nv{constructor(e,o){super(e,o),this.onChange=new zt,this.quill.root.addEventListener("cut",i=>{var r;if(this.quill.cursorDeTextoEstaSobreLink())return void Re(i);!((r=document.getSelection())===null||r===void 0)&&r.toString()&&this.onChange.notify("clipboard")}),this.quill.root.addEventListener("paste",i=>{var r;if(this.quill.cursorDeTextoEstaSobreLink())return void Re(i);!((r=i.clipboardData)===null||r===void 0)&&r.getData("text/plain")&&this.onChange.notify("clipboard")})}convert(e){if(typeof e=="string")return this.container.innerHTML=e,super.convert();this.container.innerHTML=this.container.innerHTML.replace(Pv,""),this.container.innerHTML=this.container.innerHTML.replace(/(<p\s*)/gi," <p"),this.container.innerHTML=this.container.innerHTML.replace(/(<br\s*\/>)/gi," "),this.container.innerHTML=this.container.innerHTML.replace(/<(?!strong)(?!\/strong)(?!em)(?!\/em)(?!sub)(?!\/sub)(?!sup)(?!\/sup)(.*?)>/gi,""),this.container.innerHTML=this.container.innerHTML.replace(/<([a-z]+) .*?=".*?( *\/?>)/gi,"<$1$2");const o=super.convert();return this.container.innerHTML="",o}onPaste(e){var o;e.preventDefault();const i=this.quill.getSelection(),r=(o=e==null?void 0:e.clipboardData)===null||o===void 0?void 0:o.getData("text/html"),n=new DOMParser().parseFromString(r,"text/html");let s="";const u=["A","B","STRONG","I","EM","SUP","SUB"],c=(d,p)=>{for(p(d),d=d.firstChild;d;)c(d,p),d=d.nextSibling};c(n,function(d){u.includes(d.tagName)?s+=d.outerHTML:d.nodeType!==3||u.includes(d.parentElement.tagName)||(s+=d.nodeValue)}),this.quill.clipboard.dangerouslyPasteHTML(i.index,s)}}const Rv=Quill.import("blots/container");class qo extends Rv{constructor(e){super(qo.create()),this.alinhamentoMenu=e}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.setAttribute("class",qo.className),e}}qo.blotName="containerTdDireito",qo.tagName="DIV",qo.className="container__menu";const Lv=Quill.import("blots/container");class oo extends Lv{constructor(e){super(oo.create(e))}static create(e){const o=super.create();o.setAttribute("contenteditable",e.editavel?"true":"false"),o.setAttribute("class",oo.className+" container__texto--nivel"+e.nivel);const i=Number(getComputedStyle(document.documentElement).getPropertyValue("--elemento-padding-factor"));if(i){const r=(e.agrupador?0:e.nivel)*i+5;o.setAttribute("style",`padding-left: ${r}px;`)}return o}}oo.blotName="containerTdEsquerdo",oo.tagName="DIV",oo.className="container__texto",oo.classLevel="level";const Mv=Quill.import("blots/container");class Co extends Mv{constructor(e,o){super(Co.create(e,o))}static create(e,o){const i=super.create(),r=o===On.Esquerda?" container__linha--reverse":"";return i.setAttribute("contenteditable",e?"true":"false"),i.setAttribute("class",Co.className+r),i}}Co.blotName="containerTr",Co.tagName="DIV",Co.className="container__linha";class $v extends Quill{constructor(e,o){super(e,o)}getConteudoHtml(e,o,i){const r=this.scroll.children.head;return this.setConteudo(this.converterHtmlParaDelta(e),Quill.sources.SILENT),this.deleteText(o+i,r.length()-i-1,Quill.sources.SILENT),o>0&&this.deleteText(0,o,Quill.sources.SILENT),r.domNode.innerHTML}converterHtmlParaDelta(e){return this.clipboard.convert(e!=null?e:"")}converterDeltaParaHtml(e){return this.setConteudo(e,Quill.sources.SILENT),this.scroll.children.head.domNode.innerHTML}setConteudo(e,o){var i;const r=this.scroll.children.head;let n=0;r.length()>1&&this.deleteText(n,r.length()-1,o!=null?o:Quill.sources.SILENT),this.insertText(n," ",Quill.sources.SILENT),(i=e.ops)===null||i===void 0||i.forEach(s=>{s.attributes?this.insertText(n,s.insert,s.attributes,o!=null?o:Quill.sources.SILENT):this.insertText(n,s.insert,o!=null?o:Quill.sources.SILENT),n+=s.insert.length}),this.deleteText(n,1,Quill.sources.SILENT)}}class qe extends Quill{constructor(e,o,i){super(e,i),this._undoEstruturaVazio=!0,this._redoEstruturaVazio=!0,this._processandoMudancaLinha=!1,this.undoRedoEstrutura=new zt,this.elementoSelecionado=new zt,this.aspasAberta=!1,this.observableSelectionChange=new zt,this.onSelectionChange=(r,n)=>{const s=this.linhaAtual;this._mudouDeLinha=this.verificarMudouLinha(r,n),this._mudouDeLinha&&(this.observableSelectionChange.notify(s),this.aspasAberta=!1,this.limparHistory())},this.onTextChange=()=>{this._linhaAtual&&setTimeout(()=>{this.acertarAspas()},0)},this.on("text-change",this.onTextChange),this.on("selection-change",this.onSelectionChange),this.buffer=new $v(o,{}),this.root.addEventListener("dragstart",r=>{r.preventDefault()}),this.root.addEventListener("drop",r=>{r.preventDefault()})}get mudouDeLinha(){var e;return(e=this._mudouDeLinha)!==null&&e!==void 0&&e}get linhaAnterior(){return this._linhaAnterior}get linhaAtual(){return this._linhaAtual}get inicioConteudoAtual(){return this.getIndex(this.linhaAtual.blotConteudo)}get fimConteudoAtual(){return this.inicioConteudoAtual+this.linhaAtual.blotConteudo.tamanho}get textoSelecionado(){var e,o,i;const r=(e=this.getSelection(!0))!==null&&e!==void 0?e:{index:0,length:0},n=this.getText().substr(r.index,r.length);return{conteudo:n,quantidadeCR:(i=(o=n.match(/(\n)/gi))===null||o===void 0?void 0:o.length)!==null&&i!==void 0?i:0}}get isUndoEstruturaVazio(){return this._undoEstruturaVazio}set undoEstruturaVazio(e){this._undoEstruturaVazio=e}get isRedoEstruturaVazio(){return this._redoEstruturaVazio}set redoEstruturaVazio(e){this._redoEstruturaVazio=e}get isProcessandoMudancaLinha(){return this._processandoMudancaLinha}set processandoMudancaLinha(e){this._processandoMudancaLinha=e}static configurar(){const e=qe.import("parchment"),o=new e.Attributor.Attribute("id","id",{scope:e.Scope.BLOCK}),i=new e.Attributor.Style("paddingLeft","padding-left",{scope:e.Scope.BLOCK}),r=new e.Attributor.Style("border","border",{scope:e.Scope.BLOCK}),n=new e.Attributor.Style("borderColor","border-color",{scope:e.Scope.BLOCK}),s=new e.Attributor.Style("display","display",{scope:e.Scope.BLOCK}),u=new e.Attributor.Style("aria-label","aria-label",{scope:e.Scope.BLOCK}),c=new e.Attributor.Attribute("dataRotulo","data-rotulo",{scope:e.Scope.BLOCK});qe.register("modules/clipboard",Dv,!0),qe.register("modules/keyboard",Tv,!0),qe.register(Li,!0),qe.register(Zt,!0),qe.register(Mi,!0),qe.register(kr,!0),qe.register(ei,!0),qe.register(ti,!0),qe.register(oi,!0),qe.register(Io,!0),qe.register(mt,!0),qe.register(ft,!0),qe.register(oo,!0),qe.register(qo,!0),qe.register(Co,!0),qe.register(o,!0),qe.register(i,!0),qe.register(r,!0),qe.register(n,!0),qe.register(s,!0),qe.register(u,!0),qe.register(c,!0)}destroi(){var e,o;this.off("text-change",this.onTextChange),this.off("selection-change",this.onSelectionChange),(e=this.keyboard)===null||e===void 0||e.operacaoTecladoInvalida.clean(),(o=this.keyboard)===null||o===void 0||o.adicionaElementoTeclaEnter.clean()}getConteudoHtmlParteLinha(e,o,i){return this.buffer.getConteudoHtml(e.html,o,i)}getPrimeiraLinha(){return this.scroll.children.head}getUltimaLinha(){return this.scroll.children.tail}getLinha(e,o=this.getPrimeiraLinha()){return o.uuid===e?o:o.next?this.getLinha(e,o.next):void 0}getLinhaPorId(e){return Quill.find(this.getHtmlElement(ft.criarId(e)),!1)}setIndex(e,o=Quill.sources.USER){var i;const r=(i=this.getSelection(!0))!==null&&i!==void 0?i:{index:0,length:0};e===r.index&&r.length===0||this.setSelection(e,0,o)}setConteudoLinha(e,o,i){var r;let n=this.getIndex(e);e.length()>1&&this.deleteText(n,e.length()-1,i!=null?i:Quill.sources.SILENT),this.insertText(n," ",Quill.sources.SILENT),(r=o.ops)===null||r===void 0||r.forEach(s=>{s.attributes?this.insertText(n,s.insert,s.attributes,i!=null?i:Quill.sources.SILENT):this.insertText(n,s.insert,i!=null?i:Quill.sources.SILENT),n+=s.insert.length}),this.deleteText(n,1,Quill.sources.SILENT)}converterHtmlParaDelta(e){return this.buffer.converterHtmlParaDelta(e)}converterDeltaParaHtml(e){return this.buffer.converterDeltaParaHtml(e)}irProximaLinha(){var e;const o=this.getIndex((e=this._linhaAtual)===null||e===void 0?void 0:e.next.blotConteudo);this.setSelection(o,0)}desmarcarLinhaAtual(e){this._linhaAnterior=e,e==null||e.desativarBorda()}marcarLinhaAtual(e){e&&e.tipo!=="Articulacao"&&(this.atualizarLinhaCorrente(e),this.elementoSelecionado.notify(e.uuid))}undo(){this.history.stack.undo.length===0?this.isUndoEstruturaVazio||this.undoRedoEstrutura.notify(qe.UNDO):(this.history.undo(),this.focus())}redo(){this.history.stack.redo.length===0?this.isRedoEstruturaVazio||this.undoRedoEstrutura.notify(qe.REDO):(this.history.redo(),this.focus())}limparHistory(){setTimeout(()=>{this.history.clear()},0)}desmarcarLinhas(){document.querySelectorAll(".container__elemento--ativo").forEach(e=>{this.getLinhaPorId(parseInt(e.id.substr(7),0)).desativarBorda()})}verificarMudouLinha(e,o){if(o&&(e==null?void 0:e.index)===0&&(e==null?void 0:e.length)===0)return this.setSelection(o.index,0),!1;if(e){const i=this.getLine(e.index)[0],r=i.linha;if(i.tagName!==mt.tagName&&i.tagName!==Zt.tagName&&i.tagName!==Io.tagName&&i.tagName!==kr.tagName||this.setSelection(this.getIndex(i.linha.blotConteudo),0,Quill.sources.SILENT),o){const n=this.getLine(o.index)[0];if(n&&r===n.linha)return!1}return this.desmarcarLinhas(),this.marcarLinhaAtual(r),!0}return!1}getHtmlElement(e){return this.root.querySelector(`#${e}`)}acertarAspas(){var e,o;if(this._linhaAtual){const i=this.inicioConteudoAtual,r=(o=this.getText(i,(e=this.linhaAtual)===null||e===void 0?void 0:e.blotConteudo.tamanho))!==null&&o!==void 0?o:"";let n=i;if(r.indexOf('"')>-1)for(let s=0;s<r.length;s++)r[s]==='"'&&(n+=s,this.deleteText(n,1,Quill.sources.SILENT),this.insertText(n,this.aspasAberta?"\u201D":"\u201C",Quill.sources.SILENT),this.aspasAberta=!this.aspasAberta,n=i)}}atualizarLinhaCorrente(e){this.processandoMudancaLinha=!0,this._linhaAtual=e,this._linhaAtual.blotConteudo.htmlAnt=this._linhaAtual.blotConteudo.html,e.ativarBorda(),this.scrollToElemento(e.uuid)}scrollToElemento(e){const o=this.getHtmlElement(ft.criarId(e));setTimeout(()=>{this.isInEtaBoxViewport(o)||this.scrollIntoEtaBox(o)},0)}scrollIntoEtaBox(e){var o;const i=e.offsetTop;(o=e.closest(".ql-editor"))===null||o===void 0||o.scrollTo(0,i)}isInEtaBoxViewport(e){const o=e.getBoundingClientRect(),i=e.closest("#lx-eta-box").getBoundingClientRect().bottom;return o.top>=0&&o.bottom<=i}cursorDeTextoEstaSobreLink(e=0){var o;const i=this.getSelection(!0),r=this.getContents(i.index+e,1).ops;return!!r&&((o=r[0].attributes)===null||o===void 0?void 0:o.link)}}qe.UNDO="undo",qe.REDO="redo";class Xr{static criarContainerLinha(e){const o=new ft(e),i=new Co(e.editavel,this.alinhamentoMenu),r=new oo(e),n=new qo(this.alinhamentoMenu);return new mt(e).insertInto(r),new Li(e).insertInto(r),new Zt().insertInto(n),r.insertInto(i),n.insertInto(i),i.insertInto(o),o}static criarContainerMensagens(e){const o=new Co(!1,this.alinhamentoMenu),i=new oo(e),r=new qo(this.alinhamentoMenu);return e.mensagens&&e.mensagens.length>0&&e.mensagens.forEach(n=>{new Mi(n).insertInto(i)}),new Zt().insertInto(r),i.insertInto(o),r.insertInto(o),o}}async function jv(t,e,o,i){var r;const n=document.createElement("sl-dialog");document.body.appendChild(n),n.label="Dados da norma vigente",n.addEventListener("sl-request-close",v=>{v.detail.source==="overlay"&&v.preventDefault()});const s=document.createRange().createContextualFragment(`
  <style></style>
  <div class="input-validation-required">
    <sl-select name="tipoNorma" id="tipoNorma" label="Tipo" clearable>
      <sl-menu-item value="decreto">Decreto</sl-menu-item>
      <sl-menu-item value="decreto-lei">Decreto-Lei</sl-menu-item>
      <sl-menu-item value="lei">Lei</sl-menu-item>
      <sl-menu-item value="lei.complementar">Lei Complementar</sl-menu-item>
      <sl-menu-item value="lei.delegada">Lei Delegada</sl-menu-item>
      <sl-menu-item value="medida.provisoria">Medida Provis\xF3ria</sl-menu-item>
    </sl-select>
    <br/>
    <sl-input name="numeroNorma" id="numeroNorma" placeholder="8666 (n\xFAmero sem ponto)" label="N\xFAmero" clearable></sl-input>
    <br/>
    <sl-input type="date" name="dataNorma" id="dataNorma" label="Data" clearable></sl-input>
  </div>
  <br/>
  <sl-alert variant="warning" closable class="alert-closable">
    <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
    <strong>Dados inv\xE1lidos. </strong><br/>
    Revise os dados informados.
  </sl-alert>
  <sl-button slot="footer" variant="default">Cancelar</sl-button>
  <sl-button slot="footer" variant="primary">Ok</sl-button>
  `),u=t.norma?(r=ci(t.norma))===null||r===void 0?void 0:r.urn:void 0,c=t.norma?Pn(t.norma):void 0,d=t.norma?Ri(t.norma):void 0,p=s.querySelector("#tipoNorma"),a=s.querySelector("#numeroNorma"),l=s.querySelector("#dataNorma");if(u&&(p.value=u),c&&(a.value=c),d){const[v,y,b]=d.split("/");l.value=[b,y,v].join("-")}const h=s.querySelectorAll("sl-button"),f=h[0],m=h[1],g=s.querySelector("sl-alert");m.onclick=()=>{const[v,y,b]=l==null?void 0:l.value.split("-"),x=[b,y,v].join("/"),w=((_,I,k,C)=>{var A;return`urn:lex:br:${_}:${I}:${(A=zp(C))!==null&&A!==void 0?A:C};${k}`})("federal",p.value,a==null?void 0:a.value,x);Fp(w)?(e.focus(),g==null||g.hide(),n==null||n.hide(),n==null||n.remove(),t.norma=w,o.dispatch(i.execute(t))):g==null||g.show()},f.onclick=()=>{e.focus(),n==null||n.hide(),n==null||n.remove()},e.blur(),n.appendChild(s),n.show()}Xr.alinhamentoMenu=On.Esquerda;class _e{constructor(e){this.nome=e,this.valores=new Array,this.atributos=new Fe}toString(){if(!this.valores.length)return"<"+this.nome+this.atributos+"/>";const e=new Fe("<"+this.nome+this.atributos+">");return this.valores.forEach(o=>{e.append(o)}),e.append("</"+this.nome+">"),e.toString()}add(e){return e&&this.valores.push(e),this}addAtributo(e,o){return this.atributos.append(" "),this.atributos.append(e),o&&(this.atributos.append("='"),this.atributos.append(o),this.atributos.append("'")),this}}class Bt{static compare(e,o){if(!e||!o)throw new Error("Tentativa de compara\xE7\xE3o de dispositivo nulo.");if(!e.pai)return-1;if(!o.pai)return 1;const i=Bt.getIndices(e),r=Bt.getIndices(o);return Bt.comparaIndices(i,r)}static getIndices(e){const o=[];let i=this.getPaiParaComparacao(e);for(;i;)o.push(this.getIndexDoFilho(i,e)),e=i,i=this.getPaiParaComparacao(e);return o.reverse(),o}static getPaiParaComparacao(e){if(e.pai)return G(e.pai)&&Ge(e)?e.pai.caput:e.pai}static getIndexDoFilho(e,o){return we(o)?0:ge(o)?e.filhos.indexOf(o)+1:Ge(o)?-1:e.filhos.indexOf(o)}static comparaIndices(e,o){let i=0;const r=e.length,n=o.length;for(let s=0;s<r&&s<n&&i===0;s++)i=e[s]-o[s];return i===0&&(i=r-n),i}}class eh{static getAlteracao(e){let o=e;if(o.tipo===R.alteracao.tipo)return o;if(H(o)){for(;o&&o.tipo!==R.alteracao.tipo;)o=o.pai;return o}}static existeNaNormaAlterada(e){return e.situacao.existeNaNormaAlterada}}class Y{static getDispositivosNaoOriginais(e){const o=[];return eo(e,i=>{i.pai&&i.situacao.descricaoSituacao!==$.DISPOSITIVO_ORIGINAL&&o.push(i)}),o}static getDispositivosComando(e){const o=new Array;for(const i of e){if(i.situacao.descricaoSituacao===$.DISPOSITIVO_ORIGINAL||H(i)||Ge(i))continue;const r=Y.getDispositivoAfetado(i);r&&!o.includes(r)&&o.push(r)}return o}static getDispositivoAfetado(e){if(me(e)||G(e))return e;const o=e.pai;return we(o)&&o.pai.situacao.descricaoSituacao!==$.DISPOSITIVO_ORIGINAL?o.filhos.find(i=>i.situacao.descricaoSituacao===$.DISPOSITIVO_ORIGINAL)?e:o.pai:Y.isAlteracaoIntegral(o)?Y.getDispositivoAfetado(o):e}static getDispositivoAfetadoEmAlteracao(e){if(ve(e)){if(Y.isOmissisAdjacenteADispositivoDeEmenda(e))return}else if(e.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO&&Y.isTextoOmitido(e))return;const o=we(e.pai)?e.pai.pai:e.pai;return Y.isAlteracaoIntegralEmAlteracao(o)?Y.getDispositivoAfetadoEmAlteracao(o):e}static isTextoOmitido(e){var o;return ve(e)||e.texto.startsWith(Lt)||me(e)&&!!(!((o=e.caput)===null||o===void 0)&&o.texto.startsWith(Lt))}static getDescricaoSituacaoParaComandoEmenda(e){return e.isDispositivoAlteracao&&e.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO&&eh.existeNaNormaAlterada(e)?$.DISPOSITIVO_MODIFICADO:e.situacao.descricaoSituacao}static isMesmaSituacaoParaComandoEmenda(e,o){return this.getDescricaoSituacaoParaComandoEmenda(e)===this.getDescricaoSituacaoParaComandoEmenda(o)}static isAlteracaoIntegral(e){const o=this.getDescricaoSituacaoParaComandoEmenda(e);if(o===$.DISPOSITIVO_ORIGINAL)return!1;if(o===$.DISPOSITIVO_SUPRIMIDO||o===$.DISPOSITIVO_ADICIONADO)return!0;if(!e.filhos.length)return!G(e)||o!==$.DISPOSITIVO_ORIGINAL;for(const i of e.filhos)if(!Y.isAlteracaoIntegral(i))return!1;return!0}static isAlteracaoIntegralEmAlteracao(e){return!Ge(e)&&(e.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO&&!Y.isTextoOmitido(e)||e.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO)}static getArvoreDispositivos(e){const o=new Map;return e.length&&e.forEach(i=>{this.atualizaMapa(i,o)}),o}static atualizaMapa(e,o){const i=this.getHierarquiaDispositivosDeUmDispositivo(e);let r=o;i.forEach(n=>{const s=r.get(n);if(s)r=s;else{const u=new Map;r.set(n,u),r=u}})}static getHierarquiaDispositivosDeUmDispositivo(e){const o=new Array;o.push(e);let i=e.pai;for(;i&&!Ni(i)&&!_g(i);)o.push(i),i=i.pai;return o.reverse(),o}static getArvoreDispositivosDeAlteracaoDeNorma(e){const o=new Map;if(!e.length)return o;for(const i of e)this.atualizaMapaDeAlteracaoDeNorma(i,o);return o}static atualizaMapaDeAlteracaoDeNorma(e,o){const i=this.getHierarquiaDispositivosDeUmDispositivo(e);let r=o;for(const n of i)if(H(n)&&!Ge(n))if(r.has(n))r=r.get(n);else{const s=new Map;r.set(n,s),r=s}o=r}static isSequenciasPlural(e){const o=e.length;return o!==0&&(o>1||Y.isSequenciaPlural(e[0]))}static isSequenciaPlural(e){const o=e.getQuantidadeRanges();return o!==0&&(o>1||e.getPrimeiroRange().getQuantidadeDispositivos()>1)}static getProximoAgrupador(e){let o=e;do o=ji(o);while(o&&!me(o));return o}static getDispositivoIrmaoPosterior(e){if(G(e)||me(e))return this.getArtigoPosterior(e);if(!this.isUltimoDispositivoDoMesmoTipo(e)){const o=e.pai,i=o.filhos.indexOf(e)+1;return o.filhos[i]}}static getArtigoPosterior(e){const o=e.pai;if(o.filhos.length){for(let i=o.filhos.indexOf(e)+1;i<o.filhos.length;i++){const r=o.filhos[i];if(G(r))return r;if(me(r)){const n=this.buscaProximoArtigo(r);if(n)return n}}if(o.pai)return this.getArtigoPosterior(o)}}static buscaProximoArtigo(e){const o=e.filhos;for(const i of o){if(G(i))return i;if(me(i))return this.buscaProximoArtigo(i)}}static isUltimoDispositivoDoMesmoTipo(e){if(!e.pai)return!0;const o=e.pai,i=o.filhos.indexOf(e);return o.filhos.length===i+1||o.filhos[i+1].tipo!==e.tipo}static getFilhosEstiloLexML(e){if(G(e)){const o=e;return[o.caput,...o.filhos.filter(i=>ge(i)||ve(i)&&!we(i.pai))]}return e.filhos}static getDispositivoAnteriorDireto(e){const o=e.pai,i=this.getFilhosEstiloLexML(o),r=i.indexOf(e);if(!(r>0))return o;e=i[r-1];let n=this.getFilhosEstiloLexML(e);for(;n.length;)e=n[n.length-1],n=this.getFilhosEstiloLexML(e);return e}static getDispositivoPosteriorDireto(e){const o=this.getFilhosEstiloLexML(e);return o.length?o[0]:this.getProximoIrmaoRecursivo(e)}static getProximoIrmaoRecursivo(e){if(!e)return;const o=ji(e);if(o)return o;{const i=e.pai;return i?void 0:this.getProximoIrmaoRecursivo(i)}}static getRotuloPais(e){const o=new Fe;let i;for(;e&&!G(e);)i=e.pai,o.append(i.pronomePossessivoSingular),o.append(i.getNumeracaoComRotuloParaComandoEmenda()),e=i;return o.toString()}static getDispositivosNaAlteracaoParaComando(e){const o=new Array;eo(e,r=>{r.situacao.descricaoSituacao!==$.DISPOSITIVO_ORIGINAL&&o.push(r)});const i=new Array;return o.forEach(r=>{const n=Y.getDispositivoAfetadoEmAlteracao(r);n&&!i.includes(n)&&i.push(n)}),i.sort(Bt.compare),i}static isOmissisAdjacenteADispositivoDeEmenda(e){if(!ve(e))return!1;let o=Y.getDispositivoAnteriorDireto(e);if(we(o)&&(o=o.pai),o&&o.situacao.descricaoSituacao!==$.DISPOSITIVO_ORIGINAL)return!0;const i=Y.getDispositivoPosteriorDireto(e);return!(!i||i.situacao.descricaoSituacao===$.DISPOSITIVO_ORIGINAL)}static isMesmoTipoParaComandoEmenda(e,o){return e.tipo===o.tipo&&(!G(e)||Y.isAlteracaoIntegral(e)===Y.isAlteracaoIntegral(o))}static getTextoDoDispositivoOuOmissis(e,o=!1){return e.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO||e.situacao.descricaoSituacao===$.DISPOSITIVO_MODIFICADO||we(e)?Y.trataTextoParaCitacao(e,o):e.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO?ve(e)?"(Suprimir omissis)":"(Suprimir)":new _e("Omissis")}static trataTextoParaCitacao(e,o=!1){let i=G(e)?e.caput.texto:e.texto;return i=o?i.replace(/”( *(?:\(NR\)) *)?/,""):i.replace(/”( *(?:\(NR\)) *)?/,"\u2019$1 "),i.trim().replace(/\s{2,}/g," ").replace(/^<p>\s?/i,"").replace(/\s?<\/p>$/i,"").replace(/<\/?a.*?>/gi,"").replace(/\s([\\.,:?!])/g,"$1")}static isFechaAspas(e){const o=cs(e.texto);return/”(?: ?(\(NR\)|\(AC\)))?$/.test(o)}static verificaNecessidadeRenumeracaoRedacaoFinal(e){for(const o of e)if(Y.implicaEmRenumeracaoRedacaoFinal(o))return!0;return!1}static implicaEmRenumeracaoRedacaoFinal(e){return!(!e.rotulo||!/.*(?:0|-[A-Z]).*/i.test(e.rotulo))||!(!G(e)&&!ge(e)||yt(e).filter(o=>o.situacao.descricaoSituacao===$.DISPOSITIVO_ORIGINAL).length!==1)}}function Wa(t){return{type:"ADICIONAR_ALERTA",alerta:{id:t.id,tipo:t.tipo,mensagem:t.mensagem,podeFechar:t.podeFechar}}}function th(t){return{type:"REMOVER_ALERTA",id:t}}let $u=class extends qn(le)(vt){constructor(){super(),this.inscricoes=[],this.onSelectionChange=(t,e,o)=>{(t==null?void 0:t.length)===0&&o===Quill.sources.USER&&this.ajustarLinkParaNorma()},this.tabIndex=-1}get quill(){return this._quill}createRenderRoot(){return this}async firstUpdated(){this.inicializar(this.configEditor()),this.querySelectorAll(".ql-bold, .ql-italic, .ql-script").forEach(t=>{t.addEventListener("click",e=>{e.stopImmediatePropagation()})})}stateChanged(t){var e,o;this.quill?(this.quill.undoEstruturaVazio=((e=t.elementoReducer.past)!==null&&e!==void 0?e:[]).length===0,this.quill.redoEstruturaVazio=((o=t.elementoReducer.future)!==null&&o!==void 0?o:[]).length===0,t.elementoReducer.ui&&(t.elementoReducer.ui.message?this.alertar(t.elementoReducer.ui.message.descricao):this.processarStateEvents(t.elementoReducer.ui.events))):this.quillNaoInicializado(t)}disconnectedCallback(){this.inscricoes.forEach(t=>t.cancel()),this.removeEventListener("ontextchange",t=>console.log(t)),this.removeEventListener("rotulo",t=>console.log(t)),this.destroiQuill(),super.disconnectedCallback()}render(){return Oe`
      ${Sv}
      ${Ov}
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
        .sl-toast-stack sl-alert::part(base) {
          background-color: var(--sl-color-danger-100);
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
    `}formatacaoAlterada(){var t;!((t=document.getSelection())===null||t===void 0)&&t.toString()&&this.agendarEmissaoEventoOnChange("toolbar")}onClickUndo(){this.quill.undo()}onClickRedo(){this.quill.redo()}onClickDispositivoAtual(){this.quill.setSelection(this.quill.getIndex(this.quill.linhaAtual.blotConteudo),0,Quill.sources.SILENT),this.quill.focus()}artigoOndeCouber(){}ajustarLinkParaNorma(){const t=document.querySelector("a.ql-preview"),e=t==null?void 0:t.getAttribute("href");if(e!=null&&e.startsWith("urn")){const o="https://normas.leg.br/?urn="+e;t.setAttribute("href",o),t.innerHTML=(i=>{var r;const n=jp(i),s=Pn(n),u=(r=ci(n))===null||r===void 0?void 0:r.descricao,c=Ri(n);return(u||"")+(s?" n\xBA "+s:"")+(c.length>7?" de "+c:"")})(e)}}onBold(t){this.quill.keyboard.verificarOperacaoTecladoPermitida()&&(this.quill.format("bold",t),this.formatacaoAlterada())}onItalic(t){this.quill.keyboard.verificarOperacaoTecladoPermitida()&&(this.quill.format("italic",t),this.formatacaoAlterada())}onScript(t){this.quill.keyboard.verificarOperacaoTecladoPermitida()&&(this.quill.format("script",t),this.formatacaoAlterada())}onOperacaoInvalida(){this.alertar("Opera\xE7\xE3o n\xE3o permitida.")}isDesmembramento(t,e,o){return(e+o).localeCompare(t)!==0}adicionarElemento(t){var e,o;const i=this.quill.linhaAtual,r=i.blotConteudo,n=(e=this.quill.inicioConteudoAtual)!==null&&e!==void 0?e:0,s=(o=n+r.tamanho)!==null&&o!==void 0?o:0;let u="",c="";if(t.index===n)u="",c=r.html;else if(t.index===s)u=r.html,c="";else{const p=s-t.index;u=this.quill.getConteudoHtmlParteLinha(r,0,r.tamanho-p),c=this.quill.getConteudoHtmlParteLinha(r,t.index-n,p)}const d=this.criarElemento(i.uuid,i.lexmlId,i.tipo,u,i.numero,i.hierarquia);if(this.isDesmembramento(r.htmlAnt,u,c)){const p=this.criarElemento(i.uuid,i.lexmlId,i.tipo,u+c,i.numero,i.hierarquia);le.dispatch(cu.execute(p))}le.dispatch(bl.execute(d,c))}async renumerarElemento(){var t,e;const o=this.quill.linhaAtual,i=o.blotConteudo.html,r=this.criarElemento((t=o.uuid)!==null&&t!==void 0?t:0,o.lexmlId,(e=o.tipo)!==null&&e!==void 0?e:"","",o.numero,o.hierarquia,o.descricaoSituacao,o.existeNaNormaAlterada);let n;if(!((x,w)=>{var _,I,k,C;const A=De(x,w);return A!==void 0&&((I=(_=w.hierarquia)===null||_===void 0?void 0:_.pai)===null||I===void 0?void 0:I.uuidAlteracao)!==void 0&&w.descricaoSituacao!==$.DISPOSITIVO_ORIGINAL&&w.descricaoSituacao!==$.DISPOSITIVO_SUPRIMIDO&&!(H(A)&&A.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO&&((k=zi(A))===null||k===void 0?void 0:k.numero)==="1"&&((C=zi(A))===null||C===void 0?void 0:C.situacao.descricaoSituacao)!==$.DISPOSITIVO_ADICIONADO)})(le.getState().elementoReducer.articulacao,r))return;const s=document.createElement("sl-dialog");document.body.appendChild(s),s.label="Informar numera\xE7\xE3o de dispositivo",s.addEventListener("sl-request-close",x=>{x.detail.source==="overlay"&&x.preventDefault()});const u=r.descricaoSituacao===$.DISPOSITIVO_ADICIONADO,c=document.createRange().createContextualFragment(`
      <div class="input-validation-required">
        <sl-input type="text" placeholder="" label="Numera\xE7\xE3o do dispositivo:" clearable></sl-input>
        <br/>
        <div id="dispositivoDeNorma">
            O dispositivo j\xE1 existe na norma a ser alterada?
            <sl-radio-group label="O dispositivo j\xE1 existe na norma a ser alterada?">
              <sl-radio-button name="existeNaNorma" id="existente" value="true">Sim</sl-radio-button>
              <sl-radio-button name="existeNaNorma" id="adicionado" value="false">N\xE3o</sl-radio-button>
            </sl-radio-group>
        </div>
      </div>
      <br/>
      <sl-alert variant="warning" closable class="alert-closable">
        <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
        <div class="erro"></div>
      </sl-alert>
      <sl-button slot="footer" variant="default">Cancelar</sl-button>
      <sl-button slot="footer" variant="primary">Ok</sl-button>
    `),d=c.querySelector("sl-input");var p;d.value=`${p=o.blotRotulo.rotulo,p.replace(/\./g,"").replace(/["“]/g,"").replace(/^Parte$/i,"").replace(/^Livro$/i,"").replace(/^Titulo$/i,"").replace(/^Capitulo$/i,"").replace(/^Secao$/i,"").replace(/^Subsecao$/i,"").replace(/^Artigo$/i,"").replace(/^Paragrafo$/i,"").replace(/^Inciso$/i,"").replace(/^Alinea$/i,"").replace(/^Item$/i,"").replace(/Art/i,"").replace(/§/i,"").replace(/§/i,"").replace(/[º]/i,"").replace(/[–-][/s]*$/,"").replace(/[)][/s]*$/,"").trim()}`;const a=c.getElementById("dispositivoDeNorma");if(r.existeNaNormaAlterada!==void 0&&(c.getElementById(r.existeNaNormaAlterada?"existente":"adicionado").checked=!0),u){const x=((w,_)=>{const I=De(w,_);return!!I&&Dp(I)})(le.getState().elementoReducer.articulacao,r);a.disabled=x,a.style.display=x?"none":"block",c.querySelector("#existente").checked=r.existeNaNormaAlterada}const l=c.querySelectorAll("sl-button"),h=l[0],f=l[1],m=c.querySelector(".erro"),g=c.querySelector("sl-alert");f.onclick=()=>{var x;v()&&(this.quill.focus(),s==null||s.hide(),s==null||s.remove(),((x=r.conteudo)===null||x===void 0?void 0:x.texto)!==i&&(r.conteudo.texto=i,le.dispatch(fg.execute(r))),le.dispatch(ro.execute(r,d.value.trim(),n==="true")))},h.onclick=()=>{this.quill.focus(),s==null||s.hide(),s==null||s.remove()};const v=()=>{if(a&&!a.disabled&&(document.querySelectorAll("sl-radio-button").forEach(x=>{console.log(),x.checked&&(n=x.value)}),u&&n===void 0)){const x="\xC9 necess\xE1rio informar se se trata de dispositivo existente na norma alterada";return m.innerText=x,g==null||g.show(),!1}return m.style.display="none",g==null||g.hide(),!0},y=()=>{const x=d.value;return/^\s*$/.test(x)?"A numera\xE7\xE3o n\xE3o pode ser vazia.":""},b=x=>{let w=y();w||!r.tipo||((_,I)=>{const k=_.split("-"),C=k[0],A=k.slice(1,k.length).join("-"),S=(Lg[I]||Ts)(C)&&C!=="0";return k.length===1?S:S&&Cl(A)})(d.value,r.tipo)||(w="Numera\xE7\xE3o inv\xE1lida."),m.innerText=w,w?g==null||g.show():g==null||g.hide(),f.disabled=Boolean(w),f.disabled||x.key==="Enter"&&f.click()};d.addEventListener("keyup",b),d.addEventListener("sl-clear",b),s.appendChild(c),f.disabled=Boolean(y()),s==null||s.show()}removerElementoSemTexto(t){var e,o;const i=this.quill.linhaAtual,r=this.criarElemento((e=i.uuid)!==null&&e!==void 0?e:0,i.lexmlId,(o=i.tipo)!==null&&o!==void 0?o:"","",i.numero,i.hierarquia);le.dispatch(wg.execute(r,t))}removerElemento(){const t=this.quill.linhaAtual,e=`Voc\xEA realmente deseja remover o dispositivo ${t.blotRotulo.rotulo}?`;this.confirmar(e,["Sim","N\xE3o"],o=>{var i,r;if(o.detail.closeResult==="Sim"){const n=this.criarElemento((i=t.uuid)!==null&&i!==void 0?i:0,t.lexmlId,(r=t.tipo)!==null&&r!==void 0?r:"","",t.numero,t.hierarquia);le.dispatch(lo.execute(n))}this.quill.focus()})}moverElemento(t){const e=this.quill.linhaAtual,o=e.blotConteudo.html,i=this.criarElemento(e.uuid,e.lexmlId,e.tipo,o,e.numero,e.hierarquia);t.key==="ArrowUp"?le.dispatch(li.execute(i)):t.key==="ArrowDown"&&le.dispatch(ai.execute(i))}transformarElemento(t){const e=this.quill.linhaAtual,o=e.blotConteudo.html,i=this.criarElemento(e.uuid,e.lexmlId,e.tipo,o,e.numero,e.hierarquia);t.key.toLowerCase()==="a"?le.dispatch(Zi(i,R.artigo.name)):t.key.toLowerCase()==="l"?le.dispatch(Zi(i,R.alinea.name)):t.key.toLowerCase()==="n"?le.dispatch(Zi(i,R.inciso.name)):t.key.toLowerCase()==="o"?le.dispatch(Zi(i,R.omissis.name)):t.key.toLowerCase()==="p"?le.dispatch(Zi(i,R.paragrafo.name)):t.key.toLowerCase()==="t"?le.dispatch(Zi(i,R.item.name)):Jp.keys.TAB&&le.dispatch(t.shiftKey?{type:"SHIFT_TAB",atual:i}:(r=>({type:"TAB",atual:r}))(i))}elementoSelecionado(t){var e;const o=this.quill.linhaAtual,i=this.criarElemento(t,o.lexmlId,(e=o.tipo)!==null&&e!==void 0?e:"","",o.numero,o.hierarquia);le.dispatch(vg.execute(i)),this.quill.processandoMudancaLinha=!1}undoRedoEstrutura(t){t==="undo"?le.dispatch({type:"UNDO"}):le.dispatch({type:"REDO"})}processarStateEvents(t){t==null||t.forEach(i=>{var r;switch(i.stateType){case j.DocumentoCarregado:this.destroiQuill(),this.inicializar(this.configEditor()),this.carregarArticulacao((r=i.elementos)!==null&&r!==void 0?r:[]);break;case j.InformarNorma:jv(i.elementos[0],this.quill,le,mg);break;case j.ElementoIncluido:this.inserirNovoElementoNoQuill(i.elementos[0],i.referencia,!0),this.inserirNovosElementosNoQuill(i,!0);break;case j.ElementoModificado:case j.ElementoRestaurado:this.atualizarQuill(i),this.montarMenuContexto(i);break;case j.ElementoSuprimido:this.atualizarSituacao(i),this.montarMenuContexto(i);break;case j.ElementoRemovido:this.removerLinhaQuill(i);break;case j.ElementoRenumerado:this.renumerarQuill(i);break;case j.ElementoValidado:this.atualizarMensagemQuill(i);break;case j.ElementoSelecionado:this.montarMenuContexto(i),this.atualizarMensagemQuill(i);break;case j.ElementoMarcado:this.marcarLinha(i);break;case j.SituacaoElementoModificada:this.atualizarSituacao(i),this.montarMenuContexto(i)}this.quill.limparHistory()});const e=[j.ElementoModificado,j.ElementoSuprimido,j.ElementoRestaurado,j.ElementoIncluido,j.ElementoRemovido,j.ElementoRenumerado],o=t==null?void 0:t.filter(i=>e.includes(i.stateType)).map(i=>i.stateType);o!=null&&o.length&&this.agendarEmissaoEventoOnChange("stateEvents")}marcarLinha(t){this.quill.desmarcarLinhaAtual(this.quill.linhaAtual);const e=t.elementos[0],o=this.quill.getLinha(e.uuid),i=this.quill.getIndex(o.blotConteudo);this.quill.setIndex(i,Quill.sources.SILENT),this.quill.atualizarLinhaCorrente(o),this.elementoSelecionado(o.uuid),t.moverParaFimLinha&&setTimeout(()=>{const r=this.quill.getSelection().index+this.quill.linhaAtual.blotConteudo.html.length;this.quill.setSelection(r,0,Quill.sources.USER)},0)}processarEscolhaMenu(t){var e,o,i,r;if(t==="Remover dispositivo")this.removerElemento();else if(t===ro.descricao)this.renumerarElemento();else{const n=this.quill.linhaAtual,s=this.criarElemento((e=n.uuid)!==null&&e!==void 0?e:0,n.lexmlId,(o=n.tipo)!==null&&o!==void 0?o:"","",n.numero,n.hierarquia);s.conteudo.texto=(i=n.blotConteudo.html)!==null&&i!==void 0?i:"",le.dispatch((r=t,Tl.filter(u=>u.descricao===r.trim())[0]).execute(s))}}inserirNovoElementoNoQuill(t,e,o){var i;const r=this.quill.getLinha(e.uuid);if(r){const n=Xr.criarContainerLinha(t);r.next?n.insertInto(this.quill.scroll,r.next):n.insertInto(this.quill.scroll);const s=le.getState().elementoReducer.modo===Tt.EMENDA_ARTIGO_ONDE_COUBER;if(((i=this.quill.linhaAtual)===null||i===void 0?void 0:i.blotConteudo.html)!==""||n.blotConteudo.html===""||s){if(o){this.quill.desmarcarLinhaAtual(this.quill.linhaAtual),this.quill.marcarLinhaAtual(n);try{this.quill.setIndex(this.quill.getIndex(n.blotConteudo),Quill.sources.SILENT)}catch{}}}else this.quill.linhaAtual.blotConteudo.htmlAnt=this.quill.linhaAtual.blotConteudo.html;this.quill.linhaAtual.descricaoSituacao=t.descricaoSituacao,this.quill.linhaAtual.existeNaNormaAlterada=t.existeNaNormaAlterada,this.quill.linhaAtual.setEstilo(t)}}inserirNovosElementosNoQuill(t,e){var o;const i=(o=t.elementos)!==null&&o!==void 0?o:[];for(let r=1;r<i.length;r++)this.inserirNovoElementoNoQuill(i[r],i[r-1],e)}atualizarSituacao(t){var e;let o;((e=t.elementos)!==null&&e!==void 0?e:[]).map(i=>{var r;o=this.quill.getLinha((r=i.uuid)!==null&&r!==void 0?r:0,o),o&&i.descricaoSituacao!==o.descricaoSituacao&&(o.descricaoSituacao=i.descricaoSituacao,o.setEstilo(i))})}atualizarQuill(t){var e;let o;((e=t.elementos)!==null&&e!==void 0?e:[]).map(i=>{var r,n,s,u,c;if(o=this.quill.getLinha((r=i.uuid)!==null&&r!==void 0?r:0,o),o){let d=!1;i.editavel!==o.editavel&&(o.editavel=i.editavel),i.rotulo!==o.blotRotulo.html&&(o.numero=(n=i.numero)!==null&&n!==void 0?n:"",o.blotRotulo.format(mt.blotName,i.rotulo)),i.nivel!==o.nivel&&(o.nivel=i.nivel,o.format(ft.blotName,i),d=!0),i.agrupador!==o.agrupador&&(o.agrupador=i.agrupador,o.blotRotulo.format(mt.formatoStyle,i),d||o.format(ft.blotName,i)),((s=i.conteudo)===null||s===void 0?void 0:s.texto)!==o.blotConteudo.html&&(o.blotConteudo.html=(c=(u=i.conteudo)===null||u===void 0?void 0:u.texto)!==null&&c!==void 0?c:""),i.descricaoSituacao!==o.descricaoSituacao&&(o.descricaoSituacao=i.descricaoSituacao,o.setEstilo(i)),i.existeNaNormaAlterada!==o.existeNaNormaAlterada&&(o.existeNaNormaAlterada=i.existeNaNormaAlterada),o.children.length===2&&o.children.tail.remove(),i.mensagens&&i.mensagens.length>0&&Xr.criarContainerMensagens(i).insertInto(o)}})}removerLinhaQuill(t){var e;let o;((e=t.elementos)!==null&&e!==void 0?e:[]).forEach(n=>{var s;o=this.quill.getLinha((s=n.uuid)!==null&&s!==void 0?s:0,o),o&&o.remove()});const i=this.quill.getLine(this.quill.getSelection(!0).index)[0].linha,r=this.quill.getIndex(i.blotConteudo);this.quill.setSelection(r,0,Quill.sources.SILENT),this.quill.marcarLinhaAtual(i)}renumerarQuill(t){var e;let o;((e=t.elementos)!==null&&e!==void 0?e:[]).map(i=>{var r;o=this.quill.getLinha((r=i.uuid)!==null&&r!==void 0?r:0,o),o&&o.blotRotulo.format(mt.blotName,i.rotulo)})}atualizarMensagemQuill(t){var e;let o;((e=t.elementos)!==null&&e!==void 0?e:[]).map(i=>{var r;o=this.quill.getLinha((r=i.uuid)!==null&&r!==void 0?r:0,o),o&&((o==null?void 0:o.children.length)===2&&o.children.tail.remove(),i.mensagens&&i.mensagens.length>0&&Xr.criarContainerMensagens(i).insertInto(o))})}montarMenuContexto(t){var e;const o=t.elementos?t.elementos[0]:new Mu,i=((e=o==null?void 0:o.acoesPossiveis)!==null&&e!==void 0?e:[]).filter(r=>Fg(r));if(i.length>0){this.quill.linhaAtual||this.marcarLinha(t);const r=new Io,n=new ti(this.quill.linhaAtual.containerDireito.alinhamentoMenu),s=u=>{this.processarEscolhaMenu(u),this.quill.focus()};new ei().insertInto(r),i.forEach(u=>{new oi(u,s).insertInto(n)}),n.insertInto(r),this.quill.linhaAtual.blotContainerDireito.remove(),r.insertInto(this.quill.linhaAtual.containerDireito)}}criarElemento(t,e,o,i,r,n,s,u){const c=new Mu;return c.uuid=t,c.lexmlId=e,c.tipo=o,c.numero=r,c.conteudo={texto:i},c.hierarquia=n,c.descricaoSituacao=s,c.existeNaNormaAlterada=u,c}inicializar(t){const e=this.getHtmlElement("lx-eta-editor"),o=this.getHtmlElement("lx-eta-buffer");qe.configurar(),this._quill=new qe(e,o,t),this.quill.on("selection-change",this.onSelectionChange),this.inscricoes.push(this.quill.keyboard.operacaoTecladoInvalida.subscribe(this.onOperacaoInvalida.bind(this))),this.inscricoes.push(this.quill.keyboard.adicionaElementoTeclaEnter.subscribe(this.adicionarElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.moveElemento.subscribe(this.moverElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.removeElemento.subscribe(this.removerElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.removeElementoSemTexto.subscribe(this.removerElementoSemTexto.bind(this))),this.inscricoes.push(this.quill.keyboard.renumeraElemento.subscribe(this.renumerarElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.transformaElemento.subscribe(this.transformarElemento.bind(this))),this.inscricoes.push(this.quill.undoRedoEstrutura.subscribe(this.undoRedoEstrutura.bind(this))),this.inscricoes.push(this.quill.elementoSelecionado.subscribe(this.elementoSelecionado.bind(this))),this.inscricoes.push(this.quill.observableSelectionChange.subscribe(this.atualizarTextoElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.onChange.subscribe(this.agendarEmissaoEventoOnChange.bind(this))),this.inscricoes.push(this.quill.clipboard.onChange.subscribe(this.agendarEmissaoEventoOnChange.bind(this))),e.addEventListener("rotulo",i=>{i.stopImmediatePropagation(),this.renumerarElemento()}),e.addEventListener("mensagem",i=>{var r,n;i.stopImmediatePropagation();const s=this.quill.linhaAtual;if(s)if(Di.RENUMERAR_DISPOSITIVO===((n=(r=i.detail)===null||r===void 0?void 0:r.mensagem)===null||n===void 0?void 0:n.descricao))this.renumerarElemento();else{const u=s.blotConteudo,c=this.criarElemento(s.uuid,s.lexmlId,s.tipo,u.html,s.numero,s.hierarquia);le.dispatch(gg.execute(c,i.detail.mensagem))}})}agendarEmissaoEventoOnChange(t){clearTimeout(this.timerOnChange),this.timerOnChange=setTimeout(()=>this.emitirEventoOnChange(t),1e3)}atualizarTextoElemento(t){var e,o,i;if(!((e=t==null?void 0:t.blotConteudo)===null||e===void 0)&&e.alterado){const r=this.criarElemento(t.uuid,t.lexmlId,t.tipo,(i=(o=t.blotConteudo)===null||o===void 0?void 0:o.html)!==null&&i!==void 0?i:"",t.numero,t.hierarquia);le.dispatch(cu.execute(r))}}alertaGlobalVerificaRenumeracao(t){var e,o;const i=this.criarElemento(t.uuid,t.lexmlId,t.tipo,(o=(e=t.blotConteudo)===null||e===void 0?void 0:e.html)!==null&&o!==void 0?o:"",t.numero,t.hierarquia),r=De(le.getState().elementoReducer.articulacao,i);if(r&&Y.verificaNecessidadeRenumeracaoRedacaoFinal([r])){const n={id:"alerta-global-renumeracao",tipo:"danger",mensagem:"Os r\xF3tulos apresentados servem apenas para o posicionamento correto do novo dispositivo no texto. Ser\xE3o feitas as renumera\xE7\xF5es necess\xE1rias no momento da consolida\xE7\xE3o das emendas.",podeFechar:!0};le.dispatch(Wa(n))}}alertaGlobalVerificaCorrelacao(){const t=document.querySelector("lexml-eta").getDispositivosEmenda()||[],e=Object.values(t).flat(1).map(o=>o.id);if([...new Set(e.map(o=>o.split("_").filter(i=>i.startsWith("art"))[0]))].length>1){const o={id:"alerta-global-correlacao",tipo:"info",mensagem:"Cada emenda somente pode referir-se a apenas um dispositivo, salvo se houver correla\xE7\xE3o entre dispositivos. Verifique se h\xE1 correla\xE7\xE3o entre os dispositivos emendados antes de submet\xEA-la.",podeFechar:!0};le.dispatch(Wa(o))}else le.getState().alertaReducer.alertas.some(o=>o.id==="alerta-global-correlacao")&&le.dispatch(th("alerta-global-correlacao"))}emitirEventoOnChange(t){this.atualizarTextoElemento(this.quill.linhaAtual),this.dispatchEvent(new CustomEvent("onchange",{bubbles:!0,composed:!0,detail:{origemEvento:t}})),this.quill.linhaAtual.descricaoSituacao==="Dispositivo Adicionado"&&this.alertaGlobalVerificaRenumeracao(this.quill.linhaAtual),this.alertaGlobalVerificaCorrelacao()}carregarArticulacao(t){setTimeout(()=>{this.quill.getLine(0)[0].remove(),t.forEach(e=>{Xr.criarContainerLinha(e).insertInto(this.quill.scroll),e.tipo===R.generico.tipo&&le.dispatch(Ep.execute(e))}),this.quill.limparHistory(),t.length>1&&setTimeout(()=>{const e=this.quill.getLinha(t[1].uuid);e!=null&&e.blotConteudo&&this.quill.setSelection(this.quill.getIndex(e==null?void 0:e.blotConteudo),0,Quill.sources.USER)},0),le.dispatch(Ap.execute())},0)}configEditor(){return{formats:["bold","italic","link","script"],modules:{toolbar:{container:"#lx-eta-barra-ferramenta",handlers:{bold:this.onBold.bind(this),italic:this.onItalic.bind(this),script:this.onScript.bind(this)}},history:{delay:0,maxStack:500,userOnly:!0}},theme:"snow"}}async confirmar(t,e,o){let i="";const r=document.createElement("sl-dialog");r.label="Confirma\xE7\xE3o",r.innerHTML=t+`
      <sl-button slot="footer" variant="default">N\xE3o</sl-button>
      <sl-button slot="footer" variant="primary">Sim</sl-button>
    `,document.body.appendChild(r),r.show();const n=document.querySelectorAll("sl-button"),s=n[0],u=n[1];s.onclick=()=>{i="N\xE3o",r==null||r.hide(),r==null||r.remove()},u.onclick=()=>{i="Sim",r==null||r.hide(),r==null||r.remove()},r.addEventListener("sl-request-close",c=>{c.detail.source==="overlay"&&c.preventDefault()}),r.addEventListener("sl-hide",c=>{c.detail.closeResult=i,o(c)})}alertar(t){const e=Object.assign(document.createElement("sl-alert"),{variant:"danger",closable:!0,duration:3e3,innerHTML:`
        <sl-icon name="exclamation-octagon" slot="icon"></sl-icon>
        ${t}
      `});document.body.append(e),e.toast()}quillNaoInicializado(t){var e;let o=[];const i=r=>{setTimeout(()=>{this.quill?r.length>0&&this.carregarArticulacao(r):i(r)},70)};if(t.elementoReducer.ui){const r=t.elementoReducer.ui.events.find(n=>n.stateType===j.DocumentoCarregado);o=(e=r==null?void 0:r.elementos)!==null&&e!==void 0?e:[]}i(o)}getHtmlElement(t){return this.querySelector(`#${t}`)}destroiQuill(){this.getHtmlElement("lx-eta-editor").innerHTML="",this.getHtmlElement("lx-eta-buffer").innerHTML="",this.quill&&(this.quill.off("selection-change",this.onSelectionChange),this.quill.destroi()),this._quill=void 0}};$u=ue([Ht("lexml-eta-editor")],$u);let zn=class extends vt{constructor(){super(...arguments),this.htmlAgrupador=()=>{var t,e,o;return Oe`<p class="rotulo">${this.elemento.rotulo}</p>
      <p class="texto-agrupador">${vs((o=(e=(t=this.elemento)===null||t===void 0?void 0:t.conteudo)===null||e===void 0?void 0:e.texto)!==null&&o!==void 0?o:"")}</p>`},this.htmlDispositivo=()=>{var t,e,o;return Oe`
      <p class="texto" style="${`padding-left: ${20*this.elemento.nivel}px;`}">
        <span class="rotulo">${this.elemento.rotulo}</span>
        ${vs((o=(e=(t=this.elemento)===null||t===void 0?void 0:t.conteudo)===null||e===void 0?void 0:e.texto)!==null&&o!==void 0?o:"")}
      </p>
    `}}render(){return Oe`
      <div class="box">
        <div class="conteudo">${this.elemento.agrupador?this.htmlAgrupador():this.htmlDispositivo()}</div>
      </div>
    `}};zn.styles=kn`
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
  `,ue([et({type:Object})],zn.prototype,"elemento",void 0),zn=ue([Ht("lexml-eta-elemento")],zn);let ba=class extends vt{render(){return Oe`
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
    `}};ba.styles=kn`
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
  `,ba=ue([Ht("lexml-eta-help")],ba);let ya=class extends vt{constructor(){super(),this.texto="",this.toolbarOptions=[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],["blockquote"],["undo","redo"],[{align:[]}],["clean"]],this.icons=Quill.import("ui/icons"),this.init=()=>{var t;this.container=document.querySelector("#editor-justificativa"),this.container&&(this.quill=new Quill(this.container,{formats:["bold","italic","underline","align","list","script","blockquote"],modules:{toolbar:{container:this.toolbarOptions,handlers:{undo:this.undo,redo:this.redo}},history:{delay:0,maxStack:500,userOnly:!0},clipboard:{}},placeholder:"",theme:"snow"}),this.setContent(this.texto),(t=this.quill)===null||t===void 0||t.on("text-change",this.updateTexto))},this.setContent=t=>{this.quill&&(this.quill.root.innerHTML=t.replace(/indent/g,"ql-indent").replace(/align-justify/g,"ql-align-justify").replace(/align-center/g,"ql-align-center").replace(/align-right/g,"ql-align-right"))},this.updateTexto=()=>{var t,e;this.texto=!((t=this.quill)===null||t===void 0)&&t.root.innerHTML?(e=this.quill)===null||e===void 0?void 0:e.root.innerHTML.replace(/ql-indent/g,"indent").replace(/ql-align-justify/g,"align-justify").replace(/ql-align-center/g,"align-center").replace(/ql-align-right/g,"align-right"):""},this.undo=()=>{var t;return(t=this.quill)===null||t===void 0?void 0:t.history.undo()},this.redo=()=>{var t;return(t=this.quill)===null||t===void 0?void 0:t.history.redo()},this.icons.undo=`<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
    <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
    </svg>`,this.icons.redo=`<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
    <path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
    </svg>`}update(t){super.update(t)}createRenderRoot(){return this}render(){return Oe`
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
    `}firstUpdated(){this.init()}};ue([et({type:String})],ya.prototype,"texto",void 0),ya=ue([Ht("lexml-emenda-justificativa")],ya);class zv{constructor(){this.dataUltimaModificacao=new Date().toISOString(),this.aplicacao="",this.versaoAplicacao="",this.modoEdicao=Qa.EMENDA,this.metadados={},this.proposicao=new Fv,this.colegiadoApreciador=new Uv,this.epigrafe=new Bv,this.componentes=[new Vv],this.comandoEmenda=new nh,this.justificativa="",this.local="",this.autoria=new Ml,this.opcoesImpressao=new Wv}}var Qa,Za;(function(t){t.EMENDA="emenda",t.EMENDA_ARTIGO_ONDE_COUBER="emendaArtigoOndeCouber"})(Qa||(Qa={}));class Fv{constructor(){this.urn="",this.sigla="",this.numero="",this.ano="",this.ementa="",this.identificacaoTexto=""}}class Uv{constructor(){this.siglaCasaLegislativa="CN",this.tipoColegiado="Plen\xE1rio"}}class Bv{constructor(){this.texto="",this.complemento=""}}class Vv{constructor(){this.urn="",this.articulado=!0,this.dispositivos=new oh}}class oh{constructor(){this.dispositivosSuprimidos=[],this.dispositivosModificados=[],this.dispositivosAdicionados=[]}}class ih{constructor(){this.tipo="",this.id=""}}class Hv extends ih{}class rh extends ih{}class Kv extends rh{}class nh{constructor(){this.comandos=[]}}class Gv{constructor(e,o){this.cabecalho=e,this.citacao=o}}(function(t){t.NAO_IDENTIFICADO="N\xE3o identificado",t.PARLAMENTAR="Parlamentar",t.COMISSAO="Comiss\xE3o",t.CASA_LEGISLATIVA="Casa Legislativa"})(Za||(Za={}));class Ml{constructor(){this.tipo=Za.PARLAMENTAR,this.imprimirPartidoUF=!0,this.quantidadeAssinaturasAdicionaisSenadores=0,this.quantidadeAssinaturasAdicionaisDeputados=0,this.parlamentares=[]}}class Wv{constructor(){this.imprimirBrasao=!0,this.textoCabecalho="",this.reduzirEspacoEntreLinhas=!1}}class Qv{constructor(){this.ultimoProcessado=void 0,this.adjacentesOmissis=[]}getTexto(e){e=e.filter(r=>r.pai.situacao.descricaoSituacao!==$.DISPOSITIVO_SUPRIMIDO),this.adjacentesOmissis=this.buscaDispositivosAdjacentesAsOmissis(e),e.push(...this.adjacentesOmissis),e.sort(Bt.compare);const o=Y.getArvoreDispositivosDeAlteracaoDeNorma(e),i=new Fe;return this.montaCitacaoComando(i,o),i.toString().replace(/(<\/p>)$/,"\u201D$1")}buscaDispositivosAdjacentesAsOmissis(e){const o=new Array;for(const i of e)if(ve(i)){const r=Y.getDispositivoAnteriorDireto(i);if(e.includes(r)||o.push(r),!Y.isFechaAspas(i)){const n=Y.getDispositivoPosteriorDireto(i);n&&!e.includes(n)&&o.push(n)}}return o}montaCitacaoComando(e,o){var i;const r=[...o.keys()][0];o=o.get(r);const n=(i=r.rotulo)===null||i===void 0?void 0:i.replace("\u201C",""),s=new _e("p").add("\u201C").add(new _e("Rotulo").add(n)).add(Y.getTextoDoDispositivoOuOmissis(r,!0));e.append(s.toString()),o.size>0&&(this.ultimoProcessado=r,this.writeDispositivoTo(e,o)),this.writeOmissisFinal(e,r)}writeDispositivoTo(e,o){const i=[...o.keys()];i.sort(Bt.compare);for(const r of i){const n=o.get(r),s=Y.getDispositivoAnteriorDireto(r);if(G(this.ultimoProcessado)&&!we(r)?we(s)||ve(r)||e.append(new _e("p").add(new _e("Omissis")).toString()):this.ultimoProcessado===s||ve(r)||s.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO||e.append(new _e("p").add(new _e("Omissis")).toString()),!we(r))if(r.situacao.descricaoSituacao!==$.DISPOSITIVO_ORIGINAL){const u=new _e("p").add(new _e("Rotulo").add(r.rotulo)).add(Y.getTextoDoDispositivoOuOmissis(r,!0));e.append(u.toString())}else if(this.hasFilhosPropostos(n)||this.adjacentesOmissis.includes(r)){const u=new _e("p");u.add(new _e("Rotulo").add(r.rotulo)),u.add(new _e("Omissis")),e.append(u.toString())}else e.append(new _e("Omissis").toString());this.ultimoProcessado=r,n&&n.size>0&&this.writeDispositivoTo(e,n)}}writeOmissisFinal(e,o){if(o.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO)return;let i=o,r=Y.getFilhosEstiloLexML(i);for(;r.length;)i=r[r.length-1],r=Y.getFilhosEstiloLexML(i);if(i.situacao.descricaoSituacao!==$.DISPOSITIVO_ORIGINAL||this.adjacentesOmissis.includes(i)&&!ve(i)){if(!Y.isFechaAspas(i)){const n=Y.getDispositivoPosteriorDireto(i);n&&ve(n)&&e.append(new _e("p").add(new _e("Omissis")).toString())}}else e.append(new _e("p").add(new _e("Omissis")).toString())}hasFilhosPropostos(e){if(!e||!e.size)return!1;const o=e;let i=!1;for(const[r,n]of o.entries()){if(r.situacao.descricaoSituacao!==$.DISPOSITIVO_ORIGINAL){i=!0;break}!i&&n&&(i=this.hasFilhosPropostos(n))}return i}}class sh{getTexto(e,o=!1){const i=new Fe,r=we(e)?e.pai.rotulo:e.rotulo,n=new _e("Rotulo").add(r==null?void 0:r.trim()),s=new _e("p").add("\u201C").add(n).add(Y.trataTextoParaCitacao(e,o));if(this.necessitaOmissis(e)){const u=new _e("p").add(new _e("Omissis")).add("\u201D");i.append(s.toString()),i.append(u.toString())}else s.add("\u201D"),i.append(s.toString());return i.toString()}necessitaOmissis(e){return this.temFilhoNaoSuprimido(e)&&!H(e)}temFilhoNaoSuprimido(e){for(const o of e.filhos)if(o.situacao.descricaoSituacao!==$.DISPOSITIVO_SUPRIMIDO)return!0;return!1}}class Zv{getTexto(e){const o=new Fe,i=new Array;eo(e,s=>{s.situacao.descricaoSituacao!==$.DISPOSITIVO_ORIGINAL&&i.push(s)}),i.sort(Bt.compare);const r=i.length,n=i.filter(s=>s.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO||ve(s)).length;if(r-n>0){const s=i[0];i.length!==1||G(s)?this.getCitacoesMultiplas(o,i):this.getCitacaoSimples(o,s)}return o.toString()}getCitacaoSimples(e,o){const i=new sh;e.append(i.getTexto(o,!0))}getCitacoesMultiplas(e,o){let i,r,n=new Array;for(const s of o)i=G(s)?s:El(s),i!==r&&(n.length&&this.getCitacaoMultipla(e,n),n=[i],r=i),n.includes(s)||n.push(s);n.length&&this.getCitacaoMultipla(e,n)}getCitacaoMultipla(e,o){const i=new Qv;e.append(i.getTexto(o))}}class Xv{constructor(){this.emAlteracao=!1}getTexto(e){let o=Y.getArvoreDispositivos(e);const i=new Fe,r=[...o.keys()][0];o=o.get(r);const n=new _e("p").add("\u201C").add(new _e("Rotulo").add(r.rotulo)).add(Y.getTextoDoDispositivoOuOmissis(r));return i.append(n.toString()),o.size&&(this.ultimoProcessado=r,this.writeDispositivoTo(i,o)),this.writeOmissisFinal(i,r),i.toString().replace(/(<\/p>(?:<\/Alteracao>)?)$/,"\u201D$1")}writeDispositivoTo(e,o){var i,r;const n=Array.from(o.keys());n.sort(Bt.compare);for(const s of n){const u=o.get(s);if(Ge(s)){e.append("<Alteracao>"),this.emAlteracao=!0,this.ultimoProcessado=s,u.size&&this.writeDispositivoTo(e,u),e.append("</Alteracao>");continue}if(we(s)){this.ultimoProcessado=s,u.size&&this.writeDispositivoTo(e,u);continue}const c=Y.getDispositivoAnteriorDireto(s);if(G(this.ultimoProcessado)&&!we(s)?we(c)||e.append(new _e("p").add(new _e("Omissis")).toString()):this.ultimoProcessado===c||this.ultimoProcessado.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO&&Eg(c,this.ultimoProcessado)||e.append(new _e("p").add(new _e("Omissis")).toString()),s.situacao.descricaoSituacao!==$.DISPOSITIVO_ORIGINAL||this.hasFilhosPropostos(u)){const d=G(s)?s.caput:s,p=(i=s.rotulo)===null||i===void 0?void 0:i.startsWith("\u201C"),a=this.emAlteracao?(r=s.rotulo)===null||r===void 0?void 0:r.replace("\u201C",""):s.rotulo,l=new _e("p");p&&l.add("\u2018"),l.add(new _e("Rotulo").add(a)).add(Y.getTextoDoDispositivoOuOmissis(d)),e.append(l.toString())}else e.append(new _e("p").add(new _e("Omissis")).toString());this.ultimoProcessado=s,u.size&&this.writeDispositivoTo(e,u)}}writeOmissisFinal(e,o){if(o.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO)return;let i=o;for(;i.filhos.length;)i=i.filhos[i.filhos.length-1];i.situacao.descricaoSituacao!==$.DISPOSITIVO_ORIGINAL||Np(i)||e.append(new _e("p").add(new _e("Omissis")).toString())}hasFilhosPropostos(e){if(!e.size)return!1;let o=!1;for(const[i,r]of e.entries()){if(i.situacao.descricaoSituacao!==$.DISPOSITIVO_ORIGINAL){o=!0;break}if(!o&&r.size&&(o=this.hasFilhosPropostos(r),o))break}return o}}class Yv{constructor(e){this.articulacao=e}getTexto(){const e=new Fe,o=this.getDispositivosParaCitacao(),i=o.length,r=o.filter(n=>n.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO).length;if(i-r>0){const n=o[0];o.length!==1||G(n)?this.getCitacoesMultiplas(e,o):e.append(new sh().getTexto(n))}return e.toString()}getDispositivosParaCitacao(){const e=Y.getDispositivosNaoOriginais(this.articulacao);e.sort(Bt.compare);const o=new Array;return e.forEach(i=>{Ge(i)?i.pai.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO&&o.push(i):H(i)?o.indexOf(i.pai)>=0&&o.push(i):Np(i)||o.push(i)}),o}getCitacoesMultiplas(e,o){let i,r,n=new Array;o.forEach(s=>{i=!G(s)&&!me(s)||H(s)?Ip(s):s,i!==r&&(n.length&&this.getCitacaoMultipla(e,n),n=[],n.push(i),r=i),n.indexOf(s)<0&&n.push(s)}),n.length&&this.getCitacaoMultipla(e,n)}getCitacaoMultipla(e,o){e.append(new Xv().getTexto(o))}}const ah=(t,e)=>{t.splice(t.indexOf(e),1)};class Kt{constructor(e){this.dispositivos=[],e&&this.add(e)}isSituacao(e){return!!this.dispositivos.length&&this.dispositivos[0].situacao.descricaoSituacao===e}isTipo(e){return!!this.dispositivos.length&&this.dispositivos[0].tipo===e}add(e){return!!this.podeAdicionarAoRange(e)&&(this.dispositivos.push(e),!0)}addInicio(e){this.dispositivos.splice(0,0,e)}isUltimo(e){return this.dispositivos.indexOf(e)===this.dispositivos.length-1}getPrimeiro(){return this.dispositivos[0]}getUltimo(){return this.dispositivos[this.dispositivos.length-1]}getQuantidadeDispositivos(){return this.dispositivos.length}getAnterior(e){if(!(e<1))return this.dispositivos[e-1]}getNumeracaoParaComandoEmenda(){let e=this.dispositivos[0].getNumeracaoParaComandoEmenda();return this.dispositivos.length>1&&(e+=" a "+this.getUltimo().getNumeracaoParaComandoEmenda()),e}print(e,o){this.isRotuloNecessario(o)?this.printRotuloInicio(e,o):e.append(this.dispositivos[0].getNumeracaoParaComandoEmenda()),this.printSeparadorProximoDispositivo(e,o),this.printRotuloFimSeExistir(e)}printRotuloFimSeExistir(e){this.dispositivos.length>=2&&e.append(this.dispositivos[this.dispositivos.length-1].getNumeracaoParaComandoEmenda())}printSeparadorProximoDispositivo(e,o){const i=this.getRangeDispositivosPosterior(o);this.dispositivos.length>=3?e.append(" a "):this.dispositivos.length!==2||i?this.dispositivos.length>1&&this.dispositivos.length<3&&i&&e.append(", "):e.append(" e ")}printRotuloInicio(e,o){const i=this.getRangeDispositivosPosterior(o);this.hasApenasUmDispositivo()&&!i||i&&!this.isMesmoTipoSituacao(i)?e.append(this.getRotuloCompletoSingular(this.dispositivos[0])):e.append(this.getRotuloCompletoPlural(this.dispositivos[0]))}isMesmoTipoSituacao(e){return e.isTipo(this.dispositivos[0].tipo)&&e.isSituacao(this.dispositivos[0].situacao.descricaoSituacao)}hasApenasUmDispositivo(){return this.dispositivos.length===1}isRotuloNecessario(e){const o=this.getRangeDispositivosAnterior(e);return!o||!o.isMesmoTipoSituacao(this)||!(!this.isSituacao($.DISPOSITIVO_ADICIONADO)||this.isMesmoPai(o))}isMesmoPai(e){return this.getPrimeiro().pai===e.getPrimeiro().pai}getRotuloCompletoSingular(e){const o=new Fe;e.situacao.descricaoSituacao!==$.DISPOSITIVO_ADICIONADO?o.append(e.artigoDefinidoSingular):o.append(" ");const i=e.getNumeracaoComRotuloParaComandoEmenda();return i.endsWith(".")?o.append(i.substring(0,i.indexOf("."))):o.append(i),o.toString()}getRotuloCompletoPlural(e){const o=new Fe;return e.situacao.descricaoSituacao!==$.DISPOSITIVO_ADICIONADO?o.append(e.artigoDefinidoPlural):o.append(" "),o.append(this.getTipoDispositivoPlural(e)),o.append(" "),o.append(e.getNumeracaoParaComandoEmenda()),o.toString()}getRangeDispositivosAnterior(e){const o=e.indexOf(this);if(o>0)return e[o-1]}getRangeDispositivosPosterior(e){if(e.length===1)return;const o=e.indexOf(this);return o>=0&&o<e.length-1?e[o+1]:void 0}getTipoDispositivoPlural(e){var o;return e.tipo===R.artigo.tipo?"arts.":e.tipo===R.paragrafo.tipo?"\xA7\xA7":((o=e.descricaoPlural)===null||o===void 0?void 0:o.toLocaleLowerCase())+""}podeAdicionarAoRange(e){if(this.isVazio())return!0;const o=this.getUltimo();return o.tipo===e.tipo&&!!Y.isMesmaSituacaoParaComandoEmenda(o,e)&&!(!G(e)&&e.pai!==o.pai)&&zi(o)===e&&Y.isAlteracaoIntegral(o)===Y.isAlteracaoIntegral(e)}isVazio(){return this.dispositivos.length===0}toString(){const e=new Fe;return this.dispositivos.forEach(o=>{e.append(" "),e.append(""+o.rotulo)}),e.toString()}getDispositivos(){return this.dispositivos}getDispositivo(e){return this.dispositivos[e]}}class Ei{constructor(){this.ranges=new Array,this.localizarArtigoEmAgrupador=!1,this.informarCaputDoDispositivo=!1}isVazio(){return this.ranges.length===0}add(e){this.ranges.push(e)}addInicio(e){this.ranges.unshift(e)}getQuantidadeRanges(){return this.ranges.length}getPrimeiroRange(){return this.ranges[0]}getPrimeiroDispositivo(){return this.ranges[0].getPrimeiro()}getUltimoDispositivo(){return this.ranges[this.ranges.length-1].getUltimo()}getRanges(){return this.ranges}setRanges(e){this.ranges=e}getRange(e){return this.ranges[e]}getTextoListaDeDispositivos(){const e=new Fe,o=this.ranges.length;let i=1;for(const r of this.ranges)i>1&&(i===o?e.append(" e "):e.append(", ")),e.append(r.getNumeracaoParaComandoEmenda()),i++;return e.toString()}static debug(e){const o=new Fe;for(const i of e)o.append("seq: "+i);console.log(o)}toString(){return this.ranges.toString()}remove(e){ah(this.ranges,e)}}class no{getSequencias(e){const o=this.getRanges(e);return this.agrupaRanges(o)}getRanges(e){let o=new Array,i=new Kt;for(const r of e)i.add(r)||(o.push(i),i=new Kt,i.add(r));return i.isVazio()||o.push(i),o=no.separaRangesDeDoisDispositivos(o),o}static separaRangesDeDoisDispositivos(e){const o=new Array;for(const i of e)i.getQuantidadeDispositivos()===2?(o.push(new Kt(i.getPrimeiro())),o.push(new Kt(i.getUltimo()))):o.push(i);return o}separaRangesDeDoisDispositivosEmSequencias(e){for(const o of e)o.setRanges(no.separaRangesDeDoisDispositivos(o.getRanges()))}agrupaRanges(e){const o=new Array;let i=new Ei;for(const r of e)i.isVazio()?(i.add(r),o.push(i)):this.isMesmaSequencia(i,r)?i.add(r):(i=new Ei,i.add(r),o.push(i));return o}isMesmaSequencia(e,o){const i=e.getPrimeiroDispositivo(),r=o.getUltimo();return Y.isMesmoTipoParaComandoEmenda(i,r)&&Y.isMesmaSituacaoParaComandoEmenda(i,r)&&(i.tipo===R.artigo.tipo||i.pai===r.pai)&&i.tipo!==R.omissis.tipo}separaDispositivosSeguidosDeOmissis(e){const o=new Array;for(const i of e)o.push(...this.separaDispositivosSeguidosDeOmissis2(i));return o}separaDispositivosSeguidosDeOmissis2(e){const o=new Array;let i=new Ei;o.push(i);let r=new Kt;i.add(r);for(const n of e.getRanges()){r.getQuantidadeDispositivos()>0&&(r=new Kt,i.add(r));for(const s of n.getDispositivos()){const u=ji(s);u&&u.tipo===R.omissis.tipo?(this.adicionaouDispositivos(i,r)&&(r.getQuantidadeDispositivos()===0&&i.remove(r),i=new Ei,o.push(i),r=new Kt,i.add(r)),i.informarCaputDoDispositivo=!0,r.add(s),i=new Ei,o.push(i),r=new Kt,i.add(r)):r.add(s)}}return r.getQuantidadeDispositivos()===0&&i.remove(r),i.getQuantidadeRanges()===0&&ah(o,i),this.separaRangesDeDoisDispositivosEmSequencias(o),o}adicionaouDispositivos(e,o){return e.getQuantidadeRanges()>1||o.getQuantidadeDispositivos()>0}}class fi{constructor(e){this.dispositivos=e}static compare(e,o){var i,r;return!((i=e.dispositivos)===null||i===void 0)&&i.length?!((r=o.dispositivos)===null||r===void 0)&&r.length?Bt.compare(e.dispositivos[0],o.dispositivos[0]):-1:1}}var Po;(function(t){t[t.NENHUM=0]="NENHUM",t[t.DEFINIDO=1]="DEFINIDO",t[t.DEFINIDO_COM_PREPOSICAO_A=2]="DEFINIDO_COM_PREPOSICAO_A"})(Po||(Po={}));class so{constructor(){this.artigoAntesDispositivo=Po.NENHUM}getTexto(e){const o=new Fe,i=e.length;let r=1;for(const n of e)r>1&&(r===i?o.append(" e "):o.append(", ")),n.informarCaputDoDispositivo?o.append(this.getReferenciaCaputDoDispositivo(n)):o.append(this.getTextoArtigoAntesSequencia(n)),o.append(this.getRotuloTipoDispositivo(n)),o.append(" "),o.append(n.getTextoListaDeDispositivos()),o.append(this.getRotuloPaisSequencia(n)),r++;return o.toString()}getReferenciaCaputDoDispositivo(e){const o=new Fe,i=e.getPrimeiroDispositivo();if(i.tipo===R.caput.tipo)return this.getTextoArtigoAntesSequencia(e);const r=Y.isSequenciaPlural(e);return o.append(this.getTextoArtigoAntesDispositivo(this.artigoAntesDispositivo,$p,r)),o.append(" caput "),e.getRange(0).getQuantidadeDispositivos()===1?o.append(i.pronomePossessivoSingular):o.append(i.pronomePossessivoPlural),o.toString()}getTextoArtigoAntesSequencia(e){const o=e.getPrimeiroDispositivo(),i=Y.isSequenciaPlural(e);return this.getTextoArtigoAntesDispositivo(this.artigoAntesDispositivo,o,i)}getTextoArtigoAntesDispositivo(e,o,i){switch(e){case Po.DEFINIDO:return i?o.artigoDefinidoPlural:o.artigoDefinidoSingular;case Po.DEFINIDO_COM_PREPOSICAO_A:return i?o.artigoDefinidoPrecedidoPreposicaoAPlural:o.artigoDefinidoPrecedidoPreposicaoASingular;default:return""}}getRotuloTipoDispositivo(e){const o=e.getPrimeiroDispositivo();return so.getRotuloTipoDispositivo(o,Y.isSequenciaPlural(e))}static getRotuloTipoDispositivo(e,o){return e.getNumeracaoParaComandoEmenda().indexOf("\xFAnico")>=0?"":o?G(e)?"arts.":ge(e)?"\xA7\xA7":String(e.descricaoPlural).toLocaleLowerCase():G(e)?e.situacao.descricaoSituacao!==$.DISPOSITIVO_MODIFICADO||Y.isAlteracaoIntegral(e)?"art.":"caput do art.":ge(e)?"\xA7":String(e.descricao).toLowerCase()}getRotuloPaisSequencia(e){const o=e.getPrimeiroDispositivo(),i=e.localizarArtigoEmAgrupador;return this.getRotuloPais(o,i)}getRotuloPais(e,o){var i;const r=new Fe;let n;for(;!Ni(e);){if(n=e.pai,n&&Ge(n)){if(e.tipo===R.omissis.tipo){const s=Y.getDispositivoAnteriorDireto(e);if(s.tipo!==R.alteracao.tipo)return r.append("ap\xF3s "),r.append(s.artigoDefinidoSingular),r.append(s.getNumeracaoComRotuloParaComandoEmenda()),r.append(this.getRotuloPais(s,o)),r.toString()}break}if(n&&!Ni(n)&&(!me(n)||G(e)&&o)){const s=H(e),u=!s&&e.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO,c=s&&!Y.isTextoOmitido(e)&&e.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO&&!eh.existeNaNormaAlterada(e);if(u||c)r.append(n.artigoDefinidoPrecedidoPreposicaoASingular);else if(ve(e)){const d=Y.getDispositivoAnteriorDireto(e),p=Y.getDispositivoPosteriorDireto(e);if(d===n&&p&&p.pai===n){const a=p.pronomePossessivoSingular+" "+((i=p.descricao)===null||i===void 0?void 0:i.toLowerCase())+" "+p.getNumeracaoParaComandoEmenda();r.append("antes "+a),r.append(n.pronomePossessivoSingular)}else if(!Te(d)||!d.pai)return r.append("ap\xF3s "),r.append(d.artigoDefinidoSingular),r.append(d.getNumeracaoComRotuloParaComandoEmenda()),r.append(this.getRotuloPais(d,o)),r.toString()}else r.append(n.pronomePossessivoSingular);r.append(n.getNumeracaoComRotuloParaComandoEmenda())}else if(G(e)&&Ni(n)&&o){const s=Y.getProximoAgrupador(e);s&&(r.append(" antes "),r.append(s.pronomePossessivoSingular),r.append(s.getNumeracaoComRotuloParaComandoEmenda()))}if(!n)break;e=n}return r.toString()}setArtigoAntesDispositivo(e){this.artigoAntesDispositivo=e}}class Jv extends fi{constructor(e,o){super(e),this.dispositivos=e,this.generoNormaAlterada=o}getTexto(e,o,i){const r=new Fe,n=new no().getSequencias(this.dispositivos);o||r.append(i?"; e ":"; "),r.append("acrescentar ");const s=new so;if(r.append(s.getTexto(n)),i){const u=n[n.length-1];r.append(" "),G(u.getPrimeiroDispositivo())?r.append(this.generoNormaAlterada.artigoDefinidoPrecedidoPreposicaoASingular):r.append(this.generoNormaAlterada.pronomePossessivoSingular),r.append(" ")}return Lo(r.toString())}}class e0 extends fi{constructor(e,o){super(e),this.dispositivos=e,this.generoNormaAlterada=o}getTexto(e,o,i){const r=new Fe,n=new no,s=n.separaDispositivosSeguidosDeOmissis(n.getSequencias(this.dispositivos));o||r.append(i?"; e ":"; "),r.append("modificar ");const u=new so;return u.setArtigoAntesDispositivo(Po.DEFINIDO),r.append(u.getTexto(s)),i&&(r.append(" "),r.append(this.generoNormaAlterada.pronomePossessivoSingular),r.append(" ")),Lo(r.toString())}}class t0 extends fi{constructor(e,o,i,r){super(e),this.dispositivos=e,this.alteracao=o,this.urnNormaAlterada=i,this.generoNormaAlterada=r}getTexto(e,o,i){const r=new Fe,n=new no().getSequencias(this.dispositivos),s=Y.isSequenciasPlural(n);o&&i?(r.append(s?"Suprimam-se ":"Suprima-se "),this.escreveDispositivoAlterado(r,this.alteracao.pai),r.append(" "),r.append(e.genero.pronomePossessivoSingular),r.append(" "),r.append(e.nome),r.append(" ")):(o||r.append(i?"; e ":"; "),r.append("suprimir "));const u=new so;return u.setArtigoAntesDispositivo(Po.DEFINIDO),r.append(u.getTexto(n)),i&&(r.append(" "),r.append(this.generoNormaAlterada.pronomePossessivoSingular),r.append(" "),o&&(r.append(fs(this.urnNormaAlterada)),r.append("."))),Lo(r.toString())}escreveDispositivoAlterado(e,o){e.append(o.pronomePossessivoSingular),e.append(so.getRotuloTipoDispositivo(o,!1)),e.append(" "),e.append(o.getNumeracaoParaComandoEmenda()),e.append(Y.getRotuloPais(o))}}class o0{constructor(e){this.alteracao=e}getTexto(e){const o=new Fe,i=Y.getDispositivosNaAlteracaoParaComando(this.alteracao),r=this.alteracao.base;if(!r)return"N\xE3o foi poss\xEDvel gerar o comando de emenda porque a norma alterada n\xE3o foi informada.";const n=(h=>{const f=ci(h);return ql(f.genero)})(r);let s=!1;const u=new Array,c=i.filter(h=>h.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO);c.length&&u.push(new t0(c,this.alteracao,r,n));const d=i.filter(h=>Y.getDescricaoSituacaoParaComandoEmenda(h)===$.DISPOSITIVO_MODIFICADO);d.length&&(u.push(new e0(d,n)),s=!0);const p=i.filter(h=>Y.getDescricaoSituacaoParaComandoEmenda(h)===$.DISPOSITIVO_ADICIONADO);p.length&&(u.push(new Jv(p,n)),s=!0),u.sort(fi.compare),s&&(o.append("Altere-se "),this.escreveDispositivoAlterado(o,this.alteracao.pai),o.append(" "),o.append(e.genero.pronomePossessivoSingular),o.append(" "),o.append(e.nome),o.append(" para "));let a=0;const l=u.length-1;return u.forEach(h=>{o.append(h.getTexto(e,a===0,a===l)),a++}),s&&(this.escreveLei(o,r),this.temCitacao(d,p)?o.append(", nos termos a seguir:"):o.append(".")),Lo(o.toString())}temCitacao(e,o){return!!e.length||!!o.find(i=>!ve(i))}escreveDispositivoAlterado(e,o){e.append(o.artigoDefinidoSingular),e.append(so.getRotuloTipoDispositivo(o,!1)),e.append(" "),e.append(o.getNumeracaoParaComandoEmenda()),e.append(Y.getRotuloPais(o))}escreveLei(e,o){e.append(fs(o))}}class i0 extends fi{constructor(e){super(e),this.dispositivos=e}getTexto(e,o,i){const r=new Fe;let n=new no().getSequencias(this.dispositivos);n=this.trataLocalizacaoArtigoEmAgrupador(n);const s=Y.isSequenciasPlural(n);o?r.append(s?"Acrescentem-se ":"Acrescente-se "):(r.append(i?"; e ":"; "),r.append(s?"acrescentem-se ":"acrescente-se "));const u=new so;if(r.append(u.getTexto(n)),i){const c=n[n.length-1];!G(c.getPrimeiroDispositivo())||c.localizarArtigoEmAgrupador?r.append(e.genero.pronomePossessivoSingular):r.append(e.genero.artigoDefinidoPrecedidoPreposicaoASingular),r.append(e.nome),r.append(o?", com a seguinte reda\xE7\xE3o:":", nos termos a seguir:")}return Lo(r.toString())}trataLocalizacaoArtigoEmAgrupador(e){const o=new Array;for(const i of e)G(i.getPrimeiroDispositivo())?o.push(...this.trataLocalizacaoArtigoAgrupadorSequencia(i)):o.push(i);return o}trataLocalizacaoArtigoAgrupadorSequencia(e){const o=new Array,i=new Array;for(const c of e.getRanges())i.push(...c.getDispositivos());let r=!1;for(const c of i)if(this.isInclusaoArtigoProximoAgrupador(c)){r=!0;break}if(!r)return o.push(e),o;let n=new Ei;n.localizarArtigoEmAgrupador=!0,o.push(n);let s,u=new Kt;n.add(u);for(const c of i)u.isVazio()||(c.pai!==s.pai?(n=new Ei,n.localizarArtigoEmAgrupador=!0,o.push(n),u=new Kt,n.add(u)):Y.getDispositivoIrmaoPosterior(s)!==c&&(u=new Kt,n.add(u))),u.add(c),s=c;for(const c of o)c.setRanges(no.separaRangesDeDoisDispositivos(c.getRanges()));return o}isInclusaoArtigoProximoAgrupador(e){return this.isInclusaoArtigoInicioAgrupador(e)||this.isInclusaoArtigoAntesAgrupador(e)}isInclusaoArtigoInicioAgrupador(e){const o=e.pai;return!(Ni(o)||!me(o))&&o.filhos.indexOf(e)===0}isInclusaoArtigoAntesAgrupador(e){const o=e.pai,i=Y.getDispositivoIrmaoPosterior(e);return!!i&&o!==i.pai}}class r0{constructor(e){this.dispositivos=e}getTexto(e){if(!this.dispositivos.length)return"";let o;const i=e.genero.contracaoEmArtigoDefinidoSingular+" "+e.nome;return o=this.dispositivos.length>1?"Acrescentem-se, onde couber, "+i+" os seguintes artigos:":"Acrescente-se, onde couber, "+i+" o seguinte artigo:",Lo(o)}}class n0 extends fi{constructor(e){super(e),this.dispositivos=e}getTexto(e,o,i){const r=new Fe,n=new no().getSequencias(this.dispositivos);o?(r.append("D\xEA-se "),i||r.append("nova reda\xE7\xE3o ")):(r.append(i?"; e ":"; "),r.append("d\xEA-se nova reda\xE7\xE3o "));const s=new so;return s.setArtigoAntesDispositivo(Po.DEFINIDO_COM_PREPOSICAO_A),r.append(s.getTexto(n)),i&&(r.append(" "+e.genero.pronomePossessivoSingular+" "+e.nome),r.append(o?" a seguinte reda\xE7\xE3o:":", nos termos a seguir:")),Lo(r.toString())}}class s0 extends fi{constructor(e){super(e),this.dispositivos=e}getTexto(e,o,i){const r=new Fe,n=new no().getSequencias(this.dispositivos),s=Y.isSequenciasPlural(n);o?r.append(s?"Suprimam-se ":"Suprima-se "):(r.append(i?"; e ":"; "),r.append(s?"suprimam-se ":"suprima-se "));const u=new so;return u.setArtigoAntesDispositivo(Po.DEFINIDO),r.append(u.getTexto(n)),i&&(r.append(" "+e.genero.pronomePossessivoSingular+" "+e.nome),r.append(o?".":", nos termos a seguir:")),Lo(r.toString())}}class a0{constructor(e){this.dispositivosEmenda=e}getTexto(e){let o="";const i=Y.getDispositivosComando(this.dispositivosEmenda),r=i.filter(a=>a.situacao instanceof Jo&&a.situacao.tipoEmenda===Tt.EMENDA_ARTIGO_ONDE_COUBER);if(r.length){if(r.length<i.length)throw new Error("Adi\xE7\xE3o de artigos onde couber e outras altera\xE7\xF5es na mesma emenda.");return new r0(r).getTexto(e)}const n=[],s=i.filter(a=>a.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO);s.length&&n.push(new s0(s));const u=i.filter(a=>a.situacao.descricaoSituacao===$.DISPOSITIVO_MODIFICADO);u.length&&n.push(new n0(u));const c=i.filter(a=>a.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO);c.length&&n.push(new i0(c)),n.sort(fi.compare);let d=0;const p=n.length-1;return n.forEach(a=>{o+=a.getTexto(e,d===0,d===p),d++}),o}}class l0{constructor(e,o){this.urn=e,this.articulacao=o}getComandoEmenda(){const e=new nh,o=Y.getDispositivosNaoOriginais(this.articulacao),i=this.getDispositivosRepresentativosDeCadaComando(o);if(i.sort(Bt.compare),!i.length)return e;const r=(n=>{const s=ci(n);let u=ql(s.genero),c="Projeto";return u===Mp&&(c=s.urn.startsWith("medida.provisoria")?"Medida Provis\xF3ria":"Proposta"),new Ig(c,u)})(this.urn);return i.forEach(n=>{let s,u,c;Te(n)?(s=new o0(n).getTexto(r),u=new Zv().getTexto(n)):(s=new a0(o).getTexto(r),u=new Yv(this.articulacao).getTexto(),c=this.getTextoComplemento(o));const d=new Gv(s,u);c&&(d.complemento=c),e.comandos.push(d)}),e.comandos.length>1&&(e.cabecalhoComum=this.montaCabecalhoComum(r,e.comandos.length),e.comandos.forEach((n,s)=>{n.rotulo=`Item ${s+1} \u2013`})),e}getDispositivosRepresentativosDeCadaComando(e){const o=[];let i=!1;return e.forEach(r=>{const n=We(r);n&&Ge(n)?o.includes(n)||n.pai.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO||n.pai.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO||o.push(n):i||(i=!0,o.push(r))}),o}montaCabecalhoComum(e,o){return`D\xEA-se nova reda\xE7\xE3o ${e.genero.artigoDefinidoPrecedidoPreposicaoASingular} ${e.nome} nos termos dos itens ${this.listarItens(o)} a seguir.`}listarItens(e){return Array(e).fill(0).map((o,i)=>i+1).join(", ").replace(/, (\d+?)$/," e $1")}getTextoComplemento(e){const o=e.filter(i=>!H(i)&&i.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO&&i.situacao.tipoEmenda!==Tt.EMENDA_ARTIGO_ONDE_COUBER&&i.pai.situacao.descricaoSituacao!==$.DISPOSITIVO_ADICIONADO);if(o.length&&Y.verificaNecessidadeRenumeracaoRedacaoFinal(o))return"Os dispositivos acima propostos e adjacentes dever\xE3o ser devidamente renumerados no momento da consolida\xE7\xE3o das emendas ao texto da proposi\xE7\xE3o."}}class c0{constructor(e,o,i){this.tipoEmenda=e,this.urn=o,this.articulacao=i}getDispositivosEmenda(){const e=new oh;return this.preencheDispositivos(e),e}preencheDispositivos(e){const o=Y.getDispositivosNaoOriginais(this.articulacao),i=o.filter(s=>s.situacao.descricaoSituacao===$.DISPOSITIVO_SUPRIMIDO&&s.pai.situacao.descricaoSituacao!==$.DISPOSITIVO_SUPRIMIDO);if(i.length)for(const s of i){const u=new Hv;u.tipo=this.getTipoDispositivoParaEmenda(s),u.id=s.id,u.rotulo=s.rotulo,e.dispositivosSuprimidos.push(u)}const r=o.filter(s=>s.situacao.descricaoSituacao===$.DISPOSITIVO_MODIFICADO);if(r.length)for(const s of r){const u=new rh;if(G(s)){const c=s.caput;u.tipo=this.getTipoDispositivoParaEmenda(c),u.id=c.id,u.texto=c.texto}else u.tipo=this.getTipoDispositivoParaEmenda(s),u.id=s.id,u.texto=s.texto;u.rotulo=s.rotulo,s.isDispositivoAlteracao&&this.preencheAtributosAlteracao(s,u),e.dispositivosModificados.push(u)}const n=o.filter(s=>s.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO&&!(s.pai.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO||we(s.pai)&&s.pai.pai.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO));if(n.length)for(const s of n){const u=this.criaDispositivoEmendaAdicionado(s);e.dispositivosAdicionados.push(u)}}criaDispositivoEmendaAdicionado(e,o=!0){var i,r,n;const s=new Kv;if(s.tipo=this.getTipoDispositivoParaEmenda(e),e.id||(e.id=ri(e)),s.id=e.id,we(e)||Ge(e)||ve(e)||(s.rotulo=e.rotulo),G(e)||Ge(e)||(s.texto=e.texto),o)if(we(e)||Ge(e))s.idPai=(i=e.pai)===null||i===void 0?void 0:i.id;else{const c=Y.getFilhosEstiloLexML(e.pai);e!==c[0]?s.idIrmaoAnterior=c[c.indexOf(e)-1].id:Ni(e.pai)||(s.idPai=(r=e.pai)===null||r===void 0?void 0:r.id)}if(Ge(e)){const c=e.base;c&&(s.urnNormaAlterada=c)}else e.isDispositivoAlteracao&&(s.existeNaNormaAlterada=(n=e.situacao)===null||n===void 0?void 0:n.existeNaNormaAlterada,this.preencheAtributosAlteracao(e,s));const u=Y.getFilhosEstiloLexML(e);return we(e)&&e.pai.alteracoes&&u.push(e.pai.alteracoes),u.length&&(s.filhos=[],u.forEach(c=>{(we(c)||Ge(c)||c.situacao.descricaoSituacao===$.DISPOSITIVO_ADICIONADO)&&s.filhos.push(this.criaDispositivoEmendaAdicionado(c,!1))})),s}getTipoDispositivoParaEmenda(e){return Te(e)?"Alteracao":e.tipo}preencheAtributosAlteracao(e,o){if(!ve(e)&&o.texto&&o.texto.indexOf(Lt)>=0&&(o.textoOmitido=!0),o.rotulo&&o.rotulo.indexOf("\u201C")>=0&&(o.abreAspas=!0,o.rotulo=o.rotulo.replace("\u201C","")),o.texto){const i=cs(o.texto),r=/”(?: ?(\(NR\)|\(AC\)))?$/.exec(i);if(r){const n=r[0];o.fechaAspas=!0,r.length===2&&(o.notaAlteracao=r[1]),o.texto=o.texto.replace(new RegExp(ur(n)),"")}}}}const Ds=(t,e)=>{var o;let i;if(i=me(t)?e.lXhier=[]:e.lXcontainersOmissis=[],G(t)){const r=$l(t.caput);u0(t,r.value),i.push(r),ju((o=t.filhos)===null||o===void 0?void 0:o.filter(n=>!we(n.pai)),i),Ds(t.caput,r.value)}else ju(t.filhos,i);return i},u0=(t,e)=>{var o,i,r;t.hasAlteracao()&&(e.alteracao={TYPE_NAME:"br_gov_lexml__1.Alteracao",base:"",id:"",content:[]},e.alteracao.base=(i=(o=t.alteracoes)===null||o===void 0?void 0:o.base)!==null&&i!==void 0?i:"",e.alteracao.id=(n=>{const s=[];return ms(n,s),s.join("_")+"_alt1"})(t.caput),(r=t.alteracoes.filhos)===null||r===void 0||r.forEach(n=>{const s=$l(n);e.alteracao.content.push(s),Ds(n,s.value)}))},ju=(t,e)=>{t==null||t.forEach(o=>{const i=$l(o);e.push(i),Ds(o,i.value)})},$l=t=>{const e={name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:t.tipo,prefix:"",key:`{http://www.lexml.gov.br/1.0}${t.tipo}`,string:`{http://www.lexml.gov.br/1.0}${t.tipo}`},value:{TYPE_NAME:"br_gov_lexml__1.DispositivoType"}};return d0(t,e.value),e},d0=(t,e)=>{e.href=we(t)?on(t.pai)+"_"+on(t):on(t),e.id=ri(t),t.rotulo&&/^["”“].*/.test(t.rotulo)?(e.abreAspas="s",e.rotulo=t.rotulo.substring(1)):we(t)||ve(t)||(e.rotulo=t.rotulo),we(t)&&/”.*(NR)/.test(t.texto)&&(e.fechaAspas="s",e.notaAlteracao="NR"),me(t)?e.nomeAgrupador={TYPE_NAME:"br_gov_lexml__1.GenInline",content:zu(t)}:G(t)||(t.texto===Lt?e.textoOmitido="s":e.p=[{TYPE_NAME:"br_gov_lexml__1.GenInline",content:zu(t)}])},zu=t=>{const e=/<a[^>]+href="(.*?)"[^>]*>(.*?)<\/a>/gi,o=[],i=t.texto.match(e);if(i)t.texto.startsWith(i[0])||o.push(t.texto.substring(0,t.texto.indexOf(i[0])));else{const r=t.texto.indexOf("\u201D (NR)");o.push(t.texto.substring(0,r===-1?void 0:r))}return i==null||i.forEach((r,n)=>{var s,u;const c=r.match(e)?r:"";o.push(p0(c!=null?c:""));const d=((s=t.texto)===null||s===void 0?void 0:s.indexOf(r))+r.length;if(d<t.texto.length-1){const p=i[n+1]?t.texto.indexOf(i[n+1]):t.texto.length;o.push((u=t.texto.substring(d,p))===null||u===void 0?void 0:u.replace(/strong>/gi,"b>").replace(/em>/gi,"i>"))}}),o},p0=t=>{var e;const o=t.match(/href="(.*?)"*>/i),i=o&&o[1]?o[1]:"",r=t.match(/<a[^>]+href=".*?"[^>]*>(.*?)<\/a>/);return{name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:"span",prefix:"",key:"{http://www.lexml.gov.br/1.0}span",string:"{http://www.lexml.gov.br/1.0}span"},value:{TYPE_NAME:"br_gov_lexml__1.GenInline",href:i,content:r&&r[1]?[(e=r[1])===null||e===void 0?void 0:e.trim()]:[""]}}};let jl=!1;const Fu=(t,e=!1)=>{var o,i;if(jl=e,!(!((o=t==null?void 0:t.value)===null||o===void 0)&&o.projetoNorma))throw new Error("N\xE3o se trata de um documento lexml v\xE1lido");return rt(rt(rt({classificacao:!((i=t.value)===null||i===void 0)&&i.projetoNorma.norma?Tt.NORMA:Tt.PROJETO,tipo:ci(Rs(t))},h0(t)),f0(t)),m0(t.value.projetoNorma.norma?t.value.projetoNorma.norma:t.value.projetoNorma.projeto))},an=t=>t==null?void 0:t.replace(/[\n]/g,"").trim(),Rs=t=>{var e,o,i;return(i=(o=(e=t==null?void 0:t.value)===null||e===void 0?void 0:e.metadado)===null||o===void 0?void 0:o.identificacao)===null||i===void 0?void 0:i.urn},h0=t=>({urn:Rs(t)}),f0=t=>{var e,o,i,r,n,s,u,c,d,p,a,l,h,f,m,g;const v=(s=(n=(r=(i=(o=(e=t==null?void 0:t.value)===null||e===void 0?void 0:e.projetoNorma)===null||o===void 0?void 0:o.norma)===null||i===void 0?void 0:i.parteInicial)===null||r===void 0?void 0:r.epigrafe)===null||n===void 0?void 0:n.content[0])!==null&&s!==void 0?s:"",y=uh((p=(d=(c=(u=t==null?void 0:t.value)===null||u===void 0?void 0:u.projetoNorma)===null||c===void 0?void 0:c.norma)===null||d===void 0?void 0:d.parteInicial)===null||p===void 0?void 0:p.ementa.content),b=(g=(m=(f=(h=(l=(a=t==null?void 0:t.value)===null||a===void 0?void 0:a.projetoNorma)===null||l===void 0?void 0:l.norma)===null||h===void 0?void 0:h.parteInicial)===null||f===void 0?void 0:f.preambulo)===null||m===void 0?void 0:m.p[0].content[0])!==null&&g!==void 0?g:"";return{epigrafe:an(v),ementa:an(y),preambulo:an(b)}},m0=t=>({articulacao:g0(t.articulacao)}),g0=t=>{const e=Rl();return ln(e,t.lXhier),e},ln=(t,e)=>{t&&e&&(e==null||e.forEach(o=>{var i,r,n,s,u,c,d,p,a,l,h,f,m,g,v,y;let b;const x=(i=o.value)===null||i===void 0?void 0:i.notaAlteracao,w=((r=o.value)===null||r===void 0?void 0:r.fechaAspas)!==void 0?x?`\u201D (${x})`:"\u201D (NR)":"";((n=o.name)===null||n===void 0?void 0:n.localPart)==="Caput"?(((s=o.value)===null||s===void 0?void 0:s.abreAspas)==="s"?(b.rotulo="\u201C"+((u=o.value)===null||u===void 0?void 0:u.rotulo),b.cabecaAlteracao=!0,b.notaAlteracao=x):!((c=o.value)===null||c===void 0)&&c.rotulo&&(b.rotulo=o.value.rotulo,b.createNumeroFromRotulo(b.rotulo)),t.texto=!((d=o.value)===null||d===void 0)&&d.textoOmitido?Lt:an(ch(o))+w,t.caput.href=(p=o.value)===null||p===void 0?void 0:p.href,t.caput.id=(a=o.value)===null||a===void 0?void 0:a.id,Uu(t,(l=o.value)===null||l===void 0?void 0:l.alteracao),ln(t.caput,(h=o.value)===null||h===void 0?void 0:h.lXcontainersOmissis)):((f=o.name)===null||f===void 0?void 0:f.localPart)==="alteracao"?(Uu(t,o),ln(t.caput,(m=o.value)===null||m===void 0?void 0:m.lXcontainersOmissis)):(b=lh(t,o),ln(b,(v=(g=o.value)===null||g===void 0?void 0:g.lXhier)!==null&&v!==void 0?v:(y=o.value)===null||y===void 0?void 0:y.lXcontainersOmissis))}))},Uu=(t,e)=>{var o;e&&(Ll(t),t.alteracoes.id=e.id,t.alteracoes.base=e.base,jl&&(t.alteracoes.situacao=new No),(o=e.content)===null||o===void 0||o.forEach(i=>{var r,n,s,u;const c=lh(t.alteracoes,i);c.isDispositivoAlteracao=!0,c.rotulo="\u201C"+((r=i.value)===null||r===void 0?void 0:r.rotulo),ln(c,(s=(n=i.value)===null||n===void 0?void 0:n.lXhier)!==null&&s!==void 0?s:(u=i.value)===null||u===void 0?void 0:u.lXcontainersOmissis)}))},lh=(t,e)=>{var o,i,r,n,s,u,c,d,p;const a=he(t,(o=e.name)===null||o===void 0?void 0:o.localPart),l=(i=e.value)===null||i===void 0?void 0:i.notaAlteracao,h=((r=e.value)===null||r===void 0?void 0:r.fechaAspas)!==void 0?l?`\u201D (${l})`:"\u201D (NR)":"";return ve(a)||(((n=e.value)===null||n===void 0?void 0:n.abreAspas)==="s"?(a.rotulo="\u201C"+((s=e.value)===null||s===void 0?void 0:s.rotulo),a.cabecaAlteracao=!0,a.notaAlteracao=l):a.rotulo=(u=e.value)===null||u===void 0?void 0:u.rotulo,a.createNumeroFromRotulo(a.rotulo)),a.href=(c=e.value)===null||c===void 0?void 0:c.href,a.id=(d=e.value)===null||d===void 0?void 0:d.id,jl&&(a.situacao=new No,G(a)&&(a.caput.situacao=new No)),a.texto=!((p=e.value)===null||p===void 0)&&p.textoOmitido?Lt:an(ch(e))+h,a},ch=t=>{var e,o,i,r,n;let s="";return!((e=t.value)===null||e===void 0)&&e.nomeAgrupador?(o=t.value.nomeAgrupador.content[0])!==null&&o!==void 0?o:"":((n=(r=(i=t.value)===null||i===void 0?void 0:i.p)===null||r===void 0?void 0:r.map(u=>u))===null||n===void 0||n.map(u=>u.content).forEach(u=>s+=uh(u)),s.replace(/b>/gi,"strong>").replace(/i>/gi,"em>"))},uh=t=>{let e="";return t==null||t.forEach(o=>{var i;o.value?e+=`<a href="${(i=o.value).href}"> ${i.content[0]} </a>`:e+=o}),e},Bu={name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:"LexML",prefix:"",key:"{http://www.lexml.gov.br/1.0}LexML",string:"{http://www.lexml.gov.br/1.0}LexML"},value:{TYPE_NAME:"br_gov_lexml__1.LexML",metadado:{TYPE_NAME:"br_gov_lexml__1.Metadado",identificacao:{TYPE_NAME:"br_gov_lexml__1.Identificacao",urn:""}},projetoNorma:{TYPE_NAME:"br_gov_lexml__1.ProjetoNorma",norma:{TYPE_NAME:"br_gov_lexml__1.HierarchicalStructure",parteInicial:{TYPE_NAME:"br_gov_lexml__1.ParteInicial",epigrafe:{TYPE_NAME:"br_gov_lexml__1.GenInline",id:"epigrafe",content:[""]},ementa:{TYPE_NAME:"br_gov_lexml__1.GenInline",id:"ementa",content:[""]},preambulo:{TYPE_NAME:"br_gov_lexml__1.TextoType",id:"preambulo",p:[{TYPE_NAME:"br_gov_lexml__1.GenInline",content:[""]}]}},articulacao:{TYPE_NAME:"br_gov_lexml__1.Articulacao",lXhier:[{name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:"Artigo",prefix:"",key:"{http://www.lexml.gov.br/1.0}Artigo",string:"{http://www.lexml.gov.br/1.0}Artigo"},value:{TYPE_NAME:"br_gov_lexml__1.DispositivoType",id:"art1",rotulo:"Art. 1\xBA",lXcontainersOmissis:[{name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:"Caput",prefix:"",key:"{http://www.lexml.gov.br/1.0}Caput",string:"{http://www.lexml.gov.br/1.0}Caput"},value:{TYPE_NAME:"br_gov_lexml__1.DispositivoType",id:"art1_cpt",p:[{TYPE_NAME:"br_gov_lexml__1.GenInline",content:[""]}]}}]}}]}}}}},v0=Oe`
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
`;let Br=class extends qn(le)(vt){constructor(){super(...arguments),this.modo="",this.projetoNorma={},this._timerLoadEmenda=0}createRenderRoot(){return this}getDispositivosEmenda(){const t=this.modo;if(t!==Tt.EMENDA&&t!==Tt.EMENDA_ARTIGO_ONDE_COUBER)return;const e=this.projetoNorma.value.metadado.identificacao.urn,o=le.getState().elementoReducer.articulacao;return new c0(t,e,o).getDispositivosEmenda()}getComandoEmenda(){const t=this.projetoNorma.value.metadado.identificacao.urn,e=le.getState().elementoReducer.articulacao;return new l0(t,e).getComandoEmenda()}getProjetoAtualizado(){const t=rt({},this.projetoNorma),e=(o=le.getState().elementoReducer.articulacao,{TYPE_NAME:"br_gov_lexml__1.Articulacao",lXhier:Ds(o,{articulacao:{}})});var o;return t.value.projetoNorma[t.value.projetoNorma.norma?"norma":"projeto"].articulacao.lXhier=e.lXhier,t}update(t){(this.hasChangedProjetoNorma(t)||this.hasChangedModo(t))&&(this.loadProjetoNorma(),document.querySelector("lexml-eta-articulacao").style.display="block"),this.dispositivosEmenda&&this.hasChangedEmenda(t)&&this.loadEmenda(),super.update(t)}hasChangedProjetoNorma(t){return t.has("projetoNorma")&&t.get("projetoNorma")!==void 0}hasChangedModo(t){return t.has("modo")&&t.get("modo")!==void 0}hasChangedEmenda(t){return t.has("dispositivosEmenda")&&t.get("dispositivosEmenda")}loadProjetoNorma(){var t,e,o,i,r;let n;if(this.projetoNorma&&this.projetoNorma.value||(this.projetoNorma=Bu),this.modo===Tt.EMENDA_ARTIGO_ONDE_COUBER){const u=(t=Rs(this.projetoNorma))!==null&&t!==void 0?t:"";n=Fu(Bu,!0),n.urn=u;const c=n.articulacao.artigos[0];c.rotulo="Art.",c.numero="1",c.id="art1";const d=new Jo;d.tipoEmenda=Tt.EMENDA_ARTIGO_ONDE_COUBER,c.situacao=d,!((o=(e=this.dispositivosEmenda)===null||e===void 0?void 0:e.dispositivosAdicionados)===null||o===void 0)&&o.length&&n.articulacao.removeFilho(n.articulacao.filhos[0])}else n=Fu(this.projetoNorma,this.modo===Tt.EMENDA);var s;(r=(i=document.querySelector("lexml-emenda"))===null||i===void 0?void 0:i.querySelector("sl-tab"))===null||r===void 0||r.click(),le.dispatch((s=n.articulacao,{type:"ABRIR_ARTICULACAO",classificacao:this.modo,articulacao:s})),le.dispatch({type:"LIMPAR_ALERTAS"})}loadEmenda(){var t;if(this.dispositivosEmenda&&(clearInterval(this._timerLoadEmenda),this._timerLoadEmenda=window.setTimeout(()=>{le.dispatch(hg.execute(this.dispositivosEmenda))},1e3),Y.verificaNecessidadeRenumeracaoRedacaoFinal((t=this.dispositivosEmenda)===null||t===void 0?void 0:t.dispositivosAdicionados))){const e={id:"alerta-global-renumeracao",tipo:"danger",mensagem:"Os r\xF3tulos apresentados servem apenas para o posicionamento correto do novo dispositivo no texto. Ser\xE3o feitas as renumera\xE7\xF5es necess\xE1rias no momento da consolida\xE7\xE3o das emendas.",podeFechar:!0};le.dispatch(Wa(e))}}render(){return Oe`
      ${v0}
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
    `}};ue([et({type:String})],Br.prototype,"modo",void 0),ue([et({type:Object})],Br.prototype,"projetoNorma",void 0),ue([et({type:Object})],Br.prototype,"dispositivosEmenda",void 0),Br=ue([Ht("lexml-eta")],Br);const b0=kn`
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
    overflow-y: auto;
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
`,Fn=new class{constructor(){this.identificacao="",this.nome="",this.sexo="M",this.siglaPartido="",this.siglaUF="",this.siglaCasaLegislativa="CD",this.cargo=""}};function Vu(t=200){return function(e,o,i){return{get(){const r=(...n)=>{let s=0;const u=()=>{clearInterval(s),this._isProcessandoValidacao?s=window.setTimeout(()=>u(),t):i.value.apply(this,n)};u()};return Object.defineProperty(this,o,{value:r,configurable:!0,writable:!0}),r}}}}let $t=class extends vt{constructor(){super(...arguments),this._nomesAutocomplete=[],this._podeIncluirParlamentar=!0,this._parlamentaresAutocomplete=[],this._exibirTemplateTipoAutoria=!1,this._timerValidacao=0,this._isProcessandoValidacao=!1,this._isProcessandoMovimentacao=!1,this._lastIndexAutoCompleted=-1}set parlamentares(t){const e=this._parlamentaresAutocomplete;this._parlamentaresAutocomplete=t,this._nomesAutocomplete=t.map(o=>o.nome),this.requestUpdate("parlamentares",e)}get parlamentares(){return this._parlamentaresAutocomplete}set autoria(t){const e=this._autoriaOriginal;this._autoriaOriginal=t,this._autoria=t?uo(rt({},t),{parlamentares:[...t.parlamentares]}):new Ml,this._autoria.parlamentares.length||(this._autoria.parlamentares=[rt({},Fn)]),this._podeIncluirParlamentar=this._isAllAutoresOk(),this.requestUpdate("autoria",e)}get autoria(){return this._autoriaOriginal}getAutoriaAtualizada(){return uo(rt({},this._autoria),{parlamentares:this._autoria.parlamentares.filter(t=>t.identificacao)})}render(){var t;return Oe`
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
            <input type="checkbox" id="chk-exibir-partido-uf" ?checked=${(t=this._autoria)===null||t===void 0?void 0:t.imprimirPartidoUF} @input=${e=>this._atualizarExibirPartidoUF(e)} />
            Imprimir partido e UF para os signatários
          </label>
        </div>
      </div>
    `}_getTipoAutoriaTemplate(){var t,e;return this._exibirTemplateTipoAutoria?Oe`
          <fieldset class="autoria-label--tipo-autoria">
            <legend>Tipo de autoria</legend>
            <div class="control">
              <label class="radio">
                <input type="radio" id="opt-parlamentar" name="tipoAutoria" value="Parlamentar" ?checked=${((t=this._autoria)===null||t===void 0?void 0:t.tipo)==="Parlamentar"} />
                Parlamentar
              </label>
              <label class="radio">
                <input type="radio" id="opt-comissao" name="tipoAutoria" value="Comissão" ?checked=${((e=this._autoria)===null||e===void 0?void 0:e.tipo)==="Comiss\xE3o"} />
                Comissão
              </label>
            </div>
          </fieldset>
        `:Oe`<div></div>`}_getParlamentaresTemplate(){var t;return Oe`
      <div class="autoria-grid autoria-labels">
        <div class="autoria-grid--col1"><div class="autoria-header">Parlamentar</div></div>
        <div class="autoria-grid--col2"><div class="autoria-header">Cargo</div></div>
        <div class="autoria-grid--col3"><div class="autoria-buttons"></div></div>
      </div>
      ${(t=this._autoria)===null||t===void 0?void 0:t.parlamentares.map((e,o)=>this._getParlamentarAutocompleteTemplate(o))}
    `}_getParlamentarAutocompleteTemplate(t){var e;return Oe`
      <div class="autoria-grid">
        <div class="autoria-grid--col1">
          <label for="defaultInput" class="autoria-label">Parlamentar</label>
          <lexml-autocomplete
            class="lexml-autocomplete"
            .items=${this._nomesAutocomplete}
            value=${this._autoria.parlamentares[t].nome}
            @input=${o=>this._validarNomeParlamentar(o,t)}
            @blur=${o=>this._validarNomeParlamentar(o,t)}
            @autocomplete=${o=>this._atualizarParlamentar(o,t)}
            @keyup=${o=>this._handleKeyUp(o,t)}
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
            .value=${(e=this._autoria.parlamentares[t].cargo)!==null&&e!==void 0?e:""}
            @input=${o=>this._atualizarCargo(o,t)}
            @keyup=${o=>this._handleKeyUp(o,t)}
          />
        </div>

        <div class="autoria-grid--col3">
          <div class="autoria-buttons">
            <button class="autoria-button" id="paraBaixo" aria-label="Para baixo" title="Para baixo" @click=${()=>this._moverParlamentar(t,1)}>
              <i class="autoria-icon icon-down"></i>
              <span class="sr-only">Para baixo</span>
            </button>
            <button class="autoria-button" id="paraBaixo" aria-label="Para cima" title="Para cima" @click=${()=>this._moverParlamentar(t,-1)}>
              <i class="autoria-icon icon-up"></i>
              <span class="sr-only">Para cima</span>
            </button>
            <button class="autoria-button" id="paraBaixo" aria-label="Excluir" title="Excluir" @click=${()=>this._excluirParlamentar(t)}>
              <i class="autoria-icon icon-delete"></i>
              <span class="sr-only">Exluir</span>
            </button>
          </div>
        </div>
      </div>
    `}_getAssinaturasAdicionaisTemplate(){return Oe`
      <div>
        <div class="assinaturas-adicionais">
          <label for="num-assinaturas-adicionais-senadores" class="assinaturas-adicionais-label">Quantidade de assinaturas adicionais de Senadores</label>
          <input
            type="text"
            id="num-assinaturas-adicionais-senadores"
            class="autoria-input"
            aria-label="Assinaturas Adicionais Senadores"
            .value=${this._autoria.quantidadeAssinaturasAdicionaisSenadores.toString()}
            @input=${t=>this._atualizarQtdAssinaturasAdicionaisSenadores(t)}
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
            @input=${t=>this._atualizarQtdAssinaturasAdicionaisDeputados(t)}
          />
        </div>
      </div>
    `}updated(){this._isProcessandoMovimentacao=!1}_isAllAutoresOk(){return this._autoria.parlamentares.every(t=>t.identificacao)}_incluirNovoParlamentar(){this._autoria.parlamentares=((t,e)=>{const o=[...t];return o.push(e),o})(this._autoria.parlamentares,rt({},Fn)),this._podeIncluirParlamentar=!1,setTimeout(()=>this._autocompletes[this._autoria.parlamentares.length-1].focus(),200)}_moverParlamentar(t,e){this._autoria.parlamentares=((o,i,r)=>{const n=i+r;if(n<0||n>=o.length)return o;const s=[...o];return s.splice(n,0,s.splice(i,1)[0]),s})(this._autoria.parlamentares,t,e),this.requestUpdate()}_excluirParlamentar(t){this._autoria.parlamentares=((e,o)=>{const i=[...e];return i.splice(o,1),i})(this._autoria.parlamentares,t),this._autoria.parlamentares.length||(this._autoria.parlamentares=[rt({},Fn)]),this._podeIncluirParlamentar=this._isAllAutoresOk(),this.requestUpdate()}_validarNomeParlamentar(t,e){this._isProcessandoValidacao=!0;const o=t.type==="blur";o||clearInterval(this._timerValidacao),this._timerValidacao=window.setTimeout(()=>{var i;const r=this._autocompletes[e],n=this._autoria.parlamentares[e].cargo,s=(i=r.value)!==null&&i!==void 0?i:"",u=new RegExp("^"+s.normalize("NFD").replace(Sp,"")+"$","i"),c=this.parlamentares.find(p=>p.nome.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(u))||uo(rt({},Fn),{nome:o?"":s}),d=!!c.identificacao;c.cargo=o&&!d?"":n,this._autoria.parlamentares[e]=rt({},c),this._podeIncluirParlamentar=d&&this._isAllAutoresOk(),this._isProcessandoValidacao=!1},t.type==="blur"?200:0)}_atualizarParlamentar(t,e){const o=this.parlamentares.find(i=>i.nome===t.detail.value);if(o){const{cargo:i}=this._autoria.parlamentares[e];this._autoria.parlamentares[e]=uo(rt({},o),{cargo:i})}this._podeIncluirParlamentar=!!o&&this._isAllAutoresOk(),t.target.focus(),this._lastIndexAutoCompleted=e,this.requestUpdate()}_atualizarCargo(t,e){this._autoria.parlamentares[e].cargo=t.target.value}_atualizarQtdAssinaturasAdicionaisSenadores(t){this._autoria.quantidadeAssinaturasAdicionaisSenadores=Number(t.target.value)}_atualizarQtdAssinaturasAdicionaisDeputados(t){this._autoria.quantidadeAssinaturasAdicionaisDeputados=Number(t.target.value)}_atualizarExibirPartidoUF(t){this._autoria.imprimirPartidoUF=t.target.checked}_handleKeyUp(t,e){t.ctrlKey||t.altKey||t.shiftKey?!t.ctrlKey||t.altKey||t.shiftKey||(t.key==="ArrowUp"?this._isProcessandoMovimentacao||(this._isProcessandoMovimentacao=!0,this._moverParlamentar(e,-1),this._focarAutocompleteOuCargo(t.target,e,-1)):t.key==="ArrowDown"&&(this._isProcessandoMovimentacao||(this._isProcessandoMovimentacao=!0,this._moverParlamentar(e,1),this._focarAutocompleteOuCargo(t.target,e,1)))):t.key==="Enter"&&this._podeIncluirParlamentar&&e!==this._lastIndexAutoCompleted?(this._btnNovoParlamentar.click(),this._lastIndexAutoCompleted=-1):["ArrowUp","ArrowDown"].includes(t.key)&&this._autoria.parlamentares[e].identificacao&&this._focarAutocompleteOuCargo(t.target,e,t.key==="ArrowUp"?-1:1)}_focarAutocompleteOuCargo(t,e,o){const i=t.tagName==="LEXML-AUTOCOMPLETE"?this._autocompletes:this._inputCargos,r=e+o;r<0||r>=i.length||setTimeout(()=>i[r].focus(),0)}_handleClickAutoComplete(){window.setTimeout(()=>this._lastIndexAutoCompleted=-1,0)}};$t.styles=[b0],ue([ki("#btnNovoParlamentar")],$t.prototype,"_btnNovoParlamentar",void 0),ue([au("input#tex-cargo")],$t.prototype,"_inputCargos",void 0),ue([au("lexml-autocomplete")],$t.prototype,"_autocompletes",void 0),ue([as()],$t.prototype,"_nomesAutocomplete",void 0),ue([as()],$t.prototype,"_podeIncluirParlamentar",void 0),ue([et({type:Array})],$t.prototype,"parlamentares",null),ue([et({type:Object})],$t.prototype,"autoria",null),ue([Vu()],$t.prototype,"_moverParlamentar",null),ue([Vu()],$t.prototype,"_excluirParlamentar",null),$t=ue([Ht("lexml-autoria")],$t);let Xi=class extends vt{constructor(){super(...arguments),this.items=[],this.opened=!1,this.maxSuggestions=10,this._suggestions=[],this._bound={},this._blur=!1,this._mouseEnter=!1}render(){return Oe`
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
          cursor: pointer;
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
        ${this._suggestions.map(t=>Oe`<li @click=${()=>this.autocomplete(t)}>${t}</li>`)}
      </ul>
    `}get contentElement(){if(this._inputEl)return this._inputEl;if(!this.hasUpdated)return;const t=this.shadowRoot.getElementById("dropdown-input").assignedElements();return this._inputEl=t.length?t[0]:this.shadowRoot.getElementById("defaultInput"),this._inputEl}get value(){return this.contentElement&&this.contentElement.value}set value(t){this.contentElement?this.contentElement.value=t:this._tempValue=t}firstUpdated(){this._suggestionEl=this.shadowRoot.getElementById("suggestions"),this._suggestionEl.style.width=`${this.contentElement.getBoundingClientRect().width}px`,this._bound.onKeyDown=this._handleKeyDown.bind(this),this._bound.onKeyUp=this._handleKeyUp.bind(this),this._bound.onFocus=this._handleFocus.bind(this),this._bound.onBlur=this._handleBlur.bind(this),this.contentElement.addEventListener("keydown",this._bound.onKeyDown),this.contentElement.addEventListener("keyup",this._bound.onKeyUp),this.contentElement.addEventListener("focus",this._bound.onFocus),this.contentElement.addEventListener("blur",this._bound.onBlur),this._tempValue!==void 0&&(this.contentElement.value=this._tempValue)}disconnectedCallback(){this.contentElement&&(this.contentElement.removeEventListener("keydown",this._bound.onKeyDown),this.contentElement.removeEventListener("keyup",this._bound.onKeyUp),this.contentElement.removeEventListener("focus",this._bound.onFocus),this.contentElement.removeEventListener("blur",this._bound.onBlur))}focus(t){this.contentElement&&this.contentElement.focus(t)}updated(t){t.has("opened")&&this.opened&&this._suggestionEl.childElementCount&&(this._highlightedEl=this._suggestionEl.children[0],this._highlightedEl.classList.add("active"))}open(){this._suggestionEl.style.width==="0px"&&(this._suggestionEl.style.width=`${this.contentElement.getBoundingClientRect().width}px`),this._suggestions.length&&(this.opened=!0)}close(){this.opened=!1,this._highlightedEl=null}suggest(t){this._suggestions=t||[],this._suggestions.length>1||this._suggestions.length===1&&this._suggestions[0]!==this.contentElement.value?this.open():this.close(),this.requestUpdate()}autocomplete(t){this.contentElement.value=t,this.close(),this.dispatchEvent(new CustomEvent("autocomplete",{detail:{value:t},composed:!0,bubbles:!0}))}_highlightPrev(){this._highlightedEl&&this._highlightedEl.previousElementSibling&&(this._highlightedEl.classList.remove("active"),this._highlightedEl=this._highlightedEl.previousElementSibling,this._highlightedEl.classList.add("active"))}_highlightNext(){this._highlightedEl&&this._highlightedEl.nextElementSibling&&(this._highlightedEl.classList.remove("active"),this._highlightedEl=this._highlightedEl.nextElementSibling,this._highlightedEl.classList.add("active"))}_handleKeyDown(t){t.key!=="ArrowUp"&&t.key!=="ArrowDown"||(t.preventDefault(),t.stopPropagation())}_handleKeyUp(t){var e,o;switch(t.key){case"ArrowUp":!((e=this._highlightedEl)===null||e===void 0)&&e.previousElementSibling&&(t.preventDefault(),t.stopPropagation(),this._highlightPrev());break;case"ArrowDown":!((o=this._highlightedEl)===null||o===void 0)&&o.nextElementSibling&&(t.preventDefault(),t.stopPropagation(),this._highlightNext());break;case"Enter":this._highlightedEl&&this._highlightedEl.click();break;default:if(this.items.length){const{value:i}=this.contentElement,r=i.normalize("NFD").replace(Sp,"");this.suggest(this._findSuggetions(r))}}}_findSuggetions(t,e=this.maxSuggestions){if(!t)return[];let o=this._filterStartWith(t,e);return o.length<this.maxSuggestions&&(o=[...o,...this._filterContains(t,this.maxSuggestions-o.length).filter(i=>!o.includes(i))]),o}_filterStartWith(t,e=this.maxSuggestions){const o=new RegExp("^"+t,"gi");return t&&this.items.filter(i=>i.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(o)).slice(0,e)||[]}_filterContains(t,e=this.maxSuggestions){const o=new RegExp(t,"gi");return t&&this.items.filter(i=>i.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(o)).slice(0,e)||[]}_handleFocus(){this._blur=!1,this._suggestions.length>1&&this.open()}_handleBlur(){this._blur=!0,setTimeout(()=>this.close(),200),this._suggestions=[]}_handleItemMouseEnter(){this._mouseEnter=!0}_handleItemMouseLeave(){this._mouseEnter=!1,this._blur&&setTimeout(()=>this.close(),500)}};ue([et({type:Array})],Xi.prototype,"items",void 0),ue([et({type:Boolean,reflect:!0})],Xi.prototype,"opened",void 0),ue([et({type:Number})],Xi.prototype,"maxSuggestions",void 0),ue([et({type:String})],Xi.prototype,"value",null),Xi=ue([Ht("lexml-autocomplete")],Xi);let Yi=class extends vt{render(){return Oe`
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
    `}getCurrentDate(){return new Date().toLocaleDateString().split("/").reverse().join("-")}setDate(){this.inputData&&(this.data=this.inputData.value,this.optData.checked=!0)}};Yi.styles=kn`
    .lexml-data {
      display: block;
      /* height: 100%; */
      /* padding: 5px 10px; */
      /* margin: 0px 5px; */
      font-size: 1em;
      max-width: 700px;
    }
  `,ue([ki("#input-data")],Yi.prototype,"inputData",void 0),ue([ki("#opt-data")],Yi.prototype,"optData",void 0),ue([et({type:String})],Yi.prototype,"data",void 0),Yi=ue([Ht("lexml-data")],Yi);var y0=Qe`
  ${st}

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
`,Pt=class extends Ve{constructor(){super(...arguments),this.localize=new Cr(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.preventIndicatorTransition(),this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(e=>!["aria-labelledby","aria-controls"].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(e=>e.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((t,e)=>{var o;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),e.unobserve(t[0].target))}).observe(this.tabGroup)})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}show(t){const e=this.tabs.find(o=>o.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}getAllTabs(t=!1){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(e=>t?e.tagName.toLowerCase()==="sl-tab":e.tagName.toLowerCase()==="sl-tab"&&!e.disabled)}getAllPanels(){return[...this.body.querySelector("slot").assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const e=t.target.closest("sl-tab");(e==null?void 0:e.closest("sl-tab-group"))===this&&e!==null&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){const e=t.target.closest("sl-tab");if((e==null?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&e!==null&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const o=document.activeElement;if((o==null?void 0:o.tagName.toLowerCase())==="sl-tab"){let i=this.tabs.indexOf(o);t.key==="Home"?i=0:t.key==="End"?i=this.tabs.length-1:["top","bottom"].includes(this.placement)&&t.key==="ArrowLeft"||["start","end"].includes(this.placement)&&t.key==="ArrowUp"?i--:(["top","bottom"].includes(this.placement)&&t.key==="ArrowRight"||["start","end"].includes(this.placement)&&t.key==="ArrowDown")&&i++,i<0&&(i=this.tabs.length-1),i>this.tabs.length-1&&(i=0),this.tabs[i].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[i],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&Ma(this.tabs[i],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}setActiveTab(t,e){if(e=Be({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const o=this.activeTab;this.activeTab=t,this.tabs.map(i=>i.active=i===this.activeTab),this.panels.map(i=>{var r;return i.active=i.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Ma(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(o&&fe(this,"sl-tab-hide",{detail:{name:o.panel}}),fe(this,"sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(o=>o.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,o=t.clientHeight,i=this.getAllTabs(!0),r=i.slice(0,i.indexOf(t)).reduce((n,s)=>({left:n.left+s.clientWidth,top:n.top+s.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.transform=`translateX(${r.left}px)`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${o}px`,this.indicator.style.transform=`translateY(${r.top}px)`}}preventIndicatorTransition(){const t=this.indicator.style.transition;this.indicator.style.transition="none",requestAnimationFrame(()=>{this.indicator.style.transition=t})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.panels=this.getAllPanels(),this.syncIndicator()}render(){return ye`
      <div
        part="base"
        class=${bt({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?ye`
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

          ${this.hasScrollControls?ye`
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
    `}};Pt.styles=y0,T([Le(".tab-group")],Pt.prototype,"tabGroup",2),T([Le(".tab-group__body")],Pt.prototype,"body",2),T([Le(".tab-group__nav")],Pt.prototype,"nav",2),T([Le(".tab-group__indicator")],Pt.prototype,"indicator",2),T([Gt()],Pt.prototype,"hasScrollControls",2),T([z()],Pt.prototype,"placement",2),T([z()],Pt.prototype,"activation",2),T([z({attribute:"no-scroll-controls",type:Boolean})],Pt.prototype,"noScrollControls",2),T([z()],Pt.prototype,"lang",2),T([Ke("noScrollControls",{waitUntilFirstUpdate:!0})],Pt.prototype,"updateScrollControls",1),T([Ke("placement",{waitUntilFirstUpdate:!0})],Pt.prototype,"syncIndicator",1),Pt=T([ot("sl-tab-group")],Pt);var x0=0;function dh(){return++x0}var w0=Qe`
  ${st}

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

  .tab${ht}:not(.tab--disabled) {
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
`,go=class extends Ve{constructor(){super(...arguments),this.localize=new Cr(this),this.attrId=dh(),this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}handleCloseClick(){fe(this,"sl-close")}render(){return this.id=this.id.length>0?this.id:this.componentId,ye`
      <div
        part="base"
        class=${bt({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        role="tab"
        aria-disabled=${this.disabled?"true":"false"}
        aria-selected=${this.active?"true":"false"}
        tabindex=${this.disabled||!this.active?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?ye`
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
    `}};go.styles=w0,T([Le(".tab")],go.prototype,"tab",2),T([z({reflect:!0})],go.prototype,"panel",2),T([z({type:Boolean,reflect:!0})],go.prototype,"active",2),T([z({type:Boolean})],go.prototype,"closable",2),T([z({type:Boolean,reflect:!0})],go.prototype,"disabled",2),T([z()],go.prototype,"lang",2),go=T([ot("sl-tab")],go);var _0=Qe`
  ${st}

  :host {
    --padding: 0;

    display: block;
  }

  .tab-panel {
    border: solid 1px transparent;
    padding: var(--padding);
  }
`,Vr=class extends Ve{constructor(){super(...arguments),this.attrId=dh(),this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId}render(){return this.style.display=this.active?"block":"none",ye`
      <div part="base" class="tab-panel" role="tabpanel" aria-hidden=${this.active?"false":"true"}>
        <slot></slot>
      </div>
    `}};Vr.styles=_0,T([z({reflect:!0})],Vr.prototype,"name",2),T([z({type:Boolean,reflect:!0})],Vr.prototype,"active",2),Vr=T([ot("sl-tab-panel")],Vr);var A0=Qe`
  ${st}

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
`,Ji=class extends Ve{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return ye`
      <span
        part="base"
        class=${bt({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Ji.styles=A0,T([z({reflect:!0})],Ji.prototype,"variant",2),T([z({type:Boolean,reflect:!0})],Ji.prototype,"pill",2),T([z({type:Boolean,reflect:!0})],Ji.prototype,"pulse",2),Ji=T([ot("sl-badge")],Ji);let jt=class extends qn(le)(vt){constructor(){super(),this.modo="",this.projetoNorma={},this.existeObserverEmenda=!1,this.totalAlertas=0,this.autoria=new Ml,this.parlamentares=[],this.getParlamentares().then(t=>this.parlamentares=t)}async getParlamentares(){return(await(await fetch("https://emendas-api.herokuapp.com/parlamentares")).json()).map(t=>({identificacao:t.id,nome:t.nome,sexo:t.sexo,siglaPartido:t.siglaPartido,siglaUF:t.siglaUF,siglaCasaLegislativa:t.siglaCasa}))}montarColegiadoApreciador(t,e){return{siglaCasaLegislativa:"CN",tipoColegiado:"Comiss\xE3o",siglaComissao:`CMMPV ${t}/${e}`}}montarLocalFromColegiadoApreciador(t){return t.tipoColegiado==="Comiss\xE3o"?"Sala da comiss\xE3o":"Sala das sess\xF5es"}montarEmendaBasicaFromProjetoNorma(t,e){const o=new zv;o.modoEdicao=e;const i=Rs(this.projetoNorma);return o.componentes[0].urn=i,o.proposicao={urn:i,sigla:qg(i),numero:Pn(i),ano:Cg(i),ementa:t.value.projetoNorma.norma.parteInicial.ementa.content[0],identificacaoTexto:""},o}getEmenda(){const t=this.montarEmendaBasicaFromProjetoNorma(this.projetoNorma,this.modo);return t.componentes[0].dispositivos=this._lexmlEta.getDispositivosEmenda(),t.comandoEmenda=this._lexmlEta.getComandoEmenda(),t.justificativa=this._lexmlJustificativa.texto,t.autoria=this._lexmlAutoria.getAutoriaAtualizada(),t.data=this._lexmlData.data,t.colegiadoApreciador=this.montarColegiadoApreciador(t.proposicao.numero,t.proposicao.ano),t.local=this.montarLocalFromColegiadoApreciador(t.colegiadoApreciador),t}setEmenda(t){this.modo=t.modoEdicao,this._lexmlEta.dispositivosEmenda=t.componentes[0].dispositivos,this.autoria=t.autoria,this._lexmlJustificativa.setContent(t.justificativa),this._lexmlData.data=t.data}createRenderRoot(){return this}updated(){(this==null?void 0:this.ajustarAltura())&&this.existeObserverEmenda!==!0&&this.observarAltura();const t=document.querySelector("#sl-tab-4");t==null||t.addEventListener("focus",e=>{e.stopImmediatePropagation();const o=e.target.querySelector("sl-badge");o&&(o.pulse=!1)})}pesquisarAlturaParentElement(t){if(t.parentElement===null)return 0;{const e=getComputedStyle(this).getPropertyValue("--min-height").replace("px","");return t.scrollHeight>=e?t.scrollHeight:this.pesquisarAlturaParentElement(t.parentElement)}}ajustarAltura(t){var e,o;let i=t!==void 0?t:this.pesquisarAlturaParentElement(this);const r=(o=(e=document.querySelector("sl-tab-group"))===null||e===void 0?void 0:e.shadowRoot)===null||o===void 0?void 0:o.querySelector(".tab-group__nav-container"),n=r==null?void 0:r.scrollHeight;return!!(n&&(i=i-n-2,i>0))&&(this==null||this.style.setProperty("--height",i+"px"),this==null||this.style.setProperty("--overflow","hidden"),!0)}observarAltura(){const t=new ResizeObserver(e=>{for(const o of e)o.contentBoxSize&&this.ajustarAltura(o.contentBoxSize[0].blockSize)});this.existeObserverEmenda=!0,t.observe(this)}render(){return Oe`
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
          <div class="badge-pulse" id="contadorAvisos">${this.totalAlertas>0?Oe` <sl-badge variant="danger" pill pulse>${this.totalAlertas}</sl-badge> `:""}</div>
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
    `}};ue([et({type:String})],jt.prototype,"modo",void 0),ue([et({type:Object})],jt.prototype,"projetoNorma",void 0),ue([et({type:Boolean})],jt.prototype,"existeObserverEmenda",void 0),ue([et({type:Number})],jt.prototype,"totalAlertas",void 0),ue([as()],jt.prototype,"autoria",void 0),ue([as()],jt.prototype,"parlamentares",void 0),ue([ki("lexml-eta")],jt.prototype,"_lexmlEta",void 0),ue([ki("lexml-emenda-justificativa")],jt.prototype,"_lexmlJustificativa",void 0),ue([ki("lexml-autoria")],jt.prototype,"_lexmlAutoria",void 0),ue([ki("lexml-data")],jt.prototype,"_lexmlData",void 0),jt=ue([Ht("lexml-emenda")],jt);var E0=Qe`
  ${st}

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
`,er=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Yt=class extends Ve{constructor(){super(...arguments),this.hasSlotController=new qr(this,"icon","suffix"),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,xr(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xr(this,"sl-after-hide")}async toast(){return new Promise(t=>{er.parentElement===null&&document.body.append(er),er.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{er.removeChild(this),t(),er.querySelector("sl-alert")===null&&er.remove()},{once:!0})})}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){fe(this,"sl-show"),this.duration<1/0&&this.restartAutoHide(),await Zo(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=_o(this,"alert.show");await xo(this.base,t,e),fe(this,"sl-after-show")}else{fe(this,"sl-hide"),clearTimeout(this.autoHideTimeout),await Zo(this.base);const{keyframes:t,options:e}=_o(this,"alert.hide");await xo(this.base,t,e),this.base.hidden=!0,fe(this,"sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return ye`
      <div
        part="base"
        class=${bt({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?ye`
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
    `}};Yt.styles=E0,T([Le('[part="base"]')],Yt.prototype,"base",2),T([z({type:Boolean,reflect:!0})],Yt.prototype,"open",2),T([z({type:Boolean,reflect:!0})],Yt.prototype,"closable",2),T([z({reflect:!0})],Yt.prototype,"variant",2),T([z({type:Number})],Yt.prototype,"duration",2),T([Ke("open",{waitUntilFirstUpdate:!0})],Yt.prototype,"handleOpenChange",1),T([Ke("duration")],Yt.prototype,"handleDurationChange",1),Yt=T([ot("sl-alert")],Yt),wo("alert.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}}),wo("alert.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});let Un=class extends qn(le)(vt){constructor(){super(...arguments),this.alertas=[]}stateChanged(t){this.alertas=t.alertaReducer.alertas}getAlertIcon(t){return t==="success"?Oe`<sl-icon slot="icon" name="check2-circle"></sl-icon>`:t==="warning"?Oe`<sl-icon slot="icon" name="exclamation-triangle"></sl-icon>`:t==="danger"?Oe`<sl-icon slot="icon" name="exclamation-octagon"></sl-icon>`:Oe`<sl-icon slot="icon" name="info-circle"></sl-icon>`}limparAlertas(){le.dispatch({type:"LIMPAR_ALERTAS"})}updated(t){var e,o,i;if(t.has("alertas")){const r=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelectorAll("sl-alert");r==null||r.forEach(u=>{u.addEventListener("sl-after-hide",c=>{le.dispatch(th(c.target.id))})});const n=document.querySelector("lexml-emenda");n.totalAlertas=this.alertas.length;const s=((o=t.get("alertas"))===null||o===void 0?void 0:o.length)||0;if(n.totalAlertas>s){const u=(i=document.querySelector("#contadorAvisos"))===null||i===void 0?void 0:i.querySelector("sl-badge");u&&(u.pulse=!0)}}}render(){return Oe`
      ${function*(t,e){if(t!==void 0){let o=0;for(const i of t)yield e(i,o++)}}(this.alertas,t=>Oe`${t.podeFechar?Oe` <sl-alert variant="${t.tipo}" id="${t.id}" open closable class="alert-closable"> ${this.getAlertIcon(t.tipo)} ${t.mensagem} </sl-alert> `:Oe` <sl-alert variant="${t.tipo}" id="${t.id}" open> ${this.getAlertIcon(t.tipo)} ${t.mensagem} </sl-alert> `}`)}
    `}};Un.styles=kn`
    sl-alert {
      --box-shadow: var(--sl-shadow-x-large);
      margin: 20px;
    }
  `,ue([et({type:Array})],Un.prototype,"alertas",void 0),Un=ue([Ht("lexml-eta-alertas")],Un);const ph=qh(zh);ph.use(Ch()).use(Uh);ph.mount("#app");export{dr as _,C0 as a,I0 as b,k0 as c,q0 as d,Lh as g,Rh as i,P0 as s,Xa as u};
