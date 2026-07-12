import{A as e,C as t,D as n,F as r,Nt as i,O as a,S as o,Tt as s,Y as c,Zt as l,_t as u,b as d,h as f,it as p,lt as m,q as h,w as g,x as _}from"./vue.runtime.esm-bundler-C0qeGFLU.js";import{t as v}from"./FormItem-DmsWhD7u.js";import{t as y}from"./Select-B0FmUFQE.js";import{t as b}from"./TextareaCopyable-CVIofnkG.js";import{t as x}from"./Input-Bt_1-nAM.js";import{t as S}from"./Divider-B-RN6EqL.js";import{t as C}from"./DynamicTags-gKEcZrui.js";import{n as w}from"./vue-i18n.runtime-D_YDj0zU.js";import{t as T}from"./c-card-Cp0u9ZTO.js";import{t as E}from"./InputCopyable-Bjpy9j27.js";import{t as D}from"./c-label-v2BhWGWn.js";import{t as O}from"./c-alert-fTtHFIGL.js";import{t as k}from"./c-monaco-editor-LqUR6cMk.js";import{t as A}from"./src-RBJfdRIh.js";r(),m(),i();var j={relative:``,"w-full":``},M=e({__name:`docker-compose-to-quadlets`,setup(e){let{t:r}=w(),i=u({compose:`
version: '3.8'
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
    environment:
      NODE_ENV: production
    depends_on:
      - db
      
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
`,unit:{description:`My Application Stack`,after:[`network-online.target`],wants:[`network-online.target`]},service:{restart:`always`},install:{wantedBy:[`multi-user.target`]}}),m=[{label:r(`tools.docker-compose-to-quadlets.texts.label-no`),value:`no`},{label:r(`tools.docker-compose-to-quadlets.texts.label-always`),value:`always`},{label:r(`tools.docker-compose-to-quadlets.texts.label-on-failure`),value:`on-failure`}],M=new A,N=d(()=>{try{return{quadlets:M.composeToQuadlet(i.value.compose.trim(),{unit:i.value.unit,service:i.value.service,install:i.value.install}),errors:``}}catch(e){return{quadlets:[],errors:e.toString()}}}),P={automaticLayout:!0,formatOnType:!0,formatOnPaste:!0};return(e,u)=>{let d=k,w=D,A=x,M=v,F=C,I=y,L=T,R=S,z=E,B=O;return h(),g(`div`,null,[a(w,{label:s(r)(`tools.docker-compose-to-quadlets.texts.label-paste-your-docker-compose-file-content-here`),"mb-2":``},{default:p(()=>[_(`div`,j,[a(d,{value:s(i).compose,"onUpdate:value":u[0]||=e=>s(i).compose=e,theme:`vs-dark`,language:`yaml`,height:`250px`,options:P},null,8,[`value`])])]),_:1},8,[`label`]),a(L,{title:s(r)(`tools.docker-compose-to-quadlets.texts.title-options`)},{default:p(()=>[a(M,{label:s(r)(`tools.docker-compose-to-quadlets.texts.label-description`),"label-placement":`left`},{default:p(()=>[a(A,{value:s(i).unit.description,"onUpdate:value":u[1]||=e=>s(i).unit.description=e},null,8,[`value`])]),_:1},8,[`label`]),a(M,{label:s(r)(`tools.docker-compose-to-quadlets.texts.label-after-targets`),"label-placement":`left`},{default:p(()=>[a(F,{value:s(i).unit.after,"onUpdate:value":u[2]||=e=>s(i).unit.after=e},null,8,[`value`])]),_:1},8,[`label`]),a(M,{label:s(r)(`tools.docker-compose-to-quadlets.texts.label-wants-targets`),"label-placement":`left`},{default:p(()=>[a(F,{value:s(i).unit.wants,"onUpdate:value":u[3]||=e=>s(i).unit.wants=e},null,8,[`value`])]),_:1},8,[`label`]),a(M,{label:s(r)(`tools.docker-compose-to-quadlets.texts.label-restart-policy`),"label-placement":`left`},{default:p(()=>[a(I,{value:s(i).service.restart,"onUpdate:value":u[4]||=e=>s(i).service.restart=e,options:m},null,8,[`value`])]),_:1},8,[`label`]),a(M,{label:s(r)(`tools.docker-compose-to-quadlets.texts.label-wantedby`),"label-placement":`left`},{default:p(()=>[a(F,{value:s(i).install.wantedBy,"onUpdate:value":u[5]||=e=>s(i).install.wantedBy=e},null,8,[`value`])]),_:1},8,[`label`])]),_:1},8,[`title`]),a(R),(h(!0),g(f,null,c(s(N).quadlets,({filename:e,content:t})=>(h(),o(L,{key:e,title:`Quadlet file: ${e}`},{default:p(()=>[a(z,{label:s(r)(`tools.docker-compose-to-quadlets.texts.label-typical-storage-location`),"label-placement":`left`,value:`/etc/containers/systemd/${e}`},null,8,[`label`,`value`]),a(b,{value:t,language:`ini`,"download-file-name":e},null,8,[`value`,`download-file-name`])]),_:2},1032,[`title`]))),128)),s(N).errors?(h(),o(B,{key:0,"mt-1":``,"text-center":``,type:`error`},{default:p(()=>[n(l(s(N).errors),1)]),_:1})):t(``,!0)])}}});export{M as default};