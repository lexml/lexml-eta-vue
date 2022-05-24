var zd=Object.defineProperty,Bd=Object.defineProperties;var Vd=Object.getOwnPropertyDescriptors;var Pa=Object.getOwnPropertySymbols;var Hd=Object.prototype.hasOwnProperty,Kd=Object.prototype.propertyIsEnumerable;var Na=(o,e,t)=>e in o?zd(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,He=(o,e)=>{for(var t in e||(e={}))Hd.call(e,t)&&Na(o,t,e[t]);if(Pa)for(var t of Pa(e))Kd.call(e,t)&&Na(o,t,e[t]);return o},Vt=(o,e)=>Bd(o,Vd(e));import{d as Gd,a as Qd,u as Wd,b as Fn,o as Zd,c as Xd,e as zn,f as Ca,g as Yd,h as Jd,F as ep,r as tp,i as op,j as ip,k as rp,l as np}from"./vendor.d72107b9.js";const sp=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}};sp();const ap="modulepreload",Ta={},lp="/lexml-eta-vue/",Ui=function(e,t){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=`${lp}${i}`,i in Ta)return;Ta[i]=!0;const r=i.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${n}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":ap,r||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),r)return new Promise((p,u)=>{s.addEventListener("load",p),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},cp=o=>{const e=[...o];return e.sort((t,i)=>{const r=new Date(t.metadados.datUltimoAcesso);return new Date(i.metadados.datUltimoAcesso).getTime()-r.getTime()}),e},Da=o=>{window.localStorage.setItem("emendas",JSON.stringify(o))},Qs=Gd({id:"appStore",state:()=>({emendas:[]}),getters:{},actions:{adicionarEmenda(o){const e=He({},o),t=this.emendas.findIndex(i=>{var r,n;return((r=i.metadados)==null?void 0:r.id)===((n=e.metadados)==null?void 0:n.id)});t>=0?this.emendas[t]=e:this.emendas.push(e),this.emendas=cp(this.emendas),Da(this.emendas)},lerEmendas(){return this.emendas=JSON.parse(window.localStorage.getItem("emendas")||"[]"),this.emendas},removerDaLista(o){this.emendas=this.emendas.filter(e=>{var t,i;return((t=e.metadados)==null?void 0:t.id)!==((i=o.metadados)==null?void 0:i.id)}),Da(this.emendas)}}}),up=o=>"emenda"in o,dp=o=>up(o)?o.emenda.proposicao:o,We=[];for(let o=0;o<256;o++)We[o]=(o<16?"0":"")+o.toString(16);const pp=()=>{const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return We[o&255]+We[o>>8&255]+We[o>>16&255]+We[o>>24&255]+"-"+We[e&255]+We[e>>8&255]+"-"+We[e>>16&15|64]+We[e>>24&255]+"-"+We[t&63|128]+We[t>>8&255]+"-"+We[t>>16&255]+We[t>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]};let qn;var hp={configModulo:o=>qn=o};const S0=(o,e)=>{if(o){const{sigla:t,numero:i,ano:r}=dp(o),n={sigla:t,numero:i,ano:r};e&&(n.ondeCouber=e),qn.push({path:"/edicao",query:n})}},I0=o=>{const e=o;e.metadados.id=e.metadados.id||pp(),e.metadados.datAlteracao=new Date,e.metadados.datUltimoAcesso=new Date;const t=JSON.stringify(e,null,4),i=new Blob([t],{type:"application/json"}),{sigla:r,numero:n,ano:s}=e.emenda.proposicao,p=`${r} ${n}/${s}.emenda.json`,u=URL.createObjectURL(i),d=document.createElement("a");d.href=u,d.download=p,document.body.appendChild(d),d.click(),Qs().adicionarEmenda(e)},k0=o=>{if(o){o.metadados.datUltimoAcesso=new Date;const{sigla:e,numero:t,ano:i}=o.emenda.proposicao,r={sigla:e,numero:t,ano:i};o.emenda.tipo==="emendaArtigoOndeCouber"&&(r.ondeCouber=!0),qn.push({name:"edicao",query:r,params:{emendaEmDisco:JSON.stringify(o),titulo:o.metadados.titulo}})}},P0=()=>{const o=document.getElementById("fileUpload");o!=null&&o.click()},N0=o=>{const e=o.target;if(e&&e.files){const t=new FileReader;t.readAsText(e.files[0]),t.onloadend=i=>{var r;if((r=i.target)!=null&&r.result){const n=JSON.parse(i.target.result),s=n;s.metadados.datAlteracao=new Date(n.datAlteracao),s.metadados.datUltimoAcesso=new Date;const{sigla:p,numero:u,ano:d}=s.emenda.proposicao,c={sigla:p,numero:u,ano:d};s.emenda.tipo==="emendaArtigoOndeCouber"&&(c.ondeCouber=!0),Qs().adicionarEmenda(s),qn.push({name:"edicao",query:c,params:{emendaEmDisco:JSON.stringify(s),titulo:s.metadados.titulo}})}}}};const fp={class:"bs-eta"},mp=Qd({setup(o){hp.configModulo(Wd());const e=Fn(()=>Ui(()=>import("./HeaderArea.334ad89d.js"),["assets/HeaderArea.334ad89d.js","assets/HeaderArea.1c64915d.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.d72107b9.js"]));Fn(()=>Ui(()=>import("./FooterArea.7bce4361.js"),["assets/FooterArea.7bce4361.js","assets/FooterArea.ebc43ff2.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.d72107b9.js"]));const t=Fn(()=>Ui(()=>import("./IconesSvg.76eb3f8a.js"),["assets/IconesSvg.76eb3f8a.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.d72107b9.js"]));return Qs().lerEmendas(),(r,n)=>{const s=tp("router-view");return Zd(),Xd(ep,null,[zn(Ca(e)),Yd("div",fp,[zn(s)]),Jd("",!0),zn(Ca(t))],64)}}}),vp=[{path:"/",name:"home",component:()=>Ui(()=>import("./DashboardView.2dae6a18.js").then(function(o){return o.D}),["assets/DashboardView.2dae6a18.js","assets/DashboardView.5f18c293.css","assets/vendor.d72107b9.js","assets/proposicaoService.8f275e90.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/edicao",name:"edicao",component:()=>Ui(()=>import("./EditorEmendaView.43952757.js"),["assets/EditorEmendaView.43952757.js","assets/vendor.d72107b9.js"]),props:!0},{path:"/pesquisa-proposicao",name:"PesquisaProposicao",component:()=>Ui(()=>import("./PesquisaProposicaoView.6abc91dd.js").then(function(o){return o.P}),["assets/PesquisaProposicaoView.6abc91dd.js","assets/PesquisaProposicaoView.d0506868.css","assets/vendor.d72107b9.js","assets/proposicaoService.8f275e90.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0}],gp=op({history:ip(),routes:vp,scrollBehavior(o,e,t){return new Promise(i=>{if(!t)i(!1);else{const r=new Date;let n=0;const s=()=>{clearInterval(n);const p=(new Date().getTime()-r.getTime())/1e3,u=document.body.scrollHeight;p<2e3&&u<t.top?n=window.setTimeout(()=>{s()},100):i(Vt(He({},t),{behavior:"auto"}))};s()}})}}),nn=Symbol("defaultState"),Oc=Symbol("delegatesFocus"),Ko=Symbol("firstRender"),qc=Symbol("focusTarget"),Es=Symbol("hasDynamicTemplate"),Sc=Symbol("ids"),sn=Symbol("nativeInternals"),Pi=Symbol("raiseChangeEvents"),mo=Symbol("render"),an=Symbol("renderChanges"),pr=Symbol("rendered"),hr=Symbol("rendering"),As=Symbol("setState"),yr=Symbol("shadowRoot"),_s=Symbol("shadowRootMode"),Os=Symbol("state"),fr=Symbol("stateEffects"),Ic=Symbol("template");function Ir(o,e){return typeof e=="boolean"?e:typeof e=="string"&&(e===""||o.toLowerCase()===e.toLowerCase())}function Do(o,e){let t=e;for(;t;){const i=t.assignedSlot||t.parentNode||t.host;if(i===o)return!0;t=i}return!1}function hn(o){const e=Tc(o,i=>i instanceof HTMLElement&&i.matches('a[href],area[href],button:not([disabled]),details,iframe,input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[contentEditable="true"],[tabindex]')&&i.tabIndex>=0),{value:t}=e.next();return t instanceof HTMLElement?t:null}function kc(o,e){return Array.prototype.findIndex.call(o,t=>t===e||Do(t,e))}function Pc(o,e){const t=e.composedPath()[0];return o===t||Do(o,t)}function*Nc(o){o&&(yield o,yield*function*(e){let t=e;for(;t=t instanceof HTMLElement&&t.assignedSlot?t.assignedSlot:t instanceof ShadowRoot?t.host:t.parentNode,t;)yield t}(o))}function kr(o,e,t){o.toggleAttribute(e,t),o[sn]&&o[sn].states&&o[sn].states.toggle(e,t)}const Cc={checked:!0,defer:!0,disabled:!0,hidden:!0,ismap:!0,multiple:!0,noresize:!0,readonly:!0,selected:!0};function*Tc(o,e){let t;if(e(o)&&(yield o),o instanceof HTMLElement&&o.shadowRoot)t=o.shadowRoot.children;else{const i=o instanceof HTMLSlotElement?o.assignedNodes({flatten:!0}):[];t=i.length>0?i:o.childNodes}if(t)for(let i=0;i<t.length;i++)yield*Tc(t[i],e)}const Ne={html:(o,...e)=>Ft.html(o,...e).content},Ft={html(o,...e){const t=document.createElement("template");return t.innerHTML=String.raw(o,...e),t}},Ra=new Map;function Dc(o){if(typeof o=="function"){let e;try{e=new o}catch(t){if(t.name!=="TypeError")throw t;(function(i){let r;const n=/^[A-Za-z][A-Za-z0-9_$]*$/,s=i.name&&i.name.match(n);if(s){const d=/([A-Z])/g;r=s[0].replace(d,(c,l,a)=>a>0?`-${l}`:l).toLowerCase()}else r="custom-element";let p,u=Ra.get(r)||0;for(;p=`${r}-${u}`,customElements.get(p);u++);customElements.define(p,i),Ra.set(r,u+1)})(o),e=new o}return e}return document.createElement(o)}function qs(o,e){const t=o.parentNode;if(!t)throw"An element must have a parent before it can be substituted.";return(o instanceof HTMLElement||o instanceof SVGElement)&&(e instanceof HTMLElement||e instanceof SVGElement)&&(Array.prototype.forEach.call(o.attributes,i=>{e.getAttribute(i.name)||i.name==="class"||i.name==="style"||e.setAttribute(i.name,i.value)}),Array.prototype.forEach.call(o.classList,i=>{e.classList.add(i)}),Array.prototype.forEach.call(o.style,i=>{e.style[i]||(e.style[i]=o.style[i])})),e.append(...o.childNodes),t.replaceChild(e,o),e}function Hi(o,e){if(typeof e=="function"&&o.constructor===e||typeof e=="string"&&o instanceof Element&&o.localName===e)return o;{const t=Dc(e);return qs(o,t),t}}const La={tabindex:"tabIndex"},Ma={tabIndex:"tabindex"};function Rc(o){if(o===HTMLElement)return[];const e=Object.getPrototypeOf(o.prototype).constructor;let t=e.observedAttributes;t||(t=Rc(e));const i=Object.getOwnPropertyNames(o.prototype).filter(r=>{const n=Object.getOwnPropertyDescriptor(o.prototype,r);return n&&typeof n.set=="function"}).map(r=>function(n){let s=Ma[n];if(!s){const p=/([A-Z])/g;s=n.replace(p,"-$1").toLowerCase(),Ma[n]=s}return s}(r)).filter(r=>t.indexOf(r)<0);return t.concat(i)}const Zr=Symbol("state"),Bn=Symbol("raiseChangeEventsInNextRender"),xi=Symbol("changedSinceLastRender");function bp(o,e){const t={};for(const n in e)i=e[n],r=o[n],(i instanceof Date&&r instanceof Date?i.getTime()===r.getTime():i===r)||(t[n]=!0);var i,r;return t}const ja=new Map,Vn=Symbol("shadowIdProxy"),Lc=Symbol("proxyElement"),yp={get(o,e){const t=o[Lc][yr];return t&&typeof e=="string"?t.getElementById(e):null}},co=function(o){return class extends o{attributeChangedCallback(e,t,i){if(super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i),i!==t&&!this[hr]){const r=function(n){let s=La[n];if(!s){const p=/-([a-z])/g;s=n.replace(p,u=>u[1].toUpperCase()),La[n]=s}return s}(e);if(r in this){const n=Cc[e]?Ir(e,i):i;this[r]=n}}}static get observedAttributes(){return Rc(this)}}}(function(o){class e extends o{constructor(){super(),this[Ko]=void 0,this[Pi]=!1,this[xi]=null,this[As](this[nn])}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[an]()}get[nn](){return super[nn]||{}}[mo](i){super[mo]&&super[mo](i)}[an](){this[Ko]===void 0&&(this[Ko]=!0);const i=this[xi];if(this[Ko]||i){const r=this[Pi];this[Pi]=this[Bn],this[hr]=!0,this[mo](i),this[hr]=!1,this[xi]=null,this[pr](i),this[Ko]=!1,this[Pi]=r,this[Bn]=r}}[pr](i){super[pr]&&super[pr](i)}async[As](i){this[hr]&&console.warn(`${this.constructor.name} called [setState] during rendering, which you should avoid.
See https://elix.org/documentation/ReactiveMixin.`);const{state:r,changed:n}=function(p,u){const d=Object.assign({},p[Zr]),c={};let l=u;for(;;){const a=bp(d,l);if(Object.keys(a).length===0)break;Object.assign(d,l),Object.assign(c,a),l=p[fr](d,a)}return{state:d,changed:c}}(this,i);if(this[Zr]&&Object.keys(n).length===0)return;Object.freeze(r),this[Zr]=r,this[Pi]&&(this[Bn]=!0);const s=this[Ko]===void 0||this[xi]!==null;this[xi]=Object.assign(this[xi]||{},n),this.isConnected&&!s&&(await Promise.resolve(),this[an]())}get[Os](){return this[Zr]}[fr](i,r){return super[fr]?super[fr](i,r):{}}}return new URLSearchParams(location.search).get("elixdebug")==="true"&&Object.defineProperty(e.prototype,"state",{get(){return this[Os]}}),e}(function(o){return class extends o{get[Sc](){if(!this[Vn]){const e={[Lc]:this};this[Vn]=new Proxy(e,yp)}return this[Vn]}[mo](e){if(super[mo]&&super[mo](e),!this[yr]){const t=function(i){let r=i[Es]?void 0:ja.get(i.constructor);if(r===void 0){if(r=i[Ic],r&&!(r instanceof HTMLTemplateElement))throw`Warning: the [template] property for ${i.constructor.name} must return an HTMLTemplateElement.`;i[Es]||ja.set(i.constructor,r||null)}return r}(this);if(t){const i=this.attachShadow({delegatesFocus:this[Oc],mode:this[_s]}),r=document.importNode(t.content,!0);i.append(r),this[yr]=i}else this[yr]=null}}get[_s](){return"open"}}}(HTMLElement))),Ss=Symbol("checkSize"),ti=Symbol("closestAvailableItemIndex"),Is=Symbol("contentSlot"),H=nn,fn=Symbol("defaultTabIndex"),Ws=Oc,ji=Symbol("effectEndTarget"),ze=Ko,ks=qc,mr=Symbol("getItemText"),vo=Symbol("goDown"),Wt=Symbol("goEnd"),Ni=Symbol("goFirst"),Ci=Symbol("goLast"),go=Symbol("goLeft"),bo=Symbol("goNext"),yo=Symbol("goPrevious"),xo=Symbol("goRight"),Zt=Symbol("goStart"),Ti=Symbol("goToItemWithPrefix"),wo=Symbol("goUp"),xp=Es,ae=Sc,oi=Symbol("inputDelegate"),wp=Symbol("itemsDelegate"),_e=Symbol("keydown"),Ep=Symbol("mouseenter"),Ap=Symbol("mouseleave"),Wo=sn,oe=Pi,Q=mo,_p=an,Op=Symbol("renderDataToElement"),J=pr,or=hr,mt=Symbol("scrollTarget"),W=As,et=yr,qp=_s,Zs=Symbol("startEffect"),C=Os,ye=fr,Sp=Symbol("swipeDown"),Ip=Symbol("swipeDownComplete"),kp=Symbol("swipeLeft"),Pp=Symbol("swipeLeftTransitionEnd"),Np=Symbol("swipeRight"),Cp=Symbol("swipeRightTransitionEnd"),Tp=Symbol("swipeUp"),Dp=Symbol("swipeUpComplete"),Rp=Symbol("swipeStart"),Lp=Symbol("swipeTarget"),Ki=Symbol("tap"),le=Ic,Mp=Symbol("toggleSelectedFlag");new URLSearchParams(location.search).get("elixdebug")==="true"&&(window.elix={internal:{checkSize:Ss,closestAvailableItemIndex:ti,contentSlot:Is,defaultState:H,defaultTabIndex:fn,delegatesFocus:Ws,effectEndTarget:ji,firstRender:ze,focusTarget:ks,getItemText:mr,goDown:vo,goEnd:Wt,goFirst:Ni,goLast:Ci,goLeft:go,goNext:bo,goPrevious:yo,goRight:xo,goStart:Zt,goToItemWithPrefix:Ti,goUp:wo,hasDynamicTemplate:xp,ids:ae,inputDelegate:oi,itemsDelegate:wp,keydown:_e,mouseenter:Ep,mouseleave:Ap,nativeInternals:Wo,event,raiseChangeEvents:oe,render:Q,renderChanges:_p,renderDataToElement:Op,rendered:J,rendering:or,scrollTarget:mt,setState:W,shadowRoot:et,shadowRootMode:qp,startEffect:Zs,state:C,stateEffects:ye,swipeDown:Sp,swipeDownComplete:Ip,swipeLeft:kp,swipeLeftTransitionEnd:Pp,swipeRight:Np,swipeRightTransitionEnd:Cp,swipeUp:Tp,swipeUpComplete:Dp,swipeStart:Rp,swipeTarget:Lp,tap:Ki,template:le,toggleSelectedFlag:Mp}});const Xr=Symbol("previousBodyStyleOverflow"),Yr=Symbol("previousDocumentMarginRight"),Mc=Symbol("wrap"),Hn=Symbol("wrappingFocus");function Xs(o){return class extends o{[_e](e){const t=hn(this[et]);if(t){const i=document.activeElement&&(document.activeElement===t||document.activeElement.contains(t)),r=this[et].activeElement,n=r&&(r===t||Do(r,t));(i||n)&&e.key==="Tab"&&e.shiftKey&&(this[Hn]=!0,this[ae].focusCatcher.focus(),this[Hn]=!1)}return super[_e]&&super[_e](e)||!1}[Q](e){super[Q]&&super[Q](e),this[ze]&&this[ae].focusCatcher.addEventListener("focus",()=>{if(!this[Hn]){const t=hn(this[et]);t&&t.focus()}})}[Mc](e){const t=Ne.html`
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
      `,i=t.getElementById("focusCaptureContainer");i&&(e.replaceWith(t),i.append(e))}}}function Sn(o){return class extends o{constructor(){super(),this.addEventListener("keydown",async e=>{this[oe]=!0,this[C].focusVisible||this[W]({focusVisible:!0}),this[_e](e)&&(e.preventDefault(),e.stopImmediatePropagation()),await Promise.resolve(),this[oe]=!1})}attributeChangedCallback(e,t,i){if(e==="tabindex"){let r;i===null?r=-1:(r=Number(i),isNaN(r)&&(r=this[fn]?this[fn]:0)),this.tabIndex=r}else super.attributeChangedCallback(e,t,i)}get[H](){const e=this[Ws]?-1:0;return Object.assign(super[H]||{},{tabIndex:e})}[_e](e){return!!super[_e]&&super[_e](e)}[Q](e){super[Q]&&super[Q](e),e.tabIndex&&(this.tabIndex=this[C].tabIndex)}get tabIndex(){return super.tabIndex}set tabIndex(e){super.tabIndex!==e&&(super.tabIndex=e),this[or]||this[W]({tabIndex:e})}}}Xs.wrap=Mc;const jp=function(o){return class extends o{get[H](){return Object.assign(super[H]||{},{role:null})}[Q](e){if(super[Q]&&super[Q](e),e.role){const{role:t}=this[C];t?this.setAttribute("role",t):this.removeAttribute("role")}}get role(){return super.role}set role(e){const t=String(e);super.role=t,this[or]||this[W]({s:t})}}}(co);class Ys extends jp{get[H](){return Object.assign(super[H],{role:"none"})}get[le](){return Ft.html`
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
    `}}class jc extends Ys{constructor(){super(),"PointerEvent"in window||this.addEventListener("touchmove",e=>{e.touches.length===1&&e.preventDefault()})}}const Jr=Symbol("closePromise"),Kn=Symbol("closeResolve");function $c(o){return class extends o{attributeChangedCallback(e,t,i){if(e==="opened"){const r=Ir(e,i);this.opened!==r&&(this.opened=r)}else super.attributeChangedCallback(e,t,i)}async close(e){super.close&&await super.close(),this[W]({closeResult:e}),await this.toggle(!1)}get closed(){return this[C]&&!this[C].opened}get closeFinished(){return this[C].closeFinished}get closeResult(){return this[C].closeResult}get[H](){const e={closeResult:null,opened:!1};return this[Zs]&&Object.assign(e,{closeFinished:!0,effect:"close",effectPhase:"after",openCloseEffects:!0}),Object.assign(super[H]||{},e)}async open(){super.open&&await super.open(),this[W]({closeResult:void 0}),await this.toggle(!0)}get opened(){return this[C]&&this[C].opened}set opened(e){this[W]({closeResult:void 0}),this.toggle(e)}[Q](e){if(super[Q](e),e.opened){const{opened:t}=this[C];kr(this,"opened",t)}if(e.closeFinished){const{closeFinished:t}=this[C];kr(this,"closed",t)}}[J](e){if(super[J]&&super[J](e),e.opened&&this[oe]){const i=new CustomEvent("opened-changed",{bubbles:!0,detail:{closeResult:this[C].closeResult,opened:this[C].opened}});this.dispatchEvent(i);const r=new CustomEvent("openedchange",{bubbles:!0,detail:{closeResult:this[C].closeResult,opened:this[C].opened}});if(this.dispatchEvent(r),this[C].opened){const n=new CustomEvent("opened",{bubbles:!0});this.dispatchEvent(n);const s=new CustomEvent("open",{bubbles:!0});this.dispatchEvent(s)}else{const n=new CustomEvent("closed",{bubbles:!0,detail:{closeResult:this[C].closeResult}});this.dispatchEvent(n);const s=new CustomEvent("close",{bubbles:!0,detail:{closeResult:this[C].closeResult}});this.dispatchEvent(s)}}const t=this[Kn];this.closeFinished&&t&&(this[Kn]=null,this[Jr]=null,t(this[C].closeResult))}[ye](e,t){const i=super[ye]?super[ye](e,t):{};if(t.openCloseEffects||t.effect||t.effectPhase||t.opened){const{effect:r,effectPhase:n,openCloseEffects:s,opened:p}=e;Object.assign(i,{closeFinished:s?r==="close"&&n==="after":!p})}return i}async toggle(e=!this.opened){if(super.toggle&&await super.toggle(e),e!==this[C].opened){const t={opened:e};this[C].openCloseEffects&&(t.effect=e?"open":"close",this[C].effectPhase==="after"&&(t.effectPhase="before")),await this[W](t)}}whenClosed(){return this[Jr]||(this[Jr]=new Promise(e=>{this[Kn]=e})),this[Jr]}}}class Uc extends co{get[le](){return Ft.html`
      <style>
        :host {
          display: inline-block;
          position: relative;
        }
      </style>
      <slot></slot>
    `}}const Gn=Symbol("appendedToDocument"),vr=Symbol("assignedZIndex"),Bo=Symbol("restoreFocusToElement");function $a(o){const e=function(){const t=document.body.querySelectorAll("*"),i=Array.from(t,r=>{const n=getComputedStyle(r);let s=0;if(n.position!=="static"&&n.zIndex!=="auto"){const p=n.zIndex?parseInt(n.zIndex):0;s=isNaN(p)?0:p}return s});return Math.max(...i)}()+1;o[vr]=e,o.style.zIndex=e.toString()}function Ps(o){const e=getComputedStyle(o).zIndex,t=o.style.zIndex,i=!isNaN(parseInt(t));if(e==="auto")return i;if(e==="0"&&!i){const r=o.assignedSlot||(o instanceof ShadowRoot?o.host:o.parentNode);if(!(r instanceof HTMLElement))return!0;if(!Ps(r))return!1}return!0}function Fc(o){return class extends o{get[Is](){const e=this[et]&&this[et].querySelector("slot:not([name])");return this[et]&&e||console.warn(`SlotContentMixin expects ${this.constructor.name} to define a shadow tree that includes a default (unnamed) slot.
See https://elix.org/documentation/SlotContentMixin.`),e}get[H](){return Object.assign(super[H]||{},{content:null})}[J](e){if(super[J]&&super[J](e),this[ze]){const t=this[Is];t&&t.addEventListener("slotchange",async()=>{this[oe]=!0;const i=t.assignedNodes({flatten:!0});Object.freeze(i),this[W]({content:i}),await Promise.resolve(),this[oe]=!1})}}}}const $p=$c(function(o){return class extends o{get autoFocus(){return this[C].autoFocus}set autoFocus(e){this[W]({autoFocus:e})}get[H](){return Object.assign(super[H]||{},{autoFocus:!0,persistent:!1})}async open(){this[C].persistent||this.isConnected||(this[Gn]=!0,document.body.append(this)),super.open&&await super.open()}[Q](e){super[Q]&&super[Q](e),this[ze]&&this.addEventListener("blur",t=>{const i=t.relatedTarget||document.activeElement;i instanceof HTMLElement&&(Do(this,i)||(this.opened?this[Bo]=i:(i.focus(),this[Bo]=null)))}),(e.effectPhase||e.opened||e.persistent)&&!this[C].persistent&&((this.closeFinished===void 0?this.closed:this.closeFinished)?this[vr]&&(this.style.zIndex="",this[vr]=null):this[vr]?this.style.zIndex=this[vr]:Ps(this)||$a(this))}[J](e){if(super[J]&&super[J](e),this[ze]&&this[C].persistent&&!Ps(this)&&$a(this),e.opened&&this[C].autoFocus)if(this[C].opened){this[Bo]||document.activeElement===document.body||(this[Bo]=document.activeElement);const t=hn(this);t&&t.focus()}else this[Bo]&&(this[Bo].focus(),this[Bo]=null);!this[ze]&&!this[C].persistent&&this.closeFinished&&this[Gn]&&(this[Gn]=!1,this.parentNode&&this.parentNode.removeChild(this))}get[le](){const e=super[le]||Ft.html``;return e.content.append(Ne.html`
        <style>
          :host([closed]) {
            display: none;
          }
        </style>
      `),e}}}(Fc(co)));class zc extends $p{get backdrop(){return this[ae]&&this[ae].backdrop}get backdropPartType(){return this[C].backdropPartType}set backdropPartType(e){this[W]({backdropPartType:e})}get[H](){return Object.assign(super[H],{backdropPartType:Ys,framePartType:Uc})}get frame(){return this[ae].frame}get framePartType(){return this[C].framePartType}set framePartType(e){this[W]({framePartType:e})}[Q](e){super[Q](e),Ua(this[et],this[C],e)}[J](e){super[J](e),e.opened&&this[C].content&&this[C].content.forEach(t=>{t[Ss]&&t[Ss]()})}get[le](){const e=super[le];return e.content.append(Ne.html`
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
    `),Ua(e.content,this[C]),e}}function Ua(o,e,t){if(!t||t.backdropPartType){const{backdropPartType:i}=e,r=o.getElementById("backdrop");r&&Hi(r,i)}if(!t||t.framePartType){const{framePartType:i}=e,r=o.getElementById("frame");r&&Hi(r,i)}}const Up=function(o){return class extends o{get[H](){return Object.assign(super[H]||{},{role:"dialog"})}[_e](e){let t=!1;return e.key==="Escape"&&(this.close({canceled:"Escape"}),t=!0),t||super[_e]&&super[_e](e)||!1}[Q](e){if(super[Q]&&super[Q](e),e.opened)if(this[C].opened&&document.documentElement){const t=document.documentElement.clientWidth,i=window.innerWidth-t;this[Xr]=document.body.style.overflow,this[Yr]=i>0?document.documentElement.style.marginRight:null,document.body.style.overflow="hidden",i>0&&(document.documentElement.style.marginRight=`${i}px`)}else this[Xr]!=null&&(document.body.style.overflow=this[Xr],this[Xr]=null),this[Yr]!=null&&(document.documentElement.style.marginRight=this[Yr],this[Yr]=null);if(e.role){const{role:t}=this[C];this.setAttribute("role",t)}}get role(){return super.role}set role(e){super.role=e,this[or]||this[W]({role:e})}}}(Xs(Sn(zc)));class Bc extends Up{get[H](){return Object.assign(super[H],{backdropPartType:jc,tabIndex:-1})}get[le](){const e=super[le],t=e.content.querySelector("#frame");return this[Xs.wrap](t),e.content.append(Ne.html`
        <style>
          :host {
            height: 100%;
            left: 0;
            pointer-events: initial;
            top: 0;
            width: 100%;
          }
        </style>
      `),e}}class Fp extends Bc{get choiceButtons(){return this[C].choiceButtons}get choiceButtonPartType(){return this[C].choiceButtonPartType}set choiceButtonPartType(e){this[W]({choiceButtonPartType:e})}get choices(){return this[C].choices}set choices(e){this[W]({choices:e})}get[H](){return Object.assign(super[H],{choiceButtonPartType:"button",choiceButtons:[],choices:["OK"]})}[_e](e){let t=!1;const i=e.key.length===1&&e.key.toLowerCase();if(i){const r=this.choices.find(n=>n[0].toLowerCase()===i);r&&(this.close({choice:r}),t=!0)}return t||super[_e]&&super[_e](e)||!1}[Q](e){super[Q](e),this[ze]&&this[ae].choiceButtonContainer.addEventListener("click",async t=>{const i=t.target;if(i instanceof HTMLElement){const r=i.textContent;this[oe]=!0,await this.close({choice:r}),this[oe]=!1}}),e.choiceButtons&&function(t,i){const r=[...i],n=t.childNodes.length,s=r.length,p=Math.max(n,s);for(let u=0;u<p;u++){const d=t.childNodes[u],c=r[u];u>=n?t.append(c):u>=s?t.removeChild(t.childNodes[s]):d!==c&&(r.indexOf(d,u)>=u?t.insertBefore(c,d):t.replaceChild(c,d))}}(this[ae].choiceButtonContainer,this[C].choiceButtons)}[ye](e,t){const i=super[ye](e,t);if(t.choiceButtonPartType||t.choices){const r=e.choices.map(n=>{const s=Dc(e.choiceButtonPartType);return"part"in s&&(s.part="choice-button"),s.textContent=n,s});Object.freeze(r),Object.assign(i,{choiceButtons:r})}return i}get[le](){const e=super[le],t=e.content.querySelector("slot:not([name])");return t&&t.replaceWith(Ne.html`
        <div id="alertDialogContent">
          <slot></slot>
          <div id="choiceButtonContainer" part="choice-button-container"></div>
        </div>
      `),e}}const Vc=document.createElement("div");Vc.attachShadow({mode:"open",delegatesFocus:!0});const zp=Vc.shadowRoot.delegatesFocus;function Qn(o){if("selectedText"in o)return o.selectedText;if("value"in o&&"options"in o){const e=o.value,t=o.options.find(i=>i.value===e);return t?t.innerText:""}return"value"in o?o.value:o.innerText}function Wn(o,e){const{ariaLabel:t,ariaLabelledby:i}=e,r=o.isConnected?o.getRootNode():null;let n=null;if(i&&r)n=i.split(" ").map(p=>{const u=r.getElementById(p);return u?u===o&&e.value!==null?e.selectedText:Qn(u):""}).join(" ");else if(t)n=t;else if(r){const s=o.id;if(s){const p=r.querySelector(`[for="${s}"]`);p instanceof HTMLElement&&(n=Qn(p))}if(n===null){const p=o.closest("label");p&&(n=Qn(p))}}return n&&(n=n.trim()),n}let Zo=!1;const rr=Symbol("focusVisibleChangedListener");function Hc(o){return class extends o{constructor(){super(),this.addEventListener("focusout",e=>{Promise.resolve().then(()=>{const t=e.relatedTarget||document.activeElement,i=this===t,r=Do(this,t);!i&&!r&&(this[W]({focusVisible:!1}),document.removeEventListener("focusvisiblechange",this[rr]),this[rr]=null)})}),this.addEventListener("focusin",()=>{Promise.resolve().then(()=>{this[C].focusVisible!==Zo&&this[W]({focusVisible:Zo}),this[rr]||(this[rr]=()=>{this[W]({focusVisible:Zo})},document.addEventListener("focusvisiblechange",this[rr]))})})}get[H](){return Object.assign(super[H]||{},{focusVisible:!1})}[Q](e){if(super[Q]&&super[Q](e),e.focusVisible){const{focusVisible:t}=this[C];this.toggleAttribute("focus-visible",t)}}get[le](){const e=super[le]||Ft.html``;return e.content.append(Ne.html`
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
      `),e}}}function Fa(o){if(Zo!==o){Zo=o;const e=new CustomEvent("focus-visible-changed",{detail:{focusVisible:Zo}});document.dispatchEvent(e);const t=new CustomEvent("focusvisiblechange",{detail:{focusVisible:Zo}});document.dispatchEvent(t)}}function Js(o){return class extends o{get[Ws](){return!0}focus(e){const t=this[ks];t&&t.focus(e)}get[ks](){return hn(this[et])}}}window.addEventListener("keydown",()=>{Fa(!0)},{capture:!0}),window.addEventListener("mousedown",()=>{Fa(!1)},{capture:!0});const za=Symbol("extends"),Zn=Symbol("delegatedPropertySetters"),Bp={a:!0,area:!0,button:!0,details:!0,iframe:!0,input:!0,select:!0,textarea:!0},Vp={address:["scroll"],blockquote:["scroll"],caption:["scroll"],center:["scroll"],dd:["scroll"],dir:["scroll"],div:["scroll"],dl:["scroll"],dt:["scroll"],fieldset:["scroll"],form:["reset","scroll"],frame:["load"],h1:["scroll"],h2:["scroll"],h3:["scroll"],h4:["scroll"],h5:["scroll"],h6:["scroll"],iframe:["load"],img:["abort","error","load"],input:["abort","change","error","select","load"],li:["scroll"],link:["load"],menu:["scroll"],object:["error","scroll"],ol:["scroll"],p:["scroll"],script:["error","load"],select:["change","scroll"],tbody:["scroll"],tfoot:["scroll"],thead:["scroll"],textarea:["change","select","scroll"]},Hp=["click","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","wheel"],Kp={abort:!0,change:!0,reset:!0},Gp=["address","article","aside","blockquote","canvas","dd","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","section","table","tfoot","ul","video"],Ba=["accept-charset","autoplay","buffered","challenge","codebase","colspan","contenteditable","controls","crossorigin","datetime","dirname","for","formaction","http-equiv","icon","ismap","itemprop","keytype","language","loop","manifest","maxlength","minlength","muted","novalidate","preload","radiogroup","readonly","referrerpolicy","rowspan","scoped","usemap"],Qp=Js(co);class ea extends Qp{constructor(){super();const e=this;!this[Wo]&&e.attachInternals&&(this[Wo]=e.attachInternals())}attributeChangedCallback(e,t,i){if(Ba.indexOf(e)>=0){const r=Object.assign({},this[C].innerAttributes,{[e]:i});this[W]({innerAttributes:r})}else super.attributeChangedCallback(e,t,i)}blur(){this.inner.blur()}get[H](){return Object.assign(super[H],{innerAttributes:{}})}get[fn](){return Bp[this.extends]?0:-1}get extends(){return this.constructor[za]}get inner(){const e=this[ae]&&this[ae].inner;return e||console.warn("Attempted to get an inner standard element before it was instantiated."),e}static get observedAttributes(){return[...super.observedAttributes,...Ba]}[Q](e){super[Q](e);const t=this.inner;if(this[ze]&&((Vp[this.extends]||[]).forEach(i=>{t.addEventListener(i,()=>{const r=new Event(i,{bubbles:Kp[i]||!1});this.dispatchEvent(r)})}),"disabled"in t&&Hp.forEach(i=>{this.addEventListener(i,r=>{t.disabled&&r.stopImmediatePropagation()})})),e.tabIndex&&(t.tabIndex=this[C].tabIndex),e.innerAttributes){const{innerAttributes:i}=this[C];for(const r in i)Wp(t,r,i[r])}this.constructor[Zn].forEach(i=>{if(e[i]){const r=this[C][i];(i==="selectionEnd"||i==="selectionStart")&&r===null||(t[i]=r)}})}[J](e){if(super[J](e),e.disabled){const{disabled:t}=this[C];t!==void 0&&kr(this,"disabled",t)}}get[le](){const e=Gp.includes(this.extends)?"block":"inline-block",t=this.extends;return Ft.html`
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
    `}static wrap(e){class t extends ea{}t[za]=e;const i=document.createElement(e);return function(r,n){const s=Object.getOwnPropertyNames(n);r[Zn]=[],s.forEach(p=>{const u=Object.getOwnPropertyDescriptor(n,p);if(!u)return;const d=function(c,l){if(typeof l.value=="function"){if(c!=="constructor")return function(a,h){const f=function(...m){this.inner[a](...m)};return{configurable:h.configurable,enumerable:h.enumerable,value:f,writable:h.writable}}(c,l)}else if(typeof l.get=="function"||typeof l.set=="function")return function(a,h){const f={configurable:h.configurable,enumerable:h.enumerable};return h.get&&(f.get=function(){return function(m,g){return m[C][g]||m[et]&&m.inner[g]}(this,a)}),h.set&&(f.set=function(m){(function(g,v,y){g[C][v]!==y&&g[W]({[v]:y})})(this,a,m)}),h.writable&&(f.writable=h.writable),f}(c,l);return null}(p,u);d&&(Object.defineProperty(r.prototype,p,d),d.set&&r[Zn].push(p))})}(t,Object.getPrototypeOf(i)),t}}function Wp(o,e,t){Cc[e]?typeof t=="string"?o.setAttribute(e,""):t===null&&o.removeAttribute(e):t!=null?o.setAttribute(e,t.toString()):o.removeAttribute(e)}const Zp=function(o){return class extends o{get[H](){return Object.assign(super[H]||{},{composeFocus:!zp})}[Q](e){super[Q]&&super[Q](e),this[ze]&&this.addEventListener("mousedown",t=>{if(this[C].composeFocus&&t.button===0&&t.target instanceof Element){const i=function(r){for(const n of Nc(r)){const s=n[qc]||n,p=s;if(s instanceof HTMLElement&&s.tabIndex>=0&&!p.disabled&&!(s instanceof HTMLSlotElement))return s}return null}(t.target);i&&(i.focus(),t.preventDefault())}})}}}(function(o){return class extends o{get ariaLabel(){return this[C].ariaLabel}set ariaLabel(e){this[C].removingAriaAttribute||this[W]({ariaLabel:String(e)})}get ariaLabelledby(){return this[C].ariaLabelledby}set ariaLabelledby(e){this[C].removingAriaAttribute||this[W]({ariaLabelledby:String(e)})}get[H](){return Object.assign(super[H]||{},{ariaLabel:null,ariaLabelledby:null,inputLabel:null,removingAriaAttribute:!1})}[Q](e){if(super[Q]&&super[Q](e),this[ze]&&this.addEventListener("focus",()=>{this[oe]=!0;const t=Wn(this,this[C]);this[W]({inputLabel:t}),this[oe]=!1}),e.inputLabel){const{inputLabel:t}=this[C];t?this[oi].setAttribute("aria-label",t):this[oi].removeAttribute("aria-label")}}[J](e){super[J]&&super[J](e),this[ze]&&(window.requestIdleCallback||setTimeout)(()=>{const r=Wn(this,this[C]);this[W]({inputLabel:r})});const{ariaLabel:t,ariaLabelledby:i}=this[C];e.ariaLabel&&!this[C].removingAriaAttribute&&this.getAttribute("aria-label")&&(this.setAttribute("delegated-label",t),this[W]({removingAriaAttribute:!0}),this.removeAttribute("aria-label")),e.ariaLabelledby&&!this[C].removingAriaAttribute&&this.getAttribute("aria-labelledby")&&(this.setAttribute("delegated-labelledby",i),this[W]({removingAriaAttribute:!0}),this.removeAttribute("aria-labelledby")),e.removingAriaAttribute&&this[C].removingAriaAttribute&&this[W]({removingAriaAttribute:!1})}[ye](e,t){const i=super[ye]?super[ye](e,t):{};if(t.ariaLabel&&e.ariaLabel||t.selectedText&&e.ariaLabelledby&&this.matches(":focus-within")){const r=Wn(this,e);Object.assign(i,{inputLabel:r})}return i}}}(Hc(ea.wrap("button"))));class Xp extends Zp{get[H](){return Object.assign(super[H],{role:"button"})}get[oi](){return this[ae].inner}[Ki](){const e=new MouseEvent("click",{bubbles:!0,cancelable:!0});this.dispatchEvent(e)}get[le](){const e=super[le];return e.content.append(Ne.html`
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
      `),e}}class Yp extends function(e){return class extends e{get[le](){const t=super[le];return t.content.append(Ne.html`
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
      `),t}}}(Xp){}class Kc extends Yp{get[le](){const e=super[le];return e.content.append(Ne.html`
        <style>
          [part~="button"] {
            background: #eee;
            border: 1px solid #ccc;
            padding: 0.25em 0.5em;
          }
        </style>
      `),e}}class Jp extends jc{get[le](){const e=super[le];return e.content.append(Ne.html`
        <style>
          :host {
            background: rgba(0, 0, 0, 0.2);
          }
        </style>
      `),e}}class ta extends Uc{get[le](){const e=super[le];return e.content.append(Ne.html`
        <style>
          :host {
            background: white;
            border: 1px solid rgba(0, 0, 0, 0.2);
            box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
            box-sizing: border-box;
          }
        </style>
      `),e}}function Gc(o){return class extends o{get[H](){return Object.assign(super[H]||{},{backdropPartType:Jp,framePartType:ta})}}}class eh extends Gc(Fp){get[H](){return Object.assign(super[H],{choiceButtonPartType:Kc})}get[le](){const e=super[le];return e.content.append(Ne.html`
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
      `),e}}customElements.define("elix-alert-dialog",class extends eh{});class th extends Gc(Bc){}customElements.define("elix-dialog",class extends th{});const oh={a:"link",article:"region",button:"button",h1:"sectionhead",h2:"sectionhead",h3:"sectionhead",h4:"sectionhead",h5:"sectionhead",h6:"sectionhead",hr:"sectionhead",iframe:"region",link:"link",menu:"menu",ol:"list",option:"option",output:"liveregion",progress:"progressbar",select:"select",table:"table",td:"td",textarea:"textbox",th:"th",ul:"list"};function Va(o){const e=o[et],t=e&&e.querySelector("slot:not([name])");return t&&t.parentNode instanceof Element&&function(i){for(const r of Nc(i))if(r instanceof HTMLElement&&ih(r))return r;return null}(t.parentNode)||o}function ih(o){const e=getComputedStyle(o),t=e.overflowX,i=e.overflowY;return t==="scroll"||t==="auto"||i==="scroll"||i==="auto"}function en(o,e,t){const i=o[ti](o[C],{direction:t,index:e});if(i<0)return!1;const r=o[C].currentIndex!==i;return r&&o[W]({currentIndex:i}),r}const rh=["applet","basefont","embed","font","frame","frameset","isindex","keygen","link","multicol","nextid","noscript","object","param","script","style","template","noembed"];function Ha(o,e,t){const i=o[C].items,r=t?0:i.length-1,n=t?i.length:0,s=t?1:-1;let p,u,d=null;const{availableItemFlags:c}=o[C];for(p=r;p!==n;p+=s)if((!c||c[p])&&(u=i[p].getBoundingClientRect(),u.top<=e&&e<=u.bottom)){d=i[p];break}if(!d||!u)return null;const l=getComputedStyle(d),a=l.paddingTop?parseFloat(l.paddingTop):0,h=l.paddingBottom?parseFloat(l.paddingBottom):0,f=u.top+a,m=f+d.clientHeight-a-h;return t&&f<=e||!t&&m>=e?p:p-s}function Ka(o,e){const t=o[C].items,i=o[C].currentIndex,r=o[mt].getBoundingClientRect(),n=Ha(o,e?r.bottom:r.top,e);let s;if(n&&i===n){const u=t[i].getBoundingClientRect(),d=o[mt].clientHeight;s=Ha(o,e?u.bottom+d:u.top-d,e)}else s=n;if(!s){const u=e?t.length-1:0;s=o[ti]?o[ti](o[C],{direction:e?-1:1,index:u}):u}const p=s!==i;if(p){const u=o[oe];o[oe]=!0,o[W]({currentIndex:s}),o[oe]=u}return p}const Xt=Symbol("typedPrefix"),ln=Symbol("prefixTimeout");function Qc(o){const e=o;e[ln]&&(clearTimeout(e[ln]),e[ln]=!1)}function Ns(o){o[Xt]="",Qc(o)}function Ga(o){Qc(o),o[ln]=setTimeout(()=>{Ns(o)},1e3)}function oa(o){return class extends o{connectedCallback(){const e=getComputedStyle(this).direction==="rtl";this[W]({rightToLeft:e}),super.connectedCallback()}}}function nh(o){return class extends o{get[H](){return Object.assign(super[H]||{},{items:null})}[ye](e,t){const i=super[ye]?super[ye](e,t):{};if(t.content){const r=e.content,n=r?Array.prototype.filter.call(r,s=>{return(p=s)instanceof Element&&(!p.localName||rh.indexOf(p.localName)<0);var p}):null;n&&Object.freeze(n),Object.assign(i,{items:n})}return i}}}const sh=function(o){return class extends o{get[H](){const e=super[H];return Object.assign(e,{itemRole:e.itemRole||"menuitem",role:e.role||"menu"})}get itemRole(){return this[C].itemRole}set itemRole(e){this[W]({itemRole:e})}[Q](e){super[Q]&&super[Q](e);const t=this[C].items;if((e.items||e.itemRole)&&t){const{itemRole:i}=this[C];t.forEach(r=>{i===oh[r.localName]?r.removeAttribute("role"):r.setAttribute("role",i)})}if(e.role){const{role:i}=this[C];this.setAttribute("role",i)}}get role(){return super.role}set role(e){super.role=e,this[or]||this[W]({role:e})}}}(function(o){return class extends o{attributeChangedCallback(e,t,i){if(e==="current-index")this.currentIndex=Number(i);else if(e==="current-item-required"){const r=Ir(e,i);this.currentItemRequired!==r&&(this.currentItemRequired=r)}else if(e==="cursor-operations-wrap"){const r=Ir(e,i);this.cursorOperationsWrap!==r&&(this.cursorOperationsWrap=r)}else super.attributeChangedCallback(e,t,i)}get currentIndex(){const{items:e,currentIndex:t}=this[C];return e&&e.length>0?t:-1}set currentIndex(e){isNaN(e)||this[W]({currentIndex:e})}get currentItem(){const{items:e,currentIndex:t}=this[C];return e&&e[t]}set currentItem(e){const{items:t}=this[C];if(!t)return;const i=t.indexOf(e);this[W]({currentIndex:i})}get currentItemRequired(){return this[C].currentItemRequired}set currentItemRequired(e){this[W]({currentItemRequired:e})}get cursorOperationsWrap(){return this[C].cursorOperationsWrap}set cursorOperationsWrap(e){this[W]({cursorOperationsWrap:e})}goFirst(){return super.goFirst&&super.goFirst(),this[Ni]()}goLast(){return super.goLast&&super.goLast(),this[Ci]()}goNext(){return super.goNext&&super.goNext(),this[bo]()}goPrevious(){return super.goPrevious&&super.goPrevious(),this[yo]()}[J](e){if(super[J]&&super[J](e),e.currentIndex&&this[oe]){const{currentIndex:t}=this[C],i=new CustomEvent("current-index-changed",{bubbles:!0,detail:{currentIndex:t}});this.dispatchEvent(i);const r=new CustomEvent("currentindexchange",{bubbles:!0,detail:{currentIndex:t}});this.dispatchEvent(r)}}}}(function(o){return class extends o{[J](e){super[J]&&super[J](e),e.currentItem&&this.scrollCurrentItemIntoView()}scrollCurrentItemIntoView(){super.scrollCurrentItemIntoView&&super.scrollCurrentItemIntoView();const{currentItem:e,items:t}=this[C];if(!e||!t)return;const i=this[mt].getBoundingClientRect(),r=e.getBoundingClientRect(),n=r.bottom-i.bottom,s=r.left-i.left,p=r.right-i.right,u=r.top-i.top,d=this[C].orientation||"both";d!=="horizontal"&&d!=="both"||(p>0?this[mt].scrollLeft+=p:s<0&&(this[mt].scrollLeft+=Math.ceil(s))),d!=="vertical"&&d!=="both"||(n>0?this[mt].scrollTop+=n:u<0&&(this[mt].scrollTop+=Math.ceil(u)))}get[mt](){return super[mt]||Va(this)}}}(Js(function(o){return class extends o{get[H](){return Object.assign(super[H]||{},{canGoDown:null,canGoLeft:null,canGoRight:null,canGoUp:null})}[vo](){return super[vo]&&super[vo](),this[bo]()}[Wt](){return super[Wt]&&super[Wt](),this[Ci]()}[go](){return super[go]&&super[go](),this[C]&&this[C].rightToLeft?this[bo]():this[yo]()}[xo](){return super[xo]&&super[xo](),this[C]&&this[C].rightToLeft?this[yo]():this[bo]()}[Zt](){return super[Zt]&&super[Zt](),this[Ni]()}[wo](){return super[wo]&&super[wo](),this[yo]()}[ye](e,t){const i=super[ye]?super[ye](e,t):{};if(t.canGoNext||t.canGoPrevious||t.languageDirection||t.orientation||t.rightToLeft){const{canGoNext:r,canGoPrevious:n,orientation:s,rightToLeft:p}=e,u=s==="horizontal"||s==="both",d=s==="vertical"||s==="both";Object.assign(i,{canGoDown:d&&r,canGoLeft:!!u&&(p?r:n),canGoRight:!!u&&(p?n:r),canGoUp:d&&n})}return i}}}(function(o){return class extends o{get items(){return this[C]?this[C].items:null}[J](e){if(super[J]&&super[J](e),!this[ze]&&e.items&&this[oe]){const t=new CustomEvent("items-changed",{bubbles:!0});this.dispatchEvent(t);const i=new CustomEvent("itemschange",{bubbles:!0});this.dispatchEvent(i)}}}}(function(o){return class extends o{[ti](e,t={}){const i=t.direction!==void 0?t.direction:1,r=t.index!==void 0?t.index:e.currentIndex,n=t.wrap!==void 0?t.wrap:e.cursorOperationsWrap,{items:s}=e,p=s?s.length:0;if(p===0)return-1;if(n){let u=(r%p+p)%p;const d=((u-i)%p+p)%p;for(;u!==d;){if(!e.availableItemFlags||e.availableItemFlags[u])return u;u=((u+i)%p+p)%p}}else for(let u=r;u>=0&&u<p;u+=i)if(!e.availableItemFlags||e.availableItemFlags[u])return u;return-1}get[H](){return Object.assign(super[H]||{},{currentIndex:-1,desiredCurrentIndex:null,currentItem:null,currentItemRequired:!1,cursorOperationsWrap:!1})}[Ni](){return super[Ni]&&super[Ni](),en(this,0,1)}[Ci](){return super[Ci]&&super[Ci](),en(this,this[C].items.length-1,-1)}[bo](){super[bo]&&super[bo]();const{currentIndex:e,items:t}=this[C];return en(this,e<0&&t?0:e+1,1)}[yo](){super[yo]&&super[yo]();const{currentIndex:e,items:t}=this[C];return en(this,e<0&&t?t.length-1:e-1,-1)}[ye](e,t){const i=super[ye]?super[ye](e,t):{};if(t.availableItemFlags||t.items||t.currentIndex||t.currentItemRequired){const{currentIndex:r,desiredCurrentIndex:n,currentItem:s,currentItemRequired:p,items:u}=e,d=u?u.length:0;let c,l=n;if(t.items&&!t.currentIndex&&s&&d>0&&u[r]!==s){const h=u.indexOf(s);h>=0&&(l=h)}else t.currentIndex&&(r<0&&s!==null||r>=0&&(d===0||u[r]!==s)||n===null)&&(l=r);p&&l<0&&(l=0),l<0?(l=-1,c=-1):d===0?c=-1:(c=Math.max(Math.min(d-1,l),0),c=this[ti](e,{direction:1,index:c,wrap:!1}),c<0&&(c=this[ti](e,{direction:-1,index:c-1,wrap:!1})));const a=u&&u[c]||null;Object.assign(i,{currentIndex:c,desiredCurrentIndex:l,currentItem:a})}return i}}}(function(o){return class extends o{get[H](){return Object.assign(super[H]||{},{texts:null})}[mr](e){return super[mr]?super[mr](e):(t=e).getAttribute("aria-label")||t.getAttribute("alt")||t.innerText||t.textContent||"";var t}[ye](e,t){const i=super[ye]?super[ye](e,t):{};if(t.items){const{items:r}=e,n=function(s,p){return s?Array.from(s,u=>p(u)):null}(r,this[mr]);n&&(Object.freeze(n),Object.assign(i,{texts:n}))}return i}}}(function(o){return class extends o{[vo](){if(super[vo])return super[vo]()}[Wt](){if(super[Wt])return super[Wt]()}[go](){if(super[go])return super[go]()}[xo](){if(super[xo])return super[xo]()}[Zt](){if(super[Zt])return super[Zt]()}[wo](){if(super[wo])return super[wo]()}[_e](e){let t=!1;if(e.target===this){const i=this[C].orientation||"both",r=i==="horizontal"||i==="both",n=i==="vertical"||i==="both";switch(e.key){case"ArrowDown":n&&(t=e.altKey?this[Wt]():this[vo]());break;case"ArrowLeft":!r||e.metaKey||e.altKey||(t=this[go]());break;case"ArrowRight":!r||e.metaKey||e.altKey||(t=this[xo]());break;case"ArrowUp":n&&(t=e.altKey?this[Zt]():this[wo]());break;case"End":t=this[Wt]();break;case"Home":t=this[Zt]()}}return t||super[_e]&&super[_e](e)||!1}}}(Sn(function(o){return class extends o{[_e](e){let t=!1;if(this.orientation!=="horizontal")switch(e.key){case"PageDown":t=this.pageDown();break;case"PageUp":t=this.pageUp()}return t||super[_e]&&super[_e](e)}get orientation(){return super.orientation||this[C]&&this[C].orientation||"both"}pageDown(){return super.pageDown&&super.pageDown(),Ka(this,!0)}pageUp(){return super.pageUp&&super.pageUp(),Ka(this,!1)}get[mt](){return super[mt]||Va(this)}}}(function(o){return class extends o{constructor(){super(),Ns(this)}[Ti](e){if(super[Ti]&&super[Ti](e),e==null||e.length===0)return!1;const t=e.toLowerCase(),i=this[C].texts.findIndex(r=>r.substr(0,e.length).toLowerCase()===t);if(i>=0){const r=this[C].currentIndex;return this[W]({currentIndex:i}),this[C].currentIndex!==r}return!1}[_e](e){let t;switch(e.key){case"Backspace":(function(i){const r=i,n=r[Xt]?r[Xt].length:0;n>0&&(r[Xt]=r[Xt].substr(0,n-1)),i[Ti](r[Xt]),Ga(i)})(this),t=!0;break;case"Escape":Ns(this);break;default:e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||function(i,r){const n=i,s=n[Xt]||"";n[Xt]=s+r,i[Ti](n[Xt]),Ga(i)}(this,e.key)}return t||super[_e]&&super[_e](e)}}}(oa(function(o){return nh(Fc(o))}(function(o){return class extends o{constructor(){super(),this.addEventListener("mousedown",e=>{e.button===0&&(this[oe]=!0,this[Ki](e),this[oe]=!1)})}[Q](e){super[Q]&&super[Q](e),this[ze]&&Object.assign(this.style,{touchAction:"manipulation",mozUserSelect:"none",msUserSelect:"none",webkitUserSelect:"none",userSelect:"none"})}[Ki](e){const t=e.composedPath?e.composedPath()[0]:e.target,{items:i,currentItemRequired:r}=this[C];if(i&&t instanceof Node){const n=kc(i,t),s=n>=0?i[n]:null;(s&&!s.disabled||!s&&!r)&&(this[W]({currentIndex:n}),e.stopPropagation())}}}}(co)))))))))))))));class Wc extends sh{get[H](){return Object.assign(super[H],{availableItemFlags:null,highlightCurrentItem:!0,orientation:"vertical",currentItemFocused:!1})}async flashCurrentItem(){const e=this[C].focusVisible,t=matchMedia("(pointer: fine)").matches;(e||t)&&(this[W]({highlightCurrentItem:!1}),await new Promise(r=>setTimeout(r,75)),this[W]({highlightCurrentItem:!0}),await new Promise(r=>setTimeout(r,75)))}[Q](e){super[Q](e),this[ze]&&(this.addEventListener("disabledchange",r=>{this[oe]=!0;const n=r.target,{items:s}=this[C],p=s===null?-1:s.indexOf(n);if(p>=0){const u=this[C].availableItemFlags.slice();u[p]=!n.disabled,this[W]({availableItemFlags:u})}this[oe]=!1}),"PointerEvent"in window?this.addEventListener("pointerdown",r=>this[Ki](r)):this.addEventListener("touchstart",r=>this[Ki](r)),this.removeAttribute("tabindex"));const{currentIndex:t,items:i}=this[C];if((e.items||e.currentIndex||e.highlightCurrentItem)&&i){const{highlightCurrentItem:r}=this[C];i.forEach((n,s)=>{n.toggleAttribute("current",r&&s===t)})}(e.items||e.currentIndex||e.currentItemFocused||e.focusVisible)&&i&&i.forEach((r,n)=>{const s=n===t,p=t<0&&n===0;this[C].currentItemFocused?s||p||r.removeAttribute("tabindex"):(s||p)&&(r.tabIndex=0)})}[J](e){if(super[J](e),!this[ze]&&e.currentIndex&&!this[C].currentItemFocused){const{currentItem:t}=this[C];(t instanceof HTMLElement?t:this).focus(),this[W]({currentItemFocused:!0})}}get[mt](){return this[ae].content}[ye](e,t){const i=super[ye](e,t);if(t.currentIndex&&Object.assign(i,{currentItemFocused:!1}),t.items){const{items:r}=e,n=r===null?null:r.map(s=>!s.disabled);Object.assign(i,{availableItemFlags:n})}return i}get[le](){return Ft.html`
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
    `}}const wi=Symbol("documentMouseupListener");async function ah(o){const e=this,t=e[et].elementsFromPoint(o.clientX,o.clientY);if(e.opened){const i=t.indexOf(e[ae].source)>=0,r=e[ae].popup,n=t.indexOf(r)>=0,s=r.frame&&t.indexOf(r.frame)>=0;i?e[C].dragSelect&&(e[oe]=!0,e[W]({dragSelect:!1}),e[oe]=!1):n||s||(e[oe]=!0,await e.close(),e[oe]=!1)}}function Xn(o){o[C].opened&&o.isConnected?o[wi]||(o[wi]=ah.bind(o),document.addEventListener("mouseup",o[wi])):o[wi]&&(document.removeEventListener("mouseup",o[wi]),o[wi]=null)}function ia(o){return class extends o{get[H](){return Object.assign(super[H]||{},{disabled:!1})}get disabled(){return this[C].disabled}set disabled(e){this[W]({disabled:e})}[J](e){if(super[J]&&super[J](e),e.disabled&&(this.toggleAttribute("disabled",this.disabled),this[oe])){const t=new CustomEvent("disabled-changed",{bubbles:!0});this.dispatchEvent(t);const i=new CustomEvent("disabledchange",{bubbles:!0});this.dispatchEvent(i)}}}}function Qa(o,e,t,i){const r=Zc(o,t,i);let n=0,s=0;const p=t==="above"||t==="below";switch(t){case"above":n=r.y-e.top;break;case"below":n=e.bottom-r.y;break;case"left":s=r.x-e.left;break;case"right":s=e.right-r.x}switch(i){case"bottom":n=r.y-e.top;break;case"center":p?s=e.width:n=e.height;break;case"stretch":p?s=o.width:n=o.height;break;case"left":s=e.right-r.x;break;case"right":s=r.x-e.left;break;case"top":n=e.bottom-r.y}return n=Math.max(0,n),s=Math.max(0,s),{height:n,width:s}}function Zc(o,e,t){let i=0,r=0;const n=e==="above"||e==="below";switch(e){case"above":r=o.top;break;case"below":r=o.bottom;break;case"left":case"right":i=o[e]}switch(t){case"bottom":case"top":r=o[t];break;case"left":case"right":i=o[t];break;case"center":n?i=o.left+o.width/2:r=o.top+o.height/2;break;case"stretch":n?i=o.left:r=o.top}return{x:i,y:r}}function lh(o,e,t,i){const r=function(p){const{align:u,direction:d,rightToLeft:c}=p,l="below",a={above:"above",below:"below",column:"below","column-reverse":"above",left:"left",right:"right",row:c?"left":"right","row-reverse":c?"right":"left"}[d]||l,h={above:"horizontal",below:"horizontal",left:"vertical",right:"vertical"}[a],f={horizontal:"left",vertical:"top"}[h];return{align:{horizontal:{center:"center",end:c?"left":"right",left:"left",right:"right",start:c?"right":"left",stretch:"stretch"},vertical:{bottom:"bottom",center:"center",end:"bottom",start:"top",stretch:"stretch",top:"top"}}[h][u]||f,direction:a,rightToLeft:c}}(i),n=function(p,u){const d={above:"below",below:"above",left:"right",right:"left"},c={top:"bottom",bottom:"top",left:"right",right:"left"},l=[{align:u,direction:p}];return u==="center"||u==="stretch"?l.push({align:u,direction:d[p]}):(l.push({align:c[u],direction:p}),l.push({align:u,direction:d[p]}),l.push({align:c[u],direction:d[p]})),l}(r.direction,r.align);n.sort((p,u)=>function(d,c,l,a,h){const f=Qa(l,h,d.direction,d.align),m=Qa(l,h,c.direction,c.align),g=a.width<=f.width,v=a.height<=f.height,y=g||v,b=g&&v,x=a.width<=m.width,w=a.height<=m.height,E=x||w,S=x&&w,k=f.width*f.height,P=m.width*m.height;return b&&S?0:b?-1:S?1:y&&!E?-1:E&&!y?1:y&&k>P?-1:E&&P>k?1:k>P?-1:P>k?1:0}(p,u,o,e,t));const s=n[0];return s.rect=function(p,u,d,c,l){const a=Zc(p,c,l);let{x:h,y:f,bottom:m,right:g}=d,v=0,y=0,b=u.height,x=u.width;const w=c==="above"||c==="below";switch(c){case"above":y=a.y-u.height,m=a.y;break;case"below":y=a.y,f=a.y;break;case"left":v=a.x-u.width,g=a.x;break;case"right":v=a.x,h=a.x}switch(l){case"bottom":y=a.y-u.height,m=a.y;break;case"left":v=a.x,h=a.x;break;case"center":w?v=a.x-u.width/2:y=a.y-u.height/2;break;case"right":v=a.x-u.width,g=a.x;break;case"stretch":w?(v=a.x,x=p.width):(y=a.y,b=p.height);break;case"top":y=a.y,f=a.y}return v=Math.max(v,h),y=Math.max(y,f),x=Math.min(x,g-v),b=Math.min(b,m-y),new DOMRect(v,y,x,b)}(o,e,t,s.direction,s.align),s}const Ht=Symbol("implicitCloseListener");async function ch(o){const e=this,t=o.relatedTarget||document.activeElement;t instanceof Element&&!Do(e,t)&&(e[oe]=!0,await e.close({canceled:"window blur"}),e[oe]=!1)}async function uh(o){const e=this,t=o.type!=="resize"||e[C].closeOnWindowResize;!Pc(e,o)&&t&&(e[oe]=!0,await e.close({canceled:`window ${o.type}`}),e[oe]=!1)}const dh=Sn(function(o){return class extends o{get closeOnWindowResize(){return this[C].closeOnWindowResize}set closeOnWindowResize(e){this[W]({closeOnWindowResize:e})}get[H](){return Object.assign(super[H]||{},{closeOnWindowResize:!0,role:"alert"})}[_e](e){let t=!1;return e.key==="Escape"&&(this.close({canceled:"Escape"}),t=!0),t||super.keydown&&super.keydown(e)||!1}[Q](e){if(super[Q]&&super[Q](e),this[ze]&&this.addEventListener("blur",ch.bind(this)),e.role){const{role:t}=this[C];this.setAttribute("role",t)}}[J](e){super[J]&&super[J](e),e.opened&&(this.opened?("requestIdleCallback"in window?window.requestIdleCallback:setTimeout)(()=>{var i;this.opened&&((i=this)[Ht]=uh.bind(i),window.addEventListener("blur",i[Ht]),window.addEventListener("resize",i[Ht]),window.addEventListener("scroll",i[Ht]))}):(t=this)[Ht]&&(window.removeEventListener("blur",t[Ht]),window.removeEventListener("resize",t[Ht]),window.removeEventListener("scroll",t[Ht]),t[Ht]=null));var t}get role(){return super.role}set role(e){super.role=e,this[or]||this[W]({role:e})}}}(zc));class ra extends dh{[Q](e){super[Q](e),e.backdropPartType&&(this[ae].backdrop.addEventListener("mousedown",Wa.bind(this)),"PointerEvent"in window||this[ae].backdrop.addEventListener("touchend",Wa))}}async function Wa(o){const e=this;e[oe]=!0,await e.close({canceled:"mousedown outside"}),e[oe]=!1,o.preventDefault(),o.stopPropagation()}const nr=Symbol("resizeListener"),ph=ia(Hc(oa($c(co))));function Yn(o){const{popupAlign:e,popupDirection:t,rightToLeft:i}=o[C],r=lh(o[ae].source.getBoundingClientRect(),o[ae].popup.getBoundingClientRect(),Xc(),{align:e,direction:t,rightToLeft:i});o[W]({popupLayout:r})}function Za(o,e,t){if(!t||t.popupPartType){const{popupPartType:i}=e,r=o.getElementById("popup");r&&Hi(r,i)}if(!t||t.sourcePartType){const{sourcePartType:i}=e,r=o.getElementById("source");r&&Hi(r,i)}}function Xc(){const o=window.visualViewport;return o?new DOMRect(o.offsetLeft,o.offsetTop,o.width,o.height):new DOMRect(0,0,window.innerWidth,window.innerHeight)}const hh=Js(Sn(function(o){return class extends o{connectedCallback(){super.connectedCallback(),Xn(this)}get[H](){return Object.assign(super[H]||{},{dragSelect:!0})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),Xn(this)}[J](e){super[J](e),e.opened&&Xn(this)}[ye](e,t){const i=super[ye](e,t);return t.opened&&e.opened&&Object.assign(i,{dragSelect:!0}),i}}}(class extends ph{get[H](){return Object.assign(super[H],{ariaHasPopup:"true",popupAlign:"start",popupDirection:"column",popupLayout:null,popupPartType:ra,sourcePartType:"div"})}get[oi](){return this[ae].source}get frame(){return this[ae].popup.frame}get horizontalAlign(){return this[C].popupAlign}set horizontalAlign(o){console.warn('The "horizontalAlign" property has been renamed to "popupAlign"; the "horizontal-align" attribute is now "popup-align".'),this[W]({popupAlign:o})}get popupAlign(){return this[C].popupAlign}set popupAlign(o){this[W]({popupAlign:o})}get popupDirection(){return this[C].popupDirection}set popupDirection(o){this[W]({popupDirection:o})}get popupPosition(){return this[C].popupPosition}set popupPosition(o){console.warn('The "popupPosition" property has been renamed to "popupDirection"; the "popup-position" attribute is now "popup-direction".'),this[W]({popupPosition:o})}get popupPartType(){return this[C].popupPartType}set popupPartType(o){this[W]({popupPartType:o})}[Q](o){if(super[Q](o),Za(this[et],this[C],o),this[ze]||o.ariaHasPopup){const{ariaHasPopup:e}=this[C];e===null?this[oi].removeAttribute("aria-haspopup"):this[oi].setAttribute("aria-haspopup",this[C].ariaHasPopup)}if(o.popupPartType&&(this[ae].popup.addEventListener("open",()=>{this.opened||(this[oe]=!0,this.open(),this[oe]=!1)}),this[ae].popup.addEventListener("close",e=>{if(!this.closed){this[oe]=!0;const t=e.detail.closeResult;this.close(t),this[oe]=!1}})),o.opened||o.popupLayout){const{opened:e,popupLayout:t}=this[C];if(e)if(t){const i=this[ae].popup,r=function(n){const{align:s,direction:p,rect:u}=n,d=Xc(),c={},l=p==="above"||p==="below";switch(p){case"above":c.bottom=d.bottom-u.bottom+"px";break;case"below":c.top=`${u.top}px`;break;case"left":c.right=d.right-u.right+"px";break;case"right":c.left=`${u.left}px`}switch(s){case"bottom":c.bottom=d.bottom-u.bottom+"px";break;case"center":case"stretch":l?(c.left=`${u.left}px`,c.right=d.right-u.right+"px"):(c.bottom=d.bottom-u.bottom+"px",c.top=`${u.top}px`);break;case"left":c.left=`${u.left}px`;break;case"right":c.right=d.right-u.right+"px";break;case"top":c.top=`${u.top}px`}return c}(t);Object.assign(i.style,r,{opacity:""})}else Object.assign(this[ae].popup.style,{bottom:"",left:"",opacity:0,right:"",top:""});else Object.assign(this[ae].popup.style,{bottom:"",left:"",opacity:"",right:"",top:""})}if(o.opened){const{opened:e}=this[C];this[ae].popup.opened=e}if(o.disabled&&"disabled"in this[ae].source){const{disabled:e}=this[C];this[ae].source.disabled=e}if(o.popupLayout){const{popupLayout:e}=this[C];if(e){const{align:t,direction:i}=e,r=this[ae].popup;"position"in r&&(r.position=i),"align"in r&&(r.align=t)}}}[J](o){super[J](o);const{opened:e}=this[C];var t;o.opened?e?(t=this,setTimeout(()=>{t[C].opened&&(Yn(t),function(i){const r=i;r[nr]=()=>{Yn(i)},(window.visualViewport||window).addEventListener("resize",r[nr])}(t))})):function(i){const r=i;r[nr]&&((window.visualViewport||window).removeEventListener("resize",r[nr]),r[nr]=null)}(this):o.popupLayout&&this[C].opened&&!this[C].popupLayout&&Yn(this)}get sourcePartType(){return this[C].sourcePartType}set sourcePartType(o){this[W]({sourcePartType:o})}[ye](o,e){const t=super[ye](o,e);return(e.opened&&!o.opened||o.opened&&(e.popupAlign||e.popupDirection||e.rightToLeft))&&Object.assign(t,{popupLayout:null}),t}get[le](){const o=super[le];return o.content.append(Ne.html`
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
    `),Za(o.content,this[C]),o}})));async function fh(o){const e=this,t=o.relatedTarget||document.activeElement;t instanceof Element&&!Do(e,t)&&(e[oe]=!0,await e.close({canceled:"blur"}),e[oe]=!1)}const Ei=Symbol("documentMousemoveListener");function mh(o){const e=this,{hasHoveredOverItemSinceOpened:t,opened:i}=e[C];if(i){const r=o.composedPath?o.composedPath()[0]:o.target,n=e.items;if(r&&r instanceof Node&&n){const s=kc(n,r),p=n[s],u=p&&!p.disabled?s:-1;(t||u>=0)&&u!==e[C].currentIndex&&(e[oe]=!0,e[W]({currentIndex:u}),u>=0&&!t&&e[W]({hasHoveredOverItemSinceOpened:!0}),e[oe]=!1)}}}function Jn(o){o[C].opened&&o.isConnected?o[Ei]||(o[Ei]=mh.bind(o),document.addEventListener("mousemove",o[Ei])):o[Ei]&&(document.removeEventListener("mousemove",o[Ei]),o[Ei]=null)}async function Xa(o){const e=o[oe],t=o[C].currentIndex>=0,i=o.items;if(i){const r=t?i[o[C].currentIndex]:void 0,n=o[C].popupList;t&&"flashCurrentItem"in n&&await n.flashCurrentItem();const s=o[oe];o[oe]=e,await o.close(r),o[oe]=s}}const vh=function(o){return class extends o{connectedCallback(){super.connectedCallback(),Jn(this)}get[H](){return Object.assign(super[H]||{},{currentIndex:-1,hasHoveredOverItemSinceOpened:!1,popupList:null})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),Jn(this)}[_e](e){let t=!1;return e.key==="Enter"&&this.opened&&(Xa(this),t=!0),t||super[_e]&&super[_e](e)||!1}[Q](e){if(super[Q]&&super[Q](e),e.popupList){const{popupList:t}=this[C];t&&(t.addEventListener("mouseup",async i=>{const r=this[C].currentIndex;this[C].dragSelect||r>=0?(i.stopPropagation(),this[oe]=!0,await Xa(this),this[oe]=!1):i.stopPropagation()}),t.addEventListener("currentindexchange",i=>{this[oe]=!0;const r=i;this[W]({currentIndex:r.detail.currentIndex}),this[oe]=!1}))}if(e.currentIndex||e.popupList){const{currentIndex:t,popupList:i}=this[C];i&&"currentIndex"in i&&(i.currentIndex=t)}}[J](e){if(super[J]&&super[J](e),e.opened){if(this[C].opened){const{popupList:t}=this[C];t.scrollCurrentItemIntoView&&setTimeout(()=>{t.scrollCurrentItemIntoView()})}Jn(this)}}[ye](e,t){const i=super[ye]?super[ye](e,t):{};return t.opened&&e.opened&&Object.assign(i,{hasHoveredOverItemSinceOpened:!1}),i}}}(class extends hh{get[H](){return Object.assign(super[H],{sourcePartType:"button"})}[_e](o){let e;switch(o.key){case" ":case"ArrowDown":case"ArrowUp":this.closed&&(this.open(),e=!0);break;case"Enter":this.opened||(this.open(),e=!0);break;case"Escape":this.opened&&(this.close({canceled:"Escape"}),e=!0)}if(e=super[_e]&&super[_e](o),!e&&this.opened&&!o.metaKey&&!o.altKey)switch(o.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":case"PageDown":case"PageUp":case" ":e=!0}return e}[Q](o){if(super[Q](o),this[ze]&&(this.addEventListener("blur",fh.bind(this)),this[ae].source.addEventListener("focus",async e=>{const t=Pc(this[ae].popup,e),i=this[C].popupHeight!==null;!t&&this.opened&&i&&(this[oe]=!0,await this.close(),this[oe]=!1)})),o.opened){const{opened:e}=this[C];this.toggleAttribute("opened",e)}o.sourcePartType&&this[ae].source.addEventListener("mousedown",e=>{if(this.disabled)return void e.preventDefault();const t=e;t.button&&t.button!==0||(setTimeout(()=>{this.opened||(this[oe]=!0,this.open(),this[oe]=!1)}),e.stopPropagation())}),o.popupPartType&&this[ae].popup.removeAttribute("tabindex")}get[le](){const o=super[le];return o.content.append(Ne.html`
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
      `),o}});class gh extends vh{get[H](){return Object.assign(super[H],{menuPartType:Wc})}get items(){const e=this[ae]&&this[ae].menu;return e?e.items:null}get menuPartType(){return this[C].menuPartType}set menuPartType(e){this[W]({menuPartType:e})}[Q](e){if(super[Q](e),Ya(this[et],this[C],e),e.menuPartType&&(this[ae].menu.addEventListener("blur",async t=>{const i=t.relatedTarget||document.activeElement;this.opened&&!Do(this[ae].menu,i)&&(this[oe]=!0,await this.close(),this[oe]=!1)}),this[ae].menu.addEventListener("mousedown",t=>{t.button===0&&this.opened&&(t.stopPropagation(),t.preventDefault())})),e.opened){const{opened:t}=this[C];this[ae].source.setAttribute("aria-expanded",t.toString())}}[J](e){super[J](e),e.menuPartType&&this[W]({popupList:this[ae].menu})}[ye](e,t){const i=super[ye](e,t);return t.opened&&!e.opened&&Object.assign(i,{currentIndex:-1}),i}get[le](){const e=super[le],t=e.content.querySelector("slot:not([name])");return t&&t.replaceWith(Ne.html`
        <div id="menu" part="menu">
          <slot></slot>
        </div>
      `),Ya(e.content,this[C]),e.content.append(Ne.html`
      <style>
        [part~="menu"] {
          max-height: 100%;
        }
      </style>
    `),e}}function Ya(o,e,t){if(!t||t.menuPartType){const{menuPartType:i}=e,r=o.getElementById("menu");r&&Hi(r,i)}}const bh=ia(co);class Yc extends bh{get[H](){return Object.assign(super[H],{direction:"down"})}get direction(){return this[C].direction}set direction(e){this[W]({direction:e})}[Q](e){if(super[Q](e),e.direction){const{direction:t}=this[C];this[ae].downIcon.style.display=t==="down"?"block":"none",this[ae].upIcon.style.display=t==="up"?"block":"none"}}get[le](){return Ft.html`
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
    `}}function Ja(o,e,t){if(!t||t.popupTogglePartType){const{popupTogglePartType:i}=e,r=o.getElementById("popupToggle");r&&Hi(r,i)}}class yh extends Wc{get[le](){const e=super[le];return e.content.append(Ne.html`
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
      `),e}}class xh extends Yc{get[le](){const e=super[le],t=e.content.getElementById("downIcon"),i=Ne.html`
      <svg
        id="downIcon"
        part="toggle-icon down-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 5"
      >
        <path d="M 0 0 l5 5 5 -5 z" />
      </svg>
    `.firstElementChild;t&&i&&qs(t,i);const r=e.content.getElementById("upIcon"),n=Ne.html`
      <svg
        id="upIcon"
        part="toggle-icon up-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 5"
      >
        <path d="M 0 5 l5 -5 5 5 z" />
      </svg>
    `.firstElementChild;return r&&n&&qs(r,n),e.content.append(Ne.html`
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
      `),e}}class wh extends Ys{}class Eh extends ra{get[H](){return Object.assign(super[H],{backdropPartType:wh,framePartType:ta})}}class Ah extends function(e){return class extends e{get[H](){return Object.assign(super[H]||{},{popupTogglePartType:Yc})}get popupTogglePartType(){return this[C].popupTogglePartType}set popupTogglePartType(t){this[W]({popupTogglePartType:t})}[Q](t){if(super[Q](t),Ja(this[et],this[C],t),t.popupDirection||t.popupTogglePartType){const{popupDirection:i}=this[C],r=i==="above"||i==="column-reverse"?"up":"down",n=this[ae].popupToggle;"direction"in n&&(n.direction=r)}if(t.disabled){const{disabled:i}=this[C];this[ae].popupToggle.disabled=i}}get[le](){const t=super[le],i=t.content.querySelector('[part~="source"]');return i&&i.append(Ne.html`
          <div
            id="popupToggle"
            part="popup-toggle"
            exportparts="toggle-icon, down-icon, up-icon"
            tabindex="-1"
          ></div>
      `),Ja(t.content,this[C]),t.content.append(Ne.html`
      <style>
        [part~="popup-toggle"] {
          outline: none;
        }

        [part~="source"] {
          align-items: center;
          display: flex;
        }
      </style>
    `),t}}}(gh){get[H](){return Object.assign(super[H],{menuPartType:yh,popupPartType:Eh,popupTogglePartType:xh,sourcePartType:Kc})}get[le](){const e=super[le];return e.content.append(Ne.html`
        <style>
          [part~="menu"] {
            background: window;
            border: none;
            padding: 0.5em 0;
          }
        </style>
      `),e}}customElements.define("elix-menu-button",class extends Ah{});class _h extends function(e){return class extends e{constructor(){super();const t=this;!this[Wo]&&t.attachInternals&&(this[Wo]=t.attachInternals())}attributeChangedCallback(t,i,r){if(t==="current"){const n=Ir(t,r);this.current!==n&&(this.current=n)}else super.attributeChangedCallback(t,i,r)}get[H](){return Object.assign(super[H]||{},{current:!1})}[Q](t){if(super[Q](t),t.current){const{current:i}=this[C];kr(this,"current",i)}}[J](t){if(super[J]&&super[J](t),t.current){const{current:i}=this[C],r=new CustomEvent("current-changed",{bubbles:!0,detail:{current:i}});this.dispatchEvent(r);const n=new CustomEvent("currentchange",{bubbles:!0,detail:{current:i}});this.dispatchEvent(n)}}get current(){return this[C].current}set current(t){this[W]({current:t})}}}(ia(function(e){return class extends e{constructor(){super();const t=this;!this[Wo]&&t.attachInternals&&(this[Wo]=t.attachInternals())}get[H](){return Object.assign(super[H]||{},{selected:!1})}[Q](t){if(super[Q](t),t.selected){const{selected:i}=this[C];kr(this,"selected",i)}}[J](t){if(super[J]&&super[J](t),t.selected){const{selected:i}=this[C],r=new CustomEvent("selected-changed",{bubbles:!0,detail:{selected:i}});this.dispatchEvent(r);const n=new CustomEvent("selectedchange",{bubbles:!0,detail:{selected:i}});this.dispatchEvent(n)}}get selected(){return this[C].selected}set selected(t){this[W]({selected:t})}}}(co))){}class Oh extends _h{get[le](){return Ft.html`
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
    `}}customElements.define("elix-menu-item",class extends Oh{});class qh extends co{get disabled(){return!0}[Q](e){super[Q](e),this[ze]&&this.setAttribute("aria-hidden","true")}}class Sh extends qh{get[le](){return Ft.html`
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
    `}}customElements.define("elix-menu-separator",class extends Sh{});const cn=Symbol("timeout"),Ih=oa(function(o){return class extends o{get[ji](){return super[ji]||this}[Q](e){super[Q]&&super[Q](e),this[ze]&&(this[ji]===this?this:this[et]).addEventListener("transitionend",t=>{const i=this[C].effectEndTarget||this[ji];t.target===i&&this[W]({effectPhase:"after"})})}[J](e){if(super[J]&&super[J](e),e.effect||e.effectPhase){const{effect:t,effectPhase:i}=this[C],r=new CustomEvent("effect-phase-changed",{bubbles:!0,detail:{effect:t,effectPhase:i}});this.dispatchEvent(r);const n=new CustomEvent("effectphasechange",{bubbles:!0,detail:{effect:t,effectPhase:i}});this.dispatchEvent(n),t&&(i!=="after"&&this.offsetHeight,i==="before"&&this[W]({effectPhase:"during"}))}}async[Zs](e){await this[W]({effect:e,effectPhase:"before"})}}}(ra));class kh extends Ih{constructor(){super(),this.addEventListener("mouseout",()=>{el(this)}),this.addEventListener("mouseover",()=>{Jc(this)})}attributeChangedCallback(e,t,i){e==="duration"?this.duration=Number(i):super.attributeChangedCallback(e,t,i)}get[H](){return Object.assign(super[H],{duration:null,fromEdge:"bottom"})}get duration(){return this[C].duration}set duration(e){isNaN(e)||this[W]({duration:e})}get[ji](){return this[ae].frame}get fromEdge(){return this[C].fromEdge}set fromEdge(e){this[W]({fromEdge:e})}[Q](e){if(super[Q](e),e.fromEdge){const t={bottom:{alignItems:"center",justifyContent:"flex-end"},"bottom-left":{alignItems:"flex-start",justifyContent:"flex-end"},"bottom-right":{alignItems:"flex-end",justifyContent:"flex-end"},top:{alignItems:"center",justifyContent:null},"top-left":{alignItems:"flex-start",justifyContent:null},"top-right":{alignItems:"flex-end",justifyContent:null}};Object.assign(this.style,t[this[C].fromEdge])}if(e.effect||e.effectPhase||e.fromEdge||e.rightToLeft){const{effect:t,effectPhase:i,fromEdge:r,rightToLeft:n}=this[C],s={"bottom-left":"bottom-right","bottom-right":"bottom-left","top-left":"top-right","top-right":"top-left"},p=n&&s[r]||r,u={bottom:"translateY(100%)","bottom-left":"translateX(-100%)","bottom-right":"translateX(100%)",top:"translateY(-100%)","top-left":"translateX(-100%)","top-right":"translateX(100%)"},d={bottom:"translateY(0)","bottom-left":"translateX(0)","bottom-right":"translateX(0)",top:"translateY(0)","top-left":"translateX(0)","top-right":"translateX(0)"},c=t==="open"&&i!=="before"||t==="close"&&i==="before",l=c?1:0,a=c?d[p]:u[p];Object.assign(this[ae].frame.style,{opacity:l,transform:a})}}[J](e){super[J](e),el(this)}}function Jc(o){const e=o;e[cn]&&(clearTimeout(e[cn]),e[cn]=null)}function el(o){o.opened&&function(e){Jc(e);const t=e[C].duration;t!==null&&t>0&&(e[cn]=setTimeout(()=>{e.close()},t))}(o)}class Ph extends kh{get[H](){return Object.assign(super[H],{framePartType:ta})}get[le](){const e=super[le];return e.content.append(Ne.html`
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
 */var tl,sr;function ue(o,e,t,i){var r,n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,i);else for(var p=o.length-1;p>=0;p--)(r=o[p])&&(s=(n<3?r(s):n>3?r(e,t,s):r(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}customElements.define("elix-toast",class extends Ph{}),tl=typeof self!="undefined"?self:void 0,sr=function(){return function(o){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i,l:!1,exports:{}};return o[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=o,t.c=e,t.d=function(i,r,n){t.o(i,r)||Object.defineProperty(i,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(i){var r=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(r,"a",r),r},t.o=function(i,r){return Object.prototype.hasOwnProperty.call(i,r)},t.p="",t(t.s=109)}([function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=t(17),r=t(18),n=t(19),s=t(45),p=t(46),u=t(47),d=t(48),c=t(49),l=t(12),a=t(32),h=t(33),f=t(31),m=t(1),g={Scope:m.Scope,create:m.create,find:m.find,query:m.query,register:m.register,Container:i.default,Format:r.default,Leaf:n.default,Embed:d.default,Scroll:s.default,Block:u.default,Inline:p.default,Text:c.default,Attributor:{Attribute:l.default,Class:a.default,Style:h.default,Store:f.default}};e.default=g},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,h){a.__proto__=h}||function(a,h){for(var f in h)h.hasOwnProperty(f)&&(a[f]=h[f])},function(a,h){function f(){this.constructor=a}i(a,h),a.prototype=h===null?Object.create(h):(f.prototype=h.prototype,new f)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(a){function h(f){var m=this;return f="[Parchment] "+f,(m=a.call(this,f)||this).message=f,m.name=m.constructor.name,m}return r(h,a),h}(Error);e.ParchmentError=n;var s,p={},u={},d={},c={};function l(a,h){var f;if(h===void 0&&(h=s.ANY),typeof a=="string")f=c[a]||p[a];else if(a instanceof Text||a.nodeType===Node.TEXT_NODE)f=c.text;else if(typeof a=="number")a&s.LEVEL&s.BLOCK?f=c.block:a&s.LEVEL&s.INLINE&&(f=c.inline);else if(a instanceof HTMLElement){var m=(a.getAttribute("class")||"").split(/\s+/);for(var g in m)if(f=u[m[g]])break;f=f||d[a.tagName]}return f==null?null:h&s.LEVEL&f.scope&&h&s.TYPE&f.scope?f:null}e.DATA_KEY="__blot",function(a){a[a.TYPE=3]="TYPE",a[a.LEVEL=12]="LEVEL",a[a.ATTRIBUTE=13]="ATTRIBUTE",a[a.BLOT=14]="BLOT",a[a.INLINE=7]="INLINE",a[a.BLOCK=11]="BLOCK",a[a.BLOCK_BLOT=10]="BLOCK_BLOT",a[a.INLINE_BLOT=6]="INLINE_BLOT",a[a.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",a[a.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",a[a.ANY=15]="ANY"}(s=e.Scope||(e.Scope={})),e.create=function(a,h){var f=l(a);if(f==null)throw new n("Unable to create "+a+" blot");var m=f,g=a instanceof Node||a.nodeType===Node.TEXT_NODE?a:m.create(h);return new m(g,h)},e.find=function a(h,f){return f===void 0&&(f=!1),h==null?null:h[e.DATA_KEY]!=null?h[e.DATA_KEY].blot:f?a(h.parentNode,f):null},e.query=l,e.register=function a(){for(var h=[],f=0;f<arguments.length;f++)h[f]=arguments[f];if(h.length>1)return h.map(function(v){return a(v)});var m=h[0];if(typeof m.blotName!="string"&&typeof m.attrName!="string")throw new n("Invalid definition");if(m.blotName==="abstract")throw new n("Cannot register abstract class");if(c[m.blotName||m.attrName]=m,typeof m.keyName=="string")p[m.keyName]=m;else if(m.className!=null&&(u[m.className]=m),m.tagName!=null){Array.isArray(m.tagName)?m.tagName=m.tagName.map(function(v){return v.toUpperCase()}):m.tagName=m.tagName.toUpperCase();var g=Array.isArray(m.tagName)?m.tagName:[m.tagName];g.forEach(function(v){d[v]!=null&&m.className!=null||(d[v]=m)})}return m}},function(o,e,t){var i=t(51),r=t(11),n=t(3),s=t(20),p=String.fromCharCode(0),u=function(d){Array.isArray(d)?this.ops=d:d!=null&&Array.isArray(d.ops)?this.ops=d.ops:this.ops=[]};u.prototype.insert=function(d,c){var l={};return d.length===0?this:(l.insert=d,c!=null&&typeof c=="object"&&Object.keys(c).length>0&&(l.attributes=c),this.push(l))},u.prototype.delete=function(d){return d<=0?this:this.push({delete:d})},u.prototype.retain=function(d,c){if(d<=0)return this;var l={retain:d};return c!=null&&typeof c=="object"&&Object.keys(c).length>0&&(l.attributes=c),this.push(l)},u.prototype.push=function(d){var c=this.ops.length,l=this.ops[c-1];if(d=n(!0,{},d),typeof l=="object"){if(typeof d.delete=="number"&&typeof l.delete=="number")return this.ops[c-1]={delete:l.delete+d.delete},this;if(typeof l.delete=="number"&&d.insert!=null&&(c-=1,typeof(l=this.ops[c-1])!="object"))return this.ops.unshift(d),this;if(r(d.attributes,l.attributes)){if(typeof d.insert=="string"&&typeof l.insert=="string")return this.ops[c-1]={insert:l.insert+d.insert},typeof d.attributes=="object"&&(this.ops[c-1].attributes=d.attributes),this;if(typeof d.retain=="number"&&typeof l.retain=="number")return this.ops[c-1]={retain:l.retain+d.retain},typeof d.attributes=="object"&&(this.ops[c-1].attributes=d.attributes),this}}return c===this.ops.length?this.ops.push(d):this.ops.splice(c,0,d),this},u.prototype.chop=function(){var d=this.ops[this.ops.length-1];return d&&d.retain&&!d.attributes&&this.ops.pop(),this},u.prototype.filter=function(d){return this.ops.filter(d)},u.prototype.forEach=function(d){this.ops.forEach(d)},u.prototype.map=function(d){return this.ops.map(d)},u.prototype.partition=function(d){var c=[],l=[];return this.forEach(function(a){(d(a)?c:l).push(a)}),[c,l]},u.prototype.reduce=function(d,c){return this.ops.reduce(d,c)},u.prototype.changeLength=function(){return this.reduce(function(d,c){return c.insert?d+s.length(c):c.delete?d-c.delete:d},0)},u.prototype.length=function(){return this.reduce(function(d,c){return d+s.length(c)},0)},u.prototype.slice=function(d,c){d=d||0,typeof c!="number"&&(c=1/0);for(var l=[],a=s.iterator(this.ops),h=0;h<c&&a.hasNext();){var f;h<d?f=a.next(d-h):(f=a.next(c-h),l.push(f)),h+=s.length(f)}return new u(l)},u.prototype.compose=function(d){var c=s.iterator(this.ops),l=s.iterator(d.ops),a=[],h=l.peek();if(h!=null&&typeof h.retain=="number"&&h.attributes==null){for(var f=h.retain;c.peekType()==="insert"&&c.peekLength()<=f;)f-=c.peekLength(),a.push(c.next());h.retain-f>0&&l.next(h.retain-f)}for(var m=new u(a);c.hasNext()||l.hasNext();)if(l.peekType()==="insert")m.push(l.next());else if(c.peekType()==="delete")m.push(c.next());else{var g=Math.min(c.peekLength(),l.peekLength()),v=c.next(g),y=l.next(g);if(typeof y.retain=="number"){var b={};typeof v.retain=="number"?b.retain=g:b.insert=v.insert;var x=s.attributes.compose(v.attributes,y.attributes,typeof v.retain=="number");if(x&&(b.attributes=x),m.push(b),!l.hasNext()&&r(m.ops[m.ops.length-1],b)){var w=new u(c.rest());return m.concat(w).chop()}}else typeof y.delete=="number"&&typeof v.retain=="number"&&m.push(y)}return m.chop()},u.prototype.concat=function(d){var c=new u(this.ops.slice());return d.ops.length>0&&(c.push(d.ops[0]),c.ops=c.ops.concat(d.ops.slice(1))),c},u.prototype.diff=function(d,c){if(this.ops===d.ops)return new u;var l=[this,d].map(function(g){return g.map(function(v){if(v.insert!=null)return typeof v.insert=="string"?v.insert:p;throw new Error("diff() called "+(g===d?"on":"with")+" non-document")}).join("")}),a=new u,h=i(l[0],l[1],c),f=s.iterator(this.ops),m=s.iterator(d.ops);return h.forEach(function(g){for(var v=g[1].length;v>0;){var y=0;switch(g[0]){case i.INSERT:y=Math.min(m.peekLength(),v),a.push(m.next(y));break;case i.DELETE:y=Math.min(v,f.peekLength()),f.next(y),a.delete(y);break;case i.EQUAL:y=Math.min(f.peekLength(),m.peekLength(),v);var b=f.next(y),x=m.next(y);r(b.insert,x.insert)?a.retain(y,s.attributes.diff(b.attributes,x.attributes)):a.push(x).delete(y)}v-=y}}),a.chop()},u.prototype.eachLine=function(d,c){c=c||`
`;for(var l=s.iterator(this.ops),a=new u,h=0;l.hasNext();){if(l.peekType()!=="insert")return;var f=l.peek(),m=s.length(f)-l.peekLength(),g=typeof f.insert=="string"?f.insert.indexOf(c,m)-m:-1;if(g<0)a.push(l.next());else if(g>0)a.push(l.next(g));else{if(d(a,l.next(1).attributes||{},h)===!1)return;h+=1,a=new u}}a.length()>0&&d(a,{},h)},u.prototype.transform=function(d,c){if(c=!!c,typeof d=="number")return this.transformPosition(d,c);for(var l=s.iterator(this.ops),a=s.iterator(d.ops),h=new u;l.hasNext()||a.hasNext();)if(l.peekType()!=="insert"||!c&&a.peekType()==="insert")if(a.peekType()==="insert")h.push(a.next());else{var f=Math.min(l.peekLength(),a.peekLength()),m=l.next(f),g=a.next(f);if(m.delete)continue;g.delete?h.push(g):h.retain(f,s.attributes.transform(m.attributes,g.attributes,c))}else h.retain(s.length(l.next()));return h.chop()},u.prototype.transformPosition=function(d,c){c=!!c;for(var l=s.iterator(this.ops),a=0;l.hasNext()&&a<=d;){var h=l.peekLength(),f=l.peekType();l.next(),f!=="delete"?(f==="insert"&&(a<d||!c)&&(d+=h),a+=h):d-=Math.min(h,d-a)}return d},o.exports=u},function(o,e){var t=Object.prototype.hasOwnProperty,i=Object.prototype.toString,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,s=function(c){return typeof Array.isArray=="function"?Array.isArray(c):i.call(c)==="[object Array]"},p=function(c){if(!c||i.call(c)!=="[object Object]")return!1;var l,a=t.call(c,"constructor"),h=c.constructor&&c.constructor.prototype&&t.call(c.constructor.prototype,"isPrototypeOf");if(c.constructor&&!a&&!h)return!1;for(l in c);return l===void 0||t.call(c,l)},u=function(c,l){r&&l.name==="__proto__"?r(c,l.name,{enumerable:!0,configurable:!0,value:l.newValue,writable:!0}):c[l.name]=l.newValue},d=function(c,l){if(l==="__proto__"){if(!t.call(c,l))return;if(n)return n(c,l).value}return c[l]};o.exports=function c(){var l,a,h,f,m,g,v=arguments[0],y=1,b=arguments.length,x=!1;for(typeof v=="boolean"&&(x=v,v=arguments[1]||{},y=2),(v==null||typeof v!="object"&&typeof v!="function")&&(v={});y<b;++y)if((l=arguments[y])!=null)for(a in l)h=d(v,a),v!==(f=d(l,a))&&(x&&f&&(p(f)||(m=s(f)))?(m?(m=!1,g=h&&s(h)?h:[]):g=h&&p(h)?h:{},u(v,{name:a,newValue:c(x,g,f)})):f!==void 0&&u(v,{name:a,newValue:f}));return v}},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BlockEmbed=e.bubbleFormats=void 0;var i=function(){function y(b,x){for(var w=0;w<x.length;w++){var E=x[w];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(b,E.key,E)}}return function(b,x,w){return x&&y(b.prototype,x),w&&y(b,w),b}}(),r=function y(b,x,w){b===null&&(b=Function.prototype);var E=Object.getOwnPropertyDescriptor(b,x);if(E===void 0){var S=Object.getPrototypeOf(b);return S===null?void 0:y(S,x,w)}if("value"in E)return E.value;var k=E.get;return k!==void 0?k.call(w):void 0},n=l(t(3)),s=l(t(2)),p=l(t(0)),u=l(t(16)),d=l(t(6)),c=l(t(7));function l(y){return y&&y.__esModule?y:{default:y}}function a(y,b){if(!(y instanceof b))throw new TypeError("Cannot call a class as a function")}function h(y,b){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||typeof b!="object"&&typeof b!="function"?y:b}function f(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(y,b):y.__proto__=b)}var m=function(y){function b(){return a(this,b),h(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return f(b,y),i(b,[{key:"attach",value:function(){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"attach",this).call(this),this.attributes=new p.default.Attributor.Store(this.domNode)}},{key:"delta",value:function(){return new s.default().insert(this.value(),(0,n.default)(this.formats(),this.attributes.values()))}},{key:"format",value:function(x,w){var E=p.default.query(x,p.default.Scope.BLOCK_ATTRIBUTE);E!=null&&this.attributes.attribute(E,w)}},{key:"formatAt",value:function(x,w,E,S){this.format(E,S)}},{key:"insertAt",value:function(x,w,E){if(typeof w=="string"&&w.endsWith(`
`)){var S=p.default.create(g.blotName);this.parent.insertBefore(S,x===0?this:this.next),S.insertAt(0,w.slice(0,-1))}else r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertAt",this).call(this,x,w,E)}}]),b}(p.default.Embed);m.scope=p.default.Scope.BLOCK_BLOT;var g=function(y){function b(x){a(this,b);var w=h(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,x));return w.cache={},w}return f(b,y),i(b,[{key:"delta",value:function(){return this.cache.delta==null&&(this.cache.delta=this.descendants(p.default.Leaf).reduce(function(x,w){return w.length()===0?x:x.insert(w.value(),v(w))},new s.default).insert(`
`,v(this))),this.cache.delta}},{key:"deleteAt",value:function(x,w){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"deleteAt",this).call(this,x,w),this.cache={}}},{key:"formatAt",value:function(x,w,E,S){w<=0||(p.default.query(E,p.default.Scope.BLOCK)?x+w===this.length()&&this.format(E,S):r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"formatAt",this).call(this,x,Math.min(w,this.length()-x-1),E,S),this.cache={})}},{key:"insertAt",value:function(x,w,E){if(E!=null)return r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertAt",this).call(this,x,w,E);if(w.length!==0){var S=w.split(`
`),k=S.shift();k.length>0&&(x<this.length()-1||this.children.tail==null?r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertAt",this).call(this,Math.min(x,this.length()-1),k):this.children.tail.insertAt(this.children.tail.length(),k),this.cache={});var P=this;S.reduce(function(A,q){return(P=P.split(A,!0)).insertAt(0,q),q.length},x+k.length)}}},{key:"insertBefore",value:function(x,w){var E=this.children.head;r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertBefore",this).call(this,x,w),E instanceof u.default&&E.remove(),this.cache={}}},{key:"length",value:function(){return this.cache.length==null&&(this.cache.length=r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"length",this).call(this)+1),this.cache.length}},{key:"moveChildren",value:function(x,w){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"moveChildren",this).call(this,x,w),this.cache={}}},{key:"optimize",value:function(x){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"optimize",this).call(this,x),this.cache={}}},{key:"path",value:function(x){return r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"path",this).call(this,x,!0)}},{key:"removeChild",value:function(x){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"removeChild",this).call(this,x),this.cache={}}},{key:"split",value:function(x){var w=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(w&&(x===0||x>=this.length()-1)){var E=this.clone();return x===0?(this.parent.insertBefore(E,this),this):(this.parent.insertBefore(E,this.next),E)}var S=r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"split",this).call(this,x,w);return this.cache={},S}}]),b}(p.default.Block);function v(y){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return y==null?b:(typeof y.formats=="function"&&(b=(0,n.default)(b,y.formats())),y.parent==null||y.parent.blotName=="scroll"||y.parent.statics.scope!==y.statics.scope?b:v(y.parent,b))}g.blotName="block",g.tagName="P",g.defaultChild="break",g.allowedChildren=[d.default,p.default.Embed,c.default],e.bubbleFormats=v,e.BlockEmbed=m,e.default=g},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.overload=e.expandConfig=void 0;var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},r=function(P,A){if(Array.isArray(P))return P;if(Symbol.iterator in Object(P))return function(q,_){var O=[],I=!0,N=!1,T=void 0;try{for(var L,U=q[Symbol.iterator]();!(I=(L=U.next()).done)&&(O.push(L.value),!_||O.length!==_);I=!0);}catch(K){N=!0,T=K}finally{try{!I&&U.return&&U.return()}finally{if(N)throw T}}return O}(P,A);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function P(A,q){for(var _=0;_<q.length;_++){var O=q[_];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(A,O.key,O)}}return function(A,q,_){return q&&P(A.prototype,q),_&&P(A,_),A}}();t(50);var s=g(t(2)),p=g(t(14)),u=g(t(8)),d=g(t(9)),c=g(t(0)),l=t(15),a=g(l),h=g(t(3)),f=g(t(10)),m=g(t(34));function g(P){return P&&P.__esModule?P:{default:P}}function v(P,A,q){return A in P?Object.defineProperty(P,A,{value:q,enumerable:!0,configurable:!0,writable:!0}):P[A]=q,P}function y(P,A){if(!(P instanceof A))throw new TypeError("Cannot call a class as a function")}var b=(0,f.default)("quill"),x=function(){function P(A){var q=this,_=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(y(this,P),this.options=w(A,_),this.container=this.options.container,this.container==null)return b.error("Invalid Quill container",A);this.options.debug&&P.debug(this.options.debug);var O=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",this.container.__quill=this,this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,this.emitter=new u.default,this.scroll=c.default.create(this.root,{emitter:this.emitter,whitelist:this.options.formats}),this.editor=new p.default(this.scroll),this.selection=new a.default(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.theme.init(),this.emitter.on(u.default.events.EDITOR_CHANGE,function(N){N===u.default.events.TEXT_CHANGE&&q.root.classList.toggle("ql-blank",q.editor.isBlank())}),this.emitter.on(u.default.events.SCROLL_UPDATE,function(N,T){var L=q.selection.lastRange,U=L&&L.length===0?L.index:void 0;E.call(q,function(){return q.editor.update(null,T,U)},N)});var I=this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">`+O+"<p><br></p></div>");this.setContents(I),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable()}return n(P,null,[{key:"debug",value:function(A){A===!0&&(A="log"),f.default.level(A)}},{key:"find",value:function(A){return A.__quill||c.default.find(A)}},{key:"import",value:function(A){return this.imports[A]==null&&b.error("Cannot import "+A+". Are you sure it was registered?"),this.imports[A]}},{key:"register",value:function(A,q){var _=this,O=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(typeof A!="string"){var I=A.attrName||A.blotName;typeof I=="string"?this.register("formats/"+I,A,q):Object.keys(A).forEach(function(N){_.register(N,A[N],q)})}else this.imports[A]==null||O||b.warn("Overwriting "+A+" with",q),this.imports[A]=q,(A.startsWith("blots/")||A.startsWith("formats/"))&&q.blotName!=="abstract"?c.default.register(q):A.startsWith("modules")&&typeof q.register=="function"&&q.register()}}]),n(P,[{key:"addContainer",value:function(A){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(typeof A=="string"){var _=A;(A=document.createElement("div")).classList.add(_)}return this.container.insertBefore(A,q),A}},{key:"blur",value:function(){this.selection.setRange(null)}},{key:"deleteText",value:function(A,q,_){var O=this,I=S(A,q,_),N=r(I,4);return A=N[0],q=N[1],_=N[3],E.call(this,function(){return O.editor.deleteText(A,q)},_,A,-1*q)}},{key:"disable",value:function(){this.enable(!1)}},{key:"enable",value:function(){var A=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];this.scroll.enable(A),this.container.classList.toggle("ql-disabled",!A)}},{key:"focus",value:function(){var A=this.scrollingContainer.scrollTop;this.selection.focus(),this.scrollingContainer.scrollTop=A,this.scrollIntoView()}},{key:"format",value:function(A,q){var _=this,O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:u.default.sources.API;return E.call(this,function(){var I=_.getSelection(!0),N=new s.default;if(I==null)return N;if(c.default.query(A,c.default.Scope.BLOCK))N=_.editor.formatLine(I.index,I.length,v({},A,q));else{if(I.length===0)return _.selection.format(A,q),N;N=_.editor.formatText(I.index,I.length,v({},A,q))}return _.setSelection(I,u.default.sources.SILENT),N},O)}},{key:"formatLine",value:function(A,q,_,O,I){var N,T=this,L=S(A,q,_,O,I),U=r(L,4);return A=U[0],q=U[1],N=U[2],I=U[3],E.call(this,function(){return T.editor.formatLine(A,q,N)},I,A,0)}},{key:"formatText",value:function(A,q,_,O,I){var N,T=this,L=S(A,q,_,O,I),U=r(L,4);return A=U[0],q=U[1],N=U[2],I=U[3],E.call(this,function(){return T.editor.formatText(A,q,N)},I,A,0)}},{key:"getBounds",value:function(A){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,_=void 0;_=typeof A=="number"?this.selection.getBounds(A,q):this.selection.getBounds(A.index,A.length);var O=this.container.getBoundingClientRect();return{bottom:_.bottom-O.top,height:_.height,left:_.left-O.left,right:_.right-O.left,top:_.top-O.top,width:_.width}}},{key:"getContents",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-A,_=S(A,q),O=r(_,2);return A=O[0],q=O[1],this.editor.getContents(A,q)}},{key:"getFormat",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.getSelection(!0),q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return typeof A=="number"?this.editor.getFormat(A,q):this.editor.getFormat(A.index,A.length)}},{key:"getIndex",value:function(A){return A.offset(this.scroll)}},{key:"getLength",value:function(){return this.scroll.length()}},{key:"getLeaf",value:function(A){return this.scroll.leaf(A)}},{key:"getLine",value:function(A){return this.scroll.line(A)}},{key:"getLines",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE;return typeof A!="number"?this.scroll.lines(A.index,A.length):this.scroll.lines(A,q)}},{key:"getModule",value:function(A){return this.theme.modules[A]}},{key:"getSelection",value:function(){var A=arguments.length>0&&arguments[0]!==void 0&&arguments[0];return A&&this.focus(),this.update(),this.selection.getRange()[0]}},{key:"getText",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-A,_=S(A,q),O=r(_,2);return A=O[0],q=O[1],this.editor.getText(A,q)}},{key:"hasFocus",value:function(){return this.selection.hasFocus()}},{key:"insertEmbed",value:function(A,q,_){var O=this,I=arguments.length>3&&arguments[3]!==void 0?arguments[3]:P.sources.API;return E.call(this,function(){return O.editor.insertEmbed(A,q,_)},I,A)}},{key:"insertText",value:function(A,q,_,O,I){var N,T=this,L=S(A,0,_,O,I),U=r(L,4);return A=U[0],N=U[2],I=U[3],E.call(this,function(){return T.editor.insertText(A,q,N)},I,A,q.length)}},{key:"isEnabled",value:function(){return!this.container.classList.contains("ql-disabled")}},{key:"off",value:function(){return this.emitter.off.apply(this.emitter,arguments)}},{key:"on",value:function(){return this.emitter.on.apply(this.emitter,arguments)}},{key:"once",value:function(){return this.emitter.once.apply(this.emitter,arguments)}},{key:"pasteHTML",value:function(A,q,_){this.clipboard.dangerouslyPasteHTML(A,q,_)}},{key:"removeFormat",value:function(A,q,_){var O=this,I=S(A,q,_),N=r(I,4);return A=N[0],q=N[1],_=N[3],E.call(this,function(){return O.editor.removeFormat(A,q)},_,A)}},{key:"scrollIntoView",value:function(){this.selection.scrollIntoView(this.scrollingContainer)}},{key:"setContents",value:function(A){var q=this,_=arguments.length>1&&arguments[1]!==void 0?arguments[1]:u.default.sources.API;return E.call(this,function(){A=new s.default(A);var O=q.getLength(),I=q.editor.deleteText(0,O),N=q.editor.applyDelta(A),T=N.ops[N.ops.length-1];return T!=null&&typeof T.insert=="string"&&T.insert[T.insert.length-1]===`
`&&(q.editor.deleteText(q.getLength()-1,1),N.delete(1)),I.compose(N)},_)}},{key:"setSelection",value:function(A,q,_){if(A==null)this.selection.setRange(null,q||P.sources.API);else{var O=S(A,q,_),I=r(O,4);A=I[0],q=I[1],_=I[3],this.selection.setRange(new l.Range(A,q),_),_!==u.default.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer)}}},{key:"setText",value:function(A){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:u.default.sources.API,_=new s.default().insert(A);return this.setContents(_,q)}},{key:"update",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.default.sources.USER,q=this.scroll.update(A);return this.selection.update(A),q}},{key:"updateContents",value:function(A){var q=this,_=arguments.length>1&&arguments[1]!==void 0?arguments[1]:u.default.sources.API;return E.call(this,function(){return A=new s.default(A),q.editor.applyDelta(A,_)},_,!0)}}]),P}();function w(P,A){if((A=(0,h.default)(!0,{container:P,modules:{clipboard:!0,keyboard:!0,history:!0}},A)).theme&&A.theme!==x.DEFAULTS.theme){if(A.theme=x.import("themes/"+A.theme),A.theme==null)throw new Error("Invalid theme "+A.theme+". Did you register it?")}else A.theme=m.default;var q=(0,h.default)(!0,{},A.theme.DEFAULTS);[q,A].forEach(function(O){O.modules=O.modules||{},Object.keys(O.modules).forEach(function(I){O.modules[I]===!0&&(O.modules[I]={})})});var _=Object.keys(q.modules).concat(Object.keys(A.modules)).reduce(function(O,I){var N=x.import("modules/"+I);return N==null?b.error("Cannot load "+I+" module. Are you sure you registered it?"):O[I]=N.DEFAULTS||{},O},{});return A.modules!=null&&A.modules.toolbar&&A.modules.toolbar.constructor!==Object&&(A.modules.toolbar={container:A.modules.toolbar}),A=(0,h.default)(!0,{},x.DEFAULTS,{modules:_},q,A),["bounds","container","scrollingContainer"].forEach(function(O){typeof A[O]=="string"&&(A[O]=document.querySelector(A[O]))}),A.modules=Object.keys(A.modules).reduce(function(O,I){return A.modules[I]&&(O[I]=A.modules[I]),O},{}),A}function E(P,A,q,_){if(this.options.strict&&!this.isEnabled()&&A===u.default.sources.USER)return new s.default;var O=q==null?null:this.getSelection(),I=this.editor.delta,N=P();if(O!=null&&(q===!0&&(q=O.index),_==null?O=k(O,N,A):_!==0&&(O=k(O,q,_,A)),this.setSelection(O,u.default.sources.SILENT)),N.length()>0){var T,L,U=[u.default.events.TEXT_CHANGE,N,I,A];(T=this.emitter).emit.apply(T,[u.default.events.EDITOR_CHANGE].concat(U)),A!==u.default.sources.SILENT&&(L=this.emitter).emit.apply(L,U)}return N}function S(P,A,q,_,O){var I={};return typeof P.index=="number"&&typeof P.length=="number"?typeof A!="number"?(O=_,_=q,q=A,A=P.length,P=P.index):(A=P.length,P=P.index):typeof A!="number"&&(O=_,_=q,q=A,A=0),(q===void 0?"undefined":i(q))==="object"?(I=q,O=_):typeof q=="string"&&(_!=null?I[q]=_:O=q),[P,A,I,O=O||u.default.sources.API]}function k(P,A,q,_){if(P==null)return null;var O=void 0,I=void 0;if(A instanceof s.default){var N=[P.index,P.index+P.length].map(function(K){return A.transformPosition(K,_!==u.default.sources.USER)}),T=r(N,2);O=T[0],I=T[1]}else{var L=[P.index,P.index+P.length].map(function(K){return K<A||K===A&&_===u.default.sources.USER?K:q>=0?K+q:Math.max(A,K+q)}),U=r(L,2);O=U[0],I=U[1]}return new l.Range(O,I-O)}x.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,scrollingContainer:null,strict:!0,theme:"default"},x.events=u.default.events,x.sources=u.default.sources,x.version="1.3.7",x.imports={delta:s.default,parchment:c.default,"core/module":d.default,"core/theme":m.default},e.expandConfig=w,e.overload=S,e.default=x},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function l(a,h){for(var f=0;f<h.length;f++){var m=h[f];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(a,m.key,m)}}return function(a,h,f){return h&&l(a.prototype,h),f&&l(a,f),a}}(),r=function l(a,h,f){a===null&&(a=Function.prototype);var m=Object.getOwnPropertyDescriptor(a,h);if(m===void 0){var g=Object.getPrototypeOf(a);return g===null?void 0:l(g,h,f)}if("value"in m)return m.value;var v=m.get;return v!==void 0?v.call(f):void 0},n=p(t(7)),s=p(t(0));function p(l){return l&&l.__esModule?l:{default:l}}function u(l,a){if(!(l instanceof a))throw new TypeError("Cannot call a class as a function")}function d(l,a){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?l:a}var c=function(l){function a(){return u(this,a),d(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(h,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);h.prototype=Object.create(f&&f.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(h,f):h.__proto__=f)}(a,l),i(a,[{key:"formatAt",value:function(h,f,m,g){if(a.compare(this.statics.blotName,m)<0&&s.default.query(m,s.default.Scope.BLOT)){var v=this.isolate(h,f);g&&v.wrap(m,g)}else r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"formatAt",this).call(this,h,f,m,g)}},{key:"optimize",value:function(h){if(r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"optimize",this).call(this,h),this.parent instanceof a&&a.compare(this.statics.blotName,this.parent.statics.blotName)>0){var f=this.parent.isolate(this.offset(),this.length());this.moveChildren(f),f.wrap(this)}}}],[{key:"compare",value:function(h,f){var m=a.order.indexOf(h),g=a.order.indexOf(f);return m>=0||g>=0?m-g:h===f?0:h<f?-1:1}}]),a}(s.default.Inline);c.allowedChildren=[c,s.default.Embed,n.default],c.order=["cursor","inline","underline","strike","italic","bold","script","link","code"],e.default=c},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(0);function n(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")}function s(u,d){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?u:d}var p=function(u){function d(){return n(this,d),s(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return function(c,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);c.prototype=Object.create(l&&l.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(c,l):c.__proto__=l)}(d,u),d}(((i=r)&&i.__esModule?i:{default:i}).default.Text);e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function d(c,l){for(var a=0;a<l.length;a++){var h=l[a];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(c,h.key,h)}}return function(c,l,a){return l&&d(c.prototype,l),a&&d(c,a),c}}(),r=function d(c,l,a){c===null&&(c=Function.prototype);var h=Object.getOwnPropertyDescriptor(c,l);if(h===void 0){var f=Object.getPrototypeOf(c);return f===null?void 0:d(f,l,a)}if("value"in h)return h.value;var m=h.get;return m!==void 0?m.call(a):void 0},n=s(t(54));function s(d){return d&&d.__esModule?d:{default:d}}var p=(0,s(t(10)).default)("quill:events");["selectionchange","mousedown","mouseup","click"].forEach(function(d){document.addEventListener(d,function(){for(var c=arguments.length,l=Array(c),a=0;a<c;a++)l[a]=arguments[a];[].slice.call(document.querySelectorAll(".ql-container")).forEach(function(h){var f;h.__quill&&h.__quill.emitter&&(f=h.__quill.emitter).handleDOM.apply(f,l)})})});var u=function(d){function c(){(function(a,h){if(!(a instanceof h))throw new TypeError("Cannot call a class as a function")})(this,c);var l=function(a,h){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!h||typeof h!="object"&&typeof h!="function"?a:h}(this,(c.__proto__||Object.getPrototypeOf(c)).call(this));return l.listeners={},l.on("error",p.error),l}return function(l,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);l.prototype=Object.create(a&&a.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(l,a):l.__proto__=a)}(c,d),i(c,[{key:"emit",value:function(){p.log.apply(p,arguments),r(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"emit",this).apply(this,arguments)}},{key:"handleDOM",value:function(l){for(var a=arguments.length,h=Array(a>1?a-1:0),f=1;f<a;f++)h[f-1]=arguments[f];(this.listeners[l.type]||[]).forEach(function(m){var g=m.node,v=m.handler;(l.target===g||g.contains(l.target))&&v.apply(void 0,[l].concat(h))})}},{key:"listenDOM",value:function(l,a,h){this.listeners[l]||(this.listeners[l]=[]),this.listeners[l].push({node:a,handler:h})}}]),c}(n.default);u.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},u.sources={API:"api",SILENT:"silent",USER:"user"},e.default=u},function(o,e,t){function i(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function n(s){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};i(this,n),this.quill=s,this.options=p};r.DEFAULTS={},e.default=r},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=["error","warn","log","info"],r="warn";function n(p){if(i.indexOf(p)<=i.indexOf(r)){for(var u,d=arguments.length,c=Array(d>1?d-1:0),l=1;l<d;l++)c[l-1]=arguments[l];(u=console)[p].apply(u,c)}}function s(p){return i.reduce(function(u,d){return u[d]=n.bind(console,d,p),u},{})}n.level=s.level=function(p){r=p},e.default=s},function(o,e,t){var i=Array.prototype.slice,r=t(52),n=t(53),s=o.exports=function(d,c,l){return l||(l={}),d===c||(d instanceof Date&&c instanceof Date?d.getTime()===c.getTime():!d||!c||typeof d!="object"&&typeof c!="object"?l.strict?d===c:d==c:function(a,h,f){var m,g;if(p(a)||p(h)||a.prototype!==h.prototype)return!1;if(n(a))return!!n(h)&&(a=i.call(a),h=i.call(h),s(a,h,f));if(u(a)){if(!u(h)||a.length!==h.length)return!1;for(m=0;m<a.length;m++)if(a[m]!==h[m])return!1;return!0}try{var v=r(a),y=r(h)}catch{return!1}if(v.length!=y.length)return!1;for(v.sort(),y.sort(),m=v.length-1;m>=0;m--)if(v[m]!=y[m])return!1;for(m=v.length-1;m>=0;m--)if(g=v[m],!s(a[g],h[g],f))return!1;return typeof a==typeof h}(d,c,l))};function p(d){return d==null}function u(d){return!(!d||typeof d!="object"||typeof d.length!="number"||typeof d.copy!="function"||typeof d.slice!="function"||d.length>0&&typeof d[0]!="number")}},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=t(1),r=function(){function n(s,p,u){u===void 0&&(u={}),this.attrName=s,this.keyName=p;var d=i.Scope.TYPE&i.Scope.ATTRIBUTE;u.scope!=null?this.scope=u.scope&i.Scope.LEVEL|d:this.scope=i.Scope.ATTRIBUTE,u.whitelist!=null&&(this.whitelist=u.whitelist)}return n.keys=function(s){return[].map.call(s.attributes,function(p){return p.name})},n.prototype.add=function(s,p){return!!this.canAdd(s,p)&&(s.setAttribute(this.keyName,p),!0)},n.prototype.canAdd=function(s,p){return i.query(s,i.Scope.BLOT&(this.scope|i.Scope.TYPE))!=null&&(this.whitelist==null||(typeof p=="string"?this.whitelist.indexOf(p.replace(/["']/g,""))>-1:this.whitelist.indexOf(p)>-1))},n.prototype.remove=function(s){s.removeAttribute(this.keyName)},n.prototype.value=function(s){var p=s.getAttribute(this.keyName);return this.canAdd(s,p)&&p?p:""},n}();e.default=r},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Code=void 0;var i=function(v,y){if(Array.isArray(v))return v;if(Symbol.iterator in Object(v))return function(b,x){var w=[],E=!0,S=!1,k=void 0;try{for(var P,A=b[Symbol.iterator]();!(E=(P=A.next()).done)&&(w.push(P.value),!x||w.length!==x);E=!0);}catch(q){S=!0,k=q}finally{try{!E&&A.return&&A.return()}finally{if(S)throw k}}return w}(v,y);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function v(y,b){for(var x=0;x<b.length;x++){var w=b[x];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(y,w.key,w)}}return function(y,b,x){return b&&v(y.prototype,b),x&&v(y,x),y}}(),n=function v(y,b,x){y===null&&(y=Function.prototype);var w=Object.getOwnPropertyDescriptor(y,b);if(w===void 0){var E=Object.getPrototypeOf(y);return E===null?void 0:v(E,b,x)}if("value"in w)return w.value;var S=w.get;return S!==void 0?S.call(x):void 0},s=l(t(2)),p=l(t(0)),u=l(t(4)),d=l(t(6)),c=l(t(7));function l(v){return v&&v.__esModule?v:{default:v}}function a(v,y){if(!(v instanceof y))throw new TypeError("Cannot call a class as a function")}function h(v,y){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!y||typeof y!="object"&&typeof y!="function"?v:y}function f(v,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);v.prototype=Object.create(y&&y.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(v,y):v.__proto__=y)}var m=function(v){function y(){return a(this,y),h(this,(y.__proto__||Object.getPrototypeOf(y)).apply(this,arguments))}return f(y,v),y}(d.default);m.blotName="code",m.tagName="CODE";var g=function(v){function y(){return a(this,y),h(this,(y.__proto__||Object.getPrototypeOf(y)).apply(this,arguments))}return f(y,v),r(y,[{key:"delta",value:function(){var b=this,x=this.domNode.textContent;return x.endsWith(`
`)&&(x=x.slice(0,-1)),x.split(`
`).reduce(function(w,E){return w.insert(E).insert(`
`,b.formats())},new s.default)}},{key:"format",value:function(b,x){if(b!==this.statics.blotName||!x){var w=this.descendant(c.default,this.length()-1),E=i(w,1)[0];E!=null&&E.deleteAt(E.length()-1,1),n(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"format",this).call(this,b,x)}}},{key:"formatAt",value:function(b,x,w,E){if(x!==0&&p.default.query(w,p.default.Scope.BLOCK)!=null&&(w!==this.statics.blotName||E!==this.statics.formats(this.domNode))){var S=this.newlineIndex(b);if(!(S<0||S>=b+x)){var k=this.newlineIndex(b,!0)+1,P=S-k+1,A=this.isolate(k,P),q=A.next;A.format(w,E),q instanceof y&&q.formatAt(0,b-k+x-P,w,E)}}}},{key:"insertAt",value:function(b,x,w){if(w==null){var E=this.descendant(c.default,b),S=i(E,2),k=S[0],P=S[1];k.insertAt(P,x)}}},{key:"length",value:function(){var b=this.domNode.textContent.length;return this.domNode.textContent.endsWith(`
`)?b:b+1}},{key:"newlineIndex",value:function(b){var x=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(x)return this.domNode.textContent.slice(0,b).lastIndexOf(`
`);var w=this.domNode.textContent.slice(b).indexOf(`
`);return w>-1?b+w:-1}},{key:"optimize",value:function(b){this.domNode.textContent.endsWith(`
`)||this.appendChild(p.default.create("text",`
`)),n(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"optimize",this).call(this,b);var x=this.next;x!=null&&x.prev===this&&x.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===x.statics.formats(x.domNode)&&(x.optimize(b),x.moveChildren(this),x.remove())}},{key:"replace",value:function(b){n(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"replace",this).call(this,b),[].slice.call(this.domNode.querySelectorAll("*")).forEach(function(x){var w=p.default.find(x);w==null?x.parentNode.removeChild(x):w instanceof p.default.Embed?w.remove():w.unwrap()})}}],[{key:"create",value:function(b){var x=n(y.__proto__||Object.getPrototypeOf(y),"create",this).call(this,b);return x.setAttribute("spellcheck",!1),x}},{key:"formats",value:function(){return!0}}]),y}(u.default);g.blotName="code-block",g.tagName="PRE",g.TAB="  ",e.Code=m,e.default=g},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},r=function(w,E){if(Array.isArray(w))return w;if(Symbol.iterator in Object(w))return function(S,k){var P=[],A=!0,q=!1,_=void 0;try{for(var O,I=S[Symbol.iterator]();!(A=(O=I.next()).done)&&(P.push(O.value),!k||P.length!==k);A=!0);}catch(N){q=!0,_=N}finally{try{!A&&I.return&&I.return()}finally{if(q)throw _}}return P}(w,E);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function w(E,S){for(var k=0;k<S.length;k++){var P=S[k];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(E,P.key,P)}}return function(E,S,k){return S&&w(E.prototype,S),k&&w(E,k),E}}(),s=v(t(2)),p=v(t(20)),u=v(t(0)),d=v(t(13)),c=v(t(24)),l=t(4),a=v(l),h=v(t(16)),f=v(t(21)),m=v(t(11)),g=v(t(3));function v(w){return w&&w.__esModule?w:{default:w}}var y=/^[ -~]*$/,b=function(){function w(E){(function(S,k){if(!(S instanceof k))throw new TypeError("Cannot call a class as a function")})(this,w),this.scroll=E,this.delta=this.getDelta()}return n(w,[{key:"applyDelta",value:function(E){var S=this,k=!1;this.scroll.update();var P=this.scroll.length();return this.scroll.batchStart(),(E=function(A){return A.reduce(function(q,_){if(_.insert===1){var O=(0,f.default)(_.attributes);return delete O.image,q.insert({image:_.attributes.image},O)}if(_.attributes==null||_.attributes.list!==!0&&_.attributes.bullet!==!0||((_=(0,f.default)(_)).attributes.list?_.attributes.list="ordered":(_.attributes.list="bullet",delete _.attributes.bullet)),typeof _.insert=="string"){var I=_.insert.replace(/\r\n/g,`
`).replace(/\r/g,`
`);return q.insert(I,_.attributes)}return q.push(_)},new s.default)}(E)).reduce(function(A,q){var _=q.retain||q.delete||q.insert.length||1,O=q.attributes||{};if(q.insert!=null){if(typeof q.insert=="string"){var I=q.insert;I.endsWith(`
`)&&k&&(k=!1,I=I.slice(0,-1)),A>=P&&!I.endsWith(`
`)&&(k=!0),S.scroll.insertAt(A,I);var N=S.scroll.line(A),T=r(N,2),L=T[0],U=T[1],K=(0,g.default)({},(0,l.bubbleFormats)(L));if(L instanceof a.default){var ee=L.descendant(u.default.Leaf,U),qe=r(ee,1)[0];K=(0,g.default)(K,(0,l.bubbleFormats)(qe))}O=p.default.attributes.diff(K,O)||{}}else if(i(q.insert)==="object"){var R=Object.keys(q.insert)[0];if(R==null)return A;S.scroll.insertAt(A,R,q.insert[R])}P+=_}return Object.keys(O).forEach(function($){S.scroll.formatAt(A,_,$,O[$])}),A+_},0),E.reduce(function(A,q){return typeof q.delete=="number"?(S.scroll.deleteAt(A,q.delete),A):A+(q.retain||q.insert.length||1)},0),this.scroll.batchEnd(),this.update(E)}},{key:"deleteText",value:function(E,S){return this.scroll.deleteAt(E,S),this.update(new s.default().retain(E).delete(S))}},{key:"formatLine",value:function(E,S){var k=this,P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.scroll.update(),Object.keys(P).forEach(function(A){if(k.scroll.whitelist==null||k.scroll.whitelist[A]){var q=k.scroll.lines(E,Math.max(S,1)),_=S;q.forEach(function(O){var I=O.length();if(O instanceof d.default){var N=E-O.offset(k.scroll),T=O.newlineIndex(N+_)-N+1;O.formatAt(N,T,A,P[A])}else O.format(A,P[A]);_-=I})}}),this.scroll.optimize(),this.update(new s.default().retain(E).retain(S,(0,f.default)(P)))}},{key:"formatText",value:function(E,S){var k=this,P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Object.keys(P).forEach(function(A){k.scroll.formatAt(E,S,A,P[A])}),this.update(new s.default().retain(E).retain(S,(0,f.default)(P)))}},{key:"getContents",value:function(E,S){return this.delta.slice(E,E+S)}},{key:"getDelta",value:function(){return this.scroll.lines().reduce(function(E,S){return E.concat(S.delta())},new s.default)}},{key:"getFormat",value:function(E){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,k=[],P=[];S===0?this.scroll.path(E).forEach(function(q){var _=r(q,1)[0];_ instanceof a.default?k.push(_):_ instanceof u.default.Leaf&&P.push(_)}):(k=this.scroll.lines(E,S),P=this.scroll.descendants(u.default.Leaf,E,S));var A=[k,P].map(function(q){if(q.length===0)return{};for(var _=(0,l.bubbleFormats)(q.shift());Object.keys(_).length>0;){var O=q.shift();if(O==null)return _;_=x((0,l.bubbleFormats)(O),_)}return _});return g.default.apply(g.default,A)}},{key:"getText",value:function(E,S){return this.getContents(E,S).filter(function(k){return typeof k.insert=="string"}).map(function(k){return k.insert}).join("")}},{key:"insertEmbed",value:function(E,S,k){return this.scroll.insertAt(E,S,k),this.update(new s.default().retain(E).insert(function(P,A,q){return A in P?Object.defineProperty(P,A,{value:q,enumerable:!0,configurable:!0,writable:!0}):P[A]=q,P}({},S,k)))}},{key:"insertText",value:function(E,S){var k=this,P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return S=S.replace(/\r\n/g,`
`).replace(/\r/g,`
`),this.scroll.insertAt(E,S),Object.keys(P).forEach(function(A){k.scroll.formatAt(E,S.length,A,P[A])}),this.update(new s.default().retain(E).insert(S,(0,f.default)(P)))}},{key:"isBlank",value:function(){if(this.scroll.children.length==0)return!0;if(this.scroll.children.length>1)return!1;var E=this.scroll.children.head;return E.statics.blotName===a.default.blotName&&!(E.children.length>1)&&E.children.head instanceof h.default}},{key:"removeFormat",value:function(E,S){var k=this.getText(E,S),P=this.scroll.line(E+S),A=r(P,2),q=A[0],_=A[1],O=0,I=new s.default;q!=null&&(O=q instanceof d.default?q.newlineIndex(_)-_+1:q.length()-_,I=q.delta().slice(_,_+O-1).insert(`
`));var N=this.getContents(E,S+O).diff(new s.default().insert(k).concat(I)),T=new s.default().retain(E).concat(N);return this.applyDelta(T)}},{key:"update",value:function(E){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,P=this.delta;if(S.length===1&&S[0].type==="characterData"&&S[0].target.data.match(y)&&u.default.find(S[0].target)){var A=u.default.find(S[0].target),q=(0,l.bubbleFormats)(A),_=A.offset(this.scroll),O=S[0].oldValue.replace(c.default.CONTENTS,""),I=new s.default().insert(O),N=new s.default().insert(A.value()),T=new s.default().retain(_).concat(I.diff(N,k));E=T.reduce(function(L,U){return U.insert?L.insert(U.insert,q):L.push(U)},new s.default),this.delta=P.compose(E)}else this.delta=this.getDelta(),E&&(0,m.default)(P.compose(E),this.delta)||(E=P.diff(this.delta,k));return E}}]),w}();function x(w,E){return Object.keys(E).reduce(function(S,k){return w[k]==null||(E[k]===w[k]?S[k]=E[k]:Array.isArray(E[k])?E[k].indexOf(w[k])<0&&(S[k]=E[k].concat([w[k]])):S[k]=[E[k],w[k]]),S},{})}e.default=b},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Range=void 0;var i=function(g,v){if(Array.isArray(g))return g;if(Symbol.iterator in Object(g))return function(y,b){var x=[],w=!0,E=!1,S=void 0;try{for(var k,P=y[Symbol.iterator]();!(w=(k=P.next()).done)&&(x.push(k.value),!b||x.length!==b);w=!0);}catch(A){E=!0,S=A}finally{try{!w&&P.return&&P.return()}finally{if(E)throw S}}return x}(g,v);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function g(v,y){for(var b=0;b<y.length;b++){var x=y[b];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(v,x.key,x)}}return function(v,y,b){return y&&g(v.prototype,y),b&&g(v,b),v}}(),n=d(t(0)),s=d(t(21)),p=d(t(11)),u=d(t(8));function d(g){return g&&g.__esModule?g:{default:g}}function c(g){if(Array.isArray(g)){for(var v=0,y=Array(g.length);v<g.length;v++)y[v]=g[v];return y}return Array.from(g)}function l(g,v){if(!(g instanceof v))throw new TypeError("Cannot call a class as a function")}var a=(0,d(t(10)).default)("quill:selection"),h=function g(v){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;l(this,g),this.index=v,this.length=y},f=function(){function g(v,y){var b=this;l(this,g),this.emitter=y,this.scroll=v,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=n.default.create("cursor",this),this.lastRange=this.savedRange=new h(0,0),this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,function(){b.mouseDown||setTimeout(b.update.bind(b,u.default.sources.USER),1)}),this.emitter.on(u.default.events.EDITOR_CHANGE,function(x,w){x===u.default.events.TEXT_CHANGE&&w.length()>0&&b.update(u.default.sources.SILENT)}),this.emitter.on(u.default.events.SCROLL_BEFORE_UPDATE,function(){if(b.hasFocus()){var x=b.getNativeRange();x!=null&&x.start.node!==b.cursor.textNode&&b.emitter.once(u.default.events.SCROLL_UPDATE,function(){try{b.setNativeRange(x.start.node,x.start.offset,x.end.node,x.end.offset)}catch{}})}}),this.emitter.on(u.default.events.SCROLL_OPTIMIZE,function(x,w){if(w.range){var E=w.range,S=E.startNode,k=E.startOffset,P=E.endNode,A=E.endOffset;b.setNativeRange(S,k,P,A)}}),this.update(u.default.sources.SILENT)}return r(g,[{key:"handleComposition",value:function(){var v=this;this.root.addEventListener("compositionstart",function(){v.composing=!0}),this.root.addEventListener("compositionend",function(){if(v.composing=!1,v.cursor.parent){var y=v.cursor.restore();if(!y)return;setTimeout(function(){v.setNativeRange(y.startNode,y.startOffset,y.endNode,y.endOffset)},1)}})}},{key:"handleDragging",value:function(){var v=this;this.emitter.listenDOM("mousedown",document.body,function(){v.mouseDown=!0}),this.emitter.listenDOM("mouseup",document.body,function(){v.mouseDown=!1,v.update(u.default.sources.USER)})}},{key:"focus",value:function(){this.hasFocus()||(this.root.focus(),this.setRange(this.savedRange))}},{key:"format",value:function(v,y){if(this.scroll.whitelist==null||this.scroll.whitelist[v]){this.scroll.update();var b=this.getNativeRange();if(b!=null&&b.native.collapsed&&!n.default.query(v,n.default.Scope.BLOCK)){if(b.start.node!==this.cursor.textNode){var x=n.default.find(b.start.node,!1);if(x==null)return;if(x instanceof n.default.Leaf){var w=x.split(b.start.offset);x.parent.insertBefore(this.cursor,w)}else x.insertBefore(this.cursor,b.start.node);this.cursor.attach()}this.cursor.format(v,y),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}}},{key:"getBounds",value:function(v){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,b=this.scroll.length();v=Math.min(v,b-1),y=Math.min(v+y,b-1)-v;var x=void 0,w=this.scroll.leaf(v),E=i(w,2),S=E[0],k=E[1];if(S==null)return null;var P=S.position(k,!0),A=i(P,2);x=A[0],k=A[1];var q=document.createRange();if(y>0){q.setStart(x,k);var _=this.scroll.leaf(v+y),O=i(_,2);if(S=O[0],k=O[1],S==null)return null;var I=S.position(k,!0),N=i(I,2);return x=N[0],k=N[1],q.setEnd(x,k),q.getBoundingClientRect()}var T="left",L=void 0;return x instanceof Text?(k<x.data.length?(q.setStart(x,k),q.setEnd(x,k+1)):(q.setStart(x,k-1),q.setEnd(x,k),T="right"),L=q.getBoundingClientRect()):(L=S.domNode.getBoundingClientRect(),k>0&&(T="right")),{bottom:L.top+L.height,height:L.height,left:L[T],right:L[T],top:L.top,width:0}}},{key:"getNativeRange",value:function(){var v=document.getSelection();if(v==null||v.rangeCount<=0)return null;var y=v.getRangeAt(0);if(y==null)return null;var b=this.normalizeNative(y);return a.info("getNativeRange",b),b}},{key:"getRange",value:function(){var v=this.getNativeRange();return v==null?[null,null]:[this.normalizedToRange(v),v]}},{key:"hasFocus",value:function(){return document.activeElement===this.root}},{key:"normalizedToRange",value:function(v){var y=this,b=[[v.start.node,v.start.offset]];v.native.collapsed||b.push([v.end.node,v.end.offset]);var x=b.map(function(S){var k=i(S,2),P=k[0],A=k[1],q=n.default.find(P,!0),_=q.offset(y.scroll);return A===0?_:q instanceof n.default.Container?_+q.length():_+q.index(P,A)}),w=Math.min(Math.max.apply(Math,c(x)),this.scroll.length()-1),E=Math.min.apply(Math,[w].concat(c(x)));return new h(E,w-E)}},{key:"normalizeNative",value:function(v){if(!m(this.root,v.startContainer)||!v.collapsed&&!m(this.root,v.endContainer))return null;var y={start:{node:v.startContainer,offset:v.startOffset},end:{node:v.endContainer,offset:v.endOffset},native:v};return[y.start,y.end].forEach(function(b){for(var x=b.node,w=b.offset;!(x instanceof Text)&&x.childNodes.length>0;)if(x.childNodes.length>w)x=x.childNodes[w],w=0;else{if(x.childNodes.length!==w)break;w=(x=x.lastChild)instanceof Text?x.data.length:x.childNodes.length+1}b.node=x,b.offset=w}),y}},{key:"rangeToNative",value:function(v){var y=this,b=v.collapsed?[v.index]:[v.index,v.index+v.length],x=[],w=this.scroll.length();return b.forEach(function(E,S){E=Math.min(w-1,E);var k,P=y.scroll.leaf(E),A=i(P,2),q=A[0],_=A[1],O=q.position(_,S!==0),I=i(O,2);k=I[0],_=I[1],x.push(k,_)}),x.length<2&&(x=x.concat(x)),x}},{key:"scrollIntoView",value:function(v){var y=this.lastRange;if(y!=null){var b=this.getBounds(y.index,y.length);if(b!=null){var x=this.scroll.length()-1,w=this.scroll.line(Math.min(y.index,x)),E=i(w,1)[0],S=E;if(y.length>0){var k=this.scroll.line(Math.min(y.index+y.length,x));S=i(k,1)[0]}if(E!=null&&S!=null){var P=v.getBoundingClientRect();b.top<P.top?v.scrollTop-=P.top-b.top:b.bottom>P.bottom&&(v.scrollTop+=b.bottom-P.bottom)}}}}},{key:"setNativeRange",value:function(v,y){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:v,x=arguments.length>3&&arguments[3]!==void 0?arguments[3]:y,w=arguments.length>4&&arguments[4]!==void 0&&arguments[4];if(a.info("setNativeRange",v,y,b,x),v==null||this.root.parentNode!=null&&v.parentNode!=null&&b.parentNode!=null){var E=document.getSelection();if(E!=null)if(v!=null){this.hasFocus()||this.root.focus();var S=(this.getNativeRange()||{}).native;if(S==null||w||v!==S.startContainer||y!==S.startOffset||b!==S.endContainer||x!==S.endOffset){v.tagName=="BR"&&(y=[].indexOf.call(v.parentNode.childNodes,v),v=v.parentNode),b.tagName=="BR"&&(x=[].indexOf.call(b.parentNode.childNodes,b),b=b.parentNode);var k=document.createRange();k.setStart(v,y),k.setEnd(b,x),E.removeAllRanges(),E.addRange(k)}}else E.removeAllRanges(),this.root.blur(),document.body.focus()}}},{key:"setRange",value:function(v){var y=arguments.length>1&&arguments[1]!==void 0&&arguments[1],b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:u.default.sources.API;if(typeof y=="string"&&(b=y,y=!1),a.info("setRange",v),v!=null){var x=this.rangeToNative(v);this.setNativeRange.apply(this,c(x).concat([y]))}else this.setNativeRange(null);this.update(b)}},{key:"update",value:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.default.sources.USER,y=this.lastRange,b=this.getRange(),x=i(b,2),w=x[0],E=x[1];if(this.lastRange=w,this.lastRange!=null&&(this.savedRange=this.lastRange),!(0,p.default)(y,this.lastRange)){var S;!this.composing&&E!=null&&E.native.collapsed&&E.start.node!==this.cursor.textNode&&this.cursor.restore();var k,P=[u.default.events.SELECTION_CHANGE,(0,s.default)(this.lastRange),(0,s.default)(y),v];(S=this.emitter).emit.apply(S,[u.default.events.EDITOR_CHANGE].concat(P)),v!==u.default.sources.SILENT&&(k=this.emitter).emit.apply(k,P)}}}]),g}();function m(g,v){try{v.parentNode}catch{return!1}return v instanceof Text&&(v=v.parentNode),g.contains(v)}e.Range=h,e.default=f},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function c(l,a){for(var h=0;h<a.length;h++){var f=a[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(l,f.key,f)}}return function(l,a,h){return a&&c(l.prototype,a),h&&c(l,h),l}}(),n=function c(l,a,h){l===null&&(l=Function.prototype);var f=Object.getOwnPropertyDescriptor(l,a);if(f===void 0){var m=Object.getPrototypeOf(l);return m===null?void 0:c(m,a,h)}if("value"in f)return f.value;var g=f.get;return g!==void 0?g.call(h):void 0},s=t(0);function p(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}function u(c,l){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||typeof l!="object"&&typeof l!="function"?c:l}var d=function(c){function l(){return p(this,l),u(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return function(a,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);a.prototype=Object.create(h&&h.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(a,h):a.__proto__=h)}(l,c),r(l,[{key:"insertInto",value:function(a,h){a.children.length===0?n(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"insertInto",this).call(this,a,h):this.remove()}},{key:"length",value:function(){return 0}},{key:"value",value:function(){return""}}],[{key:"value",value:function(){}}]),l}(((i=s)&&i.__esModule?i:{default:i}).default.Embed);d.blotName="break",d.tagName="BR",e.default=d},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,l){c.__proto__=l}||function(c,l){for(var a in l)l.hasOwnProperty(a)&&(c[a]=l[a])},function(c,l){function a(){this.constructor=c}i(c,l),c.prototype=l===null?Object.create(l):(a.prototype=l.prototype,new a)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(44),s=t(30),p=t(1),u=function(c){function l(a){var h=c.call(this,a)||this;return h.build(),h}return r(l,c),l.prototype.appendChild=function(a){this.insertBefore(a)},l.prototype.attach=function(){c.prototype.attach.call(this),this.children.forEach(function(a){a.attach()})},l.prototype.build=function(){var a=this;this.children=new n.default,[].slice.call(this.domNode.childNodes).reverse().forEach(function(h){try{var f=d(h);a.insertBefore(f,a.children.head||void 0)}catch(m){if(m instanceof p.ParchmentError)return;throw m}})},l.prototype.deleteAt=function(a,h){if(a===0&&h===this.length())return this.remove();this.children.forEachAt(a,h,function(f,m,g){f.deleteAt(m,g)})},l.prototype.descendant=function(a,h){var f=this.children.find(h),m=f[0],g=f[1];return a.blotName==null&&a(m)||a.blotName!=null&&m instanceof a?[m,g]:m instanceof l?m.descendant(a,g):[null,-1]},l.prototype.descendants=function(a,h,f){h===void 0&&(h=0),f===void 0&&(f=Number.MAX_VALUE);var m=[],g=f;return this.children.forEachAt(h,f,function(v,y,b){(a.blotName==null&&a(v)||a.blotName!=null&&v instanceof a)&&m.push(v),v instanceof l&&(m=m.concat(v.descendants(a,y,g))),g-=b}),m},l.prototype.detach=function(){this.children.forEach(function(a){a.detach()}),c.prototype.detach.call(this)},l.prototype.formatAt=function(a,h,f,m){this.children.forEachAt(a,h,function(g,v,y){g.formatAt(v,y,f,m)})},l.prototype.insertAt=function(a,h,f){var m=this.children.find(a),g=m[0],v=m[1];if(g)g.insertAt(v,h,f);else{var y=f==null?p.create("text",h):p.create(h,f);this.appendChild(y)}},l.prototype.insertBefore=function(a,h){if(this.statics.allowedChildren!=null&&!this.statics.allowedChildren.some(function(f){return a instanceof f}))throw new p.ParchmentError("Cannot insert "+a.statics.blotName+" into "+this.statics.blotName);a.insertInto(this,h)},l.prototype.length=function(){return this.children.reduce(function(a,h){return a+h.length()},0)},l.prototype.moveChildren=function(a,h){this.children.forEach(function(f){a.insertBefore(f,h)})},l.prototype.optimize=function(a){if(c.prototype.optimize.call(this,a),this.children.length===0)if(this.statics.defaultChild!=null){var h=p.create(this.statics.defaultChild);this.appendChild(h),h.optimize(a)}else this.remove()},l.prototype.path=function(a,h){h===void 0&&(h=!1);var f=this.children.find(a,h),m=f[0],g=f[1],v=[[this,a]];return m instanceof l?v.concat(m.path(g,h)):(m!=null&&v.push([m,g]),v)},l.prototype.removeChild=function(a){this.children.remove(a)},l.prototype.replace=function(a){a instanceof l&&a.moveChildren(this),c.prototype.replace.call(this,a)},l.prototype.split=function(a,h){if(h===void 0&&(h=!1),!h){if(a===0)return this;if(a===this.length())return this.next}var f=this.clone();return this.parent.insertBefore(f,this.next),this.children.forEachAt(a,this.length(),function(m,g,v){m=m.split(g,h),f.appendChild(m)}),f},l.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},l.prototype.update=function(a,h){var f=this,m=[],g=[];a.forEach(function(v){v.target===f.domNode&&v.type==="childList"&&(m.push.apply(m,v.addedNodes),g.push.apply(g,v.removedNodes))}),g.forEach(function(v){if(!(v.parentNode!=null&&v.tagName!=="IFRAME"&&document.body.compareDocumentPosition(v)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var y=p.find(v);y!=null&&(y.domNode.parentNode!=null&&y.domNode.parentNode!==f.domNode||y.detach())}}),m.filter(function(v){return v.parentNode==f.domNode}).sort(function(v,y){return v===y?0:v.compareDocumentPosition(y)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1}).forEach(function(v){var y=null;v.nextSibling!=null&&(y=p.find(v.nextSibling));var b=d(v);b.next==y&&b.next!=null||(b.parent!=null&&b.parent.removeChild(f),f.insertBefore(b,y||void 0))})},l}(s.default);function d(c){var l=p.find(c);if(l==null)try{l=p.create(c)}catch{l=p.create(p.Scope.INLINE),[].slice.call(c.childNodes).forEach(function(h){l.domNode.appendChild(h)}),c.parentNode&&c.parentNode.replaceChild(l.domNode,c),l.attach()}return l}e.default=u},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,l){c.__proto__=l}||function(c,l){for(var a in l)l.hasOwnProperty(a)&&(c[a]=l[a])},function(c,l){function a(){this.constructor=c}i(c,l),c.prototype=l===null?Object.create(l):(a.prototype=l.prototype,new a)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(12),s=t(31),p=t(17),u=t(1),d=function(c){function l(a){var h=c.call(this,a)||this;return h.attributes=new s.default(h.domNode),h}return r(l,c),l.formats=function(a){return typeof this.tagName=="string"||(Array.isArray(this.tagName)?a.tagName.toLowerCase():void 0)},l.prototype.format=function(a,h){var f=u.query(a);f instanceof n.default?this.attributes.attribute(f,h):h&&(f==null||a===this.statics.blotName&&this.formats()[a]===h||this.replaceWith(a,h))},l.prototype.formats=function(){var a=this.attributes.values(),h=this.statics.formats(this.domNode);return h!=null&&(a[this.statics.blotName]=h),a},l.prototype.replaceWith=function(a,h){var f=c.prototype.replaceWith.call(this,a,h);return this.attributes.copy(f),f},l.prototype.update=function(a,h){var f=this;c.prototype.update.call(this,a,h),a.some(function(m){return m.target===f.domNode&&m.type==="attributes"})&&this.attributes.build()},l.prototype.wrap=function(a,h){var f=c.prototype.wrap.call(this,a,h);return f instanceof l&&f.statics.scope===this.statics.scope&&this.attributes.move(f),f},l}(p.default);e.default=d},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,d){u.__proto__=d}||function(u,d){for(var c in d)d.hasOwnProperty(c)&&(u[c]=d[c])},function(u,d){function c(){this.constructor=u}i(u,d),u.prototype=d===null?Object.create(d):(c.prototype=d.prototype,new c)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(30),s=t(1),p=function(u){function d(){return u!==null&&u.apply(this,arguments)||this}return r(d,u),d.value=function(c){return!0},d.prototype.index=function(c,l){return this.domNode===c||this.domNode.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(l,1):-1},d.prototype.position=function(c,l){var a=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return c>0&&(a+=1),[this.parent.domNode,a]},d.prototype.value=function(){var c;return(c={})[this.statics.blotName]=this.statics.value(this.domNode)||!0,c},d.scope=s.Scope.INLINE_BLOT,d}(n.default);e.default=p},function(o,e,t){var i=t(11),r=t(3),n={attributes:{compose:function(p,u,d){typeof p!="object"&&(p={}),typeof u!="object"&&(u={});var c=r(!0,{},u);for(var l in d||(c=Object.keys(c).reduce(function(a,h){return c[h]!=null&&(a[h]=c[h]),a},{})),p)p[l]!==void 0&&u[l]===void 0&&(c[l]=p[l]);return Object.keys(c).length>0?c:void 0},diff:function(p,u){typeof p!="object"&&(p={}),typeof u!="object"&&(u={});var d=Object.keys(p).concat(Object.keys(u)).reduce(function(c,l){return i(p[l],u[l])||(c[l]=u[l]===void 0?null:u[l]),c},{});return Object.keys(d).length>0?d:void 0},transform:function(p,u,d){if(typeof p!="object")return u;if(typeof u=="object"){if(!d)return u;var c=Object.keys(u).reduce(function(l,a){return p[a]===void 0&&(l[a]=u[a]),l},{});return Object.keys(c).length>0?c:void 0}}},iterator:function(p){return new s(p)},length:function(p){return typeof p.delete=="number"?p.delete:typeof p.retain=="number"?p.retain:typeof p.insert=="string"?p.insert.length:1}};function s(p){this.ops=p,this.index=0,this.offset=0}s.prototype.hasNext=function(){return this.peekLength()<1/0},s.prototype.next=function(p){p||(p=1/0);var u=this.ops[this.index];if(u){var d=this.offset,c=n.length(u);if(p>=c-d?(p=c-d,this.index+=1,this.offset=0):this.offset+=p,typeof u.delete=="number")return{delete:p};var l={};return u.attributes&&(l.attributes=u.attributes),typeof u.retain=="number"?l.retain=p:typeof u.insert=="string"?l.insert=u.insert.substr(d,p):l.insert=u.insert,l}return{retain:1/0}},s.prototype.peek=function(){return this.ops[this.index]},s.prototype.peekLength=function(){return this.ops[this.index]?n.length(this.ops[this.index])-this.offset:1/0},s.prototype.peekType=function(){return this.ops[this.index]?typeof this.ops[this.index].delete=="number"?"delete":typeof this.ops[this.index].retain=="number"?"retain":"insert":"retain"},s.prototype.rest=function(){if(this.hasNext()){if(this.offset===0)return this.ops.slice(this.index);var p=this.offset,u=this.index,d=this.next(),c=this.ops.slice(this.index);return this.offset=p,this.index=u,[d].concat(c)}return[]},o.exports=n},function(o,e){var t=function(){function i(c,l){return l!=null&&c instanceof l}var r,n,s;try{r=Map}catch{r=function(){}}try{n=Set}catch{n=function(){}}try{s=Promise}catch{s=function(){}}function p(c,l,a,h,f){typeof l=="object"&&(a=l.depth,h=l.prototype,f=l.includeNonEnumerable,l=l.circular);var m=[],g=[],v=typeof Buffer!="undefined";return l===void 0&&(l=!0),a===void 0&&(a=1/0),function y(b,x){if(b===null)return null;if(x===0)return b;var w,E;if(typeof b!="object")return b;if(i(b,r))w=new r;else if(i(b,n))w=new n;else if(i(b,s))w=new s(function(N,T){b.then(function(L){N(y(L,x-1))},function(L){T(y(L,x-1))})});else if(p.__isArray(b))w=[];else if(p.__isRegExp(b))w=new RegExp(b.source,d(b)),b.lastIndex&&(w.lastIndex=b.lastIndex);else if(p.__isDate(b))w=new Date(b.getTime());else{if(v&&Buffer.isBuffer(b))return w=Buffer.allocUnsafe?Buffer.allocUnsafe(b.length):new Buffer(b.length),b.copy(w),w;i(b,Error)?w=Object.create(b):h===void 0?(E=Object.getPrototypeOf(b),w=Object.create(E)):(w=Object.create(h),E=h)}if(l){var S=m.indexOf(b);if(S!=-1)return g[S];m.push(b),g.push(w)}for(var k in i(b,r)&&b.forEach(function(N,T){var L=y(T,x-1),U=y(N,x-1);w.set(L,U)}),i(b,n)&&b.forEach(function(N){var T=y(N,x-1);w.add(T)}),b){var P;E&&(P=Object.getOwnPropertyDescriptor(E,k)),P&&P.set==null||(w[k]=y(b[k],x-1))}if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(b);for(k=0;k<A.length;k++){var q=A[k];(!(O=Object.getOwnPropertyDescriptor(b,q))||O.enumerable||f)&&(w[q]=y(b[q],x-1),O.enumerable||Object.defineProperty(w,q,{enumerable:!1}))}}if(f){var _=Object.getOwnPropertyNames(b);for(k=0;k<_.length;k++){var O,I=_[k];(O=Object.getOwnPropertyDescriptor(b,I))&&O.enumerable||(w[I]=y(b[I],x-1),Object.defineProperty(w,I,{enumerable:!1}))}}return w}(c,a)}function u(c){return Object.prototype.toString.call(c)}function d(c){var l="";return c.global&&(l+="g"),c.ignoreCase&&(l+="i"),c.multiline&&(l+="m"),l}return p.clonePrototype=function(c){if(c===null)return null;var l=function(){};return l.prototype=c,new l},p.__objToStr=u,p.__isDate=function(c){return typeof c=="object"&&u(c)==="[object Date]"},p.__isArray=function(c){return typeof c=="object"&&u(c)==="[object Array]"},p.__isRegExp=function(c){return typeof c=="object"&&u(c)==="[object RegExp]"},p.__getRegExpFlags=d,p}();typeof o=="object"&&o.exports&&(o.exports=t)},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(g,v){if(Array.isArray(g))return g;if(Symbol.iterator in Object(g))return function(y,b){var x=[],w=!0,E=!1,S=void 0;try{for(var k,P=y[Symbol.iterator]();!(w=(k=P.next()).done)&&(x.push(k.value),!b||x.length!==b);w=!0);}catch(A){E=!0,S=A}finally{try{!w&&P.return&&P.return()}finally{if(E)throw S}}return x}(g,v);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function g(v,y){for(var b=0;b<y.length;b++){var x=y[b];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(v,x.key,x)}}return function(v,y,b){return y&&g(v.prototype,y),b&&g(v,b),v}}(),n=function g(v,y,b){v===null&&(v=Function.prototype);var x=Object.getOwnPropertyDescriptor(v,y);if(x===void 0){var w=Object.getPrototypeOf(v);return w===null?void 0:g(w,y,b)}if("value"in x)return x.value;var E=x.get;return E!==void 0?E.call(b):void 0},s=h(t(0)),p=h(t(8)),u=t(4),d=h(u),c=h(t(16)),l=h(t(13)),a=h(t(25));function h(g){return g&&g.__esModule?g:{default:g}}function f(g){return g instanceof d.default||g instanceof u.BlockEmbed}var m=function(g){function v(y,b){(function(w,E){if(!(w instanceof E))throw new TypeError("Cannot call a class as a function")})(this,v);var x=function(w,E){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!E||typeof E!="object"&&typeof E!="function"?w:E}(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,y));return x.emitter=b.emitter,Array.isArray(b.whitelist)&&(x.whitelist=b.whitelist.reduce(function(w,E){return w[E]=!0,w},{})),x.domNode.addEventListener("DOMNodeInserted",function(){}),x.optimize(),x.enable(),x}return function(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(y,b):y.__proto__=b)}(v,g),r(v,[{key:"batchStart",value:function(){this.batch=!0}},{key:"batchEnd",value:function(){this.batch=!1,this.optimize()}},{key:"deleteAt",value:function(y,b){var x=this.line(y),w=i(x,2),E=w[0],S=w[1],k=this.line(y+b),P=i(k,1)[0];if(n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"deleteAt",this).call(this,y,b),P!=null&&E!==P&&S>0){if(E instanceof u.BlockEmbed||P instanceof u.BlockEmbed)return void this.optimize();if(E instanceof l.default){var A=E.newlineIndex(E.length(),!0);if(A>-1&&(E=E.split(A+1))===P)return void this.optimize()}else if(P instanceof l.default){var q=P.newlineIndex(0);q>-1&&P.split(q+1)}var _=P.children.head instanceof c.default?null:P.children.head;E.moveChildren(P,_),E.remove()}this.optimize()}},{key:"enable",value:function(){var y=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];this.domNode.setAttribute("contenteditable",y)}},{key:"formatAt",value:function(y,b,x,w){(this.whitelist==null||this.whitelist[x])&&(n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"formatAt",this).call(this,y,b,x,w),this.optimize())}},{key:"insertAt",value:function(y,b,x){if(x==null||this.whitelist==null||this.whitelist[b]){if(y>=this.length())if(x==null||s.default.query(b,s.default.Scope.BLOCK)==null){var w=s.default.create(this.statics.defaultChild);this.appendChild(w),x==null&&b.endsWith(`
`)&&(b=b.slice(0,-1)),w.insertAt(0,b,x)}else{var E=s.default.create(b,x);this.appendChild(E)}else n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"insertAt",this).call(this,y,b,x);this.optimize()}}},{key:"insertBefore",value:function(y,b){if(y.statics.scope===s.default.Scope.INLINE_BLOT){var x=s.default.create(this.statics.defaultChild);x.appendChild(y),y=x}n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"insertBefore",this).call(this,y,b)}},{key:"leaf",value:function(y){return this.path(y).pop()||[null,-1]}},{key:"line",value:function(y){return y===this.length()?this.line(y-1):this.descendant(f,y)}},{key:"lines",value:function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE,x=function w(E,S,k){var P=[],A=k;return E.children.forEachAt(S,k,function(q,_,O){f(q)?P.push(q):q instanceof s.default.Container&&(P=P.concat(w(q,_,A))),A-=O}),P};return x(this,y,b)}},{key:"optimize",value:function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.batch!==!0&&(n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"optimize",this).call(this,y,b),y.length>0&&this.emitter.emit(p.default.events.SCROLL_OPTIMIZE,y,b))}},{key:"path",value:function(y){return n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"path",this).call(this,y).slice(1)}},{key:"update",value:function(y){if(this.batch!==!0){var b=p.default.sources.USER;typeof y=="string"&&(b=y),Array.isArray(y)||(y=this.observer.takeRecords()),y.length>0&&this.emitter.emit(p.default.events.SCROLL_BEFORE_UPDATE,b,y),n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"update",this).call(this,y.concat([])),y.length>0&&this.emitter.emit(p.default.events.SCROLL_UPDATE,b,y)}}}]),v}(s.default.Scroll);m.blotName="scroll",m.className="ql-editor",m.tagName="DIV",m.defaultChild="block",m.allowedChildren=[d.default,u.BlockEmbed,a.default],e.default=m},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.SHORTKEY=e.default=void 0;var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},r=function(_,O){if(Array.isArray(_))return _;if(Symbol.iterator in Object(_))return function(I,N){var T=[],L=!0,U=!1,K=void 0;try{for(var ee,qe=I[Symbol.iterator]();!(L=(ee=qe.next()).done)&&(T.push(ee.value),!N||T.length!==N);L=!0);}catch(R){U=!0,K=R}finally{try{!L&&qe.return&&qe.return()}finally{if(U)throw K}}return T}(_,O);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function _(O,I){for(var N=0;N<I.length;N++){var T=I[N];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(O,T.key,T)}}return function(O,I,N){return I&&_(O.prototype,I),N&&_(O,N),O}}(),s=m(t(21)),p=m(t(11)),u=m(t(3)),d=m(t(2)),c=m(t(20)),l=m(t(0)),a=m(t(5)),h=m(t(10)),f=m(t(9));function m(_){return _&&_.__esModule?_:{default:_}}function g(_,O,I){return O in _?Object.defineProperty(_,O,{value:I,enumerable:!0,configurable:!0,writable:!0}):_[O]=I,_}var v=(0,h.default)("quill:keyboard"),y=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey",b=function(_){function O(I,N){(function(L,U){if(!(L instanceof U))throw new TypeError("Cannot call a class as a function")})(this,O);var T=function(L,U){if(!L)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!U||typeof U!="object"&&typeof U!="function"?L:U}(this,(O.__proto__||Object.getPrototypeOf(O)).call(this,I,N));return T.bindings={},Object.keys(T.options.bindings).forEach(function(L){(L!=="list autofill"||I.scroll.whitelist==null||I.scroll.whitelist.list)&&T.options.bindings[L]&&T.addBinding(T.options.bindings[L])}),T.addBinding({key:O.keys.ENTER,shiftKey:null},k),T.addBinding({key:O.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},function(){}),/Firefox/i.test(navigator.userAgent)?(T.addBinding({key:O.keys.BACKSPACE},{collapsed:!0},w),T.addBinding({key:O.keys.DELETE},{collapsed:!0},E)):(T.addBinding({key:O.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/},w),T.addBinding({key:O.keys.DELETE},{collapsed:!0,suffix:/^.?$/},E)),T.addBinding({key:O.keys.BACKSPACE},{collapsed:!1},S),T.addBinding({key:O.keys.DELETE},{collapsed:!1},S),T.addBinding({key:O.keys.BACKSPACE,altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},w),T.listen(),T}return function(I,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof N);I.prototype=Object.create(N&&N.prototype,{constructor:{value:I,enumerable:!1,writable:!0,configurable:!0}}),N&&(Object.setPrototypeOf?Object.setPrototypeOf(I,N):I.__proto__=N)}(O,_),n(O,null,[{key:"match",value:function(I,N){return N=q(N),!["altKey","ctrlKey","metaKey","shiftKey"].some(function(T){return!!N[T]!==I[T]&&N[T]!==null})&&N.key===(I.which||I.keyCode)}}]),n(O,[{key:"addBinding",value:function(I){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},L=q(I);if(L==null||L.key==null)return v.warn("Attempted to add invalid keyboard binding",L);typeof N=="function"&&(N={handler:N}),typeof T=="function"&&(T={handler:T}),L=(0,u.default)(L,N,T),this.bindings[L.key]=this.bindings[L.key]||[],this.bindings[L.key].push(L)}},{key:"listen",value:function(){var I=this;this.quill.root.addEventListener("keydown",function(N){if(!N.defaultPrevented){var T=N.which||N.keyCode,L=(I.bindings[T]||[]).filter(function(xe){return O.match(N,xe)});if(L.length!==0){var U=I.quill.getSelection();if(U!=null&&I.quill.hasFocus()){var K=I.quill.getLine(U.index),ee=r(K,2),qe=ee[0],R=ee[1],$=I.quill.getLeaf(U.index),F=r($,2),z=F[0],B=F[1],se=U.length===0?[z,B]:I.quill.getLeaf(U.index+U.length),ne=r(se,2),ce=ne[0],Te=ne[1],be=z instanceof l.default.Text?z.value().slice(0,B):"",lt=ce instanceof l.default.Text?ce.value().slice(Te):"",ke={collapsed:U.length===0,empty:U.length===0&&qe.length()<=1,format:I.quill.getFormat(U),offset:R,prefix:be,suffix:lt};L.some(function(xe){if(xe.collapsed!=null&&xe.collapsed!==ke.collapsed||xe.empty!=null&&xe.empty!==ke.empty||xe.offset!=null&&xe.offset!==ke.offset)return!1;if(Array.isArray(xe.format)){if(xe.format.every(function(Ve){return ke.format[Ve]==null}))return!1}else if(i(xe.format)==="object"&&!Object.keys(xe.format).every(function(Ve){return xe.format[Ve]===!0?ke.format[Ve]!=null:xe.format[Ve]===!1?ke.format[Ve]==null:(0,p.default)(xe.format[Ve],ke.format[Ve])}))return!1;return!(xe.prefix!=null&&!xe.prefix.test(ke.prefix)||xe.suffix!=null&&!xe.suffix.test(ke.suffix)||xe.handler.call(I,U,ke)===!0)})&&N.preventDefault()}}}})}}]),O}(f.default);function x(_,O){var I,N=_===b.keys.LEFT?"prefix":"suffix";return g(I={key:_,shiftKey:O,altKey:null},N,/^$/),g(I,"handler",function(T){var L=T.index;_===b.keys.RIGHT&&(L+=T.length+1);var U=this.quill.getLeaf(L);return!(r(U,1)[0]instanceof l.default.Embed&&(_===b.keys.LEFT?O?this.quill.setSelection(T.index-1,T.length+1,a.default.sources.USER):this.quill.setSelection(T.index-1,a.default.sources.USER):O?this.quill.setSelection(T.index,T.length+1,a.default.sources.USER):this.quill.setSelection(T.index+T.length+1,a.default.sources.USER),1))}),I}function w(_,O){if(!(_.index===0||this.quill.getLength()<=1)){var I=this.quill.getLine(_.index),N=r(I,1)[0],T={};if(O.offset===0){var L=this.quill.getLine(_.index-1),U=r(L,1)[0];if(U!=null&&U.length()>1){var K=N.formats(),ee=this.quill.getFormat(_.index-1,1);T=c.default.attributes.diff(K,ee)||{}}}var qe=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(O.prefix)?2:1;this.quill.deleteText(_.index-qe,qe,a.default.sources.USER),Object.keys(T).length>0&&this.quill.formatLine(_.index-qe,qe,T,a.default.sources.USER),this.quill.focus()}}function E(_,O){var I=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(O.suffix)?2:1;if(!(_.index>=this.quill.getLength()-I)){var N={},T=0,L=this.quill.getLine(_.index),U=r(L,1)[0];if(O.offset>=U.length()-1){var K=this.quill.getLine(_.index+1),ee=r(K,1)[0];if(ee){var qe=U.formats(),R=this.quill.getFormat(_.index,1);N=c.default.attributes.diff(qe,R)||{},T=ee.length()}}this.quill.deleteText(_.index,I,a.default.sources.USER),Object.keys(N).length>0&&this.quill.formatLine(_.index+T-1,I,N,a.default.sources.USER)}}function S(_){var O=this.quill.getLines(_),I={};if(O.length>1){var N=O[0].formats(),T=O[O.length-1].formats();I=c.default.attributes.diff(T,N)||{}}this.quill.deleteText(_,a.default.sources.USER),Object.keys(I).length>0&&this.quill.formatLine(_.index,1,I,a.default.sources.USER),this.quill.setSelection(_.index,a.default.sources.SILENT),this.quill.focus()}function k(_,O){var I=this;_.length>0&&this.quill.scroll.deleteAt(_.index,_.length);var N=Object.keys(O.format).reduce(function(T,L){return l.default.query(L,l.default.Scope.BLOCK)&&!Array.isArray(O.format[L])&&(T[L]=O.format[L]),T},{});this.quill.insertText(_.index,`
`,N,a.default.sources.USER),this.quill.setSelection(_.index+1,a.default.sources.SILENT),this.quill.focus(),Object.keys(O.format).forEach(function(T){N[T]==null&&(Array.isArray(O.format[T])||T!=="link"&&I.quill.format(T,O.format[T],a.default.sources.USER))})}function P(_){return{key:b.keys.TAB,shiftKey:!_,format:{"code-block":!0},handler:function(O){var I=l.default.query("code-block"),N=O.index,T=O.length,L=this.quill.scroll.descendant(I,N),U=r(L,2),K=U[0],ee=U[1];if(K!=null){var qe=this.quill.getIndex(K),R=K.newlineIndex(ee,!0)+1,$=K.newlineIndex(qe+ee+T),F=K.domNode.textContent.slice(R,$).split(`
`);ee=0,F.forEach(function(z,B){_?(K.insertAt(R+ee,I.TAB),ee+=I.TAB.length,B===0?N+=I.TAB.length:T+=I.TAB.length):z.startsWith(I.TAB)&&(K.deleteAt(R+ee,I.TAB.length),ee-=I.TAB.length,B===0?N-=I.TAB.length:T-=I.TAB.length),ee+=z.length+1}),this.quill.update(a.default.sources.USER),this.quill.setSelection(N,T,a.default.sources.SILENT)}}}}function A(_){return{key:_[0].toUpperCase(),shortKey:!0,handler:function(O,I){this.quill.format(_,!I.format[_],a.default.sources.USER)}}}function q(_){if(typeof _=="string"||typeof _=="number")return q({key:_});if((_===void 0?"undefined":i(_))==="object"&&(_=(0,s.default)(_,!1)),typeof _.key=="string")if(b.keys[_.key.toUpperCase()]!=null)_.key=b.keys[_.key.toUpperCase()];else{if(_.key.length!==1)return null;_.key=_.key.toUpperCase().charCodeAt(0)}return _.shortKey&&(_[y]=_.shortKey,delete _.shortKey),_}b.keys={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},b.DEFAULTS={bindings:{bold:A("bold"),italic:A("italic"),underline:A("underline"),indent:{key:b.keys.TAB,format:["blockquote","indent","list"],handler:function(_,O){if(O.collapsed&&O.offset!==0)return!0;this.quill.format("indent","+1",a.default.sources.USER)}},outdent:{key:b.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],handler:function(_,O){if(O.collapsed&&O.offset!==0)return!0;this.quill.format("indent","-1",a.default.sources.USER)}},"outdent backspace":{key:b.keys.BACKSPACE,collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler:function(_,O){O.format.indent!=null?this.quill.format("indent","-1",a.default.sources.USER):O.format.list!=null&&this.quill.format("list",!1,a.default.sources.USER)}},"indent code-block":P(!0),"outdent code-block":P(!1),"remove tab":{key:b.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,handler:function(_){this.quill.deleteText(_.index-1,1,a.default.sources.USER)}},tab:{key:b.keys.TAB,handler:function(_){this.quill.history.cutoff();var O=new d.default().retain(_.index).delete(_.length).insert("	");this.quill.updateContents(O,a.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(_.index+1,a.default.sources.SILENT)}},"list empty enter":{key:b.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function(_,O){this.quill.format("list",!1,a.default.sources.USER),O.format.indent&&this.quill.format("indent",!1,a.default.sources.USER)}},"checklist enter":{key:b.keys.ENTER,collapsed:!0,format:{list:"checked"},handler:function(_){var O=this.quill.getLine(_.index),I=r(O,2),N=I[0],T=I[1],L=(0,u.default)({},N.formats(),{list:"checked"}),U=new d.default().retain(_.index).insert(`
`,L).retain(N.length()-T-1).retain(1,{list:"unchecked"});this.quill.updateContents(U,a.default.sources.USER),this.quill.setSelection(_.index+1,a.default.sources.SILENT),this.quill.scrollIntoView()}},"header enter":{key:b.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,handler:function(_,O){var I=this.quill.getLine(_.index),N=r(I,2),T=N[0],L=N[1],U=new d.default().retain(_.index).insert(`
`,O.format).retain(T.length()-L-1).retain(1,{header:null});this.quill.updateContents(U,a.default.sources.USER),this.quill.setSelection(_.index+1,a.default.sources.SILENT),this.quill.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler:function(_,O){var I=O.prefix.length,N=this.quill.getLine(_.index),T=r(N,2),L=T[0],U=T[1];if(U>I)return!0;var K=void 0;switch(O.prefix.trim()){case"[]":case"[ ]":K="unchecked";break;case"[x]":K="checked";break;case"-":case"*":K="bullet";break;default:K="ordered"}this.quill.insertText(_.index," ",a.default.sources.USER),this.quill.history.cutoff();var ee=new d.default().retain(_.index-U).delete(I+1).retain(L.length()-2-U).retain(1,{list:K});this.quill.updateContents(ee,a.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(_.index-I,a.default.sources.SILENT)}},"code exit":{key:b.keys.ENTER,collapsed:!0,format:["code-block"],prefix:/\n\n$/,suffix:/^\s+$/,handler:function(_){var O=this.quill.getLine(_.index),I=r(O,2),N=I[0],T=I[1],L=new d.default().retain(_.index+N.length()-T-2).retain(1,{"code-block":null}).delete(1);this.quill.updateContents(L,a.default.sources.USER)}},"embed left":x(b.keys.LEFT,!1),"embed left shift":x(b.keys.LEFT,!0),"embed right":x(b.keys.RIGHT,!1),"embed right shift":x(b.keys.RIGHT,!0)}},e.default=b,e.SHORTKEY=y},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(c,l){if(Array.isArray(c))return c;if(Symbol.iterator in Object(c))return function(a,h){var f=[],m=!0,g=!1,v=void 0;try{for(var y,b=a[Symbol.iterator]();!(m=(y=b.next()).done)&&(f.push(y.value),!h||f.length!==h);m=!0);}catch(x){g=!0,v=x}finally{try{!m&&b.return&&b.return()}finally{if(g)throw v}}return f}(c,l);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function c(l,a,h){l===null&&(l=Function.prototype);var f=Object.getOwnPropertyDescriptor(l,a);if(f===void 0){var m=Object.getPrototypeOf(l);return m===null?void 0:c(m,a,h)}if("value"in f)return f.value;var g=f.get;return g!==void 0?g.call(h):void 0},n=function(){function c(l,a){for(var h=0;h<a.length;h++){var f=a[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(l,f.key,f)}}return function(l,a,h){return a&&c(l.prototype,a),h&&c(l,h),l}}(),s=u(t(0)),p=u(t(7));function u(c){return c&&c.__esModule?c:{default:c}}var d=function(c){function l(a,h){(function(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")})(this,l);var f=function(m,g){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!g||typeof g!="object"&&typeof g!="function"?m:g}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,a));return f.selection=h,f.textNode=document.createTextNode(l.CONTENTS),f.domNode.appendChild(f.textNode),f._length=0,f}return function(a,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);a.prototype=Object.create(h&&h.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(a,h):a.__proto__=h)}(l,c),n(l,null,[{key:"value",value:function(){}}]),n(l,[{key:"detach",value:function(){this.parent!=null&&this.parent.removeChild(this)}},{key:"format",value:function(a,h){if(this._length!==0)return r(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"format",this).call(this,a,h);for(var f=this,m=0;f!=null&&f.statics.scope!==s.default.Scope.BLOCK_BLOT;)m+=f.offset(f.parent),f=f.parent;f!=null&&(this._length=l.CONTENTS.length,f.optimize(),f.formatAt(m,l.CONTENTS.length,a,h),this._length=0)}},{key:"index",value:function(a,h){return a===this.textNode?0:r(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"index",this).call(this,a,h)}},{key:"length",value:function(){return this._length}},{key:"position",value:function(){return[this.textNode,this.textNode.data.length]}},{key:"remove",value:function(){r(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"remove",this).call(this),this.parent=null}},{key:"restore",value:function(){if(!this.selection.composing&&this.parent!=null){var a=this.textNode,h=this.selection.getNativeRange(),f=void 0,m=void 0,g=void 0;if(h!=null&&h.start.node===a&&h.end.node===a){var v=[a,h.start.offset,h.end.offset];f=v[0],m=v[1],g=v[2]}for(;this.domNode.lastChild!=null&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);if(this.textNode.data!==l.CONTENTS){var y=this.textNode.data.split(l.CONTENTS).join("");this.next instanceof p.default?(f=this.next.domNode,this.next.insertAt(0,y),this.textNode.data=l.CONTENTS):(this.textNode.data=y,this.parent.insertBefore(s.default.create(this.textNode),this),this.textNode=document.createTextNode(l.CONTENTS),this.domNode.appendChild(this.textNode))}if(this.remove(),m!=null){var b=[m,g].map(function(w){return Math.max(0,Math.min(f.data.length,w-1))}),x=i(b,2);return m=x[0],g=x[1],{startNode:f,startOffset:m,endNode:f,endOffset:g}}}}},{key:"update",value:function(a,h){var f=this;if(a.some(function(g){return g.type==="characterData"&&g.target===f.textNode})){var m=this.restore();m&&(h.range=m)}}},{key:"value",value:function(){return""}}]),l}(s.default.Embed);d.blotName="cursor",d.className="ql-cursor",d.tagName="span",d.CONTENTS="\uFEFF",e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=s(t(0)),r=t(4),n=s(r);function s(c){return c&&c.__esModule?c:{default:c}}function p(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}function u(c,l){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||typeof l!="object"&&typeof l!="function"?c:l}var d=function(c){function l(){return p(this,l),u(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return function(a,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);a.prototype=Object.create(h&&h.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(a,h):a.__proto__=h)}(l,c),l}(i.default.Container);d.allowedChildren=[n.default,r.BlockEmbed,d],e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.ColorStyle=e.ColorClass=e.ColorAttributor=void 0;var i,r=function(){function h(f,m){for(var g=0;g<m.length;g++){var v=m[g];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(f,v.key,v)}}return function(f,m,g){return m&&h(f.prototype,m),g&&h(f,g),f}}(),n=function h(f,m,g){f===null&&(f=Function.prototype);var v=Object.getOwnPropertyDescriptor(f,m);if(v===void 0){var y=Object.getPrototypeOf(f);return y===null?void 0:h(y,m,g)}if("value"in v)return v.value;var b=v.get;return b!==void 0?b.call(g):void 0},s=t(0),p=(i=s)&&i.__esModule?i:{default:i};function u(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function d(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}var c=function(h){function f(){return u(this,f),d(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments))}return function(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}(f,h),r(f,[{key:"value",value:function(m){var g=n(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"value",this).call(this,m);return g.startsWith("rgb(")?(g=g.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),"#"+g.split(",").map(function(v){return("00"+parseInt(v).toString(16)).slice(-2)}).join("")):g}}]),f}(p.default.Attributor.Style),l=new p.default.Attributor.Class("color","ql-color",{scope:p.default.Scope.INLINE}),a=new c("color","color",{scope:p.default.Scope.INLINE});e.ColorAttributor=c,e.ColorClass=l,e.ColorStyle=a},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.sanitize=e.default=void 0;var i,r=function(){function l(a,h){for(var f=0;f<h.length;f++){var m=h[f];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(a,m.key,m)}}return function(a,h,f){return h&&l(a.prototype,h),f&&l(a,f),a}}(),n=function l(a,h,f){a===null&&(a=Function.prototype);var m=Object.getOwnPropertyDescriptor(a,h);if(m===void 0){var g=Object.getPrototypeOf(a);return g===null?void 0:l(g,h,f)}if("value"in m)return m.value;var v=m.get;return v!==void 0?v.call(f):void 0},s=t(6);function p(l,a){if(!(l instanceof a))throw new TypeError("Cannot call a class as a function")}function u(l,a){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?l:a}var d=function(l){function a(){return p(this,a),u(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(h,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);h.prototype=Object.create(f&&f.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(h,f):h.__proto__=f)}(a,l),r(a,[{key:"format",value:function(h,f){if(h!==this.statics.blotName||!f)return n(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"format",this).call(this,h,f);f=this.constructor.sanitize(f),this.domNode.setAttribute("href",f)}}],[{key:"create",value:function(h){var f=n(a.__proto__||Object.getPrototypeOf(a),"create",this).call(this,h);return h=this.sanitize(h),f.setAttribute("href",h),f.setAttribute("rel","noopener noreferrer"),f.setAttribute("target","_blank"),f}},{key:"formats",value:function(h){return h.getAttribute("href")}},{key:"sanitize",value:function(h){return c(h,this.PROTOCOL_WHITELIST)?h:this.SANITIZED_URL}}]),a}(((i=s)&&i.__esModule?i:{default:i}).default);function c(l,a){var h=document.createElement("a");h.href=l;var f=h.href.slice(0,h.href.indexOf(":"));return a.indexOf(f)>-1}d.blotName="link",d.tagName="A",d.SANITIZED_URL="about:blank",d.PROTOCOL_WHITELIST=["http","https","mailto","tel"],e.default=d,e.sanitize=c},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},r=function(){function l(a,h){for(var f=0;f<h.length;f++){var m=h[f];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(a,m.key,m)}}return function(a,h,f){return h&&l(a.prototype,h),f&&l(a,f),a}}(),n=p(t(23)),s=p(t(107));function p(l){return l&&l.__esModule?l:{default:l}}var u=0;function d(l,a){l.setAttribute(a,l.getAttribute(a)!=="true")}var c=function(){function l(a){var h=this;(function(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")})(this,l),this.select=a,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("mousedown",function(){h.togglePicker()}),this.label.addEventListener("keydown",function(f){switch(f.keyCode){case n.default.keys.ENTER:h.togglePicker();break;case n.default.keys.ESCAPE:h.escape(),f.preventDefault()}}),this.select.addEventListener("change",this.update.bind(this))}return r(l,[{key:"togglePicker",value:function(){this.container.classList.toggle("ql-expanded"),d(this.label,"aria-expanded"),d(this.options,"aria-hidden")}},{key:"buildItem",value:function(a){var h=this,f=document.createElement("span");return f.tabIndex="0",f.setAttribute("role","button"),f.classList.add("ql-picker-item"),a.hasAttribute("value")&&f.setAttribute("data-value",a.getAttribute("value")),a.textContent&&f.setAttribute("data-label",a.textContent),f.addEventListener("click",function(){h.selectItem(f,!0)}),f.addEventListener("keydown",function(m){switch(m.keyCode){case n.default.keys.ENTER:h.selectItem(f,!0),m.preventDefault();break;case n.default.keys.ESCAPE:h.escape(),m.preventDefault()}}),f}},{key:"buildLabel",value:function(){var a=document.createElement("span");return a.classList.add("ql-picker-label"),a.innerHTML=s.default,a.tabIndex="0",a.setAttribute("role","button"),a.setAttribute("aria-expanded","false"),this.container.appendChild(a),a}},{key:"buildOptions",value:function(){var a=this,h=document.createElement("span");h.classList.add("ql-picker-options"),h.setAttribute("aria-hidden","true"),h.tabIndex="-1",h.id="ql-picker-options-"+u,u+=1,this.label.setAttribute("aria-controls",h.id),this.options=h,[].slice.call(this.select.options).forEach(function(f){var m=a.buildItem(f);h.appendChild(m),f.selected===!0&&a.selectItem(m)}),this.container.appendChild(h)}},{key:"buildPicker",value:function(){var a=this;[].slice.call(this.select.attributes).forEach(function(h){a.container.setAttribute(h.name,h.value)}),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}},{key:"escape",value:function(){var a=this;this.close(),setTimeout(function(){return a.label.focus()},1)}},{key:"close",value:function(){this.container.classList.remove("ql-expanded"),this.label.setAttribute("aria-expanded","false"),this.options.setAttribute("aria-hidden","true")}},{key:"selectItem",value:function(a){var h=arguments.length>1&&arguments[1]!==void 0&&arguments[1],f=this.container.querySelector(".ql-selected");if(a!==f&&(f!=null&&f.classList.remove("ql-selected"),a!=null&&(a.classList.add("ql-selected"),this.select.selectedIndex=[].indexOf.call(a.parentNode.children,a),a.hasAttribute("data-value")?this.label.setAttribute("data-value",a.getAttribute("data-value")):this.label.removeAttribute("data-value"),a.hasAttribute("data-label")?this.label.setAttribute("data-label",a.getAttribute("data-label")):this.label.removeAttribute("data-label"),h))){if(typeof Event=="function")this.select.dispatchEvent(new Event("change"));else if((typeof Event=="undefined"?"undefined":i(Event))==="object"){var m=document.createEvent("Event");m.initEvent("change",!0,!0),this.select.dispatchEvent(m)}this.close()}}},{key:"update",value:function(){var a=void 0;if(this.select.selectedIndex>-1){var h=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];a=this.select.options[this.select.selectedIndex],this.selectItem(h)}else this.selectItem(null);var f=a!=null&&a!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",f)}}]),l}();e.default=c},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=v(t(0)),r=v(t(5)),n=t(4),s=v(n),p=v(t(16)),u=v(t(25)),d=v(t(24)),c=v(t(35)),l=v(t(6)),a=v(t(22)),h=v(t(7)),f=v(t(55)),m=v(t(42)),g=v(t(23));function v(y){return y&&y.__esModule?y:{default:y}}r.default.register({"blots/block":s.default,"blots/block/embed":n.BlockEmbed,"blots/break":p.default,"blots/container":u.default,"blots/cursor":d.default,"blots/embed":c.default,"blots/inline":l.default,"blots/scroll":a.default,"blots/text":h.default,"modules/clipboard":f.default,"modules/history":m.default,"modules/keyboard":g.default}),i.default.register(s.default,p.default,d.default,l.default,a.default,h.default),e.default=r.default},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=t(1),r=function(){function n(s){this.domNode=s,this.domNode[i.DATA_KEY]={blot:this}}return Object.defineProperty(n.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),n.create=function(s){if(this.tagName==null)throw new i.ParchmentError("Blot definition missing tagName");var p;return Array.isArray(this.tagName)?(typeof s=="string"&&(s=s.toUpperCase(),parseInt(s).toString()===s&&(s=parseInt(s))),p=typeof s=="number"?document.createElement(this.tagName[s-1]):this.tagName.indexOf(s)>-1?document.createElement(s):document.createElement(this.tagName[0])):p=document.createElement(this.tagName),this.className&&p.classList.add(this.className),p},n.prototype.attach=function(){this.parent!=null&&(this.scroll=this.parent.scroll)},n.prototype.clone=function(){var s=this.domNode.cloneNode(!1);return i.create(s)},n.prototype.detach=function(){this.parent!=null&&this.parent.removeChild(this),delete this.domNode[i.DATA_KEY]},n.prototype.deleteAt=function(s,p){this.isolate(s,p).remove()},n.prototype.formatAt=function(s,p,u,d){var c=this.isolate(s,p);if(i.query(u,i.Scope.BLOT)!=null&&d)c.wrap(u,d);else if(i.query(u,i.Scope.ATTRIBUTE)!=null){var l=i.create(this.statics.scope);c.wrap(l),l.format(u,d)}},n.prototype.insertAt=function(s,p,u){var d=u==null?i.create("text",p):i.create(p,u),c=this.split(s);this.parent.insertBefore(d,c)},n.prototype.insertInto=function(s,p){p===void 0&&(p=null),this.parent!=null&&this.parent.children.remove(this);var u=null;s.children.insertBefore(this,p),p!=null&&(u=p.domNode),this.domNode.parentNode==s.domNode&&this.domNode.nextSibling==u||s.domNode.insertBefore(this.domNode,u),this.parent=s,this.attach()},n.prototype.isolate=function(s,p){var u=this.split(s);return u.split(p),u},n.prototype.length=function(){return 1},n.prototype.offset=function(s){return s===void 0&&(s=this.parent),this.parent==null||this==s?0:this.parent.children.offset(this)+this.parent.offset(s)},n.prototype.optimize=function(s){this.domNode[i.DATA_KEY]!=null&&delete this.domNode[i.DATA_KEY].mutations},n.prototype.remove=function(){this.domNode.parentNode!=null&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},n.prototype.replace=function(s){s.parent!=null&&(s.parent.insertBefore(this,s.next),s.remove())},n.prototype.replaceWith=function(s,p){var u=typeof s=="string"?i.create(s,p):s;return u.replace(this),u},n.prototype.split=function(s,p){return s===0?this:this.next},n.prototype.update=function(s,p){},n.prototype.wrap=function(s,p){var u=typeof s=="string"?i.create(s,p):s;return this.parent!=null&&this.parent.insertBefore(u,this.next),u.appendChild(this),u},n.blotName="abstract",n}();e.default=r},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=t(12),r=t(32),n=t(33),s=t(1),p=function(){function u(d){this.attributes={},this.domNode=d,this.build()}return u.prototype.attribute=function(d,c){c?d.add(this.domNode,c)&&(d.value(this.domNode)!=null?this.attributes[d.attrName]=d:delete this.attributes[d.attrName]):(d.remove(this.domNode),delete this.attributes[d.attrName])},u.prototype.build=function(){var d=this;this.attributes={};var c=i.default.keys(this.domNode),l=r.default.keys(this.domNode),a=n.default.keys(this.domNode);c.concat(l).concat(a).forEach(function(h){var f=s.query(h,s.Scope.ATTRIBUTE);f instanceof i.default&&(d.attributes[f.attrName]=f)})},u.prototype.copy=function(d){var c=this;Object.keys(this.attributes).forEach(function(l){var a=c.attributes[l].value(c.domNode);d.format(l,a)})},u.prototype.move=function(d){var c=this;this.copy(d),Object.keys(this.attributes).forEach(function(l){c.attributes[l].remove(c.domNode)}),this.attributes={}},u.prototype.values=function(){var d=this;return Object.keys(this.attributes).reduce(function(c,l){return c[l]=d.attributes[l].value(d.domNode),c},{})},u}();e.default=p},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,u){p.__proto__=u}||function(p,u){for(var d in u)u.hasOwnProperty(d)&&(p[d]=u[d])},function(p,u){function d(){this.constructor=p}i(p,u),p.prototype=u===null?Object.create(u):(d.prototype=u.prototype,new d)});function n(p,u){return(p.getAttribute("class")||"").split(/\s+/).filter(function(d){return d.indexOf(u+"-")===0})}Object.defineProperty(e,"__esModule",{value:!0});var s=function(p){function u(){return p!==null&&p.apply(this,arguments)||this}return r(u,p),u.keys=function(d){return(d.getAttribute("class")||"").split(/\s+/).map(function(c){return c.split("-").slice(0,-1).join("-")})},u.prototype.add=function(d,c){return!!this.canAdd(d,c)&&(this.remove(d),d.classList.add(this.keyName+"-"+c),!0)},u.prototype.remove=function(d){n(d,this.keyName).forEach(function(c){d.classList.remove(c)}),d.classList.length===0&&d.removeAttribute("class")},u.prototype.value=function(d){var c=(n(d,this.keyName)[0]||"").slice(this.keyName.length+1);return this.canAdd(d,c)?c:""},u}(t(12).default);e.default=s},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,u){p.__proto__=u}||function(p,u){for(var d in u)u.hasOwnProperty(d)&&(p[d]=u[d])},function(p,u){function d(){this.constructor=p}i(p,u),p.prototype=u===null?Object.create(u):(d.prototype=u.prototype,new d)});function n(p){var u=p.split("-"),d=u.slice(1).map(function(c){return c[0].toUpperCase()+c.slice(1)}).join("");return u[0]+d}Object.defineProperty(e,"__esModule",{value:!0});var s=function(p){function u(){return p!==null&&p.apply(this,arguments)||this}return r(u,p),u.keys=function(d){return(d.getAttribute("style")||"").split(";").map(function(c){return c.split(":")[0].trim()})},u.prototype.add=function(d,c){return!!this.canAdd(d,c)&&(d.style[n(this.keyName)]=c,!0)},u.prototype.remove=function(d){d.style[n(this.keyName)]="",d.getAttribute("style")||d.removeAttribute("style")},u.prototype.value=function(d){var c=d.style[n(this.keyName)];return this.canAdd(d,c)?c:""},u}(t(12).default);e.default=s},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function n(s,p){for(var u=0;u<p.length;u++){var d=p[u];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(s,d.key,d)}}return function(s,p,u){return p&&n(s.prototype,p),u&&n(s,u),s}}(),r=function(){function n(s,p){(function(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")})(this,n),this.quill=s,this.options=p,this.modules={}}return i(n,[{key:"init",value:function(){var s=this;Object.keys(this.options.modules).forEach(function(p){s.modules[p]==null&&s.addModule(p)})}},{key:"addModule",value:function(s){var p=this.quill.constructor.import("modules/"+s);return this.modules[s]=new p(this.quill,this.options.modules[s]||{}),this.modules[s]}}]),n}();r.DEFAULTS={modules:{}},r.themes={default:r},e.default=r},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function c(l,a){for(var h=0;h<a.length;h++){var f=a[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(l,f.key,f)}}return function(l,a,h){return a&&c(l.prototype,a),h&&c(l,h),l}}(),r=function c(l,a,h){l===null&&(l=Function.prototype);var f=Object.getOwnPropertyDescriptor(l,a);if(f===void 0){var m=Object.getPrototypeOf(l);return m===null?void 0:c(m,a,h)}if("value"in f)return f.value;var g=f.get;return g!==void 0?g.call(h):void 0},n=p(t(0)),s=p(t(7));function p(c){return c&&c.__esModule?c:{default:c}}var u="\uFEFF",d=function(c){function l(a){(function(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")})(this,l);var h=function(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,a));return h.contentNode=document.createElement("span"),h.contentNode.setAttribute("contenteditable",!1),[].slice.call(h.domNode.childNodes).forEach(function(f){h.contentNode.appendChild(f)}),h.leftGuard=document.createTextNode(u),h.rightGuard=document.createTextNode(u),h.domNode.appendChild(h.leftGuard),h.domNode.appendChild(h.contentNode),h.domNode.appendChild(h.rightGuard),h}return function(a,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);a.prototype=Object.create(h&&h.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(a,h):a.__proto__=h)}(l,c),i(l,[{key:"index",value:function(a,h){return a===this.leftGuard?0:a===this.rightGuard?1:r(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"index",this).call(this,a,h)}},{key:"restore",value:function(a){var h=void 0,f=void 0,m=a.data.split(u).join("");if(a===this.leftGuard)if(this.prev instanceof s.default){var g=this.prev.length();this.prev.insertAt(g,m),h={startNode:this.prev.domNode,startOffset:g+m.length}}else f=document.createTextNode(m),this.parent.insertBefore(n.default.create(f),this),h={startNode:f,startOffset:m.length};else a===this.rightGuard&&(this.next instanceof s.default?(this.next.insertAt(0,m),h={startNode:this.next.domNode,startOffset:m.length}):(f=document.createTextNode(m),this.parent.insertBefore(n.default.create(f),this.next),h={startNode:f,startOffset:m.length}));return a.data=u,h}},{key:"update",value:function(a,h){var f=this;a.forEach(function(m){if(m.type==="characterData"&&(m.target===f.leftGuard||m.target===f.rightGuard)){var g=f.restore(m.target);g&&(h.range=g)}})}}]),l}(n.default.Embed);e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.AlignStyle=e.AlignClass=e.AlignAttribute=void 0;var i,r=t(0),n=(i=r)&&i.__esModule?i:{default:i},s={scope:n.default.Scope.BLOCK,whitelist:["right","center","justify"]},p=new n.default.Attributor.Attribute("align","align",s),u=new n.default.Attributor.Class("align","ql-align",s),d=new n.default.Attributor.Style("align","text-align",s);e.AlignAttribute=p,e.AlignClass=u,e.AlignStyle=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.BackgroundStyle=e.BackgroundClass=void 0;var i,r=t(0),n=(i=r)&&i.__esModule?i:{default:i},s=t(26),p=new n.default.Attributor.Class("background","ql-bg",{scope:n.default.Scope.INLINE}),u=new s.ColorAttributor("background","background-color",{scope:n.default.Scope.INLINE});e.BackgroundClass=p,e.BackgroundStyle=u},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.DirectionStyle=e.DirectionClass=e.DirectionAttribute=void 0;var i,r=t(0),n=(i=r)&&i.__esModule?i:{default:i},s={scope:n.default.Scope.BLOCK,whitelist:["rtl"]},p=new n.default.Attributor.Attribute("direction","dir",s),u=new n.default.Attributor.Class("direction","ql-direction",s),d=new n.default.Attributor.Style("direction","direction",s);e.DirectionAttribute=p,e.DirectionClass=u,e.DirectionStyle=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.FontClass=e.FontStyle=void 0;var i,r=function(){function f(m,g){for(var v=0;v<g.length;v++){var y=g[v];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}return function(m,g,v){return g&&f(m.prototype,g),v&&f(m,v),m}}(),n=function f(m,g,v){m===null&&(m=Function.prototype);var y=Object.getOwnPropertyDescriptor(m,g);if(y===void 0){var b=Object.getPrototypeOf(m);return b===null?void 0:f(b,g,v)}if("value"in y)return y.value;var x=y.get;return x!==void 0?x.call(v):void 0},s=t(0),p=(i=s)&&i.__esModule?i:{default:i};function u(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")}function d(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}var c={scope:p.default.Scope.INLINE,whitelist:["serif","monospace"]},l=new p.default.Attributor.Class("font","ql-font",c),a=function(f){function m(){return u(this,m),d(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return function(g,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);g.prototype=Object.create(v&&v.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(g,v):g.__proto__=v)}(m,f),r(m,[{key:"value",value:function(g){return n(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"value",this).call(this,g).replace(/["']/g,"")}}]),m}(p.default.Attributor.Style),h=new a("font","font-family",c);e.FontStyle=h,e.FontClass=l},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.SizeStyle=e.SizeClass=void 0;var i,r=t(0),n=(i=r)&&i.__esModule?i:{default:i},s=new n.default.Attributor.Class("size","ql-size",{scope:n.default.Scope.INLINE,whitelist:["small","large","huge"]}),p=new n.default.Attributor.Style("size","font-size",{scope:n.default.Scope.INLINE,whitelist:["10px","18px","32px"]});e.SizeClass=s,e.SizeStyle=p},function(o,e,t){o.exports={align:{"":t(76),center:t(77),right:t(78),justify:t(79)},background:t(80),blockquote:t(81),bold:t(82),clean:t(83),code:t(58),"code-block":t(58),color:t(84),direction:{"":t(85),rtl:t(86)},float:{center:t(87),full:t(88),left:t(89),right:t(90)},formula:t(91),header:{1:t(92),2:t(93)},italic:t(94),image:t(95),indent:{"+1":t(96),"-1":t(97)},link:t(98),list:{ordered:t(99),bullet:t(100),check:t(101)},script:{sub:t(102),super:t(103)},strike:t(104),underline:t(105),video:t(106)}},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.getLastChangeIndex=e.default=void 0;var i=function(){function d(c,l){for(var a=0;a<l.length;a++){var h=l[a];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(c,h.key,h)}}return function(c,l,a){return l&&d(c.prototype,l),a&&d(c,a),c}}(),r=s(t(0)),n=s(t(5));function s(d){return d&&d.__esModule?d:{default:d}}var p=function(d){function c(l,a){(function(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")})(this,c);var h=function(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,l,a));return h.lastRecorded=0,h.ignoreChange=!1,h.clear(),h.quill.on(n.default.events.EDITOR_CHANGE,function(f,m,g,v){f!==n.default.events.TEXT_CHANGE||h.ignoreChange||(h.options.userOnly&&v!==n.default.sources.USER?h.transform(m):h.record(m,g))}),h.quill.keyboard.addBinding({key:"Z",shortKey:!0},h.undo.bind(h)),h.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},h.redo.bind(h)),/Win/i.test(navigator.platform)&&h.quill.keyboard.addBinding({key:"Y",shortKey:!0},h.redo.bind(h)),h}return function(l,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);l.prototype=Object.create(a&&a.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(l,a):l.__proto__=a)}(c,d),i(c,[{key:"change",value:function(l,a){if(this.stack[l].length!==0){var h=this.stack[l].pop();this.stack[a].push(h),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(h[l],n.default.sources.USER),this.ignoreChange=!1;var f=u(h[l]);this.quill.setSelection(f)}}},{key:"clear",value:function(){this.stack={undo:[],redo:[]}}},{key:"cutoff",value:function(){this.lastRecorded=0}},{key:"record",value:function(l,a){if(l.ops.length!==0){this.stack.redo=[];var h=this.quill.getContents().diff(a),f=Date.now();if(this.lastRecorded+this.options.delay>f&&this.stack.undo.length>0){var m=this.stack.undo.pop();h=h.compose(m.undo),l=m.redo.compose(l)}else this.lastRecorded=f;this.stack.undo.push({redo:l,undo:h}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}}},{key:"redo",value:function(){this.change("redo","undo")}},{key:"transform",value:function(l){this.stack.undo.forEach(function(a){a.undo=l.transform(a.undo,!0),a.redo=l.transform(a.redo,!0)}),this.stack.redo.forEach(function(a){a.undo=l.transform(a.undo,!0),a.redo=l.transform(a.redo,!0)})}},{key:"undo",value:function(){this.change("undo","redo")}}]),c}(s(t(9)).default);function u(d){var c=d.reduce(function(a,h){return a+=h.delete||0},0),l=d.length()-c;return function(a){var h=a.ops[a.ops.length-1];return h!=null&&(h.insert!=null?typeof h.insert=="string"&&h.insert.endsWith(`
`):h.attributes!=null&&Object.keys(h.attributes).some(function(f){return r.default.query(f,r.default.Scope.BLOCK)!=null}))}(d)&&(l-=1),l}p.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1},e.default=p,e.getLastChangeIndex=u},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BaseTooltip=void 0;var i=function(){function A(q,_){for(var O=0;O<_.length;O++){var I=_[O];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(q,I.key,I)}}return function(q,_,O){return _&&A(q.prototype,_),O&&A(q,O),q}}(),r=function A(q,_,O){q===null&&(q=Function.prototype);var I=Object.getOwnPropertyDescriptor(q,_);if(I===void 0){var N=Object.getPrototypeOf(q);return N===null?void 0:A(N,_,O)}if("value"in I)return I.value;var T=I.get;return T!==void 0?T.call(O):void 0},n=f(t(3)),s=f(t(2)),p=f(t(8)),u=f(t(23)),d=f(t(34)),c=f(t(59)),l=f(t(60)),a=f(t(28)),h=f(t(61));function f(A){return A&&A.__esModule?A:{default:A}}function m(A,q){if(!(A instanceof q))throw new TypeError("Cannot call a class as a function")}function g(A,q){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!q||typeof q!="object"&&typeof q!="function"?A:q}function v(A,q){if(typeof q!="function"&&q!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof q);A.prototype=Object.create(q&&q.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),q&&(Object.setPrototypeOf?Object.setPrototypeOf(A,q):A.__proto__=q)}var y=[!1,"center","right","justify"],b=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],x=[!1,"serif","monospace"],w=["1","2","3",!1],E=["small",!1,"large","huge"],S=function(A){function q(_,O){m(this,q);var I=g(this,(q.__proto__||Object.getPrototypeOf(q)).call(this,_,O));return _.emitter.listenDOM("click",document.body,function N(T){if(!document.body.contains(_.root))return document.body.removeEventListener("click",N);I.tooltip==null||I.tooltip.root.contains(T.target)||document.activeElement===I.tooltip.textbox||I.quill.hasFocus()||I.tooltip.hide(),I.pickers!=null&&I.pickers.forEach(function(L){L.container.contains(T.target)||L.close()})}),I}return v(q,A),i(q,[{key:"addModule",value:function(_){var O=r(q.prototype.__proto__||Object.getPrototypeOf(q.prototype),"addModule",this).call(this,_);return _==="toolbar"&&this.extendToolbar(O),O}},{key:"buildButtons",value:function(_,O){_.forEach(function(I){(I.getAttribute("class")||"").split(/\s+/).forEach(function(N){if(N.startsWith("ql-")&&(N=N.slice(3),O[N]!=null))if(N==="direction")I.innerHTML=O[N][""]+O[N].rtl;else if(typeof O[N]=="string")I.innerHTML=O[N];else{var T=I.value||"";T!=null&&O[N][T]&&(I.innerHTML=O[N][T])}})})}},{key:"buildPickers",value:function(_,O){var I=this;this.pickers=_.map(function(N){if(N.classList.contains("ql-align"))return N.querySelector("option")==null&&P(N,y),new l.default(N,O.align);if(N.classList.contains("ql-background")||N.classList.contains("ql-color")){var T=N.classList.contains("ql-background")?"background":"color";return N.querySelector("option")==null&&P(N,b,T==="background"?"#ffffff":"#000000"),new c.default(N,O[T])}return N.querySelector("option")==null&&(N.classList.contains("ql-font")?P(N,x):N.classList.contains("ql-header")?P(N,w):N.classList.contains("ql-size")&&P(N,E)),new a.default(N)}),this.quill.on(p.default.events.EDITOR_CHANGE,function(){I.pickers.forEach(function(N){N.update()})})}}]),q}(d.default);S.DEFAULTS=(0,n.default)(!0,{},d.default.DEFAULTS,{modules:{toolbar:{handlers:{formula:function(){this.quill.theme.tooltip.edit("formula")},image:function(){var A=this,q=this.container.querySelector("input.ql-image[type=file]");q==null&&((q=document.createElement("input")).setAttribute("type","file"),q.setAttribute("accept","image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),q.classList.add("ql-image"),q.addEventListener("change",function(){if(q.files!=null&&q.files[0]!=null){var _=new FileReader;_.onload=function(O){var I=A.quill.getSelection(!0);A.quill.updateContents(new s.default().retain(I.index).delete(I.length).insert({image:O.target.result}),p.default.sources.USER),A.quill.setSelection(I.index+1,p.default.sources.SILENT),q.value=""},_.readAsDataURL(q.files[0])}}),this.container.appendChild(q)),q.click()},video:function(){this.quill.theme.tooltip.edit("video")}}}}});var k=function(A){function q(_,O){m(this,q);var I=g(this,(q.__proto__||Object.getPrototypeOf(q)).call(this,_,O));return I.textbox=I.root.querySelector('input[type="text"]'),I.listen(),I}return v(q,A),i(q,[{key:"listen",value:function(){var _=this;this.textbox.addEventListener("keydown",function(O){u.default.match(O,"enter")?(_.save(),O.preventDefault()):u.default.match(O,"escape")&&(_.cancel(),O.preventDefault())})}},{key:"cancel",value:function(){this.hide()}},{key:"edit",value:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"link",O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),O!=null?this.textbox.value=O:_!==this.root.getAttribute("data-mode")&&(this.textbox.value=""),this.position(this.quill.getBounds(this.quill.selection.savedRange)),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute("data-"+_)||""),this.root.setAttribute("data-mode",_)}},{key:"restoreFocus",value:function(){var _=this.quill.scrollingContainer.scrollTop;this.quill.focus(),this.quill.scrollingContainer.scrollTop=_}},{key:"save",value:function(){var _,O,I=this.textbox.value;switch(this.root.getAttribute("data-mode")){case"link":var N=this.quill.root.scrollTop;this.linkRange?(this.quill.formatText(this.linkRange,"link",I,p.default.sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",I,p.default.sources.USER)),this.quill.root.scrollTop=N;break;case"video":O=(_=I).match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||_.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/),I=O?(O[1]||"https")+"://www.youtube.com/embed/"+O[2]+"?showinfo=0":(O=_.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))?(O[1]||"https")+"://player.vimeo.com/video/"+O[2]+"/":_;case"formula":if(!I)break;var T=this.quill.getSelection(!0);if(T!=null){var L=T.index+T.length;this.quill.insertEmbed(L,this.root.getAttribute("data-mode"),I,p.default.sources.USER),this.root.getAttribute("data-mode")==="formula"&&this.quill.insertText(L+1," ",p.default.sources.USER),this.quill.setSelection(L+2,p.default.sources.USER)}}this.textbox.value="",this.hide()}}]),q}(h.default);function P(A,q){var _=arguments.length>2&&arguments[2]!==void 0&&arguments[2];q.forEach(function(O){var I=document.createElement("option");O===_?I.setAttribute("selected","selected"):I.setAttribute("value",O),A.appendChild(I)})}e.BaseTooltip=k,e.default=S},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function r(){this.head=this.tail=null,this.length=0}return r.prototype.append=function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];this.insertBefore(n[0],null),n.length>1&&this.append.apply(this,n.slice(1))},r.prototype.contains=function(n){for(var s,p=this.iterator();s=p();)if(s===n)return!0;return!1},r.prototype.insertBefore=function(n,s){n&&(n.next=s,s!=null?(n.prev=s.prev,s.prev!=null&&(s.prev.next=n),s.prev=n,s===this.head&&(this.head=n)):this.tail!=null?(this.tail.next=n,n.prev=this.tail,this.tail=n):(n.prev=null,this.head=this.tail=n),this.length+=1)},r.prototype.offset=function(n){for(var s=0,p=this.head;p!=null;){if(p===n)return s;s+=p.length(),p=p.next}return-1},r.prototype.remove=function(n){this.contains(n)&&(n.prev!=null&&(n.prev.next=n.next),n.next!=null&&(n.next.prev=n.prev),n===this.head&&(this.head=n.next),n===this.tail&&(this.tail=n.prev),this.length-=1)},r.prototype.iterator=function(n){return n===void 0&&(n=this.head),function(){var s=n;return n!=null&&(n=n.next),s}},r.prototype.find=function(n,s){s===void 0&&(s=!1);for(var p,u=this.iterator();p=u();){var d=p.length();if(n<d||s&&n===d&&(p.next==null||p.next.length()!==0))return[p,n];n-=d}return[null,0]},r.prototype.forEach=function(n){for(var s,p=this.iterator();s=p();)n(s)},r.prototype.forEachAt=function(n,s,p){if(!(s<=0))for(var u,d=this.find(n),c=d[0],l=n-d[1],a=this.iterator(c);(u=a())&&l<n+s;){var h=u.length();n>l?p(u,n-l,Math.min(s,l+h-n)):p(u,0,Math.min(h,n+s-l)),l+=h}},r.prototype.map=function(n){return this.reduce(function(s,p){return s.push(n(p)),s},[])},r.prototype.reduce=function(n,s){for(var p,u=this.iterator();p=u();)s=n(s,p);return s},r}();e.default=i},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,c){d.__proto__=c}||function(d,c){for(var l in c)c.hasOwnProperty(l)&&(d[l]=c[l])},function(d,c){function l(){this.constructor=d}i(d,c),d.prototype=c===null?Object.create(c):(l.prototype=c.prototype,new l)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(17),s=t(1),p={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},u=function(d){function c(l){var a=d.call(this,l)||this;return a.scroll=a,a.observer=new MutationObserver(function(h){a.update(h)}),a.observer.observe(a.domNode,p),a.attach(),a}return r(c,d),c.prototype.detach=function(){d.prototype.detach.call(this),this.observer.disconnect()},c.prototype.deleteAt=function(l,a){this.update(),l===0&&a===this.length()?this.children.forEach(function(h){h.remove()}):d.prototype.deleteAt.call(this,l,a)},c.prototype.formatAt=function(l,a,h,f){this.update(),d.prototype.formatAt.call(this,l,a,h,f)},c.prototype.insertAt=function(l,a,h){this.update(),d.prototype.insertAt.call(this,l,a,h)},c.prototype.optimize=function(l,a){var h=this;l===void 0&&(l=[]),a===void 0&&(a={}),d.prototype.optimize.call(this,a);for(var f=[].slice.call(this.observer.takeRecords());f.length>0;)l.push(f.pop());for(var m=function(b,x){x===void 0&&(x=!0),b!=null&&b!==h&&b.domNode.parentNode!=null&&(b.domNode[s.DATA_KEY].mutations==null&&(b.domNode[s.DATA_KEY].mutations=[]),x&&m(b.parent))},g=function(b){b.domNode[s.DATA_KEY]!=null&&b.domNode[s.DATA_KEY].mutations!=null&&(b instanceof n.default&&b.children.forEach(g),b.optimize(a))},v=l,y=0;v.length>0;y+=1){if(y>=100)throw new Error("[Parchment] Maximum optimize iterations reached");for(v.forEach(function(b){var x=s.find(b.target,!0);x!=null&&(x.domNode===b.target&&(b.type==="childList"?(m(s.find(b.previousSibling,!1)),[].forEach.call(b.addedNodes,function(w){var E=s.find(w,!1);m(E,!1),E instanceof n.default&&E.children.forEach(function(S){m(S,!1)})})):b.type==="attributes"&&m(x.prev)),m(x))}),this.children.forEach(g),f=(v=[].slice.call(this.observer.takeRecords())).slice();f.length>0;)l.push(f.pop())}},c.prototype.update=function(l,a){var h=this;a===void 0&&(a={}),(l=l||this.observer.takeRecords()).map(function(f){var m=s.find(f.target,!0);return m==null?null:m.domNode[s.DATA_KEY].mutations==null?(m.domNode[s.DATA_KEY].mutations=[f],m):(m.domNode[s.DATA_KEY].mutations.push(f),null)}).forEach(function(f){f!=null&&f!==h&&f.domNode[s.DATA_KEY]!=null&&f.update(f.domNode[s.DATA_KEY].mutations||[],a)}),this.domNode[s.DATA_KEY].mutations!=null&&d.prototype.update.call(this,this.domNode[s.DATA_KEY].mutations,a),this.optimize(l,a)},c.blotName="scroll",c.defaultChild="block",c.scope=s.Scope.BLOCK_BLOT,c.tagName="DIV",c}(n.default);e.default=u},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,d){u.__proto__=d}||function(u,d){for(var c in d)d.hasOwnProperty(c)&&(u[c]=d[c])},function(u,d){function c(){this.constructor=u}i(u,d),u.prototype=d===null?Object.create(d):(c.prototype=d.prototype,new c)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(18),s=t(1),p=function(u){function d(){return u!==null&&u.apply(this,arguments)||this}return r(d,u),d.formats=function(c){if(c.tagName!==d.tagName)return u.formats.call(this,c)},d.prototype.format=function(c,l){var a=this;c!==this.statics.blotName||l?u.prototype.format.call(this,c,l):(this.children.forEach(function(h){h instanceof n.default||(h=h.wrap(d.blotName,!0)),a.attributes.copy(h)}),this.unwrap())},d.prototype.formatAt=function(c,l,a,h){this.formats()[a]!=null||s.query(a,s.Scope.ATTRIBUTE)?this.isolate(c,l).format(a,h):u.prototype.formatAt.call(this,c,l,a,h)},d.prototype.optimize=function(c){u.prototype.optimize.call(this,c);var l=this.formats();if(Object.keys(l).length===0)return this.unwrap();var a=this.next;a instanceof d&&a.prev===this&&function(h,f){if(Object.keys(h).length!==Object.keys(f).length)return!1;for(var m in h)if(h[m]!==f[m])return!1;return!0}(l,a.formats())&&(a.moveChildren(this),a.remove())},d.blotName="inline",d.scope=s.Scope.INLINE_BLOT,d.tagName="SPAN",d}(n.default);e.default=p},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,d){u.__proto__=d}||function(u,d){for(var c in d)d.hasOwnProperty(c)&&(u[c]=d[c])},function(u,d){function c(){this.constructor=u}i(u,d),u.prototype=d===null?Object.create(d):(c.prototype=d.prototype,new c)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(18),s=t(1),p=function(u){function d(){return u!==null&&u.apply(this,arguments)||this}return r(d,u),d.formats=function(c){var l=s.query(d.blotName).tagName;if(c.tagName!==l)return u.formats.call(this,c)},d.prototype.format=function(c,l){s.query(c,s.Scope.BLOCK)!=null&&(c!==this.statics.blotName||l?u.prototype.format.call(this,c,l):this.replaceWith(d.blotName))},d.prototype.formatAt=function(c,l,a,h){s.query(a,s.Scope.BLOCK)!=null?this.format(a,h):u.prototype.formatAt.call(this,c,l,a,h)},d.prototype.insertAt=function(c,l,a){if(a==null||s.query(l,s.Scope.INLINE)!=null)u.prototype.insertAt.call(this,c,l,a);else{var h=this.split(c),f=s.create(l,a);h.parent.insertBefore(f,h)}},d.prototype.update=function(c,l){navigator.userAgent.match(/Trident/)?this.build():u.prototype.update.call(this,c,l)},d.blotName="block",d.scope=s.Scope.BLOCK_BLOT,d.tagName="P",d}(n.default);e.default=p},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,p){s.__proto__=p}||function(s,p){for(var u in p)p.hasOwnProperty(u)&&(s[u]=p[u])},function(s,p){function u(){this.constructor=s}i(s,p),s.prototype=p===null?Object.create(p):(u.prototype=p.prototype,new u)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(s){function p(){return s!==null&&s.apply(this,arguments)||this}return r(p,s),p.formats=function(u){},p.prototype.format=function(u,d){s.prototype.formatAt.call(this,0,this.length(),u,d)},p.prototype.formatAt=function(u,d,c,l){u===0&&d===this.length()?this.format(c,l):s.prototype.formatAt.call(this,u,d,c,l)},p.prototype.formats=function(){return this.statics.formats(this.domNode)},p}(t(19).default);e.default=n},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,d){u.__proto__=d}||function(u,d){for(var c in d)d.hasOwnProperty(c)&&(u[c]=d[c])},function(u,d){function c(){this.constructor=u}i(u,d),u.prototype=d===null?Object.create(d):(c.prototype=d.prototype,new c)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(19),s=t(1),p=function(u){function d(c){var l=u.call(this,c)||this;return l.text=l.statics.value(l.domNode),l}return r(d,u),d.create=function(c){return document.createTextNode(c)},d.value=function(c){var l=c.data;return l.normalize&&(l=l.normalize()),l},d.prototype.deleteAt=function(c,l){this.domNode.data=this.text=this.text.slice(0,c)+this.text.slice(c+l)},d.prototype.index=function(c,l){return this.domNode===c?l:-1},d.prototype.insertAt=function(c,l,a){a==null?(this.text=this.text.slice(0,c)+l+this.text.slice(c),this.domNode.data=this.text):u.prototype.insertAt.call(this,c,l,a)},d.prototype.length=function(){return this.text.length},d.prototype.optimize=function(c){u.prototype.optimize.call(this,c),this.text=this.statics.value(this.domNode),this.text.length===0?this.remove():this.next instanceof d&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},d.prototype.position=function(c,l){return[this.domNode,c]},d.prototype.split=function(c,l){if(l===void 0&&(l=!1),!l){if(c===0)return this;if(c===this.length())return this.next}var a=s.create(this.domNode.splitText(c));return this.parent.insertBefore(a,this.next),this.text=this.statics.value(this.domNode),a},d.prototype.update=function(c,l){var a=this;c.some(function(h){return h.type==="characterData"&&h.target===a.domNode})&&(this.text=this.statics.value(this.domNode))},d.prototype.value=function(){return this.text},d.blotName="text",d.scope=s.Scope.INLINE_BLOT,d}(n.default);e.default=p},function(o,e,t){var i=document.createElement("div");if(i.classList.toggle("test-class",!1),i.classList.contains("test-class")){var r=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(n,s){return arguments.length>1&&!this.contains(n)==!s?s:r.call(this,n)}}String.prototype.startsWith||(String.prototype.startsWith=function(n,s){return s=s||0,this.substr(s,n.length)===n}),String.prototype.endsWith||(String.prototype.endsWith=function(n,s){var p=this.toString();(typeof s!="number"||!isFinite(s)||Math.floor(s)!==s||s>p.length)&&(s=p.length),s-=n.length;var u=p.indexOf(n,s);return u!==-1&&u===s}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(n){if(this===null)throw new TypeError("Array.prototype.find called on null or undefined");if(typeof n!="function")throw new TypeError("predicate must be a function");for(var s,p=Object(this),u=p.length>>>0,d=arguments[1],c=0;c<u;c++)if(s=p[c],n.call(d,s,c,p))return s}}),document.addEventListener("DOMContentLoaded",function(){document.execCommand("enableObjectResizing",!1,!1),document.execCommand("autoUrlDetect",!1,!1)})},function(o,e){var t=-1;function i(c,l,a){if(c==l)return c?[[0,c]]:[];(a<0||c.length<a)&&(a=null);var h=n(c,l),f=c.substring(0,h);h=s(c=c.substring(h),l=l.substring(h));var m=c.substring(c.length-h),g=function(v,y){var b;if(!v)return[[1,y]];if(!y)return[[t,v]];var x=v.length>y.length?v:y,w=v.length>y.length?y:v,E=x.indexOf(w);if(E!=-1)return b=[[1,x.substring(0,E)],[0,w],[1,x.substring(E+w.length)]],v.length>y.length&&(b[0][0]=b[2][0]=t),b;if(w.length==1)return[[t,v],[1,y]];var S=function(N,T){var L=N.length>T.length?N:T,U=N.length>T.length?T:N;if(L.length<4||2*U.length<L.length)return null;function K(ne,ce,Te){for(var be,lt,ke,xe,Ve=ne.substring(Te,Te+Math.floor(ne.length/4)),$e=-1,ct="";($e=ce.indexOf(Ve,$e+1))!=-1;){var Bt=n(ne.substring(Te),ce.substring($e)),Ze=s(ne.substring(0,Te),ce.substring(0,$e));ct.length<Ze+Bt&&(ct=ce.substring($e-Ze,$e)+ce.substring($e,$e+Bt),be=ne.substring(0,Te-Ze),lt=ne.substring(Te+Bt),ke=ce.substring(0,$e-Ze),xe=ce.substring($e+Bt))}return 2*ct.length>=ne.length?[be,lt,ke,xe,ct]:null}var ee,qe,R,$,F,z=K(L,U,Math.ceil(L.length/4)),B=K(L,U,Math.ceil(L.length/2));if(!z&&!B)return null;ee=B?z&&z[4].length>B[4].length?z:B:z,N.length>T.length?(qe=ee[0],R=ee[1],$=ee[2],F=ee[3]):($=ee[0],F=ee[1],qe=ee[2],R=ee[3]);var se=ee[4];return[qe,R,$,F,se]}(v,y);if(S){var k=S[0],P=S[1],A=S[2],q=S[3],_=S[4],O=i(k,A),I=i(P,q);return O.concat([[0,_]],I)}return function(N,T){for(var L=N.length,U=T.length,K=Math.ceil((L+U)/2),ee=K,qe=2*K,R=new Array(qe),$=new Array(qe),F=0;F<qe;F++)R[F]=-1,$[F]=-1;R[ee+1]=0,$[ee+1]=0;for(var z=L-U,B=z%2!=0,se=0,ne=0,ce=0,Te=0,be=0;be<K;be++){for(var lt=-be+se;lt<=be-ne;lt+=2){for(var ke=ee+lt,xe=(Ze=lt==-be||lt!=be&&R[ke-1]<R[ke+1]?R[ke+1]:R[ke-1]+1)-lt;Ze<L&&xe<U&&N.charAt(Ze)==T.charAt(xe);)Ze++,xe++;if(R[ke]=Ze,Ze>L)ne+=2;else if(xe>U)se+=2;else if(B&&(ct=ee+z-lt)>=0&&ct<qe&&$[ct]!=-1&&Ze>=($e=L-$[ct]))return r(N,T,Ze,xe)}for(var Ve=-be+ce;Ve<=be-Te;Ve+=2){for(var $e,ct=ee+Ve,Bt=($e=Ve==-be||Ve!=be&&$[ct-1]<$[ct+1]?$[ct+1]:$[ct-1]+1)-Ve;$e<L&&Bt<U&&N.charAt(L-$e-1)==T.charAt(U-Bt-1);)$e++,Bt++;if($[ct]=$e,$e>L)Te+=2;else if(Bt>U)ce+=2;else if(!B){var Ze;if((ke=ee+z-Ve)>=0&&ke<qe&&R[ke]!=-1&&(xe=ee+(Ze=R[ke])-ke,Ze>=($e=L-$e)))return r(N,T,Ze,xe)}}}return[[t,N],[1,T]]}(v,y)}(c=c.substring(0,c.length-h),l=l.substring(0,l.length-h));return f&&g.unshift([0,f]),m&&g.push([0,m]),p(g),a!=null&&(g=function(v,y){var b=function(P,A){if(A===0)return[0,P];for(var q=0,_=0;_<P.length;_++){var O=P[_];if(O[0]===t||O[0]===0){var I=q+O[1].length;if(A===I)return[_+1,P];if(A<I){P=P.slice();var N=A-q,T=[O[0],O[1].slice(0,N)],L=[O[0],O[1].slice(N)];return P.splice(_,1,T,L),[_+1,P]}q=I}}throw new Error("cursor_pos is out of bounds!")}(v,y),x=b[1],w=b[0],E=x[w],S=x[w+1];if(E==null||E[0]!==0)return v;if(S!=null&&E[1]+S[1]===S[1]+E[1])return x.splice(w,2,S,E),d(x,w,2);if(S!=null&&S[1].indexOf(E[1])===0){x.splice(w,2,[S[0],E[1]],[0,E[1]]);var k=S[1].slice(E[1].length);return k.length>0&&x.splice(w+2,0,[S[0],k]),d(x,w,3)}return v}(g,a)),g=function(v){for(var y=!1,b=function(S){return S.charCodeAt(0)>=56320&&S.charCodeAt(0)<=57343},x=function(S){return S.charCodeAt(S.length-1)>=55296&&S.charCodeAt(S.length-1)<=56319},w=2;w<v.length;w+=1)v[w-2][0]===0&&x(v[w-2][1])&&v[w-1][0]===t&&b(v[w-1][1])&&v[w][0]===1&&b(v[w][1])&&(y=!0,v[w-1][1]=v[w-2][1].slice(-1)+v[w-1][1],v[w][1]=v[w-2][1].slice(-1)+v[w][1],v[w-2][1]=v[w-2][1].slice(0,-1));if(!y)return v;var E=[];for(w=0;w<v.length;w+=1)v[w][1].length>0&&E.push(v[w]);return E}(g),g}function r(c,l,a,h){var f=c.substring(0,a),m=l.substring(0,h),g=c.substring(a),v=l.substring(h),y=i(f,m),b=i(g,v);return y.concat(b)}function n(c,l){if(!c||!l||c.charAt(0)!=l.charAt(0))return 0;for(var a=0,h=Math.min(c.length,l.length),f=h,m=0;a<f;)c.substring(m,f)==l.substring(m,f)?m=a=f:h=f,f=Math.floor((h-a)/2+a);return f}function s(c,l){if(!c||!l||c.charAt(c.length-1)!=l.charAt(l.length-1))return 0;for(var a=0,h=Math.min(c.length,l.length),f=h,m=0;a<f;)c.substring(c.length-f,c.length-m)==l.substring(l.length-f,l.length-m)?m=a=f:h=f,f=Math.floor((h-a)/2+a);return f}function p(c){c.push([0,""]);for(var l,a=0,h=0,f=0,m="",g="";a<c.length;)switch(c[a][0]){case 1:f++,g+=c[a][1],a++;break;case t:h++,m+=c[a][1],a++;break;case 0:h+f>1?(h!==0&&f!==0&&((l=n(g,m))!==0&&(a-h-f>0&&c[a-h-f-1][0]==0?c[a-h-f-1][1]+=g.substring(0,l):(c.splice(0,0,[0,g.substring(0,l)]),a++),g=g.substring(l),m=m.substring(l)),(l=s(g,m))!==0&&(c[a][1]=g.substring(g.length-l)+c[a][1],g=g.substring(0,g.length-l),m=m.substring(0,m.length-l))),h===0?c.splice(a-f,h+f,[1,g]):f===0?c.splice(a-h,h+f,[t,m]):c.splice(a-h-f,h+f,[t,m],[1,g]),a=a-h-f+(h?1:0)+(f?1:0)+1):a!==0&&c[a-1][0]==0?(c[a-1][1]+=c[a][1],c.splice(a,1)):a++,f=0,h=0,m="",g=""}c[c.length-1][1]===""&&c.pop();var v=!1;for(a=1;a<c.length-1;)c[a-1][0]==0&&c[a+1][0]==0&&(c[a][1].substring(c[a][1].length-c[a-1][1].length)==c[a-1][1]?(c[a][1]=c[a-1][1]+c[a][1].substring(0,c[a][1].length-c[a-1][1].length),c[a+1][1]=c[a-1][1]+c[a+1][1],c.splice(a-1,1),v=!0):c[a][1].substring(0,c[a+1][1].length)==c[a+1][1]&&(c[a-1][1]+=c[a+1][1],c[a][1]=c[a][1].substring(c[a+1][1].length)+c[a+1][1],c.splice(a+1,1),v=!0)),a++;v&&p(c)}var u=i;function d(c,l,a){for(var h=l+a-1;h>=0&&h>=l-1;h--)if(h+1<c.length){var f=c[h],m=c[h+1];f[0]===m[1]&&c.splice(h,2,[f[0],f[1]+m[1]])}return c}u.INSERT=1,u.DELETE=t,u.EQUAL=0,o.exports=u},function(o,e){function t(i){var r=[];for(var n in i)r.push(n);return r}(o.exports=typeof Object.keys=="function"?Object.keys:t).shim=t},function(o,e){var t=function(){return Object.prototype.toString.call(arguments)}()=="[object Arguments]";function i(n){return Object.prototype.toString.call(n)=="[object Arguments]"}function r(n){return n&&typeof n=="object"&&typeof n.length=="number"&&Object.prototype.hasOwnProperty.call(n,"callee")&&!Object.prototype.propertyIsEnumerable.call(n,"callee")||!1}(e=o.exports=t?i:r).supported=i,e.unsupported=r},function(o,e){var t=Object.prototype.hasOwnProperty,i="~";function r(){}function n(p,u,d){this.fn=p,this.context=u,this.once=d||!1}function s(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(i=!1)),s.prototype.eventNames=function(){var p,u,d=[];if(this._eventsCount===0)return d;for(u in p=this._events)t.call(p,u)&&d.push(i?u.slice(1):u);return Object.getOwnPropertySymbols?d.concat(Object.getOwnPropertySymbols(p)):d},s.prototype.listeners=function(p,u){var d=i?i+p:p,c=this._events[d];if(u)return!!c;if(!c)return[];if(c.fn)return[c.fn];for(var l=0,a=c.length,h=new Array(a);l<a;l++)h[l]=c[l].fn;return h},s.prototype.emit=function(p,u,d,c,l,a){var h=i?i+p:p;if(!this._events[h])return!1;var f,m,g=this._events[h],v=arguments.length;if(g.fn){switch(g.once&&this.removeListener(p,g.fn,void 0,!0),v){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,u),!0;case 3:return g.fn.call(g.context,u,d),!0;case 4:return g.fn.call(g.context,u,d,c),!0;case 5:return g.fn.call(g.context,u,d,c,l),!0;case 6:return g.fn.call(g.context,u,d,c,l,a),!0}for(m=1,f=new Array(v-1);m<v;m++)f[m-1]=arguments[m];g.fn.apply(g.context,f)}else{var y,b=g.length;for(m=0;m<b;m++)switch(g[m].once&&this.removeListener(p,g[m].fn,void 0,!0),v){case 1:g[m].fn.call(g[m].context);break;case 2:g[m].fn.call(g[m].context,u);break;case 3:g[m].fn.call(g[m].context,u,d);break;case 4:g[m].fn.call(g[m].context,u,d,c);break;default:if(!f)for(y=1,f=new Array(v-1);y<v;y++)f[y-1]=arguments[y];g[m].fn.apply(g[m].context,f)}}return!0},s.prototype.on=function(p,u,d){var c=new n(u,d||this),l=i?i+p:p;return this._events[l]?this._events[l].fn?this._events[l]=[this._events[l],c]:this._events[l].push(c):(this._events[l]=c,this._eventsCount++),this},s.prototype.once=function(p,u,d){var c=new n(u,d||this,!0),l=i?i+p:p;return this._events[l]?this._events[l].fn?this._events[l]=[this._events[l],c]:this._events[l].push(c):(this._events[l]=c,this._eventsCount++),this},s.prototype.removeListener=function(p,u,d,c){var l=i?i+p:p;if(!this._events[l])return this;if(!u)return--this._eventsCount==0?this._events=new r:delete this._events[l],this;var a=this._events[l];if(a.fn)a.fn!==u||c&&!a.once||d&&a.context!==d||(--this._eventsCount==0?this._events=new r:delete this._events[l]);else{for(var h=0,f=[],m=a.length;h<m;h++)(a[h].fn!==u||c&&!a[h].once||d&&a[h].context!==d)&&f.push(a[h]);f.length?this._events[l]=f.length===1?f[0]:f:--this._eventsCount==0?this._events=new r:delete this._events[l]}return this},s.prototype.removeAllListeners=function(p){var u;return p?(u=i?i+p:p,this._events[u]&&(--this._eventsCount==0?this._events=new r:delete this._events[u])):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prototype.setMaxListeners=function(){return this},s.prefixed=i,s.EventEmitter=s,o!==void 0&&(o.exports=s)},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.matchText=e.matchSpacing=e.matchNewline=e.matchBlot=e.matchAttributor=e.default=void 0;var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},r=function(R,$){if(Array.isArray(R))return R;if(Symbol.iterator in Object(R))return function(F,z){var B=[],se=!0,ne=!1,ce=void 0;try{for(var Te,be=F[Symbol.iterator]();!(se=(Te=be.next()).done)&&(B.push(Te.value),!z||B.length!==z);se=!0);}catch(lt){ne=!0,ce=lt}finally{try{!se&&be.return&&be.return()}finally{if(ne)throw ce}}return B}(R,$);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function R($,F){for(var z=0;z<F.length;z++){var B=F[z];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty($,B.key,B)}}return function($,F,z){return F&&R($.prototype,F),z&&R($,z),$}}(),s=b(t(3)),p=b(t(2)),u=b(t(0)),d=b(t(5)),c=b(t(10)),l=b(t(9)),a=t(36),h=t(37),f=b(t(13)),m=t(26),g=t(38),v=t(39),y=t(40);function b(R){return R&&R.__esModule?R:{default:R}}function x(R,$,F){return $ in R?Object.defineProperty(R,$,{value:F,enumerable:!0,configurable:!0,writable:!0}):R[$]=F,R}var w=(0,c.default)("quill:clipboard"),E="__ql-matcher",S=[[Node.TEXT_NODE,qe],[Node.TEXT_NODE,K],["br",function(R,$){return O($,`
`)||$.insert(`
`),$}],[Node.ELEMENT_NODE,K],[Node.ELEMENT_NODE,U],[Node.ELEMENT_NODE,ee],[Node.ELEMENT_NODE,L],[Node.ELEMENT_NODE,function(R,$){var F={},z=R.style||{};return z.fontStyle&&_(R).fontStyle==="italic"&&(F.italic=!0),z.fontWeight&&(_(R).fontWeight.startsWith("bold")||parseInt(_(R).fontWeight)>=700)&&(F.bold=!0),Object.keys(F).length>0&&($=q($,F)),parseFloat(z.textIndent||0)>0&&($=new p.default().insert("	").concat($)),$}],["li",function(R,$){var F=u.default.query(R);if(F==null||F.blotName!=="list-item"||!O($,`
`))return $;for(var z=-1,B=R.parentNode;!B.classList.contains("ql-clipboard");)(u.default.query(B)||{}).blotName==="list"&&(z+=1),B=B.parentNode;return z<=0?$:$.compose(new p.default().retain($.length()-1).retain(1,{indent:z}))}],["b",T.bind(T,"bold")],["i",T.bind(T,"italic")],["style",function(){return new p.default}]],k=[a.AlignAttribute,g.DirectionAttribute].reduce(function(R,$){return R[$.keyName]=$,R},{}),P=[a.AlignStyle,h.BackgroundStyle,m.ColorStyle,g.DirectionStyle,v.FontStyle,y.SizeStyle].reduce(function(R,$){return R[$.keyName]=$,R},{}),A=function(R){function $(F,z){(function(se,ne){if(!(se instanceof ne))throw new TypeError("Cannot call a class as a function")})(this,$);var B=function(se,ne){if(!se)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!ne||typeof ne!="object"&&typeof ne!="function"?se:ne}(this,($.__proto__||Object.getPrototypeOf($)).call(this,F,z));return B.quill.root.addEventListener("paste",B.onPaste.bind(B)),B.container=B.quill.addContainer("ql-clipboard"),B.container.setAttribute("contenteditable",!0),B.container.setAttribute("tabindex",-1),B.matchers=[],S.concat(B.options.matchers).forEach(function(se){var ne=r(se,2),ce=ne[0],Te=ne[1];(z.matchVisual||Te!==ee)&&B.addMatcher(ce,Te)}),B}return function(F,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof z);F.prototype=Object.create(z&&z.prototype,{constructor:{value:F,enumerable:!1,writable:!0,configurable:!0}}),z&&(Object.setPrototypeOf?Object.setPrototypeOf(F,z):F.__proto__=z)}($,R),n($,[{key:"addMatcher",value:function(F,z){this.matchers.push([F,z])}},{key:"convert",value:function(F){if(typeof F=="string")return this.container.innerHTML=F.replace(/\>\r?\n +\</g,"><"),this.convert();var z=this.quill.getFormat(this.quill.selection.savedRange.index);if(z[f.default.blotName]){var B=this.container.innerText;return this.container.innerHTML="",new p.default().insert(B,x({},f.default.blotName,z[f.default.blotName]))}var se=this.prepareMatching(),ne=r(se,2),ce=ne[0],Te=ne[1],be=N(this.container,ce,Te);return O(be,`
`)&&be.ops[be.ops.length-1].attributes==null&&(be=be.compose(new p.default().retain(be.length()-1).delete(1))),w.log("convert",this.container.innerHTML,be),this.container.innerHTML="",be}},{key:"dangerouslyPasteHTML",value:function(F,z){var B=arguments.length>2&&arguments[2]!==void 0?arguments[2]:d.default.sources.API;if(typeof F=="string")this.quill.setContents(this.convert(F),z),this.quill.setSelection(0,d.default.sources.SILENT);else{var se=this.convert(z);this.quill.updateContents(new p.default().retain(F).concat(se),B),this.quill.setSelection(F+se.length(),d.default.sources.SILENT)}}},{key:"onPaste",value:function(F){var z=this;if(!F.defaultPrevented&&this.quill.isEnabled()){var B=this.quill.getSelection(),se=new p.default().retain(B.index),ne=this.quill.scrollingContainer.scrollTop;this.container.focus(),this.quill.selection.update(d.default.sources.SILENT),setTimeout(function(){se=se.concat(z.convert()).delete(B.length),z.quill.updateContents(se,d.default.sources.USER),z.quill.setSelection(se.length()-B.length,d.default.sources.SILENT),z.quill.scrollingContainer.scrollTop=ne,z.quill.focus()},1)}}},{key:"prepareMatching",value:function(){var F=this,z=[],B=[];return this.matchers.forEach(function(se){var ne=r(se,2),ce=ne[0],Te=ne[1];switch(ce){case Node.TEXT_NODE:B.push(Te);break;case Node.ELEMENT_NODE:z.push(Te);break;default:[].forEach.call(F.container.querySelectorAll(ce),function(be){be[E]=be[E]||[],be[E].push(Te)})}}),[z,B]}}]),$}(l.default);function q(R,$,F){return($===void 0?"undefined":i($))==="object"?Object.keys($).reduce(function(z,B){return q(z,B,$[B])},R):R.reduce(function(z,B){return B.attributes&&B.attributes[$]?z.push(B):z.insert(B.insert,(0,s.default)({},x({},$,F),B.attributes))},new p.default)}function _(R){if(R.nodeType!==Node.ELEMENT_NODE)return{};var $="__ql-computed-style";return R[$]||(R[$]=window.getComputedStyle(R))}function O(R,$){for(var F="",z=R.ops.length-1;z>=0&&F.length<$.length;--z){var B=R.ops[z];if(typeof B.insert!="string")break;F=B.insert+F}return F.slice(-1*$.length)===$}function I(R){if(R.childNodes.length===0)return!1;var $=_(R);return["block","list-item"].indexOf($.display)>-1}function N(R,$,F){return R.nodeType===R.TEXT_NODE?F.reduce(function(z,B){return B(R,z)},new p.default):R.nodeType===R.ELEMENT_NODE?[].reduce.call(R.childNodes||[],function(z,B){var se=N(B,$,F);return B.nodeType===R.ELEMENT_NODE&&(se=$.reduce(function(ne,ce){return ce(B,ne)},se),se=(B[E]||[]).reduce(function(ne,ce){return ce(B,ne)},se)),z.concat(se)},new p.default):new p.default}function T(R,$,F){return q(F,R,!0)}function L(R,$){var F=u.default.Attributor.Attribute.keys(R),z=u.default.Attributor.Class.keys(R),B=u.default.Attributor.Style.keys(R),se={};return F.concat(z).concat(B).forEach(function(ne){var ce=u.default.query(ne,u.default.Scope.ATTRIBUTE);ce!=null&&(se[ce.attrName]=ce.value(R),se[ce.attrName])||((ce=k[ne])==null||ce.attrName!==ne&&ce.keyName!==ne||(se[ce.attrName]=ce.value(R)||void 0),(ce=P[ne])==null||ce.attrName!==ne&&ce.keyName!==ne||(ce=P[ne],se[ce.attrName]=ce.value(R)||void 0))}),Object.keys(se).length>0&&($=q($,se)),$}function U(R,$){var F=u.default.query(R);if(F==null)return $;if(F.prototype instanceof u.default.Embed){var z={},B=F.value(R);B!=null&&(z[F.blotName]=B,$=new p.default().insert(z,F.formats(R)))}else typeof F.formats=="function"&&($=q($,F.blotName,F.formats(R)));return $}function K(R,$){return O($,`
`)||(I(R)||$.length()>0&&R.nextSibling&&I(R.nextSibling))&&$.insert(`
`),$}function ee(R,$){if(I(R)&&R.nextElementSibling!=null&&!O($,`

`)){var F=R.offsetHeight+parseFloat(_(R).marginTop)+parseFloat(_(R).marginBottom);R.nextElementSibling.offsetTop>R.offsetTop+1.5*F&&$.insert(`
`)}return $}function qe(R,$){var F=R.data;if(R.parentNode.tagName==="O:P")return $.insert(F.trim());if(F.trim().length===0&&R.parentNode.classList.contains("ql-clipboard"))return $;if(!_(R.parentNode).whiteSpace.startsWith("pre")){var z=function(B,se){return(se=se.replace(/[^\u00a0]/g,"")).length<1&&B?" ":se};F=(F=F.replace(/\r\n/g," ").replace(/\n/g," ")).replace(/\s\s+/g,z.bind(z,!0)),(R.previousSibling==null&&I(R.parentNode)||R.previousSibling!=null&&I(R.previousSibling))&&(F=F.replace(/^\s+/,z.bind(z,!1))),(R.nextSibling==null&&I(R.parentNode)||R.nextSibling!=null&&I(R.nextSibling))&&(F=F.replace(/\s+$/,z.bind(z,!1)))}return $.insert(F)}A.DEFAULTS={matchers:[],matchVisual:!0},e.default=A,e.matchAttributor=L,e.matchBlot=U,e.matchNewline=K,e.matchSpacing=ee,e.matchText=qe},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function c(l,a){for(var h=0;h<a.length;h++){var f=a[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(l,f.key,f)}}return function(l,a,h){return a&&c(l.prototype,a),h&&c(l,h),l}}(),n=function c(l,a,h){l===null&&(l=Function.prototype);var f=Object.getOwnPropertyDescriptor(l,a);if(f===void 0){var m=Object.getPrototypeOf(l);return m===null?void 0:c(m,a,h)}if("value"in f)return f.value;var g=f.get;return g!==void 0?g.call(h):void 0},s=t(6);function p(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}function u(c,l){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||typeof l!="object"&&typeof l!="function"?c:l}var d=function(c){function l(){return p(this,l),u(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return function(a,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);a.prototype=Object.create(h&&h.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(a,h):a.__proto__=h)}(l,c),r(l,[{key:"optimize",value:function(a){n(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"optimize",this).call(this,a),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}],[{key:"create",value:function(){return n(l.__proto__||Object.getPrototypeOf(l),"create",this).call(this)}},{key:"formats",value:function(){return!0}}]),l}(((i=s)&&i.__esModule?i:{default:i}).default);d.blotName="bold",d.tagName=["STRONG","B"],e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.addControls=e.default=void 0;var i=function(g,v){if(Array.isArray(g))return g;if(Symbol.iterator in Object(g))return function(y,b){var x=[],w=!0,E=!1,S=void 0;try{for(var k,P=y[Symbol.iterator]();!(w=(k=P.next()).done)&&(x.push(k.value),!b||x.length!==b);w=!0);}catch(A){E=!0,S=A}finally{try{!w&&P.return&&P.return()}finally{if(E)throw S}}return x}(g,v);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function g(v,y){for(var b=0;b<y.length;b++){var x=y[b];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(v,x.key,x)}}return function(v,y,b){return y&&g(v.prototype,y),b&&g(v,b),v}}(),n=c(t(2)),s=c(t(0)),p=c(t(5)),u=c(t(10)),d=c(t(9));function c(g){return g&&g.__esModule?g:{default:g}}function l(g,v){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!v||typeof v!="object"&&typeof v!="function"?g:v}var a=(0,u.default)("quill:toolbar"),h=function(g){function v(y,b){(function(S,k){if(!(S instanceof k))throw new TypeError("Cannot call a class as a function")})(this,v);var x,w=l(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,y,b));if(Array.isArray(w.options.container)){var E=document.createElement("div");m(E,w.options.container),y.container.parentNode.insertBefore(E,y.container),w.container=E}else typeof w.options.container=="string"?w.container=document.querySelector(w.options.container):w.container=w.options.container;return w.container instanceof HTMLElement?(w.container.classList.add("ql-toolbar"),w.controls=[],w.handlers={},Object.keys(w.options.handlers).forEach(function(S){w.addHandler(S,w.options.handlers[S])}),[].forEach.call(w.container.querySelectorAll("button, select"),function(S){w.attach(S)}),w.quill.on(p.default.events.EDITOR_CHANGE,function(S,k){S===p.default.events.SELECTION_CHANGE&&w.update(k)}),w.quill.on(p.default.events.SCROLL_OPTIMIZE,function(){var S=w.quill.selection.getRange(),k=i(S,1)[0];w.update(k)}),w):(x=a.error("Container required for toolbar",w.options),l(w,x))}return function(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(y,b):y.__proto__=b)}(v,g),r(v,[{key:"addHandler",value:function(y,b){this.handlers[y]=b}},{key:"attach",value:function(y){var b=this,x=[].find.call(y.classList,function(E){return E.indexOf("ql-")===0});if(x){if(x=x.slice(3),y.tagName==="BUTTON"&&y.setAttribute("type","button"),this.handlers[x]==null){if(this.quill.scroll.whitelist!=null&&this.quill.scroll.whitelist[x]==null)return void a.warn("ignoring attaching to disabled format",x,y);if(s.default.query(x)==null)return void a.warn("ignoring attaching to nonexistent format",x,y)}var w=y.tagName==="SELECT"?"change":"click";y.addEventListener(w,function(E){var S=void 0;if(y.tagName==="SELECT"){if(y.selectedIndex<0)return;var k=y.options[y.selectedIndex];S=!k.hasAttribute("selected")&&(k.value||!1)}else S=!y.classList.contains("ql-active")&&(y.value||!y.hasAttribute("value")),E.preventDefault();b.quill.focus();var P=b.quill.selection.getRange(),A=i(P,1)[0];if(b.handlers[x]!=null)b.handlers[x].call(b,S);else if(s.default.query(x).prototype instanceof s.default.Embed){if(!(S=prompt("Enter "+x)))return;b.quill.updateContents(new n.default().retain(A.index).delete(A.length).insert(function(q,_,O){return _ in q?Object.defineProperty(q,_,{value:O,enumerable:!0,configurable:!0,writable:!0}):q[_]=O,q}({},x,S)),p.default.sources.USER)}else b.quill.format(x,S,p.default.sources.USER);b.update(A)}),this.controls.push([x,y])}}},{key:"update",value:function(y){var b=y==null?{}:this.quill.getFormat(y);this.controls.forEach(function(x){var w=i(x,2),E=w[0],S=w[1];if(S.tagName==="SELECT"){var k=void 0;if(y==null)k=null;else if(b[E]==null)k=S.querySelector("option[selected]");else if(!Array.isArray(b[E])){var P=b[E];typeof P=="string"&&(P=P.replace(/\"/g,'\\"')),k=S.querySelector('option[value="'+P+'"]')}k==null?(S.value="",S.selectedIndex=-1):k.selected=!0}else if(y==null)S.classList.remove("ql-active");else if(S.hasAttribute("value")){var A=b[E]===S.getAttribute("value")||b[E]!=null&&b[E].toString()===S.getAttribute("value")||b[E]==null&&!S.getAttribute("value");S.classList.toggle("ql-active",A)}else S.classList.toggle("ql-active",b[E]!=null)})}}]),v}(d.default);function f(g,v,y){var b=document.createElement("button");b.setAttribute("type","button"),b.classList.add("ql-"+v),y!=null&&(b.value=y),g.appendChild(b)}function m(g,v){Array.isArray(v[0])||(v=[v]),v.forEach(function(y){var b=document.createElement("span");b.classList.add("ql-formats"),y.forEach(function(x){if(typeof x=="string")f(b,x);else{var w=Object.keys(x)[0],E=x[w];Array.isArray(E)?function(S,k,P){var A=document.createElement("select");A.classList.add("ql-"+k),P.forEach(function(q){var _=document.createElement("option");q!==!1?_.setAttribute("value",q):_.setAttribute("selected","selected"),A.appendChild(_)}),S.appendChild(A)}(b,w,E):f(b,w,E)}}),g.appendChild(b)})}h.DEFAULTS={},h.DEFAULTS={container:null,handlers:{clean:function(){var g=this,v=this.quill.getSelection();if(v!=null)if(v.length==0){var y=this.quill.getFormat();Object.keys(y).forEach(function(b){s.default.query(b,s.default.Scope.INLINE)!=null&&g.quill.format(b,!1)})}else this.quill.removeFormat(v,p.default.sources.USER)},direction:function(g){var v=this.quill.getFormat().align;g==="rtl"&&v==null?this.quill.format("align","right",p.default.sources.USER):g||v!=="right"||this.quill.format("align",!1,p.default.sources.USER),this.quill.format("direction",g,p.default.sources.USER)},indent:function(g){var v=this.quill.getSelection(),y=this.quill.getFormat(v),b=parseInt(y.indent||0);if(g==="+1"||g==="-1"){var x=g==="+1"?1:-1;y.direction==="rtl"&&(x*=-1),this.quill.format("indent",b+x,p.default.sources.USER)}},link:function(g){g===!0&&(g=prompt("Enter link URL:")),this.quill.format("link",g,p.default.sources.USER)},list:function(g){var v=this.quill.getSelection(),y=this.quill.getFormat(v);g==="check"?y.list==="checked"||y.list==="unchecked"?this.quill.format("list",!1,p.default.sources.USER):this.quill.format("list","unchecked",p.default.sources.USER):this.quill.format("list",g,p.default.sources.USER)}}},e.default=h,e.addControls=m},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function u(d,c){for(var l=0;l<c.length;l++){var a=c[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(d,a.key,a)}}return function(d,c,l){return c&&u(d.prototype,c),l&&u(d,l),d}}(),n=function u(d,c,l){d===null&&(d=Function.prototype);var a=Object.getOwnPropertyDescriptor(d,c);if(a===void 0){var h=Object.getPrototypeOf(d);return h===null?void 0:u(h,c,l)}if("value"in a)return a.value;var f=a.get;return f!==void 0?f.call(l):void 0},s=t(28),p=function(u){function d(c,l){(function(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")})(this,d);var a=function(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,c));return a.label.innerHTML=l,a.container.classList.add("ql-color-picker"),[].slice.call(a.container.querySelectorAll(".ql-picker-item"),0,7).forEach(function(h){h.classList.add("ql-primary")}),a}return function(c,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);c.prototype=Object.create(l&&l.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(c,l):c.__proto__=l)}(d,u),r(d,[{key:"buildItem",value:function(c){var l=n(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"buildItem",this).call(this,c);return l.style.backgroundColor=c.getAttribute("value")||"",l}},{key:"selectItem",value:function(c,l){n(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"selectItem",this).call(this,c,l);var a=this.label.querySelector(".ql-color-label"),h=c&&c.getAttribute("data-value")||"";a&&(a.tagName==="line"?a.style.stroke=h:a.style.fill=h)}}]),d}(((i=s)&&i.__esModule?i:{default:i}).default);e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function u(d,c){for(var l=0;l<c.length;l++){var a=c[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(d,a.key,a)}}return function(d,c,l){return c&&u(d.prototype,c),l&&u(d,l),d}}(),n=function u(d,c,l){d===null&&(d=Function.prototype);var a=Object.getOwnPropertyDescriptor(d,c);if(a===void 0){var h=Object.getPrototypeOf(d);return h===null?void 0:u(h,c,l)}if("value"in a)return a.value;var f=a.get;return f!==void 0?f.call(l):void 0},s=t(28),p=function(u){function d(c,l){(function(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")})(this,d);var a=function(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,c));return a.container.classList.add("ql-icon-picker"),[].forEach.call(a.container.querySelectorAll(".ql-picker-item"),function(h){h.innerHTML=l[h.getAttribute("data-value")||""]}),a.defaultItem=a.container.querySelector(".ql-selected"),a.selectItem(a.defaultItem),a}return function(c,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);c.prototype=Object.create(l&&l.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(c,l):c.__proto__=l)}(d,u),r(d,[{key:"selectItem",value:function(c,l){n(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"selectItem",this).call(this,c,l),c=c||this.defaultItem,this.label.innerHTML=c.innerHTML}}]),d}(((i=s)&&i.__esModule?i:{default:i}).default);e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function n(s,p){for(var u=0;u<p.length;u++){var d=p[u];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(s,d.key,d)}}return function(s,p,u){return p&&n(s.prototype,p),u&&n(s,u),s}}(),r=function(){function n(s,p){var u=this;(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,n),this.quill=s,this.boundsContainer=p||document.body,this.root=s.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE,this.quill.root===this.quill.scrollingContainer&&this.quill.root.addEventListener("scroll",function(){u.root.style.marginTop=-1*u.quill.root.scrollTop+"px"}),this.hide()}return i(n,[{key:"hide",value:function(){this.root.classList.add("ql-hidden")}},{key:"position",value:function(s){var p=s.left+s.width/2-this.root.offsetWidth/2,u=s.bottom+this.quill.root.scrollTop;this.root.style.left=p+"px",this.root.style.top=u+"px",this.root.classList.remove("ql-flip");var d=this.boundsContainer.getBoundingClientRect(),c=this.root.getBoundingClientRect(),l=0;if(c.right>d.right&&(l=d.right-c.right,this.root.style.left=p+l+"px"),c.left<d.left&&(l=d.left-c.left,this.root.style.left=p+l+"px"),c.bottom>d.bottom){var a=c.bottom-c.top,h=s.bottom-s.top+a;this.root.style.top=u-h+"px",this.root.classList.add("ql-flip")}return l}},{key:"show",value:function(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}}]),n}();e.default=r},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(x,w){if(Array.isArray(x))return x;if(Symbol.iterator in Object(x))return function(E,S){var k=[],P=!0,A=!1,q=void 0;try{for(var _,O=E[Symbol.iterator]();!(P=(_=O.next()).done)&&(k.push(_.value),!S||k.length!==S);P=!0);}catch(I){A=!0,q=I}finally{try{!P&&O.return&&O.return()}finally{if(A)throw q}}return k}(x,w);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function x(w,E,S){w===null&&(w=Function.prototype);var k=Object.getOwnPropertyDescriptor(w,E);if(k===void 0){var P=Object.getPrototypeOf(w);return P===null?void 0:x(P,E,S)}if("value"in k)return k.value;var A=k.get;return A!==void 0?A.call(S):void 0},n=function(){function x(w,E){for(var S=0;S<E.length;S++){var k=E[S];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(w,k.key,k)}}return function(w,E,S){return E&&x(w.prototype,E),S&&x(w,S),w}}(),s=h(t(3)),p=h(t(8)),u=t(43),d=h(u),c=h(t(27)),l=t(15),a=h(t(41));function h(x){return x&&x.__esModule?x:{default:x}}function f(x,w){if(!(x instanceof w))throw new TypeError("Cannot call a class as a function")}function m(x,w){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!w||typeof w!="object"&&typeof w!="function"?x:w}function g(x,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof w);x.prototype=Object.create(w&&w.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),w&&(Object.setPrototypeOf?Object.setPrototypeOf(x,w):x.__proto__=w)}var v=[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"]],y=function(x){function w(E,S){f(this,w),S.modules.toolbar!=null&&S.modules.toolbar.container==null&&(S.modules.toolbar.container=v);var k=m(this,(w.__proto__||Object.getPrototypeOf(w)).call(this,E,S));return k.quill.container.classList.add("ql-snow"),k}return g(w,x),n(w,[{key:"extendToolbar",value:function(E){E.container.classList.add("ql-snow"),this.buildButtons([].slice.call(E.container.querySelectorAll("button")),a.default),this.buildPickers([].slice.call(E.container.querySelectorAll("select")),a.default),this.tooltip=new b(this.quill,this.options.bounds),E.container.querySelector(".ql-link")&&this.quill.keyboard.addBinding({key:"K",shortKey:!0},function(S,k){E.handlers.link.call(E,!k.format.link)})}}]),w}(d.default);y.DEFAULTS=(0,s.default)(!0,{},d.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(x){if(x){var w=this.quill.getSelection();if(w==null||w.length==0)return;var E=this.quill.getText(w);/^\S+@\S+\.\S+$/.test(E)&&E.indexOf("mailto:")!==0&&(E="mailto:"+E),this.quill.theme.tooltip.edit("link",E)}else this.quill.format("link",!1)}}}}});var b=function(x){function w(E,S){f(this,w);var k=m(this,(w.__proto__||Object.getPrototypeOf(w)).call(this,E,S));return k.preview=k.root.querySelector("a.ql-preview"),k}return g(w,x),n(w,[{key:"listen",value:function(){var E=this;r(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"listen",this).call(this),this.root.querySelector("a.ql-action").addEventListener("click",function(S){E.root.classList.contains("ql-editing")?E.save():E.edit("link",E.preview.textContent),S.preventDefault()}),this.root.querySelector("a.ql-remove").addEventListener("click",function(S){if(E.linkRange!=null){var k=E.linkRange;E.restoreFocus(),E.quill.formatText(k,"link",!1,p.default.sources.USER),delete E.linkRange}S.preventDefault(),E.hide()}),this.quill.on(p.default.events.SELECTION_CHANGE,function(S,k,P){if(S!=null){if(S.length===0&&P===p.default.sources.USER){var A=E.quill.scroll.descendant(c.default,S.index),q=i(A,2),_=q[0],O=q[1];if(_!=null){E.linkRange=new l.Range(S.index-O,_.length());var I=c.default.formats(_.domNode);return E.preview.textContent=I,E.preview.setAttribute("href",I),E.show(),void E.position(E.quill.getBounds(E.linkRange))}}else delete E.linkRange;E.hide()}})}},{key:"show",value:function(){r(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"show",this).call(this),this.root.removeAttribute("data-mode")}}]),w}(u.BaseTooltip);b.TEMPLATE=['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-action"></a>','<a class="ql-remove"></a>'].join(""),e.default=y},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=K(t(29)),r=t(36),n=t(38),s=t(64),p=K(t(65)),u=K(t(66)),d=t(67),c=K(d),l=t(37),a=t(26),h=t(39),f=t(40),m=K(t(56)),g=K(t(68)),v=K(t(27)),y=K(t(69)),b=K(t(70)),x=K(t(71)),w=K(t(72)),E=K(t(73)),S=t(13),k=K(S),P=K(t(74)),A=K(t(75)),q=K(t(57)),_=K(t(41)),O=K(t(28)),I=K(t(59)),N=K(t(60)),T=K(t(61)),L=K(t(108)),U=K(t(62));function K(ee){return ee&&ee.__esModule?ee:{default:ee}}i.default.register({"attributors/attribute/direction":n.DirectionAttribute,"attributors/class/align":r.AlignClass,"attributors/class/background":l.BackgroundClass,"attributors/class/color":a.ColorClass,"attributors/class/direction":n.DirectionClass,"attributors/class/font":h.FontClass,"attributors/class/size":f.SizeClass,"attributors/style/align":r.AlignStyle,"attributors/style/background":l.BackgroundStyle,"attributors/style/color":a.ColorStyle,"attributors/style/direction":n.DirectionStyle,"attributors/style/font":h.FontStyle,"attributors/style/size":f.SizeStyle},!0),i.default.register({"formats/align":r.AlignClass,"formats/direction":n.DirectionClass,"formats/indent":s.IndentClass,"formats/background":l.BackgroundStyle,"formats/color":a.ColorStyle,"formats/font":h.FontClass,"formats/size":f.SizeClass,"formats/blockquote":p.default,"formats/code-block":k.default,"formats/header":u.default,"formats/list":c.default,"formats/bold":m.default,"formats/code":S.Code,"formats/italic":g.default,"formats/link":v.default,"formats/script":y.default,"formats/strike":b.default,"formats/underline":x.default,"formats/image":w.default,"formats/video":E.default,"formats/list/item":d.ListItem,"modules/formula":P.default,"modules/syntax":A.default,"modules/toolbar":q.default,"themes/bubble":L.default,"themes/snow":U.default,"ui/icons":_.default,"ui/picker":O.default,"ui/icon-picker":N.default,"ui/color-picker":I.default,"ui/tooltip":T.default},!0),e.default=i.default},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.IndentClass=void 0;var i,r=function(){function a(h,f){for(var m=0;m<f.length;m++){var g=f[m];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(h,g.key,g)}}return function(h,f,m){return f&&a(h.prototype,f),m&&a(h,m),h}}(),n=function a(h,f,m){h===null&&(h=Function.prototype);var g=Object.getOwnPropertyDescriptor(h,f);if(g===void 0){var v=Object.getPrototypeOf(h);return v===null?void 0:a(v,f,m)}if("value"in g)return g.value;var y=g.get;return y!==void 0?y.call(m):void 0},s=t(0),p=(i=s)&&i.__esModule?i:{default:i};function u(a,h){if(!(a instanceof h))throw new TypeError("Cannot call a class as a function")}function d(a,h){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!h||typeof h!="object"&&typeof h!="function"?a:h}var c=function(a){function h(){return u(this,h),d(this,(h.__proto__||Object.getPrototypeOf(h)).apply(this,arguments))}return function(f,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);f.prototype=Object.create(m&&m.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(f,m):f.__proto__=m)}(h,a),r(h,[{key:"add",value:function(f,m){if(m==="+1"||m==="-1"){var g=this.value(f)||0;m=m==="+1"?g+1:g-1}return m===0?(this.remove(f),!0):n(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"add",this).call(this,f,m)}},{key:"canAdd",value:function(f,m){return n(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"canAdd",this).call(this,f,m)||n(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"canAdd",this).call(this,f,parseInt(m))}},{key:"value",value:function(f){return parseInt(n(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"value",this).call(this,f))||void 0}}]),h}(p.default.Attributor.Class),l=new c("indent","ql-indent",{scope:p.default.Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});e.IndentClass=l},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(4);function n(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")}function s(u,d){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?u:d}var p=function(u){function d(){return n(this,d),s(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return function(c,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);c.prototype=Object.create(l&&l.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(c,l):c.__proto__=l)}(d,u),d}(((i=r)&&i.__esModule?i:{default:i}).default);p.blotName="blockquote",p.tagName="blockquote",e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function d(c,l){for(var a=0;a<l.length;a++){var h=l[a];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(c,h.key,h)}}return function(c,l,a){return l&&d(c.prototype,l),a&&d(c,a),c}}(),n=t(4);function s(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")}function p(d,c){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!c||typeof c!="object"&&typeof c!="function"?d:c}var u=function(d){function c(){return s(this,c),p(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return function(l,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);l.prototype=Object.create(a&&a.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(l,a):l.__proto__=a)}(c,d),r(c,null,[{key:"formats",value:function(l){return this.tagName.indexOf(l.tagName)+1}}]),c}(((i=n)&&i.__esModule?i:{default:i}).default);u.blotName="header",u.tagName=["H1","H2","H3","H4","H5","H6"],e.default=u},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ListItem=void 0;var i=function(){function f(m,g){for(var v=0;v<g.length;v++){var y=g[v];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}return function(m,g,v){return g&&f(m.prototype,g),v&&f(m,v),m}}(),r=function f(m,g,v){m===null&&(m=Function.prototype);var y=Object.getOwnPropertyDescriptor(m,g);if(y===void 0){var b=Object.getPrototypeOf(m);return b===null?void 0:f(b,g,v)}if("value"in y)return y.value;var x=y.get;return x!==void 0?x.call(v):void 0},n=u(t(0)),s=u(t(4)),p=u(t(25));function u(f){return f&&f.__esModule?f:{default:f}}function d(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")}function c(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}function l(f,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);f.prototype=Object.create(m&&m.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(f,m):f.__proto__=m)}var a=function(f){function m(){return d(this,m),c(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return l(m,f),i(m,[{key:"format",value:function(g,v){g!==h.blotName||v?r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"format",this).call(this,g,v):this.replaceWith(n.default.create(this.statics.scope))}},{key:"remove",value:function(){this.prev==null&&this.next==null?this.parent.remove():r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"remove",this).call(this)}},{key:"replaceWith",value:function(g,v){return this.parent.isolate(this.offset(this.parent),this.length()),g===this.parent.statics.blotName?(this.parent.replaceWith(g,v),this):(this.parent.unwrap(),r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"replaceWith",this).call(this,g,v))}}],[{key:"formats",value:function(g){return g.tagName===this.tagName?void 0:r(m.__proto__||Object.getPrototypeOf(m),"formats",this).call(this,g)}}]),m}(s.default);a.blotName="list-item",a.tagName="LI";var h=function(f){function m(g){d(this,m);var v=c(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,g)),y=function(b){if(b.target.parentNode===g){var x=v.statics.formats(g),w=n.default.find(b.target);x==="checked"?w.format("list","unchecked"):x==="unchecked"&&w.format("list","checked")}};return g.addEventListener("touchstart",y),g.addEventListener("mousedown",y),v}return l(m,f),i(m,null,[{key:"create",value:function(g){var v=g==="ordered"?"OL":"UL",y=r(m.__proto__||Object.getPrototypeOf(m),"create",this).call(this,v);return g!=="checked"&&g!=="unchecked"||y.setAttribute("data-checked",g==="checked"),y}},{key:"formats",value:function(g){return g.tagName==="OL"?"ordered":g.tagName==="UL"?g.hasAttribute("data-checked")?g.getAttribute("data-checked")==="true"?"checked":"unchecked":"bullet":void 0}}]),i(m,[{key:"format",value:function(g,v){this.children.length>0&&this.children.tail.format(g,v)}},{key:"formats",value:function(){return g={},v=this.statics.blotName,y=this.statics.formats(this.domNode),v in g?Object.defineProperty(g,v,{value:y,enumerable:!0,configurable:!0,writable:!0}):g[v]=y,g;var g,v,y}},{key:"insertBefore",value:function(g,v){if(g instanceof a)r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"insertBefore",this).call(this,g,v);else{var y=v==null?this.length():v.offset(this),b=this.split(y);b.parent.insertBefore(g,b)}}},{key:"optimize",value:function(g){r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"optimize",this).call(this,g);var v=this.next;v!=null&&v.prev===this&&v.statics.blotName===this.statics.blotName&&v.domNode.tagName===this.domNode.tagName&&v.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(v.moveChildren(this),v.remove())}},{key:"replace",value:function(g){if(g.statics.blotName!==this.statics.blotName){var v=n.default.create(this.statics.defaultChild);g.moveChildren(v),this.appendChild(v)}r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"replace",this).call(this,g)}}]),m}(p.default);h.blotName="list",h.scope=n.default.Scope.BLOCK_BLOT,h.tagName=["OL","UL"],h.defaultChild="list-item",h.allowedChildren=[a],e.ListItem=a,e.default=h},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(56);function n(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")}function s(u,d){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?u:d}var p=function(u){function d(){return n(this,d),s(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return function(c,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);c.prototype=Object.create(l&&l.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(c,l):c.__proto__=l)}(d,u),d}(((i=r)&&i.__esModule?i:{default:i}).default);p.blotName="italic",p.tagName=["EM","I"],e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function c(l,a){for(var h=0;h<a.length;h++){var f=a[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(l,f.key,f)}}return function(l,a,h){return a&&c(l.prototype,a),h&&c(l,h),l}}(),n=function c(l,a,h){l===null&&(l=Function.prototype);var f=Object.getOwnPropertyDescriptor(l,a);if(f===void 0){var m=Object.getPrototypeOf(l);return m===null?void 0:c(m,a,h)}if("value"in f)return f.value;var g=f.get;return g!==void 0?g.call(h):void 0},s=t(6);function p(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}function u(c,l){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||typeof l!="object"&&typeof l!="function"?c:l}var d=function(c){function l(){return p(this,l),u(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return function(a,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);a.prototype=Object.create(h&&h.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(a,h):a.__proto__=h)}(l,c),r(l,null,[{key:"create",value:function(a){return a==="super"?document.createElement("sup"):a==="sub"?document.createElement("sub"):n(l.__proto__||Object.getPrototypeOf(l),"create",this).call(this,a)}},{key:"formats",value:function(a){return a.tagName==="SUB"?"sub":a.tagName==="SUP"?"super":void 0}}]),l}(((i=s)&&i.__esModule?i:{default:i}).default);d.blotName="script",d.tagName=["SUB","SUP"],e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(6);function n(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")}function s(u,d){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?u:d}var p=function(u){function d(){return n(this,d),s(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return function(c,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);c.prototype=Object.create(l&&l.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(c,l):c.__proto__=l)}(d,u),d}(((i=r)&&i.__esModule?i:{default:i}).default);p.blotName="strike",p.tagName="S",e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(6);function n(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")}function s(u,d){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?u:d}var p=function(u){function d(){return n(this,d),s(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return function(c,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);c.prototype=Object.create(l&&l.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(c,l):c.__proto__=l)}(d,u),d}(((i=r)&&i.__esModule?i:{default:i}).default);p.blotName="underline",p.tagName="U",e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function h(f,m){for(var g=0;g<m.length;g++){var v=m[g];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(f,v.key,v)}}return function(f,m,g){return m&&h(f.prototype,m),g&&h(f,g),f}}(),n=function h(f,m,g){f===null&&(f=Function.prototype);var v=Object.getOwnPropertyDescriptor(f,m);if(v===void 0){var y=Object.getPrototypeOf(f);return y===null?void 0:h(y,m,g)}if("value"in v)return v.value;var b=v.get;return b!==void 0?b.call(g):void 0},s=t(0),p=(i=s)&&i.__esModule?i:{default:i},u=t(27);function d(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function c(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}var l=["alt","height","width"],a=function(h){function f(){return d(this,f),c(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments))}return function(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}(f,h),r(f,[{key:"format",value:function(m,g){l.indexOf(m)>-1?g?this.domNode.setAttribute(m,g):this.domNode.removeAttribute(m):n(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"format",this).call(this,m,g)}}],[{key:"create",value:function(m){var g=n(f.__proto__||Object.getPrototypeOf(f),"create",this).call(this,m);return typeof m=="string"&&g.setAttribute("src",this.sanitize(m)),g}},{key:"formats",value:function(m){return l.reduce(function(g,v){return m.hasAttribute(v)&&(g[v]=m.getAttribute(v)),g},{})}},{key:"match",value:function(m){return/\.(jpe?g|gif|png)$/.test(m)||/^data:image\/.+;base64/.test(m)}},{key:"sanitize",value:function(m){return(0,u.sanitize)(m,["http","https","data"])?m:"//:0"}},{key:"value",value:function(m){return m.getAttribute("src")}}]),f}(p.default.Embed);a.blotName="image",a.tagName="IMG",e.default=a},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function h(f,m){for(var g=0;g<m.length;g++){var v=m[g];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(f,v.key,v)}}return function(f,m,g){return m&&h(f.prototype,m),g&&h(f,g),f}}(),n=function h(f,m,g){f===null&&(f=Function.prototype);var v=Object.getOwnPropertyDescriptor(f,m);if(v===void 0){var y=Object.getPrototypeOf(f);return y===null?void 0:h(y,m,g)}if("value"in v)return v.value;var b=v.get;return b!==void 0?b.call(g):void 0},s=t(4),p=t(27),u=(i=p)&&i.__esModule?i:{default:i};function d(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function c(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}var l=["height","width"],a=function(h){function f(){return d(this,f),c(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments))}return function(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}(f,h),r(f,[{key:"format",value:function(m,g){l.indexOf(m)>-1?g?this.domNode.setAttribute(m,g):this.domNode.removeAttribute(m):n(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"format",this).call(this,m,g)}}],[{key:"create",value:function(m){var g=n(f.__proto__||Object.getPrototypeOf(f),"create",this).call(this,m);return g.setAttribute("frameborder","0"),g.setAttribute("allowfullscreen",!0),g.setAttribute("src",this.sanitize(m)),g}},{key:"formats",value:function(m){return l.reduce(function(g,v){return m.hasAttribute(v)&&(g[v]=m.getAttribute(v)),g},{})}},{key:"sanitize",value:function(m){return u.default.sanitize(m)}},{key:"value",value:function(m){return m.getAttribute("src")}}]),f}(s.BlockEmbed);a.blotName="video",a.className="ql-video",a.tagName="IFRAME",e.default=a},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.FormulaBlot=void 0;var i=function(){function f(m,g){for(var v=0;v<g.length;v++){var y=g[v];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}return function(m,g,v){return g&&f(m.prototype,g),v&&f(m,v),m}}(),r=function f(m,g,v){m===null&&(m=Function.prototype);var y=Object.getOwnPropertyDescriptor(m,g);if(y===void 0){var b=Object.getPrototypeOf(m);return b===null?void 0:f(b,g,v)}if("value"in y)return y.value;var x=y.get;return x!==void 0?x.call(v):void 0},n=u(t(35)),s=u(t(5)),p=u(t(9));function u(f){return f&&f.__esModule?f:{default:f}}function d(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")}function c(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}function l(f,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);f.prototype=Object.create(m&&m.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(f,m):f.__proto__=m)}var a=function(f){function m(){return d(this,m),c(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return l(m,f),i(m,null,[{key:"create",value:function(g){var v=r(m.__proto__||Object.getPrototypeOf(m),"create",this).call(this,g);return typeof g=="string"&&(window.katex.render(g,v,{throwOnError:!1,errorColor:"#f00"}),v.setAttribute("data-value",g)),v}},{key:"value",value:function(g){return g.getAttribute("data-value")}}]),m}(n.default);a.blotName="formula",a.className="ql-formula",a.tagName="SPAN";var h=function(f){function m(){d(this,m);var g=c(this,(m.__proto__||Object.getPrototypeOf(m)).call(this));if(window.katex==null)throw new Error("Formula module requires KaTeX.");return g}return l(m,f),i(m,null,[{key:"register",value:function(){s.default.register(a,!0)}}]),m}(p.default);e.FormulaBlot=a,e.default=h},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.CodeToken=e.CodeBlock=void 0;var i=function(){function m(g,v){for(var y=0;y<v.length;y++){var b=v[y];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(g,b.key,b)}}return function(g,v,y){return v&&m(g.prototype,v),y&&m(g,y),g}}(),r=function m(g,v,y){g===null&&(g=Function.prototype);var b=Object.getOwnPropertyDescriptor(g,v);if(b===void 0){var x=Object.getPrototypeOf(g);return x===null?void 0:m(x,v,y)}if("value"in b)return b.value;var w=b.get;return w!==void 0?w.call(y):void 0},n=u(t(0)),s=u(t(5)),p=u(t(9));function u(m){return m&&m.__esModule?m:{default:m}}function d(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")}function c(m,g){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!g||typeof g!="object"&&typeof g!="function"?m:g}function l(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}var a=function(m){function g(){return d(this,g),c(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}return l(g,m),i(g,[{key:"replaceWith",value:function(v){this.domNode.textContent=this.domNode.textContent,this.attach(),r(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"replaceWith",this).call(this,v)}},{key:"highlight",value:function(v){var y=this.domNode.textContent;this.cachedText!==y&&((y.trim().length>0||this.cachedText==null)&&(this.domNode.innerHTML=v(y),this.domNode.normalize(),this.attach()),this.cachedText=y)}}]),g}(u(t(13)).default);a.className="ql-syntax";var h=new n.default.Attributor.Class("token","hljs",{scope:n.default.Scope.INLINE}),f=function(m){function g(v,y){d(this,g);var b=c(this,(g.__proto__||Object.getPrototypeOf(g)).call(this,v,y));if(typeof b.options.highlight!="function")throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");var x=null;return b.quill.on(s.default.events.SCROLL_OPTIMIZE,function(){clearTimeout(x),x=setTimeout(function(){b.highlight(),x=null},b.options.interval)}),b.highlight(),b}return l(g,m),i(g,null,[{key:"register",value:function(){s.default.register(h,!0),s.default.register(a,!0)}}]),i(g,[{key:"highlight",value:function(){var v=this;if(!this.quill.selection.composing){this.quill.update(s.default.sources.USER);var y=this.quill.getSelection();this.quill.scroll.descendants(a).forEach(function(b){b.highlight(v.options.highlight)}),this.quill.update(s.default.sources.SILENT),y!=null&&this.quill.setSelection(y,s.default.sources.SILENT)}}}]),g}(p.default);f.DEFAULTS={highlight:window.hljs==null?null:function(m){return window.hljs.highlightAuto(m).value},interval:1e3},e.CodeBlock=a,e.CodeToken=h,e.default=f},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'},function(o,e){o.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'},function(o,e){o.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'},function(o,e){o.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'},function(o,e){o.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BubbleTooltip=void 0;var i=function y(b,x,w){b===null&&(b=Function.prototype);var E=Object.getOwnPropertyDescriptor(b,x);if(E===void 0){var S=Object.getPrototypeOf(b);return S===null?void 0:y(S,x,w)}if("value"in E)return E.value;var k=E.get;return k!==void 0?k.call(w):void 0},r=function(){function y(b,x){for(var w=0;w<x.length;w++){var E=x[w];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(b,E.key,E)}}return function(b,x,w){return x&&y(b.prototype,x),w&&y(b,w),b}}(),n=l(t(3)),s=l(t(8)),p=t(43),u=l(p),d=t(15),c=l(t(41));function l(y){return y&&y.__esModule?y:{default:y}}function a(y,b){if(!(y instanceof b))throw new TypeError("Cannot call a class as a function")}function h(y,b){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||typeof b!="object"&&typeof b!="function"?y:b}function f(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(y,b):y.__proto__=b)}var m=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]],g=function(y){function b(x,w){a(this,b),w.modules.toolbar!=null&&w.modules.toolbar.container==null&&(w.modules.toolbar.container=m);var E=h(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,x,w));return E.quill.container.classList.add("ql-bubble"),E}return f(b,y),r(b,[{key:"extendToolbar",value:function(x){this.tooltip=new v(this.quill,this.options.bounds),this.tooltip.root.appendChild(x.container),this.buildButtons([].slice.call(x.container.querySelectorAll("button")),c.default),this.buildPickers([].slice.call(x.container.querySelectorAll("select")),c.default)}}]),b}(u.default);g.DEFAULTS=(0,n.default)(!0,{},u.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(y){y?this.quill.theme.tooltip.edit():this.quill.format("link",!1)}}}}});var v=function(y){function b(x,w){a(this,b);var E=h(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,x,w));return E.quill.on(s.default.events.EDITOR_CHANGE,function(S,k,P,A){if(S===s.default.events.SELECTION_CHANGE)if(k!=null&&k.length>0&&A===s.default.sources.USER){E.show(),E.root.style.left="0px",E.root.style.width="",E.root.style.width=E.root.offsetWidth+"px";var q=E.quill.getLines(k.index,k.length);if(q.length===1)E.position(E.quill.getBounds(k));else{var _=q[q.length-1],O=E.quill.getIndex(_),I=Math.min(_.length()-1,k.index+k.length-O),N=E.quill.getBounds(new d.Range(O,I));E.position(N)}}else document.activeElement!==E.textbox&&E.quill.hasFocus()&&E.hide()}),E}return f(b,y),r(b,[{key:"listen",value:function(){var x=this;i(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"listen",this).call(this),this.root.querySelector(".ql-close").addEventListener("click",function(){x.root.classList.remove("ql-editing")}),this.quill.on(s.default.events.SCROLL_OPTIMIZE,function(){setTimeout(function(){if(!x.root.classList.contains("ql-hidden")){var w=x.quill.getSelection();w!=null&&x.position(x.quill.getBounds(w))}},1)})}},{key:"cancel",value:function(){this.show()}},{key:"position",value:function(x){var w=i(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"position",this).call(this,x),E=this.root.querySelector(".ql-tooltip-arrow");if(E.style.marginLeft="",w===0)return w;E.style.marginLeft=-1*w-E.offsetWidth/2+"px"}}]),b}(p.BaseTooltip);v.TEMPLATE=['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join(""),e.BubbleTooltip=v,e.default=g},function(o,e,t){o.exports=t(63)}]).default},typeof exports=="object"&&typeof module=="object"?module.exports=sr():typeof define=="function"&&define.amd?define([],sr):typeof exports=="object"?exports.Quill=sr():tl.Quill=sr();const na=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sa=Symbol(),ol=new Map;class eu{constructor(e,t){if(this._$cssResult$=!0,t!==sa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=ol.get(this.cssText);return na&&e===void 0&&(ol.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const In=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,r,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[n+1],o[0]);return new eu(t,sa)},il=na?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(i=>new eu(typeof i=="string"?i:i+"",sa))(t)})(o):o;var es;const rl=window.trustedTypes,Nh=rl?rl.emptyScript:"",nl=window.reactiveElementPolyfillSupport,Cs={toAttribute(o,e){switch(e){case Boolean:o=o?Nh:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},tu=(o,e)=>e!==o&&(e==e||o==o),ts={attribute:!0,type:String,converter:Cs,reflect:!1,hasChanged:tu};class Di extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Eh(i,t);r!==void 0&&(this._$Eu.set(r,i),e.push(r))}),e}static createProperty(e,t=ts){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ts}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(il(r))}else e!==void 0&&t.push(il(e));return t}static _$Eh(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{na?i.adoptedStyleSheets=r.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):r.forEach(n=>{const s=document.createElement("style"),p=window.litNonce;p!==void 0&&s.setAttribute("nonce",p),s.textContent=n.cssText,i.appendChild(s)})})(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=ts){var r,n;const s=this.constructor._$Eh(e,i);if(s!==void 0&&i.reflect===!0){const p=((n=(r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&n!==void 0?n:Cs.toAttribute)(t,i.type);this._$Ei=e,p==null?this.removeAttribute(s):this.setAttribute(s,p),this._$Ei=null}}_$AK(e,t){var i,r,n;const s=this.constructor,p=s._$Eu.get(e);if(p!==void 0&&this._$Ei!==p){const u=s.getPropertyOptions(p),d=u.converter,c=(n=(r=(i=d)===null||i===void 0?void 0:i.fromAttribute)!==null&&r!==void 0?r:typeof d=="function"?d:null)!==null&&n!==void 0?n:Cs.fromAttribute;this._$Ei=p,this[p]=c(t,u.type),this._$Ei=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||tu)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,n)=>this[n]=r),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(i)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$ES(i,this[i],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var os;Di.finalized=!0,Di.elementProperties=new Map,Di.elementStyles=[],Di.shadowRootOptions={mode:"open"},nl==null||nl({ReactiveElement:Di}),((es=globalThis.reactiveElementVersions)!==null&&es!==void 0?es:globalThis.reactiveElementVersions=[]).push("1.3.1");const Gi=globalThis.trustedTypes,sl=Gi?Gi.createPolicy("lit-html",{createHTML:o=>o}):void 0,Eo=`lit$${(Math.random()+"").slice(9)}$`,ou="?"+Eo,Ch=`<${ou}>`,Qi=document,Pr=(o="")=>Qi.createComment(o),Nr=o=>o===null||typeof o!="object"&&typeof o!="function",al=Array.isArray,ar=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ll=/-->/g,cl=/>/g,Vo=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ul=/'/g,dl=/"/g,pl=/^(?:script|style|textarea|title)$/i,Re=(o=>(e,...t)=>({_$litType$:o,strings:e,values:t}))(1),li=Symbol.for("lit-noChange"),Ue=Symbol.for("lit-nothing"),hl=new WeakMap,Fi=Qi.createTreeWalker(Qi,129,null,!1);class Cr{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,s=0;const p=e.length-1,u=this.parts,[d,c]=((l,a)=>{const h=l.length-1,f=[];let m,g=a===2?"<svg>":"",v=ar;for(let b=0;b<h;b++){const x=l[b];let w,E,S=-1,k=0;for(;k<x.length&&(v.lastIndex=k,E=v.exec(x),E!==null);)k=v.lastIndex,v===ar?E[1]==="!--"?v=ll:E[1]!==void 0?v=cl:E[2]!==void 0?(pl.test(E[2])&&(m=RegExp("</"+E[2],"g")),v=Vo):E[3]!==void 0&&(v=Vo):v===Vo?E[0]===">"?(v=m!=null?m:ar,S=-1):E[1]===void 0?S=-2:(S=v.lastIndex-E[2].length,w=E[1],v=E[3]===void 0?Vo:E[3]==='"'?dl:ul):v===dl||v===ul?v=Vo:v===ll||v===cl?v=ar:(v=Vo,m=void 0);const P=v===Vo&&l[b+1].startsWith("/>")?" ":"";g+=v===ar?x+Ch:S>=0?(f.push(w),x.slice(0,S)+"$lit$"+x.slice(S)+Eo+P):x+Eo+(S===-2?(f.push(void 0),b):P)}const y=g+(l[h]||"<?>")+(a===2?"</svg>":"");if(!Array.isArray(l)||!l.hasOwnProperty("raw"))throw Error("invalid template strings array");return[sl!==void 0?sl.createHTML(y):y,f]})(e,t);if(this.el=Cr.createElement(d,i),Fi.currentNode=this.el.content,t===2){const l=this.el.content,a=l.firstChild;a.remove(),l.append(...a.childNodes)}for(;(r=Fi.nextNode())!==null&&u.length<p;){if(r.nodeType===1){if(r.hasAttributes()){const l=[];for(const a of r.getAttributeNames())if(a.endsWith("$lit$")||a.startsWith(Eo)){const h=c[s++];if(l.push(a),h!==void 0){const f=r.getAttribute(h.toLowerCase()+"$lit$").split(Eo),m=/([.?@])?(.*)/.exec(h);u.push({type:1,index:n,name:m[2],strings:f,ctor:m[1]==="."?Dh:m[1]==="?"?Lh:m[1]==="@"?Mh:kn})}else u.push({type:6,index:n})}for(const a of l)r.removeAttribute(a)}if(pl.test(r.tagName)){const l=r.textContent.split(Eo),a=l.length-1;if(a>0){r.textContent=Gi?Gi.emptyScript:"";for(let h=0;h<a;h++)r.append(l[h],Pr()),Fi.nextNode(),u.push({type:2,index:++n});r.append(l[a],Pr())}}}else if(r.nodeType===8)if(r.data===ou)u.push({type:2,index:n});else{let l=-1;for(;(l=r.data.indexOf(Eo,l+1))!==-1;)u.push({type:7,index:n}),l+=Eo.length-1}n++}}static createElement(e,t){const i=Qi.createElement("template");return i.innerHTML=e,i}}function Wi(o,e,t=o,i){var r,n,s,p;if(e===li)return e;let u=i!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[i]:t._$Cu;const d=Nr(e)?void 0:e._$litDirective$;return(u==null?void 0:u.constructor)!==d&&((n=u==null?void 0:u._$AO)===null||n===void 0||n.call(u,!1),d===void 0?u=void 0:(u=new d(o),u._$AT(o,t,i)),i!==void 0?((s=(p=t)._$Cl)!==null&&s!==void 0?s:p._$Cl=[])[i]=u:t._$Cu=u),u!==void 0&&(e=Wi(o,u._$AS(o,e.values),u,i)),e}class Th{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:r}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Qi).importNode(i,!0);Fi.currentNode=n;let s=Fi.nextNode(),p=0,u=0,d=r[0];for(;d!==void 0;){if(p===d.index){let c;d.type===2?c=new Kr(s,s.nextSibling,this,e):d.type===1?c=new d.ctor(s,d.name,d.strings,this,e):d.type===6&&(c=new jh(s,this,e)),this.v.push(c),d=r[++u]}p!==(d==null?void 0:d.index)&&(s=Fi.nextNode(),p++)}return n}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Kr{constructor(e,t,i,r){var n;this.type=2,this._$AH=Ue,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cg=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Wi(this,e,t),Nr(e)?e===Ue||e==null||e===""?(this._$AH!==Ue&&this._$AR(),this._$AH=Ue):e!==this._$AH&&e!==li&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):(i=>{var r;return al(i)||typeof((r=i)===null||r===void 0?void 0:r[Symbol.iterator])=="function"})(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==Ue&&Nr(this._$AH)?this._$AA.nextSibling.data=e:this.k(Qi.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Cr.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.m(i);else{const s=new Th(n,this),p=s.p(this.options);s.m(i),this.k(p),this._$AH=s}}_$AC(e){let t=hl.get(e.strings);return t===void 0&&hl.set(e.strings,t=new Cr(e)),t}S(e){al(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new Kr(this.M(Pr()),this.M(Pr()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class kn{constructor(e,t,i,r,n){this.type=1,this._$AH=Ue,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ue}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const n=this.strings;let s=!1;if(n===void 0)e=Wi(this,e,t,0),s=!Nr(e)||e!==this._$AH&&e!==li,s&&(this._$AH=e);else{const p=e;let u,d;for(e=n[0],u=0;u<n.length-1;u++)d=Wi(this,p[i+u],t,u),d===li&&(d=this._$AH[u]),s||(s=!Nr(d)||d!==this._$AH[u]),d===Ue?e=Ue:e!==Ue&&(e+=(d!=null?d:"")+n[u+1]),this._$AH[u]=d}s&&!r&&this.C(e)}C(e){e===Ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Dh extends kn{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===Ue?void 0:e}}const Rh=Gi?Gi.emptyScript:"";class Lh extends kn{constructor(){super(...arguments),this.type=4}C(e){e&&e!==Ue?this.element.setAttribute(this.name,Rh):this.element.removeAttribute(this.name)}}class Mh extends kn{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=Wi(this,e,t,0))!==null&&i!==void 0?i:Ue)===li)return;const r=this._$AH,n=e===Ue&&r!==Ue||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==Ue&&(r===Ue||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class jh{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Wi(this,e)}}const fl=window.litHtmlPolyfillSupport;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var is,rs;fl==null||fl(Cr,Kr),((os=globalThis.litHtmlVersions)!==null&&os!==void 0?os:globalThis.litHtmlVersions=[]).push("2.2.2");class rt extends Di{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((i,r,n)=>{var s,p;const u=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:r;let d=u._$litPart$;if(d===void 0){const c=(p=n==null?void 0:n.renderBefore)!==null&&p!==void 0?p:null;u._$litPart$=d=new Kr(r.insertBefore(Pr(),c),c,void 0,n!=null?n:{})}return d._$AI(i),d})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return li}}rt.finalized=!0,rt._$litElement$=!0,(is=globalThis.litElementHydrateSupport)===null||is===void 0||is.call(globalThis,{LitElement:rt});const ml=globalThis.litElementPolyfillSupport;ml==null||ml({LitElement:rt}),((rs=globalThis.litElementVersions)!==null&&rs!==void 0?rs:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=o=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(o,e):((t,i)=>{const{kind:r,elements:n}=i;return{kind:r,elements:n,finisher(s){window.customElements.define(t,s)}}})(o,e),$h=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Vt(He({},e),{finisher(t){t.createProperty(e.key,o)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function Ge(o){return(e,t)=>t!==void 0?((i,r,n)=>{r.constructor.createProperty(n,i)})(o,e,t):$h(o,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function mn(o){return Ge(Vt(He({},o),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const iu=({finisher:o,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const n=(r=t.originalKey)!==null&&r!==void 0?r:t.key,s=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:Vt(He({},t),{key:n});return o!=null&&(s.finisher=function(p){o(p,n)}),s}{const n=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),o==null||o(n,i)}};function Xo(o,e){return iu({descriptor:t=>{const i={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var n,s;return this[r]===void 0&&(this[r]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vl(o){return iu({descriptor:e=>({get(){var t,i;return(i=(t=this.renderRoot)===null||t===void 0?void 0:t.querySelectorAll(o))!==null&&i!==void 0?i:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ns;(ns=window.HTMLSlotElement)===null||ns===void 0||ns.prototype.assignedElements;/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Pn=o=>e=>class extends e{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=o.subscribe(()=>this.stateChanged(o.getState())),this.stateChanged(o.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(t){}};function it(o){return"Minified Redux error #"+o+"; visit https://redux.js.org/Errors?code="+o+" for the full message or use the non-minified dev environment for full errors. "}var gl=typeof Symbol=="function"&&Symbol.observable||"@@observable",ss=function(){return Math.random().toString(36).substring(7).split("").join(".")},vn={INIT:"@@redux/INIT"+ss(),REPLACE:"@@redux/REPLACE"+ss(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ss()}};function Uh(o){if(typeof o!="object"||o===null)return!1;for(var e=o;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(o)===e}const D={agrupadorGenerico:{tipo:"DispositivoAgrupadorGenerico",name:void 0,tagId:"dg",descricao:void 0,descricaoPlural:void 0,tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo","Secao"],tiposPermitidosFilhos:["Parte","Livro","Titulo","Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},alinea:{tipo:"Alinea",name:"Alinea",tagId:"ali",descricao:"Al\xEDnea",descricaoPlural:"Al\xEDneas",tiposPermitidosPai:["Inciso"],tiposPermitidosFilhos:["Item"],tipoProvavelFilho:"Item",INDICADOR_SEQUENCIA:[";","; e","; ou"],INDICADOR_FIM_SEQUENCIA:["."],INDICADOR_DESDOBRAMENTO:[":"]},articulacao:{tipo:"Articulacao",name:"Articulacao",tagId:"",descricao:"Articula\xE7\xE3o",descricaoPlural:"Articula\xE7\xF5es",tiposPermitidosPai:[],tiposPermitidosFilhos:["Parte","Livro","Titulo","Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["."],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:[":"]},artigo:{tipo:"Artigo",name:"Artigo",tagId:"art",descricao:"Artigo",descricaoPlural:"Artigos",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo","Secao","Subsecao"],tiposPermitidosFilhos:["Paragrafo","Inciso"],tipoProvavelFilho:"Inciso",INDICADOR_SEQUENCIA:["."],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:[":"]},capitulo:{tipo:"Capitulo",name:"Capitulo",tagId:"cap",descricao:"Cap\xEDtulo",descricaoPlural:"Cap\xEDtulos",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo"],tiposPermitidosFilhos:["Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},caput:{tipo:"Caput",name:"Caput",tagId:"cpt",descricao:"Caput",descricaoPlural:"Capita",tiposPermitidosPai:["Artigo"],tiposPermitidosFilhos:["Inciso"],tipoProvavelFilho:"Inciso",INDICADOR_SEQUENCIA:["."],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:[":"]},generico:{tipo:"DispositivoGenerico",name:void 0,tagId:"gen",descricao:"Dispositivo gen\xE9rico",descricaoPlural:"Dispositivos gen\xE9ricos",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo","Secao","Subsecao"],tiposPermitidosFilhos:["Paragrafo","Inciso","Alinea","Item"],tipoProvavelFilho:"DispositivoGenerico",INDICADOR_SEQUENCIA:[";","; e","; ou"],INDICADOR_FIM_SEQUENCIA:["."],INDICADOR_DESDOBRAMENTO:[":"]},inciso:{tipo:"Inciso",name:"Inciso",tagId:"inc",descricao:"Inciso",descricaoPlural:"Incisos",tiposPermitidosPai:["Artigo","Caput","Paragrafo"],tiposPermitidosFilhos:["Alinea"],tipoProvavelFilho:"Alinea",INDICADOR_SEQUENCIA:[";","; e","; ou"],INDICADOR_FIM_SEQUENCIA:["."],INDICADOR_DESDOBRAMENTO:[":"]},item:{tipo:"Item",name:"Item",tagId:"ite",descricao:"Item",descricaoPlural:"Itens",tiposPermitidosPai:["Alinea"],tiposPermitidosFilhos:[],tipoProvavelFilho:"DispositivoGenerico",INDICADOR_SEQUENCIA:[";","; e","; ou"],INDICADOR_FIM_SEQUENCIA:["."],INDICADOR_DESDOBRAMENTO:[":"]},livro:{tipo:"Livro",name:"Livro",tagId:"liv",descricao:"Livro",descricaoPlural:"Livros",tiposPermitidosPai:["Articulacao","Parte"],tiposPermitidosFilhos:["Titulo","Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},omissis:{tipo:"Omissis",name:"Omissis",tagId:"omi",descricao:"Linha pontilhada (omissis)",descricaoPlural:"Linhas pontilhadas (omissis)",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo","Secao","Subsecao","Artigo","Caput","Paragrafo","Alinea","Inciso"],tiposPermitidosFilhos:["Parte","Livro","Titulo","Capitulo","Secao","Subsecao","Artigo","Paragrafo","Alinea","Inciso","Item"],tipoProvavelFilho:void 0,INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:["NA"]},paragrafo:{tipo:"Paragrafo",name:"Paragrafo",tagId:"par",descricao:"Par\xE1grafo",descricaoPlural:"Par\xE1grafos",tiposPermitidosPai:["Artigo"],tiposPermitidosFilhos:["Inciso"],tipoProvavelFilho:"Inciso",INDICADOR_SEQUENCIA:["."],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:[":"]},parte:{tipo:"Parte",name:"Parte",tagId:"prt",descricao:"Parte",descricaoPlural:"Partes",tiposPermitidosPai:["Articulacao"],tiposPermitidosFilhos:["Livro","Titulo","Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},secao:{tipo:"Secao",name:"Secao",tagId:"sec",descricao:"Se\xE7\xE3o",descricaoPlural:"Se\xE7\xF5es",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo"],tiposPermitidosFilhos:["Subsecao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},subsecao:{tipo:"Subsecao",name:"Subsecao",tagId:"sub",descricao:"Subse\xE7\xE3o",descricaoPlural:"Subse\xE7\xF5es",tiposPermitidosPai:["Secao"],tiposPermitidosFilhos:["Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},titulo:{tipo:"Titulo",name:"Titulo",tagId:"tit",descricao:"T\xEDtulo",descricaoPlural:"T\xEDtulos",tiposPermitidosPai:["Articulacao","Parte","Livro"],tiposPermitidosFilhos:["Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]}};class Qe{constructor(e,t){var i;this.isDispositivoAlteracao=!1,this.descricao=`Adicionar ${(i=e==null?void 0:e.descricao)!==null&&i!==void 0?i:""} ${t!=null?t:""}`,this.tipo=e==null?void 0:e.tipo,this.posicao=t}execute(e,t,i,r=!1){return{type:"ADICIONAR_ELEMENTO",atual:e,novo:{tipo:i,isDispositivoAlteracao:this.isDispositivoAlteracao,conteudo:{texto:t}},hasDesmembramento:r,posicao:this.posicao}}}const aa=new Qe,ru=new Qe(D.artigo),nu=new Qe(D.artigo,"antes"),su=new Qe(D.artigo,"depois"),la=new Qe(D.alinea),au=new Qe(D.alinea,"antes"),lu=new Qe(D.alinea,"depois"),Nn=new Qe(D.inciso),cu=new Qe(D.inciso,"antes"),uu=new Qe(D.inciso,"depois"),du=new Qe(D.item),pu=new Qe(D.item,"antes"),hu=new Qe(D.item,"antes"),fu=new Qe(D.omissis),mu=new Qe(D.paragrafo),vu=new Qe(D.paragrafo,"antes"),gu=new Qe(D.paragrafo,"depois");class uo{constructor(e){this.descricao="Adicionar "+e.descricao,this.tipo=e.tipo}execute(e){return{type:"AGRUPAR_ELEMENTO",atual:e,novo:{tipo:this.tipo}}}}const Fh=new uo(D.parte),zh=new uo(D.livro),Bh=new uo(D.titulo),Ts=new uo(D.capitulo),Vh=new uo(D.secao),Hh=new uo(D.subsecao),Kh=new class{constructor(){this.descricao="Atualizar dispositivo"}execute(o){return{type:"APLICAR_ALTERACOES_EMENDA",alteracoesEmenda:o}}},Gh=new class{constructor(){this.descricao="Atualizar dispositivo"}execute(o){return this.tipo=o.tipo,{type:"ATUALIZAR_ELEMENTO",atual:o}}},Qh=new class{constructor(){this.descricao="Atualizar Norma Referenciada"}execute(o){return this.tipo=o.tipo,{type:"ATUALIZAR_REFERENCIA_ELEMENTO",atual:o}}},bl=new class{constructor(){this.descricao="Atualizar dispositivo"}execute(o){return this.tipo=o.tipo,{type:"ATUALIZAR_TEXTO_ELEMENTO",atual:o}}},Wh=new class{constructor(){this.descricao="Elemento selecionado"}execute(o){return{type:"ELEMENTO_SELECIONADO",atual:o}}};class bu{constructor(){this.descricao="Informar norma alterada"}execute(e){return{type:"INFORMAR_NORMA",atual:e}}}const ca=new bu;class yu{constructor(){this.descricao="Mover para baixo"}execute(e){return{type:"Mover para baixo",atual:e}}}const Ro=new yu;class xu{constructor(){this.descricao="Mover para cima"}execute(e){return{type:"Mover para cima",atual:e}}}const Lo=new xu;class Cn{constructor(){this.descricao="Remover dispositivo"}execute(e){return{type:"REMOVER_ELEMENTO",atual:e}}}const zt=new Cn,Zh=new class{constructor(){this.descricao="Remover dispositivo sem texto"}execute(o,e){return{type:"REMOVER_ELEMENTO_SEM_TEXTO",atual:o,key:e}}};class Tn{constructor(){this.descricao="Numerar e criar r\xF3tulo para o dispositivo "}execute(e,t,i){return this.tipo=e.tipo,{type:"RENUMERAR_ELEMENTO",atual:e,novo:{numero:t,existenteNaNorma:i}}}}const jt=new Tn,ua=new class{constructor(){this.descricao="Abandonar modifica\xE7\xF5es do dispositivo"}execute(o){return{type:"RESTAURAR_ELEMENTO",atual:o}}},wu=new class{constructor(){this.descricao="Suprimir dispositivo"}execute(o){return{type:"SUPRIMIR_ELEMENTO",atual:o}}};class ie{constructor(e,t,i){this.descricao=t,this.tipo=e.tipo,this.nomeAcao=i}execute(e){return{type:"TRANSFORMAR_TIPO_ELEMENTO",subType:this.nomeAcao,atual:e,novo:{tipo:this.tipo}}}}const Eu=new ie(D.omissis,"Transformar em Omissis de Al\xEDnea","transformarAlineaEmOmissisAlinea"),Au=new ie(D.omissis,"Transformar em Omissis de Inciso de Caput","transformarIncisoCaputEmOmissisIncisoCaput"),_u=new ie(D.omissis,"Transformar em Omissis de Item","transformarItemEmOmissisItem"),Ou=new ie(D.omissis,"Transformar em Omissis de Par\xE1grafo","transformarParagrafoEmOmissisParagrafo"),Ds=new ie(D.omissis,"Transformar em Omissis de Inciso de Par\xE1grafo","transformarIncisoParagrafoEmOmissisIncisoParagrafo"),Tr=new ie(D.inciso,"Transformar Al\xEDnea em Inciso","transformarAlineaEmIncisoCaput"),Dr=new ie(D.inciso,"Transformar Al\xEDnea em Inciso","transformarAlineaEmIncisoParagrafo"),qu=new ie(D.item,"Transformar Al\xEDnea em Item","transformarAlineaEmItem"),Su=new ie(D.paragrafo,"Transformar Artigo em Par\xE1grafo","transformarArtigoEmParagrafo"),Xh=new ie(D.inciso,"Transformar em Inciso","transformarDispositivoGenericoEmInciso"),Yh=new ie(D.alinea,"Transformar em Al\xEDnea","transformarDispositivoGenericoEmAlinea"),Jh=new ie(D.item,"Transformar em Item","transformarDispositivoGenericoEmItem"),Rr=new ie(D.paragrafo,"Transformar Inciso em Par\xE1grafo","transformarIncisoParagrafoEmParagrafo"),Lr=new ie(D.paragrafo,"Transformar Inciso Caput em Par\xE1grafo","transformarIncisoCaputEmParagrafo"),yl=new ie(D.alinea,"Transformar Inciso de Caput em Al\xEDnea","transformarIncisoCaputEmAlinea"),xl=new ie(D.alinea,"Transformar Inciso de Caput em Al\xEDnea","transformarIncisoParagrafoEmAlinea"),Iu=new ie(D.alinea,"Transformar Omissis em Al\xEDnea","transformarOmissisEmAlinea"),ku=new ie(D.artigo,"Transformar Omissis em Artigo","transformarOmissisEmArtigo"),Pu=new ie(D.inciso,"Transformar Omissis em Inciso de Caput","transformarOmissisEmIncisoCaput"),Nu=new ie(D.inciso,"Transformar Omissis em Inciso de Par\xE1grafo","transformarOmissisEmIncisoParagrafo"),Cu=new ie(D.item,"Transformar Omissis em Item","transformarOmissisEmItem"),Tu=new ie(D.paragrafo,"Transformar Omissis em Par\xE1grafo","transformarOmissisEmParagrafo"),Du=new ie(D.alinea,"Transformar Item em Al\xEDnea","transformarItemEmAlinea"),Ru=new ie(D.artigo,"Transformar Par\xE1grafo em Artigo","transformarParagrafoEmArtigo"),Lu=new ie(D.inciso,"Transformar Par\xE1grafo em Inciso de Par\xE1grafo","transformarParagrafoEmIncisoParagrafo"),Mu=new ie(D.inciso,"Transformar Par\xE1grafo em Inciso de Caput","transformarParagrafoEmIncisoCaput"),ju=new class{constructor(){this.descricao="Articula\xE7\xE3o validada"}execute(){return{type:"VALIDAR_ARTICULACAO"}}},$u=new class{constructor(){this.descricao="Elemento validado"}execute(o){return{type:"VALIDAR_ELEMENTO",atual:o}}};var j;(function(o){o.DISPOSITIVO_ADICIONADO="Dispositivo Adicionado",o.DISPOSITIVO_NOVO="Dispositivo Novo",o.DISPOSITIVO_MODIFICADO="Dispositivo Modificado",o.DISPOSITIVO_ORIGINAL="Dispositivo Original",o.DISPOSITIVO_SUPRIMIDO="Dispositivo Suprimido"})(j||(j={}));const da=o=>[j.DISPOSITIVO_ADICIONADO.toString(),j.DISPOSITIVO_MODIFICADO.toString(),j.DISPOSITIVO_SUPRIMIDO.toString()].includes(o.situacao.descricaoSituacao),Uu=o=>!!da(o)||o.pai!==void 0&&Uu(o.pai),Oe=o=>o.tipo===D.articulacao.tipo,to=o=>o.tipo===D.generico.tipo,V=o=>o.tipo===D.artigo.tipo,fe=o=>o.tipo===D.caput.tipo,he=o=>o.tipo===D.paragrafo.tipo,At=o=>o.tipo===D.inciso.tipo,pt=o=>At(o)&&fe(o.pai),_o=o=>At(o)&&he(o.pai),ii=o=>o.tipo===D.alinea.tipo,wl=o=>o.tipo===D.item.tipo,Ee=o=>o.tipo===D.omissis.tipo,de=o=>[D.articulacao.tipo,D.agrupadorGenerico.tipo,D.capitulo.tipo,D.livro.tipo,D.parte.tipo,D.secao.tipo,D.subsecao.tipo,D.titulo.tipo].includes(o.tipo),ef=o=>de(o)&&!Oe(o),El=o=>o.tipo===D.agrupadorGenerico.tipo,Ri=o=>[D.paragrafo.tipo,D.inciso.tipo,D.alinea.tipo,D.item.tipo].includes(o.tipo);function Fu(o){return po(o.replace(/(<([^>]+)>)/gi,"").trim())}function pa(o,e){return e.map(t=>new RegExp(qo($i(t))+"\\s*$").test(o)).filter(t=>t)[0]===!0}function Kt(o){switch(o[0].trim()){case".":return"ponto";case":":return"dois pontos";case";":return"ponto e v\xEDrgula";case",":return"v\xEDrgula";default:return o[0].trim()}}function $i(o){return o.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}function qo(o){return o.replace(/\s+/g,"\\s+")}function po(o){return o.replace(/\s{2,}/g," ")}class Ce{constructor(e){this.strs=new Array,e&&this.append(e)}append(e){e&&this.strs.push(e)}toString(){return function(e){let t="";return e.forEach(i=>{t+=i}),t}(this.strs)}}const zu=/[\u0300-\u036f]/g;function Pe(o){if(!o||Oe(o))return o;if(o.pai===void 0)throw new Error("N\xE3o foi encontrada a articula\xE7\xE3o");return Pe(o.pai)}function Bu(o,e){if(e.uuid===o)return e;if(e.filhos!==null){let t=null;const i=e.hasAlteracao()?e.alteracoes.filhos:e.filhos;for(let r=0;t===null&&r<i.length;r++)t=Bu(o,i[r]);return t}return null}const un=(o,e)=>{if(e===void 0)throw new Error("uuid n\xE3o foi informado");return Bu(e,o)},Zi=o=>{var e;return Be(o)?Zi(o.filhos[o.filhos.length-1]):(o==null?void 0:o.hasAlteracao())&&((e=o.alteracoes)===null||e===void 0?void 0:e.filhos.length)?Zi(o.alteracoes.filhos[o.alteracoes.filhos.length-1]):o},nt=o=>V(o)?Pe(o).artigos.filter(e=>e.tipo===o.tipo):o.pai?o.pai.filhos.filter(e=>e.tipo===o.tipo):[o],Mr=(o,e,t)=>{if(o!=null&&o.filhos){for(let i=o==null?void 0:o.indexOf(e);i>=0;i--){const r=o==null?void 0:o.filhos[i];de(r)&&t.push(r)}if(o!=null&&o.pai)return Mr(o.pai,e.pai,t)}return t},Rs=(o,e)=>{if(o&&o.pai)return o.pai&&o.pai.tipo===e?o.pai:Rs(o.pai,e)},ha=o=>V(o.pai)?o.pai:ha(o.pai),Vu=o=>{const e=o.pai;return V(e)&&!G(e)?o.pai:Vu(o.pai)},Gr=(o,e)=>{if(o!=null&&o.filhos){for(let t=(o==null?void 0:o.indexOf(e))-1;t>=0;t--){const i=o==null?void 0:o.filhos[t];if(V(i))return i;if(de(i))return Hu(i)}if(o!=null&&o.pai)return Gr(o.pai,e.pai)}},Hu=o=>{if(o!==void 0&&o.filhos)for(let e=o.filhos.length-1;e>=0;e--){const t=o.filhos[e];if(V(t))return t;if(de(t))return Hu(t)}},Al=o=>{const e=o.pai.indexOf(o);return o.pai.filhos.filter((t,i)=>i>e&&de(t))[0]},_l=o=>{var e;return((e=o.filhos)===null||e===void 0?void 0:e.filter(t=>to(t)).length)>0},ge=o=>nt(o).length===1,Fe=o=>{const e=nt(o);return e[e.length-1]===o},Ol=o=>{const e=nt(o);return e.length>1&&e[e.length-2]===o},Yt=o=>nt(o)[0]===o,Be=o=>o.filhos&&o.filhos.length>0,Me=o=>{const e=o.pai.indexOf(o);return e>0?o.pai.filhos[e-1]:void 0},oo=o=>{const e=nt(o),t=e.indexOf(o);return t>0?e[t-1]:void 0},di=o=>{const e=o.pai.indexOf(o);return e===0?void 0:o.pai.filhos.filter((i,r)=>r<e&&(i.tipo===o.tipo||i.tipo===fu.tipo)).pop()},jr=o=>{const e=o.pai.indexOf(o);return e<o.pai.filhos.length-1?o.pai.filhos[e+1]:void 0},fa=o=>{var e,t,i;const r=(e=o.pai)===null||e===void 0?void 0:e.indexOf(o);return(i=(t=o.pai)===null||t===void 0?void 0:t.filhos.filter((n,s)=>s<r&&n.tipo===o.tipo&&n.pai===o.pai))!==null&&i!==void 0?i:[]},ma=o=>{var e,t,i;const r=(e=o.pai)===null||e===void 0?void 0:e.indexOf(o);return(i=(t=o.pai)===null||t===void 0?void 0:t.filhos.filter((n,s)=>s>r&&n.tipo===o.tipo))!==null&&i!==void 0?i:[]},pi=o=>{const e=o.pai.indexOf(o);return e===o.pai.filhos.length-1?void 0:o.pai.filhos.filter((i,r)=>r>e&&(i.tipo===o.tipo||i.tipo===fu.tipo))[0]},Ku=(o,e=!1)=>{if(V(o)){const i=Pe(o),r=Pe(o).indexOfArtigo(o);return i.artigos.filter((n,s)=>s>r)}const t=o.pai.indexOf(o);return o.pai.filhos.filter((i,r)=>e?r>t:r>=t).filter(i=>o.tipo===i.tipo)},gn=o=>V(o)&&ge(o),va=o=>he(o)&&ge(o),ga=o=>o.cabecaAlteracao||Ot(o)?o:ga(o.pai),Ot=o=>G(o)&&Oe(o.pai)&&o.pai.pai!==void 0,Gu=o=>ma(o).filter(e=>fi(e)&&e.numero==="1").length>0,_t=o=>{const e=ga(o),t=ci(e);return t.length>0&&t[t.length-1]===o},hi=o=>{const e=Pe(o).pai;if(!e)return!1;const t=Pe(e);return ge(e)||t.indexOfArtigo(e)<t.artigos.length-1},Le=o=>Oe(o)&&o.pai!==void 0,G=o=>{if(o.isDispositivoAlteracao)return!0;try{return Pe(o).pai!==void 0}catch{return!1}},fi=o=>o.situacao.descricaoSituacao===j.DISPOSITIVO_ORIGINAL,Qu=o=>o.situacao.descricaoSituacao===j.DISPOSITIVO_MODIFICADO||o.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO,ci=o=>Oo(o,[]),Oo=(o,e)=>{e.push(o);const t=o.hasAlteracao()?o.alteracoes.filhos:o.filhos;return t.length&&t.forEach(i=>Oo(i,e)),e},Lt=(o,e)=>{if(o)if(e(o),o.tipo===D.artigo.tipo){const t=o;t.caput&&(Lt(t.caput,e),o.alteracoes&&Lt(o.alteracoes,e),o.filhos.filter(i=>he(i)||Ee(i)&&!fe(i.pai)).forEach(i=>{Lt(i,e)}))}else o.alteracoes&&Lt(o.alteracoes,e),o.filhos.forEach(t=>{Lt(t,e)})},Li=(o,e)=>{if(!o)return;let t=e(o);if(t)return t;if(o.tipo===D.artigo.tipo){const i=o;if(i.caput){if(t=Li(i.caput,e),t||o.alteracoes&&(t=Li(o.alteracoes,e),t))return t;for(const r of o.filhos.filter(n=>he(n)||Ee(n)&&!fe(n.pai)))if(t=Li(r,e),t)return t}}else{if(o.alteracoes&&(t=Li(o.alteracoes,e),t))return t;for(const i of o.filhos)if(t=Li(i,e),t)return t}},ri=o=>o&&!o.pai&&o.tipo===D.articulacao.tipo,bn=(o,e)=>{const t=tf(e);let i=o;if(t){const r=o.artigos.find(n=>t===n.id);if(r){if(e===t||e===t+"_cpt")return r;i=r}}return Li(i,r=>e===r.id?r:void 0)},tf=o=>{const e=/^art\d+(-\d+)*/.exec(o);return e!=null&&e.length?e[0]:void 0},of=(o,e)=>{if(!o||!e)return!1;let t=o.pai;for(;t;){if(t===e)return!0;t=t.pai}return!1},Wu=o=>{if(!o)return!1;let e=o.pai;for(;e;){if(e.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO)return!0;e=e.pai}return!1};var Y;(function(o){o[o.INFO=0]="INFO",o[o.WARNING=1]="WARNING",o[o.ERROR=2]="ERROR"})(Y||(Y={}));const yt="...........................................................................................",gt=o=>{var e;const t=V(o)?o.caput:o;return pa(t.texto,(e=t.INDICADOR_DESDOBRAMENTO)!==null&&e!==void 0?e:[])},yn=o=>{var e;const t=V(o)?o.caput:o;return pa(t.texto,(e=t.INDICADOR_FIM_SEQUENCIA)!==null&&e!==void 0?e:[])},Yo=o=>{var e;const t=V(o)?o.caput:o;return pa(t.texto,(e=t.INDICADOR_SEQUENCIA)!==null&&e!==void 0?e:[])},$r=yt+".\u201D (NR)",Zu=o=>new RegExp(qo($i("o seguinte acr\xE9scimo:"))+"\\s*$").test(o)||new RegExp(qo($i("os seguintes acr\xE9scimos:"))+"\\s*$").test(o)||new RegExp(qo($i("passa a vigorar com a seguinte altera\xE7\xE3o:"))+"\\s*$").test(o)||new RegExp(qo($i("passa a vigorar com as seguintes altera\xE7\xF5es:"))+"\\s*$").test(o),Jt=o=>/^[.]*(?:\s*)["”“]?(\s*)?\(NR\)\s*$/.test(o)?$r:/["”]?(\s*)?\(NR\)?\s*$/.test(o)?o.replace(/["“](?!.*["”])/,"\u201D"):o!==yt&&o!==$r&&new RegExp("^[.]+$").test(o)?yt:o,Xu=o=>/\.["”](?:\s*\(NR\))\s*$/.test(o),ql=o=>o!==void 0&&/.*:[\s]{1,2}["”“].*[.]["”“]$/.test(o),rf=o=>{var e;const t=[];return(Oe(o)||o.texto)&&o.texto.trim().length!==0||t.push({tipo:Y.ERROR,descricao:"N\xE3o foi informado um texto para "+(o.artigoDefinido+" "+o.descricao)}),Oe(o)||!o.texto||function(i){const r=document.createElement("div");return r.innerHTML=i,r.innerHTML===i}(o.texto)||t.push({tipo:Y.ERROR,descricao:"O conte\xFAdo do dispositivo n\xE3o \xE9 um HTML v\xE1lido"}),!Oe(o)&&o.texto&&o.texto.trim().length>500&&t.push({tipo:Y.WARNING,descricao:"Pelo princ\xEDpio da concis\xE3o, o texto dos dispositivos n\xE3o deve ser extenso, devendo ser utilizadas frases curtas e concisas"}),Ri(o)&&!he(o)&&o.texto&&/^[A-ZÀ-Ú]/.test(o.texto)&&t.push({tipo:Y.WARNING,descricao:`${o.descricao} deveria iniciar com letra min\xFAscula, a n\xE3o ser que se trate de uma situa\xE7\xE3o especial, como nome pr\xF3prio`}),!Ri(o)||he(o)||Ee(o)||!o.texto||ge(o)||Fe(o)||Ol(o)||Be(o)||o.INDICADOR_SEQUENCIA===void 0||function(i){const r=i.replace(/(<([^>]+)>)/gi,"").trim();return r.length>0?r.charAt(r.length-1):""}(o.texto)===o.INDICADOR_SEQUENCIA[0]||t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria terminar com ${Kt(o.INDICADOR_SEQUENCIA)}. ${Yo(o)?"A varia\xE7\xE3o informada s\xF3 \xE9 permitida para o pen\xFAltimo elemento":""}`}),!V(o)&&!he(o)||!o.texto||/^[...]{3,}/.test(o.texto)||/^[A-ZÀ-Ú]/.test(o.texto)||t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria iniciar com letra mai\xFAscula`}),G(o)||de(o)||Ee(o)||!o.texto||!(!V(o)&&Be(o)||V(o)&&Be(o.caput))||gt(o)||t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria terminar com ${Kt(o.INDICADOR_DESDOBRAMENTO)}`}),G(o)||!Ri(o)||he(o)||!o.texto||!ge(o)&&!Fe(o)||_l(o.pai)||Be(o)||yn(o)||t.push({tipo:Y.ERROR,descricao:`\xDAltimo dispositivo de uma sequ\xEAncia deveria terminar com ${Kt(o.INDICADOR_FIM_SEQUENCIA)}`}),G(o)||!Ri(o)||he(o)||!o.texto||ge(o)||!Ol(o)||Be(o)||Yo(o)||t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria terminar com uma das seguintes possibilidades: ${o.INDICADOR_SEQUENCIA.join("     ")}`}),G(o)||!V(o)&&!he(o)||!o.texto||Be(o)||o.hasAlteracao()||ge(o)||Yo(o)||ql(o.texto)||t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria terminar com ${Kt(o.INDICADOR_SEQUENCIA)}`}),!G(o)&&V(o)&&o.texto&&o.hasAlteracao()&&!gt(o)&&!Zu(o.texto)&&t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria terminar com ${Kt(o.INDICADOR_DESDOBRAMENTO)}`}),G(o)||!V(o)||!o.texto||o.hasAlteracao()||Be(o)&&Be(o.caput)||!gt(o)||t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria terminar com ${Kt(o.INDICADOR_SEQUENCIA)}`}),!G(o)&&V(o)&&o.hasAlteracao()&&!(!((e=o.alteracoes)===null||e===void 0)&&e.base)&&t.push({tipo:Y.ERROR,descricao:"\xC9 necess\xE1rio informar a norma a ser alterada"}),G(o)&&!de(o)&&o.texto!==yt&&o.texto&&(!V(o)&&Be(o)||V(o)&&Be(o.caput))&&!gt(o)&&t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria terminar com ${Kt(o.INDICADOR_DESDOBRAMENTO)}`}),!(G(o)&&he(o)&&o.texto)||Be(o)||ge(o)||Fe(o)||Yo(o)||t.push({tipo:Y.ERROR,descricao:`${o.descricao} deveria terminar com ${Kt(o.INDICADOR_SEQUENCIA)}`}),!G(o)||!_t(o)||o.texto&&Xu(o.texto)||t.push({tipo:Y.ERROR,descricao:"O \xFAltimo dispositivo do bloco de altera\xE7\xE3o deve terminar com: <b>.&#8221; (NR)</b>"}),G(o)&&o.texto&&!_t(o)&&/.*["”“]$/.test(o.texto)&&!ql(o.texto)&&!/”.*(NR)/.test(o.texto)&&t.push({tipo:Y.ERROR,descricao:"Somente o \xFAltimo dispositivo do bloco de altera\xE7\xE3o poderia ser finalizado com aspas"}),G(o)&&o.texto&&!_t(o)&&/”.*(NR)/.test(o.texto)&&t.push({tipo:Y.ERROR,descricao:"Somente o \xFAltimo dispositivo do bloco de altera\xE7\xE3o poderia terminar com &#8221; (NR)"}),G(o)&&o.texto&&o===ga(o)&&o.filhos.length===0&&(o.texto===$r||o.texto===yt)&&t.push({tipo:Y.ERROR,descricao:"N\xE3o foi informada nenhuma altera\xE7\xE3o"}),!(G(o)&&o.texto&&Ri(o))||he(o)||Ee(o)||o.pai.filhos.filter(i=>Ee(i)).length!==0||!ge(o)||_l(o.pai)||Be(o)||yn(o)||_t(o)||t.push({tipo:Y.ERROR,descricao:`\xDAltimo dispositivo de uma sequ\xEAncia deveria terminar com ${Kt(o.INDICADOR_FIM_SEQUENCIA)}`}),t},nf=o=>de(o)?(e=>{const t=[];var i,r;return Oe(e)||e.texto&&e.texto.trim().length!==0||t.push({tipo:Y.ERROR,descricao:`N\xE3o foi informado um texto para ${e.artigoDefinido} ${e.descricao}`}),!Oe(e)&&e.texto&&(i=e.texto,/[.,:]\s*$/.test(i))&&t.push({tipo:Y.ERROR,descricao:`N\xE3o pode haver sinal de pontua\xE7\xE3o ao final do texto d${e.artigoDefinido} ${e.descricao}`}),!Oe(e)&&(r=e.texto,/<.+>/g.test(r==null?void 0:r.trim()))&&t.push({tipo:Y.ERROR,descricao:`Texto d${e.artigoDefinido} ${e.descricao} n\xE3o pode possuir formata\xE7\xE3o`}),t})(o):rf(o);var Sl;function ir(o){return class extends o{constructor(){super(...arguments),this.tipoGenero="feminino",this.artigoDefinido="a",this.pronomePossessivoSingular=" da ",this.pronomePossessivoPlural=" das ",this.artigoDefinidoSingular=" a ",this.artigoDefinidoPlural=" as ",this.artigoIndefinidoSingular=" uma ",this.artigoDefinidoPrecedidoPreposicaoASingular=" \xE0 ",this.artigoDefinidoPrecedidoPreposicaoAPlural=" \xE0s ",this.contracaoEmArtigoDefinidoSingular=" na "}}}function Dn(o){return class extends o{constructor(){super(...arguments),this.tipoGenero="indefinido",this.artigoDefinido="",this.pronomePossessivoSingular="",this.pronomePossessivoPlural="",this.artigoDefinidoSingular="",this.artigoDefinidoPlural="",this.artigoIndefinidoSingular="",this.artigoDefinidoPrecedidoPreposicaoASingular="",this.artigoDefinidoPrecedidoPreposicaoAPlural="",this.contracaoEmArtigoDefinidoSingular=""}}}function ho(o){return class extends o{constructor(){super(...arguments),this.tipoGenero="masculino",this.artigoDefinido="o",this.pronomePossessivoSingular=" do ",this.pronomePossessivoPlural=" dos ",this.artigoDefinidoSingular=" o ",this.artigoDefinidoPlural=" os ",this.artigoIndefinidoSingular=" um ",this.artigoDefinidoPrecedidoPreposicaoASingular=" ao ",this.artigoDefinidoPrecedidoPreposicaoAPlural=" aos ",this.contracaoEmArtigoDefinidoSingular=" no "}}}(function(o){o.MASCULINO="masculino",o.FEMININO="feminino",o.INDEFINIDO="indefinido"})(Sl||(Sl={}));const Yu=new(ir(Object)),Ju=new(ho(Object)),sf=new(Dn(Object)),ba=o=>o==="F"?Yu:o==="M"?Ju:sf;class af{constructor(e,t){this.nome=e,this.genero=typeof t=="string"?ba(t):t}}const ed={autoridades:[{urn:"federal",descricao:"Federal"},{urn:"senado.federal",descricao:"Senado Federal"},{urn:"congresso.nacional",descricao:"Congresso Nacional"}],tiposDocumento:[{urn:"lei",descricao:"Lei",genero:"F"},{urn:"lei.complementar",descricao:"Lei Complementar",genero:"F"},{urn:"lei.delegada",descricao:"Lei Delegada",genero:"F"},{urn:"decreto.legislativo",descricao:"Decreto Legislativo",genero:"M"},{urn:"decreto.lei",descricao:"Decreto-Lei",genero:"M"},{urn:"decreto",descricao:"Decreto",genero:"M"},{urn:"consolidacao.leis.trabalho",descricao:"Consolida\xE7\xE3o das Leis do Trabalho",genero:"F"},{urn:"resolucao",descricao:"Resolu\xE7\xE3o",genero:"F"},{urn:"regimento.interno",descricao:"Regimento Interno",genero:"M"},{urn:"constituicao",descricao:"Constitui\xE7\xE3o",genero:"F"},{urn:"ato.disposicoes.constitucionais.transitorias",descricao:"Ato das Disposi\xE7\xF5es Constitucionais Transit\xF3rias",genero:"M"},{urn:"medida.provisoria",descricao:"Medida Provis\xF3ria",genero:"F"},{urn:"medida.provisoria;mpv",descricao:"Medida Provis\xF3ria",genero:"F"},{urn:"emenda.constitucional",descricao:"Emenda Constitucional",genero:"F"},{urn:"emenda.constitucional.revisao",descricao:"Emenda Constitucional de Revis\xE3o",genero:"F"},{urn:"proposta.emenda.constitucional;pec",descricao:"Proposta de Emenda Constitucional",genero:"F"},{urn:"projeto.lei;pl",descricao:"Projeto de Lei",genero:"M"},{urn:"projeto.lei;pls",descricao:"Projeto de Lei do Senado",genero:"M"},{urn:"projeto.lei.complementar;plp",descricao:"Projeto de Lei Complementar",genero:"M"},{urn:"projeto.lei.complementar;pls",descricao:"Projeto de Lei Complementar do Senado",genero:"M"},{urn:"projeto.lei;plc",descricao:"Projeto de Lei da C\xE2mara",genero:"M"},{urn:"projeto.lei.complementar;plc",descricao:"Projeto de Lei Complementar da C\xE2mara",genero:"M"},{urn:"projeto.lei.conversao;plv",descricao:"Projeto de Lei de Convers\xE3o",genero:"M"},{urn:"projeto.resolucao;prs",descricao:"Projeto de Resolu\xE7\xE3o do Senado",genero:"M"},{urn:"projeto.decreto.legislativo;pds",descricao:"Projeto de Decreto Legislativo",genero:"M"},{urn:"projeto.decreto.legislativo;pdl",descricao:"Projeto de Decreto Legislativo",genero:"M"},{urn:"substitutivo.projeto.lei.senado;scd",descricao:"Substitutivo da C\xE2mara dos Deputados",genero:"M"},{urn:"emenda.projeto.lei.senado;ecd",descricao:"Emenda(s) da C\xE2mara dos Deputados",genero:"F"}],fakeUrns:[{sigla:"PEC",urnAutoridade:"senado.federal",urnTipoDocumento:"proposta.emenda.constitucional;pec"},{sigla:"PL",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei;pl"},{sigla:"PLS",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei;pls"},{sigla:"PLP",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei.complementar;plp"},{sigla:"PLC",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei;plc"},{sigla:"PLV",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei.conversao;plv"},{sigla:"PRS",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.resolucao;prs"},{sigla:"PDS",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.decreto.legislativo;pds"},{sigla:"PDL",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.decreto.legislativo;pdl"},{sigla:"SCD",urnAutoridade:"senado.federal",urnTipoDocumento:"substitutivo.projeto.lei.senado;scd"},{sigla:"ECD",urnAutoridade:"senado.federal",urnTipoDocumento:"emenda.projeto.lei.senado;ecd"},{sigla:"MPV",urnAutoridade:"senado.federal",urnTipoDocumento:"medida.provisoria;mpv"}],siglas:[{urnAutoridade:"federal",urnTipoDocumento:"medida.provisoria",sigla:"MPV"},{urnAutoridade:"congresso.nacional",urnTipoDocumento:"projeto.lei",sigla:"PLN"},{urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei",sigla:"PLS"},{urnAutoridade:"congresso.nacional",urnTipoDocumento:"medida.provisoria",sigla:"MPV"},{urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei.senado.federal",sigla:"PLS"},{urnAutoridade:"camara.deputados",urnTipoDocumento:"projeto.lei",sigla:"PLC"}],atalhosUrn:[{urnTipoDocumento:"constituicao",urnAutoridade:"federal",urn:"urn:lex:br:federal:constituicao:1988-10-05;1988",nome:"Constitui\xE7\xE3o Federal"},{urnTipoDocumento:"ato.disposicoes.constitucionais.transitorias",urnAutoridade:"federal",urn:"urn:lex:br:federal:ato.disposicoes.constitucionais.transitorias:1988-10-05;1988",nome:"Ato das Disposi\xE7\xF5es Constitucionais Transit\xF3rias - ADCT"},{urnTipoDocumento:"consolidacao.leis.trabalho",urnAutoridade:"federal",urn:"urn:lex:br:federal:decreto.lei:1943-05-01;5452",nome:"Consolida\xE7\xE3o das Leis do Trabalho - CLT, aprovada pelo Decreto-Lei n\xBA 5.452, de 1\xBA de maio de 1943",genero:"F"},{urnTipoDocumento:"regimento.interno",urnAutoridade:"senado.federal",urn:"urn:lex:br:senado.federal:resolucao:1970-11-27;93",nome:"Regimento Interno do Senado Federal",genero:"M"},{urnTipoDocumento:"regimento.interno",urnAutoridade:"congresso.nacional",urn:"urn:lex:br:congresso.nacional:resolucao:1970-08-11;1",nome:"Regimento Comum do Congresso Nacional",genero:"M"}],eventos:[{urn:"leitura",tipoTextoProcessoLegislativo:"Texto inicial",genero:"M"},{urn:"aprovacao.substitutivo.decisao.terminativa",tipoTextoProcessoLegislativo:"Reda\xE7\xE3o do vencido em turno suplementar na Comiss\xE3o",substitutivo:"s",genero:"F"},{urn:"aprovacao.substitutivo",tipoTextoProcessoLegislativo:"Reda\xE7\xE3o do vencido em turno suplementar no Plen\xE1rio",substitutivo:"s",genero:"F"},{urn:"apresentacao.substitutivo",tipoTextoProcessoLegislativo:"Texto do substitutivo",substitutivo:"s",genero:"M"}]},mi=o=>{var e;const t=(e=o.replace("urn:lex:br:",""))===null||e===void 0?void 0:e.split(":");return ed.tiposDocumento.filter(i=>i.urn===t[1])[0]},Rn=o=>{var e,t,i;const r=(e=o.replace("urn:lex:br:",""))===null||e===void 0?void 0:e.split(":");return((t=r[2])===null||t===void 0?void 0:t.indexOf(";"))>-1?(i=r[2])===null||i===void 0?void 0:i.substring(r[2].indexOf(";")+1):""},zi=o=>{var e,t,i,r,n;const s=(e=o.replace("urn:lex:br:",""))===null||e===void 0?void 0:e.split(":"),p=(t=s[2])===null||t===void 0?void 0:t.substring(0,s[2].indexOf(";"));if(/\d{4}$/.test(p))return p;const u=(n=(r=(i=s[2])===null||i===void 0?void 0:i.substring(0,s[2].indexOf(";")))===null||r===void 0?void 0:r.split("-"))===null||n===void 0?void 0:n.reverse();return u?u.join("/"):""},td=o=>{const e=o.indexOf("!");return e!==-1?o.substring(0,e):o},od=o=>{const e=o.match(/^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](\d{4})$/);return e?`${e[3]}-${e[2]}-${e[1]}`:""},id=o=>{var e,t;const i=(e=(p=>{var u;const d=(u=p.replace("urn:lex:br:",""))===null||u===void 0?void 0:u.split(":");return ed.autoridades.filter(c=>c.urn===d[0])[0]})(o))===null||e===void 0?void 0:e.urn,r=(t=mi(o))===null||t===void 0?void 0:t.urn,n=/^\d{1,5}$/.test(Rn(o)),s=/\d{4}$/.test(zi(o))?zi(o):od(zi(o));return(o==null?void 0:o.startsWith("urn:lex:br:"))&&i&&r&&n&&s},xn=o=>{var e;const t=td(o),i=Rn(t),r=(e=mi(t))===null||e===void 0?void 0:e.descricao,n=zi(t),[s,p,u]=n.split("/").map(c=>parseInt(c)),d=n.length>7?lf(new Date(u,p-1,s)):void 0;return(r||"")+(i?" n\xBA "+parseInt(i).toLocaleString("pt-BR"):"")+(d?", de "+d:"")},lf=o=>o?o.getDate()+" de "+o.toLocaleDateString("pt-BR",{month:"long"})+" de "+o.getFullYear():void 0,as={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XV:40,X:10,IX:9,V:5,IV:4,I:1},No=o=>/^\d{1,}([-]?[a-zA-Z]+)?$/.test(o),rd=o=>/^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/i.test(o),nd=o=>{if(!/[a-zA-Z]+/.test(o))throw new Error(`O valor ${o} n\xE3o \xE9 uma sequ\xEAncia de letras v\xE1lida.`);o=o.toLowerCase();let e=0;return[...o].forEach(t=>e=t.toLowerCase().charCodeAt(0)-97+1+26*e),e.toString()},Ls=o=>{const e=parseInt(o);return e?Ms(e):o},Ms=o=>{let e="",t=0;for(;o>0;)t=(o-1)%26,o=(o-t-1)/26,e=e.replace(/^/,String.fromCharCode(97+t));return e},sd=o=>{if(!rd(o))throw new Error("O valor '"+o+"' n\xE3o \xE9 um n\xFAmero em algarismo romano v\xE1lido.");let e=0,t=1;for(let i=(o=o.toLowerCase()).length-1;i>=0;i--){const r=cf(o.charAt(i));r>t&&(t=r),r<t?e-=r:e+=r}return e.toString()},cf=o=>{switch(o.toLowerCase()){case"i":return 1;case"v":return 5;case"x":return 10;case"l":return 50;case"c":return 100;case"d":return 500;case"m":return 1e3;default:return 0}},xr=o=>{let e,t="",i=o.search(/[a-zA-Z-]/)===-1?parseInt(o):parseInt(o.substring(0,o.search(/[a-zA-Z-]/)));const r=o.search(/[a-zA-Z-]/)===-1?"":o.substring(o.search(/[a-zA-Z-]/));for(const n in as){if(e=Math.floor(i/as[n]),e>=0)for(let s=0;s<e;s++)t+=n;i%=as[n]}return t+r},Pt=(o,e)=>{const t=o.search(/-[a-zA-Z-]/)===-1?o:o.substring(0,o.search(/-[a-zA-Z-]/)),i=o.search(/-[a-zA-Z-]/)===-1?"":o.substring(o.search(/-[a-zA-Z-]/));return(e?e(t):t)+(i==null?void 0:i.toUpperCase())},Il=(o,e)=>{const t=o==null?void 0:o.split("-"),i=e==null?void 0:e.split("-"),[r,...n]=t,[s,...p]=i;if(!r||s&&parseInt(r)<parseInt(s))return 1;if(!s||r&&parseInt(r)>parseInt(s))return-1;if(o&&e&&e.includes(o))return 1;for(let u=0;u<(n==null?void 0:n.length);u++)for(let d=0;u<(p==null?void 0:p.length);u++){if(n[u]>p[d])return-1;if(n[u]<p[d]||n.length>u+1&&p.length===d+1||n.length===u+1&&p.length<d+1)return 1}return 0},uf=o=>{var e;return(V(o)?(e=(t=>{const i=Pe(t).indexOfArtigo(t);return i===-1||Pe(t).artigos.length===i+1?[]:Pe(t).artigos.filter((r,n)=>n>i)})(o))!==null&&e!==void 0?e:[]:ma(o)).filter(t=>fi(t)).length>0},df=o=>{let e=0;const t=o.tipo;do(fi(o)||Qu(o))&&o.tipo===t&&e++,o=V(o)?Gr(o.pai,o):Me(o);while(o!==void 0);return e},pf=o=>{let e=0;const t=o.tipo;for(;o!==void 0&&!fi(o)&&!Qu(o)&&o.tipo===t;)e++,o=V(o)?Gr(o.pai,o):Me(o);return e},Ln=o=>(e=>{const t=df(e);if(fi(e))return new lr(t);const i=pf(e),r=t>0,n=uf(e);if(!r&&!n)return new lr(i);if(!r&&n){const s=new lr(0);return s.addNovoSeqOrdem(i),s}if(r&&n){const s=new lr(t);return s.addNovoSeqOrdem(i),s}return new lr(t+i)})(o).getNumeracao(Uu(o));class lr{constructor(e){this.seq=e}addNovoSeqOrdem(e){this.seq>0?this.letras=Ms(e).toUpperCase():e>1&&(this.letras=Ms(e-1).toUpperCase())}getNumeracao(e){var t;return this.seq+(e&&this.letras?"-":"")+((t=this.letras)!==null&&t!==void 0?t:"")}}const hf=o=>G(o)?(e=>{var t,i,r,n,s,p,u;const d=[];return e===null&&d.push({tipo:Y.ERROR,descricao:"O dispositivo n\xE3o foi informado"}),e!==null&&e.numero!==void 0&&e.numero.trim().length===0&&d.push({tipo:Y.ERROR,descricao:"O dispositivo n\xE3o cont\xE9m numera\xE7\xE3o"}),e!==null&&((t=e.rotulo)===null||t===void 0?void 0:t.trim().length)===0&&d.push({tipo:Y.ERROR,descricao:"O dispositivo n\xE3o cont\xE9m r\xF3tulo"}),e!==null&&!to(e)&&((i=e.rotulo)===null||i===void 0?void 0:i.endsWith(e.tipo))&&d.push({tipo:Y.ERROR,descricao:"O r\xF3tulo informado n\xE3o \xE9 v\xE1lido. Numere o dispositivo"}),e!==null&&G(e)&&he(e)&&!ge(e)&&((r=e.rotulo)===null||r===void 0?void 0:r.endsWith("\xFAnico."))&&d.push({tipo:Y.ERROR,descricao:`Quando houver mais de um ${e.descricao}, n\xE3o pode se tratar de '${e.descricao} \xFAnico'`}),e===null||Ot(e)||e.numero===void 0||((n=e.pai)===null||n===void 0?void 0:n.indexOf(e))!==0||e.numero==="1"||d.push({tipo:Y.ERROR,descricao:"\xC9 necess\xE1rio um omissis antes deste dispositivo"}),e===null||!Ee(e)||((s=Me(e))===null||s===void 0?void 0:s.tipo)!==D.omissis.name&&((p=jr(e))===null||p===void 0?void 0:p.tipo)!==D.omissis.name||d.push({tipo:Y.ERROR,descricao:"N\xE3o pode haver mais de um omissis sequencialmente"}),e!==null&&e.numero!==void 0&&e.pai.indexOf(e)>0&&fa(e).filter(c=>c.numero!==void 0).filter(c=>c!==e).filter(c=>e.numero!==c.numero&&Il(e.numero,c.numero)===1).length>0&&d.push({tipo:Y.ERROR,descricao:"O dispositivo tem n\xFAmero menor ao de algum dispositivo anterior"}),e!==null&&e.numero!==void 0&&!e.pai.isLastFilho(e)&&Ku(e).filter(c=>c!==e&&e.pai===c.pai&&c.numero!==void 0).filter(c=>Il(c.numero,e.numero)===1).length>0&&d.push({tipo:Y.ERROR,descricao:"O dispositivo tem n\xFAmero maior do que algum dispositivo posterior"}),e!==null&&!Ot(e)&&e.numero!==void 0&&nt(e).filter(c=>c.numero&&c.numero===e.numero).length>1&&d.push({tipo:Y.ERROR,descricao:"O dispositivo tem n\xFAmero igual ao de outro dispositivo"}),e!==null&&!Ot(e)&&e.numero!==void 0&&e.pai.indexOf(e)>0&&oo(e)&&e.tipo!==((u=oo(e))===null||u===void 0?void 0:u.rotulo)&&parseInt(e.numero)!==parseInt(oo(e).numero)+1&&d.push({tipo:Y.ERROR,descricao:"\xC9 necess\xE1rio um omissis antes deste dispositivo"}),d})(o):(e=>{const t=[];return e===null&&t.push({tipo:Y.ERROR,descricao:"O dispositivo n\xE3o foi informado"}),e!==null&&e.numero&&e.numero.trim().length===0&&t.push({tipo:Y.ERROR,descricao:"O dispositivo n\xE3o cont\xE9m numera\xE7\xE3o"}),e!==null&&e.rotulo&&e.rotulo.trim().length===0&&t.push({tipo:Y.ERROR,descricao:"O dispositivo n\xE3o cont\xE9m r\xF3tulo"}),t})(o),De=o=>fi(o)?[]:(e=>{const t=[];if(e===null&&t.push({tipo:Y.ERROR,descricao:"O dispositivo n\xE3o foi informado"}),e!==null&&e.filhos.length>0&&e.tiposPermitidosFilhos.length===0&&t.push({tipo:Y.ERROR,descricao:`Segundo a Legisla\xE7\xE3o vigente, ${e.descricao} n\xE3o poderia possuir filhos`}),e!==null&&(to(e)||El(e))&&t.push({tipo:Y.ERROR,descricao:"N\xE3o foi poss\xEDvel validar a natureza deste dispositivo com base na legisla\xE7\xE3o vigente"}),e===null||!e.pai||El(e.pai)||to(e)||e.tiposPermitidosPai.includes(e.pai.tipo)||t.push({tipo:Y.ERROR,descricao:`Segundo a Legisla\xE7\xE3o vigente, ${e.descricao} somente poderia pertencer a ${e.tiposPermitidosPai.join(", ")}`}),e!==null&&!to&&e.filhos.length>0&&(e.tiposPermitidosFilhos.length===0||e.filhos.filter(i=>!e.tiposPermitidosFilhos.includes(i.tipo)).length>0)){const i=e.tiposPermitidosFilhos.length===0?"n\xE3o poderia possuir filhos":`somente poderia possuir ${e.tiposPermitidosFilhos.join(", ")}`;t.push({tipo:Y.ERROR,descricao:`Segundo a Legisla\xE7\xE3o vigente, ${e.descricao} ${i}`})}return t})(o).concat(nf(o),hf(o),(e=>{const t=[];return e.alteracoes&&e.alteracoes.base?(id(e.alteracoes.base)||t.push({tipo:Y.ERROR,descricao:"N\xE3o foi informada uma norma alterada v\xE1lida"}),t):[]})(o));class Ur{constructor(e){this.descricaoSituacao=j.DISPOSITIVO_SUPRIMIDO,this.dispositivoOriginal=e}getAcoesPermitidas(e,t){const i=[];return(pt(e)?e.pai.pai:e.pai).situacao.descricaoSituacao!==j.DISPOSITIVO_SUPRIMIDO&&i.push(ua),i}}const wr=o=>Oe(o)?"cpt_alt1":o.tagId?o.tagId+(fe(o)?"":Ee(o)?fa(o).length+1:o.numero?(V(o)||he(o))&&o.numero==="1"&&ge(o)?"1u":(e=>{const t=e==null?void 0:e.split("-"),[i,...r]=t,n=r.map(s=>nd(s));return(n==null?void 0:n.length)>0?i+"-"+(n==null?void 0:n.join("-").toUpperCase()):i})(o.numero):`[urn:${o.uuid}]`):void 0,wn=(o,e=[])=>{if(Oe(o)&&o.pai===void 0)return;const t=wr(o);if(t&&e.unshift(t),V(o)){if(G(o)){const i=Pe(o);wn(i,e)}}else wn(o.pai,e)},Co=o=>{const e=[];return wn(o,e),e.join("_")},js=o=>{var e,t;return((t=(e=o.hierarquia)===null||e===void 0?void 0:e.pai)===null||t===void 0?void 0:t.uuidAlteracao)!==void 0||o.uuidAlteracao!==void 0},ad=(o,e=0)=>(o==null?void 0:o.pai)===void 0||de(o)?e:V(o)?G(o)?++e:e:(e=Ot(o==null?void 0:o.pai)?e+2:++e,V(o==null?void 0:o.pai)?e:ad(o.pai,e)),ff=o=>{var e;const t=o.pai?fe(o.pai)?o.pai.pai:o.pai:void 0;return{tipo:t==null?void 0:t.tipo,uuid:t==null?void 0:t.uuid,uuidAlteracao:t&&G(o)?(e=Pe(o).pai)===null||e===void 0?void 0:e.uuid:void 0}},Z=(o,e=!0)=>{var t,i,r;const n=o.pai;return{tipo:o.tipo,nivel:ad(o),agrupador:de(o),hierarquia:{pai:n?ff(o):void 0,posicao:n?n.indexOf(o):void 0,numero:o.numero},editavel:!(Oe(o)||o.situacao instanceof Ur),sendoEditado:!1,uuid:o.uuid,lexmlId:o.id&&o.numero&&wr(o),numero:o.numero,rotulo:(t=o.rotulo)!==null&&t!==void 0?t:"",conteudo:{texto:o.texto},norma:(i=o.alteracoes)===null||i===void 0?void 0:i.base,existeNaNormaAlterada:o.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO?o.situacao.existeNaNormaAlterada:void 0,index:0,acoesPossiveis:e?o.getAcoesPossiveis(o):[],descricaoSituacao:(r=o.situacao)===null||r===void 0?void 0:r.descricaoSituacao,mensagens:fi(o)?[]:o.mensagens}},Fr=(o,e)=>{e.filhos!==void 0&&e.filhos.forEach(t=>{var i;const r=Z(t);V(t)&&(r.conteudo.texto=t.caput.texto),o.push(r),V(t)&&t.hasAlteracao()&&((i=t.alteracoes)===null||i===void 0||i.filhos.forEach(n=>{o.push(Z(n)),Fr(o,n)})),Fr(o,t)})},ht=o=>{var e;const t=[];return t.push(Z(o,!0)),V(o)&&o.hasAlteracao()&&V(o)&&o.hasAlteracao()&&((e=o.alteracoes)===null||e===void 0||e.filhos.forEach(i=>{t.push(Z(i)),Fr(t,i)})),Fr(t,o),t},Ie=(o,e,t=!1)=>{var i;const r=((s,p)=>{var u,d;return!js(p)||Le(s)?s:(d=(u=Ie(s,{uuid:p.hierarquia?p.hierarquia.pai.uuidAlteracao:p.uuidAlteracao}))===null||u===void 0?void 0:u.alteracoes)!==null&&d!==void 0?d:s})(o,e);if(!t&&js(e)){const s=Ie(r,{uuid:e.hierarquia?e.hierarquia.pai.uuidAlteracao:e.uuidAlteracao});return s!=null&&s.alteracoes?(i=s.alteracoes)===null||i===void 0?void 0:i.filhos.flatMap(p=>{const u=[];return Oo(p,u),u}).filter(p=>p.uuid===e.uuid)[0]:void 0}if((e==null?void 0:e.tipo)===D.artigo.tipo){const s=r.filhos.find(p=>p.uuid===e.uuid);if(s)return s}const n=(e==null?void 0:e.tipo)===D.articulacao.tipo||(e==null?void 0:e.uuid)===void 0?r:un(r,e.uuid);if(n!==null)return n},Ai=(o,e,t)=>{var i;const r=De(e);if(r.length>0||e.mensagens&&((i=e.mensagens)===null||i===void 0?void 0:i.length)>0){e.mensagens=r;const n=Z(e,t);n.mensagens=De(e),o.push(n)}},Qr=(o,e=!0)=>{const t=[];if(!o)return[];if(G(o)&&Be(o)&&o.filhos.filter(i=>i.tipo===D.omissis.tipo).length>0&&(Ai(t,o),o.filhos.filter(i=>i.tipo===D.omissis.tipo).forEach(i=>Ai(t,i))),Ri(o)||to(o)){const i=pt(o)?o.pai.pai:o.pai;Ai(t,i),de(i)&&Ai(t,pt(o)?o.pai.pai:o.pai),nt(o).forEach(r=>{(e||r!==o)&&Ai(t,r,!0)})}else!e||Oe(o)||de(o)||Ai(t,o,!0);return t},ui=o=>(V(o)||he(o))&&nt(o).length<=2?nt(o).filter(e=>o.uuid!==e.uuid):Ku(o,!0).filter(e=>e.tipo===o.tipo),ld=o=>ui(o).map(e=>(e.mensagens=De(e),Z(e)));var M;(function(o){o.ArticulacaoAtualizada="ArticulacaoAtualizada",o.ComandoEmendaGerado="ComandoEmendaGerado",o.DocumentoCarregado="DocumentoCarregado",o.InformarNorma="InformarNorma",o.ElementoModificado="ElementoModificado",o.ElementoIncluido="ElementoIncluido",o.ElementoRemovido="ElementoRemovido",o.ElementoRenumerado="ElementoRenumerado",o.ElementoRestaurado="ElementoRestaurado",o.ElementoSuprimido="ElementoSuprimido",o.ElementoValidado="ElementoValidado",o.ElementoSelecionado="ElementoSelecionado",o.ElementoMarcado="ElementoMarcado",o.SituacaoElementoModificada="SituacaoElementoModificada"})(M||(M={}));const mf=(o,e)=>((t,i)=>{const r=ht(t);return{articulacao:t,modo:i,past:[],present:[],future:[],ui:{events:[{stateType:M.DocumentoCarregado,elementos:r}]}}})(e.articulacao,e.classificacao),ya=function(o=0){return{next:()=>++o}}();function st(o){return class extends o{constructor(){super(...arguments),this.mensagens=[]}}}class cd{constructor(e){this.tipoAcao=e,this.isDispositivoAlteracao=!0,this.descricao=e==="INICIAR_BLOCO"?"Inserir bloco de altera\xE7\xE3o":"Finalizar bloco de altera\xE7\xE3o"}execute(e,t,i,r=!1){return{type:"ADICIONAR_ELEMENTO",subType:this.tipoAcao,atual:e,novo:{tipo:i,isDispositivoAlteracao:this.isDispositivoAlteracao,conteudo:{texto:t}},hasDesmembramento:r}}}const ao=new cd("INICIAR_BLOCO"),Mo=new cd("FINALIZAR_BLOCO");function at(o){return class extends o{get alteracoes(){}hasAlteracao(){return!1}}}var En,vt;function ft(o){return class extends o{constructor(){super(...arguments),this.tipoConteudo=En.ConteudoTexto,this.texto=""}}}function jo(o){return class extends o{addFilho(e,t){if(t&&this.filhos.indexOf(t)>=0){const i=this.filhos.indexOf(t)+1;this.isLastFilho(t)?this.filhos.push(e):this.filhos.splice(i,0,e)}else this.filhos.push(e);V(e)&&Pe(e).addArtigo(e,t)}addFilhoOnPosition(e,t){var i;if(this.filhos.splice(t,0,e),V(e)){const r=(i=Me(e))!==null&&i!==void 0?i:Gr(e.pai.pai,e.pai),n=Pe(e),s=r?n.indexOfArtigo(r)+1:0;n.addArtigoOnPosition(e,s)}}hasArtigos(){return this.filhos.filter(e=>V(e)).length>0}isLastFilho(e){return this.filhos.indexOf(e)===this.filhos.length-1}get filhos(){var e;return this._filhos=(e=this._filhos)!==null&&e!==void 0?e:[],this._filhos}indexOf(e){return this.filhos.indexOf(e)}removeFilho(e){this._filhos=this.filhos.filter(t=>t.uuid!==e.uuid),V(e)&&Pe(e).removeArtigo(e)}renumeraFilhos(){var e;this.filhos.filter(t=>!V(t)).forEach(t=>{t.numero=Ln(t),t.createRotulo(t),t.id=Co(t)}),(e=Pe(this.filhos[0]))===null||e===void 0||e.renumeraArtigos()}}}function vi(o){return class extends o{addFilho(e,t){if(t){const i=this.filhos.indexOf(t)+1;this.isLastFilho(t)?this.filhos.push(e):this.filhos.splice(i,0,e)}else this.filhos.push(e)}addFilhoOnPosition(e,t){this.filhos.splice(t,0,e)}hasArtigos(){return this.filhos.filter(e=>V(e)).length>0}isLastFilho(e){return this.filhos.indexOf(e)===this.filhos.length-1}get filhos(){var e;return this._filhos=(e=this._filhos)!==null&&e!==void 0?e:[],this._filhos}indexOf(e){return this.filhos.indexOf(e)}removeFilho(e){this._filhos=this.filhos.filter(t=>t.uuid!==e.uuid)}renumeraFilhos(){this.filhos.forEach(e=>{G(e)&&Gu(e)||e.situacao.descricaoSituacao===j.DISPOSITIVO_NOVO||e.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO?(e.numero=Ln(e),e.createRotulo(e),e.id=Co(e)):e.createRotulo(e)})}}}function $o(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoAgrupadorLcp95",this.informouAgrupadorUnico=!1}getNomeAgrupadorUnico(e){return`${e.descricao} \xFAnic${e.artigoDefinido}`.toLocaleUpperCase()}normalizaNumeracao(e){const t=e.trim().split(/\s+/);if(t.length!==2)return"";const i=t[1].split("-");return rd(i[0])?(i[0]=sd(i[0]),i.join("-")):""}createNumeroFromRotulo(e){if(e)if(this.informouAgrupadorUnico=/.*[uú]nic[ao]/i.test(e),this.informouAgrupadorUnico)this.numero="1";else{const t=this.normalizaNumeracao(e);this.numero=this.informouAgrupadorUnico?"1":No(t)?t:void 0}}createRotulo(e){var t;const i=e.descricao===void 0?(t=e.name)!==null&&t!==void 0?t:"":e.descricao.toLocaleUpperCase();this.numero===void 0?this.rotulo=Ot(e)?"\u201C"+e.tipo:e.tipo:this.numero===void 0||No(this.numero)?e.isDispositivoAlteracao&&Ot(e)?this.rotulo="\u201C"+(this.informouAgrupadorUnico?this.getNomeAgrupadorUnico(e):i+" "+Pt(this.numero,xr)):nt(e).length===1?this.rotulo=this.getNomeAgrupadorUnico(e):this.rotulo=i+" "+Pt(this.numero,xr):this.rotulo=i+" "+this.numero}getNumeracaoParaComandoEmenda(){const e=new Ce,t=this.numero?Pt(this.numero,xr):"???";e.append(this.descricao+" "+t);const i=this.pai;return i&&!ri(i)&&(e.append(i.pronomePossessivoSingular),e.append(" "),e.append(i.getNumeracaoParaComandoEmenda())),e.toString()}getNumeracaoComRotuloParaComandoEmenda(){return this.getNumeracaoParaComandoEmenda()}}}(function(o){o.ConteudoTexto="Conte\xFAdo de Texto"})(En||(En={})),function(o){o.EMENDA="emenda",o.EMENDA_ARTIGO_ONDE_COUBER="emendaArtigoOndeCouber",o.NORMA="norma",o.PROJETO="projeto"}(vt||(vt={}));const te=[];te.push(ca),te.push(Ro),te.push(Lo),te.push(jt),te.push(ao),te.push(Mo),te.push(Eu),te.push(Au),te.push(_u),te.push(Ou),te.push(Ds),te.push(Tr),te.push(Dr),te.push(qu),te.push(Su),te.push(Xh),te.push(Yh),te.push(Jh),te.push(Rr),te.push(Du),te.push(Lr),te.push(Iu),te.push(ku),te.push(Pu),te.push(Nu),te.push(Cu),te.push(Tu),te.push(Ru),te.push(Lu),te.push(Mu),te.push(zt),te.push(ua),te.push(wu),te.push($u),te.push(Fh),te.push(zh),te.push(Bh),te.push(Ts),te.push(Vh),te.push(Hh),te.push(nu),te.push(su),te.push(au),te.push(lu),te.push(cu),te.push(uu),te.push(pu),te.push(hu),te.push(vu),te.push(gu);const Go=[];Go.push(aa),Go.push(ru),Go.push(la),Go.push(Nn),Go.push(du),Go.push(mu);const vf=o=>te.includes(o),xa=[...te,...Go,ju],Bi=o=>xa.filter(e=>e instanceof uo&&e.tipo===o)[0];function Uo(o){return class extends o{getAcoesPossiveis(e){var t,i,r,n;const s=[];if(!de(e))return[];if(fa(e).length===0&&ma(e).length>0&&e.filhos.filter(p=>de(p)).length>0||s.push(zt),e.pai&&Oe(e.pai)&&de(e.pai)&&oo(e)===void 0){const p=(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.indexOf(e.pai.tipo);(i=e.tiposPermitidosPai)===null||i===void 0||i.filter((u,d)=>d>p).forEach(u=>s.push(Bi(u)))}if(e.pai&&!Oe(e.pai)&&de(e.pai)&&e.pai.indexOf(e)===0){const p=(r=e.tiposPermitidosPai)===null||r===void 0?void 0:r.indexOf(e.pai.tipo);(n=e.tiposPermitidosPai)===null||n===void 0||n.filter((u,d)=>d>p).forEach(u=>s.push(Bi(u)))}return e.pai&&e.pai.indexOf(e)>0&&de(e.pai)&&!Oe(e.pai)&&s.push(Bi(e.pai.tipo)),G(e)&&s.push(jt),e.getAcoesPermitidas(e,s)}getAcaoPossivelTab(e){}getAcaoPossivelShiftTab(e){}}}const zr=o=>{var e,t;return G(o.pai)&&o.filhos.length===0&&o.tipo!==D.omissis.name&&((e=Me(o))===null||e===void 0?void 0:e.tipo)!==D.omissis.name&&((t=jr(o))===null||t===void 0?void 0:t.tipo)!==D.omissis.name};class wa{constructor(){this.descricaoSituacao=j.DISPOSITIVO_NOVO}getAcoesPermitidas(e,t){return[...new Set(t)].filter(i=>i!==void 0).filter(i=>i.descricao!=="Adicionar"&&i.descricao!=="Atualizar dispositivo").sort((i,r)=>i.descricao.localeCompare(r.descricao))}}function tt(o){return class extends o{constructor(){super(...arguments),this.situacao=new wa}getAcoesPermitidas(e,t){var i;return(i=this.situacao)===null||i===void 0?void 0:i.getAcoesPermitidas(e,t)}}}class ot{constructor(e){this.tipo=D[e].tipo,this.tagId=D[e].tagId,this.name=D[e].name,this.descricao=D[e].descricao,this.descricaoPlural=D[e].descricaoPlural,this.tiposPermitidosPai=D[e].tiposPermitidosPai,this.tiposPermitidosFilhos=D[e].tiposPermitidosFilhos,this.tipoProvavelFilho=D[e].tipoProvavelFilho,this.INDICADOR_SEQUENCIA=D[e].INDICADOR_SEQUENCIA,this.INDICADOR_FIM_SEQUENCIA=D[e].INDICADOR_FIM_SEQUENCIA,this.INDICADOR_DESDOBRAMENTO=D[e].INDICADOR_DESDOBRAMENTO}}const Ea=(o,e)=>{e.tipoProvavelFilho!==void 0&&o.filhos.forEach((t,i)=>{var r;const n=pe(V(e)&&D.inciso.name===e.tipoProvavelFilho?e.caput:e,e.tipoProvavelFilho);n.texto=(r=t.texto)!==null&&r!==void 0?r:"",n.situacao=t.situacao,n.mensagens=De(t),t.filhos&&Ea(t,n),i===o.filhos.length-1&&e.renumeraFilhos()})},ud=(o,e)=>{o.tipo===e.tipo&&o.filhos.forEach(t=>{var i;const r=pe(V(e)&&fe(t.pai)?e.caput:e,t.tipo);t.rotulo?r.rotulo=t.rotulo:r.createRotulo(r),r.texto=(i=t.texto)!==null&&i!==void 0?i:"",r.situacao=t.situacao,o.removeFilho(t),r.mensagens=De(t),t.filhos&&(o.tipo===e.tipo?ud(t,r):Ea(t,r)),o.filhos.length===0&&e.renumeraFilhos()})},gf=tt(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return ii(e)?(t.push(zt),t.push(au),t.push(lu),pi(e)!==void 0&&t.push(Ro),di(e)!==void 0&&t.push(Lo),G(e)&&t.push(jt),G(e)&&_t(e)&&(t.push(ao),hi(e)&&t.push(Mo)),(e.texto.length===0||Yo(e))&&t.push(la),(e.texto.length===0||gt(e))&&t.push(du),(ge(e)||Fe(e))&&t.push(he(e.pai.pai)?Dr:Tr),(!Yt(e)||Me(e)!==void 0&&Ee(Me(e)))&&t.push(qu),zr(e)&&t.push(Eu),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){var t;if(ii(e))return(t=e.tiposPermitidosFilhos)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ie).filter(n=>n instanceof ie&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}getAcaoPossivelShiftTab(e){var t;if(ii(e))return ge(e)||Fe(e)?he(e.pai.pai)?Dr:Tr:(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ie).filter(n=>n instanceof ie&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(st(ir(at(ft(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoAlineaLcp95",this.SUFIXO=")"}normalizaNumeracao(e){const t=/[a-z]+(-[a-zA-Z]+)*/.exec(e.trim());return t?t[0]:qo(e).trim().replace(/\)$/,"").trim()}createNumeroFromRotulo(e){this.numero=Pt(this.normalizaNumeracao(e),nd)}createRotulo(){this.rotulo=this.numero===void 0?D.alinea.name:Pt(this.numero,Ls)+this.SUFIXO}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerada]":"\u201C"+Pt(this.numero,Ls)+"\u201D"}getNumeracaoComRotuloParaComandoEmenda(){var e,t;return this.numero===void 0?((e=D.alinea.descricao)===null||e===void 0?void 0:e.toLocaleLowerCase())+" [ainda n\xE3o numerada]":((t=D.alinea.descricao)===null||t===void 0?void 0:t.toLocaleLowerCase())+" "+this.getNumeracaoParaComandoEmenda()}}}(vi(ot)))))))),bf=tt(function(o){return class extends o{getAcoesPossiveis(e){var t,i,r,n,s,p;const u=[];if(!V(e))return[];if(u.push(aa),u.push(zt),pi(e)!==void 0&&u.push(Ro),di(e)!==void 0&&u.push(Lo),Ot(e)||(u.push(nu),u.push(su)),G(e)&&u.push(jt),G(e)&&_t(e)&&(u.push(ao),hi(e)&&u.push(Mo)),e.alteracoes&&u.push(ca),e.hasAlteracao()||G(e)||e.texto.length!==0&&gt(e)||u.push(ru),e.hasAlteracao()||G(e)||e.texto.length!==0&&!gt(e)||u.push(Nn),e.hasAlteracao()||G(e)||Be(e)||u.push(ao),e.pai.indexOf(e)>0&&u.push(Su),e.pai&&!G(e)&&Oe(e.pai)&&e.pai.filhos.filter(d=>de(d)).length===0&&u.push(Ts),e.pai&&G(e)&&de(e.pai)&&u.push(Ts),!G(e)&&e.pai&&(d=>{const c=d.pai.indexOf(d);return d.pai.filhos.filter((l,a)=>a>c&&de(l)).length>0})(e)&&u.push(Bi(Al(e).tipo)),!G(e)&&de(e.pai)){const d=(i=(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.indexOf(e.pai.tipo))!==null&&i!==void 0?i:0;(r=e.tiposPermitidosPai)===null||r===void 0||r.filter(()=>d>0).filter((c,l)=>e.pai.indexOf(e)>0?l>=d:l>d).forEach(c=>u.push(Bi(c)))}if(!G(e)&&de(e.pai)&&!Oe(e.pai)&&e.pai.indexOf(e)>0&&(d=>{var c;return((c=d.pai)===null||c===void 0?void 0:c.pai)!==void 0&&Mr(d.pai.pai,d.pai,[]).length>0})(e)){const d=(s=(n=e.tiposPermitidosPai)===null||n===void 0?void 0:n.indexOf(e.pai.tipo))!==null&&s!==void 0?s:0,c=Mr(e.pai.pai,e.pai,[]).reduce((l,a)=>l.includes(a.tipo)&&Al(a)!==void 0?l:l.concat(a.tipo),[]);(p=e.tiposPermitidosPai)===null||p===void 0||p.filter(()=>d>0).filter(l=>c.includes(l)).forEach(l=>u.push(Bi(l)))}return e.getAcoesPermitidas(e,u)}getAcaoPossivelTab(e){var t;if(V(e))return(t=e.tiposPermitidosFilhos)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ie).filter(n=>n instanceof ie&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}getAcaoPossivelShiftTab(e){var t;if(e.tiposPermitidosFilhos)return pt(e)&&(ge(e)||Fe(e))?Lr:_o(e)&&(ge(e)||Fe(e))?Rr:ii(e)&&(ge(e)||Fe(e))?he(e.pai.pai)?Dr:Tr:(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ie).filter(n=>n instanceof ie&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(st(ho(function(o){return class extends o{hasAlteracao(){var e;return!!this.alteracoes&&((e=this.alteracoes.filhos)===null||e===void 0?void 0:e.length)>0}}}(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoArtigoLcp95",this.PREFIXO="Art. ",this.SUFIXO="\xBA",this.ARTIGO_UNICO="Artigo \xFAnico.",this.informouArtigoUnico=!1}normalizaNumeracao(e){return e.replace(/["”“]/g,"").replace(/\./g,"").replace(/artigo [uú]nico/i,"1").replace(/(art[.]{0,1})/i,"").replace(/[º]/i,"").trim()}createNumeroFromRotulo(e){const t=this.normalizaNumeracao(e);this.informouArtigoUnico=/.*[uú]nico/i.test(e),this.numero=this.informouArtigoUnico?"1":No(t)?t:void 0}createRotulo(e){e===void 0?this.rotulo=D.artigo.descricao:e.situacao.descricaoSituacao!==j.DISPOSITIVO_ADICIONADO||e.situacao.tipoEmenda!==vt.EMENDA_ARTIGO_ONDE_COUBER||G(e)?this.numero===void 0?this.rotulo=Ot(e)?"\u201C"+e.tipo:e.tipo:this.numero===void 0||No(this.numero)?Ot(e)?this.rotulo="\u201C"+(this.informouArtigoUnico?this.ARTIGO_UNICO:this.PREFIXO+this.getNumeroAndSufixoNumeracao()):Pe(e).artigos.length===1?this.rotulo=this.ARTIGO_UNICO:this.rotulo=this.PREFIXO+this.numero===void 0?void 0:this.PREFIXO+this.getNumeroAndSufixoNumeracao():this.rotulo=this.PREFIXO+this.numero+this.SUFIXO:this.rotulo="Art."}getNumeroAndSufixoNumeracao(e=!1){var t;const i=(t=this.numero)===null||t===void 0?void 0:t.split("-"),[r,...n]=i,s=parseInt(r!=null?r:"1",10)<10;return(s?r+this.SUFIXO:r)+(n.length>0?"-"+(n==null?void 0:n.map(Ls).join("-").toUpperCase()):"")+(e||s&&!n.length?"":".")}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerado]":this.informouArtigoUnico?"artigo \xFAnico":this.getNumeroAndSufixoNumeracao(!0)}getNumeracaoComRotuloParaComandoEmenda(){var e;return this.numero===void 0?((e=D.artigo.descricao)===null||e===void 0?void 0:e.toLowerCase())+" [ainda n\xE3o numerado]":this.informouArtigoUnico?"artigo \xFAnico":"art. "+this.getNumeroAndSufixoNumeracao(!0)}}}(function(o){return class extends o{get filhos(){const e=this.getIncisosCaput(),t=this.paragrafos;return e.concat(t)}getIncisosCaput(){var e,t;return(t=(e=this.caput)===null||e===void 0?void 0:e.filhos)!==null&&t!==void 0?t:[]}get paragrafos(){var e;return this._paragrafos=(e=this._paragrafos)!==null&&e!==void 0?e:[],this._paragrafos}addFilhoOnPosition(e,t){At(e)?this.caput.addFilhoOnPosition(e,t):this.paragrafos.splice(t-this.getIncisosCaput().length,0,e)}addFilho(e,t){fe(e)?this.caput=e:At(e)?this.addIncisoCaput(e,t):this.addParagrafo(e,t)}removeFilho(e){var t;At(e)?(t=this.caput)===null||t===void 0||t.removeFilho(e):this.removeParagrafo(e)}addIncisoCaput(e,t){this.caput.addFilho(e,t)}addParagrafo(e,t){if(t){const i=this.paragrafos.indexOf(t)+1;this.isLastFilho(t)?this.paragrafos.push(e):this.paragrafos.splice(i,0,e)}else this.paragrafos.push(e)}removeParagrafo(e){var t;this._paragrafos=(t=this._paragrafos)===null||t===void 0?void 0:t.filter(i=>i.uuid!==e.uuid?i:i.pai=void 0)}isLastFilho(e){return this.paragrafos.indexOf(e)===this.paragrafos.length-1}indexOf(e){return At(e)?this.caput.indexOf(e):this.filhos.indexOf(e)}renumeraIncisos(){var e;(e=this.caput)===null||e===void 0||e.renumeraFilhos()}renumeraParagrafos(){this.paragrafos.forEach(e=>{G(e)&&Gu(e)||e.situacao.descricaoSituacao===j.DISPOSITIVO_NOVO||e.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO?(e.numero=Ln(e),e.createRotulo(e),e.id=Co(e)):e.createRotulo(e)})}isParagrafoUnico(){return this.paragrafos.length===1}renumeraFilhos(){this.renumeraIncisos(),this.renumeraParagrafos()}}}(class extends ot{constructor(){super("artigo")}get texto(){var o,e;return(e=(o=this.caput)===null||o===void 0?void 0:o.texto)!==null&&e!==void 0?e:""}set texto(o){this.caput.texto=o}}))))))),yf=tt(function(o){return class extends o{getAcoesPossiveis(e){return[]}getAcaoPossivelTab(e){}getAcaoPossivelShiftTab(e){}}}(st(ho(at(ft(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoIndisponivel"}createRotulo(){this.rotulo=void 0}createNumeroFromRotulo(){}getNumeracaoParaComandoEmenda(){return""}getNumeracaoComRotuloParaComandoEmenda(){return"caput"}}}(vi(ot)))))))),xf=tt(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return to(e)?(t.push(zt),G(e)&&_t(e)&&(t.push(ao),hi(e)&&t.push(Mo)),(he(e.pai)||fe(e.pai)||At(e.pai)||ii(e.pai))&&e.pai.tipoProvavelFilho.length>0&&t.push(xa.filter(i=>i instanceof ie&&i.nomeAcao==="transformarDispositivoGenericoEm"+e.pai.tipoProvavelFilho)[0]),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){}getAcaoPossivelShiftTab(e){}}}(st(Dn(at(ft(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoDispositivoGenericoLcp95",this.SUFIXO=" -"}createNumeroFromRotulo(){}createRotulo(){this.rotulo=this.numero===void 0?"dg":this.numero+this.SUFIXO}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"dg":this.numero}getNumeracaoComRotuloParaComandoEmenda(){return this.getNumeracaoParaComandoEmenda()}}}(vi(ot)))))))),wf=tt(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return At(e)?(t.push(zt),t.push(cu),t.push(uu),pi(e)!==void 0&&t.push(Ro),di(e)!==void 0&&t.push(Lo),G(e)&&t.push(jt),G(e)&&_t(e)&&(t.push(ao),hi(e)&&t.push(Mo)),gt(e)&&t.push(la),Yo(e)&&t.push(Nn),yn(e)&&Fe(e)&&t.push(mu),pt(e)&&(!Yt(e)||Me(e)!==void 0&&Ee(Me(e)))&&t.push(yl),pt(e)&&(ge(e)||Fe(e))&&t.push(Lr),pt(e)&&zr(e)&&t.push(Au),_o(e)&&(ge(e)||Yt(e))&&t.push(Ds),_o(e)&&(!Yt(e)||Me(e)!==void 0&&Ee(Me(e)))&&t.push(xl),_o(e)&&zr(e)&&t.push(Ds),_o(e)&&(ge(e)||Fe(e))&&t.push(Rr),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){var t;if(At(e))return!pt(e)||ge(e)&&Yt(e)?_o(e)&&(ge(e)||Fe(e))?xl:(t=e.tiposPermitidosFilhos)===null||t===void 0?void 0:t.map(i=>{const r=At(e)?e.pai.tipo:"",n=i.endsWith(D.inciso.name)?!he(e)||ge(e)&&Yt(e)?"IncisoCaput":"IncisoParagrafo":i,s="transformar"+e.tipo+r+"Em"+n;return e.getAcoesPossiveis(e).filter(p=>p instanceof ie).filter(p=>p instanceof ie&&p.nomeAcao&&s&&p.nomeAcao===s)[0]})[0]:yl}getAcaoPossivelShiftTab(e){var t;if(At(e))return pt(e)&&(ge(e)||Fe(e))?Lr:_o(e)&&(ge(e)||Fe(e))?Rr:(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ie).filter(n=>n instanceof ie&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(st(ho(at(ft(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoIncisoLcp95",this.SUFIXO=" \u2013"}normalizaNumeracao(e){const t=/[CDILMVX]+(-[a-zA-Z]+)*/.exec(e);return t?t[0]:qo(e).trim().replace(/-$/,"").trim()}createNumeroFromRotulo(e){const t=Pt(this.normalizaNumeracao(e),sd);this.numero=No(t)?t:void 0}createRotulo(){if(this.numero){const e=this.numero.search(/[a-zA-Z-]/)===-1?parseInt(this.numero):parseInt(this.numero.substring(0,this.numero.search(/[a-zA-Z-]/))),t=this.numero.search(/[a-zA-Z-]/)===-1?"":this.numero.substring(this.numero.search(/[a-zA-Z-]/));this.rotulo=(e===0?e+t:Pt(this.numero,xr))+this.SUFIXO}else this.rotulo=D.inciso.name}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerado]":Pt(this.numero,xr)}getNumeracaoComRotuloParaComandoEmenda(){var e,t;return this.numero===void 0?((e=D.inciso.descricao)===null||e===void 0?void 0:e.toLocaleLowerCase())+" [ainda n\xE3o numerado]":((t=D.inciso.descricao)===null||t===void 0?void 0:t.toLocaleLowerCase())+" "+this.getNumeracaoParaComandoEmenda()}}}(vi(ot)))))))),Ef=tt(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return wl(e)?(t.push(zt),t.push(pu),t.push(hu),pi(e)!==void 0&&t.push(Ro),di(e)!==void 0&&t.push(Lo),G(e)&&t.push(jt),G(e)&&_t(e)&&(t.push(ao),hi(e)&&t.push(Mo)),(ge(e)||Fe(e))&&t.push(Du),zr(e)&&t.push(_u),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){var t;if(wl)return(t=e.tiposPermitidosFilhos)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ie).filter(n=>n instanceof ie&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}getAcaoPossivelShiftTab(e){var t;if(e.tiposPermitidosFilhos)return(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ie).filter(n=>n instanceof ie&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(st(ho(at(ft(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoItemLcp95",this.SUFIXO="."}normalizaNumeracao(e){const t=/\d+(-[a-zA-Z]+)*/.exec(e.trim());return t?t[0]:qo(e).trim().replace(/\.$/,"").trim()}createNumeroFromRotulo(e){const t=this.normalizaNumeracao(e);this.numero=No(t)?t:void 0}createRotulo(){this.rotulo=this.numero===void 0?D.item.name:Pt(this.numero)+this.SUFIXO}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerado]":Pt(this.numero)}getNumeracaoComRotuloParaComandoEmenda(){var e,t;return this.numero===void 0?((e=D.item.descricao)===null||e===void 0?void 0:e.toLocaleLowerCase())+" [ainda n\xE3o numerado]":((t=D.item.descricao)===null||t===void 0?void 0:t.toLocaleLowerCase())+" "+this.getNumeracaoParaComandoEmenda()}}}(vi(ot)))))))),Af=tt(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return he(e)?(t.push(zt),t.push(vu),t.push(gu),pi(e)!==void 0&&t.push(Ro),di(e)!==void 0&&t.push(Lo),G(e)&&t.push(jt),e.texto&&gt(e)&&t.push(Nn),(Yt(e)||ge(e))&&t.push(Mu),ge(e)||t.push(Lu),(Fe(e)||ge(e))&&t.push(Ru),zr(e)&&t.push(Ou),G(e)&&_t(e)&&(t.push(ao),hi(e)&&t.push(Mo)),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){var t;if(he(e))return(t=e.tiposPermitidosFilhos)===null||t===void 0?void 0:t.map(i=>{const r=i.endsWith(D.inciso.name)?!he(e)||ge(e)&&Yt(e)?"IncisoCaput":"IncisoParagrafo":i,n="transformar"+e.tipo+"Em"+r;return e.getAcoesPossiveis(e).filter(s=>s instanceof ie).filter(s=>s instanceof ie&&s.nomeAcao&&n&&s.nomeAcao===n)[0]})[0]}getAcaoPossivelShiftTab(e){var t;if(e.tiposPermitidosFilhos)return pt(e)&&(ge(e)||Fe(e))?Lr:_o(e)&&(ge(e)||Fe(e))?Rr:ii(e)&&(ge(e)||Fe(e))?he(e.pai.pai)?Dr:Tr:(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof ie).filter(n=>n instanceof ie&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(st(ho(at(ft(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoParagrafoLcp95",this.PREFIXO="\xA7 ",this.SUFIXO="\xBA",this.PARAGRAFO_UNICO="Par\xE1grafo \xFAnico.",this.informouParagrafoUnico=!1}normalizaNumeracao(e){return e.trim().replace(/\./g,"").replace(/§/i,"").replace(/par[aá]grafo [uú]nico/i,"1").replace(/[º]/i,"").trim()}createNumeroFromRotulo(e){const t=this.normalizaNumeracao(e);this.informouParagrafoUnico=/.*[uú]nico/i.test(e),this.numero=this.informouParagrafoUnico?"1":No(t)?t:void 0}createRotulo(e){var t;this.numero!==void 0&&e?No(this.numero)?e.isDispositivoAlteracao?this.rotulo=this.informouParagrafoUnico?this.PARAGRAFO_UNICO:this.PREFIXO+this.getNumeroAndSufixoNumeracao():((t=e.pai)===null||t===void 0?void 0:t.filhos.filter(i=>he(i)).length)===1?this.rotulo=this.PARAGRAFO_UNICO:this.rotulo=this.PREFIXO+this.numero===void 0?void 0:this.PREFIXO+this.getNumeroAndSufixoNumeracao():this.rotulo=this.getNumeroAndSufixoNumeracao():this.rotulo=D.paragrafo.name}getNumeroAndSufixoNumeracao(e=!1){if(!this.numero)return"";const t=this.numero.search(/[a-zA-Z-]/)===-1?parseInt(this.numero):parseInt(this.numero.substring(0,this.numero.search(/[a-zA-Z-]/))),i=this.numero.search(/[a-zA-Z-]/)===-1?"":this.numero.substring(this.numero.search(/[a-zA-Z-]/)),r=t<10;return(r?t+this.SUFIXO:t)+((i==null?void 0:i.length)>0?i:"")+(e||r&&!(i!=null&&i.length)?"":".")}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerado]":this.isParagrafoUnico()?"par\xE1grafo \xFAnico":this.getNumeroAndSufixoNumeracao(!0)}getNumeracaoComRotuloParaComandoEmenda(){var e;return this.numero===void 0?((e=D.paragrafo.descricao)===null||e===void 0?void 0:e.toLocaleLowerCase())+" [ainda n\xE3o numerado]":this.isParagrafoUnico()?"par\xE1grafo \xFAnico":"\xA7 "+this.getNumeroAndSufixoNumeracao(!0)}isParagrafoUnico(){var e;return this.isDispositivoAlteracao&&this.informouParagrafoUnico||!this.isDispositivoAlteracao&&((e=this.pai)===null||e===void 0?void 0:e.filhos.filter(t=>he(t)).length)===1}}}(vi(ot)))))))),_f=tt(Uo(st(Dn(at(ft($o(jo(class extends ot{constructor(){super("articulacao")}get artigos(){var o;return(o=this._artigos)!==null&&o!==void 0?o:[]}addArtigo(o,e){var t;this._artigos=(t=this._artigos)!==null&&t!==void 0?t:[],e!==void 0?this._artigos.splice(this._artigos.indexOf(e)+1,0,o):this._artigos.push(o)}addArtigoOnPosition(o,e){var t;this._artigos=(t=this._artigos)!==null&&t!==void 0?t:[],this._artigos.splice(e,0,o)}removeArtigo(o){var e;this._artigos=(e=this._artigos)!==null&&e!==void 0?e:[],this._artigos=this._artigos.filter(t=>t.uuid!==o.uuid)}renumeraArtigos(){this.artigos.filter(o=>o.situacao.descricaoSituacao===j.DISPOSITIVO_NOVO||o.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO).forEach(o=>{G(o)||(o.numero=Ln(o)),o.createRotulo(o),o.id=Co(o);const e=o.caput;e&&(e.id=Co(e))})}indexOfArtigo(o){return this.artigos.indexOf(o)}})))))))),Of=tt(Uo(st(ho(at(ft($o(jo(ot)))))))),qf=tt(Uo(st(Dn(at(ft($o(jo(ot)))))))),Sf=tt(Uo(st(ho(at(ft($o(jo(ot)))))))),If=tt(Uo(st(ir(at(ft($o(jo(ot)))))))),kf=tt(Uo(st(ir(at(ft($o(jo(ot)))))))),Pf=tt(Uo(st(ir(at(ft($o(jo(ot)))))))),Nf=tt(Uo(st(ho(at(ft($o(jo(ot)))))))),Cf=tt(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return Ee(e)?(t.push(zt),pi(e)!==void 0&&t.push(Ro),di(e)!==void 0&&t.push(Lo),G(e)&&!to(e)&&t.push(jt),G(e)&&_t(e)&&(t.push(ao),hi(e)&&t.push(Mo)),Oe(e.pai)&&Me(e)!==void 0&&t.push(ku),fe(e.pai)&&t.push(Pu),V(e.pai)&&t.push(Tu),he(e.pai)&&t.push(Nu),At(e.pai)&&t.push(Iu),ii(e.pai)&&t.push(Cu),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){}getAcaoPossivelShiftTab(e){}}}(ir(at(function(o){return class extends o{constructor(){super(...arguments),this.tipoConteudo=En.ConteudoTexto,this._texto=yt}get texto(){return this._texto}set texto(e){const t=Jt(e);this._texto=t===$r?$r:yt}}}(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoIndisponivel"}createRotulo(){this.rotulo=void 0}createNumeroFromRotulo(){}getNumeracaoParaComandoEmenda(){return""}getNumeracaoComRotuloParaComandoEmenda(){return""}}}(vi(ot))))))),pe=(o,e,t,i)=>{const r=dd(e,o);return i!==void 0&&i>=0?o.addFilhoOnPosition(r,i):t?o.addFilho(r,t):o.addFilho(r),r},dd=(o,e)=>{let t;switch(o.toLowerCase()){case"alinea":t=new gf(o.toLowerCase());break;case"artigo":t=new bf,t.caput=dd(D.caput.tipo,t);break;case"capitulo":t=new Of(o.toLowerCase());break;case"caput":t=new yf(o.toLowerCase());break;case"inciso":t=new wf(o.toLowerCase());break;case"item":t=new Ef(o.toLowerCase());break;case"livro":t=new Sf(o.toLowerCase());break;case"omissis":t=new Cf(o.toLowerCase());break;case"paragrafo":t=new Af(o.toLowerCase());break;case"parte":t=new If(o.toLowerCase());break;case"secao":t=new Pf(o.toLowerCase());break;case"subsecao":t=new kf(o.toLowerCase());break;case"titulo":t=new Nf(o.toLowerCase());break;default:t=e&&de(e)?new qf("agrupadorGenerico"):new xf("generico"),t.mensagens=[],t.mensagens.push({tipo:Y.WARNING,descricao:"N\xE3o foi poss\xEDvel validar a natureza deste dispositivo com base na legisla\xE7\xE3o vigente"})}return t.uuid=ya.next(),t.name=o,t.pai=e,t.isDispositivoAlteracao=G(t),Mf(t),t},Aa=()=>{const o=new _f;return o.uuid=ya.next(),o},_a=o=>{o.alteracoes=Aa(),o.alteracoes.pai=o},kl=(o,e)=>{var t,i,r,n,s,p,u,d,c,l,a,h,f,m,g,v,y,b,x,w,E,S,k,P,A,q,_,O;let I;if(G(o))if(e.subType==="INICIAR_BLOCO")I=Er(D.artigo.tipo,Pe(o)),I.texto=((r=(i=(t=e.novo)===null||t===void 0?void 0:t.conteudo)===null||i===void 0?void 0:i.texto)===null||r===void 0?void 0:r.length)>0?(s=(n=e.novo)===null||n===void 0?void 0:n.conteudo)===null||s===void 0?void 0:s.texto:"";else if(e.subType==="FINALIZAR_BLOCO"){const N=Pe(o);I=tn(N.pai),I.texto=Jt((d=(u=(p=e.novo)===null||p===void 0?void 0:p.conteudo)===null||u===void 0?void 0:u.texto)!==null&&d!==void 0?d:"")}else if(((N,T)=>{var L,U,K;if(!G(N))return!1;const ee=ha(N);return Fe(ee)&&Xu(Jt((K=(U=(L=T.atual)===null||L===void 0?void 0:L.conteudo)===null||U===void 0?void 0:U.texto)!==null&&K!==void 0?K:""))&&_t(N)})(o,e)){const N=Pe(o);I=e.subType==="INICIAR_BLOCO"?Er(D.artigo.tipo,N):tn(N.pai),I.texto=e.subType==="INICIAR_BLOCO"?"":Jt((a=(l=(c=e.novo)===null||c===void 0?void 0:c.conteudo)===null||l===void 0?void 0:l.texto)!==null&&a!==void 0?a:"")}else I=tn(o),I.createRotulo(),I.texto=((m=(f=(h=e.novo)===null||h===void 0?void 0:h.conteudo)===null||f===void 0?void 0:f.texto)===null||m===void 0?void 0:m.length)>0?Jt((y=(v=(g=e.novo)===null||g===void 0?void 0:g.conteudo)===null||v===void 0?void 0:v.texto)!==null&&y!==void 0?y:""):"";else o.alteracoes||Zu((x=(b=e.atual)===null||b===void 0?void 0:b.conteudo)===null||x===void 0?void 0:x.texto)||((w=e.novo)===null||w===void 0?void 0:w.isDispositivoAlteracao)?(o.hasAlteracao()||_a(o),I=Er(o.tipo,o.alteracoes),I.texto=((k=(S=(E=e.novo)===null||E===void 0?void 0:E.conteudo)===null||S===void 0?void 0:S.texto)===null||k===void 0?void 0:k.length)>0?(A=(P=e.novo)===null||P===void 0?void 0:P.conteudo)===null||A===void 0?void 0:A.texto:""):(I=tn(o),I.texto=(O=(_=(q=e.novo)===null||q===void 0?void 0:q.conteudo)===null||_===void 0?void 0:_.texto)!==null&&O!==void 0?O:"");return I},tn=o=>o.hasAlteracao()?Tf(o):V(o)?G(o)?pe(o.caput,D.inciso.tipo,void 0,0):Rf(o):de(o)?Lf(o):G(o)?Be(o)||gt(o)?pe(o,o.tipoProvavelFilho,o):pe(o.pai,o.tipo===D.omissis.tipo?o.pai.tipoProvavelFilho:o.tipo,o):Df(o),Tf=o=>{var e;return o.pai.isLastFilho(o)&&((e=o==null?void 0:o.pai)===null||e===void 0?void 0:e.pai)?pe(o.pai.pai,o.pai.tipo,o.pai):pe(o.pai,o.tipo,o)},Df=o=>{if(gt(o)){const e=o.tipoProvavelFilho;return o.pai.filhos.length>0?pe(o,e,void 0,0):pe(o,e)}if(o.situacao.descricaoSituacao!==j.DISPOSITIVO_ORIGINAL&&yn(o)&&o.pai.isLastFilho(o)){if(pt(o)){const e=o.pai.pai;return e.filhos.filter(t=>he(t)).length>0?pe(e,D.paragrafo.tipo,void 0,0):pe(e,D.paragrafo.tipo)}return pe(o.pai.pai,o.pai.tipo,o.pai)}return pe(o.pai,o.tipo,o)},Rf=o=>{if(gt(o)){const e=o.tipoProvavelFilho;if(e===D.inciso.tipo){const t=o.caput;return t.filhos.length>0?pe(t,e,void 0,0):pe(t,e)}return o.pai.filhos.length>0?pe(o,e,void 0,0):pe(o,e)}return Yo(o)&&o.filhos.length>0&&he(o.filhos[0])?pe(o,D.paragrafo.tipo,void 0,0):pe(o.pai,o.tipo,o)},Lf=o=>pe(o,D.artigo.tipo,void 0,0),Er=(o,e,t,i)=>{const r=pe(e,o,t,i);return r.createRotulo(r),r},Mf=o=>{G(o)&&(o.renumeraFilhos=()=>{},V(o)&&(o.caput.renumeraFilhos=()=>{}),Pe(o).renumeraFilhos=()=>{},Pe(o).renumeraArtigos=()=>{})};class So extends wa{constructor(){super(...arguments),this.descricaoSituacao=j.DISPOSITIVO_ADICIONADO,this.tipoEmenda=vt.EMENDA}getAcoesPermitidas(e,t){return[...new Set(t)].filter(i=>i!==void 0).filter(i=>i.descricao!=="Adicionar"&&i.descricao!=="Atualizar dispositivo").filter(i=>{var r;return!(!((r=i.descricao)===null||r===void 0)&&r.startsWith("Mover"))||(n=>{var s;return((s=n.pai.filhos)===null||s===void 0?void 0:s.filter(p=>p.situacao.descricaoSituacao!==j.DISPOSITIVO_ADICIONADO).length)===0})(e)}).sort((i,r)=>i.descricao.localeCompare(r.descricao))}}class lo{constructor(){this.descricaoSituacao=j.DISPOSITIVO_ORIGINAL}getAcoesPermitidas(e,t){const i=t.filter(r=>!(r instanceof uo)).filter(r=>!(r instanceof Cn)).filter(r=>{var n;return!(!((n=r.descricao)===null||n===void 0)&&n.startsWith("Mover"))}).filter(r=>!(r instanceof ie)).filter(r=>!(r instanceof Tn)).filter(r=>!(r instanceof bu));return ci(e).filter(r=>da(r)).length===0&&i.push(wu),i}}const Pl=(o,e)=>{var t;let i;if(e.endsWith("EmOmissis")){const n=e.replace("transformar","").replace("EmOmissis","");i="transformar"+n+"EmOmissis"+n}else i=e;return(t=o.getAcoesPossiveis(o).filter(n=>n instanceof ie).filter(n=>n.nomeAcao===e||n.nomeAcao.replaceAll("IncisoCaput","Inciso").replaceAll("IncisoParagrafo","Inciso")===i)[0])===null||t===void 0?void 0:t.nomeAcao},Ar=(o,e)=>o.getAcoesPossiveis(o).filter(t=>t instanceof e).length>0,pd=(o,e,t)=>{var i,r,n,s,p,u,d,c,l;if(t&&((i=t.ui)===null||i===void 0?void 0:i.events)){const a=Ke(t.ui.events,M.ElementoModificado);if(a&&a.elementos&&((n=(r=a.elementos[0])===null||r===void 0?void 0:r.conteudo)===null||n===void 0?void 0:n.texto)===o.texto)return!0}return o.texto!==""&&((p=(s=e.atual)===null||s===void 0?void 0:s.conteudo)===null||p===void 0?void 0:p.texto)===""||((d=(u=e.atual)===null||u===void 0?void 0:u.conteudo)===null||d===void 0?void 0:d.texto)&&o.texto.localeCompare((l=(c=e.atual)===null||c===void 0?void 0:c.conteudo)===null||l===void 0?void 0:l.texto)!==0},Nl=o=>{const e=Z(o);return e.mensagens=De(o),e},Jo=o=>{var e;o.uuid=ya.next(),(e=o.filhos)===null||e===void 0||e.forEach(t=>Jo(t))},Xi=(o,e)=>Oe(o)||(t=>V(t)&&Pe(t).indexOfArtigo(t)===0)(e)||e.pai.indexOf(e)===0?o:Zi(o),_i=o=>o!==void 0&&o!=="",hd=(o,e=!1)=>{const t=[];return ci(o).forEach(i=>{if(e){const r=De(i);r&&(i.mensagens=r,t.push(Z(i)))}else t.push(Z(i))}),t};class Xe{constructor(){this.eventos=[],this.eventos=Uf()}add(e,t){const i=this.get(e);t.forEach(r=>{var n;return $f(i,r)||(n=i.elementos)===null||n===void 0?void 0:n.push(r)})}build(){return this.eventos.filter(e=>e.elementos&&e.elementos.length>0)}get(e){return this.eventos.filter(t=>t.stateType===e)[0]}setReferencia(e){this.get(M.ElementoIncluido).referencia=e}}const Cl=(o,e)=>{const t=new Xe;return t.setReferencia(Z(Xi(o,e))),t.add(M.ElementoIncluido,hd(e)),t.add(M.ElementoRenumerado,ld(e)),t.add(M.ElementoValidado,Qr(e,!1)),t},dn=o=>{const e=new Xe,t=Z(o);return t.mensagens=De(o),e.add(M.ElementoModificado,[t]),e.add(M.ElementoValidado,Qr(o)),e},pn=(o,e)=>{o.mensagens=De(o);const t=Z(o),i=e?[e]:[];return i.push(t),[{stateType:M.ElementoModificado,elementos:i},{stateType:M.ElementoValidado,elementos:Qr(o,!0)}]},jf=(o,e)=>{const t=ht(e),i=ui(e),r=Me(e),n=e.pai;n.removeFilho(e),n.renumeraFilhos(),Le(n)&&n.filhos.length===0&&(n.pai.alteracoes=void 0);const s=r&&(gn(r)||va(r))?r:fe(n)?n.pai:n;return o.artigos.length===1&&i.push(o.artigos[0]),((u,d,c)=>{const l=new Xe;return l.add(M.ElementoRemovido,u),l.add(M.ElementoRenumerado,d.map(a=>Z(a))),l.add(M.ElementoValidado,c),l})(t,i,Qr(s,!1)).build()},Tl=o=>{var e,t,i,r,n,s,p,u,d;o.numero=(t=(e=o.situacao.dispositivoOriginal)===null||e===void 0?void 0:e.numero)!==null&&t!==void 0?t:"",o.rotulo=(r=(i=o.situacao.dispositivoOriginal)===null||i===void 0?void 0:i.rotulo)!==null&&r!==void 0?r:"",o.id=(s=(n=o.situacao.dispositivoOriginal)===null||n===void 0?void 0:n.lexmlId)!==null&&s!==void 0?s:"",o.texto=o.situacao.descricaoSituacao===j.DISPOSITIVO_MODIFICADO?(d=(u=(p=o.situacao.dispositivoOriginal)===null||p===void 0?void 0:p.conteudo)===null||u===void 0?void 0:u.texto)!==null&&d!==void 0?d:"":o.texto,o.situacao=new lo},Ke=(o,e)=>o==null?void 0:o.filter(t=>t.stateType===e)[0],$f=(o,e)=>(o==null?void 0:o.elementos.map(t=>{var i,r;return t.uuid===e.uuid&&t.rotulo===e.rotulo&&((i=t.conteudo)===null||i===void 0?void 0:i.texto)===((r=e.conteudo)===null||r===void 0?void 0:r.texto)}).filter(t=>t).length)>0,Uf=()=>[{stateType:M.ElementoIncluido,referencia:void 0,pai:void 0,elementos:[]},{stateType:M.ElementoRemovido,referencia:void 0,pai:void 0,elementos:[]},{stateType:M.ElementoModificado,referencia:void 0,pai:void 0,elementos:[]},{stateType:M.ElementoRenumerado,referencia:void 0,pai:void 0,elementos:[]},{stateType:M.ElementoRestaurado,referencia:void 0,pai:void 0,elementos:[]},{stateType:M.ElementoSuprimido,referencia:void 0,pai:void 0,elementos:[]},{stateType:M.ElementoValidado,referencia:void 0,pai:void 0,elementos:[]},{stateType:M.ElementoSelecionado,referencia:void 0,pai:void 0,elementos:[]},{stateType:M.ElementoMarcado,referencia:void 0,pai:void 0,elementos:[]},{stateType:M.SituacaoElementoModificada,referencia:void 0,pai:void 0,elementos:[]}],dt=(o,e)=>{const t=o.past?o.past:[];return t.push(JSON.parse(JSON.stringify(e))),t},Ff=(o,e)=>{const t=o.future?o.future:[];return t.push(JSON.parse(JSON.stringify(e))),t},eo=(o,e)=>{var t;return{articulacao:o.articulacao,modo:o.modo,past:o.past,present:o.present,future:o.future,ui:{events:(t=o.ui)===null||t===void 0?void 0:t.events,message:e}}},Dl=(o,e)=>{const t=o.pai.indexOf(o);return e==="antes"?t:t===o.pai.filhos.length-1?void 0:t+1},zf=(o,e)=>{var t,i,r,n,s,p,u,d,c,l,a,h,f,m,g,v,y,b;let x=!1;const w=Ie(o.articulacao,e.atual,!0);if(w===void 0||w.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO)return o;const E=w.pai.indexOf(w)===0?!e.posicao&&w.hasAlteracao()?w:pt(w)?w.pai.pai:w.pai:w.pai.filhos[w.pai.indexOf(w)-1];((t=w.situacao)===null||t===void 0?void 0:t.descricaoSituacao)===j.DISPOSITIVO_ORIGINAL&&_i((r=(i=e.novo)===null||i===void 0?void 0:i.conteudo)===null||r===void 0?void 0:r.texto)&&(e.atual.conteudo.texto=w.texto,e.novo.conteudo.texto=void 0);const S=gn(w)||va(w),k=Nl(w),P=[];if(Fr(P,w),pd(w,e,o)&&(w.texto=G(w)?Jt((p=(s=e.atual.conteudo)===null||s===void 0?void 0:s.texto)!==null&&p!==void 0?p:""):(n=e.atual.conteudo)===null||n===void 0?void 0:n.texto,x=!0),((O,I)=>{var N,T,L;return!(!de(O)||!O.pai||O.situacao.descricaoSituacao===j.DISPOSITIVO_NOVO||Gr(O.pai,O))||to(O)||gt(O)&&!Ar(O,Qe)||((N=O.situacao)===null||N===void 0?void 0:N.descricaoSituacao)===j.DISPOSITIVO_ORIGINAL&&_i((L=(T=I.novo)===null||T===void 0?void 0:T.conteudo)===null||L===void 0?void 0:L.texto)})(w,e))return eo(o,{tipo:Y.INFO,descricao:"N\xE3o \xE9 poss\xEDvel criar dispositivos nessa situa\xE7\xE3o"});let A;if(A=V(w)?e.posicao&&e.posicao==="antes"?pe(w.pai,w.tipo,void 0,Dl(w,e.posicao)):e.posicao&&e.posicao==="depois"?pe(w.pai,w.tipo,w):w.hasAlteracao()?Er(D.artigo.tipo,w.alteracoes,void 0,0):kl(w,e):e.posicao?pe(w.pai,w.tipo,void 0,Dl(w,e.posicao)):kl(w,e),((u=w.situacao)===null||u===void 0?void 0:u.descricaoSituacao)===j.DISPOSITIVO_ORIGINAL||((d=w.situacao)===null||d===void 0?void 0:d.descricaoSituacao)===j.DISPOSITIVO_MODIFICADO||((c=w.situacao)===null||c===void 0?void 0:c.descricaoSituacao)===j.DISPOSITIVO_SUPRIMIDO||w.situacao instanceof So){A.situacao=new So,A.situacao.tipoEmenda=o.modo;const O=A.pai;Le(O)&&O.filhos.length===1&&(O.situacao=new So)}_i((a=(l=e.novo)===null||l===void 0?void 0:l.conteudo)===null||a===void 0?void 0:a.texto)&&w.tipo===A.tipo&&Be(w)&&ud(w,A),G(A)&&(A.createRotulo(A),(h=A.mensagens)===null||h===void 0||h.push({tipo:Y.WARNING,descricao:"\xC9 necess\xE1rio informar o r\xF3tulo do dispositivo"})),A.pai.renumeraFilhos();const q=e.posicao&&e.posicao==="antes"?Cl(E,A):Cl(w,A),_=Nl(w);if(_i((m=(f=e.novo)===null||f===void 0?void 0:f.conteudo)===null||m===void 0?void 0:m.texto)&&w.tipo===A.tipo&&P&&P.length>0&&q.add(M.ElementoRemovido,P),de(A)&&nt(A).length===2){const O=nt(A).filter(I=>I!==A);q.add(M.ElementoModificado,[Z(O[0])])}return(x||_i((v=(g=e.novo)===null||g===void 0?void 0:g.conteudo)===null||v===void 0?void 0:v.texto))&&q.add(M.ElementoModificado,[k,_]),(x||_i((b=(y=e.novo)===null||y===void 0?void 0:y.conteudo)===null||b===void 0?void 0:b.texto)||Ee(w))&&q.add(M.ElementoValidado,[_]),(gn(w)||S)&&(q.add(M.ElementoValidado,[_]),q.add(M.ElementoRenumerado,[_])),e.posicao&&e.posicao==="antes"&&q.add(M.ElementoRenumerado,ui(A).map(O=>Z(O))),{articulacao:o.articulacao,modo:o.modo,past:dt(o,q.build()),present:q.build(),future:[],ui:{events:q.build()}}},Bf=(o,e)=>{var t,i,r,n,s;const p=Ie(o.articulacao,e.atual,!0);if(p===void 0)return o;if(Ot(p)){const b=p.pai.indexOf(p),x=Er(e.novo.tipo,p.pai,void 0,b);x.situacao=new So,x.addFilho(p),p.pai=x,p.createRotulo(p);const w=new Xe;return w.setReferencia(Z(b===0?x.pai.pai:x.pai.filhos[b-1])),w.add(M.ElementoIncluido,[Z(x)]),w.add(M.ElementoRenumerado,[Z(p)]),{articulacao:o.articulacao,modo:o.modo,past:dt(o,w.build()),present:w.build(),future:[],ui:{events:w.build()}}}const u=Me(p),d=p.pai.indexOf(p),c=p.pai.filhos.filter((b,x)=>x>=d&&b.tipo!==e.novo.tipo).map(b=>ht(b)).flat();let l,a;var h,f;pd(p,e)&&(p.texto=G(p)?Jt((r=(i=e.atual.conteudo)===null||i===void 0?void 0:i.texto)!==null&&r!==void 0?r:""):(t=e.atual.conteudo)===null||t===void 0?void 0:t.texto),h=p,f=e.novo.tipo,h.pai.tipo===f?(l=pe(p.pai.pai,e.novo.tipo,void 0,p.pai.pai.indexOf(p.pai)+1),a=oo(l)):!G(p)&&((b,x)=>Rs(b,x)!==void 0)(p,e.novo.tipo)||((b,x)=>Mr(b.pai.pai,b.pai,[]).filter(w=>w.tipo===x).length>0)(p,e.novo.tipo)?(a=(n=Rs(p,e.novo.tipo))!==null&&n!==void 0?n:((b,x)=>[...new Set(Mr(b.pai,b,[]))].filter(w=>w.tipo===x).reverse()[0])(p,e.novo.tipo),l=pe(a.pai,e.novo.tipo,a)):(l=pe(p.pai,e.novo.tipo,void 0,p.pai.indexOf(p)),a=u!=null?u:p.pai),l.texto=(s=e.novo.conteudo)===null||s===void 0?void 0:s.texto;const m=p.pai.filhos.filter((b,x)=>x>=d&&b.tipo!==e.novo.tipo);((b,x)=>{x.map(w=>{const E=w.pai;Jo(w);const S=V(w)?oo(w):void 0;return E==null||E.removeFilho(w),w.pai=b,b.addFilho(w,S),w})})(l,m),l.renumeraFilhos(),l.pai.renumeraFilhos();const g=[...ld(l)].concat(l.filhos.filter((b,x)=>x>=d&&b.tipo!==p.tipo).map(b=>ht(b)).flat()),v=oo(l);v&&nt(l).length===2&&g.unshift(Z(v));const y=new Xe;return y.setReferencia(Z(Xi(a.pai&&Oe(a)&&Le(a)?a.pai:a,l))),y.add(M.ElementoIncluido,ht(l)),y.add(M.ElementoRemovido,c),y.add(M.ElementoRenumerado,g),{articulacao:o.articulacao,modo:o.modo,past:dt(o,y.build()),present:y.build(),future:[],ui:{events:y.build()}}};class _r{constructor(e){this.descricaoSituacao=j.DISPOSITIVO_MODIFICADO,this.dispositivoOriginal=e}getAcoesPermitidas(e,t){const i=t.filter(r=>!(r instanceof uo)).filter(r=>!(r instanceof Cn)).filter(r=>!(r instanceof Tn)).filter(r=>{var n;return!(!((n=r.descricao)===null||n===void 0)&&n.startsWith("Mover"))}).filter(r=>r.descricao!=="Adicionar"&&r.descricao!=="Atualizar dispositivo").filter(r=>!(r instanceof ie));return i.push(ua),i.filter(r=>r!==void 0).sort((r,n)=>r.descricao.localeCompare(n.descricao))}}const Vf=(o,e)=>e.dispositivosAdicionados.map(t=>Hf(o,t)),Hf=(o,e)=>{const t={stateType:M.ElementoIncluido,referencia:void 0,pai:void 0,elementos:[]},i=fd(o.articulacao,e);if(i){if(!t.referencia){const r=oo(i),n=fe(i.pai)?i.pai.pai:i.pai;t.referencia=Z(Kf(r||n,i))}Lt(i,r=>{var n;if(!fe(r)&&!Le(r)){const s=Z(r);s.lexmlId=Co(r),(n=t.elementos)===null||n===void 0||n.push(s)}})}return t},Kf=(o,e)=>{const t=Xi(o,e);return t.id!==e.id?t:e.pai.filhos[e.pai.filhos.length-2]},fd=(o,e)=>{var t,i;let r;const n=e.tipo==="Caput";if(e.idIrmaoAnterior){const s=bn(o,Rl(e.idIrmaoAnterior));s&&(r=s.tipo===e.tipo||s.tipo==="Omissis"?pe(s.pai,e.tipo,s):pe(s,e.tipo))}else if(e.idPai){const s=bn(o,Rl(e.idPai));s&&(e.tipo!=="Inciso"&&e.tipo!=="Omissis"||s.tipo!=="Artigo"?n?(s.texto=(t=e.texto)!==null&&t!==void 0?t:"",r=s.caput):e.tipo==="Alteracao"?(_a(s),r=s.alteracoes,s.alteracoes.id=e.id,s.alteracoes.base=e.urnNormaAlterada):(r=pe(s,e.tipo),r.texto=(i=e.texto)!==null&&i!==void 0?i:""):r=pe(s.caput,e.tipo))}else r=pe(o,e.tipo,void 0,0);if(r){r.id=e.id;const s=new So;r.situacao=s,s.existeNaNormaAlterada=!!e.existeNaNormaAlterada,n||Ee(r)||Oe(r)||(e.abreAspas?(r.rotulo="\u201C"+e.rotulo,r.cabecaAlteracao=!0):(r.rotulo=e.rotulo,r.createNumeroFromRotulo(e.rotulo))),Oe(r)||(e.fechaAspas?(r.notaAlteracao=e.notaAlteracao,r.texto=e.texto+`\u201D ${e.notaAlteracao}`):r.texto=e.texto)}return r&&e.filhos&&e.filhos.forEach((s,p)=>{p===0?s.idPai=e.id:s.idIrmaoAnterior=e.filhos[p-1].id,fd(o,s)}),r},Rl=o=>o.replace(/(_cpt)$/,""),Gf=(o,e)=>{var t;const i=Ie(o.articulacao,e.atual,!0),r=e.atual.norma,n=(i==null?void 0:i.alteracoes.base)||"",s=new RegExp(`<a.+href=.${n}.*?>.*?</a>`,"ig"),p=xn(r);if(i===void 0||!i.alteracoes||n===r&&i.texto.match(s))return o.ui=[],o;const u=`<a href="${d=r}"> ${xn(d)} </a>`;var d;const c=i.texto;if(i.texto.match(s))i.texto=c.replace(s,u);else if(i.texto.includes(p))i.texto=c.replace(p,u);else{const m=parseInt(localStorage.indexCursor);i.texto=[c.slice(0,m),u,c.slice(m)].join(" "),localStorage.removeItem("indexCursor")}const l=Z(i);i.alteracoes.base=r,((t=i.situacao)===null||t===void 0?void 0:t.descricaoSituacao)===j.DISPOSITIVO_ORIGINAL&&(i.situacao=new _r(l));const a=new Xe,h=Z(i,!0);h.mensagens=De(i),a.add(M.ElementoValidado,[h]),a.add(M.ElementoModificado,[h]),a.add(M.SituacaoElementoModificada,[h]);const f=dn(i);return{articulacao:o.articulacao,modo:o.modo,past:dt(o,pn(i,l)),present:f.build(),future:o.future,ui:{events:a.build()}}},Ll=(o,e)=>{const t=Ie(o.articulacao,e.atual,!0);if(t===void 0)return o.ui=[],o;if(!((f,m)=>{const g=Pl(f,m.subType);return f.getAcoesPossiveis(f).filter(v=>v instanceof ie&&v.nomeAcao&&v.nomeAcao===g).length>0})(t,e))return o;const i=Me(t);e.subType=Pl(t,e.subType);const r=[...ht(t)],n=ui(t),s=((f,m)=>{var g,v;const y=f.pai;let b,x;switch(m.subType){case"transformarAlineaEmItem":case"transformarIncisoCaputEmAlinea":case"transformarIncisoParagrafoEmAlinea":case"transformarParagrafoEmIncisoParagrafo":case"transformarArtigoEmParagrafo":x=Me(f),b=pe(x,m.novo.tipo);break;case"transformarDispositivoGenericoEmInciso":case"transformarDispositivoGenericoEmAlinea":case"transformarDispositivoGenericoEmItem":case"transformarOmissisEmAlinea":case"transformarOmissisEmArtigo":case"transformarOmissisEmIncisoCaput":case"transformarOmissisEmIncisoParagrafo":case"transformarOmissisEmItem":case"transformarOmissisEmParagrafo":case"transformarAlineaEmOmissisAlinea":case"transformarItemEmOmissisItem":case"transformarParagrafoEmOmissisParagrafo":case"transformarIncisoCaputEmOmissisIncisoCaput":case"transformarIncisoParagrafoEmOmissisIncisoParagrafo":x=y,b=pe(y,m.novo.tipo,void 0,y==null?void 0:y.indexOf(f));break;case"transformarParagrafoEmInciso":if(he(f)&&(Yt(f)||ge(f))){x=y,b=pe(x.caput,m.novo.tipo);break}x=Me(f),b=pe(x,m.novo.tipo);break;case"transformarParagrafoEmIncisoCaput":x=y,b=pe(x.caput,m.novo.tipo);break;default:x=f.pai.pai,b=pe(x,m.novo.tipo,f.pai)}return b.texto=(v=(g=m.atual.conteudo)===null||g===void 0?void 0:g.texto)!==null&&v!==void 0?v:f.texto,b.createRotulo(b),b.situacao=f.situacao,b.mensagens=De(b),y==null||y.removeFilho(f),y==null||y.renumeraFilhos(),x==null||x.renumeraFilhos(),Ea(f,b),b})(t,e),p=ui(s).concat(n),u=hd(s,!0),d=pt(s)?s.pai.pai:s.pai;i&&va(i)&&(i.pai.renumeraFilhos(),p.unshift(i));const c=Me(s);if(c){const f=De(c);c.mensagens!==f&&u.unshift(Z(c))}const l=u.filter(f=>f.uuid===d.uuid).length>0?t.pai:d;l.mensagens=De(l),u.unshift(Z(l));const a=c!=null?c:s.pai,h=((f,m,g,v,y)=>{const b=new Xe;return b.setReferencia(Z(Xi(f,m))),b.add(M.ElementoIncluido,ht(m)),b.add(M.ElementoRemovido,g),b.add(M.ElementoRenumerado,v),b.add(M.ElementoValidado,y.filter(x=>x.mensagens.length>0)),b})(fe(a)?a.pai:a,s,r,p.map(f=>(f.mensagens=De(f),Z(f))),u);return{articulacao:o.articulacao,modo:o.modo,past:dt(o,h.build()),present:h.build(),future:[],ui:{events:h.build()}}},ls=(o,e)=>{if(js(e)){const t=Le(o)?o.pai:un(o,e.hierarquia.pai.uuidAlteracao);if(t)return t.alteracoes||(t.alteracoes=Aa(),t.alteracoes.pai=t),e.hierarquia.pai.tipo===D.articulacao.tipo?t.alteracoes:un(t.alteracoes,e.hierarquia.pai.uuid)}return un(o,e.hierarquia.pai.uuid)},Ml=(o,e)=>{var t,i,r;const n=pe(V(e)&&(o.tipo===D.inciso.name||(s=>{var p,u;const d=(u=(p=s.lexmlId)===null||p===void 0?void 0:p.split("_"))!==null&&u!==void 0?u:[];return s.tipo===D.omissis.tipo&&d.length>1&&d[d.length-2]==="cpt"})(o))?e.caput:e,o.tipo,void 0,o.hierarquia.posicao);return n.uuid=o.uuid,n.id=o.lexmlId,n.texto=(i=(t=o==null?void 0:o.conteudo)===null||t===void 0?void 0:t.texto)!==null&&i!==void 0?i:"",n.numero=(r=o==null?void 0:o.hierarquia)===null||r===void 0?void 0:r.numero,n.rotulo=o==null?void 0:o.rotulo,n.mensagens=o==null?void 0:o.mensagens,n.situacao=(s=>{switch(s){case j.DISPOSITIVO_ADICIONADO:return new So;case j.DISPOSITIVO_NOVO:return new wa;default:return new lo}})(o.descricaoSituacao),n},jl=(o,e,t)=>{if(e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0){const i=e.elementos[0],r=ls(o.articulacao,i),n=((s,p)=>{const u=p.shift(),d=ls(s,u),c=Ml(u,d),l=[c];return p==null||p.forEach(a=>{var h,f;const m=((h=a.hierarquia)===null||h===void 0?void 0:h.pai)===((f=u==null?void 0:u.hierarquia)===null||f===void 0?void 0:f.pai)?c.pai:ls(s,a),g=Ml(a,m);l.push(g)}),l})(o.articulacao,e.elementos);if(r==null||r.renumeraFilhos(),t){const s=i.hierarquia.posicao===0?Oe(r)&&Le(r)?r.pai:r:Zi(Me(n[0]));if(s){const p=Ie(o.articulacao,s);p?t.referencia=Z(p):eo(o,{tipo:Y.ERROR,descricao:"Erro inesperado"})}}return e.stateType===M.ElementoIncluido&&(t.referencia=e.referencia),n.map(s=>Z(s))}return[]},$l=(o,e)=>e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0?(e.elementos.forEach(t=>{const i=Ie(o.articulacao,t,!0);if(i){const r=i.pai;r.removeFilho(i),r.renumeraFilhos()}}),e.elementos):[],Ul=(o,e,t,i)=>e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0?(e.elementos.forEach(r=>{var n,s,p,u,d,c,l;const a=Ie(o.articulacao,r,!0);i instanceof lo?(a.numero=(s=(n=a.situacao.dispositivoOriginal)===null||n===void 0?void 0:n.numero)!==null&&s!==void 0?s:"",a.rotulo=(u=(p=a.situacao.dispositivoOriginal)===null||p===void 0?void 0:p.rotulo)!==null&&u!==void 0?u:"",a.texto=(l=(c=(d=a.situacao.dispositivoOriginal)===null||d===void 0?void 0:d.conteudo)===null||c===void 0?void 0:c.texto)!==null&&l!==void 0?l:"",a.situacao=new lo):a.situacao=new i(Z(a)),t.elementos.push(Z(a))}),t.elementos):[],Fl=(o,e,t=!1)=>{if(e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0){const i=[];let r=0;return e.elementos.forEach(n=>{var s,p,u,d;const c=Ie(o.articulacao,n,!0);c&&(t&&r===c.uuid||r!==c.uuid)&&(c.situacao.descricaoSituacao===j.DISPOSITIVO_MODIFICADO?(c.texto=(p=(s=c.situacao.dispositivoOriginal.conteudo)===null||s===void 0?void 0:s.texto)!==null&&p!==void 0?p:"",c.situacao=new lo):(n.descricaoSituacao===j.DISPOSITIVO_MODIFICADO&&(c.situacao=new _r(Z(c))),c.texto=(d=(u=n.conteudo)===null||u===void 0?void 0:u.texto)!==null&&d!==void 0?d:""),c.alteracoes&&(c.alteracoes.base=n.norma),c.mensagens=De(c),i.push(Z(c)),r=c.uuid)}),i}return[]},zl=(o,e)=>{if(e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0){const t=[];return e.elementos.forEach(i=>{const r=Ie(o.articulacao,i,!0);r&&t.push(Z(r))}),t}return[]},Bl=(o,e)=>{const t=Ke(e,M.ElementoValidado);if(t!==void 0&&t.elementos!==void 0&&t.elementos[0]!==void 0){const i=[];return t.elementos.forEach(r=>{const n=Ie(o.articulacao,r,!0);n&&(n.mensagens=De(n),n.mensagens.length>0&&i.push(Z(n)))}),i}return[]},Vl=(o,e)=>{const t=Ie(o.articulacao,e.atual,!0);if(t===void 0)return o.ui=[],o;if(!Ar(t,Cn))return eo(o,{tipo:Y.ERROR,descricao:"N\xE3o \xE9 poss\xEDvel excluir um dispositivo original mas apenas suprimi-lo."});if(!G(t)&&(gn(t)||o.articulacao.filhos.length===1&&o.articulacao.filhos[0]===t&&!Be(t)))return eo(o,{tipo:Y.ERROR,descricao:"N\xE3o \xE9 poss\xEDvel excluir o \xFAnico dispositivo dispon\xEDvel."});const i=de(t)?((r,n)=>{let s=n.pai.indexOf(n);const p=n.pai.filhos.filter((y,b)=>b<s&&de(y)),u=n.pai,d=[...ht(n)],c=oo(n),l=(p==null?void 0:p.length)>0&&!G(n)?p.reverse()[0]:n.pai,a=(p==null?void 0:p.length)>0&&!G(n)?p.reverse()[0]:s>0?Zi(l.filhos[s-1]):l,h=Oe(a)?l:Zi(a),f=n.filhos.map(y=>(y.pai=l,u.removeFilho(y),Jo(y),(p==null?void 0:p.length)>0?l.addFilho(y):l.addFilhoOnPosition(y,s++),y));n.pai.removeFilho(n),l==null||l.renumeraFilhos(),u.renumeraFilhos();const m=f.map(y=>ht(y)).flat(),g=l.filhos.filter((y,b)=>b>=s&&(de(y)||Ot(y))).map(y=>Z(y)).flat();c&&nt(c).length===1&&g.unshift(Z(c));const v=new Xe;return v.setReferencia(Oe(h)&&Le(h)?Z(h.pai):Z(h)),v.add(M.ElementoIncluido,m),v.add(M.ElementoRemovido,d),v.add(M.ElementoRenumerado,g),v.build()})(o.articulacao,t):jf(o.articulacao,t);return{articulacao:o.articulacao,modo:o.modo,past:dt(o,i),present:i,future:[],ui:{events:i}}},Qf=o=>({stateType:M.ElementoMarcado,elementos:[Z(o)],moverParaFimLinha:!0}),Wf=(o,e)=>(!o.modo.startsWith("emenda")||e.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO)&&!Be(e),Zf=(o,e)=>{var t,i;const r=Ie(o.articulacao,e.atual,!0);if(r===void 0)return o.ui=[],o;if(!(ci(r).filter(p=>da(p)).length>0)&&((t=r.situacao)===null||t===void 0?void 0:t.descricaoSituacao)!==j.DISPOSITIVO_MODIFICADO&&((i=r.situacao)===null||i===void 0?void 0:i.descricaoSituacao)!==j.DISPOSITIVO_SUPRIMIDO)return o;const s=((p,u)=>{const d=[];u.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO?ci(u).filter(a=>a.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO).forEach(a=>{Tl(a),d.push(Z(a))}):(Tl(u),d.push(Z(u)));const c=new Xe;return c.add(M.ElementoRestaurado,d),c.build()})(o.articulacao,r);return{articulacao:o.articulacao,modo:o.modo,past:dt(o,s),present:s,future:[],ui:{events:s}}},$s=(o,e)=>{o.length!==0&&(o==null||o.forEach(t=>{e.add(t.situacao.descricaoSituacao),$s(t.filhos,e)}))},Xf=(o,e)=>{var t;const i=Ie(o.articulacao,e.atual,!0);if(i===void 0||((t=i.situacao)===null||t===void 0?void 0:t.descricaoSituacao)!==j.DISPOSITIVO_ORIGINAL)return o.ui=[],o;if(!(n=>{var s;const p=new Set;return p.add(n.situacao.descricaoSituacao),$s(n.filhos,p),n.alteracoes&&$s((s=n.alteracoes)===null||s===void 0?void 0:s.filhos,p),p.size===1&&[...p][0]===j.DISPOSITIVO_ORIGINAL})(i))return eo(o,{tipo:Y.ERROR,descricao:"S\xF3 \xE9 poss\xEDvel suprimir dispositivos que n\xE3o tenham sofrido modifica\xE7\xE3o."});const r=((n,s)=>{ci(s).forEach(u=>u.situacao=new Ur(Z(u))),s.alteracoes&&s.alteracoes.filhos.length>0&&s.alteracoes.filhos.forEach(u=>ci(u).forEach(d=>d.situacao=new Ur(Z(d))));const p=new Xe;return p.add(M.ElementoSuprimido,ht(s)),p.build()})(o.articulacao,i);return{articulacao:o.articulacao,modo:o.modo,past:dt(o,r),present:r,future:[],ui:{events:r}}},Yf=function(o){for(var e=Object.keys(o),t={},i=0;i<e.length;i++){var r=e[i];typeof o[r]=="function"&&(t[r]=o[r])}var n,s=Object.keys(t);try{(function(p){Object.keys(p).forEach(function(u){var d=p[u];if(d(void 0,{type:vn.INIT})===void 0)throw new Error(it(12));if(d(void 0,{type:vn.PROBE_UNKNOWN_ACTION()})===void 0)throw new Error(it(13))})})(t)}catch(p){n=p}return function(p,u){if(p===void 0&&(p={}),n)throw n;for(var d=!1,c={},l=0;l<s.length;l++){var a=s[l],h=t[a],f=p[a],m=h(f,u);if(m===void 0)throw u&&u.type,new Error(it(14));c[a]=m,d=d||m!==f}return(d=d||s.length!==Object.keys(p).length)?c:p}}({appReducer:(o={},e)=>(e.type,o),elementoReducer:(o={},e)=>{switch(e.type){case"APLICAR_ALTERACOES_EMENDA":return((t,i)=>{const r={articulacao:t.articulacao,modo:t.modo,past:[],present:[],future:[],ui:{events:[]}},n=new Xe;return i.alteracoesEmenda.dispositivosSuprimidos&&(n.add(M.ElementoSuprimido,[]),i.alteracoesEmenda.dispositivosSuprimidos.forEach(s=>{const p=bn(t.articulacao,s.id);p&&Lt(p,u=>{var d;u.situacao=new Ur(Z(u)),(d=n.get(M.ElementoSuprimido).elementos)===null||d===void 0||d.push(Z(u))})})),i.alteracoesEmenda.dispositivosModificados&&(n.add(M.ElementoModificado,[]),i.alteracoesEmenda.dispositivosModificados.forEach(s=>{var p;const u=bn(t.articulacao,s.id);u&&(u.situacao=new _r(Z(u)),u.texto=s.texto,(p=n.get(M.ElementoModificado).elementos)===null||p===void 0||p.push(Z(u)))})),i.alteracoesEmenda.dispositivosAdicionados&&n.eventos.push(...Vf(t,i.alteracoesEmenda)),r.ui.events=n.build(),r})(o,e);case"ATUALIZAR_ELEMENTO":return((t,i)=>{var r,n,s,p;const u=Ie(t.articulacao,i.atual,!0);if(u===void 0||u.texto===i.atual.conteudo.texto)return t.ui=[],t;const d=Z(u);u.texto=G(u)?Jt((s=(n=i.atual.conteudo)===null||n===void 0?void 0:n.texto)!==null&&s!==void 0?s:""):(r=i.atual.conteudo)===null||r===void 0?void 0:r.texto,((p=u.situacao)===null||p===void 0?void 0:p.descricaoSituacao)===j.DISPOSITIVO_ORIGINAL&&(u.situacao=new _r(d));const c=dn(u);return{articulacao:t.articulacao,modo:t.modo,past:dt(t,pn(u,d)),present:c.build(),future:t.future,ui:{events:c.build()}}})(o,e);case"ATUALIZAR_REFERENCIA_ELEMENTO":return Gf(o,e);case"ATUALIZAR_TEXTO_ELEMENTO":return((t,i)=>{var r,n,s,p;const u=Ie(t.articulacao,i.atual,!0);if(u===void 0||u.texto===i.atual.conteudo.texto)return t.ui=[],t;const d=Z(u);u.texto=G(u)?Jt((s=(n=i.atual.conteudo)===null||n===void 0?void 0:n.texto)!==null&&s!==void 0?s:""):(r=i.atual.conteudo)===null||r===void 0?void 0:r.texto,((p=u.situacao)===null||p===void 0?void 0:p.descricaoSituacao)===j.DISPOSITIVO_ORIGINAL&&(u.situacao=new _r(d));const c=new Xe,l=Z(u,!0);l.mensagens=De(u),((h,f)=>{var m,g;return((g=(m=f.atual)===null||m===void 0?void 0:m.conteudo)===null||g===void 0?void 0:g.texto)!==h})(u.texto,i)&&c.add(M.ElementoModificado,[l]),c.add(M.SituacaoElementoModificada,[l]),c.add(M.ElementoValidado,Qr(u));const a=dn(u);return{articulacao:t.articulacao,modo:t.modo,past:dt(t,pn(u,d)),present:a.build(),future:[],ui:{events:c.build()}}})(o,e);case"ADICIONAR_ELEMENTO":return zf(o,e);case"AGRUPAR_ELEMENTO":return Bf(o,e);case"TRANSFORMAR_TIPO_ELEMENTO":return Ll(o,e);case"ELEMENTO_SELECIONADO":return((t,i)=>{const r=Ie(t.articulacao,i.atual,!0);if(r===void 0)return t.ui.events=[],t;r.mensagens=De(r);const n=Z(r,!0),s=[{stateType:M.ElementoSelecionado,elementos:[n]}];return{articulacao:t.articulacao,modo:t.modo,past:t.past,present:t.present,future:t.future,ui:{events:s}}})(o,e);case"INFORMAR_NORMA":return((t,i)=>{const r=Ie(t.articulacao,i.atual,!0);if(r===void 0)return t.ui.events=[],t;r.mensagens=De(r);const n=Z(r,!0),s=[{stateType:M.InformarNorma,elementos:[n]}];return{articulacao:t.articulacao,modo:t.modo,past:t.past,present:t.present,future:[],ui:{events:s}}})(o,e);case"Mover para baixo":return((t,i)=>{const r=Ie(t.articulacao,i.atual,!0);if(r===void 0)return t.ui=[],t;if(!Ar(r,yu))return eo(t,{tipo:Y.ERROR,descricao:"Opera\xE7\xE3o n\xE3o permitida."});const n=pi(r);if(n===void 0)return t;const s=[...ht(r),...ht(n)],p=ui(r),u=r.pai,d=u.indexOf(r);Jo(r),Jo(n),u.removeFilho(r),u.removeFilho(n),u.addFilhoOnPosition(n,d),u.addFilhoOnPosition(r,d+1),r.pai=u,n.pai=u,u.renumeraFilhos();const c=d===0?pt(n)||G(r)&&r.tipo==="Artigo"?u.pai:u:Me(n),l=new Xe;return l.setReferencia(Z(Xi(c,n))),l.add(M.ElementoIncluido,Oo(n,[]).concat(Oo(r,[])).map(a=>(a.mensagens=De(a),Z(a)))),l.add(M.ElementoRemovido,s),l.add(M.ElementoRenumerado,p.map(a=>Z(a))),l.add(M.ElementoMarcado,[Z(r),i.atual]),l.add(M.ElementoSelecionado,[Z(r)]),{articulacao:t.articulacao,modo:t.modo,past:dt(t,l.build()),present:l.build(),future:[],ui:{events:l.build()}}})(o,e);case"Mover para cima":return((t,i)=>{var r;const n=Ie(t.articulacao,i.atual,!0);if(n===void 0)return t.ui=[],t;if(!Ar(n,xu))return eo(t,{tipo:Y.ERROR,descricao:"Opera\xE7\xE3o n\xE3o permitida."});const s=di(n);if(s===void 0)return t;const p=[...ht(s),...ht(n)],u=ui(n),d=n.pai,c=d.indexOf(s);Jo(s),Jo(n),d.removeFilho(s),d.removeFilho(n),d.addFilhoOnPosition(n,c),d.addFilhoOnPosition(s,c+1),n.pai=d,s.pai=d,d.renumeraFilhos();const l=c===0?((r=n.pai)===null||r===void 0?void 0:r.tipo)===D.caput.tipo||G(n)&&n.tipo==="Artigo"?d.pai:d:Me(n),a=new Xe;return a.setReferencia(Z(Xi(l,n))),a.add(M.ElementoIncluido,Oo(n,[]).concat(Oo(s,[])).map(h=>(h.mensagens=De(h),Z(h)))),a.add(M.ElementoRemovido,p),a.add(M.ElementoRenumerado,u.map(h=>Z(h))),a.add(M.ElementoMarcado,[Z(n),i.atual]),a.add(M.ElementoSelecionado,[Z(n)]),{articulacao:t.articulacao,modo:t.modo,past:dt(t,a.build()),present:a.build(),future:[],ui:{events:a.build()}}})(o,e);case"RENUMERAR_ELEMENTO":return((t,i)=>{var r,n;const s=Ie(t.articulacao,i.atual,!0);if(s===void 0)return t.ui=[],t;if(!Ar(s,Tn))return eo(t,{tipo:Y.INFO,descricao:"Nessa situa\xE7\xE3o, n\xE3o \xE9 poss\xEDvel renumerar o dispositivo"});const p=dt(t,pn(s));try{s.createNumeroFromRotulo((r=i.novo)===null||r===void 0?void 0:r.numero)}catch(d){return eo(t,{tipo:Y.ERROR,descricao:"O r\xF3tulo informado \xE9 inv\xE1lido",detalhe:d})}s.createRotulo(s),((n=s.situacao)===null||n===void 0?void 0:n.descricaoSituacao)===j.DISPOSITIVO_ADICIONADO&&(s.situacao.existeNaNormaAlterada=i.novo.existenteNaNorma);const u=dn(s);return{articulacao:t.articulacao,modo:t.modo,past:p,present:u.build(),future:t.future,ui:{events:u.build()}}})(o,e);case"RESTAURAR_ELEMENTO":return Zf(o,e);case"SUPRIMIR_ELEMENTO":return Xf(o,e);case"ABRIR_ARTICULACAO":return mf(0,e);case"REDO":return(t=>{var i;if(t.future===void 0||t.future.length===0)return t.ui=[],t;const r=t.future.pop(),n={articulacao:t.articulacao,modo:t.modo,past:dt(t,r),present:[],future:t.future,ui:{events:[]}},s=new Xe;s.add(M.ElementoRemovido,$l(t,Ke(r,M.ElementoRemovido))),s.add(M.ElementoIncluido,jl(t,Ke(r,M.ElementoIncluido),Ke(s.eventos,M.ElementoIncluido))),s.add(M.ElementoModificado,Fl(t,Ke(r,M.ElementoModificado),!0)),s.add(M.ElementoSuprimido,Ul(t,Ke(r,M.ElementoSuprimido),Ke(s.eventos,M.ElementoSuprimido),Ur)),s.add(M.ElementoRenumerado,zl(t,Ke(r,M.ElementoRenumerado))),s.add(M.ElementoValidado,Bl(t,r));const p=(i=Ke(r,M.ElementoMarcado))===null||i===void 0?void 0:i.elementos;return p&&(s.add(M.ElementoMarcado,p),s.add(M.ElementoSelecionado,[p[0]])),n.ui.events=s.build(),n.present=s.build(),n})(o);case"REMOVER_ELEMENTO":return Vl(o,e);case"REMOVER_ELEMENTO_SEM_TEXTO":return((t,i)=>{var r;const n=Ie(t.articulacao,i.atual,!0);if(n===void 0||!Wf(t,n))return t.ui=[],t;const s=Me(n),p=Vl(t,i);return i.key==="Backspace"&&s&&((r=p.ui)===null||r===void 0||r.events.push(Qf(s))),p})(o,e);case"SHIFT_TAB":case"TAB":return((t,i)=>{const r=Ie(t.articulacao,i.atual,!0);if(r===void 0)return t.ui=[],t;const n=i.type==="TAB"?r.getAcaoPossivelTab(r):r.getAcaoPossivelShiftTab(r);if(!n)return t.ui=[],t;const s={type:"TRANSFORMAR_TIPO_ELEMENTO",subType:n.nomeAcao,atual:i.atual,novo:{tipo:n.tipo}};return Ll(t,s)})(o,e);case"UNDO":return(t=>{var i;if(t.past===void 0||t.past.length===0)return t.ui=[],t;const r=t.past.pop(),n={articulacao:t.articulacao,modo:t.modo,past:t.past,present:[],future:Ff(t,r),ui:{events:[]}},s=new Xe;s.add(M.ElementoRemovido,$l(t,Ke(r,M.ElementoIncluido))),s.add(M.ElementoIncluido,jl(t,Ke(r,M.ElementoRemovido),Ke(s.eventos,M.ElementoIncluido))),s.add(M.ElementoRestaurado,Ul(t,Ke(r,M.ElementoSuprimido),Ke(s.eventos,M.ElementoRestaurado),lo)),s.add(M.ElementoModificado,Fl(t,Ke(r,M.ElementoModificado))),s.add(M.ElementoRenumerado,zl(t,Ke(r,M.ElementoRenumerado))),s.add(M.ElementoValidado,Bl(t,r));const p=(i=Ke(r,M.ElementoMarcado))===null||i===void 0?void 0:i.elementos;return p&&(s.add(M.ElementoMarcado,[p[1],p[0]]),s.add(M.ElementoSelecionado,[p[1]])),n.ui.events=s.build(),n.present=s.build(),n})(o);case"VALIDAR_ELEMENTO":return((t,i)=>{const r=Ie(t.articulacao,i.atual,!0);if(r===void 0)return t.ui=[],t;r.mensagens=De(r);const n=Z(r,!0),s=[{stateType:M.ElementoValidado,elementos:[n]}];return{articulacao:t.articulacao,modo:t.modo,past:t.past,present:t.present,future:t.future,ui:{events:s}}})(o,e);case"VALIDAR_ARTICULACAO":return(t=>{const i=[];Oo(t.articulacao,[]).forEach(n=>{const s=De(n);(s==null?void 0:s.length)>0&&(n.mensagens=s,i.push(Z(n)))});const r=[{stateType:M.ElementoValidado,elementos:i}];return{articulacao:t.articulacao,modo:t.modo,past:t.past,present:t.present,future:t.future,ui:{events:r}}})(o);default:return o}}}),me=function o(e,t,i){var r;if(typeof t=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(it(0));if(typeof t=="function"&&i===void 0&&(i=t,t=void 0),i!==void 0){if(typeof i!="function")throw new Error(it(1));return i(o)(e,t)}if(typeof e!="function")throw new Error(it(2));var n=e,s=t,p=[],u=p,d=!1;function c(){u===p&&(u=p.slice())}function l(){if(d)throw new Error(it(3));return s}function a(g){if(typeof g!="function")throw new Error(it(4));if(d)throw new Error(it(5));var v=!0;return c(),u.push(g),function(){if(v){if(d)throw new Error(it(6));v=!1,c();var y=u.indexOf(g);u.splice(y,1),p=null}}}function h(g){if(!Uh(g))throw new Error(it(7));if(g.type===void 0)throw new Error(it(8));if(d)throw new Error(it(9));try{d=!0,s=n(s,g)}finally{d=!1}for(var v=p=u,y=0;y<v.length;y++)(0,v[y])();return g}function f(g){if(typeof g!="function")throw new Error(it(10));n=g,h({type:vn.REPLACE})}function m(){var g,v=a;return(g={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(it(11));function b(){y.next&&y.next(l())}return b(),{unsubscribe:v(b)}}})[gl]=function(){return this},g}return h({type:vn.INIT}),(r={dispatch:h,subscribe:a,getState:l,replaceReducer:f})[gl]=m,r}(Yf,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());let cs=class extends Pn(me)(rt){constructor(){super(),this.elementos=[],this.tabIndex=-1}createRenderRoot(){return this}render(){return Re`
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
    `}};ue([Ge({type:Array})],cs.prototype,"elementos",void 0),cs=ue([Tt("lexml-eta-articulacao")],cs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jf=2;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Us extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}{constructor(e){if(super(e),this.it=Ue,e.type!==Jf)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Ue||e==null)return this.ft=void 0,this.it=e;if(e===li)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Us.directiveName="unsafeHTML",Us.resultType=1;const An=(o=>(...e)=>({_$litDirective$:o,values:e}))(Us);let us=class extends rt{update(o){super.update(o)}buildTemplateComando(o){const e=o==null?void 0:o.reduce((t,i)=>t+`<p> ${i.cabecalho} </p>`,"");return Re`${e}`}buildTemplateCitacao(o){return o.replaceAll("<Rotulo>","<b>").replaceAll("</Rotulo>","</b> ").replaceAll("<Alteracao>",'<div class="alteracao">').replaceAll("</Alteracao>","</div> ").replaceAll("<Omissis/>"," ..........................................................")}render(){var o,e;const t=(o=this.emenda)===null||o===void 0?void 0:o.cabecalhoComum,i=(e=this.emenda)===null||e===void 0?void 0:e.comandos;return Re`
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

        .lexml-emenda-cabecalhoComando {
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

        ${t?An(`<p class="lexml-emenda-cabecalhoComando">${t}</p>`):""}
        ${i==null?void 0:i.map(r=>An('<div class="lexml-emenda-cabecalhoComando">'+(r.rotulo?`<strong>${r.rotulo}</strong> `:"")+r.cabecalho+'</div><div class="lexml-emenda-citacaoComando">'+this.buildTemplateCitacao(r.citacao)+"</div>"))}
      </div>
    `}};ue([Ge({type:Object})],us.prototype,"emenda",void 0),us=ue([Tt("lexml-emenda-comando")],us);const em=Re`
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
`,tm=Re`
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
`;class Hl extends class{}{constructor(){super(...arguments),this.nivel=0,this.rotulo="",this.agrupador=!1,this.editavel=!0,this.sendoEditado=!1,this.index=0}}const Oi=(o,e)=>new ie(D[e.toLowerCase()],"Transformar "+o.tipo+"em "+D[e.toLowerCase()].name,"transformar"+o.tipo+"Em"+D[e.toLowerCase()].name).execute(o),om=Quill.import("blots/block");class fo extends om{get linha(){return this.parent.parent.parent}get tamanho(){return this.length()-1}get tagName(){return this.domNode.tagName}get html(){return this.domNode.innerHTML!=="<br>"?this.domNode.innerHTML.replace("&nbsp;",""):""}set html(e){this.domNode.innerHTML=e}constructor(e){super(e)}}var Br;(function(o){o[o.Esquerda=0]="Esquerda",o[o.Direita=1]="Direita"})(Br||(Br={}));class io extends fo{constructor(){super(io.create())}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.setAttribute("class",io.className),e}}io.blotName="blotMenu",io.tagName="DIV",io.className="lx-eta-dropdown";class Io extends fo{constructor(){super(Io.create())}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.setAttribute("class",Io.className),e.innerHTML="&vellip;",e}}Io.blotName="blotMenuBotao",Io.tagName="DIV",Io.className="lx-eta-dropbtn";class ko extends fo{constructor(e){super(ko.create(e))}static create(e){const t=super.create(),i=e===Br.Esquerda?"":" lx-eta-dropdown-content-right";return t.setAttribute("contenteditable","false"),t.setAttribute("class",ko.className+i),t}}ko.blotName="blotMenuConteudo",ko.tagName="DIV",ko.className="lx-eta-dropdown-content";class Po extends fo{constructor(e,t){super(Po.create(e,t))}static create(e,t){var i;const r=super.create();return r.setAttribute("contenteditable","false"),r.setAttribute("class",Po.className),r.innerHTML=(i=e.descricao)!==null&&i!==void 0?i:"",r.addEventListener("mousedown",()=>{var n;if(e.descricao==ca.descricao){const s=(n=document.getSelection())===null||n===void 0?void 0:n.focusOffset;localStorage.setItem("indexCursor",JSON.stringify(s))}t(e.descricao)}),r}}Po.blotName="blotMenuItem",Po.tagName="DIV",Po.className="lx-eta-dropdown-content-item";class Je extends fo{constructor(e){super(Je.create(e))}static create(e){const t=super.create();return t.setAttribute("contenteditable","false"),t.setAttribute("class",Je.getClasseCSS(e.agrupador)),t.setAttribute("data-rotulo",e.rotulo),t.innerHTML="",t.onclick=()=>t.dispatchEvent(new CustomEvent("rotulo",{bubbles:!0,cancelable:!0,detail:{elemento:e}})),t}get rotulo(){return this.domNode.getAttribute("data-rotulo")}format(e,t){e===Je.blotName?this.domNode.setAttribute("data-rotulo",t):e===Je.formatoStyle?this.domNode.setAttribute("style",Je.criarAtributoStyle(t)):super.format(e,t)}static criarAtributoStyle(e){let t=e.tipo==="Articulacao"?"color: #373634; font-weight: 600; line-height: 0.42;":"color: #373634; font-weight: 600; line-height: 1.42;";return t=e.agrupador?`${t} display: block; font-size: 1rem; text-align: center;`:`${t} float: left; margin-right: 10px;`,t}static getClasseCSS(e){return"texto__rotulo"+(e?" texto__rotulo--agrupador":" texto__rotulo--padrao")}}Je.blotName="rotulo",Je.tagName="LABEL",Je.formatoStyle="STYLE";class Nt extends fo{constructor(){super(Nt.create())}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.innerHTML="&nbsp;",e}}Nt.blotName="espaco",Nt.tagName="ESPACO",Nt.className="espaco";const im=Quill.import("blots/container");class Ye extends im{constructor(e){var t,i,r,n,s;super(Ye.create(e)),this._lexmlId=(t=e.lexmlId)!==null&&t!==void 0?t:"",this._editavel=e.editavel,this._nivel=e.nivel,this._numero=(i=e.numero)!==null&&i!==void 0?i:"",this._tipo=(r=e.tipo)!==null&&r!==void 0?r:"",this._agrupador=e.agrupador,this._hierarquia=!((s=(n=e.hierarquia)===null||n===void 0?void 0:n.pai)===null||s===void 0)&&s.uuidAlteracao?e.hierarquia:void 0,this._descricaoSituacao=e.descricaoSituacao?e.descricaoSituacao:void 0,this._existeNaNormaAlterada=e.existeNaNormaAlterada}static criarId(e){return`lxEtaId${e!=null?e:0}`}static create(e){const t=super.create();return t.setAttribute("contenteditable",e!=null&&e.editavel?"true":"false"),t.setAttribute("class",Ye.className+" "+Ye.getClasseCSS(e)),t.setAttribute("id",Ye.criarId(e.uuid)),t.setAttribute("cellpadding","0"),t.setAttribute("cellspacing","0"),t.setAttribute("border","0"),t}get blotRotulo(){var e,t;return(t=(e=this.children.head)===null||e===void 0?void 0:e.children)===null||t===void 0?void 0:t.head.children.head}get blotConteudo(){var e;return(e=this.blotRotulo)===null||e===void 0?void 0:e.next}get containerDireito(){return this.children.head.children.tail}get blotContainerDireito(){return this.containerDireito.children.head}get tamanho(){return this.length()-1}get id(){var e;return(e=this.domNode.getAttribute("id"))!==null&&e!==void 0?e:""}set agrupador(e){this._agrupador=e}get agrupador(){return this._agrupador}set editavel(e){this._editavel=e,this.blotConteudo.domNode.contentEditable=this._editavel}get editavel(){return this._editavel}set hierarquia(e){this._hierarquia=e}get hierarquia(){return this._hierarquia}set nivel(e){this._nivel=e}get nivel(){return this._nivel}set numero(e){this._numero=e}get numero(){return this._numero}set tipo(e){this._tipo=e}get tipo(){return this._tipo}set descricaoSituacao(e){this._descricaoSituacao=e}get descricaoSituacao(){return this._descricaoSituacao}set existeNaNormaAlterada(e){this._existeNaNormaAlterada=e}get existeNaNormaAlterada(){return this._existeNaNormaAlterada}get uuid(){return parseInt(this.id.substr(7),0)}set lexmlId(e){this._lexmlId=e}get lexmlId(){var e;return(e=this._lexmlId)!==null&&e!==void 0?e:""}get html(){return this.domNode.innerHTML!=="<br>"?this.domNode.innerHTML:""}set html(e){this.domNode.innerHTML=e}setEstilo(e){let t="",i="texto__dispositivo";switch(e.descricaoSituacao){case j.DISPOSITIVO_ADICIONADO:t="dispositivo--adicionado";break;case j.DISPOSITIVO_MODIFICADO:t="dispositivo--modificado";break;case j.DISPOSITIVO_SUPRIMIDO:t="dispositivo--suprimido",i="texto--suprimido"}this.blotRotulo.domNode.setAttribute("class",`${Je.getClasseCSS(this._agrupador)} ${t} ${e.numero===void 0?"rotulo":""}`),this.blotConteudo.domNode.setAttribute("class",`${t} ${i}`)}format(e,t){e===Ye.blotName?this.domNode.setAttribute("style",Ye.criarAtributoStyle(t)):super.format(e,t)}ativarBorda(){this.domNode.classList.add("container__elemento--ativo")}desativarBorda(){this.domNode.classList.remove("container__elemento--ativo"),this.limparContainerDireito()}limparContainerDireito(){this.blotContainerDireito.tagName!==Nt.tagName&&(this.blotContainerDireito.remove(),new Nt().insertInto(this.containerDireito))}static criarAtributoStyle(e){let t=e.tipo==="Articulacao"?"width: 100%; min-height: 1px; line-height: 0.42; margin: 1px":"width: 100%; min-height: 26px; border: 1px solid #ffffff; line-height: 1.42; margin: 0px 2px 0px 5px !important;";return e.agrupador&&(t=`${t} text-align: center;`),t}static getClasseCSS(e){let t=e.tipo==="Articulacao"?"container__elemento--articulacao":"container__elemento--padrao";return e.agrupador&&(t=`${t} agrupador`),t}}function Se(o){o.stopPropagation(),o.preventDefault()}Ye.blotName="containerTable",Ye.tagName="DIV",Ye.className="container__elemento";class rm{constructor(e,t){this.callback=e,this.canceled=t}isCanceled(){var e;return(e=this.canceled)!==null&&e!==void 0&&e}cancel(){this.canceled=!0}}class Et{constructor(){this.subscriptions=[]}subscribe(e){const t=new rm(e);return this.subscriptions.push(t),t}notify(e){this.subscriptions.forEach(t=>{t.isCanceled()||setTimeout(()=>{t.callback(e)},1)})}clean(){this.subscriptions=[]}}const nm=/([a-zA-Z0-9áéíóúÁÉÍÓÚãẽĩõũÃẼĨÕŨàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛçÇýÝỹỸỳỲÿŸŶŷñÑ '!@#$%&*()_\-+=`'{[^~}\]<,>.:;?/|\\ªº¹²³£¢¬§¿¡“”])/i,sm=/([^a-zA-Z0-9áéíóúÁÉÍÓÚãẽĩõũÃẼĨÕŨàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛçÇýÝỹỸỳỲÿŸŶŷñÑ '!@#$%&*()_\-+=`'{[^~}\]<,>.:;?/|\\ªº¹²³£¢¬§¿¡“”])/gi,md=Quill.import("modules/keyboard");class am extends md{constructor(e,t){super(e,t),this.operacaoTecladoInvalida=new Et,this.adicionaElementoTeclaEnter=new Et,this.removeElemento=new Et,this.removeElementoSemTexto=new Et,this.renumeraElemento=new Et,this.transformaElemento=new Et,this.moveElemento=new Et,this.onChange=new Et,this.altGraphPressionado=!1}listen(){this.quill.root.addEventListener("keyup",e=>{e.key==="AltGraph"&&(this.altGraphPressionado=!1),!e.ctrlKey||e.altKey||e.shiftKey||!"biBI".includes(e.key)?this.quill.cursorDeTextoEstaSobreLink()||e.key==="Backspace"&&this.quill.cursorDeTextoEstaSobreLink(-1)||!this.isTeclaQueAlteraTexto(e)||this.onChange.notify("keyboard"):this.onHotKeyToolbar()}),this.quill.root.addEventListener("keypress",e=>{this.quill.cursorDeTextoEstaSobreLink()&&e.key.length===1&&Se(e)}),this.quill.root.addEventListener("keydown",e=>{if(e.key==="AltGraph"&&(this.altGraphPressionado=!0),this.quill.cursorDeTextoEstaSobreLink()||e.key==="Backspace"&&this.quill.cursorDeTextoEstaSobreLink(-1)){if(["Delete","Backspace"].includes(e.key)||!e.ctrlKey&&e.key.length===1||e.ctrlKey&&"xvXV".includes(e.key)||e.altKey&&"0123456789".includes(e.key))return void Se(e)}else e.ctrlKey?(e.altKey||e.metaKey||(e.key==="Delete"?Se(e):e.key==="Home"?this.onTeclaHome(e):e.key==="End"?this.onTeclaEnd(e):e.key==="ArrowUp"||e.key==="ArrowDown"?this.onHotKeyMover(e):e.key.toLowerCase()!=="a"||e.shiftKey?e.key.toLowerCase()==="d"?this.onTeclaCtrlD(e):e.key.toLowerCase()==="z"?this.onTeclaCtrlZ(e):e.key.toLowerCase()==="y"?this.onTeclaCtrlY(e):e.ctrlKey&&e.shiftKey&&e.key.toLowerCase()==="a"?this.onTeclaCtrlShiftA(e):e.key!=="b"&&e.key!=="i"&&e.key!=="x"&&e.key!=="v"||this.onValidarTecla(e):this.onTeclaCtrlA(e)),(e.altKey||e.metaKey)&&(["a","l","n","o","p","t"].includes(e.key.toLowerCase())?this.onHotKeyTransformacaoTipo(e):e.key.toLowerCase()==="r"&&this.onHotKeyRenumeraDispositivo(e))):e.key==="ArrowRight"?this.onTeclaArrowRight(e):e.key==="ArrowLeft"?this.onTeclaArrowLeft(e):e.key==="ArrowDown"||e.key==="ArrowUp"?this.onTeclaArrowDownOuUp(e):e.key==="Enter"?this.onTeclaEnter(e):e.key==="Escape"?this.onTeclaEscape(e):e.key==="Delete"?this.onTeclaDelete(e):e.key==="Backspace"?this.onTeclaBackspace(e):e.key==="Tab"?this.onTeclaTab(e):e.key.length===1&&nm.test(e.key)&&this.onValidarTecla(e)}),super.listen()}isTeclaComCaracterGrafico(e){return e.location!==3&&"123456=[]/".includes(e.key)}isTeclaQueAlteraTexto(e){return!(e.ctrlKey||e.altKey||e.metaKey)&&!(this.altGraphPressionado&&!this.isTeclaComCaracterGrafico(e))&&!(!["Delete","Backspace"].includes(e.key)&&e.key.length!==1)}verificarOperacaoTecladoPermitida(){const e=this.quill.textoSelecionado;if(e.conteudo&&e.quantidadeCR>0){if(e.quantidadeCR===1&&/\n$/gi.test(e.conteudo)){const t=this.quill.getSelection(!0);return this.quill.setSelection(t.index,t.length-1,Quill.sources.API),!0}return this.operacaoTecladoInvalida.notify(),!1}return!0}onTeclaArrowRight(e){const t=this.quill.getSelection(!0),[i,r]=this.quill.getLine(t.index);r===i.tamanho&&(i.linha.next&&this.quill.setIndex(this.quill.getIndex(i.linha.next.blotConteudo),Quill.sources.USER),Se(e))}onTeclaArrowLeft(e){const t=this.quill.getSelection(!0),[i,r]=this.quill.getLine(t.index);if(r===0){if(i.linha.prev){const n=i.linha.prev,s=this.quill.getIndex(n.blotConteudo)+n.blotConteudo.tamanho;this.quill.setIndex(s,Quill.sources.USER)}Se(e)}}onTeclaArrowDownOuUp(e){this.quill.isProcessandoMudancaLinha&&Se(e)}onTeclaEnter(e){if(this.verificarOperacaoTecladoPermitida()){const t=this.quill.getSelection(!0);this.quill.setSelection(t.index,0,Quill.sources.SILENT),this.adicionaElementoTeclaEnter.notify(t)}Se(e)}onTeclaEscape(e){const t=this.quill.getSelection(!0);this.quill.setIndex(t.index,Quill.sources.SILENT),this.quill.setSelection(this.quill.inicioConteudoAtual,0,Quill.sources.SILENT),Se(e)}onTeclaDelete(e){const t=this.quill.getSelection(!0);this.quill.linhaAtual.blotConteudo.html?this.verificarOperacaoTecladoPermitida()&&t.index!==this.quill.fimConteudoAtual||Se(e):(Se(e),this.removeElementoSemTexto.notify(e.key))}onTeclaBackspace(e){const t=this.quill.getSelection(!0);this.quill.linhaAtual.blotConteudo.html?(!this.verificarOperacaoTecladoPermitida()||t.index===this.quill.inicioConteudoAtual&&t.length===0)&&Se(e):(Se(e),this.removeElementoSemTexto.notify(e.key))}onValidarTecla(e){this.verificarOperacaoTecladoPermitida()||Se(e)}onTeclaHome(e){const t=this.quill.getIndex(this.quill.getPrimeiraLinha().blotConteudo);this.quill.setIndex(t,Quill.sources.USER),this.quill.scroll.domNode.scrollTo(0,0),Se(e)}onTeclaEnd(e){var t,i;const r=(i=this.quill.getIndex(this.quill.getUltimaLinha().blotConteudo)+((t=this.quill.getUltimaLinha().blotConteudo)===null||t===void 0?void 0:t.tamanho))!==null&&i!==void 0?i:0;this.quill.setIndex(r,Quill.sources.USER),this.quill.scroll.domNode.scrollTo(0,this.quill.scroll.domNode.scrollHeight),Se(e)}onTeclaCtrlD(e){this.removeElemento.notify(),Se(e)}onTeclaTab(e){this.transformaElemento.notify(e),Se(e)}onTeclaCtrlZ(e){this.quill.undo(),Se(e)}onTeclaCtrlY(e){this.quill.redo(),Se(e)}onTeclaCtrlA(e){const t=this.quill.getIndex(this.quill.scroll.children.head.blotConteudo);this.quill.setSelection(t,this.quill.getLength(),Quill.sources.SILENT),Se(e)}onTeclaCtrlShiftA(e){this.quill.setSelection(this.quill.inicioConteudoAtual,this.quill.linhaAtual.blotConteudo.tamanho,Quill.sources.SILENT),Se(e)}onHotKeyRenumeraDispositivo(e){this.renumeraElemento.notify(e),Se(e)}onHotKeyMover(e){this.moveElemento.notify(e),Se(e)}onHotKeyTransformacaoTipo(e){this.transformaElemento.notify(e),Se(e)}onHotKeyToolbar(){var e;!((e=document.getSelection())===null||e===void 0)&&e.toString()&&this.onChange.notify("toolbar(hotkey)")}}class ni extends fo{constructor(e){super(ni.create(e)),this._htmlAnt=""}static create(e){var t,i;const r=super.create(),n=((i=(t=e.conteudo)===null||t===void 0?void 0:t.texto)!==null&&i!==void 0?i:"").trim();return r.setAttribute("contenteditable",e!=null&&e.editavel?"true":"false"),r.innerHTML=n!==""?n:"<br>",r}set htmlAnt(e){this._htmlAnt=e}get htmlAnt(){return this._htmlAnt}get alterado(){return this._htmlAnt!==this.html}}ni.blotName="texto",ni.tagName="P",ni.className="texto__dispositivo";class si extends fo{constructor(e){super(si.create(e))}static create(e){const t=super.create();let i="";return i=e.tipo===Y.INFO?"mensagem--info":e.tipo===Y.WARNING?"mensagem--warning":"mensagem--danger",t.setAttribute("contenteditable","false"),t.classList.add(i),t.innerHTML=e.descricao?e.descricao:"",t}}si.blotName="mensagem",si.tagName="div",si.className="mensagem";class Yi extends fo{constructor(){super(Yi.create())}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.setAttribute("style","font-size: 0.8em;"),e}}Yi.blotName="mensagens",Yi.tagName="MENSAGENS";const lm=Quill.import("modules/clipboard");class cm extends lm{constructor(e,t){super(e,t),this.onChange=new Et,this.quill.root.addEventListener("cut",i=>{var r;if(this.quill.cursorDeTextoEstaSobreLink())return void Se(i);!((r=document.getSelection())===null||r===void 0)&&r.toString()&&this.onChange.notify("clipboard")}),this.quill.root.addEventListener("paste",i=>{var r;if(this.quill.cursorDeTextoEstaSobreLink())return void Se(i);!((r=i.clipboardData)===null||r===void 0)&&r.getData("text/plain")&&this.onChange.notify("clipboard")})}convert(e){if(typeof e=="string")return this.container.innerHTML=e,super.convert();this.container.innerHTML=this.container.innerHTML.replace(sm,""),this.container.innerHTML=this.container.innerHTML.replace(/(<p\s*)/gi," <p"),this.container.innerHTML=this.container.innerHTML.replace(/(<br\s*\/>)/gi," "),this.container.innerHTML=this.container.innerHTML.replace(/<(?!strong)(?!\/strong)(?!em)(?!\/em)(?!sub)(?!\/sub)(?!sup)(?!\/sup)(.*?)>/gi,""),this.container.innerHTML=this.container.innerHTML.replace(/<([a-z]+) .*?=".*?( *\/?>)/gi,"<$1$2");const t=super.convert();return this.container.innerHTML="",t}onPaste(e){var t;e.preventDefault();const i=this.quill.getSelection(),r=(t=e==null?void 0:e.clipboardData)===null||t===void 0?void 0:t.getData("text/html"),n=new DOMParser().parseFromString(r,"text/html");let s="";const p=["A","B","STRONG","I","EM","SUP","SUB"],u=(d,c)=>{for(c(d),d=d.firstChild;d;)u(d,c),d=d.nextSibling};u(n,function(d){p.includes(d.tagName)?s+=d.outerHTML:d.nodeType!==3||p.includes(d.parentElement.tagName)||(s+=d.nodeValue)}),this.quill.clipboard.dangerouslyPasteHTML(i.index,s)}}const um=Quill.import("blots/container");class ro extends um{constructor(e){super(ro.create()),this.alinhamentoMenu=e}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.setAttribute("class",ro.className),e}}ro.blotName="containerTdDireito",ro.tagName="DIV",ro.className="container__menu";const dm=Quill.import("blots/container");class Mt extends dm{constructor(e){super(Mt.create(e))}static create(e){const t=super.create();t.setAttribute("contenteditable",e.editavel?"true":"false"),t.setAttribute("class",Mt.className+" container__texto--nivel"+e.nivel);const i=Number(getComputedStyle(document.documentElement).getPropertyValue("--elemento-padding-factor"));if(i){const r=(e.agrupador?0:e.nivel)*i+5;t.setAttribute("style",`padding-left: ${r}px;`)}return t}}Mt.blotName="containerTdEsquerdo",Mt.tagName="DIV",Mt.className="container__texto",Mt.classLevel="level";const pm=Quill.import("blots/container");class no extends pm{constructor(e,t){super(no.create(e,t))}static create(e,t){const i=super.create(),r=t===Br.Esquerda?" container__linha--reverse":"";return i.setAttribute("contenteditable",e?"true":"false"),i.setAttribute("class",no.className+r),i}}no.blotName="containerTr",no.tagName="DIV",no.className="container__linha";class hm extends Quill{constructor(e,t){super(e,t)}getConteudoHtml(e,t,i){const r=this.scroll.children.head;return this.setConteudo(this.converterHtmlParaDelta(e),Quill.sources.SILENT),this.deleteText(t+i,r.length()-i-1,Quill.sources.SILENT),t>0&&this.deleteText(0,t,Quill.sources.SILENT),r.domNode.innerHTML}converterHtmlParaDelta(e){return this.clipboard.convert(e!=null?e:"")}converterDeltaParaHtml(e){return this.setConteudo(e,Quill.sources.SILENT),this.scroll.children.head.domNode.innerHTML}setConteudo(e,t){var i;const r=this.scroll.children.head;let n=0;r.length()>1&&this.deleteText(n,r.length()-1,t!=null?t:Quill.sources.SILENT),this.insertText(n," ",Quill.sources.SILENT),(i=e.ops)===null||i===void 0||i.forEach(s=>{s.attributes?this.insertText(n,s.insert,s.attributes,t!=null?t:Quill.sources.SILENT):this.insertText(n,s.insert,t!=null?t:Quill.sources.SILENT),n+=s.insert.length}),this.deleteText(n,1,Quill.sources.SILENT)}}class Ae extends Quill{constructor(e,t,i){super(e,i),this._undoEstruturaVazio=!0,this._redoEstruturaVazio=!0,this._processandoMudancaLinha=!1,this.undoRedoEstrutura=new Et,this.elementoSelecionado=new Et,this.aspasAberta=!1,this.observableSelectionChange=new Et,this.onSelectionChange=(r,n)=>{const s=this.linhaAtual;this._mudouDeLinha=this.verificarMudouLinha(r,n),this._mudouDeLinha&&(this.observableSelectionChange.notify(s),this.aspasAberta=!1,this.limparHistory())},this.onTextChange=()=>{this._linhaAtual&&setTimeout(()=>{this.acertarAspas()},0)},this.on("text-change",this.onTextChange),this.on("selection-change",this.onSelectionChange),this.buffer=new hm(t,{}),this.root.addEventListener("dragstart",r=>{r.preventDefault()}),this.root.addEventListener("drop",r=>{r.preventDefault()})}get mudouDeLinha(){var e;return(e=this._mudouDeLinha)!==null&&e!==void 0&&e}get linhaAnterior(){return this._linhaAnterior}get linhaAtual(){return this._linhaAtual}get inicioConteudoAtual(){return this.getIndex(this.linhaAtual.blotConteudo)}get fimConteudoAtual(){return this.inicioConteudoAtual+this.linhaAtual.blotConteudo.tamanho}get textoSelecionado(){var e,t,i;const r=(e=this.getSelection(!0))!==null&&e!==void 0?e:{index:0,length:0},n=this.getText().substr(r.index,r.length);return{conteudo:n,quantidadeCR:(i=(t=n.match(/(\n)/gi))===null||t===void 0?void 0:t.length)!==null&&i!==void 0?i:0}}get isUndoEstruturaVazio(){return this._undoEstruturaVazio}set undoEstruturaVazio(e){this._undoEstruturaVazio=e}get isRedoEstruturaVazio(){return this._redoEstruturaVazio}set redoEstruturaVazio(e){this._redoEstruturaVazio=e}get isProcessandoMudancaLinha(){return this._processandoMudancaLinha}set processandoMudancaLinha(e){this._processandoMudancaLinha=e}static configurar(){const e=Ae.import("parchment"),t=new e.Attributor.Attribute("id","id",{scope:e.Scope.BLOCK}),i=new e.Attributor.Style("paddingLeft","padding-left",{scope:e.Scope.BLOCK}),r=new e.Attributor.Style("border","border",{scope:e.Scope.BLOCK}),n=new e.Attributor.Style("borderColor","border-color",{scope:e.Scope.BLOCK}),s=new e.Attributor.Style("display","display",{scope:e.Scope.BLOCK}),p=new e.Attributor.Style("aria-label","aria-label",{scope:e.Scope.BLOCK}),u=new e.Attributor.Attribute("dataRotulo","data-rotulo",{scope:e.Scope.BLOCK});Ae.register("modules/clipboard",cm,!0),Ae.register("modules/keyboard",am,!0),Ae.register(ni,!0),Ae.register(Nt,!0),Ae.register(si,!0),Ae.register(Yi,!0),Ae.register(Io,!0),Ae.register(ko,!0),Ae.register(Po,!0),Ae.register(io,!0),Ae.register(Je,!0),Ae.register(Ye,!0),Ae.register(Mt,!0),Ae.register(ro,!0),Ae.register(no,!0),Ae.register(t,!0),Ae.register(i,!0),Ae.register(r,!0),Ae.register(n,!0),Ae.register(s,!0),Ae.register(p,!0),Ae.register(u,!0)}destroi(){var e,t;this.off("text-change",this.onTextChange),this.off("selection-change",this.onSelectionChange),(e=this.keyboard)===null||e===void 0||e.operacaoTecladoInvalida.clean(),(t=this.keyboard)===null||t===void 0||t.adicionaElementoTeclaEnter.clean()}getConteudoHtmlParteLinha(e,t,i){return this.buffer.getConteudoHtml(e.html,t,i)}getPrimeiraLinha(){return this.scroll.children.head}getUltimaLinha(){return this.scroll.children.tail}getLinha(e,t=this.getPrimeiraLinha()){return t.uuid===e?t:t.next?this.getLinha(e,t.next):void 0}getLinhaPorId(e){return Quill.find(this.getHtmlElement(Ye.criarId(e)),!1)}setIndex(e,t=Quill.sources.USER){var i;const r=(i=this.getSelection(!0))!==null&&i!==void 0?i:{index:0,length:0};e===r.index&&r.length===0||this.setSelection(e,0,t)}setConteudoLinha(e,t,i){var r;let n=this.getIndex(e);e.length()>1&&this.deleteText(n,e.length()-1,i!=null?i:Quill.sources.SILENT),this.insertText(n," ",Quill.sources.SILENT),(r=t.ops)===null||r===void 0||r.forEach(s=>{s.attributes?this.insertText(n,s.insert,s.attributes,i!=null?i:Quill.sources.SILENT):this.insertText(n,s.insert,i!=null?i:Quill.sources.SILENT),n+=s.insert.length}),this.deleteText(n,1,Quill.sources.SILENT)}converterHtmlParaDelta(e){return this.buffer.converterHtmlParaDelta(e)}converterDeltaParaHtml(e){return this.buffer.converterDeltaParaHtml(e)}irProximaLinha(){var e;const t=this.getIndex((e=this._linhaAtual)===null||e===void 0?void 0:e.next.blotConteudo);this.setSelection(t,0)}desmarcarLinhaAtual(e){this._linhaAnterior=e,e==null||e.desativarBorda()}marcarLinhaAtual(e){e&&e.tipo!=="Articulacao"&&(this.atualizarLinhaCorrente(e),this.elementoSelecionado.notify(e.uuid))}undo(){this.history.stack.undo.length===0?this.isUndoEstruturaVazio||this.undoRedoEstrutura.notify(Ae.UNDO):(this.history.undo(),this.focus())}redo(){this.history.stack.redo.length===0?this.isRedoEstruturaVazio||this.undoRedoEstrutura.notify(Ae.REDO):(this.history.redo(),this.focus())}limparHistory(){setTimeout(()=>{this.history.clear()},0)}desmarcarLinhas(){document.querySelectorAll(".container__elemento--ativo").forEach(e=>{this.getLinhaPorId(parseInt(e.id.substr(7),0)).desativarBorda()})}verificarMudouLinha(e,t){if(t&&(e==null?void 0:e.index)===0&&(e==null?void 0:e.length)===0)return this.setSelection(t.index,0),!1;if(e){const i=this.getLine(e.index)[0],r=i.linha;if(i.tagName!==Je.tagName&&i.tagName!==Nt.tagName&&i.tagName!==io.tagName&&i.tagName!==Yi.tagName||this.setSelection(this.getIndex(i.linha.blotConteudo),0,Quill.sources.SILENT),t){const n=this.getLine(t.index)[0];if(n&&r===n.linha)return!1}return this.desmarcarLinhas(),this.marcarLinhaAtual(r),!0}return!1}getHtmlElement(e){return this.root.querySelector(`#${e}`)}acertarAspas(){var e,t;if(this._linhaAtual){const i=this.inicioConteudoAtual,r=(t=this.getText(i,(e=this.linhaAtual)===null||e===void 0?void 0:e.blotConteudo.tamanho))!==null&&t!==void 0?t:"";let n=i;if(r.indexOf('"')>-1)for(let s=0;s<r.length;s++)r[s]==='"'&&(n+=s,this.deleteText(n,1,Quill.sources.SILENT),this.insertText(n,this.aspasAberta?"\u201D":"\u201C",Quill.sources.SILENT),this.aspasAberta=!this.aspasAberta,n=i)}}atualizarLinhaCorrente(e){this.processandoMudancaLinha=!0,this._linhaAtual=e,this._linhaAtual.blotConteudo.htmlAnt=this._linhaAtual.blotConteudo.html,e.ativarBorda(),this.scrollToElemento(e.uuid)}scrollToElemento(e){const t=this.getHtmlElement(Ye.criarId(e));setTimeout(()=>{this.isInEtaBoxViewport(t)||this.scrollIntoEtaBox(t)},0)}scrollIntoEtaBox(e){var t;const i=e.offsetTop;(t=e.closest(".ql-editor"))===null||t===void 0||t.scrollTo(0,i)}isInEtaBoxViewport(e){const t=e.getBoundingClientRect(),i=e.closest("#lx-eta-box").getBoundingClientRect().bottom;return t.top>=0&&t.bottom<=i}cursorDeTextoEstaSobreLink(e=0){var t;const i=this.getSelection(!0),r=this.getContents(i.index+e,1).ops;return!!r&&((t=r[0].attributes)===null||t===void 0?void 0:t.link)}}Ae.UNDO="undo",Ae.REDO="redo";class gr{static criarContainerLinha(e){const t=new Ye(e),i=new no(e.editavel,this.alinhamentoMenu),r=new Mt(e),n=new ro(this.alinhamentoMenu);return new Je(e).insertInto(r),new ni(e).insertInto(r),new Nt().insertInto(n),r.insertInto(i),n.insertInto(i),i.insertInto(t),t}static criarContainerMensagens(e){const t=new no(!1,this.alinhamentoMenu),i=new Mt(e),r=new ro(this.alinhamentoMenu);return e.mensagens&&e.mensagens.length>0&&e.mensagens.forEach(n=>{new si(n).insertInto(i)}),new Nt().insertInto(r),i.insertInto(t),r.insertInto(t),t}}async function fm(o,e,t,i){var r;const n=document.createElement("elix-dialog"),s=document.createRange().createContextualFragment(`
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


  `),p=o.norma?(r=mi(o.norma))===null||r===void 0?void 0:r.urn:void 0,u=o.norma?Rn(o.norma):void 0,d=o.norma?zi(o.norma):void 0,c=s.querySelector("#tipoNorma"),l=s.querySelector("#numeroNorma"),a=s.querySelector("#dataNorma");p&&(c.value=p),u&&(l.value=u),d&&(a.value=d);const h=s.querySelectorAll("button"),f=h[0],m=h[1],g=s.querySelector(".erro");f.onclick=()=>{const v=((y,b,x,w)=>{var E;return`urn:lex:br:${y}:${b}:${(E=od(w))!==null&&E!==void 0?E:w};${x}`})("federal",c.value,l==null?void 0:l.value,a==null?void 0:a.value);id(v)?(e.focus(),n.close(),g.style.display="none",o.norma=v,t.dispatch(i.execute(o))):(g.innerText="Dados inv\xE1lidos",g.style.display="block")},m.onclick=()=>{e.focus(),n.close()},n.appendChild(s),await n.open()}gr.alinhamentoMenu=Br.Esquerda;let Kl=class extends Pn(me)(rt){constructor(){super(),this.inscricoes=[],this.onSelectionChange=(o,e,t)=>{(o==null?void 0:o.length)===0&&t===Quill.sources.USER&&this.ajustarLinkParaNorma()},this.tabIndex=-1}get quill(){return this._quill}createRenderRoot(){return this}async firstUpdated(){this.inicializar(this.configEditor())}stateChanged(o){var e,t;this.quill?(this.quill.undoEstruturaVazio=((e=o.elementoReducer.past)!==null&&e!==void 0?e:[]).length===0,this.quill.redoEstruturaVazio=((t=o.elementoReducer.future)!==null&&t!==void 0?t:[]).length===0,o.elementoReducer.ui&&(o.elementoReducer.ui.message?this.alertar(o.elementoReducer.ui.message.descricao):this.processarStateEvents(o.elementoReducer.ui.events))):this.quillNaoInicializado(o)}disconnectedCallback(){this.inscricoes.forEach(o=>o.cancel()),this.removeEventListener("ontextchange",o=>console.log(o)),this.removeEventListener("rotulo",o=>console.log(o)),this.destroiQuill(),super.disconnectedCallback()}render(){return Re`
      ${tm}
      ${em}
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
    `}formatacaoAlterada(){var o;!((o=document.getSelection())===null||o===void 0)&&o.toString()&&this.agendarEmissaoEventoOnChange("toolbar")}onClickUndo(){this.quill.undo()}onClickRedo(){this.quill.redo()}onClickDispositivoAtual(){this.quill.setSelection(this.quill.getIndex(this.quill.linhaAtual.blotConteudo),0,Quill.sources.SILENT),this.quill.focus()}artigoOndeCouber(){}ajustarLinkParaNorma(){const o=document.querySelector("a.ql-preview"),e=o==null?void 0:o.getAttribute("href");if(e!=null&&e.startsWith("urn")){const t="https://normas.leg.br/?urn="+e;o.setAttribute("href",t),o.innerHTML=(i=>{var r;const n=td(i),s=Rn(n),p=(r=mi(n))===null||r===void 0?void 0:r.descricao,u=zi(n);return(p||"")+(s?" n\xBA "+s:"")+(u.length>7?" de "+u:"")})(e)}}onBold(o){this.quill.keyboard.verificarOperacaoTecladoPermitida()&&(this.quill.format("bold",o),this.formatacaoAlterada())}onItalic(o){this.quill.keyboard.verificarOperacaoTecladoPermitida()&&(this.quill.format("italic",o),this.formatacaoAlterada())}onScript(o){this.quill.keyboard.verificarOperacaoTecladoPermitida()&&(this.quill.format("script",o),this.formatacaoAlterada())}onOperacaoInvalida(){this.alertar("Opera\xE7\xE3o n\xE3o permitida.")}isDesmembramento(o,e,t){return(e+t).localeCompare(o)!==0}adicionarElemento(o){var e,t;const i=this.quill.linhaAtual,r=i.blotConteudo,n=(e=this.quill.inicioConteudoAtual)!==null&&e!==void 0?e:0,s=(t=n+r.tamanho)!==null&&t!==void 0?t:0;let p="",u="";if(o.index===n)p="",u=r.html;else if(o.index===s)p=r.html,u="";else{const c=s-o.index;p=this.quill.getConteudoHtmlParteLinha(r,0,r.tamanho-c),u=this.quill.getConteudoHtmlParteLinha(r,o.index-n,c)}const d=this.criarElemento(i.uuid,i.lexmlId,i.tipo,p,i.numero,i.hierarquia);if(this.isDesmembramento(r.htmlAnt,p,u)){const c=this.criarElemento(i.uuid,i.lexmlId,i.tipo,p+u,i.numero,i.hierarquia);me.dispatch(bl.execute(c))}me.dispatch(aa.execute(d,u))}async renumerarElemento(){var o,e;const t=this.quill.linhaAtual,i=t.blotConteudo.html,r=this.criarElemento((o=t.uuid)!==null&&o!==void 0?o:0,t.lexmlId,(e=t.tipo)!==null&&e!==void 0?e:"","",t.numero,t.hierarquia,t.descricaoSituacao,t.existeNaNormaAlterada);let n;if(!(v=>{var y,b;return((b=(y=v.hierarquia)===null||y===void 0?void 0:y.pai)===null||b===void 0?void 0:b.uuidAlteracao)!==void 0&&v.descricaoSituacao!==j.DISPOSITIVO_ORIGINAL})(r))return;const s=document.createElement("elix-dialog"),p=r.descricaoSituacao===j.DISPOSITIVO_ADICIONADO,u=document.createRange().createContextualFragment(`
      <style>
        .dispositivoDeNorma {
          display: ${p?"block":"none"};
        }
      </style>
      <div style="padding: 15px; text-align: center">
        <div>
          Numera\xE7\xE3o do dispositivo:
          <input type="text" style="width: 60px">
        </div>
        <div class="erro" style="margin-top: 10px; color: red; display: none;"></div>
        <div class="dispositivoDeNorma">
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
    `),d=u.querySelector("input");var c;d.value=`${c=t.blotRotulo.rotulo,c.replace(/\./g,"").replace(/["“]/g,"").replace(/^Parte$/i,"").replace(/^Livro$/i,"").replace(/^Titulo$/i,"").replace(/^Capitulo$/i,"").replace(/^Secao$/i,"").replace(/^Subsecao$/i,"").replace(/^Artigo$/i,"").replace(/^Paragrafo$/i,"").replace(/^Inciso$/i,"").replace(/^Alinea$/i,"").replace(/^Item$/i,"").replace(/Art/i,"").replace(/§/i,"").replace(/§/i,"").replace(/[º]/i,"").replace(/[–-][/s]*$/,"").replace(/[)][/s]*$/,"").trim()}`,r.existeNaNormaAlterada!==void 0&&(u.getElementById(r.existeNaNormaAlterada?"existente":"adicionado").checked=!0),p&&r.existeNaNormaAlterada&&(u.querySelector('input[id="existente"]').checked=!0);const l=u.querySelectorAll("button"),a=l[0],h=l[1],f=u.querySelector(".erro");a.onclick=()=>{var v;m()&&(this.quill.focus(),s.close(),((v=r.conteudo)===null||v===void 0?void 0:v.texto)!==i&&(r.conteudo.texto=i,me.dispatch(Gh.execute(r))),me.dispatch(jt.execute(r,d.value.trim(),n==="true")))},h.onclick=()=>{this.quill.focus(),s.close()};const m=()=>{if(document.querySelectorAll('input[name="existeNaNorma"]').forEach(v=>v.checked?n=v.value:void 0),p&&n===void 0){const v="\xC9 necess\xE1rio informar se se trata de dispositivo existente na norma alterada";return f.innerText=v,f.style.display="block",!1}return f.style.display="none",!0},g=()=>{const v=d.value;return/^\s*$/.test(v)?"A numera\xE7\xE3o n\xE3o pode ser vazia.":""};d.onkeyup=v=>{const y=g();f.innerText=y,f.style.display=y?"block":"none",a.disabled=Boolean(y),a.disabled||v.key==="Enter"&&a.click()},s.appendChild(u),a.disabled=Boolean(g()),await s.open()}removerElementoSemTexto(o){var e,t;const i=this.quill.linhaAtual,r=this.criarElemento((e=i.uuid)!==null&&e!==void 0?e:0,i.lexmlId,(t=i.tipo)!==null&&t!==void 0?t:"","",i.numero,i.hierarquia);me.dispatch(Zh.execute(r,o))}removerElemento(){const o=this.quill.linhaAtual,e=`Voc\xEA realmente deseja remover o dispositivo ${o.blotRotulo.rotulo}`;this.confirmar(e,["Sim","N\xE3o"],t=>{var i,r;const n=t.detail.closeResult;if((n&&n.choice)==="Sim"){const s=this.criarElemento((i=o.uuid)!==null&&i!==void 0?i:0,o.lexmlId,(r=o.tipo)!==null&&r!==void 0?r:"","",o.numero,o.hierarquia);me.dispatch(zt.execute(s))}this.quill.focus()})}moverElemento(o){const e=this.quill.linhaAtual,t=e.blotConteudo.html,i=this.criarElemento(e.uuid,e.lexmlId,e.tipo,t,e.numero,e.hierarquia);o.key==="ArrowUp"?me.dispatch(Lo.execute(i)):o.key==="ArrowDown"&&me.dispatch(Ro.execute(i))}transformarElemento(o){const e=this.quill.linhaAtual,t=e.blotConteudo.html,i=this.criarElemento(e.uuid,e.lexmlId,e.tipo,t,e.numero,e.hierarquia);o.key.toLowerCase()==="a"?me.dispatch(Oi(i,D.artigo.name)):o.key.toLowerCase()==="l"?me.dispatch(Oi(i,D.alinea.name)):o.key.toLowerCase()==="n"?me.dispatch(Oi(i,D.inciso.name)):o.key.toLowerCase()==="o"?me.dispatch(Oi(i,D.omissis.name)):o.key.toLowerCase()==="p"?me.dispatch(Oi(i,D.paragrafo.name)):o.key.toLowerCase()==="t"?me.dispatch(Oi(i,D.item.name)):md.keys.TAB&&me.dispatch(o.shiftKey?{type:"SHIFT_TAB",atual:i}:(r=>({type:"TAB",atual:r}))(i))}elementoSelecionado(o){var e;const t=this.quill.linhaAtual,i=this.criarElemento(o,t.lexmlId,(e=t.tipo)!==null&&e!==void 0?e:"","",t.numero,t.hierarquia);me.dispatch(Wh.execute(i)),this.quill.processandoMudancaLinha=!1}undoRedoEstrutura(o){o==="undo"?me.dispatch({type:"UNDO"}):me.dispatch({type:"REDO"})}processarStateEvents(o){o==null||o.forEach(i=>{var r;switch(i.stateType){case M.DocumentoCarregado:this.destroiQuill(),this.inicializar(this.configEditor()),this.carregarArticulacao((r=i.elementos)!==null&&r!==void 0?r:[]);break;case M.InformarNorma:fm(i.elementos[0],this.quill,me,Qh);break;case M.ElementoIncluido:this.inserirNovoElementoNoQuill(i.elementos[0],i.referencia,!0),this.inserirNovosElementosNoQuill(i,!0);break;case M.ElementoModificado:case M.ElementoRestaurado:this.atualizarQuill(i),this.montarMenuContexto(i);break;case M.ElementoSuprimido:this.atualizarSituacao(i),this.montarMenuContexto(i);break;case M.ElementoRemovido:this.removerLinhaQuill(i);break;case M.ElementoRenumerado:this.renumerarQuill(i);break;case M.ElementoValidado:this.atualizarMensagemQuill(i);break;case M.ElementoSelecionado:this.montarMenuContexto(i),this.atualizarMensagemQuill(i);break;case M.ElementoMarcado:this.marcarLinha(i);break;case M.SituacaoElementoModificada:this.atualizarSituacao(i),this.montarMenuContexto(i)}this.quill.limparHistory()});const e=[M.ElementoModificado,M.ElementoSuprimido,M.ElementoRestaurado,M.ElementoIncluido,M.ElementoRemovido,M.ElementoRenumerado],t=o==null?void 0:o.filter(i=>e.includes(i.stateType)).map(i=>i.stateType);t!=null&&t.length&&this.agendarEmissaoEventoOnChange("stateEvents")}marcarLinha(o){this.quill.desmarcarLinhaAtual(this.quill.linhaAtual);const e=o.elementos[0],t=this.quill.getLinha(e.uuid),i=this.quill.getIndex(t.blotConteudo);this.quill.setIndex(i,Quill.sources.SILENT),this.quill.atualizarLinhaCorrente(t),this.elementoSelecionado(t.uuid),o.moverParaFimLinha&&setTimeout(()=>{const r=this.quill.getSelection().index+this.quill.linhaAtual.blotConteudo.html.length;this.quill.setSelection(r,0,Quill.sources.USER)},0)}processarEscolhaMenu(o){var e,t,i,r;if(o==="Remover dispositivo")this.removerElemento();else if(o===jt.descricao)this.renumerarElemento();else{const n=this.quill.linhaAtual,s=this.criarElemento((e=n.uuid)!==null&&e!==void 0?e:0,n.lexmlId,(t=n.tipo)!==null&&t!==void 0?t:"","",n.numero,n.hierarquia);s.conteudo.texto=(i=n.blotConteudo.html)!==null&&i!==void 0?i:"",me.dispatch((r=o,xa.filter(p=>p.descricao===r.trim())[0]).execute(s))}}inserirNovoElementoNoQuill(o,e,t){var i;const r=this.quill.getLinha(e.uuid);if(r){const n=gr.criarContainerLinha(o);r.next?n.insertInto(this.quill.scroll,r.next):n.insertInto(this.quill.scroll);const s=me.getState().elementoReducer.modo===vt.EMENDA_ARTIGO_ONDE_COUBER;if(((i=this.quill.linhaAtual)===null||i===void 0?void 0:i.blotConteudo.html)!==""||n.blotConteudo.html===""||s){if(t){this.quill.desmarcarLinhaAtual(this.quill.linhaAtual),this.quill.marcarLinhaAtual(n);try{this.quill.setIndex(this.quill.getIndex(n.blotConteudo),Quill.sources.SILENT)}catch{}}}else this.quill.linhaAtual.blotConteudo.htmlAnt=this.quill.linhaAtual.blotConteudo.html;this.quill.linhaAtual.descricaoSituacao=o.descricaoSituacao,this.quill.linhaAtual.existeNaNormaAlterada=o.existeNaNormaAlterada,this.quill.linhaAtual.setEstilo(o)}}inserirNovosElementosNoQuill(o,e){var t;const i=(t=o.elementos)!==null&&t!==void 0?t:[];for(let r=1;r<i.length;r++)this.inserirNovoElementoNoQuill(i[r],i[r-1],e)}atualizarSituacao(o){var e;let t;((e=o.elementos)!==null&&e!==void 0?e:[]).map(i=>{var r;t=this.quill.getLinha((r=i.uuid)!==null&&r!==void 0?r:0,t),t&&i.descricaoSituacao!==t.descricaoSituacao&&(t.descricaoSituacao=i.descricaoSituacao,t.setEstilo(i))})}atualizarQuill(o){var e;let t;((e=o.elementos)!==null&&e!==void 0?e:[]).map(i=>{var r,n,s,p,u;if(t=this.quill.getLinha((r=i.uuid)!==null&&r!==void 0?r:0,t),t){let d=!1;i.editavel!==t.editavel&&(t.editavel=i.editavel),i.rotulo!==t.blotRotulo.html&&(t.numero=(n=i.numero)!==null&&n!==void 0?n:"",t.blotRotulo.format(Je.blotName,i.rotulo)),i.nivel!==t.nivel&&(t.nivel=i.nivel,t.format(Ye.blotName,i),d=!0),i.agrupador!==t.agrupador&&(t.agrupador=i.agrupador,t.blotRotulo.format(Je.formatoStyle,i),d||t.format(Ye.blotName,i)),((s=i.conteudo)===null||s===void 0?void 0:s.texto)!==t.blotConteudo.html&&(t.blotConteudo.html=(u=(p=i.conteudo)===null||p===void 0?void 0:p.texto)!==null&&u!==void 0?u:""),i.descricaoSituacao!==t.descricaoSituacao&&(t.descricaoSituacao=i.descricaoSituacao,t.setEstilo(i)),i.existeNaNormaAlterada!==t.existeNaNormaAlterada&&(t.existeNaNormaAlterada=i.existeNaNormaAlterada),t.children.length===2&&t.children.tail.remove(),i.mensagens&&i.mensagens.length>0&&gr.criarContainerMensagens(i).insertInto(t)}})}removerLinhaQuill(o){var e;let t;((e=o.elementos)!==null&&e!==void 0?e:[]).forEach(n=>{var s;t=this.quill.getLinha((s=n.uuid)!==null&&s!==void 0?s:0,t),t&&t.remove()});const i=this.quill.getLine(this.quill.getSelection(!0).index)[0].linha,r=this.quill.getIndex(i.blotConteudo);this.quill.setSelection(r,0,Quill.sources.SILENT),this.quill.marcarLinhaAtual(i)}renumerarQuill(o){var e;let t;((e=o.elementos)!==null&&e!==void 0?e:[]).map(i=>{var r;t=this.quill.getLinha((r=i.uuid)!==null&&r!==void 0?r:0,t),t&&t.blotRotulo.format(Je.blotName,i.rotulo)})}atualizarMensagemQuill(o){var e;let t;((e=o.elementos)!==null&&e!==void 0?e:[]).map(i=>{var r;t=this.quill.getLinha((r=i.uuid)!==null&&r!==void 0?r:0,t),t&&((t==null?void 0:t.children.length)===2&&t.children.tail.remove(),i.mensagens&&i.mensagens.length>0&&gr.criarContainerMensagens(i).insertInto(t))})}montarMenuContexto(o){var e;const t=o.elementos?o.elementos[0]:new Hl,i=((e=t==null?void 0:t.acoesPossiveis)!==null&&e!==void 0?e:[]).filter(r=>vf(r));if(i.length>0){this.quill.linhaAtual||this.marcarLinha(o);const r=new io,n=new ko(this.quill.linhaAtual.containerDireito.alinhamentoMenu),s=p=>{this.processarEscolhaMenu(p),this.quill.focus()};new Io().insertInto(r),i.forEach(p=>{new Po(p,s).insertInto(n)}),n.insertInto(r),this.quill.linhaAtual.blotContainerDireito.remove(),r.insertInto(this.quill.linhaAtual.containerDireito)}}criarElemento(o,e,t,i,r,n,s,p){const u=new Hl;return u.uuid=o,u.lexmlId=e,u.tipo=t,u.numero=r,u.conteudo={texto:i},u.hierarquia=n,u.descricaoSituacao=s,u.existeNaNormaAlterada=p,u}inicializar(o){const e=this.getHtmlElement("lx-eta-editor"),t=this.getHtmlElement("lx-eta-buffer");Ae.configurar(),this._quill=new Ae(e,t,o),this.quill.on("selection-change",this.onSelectionChange),this.inscricoes.push(this.quill.keyboard.operacaoTecladoInvalida.subscribe(this.onOperacaoInvalida.bind(this))),this.inscricoes.push(this.quill.keyboard.adicionaElementoTeclaEnter.subscribe(this.adicionarElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.moveElemento.subscribe(this.moverElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.removeElemento.subscribe(this.removerElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.removeElementoSemTexto.subscribe(this.removerElementoSemTexto.bind(this))),this.inscricoes.push(this.quill.keyboard.renumeraElemento.subscribe(this.renumerarElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.transformaElemento.subscribe(this.transformarElemento.bind(this))),this.inscricoes.push(this.quill.undoRedoEstrutura.subscribe(this.undoRedoEstrutura.bind(this))),this.inscricoes.push(this.quill.elementoSelecionado.subscribe(this.elementoSelecionado.bind(this))),this.inscricoes.push(this.quill.observableSelectionChange.subscribe(this.atualizarTextoElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.onChange.subscribe(this.agendarEmissaoEventoOnChange.bind(this))),this.inscricoes.push(this.quill.clipboard.onChange.subscribe(this.agendarEmissaoEventoOnChange.bind(this))),e.addEventListener("rotulo",i=>{i.stopImmediatePropagation(),this.renumerarElemento()})}agendarEmissaoEventoOnChange(o){clearTimeout(this.timerOnChange),this.timerOnChange=setTimeout(()=>this.emitirEventoOnChange(o),1e3)}atualizarTextoElemento(o){var e,t,i;if(!((e=o==null?void 0:o.blotConteudo)===null||e===void 0)&&e.alterado){const r=this.criarElemento(o.uuid,o.lexmlId,o.tipo,(i=(t=o.blotConteudo)===null||t===void 0?void 0:t.html)!==null&&i!==void 0?i:"",o.numero,o.hierarquia);me.dispatch(bl.execute(r))}}emitirEventoOnChange(o){this.atualizarTextoElemento(this.quill.linhaAtual),this.dispatchEvent(new CustomEvent("onchange",{bubbles:!0,composed:!0,detail:{origemEvento:o}}))}carregarArticulacao(o){setTimeout(()=>{this.quill.getLine(0)[0].remove(),o.forEach(e=>{gr.criarContainerLinha(e).insertInto(this.quill.scroll),e.tipo===D.generico.tipo&&me.dispatch($u.execute(e))}),this.quill.limparHistory(),o.length>1&&setTimeout(()=>{const e=this.quill.getLinha(o[1].uuid);e!=null&&e.blotConteudo&&this.quill.setSelection(this.quill.getIndex(e==null?void 0:e.blotConteudo),0,Quill.sources.USER)},0),me.dispatch(ju.execute())},0)}configEditor(){return{formats:["bold","italic","link","script"],modules:{toolbar:{container:"#lx-eta-barra-ferramenta",handlers:{bold:this.onBold.bind(this),italic:this.onItalic.bind(this),script:this.onScript.bind(this)}},history:{delay:0,maxStack:500,userOnly:!0}},theme:"snow"}}async confirmar(o,e,t){const i=document.createElement("elix-alert-dialog");i.textContent=o,i.choices=e,i.addEventListener("close",t),await i.open()}alertar(o){const e=this.querySelector("#toast-alerta");this.querySelector("#toast-msg").innerHTML=o,e.fromEdge="top",e.open()}quillNaoInicializado(o){var e;let t=[];const i=r=>{setTimeout(()=>{this.quill?r.length>0&&this.carregarArticulacao(r):i(r)},70)};if(o.elementoReducer.ui){const r=o.elementoReducer.ui.events.find(n=>n.stateType===M.DocumentoCarregado);t=(e=r==null?void 0:r.elementos)!==null&&e!==void 0?e:[]}i(t)}getHtmlElement(o){return this.querySelector(`#${o}`)}destroiQuill(){this.getHtmlElement("lx-eta-editor").innerHTML="",this.getHtmlElement("lx-eta-buffer").innerHTML="",this.quill&&(this.quill.off("selection-change",this.onSelectionChange),this.quill.destroi()),this._quill=void 0}};Kl=ue([Tt("lexml-eta-editor")],Kl);let on=class extends rt{constructor(){super(...arguments),this.htmlAgrupador=()=>{var o,e,t;return Re`<p class="rotulo">${this.elemento.rotulo}</p>
      <p class="texto-agrupador">${An((t=(e=(o=this.elemento)===null||o===void 0?void 0:o.conteudo)===null||e===void 0?void 0:e.texto)!==null&&t!==void 0?t:"")}</p>`},this.htmlDispositivo=()=>{var o,e,t;return Re`
      <p class="texto" style="${`padding-left: ${20*this.elemento.nivel}px;`}">
        <span class="rotulo">${this.elemento.rotulo}</span>
        ${An((t=(e=(o=this.elemento)===null||o===void 0?void 0:o.conteudo)===null||e===void 0?void 0:e.texto)!==null&&t!==void 0?t:"")}
      </p>
    `}}render(){return Re`
      <div class="box">
        <div class="conteudo">${this.elemento.agrupador?this.htmlAgrupador():this.htmlDispositivo()}</div>
      </div>
    `}};on.styles=In`
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
  `,ue([Ge({type:Object})],on.prototype,"elemento",void 0),on=ue([Tt("lexml-eta-elemento")],on);let ds=class extends rt{render(){return Re`
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
    `}};ds.styles=In`
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
  `,ds=ue([Tt("lexml-eta-help")],ds);let ps=class extends rt{constructor(){super(),this.texto="",this.toolbarOptions=[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],["blockquote"],["undo","redo"],[{align:[]}],["clean"]],this.icons=Quill.import("ui/icons"),this.init=()=>{var o;this.container=document.querySelector("#editor-justificativa"),this.container&&(this.quill=new Quill(this.container,{formats:["bold","italic","underline","align","list","script","blockquote"],modules:{toolbar:{container:this.toolbarOptions,handlers:{undo:this.undo,redo:this.redo}},history:{delay:0,maxStack:500,userOnly:!0},clipboard:{}},placeholder:"",theme:"snow"}),this.setContent(this.texto),(o=this.quill)===null||o===void 0||o.on("text-change",this.updateTexto))},this.setContent=o=>{this.quill&&(this.quill.root.innerHTML=o.replace(/indent/g,"ql-indent").replace(/align-justify/g,"ql-align-justify").replace(/align-center/g,"ql-align-center").replace(/align-right/g,"ql-align-right"))},this.updateTexto=()=>{var o,e;this.texto=!((o=this.quill)===null||o===void 0)&&o.root.innerHTML?(e=this.quill)===null||e===void 0?void 0:e.root.innerHTML.replace(/ql-indent/g,"indent").replace(/ql-align-justify/g,"align-justify").replace(/ql-align-center/g,"align-center").replace(/ql-align-right/g,"align-right"):""},this.undo=()=>{var o;return(o=this.quill)===null||o===void 0?void 0:o.history.undo()},this.redo=()=>{var o;return(o=this.quill)===null||o===void 0?void 0:o.history.redo()},this.icons.undo=`<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
    <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
    </svg>`,this.icons.redo=`<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
    <path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
    </svg>`}update(o){super.update(o)}createRenderRoot(){return this}render(){return Re`
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
    `}firstUpdated(){this.init()}};ue([Ge({type:String})],ps.prototype,"texto",void 0),ps=ue([Tt("lexml-emenda-justificativa")],ps);class mm{constructor(){this.dataUltimaModificacao=new Date().toISOString(),this.aplicacao="",this.versaoAplicacao="",this.modoEdicao=Fs.EMENDA,this.metadados={},this.proposicao=new vm,this.colegiadoApreciador=new gm,this.epigrafe=new bm,this.componentes=[new ym],this.comandoEmenda=new yd,this.justificativa="",this.local="",this.autoria=new Oa,this.opcoesImpressao=new Am}}var Fs,zs;(function(o){o.EMENDA="emenda",o.EMENDA_ARTIGO_ONDE_COUBER="emendaArtigoOndeCouber"})(Fs||(Fs={}));class vm{constructor(){this.urn="",this.sigla="",this.numero="",this.ano="",this.ementa="",this.identificacaoTexto=""}}class gm{constructor(){this.siglaCasaLegislativa="CN",this.tipoColegiado="Plen\xE1rio"}}class bm{constructor(){this.texto="",this.complemento=""}}class ym{constructor(){this.urn="",this.articulado=!0,this.dispositivos=new vd}}class vd{constructor(){this.dispositivosSuprimidos=[],this.dispositivosModificados=[],this.dispositivosAdicionados=[]}}class gd{constructor(){this.tipo="",this.id=""}}class xm extends gd{}class bd extends gd{}class wm extends bd{}class yd{constructor(){this.comandos=[]}}class Em{constructor(e,t){this.cabecalho=e,this.citacao=t}}(function(o){o.NAO_IDENTIFICADO="N\xE3o identificado",o.PARLAMENTAR="Parlamentar",o.COMISSAO="Comiss\xE3o",o.CASA_LEGISLATIVA="Casa Legislativa"})(zs||(zs={}));class Oa{constructor(){this.tipo=zs.PARLAMENTAR,this.imprimirPartidoUF=!0,this.quantidadeAssinaturasAdicionaisSenadores=0,this.quantidadeAssinaturasAdicionaisDeputados=0,this.parlamentares=[]}}class Am{constructor(){this.imprimirBrasao=!0,this.textoCabecalho="",this.reduzirEspacoEntreLinhas=!1}}class ve{constructor(e){this.nome=e,this.valores=new Array,this.atributos=new Ce}toString(){if(!this.valores.length)return"<"+this.nome+this.atributos+"/>";const e=new Ce("<"+this.nome+this.atributos+">");return this.valores.forEach(t=>{e.append(t)}),e.append("</"+this.nome+">"),e.toString()}add(e){return e&&this.valores.push(e),this}addAtributo(e,t){return this.atributos.append(" "),this.atributos.append(e),t&&(this.atributos.append("='"),this.atributos.append(t),this.atributos.append("'")),this}}class qt{static compare(e,t){if(!e||!t)throw new Error("Tentativa de compara\xE7\xE3o de dispositivo nulo.");if(!e.pai)return-1;if(!t.pai)return 1;const i=qt.getIndices(e),r=qt.getIndices(t);return qt.comparaIndices(i,r)}static getIndices(e){const t=[];let i=this.getPaiParaComparacao(e);for(;i;)t.push(this.getIndexDoFilho(i,e)),e=i,i=this.getPaiParaComparacao(e);return t.reverse(),t}static getPaiParaComparacao(e){if(e.pai)return V(e.pai)&&Le(e)?e.pai.caput:e.pai}static getIndexDoFilho(e,t){return fe(t)?0:he(t)?e.filhos.indexOf(t)+1:Le(t)?-1:e.filhos.indexOf(t)}static comparaIndices(e,t){let i=0;const r=e.length,n=t.length;for(let s=0;s<r&&s<n&&i===0;s++)i=e[s]-t[s];return i===0&&(i=r-n),i}}class xd{static getAlteracao(e){let t=e;if(t.tipo===D.alteracao.tipo)return t;if(G(t)){for(;t&&t.tipo!==D.alteracao.tipo;)t=t.pai;return t}}static existeNaNormaAlterada(e){return e.situacao.existeNaNormaAlterada}}class X{static getDispositivosNaoOriginais(e){const t=[];return Lt(e,i=>{i.pai&&i.situacao.descricaoSituacao!==j.DISPOSITIVO_ORIGINAL&&t.push(i)}),t}static getDispositivosComando(e){const t=new Array;for(const i of e){if(i.situacao.descricaoSituacao===j.DISPOSITIVO_ORIGINAL||G(i)||Le(i))continue;const r=X.getDispositivoAfetado(i);r&&!t.includes(r)&&t.push(r)}return t}static getDispositivoAfetado(e){if(de(e)||V(e))return e;const t=e.pai;return fe(t)&&t.pai.situacao.descricaoSituacao!==j.DISPOSITIVO_ORIGINAL?t.filhos.find(i=>i.situacao.descricaoSituacao===j.DISPOSITIVO_ORIGINAL)?e:t.pai:X.isAlteracaoIntegral(t)?X.getDispositivoAfetado(t):e}static getDispositivoAfetadoEmAlteracao(e){if(Ee(e)){if(X.isOmissisAdjacenteADispositivoDeEmenda(e))return}else if(e.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO&&X.isTextoOmitido(e))return;const t=fe(e.pai)?e.pai.pai:e.pai;return X.isAlteracaoIntegralEmAlteracao(t)?X.getDispositivoAfetadoEmAlteracao(t):e}static isTextoOmitido(e){var t;return Ee(e)||e.texto.startsWith(yt)||de(e)&&!!(!((t=e.caput)===null||t===void 0)&&t.texto.startsWith(yt))}static getDescricaoSituacaoParaComandoEmenda(e){return e.isDispositivoAlteracao&&e.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO&&xd.existeNaNormaAlterada(e)?j.DISPOSITIVO_MODIFICADO:e.situacao.descricaoSituacao}static isMesmaSituacaoParaComandoEmenda(e,t){return this.getDescricaoSituacaoParaComandoEmenda(e)===this.getDescricaoSituacaoParaComandoEmenda(t)}static isAlteracaoIntegral(e){const t=this.getDescricaoSituacaoParaComandoEmenda(e);if(t===j.DISPOSITIVO_ORIGINAL)return!1;if(t===j.DISPOSITIVO_SUPRIMIDO||t===j.DISPOSITIVO_ADICIONADO)return!0;if(!e.filhos.length)return!V(e)||t!==j.DISPOSITIVO_ORIGINAL;for(const i of e.filhos)if(!X.isAlteracaoIntegral(i))return!1;return!0}static isAlteracaoIntegralEmAlteracao(e){return!Le(e)&&(e.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO&&!X.isTextoOmitido(e)||e.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO)}static getArvoreDispositivos(e){const t=new Map;return e.length&&e.forEach(i=>{this.atualizaMapa(i,t)}),t}static atualizaMapa(e,t){const i=this.getHierarquiaDispositivosDeUmDispositivo(e);let r=t;i.forEach(n=>{const s=r.get(n);if(s)r=s;else{const p=new Map;r.set(n,p),r=p}})}static getHierarquiaDispositivosDeUmDispositivo(e){const t=new Array;t.push(e);let i=e.pai;for(;i&&!ri(i)&&!ef(i);)t.push(i),i=i.pai;return t.reverse(),t}static getArvoreDispositivosDeAlteracaoDeNorma(e){const t=new Map;if(!e.length)return t;for(const i of e)this.atualizaMapaDeAlteracaoDeNorma(i,t);return t}static atualizaMapaDeAlteracaoDeNorma(e,t){const i=this.getHierarquiaDispositivosDeUmDispositivo(e);let r=t;for(const n of i)if(G(n)&&!Le(n))if(r.has(n))r=r.get(n);else{const s=new Map;r.set(n,s),r=s}t=r}static isSequenciasPlural(e){const t=e.length;return t!==0&&(t>1||X.isSequenciaPlural(e[0]))}static isSequenciaPlural(e){const t=e.getQuantidadeRanges();return t!==0&&(t>1||e.getPrimeiroRange().getQuantidadeDispositivos()>1)}static getProximoAgrupador(e){let t=e;do t=jr(t);while(t&&!de(t));return t}static getDispositivoIrmaoPosterior(e){if(V(e)||de(e))return this.getArtigoPosterior(e);if(!this.isUltimoDispositivoDoMesmoTipo(e)){const t=e.pai,i=t.filhos.indexOf(e)+1;return t.filhos[i]}}static getArtigoPosterior(e){const t=e.pai;if(t.filhos.length){for(let i=t.filhos.indexOf(e)+1;i<t.filhos.length;i++){const r=t.filhos[i];if(V(r))return r;if(de(r)){const n=this.buscaProximoArtigo(r);if(n)return n}}if(t.pai)return this.getArtigoPosterior(t)}}static buscaProximoArtigo(e){const t=e.filhos;for(const i of t){if(V(i))return i;if(de(i))return this.buscaProximoArtigo(i)}}static isUltimoDispositivoDoMesmoTipo(e){if(!e.pai)return!0;const t=e.pai,i=t.filhos.indexOf(e);return t.filhos.length===i+1||t.filhos[i+1].tipo!==e.tipo}static getFilhosEstiloLexML(e){if(V(e)){const t=e;return[t.caput,...t.filhos.filter(i=>he(i)||Ee(i)&&!fe(i.pai))]}return e.filhos}static getDispositivoAnteriorDireto(e){const t=e.pai,i=this.getFilhosEstiloLexML(t),r=i.indexOf(e);if(!(r>0))return t;e=i[r-1];let n=this.getFilhosEstiloLexML(e);for(;n.length;)e=n[n.length-1],n=this.getFilhosEstiloLexML(e);return e}static getDispositivoPosteriorDireto(e){const t=this.getFilhosEstiloLexML(e);return t.length?t[0]:this.getProximoIrmaoRecursivo(e)}static getProximoIrmaoRecursivo(e){if(!e)return;const t=jr(e);if(t)return t;{const i=e.pai;return i?void 0:this.getProximoIrmaoRecursivo(i)}}static getRotuloPais(e){const t=new Ce;let i;for(;e&&!V(e);)i=e.pai,t.append(i.pronomePossessivoSingular),t.append(i.getNumeracaoComRotuloParaComandoEmenda()),e=i;return t.toString()}static getDispositivosNaAlteracaoParaComando(e){const t=new Array;Lt(e,r=>{r.situacao.descricaoSituacao!==j.DISPOSITIVO_ORIGINAL&&t.push(r)});const i=new Array;return t.forEach(r=>{const n=X.getDispositivoAfetadoEmAlteracao(r);n&&!i.includes(n)&&i.push(n)}),i.sort(qt.compare),i}static isOmissisAdjacenteADispositivoDeEmenda(e){if(!Ee(e))return!1;const t=X.getDispositivoAnteriorDireto(e);return t&&t.situacao.descricaoSituacao!==j.DISPOSITIVO_ORIGINAL?!0:!(!X.getDispositivoPosteriorDireto(e)||t.situacao.descricaoSituacao===j.DISPOSITIVO_ORIGINAL)}static isMesmoTipoParaComandoEmenda(e,t){return e.tipo===t.tipo&&(!V(e)||X.isAlteracaoIntegral(e)===X.isAlteracaoIntegral(t))}static getTextoDoDispositivoOuOmissis(e,t=!1){return e.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO||e.situacao.descricaoSituacao===j.DISPOSITIVO_MODIFICADO||fe(e)?X.trataTextoParaCitacao(e,t):e.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO?"(Suprimido)":new ve("Omissis")}static trataTextoParaCitacao(e,t=!1){let i=V(e)?e.caput.texto:e.texto;return i=t?i.replace(/”( *(?:\(NR\)) *)?/,""):i.replace(/”( *(?:\(NR\)) *)?/,"\u2019$1 "),i.trim().replace(/\s{2,}/g," ").replace(/^<p>\s?/i,"").replace(/\s?<\/p>$/i,"").replace(/<\/?a.*?>/gi,"").replace(/\s([\\.,:?!])/g,"$1")}static isFechaAspas(e){const t=Fu(e.texto);return/”(?: ?(\(NR\)|\(AC\)))?$/.test(t)}}class _m{constructor(){this.ultimoProcessado=void 0,this.adjacentesOmissis=[]}getTexto(e){e=e.filter(r=>r.pai.situacao.descricaoSituacao!==j.DISPOSITIVO_SUPRIMIDO),this.adjacentesOmissis=this.buscaDispositivosAdjacentesAsOmissis(e),e.push(...this.adjacentesOmissis),e.sort(qt.compare);const t=X.getArvoreDispositivosDeAlteracaoDeNorma(e),i=new Ce;return this.montaCitacaoComando(i,t),i.toString().replace(/(<\/p>)$/,"\u201D$1")}buscaDispositivosAdjacentesAsOmissis(e){const t=new Array;for(const i of e)if(Ee(i)){const r=X.getDispositivoAnteriorDireto(i);if(e.includes(r)||t.push(r),!X.isFechaAspas(i)){const n=X.getDispositivoPosteriorDireto(i);n&&!e.includes(n)&&t.push(n)}}return t}montaCitacaoComando(e,t){var i;const r=[...t.keys()][0];t=t.get(r);const n=(i=r.rotulo)===null||i===void 0?void 0:i.replace("\u201C",""),s=new ve("p").add("\u201C").add(new ve("Rotulo").add(n)).add(X.getTextoDoDispositivoOuOmissis(r,!0));e.append(s.toString()),t.size>0&&(this.ultimoProcessado=r,this.writeDispositivoTo(e,t)),this.writeOmissisFinal(e,r)}writeDispositivoTo(e,t){const i=[...t.keys()];i.sort(qt.compare);for(const r of i){const n=t.get(r),s=X.getDispositivoAnteriorDireto(r);if(V(this.ultimoProcessado)&&!fe(r)?fe(s)||Ee(r)||e.append(new ve("p").add(new ve("Omissis")).toString()):this.ultimoProcessado===s||Ee(r)||s.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO||e.append(new ve("p").add(new ve("Omissis")).toString()),r.situacao.descricaoSituacao!==j.DISPOSITIVO_ORIGINAL){const p=new ve("p").add(new ve("Rotulo").add(r.rotulo)).add(X.getTextoDoDispositivoOuOmissis(r,!0));e.append(p.toString())}else if(this.hasFilhosPropostos(n)||this.adjacentesOmissis.includes(r)){const p=new ve("p");fe(r)||(p.add(new ve("Rotulo").add(r.rotulo)),p.add(new ve("Omissis"))),e.append(p.toString())}else e.append(new ve("Omissis").toString());this.ultimoProcessado=r,n&&n.size>0&&this.writeDispositivoTo(e,n)}}writeOmissisFinal(e,t){if(t.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO)return;let i=t,r=X.getFilhosEstiloLexML(i);for(;r.length;)i=r[r.length-1],r=X.getFilhosEstiloLexML(i);if(i.situacao.descricaoSituacao!==j.DISPOSITIVO_ORIGINAL||this.adjacentesOmissis.includes(i)&&!Ee(i)){if(!X.isFechaAspas(i)){const n=X.getDispositivoPosteriorDireto(i);n&&Ee(n)&&e.append(new ve("p").add(new ve("Omissis")).toString())}}else e.append(new ve("p").add(new ve("Omissis")).toString())}hasFilhosPropostos(e){if(!e||!e.size)return!1;const t=e;let i=!1;for(const[r,n]of t.entries()){if(r.situacao.descricaoSituacao!==j.DISPOSITIVO_ORIGINAL){i=!0;break}!i&&n&&(i=this.hasFilhosPropostos(n))}return i}}class wd{getTexto(e,t=!1){const i=new Ce,r=fe(e)?e.pai.rotulo:e.rotulo,n=new ve("Rotulo").add(r==null?void 0:r.trim()),s=new ve("p").add("\u201C").add(n).add(X.trataTextoParaCitacao(e,t));if(this.necessitaOmissis(e)){const p=new ve("p").add(new ve("Omissis")).add("\u201D");i.append(s.toString()),i.append(p.toString())}else s.add("\u201D"),i.append(s.toString());return i.toString()}necessitaOmissis(e){return this.temFilhoNaoSuprimido(e)&&!G(e)}temFilhoNaoSuprimido(e){for(const t of e.filhos)if(t.situacao.descricaoSituacao!==j.DISPOSITIVO_SUPRIMIDO)return!0;return!1}}class Om{getTexto(e){const t=new Ce,i=new Array;Lt(e,s=>{s.situacao.descricaoSituacao===j.DISPOSITIVO_ORIGINAL||s.situacao.descricaoSituacao!==j.DISPOSITIVO_SUPRIMIDO&&X.isTextoOmitido(s)&&(!Ee(s)||X.isOmissisAdjacenteADispositivoDeEmenda(s))||i.push(s)}),i.sort(qt.compare);const r=i.length,n=i.filter(s=>s.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO||Ee(s)).length;if(r-n>0){const s=i[0];i.length!==1||V(s)?this.getCitacoesMultiplas(t,i):this.getCitacaoSimples(t,s)}return t.toString()}getCitacaoSimples(e,t){const i=new wd;e.append(i.getTexto(t,!0))}getCitacoesMultiplas(e,t){let i,r,n=new Array;for(const s of t)i=V(s)?s:ha(s),i!==r&&(n.length&&this.getCitacaoMultipla(e,n),n=[i],r=i),n.includes(s)||n.push(s);n.length&&this.getCitacaoMultipla(e,n)}getCitacaoMultipla(e,t){const i=new _m;e.append(i.getTexto(t))}}class qm{constructor(){this.emAlteracao=!1}getTexto(e){let t=X.getArvoreDispositivos(e);const i=new Ce,r=[...t.keys()][0];t=t.get(r);const n=new ve("p").add("\u201C").add(new ve("Rotulo").add(r.rotulo)).add(X.getTextoDoDispositivoOuOmissis(r));return i.append(n.toString()),t.size&&(this.ultimoProcessado=r,this.writeDispositivoTo(i,t)),this.writeOmissisFinal(i,r),i.toString().replace(/(<\/p>(?:<\/Alteracao>)?)$/,"\u201D$1")}writeDispositivoTo(e,t){var i,r;const n=Array.from(t.keys());n.sort(qt.compare);for(const s of n){const p=t.get(s);if(Le(s)){e.append("<Alteracao>"),this.emAlteracao=!0,this.ultimoProcessado=s,p.size&&this.writeDispositivoTo(e,p),e.append("</Alteracao>");continue}if(fe(s)){this.ultimoProcessado=s,p.size&&this.writeDispositivoTo(e,p);continue}const u=X.getDispositivoAnteriorDireto(s);if(V(this.ultimoProcessado)&&!fe(s)?fe(u)||e.append(new ve("p").add(new ve("Omissis")).toString()):this.ultimoProcessado===u||this.ultimoProcessado.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO&&of(u,this.ultimoProcessado)||e.append(new ve("p").add(new ve("Omissis")).toString()),s.situacao.descricaoSituacao!==j.DISPOSITIVO_ORIGINAL||this.hasFilhosPropostos(p)){const d=V(s)?s.caput:s,c=(i=s.rotulo)===null||i===void 0?void 0:i.startsWith("\u201C"),l=this.emAlteracao?(r=s.rotulo)===null||r===void 0?void 0:r.replace("\u201C",""):s.rotulo,a=new ve("p");c&&a.add("\u2018"),a.add(new ve("Rotulo").add(l)).add(X.getTextoDoDispositivoOuOmissis(d)),e.append(a.toString())}else e.append(new ve("p").add(new ve("Omissis")).toString());this.ultimoProcessado=s,p.size&&this.writeDispositivoTo(e,p)}}writeOmissisFinal(e,t){if(t.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO)return;let i=t;for(;i.filhos.length;)i=i.filhos[i.filhos.length-1];i.situacao.descricaoSituacao!==j.DISPOSITIVO_ORIGINAL||Wu(i)||e.append(new ve("p").add(new ve("Omissis")).toString())}hasFilhosPropostos(e){if(!e.size)return!1;let t=!1;for(const[i,r]of e.entries()){if(i.situacao.descricaoSituacao!==j.DISPOSITIVO_ORIGINAL){t=!0;break}if(!t&&r.size&&(t=this.hasFilhosPropostos(r),t))break}return t}}class Sm{constructor(e){this.articulacao=e}getTexto(){const e=new Ce,t=this.getDispositivosParaCitacao(),i=t.length,r=t.filter(n=>n.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO).length;if(i-r>0){const n=t[0];t.length!==1||V(n)?this.getCitacoesMultiplas(e,t):e.append(new wd().getTexto(n))}return e.toString()}getDispositivosParaCitacao(){const e=X.getDispositivosNaoOriginais(this.articulacao);e.sort(qt.compare);const t=new Array;return e.forEach(i=>{Le(i)?i.pai.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO&&t.push(i):G(i)?t.indexOf(i.pai)>=0&&t.push(i):Wu(i)||t.push(i)}),t}getCitacoesMultiplas(e,t){let i,r,n=new Array;t.forEach(s=>{i=!V(s)&&!de(s)||G(s)?Vu(s):s,i!==r&&(n.length&&this.getCitacaoMultipla(e,n),n=[],n.push(i),r=i),n.indexOf(s)<0&&n.push(s)}),n.length&&this.getCitacaoMultipla(e,n)}getCitacaoMultipla(e,t){e.append(new qm().getTexto(t))}}const Ed=(o,e)=>{o.splice(o.indexOf(e),1)};class It{constructor(e){this.dispositivos=[],e&&this.add(e)}isSituacao(e){return!!this.dispositivos.length&&this.dispositivos[0].situacao.descricaoSituacao===e}isTipo(e){return!!this.dispositivos.length&&this.dispositivos[0].tipo===e}add(e){return!!this.podeAdicionarAoRange(e)&&(this.dispositivos.push(e),!0)}addInicio(e){this.dispositivos.splice(0,0,e)}isUltimo(e){return this.dispositivos.indexOf(e)===this.dispositivos.length-1}getPrimeiro(){return this.dispositivos[0]}getUltimo(){return this.dispositivos[this.dispositivos.length-1]}getQuantidadeDispositivos(){return this.dispositivos.length}getAnterior(e){if(!(e<1))return this.dispositivos[e-1]}getNumeracaoParaComandoEmenda(){let e=this.dispositivos[0].getNumeracaoParaComandoEmenda();return this.dispositivos.length>1&&(e+=" a "+this.getUltimo().getNumeracaoParaComandoEmenda()),e}print(e,t){this.isRotuloNecessario(t)?this.printRotuloInicio(e,t):e.append(this.dispositivos[0].getNumeracaoParaComandoEmenda()),this.printSeparadorProximoDispositivo(e,t),this.printRotuloFimSeExistir(e)}printRotuloFimSeExistir(e){this.dispositivos.length>=2&&e.append(this.dispositivos[this.dispositivos.length-1].getNumeracaoParaComandoEmenda())}printSeparadorProximoDispositivo(e,t){const i=this.getRangeDispositivosPosterior(t);this.dispositivos.length>=3?e.append(" a "):this.dispositivos.length!==2||i?this.dispositivos.length>1&&this.dispositivos.length<3&&i&&e.append(", "):e.append(" e ")}printRotuloInicio(e,t){const i=this.getRangeDispositivosPosterior(t);this.hasApenasUmDispositivo()&&!i||i&&!this.isMesmoTipoSituacao(i)?e.append(this.getRotuloCompletoSingular(this.dispositivos[0])):e.append(this.getRotuloCompletoPlural(this.dispositivos[0]))}isMesmoTipoSituacao(e){return e.isTipo(this.dispositivos[0].tipo)&&e.isSituacao(this.dispositivos[0].situacao.descricaoSituacao)}hasApenasUmDispositivo(){return this.dispositivos.length===1}isRotuloNecessario(e){const t=this.getRangeDispositivosAnterior(e);return!t||!t.isMesmoTipoSituacao(this)||!(!this.isSituacao(j.DISPOSITIVO_ADICIONADO)||this.isMesmoPai(t))}isMesmoPai(e){return this.getPrimeiro().pai===e.getPrimeiro().pai}getRotuloCompletoSingular(e){const t=new Ce;e.situacao.descricaoSituacao!==j.DISPOSITIVO_ADICIONADO?t.append(e.artigoDefinidoSingular):t.append(" ");const i=e.getNumeracaoComRotuloParaComandoEmenda();return i.endsWith(".")?t.append(i.substring(0,i.indexOf("."))):t.append(i),t.toString()}getRotuloCompletoPlural(e){const t=new Ce;return e.situacao.descricaoSituacao!==j.DISPOSITIVO_ADICIONADO?t.append(e.artigoDefinidoPlural):t.append(" "),t.append(this.getTipoDispositivoPlural(e)),t.append(" "),t.append(e.getNumeracaoParaComandoEmenda()),t.toString()}getRangeDispositivosAnterior(e){const t=e.indexOf(this);if(t>0)return e[t-1]}getRangeDispositivosPosterior(e){if(e.length===1)return;const t=e.indexOf(this);return t>=0&&t<e.length-1?e[t+1]:void 0}getTipoDispositivoPlural(e){var t;return e.tipo===D.artigo.tipo?"arts.":e.tipo===D.paragrafo.tipo?"\xA7\xA7":((t=e.descricaoPlural)===null||t===void 0?void 0:t.toLocaleLowerCase())+""}podeAdicionarAoRange(e){if(this.isVazio())return!0;const t=this.getUltimo();return t.tipo===e.tipo&&!!X.isMesmaSituacaoParaComandoEmenda(t,e)&&!(!V(e)&&e.pai!==t.pai)&&(i=>{const r=nt(i),n=r.indexOf(i);return n<r.length-1?r[n+1]:void 0})(t)===e&&X.isAlteracaoIntegral(t)===X.isAlteracaoIntegral(e)}isVazio(){return this.dispositivos.length===0}toString(){const e=new Ce;return this.dispositivos.forEach(t=>{e.append(" "),e.append(""+t.rotulo)}),e.toString()}getDispositivos(){return this.dispositivos}getDispositivo(e){return this.dispositivos[e]}}class Qo{constructor(){this.ranges=new Array,this.localizarArtigoEmAgrupador=!1,this.informarCaputDoDispositivo=!1}isVazio(){return this.ranges.length===0}add(e){this.ranges.push(e)}addInicio(e){this.ranges.unshift(e)}getQuantidadeRanges(){return this.ranges.length}getPrimeiroRange(){return this.ranges[0]}getPrimeiroDispositivo(){return this.ranges[0].getPrimeiro()}getUltimoDispositivo(){return this.ranges[this.ranges.length-1].getUltimo()}getRanges(){return this.ranges}setRanges(e){this.ranges=e}getRange(e){return this.ranges[e]}getTextoListaDeDispositivos(){const e=new Ce,t=this.ranges.length;let i=1;for(const r of this.ranges)i>1&&(i===t?e.append(" e "):e.append(", ")),e.append(r.getNumeracaoParaComandoEmenda()),i++;return e.toString()}static debug(e){const t=new Ce;for(const i of e)t.append("seq: "+i);console.log(t)}toString(){return this.ranges.toString()}remove(e){Ed(this.ranges,e)}}class $t{getSequencias(e){const t=this.getRanges(e);return this.agrupaRanges(t)}getRanges(e){let t=new Array,i=new It;for(const r of e)i.add(r)||(t.push(i),i=new It,i.add(r));return i.isVazio()||t.push(i),t=$t.separaRangesDeDoisDispositivos(t),t}static separaRangesDeDoisDispositivos(e){const t=new Array;for(const i of e)i.getQuantidadeDispositivos()===2?(t.push(new It(i.getPrimeiro())),t.push(new It(i.getUltimo()))):t.push(i);return t}separaRangesDeDoisDispositivosEmSequencias(e){for(const t of e)t.setRanges($t.separaRangesDeDoisDispositivos(t.getRanges()))}agrupaRanges(e){const t=new Array;let i=new Qo;for(const r of e)i.isVazio()?(i.add(r),t.push(i)):this.isMesmaSequencia(i,r)?i.add(r):(i=new Qo,i.add(r),t.push(i));return t}isMesmaSequencia(e,t){const i=e.getPrimeiroDispositivo(),r=t.getUltimo();return X.isMesmoTipoParaComandoEmenda(i,r)&&X.isMesmaSituacaoParaComandoEmenda(i,r)&&(i.tipo===D.artigo.tipo||i.pai===r.pai)&&i.tipo!==D.omissis.tipo}separaDispositivosSeguidosDeOmissis(e){const t=new Array;for(const i of e)t.push(...this.separaDispositivosSeguidosDeOmissis2(i));return t}separaDispositivosSeguidosDeOmissis2(e){const t=new Array;let i=new Qo;t.push(i);let r=new It;i.add(r);for(const n of e.getRanges()){r.getQuantidadeDispositivos()>0&&(r=new It,i.add(r));for(const s of n.getDispositivos()){const p=jr(s);p&&p.tipo===D.omissis.tipo?(this.adicionaouDispositivos(i,r)&&(r.getQuantidadeDispositivos()===0&&i.remove(r),i=new Qo,t.push(i),r=new It,i.add(r)),i.informarCaputDoDispositivo=!0,r.add(s),i=new Qo,t.push(i),r=new It,i.add(r)):r.add(s)}}return r.getQuantidadeDispositivos()===0&&i.remove(r),i.getQuantidadeRanges()===0&&Ed(t,i),this.separaRangesDeDoisDispositivosEmSequencias(t),t}adicionaouDispositivos(e,t){return e.getQuantidadeRanges()>1||t.getQuantidadeDispositivos()>0}}class Fo{constructor(e){this.dispositivos=e}static compare(e,t){var i,r;return!((i=e.dispositivos)===null||i===void 0)&&i.length?!((r=t.dispositivos)===null||r===void 0)&&r.length?qt.compare(e.dispositivos[0],t.dispositivos[0]):-1:1}}var so;(function(o){o[o.NENHUM=0]="NENHUM",o[o.DEFINIDO=1]="DEFINIDO",o[o.DEFINIDO_COM_PREPOSICAO_A=2]="DEFINIDO_COM_PREPOSICAO_A"})(so||(so={}));class Ut{constructor(){this.artigoAntesDispositivo=so.NENHUM}getTexto(e){const t=new Ce,i=e.length;let r=1;for(const n of e)r>1&&(r===i?t.append(" e "):t.append(", ")),n.informarCaputDoDispositivo?t.append(this.getReferenciaCaputDoDispositivo(n)):t.append(this.getTextoArtigoAntesSequencia(n)),t.append(this.getRotuloTipoDispositivo(n)),t.append(" "),t.append(n.getTextoListaDeDispositivos()),t.append(this.getRotuloPaisSequencia(n)),r++;return t.toString()}getReferenciaCaputDoDispositivo(e){const t=new Ce,i=e.getPrimeiroDispositivo();if(i.tipo===D.caput.tipo)return this.getTextoArtigoAntesSequencia(e);const r=X.isSequenciaPlural(e);return t.append(this.getTextoArtigoAntesDispositivo(this.artigoAntesDispositivo,Ju,r)),t.append(" caput "),e.getRange(0).getQuantidadeDispositivos()===1?t.append(i.pronomePossessivoSingular):t.append(i.pronomePossessivoPlural),t.toString()}getTextoArtigoAntesSequencia(e){const t=e.getPrimeiroDispositivo(),i=X.isSequenciaPlural(e);return this.getTextoArtigoAntesDispositivo(this.artigoAntesDispositivo,t,i)}getTextoArtigoAntesDispositivo(e,t,i){switch(e){case so.DEFINIDO:return i?t.artigoDefinidoPlural:t.artigoDefinidoSingular;case so.DEFINIDO_COM_PREPOSICAO_A:return i?t.artigoDefinidoPrecedidoPreposicaoAPlural:t.artigoDefinidoPrecedidoPreposicaoASingular;default:return""}}getRotuloTipoDispositivo(e){const t=e.getPrimeiroDispositivo();return Ut.getRotuloTipoDispositivo(t,X.isSequenciaPlural(e))}static getRotuloTipoDispositivo(e,t){return e.getNumeracaoParaComandoEmenda().indexOf("\xFAnico")>=0?"":t?V(e)?"arts.":he(e)?"\xA7\xA7":String(e.descricaoPlural).toLocaleLowerCase():V(e)?e.situacao.descricaoSituacao!==j.DISPOSITIVO_MODIFICADO||X.isAlteracaoIntegral(e)?"art.":"caput do art.":he(e)?"\xA7":String(e.descricao).toLowerCase()}getRotuloPaisSequencia(e){const t=e.getPrimeiroDispositivo(),i=e.localizarArtigoEmAgrupador;return this.getRotuloPais(t,i)}getRotuloPais(e,t){var i;const r=new Ce;let n;for(;!ri(e);){if(n=e.pai,n&&Le(n)){if(e.tipo===D.omissis.tipo){const s=X.getDispositivoAnteriorDireto(e);if(s.tipo!==D.alteracao.tipo)return r.append("ap\xF3s "),r.append(s.artigoDefinidoSingular),r.append(s.getNumeracaoComRotuloParaComandoEmenda()),r.append(this.getRotuloPais(s,t)),r.toString()}break}if(n&&!ri(n)&&(!de(n)||V(e)&&t)){const s=G(e),p=!s&&e.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO,u=s&&!X.isTextoOmitido(e)&&e.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO&&!xd.existeNaNormaAlterada(e);if(p||u)r.append(n.artigoDefinidoPrecedidoPreposicaoASingular);else if(Ee(e)){const d=X.getDispositivoAnteriorDireto(e),c=X.getDispositivoPosteriorDireto(e);if(d===n&&c&&c.pai===n){const l=c.pronomePossessivoSingular+" "+((i=c.descricao)===null||i===void 0?void 0:i.toLowerCase())+" "+c.getNumeracaoParaComandoEmenda();r.append("antes "+l),r.append(n.pronomePossessivoSingular)}else if(!Oe(d)||!d.pai)return r.append("ap\xF3s "),r.append(d.artigoDefinidoSingular),r.append(d.getNumeracaoComRotuloParaComandoEmenda()),r.append(this.getRotuloPais(d,t)),r.toString()}else r.append(n.pronomePossessivoSingular);r.append(n.getNumeracaoComRotuloParaComandoEmenda())}else if(V(e)&&ri(n)&&t){const s=X.getProximoAgrupador(e);s&&(r.append(" antes "),r.append(s.pronomePossessivoSingular),r.append(s.getNumeracaoComRotuloParaComandoEmenda()))}if(!n)break;e=n}return r.toString()}setArtigoAntesDispositivo(e){this.artigoAntesDispositivo=e}}class Im extends Fo{constructor(e,t){super(e),this.dispositivos=e,this.generoNormaAlterada=t}getTexto(e,t,i){const r=new Ce,n=new $t().getSequencias(this.dispositivos);t||r.append(i?"; e ":"; "),r.append("acrescentar ");const s=new Ut;if(r.append(s.getTexto(n)),i){const p=n[n.length-1];r.append(" "),V(p.getPrimeiroDispositivo())?r.append(this.generoNormaAlterada.artigoDefinidoPrecedidoPreposicaoASingular):r.append(this.generoNormaAlterada.pronomePossessivoSingular),r.append(" ")}return po(r.toString())}}class km extends Fo{constructor(e,t){super(e),this.dispositivos=e,this.generoNormaAlterada=t}getTexto(e,t,i){const r=new Ce,n=new $t,s=n.separaDispositivosSeguidosDeOmissis(n.getSequencias(this.dispositivos));t||r.append(i?"; e ":"; "),r.append("modificar ");const p=new Ut;return p.setArtigoAntesDispositivo(so.DEFINIDO),r.append(p.getTexto(s)),i&&(r.append(" "),r.append(this.generoNormaAlterada.pronomePossessivoSingular),r.append(" ")),po(r.toString())}}class Pm extends Fo{constructor(e,t,i,r){super(e),this.dispositivos=e,this.alteracao=t,this.urnNormaAlterada=i,this.generoNormaAlterada=r}getTexto(e,t,i){const r=new Ce,n=new $t().getSequencias(this.dispositivos),s=X.isSequenciasPlural(n);t&&i?(r.append(s?"Suprimam-se ":"Suprima-se "),this.escreveDispositivoAlterado(r,this.alteracao.pai),r.append(" "),r.append(e.genero.pronomePossessivoSingular),r.append(" "),r.append(e.nome),r.append(" ")):(t||r.append(i?"; e ":"; "),r.append("suprimir "));const p=new Ut;return p.setArtigoAntesDispositivo(so.DEFINIDO),r.append(p.getTexto(n)),i&&(r.append(" "),r.append(this.generoNormaAlterada.pronomePossessivoSingular),r.append(" "),t&&(r.append(xn(this.urnNormaAlterada)),r.append("."))),po(r.toString())}escreveDispositivoAlterado(e,t){e.append(t.pronomePossessivoSingular),e.append(Ut.getRotuloTipoDispositivo(t,!1)),e.append(" "),e.append(t.getNumeracaoParaComandoEmenda()),e.append(X.getRotuloPais(t))}}class Nm{constructor(e){this.alteracao=e}getTexto(e){const t=new Ce,i=X.getDispositivosNaAlteracaoParaComando(this.alteracao),r=this.alteracao.base;if(!r)return"N\xE3o foi poss\xEDvel gerar o comando de emenda porque a norma alterada n\xE3o foi informada.";const n=(h=>{const f=mi(h);return ba(f.genero)})(r);let s=!1;const p=new Array,u=i.filter(h=>h.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO);u.length&&p.push(new Pm(u,this.alteracao,r,n));const d=i.filter(h=>X.getDescricaoSituacaoParaComandoEmenda(h)===j.DISPOSITIVO_MODIFICADO);d.length&&(p.push(new km(d,n)),s=!0);const c=i.filter(h=>X.getDescricaoSituacaoParaComandoEmenda(h)===j.DISPOSITIVO_ADICIONADO);c.length&&(p.push(new Im(c,n)),s=!0),p.sort(Fo.compare),s&&(t.append("Altere-se "),this.escreveDispositivoAlterado(t,this.alteracao.pai),t.append(" "),t.append(e.genero.pronomePossessivoSingular),t.append(" "),t.append(e.nome),t.append(" para "));let l=0;const a=p.length-1;return p.forEach(h=>{t.append(h.getTexto(e,l===0,l===a)),l++}),s&&(this.escreveLei(t,r),this.temCitacao(d,c)?t.append(", nos termos a seguir:"):t.append(".")),po(t.toString())}temCitacao(e,t){return!!e.length||!!t.find(i=>!Ee(i))}escreveDispositivoAlterado(e,t){e.append(t.artigoDefinidoSingular),e.append(Ut.getRotuloTipoDispositivo(t,!1)),e.append(" "),e.append(t.getNumeracaoParaComandoEmenda()),e.append(X.getRotuloPais(t))}escreveLei(e,t){e.append(xn(t))}}class Cm extends Fo{constructor(e){super(e),this.dispositivos=e}getTexto(e,t,i){const r=new Ce;let n=new $t().getSequencias(this.dispositivos);n=this.trataLocalizacaoArtigoEmAgrupador(n);const s=X.isSequenciasPlural(n);t?r.append(s?"Acrescentem-se ":"Acrescente-se "):(r.append(i?"; e ":"; "),r.append(s?"acrescentem-se ":"acrescente-se "));const p=new Ut;if(r.append(p.getTexto(n)),i){const u=n[n.length-1];!V(u.getPrimeiroDispositivo())||u.localizarArtigoEmAgrupador?r.append(e.genero.pronomePossessivoSingular):r.append(e.genero.artigoDefinidoPrecedidoPreposicaoASingular),r.append(e.nome),r.append(t?", com a seguinte reda\xE7\xE3o:":", nos termos a seguir:")}return po(r.toString())}trataLocalizacaoArtigoEmAgrupador(e){const t=new Array;for(const i of e)V(i.getPrimeiroDispositivo())?t.push(...this.trataLocalizacaoArtigoAgrupadorSequencia(i)):t.push(i);return t}trataLocalizacaoArtigoAgrupadorSequencia(e){const t=new Array,i=new Array;for(const u of e.getRanges())i.push(...u.getDispositivos());let r=!1;for(const u of i)if(this.isInclusaoArtigoProximoAgrupador(u)){r=!0;break}if(!r)return t.push(e),t;let n=new Qo;n.localizarArtigoEmAgrupador=!0,t.push(n);let s,p=new It;n.add(p);for(const u of i)p.isVazio()||(u.pai!==s.pai?(n=new Qo,n.localizarArtigoEmAgrupador=!0,t.push(n),p=new It,n.add(p)):X.getDispositivoIrmaoPosterior(s)!==u&&(p=new It,n.add(p))),p.add(u),s=u;for(const u of t)u.setRanges($t.separaRangesDeDoisDispositivos(u.getRanges()));return t}isInclusaoArtigoProximoAgrupador(e){return this.isInclusaoArtigoInicioAgrupador(e)||this.isInclusaoArtigoAntesAgrupador(e)}isInclusaoArtigoInicioAgrupador(e){const t=e.pai;return!(ri(t)||!de(t))&&t.filhos.indexOf(e)===0}isInclusaoArtigoAntesAgrupador(e){const t=e.pai,i=X.getDispositivoIrmaoPosterior(e);return!!i&&t!==i.pai}}class Tm{constructor(e){this.dispositivos=e}getTexto(e){if(!this.dispositivos.length)return"";let t;const i=e.genero.contracaoEmArtigoDefinidoSingular+" "+e.nome;return t=this.dispositivos.length>1?"Acrescentem-se, onde couber, "+i+" os seguintes artigos:":"Acrescente-se, onde couber, "+i+" o seguinte artigo:",po(t)}}class Dm extends Fo{constructor(e){super(e),this.dispositivos=e}getTexto(e,t,i){const r=new Ce,n=new $t().getSequencias(this.dispositivos);t?(r.append("D\xEA-se "),i||r.append("nova reda\xE7\xE3o ")):(r.append(i?"; e ":"; "),r.append("d\xEA-se nova reda\xE7\xE3o "));const s=new Ut;return s.setArtigoAntesDispositivo(so.DEFINIDO_COM_PREPOSICAO_A),r.append(s.getTexto(n)),i&&(r.append(" "+e.genero.pronomePossessivoSingular+" "+e.nome),r.append(t?" a seguinte reda\xE7\xE3o:":", nos termos a seguir:")),po(r.toString())}}class Rm extends Fo{constructor(e){super(e),this.dispositivos=e}getTexto(e,t,i){const r=new Ce,n=new $t().getSequencias(this.dispositivos),s=X.isSequenciasPlural(n);t?r.append(s?"Suprimam-se ":"Suprima-se "):(r.append(i?"; e ":"; "),r.append(s?"suprimam-se ":"suprima-se "));const p=new Ut;return p.setArtigoAntesDispositivo(so.DEFINIDO),r.append(p.getTexto(n)),i&&(r.append(" "+e.genero.pronomePossessivoSingular+" "+e.nome),r.append(t?".":", nos termos a seguir:")),po(r.toString())}}class Lm{constructor(e){this.dispositivosEmenda=e}getTexto(e){let t="";const i=X.getDispositivosComando(this.dispositivosEmenda),r=i.filter(l=>l.situacao instanceof So&&l.situacao.tipoEmenda===vt.EMENDA_ARTIGO_ONDE_COUBER);if(r.length){if(r.length<i.length)throw new Error("Adi\xE7\xE3o de artigos onde couber e outras altera\xE7\xF5es na mesma emenda.");return new Tm(r).getTexto(e)}const n=[],s=i.filter(l=>l.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO);s.length&&n.push(new Rm(s));const p=i.filter(l=>l.situacao.descricaoSituacao===j.DISPOSITIVO_MODIFICADO);p.length&&n.push(new Dm(p));const u=i.filter(l=>l.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO);u.length&&n.push(new Cm(u)),n.sort(Fo.compare);let d=0;const c=n.length-1;return n.forEach(l=>{t+=l.getTexto(e,d===0,d===c),d++}),t}}class Mm{constructor(e,t){this.urn=e,this.articulacao=t}getComandoEmenda(){const e=new yd,t=X.getDispositivosNaoOriginais(this.articulacao),i=this.getDispositivosRepresentativosDeCadaComando(t);if(i.sort(qt.compare),!i.length)return e;const r=(n=>{const s=mi(n);let p=ba(s.genero),u="Projeto";return p===Yu&&(u=s.urn.startsWith("medida.provisoria")?"Medida Provis\xF3ria":"Proposta"),new af(u,p)})(this.urn);return i.forEach(n=>{let s,p;Oe(n)?(s=new Nm(n).getTexto(r),p=new Om().getTexto(n)):(s=new Lm(t).getTexto(r),p=new Sm(this.articulacao).getTexto()),e.comandos.push(new Em(s,p))}),e.comandos.length>1&&(e.cabecalhoComum=this.montaCabecalhoComum(r,e.comandos.length),e.comandos.forEach((n,s)=>{n.rotulo=`Item ${s+1} \u2013`})),e}getDispositivosRepresentativosDeCadaComando(e){const t=[];let i=!1;return e.forEach(r=>{const n=Pe(r);n&&Le(n)?t.includes(n)||n.pai.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO||n.pai.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO||t.push(n):i||(i=!0,t.push(r))}),t}montaCabecalhoComum(e,t){return`D\xEA-se nova reda\xE7\xE3o ${e.genero.artigoDefinidoPrecedidoPreposicaoASingular} ${e.nome} nos termos dos itens ${this.listarItens(t)} a seguir.`}listarItens(e){return Array(e).fill(0).map((t,i)=>i+1).join(", ").replace(/, (\d+?)$/," e $1")}}class jm{constructor(e,t,i){this.tipoEmenda=e,this.urn=t,this.articulacao=i}getDispositivosEmenda(){const e=new vd;return this.preencheDispositivos(e),e}preencheDispositivos(e){const t=X.getDispositivosNaoOriginais(this.articulacao),i=t.filter(s=>s.situacao.descricaoSituacao===j.DISPOSITIVO_SUPRIMIDO&&s.pai.situacao.descricaoSituacao!==j.DISPOSITIVO_SUPRIMIDO);if(i.length)for(const s of i){const p=new xm;p.tipo=this.getTipoDispositivoParaEmenda(s),p.id=s.id,p.rotulo=s.rotulo,e.dispositivosSuprimidos.push(p)}const r=t.filter(s=>s.situacao.descricaoSituacao===j.DISPOSITIVO_MODIFICADO);if(r.length)for(const s of r){const p=new bd;if(V(s)){const u=s.caput;p.tipo=this.getTipoDispositivoParaEmenda(u),p.id=u.id,p.texto=u.texto}else p.tipo=this.getTipoDispositivoParaEmenda(s),p.id=s.id,p.texto=s.texto;p.rotulo=s.rotulo,s.isDispositivoAlteracao&&this.preencheAtributosAlteracao(s,p),e.dispositivosModificados.push(p)}const n=t.filter(s=>s.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO&&!(s.pai.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO||fe(s.pai)&&s.pai.pai.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO));if(n.length)for(const s of n){const p=this.criaDispositivoEmendaAdicionado(s);e.dispositivosAdicionados.push(p)}}criaDispositivoEmendaAdicionado(e,t=!0){var i,r,n;const s=new wm;if(s.tipo=this.getTipoDispositivoParaEmenda(e),e.id||(e.id=Co(e)),s.id=e.id,fe(e)||Le(e)||Ee(e)||(s.rotulo=e.rotulo),V(e)||Le(e)||(s.texto=e.texto),t)if(fe(e)||Le(e))s.idPai=(i=e.pai)===null||i===void 0?void 0:i.id;else{const u=X.getFilhosEstiloLexML(e.pai);e!==u[0]?s.idIrmaoAnterior=u[u.indexOf(e)-1].id:ri(e.pai)||(s.idPai=(r=e.pai)===null||r===void 0?void 0:r.id)}if(Le(e)){const u=e.base;u&&(s.urnNormaAlterada=u)}else e.isDispositivoAlteracao&&(s.existeNaNormaAlterada=(n=e.situacao)===null||n===void 0?void 0:n.existeNaNormaAlterada,this.preencheAtributosAlteracao(e,s));const p=X.getFilhosEstiloLexML(e);return fe(e)&&e.pai.alteracoes&&p.push(e.pai.alteracoes),p.length&&(s.filhos=[],p.forEach(u=>{(fe(u)||Le(u)||u.situacao.descricaoSituacao===j.DISPOSITIVO_ADICIONADO)&&s.filhos.push(this.criaDispositivoEmendaAdicionado(u,!1))})),s}getTipoDispositivoParaEmenda(e){return Oe(e)?"Alteracao":e.tipo}preencheAtributosAlteracao(e,t){if(!Ee(e)&&t.texto&&t.texto.indexOf(yt)>=0&&(t.textoOmitido=!0),t.rotulo&&t.rotulo.indexOf("\u201C")>=0&&(t.abreAspas=!0,t.rotulo=t.rotulo.replace("\u201C","")),t.texto){const i=Fu(t.texto),r=/”(?: ?(\(NR\)|\(AC\)))?$/.exec(i);if(r){const n=r[0];t.fechaAspas=!0,r.length===2&&(t.notaAlteracao=r[1]),t.texto=t.texto.replace(new RegExp($i(n)),"")}}}}const Mn=(o,e)=>{var t;let i;if(i=de(o)?e.lXhier=[]:e.lXcontainersOmissis=[],V(o)){const r=qa(o.caput);$m(o,r.value),i.push(r),Gl((t=o.filhos)===null||t===void 0?void 0:t.filter(n=>!fe(n.pai)),i),Mn(o.caput,r.value)}else Gl(o.filhos,i);return i},$m=(o,e)=>{var t,i,r;o.hasAlteracao()&&(e.alteracao={TYPE_NAME:"br_gov_lexml__1.Alteracao",base:"",id:"",content:[]},e.alteracao.base=(i=(t=o.alteracoes)===null||t===void 0?void 0:t.base)!==null&&i!==void 0?i:"",e.alteracao.id=(n=>{const s=[];return wn(n,s),s.join("_")+"_alt1"})(o.caput),(r=o.alteracoes.filhos)===null||r===void 0||r.forEach(n=>{const s=qa(n);e.alteracao.content.push(s),Mn(n,s.value)}))},Gl=(o,e)=>{o==null||o.forEach(t=>{const i=qa(t);e.push(i),Mn(t,i.value)})},qa=o=>{const e={name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:o.tipo,prefix:"",key:`{http://www.lexml.gov.br/1.0}${o.tipo}`,string:`{http://www.lexml.gov.br/1.0}${o.tipo}`},value:{TYPE_NAME:"br_gov_lexml__1.DispositivoType"}};return Um(o,e.value),e},Um=(o,e)=>{e.href=fe(o)?wr(o.pai)+"_"+wr(o):wr(o),e.id=Co(o),o.rotulo&&/^["”“].*/.test(o.rotulo)?(e.abreAspas="s",e.rotulo=o.rotulo.substring(1)):fe(o)||Ee(o)||(e.rotulo=o.rotulo),fe(o)&&/”.*(NR)/.test(o.texto)&&(e.fechaAspas="s",e.notaAlteracao="NR"),de(o)?e.nomeAgrupador={TYPE_NAME:"br_gov_lexml__1.GenInline",content:Ql(o)}:V(o)||(o.texto===yt?e.textoOmitido="s":e.p=[{TYPE_NAME:"br_gov_lexml__1.GenInline",content:Ql(o)}])},Ql=o=>{const e=/<a[^>]+href="(.*?)"[^>]*>(.*?)<\/a>/gi,t=[],i=o.texto.match(e);if(i)o.texto.startsWith(i[0])||t.push(o.texto.substring(0,o.texto.indexOf(i[0])));else{const r=o.texto.indexOf("\u201D (NR)");t.push(o.texto.substring(0,r===-1?void 0:r))}return i==null||i.forEach((r,n)=>{var s,p;const u=r.match(e)?r:"";t.push(Fm(u!=null?u:""));const d=((s=o.texto)===null||s===void 0?void 0:s.indexOf(r))+r.length;if(d<o.texto.length-1){const c=i[n+1]?o.texto.indexOf(i[n+1]):o.texto.length;t.push((p=o.texto.substring(d,c))===null||p===void 0?void 0:p.replace(/strong>/gi,"b>").replace(/em>/gi,"i>"))}}),t},Fm=o=>{var e;const t=o.match(/href="(.*?)"*>/i),i=t&&t[1]?t[1]:"",r=o.match(/<a[^>]+href=".*?"[^>]*>(.*?)<\/a>/);return{name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:"span",prefix:"",key:"{http://www.lexml.gov.br/1.0}span",string:"{http://www.lexml.gov.br/1.0}span"},value:{TYPE_NAME:"br_gov_lexml__1.GenInline",href:i,content:r&&r[1]?[(e=r[1])===null||e===void 0?void 0:e.trim()]:[""]}}};let Sa=!1;const Wl=(o,e=!1)=>{var t,i;if(Sa=e,!(!((t=o==null?void 0:o.value)===null||t===void 0)&&t.projetoNorma))throw new Error("N\xE3o se trata de um documento lexml v\xE1lido");return He(He(He({classificacao:!((i=o.value)===null||i===void 0)&&i.projetoNorma.norma?vt.NORMA:vt.PROJETO,tipo:mi(jn(o))},zm(o)),Bm(o)),Vm(o.value.projetoNorma.norma?o.value.projetoNorma.norma:o.value.projetoNorma.projeto))},Or=o=>o==null?void 0:o.replace(/[\n]/g,"").trim(),jn=o=>{var e,t,i;return(i=(t=(e=o==null?void 0:o.value)===null||e===void 0?void 0:e.metadado)===null||t===void 0?void 0:t.identificacao)===null||i===void 0?void 0:i.urn},zm=o=>({urn:jn(o)}),Bm=o=>{var e,t,i,r,n,s,p,u,d,c,l,a,h,f,m,g;const v=(s=(n=(r=(i=(t=(e=o==null?void 0:o.value)===null||e===void 0?void 0:e.projetoNorma)===null||t===void 0?void 0:t.norma)===null||i===void 0?void 0:i.parteInicial)===null||r===void 0?void 0:r.epigrafe)===null||n===void 0?void 0:n.content[0])!==null&&s!==void 0?s:"",y=Od((c=(d=(u=(p=o==null?void 0:o.value)===null||p===void 0?void 0:p.projetoNorma)===null||u===void 0?void 0:u.norma)===null||d===void 0?void 0:d.parteInicial)===null||c===void 0?void 0:c.ementa.content),b=(g=(m=(f=(h=(a=(l=o==null?void 0:o.value)===null||l===void 0?void 0:l.projetoNorma)===null||a===void 0?void 0:a.norma)===null||h===void 0?void 0:h.parteInicial)===null||f===void 0?void 0:f.preambulo)===null||m===void 0?void 0:m.p[0].content[0])!==null&&g!==void 0?g:"";return{epigrafe:Or(v),ementa:Or(y),preambulo:Or(b)}},Vm=o=>({articulacao:Hm(o.articulacao)}),Hm=o=>{const e=Aa();return qr(e,o.lXhier),e},qr=(o,e)=>{o&&e&&(e==null||e.forEach(t=>{var i,r,n,s,p,u,d,c,l,a,h,f,m,g,v,y;let b;const x=(i=t.value)===null||i===void 0?void 0:i.notaAlteracao,w=((r=t.value)===null||r===void 0?void 0:r.fechaAspas)!==void 0?x?`\u201D (${x})`:"\u201D (NR)":"";((n=t.name)===null||n===void 0?void 0:n.localPart)==="Caput"?(((s=t.value)===null||s===void 0?void 0:s.abreAspas)==="s"?(b.rotulo="\u201C"+((p=t.value)===null||p===void 0?void 0:p.rotulo),b.cabecaAlteracao=!0,b.notaAlteracao=x):!((u=t.value)===null||u===void 0)&&u.rotulo&&(b.rotulo=t.value.rotulo,b.createNumeroFromRotulo(b.rotulo)),o.texto=!((d=t.value)===null||d===void 0)&&d.textoOmitido?yt:Or(_d(t))+w,o.caput.href=(c=t.value)===null||c===void 0?void 0:c.href,o.caput.id=(l=t.value)===null||l===void 0?void 0:l.id,Zl(o,(a=t.value)===null||a===void 0?void 0:a.alteracao),qr(o.caput,(h=t.value)===null||h===void 0?void 0:h.lXcontainersOmissis)):((f=t.name)===null||f===void 0?void 0:f.localPart)==="alteracao"?(Zl(o,t),qr(o.caput,(m=t.value)===null||m===void 0?void 0:m.lXcontainersOmissis)):(b=Ad(o,t),qr(b,(v=(g=t.value)===null||g===void 0?void 0:g.lXhier)!==null&&v!==void 0?v:(y=t.value)===null||y===void 0?void 0:y.lXcontainersOmissis))}))},Zl=(o,e)=>{var t;e&&(_a(o),o.alteracoes.id=e.id,o.alteracoes.base=e.base,Sa&&(o.alteracoes.situacao=new lo),(t=e.content)===null||t===void 0||t.forEach(i=>{var r,n,s,p;const u=Ad(o.alteracoes,i);u.isDispositivoAlteracao=!0,u.rotulo="\u201C"+((r=i.value)===null||r===void 0?void 0:r.rotulo),qr(u,(s=(n=i.value)===null||n===void 0?void 0:n.lXhier)!==null&&s!==void 0?s:(p=i.value)===null||p===void 0?void 0:p.lXcontainersOmissis)}))},Ad=(o,e)=>{var t,i,r,n,s,p,u,d,c;const l=pe(o,(t=e.name)===null||t===void 0?void 0:t.localPart),a=(i=e.value)===null||i===void 0?void 0:i.notaAlteracao,h=((r=e.value)===null||r===void 0?void 0:r.fechaAspas)!==void 0?a?`\u201D (${a})`:"\u201D (NR)":"";return Ee(l)||(((n=e.value)===null||n===void 0?void 0:n.abreAspas)==="s"?(l.rotulo="\u201C"+((s=e.value)===null||s===void 0?void 0:s.rotulo),l.cabecaAlteracao=!0,l.notaAlteracao=a):l.rotulo=(p=e.value)===null||p===void 0?void 0:p.rotulo,l.createNumeroFromRotulo(l.rotulo)),l.href=(u=e.value)===null||u===void 0?void 0:u.href,l.id=(d=e.value)===null||d===void 0?void 0:d.id,Sa&&(l.situacao=new lo,V(l)&&(l.caput.situacao=new lo)),l.texto=!((c=e.value)===null||c===void 0)&&c.textoOmitido?yt:Or(_d(e))+h,l},_d=o=>{var e,t,i,r,n;let s="";return!((e=o.value)===null||e===void 0)&&e.nomeAgrupador?(t=o.value.nomeAgrupador.content[0])!==null&&t!==void 0?t:"":((n=(r=(i=o.value)===null||i===void 0?void 0:i.p)===null||r===void 0?void 0:r.map(p=>p))===null||n===void 0||n.map(p=>p.content).forEach(p=>s+=Od(p)),s.replace(/b>/gi,"strong>").replace(/i>/gi,"em>"))},Od=o=>{let e="";return o==null||o.forEach(t=>{var i;t.value?e+=`<a href="${(i=t.value).href}"> ${i.content[0]} </a>`:e+=t}),e},Xl={name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:"LexML",prefix:"",key:"{http://www.lexml.gov.br/1.0}LexML",string:"{http://www.lexml.gov.br/1.0}LexML"},value:{TYPE_NAME:"br_gov_lexml__1.LexML",metadado:{TYPE_NAME:"br_gov_lexml__1.Metadado",identificacao:{TYPE_NAME:"br_gov_lexml__1.Identificacao",urn:""}},projetoNorma:{TYPE_NAME:"br_gov_lexml__1.ProjetoNorma",norma:{TYPE_NAME:"br_gov_lexml__1.HierarchicalStructure",parteInicial:{TYPE_NAME:"br_gov_lexml__1.ParteInicial",epigrafe:{TYPE_NAME:"br_gov_lexml__1.GenInline",id:"epigrafe",content:[""]},ementa:{TYPE_NAME:"br_gov_lexml__1.GenInline",id:"ementa",content:[""]},preambulo:{TYPE_NAME:"br_gov_lexml__1.TextoType",id:"preambulo",p:[{TYPE_NAME:"br_gov_lexml__1.GenInline",content:[""]}]}},articulacao:{TYPE_NAME:"br_gov_lexml__1.Articulacao",lXhier:[{name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:"Artigo",prefix:"",key:"{http://www.lexml.gov.br/1.0}Artigo",string:"{http://www.lexml.gov.br/1.0}Artigo"},value:{TYPE_NAME:"br_gov_lexml__1.DispositivoType",id:"art1",rotulo:"Art. 1\xBA",lXcontainersOmissis:[{name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:"Caput",prefix:"",key:"{http://www.lexml.gov.br/1.0}Caput",string:"{http://www.lexml.gov.br/1.0}Caput"},value:{TYPE_NAME:"br_gov_lexml__1.DispositivoType",id:"art1_cpt",p:[{TYPE_NAME:"br_gov_lexml__1.GenInline",content:[""]}]}}]}}]}}}}};let cr=class extends Pn(me)(rt){constructor(){super(...arguments),this.modo="",this.projetoNorma={},this._timerLoadEmenda=0}createRenderRoot(){return this}getDispositivosEmenda(){const o=this.modo;if(o!==vt.EMENDA&&o!==vt.EMENDA_ARTIGO_ONDE_COUBER)return;const e=this.projetoNorma.value.metadado.identificacao.urn,t=me.getState().elementoReducer.articulacao;return new jm(o,e,t).getDispositivosEmenda()}getComandoEmenda(){const o=this.projetoNorma.value.metadado.identificacao.urn,e=me.getState().elementoReducer.articulacao;return new Mm(o,e).getComandoEmenda()}getProjetoAtualizado(){const o=He({},this.projetoNorma),e=(t=me.getState().elementoReducer.articulacao,{TYPE_NAME:"br_gov_lexml__1.Articulacao",lXhier:Mn(t,{articulacao:{}})});var t;return o.value.projetoNorma[o.value.projetoNorma.norma?"norma":"projeto"].articulacao.lXhier=e.lXhier,o}update(o){(this.hasChangedProjetoNorma(o)||this.hasChangedModo(o))&&(this.loadProjetoNorma(),document.querySelector("lexml-eta-articulacao").style.display="block"),this.dispositivosEmenda&&this.hasChangedEmenda(o)&&this.loadEmenda(),super.update(o)}hasChangedProjetoNorma(o){return o.has("projetoNorma")&&o.get("projetoNorma")!==void 0}hasChangedModo(o){return o.has("modo")&&o.get("modo")!==void 0}hasChangedEmenda(o){return o.has("dispositivosEmenda")&&o.get("dispositivosEmenda")}loadProjetoNorma(){var o,e,t;let i;if(this.projetoNorma&&this.projetoNorma.value||(this.projetoNorma=Xl),this.modo===vt.EMENDA_ARTIGO_ONDE_COUBER){const n=(o=jn(this.projetoNorma))!==null&&o!==void 0?o:"";i=Wl(Xl,!0),i.urn=n;const s=i.articulacao.artigos[0];s.rotulo="Art.",s.numero="1",s.id="art1";const p=new So;p.tipoEmenda=vt.EMENDA_ARTIGO_ONDE_COUBER,s.situacao=p,!((t=(e=this.dispositivosEmenda)===null||e===void 0?void 0:e.dispositivosAdicionados)===null||t===void 0)&&t.length&&i.articulacao.removeFilho(i.articulacao.filhos[0])}else i=Wl(this.projetoNorma,this.modo===vt.EMENDA);var r;me.dispatch((r=i.articulacao,{type:"ABRIR_ARTICULACAO",classificacao:this.modo,articulacao:r}))}loadEmenda(){this.dispositivosEmenda&&(clearInterval(this._timerLoadEmenda),this._timerLoadEmenda=window.setTimeout(()=>{me.dispatch(Kh.execute(this.dispositivosEmenda))},1e3))}render(){return Re`
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
    `}};ue([Ge({type:String})],cr.prototype,"modo",void 0),ue([Ge({type:Object})],cr.prototype,"projetoNorma",void 0),ue([Ge({type:Object})],cr.prototype,"dispositivosEmenda",void 0),cr=ue([Tt("lexml-eta")],cr);const Km=In`
  fieldset {
    border: 0;
    padding: 5px 0 20px 0;
  }

  legend {
    font-weight: normal;
  }

  .lexml-autoria {
    display: block;
    height: 100%;
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
`,rn=new class{constructor(){this.identificacao="",this.nome="",this.sexo="M",this.siglaPartido="",this.siglaUF="",this.siglaCasaLegislativa="CD",this.cargo=""}};function Yl(o=200){return function(e,t,i){return{get(){const r=(...n)=>{let s=0;const p=()=>{clearInterval(s),this._isProcessandoValidacao?s=window.setTimeout(()=>p(),o):i.value.apply(this,n)};p()};return Object.defineProperty(this,t,{value:r,configurable:!0,writable:!0}),r}}}}let xt=class extends rt{constructor(){super(...arguments),this._nomesAutocomplete=[],this._podeIncluirParlamentar=!0,this._parlamentaresAutocomplete=[],this._exibirTemplateTipoAutoria=!1,this._timerValidacao=0,this._isProcessandoValidacao=!1,this._isProcessandoMovimentacao=!1,this._lastIndexAutoCompleted=-1}set parlamentares(o){const e=this._parlamentaresAutocomplete;this._parlamentaresAutocomplete=o,this._nomesAutocomplete=o.map(t=>t.nome),this.requestUpdate("parlamentares",e)}get parlamentares(){return this._parlamentaresAutocomplete}set autoria(o){const e=this._autoriaOriginal;this._autoriaOriginal=o,this._autoria=o?Vt(He({},o),{parlamentares:[...o.parlamentares]}):new Oa,this._autoria.parlamentares.length||(this._autoria.parlamentares=[He({},rn)]),this._podeIncluirParlamentar=this._isAllAutoresOk(),this.requestUpdate("autoria",e)}get autoria(){return this._autoriaOriginal}getAutoriaAtualizada(){return Vt(He({},this._autoria),{parlamentares:this._autoria.parlamentares.filter(o=>o.identificacao)})}render(){var o;return Re`
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
    `}_getTipoAutoriaTemplate(){var o,e;return this._exibirTemplateTipoAutoria?Re`
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
        `:Re`<div></div>`}_getParlamentaresTemplate(){var o;return Re`
      <div class="autoria-grid autoria-labels">
        <div class="autoria-grid--col1"><div class="autoria-header">Parlamentar</div></div>
        <div class="autoria-grid--col2"><div class="autoria-header">Cargo</div></div>
        <div class="autoria-grid--col3"><div class="autoria-buttons"></div></div>
      </div>
      ${(o=this._autoria)===null||o===void 0?void 0:o.parlamentares.map((e,t)=>this._getParlamentarAutocompleteTemplate(t))}
    `}_getParlamentarAutocompleteTemplate(o){var e;return Re`
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
    `}_getAssinaturasAdicionaisTemplate(){return Re`
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
    `}updated(){this._isProcessandoMovimentacao=!1}_isAllAutoresOk(){return this._autoria.parlamentares.every(o=>o.identificacao)}_incluirNovoParlamentar(){this._autoria.parlamentares=((o,e)=>{const t=[...o];return t.push(e),t})(this._autoria.parlamentares,He({},rn)),this._podeIncluirParlamentar=!1,setTimeout(()=>this._autocompletes[this._autoria.parlamentares.length-1].focus(),200)}_moverParlamentar(o,e){this._autoria.parlamentares=((t,i,r)=>{const n=i+r;if(n<0||n>=t.length)return t;const s=[...t];return s.splice(n,0,s.splice(i,1)[0]),s})(this._autoria.parlamentares,o,e),this.requestUpdate()}_excluirParlamentar(o){this._autoria.parlamentares=((e,t)=>{const i=[...e];return i.splice(t,1),i})(this._autoria.parlamentares,o),this._autoria.parlamentares.length||(this._autoria.parlamentares=[He({},rn)]),this._podeIncluirParlamentar=this._isAllAutoresOk(),this.requestUpdate()}_validarNomeParlamentar(o,e){this._isProcessandoValidacao=!0;const t=o.type==="blur";t||clearInterval(this._timerValidacao),this._timerValidacao=window.setTimeout(()=>{var i;const r=this._autocompletes[e],n=this._autoria.parlamentares[e].cargo,s=(i=r.value)!==null&&i!==void 0?i:"",p=new RegExp("^"+s.normalize("NFD").replace(zu,"")+"$","i"),u=this.parlamentares.find(c=>c.nome.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(p))||Vt(He({},rn),{nome:t?"":s}),d=!!u.identificacao;u.cargo=t&&!d?"":n,this._autoria.parlamentares[e]=He({},u),this._podeIncluirParlamentar=d&&this._isAllAutoresOk(),this._isProcessandoValidacao=!1},o.type==="blur"?200:0)}_atualizarParlamentar(o,e){const t=this.parlamentares.find(i=>i.nome===o.detail.value);if(t){const{cargo:i}=this._autoria.parlamentares[e];this._autoria.parlamentares[e]=Vt(He({},t),{cargo:i})}this._podeIncluirParlamentar=!!t&&this._isAllAutoresOk(),o.target.focus(),this._lastIndexAutoCompleted=e,this.requestUpdate()}_atualizarCargo(o,e){this._autoria.parlamentares[e].cargo=o.target.value}_atualizarQtdAssinaturasAdicionaisSenadores(o){this._autoria.quantidadeAssinaturasAdicionaisSenadores=Number(o.target.value)}_atualizarQtdAssinaturasAdicionaisDeputados(o){this._autoria.quantidadeAssinaturasAdicionaisDeputados=Number(o.target.value)}_atualizarExibirPartidoUF(o){this._autoria.imprimirPartidoUF=o.target.checked}_handleKeyUp(o,e){o.ctrlKey||o.altKey||o.shiftKey?!o.ctrlKey||o.altKey||o.shiftKey||(o.key==="ArrowUp"?this._isProcessandoMovimentacao||(this._isProcessandoMovimentacao=!0,this._moverParlamentar(e,-1),this._focarAutocompleteOuCargo(o.target,e,-1)):o.key==="ArrowDown"&&(this._isProcessandoMovimentacao||(this._isProcessandoMovimentacao=!0,this._moverParlamentar(e,1),this._focarAutocompleteOuCargo(o.target,e,1)))):o.key==="Enter"&&this._podeIncluirParlamentar&&e!==this._lastIndexAutoCompleted?(this._btnNovoParlamentar.click(),this._lastIndexAutoCompleted=-1):["ArrowUp","ArrowDown"].includes(o.key)&&this._autoria.parlamentares[e].identificacao&&this._focarAutocompleteOuCargo(o.target,e,o.key==="ArrowUp"?-1:1)}_focarAutocompleteOuCargo(o,e,t){const i=o.tagName==="LEXML-AUTOCOMPLETE"?this._autocompletes:this._inputCargos,r=e+t;r<0||r>=i.length||setTimeout(()=>i[r].focus(),0)}_handleClickAutoComplete(){window.setTimeout(()=>this._lastIndexAutoCompleted=-1,0)}};xt.styles=[Km],ue([Xo("#btnNovoParlamentar")],xt.prototype,"_btnNovoParlamentar",void 0),ue([vl("input#tex-cargo")],xt.prototype,"_inputCargos",void 0),ue([vl("lexml-autocomplete")],xt.prototype,"_autocompletes",void 0),ue([mn()],xt.prototype,"_nomesAutocomplete",void 0),ue([mn()],xt.prototype,"_podeIncluirParlamentar",void 0),ue([Ge({type:Array})],xt.prototype,"parlamentares",null),ue([Ge({type:Object})],xt.prototype,"autoria",null),ue([Yl()],xt.prototype,"_moverParlamentar",null),ue([Yl()],xt.prototype,"_excluirParlamentar",null),xt=ue([Tt("lexml-autoria")],xt);let qi=class extends rt{constructor(){super(...arguments),this.items=[],this.opened=!1,this.maxSuggestions=10,this._suggestions=[],this._bound={},this._blur=!1,this._mouseEnter=!1}render(){return Re`
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
        ${this._suggestions.map(o=>Re`<li @click=${()=>this.autocomplete(o)}>${o}</li>`)}
      </ul>
    `}get contentElement(){if(this._inputEl)return this._inputEl;if(!this.hasUpdated)return;const o=this.shadowRoot.getElementById("dropdown-input").assignedElements();return this._inputEl=o.length?o[0]:this.shadowRoot.getElementById("defaultInput"),this._inputEl}get value(){return this.contentElement&&this.contentElement.value}set value(o){this.contentElement?this.contentElement.value=o:this._tempValue=o}firstUpdated(){this._suggestionEl=this.shadowRoot.getElementById("suggestions"),this._suggestionEl.style.width=`${this.contentElement.getBoundingClientRect().width}px`,this._bound.onKeyDown=this._handleKeyDown.bind(this),this._bound.onKeyUp=this._handleKeyUp.bind(this),this._bound.onFocus=this._handleFocus.bind(this),this._bound.onBlur=this._handleBlur.bind(this),this.contentElement.addEventListener("keydown",this._bound.onKeyDown),this.contentElement.addEventListener("keyup",this._bound.onKeyUp),this.contentElement.addEventListener("focus",this._bound.onFocus),this.contentElement.addEventListener("blur",this._bound.onBlur),this._tempValue!==void 0&&(this.contentElement.value=this._tempValue)}disconnectedCallback(){this.contentElement&&(this.contentElement.removeEventListener("keydown",this._bound.onKeyDown),this.contentElement.removeEventListener("keyup",this._bound.onKeyUp),this.contentElement.removeEventListener("focus",this._bound.onFocus),this.contentElement.removeEventListener("blur",this._bound.onBlur))}focus(o){this.contentElement&&this.contentElement.focus(o)}updated(o){o.has("opened")&&this.opened&&this._suggestionEl.childElementCount&&(this._highlightedEl=this._suggestionEl.children[0],this._highlightedEl.classList.add("active"))}open(){this._suggestionEl.style.width==="0px"&&(this._suggestionEl.style.width=`${this.contentElement.getBoundingClientRect().width}px`),this._suggestions.length&&(this.opened=!0)}close(){this.opened=!1,this._highlightedEl=null}suggest(o){this._suggestions=o||[],this._suggestions.length>1||this._suggestions.length===1&&this._suggestions[0]!==this.contentElement.value?this.open():this.close(),this.requestUpdate()}autocomplete(o){this.contentElement.value=o,this.close(),this.dispatchEvent(new CustomEvent("autocomplete",{detail:{value:o},composed:!0,bubbles:!0}))}_highlightPrev(){this._highlightedEl&&this._highlightedEl.previousElementSibling&&(this._highlightedEl.classList.remove("active"),this._highlightedEl=this._highlightedEl.previousElementSibling,this._highlightedEl.classList.add("active"))}_highlightNext(){this._highlightedEl&&this._highlightedEl.nextElementSibling&&(this._highlightedEl.classList.remove("active"),this._highlightedEl=this._highlightedEl.nextElementSibling,this._highlightedEl.classList.add("active"))}_handleKeyDown(o){o.key!=="ArrowUp"&&o.key!=="ArrowDown"||(o.preventDefault(),o.stopPropagation())}_handleKeyUp(o){var e,t;switch(o.key){case"ArrowUp":!((e=this._highlightedEl)===null||e===void 0)&&e.previousElementSibling&&(o.preventDefault(),o.stopPropagation(),this._highlightPrev());break;case"ArrowDown":!((t=this._highlightedEl)===null||t===void 0)&&t.nextElementSibling&&(o.preventDefault(),o.stopPropagation(),this._highlightNext());break;case"Enter":this._highlightedEl&&this._highlightedEl.click();break;default:if(this.items.length){const{value:i}=this.contentElement,r=i.normalize("NFD").replace(zu,"");this.suggest(this._findSuggetions(r))}}}_findSuggetions(o,e=this.maxSuggestions){if(!o)return[];let t=this._filterStartWith(o,e);return t.length<this.maxSuggestions&&(t=[...t,...this._filterContains(o,this.maxSuggestions-t.length).filter(i=>!t.includes(i))]),t}_filterStartWith(o,e=this.maxSuggestions){const t=new RegExp("^"+o,"gi");return o&&this.items.filter(i=>i.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(t)).slice(0,e)||[]}_filterContains(o,e=this.maxSuggestions){const t=new RegExp(o,"gi");return o&&this.items.filter(i=>i.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(t)).slice(0,e)||[]}_handleFocus(){this._blur=!1,this._suggestions.length>1&&this.open()}_handleBlur(){this._blur=!0,setTimeout(()=>this.close(),200),this._suggestions=[]}_handleItemMouseEnter(){this._mouseEnter=!0}_handleItemMouseLeave(){this._mouseEnter=!1,this._blur&&setTimeout(()=>this.close(),500)}};ue([Ge({type:Array})],qi.prototype,"items",void 0),ue([Ge({type:Boolean,reflect:!0})],qi.prototype,"opened",void 0),ue([Ge({type:Number})],qi.prototype,"maxSuggestions",void 0),ue([Ge({type:String})],qi.prototype,"value",null),qi=ue([Tt("lexml-autocomplete")],qi);let Si=class extends rt{render(){return Re`
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
    `}getCurrentDate(){return new Date().toLocaleDateString().split("/").reverse().join("-")}setDate(){this.inputData&&(this.data=this.inputData.value,this.optData.checked=!0)}};Si.styles=In`
    .lexml-data {
      display: block;
      height: 100%;
      /* padding: 5px 10px; */
      /* margin: 0px 5px; */
      font-size: 1em;
      max-width: 700px;
    }
  `,ue([Xo("#input-data")],Si.prototype,"inputData",void 0),ue([Xo("#opt-data")],Si.prototype,"optData",void 0),ue([Ge({type:String})],Si.prototype,"data",void 0),Si=ue([Tt("lexml-data")],Si);const Gm=Re`
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
`;var hs,fs,Ia=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ka=Symbol(),Jl=new Map,qd=class{constructor(o,e){if(this._$cssResult$=!0,e!==ka)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o}get styleSheet(){let o=Jl.get(this.cssText);return Ia&&o===void 0&&(Jl.set(this.cssText,o=new CSSStyleSheet),o.replaceSync(this.cssText)),o}toString(){return this.cssText}},Sd=o=>new qd(typeof o=="string"?o:o+"",ka),zo=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,r,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[n+1],o[0]);return new qd(t,ka)},ec=Ia?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Sd(t)})(o):o,tc=window.trustedTypes,Qm=tc?tc.emptyScript:"",oc=window.reactiveElementPolyfillSupport,Bs={toAttribute(o,e){switch(e){case Boolean:o=o?Qm:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Id=(o,e)=>e!==o&&(e==e||o==o),ms={attribute:!0,type:String,converter:Bs,reflect:!1,hasChanged:Id},Mi=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(o){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(o)}static get observedAttributes(){this.finalize();const o=[];return this.elementProperties.forEach((e,t)=>{const i=this._$Eh(t,e);i!==void 0&&(this._$Eu.set(i,t),o.push(i))}),o}static createProperty(o,e=ms){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(o,e),!e.noAccessor&&!this.prototype.hasOwnProperty(o)){const t=typeof o=="symbol"?Symbol():"__"+o,i=this.getPropertyDescriptor(o,t,e);i!==void 0&&Object.defineProperty(this.prototype,o,i)}}static getPropertyDescriptor(o,e,t){return{get(){return this[e]},set(i){const r=this[o];this[e]=i,this.requestUpdate(o,r,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(o){return this.elementProperties.get(o)||ms}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const o=Object.getPrototypeOf(this);if(o.finalize(),this.elementProperties=new Map(o.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(o){const e=[];if(Array.isArray(o)){const t=new Set(o.flat(1/0).reverse());for(const i of t)e.unshift(ec(i))}else o!==void 0&&e.push(ec(o));return e}static _$Eh(o,e){const t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof o=="string"?o.toLowerCase():void 0}o(){var o;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(o=this.constructor.l)===null||o===void 0||o.forEach(e=>e(this))}addController(o){var e,t;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(o),this.renderRoot!==void 0&&this.isConnected&&((t=o.hostConnected)===null||t===void 0||t.call(o))}removeController(o){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(o)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((o,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var o;const e=(o=this.shadowRoot)!==null&&o!==void 0?o:this.attachShadow(this.constructor.shadowRootOptions);return t=e,i=this.constructor.elementStyles,Ia?t.adoptedStyleSheets=i.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):i.forEach(r=>{const n=document.createElement("style"),s=window.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,t.appendChild(n)}),e;var t,i}connectedCallback(){var o;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(o=this._$Eg)===null||o===void 0||o.forEach(e=>{var t;return(t=e.hostConnected)===null||t===void 0?void 0:t.call(e)})}enableUpdating(o){}disconnectedCallback(){var o;(o=this._$Eg)===null||o===void 0||o.forEach(e=>{var t;return(t=e.hostDisconnected)===null||t===void 0?void 0:t.call(e)})}attributeChangedCallback(o,e,t){this._$AK(o,t)}_$ES(o,e,t=ms){var i,r;const n=this.constructor._$Eh(o,t);if(n!==void 0&&t.reflect===!0){const s=((r=(i=t.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&r!==void 0?r:Bs.toAttribute)(e,t.type);this._$Ei=o,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Ei=null}}_$AK(o,e){var t,i,r;const n=this.constructor,s=n._$Eu.get(o);if(s!==void 0&&this._$Ei!==s){const p=n.getPropertyOptions(s),u=p.converter,d=(r=(i=(t=u)===null||t===void 0?void 0:t.fromAttribute)!==null&&i!==void 0?i:typeof u=="function"?u:null)!==null&&r!==void 0?r:Bs.fromAttribute;this._$Ei=s,this[s]=d(e,p.type),this._$Ei=null}}requestUpdate(o,e,t){let i=!0;o!==void 0&&(((t=t||this.constructor.getPropertyOptions(o)).hasChanged||Id)(this[o],e)?(this._$AL.has(o)||this._$AL.set(o,e),t.reflect===!0&&this._$Ei!==o&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(o,t))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const o=this.scheduleUpdate();return o!=null&&await o,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,r)=>this[r]=i),this._$Et=void 0);let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(o=this._$Eg)===null||o===void 0||o.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(o){}_$AE(o){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostUpdated)===null||i===void 0?void 0:i.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(o)),this.updated(o)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(o){return!0}update(o){this._$E_!==void 0&&(this._$E_.forEach((e,t)=>this._$ES(t,this[t],e)),this._$E_=void 0),this._$EU()}updated(o){}firstUpdated(o){}};Mi.finalized=!0,Mi.elementProperties=new Map,Mi.elementStyles=[],Mi.shadowRootOptions={mode:"open"},oc==null||oc({ReactiveElement:Mi}),((hs=globalThis.reactiveElementVersions)!==null&&hs!==void 0?hs:globalThis.reactiveElementVersions=[]).push("1.2.3");var Ji=globalThis.trustedTypes,ic=Ji?Ji.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ao=`lit$${(Math.random()+"").slice(9)}$`,kd="?"+Ao,Wm=`<${kd}>`,er=document,Vr=(o="")=>er.createComment(o),Hr=o=>o===null||typeof o!="object"&&typeof o!="function",rc=Array.isArray,ur=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nc=/-->/g,sc=/>/g,Ho=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ac=/'/g,lc=/"/g,cc=/^(?:script|style|textarea|title)$/i,bt=(o=>(e,...t)=>({_$litType$:o,strings:e,values:t}))(1),To=Symbol.for("lit-noChange"),je=Symbol.for("lit-nothing"),uc=new WeakMap,Vi=er.createTreeWalker(er,129,null,!1),_n=class{constructor({strings:o,_$litType$:e},t){let i;this.parts=[];let r=0,n=0;const s=o.length-1,p=this.parts,[u,d]=((c,l)=>{const a=c.length-1,h=[];let f,m=l===2?"<svg>":"",g=ur;for(let y=0;y<a;y++){const b=c[y];let x,w,E=-1,S=0;for(;S<b.length&&(g.lastIndex=S,w=g.exec(b),w!==null);)S=g.lastIndex,g===ur?w[1]==="!--"?g=nc:w[1]!==void 0?g=sc:w[2]!==void 0?(cc.test(w[2])&&(f=RegExp("</"+w[2],"g")),g=Ho):w[3]!==void 0&&(g=Ho):g===Ho?w[0]===">"?(g=f!=null?f:ur,E=-1):w[1]===void 0?E=-2:(E=g.lastIndex-w[2].length,x=w[1],g=w[3]===void 0?Ho:w[3]==='"'?lc:ac):g===lc||g===ac?g=Ho:g===nc||g===sc?g=ur:(g=Ho,f=void 0);const k=g===Ho&&c[y+1].startsWith("/>")?" ":"";m+=g===ur?b+Wm:E>=0?(h.push(x),b.slice(0,E)+"$lit$"+b.slice(E)+Ao+k):b+Ao+(E===-2?(h.push(void 0),y):k)}const v=m+(c[a]||"<?>")+(l===2?"</svg>":"");if(!Array.isArray(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ic!==void 0?ic.createHTML(v):v,h]})(o,e);if(this.el=_n.createElement(u,t),Vi.currentNode=this.el.content,e===2){const c=this.el.content,l=c.firstChild;l.remove(),c.append(...l.childNodes)}for(;(i=Vi.nextNode())!==null&&p.length<s;){if(i.nodeType===1){if(i.hasAttributes()){const c=[];for(const l of i.getAttributeNames())if(l.endsWith("$lit$")||l.startsWith(Ao)){const a=d[n++];if(c.push(l),a!==void 0){const h=i.getAttribute(a.toLowerCase()+"$lit$").split(Ao),f=/([.?@])?(.*)/.exec(a);p.push({type:1,index:r,name:f[2],strings:h,ctor:f[1]==="."?Zm:f[1]==="?"?Ym:f[1]==="@"?Jm:$n})}else p.push({type:6,index:r})}for(const l of c)i.removeAttribute(l)}if(cc.test(i.tagName)){const c=i.textContent.split(Ao),l=c.length-1;if(l>0){i.textContent=Ji?Ji.emptyScript:"";for(let a=0;a<l;a++)i.append(c[a],Vr()),Vi.nextNode(),p.push({type:2,index:++r});i.append(c[l],Vr())}}}else if(i.nodeType===8)if(i.data===kd)p.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf(Ao,c+1))!==-1;)p.push({type:7,index:r}),c+=Ao.length-1}r++}}static createElement(o,e){const t=er.createElement("template");return t.innerHTML=o,t}};function tr(o,e,t=o,i){var r,n,s,p;if(e===To)return e;let u=i!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[i]:t._$Cu;const d=Hr(e)?void 0:e._$litDirective$;return(u==null?void 0:u.constructor)!==d&&((n=u==null?void 0:u._$AO)===null||n===void 0||n.call(u,!1),d===void 0?u=void 0:(u=new d(o),u._$AT(o,t,i)),i!==void 0?((s=(p=t)._$Cl)!==null&&s!==void 0?s:p._$Cl=[])[i]=u:t._$Cu=u),u!==void 0&&(e=tr(o,u._$AS(o,e.values),u,i)),e}var vs,gs,On=class{constructor(o,e,t,i){var r;this.type=2,this._$AH=je,this._$AN=void 0,this._$AA=o,this._$AB=e,this._$AM=t,this.options=i,this._$Cg=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var o,e;return(e=(o=this._$AM)===null||o===void 0?void 0:o._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let o=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&o.nodeType===11&&(o=e.parentNode),o}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(o,e=this){o=tr(this,o,e),Hr(o)?o===je||o==null||o===""?(this._$AH!==je&&this._$AR(),this._$AH=je):o!==this._$AH&&o!==To&&this.$(o):o._$litType$!==void 0?this.T(o):o.nodeType!==void 0?this.S(o):(t=>{var i;return rc(t)||typeof((i=t)===null||i===void 0?void 0:i[Symbol.iterator])=="function"})(o)?this.A(o):this.$(o)}M(o,e=this._$AB){return this._$AA.parentNode.insertBefore(o,e)}S(o){this._$AH!==o&&(this._$AR(),this._$AH=this.M(o))}$(o){this._$AH!==je&&Hr(this._$AH)?this._$AA.nextSibling.data=o:this.S(er.createTextNode(o)),this._$AH=o}T(o){var e;const{values:t,_$litType$:i}=o,r=typeof i=="number"?this._$AC(o):(i.el===void 0&&(i.el=_n.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(t);else{const n=new class{constructor(p,u){this.v=[],this._$AN=void 0,this._$AD=p,this._$AM=u}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(p){var u;const{el:{content:d},parts:c}=this._$AD,l=((u=p==null?void 0:p.creationScope)!==null&&u!==void 0?u:er).importNode(d,!0);Vi.currentNode=l;let a=Vi.nextNode(),h=0,f=0,m=c[0];for(;m!==void 0;){if(h===m.index){let g;m.type===2?g=new On(a,a.nextSibling,this,p):m.type===1?g=new m.ctor(a,m.name,m.strings,this,p):m.type===6&&(g=new e0(a,this,p)),this.v.push(g),m=c[++f]}h!==(m==null?void 0:m.index)&&(a=Vi.nextNode(),h++)}return l}m(p){let u=0;for(const d of this.v)d!==void 0&&(d.strings!==void 0?(d._$AI(p,d,u),u+=d.strings.length-2):d._$AI(p[u])),u++}}(r,this),s=n.p(this.options);n.m(t),this.S(s),this._$AH=n}}_$AC(o){let e=uc.get(o.strings);return e===void 0&&uc.set(o.strings,e=new _n(o)),e}A(o){rc(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let t,i=0;for(const r of o)i===e.length?e.push(t=new On(this.M(Vr()),this.M(Vr()),this,this.options)):t=e[i],t._$AI(r),i++;i<e.length&&(this._$AR(t&&t._$AB.nextSibling,i),e.length=i)}_$AR(o=this._$AA.nextSibling,e){var t;for((t=this._$AP)===null||t===void 0||t.call(this,!1,!0,e);o&&o!==this._$AB;){const i=o.nextSibling;o.remove(),o=i}}setConnected(o){var e;this._$AM===void 0&&(this._$Cg=o,(e=this._$AP)===null||e===void 0||e.call(this,o))}},$n=class{constructor(o,e,t,i,r){this.type=1,this._$AH=je,this._$AN=void 0,this.element=o,this.name=e,this._$AM=i,this.options=r,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=je}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(o,e=this,t,i){const r=this.strings;let n=!1;if(r===void 0)o=tr(this,o,e,0),n=!Hr(o)||o!==this._$AH&&o!==To,n&&(this._$AH=o);else{const s=o;let p,u;for(o=r[0],p=0;p<r.length-1;p++)u=tr(this,s[t+p],e,p),u===To&&(u=this._$AH[p]),n||(n=!Hr(u)||u!==this._$AH[p]),u===je?o=je:o!==je&&(o+=(u!=null?u:"")+r[p+1]),this._$AH[p]=u}n&&!i&&this.k(o)}k(o){o===je?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,o!=null?o:"")}},Zm=class extends $n{constructor(){super(...arguments),this.type=3}k(o){this.element[this.name]=o===je?void 0:o}},Xm=Ji?Ji.emptyScript:"",Ym=class extends $n{constructor(){super(...arguments),this.type=4}k(o){o&&o!==je?this.element.setAttribute(this.name,Xm):this.element.removeAttribute(this.name)}},Jm=class extends $n{constructor(o,e,t,i,r){super(o,e,t,i,r),this.type=5}_$AI(o,e=this){var t;if((o=(t=tr(this,o,e,0))!==null&&t!==void 0?t:je)===To)return;const i=this._$AH,r=o===je&&i!==je||o.capture!==i.capture||o.once!==i.once||o.passive!==i.passive,n=o!==je&&(i===je||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,o),this._$AH=o}handleEvent(o){var e,t;typeof this._$AH=="function"?this._$AH.call((t=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&t!==void 0?t:this.element,o):this._$AH.handleEvent(o)}},e0=class{constructor(o,e,t){this.element=o,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(o){tr(this,o)}},dc=window.litHtmlPolyfillSupport;dc==null||dc(_n,On),((fs=globalThis.litHtmlVersions)!==null&&fs!==void 0?fs:globalThis.litHtmlVersions=[]).push("2.1.3");var Ct=class extends Mi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var o,e;const t=super.createRenderRoot();return(o=(e=this.renderOptions).renderBefore)!==null&&o!==void 0||(e.renderBefore=t.firstChild),t}update(o){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(o),this._$Dt=((t,i,r)=>{var n,s;const p=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:i;let u=p._$litPart$;if(u===void 0){const d=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:null;p._$litPart$=u=new On(i.insertBefore(Vr(),d),d,void 0,r!=null?r:{})}return u._$AI(t),u})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var o;super.connectedCallback(),(o=this._$Dt)===null||o===void 0||o.setConnected(!0)}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this._$Dt)===null||o===void 0||o.setConnected(!1)}render(){return To}};Ct.finalized=!0,Ct._$litElement$=!0,(vs=globalThis.litElementHydrateSupport)===null||vs===void 0||vs.call(globalThis,{LitElement:Ct});var pc=globalThis.litElementPolyfillSupport;pc==null||pc({LitElement:Ct}),((gs=globalThis.litElementVersions)!==null&&gs!==void 0?gs:globalThis.litElementVersions=[]).push("3.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gi=zo`
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
`,t0=zo`
  ${gi}

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
`;function hc(o,e,t="vertical",i="smooth"){const r=function(l,a){return{top:Math.round(l.getBoundingClientRect().top-a.getBoundingClientRect().top),left:Math.round(l.getBoundingClientRect().left-a.getBoundingClientRect().left)}}(o,e),n=r.top+e.scrollTop,s=r.left+e.scrollLeft,p=e.scrollLeft,u=e.scrollLeft+e.offsetWidth,d=e.scrollTop,c=e.scrollTop+e.offsetHeight;t!=="horizontal"&&t!=="both"||(s<p?e.scrollTo({left:s,behavior:i}):s+o.clientWidth>u&&e.scrollTo({left:s-e.offsetWidth+o.clientWidth,behavior:i})),t!=="vertical"&&t!=="both"||(n<d?e.scrollTo({top:n,behavior:i}):n+o.clientHeight>c&&e.scrollTo({top:n-e.offsetHeight+o.clientHeight,behavior:i}))}var Sr,Vs=new Set,o0=new MutationObserver(Pd),Hs=new Map,br=document.documentElement.lang||navigator.language;function Pd(){br=document.documentElement.lang||navigator.language,[...Vs.keys()].map(o=>{typeof o.requestUpdate=="function"&&o.requestUpdate()})}o0.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});var Nd=class{constructor(o){this.host=o,this.host.addController(this)}hostConnected(){Vs.add(this.host)}hostDisconnected(){Vs.delete(this.host)}term(o,...e){return function(t,i,...r){const n=t.toLowerCase().slice(0,2),s=t.length>2?t.toLowerCase():"",p=Hs.get(s),u=Hs.get(n);let d;if(p&&p[i])d=p[i];else if(u&&u[i])d=u[i];else{if(!Sr||!Sr[i])return console.error(`No translation found for: ${i}`),i;d=Sr[i]}return typeof d=="function"?d(...r):d}(this.host.lang||br,o,...e)}date(o,e){return function(t,i,r){return i=new Date(i),new Intl.DateTimeFormat(t,r).format(i)}(this.host.lang||br,o,e)}number(o,e){return function(t,i,r){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(t,r).format(i)}(this.host.lang||br,o,e)}relativeTime(o,e,t){return function(i,r,n,s){return new Intl.RelativeTimeFormat(i,s).format(r,n)}(this.host.lang||br,o,e,t)}};(function(...o){o.map(e=>{const t=e.$code.toLowerCase();Hs.set(t,e),Sr||(Sr=e)}),Pd()})({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var i0=1,r0=2,Cd=o=>(...e)=>({_$litDirective$:o,values:e}),Td=class{constructor(o){}get _$AU(){return this._$AM._$AU}_$AT(o,e,t){this._$Ct=o,this._$AM=e,this._$Ci=t}_$AS(o,e){return this.update(o,e)}update(o,e){return this.render(...e)}},Wr=Cd(class extends Td{constructor(o){var e;if(super(o),o.type!==i0||o.name!=="class"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var t,i;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.et=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!(!((t=this.et)===null||t===void 0)&&t.has(n))&&this.st.add(n);return this.render(e)}const r=o.element.classList;this.st.forEach(n=>{n in e||(r.remove(n),this.st.delete(n))});for(const n in e){const s=!!e[n];s===this.st.has(n)||((i=this.et)===null||i===void 0?void 0:i.has(n))||(s?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return To}}),Dd=Object.defineProperty,n0=Object.defineProperties,s0=Object.getOwnPropertyDescriptor,a0=Object.getOwnPropertyDescriptors,fc=Object.getOwnPropertySymbols,l0=Object.prototype.hasOwnProperty,c0=Object.prototype.propertyIsEnumerable,mc=(o,e,t)=>e in o?Dd(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,bi=(o,e)=>{for(var t in e||(e={}))l0.call(e,t)&&mc(o,t,e[t]);if(fc)for(var t of fc(e))c0.call(e,t)&&mc(o,t,e[t]);return o},Un=(o,e)=>n0(o,a0(e)),re=(o,e,t,i)=>{for(var r,n=i>1?void 0:i?s0(e,t):e,s=o.length-1;s>=0;s--)(r=o[s])&&(n=(i?r(e,t,n):r(n))||n);return i&&n&&Dd(e,t,n),n};function ai(o,e){const t=bi({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:n}=i;if(o in i){const s=o;i.update=function(p){if(p.has(s)){const u=p.get(s),d=this[s];u!==d&&(t.waitUntilFirstUpdate&&!this.hasUpdated||this[r](u,d))}n.call(this,p)}}}}function kt(o,e,t){const i=new CustomEvent(e,bi({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return o.dispatchEvent(i),i}function vc(o,e){return new Promise(t=>{o.addEventListener(e,function i(r){r.target===o&&(o.removeEventListener(e,i),t())})})}var yi=o=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(o,e):((t,i)=>{const{kind:r,elements:n}=i;return{kind:r,elements:n,finisher(s){window.customElements.define(t,s)}}})(o,e),u0=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Un(bi({},e),{finisher(t){t.createProperty(e.key,o)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function we(o){return(e,t)=>t!==void 0?((i,r,n)=>{r.constructor.createProperty(n,i)})(o,e,t):u0(o,e)}function Rd(o){return we(Un(bi({},o),{state:!0}))}var bs;function ei(o,e){return(({finisher:t,descriptor:i})=>(r,n)=>{var s;if(n===void 0){const p=(s=r.originalKey)!==null&&s!==void 0?s:r.key,u=i!=null?{kind:"method",placement:"prototype",key:p,descriptor:i(r.key)}:Un(bi({},r),{key:p});return t!=null&&(u.finisher=function(d){t(d,p)}),u}{const p=r.constructor;i!==void 0&&Object.defineProperty(r,n,i(n)),t==null||t(p,n)}})({descriptor:t=>{const i={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var n,s;return this[r]===void 0&&(this[r]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null),this[r]}}return i}})}(bs=window.HTMLSlotElement)===null||bs===void 0||bs.prototype.assignedElements;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ut=class extends Ct{constructor(){super(...arguments),this.localize=new Nd(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.preventIndicatorTransition(),this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(o=>{o.some(e=>!["aria-labelledby","aria-controls"].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels()),o.some(e=>e.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((o,e)=>{var t;o[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((t=this.getActiveTab())!=null?t:this.tabs[0],{emitEvents:!1}),e.unobserve(o[0].target))}).observe(this.tabGroup)})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}show(o){const e=this.tabs.find(t=>t.panel===o);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}getAllTabs(o=!1){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(e=>o?e.tagName.toLowerCase()==="sl-tab":e.tagName.toLowerCase()==="sl-tab"&&!e.disabled)}getAllPanels(){return[...this.body.querySelector("slot").assignedElements()].filter(o=>o.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(o=>o.active)}handleClick(o){const e=o.target.closest("sl-tab");(e==null?void 0:e.closest("sl-tab-group"))===this&&e!==null&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(o){const e=o.target.closest("sl-tab");if((e==null?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(o.key)&&e!==null&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),o.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(o.key))){const t=document.activeElement;if((t==null?void 0:t.tagName.toLowerCase())==="sl-tab"){let i=this.tabs.indexOf(t);o.key==="Home"?i=0:o.key==="End"?i=this.tabs.length-1:["top","bottom"].includes(this.placement)&&o.key==="ArrowLeft"||["start","end"].includes(this.placement)&&o.key==="ArrowUp"?i--:(["top","bottom"].includes(this.placement)&&o.key==="ArrowRight"||["start","end"].includes(this.placement)&&o.key==="ArrowDown")&&i++,i<0&&(i=this.tabs.length-1),i>this.tabs.length-1&&(i=0),this.tabs[i].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[i],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&hc(this.tabs[i],this.nav,"horizontal"),o.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}setActiveTab(o,e){if(e=bi({emitEvents:!0,scrollBehavior:"auto"},e),o!==this.activeTab&&!o.disabled){const t=this.activeTab;this.activeTab=o,this.tabs.map(i=>i.active=i===this.activeTab),this.panels.map(i=>{var r;return i.active=i.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&hc(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(t&&kt(this,"sl-tab-hide",{detail:{name:t.panel}}),kt(this,"sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(o=>{const e=this.panels.find(t=>t.name===o.panel);e&&(o.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",o.getAttribute("id")))})}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}repositionIndicator(){const o=this.getActiveTab();if(!o)return;const e=o.clientWidth,t=o.clientHeight,i=this.getAllTabs(!0),r=i.slice(0,i.indexOf(o)).reduce((n,s)=>({left:n.left+s.clientWidth,top:n.top+s.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.transform=`translateX(${r.left}px)`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${t}px`,this.indicator.style.transform=`translateY(${r.top}px)`}}preventIndicatorTransition(){const o=this.indicator.style.transition;this.indicator.style.transition="none",requestAnimationFrame(()=>{this.indicator.style.transition=o})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.panels=this.getAllPanels(),this.syncIndicator()}render(){return bt`
      <div
        part="base"
        class=${Wr({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?bt`
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

          ${this.hasScrollControls?bt`
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
    `}};ut.styles=t0,re([ei(".tab-group")],ut.prototype,"tabGroup",2),re([ei(".tab-group__body")],ut.prototype,"body",2),re([ei(".tab-group__nav")],ut.prototype,"nav",2),re([ei(".tab-group__indicator")],ut.prototype,"indicator",2),re([Rd()],ut.prototype,"hasScrollControls",2),re([we()],ut.prototype,"placement",2),re([we()],ut.prototype,"activation",2),re([we({attribute:"no-scroll-controls",type:Boolean})],ut.prototype,"noScrollControls",2),re([we()],ut.prototype,"lang",2),re([ai("noScrollControls",{waitUntilFirstUpdate:!0})],ut.prototype,"updateScrollControls",1),re([ai("placement",{waitUntilFirstUpdate:!0})],ut.prototype,"syncIndicator",1),ut=re([yi("sl-tab-group")],ut);var d0=(()=>{const o=document.createElement("style");let e;try{document.head.appendChild(o),o.sheet.insertRule(":focus-visible { color: inherit }"),e=!0}catch{e=!1}finally{o.remove()}return e})(),Ld=Sd(d0?":focus-visible":":focus"),p0=zo`
  ${gi}

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

  .icon-button${Ld} {
    box-shadow: var(--sl-focus-ring);
  }
`,Rt=o=>o!=null?o:je,wt=class extends Ct{constructor(){super(...arguments),this.label="",this.disabled=!1}render(){const o=!!this.href,e=bt`
      <sl-icon
        name=${Rt(this.name)}
        library=${Rt(this.library)}
        src=${Rt(this.src)}
        aria-hidden="true"
      ></sl-icon>
    `;return o?bt`
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
        `:bt`
          <button
            part="base"
            class=${Wr({"icon-button":!0,"icon-button--disabled":this.disabled})}
            ?disabled=${this.disabled}
            type="button"
            aria-label=${this.label}
          >
            ${e}
          </button>
        `}};wt.styles=p0,re([ei(".icon-button")],wt.prototype,"button",2),re([we()],wt.prototype,"name",2),re([we()],wt.prototype,"library",2),re([we()],wt.prototype,"src",2),re([we()],wt.prototype,"href",2),re([we()],wt.prototype,"target",2),re([we()],wt.prototype,"download",2),re([we()],wt.prototype,"label",2),re([we({type:Boolean,reflect:!0})],wt.prototype,"disabled",2),wt=re([yi("sl-icon-button")],wt);var Md="";function gc(o){Md=o}var jd=[...document.getElementsByTagName("script")],bc=jd.find(o=>o.hasAttribute("data-shoelace"));if(bc)gc(bc.getAttribute("data-shoelace"));else{const o=jd.find(t=>/shoelace(\.min)?\.js($|\?)/.test(t.src));let e="";o&&(e=o.getAttribute("src")),gc(e.split("/").slice(0,-1).join("/"))}var yc={"check-lg":`
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
  `},h0=[{name:"default",resolver:o=>`${Md.replace(/\/$/,"")}/assets/icons/${o}.svg`},{name:"system",resolver:o=>o in yc?`data:image/svg+xml,${encodeURIComponent(yc[o])}`:""}],ys=[];function xc(o){return h0.find(e=>e.name===o)}var xs=new Map,ws=new Map;async function f0(o){if(ws.has(o))return ws.get(o);const e=await function(i,r="cors"){if(xs.has(i))return xs.get(i);const n=fetch(i,{mode:r}).then(async s=>({ok:s.ok,status:s.status,html:await s.text()}));return xs.set(i,n),n}(o),t={ok:e.ok,status:e.status,svg:null};if(e.ok){const i=document.createElement("div");i.innerHTML=e.html;const r=i.firstElementChild;t.svg=(r==null?void 0:r.tagName.toLowerCase())==="svg"?r.outerHTML:""}return ws.set(o,t),t}var m0=zo`
  ${gi}

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
`,Ks=class extends Td{constructor(o){if(super(o),this.it=je,o.type!==r0)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(o){if(o===je||o==null)return this.vt=void 0,this.it=o;if(o===To)return o;if(typeof o!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(o===this.it)return this.vt;this.it=o;const e=[o];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Ks.directiveName="unsafeHTML",Ks.resultType=1;var Gs=class extends Ks{};Gs.directiveName="unsafeSVG",Gs.resultType=2;var v0=Cd(Gs),g0=new DOMParser,Gt=class extends Ct{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){var o;super.connectedCallback(),o=this,ys.push(o)}firstUpdated(){this.setIcon()}disconnectedCallback(){var o;super.disconnectedCallback(),o=this,ys=ys.filter(e=>e!==o)}getUrl(){const o=xc(this.library);return this.name&&o?o.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var o;const e=xc(this.library),t=this.getUrl();if(t)try{const i=await f0(t);if(t!==this.getUrl())return;if(i.ok){const r=g0.parseFromString(i.svg,"text/html").body.querySelector("svg");r!==null?((o=e==null?void 0:e.mutator)==null||o.call(e,r),this.svg=r.outerHTML,kt(this,"sl-load")):(this.svg="",kt(this,"sl-error"))}else this.svg="",kt(this,"sl-error")}catch{kt(this,"sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const o=typeof this.label=="string"&&this.label.length>0;return bt` <div
      part="base"
      class="icon"
      role=${Rt(o?"img":void 0)}
      aria-label=${Rt(o?this.label:void 0)}
      aria-hidden=${Rt(o?void 0:"true")}
    >
      ${v0(this.svg)}
    </div>`}};Gt.styles=m0,re([Rd()],Gt.prototype,"svg",2),re([we()],Gt.prototype,"name",2),re([we()],Gt.prototype,"src",2),re([we()],Gt.prototype,"label",2),re([we()],Gt.prototype,"library",2),re([ai("name"),ai("src"),ai("library")],Gt.prototype,"setIcon",1),Gt=re([yi("sl-icon")],Gt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var b0=0;function $d(){return++b0}var y0=zo`
  ${gi}

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

  .tab${Ld}:not(.tab--disabled) {
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
`,Qt=class extends Ct{constructor(){super(...arguments),this.localize=new Nd(this),this.attrId=$d(),this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}focus(o){this.tab.focus(o)}blur(){this.tab.blur()}handleCloseClick(){kt(this,"sl-close")}render(){return this.id=this.id.length>0?this.id:this.componentId,bt`
      <div
        part="base"
        class=${Wr({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        role="tab"
        aria-disabled=${this.disabled?"true":"false"}
        aria-selected=${this.active?"true":"false"}
        tabindex=${this.disabled||!this.active?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?bt`
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
    `}};Qt.styles=y0,re([ei(".tab")],Qt.prototype,"tab",2),re([we({reflect:!0})],Qt.prototype,"panel",2),re([we({type:Boolean,reflect:!0})],Qt.prototype,"active",2),re([we({type:Boolean})],Qt.prototype,"closable",2),re([we({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2),re([we()],Qt.prototype,"lang",2),Qt=re([yi("sl-tab")],Qt);var x0=zo`
  ${gi}

  :host {
    --padding: 0;

    display: block;
  }

  .tab-panel {
    border: solid 1px transparent;
    padding: var(--padding);
  }
`,dr=class extends Ct{constructor(){super(...arguments),this.attrId=$d(),this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId}render(){return this.style.display=this.active?"block":"none",bt`
      <div part="base" class="tab-panel" role="tabpanel" aria-hidden=${this.active?"false":"true"}>
        <slot></slot>
      </div>
    `}};function wc(o,e,t){return new Promise(i=>{if((t==null?void 0:t.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=o.animate(e,Un(bi({},t),{duration:w0()?0:t.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function w0(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ec(o){return Promise.all(o.getAnimations().map(e=>new Promise(t=>{const i=requestAnimationFrame(t);e.addEventListener("cancel",()=>i,{once:!0}),e.addEventListener("finish",()=>i,{once:!0}),e.cancel()})))}dr.styles=x0,re([we({reflect:!0})],dr.prototype,"name",2),re([we({type:Boolean,reflect:!0})],dr.prototype,"active",2),dr=re([yi("sl-tab-panel")],dr);var Ud=new Map,E0=new WeakMap;function Ac(o,e){Ud.set(o,function(t){return t!=null?t:{keyframes:[],options:{duration:0}}}(e))}function _c(o,e){const t=E0.get(o);return t!=null&&t[e]?t[e]:Ud.get(e)||{keyframes:[],options:{duration:0}}}var A0=zo`
  ${gi}

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
`,Ii=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Dt=class extends Ct{constructor(){super(...arguments),this.hasSlotController=new class{constructor(o,...e){this.slotNames=[],(this.host=o).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent.trim()!=="")return!0;if(o.nodeType===o.ELEMENT_NODE){const e=o;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(o){return this.host.querySelector(`:scope > [slot="${o}"]`)!==null}test(o){return o==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(o)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(o){const e=o.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}}(this,"icon","suffix"),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,vc(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,vc(this,"sl-after-hide")}async toast(){return new Promise(o=>{Ii.parentElement===null&&document.body.append(Ii),Ii.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Ii.removeChild(this),o(),Ii.querySelector("sl-alert")===null&&Ii.remove()},{once:!0})})}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){kt(this,"sl-show"),this.duration<1/0&&this.restartAutoHide(),await Ec(this.base),this.base.hidden=!1;const{keyframes:o,options:e}=_c(this,"alert.show");await wc(this.base,o,e),kt(this,"sl-after-show")}else{kt(this,"sl-hide"),clearTimeout(this.autoHideTimeout),await Ec(this.base);const{keyframes:o,options:e}=_c(this,"alert.hide");await wc(this.base,o,e),this.base.hidden=!0,kt(this,"sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return bt`
      <div
        part="base"
        class=${Wr({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?bt`
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
    `}};Dt.styles=A0,re([ei('[part="base"]')],Dt.prototype,"base",2),re([we({type:Boolean,reflect:!0})],Dt.prototype,"open",2),re([we({type:Boolean,reflect:!0})],Dt.prototype,"closable",2),re([we({reflect:!0})],Dt.prototype,"variant",2),re([we({type:Number})],Dt.prototype,"duration",2),re([ai("open",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleOpenChange",1),re([ai("duration")],Dt.prototype,"handleDurationChange",1),Dt=re([yi("sl-alert")],Dt),Ac("alert.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}}),Ac("alert.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});var _0=zo`
  ${gi}

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
`,ki=class extends Ct{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return bt`
      <span
        part="base"
        class=${Wr({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};ki.styles=_0,re([we({reflect:!0})],ki.prototype,"variant",2),re([we({type:Boolean,reflect:!0})],ki.prototype,"pill",2),re([we({type:Boolean,reflect:!0})],ki.prototype,"pulse",2),ki=re([yi("sl-badge")],ki);let St=class extends Pn(me)(rt){constructor(){super(),this.modo="",this.projetoNorma={},this.existeObserverEmenda=!1,this.autoria=new Oa,this.parlamentares=[],this.getParlamentares().then(o=>this.parlamentares=o)}async getParlamentares(){return(await(await fetch("https://emendas-api.herokuapp.com/parlamentares")).json()).map(o=>({identificacao:o.id,nome:o.nome,sexo:o.sexo,siglaPartido:o.siglaPartido,siglaUF:o.siglaUF,siglaCasaLegislativa:o.siglaCasa}))}getEmenda(){const o=new mm;return o.modoEdicao=this.modo,o.proposicao.urn=jn(this.projetoNorma),o.componentes[0].urn=o.proposicao.urn,o.componentes[0].dispositivos=this._lexmlEta.getDispositivosEmenda(),o.comandoEmenda=this._lexmlEta.getComandoEmenda(),o.justificativa=this._lexmlJustificativa.texto,o.autoria=this._lexmlAutoria.getAutoriaAtualizada(),o.data=this._lexmlData.data,o}setEmenda(o){this.modo=o.modoEdicao,this._lexmlEta.dispositivosEmenda=o.componentes[0].dispositivos,this.autoria=o.autoria,this._lexmlJustificativa.setContent(o.justificativa),this._lexmlData.data=o.data}createRenderRoot(){return this}updated(){(this==null?void 0:this.ajustarAltura())&&this.existeObserverEmenda!==!0&&this.observarAltura()}pesquisarAlturaParentElement(o){if(o.parentElement===null)return 0;{const e=getComputedStyle(this).getPropertyValue("--min-height").replace("px","");return o.scrollHeight>=e?o.scrollHeight:this.pesquisarAlturaParentElement(o.parentElement)}}ajustarAltura(o){var e,t;let i=o!==void 0?o:this.pesquisarAlturaParentElement(this);const r=(t=(e=document.querySelector("sl-tab-group"))===null||e===void 0?void 0:e.shadowRoot)===null||t===void 0?void 0:t.querySelector(".tab-group__nav-container"),n=r==null?void 0:r.scrollHeight;return!!(n&&(i=i-n-2,i>0))&&(this==null||this.style.setProperty("--height",i+"px"),this==null||this.style.setProperty("--overflow","hidden"),!0)}observarAltura(){const o=new ResizeObserver(e=>{for(const t of e)t.contentBoxSize&&this.ajustarAltura(t.contentBoxSize[0].blockSize)});this.existeObserverEmenda=!0,o.observe(this)}render(){return Re`
      ${Gm}
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
          overflow-y: auto;
        }
        .badge-pulse {
          margin-left: 5px;
        }
        sl-alert {
          --box-shadow: var(--sl-shadow-x-large);
          margin: 20px;
        }
      </style>

      <sl-tab-group>
        <sl-tab slot="nav" panel="lexml-eta">Texto</sl-tab>
        <sl-tab slot="nav" panel="justificativa">Justificativa</sl-tab>
        <sl-tab slot="nav" panel="autoria">Data e Autoria</sl-tab>
        <sl-tab slot="nav" panel="avisos">
          Avisos
          <div class="badge-pulse">
            <sl-badge variant="danger" pill pulse>4</sl-badge>
          </div>
        </sl-tab>
        <sl-tab-panel name="lexml-eta">
          <lexml-eta id="lexmlEta" modo=${this.modo} .projetoNorma=${this.projetoNorma}></lexml-eta>
        </sl-tab-panel>
        <sl-tab-panel name="justificativa">
          <lexml-emenda-justificativa></lexml-emenda-justificativa>
        </sl-tab-panel>
        <sl-tab-panel name="autoria">
          <lexml-data></lexml-data>
          <hr />
          <lexml-autoria .parlamentares=${this.parlamentares} .autoria=${this.autoria}></lexml-autoria>
        </sl-tab-panel>
        <sl-tab-panel name="avisos">
          <sl-alert variant="success" open closable class="alert-closable">
            <sl-icon slot="icon" name="check2-circle"></sl-icon>
            Cada emenda somente pode referir-se a apenas um dispositivo, salvo se houver correlação entre dispositivos. Verifique se há correlação entre os dispositivos emendados
            antes de submetê-la.
          </sl-alert>
          <sl-alert variant="warning" open closable class="alert-closable">
            <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
            Cada emenda somente pode referir-se a apenas um dispositivo, salvo se houver correlação entre dispositivos. Verifique se há correlação entre os dispositivos emendados
            antes de submetê-la.
          </sl-alert>
          <sl-alert variant="danger" open closable class="alert-closable">
            <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
            Cada emenda somente pode referir-se a apenas um dispositivo, salvo se houver correlação entre dispositivos. Verifique se há correlação entre os dispositivos emendados
            antes de submetê-la.
          </sl-alert>
          <sl-alert variant="primary" open closable class="alert-closable">
            <sl-icon slot="icon" name="info-circle"></sl-icon>
            Cada emenda somente pode referir-se a apenas um dispositivo, salvo se houver correlação entre dispositivos. Verifique se há correlação entre os dispositivos emendados
            antes de submetê-la.
          </sl-alert>
        </sl-tab-panel>
      </sl-tab-group>
    `}};ue([Ge({type:String})],St.prototype,"modo",void 0),ue([Ge({type:Object})],St.prototype,"projetoNorma",void 0),ue([Ge({type:Boolean})],St.prototype,"existeObserverEmenda",void 0),ue([mn()],St.prototype,"autoria",void 0),ue([mn()],St.prototype,"parlamentares",void 0),ue([Xo("lexml-eta")],St.prototype,"_lexmlEta",void 0),ue([Xo("lexml-emenda-justificativa")],St.prototype,"_lexmlJustificativa",void 0),ue([Xo("lexml-autoria")],St.prototype,"_lexmlAutoria",void 0),ue([Xo("lexml-data")],St.prototype,"_lexmlData",void 0),St=ue([Tt("lexml-emenda")],St);const Fd=rp(mp);Fd.use(np()).use(gp);Fd.mount("#app");export{Ui as _,P0 as a,I0 as b,S0 as c,k0 as d,dp as g,up as i,N0 as s,Qs as u};
