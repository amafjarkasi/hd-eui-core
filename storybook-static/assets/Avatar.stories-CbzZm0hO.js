import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as p}from"./clsx-B-dksMZM.js";const r=({src:s,name:o,size:u="md",className:x})=>{const m=p("rounded-full border border-hd-border dark:border-hd-dark-border bg-hd-bg-light dark:bg-hd-dark-bg text-hd-primary dark:text-hd-dark-text flex items-center justify-center overflow-hidden transition-colors",{xs:"w-4 h-4 text-[6px]",sm:"w-6 h-6 text-[8px]",md:"w-8 h-8 text-[9px]",lg:"w-10 h-10 text-[10px]",xl:"w-12 h-12 text-[11px]"}[u],x),h=o.trim().split(/\s+/).filter(a=>a.length>0).map(a=>a.charAt(0).toUpperCase()).slice(0,2).join("");return e.jsxs("div",{className:"relative",children:[s&&e.jsx("img",{src:s,alt:o,className:m,onError:a=>{const c=a.currentTarget;c.style.display="none";const g=c.nextSibling;g&&(g.style.display="flex")}}),e.jsx("div",{className:p(m,s?"hidden":""),children:h})]})};try{r.displayName="Avatar",r.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const k={title:"Data Display/Avatar",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]}}},t={args:{name:"John Doe",size:"md"}},n={args:{name:"Jane Smith",src:"https://i.pravatar.cc/150?u=jane",size:"lg"}},d={args:{name:"XS User",size:"xs"}},i={args:{name:"XL User",size:"xl"}},l={render:()=>e.jsxs("div",{className:"flex -space-x-2",children:[e.jsx(r,{name:"User 1",size:"md",className:"ring-2 ring-white dark:ring-slate-900"}),e.jsx(r,{name:"User 2",size:"md",className:"ring-2 ring-white dark:ring-slate-900"}),e.jsx(r,{name:"User 3",size:"md",className:"ring-2 ring-white dark:ring-slate-900"}),e.jsx("div",{className:"w-8 h-8 rounded-full bg-hd-bg-dark dark:bg-hd-dark-bg-alt border border-hd-border dark:border-hd-dark-border flex items-center justify-center text-[9px] font-bold text-hd-muted ring-2 ring-white dark:ring-slate-900",children:"+5"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: "John Doe",
    size: "md"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Jane Smith",
    src: "https://i.pravatar.cc/150?u=jane",
    size: "lg"
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: "XS User",
    size: "xs"
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: "XL User",
    size: "xl"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex -space-x-2">\r
      <Avatar name="User 1" size="md" className="ring-2 ring-white dark:ring-slate-900" />\r
      <Avatar name="User 2" size="md" className="ring-2 ring-white dark:ring-slate-900" />\r
      <Avatar name="User 3" size="md" className="ring-2 ring-white dark:ring-slate-900" />\r
      <div className="w-8 h-8 rounded-full bg-hd-bg-dark dark:bg-hd-dark-bg-alt border border-hd-border dark:border-hd-dark-border flex items-center justify-center text-[9px] font-bold text-hd-muted ring-2 ring-white dark:ring-slate-900">\r
        +5\r
      </div>\r
    </div>
}`,...l.parameters?.docs?.source}}};const z=["Default","WithImage","ExtraSmall","ExtraLarge","Group"];export{t as Default,i as ExtraLarge,d as ExtraSmall,l as Group,n as WithImage,z as __namedExportsOrder,k as default};
