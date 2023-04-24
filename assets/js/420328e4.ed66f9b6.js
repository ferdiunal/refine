"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38156],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(y,i(i({ref:t},s),{},{components:r})):o.createElement(y,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5363:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={id:"keycloak",title:"Keycloak","example-tags":["antd","auth-provider","keycloak"]},i=void 0,p={unversionedId:"examples/auth-provider/keycloak",id:"version-3.xx.xx/examples/auth-provider/keycloak",title:"Keycloak",description:"Keycloak is a modular, API-first authentication and authorization service that you may use to add authentication and authorization to your apps. In this example, you'll see how to use Keycloak Login with refine.",source:"@site/versioned_docs/version-3.xx.xx/examples/auth-provider/keycloak.md",sourceDirName:"examples/auth-provider",slug:"/examples/auth-provider/keycloak",permalink:"/docs/3.xx.xx/examples/auth-provider/keycloak",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/auth-provider/keycloak.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1682357301,formattedLastUpdatedAt:"Apr 24, 2023",frontMatter:{id:"keycloak",title:"Keycloak","example-tags":["antd","auth-provider","keycloak"]},sidebar:"someSidebar",previous:{title:"Google Auth",permalink:"/docs/3.xx.xx/examples/auth-provider/google-auth"},next:{title:"OTP Login",permalink:"/docs/3.xx.xx/examples/auth-provider/otpLogin"}},l={},c=[],s=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var u;const d={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.keycloak.org"},"Keycloak")," is a modular, API-first authentication and authorization service that you may use to add authentication and authorization to your apps. In this example, you'll see how to use Keycloak Login with ",(0,n.kt)("strong",{parentName:"p"},"refine"),"."),(0,n.kt)("admonition",{title:"Demo Credentials",type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Username"),": refine\n",(0,n.kt)("strong",{parentName:"p"},"Password"),": refine")),(0,n.kt)(s,{path:"auth-keycloak",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);