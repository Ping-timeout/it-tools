import{A as e,F as t,Nt as n,O as r,S as i,Tt as a,Zt as o,_t as s,it as c,lt as l,q as u,w as d,x as f}from"./vue.runtime.esm-bundler-C0qeGFLU.js";import{t as p}from"./_plugin-vue_export-helper-BDNMzG2s.js";import{n as m}from"./vue-i18n.runtime-D_YDj0zU.js";import{t as h}from"./c-card-Cp0u9ZTO.js";import{t as g}from"./c-markdown-C7X-l1nx.js";import{t as _}from"./c-buttons-select-CC9pIEkB.js";import{t as v}from"./c-diff-editor-D-Wkdz0m.js";var y=`# Release notes

## Added

- JSON export for reports
- Keyboard shortcuts for navigation
- Markdown table previews

## Fixed

- Preserve whitespace in code blocks

## Plugin support

| user | host | plugin |
| --- | --- | --- |
| mysql.infoschema | localhost | caching_sha2_password |
| mysql.session | localhost | caching_sha2_password |
| mysql.sys | localhost | caching_sha2_password |

\`inline code\` stays readable in preview mode.
`,b=`# Release notes

## Added

- JSON and CSV export for reports
- Keyboard shortcuts for navigation
- Dark mode support for charts
- Markdown table previews

## Fixed

- Preserve whitespace in fenced code blocks

## Plugin support

| user | host | plugin |
| --- | --- | --- |
| mysql.session | localhost | caching_sha2_password |
| mysql.sys | localhost | caching_sha2_password |

\`\`\`sql
select user, host, plugin
from mysql.user;
\`\`\`
`;t(),l(),n();var x={class:`markdown-diff-tool`},S={flex:``,"justify-center":``,"mb-4":``},C={class:`markdown-preview-grid`},w={class:`markdown-preview-pane`,"data-test-id":`source-markdown-preview`},T={class:`markdown-preview-pane`,"data-test-id":`modified-markdown-preview`},E=p(e({__name:`markdown-diff`,setup(e){let{t}=m(),n=s(`code`),l=s(y),p=s(b),E=[{label:t(`tools.markdown-diff.texts.label-code`),value:`code`},{label:t(`tools.markdown-diff.texts.label-preview`),value:`preview`}];return(e,s)=>{let m=_,y=v,b=h,D=g;return u(),d(`div`,x,[f(`div`,S,[r(m,{value:n.value,"onUpdate:value":s[0]||=e=>n.value=e,options:E,size:`small`},null,8,[`value`])]),n.value===`code`?(u(),i(b,{key:0,"w-full":``,"important:flex-1":``,"important:pa-0":``},{default:c(()=>[r(y,{original:l.value,"onUpdate:original":s[1]||=e=>l.value=e,modified:p.value,"onUpdate:modified":s[2]||=e=>p.value=e,"test-id":`markdown-diff-editor`,language:`markdown`,height:`clamp(620px, 72vh, 820px)`},null,8,[`original`,`modified`])]),_:1})):(u(),i(b,{key:1,"data-test-id":`markdown-preview`,"w-full":``},{default:c(()=>[f(`div`,C,[f(`section`,null,[f(`h3`,null,o(a(t)(`tools.markdown-diff.texts.tag-source-markdown`)),1),f(`div`,w,[r(D,{markdown:l.value},null,8,[`markdown`])])]),f(`section`,null,[f(`h3`,null,o(a(t)(`tools.markdown-diff.texts.tag-modified-markdown`)),1),f(`div`,T,[r(D,{markdown:p.value},null,8,[`markdown`])])])])]),_:1}))])}}}),[[`__scopeId`,`data-v-334c61e7`]]);export{E as default};