"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58144],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=o,g=h["".concat(p,".").concat(u)]||h[u]||c[u]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},55980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"add-show-page",title:"3. Adding Show Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-edit-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-create-page"}},p=void 0,l={unversionedId:"tutorial/adding-crud-pages/headless/add-show-page",id:"version-3.xx.xx/tutorial/adding-crud-pages/headless/add-show-page",title:"3. Adding Show Page",description:"Show page is the page where you can see the record. In this tutorial, we will create the show page for the blog_posts resource.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/headless/add-show-page.md",sourceDirName:"tutorial/4-adding-crud-pages/headless",slug:"/tutorial/adding-crud-pages/headless/add-show-page",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/headless/add-show-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/headless/add-show-page.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1698245380,formattedLastUpdatedAt:"Oct 25, 2023",frontMatter:{id:"add-show-page",title:"3. Adding Show Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-edit-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-create-page"}}},d={},c=[{value:"Creating Show Page",id:"creating-show-page",level:2},{value:"Understanding the Show Component",id:"understanding-the-show-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Show Page to the App",id:"adding-the-show-page-to-the-app",level:2}],h=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=h("Checklist"),g=h("ChecklistItem"),m={toc:c};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Show page is the page where you can see the record. In this tutorial, we will create the show page for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource."),(0,r.kt)("h2",{id:"creating-show-page"},"Creating Show Page"),(0,r.kt)("p",null,"First, let's create our file under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will name it ",(0,r.kt)("inlineCode",{parentName:"p"},"show.tsx"),". Then, we will copy the show page code generated by Inferencer and paste it into the file."),(0,r.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'To open the show page, click any "Show" button in the "Actions" column of the table.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'On the show page, click on the "Show Code" button in the bottom right corner of the page.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'You can see the show page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,r.kt)("inlineCode",{parentName:"p"},"show.tsx")," file."))),(0,r.kt)("p",null,"You can see the show page code generated by Inferencer below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/show/123"},'setInitialRoutes(["/blog-posts/show/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { HeadlessInferencer } from "@pankod/refine-inferencer/headless";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "blog_posts",\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                    create: HeadlessInferencer,\n                    edit: HeadlessInferencer,\n                },\n            ]}\n        />\n    );\n};\nrender(<App />);\n')),(0,r.kt)("p",null,"Instead of coding the show page component from scratch, Inferencer created the required code base on API response, so that we can customize."),(0,r.kt)("h2",{id:"understanding-the-show-component"},"Understanding the Show Component"),(0,r.kt)("p",null,"We will go through the list page hooks one by one."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"useShow")," is a ",(0,r.kt)("strong",{parentName:"p"},"refine")," hook that is used to get single record data by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," in the URL. It sends the parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"getOne")," function and returns the result."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/show/useShow/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useShow")," documentation for more information ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"useNavigation")," is a ",(0,r.kt)("strong",{parentName:"p"},"refine")," hook that is used to navigate between pages. In this case, we are using it to navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),' pages when the user clicks on the "Edit" and "Blog Posts List" buttons.'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation")," documentation for more information ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"useResource")," is a ",(0,r.kt)("strong",{parentName:"p"},"refine")," hook that is used to get current resource information and ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," that are defined on the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/resource/useResource/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useResource")," documentation for more information ","\u2192")))),(0,r.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,r.kt)("p",null,"In the show page, we have a single record. The record may have relationships with other resources."),(0,r.kt)("p",null,"For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource has a relationship with the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," resource. In this case, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useOne")," hook provided by ",(0,r.kt)("strong",{parentName:"p"},"refine"),". This hook allows us to fetch single record data by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," parameters."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useOne/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useOne")," documentation for more information ","\u2192")),(0,r.kt)("p",null,"In the auto-generated show page code, Inferencer used the ",(0,r.kt)("inlineCode",{parentName:"p"},"useOne")," hook to fetch the category data of the blog post record."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { data: categoryData, isLoading: categoryIsLoading } = useOne({\n    resource: "categories",\n    id: record?.category?.id || "",\n});\n')),(0,r.kt)("p",null,"To ensure that the related data is only fetched after the blog post record has been successfully retrieved, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," object. By setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," property to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," only if the record variable is truthy, we can control when the related data is fetched like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { data: categoryData, isLoading: categoryIsLoading } = useOne({\n    resource: "categories",\n    id: record?.category?.id || "",\n    queryOptions: {\n        enabled: !!record,\n    },\n});\n')),(0,r.kt)("h2",{id:"adding-the-show-page-to-the-app"},"Adding the Show Page to the App"),(0,r.kt)("p",null,"Now that we have created the show page, we need to add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the created ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostShow")," component.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"HeadlessInferencer")," component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostShow")," component."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { HeadlessInferencer } from "@pankod/refine-inferencer/headless";\n\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostEdit } from "pages/blog-posts/edit";\n//highlight-next-line\nimport { BlogPostShow } from "pages/blog-posts/show";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "blog_posts",\n                    list: BlogPostList,\n                    edit: BlogPostEdit,\n                    //highlight-next-line\n                    show: BlogPostShow,\n                    create: HeadlessInferencer,\n                },\n            ]}\n        />\n    );\n};\nexport default App;\n')),(0,r.kt)("p",null,"Now, we can see the show page in the browser at ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/show/123")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(u,{mdxType:"Checklist"},(0,r.kt)(g,{id:"add-show-page-headless",mdxType:"ChecklistItem"},"I added the show page to the app."),(0,r.kt)(g,{id:"add-show-page-headless-2",mdxType:"ChecklistItem"},"I understood the show page components and hooks."),(0,r.kt)(g,{id:"add-show-page-headless-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}f.isMDXComponent=!0}}]);