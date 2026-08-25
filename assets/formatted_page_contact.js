(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{
321:function(e,t,s){
Promise.resolve().then(s.bind(s,83))
}
,83:function(e,t,s){
"use strict";
s.d(t,{
default:function(){
return h
}

}
);
var a=s(7437),r=s(2265),i=s(6498),l=s(3897),o=s(6247),n=s(7586),d=s(4754),c=s(4891),p=s(498),x=s(392);
function h(){
let e=(0,r.useRef)(null),t=(0,r.useRef)(null),s=(0,r.useRef)(null),h=(0,r.useRef)(null),u=(0,r.useRef)(null),m=(0,r.useRef)(null),[f,b]=(0,r.useState)(!1),[g,w]=(0,r.useState)(!1),[j,y]=(0,r.useState)(!1),[v,N,k]=(0,x.cI)("xpwdwykv"),[A,F]=(0,r.useState)({
name:"",email:"",subject:"",message:""
}
);
(0,r.useEffect)(()=>{
v.succeeded&&(w(!0),y(!1),F({
name:"",email:"",subject:"",message:""
}
))
}
,[v.succeeded]);
let E=async()=>{
try{
await navigator.clipboard.writeText("nandkishorsoni098765@gmail.com"),b(!0),setTimeout(()=>b(!1),2e3)
}
catch(e){
console.error("Failed to copy text: ",e)
}

}
,C=e=>{
let{
name:t,value:s
}
=e.target;
F(e=>({
...e,[t]:s
}
))
}
,T=async e=>{
e.preventDefault(),await N(e)
}
;
return(0,l.V)(()=>{
i.ZP.timeline({
delay:.2
}
).from(t.current,{
y:-20,opacity:0,duration:.8,ease:"power3.out"
}
).from(s.current,{
y:-30,opacity:0,duration:.8,ease:"power3.out"
}
,"-=0.6").from(h.current?h.current.children:[],{
y:20,opacity:0,duration:.6,stagger:.15,ease:"power3.out"
}
,"-=0.4").from(u.current?u.current.children:[],{
scale:0,opacity:0,rotate:()=>40*Math.random()-20,duration:.8,stagger:.08,ease:"back.out(1.5)"
}
,"-=0.4").from(m.current,{
y:30,opacity:0,duration:.8,ease:"power3.out"
}
,"-=0.4")
}
,{
scope:e
}
),(0,a.jsxs)("section",{
ref:e,className:"relative w-full min-h-screen bg-palette-grey text-[#161616] py-24 flex flex-col justify-between z-20 overflow-hidden",children:[(0,a.jsx)("div",{
ref:t,className:"absolute top-6 left-8 z-20 text-[#F44A22] text-4xl tracking-widest pointer-events-none drop-shadow-md origin-center",style:{
fontFamily:"'Samarkan', sans-serif"
}
,children:"CONTACT"
}
),(0,a.jsxs)("div",{
ref:s,className:"w-full select-none overflow-hidden pb-4",children:[(0,a.jsxs)("div",{
className:"animate-marquee font-cormorant text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-medium uppercase tracking-tight text-[#161616] flex items-center gap-8 whitespace-nowrap",children:[(0,a.jsx)("span",{
children:"CONTACT ✦ CONTACT ✦ CONTACT ✦ CONTACT ✦ CONTACT ✦\xa0"
}
),(0,a.jsx)("span",{
children:"CONTACT ✦ CONTACT ✦ CONTACT ✦ CONTACT ✦ CONTACT ✦\xa0"
}
)]
}
),(0,a.jsx)("div",{
className:"border-t border-[#161616] w-full my-4 md:my-6 px-8"
}
),(0,a.jsxs)("div",{
ref:h,className:"max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-[10px] md:text-xs font-semibold font-jakarta tracking-wider text-[#161616]/70 uppercase",children:[(0,a.jsx)("div",{
className:"text-center md:text-left",children:"I'm here to help you turn your brief into something brilliant."
}
),(0,a.jsx)("div",{
className:"text-center",children:"Just drop me a line or interact with the stickers."
}
),(0,a.jsx)("div",{
className:"text-center md:text-right",children:"\xa9 2026 Nand Kishore Soni. All rights reserved"
}
)]
}
)]
}
),(0,a.jsx)("div",{
ref:u,className:"relative w-full flex-grow min-h-[380px] md:min-h-[480px] overflow-hidden select-none pointer-events-auto px-6",children:[{
id:"badge-rock",type:"badge",badgeType:"rock",initialX:"8%",initialY:"18%",rotate:8
}
,{
id:"whatsapp",type:"capsule",label:"WHATSAPP ↗",href:"https://wa.me/917695971840?text=Hi%20Jai%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",initialX:"18%",initialY:"32%",rotate:5
}
,{
id:"twitter",type:"capsule",label:"X (TWITTER) ↗",href:"https://x.com/x_nandkishore",initialX:"65%",initialY:"18%",rotate:-8
}
,{
id:"telegram",type:"capsule",label:"TELEGRAM ↗",href:"https://t.me/@Tm_nandkishore",initialX:"78%",initialY:"55%",rotate:12
}
,{
id:"instagram",type:"capsule",label:"INSTAGRAM ↗",href:"https://www.instagram.com/ig_nandkishore_soni",initialX:"32%",initialY:"12%",rotate:-12
}
,{
id:"badge-lips",type:"badge",badgeType:"lips",initialX:"24%",initialY:"48%",rotate:-8
}
,{
id:"linkedin",type:"capsule",label:"LINKEDIN ↗",href:"https://www.linkedin.com/in/nand-kishore-soni-036783317/",initialX:"8%",initialY:"68%",rotate:15
}
,{
id:"google-skills",type:"capsule",label:"GOOGLE SKILLS ↗",href:"https://www.skills.google/public_profiles/17fd8191-5307-48d9-b9cd-dcd29428e518",initialX:"42%",initialY:"38%",rotate:-6
}
,{
id:"github",type:"capsule",label:"GITHUB ↗",href:"https://github.com/legendxdevil",initialX:"46%",initialY:"64%",rotate:-10
}
,{
id:"badge-heart",type:"badge",badgeType:"heart",initialX:"72%",initialY:"35%",rotate:14
}
,{
id:"send-message",type:"capsule",label:"SEND MESSAGE ✦",isAction:!0,initialX:"62%",initialY:"68%",rotate:6,isPrimary:!0
}
].map(e=>{
let t="capsule"===e.type;
return(0,a.jsx)(o.E.div,{
drag:!0,dragConstraints:u,dragElastic:.15,whileDrag:{
scale:1.05,rotate:0,boxShadow:"0 15px 30px rgba(0, 0, 0, 0.2)",zIndex:50
}
,initial:{
left:e.initialX,top:e.initialY,rotate:e.rotate
}
,className:"absolute select-none group cursor-grab active:cursor-grabbing",style:{
touchAction:"none"
}
,children:t?(0,a.jsx)("div",{
onClick:()=>{
e.isAction?y(!0):e.href&&window.open(e.href,"_blank","noopener,noreferrer")
}
,className:"flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#161616] font-jakarta font-bold text-sm md:text-base shadow-md transition-all duration-300 ".concat(e.isPrimary?"bg-[#F44A22] text-[#FEF8E8] hover:bg-[#F44A22]/90 border-[#161616] shadow-lg shadow-[#F44A22]/15":"bg-[#FEF8E8] text-[#161616] hover:bg-white border-[#161616]"),children:(0,a.jsx)("span",{
children:e.label
}
)
}
):(0,a.jsxs)("div",{
className:"relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#FEF8E8] border border-[#161616] flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden",children:[(0,a.jsxs)("svg",{
viewBox:"0 0 100 100",className:"absolute inset-0 w-full h-full animate-[spin_30s_linear_infinite]",children:[(0,a.jsx)("path",{
id:"circlePath-".concat(e.id),d:"M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0",fill:"none"
}
),(0,a.jsx)("text",{
className:"text-[6.5px] font-bold font-jakarta fill-[#161616] tracking-[0.19em]",children:(0,a.jsx)("textPath",{
href:"#circlePath-".concat(e.id),startOffset:"0%",children:"DRAG ME ✦ DRAG ME ✦ DRAG ME ✦ DRAG ME ✦"
}
)
}
)]
}
),(0,a.jsxs)("div",{
className:"relative z-10 flex items-center justify-center",children:["rock"===e.badgeType&&(0,a.jsxs)("svg",{
viewBox:"0 0 24 24",className:"w-9 h-9 md:w-11 md:h-11 text-[#161616]",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{
d:"M18 10h-2V6a2 2 0 0 0-4 0v4H9V5a2 2 0 0 0-4 0v6.5a4.5 4.5 0 0 0 9 0V10"
}
),(0,a.jsx)("path",{
d:"M5 11.5V7a2 2 0 0 1 4 0v4.5"
}
),(0,a.jsx)("path",{
d:"M17 11.5v3.5a5 5 0 0 1-10 0v-3.5"
}
)]
}
),"lips"===e.badgeType&&(0,a.jsxs)("svg",{
viewBox:"0 0 24 24",className:"w-10 h-10 md:w-12 md:h-12 text-[#161616]",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{
d:"M3 12c3-2 5-3 9-1 4-2 6-1 9 1",fill:"#F44A22"
}
),(0,a.jsx)("path",{
d:"M3 12c4 3 14 3 18 0",fill:"#F44A22"
}
),(0,a.jsx)("path",{
d:"M10 12v3c0 1.5 1 2 2 2s2-.5 2-2v-3",fill:"#FFEAA7"
}
)]
}
),"heart"===e.badgeType&&(0,a.jsxs)("svg",{
viewBox:"0 0 24 24",className:"w-9 h-9 md:w-11 md:h-11 text-[#161616]",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{
d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",fill:"#F44A22"
}
),(0,a.jsx)("path",{
d:"M13 6l-3.5 5.5h3l-2 6 4.5-6.5h-3.5Z",fill:"#FFEAA7"
}
)]
}
)]
}
),"lips"===e.badgeType&&(0,a.jsx)("div",{
className:"absolute bottom-[3px] right-[4px] w-6 h-6 md:w-8 md:h-8 bg-[#E4E2E3] border-l border-t border-[#161616] rounded-tl-full shadow-inner rotate-12 pointer-events-none",style:{
transformOrigin:"bottom right"
}

}
)]
}
)
}
,e.id)
}
)
}
),(0,a.jsxs)("div",{
ref:m,className:"w-full flex flex-col items-center justify-center relative mt-auto px-6 py-4",children:[(0,a.jsx)("span",{
className:"text-[10px] md:text-xs font-semibold font-jakarta tracking-[0.25em] text-[#161616]/50 uppercase mb-2",children:"Click To Copy Email"
}
),(0,a.jsx)("h1",{
onClick:E,className:"font-cormorant font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-none text-[#161616] hover:text-[#F44A22] active:scale-95 transition-all duration-500 text-center select-none cursor-pointer tracking-tighter w-full max-w-7xl break-all",children:"nandkishorsoni098765@gmail.com"
}
),(0,a.jsx)(n.M,{
children:f&&(0,a.jsxs)(o.E.span,{
initial:{
opacity:0,y:15,scale:.9
}
,animate:{
opacity:1,y:0,scale:1
}
,exit:{
opacity:0,y:15,scale:.9
}
,className:"absolute -top-12 bg-[#F44A22] text-[#FEF8E8] text-xs font-bold px-4 py-2 rounded-xl shadow-lg border border-[#161616] flex items-center gap-1.5",children:[(0,a.jsx)(d.Z,{
size:14
}
)," Copied to Clipboard!"]
}
)
}
)]
}
),(0,a.jsx)(n.M,{
children:j&&(0,a.jsx)(o.E.div,{
initial:{
opacity:0
}
,animate:{
opacity:1
}
,exit:{
opacity:0
}
,className:"fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-sm px-6",children:(0,a.jsxs)(o.E.div,{
initial:{
scale:.95,y:30
}
,animate:{
scale:1,y:0
}
,exit:{
scale:.95,y:30
}
,transition:{
type:"spring",damping:25,stiffness:350
}
,className:"bg-[#FEF8E8] border border-[#161616] shadow-2xl rounded-3xl p-6 md:p-10 max-w-xl w-full text-[#161616] relative flex flex-col justify-between overflow-hidden",children:[(0,a.jsx)("button",{
onClick:()=>y(!1),className:"absolute top-6 right-6 w-9 h-9 rounded-full border border-[#161616] flex items-center justify-center hover:bg-[#F44A22] hover:text-white transition-colors duration-300 cursor-pointer",children:(0,a.jsx)(c.Z,{
size:18
}
)
}
),(0,a.jsxs)("div",{
children:[(0,a.jsx)("span",{
className:"text-xs font-bold tracking-widest text-[#F44A22] uppercase font-jakarta",children:"Direct Line"
}
),(0,a.jsx)("h3",{
className:"text-3xl font-bold mt-1 mb-6 tracking-tight font-sans",children:"Drop A Message"
}
),(0,a.jsxs)("form",{
onSubmit:T,className:"flex flex-col gap-5",children:[(0,a.jsxs)("div",{
className:"relative w-full",children:[(0,a.jsx)("input",{
type:"text",id:"name",name:"name",value:A.name,onChange:C,placeholder:" ",required:!0,disabled:v.submitting,className:"peer w-full pt-6 pb-2 px-4 bg-white/20 border border-[#161616] rounded-2xl text-palette-midnight focus:outline-none focus:border-[#F44A22] focus:bg-white/60 transition-all duration-300 text-base"
}
),(0,a.jsx)("label",{
htmlFor:"name",className:"absolute left-4 top-4 text-palette-stone text-base pointer-events-none transition-all duration-300  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base  peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#F44A22] peer-focus:font-semibold peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#161616]/75",children:"Your Name"
}
)]
}
),(0,a.jsx)(x.p8,{
field:"name",errors:v.errors,className:"text-[#F44A22] text-xs -mt-3 font-semibold font-jakarta"
}
),(0,a.jsxs)("div",{
className:"relative w-full",children:[(0,a.jsx)("input",{
type:"email",id:"email",name:"email",value:A.email,onChange:C,placeholder:" ",required:!0,disabled:v.submitting,className:"peer w-full pt-6 pb-2 px-4 bg-white/20 border border-[#161616] rounded-2xl text-palette-midnight focus:outline-none focus:border-[#F44A22] focus:bg-white/60 transition-all duration-300 text-base"
}
),(0,a.jsx)("label",{
htmlFor:"email",className:"absolute left-4 top-4 text-palette-stone text-base pointer-events-none transition-all duration-300  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base  peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#F44A22] peer-focus:font-semibold peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#161616]/75",children:"Your Email"
}
)]
}
),(0,a.jsx)(x.p8,{
field:"email",errors:v.errors,className:"text-[#F44A22] text-xs -mt-3 font-semibold font-jakarta"
}
),(0,a.jsxs)("div",{
className:"relative w-full",children:[(0,a.jsx)("input",{
type:"text",id:"subject",name:"subject",value:A.subject,onChange:C,placeholder:" ",required:!0,disabled:v.submitting,className:"peer w-full pt-6 pb-2 px-4 bg-white/20 border border-[#161616] rounded-2xl text-palette-midnight focus:outline-none focus:border-[#F44A22] focus:bg-white/60 transition-all duration-300 text-base"
}
),(0,a.jsx)("label",{
htmlFor:"subject",className:"absolute left-4 top-4 text-palette-stone text-base pointer-events-none transition-all duration-300  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base  peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#F44A22] peer-focus:font-semibold peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#161616]/75",children:"Subject"
}
)]
}
),(0,a.jsx)(x.p8,{
field:"subject",errors:v.errors,className:"text-[#F44A22] text-xs -mt-3 font-semibold font-jakarta"
}
),(0,a.jsxs)("div",{
className:"relative w-full",children:[(0,a.jsx)("textarea",{
id:"message",name:"message",rows:4,value:A.message,onChange:C,placeholder:" ",required:!0,disabled:v.submitting,className:"peer w-full pt-6 pb-3 px-4 bg-white/20 border border-[#161616] rounded-2xl text-palette-midnight focus:outline-none focus:border-[#F44A22] focus:bg-white/60 transition-all duration-300 text-base resize-none"
}
),(0,a.jsx)("label",{
htmlFor:"message",className:"absolute left-4 top-4 text-palette-stone text-base pointer-events-none transition-all duration-300  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base  peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#F44A22] peer-focus:font-semibold peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#161616]/75",children:"Message"
}
)]
}
),(0,a.jsx)(x.p8,{
field:"message",errors:v.errors,className:"text-[#F44A22] text-xs -mt-3 font-semibold font-jakarta"
}
),(0,a.jsx)("button",{
type:"submit",disabled:v.submitting,className:"w-full py-4 bg-[#F44A22] text-[#FEF8E8] font-semibold border border-[#161616] rounded-2xl hover:bg-[#F44A22]/90 hover:scale-[1.01] active:scale-[0.99] disabled:bg-gray-400 disabled:scale-100 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-[#F44A22]/20 flex items-center justify-center gap-2 group cursor-pointer",children:v.submitting?(0,a.jsxs)(a.Fragment,{
children:[(0,a.jsxs)("svg",{
className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{
className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"
}
),(0,a.jsx)("path",{
className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}
)]
}
),(0,a.jsx)("span",{
children:"Sending Message..."
}
)]
}
):(0,a.jsxs)(a.Fragment,{
children:[(0,a.jsx)("span",{
children:"Send Message"
}
),(0,a.jsx)(p.Z,{
size:18,className:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
}
)]
}
)
}
)]
}
)]
}
)]
}
)
}
)
}
),(0,a.jsx)(n.M,{
children:g&&(0,a.jsx)(o.E.div,{
initial:{
opacity:0
}
,animate:{
opacity:1
}
,exit:{
opacity:0
}
,className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md px-4",children:(0,a.jsxs)(o.E.div,{
initial:{
scale:.9,y:20
}
,animate:{
scale:1,y:0
}
,exit:{
scale:.9,y:20
}
,transition:{
type:"spring",damping:25,stiffness:350
}
,className:"bg-[#FEF8E8] border border-[#161616] shadow-2xl rounded-3xl p-8 md:p-10 max-w-md w-full text-center relative overflow-hidden flex flex-col items-center justify-center",children:[(0,a.jsx)("div",{
className:"w-20 h-20 text-[#F44A22] mb-6 flex items-center justify-center",children:(0,a.jsxs)("svg",{
className:"w-full h-full",viewBox:"0 0 52 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)(o.E.circle,{
cx:"26",cy:"26",r:"23",stroke:"currentColor",strokeWidth:"4",initial:{
pathLength:0
}
,animate:{
pathLength:1
}
,transition:{
duration:.6,ease:"easeOut"
}

}
),(0,a.jsx)(o.E.path,{
d:"M16 26L23 33L36 18",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",initial:{
pathLength:0
}
,animate:{
pathLength:1
}
,transition:{
delay:.5,duration:.4,ease:"easeOut"
}

}
)]
}
)
}
),(0,a.jsx)("h4",{
className:"text-3xl font-semibold tracking-wider text-[#F44A22] mb-3",style:{
fontFamily:"'Samarkan', sans-serif"
}
,children:"Message Sent!"
}
),(0,a.jsx)("p",{
className:"text-[#161616]/80 font-light leading-relaxed mb-8",children:"Thank you for reaching out! Your message was sent successfully. Nand Kishore Soni will get back to you shortly."
}
),(0,a.jsx)("button",{
onClick:()=>{
w(!1),k()
}
,className:"px-8 py-3 bg-palette-midnight border border-[#161616] hover:bg-[#F44A22] hover:text-[#FEF8E8] text-white rounded-xl shadow-lg transition-colors duration-300 font-semibold cursor-pointer",children:"Back to Site"
}
)]
}
)
}
)
}
)]
}
)
}

}

}
,function(e){
e.O(0,[922,498,977,971,117,744],function(){
return e(e.s=321)
}
),_N_E=e.O()
}
]);
