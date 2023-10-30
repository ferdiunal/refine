"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80048],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,s(s({ref:n},l),{},{components:t})):r.createElement(f,s({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});t(67294);var r=t(3905);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={id:"accessControl-provider",title:"Access Control Provider",sidebar_label:"Access Control Provider"},c=void 0,p={unversionedId:"api-reference/core/providers/accessControl-provider",id:"api-reference/core/providers/accessControl-provider",title:"Access Control Provider",description:"Overview",source:"@site/docs/api-reference/core/providers/accessControl-provider.md",sourceDirName:"api-reference/core/providers",slug:"/api-reference/core/providers/accessControl-provider",permalink:"/docs/api-reference/core/providers/accessControl-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/providers/accessControl-provider.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1698682528,formattedLastUpdatedAt:"Oct 30, 2023",frontMatter:{id:"accessControl-provider",title:"Access Control Provider",sidebar_label:"Access Control Provider"},sidebar:"someSidebar",previous:{title:"Core API",permalink:"/docs/api-reference/core"},next:{title:"Auth Provider",permalink:"/docs/api-reference/core/providers/auth-provider"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Hooks and Components",id:"hooks-and-components",level:2},{value:"<code>useCan</code>",id:"usecan",level:3},{value:"<code>&lt;CanAccess /&gt;</code>",id:"canaccess-",level:3},{value:"Performance",id:"performance",level:2},{value:"List of Default Access Control Points",id:"list-of-default-access-control-points",level:2},{value:"Sider",id:"sider",level:3},{value:"Buttons",id:"buttons",level:3},{value:"Examples",id:"examples",level:2}],d=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const f={toc:u};function k(e){var{components:n}=e,t=s(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Access control is a broad topic with lots of advanced solutions that provide different sets of features."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," provides an agnostic API via the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," to manage access control throughout your app, which allows you to integrate different methods, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"RBAC"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ABAC"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ACL"),", etc., and libraries, such as ",(0,r.kt)("a",{parentName:"p",href:"https://casbin.org/"},"Casbin"),", ",(0,r.kt)("a",{parentName:"p",href:"https://casl.js.org/v5/en/"},"CASL"),", ",(0,r.kt)("a",{parentName:"p",href:"https://cerbos.dev/"},"Cerbos")," and ",(0,r.kt)("a",{parentName:"p",href:"https://onury.io/accesscontrol/"},"AccessControl.js"),"."),(0,r.kt)("p",null,"To check if a desired access will be granted, the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," should at least have an asynchronous method named ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," with the following interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type CanParams = {\n    resource: string;\n    action: string;\n    params?: {\n        resource?: IResourceItem;\n        id?: BaseKey;\n        [key: string]: any;\n    };\n};\n\ntype CanReturnType = {\n    can: boolean;\n    reason?: string;\n};\n\nexport interface IAccessControlContext {\n    can?: ({ resource, action, params }: CanParams) => Promise<CanReturnType>;\n    options?: {\n        buttons?: {\n            enableAccessControl?: boolean;\n            hideIfUnauthorized?: boolean;\n        };\n    };\n}\n\nconst accessControlProvider: IAccessControlContext = {\n    can: async ({\n        resource,\n        action,\n        params,\n    }: CanParams): Promise<CanReturnType> => {\n        return { can: true };\n    },\n    options: {\n        buttons: {\n            enableAccessControl: true,\n            hideIfUnauthorized: false,\n        },\n    },\n};\n")),(0,r.kt)("p",null,"It's also possible to globally configure buttons' behaviour by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider"),".\nYou can still change the behaviour of the buttons independently, however, if no configuration is found, buttons will fallback to configuration defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"options.buttons"),".\nBy default, ",(0,r.kt)("inlineCode",{parentName:"p"},"enableAccessControl")," is ",(0,r.kt)("strong",{parentName:"p"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," is ",(0,r.kt)("strong",{parentName:"p"},"false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IAccessControlContext {\n    can?: ({ resource, action, params }: CanParams) => Promise<CanReturnType>;\n    options?: {\n        buttons?: {\n            // default is true\n            enableAccessControl?: boolean;\n            // default is false\n            hideIfUnauthorized?: boolean;\n        };\n    };\n}\n\nconst accessControlProvider: IAccessControlContext = {\n    can: async ({\n        resource,\n        action,\n        params,\n    }: CanParams): Promise<CanReturnType> => {\n        return { can: true };\n    },\n    // Global settings\n    options: {\n        buttons: {\n            enableAccessControl: true,\n            // hide action buttons if not authorized.\n            hideIfUnauthorized: true,\n        },\n    },\n};\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to these sections in the Interface References documentation ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences#resourceitemprops"},(0,r.kt)("inlineCode",{parentName:"a"},"IResourceItem")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences#basekey"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseKey")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences#canparams"},(0,r.kt)("inlineCode",{parentName:"a"},"CanParams")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences#canreturntype"},(0,r.kt)("inlineCode",{parentName:"a"},"CanReturnType")))),(0,r.kt)("p",null,"A basic usage would be like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const App: React.FC = () => {\n    return (\n        <Refine\n            // other providers and props\n            accessControlProvider={{\n                can: async ({ resource, action, params }) => {\n                    if (resource === "posts" && action === "edit") {\n                        return {\n                            can: false,\n                            reason: "Unauthorized",\n                        };\n                    }\n\n                    return { can: true };\n                },\n                options: {\n                    buttons: {\n                        enableAccessControl: true,\n                        hideIfUnauthorized: false,\n                    },\n                },\n            }}\n        >\n            {/* your app */}\n        </Refine>\n    );\n};\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Depending on your router, providing ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component ",(0,r.kt)("strong",{parentName:"p"},"won't enforce")," access control by itself; you may need to wrap protected routes with the ",(0,r.kt)("inlineCode",{parentName:"p"},"<CanAccess>")," component."),(0,r.kt)("p",{parentName:"admonition"},"Refer to one of the following documentations, depending on your preferred router:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/routers/react-router-v6#usage-with-access-control-providers"},"React Router Access Control"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/routers/nextjs#access-control"},"NextJS Router Access Control"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/routers/remix#access-control"},"Remix Router Access Control"))))),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also access the resource object directly."),(0,r.kt)("p",{parentName:"admonition"},"In the example below, the ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," function receives the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences#resourceitemprops"},"ResourceItemProps"),") object you pass to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component, which allows you to use Attribute Based Access Control (ABAC), which allows you to grant permissions based on the value of a field in the resource object."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'export const accessControlProvider = {\n    can: async ({ resource, action, params }) => {\n        const resourceName = params?.resource?.name;\n        const anyUsefulMeta = params?.resource?.meta?.yourUsefulMeta;\n\n        if (\n            resourceName === "posts" &&\n            anyUsefulMeta === true &&\n            action === "edit"\n        ) {\n            return {\n                can: false,\n                reason: "Unauthorized",\n            };\n        }\n    },\n};\n'))),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"reason")," along with ",(0,r.kt)("inlineCode",{parentName:"p"},"can"),". It will be accessible using ",(0,r.kt)("inlineCode",{parentName:"p"},"useCan"),". It will be shown at the tooltip of the buttons from ",(0,r.kt)("strong",{parentName:"p"},"refine")," when they are disabled.")),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find access control examples made with ",(0,r.kt)("strong",{parentName:"p"},"refine")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Casbin")," ","\u2192"," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/access-control-casbin"},"Source Code")," - ",(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/next/examples/access-control-casbin/?view=preview&theme=dark&codemirror=1"},"Demo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cerbos")," ","\u2192"," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/access-control-cerbos"},"Source Code")," - ",(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/next/examples/access-control-cerbos/?view=preview&theme=dark&codemirror=1"},"Demo")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#list-of-default-access-control-points"},(0,r.kt)("strong",{parentName:"a"},"refine")," checks for access control in its related components and pages.")),(0,r.kt)("h2",{id:"hooks-and-components"},"Hooks and Components"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," provides a hook and a component to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider"),"."),(0,r.kt)("h3",{id:"usecan"},(0,r.kt)("inlineCode",{parentName:"h3"},"useCan")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useCan")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," for the query function for ",(0,r.kt)("strong",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery"),". It takes the parameters that ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," takes, can be configured with ",(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," and returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" },\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const useCan: ({\n    action,\n    resource,\n    params,\n    queryOptions,\n}: CanParams* & {\n    queryOptions?: UseQueryOptions<CanReturnType>;\n}) => UseQueryResult<CanReturnType*>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to these sections in the Interfaces documentation: ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences#canparams"},(0,r.kt)("inlineCode",{parentName:"a"},"CanParams"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences#canreturntype"},(0,r.kt)("inlineCode",{parentName:"a"},"CanReturnType")))),(0,r.kt)("h3",{id:"canaccess-"},(0,r.kt)("inlineCode",{parentName:"h3"},"<CanAccess />")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<CanAccess />")," is a wrapper component that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"useCan")," to check for access control. It takes the parameters that ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," method takes and also a ",(0,r.kt)("inlineCode",{parentName:"p"},"fallback"),". If access control returns true, it renders its children; otherwise, it renders ",(0,r.kt)("inlineCode",{parentName:"p"},"fallback"),", if it was provided."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<CanAccess\n    resource="posts"\n    action="edit"\n    params={{ id: 1 }}\n    fallback={<CustomFallback />}\n>\n    <YourComponent />\n</CanAccess>\n')),(0,r.kt)("h2",{id:"performance"},"Performance"),(0,r.kt)("p",null,"As the number of points that check for access control in your app increases, the performance of your app may take a hit, especially if its access control involves remote endpoints. Caching the access control checks helps quite a lot, which can be done easily by configuring the ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"staleTime")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"cacheTime"))," properties since ",(0,r.kt)("strong",{parentName:"p"},"refine")," uses react-query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// inside your component\n\nconst { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" } },\n    queryOptions: {\n        staleTime: 5 * 60 * 1000, // 5 minutes\n    }\n);\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"By default, ",(0,r.kt)("strong",{parentName:"p"},"refine")," uses 5 minutes for ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheTime")," and 0 minutes for ",(0,r.kt)("inlineCode",{parentName:"p"},"staleTime")," for its own access control points.")),(0,r.kt)("h2",{id:"list-of-default-access-control-points"},"List of Default Access Control Points"),(0,r.kt)("p",null,"Here is a list of components and pages ",(0,r.kt)("strong",{parentName:"p"},"refine")," checks for access control:"),(0,r.kt)("h3",{id:"sider"},"Sider"),(0,r.kt)("p",null,"Sider is integrated, which means that unaccessible resources won't appear in the sider menu."),(0,r.kt)("p",null,"Menu items will check access control with ",(0,r.kt)("inlineCode",{parentName:"p"},'{ resource, action: "list" }'),". For example, if your app has a resource called ",(0,r.kt)("inlineCode",{parentName:"p"},"posts"),", it will be checked with ",(0,r.kt)("inlineCode",{parentName:"p"},'{ resource: "posts", action: "list" }'),"."),(0,r.kt)("h3",{id:"buttons"},"Buttons"),(0,r.kt)("p",null,"These buttons will be checked for access control."),(0,r.kt)("p",null,"Let's say they are rendered where ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," where applicable. The ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," function will receive the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences#resourceitemprops"},"ResourceItemProps"),") object you passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component, which allows you to use Attribute Based Access Control (ABAC), which allows you to grant permissions based on the value of a field in the resource object."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/antd/components/buttons/list-button"},(0,r.kt)("strong",{parentName:"a"},"List")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "list", params: { *resource } }')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/antd/components/buttons/create-button"},(0,r.kt)("strong",{parentName:"a"},"Create")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "create", params: { *resource } }')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/antd/components/buttons/clone-button"},(0,r.kt)("strong",{parentName:"a"},"Clone")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "create", params: { id: 1, *resource } }')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/antd/components/buttons/edit-button"},(0,r.kt)("strong",{parentName:"a"},"Edit")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "edit", params: { id: 1, *resource } }')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/antd/components/buttons/delete-button"},(0,r.kt)("strong",{parentName:"a"},"Delete")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts, action: "delete", params: { id: 1, *resource } }')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/antd/components/buttons/show-button"},(0,r.kt)("strong",{parentName:"a"},"Show")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "show", params: { id: 1, *resource } }'))),(0,r.kt)("p",null,"These buttons will be disabled if access control returns ",(0,r.kt)("inlineCode",{parentName:"p"},"{ can: false }")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"This example is for ",(0,r.kt)("strong",{parentName:"p"},"Casbin")," access control provider. You can check our other access control provider, ",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/access-control/cerbos/"},(0,r.kt)("strong",{parentName:"a"},"Cerbos"))," as well."),(0,r.kt)(d,{path:"access-control-casbin",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);