import{C as w,d as b,c as j,e as O}from"./Test.module-aa80c849.js";function E(t,c,y,o=10,i={},s={},d={}){const v=Object.freeze({type:"segmentEdit",target:t,currentTarget:t}),x=()=>{const r={type:"beforeSegmentEdit",target:t,currentTarget:t};c==null||c(r),y==null||y(v)},u=t.x,l=t.y,p=t.dx,a=t.dy,e=new w(u,l,o);e.fixedRadius=!0,e.radius=o,Object.assign(e.styles,i),Object.assign(e.hoverStyles,s),Object.assign(e.activeStyles,d);const n=new w(u+p,l+a,o);return n.fixedRadius=!0,n.radius=o,Object.assign(n.styles,i),Object.assign(n.hoverStyles,s),Object.assign(n.activeStyles,d),b(e,r=>{t.dx-=r.x-t.x,t.dy-=r.y-t.y,t.x=r.x,t.y=r.y},x),b(n,r=>{t.dx=r.x-t.x,t.dy=r.y-t.y},x),b(t,void 0,x),t.addEventListener("beforeDraw",r=>{e.x=t.x,e.y=t.y,n.x=t.x+t.dx,n.y=t.y+t.dy}),new j([e,n])}function P(t,c,y={}){const o=i=>{const s=i.srcEvent;if(i.target!==i.currentTarget||s.button!==0)return;const{left:d,top:v}=t.canvas.getBoundingClientRect()||{left:0,top:0},x=(s.clientX-d-t.translate.x)/t.scale,u=(s.clientY-v-t.translate.y)/t.scale,l=x,p=u,a=new O(0,0,0,0);a.x=l,a.y=p,Object.assign(a.styles,y),t.add(a);const e=r=>{const f=r.srcEvent,h=(f.clientX-d-t.translate.x)/t.scale,S=(f.clientY-v-t.translate.y)/t.scale;a.dx=h-l,a.dy=S-p},n=r=>{if(t.removeEventListener("pointermove",e),t.removeEventListener("pointerup",n),a.dx===0&&a.dy===0){t.remove(a);return}c==null||c({type:"createSegment",target:a,currentTarget:t})};t.addEventListener("pointermove",e),t.addEventListener("pointerup",n)};return t.addEventListener("pointerdown",o),function(){t.removeEventListener("pointerdown",o)}}export{P as d,E as e};
