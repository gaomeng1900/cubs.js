import{r,j as t}from"./index-b8be1133.js";import{S,s as u,a as f,b as m,f as a,r as l,d as o,u as p,c as n}from"./Test.module-fc98fbee.js";function g(){const i=r.useRef(null);r.useEffect(()=>{const h=i.current,s=new S(h);u(s),f(s),m(s,5);{const e=new a(200,200,-50,0);e.styles.strokeStyle=l(),e.hoverStyles.strokeStyle="red",e.styles.lineWidth=10,e.hoverStyles.lineWidth=12,e.styles.lineCap="round",o(e),s.add(e)}{const e=new a(200,200,0,-50);e.styles.strokeStyle=l(),e.hoverStyles.strokeStyle="red",e.styles.lineWidth=10,e.hoverStyles.lineWidth=12,e.styles.lineCap="round",o(e),s.add(e)}{const e=new a(100,100,100,100);e.styles.strokeStyle=l(),e.hoverStyles.strokeStyle="red",e.styles.lineWidth=10,e.hoverStyles.lineWidth=12,e.styles.lineCap="round",o(e),s.add(e)}return()=>{s.dispose()}},[]);const d=r.useRef(null),[c,y]=p(d);return t.jsxs("div",{className:n.wrapper,children:[t.jsx("main",{className:n.mainPaper,ref:d,children:t.jsx("canvas",{ref:i,className:n.canvas,width:c,height:y})}),t.jsx("footer",{className:n.footer,children:"🔔 滚轮缩放；右键平移"})]})}export{g as default};
