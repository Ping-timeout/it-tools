import{A as e,C as t,F as n,O as r,S as i,Tt as a,_t as o,b as s,it as c,lt as l,q as u}from"./vue.runtime.esm-bundler-C0qeGFLU.js";import{t as d}from"./FormItem-DmsWhD7u.js";import{t as f}from"./TextareaCopyable-CVIofnkG.js";import{t as p}from"./Input-Bt_1-nAM.js";import{t as m}from"./Card-xXv8jywY.js";import{t as h}from"./Space-DsTBW8iC.js";import{t as g}from"./Switch-HODIM_C-.js";import{t as _}from"./Form-Bt21-G6Q.js";import{n as v}from"./vue-i18n.runtime-D_YDj0zU.js";import{t as y}from"./n-input-number-i18n-uC7aJRTf.js";function b(e){return e.proxiedServiceName===``||e.proxiedServiceImage===``||e.proxiedServiceHostName===``?``:`
version: "3.3"
services:
  traefik:
    image: "traefik:v2.11"
    container_name: "traefik"
    command:
      ${e.logDebug?`- "--log.level=DEBUG"`:``}
      - "--api=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.${e.certResolverName}.acme.httpchallenge=true"
      - "--certificatesresolvers.${e.certResolverName}.acme.httpchallenge.entrypoint=web"
      ${e.letEncryptTest?`- "--certificatesresolvers.${e.certResolverName}.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory"`:``}
      - "--certificatesresolvers.${e.certResolverName}.acme.email=${e.postmasterEmail}"
      - "--certificatesresolvers.${e.certResolverName}.acme.storage=/letsencrypt/acme.json"
    labels:
      ${e.dashboard?`
      - "traefik.http.routers.dashboard.rule=Host(\`${e.traefikDashboardHostName}\`) && (PathPrefix('/api') || PathPrefix('/dashboard'))"
      - "traefik.http.routers.dashboard.service=api@internal"
      - "traefik.http.routers.dashboard.middlewares=auth"
      - "traefik.http.middlewares.auth.basicauth.users=${e.dashboardUserAndPass}"
      `:``}
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "./letsencrypt:/letsencrypt"
      - "/var/run/docker.sock:/var/run/docker.sock:ro"

  ${e.proxiedServiceName}:
    image: ${e.proxiedServiceImage}
    labels:
      - "traefik.enable=true"
      - "traefik.http.middlewares.${e.proxiedServiceName}-redirect.redirectscheme.scheme=https"
      - "traefik.http.middlewares.${e.proxiedServiceName}-redirect.redirectscheme.permanent=true"
      ${e.loadBalance?`- "traefik.http.services.${e.proxiedServiceName}.loadbalancer.server.port=${e.proxiedServiceLoadBalancePort}"`:``}
      - "traefik.http.routers.${e.proxiedServiceName}.rule=Host(\`${e.proxiedServiceHostName}\`)"
      - "traefik.http.routers.${e.proxiedServiceName}.entrypoints=web"
      - "traefik.http.routers.${e.proxiedServiceName}-secure.rule=Host(\`${e.proxiedServiceHostName}\`)"
      - "traefik.http.routers.${e.proxiedServiceName}-secure.entrypoints=websecure"
      - "traefik.http.routers.${e.proxiedServiceName}-secure.tls=true"
      - "traefik.http.routers.${e.proxiedServiceName}-secure.tls.certresolver=${e.certResolverName}"
      `}n(),l();var x=e({__name:`traefik-compose-maker`,setup(e){let{t:n}=v(),l=o({logDebug:!1,certResolverName:``,postmasterEmail:``,letEncryptTest:!1,dashboard:!1,traefikDashboardHostName:``,dashboardUserAndPass:``,proxiedServiceName:``,proxiedServiceImage:``,proxiedServiceLoadBalancePort:80,proxiedServiceHostName:``,loadBalance:!1}),x=s(()=>b(l.value));return(e,o)=>{let s=p,v=d,b=y,S=g,C=h,w=f,T=m,E=_;return u(),i(T,{title:a(n)(`tools.traefik-compose-maker.texts.title-traefik-docker-compose-generator`)},{default:c(()=>[r(E,{model:a(l),"label-placement":`left`},{default:c(()=>[r(v,{label:a(n)(`tools.traefik-compose-maker.texts.label-proxied-service-name`)},{default:c(()=>[r(s,{value:a(l).proxiedServiceName,"onUpdate:value":o[0]||=e=>a(l).proxiedServiceName=e,placeholder:a(n)(`tools.traefik-compose-maker.texts.placeholder-enter-service-name`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),r(v,{label:a(n)(`tools.traefik-compose-maker.texts.label-proxied-service-image`)},{default:c(()=>[r(s,{value:a(l).proxiedServiceImage,"onUpdate:value":o[1]||=e=>a(l).proxiedServiceImage=e,placeholder:a(n)(`tools.traefik-compose-maker.texts.placeholder-enter-image-name`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),r(v,{label:a(n)(`tools.traefik-compose-maker.texts.label-proxied-service-host-name`)},{default:c(()=>[r(s,{value:a(l).proxiedServiceHostName,"onUpdate:value":o[2]||=e=>a(l).proxiedServiceHostName=e,placeholder:a(n)(`tools.traefik-compose-maker.texts.placeholder-enter-service-hostname`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),r(C,null,{default:c(()=>[r(v,{label:a(n)(`tools.traefik-compose-maker.texts.label-proxied-service-load-balancer-port`)},{default:c(()=>[r(b,{value:a(l).proxiedServiceLoadBalancePort,"onUpdate:value":o[3]||=e=>a(l).proxiedServiceLoadBalancePort=e,placeholder:a(n)(`tools.traefik-compose-maker.texts.placeholder-enter-port`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),r(v,{label:a(n)(`tools.traefik-compose-maker.texts.label-enable-load-balancer`)},{default:c(()=>[r(S,{value:a(l).loadBalance,"onUpdate:value":o[4]||=e=>a(l).loadBalance=e},null,8,[`value`])]),_:1},8,[`label`])]),_:1}),r(v,{label:a(n)(`tools.traefik-compose-maker.texts.label-cert-resolver-name`)},{default:c(()=>[r(s,{value:a(l).certResolverName,"onUpdate:value":o[5]||=e=>a(l).certResolverName=e,placeholder:a(n)(`tools.traefik-compose-maker.texts.placeholder-enter-cert-resolver-name`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),r(v,{label:a(n)(`tools.traefik-compose-maker.texts.label-postmaster-email`)},{default:c(()=>[r(s,{value:a(l).postmasterEmail,"onUpdate:value":o[6]||=e=>a(l).postmasterEmail=e,placeholder:a(n)(`tools.traefik-compose-maker.texts.placeholder-enter-email`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),r(C,null,{default:c(()=>[r(v,{label:a(n)(`tools.traefik-compose-maker.texts.label-let-s-encrypt-test-mode`)},{default:c(()=>[r(S,{value:a(l).letEncryptTest,"onUpdate:value":o[7]||=e=>a(l).letEncryptTest=e},null,8,[`value`])]),_:1},8,[`label`]),r(v,{label:a(n)(`tools.traefik-compose-maker.texts.label-enable-dashboard`)},{default:c(()=>[r(S,{value:a(l).dashboard,"onUpdate:value":o[8]||=e=>a(l).dashboard=e},null,8,[`value`])]),_:1},8,[`label`]),r(v,{label:a(n)(`tools.traefik-compose-maker.texts.label-log-level-debug`)},{default:c(()=>[r(S,{value:a(l).logDebug,"onUpdate:value":o[9]||=e=>a(l).logDebug=e},null,8,[`value`])]),_:1},8,[`label`])]),_:1}),r(v,{label:a(n)(`tools.traefik-compose-maker.texts.label-traefik-dashboard-host-name`)},{default:c(()=>[r(s,{value:a(l).traefikDashboardHostName,"onUpdate:value":o[10]||=e=>a(l).traefikDashboardHostName=e,placeholder:a(n)(`tools.traefik-compose-maker.texts.placeholder-enter-dashboard-host-name`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),r(v,{label:a(n)(`tools.traefik-compose-maker.texts.label-dashboard-user-and-password`)},{default:c(()=>[r(s,{value:a(l).dashboardUserAndPass,"onUpdate:value":o[11]||=e=>a(l).dashboardUserAndPass=e,placeholder:a(n)(`tools.traefik-compose-maker.texts.placeholder-user-password`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),a(x)?(u(),i(T,{key:0,title:a(n)(`tools.traefik-compose-maker.texts.title-generated-compose-entry`)},{default:c(()=>[r(w,{value:a(x),language:`yaml`},null,8,[`value`])]),_:1},8,[`title`])):t(``,!0)]),_:1},8,[`model`])]),_:1},8,[`title`])}}});export{x as default};