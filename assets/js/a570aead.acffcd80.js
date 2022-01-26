"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15627],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32910:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return l},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"ssr-nextjs",title:"SSR-Next.js"},p=void 0,d={unversionedId:"guides-and-concepts/ssr-nextjs",id:"version-2.xx.xx/guides-and-concepts/ssr-nextjs",isDocsHomePage:!1,title:"SSR-Next.js",description:"refine can be used with Next.js to SSR your pages. It doesn't get in the way and follows Next.js conventions and also provides helper modules when necessary.",source:"@site/versioned_docs/version-2.xx.xx/guides-and-concepts/ssr-nextjs.md",sourceDirName:"guides-and-concepts",slug:"/guides-and-concepts/ssr-nextjs",permalink:"/docs/guides-and-concepts/ssr-nextjs",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/guides-and-concepts/ssr-nextjs.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"Vince Fulco--Bighire.io",lastUpdatedAt:1643182749,formattedLastUpdatedAt:"1/26/2022",frontMatter:{id:"ssr-nextjs",title:"SSR-Next.js"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Appwrite",permalink:"/docs/guides-and-concepts/data-provider/appwrite"},next:{title:"Access Control",permalink:"/docs/guides-and-concepts/access-control"}},l=[{value:"Setup",id:"setup",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Custom Page",id:"custom-page",children:[{value:"SSR",id:"ssr",children:[],level:3}],level:2},{value:"Standard CRUD Page",id:"standard-crud-page",children:[{value:"SSR",id:"ssr-1",children:[],level:3}],level:2},{value:"Server Side Authentication",id:"server-side-authentication",children:[],level:2},{value:"<code>syncWithLocation</code> and Query Parameters in SSR",id:"syncwithlocation-and-query-parameters-in-ssr",children:[],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],c={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," can be used with ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/getting-started"},(0,i.kt)("strong",{parentName:"a"},"Next.js"))," to SSR your pages. It doesn't get in the way and follows Next.js conventions and also provides helper modules when necessary."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pankod/refine-nextjs-router"},(0,i.kt)("strong",{parentName:"a"},"nextjs-router"))," package provided by ",(0,i.kt)("strong",{parentName:"p"},"refine")," must be used for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/providers/router-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"routerProvider"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine @pankod/refine-nextjs-router\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We recommend ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},(0,i.kt)("strong",{parentName:"a"},"superplate"))," to initialize your refine projects. It configures the project according to your needs including SSR with Next.js."))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/components/refine-config"},(0,i.kt)("inlineCode",{parentName:"a"},"<Refine>"))," must wrap your pages in a ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/custom-app"},"custom App")," component. This way your ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages"},"pages")," are integrated to refine."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/_app.tsx"',title:'"pages/_app.tsx"'},'import { AppProps } from "next/app";\n\nimport { Refine } from "@pankod/refine";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-nextjs-router";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nfunction MyApp({ Component, pageProps }: AppProps): JSX.Element {\n    return (\n        // highlight-start\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n        >\n            <Component {...pageProps} />\n        </Refine>\n        // highlight-end\n    );\n}\n\nexport default MyApp;\n')),(0,i.kt)("h2",{id:"custom-page"},"Custom Page"),(0,i.kt)("p",null,"Let's say we want to show a list of users in ",(0,i.kt)("inlineCode",{parentName:"p"},"/users"),". After creating ",(0,i.kt)("inlineCode",{parentName:"p"},"users.tsx")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"pages")," in your Nextjs app, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useTable")," hook to list the users in a table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/users.tsx"',title:'"pages/users.tsx"'},'import {\n    useTable,\n    List,\n    Table,\n    LayoutWrapper,\n} from "@pankod/refine";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n// highlight-start\nexport const UserList: React.FC = () => {\n    const { tableProps } = useTable<IPost>({\n        resource: "users"\n    });\n\n    return (\n        <LayoutWrapper>\n            <List title="Users">\n                <Table {...tableProps} rowKey="id">\n                    <Table.Column dataIndex="id" title="ID" sorter />\n                    <Table.Column dataIndex="firstName" title="Name" />\n                </Table>\n            </List>\n        </LayoutWrapper>\n    );\n};\n// highlight-end\ninterface IPost {\n    id: string;\n    firstName: string;\n}\n\nexport default UserList;\n')),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Notice how we passed ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," prop to ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/hooks/table/useTable"},(0,i.kt)("inlineCode",{parentName:"a"},"useTable")),". This is necessary since for ",(0,i.kt)("inlineCode",{parentName:"p"},"useTable")," to be able to get ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," name from route, it needs to be a route parameter in a dynamic route. ",(0,i.kt)("a",{parentName:"p",href:"#standard-crud-page"},"Refer here")," where standard CRUD pages can be built with dynamic routing."))),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We also used ",(0,i.kt)("inlineCode",{parentName:"p"},"<LayoutWrapper>")," to show the page in the layout provided to ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/components/refine-config"},(0,i.kt)("inlineCode",{parentName:"a"},"<Refine>")),". This is deliberately opt-in to provide flexibility. ",(0,i.kt)("a",{parentName:"p",href:"#standart-crud-page"},"If you're building a standard CRUD page layout can be baked in automatically"),"."))),(0,i.kt)("h3",{id:"ssr"},"SSR"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," uses ",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"react-query")," in its hooks for data management. ",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/ssr#using-initialdata"},"Following react-query's guide"),", SSR can be achieved like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/users.tsx"',title:'"pages/users.tsx"'},'// highlight-next-line\nimport { GetServerSideProps } from "next";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    useTable,\n    List,\n    Table,\n    LayoutWrapper,\n// highlight-next-line\n    GetListResponse,\n} from "@pankod/refine";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n// highlight-start\nexport const UserList: React.FC<{ users: GetListResponse<IPost> }> = ({\n    users\n}) => {\n// highlight-end\n    const { tableProps } = useTable<IPost>({\n        resource: "users",\n// highlight-start\n        queryOptions: {\n            initialData: users,\n        },\n// highlight-end\n    });\n\n    return (\n        <LayoutWrapper>\n            <List title="Users">\n                <Table {...tableProps} rowKey="id">\n                    <Table.Column dataIndex="id" title="ID" sorter />\n                    <Table.Column dataIndex="firstName" title="Name" />\n                </Table>\n            </List>\n        </LayoutWrapper>\n    );\n};\n\n// highlight-start\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n    const data = await dataProvider(API_URL).getList({\n        resource: "users",\n    });\n\n    return {\n        props: { users: data },\n    };\n};\n// highlight-end\n\ninterface IPost {\n    id: string;\n    firstName: string;\n}\n\nexport default UserList;\n')),(0,i.kt)("p",null,"We use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/providers/data-provider#getlist"},(0,i.kt)("inlineCode",{parentName:"a"},"getList"))," method from our ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/providers/data-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"dataProvider"))," to fetch ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," data and pass through ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," as conventionally done in Next.js. Then ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," data is available in the props of our ",(0,i.kt)("inlineCode",{parentName:"p"},"/users")," page. ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/hooks/table/useTable"},(0,i.kt)("inlineCode",{parentName:"a"},"useTable"))," can take options for underlying react-query queries with ",(0,i.kt)("inlineCode",{parentName:"p"},"queryOptions"),". Passing ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," data to its ",(0,i.kt)("inlineCode",{parentName:"p"},"initialData")," loads the data on server side."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We used ",(0,i.kt)("inlineCode",{parentName:"p"},"getList")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"dataProvider")," but data can be fetched in any way you desire."))),(0,i.kt)("h2",{id:"standard-crud-page"},"Standard CRUD Page"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"nextjs-router")," package provides ",(0,i.kt)("inlineCode",{parentName:"p"},"NextRouteComponent")," for pages with the dynamic route ",(0,i.kt)("inlineCode",{parentName:"p"},"/[resource]/[action]/[id]")," and root ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),". Simply export the component from the page and add a ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching"},"data fetching function")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/[resource]/index.tsx"',title:'"pages/[resource]/index.tsx"'},'export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";\n\nexport const getServerSideProps: GetServerSideProps = async () => {\n    return { props: {} };\n};\n')),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"NextRouteComponent")," doesn't support ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/automatic-static-optimization"},"automatic static optimization")," currently, since it requires route parameters thus a data fetching function must be defined."))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NextRouteComponent")," can be used in the following pages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pages/[resource].tsx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pages/[resource]/[action].tsx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pages/[resource]/[action]/[id].tsx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pages/index.tsx"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NextRouteComponent")," will use route parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," and render the associated component defined in ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/components/refine-config"},(0,i.kt)("inlineCode",{parentName:"a"},"resources")),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list")," component will be rendered for ",(0,i.kt)("inlineCode",{parentName:"li"},"/[resource]")," route"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"create"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"edit")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"show")," will be rendered for ",(0,i.kt)("inlineCode",{parentName:"li"},"/[resource]/[action]")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"/[resource]/[action]/[id]")," routes"),(0,i.kt)("li",{parentName:"ul"},"For the root ",(0,i.kt)("inlineCode",{parentName:"li"},"/")," route, it will render ",(0,i.kt)("inlineCode",{parentName:"li"},"DashboardPage")," if it's defined and if not will navigate to the first resource in ",(0,i.kt)("inlineCode",{parentName:"li"},"resources"),".")),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"NextRouteComponent")," will wrap the page with ",(0,i.kt)("inlineCode",{parentName:"p"},"Layout")," provided to ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/components/refine-config"},(0,i.kt)("inlineCode",{parentName:"a"},"<Refine>"))))),(0,i.kt)("h3",{id:"ssr-1"},"SSR"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NextRouteComponent")," accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"initialData")," prop for SSR data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type NextRouteComponentProps = {\n    initialData?: any;\n};\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"initialData")," must be passed as props from ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"NextRouteComponent")," will pass this data as ",(0,i.kt)("inlineCode",{parentName:"p"},"initialData")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"show")," components."),(0,i.kt)("p",null,"For example, for a ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," component that will be rendered for ",(0,i.kt)("inlineCode",{parentName:"p"},"/[resource]"),", the page can use SSR like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/[resource]/index.tsx"',title:'"pages/[resource]/index.tsx"'},'export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { GetServerSideProps } from "next";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n\n    const { query } = context;\n\n   try {\n        const data = await dataProvider(API_URL).getList({\n            resource: query["resource"] as string,\n        });\n\n        return {\n            props: {\n                initialData: data,\n            },\n        };\n    } catch (error) {\n        return { props: {} };\n    }\n};\n\n')),(0,i.kt)("p",null,"And in the ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," component for a ",(0,i.kt)("inlineCode",{parentName:"p"},"resource"),' e.g. "posts":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/posts/list.tsx"',title:'"src/components/posts/list.tsx"'},'import {\n    useTable,\n    List,\n    Table,\n    GetListResponse,\n} from "@pankod/refine";\nimport type { IResourceComponentsProps } from "@pankod/refine";\n\nexport const PostList: React.FC<\n    IResourceComponentsProps<GetListResponse<IPost>>\n// highlight-next-line\n> = ({ initialData }) => {\n    const { tableProps } = useTable<IPost>({\n        // highlight-start\n        queryOptions: {\n            initialData,\n        },\n        // highlight-end\n    });\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="status" title="Status" />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: string;\n    firstName: string;\n}\n')),(0,i.kt)("h2",{id:"server-side-authentication"},"Server Side Authentication"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"nextjs-router")," package provides ",(0,i.kt)("inlineCode",{parentName:"p"},"checkAuthentication")," to easily handle server side authentication."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/[resource]/index.tsx"',title:'"pages/[resource]/index.tsx"'},'export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";\n// highlight-next-line\nimport { checkAuthentication } from "@pankod/refine-nextjs-router";\n \nimport { GetServerSideProps } from "next";\n\nimport {authProvider} from "../../src/authProvider";\n \nconst API_URL = "https://api.fake-rest.refine.dev";\n \nexport const getServerSideProps: GetServerSideProps = async (context) => {\n \n    // highlight-start\n    const { isAuthenticated, ...props } = await checkAuthentication(\n        authProvider,\n        context,\n    );\n\n    if (!isAuthenticated) {\n        return props;\n    }\n    // highlight-end\n \n    return {\n        props: {},\n    };\n};\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"checkAuthentication")," expects your ",(0,i.kt)("inlineCode",{parentName:"p"},"authProvider")," and ",(0,i.kt)("strong",{parentName:"p"},"getServerSideProps"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"context"),". It uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"checkAuth")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"authProvider")," to check for authentication and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"isAuthenticated")," accordingly. It also returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect")," object to handle unauthenticated case. It redirects to ",(0,i.kt)("inlineCode",{parentName:"p"},"/login")," while keeping the original route to be navigated to after successful login."),(0,i.kt)("h2",{id:"syncwithlocation-and-query-parameters-in-ssr"},(0,i.kt)("inlineCode",{parentName:"h2"},"syncWithLocation")," and Query Parameters in SSR"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"syncWithLocation")," is enabled, query parameters must be handled while doing SSR."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/users.tsx"',title:'"pages/users.tsx"'},'import { GetServerSideProps } from "next";\n// highlight-next-line\nimport { parseTableParamsFromQuery } from "@pankod/refine";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n\n    // highlight-start\n    const { parsedCurrent, parsedPageSize, parsedSorter, parsedFilters } =\n        parseTableParamsFromQuery(context.query);\n    // highlight-end\n    const data = await dataProvider(API_URL).getList({\n        resource: "users",\n        // highlight-start\n        filters: parsedFilters,\n        pagination: {\n            current: parsedCurrent || 1,\n            pageSize: parsedPageSize || 10,\n        },\n        sort: parsedSorter,\n        // highlight-end\n    });\n\n    return {\n        props: { users: data },\n    };\n};\n\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"parseTableParams")," parses the query string and returns query parameters(",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/interfaceReferences/#crudfilters"},"refer here for their interfaces"),"). They can be directly used for ",(0,i.kt)("inlineCode",{parentName:"p"},"dataProvider")," methods that accepts them."),(0,i.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/refine-next-q94fw?autoresize=1&fontsize=14&module=%2Fpages%2F_app.tsx&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-next",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}m.isMDXComponent=!0}}]);