"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"adding-sort-and-filters",title:"6. Adding Sort and Filters",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:"tutorial/understanding-authprovider/index"}},s=void 0,p={unversionedId:"tutorial/adding-crud-pages/chakra-ui/adding-sort-and-filters",id:"tutorial/adding-crud-pages/chakra-ui/adding-sort-and-filters",title:"6. Adding Sort and Filters",description:"Sort and Filters",source:"@site/docs/tutorial/4-adding-crud-pages/chakra-ui/adding-sort-and-filters.md",sourceDirName:"tutorial/4-adding-crud-pages/chakra-ui",slug:"/tutorial/adding-crud-pages/chakra-ui/adding-sort-and-filters",permalink:"/docs/tutorial/adding-crud-pages/chakra-ui/adding-sort-and-filters",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/chakra-ui/adding-sort-and-filters.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1698245380,formattedLastUpdatedAt:"Oct 25, 2023",frontMatter:{id:"adding-sort-and-filters",title:"6. Adding Sort and Filters",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:"tutorial/understanding-authprovider/index"}}},c={},d=[{value:"Sort and Filters",id:"sort-and-filters",level:2},{value:"Adding Sorting",id:"adding-sorting",level:2},{value:"Adding Filters",id:"adding-filters",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=u("Checklist"),h=u("ChecklistItem"),g={toc:d};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sort-and-filters"},"Sort and Filters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table")," package is based on the ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/table/v8"},(0,r.kt)("strong",{parentName:"a"},"TanStack Table"))," package, meaning that we can add sorting and filtering features to our table as suggested in the ",(0,r.kt)("strong",{parentName:"p"},"TanStack")," documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tanstack Table")," keeps the ",(0,r.kt)("inlineCode",{parentName:"p"},"sorting")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," states in the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook. When these states are changed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook will automatically fetch the data and update the table with the new data."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Under the hood, ",(0,r.kt)("inlineCode",{parentName:"p"},"sorting"),"\xa0and ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," states of ",(0,r.kt)("strong",{parentName:"p"},"Tanstack Table")," are converted to the ",(0,r.kt)("inlineCode",{parentName:"p"},"CrudSorting")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CrudFilter")," types of ",(0,r.kt)("strong",{parentName:"p"},"refine"),". So, when you change the ",(0,r.kt)("strong",{parentName:"p"},"Tanstack Table"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"sorting")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," state, ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook will pass the converted params to the ",(0,r.kt)("inlineCode",{parentName:"p"},"getList")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),".")),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table")," provides a headless solution, there are many ways to handle filtering and sorting. In this tutorial, we will show a basic way of adding sorting and filtering to the table."),(0,r.kt)("h2",{id:"adding-sorting"},"Adding Sorting"),(0,r.kt)("p",null,"We first need to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ColumnSorter/>")," component to use in our table header, which, when clicked on, will sort the table by the column:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/table/ColumnSorter.tsx"',title:'"src/components/table/ColumnSorter.tsx"'},'import { IconButton } from "@chakra-ui/react";\nimport { IconChevronDown, IconSelector, IconChevronUp } from "@tabler/icons";\nimport type { Column, SortDirection } from "@tanstack/react-table";\n\nexport const ColumnSorter: React.FC<{ column: Column<any, any> }> = ({\n    column,\n}) => {\n    if (!column.getCanSort()) {\n        return null;\n    }\n\n    const sorted = column.getIsSorted();\n\n    return (\n        <IconButton\n            aria-label="Sort"\n            size="xs"\n            icon={<ColumnSorterIcon sorted={sorted} />}\n            onClick={column.getToggleSortingHandler()}\n        />\n    );\n};\n\nconst ColumnSorterIcon = ({ sorted }: { sorted: false | SortDirection }) => {\n    if (sorted === "asc") return <IconChevronDown size={18} />;\n    if (sorted === "desc") return <IconChevronUp size={18} />;\n    return <IconSelector size={18} />;\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," is a simple component that renders a button, which will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"column.getToggleSortingHandler()")," method that will toggle the sorting state of the table when clicked on."),(0,r.kt)("p",null,"In addition, we are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"column.getCanSort()")," method to check if the column is sortable and not render the ",(0,r.kt)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," if it is not."),(0,r.kt)("p",null,"Lastly, if the column is not sorted, the ",(0,r.kt)("inlineCode",{parentName:"p"},"IconSelector")," component is displayed; otherwise, either the ",(0,r.kt)("inlineCode",{parentName:"p"},"IconChevronDown")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"IconChevronUp")," component is displayed based on the current sorting state."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In this example, we are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@tabler/icons")," package for icons but you can use any icon library you want.")),(0,r.kt)("p",null,"Now, we can finally use ",(0,r.kt)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," in our table header."),(0,r.kt)("p",null,"First, import the ",(0,r.kt)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```tsx title="src/pages/blog-posts/list.tsx"\nimport { ColumnSorter } from "../../components/table/ColumnSorter";\n```\n')),(0,r.kt)("p",null,"Then add the ",(0,r.kt)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," component to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Th/>")," as a child like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```tsx title="src/pages/blog-posts/list.tsx"\n<Thead>\n    {getHeaderGroups().map((headerGroup) => (\n        <Tr key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n                <Th key={header.id}>\n                    {!header.isPlaceholder &&\n                        flexRender(\n                            header.column.columnDef.header,\n                            header.getContext(),\n                        )}\n                    //highlight-next-line\n                    <ColumnSorter column={header.column} />\n                </Th>\n            ))}\n        </Tr>\n    ))}\n</Thead>\n```\n')),(0,r.kt)("p",null,"Finally, disable sorting for the ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," column by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"enableSorting")," property of the column to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in the column definition like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```tsx title="src/pages/blog-posts/list.tsx"\n{\n    id: "actions",\n    accessorKey: "id",\n    header: "Actions",\n    //highlight-next-line\n    enableSorting: false,\n},\n```\n')),(0,r.kt)("p",null,"Now, we can sort the table by clicking on the sort button in the table header."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to disable sorting for a specific column, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"enableSorting")," property of the column to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in the column definition:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "name",\n    accessorKey: "name",\n    header: "Name",\n    //highlight-next-line\n    enableSorting: false,\n},\n'))),(0,r.kt)("h2",{id:"adding-filters"},"Adding Filters"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," component to use in our table header which will be responsible for changing the filters state of the table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/table/ColumnFilter.tsx"',title:'"src/components/table/ColumnFilter.tsx"'},'import React, { useState } from "react";\nimport {\n    Input,\n    Menu,\n    IconButton,\n    MenuButton,\n    MenuList,\n    VStack,\n    HStack,\n} from "@chakra-ui/react";\nimport { IconFilter, IconX, IconCheck } from "@tabler/icons";\nimport type { Column } from "@tanstack/react-table";\n\nexport const ColumnFilter: React.FC<{ column: Column<any, any> }> = ({\n    column,\n}) => {\n    const [state, setState] = useState(null as null | { value: any });\n\n    if (!column.getCanFilter()) {\n        return null;\n    }\n\n    const open = () =>\n        setState({\n            value: column.getFilterValue(),\n        });\n\n    const close = () => setState(null);\n\n    const change = (value: any) => setState({ value });\n\n    const clear = () => {\n        column.setFilterValue(undefined);\n        close();\n    };\n\n    const save = () => {\n        if (!state) return;\n        column.setFilterValue(state.value);\n        close();\n    };\n\n    const renderFilterElement = () => {\n        const FilterComponent = (column.columnDef?.meta as any)?.filterElement;\n\n        if (!FilterComponent && !!state) {\n            return (\n                <Input\n                    borderRadius="md"\n                    size="sm"\n                    autoComplete="off"\n                    value={state.value}\n                    onChange={(e) => change(e.target.value)}\n                />\n            );\n        }\n\n        return (\n            <FilterComponent\n                value={state?.value}\n                onChange={(e: any) => change(e.target.value)}\n            />\n        );\n    };\n\n    return (\n        <Menu isOpen={!!state} onClose={close}>\n            <MenuButton\n                onClick={open}\n                as={IconButton}\n                aria-label="Options"\n                icon={<IconFilter size="16" />}\n                variant="ghost"\n                size="xs"\n            />\n            <MenuList p="2">\n                {!!state && (\n                    <VStack align="flex-start">\n                        {renderFilterElement()}\n                        <HStack spacing="1">\n                            <IconButton\n                                aria-label="Clear"\n                                size="sm"\n                                colorScheme="red"\n                                onClick={clear}\n                            >\n                                <IconX size={18} />\n                            </IconButton>\n                            <IconButton\n                                aria-label="Save"\n                                size="sm"\n                                onClick={save}\n                                colorScheme="green"\n                            >\n                                <IconCheck size={18} />\n                            </IconButton>\n                        </HStack>\n                    </VStack>\n                )}\n            </MenuList>\n        </Menu>\n    );\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," is a component that renders a button which will open a menu when clicked on. In the menu, we are rendering the filter element of the column, which is ",(0,r.kt)("inlineCode",{parentName:"p"},"<Input/>")," in this example but you can render any component you want."),(0,r.kt)("p",null,"Filter element is a component that renders an input element. When the user changes the value of the input element, the filter value of the column will be changed."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<ColumnFilter/>"),' also contains "clear" and "apply" buttons, which will respectively clear or set the filter value of the column when clicked on.'),(0,r.kt)("p",null,"Now, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," in our table header."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the ",(0,r.kt)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," component:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/blog-posts/list.tsx"',title:'"src/pages/blog-posts/list.tsx"'},'import { ColumnFilter } from "../../components/table/ColumnFilter";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," component to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Th/>")," as a child:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/blog-posts/list.tsx"',title:'"src/pages/blog-posts/list.tsx"'},"<Thead>\n    {getHeaderGroups().map((headerGroup) => (\n        <Tr key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n                <Th key={header.id}>\n                    {!header.isPlaceholder &&\n                        flexRender(\n                            header.column.columnDef.header,\n                            header.getContext(),\n                        )}\n                    <ColumnSorter column={header.column} />\n                    //highlight-next-line\n                    <ColumnFilter column={header.column} />\n                </Th>\n            ))}\n        </Tr>\n    ))}\n</Thead>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Change the filter operator for columns to "contains" by changing the ',(0,r.kt)("inlineCode",{parentName:"p"},"meta")," property of the column definition:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n     id: "title",\n    accessorKey: "title",\n    header: "Title",\n    //highlight-start\n    meta: {\n        filterOperator: "contains",\n    },\n    //highlight-end\n},\n{\n    id: "content",\n    accessorKey: "content",\n    header: "Content",\n    //highlight-start\n    meta: {\n        filterOperator: "contains",\n    },\n    //highlight-end\n},\n')),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"There are many values that you can pass to the ",(0,r.kt)("inlineCode",{parentName:"p"},"filterOperator"),", for more information about them, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-table/#filtering"},"Filtering section of the ",(0,r.kt)("inlineCode",{parentName:"a"},"useTable")," documentation","\u2192")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Disable filtering for the "actions" column by setting the ',(0,r.kt)("inlineCode",{parentName:"p"},"enableColumnFilter")," property of the column to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in the column definition like below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "actions",\n    accessorKey: "id",\n    header: "Actions",\n    //highlight-next-line\n    enableColumnFilter: false,\n    ...\n},\n')),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can similarly disable filtering for specific columns by setting their ",(0,r.kt)("inlineCode",{parentName:"p"},"enableColumnFilter")," property to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".")))),(0,r.kt)("p",null,"Now, we can filter the table by clicking on the filter button in the table header."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",null,"How can I use a custom filter element?")),(0,r.kt)("p",null,"If you want to use a custom filter element, you can pass it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"filterElement")," property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," in column definition. For example, you can pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Select/>")," component like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "category",\n    header: "Category",\n    accessorKey: "category.id",\n    meta: {\n        filterElement: (props) => <Select {...props} />,\n    },\n},\n')),(0,r.kt)("p",null,"In the props, the filter element will receive the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," props. You can use these props to change the filter value of the column.")),(0,r.kt)("br",null),(0,r.kt)(m,{mdxType:"Checklist"},(0,r.kt)(h,{id:"add-search-and-filters-chakra-ui",mdxType:"ChecklistItem"},"I have added search and filters to the table.")))}f.isMDXComponent=!0}}]);