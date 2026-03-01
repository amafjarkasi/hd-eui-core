import{j as r}from"./jsx-runtime-u17CrQMm.js";import{B as n}from"./Badge-BeIS55kO.js";import"./clsx-B-dksMZM.js";const c={title:"Data Display/Badge",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","muted"]}}},a={args:{children:"Default",variant:"default"}},e={args:{children:"Primary",variant:"primary"}},t={args:{children:"Muted",variant:"muted"}},s={render:()=>r.jsxs("div",{className:"flex gap-1",children:[r.jsx(n,{variant:"default",children:"New"}),r.jsx(n,{variant:"primary",children:"Active"}),r.jsx(n,{variant:"muted",children:"Archived"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    variant: 'default'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary',
    variant: 'primary'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Muted',
    variant: 'muted'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-1">\r
      <Badge variant="default">New</Badge>\r
      <Badge variant="primary">Active</Badge>\r
      <Badge variant="muted">Archived</Badge>\r
    </div>
}`,...s.parameters?.docs?.source}}};const m=["Default","Primary","Muted","Group"];export{a as Default,s as Group,t as Muted,e as Primary,m as __namedExportsOrder,c as default};
