"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8040],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69398:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"useBreadcrumb",title:"useBreadcrumb",source:"packages/core/src/hooks/breadcrumb"},i=void 0,l={unversionedId:"api-reference/core/hooks/useBreadcrumb",id:"version-3.xx.xx/api-reference/core/hooks/useBreadcrumb",title:"useBreadcrumb",description:"The feature won first place with the joint votes of our team members in a May 2022 internal hackathon!",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useBreadcrumb.md",sourceDirName:"api-reference/core/hooks",slug:"/api-reference/core/hooks/useBreadcrumb",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useBreadcrumb",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useBreadcrumb.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1679379351,formattedLastUpdatedAt:"Mar 21, 2023",frontMatter:{id:"useBreadcrumb",title:"useBreadcrumb",source:"packages/core/src/hooks/breadcrumb"},sidebar:"someSidebar",previous:{title:"useLogList",permalink:"/docs/3.xx.xx/api-reference/core/hooks/audit-log/useLogList"},next:{title:"useApiUrl",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useApiUrl"}},p={},s=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Resource",id:"resource",level:3},{value:"Nested resource",id:"nested-resource",level:3},{value:"i18n support",id:"i18n-support",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Return values",id:"return-values",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Congratulations \ud83e\udd47",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The feature won first place with the joint votes of our team members in a May 2022 internal hackathon!"),(0,a.kt)("p",{parentName:"admonition"},"Congratulations ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/salihozdemir"},"@salihozdemir"),"! It was great seeing your project take first place! We're all very proud of you. Keep up the good work and don't forget to have fun while working here \ud83c\udf89")),(0,a.kt)("p",null,"It is a hook that returns ",(0,a.kt)("inlineCode",{parentName:"p"},"breadcrumbs")," to create breadcrumbs for the current page. The ",(0,a.kt)("inlineCode",{parentName:"p"},"breadcrumbs")," is an array of objects with the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"label"),": the label of the resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"href"),": the route of the resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"icon"),": the icon of the resource.")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useBreadcrumb } from "@pankod/refine-core";\n\nexport const Breadcrumb: React.FC = () => {\n    const { breadcrumbs } = useBreadcrumb();\n\n    return (\n        <ul>\n            {breadcrumbs.map(({ label, href, icon }) => (\n                <li key={label}>\n                    {icon}\n                    {href ? <a href={href}>{label}</a> : label}\n                </li>\n            ))}\n        </ul>\n    );\n};\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"resource"},"Resource"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"breadcrumbs")," are created with your resource definitions. For example, if you have a resource with the following definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'[\n    {\n        name: "posts",\n        icon: <div>icon</div>,\n        list: () => <div>List Page</div>,\n        create: () => <div>Create Page</div>,\n    },\n];\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," page of the ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," resource, the breadcrumbs look like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'[\n    {\n        label: "Posts",\n        href: "/posts",\n        icon: <div>icon</div>,\n    },\n];\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," page of the ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," resource, the breadcrumbs look like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'[\n    {\n        label: "Posts",\n        href: "/posts",\n        icon: <div>icon</div>,\n    },\n    { label: "Create" },\n];\n')))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If the resource has no ",(0,a.kt)("inlineCode",{parentName:"p"},"icon")," property, the ",(0,a.kt)("inlineCode",{parentName:"p"},"icon")," property of the breadcrumbs is ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),". Likewise, if the resource's list page is not found, the ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," property of the breadcrumbs is ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),".")),(0,a.kt)("h3",{id:"nested-resource"},"Nested resource"),(0,a.kt)("p",null,"If you have a nested resource definition as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'[\n    {\n        name: "cms",\n    },\n    {\n        name: "users",\n        parentName: "cms",\n        list: () => <div>List Page</div>,\n        create: () => <div>Create Page</div>,\n    },\n];\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," page of the ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," resource, the breadcrumbs look like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'[\n    { label: "Cms" },\n    {\n        label: "Users",\n        href: "/users",\n    },\n];\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," page of the ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," resource, the breadcrumbs look like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'[\n    { label: "Cms" },\n    {\n        label: "Users",\n        href: "/users",\n    },\n    { label: "Create" },\n];\n')))),(0,a.kt)("h2",{id:"i18n-support"},"i18n support"),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," definition has a ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," property, ",(0,a.kt)("inlineCode",{parentName:"p"},"useBreadcrumbs")," uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," property. Otherwise, the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," is used. Likewise, if the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," definition has ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," property, ",(0,a.kt)("inlineCode",{parentName:"p"},"useBreadcrumbs")," uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," property. Otherwise, the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," is used."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If a ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," is not provided in your ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," resource, ",(0,a.kt)("inlineCode",{parentName:"p"},"useBreadcrumb")," uses the ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/translate/useTranslate"},(0,a.kt)("inlineCode",{parentName:"a"},"useTranslate"))," hook to translate the names."),(0,a.kt)("p",{parentName:"admonition"},"For CRUD operations (",(0,a.kt)("inlineCode",{parentName:"p"},"list"),",",(0,a.kt)("inlineCode",{parentName:"p"},"create"),",",(0,a.kt)("inlineCode",{parentName:"p"},"edit"),",",(0,a.kt)("inlineCode",{parentName:"p"},"show"),") the ",(0,a.kt)("inlineCode",{parentName:"p"},"useBreadcrumb")," uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"actions")," key to translate key ",(0,a.kt)("inlineCode",{parentName:"p"},"translate(`actions.${action}`)"),"."),(0,a.kt)("p",{parentName:"admonition"},"For example; ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," action should look like : ",(0,a.kt)("inlineCode",{parentName:"p"},"translate(`actions.create`)"))),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"return-values"},"Return values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"breadcrumbs"),(0,a.kt)("td",{parentName:"tr",align:null},"The breadcrumbs array"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"BreadcrumbsType"),"*")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"BreadcrumbsType")),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type BreadcrumbsType = {\n    label: string;\n    href?: string;\n    icon?: React.ReactNode;\n};\n"))))}c.isMDXComponent=!0}}]);