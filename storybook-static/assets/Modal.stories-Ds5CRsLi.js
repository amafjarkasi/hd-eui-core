import{j as e}from"./jsx-runtime-u17CrQMm.js";import{M as a}from"./Modal-DJJ26GoR.js";import{r as i}from"./index-yRop1keA.js";import{B as r}from"./Button-Bmb3JdoM.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-CJb76Z7U.js";const f={title:"Layout/Modal",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},n={render:()=>{const[o,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>s(!0),children:"Open Modal"}),e.jsx(a,{open:o,onClose:()=>s(!1),title:"System Configuration",footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"secondary",size:"sm",onClick:()=>s(!1),children:"Cancel"}),e.jsx(r,{variant:"primary",size:"sm",onClick:()=>s(!1),children:"Save Changes"})]}),children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Configure your high-density environment variables below."}),e.jsx("div",{className:"p-2 bg-hd-bg-dark rounded border border-hd-border",children:e.jsx("code",{className:"text-[9px]",children:"HD_MODE=true"})})]})})]})}},t={render:()=>{const[o,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>s(!0),children:"Small Modal"}),e.jsxs(a,{open:o,onClose:()=>s(!1),size:"sm",title:"Delete Confirmation",children:[e.jsx("p",{children:"Are you sure you want to delete this record? This action is irreversible."}),e.jsxs("div",{className:"flex justify-end gap-1 mt-4",children:[e.jsx(r,{variant:"secondary",size:"sm",onClick:()=>s(!1),children:"No"}),e.jsx(r,{variant:"primary",size:"sm",onClick:()=>s(!1),children:"Yes, Delete"})]})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>\r
        <Modal open={isOpen} onClose={() => setIsOpen(false)} title="System Configuration" footer={<>\r
              <Button variant="secondary" size="sm" onClick={() => setIsOpen(false)}>Cancel</Button>\r
              <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>Save Changes</Button>\r
            </>}>\r
          <div className="space-y-2">\r
            <p>Configure your high-density environment variables below.</p>\r
            <div className="p-2 bg-hd-bg-dark rounded border border-hd-border">\r
              <code className="text-[9px]">HD_MODE=true</code>\r
            </div>\r
          </div>\r
        </Modal>\r
      </>;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Small Modal</Button>\r
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="sm" title="Delete Confirmation">\r
          <p>Are you sure you want to delete this record? This action is irreversible.</p>\r
          <div className="flex justify-end gap-1 mt-4">\r
            <Button variant="secondary" size="sm" onClick={() => setIsOpen(false)}>No</Button>\r
            <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>Yes, Delete</Button>\r
          </div>\r
        </Modal>\r
      </>;
  }
}`,...t.parameters?.docs?.source}}};const h=["Default","Small"];export{n as Default,t as Small,h as __namedExportsOrder,f as default};
