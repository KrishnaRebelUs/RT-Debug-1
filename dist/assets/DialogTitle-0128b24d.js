import{r as p,c as u,_ as i,a as W,b as y,j as c}from"./index-527674d4.js";import{a as $,g as M,s as g,d as m,e as P,T as q}from"./Box-71d1ebd7.js";import{B as G,M as J,P as j,u as Q,d as Z,F as oo}from"./List-1f8e7d65.js";function eo(o){return M("MuiDialog",o)}const ao=$("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),k=ao,to=p.createContext({}),F=to,io=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],ro=g(G,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),so=o=>{const{classes:e,scroll:a,maxWidth:t,fullWidth:s,fullScreen:r}=o,l={root:["root"],container:["container",`scroll${u(a)}`],paper:["paper",`paperScroll${u(a)}`,`paperWidth${u(String(t))}`,s&&"paperFullWidth",r&&"paperFullScreen"]};return P(l,eo,e)},lo=g(J,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),no=g("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.container,e[`scroll${u(a.scroll)}`]]}})(({ownerState:o})=>i({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),co=g(j,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.paper,e[`scrollPaper${u(a.scroll)}`],e[`paperWidth${u(String(a.maxWidth))}`],a.fullWidth&&e.paperFullWidth,a.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>i({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),po=p.forwardRef(function(e,a){const t=W({props:e,name:"MuiDialog"}),s=Q(),r={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":n,BackdropComponent:x,BackdropProps:f,children:U,className:_,disableEscapeKeyDown:T=!1,fullScreen:A=!1,fullWidth:E=!1,maxWidth:I="sm",onBackdropClick:S,onClick:w,onClose:b,open:B,PaperComponent:L=j,PaperProps:R={},scroll:Y="paper",TransitionComponent:K=oo,transitionDuration:N=r,TransitionProps:X}=t,z=y(t,io),h=i({},t,{disableEscapeKeyDown:T,fullScreen:A,fullWidth:E,maxWidth:I,scroll:Y}),C=so(h),D=p.useRef(),H=d=>{D.current=d.target===d.currentTarget},O=d=>{w&&w(d),D.current&&(D.current=null,S&&S(d),b&&b(d,"backdropClick"))},v=Z(n),V=p.useMemo(()=>({titleId:v}),[v]);return c.jsx(lo,i({className:m(C.root,_),closeAfterTransition:!0,components:{Backdrop:ro},componentsProps:{backdrop:i({transitionDuration:N,as:x},f)},disableEscapeKeyDown:T,onClose:b,open:B,ref:a,onClick:O,ownerState:h},z,{children:c.jsx(K,i({appear:!0,in:B,timeout:N,role:"presentation"},X,{children:c.jsx(no,{className:m(C.container),onMouseDown:H,ownerState:h,children:c.jsx(co,i({as:L,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":v},R,{className:m(C.paper,R.className),ownerState:h,children:c.jsx(F.Provider,{value:V,children:U})}))})}))}))}),Po=po;function uo(o){return M("MuiDialogContent",o)}$("MuiDialogContent",["root","dividers"]);function go(o){return M("MuiDialogTitle",o)}const xo=$("MuiDialogTitle",["root"]),mo=xo,ho=["className","dividers"],fo=o=>{const{classes:e,dividers:a}=o;return P({root:["root",a&&"dividers"]},uo,e)},bo=g("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,a.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${mo.root} + &`]:{paddingTop:0}})),Co=p.forwardRef(function(e,a){const t=W({props:e,name:"MuiDialogContent"}),{className:s,dividers:r=!1}=t,l=y(t,ho),n=i({},t,{dividers:r}),x=fo(n);return c.jsx(bo,i({className:m(x.root,s),ownerState:n,ref:a},l))}),To=Co,Do=["className","id"],vo=o=>{const{classes:e}=o;return P({root:["root"]},go,e)},ko=g(q,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),Wo=p.forwardRef(function(e,a){const t=W({props:e,name:"MuiDialogTitle"}),{className:s,id:r}=t,l=y(t,Do),n=t,x=vo(n),{titleId:f=r}=p.useContext(F);return c.jsx(ko,i({component:"h2",className:m(x.root,s),ownerState:n,ref:a,variant:"h6",id:r??f},l))}),So=Wo;export{Po as D,So as a,To as b};