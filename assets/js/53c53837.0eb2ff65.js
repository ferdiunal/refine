"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},50087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}},i=void 0,d={unversionedId:"tutorial/adding-crud-pages/mui/add-delete-feature",id:"version-3.xx.xx/tutorial/adding-crud-pages/mui/add-delete-feature",title:"5. Adding Delete Feature",description:"There are many ways to delete a record. In this tutorial, we will first use the `` to delete a record and then we will learn how to enable the delete feature on the show page and edit page.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mui/add-delete-feature.md",sourceDirName:"tutorial/4-adding-crud-pages/mui",slug:"/tutorial/adding-crud-pages/mui/add-delete-feature",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/mui/add-delete-feature",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mui/add-delete-feature.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1685541267,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}}},l={},p=[{value:"Adding Delete Feature to List Page",id:"adding-delete-feature-to-list-page",level:2},{value:"Enabling Delete Feature on Show Page and Edit Page",id:"enabling-delete-feature-on-show-page-and-edit-page",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=s("Checklist"),c=s("ChecklistItem"),m={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are many ways to delete a record. In this tutorial, we will first use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," to delete a record and then we will learn how to enable the delete feature on the show page and edit page."),(0,o.kt)("h2",{id:"adding-delete-feature-to-list-page"},"Adding Delete Feature to List Page"),(0,o.kt)("p",null,"Let's start by adding the delete feature to the list page. To do this, we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," component."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," is a ",(0,o.kt)("strong",{parentName:"p"},"refine")," component that is used to delete a record. When you click on the delete button, it will show a confirmation modal. If you confirm the deletion, it will delete the record."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/delete-button/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<DeleteButton/>")," documentation for more information ","\u2192")),(0,o.kt)("p",null,"To add a delete feature to the blog posts table, you can follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx")," file on your editor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Import the ",(0,o.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mui"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@pankod/refine-mui";\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," component to the ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," column of the table as shown below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    field: "actions",\n    headerName: "Actions",\n    renderCell: function render({ row }) {\n        return (\n            <>\n                <EditButton hideText recordItemId={row.id} />\n                <ShowButton hideText recordItemId={row.id} />\n                // highlight-next-line\n                <DeleteButton hideText recordItemId={row.id} />\n            </>\n        );\n    },\n    align: "center",\n    headerAlign: "center",\n    minWidth: 80,\n},\n')),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"recordItemId")," is the id of the record you want to delete."))),(0,o.kt)("p",null,"Now, you can try to delete a record from the list page. Just click on the delete button of the record you want to delete and confirm the deletion."),(0,o.kt)("h2",{id:"enabling-delete-feature-on-show-page-and-edit-page"},"Enabling Delete Feature on Show Page and Edit Page"),(0,o.kt)("p",null,"When we define a resource, we can enable the delete feature on the show page and edit page by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"canDelete")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'src="src/App.tsx"',src:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ReadyPage,\n    ErrorComponent,\n    LightTheme,\n    CssBaseline,\n    GlobalStyles,\n    ThemeProvider,\n    RefineSnackbarProvider,\n    notificationProvider,\n} from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostShow } from "pages/blog-posts/show";\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={LightTheme}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    Layout={Layout}\n                    ReadyPage={ReadyPage}\n                    catchAll={<ErrorComponent />}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: BlogPostList,\n                            edit: BlogPostEdit,\n                            show: BlogPostShow,\n                            create: BlogPostCreate,\n                            //highlight-next-line\n                            canDelete: true,\n                        },\n                    ]}\n                />\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\nexport default App;\n')),(0,o.kt)("p",null,"After setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"canDelete")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", you will see a delete button on the show page and edit page. Because we used the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Show/>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<Edit/>")," components in the show page and edit page, the delete button will be added automatically in these components."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#candelete"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>")," documentation for more information about the ",(0,o.kt)("inlineCode",{parentName:"a"},"canDelete")," property ","\u2192")),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"useDelete")," hook provided by ",(0,o.kt)("strong",{parentName:"p"},"refine")," to delete a record."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"useDelete")," documentation for more information information ","\u2192"))),(0,o.kt)("br",null),(0,o.kt)(u,{mdxType:"Checklist"},(0,o.kt)(c,{id:"add-delete-feature-mui",mdxType:"ChecklistItem"},"I added the delete feature to the list page"),(0,o.kt)(c,{id:"add-delete-feature-mui-2",mdxType:"ChecklistItem"},"I enabled the delete feature on the show page and edit page")))}f.isMDXComponent=!0}}]);