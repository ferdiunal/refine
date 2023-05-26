"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={id:"useSelect",title:"useSelect","example-title":"Ant Design's useSelect hook","example-tags":["antd"]},i=void 0,s={unversionedId:"examples/field/useSelect",id:"version-3.xx.xx/examples/field/useSelect",title:"useSelect",description:"When records in a resource need to be used as select options, the refine useSelect hook allows you to handle an Ant Design Select component. Also this hook includes out-of-the-box features such as fetchSize, sorting, and filtering. You may examine the code below to learn how to create and manage Select component with useSelect.",source:"@site/versioned_docs/version-3.xx.xx/examples/field/useSelect.md",sourceDirName:"examples/field",slug:"/examples/field/useSelect",permalink:"/docs/3.xx.xx/examples/field/useSelect",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/field/useSelect.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1685092394,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{id:"useSelect",title:"useSelect","example-title":"Ant Design's useSelect hook","example-tags":["antd"]},sidebar:"someSidebar",previous:{title:"useRadioGroup",permalink:"/docs/3.xx.xx/examples/field/useRadioGroup"},next:{title:"Custom Form Validation",permalink:"/docs/3.xx.xx/examples/form/antd/custom-form-validation"}},l={},c=[],p=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When records in a resource need to be used as select options, the ",(0,r.kt)("strong",{parentName:"p"},"refine")," ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," hook allows you to handle an Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/select/"},"Select")," component. Also this hook includes out-of-the-box features such as fetchSize, sorting, and filtering. You may examine the code below to learn how to create and manage Select component with ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/field/useSelect/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"refine")," useSelect hook documentation for more information. \u2192")),(0,r.kt)(p,{path:"field-antd-use-select-basic",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);