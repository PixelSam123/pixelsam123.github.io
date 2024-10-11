const u={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return te(this.context.count)},getNextContextId(){return te(this.context.count++)}};function te(e){const t=String(e),n=t.length-1;return u.context.id+(n?String.fromCharCode(96+n):"")+t}function T(e){u.context=e}function Ce(){return{...u.context,id:u.getNextContextId(),count:0}}const Ee=(e,t)=>e===t,B=Symbol("solid-proxy"),ce=typeof Proxy=="function",Ne=Symbol("solid-track"),U={equals:Ee};let ue=we;const O=1,G=2,ae={owned:null,cleanups:null,context:null,owner:null};var g=null;let q=null,$e=null,b=null,w=null,S=null,K=0;function v(e,t){const n=b,s=g,i=e.length===0,r=t===void 0?s:t,l=i?ae:{owned:null,cleanups:null,context:r?r.context:null,owner:r},o=i?e:()=>e(()=>E(()=>D(l)));g=l,b=null;try{return M(o,!0)}finally{b=n,g=s}}function W(e,t){t=t?Object.assign({},U,t):U;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),be(n,i));return[ye.bind(n),s]}function L(e,t,n){const s=ee(e,t,!1,O);F(s)}function ke(e,t,n){ue=Me;const s=ee(e,t,!1,O),i=R&&ge(R);i&&(s.suspense=i),s.user=!0,S?S.push(s):F(s)}function C(e,t,n){n=n?Object.assign({},U,n):U;const s=ee(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,F(s),ye.bind(s)}function mt(e){return M(e,!1)}function E(e){if(b===null)return e();const t=b;b=null;try{return e()}finally{b=t}}function pt(e){ke(()=>E(e))}function de(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function xt(){return b}function Pe(){return g}function Oe(e){S.push.apply(S,e),e.length=0}function he(e,t){const n=Symbol("context");return{id:n,Provider:De(n),defaultValue:e}}function ge(e){let t;return g&&g.context&&(t=g.context[e.id])!==void 0?t:e.defaultValue}function Te(e){const t=C(e),n=C(()=>Q(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let R;function Le(){return R||(R=he())}function ye(){if(this.sources&&this.state)if(this.state===O)F(this);else{const e=w;w=null,M(()=>Y(this),!1),w=e}if(b){const e=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(e)):(b.sources=[this],b.sourceSlots=[e]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function be(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&M(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=q&&q.running;l&&q.disposed.has(r),(l?!r.tState:!r.state)&&(r.pure?w.push(r):S.push(r),r.observers&&me(r)),l||(r.state=O)}if(w.length>1e6)throw w=[],new Error},!1)),t}function F(e){if(!e.fn)return;D(e);const t=K;je(e,e.value,t)}function je(e,t,n){let s;const i=g,r=b;b=g=e;try{s=e.fn(t)}catch(l){return e.pure&&(e.state=O,e.owned&&e.owned.forEach(D),e.owned=null),e.updatedAt=n+1,pe(l)}finally{b=r,g=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?be(e,s):e.value=s,e.updatedAt=n)}function ee(e,t,n,s=O,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:g?g.context:null,pure:n};return g===null||g!==ae&&(g.owned?g.owned.push(r):g.owned=[r]),r}function V(e){if(e.state===0)return;if(e.state===G)return Y(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<K);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===O)F(e);else if(e.state===G){const s=w;w=null,M(()=>Y(e,t[0]),!1),w=s}}function M(e,t){if(w)return e();let n=!1;t||(w=[]),S?n=!0:S=[],K++;try{const s=e();return Ie(n),s}catch(s){n||(S=null),w=null,pe(s)}}function Ie(e){if(w&&(we(w),w=null),e)return;const t=S;S=null,t.length&&M(()=>ue(t),!1)}function we(e){for(let t=0;t<e.length;t++)V(e[t])}function Me(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:V(s)}if(u.context){if(u.count){u.effects||(u.effects=[]),u.effects.push(...e.slice(0,n));return}T()}for(u.effects&&(u.done||!u.count)&&(e=[...u.effects,...e],n+=u.effects.length,delete u.effects),t=0;t<n;t++)V(e[t])}function Y(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===O?s!==t&&(!s.updatedAt||s.updatedAt<K)&&V(s):i===G&&Y(s,t)}}}function me(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=G,n.pure?w.push(n):S.push(n),n.observers&&me(n))}}function D(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),l=n.observerSlots.pop();s<i.length&&(r.sourceSlots[l]=s,i[s]=r,n.observerSlots[s]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)D(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)D(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ve(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function pe(e,t=g){throw ve(e)}function Q(e){if(typeof e=="function"&&!e.length)return Q(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=Q(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function De(e,t){return function(s){let i;return L(()=>i=E(()=>(g.context={...g.context,[e]:s.value},Te(()=>s.children))),void 0),i}}const _e=Symbol("fallback");function ne(e){for(let t=0;t<e.length;t++)e[t]()}function Fe(e,t,n={}){let s=[],i=[],r=[],l=0,o=t.length>1?[]:null;return de(()=>ne(r)),()=>{let f=e()||[],d=f.length,a,c;return f[Ne],E(()=>{let y,m,p,P,N,x,A,$,j;if(d===0)l!==0&&(ne(r),r=[],s=[],i=[],l=0,o&&(o=[])),n.fallback&&(s=[_e],i[0]=v(Se=>(r[0]=Se,n.fallback())),l=1);else if(l===0){for(i=new Array(d),c=0;c<d;c++)s[c]=f[c],i[c]=v(h);l=d}else{for(p=new Array(d),P=new Array(d),o&&(N=new Array(d)),x=0,A=Math.min(l,d);x<A&&s[x]===f[x];x++);for(A=l-1,$=d-1;A>=x&&$>=x&&s[A]===f[$];A--,$--)p[$]=i[A],P[$]=r[A],o&&(N[$]=o[A]);for(y=new Map,m=new Array($+1),c=$;c>=x;c--)j=f[c],a=y.get(j),m[c]=a===void 0?-1:a,y.set(j,c);for(a=x;a<=A;a++)j=s[a],c=y.get(j),c!==void 0&&c!==-1?(p[c]=i[a],P[c]=r[a],o&&(N[c]=o[a]),c=m[c],y.set(j,c)):r[a]();for(c=x;c<d;c++)c in p?(i[c]=p[c],r[c]=P[c],o&&(o[c]=N[c],o[c](c))):i[c]=v(h);i=i.slice(0,l=d),s=f.slice(0)}return i});function h(y){if(r[c]=y,o){const[m,p]=W(c);return o[c]=p,t(f[c],m)}return t(f[c])}}}let xe=!1;function He(){xe=!0}function Be(e,t){if(xe&&u.context){const n=u.context;T(Ce());const s=E(()=>e(t||{}));return T(n),s}return E(()=>e(t||{}))}function H(){return!0}const J={get(e,t,n){return t===B?n:e.get(t)},has(e,t){return t===B?!0:e.has(t)},set:H,deleteProperty:H,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:H,deleteProperty:H}},ownKeys(e){return e.keys()}};function X(e){return(e=typeof e=="function"?e():e)?e:{}}function Ue(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function At(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&B in o,e[l]=typeof o=="function"?(t=!0,C(o)):o}if(ce&&t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const f=X(e[o])[l];if(f!==void 0)return f}},has(l){for(let o=e.length-1;o>=0;o--)if(l in X(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(X(e[o])));return[...new Set(l)]}},J);const n={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const f=Object.getOwnPropertyNames(o);for(let d=f.length-1;d>=0;d--){const a=f[d];if(a==="__proto__"||a==="constructor")continue;const c=Object.getOwnPropertyDescriptor(o,a);if(!s[a])s[a]=c.get?{enumerable:!0,configurable:!0,get:Ue.bind(n[a]=[c.get.bind(o)])}:c.value!==void 0?c:void 0;else{const h=n[a];h&&(c.get?h.push(c.get.bind(o)):c.value!==void 0&&h.push(()=>c.value))}}}const i={},r=Object.keys(s);for(let l=r.length-1;l>=0;l--){const o=r[l],f=s[o];f&&f.get?Object.defineProperty(i,o,f):i[o]=f?f.value:void 0}return i}function Ge(e,...t){if(ce&&B in e){const i=new Set(t.length>1?t.flat():t[0]),r=t.map(l=>new Proxy({get(o){return l.includes(o)?e[o]:void 0},has(o){return l.includes(o)&&o in e},keys(){return l.filter(o=>o in e)}},J));return r.push(new Proxy({get(l){return i.has(l)?void 0:e[l]},has(l){return i.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!i.has(l))}},J)),r}const n={},s=t.map(()=>({}));for(const i of Object.getOwnPropertyNames(e)){const r=Object.getOwnPropertyDescriptor(e,i),l=!r.get&&!r.set&&r.enumerable&&r.writable&&r.configurable;let o=!1,f=0;for(const d of t)d.includes(i)&&(o=!0,l?s[f][i]=r.value:Object.defineProperty(s[f],i,r)),++f;o||(l?n[i]=r.value:Object.defineProperty(n,i,r))}return[...s,n]}const Re=e=>`Stale read from <${e}>.`;function St(e){const t="fallback"in e&&{fallback:()=>e.fallback};return C(Fe(()=>e.each,e.children,t||void 0))}function Ct(e){const t=e.keyed,n=C(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return C(()=>{const s=n();if(s){const i=e.children;return typeof i=="function"&&i.length>0?E(()=>i(t?s:()=>{if(!E(n))throw Re("Show");return e.when})):i}return e.fallback},void 0,void 0)}const Ve=he();function Et(e){let t=0,n,s,i,r,l;const[o,f]=W(!1),d=Le(),a={increment:()=>{++t===1&&f(!0)},decrement:()=>{--t===0&&f(!1)},inFallback:o,effects:[],resolved:!1},c=Pe();if(u.context&&u.load){const m=u.getContextId();let p=u.load(m);if(p&&(typeof p!="object"||p.status!=="success"?i=p:u.gather(m)),i&&i!=="$$f"){const[P,N]=W(void 0,{equals:!1});r=P,i.then(()=>{if(u.done)return N();u.gather(m),T(s),N(),T()},x=>{l=x,N()})}}const h=ge(Ve);h&&(n=h.register(a.inFallback));let y;return de(()=>y&&y()),Be(d.Provider,{value:a,get children(){return C(()=>{if(l)throw l;if(s=u.context,r)return r(),r=void 0;s&&i==="$$f"&&T();const m=C(()=>e.children);return C(p=>{const P=a.inFallback(),{showContent:N=!0,showFallback:x=!0}=n?n():{};if((!P||i&&i!=="$$f")&&N)return a.resolved=!0,y&&y(),y=s=i=void 0,Oe(a.effects),m();if(x)return y?p:v(A=>(y=A,s&&(T({id:s.id+"F",count:0}),s=void 0),e.fallback),c)})})}})}const Ye=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ke=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ye]),qe=new Set(["innerHTML","textContent","innerText","children"]),Xe=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),We=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Qe(e,t){const n=We[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Je=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ze=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),ze={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function et(e,t,n){let s=n.length,i=t.length,r=s,l=0,o=0,f=t[i-1].nextSibling,d=null;for(;l<i||o<r;){if(t[l]===n[o]){l++,o++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===l){const a=r<s?o?n[o-1].nextSibling:n[r-o]:f;for(;o<r;)e.insertBefore(n[o++],a)}else if(r===o)for(;l<i;)(!d||!d.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[o]===t[i-1]){const a=t[--i].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--r],a),t[i]=n[r]}else{if(!d){d=new Map;let c=o;for(;c<r;)d.set(n[c],c++)}const a=d.get(t[l]);if(a!=null)if(o<a&&a<r){let c=l,h=1,y;for(;++c<i&&c<r&&!((y=d.get(t[c]))==null||y!==a+h);)h++;if(h>a-o){const m=t[l];for(;o<a;)e.insertBefore(n[o++],m)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const se="_$DX_DELEGATE";function ie(e,t,n,s={}){let i;return v(r=>{i=r,t===document?e():ut(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function Nt(e,t,n){let s;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},r=()=>(s||(s=i())).cloneNode(!0);return r.cloneNode=r,r}function tt(e,t=window.document){const n=t[se]||(t[se]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,Ae))}}function $t(e,t,n){k(e)||(e[t]=n)}function Z(e,t,n){k(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function nt(e,t,n,s){k(e)||(s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s))}function st(e,t,n){k(e)||(n?e.setAttribute(t,""):e.removeAttribute(t))}function it(e,t){k(e)||(t==null?e.removeAttribute("class"):e.className=t)}function rt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n,typeof n!="function"&&n)}function ot(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let r,l;for(r=0,l=i.length;r<l;r++){const o=i[r];!o||o==="undefined"||t[o]||(re(e,o,!1),delete n[o])}for(r=0,l=s.length;r<l;r++){const o=s[r],f=!!t[o];!o||o==="undefined"||n[o]===f||!f||(re(e,o,!0),n[o]=f)}return n}function lt(e,t,n){if(!t)return n?Z(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,r;for(r in n)t[r]==null&&s.removeProperty(r),delete n[r];for(r in t)i=t[r],i!==n[r]&&(s.setProperty(r,i),n[r]=i);return n}function ft(e,t={},n,s){const i={};return s||L(()=>i.children=_(e,t.children,i.children)),L(()=>typeof t.ref=="function"&&ct(t.ref,e)),L(()=>at(e,t,n,!0,i,!0)),i}function ct(e,t,n){return E(()=>e(t,n))}function ut(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return _(e,t,s,n);L(i=>_(e,t(),i,n),s)}function at(e,t,n,s,i={},r=!1){t||(t={});for(const l in i)if(!(l in t)){if(l==="children")continue;i[l]=oe(e,l,null,i[l],n,r,t)}for(const l in t){if(l==="children")continue;const o=t[l];i[l]=oe(e,l,o,i[l],n,r,t)}}function dt(e,t,n={}){if(globalThis._$HY.done)return ie(e,t,[...t.childNodes],n);u.completed=globalThis._$HY.completed,u.events=globalThis._$HY.events,u.load=s=>globalThis._$HY.r[s],u.has=s=>s in globalThis._$HY.r,u.gather=s=>fe(t,s),u.registry=new Map,u.context={id:n.renderId||"",count:0};try{return fe(t,n.renderId),ie(e,t,[...t.childNodes],n)}finally{u.context=null}}function ht(e){let t,n;return!k()||!(t=u.registry.get(n=yt()))?e():(u.completed&&u.completed.add(t),u.registry.delete(n),t)}function kt(e){let t=e,n=0,s=[];if(k(e))for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="$")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function Pt(){u.events&&!u.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=u;if(t){for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;t.shift(),Ae(s)}u.done&&(u.events=_$HY.events=null,u.completed=_$HY.completed=null)}}),u.events.queued=!0)}function k(e){return!!u.context&&!u.done&&(!e||e.isConnected)}function gt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function re(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,r=s.length;i<r;i++)e.classList.toggle(s[i],n)}function oe(e,t,n,s,i,r,l){let o,f,d,a,c;if(t==="style")return lt(e,n,s);if(t==="classList")return ot(e,n,s);if(n===s)return s;if(t==="ref")r||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);s&&e.removeEventListener(h,s,typeof s!="function"&&s),n&&e.addEventListener(h,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);s&&e.removeEventListener(h,s,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),y=Je.has(h);if(!y&&s){const m=Array.isArray(s)?s[0]:s;e.removeEventListener(h,m)}(y||n)&&(rt(e,h,n,y),y&&tt([h]))}else if(t.slice(0,5)==="attr:")Z(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")st(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(d=qe.has(t))||!i&&((a=Qe(t,e.tagName))||(f=Ke.has(t)))||(o=e.nodeName.includes("-")||"is"in l)){if(c)t=t.slice(5),f=!0;else if(k(e))return n;t==="class"||t==="className"?it(e,n):o&&!f&&!d?e[gt(t)]=n:e[a||t]=n}else{const h=i&&t.indexOf(":")>-1&&ze[t.split(":")[0]];h?nt(e,h,t,n):Z(e,Xe[t]||t,n)}return n}function Ae(e){if(u.registry&&u.events&&u.events.find(([f,d])=>d===e))return;let t=e.target;const n=`$$${e.type}`,s=e.target,i=e.currentTarget,r=f=>Object.defineProperty(e,"target",{configurable:!0,value:f}),l=()=>{const f=t[n];if(f&&!t.disabled){const d=t[`${n}Data`];if(d!==void 0?f.call(t,d,e):f.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&r(t.host),!0},o=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),u.registry&&!u.done&&(u.done=_$HY.done=!0),e.composedPath){const f=e.composedPath();r(f[0]);for(let d=0;d<f.length-2&&(t=f[d],!!l());d++){if(t._$host){t=t._$host,o();break}if(t.parentNode===i)break}}else o();r(s)}function _(e,t,n,s,i){const r=k(e);if(r){!n&&(n=[...e.childNodes]);let f=[];for(let d=0;d<n.length;d++){const a=n[d];a.nodeType===8&&a.data.slice(0,2)==="!$"?a.remove():f.push(a)}n=f}for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(r||l==="number"&&(t=t.toString(),t===n))return n;if(o){let f=n[0];f&&f.nodeType===3?f.data!==t&&(f.data=t):f=document.createTextNode(t),n=I(e,n,s,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(r)return n;n=I(e,n,s)}else{if(l==="function")return L(()=>{let f=t();for(;typeof f=="function";)f=f();n=_(e,f,n,s)}),()=>n;if(Array.isArray(t)){const f=[],d=n&&Array.isArray(n);if(z(f,t,n,i))return L(()=>n=_(e,f,n,s,!0)),()=>n;if(r){if(!f.length)return n;if(s===void 0)return n=[...e.childNodes];let a=f[0];if(a.parentNode!==e)return n;const c=[a];for(;(a=a.nextSibling)!==s;)c.push(a);return n=c}if(f.length===0){if(n=I(e,n,s),o)return n}else d?n.length===0?le(e,f,s):et(e,n,f):(n&&I(e),le(e,f));n=f}else if(t.nodeType){if(r&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=I(e,n,s,t);I(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function z(e,t,n,s){let i=!1;for(let r=0,l=t.length;r<l;r++){let o=t[r],f=n&&n[e.length],d;if(!(o==null||o===!0||o===!1))if((d=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=z(e,o,f)||i;else if(d==="function")if(s){for(;typeof o=="function";)o=o();i=z(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const a=String(o);f&&f.nodeType===3&&f.data===a?e.push(f):e.push(document.createTextNode(a))}}return i}function le(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function I(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(i!==o){const f=o.parentNode===e;!r&&!l?f?e.replaceChild(i,o):e.insertBefore(i,n):f&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function fe(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],r=i.getAttribute("data-hk");(!t||r.startsWith(t))&&!u.registry.has(r)&&u.registry.set(r,i)}}function yt(){return u.getNextContextId()}const bt="http://www.w3.org/2000/svg";function wt(e,t=!1){return t?document.createElementNS(bt,e):document.createElement(e)}const Ot=(...e)=>(He(),dt(...e));function Tt(e){const[t,n]=Ge(e,["component"]),s=C(()=>t.component);return C(()=>{const i=s();switch(typeof i){case"function":return E(()=>i(n));case"string":const r=Ze.has(i),l=u.context?ht():wt(i,r);return ft(l,n,r),l}})}export{B as $,Tt as D,St as F,Ct as S,C as a,ke as b,W as c,tt as d,L as e,it as f,ht as g,kt as h,ut as i,Be as j,ct as k,Ge as l,At as m,ft as n,de as o,pt as p,Ne as q,Pt as r,$t as s,Nt as t,E as u,xt as v,mt as w,Ot as x,ie as y,Et as z};
