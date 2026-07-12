import{o as e}from"./rolldown-runtime-DAXXjFlN.js";import{A as t,C as n,D as r,F as i,Nt as a,O as o,S as s,Tt as c,Y as l,Zt as u,_t as d,b as f,ft as p,h as m,it as h,lt as g,q as _,w as v,x as y}from"./vue.runtime.esm-bundler-C0qeGFLU.js";import{t as b}from"./Alert-BwUALhuU.js";import{t as x}from"./a-YOk3saQ6.js";import{n as S}from"./vue-i18n.runtime-D_YDj0zU.js";import{t as C}from"./c-label-v2BhWGWn.js";import{t as w}from"./c-monaco-editor-LqUR6cMk.js";import{t as T}from"./composeverter-B2Ksyp4K.js";i(),g(),a();var E=e(T(),1),D={relative:``,"w-full":``},O={key:0},k={key:1},A=t({__name:`docker-compose-validator`,setup(e){let{t}=S(),i=d(`version: '3.3'
services:
    nginx:
        ports:
            - '80:80'
        volumes:
            - '/var/run/docker.sock:/tmp/docker.sock:ro'
        restart: always
        logging:
            options:
                max-size: 1g
        image: nginx`),a=f(()=>{try{return(0,E.validateDockerComposeToCommonSpec)(i.value)}catch(e){return e.toString().split(`
`).map(e=>({line:-1,message:e,helpLink:``}))}}),g=f(()=>a.value),T={automaticLayout:!0,formatOnType:!0,formatOnPaste:!0};return(e,a)=>{let d=w,f=C,S=x,E=b;return _(),v(`div`,null,[o(f,{label:c(t)(`tools.docker-compose-validator.texts.label-paste-your-docker-compose-file-content`)},{default:h(()=>[y(`div`,D,[o(d,{value:c(i),"onUpdate:value":a[0]||=e=>p(i)?i.value=e:null,theme:`vs-dark`,language:`yaml`,height:`250px`,options:T},null,8,[`value`])])]),_:1},8,[`label`]),c(g).length>0?(_(),v(`div`,O,[o(E,{title:c(t)(`tools.docker-compose-validator.texts.title-the-following-errors-occured`),type:`error`,"mt-5":``},{default:h(()=>[y(`ul`,null,[(_(!0),v(m,null,l(c(g),(e,i)=>(_(),v(`li`,{key:i},[r(u(e.message)+` (`,1),e.helpLink?(_(),s(S,{key:0,target:`_blank`,rel:`noreferer noopener`},{default:h(()=>[r(u(c(t)(`tools.docker-compose-validator.texts.tag-see-docker-compose-help`)),1)]),_:1})):n(``,!0),r(u(c(t)(`tools.docker-compose-validator.texts.tag-`)),1)]))),128))])]),_:1},8,[`title`])])):(_(),v(`div`,k,[o(E,{type:`success`,"mt-5":``},{default:h(()=>[r(u(c(t)(`tools.docker-compose-validator.texts.tag-validation-successful`)),1)]),_:1})]))])}}});export{A as default};