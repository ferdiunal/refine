"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"appwrite",title:"Appwrite",sidebar_label:"Appwrite"},l=void 0,p={unversionedId:"advanced-tutorials/multi-tenancy/appwrite",id:"advanced-tutorials/multi-tenancy/appwrite",title:"Appwrite",description:"What is Multitenancy?",source:"@site/docs/advanced-tutorials/multi-tenancy/appwrite.md",sourceDirName:"advanced-tutorials/multi-tenancy",slug:"/advanced-tutorials/multi-tenancy/appwrite",permalink:"/docs/advanced-tutorials/multi-tenancy/appwrite",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/multi-tenancy/appwrite.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1697543562,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{id:"appwrite",title:"Appwrite",sidebar_label:"Appwrite"},sidebar:"someSidebar",previous:{title:"Multi Level Menu",permalink:"/docs/advanced-tutorials/multi-level-menu/"},next:{title:"Strapi-v4",permalink:"/docs/advanced-tutorials/multi-tenancy/strapi-v4"}},d={},c=[{value:"What is Multitenancy?",id:"what-is-multitenancy",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Create Collections",id:"create-collections",level:2},{value:"Create Resources and Routes",id:"create-resources-and-routes",level:2},{value:"Using the <code>tenant</code> at the other components",id:"using-the-tenant-at-the-other-components",level:2},{value:"Shop Select to Sider Component",id:"shop-select-to-sider-component",level:2},{value:"Product List Page",id:"product-list-page",level:2},{value:"Product Create Page",id:"product-create-page",level:2},{value:"Bonus - Realtime Feature",id:"bonus---realtime-feature",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Example",id:"example",level:2}],u=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const h={toc:c};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-multitenancy"},"What is Multitenancy?"),(0,r.kt)("p",null,"Multitenancy refers to a kind of architecture where a single instance of software runs on a server and serves multiple customers. In a multi-tenant environment, separate customers tap into the same hardware and data storage, creating a dedicated instance for each customer. Each tenant\u2019s data is isolated and remains invisible to others, but is running on the same server."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this guide, we will create an application with you in the logic of Multi Tenant(Multitenancy). We can say multi tenant application is separate and manage multiple contents independently from each other in a single application."),(0,r.kt)("p",null,"We will make a Cake House application using ",(0,r.kt)("strong",{parentName:"p"},"refine")," and ",(0,r.kt)("a",{parentName:"p",href:"https://appwrite.io/"},"Appwrite"),". Our Cake House will consist of two separate stores and there will be special products for these stores. We will explain step by step how to manage these stores, products, and orders separately."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This guide has been prepared to assume you know the basics of ",(0,r.kt)("strong",{parentName:"p"},"refine"),". If you haven't learned these basics yet, we recommend reading the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/"},"Tutorial"),".")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @refinedev/appwrite\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))," package. If you are using Refine headless, you need to provide the components, hooks, or helpers imported from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))," package.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport {\n    ThemedLayoutV2,\n    notificationProvider,\n    ErrorComponent,\n    RefineThemes,\n} from "@refinedev/antd";\nimport { dataProvider } from "@refinedev/appwrite";\nimport routerProvider from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { ConfigProvider } from "antd";\nimport "@refinedev/antd/dist/reset.css";\n\nimport { appwriteClient } from "utility";\nimport { authProvider } from "./authProvider";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <ConfigProvider theme={RefineThemes.Blue}>\n                <Refine\n                    //highlight-start\n                    dataProvider={dataProvider(appwriteClient)}\n                    authProvider={authProvider}\n                    //highlight-end\n                    routerProvider={routerProvider}\n                    notificationProvider={notificationProvider}\n                >\n                    <ThemedLayoutV2>{/* ... */}</ThemedLayoutV2>\n                </Refine>\n            </ConfigProvider>\n        </BrowserRouter>\n    );\n};\n')),(0,r.kt)("h2",{id:"create-collections"},"Create Collections"),(0,r.kt)("p",null,"We need three collections for our Cake House application. Let's create these collections in the appwrite database."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/data-providers/appwrite/#create-collections"},"Check out how you can create collections with refine Appwrite guide \u2192"))),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/appwrite/collections.png",alt:"Collections"}),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stores")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"title: text")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"products")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"title: text"),(0,r.kt)("li",{parentName:"ul"},"description: text"),(0,r.kt)("li",{parentName:"ul"},"image: text"),(0,r.kt)("li",{parentName:"ul"},"storeId: text")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"orders")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"productId: text"),(0,r.kt)("li",{parentName:"ul"},"customerName: text"),(0,r.kt)("li",{parentName:"ul"},"customerAddress: text"),(0,r.kt)("li",{parentName:"ul"},"status: text"),(0,r.kt)("li",{parentName:"ul"},"quantity: numeric"),(0,r.kt)("li",{parentName:"ul"},"storeId: text")),(0,r.kt)("p",null,"Now that we have completed the setup and our collections, we can now log in with the ",(0,r.kt)("strong",{parentName:"p"},"refine")," and start the listing processes."),(0,r.kt)("h2",{id:"create-resources-and-routes"},"Create Resources and Routes"),(0,r.kt)("p",null,"To view the products and orders of two different stores separately, we need to filter by ",(0,r.kt)("inlineCode",{parentName:"p"},"storeId"),". We will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"storeId")," information in more than one place. For example, when creating a store-specific order. We will also add this as a prefix to the routes. (example.com/:tenant/products)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'function App() {\n    // highlight-start\n    // When `domain.com` is entered, we set the default tenant to redirect `domain.com/name`.\n    const tenant = "refine";\n    // highlight-end\n\n    return (\n        <BrowserRouter>\n            <GitHubBanner />\n            <ConfigProvider theme={RefineThemes.Blue}>\n                <Refine\n                    routerProvider={routerProvider}\n                    liveProvider={liveProvider(appwriteClient, {\n                        databaseId: "multi-tenancy",\n                    })}\n                    dataProvider={dataProvider(appwriteClient, {\n                        databaseId: "multi-tenancy",\n                    })}\n                    authProvider={authProvider}\n                    options={{\n                        liveMode: "auto",\n                        syncWithLocation: true,\n                        warnWhenUnsavedChanges: true,\n                    }}\n                    // highlight-start\n                    // The path definition for `list`, `create`, `show`, `edit` pages is as follows and variables can be used as in `react-router`. \n                    resources={[\n                        {\n                            name: "products",\n                            list: "/:tenant/products",\n                            show: "/:tenant/products/show/:id",\n                            // Compose with the `meta` object.\n                            meta: {\n                                tenant,\n                            },\n                        },\n                        {\n                            name: "orders",\n                            list: "/:tenant/orders",\n                            create: "/:tenant/orders/create",\n                            edit: "/:tenant/orders/edit/:id",\n                            meta: {\n                                tenant,\n                            },\n                        },\n                        // highlight-end\n                    ]}\n                    notificationProvider={notificationProvider}\n                >\n                    <Routes>\n                        {/* ... */}\n                        <Route\n                            index\n                            element={\n                                <NavigateToResource resource="products" />\n                            }\n                        />\n\n                        {/* highlight-start */}\n                        {/* prefix `resources` paths. */}\n                        <Route path="/:tenant">\n                        {/* highlight-end */}\n                            <Route path="products">\n                                <Route index element={<ProductList />} />\n                                <Route\n                                    path="show/:id"\n                                    element={<ProductShow />}\n                                />\n                            </Route>\n\n                            <Route path="orders">\n                                <Route index element={<OrderList />} />\n                                <Route\n                                    path="create"\n                                    element={<OrderCreate />}\n                                />\n                                <Route\n                                    path="edit/:id"\n                                    element={<OrderEdit />}\n                                />\n                            </Route>\n                        </Route>\n                    </Routes>\n                    <UnsavedChangesNotifier />\n                </Refine>\n            </ConfigProvider>\n        </BrowserRouter>\n    );\n}\n')),(0,r.kt)("h2",{id:"using-the-tenant-at-the-other-components"},"Using the ",(0,r.kt)("inlineCode",{parentName:"h2"},"tenant")," at the other components"),(0,r.kt)("p",null,"You may want to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"tenant")," within the project. This is easily get with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useParsed/"},(0,r.kt)("inlineCode",{parentName:"a"},"useParsed"))," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useParsed } from "@refinedev/core";\n\nconst { params } = useParsed<{ tenant: string }>();\n\nconsole.log(params?.tenant); // { tenant: "refine" }\n')),(0,r.kt)("h2",{id:"shop-select-to-sider-component"},"Shop Select to Sider Component"),(0,r.kt)("p",null,"We will create a select component in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," where the user will select the stores. Let's create our select component first, then let's see how we can define it in the ",(0,r.kt)("strong",{parentName:"p"},"refine")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="scr/components/select/StoreSelect.tsx"',title:'"scr/components/select/StoreSelect.tsx"'},'import { useSelect } from "@refinedev/antd";\nimport { useGetToPath, useGo, useParsed } from "@refinedev/core";\nimport { Select } from "antd";\n\nimport { IStore } from "interfaces";\n\nexport const StoreSelect: React.FC = () => {\n    // highlight-start\n    const getToPath = useGetToPath();\n    const go = useGo();\n    const { resource, action, params } = useParsed<{ tenant: string }>();\n    // highlight-end\n\n    const { selectProps: storeSelectProps } = useSelect<IStore>({\n        resource: "stores",\n        optionLabel: "title",\n        optionValue: "id",\n    });\n\n    return (\n        <Select\n            defaultValue={params?.tenant}\n            style={{ width: 120 }}\n            // highlight-start\n            onChange={(tenant) =>\n                go({\n                    to: getToPath({\n                        resource,\n                        action: action || "list",\n                        meta: {\n                            tenant,\n                        },\n                    }),\n                })\n            }\n            // highlight-end\n            onSelect={() => false}\n        >\n            {storeSelectProps.options?.map(({ value, label }) => (\n                <Select.Option key={value} value={value}>\n                    {label}\n                </Select.Option>\n            ))}\n        </Select>\n    );\n};\n')),(0,r.kt)("p",null,"Here we have created a select component. Then we fetch the store id and title we created in the Appwrite database with ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect"),"."),(0,r.kt)("p",null,"Let's define the select component in the ",(0,r.kt)("strong",{parentName:"p"},"refine")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Header"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/antd-themed-layout/#header"},"Check out how you can customize ",(0,r.kt)("inlineCode",{parentName:"a"},"Header")," \u2192")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/header/index.tsx"',title:'"src/components/header/index.tsx"'},'import React from "react";\nimport { Layout as AntdLayout, Typography, Avatar, Space, theme } from "antd";\nimport { useActiveAuthProvider, useGetIdentity } from "@refinedev/core";\nimport { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";\n// highlight-next-line\nimport { StoreSelect } from "../select";\n\nconst { Text } = Typography;\nconst { useToken } = theme;\n\nexport const Header: React.FC<RefineThemedLayoutV2HeaderProps> = () => {\n    const { token } = useToken();\n\n    const authProvider = useActiveAuthProvider();\n    const { data: user } = useGetIdentity({\n        v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),\n    });\n\n    const shouldRenderHeader = user && (user.name || user.avatar);\n\n    if (!shouldRenderHeader) {\n        return null;\n    }\n\n    return (\n        <AntdLayout.Header\n            style={{\n                backgroundColor: token.colorBgElevated,\n                display: "flex",\n                justifyContent: "flex-end",\n                alignItems: "center",\n                padding: "0px 24px",\n                height: "64px",\n                position: "sticky",\n                top: 0,\n                zIndex: 1,\n            }}\n        >\n            <Space\n                style={{\n                    width: "100%",\n                    display: "flex",\n                    justifyContent: "space-between",\n                }}\n            >\n                { /* highlight-next-line */}\n                <StoreSelect />\n                <Space size="middle">\n                    {user?.name && <Text strong>{user.name}</Text>}\n                    {user?.avatar && (\n                        <Avatar src={user?.avatar} alt={user?.name} />\n                    )}\n                </Space>\n            </Space>\n        </AntdLayout.Header>\n    );\n};\n')))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/appwrite/header.jpg",alt:"sider"})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"As you can see, you can create a store-specific product and order by selecting ",(0,r.kt)("inlineCode",{parentName:"em"},"tenant")," in the ",(0,r.kt)("inlineCode",{parentName:"em"},"Header")," component and choosing according to the ",(0,r.kt)("inlineCode",{parentName:"em"},"storeId")," information."))))),(0,r.kt)("h2",{id:"product-list-page"},"Product List Page"),(0,r.kt)("p",null,"Now we can list the products of the selected store according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"storeId")," information by filtering it. We can do this filtering by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"filters.permanent")," property within the ",(0,r.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"useSimpleList")," hook."),(0,r.kt)("p",null,"We separate the products of different stores by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"filters.permanent")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"storeId")," we get from the Store Context. So we can control more than single content in one application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useParsed } from "@refinedev/core";\n\n//highlight-start\nconst { params } = useParsed<{ tenant?: string }>();\n//highlight-end\n\nconst { listProps } = useSimpleList<IProduct>({\n    //highlight-start\n    filters: {\n        permanent: [{ field: "storeId", operator: "eq", value: params?.tenant }],\n    },\n    //highlight-end\n});\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/ProductList.tsx"',title:'"src/pages/ProductList.tsx"'},'import {\n    IResourceComponentsProps,\n    HttpError,\n    useParsed,\n} from "@refinedev/core";\n\nimport {\n    useSimpleList,\n    useModalForm,\n    CreateButton,\n    List,\n} from "@refinedev/antd";\nimport { List as AntdList } from "antd";\n\nimport { IProduct } from "interfaces";\nimport { ProductItem, EditProduct, CreateProduct } from "components/product";\n\nexport const ProductList: React.FC<IResourceComponentsProps> = () => {\n    const { params } = useParsed<{ tenant?: string }>();\n    const { listProps } = useSimpleList<IProduct>({\n        // highlight-start\n        filters: {\n            permanent: [\n                {\n                    field: "storeId",\n                    operator: "eq",\n                    value: params?.tenant,\n                },\n            ],\n        },\n        // highlight-end\n    });\n\n    const {\n        modalProps: createModalProps,\n        formProps: createFormProps,\n        show: createShow,\n    } = useModalForm<IProduct, HttpError, IProduct>({\n        resource: "products",\n        action: "create",\n        redirect: false,\n    });\n\n    const {\n        modalProps: editModalProps,\n        formProps: editFormProps,\n        show: editShow,\n    } = useModalForm<IProduct, HttpError>({\n        action: "edit",\n        queryOptions: {\n            select: ({ data }) => {\n                return {\n                    data: {\n                        ...data,\n                        image: data.image ? JSON.parse(data.image) : undefined,\n                    },\n                };\n            },\n        },\n    });\n\n    return (\n        <>\n            <List\n                headerProps={{\n                    extra: <CreateButton onClick={() => createShow()} />,\n                }}\n            >\n                <AntdList\n                    grid={{ gutter: 16, xs: 1 }}\n                    style={{\n                        justifyContent: "center",\n                    }}\n                    {...listProps}\n                    renderItem={(item) => (\n                        <AntdList.Item>\n                            <ProductItem item={item} editShow={editShow} />\n                        </AntdList.Item>\n                    )}\n                />\n            </List>\n            <EditProduct\n                modalProps={editModalProps}\n                formProps={editFormProps}\n            />\n            <CreateProduct\n                modalProps={createModalProps}\n                formProps={createFormProps}\n            />\n        </>\n    );\n};\n')))),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/appwrite/tenant-filter.gif",alt:"Store Filter"}),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In this example, we used the ",(0,r.kt)("inlineCode",{parentName:"p"},"filter.permanent")," object to filter the data, as Appwrite does not support multitenancy. However, you can do this from a single point by swizzle the data provider in your own RestApi."),(0,r.kt)("p",{parentName:"admonition"},"You can check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli/#swizzle"},"swizzle data provider guide")," for more information."),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"resource.meta")," object is passed as ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," to ",(0,r.kt)("strong",{parentName:"p"},"all methods")," in the data providers. For this you have to swizzle the data provider. "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/dataProvider.ts"',title:'"src/dataProvider.ts"'},'//...\nexport const dataProvider = (): Required<DataProvider> => {\n    //...\n    return {\n        getList: async ({ resource, pagination, filters, sorters, meta }) => {\n            // ...\n            console.log(meta.tenant); // { tenant: "refine" }\n        },\n        getOne: async ({ resource, id, meta }) => {\n            // ...\n            console.log(meta.tenant); // { tenant: "refine" }\n        }\n        // ...\n    }\n}\n'))),(0,r.kt)("h2",{id:"product-create-page"},"Product Create Page"),(0,r.kt)("p",null,"Now let's see how we can create store-specific products. Which store we choose in Sider, the product we will create will automatically be the product of the selected store."),(0,r.kt)("p",null,"By overriding the ",(0,r.kt)("inlineCode",{parentName:"p"},"onFinish")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"form")," and sending the selected ",(0,r.kt)("inlineCode",{parentName:"p"},"storeId"),", we specify which store it will be the product of."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-start\nimport { useParsed } from "@refinedev/core";\nconst { params } = useParsed<{ tenant?: string }>();\n// highlight-end\n\n<Form\n    {...formProps}\n    ...\n     //highlight-start\n    onFinish={(values) => {\n        return (\n            formProps.onFinish?.({\n                ...values,\n                storeId: params?.tenant,\n            })\n        );\n    }}\n    //highlight-end\n>\n...\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/product/create.tsx"',title:'"src/components/product/create.tsx"'},'import { Form, FormProps, Input, Upload, ModalProps, Modal } from "antd";\nimport { Permission, Role } from "@refinedev/appwrite";\nimport { useParsed } from "@refinedev/core";\nimport { RcFile } from "antd/lib/upload/interface";\n\nimport { normalizeFile, storage } from "utility";\n\ntype CreateProductProps = {\n    modalProps: ModalProps;\n    formProps: FormProps;\n};\n\nexport const CreateProduct: React.FC<CreateProductProps> = ({\n    modalProps,\n    formProps,\n}) => {\n    // highlight-next-line\n    const { params } = useParsed<{ tenant?: string }>();\n    return (\n        <Modal {...modalProps}>\n            <Form\n                {...formProps}\n                layout="vertical"\n                initialValues={{\n                    isActive: true,\n                }}\n                // highlight-start\n                onFinish={(values) =>\n                    formProps.onFinish?.({\n                        ...values,\n                        storeId: params?.tenant,\n                        image: JSON.stringify(values.image),\n                    })\n                }\n                // highlight-end\n            >\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item label="Description" name="description">\n                    <Input />\n                </Form.Item>\n\n                <Form.Item label="Images">\n                    <Form.Item\n                        name="image"\n                        valuePropName="fileList"\n                        normalize={normalizeFile}\n                        noStyle\n                    >\n                        <Upload.Dragger\n                            name="file"\n                            listType="picture"\n                            multiple\n                            customRequest={async ({\n                                file,\n                                onError,\n                                onSuccess,\n                            }) => {\n                                try {\n                                    const rcFile = file as RcFile;\n\n                                    const { $id } = await storage.createFile(\n                                        "default",\n                                        rcFile.name,\n                                        rcFile,\n                                        [Permission.read(Role.any())],\n                                    );\n\n                                    const url = storage.getFileView(\n                                        "default",\n                                        $id,\n                                    );\n\n                                    onSuccess?.({ url }, new XMLHttpRequest());\n                                } catch (error) {\n                                    onError?.(new Error("Upload Error"));\n                                }\n                            }}\n                        >\n                            <p className="ant-upload-text">\n                                Drag &amp; drop a file in this area\n                            </p>\n                        </Upload.Dragger>\n                    </Form.Item>\n                </Form.Item>\n            </Form>\n        </Modal>\n    );\n};\n')))),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/appwrite/create-product.gif",alt:"create"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"bonus---realtime-feature"},"Bonus - Realtime Feature"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," lets you add Realtime support to your app via ",(0,r.kt)("inlineCode",{parentName:"p"},"liveProvider")," prop for ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>")),". It can be used to update and show data in Realtime throughout your app. ",(0,r.kt)("strong",{parentName:"p"},"refine")," remains agnostic in its API to allow different solutions(",(0,r.kt)("a",{parentName:"p",href:"https://ably.com"},"Ably"),", ",(0,r.kt)("a",{parentName:"p",href:"https://socket.io/"},"Socket.IO"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mercure.rocks/"},"Mercure"),", ",(0,r.kt)("a",{parentName:"p",href:"https://supabase.com"},"supabase"),", etc.) to be integrated."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/providers/live-provider/"},"Refer to the Live Provider documentation for detailed information. \u2192")),(0,r.kt)("p",null,"Appwrite Realtime API support is out-of-the-box supported by ",(0,r.kt)("strong",{parentName:"p"},"refine"),", just add two lines to make your App Realtime."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, Authenticated } from "@refinedev/core";\nimport {\n    ThemedLayoutV2,\n    notificationProvider,\n    ErrorComponent,\n    RefineThemes,\n} from "@refinedev/antd";\nimport { dataProvider, liveProvider } from "@refinedev/appwrite";\nimport routerProvider, {\n    CatchAllNavigate,\n    NavigateToResource,\n} from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { ConfigProvider } from "antd";\nimport "@refinedev/antd/dist/reset.css";\n\nimport { appwriteClient } from "utility";\nimport { authProvider } from "./authProvider";\n\nimport { CustomSider } from "components/sider";\nimport { Login } from "pages/login";\nimport { ProductList } from "pages/products";\nimport { ProductShow } from "components/product";\nimport { StoreProvider } from "context/store";\n\nfunction App() {\n    return (\n        <StoreProvider>\n            <BrowserRouter>\n                <ConfigProvider theme={RefineThemes.Blue}>\n                    <Refine\n                        routerProvider={routerProvider}\n                        //highlight-start\n                        liveProvider={liveProvider(appwriteClient)}\n                        options={{ liveMode: "auto" }}\n                        //highlight-end\n                        dataProvider={dataProvider(appwriteClient)}\n                        authProvider={authProvider}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "61cb01b17ef57",\n                                list: "/products",\n                                show: "/products/show:id",\n                                meta: {\n                                    label: "Products",\n                                },\n                            },\n                        ]}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <Authenticated\n                                        fallback={\n                                            <CatchAllNavigate to="/login" />\n                                        }\n                                    >\n                                        <ThemedLayoutV2 Sider={CustomSider}>\n                                            <Outlet />\n                                        </ThemedLayoutV2>\n                                    </Authenticated>\n                                }\n                            >\n                                <Route path="products">\n                                    <Route index element={<ProductList />} />\n                                    <Route\n                                        path="show:id"\n                                        element={<ProductShow />}\n                                    />\n                                </Route>\n                            </Route>\n                            <Route\n                                element={\n                                    <Authenticated fallback={<Outlet />}>\n                                        <NavigateToResource />\n                                    </Authenticated>\n                                }\n                            >\n                                <Route path="/login" element={<Login />} />\n                            </Route>\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Routes>\n                    </Refine>\n                </ConfigProvider>\n            </BrowserRouter>\n        </StoreProvider>\n    );\n}\n\nexport default App;\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this guide and in our example app, we talked about how we can build multitenancy apps with ",(0,r.kt)("strong",{parentName:"p"},"refine"),". Developing a multitenancy application is quite simple with the flexible route infrastructure of ",(0,r.kt)("inlineCode",{parentName:"p"},"refine"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(u,{path:"multi-tenancy-appwrite",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);