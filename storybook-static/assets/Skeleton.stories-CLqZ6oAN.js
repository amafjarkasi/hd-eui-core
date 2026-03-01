import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as r}from"./clsx-B-dksMZM.js";const a=({variant:t="rectangle",animation:o="pulse",className:j,width:u,height:m,lines:h=3})=>{const g="bg-hd-bg-dark dark:bg-slate-800 border border-hd-border dark:border-slate-700",v={pulse:"animate-pulse",wave:"relative overflow-hidden"},p={text:"h-4 w-full rounded",rectangle:"rounded-md",circle:"rounded-full",avatar:"rounded-full w-8 h-8",square:"rounded-md aspect-square",paragraph:"space-y-1"},x=r(g,v[o],j),f=u||m?{width:u,height:m}:{};return t==="paragraph"?e.jsx("div",{className:r(p.paragraph),children:Array.from({length:h}).map((y,w)=>e.jsx("div",{className:r(g,v[o],"h-2 rounded",w===h-1?"w-3/4":"w-full")},w))}):o==="wave"?e.jsxs("div",{className:r(x,"relative"),children:[e.jsx("div",{className:p[t],style:f}),e.jsx("div",{className:"absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"})]}):e.jsx("div",{className:r(x,p[t]),style:f})};try{a.displayName="Skeleton",a.__docgenInfo={description:"",displayName:"Skeleton",props:{variant:{defaultValue:{value:"rectangle"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"rectangle"'},{value:'"circle"'},{value:'"avatar"'},{value:'"square"'},{value:'"paragraph"'}]}},animation:{defaultValue:{value:"pulse"},description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:'"pulse"'},{value:'"wave"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},lines:{defaultValue:{value:"3"},description:"",name:"lines",required:!1,type:{name:"number"}}}}}catch{}const S={title:"Feedback/Skeleton",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","rectangle","circle","avatar","square","paragraph"]},animation:{control:"select",options:["pulse","wave"]}}},s={args:{variant:"rectangle",width:"100%",height:"100px"}},n={args:{variant:"text",width:"200px"}},i={args:{variant:"circle",width:"40px",height:"40px"}},l={args:{variant:"paragraph",lines:4}},d={args:{variant:"rectangle",animation:"wave",width:"100%",height:"150px"}},c={render:()=>e.jsxs("div",{className:"w-64 p-2 border border-hd-border rounded-md space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{variant:"circle",width:"32px",height:"32px"}),e.jsxs("div",{className:"space-y-1 flex-1",children:[e.jsx(a,{variant:"text",width:"60%"}),e.jsx(a,{variant:"text",width:"40%"})]})]}),e.jsx(a,{variant:"rectangle",height:"100px"}),e.jsxs("div",{className:"flex gap-1 justify-end",children:[e.jsx(a,{variant:"rectangle",width:"40px",height:"20px"}),e.jsx(a,{variant:"rectangle",width:"40px",height:"20px"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rectangle',
    width: '100%',
    height: '100px'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: '200px'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '40px',
    height: '40px'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'paragraph',
    lines: 4
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rectangle',
    animation: 'wave',
    width: '100%',
    height: '150px'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64 p-2 border border-hd-border rounded-md space-y-2">\r
      <div className="flex items-center gap-2">\r
        <Skeleton variant="circle" width="32px" height="32px" />\r
        <div className="space-y-1 flex-1">\r
          <Skeleton variant="text" width="60%" />\r
          <Skeleton variant="text" width="40%" />\r
        </div>\r
      </div>\r
      <Skeleton variant="rectangle" height="100px" />\r
      <div className="flex gap-1 justify-end">\r
        <Skeleton variant="rectangle" width="40px" height="20px" />\r
        <Skeleton variant="rectangle" width="40px" height="20px" />\r
      </div>\r
    </div>
}`,...c.parameters?.docs?.source}}};const k=["Default","Text","Circle","Paragraph","WaveAnimation","CardSkeleton"];export{c as CardSkeleton,i as Circle,s as Default,l as Paragraph,n as Text,d as WaveAnimation,k as __namedExportsOrder,S as default};
