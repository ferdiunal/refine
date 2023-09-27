"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62469],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Build Access Control Mechanism using Permify",description:"In this article, I will explain how to build an Access Control n Refine using Permify; an authorization API that helps you to create any kind of authorization system easily with its panel.",slug:"build-access-control-permify",authors:"ege",tags:["access-control"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/social.jpg",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/build-access-control-permify",source:"@site/blog/2022-05-23-build-access-control-permify.md",title:"Build Access Control Mechanism using Permify",description:"In this article, I will explain how to build an Access Control n Refine using Permify; an authorization API that helps you to create any kind of authorization system easily with its panel.",date:"2022-05-23T00:00:00.000Z",formattedDate:"May 23, 2022",tags:[{label:"access-control",permalink:"/blog/tags/access-control"}],readingTime:5.455,hasTruncateMarker:!0,authors:[{name:"Ege Ayt\u0131n",title:"Software Developer",url:"https://github.com/EgeAytin",imageURL:"https://github.com/EgeAytin.png",key:"ege"}],frontMatter:{title:"Build Access Control Mechanism using Permify",description:"In this article, I will explain how to build an Access Control n Refine using Permify; an authorization API that helps you to create any kind of authorization system easily with its panel.",slug:"build-access-control-permify",authors:"ege",tags:["access-control"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/social.jpg",hide_table_of_contents:!1},prevItem:{title:"We\u2019ve raised $1M in Seed Funding! \ud83d\ude80 \ud83d\ude80 \ud83d\ude80",permalink:"/blog/weve-raised-dollar1m-seed-funding"},nextItem:{title:"Best Open-Source Headless CMS to Try for Your Next Application",permalink:"/blog/open-source-headless-cms"},relatedPosts:[{title:"Implementing Role Based Access Control",description:"We'll implement Role Based Access Control (RBAC)",permalink:"/blog/refine-pixels-6",formattedDate:"February 19, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.205,date:"2023-02-19T00:00:00.000Z"},{title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",permalink:"/blog/nextauth-google-github-authentication-nextjs",formattedDate:"August 18, 2022",authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],readingTime:12.725,date:"2022-08-18T00:00:00.000Z"},{title:"OTP Authentication with Supabase and Twilio in React",description:"We'll implement OTP(SMS) authorization using Twilio and Supabase in React app.",permalink:"/blog/supabase-twilio-otp-authentication-in-react",formattedDate:"September 22, 2022",authors:[{name:"Vijit Ail",title:"Software Engineer",url:"https://github.com/vijitail",imageURL:"https://github.com/vijitail.png",key:"vijit_ail"}],readingTime:14.295,date:"2022-09-22T00:00:00.000Z"}],authorPosts:[]},p={authorsImageUrls:[void 0]},u=[{value:"Build Access Control Mechanism using Permify",id:"build-access-control-mechanism-using-permify",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Step 1: Setup the Permify in Refine application",id:"step-1-setup-the-permify-in-refine-application",level:3},{value:"Step 2: Create a access control mechanism in Refine Access Control Provider",id:"step-2-create-a-access-control-mechanism-in-refine-access-control-provider",level:3},{value:"Step 3: Run application &amp; Create Resources",id:"step-3-run-application--create-resources",level:3},{value:"Step 4: Define access control rules &amp; options on Permify",id:"step-4-define-access-control-rules--options-on-permify",level:3},{value:"Step 5: Creating rule sets (Options)",id:"step-5-creating-rule-sets-options",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Example",id:"example",level:2}],m={toc:u};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"build-access-control-mechanism-using-permify"},"Build Access Control Mechanism using Permify"),(0,r.kt)("p",null,"In this article, we will examine how to build an Access Control mechanism in Refine using Permify; an authorization as a service that helps you to create any kind of authorization system easily with its panel."),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"As an overview, we will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setup Permify to refine application"),(0,r.kt)("li",{parentName:"ul"},"Create a access control mechanism in Refine Access Control Provider"),(0,r.kt)("li",{parentName:"ul"},"Define access control rules & options on Permify Panel to check user accesses.")),(0,r.kt)("h3",{id:"step-1-setup-the-permify-in-refine-application"},"Step 1: Setup the Permify in Refine application"),(0,r.kt)("p",null,"First let's create a demo react application using refine. You can follow the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/tutorial/introduction/index/"},"tutorial to create a simple")," admin panel for a CMS-like application. "),(0,r.kt)("p",null,"If you're application is ready, lets create a free instant account at Permify from ",(0,r.kt)("a",{parentName:"p",href:"https://panel.permify.co/auth/registration"},"here"),". "),(0,r.kt)("p",null,"Then, we need to  install permify js package to our app with following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"npm install @permify/permify-service-js\n")),(0,r.kt)("p",null,"And initialize permify client with workspace id and public token which can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://panel.permify.co/settings/workspace"},"Workspace Settings")," section. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'//initialize permify client\nconst permify = new PermifyClient({\n workspace_id: "workspace_id",\n public_key: "public_token"\n});\n')),(0,r.kt)("p",null,"Before diving into more; if you\u2019re using your API rather than refine\u2019s test API, you need to complete the setup for your backend as well."),(0,r.kt)("p",null,"On the server side you just need to match your users and resources. You can follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.permify.co/docs/getting-started"},"Getting Started")," on Permify docs."),(0,r.kt)("p",null,"If you\u2019re using refine\u2019s demo API, create a data folder and add sample users there. We will use the ",(0,r.kt)("strong",{parentName:"p"},"Header")," layout component to change logged in sample users. "),(0,r.kt)("p",null,"Check out the example demo environment for the data folder and full UI layer. "),(0,r.kt)("h3",{id:"step-2-create-a-access-control-mechanism-in-refine-access-control-provider"},"Step 2: Create a access control mechanism in Refine Access Control Provider"),(0,r.kt)("p",null,"Refine provides an agnostic API via the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/providers/accessControl-provider/"},"accessControlProvider")," to manage access control throughout your app. "),(0,r.kt)("p",null,"Lets create a mechanism in our Access Control Provider using Permify client\u2019s ",(0,r.kt)("strong",{parentName:"p"},"isAuthorized")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'accessControlProvider={{\n can: async ({ resource, action, params }) => {\n   if (action === "delete" || action === "edit" || action === "show") {\n     return Promise.resolve({\n       can: await permify.isAuthorized(\n         user.id,\n         resource,\n         action,\n         params.id.toString(),\n         resource\n       )\n     });\n   }\n \n   return Promise.resolve({\n     can: await permify.isAuthorized(user.id, resource, action)\n   });\n }\n}}\n')),(0,r.kt)("p",null,"With this set up, each access request can be captured by Permify and returns a decision according to your pre-defined rules and conditions on the Permify Panel. "),(0,r.kt)("h3",{id:"step-3-run-application--create-resources"},"Step 3: Run application & Create Resources"),(0,r.kt)("p",null,"Run the application and then open your ",(0,r.kt)("a",{parentName:"p",href:"https://panel.permify.co/access-control/policies"},"Policies")," section on the Permify Panel to see created policies."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"isAuthorized")," function works in the first or create methodology. As an example, if the action is  ",(0,r.kt)("strong",{parentName:"p"},"create")," and resource is ",(0,r.kt)("strong",{parentName:"p"},"posts")," it will automatically create its policy."),(0,r.kt)("p",null,"Since it's newly created and no rules attached, it will return a true to access request. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," If you\u2019re testing this access mechanism without creating resources beforehand on Permify. You won\u2019t see the policies for ",(0,r.kt)("strong",{parentName:"p"},"delete"),", ",(0,r.kt)("strong",{parentName:"p"},"show")," and ",(0,r.kt)("strong",{parentName:"p"},"edit")," actions since these are unique resource items related so that these fields are hidden. "),(0,r.kt)("p",null,"To create resources use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.permify.co/docs/api-reference/resource/create/"},"createResource")," request on your backend."),(0,r.kt)("p",null,"For testing purposes, let\u2019s create resource from Panel with entering refine ",(0,r.kt)("strong",{parentName:"p"},"params.id")," as ",(0,r.kt)("strong",{parentName:"p"},"resource.id")," and ",(0,r.kt)("strong",{parentName:"p"},"type")," as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"resource name"))," as shown below"),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/create_resource.png",alt:"create_resource"}),(0,r.kt)("h3",{id:"step-4-define-access-control-rules--options-on-permify"},"Step 4: Define access control rules & options on Permify"),(0,r.kt)("p",null,"Now we\u2019ll define some rules and rule sets (options) to check specific conditions on access requests on resources."),(0,r.kt)("p",null,"Let's say we have ",(0,r.kt)("strong",{parentName:"p"},"\u201cadmin\u201d")," and ",(0,r.kt)("strong",{parentName:"p"},"\u201ceditor\u201d")," role and the basic access conditions are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users with admin role can access everywhere"),(0,r.kt)("li",{parentName:"ul"},"Users with an editor role only edit or delete specific content if he/she is the owner of the resource.")),(0,r.kt)("p",null,"Let\u2019s create rules for these comparisons. Open ",(0,r.kt)("a",{parentName:"p",href:"https://panel.permify.co/access-control/rules"},"Rules Section")," and click ",(0,r.kt)("strong",{parentName:"p"},"Create Rule")," button"),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/create_rule.png",alt:"create_rule"}),(0,r.kt)("p",null,"We can create an ",(0,r.kt)("strong",{parentName:"p"},"is-editor")," rule to check the editor role as same as checking admin. "),(0,r.kt)("p",null,"As an overview you can create a role checking rule with a statement "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"\u201crole_name\u201d === user.roles[].guard_name\n")),(0,r.kt)("p",null,"Alternatively you can create rules using or modifying ",(0,r.kt)("strong",{parentName:"p"},"rule templates"),". For our example we need to create a resource owner rule. "),(0,r.kt)("p",null,"Click use a template button and choose ",(0,r.kt)("strong",{parentName:"p"},"is Owner")," rule template for checking whether user is owner of the resource."),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/rule_template.png",alt:"rule_template"}),(0,r.kt)("p",null,"Then let's attach these rules to our policies in order to meet with our access conditions defined above. After editing ",(0,r.kt)("strong",{parentName:"p"},"policies")," your table should look like this"),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/policy_table.png",alt:"policy_table"}),(0,r.kt)("p",null,"Before testing these policies, let's set the owner of the test resource (params.id === 1000) as our editor rule user. "),(0,r.kt)("p",null,"Open up ",(0,r.kt)("a",{parentName:"p",href:"https://panel.permify.co/customers/resources"},"Resources Section")," and change the attributes object of ",(0,r.kt)("strong",{parentName:"p"},"post item 1000")," as follows:"),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/edit_owner_id_attribute.png",alt:"edit_owner_id_attribute"}),(0,r.kt)("p",null,"Now let's run the application again to see results for both roles."),(0,r.kt)("h3",{id:"step-5-creating-rule-sets-options"},"Step 5: Creating rule sets (Options)"),(0,r.kt)("p",null,"There are times when authorization structure conditions can\u2019t be straight forward as we demonstrated. "),(0,r.kt)("p",null,"Sometimes business needs force you to check multiple complex rules or rule sets. "),(0,r.kt)("p",null,"To demonstrade that lets add a custom role to create ",(0,r.kt)("strong",{parentName:"p"},"rule sets (Options)")," on Permify."),(0,r.kt)("p",null,"Lets say"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users with an editor role can edit any post if he/she is in working hours.")),(0,r.kt)("p",null,"Basically if the user is in working hours approximately (8:00 am to 6.00 pm) users with an editor role can access edit of any given resource."),(0,r.kt)("p",null,"Firstly we need to create a rule to check whether user perform access checks in working hours or not. Create this rule like below: "),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/create_rule_working_hours.png",alt:"create_rule_working_hours"}),(0,r.kt)("p",null,"Also we need to check that the user should have an editor role to access content. There is the point where rule sets(options) come up. Lets create an option from option section as follows: "),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/create_option.png",alt:"create_option"}),(0,r.kt)("p",null,"Now add this rule to our edit policy and test the results with running our app. "),(0,r.kt)("p",null,"Select the Editor role and you should see edit button disabled when you're performing that action outside the time interval we have determined (8:00 am to 6.00 pm)"),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this article, we create a couple access check examples using Permify. "),(0,r.kt)("p",null,"We mostly focused on the client side using refine access control provider hence Permify is a full stack solution which you can implement your authorization logic for every layer of your application from backend to frontend. "),(0,r.kt)("p",null,"So, if you are looking for an access control mechanism, you can create any kind of role or attribute based authorization structures easily with Permify. "),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/github/Permify/permify-refine?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"access-control-permify-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}d.isMDXComponent=!0}}]);