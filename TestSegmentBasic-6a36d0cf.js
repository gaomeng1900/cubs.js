import{_ as n,j as t}from"./index-6661360a.js";import{S,s as m,a as u,e as a,d as l,u as f,b as r}from"./Test.module-aa80c849.js";import{r as o}from"./misc-114e956d.js";function g(){const i=n.useRef(null);n.useEffect(()=>{const h=i.current,s=new S(h);m(s),u(s);{const e=new a(200,200,-50,0);e.styles.strokeStyle=o(),e.hoverStyles.strokeStyle="red",e.styles.lineWidth=10,e.hoverStyles.lineWidth=12,e.styles.lineCap="round",l(e),s.add(e)}{const e=new a(200,200,0,-50);e.styles.strokeStyle=o(),e.hoverStyles.strokeStyle="red",e.styles.lineWidth=10,e.hoverStyles.lineWidth=12,e.styles.lineCap="round",l(e),s.add(e)}{const e=new a(100,100,100,100);e.styles.strokeStyle=o(),e.hoverStyles.strokeStyle="red",e.styles.lineWidth=10,e.hoverStyles.lineWidth=12,e.styles.lineCap="round",l(e),s.add(e)}return()=>{s.dispose()}},[]);const d=n.useRef(null),[c,y]=f(d);return t.jsxs("div",{className:r.wrapper,children:[t.jsx("main",{className:r.mainPaper,ref:d,children:t.jsx("canvas",{ref:i,className:r.canvas,width:c,height:y})}),t.jsx("footer",{className:r.footer,children:"🔔 滚轮缩放；右键平移"})]})}export{g as default};
