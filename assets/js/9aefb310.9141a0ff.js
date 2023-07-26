"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const r={title:"A Guide on React Lazy Loading",description:"We will be looking at what lazy loading is, how it works, and how it can be used to improve the performance of React applications.",slug:"react-lazy-loading",authors:"chidume_nnamdi",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-07-react-lazy/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/react-lazy-loading",source:"@site/blog/2022-12-07-react-lazy.md",title:"A Guide on React Lazy Loading",description:"We will be looking at what lazy loading is, how it works, and how it can be used to improve the performance of React applications.",date:"2022-12-07T00:00:00.000Z",formattedDate:"December 7, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:9.925,hasTruncateMarker:!1,authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],frontMatter:{title:"A Guide on React Lazy Loading",description:"We will be looking at what lazy loading is, how it works, and how it can be used to improve the performance of React applications.",slug:"react-lazy-loading",authors:"chidume_nnamdi",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-07-react-lazy/social.png",hide_table_of_contents:!1},prevItem:{title:"Svelte vs React Comparison",permalink:"/blog/svelte-vs-react"},nextItem:{title:"git stash - Save the Uncommitted Changes Locally",permalink:"/blog/git-stash"},relatedPosts:[{title:"Redirect in React Router V6 with useNavigate hook",description:"We'll discover how to perform a redirect using useNavigate in React Router V6",permalink:"/blog/usenavigate-react-router-redirect",formattedDate:"September 19, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:5.295,date:"2022-09-19T00:00:00.000Z"},{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",description:"Easy way to creating dynamic forms in React CRUD apps with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design",formattedDate:"November 17, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:25.29,date:"2022-11-17T00:00:00.000Z"},{title:"A Comprehensive Guide of React Unit Testing",description:"We'll learn how to unit test our component down to hooks and Context.",permalink:"/blog/react-unit-testing",formattedDate:"May 26, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:20.37,date:"2023-05-26T00:00:00.000Z"}],authorPosts:[{title:"How to use Zustand",description:"We'll learn how to use Zustand in our React project.",permalink:"/blog/zustand-react-state",formattedDate:"May 18, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:15.66,date:"2023-05-18T00:00:00.000Z"},{title:"A Comprehensive Guide of React Unit Testing",description:"We'll learn how to unit test our component down to hooks and Context.",permalink:"/blog/react-unit-testing",formattedDate:"May 26, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:20.37,date:"2023-05-26T00:00:00.000Z"},{title:"How to Install and Use NVM?",description:"Guide to using NVM with Mac and Windows",permalink:"/blog/install-nvm-mac-and-windows",formattedDate:"November 9, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:7.49,date:"2022-11-09T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is lazy loading?",id:"what-is-lazy-loading",level:2},{value:"What is React.lazy",id:"what-is-reactlazy",level:2},{value:"Suspense",id:"suspense",level:2},{value:"Catching Loading Errors",id:"catching-loading-errors",level:2},{value:"Route-based code-splitting",id:"route-based-code-splitting",level:2},{value:"Component-based code-splitting",id:"component-based-code-splitting",level:2},{value:"Conclusion",id:"conclusion",level:2}],u=(m="PromotionBanner",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const h={toc:c};function g(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Lazy Loading has been a concept in software development in general not just in web development. Lazy Loading can and used in desktop and mobile development. It is just another trick in making performance better in applications.\nLazy loading is a technique used to optimize the performance of a website or application. It's an approach that loads only the necessary resources when they're needed, instead of downloading everything at once. This way, users don't have to wait for all the resources to be downloaded before they can use the site or app."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-lazy-loading"},"What is lazy loading?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-reactlazy"},"What is React.lazy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#suspense"},"Suspense")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#catching-loading-errors"},"Catching Loading Errors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#route-based-code-splitting"},"Route-based code-splitting")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#component-based-code-splitting"},"Component-based code-splitting"))),(0,a.kt)("h2",{id:"what-is-lazy-loading"},"What is lazy loading?"),(0,a.kt)("p",null,"The idea behind lazy loading is that it reduces the initial page load time, resulting in faster page loading and a better user experience. It's particularly useful for websites or applications that contain a lot of content, as it ensures that only essential resources are loaded initially."),(0,a.kt)("p",null,"Let's use a blog website as an example to describe how lazy loading will be effective in upping the performance of the website."),(0,a.kt)("p",null,"The blog website has a home page, a list page, and a detail page. The home page is the main page of the website, which is the first page that users see when they enter the website. The list page is the page that displays the list of blog articles. The detail page is the page that displays the content of the blog article.\nIf the home page loads the list and detail pages are also loaded with it, we will see that this will increase the page load time of the home page."),(0,a.kt)("p",null,"home page - 39KB\nlist page - 90KB\ndetail page - 88KB"),(0,a.kt)("p",null,"We will see that a total of 217KB of the file will be loaded just for loading the home page. We can mitigate against this by breaking the bundle up and loading them at will. When the home page is loaded, only the home page is loaded. This will speed up the page load time because we are now loading only 39KB instead of the whole 217 KB.\nSo in a nutshell, this is how lazy loading is used in web development to speed up the performance of a webpage."),(0,a.kt)("p",null,"Also, not only pages are lazily loaded, but other UI elements of a page are also lazily loaded. For example, lists and images are lazily loaded until they are needed. The question is, when are they needed?"),(0,a.kt)("p",null,"Let's answer that: let's say in our detail page that we have hundreds of images and these images will require another fetch from the server, so imagine sending hundreds of requests to fetch images in a single detail page, we will surely notice a drop in performance in our browser. What we will do is defer the loading of the images and load them once they are about to be scrolled into the viewport of the browser."),(0,a.kt)("p",null,"So we see that we can lazy load UI elements in a webpage and also other pages on our website. Lazy loading is an attempt to lower the page load time and the response times of our web pages to drive customer retention. Humans are impatient and if your webpage takes more than 2 secs to load, 95% of your users are most likely not patient enough to wait. So we will strive to use lazy loading to load the important part first and fast!"),(0,a.kt)("h2",{id:"what-is-reactlazy"},"What is React.lazy"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"React.lazy()")," is a powerful tool for optimizing the performance of React applications. It allows developers to import components dynamically, which can significantly reduce the size of the initial bundle and improve the overall performance of the application. In this article, we'll take a look at what ",(0,a.kt)("inlineCode",{parentName:"p"},"React.lazy()")," is, how it works, and how it can be used to improve the performance of React applications."),(0,a.kt)("p",null,"React.lazy is a new feature introduced in React 16.6 that allows developers to implement lazy loading easily. It enables developers to split their code into small chunks, which can then be loaded on demand. This helps improve the performance of applications by reducing the amount of code that needs to be downloaded initially."),(0,a.kt)("p",null,"So, ",(0,a.kt)("inlineCode",{parentName:"p"},"lazy()")," is a function in the React bundle. We can import it like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { lazy } from "react";\n')),(0,a.kt)("p",null,"// OR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import React from "react";\nReact.lazy;\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"React.lazy")," utilizes dynamic import, which is a new feature of ES6 (ECMAScript 6). Dynamic import allows developers to dynamically import a module or component at runtime."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { capitalizeFirstLetter } from "./utils";\n')),(0,a.kt)("p",null,'We want to lazy load the "utils" file and to be loaded when we want to use the ',(0,a.kt)("inlineCode",{parentName:"p"},"capitalizeFirstLetter")," function. We use the ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," dynamic function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import("./utils").then((utils) => {\n  console.log(utils.capitalizeFirstLetter("nnamdi chidume"));\n});\n')),(0,a.kt)("p",null,"This will spill out the ",(0,a.kt)("inlineCode",{parentName:"p"},"utils")," file from the final bundle and load it on demand.\nComing to use ",(0,a.kt)("inlineCode",{parentName:"p"},"React.lazy"),", we will first have to import the component we want to lazy load:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import LazyComponent from "./LazyComponent";\n')),(0,a.kt)("p",null,"Then, we call ",(0,a.kt)("inlineCode",{parentName:"p"},"React.lazy")," passing a callback function to it. Then this callback function will call the ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," function in its body and return it. Then the path of the component will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," function call."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const LazyComponent = React.lazy(() => import("./LazyComponent"));\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"LazyComponent")," will be split from the main bundle into its bundle. It will not load with the main bundle during the page's initial load. It will be loaded when the ",(0,a.kt)("inlineCode",{parentName:"p"},"LazyComponent")," is to be used."),(0,a.kt)("p",null,"For example, on our blog website, we have the pages: home, list, and detail. On the home page, we have links in each blog article to the detail page."),(0,a.kt)("p",null,"Our home page will be like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import DetailPage from "./DetailPage";\n\nconst DetailPage = React.lazy(() => import("./DetailPage"));\n\nexport const HomePage = () => {\n    return (\n      <ul>\n         {this.props.blogs.map((blog, index) => {\n           return <DetailPage blog={blog} />;\n         })}\n      </ul>\n      );\n    };\n')),(0,a.kt)("p",null,"Now, the DetailPage component will be broken out into a separate bundle and will not be loaded in the initial load time of the HomePage.\nWhen we run this code we will get an error: ",(0,a.kt)("inlineCode",{parentName:"p"},"React component suspended while rendering, but no fallback UI was specified."),"\nThis is because a lazily loaded component with ",(0,a.kt)("inlineCode",{parentName:"p"},"React.lazy")," must be wrapped inside ",(0,a.kt)("inlineCode",{parentName:"p"},"Suspense")," component."),(0,a.kt)("p",null,"What is Suspense?"),(0,a.kt)("hr",null),(0,a.kt)(u,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"suspense"},"Suspense"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Suspense")," is a React feature that allows for components to be loaded asynchronously. It is used in conjunction with ",(0,a.kt)("inlineCode",{parentName:"p"},"React.lazy"),'. Suspense is also used to display a loading indicator while the component is being fetched, or it can be used to render a fallback component if the component fails to load.\nTo use the Suspense component, we import it from the "react" package.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Suspense } from "react";\n')),(0,a.kt)("p",null,"Next, we wrap a ",(0,a.kt)("inlineCode",{parentName:"p"},"React.lazy")," loaded component inside it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<Suspense>\n    <LazyComponent />\n</Suspense>\n")),(0,a.kt)("p",null,"This will render the LazyComponent."),(0,a.kt)("p",null,"This is bad UX practice because the user will not know that a component will load. So we need to show the UX that something is coming, we will display a UI element to indicate to the user that a UI view will be loaded."),(0,a.kt)("p",null,"To do that in Suspense, we will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"fallback")," prop. Suspense uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"fallback")," prop to display a UI on the page while the lazily loaded component is still being loaded."),(0,a.kt)("p",null,"Let's add ",(0,a.kt)("inlineCode",{parentName:"p"},"fallback"),' to the above code, to display "Loading" before the LazyComponent is downloaded completely and rendered:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<Suspense fallback={"Loading..."}>\n  <LazyComponent />\n</Suspense>\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fallback")," can take a JSX element:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<Suspense fallback={<div>Loading...</div>}>\n  <LazyComponent />\n</Suspense>\n\n")),(0,a.kt)("h2",{id:"catching-loading-errors"},"Catching Loading Errors"),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"React.lazy"),", it is important to catch any loading errors that might occur(for example, if a network error occurs).\nWe will wrap the Suspense component that contains our lazy-loaded components in an ErrorBoundary component. ErrorBoundary in React is like a try-catch block in JavaScript. It catches an error in a component tree without causing the errors to break the whole application."),(0,a.kt)("p",null,"A simple ErrorBoundary component is this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    logService(error, errorInfo);\n  }\n\n  render() {\n    return this.state.hasError ? (\n      <h1>Something went wrong.</h1>\n    ) : (\n      this.props.children\n    );\n  }\n}\n")),(0,a.kt)("p",null,"If there is an error in the component tree it is wrapped in, that component will not break the app rather it will render ",(0,a.kt)("inlineCode",{parentName:"p"},"Something went wrong.")," in its place. This will allow you to catch any errors that occur with the loading of the component and handle them appropriately.\nNow, we use this error boundary like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<ErrorBoundary>\n  <Suspense fallback={<div>Loading...</div>}>\n    <LazyComponent />\n  </Suspense>\n</ErrorBoundary>;\n")),(0,a.kt)("h2",{id:"route-based-code-splitting"},"Route-based code-splitting"),(0,a.kt)("p",null,"Much of what we have seen here is code-splitting components used for UI sections in the application. We don't however have to lazy load all the components in our application. Doing that might lead to serious issues."),(0,a.kt)("p",null,"Finding and knowing when and which component to lazy load is quite tricky. But the thing we know for sure is that we have to lazy load Route-based components.\nRoute-based components are components that are loaded when a specified URL is navigated to our application. They are the route pages setup using react-router in our application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { BrowserRouter as Router, Routes, Route } from "react-router-dom";\nimport Home from "./Home";\nimport About from "./About";\n\nconst App = () => (\n  <Router>\n    <Routes>\n      <Route path="/" element={<Home />} />\n      <Route path="/about" element={<About />} />\n    </Routes>\n  </Router>\n);\n')),(0,a.kt)("p",null,"We have two routes here: ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/about"),". They each load the ",(0,a.kt)("inlineCode",{parentName:"p"},"Home")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"About")," pages respectively. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Home")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"About")," components are route-based components.\nNow, these components are ideal components that are to be lazy loaded. IT will drastically reduce the overall bundle size of the application and decrease the load time of the page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { Suspense, lazy } from "react";\nimport { BrowserRouter as Router, Routes, Route } from "react-router-dom";\n\nconst Home = React.lazy(() => import("./Home"));\nconst About = React.lazy(() => import("./About"));\n\nconst App = () => (\n  <Router>\n    <Suspense>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n      </Routes>\n    </Suspense>\n  </Router>\n);\n')),(0,a.kt)("p",null,"Now, ",(0,a.kt)("inlineCode",{parentName:"p"},"Home")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"About")," will be broken off into their separate bundles. These bundles will be loaded when any of the page routes attached to the component is loaded."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"component-based-code-splitting"},"Component-based code-splitting"),(0,a.kt)("p",null,"We have two types of components in React. There are Route-based components and Component-based components. We have learned about Route-based components in the above section."),(0,a.kt)("p",null,"Component-based components are components that are not attached to the application's page route. They are normal components in the application used to display UI sections in the app. Most of the examples we touched on here are examples of Component-based code-splitting. Examples of components that are ideal to be code-split are Modals and Asides. This is because they are loaded eagerly on the load of the webpage.\nHeaders, dropdowns, and buttons are not to be lazily loaded because they are easily needed and are one of the most used UI elements in a webpage."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"We started by learning the definition of lazy loading, what it means and what good it brings to web development and software development at large. In the next sections, we learned about React.lazy function and how to use it. Next, we learned examples of how to lazily load Route-based and Component-based components in our React application."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"React.lazy")," is a powerful feature of React that allows components to be loaded lazily from the server. It is a way to make components available only when they are needed, thus improving the performance of an application."))}g.isMDXComponent=!0}}]);