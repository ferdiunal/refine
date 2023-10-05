"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20721],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},99221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>u});t(67294);var o=t(3905);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={id:"real-time",title:"Live / Realtime",sidebar_label:"Live / Realtime"},l=void 0,d={unversionedId:"advanced-tutorials/real-time",id:"advanced-tutorials/real-time",title:"Live / Realtime",description:"refine lets you add Realtime support to your app via the liveProvider prop for ``. It can be used to update and show data in Realtime throughout your app. refine remains agnostic in its API to allow different solutions(Ably, Socket.IO, Mercure, supabase, etc.) to be integrated.",source:"@site/docs/advanced-tutorials/real-time.md",sourceDirName:"advanced-tutorials",slug:"/advanced-tutorials/real-time",permalink:"/docs/advanced-tutorials/real-time",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/real-time.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1696513193,formattedLastUpdatedAt:"Oct 5, 2023",frontMatter:{id:"real-time",title:"Live / Realtime",sidebar_label:"Live / Realtime"},sidebar:"someSidebar",previous:{title:"CSV Import",permalink:"/docs/advanced-tutorials/import-export/csv-import"},next:{title:"Multi Level Menu",permalink:"/docs/advanced-tutorials/multi-level-menu/"}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Adding <code>liveProvider</code>",id:"adding-liveprovider",level:2},{value:"Configuring <code>liveMode</code>",id:"configuring-livemode",level:2},{value:"Custom Subscriptions",id:"custom-subscriptions",level:2},{value:"Example",id:"example",level:2}],c=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const f={toc:u};function g(e){var{components:n}=e,t=i(e,["components"]);return(0,o.kt)("wrapper",a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){r(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," lets you add Realtime support to your app via the ",(0,o.kt)("inlineCode",{parentName:"p"},"liveProvider")," prop for ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine />")),". It can be used to update and show data in Realtime throughout your app. ",(0,o.kt)("strong",{parentName:"p"},"refine")," remains agnostic in its API to allow different solutions(",(0,o.kt)("a",{parentName:"p",href:"https://ably.com"},"Ably"),", ",(0,o.kt)("a",{parentName:"p",href:"https://socket.io/"},"Socket.IO"),", ",(0,o.kt)("a",{parentName:"p",href:"https://mercure.rocks/"},"Mercure"),", ",(0,o.kt)("a",{parentName:"p",href:"https://supabase.com"},"supabase"),", etc.) to be integrated."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"Refer to the Live Provider documentation for detailed information. ","\u2192")),(0,o.kt)("p",null,"We will be using ",(0,o.kt)("a",{parentName:"p",href:"https://ably.com"},"Ably")," in this guide to provide Realtime features."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"We need to install the Ably live provider package from ",(0,o.kt)("strong",{parentName:"p"},"refine"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @refinedev/ably\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,o.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))," package. If you are using Refine headless, you need to provide the components, hooks, or helpers imported from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,o.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))," package.")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Since we will need ",(0,o.kt)("inlineCode",{parentName:"p"},"apiKey")," from Ably, you must first register and get the key from ",(0,o.kt)("a",{parentName:"p",href:"https://ably.com"},"Ably"),"."),(0,o.kt)("p",null,"The app will have one resource: ",(0,o.kt)("strong",{parentName:"p"},"posts")," with CRUD pages(list, create, edit, and show) similar to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/base-antd/src/pages/posts"},"base example"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#example"},"You can also refer to CodeSandbox to see the final state of the app ","\u2192")),(0,o.kt)("h2",{id:"adding-liveprovider"},"Adding ",(0,o.kt)("inlineCode",{parentName:"h2"},"liveProvider")),(0,o.kt)("p",null,"Firstly we create a Ably client for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/ably"},(0,o.kt)("inlineCode",{parentName:"a"},"@refinedev/ably"))," live provider."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/utility/ablyClient.ts"',title:'"src/utility/ablyClient.ts"'},'import { Ably } from "@refinedev/ably";\n\nexport const ablyClient = new Ably.Realtime("your-api-key");\n')),(0,o.kt)("p",null,"Then pass ",(0,o.kt)("inlineCode",{parentName:"p"},"liveProvider")," from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/ably"},(0,o.kt)("inlineCode",{parentName:"a"},"@refinedev/ably"))," to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport {\n    ThemedLayoutV2,\n    notificationProvider,\n    ErrorComponent,\n} from "@refinedev/antd";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { ConfigProvider } from "antd";\nimport "@refinedev/antd/dist/reset.css";\n\n//highlight-next-line\nimport { liveProvider } from "@refinedev/ably";\n\n//highlight-next-line\nimport { ablyClient } from "utility/ablyClient";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <ConfigProvider theme={RefineThemes.Blue}>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    //highlight-start\n                    liveProvider={liveProvider(ablyClient)}\n                    options={{ liveMode: "auto" }}\n                    //highlight-end\n                    resources={[\n                        {\n                            name: "posts",\n                            list: "/posts",\n                            show: "/posts/show/:id",\n                            create: "/posts/create",\n                            edit: "/posts/edit/:id",\n                            meta: {\n                                canDelete: true,\n                            },\n                        },\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            <Route index element={<NavigateToResource />} />\n                            <Route path="/posts" element={<PostList />} />\n                            <Route\n                                path="/posts/create"\n                                element={<PostCreate />}\n                            />\n                            <Route\n                                path="/posts/show/:id"\n                                element={<PostShow />}\n                            />\n                            <Route\n                                path="/posts/edit/:id"\n                                element={<PostEdit />}\n                            />\n                        </Route>\n                        <Route path="*" element={<ErrorComponent />} />\n                    </Routes>\n                </Refine>\n            </ConfigProvider>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For live features to work automatically we added ",(0,o.kt)("inlineCode",{parentName:"p"},'liveMode: "auto"')," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," prop."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider#livemode"},"Refer to the Live Provider documentation for detailed information. ","\u2192"))),(0,o.kt)("br",null),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/real-time/real-time.gif",alt:"Realtime Demo"}),(0,o.kt)("h2",{id:"configuring-livemode"},"Configuring ",(0,o.kt)("inlineCode",{parentName:"h2"},"liveMode")),(0,o.kt)("p",null,"We may not want to make Realtime changes instantly in some cases. In these cases, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"manual")," mode to prevent the data from changing instantly. Then we can handle the event manually."),(0,o.kt)("p",null,"For example in an edit page for a record, It would be better to handle Realtime data manually to prevent synchronization problems caused by multiple editing sources. We would not want the data changing while we are trying to edit a record."),(0,o.kt)("p",null,"We will be alerted about changes in an alert box on top of the form instead of changing the data instantly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/edit.tsx"',title:'"src/pages/posts/edit.tsx"'},'// ...\n\nexport const PostEdit: React.FC = () => {\n    //highlight-start\n    const [deprecated, setDeprecated] = useState<\n        "deleted" | "updated" | undefined\n    >();\n    //highlight-end\n\n    const { formProps, saveButtonProps, queryResult } = useForm<IPost>({\n        //highlight-start\n        liveMode: "manual",\n        onLiveEvent: (event) => {\n            if (event.type === "deleted" || event.type === "updated") {\n                setDeprecated(event.type);\n            }\n        },\n        //highlight-end\n    });\n\n    //highlight-start\n    const handleRefresh = () => {\n        queryResult?.refetch();\n        setDeprecated(undefined);\n    };\n    //highlight-end\n\n    // ...\n\n    return (\n        <Edit /* ... */>\n            //highlight-start\n            {deprecated === "deleted" && (\n                <Alert\n                    message="This post is deleted."\n                    type="warning"\n                    style={{ marginBottom: 20 }}\n                    action={<ListButton size="small" />}\n                />\n            )}\n            {deprecated === "updated" && (\n                <Alert\n                    message="This post is updated. Refresh to see changes."\n                    type="warning"\n                    style={{ marginBottom: 20 }}\n                    action={\n                        <RefreshButton size="small" onClick={handleRefresh} />\n                    }\n                />\n            )}\n            //highlight-end\n            <Form {...formProps} layout="vertical">\n                // ....\n            </Form>\n        </Edit>\n    );\n};\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We can also implement a similar thing on the show page."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"#example"},"Refer to the CodeSandbox example for detailed information. ","\u2192"))),(0,o.kt)("br",null),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/real-time/manual-mode.gif",alt:"Manual Mode Demo"}),(0,o.kt)("h2",{id:"custom-subscriptions"},"Custom Subscriptions"),(0,o.kt)("p",null,"You can subscribe to events emitted within ",(0,o.kt)("strong",{parentName:"p"},"refine")," in any place in your app with ",(0,o.kt)("inlineCode",{parentName:"p"},"useSubscription"),"."),(0,o.kt)("p",null,"For example, we can subscribe to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"create"))," event for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"posts"))," resource and we can show a badge for the number of events in the sider menu."),(0,o.kt)("p",null,"Firstly, let's implement a custom sider like in ",(0,o.kt)("a",{parentName:"p",href:"/docs/examples/customization/customSider"},"this example"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Custom Sider Menu"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/sider.tsx"',title:'"src/components/sider.tsx"'},'import React, { useState } from "react";\nimport {\n    ITreeMenu,\n    CanAccess,\n    useIsExistAuthentication,\n    useTranslate,\n    useLogout,\n    useMenu,\n    useWarnAboutChange,\n} from "@refinedev/core";\nimport { Link } from "react-router-dom";\nimport { Sider, ThemedTitleV2 } from "@refinedev/antd";\nimport { Layout as AntdLayout, Menu, Grid, theme, Button } from "antd";\nimport {\n    LogoutOutlined,\n    UnorderedListOutlined,\n    RightOutlined,\n    LeftOutlined,\n} from "@ant-design/icons";\nimport { antLayoutSider, antLayoutSiderMobile } from "./styles";\n\nconst { useToken } = theme;\n\nexport const CustomSider: typeof Sider = ({ render }) => {\n    const { token } = useToken();\n    const [collapsed, setCollapsed] = useState<boolean>(false);\n    const isExistAuthentication = useIsExistAuthentication();\n    const { warnWhen, setWarnWhen } = useWarnAboutChange();\n    const { mutate: mutateLogout } = useLogout();\n    const translate = useTranslate();\n    const { menuItems, selectedKey, defaultOpenKeys } = useMenu();\n    const { SubMenu } = Menu;\n\n    const breakpoint = Grid.useBreakpoint();\n\n    const isMobile =\n        typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;\n\n    const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {\n        return tree.map((item: ITreeMenu) => {\n            const { name, children, meta, key, list } = item;\n\n            const icon = meta?.icon;\n            const label = meta?.label ?? name;\n            const parent = meta?.parent;\n            const route =\n                typeof list === "string"\n                    ? list\n                    : typeof list !== "function"\n                    ? list?.path\n                    : key;\n\n            if (children.length > 0) {\n                return (\n                    <SubMenu\n                        key={route}\n                        icon={icon ?? <UnorderedListOutlined />}\n                        title={label}\n                    >\n                        {renderTreeView(children, selectedKey)}\n                    </SubMenu>\n                );\n            }\n            const isSelected = route === selectedKey;\n            const isRoute = !(parent !== undefined && children.length === 0);\n            return (\n                <CanAccess\n                    key={route}\n                    resource={name.toLowerCase()}\n                    action="list"\n                    params={{ resource: item }}\n                >\n                    <Menu.Item\n                        key={route}\n                        style={{\n                            textTransform: "capitalize",\n                        }}\n                        icon={icon ?? (isRoute && <UnorderedListOutlined />)}\n                    >\n                        {route ? <Link to={route || "/"}>{label}</Link> : label}\n                        {!collapsed && isSelected && (\n                            <div className="ant-menu-tree-arrow" />\n                        )}\n                    </Menu.Item>\n                </CanAccess>\n            );\n        });\n    };\n\n    const handleLogout = () => {\n        if (warnWhen) {\n            const confirm = window.confirm(\n                translate(\n                    "warnWhenUnsavedChanges",\n                    "Are you sure you want to leave? You have unsaved changes.",\n                ),\n            );\n\n            if (confirm) {\n                setWarnWhen(false);\n                mutateLogout();\n            }\n        } else {\n            mutateLogout();\n        }\n    };\n\n    const logout = isExistAuthentication && (\n        <Menu.Item\n            key="logout"\n            onClick={handleLogout}\n            icon={<LogoutOutlined />}\n        >\n            {translate("buttons.logout", "Logout")}\n        </Menu.Item>\n    );\n\n    const items = renderTreeView(menuItems, selectedKey);\n\n    const renderSider = () => {\n        if (render) {\n            return render({\n                dashboard: null,\n                items,\n                logout,\n                collapsed,\n            });\n        }\n        return (\n            <>\n                {items}\n                {logout}\n            </>\n        );\n    };\n\n    const siderStyle = isMobile ? antLayoutSiderMobile : antLayoutSider;\n\n    return (\n        <AntdLayout.Sider\n            collapsible\n            collapsedWidth={isMobile ? 0 : 80}\n            collapsed={collapsed}\n            breakpoint="lg"\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n            style={{\n                ...siderStyle,\n                backgroundColor: token.colorBgContainer,\n                borderRight: `1px solid ${token.colorBgElevated}`,\n            }}\n            trigger={\n                !isMobile && (\n                    <Button\n                        type="text"\n                        style={{\n                            borderRadius: 0,\n                            height: "100%",\n                            width: "100%",\n                            backgroundColor: token.colorBgElevated,\n                        }}\n                    >\n                        {collapsed ? (\n                            <RightOutlined\n                                style={{\n                                    color: token.colorPrimary,\n                                }}\n                            />\n                        ) : (\n                            <LeftOutlined\n                                style={{\n                                    color: token.colorPrimary,\n                                }}\n                            />\n                        )}\n                    </Button>\n                )\n            }\n        >\n            <div\n                style={{\n                    width: collapsed ? "80px" : "200px",\n                    padding: collapsed ? "0" : "0 16px",\n                    display: "flex",\n                    justifyContent: collapsed ? "center" : "flex-start",\n                    alignItems: "center",\n                    height: "64px",\n                    backgroundColor: token.colorBgElevated,\n                    fontSize: "14px",\n                }}\n            >\n                <ThemedTitleV2 collapsed={collapsed} />\n            </div>\n            <Menu\n                defaultOpenKeys={defaultOpenKeys}\n                selectedKeys={[selectedKey]}\n                mode="inline"\n                style={{\n                    marginTop: "8px",\n                    border: "none",\n                }}\n                onClick={() => {\n                    if (!breakpoint.lg) {\n                        setCollapsed(true);\n                    }\n                }}\n            >\n                {renderSider()}\n            </Menu>\n        </AntdLayout.Sider>\n    );\n};\n')))),(0,o.kt)("p",null,"Now, let's add a badge for the number of create and update events for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"posts"))," menu items."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show Custom Sider Menu with subscription bagde code"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport {\n    ITreeMenu,\n    CanAccess,\n    useIsExistAuthentication,\n    useTranslate,\n    useLogout,\n    useMenu,\n    useWarnAboutChange,\n    useSubscription,\n} from "@refinedev/core";\nimport { Link } from "react-router-dom";\nimport { Sider, ThemedTitleV2 } from "@refinedev/antd";\nimport { Layout as AntdLayout, Menu, Grid, theme, Button, Badge } from "antd";\nimport {\n    LogoutOutlined,\n    UnorderedListOutlined,\n    RightOutlined,\n    LeftOutlined,\n} from "@ant-design/icons";\n\nimport { antLayoutSider, antLayoutSiderMobile } from "./styles";\n\nconst { useToken } = theme;\n\nexport const CustomSider: typeof Sider = ({ render }) => {\n    const { token } = useToken();\n    const [collapsed, setCollapsed] = useState<boolean>(false);\n    const isExistAuthentication = useIsExistAuthentication();\n    const { warnWhen, setWarnWhen } = useWarnAboutChange();\n    const { mutate: mutateLogout } = useLogout();\n    const translate = useTranslate();\n    const { menuItems, selectedKey, defaultOpenKeys } = useMenu();\n    const { SubMenu } = Menu;\n    const [subscriptionCount, setSubscriptionCount] = useState(0);\n\n    const breakpoint = Grid.useBreakpoint();\n\n    const isMobile =\n        typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;\n\n    useSubscription({\n        channel: "resources/posts",\n        types: ["created", "updated"],\n        onLiveEvent: () => setSubscriptionCount((prev) => prev + 1),\n    });\n\n    const renderTreeView = (tree: ITreeMenu[], selectedKey?: string) => {\n        return tree.map((item: ITreeMenu) => {\n            const { name, children, meta, key, list } = item;\n\n            const icon = meta?.icon;\n            const label = meta?.label ?? name;\n            const parent = meta?.parent;\n            const route =\n                typeof list === "string"\n                    ? list\n                    : typeof list !== "function"\n                    ? list?.path\n                    : key;\n\n            if (children.length > 0) {\n                return (\n                    <SubMenu\n                        key={key}\n                        icon={icon ?? <UnorderedListOutlined />}\n                        title={label}\n                    >\n                        {renderTreeView(children, selectedKey)}\n                    </SubMenu>\n                );\n            }\n            const isSelected = route === selectedKey;\n            const isRoute = !(parent !== undefined && children.length === 0);\n            return (\n                <CanAccess\n                    key={key}\n                    resource={name.toLowerCase()}\n                    action="list"\n                    params={{ resource: item }}\n                >\n                    <Menu.Item\n                        key={route}\n                        style={{\n                            textTransform: "capitalize",\n                        }}\n                        icon={icon ?? (isRoute && <UnorderedListOutlined />)}\n                    >\n                        {route ? <Link to={route || "/"}>{label}</Link> : label}\n                        {route && (\n                            <>\n                                {label.toLowerCase() === "posts" && (\n                                    <Badge\n                                        size="small"\n                                        count={subscriptionCount}\n                                        offset={[2, -15]}\n                                    />\n                                )}\n                            </>\n                        )}\n                        {!collapsed && isSelected && (\n                            <div className="ant-menu-tree-arrow" />\n                        )}\n                    </Menu.Item>\n                </CanAccess>\n            );\n        });\n    };\n\n    const handleLogout = () => {\n        if (warnWhen) {\n            const confirm = window.confirm(\n                translate(\n                    "warnWhenUnsavedChanges",\n                    "Are you sure you want to leave? You have unsaved changes.",\n                ),\n            );\n\n            if (confirm) {\n                setWarnWhen(false);\n                mutateLogout();\n            }\n        } else {\n            mutateLogout();\n        }\n    };\n\n    const logout = isExistAuthentication && (\n        <Menu.Item\n            key="logout"\n            onClick={handleLogout}\n            icon={<LogoutOutlined />}\n        >\n            {translate("buttons.logout", "Logout")}\n        </Menu.Item>\n    );\n\n    const items = renderTreeView(menuItems, selectedKey);\n\n    const renderSider = () => {\n        if (render) {\n            return render({\n                dashboard: null,\n                items,\n                logout,\n                collapsed,\n            });\n        }\n        return (\n            <>\n                {items}\n                {logout}\n            </>\n        );\n    };\n\n    const siderStyle = isMobile ? antLayoutSiderMobile : antLayoutSider;\n\n    return (\n        <AntdLayout.Sider\n            collapsible\n            collapsedWidth={isMobile ? 0 : 80}\n            collapsed={collapsed}\n            breakpoint="lg"\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n            style={{\n                ...siderStyle,\n                backgroundColor: token.colorBgContainer,\n                borderRight: `1px solid ${token.colorBgElevated}`,\n            }}\n            trigger={\n                !isMobile && (\n                    <Button\n                        type="text"\n                        style={{\n                            borderRadius: 0,\n                            height: "100%",\n                            width: "100%",\n                            backgroundColor: token.colorBgElevated,\n                        }}\n                    >\n                        {collapsed ? (\n                            <RightOutlined\n                                style={{\n                                    color: token.colorPrimary,\n                                }}\n                            />\n                        ) : (\n                            <LeftOutlined\n                                style={{\n                                    color: token.colorPrimary,\n                                }}\n                            />\n                        )}\n                    </Button>\n                )\n            }\n        >\n            <div\n                style={{\n                    width: collapsed ? "80px" : "200px",\n                    padding: collapsed ? "0" : "0 16px",\n                    display: "flex",\n                    justifyContent: collapsed ? "center" : "flex-start",\n                    alignItems: "center",\n                    height: "64px",\n                    backgroundColor: token.colorBgElevated,\n                    fontSize: "14px",\n                }}\n            >\n                <ThemedTitleV2 collapsed={collapsed} />\n            </div>\n            <Menu\n                defaultOpenKeys={defaultOpenKeys}\n                selectedKeys={[selectedKey]}\n                mode="inline"\n                style={{\n                    marginTop: "8px",\n                    border: "none",\n                }}\n                onClick={({ key }) => {\n                    if (!breakpoint.lg) {\n                        setCollapsed(true);\n                    }\n\n                    if (key === "/posts") {\n                        setSubscriptionCount(0);\n                    }\n                }}\n            >\n                {renderSider()}\n            </Menu>\n        </AntdLayout.Sider>\n    );\n};\n')))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can subscribe to specific ",(0,o.kt)("inlineCode",{parentName:"p"},"ids")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"params"),". For example, you can subscribe to ",(0,o.kt)("strong",{parentName:"p"},"deleted")," and ",(0,o.kt)("strong",{parentName:"p"},"updated")," events from ",(0,o.kt)("strong",{parentName:"p"},"posts")," resource with ",(0,o.kt)("strong",{parentName:"p"},"id")," ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'useSubscription({\n    channel: "resources/posts",\n    type: ["deleted", "updated"],\n    //highlight-start\n    params: {\n        ids: ["1", "2"],\n    },\n    //highlight-end\n    onLiveEvent: () => setSubscriptionCount((prev) => prev + 1),\n});\n'))),(0,o.kt)("br",null),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/real-time/custom-sider.gif",alt:"Custom Sider Demo"}),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(c,{path:"live-provider-ably",mdxType:"CodeSandboxExample"}))}g.isMDXComponent=!0}}]);