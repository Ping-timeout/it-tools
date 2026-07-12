import{A as e,F as t,I as n,J as r,N as i,St as a,_t as o,b as s,lt as c}from"./vue.runtime.esm-bundler-C0qeGFLU.js";import{c as l,d as u,h as d,m as f,n as p,p as m,s as h,u as g}from"./use-theme-CCKqJxKK.js";import{t as _}from"./use-rtl-BEp40Jm0.js";import{t as v}from"./misc-DDs3MKLt.js";import{n as y}from"./delegate-CJ0pWS92.js";import{t as b}from"./use-memo-2iy2w919.js";import{t as x}from"./use-merged-state-CMPuriOa.js";import{t as S}from"./create-injection-key-Dfvzj6n2.js";import{t as C}from"./call-fCmD0dxi.js";import{a as w}from"./resolve-slot--91hp_jr.js";import{t as T}from"./use-config-DU7zP3w3.js";import{t as E}from"./use-css-vars-class-BcgW8Oyw.js";import{n as D}from"./use-form-item-DLJ7XKLp.js";import{n as O,t as k}from"./icon-switch.cssr-C9Ffd187.js";import{t as A}from"./light-D9RPDeCi.js";t(),c();var j=S(`n-checkbox-group`),M=e({name:`CheckboxGroup`,props:{min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},setup(e){let{mergedClsPrefixRef:t}=T(e),n=D(e),{mergedSizeRef:i,mergedDisabledRef:c}=n,l=o(e.defaultValue),u=x(s(()=>e.value),l),d=s(()=>u.value?.length||0),f=s(()=>Array.isArray(u.value)?new Set(u.value):new Set);function p(t,r){let{nTriggerFormInput:i,nTriggerFormChange:a}=n,{onChange:o,"onUpdate:value":s,onUpdateValue:c}=e;if(Array.isArray(u.value)){let e=Array.from(u.value),n=e.findIndex(e=>e===r);t?~n||(e.push(r),c&&C(c,e,{actionType:`check`,value:r}),s&&C(s,e,{actionType:`check`,value:r}),i(),a(),l.value=e,o&&C(o,e)):~n&&(e.splice(n,1),c&&C(c,e,{actionType:`uncheck`,value:r}),s&&C(s,e,{actionType:`uncheck`,value:r}),o&&C(o,e),l.value=e,i(),a())}else t?(c&&C(c,[r],{actionType:`check`,value:r}),s&&C(s,[r],{actionType:`check`,value:r}),o&&C(o,[r]),l.value=[r],i(),a()):(c&&C(c,[],{actionType:`uncheck`,value:r}),s&&C(s,[],{actionType:`uncheck`,value:r}),o&&C(o,[]),l.value=[],i(),a())}return r(j,{checkedCountRef:d,maxRef:a(e,`max`),minRef:a(e,`min`),valueSetRef:f,disabledRef:c,mergedSizeRef:i,toggleCheckbox:p}),{mergedClsPrefix:t}},render(){return i(`div`,{class:`${this.mergedClsPrefix}-checkbox-group`,role:`group`},this.$slots)}});t();var N=()=>i(`svg`,{viewBox:`0 0 64 64`,class:`check-icon`},i(`path`,{d:`M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z`}));t();var P=()=>i(`svg`,{viewBox:`0 0 100 100`,class:`line-icon`},i(`path`,{d:`M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z`})),F=h([l(`checkbox`,`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[u(`show-label`,`line-height: var(--n-label-line-height);`),h(`&:hover`,[l(`checkbox-box`,[g(`border`,`border: var(--n-border-checked);`)])]),h(`&:focus:not(:active)`,[l(`checkbox-box`,[g(`border`,`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),u(`inside-table`,[l(`checkbox-box`,`
 background-color: var(--n-merged-color-table);
 `)]),u(`checked`,[l(`checkbox-box`,`
 background-color: var(--n-color-checked);
 `,[l(`checkbox-icon`,[h(`.check-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),u(`indeterminate`,[l(`checkbox-box`,[l(`checkbox-icon`,[h(`.check-icon`,`
 opacity: 0;
 transform: scale(.5);
 `),h(`.line-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),u(`checked, indeterminate`,[h(`&:focus:not(:active)`,[l(`checkbox-box`,[g(`border`,`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),l(`checkbox-box`,`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[g(`border`,{border:`var(--n-border-checked)`})])]),u(`disabled`,{cursor:`not-allowed`},[u(`checked`,[l(`checkbox-box`,`
 background-color: var(--n-color-disabled-checked);
 `,[g(`border`,{border:`var(--n-border-disabled-checked)`}),l(`checkbox-icon`,[h(`.check-icon, .line-icon`,{fill:`var(--n-check-mark-color-disabled-checked)`})])])]),l(`checkbox-box`,`
 background-color: var(--n-color-disabled);
 `,[g(`border`,`
 border: var(--n-border-disabled);
 `),l(`checkbox-icon`,[h(`.check-icon, .line-icon`,`
 fill: var(--n-check-mark-color-disabled);
 `)])]),g(`label`,`
 color: var(--n-text-color-disabled);
 `)]),l(`checkbox-box-wrapper`,`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),l(`checkbox-box`,`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[g(`border`,`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),l(`checkbox-icon`,`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[h(`.check-icon, .line-icon`,`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),k({left:`1px`,top:`1px`})])]),g(`label`,`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[h(`&:empty`,{display:`none`})])]),f(l(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),d(l(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]);t(),c();var I=e({name:`Checkbox`,props:Object.assign(Object.assign({},p.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),setup(e){let t=n(j,null),r=o(null),{mergedClsPrefixRef:i,inlineThemeDisabled:c,mergedRtlRef:l,mergedComponentPropsRef:u}=T(e),d=o(e.defaultChecked),f=x(a(e,`checked`),d),h=b(()=>{if(t){let n=t.valueSetRef.value;return n&&e.value!==void 0?n.has(e.value):!1}else return f.value===e.checkedValue}),g=D(e,{mergedSize(n){let{size:r}=e;if(r!==void 0)return r;if(t){let{value:e}=t.mergedSizeRef;if(e!==void 0)return e}if(n){let{mergedSize:e}=n;if(e!==void 0)return e.value}return u?.value?.Checkbox?.size||`medium`},mergedDisabled(n){let{disabled:r}=e;if(r!==void 0)return r;if(t){if(t.disabledRef.value)return!0;let{maxRef:{value:e},checkedCountRef:n}=t;if(e!==void 0&&n.value>=e&&!h.value)return!0;let{minRef:{value:r}}=t;if(r!==void 0&&n.value<=r&&h.value)return!0}return n?n.disabled.value:!1}}),{mergedDisabledRef:y,mergedSizeRef:S}=g,w=p(`Checkbox`,`-checkbox`,F,A,e,i);function O(n){if(t&&e.value!==void 0)t.toggleCheckbox(!h.value,e.value);else{let{onChange:t,"onUpdate:checked":r,onUpdateChecked:i}=e,{nTriggerFormInput:a,nTriggerFormChange:o}=g,s=h.value?e.uncheckedValue:e.checkedValue;r&&C(r,s,n),i&&C(i,s,n),t&&C(t,s,n),a(),o(),d.value=s}}function k(e){y.value||O(e)}function M(e){if(!y.value)switch(e.key){case` `:case`Enter`:O(e)}}function N(e){switch(e.key){case` `:e.preventDefault()}}let P={focus:()=>{var e;(e=r.value)==null||e.focus()},blur:()=>{var e;(e=r.value)==null||e.blur()}},I=_(`Checkbox`,l,i),L=s(()=>{let{value:e}=S,{common:{cubicBezierEaseInOut:t},self:{borderRadius:n,color:r,colorChecked:i,colorDisabled:a,colorTableHeader:o,colorTableHeaderModal:s,colorTableHeaderPopover:c,checkMarkColor:l,checkMarkColorDisabled:u,border:d,borderFocus:f,borderDisabled:p,borderChecked:h,boxShadowFocus:g,textColor:_,textColorDisabled:v,checkMarkColorDisabledChecked:y,colorDisabledChecked:b,borderDisabledChecked:x,labelPadding:C,labelLineHeight:T,labelFontWeight:E,[m(`fontSize`,e)]:D,[m(`size`,e)]:O}}=w.value;return{"--n-label-line-height":T,"--n-label-font-weight":E,"--n-size":O,"--n-bezier":t,"--n-border-radius":n,"--n-border":d,"--n-border-checked":h,"--n-border-focus":f,"--n-border-disabled":p,"--n-border-disabled-checked":x,"--n-box-shadow-focus":g,"--n-color":r,"--n-color-checked":i,"--n-color-table":o,"--n-color-table-modal":s,"--n-color-table-popover":c,"--n-color-disabled":a,"--n-color-disabled-checked":b,"--n-text-color":_,"--n-text-color-disabled":v,"--n-check-mark-color":l,"--n-check-mark-color-disabled":u,"--n-check-mark-color-disabled-checked":y,"--n-font-size":D,"--n-label-padding":C}}),R=c?E(`checkbox`,s(()=>S.value[0]),L,e):void 0;return Object.assign(g,P,{rtlEnabled:I,selfRef:r,mergedClsPrefix:i,mergedDisabled:y,renderedChecked:h,mergedTheme:w,labelId:v(),handleClick:k,handleKeyUp:M,handleKeyDown:N,cssVars:c?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender})},render(){var e;let{$slots:t,renderedChecked:n,mergedDisabled:r,indeterminate:a,privateInsideTable:o,cssVars:s,labelId:c,label:l,mergedClsPrefix:u,focusable:d,handleKeyUp:f,handleKeyDown:p,handleClick:m}=this;(e=this.onRender)==null||e.call(this);let h=w(t.default,e=>l||e?i(`span`,{class:`${u}-checkbox__label`,id:c},l||e):null);return i(`div`,{ref:`selfRef`,class:[`${u}-checkbox`,this.themeClass,this.rtlEnabled&&`${u}-checkbox--rtl`,n&&`${u}-checkbox--checked`,r&&`${u}-checkbox--disabled`,a&&`${u}-checkbox--indeterminate`,o&&`${u}-checkbox--inside-table`,h&&`${u}-checkbox--show-label`],tabindex:r||!d?void 0:0,role:`checkbox`,"aria-checked":a?`mixed`:n,"aria-labelledby":c,style:s,onKeyup:f,onKeydown:p,onClick:m,onMousedown:()=>{y(`selectstart`,window,e=>{e.preventDefault()},{once:!0})}},i(`div`,{class:`${u}-checkbox-box-wrapper`},`\xA0`,i(`div`,{class:`${u}-checkbox-box`},i(O,null,{default:()=>this.indeterminate?i(`div`,{key:`indeterminate`,class:`${u}-checkbox-icon`},P()):i(`div`,{key:`check`,class:`${u}-checkbox-icon`},N())}),i(`div`,{class:`${u}-checkbox-box__border`}))),h)}});export{M as n,I as t};