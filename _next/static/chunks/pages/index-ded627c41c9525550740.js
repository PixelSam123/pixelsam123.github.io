(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1521:function(e,n,a){"use strict";var r=a(980),t=a(8017),i=a(5893);n.Z=function(e){var n=e.children,a=(0,r.useColorModeValue)("white","gray.900");return(0,i.jsx)(t.xu,{background:a,rounded:"md",boxShadow:"base",padding:"2",children:n})}},500:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return ae}});var r=a(9008),t=a(7962),i=a(7294),o=a(1521),l=a(1770),s=a(3869),u=a(63),d=a(227),c=a(4461),h=a(3808),v=a(8500),f=a(1034),p=a(4577);function m(e,n){if(null!=e)if((0,h.mf)(e))e(n);else try{e.current=n}catch(a){throw new Error("Cannot assign value '"+n+"' to ref '"+e+"'")}}function b(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return e=>{n.forEach((n=>m(n,e)))}}function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function x(e){void 0===e&&(e={});var{onChange:n,value:a,defaultValue:r,name:t,isDisabled:o,isFocusable:l,isNative:s}=e,u=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,["onChange","value","defaultValue","name","isDisabled","isFocusable","isNative"]),[d,c]=i.useState(r||""),[v,m]=(0,f.p)(a,d),x=i.useRef(null),k=i.useCallback((()=>{var e=x.current;if(e){var n="input:not(:disabled):checked",a=e.querySelector(n);if(a)a.focus();else{n="input:not(:disabled)";var r=e.querySelector(n);null==r||r.focus()}}}),[]),y=(0,p.Me)(void 0,"radio"),C=t||y,j=i.useCallback((e=>{var a=(0,h.kA)(e)?e.target.value:e;v||c(a),null==n||n(String(a))}),[n,v]);return{getRootProps:i.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),g({},e,{ref:b(n,x),role:"radiogroup"})}),[]),getRadioProps:i.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),g({},e,{ref:n,name:C,[s?"checked":"isChecked"]:null!=m?e.value===m:void 0,onChange:j,"data-radiogroup":!0})}),[s,C,j,m]),name:C,ref:x,focus:k,setValue:c,value:m,onChange:j,isDisabled:o,isFocusable:l,htmlProps:u}}function k(){return(k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var[y,C]=(0,v.k)({name:"RadioGroupContext",strict:!1}),j=(0,u.G)(((e,n)=>{var{colorScheme:a,size:r,variant:t,children:o,className:l,isDisabled:s,isFocusable:u}=e,h=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,["colorScheme","size","variant","children","className","isDisabled","isFocusable"]),{value:v,onChange:f,getRootProps:p,name:m,htmlProps:b}=x(h),g=i.useMemo((()=>({name:m,size:r,onChange:f,colorScheme:a,value:v,variant:t,isDisabled:s,isFocusable:u})),[m,r,f,a,v,t,s,u]),C=p(b,n),j=(0,c.cx)("chakra-radio-group",l);return i.createElement(y,{value:g},i.createElement(d.m$.div,k({},C,{className:j}),o))}));h.Ts&&(j.displayName="RadioGroup");var P=a(2326),w=a(5284),F=a(6759),O=a(658),S=a(5505);function D(e){void 0===e&&(e=!1);var[n,a]=(0,i.useState)(e);return[n,{on:(0,i.useCallback)((()=>{a(!0)}),[]),off:(0,i.useCallback)((()=>{a(!1)}),[]),toggle:(0,i.useCallback)((()=>{a((e=>!e))}),[])}]}var R=a(9676);function _(){return(_=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function I(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}var[E,N]=(0,v.k)({strict:!1,name:"FormControlContext"});var T=(0,u.G)(((e,n)=>{var a=(0,P.j)("Form",e),r=function(e){var{id:n,isRequired:a,isInvalid:r,isDisabled:t,isReadOnly:o}=e,l=I(e,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),s=(0,p.Me)(),u=n||"field-"+s,d=u+"-label",h=u+"-feedback",v=u+"-helptext",[f,m]=i.useState(!1),[g,x]=i.useState(!1),[k,y]=D(),C=i.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),_({id:v},e,{ref:b(n,(e=>{e&&x(!0)}))})}),[v]),j=i.useCallback((function(e,n){var a,i;return void 0===e&&(e={}),void 0===n&&(n=null),_({},e,{ref:n,"data-focus":(0,c.PB)(k),"data-disabled":(0,c.PB)(t),"data-invalid":(0,c.PB)(r),"data-readonly":(0,c.PB)(o),id:null!=(a=e.id)?a:d,htmlFor:null!=(i=e.htmlFor)?i:u})}),[u,t,k,r,o,d]),P=i.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),_({id:h},e,{ref:b(n,(e=>{e&&m(!0)})),"aria-live":"polite"})}),[h]),w=i.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),_({},e,l,{ref:n,role:"group"})}),[l]),F=i.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),_({},e,{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!a,isInvalid:!!r,isReadOnly:!!o,isDisabled:!!t,isFocused:!!k,onFocus:y.on,onBlur:y.off,hasFeedbackText:f,setHasFeedbackText:m,hasHelpText:g,setHasHelpText:x,id:u,labelId:d,feedbackId:h,helpTextId:v,htmlProps:l,getHelpTextProps:C,getErrorMessageProps:P,getRootProps:w,getLabelProps:j,getRequiredIndicatorProps:F}}((0,w.Lr)(e)),{getRootProps:t}=r,o=I(r,["getRootProps","htmlProps"]),l=(0,c.cx)("chakra-form-control",e.className),s=i.useMemo((()=>o),[o]);return i.createElement(E,{value:s},i.createElement(R.Fo,{value:a},i.createElement(d.m$.div,_({},t({},n),{className:l,__css:a.container}))))}));h.Ts&&(T.displayName="FormControl");var B=(0,u.G)(((e,n)=>{var a=N(),r=(0,R.yK)(),t=(0,c.cx)("chakra-form__helper-text",e.className);return i.createElement(d.m$.div,_({},null==a?void 0:a.getHelpTextProps(e,n),{__css:r.helperText,className:t}))}));h.Ts&&(B.displayName="FormHelperText");var M={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},q=(0,d.m$)("span",{baseStyle:M});h.Ts&&(q.displayName="VisuallyHidden");var H=(0,d.m$)("input",{baseStyle:M});h.Ts&&(H.displayName="VisuallyHiddenInput");function G(){return(G=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function V(e){void 0===e&&(e={});var{defaultIsChecked:n,defaultChecked:a=n,isChecked:r,isFocusable:t,isDisabled:o,isReadOnly:l,isRequired:s,onChange:u,isInvalid:d,name:h,value:v,id:m,"data-radiogroup":g}=e,x=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,["defaultIsChecked","defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isInvalid","name","value","id","data-radiogroup"]),k=(0,p.Me)(void 0,"radio"),y=N(),j=C(),P=!!y&&!(!!j||!!g)?y.id:k;P=null!=m?m:P;var w=null!=o?o:null==y?void 0:y.isDisabled,F=null!=l?l:null==y?void 0:y.isReadOnly,S=null!=s?s:null==y?void 0:y.isRequired,R=null!=d?d:null==y?void 0:y.isInvalid,[_,I]=D(),[E,T]=D(),[B,q]=D(),H=(0,i.useRef)(null),[V,L]=(0,i.useState)(Boolean(a)),[$,K]=(0,f.p)(r,V);(0,O.ZK)({condition:!!n,message:'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'});var X=(0,i.useCallback)((e=>{F||w?e.preventDefault():($||L(e.target.checked),null==u||u(e))}),[$,w,F,u]),z=(0,i.useCallback)((e=>{" "===e.key&&q.on()}),[q]),W=(0,i.useCallback)((e=>{" "===e.key&&q.off()}),[q]),Q=(0,i.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),G({},e,{ref:n,"data-active":(0,c.PB)(B),"data-hover":(0,c.PB)(E),"data-disabled":(0,c.PB)(w),"data-invalid":(0,c.PB)(R),"data-checked":(0,c.PB)(K),"data-focus":(0,c.PB)(_),"data-readonly":(0,c.PB)(F),"aria-hidden":!0,onMouseDown:(0,O.v0)(e.onMouseDown,q.on),onMouseUp:(0,O.v0)(e.onMouseUp,q.off),onMouseEnter:(0,O.v0)(e.onMouseEnter,T.on),onMouseLeave:(0,O.v0)(e.onMouseLeave,T.off)})}),[B,E,w,R,K,_,F,q.on,q.off,T.on,T.off]),{onFocus:U,onBlur:Z}=null!=y?y:{},J=(0,i.useCallback)((function(e,n){void 0===e&&(e={}),void 0===n&&(n=null);var a=w&&!t;return G({},e,{id:P,ref:b(n,H),type:"radio",name:h,value:v,onChange:(0,O.v0)(e.onChange,X),onBlur:(0,O.v0)(Z,e.onBlur,I.off),onFocus:(0,O.v0)(U,e.onFocus,I.on),onKeyDown:(0,O.v0)(e.onKeyDown,z),onKeyUp:(0,O.v0)(e.onKeyUp,W),checked:K,disabled:a,readOnly:F,required:S,"aria-invalid":(0,c.Qm)(R),"aria-disabled":(0,c.Qm)(a),"aria-readonly":(0,c.Qm)(F),"aria-required":(0,c.Qm)(S),style:M})}),[w,t,P,h,v,X,Z,I,U,z,W,K,F,S,R]);return{state:{isInvalid:R,isFocused:_,isChecked:K,isActive:B,isHovered:E,isDisabled:w,isReadOnly:F,isRequired:S},getCheckboxProps:Q,getInputProps:J,getLabelProps:function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),G({},e,{ref:n,onMouseDown:(0,O.v0)(e.onMouseDown,A),onTouchStart:(0,O.v0)(e.onTouchStart,A),"data-disabled":(0,c.PB)(w),"data-checked":(0,c.PB)(K),"data-invalid":(0,c.PB)(R)})},htmlProps:x}}function A(e){e.preventDefault(),e.stopPropagation()}function L(){return(L=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var $=(0,u.G)(((e,n)=>{var a,r=C(),{onChange:t,value:o}=e,l=(0,P.j)("Radio",L({},r,e)),s=(0,w.Lr)(e),{spacing:u="0.5rem",children:c,isFullWidth:h,isDisabled:v=(null==r?void 0:r.isDisabled),isFocusable:f=(null==r?void 0:r.isFocusable)}=s,p=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(s,["spacing","children","isFullWidth","isDisabled","isFocusable"]),m=e.isChecked;null!=(null==r?void 0:r.value)&&null!=o&&(m=r.value===o);var b=t;null!=r&&r.onChange&&null!=o&&(b=(0,O.PP)(r.onChange,t));var g=null!=(a=null==e?void 0:e.name)?a:null==r?void 0:r.name,{getInputProps:x,getCheckboxProps:k,getLabelProps:y,htmlProps:j}=V(L({},p,{isChecked:m,isFocusable:f,isDisabled:v,onChange:b,name:g})),[D,R]=(0,S.Vl)(j,F.layoutPropNames),_=k(R),I=x({},n),E=y(),N=L({width:h?"full":void 0,display:"inline-flex",alignItems:"center",verticalAlign:"top"},l.container),T=L({display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},l.control),B=L({userSelect:"none",marginStart:u},l.label);return i.createElement(d.m$.label,L({className:"chakra-radio"},D,{__css:N}),i.createElement("input",L({className:"chakra-radio__input"},I)),i.createElement(d.m$.span,L({className:"chakra-radio__control"},_,{__css:T})),c&&i.createElement(d.m$.span,L({className:"chakra-radio__label"},E,{__css:B}),c))}));h.Ts&&($.displayName="Radio");var K=a(980),X=a(3880),z=a(4115),W=a(9444),Q=a(8017),U=a(4096),Z=a(336),J=a(538),Y=a(5893),ee=(0,l.E)(X.E),ne=function(){var e=(0,J.D)().data,n=(0,i.useState)(null),a=n[0],t=n[1];(0,i.useEffect)((function(){void 0!==e&&t((new DOMParser).parseFromString(e,"text/xml"))}),[e]);var l=[{title:"Koddl.io",content:(0,Y.jsxs)(z.x,{children:["A skribbl.io-inspired coding game. Visit"," ",(0,Y.jsx)(W.r,{href:"https://koddl-io.herokuapp.com/",children:"koddl-io.herokuapp.com"})," ","to have a go!"]}),backgroundSrc:"/index/koddl-io-screenshot.png",backgroundFit:"contain",backgroundColor:"#fef3c7"},{title:"1.18 Experimental Snapshots: Breathtaking Views!",content:(0,Y.jsx)(z.x,{children:"Just look at the picture behind this text. Isn't it just... I have no words."}),backgroundSrc:"/index/caves-and-cliffs.jpeg",backgroundFit:"cover",backgroundColor:"#fef3c7"},{title:"Website Revamp!",content:(0,Y.jsx)(z.x,{children:"This website is being remade from the ground up with improvements such as a new responsive navbar and more to come."}),backgroundSrc:"/index/experimental-generation.png",backgroundFit:"cover",backgroundColor:"#fef3c7"}],u=(0,i.useState)(0),d=u[0],c=u[1],h=(0,K.useColorModeValue)("rgba(427, 250, 252, 0.9)","rgba(23, 25, 35, 0.9)");return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(r.default,{children:[(0,Y.jsx)("title",{children:"FADHsquared - Index"}),(0,Y.jsx)("meta",{name:"description",content:"FADHsquared on GitHub - Index"})]}),(0,Y.jsxs)(Q.xu,{as:"header",bgColor:l[d].backgroundColor,w:"full",h:"100vh",position:"relative",overflowX:"hidden",children:[(0,Y.jsx)(s.M,{initial:!1,children:l.map((function(e,n){return d===n&&(0,Y.jsx)(ee,{src:l[n].backgroundSrc,alt:"Header image",w:"full",h:"full",objectFit:l[n].backgroundFit,position:"absolute",transition:{type:"spring",duration:.5,bounce:0},initial:{right:0,width:"0% "},animate:{width:"100%"},exit:{left:0,width:"0%"}},n)}))}),(0,Y.jsx)(Q.xu,{position:"absolute",bottom:"5",left:"50%",transform:"auto",translateX:"-50%",w:"max-content",maxW:"calc(100% - 1rem)",rounded:"md",children:(0,Y.jsxs)(U.k,{flexDirection:"column",alignItems:"center",textAlign:"center",px:"3",pb:"3",pt:"2",rounded:"md",bg:h,children:[(0,Y.jsx)(Z.X,{size:"lg",children:l[d].title}),l[d].content,(0,Y.jsx)(j,{onChange:function(e){c(parseInt(e))},value:d,children:(0,Y.jsx)(U.k,{gridColumnGap:"2",mt:"1",children:l.map((function(e,n){return(0,Y.jsx)($,{value:n},n)}))})})]})})]}),(0,Y.jsxs)(Q.xu,{as:"section",my:"3",children:[(0,Y.jsxs)(U.k,{mb:"3",gridColumnGap:"1.5",justify:"center",alignItems:"center",children:[(0,Y.jsx)(Z.X,{size:"lg",children:"Latest Videos"}),(0,Y.jsx)(z.x,{children:"(5 most recent)"})]}),!a&&(0,Y.jsx)(z.x,{children:"Loading..."}),(0,Y.jsx)(U.k,{flexDirection:"column",gridRowGap:"3",px:"2",mx:"auto",maxW:["337px","337px","container.xl"],children:a&&Array.from(a.getElementsByTagName("entry")).slice(0,5).map((function(e,n){return(0,Y.jsx)(o.Z,{children:(0,Y.jsxs)(U.k,{flexDirection:["column","column","row"],gridColumnGap:"2",gridRowGap:"1",alignItems:"center",children:[(0,Y.jsx)(Q.xu,{position:"relative",w:[304,304,160],h:[171,171,90],flexShrink:0,children:(0,Y.jsx)(X.E,{src:e.querySelector("thumbnail").getAttribute("url"),alt:"Video thumbnail",w:"full",h:"full",objectFit:"cover"})}),(0,Y.jsxs)(Q.xu,{children:[(0,Y.jsx)(W.r,{href:e.querySelector("link").getAttribute("href"),children:(0,Y.jsx)(Z.X,{size:"md",children:e.querySelector("title").textContent})}),(0,Y.jsx)(z.x,{whiteSpace:"pre-wrap",children:e.querySelector("group").querySelector("description").textContent})]})]})},n)}))})]})]})};ne.getLayout=function(e){return(0,Y.jsx)(t.Z,{children:e})};var ae=ne},5301:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(500)}])}},function(e){e.O(0,[819,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);