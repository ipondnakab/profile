(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{147:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){},153:function(e,a,t){},154:function(e,a,t){},155:function(e,a,t){},156:function(e,a,t){},157:function(e,a,t){},158:function(e,a,t){},159:function(e,a,t){},160:function(e,a,t){},161:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),l=t(75),r=t.n(l),c=(t(87),t(15)),o=t(76),s=t.n(o),m=t(4),u=t(43),d="\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27",h="About",p="\u0e2a\u0e01\u0e34\u0e25",E="Skill",f="\u0e01\u0e32\u0e23\u0e28\u0e36\u0e01\u0e29\u0e32",g="Education",b="\u0e1b\u0e23\u0e30\u0e2a\u0e1a\u0e01\u0e32\u0e23\u0e13\u0e4c",v="Experiences",k="\u0e1c\u0e39\u0e49\u0e23\u0e31\u0e1a\u0e23\u0e2d\u0e07",y="Reference",w=(t(147),t(41)),S=t(20),C=t(77),N=t.n(C),P=(window.innerWidth,function(e){for(var a=e.isDarkMode,t=e.setIsDarkMode,l=e.isEnglish,r=e.setIsEnglish,o=[{title:l?h:d,index:0,path:"/profile/about",icon:i.a.createElement(w.b,{size:24})},{title:l?E:p,index:1,path:"/profile/skill",icon:i.a.createElement(S.d,{size:24})},{title:l?g:f,index:2,path:"/profile/education",icon:i.a.createElement(S.b,{size:24})},{title:l?v:b,index:3,path:"/profile/experiences",icon:i.a.createElement(S.a,{size:24})},{title:l?y:k,index:4,path:"/profile/reference",icon:i.a.createElement(S.e,{size:24})}],C=Object(m.g)(),P=0,I=0,z=o;I<z.length;I++){var x=z[I];C.pathname===x.path&&(P=x.index)}var D=Object(n.useState)(P),A=Object(c.a)(D,2),j=A[0],O=A[1],T=a?"#f2f2f2":"#222";return i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"left-navbar"},i.a.createElement("img",{src:N.a,alt:"Profile"})),i.a.createElement("div",{className:"center-navbar"},i.a.createElement("ul",null,o.map((function(e,a){return i.a.createElement("li",{key:a},i.a.createElement(u.b,{style:{color:T,fontWeight:j===e.index?"bold":"200"},onClick:function(){return O(e.index)},to:e.path},i.a.createElement("div",{className:"text-icon"},e.title),i.a.createElement("div",{className:"icon"},e.icon)))})))),i.a.createElement("div",{className:"right-navbar"},i.a.createElement("img",{className:"language",src:l?"https://www.flaticon.com/svg/static/icons/svg/323/323310.svg":"https://www.flaticon.com/svg/static/icons/svg/323/323281.svg",onClick:function(){return r(!l)}}),i.a.createElement(s.a,{onChange:t,checked:a,size:50})))}),I=t(9),z=(t(151),function(){var e=[{name:"facebook",icon:i.a.createElement(I.d,{size:24,onClick:function(){return window.open("https://www.facebook.com/IPondNaKab")}})},{name:"linkIn",icon:i.a.createElement(I.e,{size:24,onClick:function(){return window.open("https://www.linkedin.com/in/kittipat-daengdee-0b26441b9/")}})},{name:"medium",icon:i.a.createElement(I.f,{size:24,onClick:function(){return window.open("https://medium.com/@kittipat_dd")}})}];return i.a.createElement("aside",{className:"socail-tab"},i.a.createElement("div",{className:"button-socail"},e.map((function(e){return e.icon}))))}),x=t(45);function D(e){var a=e.barWidth,t=e.backgroundColor,l=e.barColor,r=e.delayTime,o=e.showPercent,s=e.speedAnimation,m=e.height,u=e.width,d=e.borderRadius,h=(e.textAlign,e.color,e.textStyles),p=e.innerStyles,E=e.backgroundStyles,f=e.textInner,g=Object(n.useState)(0),b=Object(c.a)(g,2),v=b[0],k=b[1],y=Object(n.useState)(0),w=Object(c.a)(y,2),S=w[0],C=w[1];Object(n.useEffect)((function(){setInterval((function(){return k(Math.floor(a||50))}),r?1e3*r:200),setInterval((function(){return C(Math.floor(1))}),r?1500*r:1500)}),[]);var N=Object(x.a)({display:"flex",height:m||20,width:u||"100%",backgroundColor:t||"#e0e0de",borderRadius:d||"12px"},E),P=Object(x.a)({alignSelf:"center",height:"100%",width:"".concat(v,"%"),backgroundColor:l||"#69c7fe",borderRadius:d||"12px",transition:"width ".concat(s||1,"s ease-in-out"),display:"flex",justifyContent:"flex-end"},p),I=Object(x.a)({fontWeight:"bold",opacity:S},h);return i.a.createElement("div",{style:N},i.a.createElement("div",{style:P},i.a.createElement("span",{style:I},f||"",o?v+"%":"")))}var A=t(78),j=t(8),O=(t(152),function(e){var a=e.props,t=[{name:"HTML",percent:90,icon:i.a.createElement(w.a,{size:30})},{name:"CSS",percent:90,icon:i.a.createElement(A.a,{size:30})},{name:"SASS",percent:90,icon:i.a.createElement(j.g,{size:30})},{name:"JS",percent:90,icon:i.a.createElement(j.d,{size:30})},{name:"TS",percent:80,icon:i.a.createElement(j.h,{size:30})},{name:"Python",percent:75,icon:i.a.createElement(j.f,{size:30})},{name:"Java",percent:70,icon:i.a.createElement(j.c,{size:30})},{name:"C++",percent:60,icon:i.a.createElement(j.a,{size:30})}];return i.a.createElement("div",{className:"software-skill"},i.a.createElement("h1",{className:"header-skill"},a.isEnglish?" Programming skills":"\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21"),t.map((function(e){return i.a.createElement("div",{style:{display:"flex",alignItems:"center",width:"100%"}},e.icon,i.a.createElement(D,{barWidth:e.percent,delayTime:1,backgroundStyles:{padding:2,margin:10,height:16},borderRadius:"0",barColor:"#333",textInner:e.name,textStyles:{fontSize:12,marginRight:8,color:"#fff"}}))})))}),T=t(44),M=(t(153),function(e){var a=e.props,t=[{name:"React",icon:i.a.createElement(I.g,{size:40})},{name:"Angular",icon:i.a.createElement(I.a,{size:40})},{name:"NodeJS",icon:i.a.createElement(j.e,{size:40})},{name:"Deno",icon:i.a.createElement(j.b,{size:40})},{name:"Bootstrap",icon:i.a.createElement(T.a,{size:40})}];return i.a.createElement("div",{className:"framework"},i.a.createElement("h1",{className:"header-framework"},a.isEnglish?"Framework":"\u0e40\u0e1f\u0e23\u0e21\u0e40\u0e27\u0e34\u0e23\u0e4c\u0e04"),i.a.createElement("div",{className:"icons-framework"},t.map((function(e){return i.a.createElement("div",null,e.icon,i.a.createElement("p",null,e.name))}))))}),K=(t(154),function(e){var a=e.props,t=[{name:"Arduino",icon:i.a.createElement(I.g,{size:40})},{name:"NodeMCU",icon:i.a.createElement(I.a,{size:40})},{name:"PLC",icon:i.a.createElement(j.e,{size:40})},{name:"JesonNano",icon:i.a.createElement(j.b,{size:40})},{name:"Raspberry Pi",icon:i.a.createElement(j.b,{size:40})}];return i.a.createElement("div",{className:"hardware"},i.a.createElement("h1",{className:"header-hardware"},a.isEnglish?"Hardware":"\u0e2e\u0e32\u0e23\u0e4c\u0e14\u0e41\u0e27\u0e23\u0e4c"),t.map((function(e){return i.a.createElement("div",null,i.a.createElement("ul",null,i.a.createElement("li",null,e.name)))})))}),R=(t(155),function(e){var a=e.props;return i.a.createElement("div",{className:"other-skills"},i.a.createElement("h1",{className:"header-other-skills"},a.isEnglish?"Other Skills":"\u0e2a\u0e01\u0e34\u0e25\u0e2d\u0e37\u0e48\u0e19\u0e46"),i.a.createElement("div",null,[{en:"Photography",th:"\u0e16\u0e48\u0e32\u0e22\u0e20\u0e32\u0e1e"},{en:"Graphic Design",th:"\u0e07\u0e32\u0e19\u0e01\u0e23\u0e32\u0e1f\u0e1f\u0e34\u0e01"},{en:"Video Edit",th:"\u0e15\u0e31\u0e14\u0e15\u0e48\u0e2d\u0e27\u0e35\u0e14\u0e35\u0e42\u0e2d"},{en:"Play Guitar",th:"\u0e40\u0e25\u0e48\u0e19\u0e01\u0e35\u0e15\u0e49\u0e32"},{en:"3D Printring",th:"\u0e1b\u0e23\u0e34\u0e49\u0e19 3 \u0e21\u0e34\u0e15\u0e34"},{en:"Solidworks",th:"Solidworks"}].map((function(e){return i.a.createElement("div",null,i.a.createElement("ul",null,i.a.createElement("li",null,a.isEnglish?e.en:e.th)))}))))});t(156);function B(e){return i.a.createElement("div",{className:"skill-page"},i.a.createElement("div",{className:"main-skills"},i.a.createElement(O,{props:e}),i.a.createElement("div",{className:"skill-right"},i.a.createElement(M,{props:e}),i.a.createElement(K,{props:e}))),i.a.createElement(R,{props:e}))}var L=t(182),W=t(189),F=t(185),J=t(187),U=t(188),H=t(186),G=t(183),Z=t(184);function _(e){var a=e.isEnglish,t=[{label:a?"Primary School":"\u0e1b.1-6",place:a?"Mueang Mai Wittaya School":"\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e27\u0e34\u0e17\u0e22\u0e32"},{label:a?"Junior High School":"\u0e21.1 - 3",place:a?"Mueang Mai Wittaya School":"\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e27\u0e34\u0e17\u0e22\u0e32"},{label:a?"Senior High School":"\u0e21.4 - 6",place:a?"Si Bun Rueang Wittayakran School":"\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19\u0e28\u0e23\u0e35\u0e1a\u0e38\u0e0d\u0e40\u0e23\u0e37\u0e2d\u0e07\u0e27\u0e34\u0e17\u0e22\u0e32\u0e04\u0e32\u0e23"},{label:a?"Bachelor Degrees":"\u0e1b.\u0e15\u0e23\u0e35",place:a?"Khon Kaen University":"\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e02\u0e2d\u0e19\u0e41\u0e01\u0e48\u0e19"}];return i.a.createElement(L.a,{align:"alternate",style:{padding:0}},t.map((function(e,a){var n=a%2==0;return i.a.createElement("div",{key:a},i.a.createElement(W.a,null,i.a.createElement(G.a,null,i.a.createElement(Z.a,{style:{color:!n&&"#777"}},n?e.place:e.label)),i.a.createElement(F.a,null,i.a.createElement(H.a,null),a===t.length-1?null:i.a.createElement(J.a,null)),i.a.createElement(U.a,{style:{color:n&&"#777"}},i.a.createElement(Z.a,null,n?e.label:e.place))))})))}t(157);var q=t(80),Q=t(79),V=t.n(Q);function $(e){var a=e.isEnglish,t=Object(n.useState)(!1),l=Object(c.a)(t,2),r=l[0],o=l[1],s=[{name:"address",labelEn:"Address",labelTh:"\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48",en:"42 m.2 MueangMai SiBunRueang NongBuaLamPhu 39180 (TH)",th:"\u0e1a\u0e49\u0e32\u0e19\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48 42 \u0e2b\u0e21\u0e39\u0e48 2 \u0e15.\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e2d.\u0e28\u0e23\u0e35\u0e1a\u0e38\u0e0d\u0e40\u0e23\u0e37\u0e2d\u0e07 \u0e08.\u0e2b\u0e19\u0e2d\u0e07\u0e1a\u0e31\u0e27\u0e25\u0e33\u0e20\u0e39 39180",icon:i.a.createElement(S.c,{size:30})},{name:"phone",labelEn:"Phone",labelTh:"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c",en:"+66 893 759 808",th:"089 375 9808",icon:i.a.createElement(T.b,{size:30})},{name:"email",labelEn:"Email",labelTh:"\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e4c",en:"Kittipat_DD@kkumail.com",th:"Kittipat_DD@kkumail.com",icon:i.a.createElement(q.a,{size:30})}];return i.a.createElement("div",{className:"about-page"},i.a.createElement("div",{className:"left-about"},i.a.createElement("img",{src:V.a,alt:"Profile"})),i.a.createElement("div",{className:"right-about"},i.a.createElement("div",{className:"about-me"},i.a.createElement("h2",null,a?"Kittipat Daengdee":"\u0e01\u0e34\u0e15\u0e15\u0e34\u0e1e\u0e31\u0e12\u0e19\u0e4c \u0e41\u0e14\u0e07\u0e14\u0e35"),i.a.createElement("p",null,a?"Hello, my name is Kitttipat Daengdee but you can call me Pond I'm a junior in Computer Engineering Khon Kaen University, I've programming skill and teamwork. I'm good at Web application development and Mobile application development.":"\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a\u0e1c\u0e21\u0e0a\u0e37\u0e48\u0e2d \u0e1b\u0e2d\u0e19\u0e14\u0e4c \u0e40\u0e1b\u0e47\u0e19\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32\u0e0a\u0e31\u0e49\u0e19\u0e1b\u0e35\u0e17\u0e35\u0e48 3 \u0e04\u0e13\u0e30\u0e27\u0e34\u0e28\u0e27\u0e01\u0e23\u0e23\u0e21\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c \u0e2a\u0e32\u0e02\u0e32\u0e04\u0e2d\u0e21\u0e1e\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c \u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e02\u0e2d\u0e19\u0e41\u0e01\u0e48\u0e19 \u0e21\u0e35\u0e17\u0e31\u0e01\u0e29\u0e30\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21 \u0e01\u0e32\u0e23\u0e41\u0e01\u0e49\u0e1b\u0e31\u0e0d\u0e2b\u0e32 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e35\u0e21 \u0e42\u0e14\u0e22\u0e16\u0e19\u0e31\u0e14\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e40\u0e27\u0e47\u0e1a\u0e41\u0e2d\u0e1e\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e48\u0e19  \u0e41\u0e25\u0e30 \u0e42\u0e21\u0e1a\u0e32\u0e22\u0e41\u0e2d\u0e1e\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e48\u0e19")),i.a.createElement("div",{className:"about-me"},i.a.createElement("h3",null,a?"Career Objective":"\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e07\u0e32\u0e19\u0e17\u0e35\u0e48\u0e2a\u0e19\u0e43\u0e08"),i.a.createElement("p",null,"Full Stack Developer, Web Deverloper, Mobile Developer")),i.a.createElement("div",{className:"contact-me"},i.a.createElement("div",null,i.a.createElement("h3",{onClick:function(){return o(!r)},style:{cursor:"pointer",textDecoration:"underline"}},a?"Contact":"\u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e32\u0e07\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d",r?i.a.createElement(I.c,{size:20,style:{marginLeft:8,marginTop:4}}):i.a.createElement(I.b,{size:20,style:{marginLeft:8,marginTop:4}}))),r&&s.map((function(e,t){return i.a.createElement("div",{className:"contact-item",key:t},i.a.createElement("div",{className:"contact-item-label"},e.icon),i.a.createElement("p",{className:"contact-item-detail"},a?e.en:e.th))})))))}t(158);function X(e){var a=e.isEnglish;return i.a.createElement("div",{className:"experiences-page"},[{en:"Experiences",th:"\u0e1b\u0e23\u0e30\u0e2a\u0e1a\u0e01\u0e32\u0e23\u0e13\u0e4c",data:[{en:"2018",th:"2018",data:[{en:"Developed an aplication using python languages.",th:"\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e47\u0e04\u0e23\u0e32\u0e22\u0e27\u0e34\u0e0a\u0e32 \u0e2b\u0e25\u0e31\u0e01\u0e21\u0e39\u0e25\u0e02\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e04\u0e2d\u0e21\u0e1e\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c \u0e14\u0e49\u0e27\u0e22\u0e20\u0e32\u0e29\u0e32 Python"},{en:"Developed an Android application using Java language, and Android Studio IDE.",th:"\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e41\u0e2d\u0e1e\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19\u0e41\u0e2d\u0e19\u0e14\u0e23\u0e2d\u0e22\u0e14\u0e4c \u0e14\u0e49\u0e27\u0e22\u0e20\u0e32\u0e29\u0e32 Java \u0e41\u0e25\u0e30 Android Studio IDE"},{en:"Participated in PLC Competition 14th by TPA",th:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e01\u0e32\u0e23\u0e41\u0e02\u0e48\u0e07\u0e02\u0e31\u0e19 PLC Competition \u0e04\u0e23\u0e31\u0e49\u0e07\u0e17\u0e35\u0e48 14 \u0e08\u0e31\u0e14\u0e41\u0e02\u0e48\u0e07\u0e42\u0e14\u0e22\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e40\u0e17\u0e04\u0e42\u0e19\u0e42\u0e25\u0e22\u0e35\u0e44\u0e17\u0e22\u0e0d\u0e35\u0e48\u0e1b\u0e38\u0e48\u0e19"}]},{en:"2019",th:"2019",data:[{en:"Participated in '12\u0e40\u0e17\u0e1e\u0e2a\u0e32\u0e22 Dev \u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e02\u0e2d\u0e19\u0e41\u0e01\u0e48\u0e19' by Innovation Hub KKU and ThaiBev",th:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e40\u0e27\u0e34\u0e23\u0e4c\u0e04\u0e0a\u0e47\u0e2d\u0e1b\u0e02\u0e2d\u0e07\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 '12\u0e40\u0e17\u0e1e\u0e2a\u0e32\u0e22 Dev \u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e02\u0e2d\u0e19\u0e41\u0e01\u0e48\u0e19' \u0e08\u0e31\u0e14\u0e42\u0e14\u0e22 Innovation Hub \u0e23\u0e48\u0e27\u0e21\u0e01\u0e31\u0e1a \u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17\u0e44\u0e17\u0e22\u0e40\u0e1a\u0e1f\u0e40\u0e27\u0e2d\u0e40\u0e23\u0e08"},{en:"internship programs's Zercle Technology. Learn about website development, mySQL, framework NodeJS and framework Angular",th:"\u0e44\u0e14\u0e49\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e1d\u0e36\u0e01\u0e07\u0e32\u0e19\u0e01\u0e31\u0e1a\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17 Zercle Technology \u0e42\u0e14\u0e22\u0e44\u0e14\u0e49\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c \u0e40\u0e1f\u0e23\u0e21\u0e40\u0e27\u0e34\u0e23\u0e4c\u0e04 NodeJS \u0e41\u0e25\u0e30 Angular"},{en:"Participated in PLC Competition 15th operated by TPA.",th:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e01\u0e32\u0e23\u0e41\u0e02\u0e48\u0e07\u0e02\u0e31\u0e19 PLC Competition \u0e04\u0e23\u0e31\u0e49\u0e07\u0e17\u0e35\u0e48 15 \u0e08\u0e31\u0e14\u0e41\u0e02\u0e48\u0e07\u0e42\u0e14\u0e22\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e40\u0e17\u0e04\u0e42\u0e19\u0e42\u0e25\u0e22\u0e35\u0e44\u0e17\u0e22\u0e0d\u0e35\u0e48\u0e1b\u0e38\u0e48\u0e19"}]},{en:"2020",th:"2020",data:[{en:"Participated in training program of A Getting Started with SCB API to learn about using SCB API.",th:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e40\u0e27\u0e34\u0e23\u0e4c\u0e04\u0e0a\u0e47\u0e2d\u0e1b\u0e02\u0e2d\u0e07\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 Getting started with SCB API \u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e23\u0e39\u0e49\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 SCB API \u0e08\u0e31\u0e14\u0e42\u0e14\u0e22 \u0e18\u0e19\u0e32\u0e04\u0e32\u0e23\u0e44\u0e17\u0e22\u0e1e\u0e32\u0e19\u0e34\u0e0a"},{en:"Participated in Inovetor Challenge by Software Park Thailand about the robot competition of AI system.",th:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e01\u0e32\u0e23\u0e41\u0e02\u0e48\u0e07\u0e02\u0e31\u0e19\u0e2b\u0e38\u0e48\u0e19\u0e22\u0e19\u0e15\u0e4c\u0e23\u0e30\u0e1a\u0e1a AI \u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 Robo inovetor Challenge By Software Park Thailand "},{en:"Guest speaker tlak about IoT (Internet of Things) and NodeMCU (ESP8266) in Smart camp.",th:"\u0e40\u0e1b\u0e47\u0e19\u0e27\u0e34\u0e17\u0e22\u0e32\u0e01\u0e23\u0e2a\u0e2d\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 IoT (Internet of things) \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 NodeMCU(ESP8266) \u0e02\u0e2d\u0e07\u0e04\u0e48\u0e32\u0e22 Smart Camp"},{en:"Developed web application of Shopping Farmacro with React, Firebase, Google API, and Facebook API.",th:"\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e40\u0e27\u0e47\u0e1a\u0e41\u0e2d\u0e1e\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19 Farmacro \u0e14\u0e49\u0e27\u0e22\u0e40\u0e1f\u0e25\u0e21\u0e40\u0e27\u0e34\u0e23\u0e4c\u0e04 React, Firebase, Google API \u0e41\u0e25\u0e30 Facebook API"},{en:"Developed data-base with React and Firebase.",th:"\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e10\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e14\u0e49\u0e27\u0e22 React \u0e41\u0e25\u0e30 Firebase"},{en:"I've participated with NSC (National Software Contest) (In process)",th:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 NSC (National Software Contest) \u0e43\u0e19\u0e02\u0e13\u0e30\u0e19\u0e35\u0e49\u0e1c\u0e48\u0e32\u0e19\u0e40\u0e02\u0e49\u0e32\u0e23\u0e2d\u0e1a\u0e04\u0e31\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01 (\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e41\u0e02\u0e48\u0e07)"}]}]},{en:"Other",th:"\u0e2d\u0e37\u0e48\u0e19\u0e46",data:[{en:"Student Union Khon Kaen Univerity (2018 - 2020)",th:"\u0e17\u0e33\u0e07\u0e32\u0e19\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e32\u0e23\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32 (2018-2020)"},{en:"Head of Mechatronics Club, Faculty of Engineering, Khon Kaen Unuversity (2019 - Present)",th:"\u0e1b\u0e23\u0e30\u0e18\u0e32\u0e19\u0e0a\u0e38\u0e21\u0e19\u0e38\u0e21\u0e41\u0e21\u0e47\u0e04\u0e04\u0e32\u0e17\u0e23\u0e2d\u0e19\u0e34\u0e01\u0e2a\u0e4c \u0e04\u0e13\u0e30\u0e27\u0e34\u0e28\u0e27\u0e01\u0e23\u0e23\u0e21\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c \u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e02\u0e2d\u0e19\u0e41\u0e01\u0e48\u0e19 (2019-\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19)"}]}].map((function(e,t){return i.a.createElement("div",{className:"exp-content",key:t},i.a.createElement("h1",null,a?e.en:e.th),e.data.map((function(e,t){return e.data?i.a.createElement("div",{className:"exp-container"},i.a.createElement("h2",null,a?e.en:e.th),i.a.createElement("ul",null,e.data.map((function(e){return i.a.createElement("li",null,a?e.en:e.th)})))):i.a.createElement("ul",null,i.a.createElement("li",null,a?e.en:e.th))})))})))}t(159);function Y(){return i.a.createElement("div",{className:"reference-page"},i.a.createElement("ul",null,[{name:"Dr. Kanda Saikaew",position:"Associate Professor of Computer Engineering, Khon Kaen University"},{name:"Phattarajul Chantaramontree ",position:"Chief Design Officer & Co-founder Zercle Technology Co., Ltd."}].map((function(e,a){return i.a.createElement("li",{key:a},i.a.createElement("div",null,i.a.createElement("h2",null,e.name),i.a.createElement("p",null,e.position)))}))))}t(160);var ee=function(){var e=Object(n.useState)((function(){return!0})),a=Object(c.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)((function(){return!0})),o=Object(c.a)(r,2),s=o[0],d=o[1];return document.body.style.backgroundColor=t?"#333":"#f2f2f2",document.body.style.color=t?"#f2f2f2":"#222",i.a.createElement(u.a,null,i.a.createElement(P,{isDarkMode:t,setIsDarkMode:l,isEnglish:s,setIsEnglish:d}),i.a.createElement("div",{className:"content"},i.a.createElement(m.d,null,i.a.createElement(m.b,{path:"/profile/experiences"},i.a.createElement(X,{isEnglish:s})),i.a.createElement(m.b,{path:"/profile/education"},i.a.createElement(_,{isEnglish:s})),i.a.createElement(m.b,{path:"/profile/skill"},i.a.createElement(B,{isEnglish:s})),i.a.createElement(m.b,{path:"/profile/reference"},i.a.createElement(Y,{isEnglish:s})),i.a.createElement(m.b,{path:"/profile/about",strict:!0},i.a.createElement($,{isEnglish:s})),i.a.createElement(m.b,{path:"/profile/",strict:!0},i.a.createElement($,{isEnglish:s})),i.a.createElement(m.a,{to:"/profile/"}),i.a.createElement(m.b,{component:X({isEnglish:s})}))),i.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,a,t){e.exports=t.p+"static/media/profile-small.4a37267e.jpg"},79:function(e,a,t){e.exports=t.p+"static/media/Profile-square.bbf850c8.png"},82:function(e,a,t){e.exports=t(161)},87:function(e,a,t){}},[[82,1,2]]]);
//# sourceMappingURL=main.1cc1bbdd.chunk.js.map