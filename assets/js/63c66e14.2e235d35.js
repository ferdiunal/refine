"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||l[m]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={id:"router-provider",title:"Migrating Router Provider from 3.x.x to 4.x.x",sidebar_label:"Migrating Router Provider"},i=void 0,u={unversionedId:"migration-guide/router-provider",id:"migration-guide/router-provider",title:"Migrating Router Provider from 3.x.x to 4.x.x",description:"Motivation behind the changes",source:"@site/docs/migration-guide/router-provider.md",sourceDirName:"migration-guide",slug:"/migration-guide/router-provider",permalink:"/docs/migration-guide/router-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/migration-guide/router-provider.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1679379351,formattedLastUpdatedAt:"Mar 21, 2023",frontMatter:{id:"router-provider",title:"Migrating Router Provider from 3.x.x to 4.x.x",sidebar_label:"Migrating Router Provider"},sidebar:"someSidebar",previous:{title:"Migrating Auth Provider",permalink:"/docs/migration-guide/auth-provider"},next:{title:"API Reference",permalink:"/docs/api-reference"}},s={},p=[{value:"Motivation behind the changes",id:"motivation-behind-the-changes",level:2},{value:"Important Notes",id:"important-notes",level:2},{value:"Changes in the <code>&lt;Refine&gt;</code> Component",id:"changes-in-the-refine-component",level:3},{value:"Changes in Custom <code>&lt;Sider&gt;</code> Components",id:"changes-in-custom-sider-components",level:3},{value:"Updating <code>useRouterContext</code> Usage",id:"updating-useroutercontext-usage",level:4},{value:"Behavioral Changes in Routing",id:"behavioral-changes-in-routing",level:3},{value:"Authentication and Access Control",id:"authentication-and-access-control",level:4},{value:"Using the New Router Providers",id:"using-the-new-router-providers",level:2},{value:"React Router v6",id:"react-router-v6",level:3},{value:"Next.js",id:"nextjs",level:3},{value:"Remix",id:"remix",level:3}],d={toc:p};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"motivation-behind-the-changes"},"Motivation behind the changes"),(0,r.kt)("p",null,"Our motivation behind the changes in ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," and route handling is to increase flexibility and ease of use for our users."),(0,r.kt)("p",null,"By simplifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," to just an interaction and connection point between refine and the router, we eliminated the need for a specific way of defining routes and a ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," altogether. This means that ",(0,r.kt)("strong",{parentName:"p"},"refine")," will meet enterprise-grade requirements. While router bindings are optional, we recommend passing them to ",(0,r.kt)("strong",{parentName:"p"},"refine")," for optimal usage."),(0,r.kt)("p",null,"By making these changes, our users can integrate ",(0,r.kt)("strong",{parentName:"p"},"refine")," into their existing projects without needing to modify their current routes or application structure."),(0,r.kt)("p",null,"Ultimately, our goal is to make it simple for users to handle their unique situations without enforcing a particular methodology. With the updated router provider, you can continue using routers in the same way as before, while still benefiting from the features that ",(0,r.kt)("strong",{parentName:"p"},"refine")," offers."),(0,r.kt)("h2",{id:"important-notes"},"Important Notes"),(0,r.kt)("p",null,"With the new router provider, authentication checks are not handled by the routes. If your application utilizes ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider"),", you will be responsible for performing those checks yourself. You can easily do so by employing the ",(0,r.kt)("inlineCode",{parentName:"p"},"useIsAuthenticated")," hook or the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authenticated")," component. Example implementations are present in the documentation (",(0,r.kt)("a",{parentName:"p",href:"#using-the-new-router-providers"},"Check below")," for more info on each router) and in the example apps."),(0,r.kt)("p",null,"Similar to authentication flow, access control checks are also not handled by the routes internally. You will need to handle them yourself using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCan")," hook or the ",(0,r.kt)("inlineCode",{parentName:"p"},"CanAccess")," component."),(0,r.kt)("p",null,"The creation and control of routes is entirely up to the user. You must manually create routes, and if desired, you can pass the routes to actions of your resources. Although we provide methods for generating routes from resources, these methods are optional and not recommended for optimal flexibility. However, they are available under each router if you choose to use them."),(0,r.kt)("h3",{id:"changes-in-the-refine-component"},"Changes in the ",(0,r.kt)("inlineCode",{parentName:"h3"},"<Refine>")," Component"),(0,r.kt)("p",null,"Since the route handling is now detached from the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component, this also effects the props that it accepts. Layout related props such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Layout"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Sider"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Header"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Footer,")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"OffLayoutArea")," are deprecated and won't have any effects when using the new router providers. The components from the UI packages are still exported and well supported. You can use them inside your app while creating your routes/pages."),(0,r.kt)("p",null,"Similarly, the ",(0,r.kt)("inlineCode",{parentName:"p"},"DashboardPage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"catchAll")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LoginPage")," components are also deprecated. You can now create your own routes and pages for these purposes without any limitations."),(0,r.kt)("admonition",{title:"Legacy Behavior (Dashboard Page)",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"After the deprecation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"DashboardPage")," prop, you need to create your own index route for your dashboard. To add this item to your ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider>"),", you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," array to add it to your menu. ",(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," array to generate the menu items. You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," hook to create your own menu.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"catchAll")," prop was used to handle error pages. You can now create your own error page with the appropriate way for your router. To see examples, ",(0,r.kt)("a",{parentName:"p",href:"#using-the-new-router-providers"},"check out the documentation")," for each router."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LoginPage")," prop was used to handle the login page. You can now create your own login page with the appropriate way for your router. To see examples, ",(0,r.kt)("a",{parentName:"p",href:"#using-the-new-router-providers"},"check out the documentation")," for each router."),(0,r.kt)("h3",{id:"changes-in-custom-sider-components"},"Changes in Custom ",(0,r.kt)("inlineCode",{parentName:"h3"},"<Sider>")," Components"),(0,r.kt)("p",null,"If you've swizzled the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider>")," component from your UI package and customized it, you might need to update them accordingly if you're using the new ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," prop of ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,r.kt)("h4",{id:"updating-useroutercontext-usage"},"Updating ",(0,r.kt)("inlineCode",{parentName:"h4"},"useRouterContext")," Usage"),(0,r.kt)("p",null,"With the new ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," prop, the v3 compatible router providers are now provided through ",(0,r.kt)("inlineCode",{parentName:"p"},"legacyRouterProvider")," prop. If you're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"legacyRouterProvider"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useRouterContext")," will continue working as before. If you're using the new ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useRouterContext")," hook is deprecated and won't work with the new router providers. You can easily replace the usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"useRouterContext")," with the new router hooks such as ",(0,r.kt)("inlineCode",{parentName:"p"},"useLink"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useGo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useBack")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useParsed.")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider>")," components, we've used the ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," component from ",(0,r.kt)("inlineCode",{parentName:"p"},"useRouterContext"),". You can easily replace the usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLink")," hook. If you wan't you can always switch to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," implementations from your router. (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," component or ",(0,r.kt)("inlineCode",{parentName:"p"},"next/link")," component)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'- import { useRouterContext } from "@refinedev/core";\n+ import { useLink } from "@refinedev/core";\n\nconst CustomSider = () => {\n-   const { Link } = useRouterContext();\n+   const Link = useLink();\n\n    /* ... */\n}\n')),(0,r.kt)("p",null,"If you have customized the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," hook, you might need to check the usage of it to make sure it's working as expected. Even though the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," hook is not changed in its return values, the way it generates the menu item keys is changed."),(0,r.kt)("h3",{id:"behavioral-changes-in-routing"},"Behavioral Changes in Routing"),(0,r.kt)("p",null,"Since ",(0,r.kt)("strong",{parentName:"p"},"refine")," doesn't create routes internally anymore, you are free to create your routes according to your framework without any limitation."),(0,r.kt)("p",null,"This means, tasks like ",(0,r.kt)("inlineCode",{parentName:"p"},"authentication")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"access control")," are also de-coupled from ",(0,r.kt)("strong",{parentName:"p"},"refine"),"."),(0,r.kt)("p",null,"However, for convenience we still provide a set of helpers for you to handle these tasks easily."),(0,r.kt)("h4",{id:"authentication-and-access-control"},"Authentication and Access Control"),(0,r.kt)("p",null,"This also means that the authentication and access control flows should be handled according to your framework."),(0,r.kt)("p",null,"However ",(0,r.kt)("strong",{parentName:"p"},"refine")," still provides some helpers for user's convenience."),(0,r.kt)("p",null,"For ",(0,r.kt)("strong",{parentName:"p"},"authentication"),", you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/auth/authenticated"},(0,r.kt)("inlineCode",{parentName:"a"},"Authenticated"))," component as wrapper or use ",(0,r.kt)("inlineCode",{parentName:"p"},"useIsAuthenticated")," hook inside your components."),(0,r.kt)("p",null,"For ",(0,r.kt)("strong",{parentName:"p"},"access control"),", you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/accessControl/can-access"},(0,r.kt)("inlineCode",{parentName:"a"},"CanAccess"))," component as wrapper or use ",(0,r.kt)("inlineCode",{parentName:"p"},"useCan")," hook in your components."),(0,r.kt)("h2",{id:"using-the-new-router-providers"},"Using the New Router Providers"),(0,r.kt)("p",null,"We've created documents for each router we provide bindings for. You can check them out below:"),(0,r.kt)("h3",{id:"react-router-v6"},"React Router v6"),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/react-router-v6"),", you will need to generate your routes using ",(0,r.kt)("inlineCode",{parentName:"p"},"Routes"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Route"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Outlet")," and similar components, and then wrap the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component with your chosen router (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"<BrowserRouter>"),"). Afterwards, you may pass the routerProvider to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/react-router-v6"),", and specify the paths for your resource actions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," array. Our documentation provides detailed instructions on how to create routes, associate them with your resources, and includes examples for reference."),(0,r.kt)("admonition",{title:"Known Issues",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Refine used to use ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom@6.3.0"),", but now it uses ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom@latest"),"."),(0,r.kt)("p",{parentName:"admonition"},"After version ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom@6.5.0"),", support for partial segments has been dropped. Therefore, your custom routes may not work as expected. If you have such a usage, you need to update."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'  <Refine\n-    routerProvider={{\n-       ...routerProvider,\n-        routes: [\n-            {\n-                element: <ProfilePage />,\n-                path: "profile/@:username/:page",\n            },\n        ],\n    }}\n+    routerProvider={routerProvider}\n  >\n+  <Route path="profile/:username/:page" element={<ProfilePage />} />\n  </Refine>\n')),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'- <Link to="profile/@:username/:page" />\n+ <Link to="profile/:username/:page" />\n')),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/remix-run/react-router/releases/tag/react-router%406.5.0"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"react-router-dom@6.5.0")," changelog for more information ->"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/routers/react-router-v6"},"Check out the documentation for ",(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/react-router-v6")),"\n",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com"},"Check out the documentation for ",(0,r.kt)("inlineCode",{parentName:"a"},"react-router-dom"))),(0,r.kt)("h3",{id:"nextjs"},"Next.js"),(0,r.kt)("p",null,"If you are using Next.js, you will need to create your routes using the file system-based routing method as you would normally do in Next.js. Afterwards, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/nextjs-router")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component, and specify the paths for your resource actions in the resources array. Our documentation provides step-by-step instructions on how to create routes and associate them with your resources, complete with examples for your reference."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/routers/nextjs"},"Check out the documentation for ",(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/nextjs-router")),"\n",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/getting-started"},"Check out the documentation for ",(0,r.kt)("inlineCode",{parentName:"a"},"Next.js"))),(0,r.kt)("h3",{id:"remix"},"Remix"),(0,r.kt)("p",null,"If you are using Remix, you will need to create your routes using the file system-based routing method as you would normally do in Remix. Afterwards, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/remix-router")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component, and specify the paths for your resource actions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," array. Our documentation provides comprehensive instructions on how to create routes and associate them with your resources, along with examples to guide you through the process."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/routers/remix"},"Check out the documentation for ",(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/remix-router")),"\n",(0,r.kt)("a",{parentName:"p",href:"https://remix.run/docs/en/main"},"Check out the documentation for ",(0,r.kt)("inlineCode",{parentName:"a"},"Remix"))))}l.isMDXComponent=!0}}]);