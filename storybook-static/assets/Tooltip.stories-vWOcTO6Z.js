import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as f}from"./index-yRop1keA.js";import{c as p}from"./clsx-B-dksMZM.js";import{B as o}from"./Button-Bmb3JdoM.js";import"./createLucideIcon-CJb76Z7U.js";const e=({content:a,position:i="top",children:d,className:c})=>{const[m,l]=f.useState(!1),u={top:"bottom-full left-1/2 -translate-x-1/2 mb-1",bottom:"top-full left-1/2 -translate-x-1/2 mt-1",left:"right-full top-1/2 -translate-y-1/2 mr-1",right:"left-full top-1/2 -translate-y-1/2 ml-1"},h={top:"top-full left-1/2 -translate-x-1/2 border-t-hd-primary dark:border-t-slate-800 border-x-transparent border-b-transparent",bottom:"bottom-full left-1/2 -translate-x-1/2 border-b-hd-primary dark:border-b-slate-800 border-x-transparent border-t-transparent",left:"left-full top-1/2 -translate-y-1/2 border-l-hd-primary dark:border-l-slate-800 border-y-transparent border-r-transparent",right:"right-full top-1/2 -translate-y-1/2 border-r-hd-primary dark:border-r-slate-800 border-y-transparent border-l-transparent"};return t.jsxs("div",{className:"relative inline-block",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[d,m&&t.jsxs("div",{className:p("absolute z-50 px-1.5 py-0.5 text-[9px] font-medium text-white bg-hd-primary dark:bg-slate-800 rounded shadow-sm whitespace-nowrap pointer-events-none animate-fade-in",u[i],c),children:[a,t.jsx("div",{className:p("absolute border-4",h[i])})]})]})};try{e.displayName="Tooltip",e.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const j={title:"Feedback/Tooltip",component:e,tags:["autodocs"],argTypes:{position:{control:"select",options:["top","bottom","left","right"]}}},r={args:{content:"This is a high-density tooltip",children:t.jsx(o,{size:"sm",children:"Hover Me"})}},s={render:()=>t.jsxs("div",{className:"flex gap-12 p-12 items-center justify-center",children:[t.jsx(e,{content:"Top",position:"top",children:t.jsx(o,{size:"sm",children:"Top"})}),t.jsx(e,{content:"Bottom",position:"bottom",children:t.jsx(o,{size:"sm",children:"Bottom"})}),t.jsx(e,{content:"Left",position:"left",children:t.jsx(o,{size:"sm",children:"Left"})}),t.jsx(e,{content:"Right",position:"right",children:t.jsx(o,{size:"sm",children:"Right"})})]})},n={args:{content:"Tooltips are essential for explaining micro-icons in dense UIs.",children:t.jsx("span",{className:"text-[10px] cursor-help underline decoration-dotted",children:"Why density?"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is a high-density tooltip',
    children: <Button size="sm">Hover Me</Button>
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-12 p-12 items-center justify-center">\r
      <Tooltip content="Top" position="top">\r
        <Button size="sm">Top</Button>\r
      </Tooltip>\r
      <Tooltip content="Bottom" position="bottom">\r
        <Button size="sm">Bottom</Button>\r
      </Tooltip>\r
      <Tooltip content="Left" position="left">\r
        <Button size="sm">Left</Button>\r
      </Tooltip>\r
      <Tooltip content="Right" position="right">\r
        <Button size="sm">Right</Button>\r
      </Tooltip>\r
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltips are essential for explaining micro-icons in dense UIs.',
    children: <span className="text-[10px] cursor-help underline decoration-dotted">Why density?</span>
  }
}`,...n.parameters?.docs?.source}}};const v=["Default","Positions","LongContent"];export{r as Default,n as LongContent,s as Positions,v as __namedExportsOrder,j as default};
