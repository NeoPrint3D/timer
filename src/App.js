import "./App.css";
import React, { useState, useEffect } from "react";
import firebaseConfig from "./config";
import firebase from "firebase/compat";
import { getAnalytics } from "firebase/analytics";

const app = firebase.initializeApp(firebaseConfig);
getAnalytics(app);

function App() {
  let dt = new Date();
  const [time, setTime] = useState(0);
  let [period, setPeriod] = useState(0);
  let [timeleft, setTimeleft] = useState(0);
  const endof=[806,857,951,1042,1207,1258,1349,1440]
  let date = `${dt.getMonth() + 1}/${dt.getDay()}/${dt.getFullYear()}`;

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    checktime();
  }, [time]);

  const checktime = () => {
    let t = new Date();
    let minutes = t.getMinutes();
    if (dt.getMinutes() < 10) {
      minutes = "0" + minutes;
    }
    
    let total = t.getHours() + "" + minutes;


    
    if (total >= 720 && total <= 806) {
      setPeriod(1);
    } else if (total >= 806 && total <= 857) {
      setPeriod(2);
    } else if (total >= 902 && total <= 951) {
      setPeriod(3);
    } else if (total >= 956 && total <= 1042) {
      setPeriod(4);
    } else if (total >= 1047 && total <= 1207) {
      setPeriod(5);
    } else if (total >= 1212 && total <= 1258) {
      setPeriod(6);
    } else if (total >= 1303 && total <= 1349) {
      setPeriod(7);
    } else if (total >= 1354 && total <= 1440) {
      setPeriod(8);
    } else {
      setPeriod("off time");
    }





    if(period==0){
      setTimeleft(endof[0]-total);
    }
    else{
      setTimeleft(endof[period-1]-total);
    }
  };

  return (
    <main className="h-screen bg-green-200">
      <header className="bg-yellow-600 p-3 text-center rounded-b-3xl mb-6 justify-center">
        <div className="bg-yellow-400 p-1.5 text-center rounded-3xl justify-center">
        <div className="flex justify-center p-2">
          <h1 className=" text-3xl font-bold rounded-3xl px-10 p-3 bg-yellow-200  ">
            MISD Time
          </h1>
        </div>
      
        <div className="flex justify-center p-2">
          <h1 className="rounded-3xl px-5 p-2 bg-yellow-200 font font-light">
            Made By Drew Ronsman
          </h1>
        </div>
        </div>
      </header>
      <body className="bg-green-200 h-screen">

        <div className="bg-blue-800 text-center p-3 rounded-3xl mb-5 container mx-auto">
          <div className="flex justify-center p-2">
            <h1 className=" text-3xl text-bold rounded-3xl px-5 p-3 bg-blue-300 font font-bold">
              Date
            </h1>
          </div>
          <h3 className="text-2xl text-bold bg-blue-200 rounded-3xl p-2 font-light">
            {date}
          </h3>
        </div>

        <div className="bg-red-800 text-center p-3 rounded-3xl mb-5 container mx-auto">
          <div className="flex justify-center p-2">
            <h1 className=" text-3xl text-bold rounded-3xl px-5 p-3 bg-red-300 font font-bold">
              Time
            </h1>
          </div>
          <h3 className="text-2xl text-bold bg-red-200 rounded-3xl p-2 font-light">
            {time}
          </h3>
        </div>

        <div className="bg-green-800 text-center p-3 rounded-3xl mb-5 container mx-auto">
          <div className="flex justify-center p-2">
            <h1 className=" text-3xl text-bold rounded-3xl px-5 p-3 bg-green-300 font font-bold">
              Period
            </h1>
          </div>
          <h3 className="text-2xl text-bold bg-green-200 rounded-3xl p-2 font-light">
            {period} 
          </h3>
        </div>
      </body>
    </main>
  );
}



export default App;
