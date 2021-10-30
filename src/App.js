import "./App.css";
import React, { useState, useEffect } from "react";
import firebaseConfig from "./config";
import firebase from "firebase/compat";
import { getAnalytics } from "firebase/analytics";

const app = firebase.initializeApp(firebaseConfig);
const anylitics = getAnalytics(app);

function App() {
  let dt = new Date();
  const [time, setTime] = useState(0);
  let [period, setPeriod] = useState(0);
  let [size, setSize] = useState(0);

  const top = "flex justify-center p-2";

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
  };

const makeBigger = () => {
  setSize(size + 10);
  console.log(size);
  console.log(`p-${size}`);
};







  return (
    <main className="bg-green-200 h-screen">
      <header className="bg-yellow-400 p-3 text-center rounded-b-3xl mb-6">
        <h1 className="text-3xl font-bold bg-yellow-200 p-3 rounded-2xl mb-3">
          Timer App
        </h1>
        <div className="flex text-center justify-center ">
          <button onclick={()=>makeBigger} className= {`flex-initial bg-yellow-200 rounded-2xl p-${size} font-bold hover:bg-red-800`}>
            made by Drew
          </button>
        </div>
      </header>
      <body>
        <div className="flex justify-center">
          <div className="bg-blue-800 text-center p-3 x-5 rounded-3xl mb-5 w-64 ">
            <div className=" justify-center p-2">
              <h1 className="text-3xl text-bold rounded-3xl px-5 p-3 bg-purple-300 font-bold">
                Date
              </h1>
            </div>
            <h3 className="text-2xl text-bold bg-indigo-200 rounded-3xl p-2 font-light ">
              {dt.getMonth()}/{dt.getDate()}/{dt.getFullYear()}
            </h3>
          </div>
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

        <div className="bg-green-800 text-center p-3 rounded-3xl bg-transparent">
          <div className="flex justify-center p-2">
            <h1 className="  text-3xl text-bold rounded-3xl px-5 p-3 bg-green-300 font-bold">
              Period
            </h1>
          </div>
          <h3 className="text-2xl text-bold  bg-green-200 rounded-3xl p-2 font-light">
            {period}
          </h3>
        </div>
      </body>
    </main>
  );
}








export default App;
