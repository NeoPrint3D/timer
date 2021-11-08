import { useState, useEffect } from "react";
import firebaseConfig from "./config";
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import InfoCard from "./components/InfoCards";
const app = firebase.initializeApp(firebaseConfig);
getAnalytics(app);
function App() {
  const dt = new Date(); //example time 'December 17, 1995 09:52:00'
  const [date, setDate] = useState(dt.toLocaleDateString());
  const [apiData, setApiData] = useState({});
  const [time, setTime] = useState("Loading...");
  const [period, setPeriod] = useState("Loading...");
  const [timeleft, setTimeleft] = useState("Loading...");
  const [selectedOption, setSelectedOption] = useState("Regular");

  const [endOf, setEndOf] = useState([]);
  const [startOf, setStartOf] = useState([]);

  const apiKey = process.env.REACT_APP_W_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Conroe,Texas&units=imperial&appid=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);
  useEffect(() => {
    setDate(dt.toLocaleDateString());
    let interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    checktime();
    // eslint-disable-next-line
  }, [time]);
  useEffect(() => {
    const endMin = [486, 537, 591, 642, 727, 778, 829, 880];
    const startMin = [440, 491, 542, 596, 647, 732, 783, 834];
    const endActMin = [481, 527, 578, 624, 709, 758, 804, 850, 880];
    const startActMin = [440, 486, 532, 583, 629, 717, 763, 809, 850];

    if (selectedOption === "Regular") {
      setEndOf(endMin);
      setStartOf(startMin);
    } else if (selectedOption === "Activity") {
      setEndOf(endActMin);
      setStartOf(startActMin);
    }
  }, [selectedOption]);
  const checktime = () => {
    //gets period

    let total = dt.getHours() * 60 + dt.getMinutes();

    if (total >= startOf[0] && total <= endOf[7]) {
      if (total >= startOf[0] && total <= endOf[0]) {
        setPeriod(1);
      } else if (total >= startOf[1] && total <= endOf[1]) {
        setPeriod(2);
      } else if (total >= startOf[2] && total <= endOf[2]) {
        setPeriod(3);
      } else if (total >= startOf[3] && total <= endOf[3]) {
        setPeriod(4);
      } else if (total >= startOf[4] && total <= endOf[4]) {
        setPeriod(5);
      } else if (total >= startOf[5] && total <= endOf[5]) {
        setPeriod(6);
      } else if (total >= startOf[6] && total <= endOf[6]) {
        setPeriod(7);
      } else if (total >= startOf[7] && total <= endOf[7]) {
        setPeriod(8);
      } else if (startOf.length === 9 && endOf.length === 9) {
        if (total >= startOf[8] && total <= endOf[8]) {
          setPeriod("Activity");
        }
      } else {
        setPeriod("In between bells");
      }
    }
    //time left
    if (total >= startOf[0] && total <= endOf[7]) {
      if (period === 1) {
        setTimeleft(`${endOf[0] - total} min`);
      } else if (period !== "In between bells") {
        setTimeleft(`${endOf[period - 1] - total} min`);
      } else {
        setTimeleft("You made it on time");
      }
    }
  };
  return (
    <div className="bg-green-200 h-screen">
      <header>
        <div className={`bg-yellow-400 p-1 text-center rounded-b-3xl mb-5`}>
          <div className={` rounded-3xl px-5 p-2 bg-yellow-200 mt-3`}>
            <h4 className={` text-3xl font-bold`}>MISD Time</h4>
          </div>
          <div className={`flex justify-center p-2`}>
            <select
              className={`rounded-3xl px-5 p-2 bg-yellow-200 font font-light`}
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Regular">Regular</option>
              <option value="Activity">Activity</option>
            </select>
            <h5
              className={`rounded-3xl px-5 p-2 bg-yellow-200 font font-light mx-3`}
            >
              Made By Drew
            </h5>
          </div>
        </div>
      </header>
      <div className={`items-center`}>
        <div className={`justify-evenly flex place-items-center`}>
          <InfoCard color={`blue`} title={`Date`} text={`${date}`} />
          <InfoCard color={`red`} title={`Time`} text={time} />
          <InfoCard color={`green`} title={`Period`} text={period} />
        </div>
        <div className={`justify-evenly flex place-items-center gri`}>
          <InfoCard
            color={`purple`}
            title={`Weather`}
            text={
              apiData.main ? `${Math.round(apiData.main.temp)} °F` : `loading`
            }
            image={
              apiData.weather
                ? `http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`
                : 0
            }
          />
          <InfoCard color={`pink`} title={`Ends in`} text={timeleft} />
        </div>
      </div>
    </div>
  );
}

export default App;
