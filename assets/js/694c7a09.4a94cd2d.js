"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36695],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},s=void 0,i={unversionedId:"api-reference/core/hooks/translate/useTranslate",id:"version-3.xx.xx/api-reference/core/hooks/translate/useTranslate",title:"useTranslate",description:"If you need to translate the texts in your own components, refine provides the useTranslate hook, It returns the translate method from i18nProvider under the hood.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/translate/useTranslate.md",sourceDirName:"api-reference/core/hooks/translate",slug:"/api-reference/core/hooks/translate/useTranslate",permalink:"/docs/3.xx.xx/api-reference/core/hooks/translate/useTranslate",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/translate/useTranslate.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1685092394,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"someSidebar",previous:{title:"useSetLocale",permalink:"/docs/3.xx.xx/api-reference/core/hooks/translate/useSetLocale"},next:{title:"useModal",permalink:"/docs/3.xx.xx/api-reference/core/hooks/ui/useModal"}},c={},l=[{value:"Usage",id:"usage",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you need to translate the texts in your own components, refine provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTranslate")," hook, It returns the translate method from ",(0,o.kt)("inlineCode",{parentName:"p"},"i18nProvider")," under the hood."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"You can use the features of your own i18n library for translation in your own components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTranslate } from "@pankod/refine-core";\n\nexport const MyComponent = () => {\n    const translate = useTranslate();\n\n    return <button>{translate("my.translate.text")}</button>;\n};\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,o.kt)("inlineCode",{parentName:"p"},"i18nProvider")," is provided.")))}p.isMDXComponent=!0}}]);