"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"general-concepts",title:"General Concepts"},p=void 0,l={unversionedId:"api-reference/general-concepts",id:"api-reference/general-concepts",title:"General Concepts",description:"refine core is fully independent of UI, meaning that you can use core components and hooks without any UI dependency. All of the data-related hooks, such as useTable, useForm, useList, of refine can also be given some common properties like resource, meta, queryOptions etc. that are independent of UI.",source:"@site/docs/api-reference/general-concepts.md",sourceDirName:"api-reference",slug:"/api-reference/general-concepts",permalink:"/docs/api-reference/general-concepts",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/general-concepts.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1698845593,formattedLastUpdatedAt:"Nov 1, 2023",frontMatter:{id:"general-concepts",title:"General Concepts"},sidebar:"someSidebar",previous:{title:"1. Build your first refine app",permalink:"/docs/tutorial/introduction/index"},next:{title:"Core API",permalink:"/docs/api-reference/core"}},c={},d=[{value:"<code>resource</code>",id:"resource",level:2},{value:"How does <strong>refine</strong> know what the value of <code>resource</code> is?",id:"how-does-refine-know-what-the-value-of-resource-is",level:3},{value:"<code>meta</code>",id:"meta",level:2},{value:"Passing a global <code>meta</code> specific to a resource",id:"passing-a-global-meta-specific-to-a-resource",level:3},{value:"Passing <code>meta</code> with hook-specific properties",id:"passing-meta-with-hook-specific-properties",level:3},{value:"Using URL query parameters as <code>meta</code> properties",id:"using-url-query-parameters-as-meta-properties",level:3},{value:"Using <code>meta</code> to generate GraphQL queries",id:"using-meta-to-generate-graphql-queries",level:3},{value:"Passing <code>meta</code> to your existing <code>dataProvider</code> methods",id:"passing-meta-to-your-existing-dataprovider-methods",level:3}],u={toc:d};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," core is fully independent of UI, meaning that you can use core components and hooks without any UI dependency. All of the ",(0,r.kt)("strong",{parentName:"p"},"data"),"-related hooks, such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useTable/"},(0,r.kt)("inlineCode",{parentName:"a"},"useTable")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useList"},(0,r.kt)("inlineCode",{parentName:"a"},"useList")),", of refine can also be given some common properties like ",(0,r.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"meta"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," etc. that are independent of UI."),(0,r.kt)("h2",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h2"},"resource")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resource")," is a prop that gets passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a paremeter by ",(0,r.kt)("strong",{parentName:"p"},"refine"),". It is usually used as an API endpoint path but it all depends on how you handle it in your ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For an example, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/create-dataprovider/"},(0,r.kt)("inlineCode",{parentName:"a"},"Creating a data provider from scratch part of the tutorial")))),(0,r.kt)("h3",{id:"how-does-refine-know-what-the-value-of-resource-is"},"How does ",(0,r.kt)("strong",{parentName:"h3"},"refine")," know what the value of ",(0,r.kt)("inlineCode",{parentName:"h3"},"resource")," is?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," automatically determines the value from the active route where the component or the hook is used."),(0,r.kt)("p",null,"For example, if you are using the hook in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<PostList>")," component, the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," value defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},'"posts"')," because the active route is ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To make the inference work, you need to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," prop to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component from your router package choice.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n\nimport { PostList } from "pages/posts/list.tsx";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "posts",\n                        list: "/posts",\n                    },\n                ]}\n            >\n                <Routes>\n                    <Route path="/posts" element={<PostList />} />\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n')),(0,r.kt)("p",null,"This value however can be overriden by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," prop to the hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { useTable } from "@refinedev/core";\n\nconst PostList: React.FC = () => {\n    const result = useTable({\n        //highlight-next-line\n        resource: "users",\n    });\n\n    return <div>...</div>;\n};\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The value passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," property is also used to determine the active ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," array, which is optional for API interactions, but enables useful ",(0,r.kt)("inlineCode",{parentName:"p"},"refine")," features such as redirecting to the list page after create and update operations.")),(0,r.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#identifier"},(0,r.kt)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," with nested routes, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/faq#how-can-i-request-an-api-with-nested-route"},"related section in FAQ ","\u2192"))),(0,r.kt)("h2",{id:"meta"},(0,r.kt)("inlineCode",{parentName:"h2"},"meta")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"meta")," is a special property that can be used to pass additional information to data provider methods for the following purposes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Customizing the data provider methods for specific use cases."),(0,r.kt)("li",{parentName:"ul"},"Generating GraphQL queries using plain JavaScript Objects (JSON)."),(0,r.kt)("li",{parentName:"ul"},"Filling additional parameters in target routes when occurs redirection.")),(0,r.kt)("h3",{id:"passing-a-global-meta-specific-to-a-resource"},"Passing a global ",(0,r.kt)("inlineCode",{parentName:"h3"},"meta")," specific to a resource"),(0,r.kt)("p",null,"You can define a global ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," specific to a resource, which will be passed to all the data provider methods whenever the resource is matched."),(0,r.kt)("p",null,"For instance, to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"role")," property to all data provider methods for the ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," resource:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            resources={[\n                {\n                    name: "posts",\n                    // highlight-start\n                    meta: {\n                        role: "editor",\n                    },\n                    // highlight-end\n                },\n            ]}\n        />\n    );\n};\n')),(0,r.kt)("h3",{id:"passing-meta-with-hook-specific-properties"},"Passing ",(0,r.kt)("inlineCode",{parentName:"h3"},"meta")," with hook-specific properties"),(0,r.kt)("p",null,"You can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," property with hook-specific properties to data provider methods, which will override the global ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," of the resource."),(0,r.kt)("p",null,"For example, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"getOne")," method by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"useOne")," hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'    useOne({\n        resource: "posts",\n        id: 1,\n        // highlight-start\n        meta: {\n            headers: { "x-meta-data": "true" },\n        },\n        // highlight-end\n    });\n\n    const myDataProvider = {\n        ...\n        getOne: async ({ resource, id, meta }) => {\n            // highlight-next-line\n            const headers = meta?.headers ?? {};\n            const url = `${apiUrl}/${resource}/${id}`;\n\n            //highlight-next-line\n            const { data } = await httpClient.get(url, { headers });\n\n            return {\n                data,\n            };\n        },\n        ...\n    };\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can pass any property to handle your specific use cases with the same logic")),(0,r.kt)("h3",{id:"using-url-query-parameters-as-meta-properties"},"Using URL query parameters as ",(0,r.kt)("inlineCode",{parentName:"h3"},"meta")," properties"),(0,r.kt)("p",null,"Query parameters on the URL can also be used as ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," properties for data provider methods, which is very useful when you want to customize them based on query parameters."),(0,r.kt)("p",null,"For example, if the URL is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.com/posts?foo=bar"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," property will be passed to the data provider methods as a ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const dataProvider = {\n    getList: async ({ resource, meta }) => {\n        console.log(meta); // { foo: "bar" }\n    },\n    ...\n};\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The order of precedence for creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," is as follows: first, it is passed to the hook; second, it is defined in the URL query parameters; and third, it is defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," property defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," is passed to the data provider methods only via the following hooks and their derivatives:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useTable/"},(0,r.kt)("inlineCode",{parentName:"a"},"useTable"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useForm/"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useSelect/"},(0,r.kt)("inlineCode",{parentName:"a"},"useSelect"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/show/useShow/"},(0,r.kt)("inlineCode",{parentName:"a"},"useShow"))))),(0,r.kt)("h3",{id:"using-meta-to-generate-graphql-queries"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"meta")," to generate GraphQL queries"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/data-providers/graphql/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"GraphQL")," guide","\u2192")),(0,r.kt)("h3",{id:"passing-meta-to-your-existing-dataprovider-methods"},"Passing ",(0,r.kt)("inlineCode",{parentName:"h3"},"meta")," to your existing ",(0,r.kt)("inlineCode",{parentName:"h3"},"dataProvider")," methods"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/faq#how-i-can-override-specific-function-of-data-providers"},"Refer to the related section in FAQ","\u2192")))}m.isMDXComponent=!0}}]);