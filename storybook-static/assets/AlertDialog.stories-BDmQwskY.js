import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as i}from"./Button-Bmb3JdoM.js";import{M as g}from"./Modal-DJJ26GoR.js";import{r as c}from"./index-yRop1keA.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-CJb76Z7U.js";const a=({open:n,onOpenChange:t,title:d,message:u,actions:l=[],className:m})=>{const p=()=>t(!1);return e.jsx(g,{open:n,onClose:p,size:"sm",className:m,children:e.jsxs("div",{className:"px-2 py-1 dark:bg-hd-dark-bg",children:[e.jsx("h3",{className:"text-[11px] font-bold text-hd-primary dark:text-hd-dark-text mb-1",children:d}),e.jsx("p",{className:"text-[10px] text-hd-muted dark:text-hd-dark-text-muted mb-2",children:u}),e.jsx("div",{className:"flex gap-1 justify-end",children:l.length>0?l.map((s,h)=>e.jsx(i,{variant:s.variant||"secondary",size:"sm",onClick:s.onClick,disabled:s.disabled,className:"px-2 py-1 text-[9px]",children:s.label},h)):e.jsx(i,{variant:"primary",size:"sm",onClick:p,className:"px-2 py-1 text-[9px]",children:"OK"})})]})})};try{a.displayName="AlertDialog",a.__docgenInfo={description:"",displayName:"AlertDialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!0,type:{name:"(open: boolean) => void"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},actions:{defaultValue:{value:"[]"},description:"",name:"actions",required:!1,type:{name:"AlertDialogAction[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const k={title:"Feedback/AlertDialog",component:a,tags:["autodocs"]},r={render:()=>{const[n,t]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>t(!0),children:"Open Alert Dialog"}),e.jsx(a,{open:n,onOpenChange:t,title:"Confirm Action",message:"Are you sure you want to proceed with this operation? This action cannot be undone.",actions:[{label:"Cancel",variant:"secondary",onClick:()=>t(!1)},{label:"Confirm",variant:"primary",onClick:()=>t(!1)}]})]})}},o={render:()=>{const[n,t]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>t(!0),children:"Show Notification"}),e.jsx(a,{open:n,onOpenChange:t,title:"Update Successful",message:"The system has been updated to the latest version."})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Alert Dialog</Button>\r
        <AlertDialog open={isOpen} onOpenChange={setIsOpen} title="Confirm Action" message="Are you sure you want to proceed with this operation? This action cannot be undone." actions={[{
        label: 'Cancel',
        variant: 'secondary',
        onClick: () => setIsOpen(false)
      }, {
        label: 'Confirm',
        variant: 'primary',
        onClick: () => setIsOpen(false)
      }]} />\r
      </>;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Show Notification</Button>\r
        <AlertDialog open={isOpen} onOpenChange={setIsOpen} title="Update Successful" message="The system has been updated to the latest version." />\r
      </>;
  }
}`,...o.parameters?.docs?.source}}};const j=["Default","SingleAction"];export{r as Default,o as SingleAction,j as __namedExportsOrder,k as default};
