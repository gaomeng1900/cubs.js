import{r as a,j as t}from"./index-767ff75a.js";import{u as p}from"./hooks-37335958.js";import{S as v,e as x,f as y,g as j,h as w,s as r,r as i}from"./Test.module-0a03da6d.js";import{d as R,e as P}from"./drawRect-577e8d3b.js";function F(){const o=a.useRef(null);a.useEffect(()=>{const m=o.current,e=new v(m),u=x(e);y(e,5,30),j(e),w(e);let c=()=>{};const h=R(e,S=>{const s=S.target;c=P(s,void 0,void 0,5,{stroke:!0,strokeStyle:"white"});const l=Math.random();s.style.fillStyle=i(.5,l),s.style.stroke=!0,s.style.lineWidth=4,s.hoverStyle.fillStyle=i(1,l),s.activeStyle.strokeStyle="red"});return()=>{h(),u(),c(),e.dispose()}},[]);const n=a.useRef(null),[d,f]=p(n);return t.jsxs("div",{className:r.wrapper,children:[t.jsx("main",{className:r.mainPaper,ref:n,children:t.jsx("canvas",{ref:o,className:r.canvas,width:d,height:f})}),t.jsxs("footer",{className:r.footer,children:["🔔",t.jsx("div",{children:"绘制：空白区域按下左键开始绘制；松开左键结束绘制；左键拖动图形"}),t.jsx("div",{children:"画布：滚轮缩放；右键平移"})]})]})}export{F as default};
