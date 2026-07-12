import{A as e,F as t,G as n,I as r,J as i,N as a,R as o,St as s,_t as c,a as l,at as u,b as d,d as f,h as p,lt as m,nt as h,r as g,tt as _,y as v,z as y}from"./vue.runtime.esm-bundler-C0qeGFLU.js";import{a as b,c as x,d as S,f as C,n as w,p as T,s as E,u as D}from"./use-theme-CCKqJxKK.js";import{r as O,t as ee}from"./css-DE6X-JUA.js";import{t as te}from"./on-fonts-ready-DX9hihwu.js";import{t as ne}from"./use-merged-state-CMPuriOa.js";import{t as k}from"./use-compitable-CXYvSgi1.js";import{t as A}from"./create-injection-key-Dfvzj6n2.js";import{t as j}from"./VResizeObserver-DPjlhWQZ.js";import{n as M,t as N}from"./cssr-Da8cTC8H.js";import{n as re}from"./warn-Dor1LvN9.js";import{t as P}from"./call-fCmD0dxi.js";import{t as F}from"./flatten-BkBk7L0K.js";import{t as ie}from"./omit-C4pE9leG.js";import{t as I}from"./render-24N9BLqr.js";import{a as L}from"./resolve-slot--91hp_jr.js";import{t as ae}from"./use-config-DU7zP3w3.js";import{t as oe}from"./use-css-vars-class-BcgW8Oyw.js";import{A as R}from"./isArrayLikeObject-C-6V7-OQ.js";import{n as z}from"./replaceable-B0Do8MoU.js";import{t as B}from"./debounce-Bvi6_FBZ.js";import{t as V}from"./Add-D0o-_gab.js";import{t as se}from"./Close-DVn0Fms2.js";import{n as ce}from"./light-Bu6oRevq.js";t(),m();var le=N(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[N(`&::-webkit-scrollbar`,{width:0,height:0})]),ue=e({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=c(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=b();return le.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:M,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return a(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),H=`Expected a function`;function U(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(H);return R(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),B(e,t,{leading:r,maxWait:t,trailing:i})}var W=A(`n-tabs`);t();var G={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},de=e({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:G,slots:Object,setup(e){let t=r(W,null);return t||re(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return a(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});t();var K=e({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ie(G,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:i,closableRef:a,tabStyleRef:o,addTabStyleRef:s,tabClassRef:c,addTabClassRef:l,tabChangeIdRef:u,onBeforeLeaveRef:f,triggerRef:p,handleAdd:m,activateTab:h,handleClose:g}=r(W);return{trigger:p,mergedClosable:d(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?a.value:t}),style:o,addStyle:s,tabClass:c,addTabClass:l,clsPrefix:t,value:n,type:i,handleClose(t){t.stopPropagation(),!e.disabled&&g(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){m();return}let{name:t}=e,r=++u.id;if(t!==n.value){let{value:i}=f;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&u.id===r&&h(t)}):h(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:s,value:c,mergedClosable:l,trigger:u,$slots:{default:d}}=this,f=i??s;return a(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?a(`div`,{class:`${t}-tabs-tab-pad`}):null,a(`div`,Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},o({class:[`${t}-tabs-tab`,c===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,l&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:u===`click`?this.activateTab:void 0,onMouseenter:u===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),a(`span`,{class:`${t}-tabs-tab__label`},e?a(p,null,a(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),a(z,{clsPrefix:t},{default:()=>a(V,null)})):d?d():typeof f==`object`?f:I(f??n)),l&&this.type===`card`?a(se,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),fe=x(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[S(`segment-type`,[x(`tabs-rail`,[E(`&.transition-disabled`,[x(`tabs-capsule`,`
 transition: none;
 `)])])]),S(`top`,[x(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),S(`left`,[x(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),S(`left, right`,`
 flex-direction: row;
 `,[x(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),x(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),S(`right`,`
 flex-direction: row-reverse;
 `,[x(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),x(`tabs-bar`,`
 left: 0;
 `)]),S(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[x(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),x(`tabs-bar`,`
 top: 0;
 `)]),x(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[x(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),x(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[x(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[S(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),E(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),S(`flex`,[x(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[x(`tabs-wrapper`,`
 width: 100%;
 `,[x(`tabs-tab`,`
 margin-right: 0;
 `)])])]),x(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[D(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),D(`prefix`,`padding-right: 16px;`),D(`suffix`,`padding-left: 16px;`)]),S(`top, bottom`,[E(`>`,[x(`tabs-nav`,[x(`tabs-nav-scroll-wrapper`,[E(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),E(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),S(`shadow-start`,[E(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),S(`shadow-end`,[E(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),S(`left, right`,[x(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),E(`>`,[x(`tabs-nav`,[x(`tabs-nav-scroll-wrapper`,[E(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),E(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),S(`shadow-start`,[E(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),S(`shadow-end`,[E(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),x(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[x(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[E(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),E(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),x(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),x(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),x(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),x(`tabs-tab`,`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[S(`disabled`,{cursor:`not-allowed`}),D(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),D(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),x(`tabs-bar`,`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[E(`&.transition-disabled`,`
 transition: none;
 `),S(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),x(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),x(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[E(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),E(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),E(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),E(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),E(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),x(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),S(`line-type, bar-type`,[x(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[E(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),S(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),S(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),x(`tabs-nav`,[S(`line-type`,[S(`top`,[D(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x(`tabs-bar`,`
 bottom: -1px;
 `)]),S(`left`,[D(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),x(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),x(`tabs-bar`,`
 right: -1px;
 `)]),S(`right`,[D(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),x(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),x(`tabs-bar`,`
 left: -1px;
 `)]),S(`bottom`,[D(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),x(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),x(`tabs-bar`,`
 top: -1px;
 `)]),D(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),x(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),x(`tabs-bar`,`
 border-radius: 0;
 `)]),S(`card-type`,[D(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),x(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),x(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),x(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[S(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[D(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),C(`disabled`,[E(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),S(`closable`,`padding-right: 8px;`),S(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),S(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),S(`left, right`,`
 flex-direction: column; 
 `,[D(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),x(`tabs-wrapper`,`
 flex-direction: column;
 `),x(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[x(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),S(`top`,[S(`card-type`,[x(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),D(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[S(`active`,`
 border-bottom: 1px solid #0000;
 `)]),x(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),S(`left`,[S(`card-type`,[x(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),D(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),x(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[S(`active`,`
 border-right: 1px solid #0000;
 `)]),x(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),x(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),S(`right`,[S(`card-type`,[x(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),D(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),x(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[S(`active`,`
 border-left: 1px solid #0000;
 `)]),x(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),x(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),S(`bottom`,[S(`card-type`,[x(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),D(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),x(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[S(`active`,`
 border-top: 1px solid #0000;
 `)]),x(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),x(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]);t(),m(),l();var q=U,J=e({name:`Tabs`,props:Object.assign(Object.assign({},w.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:r,inlineThemeDisabled:a,mergedComponentPropsRef:o}=ae(e),l=w(`Tabs`,`-tabs`,fe,ce,e,r),u=c(null),f=c(null),p=c(null),m=c(null),g=c(null),v=c(null),b=c(!0),x=c(!0),S=k(e,[`labelSize`,`size`]),C=d(()=>S.value?S.value:o?.value?.Tabs?.size||`medium`),E=k(e,[`activeName`,`value`]),D=c(E.value??e.defaultValue??(t.default?F(t.default())[0]?.props?.name:null)),A=ne(E,D),j={id:0},M=d(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});_(A,()=>{j.id=0,L(),R()});function N(){let{value:e}=A;return e===null?null:u.value?.querySelector(`[data-name="${e}"]`)}function re(t){if(e.type===`card`)return;let{value:n}=f;if(!n)return;let i=n.style.opacity===`0`;if(t){let a=`${r.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(I([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;n.style.left=`${e}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${t.offsetLeft}px`,n.style.maxWidth=`${t.offsetWidth}px`;n.style.width=`8192px`,i&&(n.style.transition=`none`),n.offsetWidth,i&&(n.style.transition=``,n.style.opacity=`1`)}else{if(I([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;n.style.top=`${e}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${t.offsetTop}px`,n.style.maxHeight=`${t.offsetHeight}px`;n.style.height=`8192px`,i&&(n.style.transition=`none`),n.offsetHeight,i&&(n.style.transition=``,n.style.opacity=`1`)}}}function ie(){if(e.type===`card`)return;let{value:t}=f;t&&(t.style.opacity=`0`)}function I(e){let{value:t}=f;if(t)for(let n of e)t.style[n]=``}function L(){if(e.type===`card`)return;let t=N();t?re(t):ie()}function R(){let e=g.value?.$el;if(!e)return;let t=N();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let z=c(null),B=0,V=null;function se(e){let t=z.value;if(t){B=e.getBoundingClientRect().height;let n=`${B}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};V?(r(),V(),V=null):V=r}}function le(e){let t=z.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(B,n)}px`};V?(V(),V=null,r()):V=r}}function ue(){let t=z.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let H={value:[]},U=c(`next`);function G(e){let t=A.value,n=`next`;for(let r of H.value){if(r===t)break;if(r===e){n=`prev`;break}}U.value=n,de(e)}function de(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&P(n,t),r&&P(r,t),i&&P(i,t),D.value=t}function K(t){let{onClose:n}=e;n&&P(n,t)}let J=!0;function Y(){let{value:e}=f;if(!e)return;J||=!1;let t=`transition-disabled`;e.classList.add(t),L(),e.classList.remove(t)}let X=c(null);function Z({transitionDisabled:e}){let t=u.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=N();n&&X.value&&(X.value.style.width=`${n.offsetWidth}px`,X.value.style.height=`${n.offsetHeight}px`,X.value.style.transform=`translateX(${n.offsetLeft-ee(getComputedStyle(t).paddingLeft)}px)`,e&&X.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}_([A],()=>{e.type===`segment`&&y(()=>{Z({transitionDisabled:!1})})}),n(()=>{e.type===`segment`&&Z({transitionDisabled:!0})});let Q=0;function pe(t){if(t.contentRect.width===0&&t.contentRect.height===0||Q===t.contentRect.width)return;Q=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(J||e.justifyContent?.startsWith(`space`))&&Y(),n!==`segment`){let{placement:t}=e;ve((t===`top`||t===`bottom`?g.value?.$el:v.value)||null)}}let me=q(pe,64);_([()=>e.justifyContent,()=>e.size],()=>{y(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&Y()})});let $=c(!1);function he(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!$.value)s===`top`||s===`bottom`?a<r&&($.value=!0):o<i&&($.value=!0);else{let{value:e}=m;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&($.value=!1):o-i>e.$el.offsetHeight&&($.value=!1)}ve(g.value?.$el||null)}let ge=q(he,64);function _e(){let{onAdd:t}=e;t&&t(),y(()=>{let e=N(),{value:t}=g;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function ve(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;b.value=e<=0,x.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;b.value=e<=0,x.value=e+r>=n}}let ye=q(e=>{ve(e.target)},64);i(W,{triggerRef:s(e,`trigger`),tabStyleRef:s(e,`tabStyle`),tabClassRef:s(e,`tabClass`),addTabStyleRef:s(e,`addTabStyle`),addTabClassRef:s(e,`addTabClass`),paneClassRef:s(e,`paneClass`),paneStyleRef:s(e,`paneStyle`),mergedClsPrefixRef:r,typeRef:s(e,`type`),closableRef:s(e,`closable`),valueRef:A,tabChangeIdRef:j,onBeforeLeaveRef:s(e,`onBeforeLeave`),activateTab:G,handleClose:K,handleAdd:_e}),te(()=>{L(),R()}),h(()=>{let{value:e}=p;if(!e)return;let{value:t}=r,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;b.value?e.classList.remove(n):e.classList.add(n),x.value?e.classList.remove(i):e.classList.add(i)});let be={syncBarPosition:()=>{L()}},xe=()=>{Z({transitionDisabled:!0})},Se=d(()=>{let{value:t}=C,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:c,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:x,closeBorderRadius:S,[T(`panePadding`,t)]:w,[T(`tabPadding`,r)]:E,[T(`tabPaddingVertical`,r)]:D,[T(`tabGap`,r)]:ee,[T(`tabGap`,`${r}Vertical`)]:te,[T(`tabTextColor`,n)]:ne,[T(`tabTextColorActive`,n)]:k,[T(`tabTextColorHover`,n)]:A,[T(`tabTextColorDisabled`,n)]:j,[T(`tabFontSize`,t)]:M},common:{cubicBezierEaseInOut:N}}=l.value;return{"--n-bezier":N,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":M,"--n-tab-text-color":ne,"--n-tab-text-color-active":k,"--n-tab-text-color-disabled":j,"--n-tab-text-color-hover":A,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-border-radius":S,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":c,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":E,"--n-tab-padding-vertical":D,"--n-tab-gap":ee,"--n-tab-gap-vertical":te,"--n-pane-padding-left":O(w,`left`),"--n-pane-padding-right":O(w,`right`),"--n-pane-padding-top":O(w,`top`),"--n-pane-padding-bottom":O(w,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),Ce=a?oe(`tabs`,d(()=>`${C.value[0]}${e.type[0]}`),Se,e):void 0;return Object.assign({mergedClsPrefix:r,mergedValue:A,renderedNames:new Set,segmentCapsuleElRef:X,tabsPaneWrapperRef:z,tabsElRef:u,barElRef:f,addTabInstRef:m,xScrollInstRef:g,scrollWrapperElRef:p,addTabFixed:$,tabWrapperStyle:M,handleNavResize:me,mergedSize:C,handleScroll:ye,handleTabsResize:ge,cssVars:a?void 0:Se,themeClass:Ce?.themeClass,animationDirection:U,renderNameListRef:H,yScrollElRef:v,handleSegmentResize:xe,onAnimationBeforeLeave:se,onAnimationEnter:le,onAnimationAfterEnter:ue,onRender:Ce?.onRender},be)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:o,renderNameListRef:s,onRender:c,paneWrapperClass:l,paneWrapperStyle:u,$slots:{default:d,prefix:f,suffix:p}}=this;c?.();let m=d?F(d()).filter(e=>e.type.__TAB_PANE__===!0):[],h=d?F(d()).filter(e=>e.type.__TAB__===!0):[],g=!h.length,_=t===`card`,v=t===`segment`,y=!_&&!v&&this.justifyContent;s.value=[];let b=()=>{let t=a(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},y?null:a(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),g?m.map((e,t)=>(s.value.push(e.props.name),Q(a(K,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!y||y===`center`||y===`start`||y===`end`)}),e.children?{default:e.children.tab}:void 0)))):h.map((e,t)=>(s.value.push(e.props.name),Q(t!==0&&!y?Z(e):e))),!r&&i&&_?X(i,(g?m.length:h.length)!==0):null,y?null:a(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return a(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},_&&i?a(j,{onResize:this.handleTabsResize},{default:()=>t}):t,_?a(`div`,{class:`${e}-tabs-pad`}):null,_?null:a(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},x=v?`top`:n;return a(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${o}-size`,y&&`${e}-tabs--flex`,`${e}-tabs--${x}`],style:this.cssVars},a(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${x}`,`${e}-tabs-nav`]},L(f,t=>t&&a(`div`,{class:`${e}-tabs-nav__prefix`},t)),v?a(j,{onResize:this.handleSegmentResize},{default:()=>a(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},a(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},a(`div`,{class:`${e}-tabs-wrapper`},a(`div`,{class:`${e}-tabs-tab`}))),g?m.map((e,t)=>(s.value.push(e.props.name),a(K,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):h.map((e,t)=>(s.value.push(e.props.name),t===0?e:Z(e))))}):a(j,{onResize:this.handleNavResize},{default:()=>a(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(x)?a(ue,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:b}):a(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},b()))}),r&&i&&_?X(i,!0):null,L(p,t=>t&&a(`div`,{class:`${e}-tabs-nav__suffix`},t))),g&&(this.animated&&(x===`top`||x===`bottom`)?a(`div`,{ref:`tabsPaneWrapperRef`,style:u,class:[`${e}-tabs-pane-wrapper`,l]},Y(m,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Y(m,this.mergedValue,this.renderedNames)))}});function Y(e,t,n,r,i,o,s){let c=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,s=t===r;if(e.key!==void 0&&(e.key=r),s||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);c.push(t?u(e,[[f,s]]):e)}}),s?a(g,{name:`${s}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:o},{default:()=>c}):c}function X(e,t){return a(K,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function Z(e){let t=v(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Q(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}export{de as n,J as t};