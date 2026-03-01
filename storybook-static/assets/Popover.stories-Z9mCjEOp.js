import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./index-yRop1keA.js";import{c as N}from"./clsx-B-dksMZM.js";import{B as s}from"./Button-Bmb3JdoM.js";import{S as P}from"./settings-CrweDpjG.js";import{c as k}from"./createLucideIcon-CJb76Z7U.js";import{U as z}from"./user-D2D8aF5h.js";const O=k("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),t=({trigger:d,children:g,isOpen:p,onOpenChange:h,placement:x="bottom",className:f})=>{const[b,v]=c.useState(!1),m=p!==void 0,o=m?p:b,u=r=>{m||v(r),h?.(r)},i=c.useRef(null);c.useEffect(()=>{const r=y=>{i.current&&!i.current.contains(y.target)&&u(!1)};return o&&document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[o]);const j={top:"bottom-full left-1/2 -translate-x-1/2 mb-1",bottom:"top-full left-1/2 -translate-x-1/2 mt-1",left:"right-full top-1/2 -translate-y-1/2 mr-1",right:"left-full top-1/2 -translate-y-1/2 ml-1"};return e.jsxs("div",{ref:i,className:"relative inline-block",children:[e.jsx("div",{onClick:()=>u(!o),className:"cursor-pointer",children:d}),o&&e.jsx("div",{className:N("absolute z-50 p-2 bg-hd-bg-light dark:bg-slate-800 border border-hd-border dark:border-slate-700 rounded-md shadow-lg min-w-[150px] animate-fade-in",j[x],f),children:e.jsx("div",{className:"text-[10px] text-hd-primary dark:text-slate-200",children:g})})]})};try{t.displayName="Popover",t.__docgenInfo={description:"",displayName:"Popover",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const R={title:"Feedback/Popover",component:t,tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","bottom","left","right"]}}},n={args:{trigger:e.jsx(s,{size:"sm",children:"Open Popover"}),children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-bold border-b border-hd-border pb-1",children:"Quick Settings"}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("label",{className:"flex items-center gap-1",children:[e.jsx("input",{type:"checkbox",className:"w-3 h-3"}),e.jsx("span",{children:"Enable notifications"})]}),e.jsxs("label",{className:"flex items-center gap-1",children:[e.jsx("input",{type:"checkbox",className:"w-3 h-3"}),e.jsx("span",{children:"Developer mode"})]})]})]})}},a={args:{trigger:e.jsx("div",{className:"w-8 h-8 rounded-full bg-hd-bg-dark border border-hd-border flex items-center justify-center cursor-pointer hover:bg-hd-border transition-colors",children:e.jsx(z,{size:14,className:"text-hd-muted"})}),children:e.jsxs("div",{className:"flex flex-col min-w-[120px]",children:[e.jsxs("button",{className:"flex items-center gap-2 px-2 py-1.5 hover:bg-hd-bg-dark text-left transition-colors",children:[e.jsx(P,{size:12})," Account Settings"]}),e.jsxs("button",{className:"flex items-center gap-2 px-2 py-1.5 hover:bg-hd-bg-dark text-left transition-colors text-red-500",children:[e.jsx(O,{size:12})," Sign Out"]})]})}},l={render:()=>e.jsxs("div",{className:"flex gap-4 h-64 items-center justify-center",children:[e.jsx(t,{placement:"top",trigger:e.jsx(s,{size:"sm",children:"Top"}),children:"Popover on top"}),e.jsx(t,{placement:"bottom",trigger:e.jsx(s,{size:"sm",children:"Bottom"}),children:"Popover on bottom"}),e.jsx(t,{placement:"left",trigger:e.jsx(s,{size:"sm",children:"Left"}),children:"Popover on left"}),e.jsx(t,{placement:"right",trigger:e.jsx(s,{size:"sm",children:"Right"}),children:"Popover on right"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button size="sm">Open Popover</Button>,
    children: <div className="space-y-2">\r
        <h4 className="font-bold border-b border-hd-border pb-1">Quick Settings</h4>\r
        <div className="space-y-1">\r
          <label className="flex items-center gap-1">\r
            <input type="checkbox" className="w-3 h-3" />\r
            <span>Enable notifications</span>\r
          </label>\r
          <label className="flex items-center gap-1">\r
            <input type="checkbox" className="w-3 h-3" />\r
            <span>Developer mode</span>\r
          </label>\r
        </div>\r
      </div>
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <div className="w-8 h-8 rounded-full bg-hd-bg-dark border border-hd-border flex items-center justify-center cursor-pointer hover:bg-hd-border transition-colors">\r
        <User size={14} className="text-hd-muted" />\r
      </div>,
    children: <div className="flex flex-col min-w-[120px]">\r
        <button className="flex items-center gap-2 px-2 py-1.5 hover:bg-hd-bg-dark text-left transition-colors">\r
          <Settings size={12} /> Account Settings\r
        </button>\r
        <button className="flex items-center gap-2 px-2 py-1.5 hover:bg-hd-bg-dark text-left transition-colors text-red-500">\r
          <LogOut size={12} /> Sign Out\r
        </button>\r
      </div>
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 h-64 items-center justify-center">\r
      <Popover placement="top" trigger={<Button size="sm">Top</Button>}>\r
        Popover on top\r
      </Popover>\r
      <Popover placement="bottom" trigger={<Button size="sm">Bottom</Button>}>\r
        Popover on bottom\r
      </Popover>\r
      <Popover placement="left" trigger={<Button size="sm">Left</Button>}>\r
        Popover on left\r
      </Popover>\r
      <Popover placement="right" trigger={<Button size="sm">Right</Button>}>\r
        Popover on right\r
      </Popover>\r
    </div>
}`,...l.parameters?.docs?.source}}};const V=["Default","Menu","Placements"];export{n as Default,a as Menu,l as Placements,V as __namedExportsOrder,R as default};
