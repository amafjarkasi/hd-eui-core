import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as u}from"./clsx-B-dksMZM.js";import{C as k}from"./chevron-down-Du_Kurbo.js";import{r as j}from"./index-yRop1keA.js";import"./createLucideIcon-CJb76Z7U.js";const d=({options:a,label:t,value:m,onChange:h,error:c,size:x="md",className:g,disabled:p,...b})=>{const v=u("appearance-none w-full bg-hd-bg-light dark:bg-hd-dark-bg text-hd-primary dark:text-hd-dark-text border border-hd-border dark:border-hd-dark-border rounded-sm transition-all focus:outline-none focus:ring-1 focus:ring-hd-focus focus:border-hd-focus pr-6",p&&"opacity-50 cursor-not-allowed bg-hd-bg-dark dark:bg-hd-dark-bg-alt",c&&"border-hd-error focus:ring-hd-error focus:border-hd-error dark:border-red-500"),f={sm:"px-1 py-0.5 text-[9px] min-h-[20px]",md:"px-1.5 py-1 text-[10px] min-h-[24px]",lg:"px-2 py-1.5 text-[11px] min-h-[28px]"},S=r=>{const y=r.target.value;h?.(y)};return e.jsxs("div",{className:u("flex flex-col gap-0.5 w-full",g),children:[t&&e.jsx("label",{className:"text-[8px] font-bold text-hd-primary dark:text-hd-dark-text-muted uppercase tracking-tight",children:t}),e.jsxs("div",{className:"relative",children:[e.jsx("select",{className:u(v,f[x]),value:m,onChange:S,disabled:p,...b,children:a.map(r=>e.jsx("option",{value:r.value,disabled:r.disabled,children:r.label},r.value))}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center px-1.5 pointer-events-none text-hd-muted dark:text-hd-dark-text-muted",children:e.jsx(k,{size:10})})]}),c&&e.jsx("span",{className:"text-[8px] text-hd-error dark:text-red-400 mt-0.5",children:c})]})};try{d.displayName="Select",d.__docgenInfo={description:`💎 Select: A high-density dropdown selection component.
Optimized for enterprise data entry with full dark mode support and custom chevron.`,displayName:"Select",props:{options:{defaultValue:null,description:"Array of options to display in the dropdown",name:"options",required:!0,type:{name:"SelectOption[]"}},label:{defaultValue:null,description:"Label text for the select input",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Current selected value",name:"value",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"Callback triggered when the selection changes",name:"onChange",required:!1,type:{name:"((value: string | number) => void)"}},error:{defaultValue:null,description:"Error message to display below the input",name:"error",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Visual size of the select input",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const z={title:"Form/Select",component:d,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},i=[{label:"Administrator",value:"admin"},{label:"Editor",value:"editor"},{label:"Viewer",value:"viewer"},{label:"Guest",value:"guest"}],s={args:{label:"User Role",options:i,placeholder:"Select a role..."}},l={args:{label:"Small Select",size:"sm",options:i}},o={args:{label:"User Role",options:i,error:"Please select a valid role to continue."}},n={render:()=>{const[a,t]=j.useState("admin");return e.jsxs("div",{className:"w-64",children:[e.jsx(d,{label:"Interactive Select",options:i,value:a,onChange:t}),e.jsxs("p",{className:"mt-2 text-[10px] text-hd-muted",children:["Selected Value: ",a]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'User Role',
    options,
    placeholder: 'Select a role...'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Select',
    size: 'sm',
    options
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'User Role',
    options,
    error: 'Please select a valid role to continue.'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('admin');
    return <div className="w-64">\r
        <Select label="Interactive Select" options={options} value={value} onChange={setValue} />\r
        <p className="mt-2 text-[10px] text-hd-muted">Selected Value: {value}</p>\r
      </div>;
  }
}`,...n.parameters?.docs?.source}}};const E=["Default","Small","WithError","Interactive"];export{s as Default,n as Interactive,l as Small,o as WithError,E as __namedExportsOrder,z as default};
