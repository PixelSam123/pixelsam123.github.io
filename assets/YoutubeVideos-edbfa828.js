import{c as l,m as f,I as h,S as A,g as c,h as M,a as u,i,F as U,b as D,t as m,s as b}from"./entry-client-f4fb8dc3.js";import{f as R}from"./fetch-string-42065095.js";import{S as T}from"./SectionContainer-1fb6ca0d.js";import{C as z}from"./Card-b7fdf2ce.js";import{c as B}from"./createQuery-f22cd62e.js";import{C as F}from"./clock-106e5dc0.js";const O=[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],I=a=>l(h,f(a,{name:"Eye",iconNode:O})),P=I,j=[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]],L=a=>l(h,f(a,{name:"ThumbsUp",iconNode:j})),V=L,Y=m("<p>Loading videos..."),Z=m("<p>ERROR: <!#><!/>"),H=m('<div class="grid max-w-screen-md gap-2 md:grid-cols-2">'),K=m('<a class="font-heading text-xl font-semibold underline decoration-[1.5px] underline-offset-[3px]"><img class="aspect-video w-full rounded object-cover"><h3>'),Q=m('<div class="flex gap-x-2 text-sm"><p class="flex items-center gap-x-1"><!#><!/> <!#><!/></p><p class="flex items-center gap-x-1"><!#><!/> <!#><!/>'),W=m('<p class="flex items-center gap-x-1 text-sm"><!#><!/> <!#><!/>'),X=m('<p class="text-justify text-sm">');function ie(){const a=B({queryKey:()=>["youtube"],queryFn:async()=>await R("https://api.allorigins.win/raw?url=https://www.youtube.com/feeds/videos.xml?channel_id=UCuyUwB1X4NBdI12B8h9WNyA"),staleTime:15e3}),S=new DOMParser,y=()=>{const s=S.parseFromString(a.data??"","text/xml");return Array.from(s.getElementsByTagName("entry")).map(e=>({title:e.querySelector("title")?.textContent??"",description:e.querySelector("description")?.textContent??"",likeCount:e.querySelector("starRating")?.getAttribute("count")??"",link:e.querySelector("link")?.getAttribute("href")??"",publishDate:new Date(e.querySelector("published")?.textContent??"").toDateString(),thumbnail:e.querySelector("thumbnail")?.getAttribute("url")??"",viewCount:e.querySelector("statistics")?.getAttribute("views")??""}))};return l(T,{title:"FROM YOUTUBE",class:"mt-6 w-fit self-center",get children(){return l(A,{get fallback(){return c(Y)},get children(){return M(()=>!!a.isError)()?(()=>{const s=c(Z),e=s.firstChild,t=e.nextSibling,[n,o]=u(t.nextSibling);return i(s,()=>a.error.toString(),n,o),s})():(()=>{const s=c(H);return i(s,l(U,{get each(){return y()},children:e=>l(z,{class:"border-slate-200 dark:border-slate-700",get children(){return[(()=>{const t=c(K),n=t.firstChild,o=n.nextSibling;return i(o,()=>e.title),D(r=>{const d=e.link,$=e.thumbnail;return d!==r._v$&&b(t,"href",r._v$=d),$!==r._v$2&&b(n,"src",r._v$2=$),r},{_v$:void 0,_v$2:void 0}),t})(),(()=>{const t=c(Q),n=t.firstChild,o=n.firstChild,[r,d]=u(o.nextSibling),$=r.nextSibling,_=$.nextSibling,[g,C]=u(_.nextSibling),p=n.nextSibling,w=p.firstChild,[x,v]=u(w.nextSibling),k=x.nextSibling,q=k.nextSibling,[E,N]=u(q.nextSibling);return i(n,l(P,{size:"16"}),r,d),i(n,()=>e.viewCount,g,C),i(p,l(V,{size:"16"}),x,v),i(p,()=>e.likeCount,E,N),t})(),(()=>{const t=c(W),n=t.firstChild,[o,r]=u(n.nextSibling),d=o.nextSibling,$=d.nextSibling,[_,g]=u($.nextSibling);return i(t,l(F,{size:"16"}),o,r),i(t,()=>e.publishDate,_,g),t})(),(()=>{const t=c(X);return i(t,()=>e.description),t})()]}})})),s})()}})}})}export{ie as default};
