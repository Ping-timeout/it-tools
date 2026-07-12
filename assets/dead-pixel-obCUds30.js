import{A as e,C as t,D as n,F as r,G as i,K as a,Nt as o,S as s,Tt as c,Zt as l,_t as u,h as d,it as f,lt as p,q as m,w as h,x as g,z as _}from"./vue.runtime.esm-bundler-C0qeGFLU.js";import{t as v}from"./_plugin-vue_export-helper-BDNMzG2s.js";import{t as y}from"./c-button-Bz6VYugr.js";import{n as b}from"./vue-i18n.runtime-D_YDj0zU.js";r(),p(),o();var x={class:`flex flex-col`},S=[`title`],C=`
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    html, body {
      margin: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      outline: none;
    }
  </style>
</head>
<body tabindex="0">
<script>
(function () {
  const colors = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff"];
  let i = 0;
  function setColor() {
    document.body.style.background = colors[i];
  }
  function next() {
    i = (i + 1) % colors.length;
    setColor();
  }
  function prev() {
    i = (i - 1 + colors.length) % colors.length;
    setColor();
  }
  function focusBody() {
    document.body.focus();
  }
  setColor();
  focusBody();
  document.body.addEventListener("click", () => {
    focusBody();
    next();
  });
  document.addEventListener("fullscreenchange", focusBody);
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
      case " ":
        e.preventDefault();
        next();
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        prev();
        break;
    }
  });
})();
<\/script>
</body>
</html>
`,w=v(e({__name:`dead-pixel`,setup(e){let{t:r}=b(),o=u(!1),p=u(null);async function v(){o.value=!0,await _();let e=p.value;e&&(e.onload=async()=>{try{await e.requestFullscreen()}catch(e){console.warn(`Fullscreen failed`,e)}})}function w(){!document.fullscreenElement&&o.value&&(o.value=!1)}return i(()=>{document.addEventListener(`fullscreenchange`,w)}),a(()=>{document.removeEventListener(`fullscreenchange`,w)}),(e,i)=>{let a=y;return m(),h(d,null,[g(`div`,x,[g(`p`,null,l(c(r)(`tools.dead-pixel.texts.tag-keyboard-shortcuts`)),1),g(`ul`,null,[g(`li`,null,[g(`strong`,null,l(c(r)(`tools.dead-pixel.texts.tag-arrow-right-arrow-down-space`)),1),n(l(c(r)(`tools.dead-pixel.texts.tag-next-color`)),1)]),g(`li`,null,[g(`strong`,null,l(c(r)(`tools.dead-pixel.texts.tag-arrow-left-arrow-up`)),1),n(l(c(r)(`tools.dead-pixel.texts.tag-previous-color`)),1)]),g(`li`,null,[g(`strong`,null,l(c(r)(`tools.dead-pixel.texts.tag-esc`)),1),n(l(c(r)(`tools.dead-pixel.texts.tag-exit-dead-pixel-mode`)),1)])]),o.value?t(``,!0):(m(),s(a,{key:0,class:`mx-auto`,onClick:v},{default:f(()=>[n(l(c(r)(`tools.dead-pixel.texts.tag-start-dead-pixel`)),1)]),_:1}))]),o.value?(m(),h(`iframe`,{key:0,ref_key:`iframeRef`,ref:p,title:c(r)(`tools.dead-pixel.texts.title-dead-pixel-iframe`),class:`dead-pixel-iframe`,srcdoc:C,allow:`fullscreen`},null,8,S)):t(``,!0)],64)}}}),[[`__scopeId`,`data-v-cf285d4a`]]);export{w as default};