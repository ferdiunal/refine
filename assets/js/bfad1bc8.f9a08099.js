"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62656],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7492:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>v,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var n=a(87462),i=(a(67294),a(3905)),r=a(95153),o=a(15061),l=a(50004),s=a(71657),p=a(6972),c=a(67075),u=a(66799),m=a(77108);const d={title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",slug:"create-full-stack-app-with-refine",authors:"melih",tags:["refine","react","next.js","full-stack","web-app","b2b","admin-panel"],image:"/img/blog/2022-04-29-create-full-stack-app/social.jpg",hide_table_of_contents:!1},f=void 0,h={permalink:"/blog/create-full-stack-app-with-refine",source:"@site/blog/2022-04-29-create-full-stack-app.md",title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",date:"2022-04-29T00:00:00.000Z",formattedDate:"April 29, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"next.js",permalink:"/blog/tags/next-js"},{label:"full-stack",permalink:"/blog/tags/full-stack"},{label:"web-app",permalink:"/blog/tags/web-app"},{label:"b2b",permalink:"/blog/tags/b-2-b"},{label:"admin-panel",permalink:"/blog/tags/admin-panel"}],readingTime:8.485,hasTruncateMarker:!1,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",slug:"create-full-stack-app-with-refine",authors:"melih",tags:["refine","react","next.js","full-stack","web-app","b2b","admin-panel"],image:"/img/blog/2022-04-29-create-full-stack-app/social.jpg",hide_table_of_contents:!1},prevItem:{title:"10 High-Quality Free Resources That Will Make Every Web Developer's Life Easier",permalink:"/blog/10-high-quality-free-resources"},nextItem:{title:"The Advantages and Disadvantages of Working on Open Source Projects",permalink:"/blog/open-source-advantages-disadvantages"},relatedPosts:[{title:"Build Fast and Customizable Admin Panel with NestJS",permalink:"/blog/customizable-admin-panel-with-nestjs",formattedDate:"October 4, 2021",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:4.06,date:"2021-10-04T00:00:00.000Z"},{title:"refine Joins the Hacktoberfest Fun",permalink:"/blog/hacktoberfest-refine",formattedDate:"October 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:.92,date:"2022-10-04T00:00:00.000Z"},{title:"Creating a React search bar and content filtering components",permalink:"/blog/react-search-bar-and-filtering",formattedDate:"August 26, 2022",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:14.825,date:"2022-08-26T00:00:00.000Z"}],authorPosts:[{title:"Create E-mail Subscription Panel with Refine and Strapi",permalink:"/blog/e-mail-subscription-panel-with-refine",formattedDate:"October 25, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.815,date:"2021-10-25T00:00:00.000Z"},{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.205,date:"2022-02-22T00:00:00.000Z"},{title:"Refine vs React-Admin Which is Better for Your Project?",permalink:"/blog/refine-vs-react-admin",formattedDate:"November 26, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:14.575,date:"2021-11-26T00:00:00.000Z"}]},k={authorsImageUrls:[void 0]},g=[{value:"What is Refine?",id:"what-is-refine",level:2},{value:"Why Should Use Refine?",id:"why-should-use-refine",level:2},{value:"Key features\u200b",id:"key-features",level:3},{value:"Benchmark",id:"benchmark",level:3},{value:"Create Full Stack App",id:"create-full-stack-app",level:2},{value:"How to use Refine",id:"how-to-use-refine",level:2},{value:"Create a Refine Project",id:"create-a-refine-project",level:3},{value:"Refine Demo Apps",id:"refine-demo-apps",level:2},{value:"Powerful Features of Refine",id:"powerful-features-of-refine",level:2},{value:"Conclusion",id:"conclusion",level:2}],b={toc:g};function v(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We frequently require quick development and sometimes flexibility while developing a Full Stack application. Aside from speed and flexibility, we must establish the application architecture correctly at the start so that we are not subjected to any more needless work throughout the development process."),(0,i.kt)("p",null,"In this article, we will use the ",(0,i.kt)("strong",{parentName:"p"},"refine")," framework to develop a full stack application. ",(0,i.kt)("strong",{parentName:"p"},"Refine")," will provide us with the speed and flexibility we are looking for, while assisting with the overall project architecture during web application development."),(0,i.kt)("h2",{id:"what-is-refine"},"What is Refine?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," is a React-based framework for rapid building of internal tools. It's is a a collection of helper ",(0,i.kt)("inlineCode",{parentName:"p"},"hooks"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"components")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"providers"),". They are all decoupled from your UI components and business logic, so they never keep you from customizing your UI or coding your own flow."),(0,i.kt)("p",null,"Refine offers lots of out-of-the box functionality for rapid development, without compromising extreme customizability. Use-cases include, but are not limited to ",(0,i.kt)("inlineCode",{parentName:"p"},"admin panels"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"B2B")," applications and ",(0,i.kt)("inlineCode",{parentName:"p"},"dashboards"),"."),(0,i.kt)("h2",{id:"why-should-use-refine"},"Why Should Use Refine?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," offers you almost everything you need while developing an ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin Panel"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Dashboard"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"B2B")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"B2C")," application, with many features it provides. It does not limit you in situations that may arise during project development and offers you the opportunity to customize it."),(0,i.kt)("p",null,"With the Data Provider feature it provides, you don't need to think about your API or GraphQL queries and write extra queries! Thanks to Refine hooks, you can easily fetching the data in your database and manage your state structure. In addition to quickly fetch and manage your data, you can easily design your UI with ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design")," and ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/"},"Material UI (comming soon)")," ready components used as out-of-the-box by ",(0,i.kt)("strong",{parentName:"p"},"refine"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"headless")," React framework. It can be used independently of the UI. You can easily use all the features of refinement with any UI library."),(0,i.kt)("h3",{id:"key-features"},"Key features\u200b"),(0,i.kt)("p",null,"\ud83d\udd25 Headless : Works with any UI framework"),(0,i.kt)("p",null,"\u2699\ufe0f Zero-configuration : One-line setup with superplate. It takes less than a minute to start a project."),(0,i.kt)("p",null,"\ud83d\udce6 Out-of-the-box : Routing, networking, authentication, state management, i18n and UI."),(0,i.kt)("p",null,"\ud83d\udd0c Backend Agnostic : Connects to any custom backend. Built-in support for REST API, GraphQL, NestJs CRUD, Airtable, Strapi, Strapi v4, Strapi GraphQL, Supabase, Hasura, Nhost, Appwrite, Firebase, Directus and Altogic."),(0,i.kt)("p",null,"\ud83d\udcdd Native Typescript Core : You can always opt out for plain JavaScript."),(0,i.kt)("p",null,"\ud83d\udc1c Enterprise UI : Works seamlessly with Ant Design System. (Support for multiple UI frameworks is on the Roadmap)"),(0,i.kt)("p",null,"\ud83d\udcdd Boilerplate-free Code : Keeps your codebase clean and readable."),(0,i.kt)("p",null,"To learn more about ",(0,i.kt)("strong",{parentName:"p"},"refine")," features, we recommend that you read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/overview/"},"Overview")," document."),(0,i.kt)("h3",{id:"benchmark"},"Benchmark"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine"),", by removing unnecessary repetition in your code, reduces number of lines of code and makes it easier to maintain. Below is a size comparison for an example project:"),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:r.Z,alt:"Refine Benchmark"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"create-full-stack-app"},"Create Full Stack App"),(0,i.kt)("p",null,"As we mentioned above, you can easily handle any API and GraphQL queries without writing extra code thanks to the ",(0,i.kt)("strong",{parentName:"p"},"refine")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider/"},"Data Provider")," hooks. If you do not have a custom backend, you can choose one of the following backend providers that work in harmony with ",(0,i.kt)("strong",{parentName:"p"},"refine"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," includes many out-of-the-box data providers to use in your projects like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/airtable"},"Airtable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/altogic"},"Altogic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/appwrite"},"Appwrite")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/graphql"},"GraphQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/hasura"},"Hasura")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/nestjsx-crud"},"NestJS CRUD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/nhost"},"Nhost")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/simple-rest"},"Simple REST API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/strapi"},"Strapi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/strapi-graphql"},"Strapi GraphQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/strapi-v4"},"Strapi v4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/supabase"},"Supabase")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/medusa"},"Medusa"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider/"},"Refer to the ",(0,i.kt)("inlineCode",{parentName:"a"},"dataProvider")," documentation for detailed usage. ","\u2192")),(0,i.kt)("p",null,"You can develop a full-featured web application by using any your custom backend or the above backend providers with ",(0,i.kt)("strong",{parentName:"p"},"refine"),"."),(0,i.kt)("p",null,"Check out the Full Stack application examples created with ",(0,i.kt)("strong",{parentName:"p"},"refine")," and out-of-the-box data providers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui/"},"E-commerce Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/refine-react-admin-invoice-genarator/"},"Invoice Genarator Example | Part I")," - ",(0,i.kt)("a",{parentName:"li",href:"/blog/refine-invoice-generator/"},"Invoice Genarator Example | Part II")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/awesome-react-windows95-ui-with-refine/"},"Windows95 UI Admin Panel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/create-a-feedback-admin-panel-with-refine-and-strapi/"},"Feedback Admin Panel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/customizable-admin-panel-with-nestjs/"},"Job Posting Admin Panel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/e-mail-subscription-panel-with-refine/"},"E-mail Subscription Example"))),(0,i.kt)("h2",{id:"how-to-use-refine"},"How to use Refine"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," is very simple to use. Its examples and structure are handled in their simplest form. It is very successful in terms of documentation. You can find the answers you are looking for or a very detailed explanation of how to use a feature in the documentation."),(0,i.kt)("p",null,"Let's see how to use it!"),(0,i.kt)("h3",{id:"create-a-refine-project"},"Create a Refine Project"),(0,i.kt)("p",null,"Let's start by creating our ",(0,i.kt)("strong",{parentName:"p"},"refine")," project. You can use the superplate to create a refine project. superplate will quickly create our refine project according to the features we choose."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx superplate-cli -p refine-react my-first-refine-project\n")),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:o.Z,alt:"Create Refine App"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"Creating your project is that easy. All the packages you need and choose come ready-made."),(0,i.kt)("p",null,"Our project is ready. Now let's consider the process of fetching items from an API with 1000 items and listing only their titles.\nFirst, we will use libraries such as axios, fetch to fetch the data. Then after the data comes, we will show it in the UI. If there is a change in the state, we will have to change them from the beginning and think about them. Even in its simplest form, it can be challenging to handle."),(0,i.kt)("p",null,"With ",(0,i.kt)("strong",{parentName:"p"},"refine"),", with just a few lines of code,\nBesides basic operations (such as data fetching), you can manage and manipulate state changes in your user interface. You can also manage filtering, sorting and pagination of your data by adding just a few simple lines of code."),(0,i.kt)("p",null,"Let's see how we can use these processes and features that we talked about with ",(0,i.kt)("strong",{parentName:"p"},"refine"),"."),(0,i.kt)("p",null,"We will use refine's ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.fake-rest.refine.dev/")," API to fetch the titles we mentioned. Thanks to the project we set up with superplate, our ",(0,i.kt)("inlineCode",{parentName:"p"},"App.tsx")," comes ready. Now let's create a list component with Refine and see how to fetch the titles."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "title": "Facilis voluptas sit consequatur commodi.",\n    "slug": "enim-possimus-nostrum",\n    "content": "Laborum consequatur illo illum sit. Dolorem et recusandae consequatur qui voluptas fuga mollitia voluptate. Et excepturi magnam. Et fugiat doloribus et. Ipsa aperiam et. Qui saepe repudiandae quam tempora. Eos necessitatibus voluptatem facilis maxime. Nobis et accusantium rerum libero tempore earum autem suscipit quas. Dolorem consequatur quam. Repellat praesentium veniam tempora excepturi iste veritatis quia sit.",\n    "hit": 798263\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine-antd/dist/styles.min.css";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        />\n    );\n};\n\nexport default App;\n')),(0,i.kt)("h3",null," Step I "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/PostList.tsx"',title:'"src/pages/PostList.tsx"'},'//highlight-start\nimport { List, Table, useTable } from "@pankod/refine-antd";\n//highlight-end\n\nexport const PostList: React.FC = () => {\n    //highlight-next-line\n    const { tableProps } = useTable<IPost>();\n    return (\n        //highlight-start\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="title" title="TITLE" />\n            </Table>\n        </List>\n        //highlight-end\n    );\n};\n\ninterface IPost {\n    title: string;\n}\n')),(0,i.kt)("h3",null," Step II "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine-antd/dist/styles.min.css";\n//highlight-next-line\nimport { PostList } from "pages/post";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            //highlight-next-line\n            resource={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n\nexport default App;\n')),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:l.Z,alt:"Refine Posts Page"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"As you have seen, we have listed and paginated the titles coming from an API by writing just a few lines of code, thanks to the ",(0,i.kt)("strong",{parentName:"p"},"refine")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"refine-antd")," package. This is the simplest example of refinement. It is possible to do much more, and the Dashboard you need, B2B, B2C, Admin Panel and any web application you want with refine in a very short time and in a very flexible way."),(0,i.kt)("h2",{id:"refine-demo-apps"},"Refine Demo Apps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Refine Client Example -> ",(0,i.kt)("a",{parentName:"li",href:"https://refine.dev/demo/"},"Refine Headless + Refine Core + Next.js (SSR) + Tailwind CSS"))),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:p.Z,alt:"Refine Client App"})),(0,i.kt)("br",null),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:s.Z,alt:"Refine Client App"})),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Refine Admin Panel Example -> ",(0,i.kt)("a",{parentName:"li",href:"https://example.admin.refine.dev/"},"Refine Antd + Refine Core "))),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:c.Z,alt:"Refine Dashboard"})),(0,i.kt)("br",null),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:u.Z,alt:"Refine Admin Panel Producst Page"})),(0,i.kt)("br",null),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:m.Z,alt:"Refine Reviews Page"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"powerful-features-of-refine"},"Powerful Features of Refine"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Headless"),(0,i.kt)("li",{parentName:"ul"},"Next.js/SSR Support \ud83d\ude80\ud83d\ude80\ud83d\ude80"),(0,i.kt)("li",{parentName:"ul"},"Realtime"),(0,i.kt)("li",{parentName:"ul"},"Access Control (RBAC, LDAP, ACL, ABAC, etc.)"),(0,i.kt)("li",{parentName:"ul"},"i18n (internationalization)"),(0,i.kt)("li",{parentName:"ul"},"Audit Log(Comming Soon)"),(0,i.kt)("li",{parentName:"ul"},"Material UI Support(Comming Soon)"),(0,i.kt)("li",{parentName:"ul"},"CSV Import/Export"),(0,i.kt)("li",{parentName:"ul"},"Multi Level Menu"),(0,i.kt)("li",{parentName:"ul"},"GraphQL Support"),(0,i.kt)("li",{parentName:"ul"},"Dynamic Multi-level Menus"),(0,i.kt)("li",{parentName:"ul"},"All features of ",(0,i.kt)("strong",{parentName:"li"},"refine")," are available as ",(0,i.kt)("strong",{parentName:"li"},"open source"),".")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/overview/"},"For more information about all ",(0,i.kt)("strong",{parentName:"a"},"refine")," features and ",(0,i.kt)("strong",{parentName:"a"},"refine")," \u2192")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/comparison/"},"Comparison | Refine vs React-Admin vs AdminBro vs Retool \u2192")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this article, we went through ",(0,i.kt)("strong",{parentName:"p"},"refine")," and showed you how to create a full stack application with backend providers that are integrated with it. You may rapidly and flexibly create a web application with ",(0,i.kt)("strong",{parentName:"p"},"refine"),". ",(0,i.kt)("strong",{parentName:"p"},"refine")," is a very successful and developing open source ",(0,i.kt)("inlineCode",{parentName:"p"},"internal tool")," framework. It solves the deficiencies in ",(0,i.kt)("inlineCode",{parentName:"p"},"B2B"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"B2"),"C and ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin panel")," development processes well and offers features suitable for needs. "),(0,i.kt)("p",null,"One of the biggest features that distinguishes ",(0,i.kt)("strong",{parentName:"p"},"refine")," from other frameworks is that it is customizable. Combined with ",(0,i.kt)("em",{parentName:"p"},"refine")," ",(0,i.kt)("inlineCode",{parentName:"p"},"headless"),", it now provides more customization options. This provides a great deal of convenience in the project you will develop."),(0,i.kt)("p",null,"You can develop any web application or admin panel you want in a very short time with ",(0,i.kt)("strong",{parentName:"p"},"refine"),"."),(0,i.kt)("p",null,"Give ",(0,i.kt)("strong",{parentName:"p"},"refine")," a star on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"GitHub")," if you like it - your support will help us continue making this tool amazing!"))}v.isMDXComponent=!0},6972:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/client_home-7cbd85223fb1536341c04adb91423459.png"},71657:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/client_menu-9c67d0b7f9788d560cdfcf8d04975bf5.png"},15061:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-9c452f8ddf0b8448bed241a1e8130b53.gif"},67075:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard-c545e7b32ddfd19e305adb6e93ba3a15.png"},50004:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/first-a11d25a6866c1aaa5bba44e1b4e75a73.png"},66799:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/products-c52e1d5cca261aa624a6706f47df6a66.png"},77108:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/reviews-064ab8636aae3443b7b4523d4bf88bdc.png"},95153:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/benchmark-86c224f2232bb9d7874bcc071612b6bf.png"}}]);