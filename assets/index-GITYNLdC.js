var bi=Object.defineProperty;var lt=o=>{throw TypeError(o)};var vi=(o,e,t)=>e in o?bi(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var x=(o,e,t)=>vi(o,typeof e!="symbol"?e+"":e,t),Ce=(o,e,t)=>e.has(o)||lt("Cannot "+t);var b=(o,e,t)=>(Ce(o,e,"read from private field"),t?t.call(o):e.get(o)),M=(o,e,t)=>e.has(o)?lt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,t),P=(o,e,t,i)=>(Ce(o,e,"write to private field"),i?i.call(o,t):e.set(o,t),t),m=(o,e,t)=>(Ce(o,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke=globalThis,nt=ke.ShadowRoot&&(ke.ShadyCSS===void 0||ke.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol(),ct=new WeakMap;let Ct=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(nt&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ct.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ct.set(t,e))}return e}toString(){return this.cssText}};const xi=o=>new Ct(typeof o=="string"?o:o+"",void 0,ot),j=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,n,a)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[a+1],o[0]);return new Ct(t,o,ot)},wi=(o,e)=>{if(nt)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=ke.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,o.appendChild(i)}},dt=nt?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return xi(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yi,defineProperty:ki,getOwnPropertyDescriptor:_i,getOwnPropertyNames:$i,getOwnPropertySymbols:Ai,getPrototypeOf:Si}=Object,W=globalThis,pt=W.trustedTypes,ji=pt?pt.emptyScript:"",Me=W.reactiveElementPolyfillSupport,he=(o,e)=>o,Le={toAttribute(o,e){switch(e){case Boolean:o=o?ji:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Mt=(o,e)=>!yi(o,e),ht={attribute:!0,type:String,converter:Le,reflect:!1,hasChanged:Mt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),W.litPropertyMetadata??(W.litPropertyMetadata=new WeakMap);class se extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ht){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&ki(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:a}=_i(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get(){return n==null?void 0:n.call(this)},set(r){const l=n==null?void 0:n.call(this);a.call(this,r),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ht}static _$Ei(){if(this.hasOwnProperty(he("elementProperties")))return;const e=Si(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(he("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(he("properties"))){const t=this.properties,i=[...$i(t),...Ai(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(dt(n))}else e!==void 0&&t.push(dt(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wi(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var a;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const r=(((a=i.converter)==null?void 0:a.toAttribute)!==void 0?i.converter:Le).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){var a;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const r=i.getPropertyOptions(n),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((a=r.converter)==null?void 0:a.fromAttribute)!==void 0?r.converter:Le;this._$Em=n,this[n]=l.fromAttribute(t,r.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Mt)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,r]of this._$Ep)this[a]=r;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[a,r]of n)r.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(n=>{var a;return(a=n.hostUpdate)==null?void 0:a.call(n)}),this.update(t)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}se.elementStyles=[],se.shadowRootOptions={mode:"open"},se[he("elementProperties")]=new Map,se[he("finalized")]=new Map,Me==null||Me({ReactiveElement:se}),(W.reactiveElementVersions??(W.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=globalThis,Ee=ue.trustedTypes,ut=Ee?Ee.createPolicy("lit-html",{createHTML:o=>o}):void 0,Nt="$lit$",K=`lit$${Math.random().toFixed(9).slice(2)}$`,Dt="?"+K,Ei=`<${Dt}>`,oe=document,fe=()=>oe.createComment(""),me=o=>o===null||typeof o!="object"&&typeof o!="function",at=Array.isArray,Ti=o=>at(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Ne=`[ 	
\f\r]`,de=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,ft=/>/g,X=RegExp(`>|${Ne}(?:([^\\s"'>=/]+)(${Ne}*=${Ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,bt=/"/g,Ot=/^(?:script|style|textarea|title)$/i,Pi=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),f=Pi(1),ae=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),vt=new WeakMap,Q=oe.createTreeWalker(oe,129);function Lt(o,e){if(!at(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ut!==void 0?ut.createHTML(e):e}const Ri=(o,e)=>{const t=o.length-1,i=[];let n,a=e===2?"<svg>":e===3?"<math>":"",r=de;for(let l=0;l<t;l++){const s=o[l];let p,d,c=-1,u=0;for(;u<s.length&&(r.lastIndex=u,d=r.exec(s),d!==null);)u=r.lastIndex,r===de?d[1]==="!--"?r=gt:d[1]!==void 0?r=ft:d[2]!==void 0?(Ot.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=X):d[3]!==void 0&&(r=X):r===X?d[0]===">"?(r=n??de,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,p=d[1],r=d[3]===void 0?X:d[3]==='"'?bt:mt):r===bt||r===mt?r=X:r===gt||r===ft?r=de:(r=X,n=void 0);const g=r===X&&o[l+1].startsWith("/>")?" ":"";a+=r===de?s+Ei:c>=0?(i.push(p),s.slice(0,c)+Nt+s.slice(c)+K+g):s+K+(c===-2?l:g)}return[Lt(o,a+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class be{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let a=0,r=0;const l=e.length-1,s=this.parts,[p,d]=Ri(e,t);if(this.el=be.createElement(p,i),Q.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=Q.nextNode())!==null&&s.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const c of n.getAttributeNames())if(c.endsWith(Nt)){const u=d[r++],g=n.getAttribute(c).split(K),v=/([.?@])?(.*)/.exec(u);s.push({type:1,index:a,name:v[2],strings:g,ctor:v[1]==="."?Ci:v[1]==="?"?Mi:v[1]==="@"?Ni:Re}),n.removeAttribute(c)}else c.startsWith(K)&&(s.push({type:6,index:a}),n.removeAttribute(c));if(Ot.test(n.tagName)){const c=n.textContent.split(K),u=c.length-1;if(u>0){n.textContent=Ee?Ee.emptyScript:"";for(let g=0;g<u;g++)n.append(c[g],fe()),Q.nextNode(),s.push({type:2,index:++a});n.append(c[u],fe())}}}else if(n.nodeType===8)if(n.data===Dt)s.push({type:2,index:a});else{let c=-1;for(;(c=n.data.indexOf(K,c+1))!==-1;)s.push({type:7,index:a}),c+=K.length-1}a++}}static createElement(e,t){const i=oe.createElement("template");return i.innerHTML=e,i}}function ce(o,e,t=o,i){var r,l;if(e===ae)return e;let n=i!==void 0?(r=t._$Co)==null?void 0:r[i]:t._$Cl;const a=me(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==a&&((l=n==null?void 0:n._$AO)==null||l.call(n,!1),a===void 0?n=void 0:(n=new a(o),n._$AT(o,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=n:t._$Cl=n),n!==void 0&&(e=ce(o,n._$AS(o,e.values),n,i)),e}class Ii{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??oe).importNode(t,!0);Q.currentNode=n;let a=Q.nextNode(),r=0,l=0,s=i[0];for(;s!==void 0;){if(r===s.index){let p;s.type===2?p=new ye(a,a.nextSibling,this,e):s.type===1?p=new s.ctor(a,s.name,s.strings,this,e):s.type===6&&(p=new Di(a,this,e)),this._$AV.push(p),s=i[++l]}r!==(s==null?void 0:s.index)&&(a=Q.nextNode(),r++)}return Q.currentNode=oe,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ye{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ce(this,e,t),me(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==ae&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ti(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==S&&me(this._$AH)?this._$AA.nextSibling.data=e:this.T(oe.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=be.createElement(Lt(i.h,i.h[0]),this.options)),i);if(((a=this._$AH)==null?void 0:a._$AD)===n)this._$AH.p(t);else{const r=new Ii(n,this),l=r.u(this.options);r.p(t),this.T(l),this._$AH=r}}_$AC(e){let t=vt.get(e.strings);return t===void 0&&vt.set(e.strings,t=new be(e)),t}k(e){at(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const a of e)n===t.length?t.push(i=new ye(this.O(fe()),this.O(fe()),this,this.options)):i=t[n],i._$AI(a),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Re{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,a){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}_$AI(e,t=this,i,n){const a=this.strings;let r=!1;if(a===void 0)e=ce(this,e,t,0),r=!me(e)||e!==this._$AH&&e!==ae,r&&(this._$AH=e);else{const l=e;let s,p;for(e=a[0],s=0;s<a.length-1;s++)p=ce(this,l[i+s],t,s),p===ae&&(p=this._$AH[s]),r||(r=!me(p)||p!==this._$AH[s]),p===S?e=S:e!==S&&(e+=(p??"")+a[s+1]),this._$AH[s]=p}r&&!n&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ci extends Re{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}}class Mi extends Re{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}}class Ni extends Re{constructor(e,t,i,n,a){super(e,t,i,n,a),this.type=5}_$AI(e,t=this){if((e=ce(this,e,t,0)??S)===ae)return;const i=this._$AH,n=e===S&&i!==S||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==S&&(i===S||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Di{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ce(this,e)}}const De=ue.litHtmlPolyfillSupport;De==null||De(be,ye),(ue.litHtmlVersions??(ue.litHtmlVersions=[])).push("3.2.1");const Oi=(o,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const a=(t==null?void 0:t.renderBefore)??null;i._$litPart$=n=new ye(e.insertBefore(fe(),a),a,void 0,t??{})}return n._$AI(o),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class y extends se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ae}}var It;y._$litElement$=!0,y.finalized=!0,(It=globalThis.litElementHydrateSupport)==null||It.call(globalThis,{LitElement:y});const Oe=globalThis.litElementPolyfillSupport;Oe==null||Oe({LitElement:y});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");function Li(o){for(var e=[],t=0;t<o.length;){var i=o[t];if(i==="*"||i==="+"||i==="?"){e.push({type:"MODIFIER",index:t,value:o[t++]});continue}if(i==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:o[t++]});continue}if(i==="{"){e.push({type:"OPEN",index:t,value:o[t++]});continue}if(i==="}"){e.push({type:"CLOSE",index:t,value:o[t++]});continue}if(i===":"){for(var n="",a=t+1;a<o.length;){var r=o.charCodeAt(a);if(r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||r===95){n+=o[a++];continue}break}if(!n)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:n}),t=a;continue}if(i==="("){var l=1,s="",a=t+1;if(o[a]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<o.length;){if(o[a]==="\\"){s+=o[a++]+o[a++];continue}if(o[a]===")"){if(l--,l===0){a++;break}}else if(o[a]==="("&&(l++,o[a+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(a));s+=o[a++]}if(l)throw new TypeError("Unbalanced pattern at ".concat(t));if(!s)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:s}),t=a;continue}e.push({type:"CHAR",index:t,value:o[t++]})}return e.push({type:"END",index:t,value:""}),e}function rt(o,e){e===void 0&&(e={});for(var t=Li(o),i=e.prefixes,n=i===void 0?"./":i,a=e.delimiter,r=a===void 0?"/#?":a,l=[],s=0,p=0,d="",c=function(C){if(p<t.length&&t[p].type===C)return t[p++].value},u=function(C){var E=c(C);if(E!==void 0)return E;var z=t[p],Ie=z.type,mi=z.index;throw new TypeError("Unexpected ".concat(Ie," at ").concat(mi,", expected ").concat(C))},g=function(){for(var C="",E;E=c("CHAR")||c("ESCAPED_CHAR");)C+=E;return C},v=function(C){for(var E=0,z=r;E<z.length;E++){var Ie=z[E];if(C.indexOf(Ie)>-1)return!0}return!1},k=function(C){var E=l[l.length-1],z=C||(E&&typeof E=="string"?E:"");if(E&&!z)throw new TypeError('Must have text between two parameters, missing text after "'.concat(E.name,'"'));return!z||v(z)?"[^".concat(J(r),"]+?"):"(?:(?!".concat(J(z),")[^").concat(J(r),"])+?")};p<t.length;){var _=c("CHAR"),A=c("NAME"),H=c("PATTERN");if(A||H){var R=_||"";n.indexOf(R)===-1&&(d+=R,R=""),d&&(l.push(d),d=""),l.push({name:A||s++,prefix:R,suffix:"",pattern:H||k(R),modifier:c("MODIFIER")||""});continue}var w=_||c("ESCAPED_CHAR");if(w){d+=w;continue}d&&(l.push(d),d="");var B=c("OPEN");if(B){var R=g(),N=c("NAME")||"",T=c("PATTERN")||"",re=g();u("CLOSE"),l.push({name:N||(T?s++:""),pattern:N&&!T?k(R):T,prefix:R,suffix:re,modifier:c("MODIFIER")||""});continue}u("END")}return l}function Bt(o,e){return zt(rt(o,e),e)}function zt(o,e){e===void 0&&(e={});var t=st(e),i=e.encode,n=i===void 0?function(s){return s}:i,a=e.validate,r=a===void 0?!0:a,l=o.map(function(s){if(typeof s=="object")return new RegExp("^(?:".concat(s.pattern,")$"),t)});return function(s){for(var p="",d=0;d<o.length;d++){var c=o[d];if(typeof c=="string"){p+=c;continue}var u=s?s[c.name]:void 0,g=c.modifier==="?"||c.modifier==="*",v=c.modifier==="*"||c.modifier==="+";if(Array.isArray(u)){if(!v)throw new TypeError('Expected "'.concat(c.name,'" to not repeat, but got an array'));if(u.length===0){if(g)continue;throw new TypeError('Expected "'.concat(c.name,'" to not be empty'))}for(var k=0;k<u.length;k++){var _=n(u[k],c);if(r&&!l[d].test(_))throw new TypeError('Expected all "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(_,'"'));p+=c.prefix+_+c.suffix}continue}if(typeof u=="string"||typeof u=="number"){var _=n(String(u),c);if(r&&!l[d].test(_))throw new TypeError('Expected "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(_,'"'));p+=c.prefix+_+c.suffix;continue}if(!g){var A=v?"an array":"a string";throw new TypeError('Expected "'.concat(c.name,'" to be ').concat(A))}}return p}}function J(o){return o.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function st(o){return o&&o.sensitive?"":"i"}function Bi(o,e){if(!e)return o;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,n=t.exec(o.source);n;)e.push({name:n[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),n=t.exec(o.source);return o}function zi(o,e,t){var i=o.map(function(n){return Ut(n,e,t).source});return new RegExp("(?:".concat(i.join("|"),")"),st(t))}function Ui(o,e,t){return qi(rt(o,t),e,t)}function qi(o,e,t){t===void 0&&(t={});for(var i=t.strict,n=i===void 0?!1:i,a=t.start,r=a===void 0?!0:a,l=t.end,s=l===void 0?!0:l,p=t.encode,d=p===void 0?function(E){return E}:p,c=t.delimiter,u=c===void 0?"/#?":c,g=t.endsWith,v=g===void 0?"":g,k="[".concat(J(v),"]|$"),_="[".concat(J(u),"]"),A=r?"^":"",H=0,R=o;H<R.length;H++){var w=R[H];if(typeof w=="string")A+=J(d(w));else{var B=J(d(w.prefix)),N=J(d(w.suffix));if(w.pattern)if(e&&e.push(w),B||N)if(w.modifier==="+"||w.modifier==="*"){var T=w.modifier==="*"?"?":"";A+="(?:".concat(B,"((?:").concat(w.pattern,")(?:").concat(N).concat(B,"(?:").concat(w.pattern,"))*)").concat(N,")").concat(T)}else A+="(?:".concat(B,"(").concat(w.pattern,")").concat(N,")").concat(w.modifier);else{if(w.modifier==="+"||w.modifier==="*")throw new TypeError('Can not repeat "'.concat(w.name,'" without a prefix and suffix'));A+="(".concat(w.pattern,")").concat(w.modifier)}else A+="(?:".concat(B).concat(N,")").concat(w.modifier)}}if(s)n||(A+="".concat(_,"?")),A+=t.endsWith?"(?=".concat(k,")"):"$";else{var re=o[o.length-1],C=typeof re=="string"?_.indexOf(re[re.length-1])>-1:re===void 0;n||(A+="(?:".concat(_,"(?=").concat(k,"))?")),C||(A+="(?=".concat(_,"|").concat(k,")"))}return new RegExp(A,st(t))}function Ut(o,e,t){return o instanceof RegExp?Bi(o,e):Array.isArray(o)?zi(o,e,t):Ui(o,e,t)}function Z(o){return typeof o=="object"&&!!o}function ve(o){return typeof o=="function"}function q(o){return typeof o=="string"}function Te(o=[]){return Array.isArray(o)?o:[o]}function Y(o){return`[Vaadin.Router] ${o}`}class qt extends Error{constructor(t){super(Y(`Page not found (${t.pathname})`));x(this,"code");x(this,"context");this.context=t,this.code=404}}const ne=Symbol("NotFoundResult");function Ht(o){return new qt(o)}function Ft(o){return(Array.isArray(o)?o[0]:o)??""}function Pe(o){return Ft(o==null?void 0:o.path)}function Hi(o){return Array.isArray(o)&&o.length>0?o:void 0}const Be=new Map;Be.set("|false",{keys:[],pattern:/(?:)/u});function xt(o){try{return decodeURIComponent(o)}catch{return o}}function Fi(o,e,t=!1,i=[],n){const a=`${o}|${String(t)}`,r=Ft(e);let l=Be.get(a);if(!l){const d=[];l={keys:d,pattern:Ut(o,d,{end:t,strict:o===""})},Be.set(a,l)}const s=l.pattern.exec(r);if(!s)return null;const p={...n};for(let d=1;d<s.length;d++){const c=l.keys[d-1],u=c.name,g=s[d];(g!==void 0||!Object.hasOwn(p,u))&&(c.modifier==="+"||c.modifier==="*"?p[u]=g?g.split(/[/?#]/u).map(xt):[]:p[u]=g&&xt(g))}return{keys:[...i,...l.keys],params:p,path:s[0]}}var Vi=Fi;function Vt(o,e,t,i,n){let a,r,l=0,s=Pe(o);return s.startsWith("/")&&(t&&(s=s.substring(1)),t=!0),{next(p){if(o===p)return{done:!0,value:void 0};o.__children??(o.__children=Hi(o.children));const d=o.__children??[],c=!o.__children&&!o.children;if(!a&&(a=Vi(s,e,c,i,n),a))return{value:{keys:a.keys,params:a.params,path:a.path,route:o}};if(a&&d.length>0)for(;l<d.length;){if(!r){const g=d[l];g.parent=o;let v=a.path.length;v>0&&e.charAt(v)==="/"&&(v+=1),r=Vt(g,e.substring(v),t,a.keys,a.params)}const u=r.next(p);if(!u.done)return{done:!1,value:u.value};r=null,l+=1}return{done:!0,value:void 0}}}}var Ki=Vt;function Ji(o){if(ve(o.route.action))return o.route.action(o)}function Gi(o,e){let t=o;for(;t;)if(t=t.parent,t===e)return!0;return!1}function Wi(o){return!!o&&typeof o=="object"&&"next"in o&&"params"in o&&"result"in o&&"route"in o}class Yi extends Error{constructor(t,i){let n=`Path '${t.pathname}' is not properly resolved due to an error.`;const a=Pe(t.route);a&&(n+=` Resolution had failed on route: '${a}'`);super(n,i);x(this,"code");x(this,"context");this.code=i==null?void 0:i.code,this.context=t}warn(){console.warn(this.message)}}function Xi(o,e){var n;const{path:t,route:i}=e;if(i&&!i.__synthetic){const a={path:t,route:i};if(i.parent&&o.chain)for(let r=o.chain.length-1;r>=0&&o.chain[r].route!==i.parent;r--)o.chain.pop();(n=o.chain)==null||n.push(a)}}var ee,I;class Kt{constructor(e,{baseUrl:t="",context:i,errorHandler:n,resolveRoute:a=Ji}={}){x(this,"baseUrl");M(this,ee);x(this,"errorHandler");x(this,"resolveRoute");M(this,I);if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t,this.errorHandler=n,this.resolveRoute=a,Array.isArray(e)?P(this,I,{__children:e,__synthetic:!0,action:()=>{},path:""}):P(this,I,{...e,parent:void 0}),P(this,ee,{...i,hash:"",async next(){return ne},params:{},pathname:"",resolver:this,route:b(this,I),search:"",chain:[]})}get root(){return b(this,I)}get context(){return b(this,ee)}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...b(this,I).__children??[]]}removeRoutes(){b(this,I).__children=[]}async resolve(e){const t=this,i={...b(this,ee),...q(e)?{pathname:e}:e,next:p},n=Ki(b(this,I),this.__normalizePathname(i.pathname)??i.pathname,!!this.baseUrl),a=this.resolveRoute;let r=null,l=null,s=i;async function p(d=!1,c=(g=>(g=r==null?void 0:r.value)==null?void 0:g.route)(),u){var _,A;const v=u===null?(_=r==null?void 0:r.value)==null?void 0:_.route:void 0;if(r=l??n.next(v),l=null,!d&&(r.done||!Gi(r.value.route,c)))return l=r,ne;if(r.done)throw Ht(i);s={...i,params:r.value.params,route:r.value.route,chain:(A=s.chain)==null?void 0:A.slice()},Xi(s,r.value);const k=await a(s);return k!=null&&k!==ne?(s.result=Wi(k)?k.result:k,P(t,ee,s),s):await p(d,c,k)}try{return await p(!0,b(this,I))}catch(d){const c=d instanceof qt?d:new Yi(s,{code:500,cause:d});if(this.errorHandler)return s.result=this.errorHandler(c),s;throw d}}setRoutes(e){b(this,I).__children=[...Te(e)]}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=e.startsWith("/")?new URL(t).origin+e:`./${e}`,n=new URL(i,t).href;if(n.startsWith(t))return n.slice(t.length)}addRoutes(e){return b(this,I).__children=[...b(this,I).__children??[],...Te(e)],this.getRoutes()}}ee=new WeakMap,I=new WeakMap;function Jt(o,e,t,i){var a;const n=e.name??(i==null?void 0:i(e));if(n&&(o.has(n)?(a=o.get(n))==null||a.push(e):o.set(n,[e])),Array.isArray(t))for(const r of t)r.parent=e,Jt(o,r,r.__children??r.children,i)}function wt(o,e){const t=o.get(e);if(t){if(t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t[0]}}function Zi(o,e={}){if(!(o instanceof Kt))throw new TypeError("An instance of Resolver is expected");const t=new Map,i=new Map;return(n,a)=>{let r=wt(i,n);if(!r&&(i.clear(),Jt(i,o.root,o.root.__children,e.cacheKeyProvider),r=wt(i,n),!r))throw new Error(`Route "${n}" not found`);let l=r.fullPath?t.get(r.fullPath):void 0;if(!l){let d=Pe(r),c=r.parent;for(;c;){const v=Pe(c);v&&(d=`${v.replace(/\/$/u,"")}/${d.replace(/^\//u,"")}`),c=c.parent}const u=rt(d),g=Object.create(null);for(const v of u)q(v)||(g[v.name]=!0);l={keys:g,tokens:u},t.set(d,l),r.fullPath=d}let p=zt(l.tokens,{encode:encodeURIComponent,...e})(a)||"/";if(e.stringifyQueryParams&&a){const d={};for(const[u,g]of Object.entries(a))!(u in l.keys)&&g&&(d[u]=g);const c=e.stringifyQueryParams(d);c&&(p+=c.startsWith("?")?c:`?${c}`)}return p}}var Qi=Zi;const en=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,_e=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function tn(){function o(){return!0}return Gt(o)}function nn(){try{return on()?!0:an()?_e?!rn():!tn():!1}catch{return!1}}function on(){return localStorage.getItem("vaadin.developmentmode.force")}function an(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function rn(){return!!(_e&&Object.keys(_e).map(e=>_e[e]).filter(e=>e.productionMode).length>0)}function Gt(o,e){if(typeof o!="function")return;const t=en.exec(o.toString());if(t)try{o=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return o(e)}window.Vaadin=window.Vaadin||{};const yt=function(o,e){if(window.Vaadin.developmentMode)return Gt(o,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=nn());function sn(){/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}const ln=function(){if(typeof yt=="function")return yt(sn)};function cn(o,e=window.Vaadin??(window.Vaadin={})){e.registrations??(e.registrations=[]),e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}cn();ln();const dn=o=>{const e=getComputedStyle(o).getPropertyValue("animation-name");return e&&e!=="none"},pn=(o,e)=>{const t=()=>{o.removeEventListener("animationend",t),e()};o.addEventListener("animationend",t)};async function hn(o,e){return o.classList.add(e),await new Promise(t=>{if(dn(o)){const i=o.getBoundingClientRect(),n=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;o.setAttribute("style",`position: absolute; ${n}`),pn(o,()=>{o.classList.remove(e),o.removeAttribute("style"),t()})}else o.classList.remove(e),t()})}var kt=hn;function Wt(o){if(!o||!q(o.path))throw new Error(Y('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!ve(o.action)&&!Array.isArray(o.children)&&!ve(o.children)&&!q(o.component)&&!q(o.redirect))throw new Error(Y(`Expected route config "${o.path}" to include either "component, redirect" or "action" function but none found.`));o.redirect&&["bundle","component"].forEach(e=>{e in o&&console.warn(Y(`Route config "${String(o.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))})}function _t(o){Te(o).forEach(e=>Wt(e))}function un({next:o,...e}){return e}function $e(o,e){const t=e.__effectiveBaseUrl;return t?new URL(o.replace(/^\//u,""),t).pathname:o}function Yt(o){return o.map(e=>e.path).reduce((e,t)=>t.length?`${e.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`:e,"")}function gn(o){return Yt(o.map(e=>e.route))}function D({chain:o=[],hash:e="",params:t={},pathname:i="",redirectFrom:n,resolver:a,search:r=""},l){const s=o.map(p=>p.route);return{baseUrl:(a==null?void 0:a.baseUrl)??"",getUrl:(p={})=>a?$e(Bt(gn(o))({...t,...p}),a):"",hash:e,params:t,pathname:i,redirectFrom:n,route:l??(Array.isArray(s)?s.at(-1):void 0)??null,routes:s,search:r,searchParams:new URLSearchParams(r)}}function $t(o,e){const t={...o.params};return{redirect:{from:o.pathname,params:t,pathname:e}}}function fn(o,e){if(e.location=D(o),o.chain){const t=o.chain.map(i=>i.route).indexOf(o.route);o.chain[t].element=e}return e}function Ae(o,e,...t){if(typeof o=="function")return o.apply(e,t)}function At(o,e,...t){return i=>i&&Z(i)&&("cancel"in i||"redirect"in i)?i:Ae(e==null?void 0:e[o],e,...t)}function mn(o,e){if(!Array.isArray(o)&&!Z(o))throw new Error(Y(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(o)}`));const t=Te(o);t.forEach(i=>Wt(i)),e.__children=t}function ge(o,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${o}`,{cancelable:o==="go",detail:e}))}function bn(o){if(typeof o!="object")return String(o);const[e="Unknown"]=/ (.*)\]$/u.exec(String(o))??[];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(o)}`:e}function vn(o){const{port:e,protocol:t}=o,a=t==="http:"&&e==="80"||t==="https:"&&e==="443"?o.hostname:o.host;return`${t}//${a}`}function St(o){if(o instanceof Element)return o.nodeName.toLowerCase()}function jt(o){if(o.defaultPrevented||o.button!==0||o.shiftKey||o.ctrlKey||o.altKey||o.metaKey)return;let e=o.target;const t=o instanceof MouseEvent?o.composedPath():o.path??[];for(let s=0;s<t.length;s++){const p=t[s];if("nodeName"in p&&p.nodeName.toLowerCase()==="a"){e=p;break}}for(;e&&e instanceof Node&&St(e)!=="a";)e=e.parentNode;if(!e||St(e)!=="a")return;const i=e;if(i.target&&i.target.toLowerCase()!=="_self"||i.hasAttribute("download")||i.hasAttribute("router-ignore")||i.pathname===window.location.pathname&&i.hash!==""||(i.origin||vn(i))!==window.location.origin)return;const{hash:a,pathname:r,search:l}=i;ge("go",{hash:a,pathname:r,search:l})&&o instanceof MouseEvent&&(o.preventDefault(),o.type==="click"&&window.scrollTo(0,0))}const xn={activate(){window.document.addEventListener("click",jt)},inactivate(){window.document.removeEventListener("click",jt)}};var wn=xn;function Et(o){if(o.state==="vaadin-router-ignore")return;const{hash:e,pathname:t,search:i}=window.location;ge("go",{hash:e,pathname:t,search:i})}const yn={activate(){window.addEventListener("popstate",Et)},inactivate(){window.removeEventListener("popstate",Et)}};var kn=yn;let Tt=[];const _n={CLICK:wn,POPSTATE:kn};function Pt(o=[]){Tt.forEach(e=>e.inactivate()),o.forEach(e=>e.activate()),Tt=o}const $n=256;function pe(){return{cancel:!0}}const Rt={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return ne}};var xe,le,we,te,G,ie,U,O,h,Xt,Zt,Se,ze,Qt,ei,Ue,qe,He,V,Fe,Ve,je,Ke,ti,ii,ni,oi,ai,ri,Je;class L extends Kt{constructor(t,i){const n=document.head.querySelector("base"),a=n==null?void 0:n.getAttribute("href");super([],{baseUrl:a?new URL(a,document.URL).href.replace(/[^/]*$/u,""):void 0,...i,resolveRoute:async r=>await m(this,h,Xt).call(this,r)});M(this,h);x(this,"location",D({resolver:this}));x(this,"ready",Promise.resolve(this.location));M(this,xe,new WeakSet);M(this,le,new WeakSet);M(this,we,m(this,h,Je).bind(this));M(this,te,0);M(this,G);x(this,"__previousContext");M(this,ie);M(this,U,null);M(this,O,null);Pt(Object.values(_n)),this.setOutlet(t),this.subscribe()}setOutlet(t){t&&m(this,h,Ve).call(this,t),P(this,G,t)}getOutlet(){return b(this,G)}async setRoutes(t,i=!1){return this.__previousContext=void 0,P(this,ie,void 0),_t(t),super.setRoutes(t),i||m(this,h,Je).call(this),await this.ready}addRoutes(t){return _t(t),super.addRoutes(t)}async render(t,i=!1){P(this,te,b(this,te)+1);const n=b(this,te),a={...Rt,...q(t)?{hash:"",search:"",pathname:t}:t,__renderId:n};return this.ready=m(this,h,Zt).call(this,a,i),await this.ready}subscribe(){window.addEventListener("vaadin-router-go",b(this,we))}unsubscribe(){window.removeEventListener("vaadin-router-go",b(this,we))}static setTriggers(...t){Pt(t)}urlForName(t,i){return b(this,ie)||P(this,ie,Qi(this,{cacheKeyProvider(n){return"component"in n&&typeof n.component=="string"?n.component:void 0}})),$e(b(this,ie).call(this,t,i??void 0),this)}urlForPath(t,i){return $e(Bt(t)(i??void 0),this)}static go(t){const{pathname:i,search:n,hash:a}=q(t)?new URL(t,"http://a"):t;return ge("go",{pathname:i,search:n,hash:a})}}xe=new WeakMap,le=new WeakMap,we=new WeakMap,te=new WeakMap,G=new WeakMap,ie=new WeakMap,U=new WeakMap,O=new WeakMap,h=new WeakSet,Xt=async function(t){const{route:i}=t;if(ve(i.children)){let a=await i.children(un(t));ve(i.children)||({children:a}=i),mn(a,i)}const n={component:a=>{const r=document.createElement(a);return b(this,le).add(r),r},prevent:pe,redirect:a=>$t(t,a)};return await Promise.resolve().then(async()=>{if(m(this,h,V).call(this,t))return await Ae(i.action,i,t,n)}).then(a=>{if(a!=null&&(typeof a=="object"||typeof a=="symbol")&&(a instanceof HTMLElement||a===ne||Z(a)&&"redirect"in a))return a;if(q(i.redirect))return n.redirect(i.redirect)}).then(a=>{if(a!=null)return a;if(q(i.component))return n.component(i.component)})},Zt=async function(t,i){var a;const{__renderId:n}=t;try{const r=await this.resolve(t),l=await m(this,h,Se).call(this,r);if(!m(this,h,V).call(this,l))return this.location;const s=this.__previousContext;if(l===s)return m(this,h,je).call(this,s,!0),this.location;if(this.location=D(l),i&&m(this,h,je).call(this,l,n===1),ge("location-changed",{router:this,location:this.location}),l.__skipAttach)return m(this,h,Ke).call(this,l,s),this.__previousContext=l,this.location;m(this,h,ti).call(this,l,s);const p=m(this,h,ri).call(this,l);if(m(this,h,ai).call(this,l),m(this,h,oi).call(this,l,s),await p,m(this,h,V).call(this,l))return m(this,h,ii).call(this),this.__previousContext=l,this.location}catch(r){if(n===b(this,te)){i&&m(this,h,je).call(this,this.context);for(const l of((a=b(this,G))==null?void 0:a.children)??[])l.remove();throw this.location=D(Object.assign(t,{resolver:this})),ge("error",{router:this,error:r,...t}),r}}return this.location},Se=async function(t,i=t){const n=await m(this,h,ze).call(this,i),r=n!==i?n:t,s=$e(Yt(n.chain??[]),this)===n.pathname,p=async(c,u=c.route,g)=>{const v=await c.next(!1,u,g);return v===null||v===ne?s?c:u.parent!=null?await p(c,u.parent,v):v:v},d=await p(n);if(d==null||d===ne)throw Ht(r);return d!==n?await m(this,h,Se).call(this,r,d):await m(this,h,Qt).call(this,n)},ze=async function(t){const{result:i}=t;if(i instanceof HTMLElement)return fn(t,i),t;if(i&&"redirect"in i){const n=await m(this,h,Fe).call(this,i.redirect,t.__redirectCount,t.__renderId);return await m(this,h,ze).call(this,n)}throw i instanceof Error?i:new Error(Y(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${bn(i)}". Double check the action return value for the route.`))},Qt=async function(t){return await m(this,h,ei).call(this,t).then(async i=>i===this.__previousContext||i===t?i:await m(this,h,Se).call(this,i))},ei=async function(t){const i=this.__previousContext??{},n=i.chain??[],a=t.chain??[];let r=Promise.resolve(void 0);const l=s=>$t(t,s);if(t.__divergedChainIndex=0,t.__skipAttach=!1,n.length){for(let s=0;s<Math.min(n.length,a.length)&&!(n[s].route!==a[s].route||n[s].path!==a[s].path&&n[s].element!==a[s].element||!m(this,h,He).call(this,n[s].element,a[s].element));t.__divergedChainIndex++,s++);if(t.__skipAttach=a.length===n.length&&t.__divergedChainIndex===a.length&&m(this,h,He).call(this,t.result,i.result),t.__skipAttach){for(let s=a.length-1;s>=0;s--)r=m(this,h,Ue).call(this,r,t,{prevent:pe},n[s]);for(let s=0;s<a.length;s++)r=m(this,h,qe).call(this,r,t,{prevent:pe,redirect:l},a[s]),n[s].element.location=D(t,n[s].route)}else for(let s=n.length-1;s>=t.__divergedChainIndex;s--)r=m(this,h,Ue).call(this,r,t,{prevent:pe},n[s])}if(!t.__skipAttach)for(let s=0;s<a.length;s++)s<t.__divergedChainIndex?s<n.length&&n[s].element&&(n[s].element.location=D(t,n[s].route)):(r=m(this,h,qe).call(this,r,t,{prevent:pe,redirect:l},a[s]),a[s].element&&(a[s].element.location=D(t,a[s].route)));return await r.then(async s=>{if(s&&Z(s)){if("cancel"in s&&this.__previousContext)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if("redirect"in s)return await m(this,h,Fe).call(this,s.redirect,t.__redirectCount,t.__renderId)}return t})},Ue=async function(t,i,n,a){const r=D(i);let l=await t;if(m(this,h,V).call(this,i)&&(l=At("onBeforeLeave",a.element,r,n,this)(l)),!(Z(l)&&"redirect"in l))return l},qe=async function(t,i,n,a){const r=D(i,a.route),l=await t;if(m(this,h,V).call(this,i))return At("onBeforeEnter",a.element,r,n,this)(l)},He=function(t,i){return t instanceof Element&&i instanceof Element?b(this,le).has(t)&&b(this,le).has(i)?t.localName===i.localName:t===i:!1},V=function(t){return t.__renderId===b(this,te)},Fe=async function(t,i=0,n=0){if(i>$n)throw new Error(Y(`Too many redirects when rendering ${t.from}`));return await this.resolve({...Rt,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:i+1,__renderId:n})},Ve=function(t=b(this,G)){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(Y(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))},je=function({pathname:t,search:i="",hash:n=""},a){if(window.location.pathname!==t||window.location.search!==i||window.location.hash!==n){const r=a?"replaceState":"pushState";window.history[r](null,document.title,t+i+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}},Ke=function(t,i){var a;let n=b(this,G);for(let r=0;r<(t.__divergedChainIndex??0);r++){const l=(a=i==null?void 0:i.chain)==null?void 0:a[r].element;if(l)if(l.parentNode===n)t.chain[r].element=l,n=l;else break}return n},ti=function(t,i){var r;m(this,h,Ve).call(this),m(this,h,ni).call(this);const n=m(this,h,Ke).call(this,t,i);P(this,U,[]),P(this,O,Array.from((n==null?void 0:n.children)??[]).filter(l=>b(this,xe).has(l)&&l!==t.result));let a=n;for(let l=t.__divergedChainIndex??0;l<(((r=t.chain)==null?void 0:r.length)??0);l++){const s=t.chain[l].element;s&&(a==null||a.appendChild(s),b(this,xe).add(s),a===n&&b(this,U).push(s),a=s)}},ii=function(){if(b(this,O))for(const t of b(this,O))t.remove();P(this,O,null),P(this,U,null)},ni=function(){if(b(this,O)&&b(this,U)){for(const t of b(this,U))t.remove();P(this,O,null),P(this,U,null)}},oi=function(t,i){var n;if(!(!(i!=null&&i.chain)||t.__divergedChainIndex==null))for(let a=i.chain.length-1;a>=t.__divergedChainIndex&&m(this,h,V).call(this,t);a--){const r=i.chain[a].element;if(r)try{const l=D(t);Ae(r.onAfterLeave,r,l,{},this)}finally{if((n=b(this,O))!=null&&n.includes(r))for(const l of r.children)l.remove()}}},ai=function(t){if(!(!t.chain||t.__divergedChainIndex==null))for(let i=t.__divergedChainIndex;i<t.chain.length&&m(this,h,V).call(this,t);i++){const n=t.chain[i].element;if(n){const a=D(t,t.chain[i].route);Ae(n.onAfterEnter,n,a,{},this)}}},ri=async function(t){var s,p;const i=(s=b(this,O))==null?void 0:s[0],n=(p=b(this,U))==null?void 0:p[0],a=[],{chain:r=[]}=t;let l;for(let d=r.length-1;d>=0;d--)if(r[d].route.animate){l=r[d].route.animate;break}if(i&&n&&l){const d=Z(l)&&l.leave?l.leave:"leaving",c=Z(l)&&l.enter?l.enter:"entering";a.push(kt(i,d)),a.push(kt(n,c))}return await Promise.all(a),t},Je=function(t){const{pathname:i,search:n,hash:a}=t instanceof CustomEvent?t.detail:window.location;q(this.__normalizePathname(i))&&(t!=null&&t.preventDefault&&t.preventDefault(),this.render({pathname:i,search:n,hash:a},!0))};const An=[{path:"/frontend-project-v2b_letsgo/",component:"kpn-home"},{path:"/frontend-project-v2b_letsgo/flexBoost",component:"flex-boost-information"},{path:"/frontend-project-v2b_letsgo/boost",component:"kpn-boost"},{path:"/frontend-project-v2b_letsgo/flex",component:"kpn-flex"},{path:"/frontend-project-v2b_letsgo/voting-advice",component:"kpn-voting-advice"},{path:"/frontend-project-v2b_letsgo/cao",component:"cao-information"},{path:"/frontend-project-v2b_letsgo/myKpn",component:"kpn-my-kpn"},{path:"/frontend-project-v2b_letsgo/admin/home",component:"kpn-request-home"},{path:"/frontend-project-v2b_letsgo/admin/requestBoost",component:"kpn-request-boost"},{path:"/logout",action:()=>{localStorage.removeItem("userId"),L.go("/frontend-project-v2b_letsgo/")}}],Ge="/kpn/assets/kpnLogo-B-j5dNAL.svg";class Sn{constructor(){this.language=localStorage.getItem("language")||"nl",this.translations={},this.subscribers=[]}async setLanguage(e){this.language=e,localStorage.setItem("language",this.language),this.translations={},this.notifySubscribers()}async _loadTranslations(e){try{const i=`/kpn/assets/json/translations/${this.language}/${e}.json`,n=await fetch(i);if(!n.ok){const r=await n.text();throw console.error("Translation load error:",{status:n.status,statusText:n.statusText,path:i,responseText:r}),new Error(`HTTP error! status: ${n.status}`)}const a=await n.text();if(!a||a.trim()==="")return console.error("Empty response received for:",i),{};try{return JSON.parse(a)}catch(r){return console.error("JSON parse error:",r),console.error("Received text:",a),{}}}catch(t){return console.error(`Failed to load translations for ${e}:`,t),{}}}subscribe(e){this.subscribers.push(e)}unsubscribe(e){this.subscribers=this.subscribers.filter(t=>t!==e)}notifySubscribers(){this.subscribers.forEach(e=>e())}createTranslationMixin(){return e=>{var t;return t=class extends e{constructor(){super(),this.translations={},this._languageChangeBound=this._handleLanguageChange.bind(this),F.subscribe(this._handleLanguageChange.bind(this))}async connectedCallback(){super.connectedCallback&&super.connectedCallback(),await this._loadTranslations()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),F.unsubscribe(this._languageChangeBound)}async _loadTranslations(){try{this.translations=await F._loadTranslations(this.translationPage),this.requestUpdate()}catch(i){console.error(`Failed to load ${this.translationPage} translations:`,i),this.translations={}}}async _handleLanguageChange(){await this._loadTranslations()}},x(t,"properties",{translations:{type:Object}}),t}}}const F=new Sn,si=F.createTranslationMixin();class li extends y{constructor(){super(),this.isMobileMenuOpen=!1}firstUpdated(e){super.firstUpdated();const t=localStorage.getItem("theme")||"light";document.documentElement.setAttribute("data-theme",t),this.shadowRoot.querySelectorAll(".theme-dropdown").forEach(l=>{l.value=t}),this.shadowRoot.querySelectorAll(".language-dropdown").forEach(l=>{l.value=F.language});const i=localStorage.getItem("sidebarState"),n=this.shadowRoot.querySelector(".sidebar"),a=this.shadowRoot.querySelector(".show-button"),r=this.shadowRoot.querySelector(".content");i==="hidden"?(n.style.left="-200px",r.style.marginLeft="-200px",a.classList.remove("hidden")):(n.style.left="0",r.style.marginLeft="0",a.classList.add("hidden"))}highlightActiveLink(e){this.shadowRoot.querySelectorAll("a[data-route]").forEach(i=>{i.getAttribute("data-route")===e?i.classList.add("active"):i.classList.remove("active")})}_toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen,this.isMobileMenuOpen?document.body.style.overflow="hidden":document.body.style.overflow=""}render(){return f`
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">

            <div class="layout">
                <button @click=${this._toggleMobileMenu} class="mobile-menu-button" aria-label="Toggle mobile menu">
                    <i class="fa-solid fa-bars"></i>
                </button>

                <aside class="mobile-sidebar ${this.isMobileMenuOpen?"open":""}">
                    <button @click=${this._toggleMobileMenu} class="mobile-close-button" aria-label="Close mobile menu">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <div class="mobile-sidebar-content">
                        <img src="${Ge}" alt="KPN Logo">
                        <nav class="mobile-nav">
                            <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/" href="">
                                <span class="icon-text">
                                    <i class="fas fa-house"></i> Home
                                </span>
                            </a>
                            <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/flexBoost" href="">
                                <span class="icon-text">
                                    <i class="fa-solid fa-book"></i> Uitleg
                                </span>
                            </a>
                            <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/boost" href="">
                                <span class="icon-text">
                                    <i class="fa-solid fa-rocket"></i> Boost
                                </span>
                            </a>
                            <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/flex" href="">
                                <span class="icon-text">
                                    <i class="fa-solid fa-handshake"></i> Flex
                                </span>
                            </a>
                            <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/voting-advice" href="">
                                <span class="icon-text">
                                    <i class="fa-solid fa-table-list"></i> Vragenlijst
                                </span>
                            </a>
                            <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/cao" href="">
                                <span class="icon-text">
                                    <i class="fa-solid fa-file-invoice"></i> CAO
                                </span>
                            </a>
                            <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/myKpn" href="">
                                <span class="icon-text">
                                    <i class="fa-solid fa-circle-user"></i> Mijn KPN
                                </span>
                            </a>
                            <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/admin/requestBoost" href="">
                                <span class="icon-text">
                                    <i class="fa-solid fa-lock"></i> Admin
                                </span>
                            </a>
                        </nav>
                        <div class="mobile-footer">
                            <div class="dropdowns-container">
                                <div class="dropdown-with-icon">
                                    <i class="fa-solid fa-language"></i>
                                    <select @change=${this._onLanguageChange} class="language-dropdown" aria-label="Kies een taal">
                                        <option value="nl">Nederlands</option>
                                        <option value="en">Engels</option>
                                    </select>
                                </div>

                                <div class="dropdown-with-icon">
                                    <i class="fa-solid fa-circle-half-stroke"></i>
                                    <select @change=${this._onThemeChange} class="theme-dropdown" aria-label="Kies een thema">
                                        <option value="light" selected>Light</option>
                                        <option value="dark">Dark</option>
                                    </select>
                                </div>
                            </div>

                            <button @click=${this._onLogout} type="button" class="logout-button">
                                <span class="icon-text">
                                    <i class="fa-solid fa-right-from-bracket"></i> Uitloggen
                                </span>
                            </button>
                        </div>
                    </div>
                </aside>

                <aside class="sidebar">
                    <button @click=${this._closeAside} class="close-button" aria-label="Sluit menu">
                        <i class="fa-solid fa-caret-left"></i>
                    </button>
                    <button @click=${this._showAside} class="show-button hidden" aria-label="Open menu">
                        <i class="fa-solid fa-caret-right"></i>
                    </button>
                    <img src="${Ge}" alt="KPN Logo">

                    <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/" href="">
                        <span class="icon-text">
                            <i class="fas fa-house"></i> Home
                        </span>
                    </a>
                    <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/flexBoost" href="">
                        <span class="icon-text">
                            <i class="fa-solid fa-book"></i> Uitleg
                        </span>
                    </a>
                    <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/boost" href="">
                        <span class="icon-text">
                            <i class="fa-solid fa-rocket"></i> Boost
                        </span>
                    </a>
                    <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/flex" href="">
                        <span class="icon-text">
                            <i class="fa-solid fa-handshake"></i> Flex
                        </span>
                    </a>
                    <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/voting-advice" href="">
                        <span class="icon-text">
                            <i class="fa-solid fa-table-list"></i> Vragenlijst
                        </span>
                    </a>
                    <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/cao" href="">
                        <span class="icon-text">
                            <i class="fa-solid fa-file-invoice"></i> CAO
                        </span>
                    </a>
                    <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/myKpn" href="">
                        <span class="icon-text">
                            <i class="fa-solid fa-circle-user"></i> Mijn KPN
                        </span>
                    </a>
                    <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/admin/requestBoost" href="">
                        <span class="icon-text">
                            <i class="fa-solid fa-lock"></i> Admin
                        </span>
                    </a>

                    <div class="MijnKPN">
                        <div class="dropdown-with-icon">
                            <i class="fa-solid fa-language"></i>
                            <select @change=${this._onLanguageChange} class="language-dropdown" aria-label="Kies een taal">
                                <option value="nl">Nederlands</option>
                                <option value="en">Engels</option>
                            </select>
                        </div>

                        <div class="dropdown-with-icon">
                            <i class="fa-solid fa-circle-half-stroke"></i>
                            <select @change=${this._onThemeChange} class="theme-dropdown" aria-label="Kies een thema">
                                <option value="light" selected>Light</option>
                                <option value="dark">Dark</option>
                            </select>
                        </div>

                        <button @click=${this._onLogout} type="button" class="logout-button">
                            <span class="icon-text">
                                <i class="fa-solid fa-right-from-bracket"></i> Uitloggen
                            </span>
                        </button>
                    </div>

                    <div aria-live="polite" aria-atomic="true" id="live-region"
                       style="position: absolute; left: -9999px;"></div>
                </aside>
                
                <div id="outlet" class="content"></div>
            </div>
        `}_navigate(e){e.preventDefault();const t=e.currentTarget.getAttribute("data-route");L.go(t),this.highlightActiveLink(t),this.isMobileMenuOpen&&this._toggleMobileMenu();const i=this.shadowRoot.querySelector("#live-region");if(i){let n="";switch(t){case"/frontend-project-v2b_letsgo/":n="op de home pagina";break;case"/frontend-project-v2b_letsgo/flexBoost":n="op de flex en boest pagina";break;case"/frontend-project-v2b_letsgo/boost":n="op de boest pagina";break;case"/frontend-project-v2b_letsgo/flex":n="op de flex pagina";break;case"/frontend-project-v2b_letsgo/voting-advice":n="op het vragenlijst pagina";break;case"/frontend-project-v2b_letsgo/cao":n="op de CAO pagina";break;case"/frontend-project-v2b_letsgo/myKpn":n="op mijn KPN pagina";break;default:n="op een pagina"}i.textContent=n}}_onLogout(){localStorage.removeItem("userId"),window.location.reload()}_hideLinks(){this.shadowRoot.querySelectorAll(".sidebar a").forEach(i=>i.classList.add("hidden")),this.shadowRoot.querySelectorAll(".sidebar button").forEach(i=>i.classList.add("hidden"))}_showLinks(){this.shadowRoot.querySelectorAll(".sidebar a").forEach(i=>i.classList.remove("hidden")),this.shadowRoot.querySelectorAll(".sidebar button").forEach(i=>i.classList.remove("hidden"))}_closeAside(){const e=this.shadowRoot.querySelector(".sidebar");e.style.left="-200px",localStorage.setItem("sidebarState","hidden"),this._hideLinks(),this.shadowRoot.querySelector(".show-button").classList.remove("hidden");const i=this.shadowRoot.querySelector(".content");i.style.marginLeft="-200px"}_showAside(){const e=this.shadowRoot.querySelector(".sidebar");e.style.left="0",localStorage.setItem("sidebarState","shown"),this._showLinks(),this.shadowRoot.querySelector(".show-button").classList.add("hidden");const i=this.shadowRoot.querySelector(".content");i.style.marginLeft="0"}_onThemeChange(e){const t=e.target.value;document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t)}_onLanguageChange(e){const t=e.target.value;F.setLanguage(t)}static get styles(){return j`
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            .layout {
                display: flex;
                min-height: 100vh;
            }

            .sidebar {
                position: relative;
                left: 0;
                width: 200px;
                min-width: 200px;
                max-width: 200px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                gap: 10px;
                padding: 20px 10px;
                background-color: var(--kpn-light-gray);
                box-shadow: 0 8px 10px rgba(0, 0, 0, 0.4);
                transition: left 0.3s ease;
                overflow: visible;
                z-index: 999;
            }

            .sidebar .hidden {
                display: none;
                transition: margin-left 0.3s ease;
            }

            .content {
                flex-grow: 1;
                overflow: auto;
                box-sizing: border-box;
                transition: margin-left 0.3s ease;
            }

            .close-button,
            .show-button {
                position: absolute;
                right: -20px;
                top: 4px;
                color: var(--kpn-black);
                background-color: var(--kpn-white);
                border: none;
                font-size: 20px;
                font-weight: bold;
                cursor: pointer;
                padding: 5px;
                border-bottom-right-radius: 7px;
                border-top-right-radius: 7px;
                max-width: 40px;
            }

            .sidebar a {
                color: var(--kpn-black);
                width: 100%;
                text-decoration: none;
                font-size: 25px;
                display: flex;
                align-items: center;
                font-weight: bold;
                margin-bottom: 5px;
            }

            .sidebar a:hover {
                cursor: pointer;
                color: var(--kpn-green);
            }

            .sidebar a:focus {
                color: var(--kpn-green);
                outline: 2px solid var(--kpn-green);
                border-radius: 7px;
            }

            .sidebar a.active {
                color: var(--kpn-green);
            }

            .sidebar img {
                width: 100%;
                height: auto;
                margin-bottom: 15px;
            }

            .sidebar a i {
                min-width: 30px;
                text-align: center;
                margin-right: 1px;
            }

            .MijnKPN {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 15px;
                margin-top: auto;
            }

            .MijnKPN a {
                text-decoration: underline;
                font-size: 15px;
            }

            .theme-dropdown,
            .language-dropdown,
            .MijnKPN button {
                width: 180px;
                margin: 0 auto;
                text-align: center;
            }

            .theme-dropdown,
            .language-dropdown {
                font-size: 15px;
                border: 2px solid var(--kpn-blue);
                border-radius: 5px;
                padding: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease, color 0.3s ease;
                margin: 0;
            }

            .theme-dropdown:focus,
            .language-dropdown:focus {
                outline: 2px solid var(--kpn-green);
            }

            .theme-dropdown:hover,
            .language-dropdown:hover {
                border-color: var(--kpn-green-hover);
            }

            .MijnKPN button {
                margin: 0px;
                padding: 10px 24px;
                background-color: var(--kpn-blue);
                color: white;
                font-size: 16px;
                font-weight: bold;
                border-radius: 8px;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .MijnKPN button:hover {
                background-color: var(--kpn-blue-hover);
                cursor: pointer;
            }

            .MijnKPN button:focus {
                outline: 2px solid var(--kpn-green);
                border-radius: 8px;
                color: var(--kpn-black);
                background-color: var(--kpn-blue-hover);
            }
            
            .dropdown-with-icon {
                display: flex;
                align-items: center;
                gap: 5px;          
                width: 180px;      
                margin: 0 auto;
            }

            .dropdown-with-icon i {
                min-width: 30px;    
                text-align: center;
                margin-right: 1px;  
                font-size: 20px;
                color: var(--kpn-black);
            }

            .dropdown-with-icon select {
                margin: 0;
                width: 100%;      
            }

            .mobile-menu-button {
                display: none;
                position: fixed;
                top: 1rem;
                left: 1rem;
                z-index: 1000;
                background: var(--kpn-light-gray);
                color: var(--kpn-black);
                border: none;
                border-radius: 0.5rem;
                padding: 0.6rem;
                font-size: 1.25rem;
                cursor: pointer;
                transition: background-color 0.3s ease;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            .mobile-menu-button:hover {
                background: #e0e0e0;
            }

            .mobile-sidebar {
                display: none;
                position: fixed;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: var(--kpn-light-gray);
                z-index: 1001;
                transition: left 0.3s ease;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
            }

            .mobile-sidebar.open {
                left: 0;
            }

            .mobile-close-button {
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: transparent;
                border: none;
                color: var(--kpn-black);
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
            }

            .mobile-sidebar-content {
                padding: 1.5rem;
                display: flex;
                flex-direction: column;
                min-height: 100%;
                max-height: 100%;
                box-sizing: border-box;
                align-items: center;
                overflow-y: auto;
            }

            .mobile-sidebar-content img {
                width: 160px;
                height: auto;
                margin: 0 auto 1.5rem;
            }

            .mobile-nav {
                margin-top: 1rem;
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                width: 100%;
                align-items: center;
                flex: 1;
                overflow-y: auto;
            }

            .mobile-nav a {
                color: var(--kpn-black);
                text-decoration: none;
                font-size: 1.6rem;
                font-weight: bold;
                padding: 0.75rem;
                border-radius: 0.5rem;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                max-width: 300px;
                text-align: center;
            }

            .mobile-nav a:hover {
                color: var(--kpn-green);
                background: transparent;
            }

            .mobile-nav a.active {
                color: var(--kpn-green);
            }

            .mobile-nav a i {
                margin-right: 12px;
                font-size: 1.4rem;
            }

            .mobile-footer {
                margin-top: auto;
                padding: 0.75rem 0;
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                align-items: center;
            }

            .mobile-footer .dropdown-with-icon {
                width: 48%;
            }

            .mobile-footer .dropdown-with-icon i {
                font-size: 1rem;
            }

            .mobile-footer .dropdown-with-icon select {
                width: 100%;
                font-size: 0.9rem;
                padding: 0.3rem;
                border: 2px solid var(--kpn-blue);
                border-radius: 5px;
            }

            .mobile-footer button {
                width: 100%;
                max-width: 300px;
                padding: 8px 16px;
                background-color: var(--kpn-blue);
                color: white;
                font-size: 0.95rem;
                font-weight: bold;
                border-radius: 8px;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 0.25rem;
                cursor: pointer;
            }

            .mobile-footer .dropdowns-container {
                display: flex;
                justify-content: space-between;
                width: 100%;
                max-width: 300px;
                padding: 0 0.5rem;
            }

            @media (max-width: 700px) {
                .sidebar {
                    display: none;
                }

                .mobile-menu-button {
                    display: block;
                }

                .mobile-sidebar {
                    display: block;
                }

                .content {
                    margin-left: 0 !important;
                    padding-top: 4rem;
                }
            }

            @media (max-height: 700px) {
                .mobile-nav {
                    gap: 0.5rem;
                }
                
                .mobile-nav a {
                    padding: 0.5rem;
                    font-size: 1.4rem;
                }

                .mobile-sidebar-content img {
                    width: 140px;
                    margin-bottom: 1rem;
                }

                .mobile-footer {
                    padding: 0.5rem 0;
                }
            }
        `}}x(li,"properties",{isMobileMenuOpen:{type:Boolean}});window.customElements.define("kpn-sidebar",li);const jn=[{id:1,firstName:"Jeff",lastName:"Jansen",email:"test@test.nl",password:"test",salary:55e3,currency:"EUR",language:"Dutch",country:"Netherlands",city:"Amsterdam",address:"Keizersgracht 123",postalCode:"1015 CJ",phone:31201234567,avatar:"",birthdate:"1990-04-15T00:00:00Z",createdAt:"2023-01-10T08:30:00Z",updatedAt:"2023-07-15T14:45:00Z",deletedAt:null},{id:2,firstName:"Liam",lastName:"Verhoeven",email:"hu@hu.com",password:"test123",salary:62e3,currency:"EUR",language:"Dutch",country:"Netherlands",city:"Rotterdam",address:"Coolsingel 456",postalCode:"3011 AD",phone:31209876543,avatar:"",birthdate:"1985-11-23T00:00:00Z",createdAt:"2022-05-12T10:20:00Z",updatedAt:"2023-08-01T16:00:00Z",deletedAt:null},{id:3,firstName:"Sofia",lastName:"De Vries",email:"sofia.devries@example.com",password:"sofiaPass789",salary:48e3,currency:"EUR",language:"Dutch",country:"Netherlands",city:"Utrecht",address:"Oudegracht 789",postalCode:"3511 AC",phone:31207654321,avatar:"",birthdate:"1992-07-08T00:00:00Z",createdAt:"2021-03-19T09:15:00Z",updatedAt:"2023-05-05T12:00:00Z",deletedAt:null},{id:4,firstName:"Noah",lastName:"Bakker",email:"noah.bakker@example.com",password:"noahSecure456",salary:67e3,currency:"EUR",language:"Dutch",country:"Netherlands",city:"The Hague",address:"Lange Voorhout 10",postalCode:"2514 ED",phone:31205432109,avatar:"",birthdate:"1980-02-20T00:00:00Z",createdAt:"2020-09-15T14:30:00Z",updatedAt:"2023-06-10T18:30:00Z",deletedAt:null},{id:5,firstName:"Isabella",lastName:"Kuipers",email:"isabella.kuipers@example.com",password:"isaPass999",salary:52e3,currency:"EUR",language:"Dutch",country:"Netherlands",city:"Eindhoven",address:"Strijp-S 25",postalCode:"5617 AT",phone:31206543210,avatar:"",birthdate:"1995-09-12T00:00:00Z",createdAt:"2023-02-01T11:45:00Z",updatedAt:"2023-08-15T09:20:00Z",deletedAt:"2023-09-01T10:00:00Z"}],En=jn;class ci extends y{handleSubmit(e){e.preventDefault();const t=e.target,i=t.employee.value,n=t.password.value;t.remember.checked,(!i||!n)&&alert("Please fill in all required fields.");const a=En.find(r=>r.email===i);if(!a){alert("Onjuiste inloggegevens.");return}a.password===n?(localStorage.setItem("userId",a.id),window.location.reload()):alert("Onjuiste inloggegevens.")}render(){return f`
            <div class="container">
                <main class="login">
                    <h1>Log in met je account</h1>
                    <div class="white-block">
                        <form @submit="${this.handleSubmit}" class="form-login">
                            <label for="employee">Email</label>
                            <br>
                            <input type="email" id="employee" name="employee" placeholder="test@test.nl" required/>
                            <br><br>
                            <label for="password">Wachtwoord</label>
                            <br>
                            <input type="password" id="password" name="password" placeholder="********" required/>
                            <br>
                            <div class="extra-options">
                                <div class="remember-me">
                                    <input type="checkbox" id="remember" name="remember"/>
                                    <label for="remember">Onthoud mij</label>
                                </div>
                                <a href="#" class="password-forget">Wachtwoord vergeten?</a>
                            </div>

                            <button type="submit">inloggen</button>
                        </form>
                        <div class="logo">
                            <img src="${Ge}" alt="KPN Logo">
                        </div>
                    </div>
                </main>
            </div>`}}x(ci,"styles",j`
        .container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login {
            width: 60%;
        }

        .white-block {
            color: var(--kpn-black);
            background-color: var(--kpn-white);
            width: 100%;
            margin-top: 20px;
            padding: 20px;
            display: flex;
            border-radius: 10px;
        }

        .form-login {
            width: 50%;
        }

        .form-login input:not([type="checkbox"]) {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid var(--kpn-black);
            border-radius: 5px;
        }

        .extra-options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
        }

        .remember-me {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 5px;
            accent-color: var(--kpn-green);
            width: fit-content;
        }

        .password-forget {
            text-align: right;
        }

        button[type="submit"] {
            font-size: 1.2rem;
            margin-top: 10px;
            width: 100%;
            padding: 10px;
            background-color: var(--kpn-blue);
            color: var(--kpn-white);
            border: none;
            border-radius: 9999px;
            cursor: pointer;
        }

        .logo {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .logo img {
            width: 100%;
            height: auto;
        }

        @media (max-width: 768px) {
            .white-block {
                flex-direction: column;
            }

            .form-login {
                width: 100%;
            }

            .logo {
                display: none;
            }
        }

        @media (max-width: 576px) {
            .login {
                width: 90%;
            }
        }

        @media (max-width: 400px) {
            .extra-options {
                flex-direction: column;
                gap: 20px;
            }
        }
    `);window.customElements.define("kpn-login",ci);class We extends y{constructor(){super(),this.currentTip=0,this.tips=[],this.progress=0,this._handleLanguageChange=this._handleLanguageChange.bind(this)}connectedCallback(){super.connectedCallback(),F.subscribe(this._handleLanguageChange),this._loadTips()}disconnectedCallback(){F.unsubscribe(this._handleLanguageChange),super.disconnectedCallback()}async _handleLanguageChange(){await this._loadTips(),this.requestUpdate()}async _loadTips(){try{const e=await F._loadTranslations("quickTips");let t=e;if(e&&e.tips&&(t=e.tips),!t||!Array.isArray(t))throw new Error("Invalid tips data structure");this.tips=t.flatMap(i=>!i.tips||!Array.isArray(i.tips)?(console.warn("Invalid category structure:",i),[]):i.tips.map(n=>({...n,category:i.category}))),this.tips.length>0&&!this.initialized&&(this.shuffleTips(),this.initialized=!0,this.setupIntervals())}catch(e){console.error("Error loading tips:",e),this.tips=[{category:"Default",text:"Tips are currently unavailable"}],this.requestUpdate()}}shuffleTips(){for(let e=this.tips.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[this.tips[e],this.tips[t]]=[this.tips[t],this.tips[e]]}}setupIntervals(){this.tipInterval&&clearInterval(this.tipInterval),this.progressInterval&&clearInterval(this.progressInterval);const e=3e4,t=100,n=100/(e/t);this.tipInterval=setInterval(()=>{this.currentTip=(this.currentTip+1)%this.tips.length,this.progress=0,this.requestUpdate()},e),this.progressInterval=setInterval(()=>{this.progress=Math.min(this.progress+n,100),this.requestUpdate()},t)}render(){if(this.tips.length===0)return f`<p>Loading tips...</p>`;const e=this.tips[this.currentTip];return f`
            <div class="quick-tips-container">
                <h3 class="tip-category">${e.category}</h3>
                <p class="tip-text">${e.text}</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${this.progress}%"></div>
                </div>
            </div>
        `}updateContent(){const e=document.querySelector(this.containerSelector);if(!e){console.error("Quick tips container not found");return}if(this.tips.length>0&&this.currentTip<this.tips.length){const t=this.tips[this.currentTip];if(t){const i=e.querySelector(".tip-category"),n=e.querySelector(".tip-text");i&&n&&(i.textContent=t.category||"",n.textContent=t.text||"")}}}updateProgress(){this.progressFill&&(this.progressFill.style.width=`${this.progress/100*100}%`)}destroy(){clearInterval(this.tipInterval),clearInterval(this.progressInterval);const e=document.querySelector(this.containerSelector);e&&(e.innerHTML="")}}x(We,"properties",{tips:{type:Array},currentTip:{type:Number},progress:{type:Number}}),x(We,"styles",j`
        .quick-tips-container {
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
    }

    .tip-category {
        text-align: center;
        margin: 0 15px;
        color: var(--kpn-green);
        font-size: 1.2rem;
        font-weight: bold;
    }

    .tip-text {
        text-align: center;
        margin: 15px 0;
        color: var(--kpn-black);
        font-size: 1rem;
        line-height: 1.5;
    }

    .progress-bar {
        height: 4px;
        background: #e0e0e0;
        border-radius: 2px;
        margin-top: 15px;
    }

    .progress-fill {
        height: 100%;
        background: var(--kpn-green);
        width: 0;
        transition: width 0.3s ease;
        border-radius: 2px;
    }
    `);customElements.get("quick-tips")||customElements.define("quick-tips",We);class Tn extends si(y){get translationPage(){return"homepage"}render(){var e,t,i,n,a,r,l,s,p,d,c,u,g,v,k,_,A,H,R,w,B,N;return f`
            <div class="container">
                <main class="homepage">
                    <section class="homepage-section">
                        <div class="header-title">
                            <h1>${((e=this.translations)==null?void 0:e.title)||"Mijn CAO"}</h1>
                        </div>
                        <div class="header-description">
                            <p class="description-text">
                                ${((t=this.translations)==null?void 0:t.description)||"Hier vind je meer informatie over de introductie van de nieuwe CAO en de keuzes die je kunt maken binnen de KPN Flex- en Boost-plannen."}
                            </p>
                        </div>
                        <div class="cards">
                            <article class="card">
                                <h2 class="card-title">${((a=(n=(i=this.translations)==null?void 0:i.sections)==null?void 0:n.flex)==null?void 0:a.title)||"FLEX"}</h2>
                                <ul class="card-list">
                                    ${(((s=(l=(r=this.translations)==null?void 0:r.sections)==null?void 0:l.flex)==null?void 0:s.listItems)||["Maandelijkse uitbetaling van vakantiegeld (8%)en dertiende maand (2%, vanaf januari 2025 6,33%)","Deelname van KPN plan of KPN salesplan/retail plan","Aanschaf virtuele aandelen","Extra pensioenbijdrage (vanaf 2026)"]).map(T=>f`
                                        <li>${T}</li>
                                        <br>
                                    `)}
                                </ul>
                                <div class="card-button">
                                    <a @click="${T=>{T.preventDefault(),L.go("/frontend-project-v2b_letsgo/flexBoost")}}" class="button">${((c=(d=(p=this.translations)==null?void 0:p.sections)==null?void 0:d.flex)==null?void 0:c.button)||"Lees meer"}</a>
                                </div>
                            </article>
                            <article class="card">
                                <h2 class="card-title">${((v=(g=(u=this.translations)==null?void 0:u.sections)==null?void 0:g.boost)==null?void 0:v.title)||"BOOST"}</h2>
                                <ul class="card-list">
                                    ${(((A=(_=(k=this.translations)==null?void 0:k.sections)==null?void 0:_.boost)==null?void 0:A.listItems)||["Investeer €1250 in fysiek en mentaal welzijn (per jaar)","Investeer €5000 in verduurzaming van je woning (per 3 jaar)","Los tot €5000 van je studieschuld af (per 2 jaar)","Spaar voor sabbatical van 2 maanden (per 5 jaar)","Vakbondcontributie"]).map(T=>f`
                                        <li>${T}</li>
                                        <br>
                                    `)}
                                </ul>
                                <div class="card-button">
                                    <a @click="${T=>{T.preventDefault(),L.go("/frontend-project-v2b_letsgo/flexBoost")}}" class="button">${((w=(R=(H=this.translations)==null?void 0:H.sections)==null?void 0:R.boost)==null?void 0:w.button)||"Lees meer"}</a>
                                </div>
                            </article>
                        </div>
                        <div class="questionnaire">
                            <h2>${((B=this.translations)==null?void 0:B.questionnaire)||"Hulp bij je keuze nodig? Doe deze vragenlijst!"}</h2>
                            <div class="card-button">
                                <a @click="${T=>{T.preventDefault(),L.go("/frontend-project-v2b_letsgo/voting-advice")}}" class="button">${((N=this.translations)==null?void 0:N.questionnaireButton)||"Vragenlijst invullen"}</a>
                            </div>
                        </div>
                    </section>

                    <section class="tips-section">
                        <div class="quick-tips-content">
                            <quick-tips></quick-tips>
                        </div>
                    </section>
                </main>
            </div>
        `}static get styles(){return j`
            .container {
                max-width: 100%;
                margin: 50px;
            }

            .homepage {
                line-height: 1.4;
            }

            .homepage h1 {
                color: var(--kpn-green);
            }

            .homepage h2 {
                color: var(--kpn-green);
            }

            .homepage p {
                color: var(--kpn-black);
            }

            .homepage-section {
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                width: 100%;
                background-color: var(--kpn-light-gray);
                padding-top: 10px;
                padding-bottom: 20px;
            }

            .header-title {
                text-align: center;
            }

            .header-description {
                display: flex;
                justify-content: center;
            }

            .description-text {
                text-align: center;
                max-width: 515px;
                margin: 0 15px;
            }

            .cards {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                margin-top: 20px;
            }

            .card {
                display: flex;
                background-color: var(--kpn-white);
                color: var(--kpn-black);
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                margin: 15px;
                width: 100%;
                max-width: 375px;
                flex-direction: column;
            }

            .card-title {
                display: flex;
                justify-content: center;
            }

            .card-list {
                padding: 0 25px;
                flex-grow: 1;
                line-height: 1.4;
            }

            .card-button {
                display: flex;
                justify-content: center;
                margin-top: auto;
            }

            .card-button a {
                width: 100%;
                background-color: var(--kpn-green);
                color: var(--kpn-black);
                border: none;
                padding: 10px 20px;
                margin: 10px;
                cursor: pointer;
                border-radius: 9999px;
                max-width: 200px;
                text-align: center;
                text-decoration: none;
            }

            .card-button a:hover {
                background-color: var(--kpn-green-hover);
            }

             .tips-section {
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                background-color: var(--kpn-light-gray);
                margin: 50px 0 20px 0;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .tip-title {
                text-align: center;
                margin: 0 0 15px 0;
                color: var(--kpn-green);
                font-size: 1.2rem;
                width: 100%;
            }

            .quick-tips-content {
                max-width: 600px;
                width: 100%;
            }

            .tip-text {
                text-align: center;
                margin: 15px 0;
                color: var(--kpn-black);
            }

            .progress-bar {
                height: 4px;
                background: #e0e0e0;
                border-radius: 2px;
                margin-top: 15px;
            }

            .progress-fill {
                height: 100%;
                background: var(--kpn-green);
                width: 0;
                transition: width 0.3s ease;
                border-radius: 2px;
            }

            .questionnaire{
                text-align: center;
                margin-top: 20px;
            }
        }

        @media only screen and (max-width: 800px) {
            body {
                height: auto;
            }

            .container {
                margin: 30px 15px;
            }

            .homepage-section {
                padding: 20px 0;
            }

            .cards {
                justify-content: center;
                margin-top: 20px;
            }

            .card {
                width: 100%;
            }

            .tip-title {
                text-align: center;
            }

            .tip-text {
                text-align: center;
            }
        `}}window.customElements.define("kpn-home",Tn);class Pn{constructor(e){this.service=e}validateFormData(e,t){const i={};return t!=0?(e.inlay<=0||e.inlay>t||isNaN(e.inlay))&&(i.amount=`Bedrag moet tussen 0 en ${t} zijn`):(e.inlay<=0||isNaN(e.inlay))&&(i.amount="Bedrag moet groter dan 0 zijn"),(!e.proof||e.proof.name==="")&&(i.proof="Bewijs is verplicht"),e.proof&&e.proof.name&&!e.proof.name.match(/\.(pdf)$/)&&(i.proof="Bewijs moet een PDF bestand zijn"),e.description.length>255&&(i.description="Beschrijving mag maximaal 255 tekens bevatten"),i}handleFormSubmit(e,t,i){let n=this.validateFormData(t,e.remainingAmount);if(Object.keys(n).length>0){e.displayErrors(n);return}e.clearAllErrors();let a=this.service.initializeBoostData(t,i);this.service.getBoostData().then(r=>{let l=this.findExistingBoost(r,a,i);l!==-1?confirm("Je hebt al voor deze boosttype aangevraagd en is nog niet goedgekeurd/afgekeurd. Wil je hem aanpassen?")&&(this.service.updateBoost(r,l,a),alert("Boost is aangepast")):(this.service.addBoost(r,a),alert("Boost aangevraagd")),e.resetForm(),e.closeModal()}).catch(r=>{console.error("Fout bij het ophalen van boostgegevens:",r)})}findExistingBoost(e,t,i){return e.findIndex(n=>n.boostTypeId===t.boostTypeId&&n.userId===i&&!n.accepted&&n.acceptedAt===null)}}class Rn{initializeBoostData(e,t){return{boostTypeId:parseInt(e.boostTypeId),inlay:parseInt(e.inlay),description:e.description,proof:e.proof.name,userId:t,accepted:!1,createdAt:new Date().toLocaleString(),acceptedAt:null,updatedAt:"",deletedAt:null}}async saveBoostData(e){return new Promise((t,i)=>{try{localStorage.setItem("boost",JSON.stringify(e)),t(!0)}catch{i("Fout bij het opslaan van boostgegevens in localStorage")}})}async getBoostData(){return new Promise((e,t)=>{try{const i=JSON.parse(localStorage.getItem("boost"))||[];e(Array.isArray(i)?i:[])}catch{t("Fout bij het ophalen van boostgegevens uit localStorage")}})}async updateBoost(e,t,i){return new Promise((n,a)=>{try{e[t]=i,this.saveBoostData(e),n(!0)}catch{a("Fout bij het bijwerken van boostgegevens")}})}async addBoost(e,t){return new Promise((i,n)=>{try{e.push(t),this.saveBoostData(e),i(!0)}catch{n("Fout bij het toevoegen van boostgegevens")}})}}class In extends y{constructor(){super(),this.controller=new Pn(new Rn),this.selectedType="",this.remainingAmount=0,this.errorMessages={}}setSelectedType(e){this.selectedType=e,this.requestUpdate()}setRemainingAmount(e){this.remainingAmount=e,this.requestUpdate()}displayErrors(e){this.errorMessages=e,this.requestUpdate()}clearAllErrors(){this.errorMessages={},this.requestUpdate()}clearError(e){this.errorMessages[e]="",this.requestUpdate()}openModal(e,t){const i=this.shadowRoot.querySelector("#myModal");i.style.display="flex",isNaN(t)&&(t=0),this.setRemainingAmount(t),this.setSelectedType(e)}closeModal(){const e=this.shadowRoot.querySelector("#myModal");e.style.display="none",this.resetForm(),this.clearAllErrors(),this.setSelectedType(""),this.setRemainingAmount(0)}resetForm(){const e=this.shadowRoot.getElementById("request");e&&e.reset()}handleSubmit(e){e.preventDefault();const t=new FormData(this.shadowRoot.getElementById("request")),i=Object.fromEntries(t.entries()),n=parseInt(localStorage.getItem("userId"));this.controller.handleFormSubmit(this,i,n)}render(){return f`
            <dialog id="myModal" class="modal" @click="${this.closeModal}">
                <div class="modal-content" @click="${e=>e.stopPropagation()}">
                    <div class="modal-header">
                        <p>Boost aanvragen</p>
                        <a @click="${this.closeModal}" class="close">&times;</a>
                    </div>
                    <div class="modal-body">
                        <form class="form" id="request" enctype="multipart/form-data">
                            <div class="form-inputs">
                                <div class="form-group">
                                    <div class="form-content">
                                        <label for="type">Type*</label><br>
                                        <select id="type" name="boostTypeId" .value="${this.selectedType}" style="pointer-events: none; background-color: #e9ecef;">
                                            <option value="1" ?selected="${this.selectedType==="wellness"}">
                                                Fysiek en mentaal welzijn
                                            </option>
                                            <option value="2" ?selected="${this.selectedType==="homeSustainability"}">
                                                Verduurzaming van je woning
                                            </option>
                                            <option value="3" ?selected="${this.selectedType==="studentDebtRepayment"}">
                                                Aflossing studieschuld
                                            </option>
                                            <option value="4" ?selected="${this.selectedType==="unionContribution"}">
                                                Vakbondscontributie
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-content">
                                        <label for="amount">Bedrag ${this.remainingAmount>0?f`(max: ${this.remainingAmount})`:""}*</label><br>
                                        <input type="number" id="amount" name="inlay" min="0" max="${this.remainingAmount}" @input="${()=>this.clearError("amount")}">
                                        <div id="error-message-amount" class="error-text">
                                            ${this.errorMessages.amount||""}
                                        </div>
                                    </div>
                                    <div class="form-content">
                                        <label for="proof">Bewijs (PDF)*</label><br>
                                        <input type="file" id="proof" name="proof" accept="application/pdf" @change="${()=>this.clearError("proof")}">
                                        <div id="error-message-proof" class="error-text">
                                            ${this.errorMessages.proof||""}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-content">
                                        <label for="description">Beschrijving (max 255 tekens)</label><br>
                                        <textarea id="description" name="description" rows="5"></textarea>
                                        <div id="error-message-proof" class="error-text">
                                            ${this.errorMessages.description||""}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="button-content">
                                <button type="submit" class="button" @click="${this.handleSubmit}">Aanvragen</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        `}static get styles(){return j`
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                display: none;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                overflow: auto;
                background-color: rgb(0,0,0);
                background-color: rgba(0,0,0,0.4);
                z-index: 1000;
            }

            .modal-content {
                background-color: var(--kpn-light-gray);
                color: var(--kpn-black);
                margin: 15% auto;
                border: 1px solid #888;
                border-radius: 15px;
                width: 60%;
            }

            .modal-header {
                background-color: var(--kpn-green);
                padding: 0 20px;
                color: white;
                font-size: 28px;
                font-weight: bold;
                border-radius: 15px 15px 0 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .modal-body {
                color: var(--kpn-black);
                padding: 10px 10px;
            }

            .form-inputs {
                display: flex;
                justify-content: space-between;
            }

            .form-group {
                width: 50%;
                padding: 0 10px;
            }

            .form-content{
                margin: 10px 0;
            }

            .form label {
                font-weight: bold;
                color: var(--kpn-black);
                padding: 10px 0;
            }

            .form select,
            .form input:not([type="checkbox"]),
            .form input[type="file"],
            .form textarea {
                width: 100%;
                padding: 10px;
                border: 1px solid var(--kpn-black);
                border-radius: 5px;
                background-color: var(--kpn-white);
                font-size: 16px;
                color: var(--kpn-black);
                box-sizing: border-box;
                margin-top: 5px;
            }

            .form select,
            .form input[type="file"] {
                appearance: none;
                cursor: pointer;
                background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="0,0 20,0 10,10" fill="%23333"/></svg>');
                background-repeat: no-repeat;
                background-position: right 10px center;
                background-size: 12px;
            }

            .form select:hover,
            .form input[type="file"]:hover,
            .form textarea:hover {
                border-color: #888;
            }

            .form select:focus,
            .form input[type="file"]:focus,
            .form textarea:focus {
                outline: none;
                border-color: var(--kpn-blue);
                box-shadow: 0 0 5px rgba(0, 0, 255, 0.2);
            }

            .form input[type="file"]::-webkit-file-upload-button {
                background-color: var(--kpn-blue);
                color: white;
                padding: 8px 12px;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                cursor: pointer;
                font-weight: bold;
            }

            .form input[type="file"]::-webkit-file-upload-button:hover {
                background-color: var(--kpn-blue-hover);
            }

            .form textarea {
                resize: vertical;
                min-height: 213px;
            }

            .error-text {
                color: var(--kpn-error-red);
            }

            .is-invalid {
                border-color: var(--kpn-error-red)!important;
            }

            .button-content{
                display: flex;
                justify-content: center;
            }

            .button {
                background-color: var(--kpn-green);
                color: var(--kpn-white);
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
                margin: 10px 0;
                width: 100%;
                max-width: 400px;
            }

            .button:hover {
                background-color: var(--kpn-green-hover);
            }

            .close:hover,
            .close:focus {
                color: black;
                text-decoration: none;
                cursor: pointer;
            }

            @media (max-width: 850px) {
                .modal{
                    width: 95%;
                }
                .modal-content {
                    width: 100%;
                    margin: 15% auto;
                }
            }
        `}}window.customElements.define("boost-modal",In);class Cn extends y{constructor(){super()}async _loadData(){let e=await fetch("./src/assets/json/boostType.json").then(r=>r.json()),t=await fetch("./src/assets/json/boost.json").then(r=>r.text()).then(r=>r?JSON.parse(r):[]),i=JSON.parse(localStorage.getItem("boost"))||[],n=[...t,...i],a=parseInt(localStorage.getItem("userId"));this._updateOverview(n,e,a)}_updateOverview(e,t,i){let n=[],a=[],r=[];this.shadowRoot.querySelector("#requestBoostsPending").innerHTML="",this.shadowRoot.querySelector("#requestBoostsAccepted").innerHTML="",this.shadowRoot.querySelector("#requestBoostsRejected").innerHTML="",e.forEach(l=>{l.userId==i&&(l.acceptedAt==null?(this.handleBoostRow(l,t,"hourglass","yellow","#requestBoostsPending"),a.push(l)):l.accepted?(this.handleBoostRow(l,t,"check","green","#requestBoostsAccepted"),n.push(l)):(this.handleBoostRow(l,t,"times","red","#requestBoostsRejected"),r.push(l)))}),this.updateEmptyCategory("#requestBoostsAccepted",n),this.updateEmptyCategory("#requestBoostsPending",a),this.updateEmptyCategory("#requestBoostsRejected",r)}handleBoostRow(e,t,i,n,a){let r=this.shadowRoot.querySelector(a);a==="#requestBoostsPending"?this.createBoostRow(r,i,n,e,t):this.createBoostRow(r,i,n,e,t)}updateEmptyCategory(e,t){t.length===0&&(this.shadowRoot.querySelector(e).innerHTML="<p>Geen resultaten</p>")}createBoostRow(e,t,i,n,a){let r=a.find(s=>s.id===n.boostTypeId),l=n.acceptedAt;n.description==""&&(n.description="Geen beschrijving"),n.acceptedAt==null&&(l=n.createdAt),e.innerHTML+=`
            <div class="boost-request">
                <div class="boost-icon">
                    <i class="fa-solid fa-${t} icon ${i}"></i>
                </div>
                <div class="boost-info">
                    <p class="bold">${r.name}</p>
                    <p>${n.description}</p>
                </div>
                <div class="boost-proof">
                    <i class="fa-solid fa-file icon-smaller"></i>
                    <a href="" target="_blank">${n.proof}</a>
                </div>
                <div class="boost-inlay">
                    <i class="fa-solid fa-euro-sign icon-smaller"></i>
                    <p>${n.inlay}</p>
                </div>
                <div class="boost-date">
                    <i class="fa-solid fa-calendar icon-smaller"></i>
                    <p>${this.formatToYYYYMMDD(l)}</p>
                </div>
            </div>
        `}openOverviewModal(){this.requestUpdate();const e=this.shadowRoot.querySelector("#overviewModal");e.style.display="flex",this._loadData().then(t=>this.requestUpdate())}closeOverviewModal(){const e=this.shadowRoot.querySelector("#overviewModal");e.style.display="none"}formatToYYYYMMDD(e){let t=e;if(e.includes(",")){let[i,n]=e.split(","),[a,r,l]=i.split("/").map(Number);t=`${l}-${String(r).padStart(2,"0")}-${String(a).padStart(2,"0")}T${n?n.trim():"12:00:00"}`}return new Date(t).toLocaleDateString()}render(){return f`
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">

            <dialog id="overviewModal" class="modal" @click="${this.closeOverviewModal}">
                <div class="modal-content" @click="${e=>e.stopPropagation()}">
                    <div class="modal-header">
                        <h2>Alle boost aanvragingen</h2>
                        <a @click="${e=>this.closeOverviewModal()}" class="close">&times;</a>
                    </div>
                    <div class="modal-body">
                        <div class="">
                            <h2 class="yellow">In behandeling</h2>
                            <div id="requestBoostsPending"></div>
                        </div>
                        <div>
                            <h2 class="green">Geaccepteerden</h2>
                            <div id="requestBoostsAccepted"></div>
                        </div>
                        <div class="">
                            <h2 class="red">Afgewezen</h2>
                            <div id="requestBoostsRejected"></div>
                        </div>
                    </div>
                </div>
            </dialog>
        `}static get styles(){return j`
            p{
                line-height: 1.3;
                margin: 0;
            }
            
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                display: none;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                overflow: auto;
                background-color: rgb(0,0,0);
                background-color: rgba(0,0,0,0.4);
                z-index: 1000;
            }

            .modal-content {
                background-color: var(--kpn-light-gray);
                color: var(--kpn-black);
                border: 1px solid #888;
                border-radius: 15px;
                width: 100%;
                max-width: 1200px;
                position: relative;
                overflow-y: auto;
            }

            .modal-header {
                background-color: var(--kpn-green);
                padding: 0 15px;
                color: white;
                font-weight: bold;
                border-radius: 15px 15px 0 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .modal-body {
                color: var(--kpn-black);
                padding: 10px 15px;
            }
            
            .close{
                font-size: 28px;
            }

            .close:hover,
            .close:focus {
                color: black;
                text-decoration: none;
                cursor: pointer;
            }
            
            .green {
                color: var(--kpn-green);
            }
            
            .yellow {
                color: var(--kpn-signal-yellow);
            }
            
            .red {
                color: var(--kpn-error-red);
            }
            
            .boost-request {
                display: flex;
                align-items: center;
                border-bottom: 1px solid var(--kpn-light-gray);
            }
            
            .icon{
                font-size: 40px;
                margin: 0 10px;
            }

            .icon-smaller{
                font-size: 30px;
                margin: 0 10px;
            }

            .boost-request {
                display: flex;
                align-items: center;
                justify-content: space-between; 
                gap: 1rem; 
                width: 100%;
            }

            .boost-icon {
                flex-shrink: 0; 
            }

            .boost-info {
                flex-grow: 1;
                max-width: 100%; 
                overflow: hidden;
            }

            .boost-proof,
            .boost-inlay,
            .boost-date {
                display: flex;
                align-items: center;
                flex-shrink: 0;
            }
            
            .boost-proof{
                width: 300px;
            }
            
            .boost-inlay{
                width: 100px;
            }

            .boost-date{
                width: 200px;
            }

            .boost-info p,
            .boost-proof a,
            .boost-inlay p,
            .boost-date p {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            
            .bold{
                font-weight: bold;
                font-size: 20px;
            }

            @media (max-width: 1250px) {
                .modal {
                    width: 95%;
                }
            }

            @media (max-width: 1100px) {
                .boost-proof { 
                    width: 200px; 
                }
                .boost-inlay { 
                    width: 100px; 
                }
                .boost-date { 
                    width: 150px; 
                }
            }

            @media (max-width: 850px) {
                .boost-proof, .boost-inlay, .boost-date {
                    width: 100px;
                }
            }

            @media (max-width: 700px) {
                .modal {
                    align-items: flex-start;
                    padding-top: 20px;
                    margin: 0;
                    margin-bottom: 50px;
                }
                
                .modal-content {
                    max-width: 500px;
                    margin-right: 15px;
                }

                .boost-request {
                    flex-wrap: wrap;
                    gap: 0;
                }

                .boost-info,
                .boost-proof,
                .boost-inlay,
                .boost-date {
                    flex-basis: 100%;
                    justify-content: flex-start;
                    margin-top: 0.5rem;
                }

                .icon {
                    display: none;
                }
            }
        `}}window.customElements.define("boost-overview",Cn);class di extends y{constructor(){super(),this.totalAmount=0,this.amountSpent=0,this.remainingAmount=0}connectedCallback(){super.connectedCallback(),this.boostPageData().then(()=>this.requestUpdate())}totalAmountCalculation(e){return e.reduce((t,i)=>t+i.maximalInlay,0)}amountSpentCalculation(e,t){return e.reduce((i,n)=>n.userId===t&&n.accepted===!0?i+n.inlay:i,0)}amountPerTypeCalculationAccepted(e,t,i,n){let a=new Date;return e.reduce((r,l)=>{if(l.boostTypeId===t&&l.accepted===!0&&l.userId===i&&l.acceptedAt){let s=l.acceptedAt.split(", "),p=s[0].split("/"),d=s[1],c=`${p[2]}-${p[1]}-${p[0]}T${d}`,u=new Date(c),g=new Date(u);if(g.setFullYear(u.getFullYear()+n),console.log(a.getFullYear()+" "+g.getFullYear()+" "+u.getFullYear()),a.getFullYear()<=g.getFullYear())return r+l.inlay}return r},0)}amountPerTypeCalculationInPending(e,t,i){return e.reduce((n,a)=>a.boostTypeId===t&&a.accepted===!1&&a.acceptedAt===null&&a.userId===i?n+a.inlay:n,0)}async boostPageData(){try{let e=await fetch("./src/assets/json/boost.json").then(r=>r.text()).then(r=>r?JSON.parse(r):[]),t=JSON.parse(localStorage.getItem("boost"))||[],i=[...e,...t],n=parseInt(localStorage.getItem("userId")),a=await fetch("./src/assets/json/boostType.json").then(r=>r.json());this.totalAmount=this.totalAmountCalculation(a),this.amountSpent=this.amountSpentCalculation(i,n),this.remainingAmount=this.totalAmount-this.amountSpent,this.updateContent(i,a,n)}catch{this.shadowRoot.querySelector("#boosts").innerText="Er is een fout opgetreden bij het laden van data."}}updateContent(e,t,i){let n={"Fysieke en mentale welzijn":"wellness",Verduurzaming:"homeSustainability",Studieschuld:"studentDebtRepayment",Vakbondscontributie:"unionContribution"},a=this.shadowRoot.querySelector("#boosts");t.forEach(r=>{let l=n[r.name]||r.name,s=document.createElement("div"),p=this.amountPerTypeCalculationAccepted(e,r.id,i,r.cycleYear),d=this.amountPerTypeCalculationInPending(e,r.id,i),c=p/r.maximalInlay*100,u=d/r.maximalInlay*100;r.maximalInlay==null&&(r.maximalInlay="Geen limiet",p==0?c=0:(c=100,this.remainingAmount=this.remainingAmount+p),d==0?u=0:u=100),s.classList.add("boost"),s.innerHTML=`
              <div class="progress" id="bar1">
                  <div class="progress-heading">${r.name}</div>
                  <div class="progress-bar">
                      <div 
                        class="progress-bar-fill primary" 
                        style="width: ${c}%">
                      </div>
                      <div 
                        class="progress-bar-fill secondary" 
                        style="width: ${u}%">
                      </div>
                  </div>
                  <div class="controls">
                      <div class="info">
                           <span>${p} / ${r.maximalInlay}</span><br>
                           <span>Per ${r.cycleYear} jaar</span> 
                       </div>
                      <button class="button" id="myBtn">Aanvragen</button>
                  </div>
              </div>
          `,a.appendChild(s),s.querySelector("#myBtn").addEventListener("click",()=>{if(p>0&&r.maximalInlay=="Geen limiet"){alert("Je kan geen meerdere aanvragen doen voor Vakbondscontributie");return}p>=r.maximalInlay?alert("Je hebt het maximale bedrag al bereikt"):this.openModal(l,r.maximalInlay-p)})}),this.shadowRoot.querySelector("#remainingAmount").innerText=`Resterende bedrag: €${this.remainingAmount}`,this.shadowRoot.querySelector("#amountSpent").innerText=`Uitgegeven bedrag: €${this.amountSpent}`}openModal(e,t){let i=this.shadowRoot.querySelector("#boostModal");i&&typeof i.openModal=="function"?i.openModal(e,t):console.error("Modal openModal method is not found")}openOverview(){let e=this.shadowRoot.querySelector("#boostOverview");e&&typeof e.openOverviewModal=="function"?e.openOverviewModal():console.error("Modal openModal method is not found")}render(){return f`
            <boost-modal id="boostModal"></boost-modal>
            <boost-overview id="boostOverview"></boost-overview>
            <div class="container">
                <h1>BOOST</h1>
                <div class="subtitle">
                    Hier kun je investeringen doorgeven, en kun je de status zien van al jouw eerdere investeringen.
                </div>

                <div class="status-money">
                    <div id="remainingAmount" class="remainning-amount"></div>
                    <div id="amountSpent" class="spent-amount"></div>
                </div>

                <div id="boosts"></div>
                <div class="overviewButton">
                    <button class="button max-width" @click="${()=>this.openOverview()}">Overzicht boost aanvragingen</button>
                </div
            </div>
        `}}x(di,"styles",j`
        :host {
            display: block;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            height: 100%;
            overflow-y: auto;
            background-color: var(--kpn-green);
            color: var(--kpn-black);
            box-sizing: border-box;
        }

        .container {
            background-color: var(--kpn-light-gray);
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin: 50px;
            overflow-y: auto;
            box-sizing: border-box;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        h1{
            color: var(--kpn-green);
        }

        .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .subtitle {
            font-size: 14px;
            margin-bottom: 20px;
        }

        .status-money {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .remainning-amount {
            color: var(--kpn-blue);
            font-size: 16px;
            margin-right: 10px;
        }

        .spent-amount {
            color: var(--kpn-green);
            font-size: 16px;
            margin-left: 10px;
        }

        .progress {
            margin-bottom: 20px;
        }

        .progress-heading {
            font-size: 16px;
            margin-bottom: 5px;
        }

        .progress-bar {
            width: 100%;
            background-color: black;
            border-radius: 5px;
            overflow: hidden;
            position: relative;
            height: 20px;
            display: flex;
        }

        .progress-bar-fill {
            height: 100%;
        }

        .progress-bar-fill.primary {
            background-color: var(--kpn-green);
            z-index: 1;
        }

        .progress-bar-fill.secondary {
            background-color: var(--kpn-signal-yellow);
            z-index: 0;
        }

        .controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 5px;
        }

        .controls span {
            font-size: 14px;
        }
        
        .info{
            text-align: left;
        }

        .button {
            background-color: var(--kpn-green);
            color: var(--kpn-white);
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
        }

        .button:hover {
            background-color: #009900;
        }
        
        .overviewButton {
            display: flex;
            justify-content: center;
        }
        
        .max-width{
            max-width: 500px;
            width: 100%;
            padding: 10px;
        }
    `);window.customElements.define("kpn-boost",di);class pi extends si(y){static get properties(){return{isOpen:{type:Boolean},currentPrice:{type:Number},ownedShares:{type:Number},availableFunds:{type:Number}}}constructor(){super(),this.isOpen=!1,this.currentPrice=11.24,this.ownedShares=150,this.availableFunds=5e3}get translationPage(){return"shareManagement"}_openModal(){this.isOpen=!0}_closeModal(){this.isOpen=!1}_handlePurchase(e){e.preventDefault();const t=this.shadowRoot.querySelector("#shareAmount").value;alert(`Purchase request for ${t} shares submitted`),this._closeModal()}_renderGraph(){return f`
            <svg class="graph" viewBox="0 0 300 100">
                <polyline
                    fill="none"
                    stroke="var(--kpn-green)"
                    stroke-width="2"
                    points="
                        0,80
                        50,70
                        100,90
                        150,50
                        200,60
                        250,30
                        300,40
                    "
                />
                
                ${[0,1,2,3,4].map(e=>f`
                    <line
                        x1="0"
                        y1="${e*25}"
                        x2="300"
                        y2="${e*25}"
                        stroke="#e0e0e0"
                        stroke-width="0.5"
                    />
                `)}
            </svg>
        `}render(){var e,t,i,n,a,r,l,s,p,d,c,u;return this.isOpen?f`
            <div class="modal-overlay" @click="${this._closeModal}">
                <div class="modal-content" @click="${g=>g.stopPropagation()}">
                    <button class="close-button" @click="${this._closeModal}">&times;</button>
                    
                    <h1>${((e=this.translations)==null?void 0:e.title)||"Aandelen Beheren"}</h1>
                    <p class="last-updated">
                        ${((t=this.translations)==null?void 0:t.lastUpdated)||"Laatst bijgewerkt:"} ${new Date().toLocaleDateString()}
                    </p>

                    <div class="content-wrapper">
                        <section class="market-overview">
                            <h2>${((n=(i=this.translations)==null?void 0:i.marketOverview)==null?void 0:n.title)||"Markt Overzicht"}</h2>
                            <div class="stock-info">
                                <div class="price-info">
                                    <div class="current-price">
                                        <span class="label">${((r=(a=this.translations)==null?void 0:a.marketOverview)==null?void 0:r.currentPrice)||"Huidige Koers"}</span>
                                        <span class="value">€${this.currentPrice}</span>
                                    </div>
                                    <div class="price-change positive">
                                        <span>+0.45 (4.17%)</span>
                                    </div>
                                </div>
                                <div class="chart-container">
                                    ${this._renderGraph()}
                                </div>
                            </div>
                        </section>

                        <div class="info-sections">
                            <section class="portfolio">
                                <h2>${((s=(l=this.translations)==null?void 0:l.portfolio)==null?void 0:s.title)||"Mijn Portfolio"}</h2>
                                <div class="portfolio-info">
                                    <div class="info-item">
                                        <span>Aantal aandelen:</span>
                                        <span>${this.ownedShares}</span>
                                    </div>
                                    <div class="info-item">
                                        <span>Waarde:</span>
                                        <span>€${(this.ownedShares*this.currentPrice).toFixed(2)}</span>
                                    </div>
                                    <div class="info-item">
                                        <span>Beschikbaar:</span>
                                        <span>€${this.availableFunds}</span>
                                    </div>
                                </div>
                            </section>

                            <section class="trade">
                                <h2>${((d=(p=this.translations)==null?void 0:p.trade)==null?void 0:d.title)||"Aandelen Kopen"}</h2>
                                <form class="trade-form" @submit="${this._handlePurchase}">
                                    <div class="form-group">
                                        <label for="shareAmount">Aantal aandelen:</label>
                                        <input type="number" id="shareAmount" class="share-input" min="1" required>
                                    </div>
                                    <div class="total-cost">
                                        Totaal: €0.00
                                    </div>
                                    <button type="submit" class="purchase-button">
                                        ${((u=(c=this.translations)==null?void 0:c.trade)==null?void 0:u.buy)||"Kopen"}
                                    </button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        `:f``}}x(pi,"styles",j`
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }

        .modal-content {
            background-color: var(--kpn-light-gray);
            border-radius: 10px;
            padding: 30px;
            position: relative;
            width: 90%;
            max-width: 1200px;
            max-height: 90vh;
            overflow-y: auto;
        }

        .close-button {
            position: absolute;
            right: 20px;
            top: 20px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: var(--kpn-black);
        }

        h1 {
            color: var(--kpn-green);
            text-align: center;
            margin-bottom: 10px;
        }

        h2 {
            color: var(--kpn-green);
            font-size: 20px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--kpn-green);
        }

        .last-updated {
            text-align: center;
            color: var(--kpn-gray);
            font-size: 0.8em;
            margin-bottom: 30px;
        }

        .content-wrapper {
            display: flex;
            gap: 30px;
        }

        .market-overview {
            flex: 1;
            background: var(--kpn-white);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .info-sections {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .portfolio, .trade {
            background: var(--kpn-white);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .price-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            color: var(--kpn-black);
        }

        .current-price {
            font-size: 24px;
            font-weight: bold;
            color: var(--kpn-black);
        }

        .current-price .label {
            font-size: 16px;
            color: var(--kpn-gray);
            display: block;
            margin-bottom: 5px;
        }

        .price-change {
            font-weight: bold;
        }

        .price-change.positive {
            color: var(--kpn-green);
        }

        .info-item {
            display: flex;
            justify-content: space-between;
            padding: 12px;
            background: var(--kpn-light-gray);
            border-radius: 6px;
            margin-bottom: 10px;
            color: var(--kpn-black);
        }

        .trade-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
            color: var(--kpn-black);
        }

        .form-group label {
            color: var(--kpn-black);
            margin-bottom: 5px;
            display: block;
        }

        .share-input {
            width: 100%;
            padding: 10px;
            border: 2px solid var(--kpn-green);
            border-radius: 6px;
            font-size: 16px;
            background: var(--kpn-white);
            color: var(--kpn-black);
        }

        .share-input:focus {
            outline: none;
            border-color: var(--kpn-blue);
            box-shadow: 0 0 5px rgba(0, 0, 255, 0.2);
        }

        .total-cost {
            font-size: 20px;
            font-weight: bold;
            color: var(--kpn-green);
            padding: 12px;
            background: var(--kpn-light-gray);
            border-radius: 6px;
        }

        .purchase-button {
            background-color: var(--kpn-green);
            color: var(--kpn-white);
            border: none;
            padding: 12px 20px;
            border-radius: 9999px;
            font-weight: bold;
            cursor: pointer;
            width: 100%;
        }

        .purchase-button:hover {
            background-color: var(--kpn-green-hover);
        }

        .chart-container {
            margin-top: 20px;
            background: var(--kpn-light-gray);
            padding: 15px;
            border-radius: 8px;
            height: 200px;
        }

        @media (max-width: 900px) {
            .content-wrapper {
                flex-direction: column;
            }

            .modal-content {
                margin: 20px;
                padding: 20px;
                max-height: 85vh;
            }

            .market-overview, .info-sections {
                width: 100%;
            }
        }

        @media (max-width: 600px) {
            .modal-content {
                margin: 10px;
                padding: 15px;
            }

            .price-info {
                flex-direction: column;
                align-items: flex-start;
            }

            .chart-container {
                height: 150px;
            }
        }
    `);window.customElements.define("share-modal",pi);const Mn="FLEX",Nn="Hier kun je jouw virtuele aandelen beheren, de extra pensioenbijdrage inzien, en jouw maandelijkse vakantiegeld / 13e maand bedragen inzien.",Dn={title:"Mijn Aandelen",nextPayout:"01 / 04 / 2025",currentYear:"1 jaar (bij 3 jaar, 30%)",buttonText:"Aandelen beheren"},On={title:"Vakantiegeld / 13e Maand",options:{payout:"Maandelijks uitbetalen",save:"Sparen"},results:{monthly:"Maandelijkse uitbetaling",saved:"Tot nu toe gespaard"}},Ln={title:"Mijn Salesplan",description:"Je kunt ervoor kiezen om deze te nemen aan de KPN plan (0-16.33%) of extra te investeren in [medewerkers Retail & Sales]:",buttonText:"Deelnemen"},Bn={title:"Pensioeninvestering",description:"leg maximaal 3% in (voor KPN flex en boost) zodat je meer kan beleggen en pensioen kan bouwen.",inputLabel:"Bijdrage: €",buttonText:"Geld inleggen"},zn={title:Mn,description:Nn,shares:Dn,holiday:On,salesplan:Ln,pension:Bn};class hi extends y{static get properties(){return{monthlySalary:{type:Number},holidayAllowance:{type:Number},thirteenthMonth:{type:Number},savedAmount:{type:Number},payoutOption:{type:String},data:{type:Object},isParticipating:{type:Boolean},nextPayoutDate:{type:String}}}constructor(){super(),this.monthlySalary=0,this.holidayAllowance=0,this.thirteenthMonth=0,this.savedAmount=0,this.amount_spent=0,this.isParticipating=!1,this.payoutOption="monthly",this.data=zn,this.nextPayoutDate="01/06/2024",this.loadUsers()}async loadUsers(){const i=(await(await fetch("./src/assets/json/flex.json")).json())[0];i?(this.monthlySalary=i.salary/12,this.holidayAllowance=this.monthlySalary*.08,this.thirteenthMonth=this.monthlySalary*.02,this.savedAmount=i.shares.amountWaiting,this.nextPayoutDate=i.shares.payoutDate,this.amount_spent=i.shares.amountSpent):console.log("Error loading user")}_handlePayoutOptionChange(e){this.payoutOption=e.target.checked?"save":"monthly",this.requestUpdate()}_handlePayout(){this.savedAmount=0,this._showNotification("Je spaargeld is uitbetaald")}_toggleParticipation(){this.isParticipating=!this.isParticipating;const e=this.isParticipating?"Je neemt nu deel aan het KPN Salesplan":"Je neemt niet meer deel aan het KPN Salesplan";this._showNotification(e)}_showNotification(e){const t=f`
            <div class="notification ${this.isParticipating?"success":"info"}">
                ${e}
            </div>
        `;this.shadowRoot.querySelector(".salesplan").appendChild(t),setTimeout(()=>{const i=this.shadowRoot.querySelector(".notification");i&&i.remove()},3e3)}_ensureOneOptionSelected(){!this.payoutMonthly&&!this.saveForLater&&(this.payoutMonthly=!0)}_calculateMonthlyPayout(){return this.payoutMonthly?(this.holidayAllowance+this.thirteenthMonth).toFixed(2):0}_calculateSavedAmount(){return this.saveForLater?((this.holidayAllowance+this.thirteenthMonth)*12).toFixed(2):0}_handlePayoutChange(e){this.payoutMonthly=e.target.checked,this.saveForLater=!this.payoutMonthly,this.requestUpdate()}_handleSaveChange(e){this.saveForLater=e.target.checked,this.payoutMonthly=!this.saveForLater,this.requestUpdate()}render(){return f`
            ${this._renderMainContent()}
        `}_renderMainContent(){return f`
            <share-modal id="shareModal"></share-modal>
            <div class="container">
                <main class="content">
                    <h1>${this.data.title}</h1>
                    <p class="description">${this.data.description}</p>
                    <div class="status-money">
                        <h3 class="remaining-amount">Resterende bedrag: ${this.savedAmount}</h3>
                        <h3 class="spent-amount">Uitgegeven bedrag: ${this.amount_spent}</h3>
                    </div>

                    <div class="flex-content">
                        <section class="box aandelen">
                            <h2>${this.data.shares.title}</h2>
                            <p>Volgende uitbetaling: ${this.nextPayoutDate}</p>
                            <p>Huidige jaar: ${this.data.shares.currentYear}</p>
                            <button @click="${this._openShareModal}">${this.data.shares.buttonText}</button>
                        </section>

                        <section class="box vakantiegeld">
                            <h2>${this.data.holiday.title}</h2>
                            ${this._renderHolidayAllowanceContent()}
                        </section>

                        <section class="box salesplan">
                            <h2>${this.data.salesplan.title}</h2>
                            <p>${this.data.salesplan.description}</p>
                            <button @click="${this._toggleParticipation}"
                                    class="participation-button ${this.isParticipating?"participating":""}">
                                ${this.isParticipating?"Deelname stopzetten":this.data.salesplan.buttonText}
                            </button>
                        </section>

                        <section class="box pensioenbijdrage disabled">
                            <h2>${this.data.pension.title}</h2>
                            <p>${this.data.pension.description}</p>
                            <label for="pensioen">${this.data.pension.inputLabel}</label>
                            <input type="number" id="pensioen" name="pensioen" min="0" step="1" value="0" disabled>
                            <button disabled>${this.data.pension.buttonText}</button>
                        </section>
                    </div>
                </main>
            </div>
        `}_openShareModal(){this.shadowRoot.querySelector("#shareModal")._openModal()}_renderSalesPlanContent(){return f`
            <div class="salesplan-content">
                <p>Huidige deelname: ${this.isParticipating?"Actief":"Inactief"}</p>
                <p>Percentage: ${this.isParticipating?"16.33%":"0%"}</p>
                <p>Volgende uitbetaling: ${this.nextPayoutDate}</p>
                <p>Opgebouwd bedrag: €${this.isParticipating?"2449.50":"0"}</p>
                <button @click="${this._toggleParticipation}"
                        class="participation-button ${this.isParticipating?"participating":""}">
                    ${this.isParticipating?"Uitschrijven":this.data.salesplan.buttonText}
                </button>
            </div>
        `}_renderHolidayAllowanceContent(){return f`
            <div class="amounts">
                <div class="amount-item">
                    <div class="amount-info">
                        <span class="amount-label">Maandelijks vakantiegeld (8%):</span>
                        <span class="amount-value">€${this.holidayAllowance.toFixed(2)}</span>
                    </div>
                </div>
                <div class="amount-item">
                    <div class="amount-info">
                        <span class="amount-label">13e maand (2%):</span>
                        <span class="amount-value">€${this.thirteenthMonth.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <div class="options-container">
                <div class="switch-container">
                    <span class="switch-label-left ${this.payoutOption==="monthly"?"active":""}">
                        ${this.data.holiday.options.payout}
                    </span>
                    <label class="switch">
                        <input type="checkbox"
                               ?checked="${this.payoutOption==="save"}"
                               @change="${this._handlePayoutOptionChange}">
                        <span class="slider"></span>
                    </label>
                    <span class="switch-label-right ${this.payoutOption==="save"?"active":""}">
                        ${this.data.holiday.options.save}
                    </span>
                </div>

                ${this.payoutOption==="monthly"?f`
                    <p class="next-payout">Volgende uitbetaling: ${this.nextPayoutDate}</p>
                `:""}

                ${this.payoutOption==="save"?f`
                    <div class="saved-amount">
                        <p>Gespaard bedrag: €${this._calculateSavedAmount()}</p>
                        <button class="payout-button" @click="${this._handlePayout}">
                            Nu uitbetalen
                        </button>
                    </div>
                `:""}
            </div>
        `}}x(hi,"styles",j`
        .container {
            max-width: 100%;
            margin: 50px;
        }

        main {
            line-height: 1.4;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: var(--kpn-light-gray);
            padding: 30px;
            color: var(--kpn-black);
        }

        h1 {
            color: var(--kpn-green);
            text-align: center;
            margin-bottom: 20px;
        }

        .description {
            text-align: center;
            max-width: 600px;
            margin: 0 auto 30px;
            color: var(--kpn-black);
        }

        .status-money {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            padding: 0 20px;
        }

        .remaining-amount {
            color: var(--kpn-blue);
            font-size: 16px;
        }

        .spent-amount {
            color: var(--kpn-green);
            font-size: 16px;
        }

        .flex-content {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
            grid-template-areas:
        "mijn-aandelen vakantiegeld pensioenbijdrage"
        "mijn-aandelen mijn-salesplan pensioenbijdrage";
        }

        .box {
            background: var(--kpn-white);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            color: var(--kpn-black);
            text-align: center;
            width: 100%;
            box-sizing: border-box;
        }

        .box h2 {
            color: var(--kpn-green);
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--kpn-green);
            width: 100%;
        }

        .box button {
            background-color: var(--kpn-green);
            color: var(--kpn-white);
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 9999px;
            font-weight: bold;
            margin-top: auto;
            min-width: 125px;
        }

        .box button:hover {
            background-color: var(--kpn-green-hover);
        }

        .aandelen {
            grid-area: mijn-aandelen;
        }

        .vakantiegeld {
            grid-area: vakantiegeld;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .salesplan {
            grid-area: mijn-salesplan;
        }

        .pensioenbijdrage {
            grid-area: pensioenbijdrage;
        }

        .vakantiegeld {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .amounts {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .checkbox-group {
            display: flex;
            gap: 20px;
            margin-top: auto;
            padding-top: 10px;
        }

        .checkbox-label {
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            user-select: none;
            padding: 8px 16px;
            border-radius: 6px;
            background: var(--kpn-light-gray);
            transition: background-color 0.2s;
        }

        .checkbox-label:hover {
            background: var(--kpn-gray-admin);
        }

        .checkbox-input {
            appearance: none;
            width: 20px;
            height: 20px;
            border: 2px solid var(--kpn-green);
            border-radius: 4px;
            cursor: pointer;
            position: relative;
            transition: all 0.2s;
        }

        .checkbox-input:checked {
            background-color: var(--kpn-green);
        }

        .checkbox-input:checked::after {
            content: "✓";
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 14px;
        }

        .checkbox-input:focus {
            outline: 2px solid var(--kpn-blue);
            outline-offset: 2px;
        }

        .checkbox-text {
            font-weight: bold;
            color: var(--kpn-black);
        }

        @media (max-width: 1400px) {
            .flex-content {
                grid-template-columns: 1fr 1fr;
                gap: 25px;
                grid-template-areas:
            "mijn-aandelen vakantiegeld"
            "mijn-salesplan pensioenbijdrage";
            }
        }

        @media (max-width: 900px) {
            .container {
                margin: 30px 20px;
            }

            .flex-content {
                grid-template-columns: 1fr;
                grid-template-areas:
            "mijn-aandelen"
            "vakantiegeld"
            "mijn-salesplan"
            "pensioenbijdrage";
            }

            .status-money {
                flex-direction: column;
                gap: 10px;
                align-items: center;
            }
        }

        @media (max-width: 600px) {
            .container {
                margin: 20px 10px;
            }

            main {
                padding: 20px 15px;
            }

            .amount-info {
                flex-direction: column;
                gap: 8px;
            }

            .checkbox-group {
                flex-direction: column;
                gap: 12px;
            }

            .checkbox-label {
                width: 100%;
            }
        }

        .disabled {
            opacity: 0.6;
            cursor: not-allowed;
            position: relative;
        }

        .disabled::after {
            content: "Beschikbaar vanaf 2026";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 14px;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .disabled:hover::after {
            opacity: 1;
        }

        .disabled input,
        .disabled button {
            cursor: not-allowed;
        }

        .disabled button {
            background-color: var(--kpn-gray);
        }

        .vakantiegeld {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 25px;
        }

        .amounts {
            display: flex;
            flex-direction: column;
            gap: 12px;
            background: var(--kpn-white);
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .amount-item {
            background: var(--kpn-white);
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .amount-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
        }

        .amount-label {
            color: var(--kpn-black);
            font-size: 0.95em;
        }

        .amount-value {
            font-weight: bold;
            color: var(--kpn-green);
            white-space: nowrap;
        }

        .result-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px;
            background: var(--kpn-light-gray);
            border-radius: 8px;
        }

        .result-content {
            display: flex;
            flex-direction: column;
            gap: 5px;
            flex-grow: 1;
        }

        .result-label {
            color: var(--kpn-black);
            font-size: 0.9em;
        }

        .result-value {
            color: var(--kpn-green);
            font-weight: bold;
            font-size: 1.1em;
        }

        .hidden {
            display: none;
        }

        .switch {
            position: relative;
            display: inline-block;
            max-width: 60px;
            width: 100%;
            height: 34px;
        }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 34px;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .slider {
            background-color: var(--kpn-green);
        }

        input:checked + .slider:before {
            transform: translateX(100%);
        }

        .switch-label {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 10px 0;
            padding: 5px;
        }

        .switch-text {
            margin-right: 15px;
        }

        .participation-button {
            background-color: var(--kpn-green);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .participation-button.participating {
            background-color: var(--kpn-error-red);
        }

        .participation-button.participating:hover {
            background-color: var(--kpn-error-red-hover);
        }

        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 8px;
            color: white;
            animation: slideIn 0.3s ease-out;
        }

        .notification.success {
            background-color: var(--kpn-green);
        }

        .notification.info {
            background-color: var(--kpn-blue);
        }

        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        .switch-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 20px;
            background: var(--kpn-light-gray);
            border-radius: 25px;
            margin: 15px 0;
        }

        .switch-label-left, .switch-label-right {
            font-weight: 500;
            padding: 0 15px;
        }

        .switch-label-left.active, .switch-label-right.active {
            color: var(--kpn-green);
        }

        .saved-amount {
            text-align: center;
            margin-top: 15px;
            padding: 15px;
            background: var(--kpn-light-gray);
            border-radius: 8px;
        }

        .next-payout {
            text-align: center;
            margin-top: 15px;
            color: var(--kpn-black);
        }

        /* Modal responsiveness fixes */

        .modal-content {
            max-width: 90vw;
            max-height: 90vh;
            overflow-y: auto;
            padding: 20px;
        }

        .modal-content > * {
            max-width: 100%;
        }

        .chart-container {
            width: 100%;
            overflow: hidden;
        }

        @media (max-width: 600px) {
            .switch-container {
                padding: 8px 15px;
            }

            .switch-label-left, .switch-label-right {
                padding: 0 10px;
                font-size: 0.9em;
            }
        }

        @media (min-width: 320px) and (max-width: 360px),
        (min-width: 601px) and (max-width: 645px),
        (min-width: 901px) and (max-width: 1097px),
        (min-width: 1400px) and (max-width: 1447px) {
            .switch-container {
                flex-direction: column;
                gap: 10px;
            }
        }

    `);window.customElements.define("kpn-flex",hi);class ui extends y{constructor(){super(),this.questions=[],this.questionIndex=0,this.answers=[],this.categories=[],this.expanded=[!1,!1,!1,!1,!1,!1],this.answers===[]?this.displayResults=!1:this.displayResults=!0,this.isLoading=!0,this.initData()}async initData(){this.questions=await this.loadQuestions(),this.categories=await this.loadCategories(),this.loadResults(),this.categories.sort((e,t)=>t.amount-e.amount),this.isLoading=!1,this.requestUpdate()}async loadQuestions(){return await(await fetch("./src/assets/json/kieswijzerQuestions.json")).json()}async loadCategories(){return await(await fetch("./src/assets/json/kieswijzerCategories.json")).json()}recordAnswer(e){this.answers.push({question:this.questions[this.questionIndex],answer:e}),this.questionIndex<this.questions.length-1?this.questionIndex++:(this.displayResults=!0,console.log(this.answers),this.calculateResults(),this.shadowRoot.querySelector("#results").focus()),this.requestUpdate(),this.shadowRoot.querySelector(".kieswijzer-question").focus()}calculateResults(){this.answers.forEach(e=>{if(e.answer==="Ja"){const t=e.question,i=this.categories.find(n=>n.category===t.category);i.amount++}if(e.answer==="Nee"){const t=e.question,i=this.categories.find(n=>n.category===t.category);i.amount--}}),this.categories.sort((e,t)=>t.amount-e.amount),this.saveResults(),console.log(this.categories)}saveResults(){localStorage.setItem("answers",JSON.stringify(this.categories))}loadResults(){const e=localStorage.getItem("answers");e&&(JSON.parse(e).forEach(i=>{const n=this.categories.find(a=>a.category===i.category);n&&(n.amount=i.amount)}),this.displayResults=!0)}reset(){localStorage.removeItem("answers"),this.answers=[],this.questionIndex=0,this.categories.forEach(e=>{e.amount=0}),this.displayResults=!1}expandInfo(e){this.expanded[e]=!this.expanded[e],this.requestUpdate()}render(){if(this.isLoading)return f`<p>Loading...</p>`;if(this.displayResults){const e=this.categories.slice(0,3),t=this.categories.slice(3,6);return f`
                <div class="container">
                    <main>
                        <div class="kieswijzer-parent">
                            <div class="kieswijzer-results">
                                <h1 id="results">Resultaten</h1>
                                                            <div class="kieswijzer-information">
                                <h2 tabindex="0">Nuttige informatie</h2>
                                ${e.map((i,n)=>f`
                                    <div class="kieswijzer-result" id="kieswijzer-${n+1}" aria-live="polite" tabindex="0">
                                        <p>${i.category}</p>
                                        <button 
                                            class="result-button" 
                                            aria-label="${this.expanded[n]?"Minder informatie over":"Meer informatie over"} ${i.category}" 
                                            @click="${()=>this.expandInfo(n)}">
                                            ${i.isExpanded?"Minder":"Meer"}
                                        </button>
                                        <button
                                                class="result-button"
                                                aria-label="Neem actie voor ${i.category}"
                                                @click="${()=>window.open(i.link,"_blank")}">
                                            Actie
                                        </button>
                                        ${this.expanded[n]?f`
                                            <div class="expanded-info">
                                                <p>${i.information}</p>
                                            </div>
                                        `:""}
                                    </div>
                                `)}
                            </div>
                                <div class="kieswijzer-interesting">
                                    <div class="kieswijzer-interesting">
                                        <h2 tabindex="0">Interessante informatie</h2>
                                        ${t.map((i,n)=>{const a=n+3;return f`
                                    <div class="kieswijzer-result" id="kieswijzer-${a+1}" aria-live="polite" tabindex="0">
                                        <p>${i.category}</p>
                                        <button 
                                            class="result-button" 
                                            aria-label="${this.expanded[a]?"Minder informatie over":"Meer informatie over"} ${i.category}" 
                                            @click="${()=>this.expandInfo(a)}">
                                            ${this.expanded[a]?"Minder":"Meer"}
                                        </button>
                                        <button
                                                class="result-button"
                                                aria-label="Neem actie voor ${i.category}"
                                                @click="${()=>window.open(i.link,"_blank")}">
                                            Actie
                                        </button>
                                        ${this.expanded[a]?f`
                                            <div class="expanded-info">
                                                <p tabindex="0">${i.information}</p>
                                            </div>
                                        `:""}
                                    </div>
                                `})}
                                    </div>
                                <button @click="${()=>this.reset()}" class="reset-button" aria-label="Kieswijzer opnieuw invullen">Vul Kieswijzer Opnieuw in</button>
                        </div>
                    </main>
                </div>
            `}return f`
            <div class="container">
                <main>
                    <div class="kieswijzer-parent">
                        <div class="kieswijzer">
                            <h1 tabindex="0">Algemene vragen</h1>
                            <fieldset>
                                <legend class="kieswijzer-legend" tabindex="0">Vraag ${this.questionIndex+1}</legend>
                                <p tabindex="0" class="kieswijzer-question">${this.questions[this.questionIndex].question}</p>
                                <div class="kieswijzer-answers">
                                    <button @click="${()=>this.recordAnswer("Ja")}" aria-label="Antwoord Ja">Ja</button>
                                    <button @click="${()=>this.recordAnswer("Nee")}" aria-label="Antwoord Nee">Nee</button>
                                    <button @click="${()=>this.recordAnswer("Overslaan")}" aria-label="Antwoord Overslaan">Overslaan</button>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </main>
            </div>`}static get styles(){return j`
            .container {
                max-width: 100%;
                margin: 50px;
            }
            
            .kieswijzer-parent {
                color: var(--kpn-white);
                padding: 20px 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
            }
             .kieswijzer-answers {
                 display: flex;
                 flex-wrap: nowrap;
                 justify-content: center;
             }
            .kieswijzer-question{
                color: var(--kpn-black);
                font-size: 2.5em;
                font-weight: bold;
            }
            .kieswijzer h1 {
                font-style: italic;
            }

            @media (max-width: 768px) {
                .kieswijzer-answers {
                    flex-wrap: wrap;
                }

                .kieswijzer-answers button {
                    width: 45%;
                }
            }

            @media (max-width: 480px) {
                .kieswijzer-answers button {
                    width: 100%;
                }
                legend{
                    min-width: 10vw;
                }
            }
            body {
                align-items: normal;
            }
            legend{
                min-width: 70vw;
            }

            main {
                line-height: 1.4;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                background-color: var(--kpn-light-gray);
                padding: 10px 10px 10px 10px;
                color: var(--kpn-black);
            }
            h1 {
                color: var(--kpn-green);
            }
            h2 {color:var(--kpn-black)
            }
            .result-button {
                color: var(--kpn-blue);
                background-color: var(--kpn-white);
                border: 2px solid var(--kpn-blue);
                padding: 10px 20px;
                height: fit-content;
                min-width: 125px;
                margin: 0 10px 0 0;
                border-radius: 9999px;
                font-weight: bold;
                cursor: pointer;
            }
            .kieswijzer-legend{color: var(--kpn-black)}
            .kieswijzer-result p{color: var(--kpn-black)}

            .result-button:hover {
                background-color: var(--kpn-blue-hover);
                border: 2px solid var(--kpn-blue-hover);
                color: var(--kpn-white);
            }

            .result-button:focus {
                outline: 2px dashed var(--kpn-blue);
                outline-offset: 2px;
            }
            .kieswijzer-answers button {
                width: 100%;
                background-color: var(--kpn-yellow);
                color: var(--kpn-black);
                border: solid;
                border-color: var(--kpn-green);
                padding: 10px 20px;
                margin: 10px;
                cursor: pointer;
                border-radius: 9999px;
                font-size: 1em;
                font-weight: bold;
            }

            .kieswijzer-answers button:hover {
                background-color: var(--kpn-yellow-hover);
                border-color: var(--kpn-green-hover);
            }
            .section-buttons button {
                color: var(--kpn-blue);
                background-color: var(--kpn-white);
                border: 2px solid var(--kpn-blue);
                padding: 10px 20px;
                height: fit-content;
                min-width: 125px;
                margin: 0 10px 0 0;
                border-radius: 9999px;
                font-weight: bold;
                cursor: pointer;
            }

            .section-buttons .read-more {
                background-color: var(--kpn-blue);
                color: var(--kpn-white);
            }

            .section-buttons button:hover {
                background-color: var(--kpn-blue-hover);
                border: 2px solid var(--kpn-blue-hover);
                color: var(--kpn-white);
            }

            .section-buttons button:focus {
                outline: 2px dashed var(--kpn-blue);
                outline-offset: 2px;
            }
            .reset-button{
                color: var(--kpn-white);
                background-color: var(--kpn-blue);
                border: 2px solid var(--kpn-blue);
                padding: 10px 20px;
                height: fit-content;
                min-width: 125px;
                margin: 13px 0 0 0;
                border-radius: 9999px;
                font-weight: bold;
                cursor: pointer;
            }
            .reset-button:hover {
                background-color: var(--kpn-white);
                color: var(--kpn-blue-hover);
            }

        `}}x(ui,"properties",{questionIndex:{type:Number},answers:{type:Array},displayResults:{type:Boolean},isLoading:{type:Boolean}});window.customElements.define("kpn-voting-advice",ui);const Un="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVwAAAFcBAMAAAB2OBsfAAAAFVBMVEXu7u7///8AAAA1NTVoaGiamprGxsakvAznAAAIB0lEQVR42u3dS3vbKBQGYOF2Zg3xZS0j2etaSbO3c1lHatN15abz/3/CyLbipjNGAgScTylnp17s9+E5wBGWIBGn4Mkp0C8jN3IjN3IjN3IjN3IjF+IySVj7J+CXkRu5IbiCoXPZmy4sTlccltvE38/3d9eyjez6/uHb+S/RuPz5Tl6Im4fvgNyfF61tMz8yKC7/WsjuuKnbf07NPWClRtw8Hf8DMVcT27Ywp+Uy8VJI/fjMBCVXLO6kUWRPgo4rfhbSNB6Hce3rTsa/SIvIa0FRnovFTlpFkxDhueKvQtrGY/MJYbniRQ6Iz4wH5YofclCsWEiu+CIHRs7CcYe27RtvCK4D7as3ANeJtsnfMFxH2pPXO/ejdBa3/rlz6TA++eYuCpdcufXL5TvpNkruk1s51sqs5v5WIH9I57HyV57PpYe49cXlhQ+uLD1xKy9amTEv3A/SU6x9cBfSW2w9cHf+uBlzzv0gPcbaNXchvcbrZOyKW/nl5swpdyY9xy13yPU0Qfy/1nHCZXvv2qZ2cMVlcxkgjr3NBdd3P2t7m87auk6hGaRxpdw4Ks93YbiHUscBdyYDxScn3F0ormQOuMEaV8rUATdc4zbNO5gbsHGb7B3MDdm4TfMO5AZt3F/Na8sN27jN2DuEywI37rl5LblVaG4mBnDnMnicboOsuOEbty3M7LgLSRCl9QrkhIK7ti7PCwquZJbcGYn2WKbbcCsabm7HXUiiKK24Eyru2opbUHEls+DOyLRNZzPn7um4uTmXS8KojblTSu6Sm3IrSm5uyiXNhbbOMeBOabkpN+NWtNxMGK1ALiRxlEbl+ZSauzTiVtTc3ITLJXnUBtwZPXdjwN3Tc1cGXAkQTJs7R+ButbkTBO5am7tD4Ga63IWEiFKTO8XgbjS5ewzuSpNbYHClHhckdQ/Jq7MCOUXhplyjPGd7FO5Ki4uSuk3yanDnMFpZanCnONyN6OXipO75UeROLk7qHsuGHu5CAkXdy50hcTd9XDZB4qa93AqJm/dyCySu7ONC9bRzX1NyZ1jcTQ93gsVNu1cgsXraeRldVZ6D9TSZdXPBetrrb0Aq7hyNu+3kTtG4yy4uUvXYLj3xLu4OjZt3cgs0btbFhRsY2qFBwZ3hcbcd3Cked6PmYtXmb4YGBbfC4646uDs8btbBlYAhlCuQHJFbK8vzOSK3VHJniNytknuFyF0quRNEbqrkVojclZK7Q+TmSm6ByM2UXAkZTMFdYHJrBXeOyS0V3Bkmd6vgTjG5GwX3CpO7VHAnmNz08gok4r1Eez9xqTwfG3eHyc0V3AKTmym4EjQucwUql13kclRufZG7GBd3jsot3wN3hsrdvgfuFJW7idxA3F/1Li73Ynl+hcpdRm7kvivuBJWbRm7kRi4dN467fzz3XEoy3NzlF8pzYO7FuwnYZIj3apHbw42rOH8k912sQI5sORqWO7LfJpL38EPVKH4GDHOixJDIFQ8IgHJXCm6FyV0ruHvUG+FRPS2yHNezOJtxPem0HddzZOX7eKgQtGhgo3rCNBvX87v5uJ6OVj/MDTmtpWN+EeFtKQk5T2yUryhBzhOlkgt5614ruZDzBFO/rwY48Gbjehuw6+VFwIG349VQxPX+zbjeE+56rXmOOY6puBxzYBjPDgLdGx5UkAODkgu31NC5WQdekbPt3AcSb6OZ7k2SAO8ru7hgVcOqhwtWNaQ9XLBpuG+DL7BpuOzhgk3DvXvpQfW1/q3/9oA9rWPbyilgT+vgQvW1/k1BkeY1jS1XkWpInQ1tJ3ip27W7MVANWWqcRAM0UWht077DSV0dLkzyLrW4MMlb6h0xgFPfaHErlNTV44Is7OkejzFHSV3No10glp60j3bBuL/UPzgHoubVP5YIYh7WP/QJYR42OVLrCmIY0+YCrOzVBmdh06+in1bNNQ+KpL+lSE249PfDpdExnNQTm/IYTsWpoROEXNDnzhFyweCA3oJ+XDDhkmaD+fHHpDOF+eHSlHWDxdHdlFWkzcHohFWkzbHzdPcUa2HDJVseKa24VJ0tFx3cy6c1Hy7ZBxruJ+UZ0l1/QfYCG0vsuDTr/v95cMyAS1LnlIkll+Qhw9OMZsclGMu23JpLcFPR3kbYcdmUYhSz5iY8cPNmLBnCDV2lp3wYl5M0rjU3bPOmfCg3aPaywVwRsNBJxXBuwOZl/dyOevd0Ga6OvOUdjP7yvL0M1byHYcEBN1TzHiY0B9wkzF3QsVpwwQ1TmB1LMRfcJMSP2iuRuOKGuGsruTuu/952yxOHXN+97bW2ccWdB+hnDrl+V8zWInHM9Tm3Zcw512c6bIV7rr90WAsfXF+jQ8YMuL31rvc1qJIniTZDn+tpsrgViR+ul9phJRJfXA+TW1Zzb9xELAofieuN63r03YrEK1d8dNvNuGeu+OF0fvDOFV/cDQohuK6Gs5UIw3XjzVkorgvvSRuGOzx/W20QLmdDvSsmAnKb6fhliPYz45Zcg3r398sB88Wj0RfZluf/ubStH7JSUHAFt0rgvBY0XGGTwLc2X+SG2xSUd4aJ8CQIuU2XfSmMRgTBKLmHx/m0M/imFjyh5R7BX7WwT4IP+iI33ONvhV+L/pYVg7/IDff4QsbPjk6XPTL7T/bCPYifL4pvHr4P/WQv3IP4n+f76+tzo17fP3xjwsEne+G+2eXhkNGnK85wub83Nnf/yR65Pi4t612yy8iN3MiN3MiN3MiN3MiFuBxPvRu5Hi//Ba53ereE8AHWAAAAAElFTkSuQmCC";class Ye extends y{constructor(){super(),this.user=[]}connectedCallback(){super.connectedCallback(),this._loadData().then(e=>this.requestUpdate())}async _loadData(){const e=await fetch("./src/assets/json/user.json").then(l=>l.json()),t=await fetch("./src/assets/json/boostType.json").then(l=>l.json()),i=await fetch("./src/assets/json/boost.json").then(l=>l.text()).then(l=>l?JSON.parse(l):[]),n=JSON.parse(localStorage.getItem("boost"))||[],a=[...i,...n],r=parseInt(localStorage.getItem("userId"));this.user=this.findUser(e,r),this.boostType=t,this.boost=a,this.updateBoostContent()}findUser(e,t){let i=[];return e.forEach(n=>{n.id===t&&(i=n)}),i}combineBoosts(e){let t={inlay:0,userId:0,accepted:!1};return e.forEach(i=>{t.inlay+=i.inlay,t.userId=i.userId,t.accepted=i.accepted}),t}findCombinedBoostPerType(e,t){let i=[];return e.forEach(n=>{n.boostTypeId===t&&n.userId===this.user.id&&n.accepted===!0&&i.push(n)}),this.combineBoosts(i)}getInvestmentDates(e,t){let i=[];return e.forEach(n=>{if(n.boostTypeId===t&&n.userId===this.user.id&&n.accepted===!0){let a=n.createdAt;if(typeof a=="string"){if(a.includes("T"))a=a.split("T")[0];else if(a.includes("/")){const[l,s,p]=a.split(/[/, ]/);a=`${p}-${s}-${l}`}}const r=new Date(a);isNaN(r)?console.error(`Invalid date format: ${n.createdAt}`):i.push(this.dateToString(r))}}),i}dateToString(e){const t={year:"numeric",month:"long",day:"numeric"};return e.toLocaleDateString("nl-NL",t)}updateBoostContent(){this.boostType.forEach(e=>{let t=this.findCombinedBoostPerType(this.boost,e.id);if(t.inlay===0)return;let i=this.shadowRoot.querySelector("#boosts"+e.id),n=this.getInvestmentDates(this.boost,e.id),a="";n.length===1?a=`Je hebt 1 investering gedaan op ${n[0]}.`:a=`Je hebt ${n.length} investeringen gedaan op de volgende datums: ${n.join(", ")}.`,i.innerHTML=`
            <div class="information-box">
               <div class="text">
                   <p class="text">
                       Je hebt €${t.inlay} geïnvesteerd in ${e.name}.
                       <i class="fa-solid fa-circle-info icon"></i>
                          <span class="tooltip">${a}</span>
                   </p>
                </div>
               <div class="read-more">
                   <a href="">Lees meer</a>
               </div>
            </div>
           `})}render(){return f`
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
           <div class="container">
               <main class="mykpn">
                   <section class="profile-section">
                       <div class="profile-box">
                           <img class="image" src="${Un}" alt="Profielfoto">
                           <div class="info">
                               <h1>${this.user.firstName} ${this.user.lastName}</h1>
                           </div>
                       </div>
                   </section>
                   <div class="content">
                       <section class="information-section">
                           <div class="information-title">
                               <h1>Mijn gegevens</h1>
                           </div>
                           <div class="information">
                               <div class="information-box">
                                   <h3>Naam</h3>
                                   <p>${this.user.firstName} ${this.user.lastName}</p>
                               </div>
                               <div class="information-box">
                                   <h3>Geboortedatum</h3>
                                   <p>${this.dateToString(new Date(this.user.birthdate))}</p>
                               </div>
                               <div class="information-box">
                                   <h3>Email</h3>
                                   <p>${this.user.email}</p>
                               </div>
                               <div class="information-box">
                                   <h3>Telefoonnummer</h3>
                                   <p>${this.user.phone}</p>
                               </div>
                               <div class="information-box">
                                   <h3>Adres</h3>
                                   <p>${this.user.address}</p>
                               </div>
                               <div class="information-box">
                                   <h3>Woonplaats</h3>
                                   <p>${this.user.city}, ${this.user.country}</p>
                               </div>
                               <div class="information-box">
                                   <h3>Salaris</h3>
                                   <p>€${this.user.salary}</p>
                               </div>
                               <div class="information-box">
                                   <h3>Taal</h3>
                                   <p>${this.user.language}</p>
                               </div>
                           </div>
                       </section>
                   </div>
                   <div class="content">
                       <section class="choice-section">
                           <div class="choice-title">
                               <h1>Jouw FLEX & BOOST keuzes</h1>
                           </div>
                           <div class="cards">
                               <article class="card margin-right">
                                   <h2 class="card-title">FLEX</h2>
                                   <div class="information-box">
                                       <div class="text">
                                           <p class="text">
                                               Deelgenomen aan KPN Plan
                                               <i class="fa-solid fa-circle-info icon"></i>
                                               <span class="tooltip">Meer informatie over KPN Plan</span>
                                           </p>
                                       </div>
                                       <div class="read-more">
                                           <a href="">Lees meer</a>
                                       </div>
                                   </div>
                                   <div class="information-box">
                                       <div class="text">
                                           <p class="text">
                                               Maandelijkse uitbetaling van vakantiegeld en dertiende maand
                                               <i class="fa-solid fa-circle-info icon"></i>
                                               <span class="tooltip">Meer informatie over vakantiegeld en dertiende maand</span>
                                           </p>
                                       </div>
                                       <div class="read-more">
                                           <a href="">Lees meer</a>
                                       </div>
                                   </div>
                                   <div class="card-button">
                                       <a @click="${e=>{e.preventDefault(),L.go("/frontend-project-v2b_letsgo/flex")}}" class="button">Ga naar flex</a>
                                   </div>
                               </article>
                               
                               <article class="card">
                                   <h2 class="card-title">BOOST</h2>
                                   <div id="boosts1"></div>
                                   <div id="boosts2"></div>
                                   <div id="boosts3"></div>    
                                   <div id="boosts4"></div>
                                   <div class="card-button">
                                       <a @click="${e=>{e.preventDefault(),L.go("/frontend-project-v2b_letsgo/boost")}}" class="button">Ga naar boost</a>
                                   </div>
                               </article>
                           </div>
                       </section>
                   </div>
               </main>
           </div>`}}x(Ye,"properties",{user:{type:Array}}),x(Ye,"styles",j`
        .container {
            max-width: 100%;
            margin: 50px;
        }

        body {
            height: auto;
        }

        .mykpn {
            line-height: 1.4;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: var(--kpn-light-gray);
            border-radius: 10px;
            padding: 50px 20px;
        }

        .mykpn h1 {
            color: var(--kpn-green);
        }

        .mykpn h2 {
            color: var(--kpn-green);
        }

        .mykpn h3 {
            color: var(--kpn-black);
            font-weight: normal;
        }

        .mykpn p {
            color: var(--kpn-black);
        }

        .content {
            display: flex;
            justify-content: center;
        }

        .profile-section {
            display: flex;
            justify-content: center;
            width: 100%;
        }

        .profile-box {
            display: flex;
            justify-content: center;
            margin: 10px;
            border: 1px solid var(--kpn-border-gray);
            border-radius: 10px;
            padding: 20px;
        }

        .image {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            margin-right: 10px;
        }

        .info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            text-align: left;
            color: var(--kpn-black) !important;
        }

        .content {
            display: flex;
            justify-content: center;
            width: 100%;
        }

        .information-section {
            margin: 30px 0;
            max-width: 900px;
            width: 100%;
        }

        .information-title {
            border-bottom: 1px solid var(--kpn-border-gray);
        }

        .information-box {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid var(--kpn-border-gray);
        }

        .choice-section {
            max-width: 900px;
            width: 100%;
        }

        .cards {
            display: flex;
            justify-content: space-between;
        }

        .card {
            display: flex;
            background-color: var(--kpn-white);
            color: var(--kpn-black);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 425px;
            flex-direction: column;
            margin-top: 20px;
        }

        .margin-right {
            margin-right: 20px;
        }

        .card-title {
            padding: 10px 0;
        }

        .card-button {
            display: flex;
            margin-top: auto;
            padding-top: 20px;
        }

        .card-button a {
            width: 100%;
            background-color: var(--kpn-green);
            color: var(--kpn-white);
            border: none;
            padding: 10px 20px;
            margin: 10px 0;
            cursor: pointer;
            border-radius: 9999px;
            max-width: 200px;
            text-align: center;
            text-decoration: none;
        }

        .card-button a:hover {
            background-color: var(--kpn-green-hover);
        }

        .card-title {
            border-bottom: 1px solid var(--kpn-green);
        }

        .information-box {
            align-items: center;
        }

        .text {
            width: 100%;
            position: relative;
        }

        .tooltip {
            visibility: hidden;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            text-align: center;
            border-radius: 5px;
            padding: 5px;
            font-size: 14px;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            white-space: normal;
            word-wrap: break-word;
            overflow-wrap: break-word;
            z-index: 1;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }

        .icon:hover + .tooltip {
            visibility: visible;
            opacity: 1;
        }

        .read-more {
            width: 100px;
            margin-left: 5px;
        }

        .icon {
            position: relative;
            margin-left: 5px;
        }

        @media only screen and (max-width: 800px) {
            .container {
                margin: 30px 15px;
            }

            .cards {
                justify-content: center;
                flex-wrap: wrap;
            }

            .card {
                width: 100%;
            }

            .margin-right {
                margin-right: 0;
            }

            .choice-title {
                text-align: center;
            }

            .read-more {
                margin-left: 0;
            }
        }

        @media only screen and (max-width: 550px) {
            .information-box {
                display: block;
            }
        }
    `);window.customElements.define("kpn-my-kpn",Ye);class Xe extends y{constructor(){super(),this.headerText="Default Header"}firstUpdated(){this.writeHeaderText()}writeHeaderText(){this.headerText=this.getAttribute("header-title")||"Default Header",this.shadowRoot.querySelector("#headerText").innerText=this.headerText}render(){return f`
            <header class="header">
                <div class="header-text">
                    <h1 id="headerText"></h1>
                </div>
                <div class="card-button">
                    <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/admin/home" href="" class="button">Home</a>
                </div>
                <div class="card-button">
                    <a @click="${e=>this._navigate(e)}" data-route="/frontend-project-v2b_letsgo/admin/requestBoost" href="" class="button">Boost aanvragingen</a>
                </div>
            </header>
        `}_navigate(e){e.preventDefault();const t=e.currentTarget.getAttribute("data-route");L.go(t)}}x(Xe,"properties",{title:{type:String}}),x(Xe,"styles",j`
        h1 {
            color: var(--kpn-green);
        }
        
        .header{
            border: 1px solid var(--kpn-border-gray);
            border-radius: 10px;
            padding: 10px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }

        .header-text {
            margin-right: 30px;
        }

        .card-button {
            margin: 10px;
        }

        .card-button a {
            width: 100%;
            background-color: var(--kpn-green);
            color: var(--kpn-white);
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 9999px;
            max-width: 200px;
            text-align: center;
            text-decoration: none;
        }

        .card-button a:hover {
            background-color: var(--kpn-green-hover);
        }
    `);window.customElements.define("kpn-navigate-header",Xe);class gi extends y{constructor(){super(),this.boostFilterStatus="pending"}connectedCallback(){super.connectedCallback(),this.loadExternalScripts(),this.requestBoostData()}loadExternalScripts(){let e=document.createElement("script");e.src="https://code.jquery.com/jquery-3.6.0.min.js",e.onload=()=>{let t=document.createElement("script");t.src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js",t.onload=()=>{this.initializeDataTable()},document.head.appendChild(t)},document.head.appendChild(e)}initializeDataTable(){let e=this.shadowRoot.querySelector("#boostTable");$(e).DataTable({paging:!0,searching:!0,ordering:!0,responsive:!0,language:{lengthMenu:"_MENU_",search:"_INPUT_",searchPlaceholder:"Zoeken...",info:"Pagina _PAGE_ van _PAGES_",infoEmpty:"",infoFiltered:"(gefilterd uit _MAX_ resultaten)",zeroRecords:"Geen resultaten gevonden",paginate:{first:"Eerste",previous:"Vorige",next:"Volgende",last:"Laatste"}}})}updateTableContent(e,t){let i=$(this.shadowRoot.querySelector("#boostTable")).DataTable();i.clear(),e.forEach((n,a)=>{let r=t[a];i.row.add(n);let l=i.rows().count()-1,s=$(i.row(l).node());(this.boostFilterStatus==="pending"||this.boostFilterStatus==="declined")&&s.find(".approve-boost").on("click",()=>this.approveBoost(!0,r)),(this.boostFilterStatus==="pending"||this.boostFilterStatus==="accepted")&&s.find(".not-approve-boost").on("click",()=>this.approveBoost(!1,r)),s.find(".trash").on("click",()=>this.deleteBoost(r))}),i.draw()}approveBoost(e,t){if(!confirm(`Weet je zeker dat je deze boost wilt ${e?"goedkeuren":"afkeuren"}?`))return;let a=JSON.parse(localStorage.getItem("boost"));a=a.map(r=>(r.userId===t.userId&&r.boostTypeId===t.boostTypeId&&r.inlay===t.inlay&&r.createdAt===t.createdAt&&(r.accepted=e,r.acceptedAt=new Date().toLocaleString()),r)),localStorage.setItem("boost",JSON.stringify(a)),this.requestBoostData()}changeBoostFilterStatus(e){this.boostFilterStatus=e;let t=this.shadowRoot.querySelector("#boostText");switch(e){case"accepted":t.textContent="Geaccepteerde boosts";break;case"declined":t.textContent="Afgewezen boosts";break;case"pending":t.textContent="Boosts in afwachting";break;default:t.textContent="Alle boosts";break}this.requestBoostData()}deleteBoost(e){if(confirm("Weet je zeker dat je deze boost wilt verwijderen, je kan hem niet meer terugkrijgen?")){let t=JSON.parse(localStorage.getItem("boost"));t=t.filter(i=>!(i.userId===e.userId&&i.boostTypeId===e.boostTypeId&&i.inlay===e.inlay&&i.createdAt===e.createdAt)),localStorage.setItem("boost",JSON.stringify(t)),this.requestBoostData()}}async requestBoostData(){try{let e=JSON.parse(localStorage.getItem("boost")),t=await fetch("../assets/json/boostType.json").then(n=>n.json()),i=await fetch("../assets/json/user.json").then(n=>n.json());this.updateContent(e,t,i)}catch(e){console.error(e)}}updateContent(e,t,i){let n=[],a=[];e.forEach(r=>{if(this.boostFilterStatus==="pending"&&r.acceptedAt!==null)return;if(this.boostFilterStatus==="accepted"&&!r.accepted)return;if(this.boostFilterStatus==="declined"&&r.acceptedAt===null||this.boostFilterStatus==="declined"&&r.accepted)return;let l=t.find(d=>d.id===r.boostTypeId),s=i.find(d=>d.id===r.userId),p=this.boostFilterStatus==="accepted"?'<a class="not-approve-boost"><i class="fa-solid fa-times times"></i></a>':this.boostFilterStatus==="declined"?'<a class="approve-boost"><i class="fa-solid fa-check check"></i></a>':'<a class="approve-boost"><i class="fa-solid fa-check check"></i></a><a class="not-approve-boost"><i class="fa-solid fa-times times"></i></a>';n.push([`${s.firstName} ${s.lastName}`,`€${r.inlay}`,l.name,r.description||"Geen beschrijving",`<a href="">${r.proof}</a>`,r.createdAt,p,'<i class="fa-solid fa-trash trash"></i>']),a.push(r)}),this.updateTableContent(n,a)}render(){return f`
           <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
           <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
           
           <div class="container">
               <kpn-navigate-header header-title="Boost aanvragen"></kpn-navigate-header>
               <main class="admin">
                   <section class="header-admin-text">
                       <h2 id="boostText">Boosts in afwachting</h2>
                       <div class="buttons">
                           <div class="card-button">
                               <a @click="${()=>this.changeBoostFilterStatus("accepted")}" class="button">Geaccepteerden</a>
                           </div>
                           <div class="card-button">
                               <a @click="${()=>this.changeBoostFilterStatus("declined")}"" class="button">Afgekeurden</a>
                           </div>
                           <div class="card-button">
                               <a @click="${()=>this.changeBoostFilterStatus("pending")}"" class="button">In afwachting</a>
                           </div>
                       </div>
                   </section>
                   <section class="table-section">
                       <table id="boostTable" class="table display">
                           <thead class="thead">
                               <tr class="thead">
                                   <th>Aanvrager</th>
                                   <th>Bedrag</th>
                                   <th>Boost Type</th>
                                   <th>Beschrijving</th>
                                   <th>Bewijs</th>
                                   <th>Datum</th>
                                   <th>Goedkeuren</th>
                                   <th></th>
                               </tr>
                           </thead>
                           <tbody id="tbody" class="align-items-center"></tbody>
                       </table>
                   </section>
               </main>
           </div>
        `}}x(gi,"styles",j`
        .container {
            max-width: 100%;
            margin: 50px;
            background-color: var(--kpn-white);
            padding: 10px 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            line-height: 1.4;
            border-radius: 10px;
            overflow: scroll;
        }

        body {
            height: auto;
        }

        h1 {
            color: var(--kpn-green);
        }

        h2 {
            color: var(--kpn-green);
        }

        h3 {
            color: var(--kpn-black);
            font-weight: normal;
        }

        p {
            color: var(--kpn-black);
        }

        .card-button {
            margin: 10px;
        }

        .card-button a {
            width: 100%;
            background-color: var(--kpn-green);
            color: var(--kpn-white);
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 9999px;
            max-width: 200px;
            text-align: center;
            text-decoration: none;
        }

        .card-button a:hover {
            background-color: var(--kpn-green-hover);
        }

        .admin {
            margin-top: 30px;
            border: 1px solid var(--kpn-border-gray);
            border-radius: 10px;
        }

        .header-admin-text{
            padding: 5px 10px;
            background-color: var(--kpn-gray-admin);
            border-bottom: 1px solid var(--kpn-border-gray);
            border-radius: 10px 10px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .buttons{
            display: flex;
            flex-wrap: wrap;
        }

        .table {
            margin: 20px 0;
            border-collapse: collapse;
            width: 100%;
            background-color: #fff;
            border-top: 1px solid var(--kpn-border-gray);
        }

        th {
            color: var(--kpn-green);
            font-weight: bold;
        }

        td {
            color: var(--kpn-black);
        }

        tr:nth-child(even) {
            background-color: var(--kpn-gray-admin)!important;
        }

        tr:hover {
            background-color: var(--kpn-gray-admin-hover);
        }

        .check {
            color: var(--kpn-green);
            margin-right: 10px;
            font-size: 36px;
        }

        .times {
            color: var(--kpn-error-red);
            font-size: 36px;
        }

        .trash{
            color: var(--kpn-error-red);
            font-size: 22px;
        }

        .check:hover {
            color: var(--kpn-green-hover);
            cursor: pointer;
        }

        .times:hover {
            color: var(--kpn-error-red-hover);
            cursor: pointer;
        }

        .trash:hover {
            color: var(--kpn-error-red-hover);
            cursor: pointer;
        }
        
        //dataTables
        .dataTables_length label {
            display: none; /* Verbergt de label-tekst "Show" en "entries" */
        }

        .dataTables_length select {
            border: 1px solid var(--kpn-border-gray)!important;
            border-radius: 5px!important;
            padding: 10px!important;
            color: var(--kpn-black)!important;
            margin: 10px!important;
        }

        .dataTables_filter input {
            border: 1px solid var(--kpn-border-gray)!important;
            border-radius: 5px!important;
            padding: 10px!important;
            color: var(--kpn-black)!important;
            margin: 10px!important;
        }

        .dataTables_info {
            color: var(--kpn-black)!important;
            margin: 0 10px!important;
        }

        /* General KPN-styled buttons */
        .paginate_button {
            border: 1px solid var(--kpn-green)!important;
            border-radius: 5px!important;
            padding: 8px 15px!important;
            margin: 5px!important;
            color: var(--kpn-black)!important;
            text-decoration: none!important;
            background-color: var(--kpn-green)!important;
            transition: background-color 0.3s, color 0.3s!important;
            font-size: 14px!important;
            display: inline-block!important;
        }

        .dataTables_wrapper .dataTables_paginate .paginate_button.disabled,
        .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover,
        .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active {
            color: var(--kpn-white) !important;
            border-color: var(--kpn-green) !important;
            background-color: var(--kpn-green) !important;
            cursor: not-allowed !important;
            opacity: 0.5 !important;
        }
        
        .paginate_button:hover {
            background-color: var(--kpn-green-hover)!important;
        }
    `);window.customElements.define("kpn-request-boost",gi);class fi extends y{render(){return f`
           <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
           <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
           
           <div class="container">
               <kpn-navigate-header header-title="Home"></kpn-navigate-header>
               Welkom
           </div>
        `}}x(fi,"styles",j`
        .container {
            max-width: 100%;
            margin: 50px;
            background-color: var(--kpn-white);
            padding: 10px 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            line-height: 1.4;
            border-radius: 10px;
        }

        body {
            height: auto;
        }

        h1 {
            color: var(--kpn-green);
        }

        h2 {
            color: var(--kpn-green);
        }

        h3 {
            color: var(--kpn-black);
            font-weight: normal;
        }

        p {
            color: var(--kpn-black);
        }
    `);window.customElements.define("kpn-request-home",fi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Hn=o=>(...e)=>({_$litDirective$:o,values:e});class Fn{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ze extends Fn{constructor(e){if(super(e),this.it=S,e.type!==qn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===S||e==null)return this._t=void 0,this.it=e;if(e===ae)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Ze.directiveName="unsafeHTML",Ze.resultType=1;const Vn=Hn(Ze);class Qe extends y{constructor(){super(),this.sectionData={},this.expanded=!1,this._onHashChange=this._onHashChange.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("load",this._onHashChange),window.addEventListener("hashchange",this._onHashChange)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._onHashChange)}_onHashChange(){let e=window.location.hash.replace("#","").toLowerCase();const t=this.sectionData.title.toLowerCase().replace(/ /g,"-");if(e===t){console.log("Hash matches section title:",e),this.expanded=!0;const i=this.shadowRoot.querySelector(".information-section");i&&(i.scrollIntoView({behavior:"smooth"}),window.scrollBy(0,-20))}}_textToggle(){this.expanded=!this.expanded}render(){let e=f`
            <div class="no-action"></div>
        `;return this.sectionData.action&&(e=f`
                <a @click="${t=>{t.preventDefault(),L.go("/frontend-project-v2b_letsgo/"+this.sectionData.action.url)}}">
                    <button class="get-started" tabindex="-1">
                        ${this.sectionData.action.label}
                    </button>
                </a>
            `),f`
            <section class="information-section" id="${this.sectionData.title.toLowerCase().replace(/ /g,"-")}">
                <div class="information-header">
                    <h3>${this.sectionData.title}</h3>
                    <div class="section-buttons">
                        <button class="read-more" @click="${this._textToggle}">
                            ${this.expanded?"Lees minder":"Lees meer"}
                        </button>
                        ${e}
                    </div>
                </div>
                <p class="information-text ${this.expanded?"show":""}">
                    ${Vn(this.sectionData.text)}
                </p>
            </section>
        `}}x(Qe,"properties",{sectionData:{type:Object},expanded:{type:Boolean}}),x(Qe,"styles",j`
        section {
            margin-bottom: 40px;
            padding-left: 20px;
        }

        .information-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
        
        .information-header h3 {
            font-size: 1.5em;
            font-weight: bolder;
            max-width: 40%;
        }

        .information-text {
            margin: 0;
            max-height: 0;
            overflow: hidden;
            max-width: 100%;
            font-size: 1.1em;
        }

        .information-text.show {
            max-height: fit-content;
            margin-bottom: 20px;
        }

        .section-buttons {
            display: flex;
            min-width: fit-content;
        }

        .section-buttons button {
            color: var(--kpn-blue);
            background-color: var(--kpn-white);
            border: 2px solid var(--kpn-blue);
            padding: 10px 20px;
            height: fit-content;
            min-width: 125px;
            margin: 0 10px 0 0;
            border-radius: 9999px;
            font-weight: bold;
            cursor: pointer;
        }
        
        .section-buttons a {
            text-decoration: none;
            border-radius: 9999px;
            width: fit-content;
        }
        
        .section-buttons a button {
            margin: 0;
        }

        .section-buttons .read-more {
            background-color: var(--kpn-blue);
            color: var(--kpn-white);
        }

        .section-buttons button:hover {
            background-color: var(--kpn-blue-hover);
            border: 2px solid var(--kpn-blue-hover);
            color: var(--kpn-white);
        }

        .section-buttons button:focus, .section-buttons a:focus {
            outline: 2px dashed var(--kpn-blue);
            outline-offset: 2px;
        }
        
        .no-action {
            width: 125px;
        }

        @media only screen and (max-width: 909px) {
            .information-header h3 {
                text-align: center;
                max-width: 100%;
            }
            section {
                padding-left: 0;
            }
            .information-header {
                flex-direction: column;
                margin-bottom: 20px;
            }
            
            .no-action {
                display: none;
            }

            .section-buttons {
                width: 90%;
            }

            .section-buttons a, .section-buttons button {
                width: 100%;
            }
        }
    `);window.customElements.define("information-section",Qe);class Kn{static initializeSectionData(e){return!e||!Array.isArray(e)?(console.warn("Invalid data provided to InformationService."),[]):e.map(t=>({position:parseInt(t.position,10)||0,title:t.title||"Geen titel",text:t.text||"",action:t.action||""}))}}class et{constructor(e){this.service=Kn,this.type=e}async loadData(){try{const e=await fetch("./src/assets/json/information.json");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){return console.error("Error fetching data:",e),[]}}async loadInfo(){const t=(await this.loadData()).find(i=>i.id===this.type);return t?{title:t.title,lastUpdated:t.lastUpdated,items:this.service.initializeSectionData(t.items).sort((i,n)=>i.position-n.position)}:(console.warn("No data found in response:",t),[])}}class tt extends y{constructor(){super(),this.caoData=[],this.controller=new et("cao")}async connectedCallback(){super.connectedCallback(),await this._loadData()}async _loadData(){try{this.caoData=await this.controller.loadInfo()}catch(e){console.error("Error loading CAO data:",e)}}_renderSection(e){return e.map(t=>f`
                <information-section .sectionData="${t}"></information-section>`)}_calculateLastUpdated(){let e;if(this.caoData.lastUpdated){const t=this.caoData.lastUpdated.replace(/-/g,"/").replace(/T.+/,"");e=new Date(t)}return isNaN(e)?"Invalid date":e.toLocaleDateString("nl-NL",{year:"numeric",month:"long",day:"numeric"})}render(){return f`
            <div class="container">
                <main>
                    <h1>${this.caoData.title}</h1>
                    <p class="last-updated">Laatst bijgewerkt op: <span class="date">${this._calculateLastUpdated()}</span></p>
                    ${this._renderSection(this.caoData.items)}
                </main>
            </div>
        `}}x(tt,"properties",{caoData:{type:Array}}),x(tt,"styles",j`
        .container {
            max-width: 100%;
            margin: 50px;
        }

        body {
            align-items: normal;
        }

        main {
            line-height: 1.4;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: var(--kpn-light-gray);
            padding: 50px 30px 10px 30px;
            color: var(--kpn-black);
        }

        h1 {
            color: var(--kpn-green);
        }

        .last-updated {
            color: var(--kpn-gray);
            margin-bottom: 20px;
        }

        section {
            margin-bottom: 40px;
            padding-left: 20px;
        }

        .cao-information-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .cao-information-text {
            margin: 0;
            max-height: 0;
            overflow: hidden;
            max-width: 100%;
        }

        .cao-information-text.show {
            max-height: fit-content;
            margin-bottom: 20px;
        }

        .section-buttons {
            display: flex;
        }

        .section-buttons button {
            color: var(--kpn-blue);
            background-color: var(--kpn-white);
            border: 2px solid var(--kpn-blue);
            padding: 10px 20px;
            height: fit-content;
            min-width: 125px;
            margin: 0 10px 0 0;
            border-radius: 9999px;
            font-weight: bold;
            cursor: pointer;
        }

        .section-buttons .read-more {
            background-color: var(--kpn-blue);
            color: var(--kpn-white);
        }

        .section-buttons button:hover {
            background-color: var(--kpn-blue-hover);
            border: 2px solid var(--kpn-blue-hover);
            color: var(--kpn-white);
        }

        .section-buttons button:focus {
            outline: 2px dashed var(--kpn-blue);
            outline-offset: 2px;
        }

        @media only screen and (max-width: 800px) {
            .container {
                margin: 30px 15px;
            }

            main {
                padding: 30px 15px 10px 15px;
            }

            .section-buttons {
                flex-direction: column;
            }

            .section-buttons button {
                margin: 10px 0 0 0;
            }
        }

        @media only screen and (max-width: 700px) {
            .cao-information-header {
                flex-direction: column;
                margin-bottom: 20px;
            }

            .section-buttons {
                width: 90%;
            }

            .section-buttons a, .section-buttons button {
                width: 100%;
            }
        }

        @media only screen and (max-width: 500px) {
            .date {
                display: block;
            }
            .cao-information-text {
                margin: 0;
            }
        }
    `);window.customElements.define("cao-information",tt);class it extends y{constructor(){super(),this.flexData=[],this.boostData=[],this.flexDataController=new et("flex"),this.boostDataController=new et("boost")}async connectedCallback(){super.connectedCallback(),await this._loadData()}async _loadData(){try{const e=await this.flexDataController.loadInfo(),t=await this.boostDataController.loadInfo();this.flexData=e,this.boostData=t}catch(e){console.error("Error loading Flex & Boost data:",e)}}_renderSection(e){return e.map(t=>f`
                <information-section .sectionData="${t}"></information-section>`)}_parseDate(e){if(!e)return null;const t=e.replace(/-/g,"/").replace(/T.+/,""),i=new Date(t);return isNaN(i)?null:i}_calculateLastUpdated(){const e=this._parseDate(this.flexData.lastUpdated),t=this._parseDate(this.boostData.lastUpdated);let i;if(e&&t)i=e>t?e:t;else if(e)i=e;else if(t)i=t;else return"Invalid date";return i.toLocaleDateString("nl-NL",{year:"numeric",month:"long",day:"numeric"})}render(){return f`
            <div class="container">
                <main>
                    <h1>Flex & Boost Uitleg</h1>
                    <p class="last-updated">Laatst bijgewerkt op: <span
                            class="date">${this._calculateLastUpdated()}</span></p>
                    <div class="content">
                        <section class="flex-boost">
                            <h2>Flex</h2>
                            <div class="flex-boost-content" id="flex">
                                ${this._renderSection(this.flexData.items)}
                            </div>
                        </section>

                        <section class="flex-boost">
                            <h2>Boost</h2>
                            <div class="flex-boost-content" id="boost">
                                ${this._renderSection(this.boostData.items)}
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        `}}x(it,"properties",{flexData:{type:Array},boostData:{type:Array}}),x(it,"styles",j`
        .container {
            max-width: 100%;
            margin: 50px;
        }

        body {
            align-items: normal;
        }

        main {
            line-height: 1.4;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: var(--kpn-light-gray);
            padding: 30px;
            color: var(--kpn-black);
            margin-bottom: 20px;
        }

        h1 {
            color: var(--kpn-green);
        }

        h2 {
            color: var(--kpn-green);
        }

        .last-updated {
            color: var(--kpn-gray);
        }

        .content {
            display: flex;
            gap: 100px;
        }

        .flex-boost {
            width: 50%;
        }

        .flex-boost-information-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .flex-boost-information-text {
            margin: 0;
            max-height: 0;
            overflow: hidden;
            max-width: 100%;
        }

        .flex-boost-information-text.show {
            max-height: fit-content;
            margin-bottom: 20px;
        }

        .section-buttons {
            display: flex;
        }

        .section-buttons button {
            color: var(--kpn-blue);
            background-color: var(--kpn-white);
            border: 2px solid var(--kpn-blue);
            padding: 10px 20px;
            height: fit-content;
            min-width: 125px;
            margin: 0 10px 0 0;
            border-radius: 9999px;
            font-weight: bold;
            cursor: pointer;
        }

        .section-buttons .read-more {
            background-color: var(--kpn-blue);
            color: var(--kpn-white);
        }

        .section-buttons button:hover {
            background-color: var(--kpn-blue-hover);
            border: 2px solid var(--kpn-blue-hover);
            color: var(--kpn-white);
        }

        .section-buttons button:focus {
            outline: 2px dashed var(--kpn-blue);
            outline-offset: 2px;
        }

        @media only screen and (max-width: 1020px) {
            .content {
                display: block;
            }

            .flex-boost {
                width: 100%;
            }
        }

        @media only screen and (max-width: 870px) {
            .container {
                margin: 30px 15px;
            }

            main {
                padding: 30px 15px 10px 15px;
            }

            .content {
                display: block;
            }

            .flex-boost {
                width: 100%;
            }
        }
        @media only screen and (max-width: 700px) {
            .date {
                display: block;
            }

            .flex-boost-information-header {
                flex-direction: column;
            }
        }
        @media only screen and (max-width: 500px) {
            .flex-boost-information-text .boost-information-text {
                margin: 0;
            }
        }
    `);window.customElements.define("flex-boost-information",it);class Jn extends y{static get properties(){return{currentPath:{type:String}}}constructor(){super(),this.currentPath=""}firstUpdated(){if(window.localStorage.getItem("userId")){let e=this.shadowRoot.querySelector("router-outlet");new L(e).setRoutes(An),window.addEventListener("vaadin-router-location-changed",n=>{this.currentPath=n.detail.location.pathname,localStorage.setItem("currentPath",this.currentPath),this._highlightActiveLink(this.currentPath)});const i=localStorage.getItem("currentPath");i&&window.location.pathname==="/"&&L.go(i)}}_highlightActiveLink(e){const t=this.renderRoot.querySelector("kpn-sidebar")||document.querySelector("kpn-sidebar");t&&typeof t.highlightActiveLink=="function"&&t.highlightActiveLink(e)}render(){return localStorage.getItem("userId")?f`
            <div class="layout">
                <div id="sidebar" class="sidebar">
                    <kpn-sidebar></kpn-sidebar>
                </div>
                <div id="content" class="content">
                    <router-outlet></router-outlet>
                </div>
            </div>
        `:f`
                <kpn-login></kpn-login>
            `}static get styles(){return j`
            :host {
                display: block;
                width: 100%;
                height: 100vh;
            }

            .layout {
                position: relative;
                display: flex;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }

            .sidebar-wrapper {
                position: relative;
                width: 200px;
                flex-shrink: 0;
                z-index: 999;
            }

            .content {
                flex-grow: 1;
                height: 100%;
                overflow-y: auto;
            }
        `}}window.customElements.define("kpn-router",Jn);
