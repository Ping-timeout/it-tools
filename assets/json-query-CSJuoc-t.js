import{o as e}from"./rolldown-runtime-DAXXjFlN.js";import{A as t,D as n,F as r,Nt as i,O as a,Tt as o,Zt as s,_t as c,b as l,ft as u,it as d,lt as f,q as p,w as m,x as h}from"./vue.runtime.esm-bundler-C0qeGFLU.js";import{t as g}from"./dist-CcFCmzk9.js";import{t as _}from"./a-YOk3saQ6.js";import{r as v}from"./queryParams-CtascB_k.js";import{t as y}from"./c-input-text-BrUjPm2a.js";import{t as b}from"./validation-QSur7WHt.js";import{n as x}from"./vue-i18n.runtime-D_YDj0zU.js";import{t as S}from"./c-card-Cp0u9ZTO.js";import{t as C}from"./CodeBlockCopyable-BD8QgkIR.js";import{n as w}from"./jsonquery-DZOz5bb7.js";r(),f(),i();var T=e(g(),1),E={"mb-2":``,flex:``,"justify-center":``},D=2,O=t({__name:`json-query`,setup(e){let{t}=x(),r=v({tool:`json-query`,name:`q`,defaultValue:`
  .friends 
    | filter(.city == "New York") 
    | sort(.age) 
    | pick(.name, .age)
`}),i=c(`{
  "friends": [
    { "name": "Chris", "age": 23, "city": "New York" },
    { "name": "Emily", "age": 19, "city": "Atlanta" },
    { "name": "Joe", "age": 32, "city": "New York" },
    { "name": "Kevin", "age": 19, "city": "Atlanta" },
    { "name": "Michelle", "age": 27, "city": "Los Angeles" },
    { "name": "Robert", "age": 45, "city": "Manhattan" },
    { "name": "Sarah", "age": 31, "city": "New York" }
  ]
}`),f=l(()=>{try{let e=JSON.parseBigNum(i.value);return JSON.stringify(w(e,r.value),null,D)}catch(e){return e.toString()}}),g=b({source:i,rules:[{validator:e=>T.default.parse(e),message:t(`tools.json-query.texts.message-provided-json-is-not-valid`)}]});return(e,c)=>{let l=y,v=_,b=S,x=C;return p(),m(`div`,null,[a(b,{title:o(t)(`tools.json-query.texts.title-input`),"mb-2":``},{default:d(()=>[a(l,{value:o(r),"onUpdate:value":c[0]||=e=>u(r)?r.value=e:null,label:o(t)(`tools.json-query.texts.label-json-query`),placeholder:o(t)(`tools.json-query.texts.placeholder-put-your-json-query-string-here`),"mb-2":``},null,8,[`value`,`label`,`placeholder`]),h(`div`,E,[a(v,{target:`_blank`,href:`https://jsonquerylang.org/docs/`},{default:d(()=>[n(s(o(t)(`tools.json-query.texts.tag-see-json-query-lang-documentation`)),1)]),_:1})]),a(l,{value:o(i),"onUpdate:value":c[1]||=e=>u(i)?i.value=e:null,label:o(t)(`tools.json-query.texts.label-json`),multiline:``,placeholder:o(t)(`tools.json-query.texts.placeholder-put-your-json-here`),rows:`5`,validation:o(g),"mb-2":``},null,8,[`value`,`label`,`placeholder`,`validation`])]),_:1},8,[`title`]),a(b,{title:o(t)(`tools.json-query.texts.title-result`)},{default:d(()=>[a(x,{value:o(f),language:`json`},null,8,[`value`])]),_:1},8,[`title`])])}}});export{O as default};