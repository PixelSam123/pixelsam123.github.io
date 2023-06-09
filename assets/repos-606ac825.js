import{c as e,m as S,I as y,g as o,d as P,e as a,f as i,F as T,a as M,q as b,S as O,t as c,s as q,T as B,M as I}from"./entry-client-dd6a69e8.js";import{B as R}from"./Button-8ed8985b.js";import{S as G}from"./SectionContainer-e3c80f3e.js";import{C as D}from"./Card-4c6bf449.js";import{c as H}from"./clientOnly-798d4ce4.js";import{c as L}from"./createQuery-0b113f1e.js";const V=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],A=n=>e(y,S(n,{name:"Braces",iconNode:V})),K=A,Y=[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9",key:"c89w8i"}],["path",{d:"M12 12v3",key:"158kv8"}]],j=n=>e(y,S(n,{name:"GitFork",iconNode:Y})),J=j,Q=[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]],U=n=>e(y,S(n,{name:"Star",iconNode:Q})),W=U;async function X(n){const d=await fetch(n);if(!d.ok)throw new Error(`Network response not OK! ${d.status} ${d.statusText}`);return d.json()}const Z=c("<p>Loading repositories..."),ee=c("<p>ERROR: <!#><!/>"),te=c('<div class="grid max-w-screen-lg gap-2 md:grid-cols-2 lg:grid-cols-3">'),ne=c('<a class="font-heading text-xl font-semibold underline decoration-[1.5px] underline-offset-[3px]"><h3>'),w=c('<p class="flex items-center gap-x-1"><!#><!/> <!#><!/>'),le=c('<p class="flex items-center gap-x-1"><!#><!/> Forked'),re=c('<div class="flex gap-x-2 text-sm"><!#><!/><!#><!/><!#><!/>'),ie=c('<p class="text-sm">'),se=H(async()=>({default(){const n=L({queryKey:()=>["repositories"],queryFn:async()=>await X("https://api.github.com/users/pixelsam123/repos"),staleTime:15e3}),d=()=>[...n.data??[]].sort((s,l)=>l.stargazers_count-s.stargazers_count);return e(O,{get fallback(){return o(Z)},get children(){return P(()=>!!n.isError)()?(()=>{const s=o(ee),l=s.firstChild,t=l.nextSibling,[m,f]=a(t.nextSibling);return i(s,()=>n.error.toString(),m,f),s})():(()=>{const s=o(te);return i(s,e(T,{get each(){return d()},children:l=>e(D,{class:"border-slate-200 dark:border-slate-700",get children(){return[(()=>{const t=o(ne),m=t.firstChild;return i(m,()=>l.name),M(()=>q(t,"href",l.html_url)),t})(),(()=>{const t=o(re),m=t.firstChild,[f,v]=a(m.nextSibling),C=f.nextSibling,[k,z]=a(C.nextSibling),N=k.nextSibling,[F,E]=a(N.nextSibling);return i(t,e(b,{get when(){return l.language},get children(){const r=o(w),p=r.firstChild,[g,$]=a(p.nextSibling),_=g.nextSibling,h=_.nextSibling,[x,u]=a(h.nextSibling);return i(r,e(K,{size:"16"}),g,$),i(r,()=>l.language,x,u),r}}),f,v),i(t,e(b,{get when(){return l.fork},get children(){const r=o(le),p=r.firstChild,[g,$]=a(p.nextSibling);return g.nextSibling,i(r,e(J,{size:"16"}),g,$),r}}),k,z),i(t,e(b,{get when(){return l.stargazers_count>0},get children(){const r=o(w),p=r.firstChild,[g,$]=a(p.nextSibling),_=g.nextSibling,h=_.nextSibling,[x,u]=a(h.nextSibling);return i(r,e(W,{size:"16"}),g,$),i(r,()=>l.stargazers_count,x,u),r}}),F,E),t})(),(()=>{const t=o(ie);return i(t,()=>l.description??"No description for this repository."),t})()]}})})),s})()}})}}));function oe(){return e(G,{title:"REPOSITORY LIST",class:"mt-6 w-fit self-center",get children(){return e(se,{})}})}const ae=c(`<section class="relative flex flex-col overflow-x-hidden px-4 pb-6 text-center text-black"><div class="absolute left-0 -z-10 h-full w-full scale-x-[2.5] rounded-b-[100%] bg-[#44FFD2] dark:opacity-90"></div><p class="mb-1 mt-3 text-left font-heading font-bold">FEATURED REPOSITORY</p><h2 class="mb-4 font-heading text-5xl font-bold">Let's Type & Play!</h2><p>koddl.io is a self-hostable browser game where you guess the topic being coded by someone on the screen.</p><a href="https://github.com/PixelSam123/koddl.io" class="mt-4 self-center"></a><a href="https://github.com/PixelSam123/koddl.io" class="mb-4 mt-4 font-bold underline">View on GitHub -></a><img src="/laptop-frame-edited.png" class="w-full min-w-[416px] max-w-screen-xl self-center"><div class="mt-4 h-2 w-2 self-center rounded-full bg-black">`);function fe(){return[e(B,{children:"PixelSamz - Repositories"}),e(I,{name:"description",content:"PixelSamz's public repositories."}),(()=>{const n=o(ae),d=n.firstChild,s=d.nextSibling,l=s.nextSibling,t=l.nextSibling,m=t.nextSibling;return i(m,e(R,{class:"bg-white",children:"Play Now"})),n})(),e(oe,{})]}export{fe as default};
