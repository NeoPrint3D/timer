(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(21),i=a.n(s),r=a(20),o=a(0),l=a.n(o),u=a(5),d=a(7),j={apiKey:"AIzaSyCp7O_Tip1L7MKJ99L8t6WHk6fZlSesaxA",authDomain:"timer-55ae7.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/timer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyCp7O_Tip1L7MKJ99L8t6WHk6fZlSesaxA",REACT_APP_APP_ID:"1:16750097504:web:186f4cc491d1d09ea97f05",REACT_APP_AUTH_DOM:"timer-55ae7.firebaseapp.com",REACT_APP_MSG_ID:"16750097504",REACT_APP_PRJ_ID:"timer-55ae7",REACT_APP_STG_BKT:"timer-55ae7.appspot.com",REACT_APP_W_API_KEY:"1a9fac4a34b9ca33ff2e145792f9ec31"}).REACT_APP_DB_URL,projectId:"timer-55ae7",storageBucket:"timer-55ae7.appspot.com",messagingSenderId:"16750097504",appId:"1:16750097504:web:186f4cc491d1d09ea97f05",measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/timer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyCp7O_Tip1L7MKJ99L8t6WHk6fZlSesaxA",REACT_APP_APP_ID:"1:16750097504:web:186f4cc491d1d09ea97f05",REACT_APP_AUTH_DOM:"timer-55ae7.firebaseapp.com",REACT_APP_MSG_ID:"16750097504",REACT_APP_PRJ_ID:"timer-55ae7",REACT_APP_STG_BKT:"timer-55ae7.appspot.com",REACT_APP_W_API_KEY:"1a9fac4a34b9ca33ff2e145792f9ec31"}).REACT_APP_MESG_ID},b=a(27),m=a(24),p=(a(34),a.p+"static/media/img.20ce4e42.png"),x=a(4),f=b.a.initializeApp(j);function O(e){var t=e.title,a=e.text,c=e.image,n=e.size,s="rounded-full";return"Memes"===t&&(s="rounded-xl"),n=n||"text-xl",Object(x.jsx)("div",{className:"yellow text-center p-2 sm:p-2 lg:p-4 rounded-2xl  mx-auto transparent  border-full",children:Object(x.jsx)("div",{className:"flex justify-evenly place-items-center",children:"Memes"===t?Object(x.jsx)("div",{children:Object(x.jsx)("img",{className:"bg-white ".concat(s," w-64 h-64"),src:c,alt:""})}):Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"bg-white sm:text-2xl text-bold rounded-2xl  px-3 sm:px-10 lg:px-24  p-3 sm:p-2 mb-2 md:px-14 font-bold text-sm ",children:t}),Object(x.jsxs)("div",{className:"flex place-items-center justify-evenly",children:[Object(x.jsx)("h3",{className:"bg-white sm:".concat(n," text-xs  rounded-3xl lg:px-10 p-1 sm:p-3 px-3  "),children:a}),c?Object(x.jsx)("img",{className:"bg-white p-0.5 ".concat(s," w-8 h-8 sm:w-16 sm:h-16 mx-3 "),src:c,alt:""}):Object(x.jsx)(x.Fragment,{})]})]})})})}Object(m.a)(f);var h=function(){var e=Object(c.useState)((new Date).toLocaleDateString()),t=Object(d.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)({}),r=Object(d.a)(i,2),o=r[0],j=r[1],b=Object(c.useState)("Loading..."),m=Object(d.a)(b,2),f=m[0],h=m[1],_=Object(c.useState)("Loading..."),g=Object(d.a)(_,2),A=g[0],P=g[1],v=Object(c.useState)("Loading..."),S=Object(d.a)(v,2),E=S[0],T=S[1],w=Object(c.useState)("Regular"),C=Object(d.a)(w,2),R=C[0],y=C[1],D=Object(c.useState)("Quote"),I=Object(d.a)(D,2),L=I[0],M=I[1],N=Object(c.useState)("Loading..."),k=Object(d.a)(N,2),K=k[0],H=k[1],W=Object(c.useState)("Loading..."),B=Object(d.a)(W,2),U=B[0],z=B[1],F=Object(c.useState)([]),J=Object(d.a)(F,2),Q=J[0],G=J[1],Y=Object(c.useState)([]),Z=Object(d.a)(Y,2),q=Z[0],V=Z[1];Object(c.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=Conroe,Texas&units=imperial&appid=".concat("1a9fac4a34b9ca33ff2e145792f9ec31")).then((function(e){return e.json()})).then((function(e){return j(e)}))}),[]),Object(c.useEffect)((function(){s((new Date).toLocaleDateString());var e=setInterval((function(){h((new Date).toLocaleTimeString())}),1e3);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){ee()}),[f]),Object(c.useEffect)((function(){"Regular"===R?(G([486,537,591,642,667,697,727,778,829,880]),V([440,491,542,596,642,672,702,732,783,834])):"Activity"===R&&(G([481,527,578,624,709,758,804,850,880]),V([440,486,532,583,629,717,763,809,850]))}),[R]),Object(c.useEffect)((function(){"Memes"===L?X():"Quote"===L&&$()}),[L]);var X=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(23*Math.random()),a="?number=".concat(t),e.next=4,fetch("https://MemeApi.neoprint777.repl.co/Memes"+a);case 4:c=e.sent,H(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://type.fit/api/quotes");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,z(t[Math.floor(Math.random()*t.length)]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=60*(new Date).getHours()+(new Date).getMinutes();e>=q[0]&&e<=Q[9]&&(e>=q[0]&&e<=Q[0]?P(1):e>=q[1]&&e<=Q[1]?P(2):e>=q[2]&&e<=Q[2]?P(3):e>=q[3]&&e<=Q[3]?P(4):e>=q[4]&&e<=Q[4]?P("A Lunch"):e>=q[5]&&e<=Q[5]?P("B Lunch"):e>=q[6]&&e<=Q[6]?P("C Lunch"):e>=q[7]&&e<=Q[7]?P(6):e>=q[8]&&e<=Q[8]?P(7):e>=q[9]&&e<=Q[9]?P(8):10===q.length&&10===Q.length?e>=q[11]&&e<=Q[11]&&P("Activity"):P("In between bells")),e>=q[0]&&e<=Q[9]&&(1===A?T("".concat(Q[0]-e," min")):"In between bells"!==A?A>=6?T("".concat(Q[A+1]-e," min")):"Loading..."===A&&T("Eat up"):T("You made it on time"))};return Object(x.jsx)(n.a.Fragment,{children:Object(x.jsxs)("div",{className:"blue ",children:[Object(x.jsxs)("div",{className:"border-full yellow px-2 pb-3 rounded-3xl text-md font-light",children:[Object(x.jsx)("div",{className:"flex justify-center ",children:Object(x.jsx)("h5",{className:"px-32 text-center text-3xl font-bold bg-white rounded-3xl p-3 mt-5 ",children:"Lake Creek"})}),Object(x.jsxs)("div",{className:"flex justify-center mt-3",children:[Object(x.jsxs)("select",{className:"rounded-3xl p-2 bg-white mr-3",value:R,onChange:function(e){return y(e.target.value)},children:[Object(x.jsx)("option",{value:"Regular",children:"Regular"}),Object(x.jsx)("option",{value:"Activity",children:"Activity"})]}),Object(x.jsxs)("select",{className:"rounded-3xl p-2 bg-white mr-3",value:L,onChange:function(e){return M(e.target.value)},children:[Object(x.jsx)("option",{value:"Quote",children:"Quote"}),Object(x.jsx)("option",{value:"Memes",children:"Memes"})]})]})]}),Object(x.jsx)("div",{style:{backgroundImage:"url(".concat(p,")"),backgroundRepeat:"no-repeat",backgroundPositionX:"center",backgroundSize:"350px"},alt:"lake",className:"mt-4",children:Object(x.jsxs)("div",{className:"justify-evenly grid gap-x-5 gap-y-4 grid-cols-3 place-items-center mt-3",children:[Object(x.jsx)(O,{title:"Time",text:f}),Object(x.jsx)(O,{title:"Weather",text:o.main?"".concat(Math.round(o.main.temp)," \xb0F"):"loading",image:o.weather?"http://openweathermap.org/img/w/".concat(o.weather[0].icon,".png"):0}),Object(x.jsx)(O,{title:"Date",text:a}),Object(x.jsx)(O,{title:"Period",text:A}),"Quote"===L?Object(x.jsx)(O,{title:"Quote",text:'"'.concat(U.text,'" -').concat(U.author||"unknown"),size:"text-xs"}):Object(x.jsx)(O,{title:"Memes",image:"".concat(K.url)}),Object(x.jsx)(O,{title:"Class Ends",text:E})]})}),Object(x.jsx)("footer",{className:"flex justify-evenly mt-3 yellow p-2 border-top rounded-t-3xl",children:Object(x.jsx)("h5",{className:"bg-white rounded-2xl px-5",children:"Made by NeoPrint3D"})})]})})};a(36);i.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(r.a,{children:Object(x.jsx)(h,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.1a234852.chunk.js.map