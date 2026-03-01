import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as x}from"./clsx-B-dksMZM.js";import{C as r}from"./Card-DGlspBjB.js";const n=({children:l,columns:o=3,gap:i="ultra",responsive:c=!1,minWidth:p,className:m})=>{const u="grid border border-hd-border dark:border-hd-dark-border bg-hd-bg-light dark:bg-hd-dark-bg",g=c?{gridTemplateColumns:`repeat(auto-fit, minmax(${p||"200px"}, 1fr))`}:{gridTemplateColumns:`repeat(${o}, 1fr)`},h=x(u,{tight:"gap-1",ultra:"gap-2"}[i],m);return e.jsx("div",{className:h,style:g,children:l.map((f,b)=>e.jsx("div",{className:"border border-hd-border dark:border-hd-dark-border bg-hd-bg-light dark:bg-hd-dark-bg p-2",children:f},b))})};try{n.displayName="CardGrid",n.__docgenInfo={description:"",displayName:"CardGrid",props:{columns:{defaultValue:{value:"3"},description:"",name:"columns",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"ultra"},description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"tight"'},{value:'"ultra"'}]}},responsive:{defaultValue:{value:"false"},description:"",name:"responsive",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const j={title:"Layout/CardGrid",component:n,tags:["autodocs"],argTypes:{columns:{control:{type:"number",min:1,max:12}},gap:{control:"select",options:["tight","ultra"]}}},d=[e.jsx(r,{title:"Node Alpha",children:"Active"},"1"),e.jsx(r,{title:"Node Beta",children:"Pending"},"2"),e.jsx(r,{title:"Node Gamma",children:"Offline"},"3"),e.jsx(r,{title:"Node Delta",children:"Active"},"4"),e.jsx(r,{title:"Node Epsilon",children:"Active"},"5"),e.jsx(r,{title:"Node Zeta",children:"Warning"},"6")],a={args:{children:d,columns:3,gap:"ultra"}},s={args:{children:d,columns:4,gap:"tight"}},t={args:{children:d,responsive:!0,minWidth:"150px",gap:"ultra"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: sampleCards,
    columns: 3,
    gap: 'ultra'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: sampleCards,
    columns: 4,
    gap: 'tight'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: sampleCards,
    responsive: true,
    minWidth: '150px',
    gap: 'ultra'
  }
}`,...t.parameters?.docs?.source}}};const _=["Default","Tight","Responsive"];export{a as Default,t as Responsive,s as Tight,_ as __namedExportsOrder,j as default};
