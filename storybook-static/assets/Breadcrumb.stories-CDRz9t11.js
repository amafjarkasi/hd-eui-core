import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as i}from"./index-yRop1keA.js";import{c as d}from"./clsx-B-dksMZM.js";const n=({items:r,separator:m="/",currentItemClass:p="text-hd-primary font-semibold",className:u})=>!r||r.length===0?null:e.jsx("nav",{"aria-label":"Breadcrumb",className:d("flex items-center text-[10px] text-hd-muted dark:text-hd-dark-text-muted gap-0.5",u),children:r.map((a,o)=>e.jsxs(i.Fragment,{children:[o>0&&e.jsx("span",{className:"text-hd-border dark:text-hd-dark-border px-0.5",children:m}),a.href?e.jsx("a",{href:a.href,className:"text-hd-primary dark:text-hd-dark-text hover:text-hd-focus dark:hover:text-hd-focus transition-colors cursor-pointer px-1 py-0.5 rounded",children:a.label}):e.jsx("span",{className:d(p,"dark:text-hd-dark-text px-1 py-0.5"),children:a.label})]},o))});try{n.displayName="Breadcrumb",n.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}},separator:{defaultValue:{value:"/"},description:"",name:"separator",required:!1,type:{name:"ReactNode"}},currentItemClass:{defaultValue:{value:"text-hd-primary font-semibold"},description:"",name:"currentItemClass",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const x={title:"Navigation/Breadcrumb",component:n,tags:["autodocs"]},c=[{label:"Home",href:"#"},{label:"Projects",href:"#"},{label:"HD-EUI Core",href:"#"},{label:"Documentation"}],t={args:{items:c}},s={args:{items:c,separator:">"}},l={args:{items:[{label:"System",href:"#"},{label:"Network",href:"#"},{label:"Gateways",href:"#"},{label:"US-East-1",href:"#"},{label:"Cluster-A",href:"#"},{label:"Node-04"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    separator: '>'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'System',
      href: '#'
    }, {
      label: 'Network',
      href: '#'
    }, {
      label: 'Gateways',
      href: '#'
    }, {
      label: 'US-East-1',
      href: '#'
    }, {
      label: 'Cluster-A',
      href: '#'
    }, {
      label: 'Node-04'
    }]
  }
}`,...l.parameters?.docs?.source}}};const g=["Default","CustomSeparator","LongTrail"];export{s as CustomSeparator,t as Default,l as LongTrail,g as __namedExportsOrder,x as default};
