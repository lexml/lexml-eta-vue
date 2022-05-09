var md=Object.defineProperty,vd=Object.defineProperties;var gd=Object.getOwnPropertyDescriptors;var _a=Object.getOwnPropertySymbols;var bd=Object.prototype.hasOwnProperty,yd=Object.prototype.propertyIsEnumerable;var Oa=(o,e,t)=>e in o?md(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,Be=(o,e)=>{for(var t in e||(e={}))bd.call(e,t)&&Oa(o,t,e[t]);if(_a)for(var t of _a(e))yd.call(e,t)&&Oa(o,t,e[t]);return o},Ft=(o,e)=>vd(o,gd(e));import{d as xd,a as wd,u as Ed,b as Dn,o as Ad,c as _d,e as Rn,f as qa,g as Od,h as qd,F as Sd,r as Id,i as kd,j as Nd,k as Pd,l as Cd}from"./vendor.d72107b9.js";const Td=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}};Td();const Dd="modulepreload",Sa={},Rd="/lexml-eta-vue/",Pi=function(e,t){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=`${Rd}${i}`,i in Sa)return;Sa[i]=!0;const r=i.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${n}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":Dd,r||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),r)return new Promise((p,c)=>{s.addEventListener("load",p),s.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Ld=o=>{const e=[...o];return e.sort((t,i)=>{const r=new Date(t.metadados.datUltimoAcesso);return new Date(i.metadados.datUltimoAcesso).getTime()-r.getTime()}),e},Ia=o=>{window.localStorage.setItem("emendas",JSON.stringify(o))},zs=xd({id:"appStore",state:()=>({emendas:[]}),getters:{},actions:{adicionarEmenda(o){const e=Be({},o),t=this.emendas.findIndex(i=>{var r,n;return((r=i.metadados)==null?void 0:r.id)===((n=e.metadados)==null?void 0:n.id)});t>=0?this.emendas[t]=e:this.emendas.push(e),this.emendas=Ld(this.emendas),Ia(this.emendas)},lerEmendas(){return this.emendas=JSON.parse(window.localStorage.getItem("emendas")||"[]"),this.emendas},removerDaLista(o){this.emendas=this.emendas.filter(e=>{var t,i;return((t=e.metadados)==null?void 0:t.id)!==((i=o.metadados)==null?void 0:i.id)}),Ia(this.emendas)}}}),jd=o=>"emenda"in o,Md=o=>jd(o)?o.emenda.proposicao:o,Ke=[];for(let o=0;o<256;o++)Ke[o]=(o<16?"0":"")+o.toString(16);const $d=()=>{const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return Ke[o&255]+Ke[o>>8&255]+Ke[o>>16&255]+Ke[o>>24&255]+"-"+Ke[e&255]+Ke[e>>8&255]+"-"+Ke[e>>16&15|64]+Ke[e>>24&255]+"-"+Ke[t&63|128]+Ke[t>>8&255]+"-"+Ke[t>>16&255]+Ke[t>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]};let xn;var Ud={configModulo:o=>xn=o};const Gm=(o,e)=>{if(o){const{sigla:t,numero:i,ano:r}=Md(o),n={sigla:t,numero:i,ano:r};e&&(n.ondeCouber=e),xn.push({path:"/edicao",query:n})}},Qm=o=>{const e=o;e.metadados.id=e.metadados.id||$d(),e.metadados.datAlteracao=new Date,e.metadados.datUltimoAcesso=new Date;const t=JSON.stringify(e,null,4),i=new Blob([t],{type:"application/json"}),{sigla:r,numero:n,ano:s}=e.emenda.proposicao,p=`${r} ${n}/${s}.emenda.json`,c=URL.createObjectURL(i),d=document.createElement("a");d.href=c,d.download=p,document.body.appendChild(d),d.click(),zs().adicionarEmenda(e)},Wm=o=>{if(o){o.metadados.datUltimoAcesso=new Date;const{sigla:e,numero:t,ano:i}=o.emenda.proposicao,r={sigla:e,numero:t,ano:i};o.emenda.tipo==="emendaArtigoOndeCouber"&&(r.ondeCouber=!0),xn.push({name:"edicao",query:r,params:{emendaEmDisco:JSON.stringify(o),titulo:o.metadados.titulo}})}},Xm=()=>{const o=document.getElementById("fileUpload");o!=null&&o.click()},Zm=o=>{const e=o.target;if(e&&e.files){const t=new FileReader;t.readAsText(e.files[0]),t.onloadend=i=>{var r;if((r=i.target)!=null&&r.result){const n=JSON.parse(i.target.result),s=n;s.metadados.datAlteracao=new Date(n.datAlteracao),s.metadados.datUltimoAcesso=new Date;const{sigla:p,numero:c,ano:d}=s.emenda.proposicao,u={sigla:p,numero:c,ano:d};s.emenda.tipo==="emendaArtigoOndeCouber"&&(u.ondeCouber=!0),zs().adicionarEmenda(s),xn.push({name:"edicao",query:u,params:{emendaEmDisco:JSON.stringify(s),titulo:s.metadados.titulo}})}}}};const Fd={class:"bs-eta"},zd=wd({setup(o){Ud.configModulo(Ed());const e=Dn(()=>Pi(()=>import("./HeaderArea.334ad89d.js"),["assets/HeaderArea.334ad89d.js","assets/HeaderArea.1c64915d.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.d72107b9.js"]));Dn(()=>Pi(()=>import("./FooterArea.7bce4361.js"),["assets/FooterArea.7bce4361.js","assets/FooterArea.ebc43ff2.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.d72107b9.js"]));const t=Dn(()=>Pi(()=>import("./IconesSvg.76eb3f8a.js"),["assets/IconesSvg.76eb3f8a.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.d72107b9.js"]));return zs().lerEmendas(),(r,n)=>{const s=Id("router-view");return Ad(),_d(Sd,null,[Rn(qa(e)),Od("div",Fd,[Rn(s)]),qd("",!0),Rn(qa(t))],64)}}}),Bd=[{path:"/",name:"home",component:()=>Pi(()=>import("./DashboardView.d824dc13.js").then(function(o){return o.D}),["assets/DashboardView.d824dc13.js","assets/DashboardView.5f18c293.css","assets/vendor.d72107b9.js","assets/proposicaoService.8f275e90.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/edicao",name:"edicao",component:()=>Pi(()=>import("./EditorEmendaView.46bfec42.js"),["assets/EditorEmendaView.46bfec42.js","assets/vendor.d72107b9.js"]),props:!0},{path:"/pesquisa-proposicao",name:"PesquisaProposicao",component:()=>Pi(()=>import("./PesquisaProposicaoView.2fa40f47.js").then(function(o){return o.P}),["assets/PesquisaProposicaoView.2fa40f47.js","assets/PesquisaProposicaoView.d0506868.css","assets/vendor.d72107b9.js","assets/proposicaoService.8f275e90.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0}],Hd=kd({history:Nd(),routes:Bd,scrollBehavior(o,e,t){return new Promise(i=>{if(!t)i(!1);else{const r=new Date;let n=0;const s=()=>{clearInterval(n);const p=(new Date().getTime()-r.getTime())/1e3,c=document.body.scrollHeight;p<2e3&&c<t.top?n=window.setTimeout(()=>{s()},100):i(Ft(Be({},t),{behavior:"auto"}))};s()}})}}),en=Symbol("defaultState"),dc=Symbol("delegatesFocus"),Fo=Symbol("firstRender"),pc=Symbol("focusTarget"),vs=Symbol("hasDynamicTemplate"),hc=Symbol("ids"),tn=Symbol("nativeInternals"),yi=Symbol("raiseChangeEvents"),co=Symbol("render"),on=Symbol("renderChanges"),nr=Symbol("rendered"),sr=Symbol("rendering"),gs=Symbol("setState"),pr=Symbol("shadowRoot"),bs=Symbol("shadowRootMode"),ys=Symbol("state"),ar=Symbol("stateEffects"),fc=Symbol("template");function wr(o,e){return typeof e=="boolean"?e:typeof e=="string"&&(e===""||o.toLowerCase()===e.toLowerCase())}function ko(o,e){let t=e;for(;t;){const i=t.assignedSlot||t.parentNode||t.host;if(i===o)return!0;t=i}return!1}function cn(o){const e=yc(o,i=>i instanceof HTMLElement&&i.matches('a[href],area[href],button:not([disabled]),details,iframe,input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[contentEditable="true"],[tabindex]')&&i.tabIndex>=0),{value:t}=e.next();return t instanceof HTMLElement?t:null}function mc(o,e){return Array.prototype.findIndex.call(o,t=>t===e||ko(t,e))}function vc(o,e){const t=e.composedPath()[0];return o===t||ko(o,t)}function*gc(o){o&&(yield o,yield*function*(e){let t=e;for(;t=t instanceof HTMLElement&&t.assignedSlot?t.assignedSlot:t instanceof ShadowRoot?t.host:t.parentNode,t;)yield t}(o))}function Er(o,e,t){o.toggleAttribute(e,t),o[tn]&&o[tn].states&&o[tn].states.toggle(e,t)}const bc={checked:!0,defer:!0,disabled:!0,hidden:!0,ismap:!0,multiple:!0,noresize:!0,readonly:!0,selected:!0};function*yc(o,e){let t;if(e(o)&&(yield o),o instanceof HTMLElement&&o.shadowRoot)t=o.shadowRoot.children;else{const i=o instanceof HTMLSlotElement?o.assignedNodes({flatten:!0}):[];t=i.length>0?i:o.childNodes}if(t)for(let i=0;i<t.length;i++)yield*yc(t[i],e)}const ke={html:(o,...e)=>Lt.html(o,...e).content},Lt={html(o,...e){const t=document.createElement("template");return t.innerHTML=String.raw(o,...e),t}},ka=new Map;function xc(o){if(typeof o=="function"){let e;try{e=new o}catch(t){if(t.name!=="TypeError")throw t;(function(i){let r;const n=/^[A-Za-z][A-Za-z0-9_$]*$/,s=i.name&&i.name.match(n);if(s){const d=/([A-Z])/g;r=s[0].replace(d,(u,a,l)=>l>0?`-${a}`:a).toLowerCase()}else r="custom-element";let p,c=ka.get(r)||0;for(;p=`${r}-${c}`,customElements.get(p);c++);customElements.define(p,i),ka.set(r,c+1)})(o),e=new o}return e}return document.createElement(o)}function xs(o,e){const t=o.parentNode;if(!t)throw"An element must have a parent before it can be substituted.";return(o instanceof HTMLElement||o instanceof SVGElement)&&(e instanceof HTMLElement||e instanceof SVGElement)&&(Array.prototype.forEach.call(o.attributes,i=>{e.getAttribute(i.name)||i.name==="class"||i.name==="style"||e.setAttribute(i.name,i.value)}),Array.prototype.forEach.call(o.classList,i=>{e.classList.add(i)}),Array.prototype.forEach.call(o.style,i=>{e.style[i]||(e.style[i]=o.style[i])})),e.append(...o.childNodes),t.replaceChild(e,o),e}function Li(o,e){if(typeof e=="function"&&o.constructor===e||typeof e=="string"&&o instanceof Element&&o.localName===e)return o;{const t=xc(e);return xs(o,t),t}}const Na={tabindex:"tabIndex"},Pa={tabIndex:"tabindex"};function wc(o){if(o===HTMLElement)return[];const e=Object.getPrototypeOf(o.prototype).constructor;let t=e.observedAttributes;t||(t=wc(e));const i=Object.getOwnPropertyNames(o.prototype).filter(r=>{const n=Object.getOwnPropertyDescriptor(o.prototype,r);return n&&typeof n.set=="function"}).map(r=>function(n){let s=Pa[n];if(!s){const p=/([A-Z])/g;s=n.replace(p,"-$1").toLowerCase(),Pa[n]=s}return s}(r)).filter(r=>t.indexOf(r)<0);return t.concat(i)}const Kr=Symbol("state"),Ln=Symbol("raiseChangeEventsInNextRender"),di=Symbol("changedSinceLastRender");function Vd(o,e){const t={};for(const n in e)i=e[n],r=o[n],(i instanceof Date&&r instanceof Date?i.getTime()===r.getTime():i===r)||(t[n]=!0);var i,r;return t}const Ca=new Map,jn=Symbol("shadowIdProxy"),Ec=Symbol("proxyElement"),Kd={get(o,e){const t=o[Ec][pr];return t&&typeof e=="string"?t.getElementById(e):null}},so=function(o){return class extends o{attributeChangedCallback(e,t,i){if(super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i),i!==t&&!this[sr]){const r=function(n){let s=Na[n];if(!s){const p=/-([a-z])/g;s=n.replace(p,c=>c[1].toUpperCase()),Na[n]=s}return s}(e);if(r in this){const n=bc[e]?wr(e,i):i;this[r]=n}}}static get observedAttributes(){return wc(this)}}}(function(o){class e extends o{constructor(){super(),this[Fo]=void 0,this[yi]=!1,this[di]=null,this[gs](this[en])}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[on]()}get[en](){return super[en]||{}}[co](i){super[co]&&super[co](i)}[on](){this[Fo]===void 0&&(this[Fo]=!0);const i=this[di];if(this[Fo]||i){const r=this[yi];this[yi]=this[Ln],this[sr]=!0,this[co](i),this[sr]=!1,this[di]=null,this[nr](i),this[Fo]=!1,this[yi]=r,this[Ln]=r}}[nr](i){super[nr]&&super[nr](i)}async[gs](i){this[sr]&&console.warn(`${this.constructor.name} called [setState] during rendering, which you should avoid.
See https://elix.org/documentation/ReactiveMixin.`);const{state:r,changed:n}=function(p,c){const d=Object.assign({},p[Kr]),u={};let a=c;for(;;){const l=Vd(d,a);if(Object.keys(l).length===0)break;Object.assign(d,a),Object.assign(u,l),a=p[ar](d,l)}return{state:d,changed:u}}(this,i);if(this[Kr]&&Object.keys(n).length===0)return;Object.freeze(r),this[Kr]=r,this[yi]&&(this[Ln]=!0);const s=this[Fo]===void 0||this[di]!==null;this[di]=Object.assign(this[di]||{},n),this.isConnected&&!s&&(await Promise.resolve(),this[on]())}get[ys](){return this[Kr]}[ar](i,r){return super[ar]?super[ar](i,r):{}}}return new URLSearchParams(location.search).get("elixdebug")==="true"&&Object.defineProperty(e.prototype,"state",{get(){return this[ys]}}),e}(function(o){return class extends o{get[hc](){if(!this[jn]){const e={[Ec]:this};this[jn]=new Proxy(e,Kd)}return this[jn]}[co](e){if(super[co]&&super[co](e),!this[pr]){const t=function(i){let r=i[vs]?void 0:Ca.get(i.constructor);if(r===void 0){if(r=i[fc],r&&!(r instanceof HTMLTemplateElement))throw`Warning: the [template] property for ${i.constructor.name} must return an HTMLTemplateElement.`;i[vs]||Ca.set(i.constructor,r||null)}return r}(this);if(t){const i=this.attachShadow({delegatesFocus:this[dc],mode:this[bs]}),r=document.importNode(t.content,!0);i.append(r),this[pr]=i}else this[pr]=null}}get[bs](){return"open"}}}(HTMLElement))),ws=Symbol("checkSize"),Xo=Symbol("closestAvailableItemIndex"),Es=Symbol("contentSlot"),H=en,un=Symbol("defaultTabIndex"),Bs=dc,Si=Symbol("effectEndTarget"),Fe=Fo,As=pc,lr=Symbol("getItemText"),uo=Symbol("goDown"),Kt=Symbol("goEnd"),xi=Symbol("goFirst"),wi=Symbol("goLast"),po=Symbol("goLeft"),ho=Symbol("goNext"),fo=Symbol("goPrevious"),mo=Symbol("goRight"),Gt=Symbol("goStart"),Ei=Symbol("goToItemWithPrefix"),vo=Symbol("goUp"),Gd=vs,re=hc,Zo=Symbol("inputDelegate"),Qd=Symbol("itemsDelegate"),xe=Symbol("keydown"),Wd=Symbol("mouseenter"),Xd=Symbol("mouseleave"),Vo=tn,ee=yi,Q=co,Zd=on,Yd=Symbol("renderDataToElement"),Y=nr,Qi=sr,ht=Symbol("scrollTarget"),W=gs,Ye=pr,Jd=bs,Hs=Symbol("startEffect"),C=ys,ge=ar,ep=Symbol("swipeDown"),tp=Symbol("swipeDownComplete"),op=Symbol("swipeLeft"),ip=Symbol("swipeLeftTransitionEnd"),rp=Symbol("swipeRight"),np=Symbol("swipeRightTransitionEnd"),sp=Symbol("swipeUp"),ap=Symbol("swipeUpComplete"),lp=Symbol("swipeStart"),cp=Symbol("swipeTarget"),ji=Symbol("tap"),ne=fc,up=Symbol("toggleSelectedFlag");new URLSearchParams(location.search).get("elixdebug")==="true"&&(window.elix={internal:{checkSize:ws,closestAvailableItemIndex:Xo,contentSlot:Es,defaultState:H,defaultTabIndex:un,delegatesFocus:Bs,effectEndTarget:Si,firstRender:Fe,focusTarget:As,getItemText:lr,goDown:uo,goEnd:Kt,goFirst:xi,goLast:wi,goLeft:po,goNext:ho,goPrevious:fo,goRight:mo,goStart:Gt,goToItemWithPrefix:Ei,goUp:vo,hasDynamicTemplate:Gd,ids:re,inputDelegate:Zo,itemsDelegate:Qd,keydown:xe,mouseenter:Wd,mouseleave:Xd,nativeInternals:Vo,event,raiseChangeEvents:ee,render:Q,renderChanges:Zd,renderDataToElement:Yd,rendered:Y,rendering:Qi,scrollTarget:ht,setState:W,shadowRoot:Ye,shadowRootMode:Jd,startEffect:Hs,state:C,stateEffects:ge,swipeDown:ep,swipeDownComplete:tp,swipeLeft:op,swipeLeftTransitionEnd:ip,swipeRight:rp,swipeRightTransitionEnd:np,swipeUp:sp,swipeUpComplete:ap,swipeStart:lp,swipeTarget:cp,tap:ji,template:ne,toggleSelectedFlag:up}});const Gr=Symbol("previousBodyStyleOverflow"),Qr=Symbol("previousDocumentMarginRight"),Ac=Symbol("wrap"),Mn=Symbol("wrappingFocus");function Vs(o){return class extends o{[xe](e){const t=cn(this[Ye]);if(t){const i=document.activeElement&&(document.activeElement===t||document.activeElement.contains(t)),r=this[Ye].activeElement,n=r&&(r===t||ko(r,t));(i||n)&&e.key==="Tab"&&e.shiftKey&&(this[Mn]=!0,this[re].focusCatcher.focus(),this[Mn]=!1)}return super[xe]&&super[xe](e)||!1}[Q](e){super[Q]&&super[Q](e),this[Fe]&&this[re].focusCatcher.addEventListener("focus",()=>{if(!this[Mn]){const t=cn(this[Ye]);t&&t.focus()}})}[Ac](e){const t=ke.html`
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
      `,i=t.getElementById("focusCaptureContainer");i&&(e.replaceWith(t),i.append(e))}}}function wn(o){return class extends o{constructor(){super(),this.addEventListener("keydown",async e=>{this[ee]=!0,this[C].focusVisible||this[W]({focusVisible:!0}),this[xe](e)&&(e.preventDefault(),e.stopImmediatePropagation()),await Promise.resolve(),this[ee]=!1})}attributeChangedCallback(e,t,i){if(e==="tabindex"){let r;i===null?r=-1:(r=Number(i),isNaN(r)&&(r=this[un]?this[un]:0)),this.tabIndex=r}else super.attributeChangedCallback(e,t,i)}get[H](){const e=this[Bs]?-1:0;return Object.assign(super[H]||{},{tabIndex:e})}[xe](e){return!!super[xe]&&super[xe](e)}[Q](e){super[Q]&&super[Q](e),e.tabIndex&&(this.tabIndex=this[C].tabIndex)}get tabIndex(){return super.tabIndex}set tabIndex(e){super.tabIndex!==e&&(super.tabIndex=e),this[Qi]||this[W]({tabIndex:e})}}}Vs.wrap=Ac;const dp=function(o){return class extends o{get[H](){return Object.assign(super[H]||{},{role:null})}[Q](e){if(super[Q]&&super[Q](e),e.role){const{role:t}=this[C];t?this.setAttribute("role",t):this.removeAttribute("role")}}get role(){return super.role}set role(e){const t=String(e);super.role=t,this[Qi]||this[W]({s:t})}}}(so);class Ks extends dp{get[H](){return Object.assign(super[H],{role:"none"})}get[ne](){return Lt.html`
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
    `}}class _c extends Ks{constructor(){super(),"PointerEvent"in window||this.addEventListener("touchmove",e=>{e.touches.length===1&&e.preventDefault()})}}const Wr=Symbol("closePromise"),$n=Symbol("closeResolve");function Oc(o){return class extends o{attributeChangedCallback(e,t,i){if(e==="opened"){const r=wr(e,i);this.opened!==r&&(this.opened=r)}else super.attributeChangedCallback(e,t,i)}async close(e){super.close&&await super.close(),this[W]({closeResult:e}),await this.toggle(!1)}get closed(){return this[C]&&!this[C].opened}get closeFinished(){return this[C].closeFinished}get closeResult(){return this[C].closeResult}get[H](){const e={closeResult:null,opened:!1};return this[Hs]&&Object.assign(e,{closeFinished:!0,effect:"close",effectPhase:"after",openCloseEffects:!0}),Object.assign(super[H]||{},e)}async open(){super.open&&await super.open(),this[W]({closeResult:void 0}),await this.toggle(!0)}get opened(){return this[C]&&this[C].opened}set opened(e){this[W]({closeResult:void 0}),this.toggle(e)}[Q](e){if(super[Q](e),e.opened){const{opened:t}=this[C];Er(this,"opened",t)}if(e.closeFinished){const{closeFinished:t}=this[C];Er(this,"closed",t)}}[Y](e){if(super[Y]&&super[Y](e),e.opened&&this[ee]){const i=new CustomEvent("opened-changed",{bubbles:!0,detail:{closeResult:this[C].closeResult,opened:this[C].opened}});this.dispatchEvent(i);const r=new CustomEvent("openedchange",{bubbles:!0,detail:{closeResult:this[C].closeResult,opened:this[C].opened}});if(this.dispatchEvent(r),this[C].opened){const n=new CustomEvent("opened",{bubbles:!0});this.dispatchEvent(n);const s=new CustomEvent("open",{bubbles:!0});this.dispatchEvent(s)}else{const n=new CustomEvent("closed",{bubbles:!0,detail:{closeResult:this[C].closeResult}});this.dispatchEvent(n);const s=new CustomEvent("close",{bubbles:!0,detail:{closeResult:this[C].closeResult}});this.dispatchEvent(s)}}const t=this[$n];this.closeFinished&&t&&(this[$n]=null,this[Wr]=null,t(this[C].closeResult))}[ge](e,t){const i=super[ge]?super[ge](e,t):{};if(t.openCloseEffects||t.effect||t.effectPhase||t.opened){const{effect:r,effectPhase:n,openCloseEffects:s,opened:p}=e;Object.assign(i,{closeFinished:s?r==="close"&&n==="after":!p})}return i}async toggle(e=!this.opened){if(super.toggle&&await super.toggle(e),e!==this[C].opened){const t={opened:e};this[C].openCloseEffects&&(t.effect=e?"open":"close",this[C].effectPhase==="after"&&(t.effectPhase="before")),await this[W](t)}}whenClosed(){return this[Wr]||(this[Wr]=new Promise(e=>{this[$n]=e})),this[Wr]}}}class qc extends so{get[ne](){return Lt.html`
      <style>
        :host {
          display: inline-block;
          position: relative;
        }
      </style>
      <slot></slot>
    `}}const Un=Symbol("appendedToDocument"),cr=Symbol("assignedZIndex"),Mo=Symbol("restoreFocusToElement");function Ta(o){const e=function(){const t=document.body.querySelectorAll("*"),i=Array.from(t,r=>{const n=getComputedStyle(r);let s=0;if(n.position!=="static"&&n.zIndex!=="auto"){const p=n.zIndex?parseInt(n.zIndex):0;s=isNaN(p)?0:p}return s});return Math.max(...i)}()+1;o[cr]=e,o.style.zIndex=e.toString()}function _s(o){const e=getComputedStyle(o).zIndex,t=o.style.zIndex,i=!isNaN(parseInt(t));if(e==="auto")return i;if(e==="0"&&!i){const r=o.assignedSlot||(o instanceof ShadowRoot?o.host:o.parentNode);if(!(r instanceof HTMLElement))return!0;if(!_s(r))return!1}return!0}function Sc(o){return class extends o{get[Es](){const e=this[Ye]&&this[Ye].querySelector("slot:not([name])");return this[Ye]&&e||console.warn(`SlotContentMixin expects ${this.constructor.name} to define a shadow tree that includes a default (unnamed) slot.
See https://elix.org/documentation/SlotContentMixin.`),e}get[H](){return Object.assign(super[H]||{},{content:null})}[Y](e){if(super[Y]&&super[Y](e),this[Fe]){const t=this[Es];t&&t.addEventListener("slotchange",async()=>{this[ee]=!0;const i=t.assignedNodes({flatten:!0});Object.freeze(i),this[W]({content:i}),await Promise.resolve(),this[ee]=!1})}}}}const pp=Oc(function(o){return class extends o{get autoFocus(){return this[C].autoFocus}set autoFocus(e){this[W]({autoFocus:e})}get[H](){return Object.assign(super[H]||{},{autoFocus:!0,persistent:!1})}async open(){this[C].persistent||this.isConnected||(this[Un]=!0,document.body.append(this)),super.open&&await super.open()}[Q](e){super[Q]&&super[Q](e),this[Fe]&&this.addEventListener("blur",t=>{const i=t.relatedTarget||document.activeElement;i instanceof HTMLElement&&(ko(this,i)||(this.opened?this[Mo]=i:(i.focus(),this[Mo]=null)))}),(e.effectPhase||e.opened||e.persistent)&&!this[C].persistent&&((this.closeFinished===void 0?this.closed:this.closeFinished)?this[cr]&&(this.style.zIndex="",this[cr]=null):this[cr]?this.style.zIndex=this[cr]:_s(this)||Ta(this))}[Y](e){if(super[Y]&&super[Y](e),this[Fe]&&this[C].persistent&&!_s(this)&&Ta(this),e.opened&&this[C].autoFocus)if(this[C].opened){this[Mo]||document.activeElement===document.body||(this[Mo]=document.activeElement);const t=cn(this);t&&t.focus()}else this[Mo]&&(this[Mo].focus(),this[Mo]=null);!this[Fe]&&!this[C].persistent&&this.closeFinished&&this[Un]&&(this[Un]=!1,this.parentNode&&this.parentNode.removeChild(this))}get[ne](){const e=super[ne]||Lt.html``;return e.content.append(ke.html`
        <style>
          :host([closed]) {
            display: none;
          }
        </style>
      `),e}}}(Sc(so)));class Ic extends pp{get backdrop(){return this[re]&&this[re].backdrop}get backdropPartType(){return this[C].backdropPartType}set backdropPartType(e){this[W]({backdropPartType:e})}get[H](){return Object.assign(super[H],{backdropPartType:Ks,framePartType:qc})}get frame(){return this[re].frame}get framePartType(){return this[C].framePartType}set framePartType(e){this[W]({framePartType:e})}[Q](e){super[Q](e),Da(this[Ye],this[C],e)}[Y](e){super[Y](e),e.opened&&this[C].content&&this[C].content.forEach(t=>{t[ws]&&t[ws]()})}get[ne](){const e=super[ne];return e.content.append(ke.html`
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
    `),Da(e.content,this[C]),e}}function Da(o,e,t){if(!t||t.backdropPartType){const{backdropPartType:i}=e,r=o.getElementById("backdrop");r&&Li(r,i)}if(!t||t.framePartType){const{framePartType:i}=e,r=o.getElementById("frame");r&&Li(r,i)}}const hp=function(o){return class extends o{get[H](){return Object.assign(super[H]||{},{role:"dialog"})}[xe](e){let t=!1;return e.key==="Escape"&&(this.close({canceled:"Escape"}),t=!0),t||super[xe]&&super[xe](e)||!1}[Q](e){if(super[Q]&&super[Q](e),e.opened)if(this[C].opened&&document.documentElement){const t=document.documentElement.clientWidth,i=window.innerWidth-t;this[Gr]=document.body.style.overflow,this[Qr]=i>0?document.documentElement.style.marginRight:null,document.body.style.overflow="hidden",i>0&&(document.documentElement.style.marginRight=`${i}px`)}else this[Gr]!=null&&(document.body.style.overflow=this[Gr],this[Gr]=null),this[Qr]!=null&&(document.documentElement.style.marginRight=this[Qr],this[Qr]=null);if(e.role){const{role:t}=this[C];this.setAttribute("role",t)}}get role(){return super.role}set role(e){super.role=e,this[Qi]||this[W]({role:e})}}}(Vs(wn(Ic)));class kc extends hp{get[H](){return Object.assign(super[H],{backdropPartType:_c,tabIndex:-1})}get[ne](){const e=super[ne],t=e.content.querySelector("#frame");return this[Vs.wrap](t),e.content.append(ke.html`
        <style>
          :host {
            height: 100%;
            left: 0;
            pointer-events: initial;
            top: 0;
            width: 100%;
          }
        </style>
      `),e}}class fp extends kc{get choiceButtons(){return this[C].choiceButtons}get choiceButtonPartType(){return this[C].choiceButtonPartType}set choiceButtonPartType(e){this[W]({choiceButtonPartType:e})}get choices(){return this[C].choices}set choices(e){this[W]({choices:e})}get[H](){return Object.assign(super[H],{choiceButtonPartType:"button",choiceButtons:[],choices:["OK"]})}[xe](e){let t=!1;const i=e.key.length===1&&e.key.toLowerCase();if(i){const r=this.choices.find(n=>n[0].toLowerCase()===i);r&&(this.close({choice:r}),t=!0)}return t||super[xe]&&super[xe](e)||!1}[Q](e){super[Q](e),this[Fe]&&this[re].choiceButtonContainer.addEventListener("click",async t=>{const i=t.target;if(i instanceof HTMLElement){const r=i.textContent;this[ee]=!0,await this.close({choice:r}),this[ee]=!1}}),e.choiceButtons&&function(t,i){const r=[...i],n=t.childNodes.length,s=r.length,p=Math.max(n,s);for(let c=0;c<p;c++){const d=t.childNodes[c],u=r[c];c>=n?t.append(u):c>=s?t.removeChild(t.childNodes[s]):d!==u&&(r.indexOf(d,c)>=c?t.insertBefore(u,d):t.replaceChild(u,d))}}(this[re].choiceButtonContainer,this[C].choiceButtons)}[ge](e,t){const i=super[ge](e,t);if(t.choiceButtonPartType||t.choices){const r=e.choices.map(n=>{const s=xc(e.choiceButtonPartType);return"part"in s&&(s.part="choice-button"),s.textContent=n,s});Object.freeze(r),Object.assign(i,{choiceButtons:r})}return i}get[ne](){const e=super[ne],t=e.content.querySelector("slot:not([name])");return t&&t.replaceWith(ke.html`
        <div id="alertDialogContent">
          <slot></slot>
          <div id="choiceButtonContainer" part="choice-button-container"></div>
        </div>
      `),e}}const Nc=document.createElement("div");Nc.attachShadow({mode:"open",delegatesFocus:!0});const mp=Nc.shadowRoot.delegatesFocus;function Fn(o){if("selectedText"in o)return o.selectedText;if("value"in o&&"options"in o){const e=o.value,t=o.options.find(i=>i.value===e);return t?t.innerText:""}return"value"in o?o.value:o.innerText}function zn(o,e){const{ariaLabel:t,ariaLabelledby:i}=e,r=o.isConnected?o.getRootNode():null;let n=null;if(i&&r)n=i.split(" ").map(p=>{const c=r.getElementById(p);return c?c===o&&e.value!==null?e.selectedText:Fn(c):""}).join(" ");else if(t)n=t;else if(r){const s=o.id;if(s){const p=r.querySelector(`[for="${s}"]`);p instanceof HTMLElement&&(n=Fn(p))}if(n===null){const p=o.closest("label");p&&(n=Fn(p))}}return n&&(n=n.trim()),n}let Ko=!1;const Zi=Symbol("focusVisibleChangedListener");function Pc(o){return class extends o{constructor(){super(),this.addEventListener("focusout",e=>{Promise.resolve().then(()=>{const t=e.relatedTarget||document.activeElement,i=this===t,r=ko(this,t);!i&&!r&&(this[W]({focusVisible:!1}),document.removeEventListener("focusvisiblechange",this[Zi]),this[Zi]=null)})}),this.addEventListener("focusin",()=>{Promise.resolve().then(()=>{this[C].focusVisible!==Ko&&this[W]({focusVisible:Ko}),this[Zi]||(this[Zi]=()=>{this[W]({focusVisible:Ko})},document.addEventListener("focusvisiblechange",this[Zi]))})})}get[H](){return Object.assign(super[H]||{},{focusVisible:!1})}[Q](e){if(super[Q]&&super[Q](e),e.focusVisible){const{focusVisible:t}=this[C];this.toggleAttribute("focus-visible",t)}}get[ne](){const e=super[ne]||Lt.html``;return e.content.append(ke.html`
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
      `),e}}}function Ra(o){if(Ko!==o){Ko=o;const e=new CustomEvent("focus-visible-changed",{detail:{focusVisible:Ko}});document.dispatchEvent(e);const t=new CustomEvent("focusvisiblechange",{detail:{focusVisible:Ko}});document.dispatchEvent(t)}}function Gs(o){return class extends o{get[Bs](){return!0}focus(e){const t=this[As];t&&t.focus(e)}get[As](){return cn(this[Ye])}}}window.addEventListener("keydown",()=>{Ra(!0)},{capture:!0}),window.addEventListener("mousedown",()=>{Ra(!1)},{capture:!0});const La=Symbol("extends"),Bn=Symbol("delegatedPropertySetters"),vp={a:!0,area:!0,button:!0,details:!0,iframe:!0,input:!0,select:!0,textarea:!0},gp={address:["scroll"],blockquote:["scroll"],caption:["scroll"],center:["scroll"],dd:["scroll"],dir:["scroll"],div:["scroll"],dl:["scroll"],dt:["scroll"],fieldset:["scroll"],form:["reset","scroll"],frame:["load"],h1:["scroll"],h2:["scroll"],h3:["scroll"],h4:["scroll"],h5:["scroll"],h6:["scroll"],iframe:["load"],img:["abort","error","load"],input:["abort","change","error","select","load"],li:["scroll"],link:["load"],menu:["scroll"],object:["error","scroll"],ol:["scroll"],p:["scroll"],script:["error","load"],select:["change","scroll"],tbody:["scroll"],tfoot:["scroll"],thead:["scroll"],textarea:["change","select","scroll"]},bp=["click","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","wheel"],yp={abort:!0,change:!0,reset:!0},xp=["address","article","aside","blockquote","canvas","dd","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","section","table","tfoot","ul","video"],ja=["accept-charset","autoplay","buffered","challenge","codebase","colspan","contenteditable","controls","crossorigin","datetime","dirname","for","formaction","http-equiv","icon","ismap","itemprop","keytype","language","loop","manifest","maxlength","minlength","muted","novalidate","preload","radiogroup","readonly","referrerpolicy","rowspan","scoped","usemap"],wp=Gs(so);class Qs extends wp{constructor(){super();const e=this;!this[Vo]&&e.attachInternals&&(this[Vo]=e.attachInternals())}attributeChangedCallback(e,t,i){if(ja.indexOf(e)>=0){const r=Object.assign({},this[C].innerAttributes,{[e]:i});this[W]({innerAttributes:r})}else super.attributeChangedCallback(e,t,i)}blur(){this.inner.blur()}get[H](){return Object.assign(super[H],{innerAttributes:{}})}get[un](){return vp[this.extends]?0:-1}get extends(){return this.constructor[La]}get inner(){const e=this[re]&&this[re].inner;return e||console.warn("Attempted to get an inner standard element before it was instantiated."),e}static get observedAttributes(){return[...super.observedAttributes,...ja]}[Q](e){super[Q](e);const t=this.inner;if(this[Fe]&&((gp[this.extends]||[]).forEach(i=>{t.addEventListener(i,()=>{const r=new Event(i,{bubbles:yp[i]||!1});this.dispatchEvent(r)})}),"disabled"in t&&bp.forEach(i=>{this.addEventListener(i,r=>{t.disabled&&r.stopImmediatePropagation()})})),e.tabIndex&&(t.tabIndex=this[C].tabIndex),e.innerAttributes){const{innerAttributes:i}=this[C];for(const r in i)Ep(t,r,i[r])}this.constructor[Bn].forEach(i=>{if(e[i]){const r=this[C][i];(i==="selectionEnd"||i==="selectionStart")&&r===null||(t[i]=r)}})}[Y](e){if(super[Y](e),e.disabled){const{disabled:t}=this[C];t!==void 0&&Er(this,"disabled",t)}}get[ne](){const e=xp.includes(this.extends)?"block":"inline-block",t=this.extends;return Lt.html`
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
    `}static wrap(e){class t extends Qs{}t[La]=e;const i=document.createElement(e);return function(r,n){const s=Object.getOwnPropertyNames(n);r[Bn]=[],s.forEach(p=>{const c=Object.getOwnPropertyDescriptor(n,p);if(!c)return;const d=function(u,a){if(typeof a.value=="function"){if(u!=="constructor")return function(l,h){const f=function(...m){this.inner[l](...m)};return{configurable:h.configurable,enumerable:h.enumerable,value:f,writable:h.writable}}(u,a)}else if(typeof a.get=="function"||typeof a.set=="function")return function(l,h){const f={configurable:h.configurable,enumerable:h.enumerable};return h.get&&(f.get=function(){return function(m,g){return m[C][g]||m[Ye]&&m.inner[g]}(this,l)}),h.set&&(f.set=function(m){(function(g,v,y){g[C][v]!==y&&g[W]({[v]:y})})(this,l,m)}),h.writable&&(f.writable=h.writable),f}(u,a);return null}(p,c);d&&(Object.defineProperty(r.prototype,p,d),d.set&&r[Bn].push(p))})}(t,Object.getPrototypeOf(i)),t}}function Ep(o,e,t){bc[e]?typeof t=="string"?o.setAttribute(e,""):t===null&&o.removeAttribute(e):t!=null?o.setAttribute(e,t.toString()):o.removeAttribute(e)}const Ap=function(o){return class extends o{get[H](){return Object.assign(super[H]||{},{composeFocus:!mp})}[Q](e){super[Q]&&super[Q](e),this[Fe]&&this.addEventListener("mousedown",t=>{if(this[C].composeFocus&&t.button===0&&t.target instanceof Element){const i=function(r){for(const n of gc(r)){const s=n[pc]||n,p=s;if(s instanceof HTMLElement&&s.tabIndex>=0&&!p.disabled&&!(s instanceof HTMLSlotElement))return s}return null}(t.target);i&&(i.focus(),t.preventDefault())}})}}}(function(o){return class extends o{get ariaLabel(){return this[C].ariaLabel}set ariaLabel(e){this[C].removingAriaAttribute||this[W]({ariaLabel:String(e)})}get ariaLabelledby(){return this[C].ariaLabelledby}set ariaLabelledby(e){this[C].removingAriaAttribute||this[W]({ariaLabelledby:String(e)})}get[H](){return Object.assign(super[H]||{},{ariaLabel:null,ariaLabelledby:null,inputLabel:null,removingAriaAttribute:!1})}[Q](e){if(super[Q]&&super[Q](e),this[Fe]&&this.addEventListener("focus",()=>{this[ee]=!0;const t=zn(this,this[C]);this[W]({inputLabel:t}),this[ee]=!1}),e.inputLabel){const{inputLabel:t}=this[C];t?this[Zo].setAttribute("aria-label",t):this[Zo].removeAttribute("aria-label")}}[Y](e){super[Y]&&super[Y](e),this[Fe]&&(window.requestIdleCallback||setTimeout)(()=>{const r=zn(this,this[C]);this[W]({inputLabel:r})});const{ariaLabel:t,ariaLabelledby:i}=this[C];e.ariaLabel&&!this[C].removingAriaAttribute&&this.getAttribute("aria-label")&&(this.setAttribute("delegated-label",t),this[W]({removingAriaAttribute:!0}),this.removeAttribute("aria-label")),e.ariaLabelledby&&!this[C].removingAriaAttribute&&this.getAttribute("aria-labelledby")&&(this.setAttribute("delegated-labelledby",i),this[W]({removingAriaAttribute:!0}),this.removeAttribute("aria-labelledby")),e.removingAriaAttribute&&this[C].removingAriaAttribute&&this[W]({removingAriaAttribute:!1})}[ge](e,t){const i=super[ge]?super[ge](e,t):{};if(t.ariaLabel&&e.ariaLabel||t.selectedText&&e.ariaLabelledby&&this.matches(":focus-within")){const r=zn(this,e);Object.assign(i,{inputLabel:r})}return i}}}(Pc(Qs.wrap("button"))));class _p extends Ap{get[H](){return Object.assign(super[H],{role:"button"})}get[Zo](){return this[re].inner}[ji](){const e=new MouseEvent("click",{bubbles:!0,cancelable:!0});this.dispatchEvent(e)}get[ne](){const e=super[ne];return e.content.append(ke.html`
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
      `),e}}class Op extends function(e){return class extends e{get[ne](){const t=super[ne];return t.content.append(ke.html`
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
      `),t}}}(_p){}class Cc extends Op{get[ne](){const e=super[ne];return e.content.append(ke.html`
        <style>
          [part~="button"] {
            background: #eee;
            border: 1px solid #ccc;
            padding: 0.25em 0.5em;
          }
        </style>
      `),e}}class qp extends _c{get[ne](){const e=super[ne];return e.content.append(ke.html`
        <style>
          :host {
            background: rgba(0, 0, 0, 0.2);
          }
        </style>
      `),e}}class Ws extends qc{get[ne](){const e=super[ne];return e.content.append(ke.html`
        <style>
          :host {
            background: white;
            border: 1px solid rgba(0, 0, 0, 0.2);
            box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
            box-sizing: border-box;
          }
        </style>
      `),e}}function Tc(o){return class extends o{get[H](){return Object.assign(super[H]||{},{backdropPartType:qp,framePartType:Ws})}}}class Sp extends Tc(fp){get[H](){return Object.assign(super[H],{choiceButtonPartType:Cc})}get[ne](){const e=super[ne];return e.content.append(ke.html`
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
      `),e}}customElements.define("elix-alert-dialog",class extends Sp{});class Ip extends Tc(kc){}customElements.define("elix-dialog",class extends Ip{});const kp={a:"link",article:"region",button:"button",h1:"sectionhead",h2:"sectionhead",h3:"sectionhead",h4:"sectionhead",h5:"sectionhead",h6:"sectionhead",hr:"sectionhead",iframe:"region",link:"link",menu:"menu",ol:"list",option:"option",output:"liveregion",progress:"progressbar",select:"select",table:"table",td:"td",textarea:"textbox",th:"th",ul:"list"};function Ma(o){const e=o[Ye],t=e&&e.querySelector("slot:not([name])");return t&&t.parentNode instanceof Element&&function(i){for(const r of gc(i))if(r instanceof HTMLElement&&Np(r))return r;return null}(t.parentNode)||o}function Np(o){const e=getComputedStyle(o),t=e.overflowX,i=e.overflowY;return t==="scroll"||t==="auto"||i==="scroll"||i==="auto"}function Xr(o,e,t){const i=o[Xo](o[C],{direction:t,index:e});if(i<0)return!1;const r=o[C].currentIndex!==i;return r&&o[W]({currentIndex:i}),r}const Pp=["applet","basefont","embed","font","frame","frameset","isindex","keygen","link","multicol","nextid","noscript","object","param","script","style","template","noembed"];function $a(o,e,t){const i=o[C].items,r=t?0:i.length-1,n=t?i.length:0,s=t?1:-1;let p,c,d=null;const{availableItemFlags:u}=o[C];for(p=r;p!==n;p+=s)if((!u||u[p])&&(c=i[p].getBoundingClientRect(),c.top<=e&&e<=c.bottom)){d=i[p];break}if(!d||!c)return null;const a=getComputedStyle(d),l=a.paddingTop?parseFloat(a.paddingTop):0,h=a.paddingBottom?parseFloat(a.paddingBottom):0,f=c.top+l,m=f+d.clientHeight-l-h;return t&&f<=e||!t&&m>=e?p:p-s}function Ua(o,e){const t=o[C].items,i=o[C].currentIndex,r=o[ht].getBoundingClientRect(),n=$a(o,e?r.bottom:r.top,e);let s;if(n&&i===n){const c=t[i].getBoundingClientRect(),d=o[ht].clientHeight;s=$a(o,e?c.bottom+d:c.top-d,e)}else s=n;if(!s){const c=e?t.length-1:0;s=o[Xo]?o[Xo](o[C],{direction:e?-1:1,index:c}):c}const p=s!==i;if(p){const c=o[ee];o[ee]=!0,o[W]({currentIndex:s}),o[ee]=c}return p}const Qt=Symbol("typedPrefix"),rn=Symbol("prefixTimeout");function Dc(o){const e=o;e[rn]&&(clearTimeout(e[rn]),e[rn]=!1)}function Os(o){o[Qt]="",Dc(o)}function Fa(o){Dc(o),o[rn]=setTimeout(()=>{Os(o)},1e3)}function Xs(o){return class extends o{connectedCallback(){const e=getComputedStyle(this).direction==="rtl";this[W]({rightToLeft:e}),super.connectedCallback()}}}function Cp(o){return class extends o{get[H](){return Object.assign(super[H]||{},{items:null})}[ge](e,t){const i=super[ge]?super[ge](e,t):{};if(t.content){const r=e.content,n=r?Array.prototype.filter.call(r,s=>{return(p=s)instanceof Element&&(!p.localName||Pp.indexOf(p.localName)<0);var p}):null;n&&Object.freeze(n),Object.assign(i,{items:n})}return i}}}const Tp=function(o){return class extends o{get[H](){const e=super[H];return Object.assign(e,{itemRole:e.itemRole||"menuitem",role:e.role||"menu"})}get itemRole(){return this[C].itemRole}set itemRole(e){this[W]({itemRole:e})}[Q](e){super[Q]&&super[Q](e);const t=this[C].items;if((e.items||e.itemRole)&&t){const{itemRole:i}=this[C];t.forEach(r=>{i===kp[r.localName]?r.removeAttribute("role"):r.setAttribute("role",i)})}if(e.role){const{role:i}=this[C];this.setAttribute("role",i)}}get role(){return super.role}set role(e){super.role=e,this[Qi]||this[W]({role:e})}}}(function(o){return class extends o{attributeChangedCallback(e,t,i){if(e==="current-index")this.currentIndex=Number(i);else if(e==="current-item-required"){const r=wr(e,i);this.currentItemRequired!==r&&(this.currentItemRequired=r)}else if(e==="cursor-operations-wrap"){const r=wr(e,i);this.cursorOperationsWrap!==r&&(this.cursorOperationsWrap=r)}else super.attributeChangedCallback(e,t,i)}get currentIndex(){const{items:e,currentIndex:t}=this[C];return e&&e.length>0?t:-1}set currentIndex(e){isNaN(e)||this[W]({currentIndex:e})}get currentItem(){const{items:e,currentIndex:t}=this[C];return e&&e[t]}set currentItem(e){const{items:t}=this[C];if(!t)return;const i=t.indexOf(e);this[W]({currentIndex:i})}get currentItemRequired(){return this[C].currentItemRequired}set currentItemRequired(e){this[W]({currentItemRequired:e})}get cursorOperationsWrap(){return this[C].cursorOperationsWrap}set cursorOperationsWrap(e){this[W]({cursorOperationsWrap:e})}goFirst(){return super.goFirst&&super.goFirst(),this[xi]()}goLast(){return super.goLast&&super.goLast(),this[wi]()}goNext(){return super.goNext&&super.goNext(),this[ho]()}goPrevious(){return super.goPrevious&&super.goPrevious(),this[fo]()}[Y](e){if(super[Y]&&super[Y](e),e.currentIndex&&this[ee]){const{currentIndex:t}=this[C],i=new CustomEvent("current-index-changed",{bubbles:!0,detail:{currentIndex:t}});this.dispatchEvent(i);const r=new CustomEvent("currentindexchange",{bubbles:!0,detail:{currentIndex:t}});this.dispatchEvent(r)}}}}(function(o){return class extends o{[Y](e){super[Y]&&super[Y](e),e.currentItem&&this.scrollCurrentItemIntoView()}scrollCurrentItemIntoView(){super.scrollCurrentItemIntoView&&super.scrollCurrentItemIntoView();const{currentItem:e,items:t}=this[C];if(!e||!t)return;const i=this[ht].getBoundingClientRect(),r=e.getBoundingClientRect(),n=r.bottom-i.bottom,s=r.left-i.left,p=r.right-i.right,c=r.top-i.top,d=this[C].orientation||"both";d!=="horizontal"&&d!=="both"||(p>0?this[ht].scrollLeft+=p:s<0&&(this[ht].scrollLeft+=Math.ceil(s))),d!=="vertical"&&d!=="both"||(n>0?this[ht].scrollTop+=n:c<0&&(this[ht].scrollTop+=Math.ceil(c)))}get[ht](){return super[ht]||Ma(this)}}}(Gs(function(o){return class extends o{get[H](){return Object.assign(super[H]||{},{canGoDown:null,canGoLeft:null,canGoRight:null,canGoUp:null})}[uo](){return super[uo]&&super[uo](),this[ho]()}[Kt](){return super[Kt]&&super[Kt](),this[wi]()}[po](){return super[po]&&super[po](),this[C]&&this[C].rightToLeft?this[ho]():this[fo]()}[mo](){return super[mo]&&super[mo](),this[C]&&this[C].rightToLeft?this[fo]():this[ho]()}[Gt](){return super[Gt]&&super[Gt](),this[xi]()}[vo](){return super[vo]&&super[vo](),this[fo]()}[ge](e,t){const i=super[ge]?super[ge](e,t):{};if(t.canGoNext||t.canGoPrevious||t.languageDirection||t.orientation||t.rightToLeft){const{canGoNext:r,canGoPrevious:n,orientation:s,rightToLeft:p}=e,c=s==="horizontal"||s==="both",d=s==="vertical"||s==="both";Object.assign(i,{canGoDown:d&&r,canGoLeft:!!c&&(p?r:n),canGoRight:!!c&&(p?n:r),canGoUp:d&&n})}return i}}}(function(o){return class extends o{get items(){return this[C]?this[C].items:null}[Y](e){if(super[Y]&&super[Y](e),!this[Fe]&&e.items&&this[ee]){const t=new CustomEvent("items-changed",{bubbles:!0});this.dispatchEvent(t);const i=new CustomEvent("itemschange",{bubbles:!0});this.dispatchEvent(i)}}}}(function(o){return class extends o{[Xo](e,t={}){const i=t.direction!==void 0?t.direction:1,r=t.index!==void 0?t.index:e.currentIndex,n=t.wrap!==void 0?t.wrap:e.cursorOperationsWrap,{items:s}=e,p=s?s.length:0;if(p===0)return-1;if(n){let c=(r%p+p)%p;const d=((c-i)%p+p)%p;for(;c!==d;){if(!e.availableItemFlags||e.availableItemFlags[c])return c;c=((c+i)%p+p)%p}}else for(let c=r;c>=0&&c<p;c+=i)if(!e.availableItemFlags||e.availableItemFlags[c])return c;return-1}get[H](){return Object.assign(super[H]||{},{currentIndex:-1,desiredCurrentIndex:null,currentItem:null,currentItemRequired:!1,cursorOperationsWrap:!1})}[xi](){return super[xi]&&super[xi](),Xr(this,0,1)}[wi](){return super[wi]&&super[wi](),Xr(this,this[C].items.length-1,-1)}[ho](){super[ho]&&super[ho]();const{currentIndex:e,items:t}=this[C];return Xr(this,e<0&&t?0:e+1,1)}[fo](){super[fo]&&super[fo]();const{currentIndex:e,items:t}=this[C];return Xr(this,e<0&&t?t.length-1:e-1,-1)}[ge](e,t){const i=super[ge]?super[ge](e,t):{};if(t.availableItemFlags||t.items||t.currentIndex||t.currentItemRequired){const{currentIndex:r,desiredCurrentIndex:n,currentItem:s,currentItemRequired:p,items:c}=e,d=c?c.length:0;let u,a=n;if(t.items&&!t.currentIndex&&s&&d>0&&c[r]!==s){const h=c.indexOf(s);h>=0&&(a=h)}else t.currentIndex&&(r<0&&s!==null||r>=0&&(d===0||c[r]!==s)||n===null)&&(a=r);p&&a<0&&(a=0),a<0?(a=-1,u=-1):d===0?u=-1:(u=Math.max(Math.min(d-1,a),0),u=this[Xo](e,{direction:1,index:u,wrap:!1}),u<0&&(u=this[Xo](e,{direction:-1,index:u-1,wrap:!1})));const l=c&&c[u]||null;Object.assign(i,{currentIndex:u,desiredCurrentIndex:a,currentItem:l})}return i}}}(function(o){return class extends o{get[H](){return Object.assign(super[H]||{},{texts:null})}[lr](e){return super[lr]?super[lr](e):(t=e).getAttribute("aria-label")||t.getAttribute("alt")||t.innerText||t.textContent||"";var t}[ge](e,t){const i=super[ge]?super[ge](e,t):{};if(t.items){const{items:r}=e,n=function(s,p){return s?Array.from(s,c=>p(c)):null}(r,this[lr]);n&&(Object.freeze(n),Object.assign(i,{texts:n}))}return i}}}(function(o){return class extends o{[uo](){if(super[uo])return super[uo]()}[Kt](){if(super[Kt])return super[Kt]()}[po](){if(super[po])return super[po]()}[mo](){if(super[mo])return super[mo]()}[Gt](){if(super[Gt])return super[Gt]()}[vo](){if(super[vo])return super[vo]()}[xe](e){let t=!1;if(e.target===this){const i=this[C].orientation||"both",r=i==="horizontal"||i==="both",n=i==="vertical"||i==="both";switch(e.key){case"ArrowDown":n&&(t=e.altKey?this[Kt]():this[uo]());break;case"ArrowLeft":!r||e.metaKey||e.altKey||(t=this[po]());break;case"ArrowRight":!r||e.metaKey||e.altKey||(t=this[mo]());break;case"ArrowUp":n&&(t=e.altKey?this[Gt]():this[vo]());break;case"End":t=this[Kt]();break;case"Home":t=this[Gt]()}}return t||super[xe]&&super[xe](e)||!1}}}(wn(function(o){return class extends o{[xe](e){let t=!1;if(this.orientation!=="horizontal")switch(e.key){case"PageDown":t=this.pageDown();break;case"PageUp":t=this.pageUp()}return t||super[xe]&&super[xe](e)}get orientation(){return super.orientation||this[C]&&this[C].orientation||"both"}pageDown(){return super.pageDown&&super.pageDown(),Ua(this,!0)}pageUp(){return super.pageUp&&super.pageUp(),Ua(this,!1)}get[ht](){return super[ht]||Ma(this)}}}(function(o){return class extends o{constructor(){super(),Os(this)}[Ei](e){if(super[Ei]&&super[Ei](e),e==null||e.length===0)return!1;const t=e.toLowerCase(),i=this[C].texts.findIndex(r=>r.substr(0,e.length).toLowerCase()===t);if(i>=0){const r=this[C].currentIndex;return this[W]({currentIndex:i}),this[C].currentIndex!==r}return!1}[xe](e){let t;switch(e.key){case"Backspace":(function(i){const r=i,n=r[Qt]?r[Qt].length:0;n>0&&(r[Qt]=r[Qt].substr(0,n-1)),i[Ei](r[Qt]),Fa(i)})(this),t=!0;break;case"Escape":Os(this);break;default:e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||function(i,r){const n=i,s=n[Qt]||"";n[Qt]=s+r,i[Ei](n[Qt]),Fa(i)}(this,e.key)}return t||super[xe]&&super[xe](e)}}}(Xs(function(o){return Cp(Sc(o))}(function(o){return class extends o{constructor(){super(),this.addEventListener("mousedown",e=>{e.button===0&&(this[ee]=!0,this[ji](e),this[ee]=!1)})}[Q](e){super[Q]&&super[Q](e),this[Fe]&&Object.assign(this.style,{touchAction:"manipulation",mozUserSelect:"none",msUserSelect:"none",webkitUserSelect:"none",userSelect:"none"})}[ji](e){const t=e.composedPath?e.composedPath()[0]:e.target,{items:i,currentItemRequired:r}=this[C];if(i&&t instanceof Node){const n=mc(i,t),s=n>=0?i[n]:null;(s&&!s.disabled||!s&&!r)&&(this[W]({currentIndex:n}),e.stopPropagation())}}}}(so)))))))))))))));class Rc extends Tp{get[H](){return Object.assign(super[H],{availableItemFlags:null,highlightCurrentItem:!0,orientation:"vertical",currentItemFocused:!1})}async flashCurrentItem(){const e=this[C].focusVisible,t=matchMedia("(pointer: fine)").matches;(e||t)&&(this[W]({highlightCurrentItem:!1}),await new Promise(r=>setTimeout(r,75)),this[W]({highlightCurrentItem:!0}),await new Promise(r=>setTimeout(r,75)))}[Q](e){super[Q](e),this[Fe]&&(this.addEventListener("disabledchange",r=>{this[ee]=!0;const n=r.target,{items:s}=this[C],p=s===null?-1:s.indexOf(n);if(p>=0){const c=this[C].availableItemFlags.slice();c[p]=!n.disabled,this[W]({availableItemFlags:c})}this[ee]=!1}),"PointerEvent"in window?this.addEventListener("pointerdown",r=>this[ji](r)):this.addEventListener("touchstart",r=>this[ji](r)),this.removeAttribute("tabindex"));const{currentIndex:t,items:i}=this[C];if((e.items||e.currentIndex||e.highlightCurrentItem)&&i){const{highlightCurrentItem:r}=this[C];i.forEach((n,s)=>{n.toggleAttribute("current",r&&s===t)})}(e.items||e.currentIndex||e.currentItemFocused||e.focusVisible)&&i&&i.forEach((r,n)=>{const s=n===t,p=t<0&&n===0;this[C].currentItemFocused?s||p||r.removeAttribute("tabindex"):(s||p)&&(r.tabIndex=0)})}[Y](e){if(super[Y](e),!this[Fe]&&e.currentIndex&&!this[C].currentItemFocused){const{currentItem:t}=this[C];(t instanceof HTMLElement?t:this).focus(),this[W]({currentItemFocused:!0})}}get[ht](){return this[re].content}[ge](e,t){const i=super[ge](e,t);if(t.currentIndex&&Object.assign(i,{currentItemFocused:!1}),t.items){const{items:r}=e,n=r===null?null:r.map(s=>!s.disabled);Object.assign(i,{availableItemFlags:n})}return i}get[ne](){return Lt.html`
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
    `}}const pi=Symbol("documentMouseupListener");async function Dp(o){const e=this,t=e[Ye].elementsFromPoint(o.clientX,o.clientY);if(e.opened){const i=t.indexOf(e[re].source)>=0,r=e[re].popup,n=t.indexOf(r)>=0,s=r.frame&&t.indexOf(r.frame)>=0;i?e[C].dragSelect&&(e[ee]=!0,e[W]({dragSelect:!1}),e[ee]=!1):n||s||(e[ee]=!0,await e.close(),e[ee]=!1)}}function Hn(o){o[C].opened&&o.isConnected?o[pi]||(o[pi]=Dp.bind(o),document.addEventListener("mouseup",o[pi])):o[pi]&&(document.removeEventListener("mouseup",o[pi]),o[pi]=null)}function Zs(o){return class extends o{get[H](){return Object.assign(super[H]||{},{disabled:!1})}get disabled(){return this[C].disabled}set disabled(e){this[W]({disabled:e})}[Y](e){if(super[Y]&&super[Y](e),e.disabled&&(this.toggleAttribute("disabled",this.disabled),this[ee])){const t=new CustomEvent("disabled-changed",{bubbles:!0});this.dispatchEvent(t);const i=new CustomEvent("disabledchange",{bubbles:!0});this.dispatchEvent(i)}}}}function za(o,e,t,i){const r=Lc(o,t,i);let n=0,s=0;const p=t==="above"||t==="below";switch(t){case"above":n=r.y-e.top;break;case"below":n=e.bottom-r.y;break;case"left":s=r.x-e.left;break;case"right":s=e.right-r.x}switch(i){case"bottom":n=r.y-e.top;break;case"center":p?s=e.width:n=e.height;break;case"stretch":p?s=o.width:n=o.height;break;case"left":s=e.right-r.x;break;case"right":s=r.x-e.left;break;case"top":n=e.bottom-r.y}return n=Math.max(0,n),s=Math.max(0,s),{height:n,width:s}}function Lc(o,e,t){let i=0,r=0;const n=e==="above"||e==="below";switch(e){case"above":r=o.top;break;case"below":r=o.bottom;break;case"left":case"right":i=o[e]}switch(t){case"bottom":case"top":r=o[t];break;case"left":case"right":i=o[t];break;case"center":n?i=o.left+o.width/2:r=o.top+o.height/2;break;case"stretch":n?i=o.left:r=o.top}return{x:i,y:r}}function Rp(o,e,t,i){const r=function(p){const{align:c,direction:d,rightToLeft:u}=p,a="below",l={above:"above",below:"below",column:"below","column-reverse":"above",left:"left",right:"right",row:u?"left":"right","row-reverse":u?"right":"left"}[d]||a,h={above:"horizontal",below:"horizontal",left:"vertical",right:"vertical"}[l],f={horizontal:"left",vertical:"top"}[h];return{align:{horizontal:{center:"center",end:u?"left":"right",left:"left",right:"right",start:u?"right":"left",stretch:"stretch"},vertical:{bottom:"bottom",center:"center",end:"bottom",start:"top",stretch:"stretch",top:"top"}}[h][c]||f,direction:l,rightToLeft:u}}(i),n=function(p,c){const d={above:"below",below:"above",left:"right",right:"left"},u={top:"bottom",bottom:"top",left:"right",right:"left"},a=[{align:c,direction:p}];return c==="center"||c==="stretch"?a.push({align:c,direction:d[p]}):(a.push({align:u[c],direction:p}),a.push({align:c,direction:d[p]}),a.push({align:u[c],direction:d[p]})),a}(r.direction,r.align);n.sort((p,c)=>function(d,u,a,l,h){const f=za(a,h,d.direction,d.align),m=za(a,h,u.direction,u.align),g=l.width<=f.width,v=l.height<=f.height,y=g||v,b=g&&v,x=l.width<=m.width,w=l.height<=m.height,E=x||w,S=x&&w,k=f.width*f.height,N=m.width*m.height;return b&&S?0:b?-1:S?1:y&&!E?-1:E&&!y?1:y&&k>N?-1:E&&N>k?1:k>N?-1:N>k?1:0}(p,c,o,e,t));const s=n[0];return s.rect=function(p,c,d,u,a){const l=Lc(p,u,a);let{x:h,y:f,bottom:m,right:g}=d,v=0,y=0,b=c.height,x=c.width;const w=u==="above"||u==="below";switch(u){case"above":y=l.y-c.height,m=l.y;break;case"below":y=l.y,f=l.y;break;case"left":v=l.x-c.width,g=l.x;break;case"right":v=l.x,h=l.x}switch(a){case"bottom":y=l.y-c.height,m=l.y;break;case"left":v=l.x,h=l.x;break;case"center":w?v=l.x-c.width/2:y=l.y-c.height/2;break;case"right":v=l.x-c.width,g=l.x;break;case"stretch":w?(v=l.x,x=p.width):(y=l.y,b=p.height);break;case"top":y=l.y,f=l.y}return v=Math.max(v,h),y=Math.max(y,f),x=Math.min(x,g-v),b=Math.min(b,m-y),new DOMRect(v,y,x,b)}(o,e,t,s.direction,s.align),s}const zt=Symbol("implicitCloseListener");async function Lp(o){const e=this,t=o.relatedTarget||document.activeElement;t instanceof Element&&!ko(e,t)&&(e[ee]=!0,await e.close({canceled:"window blur"}),e[ee]=!1)}async function jp(o){const e=this,t=o.type!=="resize"||e[C].closeOnWindowResize;!vc(e,o)&&t&&(e[ee]=!0,await e.close({canceled:`window ${o.type}`}),e[ee]=!1)}const Mp=wn(function(o){return class extends o{get closeOnWindowResize(){return this[C].closeOnWindowResize}set closeOnWindowResize(e){this[W]({closeOnWindowResize:e})}get[H](){return Object.assign(super[H]||{},{closeOnWindowResize:!0,role:"alert"})}[xe](e){let t=!1;return e.key==="Escape"&&(this.close({canceled:"Escape"}),t=!0),t||super.keydown&&super.keydown(e)||!1}[Q](e){if(super[Q]&&super[Q](e),this[Fe]&&this.addEventListener("blur",Lp.bind(this)),e.role){const{role:t}=this[C];this.setAttribute("role",t)}}[Y](e){super[Y]&&super[Y](e),e.opened&&(this.opened?("requestIdleCallback"in window?window.requestIdleCallback:setTimeout)(()=>{var i;this.opened&&((i=this)[zt]=jp.bind(i),window.addEventListener("blur",i[zt]),window.addEventListener("resize",i[zt]),window.addEventListener("scroll",i[zt]))}):(t=this)[zt]&&(window.removeEventListener("blur",t[zt]),window.removeEventListener("resize",t[zt]),window.removeEventListener("scroll",t[zt]),t[zt]=null));var t}get role(){return super.role}set role(e){super.role=e,this[Qi]||this[W]({role:e})}}}(Ic));class Ys extends Mp{[Q](e){super[Q](e),e.backdropPartType&&(this[re].backdrop.addEventListener("mousedown",Ba.bind(this)),"PointerEvent"in window||this[re].backdrop.addEventListener("touchend",Ba))}}async function Ba(o){const e=this;e[ee]=!0,await e.close({canceled:"mousedown outside"}),e[ee]=!1,o.preventDefault(),o.stopPropagation()}const Yi=Symbol("resizeListener"),$p=Zs(Pc(Xs(Oc(so))));function Vn(o){const{popupAlign:e,popupDirection:t,rightToLeft:i}=o[C],r=Rp(o[re].source.getBoundingClientRect(),o[re].popup.getBoundingClientRect(),jc(),{align:e,direction:t,rightToLeft:i});o[W]({popupLayout:r})}function Ha(o,e,t){if(!t||t.popupPartType){const{popupPartType:i}=e,r=o.getElementById("popup");r&&Li(r,i)}if(!t||t.sourcePartType){const{sourcePartType:i}=e,r=o.getElementById("source");r&&Li(r,i)}}function jc(){const o=window.visualViewport;return o?new DOMRect(o.offsetLeft,o.offsetTop,o.width,o.height):new DOMRect(0,0,window.innerWidth,window.innerHeight)}const Up=Gs(wn(function(o){return class extends o{connectedCallback(){super.connectedCallback(),Hn(this)}get[H](){return Object.assign(super[H]||{},{dragSelect:!0})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),Hn(this)}[Y](e){super[Y](e),e.opened&&Hn(this)}[ge](e,t){const i=super[ge](e,t);return t.opened&&e.opened&&Object.assign(i,{dragSelect:!0}),i}}}(class extends $p{get[H](){return Object.assign(super[H],{ariaHasPopup:"true",popupAlign:"start",popupDirection:"column",popupLayout:null,popupPartType:Ys,sourcePartType:"div"})}get[Zo](){return this[re].source}get frame(){return this[re].popup.frame}get horizontalAlign(){return this[C].popupAlign}set horizontalAlign(o){console.warn('The "horizontalAlign" property has been renamed to "popupAlign"; the "horizontal-align" attribute is now "popup-align".'),this[W]({popupAlign:o})}get popupAlign(){return this[C].popupAlign}set popupAlign(o){this[W]({popupAlign:o})}get popupDirection(){return this[C].popupDirection}set popupDirection(o){this[W]({popupDirection:o})}get popupPosition(){return this[C].popupPosition}set popupPosition(o){console.warn('The "popupPosition" property has been renamed to "popupDirection"; the "popup-position" attribute is now "popup-direction".'),this[W]({popupPosition:o})}get popupPartType(){return this[C].popupPartType}set popupPartType(o){this[W]({popupPartType:o})}[Q](o){if(super[Q](o),Ha(this[Ye],this[C],o),this[Fe]||o.ariaHasPopup){const{ariaHasPopup:e}=this[C];e===null?this[Zo].removeAttribute("aria-haspopup"):this[Zo].setAttribute("aria-haspopup",this[C].ariaHasPopup)}if(o.popupPartType&&(this[re].popup.addEventListener("open",()=>{this.opened||(this[ee]=!0,this.open(),this[ee]=!1)}),this[re].popup.addEventListener("close",e=>{if(!this.closed){this[ee]=!0;const t=e.detail.closeResult;this.close(t),this[ee]=!1}})),o.opened||o.popupLayout){const{opened:e,popupLayout:t}=this[C];if(e)if(t){const i=this[re].popup,r=function(n){const{align:s,direction:p,rect:c}=n,d=jc(),u={},a=p==="above"||p==="below";switch(p){case"above":u.bottom=d.bottom-c.bottom+"px";break;case"below":u.top=`${c.top}px`;break;case"left":u.right=d.right-c.right+"px";break;case"right":u.left=`${c.left}px`}switch(s){case"bottom":u.bottom=d.bottom-c.bottom+"px";break;case"center":case"stretch":a?(u.left=`${c.left}px`,u.right=d.right-c.right+"px"):(u.bottom=d.bottom-c.bottom+"px",u.top=`${c.top}px`);break;case"left":u.left=`${c.left}px`;break;case"right":u.right=d.right-c.right+"px";break;case"top":u.top=`${c.top}px`}return u}(t);Object.assign(i.style,r,{opacity:""})}else Object.assign(this[re].popup.style,{bottom:"",left:"",opacity:0,right:"",top:""});else Object.assign(this[re].popup.style,{bottom:"",left:"",opacity:"",right:"",top:""})}if(o.opened){const{opened:e}=this[C];this[re].popup.opened=e}if(o.disabled&&"disabled"in this[re].source){const{disabled:e}=this[C];this[re].source.disabled=e}if(o.popupLayout){const{popupLayout:e}=this[C];if(e){const{align:t,direction:i}=e,r=this[re].popup;"position"in r&&(r.position=i),"align"in r&&(r.align=t)}}}[Y](o){super[Y](o);const{opened:e}=this[C];var t;o.opened?e?(t=this,setTimeout(()=>{t[C].opened&&(Vn(t),function(i){const r=i;r[Yi]=()=>{Vn(i)},(window.visualViewport||window).addEventListener("resize",r[Yi])}(t))})):function(i){const r=i;r[Yi]&&((window.visualViewport||window).removeEventListener("resize",r[Yi]),r[Yi]=null)}(this):o.popupLayout&&this[C].opened&&!this[C].popupLayout&&Vn(this)}get sourcePartType(){return this[C].sourcePartType}set sourcePartType(o){this[W]({sourcePartType:o})}[ge](o,e){const t=super[ge](o,e);return(e.opened&&!o.opened||o.opened&&(e.popupAlign||e.popupDirection||e.rightToLeft))&&Object.assign(t,{popupLayout:null}),t}get[ne](){const o=super[ne];return o.content.append(ke.html`
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
    `),Ha(o.content,this[C]),o}})));async function Fp(o){const e=this,t=o.relatedTarget||document.activeElement;t instanceof Element&&!ko(e,t)&&(e[ee]=!0,await e.close({canceled:"blur"}),e[ee]=!1)}const hi=Symbol("documentMousemoveListener");function zp(o){const e=this,{hasHoveredOverItemSinceOpened:t,opened:i}=e[C];if(i){const r=o.composedPath?o.composedPath()[0]:o.target,n=e.items;if(r&&r instanceof Node&&n){const s=mc(n,r),p=n[s],c=p&&!p.disabled?s:-1;(t||c>=0)&&c!==e[C].currentIndex&&(e[ee]=!0,e[W]({currentIndex:c}),c>=0&&!t&&e[W]({hasHoveredOverItemSinceOpened:!0}),e[ee]=!1)}}}function Kn(o){o[C].opened&&o.isConnected?o[hi]||(o[hi]=zp.bind(o),document.addEventListener("mousemove",o[hi])):o[hi]&&(document.removeEventListener("mousemove",o[hi]),o[hi]=null)}async function Va(o){const e=o[ee],t=o[C].currentIndex>=0,i=o.items;if(i){const r=t?i[o[C].currentIndex]:void 0,n=o[C].popupList;t&&"flashCurrentItem"in n&&await n.flashCurrentItem();const s=o[ee];o[ee]=e,await o.close(r),o[ee]=s}}const Bp=function(o){return class extends o{connectedCallback(){super.connectedCallback(),Kn(this)}get[H](){return Object.assign(super[H]||{},{currentIndex:-1,hasHoveredOverItemSinceOpened:!1,popupList:null})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),Kn(this)}[xe](e){let t=!1;return e.key==="Enter"&&this.opened&&(Va(this),t=!0),t||super[xe]&&super[xe](e)||!1}[Q](e){if(super[Q]&&super[Q](e),e.popupList){const{popupList:t}=this[C];t&&(t.addEventListener("mouseup",async i=>{const r=this[C].currentIndex;this[C].dragSelect||r>=0?(i.stopPropagation(),this[ee]=!0,await Va(this),this[ee]=!1):i.stopPropagation()}),t.addEventListener("currentindexchange",i=>{this[ee]=!0;const r=i;this[W]({currentIndex:r.detail.currentIndex}),this[ee]=!1}))}if(e.currentIndex||e.popupList){const{currentIndex:t,popupList:i}=this[C];i&&"currentIndex"in i&&(i.currentIndex=t)}}[Y](e){if(super[Y]&&super[Y](e),e.opened){if(this[C].opened){const{popupList:t}=this[C];t.scrollCurrentItemIntoView&&setTimeout(()=>{t.scrollCurrentItemIntoView()})}Kn(this)}}[ge](e,t){const i=super[ge]?super[ge](e,t):{};return t.opened&&e.opened&&Object.assign(i,{hasHoveredOverItemSinceOpened:!1}),i}}}(class extends Up{get[H](){return Object.assign(super[H],{sourcePartType:"button"})}[xe](o){let e;switch(o.key){case" ":case"ArrowDown":case"ArrowUp":this.closed&&(this.open(),e=!0);break;case"Enter":this.opened||(this.open(),e=!0);break;case"Escape":this.opened&&(this.close({canceled:"Escape"}),e=!0)}if(e=super[xe]&&super[xe](o),!e&&this.opened&&!o.metaKey&&!o.altKey)switch(o.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":case"PageDown":case"PageUp":case" ":e=!0}return e}[Q](o){if(super[Q](o),this[Fe]&&(this.addEventListener("blur",Fp.bind(this)),this[re].source.addEventListener("focus",async e=>{const t=vc(this[re].popup,e),i=this[C].popupHeight!==null;!t&&this.opened&&i&&(this[ee]=!0,await this.close(),this[ee]=!1)})),o.opened){const{opened:e}=this[C];this.toggleAttribute("opened",e)}o.sourcePartType&&this[re].source.addEventListener("mousedown",e=>{if(this.disabled)return void e.preventDefault();const t=e;t.button&&t.button!==0||(setTimeout(()=>{this.opened||(this[ee]=!0,this.open(),this[ee]=!1)}),e.stopPropagation())}),o.popupPartType&&this[re].popup.removeAttribute("tabindex")}get[ne](){const o=super[ne];return o.content.append(ke.html`
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
      `),o}});class Hp extends Bp{get[H](){return Object.assign(super[H],{menuPartType:Rc})}get items(){const e=this[re]&&this[re].menu;return e?e.items:null}get menuPartType(){return this[C].menuPartType}set menuPartType(e){this[W]({menuPartType:e})}[Q](e){if(super[Q](e),Ka(this[Ye],this[C],e),e.menuPartType&&(this[re].menu.addEventListener("blur",async t=>{const i=t.relatedTarget||document.activeElement;this.opened&&!ko(this[re].menu,i)&&(this[ee]=!0,await this.close(),this[ee]=!1)}),this[re].menu.addEventListener("mousedown",t=>{t.button===0&&this.opened&&(t.stopPropagation(),t.preventDefault())})),e.opened){const{opened:t}=this[C];this[re].source.setAttribute("aria-expanded",t.toString())}}[Y](e){super[Y](e),e.menuPartType&&this[W]({popupList:this[re].menu})}[ge](e,t){const i=super[ge](e,t);return t.opened&&!e.opened&&Object.assign(i,{currentIndex:-1}),i}get[ne](){const e=super[ne],t=e.content.querySelector("slot:not([name])");return t&&t.replaceWith(ke.html`
        <div id="menu" part="menu">
          <slot></slot>
        </div>
      `),Ka(e.content,this[C]),e.content.append(ke.html`
      <style>
        [part~="menu"] {
          max-height: 100%;
        }
      </style>
    `),e}}function Ka(o,e,t){if(!t||t.menuPartType){const{menuPartType:i}=e,r=o.getElementById("menu");r&&Li(r,i)}}const Vp=Zs(so);class Mc extends Vp{get[H](){return Object.assign(super[H],{direction:"down"})}get direction(){return this[C].direction}set direction(e){this[W]({direction:e})}[Q](e){if(super[Q](e),e.direction){const{direction:t}=this[C];this[re].downIcon.style.display=t==="down"?"block":"none",this[re].upIcon.style.display=t==="up"?"block":"none"}}get[ne](){return Lt.html`
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
    `}}function Ga(o,e,t){if(!t||t.popupTogglePartType){const{popupTogglePartType:i}=e,r=o.getElementById("popupToggle");r&&Li(r,i)}}class Kp extends Rc{get[ne](){const e=super[ne];return e.content.append(ke.html`
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
      `),e}}class Gp extends Mc{get[ne](){const e=super[ne],t=e.content.getElementById("downIcon"),i=ke.html`
      <svg
        id="downIcon"
        part="toggle-icon down-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 5"
      >
        <path d="M 0 0 l5 5 5 -5 z" />
      </svg>
    `.firstElementChild;t&&i&&xs(t,i);const r=e.content.getElementById("upIcon"),n=ke.html`
      <svg
        id="upIcon"
        part="toggle-icon up-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 5"
      >
        <path d="M 0 5 l5 -5 5 5 z" />
      </svg>
    `.firstElementChild;return r&&n&&xs(r,n),e.content.append(ke.html`
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
      `),e}}class Qp extends Ks{}class Wp extends Ys{get[H](){return Object.assign(super[H],{backdropPartType:Qp,framePartType:Ws})}}class Xp extends function(e){return class extends e{get[H](){return Object.assign(super[H]||{},{popupTogglePartType:Mc})}get popupTogglePartType(){return this[C].popupTogglePartType}set popupTogglePartType(t){this[W]({popupTogglePartType:t})}[Q](t){if(super[Q](t),Ga(this[Ye],this[C],t),t.popupDirection||t.popupTogglePartType){const{popupDirection:i}=this[C],r=i==="above"||i==="column-reverse"?"up":"down",n=this[re].popupToggle;"direction"in n&&(n.direction=r)}if(t.disabled){const{disabled:i}=this[C];this[re].popupToggle.disabled=i}}get[ne](){const t=super[ne],i=t.content.querySelector('[part~="source"]');return i&&i.append(ke.html`
          <div
            id="popupToggle"
            part="popup-toggle"
            exportparts="toggle-icon, down-icon, up-icon"
            tabindex="-1"
          ></div>
      `),Ga(t.content,this[C]),t.content.append(ke.html`
      <style>
        [part~="popup-toggle"] {
          outline: none;
        }

        [part~="source"] {
          align-items: center;
          display: flex;
        }
      </style>
    `),t}}}(Hp){get[H](){return Object.assign(super[H],{menuPartType:Kp,popupPartType:Wp,popupTogglePartType:Gp,sourcePartType:Cc})}get[ne](){const e=super[ne];return e.content.append(ke.html`
        <style>
          [part~="menu"] {
            background: window;
            border: none;
            padding: 0.5em 0;
          }
        </style>
      `),e}}customElements.define("elix-menu-button",class extends Xp{});class Zp extends function(e){return class extends e{constructor(){super();const t=this;!this[Vo]&&t.attachInternals&&(this[Vo]=t.attachInternals())}attributeChangedCallback(t,i,r){if(t==="current"){const n=wr(t,r);this.current!==n&&(this.current=n)}else super.attributeChangedCallback(t,i,r)}get[H](){return Object.assign(super[H]||{},{current:!1})}[Q](t){if(super[Q](t),t.current){const{current:i}=this[C];Er(this,"current",i)}}[Y](t){if(super[Y]&&super[Y](t),t.current){const{current:i}=this[C],r=new CustomEvent("current-changed",{bubbles:!0,detail:{current:i}});this.dispatchEvent(r);const n=new CustomEvent("currentchange",{bubbles:!0,detail:{current:i}});this.dispatchEvent(n)}}get current(){return this[C].current}set current(t){this[W]({current:t})}}}(Zs(function(e){return class extends e{constructor(){super();const t=this;!this[Vo]&&t.attachInternals&&(this[Vo]=t.attachInternals())}get[H](){return Object.assign(super[H]||{},{selected:!1})}[Q](t){if(super[Q](t),t.selected){const{selected:i}=this[C];Er(this,"selected",i)}}[Y](t){if(super[Y]&&super[Y](t),t.selected){const{selected:i}=this[C],r=new CustomEvent("selected-changed",{bubbles:!0,detail:{selected:i}});this.dispatchEvent(r);const n=new CustomEvent("selectedchange",{bubbles:!0,detail:{selected:i}});this.dispatchEvent(n)}}get selected(){return this[C].selected}set selected(t){this[W]({selected:t})}}}(so))){}class Yp extends Zp{get[ne](){return Lt.html`
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
    `}}customElements.define("elix-menu-item",class extends Yp{});class Jp extends so{get disabled(){return!0}[Q](e){super[Q](e),this[Fe]&&this.setAttribute("aria-hidden","true")}}class eh extends Jp{get[ne](){return Lt.html`
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
    `}}customElements.define("elix-menu-separator",class extends eh{});const nn=Symbol("timeout"),th=Xs(function(o){return class extends o{get[Si](){return super[Si]||this}[Q](e){super[Q]&&super[Q](e),this[Fe]&&(this[Si]===this?this:this[Ye]).addEventListener("transitionend",t=>{const i=this[C].effectEndTarget||this[Si];t.target===i&&this[W]({effectPhase:"after"})})}[Y](e){if(super[Y]&&super[Y](e),e.effect||e.effectPhase){const{effect:t,effectPhase:i}=this[C],r=new CustomEvent("effect-phase-changed",{bubbles:!0,detail:{effect:t,effectPhase:i}});this.dispatchEvent(r);const n=new CustomEvent("effectphasechange",{bubbles:!0,detail:{effect:t,effectPhase:i}});this.dispatchEvent(n),t&&(i!=="after"&&this.offsetHeight,i==="before"&&this[W]({effectPhase:"during"}))}}async[Hs](e){await this[W]({effect:e,effectPhase:"before"})}}}(Ys));class oh extends th{constructor(){super(),this.addEventListener("mouseout",()=>{Qa(this)}),this.addEventListener("mouseover",()=>{$c(this)})}attributeChangedCallback(e,t,i){e==="duration"?this.duration=Number(i):super.attributeChangedCallback(e,t,i)}get[H](){return Object.assign(super[H],{duration:null,fromEdge:"bottom"})}get duration(){return this[C].duration}set duration(e){isNaN(e)||this[W]({duration:e})}get[Si](){return this[re].frame}get fromEdge(){return this[C].fromEdge}set fromEdge(e){this[W]({fromEdge:e})}[Q](e){if(super[Q](e),e.fromEdge){const t={bottom:{alignItems:"center",justifyContent:"flex-end"},"bottom-left":{alignItems:"flex-start",justifyContent:"flex-end"},"bottom-right":{alignItems:"flex-end",justifyContent:"flex-end"},top:{alignItems:"center",justifyContent:null},"top-left":{alignItems:"flex-start",justifyContent:null},"top-right":{alignItems:"flex-end",justifyContent:null}};Object.assign(this.style,t[this[C].fromEdge])}if(e.effect||e.effectPhase||e.fromEdge||e.rightToLeft){const{effect:t,effectPhase:i,fromEdge:r,rightToLeft:n}=this[C],s={"bottom-left":"bottom-right","bottom-right":"bottom-left","top-left":"top-right","top-right":"top-left"},p=n&&s[r]||r,c={bottom:"translateY(100%)","bottom-left":"translateX(-100%)","bottom-right":"translateX(100%)",top:"translateY(-100%)","top-left":"translateX(-100%)","top-right":"translateX(100%)"},d={bottom:"translateY(0)","bottom-left":"translateX(0)","bottom-right":"translateX(0)",top:"translateY(0)","top-left":"translateX(0)","top-right":"translateX(0)"},u=t==="open"&&i!=="before"||t==="close"&&i==="before",a=u?1:0,l=u?d[p]:c[p];Object.assign(this[re].frame.style,{opacity:a,transform:l})}}[Y](e){super[Y](e),Qa(this)}}function $c(o){const e=o;e[nn]&&(clearTimeout(e[nn]),e[nn]=null)}function Qa(o){o.opened&&function(e){$c(e);const t=e[C].duration;t!==null&&t>0&&(e[nn]=setTimeout(()=>{e.close()},t))}(o)}class ih extends oh{get[H](){return Object.assign(super[H],{framePartType:Ws})}get[ne](){const e=super[ne];return e.content.append(ke.html`
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
 */var Wa,Ji;function ce(o,e,t,i){var r,n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,i);else for(var p=o.length-1;p>=0;p--)(r=o[p])&&(s=(n<3?r(s):n>3?r(e,t,s):r(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}customElements.define("elix-toast",class extends ih{}),Wa=typeof self!="undefined"?self:void 0,Ji=function(){return function(o){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i,l:!1,exports:{}};return o[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=o,t.c=e,t.d=function(i,r,n){t.o(i,r)||Object.defineProperty(i,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(i){var r=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(r,"a",r),r},t.o=function(i,r){return Object.prototype.hasOwnProperty.call(i,r)},t.p="",t(t.s=109)}([function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=t(17),r=t(18),n=t(19),s=t(45),p=t(46),c=t(47),d=t(48),u=t(49),a=t(12),l=t(32),h=t(33),f=t(31),m=t(1),g={Scope:m.Scope,create:m.create,find:m.find,query:m.query,register:m.register,Container:i.default,Format:r.default,Leaf:n.default,Embed:d.default,Scroll:s.default,Block:c.default,Inline:p.default,Text:u.default,Attributor:{Attribute:a.default,Class:l.default,Style:h.default,Store:f.default}};e.default=g},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,h){l.__proto__=h}||function(l,h){for(var f in h)h.hasOwnProperty(f)&&(l[f]=h[f])},function(l,h){function f(){this.constructor=l}i(l,h),l.prototype=h===null?Object.create(h):(f.prototype=h.prototype,new f)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(l){function h(f){var m=this;return f="[Parchment] "+f,(m=l.call(this,f)||this).message=f,m.name=m.constructor.name,m}return r(h,l),h}(Error);e.ParchmentError=n;var s,p={},c={},d={},u={};function a(l,h){var f;if(h===void 0&&(h=s.ANY),typeof l=="string")f=u[l]||p[l];else if(l instanceof Text||l.nodeType===Node.TEXT_NODE)f=u.text;else if(typeof l=="number")l&s.LEVEL&s.BLOCK?f=u.block:l&s.LEVEL&s.INLINE&&(f=u.inline);else if(l instanceof HTMLElement){var m=(l.getAttribute("class")||"").split(/\s+/);for(var g in m)if(f=c[m[g]])break;f=f||d[l.tagName]}return f==null?null:h&s.LEVEL&f.scope&&h&s.TYPE&f.scope?f:null}e.DATA_KEY="__blot",function(l){l[l.TYPE=3]="TYPE",l[l.LEVEL=12]="LEVEL",l[l.ATTRIBUTE=13]="ATTRIBUTE",l[l.BLOT=14]="BLOT",l[l.INLINE=7]="INLINE",l[l.BLOCK=11]="BLOCK",l[l.BLOCK_BLOT=10]="BLOCK_BLOT",l[l.INLINE_BLOT=6]="INLINE_BLOT",l[l.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",l[l.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",l[l.ANY=15]="ANY"}(s=e.Scope||(e.Scope={})),e.create=function(l,h){var f=a(l);if(f==null)throw new n("Unable to create "+l+" blot");var m=f,g=l instanceof Node||l.nodeType===Node.TEXT_NODE?l:m.create(h);return new m(g,h)},e.find=function l(h,f){return f===void 0&&(f=!1),h==null?null:h[e.DATA_KEY]!=null?h[e.DATA_KEY].blot:f?l(h.parentNode,f):null},e.query=a,e.register=function l(){for(var h=[],f=0;f<arguments.length;f++)h[f]=arguments[f];if(h.length>1)return h.map(function(v){return l(v)});var m=h[0];if(typeof m.blotName!="string"&&typeof m.attrName!="string")throw new n("Invalid definition");if(m.blotName==="abstract")throw new n("Cannot register abstract class");if(u[m.blotName||m.attrName]=m,typeof m.keyName=="string")p[m.keyName]=m;else if(m.className!=null&&(c[m.className]=m),m.tagName!=null){Array.isArray(m.tagName)?m.tagName=m.tagName.map(function(v){return v.toUpperCase()}):m.tagName=m.tagName.toUpperCase();var g=Array.isArray(m.tagName)?m.tagName:[m.tagName];g.forEach(function(v){d[v]!=null&&m.className!=null||(d[v]=m)})}return m}},function(o,e,t){var i=t(51),r=t(11),n=t(3),s=t(20),p=String.fromCharCode(0),c=function(d){Array.isArray(d)?this.ops=d:d!=null&&Array.isArray(d.ops)?this.ops=d.ops:this.ops=[]};c.prototype.insert=function(d,u){var a={};return d.length===0?this:(a.insert=d,u!=null&&typeof u=="object"&&Object.keys(u).length>0&&(a.attributes=u),this.push(a))},c.prototype.delete=function(d){return d<=0?this:this.push({delete:d})},c.prototype.retain=function(d,u){if(d<=0)return this;var a={retain:d};return u!=null&&typeof u=="object"&&Object.keys(u).length>0&&(a.attributes=u),this.push(a)},c.prototype.push=function(d){var u=this.ops.length,a=this.ops[u-1];if(d=n(!0,{},d),typeof a=="object"){if(typeof d.delete=="number"&&typeof a.delete=="number")return this.ops[u-1]={delete:a.delete+d.delete},this;if(typeof a.delete=="number"&&d.insert!=null&&(u-=1,typeof(a=this.ops[u-1])!="object"))return this.ops.unshift(d),this;if(r(d.attributes,a.attributes)){if(typeof d.insert=="string"&&typeof a.insert=="string")return this.ops[u-1]={insert:a.insert+d.insert},typeof d.attributes=="object"&&(this.ops[u-1].attributes=d.attributes),this;if(typeof d.retain=="number"&&typeof a.retain=="number")return this.ops[u-1]={retain:a.retain+d.retain},typeof d.attributes=="object"&&(this.ops[u-1].attributes=d.attributes),this}}return u===this.ops.length?this.ops.push(d):this.ops.splice(u,0,d),this},c.prototype.chop=function(){var d=this.ops[this.ops.length-1];return d&&d.retain&&!d.attributes&&this.ops.pop(),this},c.prototype.filter=function(d){return this.ops.filter(d)},c.prototype.forEach=function(d){this.ops.forEach(d)},c.prototype.map=function(d){return this.ops.map(d)},c.prototype.partition=function(d){var u=[],a=[];return this.forEach(function(l){(d(l)?u:a).push(l)}),[u,a]},c.prototype.reduce=function(d,u){return this.ops.reduce(d,u)},c.prototype.changeLength=function(){return this.reduce(function(d,u){return u.insert?d+s.length(u):u.delete?d-u.delete:d},0)},c.prototype.length=function(){return this.reduce(function(d,u){return d+s.length(u)},0)},c.prototype.slice=function(d,u){d=d||0,typeof u!="number"&&(u=1/0);for(var a=[],l=s.iterator(this.ops),h=0;h<u&&l.hasNext();){var f;h<d?f=l.next(d-h):(f=l.next(u-h),a.push(f)),h+=s.length(f)}return new c(a)},c.prototype.compose=function(d){var u=s.iterator(this.ops),a=s.iterator(d.ops),l=[],h=a.peek();if(h!=null&&typeof h.retain=="number"&&h.attributes==null){for(var f=h.retain;u.peekType()==="insert"&&u.peekLength()<=f;)f-=u.peekLength(),l.push(u.next());h.retain-f>0&&a.next(h.retain-f)}for(var m=new c(l);u.hasNext()||a.hasNext();)if(a.peekType()==="insert")m.push(a.next());else if(u.peekType()==="delete")m.push(u.next());else{var g=Math.min(u.peekLength(),a.peekLength()),v=u.next(g),y=a.next(g);if(typeof y.retain=="number"){var b={};typeof v.retain=="number"?b.retain=g:b.insert=v.insert;var x=s.attributes.compose(v.attributes,y.attributes,typeof v.retain=="number");if(x&&(b.attributes=x),m.push(b),!a.hasNext()&&r(m.ops[m.ops.length-1],b)){var w=new c(u.rest());return m.concat(w).chop()}}else typeof y.delete=="number"&&typeof v.retain=="number"&&m.push(y)}return m.chop()},c.prototype.concat=function(d){var u=new c(this.ops.slice());return d.ops.length>0&&(u.push(d.ops[0]),u.ops=u.ops.concat(d.ops.slice(1))),u},c.prototype.diff=function(d,u){if(this.ops===d.ops)return new c;var a=[this,d].map(function(g){return g.map(function(v){if(v.insert!=null)return typeof v.insert=="string"?v.insert:p;throw new Error("diff() called "+(g===d?"on":"with")+" non-document")}).join("")}),l=new c,h=i(a[0],a[1],u),f=s.iterator(this.ops),m=s.iterator(d.ops);return h.forEach(function(g){for(var v=g[1].length;v>0;){var y=0;switch(g[0]){case i.INSERT:y=Math.min(m.peekLength(),v),l.push(m.next(y));break;case i.DELETE:y=Math.min(v,f.peekLength()),f.next(y),l.delete(y);break;case i.EQUAL:y=Math.min(f.peekLength(),m.peekLength(),v);var b=f.next(y),x=m.next(y);r(b.insert,x.insert)?l.retain(y,s.attributes.diff(b.attributes,x.attributes)):l.push(x).delete(y)}v-=y}}),l.chop()},c.prototype.eachLine=function(d,u){u=u||`
`;for(var a=s.iterator(this.ops),l=new c,h=0;a.hasNext();){if(a.peekType()!=="insert")return;var f=a.peek(),m=s.length(f)-a.peekLength(),g=typeof f.insert=="string"?f.insert.indexOf(u,m)-m:-1;if(g<0)l.push(a.next());else if(g>0)l.push(a.next(g));else{if(d(l,a.next(1).attributes||{},h)===!1)return;h+=1,l=new c}}l.length()>0&&d(l,{},h)},c.prototype.transform=function(d,u){if(u=!!u,typeof d=="number")return this.transformPosition(d,u);for(var a=s.iterator(this.ops),l=s.iterator(d.ops),h=new c;a.hasNext()||l.hasNext();)if(a.peekType()!=="insert"||!u&&l.peekType()==="insert")if(l.peekType()==="insert")h.push(l.next());else{var f=Math.min(a.peekLength(),l.peekLength()),m=a.next(f),g=l.next(f);if(m.delete)continue;g.delete?h.push(g):h.retain(f,s.attributes.transform(m.attributes,g.attributes,u))}else h.retain(s.length(a.next()));return h.chop()},c.prototype.transformPosition=function(d,u){u=!!u;for(var a=s.iterator(this.ops),l=0;a.hasNext()&&l<=d;){var h=a.peekLength(),f=a.peekType();a.next(),f!=="delete"?(f==="insert"&&(l<d||!u)&&(d+=h),l+=h):d-=Math.min(h,d-l)}return d},o.exports=c},function(o,e){var t=Object.prototype.hasOwnProperty,i=Object.prototype.toString,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,s=function(u){return typeof Array.isArray=="function"?Array.isArray(u):i.call(u)==="[object Array]"},p=function(u){if(!u||i.call(u)!=="[object Object]")return!1;var a,l=t.call(u,"constructor"),h=u.constructor&&u.constructor.prototype&&t.call(u.constructor.prototype,"isPrototypeOf");if(u.constructor&&!l&&!h)return!1;for(a in u);return a===void 0||t.call(u,a)},c=function(u,a){r&&a.name==="__proto__"?r(u,a.name,{enumerable:!0,configurable:!0,value:a.newValue,writable:!0}):u[a.name]=a.newValue},d=function(u,a){if(a==="__proto__"){if(!t.call(u,a))return;if(n)return n(u,a).value}return u[a]};o.exports=function u(){var a,l,h,f,m,g,v=arguments[0],y=1,b=arguments.length,x=!1;for(typeof v=="boolean"&&(x=v,v=arguments[1]||{},y=2),(v==null||typeof v!="object"&&typeof v!="function")&&(v={});y<b;++y)if((a=arguments[y])!=null)for(l in a)h=d(v,l),v!==(f=d(a,l))&&(x&&f&&(p(f)||(m=s(f)))?(m?(m=!1,g=h&&s(h)?h:[]):g=h&&p(h)?h:{},c(v,{name:l,newValue:u(x,g,f)})):f!==void 0&&c(v,{name:l,newValue:f}));return v}},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BlockEmbed=e.bubbleFormats=void 0;var i=function(){function y(b,x){for(var w=0;w<x.length;w++){var E=x[w];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(b,E.key,E)}}return function(b,x,w){return x&&y(b.prototype,x),w&&y(b,w),b}}(),r=function y(b,x,w){b===null&&(b=Function.prototype);var E=Object.getOwnPropertyDescriptor(b,x);if(E===void 0){var S=Object.getPrototypeOf(b);return S===null?void 0:y(S,x,w)}if("value"in E)return E.value;var k=E.get;return k!==void 0?k.call(w):void 0},n=a(t(3)),s=a(t(2)),p=a(t(0)),c=a(t(16)),d=a(t(6)),u=a(t(7));function a(y){return y&&y.__esModule?y:{default:y}}function l(y,b){if(!(y instanceof b))throw new TypeError("Cannot call a class as a function")}function h(y,b){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||typeof b!="object"&&typeof b!="function"?y:b}function f(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(y,b):y.__proto__=b)}var m=function(y){function b(){return l(this,b),h(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return f(b,y),i(b,[{key:"attach",value:function(){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"attach",this).call(this),this.attributes=new p.default.Attributor.Store(this.domNode)}},{key:"delta",value:function(){return new s.default().insert(this.value(),(0,n.default)(this.formats(),this.attributes.values()))}},{key:"format",value:function(x,w){var E=p.default.query(x,p.default.Scope.BLOCK_ATTRIBUTE);E!=null&&this.attributes.attribute(E,w)}},{key:"formatAt",value:function(x,w,E,S){this.format(E,S)}},{key:"insertAt",value:function(x,w,E){if(typeof w=="string"&&w.endsWith(`
`)){var S=p.default.create(g.blotName);this.parent.insertBefore(S,x===0?this:this.next),S.insertAt(0,w.slice(0,-1))}else r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertAt",this).call(this,x,w,E)}}]),b}(p.default.Embed);m.scope=p.default.Scope.BLOCK_BLOT;var g=function(y){function b(x){l(this,b);var w=h(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,x));return w.cache={},w}return f(b,y),i(b,[{key:"delta",value:function(){return this.cache.delta==null&&(this.cache.delta=this.descendants(p.default.Leaf).reduce(function(x,w){return w.length()===0?x:x.insert(w.value(),v(w))},new s.default).insert(`
`,v(this))),this.cache.delta}},{key:"deleteAt",value:function(x,w){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"deleteAt",this).call(this,x,w),this.cache={}}},{key:"formatAt",value:function(x,w,E,S){w<=0||(p.default.query(E,p.default.Scope.BLOCK)?x+w===this.length()&&this.format(E,S):r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"formatAt",this).call(this,x,Math.min(w,this.length()-x-1),E,S),this.cache={})}},{key:"insertAt",value:function(x,w,E){if(E!=null)return r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertAt",this).call(this,x,w,E);if(w.length!==0){var S=w.split(`
`),k=S.shift();k.length>0&&(x<this.length()-1||this.children.tail==null?r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertAt",this).call(this,Math.min(x,this.length()-1),k):this.children.tail.insertAt(this.children.tail.length(),k),this.cache={});var N=this;S.reduce(function(_,O){return(N=N.split(_,!0)).insertAt(0,O),O.length},x+k.length)}}},{key:"insertBefore",value:function(x,w){var E=this.children.head;r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertBefore",this).call(this,x,w),E instanceof c.default&&E.remove(),this.cache={}}},{key:"length",value:function(){return this.cache.length==null&&(this.cache.length=r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"length",this).call(this)+1),this.cache.length}},{key:"moveChildren",value:function(x,w){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"moveChildren",this).call(this,x,w),this.cache={}}},{key:"optimize",value:function(x){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"optimize",this).call(this,x),this.cache={}}},{key:"path",value:function(x){return r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"path",this).call(this,x,!0)}},{key:"removeChild",value:function(x){r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"removeChild",this).call(this,x),this.cache={}}},{key:"split",value:function(x){var w=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(w&&(x===0||x>=this.length()-1)){var E=this.clone();return x===0?(this.parent.insertBefore(E,this),this):(this.parent.insertBefore(E,this.next),E)}var S=r(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"split",this).call(this,x,w);return this.cache={},S}}]),b}(p.default.Block);function v(y){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return y==null?b:(typeof y.formats=="function"&&(b=(0,n.default)(b,y.formats())),y.parent==null||y.parent.blotName=="scroll"||y.parent.statics.scope!==y.statics.scope?b:v(y.parent,b))}g.blotName="block",g.tagName="P",g.defaultChild="break",g.allowedChildren=[d.default,p.default.Embed,u.default],e.bubbleFormats=v,e.BlockEmbed=m,e.default=g},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.overload=e.expandConfig=void 0;var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},r=function(N,_){if(Array.isArray(N))return N;if(Symbol.iterator in Object(N))return function(O,A){var q=[],I=!0,P=!1,T=void 0;try{for(var L,$=O[Symbol.iterator]();!(I=(L=$.next()).done)&&(q.push(L.value),!A||q.length!==A);I=!0);}catch(V){P=!0,T=V}finally{try{!I&&$.return&&$.return()}finally{if(P)throw T}}return q}(N,_);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function N(_,O){for(var A=0;A<O.length;A++){var q=O[A];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(_,q.key,q)}}return function(_,O,A){return O&&N(_.prototype,O),A&&N(_,A),_}}();t(50);var s=g(t(2)),p=g(t(14)),c=g(t(8)),d=g(t(9)),u=g(t(0)),a=t(15),l=g(a),h=g(t(3)),f=g(t(10)),m=g(t(34));function g(N){return N&&N.__esModule?N:{default:N}}function v(N,_,O){return _ in N?Object.defineProperty(N,_,{value:O,enumerable:!0,configurable:!0,writable:!0}):N[_]=O,N}function y(N,_){if(!(N instanceof _))throw new TypeError("Cannot call a class as a function")}var b=(0,f.default)("quill"),x=function(){function N(_){var O=this,A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(y(this,N),this.options=w(_,A),this.container=this.options.container,this.container==null)return b.error("Invalid Quill container",_);this.options.debug&&N.debug(this.options.debug);var q=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",this.container.__quill=this,this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,this.emitter=new c.default,this.scroll=u.default.create(this.root,{emitter:this.emitter,whitelist:this.options.formats}),this.editor=new p.default(this.scroll),this.selection=new l.default(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.theme.init(),this.emitter.on(c.default.events.EDITOR_CHANGE,function(P){P===c.default.events.TEXT_CHANGE&&O.root.classList.toggle("ql-blank",O.editor.isBlank())}),this.emitter.on(c.default.events.SCROLL_UPDATE,function(P,T){var L=O.selection.lastRange,$=L&&L.length===0?L.index:void 0;E.call(O,function(){return O.editor.update(null,T,$)},P)});var I=this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">`+q+"<p><br></p></div>");this.setContents(I),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable()}return n(N,null,[{key:"debug",value:function(_){_===!0&&(_="log"),f.default.level(_)}},{key:"find",value:function(_){return _.__quill||u.default.find(_)}},{key:"import",value:function(_){return this.imports[_]==null&&b.error("Cannot import "+_+". Are you sure it was registered?"),this.imports[_]}},{key:"register",value:function(_,O){var A=this,q=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(typeof _!="string"){var I=_.attrName||_.blotName;typeof I=="string"?this.register("formats/"+I,_,O):Object.keys(_).forEach(function(P){A.register(P,_[P],O)})}else this.imports[_]==null||q||b.warn("Overwriting "+_+" with",O),this.imports[_]=O,(_.startsWith("blots/")||_.startsWith("formats/"))&&O.blotName!=="abstract"?u.default.register(O):_.startsWith("modules")&&typeof O.register=="function"&&O.register()}}]),n(N,[{key:"addContainer",value:function(_){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(typeof _=="string"){var A=_;(_=document.createElement("div")).classList.add(A)}return this.container.insertBefore(_,O),_}},{key:"blur",value:function(){this.selection.setRange(null)}},{key:"deleteText",value:function(_,O,A){var q=this,I=S(_,O,A),P=r(I,4);return _=P[0],O=P[1],A=P[3],E.call(this,function(){return q.editor.deleteText(_,O)},A,_,-1*O)}},{key:"disable",value:function(){this.enable(!1)}},{key:"enable",value:function(){var _=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];this.scroll.enable(_),this.container.classList.toggle("ql-disabled",!_)}},{key:"focus",value:function(){var _=this.scrollingContainer.scrollTop;this.selection.focus(),this.scrollingContainer.scrollTop=_,this.scrollIntoView()}},{key:"format",value:function(_,O){var A=this,q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:c.default.sources.API;return E.call(this,function(){var I=A.getSelection(!0),P=new s.default;if(I==null)return P;if(u.default.query(_,u.default.Scope.BLOCK))P=A.editor.formatLine(I.index,I.length,v({},_,O));else{if(I.length===0)return A.selection.format(_,O),P;P=A.editor.formatText(I.index,I.length,v({},_,O))}return A.setSelection(I,c.default.sources.SILENT),P},q)}},{key:"formatLine",value:function(_,O,A,q,I){var P,T=this,L=S(_,O,A,q,I),$=r(L,4);return _=$[0],O=$[1],P=$[2],I=$[3],E.call(this,function(){return T.editor.formatLine(_,O,P)},I,_,0)}},{key:"formatText",value:function(_,O,A,q,I){var P,T=this,L=S(_,O,A,q,I),$=r(L,4);return _=$[0],O=$[1],P=$[2],I=$[3],E.call(this,function(){return T.editor.formatText(_,O,P)},I,_,0)}},{key:"getBounds",value:function(_){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,A=void 0;A=typeof _=="number"?this.selection.getBounds(_,O):this.selection.getBounds(_.index,_.length);var q=this.container.getBoundingClientRect();return{bottom:A.bottom-q.top,height:A.height,left:A.left-q.left,right:A.right-q.left,top:A.top-q.top,width:A.width}}},{key:"getContents",value:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-_,A=S(_,O),q=r(A,2);return _=q[0],O=q[1],this.editor.getContents(_,O)}},{key:"getFormat",value:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.getSelection(!0),O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return typeof _=="number"?this.editor.getFormat(_,O):this.editor.getFormat(_.index,_.length)}},{key:"getIndex",value:function(_){return _.offset(this.scroll)}},{key:"getLength",value:function(){return this.scroll.length()}},{key:"getLeaf",value:function(_){return this.scroll.leaf(_)}},{key:"getLine",value:function(_){return this.scroll.line(_)}},{key:"getLines",value:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE;return typeof _!="number"?this.scroll.lines(_.index,_.length):this.scroll.lines(_,O)}},{key:"getModule",value:function(_){return this.theme.modules[_]}},{key:"getSelection",value:function(){var _=arguments.length>0&&arguments[0]!==void 0&&arguments[0];return _&&this.focus(),this.update(),this.selection.getRange()[0]}},{key:"getText",value:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-_,A=S(_,O),q=r(A,2);return _=q[0],O=q[1],this.editor.getText(_,O)}},{key:"hasFocus",value:function(){return this.selection.hasFocus()}},{key:"insertEmbed",value:function(_,O,A){var q=this,I=arguments.length>3&&arguments[3]!==void 0?arguments[3]:N.sources.API;return E.call(this,function(){return q.editor.insertEmbed(_,O,A)},I,_)}},{key:"insertText",value:function(_,O,A,q,I){var P,T=this,L=S(_,0,A,q,I),$=r(L,4);return _=$[0],P=$[2],I=$[3],E.call(this,function(){return T.editor.insertText(_,O,P)},I,_,O.length)}},{key:"isEnabled",value:function(){return!this.container.classList.contains("ql-disabled")}},{key:"off",value:function(){return this.emitter.off.apply(this.emitter,arguments)}},{key:"on",value:function(){return this.emitter.on.apply(this.emitter,arguments)}},{key:"once",value:function(){return this.emitter.once.apply(this.emitter,arguments)}},{key:"pasteHTML",value:function(_,O,A){this.clipboard.dangerouslyPasteHTML(_,O,A)}},{key:"removeFormat",value:function(_,O,A){var q=this,I=S(_,O,A),P=r(I,4);return _=P[0],O=P[1],A=P[3],E.call(this,function(){return q.editor.removeFormat(_,O)},A,_)}},{key:"scrollIntoView",value:function(){this.selection.scrollIntoView(this.scrollingContainer)}},{key:"setContents",value:function(_){var O=this,A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c.default.sources.API;return E.call(this,function(){_=new s.default(_);var q=O.getLength(),I=O.editor.deleteText(0,q),P=O.editor.applyDelta(_),T=P.ops[P.ops.length-1];return T!=null&&typeof T.insert=="string"&&T.insert[T.insert.length-1]===`
`&&(O.editor.deleteText(O.getLength()-1,1),P.delete(1)),I.compose(P)},A)}},{key:"setSelection",value:function(_,O,A){if(_==null)this.selection.setRange(null,O||N.sources.API);else{var q=S(_,O,A),I=r(q,4);_=I[0],O=I[1],A=I[3],this.selection.setRange(new a.Range(_,O),A),A!==c.default.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer)}}},{key:"setText",value:function(_){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c.default.sources.API,A=new s.default().insert(_);return this.setContents(A,O)}},{key:"update",value:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c.default.sources.USER,O=this.scroll.update(_);return this.selection.update(_),O}},{key:"updateContents",value:function(_){var O=this,A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c.default.sources.API;return E.call(this,function(){return _=new s.default(_),O.editor.applyDelta(_,A)},A,!0)}}]),N}();function w(N,_){if((_=(0,h.default)(!0,{container:N,modules:{clipboard:!0,keyboard:!0,history:!0}},_)).theme&&_.theme!==x.DEFAULTS.theme){if(_.theme=x.import("themes/"+_.theme),_.theme==null)throw new Error("Invalid theme "+_.theme+". Did you register it?")}else _.theme=m.default;var O=(0,h.default)(!0,{},_.theme.DEFAULTS);[O,_].forEach(function(q){q.modules=q.modules||{},Object.keys(q.modules).forEach(function(I){q.modules[I]===!0&&(q.modules[I]={})})});var A=Object.keys(O.modules).concat(Object.keys(_.modules)).reduce(function(q,I){var P=x.import("modules/"+I);return P==null?b.error("Cannot load "+I+" module. Are you sure you registered it?"):q[I]=P.DEFAULTS||{},q},{});return _.modules!=null&&_.modules.toolbar&&_.modules.toolbar.constructor!==Object&&(_.modules.toolbar={container:_.modules.toolbar}),_=(0,h.default)(!0,{},x.DEFAULTS,{modules:A},O,_),["bounds","container","scrollingContainer"].forEach(function(q){typeof _[q]=="string"&&(_[q]=document.querySelector(_[q]))}),_.modules=Object.keys(_.modules).reduce(function(q,I){return _.modules[I]&&(q[I]=_.modules[I]),q},{}),_}function E(N,_,O,A){if(this.options.strict&&!this.isEnabled()&&_===c.default.sources.USER)return new s.default;var q=O==null?null:this.getSelection(),I=this.editor.delta,P=N();if(q!=null&&(O===!0&&(O=q.index),A==null?q=k(q,P,_):A!==0&&(q=k(q,O,A,_)),this.setSelection(q,c.default.sources.SILENT)),P.length()>0){var T,L,$=[c.default.events.TEXT_CHANGE,P,I,_];(T=this.emitter).emit.apply(T,[c.default.events.EDITOR_CHANGE].concat($)),_!==c.default.sources.SILENT&&(L=this.emitter).emit.apply(L,$)}return P}function S(N,_,O,A,q){var I={};return typeof N.index=="number"&&typeof N.length=="number"?typeof _!="number"?(q=A,A=O,O=_,_=N.length,N=N.index):(_=N.length,N=N.index):typeof _!="number"&&(q=A,A=O,O=_,_=0),(O===void 0?"undefined":i(O))==="object"?(I=O,q=A):typeof O=="string"&&(A!=null?I[O]=A:q=O),[N,_,I,q=q||c.default.sources.API]}function k(N,_,O,A){if(N==null)return null;var q=void 0,I=void 0;if(_ instanceof s.default){var P=[N.index,N.index+N.length].map(function(V){return _.transformPosition(V,A!==c.default.sources.USER)}),T=r(P,2);q=T[0],I=T[1]}else{var L=[N.index,N.index+N.length].map(function(V){return V<_||V===_&&A===c.default.sources.USER?V:O>=0?V+O:Math.max(_,V+O)}),$=r(L,2);q=$[0],I=$[1]}return new a.Range(q,I-q)}x.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,scrollingContainer:null,strict:!0,theme:"default"},x.events=c.default.events,x.sources=c.default.sources,x.version="1.3.7",x.imports={delta:s.default,parchment:u.default,"core/module":d.default,"core/theme":m.default},e.expandConfig=w,e.overload=S,e.default=x},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function a(l,h){for(var f=0;f<h.length;f++){var m=h[f];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(l,m.key,m)}}return function(l,h,f){return h&&a(l.prototype,h),f&&a(l,f),l}}(),r=function a(l,h,f){l===null&&(l=Function.prototype);var m=Object.getOwnPropertyDescriptor(l,h);if(m===void 0){var g=Object.getPrototypeOf(l);return g===null?void 0:a(g,h,f)}if("value"in m)return m.value;var v=m.get;return v!==void 0?v.call(f):void 0},n=p(t(7)),s=p(t(0));function p(a){return a&&a.__esModule?a:{default:a}}function c(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}function d(a,l){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||typeof l!="object"&&typeof l!="function"?a:l}var u=function(a){function l(){return c(this,l),d(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return function(h,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);h.prototype=Object.create(f&&f.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(h,f):h.__proto__=f)}(l,a),i(l,[{key:"formatAt",value:function(h,f,m,g){if(l.compare(this.statics.blotName,m)<0&&s.default.query(m,s.default.Scope.BLOT)){var v=this.isolate(h,f);g&&v.wrap(m,g)}else r(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"formatAt",this).call(this,h,f,m,g)}},{key:"optimize",value:function(h){if(r(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"optimize",this).call(this,h),this.parent instanceof l&&l.compare(this.statics.blotName,this.parent.statics.blotName)>0){var f=this.parent.isolate(this.offset(),this.length());this.moveChildren(f),f.wrap(this)}}}],[{key:"compare",value:function(h,f){var m=l.order.indexOf(h),g=l.order.indexOf(f);return m>=0||g>=0?m-g:h===f?0:h<f?-1:1}}]),l}(s.default.Inline);u.allowedChildren=[u,s.default.Embed,n.default],u.order=["cursor","inline","underline","strike","italic","bold","script","link","code"],e.default=u},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(0);function n(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}function s(c,d){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?c:d}var p=function(c){function d(){return n(this,d),s(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return function(u,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);u.prototype=Object.create(a&&a.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(u,a):u.__proto__=a)}(d,c),d}(((i=r)&&i.__esModule?i:{default:i}).default.Text);e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function d(u,a){for(var l=0;l<a.length;l++){var h=a[l];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(u,h.key,h)}}return function(u,a,l){return a&&d(u.prototype,a),l&&d(u,l),u}}(),r=function d(u,a,l){u===null&&(u=Function.prototype);var h=Object.getOwnPropertyDescriptor(u,a);if(h===void 0){var f=Object.getPrototypeOf(u);return f===null?void 0:d(f,a,l)}if("value"in h)return h.value;var m=h.get;return m!==void 0?m.call(l):void 0},n=s(t(54));function s(d){return d&&d.__esModule?d:{default:d}}var p=(0,s(t(10)).default)("quill:events");["selectionchange","mousedown","mouseup","click"].forEach(function(d){document.addEventListener(d,function(){for(var u=arguments.length,a=Array(u),l=0;l<u;l++)a[l]=arguments[l];[].slice.call(document.querySelectorAll(".ql-container")).forEach(function(h){var f;h.__quill&&h.__quill.emitter&&(f=h.__quill.emitter).handleDOM.apply(f,a)})})});var c=function(d){function u(){(function(l,h){if(!(l instanceof h))throw new TypeError("Cannot call a class as a function")})(this,u);var a=function(l,h){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!h||typeof h!="object"&&typeof h!="function"?l:h}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));return a.listeners={},a.on("error",p.error),a}return function(a,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);a.prototype=Object.create(l&&l.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(a,l):a.__proto__=l)}(u,d),i(u,[{key:"emit",value:function(){p.log.apply(p,arguments),r(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"emit",this).apply(this,arguments)}},{key:"handleDOM",value:function(a){for(var l=arguments.length,h=Array(l>1?l-1:0),f=1;f<l;f++)h[f-1]=arguments[f];(this.listeners[a.type]||[]).forEach(function(m){var g=m.node,v=m.handler;(a.target===g||g.contains(a.target))&&v.apply(void 0,[a].concat(h))})}},{key:"listenDOM",value:function(a,l,h){this.listeners[a]||(this.listeners[a]=[]),this.listeners[a].push({node:l,handler:h})}}]),u}(n.default);c.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},c.sources={API:"api",SILENT:"silent",USER:"user"},e.default=c},function(o,e,t){function i(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function n(s){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};i(this,n),this.quill=s,this.options=p};r.DEFAULTS={},e.default=r},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=["error","warn","log","info"],r="warn";function n(p){if(i.indexOf(p)<=i.indexOf(r)){for(var c,d=arguments.length,u=Array(d>1?d-1:0),a=1;a<d;a++)u[a-1]=arguments[a];(c=console)[p].apply(c,u)}}function s(p){return i.reduce(function(c,d){return c[d]=n.bind(console,d,p),c},{})}n.level=s.level=function(p){r=p},e.default=s},function(o,e,t){var i=Array.prototype.slice,r=t(52),n=t(53),s=o.exports=function(d,u,a){return a||(a={}),d===u||(d instanceof Date&&u instanceof Date?d.getTime()===u.getTime():!d||!u||typeof d!="object"&&typeof u!="object"?a.strict?d===u:d==u:function(l,h,f){var m,g;if(p(l)||p(h)||l.prototype!==h.prototype)return!1;if(n(l))return!!n(h)&&(l=i.call(l),h=i.call(h),s(l,h,f));if(c(l)){if(!c(h)||l.length!==h.length)return!1;for(m=0;m<l.length;m++)if(l[m]!==h[m])return!1;return!0}try{var v=r(l),y=r(h)}catch{return!1}if(v.length!=y.length)return!1;for(v.sort(),y.sort(),m=v.length-1;m>=0;m--)if(v[m]!=y[m])return!1;for(m=v.length-1;m>=0;m--)if(g=v[m],!s(l[g],h[g],f))return!1;return typeof l==typeof h}(d,u,a))};function p(d){return d==null}function c(d){return!(!d||typeof d!="object"||typeof d.length!="number"||typeof d.copy!="function"||typeof d.slice!="function"||d.length>0&&typeof d[0]!="number")}},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=t(1),r=function(){function n(s,p,c){c===void 0&&(c={}),this.attrName=s,this.keyName=p;var d=i.Scope.TYPE&i.Scope.ATTRIBUTE;c.scope!=null?this.scope=c.scope&i.Scope.LEVEL|d:this.scope=i.Scope.ATTRIBUTE,c.whitelist!=null&&(this.whitelist=c.whitelist)}return n.keys=function(s){return[].map.call(s.attributes,function(p){return p.name})},n.prototype.add=function(s,p){return!!this.canAdd(s,p)&&(s.setAttribute(this.keyName,p),!0)},n.prototype.canAdd=function(s,p){return i.query(s,i.Scope.BLOT&(this.scope|i.Scope.TYPE))!=null&&(this.whitelist==null||(typeof p=="string"?this.whitelist.indexOf(p.replace(/["']/g,""))>-1:this.whitelist.indexOf(p)>-1))},n.prototype.remove=function(s){s.removeAttribute(this.keyName)},n.prototype.value=function(s){var p=s.getAttribute(this.keyName);return this.canAdd(s,p)&&p?p:""},n}();e.default=r},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Code=void 0;var i=function(v,y){if(Array.isArray(v))return v;if(Symbol.iterator in Object(v))return function(b,x){var w=[],E=!0,S=!1,k=void 0;try{for(var N,_=b[Symbol.iterator]();!(E=(N=_.next()).done)&&(w.push(N.value),!x||w.length!==x);E=!0);}catch(O){S=!0,k=O}finally{try{!E&&_.return&&_.return()}finally{if(S)throw k}}return w}(v,y);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function v(y,b){for(var x=0;x<b.length;x++){var w=b[x];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(y,w.key,w)}}return function(y,b,x){return b&&v(y.prototype,b),x&&v(y,x),y}}(),n=function v(y,b,x){y===null&&(y=Function.prototype);var w=Object.getOwnPropertyDescriptor(y,b);if(w===void 0){var E=Object.getPrototypeOf(y);return E===null?void 0:v(E,b,x)}if("value"in w)return w.value;var S=w.get;return S!==void 0?S.call(x):void 0},s=a(t(2)),p=a(t(0)),c=a(t(4)),d=a(t(6)),u=a(t(7));function a(v){return v&&v.__esModule?v:{default:v}}function l(v,y){if(!(v instanceof y))throw new TypeError("Cannot call a class as a function")}function h(v,y){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!y||typeof y!="object"&&typeof y!="function"?v:y}function f(v,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);v.prototype=Object.create(y&&y.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(v,y):v.__proto__=y)}var m=function(v){function y(){return l(this,y),h(this,(y.__proto__||Object.getPrototypeOf(y)).apply(this,arguments))}return f(y,v),y}(d.default);m.blotName="code",m.tagName="CODE";var g=function(v){function y(){return l(this,y),h(this,(y.__proto__||Object.getPrototypeOf(y)).apply(this,arguments))}return f(y,v),r(y,[{key:"delta",value:function(){var b=this,x=this.domNode.textContent;return x.endsWith(`
`)&&(x=x.slice(0,-1)),x.split(`
`).reduce(function(w,E){return w.insert(E).insert(`
`,b.formats())},new s.default)}},{key:"format",value:function(b,x){if(b!==this.statics.blotName||!x){var w=this.descendant(u.default,this.length()-1),E=i(w,1)[0];E!=null&&E.deleteAt(E.length()-1,1),n(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"format",this).call(this,b,x)}}},{key:"formatAt",value:function(b,x,w,E){if(x!==0&&p.default.query(w,p.default.Scope.BLOCK)!=null&&(w!==this.statics.blotName||E!==this.statics.formats(this.domNode))){var S=this.newlineIndex(b);if(!(S<0||S>=b+x)){var k=this.newlineIndex(b,!0)+1,N=S-k+1,_=this.isolate(k,N),O=_.next;_.format(w,E),O instanceof y&&O.formatAt(0,b-k+x-N,w,E)}}}},{key:"insertAt",value:function(b,x,w){if(w==null){var E=this.descendant(u.default,b),S=i(E,2),k=S[0],N=S[1];k.insertAt(N,x)}}},{key:"length",value:function(){var b=this.domNode.textContent.length;return this.domNode.textContent.endsWith(`
`)?b:b+1}},{key:"newlineIndex",value:function(b){var x=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(x)return this.domNode.textContent.slice(0,b).lastIndexOf(`
`);var w=this.domNode.textContent.slice(b).indexOf(`
`);return w>-1?b+w:-1}},{key:"optimize",value:function(b){this.domNode.textContent.endsWith(`
`)||this.appendChild(p.default.create("text",`
`)),n(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"optimize",this).call(this,b);var x=this.next;x!=null&&x.prev===this&&x.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===x.statics.formats(x.domNode)&&(x.optimize(b),x.moveChildren(this),x.remove())}},{key:"replace",value:function(b){n(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"replace",this).call(this,b),[].slice.call(this.domNode.querySelectorAll("*")).forEach(function(x){var w=p.default.find(x);w==null?x.parentNode.removeChild(x):w instanceof p.default.Embed?w.remove():w.unwrap()})}}],[{key:"create",value:function(b){var x=n(y.__proto__||Object.getPrototypeOf(y),"create",this).call(this,b);return x.setAttribute("spellcheck",!1),x}},{key:"formats",value:function(){return!0}}]),y}(c.default);g.blotName="code-block",g.tagName="PRE",g.TAB="  ",e.Code=m,e.default=g},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},r=function(w,E){if(Array.isArray(w))return w;if(Symbol.iterator in Object(w))return function(S,k){var N=[],_=!0,O=!1,A=void 0;try{for(var q,I=S[Symbol.iterator]();!(_=(q=I.next()).done)&&(N.push(q.value),!k||N.length!==k);_=!0);}catch(P){O=!0,A=P}finally{try{!_&&I.return&&I.return()}finally{if(O)throw A}}return N}(w,E);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function w(E,S){for(var k=0;k<S.length;k++){var N=S[k];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(E,N.key,N)}}return function(E,S,k){return S&&w(E.prototype,S),k&&w(E,k),E}}(),s=v(t(2)),p=v(t(20)),c=v(t(0)),d=v(t(13)),u=v(t(24)),a=t(4),l=v(a),h=v(t(16)),f=v(t(21)),m=v(t(11)),g=v(t(3));function v(w){return w&&w.__esModule?w:{default:w}}var y=/^[ -~]*$/,b=function(){function w(E){(function(S,k){if(!(S instanceof k))throw new TypeError("Cannot call a class as a function")})(this,w),this.scroll=E,this.delta=this.getDelta()}return n(w,[{key:"applyDelta",value:function(E){var S=this,k=!1;this.scroll.update();var N=this.scroll.length();return this.scroll.batchStart(),(E=function(_){return _.reduce(function(O,A){if(A.insert===1){var q=(0,f.default)(A.attributes);return delete q.image,O.insert({image:A.attributes.image},q)}if(A.attributes==null||A.attributes.list!==!0&&A.attributes.bullet!==!0||((A=(0,f.default)(A)).attributes.list?A.attributes.list="ordered":(A.attributes.list="bullet",delete A.attributes.bullet)),typeof A.insert=="string"){var I=A.insert.replace(/\r\n/g,`
`).replace(/\r/g,`
`);return O.insert(I,A.attributes)}return O.push(A)},new s.default)}(E)).reduce(function(_,O){var A=O.retain||O.delete||O.insert.length||1,q=O.attributes||{};if(O.insert!=null){if(typeof O.insert=="string"){var I=O.insert;I.endsWith(`
`)&&k&&(k=!1,I=I.slice(0,-1)),_>=N&&!I.endsWith(`
`)&&(k=!0),S.scroll.insertAt(_,I);var P=S.scroll.line(_),T=r(P,2),L=T[0],$=T[1],V=(0,g.default)({},(0,a.bubbleFormats)(L));if(L instanceof l.default){var J=L.descendant(c.default.Leaf,$),we=r(J,1)[0];V=(0,g.default)(V,(0,a.bubbleFormats)(we))}q=p.default.attributes.diff(V,q)||{}}else if(i(O.insert)==="object"){var R=Object.keys(O.insert)[0];if(R==null)return _;S.scroll.insertAt(_,R,O.insert[R])}N+=A}return Object.keys(q).forEach(function(M){S.scroll.formatAt(_,A,M,q[M])}),_+A},0),E.reduce(function(_,O){return typeof O.delete=="number"?(S.scroll.deleteAt(_,O.delete),_):_+(O.retain||O.insert.length||1)},0),this.scroll.batchEnd(),this.update(E)}},{key:"deleteText",value:function(E,S){return this.scroll.deleteAt(E,S),this.update(new s.default().retain(E).delete(S))}},{key:"formatLine",value:function(E,S){var k=this,N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.scroll.update(),Object.keys(N).forEach(function(_){if(k.scroll.whitelist==null||k.scroll.whitelist[_]){var O=k.scroll.lines(E,Math.max(S,1)),A=S;O.forEach(function(q){var I=q.length();if(q instanceof d.default){var P=E-q.offset(k.scroll),T=q.newlineIndex(P+A)-P+1;q.formatAt(P,T,_,N[_])}else q.format(_,N[_]);A-=I})}}),this.scroll.optimize(),this.update(new s.default().retain(E).retain(S,(0,f.default)(N)))}},{key:"formatText",value:function(E,S){var k=this,N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Object.keys(N).forEach(function(_){k.scroll.formatAt(E,S,_,N[_])}),this.update(new s.default().retain(E).retain(S,(0,f.default)(N)))}},{key:"getContents",value:function(E,S){return this.delta.slice(E,E+S)}},{key:"getDelta",value:function(){return this.scroll.lines().reduce(function(E,S){return E.concat(S.delta())},new s.default)}},{key:"getFormat",value:function(E){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,k=[],N=[];S===0?this.scroll.path(E).forEach(function(O){var A=r(O,1)[0];A instanceof l.default?k.push(A):A instanceof c.default.Leaf&&N.push(A)}):(k=this.scroll.lines(E,S),N=this.scroll.descendants(c.default.Leaf,E,S));var _=[k,N].map(function(O){if(O.length===0)return{};for(var A=(0,a.bubbleFormats)(O.shift());Object.keys(A).length>0;){var q=O.shift();if(q==null)return A;A=x((0,a.bubbleFormats)(q),A)}return A});return g.default.apply(g.default,_)}},{key:"getText",value:function(E,S){return this.getContents(E,S).filter(function(k){return typeof k.insert=="string"}).map(function(k){return k.insert}).join("")}},{key:"insertEmbed",value:function(E,S,k){return this.scroll.insertAt(E,S,k),this.update(new s.default().retain(E).insert(function(N,_,O){return _ in N?Object.defineProperty(N,_,{value:O,enumerable:!0,configurable:!0,writable:!0}):N[_]=O,N}({},S,k)))}},{key:"insertText",value:function(E,S){var k=this,N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return S=S.replace(/\r\n/g,`
`).replace(/\r/g,`
`),this.scroll.insertAt(E,S),Object.keys(N).forEach(function(_){k.scroll.formatAt(E,S.length,_,N[_])}),this.update(new s.default().retain(E).insert(S,(0,f.default)(N)))}},{key:"isBlank",value:function(){if(this.scroll.children.length==0)return!0;if(this.scroll.children.length>1)return!1;var E=this.scroll.children.head;return E.statics.blotName===l.default.blotName&&!(E.children.length>1)&&E.children.head instanceof h.default}},{key:"removeFormat",value:function(E,S){var k=this.getText(E,S),N=this.scroll.line(E+S),_=r(N,2),O=_[0],A=_[1],q=0,I=new s.default;O!=null&&(q=O instanceof d.default?O.newlineIndex(A)-A+1:O.length()-A,I=O.delta().slice(A,A+q-1).insert(`
`));var P=this.getContents(E,S+q).diff(new s.default().insert(k).concat(I)),T=new s.default().retain(E).concat(P);return this.applyDelta(T)}},{key:"update",value:function(E){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,N=this.delta;if(S.length===1&&S[0].type==="characterData"&&S[0].target.data.match(y)&&c.default.find(S[0].target)){var _=c.default.find(S[0].target),O=(0,a.bubbleFormats)(_),A=_.offset(this.scroll),q=S[0].oldValue.replace(u.default.CONTENTS,""),I=new s.default().insert(q),P=new s.default().insert(_.value()),T=new s.default().retain(A).concat(I.diff(P,k));E=T.reduce(function(L,$){return $.insert?L.insert($.insert,O):L.push($)},new s.default),this.delta=N.compose(E)}else this.delta=this.getDelta(),E&&(0,m.default)(N.compose(E),this.delta)||(E=N.diff(this.delta,k));return E}}]),w}();function x(w,E){return Object.keys(E).reduce(function(S,k){return w[k]==null||(E[k]===w[k]?S[k]=E[k]:Array.isArray(E[k])?E[k].indexOf(w[k])<0&&(S[k]=E[k].concat([w[k]])):S[k]=[E[k],w[k]]),S},{})}e.default=b},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Range=void 0;var i=function(g,v){if(Array.isArray(g))return g;if(Symbol.iterator in Object(g))return function(y,b){var x=[],w=!0,E=!1,S=void 0;try{for(var k,N=y[Symbol.iterator]();!(w=(k=N.next()).done)&&(x.push(k.value),!b||x.length!==b);w=!0);}catch(_){E=!0,S=_}finally{try{!w&&N.return&&N.return()}finally{if(E)throw S}}return x}(g,v);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function g(v,y){for(var b=0;b<y.length;b++){var x=y[b];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(v,x.key,x)}}return function(v,y,b){return y&&g(v.prototype,y),b&&g(v,b),v}}(),n=d(t(0)),s=d(t(21)),p=d(t(11)),c=d(t(8));function d(g){return g&&g.__esModule?g:{default:g}}function u(g){if(Array.isArray(g)){for(var v=0,y=Array(g.length);v<g.length;v++)y[v]=g[v];return y}return Array.from(g)}function a(g,v){if(!(g instanceof v))throw new TypeError("Cannot call a class as a function")}var l=(0,d(t(10)).default)("quill:selection"),h=function g(v){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;a(this,g),this.index=v,this.length=y},f=function(){function g(v,y){var b=this;a(this,g),this.emitter=y,this.scroll=v,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=n.default.create("cursor",this),this.lastRange=this.savedRange=new h(0,0),this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,function(){b.mouseDown||setTimeout(b.update.bind(b,c.default.sources.USER),1)}),this.emitter.on(c.default.events.EDITOR_CHANGE,function(x,w){x===c.default.events.TEXT_CHANGE&&w.length()>0&&b.update(c.default.sources.SILENT)}),this.emitter.on(c.default.events.SCROLL_BEFORE_UPDATE,function(){if(b.hasFocus()){var x=b.getNativeRange();x!=null&&x.start.node!==b.cursor.textNode&&b.emitter.once(c.default.events.SCROLL_UPDATE,function(){try{b.setNativeRange(x.start.node,x.start.offset,x.end.node,x.end.offset)}catch{}})}}),this.emitter.on(c.default.events.SCROLL_OPTIMIZE,function(x,w){if(w.range){var E=w.range,S=E.startNode,k=E.startOffset,N=E.endNode,_=E.endOffset;b.setNativeRange(S,k,N,_)}}),this.update(c.default.sources.SILENT)}return r(g,[{key:"handleComposition",value:function(){var v=this;this.root.addEventListener("compositionstart",function(){v.composing=!0}),this.root.addEventListener("compositionend",function(){if(v.composing=!1,v.cursor.parent){var y=v.cursor.restore();if(!y)return;setTimeout(function(){v.setNativeRange(y.startNode,y.startOffset,y.endNode,y.endOffset)},1)}})}},{key:"handleDragging",value:function(){var v=this;this.emitter.listenDOM("mousedown",document.body,function(){v.mouseDown=!0}),this.emitter.listenDOM("mouseup",document.body,function(){v.mouseDown=!1,v.update(c.default.sources.USER)})}},{key:"focus",value:function(){this.hasFocus()||(this.root.focus(),this.setRange(this.savedRange))}},{key:"format",value:function(v,y){if(this.scroll.whitelist==null||this.scroll.whitelist[v]){this.scroll.update();var b=this.getNativeRange();if(b!=null&&b.native.collapsed&&!n.default.query(v,n.default.Scope.BLOCK)){if(b.start.node!==this.cursor.textNode){var x=n.default.find(b.start.node,!1);if(x==null)return;if(x instanceof n.default.Leaf){var w=x.split(b.start.offset);x.parent.insertBefore(this.cursor,w)}else x.insertBefore(this.cursor,b.start.node);this.cursor.attach()}this.cursor.format(v,y),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}}},{key:"getBounds",value:function(v){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,b=this.scroll.length();v=Math.min(v,b-1),y=Math.min(v+y,b-1)-v;var x=void 0,w=this.scroll.leaf(v),E=i(w,2),S=E[0],k=E[1];if(S==null)return null;var N=S.position(k,!0),_=i(N,2);x=_[0],k=_[1];var O=document.createRange();if(y>0){O.setStart(x,k);var A=this.scroll.leaf(v+y),q=i(A,2);if(S=q[0],k=q[1],S==null)return null;var I=S.position(k,!0),P=i(I,2);return x=P[0],k=P[1],O.setEnd(x,k),O.getBoundingClientRect()}var T="left",L=void 0;return x instanceof Text?(k<x.data.length?(O.setStart(x,k),O.setEnd(x,k+1)):(O.setStart(x,k-1),O.setEnd(x,k),T="right"),L=O.getBoundingClientRect()):(L=S.domNode.getBoundingClientRect(),k>0&&(T="right")),{bottom:L.top+L.height,height:L.height,left:L[T],right:L[T],top:L.top,width:0}}},{key:"getNativeRange",value:function(){var v=document.getSelection();if(v==null||v.rangeCount<=0)return null;var y=v.getRangeAt(0);if(y==null)return null;var b=this.normalizeNative(y);return l.info("getNativeRange",b),b}},{key:"getRange",value:function(){var v=this.getNativeRange();return v==null?[null,null]:[this.normalizedToRange(v),v]}},{key:"hasFocus",value:function(){return document.activeElement===this.root}},{key:"normalizedToRange",value:function(v){var y=this,b=[[v.start.node,v.start.offset]];v.native.collapsed||b.push([v.end.node,v.end.offset]);var x=b.map(function(S){var k=i(S,2),N=k[0],_=k[1],O=n.default.find(N,!0),A=O.offset(y.scroll);return _===0?A:O instanceof n.default.Container?A+O.length():A+O.index(N,_)}),w=Math.min(Math.max.apply(Math,u(x)),this.scroll.length()-1),E=Math.min.apply(Math,[w].concat(u(x)));return new h(E,w-E)}},{key:"normalizeNative",value:function(v){if(!m(this.root,v.startContainer)||!v.collapsed&&!m(this.root,v.endContainer))return null;var y={start:{node:v.startContainer,offset:v.startOffset},end:{node:v.endContainer,offset:v.endOffset},native:v};return[y.start,y.end].forEach(function(b){for(var x=b.node,w=b.offset;!(x instanceof Text)&&x.childNodes.length>0;)if(x.childNodes.length>w)x=x.childNodes[w],w=0;else{if(x.childNodes.length!==w)break;w=(x=x.lastChild)instanceof Text?x.data.length:x.childNodes.length+1}b.node=x,b.offset=w}),y}},{key:"rangeToNative",value:function(v){var y=this,b=v.collapsed?[v.index]:[v.index,v.index+v.length],x=[],w=this.scroll.length();return b.forEach(function(E,S){E=Math.min(w-1,E);var k,N=y.scroll.leaf(E),_=i(N,2),O=_[0],A=_[1],q=O.position(A,S!==0),I=i(q,2);k=I[0],A=I[1],x.push(k,A)}),x.length<2&&(x=x.concat(x)),x}},{key:"scrollIntoView",value:function(v){var y=this.lastRange;if(y!=null){var b=this.getBounds(y.index,y.length);if(b!=null){var x=this.scroll.length()-1,w=this.scroll.line(Math.min(y.index,x)),E=i(w,1)[0],S=E;if(y.length>0){var k=this.scroll.line(Math.min(y.index+y.length,x));S=i(k,1)[0]}if(E!=null&&S!=null){var N=v.getBoundingClientRect();b.top<N.top?v.scrollTop-=N.top-b.top:b.bottom>N.bottom&&(v.scrollTop+=b.bottom-N.bottom)}}}}},{key:"setNativeRange",value:function(v,y){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:v,x=arguments.length>3&&arguments[3]!==void 0?arguments[3]:y,w=arguments.length>4&&arguments[4]!==void 0&&arguments[4];if(l.info("setNativeRange",v,y,b,x),v==null||this.root.parentNode!=null&&v.parentNode!=null&&b.parentNode!=null){var E=document.getSelection();if(E!=null)if(v!=null){this.hasFocus()||this.root.focus();var S=(this.getNativeRange()||{}).native;if(S==null||w||v!==S.startContainer||y!==S.startOffset||b!==S.endContainer||x!==S.endOffset){v.tagName=="BR"&&(y=[].indexOf.call(v.parentNode.childNodes,v),v=v.parentNode),b.tagName=="BR"&&(x=[].indexOf.call(b.parentNode.childNodes,b),b=b.parentNode);var k=document.createRange();k.setStart(v,y),k.setEnd(b,x),E.removeAllRanges(),E.addRange(k)}}else E.removeAllRanges(),this.root.blur(),document.body.focus()}}},{key:"setRange",value:function(v){var y=arguments.length>1&&arguments[1]!==void 0&&arguments[1],b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:c.default.sources.API;if(typeof y=="string"&&(b=y,y=!1),l.info("setRange",v),v!=null){var x=this.rangeToNative(v);this.setNativeRange.apply(this,u(x).concat([y]))}else this.setNativeRange(null);this.update(b)}},{key:"update",value:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c.default.sources.USER,y=this.lastRange,b=this.getRange(),x=i(b,2),w=x[0],E=x[1];if(this.lastRange=w,this.lastRange!=null&&(this.savedRange=this.lastRange),!(0,p.default)(y,this.lastRange)){var S;!this.composing&&E!=null&&E.native.collapsed&&E.start.node!==this.cursor.textNode&&this.cursor.restore();var k,N=[c.default.events.SELECTION_CHANGE,(0,s.default)(this.lastRange),(0,s.default)(y),v];(S=this.emitter).emit.apply(S,[c.default.events.EDITOR_CHANGE].concat(N)),v!==c.default.sources.SILENT&&(k=this.emitter).emit.apply(k,N)}}}]),g}();function m(g,v){try{v.parentNode}catch{return!1}return v instanceof Text&&(v=v.parentNode),g.contains(v)}e.Range=h,e.default=f},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function u(a,l){for(var h=0;h<l.length;h++){var f=l[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(a,f.key,f)}}return function(a,l,h){return l&&u(a.prototype,l),h&&u(a,h),a}}(),n=function u(a,l,h){a===null&&(a=Function.prototype);var f=Object.getOwnPropertyDescriptor(a,l);if(f===void 0){var m=Object.getPrototypeOf(a);return m===null?void 0:u(m,l,h)}if("value"in f)return f.value;var g=f.get;return g!==void 0?g.call(h):void 0},s=t(0);function p(u,a){if(!(u instanceof a))throw new TypeError("Cannot call a class as a function")}function c(u,a){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?u:a}var d=function(u){function a(){return p(this,a),c(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,u),r(a,[{key:"insertInto",value:function(l,h){l.children.length===0?n(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"insertInto",this).call(this,l,h):this.remove()}},{key:"length",value:function(){return 0}},{key:"value",value:function(){return""}}],[{key:"value",value:function(){}}]),a}(((i=s)&&i.__esModule?i:{default:i}).default.Embed);d.blotName="break",d.tagName="BR",e.default=d},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,a){u.__proto__=a}||function(u,a){for(var l in a)a.hasOwnProperty(l)&&(u[l]=a[l])},function(u,a){function l(){this.constructor=u}i(u,a),u.prototype=a===null?Object.create(a):(l.prototype=a.prototype,new l)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(44),s=t(30),p=t(1),c=function(u){function a(l){var h=u.call(this,l)||this;return h.build(),h}return r(a,u),a.prototype.appendChild=function(l){this.insertBefore(l)},a.prototype.attach=function(){u.prototype.attach.call(this),this.children.forEach(function(l){l.attach()})},a.prototype.build=function(){var l=this;this.children=new n.default,[].slice.call(this.domNode.childNodes).reverse().forEach(function(h){try{var f=d(h);l.insertBefore(f,l.children.head||void 0)}catch(m){if(m instanceof p.ParchmentError)return;throw m}})},a.prototype.deleteAt=function(l,h){if(l===0&&h===this.length())return this.remove();this.children.forEachAt(l,h,function(f,m,g){f.deleteAt(m,g)})},a.prototype.descendant=function(l,h){var f=this.children.find(h),m=f[0],g=f[1];return l.blotName==null&&l(m)||l.blotName!=null&&m instanceof l?[m,g]:m instanceof a?m.descendant(l,g):[null,-1]},a.prototype.descendants=function(l,h,f){h===void 0&&(h=0),f===void 0&&(f=Number.MAX_VALUE);var m=[],g=f;return this.children.forEachAt(h,f,function(v,y,b){(l.blotName==null&&l(v)||l.blotName!=null&&v instanceof l)&&m.push(v),v instanceof a&&(m=m.concat(v.descendants(l,y,g))),g-=b}),m},a.prototype.detach=function(){this.children.forEach(function(l){l.detach()}),u.prototype.detach.call(this)},a.prototype.formatAt=function(l,h,f,m){this.children.forEachAt(l,h,function(g,v,y){g.formatAt(v,y,f,m)})},a.prototype.insertAt=function(l,h,f){var m=this.children.find(l),g=m[0],v=m[1];if(g)g.insertAt(v,h,f);else{var y=f==null?p.create("text",h):p.create(h,f);this.appendChild(y)}},a.prototype.insertBefore=function(l,h){if(this.statics.allowedChildren!=null&&!this.statics.allowedChildren.some(function(f){return l instanceof f}))throw new p.ParchmentError("Cannot insert "+l.statics.blotName+" into "+this.statics.blotName);l.insertInto(this,h)},a.prototype.length=function(){return this.children.reduce(function(l,h){return l+h.length()},0)},a.prototype.moveChildren=function(l,h){this.children.forEach(function(f){l.insertBefore(f,h)})},a.prototype.optimize=function(l){if(u.prototype.optimize.call(this,l),this.children.length===0)if(this.statics.defaultChild!=null){var h=p.create(this.statics.defaultChild);this.appendChild(h),h.optimize(l)}else this.remove()},a.prototype.path=function(l,h){h===void 0&&(h=!1);var f=this.children.find(l,h),m=f[0],g=f[1],v=[[this,l]];return m instanceof a?v.concat(m.path(g,h)):(m!=null&&v.push([m,g]),v)},a.prototype.removeChild=function(l){this.children.remove(l)},a.prototype.replace=function(l){l instanceof a&&l.moveChildren(this),u.prototype.replace.call(this,l)},a.prototype.split=function(l,h){if(h===void 0&&(h=!1),!h){if(l===0)return this;if(l===this.length())return this.next}var f=this.clone();return this.parent.insertBefore(f,this.next),this.children.forEachAt(l,this.length(),function(m,g,v){m=m.split(g,h),f.appendChild(m)}),f},a.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},a.prototype.update=function(l,h){var f=this,m=[],g=[];l.forEach(function(v){v.target===f.domNode&&v.type==="childList"&&(m.push.apply(m,v.addedNodes),g.push.apply(g,v.removedNodes))}),g.forEach(function(v){if(!(v.parentNode!=null&&v.tagName!=="IFRAME"&&document.body.compareDocumentPosition(v)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var y=p.find(v);y!=null&&(y.domNode.parentNode!=null&&y.domNode.parentNode!==f.domNode||y.detach())}}),m.filter(function(v){return v.parentNode==f.domNode}).sort(function(v,y){return v===y?0:v.compareDocumentPosition(y)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1}).forEach(function(v){var y=null;v.nextSibling!=null&&(y=p.find(v.nextSibling));var b=d(v);b.next==y&&b.next!=null||(b.parent!=null&&b.parent.removeChild(f),f.insertBefore(b,y||void 0))})},a}(s.default);function d(u){var a=p.find(u);if(a==null)try{a=p.create(u)}catch{a=p.create(p.Scope.INLINE),[].slice.call(u.childNodes).forEach(function(h){a.domNode.appendChild(h)}),u.parentNode&&u.parentNode.replaceChild(a.domNode,u),a.attach()}return a}e.default=c},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,a){u.__proto__=a}||function(u,a){for(var l in a)a.hasOwnProperty(l)&&(u[l]=a[l])},function(u,a){function l(){this.constructor=u}i(u,a),u.prototype=a===null?Object.create(a):(l.prototype=a.prototype,new l)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(12),s=t(31),p=t(17),c=t(1),d=function(u){function a(l){var h=u.call(this,l)||this;return h.attributes=new s.default(h.domNode),h}return r(a,u),a.formats=function(l){return typeof this.tagName=="string"||(Array.isArray(this.tagName)?l.tagName.toLowerCase():void 0)},a.prototype.format=function(l,h){var f=c.query(l);f instanceof n.default?this.attributes.attribute(f,h):h&&(f==null||l===this.statics.blotName&&this.formats()[l]===h||this.replaceWith(l,h))},a.prototype.formats=function(){var l=this.attributes.values(),h=this.statics.formats(this.domNode);return h!=null&&(l[this.statics.blotName]=h),l},a.prototype.replaceWith=function(l,h){var f=u.prototype.replaceWith.call(this,l,h);return this.attributes.copy(f),f},a.prototype.update=function(l,h){var f=this;u.prototype.update.call(this,l,h),l.some(function(m){return m.target===f.domNode&&m.type==="attributes"})&&this.attributes.build()},a.prototype.wrap=function(l,h){var f=u.prototype.wrap.call(this,l,h);return f instanceof a&&f.statics.scope===this.statics.scope&&this.attributes.move(f),f},a}(p.default);e.default=d},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var u in d)d.hasOwnProperty(u)&&(c[u]=d[u])},function(c,d){function u(){this.constructor=c}i(c,d),c.prototype=d===null?Object.create(d):(u.prototype=d.prototype,new u)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(30),s=t(1),p=function(c){function d(){return c!==null&&c.apply(this,arguments)||this}return r(d,c),d.value=function(u){return!0},d.prototype.index=function(u,a){return this.domNode===u||this.domNode.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(a,1):-1},d.prototype.position=function(u,a){var l=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return u>0&&(l+=1),[this.parent.domNode,l]},d.prototype.value=function(){var u;return(u={})[this.statics.blotName]=this.statics.value(this.domNode)||!0,u},d.scope=s.Scope.INLINE_BLOT,d}(n.default);e.default=p},function(o,e,t){var i=t(11),r=t(3),n={attributes:{compose:function(p,c,d){typeof p!="object"&&(p={}),typeof c!="object"&&(c={});var u=r(!0,{},c);for(var a in d||(u=Object.keys(u).reduce(function(l,h){return u[h]!=null&&(l[h]=u[h]),l},{})),p)p[a]!==void 0&&c[a]===void 0&&(u[a]=p[a]);return Object.keys(u).length>0?u:void 0},diff:function(p,c){typeof p!="object"&&(p={}),typeof c!="object"&&(c={});var d=Object.keys(p).concat(Object.keys(c)).reduce(function(u,a){return i(p[a],c[a])||(u[a]=c[a]===void 0?null:c[a]),u},{});return Object.keys(d).length>0?d:void 0},transform:function(p,c,d){if(typeof p!="object")return c;if(typeof c=="object"){if(!d)return c;var u=Object.keys(c).reduce(function(a,l){return p[l]===void 0&&(a[l]=c[l]),a},{});return Object.keys(u).length>0?u:void 0}}},iterator:function(p){return new s(p)},length:function(p){return typeof p.delete=="number"?p.delete:typeof p.retain=="number"?p.retain:typeof p.insert=="string"?p.insert.length:1}};function s(p){this.ops=p,this.index=0,this.offset=0}s.prototype.hasNext=function(){return this.peekLength()<1/0},s.prototype.next=function(p){p||(p=1/0);var c=this.ops[this.index];if(c){var d=this.offset,u=n.length(c);if(p>=u-d?(p=u-d,this.index+=1,this.offset=0):this.offset+=p,typeof c.delete=="number")return{delete:p};var a={};return c.attributes&&(a.attributes=c.attributes),typeof c.retain=="number"?a.retain=p:typeof c.insert=="string"?a.insert=c.insert.substr(d,p):a.insert=c.insert,a}return{retain:1/0}},s.prototype.peek=function(){return this.ops[this.index]},s.prototype.peekLength=function(){return this.ops[this.index]?n.length(this.ops[this.index])-this.offset:1/0},s.prototype.peekType=function(){return this.ops[this.index]?typeof this.ops[this.index].delete=="number"?"delete":typeof this.ops[this.index].retain=="number"?"retain":"insert":"retain"},s.prototype.rest=function(){if(this.hasNext()){if(this.offset===0)return this.ops.slice(this.index);var p=this.offset,c=this.index,d=this.next(),u=this.ops.slice(this.index);return this.offset=p,this.index=c,[d].concat(u)}return[]},o.exports=n},function(o,e){var t=function(){function i(u,a){return a!=null&&u instanceof a}var r,n,s;try{r=Map}catch{r=function(){}}try{n=Set}catch{n=function(){}}try{s=Promise}catch{s=function(){}}function p(u,a,l,h,f){typeof a=="object"&&(l=a.depth,h=a.prototype,f=a.includeNonEnumerable,a=a.circular);var m=[],g=[],v=typeof Buffer!="undefined";return a===void 0&&(a=!0),l===void 0&&(l=1/0),function y(b,x){if(b===null)return null;if(x===0)return b;var w,E;if(typeof b!="object")return b;if(i(b,r))w=new r;else if(i(b,n))w=new n;else if(i(b,s))w=new s(function(P,T){b.then(function(L){P(y(L,x-1))},function(L){T(y(L,x-1))})});else if(p.__isArray(b))w=[];else if(p.__isRegExp(b))w=new RegExp(b.source,d(b)),b.lastIndex&&(w.lastIndex=b.lastIndex);else if(p.__isDate(b))w=new Date(b.getTime());else{if(v&&Buffer.isBuffer(b))return w=Buffer.allocUnsafe?Buffer.allocUnsafe(b.length):new Buffer(b.length),b.copy(w),w;i(b,Error)?w=Object.create(b):h===void 0?(E=Object.getPrototypeOf(b),w=Object.create(E)):(w=Object.create(h),E=h)}if(a){var S=m.indexOf(b);if(S!=-1)return g[S];m.push(b),g.push(w)}for(var k in i(b,r)&&b.forEach(function(P,T){var L=y(T,x-1),$=y(P,x-1);w.set(L,$)}),i(b,n)&&b.forEach(function(P){var T=y(P,x-1);w.add(T)}),b){var N;E&&(N=Object.getOwnPropertyDescriptor(E,k)),N&&N.set==null||(w[k]=y(b[k],x-1))}if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(b);for(k=0;k<_.length;k++){var O=_[k];(!(q=Object.getOwnPropertyDescriptor(b,O))||q.enumerable||f)&&(w[O]=y(b[O],x-1),q.enumerable||Object.defineProperty(w,O,{enumerable:!1}))}}if(f){var A=Object.getOwnPropertyNames(b);for(k=0;k<A.length;k++){var q,I=A[k];(q=Object.getOwnPropertyDescriptor(b,I))&&q.enumerable||(w[I]=y(b[I],x-1),Object.defineProperty(w,I,{enumerable:!1}))}}return w}(u,l)}function c(u){return Object.prototype.toString.call(u)}function d(u){var a="";return u.global&&(a+="g"),u.ignoreCase&&(a+="i"),u.multiline&&(a+="m"),a}return p.clonePrototype=function(u){if(u===null)return null;var a=function(){};return a.prototype=u,new a},p.__objToStr=c,p.__isDate=function(u){return typeof u=="object"&&c(u)==="[object Date]"},p.__isArray=function(u){return typeof u=="object"&&c(u)==="[object Array]"},p.__isRegExp=function(u){return typeof u=="object"&&c(u)==="[object RegExp]"},p.__getRegExpFlags=d,p}();typeof o=="object"&&o.exports&&(o.exports=t)},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(g,v){if(Array.isArray(g))return g;if(Symbol.iterator in Object(g))return function(y,b){var x=[],w=!0,E=!1,S=void 0;try{for(var k,N=y[Symbol.iterator]();!(w=(k=N.next()).done)&&(x.push(k.value),!b||x.length!==b);w=!0);}catch(_){E=!0,S=_}finally{try{!w&&N.return&&N.return()}finally{if(E)throw S}}return x}(g,v);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function g(v,y){for(var b=0;b<y.length;b++){var x=y[b];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(v,x.key,x)}}return function(v,y,b){return y&&g(v.prototype,y),b&&g(v,b),v}}(),n=function g(v,y,b){v===null&&(v=Function.prototype);var x=Object.getOwnPropertyDescriptor(v,y);if(x===void 0){var w=Object.getPrototypeOf(v);return w===null?void 0:g(w,y,b)}if("value"in x)return x.value;var E=x.get;return E!==void 0?E.call(b):void 0},s=h(t(0)),p=h(t(8)),c=t(4),d=h(c),u=h(t(16)),a=h(t(13)),l=h(t(25));function h(g){return g&&g.__esModule?g:{default:g}}function f(g){return g instanceof d.default||g instanceof c.BlockEmbed}var m=function(g){function v(y,b){(function(w,E){if(!(w instanceof E))throw new TypeError("Cannot call a class as a function")})(this,v);var x=function(w,E){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!E||typeof E!="object"&&typeof E!="function"?w:E}(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,y));return x.emitter=b.emitter,Array.isArray(b.whitelist)&&(x.whitelist=b.whitelist.reduce(function(w,E){return w[E]=!0,w},{})),x.domNode.addEventListener("DOMNodeInserted",function(){}),x.optimize(),x.enable(),x}return function(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(y,b):y.__proto__=b)}(v,g),r(v,[{key:"batchStart",value:function(){this.batch=!0}},{key:"batchEnd",value:function(){this.batch=!1,this.optimize()}},{key:"deleteAt",value:function(y,b){var x=this.line(y),w=i(x,2),E=w[0],S=w[1],k=this.line(y+b),N=i(k,1)[0];if(n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"deleteAt",this).call(this,y,b),N!=null&&E!==N&&S>0){if(E instanceof c.BlockEmbed||N instanceof c.BlockEmbed)return void this.optimize();if(E instanceof a.default){var _=E.newlineIndex(E.length(),!0);if(_>-1&&(E=E.split(_+1))===N)return void this.optimize()}else if(N instanceof a.default){var O=N.newlineIndex(0);O>-1&&N.split(O+1)}var A=N.children.head instanceof u.default?null:N.children.head;E.moveChildren(N,A),E.remove()}this.optimize()}},{key:"enable",value:function(){var y=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];this.domNode.setAttribute("contenteditable",y)}},{key:"formatAt",value:function(y,b,x,w){(this.whitelist==null||this.whitelist[x])&&(n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"formatAt",this).call(this,y,b,x,w),this.optimize())}},{key:"insertAt",value:function(y,b,x){if(x==null||this.whitelist==null||this.whitelist[b]){if(y>=this.length())if(x==null||s.default.query(b,s.default.Scope.BLOCK)==null){var w=s.default.create(this.statics.defaultChild);this.appendChild(w),x==null&&b.endsWith(`
`)&&(b=b.slice(0,-1)),w.insertAt(0,b,x)}else{var E=s.default.create(b,x);this.appendChild(E)}else n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"insertAt",this).call(this,y,b,x);this.optimize()}}},{key:"insertBefore",value:function(y,b){if(y.statics.scope===s.default.Scope.INLINE_BLOT){var x=s.default.create(this.statics.defaultChild);x.appendChild(y),y=x}n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"insertBefore",this).call(this,y,b)}},{key:"leaf",value:function(y){return this.path(y).pop()||[null,-1]}},{key:"line",value:function(y){return y===this.length()?this.line(y-1):this.descendant(f,y)}},{key:"lines",value:function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE,x=function w(E,S,k){var N=[],_=k;return E.children.forEachAt(S,k,function(O,A,q){f(O)?N.push(O):O instanceof s.default.Container&&(N=N.concat(w(O,A,_))),_-=q}),N};return x(this,y,b)}},{key:"optimize",value:function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.batch!==!0&&(n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"optimize",this).call(this,y,b),y.length>0&&this.emitter.emit(p.default.events.SCROLL_OPTIMIZE,y,b))}},{key:"path",value:function(y){return n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"path",this).call(this,y).slice(1)}},{key:"update",value:function(y){if(this.batch!==!0){var b=p.default.sources.USER;typeof y=="string"&&(b=y),Array.isArray(y)||(y=this.observer.takeRecords()),y.length>0&&this.emitter.emit(p.default.events.SCROLL_BEFORE_UPDATE,b,y),n(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"update",this).call(this,y.concat([])),y.length>0&&this.emitter.emit(p.default.events.SCROLL_UPDATE,b,y)}}}]),v}(s.default.Scroll);m.blotName="scroll",m.className="ql-editor",m.tagName="DIV",m.defaultChild="block",m.allowedChildren=[d.default,c.BlockEmbed,l.default],e.default=m},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.SHORTKEY=e.default=void 0;var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},r=function(A,q){if(Array.isArray(A))return A;if(Symbol.iterator in Object(A))return function(I,P){var T=[],L=!0,$=!1,V=void 0;try{for(var J,we=I[Symbol.iterator]();!(L=(J=we.next()).done)&&(T.push(J.value),!P||T.length!==P);L=!0);}catch(R){$=!0,V=R}finally{try{!L&&we.return&&we.return()}finally{if($)throw V}}return T}(A,q);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function A(q,I){for(var P=0;P<I.length;P++){var T=I[P];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(q,T.key,T)}}return function(q,I,P){return I&&A(q.prototype,I),P&&A(q,P),q}}(),s=m(t(21)),p=m(t(11)),c=m(t(3)),d=m(t(2)),u=m(t(20)),a=m(t(0)),l=m(t(5)),h=m(t(10)),f=m(t(9));function m(A){return A&&A.__esModule?A:{default:A}}function g(A,q,I){return q in A?Object.defineProperty(A,q,{value:I,enumerable:!0,configurable:!0,writable:!0}):A[q]=I,A}var v=(0,h.default)("quill:keyboard"),y=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey",b=function(A){function q(I,P){(function(L,$){if(!(L instanceof $))throw new TypeError("Cannot call a class as a function")})(this,q);var T=function(L,$){if(!L)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!$||typeof $!="object"&&typeof $!="function"?L:$}(this,(q.__proto__||Object.getPrototypeOf(q)).call(this,I,P));return T.bindings={},Object.keys(T.options.bindings).forEach(function(L){(L!=="list autofill"||I.scroll.whitelist==null||I.scroll.whitelist.list)&&T.options.bindings[L]&&T.addBinding(T.options.bindings[L])}),T.addBinding({key:q.keys.ENTER,shiftKey:null},k),T.addBinding({key:q.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},function(){}),/Firefox/i.test(navigator.userAgent)?(T.addBinding({key:q.keys.BACKSPACE},{collapsed:!0},w),T.addBinding({key:q.keys.DELETE},{collapsed:!0},E)):(T.addBinding({key:q.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/},w),T.addBinding({key:q.keys.DELETE},{collapsed:!0,suffix:/^.?$/},E)),T.addBinding({key:q.keys.BACKSPACE},{collapsed:!1},S),T.addBinding({key:q.keys.DELETE},{collapsed:!1},S),T.addBinding({key:q.keys.BACKSPACE,altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},w),T.listen(),T}return function(I,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof P);I.prototype=Object.create(P&&P.prototype,{constructor:{value:I,enumerable:!1,writable:!0,configurable:!0}}),P&&(Object.setPrototypeOf?Object.setPrototypeOf(I,P):I.__proto__=P)}(q,A),n(q,null,[{key:"match",value:function(I,P){return P=O(P),!["altKey","ctrlKey","metaKey","shiftKey"].some(function(T){return!!P[T]!==I[T]&&P[T]!==null})&&P.key===(I.which||I.keyCode)}}]),n(q,[{key:"addBinding",value:function(I){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},L=O(I);if(L==null||L.key==null)return v.warn("Attempted to add invalid keyboard binding",L);typeof P=="function"&&(P={handler:P}),typeof T=="function"&&(T={handler:T}),L=(0,c.default)(L,P,T),this.bindings[L.key]=this.bindings[L.key]||[],this.bindings[L.key].push(L)}},{key:"listen",value:function(){var I=this;this.quill.root.addEventListener("keydown",function(P){if(!P.defaultPrevented){var T=P.which||P.keyCode,L=(I.bindings[T]||[]).filter(function(be){return q.match(P,be)});if(L.length!==0){var $=I.quill.getSelection();if($!=null&&I.quill.hasFocus()){var V=I.quill.getLine($.index),J=r(V,2),we=J[0],R=J[1],M=I.quill.getLeaf($.index),F=r(M,2),z=F[0],B=F[1],ie=$.length===0?[z,B]:I.quill.getLeaf($.index+$.length),oe=r(ie,2),ae=oe[0],Ne=oe[1],ve=z instanceof a.default.Text?z.value().slice(0,B):"",at=ae instanceof a.default.Text?ae.value().slice(Ne):"",Oe={collapsed:$.length===0,empty:$.length===0&&we.length()<=1,format:I.quill.getFormat($),offset:R,prefix:ve,suffix:at};L.some(function(be){if(be.collapsed!=null&&be.collapsed!==Oe.collapsed||be.empty!=null&&be.empty!==Oe.empty||be.offset!=null&&be.offset!==Oe.offset)return!1;if(Array.isArray(be.format)){if(be.format.every(function(ze){return Oe.format[ze]==null}))return!1}else if(i(be.format)==="object"&&!Object.keys(be.format).every(function(ze){return be.format[ze]===!0?Oe.format[ze]!=null:be.format[ze]===!1?Oe.format[ze]==null:(0,p.default)(be.format[ze],Oe.format[ze])}))return!1;return!(be.prefix!=null&&!be.prefix.test(Oe.prefix)||be.suffix!=null&&!be.suffix.test(Oe.suffix)||be.handler.call(I,$,Oe)===!0)})&&P.preventDefault()}}}})}}]),q}(f.default);function x(A,q){var I,P=A===b.keys.LEFT?"prefix":"suffix";return g(I={key:A,shiftKey:q,altKey:null},P,/^$/),g(I,"handler",function(T){var L=T.index;A===b.keys.RIGHT&&(L+=T.length+1);var $=this.quill.getLeaf(L);return!(r($,1)[0]instanceof a.default.Embed&&(A===b.keys.LEFT?q?this.quill.setSelection(T.index-1,T.length+1,l.default.sources.USER):this.quill.setSelection(T.index-1,l.default.sources.USER):q?this.quill.setSelection(T.index,T.length+1,l.default.sources.USER):this.quill.setSelection(T.index+T.length+1,l.default.sources.USER),1))}),I}function w(A,q){if(!(A.index===0||this.quill.getLength()<=1)){var I=this.quill.getLine(A.index),P=r(I,1)[0],T={};if(q.offset===0){var L=this.quill.getLine(A.index-1),$=r(L,1)[0];if($!=null&&$.length()>1){var V=P.formats(),J=this.quill.getFormat(A.index-1,1);T=u.default.attributes.diff(V,J)||{}}}var we=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(q.prefix)?2:1;this.quill.deleteText(A.index-we,we,l.default.sources.USER),Object.keys(T).length>0&&this.quill.formatLine(A.index-we,we,T,l.default.sources.USER),this.quill.focus()}}function E(A,q){var I=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(q.suffix)?2:1;if(!(A.index>=this.quill.getLength()-I)){var P={},T=0,L=this.quill.getLine(A.index),$=r(L,1)[0];if(q.offset>=$.length()-1){var V=this.quill.getLine(A.index+1),J=r(V,1)[0];if(J){var we=$.formats(),R=this.quill.getFormat(A.index,1);P=u.default.attributes.diff(we,R)||{},T=J.length()}}this.quill.deleteText(A.index,I,l.default.sources.USER),Object.keys(P).length>0&&this.quill.formatLine(A.index+T-1,I,P,l.default.sources.USER)}}function S(A){var q=this.quill.getLines(A),I={};if(q.length>1){var P=q[0].formats(),T=q[q.length-1].formats();I=u.default.attributes.diff(T,P)||{}}this.quill.deleteText(A,l.default.sources.USER),Object.keys(I).length>0&&this.quill.formatLine(A.index,1,I,l.default.sources.USER),this.quill.setSelection(A.index,l.default.sources.SILENT),this.quill.focus()}function k(A,q){var I=this;A.length>0&&this.quill.scroll.deleteAt(A.index,A.length);var P=Object.keys(q.format).reduce(function(T,L){return a.default.query(L,a.default.Scope.BLOCK)&&!Array.isArray(q.format[L])&&(T[L]=q.format[L]),T},{});this.quill.insertText(A.index,`
`,P,l.default.sources.USER),this.quill.setSelection(A.index+1,l.default.sources.SILENT),this.quill.focus(),Object.keys(q.format).forEach(function(T){P[T]==null&&(Array.isArray(q.format[T])||T!=="link"&&I.quill.format(T,q.format[T],l.default.sources.USER))})}function N(A){return{key:b.keys.TAB,shiftKey:!A,format:{"code-block":!0},handler:function(q){var I=a.default.query("code-block"),P=q.index,T=q.length,L=this.quill.scroll.descendant(I,P),$=r(L,2),V=$[0],J=$[1];if(V!=null){var we=this.quill.getIndex(V),R=V.newlineIndex(J,!0)+1,M=V.newlineIndex(we+J+T),F=V.domNode.textContent.slice(R,M).split(`
`);J=0,F.forEach(function(z,B){A?(V.insertAt(R+J,I.TAB),J+=I.TAB.length,B===0?P+=I.TAB.length:T+=I.TAB.length):z.startsWith(I.TAB)&&(V.deleteAt(R+J,I.TAB.length),J-=I.TAB.length,B===0?P-=I.TAB.length:T-=I.TAB.length),J+=z.length+1}),this.quill.update(l.default.sources.USER),this.quill.setSelection(P,T,l.default.sources.SILENT)}}}}function _(A){return{key:A[0].toUpperCase(),shortKey:!0,handler:function(q,I){this.quill.format(A,!I.format[A],l.default.sources.USER)}}}function O(A){if(typeof A=="string"||typeof A=="number")return O({key:A});if((A===void 0?"undefined":i(A))==="object"&&(A=(0,s.default)(A,!1)),typeof A.key=="string")if(b.keys[A.key.toUpperCase()]!=null)A.key=b.keys[A.key.toUpperCase()];else{if(A.key.length!==1)return null;A.key=A.key.toUpperCase().charCodeAt(0)}return A.shortKey&&(A[y]=A.shortKey,delete A.shortKey),A}b.keys={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},b.DEFAULTS={bindings:{bold:_("bold"),italic:_("italic"),underline:_("underline"),indent:{key:b.keys.TAB,format:["blockquote","indent","list"],handler:function(A,q){if(q.collapsed&&q.offset!==0)return!0;this.quill.format("indent","+1",l.default.sources.USER)}},outdent:{key:b.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],handler:function(A,q){if(q.collapsed&&q.offset!==0)return!0;this.quill.format("indent","-1",l.default.sources.USER)}},"outdent backspace":{key:b.keys.BACKSPACE,collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler:function(A,q){q.format.indent!=null?this.quill.format("indent","-1",l.default.sources.USER):q.format.list!=null&&this.quill.format("list",!1,l.default.sources.USER)}},"indent code-block":N(!0),"outdent code-block":N(!1),"remove tab":{key:b.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,handler:function(A){this.quill.deleteText(A.index-1,1,l.default.sources.USER)}},tab:{key:b.keys.TAB,handler:function(A){this.quill.history.cutoff();var q=new d.default().retain(A.index).delete(A.length).insert("	");this.quill.updateContents(q,l.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(A.index+1,l.default.sources.SILENT)}},"list empty enter":{key:b.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function(A,q){this.quill.format("list",!1,l.default.sources.USER),q.format.indent&&this.quill.format("indent",!1,l.default.sources.USER)}},"checklist enter":{key:b.keys.ENTER,collapsed:!0,format:{list:"checked"},handler:function(A){var q=this.quill.getLine(A.index),I=r(q,2),P=I[0],T=I[1],L=(0,c.default)({},P.formats(),{list:"checked"}),$=new d.default().retain(A.index).insert(`
`,L).retain(P.length()-T-1).retain(1,{list:"unchecked"});this.quill.updateContents($,l.default.sources.USER),this.quill.setSelection(A.index+1,l.default.sources.SILENT),this.quill.scrollIntoView()}},"header enter":{key:b.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,handler:function(A,q){var I=this.quill.getLine(A.index),P=r(I,2),T=P[0],L=P[1],$=new d.default().retain(A.index).insert(`
`,q.format).retain(T.length()-L-1).retain(1,{header:null});this.quill.updateContents($,l.default.sources.USER),this.quill.setSelection(A.index+1,l.default.sources.SILENT),this.quill.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler:function(A,q){var I=q.prefix.length,P=this.quill.getLine(A.index),T=r(P,2),L=T[0],$=T[1];if($>I)return!0;var V=void 0;switch(q.prefix.trim()){case"[]":case"[ ]":V="unchecked";break;case"[x]":V="checked";break;case"-":case"*":V="bullet";break;default:V="ordered"}this.quill.insertText(A.index," ",l.default.sources.USER),this.quill.history.cutoff();var J=new d.default().retain(A.index-$).delete(I+1).retain(L.length()-2-$).retain(1,{list:V});this.quill.updateContents(J,l.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(A.index-I,l.default.sources.SILENT)}},"code exit":{key:b.keys.ENTER,collapsed:!0,format:["code-block"],prefix:/\n\n$/,suffix:/^\s+$/,handler:function(A){var q=this.quill.getLine(A.index),I=r(q,2),P=I[0],T=I[1],L=new d.default().retain(A.index+P.length()-T-2).retain(1,{"code-block":null}).delete(1);this.quill.updateContents(L,l.default.sources.USER)}},"embed left":x(b.keys.LEFT,!1),"embed left shift":x(b.keys.LEFT,!0),"embed right":x(b.keys.RIGHT,!1),"embed right shift":x(b.keys.RIGHT,!0)}},e.default=b,e.SHORTKEY=y},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(u,a){if(Array.isArray(u))return u;if(Symbol.iterator in Object(u))return function(l,h){var f=[],m=!0,g=!1,v=void 0;try{for(var y,b=l[Symbol.iterator]();!(m=(y=b.next()).done)&&(f.push(y.value),!h||f.length!==h);m=!0);}catch(x){g=!0,v=x}finally{try{!m&&b.return&&b.return()}finally{if(g)throw v}}return f}(u,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function u(a,l,h){a===null&&(a=Function.prototype);var f=Object.getOwnPropertyDescriptor(a,l);if(f===void 0){var m=Object.getPrototypeOf(a);return m===null?void 0:u(m,l,h)}if("value"in f)return f.value;var g=f.get;return g!==void 0?g.call(h):void 0},n=function(){function u(a,l){for(var h=0;h<l.length;h++){var f=l[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(a,f.key,f)}}return function(a,l,h){return l&&u(a.prototype,l),h&&u(a,h),a}}(),s=c(t(0)),p=c(t(7));function c(u){return u&&u.__esModule?u:{default:u}}var d=function(u){function a(l,h){(function(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")})(this,a);var f=function(m,g){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!g||typeof g!="object"&&typeof g!="function"?m:g}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return f.selection=h,f.textNode=document.createTextNode(a.CONTENTS),f.domNode.appendChild(f.textNode),f._length=0,f}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,u),n(a,null,[{key:"value",value:function(){}}]),n(a,[{key:"detach",value:function(){this.parent!=null&&this.parent.removeChild(this)}},{key:"format",value:function(l,h){if(this._length!==0)return r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"format",this).call(this,l,h);for(var f=this,m=0;f!=null&&f.statics.scope!==s.default.Scope.BLOCK_BLOT;)m+=f.offset(f.parent),f=f.parent;f!=null&&(this._length=a.CONTENTS.length,f.optimize(),f.formatAt(m,a.CONTENTS.length,l,h),this._length=0)}},{key:"index",value:function(l,h){return l===this.textNode?0:r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"index",this).call(this,l,h)}},{key:"length",value:function(){return this._length}},{key:"position",value:function(){return[this.textNode,this.textNode.data.length]}},{key:"remove",value:function(){r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"remove",this).call(this),this.parent=null}},{key:"restore",value:function(){if(!this.selection.composing&&this.parent!=null){var l=this.textNode,h=this.selection.getNativeRange(),f=void 0,m=void 0,g=void 0;if(h!=null&&h.start.node===l&&h.end.node===l){var v=[l,h.start.offset,h.end.offset];f=v[0],m=v[1],g=v[2]}for(;this.domNode.lastChild!=null&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);if(this.textNode.data!==a.CONTENTS){var y=this.textNode.data.split(a.CONTENTS).join("");this.next instanceof p.default?(f=this.next.domNode,this.next.insertAt(0,y),this.textNode.data=a.CONTENTS):(this.textNode.data=y,this.parent.insertBefore(s.default.create(this.textNode),this),this.textNode=document.createTextNode(a.CONTENTS),this.domNode.appendChild(this.textNode))}if(this.remove(),m!=null){var b=[m,g].map(function(w){return Math.max(0,Math.min(f.data.length,w-1))}),x=i(b,2);return m=x[0],g=x[1],{startNode:f,startOffset:m,endNode:f,endOffset:g}}}}},{key:"update",value:function(l,h){var f=this;if(l.some(function(g){return g.type==="characterData"&&g.target===f.textNode})){var m=this.restore();m&&(h.range=m)}}},{key:"value",value:function(){return""}}]),a}(s.default.Embed);d.blotName="cursor",d.className="ql-cursor",d.tagName="span",d.CONTENTS="\uFEFF",e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=s(t(0)),r=t(4),n=s(r);function s(u){return u&&u.__esModule?u:{default:u}}function p(u,a){if(!(u instanceof a))throw new TypeError("Cannot call a class as a function")}function c(u,a){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?u:a}var d=function(u){function a(){return p(this,a),c(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,u),a}(i.default.Container);d.allowedChildren=[n.default,r.BlockEmbed,d],e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.ColorStyle=e.ColorClass=e.ColorAttributor=void 0;var i,r=function(){function h(f,m){for(var g=0;g<m.length;g++){var v=m[g];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(f,v.key,v)}}return function(f,m,g){return m&&h(f.prototype,m),g&&h(f,g),f}}(),n=function h(f,m,g){f===null&&(f=Function.prototype);var v=Object.getOwnPropertyDescriptor(f,m);if(v===void 0){var y=Object.getPrototypeOf(f);return y===null?void 0:h(y,m,g)}if("value"in v)return v.value;var b=v.get;return b!==void 0?b.call(g):void 0},s=t(0),p=(i=s)&&i.__esModule?i:{default:i};function c(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function d(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}var u=function(h){function f(){return c(this,f),d(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments))}return function(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}(f,h),r(f,[{key:"value",value:function(m){var g=n(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"value",this).call(this,m);return g.startsWith("rgb(")?(g=g.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),"#"+g.split(",").map(function(v){return("00"+parseInt(v).toString(16)).slice(-2)}).join("")):g}}]),f}(p.default.Attributor.Style),a=new p.default.Attributor.Class("color","ql-color",{scope:p.default.Scope.INLINE}),l=new u("color","color",{scope:p.default.Scope.INLINE});e.ColorAttributor=u,e.ColorClass=a,e.ColorStyle=l},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.sanitize=e.default=void 0;var i,r=function(){function a(l,h){for(var f=0;f<h.length;f++){var m=h[f];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(l,m.key,m)}}return function(l,h,f){return h&&a(l.prototype,h),f&&a(l,f),l}}(),n=function a(l,h,f){l===null&&(l=Function.prototype);var m=Object.getOwnPropertyDescriptor(l,h);if(m===void 0){var g=Object.getPrototypeOf(l);return g===null?void 0:a(g,h,f)}if("value"in m)return m.value;var v=m.get;return v!==void 0?v.call(f):void 0},s=t(6);function p(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}function c(a,l){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||typeof l!="object"&&typeof l!="function"?a:l}var d=function(a){function l(){return p(this,l),c(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return function(h,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);h.prototype=Object.create(f&&f.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(h,f):h.__proto__=f)}(l,a),r(l,[{key:"format",value:function(h,f){if(h!==this.statics.blotName||!f)return n(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"format",this).call(this,h,f);f=this.constructor.sanitize(f),this.domNode.setAttribute("href",f)}}],[{key:"create",value:function(h){var f=n(l.__proto__||Object.getPrototypeOf(l),"create",this).call(this,h);return h=this.sanitize(h),f.setAttribute("href",h),f.setAttribute("rel","noopener noreferrer"),f.setAttribute("target","_blank"),f}},{key:"formats",value:function(h){return h.getAttribute("href")}},{key:"sanitize",value:function(h){return u(h,this.PROTOCOL_WHITELIST)?h:this.SANITIZED_URL}}]),l}(((i=s)&&i.__esModule?i:{default:i}).default);function u(a,l){var h=document.createElement("a");h.href=a;var f=h.href.slice(0,h.href.indexOf(":"));return l.indexOf(f)>-1}d.blotName="link",d.tagName="A",d.SANITIZED_URL="about:blank",d.PROTOCOL_WHITELIST=["http","https","mailto","tel"],e.default=d,e.sanitize=u},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r=function(){function a(l,h){for(var f=0;f<h.length;f++){var m=h[f];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(l,m.key,m)}}return function(l,h,f){return h&&a(l.prototype,h),f&&a(l,f),l}}(),n=p(t(23)),s=p(t(107));function p(a){return a&&a.__esModule?a:{default:a}}var c=0;function d(a,l){a.setAttribute(l,a.getAttribute(l)!=="true")}var u=function(){function a(l){var h=this;(function(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")})(this,a),this.select=l,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("mousedown",function(){h.togglePicker()}),this.label.addEventListener("keydown",function(f){switch(f.keyCode){case n.default.keys.ENTER:h.togglePicker();break;case n.default.keys.ESCAPE:h.escape(),f.preventDefault()}}),this.select.addEventListener("change",this.update.bind(this))}return r(a,[{key:"togglePicker",value:function(){this.container.classList.toggle("ql-expanded"),d(this.label,"aria-expanded"),d(this.options,"aria-hidden")}},{key:"buildItem",value:function(l){var h=this,f=document.createElement("span");return f.tabIndex="0",f.setAttribute("role","button"),f.classList.add("ql-picker-item"),l.hasAttribute("value")&&f.setAttribute("data-value",l.getAttribute("value")),l.textContent&&f.setAttribute("data-label",l.textContent),f.addEventListener("click",function(){h.selectItem(f,!0)}),f.addEventListener("keydown",function(m){switch(m.keyCode){case n.default.keys.ENTER:h.selectItem(f,!0),m.preventDefault();break;case n.default.keys.ESCAPE:h.escape(),m.preventDefault()}}),f}},{key:"buildLabel",value:function(){var l=document.createElement("span");return l.classList.add("ql-picker-label"),l.innerHTML=s.default,l.tabIndex="0",l.setAttribute("role","button"),l.setAttribute("aria-expanded","false"),this.container.appendChild(l),l}},{key:"buildOptions",value:function(){var l=this,h=document.createElement("span");h.classList.add("ql-picker-options"),h.setAttribute("aria-hidden","true"),h.tabIndex="-1",h.id="ql-picker-options-"+c,c+=1,this.label.setAttribute("aria-controls",h.id),this.options=h,[].slice.call(this.select.options).forEach(function(f){var m=l.buildItem(f);h.appendChild(m),f.selected===!0&&l.selectItem(m)}),this.container.appendChild(h)}},{key:"buildPicker",value:function(){var l=this;[].slice.call(this.select.attributes).forEach(function(h){l.container.setAttribute(h.name,h.value)}),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}},{key:"escape",value:function(){var l=this;this.close(),setTimeout(function(){return l.label.focus()},1)}},{key:"close",value:function(){this.container.classList.remove("ql-expanded"),this.label.setAttribute("aria-expanded","false"),this.options.setAttribute("aria-hidden","true")}},{key:"selectItem",value:function(l){var h=arguments.length>1&&arguments[1]!==void 0&&arguments[1],f=this.container.querySelector(".ql-selected");if(l!==f&&(f!=null&&f.classList.remove("ql-selected"),l!=null&&(l.classList.add("ql-selected"),this.select.selectedIndex=[].indexOf.call(l.parentNode.children,l),l.hasAttribute("data-value")?this.label.setAttribute("data-value",l.getAttribute("data-value")):this.label.removeAttribute("data-value"),l.hasAttribute("data-label")?this.label.setAttribute("data-label",l.getAttribute("data-label")):this.label.removeAttribute("data-label"),h))){if(typeof Event=="function")this.select.dispatchEvent(new Event("change"));else if((typeof Event=="undefined"?"undefined":i(Event))==="object"){var m=document.createEvent("Event");m.initEvent("change",!0,!0),this.select.dispatchEvent(m)}this.close()}}},{key:"update",value:function(){var l=void 0;if(this.select.selectedIndex>-1){var h=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];l=this.select.options[this.select.selectedIndex],this.selectItem(h)}else this.selectItem(null);var f=l!=null&&l!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",f)}}]),a}();e.default=u},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=v(t(0)),r=v(t(5)),n=t(4),s=v(n),p=v(t(16)),c=v(t(25)),d=v(t(24)),u=v(t(35)),a=v(t(6)),l=v(t(22)),h=v(t(7)),f=v(t(55)),m=v(t(42)),g=v(t(23));function v(y){return y&&y.__esModule?y:{default:y}}r.default.register({"blots/block":s.default,"blots/block/embed":n.BlockEmbed,"blots/break":p.default,"blots/container":c.default,"blots/cursor":d.default,"blots/embed":u.default,"blots/inline":a.default,"blots/scroll":l.default,"blots/text":h.default,"modules/clipboard":f.default,"modules/history":m.default,"modules/keyboard":g.default}),i.default.register(s.default,p.default,d.default,a.default,l.default,h.default),e.default=r.default},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=t(1),r=function(){function n(s){this.domNode=s,this.domNode[i.DATA_KEY]={blot:this}}return Object.defineProperty(n.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),n.create=function(s){if(this.tagName==null)throw new i.ParchmentError("Blot definition missing tagName");var p;return Array.isArray(this.tagName)?(typeof s=="string"&&(s=s.toUpperCase(),parseInt(s).toString()===s&&(s=parseInt(s))),p=typeof s=="number"?document.createElement(this.tagName[s-1]):this.tagName.indexOf(s)>-1?document.createElement(s):document.createElement(this.tagName[0])):p=document.createElement(this.tagName),this.className&&p.classList.add(this.className),p},n.prototype.attach=function(){this.parent!=null&&(this.scroll=this.parent.scroll)},n.prototype.clone=function(){var s=this.domNode.cloneNode(!1);return i.create(s)},n.prototype.detach=function(){this.parent!=null&&this.parent.removeChild(this),delete this.domNode[i.DATA_KEY]},n.prototype.deleteAt=function(s,p){this.isolate(s,p).remove()},n.prototype.formatAt=function(s,p,c,d){var u=this.isolate(s,p);if(i.query(c,i.Scope.BLOT)!=null&&d)u.wrap(c,d);else if(i.query(c,i.Scope.ATTRIBUTE)!=null){var a=i.create(this.statics.scope);u.wrap(a),a.format(c,d)}},n.prototype.insertAt=function(s,p,c){var d=c==null?i.create("text",p):i.create(p,c),u=this.split(s);this.parent.insertBefore(d,u)},n.prototype.insertInto=function(s,p){p===void 0&&(p=null),this.parent!=null&&this.parent.children.remove(this);var c=null;s.children.insertBefore(this,p),p!=null&&(c=p.domNode),this.domNode.parentNode==s.domNode&&this.domNode.nextSibling==c||s.domNode.insertBefore(this.domNode,c),this.parent=s,this.attach()},n.prototype.isolate=function(s,p){var c=this.split(s);return c.split(p),c},n.prototype.length=function(){return 1},n.prototype.offset=function(s){return s===void 0&&(s=this.parent),this.parent==null||this==s?0:this.parent.children.offset(this)+this.parent.offset(s)},n.prototype.optimize=function(s){this.domNode[i.DATA_KEY]!=null&&delete this.domNode[i.DATA_KEY].mutations},n.prototype.remove=function(){this.domNode.parentNode!=null&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},n.prototype.replace=function(s){s.parent!=null&&(s.parent.insertBefore(this,s.next),s.remove())},n.prototype.replaceWith=function(s,p){var c=typeof s=="string"?i.create(s,p):s;return c.replace(this),c},n.prototype.split=function(s,p){return s===0?this:this.next},n.prototype.update=function(s,p){},n.prototype.wrap=function(s,p){var c=typeof s=="string"?i.create(s,p):s;return this.parent!=null&&this.parent.insertBefore(c,this.next),c.appendChild(this),c},n.blotName="abstract",n}();e.default=r},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=t(12),r=t(32),n=t(33),s=t(1),p=function(){function c(d){this.attributes={},this.domNode=d,this.build()}return c.prototype.attribute=function(d,u){u?d.add(this.domNode,u)&&(d.value(this.domNode)!=null?this.attributes[d.attrName]=d:delete this.attributes[d.attrName]):(d.remove(this.domNode),delete this.attributes[d.attrName])},c.prototype.build=function(){var d=this;this.attributes={};var u=i.default.keys(this.domNode),a=r.default.keys(this.domNode),l=n.default.keys(this.domNode);u.concat(a).concat(l).forEach(function(h){var f=s.query(h,s.Scope.ATTRIBUTE);f instanceof i.default&&(d.attributes[f.attrName]=f)})},c.prototype.copy=function(d){var u=this;Object.keys(this.attributes).forEach(function(a){var l=u.attributes[a].value(u.domNode);d.format(a,l)})},c.prototype.move=function(d){var u=this;this.copy(d),Object.keys(this.attributes).forEach(function(a){u.attributes[a].remove(u.domNode)}),this.attributes={}},c.prototype.values=function(){var d=this;return Object.keys(this.attributes).reduce(function(u,a){return u[a]=d.attributes[a].value(d.domNode),u},{})},c}();e.default=p},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,c){p.__proto__=c}||function(p,c){for(var d in c)c.hasOwnProperty(d)&&(p[d]=c[d])},function(p,c){function d(){this.constructor=p}i(p,c),p.prototype=c===null?Object.create(c):(d.prototype=c.prototype,new d)});function n(p,c){return(p.getAttribute("class")||"").split(/\s+/).filter(function(d){return d.indexOf(c+"-")===0})}Object.defineProperty(e,"__esModule",{value:!0});var s=function(p){function c(){return p!==null&&p.apply(this,arguments)||this}return r(c,p),c.keys=function(d){return(d.getAttribute("class")||"").split(/\s+/).map(function(u){return u.split("-").slice(0,-1).join("-")})},c.prototype.add=function(d,u){return!!this.canAdd(d,u)&&(this.remove(d),d.classList.add(this.keyName+"-"+u),!0)},c.prototype.remove=function(d){n(d,this.keyName).forEach(function(u){d.classList.remove(u)}),d.classList.length===0&&d.removeAttribute("class")},c.prototype.value=function(d){var u=(n(d,this.keyName)[0]||"").slice(this.keyName.length+1);return this.canAdd(d,u)?u:""},c}(t(12).default);e.default=s},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,c){p.__proto__=c}||function(p,c){for(var d in c)c.hasOwnProperty(d)&&(p[d]=c[d])},function(p,c){function d(){this.constructor=p}i(p,c),p.prototype=c===null?Object.create(c):(d.prototype=c.prototype,new d)});function n(p){var c=p.split("-"),d=c.slice(1).map(function(u){return u[0].toUpperCase()+u.slice(1)}).join("");return c[0]+d}Object.defineProperty(e,"__esModule",{value:!0});var s=function(p){function c(){return p!==null&&p.apply(this,arguments)||this}return r(c,p),c.keys=function(d){return(d.getAttribute("style")||"").split(";").map(function(u){return u.split(":")[0].trim()})},c.prototype.add=function(d,u){return!!this.canAdd(d,u)&&(d.style[n(this.keyName)]=u,!0)},c.prototype.remove=function(d){d.style[n(this.keyName)]="",d.getAttribute("style")||d.removeAttribute("style")},c.prototype.value=function(d){var u=d.style[n(this.keyName)];return this.canAdd(d,u)?u:""},c}(t(12).default);e.default=s},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function n(s,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(s,d.key,d)}}return function(s,p,c){return p&&n(s.prototype,p),c&&n(s,c),s}}(),r=function(){function n(s,p){(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")})(this,n),this.quill=s,this.options=p,this.modules={}}return i(n,[{key:"init",value:function(){var s=this;Object.keys(this.options.modules).forEach(function(p){s.modules[p]==null&&s.addModule(p)})}},{key:"addModule",value:function(s){var p=this.quill.constructor.import("modules/"+s);return this.modules[s]=new p(this.quill,this.options.modules[s]||{}),this.modules[s]}}]),n}();r.DEFAULTS={modules:{}},r.themes={default:r},e.default=r},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function u(a,l){for(var h=0;h<l.length;h++){var f=l[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(a,f.key,f)}}return function(a,l,h){return l&&u(a.prototype,l),h&&u(a,h),a}}(),r=function u(a,l,h){a===null&&(a=Function.prototype);var f=Object.getOwnPropertyDescriptor(a,l);if(f===void 0){var m=Object.getPrototypeOf(a);return m===null?void 0:u(m,l,h)}if("value"in f)return f.value;var g=f.get;return g!==void 0?g.call(h):void 0},n=p(t(0)),s=p(t(7));function p(u){return u&&u.__esModule?u:{default:u}}var c="\uFEFF",d=function(u){function a(l){(function(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")})(this,a);var h=function(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return h.contentNode=document.createElement("span"),h.contentNode.setAttribute("contenteditable",!1),[].slice.call(h.domNode.childNodes).forEach(function(f){h.contentNode.appendChild(f)}),h.leftGuard=document.createTextNode(c),h.rightGuard=document.createTextNode(c),h.domNode.appendChild(h.leftGuard),h.domNode.appendChild(h.contentNode),h.domNode.appendChild(h.rightGuard),h}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,u),i(a,[{key:"index",value:function(l,h){return l===this.leftGuard?0:l===this.rightGuard?1:r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"index",this).call(this,l,h)}},{key:"restore",value:function(l){var h=void 0,f=void 0,m=l.data.split(c).join("");if(l===this.leftGuard)if(this.prev instanceof s.default){var g=this.prev.length();this.prev.insertAt(g,m),h={startNode:this.prev.domNode,startOffset:g+m.length}}else f=document.createTextNode(m),this.parent.insertBefore(n.default.create(f),this),h={startNode:f,startOffset:m.length};else l===this.rightGuard&&(this.next instanceof s.default?(this.next.insertAt(0,m),h={startNode:this.next.domNode,startOffset:m.length}):(f=document.createTextNode(m),this.parent.insertBefore(n.default.create(f),this.next),h={startNode:f,startOffset:m.length}));return l.data=c,h}},{key:"update",value:function(l,h){var f=this;l.forEach(function(m){if(m.type==="characterData"&&(m.target===f.leftGuard||m.target===f.rightGuard)){var g=f.restore(m.target);g&&(h.range=g)}})}}]),a}(n.default.Embed);e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.AlignStyle=e.AlignClass=e.AlignAttribute=void 0;var i,r=t(0),n=(i=r)&&i.__esModule?i:{default:i},s={scope:n.default.Scope.BLOCK,whitelist:["right","center","justify"]},p=new n.default.Attributor.Attribute("align","align",s),c=new n.default.Attributor.Class("align","ql-align",s),d=new n.default.Attributor.Style("align","text-align",s);e.AlignAttribute=p,e.AlignClass=c,e.AlignStyle=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.BackgroundStyle=e.BackgroundClass=void 0;var i,r=t(0),n=(i=r)&&i.__esModule?i:{default:i},s=t(26),p=new n.default.Attributor.Class("background","ql-bg",{scope:n.default.Scope.INLINE}),c=new s.ColorAttributor("background","background-color",{scope:n.default.Scope.INLINE});e.BackgroundClass=p,e.BackgroundStyle=c},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.DirectionStyle=e.DirectionClass=e.DirectionAttribute=void 0;var i,r=t(0),n=(i=r)&&i.__esModule?i:{default:i},s={scope:n.default.Scope.BLOCK,whitelist:["rtl"]},p=new n.default.Attributor.Attribute("direction","dir",s),c=new n.default.Attributor.Class("direction","ql-direction",s),d=new n.default.Attributor.Style("direction","direction",s);e.DirectionAttribute=p,e.DirectionClass=c,e.DirectionStyle=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.FontClass=e.FontStyle=void 0;var i,r=function(){function f(m,g){for(var v=0;v<g.length;v++){var y=g[v];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}return function(m,g,v){return g&&f(m.prototype,g),v&&f(m,v),m}}(),n=function f(m,g,v){m===null&&(m=Function.prototype);var y=Object.getOwnPropertyDescriptor(m,g);if(y===void 0){var b=Object.getPrototypeOf(m);return b===null?void 0:f(b,g,v)}if("value"in y)return y.value;var x=y.get;return x!==void 0?x.call(v):void 0},s=t(0),p=(i=s)&&i.__esModule?i:{default:i};function c(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")}function d(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}var u={scope:p.default.Scope.INLINE,whitelist:["serif","monospace"]},a=new p.default.Attributor.Class("font","ql-font",u),l=function(f){function m(){return c(this,m),d(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return function(g,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);g.prototype=Object.create(v&&v.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(g,v):g.__proto__=v)}(m,f),r(m,[{key:"value",value:function(g){return n(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"value",this).call(this,g).replace(/["']/g,"")}}]),m}(p.default.Attributor.Style),h=new l("font","font-family",u);e.FontStyle=h,e.FontClass=a},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.SizeStyle=e.SizeClass=void 0;var i,r=t(0),n=(i=r)&&i.__esModule?i:{default:i},s=new n.default.Attributor.Class("size","ql-size",{scope:n.default.Scope.INLINE,whitelist:["small","large","huge"]}),p=new n.default.Attributor.Style("size","font-size",{scope:n.default.Scope.INLINE,whitelist:["10px","18px","32px"]});e.SizeClass=s,e.SizeStyle=p},function(o,e,t){o.exports={align:{"":t(76),center:t(77),right:t(78),justify:t(79)},background:t(80),blockquote:t(81),bold:t(82),clean:t(83),code:t(58),"code-block":t(58),color:t(84),direction:{"":t(85),rtl:t(86)},float:{center:t(87),full:t(88),left:t(89),right:t(90)},formula:t(91),header:{1:t(92),2:t(93)},italic:t(94),image:t(95),indent:{"+1":t(96),"-1":t(97)},link:t(98),list:{ordered:t(99),bullet:t(100),check:t(101)},script:{sub:t(102),super:t(103)},strike:t(104),underline:t(105),video:t(106)}},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.getLastChangeIndex=e.default=void 0;var i=function(){function d(u,a){for(var l=0;l<a.length;l++){var h=a[l];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(u,h.key,h)}}return function(u,a,l){return a&&d(u.prototype,a),l&&d(u,l),u}}(),r=s(t(0)),n=s(t(5));function s(d){return d&&d.__esModule?d:{default:d}}var p=function(d){function u(a,l){(function(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")})(this,u);var h=function(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,a,l));return h.lastRecorded=0,h.ignoreChange=!1,h.clear(),h.quill.on(n.default.events.EDITOR_CHANGE,function(f,m,g,v){f!==n.default.events.TEXT_CHANGE||h.ignoreChange||(h.options.userOnly&&v!==n.default.sources.USER?h.transform(m):h.record(m,g))}),h.quill.keyboard.addBinding({key:"Z",shortKey:!0},h.undo.bind(h)),h.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},h.redo.bind(h)),/Win/i.test(navigator.platform)&&h.quill.keyboard.addBinding({key:"Y",shortKey:!0},h.redo.bind(h)),h}return function(a,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);a.prototype=Object.create(l&&l.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(a,l):a.__proto__=l)}(u,d),i(u,[{key:"change",value:function(a,l){if(this.stack[a].length!==0){var h=this.stack[a].pop();this.stack[l].push(h),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(h[a],n.default.sources.USER),this.ignoreChange=!1;var f=c(h[a]);this.quill.setSelection(f)}}},{key:"clear",value:function(){this.stack={undo:[],redo:[]}}},{key:"cutoff",value:function(){this.lastRecorded=0}},{key:"record",value:function(a,l){if(a.ops.length!==0){this.stack.redo=[];var h=this.quill.getContents().diff(l),f=Date.now();if(this.lastRecorded+this.options.delay>f&&this.stack.undo.length>0){var m=this.stack.undo.pop();h=h.compose(m.undo),a=m.redo.compose(a)}else this.lastRecorded=f;this.stack.undo.push({redo:a,undo:h}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}}},{key:"redo",value:function(){this.change("redo","undo")}},{key:"transform",value:function(a){this.stack.undo.forEach(function(l){l.undo=a.transform(l.undo,!0),l.redo=a.transform(l.redo,!0)}),this.stack.redo.forEach(function(l){l.undo=a.transform(l.undo,!0),l.redo=a.transform(l.redo,!0)})}},{key:"undo",value:function(){this.change("undo","redo")}}]),u}(s(t(9)).default);function c(d){var u=d.reduce(function(l,h){return l+=h.delete||0},0),a=d.length()-u;return function(l){var h=l.ops[l.ops.length-1];return h!=null&&(h.insert!=null?typeof h.insert=="string"&&h.insert.endsWith(`
`):h.attributes!=null&&Object.keys(h.attributes).some(function(f){return r.default.query(f,r.default.Scope.BLOCK)!=null}))}(d)&&(a-=1),a}p.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1},e.default=p,e.getLastChangeIndex=c},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BaseTooltip=void 0;var i=function(){function _(O,A){for(var q=0;q<A.length;q++){var I=A[q];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(O,I.key,I)}}return function(O,A,q){return A&&_(O.prototype,A),q&&_(O,q),O}}(),r=function _(O,A,q){O===null&&(O=Function.prototype);var I=Object.getOwnPropertyDescriptor(O,A);if(I===void 0){var P=Object.getPrototypeOf(O);return P===null?void 0:_(P,A,q)}if("value"in I)return I.value;var T=I.get;return T!==void 0?T.call(q):void 0},n=f(t(3)),s=f(t(2)),p=f(t(8)),c=f(t(23)),d=f(t(34)),u=f(t(59)),a=f(t(60)),l=f(t(28)),h=f(t(61));function f(_){return _&&_.__esModule?_:{default:_}}function m(_,O){if(!(_ instanceof O))throw new TypeError("Cannot call a class as a function")}function g(_,O){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!O||typeof O!="object"&&typeof O!="function"?_:O}function v(_,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof O);_.prototype=Object.create(O&&O.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),O&&(Object.setPrototypeOf?Object.setPrototypeOf(_,O):_.__proto__=O)}var y=[!1,"center","right","justify"],b=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],x=[!1,"serif","monospace"],w=["1","2","3",!1],E=["small",!1,"large","huge"],S=function(_){function O(A,q){m(this,O);var I=g(this,(O.__proto__||Object.getPrototypeOf(O)).call(this,A,q));return A.emitter.listenDOM("click",document.body,function P(T){if(!document.body.contains(A.root))return document.body.removeEventListener("click",P);I.tooltip==null||I.tooltip.root.contains(T.target)||document.activeElement===I.tooltip.textbox||I.quill.hasFocus()||I.tooltip.hide(),I.pickers!=null&&I.pickers.forEach(function(L){L.container.contains(T.target)||L.close()})}),I}return v(O,_),i(O,[{key:"addModule",value:function(A){var q=r(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"addModule",this).call(this,A);return A==="toolbar"&&this.extendToolbar(q),q}},{key:"buildButtons",value:function(A,q){A.forEach(function(I){(I.getAttribute("class")||"").split(/\s+/).forEach(function(P){if(P.startsWith("ql-")&&(P=P.slice(3),q[P]!=null))if(P==="direction")I.innerHTML=q[P][""]+q[P].rtl;else if(typeof q[P]=="string")I.innerHTML=q[P];else{var T=I.value||"";T!=null&&q[P][T]&&(I.innerHTML=q[P][T])}})})}},{key:"buildPickers",value:function(A,q){var I=this;this.pickers=A.map(function(P){if(P.classList.contains("ql-align"))return P.querySelector("option")==null&&N(P,y),new a.default(P,q.align);if(P.classList.contains("ql-background")||P.classList.contains("ql-color")){var T=P.classList.contains("ql-background")?"background":"color";return P.querySelector("option")==null&&N(P,b,T==="background"?"#ffffff":"#000000"),new u.default(P,q[T])}return P.querySelector("option")==null&&(P.classList.contains("ql-font")?N(P,x):P.classList.contains("ql-header")?N(P,w):P.classList.contains("ql-size")&&N(P,E)),new l.default(P)}),this.quill.on(p.default.events.EDITOR_CHANGE,function(){I.pickers.forEach(function(P){P.update()})})}}]),O}(d.default);S.DEFAULTS=(0,n.default)(!0,{},d.default.DEFAULTS,{modules:{toolbar:{handlers:{formula:function(){this.quill.theme.tooltip.edit("formula")},image:function(){var _=this,O=this.container.querySelector("input.ql-image[type=file]");O==null&&((O=document.createElement("input")).setAttribute("type","file"),O.setAttribute("accept","image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),O.classList.add("ql-image"),O.addEventListener("change",function(){if(O.files!=null&&O.files[0]!=null){var A=new FileReader;A.onload=function(q){var I=_.quill.getSelection(!0);_.quill.updateContents(new s.default().retain(I.index).delete(I.length).insert({image:q.target.result}),p.default.sources.USER),_.quill.setSelection(I.index+1,p.default.sources.SILENT),O.value=""},A.readAsDataURL(O.files[0])}}),this.container.appendChild(O)),O.click()},video:function(){this.quill.theme.tooltip.edit("video")}}}}});var k=function(_){function O(A,q){m(this,O);var I=g(this,(O.__proto__||Object.getPrototypeOf(O)).call(this,A,q));return I.textbox=I.root.querySelector('input[type="text"]'),I.listen(),I}return v(O,_),i(O,[{key:"listen",value:function(){var A=this;this.textbox.addEventListener("keydown",function(q){c.default.match(q,"enter")?(A.save(),q.preventDefault()):c.default.match(q,"escape")&&(A.cancel(),q.preventDefault())})}},{key:"cancel",value:function(){this.hide()}},{key:"edit",value:function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"link",q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),q!=null?this.textbox.value=q:A!==this.root.getAttribute("data-mode")&&(this.textbox.value=""),this.position(this.quill.getBounds(this.quill.selection.savedRange)),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute("data-"+A)||""),this.root.setAttribute("data-mode",A)}},{key:"restoreFocus",value:function(){var A=this.quill.scrollingContainer.scrollTop;this.quill.focus(),this.quill.scrollingContainer.scrollTop=A}},{key:"save",value:function(){var A,q,I=this.textbox.value;switch(this.root.getAttribute("data-mode")){case"link":var P=this.quill.root.scrollTop;this.linkRange?(this.quill.formatText(this.linkRange,"link",I,p.default.sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",I,p.default.sources.USER)),this.quill.root.scrollTop=P;break;case"video":q=(A=I).match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||A.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/),I=q?(q[1]||"https")+"://www.youtube.com/embed/"+q[2]+"?showinfo=0":(q=A.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))?(q[1]||"https")+"://player.vimeo.com/video/"+q[2]+"/":A;case"formula":if(!I)break;var T=this.quill.getSelection(!0);if(T!=null){var L=T.index+T.length;this.quill.insertEmbed(L,this.root.getAttribute("data-mode"),I,p.default.sources.USER),this.root.getAttribute("data-mode")==="formula"&&this.quill.insertText(L+1," ",p.default.sources.USER),this.quill.setSelection(L+2,p.default.sources.USER)}}this.textbox.value="",this.hide()}}]),O}(h.default);function N(_,O){var A=arguments.length>2&&arguments[2]!==void 0&&arguments[2];O.forEach(function(q){var I=document.createElement("option");q===A?I.setAttribute("selected","selected"):I.setAttribute("value",q),_.appendChild(I)})}e.BaseTooltip=k,e.default=S},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function r(){this.head=this.tail=null,this.length=0}return r.prototype.append=function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];this.insertBefore(n[0],null),n.length>1&&this.append.apply(this,n.slice(1))},r.prototype.contains=function(n){for(var s,p=this.iterator();s=p();)if(s===n)return!0;return!1},r.prototype.insertBefore=function(n,s){n&&(n.next=s,s!=null?(n.prev=s.prev,s.prev!=null&&(s.prev.next=n),s.prev=n,s===this.head&&(this.head=n)):this.tail!=null?(this.tail.next=n,n.prev=this.tail,this.tail=n):(n.prev=null,this.head=this.tail=n),this.length+=1)},r.prototype.offset=function(n){for(var s=0,p=this.head;p!=null;){if(p===n)return s;s+=p.length(),p=p.next}return-1},r.prototype.remove=function(n){this.contains(n)&&(n.prev!=null&&(n.prev.next=n.next),n.next!=null&&(n.next.prev=n.prev),n===this.head&&(this.head=n.next),n===this.tail&&(this.tail=n.prev),this.length-=1)},r.prototype.iterator=function(n){return n===void 0&&(n=this.head),function(){var s=n;return n!=null&&(n=n.next),s}},r.prototype.find=function(n,s){s===void 0&&(s=!1);for(var p,c=this.iterator();p=c();){var d=p.length();if(n<d||s&&n===d&&(p.next==null||p.next.length()!==0))return[p,n];n-=d}return[null,0]},r.prototype.forEach=function(n){for(var s,p=this.iterator();s=p();)n(s)},r.prototype.forEachAt=function(n,s,p){if(!(s<=0))for(var c,d=this.find(n),u=d[0],a=n-d[1],l=this.iterator(u);(c=l())&&a<n+s;){var h=c.length();n>a?p(c,n-a,Math.min(s,a+h-n)):p(c,0,Math.min(h,n+s-a)),a+=h}},r.prototype.map=function(n){return this.reduce(function(s,p){return s.push(n(p)),s},[])},r.prototype.reduce=function(n,s){for(var p,c=this.iterator();p=c();)s=n(s,p);return s},r}();e.default=i},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,u){d.__proto__=u}||function(d,u){for(var a in u)u.hasOwnProperty(a)&&(d[a]=u[a])},function(d,u){function a(){this.constructor=d}i(d,u),d.prototype=u===null?Object.create(u):(a.prototype=u.prototype,new a)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(17),s=t(1),p={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},c=function(d){function u(a){var l=d.call(this,a)||this;return l.scroll=l,l.observer=new MutationObserver(function(h){l.update(h)}),l.observer.observe(l.domNode,p),l.attach(),l}return r(u,d),u.prototype.detach=function(){d.prototype.detach.call(this),this.observer.disconnect()},u.prototype.deleteAt=function(a,l){this.update(),a===0&&l===this.length()?this.children.forEach(function(h){h.remove()}):d.prototype.deleteAt.call(this,a,l)},u.prototype.formatAt=function(a,l,h,f){this.update(),d.prototype.formatAt.call(this,a,l,h,f)},u.prototype.insertAt=function(a,l,h){this.update(),d.prototype.insertAt.call(this,a,l,h)},u.prototype.optimize=function(a,l){var h=this;a===void 0&&(a=[]),l===void 0&&(l={}),d.prototype.optimize.call(this,l);for(var f=[].slice.call(this.observer.takeRecords());f.length>0;)a.push(f.pop());for(var m=function(b,x){x===void 0&&(x=!0),b!=null&&b!==h&&b.domNode.parentNode!=null&&(b.domNode[s.DATA_KEY].mutations==null&&(b.domNode[s.DATA_KEY].mutations=[]),x&&m(b.parent))},g=function(b){b.domNode[s.DATA_KEY]!=null&&b.domNode[s.DATA_KEY].mutations!=null&&(b instanceof n.default&&b.children.forEach(g),b.optimize(l))},v=a,y=0;v.length>0;y+=1){if(y>=100)throw new Error("[Parchment] Maximum optimize iterations reached");for(v.forEach(function(b){var x=s.find(b.target,!0);x!=null&&(x.domNode===b.target&&(b.type==="childList"?(m(s.find(b.previousSibling,!1)),[].forEach.call(b.addedNodes,function(w){var E=s.find(w,!1);m(E,!1),E instanceof n.default&&E.children.forEach(function(S){m(S,!1)})})):b.type==="attributes"&&m(x.prev)),m(x))}),this.children.forEach(g),f=(v=[].slice.call(this.observer.takeRecords())).slice();f.length>0;)a.push(f.pop())}},u.prototype.update=function(a,l){var h=this;l===void 0&&(l={}),(a=a||this.observer.takeRecords()).map(function(f){var m=s.find(f.target,!0);return m==null?null:m.domNode[s.DATA_KEY].mutations==null?(m.domNode[s.DATA_KEY].mutations=[f],m):(m.domNode[s.DATA_KEY].mutations.push(f),null)}).forEach(function(f){f!=null&&f!==h&&f.domNode[s.DATA_KEY]!=null&&f.update(f.domNode[s.DATA_KEY].mutations||[],l)}),this.domNode[s.DATA_KEY].mutations!=null&&d.prototype.update.call(this,this.domNode[s.DATA_KEY].mutations,l),this.optimize(a,l)},u.blotName="scroll",u.defaultChild="block",u.scope=s.Scope.BLOCK_BLOT,u.tagName="DIV",u}(n.default);e.default=c},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var u in d)d.hasOwnProperty(u)&&(c[u]=d[u])},function(c,d){function u(){this.constructor=c}i(c,d),c.prototype=d===null?Object.create(d):(u.prototype=d.prototype,new u)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(18),s=t(1),p=function(c){function d(){return c!==null&&c.apply(this,arguments)||this}return r(d,c),d.formats=function(u){if(u.tagName!==d.tagName)return c.formats.call(this,u)},d.prototype.format=function(u,a){var l=this;u!==this.statics.blotName||a?c.prototype.format.call(this,u,a):(this.children.forEach(function(h){h instanceof n.default||(h=h.wrap(d.blotName,!0)),l.attributes.copy(h)}),this.unwrap())},d.prototype.formatAt=function(u,a,l,h){this.formats()[l]!=null||s.query(l,s.Scope.ATTRIBUTE)?this.isolate(u,a).format(l,h):c.prototype.formatAt.call(this,u,a,l,h)},d.prototype.optimize=function(u){c.prototype.optimize.call(this,u);var a=this.formats();if(Object.keys(a).length===0)return this.unwrap();var l=this.next;l instanceof d&&l.prev===this&&function(h,f){if(Object.keys(h).length!==Object.keys(f).length)return!1;for(var m in h)if(h[m]!==f[m])return!1;return!0}(a,l.formats())&&(l.moveChildren(this),l.remove())},d.blotName="inline",d.scope=s.Scope.INLINE_BLOT,d.tagName="SPAN",d}(n.default);e.default=p},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var u in d)d.hasOwnProperty(u)&&(c[u]=d[u])},function(c,d){function u(){this.constructor=c}i(c,d),c.prototype=d===null?Object.create(d):(u.prototype=d.prototype,new u)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(18),s=t(1),p=function(c){function d(){return c!==null&&c.apply(this,arguments)||this}return r(d,c),d.formats=function(u){var a=s.query(d.blotName).tagName;if(u.tagName!==a)return c.formats.call(this,u)},d.prototype.format=function(u,a){s.query(u,s.Scope.BLOCK)!=null&&(u!==this.statics.blotName||a?c.prototype.format.call(this,u,a):this.replaceWith(d.blotName))},d.prototype.formatAt=function(u,a,l,h){s.query(l,s.Scope.BLOCK)!=null?this.format(l,h):c.prototype.formatAt.call(this,u,a,l,h)},d.prototype.insertAt=function(u,a,l){if(l==null||s.query(a,s.Scope.INLINE)!=null)c.prototype.insertAt.call(this,u,a,l);else{var h=this.split(u),f=s.create(a,l);h.parent.insertBefore(f,h)}},d.prototype.update=function(u,a){navigator.userAgent.match(/Trident/)?this.build():c.prototype.update.call(this,u,a)},d.blotName="block",d.scope=s.Scope.BLOCK_BLOT,d.tagName="P",d}(n.default);e.default=p},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,p){s.__proto__=p}||function(s,p){for(var c in p)p.hasOwnProperty(c)&&(s[c]=p[c])},function(s,p){function c(){this.constructor=s}i(s,p),s.prototype=p===null?Object.create(p):(c.prototype=p.prototype,new c)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(s){function p(){return s!==null&&s.apply(this,arguments)||this}return r(p,s),p.formats=function(c){},p.prototype.format=function(c,d){s.prototype.formatAt.call(this,0,this.length(),c,d)},p.prototype.formatAt=function(c,d,u,a){c===0&&d===this.length()?this.format(u,a):s.prototype.formatAt.call(this,c,d,u,a)},p.prototype.formats=function(){return this.statics.formats(this.domNode)},p}(t(19).default);e.default=n},function(o,e,t){var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var u in d)d.hasOwnProperty(u)&&(c[u]=d[u])},function(c,d){function u(){this.constructor=c}i(c,d),c.prototype=d===null?Object.create(d):(u.prototype=d.prototype,new u)});Object.defineProperty(e,"__esModule",{value:!0});var n=t(19),s=t(1),p=function(c){function d(u){var a=c.call(this,u)||this;return a.text=a.statics.value(a.domNode),a}return r(d,c),d.create=function(u){return document.createTextNode(u)},d.value=function(u){var a=u.data;return a.normalize&&(a=a.normalize()),a},d.prototype.deleteAt=function(u,a){this.domNode.data=this.text=this.text.slice(0,u)+this.text.slice(u+a)},d.prototype.index=function(u,a){return this.domNode===u?a:-1},d.prototype.insertAt=function(u,a,l){l==null?(this.text=this.text.slice(0,u)+a+this.text.slice(u),this.domNode.data=this.text):c.prototype.insertAt.call(this,u,a,l)},d.prototype.length=function(){return this.text.length},d.prototype.optimize=function(u){c.prototype.optimize.call(this,u),this.text=this.statics.value(this.domNode),this.text.length===0?this.remove():this.next instanceof d&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},d.prototype.position=function(u,a){return[this.domNode,u]},d.prototype.split=function(u,a){if(a===void 0&&(a=!1),!a){if(u===0)return this;if(u===this.length())return this.next}var l=s.create(this.domNode.splitText(u));return this.parent.insertBefore(l,this.next),this.text=this.statics.value(this.domNode),l},d.prototype.update=function(u,a){var l=this;u.some(function(h){return h.type==="characterData"&&h.target===l.domNode})&&(this.text=this.statics.value(this.domNode))},d.prototype.value=function(){return this.text},d.blotName="text",d.scope=s.Scope.INLINE_BLOT,d}(n.default);e.default=p},function(o,e,t){var i=document.createElement("div");if(i.classList.toggle("test-class",!1),i.classList.contains("test-class")){var r=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(n,s){return arguments.length>1&&!this.contains(n)==!s?s:r.call(this,n)}}String.prototype.startsWith||(String.prototype.startsWith=function(n,s){return s=s||0,this.substr(s,n.length)===n}),String.prototype.endsWith||(String.prototype.endsWith=function(n,s){var p=this.toString();(typeof s!="number"||!isFinite(s)||Math.floor(s)!==s||s>p.length)&&(s=p.length),s-=n.length;var c=p.indexOf(n,s);return c!==-1&&c===s}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(n){if(this===null)throw new TypeError("Array.prototype.find called on null or undefined");if(typeof n!="function")throw new TypeError("predicate must be a function");for(var s,p=Object(this),c=p.length>>>0,d=arguments[1],u=0;u<c;u++)if(s=p[u],n.call(d,s,u,p))return s}}),document.addEventListener("DOMContentLoaded",function(){document.execCommand("enableObjectResizing",!1,!1),document.execCommand("autoUrlDetect",!1,!1)})},function(o,e){var t=-1;function i(u,a,l){if(u==a)return u?[[0,u]]:[];(l<0||u.length<l)&&(l=null);var h=n(u,a),f=u.substring(0,h);h=s(u=u.substring(h),a=a.substring(h));var m=u.substring(u.length-h),g=function(v,y){var b;if(!v)return[[1,y]];if(!y)return[[t,v]];var x=v.length>y.length?v:y,w=v.length>y.length?y:v,E=x.indexOf(w);if(E!=-1)return b=[[1,x.substring(0,E)],[0,w],[1,x.substring(E+w.length)]],v.length>y.length&&(b[0][0]=b[2][0]=t),b;if(w.length==1)return[[t,v],[1,y]];var S=function(P,T){var L=P.length>T.length?P:T,$=P.length>T.length?T:P;if(L.length<4||2*$.length<L.length)return null;function V(oe,ae,Ne){for(var ve,at,Oe,be,ze=oe.substring(Ne,Ne+Math.floor(oe.length/4)),je=-1,lt="";(je=ae.indexOf(ze,je+1))!=-1;){var Ut=n(oe.substring(Ne),ae.substring(je)),We=s(oe.substring(0,Ne),ae.substring(0,je));lt.length<We+Ut&&(lt=ae.substring(je-We,je)+ae.substring(je,je+Ut),ve=oe.substring(0,Ne-We),at=oe.substring(Ne+Ut),Oe=ae.substring(0,je-We),be=ae.substring(je+Ut))}return 2*lt.length>=oe.length?[ve,at,Oe,be,lt]:null}var J,we,R,M,F,z=V(L,$,Math.ceil(L.length/4)),B=V(L,$,Math.ceil(L.length/2));if(!z&&!B)return null;J=B?z&&z[4].length>B[4].length?z:B:z,P.length>T.length?(we=J[0],R=J[1],M=J[2],F=J[3]):(M=J[0],F=J[1],we=J[2],R=J[3]);var ie=J[4];return[we,R,M,F,ie]}(v,y);if(S){var k=S[0],N=S[1],_=S[2],O=S[3],A=S[4],q=i(k,_),I=i(N,O);return q.concat([[0,A]],I)}return function(P,T){for(var L=P.length,$=T.length,V=Math.ceil((L+$)/2),J=V,we=2*V,R=new Array(we),M=new Array(we),F=0;F<we;F++)R[F]=-1,M[F]=-1;R[J+1]=0,M[J+1]=0;for(var z=L-$,B=z%2!=0,ie=0,oe=0,ae=0,Ne=0,ve=0;ve<V;ve++){for(var at=-ve+ie;at<=ve-oe;at+=2){for(var Oe=J+at,be=(We=at==-ve||at!=ve&&R[Oe-1]<R[Oe+1]?R[Oe+1]:R[Oe-1]+1)-at;We<L&&be<$&&P.charAt(We)==T.charAt(be);)We++,be++;if(R[Oe]=We,We>L)oe+=2;else if(be>$)ie+=2;else if(B&&(lt=J+z-at)>=0&&lt<we&&M[lt]!=-1&&We>=(je=L-M[lt]))return r(P,T,We,be)}for(var ze=-ve+ae;ze<=ve-Ne;ze+=2){for(var je,lt=J+ze,Ut=(je=ze==-ve||ze!=ve&&M[lt-1]<M[lt+1]?M[lt+1]:M[lt-1]+1)-ze;je<L&&Ut<$&&P.charAt(L-je-1)==T.charAt($-Ut-1);)je++,Ut++;if(M[lt]=je,je>L)Ne+=2;else if(Ut>$)ae+=2;else if(!B){var We;if((Oe=J+z-ze)>=0&&Oe<we&&R[Oe]!=-1&&(be=J+(We=R[Oe])-Oe,We>=(je=L-je)))return r(P,T,We,be)}}}return[[t,P],[1,T]]}(v,y)}(u=u.substring(0,u.length-h),a=a.substring(0,a.length-h));return f&&g.unshift([0,f]),m&&g.push([0,m]),p(g),l!=null&&(g=function(v,y){var b=function(N,_){if(_===0)return[0,N];for(var O=0,A=0;A<N.length;A++){var q=N[A];if(q[0]===t||q[0]===0){var I=O+q[1].length;if(_===I)return[A+1,N];if(_<I){N=N.slice();var P=_-O,T=[q[0],q[1].slice(0,P)],L=[q[0],q[1].slice(P)];return N.splice(A,1,T,L),[A+1,N]}O=I}}throw new Error("cursor_pos is out of bounds!")}(v,y),x=b[1],w=b[0],E=x[w],S=x[w+1];if(E==null||E[0]!==0)return v;if(S!=null&&E[1]+S[1]===S[1]+E[1])return x.splice(w,2,S,E),d(x,w,2);if(S!=null&&S[1].indexOf(E[1])===0){x.splice(w,2,[S[0],E[1]],[0,E[1]]);var k=S[1].slice(E[1].length);return k.length>0&&x.splice(w+2,0,[S[0],k]),d(x,w,3)}return v}(g,l)),g=function(v){for(var y=!1,b=function(S){return S.charCodeAt(0)>=56320&&S.charCodeAt(0)<=57343},x=function(S){return S.charCodeAt(S.length-1)>=55296&&S.charCodeAt(S.length-1)<=56319},w=2;w<v.length;w+=1)v[w-2][0]===0&&x(v[w-2][1])&&v[w-1][0]===t&&b(v[w-1][1])&&v[w][0]===1&&b(v[w][1])&&(y=!0,v[w-1][1]=v[w-2][1].slice(-1)+v[w-1][1],v[w][1]=v[w-2][1].slice(-1)+v[w][1],v[w-2][1]=v[w-2][1].slice(0,-1));if(!y)return v;var E=[];for(w=0;w<v.length;w+=1)v[w][1].length>0&&E.push(v[w]);return E}(g),g}function r(u,a,l,h){var f=u.substring(0,l),m=a.substring(0,h),g=u.substring(l),v=a.substring(h),y=i(f,m),b=i(g,v);return y.concat(b)}function n(u,a){if(!u||!a||u.charAt(0)!=a.charAt(0))return 0;for(var l=0,h=Math.min(u.length,a.length),f=h,m=0;l<f;)u.substring(m,f)==a.substring(m,f)?m=l=f:h=f,f=Math.floor((h-l)/2+l);return f}function s(u,a){if(!u||!a||u.charAt(u.length-1)!=a.charAt(a.length-1))return 0;for(var l=0,h=Math.min(u.length,a.length),f=h,m=0;l<f;)u.substring(u.length-f,u.length-m)==a.substring(a.length-f,a.length-m)?m=l=f:h=f,f=Math.floor((h-l)/2+l);return f}function p(u){u.push([0,""]);for(var a,l=0,h=0,f=0,m="",g="";l<u.length;)switch(u[l][0]){case 1:f++,g+=u[l][1],l++;break;case t:h++,m+=u[l][1],l++;break;case 0:h+f>1?(h!==0&&f!==0&&((a=n(g,m))!==0&&(l-h-f>0&&u[l-h-f-1][0]==0?u[l-h-f-1][1]+=g.substring(0,a):(u.splice(0,0,[0,g.substring(0,a)]),l++),g=g.substring(a),m=m.substring(a)),(a=s(g,m))!==0&&(u[l][1]=g.substring(g.length-a)+u[l][1],g=g.substring(0,g.length-a),m=m.substring(0,m.length-a))),h===0?u.splice(l-f,h+f,[1,g]):f===0?u.splice(l-h,h+f,[t,m]):u.splice(l-h-f,h+f,[t,m],[1,g]),l=l-h-f+(h?1:0)+(f?1:0)+1):l!==0&&u[l-1][0]==0?(u[l-1][1]+=u[l][1],u.splice(l,1)):l++,f=0,h=0,m="",g=""}u[u.length-1][1]===""&&u.pop();var v=!1;for(l=1;l<u.length-1;)u[l-1][0]==0&&u[l+1][0]==0&&(u[l][1].substring(u[l][1].length-u[l-1][1].length)==u[l-1][1]?(u[l][1]=u[l-1][1]+u[l][1].substring(0,u[l][1].length-u[l-1][1].length),u[l+1][1]=u[l-1][1]+u[l+1][1],u.splice(l-1,1),v=!0):u[l][1].substring(0,u[l+1][1].length)==u[l+1][1]&&(u[l-1][1]+=u[l+1][1],u[l][1]=u[l][1].substring(u[l+1][1].length)+u[l+1][1],u.splice(l+1,1),v=!0)),l++;v&&p(u)}var c=i;function d(u,a,l){for(var h=a+l-1;h>=0&&h>=a-1;h--)if(h+1<u.length){var f=u[h],m=u[h+1];f[0]===m[1]&&u.splice(h,2,[f[0],f[1]+m[1]])}return u}c.INSERT=1,c.DELETE=t,c.EQUAL=0,o.exports=c},function(o,e){function t(i){var r=[];for(var n in i)r.push(n);return r}(o.exports=typeof Object.keys=="function"?Object.keys:t).shim=t},function(o,e){var t=function(){return Object.prototype.toString.call(arguments)}()=="[object Arguments]";function i(n){return Object.prototype.toString.call(n)=="[object Arguments]"}function r(n){return n&&typeof n=="object"&&typeof n.length=="number"&&Object.prototype.hasOwnProperty.call(n,"callee")&&!Object.prototype.propertyIsEnumerable.call(n,"callee")||!1}(e=o.exports=t?i:r).supported=i,e.unsupported=r},function(o,e){var t=Object.prototype.hasOwnProperty,i="~";function r(){}function n(p,c,d){this.fn=p,this.context=c,this.once=d||!1}function s(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(i=!1)),s.prototype.eventNames=function(){var p,c,d=[];if(this._eventsCount===0)return d;for(c in p=this._events)t.call(p,c)&&d.push(i?c.slice(1):c);return Object.getOwnPropertySymbols?d.concat(Object.getOwnPropertySymbols(p)):d},s.prototype.listeners=function(p,c){var d=i?i+p:p,u=this._events[d];if(c)return!!u;if(!u)return[];if(u.fn)return[u.fn];for(var a=0,l=u.length,h=new Array(l);a<l;a++)h[a]=u[a].fn;return h},s.prototype.emit=function(p,c,d,u,a,l){var h=i?i+p:p;if(!this._events[h])return!1;var f,m,g=this._events[h],v=arguments.length;if(g.fn){switch(g.once&&this.removeListener(p,g.fn,void 0,!0),v){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,c),!0;case 3:return g.fn.call(g.context,c,d),!0;case 4:return g.fn.call(g.context,c,d,u),!0;case 5:return g.fn.call(g.context,c,d,u,a),!0;case 6:return g.fn.call(g.context,c,d,u,a,l),!0}for(m=1,f=new Array(v-1);m<v;m++)f[m-1]=arguments[m];g.fn.apply(g.context,f)}else{var y,b=g.length;for(m=0;m<b;m++)switch(g[m].once&&this.removeListener(p,g[m].fn,void 0,!0),v){case 1:g[m].fn.call(g[m].context);break;case 2:g[m].fn.call(g[m].context,c);break;case 3:g[m].fn.call(g[m].context,c,d);break;case 4:g[m].fn.call(g[m].context,c,d,u);break;default:if(!f)for(y=1,f=new Array(v-1);y<v;y++)f[y-1]=arguments[y];g[m].fn.apply(g[m].context,f)}}return!0},s.prototype.on=function(p,c,d){var u=new n(c,d||this),a=i?i+p:p;return this._events[a]?this._events[a].fn?this._events[a]=[this._events[a],u]:this._events[a].push(u):(this._events[a]=u,this._eventsCount++),this},s.prototype.once=function(p,c,d){var u=new n(c,d||this,!0),a=i?i+p:p;return this._events[a]?this._events[a].fn?this._events[a]=[this._events[a],u]:this._events[a].push(u):(this._events[a]=u,this._eventsCount++),this},s.prototype.removeListener=function(p,c,d,u){var a=i?i+p:p;if(!this._events[a])return this;if(!c)return--this._eventsCount==0?this._events=new r:delete this._events[a],this;var l=this._events[a];if(l.fn)l.fn!==c||u&&!l.once||d&&l.context!==d||(--this._eventsCount==0?this._events=new r:delete this._events[a]);else{for(var h=0,f=[],m=l.length;h<m;h++)(l[h].fn!==c||u&&!l[h].once||d&&l[h].context!==d)&&f.push(l[h]);f.length?this._events[a]=f.length===1?f[0]:f:--this._eventsCount==0?this._events=new r:delete this._events[a]}return this},s.prototype.removeAllListeners=function(p){var c;return p?(c=i?i+p:p,this._events[c]&&(--this._eventsCount==0?this._events=new r:delete this._events[c])):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prototype.setMaxListeners=function(){return this},s.prefixed=i,s.EventEmitter=s,o!==void 0&&(o.exports=s)},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.matchText=e.matchSpacing=e.matchNewline=e.matchBlot=e.matchAttributor=e.default=void 0;var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},r=function(R,M){if(Array.isArray(R))return R;if(Symbol.iterator in Object(R))return function(F,z){var B=[],ie=!0,oe=!1,ae=void 0;try{for(var Ne,ve=F[Symbol.iterator]();!(ie=(Ne=ve.next()).done)&&(B.push(Ne.value),!z||B.length!==z);ie=!0);}catch(at){oe=!0,ae=at}finally{try{!ie&&ve.return&&ve.return()}finally{if(oe)throw ae}}return B}(R,M);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function R(M,F){for(var z=0;z<F.length;z++){var B=F[z];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(M,B.key,B)}}return function(M,F,z){return F&&R(M.prototype,F),z&&R(M,z),M}}(),s=b(t(3)),p=b(t(2)),c=b(t(0)),d=b(t(5)),u=b(t(10)),a=b(t(9)),l=t(36),h=t(37),f=b(t(13)),m=t(26),g=t(38),v=t(39),y=t(40);function b(R){return R&&R.__esModule?R:{default:R}}function x(R,M,F){return M in R?Object.defineProperty(R,M,{value:F,enumerable:!0,configurable:!0,writable:!0}):R[M]=F,R}var w=(0,u.default)("quill:clipboard"),E="__ql-matcher",S=[[Node.TEXT_NODE,we],[Node.TEXT_NODE,V],["br",function(R,M){return q(M,`
`)||M.insert(`
`),M}],[Node.ELEMENT_NODE,V],[Node.ELEMENT_NODE,$],[Node.ELEMENT_NODE,J],[Node.ELEMENT_NODE,L],[Node.ELEMENT_NODE,function(R,M){var F={},z=R.style||{};return z.fontStyle&&A(R).fontStyle==="italic"&&(F.italic=!0),z.fontWeight&&(A(R).fontWeight.startsWith("bold")||parseInt(A(R).fontWeight)>=700)&&(F.bold=!0),Object.keys(F).length>0&&(M=O(M,F)),parseFloat(z.textIndent||0)>0&&(M=new p.default().insert("	").concat(M)),M}],["li",function(R,M){var F=c.default.query(R);if(F==null||F.blotName!=="list-item"||!q(M,`
`))return M;for(var z=-1,B=R.parentNode;!B.classList.contains("ql-clipboard");)(c.default.query(B)||{}).blotName==="list"&&(z+=1),B=B.parentNode;return z<=0?M:M.compose(new p.default().retain(M.length()-1).retain(1,{indent:z}))}],["b",T.bind(T,"bold")],["i",T.bind(T,"italic")],["style",function(){return new p.default}]],k=[l.AlignAttribute,g.DirectionAttribute].reduce(function(R,M){return R[M.keyName]=M,R},{}),N=[l.AlignStyle,h.BackgroundStyle,m.ColorStyle,g.DirectionStyle,v.FontStyle,y.SizeStyle].reduce(function(R,M){return R[M.keyName]=M,R},{}),_=function(R){function M(F,z){(function(ie,oe){if(!(ie instanceof oe))throw new TypeError("Cannot call a class as a function")})(this,M);var B=function(ie,oe){if(!ie)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!oe||typeof oe!="object"&&typeof oe!="function"?ie:oe}(this,(M.__proto__||Object.getPrototypeOf(M)).call(this,F,z));return B.quill.root.addEventListener("paste",B.onPaste.bind(B)),B.container=B.quill.addContainer("ql-clipboard"),B.container.setAttribute("contenteditable",!0),B.container.setAttribute("tabindex",-1),B.matchers=[],S.concat(B.options.matchers).forEach(function(ie){var oe=r(ie,2),ae=oe[0],Ne=oe[1];(z.matchVisual||Ne!==J)&&B.addMatcher(ae,Ne)}),B}return function(F,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof z);F.prototype=Object.create(z&&z.prototype,{constructor:{value:F,enumerable:!1,writable:!0,configurable:!0}}),z&&(Object.setPrototypeOf?Object.setPrototypeOf(F,z):F.__proto__=z)}(M,R),n(M,[{key:"addMatcher",value:function(F,z){this.matchers.push([F,z])}},{key:"convert",value:function(F){if(typeof F=="string")return this.container.innerHTML=F.replace(/\>\r?\n +\</g,"><"),this.convert();var z=this.quill.getFormat(this.quill.selection.savedRange.index);if(z[f.default.blotName]){var B=this.container.innerText;return this.container.innerHTML="",new p.default().insert(B,x({},f.default.blotName,z[f.default.blotName]))}var ie=this.prepareMatching(),oe=r(ie,2),ae=oe[0],Ne=oe[1],ve=P(this.container,ae,Ne);return q(ve,`
`)&&ve.ops[ve.ops.length-1].attributes==null&&(ve=ve.compose(new p.default().retain(ve.length()-1).delete(1))),w.log("convert",this.container.innerHTML,ve),this.container.innerHTML="",ve}},{key:"dangerouslyPasteHTML",value:function(F,z){var B=arguments.length>2&&arguments[2]!==void 0?arguments[2]:d.default.sources.API;if(typeof F=="string")this.quill.setContents(this.convert(F),z),this.quill.setSelection(0,d.default.sources.SILENT);else{var ie=this.convert(z);this.quill.updateContents(new p.default().retain(F).concat(ie),B),this.quill.setSelection(F+ie.length(),d.default.sources.SILENT)}}},{key:"onPaste",value:function(F){var z=this;if(!F.defaultPrevented&&this.quill.isEnabled()){var B=this.quill.getSelection(),ie=new p.default().retain(B.index),oe=this.quill.scrollingContainer.scrollTop;this.container.focus(),this.quill.selection.update(d.default.sources.SILENT),setTimeout(function(){ie=ie.concat(z.convert()).delete(B.length),z.quill.updateContents(ie,d.default.sources.USER),z.quill.setSelection(ie.length()-B.length,d.default.sources.SILENT),z.quill.scrollingContainer.scrollTop=oe,z.quill.focus()},1)}}},{key:"prepareMatching",value:function(){var F=this,z=[],B=[];return this.matchers.forEach(function(ie){var oe=r(ie,2),ae=oe[0],Ne=oe[1];switch(ae){case Node.TEXT_NODE:B.push(Ne);break;case Node.ELEMENT_NODE:z.push(Ne);break;default:[].forEach.call(F.container.querySelectorAll(ae),function(ve){ve[E]=ve[E]||[],ve[E].push(Ne)})}}),[z,B]}}]),M}(a.default);function O(R,M,F){return(M===void 0?"undefined":i(M))==="object"?Object.keys(M).reduce(function(z,B){return O(z,B,M[B])},R):R.reduce(function(z,B){return B.attributes&&B.attributes[M]?z.push(B):z.insert(B.insert,(0,s.default)({},x({},M,F),B.attributes))},new p.default)}function A(R){if(R.nodeType!==Node.ELEMENT_NODE)return{};var M="__ql-computed-style";return R[M]||(R[M]=window.getComputedStyle(R))}function q(R,M){for(var F="",z=R.ops.length-1;z>=0&&F.length<M.length;--z){var B=R.ops[z];if(typeof B.insert!="string")break;F=B.insert+F}return F.slice(-1*M.length)===M}function I(R){if(R.childNodes.length===0)return!1;var M=A(R);return["block","list-item"].indexOf(M.display)>-1}function P(R,M,F){return R.nodeType===R.TEXT_NODE?F.reduce(function(z,B){return B(R,z)},new p.default):R.nodeType===R.ELEMENT_NODE?[].reduce.call(R.childNodes||[],function(z,B){var ie=P(B,M,F);return B.nodeType===R.ELEMENT_NODE&&(ie=M.reduce(function(oe,ae){return ae(B,oe)},ie),ie=(B[E]||[]).reduce(function(oe,ae){return ae(B,oe)},ie)),z.concat(ie)},new p.default):new p.default}function T(R,M,F){return O(F,R,!0)}function L(R,M){var F=c.default.Attributor.Attribute.keys(R),z=c.default.Attributor.Class.keys(R),B=c.default.Attributor.Style.keys(R),ie={};return F.concat(z).concat(B).forEach(function(oe){var ae=c.default.query(oe,c.default.Scope.ATTRIBUTE);ae!=null&&(ie[ae.attrName]=ae.value(R),ie[ae.attrName])||((ae=k[oe])==null||ae.attrName!==oe&&ae.keyName!==oe||(ie[ae.attrName]=ae.value(R)||void 0),(ae=N[oe])==null||ae.attrName!==oe&&ae.keyName!==oe||(ae=N[oe],ie[ae.attrName]=ae.value(R)||void 0))}),Object.keys(ie).length>0&&(M=O(M,ie)),M}function $(R,M){var F=c.default.query(R);if(F==null)return M;if(F.prototype instanceof c.default.Embed){var z={},B=F.value(R);B!=null&&(z[F.blotName]=B,M=new p.default().insert(z,F.formats(R)))}else typeof F.formats=="function"&&(M=O(M,F.blotName,F.formats(R)));return M}function V(R,M){return q(M,`
`)||(I(R)||M.length()>0&&R.nextSibling&&I(R.nextSibling))&&M.insert(`
`),M}function J(R,M){if(I(R)&&R.nextElementSibling!=null&&!q(M,`

`)){var F=R.offsetHeight+parseFloat(A(R).marginTop)+parseFloat(A(R).marginBottom);R.nextElementSibling.offsetTop>R.offsetTop+1.5*F&&M.insert(`
`)}return M}function we(R,M){var F=R.data;if(R.parentNode.tagName==="O:P")return M.insert(F.trim());if(F.trim().length===0&&R.parentNode.classList.contains("ql-clipboard"))return M;if(!A(R.parentNode).whiteSpace.startsWith("pre")){var z=function(B,ie){return(ie=ie.replace(/[^\u00a0]/g,"")).length<1&&B?" ":ie};F=(F=F.replace(/\r\n/g," ").replace(/\n/g," ")).replace(/\s\s+/g,z.bind(z,!0)),(R.previousSibling==null&&I(R.parentNode)||R.previousSibling!=null&&I(R.previousSibling))&&(F=F.replace(/^\s+/,z.bind(z,!1))),(R.nextSibling==null&&I(R.parentNode)||R.nextSibling!=null&&I(R.nextSibling))&&(F=F.replace(/\s+$/,z.bind(z,!1)))}return M.insert(F)}_.DEFAULTS={matchers:[],matchVisual:!0},e.default=_,e.matchAttributor=L,e.matchBlot=$,e.matchNewline=V,e.matchSpacing=J,e.matchText=we},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function u(a,l){for(var h=0;h<l.length;h++){var f=l[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(a,f.key,f)}}return function(a,l,h){return l&&u(a.prototype,l),h&&u(a,h),a}}(),n=function u(a,l,h){a===null&&(a=Function.prototype);var f=Object.getOwnPropertyDescriptor(a,l);if(f===void 0){var m=Object.getPrototypeOf(a);return m===null?void 0:u(m,l,h)}if("value"in f)return f.value;var g=f.get;return g!==void 0?g.call(h):void 0},s=t(6);function p(u,a){if(!(u instanceof a))throw new TypeError("Cannot call a class as a function")}function c(u,a){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?u:a}var d=function(u){function a(){return p(this,a),c(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,u),r(a,[{key:"optimize",value:function(l){n(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"optimize",this).call(this,l),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}],[{key:"create",value:function(){return n(a.__proto__||Object.getPrototypeOf(a),"create",this).call(this)}},{key:"formats",value:function(){return!0}}]),a}(((i=s)&&i.__esModule?i:{default:i}).default);d.blotName="bold",d.tagName=["STRONG","B"],e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.addControls=e.default=void 0;var i=function(g,v){if(Array.isArray(g))return g;if(Symbol.iterator in Object(g))return function(y,b){var x=[],w=!0,E=!1,S=void 0;try{for(var k,N=y[Symbol.iterator]();!(w=(k=N.next()).done)&&(x.push(k.value),!b||x.length!==b);w=!0);}catch(_){E=!0,S=_}finally{try{!w&&N.return&&N.return()}finally{if(E)throw S}}return x}(g,v);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function g(v,y){for(var b=0;b<y.length;b++){var x=y[b];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(v,x.key,x)}}return function(v,y,b){return y&&g(v.prototype,y),b&&g(v,b),v}}(),n=u(t(2)),s=u(t(0)),p=u(t(5)),c=u(t(10)),d=u(t(9));function u(g){return g&&g.__esModule?g:{default:g}}function a(g,v){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!v||typeof v!="object"&&typeof v!="function"?g:v}var l=(0,c.default)("quill:toolbar"),h=function(g){function v(y,b){(function(S,k){if(!(S instanceof k))throw new TypeError("Cannot call a class as a function")})(this,v);var x,w=a(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,y,b));if(Array.isArray(w.options.container)){var E=document.createElement("div");m(E,w.options.container),y.container.parentNode.insertBefore(E,y.container),w.container=E}else typeof w.options.container=="string"?w.container=document.querySelector(w.options.container):w.container=w.options.container;return w.container instanceof HTMLElement?(w.container.classList.add("ql-toolbar"),w.controls=[],w.handlers={},Object.keys(w.options.handlers).forEach(function(S){w.addHandler(S,w.options.handlers[S])}),[].forEach.call(w.container.querySelectorAll("button, select"),function(S){w.attach(S)}),w.quill.on(p.default.events.EDITOR_CHANGE,function(S,k){S===p.default.events.SELECTION_CHANGE&&w.update(k)}),w.quill.on(p.default.events.SCROLL_OPTIMIZE,function(){var S=w.quill.selection.getRange(),k=i(S,1)[0];w.update(k)}),w):(x=l.error("Container required for toolbar",w.options),a(w,x))}return function(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(y,b):y.__proto__=b)}(v,g),r(v,[{key:"addHandler",value:function(y,b){this.handlers[y]=b}},{key:"attach",value:function(y){var b=this,x=[].find.call(y.classList,function(E){return E.indexOf("ql-")===0});if(x){if(x=x.slice(3),y.tagName==="BUTTON"&&y.setAttribute("type","button"),this.handlers[x]==null){if(this.quill.scroll.whitelist!=null&&this.quill.scroll.whitelist[x]==null)return void l.warn("ignoring attaching to disabled format",x,y);if(s.default.query(x)==null)return void l.warn("ignoring attaching to nonexistent format",x,y)}var w=y.tagName==="SELECT"?"change":"click";y.addEventListener(w,function(E){var S=void 0;if(y.tagName==="SELECT"){if(y.selectedIndex<0)return;var k=y.options[y.selectedIndex];S=!k.hasAttribute("selected")&&(k.value||!1)}else S=!y.classList.contains("ql-active")&&(y.value||!y.hasAttribute("value")),E.preventDefault();b.quill.focus();var N=b.quill.selection.getRange(),_=i(N,1)[0];if(b.handlers[x]!=null)b.handlers[x].call(b,S);else if(s.default.query(x).prototype instanceof s.default.Embed){if(!(S=prompt("Enter "+x)))return;b.quill.updateContents(new n.default().retain(_.index).delete(_.length).insert(function(O,A,q){return A in O?Object.defineProperty(O,A,{value:q,enumerable:!0,configurable:!0,writable:!0}):O[A]=q,O}({},x,S)),p.default.sources.USER)}else b.quill.format(x,S,p.default.sources.USER);b.update(_)}),this.controls.push([x,y])}}},{key:"update",value:function(y){var b=y==null?{}:this.quill.getFormat(y);this.controls.forEach(function(x){var w=i(x,2),E=w[0],S=w[1];if(S.tagName==="SELECT"){var k=void 0;if(y==null)k=null;else if(b[E]==null)k=S.querySelector("option[selected]");else if(!Array.isArray(b[E])){var N=b[E];typeof N=="string"&&(N=N.replace(/\"/g,'\\"')),k=S.querySelector('option[value="'+N+'"]')}k==null?(S.value="",S.selectedIndex=-1):k.selected=!0}else if(y==null)S.classList.remove("ql-active");else if(S.hasAttribute("value")){var _=b[E]===S.getAttribute("value")||b[E]!=null&&b[E].toString()===S.getAttribute("value")||b[E]==null&&!S.getAttribute("value");S.classList.toggle("ql-active",_)}else S.classList.toggle("ql-active",b[E]!=null)})}}]),v}(d.default);function f(g,v,y){var b=document.createElement("button");b.setAttribute("type","button"),b.classList.add("ql-"+v),y!=null&&(b.value=y),g.appendChild(b)}function m(g,v){Array.isArray(v[0])||(v=[v]),v.forEach(function(y){var b=document.createElement("span");b.classList.add("ql-formats"),y.forEach(function(x){if(typeof x=="string")f(b,x);else{var w=Object.keys(x)[0],E=x[w];Array.isArray(E)?function(S,k,N){var _=document.createElement("select");_.classList.add("ql-"+k),N.forEach(function(O){var A=document.createElement("option");O!==!1?A.setAttribute("value",O):A.setAttribute("selected","selected"),_.appendChild(A)}),S.appendChild(_)}(b,w,E):f(b,w,E)}}),g.appendChild(b)})}h.DEFAULTS={},h.DEFAULTS={container:null,handlers:{clean:function(){var g=this,v=this.quill.getSelection();if(v!=null)if(v.length==0){var y=this.quill.getFormat();Object.keys(y).forEach(function(b){s.default.query(b,s.default.Scope.INLINE)!=null&&g.quill.format(b,!1)})}else this.quill.removeFormat(v,p.default.sources.USER)},direction:function(g){var v=this.quill.getFormat().align;g==="rtl"&&v==null?this.quill.format("align","right",p.default.sources.USER):g||v!=="right"||this.quill.format("align",!1,p.default.sources.USER),this.quill.format("direction",g,p.default.sources.USER)},indent:function(g){var v=this.quill.getSelection(),y=this.quill.getFormat(v),b=parseInt(y.indent||0);if(g==="+1"||g==="-1"){var x=g==="+1"?1:-1;y.direction==="rtl"&&(x*=-1),this.quill.format("indent",b+x,p.default.sources.USER)}},link:function(g){g===!0&&(g=prompt("Enter link URL:")),this.quill.format("link",g,p.default.sources.USER)},list:function(g){var v=this.quill.getSelection(),y=this.quill.getFormat(v);g==="check"?y.list==="checked"||y.list==="unchecked"?this.quill.format("list",!1,p.default.sources.USER):this.quill.format("list","unchecked",p.default.sources.USER):this.quill.format("list",g,p.default.sources.USER)}}},e.default=h,e.addControls=m},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function c(d,u){for(var a=0;a<u.length;a++){var l=u[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(d,l.key,l)}}return function(d,u,a){return u&&c(d.prototype,u),a&&c(d,a),d}}(),n=function c(d,u,a){d===null&&(d=Function.prototype);var l=Object.getOwnPropertyDescriptor(d,u);if(l===void 0){var h=Object.getPrototypeOf(d);return h===null?void 0:c(h,u,a)}if("value"in l)return l.value;var f=l.get;return f!==void 0?f.call(a):void 0},s=t(28),p=function(c){function d(u,a){(function(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")})(this,d);var l=function(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,u));return l.label.innerHTML=a,l.container.classList.add("ql-color-picker"),[].slice.call(l.container.querySelectorAll(".ql-picker-item"),0,7).forEach(function(h){h.classList.add("ql-primary")}),l}return function(u,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);u.prototype=Object.create(a&&a.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(u,a):u.__proto__=a)}(d,c),r(d,[{key:"buildItem",value:function(u){var a=n(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"buildItem",this).call(this,u);return a.style.backgroundColor=u.getAttribute("value")||"",a}},{key:"selectItem",value:function(u,a){n(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"selectItem",this).call(this,u,a);var l=this.label.querySelector(".ql-color-label"),h=u&&u.getAttribute("data-value")||"";l&&(l.tagName==="line"?l.style.stroke=h:l.style.fill=h)}}]),d}(((i=s)&&i.__esModule?i:{default:i}).default);e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function c(d,u){for(var a=0;a<u.length;a++){var l=u[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(d,l.key,l)}}return function(d,u,a){return u&&c(d.prototype,u),a&&c(d,a),d}}(),n=function c(d,u,a){d===null&&(d=Function.prototype);var l=Object.getOwnPropertyDescriptor(d,u);if(l===void 0){var h=Object.getPrototypeOf(d);return h===null?void 0:c(h,u,a)}if("value"in l)return l.value;var f=l.get;return f!==void 0?f.call(a):void 0},s=t(28),p=function(c){function d(u,a){(function(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")})(this,d);var l=function(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,u));return l.container.classList.add("ql-icon-picker"),[].forEach.call(l.container.querySelectorAll(".ql-picker-item"),function(h){h.innerHTML=a[h.getAttribute("data-value")||""]}),l.defaultItem=l.container.querySelector(".ql-selected"),l.selectItem(l.defaultItem),l}return function(u,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);u.prototype=Object.create(a&&a.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(u,a):u.__proto__=a)}(d,c),r(d,[{key:"selectItem",value:function(u,a){n(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"selectItem",this).call(this,u,a),u=u||this.defaultItem,this.label.innerHTML=u.innerHTML}}]),d}(((i=s)&&i.__esModule?i:{default:i}).default);e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function n(s,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(s,d.key,d)}}return function(s,p,c){return p&&n(s.prototype,p),c&&n(s,c),s}}(),r=function(){function n(s,p){var c=this;(function(d,u){if(!(d instanceof u))throw new TypeError("Cannot call a class as a function")})(this,n),this.quill=s,this.boundsContainer=p||document.body,this.root=s.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE,this.quill.root===this.quill.scrollingContainer&&this.quill.root.addEventListener("scroll",function(){c.root.style.marginTop=-1*c.quill.root.scrollTop+"px"}),this.hide()}return i(n,[{key:"hide",value:function(){this.root.classList.add("ql-hidden")}},{key:"position",value:function(s){var p=s.left+s.width/2-this.root.offsetWidth/2,c=s.bottom+this.quill.root.scrollTop;this.root.style.left=p+"px",this.root.style.top=c+"px",this.root.classList.remove("ql-flip");var d=this.boundsContainer.getBoundingClientRect(),u=this.root.getBoundingClientRect(),a=0;if(u.right>d.right&&(a=d.right-u.right,this.root.style.left=p+a+"px"),u.left<d.left&&(a=d.left-u.left,this.root.style.left=p+a+"px"),u.bottom>d.bottom){var l=u.bottom-u.top,h=s.bottom-s.top+l;this.root.style.top=c-h+"px",this.root.classList.add("ql-flip")}return a}},{key:"show",value:function(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}}]),n}();e.default=r},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(x,w){if(Array.isArray(x))return x;if(Symbol.iterator in Object(x))return function(E,S){var k=[],N=!0,_=!1,O=void 0;try{for(var A,q=E[Symbol.iterator]();!(N=(A=q.next()).done)&&(k.push(A.value),!S||k.length!==S);N=!0);}catch(I){_=!0,O=I}finally{try{!N&&q.return&&q.return()}finally{if(_)throw O}}return k}(x,w);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function x(w,E,S){w===null&&(w=Function.prototype);var k=Object.getOwnPropertyDescriptor(w,E);if(k===void 0){var N=Object.getPrototypeOf(w);return N===null?void 0:x(N,E,S)}if("value"in k)return k.value;var _=k.get;return _!==void 0?_.call(S):void 0},n=function(){function x(w,E){for(var S=0;S<E.length;S++){var k=E[S];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(w,k.key,k)}}return function(w,E,S){return E&&x(w.prototype,E),S&&x(w,S),w}}(),s=h(t(3)),p=h(t(8)),c=t(43),d=h(c),u=h(t(27)),a=t(15),l=h(t(41));function h(x){return x&&x.__esModule?x:{default:x}}function f(x,w){if(!(x instanceof w))throw new TypeError("Cannot call a class as a function")}function m(x,w){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!w||typeof w!="object"&&typeof w!="function"?x:w}function g(x,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof w);x.prototype=Object.create(w&&w.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),w&&(Object.setPrototypeOf?Object.setPrototypeOf(x,w):x.__proto__=w)}var v=[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"]],y=function(x){function w(E,S){f(this,w),S.modules.toolbar!=null&&S.modules.toolbar.container==null&&(S.modules.toolbar.container=v);var k=m(this,(w.__proto__||Object.getPrototypeOf(w)).call(this,E,S));return k.quill.container.classList.add("ql-snow"),k}return g(w,x),n(w,[{key:"extendToolbar",value:function(E){E.container.classList.add("ql-snow"),this.buildButtons([].slice.call(E.container.querySelectorAll("button")),l.default),this.buildPickers([].slice.call(E.container.querySelectorAll("select")),l.default),this.tooltip=new b(this.quill,this.options.bounds),E.container.querySelector(".ql-link")&&this.quill.keyboard.addBinding({key:"K",shortKey:!0},function(S,k){E.handlers.link.call(E,!k.format.link)})}}]),w}(d.default);y.DEFAULTS=(0,s.default)(!0,{},d.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(x){if(x){var w=this.quill.getSelection();if(w==null||w.length==0)return;var E=this.quill.getText(w);/^\S+@\S+\.\S+$/.test(E)&&E.indexOf("mailto:")!==0&&(E="mailto:"+E),this.quill.theme.tooltip.edit("link",E)}else this.quill.format("link",!1)}}}}});var b=function(x){function w(E,S){f(this,w);var k=m(this,(w.__proto__||Object.getPrototypeOf(w)).call(this,E,S));return k.preview=k.root.querySelector("a.ql-preview"),k}return g(w,x),n(w,[{key:"listen",value:function(){var E=this;r(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"listen",this).call(this),this.root.querySelector("a.ql-action").addEventListener("click",function(S){E.root.classList.contains("ql-editing")?E.save():E.edit("link",E.preview.textContent),S.preventDefault()}),this.root.querySelector("a.ql-remove").addEventListener("click",function(S){if(E.linkRange!=null){var k=E.linkRange;E.restoreFocus(),E.quill.formatText(k,"link",!1,p.default.sources.USER),delete E.linkRange}S.preventDefault(),E.hide()}),this.quill.on(p.default.events.SELECTION_CHANGE,function(S,k,N){if(S!=null){if(S.length===0&&N===p.default.sources.USER){var _=E.quill.scroll.descendant(u.default,S.index),O=i(_,2),A=O[0],q=O[1];if(A!=null){E.linkRange=new a.Range(S.index-q,A.length());var I=u.default.formats(A.domNode);return E.preview.textContent=I,E.preview.setAttribute("href",I),E.show(),void E.position(E.quill.getBounds(E.linkRange))}}else delete E.linkRange;E.hide()}})}},{key:"show",value:function(){r(w.prototype.__proto__||Object.getPrototypeOf(w.prototype),"show",this).call(this),this.root.removeAttribute("data-mode")}}]),w}(c.BaseTooltip);b.TEMPLATE=['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-action"></a>','<a class="ql-remove"></a>'].join(""),e.default=y},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=V(t(29)),r=t(36),n=t(38),s=t(64),p=V(t(65)),c=V(t(66)),d=t(67),u=V(d),a=t(37),l=t(26),h=t(39),f=t(40),m=V(t(56)),g=V(t(68)),v=V(t(27)),y=V(t(69)),b=V(t(70)),x=V(t(71)),w=V(t(72)),E=V(t(73)),S=t(13),k=V(S),N=V(t(74)),_=V(t(75)),O=V(t(57)),A=V(t(41)),q=V(t(28)),I=V(t(59)),P=V(t(60)),T=V(t(61)),L=V(t(108)),$=V(t(62));function V(J){return J&&J.__esModule?J:{default:J}}i.default.register({"attributors/attribute/direction":n.DirectionAttribute,"attributors/class/align":r.AlignClass,"attributors/class/background":a.BackgroundClass,"attributors/class/color":l.ColorClass,"attributors/class/direction":n.DirectionClass,"attributors/class/font":h.FontClass,"attributors/class/size":f.SizeClass,"attributors/style/align":r.AlignStyle,"attributors/style/background":a.BackgroundStyle,"attributors/style/color":l.ColorStyle,"attributors/style/direction":n.DirectionStyle,"attributors/style/font":h.FontStyle,"attributors/style/size":f.SizeStyle},!0),i.default.register({"formats/align":r.AlignClass,"formats/direction":n.DirectionClass,"formats/indent":s.IndentClass,"formats/background":a.BackgroundStyle,"formats/color":l.ColorStyle,"formats/font":h.FontClass,"formats/size":f.SizeClass,"formats/blockquote":p.default,"formats/code-block":k.default,"formats/header":c.default,"formats/list":u.default,"formats/bold":m.default,"formats/code":S.Code,"formats/italic":g.default,"formats/link":v.default,"formats/script":y.default,"formats/strike":b.default,"formats/underline":x.default,"formats/image":w.default,"formats/video":E.default,"formats/list/item":d.ListItem,"modules/formula":N.default,"modules/syntax":_.default,"modules/toolbar":O.default,"themes/bubble":L.default,"themes/snow":$.default,"ui/icons":A.default,"ui/picker":q.default,"ui/icon-picker":P.default,"ui/color-picker":I.default,"ui/tooltip":T.default},!0),e.default=i.default},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.IndentClass=void 0;var i,r=function(){function l(h,f){for(var m=0;m<f.length;m++){var g=f[m];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(h,g.key,g)}}return function(h,f,m){return f&&l(h.prototype,f),m&&l(h,m),h}}(),n=function l(h,f,m){h===null&&(h=Function.prototype);var g=Object.getOwnPropertyDescriptor(h,f);if(g===void 0){var v=Object.getPrototypeOf(h);return v===null?void 0:l(v,f,m)}if("value"in g)return g.value;var y=g.get;return y!==void 0?y.call(m):void 0},s=t(0),p=(i=s)&&i.__esModule?i:{default:i};function c(l,h){if(!(l instanceof h))throw new TypeError("Cannot call a class as a function")}function d(l,h){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!h||typeof h!="object"&&typeof h!="function"?l:h}var u=function(l){function h(){return c(this,h),d(this,(h.__proto__||Object.getPrototypeOf(h)).apply(this,arguments))}return function(f,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);f.prototype=Object.create(m&&m.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(f,m):f.__proto__=m)}(h,l),r(h,[{key:"add",value:function(f,m){if(m==="+1"||m==="-1"){var g=this.value(f)||0;m=m==="+1"?g+1:g-1}return m===0?(this.remove(f),!0):n(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"add",this).call(this,f,m)}},{key:"canAdd",value:function(f,m){return n(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"canAdd",this).call(this,f,m)||n(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"canAdd",this).call(this,f,parseInt(m))}},{key:"value",value:function(f){return parseInt(n(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"value",this).call(this,f))||void 0}}]),h}(p.default.Attributor.Class),a=new u("indent","ql-indent",{scope:p.default.Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});e.IndentClass=a},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(4);function n(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}function s(c,d){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?c:d}var p=function(c){function d(){return n(this,d),s(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return function(u,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);u.prototype=Object.create(a&&a.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(u,a):u.__proto__=a)}(d,c),d}(((i=r)&&i.__esModule?i:{default:i}).default);p.blotName="blockquote",p.tagName="blockquote",e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function d(u,a){for(var l=0;l<a.length;l++){var h=a[l];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(u,h.key,h)}}return function(u,a,l){return a&&d(u.prototype,a),l&&d(u,l),u}}(),n=t(4);function s(d,u){if(!(d instanceof u))throw new TypeError("Cannot call a class as a function")}function p(d,u){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!u||typeof u!="object"&&typeof u!="function"?d:u}var c=function(d){function u(){return s(this,u),p(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments))}return function(a,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);a.prototype=Object.create(l&&l.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(a,l):a.__proto__=l)}(u,d),r(u,null,[{key:"formats",value:function(a){return this.tagName.indexOf(a.tagName)+1}}]),u}(((i=n)&&i.__esModule?i:{default:i}).default);c.blotName="header",c.tagName=["H1","H2","H3","H4","H5","H6"],e.default=c},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ListItem=void 0;var i=function(){function f(m,g){for(var v=0;v<g.length;v++){var y=g[v];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}return function(m,g,v){return g&&f(m.prototype,g),v&&f(m,v),m}}(),r=function f(m,g,v){m===null&&(m=Function.prototype);var y=Object.getOwnPropertyDescriptor(m,g);if(y===void 0){var b=Object.getPrototypeOf(m);return b===null?void 0:f(b,g,v)}if("value"in y)return y.value;var x=y.get;return x!==void 0?x.call(v):void 0},n=c(t(0)),s=c(t(4)),p=c(t(25));function c(f){return f&&f.__esModule?f:{default:f}}function d(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")}function u(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}function a(f,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);f.prototype=Object.create(m&&m.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(f,m):f.__proto__=m)}var l=function(f){function m(){return d(this,m),u(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return a(m,f),i(m,[{key:"format",value:function(g,v){g!==h.blotName||v?r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"format",this).call(this,g,v):this.replaceWith(n.default.create(this.statics.scope))}},{key:"remove",value:function(){this.prev==null&&this.next==null?this.parent.remove():r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"remove",this).call(this)}},{key:"replaceWith",value:function(g,v){return this.parent.isolate(this.offset(this.parent),this.length()),g===this.parent.statics.blotName?(this.parent.replaceWith(g,v),this):(this.parent.unwrap(),r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"replaceWith",this).call(this,g,v))}}],[{key:"formats",value:function(g){return g.tagName===this.tagName?void 0:r(m.__proto__||Object.getPrototypeOf(m),"formats",this).call(this,g)}}]),m}(s.default);l.blotName="list-item",l.tagName="LI";var h=function(f){function m(g){d(this,m);var v=u(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,g)),y=function(b){if(b.target.parentNode===g){var x=v.statics.formats(g),w=n.default.find(b.target);x==="checked"?w.format("list","unchecked"):x==="unchecked"&&w.format("list","checked")}};return g.addEventListener("touchstart",y),g.addEventListener("mousedown",y),v}return a(m,f),i(m,null,[{key:"create",value:function(g){var v=g==="ordered"?"OL":"UL",y=r(m.__proto__||Object.getPrototypeOf(m),"create",this).call(this,v);return g!=="checked"&&g!=="unchecked"||y.setAttribute("data-checked",g==="checked"),y}},{key:"formats",value:function(g){return g.tagName==="OL"?"ordered":g.tagName==="UL"?g.hasAttribute("data-checked")?g.getAttribute("data-checked")==="true"?"checked":"unchecked":"bullet":void 0}}]),i(m,[{key:"format",value:function(g,v){this.children.length>0&&this.children.tail.format(g,v)}},{key:"formats",value:function(){return g={},v=this.statics.blotName,y=this.statics.formats(this.domNode),v in g?Object.defineProperty(g,v,{value:y,enumerable:!0,configurable:!0,writable:!0}):g[v]=y,g;var g,v,y}},{key:"insertBefore",value:function(g,v){if(g instanceof l)r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"insertBefore",this).call(this,g,v);else{var y=v==null?this.length():v.offset(this),b=this.split(y);b.parent.insertBefore(g,b)}}},{key:"optimize",value:function(g){r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"optimize",this).call(this,g);var v=this.next;v!=null&&v.prev===this&&v.statics.blotName===this.statics.blotName&&v.domNode.tagName===this.domNode.tagName&&v.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(v.moveChildren(this),v.remove())}},{key:"replace",value:function(g){if(g.statics.blotName!==this.statics.blotName){var v=n.default.create(this.statics.defaultChild);g.moveChildren(v),this.appendChild(v)}r(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"replace",this).call(this,g)}}]),m}(p.default);h.blotName="list",h.scope=n.default.Scope.BLOCK_BLOT,h.tagName=["OL","UL"],h.defaultChild="list-item",h.allowedChildren=[l],e.ListItem=l,e.default=h},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(56);function n(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}function s(c,d){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?c:d}var p=function(c){function d(){return n(this,d),s(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return function(u,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);u.prototype=Object.create(a&&a.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(u,a):u.__proto__=a)}(d,c),d}(((i=r)&&i.__esModule?i:{default:i}).default);p.blotName="italic",p.tagName=["EM","I"],e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function u(a,l){for(var h=0;h<l.length;h++){var f=l[h];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(a,f.key,f)}}return function(a,l,h){return l&&u(a.prototype,l),h&&u(a,h),a}}(),n=function u(a,l,h){a===null&&(a=Function.prototype);var f=Object.getOwnPropertyDescriptor(a,l);if(f===void 0){var m=Object.getPrototypeOf(a);return m===null?void 0:u(m,l,h)}if("value"in f)return f.value;var g=f.get;return g!==void 0?g.call(h):void 0},s=t(6);function p(u,a){if(!(u instanceof a))throw new TypeError("Cannot call a class as a function")}function c(u,a){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?u:a}var d=function(u){function a(){return p(this,a),c(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(l,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);l.prototype=Object.create(h&&h.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(l,h):l.__proto__=h)}(a,u),r(a,null,[{key:"create",value:function(l){return l==="super"?document.createElement("sup"):l==="sub"?document.createElement("sub"):n(a.__proto__||Object.getPrototypeOf(a),"create",this).call(this,l)}},{key:"formats",value:function(l){return l.tagName==="SUB"?"sub":l.tagName==="SUP"?"super":void 0}}]),a}(((i=s)&&i.__esModule?i:{default:i}).default);d.blotName="script",d.tagName=["SUB","SUP"],e.default=d},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(6);function n(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}function s(c,d){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?c:d}var p=function(c){function d(){return n(this,d),s(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return function(u,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);u.prototype=Object.create(a&&a.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(u,a):u.__proto__=a)}(d,c),d}(((i=r)&&i.__esModule?i:{default:i}).default);p.blotName="strike",p.tagName="S",e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(6);function n(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}function s(c,d){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?c:d}var p=function(c){function d(){return n(this,d),s(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return function(u,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);u.prototype=Object.create(a&&a.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(u,a):u.__proto__=a)}(d,c),d}(((i=r)&&i.__esModule?i:{default:i}).default);p.blotName="underline",p.tagName="U",e.default=p},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function h(f,m){for(var g=0;g<m.length;g++){var v=m[g];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(f,v.key,v)}}return function(f,m,g){return m&&h(f.prototype,m),g&&h(f,g),f}}(),n=function h(f,m,g){f===null&&(f=Function.prototype);var v=Object.getOwnPropertyDescriptor(f,m);if(v===void 0){var y=Object.getPrototypeOf(f);return y===null?void 0:h(y,m,g)}if("value"in v)return v.value;var b=v.get;return b!==void 0?b.call(g):void 0},s=t(0),p=(i=s)&&i.__esModule?i:{default:i},c=t(27);function d(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function u(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}var a=["alt","height","width"],l=function(h){function f(){return d(this,f),u(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments))}return function(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}(f,h),r(f,[{key:"format",value:function(m,g){a.indexOf(m)>-1?g?this.domNode.setAttribute(m,g):this.domNode.removeAttribute(m):n(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"format",this).call(this,m,g)}}],[{key:"create",value:function(m){var g=n(f.__proto__||Object.getPrototypeOf(f),"create",this).call(this,m);return typeof m=="string"&&g.setAttribute("src",this.sanitize(m)),g}},{key:"formats",value:function(m){return a.reduce(function(g,v){return m.hasAttribute(v)&&(g[v]=m.getAttribute(v)),g},{})}},{key:"match",value:function(m){return/\.(jpe?g|gif|png)$/.test(m)||/^data:image\/.+;base64/.test(m)}},{key:"sanitize",value:function(m){return(0,c.sanitize)(m,["http","https","data"])?m:"//:0"}},{key:"value",value:function(m){return m.getAttribute("src")}}]),f}(p.default.Embed);l.blotName="image",l.tagName="IMG",e.default=l},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=function(){function h(f,m){for(var g=0;g<m.length;g++){var v=m[g];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(f,v.key,v)}}return function(f,m,g){return m&&h(f.prototype,m),g&&h(f,g),f}}(),n=function h(f,m,g){f===null&&(f=Function.prototype);var v=Object.getOwnPropertyDescriptor(f,m);if(v===void 0){var y=Object.getPrototypeOf(f);return y===null?void 0:h(y,m,g)}if("value"in v)return v.value;var b=v.get;return b!==void 0?b.call(g):void 0},s=t(4),p=t(27),c=(i=p)&&i.__esModule?i:{default:i};function d(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function u(h,f){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?h:f}var a=["height","width"],l=function(h){function f(){return d(this,f),u(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments))}return function(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}(f,h),r(f,[{key:"format",value:function(m,g){a.indexOf(m)>-1?g?this.domNode.setAttribute(m,g):this.domNode.removeAttribute(m):n(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"format",this).call(this,m,g)}}],[{key:"create",value:function(m){var g=n(f.__proto__||Object.getPrototypeOf(f),"create",this).call(this,m);return g.setAttribute("frameborder","0"),g.setAttribute("allowfullscreen",!0),g.setAttribute("src",this.sanitize(m)),g}},{key:"formats",value:function(m){return a.reduce(function(g,v){return m.hasAttribute(v)&&(g[v]=m.getAttribute(v)),g},{})}},{key:"sanitize",value:function(m){return c.default.sanitize(m)}},{key:"value",value:function(m){return m.getAttribute("src")}}]),f}(s.BlockEmbed);l.blotName="video",l.className="ql-video",l.tagName="IFRAME",e.default=l},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.FormulaBlot=void 0;var i=function(){function f(m,g){for(var v=0;v<g.length;v++){var y=g[v];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}return function(m,g,v){return g&&f(m.prototype,g),v&&f(m,v),m}}(),r=function f(m,g,v){m===null&&(m=Function.prototype);var y=Object.getOwnPropertyDescriptor(m,g);if(y===void 0){var b=Object.getPrototypeOf(m);return b===null?void 0:f(b,g,v)}if("value"in y)return y.value;var x=y.get;return x!==void 0?x.call(v):void 0},n=c(t(35)),s=c(t(5)),p=c(t(9));function c(f){return f&&f.__esModule?f:{default:f}}function d(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")}function u(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?f:m}function a(f,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);f.prototype=Object.create(m&&m.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(f,m):f.__proto__=m)}var l=function(f){function m(){return d(this,m),u(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return a(m,f),i(m,null,[{key:"create",value:function(g){var v=r(m.__proto__||Object.getPrototypeOf(m),"create",this).call(this,g);return typeof g=="string"&&(window.katex.render(g,v,{throwOnError:!1,errorColor:"#f00"}),v.setAttribute("data-value",g)),v}},{key:"value",value:function(g){return g.getAttribute("data-value")}}]),m}(n.default);l.blotName="formula",l.className="ql-formula",l.tagName="SPAN";var h=function(f){function m(){d(this,m);var g=u(this,(m.__proto__||Object.getPrototypeOf(m)).call(this));if(window.katex==null)throw new Error("Formula module requires KaTeX.");return g}return a(m,f),i(m,null,[{key:"register",value:function(){s.default.register(l,!0)}}]),m}(p.default);e.FormulaBlot=l,e.default=h},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.CodeToken=e.CodeBlock=void 0;var i=function(){function m(g,v){for(var y=0;y<v.length;y++){var b=v[y];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(g,b.key,b)}}return function(g,v,y){return v&&m(g.prototype,v),y&&m(g,y),g}}(),r=function m(g,v,y){g===null&&(g=Function.prototype);var b=Object.getOwnPropertyDescriptor(g,v);if(b===void 0){var x=Object.getPrototypeOf(g);return x===null?void 0:m(x,v,y)}if("value"in b)return b.value;var w=b.get;return w!==void 0?w.call(y):void 0},n=c(t(0)),s=c(t(5)),p=c(t(9));function c(m){return m&&m.__esModule?m:{default:m}}function d(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")}function u(m,g){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!g||typeof g!="object"&&typeof g!="function"?m:g}function a(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}var l=function(m){function g(){return d(this,g),u(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}return a(g,m),i(g,[{key:"replaceWith",value:function(v){this.domNode.textContent=this.domNode.textContent,this.attach(),r(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"replaceWith",this).call(this,v)}},{key:"highlight",value:function(v){var y=this.domNode.textContent;this.cachedText!==y&&((y.trim().length>0||this.cachedText==null)&&(this.domNode.innerHTML=v(y),this.domNode.normalize(),this.attach()),this.cachedText=y)}}]),g}(c(t(13)).default);l.className="ql-syntax";var h=new n.default.Attributor.Class("token","hljs",{scope:n.default.Scope.INLINE}),f=function(m){function g(v,y){d(this,g);var b=u(this,(g.__proto__||Object.getPrototypeOf(g)).call(this,v,y));if(typeof b.options.highlight!="function")throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");var x=null;return b.quill.on(s.default.events.SCROLL_OPTIMIZE,function(){clearTimeout(x),x=setTimeout(function(){b.highlight(),x=null},b.options.interval)}),b.highlight(),b}return a(g,m),i(g,null,[{key:"register",value:function(){s.default.register(h,!0),s.default.register(l,!0)}}]),i(g,[{key:"highlight",value:function(){var v=this;if(!this.quill.selection.composing){this.quill.update(s.default.sources.USER);var y=this.quill.getSelection();this.quill.scroll.descendants(l).forEach(function(b){b.highlight(v.options.highlight)}),this.quill.update(s.default.sources.SILENT),y!=null&&this.quill.setSelection(y,s.default.sources.SILENT)}}}]),g}(p.default);f.DEFAULTS={highlight:window.hljs==null?null:function(m){return window.hljs.highlightAuto(m).value},interval:1e3},e.CodeBlock=l,e.CodeToken=h,e.default=f},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'},function(o,e){o.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'},function(o,e){o.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'},function(o,e){o.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'},function(o,e){o.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'},function(o,e){o.exports='<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'},function(o,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BubbleTooltip=void 0;var i=function y(b,x,w){b===null&&(b=Function.prototype);var E=Object.getOwnPropertyDescriptor(b,x);if(E===void 0){var S=Object.getPrototypeOf(b);return S===null?void 0:y(S,x,w)}if("value"in E)return E.value;var k=E.get;return k!==void 0?k.call(w):void 0},r=function(){function y(b,x){for(var w=0;w<x.length;w++){var E=x[w];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(b,E.key,E)}}return function(b,x,w){return x&&y(b.prototype,x),w&&y(b,w),b}}(),n=a(t(3)),s=a(t(8)),p=t(43),c=a(p),d=t(15),u=a(t(41));function a(y){return y&&y.__esModule?y:{default:y}}function l(y,b){if(!(y instanceof b))throw new TypeError("Cannot call a class as a function")}function h(y,b){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||typeof b!="object"&&typeof b!="function"?y:b}function f(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(y,b):y.__proto__=b)}var m=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]],g=function(y){function b(x,w){l(this,b),w.modules.toolbar!=null&&w.modules.toolbar.container==null&&(w.modules.toolbar.container=m);var E=h(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,x,w));return E.quill.container.classList.add("ql-bubble"),E}return f(b,y),r(b,[{key:"extendToolbar",value:function(x){this.tooltip=new v(this.quill,this.options.bounds),this.tooltip.root.appendChild(x.container),this.buildButtons([].slice.call(x.container.querySelectorAll("button")),u.default),this.buildPickers([].slice.call(x.container.querySelectorAll("select")),u.default)}}]),b}(c.default);g.DEFAULTS=(0,n.default)(!0,{},c.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(y){y?this.quill.theme.tooltip.edit():this.quill.format("link",!1)}}}}});var v=function(y){function b(x,w){l(this,b);var E=h(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,x,w));return E.quill.on(s.default.events.EDITOR_CHANGE,function(S,k,N,_){if(S===s.default.events.SELECTION_CHANGE)if(k!=null&&k.length>0&&_===s.default.sources.USER){E.show(),E.root.style.left="0px",E.root.style.width="",E.root.style.width=E.root.offsetWidth+"px";var O=E.quill.getLines(k.index,k.length);if(O.length===1)E.position(E.quill.getBounds(k));else{var A=O[O.length-1],q=E.quill.getIndex(A),I=Math.min(A.length()-1,k.index+k.length-q),P=E.quill.getBounds(new d.Range(q,I));E.position(P)}}else document.activeElement!==E.textbox&&E.quill.hasFocus()&&E.hide()}),E}return f(b,y),r(b,[{key:"listen",value:function(){var x=this;i(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"listen",this).call(this),this.root.querySelector(".ql-close").addEventListener("click",function(){x.root.classList.remove("ql-editing")}),this.quill.on(s.default.events.SCROLL_OPTIMIZE,function(){setTimeout(function(){if(!x.root.classList.contains("ql-hidden")){var w=x.quill.getSelection();w!=null&&x.position(x.quill.getBounds(w))}},1)})}},{key:"cancel",value:function(){this.show()}},{key:"position",value:function(x){var w=i(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"position",this).call(this,x),E=this.root.querySelector(".ql-tooltip-arrow");if(E.style.marginLeft="",w===0)return w;E.style.marginLeft=-1*w-E.offsetWidth/2+"px"}}]),b}(p.BaseTooltip);v.TEMPLATE=['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join(""),e.BubbleTooltip=v,e.default=g},function(o,e,t){o.exports=t(63)}]).default},typeof exports=="object"&&typeof module=="object"?module.exports=Ji():typeof define=="function"&&define.amd?define([],Ji):typeof exports=="object"?exports.Quill=Ji():Wa.Quill=Ji();const Js=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ea=Symbol(),Xa=new Map;class Uc{constructor(e,t){if(this._$cssResult$=!0,t!==ea)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Xa.get(this.cssText);return Js&&e===void 0&&(Xa.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const En=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,r,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[n+1],o[0]);return new Uc(t,ea)},Za=Js?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(i=>new Uc(typeof i=="string"?i:i+"",ea))(t)})(o):o;var Gn;const Ya=window.trustedTypes,rh=Ya?Ya.emptyScript:"",Ja=window.reactiveElementPolyfillSupport,qs={toAttribute(o,e){switch(e){case Boolean:o=o?rh:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Fc=(o,e)=>e!==o&&(e==e||o==o),Qn={attribute:!0,type:String,converter:qs,reflect:!1,hasChanged:Fc};class Ai extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Eh(i,t);r!==void 0&&(this._$Eu.set(r,i),e.push(r))}),e}static createProperty(e,t=Qn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Qn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Za(r))}else e!==void 0&&t.push(Za(e));return t}static _$Eh(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{Js?i.adoptedStyleSheets=r.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):r.forEach(n=>{const s=document.createElement("style"),p=window.litNonce;p!==void 0&&s.setAttribute("nonce",p),s.textContent=n.cssText,i.appendChild(s)})})(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=Qn){var r,n;const s=this.constructor._$Eh(e,i);if(s!==void 0&&i.reflect===!0){const p=((n=(r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&n!==void 0?n:qs.toAttribute)(t,i.type);this._$Ei=e,p==null?this.removeAttribute(s):this.setAttribute(s,p),this._$Ei=null}}_$AK(e,t){var i,r,n;const s=this.constructor,p=s._$Eu.get(e);if(p!==void 0&&this._$Ei!==p){const c=s.getPropertyOptions(p),d=c.converter,u=(n=(r=(i=d)===null||i===void 0?void 0:i.fromAttribute)!==null&&r!==void 0?r:typeof d=="function"?d:null)!==null&&n!==void 0?n:qs.fromAttribute;this._$Ei=p,this[p]=u(t,c.type),this._$Ei=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Fc)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,n)=>this[n]=r),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(i)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$ES(i,this[i],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wn;Ai.finalized=!0,Ai.elementProperties=new Map,Ai.elementStyles=[],Ai.shadowRootOptions={mode:"open"},Ja==null||Ja({ReactiveElement:Ai}),((Gn=globalThis.reactiveElementVersions)!==null&&Gn!==void 0?Gn:globalThis.reactiveElementVersions=[]).push("1.3.1");const Mi=globalThis.trustedTypes,el=Mi?Mi.createPolicy("lit-html",{createHTML:o=>o}):void 0,go=`lit$${(Math.random()+"").slice(9)}$`,zc="?"+go,nh=`<${zc}>`,$i=document,Ar=(o="")=>$i.createComment(o),_r=o=>o===null||typeof o!="object"&&typeof o!="function",tl=Array.isArray,er=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ol=/-->/g,il=/>/g,$o=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,rl=/'/g,nl=/"/g,sl=/^(?:script|style|textarea|title)$/i,Se=(o=>(e,...t)=>({_$litType$:o,strings:e,values:t}))(1),ii=Symbol.for("lit-noChange"),$e=Symbol.for("lit-nothing"),al=new WeakMap,Ci=$i.createTreeWalker($i,129,null,!1);class Or{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,s=0;const p=e.length-1,c=this.parts,[d,u]=((a,l)=>{const h=a.length-1,f=[];let m,g=l===2?"<svg>":"",v=er;for(let b=0;b<h;b++){const x=a[b];let w,E,S=-1,k=0;for(;k<x.length&&(v.lastIndex=k,E=v.exec(x),E!==null);)k=v.lastIndex,v===er?E[1]==="!--"?v=ol:E[1]!==void 0?v=il:E[2]!==void 0?(sl.test(E[2])&&(m=RegExp("</"+E[2],"g")),v=$o):E[3]!==void 0&&(v=$o):v===$o?E[0]===">"?(v=m!=null?m:er,S=-1):E[1]===void 0?S=-2:(S=v.lastIndex-E[2].length,w=E[1],v=E[3]===void 0?$o:E[3]==='"'?nl:rl):v===nl||v===rl?v=$o:v===ol||v===il?v=er:(v=$o,m=void 0);const N=v===$o&&a[b+1].startsWith("/>")?" ":"";g+=v===er?x+nh:S>=0?(f.push(w),x.slice(0,S)+"$lit$"+x.slice(S)+go+N):x+go+(S===-2?(f.push(void 0),b):N)}const y=g+(a[h]||"<?>")+(l===2?"</svg>":"");if(!Array.isArray(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return[el!==void 0?el.createHTML(y):y,f]})(e,t);if(this.el=Or.createElement(d,i),Ci.currentNode=this.el.content,t===2){const a=this.el.content,l=a.firstChild;l.remove(),a.append(...l.childNodes)}for(;(r=Ci.nextNode())!==null&&c.length<p;){if(r.nodeType===1){if(r.hasAttributes()){const a=[];for(const l of r.getAttributeNames())if(l.endsWith("$lit$")||l.startsWith(go)){const h=u[s++];if(a.push(l),h!==void 0){const f=r.getAttribute(h.toLowerCase()+"$lit$").split(go),m=/([.?@])?(.*)/.exec(h);c.push({type:1,index:n,name:m[2],strings:f,ctor:m[1]==="."?ah:m[1]==="?"?ch:m[1]==="@"?uh:An})}else c.push({type:6,index:n})}for(const l of a)r.removeAttribute(l)}if(sl.test(r.tagName)){const a=r.textContent.split(go),l=a.length-1;if(l>0){r.textContent=Mi?Mi.emptyScript:"";for(let h=0;h<l;h++)r.append(a[h],Ar()),Ci.nextNode(),c.push({type:2,index:++n});r.append(a[l],Ar())}}}else if(r.nodeType===8)if(r.data===zc)c.push({type:2,index:n});else{let a=-1;for(;(a=r.data.indexOf(go,a+1))!==-1;)c.push({type:7,index:n}),a+=go.length-1}n++}}static createElement(e,t){const i=$i.createElement("template");return i.innerHTML=e,i}}function Ui(o,e,t=o,i){var r,n,s,p;if(e===ii)return e;let c=i!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[i]:t._$Cu;const d=_r(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==d&&((n=c==null?void 0:c._$AO)===null||n===void 0||n.call(c,!1),d===void 0?c=void 0:(c=new d(o),c._$AT(o,t,i)),i!==void 0?((s=(p=t)._$Cl)!==null&&s!==void 0?s:p._$Cl=[])[i]=c:t._$Cu=c),c!==void 0&&(e=Ui(o,c._$AS(o,e.values),c,i)),e}class sh{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:r}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:$i).importNode(i,!0);Ci.currentNode=n;let s=Ci.nextNode(),p=0,c=0,d=r[0];for(;d!==void 0;){if(p===d.index){let u;d.type===2?u=new Ur(s,s.nextSibling,this,e):d.type===1?u=new d.ctor(s,d.name,d.strings,this,e):d.type===6&&(u=new dh(s,this,e)),this.v.push(u),d=r[++c]}p!==(d==null?void 0:d.index)&&(s=Ci.nextNode(),p++)}return n}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Ur{constructor(e,t,i,r){var n;this.type=2,this._$AH=$e,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cg=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ui(this,e,t),_r(e)?e===$e||e==null||e===""?(this._$AH!==$e&&this._$AR(),this._$AH=$e):e!==this._$AH&&e!==ii&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):(i=>{var r;return tl(i)||typeof((r=i)===null||r===void 0?void 0:r[Symbol.iterator])=="function"})(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==$e&&_r(this._$AH)?this._$AA.nextSibling.data=e:this.k($i.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Or.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.m(i);else{const s=new sh(n,this),p=s.p(this.options);s.m(i),this.k(p),this._$AH=s}}_$AC(e){let t=al.get(e.strings);return t===void 0&&al.set(e.strings,t=new Or(e)),t}S(e){tl(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new Ur(this.M(Ar()),this.M(Ar()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class An{constructor(e,t,i,r,n){this.type=1,this._$AH=$e,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$e}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const n=this.strings;let s=!1;if(n===void 0)e=Ui(this,e,t,0),s=!_r(e)||e!==this._$AH&&e!==ii,s&&(this._$AH=e);else{const p=e;let c,d;for(e=n[0],c=0;c<n.length-1;c++)d=Ui(this,p[i+c],t,c),d===ii&&(d=this._$AH[c]),s||(s=!_r(d)||d!==this._$AH[c]),d===$e?e=$e:e!==$e&&(e+=(d!=null?d:"")+n[c+1]),this._$AH[c]=d}s&&!r&&this.C(e)}C(e){e===$e?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class ah extends An{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===$e?void 0:e}}const lh=Mi?Mi.emptyScript:"";class ch extends An{constructor(){super(...arguments),this.type=4}C(e){e&&e!==$e?this.element.setAttribute(this.name,lh):this.element.removeAttribute(this.name)}}class uh extends An{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=Ui(this,e,t,0))!==null&&i!==void 0?i:$e)===ii)return;const r=this._$AH,n=e===$e&&r!==$e||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==$e&&(r===$e||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class dh{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ui(this,e)}}const ll=window.litHtmlPolyfillSupport;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xn,Zn;ll==null||ll(Or,Ur),((Wn=globalThis.litHtmlVersions)!==null&&Wn!==void 0?Wn:globalThis.litHtmlVersions=[]).push("2.2.2");class rt extends Ai{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((i,r,n)=>{var s,p;const c=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:r;let d=c._$litPart$;if(d===void 0){const u=(p=n==null?void 0:n.renderBefore)!==null&&p!==void 0?p:null;c._$litPart$=d=new Ur(r.insertBefore(Ar(),u),u,void 0,n!=null?n:{})}return d._$AI(i),d})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return ii}}rt.finalized=!0,rt._$litElement$=!0,(Xn=globalThis.litElementHydrateSupport)===null||Xn===void 0||Xn.call(globalThis,{LitElement:rt});const cl=globalThis.litElementPolyfillSupport;cl==null||cl({LitElement:rt}),((Zn=globalThis.litElementVersions)!==null&&Zn!==void 0?Zn:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=o=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(o,e):((t,i)=>{const{kind:r,elements:n}=i;return{kind:r,elements:n,finisher(s){window.customElements.define(t,s)}}})(o,e),ph=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Ft(Be({},e),{finisher(t){t.createProperty(e.key,o)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function Qe(o){return(e,t)=>t!==void 0?((i,r,n)=>{r.constructor.createProperty(n,i)})(o,e,t):ph(o,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function dn(o){return Qe(Ft(Be({},o),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bc=({finisher:o,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const n=(r=t.originalKey)!==null&&r!==void 0?r:t.key,s=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:Ft(Be({},t),{key:n});return o!=null&&(s.finisher=function(p){o(p,n)}),s}{const n=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),o==null||o(n,i)}};function Go(o,e){return Bc({descriptor:t=>{const i={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var n,s;return this[r]===void 0&&(this[r]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ul(o){return Bc({descriptor:e=>({get(){var t,i;return(i=(t=this.renderRoot)===null||t===void 0?void 0:t.querySelectorAll(o))!==null&&i!==void 0?i:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Yn;(Yn=window.HTMLSlotElement)===null||Yn===void 0||Yn.prototype.assignedElements;/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _n=o=>e=>class extends e{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=o.subscribe(()=>this.stateChanged(o.getState())),this.stateChanged(o.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(t){}};function ot(o){return"Minified Redux error #"+o+"; visit https://redux.js.org/Errors?code="+o+" for the full message or use the non-minified dev environment for full errors. "}var dl=typeof Symbol=="function"&&Symbol.observable||"@@observable",Jn=function(){return Math.random().toString(36).substring(7).split("").join(".")},pn={INIT:"@@redux/INIT"+Jn(),REPLACE:"@@redux/REPLACE"+Jn(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Jn()}};function hh(o){if(typeof o!="object"||o===null)return!1;for(var e=o;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(o)===e}const D={agrupadorGenerico:{tipo:"DispositivoAgrupadorGenerico",name:void 0,tagId:"dg",descricao:void 0,descricaoPlural:void 0,tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo","Secao"],tiposPermitidosFilhos:["Parte","Livro","Titulo","Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},alinea:{tipo:"Alinea",name:"Alinea",tagId:"ali",descricao:"Al\xEDnea",descricaoPlural:"Al\xEDneas",tiposPermitidosPai:["Inciso"],tiposPermitidosFilhos:["Item"],tipoProvavelFilho:"Item",INDICADOR_SEQUENCIA:[";","; e","; ou"],INDICADOR_FIM_SEQUENCIA:["."],INDICADOR_DESDOBRAMENTO:[":"]},articulacao:{tipo:"Articulacao",name:"Articulacao",tagId:"",descricao:"Articula\xE7\xE3o",descricaoPlural:"Articula\xE7\xF5es",tiposPermitidosPai:[],tiposPermitidosFilhos:["Parte","Livro","Titulo","Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["."],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:[":"]},artigo:{tipo:"Artigo",name:"Artigo",tagId:"art",descricao:"Artigo",descricaoPlural:"Artigos",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo","Secao","Subsecao"],tiposPermitidosFilhos:["Paragrafo","Inciso"],tipoProvavelFilho:"Inciso",INDICADOR_SEQUENCIA:["."],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:[":"]},capitulo:{tipo:"Capitulo",name:"Capitulo",tagId:"cap",descricao:"Cap\xEDtulo",descricaoPlural:"Cap\xEDtulos",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo"],tiposPermitidosFilhos:["Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},caput:{tipo:"Caput",name:"Caput",tagId:"cpt",descricao:"Caput",descricaoPlural:"Capita",tiposPermitidosPai:["Artigo"],tiposPermitidosFilhos:["Inciso"],tipoProvavelFilho:"Inciso",INDICADOR_SEQUENCIA:["."],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:[":"]},generico:{tipo:"DispositivoGenerico",name:void 0,tagId:"gen",descricao:"Dispositivo gen\xE9rico",descricaoPlural:"Dispositivos gen\xE9ricos",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo","Secao","Subsecao"],tiposPermitidosFilhos:["Paragrafo","Inciso","Alinea","Item"],tipoProvavelFilho:"DispositivoGenerico",INDICADOR_SEQUENCIA:[";","; e","; ou"],INDICADOR_FIM_SEQUENCIA:["."],INDICADOR_DESDOBRAMENTO:[":"]},inciso:{tipo:"Inciso",name:"Inciso",tagId:"inc",descricao:"Inciso",descricaoPlural:"Incisos",tiposPermitidosPai:["Artigo","Caput","Paragrafo"],tiposPermitidosFilhos:["Alinea"],tipoProvavelFilho:"Alinea",INDICADOR_SEQUENCIA:[";","; e","; ou"],INDICADOR_FIM_SEQUENCIA:["."],INDICADOR_DESDOBRAMENTO:[":"]},item:{tipo:"Item",name:"Item",tagId:"ite",descricao:"Item",descricaoPlural:"Itens",tiposPermitidosPai:["Alinea"],tiposPermitidosFilhos:[],tipoProvavelFilho:"DispositivoGenerico",INDICADOR_SEQUENCIA:[";","; e","; ou"],INDICADOR_FIM_SEQUENCIA:["."],INDICADOR_DESDOBRAMENTO:[":"]},livro:{tipo:"Livro",name:"Livro",tagId:"liv",descricao:"Livro",descricaoPlural:"Livros",tiposPermitidosPai:["Articulacao","Parte"],tiposPermitidosFilhos:["Titulo","Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},omissis:{tipo:"Omissis",name:"Omissis",tagId:"omi",descricao:"Omissis",descricaoPlural:"Linhas pontilhadas (omissis)",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo","Secao","Subsecao","Artigo","Caput","Paragrafo","Alinea","Inciso"],tiposPermitidosFilhos:["Parte","Livro","Titulo","Capitulo","Secao","Subsecao","Artigo","Paragrafo","Alinea","Inciso","Item"],tipoProvavelFilho:void 0,INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:["NA"]},paragrafo:{tipo:"Paragrafo",name:"Paragrafo",tagId:"par",descricao:"Par\xE1grafo",descricaoPlural:"Par\xE1grafos",tiposPermitidosPai:["Artigo"],tiposPermitidosFilhos:["Inciso"],tipoProvavelFilho:"Inciso",INDICADOR_SEQUENCIA:["."],INDICADOR_FIM_SEQUENCIA:["NA"],INDICADOR_DESDOBRAMENTO:[":"]},parte:{tipo:"Parte",name:"Parte",tagId:"prt",descricao:"Parte",descricaoPlural:"Partes",tiposPermitidosPai:["Articulacao"],tiposPermitidosFilhos:["Livro","Titulo","Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},secao:{tipo:"Secao",name:"Secao",tagId:"sec",descricao:"Se\xE7\xE3o",descricaoPlural:"Se\xE7\xF5es",tiposPermitidosPai:["Articulacao","Parte","Livro","Titulo","Capitulo"],tiposPermitidosFilhos:["Subsecao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},subsecao:{tipo:"Subsecao",name:"Subsecao",tagId:"sub",descricao:"Subse\xE7\xE3o",descricaoPlural:"Subse\xE7\xF5es",tiposPermitidosPai:["Secao"],tiposPermitidosFilhos:["Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]},titulo:{tipo:"Titulo",name:"Titulo",tagId:"tit",descricao:"T\xEDtulo",descricaoPlural:"T\xEDtulos",tiposPermitidosPai:["Articulacao","Parte","Livro"],tiposPermitidosFilhos:["Capitulo","Secao","Artigo"],tipoProvavelFilho:"Artigo",INDICADOR_SEQUENCIA:["NA"],INDICADOR_FIM_SEQUENCIA:[""],INDICADOR_DESDOBRAMENTO:["NA"]}};class No{constructor(e){var t;this.isDispositivoAlteracao=!1,this.descricao=`Adicionar ${(t=e==null?void 0:e.descricao)!==null&&t!==void 0?t:""}`,this.tipo=e==null?void 0:e.tipo}execute(e,t,i,r=!1){return{type:"ADICIONAR_ELEMENTO",atual:e,novo:{tipo:i,isDispositivoAlteracao:this.isDispositivoAlteracao,conteudo:{texto:t}},hasDesmembramento:r}}}const ta=new No,Hc=new No(D.artigo),oa=new No(D.alinea),On=new No(D.inciso),Vc=new No(D.item),Kc=new No(D.omissis),Gc=new No(D.paragrafo);class jt{constructor(e){this.descricao="Adicionar "+e.descricao,this.tipo=e.tipo}execute(e){return{type:"AGRUPAR_ELEMENTO",atual:e,novo:{tipo:this.tipo}}}}const fh=new jt(D.parte),mh=new jt(D.livro),vh=new jt(D.titulo),Qc=new jt(D.capitulo),gh=new jt(D.secao),bh=new jt(D.subsecao),yh=new class{constructor(){this.descricao="Atualizar dispositivo"}execute(o){return{type:"APLICAR_ALTERACOES_EMENDA",alteracoesEmenda:o}}},xh=new class{constructor(){this.descricao="Atualizar dispositivo"}execute(o){return this.tipo=o.tipo,{type:"ATUALIZAR_ELEMENTO",atual:o}}},wh=new class{constructor(){this.descricao="Atualizar Norma Referenciada"}execute(o){return this.tipo=o.tipo,{type:"ATUALIZAR_REFERENCIA_ELEMENTO",atual:o}}},pl=new class{constructor(){this.descricao="Atualizar dispositivo"}execute(o){return this.tipo=o.tipo,{type:"ATUALIZAR_TEXTO_ELEMENTO",atual:o}}},Eh=new class{constructor(){this.descricao="Elemento selecionado"}execute(o){return{type:"ELEMENTO_SELECIONADO",atual:o}}};class Wc{constructor(){this.descricao="Informar norma alterada"}execute(e){return{type:"INFORMAR_NORMA",atual:e}}}const ia=new Wc;class Xc{constructor(){this.descricao="Mover para baixo"}execute(e){return{type:"Mover para baixo",atual:e}}}const Po=new Xc;class Zc{constructor(){this.descricao="Mover para cima"}execute(e){return{type:"Mover para cima",atual:e}}}const Co=new Zc;class qn{constructor(){this.descricao="Remover dispositivo"}execute(e){return{type:"REMOVER_ELEMENTO",atual:e}}}const Mt=new qn,Ah=new class{constructor(){this.descricao="Remover dispositivo sem texto"}execute(o,e){return{type:"REMOVER_ELEMENTO_SEM_TEXTO",atual:o,key:e}}};class Sn{constructor(){this.descricao="Numerar e criar r\xF3tulo para o dispositivo "}execute(e,t,i){return this.tipo=e.tipo,{type:"RENUMERAR_ELEMENTO",atual:e,novo:{numero:t,existenteNaNorma:i}}}}const St=new Sn,ra=new class{constructor(){this.descricao="Abandonar modifica\xE7\xF5es do dispositivo"}execute(o){return{type:"RESTAURAR_ELEMENTO",atual:o}}},Yc=new class{constructor(){this.descricao="Suprimir dispositivo"}execute(o){return{type:"SUPRIMIR_ELEMENTO",atual:o}}};class te{constructor(e,t,i){this.descricao=t,this.tipo=e.tipo,this.nomeAcao=i}execute(e){return{type:"TRANSFORMAR_TIPO_ELEMENTO",subType:this.nomeAcao,atual:e,novo:{tipo:this.tipo}}}}const Jc=new te(D.omissis,"Transformar em Omissis de Al\xEDnea","transformarAlineaEmOmissisAlinea"),eu=new te(D.omissis,"Transformar em Omissis de Inciso de Caput","transformarIncisoCaputEmOmissisIncisoCaput"),tu=new te(D.omissis,"Transformar em Omissis de Item","transformarItemEmOmissisItem"),ou=new te(D.omissis,"Transformar em Omissis de Par\xE1grafo","transformarParagrafoEmOmissisParagrafo"),Ss=new te(D.omissis,"Transformar em Omissis de Inciso de Par\xE1grafo","transformarIncisoParagrafoEmOmissisIncisoParagrafo"),qr=new te(D.inciso,"Transformar Al\xEDnea em Inciso","transformarAlineaEmIncisoCaput"),Sr=new te(D.inciso,"Transformar Al\xEDnea em Inciso","transformarAlineaEmIncisoParagrafo"),iu=new te(D.item,"Transformar Al\xEDnea em Item","transformarAlineaEmItem"),ru=new te(D.paragrafo,"Transformar Artigo em Par\xE1grafo","transformarArtigoEmParagrafo"),_h=new te(D.inciso,"Transformar em Inciso","transformarDispositivoGenericoEmInciso"),Oh=new te(D.alinea,"Transformar em Al\xEDnea","transformarDispositivoGenericoEmAlinea"),qh=new te(D.item,"Transformar em Item","transformarDispositivoGenericoEmItem"),Ir=new te(D.paragrafo,"Transformar Inciso em Par\xE1grafo","transformarIncisoParagrafoEmParagrafo"),kr=new te(D.paragrafo,"Transformar Inciso Caput em Par\xE1grafo","transformarIncisoCaputEmParagrafo"),hl=new te(D.alinea,"Transformar Inciso de Caput em Al\xEDnea","transformarIncisoCaputEmAlinea"),fl=new te(D.alinea,"Transformar Inciso de Caput em Al\xEDnea","transformarIncisoParagrafoEmAlinea"),nu=new te(D.alinea,"Transformar Omissis em Al\xEDnea","transformarOmissisEmAlinea"),su=new te(D.artigo,"Transformar Omissis em Artigo","transformarOmissisEmArtigo"),au=new te(D.inciso,"Transformar Omissis em Inciso de Caput","transformarOmissisEmIncisoCaput"),lu=new te(D.inciso,"Transformar Omissis em Inciso de Par\xE1grafo","transformarOmissisEmIncisoParagrafo"),cu=new te(D.item,"Transformar Omissis em Item","transformarOmissisEmItem"),uu=new te(D.paragrafo,"Transformar Omissis em Par\xE1grafo","transformarOmissisEmParagrafo"),du=new te(D.alinea,"Transformar Item em Al\xEDnea","transformarItemEmAlinea"),pu=new te(D.artigo,"Transformar Par\xE1grafo em Artigo","transformarParagrafoEmArtigo"),hu=new te(D.inciso,"Transformar Par\xE1grafo em Inciso de Par\xE1grafo","transformarParagrafoEmIncisoParagrafo"),fu=new te(D.inciso,"Transformar Par\xE1grafo em Inciso de Caput","transformarParagrafoEmIncisoCaput"),mu=new class{constructor(){this.descricao="Articula\xE7\xE3o validada"}execute(){return{type:"VALIDAR_ARTICULACAO"}}},vu=new class{constructor(){this.descricao="Elemento validado"}execute(o){return{type:"VALIDAR_ELEMENTO",atual:o}}};var U;(function(o){o.DISPOSITIVO_ADICIONADO="Dispositivo Adicionado",o.DISPOSITIVO_NOVO="Dispositivo Novo",o.DISPOSITIVO_MODIFICADO="Dispositivo Modificado",o.DISPOSITIVO_ORIGINAL="Dispositivo Original",o.DISPOSITIVO_SUPRIMIDO="Dispositivo Suprimido"})(U||(U={}));const na=o=>[U.DISPOSITIVO_ADICIONADO.toString(),U.DISPOSITIVO_MODIFICADO.toString(),U.DISPOSITIVO_SUPRIMIDO.toString()].includes(o.situacao.descricaoSituacao),gu=o=>!!na(o)||o.pai!==void 0&&gu(o.pai),Ee=o=>o.tipo===D.articulacao.tipo,gt=o=>o.tipo===D.generico.tipo,K=o=>o.tipo===D.artigo.tipo,Ce=o=>o.tipo===D.caput.tipo,fe=o=>o.tipo===D.paragrafo.tipo,Et=o=>o.tipo===D.inciso.tipo,mt=o=>Et(o)&&Ce(o.pai),yo=o=>Et(o)&&fe(o.pai),Yo=o=>o.tipo===D.alinea.tipo,ml=o=>o.tipo===D.item.tipo,Le=o=>o.tipo===D.omissis.tipo,de=o=>[D.articulacao.tipo,D.agrupadorGenerico.tipo,D.capitulo.tipo,D.livro.tipo,D.parte.tipo,D.secao.tipo,D.subsecao.tipo,D.titulo.tipo].includes(o.tipo),Sh=o=>de(o)&&!Ee(o),vl=o=>o.tipo===D.agrupadorGenerico.tipo,_i=o=>[D.paragrafo.tipo,D.inciso.tipo,D.alinea.tipo,D.item.tipo].includes(o.tipo);function sa(o,e){return e.map(t=>new RegExp(wo(Ii(t))+"\\s*$").test(o)).filter(t=>t)[0]===!0}function Bt(o){switch(o[0].trim()){case".":return"ponto";case":":return"dois pontos";case";":return"ponto e v\xEDrgula";case",":return"v\xEDrgula";default:return o[0].trim()}}function Ii(o){return o.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}function wo(o){return o.replace(/\s+/g,"\\s+")}function ao(o){return o.replace(/\s{2,}/g," ")}class De{constructor(e){this.strs=new Array,e&&this.append(e)}append(e){e&&this.strs.push(e)}toString(){return function(e){let t="";return e.forEach(i=>{t+=i}),t}(this.strs)}}const bu=/[\u0300-\u036f]/g;function Ie(o){if(!o||Ee(o))return o;if(o.pai===void 0)throw new Error("N\xE3o foi encontrada a articula\xE7\xE3o");return Ie(o.pai)}function yu(o,e){if(e.uuid===o)return e;if(e.filhos!==null){let t=null;const i=e.hasAlteracao()?e.alteracoes.filhos:e.filhos;for(let r=0;t===null&&r<i.length;r++)t=yu(o,i[r]);return t}return null}const sn=(o,e)=>{if(e===void 0)throw new Error("uuid n\xE3o foi informado");return yu(e,o)},Fi=o=>{var e;return Me(o)?Fi(o.filhos[o.filhos.length-1]):(o==null?void 0:o.hasAlteracao())&&((e=o.alteracoes)===null||e===void 0?void 0:e.filhos.length)?Fi(o.alteracoes.filhos[o.alteracoes.filhos.length-1]):o},Je=o=>K(o)?Ie(o).artigos.filter(e=>e.tipo===o.tipo):o.pai?o.pai.filhos.filter(e=>e.tipo===o.tipo):[o],Nr=(o,e,t)=>{if(o!=null&&o.filhos){for(let i=o==null?void 0:o.indexOf(e);i>=0;i--){const r=o==null?void 0:o.filhos[i];de(r)&&t.push(r)}if(o!=null&&o.pai)return Nr(o.pai,e.pai,t)}return t},Is=(o,e)=>{if(o&&o.pai)return o.pai&&o.pai.tipo===e?o.pai:Is(o.pai,e)},xu=o=>K(o.pai)?o.pai:xu(o.pai),wu=o=>{const e=o.pai;return K(e)&&!G(e)?o.pai:wu(o.pai)},Fr=(o,e)=>{if(o!=null&&o.filhos){for(let t=(o==null?void 0:o.indexOf(e))-1;t>=0;t--){const i=o==null?void 0:o.filhos[t];if(K(i))return i;if(de(i))return Eu(i)}if(o!=null&&o.pai)return Fr(o.pai,e.pai)}},Eu=o=>{if(o!==void 0&&o.filhos)for(let e=o.filhos.length-1;e>=0;e--){const t=o.filhos[e];if(K(t))return t;if(de(t))return Eu(t)}},gl=o=>{const e=o.pai.indexOf(o);return o.pai.filhos.filter((t,i)=>i>e&&de(t))[0]},bl=o=>{var e;return((e=o.filhos)===null||e===void 0?void 0:e.filter(t=>gt(t)).length)>0},me=o=>Je(o).length===1,Ue=o=>{const e=Je(o);return e[e.length-1]===o},yl=o=>{const e=Je(o);return e.length>1&&e[e.length-2]===o},Wt=o=>Je(o)[0]===o,Me=o=>o.filhos&&o.filhos.length>0,Te=o=>{const e=o.pai.indexOf(o);return e>0?o.pai.filhos[e-1]:void 0},Yt=o=>{const e=Je(o),t=e.indexOf(o);return t>0?e[t-1]:void 0},ni=o=>{const e=o.pai.indexOf(o);return e===0?void 0:o.pai.filhos.filter((i,r)=>r<e&&(i.tipo===o.tipo||i.tipo===Kc.tipo)).pop()},Pr=o=>{const e=o.pai.indexOf(o);return e<o.pai.filhos.length-1?o.pai.filhos[e+1]:void 0},aa=o=>{var e,t,i;const r=(e=o.pai)===null||e===void 0?void 0:e.indexOf(o);return(i=(t=o.pai)===null||t===void 0?void 0:t.filhos.filter((n,s)=>s<r&&n.tipo===o.tipo&&n.pai===o.pai))!==null&&i!==void 0?i:[]},Au=o=>{var e,t,i;const r=(e=o.pai)===null||e===void 0?void 0:e.indexOf(o);return(i=(t=o.pai)===null||t===void 0?void 0:t.filhos.filter((n,s)=>s>r&&n.tipo===o.tipo))!==null&&i!==void 0?i:[]},si=o=>{const e=o.pai.indexOf(o);return e===o.pai.filhos.length-1?void 0:o.pai.filhos.filter((i,r)=>r>e&&(i.tipo===o.tipo||i.tipo===Kc.tipo))[0]},_u=(o,e=!1)=>{if(K(o)){const i=Ie(o),r=Ie(o).indexOfArtigo(o);return i.artigos.filter((n,s)=>s>r)}const t=o.pai.indexOf(o);return o.pai.filhos.filter((i,r)=>e?r>t:r>=t).filter(i=>o.tipo===i.tipo)},hn=o=>K(o)&&me(o),la=o=>fe(o)&&me(o),ca=o=>o.cabecaAlteracao||Ct(o)?o:ca(o.pai),Ct=o=>G(o)&&Ee(o.pai)&&o.pai.pai!==void 0,At=o=>{const e=ca(o),t=ri(e);return t.length>0&&t[t.length-1]===o},ai=o=>{const e=Ie(o).pai;if(!e)return!1;const t=Ie(e);return me(e)||t.indexOfArtigo(e)<t.artigos.length-1},Ve=o=>Ee(o)&&o.pai!==void 0,G=o=>{if(o.isDispositivoAlteracao)return!0;try{return Ie(o).pai!==void 0}catch{return!1}},li=o=>o.situacao.descricaoSituacao===U.DISPOSITIVO_ORIGINAL,Ou=o=>o.situacao.descricaoSituacao===U.DISPOSITIVO_MODIFICADO||o.situacao.descricaoSituacao===U.DISPOSITIVO_SUPRIMIDO,ri=o=>xo(o,[]),xo=(o,e)=>{e.push(o);const t=o.hasAlteracao()?o.alteracoes.filhos:o.filhos;return t.length&&t.forEach(i=>xo(i,e)),e},Bo=(o,e)=>{if(o)if(e(o),o.tipo===D.artigo.tipo){const t=o;t.caput&&(Bo(t.caput,e),o.alteracoes&&Bo(o.alteracoes,e),o.filhos.filter(i=>fe(i)).forEach(i=>{Bo(i,e)}))}else o.alteracoes&&Bo(o.alteracoes,e),o.filhos.forEach(t=>{Bo(t,e)})},Oi=(o,e)=>{if(!o)return;let t=e(o);if(t)return t;if(o.tipo===D.artigo.tipo){const i=o;if(i.caput){if(t=Oi(i.caput,e),t||o.alteracoes&&(t=Oi(o.alteracoes,e),t))return t;for(const r of o.filhos.filter(n=>fe(n)))if(t=Oi(r,e),t)return t}}else{if(o.alteracoes&&(t=Oi(o.alteracoes,e),t))return t;for(const i of o.filhos)if(t=Oi(i,e),t)return t}},Jo=o=>o&&!o.pai&&o.tipo===D.articulacao.tipo,fn=(o,e)=>{const t=Ih(e);let i=o;if(t){const r=o.artigos.find(n=>t===n.id);if(r){if(e===t||e===t+"_cpt")return r;i=r}}return Oi(i,r=>e===r.id?r:void 0)},Ih=o=>{const e=/^art\d+(-\d+)*/.exec(o);return e!=null&&e.length?e[0]:void 0},qu=o=>{if(!o)return!1;let e=o.pai;for(;e;){if(e.situacao.descricaoSituacao===U.DISPOSITIVO_SUPRIMIDO)return!0;e=e.pai}return!1};var Z;(function(o){o[o.INFO=0]="INFO",o[o.WARNING=1]="WARNING",o[o.ERROR=2]="ERROR"})(Z||(Z={}));const bt="...........................................................................................",ut=o=>{var e;const t=K(o)?o.caput:o;return sa(t.texto,(e=t.INDICADOR_DESDOBRAMENTO)!==null&&e!==void 0?e:[])},Cr=o=>{var e;const t=K(o)?o.caput:o;return sa(t.texto,(e=t.INDICADOR_FIM_SEQUENCIA)!==null&&e!==void 0?e:[])},ki=o=>{var e;const t=K(o)?o.caput:o;return sa(t.texto,(e=t.INDICADOR_SEQUENCIA)!==null&&e!==void 0?e:[])},Tr=bt+".\u201D (NR)",Su=o=>new RegExp(wo(Ii("o seguinte acr\xE9scimo:"))+"\\s*$").test(o)||new RegExp(wo(Ii("os seguintes acr\xE9scimos:"))+"\\s*$").test(o)||new RegExp(wo(Ii("passa a vigorar com a seguinte altera\xE7\xE3o:"))+"\\s*$").test(o)||new RegExp(wo(Ii("passa a vigorar com as seguintes altera\xE7\xF5es:"))+"\\s*$").test(o),Xt=o=>/^[.]*(?:\s*)["”“]?(\s*)?\(NR\)\s*$/.test(o)?Tr:/["”]?(\s*)?\(NR\)?\s*$/.test(o)?o.replace(/["“](?!.*["”])/,"\u201D"):o!==bt&&o!==Tr&&new RegExp("^[.]+$").test(o)?bt:o,Iu=o=>/\.["”](?:\s*\(NR\))\s*$/.test(o),xl=o=>o!==void 0&&/.*:[\s]{1,2}["”“].*[.]["”“]$/.test(o),kh=o=>{var e;const t=[];return(Ee(o)||o.texto)&&o.texto.trim().length!==0||t.push({tipo:Z.ERROR,descricao:"N\xE3o foi informado um texto para "+(o.artigoDefinido+" "+o.descricao)}),Ee(o)||!o.texto||function(i){const r=document.createElement("div");return r.innerHTML=i,r.innerHTML===i}(o.texto)||t.push({tipo:Z.ERROR,descricao:"O conte\xFAdo do dispositivo n\xE3o \xE9 um HTML v\xE1lido"}),!Ee(o)&&o.texto&&o.texto.trim().length>300&&t.push({tipo:Z.WARNING,descricao:"Pelo princ\xEDpio da concis\xE3o, o texto dos dispositivos n\xE3o deve ser extenso, devendo ser utilizadas frases curtas e concisas"}),_i(o)&&!fe(o)&&o.texto&&/^[A-ZÀ-Ú]/.test(o.texto)&&t.push({tipo:Z.WARNING,descricao:`${o.descricao} deveria iniciar com letra min\xFAscula, a n\xE3o ser que se trate de uma situa\xE7\xE3o especial, como nome pr\xF3prio`}),!_i(o)||fe(o)||Le(o)||!o.texto||me(o)||Ue(o)||yl(o)||Me(o)||o.INDICADOR_SEQUENCIA===void 0||function(i){const r=i.replace(/(<([^>]+)>)/gi,"").trim();return r.length>0?r.charAt(r.length-1):""}(o.texto)===o.INDICADOR_SEQUENCIA[0]||t.push({tipo:Z.ERROR,descricao:`${o.descricao} deveria terminar com ${Bt(o.INDICADOR_SEQUENCIA)}. ${ki(o)?"A varia\xE7\xE3o informada s\xF3 \xE9 permitida para o pen\xFAltimo elemento":""}`}),!K(o)&&!fe(o)||!o.texto||/^[...]{3,}/.test(o.texto)||/^[A-ZÀ-Ú]/.test(o.texto)||t.push({tipo:Z.ERROR,descricao:`${o.descricao} deveria iniciar com letra mai\xFAscula`}),G(o)||de(o)||Le(o)||!o.texto||!(!K(o)&&Me(o)||K(o)&&Me(o.caput))||ut(o)||t.push({tipo:Z.ERROR,descricao:`${o.descricao} deveria terminar com ${Bt(o.INDICADOR_DESDOBRAMENTO)}`}),G(o)||!_i(o)||fe(o)||!o.texto||!me(o)&&!Ue(o)||bl(o.pai)||Me(o)||Cr(o)||t.push({tipo:Z.ERROR,descricao:`\xDAltimo dispositivo de uma sequ\xEAncia deveria terminar com ${Bt(o.INDICADOR_FIM_SEQUENCIA)}`}),G(o)||!_i(o)||fe(o)||!o.texto||me(o)||!yl(o)||Me(o)||ki(o)||t.push({tipo:Z.ERROR,descricao:`${o.descricao} deveria terminar com uma das seguintes possibilidades: ${o.INDICADOR_SEQUENCIA.join("     ")}`}),G(o)||!K(o)&&!fe(o)||!o.texto||Me(o)||o.hasAlteracao()||me(o)||ki(o)||xl(o.texto)||t.push({tipo:Z.ERROR,descricao:`${o.descricao} deveria terminar com ${Bt(o.INDICADOR_SEQUENCIA)}`}),!G(o)&&K(o)&&o.texto&&o.hasAlteracao()&&!ut(o)&&!Su(o.texto)&&t.push({tipo:Z.ERROR,descricao:`${o.descricao} deveria terminar com ${Bt(o.INDICADOR_DESDOBRAMENTO)}`}),G(o)||!K(o)||!o.texto||o.hasAlteracao()||Me(o)&&Me(o.caput)||!ut(o)||t.push({tipo:Z.ERROR,descricao:`${o.descricao} deveria terminar com ${Bt(o.INDICADOR_SEQUENCIA)}`}),!G(o)&&K(o)&&o.hasAlteracao()&&!(!((e=o.alteracoes)===null||e===void 0)&&e.base)&&t.push({tipo:Z.ERROR,descricao:"\xC9 necess\xE1rio informar a norma a ser alterada"}),G(o)&&!de(o)&&o.texto!==bt&&o.texto&&(!K(o)&&Me(o)||K(o)&&Me(o.caput))&&!ut(o)&&t.push({tipo:Z.ERROR,descricao:`${o.descricao} deveria terminar com ${Bt(o.INDICADOR_DESDOBRAMENTO)}`}),!(G(o)&&fe(o)&&o.texto)||Me(o)||me(o)||Ue(o)||ki(o)||t.push({tipo:Z.ERROR,descricao:`${o.descricao} deveria terminar com ${Bt(o.INDICADOR_SEQUENCIA)}`}),!G(o)||!At(o)||o.texto&&Iu(o.texto)||t.push({tipo:Z.ERROR,descricao:"O \xFAltimo dispositivo do bloco de altera\xE7\xE3o deve terminar com: <b>.&#8221; (NR)</b>"}),G(o)&&o.texto&&!At(o)&&/.*["”“]$/.test(o.texto)&&!xl(o.texto)&&!/”.*(NR)/.test(o.texto)&&t.push({tipo:Z.ERROR,descricao:"Somente o \xFAltimo dispositivo do bloco de altera\xE7\xE3o poderia ser finalizado com aspas"}),G(o)&&o.texto&&!At(o)&&/”.*(NR)/.test(o.texto)&&t.push({tipo:Z.ERROR,descricao:"Somente o \xFAltimo dispositivo do bloco de altera\xE7\xE3o poderia terminar com &#8221; (NR)"}),G(o)&&o.texto&&o===ca(o)&&o.filhos.length===0&&(o.texto===Tr||o.texto===bt)&&t.push({tipo:Z.ERROR,descricao:"N\xE3o foi informada nenhuma altera\xE7\xE3o"}),!(G(o)&&o.texto&&_i(o))||fe(o)||Le(o)||o.pai.filhos.filter(i=>Le(i)).length!==0||!me(o)||bl(o.pai)||Me(o)||Cr(o)||At(o)||t.push({tipo:Z.ERROR,descricao:`\xDAltimo dispositivo de uma sequ\xEAncia deveria terminar com ${Bt(o.INDICADOR_FIM_SEQUENCIA)}`}),t},Nh=o=>de(o)?(e=>{const t=[];var i,r;return Ee(e)||e.texto&&e.texto.trim().length!==0||t.push({tipo:Z.ERROR,descricao:`N\xE3o foi informado um texto para ${e.artigoDefinido} ${e.descricao}`}),!Ee(e)&&e.texto&&(i=e.texto,/[.,:]\s*$/.test(i))&&t.push({tipo:Z.ERROR,descricao:`N\xE3o pode haver sinal de pontua\xE7\xE3o ao final do texto d${e.artigoDefinido} ${e.descricao}`}),!Ee(e)&&(r=e.texto,/<.+>/g.test(r==null?void 0:r.trim()))&&t.push({tipo:Z.ERROR,descricao:`Texto d${e.artigoDefinido} ${e.descricao} n\xE3o pode possuir formata\xE7\xE3o`}),t})(o):kh(o);var wl;function zr(o){return class extends o{constructor(){super(...arguments),this.tipoGenero="feminino",this.artigoDefinido="a",this.pronomePossessivoSingular=" da ",this.pronomePossessivoPlural=" das ",this.artigoDefinidoSingular=" a ",this.artigoDefinidoPlural=" as ",this.artigoIndefinidoSingular=" uma ",this.artigoDefinidoPrecedidoPreposicaoASingular=" \xE0 ",this.artigoDefinidoPrecedidoPreposicaoAPlural=" \xE0s ",this.contracaoEmArtigoDefinidoSingular=" na "}}}function In(o){return class extends o{constructor(){super(...arguments),this.tipoGenero="indefinido",this.artigoDefinido="",this.pronomePossessivoSingular="",this.pronomePossessivoPlural="",this.artigoDefinidoSingular="",this.artigoDefinidoPlural="",this.artigoIndefinidoSingular="",this.artigoDefinidoPrecedidoPreposicaoASingular="",this.artigoDefinidoPrecedidoPreposicaoAPlural="",this.contracaoEmArtigoDefinidoSingular=""}}}function $t(o){return class extends o{constructor(){super(...arguments),this.tipoGenero="masculino",this.artigoDefinido="o",this.pronomePossessivoSingular=" do ",this.pronomePossessivoPlural=" dos ",this.artigoDefinidoSingular=" o ",this.artigoDefinidoPlural=" os ",this.artigoIndefinidoSingular=" um ",this.artigoDefinidoPrecedidoPreposicaoASingular=" ao ",this.artigoDefinidoPrecedidoPreposicaoAPlural=" aos ",this.contracaoEmArtigoDefinidoSingular=" no "}}}(function(o){o.MASCULINO="masculino",o.FEMININO="feminino",o.INDEFINIDO="indefinido"})(wl||(wl={}));const ku=new(zr(Object)),Nu=new($t(Object)),Ph=new(In(Object)),ua=o=>o==="F"?ku:o==="M"?Nu:Ph;class Ch{constructor(e,t){this.nome=e,this.genero=typeof t=="string"?ua(t):t}}const Pu={autoridades:[{urn:"federal",descricao:"Federal"},{urn:"senado.federal",descricao:"Senado Federal"},{urn:"congresso.nacional",descricao:"Congresso Nacional"}],tiposDocumento:[{urn:"lei",descricao:"Lei",genero:"F"},{urn:"lei.complementar",descricao:"Lei Complementar",genero:"F"},{urn:"lei.delegada",descricao:"Lei Delegada",genero:"F"},{urn:"decreto.legislativo",descricao:"Decreto Legislativo",genero:"M"},{urn:"decreto.lei",descricao:"Decreto-Lei",genero:"M"},{urn:"decreto",descricao:"Decreto",genero:"M"},{urn:"consolidacao.leis.trabalho",descricao:"Consolida\xE7\xE3o das Leis do Trabalho",genero:"F"},{urn:"resolucao",descricao:"Resolu\xE7\xE3o",genero:"F"},{urn:"regimento.interno",descricao:"Regimento Interno",genero:"M"},{urn:"constituicao",descricao:"Constitui\xE7\xE3o",genero:"F"},{urn:"ato.disposicoes.constitucionais.transitorias",descricao:"Ato das Disposi\xE7\xF5es Constitucionais Transit\xF3rias",genero:"M"},{urn:"medida.provisoria",descricao:"Medida Provis\xF3ria",genero:"F"},{urn:"medida.provisoria;mpv",descricao:"Medida Provis\xF3ria",genero:"F"},{urn:"emenda.constitucional",descricao:"Emenda Constitucional",genero:"F"},{urn:"emenda.constitucional.revisao",descricao:"Emenda Constitucional de Revis\xE3o",genero:"F"},{urn:"proposta.emenda.constitucional;pec",descricao:"Proposta de Emenda Constitucional",genero:"F"},{urn:"projeto.lei;pl",descricao:"Projeto de Lei",genero:"M"},{urn:"projeto.lei;pls",descricao:"Projeto de Lei do Senado",genero:"M"},{urn:"projeto.lei.complementar;plp",descricao:"Projeto de Lei Complementar",genero:"M"},{urn:"projeto.lei.complementar;pls",descricao:"Projeto de Lei Complementar do Senado",genero:"M"},{urn:"projeto.lei;plc",descricao:"Projeto de Lei da C\xE2mara",genero:"M"},{urn:"projeto.lei.complementar;plc",descricao:"Projeto de Lei Complementar da C\xE2mara",genero:"M"},{urn:"projeto.lei.conversao;plv",descricao:"Projeto de Lei de Convers\xE3o",genero:"M"},{urn:"projeto.resolucao;prs",descricao:"Projeto de Resolu\xE7\xE3o do Senado",genero:"M"},{urn:"projeto.decreto.legislativo;pds",descricao:"Projeto de Decreto Legislativo",genero:"M"},{urn:"projeto.decreto.legislativo;pdl",descricao:"Projeto de Decreto Legislativo",genero:"M"},{urn:"substitutivo.projeto.lei.senado;scd",descricao:"Substitutivo da C\xE2mara dos Deputados",genero:"M"},{urn:"emenda.projeto.lei.senado;ecd",descricao:"Emenda(s) da C\xE2mara dos Deputados",genero:"F"}],fakeUrns:[{sigla:"PEC",urnAutoridade:"senado.federal",urnTipoDocumento:"proposta.emenda.constitucional;pec"},{sigla:"PL",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei;pl"},{sigla:"PLS",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei;pls"},{sigla:"PLP",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei.complementar;plp"},{sigla:"PLC",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei;plc"},{sigla:"PLV",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei.conversao;plv"},{sigla:"PRS",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.resolucao;prs"},{sigla:"PDS",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.decreto.legislativo;pds"},{sigla:"PDL",urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.decreto.legislativo;pdl"},{sigla:"SCD",urnAutoridade:"senado.federal",urnTipoDocumento:"substitutivo.projeto.lei.senado;scd"},{sigla:"ECD",urnAutoridade:"senado.federal",urnTipoDocumento:"emenda.projeto.lei.senado;ecd"},{sigla:"MPV",urnAutoridade:"senado.federal",urnTipoDocumento:"medida.provisoria;mpv"}],siglas:[{urnAutoridade:"federal",urnTipoDocumento:"medida.provisoria",sigla:"MPV"},{urnAutoridade:"congresso.nacional",urnTipoDocumento:"projeto.lei",sigla:"PLN"},{urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei",sigla:"PLS"},{urnAutoridade:"congresso.nacional",urnTipoDocumento:"medida.provisoria",sigla:"MPV"},{urnAutoridade:"senado.federal",urnTipoDocumento:"projeto.lei.senado.federal",sigla:"PLS"},{urnAutoridade:"camara.deputados",urnTipoDocumento:"projeto.lei",sigla:"PLC"}],atalhosUrn:[{urnTipoDocumento:"constituicao",urnAutoridade:"federal",urn:"urn:lex:br:federal:constituicao:1988-10-05;1988",nome:"Constitui\xE7\xE3o Federal"},{urnTipoDocumento:"ato.disposicoes.constitucionais.transitorias",urnAutoridade:"federal",urn:"urn:lex:br:federal:ato.disposicoes.constitucionais.transitorias:1988-10-05;1988",nome:"Ato das Disposi\xE7\xF5es Constitucionais Transit\xF3rias - ADCT"},{urnTipoDocumento:"consolidacao.leis.trabalho",urnAutoridade:"federal",urn:"urn:lex:br:federal:decreto.lei:1943-05-01;5452",nome:"Consolida\xE7\xE3o das Leis do Trabalho - CLT, aprovada pelo Decreto-Lei n\xBA 5.452, de 1\xBA de maio de 1943",genero:"F"},{urnTipoDocumento:"regimento.interno",urnAutoridade:"senado.federal",urn:"urn:lex:br:senado.federal:resolucao:1970-11-27;93",nome:"Regimento Interno do Senado Federal",genero:"M"},{urnTipoDocumento:"regimento.interno",urnAutoridade:"congresso.nacional",urn:"urn:lex:br:congresso.nacional:resolucao:1970-08-11;1",nome:"Regimento Comum do Congresso Nacional",genero:"M"}],eventos:[{urn:"leitura",tipoTextoProcessoLegislativo:"Texto inicial",genero:"M"},{urn:"aprovacao.substitutivo.decisao.terminativa",tipoTextoProcessoLegislativo:"Reda\xE7\xE3o do vencido em turno suplementar na Comiss\xE3o",substitutivo:"s",genero:"F"},{urn:"aprovacao.substitutivo",tipoTextoProcessoLegislativo:"Reda\xE7\xE3o do vencido em turno suplementar no Plen\xE1rio",substitutivo:"s",genero:"F"},{urn:"apresentacao.substitutivo",tipoTextoProcessoLegislativo:"Texto do substitutivo",substitutivo:"s",genero:"M"}]},ci=o=>{var e;const t=(e=o.replace("urn:lex:br:",""))===null||e===void 0?void 0:e.split(":");return Pu.tiposDocumento.filter(i=>i.urn===t[1])[0]},kn=o=>{var e,t,i;const r=(e=o.replace("urn:lex:br:",""))===null||e===void 0?void 0:e.split(":");return((t=r[2])===null||t===void 0?void 0:t.indexOf(";"))>-1?(i=r[2])===null||i===void 0?void 0:i.substring(r[2].indexOf(";")+1):""},Ti=o=>{var e,t,i,r,n;const s=(e=o.replace("urn:lex:br:",""))===null||e===void 0?void 0:e.split(":"),p=(t=s[2])===null||t===void 0?void 0:t.substring(0,s[2].indexOf(";"));if(/\d{4}$/.test(p))return p;const c=(n=(r=(i=s[2])===null||i===void 0?void 0:i.substring(0,s[2].indexOf(";")))===null||r===void 0?void 0:r.split("-"))===null||n===void 0?void 0:n.reverse();return c?c.join("/"):""},Cu=o=>{const e=o.indexOf("!");return e!==-1?o.substring(0,e):o},Tu=o=>{const e=o.match(/^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](\d{4})$/);return e?`${e[3]}-${e[2]}-${e[1]}`:""},Du=o=>{var e,t;const i=(e=(p=>{var c;const d=(c=p.replace("urn:lex:br:",""))===null||c===void 0?void 0:c.split(":");return Pu.autoridades.filter(u=>u.urn===d[0])[0]})(o))===null||e===void 0?void 0:e.urn,r=(t=ci(o))===null||t===void 0?void 0:t.urn,n=/^\d{1,5}$/.test(kn(o)),s=/\d{4}$/.test(Ti(o))?Ti(o):Tu(Ti(o));return(o==null?void 0:o.startsWith("urn:lex:br:"))&&i&&r&&n&&s},mn=o=>{var e;const t=Cu(o),i=kn(t),r=(e=ci(t))===null||e===void 0?void 0:e.descricao,n=Ti(t),[s,p,c]=n.split("/").map(u=>parseInt(u)),d=n.length>7?Th(new Date(c,p-1,s)):void 0;return(r||"")+(i?" n\xBA "+parseInt(i).toLocaleString("pt-BR"):"")+(d?", de "+d:"")},Th=o=>o?o.getDate()+" de "+o.toLocaleDateString("pt-BR",{month:"long"})+" de "+o.getFullYear():void 0,es={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XV:40,X:10,IX:9,V:5,IV:4,I:1},qo=o=>/^\d{1,}([-]?[a-zA-Z]+)?$/.test(o),Ru=o=>/^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/i.test(o),Lu=o=>{if(!/[a-zA-Z]+/.test(o))throw new Error(`O valor ${o} n\xE3o \xE9 uma sequ\xEAncia de letras v\xE1lida.`);o=o.toLowerCase();let e=0;return[...o].forEach(t=>e=t.toLowerCase().charCodeAt(0)-97+1+26*e),e.toString()},ks=o=>{const e=parseInt(o);return e?Ns(e):o},Ns=o=>{let e="",t=0;for(;o>0;)t=(o-1)%26,o=(o-t-1)/26,e=e.replace(/^/,String.fromCharCode(97+t));return e},ju=o=>{if(!Ru(o))throw new Error("O valor '"+o+"' n\xE3o \xE9 um n\xFAmero em algarismo romano v\xE1lido.");let e=0,t=1;for(let i=(o=o.toLowerCase()).length-1;i>=0;i--){const r=Dh(o.charAt(i));r>t&&(t=r),r<t?e-=r:e+=r}return e.toString()},Dh=o=>{switch(o.toLowerCase()){case"i":return 1;case"v":return 5;case"x":return 10;case"l":return 50;case"c":return 100;case"d":return 500;case"m":return 1e3;default:return 0}},hr=o=>{let e,t="",i=o.search(/[a-zA-Z-]/)===-1?parseInt(o):parseInt(o.substring(0,o.search(/[a-zA-Z-]/)));const r=o.search(/[a-zA-Z-]/)===-1?"":o.substring(o.search(/[a-zA-Z-]/));for(const n in es){if(e=Math.floor(i/es[n]),e>=0)for(let s=0;s<e;s++)t+=n;i%=es[n]}return t+r},Ot=(o,e)=>{const t=o.search(/-[a-zA-Z-]/)===-1?o:o.substring(0,o.search(/-[a-zA-Z-]/)),i=o.search(/-[a-zA-Z-]/)===-1?"":o.substring(o.search(/-[a-zA-Z-]/));return(e?e(t):t)+(i==null?void 0:i.toUpperCase())},El=(o,e)=>!o||e&&o<e?1:!e||o&&o>e?-1:0,Rh=o=>{var e;return(K(o)?(e=(t=>{const i=Ie(t).indexOfArtigo(t);return i===-1||Ie(t).artigos.length===i+1?[]:Ie(t).artigos.filter((r,n)=>n>i)})(o))!==null&&e!==void 0?e:[]:Au(o)).filter(t=>li(t)).length>0},Lh=o=>{let e=0;const t=o.tipo;do(li(o)||Ou(o))&&o.tipo===t&&e++,o=K(o)?Fr(o.pai,o):Te(o);while(o!==void 0);return e},jh=o=>{let e=0;const t=o.tipo;for(;o!==void 0&&!li(o)&&!Ou(o)&&o.tipo===t;)e++,o=K(o)?Fr(o.pai,o):Te(o);return e},Nn=o=>(e=>{const t=Lh(e);if(li(e))return new tr(t);const i=jh(e),r=t>0,n=Rh(e);if(!r&&!n)return new tr(i);if(!r&&n){const s=new tr(0);return s.addNovoSeqOrdem(i),s}if(r&&n){const s=new tr(t);return s.addNovoSeqOrdem(i),s}return new tr(t+i)})(o).getNumeracao(gu(o));class tr{constructor(e){this.seq=e}addNovoSeqOrdem(e){this.seq>0?this.letras=Ns(e).toUpperCase():e>1&&(this.letras=Ns(e-1).toUpperCase())}getNumeracao(e){var t;return this.seq+(e&&this.letras?"-":"")+((t=this.letras)!==null&&t!==void 0?t:"")}}const Mh=o=>G(o)?(e=>{var t,i,r,n,s,p,c;const d=[];var u;return e===null&&d.push({tipo:Z.ERROR,descricao:"O dispositivo n\xE3o foi informado"}),e!==null&&e.numero!==void 0&&e.numero.trim().length===0&&d.push({tipo:Z.ERROR,descricao:"O dispositivo n\xE3o cont\xE9m numera\xE7\xE3o"}),e!==null&&((t=e.rotulo)===null||t===void 0?void 0:t.trim().length)===0&&d.push({tipo:Z.ERROR,descricao:"O dispositivo n\xE3o cont\xE9m r\xF3tulo"}),e!==null&&!gt(e)&&((i=e.rotulo)===null||i===void 0?void 0:i.endsWith(e.tipo))&&d.push({tipo:Z.ERROR,descricao:"O r\xF3tulo informado n\xE3o \xE9 v\xE1lido. Numere o dispositivo"}),e!==null&&G(e)&&fe(e)&&!me(e)&&((r=e.rotulo)===null||r===void 0?void 0:r.endsWith("\xFAnico."))&&d.push({tipo:Z.ERROR,descricao:`Quando houver mais de um ${e.descricao}, n\xE3o pode se tratar de '${e.descricao} \xFAnico'`}),e===null||Ct(e)||e.numero===void 0||((n=e.pai)===null||n===void 0?void 0:n.indexOf(e))!==0||e.numero==="1"||d.push({tipo:Z.ERROR,descricao:"\xC9 necess\xE1rio um omissis antes deste dispositivo"}),e===null||!Le(e)||((s=Te(e))===null||s===void 0?void 0:s.tipo)!==D.omissis.name&&((p=Pr(e))===null||p===void 0?void 0:p.tipo)!==D.omissis.name||d.push({tipo:Z.ERROR,descricao:"N\xE3o pode haver mais de um omissis sequencialmente"}),e!==null&&e.numero!==void 0&&e.pai.indexOf(e)>0&&aa(e).filter(a=>a.numero!==void 0).filter(a=>El(a.numero,e.numero)===-1).length>0&&d.push({tipo:Z.ERROR,descricao:"O dispositivo tem n\xFAmero menor do que algum dispositivo anterior"}),e!==null&&e.numero!==void 0&&!e.pai.isLastFilho(e)&&_u(e).filter(a=>e.pai===a.pai&&a.numero!==void 0).filter(a=>El(a.numero,e.numero)===1).length>0&&d.push({tipo:Z.ERROR,descricao:"O dispositivo tem n\xFAmero maior do que algum dispositivo posterior"}),e!==null&&!Ct(e)&&e.numero!==void 0&&Je(e).filter(a=>a.numero&&a.numero===e.numero).length>1&&d.push({tipo:Z.ERROR,descricao:"O dispositivo tem n\xFAmero igual a de outro dispositivo"}),e!==null&&!Ct(e)&&e.numero!==void 0&&(u=e.numero,/^\d+$/.test(u))&&parseInt(e.numero)>2&&e.pai.indexOf(e)>0&&Yt(e)&&e.tipo!==((c=Yt(e))===null||c===void 0?void 0:c.rotulo)&&Je(e).filter(a=>a.numero&&a.numero===e.numero).length===0&&parseInt(e.numero)!==parseInt(Yt(e).numero)+1&&d.push({tipo:Z.ERROR,descricao:"\xC9 necess\xE1rio um omissis antes deste dispositivo"}),d})(o):(e=>{const t=[];return e===null&&t.push({tipo:Z.ERROR,descricao:"O dispositivo n\xE3o foi informado"}),e!==null&&e.numero&&e.numero.trim().length===0&&t.push({tipo:Z.ERROR,descricao:"O dispositivo n\xE3o cont\xE9m numera\xE7\xE3o"}),e!==null&&e.rotulo&&e.rotulo.trim().length===0&&t.push({tipo:Z.ERROR,descricao:"O dispositivo n\xE3o cont\xE9m r\xF3tulo"}),t})(o),Pe=o=>li(o)?[]:(e=>{const t=[];if(e===null&&t.push({tipo:Z.ERROR,descricao:"O dispositivo n\xE3o foi informado"}),e!==null&&e.filhos.length>0&&e.tiposPermitidosFilhos.length===0&&t.push({tipo:Z.ERROR,descricao:`Segundo a Legisla\xE7\xE3o vigente, ${e.descricao} n\xE3o poderia possuir filhos`}),e!==null&&(gt(e)||vl(e))&&t.push({tipo:Z.ERROR,descricao:"N\xE3o foi poss\xEDvel validar a natureza deste dispositivo com base na legisla\xE7\xE3o vigente"}),e===null||!e.pai||vl(e.pai)||gt(e)||e.tiposPermitidosPai.includes(e.pai.tipo)||t.push({tipo:Z.ERROR,descricao:`Segundo a Legisla\xE7\xE3o vigente, ${e.descricao} somente poderia pertencer a ${e.tiposPermitidosPai.join(", ")}`}),e!==null&&!gt&&e.filhos.length>0&&(e.tiposPermitidosFilhos.length===0||e.filhos.filter(i=>!e.tiposPermitidosFilhos.includes(i.tipo)).length>0)){const i=e.tiposPermitidosFilhos.length===0?"n\xE3o poderia possuir filhos":`somente poderia possuir ${e.tiposPermitidosFilhos.join(", ")}`;t.push({tipo:Z.ERROR,descricao:`Segundo a Legisla\xE7\xE3o vigente, ${e.descricao} ${i}`})}return t})(o).concat(Nh(o),Mh(o),(e=>{const t=[];return e.alteracoes&&e.alteracoes.base?(Du(e.alteracoes.base)||t.push({tipo:Z.ERROR,descricao:"N\xE3o foi informada uma norma alterada v\xE1lida"}),t):[]})(o));class Dr{constructor(e){this.descricaoSituacao=U.DISPOSITIVO_SUPRIMIDO,this.dispositivoOriginal=e}getAcoesPermitidas(e,t){const i=[];return(mt(e)?e.pai.pai:e.pai).situacao.descricaoSituacao!==U.DISPOSITIVO_SUPRIMIDO&&i.push(ra),i}}const fr=o=>Ee(o)?"cpt_alt1":o.tagId?o.tagId+(Ce(o)?"":Le(o)?aa(o).length+1:o.numero?(K(o)||fe(o))&&o.numero==="1"&&me(o)?"1u":(e=>{const t=e==null?void 0:e.split("-"),[i,...r]=t,n=r.map(s=>Lu(s));return(n==null?void 0:n.length)>0?i+"-"+(n==null?void 0:n.join("-").toUpperCase()):i})(o.numero):`[urn:${o.uuid}]`):void 0,vn=(o,e=[])=>{if(Ee(o)&&o.pai===void 0)return;const t=fr(o);if(t&&e.unshift(t),K(o)){if(G(o)){const i=Ie(o);vn(i,e)}}else vn(o.pai,e)},So=o=>{const e=[];return vn(o,e),e.join("_")},Ps=o=>{var e,t;return((t=(e=o.hierarquia)===null||e===void 0?void 0:e.pai)===null||t===void 0?void 0:t.uuidAlteracao)!==void 0||o.uuidAlteracao!==void 0},Mu=(o,e=0)=>(o==null?void 0:o.pai)===void 0||de(o)?e:K(o)?G(o)?++e:e:(e=Ct(o==null?void 0:o.pai)?e+2:++e,K(o==null?void 0:o.pai)?e:Mu(o.pai,e)),$h=o=>{var e;const t=o.pai?Ce(o.pai)?o.pai.pai:o.pai:void 0;return{tipo:t==null?void 0:t.tipo,uuid:t==null?void 0:t.uuid,uuidAlteracao:t&&G(o)?(e=Ie(o).pai)===null||e===void 0?void 0:e.uuid:void 0}},X=(o,e=!0)=>{var t,i,r;const n=o.pai;return{tipo:o.tipo,nivel:Mu(o),agrupador:de(o),hierarquia:{pai:n?$h(o):void 0,posicao:n?n.indexOf(o):void 0,numero:o.numero},editavel:!(Ee(o)||o.situacao instanceof Dr),sendoEditado:!1,uuid:o.uuid,lexmlId:o.id&&o.numero&&fr(o),numero:o.numero,rotulo:(t=o.rotulo)!==null&&t!==void 0?t:"",conteudo:{texto:o.texto},norma:(i=o.alteracoes)===null||i===void 0?void 0:i.base,existeNaNormaAlterada:o.situacao.descricaoSituacao===U.DISPOSITIVO_ADICIONADO?o.situacao.existeNaNormaAlterada:void 0,index:0,acoesPossiveis:e?o.getAcoesPossiveis(o):[],descricaoSituacao:(r=o.situacao)===null||r===void 0?void 0:r.descricaoSituacao,mensagens:li(o)?[]:o.mensagens}},Rr=(o,e)=>{e.filhos!==void 0&&e.filhos.forEach(t=>{var i;const r=X(t);K(t)&&(r.conteudo.texto=t.caput.texto),o.push(r),K(t)&&t.hasAlteracao()&&((i=t.alteracoes)===null||i===void 0||i.filhos.forEach(n=>{o.push(X(n)),Rr(o,n)})),Rr(o,t)})},dt=o=>{var e;const t=[];return t.push(X(o,!0)),K(o)&&o.hasAlteracao()&&K(o)&&o.hasAlteracao()&&((e=o.alteracoes)===null||e===void 0||e.filhos.forEach(i=>{t.push(X(i)),Rr(t,i)})),Rr(t,o),t},_e=(o,e,t=!1)=>{var i;const r=((s,p)=>{var c,d;return!Ps(p)||Ve(s)?s:(d=(c=_e(s,{uuid:p.hierarquia?p.hierarquia.pai.uuidAlteracao:p.uuidAlteracao}))===null||c===void 0?void 0:c.alteracoes)!==null&&d!==void 0?d:s})(o,e);if(!t&&Ps(e)){const s=_e(r,{uuid:e.hierarquia?e.hierarquia.pai.uuidAlteracao:e.uuidAlteracao});return s!=null&&s.alteracoes?(i=s.alteracoes)===null||i===void 0?void 0:i.filhos.flatMap(p=>{const c=[];return xo(p,c),c}).filter(p=>p.uuid===e.uuid)[0]:void 0}if((e==null?void 0:e.tipo)===D.artigo.tipo){const s=r.filhos.find(p=>p.uuid===e.uuid);if(s)return s}const n=(e==null?void 0:e.tipo)===D.articulacao.tipo||(e==null?void 0:e.uuid)===void 0?r:sn(r,e.uuid);if(n!==null)return n},fi=(o,e,t)=>{var i;const r=Pe(e);if(r.length>0||e.mensagens&&((i=e.mensagens)===null||i===void 0?void 0:i.length)>0){e.mensagens=r;const n=X(e,t);n.mensagens=Pe(e),o.push(n)}},Br=(o,e=!0)=>{const t=[];if(!o)return[];if(G(o)&&Me(o)&&o.filhos.filter(i=>i.tipo===D.omissis.tipo).length>0&&(fi(t,o),o.filhos.filter(i=>i.tipo===D.omissis.tipo).forEach(i=>fi(t,i))),_i(o)||gt(o)){const i=mt(o)?o.pai.pai:o.pai;fi(t,i),de(i)&&fi(t,mt(o)?o.pai.pai:o.pai),Je(o).forEach(r=>{(e||r!==o)&&fi(t,r,!0)})}else!e||Ee(o)||de(o)||fi(t,o,!0);return t},zi=o=>(K(o)||fe(o))&&Je(o).length<=2?Je(o).filter(e=>o.uuid!==e.uuid):_u(o,!0).filter(e=>e.tipo===o.tipo),$u=o=>zi(o).map(e=>(e.mensagens=Pe(e),X(e)));var j;(function(o){o.ArticulacaoAtualizada="ArticulacaoAtualizada",o.ComandoEmendaGerado="ComandoEmendaGerado",o.DocumentoCarregado="DocumentoCarregado",o.InformarNorma="InformarNorma",o.ElementoModificado="ElementoModificado",o.ElementoIncluido="ElementoIncluido",o.ElementoRemovido="ElementoRemovido",o.ElementoRenumerado="ElementoRenumerado",o.ElementoRestaurado="ElementoRestaurado",o.ElementoSuprimido="ElementoSuprimido",o.ElementoValidado="ElementoValidado",o.ElementoSelecionado="ElementoSelecionado",o.ElementoMarcado="ElementoMarcado",o.SituacaoElementoModificada="SituacaoElementoModificada"})(j||(j={}));const Uh=(o,e)=>((t,i)=>{const r=dt(t);return{articulacao:t,modo:i,past:[],present:[],future:[],ui:{events:[{stateType:j.DocumentoCarregado,elementos:r}]}}})(e.articulacao,e.classificacao),da=function(o=0){return{next:()=>++o}}();function nt(o){return class extends o{constructor(){super(...arguments),this.mensagens=[]}}}class Uu{constructor(e){this.tipoAcao=e,this.isDispositivoAlteracao=!0,this.descricao=e==="INICIAR_BLOCO"?"Inserir bloco de altera\xE7\xE3o":"Finalizar bloco de altera\xE7\xE3o"}execute(e,t,i,r=!1){return{type:"ADICIONAR_ELEMENTO",subType:this.tipoAcao,atual:e,novo:{tipo:i,isDispositivoAlteracao:this.isDispositivoAlteracao,conteudo:{texto:t}},hasDesmembramento:r}}}const ro=new Uu("INICIAR_BLOCO"),To=new Uu("FINALIZAR_BLOCO");function st(o){return class extends o{get alteracoes(){}hasAlteracao(){return!1}}}var gn,vt;function pt(o){return class extends o{constructor(){super(...arguments),this.tipoConteudo=gn.ConteudoTexto,this.texto=""}}}function Do(o){return class extends o{addFilho(e,t){if(t&&this.filhos.indexOf(t)>=0){const i=this.filhos.indexOf(t)+1;this.isLastFilho(t)?this.filhos.push(e):this.filhos.splice(i,0,e)}else this.filhos.push(e);K(e)&&Ie(e).addArtigo(e,t)}addFilhoOnPosition(e,t){var i;if(this.filhos.splice(t,0,e),K(e)){const r=(i=Te(e))!==null&&i!==void 0?i:Fr(e.pai.pai,e.pai),n=Ie(e),s=r?n.indexOfArtigo(r)+1:0;n.addArtigoOnPosition(e,s)}}hasArtigos(){return this.filhos.filter(e=>K(e)).length>0}isLastFilho(e){return this.filhos.indexOf(e)===this.filhos.length-1}get filhos(){var e;return this._filhos=(e=this._filhos)!==null&&e!==void 0?e:[],this._filhos}indexOf(e){return this.filhos.indexOf(e)}removeFilho(e){this._filhos=this.filhos.filter(t=>t.uuid!==e.uuid),K(e)&&Ie(e).removeArtigo(e)}renumeraFilhos(){var e;this.filhos.filter(t=>!K(t)).forEach(t=>{t.numero=Nn(t),t.createRotulo(t),t.id=So(t)}),(e=Ie(this.filhos[0]))===null||e===void 0||e.renumeraArtigos()}}}function ui(o){return class extends o{addFilho(e,t){if(t){const i=this.filhos.indexOf(t)+1;this.isLastFilho(t)?this.filhos.push(e):this.filhos.splice(i,0,e)}else this.filhos.push(e)}addFilhoOnPosition(e,t){this.filhos.splice(t,0,e)}hasArtigos(){return this.filhos.filter(e=>K(e)).length>0}isLastFilho(e){return this.filhos.indexOf(e)===this.filhos.length-1}get filhos(){var e;return this._filhos=(e=this._filhos)!==null&&e!==void 0?e:[],this._filhos}indexOf(e){return this.filhos.indexOf(e)}removeFilho(e){this._filhos=this.filhos.filter(t=>t.uuid!==e.uuid)}renumeraFilhos(){this.filhos.filter(e=>!G(e)&&(e.situacao.descricaoSituacao===U.DISPOSITIVO_NOVO||e.situacao.descricaoSituacao===U.DISPOSITIVO_ADICIONADO)).forEach(e=>{e.numero=Nn(e),e.createRotulo(e),e.id=So(e)})}}}function Ro(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoAgrupadorLcp95",this.informouAgrupadorUnico=!1}getNomeAgrupadorUnico(e){return`${e.descricao} \xFAnic${e.artigoDefinido}`.toLocaleUpperCase()}normalizaNumeracao(e){const t=e.trim().split(/\s+/);if(t.length!==2)return"";const i=t[1].split("-");return Ru(i[0])?(i[0]=ju(i[0]),i.join("-")):""}createNumeroFromRotulo(e){if(e)if(this.informouAgrupadorUnico=/.*[uú]nic[ao]/i.test(e),this.informouAgrupadorUnico)this.numero="1";else{const t=this.normalizaNumeracao(e);this.numero=this.informouAgrupadorUnico?"1":qo(t)?t:void 0}}createRotulo(e){var t;const i=e.descricao===void 0?(t=e.name)!==null&&t!==void 0?t:"":e.descricao.toLocaleUpperCase();this.numero===void 0?this.rotulo=Ct(e)?"\u201C"+e.tipo:e.tipo:this.numero===void 0||qo(this.numero)?e.isDispositivoAlteracao&&Ct(e)?this.rotulo="\u201C"+(this.informouAgrupadorUnico?this.getNomeAgrupadorUnico(e):i+" "+Ot(this.numero,hr)):Je(e).length===1?this.rotulo=this.getNomeAgrupadorUnico(e):this.rotulo=i+" "+Ot(this.numero,hr):this.rotulo=i+" "+this.numero}getNumeracaoParaComandoEmenda(){const e=new De,t=this.numero?Ot(this.numero,hr):"???";e.append(this.descricao+" "+t);const i=this.pai;return i&&!Jo(i)&&(e.append(i.pronomePossessivoSingular),e.append(" "),e.append(i.getNumeracaoParaComandoEmenda())),e.toString()}getNumeracaoComRotuloParaComandoEmenda(){return this.getNumeracaoParaComandoEmenda()}}}(function(o){o.ConteudoTexto="Conte\xFAdo de Texto"})(gn||(gn={})),function(o){o.EMENDA="emenda",o.EMENDA_ARTIGO_ONDE_COUBER="emendaArtigoOndeCouber",o.NORMA="norma",o.PROJETO="projeto"}(vt||(vt={}));const le=[];le.push(ia),le.push(Po),le.push(Co),le.push(St),le.push(ro),le.push(To),le.push(Jc),le.push(eu),le.push(tu),le.push(ou),le.push(Ss),le.push(qr),le.push(Sr),le.push(iu),le.push(ru),le.push(_h),le.push(Oh),le.push(qh),le.push(Ir),le.push(du),le.push(kr),le.push(nu),le.push(su),le.push(au),le.push(lu),le.push(cu),le.push(uu),le.push(pu),le.push(hu),le.push(fu),le.push(Mt),le.push(ra),le.push(Yc),le.push(vu),le.push(fh),le.push(mh),le.push(vh),le.push(Qc),le.push(gh),le.push(bh);const zo=[];zo.push(ta),zo.push(Hc),zo.push(oa),zo.push(On),zo.push(Vc),zo.push(Gc);const Fh=o=>le.includes(o),pa=[...le,...zo,mu],Di=o=>pa.filter(e=>e instanceof jt&&e.tipo===o)[0];function Lo(o){return class extends o{getAcoesPossiveis(e){var t,i,r,n;const s=[];if(!de(e))return[];if(aa(e).length===0&&Au(e).length>0&&e.filhos.filter(p=>de(p)).length>0||s.push(Mt),e.pai&&Ee(e.pai)&&de(e.pai)&&Yt(e)===void 0){const p=(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.indexOf(e.pai.tipo);(i=e.tiposPermitidosPai)===null||i===void 0||i.filter((c,d)=>d>p).forEach(c=>s.push(Di(c)))}if(e.pai&&!Ee(e.pai)&&de(e.pai)&&e.pai.indexOf(e)===0){const p=(r=e.tiposPermitidosPai)===null||r===void 0?void 0:r.indexOf(e.pai.tipo);(n=e.tiposPermitidosPai)===null||n===void 0||n.filter((c,d)=>d>p).forEach(c=>s.push(Di(c)))}return e.pai&&e.pai.indexOf(e)>0&&de(e.pai)&&!Ee(e.pai)&&s.push(Di(e.pai.tipo)),G(e)&&s.push(St),e.getAcoesPermitidas(e,s)}getAcaoPossivelTab(e){}getAcaoPossivelShiftTab(e){}}}const Lr=o=>{var e,t;return G(o.pai)&&o.filhos.length===0&&o.tipo!==D.omissis.name&&((e=Te(o))===null||e===void 0?void 0:e.tipo)!==D.omissis.name&&((t=Pr(o))===null||t===void 0?void 0:t.tipo)!==D.omissis.name};class ha{constructor(){this.descricaoSituacao=U.DISPOSITIVO_NOVO}getAcoesPermitidas(e,t){return[...new Set(t)].filter(i=>i!==void 0).filter(i=>i.descricao!=="Adicionar"&&i.descricao!=="Atualizar dispositivo").sort((i,r)=>i.descricao.localeCompare(r.descricao))}}function et(o){return class extends o{constructor(){super(...arguments),this.situacao=new ha}getAcoesPermitidas(e,t){var i;return(i=this.situacao)===null||i===void 0?void 0:i.getAcoesPermitidas(e,t)}}}class tt{constructor(e){this.tipo=D[e].tipo,this.tagId=D[e].tagId,this.name=D[e].name,this.descricao=D[e].descricao,this.descricaoPlural=D[e].descricaoPlural,this.tiposPermitidosPai=D[e].tiposPermitidosPai,this.tiposPermitidosFilhos=D[e].tiposPermitidosFilhos,this.tipoProvavelFilho=D[e].tipoProvavelFilho,this.INDICADOR_SEQUENCIA=D[e].INDICADOR_SEQUENCIA,this.INDICADOR_FIM_SEQUENCIA=D[e].INDICADOR_FIM_SEQUENCIA,this.INDICADOR_DESDOBRAMENTO=D[e].INDICADOR_DESDOBRAMENTO}}const fa=(o,e)=>{e.tipoProvavelFilho!==void 0&&o.filhos.forEach((t,i)=>{var r;const n=pe(K(e)&&D.inciso.name===e.tipoProvavelFilho?e.caput:e,e.tipoProvavelFilho);n.texto=(r=t.texto)!==null&&r!==void 0?r:"",n.situacao=t.situacao,n.mensagens=Pe(t),t.filhos&&fa(t,n),i===o.filhos.length-1&&e.renumeraFilhos()})},Fu=(o,e)=>{o.tipo===e.tipo&&o.filhos.forEach(t=>{var i;const r=pe(K(e)&&Ce(t.pai)?e.caput:e,t.tipo);t.rotulo?r.rotulo=t.rotulo:r.createRotulo(r),r.texto=(i=t.texto)!==null&&i!==void 0?i:"",r.situacao=t.situacao,o.removeFilho(t),r.mensagens=Pe(t),t.filhos&&(o.tipo===e.tipo?Fu(t,r):fa(t,r)),o.filhos.length===0&&e.renumeraFilhos()})},zh=et(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return Yo(e)?(t.push(Mt),si(e)!==void 0&&t.push(Po),ni(e)!==void 0&&t.push(Co),G(e)&&t.push(St),G(e)&&At(e)&&(t.push(ro),ai(e)&&t.push(To)),(e.texto.length===0||ki(e))&&t.push(oa),(e.texto.length===0||ut(e))&&t.push(Vc),(me(e)||Ue(e))&&t.push(fe(e.pai.pai)?Sr:qr),(!Wt(e)||Te(e)!==void 0&&Le(Te(e)))&&t.push(iu),Lr(e)&&t.push(Jc),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){var t;if(Yo(e))return(t=e.tiposPermitidosFilhos)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof te).filter(n=>n instanceof te&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}getAcaoPossivelShiftTab(e){var t;if(Yo(e))return me(e)||Ue(e)?fe(e.pai.pai)?Sr:qr:(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof te).filter(n=>n instanceof te&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(nt(zr(st(pt(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoAlineaLcp95",this.SUFIXO=")"}normalizaNumeracao(e){const t=/[a-z]+(-[a-zA-Z]+)*/.exec(e.trim());return t?t[0]:wo(e).trim().replace(/\)$/,"").trim()}createNumeroFromRotulo(e){this.numero=Ot(this.normalizaNumeracao(e),Lu)}createRotulo(){this.rotulo=this.numero===void 0?D.alinea.name:Ot(this.numero,ks)+this.SUFIXO}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerada]":"\u201C"+Ot(this.numero,ks)+"\u201D"}getNumeracaoComRotuloParaComandoEmenda(){var e,t;return this.numero===void 0?((e=D.alinea.descricao)===null||e===void 0?void 0:e.toLocaleLowerCase())+" [ainda n\xE3o numerada]":((t=D.alinea.descricao)===null||t===void 0?void 0:t.toLocaleLowerCase())+" "+this.getNumeracaoParaComandoEmenda()}}}(ui(tt)))))))),Bh=et(function(o){return class extends o{getAcoesPossiveis(e){var t,i,r,n,s,p;const c=[];if(!K(e))return[];if(c.push(ta),c.push(Mt),si(e)!==void 0&&c.push(Po),ni(e)!==void 0&&c.push(Co),G(e)&&!gt(e)&&c.push(St),G(e)&&At(e)&&(c.push(ro),ai(e)&&c.push(To)),e.alteracoes&&c.push(ia),e.hasAlteracao()||G(e)||e.texto.length!==0&&ut(e)||c.push(Hc),e.hasAlteracao()||G(e)||e.texto.length!==0&&!ut(e)||c.push(On),e.hasAlteracao()||G(e)||Me(e)||c.push(ro),e.pai.indexOf(e)>0&&c.push(ru),e.pai&&!G(e)&&Ee(e.pai)&&e.pai.filhos.filter(d=>de(d)).length===0&&c.push(Qc),!G(e)&&e.pai&&(d=>{const u=d.pai.indexOf(d);return d.pai.filhos.filter((a,l)=>l>u&&de(a)).length>0})(e)&&c.push(Di(gl(e).tipo)),!G(e)&&de(e.pai)){const d=(i=(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.indexOf(e.pai.tipo))!==null&&i!==void 0?i:0;(r=e.tiposPermitidosPai)===null||r===void 0||r.filter(()=>d>0).filter((u,a)=>e.pai.indexOf(e)>0?a>=d:a>d).forEach(u=>c.push(Di(u)))}if(!G(e)&&de(e.pai)&&!Ee(e.pai)&&e.pai.indexOf(e)>0&&(d=>{var u;return((u=d.pai)===null||u===void 0?void 0:u.pai)!==void 0&&Nr(d.pai.pai,d.pai,[]).length>0})(e)){const d=(s=(n=e.tiposPermitidosPai)===null||n===void 0?void 0:n.indexOf(e.pai.tipo))!==null&&s!==void 0?s:0,u=Nr(e.pai.pai,e.pai,[]).reduce((a,l)=>a.includes(l.tipo)&&gl(l)!==void 0?a:a.concat(l.tipo),[]);(p=e.tiposPermitidosPai)===null||p===void 0||p.filter(()=>d>0).filter(a=>u.includes(a)).forEach(a=>c.push(Di(a)))}return e.getAcoesPermitidas(e,c)}getAcaoPossivelTab(e){var t;if(K(e))return(t=e.tiposPermitidosFilhos)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof te).filter(n=>n instanceof te&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}getAcaoPossivelShiftTab(e){var t;if(e.tiposPermitidosFilhos)return mt(e)&&(me(e)||Ue(e))?kr:yo(e)&&(me(e)||Ue(e))?Ir:Yo(e)&&(me(e)||Ue(e))?fe(e.pai.pai)?Sr:qr:(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof te).filter(n=>n instanceof te&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(nt($t(function(o){return class extends o{hasAlteracao(){var e;return!!this.alteracoes&&((e=this.alteracoes.filhos)===null||e===void 0?void 0:e.length)>0}}}(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoArtigoLcp95",this.PREFIXO="Art. ",this.SUFIXO="\xBA",this.ARTIGO_UNICO="Artigo \xFAnico.",this.informouArtigoUnico=!1}normalizaNumeracao(e){return e.replace(/["”“]/g,"").replace(/\./g,"").replace(/artigo [uú]nico/i,"1").replace(/(art[.]{0,1})/i,"").replace(/[º]/i,"").trim()}createNumeroFromRotulo(e){const t=this.normalizaNumeracao(e);this.informouArtigoUnico=/.*[uú]nico/i.test(e),this.numero=this.informouArtigoUnico?"1":qo(t)?t:void 0}createRotulo(e){e===void 0?this.rotulo=D.artigo.descricao:e.situacao.descricaoSituacao===U.DISPOSITIVO_ADICIONADO&&e.situacao.tipoEmenda===vt.EMENDA_ARTIGO_ONDE_COUBER?this.rotulo="Art.":this.numero===void 0?this.rotulo=Ct(e)?"\u201C"+e.tipo:e.tipo:this.numero===void 0||qo(this.numero)?Ct(e)?this.rotulo="\u201C"+(this.informouArtigoUnico?this.ARTIGO_UNICO:this.PREFIXO+this.getNumeroAndSufixoNumeracao()):Ie(e).artigos.length===1?this.rotulo=this.ARTIGO_UNICO:this.rotulo=this.PREFIXO+this.numero===void 0?void 0:this.PREFIXO+this.getNumeroAndSufixoNumeracao():this.rotulo=this.PREFIXO+this.numero+this.SUFIXO}getNumeroAndSufixoNumeracao(e=!1){var t;const i=(t=this.numero)===null||t===void 0?void 0:t.split("-"),[r,...n]=i;return(parseInt(r!=null?r:"1",10)<10?r+this.SUFIXO:r)+(n.length>0?"-"+(n==null?void 0:n.map(ks).join("-").toUpperCase()):"")+(!e&&parseInt(r!=null?r:"1",10)>9?".":"")}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerado]":this.informouArtigoUnico?"artigo \xFAnico":this.getNumeroAndSufixoNumeracao(!0)}getNumeracaoComRotuloParaComandoEmenda(){var e;return this.numero===void 0?((e=D.artigo.descricao)===null||e===void 0?void 0:e.toLowerCase())+" [ainda n\xE3o numerado]":this.informouArtigoUnico?"artigo \xFAnico":"art. "+this.getNumeroAndSufixoNumeracao(!0)}}}(function(o){return class extends o{get filhos(){const e=this.getIncisosCaput(),t=this.paragrafos;return e.concat(t)}getIncisosCaput(){var e,t;return(t=(e=this.caput)===null||e===void 0?void 0:e.filhos)!==null&&t!==void 0?t:[]}get paragrafos(){var e;return this._paragrafos=(e=this._paragrafos)!==null&&e!==void 0?e:[],this._paragrafos}addFilhoOnPosition(e,t){Et(e)?this.caput.addFilhoOnPosition(e,t):this.paragrafos.splice(t-this.getIncisosCaput().length,0,e)}addFilho(e,t){Ce(e)?this.caput=e:Et(e)?this.addIncisoCaput(e,t):this.addParagrafo(e,t)}removeFilho(e){var t;Et(e)?(t=this.caput)===null||t===void 0||t.removeFilho(e):this.removeParagrafo(e)}addIncisoCaput(e,t){this.caput.addFilho(e,t)}addParagrafo(e,t){if(t){const i=this.paragrafos.indexOf(t)+1;this.isLastFilho(t)?this.paragrafos.push(e):this.paragrafos.splice(i,0,e)}else this.paragrafos.push(e)}removeParagrafo(e){var t;this._paragrafos=(t=this._paragrafos)===null||t===void 0?void 0:t.filter(i=>i.uuid!==e.uuid?i:i.pai=void 0)}isLastFilho(e){return this.paragrafos.indexOf(e)===this.paragrafos.length-1}indexOf(e){return Et(e)?this.caput.indexOf(e):this.filhos.indexOf(e)}renumeraIncisos(){var e;(e=this.caput)===null||e===void 0||e.renumeraFilhos()}renumeraParagrafos(){this.paragrafos.filter(e=>!G(e)&&!li(e)).forEach(e=>{e.numero=Nn(e),e.createRotulo(e),e.id=So(e)})}isParagrafoUnico(){return this.paragrafos.length===1}renumeraFilhos(){this.renumeraIncisos(),this.renumeraParagrafos()}}}(class extends tt{constructor(){super("artigo")}get texto(){var o,e;return(e=(o=this.caput)===null||o===void 0?void 0:o.texto)!==null&&e!==void 0?e:""}set texto(o){this.caput.texto=o}}))))))),Hh=et(function(o){return class extends o{getAcoesPossiveis(e){return[]}getAcaoPossivelTab(e){}getAcaoPossivelShiftTab(e){}}}(nt($t(st(pt(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoIndisponivel"}createRotulo(){this.rotulo=void 0}createNumeroFromRotulo(){}getNumeracaoParaComandoEmenda(){return""}getNumeracaoComRotuloParaComandoEmenda(){return"caput"}}}(ui(tt)))))))),Vh=et(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return gt(e)?(t.push(Mt),G(e)&&At(e)&&(t.push(ro),ai(e)&&t.push(To)),(fe(e.pai)||Ce(e.pai)||Et(e.pai)||Yo(e.pai))&&e.pai.tipoProvavelFilho.length>0&&t.push(pa.filter(i=>i instanceof te&&i.nomeAcao==="transformarDispositivoGenericoEm"+e.pai.tipoProvavelFilho)[0]),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){}getAcaoPossivelShiftTab(e){}}}(nt(In(st(pt(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoDispositivoGenericoLcp95",this.SUFIXO=" -"}createNumeroFromRotulo(){}createRotulo(){this.rotulo=this.numero===void 0?"dg":this.numero+this.SUFIXO}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"dg":this.numero}getNumeracaoComRotuloParaComandoEmenda(){return this.getNumeracaoParaComandoEmenda()}}}(ui(tt)))))))),Kh=et(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return Et(e)?(t.push(Mt),si(e)!==void 0&&t.push(Po),ni(e)!==void 0&&t.push(Co),G(e)&&!gt(e)&&t.push(St),G(e)&&At(e)&&(t.push(ro),ai(e)&&t.push(To)),G(e)&&!gt(e)&&t.push(St),ut(e)&&t.push(oa),ki(e)&&t.push(On),Cr(e)&&Ue(e)&&t.push(Gc),mt(e)&&(!Wt(e)||Te(e)!==void 0&&Le(Te(e)))&&t.push(hl),mt(e)&&(me(e)||Ue(e))&&t.push(kr),mt(e)&&Lr(e)&&t.push(eu),yo(e)&&(me(e)||Wt(e))&&t.push(Ss),yo(e)&&(!Wt(e)||Te(e)!==void 0&&Le(Te(e)))&&t.push(fl),yo(e)&&Lr(e)&&t.push(Ss),yo(e)&&(me(e)||Ue(e))&&t.push(Ir),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){var t;if(Et(e))return!mt(e)||me(e)&&Wt(e)?yo(e)&&(me(e)||Ue(e))?fl:(t=e.tiposPermitidosFilhos)===null||t===void 0?void 0:t.map(i=>{const r=Et(e)?e.pai.tipo:"",n=i.endsWith(D.inciso.name)?!fe(e)||me(e)&&Wt(e)?"IncisoCaput":"IncisoParagrafo":i,s="transformar"+e.tipo+r+"Em"+n;return e.getAcoesPossiveis(e).filter(p=>p instanceof te).filter(p=>p instanceof te&&p.nomeAcao&&s&&p.nomeAcao===s)[0]})[0]:hl}getAcaoPossivelShiftTab(e){var t;if(Et(e))return mt(e)&&(me(e)||Ue(e))?kr:yo(e)&&(me(e)||Ue(e))?Ir:(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof te).filter(n=>n instanceof te&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(nt($t(st(pt(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoIncisoLcp95",this.SUFIXO=" \u2013"}normalizaNumeracao(e){const t=/[CDILMVX]+(-[a-zA-Z]+)*/.exec(e);return t?t[0]:wo(e).trim().replace(/-$/,"").trim()}createNumeroFromRotulo(e){const t=Ot(this.normalizaNumeracao(e),ju);this.numero=qo(t)?t:void 0}createRotulo(){this.rotulo=this.numero===void 0?D.inciso.name:Ot(this.numero,hr)+this.SUFIXO}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerado]":Ot(this.numero,hr)}getNumeracaoComRotuloParaComandoEmenda(){var e,t;return this.numero===void 0?((e=D.inciso.descricao)===null||e===void 0?void 0:e.toLocaleLowerCase())+" [ainda n\xE3o numerado]":((t=D.inciso.descricao)===null||t===void 0?void 0:t.toLocaleLowerCase())+" "+this.getNumeracaoParaComandoEmenda()}}}(ui(tt)))))))),Gh=et(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return ml(e)?(t.push(Mt),si(e)!==void 0&&t.push(Po),ni(e)!==void 0&&t.push(Co),G(e)&&!gt(e)&&t.push(St),G(e)&&At(e)&&(t.push(ro),ai(e)&&t.push(To)),(me(e)||Ue(e))&&t.push(du),Lr(e)&&t.push(tu),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){var t;if(ml)return(t=e.tiposPermitidosFilhos)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof te).filter(n=>n instanceof te&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}getAcaoPossivelShiftTab(e){var t;if(e.tiposPermitidosFilhos)return(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof te).filter(n=>n instanceof te&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(nt($t(st(pt(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoItemLcp95",this.SUFIXO="."}normalizaNumeracao(e){const t=/\d+(-[a-zA-Z]+)*/.exec(e.trim());return t?t[0]:wo(e).trim().replace(/\.$/,"").trim()}createNumeroFromRotulo(e){const t=this.normalizaNumeracao(e);this.numero=qo(t)?t:void 0}createRotulo(){this.rotulo=this.numero===void 0?D.item.name:Ot(this.numero)+this.SUFIXO}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerado]":Ot(this.numero)}getNumeracaoComRotuloParaComandoEmenda(){var e,t;return this.numero===void 0?((e=D.item.descricao)===null||e===void 0?void 0:e.toLocaleLowerCase())+" [ainda n\xE3o numerado]":((t=D.item.descricao)===null||t===void 0?void 0:t.toLocaleLowerCase())+" "+this.getNumeracaoParaComandoEmenda()}}}(ui(tt)))))))),Qh=et(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return fe(e)?(t.push(Mt),si(e)!==void 0&&t.push(Po),ni(e)!==void 0&&t.push(Co),G(e)&&t.push(St),e.texto&&ut(e)&&t.push(On),(Wt(e)||me(e))&&t.push(fu),me(e)||t.push(hu),(Ue(e)||me(e))&&t.push(pu),Lr(e)&&t.push(ou),G(e)&&At(e)&&(t.push(ro),ai(e)&&t.push(To)),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){var t;if(fe(e))return(t=e.tiposPermitidosFilhos)===null||t===void 0?void 0:t.map(i=>{const r=i.endsWith(D.inciso.name)?!fe(e)||me(e)&&Wt(e)?"IncisoCaput":"IncisoParagrafo":i,n="transformar"+e.tipo+"Em"+r;return e.getAcoesPossiveis(e).filter(s=>s instanceof te).filter(s=>s instanceof te&&s.nomeAcao&&n&&s.nomeAcao===n)[0]})[0]}getAcaoPossivelShiftTab(e){var t;if(e.tiposPermitidosFilhos)return mt(e)&&(me(e)||Ue(e))?kr:yo(e)&&(me(e)||Ue(e))?Ir:Yo(e)&&(me(e)||Ue(e))?fe(e.pai.pai)?Sr:qr:(t=e.tiposPermitidosPai)===null||t===void 0?void 0:t.map(i=>{const r="transformar"+e.tipo+"Em"+i;return e.getAcoesPossiveis(e).filter(n=>n instanceof te).filter(n=>n instanceof te&&n.nomeAcao&&r&&n.nomeAcao===r)[0]})[0]}}}(nt($t(st(pt(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoParagrafoLcp95",this.PREFIXO="\xA7 ",this.SUFIXO="\xBA",this.PARAGRAFO_UNICO="Par\xE1grafo \xFAnico.",this.informouParagrafoUnico=!1}normalizaNumeracao(e){return e.trim().replace(/\./g,"").replace(/§/i,"").replace(/par[aá]grafo [uú]nico/i,"1").replace(/[º]/i,"").trim()}createNumeroFromRotulo(e){const t=this.normalizaNumeracao(e);this.informouParagrafoUnico=/.*[uú]nico/i.test(e),this.numero=this.informouParagrafoUnico?"1":qo(t)?t:void 0}createRotulo(e){var t;this.numero!==void 0&&e?qo(this.numero)?e.isDispositivoAlteracao?this.rotulo=this.informouParagrafoUnico?this.PARAGRAFO_UNICO:this.PREFIXO+this.getNumeroAndSufixoNumeracao():((t=e.pai)===null||t===void 0?void 0:t.filhos.filter(i=>fe(i)).length)===1?this.rotulo=this.PARAGRAFO_UNICO:this.rotulo=this.PREFIXO+this.numero===void 0?void 0:this.PREFIXO+this.getNumeroAndSufixoNumeracao():this.rotulo=this.getNumeroAndSufixoNumeracao():this.rotulo=D.paragrafo.name}getNumeroAndSufixoNumeracao(){if(!this.numero)return"";const e=this.numero.search(/[a-zA-Z-]/)===-1?parseInt(this.numero):parseInt(this.numero.substring(0,this.numero.search(/[a-zA-Z-]/))),t=this.numero.search(/[a-zA-Z-]/)===-1?"":this.numero.substring(this.numero.search(/[a-zA-Z-]/));return(e<10?e+this.SUFIXO:e)+((t==null?void 0:t.length)>0?t:"")+(e>9?".":"")}getNumeracaoParaComandoEmenda(){return this.numero===void 0?"[ainda n\xE3o numerado]":this.isParagrafoUnico()?"par\xE1grafo \xFAnico":this.getNumeroAndSufixoNumeracao()}getNumeracaoComRotuloParaComandoEmenda(){var e;return this.numero===void 0?((e=D.paragrafo.descricao)===null||e===void 0?void 0:e.toLocaleLowerCase())+" [ainda n\xE3o numerado]":this.isParagrafoUnico()?"par\xE1grafo \xFAnico":"\xA7 "+this.getNumeroAndSufixoNumeracao()}isParagrafoUnico(){var e;return this.isDispositivoAlteracao&&this.informouParagrafoUnico||((e=this.pai)===null||e===void 0?void 0:e.filhos.filter(t=>fe(t)).length)===1}}}(ui(tt)))))))),Wh=et(Lo(nt(In(st(pt(Ro(Do(class extends tt{constructor(){super("articulacao")}get artigos(){var o;return(o=this._artigos)!==null&&o!==void 0?o:[]}addArtigo(o,e){var t;this._artigos=(t=this._artigos)!==null&&t!==void 0?t:[],e!==void 0?this._artigos.splice(this._artigos.indexOf(e)+1,0,o):this._artigos.push(o)}addArtigoOnPosition(o,e){var t;this._artigos=(t=this._artigos)!==null&&t!==void 0?t:[],this._artigos.splice(e,0,o)}removeArtigo(o){var e;this._artigos=(e=this._artigos)!==null&&e!==void 0?e:[],this._artigos=this._artigos.filter(t=>t.uuid!==o.uuid)}renumeraArtigos(){this.artigos.filter(o=>o.situacao.descricaoSituacao===U.DISPOSITIVO_NOVO||o.situacao.descricaoSituacao===U.DISPOSITIVO_ADICIONADO).forEach(o=>{o.numero=Nn(o),o.createRotulo(o),o.id=So(o);const e=o.caput;e&&(e.id=So(e))})}indexOfArtigo(o){return this.artigos.indexOf(o)}})))))))),Xh=et(Lo(nt($t(st(pt(Ro(Do(tt)))))))),Zh=et(Lo(nt(In(st(pt(Ro(Do(tt)))))))),Yh=et(Lo(nt($t(st(pt(Ro(Do(tt)))))))),Jh=et(Lo(nt(zr(st(pt(Ro(Do(tt)))))))),ef=et(Lo(nt(zr(st(pt(Ro(Do(tt)))))))),tf=et(Lo(nt(zr(st(pt(Ro(Do(tt)))))))),of=et(Lo(nt($t(st(pt(Ro(Do(tt)))))))),rf=et(function(o){return class extends o{getAcoesPossiveis(e){const t=[];return Le(e)?(t.push(Mt),si(e)!==void 0&&t.push(Po),ni(e)!==void 0&&t.push(Co),G(e)&&!gt(e)&&t.push(St),G(e)&&At(e)&&(t.push(ro),ai(e)&&t.push(To)),Ee(e.pai)&&Te(e)!==void 0&&t.push(su),Ce(e.pai)&&t.push(au),K(e.pai)&&t.push(uu),fe(e.pai)&&t.push(lu),Et(e.pai)&&t.push(nu),Yo(e.pai)&&t.push(cu),e.getAcoesPermitidas(e,t)):[]}getAcaoPossivelTab(e){}getAcaoPossivelShiftTab(e){}}}($t(st(function(o){return class extends o{constructor(){super(...arguments),this.tipoConteudo=gn.ConteudoTexto,this._texto=bt}get texto(){return this._texto}set texto(e){const t=Xt(e);this._texto=t===Tr?Tr:bt}}}(function(o){return class extends o{constructor(){super(...arguments),this.type="NumeracaoIndisponivel"}createRotulo(){this.rotulo=void 0}createNumeroFromRotulo(){}getNumeracaoParaComandoEmenda(){return""}getNumeracaoComRotuloParaComandoEmenda(){return""}}}(ui(tt))))))),pe=(o,e,t,i)=>{const r=zu(e,o);return i!==void 0&&i>=0?o.addFilhoOnPosition(r,i):t?o.addFilho(r,t):o.addFilho(r),r},zu=(o,e)=>{let t;switch(o.toLowerCase()){case"alinea":t=new zh(o.toLowerCase());break;case"artigo":t=new Bh,t.caput=zu(D.caput.tipo,t);break;case"capitulo":t=new Xh(o.toLowerCase());break;case"caput":t=new Hh(o.toLowerCase());break;case"inciso":t=new Kh(o.toLowerCase());break;case"item":t=new Gh(o.toLowerCase());break;case"livro":t=new Yh(o.toLowerCase());break;case"omissis":t=new rf(o.toLowerCase());break;case"paragrafo":t=new Qh(o.toLowerCase());break;case"parte":t=new Jh(o.toLowerCase());break;case"secao":t=new tf(o.toLowerCase());break;case"subsecao":t=new ef(o.toLowerCase());break;case"titulo":t=new of(o.toLowerCase());break;default:t=e&&de(e)?new Zh("agrupadorGenerico"):new Vh("generico"),t.mensagens=[],t.mensagens.push({tipo:Z.WARNING,descricao:"N\xE3o foi poss\xEDvel validar a natureza deste dispositivo com base na legisla\xE7\xE3o vigente"})}return t.uuid=da.next(),t.name=o,t.pai=e,(i=>{i.isDispositivoAlteracao=G(i),G(i)&&(i.renumeraFilhos=()=>{},K(i)&&(i.caput.renumeraFilhos=()=>{}),Ie(i).renumeraFilhos=()=>{},Ie(i).renumeraArtigos=()=>{})})(t),t},ma=()=>{const o=new Wh;return o.uuid=da.next(),o},va=o=>{o.alteracoes=ma(),o.alteracoes.pai=o},nf=(o,e)=>{var t,i,r,n,s,p,c,d,u,a,l,h,f,m,g,v,y,b,x,w,E,S,k,N,_,O,A,q;let I;if(G(o))if(e.subType==="INICIAR_BLOCO")I=ts(D.artigo.tipo,Ie(o)),I.texto=((r=(i=(t=e.novo)===null||t===void 0?void 0:t.conteudo)===null||i===void 0?void 0:i.texto)===null||r===void 0?void 0:r.length)>0?(s=(n=e.novo)===null||n===void 0?void 0:n.conteudo)===null||s===void 0?void 0:s.texto:"";else if(e.subType==="FINALIZAR_BLOCO"){const P=Ie(o);I=Zr(P.pai),I.texto=Xt((d=(c=(p=e.novo)===null||p===void 0?void 0:p.conteudo)===null||c===void 0?void 0:c.texto)!==null&&d!==void 0?d:"")}else if(((P,T)=>{var L,$,V;if(!G(P))return!1;const J=xu(P);return Ue(J)&&Iu(Xt((V=($=(L=T.atual)===null||L===void 0?void 0:L.conteudo)===null||$===void 0?void 0:$.texto)!==null&&V!==void 0?V:""))&&At(P)})(o,e)){const P=Ie(o);I=e.subType==="INICIAR_BLOCO"?ts(D.artigo.tipo,P):Zr(P.pai),I.texto=e.subType==="INICIAR_BLOCO"?"":Xt((l=(a=(u=e.novo)===null||u===void 0?void 0:u.conteudo)===null||a===void 0?void 0:a.texto)!==null&&l!==void 0?l:"")}else I=Zr(o),I.createRotulo(),I.texto=((m=(f=(h=e.novo)===null||h===void 0?void 0:h.conteudo)===null||f===void 0?void 0:f.texto)===null||m===void 0?void 0:m.length)>0?Xt((y=(v=(g=e.novo)===null||g===void 0?void 0:g.conteudo)===null||v===void 0?void 0:v.texto)!==null&&y!==void 0?y:""):"";else o.alteracoes||Su((x=(b=e.atual)===null||b===void 0?void 0:b.conteudo)===null||x===void 0?void 0:x.texto)||((w=e.novo)===null||w===void 0?void 0:w.isDispositivoAlteracao)?(o.hasAlteracao()||va(o),I=ts(o.tipo,o.alteracoes),I.texto=((k=(S=(E=e.novo)===null||E===void 0?void 0:E.conteudo)===null||S===void 0?void 0:S.texto)===null||k===void 0?void 0:k.length)>0?(_=(N=e.novo)===null||N===void 0?void 0:N.conteudo)===null||_===void 0?void 0:_.texto:""):(I=Zr(o),I.texto=(q=(A=(O=e.novo)===null||O===void 0?void 0:O.conteudo)===null||A===void 0?void 0:A.texto)!==null&&q!==void 0?q:"");return I},Zr=o=>o.hasAlteracao()?sf(o):K(o)?G(o)?pe(o.caput,D.inciso.tipo,void 0,0):lf(o):de(o)?cf(o):G(o)?Me(o)||ut(o)?pe(o,o.tipoProvavelFilho,o):pe(o.pai,o.tipo===D.omissis.tipo?o.pai.tipoProvavelFilho:o.tipo,o):af(o),sf=o=>{var e;return o.pai.isLastFilho(o)&&((e=o==null?void 0:o.pai)===null||e===void 0?void 0:e.pai)?pe(o.pai.pai,o.pai.tipo,o.pai):pe(o.pai,o.tipo,o)},af=o=>{if(ut(o)){const e=o.tipoProvavelFilho;return o.pai.filhos.length>0?pe(o,e,void 0,0):pe(o,e)}if(o.situacao.descricaoSituacao!==U.DISPOSITIVO_ORIGINAL&&Cr(o)&&o.pai.isLastFilho(o)){if(mt(o)){const e=o.pai.pai;return e.filhos.filter(t=>fe(t)).length>0?pe(e,D.paragrafo.tipo,void 0,0):pe(e,D.paragrafo.tipo)}return pe(o.pai.pai,o.pai.tipo,o.pai)}return pe(o.pai,o.tipo,o)},lf=o=>{if(ut(o)){const e=o.tipoProvavelFilho;if(e===D.inciso.tipo){const t=o.caput;return t.filhos.length>0?pe(t,e,void 0,0):pe(t,e)}return o.pai.filhos.length>0?pe(o,e,void 0,0):pe(o,e)}return Cr(o)&&o.pai.isLastFilho(o)?pe(o.pai.pai,o.pai.tipo,o.pai):pe(o.pai,o.tipo,o)},cf=o=>pe(o,D.artigo.tipo,void 0,0),ts=(o,e)=>{const t=pe(e,o);return t.createRotulo(t),t};class ei extends ha{constructor(){super(...arguments),this.descricaoSituacao=U.DISPOSITIVO_ADICIONADO,this.tipoEmenda=vt.EMENDA}getAcoesPermitidas(e,t){return[...new Set(t)].filter(i=>i!==void 0).filter(i=>i.descricao!=="Adicionar"&&i.descricao!=="Atualizar dispositivo").filter(i=>!(i instanceof jt)).filter(i=>{var r;return!(!((r=i.descricao)===null||r===void 0)&&r.startsWith("Mover"))||(n=>{var s;return((s=n.pai.filhos)===null||s===void 0?void 0:s.filter(p=>p.situacao.descricaoSituacao!==U.DISPOSITIVO_ADICIONADO).length)===0})(e)}).sort((i,r)=>i.descricao.localeCompare(r.descricao))}}class no{constructor(){this.descricaoSituacao=U.DISPOSITIVO_ORIGINAL}getAcoesPermitidas(e,t){const i=t.filter(r=>!(r instanceof jt)).filter(r=>!(r instanceof qn)).filter(r=>{var n;return!(!((n=r.descricao)===null||n===void 0)&&n.startsWith("Mover"))}).filter(r=>!(r instanceof te)).filter(r=>!(r instanceof Sn)).filter(r=>!(r instanceof Wc));return ri(e).filter(r=>na(r)).length===0&&i.push(Yc),i}}const Al=(o,e)=>{var t;let i;if(e.endsWith("EmOmissis")){const n=e.replace("transformar","").replace("EmOmissis","");i="transformar"+n+"EmOmissis"+n}else i=e;return(t=o.getAcoesPossiveis(o).filter(n=>n instanceof te).filter(n=>n.nomeAcao===e||n.nomeAcao.replaceAll("IncisoCaput","Inciso").replaceAll("IncisoParagrafo","Inciso")===i)[0])===null||t===void 0?void 0:t.nomeAcao},mr=(o,e)=>o.getAcoesPossiveis(o).filter(t=>t instanceof e).length>0,Bu=(o,e,t)=>{var i,r,n,s,p,c,d,u,a;if(t&&((i=t.ui)===null||i===void 0?void 0:i.events)){const l=He(t.ui.events,j.ElementoModificado);if(l&&l.elementos&&((n=(r=l.elementos[0])===null||r===void 0?void 0:r.conteudo)===null||n===void 0?void 0:n.texto)===o.texto)return!0}return o.texto!==""&&((p=(s=e.atual)===null||s===void 0?void 0:s.conteudo)===null||p===void 0?void 0:p.texto)===""||((d=(c=e.atual)===null||c===void 0?void 0:c.conteudo)===null||d===void 0?void 0:d.texto)&&o.texto.localeCompare((a=(u=e.atual)===null||u===void 0?void 0:u.conteudo)===null||a===void 0?void 0:a.texto)!==0},_l=o=>{const e=X(o);return e.mensagens=Pe(o),e},Qo=o=>{var e;o.uuid=da.next(),(e=o.filhos)===null||e===void 0||e.forEach(t=>Qo(t))},Bi=(o,e)=>Ee(o)||(t=>K(t)&&Ie(t).indexOfArtigo(t)===0)(e)||e.pai.indexOf(e)===0?o:Fi(o),mi=o=>o!==void 0&&o!=="",Hu=(o,e=!1)=>{const t=[];return ri(o).forEach(i=>{if(e){const r=Pe(i);r&&(i.mensagens=r,t.push(X(i)))}else t.push(X(i))}),t};class it{constructor(){this.eventos=[],this.eventos=pf()}add(e,t){const i=this.get(e);t.forEach(r=>{var n;return df(i,r)||(n=i.elementos)===null||n===void 0?void 0:n.push(r)})}build(){return this.eventos.filter(e=>e.elementos&&e.elementos.length>0)}get(e){return this.eventos.filter(t=>t.stateType===e)[0]}setReferencia(e){this.get(j.ElementoIncluido).referencia=e}}const an=o=>{const e=new it,t=X(o);return t.mensagens=Pe(o),e.add(j.ElementoModificado,[t]),e.add(j.ElementoValidado,Br(o)),e},ln=(o,e)=>{o.mensagens=Pe(o);const t=X(o),i=e?[e]:[];return i.push(t),[{stateType:j.ElementoModificado,elementos:i},{stateType:j.ElementoValidado,elementos:Br(o,!0)}]},uf=(o,e)=>{const t=dt(e),i=zi(e),r=Te(e),n=e.pai;n.removeFilho(e),n.renumeraFilhos(),Ve(n)&&n.filhos.length===0&&(n.pai.alteracoes=void 0);const s=r&&(hn(r)||la(r))?r:Ce(n)?n.pai:n;return o.artigos.length===1&&i.push(o.artigos[0]),((c,d,u)=>{const a=new it;return a.add(j.ElementoRemovido,c),a.add(j.ElementoRenumerado,d.map(l=>X(l))),a.add(j.ElementoValidado,u),a})(t,i,Br(s,!1)).build()},Ol=o=>{var e,t,i,r,n,s,p,c,d;o.numero=(t=(e=o.situacao.dispositivoOriginal)===null||e===void 0?void 0:e.numero)!==null&&t!==void 0?t:"",o.rotulo=(r=(i=o.situacao.dispositivoOriginal)===null||i===void 0?void 0:i.rotulo)!==null&&r!==void 0?r:"",o.id=(s=(n=o.situacao.dispositivoOriginal)===null||n===void 0?void 0:n.lexmlId)!==null&&s!==void 0?s:"",o.texto=o.situacao.descricaoSituacao===U.DISPOSITIVO_MODIFICADO?(d=(c=(p=o.situacao.dispositivoOriginal)===null||p===void 0?void 0:p.conteudo)===null||c===void 0?void 0:c.texto)!==null&&d!==void 0?d:"":o.texto,o.situacao=new no},He=(o,e)=>o==null?void 0:o.filter(t=>t.stateType===e)[0],df=(o,e)=>(o==null?void 0:o.elementos.map(t=>{var i,r;return t.uuid===e.uuid&&t.rotulo===e.rotulo&&((i=t.conteudo)===null||i===void 0?void 0:i.texto)===((r=e.conteudo)===null||r===void 0?void 0:r.texto)}).filter(t=>t).length)>0,pf=()=>[{stateType:j.ElementoIncluido,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoRemovido,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoModificado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoRenumerado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoRestaurado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoSuprimido,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoValidado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoSelecionado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.ElementoMarcado,referencia:void 0,pai:void 0,elementos:[]},{stateType:j.SituacaoElementoModificada,referencia:void 0,pai:void 0,elementos:[]}],ft=(o,e)=>{const t=o.past?o.past:[];return t.push(JSON.parse(JSON.stringify(e))),t},hf=(o,e)=>{const t=o.future?o.future:[];return t.push(JSON.parse(JSON.stringify(e))),t},Zt=(o,e)=>{var t;return{articulacao:o.articulacao,modo:o.modo,past:o.past,present:o.present,future:o.future,ui:{events:(t=o.ui)===null||t===void 0?void 0:t.events,message:e}}},ff=(o,e)=>{var t,i,r,n,s,p,c,d,u,a,l,h,f,m,g,v,y;let b=!1;const x=_e(o.articulacao,e.atual,!0);if(x===void 0)return o;((t=x.situacao)===null||t===void 0?void 0:t.descricaoSituacao)===U.DISPOSITIVO_ORIGINAL&&mi((r=(i=e.novo)===null||i===void 0?void 0:i.conteudo)===null||r===void 0?void 0:r.texto)&&(e.atual.conteudo.texto=x.texto,e.novo.conteudo.texto=void 0);const w=hn(x)||la(x),E=_l(x),S=[];if(Rr(S,x),Bu(x,e,o)&&(x.texto=G(x)?Xt((p=(s=e.atual.conteudo)===null||s===void 0?void 0:s.texto)!==null&&p!==void 0?p:""):(n=e.atual.conteudo)===null||n===void 0?void 0:n.texto,b=!0),((O,A)=>{var q,I,P;return!(!de(O)||!O.pai||O.situacao.descricaoSituacao===U.DISPOSITIVO_NOVO||Fr(O.pai,O))||!(O.situacao.descricaoSituacao!==U.DISPOSITIVO_ORIGINAL||!ut(O)||!Me(O))||gt(O)||ut(O)&&!mr(O,No)||((q=O.situacao)===null||q===void 0?void 0:q.descricaoSituacao)===U.DISPOSITIVO_ORIGINAL&&mi((P=(I=A.novo)===null||I===void 0?void 0:I.conteudo)===null||P===void 0?void 0:P.texto)})(x,e))return Zt(o,{tipo:Z.INFO,descricao:"N\xE3o \xE9 poss\xEDvel criar dispositivos nessa situa\xE7\xE3o"});const k=nf(x,e);if(((c=x.situacao)===null||c===void 0?void 0:c.descricaoSituacao)===U.DISPOSITIVO_ORIGINAL||((d=x.situacao)===null||d===void 0?void 0:d.descricaoSituacao)===U.DISPOSITIVO_MODIFICADO||x.situacao instanceof ei){k.situacao=new ei,k.situacao.tipoEmenda=o.modo;const O=k.pai;Ve(O)&&O.filhos.length===1&&(O.situacao=new ei)}mi((a=(u=e.novo)===null||u===void 0?void 0:u.conteudo)===null||a===void 0?void 0:a.texto)&&x.tipo===k.tipo&&Me(x)&&Fu(x,k),G(k)&&((l=k.mensagens)===null||l===void 0||l.push({tipo:Z.WARNING,descricao:"\xC9 necess\xE1rio informar o r\xF3tulo do dispositivo"})),k.pai.renumeraFilhos();const N=((O,A)=>{const q=new it;return q.setReferencia(X(Bi(O,A))),q.add(j.ElementoIncluido,Hu(A)),q.add(j.ElementoRenumerado,$u(A)),q.add(j.ElementoValidado,Br(A,!1)),q})(x,k),_=_l(x);if(mi((f=(h=e.novo)===null||h===void 0?void 0:h.conteudo)===null||f===void 0?void 0:f.texto)&&x.tipo===k.tipo&&S&&S.length>0&&N.add(j.ElementoRemovido,S),de(k)&&Je(k).length===2){const O=Je(k).filter(A=>A!==k);N.add(j.ElementoModificado,[X(O[0])])}return(b||mi((g=(m=e.novo)===null||m===void 0?void 0:m.conteudo)===null||g===void 0?void 0:g.texto))&&N.add(j.ElementoModificado,[E,_]),(b||mi((y=(v=e.novo)===null||v===void 0?void 0:v.conteudo)===null||y===void 0?void 0:y.texto)||Le(x))&&N.add(j.ElementoValidado,[_]),(hn(x)||w)&&(N.add(j.ElementoValidado,[_]),N.add(j.ElementoRenumerado,[_])),{articulacao:o.articulacao,modo:o.modo,past:ft(o,N.build()),present:N.build(),future:[],ui:{events:N.build()}}},mf=(o,e)=>{var t,i,r,n,s;const p=_e(o.articulacao,e.atual,!0);if(p===void 0)return o;const c=Te(p),d=p.pai.indexOf(p),u=p.pai.filhos.filter((b,x)=>x>=d&&b.tipo!==e.novo.tipo).map(b=>dt(b)).flat();let a,l;var h,f;Bu(p,e)&&(p.texto=G(p)?Xt((r=(i=e.atual.conteudo)===null||i===void 0?void 0:i.texto)!==null&&r!==void 0?r:""):(t=e.atual.conteudo)===null||t===void 0?void 0:t.texto),h=p,f=e.novo.tipo,h.pai.tipo===f?(a=pe(p.pai.pai,e.novo.tipo,void 0,p.pai.pai.indexOf(p.pai)+1),l=Yt(a)):!G(p)&&((b,x)=>Is(b,x)!==void 0)(p,e.novo.tipo)||((b,x)=>Nr(b.pai.pai,b.pai,[]).filter(w=>w.tipo===x).length>0)(p,e.novo.tipo)?(l=(n=Is(p,e.novo.tipo))!==null&&n!==void 0?n:((b,x)=>[...new Set(Nr(b.pai,b,[]))].filter(w=>w.tipo===x).reverse()[0])(p,e.novo.tipo),a=pe(l.pai,e.novo.tipo,l)):(a=pe(p.pai,e.novo.tipo,void 0,p.pai.indexOf(p)),l=c!=null?c:p.pai),a.texto=(s=e.novo.conteudo)===null||s===void 0?void 0:s.texto;const m=p.pai.filhos.filter((b,x)=>x>=d&&b.tipo!==e.novo.tipo);((b,x)=>{x.map(w=>{const E=w.pai;Qo(w);const S=K(w)?Yt(w):void 0;return E==null||E.removeFilho(w),w.pai=b,b.addFilho(w,S),w})})(a,m),a.renumeraFilhos(),a.pai.renumeraFilhos();const g=[...$u(a)].concat(a.filhos.filter((b,x)=>x>=d&&b.tipo!==p.tipo).map(b=>dt(b)).flat()),v=Yt(a);v&&Je(a).length===2&&g.unshift(X(v));const y=new it;return y.setReferencia(X(Bi(l.pai&&Ee(l)&&Ve(l)?l.pai:l,a))),y.add(j.ElementoIncluido,dt(a)),y.add(j.ElementoRemovido,u),y.add(j.ElementoRenumerado,g),{articulacao:o.articulacao,modo:o.modo,past:ft(o,y.build()),present:y.build(),future:[],ui:{events:y.build()}}};class vr{constructor(e){this.descricaoSituacao=U.DISPOSITIVO_MODIFICADO,this.dispositivoOriginal=e}getAcoesPermitidas(e,t){const i=t.filter(r=>!(r instanceof jt)).filter(r=>!(r instanceof qn)).filter(r=>!(r instanceof Sn)).filter(r=>{var n;return!(!((n=r.descricao)===null||n===void 0)&&n.startsWith("Mover"))}).filter(r=>r.descricao!=="Adicionar"&&r.descricao!=="Atualizar dispositivo").filter(r=>!(r instanceof te));return i.push(ra),i.filter(r=>r!==void 0).sort((r,n)=>r.descricao.localeCompare(n.descricao))}}const vf=(o,e)=>{const t=[];return t.push(gf(o,e.dispositivosAdicionados)),t},gf=(o,e)=>{const t={stateType:j.ElementoIncluido,referencia:void 0,pai:void 0,elementos:[]};return e.forEach(i=>{var r,n,s;let p;if(i.idIrmaoAnterior){const c=fn(o.articulacao,i.idIrmaoAnterior);c&&(p=c.tipo===i.tipo||c.tipo==="Omissis"?pe(c.pai,i.tipo,c):pe(c,i.tipo))}else if(i.idPai){const c=fn(o.articulacao,i.idPai.endsWith("cpt")?i.idPai.replace(/(_cpt)$/g,""):i.idPai);c&&(i.tipo!=="Inciso"&&i.tipo!=="Omissis"||c.tipo!=="Artigo"?i.tipo==="Caput"?(c.texto=(r=i.texto)!==null&&r!==void 0?r:"",t.elementos[t.elementos.length-1].conteudo.texto=c.texto):i.tipo==="Alteracao"?(va(c),c.alteracoes.id=i.id,c.alteracoes.base=i.urnNormaAlterada):(p=pe(c,i.tipo),p.texto=(n=i.texto)!==null&&n!==void 0?n:""):p=pe(c.caput,i.tipo))}else p=pe(o.articulacao,i.tipo,void 0,0);if(!t.referencia){const c=Yt(p),d=p.pai.tipo==="Caput"?p.pai.pai:p.pai;t.referencia=X(bf(c||d,p))}if(p&&i.tipo!=="Alteracao"){p.id=i.id;const c=new ei;if(c.existeNaNormaAlterada=i.existeNaNormaAlterada?i.existeNaNormaAlterada:void 0,p.situacao=c,i.abreAspas?(p.rotulo="\u201C"+i.rotulo,p.cabecaAlteracao=!0):(p.rotulo=i.rotulo,p.createNumeroFromRotulo(i.rotulo)),i.fechaAspas?(p.notaAlteracao=i.notaAlteracao,p.texto=i.texto+`\u201D ${i.notaAlteracao}`):p.texto=i.texto,p.tipo!=="Caput"){const d=X(p);d.lexmlId=So(p),(s=t.elementos)===null||s===void 0||s.push(d)}}}),t},bf=(o,e)=>{const t=Bi(o,e);return t.id!==e.id?t:e.pai.filhos[e.pai.filhos.length-2]},yf=(o,e)=>{var t;const i=_e(o.articulacao,e.atual,!0),r=e.atual.norma,n=(i==null?void 0:i.alteracoes.base)||"",s=new RegExp(`<a.+href=.${n}.*?>.*?</a>`,"ig"),p=mn(r);if(i===void 0||!i.alteracoes||n===r&&i.texto.match(s))return o.ui=[],o;const c=`<a href="${d=r}"> ${mn(d)} </a>`;var d;const u=i.texto;if(i.texto.match(s))i.texto=u.replace(s,c);else if(i.texto.includes(p))i.texto=u.replace(p,c);else{const m=parseInt(localStorage.indexCursor);i.texto=[u.slice(0,m),c,u.slice(m)].join(" "),localStorage.removeItem("indexCursor")}const a=X(i);i.alteracoes.base=r,((t=i.situacao)===null||t===void 0?void 0:t.descricaoSituacao)===U.DISPOSITIVO_ORIGINAL&&(i.situacao=new vr(a));const l=new it,h=X(i,!0);h.mensagens=Pe(i),l.add(j.ElementoValidado,[h]),l.add(j.ElementoModificado,[h]),l.add(j.SituacaoElementoModificada,[h]);const f=an(i);return{articulacao:o.articulacao,modo:o.modo,past:ft(o,ln(i,a)),present:f.build(),future:o.future,ui:{events:l.build()}}},ql=(o,e)=>{const t=_e(o.articulacao,e.atual,!0);if(t===void 0)return o.ui=[],o;if(!((f,m)=>{const g=Al(f,m.subType);return f.getAcoesPossiveis(f).filter(v=>v instanceof te&&v.nomeAcao&&v.nomeAcao===g).length>0})(t,e))return o;const i=Te(t);e.subType=Al(t,e.subType);const r=[...dt(t)],n=zi(t),s=((f,m)=>{var g,v;const y=f.pai;let b,x;switch(m.subType){case"transformarAlineaEmItem":case"transformarIncisoCaputEmAlinea":case"transformarIncisoParagrafoEmAlinea":case"transformarParagrafoEmIncisoParagrafo":case"transformarArtigoEmParagrafo":x=Te(f),b=pe(x,m.novo.tipo);break;case"transformarDispositivoGenericoEmInciso":case"transformarDispositivoGenericoEmAlinea":case"transformarDispositivoGenericoEmItem":case"transformarOmissisEmAlinea":case"transformarOmissisEmArtigo":case"transformarOmissisEmIncisoCaput":case"transformarOmissisEmIncisoParagrafo":case"transformarOmissisEmItem":case"transformarOmissisEmParagrafo":case"transformarAlineaEmOmissisAlinea":case"transformarItemEmOmissisItem":case"transformarParagrafoEmOmissisParagrafo":case"transformarIncisoCaputEmOmissisIncisoCaput":case"transformarIncisoParagrafoEmOmissisIncisoParagrafo":x=y,b=pe(y,m.novo.tipo,void 0,y==null?void 0:y.indexOf(f));break;case"transformarParagrafoEmInciso":if(fe(f)&&(Wt(f)||me(f))){x=y,b=pe(x.caput,m.novo.tipo);break}x=Te(f),b=pe(x,m.novo.tipo);break;case"transformarParagrafoEmIncisoCaput":x=y,b=pe(x.caput,m.novo.tipo);break;default:x=f.pai.pai,b=pe(x,m.novo.tipo,f.pai)}return b.texto=(v=(g=m.atual.conteudo)===null||g===void 0?void 0:g.texto)!==null&&v!==void 0?v:f.texto,b.createRotulo(b),b.situacao=f.situacao,b.mensagens=Pe(b),y==null||y.removeFilho(f),y==null||y.renumeraFilhos(),x==null||x.renumeraFilhos(),fa(f,b),b})(t,e),p=zi(s).concat(n),c=Hu(s,!0),d=mt(s)?s.pai.pai:s.pai;i&&la(i)&&(i.pai.renumeraFilhos(),p.unshift(i));const u=Te(s);if(u){const f=Pe(u);u.mensagens!==f&&c.unshift(X(u))}const a=c.filter(f=>f.uuid===d.uuid).length>0?t.pai:d;a.mensagens=Pe(a),c.unshift(X(a));const l=u!=null?u:s.pai,h=((f,m,g,v,y)=>{const b=new it;return b.setReferencia(X(Bi(f,m))),b.add(j.ElementoIncluido,dt(m)),b.add(j.ElementoRemovido,g),b.add(j.ElementoRenumerado,v),b.add(j.ElementoValidado,y.filter(x=>x.mensagens.length>0)),b})(Ce(l)?l.pai:l,s,r,p.map(f=>(f.mensagens=Pe(f),X(f))),c);return{articulacao:o.articulacao,modo:o.modo,past:ft(o,h.build()),present:h.build(),future:[],ui:{events:h.build()}}},os=(o,e)=>{if(Ps(e)){const t=Ve(o)?o.pai:sn(o,e.hierarquia.pai.uuidAlteracao);if(t)return t.alteracoes||(t.alteracoes=ma(),t.alteracoes.pai=t),e.hierarquia.pai.tipo===D.articulacao.tipo?t.alteracoes:sn(t.alteracoes,e.hierarquia.pai.uuid)}return sn(o,e.hierarquia.pai.uuid)},Sl=(o,e)=>{var t,i,r;const n=pe(K(e)&&(o.tipo===D.inciso.name||(s=>{var p,c;const d=(c=(p=s.lexmlId)===null||p===void 0?void 0:p.split("_"))!==null&&c!==void 0?c:[];return s.tipo===D.omissis.tipo&&d.length>1&&d[d.length-2]==="cpt"})(o))?e.caput:e,o.tipo,void 0,o.hierarquia.posicao);return n.uuid=o.uuid,n.id=o.lexmlId,n.texto=(i=(t=o==null?void 0:o.conteudo)===null||t===void 0?void 0:t.texto)!==null&&i!==void 0?i:"",n.numero=(r=o==null?void 0:o.hierarquia)===null||r===void 0?void 0:r.numero,n.rotulo=o==null?void 0:o.rotulo,n.mensagens=o==null?void 0:o.mensagens,n.situacao=(s=>{switch(s){case U.DISPOSITIVO_ADICIONADO:return new ei;case U.DISPOSITIVO_NOVO:return new ha;default:return new no}})(o.descricaoSituacao),n},Il=(o,e,t)=>{if(e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0){const i=e.elementos[0],r=os(o.articulacao,i),n=((s,p)=>{const c=p.shift(),d=os(s,c),u=Sl(c,d),a=[u];return p==null||p.forEach(l=>{var h,f;const m=((h=l.hierarquia)===null||h===void 0?void 0:h.pai)===((f=c==null?void 0:c.hierarquia)===null||f===void 0?void 0:f.pai)?u.pai:os(s,l),g=Sl(l,m);a.push(g)}),a})(o.articulacao,e.elementos);if(r==null||r.renumeraFilhos(),t){const s=i.hierarquia.posicao===0?Ee(r)&&Ve(r)?r.pai:r:Fi(Te(n[0]));if(s){const p=_e(o.articulacao,s);p?t.referencia=X(p):Zt(o,{tipo:Z.ERROR,descricao:"Erro inesperado"})}}return e.stateType===j.ElementoIncluido&&(t.referencia=e.referencia),n.map(s=>X(s))}return[]},kl=(o,e)=>e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0?(e.elementos.forEach(t=>{const i=_e(o.articulacao,t,!0);if(i){const r=i.pai;r.removeFilho(i),r.renumeraFilhos()}}),e.elementos):[],Nl=(o,e,t,i)=>e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0?(e.elementos.forEach(r=>{var n,s,p,c,d,u,a;const l=_e(o.articulacao,r,!0);i instanceof no?(l.numero=(s=(n=l.situacao.dispositivoOriginal)===null||n===void 0?void 0:n.numero)!==null&&s!==void 0?s:"",l.rotulo=(c=(p=l.situacao.dispositivoOriginal)===null||p===void 0?void 0:p.rotulo)!==null&&c!==void 0?c:"",l.texto=(a=(u=(d=l.situacao.dispositivoOriginal)===null||d===void 0?void 0:d.conteudo)===null||u===void 0?void 0:u.texto)!==null&&a!==void 0?a:"",l.situacao=new no):l.situacao=new i(X(l)),t.elementos.push(X(l))}),t.elementos):[],Pl=(o,e,t=!1)=>{if(e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0){const i=[];let r=0;return e.elementos.forEach(n=>{var s,p,c,d;const u=_e(o.articulacao,n,!0);u&&(t&&r===u.uuid||r!==u.uuid)&&(u.situacao.descricaoSituacao===U.DISPOSITIVO_MODIFICADO?(u.texto=(p=(s=u.situacao.dispositivoOriginal.conteudo)===null||s===void 0?void 0:s.texto)!==null&&p!==void 0?p:"",u.situacao=new no):(n.descricaoSituacao===U.DISPOSITIVO_MODIFICADO&&(u.situacao=new vr(X(u))),u.texto=(d=(c=n.conteudo)===null||c===void 0?void 0:c.texto)!==null&&d!==void 0?d:""),u.alteracoes&&(u.alteracoes.base=n.norma),u.mensagens=Pe(u),i.push(X(u)),r=u.uuid)}),i}return[]},Cl=(o,e)=>{if(e!==void 0&&e.elementos!==void 0&&e.elementos[0]!==void 0){const t=[];return e.elementos.forEach(i=>{const r=_e(o.articulacao,i,!0);r&&t.push(X(r))}),t}return[]},Tl=(o,e)=>{const t=He(e,j.ElementoValidado);if(t!==void 0&&t.elementos!==void 0&&t.elementos[0]!==void 0){const i=[];return t.elementos.forEach(r=>{const n=_e(o.articulacao,r,!0);n&&(n.mensagens=Pe(n),n.mensagens.length>0&&i.push(X(n)))}),i}return[]},Dl=(o,e)=>{const t=_e(o.articulacao,e.atual,!0);if(t===void 0)return o.ui=[],o;if(!mr(t,qn))return Zt(o,{tipo:Z.ERROR,descricao:"N\xE3o \xE9 poss\xEDvel excluir um dispositivo original mas apenas suprimi-lo."});if(!G(t)&&(hn(t)||o.articulacao.filhos.length===1&&o.articulacao.filhos[0]===t&&!Me(t)))return Zt(o,{tipo:Z.ERROR,descricao:"N\xE3o \xE9 poss\xEDvel excluir o \xFAnico dispositivo dispon\xEDvel."});const i=de(t)?((r,n)=>{let s=n.pai.indexOf(n);const p=n.pai.filhos.filter((y,b)=>b<s&&de(y)),c=n.pai,d=[...dt(n)],u=Yt(n),a=(p==null?void 0:p.length)>0&&!G(n)?p.reverse()[0]:n.pai,l=(p==null?void 0:p.length)>0&&!G(n)?p.reverse()[0]:s>0?Fi(a.filhos[s-1]):a,h=Ee(l)?a:Fi(l),f=n.filhos.map(y=>(y.pai=a,c.removeFilho(y),Qo(y),(p==null?void 0:p.length)>0?a.addFilho(y):a.addFilhoOnPosition(y,s++),y));n.pai.removeFilho(n),a==null||a.renumeraFilhos(),c.renumeraFilhos();const m=f.map(y=>dt(y)).flat(),g=a.filhos.filter((y,b)=>b>=s&&(de(y)||Ct(y))).map(y=>X(y)).flat();u&&Je(u).length===1&&g.unshift(X(u));const v=new it;return v.setReferencia(Ee(h)&&Ve(h)?X(h.pai):X(h)),v.add(j.ElementoIncluido,m),v.add(j.ElementoRemovido,d),v.add(j.ElementoRenumerado,g),v.build()})(o.articulacao,t):uf(o.articulacao,t);return{articulacao:o.articulacao,modo:o.modo,past:ft(o,i),present:i,future:[],ui:{events:i}}},xf=o=>({stateType:j.ElementoMarcado,elementos:[X(o)],moverParaFimLinha:!0}),wf=(o,e)=>(!o.modo.startsWith("emenda")||e.situacao.descricaoSituacao===U.DISPOSITIVO_ADICIONADO)&&!Me(e),Ef=(o,e)=>{var t,i;const r=_e(o.articulacao,e.atual,!0);if(r===void 0)return o.ui=[],o;if(!(ri(r).filter(p=>na(p)).length>0)&&((t=r.situacao)===null||t===void 0?void 0:t.descricaoSituacao)!==U.DISPOSITIVO_MODIFICADO&&((i=r.situacao)===null||i===void 0?void 0:i.descricaoSituacao)!==U.DISPOSITIVO_SUPRIMIDO)return o;const s=((p,c)=>{const d=[];c.situacao.descricaoSituacao===U.DISPOSITIVO_SUPRIMIDO?ri(c).filter(l=>l.situacao.descricaoSituacao===U.DISPOSITIVO_SUPRIMIDO).forEach(l=>{Ol(l),d.push(X(l))}):(Ol(c),d.push(X(c)));const u=new it;return u.add(j.ElementoRestaurado,d),u.build()})(o.articulacao,r);return{articulacao:o.articulacao,modo:o.modo,past:ft(o,s),present:s,future:[],ui:{events:s}}},Cs=(o,e)=>{o.length!==0&&(o==null||o.forEach(t=>{e.add(t.situacao.descricaoSituacao),Cs(t.filhos,e)}))},Af=(o,e)=>{var t;const i=_e(o.articulacao,e.atual,!0);if(i===void 0||((t=i.situacao)===null||t===void 0?void 0:t.descricaoSituacao)!==U.DISPOSITIVO_ORIGINAL)return o.ui=[],o;if(!(n=>{var s;const p=new Set;return p.add(n.situacao.descricaoSituacao),Cs(n.filhos,p),n.alteracoes&&Cs((s=n.alteracoes)===null||s===void 0?void 0:s.filhos,p),p.size===1&&[...p][0]===U.DISPOSITIVO_ORIGINAL})(i))return Zt(o,{tipo:Z.ERROR,descricao:"S\xF3 \xE9 poss\xEDvel suprimir dispositivos que n\xE3o tenham sofrido modifica\xE7\xE3o."});const r=((n,s)=>{ri(s).forEach(c=>c.situacao=new Dr(X(c))),s.alteracoes&&s.alteracoes.filhos.length>0&&s.alteracoes.filhos.forEach(c=>ri(c).forEach(d=>d.situacao=new Dr(X(d))));const p=new it;return p.add(j.ElementoSuprimido,dt(s)),p.build()})(o.articulacao,i);return{articulacao:o.articulacao,modo:o.modo,past:ft(o,r),present:r,future:[],ui:{events:r}}},_f=function(o){for(var e=Object.keys(o),t={},i=0;i<e.length;i++){var r=e[i];typeof o[r]=="function"&&(t[r]=o[r])}var n,s=Object.keys(t);try{(function(p){Object.keys(p).forEach(function(c){var d=p[c];if(d(void 0,{type:pn.INIT})===void 0)throw new Error(ot(12));if(d(void 0,{type:pn.PROBE_UNKNOWN_ACTION()})===void 0)throw new Error(ot(13))})})(t)}catch(p){n=p}return function(p,c){if(p===void 0&&(p={}),n)throw n;for(var d=!1,u={},a=0;a<s.length;a++){var l=s[a],h=t[l],f=p[l],m=h(f,c);if(m===void 0)throw c&&c.type,new Error(ot(14));u[l]=m,d=d||m!==f}return(d=d||s.length!==Object.keys(p).length)?u:p}}({appReducer:(o={},e)=>(e.type,o),elementoReducer:(o={},e)=>{switch(e.type){case"APLICAR_ALTERACOES_EMENDA":return((t,i)=>{const r={articulacao:t.articulacao,modo:t.modo,past:[],present:[],future:[],ui:{events:[]}},n=new it;return i.alteracoesEmenda.dispositivosSuprimidos&&(n.add(j.ElementoSuprimido,[]),i.alteracoesEmenda.dispositivosSuprimidos.forEach(s=>{var p;const c=fn(t.articulacao,s.id);c&&(c.situacao=new Dr(X(c)),(p=n.get(j.ElementoSuprimido).elementos)===null||p===void 0||p.push(X(c)))})),i.alteracoesEmenda.dispositivosModificados&&(n.add(j.ElementoModificado,[]),i.alteracoesEmenda.dispositivosModificados.forEach(s=>{var p;const c=fn(t.articulacao,s.id);c&&(c.situacao=new vr(X(c)),c.texto=s.texto,(p=n.get(j.ElementoModificado).elementos)===null||p===void 0||p.push(X(c)))})),i.alteracoesEmenda.dispositivosAdicionados&&vf(t,i.alteracoesEmenda).forEach(s=>n.eventos.push(s)),r.ui.events=n.build(),r})(o,e);case"ATUALIZAR_ELEMENTO":return((t,i)=>{var r,n,s,p;const c=_e(t.articulacao,i.atual,!0);if(c===void 0||c.texto===i.atual.conteudo.texto)return t.ui=[],t;const d=X(c);c.texto=G(c)?Xt((s=(n=i.atual.conteudo)===null||n===void 0?void 0:n.texto)!==null&&s!==void 0?s:""):(r=i.atual.conteudo)===null||r===void 0?void 0:r.texto,((p=c.situacao)===null||p===void 0?void 0:p.descricaoSituacao)===U.DISPOSITIVO_ORIGINAL&&(c.situacao=new vr(d));const u=an(c);return{articulacao:t.articulacao,modo:t.modo,past:ft(t,ln(c,d)),present:u.build(),future:t.future,ui:{events:u.build()}}})(o,e);case"ATUALIZAR_REFERENCIA_ELEMENTO":return yf(o,e);case"ATUALIZAR_TEXTO_ELEMENTO":return((t,i)=>{var r,n,s,p;const c=_e(t.articulacao,i.atual,!0);if(c===void 0||c.texto===i.atual.conteudo.texto)return t.ui=[],t;const d=X(c);c.texto=G(c)?Xt((s=(n=i.atual.conteudo)===null||n===void 0?void 0:n.texto)!==null&&s!==void 0?s:""):(r=i.atual.conteudo)===null||r===void 0?void 0:r.texto,((p=c.situacao)===null||p===void 0?void 0:p.descricaoSituacao)===U.DISPOSITIVO_ORIGINAL&&(c.situacao=new vr(d));const u=new it,a=X(c,!0);a.mensagens=Pe(c),((h,f)=>{var m,g;return((g=(m=f.atual)===null||m===void 0?void 0:m.conteudo)===null||g===void 0?void 0:g.texto)!==h})(c.texto,i)&&u.add(j.ElementoModificado,[a]),u.add(j.SituacaoElementoModificada,[a]),u.add(j.ElementoValidado,Br(c));const l=an(c);return{articulacao:t.articulacao,modo:t.modo,past:ft(t,ln(c,d)),present:l.build(),future:[],ui:{events:u.build()}}})(o,e);case"ADICIONAR_ELEMENTO":return ff(o,e);case"AGRUPAR_ELEMENTO":return mf(o,e);case"TRANSFORMAR_TIPO_ELEMENTO":return ql(o,e);case"ELEMENTO_SELECIONADO":return((t,i)=>{const r=_e(t.articulacao,i.atual,!0);if(r===void 0)return t.ui.events=[],t;r.mensagens=Pe(r);const n=X(r,!0),s=[{stateType:j.ElementoSelecionado,elementos:[n]}];return{articulacao:t.articulacao,modo:t.modo,past:t.past,present:t.present,future:t.future,ui:{events:s}}})(o,e);case"INFORMAR_NORMA":return((t,i)=>{const r=_e(t.articulacao,i.atual,!0);if(r===void 0)return t.ui.events=[],t;r.mensagens=Pe(r);const n=X(r,!0),s=[{stateType:j.InformarNorma,elementos:[n]}];return{articulacao:t.articulacao,modo:t.modo,past:t.past,present:t.present,future:[],ui:{events:s}}})(o,e);case"Mover para baixo":return((t,i)=>{const r=_e(t.articulacao,i.atual,!0);if(r===void 0)return t.ui=[],t;if(!mr(r,Xc))return Zt(t,{tipo:Z.ERROR,descricao:"Opera\xE7\xE3o n\xE3o permitida."});const n=si(r);if(n===void 0)return t;const s=[...dt(r),...dt(n)],p=zi(r),c=r.pai,d=c.indexOf(r);Qo(r),Qo(n),c.removeFilho(r),c.removeFilho(n),c.addFilhoOnPosition(n,d),c.addFilhoOnPosition(r,d+1),r.pai=c,n.pai=c,c.renumeraFilhos();const u=d===0?mt(n)||G(r)&&r.tipo==="Artigo"?c.pai:c:Te(n),a=new it;return a.setReferencia(X(Bi(u,n))),a.add(j.ElementoIncluido,xo(n,[]).concat(xo(r,[])).map(l=>(l.mensagens=Pe(l),X(l)))),a.add(j.ElementoRemovido,s),a.add(j.ElementoRenumerado,p.map(l=>X(l))),a.add(j.ElementoMarcado,[X(r),i.atual]),a.add(j.ElementoSelecionado,[X(r)]),{articulacao:t.articulacao,modo:t.modo,past:ft(t,a.build()),present:a.build(),future:[],ui:{events:a.build()}}})(o,e);case"Mover para cima":return((t,i)=>{var r;const n=_e(t.articulacao,i.atual,!0);if(n===void 0)return t.ui=[],t;if(!mr(n,Zc))return Zt(t,{tipo:Z.ERROR,descricao:"Opera\xE7\xE3o n\xE3o permitida."});const s=ni(n);if(s===void 0)return t;const p=[...dt(s),...dt(n)],c=zi(n),d=n.pai,u=d.indexOf(s);Qo(s),Qo(n),d.removeFilho(s),d.removeFilho(n),d.addFilhoOnPosition(n,u),d.addFilhoOnPosition(s,u+1),n.pai=d,s.pai=d,d.renumeraFilhos();const a=u===0?((r=n.pai)===null||r===void 0?void 0:r.tipo)===D.caput.tipo||G(n)&&n.tipo==="Artigo"?d.pai:d:Te(n),l=new it;return l.setReferencia(X(Bi(a,n))),l.add(j.ElementoIncluido,xo(n,[]).concat(xo(s,[])).map(h=>(h.mensagens=Pe(h),X(h)))),l.add(j.ElementoRemovido,p),l.add(j.ElementoRenumerado,c.map(h=>X(h))),l.add(j.ElementoMarcado,[X(n),i.atual]),l.add(j.ElementoSelecionado,[X(n)]),{articulacao:t.articulacao,modo:t.modo,past:ft(t,l.build()),present:l.build(),future:[],ui:{events:l.build()}}})(o,e);case"RENUMERAR_ELEMENTO":return((t,i)=>{var r,n;const s=_e(t.articulacao,i.atual,!0);if(s===void 0)return t.ui=[],t;if(!mr(s,Sn))return Zt(t,{tipo:Z.INFO,descricao:"Nessa situa\xE7\xE3o, n\xE3o \xE9 poss\xEDvel renumerar o dispositivo"});const p=ft(t,ln(s));try{s.createNumeroFromRotulo((r=i.novo)===null||r===void 0?void 0:r.numero)}catch(d){return Zt(t,{tipo:Z.ERROR,descricao:"O r\xF3tulo informado \xE9 inv\xE1lido",detalhe:d})}s.createRotulo(s),((n=s.situacao)===null||n===void 0?void 0:n.descricaoSituacao)===U.DISPOSITIVO_ADICIONADO&&(s.situacao.existeNaNormaAlterada=i.novo.existenteNaNorma);const c=an(s);return{articulacao:t.articulacao,modo:t.modo,past:p,present:c.build(),future:t.future,ui:{events:c.build()}}})(o,e);case"RESTAURAR_ELEMENTO":return Ef(o,e);case"SUPRIMIR_ELEMENTO":return Af(o,e);case"ABRIR_ARTICULACAO":return Uh(0,e);case"REDO":return(t=>{var i;if(t.future===void 0||t.future.length===0)return t.ui=[],t;const r=t.future.pop(),n={articulacao:t.articulacao,modo:t.modo,past:ft(t,r),present:[],future:t.future,ui:{events:[]}},s=new it;s.add(j.ElementoRemovido,kl(t,He(r,j.ElementoRemovido))),s.add(j.ElementoIncluido,Il(t,He(r,j.ElementoIncluido),He(s.eventos,j.ElementoIncluido))),s.add(j.ElementoModificado,Pl(t,He(r,j.ElementoModificado),!0)),s.add(j.ElementoSuprimido,Nl(t,He(r,j.ElementoSuprimido),He(s.eventos,j.ElementoSuprimido),Dr)),s.add(j.ElementoRenumerado,Cl(t,He(r,j.ElementoRenumerado))),s.add(j.ElementoValidado,Tl(t,r));const p=(i=He(r,j.ElementoMarcado))===null||i===void 0?void 0:i.elementos;return p&&(s.add(j.ElementoMarcado,p),s.add(j.ElementoSelecionado,[p[0]])),n.ui.events=s.build(),n.present=s.build(),n})(o);case"REMOVER_ELEMENTO":return Dl(o,e);case"REMOVER_ELEMENTO_SEM_TEXTO":return((t,i)=>{var r;const n=_e(t.articulacao,i.atual,!0);if(n===void 0||!wf(t,n))return t.ui=[],t;const s=Te(n),p=Dl(t,i);return i.key==="Backspace"&&s&&((r=p.ui)===null||r===void 0||r.events.push(xf(s))),p})(o,e);case"SHIFT_TAB":case"TAB":return((t,i)=>{const r=_e(t.articulacao,i.atual,!0);if(r===void 0)return t.ui=[],t;const n=i.type==="TAB"?r.getAcaoPossivelTab(r):r.getAcaoPossivelShiftTab(r);if(!n)return t.ui=[],t;const s={type:"TRANSFORMAR_TIPO_ELEMENTO",subType:n.nomeAcao,atual:i.atual,novo:{tipo:n.tipo}};return ql(t,s)})(o,e);case"UNDO":return(t=>{var i;if(t.past===void 0||t.past.length===0)return t.ui=[],t;const r=t.past.pop(),n={articulacao:t.articulacao,modo:t.modo,past:t.past,present:[],future:hf(t,r),ui:{events:[]}},s=new it;s.add(j.ElementoRemovido,kl(t,He(r,j.ElementoIncluido))),s.add(j.ElementoIncluido,Il(t,He(r,j.ElementoRemovido),He(s.eventos,j.ElementoIncluido))),s.add(j.ElementoRestaurado,Nl(t,He(r,j.ElementoSuprimido),He(s.eventos,j.ElementoRestaurado),no)),s.add(j.ElementoModificado,Pl(t,He(r,j.ElementoModificado))),s.add(j.ElementoRenumerado,Cl(t,He(r,j.ElementoRenumerado))),s.add(j.ElementoValidado,Tl(t,r));const p=(i=He(r,j.ElementoMarcado))===null||i===void 0?void 0:i.elementos;return p&&(s.add(j.ElementoMarcado,[p[1],p[0]]),s.add(j.ElementoSelecionado,[p[1]])),n.ui.events=s.build(),n.present=s.build(),n})(o);case"VALIDAR_ELEMENTO":return((t,i)=>{const r=_e(t.articulacao,i.atual,!0);if(r===void 0)return t.ui=[],t;r.mensagens=Pe(r);const n=X(r,!0),s=[{stateType:j.ElementoValidado,elementos:[n]}];return{articulacao:t.articulacao,modo:t.modo,past:t.past,present:t.present,future:t.future,ui:{events:s}}})(o,e);case"VALIDAR_ARTICULACAO":return(t=>{const i=[];xo(t.articulacao,[]).forEach(n=>{const s=Pe(n);(s==null?void 0:s.length)>0&&(n.mensagens=s,i.push(X(n)))});const r=[{stateType:j.ElementoValidado,elementos:i}];return{articulacao:t.articulacao,modo:t.modo,past:t.past,present:t.present,future:t.future,ui:{events:r}}})(o);default:return o}}}),he=function o(e,t,i){var r;if(typeof t=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(ot(0));if(typeof t=="function"&&i===void 0&&(i=t,t=void 0),i!==void 0){if(typeof i!="function")throw new Error(ot(1));return i(o)(e,t)}if(typeof e!="function")throw new Error(ot(2));var n=e,s=t,p=[],c=p,d=!1;function u(){c===p&&(c=p.slice())}function a(){if(d)throw new Error(ot(3));return s}function l(g){if(typeof g!="function")throw new Error(ot(4));if(d)throw new Error(ot(5));var v=!0;return u(),c.push(g),function(){if(v){if(d)throw new Error(ot(6));v=!1,u();var y=c.indexOf(g);c.splice(y,1),p=null}}}function h(g){if(!hh(g))throw new Error(ot(7));if(g.type===void 0)throw new Error(ot(8));if(d)throw new Error(ot(9));try{d=!0,s=n(s,g)}finally{d=!1}for(var v=p=c,y=0;y<v.length;y++)(0,v[y])();return g}function f(g){if(typeof g!="function")throw new Error(ot(10));n=g,h({type:pn.REPLACE})}function m(){var g,v=l;return(g={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(ot(11));function b(){y.next&&y.next(a())}return b(),{unsubscribe:v(b)}}})[dl]=function(){return this},g}return h({type:pn.INIT}),(r={dispatch:h,subscribe:l,getState:a,replaceReducer:f})[dl]=m,r}(_f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());let is=class extends _n(he)(rt){constructor(){super(),this.elementos=[],this.tabIndex=-1}createRenderRoot(){return this}render(){return Se`
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
    `}};ce([Qe({type:Array})],is.prototype,"elementos",void 0),is=ce([It("lexml-eta-articulacao")],is);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Of=2;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ts extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}{constructor(e){if(super(e),this.it=$e,e.type!==Of)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===$e||e==null)return this.ft=void 0,this.it=e;if(e===ii)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Ts.directiveName="unsafeHTML",Ts.resultType=1;const Ds=(o=>(...e)=>({_$litDirective$:o,values:e}))(Ts);let rs=class extends rt{update(o){super.update(o)}buildTemplateComando(o){const e=o==null?void 0:o.reduce((t,i)=>t+`<p> ${i.cabecalho} </p>`,"");return Se`${e}`}buildTemplateCitacao(o){return o.replaceAll("<Rotulo>","<b>").replaceAll("</Rotulo>","</b> ").replaceAll("<Alteracao>",'<div class="alteracao">').replaceAll("</Alteracao>","</div> ").replaceAll("<Omissis/>"," ..........................................................")}render(){var o,e,t;const i=(o=this.emenda)===null||o===void 0?void 0:o.comandos;return Se`
      <style>
        .lexml-emenda-comando {
          display: block;
          border: 1px solid #ccc;
          height: 100%;
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
        <p>${(t=(e=this.emenda)===null||e===void 0?void 0:e.comandoEmenda)===null||t===void 0?void 0:t.cabecalhoComum}</p>

        ${i==null?void 0:i.map(r=>Se`
            ${Ds('<div class="lexml-emenda-cabecalhoComando">'+r.cabecalho+'</div><div class="lexml-emenda-citacaoComando">'+this.buildTemplateCitacao(r.citacao)+"</div>")}
          `)}
      </div>
    `}};ce([Qe({type:Object})],rs.prototype,"emenda",void 0),rs=ce([It("lexml-emenda-comando")],rs);const qf=Se`
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
      padding: 5px;
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
      background-color: #ffffff;
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
      margin: 0px 2px 0px 5px !important;
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
    }

    .mensagem {
      font-size: 0.8em;
      font-weight: 600;
    }

    .mensagem--info {
      color: green;
    }

    .mensagem--warning {
      color: #ff5733;
    }

    .mensagem--danger {
      color: red;
    }

    lexml-eta-help {
      float: right;
    }

    #lx-eta-buffer {
      display: none;
      height: 0px;
    }
  </style>
`,Sf=Se`
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
`;class Rl extends class{}{constructor(){super(...arguments),this.nivel=0,this.rotulo="",this.agrupador=!1,this.editavel=!0,this.sendoEditado=!1,this.index=0}}const vi=(o,e)=>new te(D[e.toLowerCase()],"Transformar "+o.tipo+"em "+D[e.toLowerCase()].name,"transformar"+o.tipo+"Em"+D[e.toLowerCase()].name).execute(o),If=Quill.import("blots/block");class lo extends If{get linha(){return this.parent.parent.parent}get tamanho(){return this.length()-1}get tagName(){return this.domNode.tagName}get html(){return this.domNode.innerHTML!=="<br>"?this.domNode.innerHTML.replace("&nbsp;",""):""}set html(e){this.domNode.innerHTML=e}constructor(e){super(e)}}var jr;(function(o){o[o.Esquerda=0]="Esquerda",o[o.Direita=1]="Direita"})(jr||(jr={}));class Jt extends lo{constructor(){super(Jt.create())}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.setAttribute("class",Jt.className),e}}Jt.blotName="blotMenu",Jt.tagName="DIV",Jt.className="lx-eta-dropdown";class Eo extends lo{constructor(){super(Eo.create())}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.setAttribute("class",Eo.className),e.innerHTML="&vellip;",e}}Eo.blotName="blotMenuBotao",Eo.tagName="DIV",Eo.className="lx-eta-dropbtn";class Ao extends lo{constructor(e){super(Ao.create(e))}static create(e){const t=super.create(),i=e===jr.Esquerda?"":" lx-eta-dropdown-content-right";return t.setAttribute("contenteditable","false"),t.setAttribute("class",Ao.className+i),t}}Ao.blotName="blotMenuConteudo",Ao.tagName="DIV",Ao.className="lx-eta-dropdown-content";class _o extends lo{constructor(e,t){super(_o.create(e,t))}static create(e,t){var i;const r=super.create();return r.setAttribute("contenteditable","false"),r.setAttribute("class",_o.className),r.innerHTML=(i=e.descricao)!==null&&i!==void 0?i:"",r.addEventListener("mousedown",()=>{var n;if(e.descricao==ia.descricao){const s=(n=document.getSelection())===null||n===void 0?void 0:n.focusOffset;localStorage.setItem("indexCursor",JSON.stringify(s))}t(e.descricao)}),r}}_o.blotName="blotMenuItem",_o.tagName="DIV",_o.className="lx-eta-dropdown-content-item";class Ze extends lo{constructor(e){super(Ze.create(e))}static create(e){const t=super.create();return t.setAttribute("contenteditable","false"),t.setAttribute("class",Ze.getClasseCSS(e.agrupador)),t.setAttribute("data-rotulo",e.rotulo),t.innerHTML="",t}get rotulo(){return this.domNode.getAttribute("data-rotulo")}format(e,t){e===Ze.blotName?this.domNode.setAttribute("data-rotulo",t):e===Ze.formatoStyle?this.domNode.setAttribute("style",Ze.criarAtributoStyle(t)):super.format(e,t)}static criarAtributoStyle(e){let t=e.tipo==="Articulacao"?"color: #373634; font-weight: 600; line-height: 0.42;":"color: #373634; font-weight: 600; line-height: 1.42;";return t=e.agrupador?`${t} display: block; font-size: 1rem; text-align: center;`:`${t} float: left; margin-right: 10px;`,t}static getClasseCSS(e){return"texto__rotulo"+(e?" texto__rotulo--agrupador":" texto__rotulo--padrao")}}Ze.blotName="rotulo",Ze.tagName="LABEL",Ze.formatoStyle="STYLE";class qt extends lo{constructor(){super(qt.create())}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.innerHTML="&nbsp;",e}}qt.blotName="espaco",qt.tagName="ESPACO",qt.className="espaco";const kf=Quill.import("blots/container");class Xe extends kf{constructor(e){var t,i,r,n,s;super(Xe.create(e)),this._lexmlId=(t=e.lexmlId)!==null&&t!==void 0?t:"",this._editavel=e.editavel,this._nivel=e.nivel,this._numero=(i=e.numero)!==null&&i!==void 0?i:"",this._tipo=(r=e.tipo)!==null&&r!==void 0?r:"",this._agrupador=e.agrupador,this._hierarquia=!((s=(n=e.hierarquia)===null||n===void 0?void 0:n.pai)===null||s===void 0)&&s.uuidAlteracao?e.hierarquia:void 0,this._descricaoSituacao=e.descricaoSituacao?e.descricaoSituacao:void 0,this._existeNaNormaAlterada=e.existeNaNormaAlterada}static criarId(e){return`lxEtaId${e!=null?e:0}`}static create(e){const t=super.create();return t.setAttribute("contenteditable",e!=null&&e.editavel?"true":"false"),t.setAttribute("class",Xe.className+" "+Xe.getClasseCSS(e)),t.setAttribute("id",Xe.criarId(e.uuid)),t.setAttribute("cellpadding","0"),t.setAttribute("cellspacing","0"),t.setAttribute("border","0"),t}get blotRotulo(){var e,t;return(t=(e=this.children.head)===null||e===void 0?void 0:e.children)===null||t===void 0?void 0:t.head.children.head}get blotConteudo(){var e;return(e=this.blotRotulo)===null||e===void 0?void 0:e.next}get containerDireito(){return this.children.head.children.tail}get blotContainerDireito(){return this.containerDireito.children.head}get tamanho(){return this.length()-1}get id(){var e;return(e=this.domNode.getAttribute("id"))!==null&&e!==void 0?e:""}set agrupador(e){this._agrupador=e}get agrupador(){return this._agrupador}set editavel(e){this._editavel=e,this.blotConteudo.domNode.contentEditable=this._editavel}get editavel(){return this._editavel}set hierarquia(e){this._hierarquia=e}get hierarquia(){return this._hierarquia}set nivel(e){this._nivel=e}get nivel(){return this._nivel}set numero(e){this._numero=e}get numero(){return this._numero}set tipo(e){this._tipo=e}get tipo(){return this._tipo}set descricaoSituacao(e){this._descricaoSituacao=e}get descricaoSituacao(){return this._descricaoSituacao}set existeNaNormaAlterada(e){this._existeNaNormaAlterada=e}get existeNaNormaAlterada(){return this._existeNaNormaAlterada}get uuid(){return parseInt(this.id.substr(7),0)}set lexmlId(e){this._lexmlId=e}get lexmlId(){var e;return(e=this._lexmlId)!==null&&e!==void 0?e:""}get html(){return this.domNode.innerHTML!=="<br>"?this.domNode.innerHTML:""}set html(e){this.domNode.innerHTML=e}setEstilo(e){let t="",i="texto__dispositivo";switch(e){case U.DISPOSITIVO_ADICIONADO:t="dispositivo--adicionado";break;case U.DISPOSITIVO_MODIFICADO:t="dispositivo--modificado";break;case U.DISPOSITIVO_SUPRIMIDO:t="dispositivo--suprimido",i="texto--suprimido"}this.blotRotulo.domNode.setAttribute("class",`${Ze.getClasseCSS(this._agrupador)} ${t}`),this.blotConteudo.domNode.setAttribute("class",`${t} ${i}`)}format(e,t){e===Xe.blotName?this.domNode.setAttribute("style",Xe.criarAtributoStyle(t)):super.format(e,t)}ativarBorda(){this.domNode.classList.add("container__elemento--ativo")}desativarBorda(){this.domNode.classList.remove("container__elemento--ativo"),this.limparContainerDireito()}limparContainerDireito(){this.blotContainerDireito.tagName!==qt.tagName&&(this.blotContainerDireito.remove(),new qt().insertInto(this.containerDireito))}static criarAtributoStyle(e){let t=e.tipo==="Articulacao"?"width: 100%; min-height: 1px; line-height: 0.42; margin: 1px":"width: 100%; min-height: 26px; border: 1px solid #ffffff; line-height: 1.42; margin: 0px 2px 0px 5px !important;";return e.agrupador&&(t=`${t} text-align: center;`),t}static getClasseCSS(e){let t=e.tipo==="Articulacao"?"container__elemento--articulacao":"container__elemento--padrao";return e.agrupador&&(t=`${t} agrupador`),t}}function Ae(o){o.stopPropagation(),o.preventDefault()}Xe.blotName="containerTable",Xe.tagName="DIV",Xe.className="container__elemento";class Nf{constructor(e,t){this.callback=e,this.canceled=t}isCanceled(){var e;return(e=this.canceled)!==null&&e!==void 0&&e}cancel(){this.canceled=!0}}class wt{constructor(){this.subscriptions=[]}subscribe(e){const t=new Nf(e);return this.subscriptions.push(t),t}notify(e){this.subscriptions.forEach(t=>{t.isCanceled()||setTimeout(()=>{t.callback(e)},1)})}clean(){this.subscriptions=[]}}const Pf=/([a-zA-Z0-9áéíóúÁÉÍÓÚãẽĩõũÃẼĨÕŨàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛçÇýÝỹỸỳỲÿŸŶŷñÑ '!@#$%&*()_\-+=`'{[^~}\]<,>.:;?/|\\ªº¹²³£¢¬§¿¡“”])/i,Cf=/([^a-zA-Z0-9áéíóúÁÉÍÓÚãẽĩõũÃẼĨÕŨàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛçÇýÝỹỸỳỲÿŸŶŷñÑ '!@#$%&*()_\-+=`'{[^~}\]<,>.:;?/|\\ªº¹²³£¢¬§¿¡“”])/gi,Vu=Quill.import("modules/keyboard");class Tf extends Vu{constructor(e,t){super(e,t),this.operacaoTecladoInvalida=new wt,this.adicionaElementoTeclaEnter=new wt,this.removeElemento=new wt,this.removeElementoSemTexto=new wt,this.renumeraElemento=new wt,this.transformaElemento=new wt,this.moveElemento=new wt,this.onChange=new wt,this.altGraphPressionado=!1}listen(){this.quill.root.addEventListener("keyup",e=>{e.key==="AltGraph"&&(this.altGraphPressionado=!1),!e.ctrlKey||e.altKey||e.shiftKey||!"biBI".includes(e.key)?this.quill.cursorDeTextoEstaSobreLink()||e.key==="Backspace"&&this.quill.cursorDeTextoEstaSobreLink(-1)||!this.isTeclaQueAlteraTexto(e)||this.onChange.notify("keyboard"):this.onHotKeyToolbar()}),this.quill.root.addEventListener("keypress",e=>{this.quill.cursorDeTextoEstaSobreLink()&&e.key.length===1&&Ae(e)}),this.quill.root.addEventListener("keydown",e=>{if(e.key==="AltGraph"&&(this.altGraphPressionado=!0),this.quill.cursorDeTextoEstaSobreLink()||e.key==="Backspace"&&this.quill.cursorDeTextoEstaSobreLink(-1)){if(["Delete","Backspace"].includes(e.key)||!e.ctrlKey&&e.key.length===1||e.ctrlKey&&"xvXV".includes(e.key)||e.altKey&&"0123456789".includes(e.key))return void Ae(e)}else e.ctrlKey?(e.altKey||e.metaKey||(e.key==="Delete"?Ae(e):e.key==="Home"?this.onTeclaHome(e):e.key==="End"?this.onTeclaEnd(e):e.key==="ArrowUp"||e.key==="ArrowDown"?this.onHotKeyMover(e):e.key.toLowerCase()!=="a"||e.shiftKey?e.key.toLowerCase()==="d"?this.onTeclaCtrlD(e):e.key.toLowerCase()==="z"?this.onTeclaCtrlZ(e):e.key.toLowerCase()==="y"?this.onTeclaCtrlY(e):e.ctrlKey&&e.shiftKey&&e.key.toLowerCase()==="a"?this.onTeclaCtrlShiftA(e):e.key!=="b"&&e.key!=="i"&&e.key!=="x"&&e.key!=="v"||this.onValidarTecla(e):this.onTeclaCtrlA(e)),(e.altKey||e.metaKey)&&(["a","l","n","o","p","t"].includes(e.key.toLowerCase())?this.onHotKeyTransformacaoTipo(e):e.key.toLowerCase()==="r"&&this.onHotKeyRenumeraDispositivo(e))):e.key==="ArrowRight"?this.onTeclaArrowRight(e):e.key==="ArrowLeft"?this.onTeclaArrowLeft(e):e.key==="ArrowDown"||e.key==="ArrowUp"?this.onTeclaArrowDownOuUp(e):e.key==="Enter"?this.onTeclaEnter(e):e.key==="Escape"?this.onTeclaEscape(e):e.key==="Delete"?this.onTeclaDelete(e):e.key==="Backspace"?this.onTeclaBackspace(e):e.key==="Tab"?this.onTeclaTab(e):e.key.length===1&&Pf.test(e.key)&&this.onValidarTecla(e)}),super.listen()}isTeclaComCaracterGrafico(e){return e.location!==3&&"123456=[]/".includes(e.key)}isTeclaQueAlteraTexto(e){return!(e.ctrlKey||e.altKey||e.metaKey)&&!(this.altGraphPressionado&&!this.isTeclaComCaracterGrafico(e))&&!(!["Delete","Backspace"].includes(e.key)&&e.key.length!==1)}verificarOperacaoTecladoPermitida(){const e=this.quill.textoSelecionado;if(e.conteudo&&e.quantidadeCR>0){if(e.quantidadeCR===1&&/\n$/gi.test(e.conteudo)){const t=this.quill.getSelection(!0);return this.quill.setSelection(t.index,t.length-1,Quill.sources.API),!0}return this.operacaoTecladoInvalida.notify(),!1}return!0}onTeclaArrowRight(e){const t=this.quill.getSelection(!0),[i,r]=this.quill.getLine(t.index);r===i.tamanho&&(i.linha.next&&this.quill.setIndex(this.quill.getIndex(i.linha.next.blotConteudo),Quill.sources.USER),Ae(e))}onTeclaArrowLeft(e){const t=this.quill.getSelection(!0),[i,r]=this.quill.getLine(t.index);if(r===0){if(i.linha.prev){const n=i.linha.prev,s=this.quill.getIndex(n.blotConteudo)+n.blotConteudo.tamanho;this.quill.setIndex(s,Quill.sources.USER)}Ae(e)}}onTeclaArrowDownOuUp(e){this.quill.isProcessandoMudancaLinha&&Ae(e)}onTeclaEnter(e){if(this.verificarOperacaoTecladoPermitida()){const t=this.quill.getSelection(!0);this.quill.setSelection(t.index,0,Quill.sources.SILENT),this.adicionaElementoTeclaEnter.notify(t)}Ae(e)}onTeclaEscape(e){const t=this.quill.getSelection(!0);this.quill.setIndex(t.index,Quill.sources.SILENT),this.quill.setSelection(this.quill.inicioConteudoAtual,0,Quill.sources.SILENT),Ae(e)}onTeclaDelete(e){const t=this.quill.getSelection(!0);this.quill.linhaAtual.blotConteudo.html?this.verificarOperacaoTecladoPermitida()&&t.index!==this.quill.fimConteudoAtual||Ae(e):(Ae(e),this.removeElementoSemTexto.notify(e.key))}onTeclaBackspace(e){const t=this.quill.getSelection(!0);this.quill.linhaAtual.blotConteudo.html?(!this.verificarOperacaoTecladoPermitida()||t.index===this.quill.inicioConteudoAtual&&t.length===0)&&Ae(e):(Ae(e),this.removeElementoSemTexto.notify(e.key))}onValidarTecla(e){this.verificarOperacaoTecladoPermitida()||Ae(e)}onTeclaHome(e){const t=this.quill.getIndex(this.quill.getPrimeiraLinha().blotConteudo);this.quill.setIndex(t,Quill.sources.USER),this.quill.scroll.domNode.scrollTo(0,0),Ae(e)}onTeclaEnd(e){var t,i;const r=(i=this.quill.getIndex(this.quill.getUltimaLinha().blotConteudo)+((t=this.quill.getUltimaLinha().blotConteudo)===null||t===void 0?void 0:t.tamanho))!==null&&i!==void 0?i:0;this.quill.setIndex(r,Quill.sources.USER),this.quill.scroll.domNode.scrollTo(0,this.quill.scroll.domNode.scrollHeight),Ae(e)}onTeclaCtrlD(e){this.removeElemento.notify(),Ae(e)}onTeclaTab(e){this.transformaElemento.notify(e),Ae(e)}onTeclaCtrlZ(e){this.quill.undo(),Ae(e)}onTeclaCtrlY(e){this.quill.redo(),Ae(e)}onTeclaCtrlA(e){const t=this.quill.getIndex(this.quill.scroll.children.head.blotConteudo);this.quill.setSelection(t,this.quill.getLength(),Quill.sources.SILENT),Ae(e)}onTeclaCtrlShiftA(e){this.quill.setSelection(this.quill.inicioConteudoAtual,this.quill.linhaAtual.blotConteudo.tamanho,Quill.sources.SILENT),Ae(e)}onHotKeyRenumeraDispositivo(e){this.renumeraElemento.notify(e),Ae(e)}onHotKeyMover(e){this.moveElemento.notify(e),Ae(e)}onHotKeyTransformacaoTipo(e){this.transformaElemento.notify(e),Ae(e)}onHotKeyToolbar(){var e;!((e=document.getSelection())===null||e===void 0)&&e.toString()&&this.onChange.notify("toolbar(hotkey)")}}class ti extends lo{constructor(e){super(ti.create(e)),this._htmlAnt=""}static create(e){var t,i;const r=super.create(),n=((i=(t=e.conteudo)===null||t===void 0?void 0:t.texto)!==null&&i!==void 0?i:"").trim();return r.setAttribute("contenteditable",e!=null&&e.editavel?"true":"false"),r.innerHTML=n!==""?n:"<br>",r}set htmlAnt(e){this._htmlAnt=e}get htmlAnt(){return this._htmlAnt}get alterado(){return this._htmlAnt!==this.html}}ti.blotName="texto",ti.tagName="P",ti.className="texto__dispositivo";class oi extends lo{constructor(e){super(oi.create(e))}static create(e){const t=super.create();let i="";return i=e.tipo===Z.INFO?"mensagem--info":e.tipo===Z.WARNING?"mensagem--warning":"mensagem--danger",t.setAttribute("contenteditable","false"),t.classList.add(i),t.innerHTML=e.descricao?"- "+e.descricao:"",t}}oi.blotName="mensagem",oi.tagName="div",oi.className="mensagem";class Hi extends lo{constructor(){super(Hi.create())}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.setAttribute("style","font-size: 0.8em;"),e}}Hi.blotName="mensagens",Hi.tagName="MENSAGENS";const Df=Quill.import("modules/clipboard");class Rf extends Df{constructor(e,t){super(e,t),this.onChange=new wt,this.quill.root.addEventListener("cut",i=>{var r;if(this.quill.cursorDeTextoEstaSobreLink())return void Ae(i);!((r=document.getSelection())===null||r===void 0)&&r.toString()&&this.onChange.notify("clipboard")}),this.quill.root.addEventListener("paste",i=>{var r;if(this.quill.cursorDeTextoEstaSobreLink())return void Ae(i);!((r=i.clipboardData)===null||r===void 0)&&r.getData("text/plain")&&this.onChange.notify("clipboard")})}convert(e){if(typeof e=="string")return this.container.innerHTML=e,super.convert();this.container.innerHTML=this.container.innerHTML.replace(Cf,""),this.container.innerHTML=this.container.innerHTML.replace(/(<p\s*)/gi," <p"),this.container.innerHTML=this.container.innerHTML.replace(/(<br\s*\/>)/gi," "),this.container.innerHTML=this.container.innerHTML.replace(/<(?!strong)(?!\/strong)(?!em)(?!\/em)(?!sub)(?!\/sub)(?!sup)(?!\/sup)(.*?)>/gi,""),this.container.innerHTML=this.container.innerHTML.replace(/<([a-z]+) .*?=".*?( *\/?>)/gi,"<$1$2");const t=super.convert();return this.container.innerHTML="",t}onPaste(e){var t;e.preventDefault();const i=this.quill.getSelection(),r=(t=e==null?void 0:e.clipboardData)===null||t===void 0?void 0:t.getData("text/html"),n=new DOMParser().parseFromString(r,"text/html");let s="";const p=["A","B","STRONG","S","U","I","EM"],c=(d,u)=>{for(u(d),d=d.firstChild;d;)c(d,u),d=d.nextSibling};c(n,function(d){p.includes(d.tagName)?s+=d.outerHTML:d.nodeType!==3||p.includes(d.parentElement.tagName)||(s+=d.nodeValue)}),this.quill.clipboard.dangerouslyPasteHTML(i.index,s)}}const Lf=Quill.import("blots/container");class eo extends Lf{constructor(e){super(eo.create()),this.alinhamentoMenu=e}static create(){const e=super.create();return e.setAttribute("contenteditable","false"),e.setAttribute("class",eo.className),e}}eo.blotName="containerTdDireito",eo.tagName="DIV",eo.className="container__menu";const jf=Quill.import("blots/container");class Pt extends jf{constructor(e){super(Pt.create(e))}static create(e){const t=super.create();t.setAttribute("contenteditable",e.editavel?"true":"false"),t.setAttribute("class",Pt.className+" container__texto--nivel"+e.nivel);const i=Number(getComputedStyle(document.documentElement).getPropertyValue("--elemento-padding-factor"));if(i){const r=(e.agrupador?0:e.nivel)*i+5;t.setAttribute("style",`padding-left: ${r}px;`)}return t}}Pt.blotName="containerTdEsquerdo",Pt.tagName="DIV",Pt.className="container__texto",Pt.classLevel="level";const Mf=Quill.import("blots/container");class to extends Mf{constructor(e,t){super(to.create(e,t))}static create(e,t){const i=super.create(),r=t===jr.Esquerda?" container__linha--reverse":"";return i.setAttribute("contenteditable",e?"true":"false"),i.setAttribute("class",to.className+r),i}}to.blotName="containerTr",to.tagName="DIV",to.className="container__linha";class $f extends Quill{constructor(e,t){super(e,t)}getConteudoHtml(e,t,i){const r=this.scroll.children.head;return this.setConteudo(this.converterHtmlParaDelta(e),Quill.sources.SILENT),this.deleteText(t+i,r.length()-i-1,Quill.sources.SILENT),t>0&&this.deleteText(0,t,Quill.sources.SILENT),r.domNode.innerHTML}converterHtmlParaDelta(e){return this.clipboard.convert(e!=null?e:"")}converterDeltaParaHtml(e){return this.setConteudo(e,Quill.sources.SILENT),this.scroll.children.head.domNode.innerHTML}setConteudo(e,t){var i;const r=this.scroll.children.head;let n=0;r.length()>1&&this.deleteText(n,r.length()-1,t!=null?t:Quill.sources.SILENT),this.insertText(n," ",Quill.sources.SILENT),(i=e.ops)===null||i===void 0||i.forEach(s=>{s.attributes?this.insertText(n,s.insert,s.attributes,t!=null?t:Quill.sources.SILENT):this.insertText(n,s.insert,t!=null?t:Quill.sources.SILENT),n+=s.insert.length}),this.deleteText(n,1,Quill.sources.SILENT)}}class ye extends Quill{constructor(e,t,i){super(e,i),this._undoEstruturaVazio=!0,this._redoEstruturaVazio=!0,this._processandoMudancaLinha=!1,this.undoRedoEstrutura=new wt,this.elementoSelecionado=new wt,this.aspasAberta=!1,this.observableSelectionChange=new wt,this.onSelectionChange=(r,n)=>{const s=this.linhaAtual;this._mudouDeLinha=this.verificarMudouLinha(r,n),this._mudouDeLinha&&(this.observableSelectionChange.notify(s),this.aspasAberta=!1,this.limparHistory())},this.onTextChange=()=>{this._linhaAtual&&setTimeout(()=>{this.acertarAspas()},0)},this.on("text-change",this.onTextChange),this.on("selection-change",this.onSelectionChange),this.buffer=new $f(t,{}),this.root.addEventListener("dragstart",r=>{r.preventDefault()}),this.root.addEventListener("drop",r=>{r.preventDefault()})}get mudouDeLinha(){var e;return(e=this._mudouDeLinha)!==null&&e!==void 0&&e}get linhaAnterior(){return this._linhaAnterior}get linhaAtual(){return this._linhaAtual}get inicioConteudoAtual(){return this.getIndex(this.linhaAtual.blotConteudo)}get fimConteudoAtual(){return this.inicioConteudoAtual+this.linhaAtual.blotConteudo.tamanho}get textoSelecionado(){var e,t,i;const r=(e=this.getSelection(!0))!==null&&e!==void 0?e:{index:0,length:0},n=this.getText().substr(r.index,r.length);return{conteudo:n,quantidadeCR:(i=(t=n.match(/(\n)/gi))===null||t===void 0?void 0:t.length)!==null&&i!==void 0?i:0}}get isUndoEstruturaVazio(){return this._undoEstruturaVazio}set undoEstruturaVazio(e){this._undoEstruturaVazio=e}get isRedoEstruturaVazio(){return this._redoEstruturaVazio}set redoEstruturaVazio(e){this._redoEstruturaVazio=e}get isProcessandoMudancaLinha(){return this._processandoMudancaLinha}set processandoMudancaLinha(e){this._processandoMudancaLinha=e}static configurar(){const e=ye.import("parchment"),t=new e.Attributor.Attribute("id","id",{scope:e.Scope.BLOCK}),i=new e.Attributor.Style("paddingLeft","padding-left",{scope:e.Scope.BLOCK}),r=new e.Attributor.Style("border","border",{scope:e.Scope.BLOCK}),n=new e.Attributor.Style("borderColor","border-color",{scope:e.Scope.BLOCK}),s=new e.Attributor.Style("display","display",{scope:e.Scope.BLOCK}),p=new e.Attributor.Style("aria-label","aria-label",{scope:e.Scope.BLOCK}),c=new e.Attributor.Attribute("dataRotulo","data-rotulo",{scope:e.Scope.BLOCK});ye.register("modules/clipboard",Rf,!0),ye.register("modules/keyboard",Tf,!0),ye.register(ti,!0),ye.register(qt,!0),ye.register(oi,!0),ye.register(Hi,!0),ye.register(Eo,!0),ye.register(Ao,!0),ye.register(_o,!0),ye.register(Jt,!0),ye.register(Ze,!0),ye.register(Xe,!0),ye.register(Pt,!0),ye.register(eo,!0),ye.register(to,!0),ye.register(t,!0),ye.register(i,!0),ye.register(r,!0),ye.register(n,!0),ye.register(s,!0),ye.register(p,!0),ye.register(c,!0)}destroi(){var e,t;this.off("text-change",this.onTextChange),this.off("selection-change",this.onSelectionChange),(e=this.keyboard)===null||e===void 0||e.operacaoTecladoInvalida.clean(),(t=this.keyboard)===null||t===void 0||t.adicionaElementoTeclaEnter.clean()}getConteudoHtmlParteLinha(e,t,i){return this.buffer.getConteudoHtml(e.html,t,i)}getPrimeiraLinha(){return this.scroll.children.head}getUltimaLinha(){return this.scroll.children.tail}getLinha(e,t=this.getPrimeiraLinha()){return t.uuid===e?t:t.next?this.getLinha(e,t.next):void 0}getLinhaPorId(e){return Quill.find(this.getHtmlElement(Xe.criarId(e)),!1)}setIndex(e,t=Quill.sources.USER){var i;const r=(i=this.getSelection(!0))!==null&&i!==void 0?i:{index:0,length:0};e===r.index&&r.length===0||this.setSelection(e,0,t)}setConteudoLinha(e,t,i){var r;let n=this.getIndex(e);e.length()>1&&this.deleteText(n,e.length()-1,i!=null?i:Quill.sources.SILENT),this.insertText(n," ",Quill.sources.SILENT),(r=t.ops)===null||r===void 0||r.forEach(s=>{s.attributes?this.insertText(n,s.insert,s.attributes,i!=null?i:Quill.sources.SILENT):this.insertText(n,s.insert,i!=null?i:Quill.sources.SILENT),n+=s.insert.length}),this.deleteText(n,1,Quill.sources.SILENT)}converterHtmlParaDelta(e){return this.buffer.converterHtmlParaDelta(e)}converterDeltaParaHtml(e){return this.buffer.converterDeltaParaHtml(e)}irProximaLinha(){var e;const t=this.getIndex((e=this._linhaAtual)===null||e===void 0?void 0:e.next.blotConteudo);this.setSelection(t,0)}desmarcarLinhaAtual(e){this._linhaAnterior=e,e==null||e.desativarBorda()}marcarLinhaAtual(e){e&&e.tipo!=="Articulacao"&&(this.atualizarLinhaCorrente(e),this.elementoSelecionado.notify(e.uuid))}undo(){this.history.stack.undo.length===0?this.isUndoEstruturaVazio||this.undoRedoEstrutura.notify(ye.UNDO):(this.history.undo(),this.focus())}redo(){this.history.stack.redo.length===0?this.isRedoEstruturaVazio||this.undoRedoEstrutura.notify(ye.REDO):(this.history.redo(),this.focus())}limparHistory(){setTimeout(()=>{this.history.clear()},0)}verificarMudouLinha(e,t){if(t&&(e==null?void 0:e.index)===0&&(e==null?void 0:e.length)===0)return this.setSelection(t.index,0),!1;if(e){const i=this.getLine(e.index)[0],r=i.linha;if(i.tagName!==Ze.tagName&&i.tagName!==qt.tagName&&i.tagName!==Jt.tagName&&i.tagName!==Hi.tagName||this.setSelection(this.getIndex(i.linha.blotConteudo),0,Quill.sources.SILENT),t){const n=this.getLine(t.index)[0];if(n){const s=n.linha;if(r===s)return!1;this.desmarcarLinhaAtual(s)}}return this.marcarLinhaAtual(r),!0}return!1}getHtmlElement(e){return this.root.querySelector(`#${e}`)}acertarAspas(){var e,t;if(this._linhaAtual){const i=this.inicioConteudoAtual,r=(t=this.getText(i,(e=this.linhaAtual)===null||e===void 0?void 0:e.blotConteudo.tamanho))!==null&&t!==void 0?t:"";let n=i;if(r.indexOf('"')>-1)for(let s=0;s<r.length;s++)r[s]==='"'&&(n+=s,this.deleteText(n,1,Quill.sources.SILENT),this.insertText(n,this.aspasAberta?"\u201D":"\u201C",Quill.sources.SILENT),this.aspasAberta=!this.aspasAberta,n=i)}}atualizarLinhaCorrente(e){this.processandoMudancaLinha=!0,this._linhaAtual=e,this._linhaAtual.blotConteudo.htmlAnt=this._linhaAtual.blotConteudo.html,e.ativarBorda(),this.scrollToElemento(e.uuid)}scrollToElemento(e){const t=this.getHtmlElement(Xe.criarId(e));setTimeout(()=>{this.isInEtaBoxViewport(t)||this.scrollIntoEtaBox(t)},0)}scrollIntoEtaBox(e){var t;const i=e.offsetTop;(t=e.closest(".ql-editor"))===null||t===void 0||t.scrollTo(0,i)}isInEtaBoxViewport(e){const t=e.getBoundingClientRect(),i=e.closest("#lx-eta-box").getBoundingClientRect().bottom;return t.top>=0&&t.bottom<=i}cursorDeTextoEstaSobreLink(e=0){var t;const i=this.getSelection(!0),r=this.getContents(i.index+e,1).ops;return!!r&&((t=r[0].attributes)===null||t===void 0?void 0:t.link)}}ye.UNDO="undo",ye.REDO="redo";class ur{static criarContainerLinha(e){const t=new Xe(e),i=new to(e.editavel,this.alinhamentoMenu),r=new Pt(e),n=new eo(this.alinhamentoMenu);return new Ze(e).insertInto(r),new ti(e).insertInto(r),new qt().insertInto(n),r.insertInto(i),n.insertInto(i),i.insertInto(t),t}static criarContainerMensagens(e){const t=new to(!1,this.alinhamentoMenu),i=new Pt(e),r=new eo(this.alinhamentoMenu);return e.mensagens&&e.mensagens.length>0&&e.mensagens.forEach(n=>{new oi(n).insertInto(i)}),new qt().insertInto(r),i.insertInto(t),r.insertInto(t),t}}async function Uf(o,e,t,i){var r;const n=document.createElement("elix-dialog"),s=document.createRange().createContextualFragment(`
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


  `),p=o.norma?(r=ci(o.norma))===null||r===void 0?void 0:r.urn:void 0,c=o.norma?kn(o.norma):void 0,d=o.norma?Ti(o.norma):void 0,u=s.querySelector("#tipoNorma"),a=s.querySelector("#numeroNorma"),l=s.querySelector("#dataNorma");p&&(u.value=p),c&&(a.value=c),d&&(l.value=d);const h=s.querySelectorAll("button"),f=h[0],m=h[1],g=s.querySelector(".erro");f.onclick=()=>{const v=((y,b,x,w)=>{var E;return`urn:lex:br:${y}:${b}:${(E=Tu(w))!==null&&E!==void 0?E:w};${x}`})("federal",u.value,a==null?void 0:a.value,l==null?void 0:l.value);Du(v)?(e.focus(),n.close(),g.style.display="none",o.norma=v,t.dispatch(i.execute(o))):(g.innerText="Dados inv\xE1lidos",g.style.display="block")},m.onclick=()=>{e.focus(),n.close()},n.appendChild(s),await n.open()}ur.alinhamentoMenu=jr.Esquerda;let Ll=class extends _n(he)(rt){constructor(){super(),this.inscricoes=[],this.onSelectionChange=(o,e,t)=>{(o==null?void 0:o.length)===0&&t===Quill.sources.USER&&this.ajustarLinkParaNorma()},this.tabIndex=-1}get quill(){return this._quill}createRenderRoot(){return this}async firstUpdated(){this.inicializar(this.configEditor())}stateChanged(o){var e,t;this.quill?(this.quill.undoEstruturaVazio=((e=o.elementoReducer.past)!==null&&e!==void 0?e:[]).length===0,this.quill.redoEstruturaVazio=((t=o.elementoReducer.future)!==null&&t!==void 0?t:[]).length===0,o.elementoReducer.ui&&(o.elementoReducer.ui.message?this.alertar(o.elementoReducer.ui.message.descricao):this.processarStateEvents(o.elementoReducer.ui.events))):this.quillNaoInicializado(o)}disconnectedCallback(){this.inscricoes.forEach(o=>o.cancel()),this.removeEventListener("ontextchange",o=>console.log(o)),this.destroiQuill(),super.disconnectedCallback()}render(){return Se`
      ${Sf}
      ${qf}
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
    `}formatacaoAlterada(){var o;!((o=document.getSelection())===null||o===void 0)&&o.toString()&&this.agendarEmissaoEventoOnChange("toolbar")}onClickUndo(){this.quill.undo()}onClickRedo(){this.quill.redo()}onClickDispositivoAtual(){this.quill.setSelection(this.quill.getIndex(this.quill.linhaAtual.blotConteudo),0,Quill.sources.SILENT),this.quill.focus()}artigoOndeCouber(){}ajustarLinkParaNorma(){const o=document.querySelector("a.ql-preview"),e=o==null?void 0:o.getAttribute("href");if(e!=null&&e.startsWith("urn")){const t="https://normas.leg.br/?urn="+e;o.setAttribute("href",t),o.innerHTML=(i=>{var r;const n=Cu(i),s=kn(n),p=(r=ci(n))===null||r===void 0?void 0:r.descricao,c=Ti(n);return(p||"")+(s?" n\xBA "+s:"")+(c.length>7?" de "+c:"")})(e)}}onBold(o){this.quill.keyboard.verificarOperacaoTecladoPermitida()&&(this.quill.format("bold",o),this.formatacaoAlterada())}onItalic(o){this.quill.keyboard.verificarOperacaoTecladoPermitida()&&(this.quill.format("italic",o),this.formatacaoAlterada())}onScript(o){this.quill.keyboard.verificarOperacaoTecladoPermitida()&&(this.quill.format("script",o),this.formatacaoAlterada())}onOperacaoInvalida(){this.alertar("Opera\xE7\xE3o n\xE3o permitida.")}isDesmembramento(o,e,t){return(e+t).localeCompare(o)!==0}adicionarElemento(o){var e,t;const i=this.quill.linhaAtual,r=i.blotConteudo,n=(e=this.quill.inicioConteudoAtual)!==null&&e!==void 0?e:0,s=(t=n+r.tamanho)!==null&&t!==void 0?t:0;let p="",c="";if(o.index===n)p="",c=r.html;else if(o.index===s)p=r.html,c="";else{const u=s-o.index;p=this.quill.getConteudoHtmlParteLinha(r,0,r.tamanho-u),c=this.quill.getConteudoHtmlParteLinha(r,o.index-n,u)}const d=this.criarElemento(i.uuid,i.lexmlId,i.tipo,p,i.numero,i.hierarquia);if(this.isDesmembramento(r.htmlAnt,p,c)){const u=this.criarElemento(i.uuid,i.lexmlId,i.tipo,p+c,i.numero,i.hierarquia);he.dispatch(pl.execute(u))}he.dispatch(ta.execute(d,c))}async renumerarElemento(){var o,e;const t=this.quill.linhaAtual,i=t.blotConteudo.html,r=this.criarElemento((o=t.uuid)!==null&&o!==void 0?o:0,t.lexmlId,(e=t.tipo)!==null&&e!==void 0?e:"","",t.numero,t.hierarquia,t.descricaoSituacao,t.existeNaNormaAlterada);let n;if(!(v=>{var y,b;return((b=(y=v.hierarquia)===null||y===void 0?void 0:y.pai)===null||b===void 0?void 0:b.uuidAlteracao)!==void 0&&v.descricaoSituacao!==U.DISPOSITIVO_ORIGINAL})(r))return;const s=document.createElement("elix-dialog"),p=r.descricaoSituacao===U.DISPOSITIVO_ADICIONADO,c=document.createRange().createContextualFragment(`
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
    `),d=c.querySelector("input");var u;d.value=`${u=t.blotRotulo.rotulo,u.replace(/\./g,"").replace(/["“]/g,"").replace(/^Parte$/i,"").replace(/^Livro$/i,"").replace(/^Titulo$/i,"").replace(/^Capitulo$/i,"").replace(/^Secao$/i,"").replace(/^Subsecao$/i,"").replace(/^Artigo$/i,"").replace(/^Paragrafo$/i,"").replace(/^Inciso$/i,"").replace(/^Alinea$/i,"").replace(/^Item$/i,"").replace(/Art/i,"").replace(/§/i,"").replace(/§/i,"").replace(/[º]/i,"").replace(/[–-][/s]*$/,"").replace(/[)][/s]*$/,"").trim()}`,r.existeNaNormaAlterada!==void 0&&(c.getElementById(r.existeNaNormaAlterada?"existente":"adicionado").checked=!0),p&&r.existeNaNormaAlterada&&(c.querySelector('input[id="existente"]').checked=!0);const a=c.querySelectorAll("button"),l=a[0],h=a[1],f=c.querySelector(".erro");l.onclick=()=>{var v;m()&&(this.quill.focus(),s.close(),((v=r.conteudo)===null||v===void 0?void 0:v.texto)!==i&&(r.conteudo.texto=i,he.dispatch(xh.execute(r))),he.dispatch(St.execute(r,d.value.trim(),n==="true")))},h.onclick=()=>{this.quill.focus(),s.close()};const m=()=>{if(document.querySelectorAll('input[name="existeNaNorma"]').forEach(v=>v.checked?n=v.value:void 0),p&&n===void 0){const v="\xC9 necess\xE1rio informar se se trata de dispositivo existente na norma alterada";return f.innerText=v,f.style.display="block",!1}return f.style.display="none",!0},g=()=>{const v=d.value;return/^\s*$/.test(v)?"A numera\xE7\xE3o n\xE3o pode ser vazia.":""};d.onkeyup=v=>{const y=g();f.innerText=y,f.style.display=y?"block":"none",l.disabled=Boolean(y),l.disabled||v.key==="Enter"&&l.click()},s.appendChild(c),l.disabled=Boolean(g()),await s.open()}removerElementoSemTexto(o){var e,t;const i=this.quill.linhaAtual,r=this.criarElemento((e=i.uuid)!==null&&e!==void 0?e:0,i.lexmlId,(t=i.tipo)!==null&&t!==void 0?t:"","",i.numero,i.hierarquia);he.dispatch(Ah.execute(r,o))}removerElemento(){const o=this.quill.linhaAtual,e=`Voc\xEA realmente deseja remover o dispositivo ${o.blotRotulo.rotulo}`;this.confirmar(e,["Sim","N\xE3o"],t=>{var i,r;const n=t.detail.closeResult;if((n&&n.choice)==="Sim"){const s=this.criarElemento((i=o.uuid)!==null&&i!==void 0?i:0,o.lexmlId,(r=o.tipo)!==null&&r!==void 0?r:"","",o.numero,o.hierarquia);he.dispatch(Mt.execute(s))}this.quill.focus()})}moverElemento(o){const e=this.quill.linhaAtual,t=e.blotConteudo.html,i=this.criarElemento(e.uuid,e.lexmlId,e.tipo,t,e.numero,e.hierarquia);o.key==="ArrowUp"?he.dispatch(Co.execute(i)):o.key==="ArrowDown"&&he.dispatch(Po.execute(i))}transformarElemento(o){const e=this.quill.linhaAtual,t=e.blotConteudo.html,i=this.criarElemento(e.uuid,e.lexmlId,e.tipo,t,e.numero,e.hierarquia);o.key.toLowerCase()==="a"?he.dispatch(vi(i,D.artigo.name)):o.key.toLowerCase()==="l"?he.dispatch(vi(i,D.alinea.name)):o.key.toLowerCase()==="n"?he.dispatch(vi(i,D.inciso.name)):o.key.toLowerCase()==="o"?he.dispatch(vi(i,D.omissis.name)):o.key.toLowerCase()==="p"?he.dispatch(vi(i,D.paragrafo.name)):o.key.toLowerCase()==="t"?he.dispatch(vi(i,D.item.name)):Vu.keys.TAB&&he.dispatch(o.shiftKey?{type:"SHIFT_TAB",atual:i}:(r=>({type:"TAB",atual:r}))(i))}elementoSelecionado(o){var e;const t=this.quill.linhaAtual,i=this.criarElemento(o,t.lexmlId,(e=t.tipo)!==null&&e!==void 0?e:"","",t.numero,t.hierarquia);he.dispatch(Eh.execute(i)),this.quill.processandoMudancaLinha=!1}undoRedoEstrutura(o){o==="undo"?he.dispatch({type:"UNDO"}):he.dispatch({type:"REDO"})}processarStateEvents(o){o==null||o.forEach(i=>{var r;switch(i.stateType){case j.DocumentoCarregado:this.destroiQuill(),this.inicializar(this.configEditor()),this.carregarArticulacao((r=i.elementos)!==null&&r!==void 0?r:[]);break;case j.InformarNorma:Uf(i.elementos[0],this.quill,he,wh);break;case j.ElementoIncluido:this.inserirNovoElementoNoQuill(i.elementos[0],i.referencia,!0),this.inserirNovosElementosNoQuill(i,!0);break;case j.ElementoModificado:case j.ElementoRestaurado:this.atualizarQuill(i),this.montarMenuContexto(i);break;case j.ElementoSuprimido:this.atualizarSituacao(i),this.montarMenuContexto(i);break;case j.ElementoRemovido:this.removerLinhaQuill(i);break;case j.ElementoRenumerado:this.renumerarQuill(i);break;case j.ElementoValidado:this.atualizarMensagemQuill(i);break;case j.ElementoSelecionado:this.montarMenuContexto(i),this.atualizarMensagemQuill(i);break;case j.ElementoMarcado:this.marcarLinha(i);break;case j.SituacaoElementoModificada:this.atualizarSituacao(i),this.montarMenuContexto(i)}this.quill.limparHistory()});const e=[j.ElementoModificado,j.ElementoSuprimido,j.ElementoRestaurado,j.ElementoIncluido,j.ElementoRemovido,j.ElementoRenumerado],t=o==null?void 0:o.filter(i=>e.includes(i.stateType)).map(i=>i.stateType);t!=null&&t.length&&this.agendarEmissaoEventoOnChange("stateEvents")}marcarLinha(o){this.quill.desmarcarLinhaAtual(this.quill.linhaAtual);const e=o.elementos[0],t=this.quill.getLinha(e.uuid),i=this.quill.getIndex(t.blotConteudo);this.quill.setIndex(i,Quill.sources.SILENT),this.quill.atualizarLinhaCorrente(t),this.elementoSelecionado(t.uuid),o.moverParaFimLinha&&setTimeout(()=>{const r=this.quill.getSelection().index+this.quill.linhaAtual.blotConteudo.html.length;this.quill.setSelection(r,0,Quill.sources.USER)},0)}processarEscolhaMenu(o){var e,t,i,r;if(o==="Remover dispositivo")this.removerElemento();else if(o===St.descricao)this.renumerarElemento();else{const n=this.quill.linhaAtual,s=this.criarElemento((e=n.uuid)!==null&&e!==void 0?e:0,n.lexmlId,(t=n.tipo)!==null&&t!==void 0?t:"","",n.numero,n.hierarquia);s.conteudo.texto=(i=n.blotConteudo.html)!==null&&i!==void 0?i:"",he.dispatch((r=o,pa.filter(p=>p.descricao===r.trim())[0]).execute(s))}}inserirNovoElementoNoQuill(o,e,t){var i;const r=this.quill.getLinha(e.uuid);if(r){const n=ur.criarContainerLinha(o);r.next?n.insertInto(this.quill.scroll,r.next):n.insertInto(this.quill.scroll);const s=he.getState().elementoReducer.modo===vt.EMENDA_ARTIGO_ONDE_COUBER;if(((i=this.quill.linhaAtual)===null||i===void 0?void 0:i.blotConteudo.html)!==""||n.blotConteudo.html===""||s){if(t){this.quill.desmarcarLinhaAtual(this.quill.linhaAtual),this.quill.marcarLinhaAtual(n);try{this.quill.setIndex(this.quill.getIndex(n.blotConteudo),Quill.sources.SILENT)}catch{}}}else this.quill.linhaAtual.blotConteudo.htmlAnt=this.quill.linhaAtual.blotConteudo.html;this.quill.linhaAtual.descricaoSituacao=o.descricaoSituacao,this.quill.linhaAtual.existeNaNormaAlterada=o.existeNaNormaAlterada,this.quill.linhaAtual.setEstilo(o.descricaoSituacao)}}inserirNovosElementosNoQuill(o,e){var t;const i=(t=o.elementos)!==null&&t!==void 0?t:[];for(let r=1;r<i.length;r++)this.inserirNovoElementoNoQuill(i[r],i[r-1],e)}atualizarSituacao(o){var e;let t;((e=o.elementos)!==null&&e!==void 0?e:[]).map(i=>{var r;t=this.quill.getLinha((r=i.uuid)!==null&&r!==void 0?r:0,t),t&&i.descricaoSituacao!==t.descricaoSituacao&&(t.descricaoSituacao=i.descricaoSituacao,t.setEstilo(i.descricaoSituacao))})}atualizarQuill(o){var e;let t;((e=o.elementos)!==null&&e!==void 0?e:[]).map(i=>{var r,n,s,p,c;if(t=this.quill.getLinha((r=i.uuid)!==null&&r!==void 0?r:0,t),t){let d=!1;i.editavel!==t.editavel&&(t.editavel=i.editavel),i.rotulo!==t.blotRotulo.html&&(t.numero=(n=i.numero)!==null&&n!==void 0?n:"",t.blotRotulo.format(Ze.blotName,i.rotulo)),i.nivel!==t.nivel&&(t.nivel=i.nivel,t.format(Xe.blotName,i),d=!0),i.agrupador!==t.agrupador&&(t.agrupador=i.agrupador,t.blotRotulo.format(Ze.formatoStyle,i),d||t.format(Xe.blotName,i)),((s=i.conteudo)===null||s===void 0?void 0:s.texto)!==t.blotConteudo.html&&(t.blotConteudo.html=(c=(p=i.conteudo)===null||p===void 0?void 0:p.texto)!==null&&c!==void 0?c:""),i.descricaoSituacao!==t.descricaoSituacao&&(t.descricaoSituacao=i.descricaoSituacao,t.setEstilo(i.descricaoSituacao)),i.existeNaNormaAlterada!==t.existeNaNormaAlterada&&(t.existeNaNormaAlterada=i.existeNaNormaAlterada),t.children.length===2&&t.children.tail.remove(),i.mensagens&&i.mensagens.length>0&&ur.criarContainerMensagens(i).insertInto(t)}})}removerLinhaQuill(o){var e;let t;((e=o.elementos)!==null&&e!==void 0?e:[]).forEach(n=>{var s;t=this.quill.getLinha((s=n.uuid)!==null&&s!==void 0?s:0,t),t&&t.remove()});const i=this.quill.getLine(this.quill.getSelection(!0).index)[0].linha,r=this.quill.getIndex(i.blotConteudo);this.quill.setSelection(r,0,Quill.sources.SILENT),this.quill.marcarLinhaAtual(i)}renumerarQuill(o){var e;let t;((e=o.elementos)!==null&&e!==void 0?e:[]).map(i=>{var r;t=this.quill.getLinha((r=i.uuid)!==null&&r!==void 0?r:0,t),t&&t.blotRotulo.format(Ze.blotName,i.rotulo)})}atualizarMensagemQuill(o){var e;let t;((e=o.elementos)!==null&&e!==void 0?e:[]).map(i=>{var r;t=this.quill.getLinha((r=i.uuid)!==null&&r!==void 0?r:0,t),t&&((t==null?void 0:t.children.length)===2&&t.children.tail.remove(),i.mensagens&&i.mensagens.length>0&&ur.criarContainerMensagens(i).insertInto(t))})}montarMenuContexto(o){var e;const t=o.elementos?o.elementos[0]:new Rl,i=((e=t==null?void 0:t.acoesPossiveis)!==null&&e!==void 0?e:[]).filter(r=>Fh(r));if(i.length>0){this.quill.linhaAtual||this.marcarLinha(o);const r=new Jt,n=new Ao(this.quill.linhaAtual.containerDireito.alinhamentoMenu),s=p=>{this.processarEscolhaMenu(p),this.quill.focus()};new Eo().insertInto(r),i.forEach(p=>{new _o(p,s).insertInto(n)}),n.insertInto(r),this.quill.linhaAtual.blotContainerDireito.remove(),r.insertInto(this.quill.linhaAtual.containerDireito)}}criarElemento(o,e,t,i,r,n,s,p){const c=new Rl;return c.uuid=o,c.lexmlId=e,c.tipo=t,c.numero=r,c.conteudo={texto:i},c.hierarquia=n,c.descricaoSituacao=s,c.existeNaNormaAlterada=p,c}inicializar(o){const e=this.getHtmlElement("lx-eta-editor"),t=this.getHtmlElement("lx-eta-buffer");ye.configurar(),this._quill=new ye(e,t,o),this.quill.on("selection-change",this.onSelectionChange),this.inscricoes.push(this.quill.keyboard.operacaoTecladoInvalida.subscribe(this.onOperacaoInvalida.bind(this))),this.inscricoes.push(this.quill.keyboard.adicionaElementoTeclaEnter.subscribe(this.adicionarElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.moveElemento.subscribe(this.moverElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.removeElemento.subscribe(this.removerElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.removeElementoSemTexto.subscribe(this.removerElementoSemTexto.bind(this))),this.inscricoes.push(this.quill.keyboard.renumeraElemento.subscribe(this.renumerarElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.transformaElemento.subscribe(this.transformarElemento.bind(this))),this.inscricoes.push(this.quill.undoRedoEstrutura.subscribe(this.undoRedoEstrutura.bind(this))),this.inscricoes.push(this.quill.elementoSelecionado.subscribe(this.elementoSelecionado.bind(this))),this.inscricoes.push(this.quill.observableSelectionChange.subscribe(this.atualizarTextoElemento.bind(this))),this.inscricoes.push(this.quill.keyboard.onChange.subscribe(this.agendarEmissaoEventoOnChange.bind(this))),this.inscricoes.push(this.quill.clipboard.onChange.subscribe(this.agendarEmissaoEventoOnChange.bind(this)))}agendarEmissaoEventoOnChange(o){clearTimeout(this.timerOnChange),this.timerOnChange=setTimeout(()=>this.emitirEventoOnChange(o),1e3)}atualizarTextoElemento(o){var e,t,i;if(!((e=o==null?void 0:o.blotConteudo)===null||e===void 0)&&e.alterado){const r=this.criarElemento(o.uuid,o.lexmlId,o.tipo,(i=(t=o.blotConteudo)===null||t===void 0?void 0:t.html)!==null&&i!==void 0?i:"",o.numero,o.hierarquia);he.dispatch(pl.execute(r))}}emitirEventoOnChange(o){this.atualizarTextoElemento(this.quill.linhaAtual),this.dispatchEvent(new CustomEvent("onchange",{bubbles:!0,composed:!0,detail:{origemEvento:o}}))}carregarArticulacao(o){setTimeout(()=>{this.quill.getLine(0)[0].remove(),o.forEach(e=>{const t=ur.criarContainerLinha(e);t.insertInto(this.quill.scroll),e.tipo===D.generico.tipo&&he.dispatch(vu.execute(e)),e.descricaoSituacao===U.DISPOSITIVO_ADICIONADO&&t.setEstilo(U.DISPOSITIVO_ADICIONADO)}),this.quill.limparHistory(),o.length>1&&setTimeout(()=>{const e=this.quill.getLinha(o[1].uuid);e!=null&&e.blotConteudo&&this.quill.setSelection(this.quill.getIndex(e==null?void 0:e.blotConteudo),0,Quill.sources.USER)},0),he.dispatch(mu.execute())},0)}configEditor(){return{formats:["bold","italic","link","underline","strike"],modules:{toolbar:{container:"#lx-eta-barra-ferramenta",handlers:{bold:this.onBold.bind(this),italic:this.onItalic.bind(this),script:this.onScript.bind(this)}},history:{delay:0,maxStack:500,userOnly:!0}},theme:"snow"}}async confirmar(o,e,t){const i=document.createElement("elix-alert-dialog");i.textContent=o,i.choices=e,i.addEventListener("close",t),await i.open()}alertar(o){const e=this.querySelector("#toast-alerta");this.querySelector("#toast-msg").innerHTML=o,e.fromEdge="top",e.open()}quillNaoInicializado(o){var e;let t=[];const i=r=>{setTimeout(()=>{this.quill?r.length>0&&this.carregarArticulacao(r):i(r)},70)};if(o.elementoReducer.ui){const r=o.elementoReducer.ui.events.find(n=>n.stateType===j.DocumentoCarregado);t=(e=r==null?void 0:r.elementos)!==null&&e!==void 0?e:[]}i(t)}getHtmlElement(o){return this.querySelector(`#${o}`)}destroiQuill(){this.getHtmlElement("lx-eta-editor").innerHTML="",this.getHtmlElement("lx-eta-buffer").innerHTML="",this.quill&&(this.quill.off("selection-change",this.onSelectionChange),this.quill.destroi()),this._quill=void 0}};Ll=ce([It("lexml-eta-editor")],Ll);let Yr=class extends rt{constructor(){super(...arguments),this.htmlAgrupador=()=>{var o,e,t;return Se`<p class="rotulo">${this.elemento.rotulo}</p>
      <p class="texto-agrupador">${Ds((t=(e=(o=this.elemento)===null||o===void 0?void 0:o.conteudo)===null||e===void 0?void 0:e.texto)!==null&&t!==void 0?t:"")}</p>`},this.htmlDispositivo=()=>{var o,e,t;return Se`
      <p class="texto" style="${`padding-left: ${20*this.elemento.nivel}px;`}">
        <span class="rotulo">${this.elemento.rotulo}</span>
        ${Ds((t=(e=(o=this.elemento)===null||o===void 0?void 0:o.conteudo)===null||e===void 0?void 0:e.texto)!==null&&t!==void 0?t:"")}
      </p>
    `}}render(){return Se`
      <div class="box">
        <div class="conteudo">${this.elemento.agrupador?this.htmlAgrupador():this.htmlDispositivo()}</div>
      </div>
    `}};Yr.styles=En`
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
  `,ce([Qe({type:Object})],Yr.prototype,"elemento",void 0),Yr=ce([It("lexml-eta-elemento")],Yr);let ns=class extends rt{render(){return Se`
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
    `}};ns.styles=En`
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
  `,ns=ce([It("lexml-eta-help")],ns);let ss=class extends rt{constructor(){super(),this.texto="",this.toolbarOptions=[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],["blockquote"],["undo","redo"],[{align:[]}],["clean"]],this.icons=Quill.import("ui/icons"),this.init=()=>{var o;this.container=document.querySelector("#editor-justificativa"),this.container&&(this.quill=new Quill(this.container,{formats:["bold","italic","link","underline","strike"],modules:{toolbar:{container:this.toolbarOptions,handlers:{undo:this.undo,redo:this.redo}},history:{delay:0,maxStack:500,userOnly:!0},clipboard:{}},placeholder:"",theme:"snow"}),this.setContent(this.texto),(o=this.quill)===null||o===void 0||o.on("text-change",this.updateTexto))},this.setContent=o=>{this.quill&&(this.quill.root.innerHTML=o.replace(/indent/g,"ql-indent").replace(/align-justify/g,"ql-align-justify").replace(/align-center/g,"ql-align-center").replace(/align-right/g,"ql-align-right"))},this.updateTexto=()=>{var o,e;this.texto=!((o=this.quill)===null||o===void 0)&&o.root.innerHTML?(e=this.quill)===null||e===void 0?void 0:e.root.innerHTML.replace(/ql-indent/g,"indent").replace(/ql-align-justify/g,"align-justify").replace(/ql-align-center/g,"align-center").replace(/ql-align-right/g,"align-right"):""},this.undo=()=>{var o;return(o=this.quill)===null||o===void 0?void 0:o.history.undo()},this.redo=()=>{var o;return(o=this.quill)===null||o===void 0?void 0:o.history.redo()},this.icons.undo=`<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
    <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
    </svg>`,this.icons.redo=`<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
    <path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
    </svg>`}update(o){super.update(o)}createRenderRoot(){return this}render(){return Se`
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
    `}firstUpdated(){this.init()}};ce([Qe({type:String})],ss.prototype,"texto",void 0),ss=ce([It("lexml-emenda-justificativa")],ss);class Ff{constructor(){this.metadados={},this.tipo=Rs.EMENDA,this.proposicao=new zf,this.destino=new Bf,this.epigrafe=new Hf,this.dispositivos=new Ku,this.comandoEmenda=new Wu,this.justificativa="",this.local="",this.autoria=new ga}}var Rs,Ls;(function(o){o.EMENDA="emenda",o.EMENDA_ARTIGO_ONDE_COUBER="emendaArtigoOndeCouber"})(Rs||(Rs={}));class zf{constructor(){this.urn="",this.sigla="",this.numero="",this.ano="",this.ementa="",this.genero="M",this.substitutivo=!1,this.identificacaoTexto=""}}class Bf{constructor(){this.siglaCasaLegislativa="CN",this.tipoColegiado="Plen\xE1rio"}}class Hf{constructor(){this.texto="",this.complemento=""}}class Ku{constructor(){this.dispositivosSuprimidos=[],this.dispositivosModificados=[],this.dispositivosAdicionados=[]}}class Gu{constructor(){this.tipo="",this.id=""}}class Vf extends Gu{}class Qu extends Gu{}class Kf extends Qu{}class Wu{constructor(){this.comandos=[]}}class Gf{constructor(e,t){this.cabecalho=e,this.citacao=t}}(function(o){o.NAO_IDENTIFICADO="N\xE3o identificado",o.PARLAMENTAR="Parlamentar",o.COMISSAO="Comiss\xE3o"})(Ls||(Ls={}));class ga{constructor(){this.tipo=Ls.PARLAMENTAR,this.imprimirPartidoUF=!0,this.quantidadeAssinaturasAdicionaisSenadores=0,this.quantidadeAssinaturasAdicionaisDeputados=0,this.parlamentares=[]}}class Ge{constructor(e){this.nome=e,this.valores=new Array,this.atributos=new De}toString(){if(!this.valores.length)return"<"+this.nome+this.atributos+"/>";const e=new De("<"+this.nome+this.atributos+">");return this.valores.forEach(t=>{e.append(t)}),e.append("</"+this.nome+">"),e.toString()}add(e){return e&&this.valores.push(e),this}addAtributo(e,t){return this.atributos.append(" "),this.atributos.append(e),t&&(this.atributos.append("='"),this.atributos.append(t),this.atributos.append("'")),this}}class Oo{static compare(e,t){if(!e||!t)throw new Error("Tentativa de compara\xE7\xE3o de dispositivo nulo.");if(!e.pai)return-1;if(!t.pai)return 1;const i=Oo.getIndices(e),r=Oo.getIndices(t);return Oo.comparaIndices(i,r)}static getIndices(e){const t=[];let i=this.getPaiParaComparacao(e);for(;i;)t.push(this.getIndexDoFilho(i,e)),e=i,i=this.getPaiParaComparacao(e);return t.reverse(),t}static getPaiParaComparacao(e){if(e.pai)return K(e.pai)&&Ve(e)?e.pai.caput:e.pai}static getIndexDoFilho(e,t){return Ce(t)?0:fe(t)?e.filhos.indexOf(t)+1:Ve(t)?-1:e.filhos.indexOf(t)}static comparaIndices(e,t){let i=0;const r=e.length,n=t.length;for(let s=0;s<r&&s<n&&i===0;s++)i=e[s]-t[s];return i===0&&(i=r-n),i}}class se{static getDispositivosNaoOriginais(e){const t=[];return Bo(e,i=>{i.pai&&i.situacao.descricaoSituacao!==U.DISPOSITIVO_ORIGINAL&&t.push(i)}),t}static getDispositivosComando(e){const t=new Array;for(const i of e){if(i.situacao.descricaoSituacao===U.DISPOSITIVO_ORIGINAL||G(i)||Ve(i))continue;const r=se.getDispositivoAfetado(i);r&&!t.includes(r)&&t.push(r)}return t}static getDispositivoAfetado(e){if(de(e)||K(e))return e;const t=e.pai;return Ce(t)&&t.pai.situacao.descricaoSituacao!==U.DISPOSITIVO_ORIGINAL?t.filhos.find(i=>i.situacao.descricaoSituacao===U.DISPOSITIVO_ORIGINAL)?e:t.pai:se.isAlteracaoIntegral(t)?se.getDispositivoAfetado(t):e}static getDispositivoAfetadoEmAlteracao(e){if(Le(e)){if(se.isOmissisAdjacenteADispositivoDeEmenda(e))return}else if(e.situacao.descricaoSituacao===U.DISPOSITIVO_ADICIONADO&&se.isTextoOmitido(e))return;const t=e.pai;return se.isAlteracaoIntegralEmAlteracao(t)?se.getDispositivoAfetado(t):e}static isTextoOmitido(e){var t;return Le(e)||e.texto.startsWith(bt)||de(e)&&!!(!((t=e.caput)===null||t===void 0)&&t.texto.startsWith(bt))}static isAlteracaoIntegral(e){if(e.situacao.descricaoSituacao===U.DISPOSITIVO_ORIGINAL)return!1;if(e.situacao.descricaoSituacao===U.DISPOSITIVO_SUPRIMIDO||e.situacao.descricaoSituacao===U.DISPOSITIVO_ADICIONADO)return!0;if(!e.filhos.length)return!K(e)||e.situacao.descricaoSituacao!==U.DISPOSITIVO_ORIGINAL;for(const t of e.filhos)if(!se.isAlteracaoIntegral(t))return!1;return!0}static isAlteracaoIntegralEmAlteracao(e){return!Ve(e)&&e.situacao.descricaoSituacao===U.DISPOSITIVO_ADICIONADO&&!se.isTextoOmitido(e)}static getArvoreDispositivos(e){const t=new Array;return e.length&&e.forEach(i=>{this.atualizaMapa(i,t)}),t}static atualizaMapa(e,t){const i=this.getHierarquiaDispositivosDeUmDispositivo(e);let r=t;i.forEach(n=>{const s=r.find(p=>p.dispositivo===n);if(s)r=s.filhos;else{const p=new Qf(n);r.push(p),r=p.filhos}})}static getHierarquiaDispositivosDeUmDispositivo(e){const t=new Array;t.push(e);let i=e.pai;for(;i&&!Jo(i)&&!Sh(i);)t.push(i),i=i.pai;return t.reverse(),t}static isSequenciasPlural(e){const t=e.length;return t!==0&&(t>1||se.isSequenciaPlural(e[0]))}static isSequenciaPlural(e){const t=e.getQuantidadeRanges();return t!==0&&(t>1||e.getPrimeiroRange().getQuantidadeDispositivos()>1)}static getProximoAgrupador(e){let t=e;do t=Pr(t);while(t&&!de(t));return t}static getDispositivoIrmaoPosterior(e){if(K(e)||de(e))return this.getArtigoPosterior(e);if(!this.isUltimoDispositivoDoMesmoTipo(e)){const t=e.pai,i=t.filhos.indexOf(e)+1;return t.filhos[i]}}static getArtigoPosterior(e){const t=e.pai;if(t.filhos.length){for(let i=t.filhos.indexOf(e)+1;i<t.filhos.length;i++){const r=t.filhos[i];if(K(r))return r;if(de(r)){const n=this.buscaProximoArtigo(r);if(n)return n}}if(t.pai)return this.getArtigoPosterior(t)}}static buscaProximoArtigo(e){const t=e.filhos;for(const i of t){if(K(i))return i;if(de(i))return this.buscaProximoArtigo(i)}}static isUltimoDispositivoDoMesmoTipo(e){if(!e.pai)return!0;const t=e.pai,i=t.filhos.indexOf(e);return t.filhos.length===i+1||t.filhos[i+1].tipo!==e.tipo}static getFilhosEstiloLexML(e){if(K(e)){const t=e;return[t.caput,...t.filhos.filter(i=>fe(i))]}return e.filhos}static getDispositivoAnteriorDireto(e){const t=e.pai,i=this.getFilhosEstiloLexML(t),r=i.indexOf(e);if(!(r>0))return t;for(e=i[r-1];e.filhos.length;)e=e.filhos[e.filhos.length-1];return e}static getDispositivoPosteriorDireto(e){const t=this.getFilhosEstiloLexML(e);return t.length?t[0]:this.getProximoIrmaoRecursivo(e)}static getProximoIrmaoRecursivo(e){if(!e)return;const t=Pr(e);if(t)return t;{const i=e.pai;return i?void 0:this.getProximoIrmaoRecursivo(i)}}static getRotuloPais(e){const t=new De;let i;for(;e&&!K(e);)i=e.pai,t.append(i.pronomePossessivoSingular),t.append(i.getNumeracaoComRotuloParaComandoEmenda()),e=i;return t.toString()}static getDispositivosNaAlteracaoParaComando(e){const t=new Array;Bo(e,r=>{r.situacao.descricaoSituacao!==U.DISPOSITIVO_ORIGINAL&&t.push(r)});const i=new Array;return t.forEach(r=>{const n=se.getDispositivoAfetadoEmAlteracao(r);n&&!i.includes(n)&&i.push(n)}),i.sort(Oo.compare),i}static isOmissisAdjacenteADispositivoDeEmenda(e){if(!Le(e))return!1;const t=se.getDispositivoAnteriorDireto(e);return t&&t.situacao.descricaoSituacao!==U.DISPOSITIVO_ORIGINAL?!0:!(!se.getDispositivoPosteriorDireto(e)||t.situacao.descricaoSituacao===U.DISPOSITIVO_ORIGINAL)}static isMesmoTipoParaComandoEmenda(e,t){return e.tipo===t.tipo&&(!K(e)||se.isAlteracaoIntegral(e)===se.isAlteracaoIntegral(t))}static trataTextoParaCitacao(e){return(K(e)?e.caput.texto:e.texto).replace(/”( *(?:\(NR\)) *)?/,"\u2019$1 ").replace(/^\s*<p>\s*/i,"").replace(/\s*<\/p>\s*$/i,"")}}class Qf{constructor(e,t=new Array){this.dispositivo=e,this.filhos=t}}class Wf{constructor(){this.emAlteracao=!1,this.abrirAspasSimples=!1}getTexto(e){let t=se.getArvoreDispositivos(e);const i=new De,r=t[0],n=r.dispositivo;t=r.filhos;const s=new Ge("p").add("\u201C").add(new Ge("Rotulo").add(n.rotulo)).add(this.getTextoDoDispositivoOuOmissis(n));return i.append(s.toString()),t.length&&(this.ultimoProcessado=n,this.writeDispositivoTo(i,t)),this.writeOmissisFinal(i,n),i.toString().replace(/(<\/p>(?:<\/Alteracao>)?)$/,"\u201D$1")}getTextoDoDispositivoOuOmissis(e){return e.situacao.descricaoSituacao===U.DISPOSITIVO_ADICIONADO||e.situacao.descricaoSituacao===U.DISPOSITIVO_MODIFICADO||Ce(e)?se.trataTextoParaCitacao(e):e.situacao.descricaoSituacao===U.DISPOSITIVO_SUPRIMIDO?"(Suprimido)":new Ge("Omissis")}writeDispositivoTo(e,t){t.forEach(i=>{var r;const n=i.dispositivo;if(Ve(n))return e.append("<Alteracao>"),this.emAlteracao=!0,this.abrirAspasSimples=!0,this.ultimoProcessado=n,i.filhos.length&&this.writeDispositivoTo(e,i.filhos),void e.append("</Alteracao>");if(Ce(n))return this.ultimoProcessado=n,void(i.filhos.length&&this.writeDispositivoTo(e,i.filhos));const s=se.getDispositivoAnteriorDireto(n);if(K(this.ultimoProcessado)&&!Ce(n)?Ce(s)||e.append(new Ge("p").add(new Ge("Omissis")).toString()):this.ultimoProcessado===s||this.ultimoProcessado.situacao.descricaoSituacao===U.DISPOSITIVO_SUPRIMIDO&&((p,c)=>{if(!p||!c)return!1;let d=p.pai;for(;d;){if(d===c)return!0;d=d.pai}return!1})(s,this.ultimoProcessado)||e.append(new Ge("p").add(new Ge("Omissis")).toString()),n.situacao.descricaoSituacao!==U.DISPOSITIVO_ORIGINAL||this.hasFilhosPropostos(i.filhos)){const p=K(n)?n.caput:n,c=this.emAlteracao?(r=n.rotulo)===null||r===void 0?void 0:r.replace("\u201C",""):n.rotulo,d=new Ge("p");this.abrirAspasSimples&&(d.add("\u2018"),this.abrirAspasSimples=!1),d.add(new Ge("Rotulo").add(c)).add(this.getTextoDoDispositivoOuOmissis(p)),e.append(d.toString())}else e.append(new Ge("p").add(new Ge("Omissis")).toString());this.ultimoProcessado=n,i.filhos.length&&this.writeDispositivoTo(e,i.filhos)})}writeOmissisFinal(e,t){if(t.situacao.descricaoSituacao===U.DISPOSITIVO_SUPRIMIDO)return;let i=t;for(;i.filhos.length;)i=i.filhos[i.filhos.length-1];i.situacao.descricaoSituacao!==U.DISPOSITIVO_ORIGINAL||qu(i)||e.append(new Ge("p").add(new Ge("Omissis")).toString())}hasFilhosPropostos(e){if(!e.length)return!1;let t=!1;for(const i of e){if(i.dispositivo.situacao.descricaoSituacao!==U.DISPOSITIVO_ORIGINAL){t=!0;break}if(!t&&i.filhos.length&&(t=this.hasFilhosPropostos(i.filhos),t))break}return t}}class Xf{getTexto(e){const t=new De,i=Ce(e)?e.pai.rotulo:e.rotulo,r=new Ge("Rotulo").add(i==null?void 0:i.trim()),n=new Ge("p").add("\u201C").add(r).add(se.trataTextoParaCitacao(e));if(this.necessitaOmissis(e)){const s=new Ge("p").add(new Ge("Omissis")).add("\u201D");t.append(n.toString()),t.append(s.toString())}else n.add("\u201D"),t.append(n.toString());return t.toString()}necessitaOmissis(e){return this.temFilhoNaoSuprimido(e)&&!G(e)}temFilhoNaoSuprimido(e){for(const t of e.filhos)if(t.situacao.descricaoSituacao!==U.DISPOSITIVO_SUPRIMIDO)return!0;return!1}}class Zf{constructor(e){this.articulacao=e}getTexto(){const e=new De,t=this.getDispositivosParaCitacao(),i=t.length,r=t.filter(n=>n.situacao.descricaoSituacao===U.DISPOSITIVO_SUPRIMIDO).length;if(i-r>0){const n=t[0];t.length!==1||K(n)?this.getCitacoesMultiplas(e,t):e.append(new Xf().getTexto(n))}return e.toString()}getDispositivosParaCitacao(){const e=se.getDispositivosNaoOriginais(this.articulacao);e.sort(Oo.compare);const t=new Array;return e.forEach(i=>{Ve(i)?i.pai.situacao.descricaoSituacao===U.DISPOSITIVO_ADICIONADO&&t.push(i):G(i)?t.indexOf(i.pai)>=0&&t.push(i):qu(i)||t.push(i)}),t}getCitacoesMultiplas(e,t){let i,r,n=new Array;t.forEach(s=>{i=!K(s)&&!de(s)||G(s)?wu(s):s,i!==r&&(n.length&&this.getCitacaoMultipla(e,n),n=[],n.push(i),r=i),n.indexOf(s)<0&&n.push(s)}),n.length&&this.getCitacaoMultipla(e,n)}getCitacaoMultipla(e,t){e.append(new Wf().getTexto(t))}}const Xu=(o,e)=>{o.splice(o.indexOf(e),1)};class _t{constructor(e){this.dispositivos=[],e&&this.add(e)}isSituacao(e){return!!this.dispositivos.length&&this.dispositivos[0].situacao.descricaoSituacao===e}isTipo(e){return!!this.dispositivos.length&&this.dispositivos[0].tipo===e}add(e){return!!this.podeAdicionarAoRange(e)&&(this.dispositivos.push(e),!0)}addInicio(e){this.dispositivos.splice(0,0,e)}isUltimo(e){return this.dispositivos.indexOf(e)===this.dispositivos.length-1}getPrimeiro(){return this.dispositivos[0]}getUltimo(){return this.dispositivos[this.dispositivos.length-1]}getQuantidadeDispositivos(){return this.dispositivos.length}getAnterior(e){if(!(e<1))return this.dispositivos[e-1]}getNumeracaoParaComandoEmenda(){let e=this.dispositivos[0].getNumeracaoParaComandoEmenda();return this.dispositivos.length>1&&(e+=" a "+this.getUltimo().getNumeracaoParaComandoEmenda()),e}print(e,t){this.isRotuloNecessario(t)?this.printRotuloInicio(e,t):e.append(this.dispositivos[0].getNumeracaoParaComandoEmenda()),this.printSeparadorProximoDispositivo(e,t),this.printRotuloFimSeExistir(e)}printRotuloFimSeExistir(e){this.dispositivos.length>=2&&e.append(this.dispositivos[this.dispositivos.length-1].getNumeracaoParaComandoEmenda())}printSeparadorProximoDispositivo(e,t){const i=this.getRangeDispositivosPosterior(t);this.dispositivos.length>=3?e.append(" a "):this.dispositivos.length!==2||i?this.dispositivos.length>1&&this.dispositivos.length<3&&i&&e.append(", "):e.append(" e ")}printRotuloInicio(e,t){const i=this.getRangeDispositivosPosterior(t);this.hasApenasUmDispositivo()&&!i||i&&!this.isMesmoTipoSituacao(i)?e.append(this.getRotuloCompletoSingular(this.dispositivos[0])):e.append(this.getRotuloCompletoPlural(this.dispositivos[0]))}isMesmoTipoSituacao(e){return e.isTipo(this.dispositivos[0].tipo)&&e.isSituacao(this.dispositivos[0].situacao.descricaoSituacao)}hasApenasUmDispositivo(){return this.dispositivos.length===1}isRotuloNecessario(e){const t=this.getRangeDispositivosAnterior(e);return!t||!t.isMesmoTipoSituacao(this)||!(!this.isSituacao(U.DISPOSITIVO_ADICIONADO)||this.isMesmoPai(t))}isMesmoPai(e){return this.getPrimeiro().pai===e.getPrimeiro().pai}getRotuloCompletoSingular(e){const t=new De;e.situacao.descricaoSituacao!==U.DISPOSITIVO_ADICIONADO?t.append(e.artigoDefinidoSingular):t.append(" ");const i=e.getNumeracaoComRotuloParaComandoEmenda();return i.endsWith(".")?t.append(i.substring(0,i.indexOf("."))):t.append(i),t.toString()}getRotuloCompletoPlural(e){const t=new De;return e.situacao.descricaoSituacao!==U.DISPOSITIVO_ADICIONADO?t.append(e.artigoDefinidoPlural):t.append(" "),t.append(this.getTipoDispositivoPlural(e)),t.append(" "),t.append(e.getNumeracaoParaComandoEmenda()),t.toString()}getRangeDispositivosAnterior(e){const t=e.indexOf(this);if(t>0)return e[t-1]}getRangeDispositivosPosterior(e){if(e.length===1)return;const t=e.indexOf(this);return t>=0&&t<e.length-1?e[t+1]:void 0}getTipoDispositivoPlural(e){var t;return e.tipo===D.artigo.tipo?"arts.":e.tipo===D.paragrafo.tipo?"\xA7\xA7":((t=e.descricaoPlural)===null||t===void 0?void 0:t.toLocaleLowerCase())+""}podeAdicionarAoRange(e){if(this.isVazio())return!0;const t=this.getUltimo();return t.tipo===e.tipo&&t.situacao.descricaoSituacao===e.situacao.descricaoSituacao&&!(!K(e)&&e.pai!==t.pai)&&(i=>{const r=Je(i),n=r.indexOf(i);return n<r.length-1?r[n+1]:void 0})(t)===e&&se.isAlteracaoIntegral(t)===se.isAlteracaoIntegral(e)}isVazio(){return this.dispositivos.length===0}toString(){const e=new De;return this.dispositivos.forEach(t=>{e.append(" "),e.append(""+t.rotulo)}),e.toString()}getDispositivos(){return this.dispositivos}getDispositivo(e){return this.dispositivos[e]}}class Ho{constructor(){this.ranges=new Array,this.localizarArtigoEmAgrupador=!1,this.informarCaputDoDispositivo=!1}isVazio(){return this.ranges.length===0}add(e){this.ranges.push(e)}addInicio(e){this.ranges.unshift(e)}getQuantidadeRanges(){return this.ranges.length}getPrimeiroRange(){return this.ranges[0]}getPrimeiroDispositivo(){return this.ranges[0].getPrimeiro()}getUltimoDispositivo(){return this.ranges[this.ranges.length-1].getUltimo()}getRanges(){return this.ranges}setRanges(e){this.ranges=e}getRange(e){return this.ranges[e]}getTextoListaDeDispositivos(){const e=new De,t=this.ranges.length;let i=1;for(const r of this.ranges)i>1&&(i===t?e.append(" e "):e.append(", ")),e.append(r.getNumeracaoParaComandoEmenda()),i++;return e.toString()}static debug(e){const t=new De;for(const i of e)t.append("seq: "+i);console.log(t)}toString(){return this.ranges.toString()}remove(e){Xu(this.ranges,e)}}class Dt{getSequencias(e){const t=this.getRanges(e);return this.agrupaRanges(t)}getRanges(e){let t=new Array,i=new _t;for(const r of e)i.add(r)||(t.push(i),i=new _t,i.add(r));return i.isVazio()||t.push(i),t=Dt.separaRangesDeDoisDispositivos(t),t}static separaRangesDeDoisDispositivos(e){const t=new Array;for(const i of e)i.getQuantidadeDispositivos()===2?(t.push(new _t(i.getPrimeiro())),t.push(new _t(i.getUltimo()))):t.push(i);return t}separaRangesDeDoisDispositivosEmSequencias(e){for(const t of e)t.setRanges(Dt.separaRangesDeDoisDispositivos(t.getRanges()))}agrupaRanges(e){const t=new Array;let i=new Ho;for(const r of e)i.isVazio()?(i.add(r),t.push(i)):this.isMesmaSequencia(i,r)?i.add(r):(i=new Ho,i.add(r),t.push(i));return t}isMesmaSequencia(e,t){const i=e.getPrimeiroDispositivo(),r=t.getUltimo();return se.isMesmoTipoParaComandoEmenda(i,r)&&i.situacao.descricaoSituacao===r.situacao.descricaoSituacao&&(i.tipo===D.artigo.tipo||i.pai===r.pai)&&i.tipo!==D.omissis.tipo}separaDispositivosSeguidosDeOmissis(e){const t=new Array;for(const i of e)t.push(...this.separaDispositivosSeguidosDeOmissis2(i));return t}separaDispositivosSeguidosDeOmissis2(e){const t=new Array;let i=new Ho;t.push(i);let r=new _t;i.add(r);for(const n of e.getRanges()){r.getQuantidadeDispositivos()>0&&(r=new _t,i.add(r));for(const s of n.getDispositivos()){const p=Pr(s);p&&p.tipo===D.omissis.tipo?(this.adicionaouDispositivos(i,r)&&(r.getQuantidadeDispositivos()===0&&i.remove(r),i=new Ho,t.push(i),r=new _t,i.add(r)),i.informarCaputDoDispositivo=!0,r.add(s),i=new Ho,t.push(i),r=new _t,i.add(r)):r.add(s)}}return r.getQuantidadeDispositivos()===0&&i.remove(r),i.getQuantidadeRanges()===0&&Xu(t,i),this.separaRangesDeDoisDispositivosEmSequencias(t),t}adicionaouDispositivos(e,t){return e.getQuantidadeRanges()>1||t.getQuantidadeDispositivos()>0}}class jo{constructor(e){this.dispositivos=e}static compare(e,t){var i,r;return!((i=e.dispositivos)===null||i===void 0)&&i.length?!((r=t.dispositivos)===null||r===void 0)&&r.length?Oo.compare(e.dispositivos[0],t.dispositivos[0]):-1:1}}var oo;(function(o){o[o.NENHUM=0]="NENHUM",o[o.DEFINIDO=1]="DEFINIDO",o[o.DEFINIDO_COM_PREPOSICAO_A=2]="DEFINIDO_COM_PREPOSICAO_A"})(oo||(oo={}));class Rt{constructor(){this.artigoAntesDispositivo=oo.NENHUM}getTexto(e){const t=new De,i=e.length;let r=1;for(const n of e)r>1&&(r===i?t.append(" e "):t.append(", ")),n.informarCaputDoDispositivo?t.append(this.getReferenciaCaputDoDispositivo(n)):t.append(this.getTextoArtigoAntesSequencia(n)),t.append(this.getRotuloTipoDispositivo(n)),t.append(" "),t.append(n.getTextoListaDeDispositivos()),t.append(this.getRotuloPaisSequencia(n)),r++;return t.toString()}getReferenciaCaputDoDispositivo(e){const t=new De,i=e.getPrimeiroDispositivo();if(i.tipo===D.caput.tipo)return this.getTextoArtigoAntesSequencia(e);const r=se.isSequenciaPlural(e);return t.append(this.getTextoArtigoAntesDispositivo(this.artigoAntesDispositivo,Nu,r)),t.append(" caput "),e.getRange(0).getQuantidadeDispositivos()===1?t.append(i.pronomePossessivoSingular):t.append(i.pronomePossessivoPlural),t.toString()}getTextoArtigoAntesSequencia(e){const t=e.getPrimeiroDispositivo(),i=se.isSequenciaPlural(e);return this.getTextoArtigoAntesDispositivo(this.artigoAntesDispositivo,t,i)}getTextoArtigoAntesDispositivo(e,t,i){switch(e){case oo.DEFINIDO:return i?t.artigoDefinidoPlural:t.artigoDefinidoSingular;case oo.DEFINIDO_COM_PREPOSICAO_A:return i?t.artigoDefinidoPrecedidoPreposicaoAPlural:t.artigoDefinidoPrecedidoPreposicaoASingular;default:return""}}getRotuloTipoDispositivo(e){const t=e.getPrimeiroDispositivo();return Rt.getRotuloTipoDispositivo(t,se.isSequenciaPlural(e))}static getRotuloTipoDispositivo(e,t){return e.getNumeracaoParaComandoEmenda().indexOf("\xFAnico")>=0?"":t?K(e)?"arts.":fe(e)?"\xA7\xA7":String(e.descricaoPlural).toLocaleLowerCase():K(e)?e.situacao.descricaoSituacao!==U.DISPOSITIVO_MODIFICADO||se.isAlteracaoIntegral(e)?"art.":"caput do art.":fe(e)?"\xA7":String(e.descricao).toLowerCase()}getRotuloPaisSequencia(e){const t=e.getPrimeiroDispositivo(),i=e.localizarArtigoEmAgrupador;return this.getRotuloPais(t,i)}getRotuloPais(e,t){var i;const r=new De;let n;for(;!Jo(e);){if(n=e.pai,n&&Ve(n)){if(e.tipo===D.omissis.tipo){const s=se.getDispositivoAnteriorDireto(e);if(s.tipo!==D.alteracao.tipo)return r.append("ap\xF3s "),r.append(s.artigoDefinidoSingular),r.append(s.getNumeracaoComRotuloParaComandoEmenda()),r.append(this.getRotuloPais(s,t)),r.toString()}break}if(n&&!Jo(n)&&(!de(n)||K(e)&&t)){const s=G(e),p=!s&&e.situacao.descricaoSituacao===U.DISPOSITIVO_ADICIONADO,c=s&&!se.isTextoOmitido(e)&&e.situacao.descricaoSituacao===U.DISPOSITIVO_ADICIONADO;if(p||c)r.append(n.artigoDefinidoPrecedidoPreposicaoASingular);else if(Le(e)){const d=se.getDispositivoAnteriorDireto(e),u=se.getDispositivoPosteriorDireto(e);if(d===n&&u&&u.pai===n){const a=u.pronomePossessivoSingular+" "+((i=u.descricao)===null||i===void 0?void 0:i.toLowerCase())+" "+u.getNumeracaoParaComandoEmenda();r.append("antes "+a),r.append(n.pronomePossessivoSingular)}else if(!Ee(d)||!d.pai)return r.append("ap\xF3s "),r.append(d.artigoDefinidoSingular),r.append(d.getNumeracaoComRotuloParaComandoEmenda()),r.append(this.getRotuloPais(d,t)),r.toString()}else r.append(n.pronomePossessivoSingular);r.append(n.getNumeracaoComRotuloParaComandoEmenda())}else if(K(e)&&Jo(n)&&t){const s=se.getProximoAgrupador(e);s&&(r.append(" antes "),r.append(s.pronomePossessivoSingular),r.append(s.getNumeracaoComRotuloParaComandoEmenda()))}if(!n)break;e=n}return r.toString()}setArtigoAntesDispositivo(e){this.artigoAntesDispositivo=e}}class Yf extends jo{constructor(e,t){super(e),this.dispositivos=e,this.generoNormaAlterada=t}getTexto(e,t,i){const r=new De,n=new Dt().getSequencias(this.dispositivos);t||r.append(i?"; e ":"; "),r.append("acrescentar ");const s=new Rt;if(r.append(s.getTexto(n)),i){const p=n[n.length-1];r.append(" "),K(p.getPrimeiroDispositivo())?r.append(this.generoNormaAlterada.artigoDefinidoPrecedidoPreposicaoASingular):r.append(this.generoNormaAlterada.pronomePossessivoSingular),r.append(" ")}return ao(r.toString())}}class Jf extends jo{constructor(e,t){super(e),this.dispositivos=e,this.generoNormaAlterada=t}getTexto(e,t,i){const r=new De,n=new Dt,s=n.separaDispositivosSeguidosDeOmissis(n.getSequencias(this.dispositivos));t||r.append(i?"; e ":"; "),r.append("modificar ");const p=new Rt;return p.setArtigoAntesDispositivo(oo.DEFINIDO),r.append(p.getTexto(s)),i&&(r.append(" "),r.append(this.generoNormaAlterada.pronomePossessivoSingular),r.append(" ")),ao(r.toString())}}class em extends jo{constructor(e,t,i,r){super(e),this.dispositivos=e,this.alteracao=t,this.urnNormaAlterada=i,this.generoNormaAlterada=r}getTexto(e,t,i){const r=new De,n=new Dt().getSequencias(this.dispositivos),s=se.isSequenciasPlural(n);t&&i?(r.append(s?"Suprimam-se ":"Suprima-se "),this.escreveDispositivoAlterado(r,this.alteracao.pai),r.append(" "),r.append(e.genero.pronomePossessivoSingular),r.append(" "),r.append(e.nome),r.append(" ")):(t||r.append(i?"; e ":"; "),r.append("suprimir "));const p=new Rt;return p.setArtigoAntesDispositivo(oo.DEFINIDO),r.append(p.getTexto(n)),i&&(r.append(" "),r.append(this.generoNormaAlterada.pronomePossessivoSingular),r.append(" "),t&&(r.append(mn(this.urnNormaAlterada)),r.append("."))),ao(r.toString())}escreveDispositivoAlterado(e,t){e.append(t.pronomePossessivoSingular),e.append(Rt.getRotuloTipoDispositivo(t,!1)),e.append(" "),e.append(t.getNumeracaoParaComandoEmenda()),e.append(se.getRotuloPais(t))}}class jl{static getAlteracao(e){let t=e;if(t.tipo===D.alteracao.tipo)return t;if(G(t)){for(;t&&t.tipo!==D.alteracao.tipo;)t=t.pai;return t}}static existeNaNormaAlterada(e){return e.situacao.existeNaNormaAlterada}}class tm{constructor(e){this.alteracao=e}getTexto(e){const t=new De,i=se.getDispositivosNaAlteracaoParaComando(this.alteracao),r=this.alteracao.base;if(!r)return"N\xE3o foi poss\xEDvel gerar o comando de emenda porque a norma alterada n\xE3o foi informada.";const n=(h=>{const f=ci(h);return ua(f.genero)})(r);let s=!1;const p=new Array,c=i.filter(h=>h.situacao.descricaoSituacao===U.DISPOSITIVO_SUPRIMIDO);c.length&&p.push(new em(c,this.alteracao,r,n));const d=i.filter(h=>h.situacao.descricaoSituacao===U.DISPOSITIVO_MODIFICADO||h.situacao.descricaoSituacao===U.DISPOSITIVO_ADICIONADO&&jl.existeNaNormaAlterada(h));d.length&&(p.push(new Jf(d,n)),s=!0);const u=i.filter(h=>h.situacao.descricaoSituacao===U.DISPOSITIVO_ADICIONADO&&(!jl.existeNaNormaAlterada(h)||Le(h)));u.length&&(p.push(new Yf(u,n)),s=!0),p.sort(jo.compare),s&&(t.append("Altere-se "),this.escreveDispositivoAlterado(t,this.alteracao.pai),t.append(" "),t.append(e.genero.pronomePossessivoSingular),t.append(" "),t.append(e.nome),t.append(" para "));let a=0;const l=p.length-1;return p.forEach(h=>{t.append(h.getTexto(e,a===0,a===l)),a++}),s&&(this.escreveLei(t,r),this.temCitacao(d,u)?t.append(", nos termos a seguir:"):t.append(".")),ao(t.toString())}temCitacao(e,t){return!!e.length||!!t.find(i=>!Le(i))}escreveDispositivoAlterado(e,t){e.append(t.artigoDefinidoSingular),e.append(Rt.getRotuloTipoDispositivo(t,!1)),e.append(" "),e.append(t.getNumeracaoParaComandoEmenda()),e.append(se.getRotuloPais(t))}escreveLei(e,t){e.append(mn(t))}}class om extends jo{constructor(e){super(e),this.dispositivos=e}getTexto(e,t,i){const r=new De;let n=new Dt().getSequencias(this.dispositivos);n=this.trataLocalizacaoArtigoEmAgrupador(n);const s=se.isSequenciasPlural(n);t?r.append(s?"Acrescentem-se ":"Acrescente-se "):(r.append(i?"; e ":"; "),r.append(s?"acrescentem-se ":"acrescente-se "));const p=new Rt;if(r.append(p.getTexto(n)),i){const c=n[n.length-1];!K(c.getPrimeiroDispositivo())||c.localizarArtigoEmAgrupador?r.append(e.genero.pronomePossessivoSingular):r.append(e.genero.artigoDefinidoPrecedidoPreposicaoASingular),r.append(e.nome),r.append(t?", com a seguinte reda\xE7\xE3o:":", nos termos a seguir:")}return ao(r.toString())}trataLocalizacaoArtigoEmAgrupador(e){const t=new Array;for(const i of e)K(i.getPrimeiroDispositivo())?t.push(...this.trataLocalizacaoArtigoAgrupadorSequencia(i)):t.push(i);return t}trataLocalizacaoArtigoAgrupadorSequencia(e){const t=new Array,i=new Array;for(const c of e.getRanges())i.push(...c.getDispositivos());let r=!1;for(const c of i)if(this.isInclusaoArtigoProximoAgrupador(c)){r=!0;break}if(!r)return t.push(e),t;let n=new Ho;n.localizarArtigoEmAgrupador=!0,t.push(n);let s,p=new _t;n.add(p);for(const c of i)p.isVazio()||(c.pai!==s.pai?(n=new Ho,n.localizarArtigoEmAgrupador=!0,t.push(n),p=new _t,n.add(p)):se.getDispositivoIrmaoPosterior(s)!==c&&(p=new _t,n.add(p))),p.add(c),s=c;for(const c of t)c.setRanges(Dt.separaRangesDeDoisDispositivos(c.getRanges()));return t}isInclusaoArtigoProximoAgrupador(e){return this.isInclusaoArtigoInicioAgrupador(e)||this.isInclusaoArtigoAntesAgrupador(e)}isInclusaoArtigoInicioAgrupador(e){const t=e.pai;return!(Jo(t)||!de(t))&&t.filhos.indexOf(e)===0}isInclusaoArtigoAntesAgrupador(e){const t=e.pai,i=se.getDispositivoIrmaoPosterior(e);return!!i&&t!==i.pai}}class im{constructor(e){this.dispositivos=e}getTexto(e){if(!this.dispositivos.length)return"";let t;const i=e.genero.contracaoEmArtigoDefinidoSingular+" "+e.nome;return t=this.dispositivos.length>1?"Acrescentem-se, onde couber, "+i+" os seguintes artigos:":"Acrescente-se, onde couber, "+i+" o seguinte artigo:",ao(t)}}class rm extends jo{constructor(e){super(e),this.dispositivos=e}getTexto(e,t,i){const r=new De,n=new Dt().getSequencias(this.dispositivos);t?(r.append("D\xEA-se "),i||r.append("nova reda\xE7\xE3o ")):(r.append(i?"; e ":"; "),r.append("d\xEA-se nova reda\xE7\xE3o "));const s=new Rt;return s.setArtigoAntesDispositivo(oo.DEFINIDO_COM_PREPOSICAO_A),r.append(s.getTexto(n)),i&&(r.append(" "+e.genero.pronomePossessivoSingular+" "+e.nome),r.append(t?" a seguinte reda\xE7\xE3o:":", nos termos a seguir:")),ao(r.toString())}}class nm extends jo{constructor(e){super(e),this.dispositivos=e}getTexto(e,t,i){const r=new De,n=new Dt().getSequencias(this.dispositivos),s=se.isSequenciasPlural(n);t?r.append(s?"Suprimam-se ":"Suprima-se "):(r.append(i?"; e ":"; "),r.append(s?"suprimam-se ":"suprima-se "));const p=new Rt;return p.setArtigoAntesDispositivo(oo.DEFINIDO),r.append(p.getTexto(n)),i&&(r.append(" "+e.genero.pronomePossessivoSingular+" "+e.nome),r.append(t?".":", nos termos a seguir:")),ao(r.toString())}}class sm{constructor(e){this.dispositivosEmenda=e}getTexto(e){let t="";const i=se.getDispositivosComando(this.dispositivosEmenda),r=i.filter(a=>a.situacao instanceof ei&&a.situacao.tipoEmenda===vt.EMENDA_ARTIGO_ONDE_COUBER);if(r.length){if(r.length<i.length)throw new Error("Adi\xE7\xE3o de artigos onde couber e outras altera\xE7\xF5es na mesma emenda.");return new im(r).getTexto(e)}const n=[],s=i.filter(a=>a.situacao.descricaoSituacao===U.DISPOSITIVO_SUPRIMIDO);s.length&&n.push(new nm(s));const p=i.filter(a=>a.situacao.descricaoSituacao===U.DISPOSITIVO_MODIFICADO);p.length&&n.push(new rm(p));const c=i.filter(a=>a.situacao.descricaoSituacao===U.DISPOSITIVO_ADICIONADO);c.length&&n.push(new om(c)),n.sort(jo.compare);let d=0;const u=n.length-1;return n.forEach(a=>{t+=a.getTexto(e,d===0,d===u),d++}),t}}class am{constructor(e,t){this.urn=e,this.articulacao=t}getComandoEmenda(){const e=new Wu,t=se.getDispositivosNaoOriginais(this.articulacao),i=this.getDispositivosRepresentativosDeCadaComando(t);if(i.sort(Oo.compare),!i.length)return e;const r=(n=>{const s=ci(n);let p=ua(s.genero),c="Projeto";return p===ku&&(c=s.urn.startsWith("medida.provisoria")?"Medida Provis\xF3ria":"Proposta"),new Ch(c,p)})(this.urn);return i.forEach(n=>{let s,p;Ee(n)?(s=new tm(n).getTexto(r),p=""):(s=new sm(t).getTexto(r),p=new Zf(this.articulacao).getTexto()),e.comandos.push(new Gf(s,p))}),e}getDispositivosRepresentativosDeCadaComando(e){const t=[];let i=!1;return e.forEach(r=>{const n=Ie(r);n&&n.pai&&n.situacao.descricaoSituacao!==U.DISPOSITIVO_SUPRIMIDO?t.indexOf(n)===-1&&n.pai.situacao.descricaoSituacao!==U.DISPOSITIVO_ADICIONADO&&t.push(n):i||(i=!0,t.push(r))}),t}}class lm{constructor(e,t,i){this.tipoEmenda=e,this.urn=t,this.articulacao=i}getDispositivosEmenda(){const e=new Ku;return this.preencheDispositivos(e),e}preencheDispositivos(e){const t=se.getDispositivosNaoOriginais(this.articulacao),i=t.filter(s=>s.situacao.descricaoSituacao===U.DISPOSITIVO_SUPRIMIDO);if(i.length)for(const s of i){const p=new Vf;p.tipo=this.getTipoDispositivoParaEmenda(s),p.id=s.id,p.rotulo=s.rotulo,e.dispositivosSuprimidos.push(p)}const r=t.filter(s=>s.situacao.descricaoSituacao===U.DISPOSITIVO_MODIFICADO);if(r.length)for(const s of r){const p=new Qu;if(K(s)){const c=s.caput;p.tipo=this.getTipoDispositivoParaEmenda(c),p.id=c.id,p.texto=c.texto}else p.tipo=this.getTipoDispositivoParaEmenda(s),p.id=s.id,p.texto=s.texto;p.rotulo=s.rotulo,s.isDispositivoAlteracao&&this.preencheAtributosAlteracao(s,p),e.dispositivosModificados.push(p)}const n=t.filter(s=>s.situacao.descricaoSituacao===U.DISPOSITIVO_ADICIONADO);if(n.length)for(const s of n){const p=this.criaDispositivoEmendaAdicionado(s);if(e.dispositivosAdicionados.push(p),K(s)){const c=this.criaDispositivoEmendaAdicionado(s.caput);e.dispositivosAdicionados.push(c)}}}criaDispositivoEmendaAdicionado(e){var t,i,r;const n=new Kf;if(n.tipo=this.getTipoDispositivoParaEmenda(e),e.id||(e.id=So(e)),n.id=e.id,Ce(e)||Ve(e)||Le(e)||(n.rotulo=e.rotulo),K(e)||Ve(e)||(n.texto=e.texto),Ce(e)||Ve(e))n.idPai=(t=e.pai)===null||t===void 0?void 0:t.id;else{const s=se.getFilhosEstiloLexML(e.pai);e!==s[0]?n.idIrmaoAnterior=s[s.indexOf(e)-1].id:Jo(e.pai)||(n.idPai=(i=e.pai)===null||i===void 0?void 0:i.id)}if(Ve(e)){const s=e.base;s&&(n.urnNormaAlterada=s)}else e.isDispositivoAlteracao&&(n.existeNaNormaAlterada=(r=e.situacao)===null||r===void 0?void 0:r.existeNaNormaAlterada,this.preencheAtributosAlteracao(e,n));return n}getTipoDispositivoParaEmenda(e){return Ee(e)?"Alteracao":e.tipo}preencheAtributosAlteracao(e,t){if(!Le(e)&&t.texto&&t.texto.indexOf(bt)>=0&&(t.textoOmitido=!0),t.rotulo&&t.rotulo.indexOf("\u201C")>=0&&(t.abreAspas=!0,t.rotulo=t.rotulo.replace("\u201C","")),t.texto){const i=ao(t.texto.replace(/(<([^>]+)>)/gi,"").trim()),r=/”(?: (\(NR\)|\(AC\)))?$/.exec(i);if(r){const n=r[0];t.fechaAspas=!0,r.length===2&&(t.notaAlteracao=r[1]),t.texto=t.texto.replace(new RegExp(Ii(n)),"")}}}}const Pn=(o,e)=>{var t;let i;if(i=de(o)?e.lXhier=[]:e.lXcontainersOmissis=[],K(o)){const r=ba(o.caput);cm(o,r.value),i.push(r),Ml((t=o.filhos)===null||t===void 0?void 0:t.filter(n=>!Ce(n.pai)),i),Pn(o.caput,r.value)}else Ml(o.filhos,i);return i},cm=(o,e)=>{var t,i,r;o.hasAlteracao()&&(e.alteracao={TYPE_NAME:"br_gov_lexml__1.Alteracao",base:"",id:"",content:[]},e.alteracao.base=(i=(t=o.alteracoes)===null||t===void 0?void 0:t.base)!==null&&i!==void 0?i:"",e.alteracao.id=(n=>{const s=[];return vn(n,s),s.join("_")+"_alt1"})(o.caput),(r=o.alteracoes.filhos)===null||r===void 0||r.forEach(n=>{const s=ba(n);e.alteracao.content.push(s),Pn(n,s.value)}))},Ml=(o,e)=>{o==null||o.forEach(t=>{const i=ba(t);e.push(i),Pn(t,i.value)})},ba=o=>{const e={name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:o.tipo,prefix:"",key:`{http://www.lexml.gov.br/1.0}${o.tipo}`,string:`{http://www.lexml.gov.br/1.0}${o.tipo}`},value:{TYPE_NAME:"br_gov_lexml__1.DispositivoType"}};return um(o,e.value),e},um=(o,e)=>{e.href=Ce(o)?fr(o.pai)+"_"+fr(o):fr(o),e.id=So(o),o.rotulo&&/^["”“].*/.test(o.rotulo)?(e.abreAspas="s",e.rotulo=o.rotulo.substring(1)):Ce(o)||Le(o)||(e.rotulo=o.rotulo),Ce(o)&&/”.*(NR)/.test(o.texto)&&(e.fechaAspas="s",e.notaAlteracao="NR"),de(o)?e.nomeAgrupador={TYPE_NAME:"br_gov_lexml__1.GenInline",content:$l(o)}:K(o)||(o.texto===bt?e.textoOmitido="s":e.p=[{TYPE_NAME:"br_gov_lexml__1.GenInline",content:$l(o)}])},$l=o=>{const e=/<a[^>]+href="(.*?)"[^>]*>(.*?)<\/a>/gi,t=[],i=o.texto.match(e);if(i)o.texto.startsWith(i[0])||t.push(o.texto.substring(0,o.texto.indexOf(i[0])));else{const r=o.texto.indexOf("\u201D (NR)");t.push(o.texto.substring(0,r===-1?void 0:r))}return i==null||i.forEach((r,n)=>{var s,p;const c=r.match(e)?r:"";t.push(dm(c!=null?c:""));const d=((s=o.texto)===null||s===void 0?void 0:s.indexOf(r))+r.length;if(d<o.texto.length-1){const u=i[n+1]?o.texto.indexOf(i[n+1]):o.texto.length;t.push((p=o.texto.substring(d,u))===null||p===void 0?void 0:p.replace(/strong>/gi,"b>").replace(/em>/gi,"i>"))}}),t},dm=o=>{var e;const t=o.match(/href="(.*?)"*>/i),i=t&&t[1]?t[1]:"",r=o.match(/<a[^>]+href=".*?"[^>]*>(.*?)<\/a>/);return{name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:"span",prefix:"",key:"{http://www.lexml.gov.br/1.0}span",string:"{http://www.lexml.gov.br/1.0}span"},value:{TYPE_NAME:"br_gov_lexml__1.GenInline",href:i,content:r&&r[1]?[(e=r[1])===null||e===void 0?void 0:e.trim()]:[""]}}};let ya=!1;const Ul=(o,e=!1)=>{var t,i;if(ya=e,!(!((t=o==null?void 0:o.value)===null||t===void 0)&&t.projetoNorma))throw new Error("N\xE3o se trata de um documento lexml v\xE1lido");return Be(Be(Be({classificacao:!((i=o.value)===null||i===void 0)&&i.projetoNorma.norma?vt.NORMA:vt.PROJETO,tipo:ci(Cn(o))},pm(o)),hm(o)),fm(o.value.projetoNorma.norma?o.value.projetoNorma.norma:o.value.projetoNorma.projeto))},gr=o=>o==null?void 0:o.replace(/[\n]/g,"").trim(),Cn=o=>{var e,t,i;return(i=(t=(e=o==null?void 0:o.value)===null||e===void 0?void 0:e.metadado)===null||t===void 0?void 0:t.identificacao)===null||i===void 0?void 0:i.urn},pm=o=>({urn:Cn(o)}),hm=o=>{var e,t,i,r,n,s,p,c,d,u,a,l,h,f,m,g;const v=(s=(n=(r=(i=(t=(e=o==null?void 0:o.value)===null||e===void 0?void 0:e.projetoNorma)===null||t===void 0?void 0:t.norma)===null||i===void 0?void 0:i.parteInicial)===null||r===void 0?void 0:r.epigrafe)===null||n===void 0?void 0:n.content[0])!==null&&s!==void 0?s:"",y=Ju((u=(d=(c=(p=o==null?void 0:o.value)===null||p===void 0?void 0:p.projetoNorma)===null||c===void 0?void 0:c.norma)===null||d===void 0?void 0:d.parteInicial)===null||u===void 0?void 0:u.ementa.content),b=(g=(m=(f=(h=(l=(a=o==null?void 0:o.value)===null||a===void 0?void 0:a.projetoNorma)===null||l===void 0?void 0:l.norma)===null||h===void 0?void 0:h.parteInicial)===null||f===void 0?void 0:f.preambulo)===null||m===void 0?void 0:m.p[0].content[0])!==null&&g!==void 0?g:"";return{epigrafe:gr(v),ementa:gr(y),preambulo:gr(b)}},fm=o=>({articulacao:mm(o.articulacao)}),mm=o=>{const e=ma();return br(e,o.lXhier),e},br=(o,e)=>{o&&e&&(e==null||e.forEach(t=>{var i,r,n,s,p,c,d,u,a,l,h,f,m,g,v,y;let b;const x=(i=t.value)===null||i===void 0?void 0:i.notaAlteracao,w=((r=t.value)===null||r===void 0?void 0:r.fechaAspas)!==void 0?x?`\u201D (${x})`:"\u201D (NR)":"";((n=t.name)===null||n===void 0?void 0:n.localPart)==="Caput"?(((s=t.value)===null||s===void 0?void 0:s.abreAspas)==="s"?(b.rotulo="\u201C"+((p=t.value)===null||p===void 0?void 0:p.rotulo),b.cabecaAlteracao=!0,b.notaAlteracao=x):!((c=t.value)===null||c===void 0)&&c.rotulo&&(b.rotulo=t.value.rotulo,b.createNumeroFromRotulo(b.rotulo)),o.texto=!((d=t.value)===null||d===void 0)&&d.textoOmitido?bt:gr(Yu(t))+w,o.caput.href=(u=t.value)===null||u===void 0?void 0:u.href,o.caput.id=(a=t.value)===null||a===void 0?void 0:a.id,Fl(o,(l=t.value)===null||l===void 0?void 0:l.alteracao),br(o.caput,(h=t.value)===null||h===void 0?void 0:h.lXcontainersOmissis)):((f=t.name)===null||f===void 0?void 0:f.localPart)==="alteracao"?(Fl(o,t),br(o.caput,(m=t.value)===null||m===void 0?void 0:m.lXcontainersOmissis)):(b=Zu(o,t),br(b,(v=(g=t.value)===null||g===void 0?void 0:g.lXhier)!==null&&v!==void 0?v:(y=t.value)===null||y===void 0?void 0:y.lXcontainersOmissis))}))},Fl=(o,e)=>{var t;e&&(va(o),o.alteracoes.id=e.id,o.alteracoes.base=e.base,ya&&(o.alteracoes.situacao=new no),(t=e.content)===null||t===void 0||t.forEach(i=>{var r,n,s,p;const c=Zu(o.alteracoes,i);c.isDispositivoAlteracao=!0,c.rotulo="\u201C"+((r=i.value)===null||r===void 0?void 0:r.rotulo),br(c,(s=(n=i.value)===null||n===void 0?void 0:n.lXhier)!==null&&s!==void 0?s:(p=i.value)===null||p===void 0?void 0:p.lXcontainersOmissis)}))},Zu=(o,e)=>{var t,i,r,n,s,p,c,d,u;const a=pe(o,(t=e.name)===null||t===void 0?void 0:t.localPart),l=(i=e.value)===null||i===void 0?void 0:i.notaAlteracao,h=((r=e.value)===null||r===void 0?void 0:r.fechaAspas)!==void 0?l?`\u201D (${l})`:"\u201D (NR)":"";return Le(a)||(((n=e.value)===null||n===void 0?void 0:n.abreAspas)==="s"?(a.rotulo="\u201C"+((s=e.value)===null||s===void 0?void 0:s.rotulo),a.cabecaAlteracao=!0,a.notaAlteracao=l):a.rotulo=(p=e.value)===null||p===void 0?void 0:p.rotulo,a.createNumeroFromRotulo(a.rotulo)),a.href=(c=e.value)===null||c===void 0?void 0:c.href,a.id=(d=e.value)===null||d===void 0?void 0:d.id,ya&&(a.situacao=new no,K(a)&&(a.caput.situacao=new no)),a.texto=!((u=e.value)===null||u===void 0)&&u.textoOmitido?bt:gr(Yu(e))+h,a},Yu=o=>{var e,t,i,r,n;let s="";return!((e=o.value)===null||e===void 0)&&e.nomeAgrupador?(t=o.value.nomeAgrupador.content[0])!==null&&t!==void 0?t:"":((n=(r=(i=o.value)===null||i===void 0?void 0:i.p)===null||r===void 0?void 0:r.map(p=>p))===null||n===void 0||n.map(p=>p.content).forEach(p=>s+=Ju(p)),s.replace(/b>/gi,"strong>").replace(/i>/gi,"em>"))},Ju=o=>{let e="";return o==null||o.forEach(t=>{var i;t.value?e+=`<a href="${(i=t.value).href}"> ${i.content[0]} </a>`:e+=t}),e},zl={name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:"LexML",prefix:"",key:"{http://www.lexml.gov.br/1.0}LexML",string:"{http://www.lexml.gov.br/1.0}LexML"},value:{TYPE_NAME:"br_gov_lexml__1.LexML",metadado:{TYPE_NAME:"br_gov_lexml__1.Metadado",identificacao:{TYPE_NAME:"br_gov_lexml__1.Identificacao",urn:""}},projetoNorma:{TYPE_NAME:"br_gov_lexml__1.ProjetoNorma",norma:{TYPE_NAME:"br_gov_lexml__1.HierarchicalStructure",parteInicial:{TYPE_NAME:"br_gov_lexml__1.ParteInicial",epigrafe:{TYPE_NAME:"br_gov_lexml__1.GenInline",id:"epigrafe",content:[""]},ementa:{TYPE_NAME:"br_gov_lexml__1.GenInline",id:"ementa",content:[""]},preambulo:{TYPE_NAME:"br_gov_lexml__1.TextoType",id:"preambulo",p:[{TYPE_NAME:"br_gov_lexml__1.GenInline",content:[""]}]}},articulacao:{TYPE_NAME:"br_gov_lexml__1.Articulacao",lXhier:[{name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:"Artigo",prefix:"",key:"{http://www.lexml.gov.br/1.0}Artigo",string:"{http://www.lexml.gov.br/1.0}Artigo"},value:{TYPE_NAME:"br_gov_lexml__1.DispositivoType",id:"art1",rotulo:"Art. 1\xBA",lXcontainersOmissis:[{name:{namespaceURI:"http://www.lexml.gov.br/1.0",localPart:"Caput",prefix:"",key:"{http://www.lexml.gov.br/1.0}Caput",string:"{http://www.lexml.gov.br/1.0}Caput"},value:{TYPE_NAME:"br_gov_lexml__1.DispositivoType",id:"art1_cpt",p:[{TYPE_NAME:"br_gov_lexml__1.GenInline",content:[""]}]}}]}}]}}}}};let or=class extends _n(he)(rt){constructor(){super(...arguments),this.modo="",this.projetoNorma={}}createRenderRoot(){return this}getDispositivosEmenda(){const o=this.modo;if(o!==vt.EMENDA&&o!==vt.EMENDA_ARTIGO_ONDE_COUBER)return;const e=this.projetoNorma.value.metadado.identificacao.urn,t=he.getState().elementoReducer.articulacao;return new lm(o,e,t).getDispositivosEmenda()}getComandoEmenda(){const o=this.projetoNorma.value.metadado.identificacao.urn,e=he.getState().elementoReducer.articulacao;return new am(o,e).getComandoEmenda()}getProjetoAtualizado(){const o=Be({},this.projetoNorma),e=(t=he.getState().elementoReducer.articulacao,{TYPE_NAME:"br_gov_lexml__1.Articulacao",lXhier:Pn(t,{articulacao:{}})});var t;return o.value.projetoNorma[o.value.projetoNorma.norma?"norma":"projeto"].articulacao.lXhier=e.lXhier,o}update(o){(this.hasChangedProjetoNorma(o)||this.hasChangedModo(o))&&this.loadProjetoNorma(),this.dispositivosEmenda&&this.hasChangedEmenda(o)&&this.loadEmenda(),super.update(o)}hasChangedProjetoNorma(o){return o.has("projetoNorma")&&o.get("projetoNorma")!==void 0}hasChangedModo(o){return o.has("modo")&&o.get("modo")!==void 0}hasChangedEmenda(o){return o.has("dispositivosEmenda")&&o.get("dispositivosEmenda")}loadProjetoNorma(){var o,e,t;let i;if(this.projetoNorma&&this.projetoNorma.value||(this.projetoNorma=zl),this.modo===vt.EMENDA_ARTIGO_ONDE_COUBER){const n=(o=Cn(this.projetoNorma))!==null&&o!==void 0?o:"";i=Ul(zl,!0),i.urn=n;const s=i.articulacao.artigos[0];s.rotulo="Art.",s.numero="1",s.id="art1";const p=new ei;p.tipoEmenda=vt.EMENDA_ARTIGO_ONDE_COUBER,s.situacao=p,!((t=(e=this.dispositivosEmenda)===null||e===void 0?void 0:e.dispositivosAdicionados)===null||t===void 0)&&t.length&&i.articulacao.removeFilho(i.articulacao.filhos[0])}else i=Ul(this.projetoNorma,this.modo===vt.EMENDA);var r;he.dispatch((r=i.articulacao,{type:"ABRIR_ARTICULACAO",classificacao:this.modo,articulacao:r}))}loadEmenda(){this.dispositivosEmenda&&setTimeout(()=>{he.dispatch(yh.execute(this.dispositivosEmenda))},1e3)}render(){return Se`
      <style>
        #gtx-trans {
          display: block;
        }

        lexml-eta-articulacao:focus {
          outline: 0;
          border: 0px solid #f1f1f1;
          -webkit-box-shadow: 0px;
          box-shadow: none;
        }
      </style>

      <lexml-eta-articulacao></lexml-eta-articulacao>
    `}};ce([Qe({type:String})],or.prototype,"modo",void 0),ce([Qe({type:Object})],or.prototype,"projetoNorma",void 0),ce([Qe({type:Object})],or.prototype,"dispositivosEmenda",void 0),or=ce([It("lexml-eta")],or);const vm=En`
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
`,Jr=new class{constructor(){this.identificacao="",this.nome="",this.sexo="M",this.siglaPartido="",this.siglaUF="",this.siglaCasaLegislativa="CD",this.cargo=""}};function Bl(o=200){return function(e,t,i){return{get(){const r=(...n)=>{let s=0;const p=()=>{clearInterval(s),this._isProcessandoValidacao?s=window.setTimeout(()=>p(),o):i.value.apply(this,n)};p()};return Object.defineProperty(this,t,{value:r,configurable:!0,writable:!0}),r}}}}let yt=class extends rt{constructor(){super(...arguments),this._nomesAutocomplete=[],this._podeIncluirParlamentar=!0,this._parlamentaresAutocomplete=[],this._exibirTemplateTipoAutoria=!1,this._timerValidacao=0,this._isProcessandoValidacao=!1,this._isProcessandoMovimentacao=!1,this._lastIndexAutoCompleted=-1}set parlamentares(o){const e=this._parlamentaresAutocomplete;this._parlamentaresAutocomplete=o,this._nomesAutocomplete=o.map(t=>t.nome),this.requestUpdate("parlamentares",e)}get parlamentares(){return this._parlamentaresAutocomplete}set autoria(o){const e=this._autoriaOriginal;this._autoriaOriginal=o,this._autoria=o?Ft(Be({},o),{parlamentares:[...o.parlamentares]}):new ga,this._autoria.parlamentares.length||(this._autoria.parlamentares=[Be({},Jr)]),this._podeIncluirParlamentar=this._isAllAutoresOk(),this.requestUpdate("autoria",e)}get autoria(){return this._autoriaOriginal}getAutoriaAtualizada(){return Ft(Be({},this._autoria),{parlamentares:this._autoria.parlamentares.filter(o=>o.identificacao)})}render(){var o;return Se`
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
    `}_getTipoAutoriaTemplate(){var o,e;return this._exibirTemplateTipoAutoria?Se`
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
        `:Se`<div></div>`}_getParlamentaresTemplate(){var o;return Se`
      <div class="autoria-grid autoria-labels">
        <div class="autoria-grid--col1"><div class="autoria-header">Parlamentar</div></div>
        <div class="autoria-grid--col2"><div class="autoria-header">Cargo</div></div>
        <div class="autoria-grid--col3"><div class="autoria-buttons"></div></div>
      </div>
      ${(o=this._autoria)===null||o===void 0?void 0:o.parlamentares.map((e,t)=>this._getParlamentarAutocompleteTemplate(t))}
    `}_getParlamentarAutocompleteTemplate(o){var e;return Se`
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
    `}_getAssinaturasAdicionaisTemplate(){return Se`
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
    `}updated(){this._isProcessandoMovimentacao=!1}_isAllAutoresOk(){return this._autoria.parlamentares.every(o=>o.identificacao)}_incluirNovoParlamentar(){this._autoria.parlamentares=((o,e)=>{const t=[...o];return t.push(e),t})(this._autoria.parlamentares,Be({},Jr)),this._podeIncluirParlamentar=!1,setTimeout(()=>this._autocompletes[this._autoria.parlamentares.length-1].focus(),200)}_moverParlamentar(o,e){this._autoria.parlamentares=((t,i,r)=>{const n=i+r;if(n<0||n>=t.length)return t;const s=[...t];return s.splice(n,0,s.splice(i,1)[0]),s})(this._autoria.parlamentares,o,e),this.requestUpdate()}_excluirParlamentar(o){this._autoria.parlamentares=((e,t)=>{const i=[...e];return i.splice(t,1),i})(this._autoria.parlamentares,o),this._autoria.parlamentares.length||(this._autoria.parlamentares=[Be({},Jr)]),this._podeIncluirParlamentar=this._isAllAutoresOk(),this.requestUpdate()}_validarNomeParlamentar(o,e){this._isProcessandoValidacao=!0;const t=o.type==="blur";t||clearInterval(this._timerValidacao),this._timerValidacao=window.setTimeout(()=>{var i;const r=this._autocompletes[e],n=this._autoria.parlamentares[e].cargo,s=(i=r.value)!==null&&i!==void 0?i:"",p=new RegExp("^"+s.normalize("NFD").replace(bu,"")+"$","i"),c=this.parlamentares.find(u=>u.nome.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(p))||Ft(Be({},Jr),{nome:t?"":s}),d=!!c.identificacao;c.cargo=t&&!d?"":n,this._autoria.parlamentares[e]=Be({},c),this._podeIncluirParlamentar=d&&this._isAllAutoresOk(),this._isProcessandoValidacao=!1},o.type==="blur"?200:0)}_atualizarParlamentar(o,e){const t=this.parlamentares.find(i=>i.nome===o.detail.value);if(t){const{cargo:i}=this._autoria.parlamentares[e];this._autoria.parlamentares[e]=Ft(Be({},t),{cargo:i})}this._podeIncluirParlamentar=!!t&&this._isAllAutoresOk(),o.target.focus(),this._lastIndexAutoCompleted=e,this.requestUpdate()}_atualizarCargo(o,e){this._autoria.parlamentares[e].cargo=o.target.value}_atualizarQtdAssinaturasAdicionaisSenadores(o){this._autoria.quantidadeAssinaturasAdicionaisSenadores=Number(o.target.value)}_atualizarQtdAssinaturasAdicionaisDeputados(o){this._autoria.quantidadeAssinaturasAdicionaisDeputados=Number(o.target.value)}_atualizarExibirPartidoUF(o){this._autoria.imprimirPartidoUF=o.target.checked}_handleKeyUp(o,e){o.ctrlKey||o.altKey||o.shiftKey?!o.ctrlKey||o.altKey||o.shiftKey||(o.key==="ArrowUp"?this._isProcessandoMovimentacao||(this._isProcessandoMovimentacao=!0,this._moverParlamentar(e,-1),this._focarAutocompleteOuCargo(o.target,e,-1)):o.key==="ArrowDown"&&(this._isProcessandoMovimentacao||(this._isProcessandoMovimentacao=!0,this._moverParlamentar(e,1),this._focarAutocompleteOuCargo(o.target,e,1)))):o.key==="Enter"&&this._podeIncluirParlamentar&&e!==this._lastIndexAutoCompleted?(this._btnNovoParlamentar.click(),this._lastIndexAutoCompleted=-1):["ArrowUp","ArrowDown"].includes(o.key)&&this._autoria.parlamentares[e].identificacao&&this._focarAutocompleteOuCargo(o.target,e,o.key==="ArrowUp"?-1:1)}_focarAutocompleteOuCargo(o,e,t){const i=o.tagName==="LEXML-AUTOCOMPLETE"?this._autocompletes:this._inputCargos,r=e+t;r<0||r>=i.length||setTimeout(()=>i[r].focus(),0)}_handleClickAutoComplete(){window.setTimeout(()=>this._lastIndexAutoCompleted=-1,0)}};yt.styles=[vm],ce([Go("#btnNovoParlamentar")],yt.prototype,"_btnNovoParlamentar",void 0),ce([ul("input#tex-cargo")],yt.prototype,"_inputCargos",void 0),ce([ul("lexml-autocomplete")],yt.prototype,"_autocompletes",void 0),ce([dn()],yt.prototype,"_nomesAutocomplete",void 0),ce([dn()],yt.prototype,"_podeIncluirParlamentar",void 0),ce([Qe({type:Array})],yt.prototype,"parlamentares",null),ce([Qe({type:Object})],yt.prototype,"autoria",null),ce([Bl()],yt.prototype,"_moverParlamentar",null),ce([Bl()],yt.prototype,"_excluirParlamentar",null),yt=ce([It("lexml-autoria")],yt);let gi=class extends rt{constructor(){super(...arguments),this.items=[],this.opened=!1,this.maxSuggestions=10,this._suggestions=[],this._bound={},this._blur=!1,this._mouseEnter=!1}render(){return Se`
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
        ${this._suggestions.map(o=>Se`<li @click=${()=>this.autocomplete(o)}>${o}</li>`)}
      </ul>
    `}get contentElement(){if(this._inputEl)return this._inputEl;if(!this.hasUpdated)return;const o=this.shadowRoot.getElementById("dropdown-input").assignedElements();return this._inputEl=o.length?o[0]:this.shadowRoot.getElementById("defaultInput"),this._inputEl}get value(){return this.contentElement&&this.contentElement.value}set value(o){this.contentElement?this.contentElement.value=o:this._tempValue=o}firstUpdated(){this._suggestionEl=this.shadowRoot.getElementById("suggestions"),this._suggestionEl.style.width=`${this.contentElement.getBoundingClientRect().width}px`,this._bound.onKeyDown=this._handleKeyDown.bind(this),this._bound.onKeyUp=this._handleKeyUp.bind(this),this._bound.onFocus=this._handleFocus.bind(this),this._bound.onBlur=this._handleBlur.bind(this),this.contentElement.addEventListener("keydown",this._bound.onKeyDown),this.contentElement.addEventListener("keyup",this._bound.onKeyUp),this.contentElement.addEventListener("focus",this._bound.onFocus),this.contentElement.addEventListener("blur",this._bound.onBlur),this._tempValue!==void 0&&(this.contentElement.value=this._tempValue)}disconnectedCallback(){this.contentElement&&(this.contentElement.removeEventListener("keydown",this._bound.onKeyDown),this.contentElement.removeEventListener("keyup",this._bound.onKeyUp),this.contentElement.removeEventListener("focus",this._bound.onFocus),this.contentElement.removeEventListener("blur",this._bound.onBlur))}focus(o){this.contentElement&&this.contentElement.focus(o)}updated(o){o.has("opened")&&this.opened&&this._suggestionEl.childElementCount&&(this._highlightedEl=this._suggestionEl.children[0],this._highlightedEl.classList.add("active"))}open(){this._suggestionEl.style.width==="0px"&&(this._suggestionEl.style.width=`${this.contentElement.getBoundingClientRect().width}px`),this._suggestions.length&&(this.opened=!0)}close(){this.opened=!1,this._highlightedEl=null}suggest(o){this._suggestions=o||[],this._suggestions.length>1||this._suggestions.length===1&&this._suggestions[0]!==this.contentElement.value?this.open():this.close(),this.requestUpdate()}autocomplete(o){this.contentElement.value=o,this.close(),this.dispatchEvent(new CustomEvent("autocomplete",{detail:{value:o},composed:!0,bubbles:!0}))}_highlightPrev(){this._highlightedEl&&this._highlightedEl.previousElementSibling&&(this._highlightedEl.classList.remove("active"),this._highlightedEl=this._highlightedEl.previousElementSibling,this._highlightedEl.classList.add("active"))}_highlightNext(){this._highlightedEl&&this._highlightedEl.nextElementSibling&&(this._highlightedEl.classList.remove("active"),this._highlightedEl=this._highlightedEl.nextElementSibling,this._highlightedEl.classList.add("active"))}_handleKeyDown(o){o.key!=="ArrowUp"&&o.key!=="ArrowDown"||(o.preventDefault(),o.stopPropagation())}_handleKeyUp(o){var e,t;switch(o.key){case"ArrowUp":!((e=this._highlightedEl)===null||e===void 0)&&e.previousElementSibling&&(o.preventDefault(),o.stopPropagation(),this._highlightPrev());break;case"ArrowDown":!((t=this._highlightedEl)===null||t===void 0)&&t.nextElementSibling&&(o.preventDefault(),o.stopPropagation(),this._highlightNext());break;case"Enter":this._highlightedEl&&this._highlightedEl.click();break;default:if(this.items.length){const{value:i}=this.contentElement,r=i.normalize("NFD").replace(bu,"");this.suggest(this._findSuggetions(r))}}}_findSuggetions(o,e=this.maxSuggestions){if(!o)return[];let t=this._filterStartWith(o,e);return t.length<this.maxSuggestions&&(t=[...t,...this._filterContains(o,this.maxSuggestions-t.length).filter(i=>!t.includes(i))]),t}_filterStartWith(o,e=this.maxSuggestions){const t=new RegExp("^"+o,"gi");return o&&this.items.filter(i=>i.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(t)).slice(0,e)||[]}_filterContains(o,e=this.maxSuggestions){const t=new RegExp(o,"gi");return o&&this.items.filter(i=>i.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(t)).slice(0,e)||[]}_handleFocus(){this._blur=!1,this._suggestions.length>1&&this.open()}_handleBlur(){this._blur=!0,setTimeout(()=>this.close(),200),this._suggestions=[]}_handleItemMouseEnter(){this._mouseEnter=!0}_handleItemMouseLeave(){this._mouseEnter=!1,this._blur&&setTimeout(()=>this.close(),500)}};ce([Qe({type:Array})],gi.prototype,"items",void 0),ce([Qe({type:Boolean,reflect:!0})],gi.prototype,"opened",void 0),ce([Qe({type:Number})],gi.prototype,"maxSuggestions",void 0),ce([Qe({type:String})],gi.prototype,"value",null),gi=ce([It("lexml-autocomplete")],gi);let bi=class extends rt{render(){return Se`
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
    `}getCurrentDate(){return new Date().toLocaleDateString().split("/").reverse().join("-")}setDate(){this.inputData&&(this.data=this.inputData.value,this.optData.checked=!0)}};bi.styles=En`
    .lexml-data {
      display: block;
      height: 100%;
      /* padding: 5px 10px; */
      /* margin: 0px 5px; */
      font-size: 1em;
      max-width: 700px;
    }
  `,ce([Go("#input-data")],bi.prototype,"inputData",void 0),ce([Go("#opt-data")],bi.prototype,"optData",void 0),ce([Qe({type:String})],bi.prototype,"data",void 0),bi=ce([It("lexml-data")],bi);const gm=Se`
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
`;var as,ls,xa=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wa=Symbol(),Hl=new Map,ed=class{constructor(o,e){if(this._$cssResult$=!0,e!==wa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o}get styleSheet(){let o=Hl.get(this.cssText);return xa&&o===void 0&&(Hl.set(this.cssText,o=new CSSStyleSheet),o.replaceSync(this.cssText)),o}toString(){return this.cssText}},td=o=>new ed(typeof o=="string"?o:o+"",wa),Wi=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,r,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[n+1],o[0]);return new ed(t,wa)},Vl=xa?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return td(t)})(o):o,Kl=window.trustedTypes,bm=Kl?Kl.emptyScript:"",Gl=window.reactiveElementPolyfillSupport,js={toAttribute(o,e){switch(e){case Boolean:o=o?bm:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},od=(o,e)=>e!==o&&(e==e||o==o),cs={attribute:!0,type:String,converter:js,reflect:!1,hasChanged:od},qi=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(o){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(o)}static get observedAttributes(){this.finalize();const o=[];return this.elementProperties.forEach((e,t)=>{const i=this._$Eh(t,e);i!==void 0&&(this._$Eu.set(i,t),o.push(i))}),o}static createProperty(o,e=cs){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(o,e),!e.noAccessor&&!this.prototype.hasOwnProperty(o)){const t=typeof o=="symbol"?Symbol():"__"+o,i=this.getPropertyDescriptor(o,t,e);i!==void 0&&Object.defineProperty(this.prototype,o,i)}}static getPropertyDescriptor(o,e,t){return{get(){return this[e]},set(i){const r=this[o];this[e]=i,this.requestUpdate(o,r,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(o){return this.elementProperties.get(o)||cs}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const o=Object.getPrototypeOf(this);if(o.finalize(),this.elementProperties=new Map(o.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(o){const e=[];if(Array.isArray(o)){const t=new Set(o.flat(1/0).reverse());for(const i of t)e.unshift(Vl(i))}else o!==void 0&&e.push(Vl(o));return e}static _$Eh(o,e){const t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof o=="string"?o.toLowerCase():void 0}o(){var o;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(o=this.constructor.l)===null||o===void 0||o.forEach(e=>e(this))}addController(o){var e,t;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(o),this.renderRoot!==void 0&&this.isConnected&&((t=o.hostConnected)===null||t===void 0||t.call(o))}removeController(o){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(o)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((o,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var o;const e=(o=this.shadowRoot)!==null&&o!==void 0?o:this.attachShadow(this.constructor.shadowRootOptions);return t=e,i=this.constructor.elementStyles,xa?t.adoptedStyleSheets=i.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):i.forEach(r=>{const n=document.createElement("style"),s=window.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,t.appendChild(n)}),e;var t,i}connectedCallback(){var o;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(o=this._$Eg)===null||o===void 0||o.forEach(e=>{var t;return(t=e.hostConnected)===null||t===void 0?void 0:t.call(e)})}enableUpdating(o){}disconnectedCallback(){var o;(o=this._$Eg)===null||o===void 0||o.forEach(e=>{var t;return(t=e.hostDisconnected)===null||t===void 0?void 0:t.call(e)})}attributeChangedCallback(o,e,t){this._$AK(o,t)}_$ES(o,e,t=cs){var i,r;const n=this.constructor._$Eh(o,t);if(n!==void 0&&t.reflect===!0){const s=((r=(i=t.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&r!==void 0?r:js.toAttribute)(e,t.type);this._$Ei=o,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Ei=null}}_$AK(o,e){var t,i,r;const n=this.constructor,s=n._$Eu.get(o);if(s!==void 0&&this._$Ei!==s){const p=n.getPropertyOptions(s),c=p.converter,d=(r=(i=(t=c)===null||t===void 0?void 0:t.fromAttribute)!==null&&i!==void 0?i:typeof c=="function"?c:null)!==null&&r!==void 0?r:js.fromAttribute;this._$Ei=s,this[s]=d(e,p.type),this._$Ei=null}}requestUpdate(o,e,t){let i=!0;o!==void 0&&(((t=t||this.constructor.getPropertyOptions(o)).hasChanged||od)(this[o],e)?(this._$AL.has(o)||this._$AL.set(o,e),t.reflect===!0&&this._$Ei!==o&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(o,t))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const o=this.scheduleUpdate();return o!=null&&await o,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,r)=>this[r]=i),this._$Et=void 0);let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(o=this._$Eg)===null||o===void 0||o.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(o){}_$AE(o){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostUpdated)===null||i===void 0?void 0:i.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(o)),this.updated(o)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(o){return!0}update(o){this._$E_!==void 0&&(this._$E_.forEach((e,t)=>this._$ES(t,this[t],e)),this._$E_=void 0),this._$EU()}updated(o){}firstUpdated(o){}};qi.finalized=!0,qi.elementProperties=new Map,qi.elementStyles=[],qi.shadowRootOptions={mode:"open"},Gl==null||Gl({ReactiveElement:qi}),((as=globalThis.reactiveElementVersions)!==null&&as!==void 0?as:globalThis.reactiveElementVersions=[]).push("1.2.3");var Vi=globalThis.trustedTypes,Ql=Vi?Vi.createPolicy("lit-html",{createHTML:o=>o}):void 0,bo=`lit$${(Math.random()+"").slice(9)}$`,id="?"+bo,ym=`<${id}>`,Ki=document,Mr=(o="")=>Ki.createComment(o),$r=o=>o===null||typeof o!="object"&&typeof o!="function",Wl=Array.isArray,ir=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xl=/-->/g,Zl=/>/g,Uo=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Yl=/'/g,Jl=/"/g,ec=/^(?:script|style|textarea|title)$/i,Tt=(o=>(e,...t)=>({_$litType$:o,strings:e,values:t}))(1),Io=Symbol.for("lit-noChange"),Re=Symbol.for("lit-nothing"),tc=new WeakMap,Ri=Ki.createTreeWalker(Ki,129,null,!1),bn=class{constructor({strings:o,_$litType$:e},t){let i;this.parts=[];let r=0,n=0;const s=o.length-1,p=this.parts,[c,d]=((u,a)=>{const l=u.length-1,h=[];let f,m=a===2?"<svg>":"",g=ir;for(let y=0;y<l;y++){const b=u[y];let x,w,E=-1,S=0;for(;S<b.length&&(g.lastIndex=S,w=g.exec(b),w!==null);)S=g.lastIndex,g===ir?w[1]==="!--"?g=Xl:w[1]!==void 0?g=Zl:w[2]!==void 0?(ec.test(w[2])&&(f=RegExp("</"+w[2],"g")),g=Uo):w[3]!==void 0&&(g=Uo):g===Uo?w[0]===">"?(g=f!=null?f:ir,E=-1):w[1]===void 0?E=-2:(E=g.lastIndex-w[2].length,x=w[1],g=w[3]===void 0?Uo:w[3]==='"'?Jl:Yl):g===Jl||g===Yl?g=Uo:g===Xl||g===Zl?g=ir:(g=Uo,f=void 0);const k=g===Uo&&u[y+1].startsWith("/>")?" ":"";m+=g===ir?b+ym:E>=0?(h.push(x),b.slice(0,E)+"$lit$"+b.slice(E)+bo+k):b+bo+(E===-2?(h.push(void 0),y):k)}const v=m+(u[l]||"<?>")+(a===2?"</svg>":"");if(!Array.isArray(u)||!u.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ql!==void 0?Ql.createHTML(v):v,h]})(o,e);if(this.el=bn.createElement(c,t),Ri.currentNode=this.el.content,e===2){const u=this.el.content,a=u.firstChild;a.remove(),u.append(...a.childNodes)}for(;(i=Ri.nextNode())!==null&&p.length<s;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const a of i.getAttributeNames())if(a.endsWith("$lit$")||a.startsWith(bo)){const l=d[n++];if(u.push(a),l!==void 0){const h=i.getAttribute(l.toLowerCase()+"$lit$").split(bo),f=/([.?@])?(.*)/.exec(l);p.push({type:1,index:r,name:f[2],strings:h,ctor:f[1]==="."?xm:f[1]==="?"?Em:f[1]==="@"?Am:Tn})}else p.push({type:6,index:r})}for(const a of u)i.removeAttribute(a)}if(ec.test(i.tagName)){const u=i.textContent.split(bo),a=u.length-1;if(a>0){i.textContent=Vi?Vi.emptyScript:"";for(let l=0;l<a;l++)i.append(u[l],Mr()),Ri.nextNode(),p.push({type:2,index:++r});i.append(u[a],Mr())}}}else if(i.nodeType===8)if(i.data===id)p.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(bo,u+1))!==-1;)p.push({type:7,index:r}),u+=bo.length-1}r++}}static createElement(o,e){const t=Ki.createElement("template");return t.innerHTML=o,t}};function Gi(o,e,t=o,i){var r,n,s,p;if(e===Io)return e;let c=i!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[i]:t._$Cu;const d=$r(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==d&&((n=c==null?void 0:c._$AO)===null||n===void 0||n.call(c,!1),d===void 0?c=void 0:(c=new d(o),c._$AT(o,t,i)),i!==void 0?((s=(p=t)._$Cl)!==null&&s!==void 0?s:p._$Cl=[])[i]=c:t._$Cu=c),c!==void 0&&(e=Gi(o,c._$AS(o,e.values),c,i)),e}var us,ds,yn=class{constructor(o,e,t,i){var r;this.type=2,this._$AH=Re,this._$AN=void 0,this._$AA=o,this._$AB=e,this._$AM=t,this.options=i,this._$Cg=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var o,e;return(e=(o=this._$AM)===null||o===void 0?void 0:o._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let o=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&o.nodeType===11&&(o=e.parentNode),o}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(o,e=this){o=Gi(this,o,e),$r(o)?o===Re||o==null||o===""?(this._$AH!==Re&&this._$AR(),this._$AH=Re):o!==this._$AH&&o!==Io&&this.$(o):o._$litType$!==void 0?this.T(o):o.nodeType!==void 0?this.S(o):(t=>{var i;return Wl(t)||typeof((i=t)===null||i===void 0?void 0:i[Symbol.iterator])=="function"})(o)?this.A(o):this.$(o)}M(o,e=this._$AB){return this._$AA.parentNode.insertBefore(o,e)}S(o){this._$AH!==o&&(this._$AR(),this._$AH=this.M(o))}$(o){this._$AH!==Re&&$r(this._$AH)?this._$AA.nextSibling.data=o:this.S(Ki.createTextNode(o)),this._$AH=o}T(o){var e;const{values:t,_$litType$:i}=o,r=typeof i=="number"?this._$AC(o):(i.el===void 0&&(i.el=bn.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(t);else{const n=new class{constructor(p,c){this.v=[],this._$AN=void 0,this._$AD=p,this._$AM=c}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(p){var c;const{el:{content:d},parts:u}=this._$AD,a=((c=p==null?void 0:p.creationScope)!==null&&c!==void 0?c:Ki).importNode(d,!0);Ri.currentNode=a;let l=Ri.nextNode(),h=0,f=0,m=u[0];for(;m!==void 0;){if(h===m.index){let g;m.type===2?g=new yn(l,l.nextSibling,this,p):m.type===1?g=new m.ctor(l,m.name,m.strings,this,p):m.type===6&&(g=new _m(l,this,p)),this.v.push(g),m=u[++f]}h!==(m==null?void 0:m.index)&&(l=Ri.nextNode(),h++)}return a}m(p){let c=0;for(const d of this.v)d!==void 0&&(d.strings!==void 0?(d._$AI(p,d,c),c+=d.strings.length-2):d._$AI(p[c])),c++}}(r,this),s=n.p(this.options);n.m(t),this.S(s),this._$AH=n}}_$AC(o){let e=tc.get(o.strings);return e===void 0&&tc.set(o.strings,e=new bn(o)),e}A(o){Wl(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let t,i=0;for(const r of o)i===e.length?e.push(t=new yn(this.M(Mr()),this.M(Mr()),this,this.options)):t=e[i],t._$AI(r),i++;i<e.length&&(this._$AR(t&&t._$AB.nextSibling,i),e.length=i)}_$AR(o=this._$AA.nextSibling,e){var t;for((t=this._$AP)===null||t===void 0||t.call(this,!1,!0,e);o&&o!==this._$AB;){const i=o.nextSibling;o.remove(),o=i}}setConnected(o){var e;this._$AM===void 0&&(this._$Cg=o,(e=this._$AP)===null||e===void 0||e.call(this,o))}},Tn=class{constructor(o,e,t,i,r){this.type=1,this._$AH=Re,this._$AN=void 0,this.element=o,this.name=e,this._$AM=i,this.options=r,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=Re}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(o,e=this,t,i){const r=this.strings;let n=!1;if(r===void 0)o=Gi(this,o,e,0),n=!$r(o)||o!==this._$AH&&o!==Io,n&&(this._$AH=o);else{const s=o;let p,c;for(o=r[0],p=0;p<r.length-1;p++)c=Gi(this,s[t+p],e,p),c===Io&&(c=this._$AH[p]),n||(n=!$r(c)||c!==this._$AH[p]),c===Re?o=Re:o!==Re&&(o+=(c!=null?c:"")+r[p+1]),this._$AH[p]=c}n&&!i&&this.k(o)}k(o){o===Re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,o!=null?o:"")}},xm=class extends Tn{constructor(){super(...arguments),this.type=3}k(o){this.element[this.name]=o===Re?void 0:o}},wm=Vi?Vi.emptyScript:"",Em=class extends Tn{constructor(){super(...arguments),this.type=4}k(o){o&&o!==Re?this.element.setAttribute(this.name,wm):this.element.removeAttribute(this.name)}},Am=class extends Tn{constructor(o,e,t,i,r){super(o,e,t,i,r),this.type=5}_$AI(o,e=this){var t;if((o=(t=Gi(this,o,e,0))!==null&&t!==void 0?t:Re)===Io)return;const i=this._$AH,r=o===Re&&i!==Re||o.capture!==i.capture||o.once!==i.once||o.passive!==i.passive,n=o!==Re&&(i===Re||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,o),this._$AH=o}handleEvent(o){var e,t;typeof this._$AH=="function"?this._$AH.call((t=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&t!==void 0?t:this.element,o):this._$AH.handleEvent(o)}},_m=class{constructor(o,e,t){this.element=o,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(o){Gi(this,o)}},oc=window.litHtmlPolyfillSupport;oc==null||oc(bn,yn),((ls=globalThis.litHtmlVersions)!==null&&ls!==void 0?ls:globalThis.litHtmlVersions=[]).push("2.1.3");var io=class extends qi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var o,e;const t=super.createRenderRoot();return(o=(e=this.renderOptions).renderBefore)!==null&&o!==void 0||(e.renderBefore=t.firstChild),t}update(o){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(o),this._$Dt=((t,i,r)=>{var n,s;const p=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:i;let c=p._$litPart$;if(c===void 0){const d=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:null;p._$litPart$=c=new yn(i.insertBefore(Mr(),d),d,void 0,r!=null?r:{})}return c._$AI(t),c})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var o;super.connectedCallback(),(o=this._$Dt)===null||o===void 0||o.setConnected(!0)}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this._$Dt)===null||o===void 0||o.setConnected(!1)}render(){return Io}};io.finalized=!0,io._$litElement$=!0,(us=globalThis.litElementHydrateSupport)===null||us===void 0||us.call(globalThis,{LitElement:io});var ic=globalThis.litElementPolyfillSupport;ic==null||ic({LitElement:io}),((ds=globalThis.litElementVersions)!==null&&ds!==void 0?ds:globalThis.litElementVersions=[]).push("3.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Hr=Wi`
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
`,Om=Wi`
  ${Hr}

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
`;function rc(o,e,t="vertical",i="smooth"){const r=function(a,l){return{top:Math.round(a.getBoundingClientRect().top-l.getBoundingClientRect().top),left:Math.round(a.getBoundingClientRect().left-l.getBoundingClientRect().left)}}(o,e),n=r.top+e.scrollTop,s=r.left+e.scrollLeft,p=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,d=e.scrollTop,u=e.scrollTop+e.offsetHeight;t!=="horizontal"&&t!=="both"||(s<p?e.scrollTo({left:s,behavior:i}):s+o.clientWidth>c&&e.scrollTo({left:s-e.offsetWidth+o.clientWidth,behavior:i})),t!=="vertical"&&t!=="both"||(n<d?e.scrollTo({top:n,behavior:i}):n+o.clientHeight>u&&e.scrollTo({top:n-e.offsetHeight+o.clientHeight,behavior:i}))}var yr,Ms=new Set,qm=new MutationObserver(rd),$s=new Map,dr=document.documentElement.lang||navigator.language;function rd(){dr=document.documentElement.lang||navigator.language,[...Ms.keys()].map(o=>{typeof o.requestUpdate=="function"&&o.requestUpdate()})}qm.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});var nd=class{constructor(o){this.host=o,this.host.addController(this)}hostConnected(){Ms.add(this.host)}hostDisconnected(){Ms.delete(this.host)}term(o,...e){return function(t,i,...r){const n=t.toLowerCase().slice(0,2),s=t.length>2?t.toLowerCase():"",p=$s.get(s),c=$s.get(n);let d;if(p&&p[i])d=p[i];else if(c&&c[i])d=c[i];else{if(!yr||!yr[i])return console.error(`No translation found for: ${i}`),i;d=yr[i]}return typeof d=="function"?d(...r):d}(this.host.lang||dr,o,...e)}date(o,e){return function(t,i,r){return i=new Date(i),new Intl.DateTimeFormat(t,r).format(i)}(this.host.lang||dr,o,e)}number(o,e){return function(t,i,r){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(t,r).format(i)}(this.host.lang||dr,o,e)}relativeTime(o,e,t){return function(i,r,n,s){return new Intl.RelativeTimeFormat(i,s).format(r,n)}(this.host.lang||dr,o,e,t)}};(function(...o){o.map(e=>{const t=e.$code.toLowerCase();$s.set(t,e),yr||(yr=e)}),rd()})({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var Sm=1,Im=2,sd=o=>(...e)=>({_$litDirective$:o,values:e}),ad=class{constructor(o){}get _$AU(){return this._$AM._$AU}_$AT(o,e,t){this._$Ct=o,this._$AM=e,this._$Ci=t}_$AS(o,e){return this.update(o,e)}update(o,e){return this.render(...e)}},Ea=sd(class extends ad{constructor(o){var e;if(super(o),o.type!==Sm||o.name!=="class"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var t,i;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.et=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!(!((t=this.et)===null||t===void 0)&&t.has(n))&&this.st.add(n);return this.render(e)}const r=o.element.classList;this.st.forEach(n=>{n in e||(r.remove(n),this.st.delete(n))});for(const n in e){const s=!!e[n];s===this.st.has(n)||((i=this.et)===null||i===void 0?void 0:i.has(n))||(s?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Io}}),ld=Object.defineProperty,km=Object.defineProperties,Nm=Object.getOwnPropertyDescriptor,Pm=Object.getOwnPropertyDescriptors,nc=Object.getOwnPropertySymbols,Cm=Object.prototype.hasOwnProperty,Tm=Object.prototype.propertyIsEnumerable,sc=(o,e,t)=>e in o?ld(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,Xi=(o,e)=>{for(var t in e||(e={}))Cm.call(e,t)&&sc(o,t,e[t]);if(nc)for(var t of nc(e))Tm.call(e,t)&&sc(o,t,e[t]);return o},Aa=(o,e)=>km(o,Pm(e)),ue=(o,e,t,i)=>{for(var r,n=i>1?void 0:i?Nm(e,t):e,s=o.length-1;s>=0;s--)(r=o[s])&&(n=(i?r(e,t,n):r(n))||n);return i&&n&&ld(e,t,n),n};function xr(o,e){const t=Xi({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:n}=i;if(o in i){const s=o;i.update=function(p){if(p.has(s)){const c=p.get(s),d=this[s];c!==d&&(t.waitUntilFirstUpdate&&!this.hasUpdated||this[r](c,d))}n.call(this,p)}}}}function Wo(o,e,t){const i=new CustomEvent(e,Xi({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return o.dispatchEvent(i),i}var Vr=o=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(o,e):((t,i)=>{const{kind:r,elements:n}=i;return{kind:r,elements:n,finisher(s){window.customElements.define(t,s)}}})(o,e),Dm=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Aa(Xi({},e),{finisher(t){t.createProperty(e.key,o)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function qe(o){return(e,t)=>t!==void 0?((i,r,n)=>{r.constructor.createProperty(n,i)})(o,e,t):Dm(o,e)}function cd(o){return qe(Aa(Xi({},o),{state:!0}))}var ps;function Ni(o,e){return(({finisher:t,descriptor:i})=>(r,n)=>{var s;if(n===void 0){const p=(s=r.originalKey)!==null&&s!==void 0?s:r.key,c=i!=null?{kind:"method",placement:"prototype",key:p,descriptor:i(r.key)}:Aa(Xi({},r),{key:p});return t!=null&&(c.finisher=function(d){t(d,p)}),c}{const p=r.constructor;i!==void 0&&Object.defineProperty(r,n,i(n)),t==null||t(p,n)}})({descriptor:t=>{const i={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var n,s;return this[r]===void 0&&(this[r]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null),this[r]}}return i}})}(ps=window.HTMLSlotElement)===null||ps===void 0||ps.prototype.assignedElements;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ct=class extends io{constructor(){super(...arguments),this.localize=new nd(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.preventIndicatorTransition(),this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(o=>{o.some(e=>!["aria-labelledby","aria-controls"].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels()),o.some(e=>e.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((o,e)=>{var t;o[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((t=this.getActiveTab())!=null?t:this.tabs[0],{emitEvents:!1}),e.unobserve(o[0].target))}).observe(this.tabGroup)})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}show(o){const e=this.tabs.find(t=>t.panel===o);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}getAllTabs(o=!1){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(e=>o?e.tagName.toLowerCase()==="sl-tab":e.tagName.toLowerCase()==="sl-tab"&&!e.disabled)}getAllPanels(){return[...this.body.querySelector("slot").assignedElements()].filter(o=>o.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(o=>o.active)}handleClick(o){const e=o.target.closest("sl-tab");(e==null?void 0:e.closest("sl-tab-group"))===this&&e!==null&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(o){const e=o.target.closest("sl-tab");if((e==null?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(o.key)&&e!==null&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),o.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(o.key))){const t=document.activeElement;if((t==null?void 0:t.tagName.toLowerCase())==="sl-tab"){let i=this.tabs.indexOf(t);o.key==="Home"?i=0:o.key==="End"?i=this.tabs.length-1:["top","bottom"].includes(this.placement)&&o.key==="ArrowLeft"||["start","end"].includes(this.placement)&&o.key==="ArrowUp"?i--:(["top","bottom"].includes(this.placement)&&o.key==="ArrowRight"||["start","end"].includes(this.placement)&&o.key==="ArrowDown")&&i++,i<0&&(i=this.tabs.length-1),i>this.tabs.length-1&&(i=0),this.tabs[i].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[i],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&rc(this.tabs[i],this.nav,"horizontal"),o.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}setActiveTab(o,e){if(e=Xi({emitEvents:!0,scrollBehavior:"auto"},e),o!==this.activeTab&&!o.disabled){const t=this.activeTab;this.activeTab=o,this.tabs.map(i=>i.active=i===this.activeTab),this.panels.map(i=>{var r;return i.active=i.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&rc(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(t&&Wo(this,"sl-tab-hide",{detail:{name:t.panel}}),Wo(this,"sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(o=>{const e=this.panels.find(t=>t.name===o.panel);e&&(o.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",o.getAttribute("id")))})}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}repositionIndicator(){const o=this.getActiveTab();if(!o)return;const e=o.clientWidth,t=o.clientHeight,i=this.getAllTabs(!0),r=i.slice(0,i.indexOf(o)).reduce((n,s)=>({left:n.left+s.clientWidth,top:n.top+s.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.transform=`translateX(${r.left}px)`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${t}px`,this.indicator.style.transform=`translateY(${r.top}px)`}}preventIndicatorTransition(){const o=this.indicator.style.transition;this.indicator.style.transition="none",requestAnimationFrame(()=>{this.indicator.style.transition=o})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.panels=this.getAllPanels(),this.syncIndicator()}render(){return Tt`
      <div
        part="base"
        class=${Ea({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?Tt`
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

          ${this.hasScrollControls?Tt`
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
    `}};ct.styles=Om,ue([Ni(".tab-group")],ct.prototype,"tabGroup",2),ue([Ni(".tab-group__body")],ct.prototype,"body",2),ue([Ni(".tab-group__nav")],ct.prototype,"nav",2),ue([Ni(".tab-group__indicator")],ct.prototype,"indicator",2),ue([cd()],ct.prototype,"hasScrollControls",2),ue([qe()],ct.prototype,"placement",2),ue([qe()],ct.prototype,"activation",2),ue([qe({attribute:"no-scroll-controls",type:Boolean})],ct.prototype,"noScrollControls",2),ue([qe()],ct.prototype,"lang",2),ue([xr("noScrollControls",{waitUntilFirstUpdate:!0})],ct.prototype,"updateScrollControls",1),ue([xr("placement",{waitUntilFirstUpdate:!0})],ct.prototype,"syncIndicator",1),ct=ue([Vr("sl-tab-group")],ct);var Rm=(()=>{const o=document.createElement("style");let e;try{document.head.appendChild(o),o.sheet.insertRule(":focus-visible { color: inherit }"),e=!0}catch{e=!1}finally{o.remove()}return e})(),ud=td(Rm?":focus-visible":":focus"),Lm=Wi`
  ${Hr}

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

  .icon-button${ud} {
    box-shadow: var(--sl-focus-ring);
  }
`,Nt=o=>o!=null?o:Re,xt=class extends io{constructor(){super(...arguments),this.label="",this.disabled=!1}render(){const o=!!this.href,e=Tt`
      <sl-icon
        name=${Nt(this.name)}
        library=${Nt(this.library)}
        src=${Nt(this.src)}
        aria-hidden="true"
      ></sl-icon>
    `;return o?Tt`
          <a
            part="base"
            class="icon-button"
            href=${Nt(this.href)}
            target=${Nt(this.target)}
            download=${Nt(this.download)}
            rel=${Nt(this.target?"noreferrer noopener":void 0)}
            role="button"
            aria-disabled=${this.disabled?"true":"false"}
            aria-label="${this.label}"
            tabindex=${this.disabled?"-1":"0"}
          >
            ${e}
          </a>
        `:Tt`
          <button
            part="base"
            class=${Ea({"icon-button":!0,"icon-button--disabled":this.disabled})}
            ?disabled=${this.disabled}
            type="button"
            aria-label=${this.label}
          >
            ${e}
          </button>
        `}};xt.styles=Lm,ue([Ni(".icon-button")],xt.prototype,"button",2),ue([qe()],xt.prototype,"name",2),ue([qe()],xt.prototype,"library",2),ue([qe()],xt.prototype,"src",2),ue([qe()],xt.prototype,"href",2),ue([qe()],xt.prototype,"target",2),ue([qe()],xt.prototype,"download",2),ue([qe()],xt.prototype,"label",2),ue([qe({type:Boolean,reflect:!0})],xt.prototype,"disabled",2),xt=ue([Vr("sl-icon-button")],xt);var dd="";function ac(o){dd=o}var pd=[...document.getElementsByTagName("script")],lc=pd.find(o=>o.hasAttribute("data-shoelace"));if(lc)ac(lc.getAttribute("data-shoelace"));else{const o=pd.find(t=>/shoelace(\.min)?\.js($|\?)/.test(t.src));let e="";o&&(e=o.getAttribute("src")),ac(e.split("/").slice(0,-1).join("/"))}var cc={"check-lg":`
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
  `},jm=[{name:"default",resolver:o=>`${dd.replace(/\/$/,"")}/assets/icons/${o}.svg`},{name:"system",resolver:o=>o in cc?`data:image/svg+xml,${encodeURIComponent(cc[o])}`:""}],hs=[];function uc(o){return jm.find(e=>e.name===o)}var fs=new Map,ms=new Map;async function Mm(o){if(ms.has(o))return ms.get(o);const e=await function(i,r="cors"){if(fs.has(i))return fs.get(i);const n=fetch(i,{mode:r}).then(async s=>({ok:s.ok,status:s.status,html:await s.text()}));return fs.set(i,n),n}(o),t={ok:e.ok,status:e.status,svg:null};if(e.ok){const i=document.createElement("div");i.innerHTML=e.html;const r=i.firstElementChild;t.svg=(r==null?void 0:r.tagName.toLowerCase())==="svg"?r.outerHTML:""}return ms.set(o,t),t}var $m=Wi`
  ${Hr}

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
`,Us=class extends ad{constructor(o){if(super(o),this.it=Re,o.type!==Im)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(o){if(o===Re||o==null)return this.vt=void 0,this.it=o;if(o===Io)return o;if(typeof o!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(o===this.it)return this.vt;this.it=o;const e=[o];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Us.directiveName="unsafeHTML",Us.resultType=1;var Fs=class extends Us{};Fs.directiveName="unsafeSVG",Fs.resultType=2;var Um=sd(Fs),Fm=new DOMParser,Ht=class extends io{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){var o;super.connectedCallback(),o=this,hs.push(o)}firstUpdated(){this.setIcon()}disconnectedCallback(){var o;super.disconnectedCallback(),o=this,hs=hs.filter(e=>e!==o)}getUrl(){const o=uc(this.library);return this.name&&o?o.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var o;const e=uc(this.library),t=this.getUrl();if(t)try{const i=await Mm(t);if(t!==this.getUrl())return;if(i.ok){const r=Fm.parseFromString(i.svg,"text/html").body.querySelector("svg");r!==null?((o=e==null?void 0:e.mutator)==null||o.call(e,r),this.svg=r.outerHTML,Wo(this,"sl-load")):(this.svg="",Wo(this,"sl-error"))}else this.svg="",Wo(this,"sl-error")}catch{Wo(this,"sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const o=typeof this.label=="string"&&this.label.length>0;return Tt` <div
      part="base"
      class="icon"
      role=${Nt(o?"img":void 0)}
      aria-label=${Nt(o?this.label:void 0)}
      aria-hidden=${Nt(o?void 0:"true")}
    >
      ${Um(this.svg)}
    </div>`}};Ht.styles=$m,ue([cd()],Ht.prototype,"svg",2),ue([qe()],Ht.prototype,"name",2),ue([qe()],Ht.prototype,"src",2),ue([qe()],Ht.prototype,"label",2),ue([qe()],Ht.prototype,"library",2),ue([xr("name"),xr("src"),xr("library")],Ht.prototype,"setIcon",1),Ht=ue([Vr("sl-icon")],Ht);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zm=0;function hd(){return++zm}var Bm=Wi`
  ${Hr}

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

  .tab${ud}:not(.tab--disabled) {
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
`,Vt=class extends io{constructor(){super(...arguments),this.localize=new nd(this),this.attrId=hd(),this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}focus(o){this.tab.focus(o)}blur(){this.tab.blur()}handleCloseClick(){Wo(this,"sl-close")}render(){return this.id=this.id.length>0?this.id:this.componentId,Tt`
      <div
        part="base"
        class=${Ea({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        role="tab"
        aria-disabled=${this.disabled?"true":"false"}
        aria-selected=${this.active?"true":"false"}
        tabindex=${this.disabled||!this.active?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?Tt`
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
    `}};Vt.styles=Bm,ue([Ni(".tab")],Vt.prototype,"tab",2),ue([qe({reflect:!0})],Vt.prototype,"panel",2),ue([qe({type:Boolean,reflect:!0})],Vt.prototype,"active",2),ue([qe({type:Boolean})],Vt.prototype,"closable",2),ue([qe({type:Boolean,reflect:!0})],Vt.prototype,"disabled",2),ue([qe()],Vt.prototype,"lang",2),Vt=ue([Vr("sl-tab")],Vt);var Hm=Wi`
  ${Hr}

  :host {
    --padding: 0;

    display: block;
  }

  .tab-panel {
    border: solid 1px transparent;
    padding: var(--padding);
  }
`,rr=class extends io{constructor(){super(...arguments),this.attrId=hd(),this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId}render(){return this.style.display=this.active?"block":"none",Tt`
      <div part="base" class="tab-panel" role="tabpanel" aria-hidden=${this.active?"false":"true"}>
        <slot></slot>
      </div>
    `}};rr.styles=Hm,ue([qe({reflect:!0})],rr.prototype,"name",2),ue([qe({type:Boolean,reflect:!0})],rr.prototype,"active",2),rr=ue([Vr("sl-tab-panel")],rr);let kt=class extends _n(he)(rt){constructor(){super(),this.modo="",this.projetoNorma={},this.autoria=new ga,this.parlamentares=[],this.getParlamentares().then(o=>this.parlamentares=o)}async getParlamentares(){return(await(await fetch("https://emendas-api.herokuapp.com/parlamentares")).json()).map(o=>({identificacao:o.id,nome:o.nome,sexo:o.sexo,siglaPartido:o.siglaPartido,siglaUF:o.siglaUF,siglaCasaLegislativa:o.siglaCasa}))}getEmenda(){const o=new Ff;return o.tipo=this.modo,o.proposicao.urn=Cn(this.projetoNorma),o.dispositivos=this._lexmlEta.getDispositivosEmenda(),o.comandoEmenda=this._lexmlEta.getComandoEmenda(),o.justificativa=this._lexmlJustificativa.texto,o.autoria=this._lexmlAutoria.getAutoriaAtualizada(),o.data=this._lexmlData.data,o}setEmenda(o){this.modo=o.tipo,this._lexmlEta.dispositivosEmenda=o.dispositivos,this.autoria=o.autoria,this._lexmlJustificativa.setContent(o.justificativa),this._lexmlData.data=o.data}createRenderRoot(){return this}render(){return Se`
      ${gm}
      <style>
        lexml-emenda {
          height: 100%;
        }
      </style>
      <sl-tab-group>
        <sl-tab slot="nav" panel="lexml-eta">Texto</sl-tab>
        <sl-tab slot="nav" panel="justificativa">Justificativa</sl-tab>
        <sl-tab slot="nav" panel="autoria">Data e Autoria</sl-tab>
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
      </sl-tab-group>
    `}};ce([Qe({type:String})],kt.prototype,"modo",void 0),ce([Qe({type:Object})],kt.prototype,"projetoNorma",void 0),ce([dn()],kt.prototype,"autoria",void 0),ce([dn()],kt.prototype,"parlamentares",void 0),ce([Go("lexml-eta")],kt.prototype,"_lexmlEta",void 0),ce([Go("lexml-emenda-justificativa")],kt.prototype,"_lexmlJustificativa",void 0),ce([Go("lexml-autoria")],kt.prototype,"_lexmlAutoria",void 0),ce([Go("lexml-data")],kt.prototype,"_lexmlData",void 0),kt=ce([It("lexml-emenda")],kt);const fd=Pd(zd);fd.use(Cd()).use(Hd);fd.mount("#app");export{Pi as _,Xm as a,Qm as b,Gm as c,Wm as d,Md as g,jd as i,Zm as s,zs as u};
