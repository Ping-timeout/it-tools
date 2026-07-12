import{A as e,F as t,I as n,J as r,N as i,St as a,_t as o,a as s,at as c,b as l,lt as u,n as ee,nt as te,tt as ne,z as re}from"./vue.runtime.esm-bundler-C0qeGFLU.js";import{c as d,d as ie,n as ae,p as oe,s as f,u as p}from"./use-theme-CCKqJxKK.js";import{a as se}from"./Scrollbar-DMMPvAwX.js";import{_ as ce,a as m,b as le,c as h,d as g,f as ue,g as de,h as _,i as v,l as y,m as fe,o as b,p as x,u as pe,v as S,x as me,y as C}from"./light-CLwlD-S_.js";import{n as w,t as T}from"./delegate-CJ0pWS92.js";import{t as he}from"./use-merged-state-CMPuriOa.js";import{t as ge}from"./use-is-mounted-IXinzHPL.js";import{t as E}from"./create-injection-key-Dfvzj6n2.js";import{i as _e,n as ve,r as ye,t as D}from"./Follower-Bt5UfwtU.js";import{t as be}from"./clickoutside-EYrQQIK3.js";import{r as xe}from"./warn-Dor1LvN9.js";import{t as O}from"./call-fCmD0dxi.js";import{o as k}from"./resolve-slot--91hp_jr.js";import{t as Se}from"./use-config-DU7zP3w3.js";import{t as Ce}from"./use-css-vars-class-BcgW8Oyw.js";import{n as we}from"./use-form-item-DLJ7XKLp.js";import{t as Te}from"./use-locale-Dasy6mlg.js";import{t as A}from"./Input-Bt_1-nAM.js";import{t as j}from"./fade-in-scale-up.cssr-CnNW1Hcg.js";import{t as M}from"./Button-CC-Xd7Y4.js";import{t as N}from"./InputGroup-etqITUY1.js";import{t as Ee}from"./light-BmhIB4D1.js";function De(e,t){switch(e[0]){case`hex`:return t?`#000000FF`:`#000000`;case`rgb`:return t?`rgba(0, 0, 0, 1)`:`rgb(0, 0, 0)`;case`hsl`:return t?`hsla(0, 0%, 0%, 1)`:`hsl(0, 0%, 0%)`;case`hsv`:return t?`hsva(0, 0%, 0%, 1)`:`hsv(0, 0%, 0%)`}return`#000000`}function P(e){return e===null?null:/^ *#/.test(e)?`hex`:e.includes(`rgb`)?`rgb`:e.includes(`hsl`)?`hsl`:e.includes(`hsv`)?`hsv`:null}function Oe(e,t=[255,255,255],n=`AA`){let[r,i,a,o]=b(g(e));if(o===1){let e=F([r,i,a]),o=F(t);return(Math.max(e,o)+.05)/(Math.min(e,o)+.05)>=(n===`AA`?4.5:7)}let s=F([Math.round(r*o+t[0]*(1-o)),Math.round(i*o+t[1]*(1-o)),Math.round(a*o+t[2]*(1-o))]),c=F(t);return(Math.max(s,c)+.05)/(Math.min(s,c)+.05)>=(n===`AA`?4.5:7)}function F(e){let[t,n,r]=e.map(e=>(e/=255,e<=.03928?e/12.92:((e+.055)/1.055)**2.4));return .2126*t+.7152*n+.0722*r}function ke(e){return e=Math.round(e),e>=360?359:e<0?0:e}function I(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}var L={rgb:{hex(e){return y(b(e))},hsl(e){let[t,n,r,i]=b(e);return g([...le(t,n,r),i])},hsv(e){let[t,n,r,i]=b(e);return x([...me(t,n,r),i])}},hex:{rgb(e){return _(b(e))},hsl(e){let[t,n,r,i]=b(e);return g([...le(t,n,r),i])},hsv(e){let[t,n,r,i]=b(e);return x([...me(t,n,r),i])}},hsl:{hex(e){let[t,n,r,i]=v(e);return y([...ce(t,n,r),i])},rgb(e){let[t,n,r,i]=v(e);return _([...ce(t,n,r),i])},hsv(e){let[t,n,r,i]=v(e);return x([...de(t,n,r),i])}},hsv:{hex(e){let[t,n,r,i]=m(e);return y([...C(t,n,r),i])},rgb(e){let[t,n,r,i]=m(e);return _([...C(t,n,r),i])},hsl(e){let[t,n,r,i]=m(e);return g([...S(t,n,r),i])}}};function R(e,t,n){return n||=P(e),n?n===t?e:L[n][t](e):null}t(),u();var z=`12px`,B=12,V=`6px`,Ae=e({name:`AlphaSlider`,props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){let t=o(null);function n(n){!t.value||!e.rgba||(w(`mousemove`,document,r),w(`mouseup`,document,i),r(n))}function r(n){let{value:r}=t;if(!r)return;let{width:i,left:a}=r.getBoundingClientRect(),o=(n.clientX-a)/(i-B);e.onUpdateAlpha(I(o))}function i(){var t;T(`mousemove`,document,r),T(`mouseup`,document,i),(t=e.onComplete)==null||t.call(e)}return{railRef:t,railBackgroundImage:l(()=>{let{rgba:t}=e;return t?`linear-gradient(to right, rgba(${t[0]}, ${t[1]}, ${t[2]}, 0) 0%, rgba(${t[0]}, ${t[1]}, ${t[2]}, 1) 100%)`:``}),handleMouseDown:n}},render(){let{clsPrefix:e}=this;return i(`div`,{class:`${e}-color-picker-slider`,ref:`railRef`,style:{height:z,borderRadius:V},onMousedown:this.handleMouseDown},i(`div`,{style:{borderRadius:V,position:`absolute`,left:0,right:0,top:0,bottom:0,overflow:`hidden`}},i(`div`,{class:`${e}-color-picker-checkboard`}),i(`div`,{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&i(`div`,{style:{position:`absolute`,left:V,right:V,top:0,bottom:0}},i(`div`,{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${V})`,borderRadius:V,width:z,height:z}},i(`div`,{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:_(this.rgba),borderRadius:V,width:z,height:z}}))))}}),je=E(`n-color-picker`);t(),u();function H(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function U(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function W(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function G(e){let t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function K(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}var Me={paddingSmall:`0 4px`},q=e({name:`ColorInputUnit`,props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){let t=o(``),{themeRef:r}=n(je,null);te(()=>{t.value=i()});function i(){let{value:t}=e;if(t===null)return``;let{label:n}=e;return n===`HEX`?t:n===`A`?`${Math.floor(t*100)}%`:String(Math.floor(t))}function a(e){t.value=e}function s(n){let r,a;switch(e.label){case`HEX`:a=G(n),a&&e.onUpdateValue(n),t.value=i();break;case`H`:r=U(n),r===!1?t.value=i():e.onUpdateValue(r);break;case`S`:case`L`:case`V`:r=W(n),r===!1?t.value=i():e.onUpdateValue(r);break;case`A`:r=K(n),r===!1?t.value=i():e.onUpdateValue(r);break;case`R`:case`G`:case`B`:r=H(n),r===!1?t.value=i():e.onUpdateValue(r);break}}return{mergedTheme:r,inputValue:t,handleInputChange:s,handleInputUpdateValue:a}},render(){let{mergedTheme:e}=this;return i(A,{size:`small`,placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Me,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label===`A`?`flex-grow: 1.25;`:``})}});t();var Ne=e({name:`ColorInput`,props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,n){let{showAlpha:r}=e;if(e.mode===`hex`){e.onUpdateValue((r?y:h)(n));return}let i;switch(i=e.valueArr===null?[0,0,0,0]:Array.from(e.valueArr),e.mode){case`hsv`:i[t]=n,e.onUpdateValue((r?x:ue)(i));break;case`rgb`:i[t]=n,e.onUpdateValue((r?_:fe)(i));break;case`hsl`:i[t]=n,e.onUpdateValue((r?g:pe)(i));break}}}},render(){let{clsPrefix:e,modes:t}=this;return i(`div`,{class:`${e}-color-picker-input`},i(`div`,{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?``:`pointer`}},this.mode.toUpperCase()+(this.showAlpha?`A`:``)),i(N,null,{default:()=>{let{mode:e,valueArr:t,showAlpha:n}=this;if(e===`hex`){let e=null;try{e=t===null?null:(n?y:h)(t)}catch{}return i(q,{label:`HEX`,showAlpha:n,value:e,onUpdateValue:e=>{this.handleUnitUpdateValue(0,e)}})}return(e+(n?`a`:``)).split(``).map((e,n)=>i(q,{label:e.toUpperCase(),value:t===null?null:t[n],onUpdateValue:e=>{this.handleUnitUpdateValue(n,e)}}))}}))}});t();function J(e,t){if(t===`hsv`){let[t,n,r,i]=m(e);return _([...C(t,n,r),i])}return e}function Pe(e){let t=document.createElement(`canvas`).getContext(`2d`);return t?(t.fillStyle=e,t.fillStyle):`#000000`}var Fe=e({name:`ColorPickerSwatches`,props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){let t=l(()=>e.swatches.map(e=>{let t=P(e);return{value:e,mode:t,legalValue:J(e,t)}}));function n(t){let{mode:n}=e,{value:r,mode:i}=t;return i||(i=`hex`,/^[a-zA-Z]+$/.test(r)?r=Pe(r):(xe(`color-picker`,`color ${r} in swatches is invalid.`),r=`#000000`)),i===n?r:R(r,n,i)}function r(t){e.onUpdateColor(n(t))}function i(e,t){e.key===`Enter`&&r(t)}return{parsedSwatchesRef:t,handleSwatchSelect:r,handleSwatchKeyDown:i}},render(){let{clsPrefix:e}=this;return i(`div`,{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>i(`div`,{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:e=>{this.handleSwatchKeyDown(e,t)}},i(`div`,{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}});t();var Ie=e({name:`ColorPickerTrigger`,slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){let{colorPickerSlots:t,renderLabelRef:r}=n(je,null);return()=>{let{hsla:n,value:a,clsPrefix:o,onClick:s,disabled:c}=e,l=t.label||r.value;return i(`div`,{class:[`${o}-color-picker`,c&&`${o}-color-picker--disabled`],onClick:c?void 0:s},i(`div`,{class:`${o}-color-picker__fill`},i(`div`,{class:`${o}-color-picker-checkboard`}),i(`div`,{style:{position:`absolute`,left:0,right:0,top:0,bottom:0,backgroundColor:n?g(n):``}}),a&&n?i(`div`,{class:`${o}-color-picker__value`,style:{color:Oe(n)?`white`:`black`}},l?l(a):a):null))}}});t();var Le=e({name:`ColorPreview`,props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{let t=P(e);return!!(!e||t&&t!==`hsv`)}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(t){var n;let r=t.target.value;(n=e.onUpdateColor)==null||n.call(e,R(r.toUpperCase(),e.mode,`hex`)),t.stopPropagation()}return{handleChange:t}},render(){let{clsPrefix:e}=this;return i(`div`,{class:`${e}-color-picker-preview__preview`},i(`span`,{class:`${e}-color-picker-preview__fill`,style:{background:this.color||`#000000`}}),i(`input`,{class:`${e}-color-picker-preview__input`,type:`color`,value:this.color,onChange:this.handleChange}))}});t(),u();var Y=`12px`,Re=12,X=`6px`,ze=6,Z=`linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)`,Be=e({name:`HueSlider`,props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){let t=o(null);function n(e){t.value&&(w(`mousemove`,document,r),w(`mouseup`,document,i),r(e))}function r(n){let{value:r}=t;if(!r)return;let{width:i,left:a}=r.getBoundingClientRect(),o=ke((n.clientX-a-ze)/(i-Re)*360);e.onUpdateHue(o)}function i(){var t;T(`mousemove`,document,r),T(`mouseup`,document,i),(t=e.onComplete)==null||t.call(e)}return{railRef:t,handleMouseDown:n}},render(){let{clsPrefix:e}=this;return i(`div`,{class:`${e}-color-picker-slider`,style:{height:Y,borderRadius:X}},i(`div`,{ref:`railRef`,style:{boxShadow:`inset 0 0 2px 0 rgba(0, 0, 0, .24)`,boxSizing:`border-box`,backgroundImage:Z,height:Y,borderRadius:X,position:`relative`},onMousedown:this.handleMouseDown},i(`div`,{style:{position:`absolute`,left:X,right:X,top:0,bottom:0}},i(`div`,{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${X})`,borderRadius:X,width:Y,height:Y}},i(`div`,{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:X,width:Y,height:Y}})))))}});t(),u();var Q=`12px`,$=`6px`,Ve=e({name:`Pallete`,props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){let t=o(null);function n(e){t.value&&(w(`mousemove`,document,r),w(`mouseup`,document,i),r(e))}function r(n){let{value:r}=t;if(!r)return;let{width:i,height:a,left:o,bottom:s}=r.getBoundingClientRect(),c=(s-n.clientY)/a,l=(n.clientX-o)/i,u=100*(l>1?1:l<0?0:l),ee=100*(c>1?1:c<0?0:c);e.onUpdateSV(u,ee)}function i(){var t;T(`mousemove`,document,r),T(`mouseup`,document,i),(t=e.onComplete)==null||t.call(e)}return{palleteRef:t,handleColor:l(()=>{let{rgba:t}=e;return t?`rgb(${t[0]}, ${t[1]}, ${t[2]})`:``}),handleMouseDown:n}},render(){let{clsPrefix:e}=this;return i(`div`,{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:`palleteRef`},i(`div`,{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),i(`div`,{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:`linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))`}}),this.rgba&&i(`div`,{class:`${e}-color-picker-handle`,style:{width:Q,height:Q,borderRadius:$,left:`calc(${this.displayedSv[0]}% - ${$})`,bottom:`calc(${this.displayedSv[1]}% - ${$})`}},i(`div`,{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:$,width:Q,height:Q}})))}}),He=f([d(`color-picker-panel`,`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[j(),d(`input`,`
 text-align: center;
 `)]),d(`color-picker-checkboard`,`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[f(`&::after`,`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),d(`color-picker-slider`,`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[p(`image`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),f(`&::after`,`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),d(`color-picker-handle`,`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[p(`fill`,`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),d(`color-picker-pallete`,`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[p(`layer`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[ie(`shadowed`,`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),d(`color-picker-preview`,`
 display: flex;
 `,[p(`sliders`,`
 flex: 1 0 auto;
 `),p(`preview`,`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),p(`fill`,`
 display: block;
 width: 30px;
 height: 30px;
 `),p(`input`,`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),d(`color-picker-input`,`
 display: flex;
 align-items: center;
 `,[d(`input`,`
 flex-grow: 1;
 flex-basis: 0;
 `),p(`mode`,`
 width: 72px;
 text-align: center;
 `)]),d(`color-picker-control`,`
 padding: 12px;
 `),d(`color-picker-action`,`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[d(`button`,`margin-left: 8px;`)]),d(`color-picker`,`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 cursor: pointer;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[ie(`disabled`,`cursor: not-allowed`),p(`value`,`
 white-space: nowrap;
 position: relative;
 `),p(`fill`,`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),d(`color-picker-checkboard`,`
 border-radius: var(--n-border-radius);
 `,[f(`&::after`,`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),d(`color-picker-swatches`,`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[d(`color-picker-swatch`,`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[p(`fill`,`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),f(`&:focus`,`
 outline: none;
 `,[p(`fill`,[f(`&::after`,`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);t(),u(),s();var Ue=e({name:`ColorPicker`,props:Object.assign(Object.assign({},ae.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>[`rgb`,`hex`,`hsl`]},placement:{type:String,default:`bottom-start`},to:_e.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),slots:Object,setup(e,{slots:t}){let n=null;function s(e){n=e}let c=null,{mergedClsPrefixRef:u,namespaceRef:ee,inlineThemeDisabled:d,mergedComponentPropsRef:ie}=Se(e),f=we(e,{mergedSize:t=>{let{size:n}=e;if(n)return n;let{mergedSize:r}=t||{};return r?.value?r.value:ie?.value?.ColorPicker?.size||`medium`}}),{mergedSizeRef:p,mergedDisabledRef:w}=f,{localeRef:T}=Te(`global`),E=ae(`ColorPicker`,`-color-picker`,He,Ee,e,u);r(je,{themeRef:E,renderLabelRef:a(e,`renderLabel`),colorPickerSlots:t});let ve=o(e.defaultShow),ye=he(a(e,`show`),ve);function D(t){let{onUpdateShow:n,"onUpdate:show":r}=e;n&&O(n,t),r&&O(r,t),ve.value=t}let{defaultValue:be}=e,xe=o(be===void 0?De(e.modes,e.showAlpha):be),k=he(a(e,`value`),xe),A=o([k.value]),j=o(0),N=l(()=>P(k.value)),{modes:Oe}=e,F=o(P(k.value)||Oe[0]||`rgb`);function ke(){let{modes:t}=e,{value:n}=F,r=t.findIndex(e=>e===n);~r?F.value=t[(r+1)%t.length]:F.value=`rgb`}let I,L,R,z,B,V,H,U,W=l(()=>{let{value:e}=k;if(!e)return null;switch(N.value){case`hsv`:return m(e);case`hsl`:return[I,L,R,U]=v(e),[...de(I,L,R),U];case`rgb`:case`hex`:return[B,V,H,U]=b(e),[...me(B,V,H),U]}}),G=l(()=>{let{value:e}=k;if(!e)return null;switch(N.value){case`rgb`:case`hex`:return b(e);case`hsv`:return[I,L,z,U]=m(e),[...C(I,L,z),U];case`hsl`:return[I,L,R,U]=v(e),[...ce(I,L,R),U]}}),K=l(()=>{let{value:e}=k;if(!e)return null;switch(N.value){case`hsl`:return v(e);case`hsv`:return[I,L,z,U]=m(e),[...S(I,L,z),U];case`rgb`:case`hex`:return[B,V,H,U]=b(e),[...le(B,V,H),U]}}),Me=l(()=>{switch(F.value){case`rgb`:case`hex`:return G.value;case`hsv`:return W.value;case`hsl`:return K.value}}),q=o(0),J=o(1),Pe=o([0,0]);function Ie(t,n){let{value:r}=W,i=q.value,a=r?r[3]:1;Pe.value=[t,n];let{showAlpha:o}=e;switch(F.value){case`hsv`:X((o?x:ue)([i,t,n,a]),`cursor`);break;case`hsl`:X((o?g:pe)([...S(i,t,n),a]),`cursor`);break;case`rgb`:X((o?_:fe)([...C(i,t,n),a]),`cursor`);break;case`hex`:X((o?y:h)([...C(i,t,n),a]),`cursor`);break}}function Y(t){q.value=t;let{value:n}=W;if(!n)return;let[,r,i,a]=n,{showAlpha:o}=e;switch(F.value){case`hsv`:X((o?x:ue)([t,r,i,a]),`cursor`);break;case`rgb`:X((o?_:fe)([...C(t,r,i),a]),`cursor`);break;case`hex`:X((o?y:h)([...C(t,r,i),a]),`cursor`);break;case`hsl`:X((o?g:pe)([...S(t,r,i),a]),`cursor`);break}}function Re(e){switch(F.value){case`hsv`:[I,L,z]=W.value,X(x([I,L,z,e]),`cursor`);break;case`rgb`:[B,V,H]=G.value,X(_([B,V,H,e]),`cursor`);break;case`hex`:[B,V,H]=G.value,X(y([B,V,H,e]),`cursor`);break;case`hsl`:[I,L,R]=K.value,X(g([I,L,R,e]),`cursor`);break}J.value=e}function X(t,n){c=n===`cursor`?t:null;let{nTriggerFormChange:r,nTriggerFormInput:i}=f,{onUpdateValue:a,"onUpdate:value":o}=e;a&&O(a,t),o&&O(o,t),r(),i(),xe.value=t}function ze(e){X(e,`input`),re(Z)}function Z(t=!0){let{value:n}=k;if(n){let{nTriggerFormChange:r,nTriggerFormInput:i}=f,{onComplete:a}=e;a&&a(n);let{value:o}=A,{value:s}=j;t&&(o.splice(s+1,o.length,n),j.value=s+1),r(),i()}}function Q(){let{value:e}=j;e-1<0||(X(A.value[e-1],`input`),Z(!1),j.value=e-1)}function $(){let{value:e}=j;e<0||e+1>=A.value.length||(X(A.value[e+1],`input`),Z(!1),j.value=e+1)}function Ue(){X(null,`input`);let{onClear:t}=e;t&&t(),D(!1)}function We(){let{value:t}=k,{onConfirm:n}=e;n&&n(t),D(!1)}let Ge=l(()=>j.value>=1),Ke=l(()=>{let{value:e}=A;return e.length>1&&j.value<e.length-1});ne(ye,e=>{e||(A.value=[k.value],j.value=0)}),te(()=>{if(!(c&&c===k.value)){let{value:e}=W;e&&(q.value=e[0],J.value=e[3],Pe.value=[e[1],e[2]])}c=null});let qe=l(()=>{let{value:e}=p,{common:{cubicBezierEaseInOut:t},self:{textColor:n,color:r,panelFontSize:i,boxShadow:a,border:o,borderRadius:s,dividerColor:c,[oe(`height`,e)]:l,[oe(`fontSize`,e)]:u}}=E.value;return{"--n-bezier":t,"--n-text-color":n,"--n-color":r,"--n-panel-font-size":i,"--n-font-size":u,"--n-box-shadow":a,"--n-border":o,"--n-border-radius":s,"--n-height":l,"--n-divider-color":c}}),Je=d?Ce(`color-picker`,l(()=>p.value[0]),qe,e):void 0;function Ye(){let{value:n}=G,{value:r}=q,{internalActions:a,modes:o,actions:s}=e,{value:c}=E,{value:l}=u;return i(`div`,{class:[`${l}-color-picker-panel`,Je?.themeClass.value],onDragstart:e=>{e.preventDefault()},style:d?void 0:qe.value},i(`div`,{class:`${l}-color-picker-control`},i(Ve,{clsPrefix:l,rgba:n,displayedHue:r,displayedSv:Pe.value,onUpdateSV:Ie,onComplete:Z}),i(`div`,{class:`${l}-color-picker-preview`},i(`div`,{class:`${l}-color-picker-preview__sliders`},i(Be,{clsPrefix:l,hue:r,onUpdateHue:Y,onComplete:Z}),e.showAlpha?i(Ae,{clsPrefix:l,rgba:n,alpha:J.value,onUpdateAlpha:Re,onComplete:Z}):null),e.showPreview?i(Le,{clsPrefix:l,mode:F.value,color:G.value&&h(G.value),onUpdateColor:e=>{X(e,`input`)}}):null),i(Ne,{clsPrefix:l,showAlpha:e.showAlpha,mode:F.value,modes:o,onUpdateMode:ke,value:k.value,valueArr:Me.value,onUpdateValue:ze}),e.swatches?.length&&i(Fe,{clsPrefix:l,mode:F.value,swatches:e.swatches,onUpdateColor:e=>{X(e,`input`)}})),s?.length?i(`div`,{class:`${l}-color-picker-action`},s.includes(`confirm`)&&i(M,{size:`small`,onClick:We,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button},{default:()=>T.value.confirm}),s.includes(`clear`)&&i(M,{size:`small`,onClick:Ue,disabled:!k.value,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button},{default:()=>T.value.clear})):null,t.action?i(`div`,{class:`${l}-color-picker-action`},{default:t.action}):a?i(`div`,{class:`${l}-color-picker-action`},a.includes(`undo`)&&i(M,{size:`small`,onClick:Q,disabled:!Ge.value,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button},{default:()=>T.value.undo}),a.includes(`redo`)&&i(M,{size:`small`,onClick:$,disabled:!Ke.value,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button},{default:()=>T.value.redo})):null)}return{mergedClsPrefix:u,namespace:ee,hsla:K,rgba:G,mergedShow:ye,mergedDisabled:w,isMounted:ge(),adjustedTo:_e(e),mergedValue:k,handleTriggerClick(){w.value||D(!0)},setTriggerRef:s,handleClickOutside(e){if(n instanceof Element){if(n.contains(se(e)))return}else if(n&&n.$el.contains(se(e)))return;D(!1)},renderPanel:Ye,cssVars:d?void 0:qe,themeClass:Je?.themeClass,onRender:Je?.onRender}},render(){let{mergedClsPrefix:e,onRender:t}=this;return t?.(),i(ye,null,{default:()=>[i(ve,null,{default:()=>k(this.$slots.trigger,{value:this.mergedValue,onClick:this.handleTriggerClick,ref:this.setTriggerRef},t=>t||i(Ie,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,style:this.cssVars,ref:this.setTriggerRef,disabled:this.mergedDisabled,class:this.themeClass,onClick:this.mergedDisabled?void 0:this.handleTriggerClick}))}),i(D,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===_e.tdkey,to:this.adjustedTo},{default:()=>i(ee,{name:`fade-in-scale-up-transition`,appear:this.isMounted},{default:()=>this.mergedShow?c(this.renderPanel(),[[be,this.handleClickOutside,void 0,{capture:!0}]]):null})})]})}});export{Ue as t};