import{r as a,j as e}from"./index-b8be1133.js";import{S as p,s as g,a as j,b as y,R as S,u as v,c as r,g as d,r as R}from"./Test.module-fc98fbee.js";import{d as w,e as E}from"./drawSegment-02271320.js";import{I as z}from"./Info-99a332e9.js";function W(){const i=a.useRef(null);a.useEffect(()=>{const h=i.current,t=new p(h);g(t),j(t),y(t,5);let c=()=>{};const x=w(t,o=>{d(o.target,[100,100,1e3,500]);const n=o.target;n.styles.lineCap="round",n.styles.lineWidth=20,n.styles.strokeStyle=R(),c=E(n,u=>{d(u.target,[100,100,1e3,500])})}),s=new S;return s.styles.zIndex=-1,s.styles.fillStyle="rgba(0, 0, 0, 0.1)",s.styles.pointerEvents="none",s.x=100,s.y=100,s.width=900,s.height=400,t.add(s),()=>{x(),c(),t.dispose()}},[]);const l=a.useRef(null),[m,f]=v(l);return e.jsx("div",{className:r.wrapper,children:e.jsxs("main",{className:r.mainPaper,ref:l,children:[e.jsx("canvas",{ref:i,className:r.canvas,width:m,height:f}),e.jsxs(z,{children:[e.jsx("div",{style:{fontSize:"1.1em",fontWeight:"500"},children:" 📷 画布："}),e.jsx("ul",{children:e.jsx("li",{children:"右键拖动，滚轮缩放"})}),e.jsx("div",{style:{fontSize:"1.1em",fontWeight:"500"},children:" 🖌️ 绘制线段："}),e.jsxs("ul",{children:[e.jsx("li",{children:"点击空白处并拖动，增加线段"}),e.jsx("li",{children:"拖动边或顶点，调整线段"})]})]})]})})}export{W as default};
