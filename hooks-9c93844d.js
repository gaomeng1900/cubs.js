import{_ as e}from"./index-aea94668.js";function f(r,n=200){const[c,i]=e.useState(0),[o,h]=e.useState(0);return e.useEffect(()=>{const s=()=>{const t=r.current;if(!t)return;const a=t.clientWidth,_=t.clientHeight;i(a),h(_)};s();const u=setInterval(s,n);return()=>{clearInterval(u)}},[r,n]),[c,o]}export{f as u};
