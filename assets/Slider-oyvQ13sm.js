import{A as e,F as t,H as n,N as r,St as i,U as a,_t as o,a as s,b as c,lt as l,n as u,tt as d,z as f}from"./vue.runtime.esm-bundler-C0qeGFLU.js";import{c as p,d as m,h,m as g,n as _,s as v,u as y}from"./use-theme-CCKqJxKK.js";import{t as b}from"./light-CLwlD-S_.js";import{n as x,t as S}from"./delegate-CJ0pWS92.js";import{t as C}from"./use-merged-state-CMPuriOa.js";import{t as ee}from"./use-is-mounted-IXinzHPL.js";import{i as w,n as T,r as E,t as D}from"./Follower-Bt5UfwtU.js";import{t as O}from"./call-fCmD0dxi.js";import{r as k}from"./resolve-slot--91hp_jr.js";import{t as te}from"./use-config-DU7zP3w3.js";import{t as A}from"./use-css-vars-class-BcgW8Oyw.js";import{n as ne}from"./use-form-item-DLJ7XKLp.js";import{t as j}from"./fade-in-scale-up.cssr-CnNW1Hcg.js";import{t as M}from"./_common-dGl-dGqd.js";function N(e){let{railColor:t,primaryColor:n,baseColor:r,cardColor:i,modalColor:a,popoverColor:o,borderRadius:s,fontSize:c,opacityDisabled:l}=e;return Object.assign(Object.assign({},M),{fontSize:c,markFontSize:c,railColor:t,railColorHover:t,fillColor:n,fillColorHover:n,opacityDisabled:l,handleColor:`#FFF`,dotColor:i,dotColorModal:a,dotColorPopover:o,handleBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,handleBoxShadowHover:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,handleBoxShadowActive:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,handleBoxShadowFocus:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,indicatorColor:`rgba(0, 0, 0, .85)`,indicatorBoxShadow:`0 2px 8px 0 rgba(0, 0, 0, 0.12)`,indicatorTextColor:r,indicatorBorderRadius:s,dotBorder:`2px solid ${t}`,dotBorderActive:`2px solid ${n}`,dotBoxShadow:``})}var re={name:`Slider`,common:b,self:N},ie=v([p(`slider`,`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[m(`reverse`,[p(`slider-handles`,[p(`slider-handle-wrapper`,`
 transform: translate(50%, -50%);
 `)]),p(`slider-dots`,[p(`slider-dot`,`
 transform: translateX(50%, -50%);
 `)]),m(`vertical`,[p(`slider-handles`,[p(`slider-handle-wrapper`,`
 transform: translate(-50%, -50%);
 `)]),p(`slider-marks`,[p(`slider-mark`,`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),p(`slider-dots`,[p(`slider-dot`,`
 transform: translateX(-50%) translateY(0);
 `)])])]),m(`vertical`,`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[p(`slider-handles`,`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[p(`slider-handle-wrapper`,`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),p(`slider-rail`,`
 height: 100%;
 `,[y(`fill`,`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),m(`with-mark`,`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),p(`slider-marks`,`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[p(`slider-mark`,`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),p(`slider-dots`,`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[p(`slider-dot`,`
 transform: translateX(-50%) translateY(50%);
 `)])]),m(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[p(`slider-handle`,`
 cursor: not-allowed;
 `)]),m(`with-mark`,`
 width: 100%;
 margin: 8px 0 32px 0;
 `),v(`&:hover`,[p(`slider-rail`,{backgroundColor:`var(--n-rail-color-hover)`},[y(`fill`,{backgroundColor:`var(--n-fill-color-hover)`})]),p(`slider-handle`,{boxShadow:`var(--n-handle-box-shadow-hover)`})]),m(`active`,[p(`slider-rail`,{backgroundColor:`var(--n-rail-color-hover)`},[y(`fill`,{backgroundColor:`var(--n-fill-color-hover)`})]),p(`slider-handle`,{boxShadow:`var(--n-handle-box-shadow-hover)`})]),p(`slider-marks`,`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[p(`slider-mark`,`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),p(`slider-rail`,`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[y(`fill`,`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),p(`slider-handles`,`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[p(`slider-handle-wrapper`,`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[p(`slider-handle`,`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[v(`&:hover`,`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),v(`&:focus`,[p(`slider-handle`,`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[v(`&:hover`,`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),p(`slider-dots`,`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[m(`transition-disabled`,[p(`slider-dot`,`transition: none;`)]),p(`slider-dot`,`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[m(`active`,`border: var(--n-dot-border-active);`)])])]),p(`slider-handle-indicator`,`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[j()]),p(`slider-handle-indicator`,`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[m(`top`,`
 margin-bottom: 12px;
 `),m(`right`,`
 margin-left: 12px;
 `),m(`bottom`,`
 margin-top: 12px;
 `),m(`left`,`
 margin-right: 12px;
 `),j()]),g(p(`slider`,[p(`slider-dot`,`background-color: var(--n-dot-color-modal);`)])),h(p(`slider`,[p(`slider-dot`,`background-color: var(--n-dot-color-popover);`)]))]);t();function P(e){return window.TouchEvent&&e instanceof window.TouchEvent}function ae(){let e=new Map;return a(()=>{e.clear()}),[e,t=>n=>{e.set(t,n)}]}t(),l(),s();var oe=0,F=e({name:`Slider`,props:Object.assign(Object.assign({},_.props),{to:w.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),slots:Object,setup(e){let{mergedClsPrefixRef:t,namespaceRef:r,inlineThemeDisabled:a}=te(e),s=_(`Slider`,`-slider`,ie,re,e,t),l=o(null),[u,p]=ae(),[m,h]=ae(),g=o(new Set),v=ne(e),{mergedDisabledRef:y}=v,b=c(()=>{let{step:t}=e;if(Number(t)<=0||t===`mark`)return 0;let n=t.toString(),r=0;return n.includes(`.`)&&(r=n.length-n.indexOf(`.`)-1),r}),T=o(e.defaultValue),E=C(i(e,`value`),T),D=c(()=>{let{value:t}=E;return(e.range?t:[t]).map(G)}),k=c(()=>D.value.length>2),j=c(()=>e.placement===void 0?e.vertical?`right`:`top`:e.placement),M=c(()=>{let{marks:t}=e;return t?Object.keys(t).map(Number.parseFloat):null}),N=o(-1),F=o(-1),I=o(-1),L=o(!1),R=o(!1),z=c(()=>{let{vertical:t,reverse:n}=e;return t?n?`top`:`bottom`:n?`right`:`left`}),se=c(()=>{if(k.value)return;let t=D.value,n=K(e.range?Math.min(...t):e.min),r=K(e.range?Math.max(...t):t[0]),{value:i}=z;return e.vertical?{[i]:`${n}%`,height:`${r-n}%`}:{[i]:`${n}%`,width:`${r-n}%`}}),ce=c(()=>{let t=[],{marks:n}=e;if(n){let r=D.value.slice();r.sort((e,t)=>e-t);let{value:i}=z,{value:a}=k,{range:o}=e,s=a?()=>!1:e=>o?e>=r[0]&&e<=r[r.length-1]:e<=r[0];for(let e of Object.keys(n)){let r=Number(e);t.push({active:s(r),key:r,label:n[e],style:{[i]:`${K(r)}%`}})}}return t});function le(e,t){let n=K(e),{value:r}=z;return{[r]:`${n}%`,zIndex:+(t===N.value)}}function B(t){return e.showTooltip||I.value===t||N.value===t&&L.value}function ue(e){return L.value?!(N.value===e&&F.value===e):!0}function de(e){var t;~e&&(N.value=e,(t=u.get(e))==null||t.focus())}function fe(){m.forEach((e,t)=>{B(t)&&e.syncPosition()})}function V(t){let{"onUpdate:value":n,onUpdateValue:r}=e,{nTriggerFormInput:i,nTriggerFormChange:a}=v;r&&O(r,t),n&&O(n,t),T.value=t,i(),a()}function H(t){let{range:n}=e;if(n){if(Array.isArray(t)){let{value:e}=D;t.join()!==e.join()&&V(t)}}else Array.isArray(t)||D.value[0]!==t&&V(t)}function U(t,n){if(e.range){let e=D.value.slice();e.splice(n,1,t),H(e)}else H(t)}function W(t,n,r){let i=r!==void 0;r||=t-n>0?1:-1;let a=M.value||[],{step:o}=e;if(o===`mark`){let e=q(t,a.concat(n),i?r:void 0);return e?e.value:n}if(o<=0)return n;let{value:s}=b,c;if(i){let e=Number((n/o).toFixed(s)),t=Math.floor(e),i=e>t?t:t-1,l=e<t?t:t+1;c=q(n,[Number((i*o).toFixed(s)),Number((l*o).toFixed(s)),...a],r)}else{let e=me(t);c=q(t,[...a,e])}return c?G(c.value):n}function G(t){return Math.min(e.max,Math.max(e.min,t))}function K(t){let{max:n,min:r}=e;return(t-r)/(n-r)*100}function pe(t){let{max:n,min:r}=e;return r+(n-r)*t}function me(t){let{step:n,min:r}=e;if(Number(n)<=0||n===`mark`)return t;let i=Math.round((t-r)/n)*n+r;return Number(i.toFixed(b.value))}function q(e,t=M.value,n){if(!t?.length)return null;let r=null,i=-1;for(;++i<t.length;){let a=t[i]-e,o=Math.abs(a);(n===void 0||a*n>0)&&(r===null||o<r.distance)&&(r={index:i,distance:o,value:t[i]})}return r}function J(t){let n=l.value;if(!n)return;let r=P(t)?t.touches[0]:t,i=n.getBoundingClientRect(),a;return a=e.vertical?(i.bottom-r.clientY)/i.height:(r.clientX-i.left)/i.width,e.reverse&&(a=1-a),pe(a)}function he(t){if(y.value||!e.keyboard)return;let{vertical:n,reverse:r}=e;switch(t.key){case`ArrowUp`:t.preventDefault(),Y(n&&r?-1:1);break;case`ArrowRight`:t.preventDefault(),Y(!n&&r?-1:1);break;case`ArrowDown`:t.preventDefault(),Y(n&&r?1:-1);break;case`ArrowLeft`:t.preventDefault(),Y(!n&&r?1:-1);break}}function Y(t){let n=N.value;if(n===-1)return;let{step:r}=e,i=D.value[n];U(W(Number(r)<=0||r===`mark`?i:i+r*t,i,t>0?1:-1),n)}function ge(t){if(y.value||!P(t)&&t.button!==oe)return;let n=J(t);if(n===void 0)return;let r=D.value.slice(),i=e.range?q(n,r)?.index??-1:0;i!==-1&&(t.preventDefault(),de(i),_e(),U(W(n,D.value[i]),i))}function _e(){L.value||(L.value=!0,e.onDragstart&&O(e.onDragstart),x(`touchend`,document,Q),x(`mouseup`,document,Q),x(`touchmove`,document,Z),x(`mousemove`,document,Z))}function X(){L.value&&(L.value=!1,e.onDragend&&O(e.onDragend),S(`touchend`,document,Q),S(`mouseup`,document,Q),S(`touchmove`,document,Z),S(`mousemove`,document,Z))}function Z(e){let{value:t}=N;if(!L.value||t===-1){X();return}let n=J(e);n!==void 0&&U(W(n,D.value[t]),t)}function Q(){X()}function ve(e){N.value=e,y.value||(I.value=e)}function ye(e){N.value===e&&(N.value=-1,X()),I.value===e&&(I.value=-1)}function be(e){I.value=e}function xe(e){I.value===e&&(I.value=-1)}d(N,(e,t)=>void f(()=>F.value=t)),d(E,()=>{if(e.marks){if(R.value)return;R.value=!0,f(()=>{R.value=!1})}f(fe)}),n(()=>{X()});let Se=c(()=>{let{self:{markFontSize:e,railColor:t,railColorHover:n,fillColor:r,fillColorHover:i,handleColor:a,opacityDisabled:o,dotColor:c,dotColorModal:l,handleBoxShadow:u,handleBoxShadowHover:d,handleBoxShadowActive:f,handleBoxShadowFocus:p,dotBorder:m,dotBoxShadow:h,railHeight:g,railWidthVertical:_,handleSize:v,dotHeight:y,dotWidth:b,dotBorderRadius:x,fontSize:S,dotBorderActive:C,dotColorPopover:ee},common:{cubicBezierEaseInOut:w}}=s.value;return{"--n-bezier":w,"--n-dot-border":m,"--n-dot-border-active":C,"--n-dot-border-radius":x,"--n-dot-box-shadow":h,"--n-dot-color":c,"--n-dot-color-modal":l,"--n-dot-color-popover":ee,"--n-dot-height":y,"--n-dot-width":b,"--n-fill-color":r,"--n-fill-color-hover":i,"--n-font-size":S,"--n-handle-box-shadow":u,"--n-handle-box-shadow-active":f,"--n-handle-box-shadow-focus":p,"--n-handle-box-shadow-hover":d,"--n-handle-color":a,"--n-handle-size":v,"--n-opacity-disabled":o,"--n-rail-color":t,"--n-rail-color-hover":n,"--n-rail-height":g,"--n-rail-width-vertical":_,"--n-mark-font-size":e}}),Ce=a?A(`slider`,void 0,Se,e):void 0,we=c(()=>{let{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:n,indicatorTextColor:r,indicatorBorderRadius:i}}=s.value;return{"--n-font-size":e,"--n-indicator-border-radius":i,"--n-indicator-box-shadow":n,"--n-indicator-color":t,"--n-indicator-text-color":r}}),$=a?A(`slider-indicator`,void 0,we,e):void 0;return{mergedClsPrefix:t,namespace:r,uncontrolledValue:T,mergedValue:E,mergedDisabled:y,mergedPlacement:j,isMounted:ee(),adjustedTo:w(e),dotTransitionDisabled:R,markInfos:ce,isShowTooltip:B,shouldKeepTooltipTransition:ue,handleRailRef:l,setHandleRefs:p,setFollowerRefs:h,fillStyle:se,getHandleStyle:le,activeIndex:N,arrifiedValues:D,followerEnabledIndexSet:g,handleRailMouseDown:ge,handleHandleFocus:ve,handleHandleBlur:ye,handleHandleMouseEnter:be,handleHandleMouseLeave:xe,handleRailKeyDown:he,indicatorCssVars:a?void 0:we,indicatorThemeClass:$?.themeClass,indicatorOnRender:$?.onRender,cssVars:a?void 0:Se,themeClass:Ce?.themeClass,onRender:Ce?.onRender}},render(){var e;let{mergedClsPrefix:t,themeClass:n,formatTooltip:i}=this;return(e=this.onRender)==null||e.call(this),r(`div`,{class:[`${t}-slider`,n,{[`${t}-slider--disabled`]:this.mergedDisabled,[`${t}-slider--active`]:this.activeIndex!==-1,[`${t}-slider--with-mark`]:this.marks,[`${t}-slider--vertical`]:this.vertical,[`${t}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},r(`div`,{class:`${t}-slider-rail`},r(`div`,{class:`${t}-slider-rail__fill`,style:this.fillStyle}),this.marks?r(`div`,{class:[`${t}-slider-dots`,this.dotTransitionDisabled&&`${t}-slider-dots--transition-disabled`]},this.markInfos.map(e=>r(`div`,{key:e.key,class:[`${t}-slider-dot`,{[`${t}-slider-dot--active`]:e.active}],style:e.style}))):null,r(`div`,{ref:`handleRailRef`,class:`${t}-slider-handles`},this.arrifiedValues.map((e,n)=>{let a=this.isShowTooltip(n);return r(E,null,{default:()=>[r(T,null,{default:()=>r(`div`,{ref:this.setHandleRefs(n),class:`${t}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:`slider`,"aria-valuenow":e,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?`vertical`:`horizontal`,"aria-disabled":this.disabled,style:this.getHandleStyle(e,n),onFocus:()=>{this.handleHandleFocus(n)},onBlur:()=>{this.handleHandleBlur(n)},onMouseenter:()=>{this.handleHandleMouseEnter(n)},onMouseleave:()=>{this.handleHandleMouseLeave(n)}},k(this.$slots.thumb,()=>[r(`div`,{class:`${t}-slider-handle`})]))}),this.tooltip&&r(D,{ref:this.setFollowerRefs(n),show:a,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(n),teleportDisabled:this.adjustedTo===w.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>r(u,{name:`fade-in-scale-up-transition`,appear:this.isMounted,css:this.shouldKeepTooltipTransition(n),onEnter:()=>{this.followerEnabledIndexSet.add(n)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(n)}},{default:()=>{var n;return a?((n=this.indicatorOnRender)==null||n.call(this),r(`div`,{class:[`${t}-slider-handle-indicator`,this.indicatorThemeClass,`${t}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof i==`function`?i(e):e)):null}})})]})})),this.marks?r(`div`,{class:`${t}-slider-marks`},this.markInfos.map(e=>r(`div`,{key:e.key,class:`${t}-slider-mark`,style:e.style},typeof e.label==`function`?e.label():e.label))):null))}});export{F as t};