(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{31:function(e,t,l){},35:function(e,t,l){"use strict";l.r(t);var c=l(10),s=l.n(c),n=l(20),d=l.n(n),a=(l(31),l(11)),r={apiKey:"AIzaSyCp7O_Tip1L7MKJ99L8t6WHk6fZlSesaxA",authDomain:"timer-55ae7.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/timer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyCp7O_Tip1L7MKJ99L8t6WHk6fZlSesaxA",REACT_APP_APP_ID:"1:16750097504:web:186f4cc491d1d09ea97f05",REACT_APP_AUTH_DOM:"timer-55ae7.firebaseapp.com",REACT_APP_MSG_ID:"16750097504",REACT_APP_PRJ_ID:"timer-55ae7",REACT_APP_STG_BKT:"timer-55ae7.appspot.com"}).REACT_APP_DB_URL,projectId:"timer-55ae7",storageBucket:"timer-55ae7.appspot.com",messagingSenderId:"16750097504",appId:"1:16750097504:web:186f4cc491d1d09ea97f05",measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/timer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyCp7O_Tip1L7MKJ99L8t6WHk6fZlSesaxA",REACT_APP_APP_ID:"1:16750097504:web:186f4cc491d1d09ea97f05",REACT_APP_AUTH_DOM:"timer-55ae7.firebaseapp.com",REACT_APP_MSG_ID:"16750097504",REACT_APP_PRJ_ID:"timer-55ae7",REACT_APP_STG_BKT:"timer-55ae7.appspot.com"}).REACT_APP_MESG_ID},i=l(26),x=l(23),o=l(2),b=i.a.initializeApp(r);Object(x.a)(b);var j=function(){var e=new Date,t=Object(c.useState)(0),l=Object(a.a)(t,2),s=l[0],n=l[1],d=Object(c.useState)(0),r=Object(a.a)(d,2),i=r[0],x=r[1],b=Object(c.useState)(0),j=Object(a.a)(b,2),p=j[0],u=j[1],m=[486,537,591,642,727,778,829,880],g="".concat(e.getMonth()+1,"/").concat(e.getDay(),"/").concat(e.getFullYear());Object(c.useEffect)((function(){var e=setInterval((function(){n((new Date).toLocaleTimeString())}),1e3);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){O()}),[s]);var O=function(){var t=e.getHours()+""+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes());x(t>=720&&t<=1440?t>=720&&t<=806?1:t>=806&&t<=857?2:t>=902&&t<=951?3:t>=956&&t<=1042?4:t>=1047&&t<=1207?5:t>=1212&&t<=1258?6:t>=1303&&t<=1349?7:t>=1354&&t<=1440?8:"In between bells":"School is out"),u(t>=720&&t<=1440?0===i?"".concat(m[0]-(60*e.getHours()+e.getMinutes())," min"):"In between bells"!==i?"".concat(m[i-1]-(60*e.getHours()+e.getMinutes())," min"):"You made it on timer":"No School Left")};return Object(o.jsxs)("div",{className:"bg-green-300 h-screen bg-scroll",children:[Object(o.jsx)("header",{className:"bg-yellow-600 p-3 text-center rounded-b-3xl mb-6 justify-center",children:Object(o.jsxs)("div",{className:"bg-yellow-400 p-1.5 text-center rounded-3xl justify-center",children:[Object(o.jsx)("button",{className:" text-3xl font-bold rounded-3xl px-10 p-3 bg-yellow-200 mt-3",onClick:O,children:"MISD Time"}),Object(o.jsx)("div",{className:"flex justify-center p-2",children:Object(o.jsx)("h1",{className:"rounded-3xl px-5 p-2 bg-yellow-200 font font-light",children:"Made By Drew Ronsman"})})]})}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"justify-evenly flex",children:[Object(o.jsx)("div",{className:"p-3 lg:p-5 bg-red-800 rounded-3xl mb-5",children:Object(o.jsxs)("div",{className:"bg-red-600 text-center p-3 lg:p-5 rounded-2xl  mx-auto",children:[Object(o.jsx)("div",{className:"flex justify-center p-2",children:Object(o.jsx)("div",{className:"bg-red-100 p-1 rounded-2xl",children:Object(o.jsx)("h1",{className:"text-2xl text-bold rounded-2xl  px-10 lg:px-24 p-2 bg-red-300 font font-bold",children:"Date"})})}),Object(o.jsx)("div",{className:"flex justify-center",children:Object(o.jsx)("h3",{className:"text-xl text-bold bg-red-200 rounded-3xl lg:px-10 p-3 px-4 font-light",children:g})})]})}),Object(o.jsx)("div",{className:"p-3 lg:p-5 bg-blue-800 rounded-3xl mb-5",children:Object(o.jsxs)("div",{className:"bg-blue-600 text-center p-3 lg:p-5 rounded-2xl  mx-auto",children:[Object(o.jsx)("div",{className:"flex justify-center p-2",children:Object(o.jsx)("div",{className:"bg-blue-100 p-1 rounded-2xl",children:Object(o.jsx)("h1",{className:"text-2xl text-bold rounded-2xl  px-10 lg:px-24 p-2 bg-blue-300 font font-bold",children:"Time"})})}),Object(o.jsx)("div",{className:"flex justify-center",children:Object(o.jsx)("h3",{className:"text-xl text-bold bg-blue-200 rounded-3xl lg:px-10 p-3 px-4 font-light",children:s})})]})})]}),Object(o.jsxs)("div",{className:"justify-evenly flex",children:[Object(o.jsx)("div",{className:"p-3 lg:p-5 bg-green-800 rounded-3xl mb-5",children:Object(o.jsxs)("div",{className:"bg-green-600 text-center p-3 lg:p-5 rounded-2xl  mx-auto",children:[Object(o.jsx)("div",{className:"flex justify-center p-2",children:Object(o.jsx)("div",{className:"bg-green-100 p-1 rounded-2xl",children:Object(o.jsx)("h1",{className:"text-2xl text-bold rounded-2xl  px-10 lg:px-24 p-2 bg-green-300 font font-bold",children:"Period"})})}),Object(o.jsx)("div",{className:"flex justify-center",children:Object(o.jsx)("h3",{className:"text-xl text-bold bg-green-200 rounded-3xl lg:px-10 p-3 px-4 font-light",children:i})})]})}),Object(o.jsx)("div",{className:"p-3 lg:p-5 bg-purple-800 rounded-3xl mb-5",children:Object(o.jsxs)("div",{className:"bg-purple-600 text-center p-3 lg:p-5 rounded-2xl  mx-auto",children:[Object(o.jsx)("div",{className:"flex justify-center p-2",children:Object(o.jsx)("div",{className:"bg-purple-100 p-1 rounded-2xl",children:Object(o.jsx)("h1",{className:"text-2xl text-bold rounded-2xl  px-10 lg:px-24 p-2 bg-purple-300 font font-bold",children:"Time Left"})})}),Object(o.jsx)("div",{className:"flex justify-center",children:Object(o.jsx)("h3",{className:"text-xl text-bold bg-purple-200 rounded-3xl lg:px-10 p-3 px-4 font-light",children:p})})]})})]})]})]})};d.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.0b066d1c.chunk.js.map