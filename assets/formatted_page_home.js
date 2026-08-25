(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{
8769:function(e,t,n){
Promise.resolve().then(n.bind(n,4880))
}
,3897:function(e,t,n){
"use strict";
n.d(t,{
V:function(){
return d
}

}
);
var r=n(2265),s=n(6498);
let i="undefined"!=typeof document?r.useLayoutEffect:r.useEffect,a=e=>e&&!Array.isArray(e)&&"object"==typeof e,l=[],o={

}
,c=s.ZP,d=(e,t=l)=>{
let n=o;
a(e)?(n=e,e=null,t="dependencies"in n?n.dependencies:l):a(t)&&(t="dependencies"in(n=t)?n.dependencies:l),e&&"function"!=typeof e&&console.warn("First parameter must be a function or config object");
let{
scope:s,revertOnUpdate:d
}
=n,u=(0,r.useRef)(!1),x=(0,r.useRef)(c.context(()=>{

}
,s)),f=(0,r.useRef)(e=>x.current.add(null,e)),m=t&&t.length&&!d;
return m&&i(()=>(u.current=!0,()=>x.current.revert()),l),i(()=>{
if(e&&x.current.add(e,s),!m||!u.current)return()=>x.current.revert()
}
,t),{
context:x.current,contextSafe:f.current
}

}
;
d.register=e=>{
c=e
}
,d.headless=!0
}
,9376:function(e,t,n){
"use strict";
var r=n(5475);
n.o(r,"usePathname")&&n.d(t,{
usePathname:function(){
return r.usePathname
}

}
),n.o(r,"useRouter")&&n.d(t,{
useRouter:function(){
return r.useRouter
}

}
)
}
,4880:function(e,t,n){
"use strict";
n.d(t,{
default:function(){
return o
}

}
);
var r=n(7437),s=n(2265),i=n(6498),a=n(3897),l=n(2313);
function o(){
let e=(0,s.useRef)(null),t=(0,s.useRef)(null),n=(0,s.useRef)(null),o=(0,s.useRef)(null),{
startTransition:c
}
=(0,l.C)(),d=(0,s.useMemo)(()=>["UI/UX DESIGNER","FULL-STACK DEVELOPER","CREATIVE CODER","INNOVATE SOLUTIONS","DESIGN EXPERIENCES"],[]),[u,x]=(0,s.useState)(0),[f,m]=(0,s.useState)(""),[h,p]=(0,s.useState)(!1);
return(0,s.useEffect)(()=>{
let e;
let t=d[u],n=h?40:80,r=()=>{
if(h){
let e=t.slice(0,f.length-1);
if(m(e),""===e){
p(!1),x(e=>(e+1)%d.length);
return
}

}
else{
let n=t.slice(0,f.length+1);
if(m(n),n===t){
e=setTimeout(()=>p(!0),2e3);
return
}

}
e=setTimeout(r,n)
}
;
return e=setTimeout(r,n),()=>clearTimeout(e)
}
,[f,h,u,d]),(0,a.V)(()=>{
let e=i.ZP.timeline({
delay:.2
}
),t=window.innerWidth/2-120,r=window.innerHeight/2-30;
e.from(n.current,{
x:t,y:r,xPercent:-50,yPercent:-50,scale:3,duration:1.5,ease:"power3.inOut"
}
),e.from(o.current,{
opacity:0,duration:1.2,ease:"power2.inOut"
}
,"-=0.3")
}
,{
scope:e
}
),(0,s.useEffect)(()=>{
let e;
let n=t.current;
if(!n)return;
let r=n.getContext("2d");
if(!r)return;
let s=0,i=0,a=window.innerWidth/2,l=window.innerHeight/2,o=0,c=()=>{
s=window.innerWidth,i=window.innerHeight,n.width=s,n.height=i
}
,d=e=>{
let t=n.getBoundingClientRect();
a=e.clientX-t.left,l=e.clientY-t.top
}
;
window.addEventListener("resize",c),window.addEventListener("mousemove",d),c();
let u=(e,t)=>{
let n=e-a,r=t-l,s=Math.sqrt(n*n+r*r);
if(s<250&&s>0){
let i=s/250,a=15*Math.sin(.05*s-4*o)*(1-i*i*(3-2*i));
return{
x:e+n/s*a,y:t+r/s*a
}

}
return{
x:e,y:t
}

}
,x=(e,t,n,s)=>{
let i=u(e,t);
r.moveTo(i.x,i.y);
for(let i=1;
i<=15;
i++){
let a=i/15,l=u(e+(n-e)*a,t+(s-t)*a);
r.lineTo(l.x,l.y)
}

}
;
return function t(){
if(!r)return;
o+=.02,r.fillStyle="#E4E2E3",r.fillRect(0,0,s,i);
let n=s/2,c=i/2;
r.strokeStyle="rgba(22, 22, 22, 0.08)",r.lineWidth=1.5,r.beginPath();
for(let e=1;
e<6;
e++)x(n,c,0,i/6*e),x(n,c,s,i/6*e);
for(let e=1;
e<9;
e++)x(n,c,s/9*e,0),x(n,c,s/9*e,i);
x(n,c,0,0),x(n,c,s,0),x(n,c,0,i),x(n,c,s,i),r.stroke();
let d=s/2/3,u=i/2/3;
r.fillStyle="#E4E2E3",r.fillRect(n-d,c-u,2*d,2*u),r.beginPath();
for(let e=1;
e<6;
e++){
let t=c+(i/6*e-c)/3;
x(n-d,t,n+d,t)
}
for(let e=1;
e<9;
e++){
let t=n+(s/9*e-n)/3;
x(t,c-u,t,c+u)
}
r.stroke(),r.beginPath();
for(let e=0;
e<=5;
e++){
let t=1+.4*e,r=s/2/t,a=i/2/t;
x(n-r,c-a,n+r,c-a),x(n+r,c-a,n+r,c+a),x(n+r,c+a,n-r,c+a),x(n-r,c+a,n-r,c-a)
}
r.stroke();
let f=r.createRadialGradient(a,l,0,a,l,180);
f.addColorStop(0,"rgba(244, 74, 34, 0.18)"),f.addColorStop(1,"rgba(244, 74, 34, 0)"),r.fillStyle=f,r.fillRect(0,0,s,i),e=requestAnimationFrame(t)
}
(),()=>{
window.removeEventListener("resize",c),window.removeEventListener("mousemove",d),cancelAnimationFrame(e)
}

}
,[]),(0,r.jsxs)("section",{
ref:e,className:"relative w-full h-screen bg-[#E4E2E3] overflow-hidden flex items-center justify-center select-none font-jakarta",children:[(0,r.jsx)("canvas",{
ref:t,className:"absolute inset-0 w-full h-full pointer-events-auto z-0"
}
),(0,r.jsxs)("div",{
className:"absolute top-6 left-8 right-8 z-40 flex justify-between items-start pointer-events-none",children:[(0,r.jsx)("div",{
ref:n,className:"pointer-events-auto origin-left pt-2",children:(0,r.jsxs)("div",{
className:"flex items-center gap-3",children:[(0,r.jsx)("svg",{
className:"w-9 h-9 text-[#F44A22] drop-shadow-[0_0_10px_rgba(244,74,34,0.4)] animate-pulse",fill:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{
d:"M12 0L15.3 8.7L24 12L15.3 15.3L12 24L8.7 15.3L0 12L8.7 8.7Z"
}
)
}
),(0,r.jsx)("span",{
className:"text-xl md:text-2xl tracking-widest text-[#F44A22] uppercase leading-none",style:{
fontFamily:"'Samarkan', sans-serif"
}
,children:"PORTFOLIO"
}
)]
}
)
}
),(0,r.jsxs)("div",{
className:"pointer-events-auto hidden lg:flex flex-col items-end text-right gap-3 max-w-[280px] pt-1",children:[(0,r.jsx)("div",{
className:"select-none origin-right",children:(0,r.jsx)("div",{
className:"text-[#161616] hover:text-[#F44A22] text-3xl font-medium tracking-wide whitespace-nowrap transform -rotate-6 transition-all duration-300 hover:scale-105 cursor-default",style:{
fontFamily:"'RonthelBrush', cursive"
}
,children:"Nand Kishore"
}
)
}
),(0,r.jsx)("p",{
className:"text-[#161616]/85 text-xs font-jakarta leading-relaxed font-medium mt-1",children:"Hi, I'm Nand Kishore Soni. I bridge the gap between engineering and art to design immersive, high-performance web experiences."
}
),(0,r.jsxs)("button",{
onClick:()=>c("/contact"),className:"group relative flex items-center gap-2.5 px-4 py-2 border border-[#161616]/30 rounded-full text-[#161616] text-[10px] font-bold tracking-widest hover:border-[#F44A22] hover:text-[#F44A22] transition-all duration-300 active:scale-95 bg-white/10 backdrop-blur-sm shadow-sm mt-1",children:[(0,r.jsx)("span",{
children:"GET IN TOUCH"
}
),(0,r.jsx)("svg",{
className:"w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300",fill:"none",stroke:"currentColor",strokeWidth:"2.5",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{
strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
}
)
}
)]
}
)]
}
)]
}
),(0,r.jsxs)("div",{
ref:o,className:"absolute inset-0 w-full h-full pointer-events-none z-10",children:[(0,r.jsxs)("div",{
className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-10 mt-[-40px]",children:[(0,r.jsx)("h1",{
className:"font-oswald font-black text-[9vw] uppercase leading-[0.8] text-[#161616] opacity-10 tracking-tighter",children:"I'M BORN TO"
}
),(0,r.jsxs)("h1",{
className:"font-oswald font-black text-[6.5vw] md:text-[8vw] uppercase leading-[0.8] text-stroke-orange tracking-tighter mt-4 min-h-[1.1em] text-center w-full px-4",children:[f,(0,r.jsx)("span",{
className:"animate-pulse opacity-80 select-none",children:"|"
}
)]
}
)]
}
),(0,r.jsx)("img",{
src:"/main-image.png",alt:"Main Cutout",className:"absolute bottom-12 left-1/2 -translate-x-1/2 z-20 w-[95%] h-[82%] max-w-xl object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)] select-none pointer-events-none hidden lg:block"
}
),(0,r.jsx)("img",{
src:"/main-image.png",alt:"Main Cutout Mobile",className:"absolute bottom-40 left-1/2 -translate-x-1/2 z-20 w-[85%] h-[58%] object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] select-none pointer-events-none lg:hidden"
}
),(0,r.jsx)("div",{
className:"absolute bottom-24 left-8 z-30 hidden lg:flex flex-col items-start text-left pointer-events-auto",children:(0,r.jsxs)("div",{
className:"flex flex-col gap-5 text-[#161616] font-jakarta w-48",children:[(0,r.jsxs)("div",{
className:"border-t border-[#161616]/10 pt-3",children:[(0,r.jsx)("h3",{
className:"text-3xl font-extrabold text-[#F44A22] font-oswald tracking-tight",children:"3+"
}
),(0,r.jsx)("p",{
className:"text-[#161616]/60 text-[10px] tracking-wider uppercase mt-0.5",children:"Years Experience"
}
)]
}
),(0,r.jsxs)("div",{
className:"border-t border-[#161616]/10 pt-3",children:[(0,r.jsx)("h3",{
className:"text-3xl font-extrabold text-[#F44A22] font-oswald tracking-tight",children:"30+"
}
),(0,r.jsx)("p",{
className:"text-[#161616]/60 text-[10px] tracking-wider uppercase mt-0.5",children:"Projects Done"
}
)]
}
),(0,r.jsxs)("div",{
className:"border-t border-[#161616]/10 pt-3",children:[(0,r.jsx)("h3",{
className:"text-3xl font-extrabold text-[#F44A22] font-oswald tracking-tight",children:"100%"
}
),(0,r.jsx)("p",{
className:"text-[#161616]/60 text-[10px] tracking-wider uppercase mt-0.5",children:"Creative Drive"
}
)]
}
)]
}
)
}
),(0,r.jsxs)("div",{
className:"absolute bottom-20 left-6 right-6 z-30 flex flex-col items-center justify-center text-center lg:hidden bg-white/45 backdrop-blur-md p-5 rounded-2xl border border-white/30 pointer-events-auto max-w-md mx-auto",children:[(0,r.jsx)("p",{
className:"text-[#161616] text-xs font-jakarta leading-relaxed mb-4",children:"Hi, I'm Nand Kishore Soni. I bridge the gap between engineering and art to design immersive, high-performance web experiences."
}
),(0,r.jsx)("div",{
className:"flex items-center gap-4 w-full justify-center",children:(0,r.jsxs)("button",{
onClick:()=>c("/contact"),className:"flex items-center justify-center gap-2 px-5 py-2.5 bg-[#F44A22] text-white rounded-full text-xs font-bold tracking-widest active:scale-95 transition-transform shadow-md",children:[(0,r.jsx)("span",{
children:"GET IN TOUCH"
}
),(0,r.jsx)("svg",{
className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:"2.5",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{
strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
}
)
}
)]
}
)
}
)]
}
)]
}
),(0,r.jsx)("div",{
className:"absolute bottom-6 left-1/2 -translate-x-1/2 w-[110vw] max-w-[110%] bg-[#F44A22] py-3.5 border-t border-b border-[#161616]/20 overflow-hidden z-40 select-none rotate-[-2deg] origin-center shadow-lg",children:(0,r.jsx)("div",{
className:"animate-marquee font-oswald text-[#FEF8E8] text-base md:text-lg font-extrabold uppercase tracking-widest flex items-center gap-12 whitespace-nowrap",children:Array.from({
length:4
}
).map((e,t)=>(0,r.jsxs)("span",{
className:"flex items-center gap-12",children:[(0,r.jsx)("span",{
children:"CREATIVE CODE"
}
),(0,r.jsx)("span",{
className:"text-[#FEF8E8]/55",children:"✦"
}
),(0,r.jsx)("span",{
children:"FULLSTACK DEVELOPER"
}
),(0,r.jsx)("span",{
className:"text-[#FEF8E8]/55",children:"✦"
}
),(0,r.jsx)("span",{
children:"WEB DESIGNER"
}
),(0,r.jsx)("span",{
className:"text-[#FEF8E8]/55",children:"✦"
}
),(0,r.jsx)("span",{
children:"ANIMATION SPECIALIST"
}
),(0,r.jsx)("span",{
className:"text-[#FEF8E8]/55",children:"✦"
}
),(0,r.jsx)("span",{
children:"UI/UX INNOVATION"
}
),(0,r.jsx)("span",{
className:"text-[#FEF8E8]/55",children:"✦"
}
)]
}
,t))
}
)
}
)]
}
)
}

}
,2313:function(e,t,n){
"use strict";
n.d(t,{
C:function(){
return o
}
,PageTransitionProvider:function(){
return d
}

}
);
var r=n(7437),s=n(2265),i=n(9376),a=n(6498);
let l=(0,s.createContext)(null),o=()=>{
let e=(0,s.useContext)(l);
if(!e)throw Error("usePageTransition must be used within a PageTransitionProvider");
return e
}
,c=()=>(0,r.jsxs)("div",{
className:"absolute inset-0 w-full h-full bg-[#161616]",children:[(0,r.jsx)("svg",{
viewBox:"0 0 100 100",preserveAspectRatio:"none",className:"absolute bottom-full left-0 w-full h-[15vh] fill-[#161616] pointer-events-none",children:(0,r.jsx)("path",{
d:"M 0 100 C 30 0, 70 0, 100 100 Z"
}
)
}
),(0,r.jsx)("svg",{
viewBox:"0 0 100 100",preserveAspectRatio:"none",className:"absolute top-full left-0 w-full h-[15vh] fill-[#161616] pointer-events-none",children:(0,r.jsx)("path",{
d:"M 0 0 C 30 100, 70 100, 100 0 Z"
}
)
}
)]
}
),d=e=>{
let{
children:t
}
=e,n=(0,i.useRouter)(),o=(0,s.useRef)(!1),d=(0,s.useRef)(null),u=(0,s.useRef)([]),x=()=>{
a.ZP.timeline({
onComplete:()=>{
o.current=!1,d.current&&(d.current.style.pointerEvents="none")
}

}
).to(u.current,{
y:"-115%",duration:.7,stagger:{
each:.08,from:"end"
}
,ease:"power2.inOut"
}
)
}
;
return(0,r.jsxs)(l.Provider,{
value:{
startTransition:e=>{
o.current||(o.current=!0,d.current&&(d.current.style.pointerEvents="auto"),a.ZP.timeline({
onComplete:()=>{
n.push(e),setTimeout(()=>{
x()
}
,150)
}

}
).to(u.current,{
y:"0%",duration:.7,stagger:.08,ease:"power2.inOut"
}
))
}

}
,children:[t,(0,r.jsx)("div",{
ref:d,className:"fixed inset-0 z-[9999] pointer-events-none flex",children:Array.from({
length:6
}
).map((e,t)=>(0,r.jsx)("div",{
ref:e=>{
u.current[t]=e
}
,className:"w-[16.667%] h-[100vh] relative flex-shrink-0",style:{
transform:"translateY(-115%)"
}
,children:(0,r.jsx)(c,{

}
)
}
,t))
}
)]
}
)
}

}

}
,function(e){
e.O(0,[922,498,971,117,744],function(){
return e(e.s=8769)
}
),_N_E=e.O()
}
]);
