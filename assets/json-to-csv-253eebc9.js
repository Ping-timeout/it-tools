import{_ as i}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-d3fbb7d2.js";import{d as c,a4 as p,aV as m,o as f,j as d,l as a}from"./index-3ff32cc2.js";import{f as l}from"./index-64473eba.js";import{w as y}from"./defaults-4d6daddf.js";import"./TextareaCopyable-904b22fe.js";import"./base64-ae7cf34b.js";import"./index-a6f01dde.js";import"./downloadBase64-5c28e0e9.js";import"./index-80547472.js";import"./index-4b591a96.js";import"./Copy-faeef3d1.js";import"./Scrollbar-c244f95c.js";import"./isPlainObject-1c699aec.js";function g({array:r}){const n=new Set;return r.forEach(t=>Object.keys(l(t)).forEach(o=>n.add(o))),Array.from(n)}function _(r){if(r===null)return"null";if(r===void 0)return"";const n=String(r).replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/"/g,'\\"');return n.includes(",")?`"${n}"`:n}function h({arrayOrObject:r}){const n=Array.isArray(r)?r:[r],t=g({array:n}),o=n.map(e=>t.map(s=>_(l(e)[s])));return[t.join(","),...o].join(`
`)}const j=`[
   {
      "Age": 18,
      "Country": "Germany",
      "Gender": "Male",
      "Purchased": "N",
      "Salary": 20000
   },
   {
      "Age": 19,
      "Country": "France",
      "Gender": "Female",
      "Purchased": "N",
      "Salary": 22000
   },
   {
      "Age": 20,
      "Country": "England",
      "Gender": "Female",
      "Purchased": "N",
      "Salary": 24000
   }
]`,P=c({__name:"json-to-csv",setup(r){const{t:n}=p();function t(e){return y(()=>e===""?"":h({arrayOrObject:JSON.parseBigNum(e)}),"")}const o=[{validator:e=>e===""||m.parse(e),message:n("tools.json-to-csv.texts.message-provided-json-is-not-valid")}];return(e,s)=>{const u=i;return f(),d(u,{"input-label":a(n)("tools.json-to-csv.texts.input-label-your-raw-json"),"input-default":j,"input-placeholder":a(n)("tools.json-to-csv.texts.input-placeholder-paste-your-raw-json-here"),"output-label":a(n)("tools.json-to-csv.texts.output-label-csv-version-of-your-json"),"input-validation-rules":o,transformer:t,"download-file-name":"output.csv"},null,8,["input-label","input-placeholder","output-label"])}}});export{P as default};
