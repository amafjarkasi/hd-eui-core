import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./index-yRop1keA.js";import{c as R}from"./clsx-B-dksMZM.js";import{c as x}from"./createLucideIcon-CJb76Z7U.js";import{X as C}from"./x-CKJ9etDQ.js";const I=x("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);const U=x("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);const V=x("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]),p=({title:u,defaultPosition:v={x:100,y:100},defaultSize:N={width:300,height:400},onClose:f,children:w,className:j})=>{const[i,k]=s.useState(v),[n,z]=s.useState(N),[l,g]=s.useState(!1),[m,b]=s.useState(!1),[r,S]=s.useState(!1),M=s.useRef(null),a=s.useRef({x:0,y:0}),h=s.useRef({width:0,height:0}),D=t=>{t.target.closest(".drag-handle")&&(g(!0),a.current={x:t.clientX-i.x,y:t.clientY-i.y})},P=t=>{t.stopPropagation(),b(!0),a.current={x:t.clientX,y:t.clientY},h.current={width:n.width,height:n.height}};return s.useEffect(()=>{const t=o=>{if(l&&k({x:o.clientX-a.current.x,y:o.clientY-a.current.y}),m){const E=o.clientX-a.current.x,_=o.clientY-a.current.y;z({width:Math.max(200,h.current.width+E),height:Math.max(100,h.current.height+_)})}},y=()=>{g(!1),b(!1)};return(l||m)&&(window.addEventListener("mousemove",t),window.addEventListener("mouseup",y)),()=>{window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",y)}},[l,m]),e.jsxs("div",{ref:M,className:R("fixed z-50 flex flex-col bg-hd-bg-light dark:bg-slate-900 border border-hd-border dark:border-slate-700 rounded-md shadow-xl overflow-hidden transition-shadow",l&&"shadow-2xl ring-1 ring-hd-focus",j),style:{left:i.x,top:i.y,width:n.width,height:r?"auto":n.height},onMouseDown:D,children:[e.jsxs("div",{className:"drag-handle flex items-center justify-between px-2 py-1 bg-hd-bg-dark dark:bg-slate-800 border-b border-hd-border dark:border-slate-700 cursor-move select-none",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(I,{size:10,className:"text-hd-muted"}),e.jsx("span",{className:"text-[10px] font-bold text-hd-primary dark:text-slate-200 uppercase tracking-tight",children:u||"Panel"})]}),e.jsxs("div",{className:"flex items-center gap-0.5",children:[e.jsx("button",{onClick:()=>S(!r),className:"p-0.5 hover:bg-hd-bg-light dark:hover:bg-slate-700 rounded text-hd-muted",children:r?e.jsx(U,{size:10}):e.jsx(V,{size:10})}),f&&e.jsx("button",{onClick:f,className:"p-0.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded text-hd-muted hover:text-red-500",children:e.jsx(C,{size:10})})]})]}),!r&&e.jsx("div",{className:"flex-1 overflow-auto p-2 dark:text-slate-300 text-[11px]",children:w}),!r&&e.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 cursor-nwse-resize",onMouseDown:P,style:{background:"linear-gradient(135deg, transparent 50%, #d8dcde 50%)"}})]})};try{p.displayName="DraggablePanel",p.__docgenInfo={description:"",displayName:"DraggablePanel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},defaultPosition:{defaultValue:{value:"{ x: 100, y: 100 }"},description:"",name:"defaultPosition",required:!1,type:{name:"{ x: number; y: number; }"}},defaultSize:{defaultValue:{value:"{ width: 300, height: 400 }"},description:"",name:"defaultSize",required:!1,type:{name:"{ width: number; height: number; }"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const B={title:"Heavyweight/DraggablePanel",component:p,tags:["autodocs"],argTypes:{title:{control:"text"}}},d={args:{title:"Floating Monitor",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between border-b border-hd-border pb-1",children:[e.jsx("span",{className:"text-hd-muted",children:"CPU Usage"}),e.jsx("span",{className:"font-mono text-hd-focus",children:"42%"})]}),e.jsxs("div",{className:"flex justify-between border-b border-hd-border pb-1",children:[e.jsx("span",{className:"text-hd-muted",children:"Memory"}),e.jsx("span",{className:"font-mono text-hd-focus",children:"1.2GB / 16GB"})]}),e.jsxs("div",{className:"flex justify-between border-b border-hd-border pb-1",children:[e.jsx("span",{className:"text-hd-muted",children:"Uptime"}),e.jsx("span",{className:"font-mono text-hd-focus",children:"12d 4h 32m"})]}),e.jsx("p",{className:"mt-2 text-[9px] text-hd-muted italic",children:"Drag the header to move, or the bottom-right corner to resize this panel."})]})}},c={args:{title:"Settings",defaultPosition:{x:400,y:200},defaultSize:{width:250,height:150},children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("label",{className:"flex items-center gap-1",children:[e.jsx("input",{type:"checkbox",className:"w-3 h-3"}),e.jsx("span",{children:"Enable real-time updates"})]}),e.jsxs("label",{className:"flex items-center gap-1",children:[e.jsx("input",{type:"checkbox",className:"w-3 h-3"}),e.jsx("span",{children:"Show system tray icon"})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Floating Monitor',
    children: <div className="space-y-2">\r
        <div className="flex justify-between border-b border-hd-border pb-1">\r
          <span className="text-hd-muted">CPU Usage</span>\r
          <span className="font-mono text-hd-focus">42%</span>\r
        </div>\r
        <div className="flex justify-between border-b border-hd-border pb-1">\r
          <span className="text-hd-muted">Memory</span>\r
          <span className="font-mono text-hd-focus">1.2GB / 16GB</span>\r
        </div>\r
        <div className="flex justify-between border-b border-hd-border pb-1">\r
          <span className="text-hd-muted">Uptime</span>\r
          <span className="font-mono text-hd-focus">12d 4h 32m</span>\r
        </div>\r
        <p className="mt-2 text-[9px] text-hd-muted italic">\r
          Drag the header to move, or the bottom-right corner to resize this panel.\r
        </p>\r
      </div>
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Settings',
    defaultPosition: {
      x: 400,
      y: 200
    },
    defaultSize: {
      width: 250,
      height: 150
    },
    children: <div className="flex flex-col gap-2">\r
        <label className="flex items-center gap-1">\r
          <input type="checkbox" className="w-3 h-3" />\r
          <span>Enable real-time updates</span>\r
        </label>\r
        <label className="flex items-center gap-1">\r
          <input type="checkbox" className="w-3 h-3" />\r
          <span>Show system tray icon</span>\r
        </label>\r
      </div>
  }
}`,...c.parameters?.docs?.source}}};const F=["Default","CustomInitialState"];export{c as CustomInitialState,d as Default,F as __namedExportsOrder,B as default};
