import "./App.css";
import React, { useState, useEffect } from "react";
import firebaseConfig from "./config";
import firebase from "firebase/compat";
import { getAnalytics } from "firebase/analytics";

const app=firebase.initializeApp(firebaseConfig);
const anylitics=getAnalytics(app);


function App() {
  let dt = new Date();
  const [time,setTime] = useState(0);
  let [period,setPeriod] = useState(0);


 
  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(time)
    checktime()
  }, [time]);

  const checktime=()=>{
    let t=new Date();
    let minutes=t.getMinutes();
    if(dt.getMinutes()<10){
      minutes="0"+minutes;
    }


    let total=(t.getHours()+""+minutes)
    console.log(total)
    if(total>=720 && total<=806){
      setPeriod(1)
    }
    else if(total>=806 && total<=857){
      setPeriod(2)
    }
    else if(total>=902 && total<=951){
      setPeriod(3)
    }
    else if(total>=956 && total<=1042){
      setPeriod(4)
    }
    else if(total>=1047 && total<=1207){
      setPeriod(5)
    }
    else if(total>=1212 && total<=1258){
      setPeriod(6)
    }
    else if(total>=1303 && total<=1349){
      setPeriod(7)
    }
    else if(total>=1354 && total<=1440){
      setPeriod(8)
    }
    else if(total>=1445){
      setPeriod("school is done")
    }
   
    


    
    
  }
        




   

  return (

    
    <div className="bg-green-200 h-screen">






      <header className="bg-yellow-400 p-3 text-center rounded-xl mb-6">
     
        <h1 className="text-3xl font-bold bg-yellow-200 p-3 rounded-2xl mb-3">
          Timer App
        </h1>
        <div className="flex text-center justify-center ">
          <h5 className="flex-initial bg-yellow-200 rounded-2xl p-2.5 font-bold" >made by Drew</h5>
        </div>
      </header>
      <div className="items-center">
        <div className="bg-blue-800 text-center p-3 rounded-3xl mb-5">
          <div className="flex justify-center p-2">
            <h1 className=" flex-initial text-3xl text-bold rounded-3xl px-5 p-3 bg-purple-300">
              Date
            </h1>
          </div>
          <h3 className="text-2xl text-bold bg-indigo-200 rounded-3xl p-2" >
            {dt.getMonth()}/{dt.getDate()}/{dt.getFullYear()}
          </h3>
        </div>


        <div className="bg-red-800 text-center p-3 rounded-3xl mb-5" >
          <div className="flex justify-center p-2">
            <h1 className=" flex-initial text-3xl text-bold rounded-3xl px-5 p-3 bg-red-300" >
              Time
            </h1>
          </div>
          <h3 className="text-2xl text-bold bg-red-200 rounded-3xl p-2" >
            {time}   
          </h3>
        </div>



        <div className="bg-green-800 text-center p-3 rounded-3xl">
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
