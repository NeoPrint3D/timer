import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  let dt = new Date();
  let [time,setTime] = useState(dt.toLocaleTimeString());
  let period = 1;
 
  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000 * period);
    return () => clearInterval(interval);
  }, []);
    if (time === "7:20:00") {
    period=1;
  }
  switch (time) {
    case "7:20:00":
      period = 1;
      break;
    case "8:11:00":
      period = 2;
      break;
    case "9:02:00":
      period = 3;
      break;
    case "9:56:00":
      period = 4;
      break;
    case "10:47:00":
      period = 5;
      break;
    case "12:12:00":
      period = 6;
      break;
    case "1:03:00":
      period = 7;
      break;
    case "1:54:00":
      period = 8;
      break;
    case "2:45:00":
      period="schools out!"
      break;
    default:
  }




  return (
    <div className="bg-green-200 h-screen">
      <header className=" bg-yellow-400 p-6 text-center rounded-xl mb-6">
        <h1 className="text-2xl font-bold bg-yellow-200 p-2 rounded-2xl">
          Timer App
        </h1>
      </header>
      <div className="items-center">
        <div className="bg-blue-800 text-center p-5 rounded-3xl mb-5">
          <div className="flex justify-center p-2">
            <h1 className=" flex-initial text-3xl text-bold rounded-3xl px-5 p-3 bg-purple-300">
              Date
            </h1>
          </div>
          <h3 className="text-2xl text-bold bg-indigo-200 rounded-3xl p-2">
            {dt.getMonth()}/{dt.getDate()}/{dt.getFullYear()}
          </h3>
        </div>


        <div className="bg-red-800 text-center p-5 rounded-3xl mb-5" >
          <div className="flex justify-center p-2">
            <h1 className=" flex-initial text-3xl text-bold rounded-3xl px-5 p-3 bg-red-300">
              Time
            </h1>
          </div>
          <h3 className="text-2xl text-bold bg-red-200 rounded-3xl p-2">
            {time}
          </h3>
        </div>











        <div className="bg-green-800 text-center p-5 rounded-3xl">
          <div className="flex justify-center p-2">
            <h1 className=" flex-initial text-3xl text-bold rounded-3xl px-5 p-3 bg-green-300">
              Period
            </h1>
          </div>
          <h3 className="text-2xl text-bold bg-green-200 rounded-3xl p-2">
            {period}
          </h3>
        </div>






      </div>













    </div>




  );
}

export default App;
