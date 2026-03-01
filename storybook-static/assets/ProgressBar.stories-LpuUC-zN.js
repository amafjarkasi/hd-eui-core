import{j as c}from"./jsx-runtime-u17CrQMm.js";const l=({value:o=0,indeterminate:e=!1,variant:i="primary",showLabel:u=!1,className:d})=>{const m={primary:"bg-hd-primary",success:"bg-green-500",danger:"bg-red-500"};return c.jsxs("div",{className:`w-full h-2 bg-hd-bg-dark dark:bg-slate-800 rounded-md overflow-hidden ${d}`,children:[c.jsx("div",{className:`h-full transition-all duration-300 ease-in-out ${m[i]} ${e?"animate-pulse":""}`,style:{width:e?"60%":`${Math.min(o,100)}%`,transformOrigin:e?"center":void 0}}),u&&c.jsx("div",{className:"text-[9px] text-hd-muted mt-1",children:e?"Loading...":`${Math.round(o)}%`})]})};try{l.displayName="ProgressBar",l.__docgenInfo={description:"",displayName:"ProgressBar",props:{value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"number"}},indeterminate:{defaultValue:{value:"false"},description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"primary"'},{value:'"danger"'}]}},showLabel:{defaultValue:{value:"false"},description:"",name:"showLabel",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const g={title:"Feedback/ProgressBar",component:l,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","success","danger"]}}},a={args:{value:45,variant:"primary"}},r={args:{value:100,variant:"success"}},s={args:{value:85,variant:"danger"}},n={args:{indeterminate:!0}},t={args:{value:75,showLabel:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 45,
    variant: "primary"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: "success"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 85,
    variant: "danger"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    showLabel: true
  }
}`,...t.parameters?.docs?.source}}};const v=["Default","Success","Danger","Indeterminate","WithLabel"];export{s as Danger,a as Default,n as Indeterminate,r as Success,t as WithLabel,v as __namedExportsOrder,g as default};
