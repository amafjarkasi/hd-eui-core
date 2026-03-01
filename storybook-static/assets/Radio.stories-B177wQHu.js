import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as s}from"./clsx-B-dksMZM.js";import{r as h}from"./index-yRop1keA.js";const i=({name:a,options:c,value:v,onChange:b,label:p,disabled:g=!1,className:f,inline:x=!0})=>e.jsxs("div",{className:s("flex flex-col gap-1",f),children:[p&&e.jsx("label",{className:"text-[8px] font-bold text-hd-primary dark:text-slate-400 uppercase tracking-tight",children:p}),e.jsx("div",{className:s("flex gap-2",x?"flex-row flex-wrap":"flex-col"),children:c.map(r=>{const m=v===r.value,n=g||r.disabled;return e.jsxs("label",{className:s("flex items-center gap-1 cursor-pointer select-none group",n&&"opacity-50 cursor-not-allowed"),children:[e.jsxs("div",{className:"relative flex items-center justify-center",children:[e.jsx("input",{type:"radio",name:a,value:r.value,checked:m,onChange:()=>!n&&b?.(r.value),disabled:n,className:"sr-only"}),e.jsx("div",{className:s("w-3 h-3 rounded-full border transition-all",m?"border-hd-focus bg-hd-focus":"border-hd-border dark:border-slate-700 bg-hd-bg-light dark:bg-slate-900 group-hover:border-hd-muted",n&&"bg-hd-bg-dark dark:bg-slate-800"),children:m&&e.jsx("div",{className:"absolute inset-0 m-auto w-1 h-1 bg-white rounded-full"})})]}),e.jsx("span",{className:"text-[10px] text-hd-primary dark:text-slate-300",children:r.label})]},r.value)})})]});try{i.displayName="Radio",i.__docgenInfo={description:"",displayName:"Radio",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"RadioOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string | number) => void)"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},inline:{defaultValue:{value:"true"},description:"",name:"inline",required:!1,type:{name:"boolean"}}}}}catch{}const S={title:"Form/Radio",component:i,tags:["autodocs"]},u=[{label:"Production",value:"prod"},{label:"Staging",value:"stage"},{label:"Development",value:"dev"}],t={args:{name:"env",label:"Environment",options:u,value:"prod"}},l={args:{name:"env-v",label:"Deployment Strategy",options:u,inline:!1}},o={render:()=>{const[a,c]=h.useState("prod");return e.jsx(i,{name:"env-i",label:"Select Environment",options:u,value:a,onChange:c})}},d={args:{name:"env-d",label:"Restricted Setting",options:u.map(a=>({...a,disabled:a.value==="dev"})),disabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'env',
    label: 'Environment',
    options,
    value: 'prod'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'env-v',
    label: 'Deployment Strategy',
    options,
    inline: false
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('prod');
    return <Radio name="env-i" label="Select Environment" options={options} value={value} onChange={setValue} />;
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'env-d',
    label: 'Restricted Setting',
    options: options.map(o => ({
      ...o,
      disabled: o.value === 'dev'
    })),
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};const V=["Default","Vertical","Interactive","Disabled"];export{t as Default,d as Disabled,o as Interactive,l as Vertical,V as __namedExportsOrder,S as default};
