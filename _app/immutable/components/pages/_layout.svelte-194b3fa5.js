import{S as V,i as q,s as A,C,k as p,a as H,l as m,m as b,h as _,c as L,n as h,b as I,D as v,E as S,F as w,G as F,H as G,f as J,t as M,I as N,q as j,r as z,J as B}from"../../chunks/index-fcf50be7.js";import{p as K}from"../../chunks/stores-76011aac.js";function E(o,t,s){const a=o.slice();return a[4]=t[s],a}function D(o,t){let s,a=t[4].label+"",u,c;return{key:o,first:null,c(){s=p("a"),u=j(a),this.h()},l(r){s=m(r,"A",{href:!0,class:!0});var l=b(s);u=z(l,a),l.forEach(_),this.h()},h(){h(s,"href",t[4].href),h(s,"class",c=`px-2 py-0.5 rounded${t[0].route.id===t[4].href?" bg-amber-500 text-slate-900":""}`),this.first=s},m(r,l){I(r,s,l),v(s,u)},p(r,l){t=r,l&1&&c!==(c=`px-2 py-0.5 rounded${t[0].route.id===t[4].href?" bg-amber-500 text-slate-900":""}`)&&h(s,"class",c)},d(r){r&&_(s)}}}function O(o){let t,s,a=[],u=new Map,c,r,l,d=o[1];const y=e=>e[4].href;for(let e=0;e<d.length;e+=1){let n=E(o,d,e),f=y(n);u.set(f,a[e]=D(f,n))}const g=o[3].default,i=C(g,o,o[2],null);return{c(){t=p("div"),s=p("nav");for(let e=0;e<a.length;e+=1)a[e].c();c=H(),r=p("div"),i&&i.c(),this.h()},l(e){t=m(e,"DIV",{class:!0});var n=b(t);s=m(n,"NAV",{class:!0});var f=b(s);for(let k=0;k<a.length;k+=1)a[k].l(f);f.forEach(_),c=L(n),r=m(n,"DIV",{class:!0});var $=b(r);i&&i.l($),$.forEach(_),n.forEach(_),this.h()},h(){h(s,"class","bg-slate-900 p-2 font-semibold text-slate-200 flex"),h(r,"class","p-4"),h(t,"class","min-h-screen bg-slate-900/95 text-slate-100")},m(e,n){I(e,t,n),v(t,s);for(let f=0;f<a.length;f+=1)a[f].m(s,null);v(t,c),v(t,r),i&&i.m(r,null),l=!0},p(e,[n]){n&3&&(d=e[1],a=S(a,n,y,1,e,d,u,s,B,D,null,E)),i&&i.p&&(!l||n&4)&&w(i,g,e,e[2],l?G(g,e[2],n,null):F(e[2]),null)},i(e){l||(J(i,e),l=!0)},o(e){M(i,e),l=!1},d(e){e&&_(t);for(let n=0;n<a.length;n+=1)a[n].d();i&&i.d(e)}}}function P(o,t,s){let a;N(o,K,l=>s(0,a=l));let{$$slots:u={},$$scope:c}=t;const r=[{href:"/",label:"Home"}];return o.$$set=l=>{"$$scope"in l&&s(2,c=l.$$scope)},[a,r,c,u]}class T extends V{constructor(t){super(),q(this,t,P,O,A,{})}}export{T as default};
