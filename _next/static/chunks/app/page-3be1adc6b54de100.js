(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9160:function(e,t,s){Promise.resolve().then(s.t.bind(s,231,23)),Promise.resolve().then(s.bind(s,912)),Promise.resolve().then(s.bind(s,1481)),Promise.resolve().then(s.bind(s,7012)),Promise.resolve().then(s.bind(s,8343)),Promise.resolve().then(s.bind(s,6826)),Promise.resolve().then(s.bind(s,2242)),Promise.resolve().then(s.bind(s,956)),Promise.resolve().then(s.bind(s,8702)),Promise.resolve().then(s.bind(s,6432)),Promise.resolve().then(s.bind(s,7519))},1409:function(e,t,s){"use strict";function a(e){let{src:t}=e;return t}s.r(t),s.d(t,{default:function(){return a}})},8242:function(e,t,s){"use strict";s.d(t,{N:function(){return n}});var a=s(7437),r=s(2265);let n=(0,r.createContext)();t.default=e=>{let{children:t}=e,[s,l]=(0,r.useState)("dark");return(0,r.useEffect)(()=>{let e=localStorage.getItem("myPortfolioProfileTheme");console.log(e),e&&l(e)},[s]),(0,a.jsx)(n.Provider,{value:{theme:s,setThemeFun:()=>{"dark"===s?(console.log("dark 1"),l("light"),localStorage.setItem("myPortfolioProfileTheme","light")):(console.log("dark 2"),l("dark"),localStorage.setItem("myPortfolioProfileTheme","dark"))}},children:(0,a.jsx)("div",{className:"dark"===s?"dark":"",children:(0,a.jsx)("div",{className:"dark:text-white dark:bg-black",children:t})})})}},7012:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var a=s(7437),r=s(2265),n=s(7138),l=s(1336),i=s(3781),d=s(2655),c=s(9824);let o=[{name:"Home",link:"#home"},{name:"About",link:"#about"},{name:"Tech Stack",link:"#techStack"},{name:"Education",link:"#education"},{name:"Experience",link:"#experience"},{name:"Project",link:"#project"}];var x=e=>{let{showMenu:t,setShowMenu:s}=e;return(0,a.jsx)(r.Fragment,{children:(0,a.jsx)("div",{className:"w-full h-screen bg-[rgba(255,255,255,0.3)] dark:bg-[rgba(0,0,0,0.3)] fixed ".concat(t?null:"hidden"," top-0 left-0 z-10"),onClick:()=>s(!t),children:(0,a.jsxs)("div",{className:"w-[70%] h-screen bg-white dark:bg-black shadow-sm shadow-gray-600 dark:shadow-gray-300 ".concat(t?null:"translate-x-[-450px]"," transition-all duration-1000"),children:[(0,a.jsxs)("div",{className:"p-3 bg-gray-200 dark:bg-gray-800 flex justify-between items-center gap-3",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("div",{className:"text-white w-8 h-8 bg-[#c72c6c] dark:bg-[#07d0e5] rounded-full flex justify-center items-center",children:"S"}),(0,a.jsxs)("p",{className:"text-gray-400 flex",children:[(0,a.jsx)("span",{className:"text-lg font-bold",children:"ABISHEK"})," ",(0,a.jsx)(l.Gz,{})]})]}),(0,a.jsx)("button",{className:"text-black dark:text-white text-3xl font-bold",onClick:()=>s(!t),children:(0,a.jsx)(c.QAE,{})})]}),(0,a.jsx)("div",{className:"p-2 flex flex-col gap-2",children:o.map(e=>(0,a.jsx)(n.default,{className:"text-lg p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 rounded",href:e.link,children:e.name},e.name))})]})})})},m=s(5027),p=e=>{let{setShowMenu:t,setThemeFun:s,theme:r,showMenu:n,top:c}=e;return(0,a.jsxs)("div",{className:"w-full px-5 py-3 bg-[#ffffffcc] dark:bg-[#000000cc] backdrop-filter backdrop-blur-lg flex justify-between md:hidden shadow-md shadow-gray-300 dark:shadow-gray-800 fixed z-10",style:{top:c},children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("button",{className:"text-black dark:text-white text-3xl font-semibold",onClick:()=>t(!n),children:(0,a.jsx)(m.vHB,{})}),(0,a.jsxs)("p",{className:"text-gray-400 flex",children:[(0,a.jsx)("span",{className:"text-lg font-bold",children:"ABISHEK"})," ",(0,a.jsx)(l.Gz,{})]})]}),(0,a.jsx)("div",{className:"flex items-center gap-4",children:(0,a.jsx)("button",{className:"text-[#c72c6c] dark:text-[#07d0e5] text-2xl font-semibold hover:scale-110",onClick:s,children:"dark"===r?(0,a.jsx)(d.kw5,{}):(0,a.jsx)(i.mly,{})})})]})},h=s(8242),u=()=>{let[e,t]=(0,r.useState)("0"),[s,c]=(0,r.useState)(!1),{setThemeFun:m,theme:u}=(0,r.useContext)(h.N);return(0,r.useEffect)(()=>{let e=window.scrollY,s=()=>{let s=window.scrollY;e>s?t("0"):t("-80px"),e=s};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),(0,a.jsxs)(r.Fragment,{children:[(0,a.jsxs)("div",{className:"w-full h-[70px] px-8 bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.8)] backdrop-filter backdrop-blur-lg hidden md:flex justify-between items-center gap-4 shadow-sm shadow-gray-300 dark:shadow-gray-800 fixed z-50 transition-all duration-500",style:{top:e},children:[(0,a.jsxs)("p",{className:"text-gray-400 flex",children:[(0,a.jsx)("span",{className:"text-lg font-bold",children:"ABISHEK"})," ",(0,a.jsx)(l.Gz,{})]}),(0,a.jsx)("div",{className:"h-full flex gap-4",children:o.map(e=>(0,a.jsx)(n.default,{className:"text-[#c72c6c] dark:text-[#07d0e5] font-semibold",href:e.link,children:(0,a.jsx)("div",{className:"h-full pb-1 hover:pb-0 px-2 flex items-center hover:border-b-4  border-[#c72c6c] dark:border-[#07d0e5] transition-all",children:e.name})},e.name))}),(0,a.jsx)("div",{className:"flex items-center gap-4",children:(0,a.jsx)("button",{className:"text-xl text-[#c72c6c] dark:text-[#07d0e5] hover:scale-110",onClick:()=>m(),children:"dark"===u?(0,a.jsx)(d.kw5,{}):(0,a.jsx)(i.mly,{})})})]}),(0,a.jsx)(p,{setShowMenu:c,setThemeFun:m,showMenu:s,theme:u,top:e}),(0,a.jsx)(x,{setShowMenu:c,showMenu:s})]})}},956:function(e,t,s){"use strict";s.r(t);var a=s(7437),r=s(2265),n=s(7138);t.default=()=>{let[e,t]=(0,r.useState)(!1),s=(0,r.useRef)(),l=(0,r.useRef)(),i=(0,r.useRef)();return(0,r.useEffect)(()=>{s.current&&(new IntersectionObserver(e=>{let[s]=e;t(s.isIntersecting)},{rootMargin:"".concat(700>=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)?"-100px":"-300px")}).observe(s.current),e?(i.current.classList.add("slide-in"),l.current.classList.add("slide-in")):(i.current.classList.remove("slide-in"),l.current.classList.remove("slide-in")))},[s,e]),(0,a.jsx)(r.Fragment,{children:(0,a.jsx)("section",{id:"home",children:(0,a.jsxs)("div",{className:"min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] lg:px-[200px] pt-[80px] md:pt-0 md:flex items-center justify-between shadow-zinc-300 dark:shadow-zinc-700 shadow-sm",ref:s,children:[(0,a.jsxs)("div",{className:"translate-x-[-500px] transition-all duration-700 opacity-0",ref:l,children:[(0,a.jsx)("p",{className:"py-2 text-2xl md:text-4xl font-semibold font-sans",children:"Hi There !"}),(0,a.jsxs)("p",{className:"text-2xl md:text-4xl py-2 font-semibold font-sans",children:["I'm a Frontend",(0,a.jsxs)("span",{className:"text-[#c72c6c] dark:text-[#07d0e5]",children:[" ","developer ",(0,a.jsx)("span",{className:"text-white",children:"|"})]})]}),(0,a.jsxs)("div",{className:"mt-5 md:mt-10 flex gap-3",children:[(0,a.jsx)(n.default,{className:"text-white text-xl font-semibold rounded bg-red-400 hover:bg-red-500 px-2 py-1",href:"#getInTouch",children:"Hire me"}),(0,a.jsx)(n.default,{className:"text-xl font-semibold rounded border border-red-500 hover:text-white hover:bg-red-500 px-2 py-1",href:"https://drive.google.com/file/d/16B_7UBJURi6KbcA2Yy1GOD582l82m0H_/view",target:"_blank",children:"Download CV"})]})]}),(0,a.jsx)("div",{className:"translate-x-[500px] transition-all opacity-0 duration-700 w-[180px] h-[300px] md:w-[240px] md:h-[400px] bg-cover m-auto md:m-0 mt-[40px] md:mt-0 bg-no-repeat",ref:i,style:{backgroundImage:"url(/images/male.png)"}})]})})})}},8702:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var a=s(7437),r=s(2265),n=s(7138),l=s(731),i=s(4008),d=s(3781),c=[{projectName:"comapny official website",liveUrl:"https://suktas.com",projectImage:{imageUrl:"/images/suktas-site-img.png"},techs:["NextJS","TailwindCSS","Cpanel","redux toolkit","formik","axios"]},{projectName:"Instagram clone",githubUrl:"https://github.com/abishek2837/Instagram/tree/master",projectImage:{imageUrl:"/images/instagram-clone-img.png"},techs:["React Native","Firebase","Expo","Redux Toolkit","Formik","TypeScript"]}],o=()=>{let[e,t]=(0,r.useState)(""),[s,o]=(0,r.useState)(!1),x=(0,r.useRef)(),m=(0,r.useRef)();return(0,r.useEffect)(()=>{x.current&&(new IntersectionObserver(e=>{let[t]=e;o(t.isIntersecting)},{rootMargin:"-100px"}).observe(x.current),s?m.current.classList.add("pop-up-child"):m.current.classList.remove("pop-up-child"))},[s,x]),(0,a.jsx)(r.Fragment,{children:(0,a.jsxs)("section",{id:"project",ref:x,children:[(0,a.jsxs)("h2",{className:"text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3",children:[(0,a.jsx)(l.$Wy,{})," Projects"]}),(0,a.jsx)("div",{className:"min-h-[400px] pop-down-child pb-[30px] flex flex-wrap px-[20px] gap-8 justify-around items-center shadow-sm shadow-zinc-300 dark:shadow-zinc-700",ref:m,children:c.map(s=>{var r;return(0,a.jsxs)("div",{className:"transition-all duration-700 w-[330px]",children:[(0,a.jsx)("div",{className:"w-[330px] shadow-md shadow-zinc-300 dark:shadow-zinc-700 h-48 bg-no-repeat flex flex-col justify-end rounded overflow-hidden bg-cover",onMouseLeave:()=>t(""),onMouseMove:()=>t(s.projectName),style:{backgroundImage:"url(".concat((null==s?void 0:null===(r=s.projectImage)||void 0===r?void 0:r.imageUrl)||"",")")},children:(0,a.jsxs)("div",{className:"bg-red-600 p-1 cursor-pointer",onMouseLeave:()=>t(""),onMouseMove:()=>t(s.projectName),children:[(0,a.jsx)("p",{className:"text-white text-center",onClick:()=>t(""===e?s.projectName:""),children:s.projectName}),(0,a.jsxs)("div",{className:"overflow-hidden transition-all duration-500 h-[70px] flex gap-10 justify-center items-center",style:e===s.projectName?{maxHeight:"200px"}:{maxHeight:"0"},children:[s.liveUrl&&(0,a.jsx)(n.default,{className:"text-xl text-white p-1 bg-gray-700 hover:bg-gray-950 rounded",href:s.liveUrl,target:"_blank",children:(0,a.jsx)(i.x9Z,{})}),s.githubUrl&&(0,a.jsx)(n.default,{className:"text-xl text-white p-1 bg-gray-700 hover:bg-gray-950 rounded",href:s.githubUrl,target:"_blank",children:(0,a.jsx)(d.rFR,{})})]})]})}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2 mt-4",children:s.techs.map(e=>(0,a.jsx)("p",{className:"px-1 text-sm rounded bg-blue-500 text-white",children:e},e))})]},s.projectName)})})]})})}},6432:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var a=s(7437),r=s(2265),n=s(1942),l=s(9690),i=s(5233),d=s(1336),c=s(3781),o=s(2655);let x=[{Skills:[{name:"ReactJS",icon:(0,a.jsx)(d.GR$,{className:"md:text-4xl text-2xl",color:"#53c1de"})},{name:"NextJS",icon:(0,a.jsx)(i.Xou,{className:"md:text-4xl text-2xl dark:text-white text-black"})},{name:"React Native",icon:(0,a.jsx)(o.KU_,{className:"md:text-4xl text-2xl",color:"#66dbfb"})},{name:"JavaScript",icon:(0,a.jsx)(d.N2N,{className:"md:text-4xl text-2xl",color:"#ffd600"})},{name:"Redux-toolkit",icon:(0,a.jsx)(i.PoL,{className:"md:text-4xl text-2xl",color:"#7e57c2"})},{name:"HTML5",icon:(0,a.jsx)(l.GXm,{className:"md:text-4xl text-2xl",color:"#fa6700"})},{name:"CSS3",icon:(0,a.jsx)(n.r8,{className:"md:text-4xl text-2xl",color:"#039be5"})},{name:"SASS",icon:(0,a.jsx)(d.x9X,{className:"md:text-4xl text-2xl",color:"#f06292"})},{name:"Github",icon:(0,a.jsx)(c.rFR,{className:"md:text-4xl text-2xl",color:"#c9d1d9"})},{name:"firebase",icon:(0,a.jsx)(i.xEg,{className:"md:text-4xl text-2xl",color:"#ffcd33"})},{name:"Git",icon:(0,a.jsx)(c.IYA,{className:"md:text-4xl text-2xl",color:"#f4511e"})}],Familiar:[{name:"TypeScript",icon:(0,a.jsx)(i.WZi,{className:"md:text-4xl text-2xl",color:"#377cc8"})},{name:"NodeJS",icon:(0,a.jsx)(i.uds,{className:"md:text-4xl text-2xl",color:"#4caf50"})},{name:"Tailwind CSS",icon:(0,a.jsx)(i.YnA,{className:"md:text-4xl text-2xl",color:"#4caf50"})},{name:"Bootstrap",icon:(0,a.jsx)(n.eTA,{className:"md:text-4xl text-2xl",color:"#673ab7"})},{name:"Meterial UI",icon:(0,a.jsx)(i.zDz,{className:"md:text-4xl text-2xl",color:"#29b6f6"})},{name:"Ant Design",icon:(0,a.jsx)(i.gLG,{className:"md:text-4xl text-2xl",color:"#29b6f6"})},{name:"Vercel",icon:(0,a.jsx)(i.Hqz,{className:"dark:text-white text-black md:text-4xl text-2xl"})}]}];var m=()=>{let[e,t]=(0,r.useState)("Skills"),[s,l]=(0,r.useState)([]),[i,d]=(0,r.useState)(!1),c=(0,r.useRef)(),o=(0,r.useRef)(),m=(0,r.useRef)();return(0,r.useEffect)(()=>{new IntersectionObserver(e=>{let[t]=e;d(t.isIntersecting)},{rootMargin:"".concat(700>=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)?"-100px":"-250px")}).observe(c.current),i?(o.current.classList.add("pop-up-child"),m.current.classList.add("pop-up")):(o.current.classList.remove("pop-up-child"),m.current.classList.remove("pop-up"))},[i]),(0,r.useEffect)(()=>{let t=x.find(t=>t.hasOwnProperty(e));l(t?t[e]:[]),setTimeout(()=>{o.current.classList.add("pop-up-child")},300)},[e]),(0,a.jsx)(r.Fragment,{children:(0,a.jsxs)("section",{className:"shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-hidden",id:"techStack",ref:c,children:[(0,a.jsxs)("h2",{className:"text-3xl font-bold text-center p-4 flex justify-center items-center gap-3",children:[(0,a.jsx)(n.bHw,{})," Tech Stack"]}),(0,a.jsxs)("div",{className:"pop-down transition-all w-fit duration-500 m-auto rounded-lg border border-black dark:border-white border-solid overflow-hidden",ref:m,children:[(0,a.jsx)("button",{className:"w-[120px] md:w-[150px] p-2 font-bold ".concat("Skills"===e?"bg-red-600":null," transition-all"),onClick:s=>{t(s.target.innerText),e!==s.target.innerText&&o.current.classList.remove("pop-up-child")},children:"Skills"}),(0,a.jsx)("button",{className:"w-[100px] md:w-[150px] p-2 font-bold ".concat("Familiar"===e?"bg-red-600":null," transition-all"),onClick:s=>{t(s.target.innerText),e!==s.target.innerText&&o.current.classList.remove("pop-up-child")},children:"Familiar"})]}),(0,a.jsx)("div",{className:"pop-down-child flex min-h-[450px] py-[30px] px-[20px] md:px-[100px] flex-wrap justify-center items-center gap-5",ref:o,children:s.map(e=>(0,a.jsxs)("div",{className:"transition-all duration-700 px-2 h-fit py-3 md:py-5 w-[120px] md:w-[150px] border border-black dark:border-white border-solid rounded flex flex-col gap-3 items-center",children:[(0,a.jsx)("p",{children:e.icon}),(0,a.jsx)("p",{children:e.name})]},e.name))})]})})}},8343:function(e,t,s){"use strict";var a=s(7437),r=s(2265),n=s(6648),l=s(1942),i=s(8554),d=s(5097),c=s(3781);t.default=()=>{let[e,t]=(0,r.useState)(!1),s=(0,r.useRef)(),o=(0,r.useRef)(),x=(0,r.useRef)();return(0,r.useEffect)(()=>{s.current&&(new IntersectionObserver(e=>{let[s]=e;t(s.isIntersecting)},{rootMargin:"".concat(700>=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)?"-100px":"-300px")}).observe(s.current),e?(o.current.classList.add("slide-in"),x.current.classList.add("slide-in")):(o.current.classList.remove("slide-in"),x.current.classList.remove("slide-in")))},[e,s]),(0,a.jsx)(r.Fragment,{children:(0,a.jsxs)("section",{className:" shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden",id:"about",ref:s,children:[(0,a.jsxs)("h2",{className:"text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3",children:[(0,a.jsx)(l.TZR,{})," About me"]}),(0,a.jsxs)("div",{className:"pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]",children:[(0,a.jsx)(n.default,{alt:"about image",className:"shadow-zinc-300 dark:shadow-zinc-700 shadow-sm transition-all duration-700 translate-x-[-900px] bg-blue-200 m-auto bg-cover bg-no-repeat max-h-[500px] rounded object-contain",height:350,ref:o,src:"/images/myimage/myimage.jpg",width:350}),(0,a.jsxs)("div",{className:"text-lg translate-x-[900px] opacity-0 transition-all duration-700 mt-4 md:mt-0 md:w-[50%] text-center md:text-left rounded",ref:x,children:[(0,a.jsx)("p",{className:"text-3xl text-center md:text-left font-semibold text-[#c72c6c] dark:text-[#07d0e5]",children:"Abishek Poddar"}),(0,a.jsx)("p",{className:"text-center md:text-left text-red-600 mt-1",children:"Frontend web developer"}),(0,a.jsxs)("div",{className:"flex flex-wrap justify-center md:justify-normal gap-5",children:[(0,a.jsxs)("div",{className:"w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2",children:[(0,a.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,a.jsx)("p",{className:"text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]",children:"Location"}),(0,a.jsx)("p",{children:(0,a.jsx)(i.opg,{})})]}),(0,a.jsxs)("p",{className:"text-center md:text-left text-[#0b0c0c] dark:text-[#07d0e5]",children:["Biratnagar Nepal"," "]})]}),(0,a.jsxs)("div",{className:"w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2",children:[(0,a.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,a.jsx)("p",{className:"text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]",children:"Age"}),(0,a.jsx)("p",{children:(0,a.jsx)(d.J4e,{})})]}),(0,a.jsxs)("p",{className:"text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]",children:["23"," "]})]}),(0,a.jsxs)("div",{className:"w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2",children:[(0,a.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,a.jsx)("p",{className:"text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]",children:"Experience"}),(0,a.jsx)("p",{children:(0,a.jsx)(l.zvb,{})})]}),(0,a.jsxs)("p",{className:"text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]",children:["1 Year"," "]})]}),(0,a.jsxs)("div",{className:"w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2",children:[(0,a.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,a.jsx)("p",{className:"text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]",children:"Projects"}),(0,a.jsx)("p",{children:(0,a.jsx)(c.mpX,{})})]}),(0,a.jsxs)("p",{className:"text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]",children:["2"," "]})]})]}),(0,a.jsx)("div",{className:"mt-5 justify-evenly text-justify",children:(0,a.jsx)("p",{className:"text-gray-600 dark:text-gray-300",children:"Passionate and driven ReactJS developer with a strong foundation in NextJS. Dedicated to creating dynamic and user-centric web applications. Eager to contribute my expertise in frontend frameworks, modern UI/UX design, and responsive development to a forward-thinking team, while continuously learning and growing in the ever-evolving world of web development."})})]})]})]})})}},6826:function(e,t,s){"use strict";s.d(t,{default:function(){return d}});var a=s(7437),r=s(2265),n=s(6648),l=s(5097),i=[{name:"Bachelor of Engineering",image:"/images/education/excelcollege.jpg",schoolOrCollege:"Excel Engineering COLLEGE, India",fromTo:"2019 - 2023",statusOrPrecentage:"7.2/10",field:"Computer Science and Engineering"},{name:"Senior Secondary Examination",image:"/images/education/greenlandcollege.png",schoolOrCollege:"Greenland Intl. College",fromTo:"2016-2018",statusOrPrecentage:"68%"},{name:"Secondary Examination",image:"/images/education/starschool.jpg",schoolOrCollege:"Star higher secondary Boarding school",fromTo:"2016",statusOrPrecentage:"65%"}],d=()=>{let[e,t]=(0,r.useState)(!1),s=(0,r.useRef)(),d=(0,r.useRef)();return(0,r.useEffect)(()=>{new IntersectionObserver(e=>{let[s]=e;t(s.isIntersecting)},{rootMargin:"".concat(700>=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)?"-100px":"-300px")}).observe(s.current),e?d.current.classList.add("pop-up-child"):d.current.classList.remove("pop-up-child")},[e]),(0,a.jsx)(r.Fragment,{children:(0,a.jsxs)("section",{className:"shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden",id:"education",ref:s,children:[(0,a.jsxs)("h2",{className:"text-3xl font-bold text-center p-4 flex justify-center items-center gap-3",children:[(0,a.jsx)(l.ZJp,{})," Education"]}),(0,a.jsx)("div",{className:"pop-down-child pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] flex flex-col gap-[20px] md:gap-[50px]",ref:d,children:i.map(e=>{var t;return(0,a.jsxs)("div",{className:"transition-all duration-700 flex border border-zinc-300 dark:border-zinc-700 shadow-md shadow-zinc-300 dark:shadow-zinc-700 rounded gap-6",children:[(0,a.jsx)(n.default,{alt:e.name,className:"hidden md:block bg-blue-400",height:150,src:e.image,width:150}),(0,a.jsxs)("div",{className:"flex flex-col gap-2 p-3 md:p-1",children:[(0,a.jsx)("p",{className:"text-xl md:text-2xl font-bold text-red-600",children:e.name}),(0,a.jsx)("p",{className:"text-xl md:text-xl font-bold text-red-600",children:null!==(t=null==e?void 0:e.field)&&void 0!==t?t:""}),(0,a.jsx)("p",{children:e.schoolOrCollege}),(0,a.jsxs)("p",{className:" text-blue-600",children:[e.fromTo," \xa0 | \xa0"," ",e.statusOrPrecentage]})]})]},e.name)})})]})})}},2242:function(e,t,s){"use strict";s.d(t,{default:function(){return c}});var a=s(7437),r=s(2265),n=s(6356),l=s(8554),i=s(3781),d=[{companyName:"SUKTAS INC.",location:"Biratnagar, Nepal",role:"REACT Developer",fromTo:"Jan 2024 - Present",description:["Developed and maintained responsive, high performance web applications using Nextjs.","Played a key role in designing and implementing the company's official website, ensuring a seamless user experienceand modern aesthetic.","Lead the cross-functional teams to deliver scalable, maintainable code that meets business requirements.","Integrated complex features and optimized web performance, leading to a significant increase in user engagement and customer satisfaction."],key:"suktas",side:"left"},{companyName:"MALLOW TECHNOLIOIES",location:"karur, TN-India",role:"REACT Developer",fromTo:"Mar 2023 - Jul 2023",description:["Contributed to the development of a cross-platform web application, ensuring a consistent and responsive design across various devices and platforms.","Focused on designing user-friendly interfaces, enhancing the visual appeal, and improving the overall user experience.","Conducted thorough bug fixing and troubleshooting, significantly reducing technical debt and improving application stability.","Worked closely with the development team to implement new features and ensure the timely delivery of project milestones."],key:"mallow",side:"right"},{companyName:"MALLOW TECHNOLIOIES",location:"karur, TN-India",role:"REACT Developer Trainee",fromTo:"Jan 2023 - Mar 2023",description:["Completed a 3-month Traning focusing on React.js development.","Collaborated with senior developers to understand best practices in code quality, design patterns, and web development workflows","Gained hands-on experience in building and optimizing user interfaces for web applications.","Developed problem-solving skills and a deeper understanding of React and its ecosystem, laying a strong foundation for a career in frontend development."],key:"mallowIntern",side:"left"}],c=()=>{let[e,t]=(0,r.useState)(""),[s,c]=(0,r.useState)(!1),o=(0,r.useRef)(),x=(0,r.useRef)();return(0,r.useEffect)(()=>{new IntersectionObserver(e=>{let[t]=e;c(t.isIntersecting)},{rootMargin:"-100px"}).observe(o.current),s?x.current.classList.add("pop-up-child"):x.current.classList.remove("pop-up-child")},[s]),(0,a.jsx)(r.Fragment,{children:(0,a.jsxs)("section",{id:"experience",ref:o,children:[(0,a.jsxs)("h2",{className:"text-3xl font-bold text-center p-4 flex justify-center items-center gap-3",children:[(0,a.jsx)(n.CvH,{})," Experience"]}),(0,a.jsx)("div",{className:"pop-down-child pb-[30px] px-[20px] shadow-sm shadow-zinc-300 dark:shadow-zinc-700",ref:x,children:d.map((s,r)=>{var n,d;return"left"===s.side?(0,a.jsxs)("div",{className:"md:flex gap-2 items-end transition-all duration-500 ".concat(0!==r?"mt-7":""),children:[(0,a.jsxs)("div",{className:"md:w-[45%] cursor-pointer p-3 border border-zinc-300 dark:border-zinc-700 shadow-zinc-300 dark:shadow-zinc-700 shadow-sm rounded",onClick:()=>t(e===s.description?"":s.description),children:[(0,a.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,a.jsx)("p",{className:"text-xl md:text-2xl font-bold text-red-600",children:s.companyName}),(0,a.jsxs)("p",{className:"flex gap-2 items-center text-blue-500",children:[(0,a.jsx)(l.opg,{})," ",s.location]})]}),(0,a.jsxs)("div",{className:"flex justify-between text-gray-600 dark:text-gray-400 gap-2 mt-2",children:[(0,a.jsx)("p",{className:"font-semibold",children:s.role}),(0,a.jsx)("p",{children:s.fromTo})]}),(0,a.jsx)("div",{className:"mt-2 text-justify transition-all duration-500 overflow-hidden text-gray-700 dark:text-gray-500",style:e==s.description?{maxHeight:"400px"}:{maxHeight:"0px"},children:null==s?void 0:null===(n=s.description)||void 0===n?void 0:n.map((e,t)=>(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"• ".concat(e)})},t))})]}),(0,a.jsx)("button",{className:"transition-all duration-500 hidden md:block",onClick:()=>t(e===s.description?"":s.description),style:e===s.description?{transform:"rotate(180deg)"}:{},children:(0,a.jsx)(i.KnI,{size:22})})]},s.key):(0,a.jsxs)("div",{className:"md:flex justify-end items-end mt-7 gap-2 transition-all duration-500 ",children:[(0,a.jsx)("button",{className:"hidden md:block",onClick:()=>t(e===s.description?"":s.description),style:e===s.description?{transform:"rotate(180deg)"}:{},children:(0,a.jsx)(i.KnI,{size:22})}),(0,a.jsxs)("div",{className:"md:w-[45%] cursor-pointer  transition-all duration-500 p-3 border border-zinc-300 dark:border-zinc-700 shadow-zinc-300 dark:shadow-zinc-700 shadow-smrounded",onClick:()=>t(e===s.description?"":s.description),children:[(0,a.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,a.jsx)("p",{className:"text-xl md:text-2xl font-bold text-red-600",children:s.companyName}),(0,a.jsxs)("p",{className:"flex gap-2 items-center text-blue-500",children:[(0,a.jsx)(l.opg,{})," ",s.location]})]}),(0,a.jsxs)("div",{className:"flex justify-between text-gray-600 dark:text-gray-400 mt-2 gap-2",children:[(0,a.jsx)("p",{className:"font-semibold",children:s.role}),(0,a.jsx)("p",{children:s.fromTo})]}),(0,a.jsx)("div",{className:"mt-2 overflow-hidden transition-all duration-500 text-justify text-gray-700 dark:text-gray-500",style:e==s.description?{maxHeight:"400px"}:{maxHeight:"0px"},children:null==s?void 0:null===(d=s.description)||void 0===d?void 0:d.map((e,t)=>(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"• ".concat(e)})},t))})]})]},s.key)})})]})})}},7519:function(e,t,s){"use strict";s.r(t);var a=s(7437),r=s(2265),n=s(7476),l=s(8726);t.default=()=>{let[e,t]=(0,r.useState)({}),[s,i]=(0,r.useState)(!1),d=s=>{t({...e,[s.target.name]:s.target.value})},c=async s=>{s.preventDefault();let{name:a,email:r,message:n,subject:d}=e;if(!a||!r||!d||!n)return alert("Please Fill All Data");try{i(!0);let s=await fetch("/api/mail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});console.log("response is",s),s.ok?(l.ZP.success("Email Sent Successfully"),t({})):l.ZP.error("Email Sending Failed")}catch(e){l.ZP.error("Email Sending Failed")}finally{i(!1)}};return(0,a.jsx)(r.Fragment,{children:(0,a.jsx)("section",{id:"getInTouch",children:(0,a.jsxs)("div",{className:"py-8 pt-4 shadow-zinc-300 dark:shadow-zinc-700 shadow-sm",children:[(0,a.jsxs)("h3",{className:"text-3xl font-bold text-center pb-8 flex justify-center items-center gap-3",children:[(0,a.jsx)("span",{className:"mr-3",children:(0,a.jsx)(n.EQ9,{})}),"Drop A Message"]}),(0,a.jsx)("form",{action:"",onSubmit:c,children:(0,a.jsxs)("div",{className:"flex flex-col gap-4 w-[90%] md:w-[35%] m-auto",children:[(0,a.jsx)("input",{className:"dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded",id:"name",name:"name",onChange:d,placeholder:"Your Good Name",value:e.name||""}),(0,a.jsx)("input",{className:"dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded",id:"email",name:"email",onChange:d,placeholder:"Your Email Address",value:e.email||""}),(0,a.jsx)("input",{className:"dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded",id:"subject",name:"subject",onChange:d,placeholder:"Subject for mail",value:e.subject||""}),(0,a.jsx)("textarea",{className:"dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded",id:"message",name:"message",onChange:d,placeholder:"Write Your Message",rows:"3",value:e.message||""}),(0,a.jsx)("button",{className:"font-bold text-white dark:bg-[#0ab0c2] disabled:cursor-default p-2 rounded dark:hover:bg-[#078795] bg-[#f91071] hover:bg-[#c72c6c]",disabled:s,type:"submit",children:s?"sending...":"Send"})]})})]})})})}}},function(e){e.O(0,[950,957,51,452,706,280,422,505,956,699,44,694,779,259,726,732,971,23,744],function(){return e(e.s=9160)}),_N_E=e.O()}]);