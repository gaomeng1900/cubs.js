import{r,j as s}from"./index-b8be1133.js";import{S,s as j,a as p,b as v,R,u as g,c as a,e as d,r as h}from"./Test.module-fc98fbee.js";import{d as w,e as E}from"./drawRect-4553977a.js";import{I as k}from"./Info-99a332e9.js";function W(){const l=r.useRef(null);r.useEffect(()=>{const u=l.current,t=new S(u);j(t),p(t),v(t,5);let c=()=>{};const x=w(t,e=>{d(e.target,[100,100,700,500]);const n=e.target;c=E(n,y=>{d(y.target,[100,100,700,500])},void 0,5,{stroke:!0,strokeStyle:"white"});const o=Math.random();n.styles.fillStyle=h(.5,o),n.styles.stroke=!0,n.styles.lineWidth=4,n.hoverStyles.fillStyle=h(1,o),n.activeStyles.strokeStyle="red"});{const e=new R;e.styles.zIndex=-1,e.styles.fillStyle="rgba(0, 0, 0, 0.1)",e.styles.pointerEvents="none",e.x=100,e.y=100,e.width=600,e.height=400,t.add(e)}return()=>{x(),c(),t.dispose()}},[]);const i=r.useRef(null),[f,m]=g(i);return s.jsx("div",{className:a.wrapper,children:s.jsxs("main",{className:a.mainPaper,ref:i,children:[s.jsx("canvas",{ref:l,className:a.canvas,width:f,height:m}),s.jsxs(k,{children:[s.jsx("div",{style:{fontSize:"1.1em",fontWeight:"500"},children:" 📷 画布："}),s.jsx("ul",{children:s.jsx("li",{children:"右键拖动，滚轮缩放"})}),s.jsx("div",{style:{fontSize:"1.1em",fontWeight:"500"},children:" 🖌️ 绘制矩形："}),s.jsxs("ul",{children:[s.jsx("li",{children:"点击空白处并拖动，增加矩形"}),s.jsx("li",{children:"拖动矩形或顶点，调整矩形"})]})]})]})})}export{W as default};
