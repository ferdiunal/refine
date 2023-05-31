"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"refresh-button",title:"Refresh",swizzle:!0},a=void 0,s={unversionedId:"api-reference/mui/components/buttons/refresh-button",id:"api-reference/mui/components/buttons/refresh-button",title:"Refresh",description:"` uses Material UI  component to update the data shown on the page via the useOne method provided by your dataProvider`.",source:"@site/docs/api-reference/mui/components/buttons/refresh.md",sourceDirName:"api-reference/mui/components/buttons",slug:"/api-reference/mui/components/buttons/refresh-button",permalink:"/docs/api-reference/mui/components/buttons/refresh-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/buttons/refresh.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1685541267,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{id:"refresh-button",title:"Refresh",swizzle:!0},sidebar:"someSidebar",previous:{title:"List",permalink:"/docs/api-reference/mui/components/buttons/list-button"},next:{title:"Save",permalink:"/docs/api-reference/mui/components/buttons/save-button"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<del><code>resourceNameOrRouteName</code></del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=u("PropTag"),c=u("PropsTable"),m={toc:l};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," uses Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," component to update the data shown on the page via the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useOne/"},(0,o.kt)("inlineCode",{parentName:"a"},"useOne"))," method provided by your ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"dataProvider")),"."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'// visible-block-start\nimport { useShow } from "@refinedev/core";\n// highlight-next-line\nimport { Show, RefreshButton } from "@refinedev/mui";\nimport { Typography, Stack } from "@mui/material";\n\nconst PostShow: React.FC = () => {\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        <Show\n            isLoading={isLoading}\n            headerButtons={\n                // highlight-start\n                <RefreshButton />\n                // highlight-end\n            }\n        >\n            <Typography fontWeight="bold">Id</Typography>\n            <Typography>{record?.id}</Typography>\n            <Typography fontWeight="bold">Title</Typography>\n            <Typography>{record?.title}</Typography>\n        </Show>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts/show/123"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <RefineMui.List>\n                        <p>Rest of the page here...</p>\n                    </RefineMui.List>\n                ),\n                show: PostShow,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"recorditemid"},(0,o.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recordItemId")," allows us to manage which data is going to be refreshed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { RefreshButton } from "@refinedev/mui";\n\nconst MyRefreshComponent = () => {\n    return (\n        <RefreshButton\n            resource="posts"\n            // highlight-next-line\n            recordItemId="1"\n        />\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n            },\n        ]}\n        DashboardPage={MyRefreshComponent}\n    />,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useOne/"},(0,o.kt)("inlineCode",{parentName:"a"},"useOne")),' method and then fetches the record whose resource is "post" and whose id is "1".'),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," component reads the id information from the route by default.")),(0,o.kt)("h3",{id:"resource"},(0,o.kt)("inlineCode",{parentName:"h3"},"resource")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"resource")," allows us to manage which resource is going to be refreshed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { RefreshButton } from "@refinedev/mui";\n\nconst MyRefreshComponent = () => {\n    return (\n        <RefreshButton\n            recordItemId="1"\n            // highlight-next-line\n            resource="posts"\n        />\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n            },\n        ]}\n        DashboardPage={MyRefreshComponent}\n    />,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useOne/"},(0,o.kt)("inlineCode",{parentName:"a"},"useOne")),' method and then fetches the record whose resource is "categories" and whose id is "2".'),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," component reads the resource name from the route by default.")),(0,o.kt)("h3",{id:"hidetext"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,o.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { RefreshButton } from "@refinedev/mui";\n\nconst MyRefreshComponent = () => {\n    return (\n        <RefreshButton\n            // highlight-next-line\n            hideText\n            resourceNameOrRouteName="posts"\n            recordItemId="1"\n        />\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n            },\n        ]}\n        DashboardPage={MyRefreshComponent}\n    />,\n);\n')),(0,o.kt)("h3",{id:"resourcenameorroutename-"},(0,o.kt)("del",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"del"},"resourceNameOrRouteName"))," ",(0,o.kt)(d,{deprecated:!0,mdxType:"PropTag"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," prop is deprecated. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," allows us to manage which resource is going to be refreshed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { RefreshButton } from "@refinedev/mui";\n\nconst MyRefreshComponent = () => {\n    return (\n        <RefreshButton\n            recordItemId="1"\n            // highlight-next-line\n            resourceNameOrRouteName="posts"\n        />\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n            },\n        ]}\n        DashboardPage={MyRefreshComponent}\n    />,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useOne/"},(0,o.kt)("inlineCode",{parentName:"a"},"useOne")),' method and then fetches the record whose resource is "categories" and whose id is "2".'),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," component reads the resource name from the route by default.")),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(c,{module:"@refinedev/mui/RefreshButton",mdxType:"PropsTable"}),(0,o.kt)("admonition",{title:"External Props",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/button/"},"Button"),".")))}h.isMDXComponent=!0}}]);