"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35466],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23728:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>s});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={id:"mui-custom-layout",title:"Layout",swizzle:!0},c=void 0,l={unversionedId:"api-reference/mui/customization/mui-custom-layout",id:"version-3.xx.xx/api-reference/mui/customization/mui-custom-layout",title:"Layout",description:"You can create custom layouts using ` and ` components.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mui/customization/layout.md",sourceDirName:"api-reference/mui/customization",slug:"/api-reference/mui/customization/mui-custom-layout",permalink:"/docs/3.xx.xx/api-reference/mui/customization/mui-custom-layout",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mui/customization/layout.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1698245380,formattedLastUpdatedAt:"Oct 25, 2023",frontMatter:{id:"mui-custom-layout",title:"Layout",swizzle:!0},sidebar:"someSidebar",previous:{title:"Theme",permalink:"/docs/3.xx.xx/api-reference/mui/customization/mui-custom-theme"},next:{title:"Sider",permalink:"/docs/3.xx.xx/api-reference/mui/customization/mui-custom-sider"}},u={},s=[{value:"Creating a Custom Layout",id:"creating-a-custom-layout",level:2}],m={toc:s};function d(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can create custom layouts using ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," components."),(0,r.kt)("p",null,"Both of these components can accept the listed props for customization. ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>"))," being for global customization and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," being for local."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#layout"},(0,r.kt)("inlineCode",{parentName:"a"},"Layout"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#sider"},(0,r.kt)("inlineCode",{parentName:"a"},"Sider"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#footer"},(0,r.kt)("inlineCode",{parentName:"a"},"Footer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#header"},(0,r.kt)("inlineCode",{parentName:"a"},"Header"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#offlayoutarea"},(0,r.kt)("inlineCode",{parentName:"a"},"OffLayoutArea"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#title"},(0,r.kt)("inlineCode",{parentName:"a"},"Title")))),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"creating-a-custom-layout"},"Creating a Custom Layout"),(0,r.kt)("p",null,"Let's start with creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"<CustomLayout/>")," component using ",(0,r.kt)("inlineCode",{parentName:"p"},"LayoutProps")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/layout.tsx"',title:'"src/components/layout.tsx"'},'import React from "react";\nimport { LayoutProps } from "@pankod/refine-core";\n// highlight-next-line\nimport { Sider as DefaultSider, Header as DefaultHeader, Box } from "@pankod/refine-mui";\n\nexport const CustomLayout: React.FC<LayoutProps> = ({\n    Sider,\n    Header,\n    Footer,\n    OffLayoutArea,\n    children,\n}) => {\n    const SiderToRender = Sider ?? DefaultSider;\n    const HeaderToRender = Header ?? DefaultHeader;\n\n    return (\n        <Box display="flex" flexDirection="row">\n            <SiderToRender />\n            <Box\n                sx={{\n                    display: "flex",\n                    flexDirection: "column",\n                    flex: 1,\n                    minHeight: "100vh",\n                }}\n            >\n                <HeaderToRender />\n                <Box\n                    component="main"\n                    sx={{\n                        p: { xs: 1, md: 2, lg: 3 },\n                        flexGrow: 1,\n                        bgcolor: "background.default",\n                    }}\n                >\n                    {children}\n                </Box>\n                {Footer && <Footer />}\n            </Box>\n            {OffLayoutArea && <OffLayoutArea />}\n        </Box>\n    );\n};\n')),(0,r.kt)("p",null,"We can now pass ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomLayout")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"Layout")," prop to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport { ReadyPage } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { PostList } from "pages/posts";\n// highlight-next-line\nimport { CustomLayout } from "components";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            // highlight-start\n            Layout={CustomLayout}\n            // highlight-end\n            ReadyPage={ReadyPage}\n            // ...\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("p",null,"After this, ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomLayout")," instead of it's default ",(0,r.kt)("inlineCode",{parentName:"p"},"Layout")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly disableScroll",live:!0,previewOnly:!0,disableScroll:!0},'import React from "react";\nimport { Refine, LayoutProps } from "@pankod/refine-core";\nimport { ReadyPage, Sider as DefaultSider, Header as DefaultHeader, Box } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport {\n    useDataGrid,\n    DataGrid,\n    GridColumns,\n    List,\n    TextField,\n} from "@pankod/refine-mui";\n\nconst columns: GridColumns = [\n    { field: "id", headerName: "ID", type: "number" },\n    {\n        field: "title",\n        headerName: "Title",\n        minWidth: 100,\n        flex: 1,\n    },\n    {\n        field: "slug",\n        headerName: "Slug",\n        minWidth: 100,\n        flex: 1,\n    }\n];\n\nconst PostsList: React.FC = () => {\n    const { dataGridProps } = useDataGrid<IPost>();\n\n    return (\n        <List>\n            <DataGrid {...dataGridProps} columns={columns} autoHeight />\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n\n\nconst Wrapper = ({children}) => {\n    return (\n        <RefineMui.ThemeProvider theme={RefineMui.LightTheme}>\n            <RefineMui.CssBaseline />\n            <RefineMui.GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            {children}\n        </RefineMui.ThemeProvider>\n    )\n}\n\nconst CustomLayout: React.FC<LayoutProps> = ({\n    Sider,\n    Header,\n    Footer,\n    OffLayoutArea,\n    children,\n}) => {\n    const SiderToRender = Sider ?? DefaultSider;\n    const HeaderToRender = Header ?? DefaultHeader;\n\n    return (\n        <Box display="flex" flexDirection="row">\n            <SiderToRender />\n            <Box\n                sx={{\n                    display: "flex",\n                    flexDirection: "column",\n                    flex: 1,\n                    minHeight: "100vh",\n                }}\n            >\n                <HeaderToRender />\n                <Box\n                    component="main"\n                    sx={{\n                        p: { xs: 1, md: 2, lg: 3 },\n                        flexGrow: 1,\n                        bgcolor: "background.default",\n                    }}\n                >\n                    {children}\n                </Box>\n                {Footer && <Footer />}\n            </Box>\n            {OffLayoutArea && <OffLayoutArea />}\n        </Box>\n    );\n};\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            Layout={CustomLayout}\n            ReadyPage={ReadyPage}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostsList,\n                }\n            ]}\n        />\n    );\n};\n\nrender(<Wrapper><App /></Wrapper>);\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This example demonstrated how to configure a global layout. To learn how to use global layout in custom pages and make local modifications per page, ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},"refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")," docs. ","\u2192"))))}d.isMDXComponent=!0}}]);