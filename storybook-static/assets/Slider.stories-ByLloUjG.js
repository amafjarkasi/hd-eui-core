import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c}from"./clsx-B-dksMZM.js";import{r as g}from"./index-yRop1keA.js";const n=({label:a,min:l=0,max:o=100,step:u=1,value:d,onChange:m,className:p,disabled:i,...f})=>e.jsxs("div",{className:c("flex flex-col gap-1 w-full",p),children:[a&&e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("label",{className:"text-[8px] font-bold text-hd-primary dark:text-slate-400 uppercase tracking-tight",children:a}),e.jsx("span",{className:"text-[9px] font-mono text-hd-focus dark:text-hd-focus",children:d})]}),e.jsx("input",{type:"range",min:l,max:o,step:u,value:d,onChange:m,disabled:i,className:c("w-full h-1 bg-hd-bg-dark dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-hd-focus",i&&"opacity-50 cursor-not-allowed"),...f})]});try{n.displayName="Slider",n.__docgenInfo={description:"",displayName:"Slider",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},min:{defaultValue:{value:"0"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}const h={title:"Form/Slider",component:n,tags:["autodocs"]},r={args:{label:"Volume",min:0,max:100,value:50}},t={render:()=>{const[a,l]=g.useState(75);return e.jsx("div",{className:"w-64",children:e.jsx(n,{label:"Brightness",value:a,onChange:o=>l(parseInt(o.target.value))})})}},s={args:{label:"Restricted Setting",disabled:!0,value:30}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Volume",
    min: 0,
    max: 100,
    value: 50
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState(75);
    return <div className="w-64">\r
        <Slider label="Brightness" value={val} onChange={e => setVal(parseInt(e.target.value))} />\r
      </div>;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Restricted Setting",
    disabled: true,
    value: 30
  }
}`,...s.parameters?.docs?.source}}};const y=["Default","Interactive","Disabled"];export{r as Default,s as Disabled,t as Interactive,y as __namedExportsOrder,h as default};
