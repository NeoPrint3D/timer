(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{31:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var a=c(7),n=c.n(a),i=c(20),s=c.n(i),r=(c(31),c(9)),l={apiKey:"AIzaSyCp7O_Tip1L7MKJ99L8t6WHk6fZlSesaxA",authDomain:"timer-55ae7.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/timer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyCp7O_Tip1L7MKJ99L8t6WHk6fZlSesaxA",REACT_APP_APP_ID:"1:16750097504:web:186f4cc491d1d09ea97f05",REACT_APP_AUTH_DOM:"timer-55ae7.firebaseapp.com",REACT_APP_MSG_ID:"16750097504",REACT_APP_PRJ_ID:"timer-55ae7",REACT_APP_STG_BKT:"timer-55ae7.appspot.com",REACT_APP_W_API_KEY:"1a9fac4a34b9ca33ff2e145792f9ec31"}).REACT_APP_DB_URL,projectId:"timer-55ae7",storageBucket:"timer-55ae7.appspot.com",messagingSenderId:"16750097504",appId:"1:16750097504:web:186f4cc491d1d09ea97f05",measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/timer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyCp7O_Tip1L7MKJ99L8t6WHk6fZlSesaxA",REACT_APP_APP_ID:"1:16750097504:web:186f4cc491d1d09ea97f05",REACT_APP_AUTH_DOM:"timer-55ae7.firebaseapp.com",REACT_APP_MSG_ID:"16750097504",REACT_APP_PRJ_ID:"timer-55ae7",REACT_APP_STG_BKT:"timer-55ae7.appspot.com",REACT_APP_W_API_KEY:"1a9fac4a34b9ca33ff2e145792f9ec31"}).REACT_APP_MESG_ID},o=c(26),d=c(23),j=c(5),b=o.a.initializeApp(l);function p(e){var t=e.color,c=e.title,a=e.text;e.image;return Object(j.jsx)("div",{className:"p-2 lg:p-3 bg-".concat(t,"-800 rounded-3xl mb-5 place-items-center"),children:Object(j.jsxs)("div",{className:"bg-".concat(t,"-600 text-center p-2 sm:p-3 lg:p-5 rounded-2xl  mx-auto text "),children:[Object(j.jsx)("div",{className:"flex justify-center p-2",children:Object(j.jsx)("div",{className:"bg-".concat(t,"-100 p-1 rounded-2xl"),children:Object(j.jsx)("h1",{className:"sm:text-2xl text-sm text-bold rounded-2xl  px-3 sm:px-10 lg:px-24  p-1  md:px-16 bg-".concat(t,"-300 font font-bold "),children:c})})}),Object(j.jsx)("div",{className:"flex justify-evenly",children:Object(j.jsx)("div",{className:"flex place-items-center",children:Object(j.jsx)("h3",{className:"sm:text-xl text-xs text-bold bg-".concat(t,"-200 rounded-3xl lg:px-10 p-1 sm:p-3 px-3 font-light text-justify"),children:a})})})]})})}Object(d.a)(b);var x=function(){var e=Object(a.useState)((new Date).toLocaleDateString()),t=Object(r.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)({}),s=Object(r.a)(i,2),l=s[0],o=s[1],d=Object(a.useState)("Loading..."),b=Object(r.a)(d,2),x=b[0],m=b[1],u=Object(a.useState)("Loading..."),_=Object(r.a)(u,2),O=_[0],f=_[1],A=Object(a.useState)("Loading..."),h=Object(r.a)(A,2),P=h[0],g=h[1],S=Object(a.useState)("Regular"),T=Object(r.a)(S,2),E=T[0],v=T[1],R=Object(a.useState)([]),C=Object(r.a)(R,2),D=C[0],I=C[1],w=Object(a.useState)([]),y=Object(r.a)(w,2),N=y[0],L=y[1],K="https://api.openweathermap.org/data/2.5/weather?q=Conroe,Texas&units=imperial&appid=".concat("1a9fac4a34b9ca33ff2e145792f9ec31");Object(a.useEffect)((function(){fetch(K).then((function(e){return e.json()})).then((function(e){return o(e)}))}),[K]),Object(a.useEffect)((function(){n((new Date).toLocaleDateString());var e=setInterval((function(){m((new Date).toLocaleTimeString())}),1e3);return function(){return clearInterval(e)}}),[]),Object(a.useEffect)((function(){M()}),[x]),Object(a.useEffect)((function(){"Regular"===E?(I([486,537,591,642,727,778,829,880]),L([440,491,542,596,647,732,783,834])):"Activity"===E&&(I([481,527,578,624,709,758,804,850,880]),L([440,486,532,583,629,717,763,809,850]))}),[E]);var M=function(){var e=60*(new Date).getHours()+(new Date).getMinutes();e>=N[0]&&e<=D[7]&&(e>=N[0]&&e<=D[0]?f(1):e>=N[1]&&e<=D[1]?f(2):e>=N[2]&&e<=D[2]?f(3):e>=N[3]&&e<=D[3]?f(4):e>=N[4]&&e<=D[4]?f(5):e>=N[5]&&e<=D[5]?f(6):e>=N[6]&&e<=D[6]?f(7):e>=N[7]&&e<=D[7]?f(8):9===N.length&&9===D.length?e>=N[8]&&e<=D[8]&&f("Activity"):f("In between bells")),e>=N[0]&&e<=D[7]&&g(1===O?"".concat(D[0]-e," min"):"In between bells"!==O?"".concat(D[O-1]-e," min"):"You made it on time")};return Object(j.jsxs)("div",{className:"bg-green-200 h-screen",children:[Object(j.jsx)("header",{children:Object(j.jsxs)("div",{className:"bg-yellow-400 p-1 text-center rounded-b-3xl mb-5",children:[Object(j.jsx)("div",{className:" rounded-3xl px-5 p-2 bg-yellow-200 mt-3",children:Object(j.jsx)("h4",{className:" text-3xl font-bold",children:"MISD Time"})}),Object(j.jsxs)("div",{className:"flex justify-center p-2",children:[Object(j.jsxs)("select",{className:"rounded-3xl px-5 p-2 bg-yellow-200 font font-light",value:E,onChange:function(e){return v(e.target.value)},children:[Object(j.jsx)("option",{value:"Regular",children:"Regular"}),Object(j.jsx)("option",{value:"Activity",children:"Activity"})]}),Object(j.jsx)("h5",{className:"rounded-3xl px-5 p-2 bg-yellow-200 font font-light mx-3",children:"Made By Drew Ronsman"})]})]})}),Object(j.jsxs)("div",{className:"items-center",children:[Object(j.jsxs)("div",{className:"justify-evenly flex place-items-center",children:[Object(j.jsx)(p,{color:"blue",title:"Date",text:c}),Object(j.jsx)(p,{color:"red",title:"Time",text:x}),Object(j.jsx)(p,{color:"green",title:"Period",text:O})]}),Object(j.jsxs)("div",{className:"justify-evenly flex place-items-center gri",children:[Object(j.jsx)(p,{color:"purple",title:"Weather",text:l.main?"".concat(Math.round(l.main.temp)," \xb0F"):"loading",image:l.weather?"http://openweathermap.org/img/w/".concat(l.weather[0].icon,".png"):0}),Object(j.jsx)(p,{color:"pink",title:"Ends in",text:P})]})]})]})};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.8a8d48c0.chunk.js.map