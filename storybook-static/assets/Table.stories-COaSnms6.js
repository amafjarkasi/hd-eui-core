import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as n}from"./clsx-B-dksMZM.js";import{C as N}from"./chevron-up-DCCwOMqO.js";import{C as S}from"./chevron-down-Du_Kurbo.js";import{A as w}from"./arrow-up-down-DNtYFUFf.js";import{B as A}from"./Badge-BeIS55kO.js";import{r as D}from"./index-yRop1keA.js";import"./createLucideIcon-CJb76Z7U.js";const m=({data:t=[],columns:s,loading:p=!1,emptyMessage:h="No records found",striped:f=!0,onSort:g,sortKey:b,sortDirection:k,className:v})=>{const j=e=>{if(!e.sortable||!g)return;const a=b===e.key&&k==="asc"?"desc":"asc";g(e.key,a)};return r.jsx("div",{className:n("w-full overflow-x-auto border border-hd-border dark:border-hd-dark-border rounded-md bg-hd-bg-light dark:bg-hd-dark-bg transition-colors",v),children:r.jsxs("table",{className:"w-full border-collapse table-fixed text-left",children:[r.jsx("thead",{children:r.jsx("tr",{className:"bg-hd-bg-dark dark:bg-hd-dark-bg-alt border-b border-hd-border dark:border-hd-dark-border",children:s.map(e=>r.jsx("th",{onClick:()=>j(e),style:{width:e.width},className:n("px-2 py-1 text-[11px] font-bold text-hd-primary dark:text-hd-dark-text uppercase tracking-wider select-none transition-colors",e.sortable&&"cursor-pointer hover:bg-hd-border/50 dark:hover:bg-hd-dark-border/50",e.align==="center"&&"text-center",e.align==="right"&&"text-right"),children:r.jsxs("div",{className:n("flex items-center gap-1",e.align==="center"&&"justify-center",e.align==="right"&&"justify-end"),children:[r.jsx("span",{className:"truncate",children:e.header}),e.sortable&&r.jsx("span",{className:"text-hd-muted dark:text-hd-dark-text-muted flex-shrink-0",children:b===e.key?k==="asc"?r.jsx(N,{size:10,strokeWidth:3}):r.jsx(S,{size:10,strokeWidth:3}):r.jsx(w,{size:8,className:"opacity-30"})})]})},e.key))})}),r.jsx("tbody",{className:"divide-y divide-hd-border dark:divide-hd-dark-border",children:p?Array.from({length:5}).map((e,d)=>r.jsx("tr",{className:"animate-pulse",children:s.map(a=>r.jsx("td",{className:"px-2 py-1.5",children:r.jsx("div",{className:"h-2 bg-hd-bg-dark dark:bg-hd-dark-bg-alt rounded w-3/4"})},`skeleton-td-${a.key}`))},`skeleton-${d}`)):t.length===0?r.jsx("tr",{children:r.jsx("td",{colSpan:s.length,className:"px-4 py-8 text-center text-[10px] text-hd-muted dark:text-hd-dark-text-muted italic",children:h})}):t.map((e,d)=>r.jsx("tr",{className:n("group transition-colors hover:bg-hd-bg-dark dark:hover:bg-hd-dark-bg-alt",f&&d%2!==0&&"bg-hd-bg-dark/30 dark:bg-hd-dark-bg-alt/20"),children:s.map(a=>{const y=e[a.key];return r.jsx("td",{className:n("px-2 py-1 text-[10px] text-hd-primary dark:text-hd-dark-text truncate align-middle border-r border-hd-border/30 dark:border-hd-dark-border/20 last:border-r-0",a.align==="center"&&"text-center",a.align==="right"&&"text-right",a.className),children:a.render?a.render(y,e,d):String(y??"")},a.key)})},e.id||e.key||d))})]})})};try{m.displayName="Table",m.__docgenInfo={description:`A high-density, enterprise-grade data table optimized for high-throughput information display.
Features include sorting, striped rows, loading skeletons, and full dark mode support.`,displayName:"Table",props:{data:{defaultValue:{value:"[]"},description:"Array of data objects to display",name:"data",required:!1,type:{name:"T[]"}},columns:{defaultValue:null,description:"Array of column definitions",name:"columns",required:!0,type:{name:"Column<T>[]"}},loading:{defaultValue:{value:"false"},description:"Whether the table is in a loading state",name:"loading",required:!1,type:{name:"boolean"}},emptyMessage:{defaultValue:{value:"No records found"},description:"Message to display when no data is available",name:"emptyMessage",required:!1,type:{name:"string"}},striped:{defaultValue:{value:"true"},description:"Whether to show alternating row colors",name:"striped",required:!1,type:{name:"boolean"}},onSort:{defaultValue:null,description:"Callback triggered when a sortable header is clicked",name:"onSort",required:!1,type:{name:'((key: string, direction: "asc" | "desc") => void)'}},sortKey:{defaultValue:null,description:"The current key being sorted",name:"sortKey",required:!1,type:{name:"string"}},sortDirection:{defaultValue:null,description:"The current sort direction",name:"sortDirection",required:!1,type:{name:"enum",value:[{value:'"asc"'},{value:'"desc"'}]}},className:{defaultValue:null,description:"Optional class name for the table container",name:"className",required:!1,type:{name:"string"}}}}}catch{}const B={title:"Data Display/Table",component:m,tags:["autodocs"]},u=[{key:"id",header:"ID",width:"50px"},{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email"},{key:"status",header:"Status",render:t=>r.jsx(A,{variant:t==="Active"?"primary":"muted",children:t})},{key:"role",header:"Role"}],x=[{id:"1",name:"Alice Smith",email:"alice@enterprise.com",status:"Active",role:"Admin"},{id:"2",name:"Bob Jones",email:"bob@enterprise.com",status:"Inactive",role:"Editor"},{id:"3",name:"Charlie Brown",email:"charlie@enterprise.com",status:"Active",role:"Viewer"},{id:"4",name:"Diana Prince",email:"diana@enterprise.com",status:"Active",role:"Admin"},{id:"5",name:"Ethan Hunt",email:"ethan@enterprise.com",status:"Inactive",role:"Viewer"}],i={args:{columns:u,data:x,striped:!0}},o={args:{columns:u,data:[],loading:!0}},l={args:{columns:u,data:[],emptyMessage:"No records found in the current view."}},c={render:()=>{const[t,s]=D.useState({key:"name",dir:"asc"});return r.jsx(m,{columns:u,data:x,sortKey:t.key,sortDirection:t.dir,onSort:(p,h)=>s({key:p,dir:h}),striped:!0})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    striped: true
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    loading: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    emptyMessage: 'No records found in the current view.'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sort, setSort] = useState<{
      key: string;
      dir: 'asc' | 'desc';
    }>({
      key: 'name',
      dir: 'asc'
    });
    return <Table columns={columns} data={data} sortKey={sort.key} sortDirection={sort.dir} onSort={(key, dir) => setSort({
      key,
      dir
    })} striped />;
  }
}`,...c.parameters?.docs?.source}}};const I=["Default","Loading","Empty","Interactive"];export{i as Default,l as Empty,c as Interactive,o as Loading,I as __namedExportsOrder,B as default};
