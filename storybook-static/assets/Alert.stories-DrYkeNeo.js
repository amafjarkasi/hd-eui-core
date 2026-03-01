import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as S}from"./index-yRop1keA.js";import{c as a}from"./clsx-B-dksMZM.js";import{X as A}from"./x-CKJ9etDQ.js";import{C as N}from"./circle-x-R4Qowl3D.js";import{T as j,C as D,I as z}from"./triangle-alert-QffYlGH-.js";import"./createLucideIcon-CJb76Z7U.js";const f=({variant:r="info",size:g="md",title:h,dismissible:b=!1,onDismiss:t,autoDismiss:u=!1,duration:p=5e3,children:x,className:v})=>{const y=a("border border-hd-border dark:border-hd-dark-border rounded-md p-1 mb-1 relative flex items-start gap-1 transition-all duration-200 animate-fade-in",{"border-l-4 border-l-hd-focus bg-hd-bg-light dark:bg-hd-dark-bg":r==="info","border-l-4 border-l-green-500 bg-green-50 dark:bg-green-900/20":r==="success","border-l-4 border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20":r==="warning","border-l-4 border-l-red-500 bg-red-50 dark:bg-red-900/20":r==="error"}),k={sm:"text-[8px]",md:"text-[9px]"},i="flex-shrink-0 w-3 h-3 mt-0.5",w="flex-1 min-w-0";S.useEffect(()=>{if(u&&t&&p>0){const s=setTimeout(()=>t(),p);return()=>clearTimeout(s)}},[u,t,p]);const C=()=>{const s={className:i,size:12};switch(r){case"info":return e.jsx(z,{...s,className:a(i,"text-hd-focus")});case"success":return e.jsx(D,{...s,className:a(i,"text-green-500")});case"warning":return e.jsx(j,{...s,className:a(i,"text-yellow-500")});case"error":return e.jsx(N,{...s,className:a(i,"text-red-500")});default:return null}};return e.jsxs("div",{className:a(y,k[g],v),role:"alert",children:[C(),e.jsxs("div",{className:w,children:[h&&e.jsx("div",{className:"text-[10px] font-bold text-hd-primary dark:text-hd-dark-text mb-0.5",children:h}),e.jsx("div",{className:"text-hd-primary dark:text-hd-dark-text leading-tight",children:x})]}),(b||u)&&t&&e.jsx("button",{onClick:t,className:"flex-shrink-0 w-3 h-3 text-hd-muted hover:text-hd-primary dark:hover:text-white transition-colors","aria-label":"Dismiss alert",children:e.jsx(A,{size:10})})]})};try{f.displayName="Alert",f.__docgenInfo={description:`💎 Alert: A contextual feedback component for displaying important messages.
Optimized for high-density enterprise layouts with full dark mode support.`,displayName:"Alert",props:{variant:{defaultValue:{value:"info"},description:"The visual style variant of the alert",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},size:{defaultValue:{value:"md"},description:"The size of the alert",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},title:{defaultValue:null,description:"Optional title for the alert",name:"title",required:!1,type:{name:"string"}},dismissible:{defaultValue:{value:"false"},description:"Whether the alert can be dismissed manually",name:"dismissible",required:!1,type:{name:"boolean"}},onDismiss:{defaultValue:null,description:"Callback triggered when the alert is dismissed",name:"onDismiss",required:!1,type:{name:"(() => void)"}},autoDismiss:{defaultValue:{value:"false"},description:"Whether the alert should automatically dismiss after a duration",name:"autoDismiss",required:!1,type:{name:"boolean"}},duration:{defaultValue:{value:"5000"},description:"Duration in milliseconds before auto-dismissing (default: 5000)",name:"duration",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Alert content",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const O={title:"Feedback/Alert",component:f,tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"]},size:{control:"select",options:["sm","md"]}}},n={args:{variant:"info",title:"Information",children:"This is a standard information alert for enterprise users."}},o={args:{variant:"success",title:"Success",children:"Operation completed successfully. All data synced."}},l={args:{variant:"warning",title:"Warning",children:"Your session is about to expire. Please save your work."}},c={args:{variant:"error",title:"Critical Error",children:"Failed to connect to the database cluster. Retrying..."}},d={args:{variant:"info",title:"Dismissible Alert",children:"Click the X to remove this notification.",dismissible:!0,onDismiss:()=>alert("Dismissed!")}},m={args:{variant:"info",size:"sm",title:"Small Alert",children:"Ultra-compact feedback for tight layouts."}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is a standard information alert for enterprise users.'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Operation completed successfully. All data synced.'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Your session is about to expire. Please save your work.'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Critical Error',
    children: 'Failed to connect to the database cluster. Retrying...'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Dismissible Alert',
    children: 'Click the X to remove this notification.',
    dismissible: true,
    onDismiss: () => alert('Dismissed!')
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    size: 'sm',
    title: 'Small Alert',
    children: 'Ultra-compact feedback for tight layouts.'
  }
}`,...m.parameters?.docs?.source}}};const R=["Info","Success","Warning","Error","Dismissible","Small"];export{d as Dismissible,c as Error,n as Info,m as Small,o as Success,l as Warning,R as __namedExportsOrder,O as default};
