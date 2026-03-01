import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as i}from"./Card-DGlspBjB.js";import{B as o}from"./Button-Bmb3JdoM.js";import"./clsx-B-dksMZM.js";import"./index-yRop1keA.js";import"./createLucideIcon-CJb76Z7U.js";const h={title:"Layout/Card",component:i,tags:["autodocs"],argTypes:{title:{control:"text",description:"Card header title"},footer:{control:"text",description:"Card footer content"}}},t={args:{title:"Card Title",children:"This is the card body content with hyper-dense spacing."}},r={args:{title:"Dashboard Card",children:"Card content goes here with tight padding.",footer:"Last updated: 2 mins ago"}},a={args:{children:"Card without a title header."}},s={args:{title:"User Profile",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-[10px] text-hd-muted",children:"Name: John Doe"}),e.jsx("p",{className:"text-[10px] text-hd-muted",children:"Email: john@example.com"}),e.jsxs("div",{className:"flex gap-1 mt-2",children:[e.jsx(o,{size:"sm",variant:"primary",children:"Edit"}),e.jsx(o,{size:"sm",variant:"outline",children:"Delete"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    children: 'This is the card body content with hyper-dense spacing.'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Dashboard Card',
    children: 'Card content goes here with tight padding.',
    footer: 'Last updated: 2 mins ago'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Card without a title header.'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'User Profile',
    children: <div className="space-y-2">\r
        <p className="text-[10px] text-hd-muted">Name: John Doe</p>\r
        <p className="text-[10px] text-hd-muted">Email: john@example.com</p>\r
        <div className="flex gap-1 mt-2">\r
          <Button size="sm" variant="primary">Edit</Button>\r
          <Button size="sm" variant="outline">Delete</Button>\r
        </div>\r
      </div>
  }
}`,...s.parameters?.docs?.source}}};const u=["Default","WithFooter","NoTitle","WithActions"];export{t as Default,a as NoTitle,s as WithActions,r as WithFooter,u as __namedExportsOrder,h as default};
