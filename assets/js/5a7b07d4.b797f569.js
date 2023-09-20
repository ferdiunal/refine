"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(67294);var i=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",slug:"how-to-import-csv",authors:"melih",tags:["javascript","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/how-to-import-csv",source:"@site/blog/2022-01-18-csv-import.md",title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",date:"2022-01-18T00:00:00.000Z",formattedDate:"January 18, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"react",permalink:"/blog/tags/react"}],readingTime:4.44,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",slug:"how-to-import-csv",authors:"melih",tags:["javascript","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Implementing Dark Mode In Ant Design Using gulp",permalink:"/blog/how-to-add-darkmode-in-ant-design"},nextItem:{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload"},relatedPosts:[{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.255,date:"2022-02-22T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with HTML",description:"In this guide, I'm going to show you how to multipart files upload with using HTML and JavaScript",permalink:"/blog/how-to-multipart-upload",formattedDate:"December 27, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:2.59,date:"2021-12-27T00:00:00.000Z"},{title:"Simple Web Application Example with Refine",description:"Do you want to develop a web application quickly? You are at the right place!",permalink:"/blog/simple-web-application-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:9.445,date:"2021-10-04T00:00:00.000Z"}],authorPosts:[{title:"Web3 with Refine",description:"Sign-in Ethereum with Web3 and Refine",permalink:"/blog/web3-with-refine",formattedDate:"December 13, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:1.53,date:"2021-12-13T00:00:00.000Z"},{title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",permalink:"/blog/create-full-stack-app-with-refine",formattedDate:"April 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:8.09,date:"2022-04-29T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.075,date:"2022-03-29T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Example",id:"example",level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2},{value:"How to CSV Import with Refine?",id:"how-to-csv-import-with-refine",level:2},{value:"Refine CSV Import Usage",id:"refine-csv-import-usage",level:2},{value:"Example",id:"example-1",level:2}],u=(d="PromotionBanner",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var d;const h={toc:m};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,i.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,i.kt)("strong",{parentName:"p"},"refine"),". Although we plan to update it with the latest version of ",(0,i.kt)("strong",{parentName:"p"},"refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,i.kt)("p",{parentName:"admonition"},"You should know that ",(0,i.kt)("strong",{parentName:"p"},"refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),"."),(0,i.kt)("p",{parentName:"admonition"},"Just be aware that the source code example in this post have been updated to version 4.x.x.")),(0,i.kt)("p",null,"In this guide, we will learn how to import any CSV file received from the user with React. Our application will consist of two parts. We will create a form for the user to select a file. Next, we will do some operations with JavaScript to be able to view this CSV file. Let's start with our example."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"First, let's create a ",(0,i.kt)("a",{parentName:"p",href:"https://tr.reactjs.org/docs/forms.html"},"Form")," in React so that the user can upload a CSV file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.js"',title:'"App.js"'},'function App() {\n    return (\n        <div style={{ textAlign: "center" }}>\n            <h1>REACTJS CSV IMPORT EXAMPLE </h1>\n            <form>\n                //highlight-start\n                <input type={"file"} accept={".csv"} />\n                //highlight-end\n                <button>IMPORT CSV</button>\n            </form>\n        </div>\n    );\n}\n')),(0,i.kt)("p",null,"We created a simple form and our input items. With the accept feature of the input element, we specify that the format of the file can only be CSV. Now, let's load and read the CSV file selected by the user with ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FileReader"},"FileReader"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\n\nfunction App() {\n    const [file, setFile] = useState();\n\n    const fileReader = new FileReader();\n\n    const handleOnChange = (e) => {\n        setFile(e.target.files[0]);\n    };\n\n    const handleOnSubmit = (e) => {\n        e.preventDefault();\n\n        if (file) {\n            fileReader.onload = function (event) {\n                const csvOutput = event.target.result;\n            };\n\n            fileReader.readAsText(file);\n        }\n    };\n\n    return (\n        <div style={{ textAlign: "center" }}>\n            <h1>REACTJS CSV IMPORT EXAMPLE </h1>\n            <form>\n                <input\n                    type={"file"}\n                    id={"csvFileInput"}\n                    accept={".csv"}\n                    onChange={handleOnChange}\n                />\n\n                <button\n                    onClick={(e) => {\n                        handleOnSubmit(e);\n                    }}\n                >\n                    IMPORT CSV\n                </button>\n            </form>\n        </div>\n    );\n}\n')),(0,i.kt)("p",null,"Here, once the user-selected file has been successfully uploaded, we can process and display the file. Now let's load a sample CSV file and see it output on our console."),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-01-18-csv-import/console.gif",alt:"console_csv_output"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"As you can see, we can now read a selected CSV file. We can convert this file, which we read as a plain text type, into an Array of Object with JavaScript and place it inside a Table element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'function App() {\n import React, { useState } from "react";\n\nfunction App() {\n  const [file, setFile] = useState();\n  const [array, setArray] = useState([]);\n\n  const fileReader = new FileReader();\n\n  const handleOnChange = (e) => {\n    setFile(e.target.files[0]);\n  };\n\n  const csvFileToArray = string => {\n    const csvHeader = string.slice(0, string.indexOf("\\n")).split(",");\n    const csvRows = string.slice(string.indexOf("\\n") + 1).split("\\n");\n\n    const array = csvRows.map(i => {\n      const values = i.split(",");\n      const obj = csvHeader.reduce((object, header, index) => {\n        object[header] = values[index];\n        return object;\n      }, {});\n      return obj;\n    });\n\n    setArray(array);\n  };\n\n  const handleOnSubmit = (e) => {\n    e.preventDefault();\n\n    if (file) {\n      fileReader.onload = function (event) {\n        const text = event.target.result;\n        csvFileToArray(text);\n      };\n\n      fileReader.readAsText(file);\n    }\n  };\n\n  const headerKeys = Object.keys(Object.assign({}, ...array));\n\n  return (\n    <div style={{ textAlign: "center" }}>\n      <h1>REACTJS CSV IMPORT EXAMPLE </h1>\n      <form>\n        <input\n          type={"file"}\n          id={"csvFileInput"}\n          accept={".csv"}\n          onChange={handleOnChange}\n        />\n\n        <button\n          onClick={(e) => {\n            handleOnSubmit(e);\n          }}\n        >\n          IMPORT CSV\n        </button>\n      </form>\n\n      <br />\n\n      <table>\n        <thead>\n          <tr key={"header"}>\n            {headerKeys.map((key) => (\n              <th>{key}</th>\n            ))}\n          </tr>\n        </thead>\n\n        <tbody>\n          {array.map((item) => (\n            <tr key={item.id}>\n              {Object.values(item).map((val) => (\n                <td>{val}</td>\n              ))}\n            </tr>\n          ))}\n        </tbody>\n      </table>\n    </div>\n  );\n}\n....\n')),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-01-18-csv-import/overview.gif",alt:"overview_csv"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"We formatted the CSV file that came in plain text format, using Javascript ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice"},"slice")," and ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"},"split")," methods, and created two separate array. Then we converted Header and Rows arrays to Array of Object format as Key, Value."),(0,i.kt)("hr",null),(0,i.kt)(u,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/csv-import-example-hw3ne?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"csv-import-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("h2",{id:"how-to-csv-import-with-refine"},"How to CSV Import with Refine?"),(0,i.kt)("p",null,"The CSV import with ",(0,i.kt)("strong",{parentName:"p"},"refine")," is very simple and out-of-the-box feature. How to use it is explained step by step in the guide and example."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/import-export/csv-import/"},"Refer to the ",(0,i.kt)("strong",{parentName:"a"},"refine")," CSV import guide for more information. \u2192")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/examples/import-export-antd/src/pages/posts/list.tsx#L32"},"View Source")),(0,i.kt)("h2",{id:"refine-csv-import-usage"},"Refine CSV Import Usage"),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-01-18-csv-import/importing.gif",alt:"importing_csv"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"Importing CSV files is simple and fast using the ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/hooks/import-export/useImport/"},(0,i.kt)("inlineCode",{parentName:"a"},"useImport"))," hook and ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/ui-frameworks/antd/components/buttons/import-button/"},(0,i.kt)("inlineCode",{parentName:"a"},"ImportButton"))," provided by ",(0,i.kt)("strong",{parentName:"p"},"refine"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    List,\n    Table,\n    useTable,\n    //highlight-start\n    useImport,\n    ImportButton,\n    //highlight-end\n} from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    //highlight-start\n    const importProps = useImport<IPostFile>();\n    //highlight-end\n\n    return (\n        <List\n            pageHeaderProps={{\n                //highlight-start\n                extra: <ImportButton {...importProps} />,\n                //highlight-end\n            }}\n        >\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n                <Table.Column dataIndex="status" title="Status" />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPostFile {\n    title: string;\n    categoryId: string;\n}\ninterface IPost {\n    id: string;\n    title: string;\n    status: string;\n}\n')),(0,i.kt)("p",null,"You can also divide the data into chunk with the ",(0,i.kt)("inlineCode",{parentName:"p"},"batchSize")," option while performing the insertion process."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/hooks/import-export/useImport/#api-reference"},"Refer to the ",(0,i.kt)("strong",{parentName:"a"},"refine")," CSV Import API References for more information. \u2192")),(0,i.kt)("h2",{id:"example-1"},"Example"),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/refine-import-export-example-4nneu?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-import-export-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}f.isMDXComponent=!0}}]);