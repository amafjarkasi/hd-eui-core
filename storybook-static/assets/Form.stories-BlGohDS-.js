import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as s}from"./index-yRop1keA.js";import{c as w}from"./clsx-B-dksMZM.js";import{I as l}from"./Input-BcwGPE_W.js";import{B as u}from"./Button-Bmb3JdoM.js";import{C}from"./Checkbox-C2TwjKm0.js";import"./createLucideIcon-CJb76Z7U.js";import"./check-CsfNCubt.js";const I=s.createContext(void 0),o=({onSubmit:n,children:f,className:N,validationSchema:p})=>{const[i,b]=s.useState({}),[m,S]=s.useState({}),[g,k]=s.useState({}),v=s.useCallback(a=>{b(r=>({...r,[a.name]:a}))},[]),x=s.useCallback(a=>{b(r=>{const t={...r};return delete t[a.name],t})},[]),h=s.useCallback(a=>{const r=p?.[a.name];return r?r.required&&(!a.value||a.value.trim()==="")?r.message||`${a.name} is required`:r.pattern&&a.value&&!r.pattern.test(a.value)?r.message||`${a.name} is invalid`:"":""},[p]),j=s.useCallback(()=>{const a={};return Object.values(i).forEach(r=>{const t=h(r);t&&(a[r.name]=t)}),S(a),Object.keys(a).length===0},[i,h]),y=s.useCallback(a=>{if(a.preventDefault(),j()){const r={};Object.values(i).forEach(t=>{t.value!==void 0&&(r[t.name]=t.value)}),n?.(r)}},[j,n,i]),F=s.useMemo(()=>({register:v,unregister:x,errors:m,touched:g}),[v,x,m,g]);return e.jsx(I.Provider,{value:F,children:e.jsxs("form",{onSubmit:y,className:w("space-y-1",N),children:[f,Object.keys(m).length>0&&e.jsx("div",{className:"mt-2 p-1 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md",children:e.jsx("ul",{className:"text-[8px] text-red-600 dark:text-red-400 list-disc pl-4",children:Object.entries(m).map(([a,r])=>e.jsx("li",{children:r},a))})})]})})};try{o.displayName="Form",o.__docgenInfo={description:"",displayName:"Form",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"((data: Record<string, string>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},validationSchema:{defaultValue:null,description:"",name:"validationSchema",required:!1,type:{name:"Record<string, { required?: boolean; pattern?: RegExp; message?: string | undefined; }> | undefined"}}}}}catch{}const J={title:"Form/Form",component:o,tags:["autodocs"]},d={render:()=>e.jsxs(o,{className:"w-80",onSubmit:n=>alert(JSON.stringify(n,null,2)),validationSchema:{email:{required:!0,pattern:/\S+@\S+\.\S+/,message:"Invalid email address"},password:{required:!0,message:"Password is required"}},children:[e.jsx(l,{name:"email",label:"Email Address",placeholder:"admin@enterprise.com"}),e.jsx(l,{name:"password",label:"Password",type:"password",placeholder:"••••••••"}),e.jsx("div",{className:"pt-2",children:e.jsx(u,{type:"submit",fullWidth:!0,children:"Sign In"})})]})},c={render:()=>e.jsxs(o,{className:"w-96",onSubmit:n=>console.log("Form Submitted:",n),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(l,{name:"firstName",label:"First Name"}),e.jsx(l,{name:"lastName",label:"Last Name"})]}),e.jsx(l,{name:"company",label:"Organization"}),e.jsx(l,{name:"role",label:"Job Title"}),e.jsx("div",{className:"py-1",children:e.jsx(C,{name:"terms",label:"I agree to the enterprise service level agreement"})}),e.jsxs("div",{className:"flex justify-end gap-1 mt-2",children:[e.jsx(u,{variant:"secondary",size:"sm",children:"Cancel"}),e.jsx(u,{type:"submit",size:"sm",children:"Save Changes"})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Form className="w-80" onSubmit={data => alert(JSON.stringify(data, null, 2))} validationSchema={{
    email: {
      required: true,
      pattern: /\\S+@\\S+\\.\\S+/,
      message: 'Invalid email address'
    },
    password: {
      required: true,
      message: 'Password is required'
    }
  }}>\r
      <Input name="email" label="Email Address" placeholder="admin@enterprise.com" />\r
      <Input name="password" label="Password" type="password" placeholder="••••••••" />\r
      <div className="pt-2">\r
        <Button type="submit" fullWidth>Sign In</Button>\r
      </div>\r
    </Form>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Form className="w-96" onSubmit={data => console.log('Form Submitted:', data)}>\r
      <div className="grid grid-cols-2 gap-2">\r
        <Input name="firstName" label="First Name" />\r
        <Input name="lastName" label="Last Name" />\r
      </div>\r
      <Input name="company" label="Organization" />\r
      <Input name="role" label="Job Title" />\r
      <div className="py-1">\r
        <Checkbox name="terms" label="I agree to the enterprise service level agreement" />\r
      </div>\r
      <div className="flex justify-end gap-1 mt-2">\r
        <Button variant="secondary" size="sm">Cancel</Button>\r
        <Button type="submit" size="sm">Save Changes</Button>\r
      </div>\r
    </Form>
}`,...c.parameters?.docs?.source}}};const V=["Default","Complex"];export{c as Complex,d as Default,V as __namedExportsOrder,J as default};
