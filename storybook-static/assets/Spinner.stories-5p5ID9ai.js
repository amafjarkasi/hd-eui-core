import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as v}from"./clsx-B-dksMZM.js";const e=({size:t="md",color:l="focus",animation:m="spin",className:u})=>{const d="rounded-full border-solid",p={spin:"animate-spin border-b-2",pulse:"animate-pulse border-2",bounce:"animate-bounce border-2"},g={sm:"h-2 w-2 border-[1px]",md:"h-3 w-3 border-[1.5px]",lg:"h-4 w-4 border-2"},b={primary:"border-hd-primary bg-transparent dark:border-hd-primary",focus:"border-hd-focus bg-transparent dark:border-hd-focus",muted:"border-hd-muted bg-transparent dark:border-hd-muted",success:"border-green-500 bg-transparent dark:border-green-400",warning:"border-yellow-500 bg-transparent dark:border-yellow-400",error:"border-red-500 bg-transparent dark:border-red-400"},f=v(d,p[m],g[t],b[l],u);return r.jsx("div",{className:f})};try{e.displayName="Spinner",e.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:{value:"focus"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"primary"'},{value:'"muted"'},{value:'"focus"'}]}},animation:{defaultValue:{value:"spin"},description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:'"pulse"'},{value:'"spin"'},{value:'"bounce"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const S={title:"Feedback/Spinner",component:e,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["primary","focus","muted","success","warning","error"]},animation:{control:"select",options:["spin","pulse","bounce"]}}},s={args:{size:"md",color:"focus",animation:"spin"}},a={args:{size:"sm",color:"primary"}},o={args:{size:"lg",color:"error"}},n={args:{animation:"pulse",color:"warning"}},c={args:{animation:"bounce",color:"success"}},i={render:()=>r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx(e,{size:"sm",color:"primary"}),r.jsx(e,{size:"md",color:"focus"}),r.jsx(e,{size:"lg",color:"success"}),r.jsx(e,{size:"md",color:"warning",animation:"pulse"}),r.jsx(e,{size:"md",color:"error",animation:"bounce"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'focus',
    animation: 'spin'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    color: 'primary'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    color: 'error'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    animation: 'pulse',
    color: 'warning'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    animation: 'bounce',
    color: 'success'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Spinner size="sm" color="primary" />\r
      <Spinner size="md" color="focus" />\r
      <Spinner size="lg" color="success" />\r
      <Spinner size="md" color="warning" animation="pulse" />\r
      <Spinner size="md" color="error" animation="bounce" />\r
    </div>
}`,...i.parameters?.docs?.source}}};const x=["Default","Small","Large","Pulse","Bounce","AllVariants"];export{i as AllVariants,c as Bounce,s as Default,o as Large,n as Pulse,a as Small,x as __namedExportsOrder,S as default};
