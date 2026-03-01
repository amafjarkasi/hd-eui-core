import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m,R as N}from"./index-yRop1keA.js";import{c as d}from"./clsx-B-dksMZM.js";const c=({steps:s,currentStep:a=0,onStepClick:h,className:b,vertical:n=!1})=>{const[l,S]=m.useState(a),f=t=>{S(t),h?.(t)},g=d("flex gap-0.5",n?"flex-col items-start":"flex-row items-center",b),C=d("flex items-center gap-0.5 cursor-pointer",n?"mb-0.5":""),v=(t,r)=>d("w-2 h-2 rounded-full border border-hd-border flex items-center justify-center text-[7px] font-bold transition-colors",r?"bg-hd-primary text-white border-hd-primary":t?"bg-hd-focus text-white border-hd-focus":"bg-hd-bg-light dark:bg-hd-dark-bg text-hd-muted dark:text-hd-dark-text-muted border-hd-border dark:border-hd-dark-border"),x=t=>d("text-[8px] leading-none",t?"font-bold text-hd-primary dark:text-hd-dark-text":"text-hd-muted dark:text-hd-dark-text-muted"),k="flex-1 h-0.5 bg-hd-border dark:bg-hd-dark-border";return e.jsx("div",{className:g,children:s.map((t,r)=>e.jsxs(N.Fragment,{children:[e.jsxs("div",{className:C,onClick:()=>f(r),children:[e.jsx("div",{className:v(l===r,t.completed||r<l),children:t.completed||r<l?"✓":r+1}),!n&&e.jsx("div",{className:x(l===r),children:t.label})]}),n&&e.jsx("div",{className:x(l===r),children:t.label}),!n&&r<s.length-1&&e.jsx("div",{className:k})]},r))})};try{c.displayName="Stepper",c.__docgenInfo={description:"",displayName:"Stepper",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"StepperStep[]"}},currentStep:{defaultValue:{value:"0"},description:"",name:"currentStep",required:!1,type:{name:"number"}},onStepClick:{defaultValue:null,description:"",name:"onStepClick",required:!1,type:{name:"((index: number) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},vertical:{defaultValue:{value:"false"},description:"",name:"vertical",required:!1,type:{name:"boolean"}}}}}catch{}const w={title:"Navigation/Stepper",component:c,tags:["autodocs"]},i=[{label:"Initialization"},{label:"Security Scan"},{label:"Database Sync"},{label:"Deployment"}],o={render:()=>{const[s,a]=m.useState(1);return e.jsxs("div",{className:"w-full max-w-2xl",children:[e.jsx(c,{steps:i,currentStep:s,onStepClick:a}),e.jsxs("div",{className:"mt-4 text-[10px] text-hd-muted",children:["Current Phase: ",i[s].label]})]})}},p={render:()=>{const[s,a]=m.useState(0);return e.jsx("div",{className:"h-64",children:e.jsx(c,{steps:i,currentStep:s,onStepClick:a,vertical:!0})})}},u={args:{steps:i.map(s=>({...s,completed:!0})),currentStep:3}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(1);
    return <div className="w-full max-w-2xl">\r
        <Stepper steps={steps} currentStep={current} onStepClick={setCurrent} />\r
        <div className="mt-4 text-[10px] text-hd-muted">\r
          Current Phase: {steps[current].label}\r
        </div>\r
      </div>;
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(0);
    return <div className="h-64">\r
        <Stepper steps={steps} currentStep={current} onStepClick={setCurrent} vertical />\r
      </div>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    steps: steps.map(s => ({
      ...s,
      completed: true
    })),
    currentStep: 3
  }
}`,...u.parameters?.docs?.source}}};const V=["Default","Vertical","Completed"];export{u as Completed,o as Default,p as Vertical,V as __namedExportsOrder,w as default};
