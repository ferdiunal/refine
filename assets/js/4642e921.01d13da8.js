"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=i,u=m["".concat(l,".").concat(h)]||m[h]||c[h]||r;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"What is Next.js getInitialProps and getServerSideProps?",description:"We will deep dive into Next.js getInitialProps and getServerSideProps.",slug:"next-js-getinitialprops-and-getserversideprops",authors:"michael",tags:["nextjs","getInitialProps","getServerSideProps"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-31-next-getInitial/social.png",hide_table_of_contents:!1},o=void 0,s={permalink:"/blog/next-js-getinitialprops-and-getserversideprops",source:"@site/blog/2022-10-31-next-getInitial.md",title:"What is Next.js getInitialProps and getServerSideProps?",description:"We will deep dive into Next.js getInitialProps and getServerSideProps.",date:"2022-10-31T00:00:00.000Z",formattedDate:"October 31, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"getInitialProps",permalink:"/blog/tags/get-initial-props"},{label:"getServerSideProps",permalink:"/blog/tags/get-server-side-props"}],readingTime:9.315,hasTruncateMarker:!1,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],frontMatter:{title:"What is Next.js getInitialProps and getServerSideProps?",description:"We will deep dive into Next.js getInitialProps and getServerSideProps.",slug:"next-js-getinitialprops-and-getserversideprops",authors:"michael",tags:["nextjs","getInitialProps","getServerSideProps"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-31-next-getInitial/social.png",hide_table_of_contents:!1},prevItem:{title:"Top 6 Free Online Code Editors and IDEs with Pros and Cons",permalink:"/blog/6-best-online-code-editors-comparison"},nextItem:{title:"How to use Material UI Select in React",permalink:"/blog/material-ui-select-component"},relatedPosts:[{title:"Build a Progressive Web App (PWA) with Next.js",permalink:"/blog/next-js-pwa",formattedDate:"September 11, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:18.495,date:"2022-09-11T00:00:00.000Z"},{title:"Next.js 13 - What are the new features?",permalink:"/blog/new-features-in-next-js-13",formattedDate:"November 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:6.18,date:"2022-11-12T00:00:00.000Z"},{title:"Nextjs image optimization with examples",permalink:"/blog/using-next-image",formattedDate:"August 17, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:12.62,date:"2022-08-17T00:00:00.000Z"}],authorPosts:[{title:"Nextjs image optimization with examples",permalink:"/blog/using-next-image",formattedDate:"August 17, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:12.62,date:"2022-08-17T00:00:00.000Z"},{title:"How to use Next.js API Routes?",permalink:"/blog/next-js-api-routes",formattedDate:"October 5, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:8.88,date:"2022-10-05T00:00:00.000Z"},{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:8.685,date:"2022-09-04T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is <code>getInitialProps</code>?",id:"what-is-getinitialprops",level:2},{value:"Context parameter",id:"context-parameter",level:3},{value:"What is <code>getServerSideProps</code>?",id:"what-is-getserversideprops",level:2},{value:"Context parameter",id:"context-parameter-1",level:3},{value:"Return value",id:"return-value",level:3},{value:"Automatic caching capabilities",id:"automatic-caching-capabilities",level:3},{value:"<code>getInitialProps</code> vs <code>getServerSideProps</code>",id:"getinitialprops-vs-getserversideprops",level:2},{value:"<code>getInitialProps</code>",id:"getinitialprops",level:3},{value:"<code>getServerSideProps</code>",id:"getserversideprops",level:3},{value:"Conclusion",id:"conclusion",level:2}],d=(c="PromotionBanner",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var c;const m={toc:p};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Next.js is an open-source React framework for building production and enterprise-ready applications. It includes many built-in features such as Server-side Rendering (SSR), Static Site Generation (SSG), automatic image optimization, backend functionality support using API Routes and so on, that make developing web applications a breeze.   "),(0,i.kt)("p",null,"One of the many interesting features in Next.js are its data fetching methods. Next.js offers different ways of fetching and rendering data in your applications depending on your use case. "),(0,i.kt)("p",null,"At times, it may be confusing as to which of the methods or functions to use for data fetching if you're new to Next.js. "),(0,i.kt)("p",null,"Next.js has two functions for server-side rendering (pre-rendering or pre-population of data/contents on the server) namely: ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),". As we go on, we'll explore both functions, understand how they work and learn when it's appropriate to use them in our applications."),(0,i.kt)("p",null,"Steps we'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-getinitialprops"},"What is ",(0,i.kt)("inlineCode",{parentName:"a"},"getInitialProps"),"?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#context-parameter"},"Context parameter")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-getserversideprops"},"What is ",(0,i.kt)("inlineCode",{parentName:"a"},"getServerSideProps"),"?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#context-parameter-1"},"Context parameter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#return-value"},"Return value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#automatic-caching-capabilities"},"Automatic caching capabilities")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#getinitialprops-vs-getserversideprops"},(0,i.kt)("inlineCode",{parentName:"a"},"getInitialProps")," vs ",(0,i.kt)("inlineCode",{parentName:"a"},"getServerSideProps")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#getinitialprops"},(0,i.kt)("inlineCode",{parentName:"a"},"getInitialProps"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#getserversideprops"},(0,i.kt)("inlineCode",{parentName:"a"},"getServerSideProps")))))),(0,i.kt)("h2",{id:"what-is-getinitialprops"},"What is ",(0,i.kt)("inlineCode",{parentName:"h2"},"getInitialProps"),"?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," is an asynchronous function used for fetching data on the server and pre-rendering the resulting data (aka server-side rendering) in Next.js page components."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," behavior can be tricky for developers who are new to Next.js. The function runs only on the server at the initial page load. However, if you make client-side navigation to other parts of your application through the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Link>")," component or ",(0,i.kt)("inlineCode",{parentName:"p"},"next/router")," and come back to the page using ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps"),", the function will then run in the browser this time. "),(0,i.kt)("p",null,"Any data you are fetching in ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," is returned as an object and is used by Next.js to populate the ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," parameter in the default export in a page component. "),(0,i.kt)("p",null,"The example below shows how you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," in a page component:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/example.tsx"',title:'"pages/example.tsx"'},'// Get the data returned from getInitialProps as props\nfunction Page({ data }) {\n  // Render data...\n}\n\nPage.getInitialProps = async (context) => {\n   const res = await fetch("https://api.com");\n   const data = await res.json();\n   \n  return {data} // this will be passed to the page component as props\n}\n\nexport default Page\n')),(0,i.kt)("h3",{id:"context-parameter"},"Context parameter"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," accepts a single and optional parameter named ",(0,i.kt)("inlineCode",{parentName:"p"},"context"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," parameter is an object containing the following keys: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"req"),": An instance of ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#http_class_http_incomingmessage"},"HTTP request object")," (this object is only available when ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," runs on the server)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"res"),":  An instance of ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#http_class_http_serverresponse"},"HTTP response object")," (this object is only available when ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," runs on the server)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"pathname"),": Returns the current route. For example, if you have a file ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/example.js"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pathname")," will return ",(0,i.kt)("inlineCode",{parentName:"p"},"/example"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"query"),": Query string parsed as an object if the URL contains query parameters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"aspath"),": Returns a string of the actual path (including the query) as shown in the browser. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"err"),": Contains an error object if any error is encountered during the rendering"))),(0,i.kt)("p",null,"Visit the Next.js documentations ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/data-fetching/get-initial-props"},"here")," to learn more about ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps"),"."),(0,i.kt)("h2",{id:"what-is-getserversideprops"},"What is ",(0,i.kt)("inlineCode",{parentName:"h2"},"getServerSideProps"),"?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," is an asynchronous function used in Next.js pages component for server-side rendering and works almost the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps"),". It is a newer alternative to ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," introduced in ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/blog/next-9-3"},"Next.js 9.3"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," runs at request time and is ",(0,i.kt)("strong",{parentName:"p"},"guaranteed to always run on the server and never in the browser"),". So unlike ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps"),", even if you refresh the page or perform client-side navigation using ",(0,i.kt)("inlineCode",{parentName:"p"},"<Link>")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"next/router"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," will always run on the server.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/example.js"',title:'"pages/example.js"'},"// Get the data returned from getServerSideProps as props\nfunction Page({ message }) {\n        return (\n            <>\n                <h1>Example page</h1>\n                // Render data\n                <h2>{message}</h2>\n            </>\n        )\n}\n\nexport async function getServerSideProps() {\n    return {\n        props: {\n            message: 'Hello world!'\n        }\n    }\n}\n  \nexport default Page\n")),(0,i.kt)("h3",{id:"context-parameter-1"},"Context parameter"),(0,i.kt)("p",null,"Like ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," accepts a single and optional ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," parameter. The ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," object contains the following keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"req"),": An instance of ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#http_class_http_incomingmessage"},"HTTP request object"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"res"),": An instance of ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#http_class_http_serverresponse"},"HTTP response object"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"params"),": Contains the route parameter if the page is a dynamic page. For example, a dynamic file ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/[id.js]")," will have a ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," object that looks like ",(0,i.kt)("inlineCode",{parentName:"p"},"{ id: ... }"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"query"),": An object that contains the query string (if the page utilizes one), including dynamic route parameters.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"preview"),": Returns a Boolean value. Returns true if the page utilizes Preview Mode and false otherwise.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"previewData"),": The preview data set by setPreviewData if the page utilizes Preview Mode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"resolvedUrl"),": A resolved version of the URL that removes the _next/data prefix for client transitions ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"locale"),": Contains the active ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/i18n-routing"},"internationalized locale")," (if enabled)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"locales"),": Contains all supported locales information (if enabled)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"defaultLocale"),": Contains the configured default locale (if enabled)"))),(0,i.kt)("h3",{id:"return-value"},"Return value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," must return an object with any of the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"props"),": An object key-value pair passed to the page component. It should be a serializable object that can be serialized with ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON.stringify"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"notFound"),": A boolean object which allows the page to return a 404 status and 404 Page. If ",(0,i.kt)("inlineCode",{parentName:"p"},"notFound")," is set to true, the page will return a ",(0,i.kt)("inlineCode",{parentName:"p"},"404")," error even if the page was previously generated successfully.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"redirect"),": An object with the following structure ",(0,i.kt)("inlineCode",{parentName:"p"},"{ destination: string, permanent: boolean }"),". It allows redirecting to internal and external resources such as redirecting a user to a login page after a successful sign-up."))),(0,i.kt)("p",null,"You can visit the Next.js documentations ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props"},"here")," to learn more about ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"."),(0,i.kt)("h3",{id:"automatic-caching-capabilities"},"Automatic caching capabilities"),(0,i.kt)("p",null,"Next.js provides ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," (server-side Rendering) with caching capabilities that help improve server response times and reduces the number of requests to external services. "),(0,i.kt)("p",null,"Next.js will automatically add caching headers to static assets served from ",(0,i.kt)("inlineCode",{parentName:"p"},"/_next/static")," including JavaScript, CSS, static images, and other immutable media."),(0,i.kt)("p",null,"Here's how you can set a custom header in ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," using the response object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/example.js"',title:'"pages/example.js"'},"function Page({}) {\n        return (\n            <>\n               // ...\n            </>\n        )\n}\n\nexport async function getServerSideProps({ req, res }) {\n  res.setHeader(\n    'Cache-Control',\n    'public, s-maxage=10, stale-while-revalidate=59'\n  )\n\n  return {\n    props: {},\n  }\n}\n\nexport default Page\n")),(0,i.kt)("p",null,"Note that caching doesn't work when your application is running in development mode (",(0,i.kt)("inlineCode",{parentName:"p"},"next dev"),")."),(0,i.kt)("p",null,"You can learn more about configuration options for the HTTP header field ",(0,i.kt)("inlineCode",{parentName:"p"},"Cache-Control")," on ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"},"MDN"),"."),(0,i.kt)("hr",null),(0,i.kt)(d,{title:"Does your CRUD app need server state management?",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"getinitialprops-vs-getserversideprops"},(0,i.kt)("inlineCode",{parentName:"h2"},"getInitialProps")," vs ",(0,i.kt)("inlineCode",{parentName:"h2"},"getServerSideProps")),(0,i.kt)("p",null,"When you are doing server-side rendering in your applications, it's important to know which of the functions to use in your applications since the two functions work almost similarly, and are both included in the Next.js docs. "),(0,i.kt)("p",null,"We'll go through some examples to see how both functions work in real-world applications."),(0,i.kt)("h3",{id:"getinitialprops"},(0,i.kt)("inlineCode",{parentName:"h3"},"getInitialProps")),(0,i.kt)("p",null,"The GIF below shows how ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," behaves when it's used to fetch data for server-side rendering."),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-31-next-getInitial/getInitProp.gif",alt:"getinitialprops"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"Here's the code for the example above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/example.js"',title:'"pages/example.js"'},"import Link from 'next/link'\nfunction Page({ data }) {\n        return (\n            <>\n            <h1>Example page using <code>getInitialProps</code></h1>\n            <h1 style={{textDecoration: 'underline'}}><Link href=\"/\">Go home</Link></h1>\n           <br></br>\n            {\n              data.map((data, i) => {\n                return <h2 key={i}>{data.username}</h2>\n              })\n            }\n           \n            </>\n        )\n  }\n  \nPage.getInitialProps = async () => {\n  const res = await fetch ('https://jsonplaceholder.typicode.com/users')\n  const data = await res.json();\n\n  // The next line will log the first item in the API data to the console in the server\n  // during the initial first page load. After making a client-side navigation to the home page\n  // or any other part of the application, `getInitialProps` will then run in the browser. \n  // This will make the first item in the data returned from the API to be logged to the browser console \n  // instead of the server.\n  console.log(data[0]);\n\n  return { data }\n  }\n  \n  export default Page\n\n")),(0,i.kt)("p",null,"In the code above, we're fetching a list of users from the ",(0,i.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/"},"JSONPlaceholder")," API using ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps"),", and then passing the data as props to the page component for rendering. "),(0,i.kt)("p",null,"From the GIF, when the ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:3000/example")," page is first loaded, ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," runs ",(0,i.kt)("strong",{parentName:"p"},"only")," on the server so the line ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log(data[0])")," is logged to the server, and nothing is logged to the browser console."),(0,i.kt)("p",null,"However, when we make client-side navigation to the home page ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:3000")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Link>")," component, and return to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:3000/example"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," then runs ",(0,i.kt)("strong",{parentName:"p"},"only")," in the browser and the line ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log(data[0])")," logs the first item in the data returned from the API to the browser console."),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://discord.gg/refine"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,i.kt)("h3",{id:"getserversideprops"},(0,i.kt)("inlineCode",{parentName:"h3"},"getServerSideProps")),(0,i.kt)("p",null,"The GIF below shows the same example from the previous section using ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," to fetch a list of users from the ",(0,i.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/"},"JSONPlaceholder")," API for server-side rendering."),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-31-next-getInitial/getServerProp.gif",alt:"getserversideprops"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"Here's the code for the example above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="pages/example.js"',title:'"pages/example.js"'},"import Link from 'next/link'\n\nfunction Page({ data }) {\n        return (\n            <>\n                <h1>Example page using <code>getServerSideProps</code></h1>\n                <h1 style={{textDecoration: 'underline'}}><Link href=\"/\">Go home</Link></h1>\n                \n                <br></br>\n            {\n              data.map((data, i) => {\n                return <h2 key={i}>{data.username}</h2>\n              })\n            }\n            </>\n        )\n}\n\nexport async function getServerSideProps() { \n    const res = await fetch ('https://jsonplaceholder.typicode.com/users')\n    const data = await res.json();\n\n    // The next line will only be logged on the server and never on the browser console even if we make \n    // client-side navigation.\n    // This confirms that `getServerSideProps` is guaranteed to run on the server and never on the client (or browser).\n    console.log(data[0]);\n\n    return {\n        props: {\n            data\n        }\n    }\n}\n  \nexport default Page\n\n")),(0,i.kt)("p",null,"From the GIF, you can see that even though we made client-side navigation, and refresh the page, ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," was never run in the browser. "),(0,i.kt)("p",null,"In addition, writing server-side specific code such as using the ",(0,i.kt)("inlineCode",{parentName:"p"},"fs")," module and so on will work perfectly in ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),". However, you'll run into errors if you try the same thing in ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps"),"."),(0,i.kt)("p",null,"As you have learned from the previous sections and examples, ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," are both used in fetching data for server-side rendering in Next.js. "),(0,i.kt)("p",null,"Both functions share similarities as well as differences. One similar property is that both cannot be used in children components, but only in page components. The major and significant differences between the two functions is where they run and their behavior when making client-side navigation."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," will run on the server during the initial page load and, subsequently, run in the browser if you make client-side transition to other parts of the application. However, ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," will only run on the server and never in the browser (even if you make client-side navigation, or refresh the page). "),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," for data fetching and SSR in Next.js is outdated and deprecated because its behavior can be confusing for beginners and could also lead to unintentional bugs and errors if used the wrong way. "),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In summary, the Next.js developers recommend using ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," over ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," since the former has extra features such as automatic caching and handles all use cases for server-side rendering. "),(0,i.kt)("p",null,"In this article, we covered in-depth, the two Next.js data fetching methods for server-side rendering (",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"). You also learned about how each function works and their behavior."),(0,i.kt)("p",null,"And now, we hope this article will help you make the right choice to avoid unintentional errors and bugs when you do SSR in your Next.js applications."))}h.isMDXComponent=!0}}]);