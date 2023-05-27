import{c as k,d as C,a as B,o,e as u,w as d,u as r,b as n,t as a,F as D,i as U,h as s,f as i,k as l,_ as w,l as z,r as A}from"./app-3489c626.js";import{u as E,f as O}from"./utils-3bb1888f.js";import{C as T}from"./Card-977afe20.js";import{S as M}from"./SectionContainer-8785471f.js";import{C as N}from"./clock-b331b26b.js";const F=k("EyeIcon",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),L=k("ThumbsUpIcon",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]),R={key:0},Y={key:1},I={key:2,class:"grid md:grid-cols-2 gap-2 max-w-screen-md"},P=["href"],j=["src"],H={class:"flex gap-x-2 text-sm"},Z={class:"flex gap-x-1 items-center"},K={class:"flex gap-x-1 items-center"},Q={class:"flex gap-x-1 items-center text-sm"},W={class:"text-sm text-justify"},X=C({__name:"YoutubeVideos",setup(S){const{isLoading:p,isError:m,data:c,error:v}=E({queryKey:["youtube"],queryFn:async()=>await O("https://api.allorigins.win/raw?url=https://www.youtube.com/feeds/videos.xml?channel_id=UCuyUwB1X4NBdI12B8h9WNyA"),staleTime:15e3}),V=new DOMParser,q=B(()=>{const _=V.parseFromString(c.value??"","text/xml");return Array.from(_.getElementsByTagName("entry")).map(t=>{var e,f,h,x,y,b,g;return{title:((e=t.querySelector("title"))==null?void 0:e.textContent)??"",description:((f=t.querySelector("description"))==null?void 0:f.textContent)??"",likeCount:((h=t.querySelector("starRating"))==null?void 0:h.getAttribute("count"))??"",link:((x=t.querySelector("link"))==null?void 0:x.getAttribute("href"))??"",publishDate:new Date(((y=t.querySelector("published"))==null?void 0:y.textContent)??"").toDateString(),thumbnail:((b=t.querySelector("thumbnail"))==null?void 0:b.getAttribute("url"))??"",viewCount:((g=t.querySelector("statistics"))==null?void 0:g.getAttribute("views"))??""}})});return(_,t)=>(o(),u(M,{title:"FROM YOUTUBE",class:"self-center mt-6 w-fit"},{default:d(()=>[r(p)?(o(),n("p",R," Loading videos... ")):r(m)?(o(),n("p",Y," ERROR: "+a(r(v)),1)):(o(),n("div",I,[(o(!0),n(D,null,U(q.value,e=>(o(),u(T,{key:e.title,class:"border-slate-200 dark:border-slate-700"},{default:d(()=>[s("a",{href:e.link,class:"text-xl font-heading font-semibold underline underline-offset-[3px] decoration-[1.5px]"},[s("img",{src:e.thumbnail,class:"w-full rounded object-cover aspect-video"},null,8,j),s("h3",null,a(e.title),1)],8,P),s("div",H,[s("p",Z,[i(r(F),{size:16}),l(" "+a(e.viewCount),1)]),s("p",K,[i(r(L),{size:16}),l(" "+a(e.likeCount),1)])]),s("p",Q,[i(r(N),{size:16}),l(" "+a(e.publishDate),1)]),s("p",W,a(e.description),1)]),_:2},1024))),128))]))]),_:1}))}}),$=w(X,[["__file","C:/Users/pkupr/Documents/repos/self-site/src/components/YoutubeVideos.vue"]]),G=C({__name:"Videos",setup(S){return z({title:"PixelSamz - Videos",meta:[{name:"description",content:"PixelSamz's YouTube videos."}]}),(p,m)=>{const c=A("ClientOnly");return o(),u(c,null,{default:d(()=>[i($)]),_:1})}}}),re=w(G,[["__file","C:/Users/pkupr/Documents/repos/self-site/src/pages/Videos.vue"]]);export{re as default};
