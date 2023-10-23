"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33274],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=s(o),u=a,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return o?n.createElement(h,l(l({ref:t},c),{},{components:o})):n.createElement(h,l({ref:t},c))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,l=new Array(i);l[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<i;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},39265:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>d});o(67294);var n=o(3905);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const r={title:"Creating responsive tooltips in React with react-tooltip",description:"We'll explore how to create a custom tooltip component in a React application, as well as integrating the react-tooltip library.",slug:"react-tooltip",authors:"david_omotayo",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/social.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/blog/react-tooltip",source:"@site/blog/2023-05-23-react-tooltip.md",title:"Creating responsive tooltips in React with react-tooltip",description:"We'll explore how to create a custom tooltip component in a React application, as well as integrating the react-tooltip library.",date:"2023-05-23T00:00:00.000Z",formattedDate:"May 23, 2023",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:13.415,hasTruncateMarker:!1,authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],frontMatter:{title:"Creating responsive tooltips in React with react-tooltip",description:"We'll explore how to create a custom tooltip component in a React application, as well as integrating the react-tooltip library.",slug:"react-tooltip",authors:"david_omotayo",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/social.png",hide_table_of_contents:!1},prevItem:{title:"Kubernetes vs Docker - A Detailed Comparison",permalink:"/blog/kubernetes-vs-docker"},nextItem:{title:"A Detailed Guide on TypeScript Enum with Examples",permalink:"/blog/typescript-enum"},relatedPosts:[{title:"Create Full Featured Admin Panel with React and Ant Design",description:"We will see how easy it is to develop a functional Admin panel with the perfect harmony of Refine and Ant Design.",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.605,date:"2022-02-21T00:00:00.000Z"},{title:"How to use Material UI Card Component",description:"We'll discover the Material UI Card component with examples",permalink:"/blog/material-ui-card",formattedDate:"January 4, 2023",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:12.15,date:"2023-01-04T00:00:00.000Z"},{title:"Building React admin panel with NextUI and refine",description:"We will see how  to build a React admin panel using refine and NextUI components library",permalink:"/blog/next-ui-react-admin-panel",formattedDate:"September 20, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:41.84,date:"2023-09-20T00:00:00.000Z"}],authorPosts:[{title:"Using React Hot Toast as a Notification Provider for CRUD apps",description:"We'll introduce create a custom notification provider using the react-hot-toast library.",permalink:"/blog/react-hot-toast",formattedDate:"October 6, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:12.69,date:"2023-10-06T00:00:00.000Z"},{title:"Build a Progressive Web App (PWA) with Next.js",description:"We will walk you through the entire process of building a PWA using Next.JS and refine framework, from start to finish!",permalink:"/blog/next-js-pwa",formattedDate:"September 11, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:18.315,date:"2022-09-11T00:00:00.000Z"},{title:"Best React Admin Dashboard Libraries 2023",description:"We have curated a compilation of the 5 best React admin dashboard libraries that encompass all the essential features needed to create modern and feature-rich dashboards with minimal effort.",permalink:"/blog/react-admin-dashboard",formattedDate:"March 17, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:6.425,date:"2023-03-17T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Project setup",id:"project-setup",level:2},{value:"Creating a custom tooltip component",id:"creating-a-custom-tooltip-component",level:2},{value:"What is React-tooltip?",id:"what-is-react-tooltip",level:2},{value:"Setting up React-tooltip",id:"setting-up-react-tooltip",level:2},{value:"Using React-tooltip",id:"using-react-tooltip",level:2},{value:"Using React Tooltip component",id:"using-react-tooltip-component",level:2},{value:"Positioning",id:"positioning",level:2},{value:"Delay",id:"delay",level:2},{value:"Clickable tooltip",id:"clickable-tooltip",level:2},{value:"Conclusion",id:"conclusion",level:2}],m=(u="BannerRandom",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var u;const h={toc:d};function g(e){var{components:t}=e,o=l(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){a(e,t,o[t])}))}return e}({},h,o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"A tooltip is a short and informative message that appears when a user interacts with certain elements on a webpage. The main objective of a tooltip is to provide users with relevant information about the features and elements on the page when they are hovered or clicked."),(0,n.kt)("p",null,"Typically, a tooltip is displayed as a small box or pop-up and is commonly used to offer additional information about an icon, button, or other UI elements in an application. The content of a tooltip can also consist of various multimedia, including images, videos, and GIFs, based on the application's design."),(0,n.kt)("p",null,"You can see a tooltip in action through the following GIF example:"),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/first.gif",alt:"react tooltip"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"In this article, we'll explore how to create a custom tooltip component in a React application, as well as integrating a tooltip library like react-tooltip."),(0,n.kt)("h2",{id:"project-setup"},"Project setup"),(0,n.kt)("p",null,"There are two ways you can use tooltips in your React applications, you either create a custom tooltip component from scratch or use a library such as react-tooltip. We'll go over how to set up both approaches, but before delving into the specifics, we'll quickly set up a simple React application to showcase the examples in this article.\nTo this end, ",(0,n.kt)("a",{parentName:"p",href:"https://refine.new/"},"refine.new")," serves as an excellent tool that we can use to rapidly create a new React CRUD application."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://refine.new/"},"refine.new")," enables you to quickly bootstrap a new ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine")," application, an open-source React-based, headless UI library for creating enterprise applications, within your browser with features such as preview, tweaking, and instant download. "),(0,n.kt)("p",null,"To get started, head on to ",(0,n.kt)("a",{parentName:"p",href:"https://refine.new/"},"https://refine.new/"),", scroll down the page, and click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Let's start")," button."),(0,n.kt)("p",null,"Upon clicking the button, you\u2019ll be presented with a stepper component that let you choose and combine your preferred React platform, UI framework, backend connector, and auth provider."),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/select.png",alt:"react tooltip"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"Since we\u2019re not creating something complex, we\u2019ll use these options to set up our application: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Vite > Headless > Rest Api > No auth\n")),(0,n.kt)("p",null,"After completing the required steps and clicking the 'complete' button, you will be redirected to a preview page for your refine application. Here, you can make any necessary adjustments before building and downloading the application file."),(0,n.kt)("p",null,"Once you're done tweaking the application to your taste, click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Build & Download")," button on the sidebar to download the application. If you haven't already, you will be prompted to sign in with your Google or GitHub profile."),(0,n.kt)("p",null,"After logging in, a second pop-up would appear with a URL for downloading the project file."),(0,n.kt)("p",null,"Finally, extract the downloaded file and open it in your IDE of choice."),(0,n.kt)("p",null,"Now that we have our project set up, the final step is to install the development dependencies and start the development server. you can do this by executing the commands below in your terminal:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm install\nnpm run dev\n")),(0,n.kt)("p",null,"These commands will install the necessary dependencies for your project and start the development server. If your browser doesn\u2019t automatically preview the application, you can manually navigate to it by entering ",(0,n.kt)("inlineCode",{parentName:"p"},"[http://127.0.0.1:5173](http://127.0.0.1:5173)"),"  in your browser."),(0,n.kt)("br",null),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/welcome.png",alt:"react tooltip"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"refine was originally designed to provide a rapid way of bootstrapping enterprise-level React applications, complete with predefined pages. When you create a new headless project with refine, you\u2019ll notice that these pages are already set up by default, but with placeholder data generated using the refine Inferencer package."),(0,n.kt)("br",null),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/inferencer.png",alt:"react tooltip"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"The refine inferencer package is a tool that automates the generation of CRUD (Create, Read, Update, Delete) pages for resources in your refine application based on the data model. You can find more information about this package by visiting the ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/inferencer/https://refine.dev/docs/packages/documentation/inferencer/"},"documentation"),"."),(0,n.kt)("p",null,"Since our application's pages are being populated by the inferencer, we don't have direct access to the rendered content, so we cannot add a tooltip to a specific element like the ",(0,n.kt)("inlineCode",{parentName:"p"},"create")," button on the table. However, we can access the sidebar navigations via the ",(0,n.kt)("inlineCode",{parentName:"p"},"Menu")," component in the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/component")," directory."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/menu.png",alt:"react tooltip"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"When you create a Headless refine application, a ",(0,n.kt)("inlineCode",{parentName:"p"},"Layout")," component is automatically generated in the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/components")," directory. This component wraps the pages created by the inferencer and the ",(0,n.kt)("inlineCode",{parentName:"p"},"Menu")," component, which contains the sidebar navigation."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/layout.png",alt:"react tooltip"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"While the pages in the applications are automatically generate and are not editable, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Layout")," component provides some level of control over how the application is rendered to the browser."),(0,n.kt)("p",null,"We could simply clear out the ",(0,n.kt)("inlineCode",{parentName:"p"},"Layout")," component and create a simple component that we can use to render an element for our examples. However, since the predefined pages generated by refine simulate a real-world application, we have something close to what our examples may look like in an actual application."),(0,n.kt)("h2",{id:"creating-a-custom-tooltip-component"},"Creating a custom tooltip component"),(0,n.kt)("p",null,"The structure of a tooltip is not as complex as it may seem. It consists of a single element that contains some text and is positioned absolutely to the anchor element ( element whose functionality is explained by the tooltip) or its parent element. When the anchor element is hovered or clicked, the opacity of the tooltip is increased."),(0,n.kt)("p",null,"If we were to create a custom tooltip for the sidebar navigation, the markup inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"Menu")," component would be structured as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<nav className="menu">\n  <ul>\n    {menuItems.map((item) => (\n      <li key={item.key} className="tooltip_element">\n        <NavLink to={item.route}>{item.label}</NavLink>\n        <span className="tooltip">navigate to {item.label}</span>\n      </li>\n    ))}\n  </ul>\n</nav>;\n')),(0,n.kt)("p",null,"What we did here is self-explanatory; we simply added a ",(0,n.kt)("inlineCode",{parentName:"p"},"span")," element containing some text next to the navigation links."),(0,n.kt)("p",null,"And now for the styles:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".tooltip_element {\n  position: relative;\n}\n\n.tooltip {\n  position: absolute;\n  background-color: black;\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n  opacity: 0;\n  transition: opacity 1s;\n  top: 0;\n  left: 80px;\n  width: max-content;\n}\n\n.tooltip_element:hover .tooltip {\n  opacity: 1;\n}\n")),(0,n.kt)("p",null,"Here, we\u2019re positioning the tooltip absolutely to the navigation links. initially, its opacity is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),", and it becomes visible with an opacity of ",(0,n.kt)("inlineCode",{parentName:"p"},"1")," only when the navigation links are hovered over. This is all that is needed to create a simple tooltip."),(0,n.kt)("p",null,"If you save your progress and go back to the browser, you should see something similar to the GIF below."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/custom_tip.gif",alt:"react tooltip"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"As of now, we have hardcoded the tooltip into our application, but this approach won't be practical for larger and more complex real-world applications. To make it scalable, we can create a separate component for the tooltip and pass the text and other properties such as color, position, and background color to it through props. "),(0,n.kt)("p",null,"To implement this, create a new ",(0,n.kt)("inlineCode",{parentName:"p"},"tooltip")," folder within the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/component")," directory of your project and then add a ",(0,n.kt)("inlineCode",{parentName:"p"},"index.tsx")," file with the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\n\nexport interface ITooltipProps {\n  position: string;\n  message: string;\n}\n\nexport function Tooltip({ message, position }: ITooltipProps) {\n  return (\n    <div>\n      <span className={`tooltip tooltip-${position}`}>{message}</span>\n    </div>\n  );\n}\n')),(0,n.kt)("p",null,"In this code block, we\u2019re basically doing the same thing as before within the ",(0,n.kt)("inlineCode",{parentName:"p"},"Menu")," component, but now we're passing the content and a position class to the ",(0,n.kt)("inlineCode",{parentName:"p"},"span")," element dynamically. The position class name will allow us to position the tooltip using the ",(0,n.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"right"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"bottom"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"left")," properties of the tooltip element. We'll need to create styles for each position that will be passed to the component:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".tooltip-right {\n  top: -5px;\n  left: 105%;\n}\n\n.tooltip-left {\n  top: -5px;\n  right: 105%;\n}\n\n.tooltip-top {\n  bottom: 105%;\n  left: 0;\n}\n\n.tooltip-bottom {\n  top: 105%;\n  left: 0;\n}\n")),(0,n.kt)("p",null,"Now, If you import the tooltip component into the Menu component and pass the content and desired position as props, you should see a similar result when you view your application in the browser."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useMenu } from "@refinedev/core";\nimport { NavLink } from "react-router-dom";\nimport { Tooltip } from "../tooltip";\n\nexport const Menu = () => {\n  const { menuItems } = useMenu();\n\n  return (\n    <nav className="menu">\n      <ul>\n        {menuItems.map((item) => (\n          <li key={item.key} className="tooltip_element">\n            <NavLink to={item.route}>{item.label}</NavLink>\n            <Tooltip message={`route to ${item.label}`} position="bottom" />\n          </li>\n        ))}\n      </ul>\n    </nav>\n  );\n};\n')),(0,n.kt)("br",null),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/custom_last.gif",alt:"react tooltip"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"Our tooltip component is now ready for use throughout the application, however, it's missing some crucial features that would require significant time and effort to implement. For this reason, it is recommended to use a tooltip library like react-tooltip. "),(0,n.kt)("p",null,"In the following sections, we will introduce and demonstrate how to integrate react-tooltip into our application."),(0,n.kt)("h2",{id:"what-is-react-tooltip"},"What is React-tooltip?"),(0,n.kt)("p",null,"React tooltip is an open-source package for adding tooltips to react applications. It allows developers to create dynamic and engaging user interfaces by providing a simple and customizable approach to adding tooltips to any React component."),(0,n.kt)("p",null,"With react-tooltip, developers can easily control the content, appearance, and behavior of the tooltips in their applications. Overall, the package simplifies the process of implementing tooltips and saves time and effort for developers."),(0,n.kt)("h2",{id:"setting-up-react-tooltip"},"Setting up React-tooltip"),(0,n.kt)("p",null,"To incorporate react-tooltip into our application, we need to install the package first. Start by going to the terminal and executing the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm install react-tooltip\nor \nyarn add react-tooltip\n")),(0,n.kt)("p",null,"Next, navigate to your project\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"index.tsx")," file and add the following CSS import:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import "react-tooltip/dist/react-tooltip.css";\n')),(0,n.kt)("p",null,"This CSS file contains all the necessary styles react-tooltip needs to properly render tooltips in your application. It is crucial to include this file in the ",(0,n.kt)("inlineCode",{parentName:"p"},"index.tsx")," or an equivalent top-level file; otherwise, the tooltip may not render correctly."),(0,n.kt)("p",null,"react-tooltip has been successfully incorporated, we can now leverage its features throughout our application. We'll explore how to do so efficiently in the following sections. "),(0,n.kt)("h2",{id:"using-react-tooltip"},"Using React-tooltip"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"react-tooltip")," package provides a ",(0,n.kt)("inlineCode",{parentName:"p"},"<Tooltip/>")," component that can be bound to an anchor element and used to display element-specific information. There are two ways to bind the component to an anchor element:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Using data attributes on elements"),(0,n.kt)("li",{parentName:"ul"},"Using the ReactTooltip component and props")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Using data attributes"),"\nThis method entails binding and defining the tooltip's content and position directly on anchor elements via specific data attributes, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"data-tooltip-content"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"data-tooltip-place"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"data-tooltip-id"),". "),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"data-tooltip-id")," attribute is used to link the anchor element to the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Tooltip/>")," component. it is assigned an ID that corresponds to the ID on the anchor element. While the ",(0,n.kt)("inlineCode",{parentName:"p"},"data-tooltip-content")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"data-tooltip-place")," are used to set the content and position of the tooltip, respectively."),(0,n.kt)("p",null,"To use this method in our application, we\u2019ll start by importing the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Tooltip/>")," component into the ",(0,n.kt)("inlineCode",{parentName:"p"},"Menu")," component and pass the content and position of the tooltip to the anchor element using the data attributes, as shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Tooltip } from "react-tooltip";\n\nexport const Menu = () => {\n  const { menuItems } = useMenu();\n\n  return (\n    <nav className="menu">\n      <ul>\n        {menuItems.map((item) => (\n          <li key={item.key} className="tooltip_element">\n            <NavLink\n              data-tooltip-id="my-tooltip"\n              data-tooltip-content="Hello world!"\n              data-tooltip-place="top"\n              to={item.route}\n            >\n              {item.label}\n            </NavLink>\n          </li>\n        ))}\n      </ul>\n    </nav>\n  );\n};\n')),(0,n.kt)("p",null,"Next, we will define the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Tooltip>")," component next to the anchor element and give it the same ID as the ",(0,n.kt)("inlineCode",{parentName:"p"},"data-tooltip-id")," attribute on the navigation element:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'<li key={item.key} className="tooltip_element">\n  <>\n    <NavLink\n      data-tooltip-id="my-tooltip"\n      data-tooltip-content={`route to ${item.label}`}\n      data-tooltip-place="top"\n      to={item.route}\n    >\n      {item.label}\n    </NavLink>\n    <Tooltip id="my-tooltip" />\n  </>\n</li>;\n')),(0,n.kt)("p",null,"This will bind the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Tooltip/>")," component to the navigations and display the specified content when they are hovered on."),(0,n.kt)("br",null),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/rtt-first.gif",alt:"react tooltip"})),(0,n.kt)("br",null),(0,n.kt)("hr",null),(0,n.kt)(m,{mdxType:"BannerRandom"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"using-react-tooltip-component"},"Using React Tooltip component"),(0,n.kt)("p",null,"In contrast to the previous method, this technique employs CSS selectors to bind the anchor element with the tooltip component instead of relying on data attributes. The tooltip component\u2019s content is assigned to it as children, while other properties such as ",(0,n.kt)("inlineCode",{parentName:"p"},"place")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"delay")," are defined using props."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'<li key={item.key} className="tooltip_element">\n  <>\n    <NavLink className="my-tooltip" to={item.route}>\n      {item.label}\n    </NavLink>\n    <Tooltip anchorSelect=".my-tooltip" place="left">\n      route to {item.label}\n    </Tooltip>\n  </>\n</li>;\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"anchorSelect")," property takes a string that matches the CSS selector provided on the anchor element. Its function is to locate anchor elements with matching selectors and attach the tooltip to them."),(0,n.kt)("p",null,"Notice that the ",(0,n.kt)("inlineCode",{parentName:"p"},"anchorSelect")," property is prefixed with a dot, which is necessary because it accepts valid CSS selectors. If we were to set an ID on the anchor element instead, we would use a hash to begin the selector."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'<li key={item.key} className="tooltip_element">\n  <>\n    <NavLink className="my-tooltip" to={item.route}>\n      {item.label}\n    </NavLink>\n    <Tooltip anchorSelect=".my-tooltip" place="left">\n      route to {item.label}\n    </Tooltip>\n  </>\n</li>;\n')),(0,n.kt)("p",null,"The tooltip will render on the browser just the same."),(0,n.kt)("br",null),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/using_rtt2.gif",alt:"react tooltip"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"positioning"},"Positioning"),(0,n.kt)("p",null,"Throughout this article, we've consistently demonstrated how to use positioning in different examples, so you likely have a good understanding of how it works for both low-level and high-level implementations."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"place")," prop in the react-tooltip package is used to set the position of the tooltips and can be assigned one of four values that are similar to the position properties in CSS."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"top"),": This positions the tooltip at the top of the anchor element")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/positioning-top.png",alt:"react tooltip"})),(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"right"),": This positions the tooltip on the right side of the anchor element")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/positioning-right.png",alt:"react tooltip"})),(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bottom"),": This positions the tooltip at the top of the anchor element")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/positioning-bottom.png",alt:"react tooltip"})),(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"left"),": This positions the tooltip on the left side of the anchor element")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/positioning_left.png",alt:"react tooltip"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"You may be curious about why the tooltip is appearing on the right of the anchor element rather than the left. This leads us to another useful feature of react-tooltip: responsiveness. By default, react-tooltip adjusts itself to fit your design, regardless of limitations. In this scenario, there is no more space left on the left side of the navigation area. Therefore, react-tooltip is rendering the tooltip on the right side instead of the left."),(0,n.kt)("h2",{id:"delay"},"Delay"),(0,n.kt)("p",null,"Now that we understand how react-tooltip works and the various ways you could integrate it into your project, let's take a look at some of its standout features. Beginning with Delays, this feature enables you to introduce a delay before the tooltip appears or disappears when the anchor element is hovered over."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"tooltip-delay-show"),"\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"tooltip-delay-show")," attribute adds a delay before the tooltip appears when an anchor element is hovered on. It requires a number value in milliseconds to specify the duration of the delay."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'<li key={item.key} className="tooltip_element">\n  <>\n    <NavLink\n      data-tooltip-id="my-tooltip"\n      data-tooltip-content={`route to ${item.label}`}\n      data-tooltip-place="top"\n      data-tooltip-delay-show={1000}\n      to={item.route}\n    >\n      {item.label}\n    </NavLink>\n    <Tooltip id="my-tooltip" />\n  </>\n</li>;\n')),(0,n.kt)("br",null),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/delay_show.gif",alt:"react tooltip"})),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"tooltip-delay-hide"),"\nThis attribute does the opposite of the former, as it adds a delay to when the tooltip disappears from the screen after the mouse leaves the anchor element. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'<li key={item.key} className="tooltip_element">\n  <>\n    <NavLink\n      data-tooltip-id="my-tooltip"\n      data-tooltip-content={`route to ${item.label}`}\n      data-tooltip-place="top"\n      data-tooltip-delay-hide={1000}\n      to={item.route}\n    >\n      {item.label}\n    </NavLink>\n    <Tooltip id="my-tooltip" />\n  </>\n</li>;\n')),(0,n.kt)("br",null),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/delay_hide.gif",alt:"react tooltip"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"clickable-tooltip"},"Clickable tooltip"),(0,n.kt)("p",null,"react-tooltip also provides a feature that allows you to create clickable tooltips. This is useful if you need to include a button or link that takes the user to a page with detailed information related to the content displayed in the tooltip."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'<li key={item.key} className="tooltip_element">\n  <>\n    <NavLink id="my-tooltip" to={item.route}>\n      {item.label}\n    </NavLink>\n    <Tooltip anchorSelect="#my-tooltip" place="right" clickable>\n      route to {item.label}\n      <br />\n      <button\n        onClick={() => alert(`This link routes to the ${item.label} page`)}\n      >\n        learn more\n      </button>\n    </Tooltip>\n  </>\n</li>;\n')),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-23-react-tooltip/clickable.gif",alt:"react tooltip"})),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",null,(0,n.kt)("a",{href:"https://discord.gg/refine"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In this article, we covered the steps involved in creating and implementing a custom tooltip in a React application, and highlighted the challenges of building a comprehensive tooltip component from scratch. We then introduced react-tooltip and explored various methods of integrating the package into a React application."),(0,n.kt)("p",null,"There are many more features available in react-tooltip than what we covered in this article. I would suggest visiting the documentation and exploring the many capabilities of the package."))}g.isMDXComponent=!0}}]);