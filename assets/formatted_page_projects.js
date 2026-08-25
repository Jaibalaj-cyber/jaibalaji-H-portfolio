(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{
754:function(e,t,r){
Promise.resolve().then(r.bind(r,6919))
}
,3897:function(e,t,r){
"use strict";
r.d(t,{
V:function(){
return p
}

}
);
var l=r(2265),n=r(6498);
let o="undefined"!=typeof document?l.useLayoutEffect:l.useEffect,a=e=>e&&!Array.isArray(e)&&"object"==typeof e,i=[],s={

}
,c=n.ZP,p=(e,t=i)=>{
let r=s;
a(e)?(r=e,e=null,t="dependencies"in r?r.dependencies:i):a(t)&&(t="dependencies"in(r=t)?r.dependencies:i),e&&"function"!=typeof e&&console.warn("First parameter must be a function or config object");
let{
scope:n,revertOnUpdate:p
}
=r,d=(0,l.useRef)(!1),u=(0,l.useRef)(c.context(()=>{

}
,n)),f=(0,l.useRef)(e=>u.current.add(null,e)),h=t&&t.length&&!p;
return h&&o(()=>(d.current=!0,()=>u.current.revert()),i),o(()=>{
if(e&&u.current.add(e,n),!h||!d.current)return()=>u.current.revert()
}
,t),{
context:u.current,contextSafe:f.current
}

}
;
p.register=e=>{
c=e
}
,p.headless=!0
}
,6919:function(e,t,r){
"use strict";
r.r(t),r.d(t,{
default:function(){
return s
}

}
);
var l=r(7437),n=r(2265),o=r(6498),a=r(3897);
let i=n.forwardRef((e,t)=>{
let{
className:r="w-full max-w-full",...n
}
=e,o=()=>(0,l.jsx)("div",{
className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/25 backdrop-blur-md border border-white/40 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-xl z-20 pointer-events-none",children:(0,l.jsx)("svg",{
className:"w-5 h-5 text-[#F44A22] transform transition-transform duration-300 group-hover:rotate-45",fill:"none",stroke:"currentColor",strokeWidth:"2.5",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{
strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
}
)
}
)
}
),a=(e,t)=>(0,l.jsxs)("div",{
className:"w-full aspect-[4/5] bg-[#161616] relative overflow-hidden group-hover:scale-105 transition-transform duration-500 flex items-center justify-center select-none",children:[(0,l.jsx)("div",{
className:"absolute w-[95%] h-[65%] -top-[25%] left-[2.5%] rounded-full blur-[40px] opacity-80 pointer-events-none animate-float-fast-top",style:{
backgroundColor:"#ffffff"
}

}
),(0,l.jsx)("div",{
className:"absolute w-[85%] h-[85%] top-[10%] -left-[10%] rounded-full blur-[35px] opacity-75 pointer-events-none animate-float-medium-mid",style:{
backgroundColor:t.primary
}

}
),(0,l.jsx)("div",{
className:"absolute w-[85%] h-[85%] top-[15%] -right-[10%] rounded-full blur-[35px] opacity-75 pointer-events-none animate-float-medium-mid-delayed",style:{
backgroundColor:t.secondary
}

}
),(0,l.jsx)("div",{
className:"absolute w-[100%] h-[60%] -bottom-[25%] left-0 rounded-full blur-[30px] opacity-90 pointer-events-none animate-float-slow-bottom",style:{
backgroundColor:"#161616"
}

}
),(0,l.jsx)("div",{
className:"absolute inset-0 opacity-[0.22] pointer-events-none mix-blend-overlay z-10",style:{
backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
}

}
),(0,l.jsx)("span",{
className:"relative z-20 text-[#FEF8E8] font-cormorant font-bold text-5xl md:text-6xl opacity-40 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none",children:e
}
)]
}
);
return(0,l.jsxs)("div",{
ref:t,className:r,...n,children:[(0,l.jsx)("svg",{
className:"clipppy absolute -top-[999px] -left-[999px] w-0 h-0",children:(0,l.jsxs)("defs",{
children:[(0,l.jsx)("clipPath",{
id:"clip-pattern",clipPathUnits:"objectBoundingBox",children:(0,l.jsx)("path",{
fillRule:"evenodd",clipRule:"evenodd",d:"M0.71161 0H0V1H0.0362048C0.236734 1 0.42296 0.940031 0.577199 0.837408H0.74407V0.718826H0.888889V0.5H1V0.0562347V0H0.71161Z",fill:"#D9D9D9"
}
)
}
),(0,l.jsx)("clipPath",{
id:"clip-pattern1",clipPathUnits:"objectBoundingBox",children:(0,l.jsx)("path",{
fillRule:"evenodd",clipRule:"evenodd",d:"M0.00124689 0H1V0.665217V0.88913V0.890217C1 0.950849 0.943617 1 0.874065 1C0.804513 1 0.74813 0.950849 0.74813 0.890217V0.890761C0.74813 0.951092 0.692026 1 0.622818 1C0.559929 1 0.50786 0.959615 0.498877 0.906971C0.490714 0.959506 0.439061 1 0.376559 1C0.311952 1 0.258938 0.956733 0.253565 0.901625C0.246444 0.956975 0.192577 1 0.127182 1C0.0569414 1 0 0.950362 0 0.88913V0.666304C0 0.661014 0.00042501 0.655811 0.00124689 0.650718V0Z",fill:"#D9D9D9"
}
)
}
),(0,l.jsx)("clipPath",{
id:"clip-pattern2",clipPathUnits:"objectBoundingBox",children:(0,l.jsx)("path",{
fillRule:"evenodd",clipRule:"evenodd",d:"M0.827825 0.233206C0.928457 0.262983 1 0.338976 1 0.428023V0.964491C1 0.984102 0.979649 1 0.954545 1H0.0454546C0.0203507 1 0 0.984102 0 0.964491V0.428023C0 0.338976 0.0715426 0.262983 0.172175 0.233206C0.187663 0.102409 0.328522 0 0.5 0C0.671478 0 0.812337 0.102409 0.827825 0.233206Z",fill:"#D9D9D9"
}
)
}
),(0,l.jsx)("clipPath",{
id:"clip-pattern3",clipPathUnits:"objectBoundingBox",children:(0,l.jsx)("path",{
d:"M1 1H0.293592V0.868235H0V0.412941C0.0268256 0.241176 0.256754 0.0822454 0.500745 0C0.788326 0.098025 0.962742 0.26 0.99851 0.409412L1 1Z",fill:"#D9D9D9"
}
)
}
),(0,l.jsx)("clipPath",{
id:"clip-pattern4",clipPathUnits:"objectBoundingBox",children:(0,l.jsx)("path",{
d:"M0.997417 0.541807C1.02854 0.316235 0.773628 -0.00919936 0.492039 0.000199072C0.249199 0.00830422 0 0.217547 0 0.539457C0.0251948 0.836695 0.248984 1 0.492039 1C0.745469 1 0.982596 0.83787 0.997417 0.541807Z",fill:"#D9D9D9"
}
)
}
),(0,l.jsx)("clipPath",{
id:"clip-pattern5",clipPathUnits:"objectBoundingBox",children:(0,l.jsx)("path",{
d:"M0.00886287 0.313679C0.0269396 0.216981 0.172073 0 0.502947 0C0.798211 0 0.962906 0.196934 0.992581 0.318396C1.02374 0.511792 0.937683 0.525943 0.921363 0.625C0.921363 0.716981 1 0.746462 1 0.833726C0.988294 0.89801 0.974952 0.93728 0.949553 1H0.0504066C0.0237622 0.936348 0.00886178 0.908019 0.00292682 0.834906C-0.0104279 0.748821 0.0726626 0.735849 0.0771149 0.625C0.0696933 0.525943 -0.0297155 0.520047 0.00886287 0.313679Z",fill:"#D9D9D9"
}
)
}
),(0,l.jsx)("clipPath",{
id:"clip-pattern6",clipPathUnits:"objectBoundingBox",children:(0,l.jsx)("path",{
d:"M0 1H0.152466C0.185351 0.960002 0.327354 0.884713 0.505232 0.884713C0.683109 0.884713 0.818635 0.968237 0.849028 1H1V0.347104C0.985052 0.222406 0.838565 0.00477544 0.497758 6.98837e-05C0.156951 -0.00463567 0.0239163 0.229466 0 0.347104V1Z",fill:"#D9D9D9"
}
)
}
),(0,l.jsx)("clipPath",{
id:"clip-pattern7",clipPathUnits:"objectBoundingBox",children:(0,l.jsx)("path",{
d:"M0 0.578143V0H0.298507C0.725373 0.027027 0.958209 0.27027 1 0.518214V1H0.147761V0.694477H0.061194V0.578143H0Z",fill:"#D9D9D9"
}
)
}
),(0,l.jsx)("clipPath",{
id:"clip-pattern8",clipPathUnits:"objectBoundingBox",children:(0,l.jsx)("path",{
d:"M1 1H0V0.365648C0.0111437 0.322987 0.0446555 0.306894 0.110945 0.298564C0 0.231481 0.0794603 0.107906 0.22039 0.166751C0.157421 0.0690679 0.296852 -0.0156706 0.398801 0.0855445C0.407796 -0.0215584 0.578711 -0.0356796 0.604198 0.0867166C0.673163 -0.00154936 0.836582 0.0502345 0.782609 0.163217C0.890555 0.113787 1.01499 0.220886 0.887556 0.302092C0.957241 0.303259 0.983419 0.319478 1 0.365648V1Z",fill:"#D9D9D9"
}
)
}
),(0,l.jsx)("clipPath",{
id:"clip-inverted",clipPathUnits:"objectBoundingBox",children:(0,l.jsx)("path",{
d:"M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z",fill:"#D9D9D9"
}
)
}
)]
}
)
}
),(0,l.jsxs)("section",{
className:"grid grid-cols-3 gap-4 w-full p-0 bg-transparent",children:[(0,l.jsxs)("a",{
href:"https://tow-way-connect.vercel.app/",target:"_blank",rel:"noopener noreferrer",className:"relative group block overflow-hidden select-none",style:{
clipPath:"url(#clip-pattern)"
}
,children:[a("01",{
primary:"#F44A22",secondary:"#D1C4E9",tertiary:"#161616"
}
),o()]
}
),(0,l.jsxs)("a",{
href:"https://respberrypi.netlify.app/",target:"_blank",rel:"noopener noreferrer",className:"relative group block overflow-hidden select-none",style:{
clipPath:"url(#clip-pattern1)"
}
,children:[a("02",{
primary:"#00F2FE",secondary:"#4FACFE",tertiary:"#161616"
}
),o()]
}
),(0,l.jsxs)("a",{
href:"https://nexusstudioo.netlify.app/",target:"_blank",rel:"noopener noreferrer",className:"relative group block overflow-hidden select-none",style:{
clipPath:"url(#clip-pattern2)"
}
,children:[a("03",{
primary:"#9B51E0",secondary:"#E94057",tertiary:"#161616"
}
),o()]
}
),(0,l.jsxs)("a",{
href:"https://middlebridgesolution.vercel.app/",target:"_blank",rel:"noopener noreferrer",className:"relative group block overflow-hidden select-none",style:{
clipPath:"url(#clip-pattern3)"
}
,children:[a("04",{
primary:"#FFAD29",secondary:"#F44A22",tertiary:"#161616"
}
),o()]
}
),(0,l.jsxs)("a",{
href:"https://soft-halva-29b0d0.netlify.app/",target:"_blank",rel:"noopener noreferrer",className:"relative group block overflow-hidden select-none",style:{
clipPath:"url(#clip-pattern4)"
}
,children:[a("05",{
primary:"#38EF7D",secondary:"#11998E",tertiary:"#161616"
}
),o()]
}
),(0,l.jsxs)("a",{
href:"https://online-life-ecommerce.vercel.app/",target:"_blank",rel:"noopener noreferrer",className:"relative group block overflow-hidden select-none",style:{
clipPath:"url(#clip-pattern5)"
}
,children:[a("06",{
primary:"#8A2387",secondary:"#E94057",tertiary:"#161616"
}
),o()]
}
),(0,l.jsxs)("a",{
href:"https://golden-caramel-c8126d.netlify.app/",target:"_blank",rel:"noopener noreferrer",className:"relative group block overflow-hidden select-none",style:{
clipPath:"url(#clip-pattern6)"
}
,children:[a("07",{
primary:"#6A11CB",secondary:"#2575FC",tertiary:"#161616"
}
),o()]
}
),(0,l.jsxs)("a",{
href:"https://floweraremyfriend.netlify.app/",target:"_blank",rel:"noopener noreferrer",className:"relative group block overflow-hidden select-none",style:{
clipPath:"url(#clip-pattern7)"
}
,children:[a("08",{
primary:"#e65c00",secondary:"#F9D423",tertiary:"#161616"
}
),o()]
}
),(0,l.jsxs)("a",{
href:"https://robotek-erp.netlify.app/",target:"_blank",rel:"noopener noreferrer",className:"relative group block overflow-hidden select-none",style:{
clipPath:"url(#clip-pattern8)"
}
,children:[a("09",{
primary:"#3a7bd5",secondary:"#3a6073",tertiary:"#161616"
}
),o()]
}
)]
}
),(0,l.jsx)("section",{
className:"w-full mt-4 p-0 bg-transparent",children:(0,l.jsxs)("a",{
href:"https://eternalway.netlify.app/",target:"_blank",rel:"noopener noreferrer",className:"relative group block overflow-hidden select-none",style:{
clipPath:"url(#clip-inverted)"
}
,children:[(0,l.jsxs)("div",{
className:"w-full aspect-[100/40] bg-[#161616] relative overflow-hidden group-hover:scale-105 transition-transform duration-500 flex items-center justify-center select-none",children:[(0,l.jsx)("div",{
className:"absolute w-[95%] h-[70%] -top-[30%] left-[2.5%] rounded-full blur-[45px] opacity-85 pointer-events-none animate-float-fast-top",style:{
backgroundColor:"#ffffff"
}

}
),(0,l.jsx)("div",{
className:"absolute w-[70%] h-[90%] top-[10%] left-[10%] rounded-full blur-[35px] opacity-80 pointer-events-none animate-float-medium-mid",style:{
backgroundColor:"#4A00E0"
}

}
),(0,l.jsx)("div",{
className:"absolute w-[70%] h-[90%] top-[10%] right-[10%] rounded-full blur-[35px] opacity-80 pointer-events-none animate-float-medium-mid-delayed",style:{
backgroundColor:"#8E2DE2"
}

}
),(0,l.jsx)("div",{
className:"absolute w-[100%] h-[60%] -bottom-[30%] left-0 rounded-full blur-[30px] opacity-95 pointer-events-none animate-float-slow-bottom",style:{
backgroundColor:"#161616"
}

}
),(0,l.jsx)("div",{
className:"absolute inset-0 opacity-[0.22] pointer-events-none mix-blend-overlay z-10",style:{
backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
}

}
),(0,l.jsx)("span",{
className:"relative z-20 text-[#FEF8E8] font-cormorant font-bold text-6xl md:text-[9rem] opacity-40 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none select-none",children:"10"
}
)]
}
),o()]
}
)
}
)]
}
)
}
);
function s(){
let e=(0,n.useRef)(null),t=(0,n.useRef)(null),r=(0,n.useRef)(null);
return(0,a.V)(()=>{
o.ZP.timeline({
delay:.2
}
).from(t.current,{
y:-20,opacity:0,duration:.8,ease:"power3.out"
}
).from(r.current,{
scale:.98,opacity:0,y:20,duration:1,ease:"power3.out"
}
,"-=0.4")
}
,{
scope:e
}
),(0,l.jsxs)("main",{
ref:e,className:"relative w-full min-h-screen bg-palette-grey text-palette-midnight flex flex-col justify-center items-center py-24 px-0 overflow-hidden",children:[(0,l.jsx)("div",{
ref:t,className:"absolute top-6 left-8 z-20 text-[#F44A22] text-4xl tracking-widest pointer-events-none drop-shadow-md origin-center",style:{
fontFamily:"'Samarkan', sans-serif"
}
,children:"PROJECTS"
}
),(0,l.jsx)("div",{
ref:r,className:"w-full max-w-full z-10",children:(0,l.jsx)(i,{

}
)
}
)]
}
)
}
i.displayName="Component"
}

}
,function(e){
e.O(0,[922,498,971,117,744],function(){
return e(e.s=754)
}
),_N_E=e.O()
}
]);
