import{r,j as e}from"./index-052255ea.js";import{S as h,s as x,a as u,b as j,u as p,c as t}from"./Test.module-87944f70.js";import{d as y}from"./drawPolyline-4f433eb2.js";import{e as S}from"./editPolyline-69d5775d.js";import{r as v}from"./misc-3d267c02.js";import{I as g}from"./Info-dc786ca5.js";function W(){const i=r.useRef(null);r.useEffect(()=>{const d=i.current,s=new h(d);console.log(s),x(s),u(s),j(s,5);let n;const m=y(s,f=>{const l=f.target;l.styles.strokeStyle=v(),l.styles.lineWidth=10,l.styles.lineCap="round",l.styles.lineJoin="round",l.hoverStyles.strokeStyle="red",n=S(l)},{},{fillStyle:"green"});return()=>{m(),n==null||n(),s.dispose()}},[]);const o=r.useRef(null),[a,c]=p(o);return e.jsx("div",{className:t.wrapper,children:e.jsxs("main",{className:t.mainPaper,ref:o,children:[e.jsx("canvas",{ref:i,className:t.canvas,width:a,height:c}),e.jsxs(g,{children:[e.jsx("div",{style:{fontSize:"1.1em",fontWeight:"500"},children:" 📷 画布："}),e.jsx("ul",{children:e.jsx("li",{children:"右键拖动，滚轮缩放"})}),e.jsx("div",{style:{fontSize:"1.1em",fontWeight:"500"},children:" 🖌️ 绘制折线："}),e.jsxs("ul",{children:[e.jsx("li",{children:"开始绘制：点击空白处"}),e.jsx("li",{children:"结束绘制：点击尾点结束绘制，或者点击首点结束绘制并标记闭合"}),e.jsx("li",{children:"修改位置：拖动任意边"}),e.jsx("li",{children:"修改形状：拖动顶点"}),e.jsx("li",{children:"添加顶点：按住 meta 或 Ctrl 键，点击边"}),e.jsx("li",{children:"删除顶点：按住 meta 或 Ctrl 键，点击顶点"})]})]})]})})}export{W as default};
