"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{5536:function(e,t,r){function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function a(e){return function t(){for(var r=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.apply(r,[].concat(o,n))}}}function l(e){return({}).toString.call(e).includes("Object")}function s(e){return"function"==typeof e}r.d(t,{ZP:function(){return Y}});var f,d,g=a(function(e,t){throw Error(e[t]||e.default)})({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),p={changes:function(e,t){return l(t)||g("changeType"),Object.keys(t).some(function(t){return!Object.prototype.hasOwnProperty.call(e,t)})&&g("changeField"),t},selector:function(e){s(e)||g("selectorType")},handler:function(e){s(e)||l(e)||g("handlerType"),l(e)&&Object.values(e).some(function(e){return!s(e)})&&g("handlersType")},initial:function(e){e||g("initialIsRequired"),l(e)||g("initialType"),Object.keys(e).length||g("initialContent")}};function h(e,t){return s(t)?t(e.current):t}function y(e,t){return e.current=u(u({},e.current),t),t}function m(e,t,r){return s(t)?t(e.current):Object.keys(r).forEach(function(r){var n;return null===(n=t[r])||void 0===n?void 0:n.call(t,e.current[r])}),r}var b={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},v=(f=function(e,t){throw Error(e[t]||e.default)},function e(){for(var t=this,r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return n.length>=f.length?f.apply(this,n):function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return e.apply(t,[].concat(n,o))}})(b),O={config:function(e){return e||v("configIsRequired"),({}).toString.call(e).includes("Object")||v("configType"),e.urls?(console.warn(b.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},w=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},j={type:"cancelation",msg:"operation is manually canceled"},M=function(e){var t=!1,r=new Promise(function(r,n){e.then(function(e){return t?n(j):r(e)}),e.catch(n)});return r.cancel=function(){return t=!0},r},E=function(e){if(Array.isArray(e))return e}(d=({create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};p.initial(e),p.handler(t);var r={current:e},n=a(m)(r,t),o=a(y)(r),i=a(p.changes)(e),c=a(h)(r);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return p.selector(e),e(r.current)},function(e){(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}})(n,o,i,c)(e)}]}}).create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}))||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}(d,2)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}}(d,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),P=E[0],R=E[1];function k(e){return document.body.appendChild(e)}function S(e){var t,r,n=P(function(e){return{config:e.config,reject:e.reject}}),o=(t="".concat(n.config.paths.vs,"/loader.js"),r=document.createElement("script"),t&&(r.src=t),r);return o.onload=function(){return e()},o.onerror=n.reject,o}function C(){var e=P(function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(t){T(t),e.resolve(t)},function(t){e.reject(t)})}function T(e){P().monaco||R({monaco:e})}var x=new Promise(function(e,t){return R({resolve:e,reject:t})}),I={config:function(e){var t=O.config(e),r=t.monaco,n=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,["monaco"]);R(function(e){return{config:function e(t,r){return Object.keys(r).forEach(function(n){r[n]instanceof Object&&t[n]&&Object.assign(r[n],e(t[n],r[n]))}),o(o({},t),r)}(e.config,n),monaco:r}})},init:function(){var e=P(function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}});if(!e.isInitialized){if(R({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),M(x);if(window.monaco&&window.monaco.editor)return T(window.monaco),e.resolve(window.monaco),M(x);w(k,S)(C)}return M(x)},__getMonacoInstance:function(){return P(function(e){return e.monaco})}},A=r(5446),V={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},D={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},L=function({children:e}){return A.createElement("div",{style:D.container},e)},_=(0,A.memo)(function({width:e,height:t,isEditorReady:r,loading:n,_ref:o,className:i,wrapperProps:c}){return A.createElement("section",{style:{...V.wrapper,width:e,height:t},...c},!r&&A.createElement(L,null,n),A.createElement("div",{ref:o,style:{...V.fullWidth,...!r&&V.hide},className:i}))}),N=function(e){(0,A.useEffect)(e,[])},q=function(e,t,r=!0){let n=(0,A.useRef)(!0);(0,A.useEffect)(n.current||!r?()=>{n.current=!1}:e,t)};function z(){}function F(e,t,r,n){return e.editor.getModel(U(e,n))||e.editor.createModel(t,r,n?U(e,n):void 0)}function U(e,t){return e.Uri.parse(t)}(0,A.memo)(function({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:c,keepCurrentOriginalModel:u=!1,keepCurrentModifiedModel:a=!1,theme:l="light",loading:s="Loading...",options:f={},height:d="100%",width:g="100%",className:p,wrapperProps:h={},beforeMount:y=z,onMount:m=z}){let[b,v]=(0,A.useState)(!1),[O,w]=(0,A.useState)(!0),j=(0,A.useRef)(null),M=(0,A.useRef)(null),E=(0,A.useRef)(null),P=(0,A.useRef)(m),R=(0,A.useRef)(y),k=(0,A.useRef)(!1);N(()=>{let e=I.init();return e.then(e=>(M.current=e)&&w(!1)).catch(e=>e?.type!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>{let t;return j.current?(t=j.current?.getModel(),void(u||t?.original?.dispose(),a||t?.modified?.dispose(),j.current?.dispose())):e.cancel()}}),q(()=>{let e=j.current.getModifiedEditor();e.getOption(M.current.editor.EditorOption.readOnly)?e.setValue(t||""):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),e.pushUndoStop())},[t],b),q(()=>{j.current?.getModel()?.original.setValue(e||"")},[e],b),q(()=>{let{original:e,modified:t}=j.current.getModel();M.current.editor.setModelLanguage(e,n||r||"text"),M.current.editor.setModelLanguage(t,o||r||"text")},[r,n,o],b),q(()=>{M.current?.editor.setTheme(l)},[l],b),q(()=>{j.current?.updateOptions(f)},[f],b);let S=(0,A.useCallback)(()=>{if(!M.current)return;R.current(M.current);let u=F(M.current,e||"",n||r||"text",i||""),a=F(M.current,t||"",o||r||"text",c||"");j.current?.setModel({original:u,modified:a})},[r,t,o,e,n,i,c]),C=(0,A.useCallback)(()=>{!k.current&&E.current&&(j.current=M.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...f}),S(),M.current?.editor.setTheme(l),v(!0),k.current=!0)},[f,l,S]);return(0,A.useEffect)(()=>{b&&P.current(j.current,M.current)},[b]),(0,A.useEffect)(()=>{O||b||C()},[O,b,C]),q(()=>{if(j.current&&M.current){let t=j.current.getOriginalEditor(),o=F(M.current,e||"",n||r||"text",i||"");o!==t.getModel()&&t.setModel(o)}},[i],b),q(()=>{if(j.current&&M.current){let e=j.current.getModifiedEditor(),n=F(M.current,t||"",o||r||"text",c||"");n!==e.getModel()&&e.setModel(n)}},[c],b),A.createElement(_,{width:g,height:d,isEditorReady:b,loading:s,_ref:E,className:p,wrapperProps:h})});var B=function(e){let t=(0,A.useRef)();return(0,A.useEffect)(()=>{t.current=e},[e]),t.current},W=new Map,Y=(0,A.memo)(function({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:o,path:i,theme:c="light",line:u,loading:a="Loading...",options:l={},overrideServices:s={},saveViewState:f=!0,keepCurrentModel:d=!1,width:g="100%",height:p="100%",className:h,wrapperProps:y={},beforeMount:m=z,onMount:b=z,onChange:v,onValidate:O=z}){let[w,j]=(0,A.useState)(!1),[M,E]=(0,A.useState)(!0),P=(0,A.useRef)(null),R=(0,A.useRef)(null),k=(0,A.useRef)(null),S=(0,A.useRef)(b),C=(0,A.useRef)(m),T=(0,A.useRef)(),x=(0,A.useRef)(n),V=B(i),D=(0,A.useRef)(!1),L=(0,A.useRef)(!1);N(()=>{let e=I.init();return e.then(e=>(P.current=e)&&E(!1)).catch(e=>e?.type!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>R.current?void(T.current?.dispose(),d?f&&W.set(i,R.current.saveViewState()):R.current.getModel()?.dispose(),R.current.dispose()):e.cancel()}),q(()=>{let c=F(P.current,e||n||"",t||o||"",i||r||"");c!==R.current?.getModel()&&(f&&W.set(V,R.current?.saveViewState()),R.current?.setModel(c),f&&R.current?.restoreViewState(W.get(i)))},[i],w),q(()=>{R.current?.updateOptions(l)},[l],w),q(()=>{R.current&&void 0!==n&&(R.current.getOption(P.current.editor.EditorOption.readOnly)?R.current.setValue(n):n===R.current.getValue()||(L.current=!0,R.current.executeEdits("",[{range:R.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),R.current.pushUndoStop(),L.current=!1))},[n],w),q(()=>{let e=R.current?.getModel();e&&o&&P.current?.editor.setModelLanguage(e,o)},[o],w),q(()=>{void 0!==u&&R.current?.revealLine(u)},[u],w),q(()=>{P.current?.editor.setTheme(c)},[c],w);let U=(0,A.useCallback)(()=>{if(!(!k.current||!P.current)&&!D.current){C.current(P.current);let u=i||r,a=F(P.current,n||e||"",t||o||"",u||"");R.current=P.current?.editor.create(k.current,{model:a,automaticLayout:!0,...l},s),f&&R.current.restoreViewState(W.get(u)),P.current.editor.setTheme(c),j(!0),D.current=!0}},[e,t,r,n,o,i,l,s,f,c]);return(0,A.useEffect)(()=>{w&&S.current(R.current,P.current)},[w]),(0,A.useEffect)(()=>{M||w||U()},[M,w,U]),x.current=n,(0,A.useEffect)(()=>{w&&v&&(T.current?.dispose(),T.current=R.current?.onDidChangeModelContent(e=>{L.current||v(R.current.getValue(),e)}))},[w,v]),(0,A.useEffect)(()=>{if(w){let e=P.current.editor.onDidChangeMarkers(e=>{let t=R.current.getModel()?.uri;if(t&&e.find(e=>e.path===t.path)){let e=P.current.editor.getModelMarkers({resource:t});O?.(e)}});return()=>{e?.dispose()}}return()=>{}},[w,O]),A.createElement(_,{width:g,height:p,isEditorReady:w,loading:a,_ref:k,className:h,wrapperProps:y})})}}]);