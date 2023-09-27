"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52281],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"useLogin",title:"useLogin",siderbar_label:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authentication."},l=void 0,u={unversionedId:"api-reference/core/hooks/auth/useLogin",id:"version-3.xx.xx/api-reference/core/hooks/auth/useLogin",title:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authentication.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useLogin.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useLogin",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useLogin",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useLogin.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1695839482,formattedLastUpdatedAt:"Sep 27, 2023",frontMatter:{id:"useLogin",title:"useLogin",siderbar_label:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authentication."},sidebar:"someSidebar",previous:{title:"useGetIdentity",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useGetIdentity"},next:{title:"useLogout",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useLogout"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Redirection after login",id:"redirection-after-login",level:2}],d={toc:c};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLogin")," calls ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," method from ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood.",(0,r.kt)("br",{parentName:"p"}),"\n","It authenticates the app if ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," method from ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," resolves and if it rejects shows an error notification. After successful authentication it redirects the app to root."),(0,r.kt)("p",null,"It returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation"),"."),(0,r.kt)("p",null,"Data that is resolved from ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," will be returned as the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Normally refine provides a default login page. If you prefer to use this default login page, there is no need to handle login flow manually.",(0,r.kt)("br",{parentName:"p"}),"\n","If we want to build a custom login page instead of default one that comes with refine, ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogin")," can be used like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customLoginPage"',title:'"pages/customLoginPage"'},'import { useLogin } from "@pankod/refine-core";\nimport { Form } from "@pankod/refine-antd";\n\ntype LoginVariables = {\n    username: string;\n    password: string;\n};\n\nexport const LoginPage = () => {\n    const { mutate: login } = useLogin<LoginVariables>();\n\n    const onSubmit = (values: LoginVariables) => {\n        login(values);\n    };\n\n    return <Form onFinish={onSubmit}>// rest of the login form</Form>;\n};\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogin")," can accept any kind of object for values since ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," method from ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.",(0,r.kt)("br",{parentName:"p"}),"\n","A type parameter for the values can be provided to ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogin"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: login } = useLogin<{ username: string; password: string }>();\n"))),(0,r.kt)("h2",{id:"redirection-after-login"},"Redirection after login"),(0,r.kt)("p",null,"We have 3 options for redirecting the app after login successfully ."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If promise returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," is resolved with nothing, app will be redirected to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," route by default.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A custom url can be resolved from the promise returned from the ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," method of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},"authProvider"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n    ...\n    login: () => {\n        ...\n        return Promise.resolve("/custom-url");\n    }\n}\n')),(0,r.kt)("p",null,"A custom url can be given to mutate function from the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogin")," hook if you want to redirect yourself to a certain url."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogin } from "@pankod/refine-core";\n\nconst { mutate: login } = useLogin();\n\nlogin({ redirectPath: "/custom-url" });\n')),(0,r.kt)("p",null,"Then, you can handle this url in your ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"\nconst authProvider: AuthProvider = {\n    ...\n    login: ({ redirectPath }) => {\n        ...\n        return Promise.resolve(redirectPath);\n    }\n}\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If promise returned from the ",(0,r.kt)("inlineCode",{parentName:"li"},"login")," method of the ",(0,r.kt)("inlineCode",{parentName:"li"},"authProvider")," gets resolved with ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," no redirection will occur.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const authProvider: AuthProvider = {\n    ...\n    login: () => {\n        ...\n        return Promise.resolve(false);\n    }\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")))}m.isMDXComponent=!0}}]);