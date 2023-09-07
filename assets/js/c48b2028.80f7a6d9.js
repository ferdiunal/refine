"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17284],{70151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={},l=void 0,p={unversionedId:"partials/tutorial/headless-layout",id:"partials/tutorial/headless-layout",title:"headless-layout",description:"",source:"@site/docs/partials/tutorial/headless-layout.md",sourceDirName:"partials/tutorial",slug:"/partials/tutorial/headless-layout",permalink:"/docs/partials/tutorial/headless-layout",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/partials/tutorial/headless-layout.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1694048685,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{}},d={},u=[],c={toc:u};function m(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},'body {\n    margin: 0px;\n}\n\ntable {\n    border-spacing: 0;\n    border: 1px solid black;\n}\n\ntable th,\ntd {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid black;\n    border-right: 1px solid black;\n}\n\ntable tr:last-child td {\n    border-bottom: 0;\n}\n\ntable th,\ntd {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid black;\n    border-right: 1px solid black;\n}\n\ntable th:last-child,\ntd:last-child {\n    border-right: 0;\n}\n\n.layout {\n    display: flex;\n    gap: 16px;\n}\n\n@media screen and (max-width: 751px) {\n    .layout {\n        display: block;\n    }\n}\n\n.layout .content {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n}\n\n.breadcrumb {\n    display: flex;\n    gap: 24px;\n    list-style-type: "/  ";\n    padding: 8px 16px;\n    border-bottom: 1px solid lightgray;\n}\n\n.breadcrumb a {\n    color: blue;\n    text-decoration: none;\n}\n\n.menu {\n    flex-shrink: 0;\n    padding: 8px 16px;\n    border-right: 1px solid lightgray;\n}\n\n.menu a {\n    color: black;\n}\n\n.menu .active {\n    font-weight: bold;\n}\n\n@media screen and (max-width: 751px) {\n    .menu {\n        border-right: none;\n        border-bottom: 1px solid lightgray;\n    }\n}\n\n.menu ul {\n    padding-left: 16px;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import { PropsWithChildren } from "react";\nimport { useMenu, useBreadcrumb } from "@refinedev/core";\nimport { NavLink, Link } from "react-router-dom";\n\nconst Breadcrumb = () => {\n    const { breadcrumbs } = useBreadcrumb();\n\n    return (\n        <ul className="breadcrumb">\n            {breadcrumbs.map((breadcrumb) => (\n                <li key={`breadcrumb-${breadcrumb.label}`}>\n                    {breadcrumb.href ? (\n                        <Link to={breadcrumb.href}>{breadcrumb.label}</Link>\n                    ) : (\n                        <span>{breadcrumb.label}</span>\n                    )}\n                </li>\n            ))}\n        </ul>\n    );\n};\n\nconst Menu = () => {\n    const { menuItems } = useMenu();\n\n    return (\n        <nav className="menu">\n            <ul>\n                {menuItems.map((item) => (\n                    <li key={item.key}>\n                        <NavLink to={item.route}>{item.label}</NavLink>\n                    </li>\n                ))}\n            </ul>\n        </nav>\n    );\n};\n\nconst Layout: React.FC<PropsWithChildren> = ({ children }) => {\n    return (\n        <div className="layout">\n            <Menu />\n            <div className="content">\n                <Breadcrumb />\n                <div>{children}</div>\n            </div>\n        </div>\n    );\n};\n')))}m.isMDXComponent=!0},35449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>c,toc:()=>h});n(67294);var r=n(3905),o=n(53787),a=n(50551),s=n(70151);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const d={id:"generate-crud-pages",title:"4. Generating CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}},u=void 0,c={unversionedId:"tutorial/getting-started/headless/generate-crud-pages",id:"tutorial/getting-started/headless/generate-crud-pages",title:"4. Generating CRUD pages automatically with Inferencer",description:"Inferencer",source:"@site/docs/tutorial/1-getting-started/headless/3-generate-crud-pages.md",sourceDirName:"tutorial/1-getting-started/headless",slug:"/tutorial/getting-started/headless/generate-crud-pages",permalink:"/docs/tutorial/getting-started/headless/generate-crud-pages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/1-getting-started/headless/3-generate-crud-pages.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1694048685,formattedLastUpdatedAt:"Sep 7, 2023",sidebarPosition:3,frontMatter:{id:"generate-crud-pages",title:"4. Generating CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}}},m={},h=[{value:"Inferencer",id:"inferencer",level:2},{value:"Why use Inferencer?",id:"why-use-inferencer",level:4},{value:"Learn Inferencer",id:"learn-inferencer",level:4},{value:"How to use Inferencer",id:"how-to-use-inferencer",level:2},{value:"Preview the auto-generated pages",id:"preview-the-auto-generated-pages",level:2},{value:"List Page",id:"list-page",level:3},{value:"Create Page",id:"create-page",level:3},{value:"Edit Page",id:"edit-page",level:3},{value:"Show Page",id:"show-page",level:3}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},f=g("Checklist"),b=g("ChecklistItem"),v={toc:h};function k(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},v,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.default,{mdxType:"SharedComponents"}),(0,r.kt)("h2",{id:"inferencer"},"Inferencer"),(0,r.kt)("p",null,"Inferencer is a powerful tool in the ",(0,r.kt)("strong",{parentName:"p"},"refine")," ecosystem that helps developers quickly generate CRUD (create, read, update, delete) pages for their data model. It analyzes your data model based on the resource scheme and automatically creates the pages with the required forms and tables for CRUD operations."),(0,r.kt)("h4",{id:"why-use-inferencer"},"Why use Inferencer?"),(0,r.kt)("p",null,"There are several benefits to using Inferencer:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The goal of Inferencer is to reduce the amount of time spent on creating views for resources by generating the code automatically. This can save developers a significant amount of time and effort, especially on large projects with many resources.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Code generated by Inferencer is also easy to customize. Instead of starting from scratch, you can use the auto-generated code as a starting point and make changes to it according to your needs. This allows you to quickly iterate and get your project up and running faster.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using Inferencer can also help you avoid common mistakes that can arise when building CRUD pages manually. This can help you avoid bugs and other issues that can arise during development."))),(0,r.kt)("p",null,"Overall, using Inferencer will greatly speed up development time and reduce the amount of code that needs to be written manually. It helps ensure that your CRUD pages are consistent and adhere to best practices, allowing you to focus on more complex tasks instead."),(0,r.kt)("h4",{id:"learn-inferencer"},"Learn Inferencer"),(0,r.kt)("p",null,"You can Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/inferencer"},"how Inferencer works")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/inferencer/"},"how to use it with Headless Mode")," in our documents."),(0,r.kt)("h2",{id:"how-to-use-inferencer"},"How to use Inferencer"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," package provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"<HeadlessInferencer/>")," component, which can be imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/headless"),". It is used to generate CRUD pages based on your API response."),(0,r.kt)("p",null,"Before we start using Inferencer, we need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/react-hook-form")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table")," packages to our project. Since these packages are used by Inferencer to generate forms and tables, they need to be installed in our project."),(0,r.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @refinedev/react-table @refinedev/react-hook-form\n"))),(0,r.kt)(a.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm i @refinedev/react-table @refinedev/react-hook-form\n"))),(0,r.kt)(a.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @refinedev/react-table @refinedev/react-hook-form\n")))),(0,r.kt)("p",null,"Then, we need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"<HeadlessInferencer/>")," component which is used by passing appropriate values to the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component in ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," as shown below:"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," prop will be explained in detail in ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-resources/index"},"Unit 4"),". For now, you can assume that the resource is a collection of data on your API used in the app.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";\n//highlight-next-line\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\n\nimport { Layout } from "./components/layout";\n\nimport "./App.css";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: "/blog-posts",\n                        show: "/blog-posts/show/:id",\n                        create: "/blog-posts/create",\n                        edit: "/blog-posts/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Layout>\n                                <Outlet />\n                            </Layout>\n                        }\n                    >\n                        <Route index element={<NavigateToResource resource="blog_posts" />} />\n                        {/* highlight-start */}\n                        <Route path="blog-posts">\n                            <Route index element={<HeadlessInferencer />} />\n                            <Route\n                                path="show/:id"\n                                element={<HeadlessInferencer />}\n                            />\n                            <Route\n                                path="edit/:id"\n                                element={<HeadlessInferencer />}\n                            />\n                            <Route\n                                path="create"\n                                element={<HeadlessInferencer />}\n                            />\n                        </Route>\n                        {/* highlight-end */}\n                    </Route>\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\nexport default App;\n')),(0,r.kt)("p",null,"At this point, ",(0,r.kt)("strong",{parentName:"p"},"refine")," will automatically generate the CRUD pages for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource based on the API response."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When you create a headless ",(0,r.kt)("strong",{parentName:"p"},"refine")," project, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Layout")," component is automatically created under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/components")," folder. This component is used to wrap the pages generated by Inferencer. You can learn more about the layout components in ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/headless/layout-menu-breadcrumb"},"Unit 5.7"),".")),(0,r.kt)("h2",{id:"preview-the-auto-generated-pages"},"Preview the auto-generated pages"),(0,r.kt)("p",null,"So far we have added complete CRUD pages by utilizing the Inferencer feature to the project. Let's take a look at the auto-generated CRUD pages that Inferencer handles for us."),(0,r.kt)("p",null,"Before we start, let's understand the API that we will be using in this tutorial. We will be using the ",(0,r.kt)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev"},"https://api.fake-rest.refine.dev")," API. This API is created by the ",(0,r.kt)("strong",{parentName:"p"},"refine")," team and is used for demo purposes. It is a simple REST API that contains some resources like ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"categories"),", etc."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"How ",(0,r.kt)("strong",{parentName:"p"},"refine")," apps communicate with the API via the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," will be explained in ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/index"},"Unit 3"),".")),(0,r.kt)("p",null,'You can view the code generated by Inferencer by clicking the "Show Code" button in the right corner of the live preview below.'),(0,r.kt)("h3",{id:"list-page"},"List Page"),(0,r.kt)("p",null,"To preview the list page, go back to your browser and go to ",(0,r.kt)("a",{href:"localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000"),"."),(0,r.kt)("p",null,"You should see the list page for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When you navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000"),", ",(0,r.kt)("strong",{parentName:"p"},"refine")," will redirect you to the initial resource's list page registered to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component, like ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000/blog-posts"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts"},'setInitialRoutes(["/blog-posts"]);\n\nimport { Refine } from "@refinedev/core";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: "/blog-posts",\n                        show: "/blog-posts/show/:id",\n                        create: "/blog-posts/create",\n                        edit: "/blog-posts/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Layout>\n                                <Outlet />\n                            </Layout>\n                        }\n                    >\n                        <Route index element={<NavigateToResource resource="blog_posts" />} />\n                        <Route path="blog-posts">\n                            <Route index element={<HeadlessInferencer />} />\n                            <Route\n                                path="show/:id"\n                                element={<HeadlessInferencer />}\n                            />\n                            <Route\n                                path="edit/:id"\n                                element={<HeadlessInferencer />}\n                            />\n                            <Route\n                                path="create"\n                                element={<HeadlessInferencer />}\n                            />\n                        </Route>\n                    </Route>\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nrender(<App />);\n')),(0,r.kt)("h3",{id:"create-page"},"Create Page"),(0,r.kt)("p",null,"To preview the create page, go back to your browser and go to ",(0,r.kt)("a",{href:"localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create"),' or click the "Create" button on the list page.'),(0,r.kt)("p",null,"You should see the create page for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: "/blog-posts",\n                        show: "/blog-posts/show/:id",\n                        create: "/blog-posts/create",\n                        edit: "/blog-posts/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Layout>\n                                <Outlet />\n                            </Layout>\n                        }\n                    >\n                        <Route index element={<NavigateToResource resource="blog_posts" />} />\n                        <Route path="blog-posts">\n                            <Route index element={<HeadlessInferencer />} />\n                            <Route\n                                path="show/:id"\n                                element={<HeadlessInferencer />}\n                            />\n                            <Route\n                                path="edit/:id"\n                                element={<HeadlessInferencer />}\n                            />\n                            <Route\n                                path="create"\n                                element={<HeadlessInferencer />}\n                            />\n                        </Route>\n                    </Route>\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\nrender(<App />);\n')),(0,r.kt)("h3",{id:"edit-page"},"Edit Page"),(0,r.kt)("p",null,"To preview the edit page, go back to your browser and go to ",(0,r.kt)("a",{href:"localhost:3000/blog-posts/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/edit/123"),' or click the "Edit" button on the record in the list page.'),(0,r.kt)("p",null,"You should see the edit page for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/edit/123"},'setInitialRoutes(["/blog-posts/edit/123"]);\n\nimport { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: "/blog-posts",\n                        show: "/blog-posts/show/:id",\n                        create: "/blog-posts/create",\n                        edit: "/blog-posts/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Layout>\n                                <Outlet />\n                            </Layout>\n                        }\n                    >\n                        <Route index element={<NavigateToResource resource="blog_posts" />} />\n                        <Route path="blog-posts">\n                            <Route index element={<HeadlessInferencer />} />\n                            <Route\n                                path="show/:id"\n                                element={<HeadlessInferencer />}\n                            />\n                            <Route\n                                path="edit/:id"\n                                element={<HeadlessInferencer />}\n                            />\n                            <Route\n                                path="create"\n                                element={<HeadlessInferencer />}\n                            />\n                        </Route>\n                    </Route>\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\nrender(<App />);\n')),(0,r.kt)("h3",{id:"show-page"},"Show Page"),(0,r.kt)("p",null,"To preview the show page, go back to your browser and go to ",(0,r.kt)("a",{href:"localhost:3000/blog-posts/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/show/123"),' or click the "Show" button on the record in the list page.'),(0,r.kt)("p",null,"You should see the show page for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/show/123"},'setInitialRoutes(["/blog-posts/show/123"]);\n\nimport { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";\n\nimport "./App.css";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: "/blog-posts",\n                        show: "/blog-posts/show/:id",\n                        create: "/blog-posts/create",\n                        edit: "/blog-posts/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Layout>\n                                <Outlet />\n                            </Layout>\n                        }\n                    >\n                        <Route index element={<NavigateToResource resource="blog_posts" />} />\n                        <Route path="blog-posts">\n                            <Route index element={<HeadlessInferencer />} />\n                            <Route\n                                path="show/:id"\n                                element={<HeadlessInferencer />}\n                            />\n                            <Route\n                                path="edit/:id"\n                                element={<HeadlessInferencer />}\n                            />\n                            <Route\n                                path="create"\n                                element={<HeadlessInferencer />}\n                            />\n                        </Route>\n                    </Route>\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\nrender(<App />);\n')),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"You will learn how to create CRUD pages manually using the code generated by Inferencer as a reference in ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/headless/index"},"Unit 5"),"."),(0,r.kt)(f,{mdxType:"Checklist"},(0,r.kt)(b,{id:"generated-headless-crud-pages",mdxType:"ChecklistItem"},"I understood what Inferencer is, how it works and how it can make my work easier."),(0,r.kt)(b,{id:"generated-headless-crud-pages-2",mdxType:"ChecklistItem"},(0,r.kt)("p",null,"I have inspected the auto-generated ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"edit"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," pages."))))}k.isMDXComponent=!0}}]);