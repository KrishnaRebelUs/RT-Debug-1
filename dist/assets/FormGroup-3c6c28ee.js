import{c as S,_ as a,r as x,a as k,b as G,j as m}from"./index-d9b39f5e.js";import{a as M,g as N,s as w,T as $,d as y,e as j}from"./Box-1e7caa39.js";import{b as q,e as _}from"./Select-be6fca1e.js";import{S as W}from"./Stack-565e4b37.js";function z(o){return N("MuiFormControlLabel",o)}const B=M("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),d=B,H=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],I=o=>{const{classes:e,disabled:r,labelPlacement:s,error:l,required:t}=o,c={root:["root",r&&"disabled",`labelPlacement${S(s)}`,l&&"error",t&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",l&&"error"]};return j(c,z,e)},J=w("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[{[`& .${d.label}`]:e.label},e.root,e[`labelPlacement${S(r.labelPlacement)}`]]}})(({theme:o,ownerState:e})=>a({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${d.disabled}`]:{cursor:"default"}},e.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},e.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},e.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${d.label}`]:{[`&.${d.disabled}`]:{color:(o.vars||o).palette.text.disabled}}})),K=w("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(o,e)=>e.asterisk})(({theme:o})=>({[`&.${d.error}`]:{color:(o.vars||o).palette.error.main}})),O=x.forwardRef(function(e,r){var s,l;const t=k({props:e,name:"MuiFormControlLabel"}),{className:c,componentsProps:b={},control:n,disabled:p,disableTypography:f,label:D,labelPlacement:T="end",required:v,slotProps:U={}}=t,E=G(t,H),C=q(),L=(s=p??n.props.disabled)!=null?s:C==null?void 0:C.disabled,g=v??n.props.required,R={disabled:L,required:g};["checked","name","onChange","value","inputRef"].forEach(u=>{typeof n.props[u]>"u"&&typeof t[u]<"u"&&(R[u]=t[u])});const A=_({props:t,muiFormControl:C,states:["error"]}),P=a({},t,{disabled:L,labelPlacement:T,required:g,error:A.error}),F=I(P),h=(l=U.typography)!=null?l:b.typography;let i=D;return i!=null&&i.type!==$&&!f&&(i=m.jsx($,a({component:"span"},h,{className:y(F.label,h==null?void 0:h.className),children:i}))),m.jsxs(J,a({className:y(F.root,c),ownerState:P,ref:r},E,{children:[x.cloneElement(n,R),g?m.jsxs(W,{display:"block",children:[i,m.jsxs(K,{ownerState:P,"aria-hidden":!0,className:F.asterisk,children:[" ","*"]})]}):i]}))}),to=O;function Q(o){return N("MuiFormGroup",o)}M("MuiFormGroup",["root","row","error"]);const V=["className","row"],X=o=>{const{classes:e,row:r,error:s}=o;return j({root:["root",r&&"row",s&&"error"]},Q,e)},Y=w("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.root,r.row&&e.row]}})(({ownerState:o})=>a({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),Z=x.forwardRef(function(e,r){const s=k({props:e,name:"MuiFormGroup"}),{className:l,row:t=!1}=s,c=G(s,V),b=q(),n=_({props:s,muiFormControl:b,states:["error"]}),p=a({},s,{row:t,error:n.error}),f=X(p);return m.jsx(Y,a({className:y(f.root,l),ownerState:p,ref:r},c))}),lo=Z;export{to as F,lo as a};
