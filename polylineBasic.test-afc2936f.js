import{_ as n,j as a}from"./index-cf5c1735.js";import{u as d}from"./hooks-e740b2a1.js";import{S as f,g as u,h as m,f as y,c as p,r as x,d as h,s as t}from"./Test.module-3cb5013e.js";function _(){const r=n.useRef(null);n.useEffect(()=>{const c=r.current,s=new f(c);u(s),m(s),y(s,5);const e=new p(200,200,[{x:0,y:0},{x:10,y:100},{x:100,y:10},{x:100,y:100}]);return e.style.strokeStyle=x(),e.style.lineWidth=10,e.style.lineCap="round",e.style.lineJoin="round",e.hoverStyle.strokeStyle="red",e.hoverStyle.lineWidth=12,h(e),s.add(e),()=>{s.dispose()}},[]);const o=n.useRef(null),[l,i]=d(o);return a.jsxs("div",{className:t.wrapper,children:[a.jsx("main",{className:t.mainPaper,ref:o,children:a.jsx("canvas",{ref:r,className:t.canvas,width:l,height:i})}),a.jsx("footer",{className:t.footer,children:"🔔 滚轮缩放；右键平移"})]})}export{_ as default};
