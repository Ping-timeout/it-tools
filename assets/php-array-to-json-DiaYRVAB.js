import{o as e}from"./rolldown-runtime-DAXXjFlN.js";import{A as t,F as n,S as r,Tt as i,lt as a,q as o}from"./vue.runtime.esm-bundler-C0qeGFLU.js";import{n as s}from"./vue-i18n.runtime-D_YDj0zU.js";import{t as c}from"./defaults-CYWGbL02.js";import{t as l}from"./FormatTransformer-DOYC-BCS.js";import{t as u}from"./jsonar-mod-BUA2uG26.js";n(),a();var d=e(u(),1),f=`array(
  "a" => "b",
  "arr" => array(
    1,
    "2"
  ),
  "nested" => array(
    "c" => 12,
    "d" => "az"
  )
);`,p=t({__name:`php-array-to-json`,setup(e){let{t}=s();function n(e){return c(()=>JSON.stringify(d.parse(e),null,2),``)}let a=[{validator:e=>e===``||d.parse(e),message:t(`tools.php-array-to-json.texts.message-provided-php-array-is-not-valid`)}];return(e,s)=>{let c=l;return o(),r(c,{"input-label":i(t)(`tools.php-array-to-json.texts.input-label-your-php-array`),"input-default":f,"input-placeholder":i(t)(`tools.php-array-to-json.texts.input-placeholder-paste-your-php-array-here`),"output-label":i(t)(`tools.php-array-to-json.texts.output-label-json-version`),"output-language":`json`,"input-validation-rules":a,transformer:n},null,8,[`input-label`,`input-placeholder`,`output-label`])}}});export{p as default};