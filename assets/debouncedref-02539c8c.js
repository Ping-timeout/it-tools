import{r as a,R as c,_ as f}from"./index-3ff32cc2.js";function b(t,u,n=!1){const e=a(t);return c((o,s)=>({get(){return o(),e.value},set:f.debounce(r=>{e.value=r,s()},u,{leading:n})}))}export{b as u};
