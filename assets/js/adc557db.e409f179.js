"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65316],{13077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>s,metadata:()=>u,toc:()=>c});n(67294);var a=n(3905),r=n(53787),i=n(50551);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"audit-log-provider",title:"Audit Log Provider"},p=void 0,u={unversionedId:"api-reference/core/providers/audit-log-provider",id:"api-reference/core/providers/audit-log-provider",title:"Audit Log Provider",description:"Overview",source:"@site/docs/api-reference/core/providers/audit-log-provider.md",sourceDirName:"api-reference/core/providers",slug:"/api-reference/core/providers/audit-log-provider",permalink:"/docs/api-reference/core/providers/audit-log-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/providers/audit-log-provider.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1694742938,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{id:"audit-log-provider",title:"Audit Log Provider"},sidebar:"someSidebar",previous:{title:"Auth Provider",permalink:"/docs/api-reference/core/providers/auth-provider"},next:{title:"Data Provider",permalink:"/docs/api-reference/core/providers/data-provider"}},m={},c=[{value:"Overview",id:"overview",level:2},{value:"Creating an Audit Log Provider",id:"creating-an-audit-log-provider",level:2},{value:"<code>get</code>",id:"get",level:3},{value:"Parameter Types",id:"parameter-types",level:4},{value:"<code>create</code>",id:"create",level:3},{value:"Parameter Types",id:"parameter-types-1",level:4},{value:"<code>update</code>",id:"update",level:3},{value:"Parameter Types",id:"parameter-types-2",level:4},{value:"Supported Hooks",id:"supported-hooks",level:2},{value:"<code>useCreate</code>",id:"usecreate",level:3},{value:"<code>useCreateMany</code>",id:"usecreatemany",level:3},{value:"<code>useUpdate</code>",id:"useupdate",level:3},{value:"<code>useUpdateMany</code>",id:"useupdatemany",level:3},{value:"<code>useDelete</code>",id:"usedelete",level:3},{value:"<code>useDeleteMany</code>",id:"usedeletemany",level:3},{value:"Enable/Disable to Audit Log by Mutation Type for a Resource",id:"enabledisable-to-audit-log-by-mutation-type-for-a-resource",level:2},{value:"Example",id:"example",level:2}],k=(g="CodeSandboxExample",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var g;const h={toc:c};function v(e){var{components:t}=e,n=d(e,["components"]);return(0,a.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," allows you to track changes and who made them in your data by sending a new log event record whenever a new record is created, updated or deleted. Mutations made with data hooks are automatically sent to the ",(0,a.kt)("inlineCode",{parentName:"p"},"auditLogProvider")," as an event. You can also manually send events to the ",(0,a.kt)("inlineCode",{parentName:"p"},"auditLogProvider")," via hooks."),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"auditLogProvider"),", you just need to pass it to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\n\nimport auditLogProvider from "./auditLogProvider";\n\nconst App: React.FC = () => {\n    return <Refine auditLogProvider={auditLogProvider} />;\n};\n')),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"auditLogProvider")," must have the following methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"create"),": Logs an event to the audit log."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"get"),": Returns a list of events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"update"),": Updates an event in the audit log.")),(0,a.kt)("p",null,"Below are the corresponding interfaces for each of these methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const auditLogProvider = {\n    create: (params: {\n        resource: string;\n        action: string;\n        data?: any;\n        author?: {\n            name?: string;\n            [key: string]: any;\n        };\n        previousData?: any;\n        meta?: Record<string, any>;\n    }) => void;\n    get: (params: {\n        resource: string;\n        action?: string;\n        meta?: Record<string, any>;\n        author?: Record<string, any>;\n        metaData?: MetaDataQuery;\n    }) => Promise<any>;\n    update: (params: {\n        id: BaseKey;\n        name: string;\n    }) => Promise<any>;\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"refine")," provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"useLog")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogList")," hooks that can be used to access your ",(0,a.kt)("inlineCode",{parentName:"p"},"auditLogProvider")," methods from anywhere in your application.")),(0,a.kt)("h2",{id:"creating-an-audit-log-provider"},"Creating an Audit Log Provider"),(0,a.kt)("p",null,"Let's create an ",(0,a.kt)("inlineCode",{parentName:"p"},"auditLogProvider")," to understand how it works better. Though we will be using ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," to handle events, you can do it however you want thanks to ",(0,a.kt)("strong",{parentName:"p"},"refine")," providing an agnostic API."),(0,a.kt)("h3",{id:"get"},(0,a.kt)("inlineCode",{parentName:"h3"},"get")),(0,a.kt)("p",null,"This method is used to get a list of audit log events."),(0,a.kt)("p",null,"For example, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogList")," hook to list all resource activities by a specific record id creates an event like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "resource": "posts",\n    "meta": {\n        "id": "1"\n    }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The event is created with parameters that were passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogList")," hook.")),(0,a.kt)("p",null,"Now let's see how we can handle these events in our audit log provider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="auditLogProvider.ts"',title:'"auditLogProvider.ts"'},'import refineSimpleRestDataProvider from "@refinedev/simple-rest";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst dataProvider = refineSimpleRestDataProvider(API_URL);\n\nconst auditLogProvider: AuditLogProvider = {\n    get: async ({ resource, meta }) => {\n        const { data } = await dataProvider(API_URL).getList({\n            resource: "logs",\n            filters: [\n                {\n                    field: "resource",\n                    operator: "eq",\n                    value: resource,\n                },\n                {\n                    field: "meta.id",\n                    operator: "eq",\n                    value: meta?.id,\n                },\n            ],\n        });\n\n        return data;\n    },\n};\n')),(0,a.kt)("h4",{id:"parameter-types"},"Parameter Types"),(0,a.kt)("p",null,"This method can take the following parameters via hooks. You can use these parameters to filter the events."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resource"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"action"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"update"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"delete"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"createMany"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"updateMany"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"deleteMany"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"meta"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"author"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))))),(0,a.kt)("h3",{id:"create"},(0,a.kt)("inlineCode",{parentName:"h3"},"create")),(0,a.kt)("p",null,"This method is used to create an audit log event. It is triggered when a new successful mutation is made or when you use ",(0,a.kt)("inlineCode",{parentName:"p"},"useLog"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," method. The incoming parameters show the values of the new record to be created."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We recommend you create audit logs on the API side for security concerns since the data can be changed on the client side.")),(0,a.kt)("p",null,"When the mutations is successful, the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method is called with the following parameters, depending on the mutation type:"),(0,a.kt)(r.Z,{defaultValue:"create",values:[{label:"Create Event",value:"create"},{label:"Update Event",value:"update"},{label:"Delete Event",value:"delete"},{label:"Create Many Event",value:"createMany"},{label:"Update Many Event",value:"updateMany"},{label:"Delete Many Event",value:"deleteMany"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"create",mdxType:"TabItem"},(0,a.kt)("p",null,"When a record is created, refine automatically sends an event to ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "create",\n    "resource": "posts",\n    "data": {\n        "title": "Hello World",\n        "content": "Hello World"\n    },\n    "meta": {\n        "dataProviderName": "simple-rest",\n        // If request response has a `id` field, it will be add in the `meta` field.\n        "id": 1\n    }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of the created record is added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," object and can be used for filtering purposes."))),(0,a.kt)(i.Z,{value:"update",mdxType:"TabItem"},(0,a.kt)("p",null,"When a record is updated, refine automatically sends an event to ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "update",\n    "resource": "posts",\n    "data": {\n        "title": "New Hello World",\n        "content": "New Hello World"\n    },\n    "previousData": {\n        "title": "Hello World",\n        "content": "Hello World"\n    },\n    "meta": {\n        "dataProviderName": "simple-rest",\n        "id": 1\n    }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"refine")," returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"previousData")," from the react-query cache but it can't find it, it will return ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"."))),(0,a.kt)(i.Z,{value:"delete",mdxType:"TabItem"},(0,a.kt)("p",null,"When a record is deleted, refine automatically sends an event to ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "delete",\n    "resource": "posts",\n    "meta": {\n        "dataProviderName": "simple-rest",\n        "id": 1\n    }\n}\n'))),(0,a.kt)(i.Z,{value:"createMany",mdxType:"TabItem"},(0,a.kt)("p",null,"When a record is created with the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCreateMany")," hook, refine automatically sends an event to the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "createMany",\n    "resource": "posts",\n    "data": [\n        {\n            "title": "Hello World 1"\n        },\n        {\n            "title": "Hello World 2"\n        }\n    ],\n    "meta": {\n        "dataProviderName": "simple-rest",\n        // If request response has a `id` field, it will be add in the `meta` field.\n        "ids": [1, 2]\n    }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of the created record is added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," object and can be used for filtering purposes."))),(0,a.kt)(i.Z,{value:"updateMany",mdxType:"TabItem"},(0,a.kt)("p",null,"When a record is updated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"useUpdateMany")," hook, refine automatically sends an event to the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "updateMany",\n    "resource": "posts",\n    "data": {\n        "status": "published"\n    },\n    "previousData": [\n        {\n            "status": "draft"\n        },\n        {\n            "status": "archived"\n        }\n    ],\n    "meta": {\n        "dataProviderName": "simple-rest",\n        "ids": [1, 2]\n    }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"refine")," returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"previousData")," from the react-query cache but if it can't find it, it will return ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"."))),(0,a.kt)(i.Z,{value:"deleteMany",mdxType:"TabItem"},(0,a.kt)("p",null,"When a record is deleted with the ",(0,a.kt)("inlineCode",{parentName:"p"},"useDeleteMany")," hook, refine automatically sends an event to the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "deleteMany",\n    "resource": "posts",\n    "meta": {\n        "dataProviderName": "simple-rest",\n        "id": [1, 2]\n    }\n}\n')))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"getUserIdentity"))," is defined in your auth provider, the ",(0,a.kt)("inlineCode",{parentName:"p"},"author")," object will be added to the event with the value returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"getUserIdentity"),".")),(0,a.kt)("br",null),(0,a.kt)("p",null,"And here is how we can handle these events in our audit log provider:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="auditLogProvider.ts"',title:'"auditLogProvider.ts"'},'import refineSimpleRestDataProvider from "@refinedev/simple-rest";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst dataProvider = refineSimpleRestDataProvider(API_URL);\n\nconst auditLogProvider: AuditLogProvider = {\n    create: (params) => {\n        return dataProvider(API_URL).create({\n            resource: "logs",\n            variables: params,\n        });\n    },\n};\n')),(0,a.kt)("h4",{id:"parameter-types-1"},"Parameter Types"),(0,a.kt)("p",null,"This method can take the following parameters."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resource"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"action"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"update"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"delete"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"createMany"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"updateMany"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"deleteMany"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"meta"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"author"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))))),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For more information, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/audit-log/useLog"},(0,a.kt)("inlineCode",{parentName:"a"},"useLog")," documentation","\u2192"))),(0,a.kt)("h3",{id:"update"},(0,a.kt)("inlineCode",{parentName:"h3"},"update")),(0,a.kt)("p",null,"This method is used to update an audit log event."),(0,a.kt)("p",null,"For example, using ",(0,a.kt)("inlineCode",{parentName:"p"},"useLog"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," method creates an event like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "1",\n    "name": "event name"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="auditLogProvider.ts"',title:'"auditLogProvider.ts"'},'import refineSimpleRestDataProvider from "@refinedev/simple-rest";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst dataProvider = refineSimpleRestDataProvider(API_URL);\n\nconst auditLogProvider: AuditLogProvider = {\n    update: async ({ id, name }) => {\n        const { data } = await dataProvider(API_URL).update({\n            resource: "logs",\n            id,\n            variables: { name },\n        });\n        return data;\n    },\n};\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For more information, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/audit-log/useLog"},(0,a.kt)("inlineCode",{parentName:"a"},"useLog")," documentation","\u2192"))),(0,a.kt)("h4",{id:"parameter-types-2"},"Parameter Types"),(0,a.kt)("p",null,"This method can take the following parameters."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"BaseKey"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can use this hook to name an event and create a milestone.")),(0,a.kt)("h2",{id:"supported-hooks"},"Supported Hooks"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," will send specific parameters to the audit log provider's ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method when a mutation is successful."),(0,a.kt)("p",null,"Here are the parameters each hook send to ",(0,a.kt)("inlineCode",{parentName:"p"},"create"),":"),(0,a.kt)("h3",{id:"usecreate"},(0,a.kt)("inlineCode",{parentName:"h3"},"useCreate")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useCreate();\n\nmutate({\n    resource: "posts",\n    values: {\n        title: "New Post",\n        status: "published",\n        content: "New Post Content",\n    },\n    metaData: {\n        foo: "bar",\n    },\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Create event"',title:'"Create','event"':!0},'{\n    "action": "create",\n    "resource": "posts",\n    "data": {\n        "title": "Title",\n        "status": "published",\n        "content": "New Post Content"\n    },\n    "meta": {\n        "id": "1",\n        // `metaData` is included in `meta`.\n        "foo": "bar"\n    }\n}\n')),(0,a.kt)("h3",{id:"usecreatemany"},(0,a.kt)("inlineCode",{parentName:"h3"},"useCreateMany")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useCreateMany();\n\nmutate({\n    resource: "posts",\n    values: [\n        {\n            title: "Title1",\n            status: "published",\n            content: "New Post Content1",\n        },\n        {\n            title: "Title2",\n            status: "published",\n            content: "New Post Content2",\n        },\n    ],\n    metaData: {\n        foo: "bar",\n    },\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="CreateMany event"',title:'"CreateMany','event"':!0},'{\n    "action": "createMany",\n    "resource": "posts",\n    "data": [\n        {\n            "title": "Title1",\n            "status": "published",\n            "content": "New Post Content1"\n        },\n        {\n            "title": "Title2",\n            "status": "published",\n            "content": "New Post Content2"\n        }\n    ],\n    "meta": {\n        "ids": [1, 2],\n        // `metaData` is included in `meta`.\n        "foo": "bar"\n    }\n}\n')),(0,a.kt)("h3",{id:"useupdate"},(0,a.kt)("inlineCode",{parentName:"h3"},"useUpdate")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useUpdate();\n\nmutate({\n    id: 1,\n    resource: "posts",\n    values: {\n        title: "Updated New Title",\n    },\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Update event"',title:'"Update','event"':!0},'{\n    "action": "update",\n    "resource": "posts",\n    "data": {\n        "title": "Updated New Title",\n        "status": "published",\n        "content": "New Post Content"\n    },\n    "previousData": {\n        "title": "Title",\n        "status": "published",\n        "content": "New Post Content"\n    },\n    "meta": {\n        "id": 1\n    }\n}\n')),(0,a.kt)("h3",{id:"useupdatemany"},(0,a.kt)("inlineCode",{parentName:"h3"},"useUpdateMany")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useUpdateMany();\n\nmutate({\n    ids: [1, 2],\n    resource: "posts",\n    values: {\n        title: "Updated New Title",\n    },\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="UpdateMany event"',title:'"UpdateMany','event"':!0},'{\n    "action": "updateMany",\n    "resource": "posts",\n    "data": {\n        "title": "Updated New Title"\n    },\n    "previousData": [\n        {\n            "title": "Title1"\n        },\n        {\n            "title": "Title2"\n        }\n    ],\n    "meta": {\n        "ids": [1, 2]\n    }\n}\n')),(0,a.kt)("h3",{id:"usedelete"},(0,a.kt)("inlineCode",{parentName:"h3"},"useDelete")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useDelete();\n\nmutate({\n    id: 1,\n    resource: "posts",\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Delete event"',title:'"Delete','event"':!0},'{\n    "action": "delete",\n    "resource": "posts",\n    "meta": {\n        "id": 1\n    }\n}\n')),(0,a.kt)("h3",{id:"usedeletemany"},(0,a.kt)("inlineCode",{parentName:"h3"},"useDeleteMany")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useDeleteMany();\n\nmutate({\n    ids: [1, 2],\n    resource: "posts",\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="DeleteMany event"',title:'"DeleteMany','event"':!0},'{\n    "action": "deleteMany",\n    "resource": "posts",\n    "meta": {\n        "ids": [1, 2]\n    }\n}\n')),(0,a.kt)("h2",{id:"enabledisable-to-audit-log-by-mutation-type-for-a-resource"},"Enable/Disable to Audit Log by Mutation Type for a Resource"),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"meta.audit"),", you can specify which mutations trigger audit logs; otherwise, all create, update, and delete actions will be logged by default."),(0,a.kt)("p",null,"For example, if you have the code below, only events will be created for the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," mutation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},'<Refine\n    dataProvider={dataProvider(API_URL)}\n    resources={[\n        {\n            name: "posts",\n            list: PostList,\n            create: PostCreate,\n            edit: PostEdit,\n            show: PostShow,\n            canDelete: true,\n            // highlight-start\n            meta: {\n                audit: ["create"],\n            },\n            // highlight-end\n        },\n    ]}\n/>\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(k,{path:"audit-log-provider",mdxType:"CodeSandboxExample"}))}v.isMDXComponent=!0}}]);