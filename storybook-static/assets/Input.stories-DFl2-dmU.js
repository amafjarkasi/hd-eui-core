import{I as l}from"./Input-CUzealHL.js";import"./jsx-runtime-u17CrQMm.js";import"./clsx-B-dksMZM.js";const m={title:"Components/Input",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},e={args:{label:"Name",placeholder:"Enter your name"}},a={args:{size:"sm",label:"Small Input",placeholder:"Small text"}},r={args:{label:"Email",value:"user@example.com"}},s={args:{label:"Disabled",disabled:!0,value:"Cannot edit"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    placeholder: 'Enter your name'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Input',
    placeholder: 'Small text'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    value: 'user@example.com'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true,
    value: 'Cannot edit'
  }
}`,...s.parameters?.docs?.source}}};const c=["Default","Small","WithValue","Disabled"];export{e as Default,s as Disabled,a as Small,r as WithValue,c as __namedExportsOrder,m as default};
