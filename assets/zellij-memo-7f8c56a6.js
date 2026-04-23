import{o as l,c as s,T as d,d as c,c8 as i,c9 as r,k as p,l as t,bm as h}from"./index-3ff32cc2.js";const g={class:"markdown-body"},u=d(`<p>Zellij is a <strong>terminal workspace and multiplexer</strong> with panes, tabs, layouts, and plugin support.</p><h2>📦 Installation</h2><pre><code class="language-bash"># Install via Cargo
cargo install --locked zellij

# Try without installing
bash &lt;(curl -L https://zellij.dev/launch)
</code></pre><h2>🚀 Starting &amp; Managing Sessions</h2><pre><code class="language-bash"># Start a new Zellij session
zellij

# Start with a specific session name
zellij --session mysession

# Attach to an existing session
zellij attach mysession

# List all sessions
zellij list-sessions

# Kill a session
zellij kill-session mysession
</code></pre><h2>🪟 Pane Management</h2><table><thead><tr><th>Action</th><th>Command / Shortcut</th></tr></thead><tbody><tr><td>Split vertically</td><td><code>Ctrl + p</code> → <code>v</code></td></tr><tr><td>Split horizontally</td><td><code>Ctrl + p</code> → <code>h</code></td></tr><tr><td>Close pane</td><td><code>Ctrl + p</code> → <code>x</code></td></tr><tr><td>Move focus</td><td><code>Ctrl + p</code> → Arrow keys</td></tr><tr><td>Resize pane</td><td><code>Ctrl + p</code> → <code>r</code> then arrows</td></tr><tr><td>Toggle floating pane</td><td><code>Ctrl + p</code> → <code>f</code></td></tr><tr><td>Toggle stacked panes</td><td><code>Ctrl + p</code> → <code>s</code></td></tr></tbody></table><h2>📑 Tab Management</h2><table><thead><tr><th>Action</th><th>Command / Shortcut</th></tr></thead><tbody><tr><td>New tab</td><td><code>Ctrl + p</code> → <code>t</code></td></tr><tr><td>Close tab</td><td><code>Ctrl + p</code> → <code>q</code></td></tr><tr><td>Rename tab</td><td><code>Ctrl + p</code> → <code>n</code></td></tr><tr><td>Move between tabs</td><td><code>Ctrl + p</code> → Left/Right arrows</td></tr></tbody></table><h2>🛠️ Layouts</h2><pre><code class="language-bash"># Start with a predefined layout
zellij --layout path/to/layout.kdl

# Example layout file (KDL format)
layout {
  tab {
    pane split_direction=&quot;vertical&quot; {
      pane
      pane
    }
  }
}
</code></pre><h2>⚙️ Configuration</h2><ul><li>Config file: <code>~/.config/zellij/config.kdl</code></li><li>Common options:<pre><code class="language-kdl">keybinds {
  normal {
    bind &quot;Ctrl g&quot; { SwitchToMode &quot;locked&quot;; }
  }
}
</code></pre></li></ul><h2>🔌 Plugins</h2><ul><li>Zellij supports <strong>WebAssembly plugins</strong>.</li><li>Example usage:<pre><code class="language-bash">zellij --plugin path/to/plugin.wasm
</code></pre></li></ul><h2>🧭 Useful Flags</h2><pre><code class="language-bash">--session &lt;name&gt;     # Name the session
--layout &lt;file&gt;      # Use a layout file
--help               # Show help
--version            # Show version
</code></pre><h2>🗂️ Quick Reference</h2><ul><li><strong>Session</strong> → <code>zellij</code>, <code>attach</code>, <code>list-sessions</code>, <code>kill-session</code></li><li><strong>Pane</strong> → split, move, resize, float, stack</li><li><strong>Tab</strong> → new, close, rename, switch</li><li><strong>Layout</strong> → <code>--layout file.kdl</code></li><li><strong>Config</strong> → <code>~/.config/zellij/config.kdl</code></li><li><strong>Plugins</strong> → <code>.wasm</code> modules</li></ul>`,19),m=[u],_={__name:"zellij-memo.content",setup(n,{expose:e}){return e({frontmatter:{}}),(a,b)=>(l(),s("div",g,m))}},f=c({__name:"zellij-memo",setup(n){i(o=>({"6a22224e":t(e).cardColor,"21bf2800":t(e).textColor1}));const e=r();return(o,a)=>(l(),s("div",null,[p(t(_))]))}});const C=h(f,[["__scopeId","data-v-a6d1772f"]]);export{C as default};
