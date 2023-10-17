"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38484],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"useGo",title:"useGo",sidebar_label:"useGo \ud83c\udd95"},p=void 0,s={unversionedId:"api-reference/core/hooks/navigation/useGo",id:"api-reference/core/hooks/navigation/useGo",title:"useGo",description:"useGo is a hook that leverages the go method of the routerProvider to perform navigation operations.",source:"@site/docs/api-reference/core/hooks/navigation/useGo.md",sourceDirName:"api-reference/core/hooks/navigation",slug:"/api-reference/core/hooks/navigation/useGo",permalink:"/docs/api-reference/core/hooks/navigation/useGo",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/navigation/useGo.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1697543562,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{id:"useGo",title:"useGo",sidebar_label:"useGo \ud83c\udd95"},sidebar:"someSidebar",previous:{title:"useSubscription",permalink:"/docs/api-reference/core/hooks/live/useSubscription"},next:{title:"useParsed \ud83c\udd95",permalink:"/docs/api-reference/core/hooks/navigation/useParsed"}},u={},c=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"With path",id:"with-path",level:3},{value:"With resource",id:"with-resource",level:3},{value:"Parameters",id:"parameters",level:2},{value:"<code>to</code>",id:"to",level:3},{value:"<code>query</code>",id:"query",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>hash</code>",id:"hash",level:3},{value:"<code>options.keepQuery</code>",id:"optionskeepquery",level:3},{value:"<code>options.keepHash</code>",id:"optionskeephash",level:3},{value:"Return Value",id:"return-value",level:2}],d={toc:c};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useGo")," is a hook that leverages the ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," method of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider"))," to perform navigation operations."),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("h3",{id:"with-path"},"With path"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useGo } from "@refinedev/core";\n\nconst MyComponent = () => {\n    const go = useGo();\n\n    return (\n        <Button\n            onClick={() => {\n                go({\n                    to: "/posts",\n                    query: {\n                        filters: [\n                            {\n                                field: "title",\n                                operator: "contains",\n                                value: "Refine",\n                            },\n                        ],\n                    },\n                    type: "push",\n                });\n            }}\n        >\n            Go Posts With Default Filters\n        </Button>\n    );\n};\n')),(0,r.kt)("h3",{id:"with-resource"},"With resource"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"to")," accepts an object with the following shape to navigate to a resource:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"resource name or identifier.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseKey"))),(0,r.kt)("td",{parentName:"tr",align:null},"required when ",(0,r.kt)("inlineCode",{parentName:"td"},"action")," is ",(0,r.kt)("inlineCode",{parentName:"td"},'"edit"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"show"'),", or ",(0,r.kt)("inlineCode",{parentName:"td"},'"clone"'),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"list"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"show"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"clone"')),(0,r.kt)("td",{parentName:"tr",align:null},"action name.")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useGo")," will convert the resource object into the path defined in the resources array within the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine />")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useGo } from "@refinedev/core";\n\nconst MyComponent = () => {\n    const go = useGo();\n\n    return (\n        <Button\n            onClick={() => {\n                go({\n                    to:  {\n                        resource: "posts", // resource name or identifier\n                        action: "edit",\n                        id: "1",\n                    }\n                    query: {\n                         foo: "bar",\n                    },\n                    type: "push",\n                });\n            }}\n        >\n            Go Posts With Default Filters\n        </Button>\n    );\n};\n')),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("h3",{id:"to"},(0,r.kt)("inlineCode",{parentName:"h3"},"to")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," parameter is the path you want to navigate to. If left empty, it will navigate to the current path, which is useful for updating the query parameters."),(0,r.kt)("p",null,"Also, you can pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," object to the ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," parameter. The ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," will convert the resource object to the path."),(0,r.kt)("h3",{id:"query"},(0,r.kt)("inlineCode",{parentName:"h3"},"query")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," parameter is the query parameters you want to add to the path. It is an object which the ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," will convert to the query string."),(0,r.kt)("h3",{id:"type"},(0,r.kt)("inlineCode",{parentName:"h3"},"type")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," parameter is the type of navigation you want to perform. It can be one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"push"),": It adds a new entry to the history stack."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replace"),": It replaces the current entry on the history stack."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),": Returns the navigation path for the given config. Doesn't mutate the history stack.")),(0,r.kt)("h3",{id:"hash"},(0,r.kt)("inlineCode",{parentName:"h3"},"hash")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," parameter is the hash you want to add to the path."),(0,r.kt)("h3",{id:"optionskeepquery"},(0,r.kt)("inlineCode",{parentName:"h3"},"options.keepQuery")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"options.keepQuery")," parameter is a boolean that determines whether the current query parameters should be kept or not. If it is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the current query parameters will be merged with the new query parameters. If it is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the current query parameters will be ignored."),(0,r.kt)("h3",{id:"optionskeephash"},(0,r.kt)("inlineCode",{parentName:"h3"},"options.keepHash")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"options.keepHash")," parameter is a boolean that determines whether the current hash should be kept or not. If it is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the current hash will be kept in the URL. If it is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the current hash will be ignored."),(0,r.kt)("h2",{id:"return-value"},"Return Value"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useGo")," does not return any value except for the ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," type, which returns the navigation path for the given config without mutating the history stack."))}h.isMDXComponent=!0}}]);