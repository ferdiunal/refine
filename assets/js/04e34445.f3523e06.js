"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(b,s(s({ref:t},p),{},{components:n})):r.createElement(b,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"Create E-mail Subscription Panel with Refine and Strapi",description:"We will make a web application that allows you to quickly create subscribers and send emails to your subscribers in a simple way. We\u2019ll use refine to develop the frontend easily and strapi for backend solutions.",slug:"e-mail-subscription-panel-with-refine",authors:"melih",tags:["refine","strapi","react","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/e-mail-subscription-panel-with-refine",source:"@site/blog/2021-10-25-mail-subscription-with-refine.md",title:"Create E-mail Subscription Panel with Refine and Strapi",description:"We will make a web application that allows you to quickly create subscribers and send emails to your subscribers in a simple way. We\u2019ll use refine to develop the frontend easily and strapi for backend solutions.",date:"2021-10-25T00:00:00.000Z",formattedDate:"October 25, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"strapi",permalink:"/blog/tags/strapi"},{label:"react",permalink:"/blog/tags/react"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:7.125,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Create E-mail Subscription Panel with Refine and Strapi",description:"We will make a web application that allows you to quickly create subscribers and send emails to your subscribers in a simple way. We\u2019ll use refine to develop the frontend easily and strapi for backend solutions.",slug:"e-mail-subscription-panel-with-refine",authors:"melih",tags:["refine","strapi","react","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase"},nextItem:{title:"Migrating a React-Admin Application to refine",permalink:"/blog/migrating-a-react-admin-application-to-refine"},relatedPosts:[{title:"A Guide on Material UI AutoComplete in React",description:"We'll discover the Material UI AutoComplete component with examples",permalink:"/blog/material-ui-autocomplete-component",formattedDate:"October 19, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:14.265,date:"2022-10-19T00:00:00.000Z"},{title:"How to use React Fragments?",description:"We'll cover what React Fragments are, differences between React Fragments and Div elements.",permalink:"/blog/how-react-fragments-is-works",formattedDate:"October 2, 2022",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:5.53,date:"2022-10-02T00:00:00.000Z"},{title:"Web3 with Refine",description:"Sign-in Ethereum with Web3 and Refine",permalink:"/blog/web3-with-refine",formattedDate:"December 13, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:1.53,date:"2021-12-13T00:00:00.000Z"}],authorPosts:[{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.255,date:"2022-02-22T00:00:00.000Z"},{title:"Create Full Featured Admin Panel with React and Ant Design",description:"We will see how easy it is to develop a functional Admin panel with the perfect harmony of Refine and Ant Design.",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.605,date:"2022-02-21T00:00:00.000Z"},{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.67,date:"2022-03-01T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},u=[{value:"Creating API with <code>Strapi</code>",id:"creating-api-with-strapi",level:2},{value:"Creating panel with <code>refine</code>",id:"creating-panel-with-refine",level:2},{value:"Subscriber List",id:"subscriber-list",level:2},{value:"Message List",id:"message-list",level:2},{value:"Create Subscriber",id:"create-subscriber",level:2},{value:"Create Message",id:"create-message",level:2},{value:"Strapi E-mail Plugin",id:"strapi-e-mail-plugin",level:2},{value:"Configure your provider",id:"configure-your-provider",level:3}],m={toc:u};function d(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,r.kt)("strong",{parentName:"p"},"refine"),". Although we plan to update it with the latest version of ",(0,r.kt)("strong",{parentName:"p"},"refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,r.kt)("p",{parentName:"admonition"},"You should know that ",(0,r.kt)("strong",{parentName:"p"},"refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),"."),(0,r.kt)("p",{parentName:"admonition"},"Just be aware that the source code example in this post have been updated to version 4.x.x.")),(0,r.kt)("p",null,"We will make a web application that allows you to quickly create subscribers and send emails to your subscribers in a simple way. We\u2019ll use refine to develop the frontend easily and strapi for backend solutions."),(0,r.kt)("p",null,"Let's start by creating our strapi and refine projects."),(0,r.kt)("h2",{id:"creating-api-with-strapi"},"Creating API with ",(0,r.kt)("inlineCode",{parentName:"h2"},"Strapi")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-strapi-app strapi-email-subscription-api --quickstart\n")),(0,r.kt)("p",null,"After the project is loaded, the admin panel will open automatically open in the browser. We need to create an admin user in order to log in to the strapi."),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-25-mail-subscription-with-refine/strapi.png",alt:"strapi"}),(0,r.kt)("p",null,"With the information we will create here, we can now enter the strapi and start shaping our backend."),(0,r.kt)("p",null,"After logging into the Strapi interface, we have two collection models that we need to create for our e-mail subscription project."),(0,r.kt)("p",null,"We will create these collections from the Collection-Types Builder part of the strapi."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Subscribers"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," text field"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"email")," Email"))),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-25-mail-subscription-with-refine/subscribers.png",alt:"subscribers"}),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Messages"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"subject")," text field"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"text")," text field"))),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-25-mail-subscription-with-refine/messages.png",alt:"messages"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"With these collections and features we have created, we can now create subscribers, delete them and make changes to them."),(0,r.kt)("h2",{id:"creating-panel-with-refine"},"Creating panel with ",(0,r.kt)("inlineCode",{parentName:"h2"},"refine")),(0,r.kt)("p",null,"Now let's refine the subscription panel. With ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},"superplate"),", we can quickly create a refine project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm create refine-app@latest email-subscription-panel -- -b v3\n")),(0,r.kt)("p",null,"Select the following options to complete the CLI wizard:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? Select your project type:\n> refine-react\n\n? What will be the name of your app:\n> email-subscription-panel\n\n? Package manager:\n> Npm\n\n? Do you want to use a UI Framework?:\n\u276f Ant Design\n\n? Do you want a customized theme?:\n> Default theme\n\n? Router Provider:\n\u276f React Router v6\n\n? Data Provider: \n> Strapi\n\n? Do you want a customized layout?:\n> Yes\n\n? i18n - Internationalization: \n> No\n")),(0,r.kt)("p",null,"After the upload is finished, let's go into our project and see how it looks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd email-subscription-panel\nnpm run dev\n")),(0,r.kt)("p",null,"This is a example Refine project:"),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-25-mail-subscription-with-refine/refine_welcome.png",alt:"refine_welcome"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"Let's list our messages and subscribers with refine. Here are the changes we need to make:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change Strapi API URL from refine"),(0,r.kt)("li",{parentName:"ul"},"Adding resources according to the collection name we created in Strapi")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine, Resource } from "@pankod/refine";\n\nimport "@pankod/refine/dist/styles.min.css";\nimport { DataProvider } from "@refinedev/strapi";\nimport strapiAuthProvider from "authProvider";\nimport { Header, Layout, OffLayoutArea } from "components";\n\n\nfunction App() {\n - const API_URL = "your-strapi-api-url";\n + const API_URL = "http://localhost:1337";\n\n  const { authProvider, axiosInstance } = strapiAuthProvider(API_URL);\n  const dataProvider = DataProvider(API_URL, axiosInstance);\n  return (\n    <Refine\n      dataProvider={dataProvider}\n      authProvider={authProvider}\n      Header={Header}\n      Layout={Layout}\n      OffLayoutArea={OffLayoutArea}\n      routerProvider={routerProvider}\n      resources={[{\n        name: "subscribers",\n      }, {\n        name: "messages",\n      }]} \n    />\n  );\n}\n\nexport default App;\n\n')),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-25-mail-subscription-with-refine/signin.png",alt:"signin"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"After adding the resources, we need to define a user in the strapi in order to be able to login to the refine. "),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-25-mail-subscription-with-refine/auth.png",alt:"auth"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"Let's login with this user we created"),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-25-mail-subscription-with-refine/login.gif",alt:"login"}),(0,r.kt)("p",null,"We can now list subscribers and messages and make changes to our list. Before doing this, let's create test users and messages on the strapi side. "),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-25-mail-subscription-with-refine/dummy_data.png",alt:"dummy_data"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"Create SubscriberList.tsx and MessagesList.tsx file under the pages folder. Then, let's create our component as follows with the components and hooks that come with refine."),(0,r.kt)("h2",{id:"subscriber-list"},"Subscriber List"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/pages/subscriber/SubscriberList.tsx"',title:'"/src/pages/subscriber/SubscriberList.tsx"'},'import React from "react";\nimport {\n  useTable,\n  List,\n  Table,\n  DateField,\n  DeleteButton,\n  IResourceComponentsProps,\n} from "@pankod/refine";\n\nimport { ISubscriber } from "interfaces";\n\nexport const SubscriberList: React.FC<IResourceComponentsProps> = () => {\n  const { tableProps } = useTable<ISubscriber>();\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="Id" />\n        <Table.Column dataIndex="name" title="Name" />\n        <Table.Column dataIndex="email" title="E-mail" />\n        <Table.Column\n          dataIndex="created_at"\n          title="createdAt"\n          render={(value) => <DateField format="LLL" value={value} />}\n        />\n        <Table.Column<ISubscriber>\n          title="Unsubscribe"\n          dataIndex="actions"\n          render={(_, record): React.ReactNode => {\n            return (\n              <DeleteButton size="small" recordItemId={record.id} hideText />\n            );\n          }}\n        />\n      </Table>\n    </List>\n  );\n};\n\n')),(0,r.kt)("h2",{id:"message-list"},"Message List"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/pages/mail/MessageList.tsx"',title:'"/src/pages/mail/MessageList.tsx"'},'import React from "react";\nimport {\n  useTable,\n  List,\n  Table,\n  DateField,\n  IResourceComponentsProps,\n} from "@pankod/refine";\n\nimport { IMail } from "interfaces";\n\nexport const MessageList: React.FC<IResourceComponentsProps> = () => {\n  const { tableProps } = useTable<IMail>();\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="Id" />\n        <Table.Column dataIndex="subject" title="Subject" />\n        <Table.Column dataIndex="text" title="Body" />\n        <Table.Column \n          dataIndex="created_at"\n          title="createdAt"\n          render={(value) => <DateField format="LLL" value={value} />}\n        />\n      </Table>\n    </List>\n  );\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/interfaces/intex.d.ts"',title:'"/src/interfaces/intex.d.ts"'},"export interface ISubscriber {\n  id: any;\n  name: string;\n  email: string;\n  created_at: string;\n}\n\nexport interface IMail {\n  subject: string;\n  text: string;\n  to: string;\n  create_at: string;\n}\n")),(0,r.kt)("p",null,"In this component:"),(0,r.kt)("p",null,"We used refine's ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/examples/list/useSimpleList"},"list")," and ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/useTable/"},"table")," to show our subscribers and messages."),(0,r.kt)("p",null,"Now let's see how our subscriber panel looks like:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Subscriber:")),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-25-mail-subscription-with-refine/refine_subs.png",alt:"refine_subs"}),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Messages:")),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-25-mail-subscription-with-refine/refine_messages.png",alt:"refine_messages"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"As you can see, we were able to list our subscribers and e-mails very simply with refine. Now let's examine how we can create subscribers and messages from our interface."),(0,r.kt)("h2",{id:"create-subscriber"},"Create Subscriber"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/pages/subscriber/create.tsx"',title:'"/src/pages/subscriber/create.tsx"'},'import {\n  Create,\n  Form,\n  Input,\n  useForm,\n  IResourceComponentsProps,\n} from "@pankod/refine";\n\nimport { ICreateSubscriber } from "interfaces";\n\nexport const CreateSubscriber: React.FC<IResourceComponentsProps> = () => {\n  const { formProps, saveButtonProps } = useForm<ICreateSubscriber>();\n\n  return (\n    <Create saveButtonProps={saveButtonProps}>\n      <Form {...formProps} layout="vertical">\n        <Form.Item label="Name" name="name">\n          <Input />\n        </Form.Item>\n        <Form.Item\n          label="E-mail"\n          name="email"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <Input />\n        </Form.Item>\n      </Form>\n    </Create>\n  );\n};\n')),(0,r.kt)("h2",{id:"create-message"},"Create Message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/pages/mail/create.tsx"',title:'"/src/pages/mail/create.tsx"'},'import React from "react";\nimport {\n  Create,\n  Form,\n  Input,\n  useForm,\n  IResourceComponentsProps,\n} from "@pankod/refine";\n\nimport MDEditor from "@uiw/react-md-editor";\nimport { IMail } from "interfaces";\n\nexport const MailCreate: React.FC<IResourceComponentsProps> = () => {\n  const { formProps, saveButtonProps } = useForm<IMail>();\n\n  return (\n    <Create saveButtonProps={saveButtonProps}>\n      {console.log("create")}\n      <Form {...formProps} layout="vertical">\n        <Form.Item\n          label="Subject"\n          name="subject"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <Input />\n        </Form.Item>\n        <Form.Item\n          label="Body"\n          name="text"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <MDEditor data-color-mode="light" />\n        </Form.Item>\n        <Form.Item\n          label="To"\n          name="to"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <Input />\n        </Form.Item>\n      </Form>\n    </Create>\n  );\n};\n')),(0,r.kt)("p",null,"Using refine's ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/antd/hooks/form/useForm/"},"form")," and ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/ui-frameworks/antd/components/basic-views/create/"},"create")," components, we can now create subscribers and messages with refine."),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-25-mail-subscription-with-refine/create.gif",alt:"create"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"We're done with our panel. We can now list, create and delete subscribers. Finally, the step of sending real mails using our panel and strapi is left. Let's see how we do this."),(0,r.kt)("h2",{id:"strapi-e-mail-plugin"},"Strapi E-mail Plugin"),(0,r.kt)("p",null,"In order to send mail via Strapi, we need to install the ",(0,r.kt)("a",{parentName:"p",href:"https://strapi.io/documentation/developer-docs/latest/development/plugins/email.html#programmatic-usage"},"strapi-email")," plugin in our api project that we created above."),(0,r.kt)("p",null,"Let's open our API project that we created and download the email plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd strapi-email-subscription-api\nnpm install strapi-provider-email-sendgrid --save\n")),(0,r.kt)("p",null,"After installing your plugin you will need to add some settings in config/plugins.js. If this file doesn't exists, you'll need to create it. "),(0,r.kt)("h3",{id:"configure-your-provider"},"Configure your provider"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Path \u2014 ./config/plugins.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"module.exports = ({ env }) => ({\n    email: {\n      provider: 'sendgrid',\n      providerOptions: {\n        apiKey: env('SENDGRID_API_KEY'),\n      },\n      settings: {\n        defaultFrom: 'your-email-adress',\n        defaultReplyTo: 'your-email-adress',\n        testAddress: 'your-email-adress',\n      },\n    },\n  });\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Strapi sends emails via sendgrid. That's why you need to create a ",(0,r.kt)("a",{parentName:"p",href:"https://sendgrid.com/"},"SendGrid")," account and get an api-key.")),(0,r.kt)("p",null,"Now, let's send the text and subject in the collection of messages we created over the strapi as parameters to the send() function of the email plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="api/messages/controllers/messages.js"',title:'"api/messages/controllers/messages.js"'},'const { parseMultipartData, sanitizeEntity } = require("strapi-utils");\n\nmodule.exports = {\n  async create(ctx) {\n    let entity;\n    if (ctx.is("multipart")) {\n      const { data, files } = parseMultipartData(ctx);\n      entity = await strapi.services.messages.create(data, { files });\n    } else {\n      entity = await strapi.services.messages.create(ctx.request.body);\n    }\n\n    entity = sanitizeEntity(entity, { model: strapi.models.messages });\n\n    const { subject, text } = entity;\n\n    const worker = (await strapi.services.subscribers.find()).map(\n      (subscriber) => {\n        let to = subscriber.email;\n\n        return strapi.plugins["email"].services.email.send({\n          subject,\n          text,\n          to,\n        });\n      }\n    );\n\n    await Promise.all(worker);\n\n    return entity;\n  },\n};\n')),(0,r.kt)("p",null,"Our project is finished. Let's try it now."),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-25-mail-subscription-with-refine/overview.png",alt:"overview"}),(0,r.kt)("br",null),"Let's send the same e-mail to our subscribers shown in the picture at once.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-25-mail-subscription-with-refine/send.gif",alt:"send"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"Sending mail was successful. As you can see, we were able to send the same email to all subscribers by sending a single email."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/blog-mail-subscription"},"Here is repo")))}d.isMDXComponent=!0}}]);