"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={id:"index",title:"1. Adding List Page",tutorial:{order:0,prev:!1,next:"tutorial/adding-crud-pages/{preferredUI}/add-edit-page"}},o=void 0,p={unversionedId:"tutorial/adding-crud-pages/mui/index",id:"version-3.xx.xx/tutorial/adding-crud-pages/mui/index",title:"1. Adding List Page",description:"In Unit 2.4, we created the CRUD pages automatically with Inferencer. In this unit, we will create the CRUD pages manually using the codes generated by Inferencer. So, you can customize the pages as you wish.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mui/add-list-page.md",sourceDirName:"tutorial/4-adding-crud-pages/mui",slug:"/tutorial/adding-crud-pages/mui/index",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/mui/index",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mui/add-list-page.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1679379351,formattedLastUpdatedAt:"Mar 21, 2023",frontMatter:{id:"index",title:"1. Adding List Page",tutorial:{order:0,prev:!1,next:"tutorial/adding-crud-pages/{preferredUI}/add-edit-page"}}},l={},d=[{value:"Creating List Page",id:"creating-list-page",level:2},{value:"Understanding the List Component",id:"understanding-the-list-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the List Page to the App",id:"adding-the-list-page-to-the-app",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=s("Checklist"),u=s("ChecklistItem"),m={toc:d};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/antd/generate-crud-pages/"},"Unit 2.4"),", we created the CRUD pages automatically with Inferencer. In this unit, we will create the CRUD pages manually using the codes generated by Inferencer. So, you can customize the pages as you wish."),(0,a.kt)("h2",{id:"creating-list-page"},"Creating List Page"),(0,a.kt)("p",null,"First, let's create our file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/products")," folder. We will name it ",(0,a.kt)("inlineCode",{parentName:"p"},"list.tsx"),". Then, we will copy the list page code generated by Inferencer and paste it into the file."),(0,a.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("a",{href:"http://localhost:3000/products",rel:"noopener noreferrer nofollow"},"localhost:3000/products")," in your browser.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on the "Show Code" button in the bottom right corner of the page.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'You can see the list page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,a.kt)("inlineCode",{parentName:"p"},"list.tsx")," file."))),(0,a.kt)("p",null,"You can see the list page code generated by Inferencer below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/products",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/products"},'setInitialRoutes(["/products"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ReadyPage,\n    ErrorComponent,\n    LightTheme,\n    CssBaseline,\n    GlobalStyles,\n    ThemeProvider,\n    RefineSnackbarProvider,\n    notificationProvider,\n} from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { MuiInferencer } from "@pankod/refine-inferencer/mui";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={LightTheme}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    Layout={Layout}\n                    ReadyPage={ReadyPage}\n                    catchAll={<ErrorComponent />}\n                    resources={[\n                        {\n                            name: "products",\n                            list: MuiInferencer,\n                            show: MuiInferencer,\n                            create: MuiInferencer,\n                            edit: MuiInferencer,\n                        },\n                    ]}\n                />\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\n\nrender(<App />);\n')),(0,a.kt)("p",null,"Instead of coding the list page component from scratch, Inferencer created the required code base on API response, so that we can customize."),(0,a.kt)("h2",{id:"understanding-the-list-component"},"Understanding the List Component"),(0,a.kt)("p",null,"We will go through the list page components and hooks one by one."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"<List/>")," is a ",(0,a.kt)("strong",{parentName:"p"},"refine")," component that is used to presentation purposes like showing create button or page title etc."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/basic-views/list"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"<List/>")," documentation for more information ","\u2192"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"<DataGrid/>")," is a native ",(0,a.kt)("strong",{parentName:"p"},"Material UI")," component that is used to display the data in a tabular format."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://mui.com/x/react-data-grid/"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"Material UI")," ",(0,a.kt)("inlineCode",{parentName:"a"},"<DataGrid/>")," documentation for more information ","\u2192"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"useDataGrid")," hook, imported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mui")," package, has been developed by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook imported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," package. So, It provides all the features of the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook."),(0,a.kt)("p",{parentName:"li"},"It returns the values needed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"<DataGrid/>")," component in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataGridProps")," variable."),(0,a.kt)("p",{parentName:"li"},"This is the point where the \u2728real magic\u2728 happens!"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"useDataGrid")," hook fetches data from API and wraps them with various helper hooks required for the ",(0,a.kt)("inlineCode",{parentName:"p"},"<DataGrid/>")," component. Data interaction functions like sorting, filtering, and pagination will be instantly available on the ",(0,a.kt)("inlineCode",{parentName:"p"},"<DataGrid/>")," with this single line of code."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/hooks/useDataGrid/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useDataGrid")," documentation for more information ","\u2192"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"<EditButton/>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<ShowButton/>")," are ",(0,a.kt)("strong",{parentName:"p"},"refine")," components that are used to navigate to the edit and show pages of the record."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/edit-button/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"<EditButton/>")," documentation for more information ","\u2192")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/show-button/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"<ShowButton/>")," documentation for more information ","\u2192")))),(0,a.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,a.kt)("p",null,"Each product includes the ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," field which has ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property. This is a foreign key that points to the ",(0,a.kt)("inlineCode",{parentName:"p"},"categories"),' resource which is different than "product" resource.'),(0,a.kt)("p",null,"There is a ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," field In the ",(0,a.kt)("inlineCode",{parentName:"p"},"categories")," resource. To display the category ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," in the table, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useMany")," hook provided by ",(0,a.kt)("strong",{parentName:"p"},"refine"),"."),(0,a.kt)("p",null,"This hook allows us to fetch data for multiple records in a single request by providing the ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"'s of the related records. In this case, we need to provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"'s of the products categories. It is particularly useful when we need to fetch related data for multiple records."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useMany/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useMany")," documentation for more information ","\u2192")),(0,a.kt)("p",null,"In this tutorial, each product record has a ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," field as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/products"',title:'"https://api.fake-rest.refine.dev/products"'},'{\n  ...\n  "category": {\n    "id": 1\n  }\n  ...\n},\n{\n  ...\n  "category": {\n    "id": 2\n  }\n  ...\n}\n')),(0,a.kt)("p",null,"We can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useMany")," hook to fetch the full category records for each of these products, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useMany } from "@pankod/refine-core";\n\nconst { data } = useMany({\n    resource: "categories",\n    ids: products.map((product) => product.category.id),\n});\n')),(0,a.kt)("p",null,"This will pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource"),"\xa0and ",(0,a.kt)("inlineCode",{parentName:"p"},"ids")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"getMany")," function. The ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," will then make a single request to the API to fetch the full records for each category related to the products. The resulting ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," variable will be an array of category records, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'[\n    {\n        id: 1,\n        title: "mock category title",\n    },\n    {\n        id: 2,\n        title: "another mock category title",\n    },\n];\n')),(0,a.kt)("p",null,"We can then use this ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," array to display the ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," of each category in the table."),(0,a.kt)("h2",{id:"adding-the-list-page-to-the-app"},"Adding the List Page to the App"),(0,a.kt)("p",null,"Now that we have created the list page, we need to add it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the created ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductList")," component.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"MuiInferencer")," component with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductList")," component."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ReadyPage,\n    ErrorComponent,\n    LightTheme,\n    CssBaseline,\n    GlobalStyles,\n    ThemeProvider,\n    RefineSnackbarProvider,\n    notificationProvider,\n} from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { MuiInferencer } from "@pankod/refine-inferencer/mui";\n\n//highlight-next-line\nimport { ProductList } from "pages/products/list";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={LightTheme}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    Layout={Layout}\n                    ReadyPage={ReadyPage}\n                    catchAll={<ErrorComponent />}\n                    resources={[\n                        {\n                            name: "products",\n                            //highlight-next-line\n                            list: ProductList,\n                            edit: MuiInferencer,\n                            show: MuiInferencer,\n                            create: MuiInferencer,\n                        },\n                    ]}\n                />\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\nexport default App;\n')),(0,a.kt)("p",null,"Now, we can see the list page in the browser at ",(0,a.kt)("a",{href:"http://localhost:3000/products",rel:"noopener noreferrer nofollow"},"localhost:3000/products")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(c,{mdxType:"Checklist"},(0,a.kt)(u,{id:"add-list-page-mui",mdxType:"ChecklistItem"},"I added the list page to the app."),(0,a.kt)(u,{id:"add-list-page-mui-2",mdxType:"ChecklistItem"},"I understood the list page components and hooks."),(0,a.kt)(u,{id:"add-list-page-mui-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}h.isMDXComponent=!0}}]);