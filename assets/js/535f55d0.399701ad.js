"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,v=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},a=void 0,c={unversionedId:"api-reference/core/hooks/useSelect/on-search-live-preview",id:"version-3.xx.xx/api-reference/core/hooks/useSelect/on-search-live-preview",title:"on-search-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useSelect/on-search-live-preview.md",sourceDirName:"api-reference/core/hooks/useSelect",slug:"/api-reference/core/hooks/useSelect/on-search-live-preview",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useSelect/on-search-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useSelect/on-search-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1685541267,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=200px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"200px",hideCode:!0},'setInitialRoutes(["/posts/create"]);\n// visible-block-start\nimport { useSelect } from "@pankod/refine-core";\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\nconst ProductCreate: React.FC = () => {\n    const { options, onSearch } = useSelect<ICategory>({\n        resource: "categories",\n        // highlight-start\n        onSearch: (value) => [\n            {\n                field: "title",\n                operator: "contains",\n                value,\n            }\n        ]\n        // highlight-end\n    });\n\n    return (\n        <>\n            <p>\n                Filter:\n                <input onChange={(e) => onSearch(e.target.value)} />\n            </p>\n\n            <select>\n                {options?.map((option) => (\n                    <option key={option.value} value={option.value}>\n                        {option.label}\n                    </option>\n                ))}\n            </select>\n        </>\n    );\n};\n// visible-block-end\nsetRefineProps({\n    resources: [\n        {\n            name: "posts",\n            create: ProductCreate,\n        },\n    ],\n});\nrender(<RefineHeadlessDemo />);\n')))}u.isMDXComponent=!0}}]);