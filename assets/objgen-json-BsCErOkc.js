import{A as e,F as t,Nt as n,O as r,Tt as i,Zt as a,h as o,lt as s,q as c,w as l,x as u}from"./vue.runtime.esm-bundler-C0qeGFLU.js";import{t as d}from"./TextareaCopyable-CVIofnkG.js";import{i as f}from"./queryParams-CtascB_k.js";import{n as p}from"./vue-i18n.runtime-D_YDj0zU.js";import{t as m}from"./FormatTransformer-DOYC-BCS.js";import{t as h}from"./objgen-ByT8kR2N.js";t(),s(),n();var g={"mb-1":``},_=`// Model & generate Live JSON data values
// interactively using a simple syntax.
// String is the default value type
product = Live JSON generator

// Number, Date & Boolean are also supported
// Specify types after property names
version n = 3.1
releaseDate d = 2014-06-25
demo b = true

// Tabs or spaces define complex values
person
  id number = 12345
  name = John Doe
  phones
    home = 800-123-4567
    mobile = 877-123-1234

  // Use [] to define simple type arrays
  email[] s = jd@example.com, jd@example.org
  dateOfBirth d = 1980-01-02
  registered b = true

  // Use [] or [n] to define object arrays
  emergencyContacts[]
    name s = Jane Doe
    phone s = 888-555-1212
    relationship = spouse
  emergencyContacts[]
    name s = Justin Doe
    phone s = 877-123-1212
    relationship = parent
`,v=e({__name:`objgen-json`,setup(e){let{t}=p(),n=f({name:`indent`,storageName:`objgen-json:i`,defaultValue:2});function s(e){try{return h(e,{numSpaces:n.value})}catch(e){return`/* ERROR: ${e.toString()} */`}}return(e,n)=>{let f=d,p=m;return c(),l(o,null,[u(`details`,g,[u(`summary`,null,a(i(t)(`tools.objgen-json.texts.tag-documentation`)),1),r(f,{value:_,language:`toml`})]),r(p,{"input-label":i(t)(`tools.objgen-json.texts.input-label-objgen-json-definition`),"input-default":_,"input-placeholder":i(t)(`tools.objgen-json.texts.input-placeholder-put-your-objgen-json-definition-here`),"output-label":i(t)(`tools.objgen-json.texts.output-label-generated-json`),"output-language":`json`,transformer:s,"download-file-name":`output.json`},null,8,[`input-label`,`input-placeholder`,`output-label`])],64)}}});export{v as default};