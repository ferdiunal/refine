"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"How to create a CRUD app with SvelteKit",description:"We'll build a CRUD Blog app using SvelteKit and Svelte MUI",slug:"sveltekit-crud-app-with-svelte-mui",authors:"ekekenta_clinton",tags:["svelte","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-02-sveltekit-crud-app/social.png",hide_table_of_contents:!1},c=void 0,s={permalink:"/blog/sveltekit-crud-app-with-svelte-mui",source:"@site/blog/2022-09-02-sveltekit-crud-app.md",title:"How to create a CRUD app with SvelteKit",description:"We'll build a CRUD Blog app using SvelteKit and Svelte MUI",date:"2022-09-02T00:00:00.000Z",formattedDate:"September 2, 2022",tags:[{label:"svelte",permalink:"/blog/tags/svelte"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:10.02,hasTruncateMarker:!0,authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],frontMatter:{title:"How to create a CRUD app with SvelteKit",description:"We'll build a CRUD Blog app using SvelteKit and Svelte MUI",slug:"sveltekit-crud-app-with-svelte-mui",authors:"ekekenta_clinton",tags:["svelte","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-02-sveltekit-crud-app/social.png",hide_table_of_contents:!1},prevItem:{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component"},nextItem:{title:"Framer Motion examples for React animations",permalink:"/blog/framer-motion-react-animations"},relatedPosts:[{title:"How to create React draggable components with react-dnd",description:"We'll be using the react-dnd library to create draggable components in React.",permalink:"/blog/react-draggable-components-with-react-dnd",formattedDate:"March 7, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:21.2,date:"2023-03-07T00:00:00.000Z"},{title:"Svelte vs React Comparison",description:"We will compare the optimal performance of React and Svelte",permalink:"/blog/svelte-vs-react",formattedDate:"December 8, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:9.245,date:"2022-12-08T00:00:00.000Z"},{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",description:"This web application will  us to create issue and tasks for your team members. You will also be able to choose the priority of these tasks, their tags, and which person to assign them to.",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:17.175,date:"2021-11-12T00:00:00.000Z"}],authorPosts:[{title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",permalink:"/blog/nextauth-google-github-authentication-nextjs",formattedDate:"August 18, 2022",authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],readingTime:12.615,date:"2022-08-18T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2}],m={toc:u};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Because of Svelte\u2019s popularity over the years, many companies are beginning to migrate their applications or build new ones using the framework. However, developers have had difficulty implementing features such as routing in their web applications while using Svelte."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Sveltekit")," includes the features that ",(0,r.kt)("strong",{parentName:"p"},"Svelte")," lacks, saving developers time and allowing us to create complex hybrid web applications with relative ease."))}d.isMDXComponent=!0}}]);