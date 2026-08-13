import{c as d,r as o,j as e,m as c,A as v}from"./index-Dek5DoI9.js";/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],k=d("circle-alert",S);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],C=d("circle-check-big",M);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],w=d("send",$),y="adityabasanti02@gmail.com",E=()=>{const[a,u]=o.useState({name:"",email:"",message:""}),[n,h]=o.useState({email:""}),[p,g]=o.useState(!1),[f,x]=o.useState(!1),b=l=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(l).toLowerCase()),r=l=>{const{name:s,value:i}=l.target;u(t=>({...t,[s]:i})),s==="email"&&(i&&!b(i)?h(t=>({...t,email:"Please enter a valid email address."})):h(t=>({...t,email:""})))},j=l=>{if(l.preventDefault(),!a.name||!a.email||!a.message||n.email)return;g(!0);const s=encodeURIComponent(`Portfolio Message from ${a.name}`),i=encodeURIComponent(`Hi Aditya,

${a.message}

---
Message sent via DevStudio Portfolio.
Sender Name: ${a.name}
Sender Email: ${a.email}`);if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))window.location.href=`mailto:${y}?subject=${s}&body=${i}`;else{const N=`https://mail.google.com/mail/?view=cm&fs=1&to=${y}&su=${s}&body=${i}`;window.open(N,"_blank")}setTimeout(()=>{g(!1),x(!0),u({name:"",email:"",message:""})},1e3)},m=a.name&&a.email&&a.message&&!n.email;return e.jsxs(c.section,{className:"contact-container",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[e.jsxs("div",{className:"contact-header",children:[e.jsx("h2",{children:"Get In Touch"}),e.jsx("p",{children:"Have an idea or a project in mind? Shoot me a message and let's talk!"})]}),e.jsxs("div",{className:"contact-card",children:[e.jsx(v,{children:f&&e.jsxs(c.div,{className:"success-overlay",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{type:"spring",damping:15},children:[e.jsx("div",{className:"success-icon-container",children:e.jsx(C,{size:40})}),e.jsx("h3",{className:"success-title",children:"Mail Client Opened!"}),e.jsx("p",{className:"success-msg",children:"Your email client was opened with a pre-filled draft. Please send the email to finish reaching out!"}),e.jsx(c.button,{onClick:()=>x(!1),className:"submit-btn",style:{marginTop:"1.5rem",padding:"0.6rem 1.5rem"},whileTap:{scale:.95},children:"Send Another Message"})]})}),e.jsxs("form",{onSubmit:j,className:"contact-form",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:"text",name:"name",id:"name",placeholder:" ",className:"form-input",value:a.name,onChange:r,required:!0}),e.jsx("label",{htmlFor:"name",className:"form-label",children:"Your Name"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:"email",name:"email",id:"email",placeholder:" ",className:"form-input",value:a.email,onChange:r,required:!0}),e.jsx("label",{htmlFor:"email",className:"form-label",children:"Your Email"}),n.email&&e.jsxs("span",{className:"error-text",children:[e.jsx(k,{size:12,style:{marginRight:"4px",display:"inline-block",verticalAlign:"middle"}}),n.email]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("textarea",{name:"message",id:"message",placeholder:" ",className:"form-textarea",value:a.message,onChange:r,required:!0}),e.jsx("label",{htmlFor:"message",className:"form-label",children:"Your Message"})]}),e.jsxs(c.button,{type:"submit",className:"submit-btn",disabled:!m||p,whileHover:m?{scale:1.02}:{},whileTap:m?{scale:.98}:{},children:[e.jsx("span",{children:p?"Opening Mail...":"Send Message"}),e.jsx(w,{size:18})]})]})]})]})};export{E as Contact};
