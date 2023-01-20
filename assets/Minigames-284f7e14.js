import{d as k,f as U,V as E,K as a,W as I,L as M,o as d,l as b,w as _,X as h,k as s,Y as O,Z as g,e as x,h as S,p as D,t as i,a as w,F as G,j as V,$ as F,a0 as L,_ as T,g as W,r as K}from"./app-04a3ff72.js";import{B as H}from"./Button-4d03c9e9.js";import{S as P}from"./SectionContainer-5f47f066.js";const $=s("p",null,"Server URL: ",-1),j={class:"mb-2 p-2 rounded-xl bg-slate-100 flex flex-col items-center dark:bg-slate-700"},z={class:"text-sm font-bold"},J={class:"text-4xl"},X=["onKeyup"],Y=k({__name:"Anagrams",setup(y){const n=U("anagrams-server-url","ws://localhost:8080/ws/anagram"),{data:f,open:m,send:A}=E(n,{immediate:!1}),o=a("WAITING ROUND START!"),l=a(""),r=a(""),C=I(r,{showSecond:!0,updateInterval:1e3}),u=a(null),c=a(""),v=a([]);M(f,p=>{if(p!==null){const{type:t,content:e}=JSON.parse(p);switch(t){case"ChatMessage":v.value.push(e),L().then(()=>{u.value&&(u.value.scrollTop=u.value.scrollHeight)});break;case"OngoingRoundInfo":r.value=e.round_finish_time,o.value="PLEASE GUESS!",l.value=e.word_to_guess;break;case"FinishedRoundInfo":r.value=e.to_next_round_time,o.value="TIME'S UP! THE ANSWER:",l.value=e.word_answer;break;case"FinishedGame":r.value="",o.value="WAITING ROUND START!",l.value=""}}});function B(){m()}function N(){A(c.value),c.value=""}return(p,t)=>(d(),b(P,{title:"ANAGRAMS",class:"self-center mt-6 max-w-screen-md"},{default:_(()=>[$,h(s("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>O(n)?n.value=e:null),type:"text",class:"w-full rounded-xl border-2 border-slate-300 dark:border-slate-600 dark:bg-slate-800"},null,512),[[g,x(n)]]),S(H,{class:"my-2",onClick:B},{default:_(()=>[D(" Connect ")]),_:1}),s("div",j,[s("p",z,i(o.value)+" - "+i(x(C)),1),s("code",J,i(l.value),1)]),s("div",{ref_key:"chatBox",ref:u,class:"p-2 h-64 rounded-xl bg-slate-200 overflow-y-auto whitespace-pre-wrap dark:bg-slate-700"},[(d(!0),w(G,null,V(v.value,(e,R)=>(d(),w("div",{key:R},i(e),1))),128))],512),h(s("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>c.value=e),type:"text",placeholder:"message/answer here, send with Enter",class:"mt-2 w-full rounded-xl border-2 border-slate-300 dark:border-slate-600 dark:bg-slate-800",onKeyup:F(N,["enter"])},null,40,X),[[g,c.value]])]),_:1}))}}),Z=T(Y,[["__file","C:/Users/pkupr/Documents/repos/self-site/src/components/Anagrams.vue"]]),q=k({__name:"Minigames",setup(y){return W({title:"PixelSamz - Minigames"}),(n,f)=>{const m=K("ClientOnly");return d(),b(m,null,{default:_(()=>[S(Z)]),_:1})}}}),te=T(q,[["__file","C:/Users/pkupr/Documents/repos/self-site/src/pages/Minigames.vue"]]);export{te as default};
