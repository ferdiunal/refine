"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>m});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"v4-to-v5",title:"Migration Guide"},p=void 0,d={unversionedId:"api-reference/antd/migration-guide/v4-to-v5",id:"version-3.xx.xx/api-reference/antd/migration-guide/v4-to-v5",title:"Migration Guide",description:"Ant Design released a new major version as a v5. This document will help you upgrade from antd 4.x version to antd 5.x version.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/migration-guide/v4-to-v5.md",sourceDirName:"api-reference/antd/migration-guide",slug:"/api-reference/antd/migration-guide/v4-to-v5",permalink:"/docs/3.xx.xx/api-reference/antd/migration-guide/v4-to-v5",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/migration-guide/v4-to-v5.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1690356264,formattedLastUpdatedAt:"Jul 26, 2023",frontMatter:{id:"v4-to-v5",title:"Migration Guide"},sidebar:"someSidebar",previous:{title:"Sider",permalink:"/docs/3.xx.xx/api-reference/antd/customization/antd-custom-sider"},next:{title:"Chakra UI API",permalink:"/docs/3.xx.xx/api-reference/chakra-ui"}},s={},m=[{value:"Updating the packages",id:"updating-the-packages",level:2},{value:"\ud83e\ude84 Migrating your project automatically with Codemod \u2728 (recommended)",id:"-migrating-your-project-automatically-with-codemod--recommended",level:2},{value:"Migrating your project manually",id:"migrating-your-project-manually",level:2},{value:"Updating Imports",id:"updating-imports",level:3},{value:"Updating Props",id:"updating-props",level:3},{value:"Customized <code>&lt;Sider&gt;</code>",id:"customized-sider",level:3},{value:"Customized <code>&lt;Header&gt;</code>",id:"customized-header",level:3},{value:"LESS Users",id:"less-users",level:3},{value:"Known Issues",id:"known-issues",level:2},{value:"Compile errors",id:"compile-errors",level:3},{value:"Solution 1",id:"solution-1",level:4},{value:"Solution 2",id:"solution-2",level:4}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=u("Tabs"),k=u("TabItem"),g={toc:m};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ant Design released a new major version as a v5. This document will help you upgrade from antd 4.x version to antd 5.x version."),(0,a.kt)("p",null,"Ant Design removed ",(0,a.kt)("inlineCode",{parentName:"p"},"less")," and adopt ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS-in-JS"),", for better support of dynamic themes. The bottom layer uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ant-design/cssinjs"},(0,a.kt)("inlineCode",{parentName:"a"},"@ant-design/cssinjs"))," as a solution.\nSome components are removed or renamed, and some APIs are changed."),(0,a.kt)("p",null,"Some of the changes are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<PageHeader>")," component moved into ",(0,a.kt)("inlineCode",{parentName:"li"},"@ant-design/pro-components"),". ",(0,a.kt)("strong",{parentName:"li"},"refine")," is using ",(0,a.kt)("inlineCode",{parentName:"li"},"<PageHeader>")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"<List>"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"<Create>"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"<Edit>"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"<Show>")," components and added as a dependency. You don't need to install ",(0,a.kt)("inlineCode",{parentName:"li"},"@ant-design/pro-components")," package manually."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<Comment>")," component moved into ",(0,a.kt)("inlineCode",{parentName:"li"},"@ant-design/compatible"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"moment.js")," is replaced with ",(0,a.kt)("inlineCode",{parentName:"li"},"day.js"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"less")," is removed from ",(0,a.kt)("inlineCode",{parentName:"li"},"antd")," package.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/docs/react/migration-v5"},"Ant Design Migration Guide")," for detailed information.")),(0,a.kt)("admonition",{title:"A little more clarification",type:"info"},(0,a.kt)("table",{parentName:"admonition"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"refine")," package"),(0,a.kt)("th",{parentName:"tr",align:null},"Ant Design version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@","pankod/refine-antd","@","3.x.x"),(0,a.kt)("td",{parentName:"tr",align:null},"antd","@","4.x.x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@","pankod/refine-antd","@","4.x.x"),(0,a.kt)("td",{parentName:"tr",align:null},"antd","@","5.x.x"))))),(0,a.kt)("h2",{id:"updating-the-packages"},"Updating the packages"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/next/packages/antd"},(0,a.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," must be updated to ",(0,a.kt)("inlineCode",{parentName:"p"},"4.x.x")),(0,a.kt)(c,{defaultValue:"refine-cli",values:[{label:"refine CLI",value:"refine-cli"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},(0,a.kt)(k,{value:"refine-cli",mdxType:"TabItem"},(0,a.kt)("p",null,"\u26a1\ufe0f You can easily update ",(0,a.kt)("strong",{parentName:"p"},"refine")," packages with ",(0,a.kt)("strong",{parentName:"p"},"refine")," CLI ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/cli/#update"},(0,a.kt)("inlineCode",{parentName:"a"},"update"))," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run refine update\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/cli/#how-to-add-to-an-existing-project"},"How to add refine CLI to an existing project?")))),(0,a.kt)(k,{value:"manual",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine-antd@latest\n")))),(0,a.kt)("h2",{id:"-migrating-your-project-automatically-with-codemod--recommended"},"\ud83e\ude84 Migrating your project automatically with Codemod \u2728 (recommended)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-codemod")," package handles the breaking changes for your project automatically, without any manual steps. It migrates your ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/next/packages/antd"},(0,a.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," version from 3.x.x to 4.x.x."),(0,a.kt)("p",null,"Just ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," into root folder of your project (where ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," is contained) and run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx @pankod/refine-codemod antd4-to-antd5\n")),(0,a.kt)("p",null,"And it's done. Now your project uses ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd@4.x.x"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udea8 Customized or swizzled ",(0,a.kt)("a",{parentName:"p",href:"#customized-sider"},"components")," and ",(0,a.kt)("a",{parentName:"p",href:"#less-users"},".less")," files cannot be migrated automatically. You need to migrate them manually.")),(0,a.kt)("h2",{id:"migrating-your-project-manually"},"Migrating your project manually"),(0,a.kt)("h3",{id:"updating-imports"},"Updating Imports"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CSS files are no longer included in package. Since CSS-in-JS supports importing on demand, the original ",(0,a.kt)("inlineCode",{parentName:"li"},"styles/antd.less")," has also been abandoned. If you need to reset some basic styles, please import ",(0,a.kt)("inlineCode",{parentName:"li"},"@pankod/refine-antd/dist/reset.css"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="App.tsx"',title:'"App.tsx"'},'- import "@pankod/refine-antd/dist/styles.min.css";\n+ import "@pankod/refine-antd/dist/reset.css";\n')),(0,a.kt)("h3",{id:"updating-props"},"Updating Props"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"actionButtons")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pageHeaderProps")," props was deprecated on ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd@3.x.x")," and removed on ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd@4.x.x")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"<List>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<Create>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," component due to incosistency with all UI packages. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"headerButtons")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"headerProps")," props instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="List.tsx"',title:'"List.tsx"'},"- <List actionButtons={actionButtons} pageHeaderProps={pageHeaderProps}>\n+ <List headerButtons={actionButtons} headerProps={pageHeaderProps}>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Create.tsx"',title:'"Create.tsx"'},"- <Create actionButtons={actionButtons} pageHeaderProps={pageHeaderProps}>\n+ <Create headerButtons={actionButtons} headerProps={pageHeaderProps}>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Show.tsx"',title:'"Show.tsx"'},"- <Show actionButtons={actionButtons} pageHeaderProps={pageHeaderProps}>\n+ <Show headerButtons={actionButtons} headerProps={pageHeaderProps}>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Edit.tsx"',title:'"Edit.tsx"'},"- <Edit actionButtons={actionButtons} pageHeaderProps={pageHeaderProps}>\n+ <Edit headerButtons={actionButtons} headerProps={pageHeaderProps}>\n")),(0,a.kt)("h3",{id:"customized-sider"},"Customized ",(0,a.kt)("inlineCode",{parentName:"h3"},"<Sider>")),(0,a.kt)("p",null,"If you have customized or ",(0,a.kt)("inlineCode",{parentName:"p"},"swizzled")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Sider>")," component, there may be a color mismatch issue.\nYou can give theme dark to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Menu>")," component in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Sider>")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Sider.tsx"',title:'"Sider.tsx"'},"    <AntdLayout.Sider\n      collapsible\n      collapsed={collapsed}\n      onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n      collapsedWidth={isMobile ? 0 : 80}\n      breakpoint='lg'\n      style={isMobile ? antLayoutSiderMobile : antLayoutSider}>\n      <RenderToTitle collapsed={collapsed} />\n      <Menu\n+       theme='dark'\n        selectedKeys={[selectedKey]}\n        defaultOpenKeys={defaultOpenKeys}\n        mode='inline'\n        onClick={() => {\n          if (!breakpoint.lg) {\n            setCollapsed(true)\n          }\n        }}>\n        {renderSider()}\n      </Menu>\n    </AntdLayout.Sider>\n")),(0,a.kt)("h3",{id:"customized-header"},"Customized ",(0,a.kt)("inlineCode",{parentName:"h3"},"<Header>")),(0,a.kt)("p",null,"If you have customized or ",(0,a.kt)("inlineCode",{parentName:"p"},"swizzled")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Header>")," component, there may be a color mismatch issue.\nYou can remove constant background color in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Header>")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Header.tsx"',title:'"Header.tsx"'},"   <AntdLayout.Header\n      style={{\n        display: 'flex',\n        justifyContent: 'flex-end',\n        alignItems: 'center',\n        padding: '0px 24px',\n        height: '64px',\n-       backgroundColor: '#FFF',\n      }}>\n")),(0,a.kt)("h3",{id:"less-users"},"LESS Users"),(0,a.kt)("p",null,"Ant Design removed ",(0,a.kt)("inlineCode",{parentName:"p"},"less"),", uses and recommends ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS-in-JS")," instead. You need to manually migrate your ",(0,a.kt)("inlineCode",{parentName:"p"},".less")," files to ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS-in-JS"),". ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/docs/react/migration-v5#less-migration"},"Ant Design's documentation for less migration.")),(0,a.kt)("h2",{id:"known-issues"},"Known Issues"),(0,a.kt)("h3",{id:"compile-errors"},"Compile errors"),(0,a.kt)("p",null,"Some users repored (",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/channels/837692625737613362/1056236230641209396/1056236230641209396"},"issue#1"),", ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/channels/837692625737613362/1056592183702061177/1056592183702061177"},"issue#2"),") compile errors after upgrading from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd@3.x.x")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd@4.x.x"),". They also provided solutions."),(0,a.kt)("h4",{id:"solution-1"},"Solution 1"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"remove ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," folder"),(0,a.kt)("li",{parentName:"ol"},"remove ",(0,a.kt)("inlineCode",{parentName:"li"},"package-lock.json")," file"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"npm install"))),(0,a.kt)("h4",{id:"solution-2"},"Solution 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react@latest react-dom@latest\n")))}f.isMDXComponent=!0}}]);