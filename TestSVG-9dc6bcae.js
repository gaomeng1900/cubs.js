import{_ as p,j as e}from"./index-eb33cad6.js";import{f as x,h as m,S as y,s as M,a as j,b as w,d as S,u as k,c as f}from"./Test.module-0559db1d.js";function h(t,n,s=1){const l=new x;for(const c of t.children)if(c instanceof SVGPathElement){const r=E(c,n,s);l.add(r)}else if(c instanceof SVGGElement){const r=g(c);h(c,r,s).shapes.forEach(i=>l.add(i))}return l}function E(t,n,s=1){const c=document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGMatrix().scale(s,s),r=new Path2D,a=t.getAttribute("d");a&&r.addPath(new Path2D(a),c);const i=new m(r);return Object.assign(i.styles,g(t,n)),i}function g(t,n){const s=n||{fill:!0,fillStyle:"black",stroke:!1},l=t.getAttribute("fill")||t.style.fill;l==="none"?s.fill=!1:l&&(s.fill=!0,s.fillStyle=l);const c=t.getAttribute("fill-opacity")||t.style.fillOpacity;c&&(s.fillOpacity=parseFloat(c));const r=t.getAttribute("stroke")||t.style.stroke;r&&r!=="none"&&(s.stroke=!0,s.strokeStyle=r);const a=t.getAttribute("stroke-width")||t.style.strokeWidth;a&&(s.lineWidth=parseFloat(a));const i=t.getAttribute("stroke-opacity")||t.style.strokeOpacity;return i&&(s.strokeOpacity=parseFloat(i)),s}function P(){const t=p.useRef(null),n=p.useRef(null);p.useEffect(()=>{const r=t.current,a=new y(r);M(a),j(a),w(a,5);const i=h(n.current,void 0,4);return i.shapes.forEach(o=>{o.x+=0,o.y+=100,S(o)}),a.add(i),fetch("./tiger.svg").then(o=>o.text()).then(o=>{const v=new DOMParser().parseFromString(o,"image/svg+xml"),u=h(v.documentElement,void 0,1);a.add(u),u.shapes.forEach(d=>{d.x+=600,d.y+=200})}),()=>{a.dispose()}},[]);const s=p.useRef(null),[l,c]=k(s);return e.jsxs("div",{className:f.wrapper,children:[e.jsx("main",{className:f.mainPaper,ref:s,children:e.jsx("canvas",{ref:t,className:f.canvas,width:l,height:c})}),e.jsx("footer",{className:f.footer,children:"🔔 滚轮缩放；右键平移"}),e.jsxs("div",{className:f.svgOuterWrapper,children:[e.jsx("div",{className:f.svgWrapper,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 104 97",ref:n,children:[e.jsx("path",{d:"M14,85l3,9h72c0,0,5-9,4-10c-2-2-79,0-79,1",fill:"#7C4E32"}),e.jsx("path",{d:"M19,47c0,0-9,7-13,14c-5,6,3,7,3,7l1,14c0,0,10,8,23,8c14,0,26,1,28,0c2-1,9-2,9-4c1-1,27,1,27-9c0-10,7-20-11-29c-17-9-67-1-67-1",fill:"#E30000"}),e.jsx("path",{d:"M17,32c-3,48,80,43,71-3 l-35-15",fill:"#FFE1C4"}),e.jsx("path",{d:"M17,32c9-36,61-32,71-3c-20-9-40-9-71,3",fill:"#8ED8F8"}),e.jsx("path",{d:"M54,35a10 8 60 1 1 0,0.1zM37,38a10 8 -60 1 1 0,0.1z",fill:"#FFF"}),e.jsx("path",{d:"M41,6c1-1,4-3,8-3c3-0,9-1,14,3l-1,2h-2h-2c0,0-3,1-5,0c-2-1-1-1-1-1l-3,1l-2-1h-1c0,0-1,2-3,2c0,0-2-1-2-3M17,34l0-2c0,0,35-20,71-3v2c0,0-35-17-71,3M5,62c3-2,5-2,8,0c3,2,13,6,8,11c-2,2-6,0-8,0c-1,1-4,2-6,1c-4-3-6-8-2-12M99,59c0,0-9-2-11,4l-3,5c0,1-2,3,3,3c5,0,5,2,7,2c3,0,7-1,7-4c0-4-1-11-3-10",fill:"#FFF200"}),e.jsx("path",{d:"M56,78v1M55,69v1M55,87v1",stroke:"#000","stroke-linecap":"round"}),e.jsx("path",{d:"M60,36a1 1 0 1 1 0-0.1M49,36a1 1 0 1 1 0-0.1M57,55a2 3 0 1 1 0-0.1M12,94c0,0,20-4,42,0c0,0,27-4,39,0z"}),e.jsx("path",{d:"M50,59c0,0,4,3,10,0M56,66l2,12l-2,12M25,50c0,0,10,12,23,12c13,0,24,0,35-15",fill:"none",stroke:"#000","stroke-width":"0.5"})]})}),e.jsx("img",{className:f.svgWrapper,src:"./tiger.svg"})]})]})}export{P as default};
