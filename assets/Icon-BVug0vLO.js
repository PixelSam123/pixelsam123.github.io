import{ssrElement as l,mergeProps as o,escape as u,createComponent as s,Dynamic as c}from"solid-js/web";import{splitProps as d,For as h}from"solid-js";/**
* @license lucide-solid v0.364.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/var m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},t=m,g=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),k=r=>{const[e,i]=d(r,["color","size","strokeWidth","children","class","name","iconNode","absoluteStrokeWidth"]);return l("svg",o(t,{get width(){return e.size??t.width},get height(){return e.size??t.height},get stroke(){return e.color??t.stroke},get"stroke-width"(){return e.absoluteStrokeWidth?Number(e.strokeWidth??t["stroke-width"])*24/Number(e.size):Number(e.strokeWidth??t["stroke-width"])},get class(){return`lucide lucide-${g(e?.name??"icon")} ${e.class!=null?e.class:""}`}},i),()=>u(s(h,{get each(){return e.iconNode},children:([n,a])=>s(c,o({component:n},a))})),!0)},b=k;export{b as I};
