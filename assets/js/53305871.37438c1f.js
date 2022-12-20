"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,h=d["".concat(m,".").concat(u)]||d[u]||p[u]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Create Full Featured Admin Panel with React and Ant Design",description:"We will see how easy it is to develop a functional Admin panel with the perfect harmony of Refine and Ant Design.",slug:"refine-react-ant-design-admin-panel-framework",authors:"melih",tags:["refine","antd","react","admin"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/refine-react-ant-design-admin-panel-framework",source:"@site/blog/2022-02-21-react-antd-admin.md",title:"Create Full Featured Admin Panel with React and Ant Design",description:"We will see how easy it is to develop a functional Admin panel with the perfect harmony of Refine and Ant Design.",date:"2022-02-21T00:00:00.000Z",formattedDate:"February 21, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"antd",permalink:"/blog/tags/antd"},{label:"react",permalink:"/blog/tags/react"},{label:"admin",permalink:"/blog/tags/admin"}],readingTime:12.68,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Create Full Featured Admin Panel with React and Ant Design",description:"We will see how easy it is to develop a functional Admin panel with the perfect harmony of Refine and Ant Design.",slug:"refine-react-ant-design-admin-panel-framework",authors:"melih",tags:["refine","antd","react","admin"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",permalink:"/blog/how-to-access-control-with-nestjs"},nextItem:{title:"Top React JS Frameworks Every Developer Should Know",permalink:"/blog/best-react-frameworks"},relatedPosts:[{title:"How to use Material UI Checkbox",permalink:"/blog/material-ui-checkbox-component",formattedDate:"December 15, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.36,date:"2022-12-15T00:00:00.000Z"},{title:"Build internal tools using Low-Code with Refine, React-based framework",permalink:"/blog/build-internal-tools-using-low-code-with-refine",formattedDate:"February 21, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:9.62,date:"2022-02-21T00:00:00.000Z"},{title:"refine swag store is now open!",permalink:"/blog/refine-swag-store",formattedDate:"September 8, 2022",authors:[{name:"Eren Erkalkan",title:"Co-Founder, refine",url:"https://github.com/piyerro",imageURL:"https://github.com/piyerro.png",key:"eren_erkalkan"}],readingTime:2.955,date:"2022-09-08T00:00:00.000Z"}],authorPosts:[{title:"Web3 with Refine",permalink:"/blog/web3-with-refine",formattedDate:"December 13, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:1.68,date:"2021-12-13T00:00:00.000Z"},{title:"Refine vs AdminBro - Comparison Admin Panel Framework",permalink:"/blog/refine-vs-adminbro",formattedDate:"November 29, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.09,date:"2021-11-29T00:00:00.000Z"},{title:"How to upload files from your HTML form using Base64 encoding",permalink:"/blog/how-to-base64-upload",formattedDate:"December 22, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:3.36,date:"2021-12-22T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},s=[],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/"},(0,a.kt)("strong",{parentName:"a"},"refine"))," is a ",(0,a.kt)("strong",{parentName:"p"},"headless")," ",(0,a.kt)("a",{parentName:"p",href:"https://en.reactjs.org/"},"React")," ",(0,a.kt)("strong",{parentName:"p"},"internal tool")," framework. It helps you develop quickly while developing both B2B and B2C applications. While speeding you up, it is never restricted and has a fully customizable structure."))}p.isMDXComponent=!0}}]);