import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./index-yRop1keA.js";import{c as h}from"./clsx-B-dksMZM.js";import{C as b}from"./check-CsfNCubt.js";import{c as y}from"./createLucideIcon-CJb76Z7U.js";const C=y("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),o=({code:a,language:n="javascript",editable:d=!1,onChange:p,className:u,maxHeight:m="300px"})=>{const[g,l]=i.useState(!1),x=()=>{navigator.clipboard.writeText(a),l(!0),setTimeout(()=>l(!1),2e3)};return e.jsxs("div",{className:h("relative flex flex-col w-full border border-hd-border dark:border-slate-700 rounded-md bg-hd-bg-dark dark:bg-slate-950 overflow-hidden font-mono text-[10px]",u),children:[e.jsxs("div",{className:"flex items-center justify-between px-2 py-1 bg-hd-bg-light dark:bg-slate-900 border-b border-hd-border dark:border-slate-700",children:[e.jsx("span",{className:"text-[9px] font-bold text-hd-muted uppercase tracking-widest",children:n}),e.jsx("button",{onClick:x,className:"p-0.5 hover:bg-hd-bg-dark dark:hover:bg-slate-800 rounded text-hd-muted transition-colors",title:"Copy code",children:g?e.jsx(b,{size:10,className:"text-green-500"}):e.jsx(C,{size:10})})]}),e.jsx("div",{className:"relative flex-1 overflow-auto",style:{maxHeight:m},children:d?e.jsx("textarea",{value:a,onChange:f=>p?.(f.target.value),className:"w-full h-full p-2 bg-transparent outline-none resize-none text-hd-primary dark:text-slate-300 whitespace-pre",spellCheck:!1}):e.jsx("pre",{className:"p-2 text-hd-primary dark:text-slate-300 whitespace-pre-wrap break-all",children:e.jsx("code",{children:a})})})]})};try{o.displayName="CodeEditor",o.__docgenInfo={description:"",displayName:"CodeEditor",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},language:{defaultValue:{value:"javascript"},description:"",name:"language",required:!1,type:{name:"string"}},editable:{defaultValue:{value:"false"},description:"",name:"editable",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((code: string) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},maxHeight:{defaultValue:{value:"300px"},description:"",name:"maxHeight",required:!1,type:{name:"string"}}}}}catch{}const S={title:"Data Display/CodeEditor",component:o,tags:["autodocs"]},c=`function initSystem() {
  const config = {
    density: 'hyper',
    theme: 'slate',
    version: '1.0.4'
  };

  console.log('HD-EUI Core Initialized', config);
  return true;
}`,t={args:{code:c,language:"javascript",editable:!1}},r={render:a=>{const[n,d]=i.useState(a.code||c);return e.jsx(o,{...a,code:n,onChange:d,editable:!0,language:"javascript"})}},s={args:{code:`{
  "status": "success",
  "data": {
    "id": "001",
    "metrics": [1.2, 4.5, 9.1]
  }
}`,language:"json"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    code: SAMPLE_CODE,
    language: "javascript",
    editable: false
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [code, setCode] = useState(args.code || SAMPLE_CODE);
    return <CodeEditor {...args} code={code} onChange={setCode} editable language="javascript" />;
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    code: \`{
  "status": "success",
  "data": {
    "id": "001",
    "metrics": [1.2, 4.5, 9.1]
  }
}\`,
    language: "json"
  }
}`,...s.parameters?.docs?.source}}};const w=["ReadOnly","Editable","JSON"];export{r as Editable,s as JSON,t as ReadOnly,w as __namedExportsOrder,S as default};
