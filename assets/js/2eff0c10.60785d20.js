"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,m=s["".concat(l,".").concat(f)]||s[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},43390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"authenticated",title:"<Authenticated>",sidebar_label:"<Authenticated>"},l=void 0,p={unversionedId:"api-reference/core/components/auth/authenticated",id:"api-reference/core/components/auth/authenticated",title:"<Authenticated>",description:"` is the component form of useIsAuthenticated`.",source:"@site/docs/api-reference/core/components/auth/authenticated.md",sourceDirName:"api-reference/core/components/auth",slug:"/api-reference/core/components/auth/authenticated",permalink:"/docs/api-reference/core/components/auth/authenticated",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/components/auth/authenticated.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1695839482,formattedLastUpdatedAt:"Sep 27, 2023",frontMatter:{id:"authenticated",title:"<Authenticated>",sidebar_label:"<Authenticated>"},sidebar:"someSidebar",previous:{title:"Inferencer",permalink:"/docs/api-reference/core/components/inferencer"},next:{title:"<CanAccess>",permalink:"/docs/api-reference/core/components/accessControl/can-access"}},d={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>redirectOnFail</code>",id:"redirectonfail",level:3},{value:"<code>appendCurrentPathToQuery</code>",id:"appendcurrentpathtoquery",level:3},{value:"<code>fallback</code>",id:"fallback",level:3},{value:"<code>loading</code>",id:"loading",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],s=(f="PropsTable",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var f;const m={toc:u};function h(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Authenticated>")," is the component form of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/authentication/useIsAuthenticated"},(0,r.kt)("inlineCode",{parentName:"a"},"useIsAuthenticated")),"."),(0,r.kt)("p",null,"It internally uses ",(0,r.kt)("inlineCode",{parentName:"p"},"useIsAuthenticated"),"'s return values (",(0,r.kt)("inlineCode",{parentName:"p"},"data.authenticated"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data.error"),", and, ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoading"),") to provide its functionality."),(0,r.kt)("p",null,"When:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data.authenticated")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", it renders its children."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data.authenticated")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", it renders ",(0,r.kt)("a",{parentName:"li",href:"#fallback"},(0,r.kt)("inlineCode",{parentName:"a"},"fallback"))," prop if provided. Otherwise, it redirects to ",(0,r.kt)("inlineCode",{parentName:"li"},"data.redirectTo")," page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isLoading")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", it renders the ",(0,r.kt)("a",{parentName:"li",href:"#loading"},(0,r.kt)("inlineCode",{parentName:"a"},"loading"))," prop.")),(0,r.kt)("p",null,"You may want to use this component when rendering a page that requires authentication. You will be able to render a fallback or redirect to an authentication page depending on your case. ",(0,r.kt)("inlineCode",{parentName:"p"},"Authenticated")," can also be used to render a conditional content based on the user's authentication status."),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Authenticated } from "@refinedev/core";\n\nconst MyPage = () => (\n    <Authenticated>\n        <YourComponent />\n    </Authenticated>\n);\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"redirectonfail"},(0,r.kt)("inlineCode",{parentName:"h3"},"redirectOnFail")),(0,r.kt)("p",null,"The path to redirect to if the user is not logged in. If left empty, the user will be redirected to the value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectTo")," property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," function of the ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthProvider"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This property only works if the ",(0,r.kt)("inlineCode",{parentName:"p"},"fallback")," prop is not provided.")),(0,r.kt)("h3",{id:"appendcurrentpathtoquery"},(0,r.kt)("inlineCode",{parentName:"h3"},"appendCurrentPathToQuery")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the current path will be appended to the ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," query parameter. This is useful when you want to redirect the user to the page they were trying to access after they log in."),(0,r.kt)("h3",{id:"fallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"fallback")),(0,r.kt)("p",null,"Component to render if the user is not logged in. If ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", the page will be redirected to ",(0,r.kt)("inlineCode",{parentName:"p"},"/login"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Authenticated fallback={<div>You cannot access this section</div>}>\n    <YourComponent />\n</Authenticated>\n")),(0,r.kt)("h3",{id:"loading"},(0,r.kt)("inlineCode",{parentName:"h3"},"loading")),(0,r.kt)("p",null,"Component to render while checking whether the user is logged in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Authenticated loading={<div>loading...</div>}>\n    <YourComponent />\n</Authenticated>\n")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(s,{module:"@refinedev/core/Authenticated",mdxType:"PropsTable"}))}h.isMDXComponent=!0}}]);