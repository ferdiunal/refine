"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90156],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69572:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",description:"Build authorization ready admin panel with NestJS.",slug:"how-to-access-control-with-nestjs",authors:"yildiray",tags:["nestjs","access-control","refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/how-to-access-control-with-nestjs",source:"@site/blog/2022-02-21-build-low-code-customizable-and-authorization-ready-accesscontrol-admin-panel-with-nestjs.md",title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",description:"Build authorization ready admin panel with NestJS.",date:"2022-02-21T00:00:00.000Z",formattedDate:"February 21, 2022",tags:[{label:"nestjs",permalink:"/blog/tags/nestjs"},{label:"access-control",permalink:"/blog/tags/access-control"},{label:"refine",permalink:"/blog/tags/refine"}],readingTime:3.19,hasTruncateMarker:!0,authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],frontMatter:{title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",description:"Build authorization ready admin panel with NestJS.",slug:"how-to-access-control-with-nestjs",authors:"yildiray",tags:["nestjs","access-control","refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Build internal tools using Low-Code with refine, React-based framework",permalink:"/blog/build-internal-tools-using-low-code-with-refine"},nextItem:{title:"Create Full Featured Admin Panel with React and Ant Design",permalink:"/blog/refine-react-ant-design-admin-panel-framework"},relatedPosts:[{title:"Let's Build an App to Manage Your Hackathons with Refine",description:"We'll be building a demo app to manage hackathons with refine.",permalink:"/blog/manage-hackathons-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Muharrem Kocadere",title:"Frontend Developer",url:"https://github.com/mhrrmk",imageURL:"https://github.com/mhrrmk.png",key:"muharrem"}],readingTime:3.405,date:"2021-10-04T00:00:00.000Z"},{title:"refine vs Blitz.js",description:"We will take a closer look at how to set both up, what are their internal builds, how they handle the data sources, how to implement the CRUD functionality, add authentication, and how to deploy them to production.",permalink:"/blog/react-admin-frameworks-refine-vs-blitz-js",formattedDate:"March 15, 2023",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:19.035,date:"2023-03-15T00:00:00.000Z"},{title:"Simple Web Application Example with Refine",description:"Do you want to develop a web application quickly? You are at the right place!",permalink:"/blog/simple-web-application-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:9.445,date:"2021-10-04T00:00:00.000Z"}],authorPosts:[{title:"Build Fast and Customizable Admin Panel with NestJS",description:"We will prepare a simple `job-posting` application. We will also use the refine framework for the admin panel. The project will consist of two parts, api and admin.",permalink:"/blog/customizable-admin-panel-with-nestjs",formattedDate:"October 4, 2021",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:4.175,date:"2021-10-04T00:00:00.000Z"},{title:"Best Open-Source Headless CMS to Try for Your Next Application",description:"A headless CMS system, which can be developed quickly, contains many features you need, and helps you to produce products very quickly compared to traditional systems.",permalink:"/blog/open-source-headless-cms",formattedDate:"May 5, 2022",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:3.425,date:"2022-05-05T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},u=[],d={toc:u};function m(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In the ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/blog/customizable-admin-panel-with-nestjs"},"previous blog post"),", we used ",(0,n.kt)("a",{parentName:"p",href:"https://nestjs.com"},"nestjs")," with an api and ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev"},"refine")," in the admin panel. In this blog, let's add ",(0,n.kt)("strong",{parentName:"p"},"authorization")," to both api and admin panel."))}m.isMDXComponent=!0}}]);