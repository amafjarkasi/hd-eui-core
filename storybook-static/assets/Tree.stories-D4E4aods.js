import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as N}from"./index-yRop1keA.js";import{c as f}from"./clsx-B-dksMZM.js";import{C as D}from"./chevron-down-Du_Kurbo.js";import{C as z}from"./chevron-right-CbiIz-By.js";import{c as h}from"./createLucideIcon-CJb76Z7U.js";import{S as w}from"./shield-Tc3ireJe.js";import{D as C}from"./database-qb_EWIF1.js";import{S as T}from"./settings-CrweDpjG.js";const I=h("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);const M=h("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);const _=h("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),p=({nodes:a,onSelect:m,defaultExpanded:u=!1,className:S,showIcons:b=!0})=>{const[v,j]=N.useState(new Set(a.filter(e=>u).map(e=>e.id))),k=e=>{j(d=>{const s=new Set(d);return s.has(e)?s.delete(e):s.add(e),s})},g=e=>{e.disabled||m?.(e)},y=(e,d=0)=>{const s=v.has(e.id),l=e.children&&e.children.length>0,E=()=>e.icon?e.icon:b?e.type==="folder"||l?t.jsx(_,{size:10,className:"text-hd-focus opacity-70"}):t.jsx(M,{size:10,className:"text-hd-muted opacity-70"}):null;return t.jsxs("div",{className:"tree-node select-none",children:[t.jsxs("div",{className:f("flex items-center px-1 py-0.5 text-[9px] text-hd-primary dark:text-slate-300 cursor-pointer hover:bg-hd-bg-dark dark:hover:bg-slate-800 transition-colors","focus:outline-none focus:ring-1 focus:ring-hd-focus",e.disabled&&"opacity-50 cursor-not-allowed"),style:{paddingLeft:`${d*10+4}px`},onClick:()=>g(e),tabIndex:0,onKeyDown:r=>r.key==="Enter"&&g(e),children:[t.jsx("div",{className:"w-3 h-3 flex items-center justify-center mr-0.5",children:l&&t.jsx("button",{onClick:r=>{r.stopPropagation(),k(e.id)},className:"p-0.5 text-hd-muted hover:text-hd-primary transition-colors",children:s?t.jsx(D,{size:8,strokeWidth:3}):t.jsx(z,{size:8,strokeWidth:3})})}),t.jsxs("div",{className:"flex items-center gap-1",children:[E(),t.jsx("span",{className:f("truncate",!l&&!e.icon&&!b&&"ml-3"),children:e.label})]})]}),l&&s&&t.jsx("div",{className:"animate-fade-in",children:e.children.map(r=>y(r,d+1))})]},e.id)};return t.jsx("div",{className:f("tree border border-hd-border dark:border-slate-700 rounded-md overflow-hidden bg-hd-bg-light dark:bg-slate-900",S),children:a.map(e=>y(e))})};try{p.displayName="Tree",p.__docgenInfo={description:"",displayName:"Tree",props:{nodes:{defaultValue:null,description:"",name:"nodes",required:!0,type:{name:"TreeNode[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((node: TreeNode) => void)"}},defaultExpanded:{defaultValue:{value:"false"},description:"",name:"defaultExpanded",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},showIcons:{defaultValue:{value:"true"},description:"",name:"showIcons",required:!1,type:{name:"boolean"}}}}}catch{}const G={title:"Data Display/Tree",component:p,tags:["autodocs"]},x=[{id:"src",label:"src",type:"folder",children:[{id:"components",label:"components",type:"folder",children:[{id:"button",label:"Button.tsx",type:"file"},{id:"input",label:"Input.tsx",type:"file"},{id:"table",label:"Table.tsx",type:"file"}]},{id:"index.ts",label:"index.ts",type:"file"},{id:"theme.ts",label:"theme.ts",type:"file"}]},{id:"config",label:"config",type:"folder",children:[{id:"tailwind",label:"tailwind.config.js",type:"file"},{id:"tsconfig",label:"tsconfig.json",type:"file"}]},{id:"readme",label:"README.md",type:"file"}],n={args:{nodes:x}},o={args:{nodes:x,defaultExpanded:!0}},i={args:{nodes:[{id:"db",label:"Production Database",icon:t.jsx(C,{size:10,className:"text-hd-focus"}),children:[{id:"users",label:"Users Table",icon:t.jsx(w,{size:10})},{id:"logs",label:"System Logs",icon:t.jsx(I,{size:10})}]},{id:"settings",label:"Global Settings",icon:t.jsx(T,{size:10})}],defaultExpanded:!0}},c={render:()=>{const[a,m]=N.useState(null);return t.jsxs("div",{className:"w-64",children:[t.jsx(p,{nodes:x,onSelect:u=>m(u.id)}),t.jsxs("div",{className:"mt-2 text-[10px] text-hd-muted",children:["Selected Node ID: ",t.jsx("span",{className:"font-mono text-hd-focus",children:a||"None"})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    nodes
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    nodes,
    defaultExpanded: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: [{
      id: 'db',
      label: 'Production Database',
      icon: <Database size={10} className="text-hd-focus" />,
      children: [{
        id: 'users',
        label: 'Users Table',
        icon: <Shield size={10} />
      }, {
        id: 'logs',
        label: 'System Logs',
        icon: <FileCode size={10} />
      }]
    }, {
      id: 'settings',
      label: 'Global Settings',
      icon: <Settings size={10} />
    }],
    defaultExpanded: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    return <div className="w-64">\r
        <Tree nodes={nodes} onSelect={node => setSelected(node.id)} />\r
        <div className="mt-2 text-[10px] text-hd-muted">\r
          Selected Node ID: <span className="font-mono text-hd-focus">{selected || 'None'}</span>\r
        </div>\r
      </div>;
  }
}`,...c.parameters?.docs?.source}}};const U=["Default","ExpandedByDefault","CustomIcons","Interactive"];export{i as CustomIcons,n as Default,o as ExpandedByDefault,c as Interactive,U as __namedExportsOrder,G as default};
