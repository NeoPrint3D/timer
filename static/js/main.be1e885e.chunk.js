(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(24),a=c.n(n),i=c(39),o=c.n(i),l=(c(46),c(14)),s=(c(47),{apiKey:"AIzaSyCp7O_Tip1L7MKJ99L8t6WHk6fZlSesaxA",authDomain:"timer-55ae7.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/timer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyCp7O_Tip1L7MKJ99L8t6WHk6fZlSesaxA",REACT_APP_APP_ID:"1:16750097504:web:186f4cc491d1d09ea97f05",REACT_APP_AUTH_DOM:"timer-55ae7.firebaseapp.com",REACT_APP_MSG_ID:"16750097504",REACT_APP_PRJ_ID:"timer-55ae7",REACT_APP_STG_BKT:"timer-55ae7.appspot.com"}).REACT_APP_DB_URL,projectId:"timer-55ae7",storageBucket:"timer-55ae7.appspot.com",messagingSenderId:"16750097504",appId:"1:16750097504:web:186f4cc491d1d09ea97f05",measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/timer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyCp7O_Tip1L7MKJ99L8t6WHk6fZlSesaxA",REACT_APP_APP_ID:"1:16750097504:web:186f4cc491d1d09ea97f05",REACT_APP_AUTH_DOM:"timer-55ae7.firebaseapp.com",REACT_APP_MSG_ID:"16750097504",REACT_APP_PRJ_ID:"timer-55ae7",REACT_APP_STG_BKT:"timer-55ae7.appspot.com"}).REACT_APP_MESG_ID}),r=c(41),d=c(40),b=c(19),j=r.a.initializeApp(s);function _(e){var t=e.color,c=e.title,n=e.text;return Object(b.jsx)("div",{className:"p-3 lg:p-5 bg-".concat(t,"-800 rounded-3xl mb-5"),children:Object(b.jsxs)("div",{className:"bg-".concat(t,"-600 text-center p-3 lg:p-5 rounded-2xl  mx-auto"),children:[Object(b.jsx)("div",{className:"flex justify-center p-2",children:Object(b.jsx)("h1",{className:"text-2xl text-bold rounded-2xl  px-10 md:px-10 p-2 bg-".concat(t,"-300 font font-bold"),children:c})}),Object(b.jsx)("div",{className:"flex justify-center",children:Object(b.jsx)("h3",{className:"text-xl text-bold bg-".concat(t,"-200 rounded-3xl lg:px-56 p-3 font-light"),children:n})})]})})}Object(d.a)(j);var x=function(){var e=new Date,t=Object(n.useState)(0),c=Object(l.a)(t,2),a=c[0],i=c[1],o=Object(n.useState)(0),s=Object(l.a)(o,2),r=s[0],d=s[1],j=Object(n.useState)(0),x=Object(l.a)(j,2),u=x[0],p=x[1],m=[806,857,951,1042,1207,1258,1349,1440],f="".concat(e.getMonth()+1,"/").concat(e.getDay(),"/").concat(e.getFullYear());Object(n.useEffect)((function(){var t=setInterval((function(){i(e.toLocaleTimeString())}),1e3);return function(){return clearInterval(t)}}),[]),Object(n.useEffect)((function(){O()}),[a]);var O=function(){console.log("hi");var t=e.getMinutes();e.getMinutes()<10&&(t="0"+t);var c=e.getHours()+""+t;console.log(c),c>=720&&c<=1440?(c>=720&&c<=806&&d(1),c>=806&&c<=857&&d(2),c>=902&&c<=951&&d(3),c>=956&&c<=1042&&d(4),c>=1047&&c<=1207&&d(5),c>=1212&&c<=1258&&d(6),c>=1303&&c<=1349&&d(7),d(c>=1354&&c<=1440?8:"In Between bells")):d("Out of School"),p(c>=720&&c<=1440?0==r?"".concat(m[0]-c," min"):"In Between bells"!==r?"".concat(m[r-1]-c):"You're here in time":"School is done")};return Object(b.jsxs)("main",{className:"h-screen bg-blue-200",children:[Object(b.jsx)("header",{className:"bg-yellow-600 p-3 text-center rounded-b-3xl mb-6 justify-center",children:Object(b.jsxs)("div",{className:"bg-yellow-400 p-1.5 text-center rounded-3xl justify-center",children:[Object(b.jsx)("div",{className:"flex justify-center p-2",children:Object(b.jsx)("button",{className:" text-3xl font-bold rounded-3xl px-10 p-3 bg-yellow-200",onClick:O,children:"MISD Time"})}),Object(b.jsx)("div",{className:"flex justify-center p-2",children:Object(b.jsx)("h1",{className:"rounded-3xl px-5 p-2 bg-yellow-200 font font-light",children:"Made By Drew Ronsman"})})]})}),Object(b.jsxs)("body",{children:[Object(b.jsxs)("div",{className:"justify-evenly flex",children:[Object(b.jsx)(_,{color:"blue",title:"Date",text:f}),Object(b.jsx)(_,{color:"red",title:"Time",text:a})]}),Object(b.jsxs)("div",{className:"justify-evenly flex",children:[Object(b.jsx)(_,{color:"green",title:"Period",text:r}),Object(b.jsx)(_,{color:"pink",title:"Time Left",text:u})]})]})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),i(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),u()}},[[51,1,2]]]);
//# sourceMappingURL=main.be1e885e.chunk.js.map