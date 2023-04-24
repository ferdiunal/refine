"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={},a=void 0,s={unversionedId:"api-reference/antd/hooks/list/filtering-live-preview",id:"api-reference/antd/hooks/list/filtering-live-preview",title:"filtering-live-preview",description:"",source:"@site/docs/api-reference/antd/hooks/list/filtering-live-preview.md",sourceDirName:"api-reference/antd/hooks/list",slug:"/api-reference/antd/hooks/list/filtering-live-preview",permalink:"/docs/api-reference/antd/hooks/list/filtering-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/hooks/list/filtering-live-preview.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1682357301,formattedLastUpdatedAt:"Apr 24, 2023",frontMatter:{}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=420px",live:!0,url:"http://localhost:3000/products",previewHeight:"420px"},'setInitialRoutes(["/products"]);\n\n// visible-block-start\nimport { useSimpleList } from "@refinedev/antd";\nimport { Typography, List, Input } from "antd";\n\nconst { Text } = Typography;\n\ninterface IProduct {\n    id: number;\n    name: string;\n    description: string;\n    price: string;\n}\n\nconst ProductList: React.FC = () => {\n    const { listProps, setFilters } = useSimpleList<IProduct>({\n        filters: {\n            initial: [\n                {\n                    field: "name",\n                    operator: "contains",\n                    value: "Awesome",\n                },\n            ],\n        },\n    });\n\n    return (\n        <div>\n            <Input.Search\n                placeholder="Search by name"\n                onChange={(e) => {\n                    setFilters([\n                        {\n                            field: "name",\n                            operator: "contains",\n                            value: e.target.value,\n                        },\n                    ]);\n                }}\n            />\n            <List {...listProps} renderItem={renderItem} />\n        </div>\n    );\n};\n\nconst renderItem = (item: IProduct) => {\n    const { id, name, description, price } = item;\n\n    return (\n        <List.Item actions={[<Text key={id}>{price}</Text>]}>\n            <List.Item.Meta title={name} description={description} />\n        </List.Item>\n    );\n};\n// visible-block-end\n\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            list: ProductList,\n        },\n    ],\n});\n\nrender(<RefineAntdDemo />);\n')))}u.isMDXComponent=!0}}]);