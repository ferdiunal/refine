"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},21837:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={id:"markdown",title:"Markdown",swizzle:!0},a=void 0,s={unversionedId:"api-reference/mui/components/fields/markdown",id:"version-3.xx.xx/api-reference/mui/components/fields/markdown",title:"Markdown",description:"This field lets you display markdown content. It supports GitHub Flavored Markdown.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mui/components/fields/markdown.md",sourceDirName:"api-reference/mui/components/fields",slug:"/api-reference/mui/components/fields/markdown",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/markdown",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mui/components/fields/markdown.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1681996526,formattedLastUpdatedAt:"Apr 20, 2023",frontMatter:{id:"markdown",title:"Markdown",swizzle:!0},sidebar:"someSidebar",previous:{title:"File",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/file"},next:{title:"Number",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/number"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Example",id:"example",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},c=d("PropsTable"),m=d("CodeSandboxExample"),u={toc:p};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This field lets you display markdown content. It supports ",(0,o.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GitHub Flavored Markdown"),"."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Let's see how we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"<MarkdownField>")," in a show page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'// visible-block-start\nimport {\n    useDataGrid,\n    DataGrid,\n    GridColumns,\n    List,\n    // highlight-next-line\n    MarkdownField,\n} from "@pankod/refine-mui";\n\nconst columns: GridColumns = [\n    { field: "id", headerName: "ID", type: "number" },\n    { field: "title", headerName: "Title", minWidth: 100, flex: 1 },\n    {\n        field: "content",\n        headerName: "Content",\n        renderCell: function render({ row }) {\n            // highlight-start\n            return (\n                <MarkdownField value={row?.content} />\n            );\n            // highlight-end\n        },\n        minWidth: 100,\n        flex: 2,\n    },\n];\n\nconst PostsList: React.FC = () => {\n    const { dataGridProps } = useDataGrid<IPost>();\n\n    return (\n        <List>\n            <DataGrid {...dataGridProps} columns={columns} autoHeight />\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n    content: string;\n}\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        resources={[\n            {\n                name: "posts",\n                list: PostsList,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)(c,{module:"@pankod/refine-antd/MarkdownField","value-description":"Markdown data to render",mdxType:"PropsTable"}),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(m,{path:"input-custom",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);