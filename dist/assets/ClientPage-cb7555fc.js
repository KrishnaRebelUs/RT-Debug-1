import{r as s,j as e}from"./index-527674d4.js";import{P as je}from"./PageContainer-7391d85a.js";import{B as ge,H as pe}from"./Breadcrumb-9d223376.js";import{G as r}from"./List-1f8e7d65.js";import{C as Ce}from"./Card-0829dc83.js";import{C as ve}from"./CardContent-683b8cab.js";import{T as fe,B as be}from"./Box-71d1ebd7.js";import{T as a,F as m}from"./TextField-e443bc2c.js";import{M as o}from"./MenuItem-6d9ae690.js";import{F as d}from"./FormControl-2c579a6e.js";import{I as Se,F as x}from"./InputLabel-bf27fb80.js";import{S as Pe}from"./Select-ae13be61.js";import{C as V}from"./Checkbox-5a5d6566.js";import{L as Y}from"./ListItemText-b9f23e84.js";import{R as h,a as n}from"./RadioGroup-5019e452.js";import{F as l}from"./FormGroup-c7c7abb5.js";import{B as v}from"./Button-ed9ad2d4.js";import"./createReactComponent-d6bc8056.js";import"./Menu-31bdb761.js";import"./IconLayoutDashboard-dc50938b.js";import"./dividerClasses-af21a349.js";import"./Stack-d2cb04f4.js";import"./styled-8c9f9ba9.js";import"./useThemeProps-e42ef9f1.js";const Ke=()=>{const[j,w]=s.useState(""),[g,q]=s.useState(""),[c,H]=s.useState(""),[p,G]=s.useState(""),[f,J]=s.useState(""),[b,K]=s.useState(""),[S,Q]=s.useState(""),[P,X]=s.useState(""),[A,Z]=s.useState(""),[y,_]=s.useState(""),[u,$]=s.useState([]),[k,ee]=s.useState("No"),[N,te]=s.useState("No"),[E,re]=s.useState("No"),[B,se]=s.useState("No"),[ae,F]=s.useState(!1),[T,ne]=s.useState(""),[W,le]=s.useState(""),[z,L]=s.useState(!1),[M,O]=s.useState(!1),[I,R]=s.useState(!1),[U,D]=s.useState(!1),ie=["US","CA","EU","NA"],oe=["RT","SamhCard"],ce=["Term1","Term2","Term3"],ue=["Excess CoOp Billing","Shortage Claim","P&L Analysis","Price Claim","Missed Invoicing","Ops Chargeback"],me=t=>{t.preventDefault();let i=!0;j.trim()===""?(L(!0),i=!1):L(!1),g===""?(O(!0),i=!1):O(!1),c===""?(R(!0),i=!1):R(!1),p===""?(D(!0),i=!1):D(!1),i&&console.log("Form submitted:",{orgName:j,amazonVCAccount:g,marketPlace:c,businessUnit:p,feePercent:f,paymentTerms:b,customerPOC:S,customerEmail:P,contractStartDate:A,contractEndDate:y,moduleAccess:u,cronJob:k,opsChargeback:N,itemizedShortage:E,itemizedPriceClaim:B,referredBy:T,serviceFee:W})},de=t=>{const i=t.target.value;$(i)},C=c!=="US"&&c!=="CA",xe=()=>{F(!0)},he=()=>{F(!1)};return e.jsx(je,{title:"Client Access",children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(ge,{titles:["Manage Access","Client Access"]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(pe,{title:"Client Access"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(Ce,{sx:{backgroundColor:"white",padding:3},children:e.jsxs(ve,{children:[e.jsx(fe,{variant:"h5",gutterBottom:!0,children:"Client Access Details"}),e.jsxs("form",{onSubmit:me,children:[e.jsxs(r,{container:!0,spacing:2,children:[e.jsxs(r,{item:!0,xs:6,children:[e.jsx(a,{required:!0,fullWidth:!0,label:"Org Name",value:j,onChange:t=>w(t.target.value),margin:"normal",variant:"outlined",error:z}),z&&e.jsx(m,{error:!0,children:"Please enter Org Name."})]}),e.jsxs(r,{item:!0,xs:6,children:[e.jsx(a,{select:!0,required:!0,fullWidth:!0,label:"Amazon VC Account",value:g,onChange:t=>q(t.target.value),margin:"normal",variant:"outlined",error:M,children:["Account1","Account2","Account3"].map(t=>e.jsx(o,{value:t,children:t},t))}),M&&e.jsx(m,{error:!0,children:"Please select Amazon VC Account."})]})]}),e.jsxs(r,{container:!0,spacing:2,children:[e.jsxs(r,{item:!0,xs:6,children:[e.jsx(a,{select:!0,required:!0,fullWidth:!0,label:"Market Place",value:c,onChange:t=>H(t.target.value),margin:"normal",variant:"outlined",error:I,children:ie.map(t=>e.jsx(o,{value:t,children:t},t))}),I&&e.jsx(m,{error:!0,children:"Please select Market Place."})]}),e.jsxs(r,{item:!0,xs:6,children:[e.jsx(a,{select:!0,required:!0,fullWidth:!0,label:"Business Unit",value:p,onChange:t=>G(t.target.value),margin:"normal",variant:"outlined",error:U,children:oe.map(t=>e.jsx(o,{value:t,children:t},t))}),U&&e.jsx(m,{error:!0,children:"Please select Business Unit."})]})]}),e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:6,children:e.jsx(a,{fullWidth:!0,label:"Contract Start Date",type:"date",value:A,onChange:t=>Z(t.target.value),margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0}})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(a,{fullWidth:!0,label:"Contract End Date",type:"date",value:y,onChange:t=>_(t.target.value),margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0}})})]}),e.jsxs(d,{fullWidth:!0,margin:"normal",variant:"outlined",sx:{mt:2},children:[e.jsx(Se,{children:"Module Access"}),e.jsxs(Pe,{multiple:!0,value:u,onChange:de,renderValue:t=>t.join(", "),inputProps:{label:"Module Access"},MenuProps:{PaperProps:{style:{maxHeight:300}}},children:[u.map(t=>e.jsxs(o,{value:t,children:[e.jsx(V,{checked:!0}),e.jsx(Y,{primary:t})]},t)),ue.filter(t=>!u.includes(t)).map(t=>e.jsxs(o,{value:t,disabled:t==="P&L Analysis"&&C,children:[e.jsx(V,{checked:u.indexOf(t)>-1,disabled:t==="P&L Analysis"&&C}),e.jsx(Y,{primary:t})]},t))]}),C&&e.jsx(m,{error:!0,children:"P&L Analysis is only available for US and CA market places."})]}),e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:6,children:e.jsx(a,{fullWidth:!0,label:"Customer POC",value:S,onChange:t=>Q(t.target.value),margin:"normal",variant:"outlined"})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(a,{fullWidth:!0,label:"Customer Email",value:P,onChange:t=>X(t.target.value),margin:"normal",variant:"outlined"})})]}),e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:6,children:e.jsx(a,{fullWidth:!0,label:"Fee Percent",value:f,onChange:t=>J(t.target.value),margin:"normal",variant:"outlined"})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(a,{fullWidth:!0,label:"Payment Terms",select:!0,value:b,onChange:t=>K(t.target.value),margin:"normal",variant:"outlined",children:ce.map(t=>e.jsx(o,{value:t,children:t},t))})})]}),e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:6,children:e.jsxs(d,{component:"fieldset",sx:{mt:2},children:[e.jsx(x,{component:"legend",children:"Cron Job"}),e.jsxs(h,{row:!0,value:k,onChange:t=>ee(t.target.value),children:[e.jsx(l,{value:"Yes",control:e.jsx(n,{}),label:"Yes"}),e.jsx(l,{value:"No",control:e.jsx(n,{}),label:"No"})]})]})}),e.jsx(r,{item:!0,xs:6,children:e.jsxs(d,{component:"fieldset",sx:{mt:2},children:[e.jsx(x,{component:"legend",children:"OPS Chargeback"}),e.jsxs(h,{row:!0,value:N,onChange:t=>te(t.target.value),children:[e.jsx(l,{value:"Yes",control:e.jsx(n,{}),label:"Yes"}),e.jsx(l,{value:"No",control:e.jsx(n,{}),label:"No"})]})]})})]}),e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:6,children:e.jsxs(d,{component:"fieldset",sx:{mt:2},children:[e.jsx(x,{component:"legend",children:"Itemized Shortage"}),e.jsxs(h,{row:!0,value:E,onChange:t=>re(t.target.value),children:[e.jsx(l,{value:"Yes",control:e.jsx(n,{}),label:"Yes"}),e.jsx(l,{value:"No",control:e.jsx(n,{}),label:"No"})]})]})}),e.jsx(r,{item:!0,xs:6,children:e.jsxs(d,{component:"fieldset",sx:{mt:2},children:[e.jsx(x,{component:"legend",children:"Itemized Price Claim"}),e.jsxs(h,{row:!0,value:B,onChange:t=>se(t.target.value),children:[e.jsx(l,{value:"Yes",control:e.jsx(n,{}),label:"Yes"}),e.jsx(l,{value:"No",control:e.jsx(n,{}),label:"No"})]})]})})]}),ae?e.jsxs(r,{container:!0,spacing:2,sx:{mt:2},children:[e.jsx(r,{item:!0,xs:6,children:e.jsx(a,{fullWidth:!0,label:"Referred By",value:T,onChange:t=>ne(t.target.value),margin:"normal",variant:"outlined"})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(a,{fullWidth:!0,label:"Service Fee",value:W,onChange:t=>le(t.target.value),margin:"normal",variant:"outlined"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(v,{variant:"contained",color:"primary",onClick:he,sx:{mt:2},children:"Save and Close"})})]}):e.jsx(v,{variant:"outlined",color:"primary",onClick:xe,sx:{mt:2},children:"Agency Referral"}),e.jsx(be,{mt:2,ml:60,children:e.jsx(v,{type:"submit",variant:"contained",color:"primary",children:"Submit"})})]})]})})})]})})};export{Ke as default};