import { useState, useEffect } from "react";
import firebaseConfig from "./config";
import firebase from "firebase/compat/app";
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
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    checktime();
    // eslint-disable-next-line
  }, [time]);

  const checktime = () => {
    //gets period
    let total =
      dt.getHours() +
      "" +
      (dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes());
    console.log(total);
    if (total >= 720 && total <= 1440) {
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
        setPeriod("In between bells");
      }
    }
    //time left
    if (total >= 720 && total <= 1440) {
      if (period === 0) {
        setTimeleft(`${endof[0] - total} min`);
      } else if (period !== "In between bells") {
        setTimeleft(`${endof[period - 1] - total} min`);
      } else {
        setTimeleft("You made it on timer");
      }
    }
  };

  return (
    <div className="bg-green-300 h-screen bg-scroll">
      <header className="bg-yellow-600 p-3 text-center rounded-b-3xl mb-6 justify-center">
        <div className="bg-yellow-400 p-1.5 text-center rounded-3xl justify-center">
          <button
            className=" text-3xl font-bold rounded-3xl px-10 p-3 bg-yellow-200 mt-3"
            onClick={checktime}
          >
            MISD Time
          </button>

          <div className="flex justify-center p-2">
            <h1 className="rounded-3xl px-5 p-2 bg-yellow-200 font font-light">
              Made By Drew Ronsman
            </h1>
          </div>
        </div>
      </header>

      <div>

        <div className="justify-evenly flex">

        <div className={`p-3 lg:p-5 bg-red-800 rounded-3xl mb-5`}>
      <div
        className={`bg-red-600 text-center p-3 lg:p-5 rounded-2xl  mx-auto`}
      >
        <div className="flex justify-center p-2">
          <div className={`bg-red-100 p-1 rounded-2xl`}>
            <h1
              className={`text-2xl text-bold rounded-2xl  px-10 lg:px-24 p-2 bg-red-300 font font-bold`}
            >
              Date 
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <h3
            className={`text-xl text-bold bg-red-200 rounded-3xl lg:px-10 p-3 px-4 font-light`}
          >
            {date}
          </h3>
        </div>
      </div>
    </div>

          <div className={`p-3 lg:p-5 bg-blue-800 rounded-3xl mb-5`}>
            <div
              className={`bg-blue-600 text-center p-3 lg:p-5 rounded-2xl  mx-auto`}
            >
              <div className="flex justify-center p-2">
                <div className={`bg-blue-100 p-1 rounded-2xl`}>
                  <h1
                    className={`text-2xl text-bold rounded-2xl  px-10 lg:px-24 p-2 bg-blue-300 font font-bold`}
                  >
                  Time
                  </h1>
                </div>
              </div>
              <div className="flex justify-center">
                <h3
                  className={`text-xl text-bold bg-blue-200 rounded-3xl lg:px-10 p-3 px-4 font-light`}
                >
                  {time}
                </h3>
              </div>
            </div>
          </div>

      
        </div>

        <div className="justify-evenly flex">

        <div className={`p-3 lg:p-5 bg-green-800 rounded-3xl mb-5`}>
      <div
        className={`bg-green-600 text-center p-3 lg:p-5 rounded-2xl  mx-auto`}
      >
        <div className="flex justify-center p-2">
          <div className={`bg-green-100 p-1 rounded-2xl`}>
            <h1
              className={`text-2xl text-bold rounded-2xl  px-10 lg:px-24 p-2 bg-green-300 font font-bold`}
            >
              Period
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <h3
            className={`text-xl text-bold bg-green-200 rounded-3xl lg:px-10 p-3 px-4 font-light`}
          >
            {period}
          </h3>
        </div>
      </div>
        </div>

        <div className={`p-3 lg:p-5 bg-purple-800 rounded-3xl mb-5`}>
        <div
        className={`bg-purple-600 text-center p-3 lg:p-5 rounded-2xl  mx-auto`}
      >
        <div className="flex justify-center p-2">
          <div className={`bg-purple-100 p-1 rounded-2xl`}>
            <h1
              className={`text-2xl text-bold rounded-2xl  px-10 lg:px-24 p-2 bg-purple-300 font font-bold`}
            >
              Time Left
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <h3
            className={`text-xl text-bold bg-purple-200 rounded-3xl lg:px-10 p-3 px-4 font-light`}
          >
            {timeleft}
          </h3>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}



export default App;
