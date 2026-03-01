import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c}from"./clsx-B-dksMZM.js";import{B as n}from"./Button-Bmb3JdoM.js";import{c as x}from"./createLucideIcon-CJb76Z7U.js";import{S as g}from"./settings-CrweDpjG.js";import{U as u}from"./user-D2D8aF5h.js";import"./index-yRop1keA.js";const f=x("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]),l=({logo:t,links:m=[],rightContent:d,className:p})=>e.jsxs("header",{className:c("flex items-center justify-between h-8 px-2 bg-hd-bg-light dark:bg-hd-dark-bg border-b border-hd-border dark:border-hd-dark-border transition-colors",p),children:[e.jsxs("div",{className:"flex items-center gap-2",children:[t&&e.jsx("div",{className:"flex-shrink-0",children:t}),e.jsx("nav",{className:"flex items-center h-full",children:m.map((o,h)=>e.jsx("a",{href:o.href,className:c("flex items-center h-8 px-2 text-[10px] font-medium transition-colors border-b-2",o.active?"text-hd-focus border-hd-focus":"text-hd-primary dark:text-hd-dark-text border-transparent hover:text-hd-focus hover:bg-hd-bg-dark dark:hover:bg-hd-dark-bg-alt"),children:o.label},h))})]}),d&&e.jsx("div",{className:"flex items-center gap-1",children:d})]});try{l.displayName="Navbar",l.__docgenInfo={description:"",displayName:"Navbar",props:{logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"ReactNode"}},links:{defaultValue:{value:"[]"},description:"",name:"links",required:!1,type:{name:"NavbarLink[]"}},rightContent:{defaultValue:null,description:"",name:"rightContent",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const _={title:"Navigation/Navbar",component:l,tags:["autodocs"]},i=[{label:"Dashboard",href:"#",active:!0},{label:"Analytics",href:"#"},{label:"Users",href:"#"},{label:"Logs",href:"#"}],s={args:{logo:e.jsx("div",{className:"font-bold text-[11px] text-hd-focus",children:"HD-EUI"}),links:i,rightContent:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(n,{variant:"ghost",size:"sm",className:"p-1",children:e.jsx(f,{size:12})}),e.jsx(n,{variant:"ghost",size:"sm",className:"p-1",children:e.jsx(g,{size:12})}),e.jsx("div",{className:"w-px h-4 bg-hd-border mx-1"}),e.jsx(n,{variant:"ghost",size:"sm",className:"p-1",children:e.jsx(u,{size:12})})]})}},a={args:{links:i}},r={args:{logo:e.jsx("div",{className:"font-bold text-[11px]",children:"APP"}),links:i.slice(0,2)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <div className="font-bold text-[11px] text-hd-focus">HD-EUI</div>,
    links,
    rightContent: <div className="flex items-center gap-1">\r
        <Button variant="ghost" size="sm" className="p-1"><Bell size={12} /></Button>\r
        <Button variant="ghost" size="sm" className="p-1"><Settings size={12} /></Button>\r
        <div className="w-px h-4 bg-hd-border mx-1" />\r
        <Button variant="ghost" size="sm" className="p-1"><User size={12} /></Button>\r
      </div>
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    links
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <div className="font-bold text-[11px]">APP</div>,
    links: links.slice(0, 2)
  }
}`,...r.parameters?.docs?.source}}};const S=["Default","NoLogo","Simple"];export{s as Default,a as NoLogo,r as Simple,S as __namedExportsOrder,_ as default};
