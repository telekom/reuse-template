"use strict";(self.webpackChunkreuse_template=self.webpackChunkreuse_template||[]).push([[228],{7219:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=i(5893),s=i(1151);const o={sidebar_position:30},l="Set up REUSE (5 min)",r={id:"using-the-template/setup-reuse",title:"Set up REUSE (5 min)",description:"REUSE comes with a python-based tool that will allow you to set up licensing and verify compliance with the REUSE standard.",source:"@site/docs/using-the-template/setup-reuse.md",sourceDirName:"using-the-template",slug:"/using-the-template/setup-reuse",permalink:"/reuse-template/using-the-template/setup-reuse",draft:!1,unlisted:!1,editUrl:"https://github.com/telekom/reuse-template/tree/docs/docs/using-the-template/setup-reuse.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Set up the Repo (5 min)",permalink:"/reuse-template/using-the-template/setup-repo"},next:{title:"Set up the Licenses (5 - 10 min)",permalink:"/reuse-template/using-the-template/setup-license"}},a={},p=[{value:"Install pipx",id:"install-pipx",level:2},{value:"Initialize REUSE",id:"initialize-reuse",level:2}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"set-up-reuse-5-min",children:"Set up REUSE (5 min)"}),"\n",(0,n.jsxs)(t.p,{children:["REUSE comes with a python-based tool that will allow you to set up licensing and verify compliance with the REUSE standard.\nThe verification will run in CI/CD, which already set up for the template repo.",(0,n.jsx)(t.br,{}),"\n","All that remains to do is to set up the tool locally to specify license information quickly."]}),"\n",(0,n.jsx)(t.h2,{id:"install-pipx",children:"Install pipx"}),"\n",(0,n.jsxs)(t.p,{children:["For simplicity it is recommended to run the tool with pipx, which, without any setup, runs python applications in isolated environments.\nHead over to ",(0,n.jsx)(t.a,{href:"https://pypa.github.io/pipx/installation/",children:"https://pypa.github.io/pipx/installation/"})," for instructions."]}),"\n",(0,n.jsx)(t.h2,{id:"initialize-reuse",children:"Initialize REUSE"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Clone your repository locally"}),"\n",(0,n.jsxs)(t.li,{children:["In the cloned directory, run ",(0,n.jsx)(t.code,{children:"pipx run reuse init"})]}),"\n",(0,n.jsxs)(t.li,{children:["The command will ask basic information about the project","\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["You can skip the license question with ENTER, as the licenses will be handled later.","\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["If you know which licenses will be used you can of course already enter them.\nThe input expects the ",(0,n.jsx)(t.a,{href:"https://spdx.org/licenses/",children:"SPDX Identifier"}),"."]})}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"The internet address of your project will be the GitHub repository URL, unless you have a separate website."}),"\n",(0,n.jsx)(t.li,{children:'The name of the maintainer can be "Deutsche Telekom AG".'}),"\n",(0,n.jsxs)(t.li,{children:['The e-mail of the maintainer can be "',(0,n.jsx)(t.a,{href:"mailto:opensource@telekom.de",children:"opensource@telekom.de"}),'".',"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"If you are not a Deutsche Telekom employee you should obviously use your own name and e-mail!"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This process will create the (standardized) file ",(0,n.jsx)(t.code,{children:"./reuse/dep5"})," to store this license related metadata."]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>l});var n=i(7294);const s={},o=n.createContext(s);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);