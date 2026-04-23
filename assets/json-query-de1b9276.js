import{d as y,a4 as g,al as j,r as f,i as v,V as b,aV as q,o as x,c as h,k as a,w as u,l as e,m,a as N,G as k,H as V,x as w,af as S}from"./index-3ff32cc2.js";import{b as B}from"./jsonquery-6c5d853a.js";import{_ as Y}from"./TextareaCopyable-904b22fe.js";import{_ as A}from"./a-4882a424.js";import"./base64-ae7cf34b.js";import"./index-a6f01dde.js";import"./downloadBase64-5c28e0e9.js";import"./index-80547472.js";import"./index-4b591a96.js";import"./Copy-faeef3d1.js";import"./Scrollbar-c244f95c.js";const C={"mb-2":"",flex:"","justify-center":""},J=2,P=y({__name:"json-query",setup(E){const{t}=g(),s=j({tool:"json-query",name:"q",defaultValue:`
  .friends 
    | filter(.city == "New York") 
    | sort(.age) 
    | pick(.name, .age)
`}),n=f(`{
  "friends": [
    { "name": "Chris", "age": 23, "city": "New York" },
    { "name": "Emily", "age": 19, "city": "Atlanta" },
    { "name": "Joe", "age": 32, "city": "New York" },
    { "name": "Kevin", "age": 19, "city": "Atlanta" },
    { "name": "Michelle", "age": 27, "city": "Los Angeles" },
    { "name": "Robert", "age": 45, "city": "Manhattan" },
    { "name": "Sarah", "age": 31, "city": "New York" }
  ]
}`),p=v(()=>{try{const o=JSON.parseBigNum(n.value);return JSON.stringify(B(o,s.value),null,J)}catch(o){return o.toString()}}),_=b({source:n,rules:[{validator:o=>q.parse(o),message:t("tools.json-query.texts.message-provided-json-is-not-valid")}]});return(o,l)=>{const i=w,d=A,c=S;return x(),h("div",null,[a(c,{title:e(t)("tools.json-query.texts.title-input"),"mb-2":""},{default:u(()=>[a(i,{value:e(s),"onUpdate:value":l[0]||(l[0]=r=>m(s)?s.value=r:null),label:e(t)("tools.json-query.texts.label-json-query"),placeholder:e(t)("tools.json-query.texts.placeholder-put-your-json-query-string-here"),"mb-2":""},null,8,["value","label","placeholder"]),N("div",C,[a(d,{target:"_blank",href:"https://jsonquerylang.org/docs/"},{default:u(()=>[k(V(e(t)("tools.json-query.texts.tag-see-json-query-lang-documentation")),1)]),_:1})]),a(i,{value:e(n),"onUpdate:value":l[1]||(l[1]=r=>m(n)?n.value=r:null),label:e(t)("tools.json-query.texts.label-json"),multiline:"",placeholder:e(t)("tools.json-query.texts.placeholder-put-your-json-here"),rows:"5",validation:e(_),"mb-2":""},null,8,["value","label","placeholder","validation"])]),_:1},8,["title"]),a(c,{title:e(t)("tools.json-query.texts.title-result")},{default:u(()=>[a(Y,{value:e(p),language:"json"},null,8,["value"])]),_:1},8,["title"])])}}});export{P as default};
