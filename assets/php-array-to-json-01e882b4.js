import{_ as n}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-d3fbb7d2.js";import{j as a}from"./index-9789848d.js";import{w as l}from"./defaults-4d6daddf.js";import{d as u,a4 as i,o as m,j as c,l as o}from"./index-3ff32cc2.js";import"./TextareaCopyable-904b22fe.js";import"./base64-ae7cf34b.js";import"./index-a6f01dde.js";import"./downloadBase64-5c28e0e9.js";import"./index-80547472.js";import"./index-4b591a96.js";import"./Copy-faeef3d1.js";import"./Scrollbar-c244f95c.js";const f=`array(
  "a" => "b",
  "arr" => array(
    1,
    "2"
  ),
  "nested" => array(
    "c" => 12,
    "d" => "az"
  )
);`,C=u({__name:"php-array-to-json",setup(d){const{t}=i();function e(r){return l(()=>JSON.stringify(a.parse(r),null,2),"")}const p=[{validator:r=>r===""||a.parse(r),message:t("tools.php-array-to-json.texts.message-provided-php-array-is-not-valid")}];return(r,h)=>{const s=n;return m(),c(s,{"input-label":o(t)("tools.php-array-to-json.texts.input-label-your-php-array"),"input-default":f,"input-placeholder":o(t)("tools.php-array-to-json.texts.input-placeholder-paste-your-php-array-here"),"output-label":o(t)("tools.php-array-to-json.texts.output-label-json-version"),"output-language":"json","input-validation-rules":p,transformer:e},null,8,["input-label","input-placeholder","output-label"])}}});export{C as default};
