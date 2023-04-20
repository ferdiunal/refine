"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),u=r,g=h["".concat(d,".").concat(u)]||h[u]||c[u]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"adding-sort-and-filters",title:"6. Adding Sort and Filters",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:"tutorial/understanding-authprovider/index"}},o=void 0,l={unversionedId:"tutorial/adding-crud-pages/headless/adding-sort-and-filters",id:"tutorial/adding-crud-pages/headless/adding-sort-and-filters",title:"6. Adding Sort and Filters",description:"Sort and Filters",source:"@site/docs/tutorial/4-adding-crud-pages/headless/adding-sort-and-filters.md",sourceDirName:"tutorial/4-adding-crud-pages/headless",slug:"/tutorial/adding-crud-pages/headless/adding-sort-and-filters",permalink:"/docs/tutorial/adding-crud-pages/headless/adding-sort-and-filters",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/headless/adding-sort-and-filters.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1681996526,formattedLastUpdatedAt:"Apr 20, 2023",frontMatter:{id:"adding-sort-and-filters",title:"6. Adding Sort and Filters",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:"tutorial/understanding-authprovider/index"}}},d={},s=[{value:"Sort and Filters",id:"sort-and-filters",level:2},{value:"Adding Sorting",id:"adding-sorting",level:2},{value:"Adding Filters",id:"adding-filters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=p("Checklist"),h=p("ChecklistItem"),u={toc:s};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sort-and-filters"},"Sort and Filters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table")," package is based on the ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/table/v8"},(0,r.kt)("strong",{parentName:"a"},"TanStack Table"))," package, meaning that we can add sorting and filtering features to our table as suggested in the ",(0,r.kt)("strong",{parentName:"p"},"TanStack")," documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tanstack Table")," keeps the ",(0,r.kt)("inlineCode",{parentName:"p"},"sorting")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," states in the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook. When these states are changed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook will automatically fetch the data and update the table with the new data."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Under the hood, ",(0,r.kt)("inlineCode",{parentName:"p"},"sorting"),"\xa0and ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," states of ",(0,r.kt)("strong",{parentName:"p"},"Tanstack Table")," are converted to the ",(0,r.kt)("inlineCode",{parentName:"p"},"CrudSorting")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CrudFilter")," types of ",(0,r.kt)("strong",{parentName:"p"},"refine"),". So, when you change the ",(0,r.kt)("strong",{parentName:"p"},"Tanstack Table"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"sorting")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," state, ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook will pass the converted params to the ",(0,r.kt)("inlineCode",{parentName:"p"},"getList")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),".")),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table")," provides a headless solution, there are many ways to handle filtering and sorting. In this tutorial, we will show a basic way of adding sorting and filtering to the table."),(0,r.kt)("h2",{id:"adding-sorting"},"Adding Sorting"),(0,r.kt)("p",null,"We first need to add a clickable column header to the table, which, when clicked on, will sort the table by the column."),(0,r.kt)("p",null,"To do this, just open the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx")," file on your editor and replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"<thead>")," element with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/blog-posts/list.tsx"',title:'"src/pages/blog-posts/list.tsx"'},'<thead>\n    {getHeaderGroups().map((headerGroup) => (\n        <tr key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n                <th key={header.id}>\n                    //highlight-next-line\n                    <div onClick={header.column.getToggleSortingHandler()}>\n                        {!header.isPlaceholder &&\n                            flexRender(\n                                header.column.columnDef.header,\n                                header.getContext(),\n                            )}\n                        //highlight-start\n                        {{\n                            asc: " \ud83d\udd3c",\n                            desc: " \ud83d\udd3d",\n                        }[header.column.getIsSorted() as string] ?? null}\n                        //highlight-end\n                    </div>\n                </th>\n            ))}\n        </tr>\n    ))}\n</thead>\n')),(0,r.kt)("p",null,"In the above code, we have added an ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," event to the column header. When the user clicks on the column header, the ",(0,r.kt)("inlineCode",{parentName:"p"},"getToggleSortingHandler")," method of the column will be called, which will toggle the sorting state."),(0,r.kt)("p",null,"An arrow icon was also added to display the sorting state: no icon is shown if the column isn't sorted, \ud83d\udd3c is displayed for ascending order, and \ud83d\udd3d is displayed for descending order."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to disable sorting for a specific column, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"enableSorting")," property of the column to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in the column definition:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    title: "Category",\n    dataIndex: "category",\n    //highlight-next-line\n    enableSorting: false,\n},\n'))),(0,r.kt)("h2",{id:"adding-filters"},"Adding Filters"),(0,r.kt)("p",null,"We will just add a basic text input to the table header that will filter the table by the column value."),(0,r.kt)("p",null,"To do this, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx"),' file on your editor and change the filter operator for columns to "contains" by changing the ',(0,r.kt)("inlineCode",{parentName:"p"},"meta")," property of the column definition like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "title",\n    accessorKey: "title",\n    header: "Title",\n    //highlight-start\n    meta: {\n        filterOperator: "contains",\n    },\n    //highlight-end\n},\n{\n    id: "content",\n    accessorKey: "content",\n    header: "Content",\n    //highlight-start\n    meta: {\n        filterOperator: "contains",\n    },\n    //highlight-end\n},\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There are many values that you can pass to the ",(0,r.kt)("inlineCode",{parentName:"p"},"filterOperator"),", for more information about them, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-table/#filtering"},"Filtering section of the ",(0,r.kt)("inlineCode",{parentName:"a"},"useTable")," documentation","\u2192"))),(0,r.kt)("p",null,'You then need to disable filtering for the "actions" column by setting the ',(0,r.kt)("inlineCode",{parentName:"p"},"enableFiltering")," property of the column to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in the column definition like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "actions",\n    accessorKey: "id",\n    header: "Actions",\n    //highlight-next-line\n    enableColumnFilter: false,\n    cell: function render({ getValue }) {\n        return (\n            <div\n                style={{\n                    display: "flex",\n                    flexDirection: "row",\n                    flexWrap: "wrap",\n                    gap: "4px",\n                }}\n            >\n                <button\n                    onClick={() => {\n                        show("blog_posts", getValue() as string);\n                    }}\n                >\n                    Show\n                </button>\n                <button\n                    onClick={() => {\n                        edit("blog_posts", getValue() as string);\n                    }}\n                >\n                    Edit\n                </button>\n            </div>\n        );\n    },\n},\n')),(0,r.kt)("p",null,"Finally, you need to replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"<thead/>")," element with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<thead>\n    {getHeaderGroups().map((headerGroup) => (\n        <tr key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n                <th key={header.id}>\n                    <div onClick={header.column.getToggleSortingHandler()}>\n                        {!header.isPlaceholder &&\n                            flexRender(\n                                header.column.columnDef.header,\n                                header.getContext(),\n                            )}\n                        {{\n                            asc: " \ud83d\udd3c",\n                            desc: " \ud83d\udd3d",\n                        }[header.column.getIsSorted() as string] ?? null}\n                    </div>\n                    //highlight-start\n                    <div>\n                        {header.column.getCanFilter() && (\n                            <input\n                                value={header.column.getFilterValue() as string}\n                                onChange={(e) => {\n                                    header.column.setFilterValue(\n                                        e.target.value,\n                                    );\n                                }}\n                                placeholder={`Search ${header.column.columnDef.header}`}\n                            />\n                        )}\n                    </div>\n                    //highlight-end\n                </th>\n            ))}\n        </tr>\n    ))}\n</thead>\n')),(0,r.kt)("p",null,"In the above code, we have added a basic text input to the column header. When the user types in the input, the ",(0,r.kt)("inlineCode",{parentName:"p"},"setFilterValue")," method of the column will be called which will set the filter value of the column."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We added the ",(0,r.kt)("inlineCode",{parentName:"p"},"enableColumnFilter")," property to the column definition, which will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"getCanFilter")," method of the column to determine whether the column should have a filter input or not. If you want to disable the filtering for a spesific column, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"enableColumnFilter")," property of the column to false in the column definition:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    title: "Category",\n    dataIndex: "category",\n    //highlight-next-line\n    enableColumnFilter: false,\n},\n'))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information about sorting and filters, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-table/"},(0,r.kt)("inlineCode",{parentName:"a"},"useTable")," documentation","\u2192"))),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Checklist"},(0,r.kt)(h,{id:"add-search-and-filters-headless",mdxType:"ChecklistItem"},"I have added search and filters to the table.")))}g.isMDXComponent=!0}}]);