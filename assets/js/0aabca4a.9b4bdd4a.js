"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3668],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>u});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return r?t.createElement(f,a(a({ref:n},d),{},{components:r})):t.createElement(f,a({ref:n},d))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70840:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=r(87462),o=(r(67294),r(3905));const i={id:"inferencer",title:"Inferencer",sidebar_label:"Inferencer"},a=void 0,s={unversionedId:"api-reference/core/components/inferencer",id:"api-reference/core/components/inferencer",title:"Inferencer",description:"You can automatically generate views for your resources using @refinedev/inferencer. Inferencer exports HeadlessListInferencer, HeadlessShowInferencer, HeadlessEditInferencer, HeadlessCreateInferencer and HeadlessInferencer (which combines all in one place) components.",source:"@site/docs/api-reference/core/components/inferencer.md",sourceDirName:"api-reference/core/components",slug:"/api-reference/core/components/inferencer",permalink:"/docs/api-reference/core/components/inferencer",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/components/inferencer.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1684759604,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{id:"inferencer",title:"Inferencer",sidebar_label:"Inferencer"},sidebar:"someSidebar",previous:{title:"<Refine>",permalink:"/docs/api-reference/core/components/refine-config"},next:{title:"<Authenticated>",permalink:"/docs/api-reference/core/components/auth/authenticated"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Views",id:"views",level:2},{value:"<code>List</code>",id:"list",level:3},{value:"<code>Show</code>",id:"show",level:3},{value:"<code>Create</code>",id:"create",level:3},{value:"<code>Edit</code>",id:"edit",level:3},{value:"Example",id:"example",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},c=d("Tabs"),m=d("TabItem"),u=d("CodeSandboxExample"),f={toc:p};function h(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can automatically generate views for your resources using ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer"),". Inferencer exports ",(0,o.kt)("inlineCode",{parentName:"p"},"HeadlessListInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"HeadlessShowInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"HeadlessEditInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"HeadlessCreateInferencer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HeadlessInferencer")," (which combines all in one place) components."),(0,o.kt)("admonition",{title:"Dependencies",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/headless")," uses ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm"},(0,o.kt)("inlineCode",{parentName:"a"},"@refinedev/react-hook-form"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-table"},(0,o.kt)("inlineCode",{parentName:"a"},"@refinedev/react-table"))," to create views."),(0,o.kt)("p",{parentName:"admonition"},"Make sure you include them in your dependencies.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Inferencer components can be imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/headless"),". You can directly use the components in your routes without passing any props. If you use a ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider"),", it will infer the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," from the current route."),(0,o.kt)(c,{defaultValue:"resources",values:[{label:"Without Props",value:"resources"},{label:"With Explicit Props",value:"custom"}],mdxType:"Tabs"},(0,o.kt)(m,{value:"resources",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import routerProvider from "@refinedev/react-router-v6";\nimport { BrowserRouter } from "react-router-dom";\n// highlight-next-line\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerProvider}\n                resources={[\n                    {\n                        name: "samples",\n                        list: "/posts",\n                    },\n                ]}\n            >\n                <Routes>\n                    {/* highlight-next-line */}\n                    <Route path="/posts" element={<HeadlessInferencer />} />\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\n'))),(0,o.kt)(m,{value:"custom",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\n\nconst SampleList = () => {\n    return (\n        // highlight-next-line\n        <HeadlessInferencer resource="samples" action="list" />\n    );\n};\n\nconst SampleShow = () => {\n    return (\n        // highlight-next-line\n        <HeadlessInferencer resource="samples" action="show" id="1" />\n    );\n};\n\nconst SampleCreate = () => {\n    return (\n        // highlight-next-line\n        <HeadlessInferencer resource="samples" action="create" />\n    );\n};\n\nconst SampleEdit = () => {\n    return (\n        // highlight-next-line\n        <HeadlessInferencer resource="samples" action="edit" id="1" />\n    );\n};\n')))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To learn more about ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," package, please check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/inferencer"},"Docs"))),(0,o.kt)("h2",{id:"views"},"Views"),(0,o.kt)("h3",{id:"list"},(0,o.kt)("inlineCode",{parentName:"h3"},"List")),(0,o.kt)("p",null,"Generates a sample list view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples"},'setInitialRoutes(["/samples"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route } from "react-router-dom";\n\n// highlight-next-line\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider(API_URL)}\n                resources={[\n                    {\n                        // highlight-next-line\n                        name: "samples",\n                        list: "/samples",\n                        show: "/samples/show/:id",\n                        create: "/samples/create",\n                        edit: "/samples/edit/:id",\n                    },\n                ]}\n            >\n                <Routes>\n                    {/** highlight-next-line */}\n                    <Route path="/samples" element={<HeadlessInferencer />} />\n                    <Route\n                        path="/samples/create"\n                        element={<HeadlessInferencer />}\n                    />\n                    <Route\n                        path="/samples/show/:id"\n                        element={<HeadlessInferencer />}\n                    />\n                    <Route\n                        path="/samples/edit/:id"\n                        element={<HeadlessInferencer />}\n                    />\n                    <Route path="*" element={<div>Not Found</div>} />\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"show"},(0,o.kt)("inlineCode",{parentName:"h3"},"Show")),(0,o.kt)("p",null,"Generates a sample show view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"useShow")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/core"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/show/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/show/123"},'setInitialRoutes(["/samples/show/123"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route } from "react-router-dom";\n\n// highlight-next-line\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider(API_URL)}\n                resources={[\n                    {\n                        name: "samples",\n                        list: "/samples",\n                        // highlight-next-line\n                        show: "/samples/show/:id",\n                        create: "/samples/create",\n                        edit: "/samples/edit/:id",\n                    },\n                ]}\n            >\n                <Routes>\n                    <Route path="/samples" element={<HeadlessInferencer />} />\n                    <Route\n                        path="/samples/create"\n                        element={<HeadlessInferencer />}\n                    />\n                    {/** highlight-next-line */}\n                    <Route\n                        path="/samples/show/:id"\n                        element={<HeadlessInferencer />}\n                    />\n                    <Route\n                        path="/samples/edit/:id"\n                        element={<HeadlessInferencer />}\n                    />\n                    <Route path="*" element={<div>Not Found</div>} />\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"create"},(0,o.kt)("inlineCode",{parentName:"h3"},"Create")),(0,o.kt)("p",null,"Generates a sample create view for your resources according to the first record in list API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/react-hook-form"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/create",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/create"},'setInitialRoutes(["/samples/create"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route } from "react-router-dom";\n\n// highlight-next-line\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider(API_URL)}\n                resources={[\n                    {\n                        name: "samples",\n                        list: "/samples",\n                        // highlight-next-line\n                        create: "/samples/create",\n                        show: "/samples/show/:id",\n                        edit: "/samples/edit/:id",\n                    },\n                ]}\n            >\n                <Routes>\n                    <Route path="/samples" element={<HeadlessInferencer />} />\n                    {/** highlight-next-line */}\n                    <Route\n                        path="/samples/create"\n                        element={<HeadlessInferencer />}\n                    />\n                    <Route\n                        path="/samples/show/:id"\n                        element={<HeadlessInferencer />}\n                    />\n                    <Route\n                        path="/samples/edit/:id"\n                        element={<HeadlessInferencer />}\n                    />\n                    <Route path="*" element={<div>Not Found</div>} />\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"edit"},(0,o.kt)("inlineCode",{parentName:"h3"},"Edit")),(0,o.kt)("p",null,"Generates a sample edit view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/react-hook-form"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/edit/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/edit/123"},'setInitialRoutes(["/samples/edit/123"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route } from "react-router-dom";\n\n// highlight-next-line\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider(API_URL)}\n                resources={[\n                    {\n                        name: "samples",\n                        list: "/samples",\n                        show: "/samples/show/:id",\n                        create: "/samples/create",\n                        // highlight-next-line\n                        edit: "/samples/edit/:id",\n                    },\n                ]}\n            >\n                <Routes>\n                    <Route path="/samples" element={<HeadlessInferencer />} />\n                    <Route\n                        path="/samples/create"\n                        element={<HeadlessInferencer />}\n                    />\n                    <Route\n                        path="/samples/show/:id"\n                        element={<HeadlessInferencer />}\n                    />\n                    {/** highlight-next-line */}\n                    <Route\n                        path="/samples/edit/:id"\n                        element={<HeadlessInferencer />}\n                    />\n                    <Route path="*" element={<div>Not Found</div>} />\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Below you'll find a Live CodeSandbox Example displaying a fully setup ",(0,o.kt)("inlineCode",{parentName:"p"},"Refine")," app with ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/headless")," components."),(0,o.kt)(u,{path:"inferencer-headless",mdxType:"CodeSandboxExample"}))}h.isMDXComponent=!0}}]);