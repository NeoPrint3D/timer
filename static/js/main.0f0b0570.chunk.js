(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var c=a(7),n=a.n(c),i=a(20),s=a.n(i),l=a(9),r={apiKey:"AIzaSyCp7O_Tip1L7MKJ99L8t6WHk6fZlSesaxA",authDomain:"timer-55ae7.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/timer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyCp7O_Tip1L7MKJ99L8t6WHk6fZlSesaxA",REACT_APP_APP_ID:"1:16750097504:web:186f4cc491d1d09ea97f05",REACT_APP_AUTH_DOM:"timer-55ae7.firebaseapp.com",REACT_APP_MSG_ID:"16750097504",REACT_APP_PRJ_ID:"timer-55ae7",REACT_APP_STG_BKT:"timer-55ae7.appspot.com",REACT_APP_W_API_KEY:"1a9fac4a34b9ca33ff2e145792f9ec31"}).REACT_APP_DB_URL,projectId:"timer-55ae7",storageBucket:"timer-55ae7.appspot.com",messagingSenderId:"16750097504",appId:"1:16750097504:web:186f4cc491d1d09ea97f05",measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/timer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyCp7O_Tip1L7MKJ99L8t6WHk6fZlSesaxA",REACT_APP_APP_ID:"1:16750097504:web:186f4cc491d1d09ea97f05",REACT_APP_AUTH_DOM:"timer-55ae7.firebaseapp.com",REACT_APP_MSG_ID:"16750097504",REACT_APP_PRJ_ID:"timer-55ae7",REACT_APP_STG_BKT:"timer-55ae7.appspot.com",REACT_APP_W_API_KEY:"1a9fac4a34b9ca33ff2e145792f9ec31"}).REACT_APP_MESG_ID},o=a(26),d=a(23),b=a(3);var j=function(e){var t=e.title,a=e.text,c=e.image;return Object(b.jsx)("div",{className:"bg-blue-600 p-2 lg:p-3 rounded-3xl mb-5 place-items-center",children:Object(b.jsxs)("div",{className:"bg-yellow-400 text-center p-2 sm:p-3 lg:p-5 rounded-2xl  mx-auto text ",children:[Object(b.jsx)("div",{className:"flex justify-center p-2",children:Object(b.jsx)("div",{className:"bg-yellow-100 p-1 rounded-2xl",children:Object(b.jsx)("h1",{className:"bg-blue-300 sm:text-2xl text-bold rounded-2xl  px-3 sm:px-10 lg:px-24  p-1  md:px-16 font font-bold text-sm",children:t})})}),Object(b.jsxs)("div",{className:"flex justify-evenly",children:[Object(b.jsx)("div",{className:"flex place-items-center",children:Object(b.jsx)("h3",{className:"bg-yellow-100 sm:text-xl text-xs text-bold rounded-3xl lg:px-10 p-1 sm:p-3 px-3 font-light text-justify",children:a})}),c?Object(b.jsx)("img",{className:"bg-yellow-100 p-0.5 rounded-full w-8 h-8 sm:w-16 sm:h-16",src:c,alt:""}):Object(b.jsx)(b.Fragment,{})]})]})})},m=o.a.initializeApp(r);Object(d.a)(m);var x=function(){var e=Object(c.useState)((new Date).toLocaleDateString()),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)({}),s=Object(l.a)(i,2),r=s[0],o=s[1],d=Object(c.useState)("Loading..."),m=Object(l.a)(d,2),x=m[0],p=m[1],u=Object(c.useState)("Loading..."),_=Object(l.a)(u,2),O=_[0],f=_[1],A=Object(c.useState)("Loading..."),h=Object(l.a)(A,2),P=h[0],g=h[1],S=Object(c.useState)("Regular"),T=Object(l.a)(S,2),E=T[0],v=T[1],R=Object(c.useState)([]),w=Object(l.a)(R,2),C=w[0],D=w[1],y=Object(c.useState)([]),I=Object(l.a)(y,2),N=I[0],L=I[1],K="https://api.openweathermap.org/data/2.5/weather?q=Conroe,Texas&units=imperial&appid=".concat("1a9fac4a34b9ca33ff2e145792f9ec31");Object(c.useEffect)((function(){fetch(K).then((function(e){return e.json()})).then((function(e){return o(e)}))}),[K]),Object(c.useEffect)((function(){n((new Date).toLocaleDateString());var e=setInterval((function(){p((new Date).toLocaleTimeString())}),1e3);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){M()}),[x]),Object(c.useEffect)((function(){"Regular"===E?(D([486,537,591,642,727,778,829,880]),L([440,491,542,596,647,732,783,834])):"Activity"===E&&(D([481,527,578,624,709,758,804,850,880]),L([440,486,532,583,629,717,763,809,850]))}),[E]);var M=function(){var e=60*(new Date).getHours()+(new Date).getMinutes();e>=N[0]&&e<=C[7]&&(e>=N[0]&&e<=C[0]?f(1):e>=N[1]&&e<=C[1]?f(2):e>=N[2]&&e<=C[2]?f(3):e>=N[3]&&e<=C[3]?f(4):e>=N[4]&&e<=C[4]?f(5):e>=N[5]&&e<=C[5]?f(6):e>=N[6]&&e<=C[6]?f(7):e>=N[7]&&e<=C[7]?f(8):9===N.length&&9===C.length?e>=N[8]&&e<=C[8]&&f("Activity"):f("In between bells")),e>=N[0]&&e<=C[7]&&g(1===O?"".concat(C[0]-e," min"):"In between bells"!==O?"".concat(C[O-1]-e," min"):"You made it on time")};return Object(b.jsxs)("div",{className:"bg-blue-800 h-screen ",children:[Object(b.jsx)("header",{className:"bg-blue-600 px-3 pb-3 rounded-b-3xl mb-5",children:Object(b.jsxs)("div",{className:"bg-yellow-400 p-1 text-center rounded-b-3xl ",children:[Object(b.jsx)("div",{className:" rounded-3xl px-5 p-2 bg-yellow-200 mt-3",children:Object(b.jsx)("h4",{className:" text-3xl font-bold",children:"MISD Time"})}),Object(b.jsxs)("div",{className:"flex justify-center p-2",children:[Object(b.jsxs)("select",{className:"rounded-3xl px-5 p-2 bg-yellow-200 font font-light",value:E,onChange:function(e){return v(e.target.value)},children:[Object(b.jsx)("option",{value:"Regular",children:"Regular"}),Object(b.jsx)("option",{value:"Activity",children:"Activity"})]}),Object(b.jsx)("h5",{className:"rounded-3xl px-5 p-2 bg-yellow-200 font font-light mx-3",children:"Made By Drew Ronsman"})]})]})}),Object(b.jsxs)("div",{className:"items-center",children:[Object(b.jsxs)("div",{className:"justify-evenly flex place-items-center",children:[Object(b.jsx)(j,{title:"Date",text:a}),Object(b.jsx)(j,{title:"Time",text:x}),Object(b.jsx)(j,{title:"Period",text:O})]}),Object(b.jsxs)("div",{className:"justify-evenly flex place-items-center ",children:[Object(b.jsx)(j,{title:"Weather",text:r.main?"".concat(Math.round(r.main.temp)," \xb0F"):"loading",image:r.weather?"http://openweathermap.org/img/w/".concat(r.weather[0].icon,".png"):0}),Object(b.jsx)(j,{title:"Ends in",text:P})]})]})]})};a(34);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.0f0b0570.chunk.js.map