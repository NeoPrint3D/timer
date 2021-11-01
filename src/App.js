import "./App.css";
import React, { useState, useEffect } from "react";
import firebaseConfig from "./config";
import firebase from "firebase/compat";
import { getAnalytics } from "firebase/analytics";

const app = firebase.initializeApp(firebaseConfig);
getAnalytics(app);

function App() {
  let dt = new Date(); //example time 'December 17, 1995 09:52:00'
  const [time, setTime] = useState(0);
  let [period, setPeriod] = useState(0);
  let [timeleft, setTimeleft] = useState(0);
  const endof = [806, 857, 951, 1042, 1207, 1258, 1349, 1440];
  let date = `${dt.getMonth() + 1}/${dt.getDay()}/${dt.getFullYear()}`;

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(dt.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    checktime();
  }, [time]);

  const checktime = () => {

    console.log('hi')
    let minutes = dt.getMinutes();
    if (dt.getMinutes() < 10) {
      minutes = "0" + minutes;
    }
    //gets period
    let total = dt.getHours() + "" + minutes;
    console.log(total);
    if (total >= 720 && total <= 1440) {
      if (total >= 720 && total <= 806) {
        setPeriod(1);
      }
      if (total >= 806 && total <= 857) {
        setPeriod(2);
      }
      if (total >= 902 && total <= 951) {
        setPeriod(3);
      }
      if (total >= 956 && total <= 1042) {
        setPeriod(4);
      }
      if (total >= 1047 && total <= 1207) {
        setPeriod(5);
      }
      if (total >= 1212 && total <= 1258) {
        setPeriod(6);
      }
      if (total >= 1303 && total <= 1349) {
        setPeriod(7);
      }
      if (total >= 1354 && total <= 1440) {
        setPeriod(8);
      } else {
        setPeriod("In Between bells");
      }
    } else {
      setPeriod("Out of School");
    }
      //time left
    if (total >= 720 && total <= 1440) {
      if (period == 0) {
        setTimeleft(`${endof[0] - total} min`);
      } else if (period !=='In Between bells') {
        setTimeleft(`${endof[period- 1] - total}`);
      }
      else {
        setTimeleft("You're here in time");
      }
    } else {
      setTimeleft("School is done");
    }
  };

  return (
    <main className={`h-screen bg-blue-200`}>
      <header className="bg-yellow-600 p-3 text-center rounded-b-3xl mb-6 justify-center">
        <div className="bg-yellow-400 p-1.5 text-center rounded-3xl justify-center">
          <div className="flex justify-center p-2">
            <button className=" text-3xl font-bold rounded-3xl px-10 p-3 bg-yellow-200" onClick={checktime}>
              MISD Time
            </button>
          </div>
          <div className="flex justify-center p-2">
            <h1 className="rounded-3xl px-5 p-2 bg-yellow-200 font font-light">
              Made By Drew Ronsman
            </h1>
          </div>
        </div>
      </header>
      <body className="bg-green-200 h-screen">
        <div className="justify-evenly flex">
          <InfoCard color="blue" title="Date" text={date} />
          <InfoCard color="red" title="Time" text={time} />
        </div>
        <div className="justify-evenly flex">
          <InfoCard color="green" title="Period" text={period} />
          <InfoCard color="pink" title="Time Left" text={timeleft} />
        </div>
      </body>
    </main>
  );
}

function InfoCard(props) {
  const {color, title, text} = props;
  return (
    <div className={`p-3 lg:p-5 bg-${color}-800 rounded-3xl mb-5`}>
      <div
        className={`bg-${color}-600 text-center p-3 lg:p-5 rounded-2xl  mx-auto`}
      >
        <div className="flex justify-center p-2">
          <h1
            className={`text-2xl text-bold rounded-2xl  px-10 md:px-10 p-2 bg-${color}-300 font font-bold`}
          >
            {title}
          </h1>
        </div>
        <div className="flex justify-center">
          <h3
            className={`text-xl text-bold bg-${color}-200 rounded-3xl lg:px-32 p-3 font-light`}
          >
            {text}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
