import{b as f,c as S,e as T,L as V,n as X,l as U,q as p,z as k,t as _,d as A,h,x as Y,m as Z,H as I,I as Q,y as v,F as ee,T as te,J as ne}from"./index-BNJ3oQN6.js";import{S as re}from"./SectionContainer-DWMp9dlu.js";import{B as ae}from"./Button-CFKm3-1F.js";import{u as se}from"./LocalStorageProvider-B2ku8Rrg.js";import{c as oe}from"./clientOnly-B_lrvnjI.js";var le={equals:!1},ce=e=>typeof e=="function"&&!e.length?e():e;function ie(e,...t){return typeof e=="function"?e(...t):e}var de=(e,t)=>e.length>0?()=>e(T(t)):e;function me(e,t){let a=0;const n=e.map((s,r)=>S(()=>(a=r,s()),void 0,le));return S(()=>n.map(s=>s())[a],void 0,t)}function fe(e,t,a){let n=()=>t;const[s,r]=f(t),l=S(de(e,()=>n()),t);return[n=me([s,l],a),u=>r(()=>typeof u=="function"?u(T(n)):u)]}var C=(e,t,a)=>{const n=a(e,t);return U(()=>clearInterval(n))},ue=(e,t,a)=>{if(typeof t=="number"){C(e,t,a);return}let n=!1,s=performance.now(),r=0,l=!1;const u=()=>{T(e),s=performance.now(),n=a===setTimeout};X(d=>{if(n)return;const g=t();if(g===!1)return d&&(r+=(performance.now()-s)/d),g;if(d===!1&&(s=performance.now()),l){if(d&&(r+=(performance.now()-s)/d),s=performance.now(),r>=1)r=0,u();else if(r>0){const[b,x]=f(void 0,{equals:!1});return b(),C(()=>{r=0,l=!1,x(),u()},(1-r)*g,setTimeout),g}}return l=!0,C(u,g,a),g})};function ge(e,t,a,n){const[s,r]=f(T(e.bind(void 0,a)),n),l=()=>r(e);return ue(l,t,setInterval),V(l),s}var P=6e4,O=36e5,R=e=>e instanceof Date?e:new Date(e),pe=(e,t)=>t.getTime()-e.getTime(),W=e=>{const[t,a]=fe(()=>R(ce(e)));return[t,s=>a(r=>R(ie(s,r)))]};function he(e=P/2){const[t,a]=f(void 0,{equals:!1});return[ge(()=>(t(),new Date),e,void 0,{equals:(s,r)=>s.getTime()===r.getTime()}),a]}function ve(e,t){const[a]=W(e),[n]=W(t);return[S(()=>pe(a(),n())),{from:a,to:n}]}function be(e,t=a=>Math.abs(a)<=O?P/2:O/2){const a=typeof t=="function"?()=>t(r()):t,[n,s]=he(a),[r,{to:l}]=ve(n,e);return[r,{update:s,target:l,now:n}]}var _e=(e,t,a=[])=>{const n=new WebSocket(e,t),s=n.send.bind(n);return n.send=r=>n.readyState==1?s(r):a.push(r),n.addEventListener("open",()=>{for(;a.length;)s(a.shift())}),n},Se=v("<label for=server-url class=select-none>Server URL (Connection:<!$><!/>)"),we=v('<input id=server-url type=text class="w-full rounded-lg border-2 border-slate-300 bg-transparent dark:border-slate-600">'),$e=v('<div class="mb-2 flex flex-col items-center rounded-lg bg-slate-100 p-2 dark:bg-slate-700"><p class="font-mono text-sm font-bold"><!$><!/> - <!$><!/></p><code class=text-4xl>'),Te=v('<div class="h-60 overflow-y-auto whitespace-pre-wrap break-all rounded-lg bg-slate-200 p-2 dark:bg-slate-700 sm:h-96">'),xe=v('<input type=text placeholder="message/answer here, send with Enter"class="mt-2 w-full rounded-lg border-2 border-slate-300 bg-transparent dark:border-slate-600">'),Ee=v("<div>"),ke=v('<p class=text-center>...or download native client <a href=https://github.com/PixelSam123/wordgames-client/releases class="font-bold underline">here');const Ce=oe(async()=>({default(){const[e,t]=se(),a=()=>e["anagrams-server-url"]??"wss://wordgames4j.azurewebsites.net/ws/anagram/1",[n,s]=f("Not Connected");let r,l;U(()=>{r&&r.close()});const[u,d]=f("WAITING ROUND START!"),[g,b]=f(""),[x,w]=f(""),[y]=be(x,()=>100),[$,N]=f(""),[B,D]=f([]),L=o=>{const{type:c,content:i}=JSON.parse(o.data);switch(c){case"ChatMessage":D(m=>[...m,i]),setTimeout(()=>{l&&(l.scrollTop=l.scrollHeight)});break;case"OngoingRoundInfo":w(i.round_finish_time),d("PLEASE GUESS!"),b(i.word_to_guess);break;case"FinishedRoundInfo":w(i.to_next_round_time),d("TIME'S UP! THE ANSWER:"),b(i.word_answer);break;case"FinishedGame":w(""),d("WAITING ROUND START!"),b("")}},M=()=>{s("Open")},G=()=>{n()==="Not Connected"||n()==="Closed"?(r=_e(a()),s("Connecting"),r.addEventListener("open",M),r.addEventListener("message",L)):(s("Closing"),r?.removeEventListener("open",M),r?.removeEventListener("message",L),r?.close(),s("Closed"),w(""),d("WAITING ROUND START!"),b(""))},F=o=>{o.key==="Enter"&&($()==="/clear"?D([]):$().trim()!==""&&r?.send($()),N(""))};return[(()=>{var o=p(Se),c=o.firstChild,i=c.nextSibling,[m,E]=k(i.nextSibling);return m.nextSibling,_(o,n,m,E),o})(),(()=>{var o=p(we);return o.addEventListener("change",c=>t("anagrams-server-url",c.currentTarget.value)),A(()=>I(o,"value",a())),o})(),h(ae,{class:"my-2",onClick:G,get children(){return typeof n<"u"&&n()==="Open"?"Disconnect":"Connect"}}),(()=>{var o=p($e),c=o.firstChild,i=c.firstChild,[m,E]=k(i.nextSibling),H=m.nextSibling,q=H.nextSibling,[z,J]=k(q.nextSibling),j=c.nextSibling;return _(c,u,m,E),_(c,(()=>{var K=S(()=>!!isNaN(y()));return()=>K()?"":`${Math.max(0,y()/1e3).toFixed(1)} secs`})(),z,J),_(j,g),o})(),(()=>{var o=p(Te),c=l;return typeof c=="function"?Q(c,o):l=o,_(o,h(ee,{get each(){return B()},children:i=>(()=>{var m=p(Ee);return _(m,i),m})()})),o})(),(()=>{var o=p(xe);return o.addEventListener("change",c=>N(c.currentTarget.value)),o.$$keyup=F,A(()=>I(o,"value",$())),Y(),o})()]}}));function ye(){return[h(re,{title:"ANAGRAMS",class:"mt-6 min-h-[16rem] max-w-screen-sm self-center",get children(){return h(Ce,{})}}),p(ke)]}Z(["keyup"]);function Ie(){return[h(te,{children:"PixelSamz - Minigames"}),h(ne,{name:"description",content:"Play some in-browser multiplayer minigames!"}),h(ye,{})]}export{Ie as default};
