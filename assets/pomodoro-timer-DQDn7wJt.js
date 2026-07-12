import{n as e,t}from"./dist-Bnj2Qb5M.js";import{A as n,C as r,D as i,F as a,Jt as o,Kt as s,N as c,Nt as l,O as u,S as d,Tt as f,Y as p,Zt as m,a as h,at as g,b as _,c as v,d as ee,ft as te,h as y,it as b,lt as x,q as S,tt as ne,u as re,w as C,x as w}from"./vue.runtime.esm-bundler-C0qeGFLU.js";import{t as ie}from"./Modal-DbXp4-Db.js";import{n as ae,t as oe}from"./Tabs-B5um0Hg_.js";import{t as se}from"./Button-CC-Xd7Y4.js";import{t as ce}from"./Card-xXv8jywY.js";import{t as T}from"./_plugin-vue_export-helper-BDNMzG2s.js";import{c as E,i as le}from"./storeUtils-Cqo2siPb.js";import{F as ue,K as de,M as fe,S as pe,_ as me,g as he}from"./free-solid-svg-icons-BctElnbt.js";var ge=`/stopwatch.png`;a(),l();var _e={},ve={class:`icon-container`},ye=[`alt`];function be(e,t){return S(),C(`header`,null,[w(`h1`,{onClick:t[0]||=t=>e.$router.push(`/`)},[w(`div`,ve,[t[1]||=w(`div`,{class:`circle`},null,-1),w(`img`,{src:ge,alt:e.$t(`tools.pomodoro-timer.Header.text.picture-of-a-stopwatch`)},null,8,ye)]),i(` `+m(e.$t(`tools.pomodoro-timer.SplashScreen.text.pomodoro-timer-0`)),1)])])}var xe=T(_e,[[`render`,be],[`__scopeId`,`data-v-289f89de`]]);x(),l(),a();var Se={__name:`FinishedPopup`,setup(e){let t=E(`pomodoro-store`);return(e,n)=>{let r=se,a=ce,o=ie;return S(),d(o,{show:f(t).state.isShowFinishedPopup,"onUpdate:show":n[1]||=e=>f(t).state.isShowFinishedPopup=e,"mask-closable":!1},{default:b(()=>[u(a,{style:{width:`600px`},title:e.$t(`tools.pomodoro-timer.FinishedPopup.text.timer-finished`),bordered:!1,size:`huge`,role:`dialog`,"aria-modal":`true`},{footer:b(()=>[u(r,{onClick:n[0]||=e=>f(t).commit(`prepareNextTimerMode`)},{default:b(()=>[i(m(e.$t(`tools.pomodoro-timer.FinishedPopup.text.ok`)),1)]),_:1})]),default:b(()=>[w(`p`,null,m(f(t).state.finishedMessage),1)]),_:1},8,[`title`])]),_:1},8,[`show`])}}};l(),a();var Ce={},we={class:`about-root`};function Te(e,t){return S(),C(`div`,we,[w(`h1`,null,m(e.$t(`home.nav.aboutLabel`)),1),w(`h2`,null,m(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.the-pomodoro-technique`)),1),w(`p`,null,m(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.the-pomodoro-technique-is-a-time-management-method-developed-by-francesco-cirillo-in-the-1980s-it-uses-a-timer-to-break-work-into-intervals-typically-25-minutes-in-length-separated-by-short-breaks-each-interval-is-known-as-a-pomodoro-from-the-italian-word-for-tomato-after-the-tomato-shaped-kitchen-timer-cirillo-used-as-a-university-student`)),1),w(`h2`,null,m(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.five-steps-of-the-pomodoro-technique`)),1),w(`ol`,null,[w(`li`,null,m(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.decide-on-a-task-and-set-the-timer-25-minutes-is-common`)),1),w(`li`,null,m(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.work-on-the-task-during-that-time`)),1),w(`li`,null,m(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.when-the-timer-rings-take-a-short-break-5-10-minutes-is-common`)),1),w(`li`,null,m(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.keep-repeating-steps-1-3-but-after-your-4th-task-take-a-long-break-instead-of-a-short-break-20-30-minutes-is-common`)),1),w(`li`,null,m(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.once-the-long-break-is-finished-return-to-step-1`)),1)]),w(`p`,null,[i(m(e.$t(`tools.pomodoro-timer.PomodoroAbout.text.source-wikipedia`))+` `,1),t[0]||=w(`a`,{target:`_blank`,href:`https://en.wikipedia.org/wiki/Pomodoro_Technique`},`https://en.wikipedia.org/wiki/Pomodoro_Technique`,-1)])])}var Ee=T(Ce,[[`render`,Te],[`__scopeId`,`data-v-33fd572e`]]);l(),a();var De={class:`progress-bar`},Oe=T({__name:`ProgressBar`,setup(e){let t=E(`pomodoro-store`),n=_({get(){return t.state.progressPercent},set(){}});return(e,t)=>(S(),C(`div`,De,[w(`div`,{class:`progress`,style:o({width:`${n.value}%`})},null,4)]))}},[[`__scopeId`,`data-v-2b1a41bc`]]);x(),l(),a();var ke=T({__name:`Counter`,setup(e){let t=E(`pomodoro-store`);return(e,n)=>(S(),C(`span`,null,m(f(t).state.counter),1))}},[[`__scopeId`,`data-v-1aa43ff5`]]);e();function Ae(e,t,n){return(t=Ne(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?je(Object(n),!0).forEach(function(t){Ae(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Me(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ne(e){var t=Me(e,`string`);return typeof t==`symbol`?t:t+``}var Pe=()=>{},Fe={},Ie={},Le=null,Re={mark:Pe,measure:Pe};try{typeof window<`u`&&(Fe=window),typeof document<`u`&&(Ie=document),typeof MutationObserver<`u`&&(Le=MutationObserver),typeof performance<`u`&&(Re=performance)}catch{}var{userAgent:ze=``}=Fe.navigator||{},O=Fe,k=Ie,Be=Le,Ve=Re;O.document;var A=!!k.documentElement&&!!k.head&&typeof k.addEventListener==`function`&&typeof k.createElement==`function`,He=~ze.indexOf(`MSIE`)||~ze.indexOf(`Trident/`),Ue=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,We=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ge={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`}},Ke={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},qe=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],j=`classic`,Je=`duotone`,Ye=[j,Je,`sharp`,`sharp-duotone`],Xe={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`}},Ze={"Font Awesome 6 Free":{900:`fas`,400:`far`},"Font Awesome 6 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 6 Brands":{400:`fab`,normal:`fab`},"Font Awesome 6 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 6 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 6 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`}},Qe=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}]]),$e={classic:{solid:`fas`,regular:`far`,light:`fal`,thin:`fat`,brands:`fab`},duotone:{solid:`fad`,regular:`fadr`,light:`fadl`,thin:`fadt`},sharp:{solid:`fass`,regular:`fasr`,light:`fasl`,thin:`fast`},"sharp-duotone":{solid:`fasds`,regular:`fasdr`,light:`fasdl`,thin:`fasdt`}},et=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],tt={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},nt=[`kit`],rt={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},it=[`fak`,`fakd`],at={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},ot={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},st={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ct=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],lt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ut={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},dt={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`}},ft={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`]},pt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`}},mt=[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`],ht=[`fa`,`fas`,`far`,`fal`,`fat`,`fad`,`fadr`,`fadl`,`fadt`,`fab`,`fass`,`fasr`,`fasl`,`fast`,`fasds`,`fasdr`,`fasdl`,`fasdt`,...ct,...mt],gt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`],_t=[1,2,3,4,5,6,7,8,9,10],vt=_t.concat([11,12,13,14,15,16,17,18,19,20]),yt=[...Object.keys(ft),...gt,`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`fw`,`inverse`,`layers-counter`,`layers-text`,`layers`,`li`,`pull-left`,`pull-right`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,st.GROUP,st.SWAP_OPACITY,st.PRIMARY,st.SECONDARY].concat(_t.map(e=>`${e}x`),vt.map(e=>`w-${e}`)),bt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},M=`___FONT_AWESOME___`,xt=16,St=`fa`,Ct=`svg-inline--fa`,N=`data-fa-i2svg`,wt=`data-fa-pseudo-element`,Tt=`data-fa-pseudo-element-pending`,Et=`data-prefix`,Dt=`data-icon`,Ot=`fontawesome-i2svg`,kt=`async`,At=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],jt=(()=>{try{return!0}catch{return!1}})();function Mt(e){return new Proxy(e,{get(e,t){return t in e?e[t]:e[j]}})}var Nt=D({},Ge);Nt[j]=D(D(D(D({},{"fa-duotone":`duotone`}),Ge[j]),tt.kit),tt[`kit-duotone`]);var Pt=Mt(Nt),Ft=D({},$e);Ft[j]=D(D(D(D({},{duotone:`fad`}),Ft[j]),ot.kit),ot[`kit-duotone`]);var It=Mt(Ft),Lt=D({},pt);Lt[j]=D(D({},Lt[j]),at.kit);var Rt=Mt(Lt),zt=D({},dt);zt[j]=D(D({},zt[j]),rt.kit),Mt(zt);var Bt=Ue,Vt=`fa-layers-text`,Ht=We;Mt(D({},Xe));var Ut=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Wt=Ke,Gt=[...nt,...yt],Kt=O.FontAwesomeConfig||{};function qt(e){var t=k.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Jt(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}k&&typeof k.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-auto-a11y`,`autoA11y`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(e=>{let[t,n]=e,r=Jt(qt(t));r!=null&&(Kt[n]=r)});var Yt={styleDefault:`solid`,familyDefault:j,cssPrefix:St,replacementClass:Ct,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Kt.familyPrefix&&(Kt.cssPrefix=Kt.familyPrefix);var P=D(D({},Yt),Kt);P.autoReplaceSvg||(P.observeMutations=!1);var F={};Object.keys(Yt).forEach(e=>{Object.defineProperty(F,e,{enumerable:!0,set:function(t){P[e]=t,I.forEach(e=>e(F))},get:function(){return P[e]}})}),Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(e){P.cssPrefix=e,I.forEach(e=>e(F))},get:function(){return P.cssPrefix}}),O.FontAwesomeConfig=F;var I=[];function Xt(e){return I.push(e),()=>{I.splice(I.indexOf(e),1)}}var L=xt,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zt(e){if(!e||!A)return;let t=k.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;let n=k.head.childNodes,r=null;for(let e=n.length-1;e>-1;e--){let t=n[e],i=(t.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(i)>-1&&(r=t)}return k.head.insertBefore(t,r),e}var Qt=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function z(){let e=12,t=``;for(;e-->0;)t+=Qt[Math.random()*62|0];return t}function B(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function $t(e){return e.classList?B(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(e=>e)}function en(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function tn(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}="${en(e[n])}" `,``).trim()}function nn(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}: ${e[n].trim()};`,``)}function rn(e){return e.size!==R.size||e.x!==R.x||e.y!==R.y||e.rotate!==R.rotate||e.flipX||e.flipY}function an(e){let{transform:t,containerWidth:n,iconWidth:r}=e;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function on(e){let{transform:t,width:n=xt,height:r=xt,startCentered:i=!1}=e,a=``;return i&&He?a+=`translate(${t.x/L-n/2}em, ${t.y/L-r/2}em) `:i?a+=`translate(calc(-50% + ${t.x/L}em), calc(-50% + ${t.y/L}em)) `:a+=`translate(${t.x/L}em, ${t.y/L}em) `,a+=`scale(${t.size/L*(t.flipX?-1:1)}, ${t.size/L*(t.flipY?-1:1)}) `,a+=`rotate(${t.rotate}deg) `,a}var sn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function cn(){let e=St,t=Ct,n=F.cssPrefix,r=F.replacementClass,i=sn;if(n!==e||r!==t){let a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var ln=!1;function un(){F.autoAddCss&&!ln&&(Zt(cn()),ln=!0)}var dn={mixout(){return{dom:{css:cn,insertCss:un}}},hooks(){return{beforeDOMElementCreation(){un()},beforeI2svg(){un()}}}},V=O||{};V[M]||(V[M]={}),V[M].styles||(V[M].styles={}),V[M].hooks||(V[M].hooks={}),V[M].shims||(V[M].shims=[]);var H=V[M],fn=[],pn=function(){k.removeEventListener(`DOMContentLoaded`,pn),mn=1,fn.map(e=>e())},mn=!1;A&&(mn=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),mn||k.addEventListener(`DOMContentLoaded`,pn));function hn(e){A&&(mn?setTimeout(e,0):fn.push(e))}function U(e){let{tag:t,attributes:n={},children:r=[]}=e;return typeof e==`string`?en(e):`<${t} ${tn(n)}>${r.map(U).join(``)}</${t}>`}function gn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var _n=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},vn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:_n(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function yn(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function bn(e){let t=yn(e);return t.length===1?t[0].toString(16):null}function xn(e,t){let n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Sn(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Cn(e,t){let{skipHooks:n=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=Sn(t);typeof H.hooks.addPack==`function`&&!n?H.hooks.addPack(e,Sn(t)):H.styles[e]=D(D({},H.styles[e]||{}),r),e===`fas`&&Cn(`fa`,t)}var{styles:wn,shims:Tn}=H,En=Object.keys(Rt),Dn=En.reduce((e,t)=>(e[t]=Object.keys(Rt[t]),e),{}),On=null,kn={},An={},jn={},Mn={},Nn={};function Pn(e){return~Gt.indexOf(e)}function Fn(e,t){let n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Pn(i)?i:null}var In=()=>{let e=e=>vn(wn,(t,n,r)=>(t[r]=vn(n,e,{}),t),{});kn=e((e,t,n)=>(t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(e=>typeof e==`number`).forEach(t=>{e[t.toString(16)]=n}),e)),An=e((e,t,n)=>(e[n]=n,t[2]&&t[2].filter(e=>typeof e==`string`).forEach(t=>{e[t]=n}),e)),Nn=e((e,t,n)=>{let r=t[2];return e[n]=n,r.forEach(t=>{e[t]=n}),e});let t=`far`in wn||F.autoFetchSvg,n=vn(Tn,(e,n)=>{let r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});jn=n.names,Mn=n.unicodes,On=Un(F.styleDefault,{family:F.familyDefault})};Xt(e=>{On=Un(e.styleDefault,{family:F.familyDefault})}),In();function Ln(e,t){return(kn[e]||{})[t]}function Rn(e,t){return(An[e]||{})[t]}function W(e,t){return(Nn[e]||{})[t]}function zn(e){return jn[e]||{prefix:null,iconName:null}}function Bn(e){let t=Mn[e],n=Ln(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function G(){return On}var Vn=()=>({prefix:null,iconName:null,rest:[]});function Hn(e){let t=j,n=En.reduce((e,t)=>(e[t]=`${F.cssPrefix}-${t}`,e),{});return Ye.forEach(r=>{(e.includes(n[r])||e.some(e=>Dn[r].includes(e)))&&(t=r)}),t}function Un(e){let{family:t=j}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Pt[t][e];if(t===Je&&!e)return`fad`;let r=It[t][e]||It[t][n],i=e in H.styles?e:null;return r||i||null}function Wn(e){let t=[],n=null;return e.forEach(e=>{let r=Fn(F.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Gn(e){return e.sort().filter((e,t,n)=>n.indexOf(e)===t)}function Kn(e){let{skipLookups:t=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=null,r=ht.concat(lt),i=Gn(e.filter(e=>r.includes(e))),a=Gn(e.filter(e=>!ht.includes(e))),[o=null]=i.filter(e=>(n=e,!qe.includes(e))),s=Hn(i),c=D(D({},Wn(a)),{},{prefix:Un(o,{family:s})});return D(D(D({},c),Xn({values:e,family:s,styles:wn,config:F,canonical:c,givenPrefix:n})),qn(t,n,c))}function qn(e,t,n){let{prefix:r,iconName:i}=n;if(e||!r||!i)return{prefix:r,iconName:i};let a=t===`fa`?zn(i):{},o=W(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!wn.far&&wn.fas&&!F.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Jn=Ye.filter(e=>e!==j||e!==Je),Yn=Object.keys(pt).filter(e=>e!==j).map(e=>Object.keys(pt[e])).flat();function Xn(e){let{values:t,family:n,canonical:r,givenPrefix:i=``,styles:a={},config:o={}}=e,s=n===Je,c=t.includes(`fa-duotone`)||t.includes(`fad`),l=o.familyDefault===`duotone`,u=r.prefix===`fad`||r.prefix===`fa-duotone`;return!s&&(c||l||u)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Jn.includes(n)&&(Object.keys(a).find(e=>Yn.includes(e))||o.autoFetchSvg)&&(r.prefix=Qe.get(n).defaultShortPrefixId,r.iconName=W(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||i===`fa`)&&(r.prefix=G()||`fas`),r}var Zn=class{constructor(){this.definitions={}}add(){let e=[...arguments].reduce(this._pullDefinitions,{});Object.keys(e).forEach(t=>{this.definitions[t]=D(D({},this.definitions[t]||{}),e[t]),Cn(t,e[t]);let n=Rt[j][t];n&&Cn(n,e[t]),In()})}reset(){this.definitions={}}_pullDefinitions(e,t){let n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(t=>{let{prefix:r,iconName:i,icon:a}=n[t],o=a[2];e[r]||(e[r]={}),o.length>0&&o.forEach(t=>{typeof t==`string`&&(e[r][t]=a)}),e[r][i]=a}),e}},Qn=[],K={},q={},$n=Object.keys(q);function er(e,t){let{mixoutsTo:n}=t;return Qn=e,K={},Object.keys(q).forEach(e=>{$n.indexOf(e)===-1&&delete q[e]}),Qn.forEach(e=>{let t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(e=>{typeof t[e]==`function`&&(n[e]=t[e]),typeof t[e]==`object`&&Object.keys(t[e]).forEach(r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){let t=e.hooks();Object.keys(t).forEach(e=>{K[e]||(K[e]=[]),K[e].push(t[e])})}e.provides&&e.provides(q)}),n}function tr(e,t){var n=[...arguments].slice(2);return(K[e]||[]).forEach(e=>{t=e.apply(null,[t,...n])}),t}function J(e){var t=[...arguments].slice(1);(K[e]||[]).forEach(e=>{e.apply(null,t)})}function Y(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return q[e]?q[e].apply(null,t):void 0}function nr(e){e.prefix===`fa`&&(e.prefix=`fas`);let{iconName:t}=e,n=e.prefix||G();if(t)return t=W(n,t)||t,gn(rr.definitions,n,t)||gn(H.styles,n,t)}var rr=new Zn,X={noAuto:()=>{F.autoReplaceSvg=!1,F.observeMutations=!1,J(`noAuto`)},config:F,dom:{i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return A?(J(`beforeI2svg`,e),Y(`pseudoElements2svg`,e),Y(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,hn(()=>{ir({autoReplaceSvgRoot:t}),J(`watch`,e)})}},parse:{icon:e=>{if(e===null)return null;if(typeof e==`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:W(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Un(e[0]);return{prefix:n,iconName:W(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${F.cssPrefix}-`)>-1||e.match(Bt))){let t=Kn(e.split(` `),{skipLookups:!0});return{prefix:t.prefix||G(),iconName:W(t.prefix,t.iconName)||t.iconName}}if(typeof e==`string`){let t=G();return{prefix:t,iconName:W(t,e)||e}}}},library:rr,findIconDefinition:nr,toHtml:U},ir=function(){let{autoReplaceSvgRoot:e=k}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(Object.keys(H.styles).length>0||F.autoFetchSvg)&&A&&F.autoReplaceSvg&&X.dom.i2svg({node:e})};function ar(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(e=>U(e))}}),Object.defineProperty(e,"node",{get:function(){if(!A)return;let t=k.createElement(`div`);return t.innerHTML=e.html,t.children}}),e}function or(e){let{children:t,main:n,mask:r,attributes:i,styles:a,transform:o}=e;if(rn(o)&&n.found&&!r.found){let{width:e,height:t}=n,r={x:e/t/2,y:.5};i.style=nn(D(D({},a),{},{"transform-origin":`${r.x+o.x/16}em ${r.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function sr(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:a}=e,o=a===!0?`${t}-${F.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:D(D({},i),{},{id:o}),children:r}]}]}function cr(e){let{icons:{main:t,mask:n},prefix:r,iconName:i,transform:a,symbol:o,title:s,maskId:c,titleId:l,extra:u,watchable:d=!1}=e,{width:f,height:p}=n.found?n:t,m=it.includes(r),h=[F.replacementClass,i?`${F.cssPrefix}-${i}`:``].filter(e=>u.classes.indexOf(e)===-1).filter(e=>e!==``||!!e).concat(u.classes).join(` `),g={children:[],attributes:D(D({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:h,role:u.attributes.role||`img`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 ${f} ${p}`})},_=m&&!~u.classes.indexOf(`fa-fw`)?{width:`${f/p*16*.0625}em`}:{};d&&(g.attributes[N]=``),s&&(g.children.push({tag:`title`,attributes:{id:g.attributes[`aria-labelledby`]||`title-${l||z()}`},children:[s]}),delete g.attributes.title);let v=D(D({},g),{},{prefix:r,iconName:i,main:t,mask:n,maskId:c,transform:a,symbol:o,styles:D(D({},_),u.styles)}),{children:ee,attributes:te}=n.found&&t.found?Y(`generateAbstractMask`,v)||{children:[],attributes:{}}:Y(`generateAbstractIcon`,v)||{children:[],attributes:{}};return v.children=ee,v.attributes=te,o?sr(v):or(v)}function lr(e){let{content:t,width:n,height:r,transform:i,title:a,extra:o,watchable:s=!1}=e,c=D(D(D({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(` `)});s&&(c[N]=``);let l=D({},o.styles);rn(i)&&(l.transform=on({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);let u=nn(l);u.length>0&&(c.style=u);let d=[];return d.push({tag:`span`,attributes:c,children:[t]}),a&&d.push({tag:`span`,attributes:{class:`sr-only`},children:[a]}),d}function ur(e){let{content:t,title:n,extra:r}=e,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(` `)}),a=nn(r.styles);a.length>0&&(i.style=a);let o=[];return o.push({tag:`span`,attributes:i,children:[t]}),n&&o.push({tag:`span`,attributes:{class:`sr-only`},children:[n]}),o}var{styles:dr}=H;function fr(e){let t=e[0],n=e[1],[r]=e.slice(4),i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${F.cssPrefix}-${Wt.GROUP}`},children:[{tag:`path`,attributes:{class:`${F.cssPrefix}-${Wt.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${F.cssPrefix}-${Wt.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var pr={found:!1,width:512,height:512};function mr(e,t){!jt&&!F.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function hr(e,t){let n=t;return t===`fa`&&F.styleDefault!==null&&(t=G()),new Promise((r,i)=>{if(n===`fa`){let n=zn(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&dr[t]&&dr[t][e]){let n=dr[t][e];return r(fr(n))}mr(e,t),r(D(D({},pr),{},{icon:F.showMissingIcons&&e&&Y(`missingIconAbstract`)||{}}))})}var gr=()=>{},_r=F.measurePerformance&&Ve&&Ve.mark&&Ve.measure?Ve:{mark:gr,measure:gr},vr=`FA "6.7.2"`,yr=e=>(_r.mark(`${vr} ${e} begins`),()=>br(e)),br=e=>{_r.mark(`${vr} ${e} ends`),_r.measure(`${vr} ${e}`,`${vr} ${e} begins`,`${vr} ${e} ends`)},xr={begin:yr,end:br},Sr=()=>{};function Cr(e){return typeof(e.getAttribute?e.getAttribute(N):null)==`string`}function wr(e){let t=e.getAttribute?e.getAttribute(Et):null,n=e.getAttribute?e.getAttribute(Dt):null;return t&&n}function Tr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function Er(){return F.autoReplaceSvg===!0?jr.replace:jr[F.autoReplaceSvg]||jr.replace}function Dr(e){return k.createElementNS(`http://www.w3.org/2000/svg`,e)}function Or(e){return k.createElement(e)}function kr(e){let{ceFn:t=e.tag===`svg`?Dr:Or}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof e==`string`)return k.createTextNode(e);let n=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(kr(e,{ceFn:t}))}),n}function Ar(e){let t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var jr={replace:function(e){let t=e[0];if(t.parentNode)if(e[1].forEach(e=>{t.parentNode.insertBefore(kr(e),t)}),t.getAttribute(N)===null&&F.keepOriginalSource){let e=k.createComment(Ar(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){let t=e[0],n=e[1];if(~$t(t).indexOf(F.replacementClass))return jr.replace(e);let r=RegExp(`${F.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){let e=n[0].attributes.class.split(` `).reduce((e,t)=>(t===F.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(` `),e.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,e.toNode.join(` `))}let i=n.map(e=>U(e)).join(`
`);t.setAttribute(N,``),t.innerHTML=i}};function Mr(e){e()}function Nr(e,t){let n=typeof t==`function`?t:Sr;if(e.length===0)n();else{let t=Mr;F.mutateApproach===kt&&(t=O.requestAnimationFrame||Mr),t(()=>{let t=Er(),r=xr.begin(`mutate`);e.map(t),r(),n()})}}var Pr=!1;function Fr(){Pr=!0}function Ir(){Pr=!1}var Lr=null;function Rr(e){if(!Be||!F.observeMutations)return;let{treeCallback:t=Sr,nodeCallback:n=Sr,pseudoElementsCallback:r=Sr,observeMutationsRoot:i=k}=e;Lr=new Be(e=>{if(Pr)return;let i=G();B(e).forEach(e=>{if(e.type===`childList`&&e.addedNodes.length>0&&!Cr(e.addedNodes[0])&&(F.searchPseudoElements&&r(e.target),t(e.target)),e.type===`attributes`&&e.target.parentNode&&F.searchPseudoElements&&r(e.target.parentNode),e.type===`attributes`&&Cr(e.target)&&~Ut.indexOf(e.attributeName))if(e.attributeName===`class`&&wr(e.target)){let{prefix:t,iconName:n}=Kn($t(e.target));e.target.setAttribute(Et,t||i),n&&e.target.setAttribute(Dt,n)}else Tr(e.target)&&n(e.target)})}),A&&Lr.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function zr(){Lr&&Lr.disconnect()}function Br(e){let t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce((e,t)=>{let n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Vr(e){let t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Kn($t(e));return i.prefix||=G(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Rn(i.prefix,e.innerText)||Ln(i.prefix,bn(e.innerText))),!i.iconName&&F.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Hr(e){let t=B(e.attributes).reduce((e,t)=>(e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e),{}),n=e.getAttribute(`title`),r=e.getAttribute(`data-fa-title-id`);return F.autoA11y&&(n?t[`aria-labelledby`]=`${F.replacementClass}-title-${r||z()}`:(t[`aria-hidden`]=`true`,t.focusable=`false`)),t}function Ur(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:r,rest:i}=Vr(e),a=Hr(e),o=tr(`parseNodeAttributes`,{},e),s=t.styleParser?Br(e):[];return D({iconName:n,title:e.getAttribute(`title`),titleId:e.getAttribute(`data-fa-title-id`),prefix:r,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a}},o)}var{styles:Gr}=H;function Kr(e){let t=F.autoReplaceSvg===`nest`?Wr(e,{styleParser:!1}):Wr(e);return~t.extra.classes.indexOf(Vt)?Y(`generateLayersText`,e,t):Y(`generateSvgReplacementMutation`,e,t)}function qr(){return[...et,...ht]}function Jr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!A)return Promise.resolve();let n=k.documentElement.classList,r=e=>n.add(`${Ot}-${e}`),i=e=>n.remove(`${Ot}-${e}`),a=F.autoFetchSvg?qr():qe.concat(Object.keys(Gr));a.includes(`fa`)||a.push(`fa`);let o=[`.${Vt}:not([${N}])`].concat(a.map(e=>`.${e}:not([${N}])`)).join(`, `);if(o.length===0)return Promise.resolve();let s=[];try{s=B(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();let c=xr.begin(`onTree`),l=s.reduce((e,t)=>{try{let n=Kr(t);n&&e.push(n)}catch(e){jt||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise((e,n)=>{Promise.all(l).then(n=>{Nr(n,()=>{r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(e=>{c(),n(e)})})}function Yr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Kr(e).then(e=>{e&&Nr([e],t)})}function Xr(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:nr(t||{}),{mask:i}=n;return i&&=(i||{}).icon?i:nr(i||{}),e(r,D(D({},n),{},{mask:i}))}}var Zr=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=R,symbol:r=!1,mask:i=null,maskId:a=null,title:o=null,titleId:s=null,classes:c=[],attributes:l={},styles:u={}}=t;if(!e)return;let{prefix:d,iconName:f,icon:p}=e;return ar(D({type:`icon`},e),()=>(J(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),F.autoA11y&&(o?l[`aria-labelledby`]=`${F.replacementClass}-title-${s||z()}`:(l[`aria-hidden`]=`true`,l.focusable=`false`)),cr({icons:{main:fr(p),mask:i?fr(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:D(D({},R),n),symbol:r,title:o,maskId:a,titleId:s,extra:{attributes:l,styles:u,classes:c}})))},Qr={mixout(){return{icon:Xr(Zr)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Jr,e.nodeCallback=Yr,e}}},provides(e){e.i2svg=function(e){let{node:t=k,callback:n=()=>{}}=e;return Jr(t,n)},e.generateSvgReplacementMutation=function(e,t){let{iconName:n,title:r,titleId:i,prefix:a,transform:o,symbol:s,mask:c,maskId:l,extra:u}=t;return new Promise((t,d)=>{Promise.all([hr(n,a),c.iconName?hr(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(c=>{let[d,f]=c;t([e,cr({icons:{main:d,mask:f},prefix:a,iconName:n,transform:o,symbol:s,maskId:l,title:r,titleId:i,extra:u,watchable:!0})])}).catch(d)})},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:i,styles:a}=e,o=nn(a);o.length>0&&(n.style=o);let s;return rn(i)&&(s=Y(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},$r={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return ar({type:`layer`},()=>{J(`beforeDOMElementCreation`,{assembler:e,params:t});let r=[];return e(e=>{Array.isArray(e)?e.map(e=>{r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${F.cssPrefix}-layers`,...n].join(` `)},children:r}]})}}}},ei={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:r=[],attributes:i={},styles:a={}}=t;return ar({type:`counter`,content:e},()=>(J(`beforeDOMElementCreation`,{content:e,params:t}),ur({content:e.toString(),title:n,extra:{attributes:i,styles:a,classes:[`${F.cssPrefix}-layers-counter`,...r]}})))}}}},ti={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=R,title:r=null,classes:i=[],attributes:a={},styles:o={}}=t;return ar({type:`text`,content:e},()=>(J(`beforeDOMElementCreation`,{content:e,params:t}),lr({content:e,transform:D(D({},R),n),title:r,extra:{attributes:a,styles:o,classes:[`${F.cssPrefix}-layers-text`,...i]}})))}}},provides(e){e.generateLayersText=function(e,t){let{title:n,transform:r,extra:i}=t,a=null,o=null;if(He){let t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();a=n.width/t,o=n.height/t}return F.autoA11y&&!n&&(i.attributes[`aria-hidden`]=`true`),Promise.resolve([e,lr({content:e.innerHTML,width:a,height:o,transform:r,title:n,extra:i,watchable:!0})])}}},ni=RegExp(`"`,`ug`),ri=[1105920,1112319],ii=D(D(D(D({},{FontAwesome:{normal:`fas`,400:`fas`}}),Ze),bt),ut),ai=Object.keys(ii).reduce((e,t)=>(e[t.toLowerCase()]=ii[t],e),{}),oi=Object.keys(ai).reduce((e,t)=>{let n=ai[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function si(e){let t=e.replace(ni,``),n=xn(t,0),r=n>=ri[0]&&n<=ri[1],i=t.length===2?t[0]===t[1]:!1;return{value:bn(i?t[0]:t),isSecondary:r||i}}function ci(e,t){let n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(ai[n]||{})[i]||oi[n]}function li(e,t){let n=`${Tt}${t.replace(`:`,`-`)}`;return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();let a=B(e.children).filter(e=>e.getAttribute(wt)===t)[0],o=O.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Ht),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){let u=o.getPropertyValue(`content`),d=ci(s,l),{value:f,isSecondary:p}=si(u),m=c[0].startsWith(`FontAwesome`),h=Ln(d,f),g=h;if(m){let e=Bn(f);e.iconName&&e.prefix&&(h=e.iconName,d=e.prefix)}if(h&&!p&&(!a||a.getAttribute(Et)!==d||a.getAttribute(Dt)!==g)){e.setAttribute(n,g),a&&e.removeChild(a);let o=Ur(),{extra:s}=o;s.attributes[wt]=t,hr(h,d).then(i=>{let a=cr(D(D({},o),{},{icons:{main:i,mask:Vn()},prefix:d,iconName:g,extra:s,watchable:!0})),c=k.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(c,e.firstChild):e.appendChild(c),c.outerHTML=a.map(e=>U(e)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ui(e){return Promise.all([li(e,`::before`),li(e,`::after`)])}function di(e){return e.parentNode!==document.head&&!~At.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(wt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function fi(e){if(A)return new Promise((t,n)=>{let r=B(e.querySelectorAll(`*`)).filter(di).map(ui),i=xr.begin(`searchPseudoElements`);Fr(),Promise.all(r).then(()=>{i(),Ir(),t()}).catch(()=>{i(),Ir(),n()})})}var pi={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=fi,e}}},provides(e){e.pseudoElements2svg=function(e){let{node:t=k}=e;F.searchPseudoElements&&fi(t)}}},mi=!1,hi={mixout(){return{dom:{unwatch(){Fr(),mi=!0}}}},hooks(){return{bootstrap(){Rr(tr(`mutationObserverCallbacks`,{}))},noAuto(){zr()},watch(e){let{observeMutationsRoot:t}=e;mi?Ir():Rr(tr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},gi=e=>e.toLowerCase().split(` `).reduce((e,t)=>{let n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0}),_i={mixout(){return{parse:{transform:e=>gi(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=gi(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:i}=e,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:D({},a.outer),children:[{tag:`g`,attributes:D({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:D(D({},t.icon.attributes),a.path)}]}]}}}},vi={x:0,y:0,width:`100%`,height:`100%`};function yi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function bi(e){return e.tag===`g`?e.children:[e]}er([dn,Qr,$r,ei,ti,pi,hi,_i,{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-mask`),r=n?Kn(n.split(` `).map(e=>e.trim())):Vn();return r.prefix||=G(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:i,maskId:a,transform:o}=e,{width:s,icon:c}=r,{width:l,icon:u}=i,d=an({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:D(D({},vi),{},{fill:`white`})},p=c.children?{children:c.children.map(yi)}:{},m={tag:`g`,attributes:D({},d.inner),children:[yi(D({tag:c.tag,attributes:D(D({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:D({},d.outer),children:[m]},g=`mask-${a||z()}`,_=`clip-${a||z()}`,v={tag:`mask`,attributes:D(D({},vi),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},ee={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:bi(u)},v]};return t.push(ee,{tag:`rect`,attributes:D({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},vi)}),{children:t,attributes:n}}}},{provides(e){let t=!1;O.matchMedia&&(t=O.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){let e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:D(D({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});let i=D(D({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:D(D({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:D(D({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:D(D({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:D(D({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:D(D({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:D(D({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:D(D({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:X}),X.noAuto;var xi=X.config,Si=X.library;X.dom;var Ci=X.parse;X.findIconDefinition,X.toHtml;var wi=X.icon;X.layer;var Ti=X.text;X.counter,a();function Ei(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Di(e){if(Array.isArray(e))return Ei(e)}function Z(e,t,n){return(t=Fi(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oi(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ki(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ai(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Ai(Object(n),!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ai(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ji(e,t){if(e==null)return{};var n,r,i=Mi(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Mi(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Ni(e){return Di(e)||Oi(e)||Li(e)||ki()}function Pi(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Fi(e){var t=Pi(e,`string`);return typeof t==`symbol`?t:t+``}function Ii(e){"@babel/helpers - typeof";return Ii=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ii(e)}function Li(e,t){if(e){if(typeof e==`string`)return Ei(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ei(e,t):void 0}}function Ri(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Z({},e,t):{}}function zi(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip===`horizontal`||e.flip===`both`,"fa-flip-vertical":e.flip===`vertical`||e.flip===`both`},Z(Z(Z(Z(Z(Z(Z(Z(Z(Z(t,`fa-${e.size}`,e.size!==null),`fa-rotate-${e.rotation}`,e.rotation!==null),`fa-rotate-by`,e.rotateBy),`fa-pull-${e.pull}`,e.pull!==null),`fa-swap-opacity`,e.swapOpacity),`fa-bounce`,e.bounce),`fa-shake`,e.shake),`fa-beat`,e.beat),`fa-fade`,e.fade),`fa-beat-fade`,e.beatFade),Z(Z(Z(Z(Z(Z(Z(Z(Z(Z(t,`fa-flash`,e.flash),`fa-spin-pulse`,e.spinPulse),`fa-spin-reverse`,e.spinReverse),`fa-width-auto`,e.widthAuto),`fa-flip-360`,e.flip360),`fa-buzz`,e.buzz),`fa-float`,e.float),`fa-jello`,e.jello),`fa-spin-snap`,e.spinSnap),`fa-spin-snap-4`,e.spinSnap4),Z(Z(Z(t,`fa-spin-snap-8`,e.spinSnap8),`fa-swing`,e.swing),`fa-wag`,e.wag));return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}var Bi=typeof globalThis<`u`?globalThis:typeof window<`u`?window:t===void 0?typeof self<`u`?self:{}:t,Vi={exports:{}};(function(e){(function(t){var n=function(e,t,r){if(!l(t)||d(t)||f(t)||p(t)||c(t))return t;var i,a=0,o=0;if(u(t))for(i=[],o=t.length;a<o;a++)i.push(n(e,t[a],r));else for(var s in i={},t)Object.prototype.hasOwnProperty.call(t,s)&&(i[e(s,r)]=n(e,t[s],r));return i},r=function(e,t){t||={};var n=t.separator||`_`,r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return m(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))},a=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return r(e,t).toLowerCase()},s=Object.prototype.toString,c=function(e){return typeof e==`function`},l=function(e){return e===Object(e)},u=function(e){return s.call(e)==`[object Array]`},d=function(e){return s.call(e)==`[object Date]`},f=function(e){return s.call(e)==`[object RegExp]`},p=function(e){return s.call(e)==`[object Boolean]`},m=function(e){return e-=0,e===e},h=function(e,t){var n=t&&`process`in t?t.process:t;return typeof n==`function`?function(t,r){return n(t,e,r)}:e},g={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(e,t){return n(h(i,t),e)},decamelizeKeys:function(e,t){return n(h(o,t),e,t)},pascalizeKeys:function(e,t){return n(h(a,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(Bi)})(Vi);var Hi=Vi.exports,Ui=[`gradientFill`],Wi=[`class`,`style`],Gi=[`type`,`stops`,`id`];function Ki(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=Hi.camelize(t.slice(0,n));return e[r]=t.slice(n+1).trim(),e},{})}function qi(e){return e.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function Ji(e,t){return c(`stop`,Q({key:`${t}-${e.offset}`,offset:e.offset,"stop-color":e.color},e.opacity!==void 0&&{"stop-opacity":e.opacity}))}function Yi(e){if(typeof e==`string`)return e;var t=(e.children||[]).map(Yi);return e.tag===`path`&&e.attributes&&`fill`in e.attributes?Q(Q({},e),{},{attributes:Q(Q({},e.attributes),{},{fill:void 0}),children:t}):Q(Q({},e),{},{children:t})}function Xi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e==`string`)return e;var r=t.gradientFill,i=r===void 0?null:r,a=ji(t,Ui),o=i||`fill`in n?Yi(e):e,s=(o.children||[]).map(function(e){return Xi(e,{},{})}),l=Object.keys(o.attributes||{}).reduce(function(e,t){var n=o.attributes[t];switch(t){case`class`:e.class=qi(n);break;case`style`:e.style=Ki(n);break;default:e.attrs[t]=n}return e},{attrs:{},class:{},style:{}});n.class;var u=n.style,d=u===void 0?{}:u,f=ji(n,Wi);if(i&&i.id&&(i.type===`linear`||i.type===`radial`)){var p=i.type,m=i.stops,h=m===void 0?[]:m,g=i.id,_=ji(i,Gi),v=c(p===`linear`?`linearGradient`:`radialGradient`,Q(Q({},_),{},{id:g}),h.map(Ji));return c(o.tag,Q(Q(Q(Q({},a),{},{class:l.class,style:Q(Q({},l.style),d)},l.attrs),f),{},{fill:`url(#${g})`}),[v].concat(Ni(s)))}return c(e.tag,Q(Q(Q({},a),{},{class:l.class,style:Q(Q({},l.style),d)},l.attrs),f),s)}var Zi=!1;try{Zi=!0}catch{}function Qi(){if(!Zi&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function $i(e){if(e&&Ii(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(Ci.icon)return Ci.icon(e);if(e===null)return null;if(Ii(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}var $=n({name:`FontAwesomeIcon`,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,`horizontal`,`vertical`,`both`].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return[`right`,`left`].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1},gradientFill:{type:Object,default:null,validator:function(e){return typeof e.id!=`string`||!e.id?(console.warn(`FontAwesomeIcon: gradientFill.id must be a non-empty string`),!1):e.type!==`linear`&&e.type!==`radial`?(console.warn(`FontAwesomeIcon: gradientFill.type must be "linear" or "radial"`),!1):!0}},flip360:{type:Boolean,default:!1},buzz:{type:Boolean,default:!1},float:{type:Boolean,default:!1},jello:{type:Boolean,default:!1},spinSnap:{type:Boolean,default:!1},spinSnap4:{type:Boolean,default:!1},spinSnap8:{type:Boolean,default:!1},swing:{type:Boolean,default:!1},wag:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=_(function(){return $i(e.icon)}),i=_(function(){return Ri(`classes`,zi(e))}),a=_(function(){return Ri(`transform`,typeof e.transform==`string`?Ci.transform(e.transform):e.transform)}),o=_(function(){return Ri(`mask`,$i(e.mask))}),s=_(function(){var t=Q(Q(Q(Q({},i.value),a.value),o.value),{},{symbol:e.symbol,maskId:e.maskId});return t.title=e.title,t.titleId=e.titleId,wi(r.value,t)});ne(s,function(e){if(!e)return Qi(`Could not find one or more icon(s)`,r.value,o.value)},{immediate:!0}),e.gradientFill&&e.symbol&&Qi(`gradientFill is not supported when symbol is true and will be ignored`);var c=_(function(){return s.value?Xi(s.value.abstract[0],{gradientFill:e.symbol?null:e.gradientFill},n):null});return function(){return c.value}}});n({name:`FontAwesomeLayers`,props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var n=t.slots,r=xi.familyPrefix,i=_(function(){return[`${r}-layers`].concat(Ni(e.fixedWidth?[`${r}-fw`]:[]))});return function(){return c(`div`,{class:i.value},n.default?n.default():[])}}}),n({name:`FontAwesomeLayersText`,props:{value:{type:[String,Number],default:``},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return[`bottom-left`,`bottom-right`,`top-left`,`top-right`].indexOf(e)>-1}}},setup:function(e,t){var n=t.attrs,r=xi.familyPrefix,i=_(function(){return Ri(`classes`,[].concat(Ni(e.counter?[`${r}-layers-counter`]:[]),Ni(e.position?[`${r}-layers-${e.position}`]:[])))}),a=_(function(){return Ri(`transform`,typeof e.transform==`string`?Ci.transform(e.transform):e.transform)}),o=_(function(){var t=Ti(e.value.toString(),Q(Q({},a.value),i.value)).abstract;return e.counter&&(t[0].attributes.class=t[0].attributes.class.replace(`fa-layers-text`,``)),t[0]}),s=_(function(){return Xi(o.value,{},n)});return function(){return s.value}}}),x(),h(),a();var ea={class:`pp-btn-container`},ta=T({__name:`PlayPauseBtn`,setup(e){return(e,t)=>(S(),C(`div`,ea,[g(u(f($),{role:`button`,icon:`fa-solid fa-circle-play`,onClick:t[0]||=t=>e.$store.commit(`toggleTimer`)},null,512),[[ee,!e.$store.state.isTimerRunning]]),g(u(f($),{role:`button`,icon:`fa-solid fa-circle-pause`,onClick:t[1]||=t=>e.$store.commit(`toggleTimer`)},null,512),[[ee,e.$store.state.isTimerRunning]])]))}},[[`__scopeId`,`data-v-dc1f2911`]]);l(),x(),a();var na={class:`dropup`},ra={key:0,class:`dropup-content`},ia=T({__name:`ResetDropup`,setup(e){let t=E(`pomodoro-store`);return(e,n)=>(S(),C(`div`,na,[w(`button`,{class:`dropup-btn`,onClick:n[0]||=e=>f(t).commit(`toggleResetDropup`)},m(e.$t(`tools.pomodoro-timer.ResetDropup.text.reset`)),1),f(t).state.isResetDropupVisible?(S(),C(`div`,ra,[w(`button`,{class:`reset-btns`,onClick:n[1]||=e=>f(t).commit(`timerResetAll`)},m(e.$t(`tools.pomodoro-timer.ResetDropup.text.reset-all`)),1),w(`button`,{class:`reset-btns`,onClick:n[2]||=e=>f(t).commit(`timerResetCurrent`)},m(e.$t(`tools.pomodoro-timer.ResetDropup.text.reset-current`)),1)])):r(``,!0)]))}},[[`__scopeId`,`data-v-6b08920a`]]);x(),a(),l();var aa={class:`icon-bar-root`},oa={class:`icons-container`},sa=T({__name:`ModeIconBar`,setup(e){let t=E(`pomodoro-store`),n=_({get(){return t.state.progress.length},set(){}});return(e,r)=>(S(),C(`div`,aa,[w(`div`,oa,[(S(!0),C(y,null,p(Array.from({length:f(t).state.shortBreakCount},(e,t)=>t),e=>(S(),C(y,{key:e},[u(f($),{icon:`fa-solid fa-computer`,class:s({active:n.value===e*2+1,completed:n.value>e*2+1})},null,8,[`class`]),u(f($),{icon:`fa-solid fa-mug-hot`,class:s({active:n.value===e*2+2,completed:n.value>e*2+2})},null,8,[`class`])],64))),128)),u(f($),{icon:`fa-solid fa-computer`,class:s({active:n.value===f(t).state.shortBreakCount*2+1,completed:n.value>f(t).state.shortBreakCount*2+1})},null,8,[`class`]),u(f($),{icon:`fa-solid fa-person-walking`,class:s({active:n.value===f(t).state.shortBreakCount*2+2,completed:n.value>f(t).state.shortBreakCount*2+2})},null,8,[`class`])])]))}},[[`__scopeId`,`data-v-2d99a6b9`]]);l(),a(),x();var ca={key:0,class:`welcome-msg`},la={key:1,class:`home`},ua={class:`graphic`},da={class:`counter`},fa=T({__name:`Home`,setup(e){let t=E(`pomodoro-store`);return(e,n)=>e.$store.state.isFirstVisit?(S(),C(`div`,ca,[w(`p`,null,m(e.$t(`tools.pomodoro-timer.Home.text.welcome`)),1),w(`p`,null,[i(m(e.$t(`tools.pomodoro-timer.Home.text.go-to`))+` `,1),w(`a`,{style:{cursor:`pointer`},onClick:n[0]||=e=>f(t).commit(`goToPage`,`settings`)},m(e.$t(`tools.watermarker.texts.title-settings`)),1),i(` `+m(e.$t(`tools.pomodoro-timer.Home.text.to-get-started`)),1)])])):(S(),C(`div`,la,[w(`div`,ua,[u(sa),u(Oe)]),w(`div`,da,[u(ke),u(ta),u(ia)])]))}},[[`__scopeId`,`data-v-fe74300b`]]);l(),a(),h();var pa=[`for`],ma=[`id`,`min`,`max`],ha={__name:`NumberInput`,props:{id:String,label:String,min:Number,max:Number},setup(e){let t=e,n=E(`pomodoro-store`),r=_({get(){return n.state[t.id]},set(e){n.commit(`updateTimeSetting`,{propName:t.id,propValue:e})}});return(t,n)=>(S(),C(y,null,[w(`label`,{for:e.id,class:`settings-label`},m(e.label),9,pa),g(w(`input`,{id:e.id,"onUpdate:modelValue":n[0]||=e=>r.value=e,type:`number`,min:e.min,max:e.max},null,8,ma),[[re,r.value]])],64))}};l(),a();var ga=[`for`],_a={class:`dot-container`},va=T({__name:`AppColorPicker`,props:{id:String,label:String},setup(e){let t=e,n=E(`pomodoro-store`);function r(e){n.commit(`updateAppColor`,{propName:t.id,propValue:e})}return(t,n)=>(S(),C(y,null,[w(`label`,{for:e.id,class:`settings-label`},m(e.label),9,ga),w(`div`,_a,[w(`div`,{class:`blue-dot`,onClick:n[0]||=e=>r(`#3b83b0`)}),w(`div`,{class:`red-dot`,onClick:n[1]||=e=>r(`#c93232`)}),w(`div`,{class:`green-dot`,onClick:n[2]||=e=>r(`#008000`)})])],64))}},[[`__scopeId`,`data-v-5ed905d1`]]);l(),x(),a(),h();var ya=[`for`],ba=[`id`],xa=T({__name:`AlarmSoundToggle`,props:{id:String,label:String},setup(e){let t=e,n=E(`pomodoro-store`),r=_({get(){return n.state[t.id]},set(){n.commit(`toggleAlarmSound`)}});return(t,n)=>(S(),C(y,null,[w(`label`,{for:e.id,class:`settings-label`},[i(m(e.label)+` `,1),u(f($),{icon:`fa-solid fa-volume-high`})],8,ya),g(w(`input`,{id:e.id,"onUpdate:modelValue":n[0]||=e=>r.value=e,class:`toggle toggle-spacing`,type:`checkbox`},null,8,ba),[[v,r.value]])],64))}},[[`__scopeId`,`data-v-1c96abb4`]]);a(),l(),x();var Sa=T({__name:`Settings`,setup(e){let t=E(`pomodoro-store`);return t.commit(`setInitialTimer`),t.commit(`setFirstVisitStatus`,{propValue:!1}),(e,n)=>(S(),C(`form`,null,[u(ha,{id:`workInterval`,min:1,max:120,label:e.$t(`tools.pomodoro-timer.Settings.text.work-interval`)},null,8,[`label`]),w(`span`,null,m(e.$t(`tools.pomodoro-timer.Settings.text.min`)),1),n[2]||=w(`br`,null,null,-1),u(ha,{id:`shortBreak`,min:1,max:120,label:e.$t(`tools.pomodoro-timer.Settings.text.short-break`)},null,8,[`label`]),w(`span`,null,m(e.$t(`tools.pomodoro-timer.Settings.text.min`)),1),n[3]||=w(`br`,null,null,-1),u(ha,{id:`shortBreakCount`,min:1,max:10,label:e.$t(`tools.pomodoro-timer.Settings.text.short-break-count`)},null,8,[`label`]),w(`span`,null,m(e.$t(`tools.pomodoro-timer.Settings.text.breaks`)),1),n[4]||=w(`br`,null,null,-1),u(ha,{id:`longBreak`,min:1,max:120,label:e.$t(`tools.pomodoro-timer.Settings.text.long-break`)},null,8,[`label`]),w(`span`,null,m(e.$t(`tools.pomodoro-timer.Settings.text.min`)),1),n[5]||=w(`br`,null,null,-1),u(xa,{id:`prefersAlarmSound`,label:e.$t(`tools.pomodoro-timer.Settings.text.alarm-sound`)},null,8,[`label`]),n[6]||=w(`br`,null,null,-1),u(va,{id:`appAccentColor`,label:e.$t(`tools.pomodoro-timer.Settings.text.app-color`)},null,8,[`label`]),n[7]||=w(`br`,null,null,-1),w(`a`,{class:`lets-go`,onClick:n[0]||=e=>f(t).commit(`goToPage`,`home`)},m(e.$t(`tools.pomodoro-timer.Settings.text.lets-go`)),1),w(`button`,{type:`button`,class:`reset-btn`,onClick:n[1]||=e=>f(t).commit(`restoreDefaultSettings`)},m(e.$t(`tools.pomodoro-timer.Settings.text.restore-defaults`)),1)]))}},[[`__scopeId`,`data-v-f8101e77`]]);a(),x();var Ca={class:`pomodoro-timer-app`},wa={class:`page-container`},Ta={__name:`PomodoroApp`,setup(e){let t=E(`pomodoro-store`);document.addEventListener(`visibilitychange`,()=>{document.hidden&&localStorage.setItem(`pomodoro-state`,JSON.stringify(t.state))});function n(){t.subscribe((e,t)=>{localStorage.setItem(`pomodoro-state`,JSON.stringify(t))})}function r(){localStorage.getItem(`pomodoro-state`)&&(t.replaceState(Object.assign(t.state,JSON.parse(localStorage.getItem(`pomodoro-state`)))),t.commit(`updateAppColor`,{propName:`appAccentColor`,propValue:t.state.appAccentColor})),t.state.isTimerRunning&&le(t.state)}n(),r();function i(){return t.state.workInterval}i()?t.commit(`goToPage`,`home`):t.commit(`goToPage`,`settings`);let a=_({get(){return t.state.currentTab},set(e){t.commit(`goToPage`,e)}});return(e,t)=>{let n=ae,r=oe;return S(),C(y,null,[t[2]||=w(`link`,{href:`//fonts.googleapis.com/css2?family=Varela+Round&display=swap`,rel:`stylesheet`},null,-1),w(`div`,Ca,[u(xe),w(`div`,wa,[u(r,{value:f(a),"onUpdate:value":t[0]||=e=>te(a)?a.value=e:null,type:`line`,animated:``},{default:b(()=>[u(n,{name:`home`,tab:e.$t(`tools.pomodoro-timer.PomodoroApp.text.timer`)},{default:b(()=>[u(fa)]),_:1},8,[`tab`]),u(n,{name:`about`,tab:e.$t(`tools.pomodoro-timer.PomodoroApp.text.about`)},{default:b(()=>[u(Ee)]),_:1},8,[`tab`]),u(n,{name:`settings`,tab:e.$t(`tools.pomodoro-timer.PomodoroApp.text.settings`)},{default:b(()=>[u(Sa)]),_:1},8,[`tab`])]),_:1},8,[`value`])]),u(Se),t[1]||=w(`audio`,{id:`alarmPlayer`,src:`/Beep.mp3`,loop:``},null,-1)])],64)}}};Si.add(me,he,pe,fe,ue,de),a();var Ea=n({__name:`pomodoro-timer`,setup(e){return(e,t)=>(S(),C(`div`,null,[u(Ta)]))}});export{Ea as default};