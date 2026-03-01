import{j as n}from"./jsx-runtime-u17CrQMm.js";import{C as o}from"./Checkbox-C2TwjKm0.js";import{r as d}from"./index-yRop1keA.js";import"./clsx-B-dksMZM.js";import"./check-CsfNCubt.js";import"./createLucideIcon-CJb76Z7U.js";const h={title:"Form/Checkbox",component:o,tags:["autodocs"]},e={args:{label:"Accept terms and conditions"}},r={args:{label:"Notifications enabled",checked:!0}},a={args:{label:"Read-only option",disabled:!0}},t={render:()=>{const[s,c]=d.useState(!1);return n.jsx(o,{label:`Status: ${s?"Active":"Inactive"}`,checked:s,onChange:c})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notifications enabled',
    checked: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Read-only option',
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox label={\`Status: \${checked ? 'Active' : 'Inactive'}\`} checked={checked} onChange={setChecked} />;
  }
}`,...t.parameters?.docs?.source}}};const k=["Default","Checked","Disabled","Interactive"];export{r as Checked,e as Default,a as Disabled,t as Interactive,k as __namedExportsOrder,h as default};
