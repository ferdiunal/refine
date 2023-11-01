"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"adding-sort-and-filters",title:"5. Adding Sort and Filters",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:!1}},p=void 0,d={unversionedId:"tutorial/adding-crud-pages/antd/adding-sort-and-filters",id:"version-3.xx.xx/tutorial/adding-crud-pages/antd/adding-sort-and-filters",title:"5. Adding Sort and Filters",description:"In the previous Adding List Page section, we have displayed blog posts data in a table. Now we will learn how to add sorting and filtering to the table to user can have more control over the data.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/antd/adding-sort-and-filters.md",sourceDirName:"tutorial/4-adding-crud-pages/antd",slug:"/tutorial/adding-crud-pages/antd/adding-sort-and-filters",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/antd/adding-sort-and-filters",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/antd/adding-sort-and-filters.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1698842754,formattedLastUpdatedAt:"Nov 1, 2023",frontMatter:{id:"adding-sort-and-filters",title:"5. Adding Sort and Filters",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:!1}}},s={},c=[{value:"Adding Sorting",id:"adding-sorting",level:2},{value:"Adding Filters",id:"adding-filters",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=m("Checklist"),f=m("ChecklistItem"),g={toc:c};function k(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the previous ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/antd/index"},"Adding List Page")," section, we have displayed blog posts data in a table. Now we will learn how to add sorting and filtering to the table to user can have more control over the data."),(0,r.kt)("h2",{id:"adding-sorting"},"Adding Sorting"),(0,r.kt)("p",null,"We will use ",(0,r.kt)("inlineCode",{parentName:"p"},"<Table.Column/>"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"sorter")," prop to add sorting to the table."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx")," file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"sorter")," prop to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Table.Column/>")," component of the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," column."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Table.Column\n    dataIndex="id"\n    title="Id"\n    //highlight-next-line\n    sorter\n/>\n')),(0,r.kt)("p",{parentName:"li"},"Now, you can sort the data by ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," on the table.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to add multiple sorting capabilities to the table, you can add ",(0,r.kt)("inlineCode",{parentName:"p"},"sorter")," prop by priority. For example, if you want to sort the data by ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," on the table, you can add ",(0,r.kt)("inlineCode",{parentName:"p"},"sorter")," prop as below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Table.Column\n    dataIndex="id"\n    title="Id"\n    //highlight-next-line\n    sorter\n/>\n<Table.Column\n    dataIndex="id"\n    title="Name"\n    //highlight-next-line\n    sorter={{ multiple: 1 }}\n/>\n')),(0,r.kt)("p",{parentName:"li"},"Now, the data will be sorted by ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," first and then by ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"."))),(0,r.kt)("h2",{id:"adding-filters"},"Adding Filters"),(0,r.kt)("p",null,"We will use ",(0,r.kt)("inlineCode",{parentName:"p"},"<Table.Column/>"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"filterDropdown")," prop and ",(0,r.kt)("inlineCode",{parentName:"p"},"<FilterDropdown/>")," component to add filters to the table."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<FilterDropdown/>")," component is a wrapper component. It serves as a bridge between its child input and ",(0,r.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook. It provides the necessary props to the child input and handles the logic of filtering the data. It also provides a filter and clear button to make the filtering process easier."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/filter-dropdown/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<FilterDropdown/>")," documentation for more information ","\u2192")),(0,r.kt)("p",null,"Also, to get more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"filterDropdown")," prop, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/table#components-table-demo-custom-filter-panel"},(0,r.kt)("strong",{parentName:"a"},"Ant Design"),"'s ",(0,r.kt)("inlineCode",{parentName:"a"},"<Table/>")," documentation"),"."),(0,r.kt)("p",null,"In this tutorial, we will add filters capabilities to the ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," column. To do this, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"<Select/>")," component from ",(0,r.kt)("strong",{parentName:"p"},"Ant Design")," as the child input of ",(0,r.kt)("inlineCode",{parentName:"p"},"<FilterDropdown/>")," component. So, we will also use ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," hook to get the necessary props like ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"<Select/>")," component."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/select"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"Ant Desing")," ",(0,r.kt)("inlineCode",{parentName:"a"},"<Select/>")," documentation for more information ","\u2192")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/field/useSelect/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useSelect")," documentation for more information ","\u2192")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx")," file and import the following components and hooks like below."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { FilterDropdown, Select, useSelect } from "@pankod/refine-antd";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," hook with ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," resource to fill the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Select/>")," component with category options."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useSelect({\n    resource: "categories",\n});\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then, follow the steps below:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"filterDropdown")," prop to the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Table.Column/>")," component of the ",(0,r.kt)("inlineCode",{parentName:"li"},"category")," column."),(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"<FilterDropdown/>")," component as the return value of the prop. Then, pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"props")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"<FilterDropdown/>")," component."),(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Select/>")," component as the child of ",(0,r.kt)("inlineCode",{parentName:"li"},"<FilterDropdown/>")," component. Then, pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"categorySelectProps")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Select/>")," component.",(0,r.kt)("br",null),(0,r.kt)("br",null))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Table.Column\n    dataIndex={["category", "id"]}\n    title="category"\n    render={(value) => {\n        if (isLoading) {\n            return <TextField value="Loading..." />;\n        }\n\n        return (\n            <TextField\n                value={\n                    categoriesData?.data.find((item) => item.id === value)\n                        ?.title\n                }\n            />\n        );\n    }}\n    //highlight-start\n    filterDropdown={(props) => (\n        <FilterDropdown {...props}>\n            <Select\n                style={{ minWidth: 200 }}\n                mode="multiple"\n                placeholder="Select Category"\n                {...categorySelectProps}\n            />\n        </FilterDropdown>\n    )}\n    //highlight-end\n/>\n')))),(0,r.kt)("p",null,"Now, you can search and filter the data by category on the table."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(u,{mdxType:"Checklist"},(0,r.kt)(f,{id:"add-search-and-filters-antd",mdxType:"ChecklistItem"},"I added search and filters to the table.")))}k.isMDXComponent=!0}}]);