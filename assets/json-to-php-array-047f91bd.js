import{_ as n}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-d3fbb7d2.js";import{j as l}from"./index-9789848d.js";import{d as i,a4 as u,aV as a,o as m,j as c,l as r}from"./index-3ff32cc2.js";import{w as f}from"./defaults-4d6daddf.js";import"./TextareaCopyable-904b22fe.js";import"./base64-ae7cf34b.js";import"./index-a6f01dde.js";import"./downloadBase64-5c28e0e9.js";import"./index-80547472.js";import"./index-4b591a96.js";import"./Copy-faeef3d1.js";import"./Scrollbar-c244f95c.js";const d=`{
  a:"b", 
  arr: [1, "2"], 
  nested: {
    c:12, 
    d: "az"
  }
}`,D=i({__name:"json-to-php-array",setup(_){const{t}=u();function e(o){return f(()=>l.arrify(a.parse(o),{prettify:!0}),"")}const s=[{validator:o=>a.parse(o),message:t("tools.json-to-php-array.texts.message-provided-json-is-not-valid")}];return(o,h)=>{const p=n;return m(),c(p,{"input-label":r(t)("tools.json-to-php-array.texts.input-label-your-json"),"input-default":d,"input-placeholder":r(t)("tools.json-to-php-array.texts.input-placeholder-paste-your-json-here"),"output-label":r(t)("tools.json-to-php-array.texts.output-label-php-array-version"),"input-validation-rules":s,transformer:e},null,8,["input-label","input-placeholder","output-label"])}}});export{D as default};
