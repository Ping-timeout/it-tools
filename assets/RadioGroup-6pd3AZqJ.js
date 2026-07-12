import{A as e,F as t,I as n,J as r,N as i,St as a,_t as o,b as s,lt as c}from"./vue.runtime.esm-bundler-C0qeGFLU.js";import{c as l,d as u,f as d,n as f,p,s as m,u as h}from"./use-theme-CCKqJxKK.js";import{t as g}from"./use-rtl-BEp40Jm0.js";import{t as _}from"./use-memo-2iy2w919.js";import{t as v}from"./use-merged-state-CMPuriOa.js";import{t as y}from"./create-injection-key-Dfvzj6n2.js";import{t as b}from"./call-fCmD0dxi.js";import{t as x}from"./flatten-BkBk7L0K.js";import{t as S}from"./get-slot-6kXJmSMP.js";import{t as C}from"./use-config-DU7zP3w3.js";import{t as w}from"./use-css-vars-class-BcgW8Oyw.js";import{n as T}from"./use-form-item-DLJ7XKLp.js";import{t as E}from"./light-EnHGsqt0.js";t(),c();var D={name:String,value:{type:[String,Number,Boolean],default:`on`},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},O=y(`n-radio-group`);function k(e){let t=n(O,null),{mergedClsPrefixRef:r,mergedComponentPropsRef:i}=C(e),s=T(e,{mergedSize(n){let{size:r}=e;if(r!==void 0)return r;if(t){let{mergedSizeRef:{value:e}}=t;if(e!==void 0)return e}return n?n.mergedSize.value:i?.value?.Radio?.size||`medium`},mergedDisabled(n){return!!(e.disabled||t?.disabledRef.value||n?.disabled.value)}}),{mergedSizeRef:c,mergedDisabledRef:l}=s,u=o(null),d=o(null),f=o(e.defaultChecked),p=v(a(e,`checked`),f),m=_(()=>t?t.valueRef.value===e.value:p.value),h=_(()=>{let{name:n}=e;if(n!==void 0)return n;if(t)return t.nameRef.value}),g=o(!1);function y(){if(t){let{doUpdateValue:n}=t,{value:r}=e;b(n,r)}else{let{onUpdateChecked:t,"onUpdate:checked":n}=e,{nTriggerFormInput:r,nTriggerFormChange:i}=s;t&&b(t,!0),n&&b(n,!0),r(),i(),f.value=!0}}function x(){l.value||m.value||y()}function S(){x(),u.value&&(u.value.checked=m.value)}function w(){g.value=!1}function E(){g.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:r,inputRef:u,labelRef:d,mergedName:h,mergedDisabled:l,renderSafeChecked:m,focus:g,mergedSize:c,handleRadioInputChange:S,handleRadioInputBlur:w,handleRadioInputFocus:E}}var A=l(`radio-group`,`
 display: inline-block;
 font-size: var(--n-font-size);
`,[h(`splitor`,`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[u(`checked`,{backgroundColor:`var(--n-button-border-color-active)`}),u(`disabled`,{opacity:`var(--n-opacity-disabled)`})]),u(`button-group`,`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[l(`radio-button`,{height:`var(--n-height)`,lineHeight:`var(--n-height)`}),h(`splitor`,{height:`var(--n-height)`})]),l(`radio-button`,`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[l(`radio-input`,`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),h(`state-border`,`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),m(`&:first-child`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[h(`state-border`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),m(`&:last-child`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[h(`state-border`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),d(`disabled`,`
 cursor: pointer;
 `,[m(`&:hover`,[h(`state-border`,`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),d(`checked`,{color:`var(--n-button-text-color-hover)`})]),u(`focus`,[m(`&:not(:active)`,[h(`state-border`,{boxShadow:`var(--n-button-box-shadow-focus)`})])])]),u(`checked`,`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),u(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);t(),c();function j(e,t,n){let r=[],a=!1;for(let o=0;o<e.length;++o){let s=e[o],c=s.type?.name;c===`RadioButton`&&(a=!0);let l=s.props;if(c!==`RadioButton`){r.push(s);continue}if(o===0)r.push(s);else{let e=r[r.length-1].props,a=t===e.value,o=e.disabled,c=t===l.value,u=l.disabled,d=(a?2:0)+ +!o,f=(c?2:0)+ +!u,p={[`${n}-radio-group__splitor--disabled`]:o,[`${n}-radio-group__splitor--checked`]:a},m={[`${n}-radio-group__splitor--disabled`]:u,[`${n}-radio-group__splitor--checked`]:c},h=d<f?m:p;r.push(i(`div`,{class:[`${n}-radio-group__splitor`,h]}),s)}}return{children:r,isButtonGroup:a}}var M=e({name:`RadioGroup`,props:Object.assign(Object.assign({},f.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),setup(e){let t=o(null),{mergedSizeRef:n,mergedDisabledRef:i,nTriggerFormChange:c,nTriggerFormInput:l,nTriggerFormBlur:u,nTriggerFormFocus:d}=T(e),{mergedClsPrefixRef:m,inlineThemeDisabled:h,mergedRtlRef:_}=C(e),y=f(`Radio`,`-radio-group`,A,E,e,m),x=o(e.defaultValue),S=v(a(e,`value`),x);function D(t){let{onUpdateValue:n,"onUpdate:value":r}=e;n&&b(n,t),r&&b(r,t),x.value=t,c(),l()}function k(e){let{value:n}=t;n&&(n.contains(e.relatedTarget)||d())}function j(e){let{value:n}=t;n&&(n.contains(e.relatedTarget)||u())}r(O,{mergedClsPrefixRef:m,nameRef:a(e,`name`),valueRef:S,disabledRef:i,mergedSizeRef:n,doUpdateValue:D});let M=g(`Radio`,_,m),N=s(()=>{let{value:e}=n,{common:{cubicBezierEaseInOut:t},self:{buttonBorderColor:r,buttonBorderColorActive:i,buttonBorderRadius:a,buttonBoxShadow:o,buttonBoxShadowFocus:s,buttonBoxShadowHover:c,buttonColor:l,buttonColorActive:u,buttonTextColor:d,buttonTextColorActive:f,buttonTextColorHover:m,opacityDisabled:h,[p(`buttonHeight`,e)]:g,[p(`fontSize`,e)]:_}}=y.value;return{"--n-font-size":_,"--n-bezier":t,"--n-button-border-color":r,"--n-button-border-color-active":i,"--n-button-border-radius":a,"--n-button-box-shadow":o,"--n-button-box-shadow-focus":s,"--n-button-box-shadow-hover":c,"--n-button-color":l,"--n-button-color-active":u,"--n-button-text-color":d,"--n-button-text-color-hover":m,"--n-button-text-color-active":f,"--n-height":g,"--n-opacity-disabled":h}}),P=h?w(`radio-group`,s(()=>n.value[0]),N,e):void 0;return{selfElRef:t,rtlEnabled:M,mergedClsPrefix:m,mergedValue:S,handleFocusout:j,handleFocusin:k,cssVars:h?void 0:N,themeClass:P?.themeClass,onRender:P?.onRender}},render(){var e;let{mergedValue:t,mergedClsPrefix:n,handleFocusin:r,handleFocusout:a}=this,{children:o,isButtonGroup:s}=j(x(S(this)),t,n);return(e=this.onRender)==null||e.call(this),i(`div`,{onFocusin:r,onFocusout:a,ref:`selfElRef`,class:[`${n}-radio-group`,this.rtlEnabled&&`${n}-radio-group--rtl`,this.themeClass,s&&`${n}-radio-group--button-group`],style:this.cssVars},o)}});export{D as n,k as r,M as t};