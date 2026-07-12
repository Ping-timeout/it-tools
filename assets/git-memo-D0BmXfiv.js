import{A as e,E as t,F as n,O as r,Tt as i,a,lt as o,q as s,s as c,w as l}from"./vue.runtime.esm-bundler-C0qeGFLU.js";import{t as u}from"./use-theme-vars-D12EPShX.js";import{t as d}from"./_plugin-vue_export-helper-BDNMzG2s.js";n();var f={class:`markdown-body`},p={__name:`git-memo.content`,setup(e,{expose:n}){return n({frontmatter:{}}),(e,n)=>(s(),l(`div`,f,[...n[0]||=[t(`<h2>Configuration</h2><p>Set the global config</p><pre><code class="language-shell">git config --global user.name &quot;[name]&quot;
git config --global user.email &quot;[email]&quot;
</code></pre><h2>Get started</h2><p>Create a git repository</p><pre><code class="language-shell">git init
</code></pre><p>Pull a git repository</p><pre><code class="language-shell">git pull [url]
</code></pre><p>Clone an existing git repository</p><pre><code class="language-shell">git clone [url]
</code></pre><h2>Staging</h2><p>Stage specific files</p><pre><code class="language-shell">git add [file]
</code></pre><p>Stage all changes</p><pre><code class="language-shell">git add .
</code></pre><p>Interactively stage parts of a file (hunks)</p><pre><code class="language-shell">git add -p [file]
</code></pre><p>Unstage a file but keep changes</p><pre><code class="language-shell">git restore --staged [file]
</code></pre><h2>Commit</h2><p>Commit all tracked changes</p><pre><code class="language-shell">git commit -am &quot;[commit message]&quot;
</code></pre><p>Add new modifications to the last commit</p><pre><code class="language-shell">git commit --amend --no-edit
</code></pre><h2>Branches</h2><p>Lists all local branches in your repository (use -a for local and remote branches)</p><pre><code class="language-shell">git branch
</code></pre><p>Switch to an existing branch</p><pre><code class="language-shell">git switch [branch name]
</code></pre><p>Create a new branch</p><pre><code class="language-shell">git checkout -b [branch name]
</code></pre><h2>Stashing</h2><p>Save uncommitted changes for later</p><pre><code class="language-shell">git stash
</code></pre><p>List all stashes</p><pre><code class="language-shell">git stash list
</code></pre><p>Apply most recent stash and remove it from the list</p><pre><code class="language-shell">git stash pop
</code></pre><p>Apply a specific stash without removing it</p><pre><code class="language-shell">git stash apply stash@{2}
</code></pre><h2>Inspecting</h2><p>Show changes between working directory and staging</p><pre><code class="language-shell">git diff
</code></pre><p>Show changes between staging and last commit</p><pre><code class="language-shell">git diff --staged
</code></pre><p>Show commit history for a specific file</p><pre><code class="language-shell">git log --follow [file]
</code></pre><p>Show who changed each line in a file</p><pre><code class="language-shell">git blame [file]
</code></pre><h2>Remote</h2><p>Add a remote repository</p><pre><code class="language-shell">git remote add origin [url]
</code></pre><p>List remote repositories</p><pre><code class="language-shell">git remote -v
</code></pre><p>Push a branch and set upstream tracking</p><pre><code class="language-shell">git push -u origin [branch-name]
</code></pre><p>Delete a remote branch</p><pre><code class="language-shell">git push origin --delete [branch-name]
</code></pre><h2>Tags</h2><p>Create a tagged release</p><pre><code class="language-shell">git tag -a v1.0.0 -m &quot;Release v1.0.0&quot;
</code></pre><p>Push tags to remote</p><pre><code class="language-shell">git push origin --tags
</code></pre><h2>I’ve made a mistake</h2><p>Change last commit message</p><pre><code class="language-shell">git commit --amend
</code></pre><p>Undo most recent commit and keep changes</p><pre><code class="language-shell">git reset HEAD~1
</code></pre><p>Undo the <code>N</code> most recent commit and keep changes</p><pre><code class="language-shell">git reset HEAD~N
</code></pre><p>Undo most recent commit and get rid of changes</p><pre><code class="language-shell">git reset HEAD~1 --hard
</code></pre><p>Reset branch to remote state</p><pre><code class="language-shell">git fetch origin
git reset --hard origin/[branch-name]
</code></pre><p>Revert a commit by creating a new undo commit (safe for shared branches)</p><pre><code class="language-shell">git revert [commit-hash]
</code></pre><p>Discard all uncommitted changes in working directory</p><pre><code class="language-shell">git restore .
</code></pre><p>Recover a deleted branch or lost commit</p><pre><code class="language-shell">git reflog
git checkout -b [branch-name] [commit-hash]
</code></pre><h2>Cherry-pick</h2><p>Apply a specific commit from another branch</p><pre><code class="language-shell">git cherry-pick [commit-hash]
</code></pre><h2>Cleaning</h2><p>Remove untracked files (dry run first)</p><pre><code class="language-shell">git clean -n
</code></pre><p>Remove untracked files and directories</p><pre><code class="language-shell">git clean -fd
</code></pre><h2>Miscellaneous</h2><p>Renaming the local master branch to main</p><pre><code class="language-shell">git branch -m master main
</code></pre><p>Checking log graph</p><pre><code class="language-shell">git log --graph
</code></pre><p>Checking log graph (merges only)</p><pre><code class="language-shell">git log --graph --merges
</code></pre><p>Tracking down a bad commit using binary search</p><pre><code class="language-shell">git bisect start
git bisect good 13c988d4f15e06bcdd0b0af290086a3079cdadb0
git bisect bad ca82a6dff817ec66f44342007202690a93763949
</code></pre><p>Pulling new changes into current branch from mainline</p><pre><code class="language-shell">git checkout [branch-name]
git fetch origin [master-branch-name]
git rebase origin/[master-branch-name]
</code></pre>`,99)]]))}};a(),n(),o();var m=d(e({__name:`git-memo`,setup(e){c(e=>({v8cb22b3c:i(t).cardColor}));let t=u();return(e,t)=>(s(),l(`div`,null,[r(i(p))]))}}),[[`__scopeId`,`data-v-c7dbeca3`]]);export{m as default};