import{r as e,i as f,j as h}from"./index-d9b39f5e.js";import{A as p}from"./react-apexcharts.min-d2d01635.js";const x=({color:r,percentage:s,chartWidth:o,chartHeight:i,chartLableFonrSize:c})=>{const a=e.useRef(null),t=e.useRef(null),l=f();return e.useEffect(()=>{const u={chart:{width:[o],height:[i],type:"radialBar"},series:[s],plotOptions:{radialBar:{hollow:{margin:0,size:"60%"},dataLabels:{showOn:"always",name:{show:!1},value:{color:l.palette.accent.main,fontSize:[c],fontFamily:"'Plus Jakarta Sans', sans-serif;",show:!0,offsetY:5,textAlign:"center",textAnchor:"middle",fontWeight:600}},strokeWidth:1}},stroke:{lineCap:"round"},labels:["Progress"]},n=new p(a.current,u);return n.render(),t.current=n,()=>{t.current&&t.current.destroy()}},[s]),e.useEffect(()=>{t.current&&t.current.updateOptions({colors:[r]})},[r]),h.jsx("div",{ref:a})};export{x as B};