import{j as o}from"./jsx-runtime-u17CrQMm.js";import{c}from"./clsx-B-dksMZM.js";const l=({type:n="ul",items:p,divided:i=!1,variant:m="normal",className:u})=>{const y="list-none space-y-1 text-hd-primary dark:text-hd-dark-text",v=i?"divide-y divide-hd-border dark:divide-hd-dark-border":"",x=c({dense:"px-1 py-0.5 text-[9px] space-y-0.5",normal:"px-2 py-1 text-[10px] space-y-1",relaxed:"px-3 py-1.5 text-[11px] space-y-2"}[m],i?"first:pt-0 last:pb-0":""),f=c(y,v,u),g=n==="ol"?"ol":"ul";return o.jsx(g,{className:f,children:p.map((d,k)=>o.jsxs("li",{className:x,children:[n==="ol"&&o.jsxs("span",{className:"mr-1",children:[k+1,"."]}),d.content]},d.key))})};try{l.displayName="List",l.__docgenInfo={description:"",displayName:"List",props:{type:{defaultValue:{value:"ul"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"ul"'},{value:'"ol"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ListItem[]"}},divided:{defaultValue:{value:"false"},description:"",name:"divided",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"normal"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"dense"'},{value:'"normal"'},{value:'"relaxed"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const N={title:"Data Display/List",component:l,tags:["autodocs"],argTypes:{variant:{control:"select",options:["dense","normal","relaxed"]},type:{control:"select",options:["ul","ol"]}}},r=[{key:"1",content:"System core initialized"},{key:"2",content:"Network protocols established"},{key:"3",content:"Database cluster online"},{key:"4",content:"Security audit completed"}],e={args:{items:r,variant:"normal"}},a={args:{items:r,variant:"dense"}},s={args:{items:r,divided:!0}},t={args:{items:r,type:"ol"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    variant: 'normal'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    variant: 'dense'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    divided: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    type: 'ol'
  }
}`,...t.parameters?.docs?.source}}};const b=["Default","Dense","Divided","Ordered"];export{e as Default,a as Dense,s as Divided,t as Ordered,b as __namedExportsOrder,N as default};
