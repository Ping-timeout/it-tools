import{A as e,D as t,F as n,Nt as r,O as i,S as a,Tt as o,Zt as s,_t as c,ft as l,it as u,lt as d,q as f}from"./vue.runtime.esm-bundler-C0qeGFLU.js";import{t as p}from"./FormItem-DmsWhD7u.js";import{t as m}from"./Tree-yPjUjizL.js";import{t as h}from"./TextareaCopyable-CVIofnkG.js";import{n as g,t as _}from"./Upload-DFAHLW-h.js";import{t as v}from"./Input-Bt_1-nAM.js";import{t as y}from"./Button-CC-Xd7Y4.js";import{t as b}from"./Card-xXv8jywY.js";import{t as x}from"./Checkbox-DhOInWVV.js";import{t as S}from"./RadioGroup-6pd3AZqJ.js";import{t as C}from"./RadioButton-Boh0G6EW.js";import{t as w}from"./Space-DsTBW8iC.js";import{t as T}from"./text-Cd9lhza8.js";import{i as E}from"./queryParams-CtascB_k.js";import{n as D}from"./vue-i18n.runtime-D_YDj0zU.js";n(),d(),r();var O=e({__name:`pack-files-for-ai`,setup(e){let{t:n}=D(),r=c([]),d=c([]),O=E({name:`fmt`,storageName:`pack-ai:f`,defaultValue:`markdown`}),k=E({name:`incl`,storageName:`pack-ai:i`,defaultValue:``}),A=E({name:`excl`,storageName:`pack-ai:e`,defaultValue:``}),j=E({name:`summary`,storageName:`pack-ai:s`,defaultValue:!0}),M=E({name:`dirstruct`,storageName:`pack-ai:d`,defaultValue:!0}),N=E({name:`linenums`,storageName:`pack-ai:l`,defaultValue:!1}),P=E({name:`empty`,storageName:`pack-ai:y`,defaultValue:!1}),F=E({name:`comments`,storageName:`pack-ai:c`,defaultValue:!1}),I=c(!1),L=c(``);function R({fileList:e}){r.value=e,d.value=V(e)}function z(e,t=``){return Object.entries(e).map(([e,n])=>({label:e,key:t+e,children:n?z(n,`${t+e}/`):void 0}))}function B(e){return(e.fullPath||e.name).replace(/^[/\\]/g,``)}function V(e){let t={};return e.forEach(e=>{let n=B(e).split(`/`),r=t;n.forEach((e,t)=>{r[e]||(r[e]=t===n.length-1?null:{}),r=r[e]})}),z(t)}async function H(){let e=r.value.filter(e=>{let t=B(e),n=k.value?new RegExp(k.value).test(t):!0,r=A.value?new RegExp(A.value).test(t):!1;return n&&!r});O.value===`xml`?L.value=await W(e):L.value=await G(e)}async function U(e){return K(await e.file?.text?.()||``,e.name.split(`.`).slice(-1)[0]||`txt`,{numberLines:N.value,removeEmptyLines:P.value,removeComments:F.value})}async function W(e){let t=`
<directory_structure>
${e.map(e=>`  ${B(e)}`).join(`
`)}
</directory_structure>
`,n=`
<files>
This section contains the contents of the repository's files.

${(await Promise.all(e.map(async e=>`<file path="${B(e)}">\n${await U(e)}\n</file>`))).join(`
`)}
</files>
`;return`${j.value?`
This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

<file_summary>{{ t('tools.pack-files-for-ai.texts.tag-this-section-contains-a-summary-of-this-file') }}<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>
`:``}\n${M.value?t:``}\n${n}`.trim()}async function G(e){let t=`
# Directory Structure
\`\`\`
${e.map(e=>`- ${B(e)}`).join(`
`)}
\`\`\`
`,n=`
# Files

${(await Promise.all(e.map(async e=>`## File: ${B(e)}\n\`\`\`\n${await U(e)}\n\`\`\``))).join(`
`)}
`;return`${j.value?`
This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)
`:``}\n${M.value?t:``}\n${n}`.trim()}function K(e,t,n={}){let r=e.split(/\r?\n/);if(n.removeComments){let n={js:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],ts:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],java:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],cpp:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],c:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],cs:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],vb:[/('.*$)/gm,/(REM\s.*$)/gi],py:[/(#.*$)/gm],rb:[/(#.*$)/gm],php:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm,/(#.*$)/gm],swift:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],go:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],rs:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],sh:[/(#.*$)/gm]}[t.replace(/^\./,``).toLowerCase()];if(n){for(let t of n)e=e.replace(t,``);r=e.split(/\r?\n/)}}return n.removeEmptyLines&&(r=r.filter(e=>e.trim()!==``)),n.numberLines&&(r=r.map((e,t)=>`${t+1}: ${e}`)),r.join(`
`)}return(e,r)=>{let c=T,E=g,D=_,z=x,B=w,V=m,U=p,W=v,G=b,K=C,q=S,J=y,Y=h;return f(),a(G,{title:o(n)(`tools.pack-files-for-ai.texts.title-repomix-like-ai-pack-generator`)},{default:u(()=>[i(D,{multiple:``,"directory-dnd":``,"mb-1":``,"show-file-list":o(I),onChange:R},{default:u(()=>[i(E,null,{default:u(()=>[i(c,{style:{"font-size":`16px`}},{default:u(()=>[t(s(o(n)(`tools.pack-files-for-ai.texts.tag-click-or-drag-code-source-files-or-folder-to-this-area-to-add-to-package`)),1)]),_:1})]),_:1})]),_:1},8,[`show-file-list`]),i(B,{justify:`center`,"mb-2":``},{default:u(()=>[i(z,{checked:o(I),"onUpdate:checked":r[0]||=e=>l(I)?I.value=e:null},{default:u(()=>[t(s(o(n)(`tools.pack-files-for-ai.texts.tag-show-uploaded-files`)),1)]),_:1},8,[`checked`])]),_:1}),i(U,{label:o(n)(`tools.pack-files-for-ai.texts.label-directory-structure`)},{default:u(()=>[i(V,{data:o(d),"block-line":``},null,8,[`data`])]),_:1},8,[`label`]),i(U,{label:o(n)(`tools.pack-files-for-ai.texts.label-include-files-regexp`),"label-placement":`left`},{default:u(()=>[i(W,{value:o(k),"onUpdate:value":r[1]||=e=>l(k)?k.value=e:null,placeholder:o(n)(`tools.pack-files-for-ai.texts.placeholder-include-pattern-regexp`)},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),i(U,{label:o(n)(`tools.pack-files-for-ai.texts.label-exclude-files-regexp`),"label-placement":`left`},{default:u(()=>[i(W,{value:o(A),"onUpdate:value":r[2]||=e=>l(A)?A.value=e:null,placeholder:o(n)(`tools.pack-files-for-ai.texts.placeholder-exclude-pattern-regexp`),style:{"margin-top":`8px`}},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),i(G,{title:o(n)(`tools.pack-files-for-ai.texts.title-options`),"mb-2":``},{default:u(()=>[i(B,{justify:`space-evenly`},{default:u(()=>[i(z,{checked:o(j),"onUpdate:checked":r[3]||=e=>l(j)?j.value=e:null},{default:u(()=>[t(s(o(n)(`tools.pack-files-for-ai.texts.tag-include-file-summary`)),1)]),_:1},8,[`checked`]),i(z,{checked:o(M),"onUpdate:checked":r[4]||=e=>l(M)?M.value=e:null},{default:u(()=>[t(s(o(n)(`tools.pack-files-for-ai.texts.tag-include-directory-structure`)),1)]),_:1},8,[`checked`]),i(z,{checked:o(N),"onUpdate:checked":r[5]||=e=>l(N)?N.value=e:null},{default:u(()=>[t(s(o(n)(`tools.pack-files-for-ai.texts.tag-show-line-numbers`)),1)]),_:1},8,[`checked`]),i(z,{checked:o(P),"onUpdate:checked":r[6]||=e=>l(P)?P.value=e:null},{default:u(()=>[t(s(o(n)(`tools.pack-files-for-ai.texts.tag-remove-empty-lines`)),1)]),_:1},8,[`checked`]),i(z,{checked:o(F),"onUpdate:checked":r[7]||=e=>l(F)?F.value=e:null},{default:u(()=>[t(s(o(n)(`tools.pack-files-for-ai.texts.tag-remove-comments`)),1)]),_:1},8,[`checked`])]),_:1})]),_:1},8,[`title`]),i(B,{justify:`center`},{default:u(()=>[i(U,{label:o(n)(`tools.pack-files-for-ai.texts.label-output-format`),"label-placement":`left`},{default:u(()=>[i(q,{value:o(O),"onUpdate:value":r[8]||=e=>l(O)?O.value=e:null},{default:u(()=>[i(K,{label:o(n)(`tools.pack-files-for-ai.texts.label-xml`),value:`xml`},null,8,[`label`]),i(K,{label:o(n)(`tools.pack-files-for-ai.texts.label-markdown`),value:`markdown`},null,8,[`label`])]),_:1},8,[`value`])]),_:1},8,[`label`])]),_:1}),i(B,{justify:`center`},{default:u(()=>[i(J,{"mb-1":``,onClick:H},{default:u(()=>[t(` Generate `+s(o(O).toUpperCase()),1)]),_:1})]),_:1}),i(Y,{label:o(n)(`tools.pack-files-for-ai.texts.label-output-preview`),download:``,"download-file-name":`output.${o(O)===`xml`?`.xml`:`.md`}`,value:o(L),language:o(O)},null,8,[`label`,`download-file-name`,`value`,`language`])]),_:1},8,[`title`])}}});export{O as default};