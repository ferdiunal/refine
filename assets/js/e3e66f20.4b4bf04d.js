"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12135],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>u});var n=t(67294);function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){i(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,n,i=function(e,o){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(i[t]=e[t]);return i}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},p=function(e){var o=l(e.components);return n.createElement(c.Provider,{value:o},e.children)},m={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},d=n.forwardRef((function(e,o){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=i,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return t?n.createElement(g,a(a({ref:o},p),{},{components:t})):n.createElement(g,a({ref:o},p))}));function u(e,o){var t=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=d;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18920:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>m});t(67294);var n=t(3905);function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):function(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})),e}function a(e,o){if(null==e)return{};var t,n,i=function(e,o){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(i[t]=e[t]);return i}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={title:"Introduction to Docker Compose",description:"We'll go over the basics of Docker Compose in this article, including what it is, how it works, and how to use it.",slug:"docker-compose",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-31-docker-compose/social.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/blog/docker-compose",source:"@site/blog/2023-07-31-docker-compose.md",title:"Introduction to Docker Compose",description:"We'll go over the basics of Docker Compose in this article, including what it is, how it works, and how to use it.",date:"2023-07-31T00:00:00.000Z",formattedDate:"July 31, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:11.015,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Introduction to Docker Compose",description:"We'll go over the basics of Docker Compose in this article, including what it is, how it works, and how to use it.",slug:"docker-compose",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-31-docker-compose/social.png",hide_table_of_contents:!1},prevItem:{title:"Announcing the refine Open Source Hackathon 2 Winners",permalink:"/blog/refine-hackathon-2-winners"},nextItem:{title:"Building a React Admin Panel with PrimeReact and refine",permalink:"/blog/building-react-admin-panel-with-primereact-and-refine"},relatedPosts:[{title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",permalink:"/blog/lighthouse-google-chrome",formattedDate:"August 31, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:14.625,date:"2022-08-31T00:00:00.000Z"},{title:"How to Install and Use NVM?",description:"Guide to using NVM with Mac and Windows",permalink:"/blog/install-nvm-mac-and-windows",formattedDate:"November 9, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:7.435,date:"2022-11-09T00:00:00.000Z"},{title:"Mojo - A New Programming Language for AI",description:"We'll go over the fundamentals of Mojo, a new programming language that aims to make AI programming more accessible.",permalink:"/blog/mojo-programming-language",formattedDate:"October 16, 2023",authors:[{name:"Haider Ali",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"haider_ali"}],readingTime:10.435,date:"2023-10-16T00:00:00.000Z"}],authorPosts:[{title:"A Detailed Guide on Docker run Command",description:"We'll discuss the Docker run command in detail, including its syntax, options, and examples.",permalink:"/blog/docker-run-command",formattedDate:"June 24, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.875,date:"2023-06-24T00:00:00.000Z"},{title:"git stash - Save the Uncommitted Changes Locally",description:"We will take a look the examples of using git stash command",permalink:"/blog/git-stash",formattedDate:"December 2, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.675,date:"2022-12-02T00:00:00.000Z"},{title:"Kubectl Restart Pod - Restarting Pods in Kubernetes",description:"We'll discuss the importance of restarting pods in Kubernetes, the different methods to do so, and the best practices to follow.",permalink:"/blog/kubectl-restart-pod",formattedDate:"October 22, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.55,date:"2023-10-22T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},m=[{value:"Brief explanation of Docker Compose and its purpose",id:"brief-explanation-of-docker-compose-and-its-purpose",level:2},{value:"Overview of the benefits and use cases of Docker Compose",id:"overview-of-the-benefits-and-use-cases-of-docker-compose",level:2},{value:"Benefits of Docker Compose",id:"benefits-of-docker-compose",level:3},{value:"Use Cases of Docker Compose",id:"use-cases-of-docker-compose",level:3},{value:"II. Installation and Setup",id:"ii-installation-and-setup",level:2},{value:"Instructions for installing Docker Compose on different operating systems",id:"instructions-for-installing-docker-compose-on-different-operating-systems",level:2},{value:"Verifying the installation",id:"verifying-the-installation",level:2},{value:"Configuring Docker Compose for your environment",id:"configuring-docker-compose-for-your-environment",level:2},{value:"III. Writing a Docker Compose File",id:"iii-writing-a-docker-compose-file",level:2},{value:"Introduction to the Docker Compose YAML syntax",id:"introduction-to-the-docker-compose-yaml-syntax",level:2},{value:"Overview of the key sections in a Docker Compose file",id:"overview-of-the-key-sections-in-a-docker-compose-file",level:2},{value:"Step-by-step guide on writing a basic Docker Compose file",id:"step-by-step-guide-on-writing-a-basic-docker-compose-file",level:2},{value:"Defining services",id:"defining-services",level:3},{value:"Specifying container images and versions",id:"specifying-container-images-and-versions",level:3},{value:"Configuring or mapping volume settings",id:"configuring-or-mapping-volume-settings",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"Exposing ports",id:"exposing-ports",level:3},{value:"IV. Managing Docker Compose Projects",id:"iv-managing-docker-compose-projects",level:2},{value:"Creating a Docker Compose project directory structure",id:"creating-a-docker-compose-project-directory-structure",level:2},{value:"B. Running Docker Compose commands",id:"b-running-docker-compose-commands",level:2},{value:"1. docker-compose up",id:"1-docker-compose-up",level:3},{value:"2. docker-compose down",id:"2-docker-compose-down",level:3},{value:"3. docker-compose build",id:"3-docker-compose-build",level:3},{value:"4. docker-compose start and docker-compose stop",id:"4-docker-compose-start-and-docker-compose-stop",level:3},{value:"Managing multiple Docker Compose environments (e.g., development, production)",id:"managing-multiple-docker-compose-environments-eg-development-production",level:2},{value:"Overriding Docker Compose configurations using environment-specific files",id:"overriding-docker-compose-configurations-using-environment-specific-files",level:2},{value:"V. Conclusion",id:"v-conclusion",level:2},{value:"Summary of key points covered in the guide",id:"summary-of-key-points-covered-in-the-guide",level:2},{value:"Encouragement for further exploration and experimentation with Docker Compose",id:"encouragement-for-further-exploration-and-experimentation-with-docker-compose",level:2}],d=(u="BannerRandom",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var u;const g={toc:m};function h(e){var{components:o}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",r(function(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(o){i(e,o,t[o])}))}return e}({},g,t),{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"brief-explanation-of-docker-compose-and-its-purpose"},"Brief explanation of Docker Compose and its purpose"),(0,n.kt)("p",null,"For multi-container Docker applications, Docker Compose is a tool that is designed for application definition and execution. By enabling you to execute several container applications simultaneously from a single YAML file, Docker Compose finds a solution to the problem. Docker Compose is the best option for environments used for development, testing, and staging, as well as for quick integration processes. By utilizing Docker Compose, which enables you to store and version control your application stack in a file, you can also just make it possible for others to contribute to your project. Compose additionally allows the isolation\xa0of your application from the host environment and consistency across several instances."),(0,n.kt)("h2",{id:"overview-of-the-benefits-and-use-cases-of-docker-compose"},"Overview of the benefits and use cases of Docker Compose"),(0,n.kt)("h3",{id:"benefits-of-docker-compose"},"Benefits of Docker Compose"),(0,n.kt)("p",null,"Provide Reproducible Environments"),(0,n.kt)("p",null,"It also allows you to easily create local environments that are identical to your production environment. Using these, you can test your applications and reduce instances of errors and unexpected behavior in production."),(0,n.kt)("p",null,"Ensure the Security of internal Container Networking"),(0,n.kt)("p",null,"For internal communication, all the containers defined in the compose file are placed on the same internal network. This protects them from unauthorized access from the outside. It also simplifies the management of the multi-container application network."),(0,n.kt)("p",null,"Help in Scalability and High Availability"),(0,n.kt)("p",null,"You can scale specific services inside your application using Docker Compose by defining the necessary number of container instances. This increases the capacity of your application and ensures high availability by dividing the workload among several instances."),(0,n.kt)("p",null,"Recreate containers only when they have changed"),(0,n.kt)("p",null,"Compose caches the configuration used while building a container. Furthermore, when we resume a service that has not changed, Compose reuses the existing containers. Reusing containers in this context simply means that we can quickly change our environments."),(0,n.kt)("h3",{id:"use-cases-of-docker-compose"},"Use Cases of Docker Compose"),(0,n.kt)("p",null,"Development environments"),(0,n.kt)("p",null,"Running applications and their dependencies in isolated environments is essential while developing software. For instance, you could be dependent on the application of another team, and that team may have its own set of complications, such as having to set up the database in a specific way. You can\xa0execute the entire stack or delete it using Compose with only one command."),(0,n.kt)("p",null,"Automated testing environments"),(0,n.kt)("p",null,"Tools that make it simple to create and remove environments are often needed for automated workflows such as\xa0CI/CD pipelines. Compose offers an efficient approach for creating and destroying such environments for your test suite through the use of a configuration file."),(0,n.kt)("p",null,"Single host deployments"),(0,n.kt)("p",null,"Even though Compose was primarily created for workflows in development and testing, it is sometimes utilized in production to run containers on a single host. Although Compose is becoming better, it still functions more as a wrapper over the Docker API than an orchestrator like Swarm or Kubernetes."),(0,n.kt)("h2",{id:"ii-installation-and-setup"},"II. Installation and Setup"),(0,n.kt)("h2",{id:"instructions-for-installing-docker-compose-on-different-operating-systems"},"Instructions for installing Docker Compose on different operating systems"),(0,n.kt)("p",null,"Installing Docker Desktop is the quickest and most convenient method to use Docker Compose. Along with Docker Engine and Docker CLI, which are necessary for Compose to function, Docker Desktop also contains Docker Compose. You can get Docker Desktop(",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Windows, Linux, MacOS")),") from the official Docker website(",(0,n.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"https://www.docker.com/products/docker-desktop/"),")."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-31-docker-compose/image1.png",alt:"docker volume"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"verifying-the-installation"},"Verifying the installation"),(0,n.kt)("p",null,"In order to verify the installation of Docker Compose, go to the terminal or command prompt of your OS and then run the command ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose --version"),". If the output of the command shows the version of Docker compose, then your installation is successful."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-31-docker-compose/image2.png",alt:"docker volume"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"configuring-docker-compose-for-your-environment"},"Configuring Docker Compose for your environment"),(0,n.kt)("p",null,"You have to create a Compose file that describes the services of your application in order to configure Docker Compose in your environment. A YAML file contains information on each service's image, command, ports, volumes, environment variables, dependencies, and other settings."),(0,n.kt)("p",null,"Let's suppose we have created a docker compose file(with yml extension) in our project directory, specify the components information, and this can be viewed and validated by navigating to the project directory from the terminal and then running ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose \u2013config")," Command."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-31-docker-compose/image3.png",alt:"docker volume"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"iii-writing-a-docker-compose-file"},"III. Writing a Docker Compose File"),(0,n.kt)("h2",{id:"introduction-to-the-docker-compose-yaml-syntax"},"Introduction to the Docker Compose YAML syntax"),(0,n.kt)("p",null,"A variety of programming scenarios, including internet communications, object persistence, and, in the case of compose, configuration files, can employ the data serialization language YAML. The YAML syntax can be used to construct key-value pairs and hierarchical structures. Indentation is used to show how different parts and components are related to one another and how they work together. Inline comments are also supported in YAML because JSON does not allow inline comments, so YAML is significantly more suitable for describing Compose files."),(0,n.kt)("h2",{id:"overview-of-the-key-sections-in-a-docker-compose-file"},"Overview of the key sections in a Docker Compose file"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Version")),(0,n.kt)("p",null,"specifies which version of the Docker Compose file syntax should be used. A string is required as the version's value. The string can contain both a major and minor version number, such as 3.9, or only a major version number, like 3, for example."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Services")),(0,n.kt)("p",null,"The containers made for the services in your application are configured in the services mapping. Under the services key, a layered mapping is set for each service. Each service is capable of having whatever name you like. The services with the names web, db, and redis are shown in our example below:"),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-31-docker-compose/image4.png",alt:"docker volume"})),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Network")),(0,n.kt)("p",null,"You can specify the networks that link the services and enable communication between them; otherwise, Compose will automatically construct a new network using the application's default bridge driver. The network's name is derived from the name of the directory in which the Compose file is located."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Volume")),(0,n.kt)("p",null,"The volume key mapping is utilized like that of docker volume create. Volumes can be referred to inside the services section in their configuration keys. Additionally, external volumes that were created by using the docker volume create command, or another compose file can also be declared."),(0,n.kt)("hr",null),(0,n.kt)(d,{mdxType:"BannerRandom"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"step-by-step-guide-on-writing-a-basic-docker-compose-file"},"Step-by-step guide on writing a basic Docker Compose file"),(0,n.kt)("h3",{id:"defining-services"},"Defining services"),(0,n.kt)("p",null,"Under the services section, begin by listing the services or containers that make up your application. Similar to how you configure containers using docker run command arguments, you define the configuration options for service containers inside of the service configuration mapping."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center",width:"300px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-31-docker-compose/image5.png",alt:"docker volume"})),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"specifying-container-images-and-versions"},"Specifying container images and versions"),(0,n.kt)("p",null,"Choose the image for each service from a container registry, such as Docker Hub. Additionally, you can use the '",(0,n.kt)("strong",{parentName:"p"},"latest"),"' tag or specify a specific image version."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center",width:"300px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-31-docker-compose/image6.png",alt:"docker volume"})),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"configuring-or-mapping-volume-settings"},"Configuring or mapping volume settings"),(0,n.kt)("p",null,"You need to specify the volume mapping between the host system and the container in order to configure the bind mount volume setting. It follows ",(0,n.kt)("inlineCode",{parentName:"p"},"\\[host-path\\]:\\[container-path\\]")," format. The '",(0,n.kt)("strong",{parentName:"p"},"./html"),"' directory on the host system is mapped in the example below to the '",(0,n.kt)("strong",{parentName:"p"},"/usr/share/nginx/html"),"' directory in the web container. You can further configure or customize other volume settings as well, such as naming volumes or specifying read-only options for volumes, etc."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center",width:"300px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-31-docker-compose/image7.png",alt:"docker volume"})),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,n.kt)("p",null,"Your containers can be dynamically configured without affecting the container images themselves. In the Example Below, The '",(0,n.kt)("strong",{parentName:"p"},"environment'")," variable for the database service of MySQL is defined. '",(0,n.kt)("strong",{parentName:"p"},"MYSQL_ROOT_PASSWORD"),"' is the name of the environment variable and 'secret' is the value that can dynamically change. This approach allows you to add several environment variables, with each variable appearing on a separate line and beginning with a hyphen (-)."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center",width:"300px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-31-docker-compose/image8.png",alt:"docker volume"})),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"exposing-ports"},"Exposing ports"),(0,n.kt)("p",null,"You need to\xa0define the ports to expose on the host system and map them to the internal ports of the container using the '",(0,n.kt)("strong",{parentName:"p"},"ports"),"' key. In the example below, port '",(0,n.kt)("strong",{parentName:"p"},"80"),"' of the web container has been mapped to host system port '",(0,n.kt)("strong",{parentName:"p"},"8080"),"'."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center",width:"300px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-31-docker-compose/image9.png",alt:"docker volume"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"iv-managing-docker-compose-projects"},"IV. Managing Docker Compose Projects"),(0,n.kt)("h2",{id:"creating-a-docker-compose-project-directory-structure"},"Creating a Docker Compose project directory structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The services (or containers) you want to execute as part of your application must be specified in a file called '",(0,n.kt)("strong",{parentName:"p"},"docker-compose.yml"),"' that must be created in your project root directory.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Depending on the requirements and demands of your application, you can also create a '",(0,n.kt)("strong",{parentName:"p"},"services/"),"' directory that contains all services and their related files like the Dockerfile, requirements.txt, and app.py.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Any persistent data\xa0directories that could be mounted as volumes in your Docker Compose services are kept in the '",(0,n.kt)("strong",{parentName:"p"},"volume/"),"' directory."))),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-31-docker-compose/image10.png",alt:"docker volume"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"b-running-docker-compose-commands"},"B. Running Docker Compose commands"),(0,n.kt)("h3",{id:"1-docker-compose-up"},"1. docker-compose up"),(0,n.kt)("p",null,"For starting your application, you need to build and run all containers specified in the configuration file, and Docker compose will facilitate you for that purpose by just running one single command. Using the command line tool, you must go to the project root directory where the configuration file is placed and run the '",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose up"),"' command. Please see the example below:"),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-31-docker-compose/image11.png",alt:"docker volume"})),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"2-docker-compose-down"},"2. docker-compose down"),(0,n.kt)("p",null,'Now, if you want to stop your application and remove all containers or services that were created and launched using the configuration file in the previous command, Docker compose will also make this task easier by allowing you to accomplish it with just one command (i.e., "',(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose down"),'") at the same location of the configuration file.\nSee the illustration below:'),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-31-docker-compose/image12.png",alt:"docker volume"})),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"3-docker-compose-build"},"3. docker-compose build"),(0,n.kt)("p",null,"If you want to rebuild the images for each service defined in the YAML configuration file or If the Dockerfiles or build contexts have changed, then you need to run the command '",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose build"),"' at the same location where your configuration file has been placed."),(0,n.kt)("h3",{id:"4-docker-compose-start-and-docker-compose-stop"},"4. docker-compose start and docker-compose stop"),(0,n.kt)("p",null,"If you want to start or stop your application, but you want to avoid removing the containers, Docker compose will help you achieve this purpose by using '",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose start"),"' or '",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose stop"),"' commands."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-31-docker-compose/image13.png",alt:"docker volume"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"managing-multiple-docker-compose-environments-eg-development-production"},"Managing multiple Docker Compose environments (e.g., development, production)"),(0,n.kt)("p",null,"It is possible to control how your application behaves in different environments by using environment variables with docker-compose. For instance, you can set up your development and production environments with various network settings, ports, or database credentials. To achieve this, you need to provide environment variables in the docker-compose.yml file by using the 'environment' or env_file keys for each service. Additionally, you can make separate configuration files for each environment, such as \"",(0,n.kt)("strong",{parentName:"p"},"docker-compose.production.yml"),'," "',(0,n.kt)("strong",{parentName:"p"},"docker-compose.staging.yml"),'" and "',(0,n.kt)("strong",{parentName:"p"},"docker-compose.development.yml"),"\". Once the environment-specific files are created, then you need to use the '",(0,n.kt)("strong",{parentName:"p"},"-f"),"' or '",(0,n.kt)("strong",{parentName:"p"},"\u2014file"),"' option with '",(0,n.kt)("strong",{parentName:"p"},"docker-compose"),"' to use them for each environment. In the case of a staging environment, navigate to the staging configuration file location and then run the command 'docker-compose -f docker-compose.staging.yml up'"),(0,n.kt)("h2",{id:"overriding-docker-compose-configurations-using-environment-specific-files"},"Overriding Docker Compose configurations using environment-specific files"),(0,n.kt)("p",null,"Once you have created multiple compose files for different configurations of different environments, docker-compose also offer you to override one configuration with another. Override files can hold different values for any configurations specified in the main '",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"' file. Let's suppose your application is currently running by using base configurations in the 'docker-compose.yml' file, and as a developer, you want to override development configurations for the development environment; for that purpose, you need to create another file(",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.development.overide.xml"),") in the same directory that contains development specific values and run docker-compose command that explicitly specifies the file(",(0,n.kt)("strong",{parentName:"p"},"use -f option"),") that needs to override on the base file. According to this example, the command that shows the applied configuration will be '",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose -f docker-compose.yml -f docker-compose.development.override.yml config"),"'"),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-31-docker-compose/image14.png",alt:"docker volume"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"v-conclusion"},"V. Conclusion"),(0,n.kt)("h2",{id:"summary-of-key-points-covered-in-the-guide"},"Summary of key points covered in the guide"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The administration and orchestration of multi-container applications are made easier by Docker Compose.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Using a YAML file, Docker Compose enables you to specify and set up your application services.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In accordance with the settings described in the YAML file, it automates the creation of networks, volumes, and containers.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For your application, Docker Compose offers advantages in reproducible environments, internal networking security, scalability, high availability, and caching configuration.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Simple one-line Commands in Docker Compose, including up, down, build, start, and stop, assist in managing and controlling your containers.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Using different YAML files, you can establish and switch to different Docker Compose environments (such as development, staging, testing, and production)."))),(0,n.kt)("h2",{id:"encouragement-for-further-exploration-and-experimentation-with-docker-compose"},"Encouragement for further exploration and experimentation with Docker Compose"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Research and practice more complex capabilities of Docker Compose, such as the use of external networks, health checks, or service dependencies.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Learn more about other configuration choices and best practices by digging further into the resources and documentation for Docker Compose.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Join online forums and groups dedicated to Docker and Docker Compose to share your knowledge and get insight from others.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stay up-to-date with the most recent Docker and Docker Compose releases and upgrades can help you continually advance your knowledge and abilities."))))}h.isMDXComponent=!0}}]);