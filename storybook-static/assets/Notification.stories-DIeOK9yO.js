import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./index-yRop1keA.js";import{c as v}from"./clsx-B-dksMZM.js";import{X as y}from"./x-CKJ9etDQ.js";import{I as w,T as b,C as k}from"./triangle-alert-QffYlGH-.js";import{C as N}from"./circle-x-R4Qowl3D.js";import"./createLucideIcon-CJb76Z7U.js";const d=({title:m,message:u,variant:c="info",onClose:a,duration:l=5e3,className:p})=>{x.useEffect(()=>{if(l>0&&a){const r=setTimeout(a,l);return()=>clearTimeout(r)}},[l,a]);const g={info:"border-hd-focus bg-white dark:bg-slate-900 text-hd-primary dark:text-slate-200",success:"border-green-500 bg-white dark:bg-slate-900 text-hd-primary dark:text-slate-200",warning:"border-yellow-500 bg-white dark:bg-slate-900 text-hd-primary dark:text-slate-200",error:"border-red-500 bg-white dark:bg-slate-900 text-hd-primary dark:text-slate-200"},f={info:"text-hd-focus",success:"text-green-500",warning:"text-yellow-500",error:"text-red-500"},h=()=>{const r={size:14,className:f[c]};switch(c){case"success":return e.jsx(k,{...r});case"warning":return e.jsx(b,{...r});case"error":return e.jsx(N,{...r});default:return e.jsx(w,{...r})}};return e.jsxs("div",{className:v("flex items-start gap-2 p-2 border-l-4 rounded shadow-lg transition-all animate-in slide-in-from-right-5",g[c],p),role:"alert",children:[e.jsx("div",{className:"flex-shrink-0 mt-0.5",children:h()}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h4",{className:"text-[11px] font-bold leading-tight",children:m}),u&&e.jsx("p",{className:"text-[10px] text-hd-muted dark:text-slate-400 mt-0.5 leading-snug",children:u})]}),a&&e.jsx("button",{onClick:a,className:"flex-shrink-0 text-hd-muted hover:text-hd-primary dark:hover:text-white transition-colors",children:e.jsx(y,{size:12})})]})};try{d.displayName="Notification",d.__docgenInfo={description:"",displayName:"Notification",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},duration:{defaultValue:{value:"5000"},description:"",name:"duration",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const I={title:"Feedback/Notification",component:d,tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"]}}},s={args:{title:"New Message",message:"You have received a new system notification.",variant:"info"}},t={args:{title:"Data Exported",message:"The report has been successfully generated and is ready for download.",variant:"success"}},n={args:{title:"Low Disk Space",message:"The server storage is reaching its capacity. Please clear some space.",variant:"warning"}},i={args:{title:"Connection Failed",message:"Unable to reach the authentication server. Please check your network.",variant:"error"}},o={args:{title:"Simple Alert",variant:"info"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'New Message',
    message: 'You have received a new system notification.',
    variant: 'info'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Data Exported',
    message: 'The report has been successfully generated and is ready for download.',
    variant: 'success'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Low Disk Space',
    message: 'The server storage is reaching its capacity. Please clear some space.',
    variant: 'warning'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Connection Failed',
    message: 'Unable to reach the authentication server. Please check your network.',
    variant: 'error'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Simple Alert',
    variant: 'info'
  }
}`,...o.parameters?.docs?.source}}};const V=["Info","Success","Warning","Error","NoMessage"];export{i as Error,s as Info,o as NoMessage,t as Success,n as Warning,V as __namedExportsOrder,I as default};
