"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"filter-dropdown",title:"<FilterDropdown>",sidebar_label:"<FilterDropdown>"},i=void 0,l={unversionedId:"api-reference/antd/components/filter-dropdown",id:"version-3.xx.xx/api-reference/antd/components/filter-dropdown",title:"<FilterDropdown>",description:"Usage",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/filter-dropdown.md",sourceDirName:"api-reference/antd/components",slug:"/api-reference/antd/components/filter-dropdown",permalink:"/docs/3.xx.xx/api-reference/antd/components/filter-dropdown",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/filter-dropdown.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1685092394,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{id:"filter-dropdown",title:"<FilterDropdown>",sidebar_label:"<FilterDropdown>"},sidebar:"someSidebar",previous:{title:"Url",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/url"},next:{title:"Custom Inputs",permalink:"/docs/3.xx.xx/api-reference/antd/components/inputs/custom-inputs"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>selectedKeys</code>, <code>setSelectedKeys</code>, <code>confirm</code>, <code>clearFilters</code>",id:"selectedkeys-setselectedkeys-confirm-clearfilters",level:3},{value:"<code>mapValue</code>",id:"mapvalue",level:3},{value:"Example",id:"example",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=d("PropsTable"),m=d("CodeSandboxExample"),u={toc:s};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<FilterDropdown>")," is a helper component for ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/table/#components-table-demo-custom-filter-panel"},"filter dropdowns in Ant Design ",(0,o.kt)("inlineCode",{parentName:"a"},"<Table>")," components.")),(0,o.kt)("p",null,"It serves as a bridge by synchronizing between its children's input value and ",(0,o.kt)("inlineCode",{parentName:"p"},"<Table>"),"'s filter values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/pages/postList.tsx"',title:'"components/pages/postList.tsx"'},'import {\n    List,\n    Table,\n    // highlight-start\n    FilterDropdown,\n    Select,\n    // highlight-end\n    useTable,\n} from "@pankod/refine-antd";\n\nconst PostList: React.FC = (props) => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n              <Table.Column dataIndex="id" title="ID" />\n              <Table.Column\n                    dataIndex={["category", "id"]}\n                    title="Category"\n                    key="category.id"\n                    // highlight-start\n                    filterDropdown={(props) => (\n                        <FilterDropdown {...props}>\n                            <Select\n                                mode="multiple"\n                                placeholder="Select Category"\n                                options={[\n                                    { label: "Ergonomic", value: "1" },\n                                    { label: "Island", value: "2" },\n                                ]}\n                            />\n                        </FilterDropdown>\n                    )}\n                    // highlight-end\n                />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    category: {\n        id: number;\n    }\n}\n')),(0,o.kt)("p",null,"Selecting categories from dropdown will send the id's of categories as filtering values to ",(0,o.kt)("strong",{parentName:"p"},"Table")," and data will be updated by ",(0,o.kt)("strong",{parentName:"p"},"refine")," under the hood."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<FilterDropdown>")," will put two buttons for filtering and clearing filter actions."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/category_filter-dropdown.png",alt:"Show record action"})),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We added category options for ",(0,o.kt)("inlineCode",{parentName:"p"},"<Select>")," manually for the sake of simplicity but ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/field/useSelect/"},"useSelect")," hook can be used to populate the props of ",(0,o.kt)("inlineCode",{parentName:"p"},"<Select>")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useSelect<ICategory>({\n    resource: "categories",\n    optionLabel: "title",\n    optionValue: "id",\n});\n\n<Select {...categorySelectProps} />\n'))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"selectedkeys-setselectedkeys-confirm-clearfilters"},(0,o.kt)("inlineCode",{parentName:"h3"},"selectedKeys"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"setSelectedKeys"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"confirm"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"clearFilters")),(0,o.kt)("p",null,"These are to be passed from ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/table/#Column"},(0,o.kt)("inlineCode",{parentName:"a"},"<Table.Column>"),"'s filterDropdown")," prop."),(0,o.kt)("h3",{id:"mapvalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"mapValue")),(0,o.kt)("p",null,"Determines the value passed to children. ",(0,o.kt)("inlineCode",{parentName:"p"},"mapValue")," takes ",(0,o.kt)("inlineCode",{parentName:"p"},"selectedKeys")," as an argument."),(0,o.kt)("p",null,"For example when using ",(0,o.kt)("inlineCode",{parentName:"p"},"useSelect")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"<Select>")," component. In this case values must be mapped to ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),"s using ",(0,o.kt)("inlineCode",{parentName:"p"},"mapValue"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { getDefaultFilter } from "@pankod/refine-core";\nimport {\n    useTable,\n    Table,\n    FilterDropdown,\n    Select,\n    useSelect,\n} from "@pankod/refine-antd";\n\nconst { tableProps, filters } = useTable<IPost>({\n    initialFilter: [\n        {\n            field: "category.id",\n            value: [1, 2],\n            operator: "in",\n        },\n    ],\n});\n\nconst { selectProps: categorySelectProps } = useSelect<ICategory>({\n    resource: "categories",\n    optionLabel: "title",\n    optionValue: "id",\n    defaultValue: getDefaultFilter("category.id", filters, "in"),\n});\n\n<Table>\n    <Table.Column dataIndex="id" title="ID" />\n    <Table.Column\n        dataIndex={["category", "id"]}\n        title="Category"\n        key="category.id"\n        filterDropdown={(props) => (\n            <FilterDropdown\n                {...props}\n                mapValue={(selectedKeys) =>\n                    selectedKeys.map((i) => parseInt(i.toString()))\n                }\n            >\n                <Select\n                    style={{ minWidth: 200 }}\n                    mode="multiple"\n                    placeholder="Select Category"\n                    {...categorySelectProps}\n                />\n            </FilterDropdown>\n        )}\n        defaultFilteredValue={getDefaultFilter("category.id", filters, "in")}\n    />\n</Table>;\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#syncwithlocation"},"syncWithLocation")," is enabled, on page refresh filter values will be type of ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," since they will be parsed from URL. This might produce some incompatibility if data for filter input comes from an API and it's not type of ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),".  "),(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"getDefaultFilter")," finds filter values for a given column from the given filters. In the example, ",(0,o.kt)("inlineCode",{parentName:"p"},"filters")," passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"getDefaultFilter")," includes filter values from the URL since it comes from ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable"),"."))),(0,o.kt)(c,{module:"@pankod/refine-antd/FilterDropdown",mdxType:"PropsTable"}),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(m,{path:"table-antd-use-table",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);