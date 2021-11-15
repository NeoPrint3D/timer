import { useState, useEffect } from "react";
import firebaseConfig from "./config";
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import "./App.css";
import img from "./img.png";
const app = firebase.initializeApp(firebaseConfig);
getAnalytics(app);
function App() {
  //example time 'December 17, 1995 09:52:00'
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [apiData, setApiData] = useState({});
  const [time, setTime] = useState("Loading...");
  const [period, setPeriod] = useState("Loading...");
  const [timeleft, setTimeleft] = useState("Loading...");
  const [selectedOption, setSelectedOption] = useState("Regular");
  const [quote, setQuote] = useState("Loading...");

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
    setDate(new Date().toLocaleDateString());
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
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[Math.floor(Math.random() * data.length)]);
      });
  }, []);

  const checktime = () => {
    //gets period

    let total = new Date().getHours() * 60 + new Date().getMinutes();

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
    <div className="blue">
      <header className="border-white yellow px-2 pb-3 rounded-b-3xl mb-5 text-md font-light">
        <h5
          className={`text-center text-3xl font-bold bg-white rounded-3xl p-3 mt-3 `}
        >
          Lake Creek
        </h5>
        <div className="flex justify-center mt-3">
          <select
            className={`rounded-3xl px-5 p-2 bg-white mr-3`}
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Regular">Regular</option>
            <option value="Activity">Activity</option>
          </select>
          <h3 className={`bg-white rounded-3xl p-2`}>Made by Drew Ronsman</h3>
        </div>
      </header>
      <div
        style={{ backgroundImage: `url${img}` }}
        alt="lake"
        className={`h-screen `}
      >
        <div
          className={`justify-evenly grid gap-x-5 gap-y-4 grid-cols-3 place-items-center`}
        >
          <InfoCard title={`Time`} text={time} />
          <InfoCard
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
          <InfoCard title={`Date`} text={date} />
          <InfoCard title={`Period`} text={period} />
          <InfoCard
            title={`Quote`}
            text={`${quote.text} -${quote.author || "unknown"}`}
            size="text-sm"
          />
          <InfoCard title={`Ends in`} text={timeleft} />
        </div>
      </div>
    </div>
  );
}

function InfoCard(props) {
  let { title, text, image, size } = props;
  size = size || "text-xl";
  return (
    <div
      className={`yellow text-center p-2 sm:p-2 lg:p-3 rounded-2xl  mx-auto transparent  border-white`}
    >
      <div className="flex justify-center p-2 ">
        <h1
          className={`bg-white sm:text-2xl text-bold rounded-2xl  px-3 sm:px-10 lg:px-24  p-1  md:px-14 font font-bold text-sm not-transparent`}
        >
          {title}
        </h1>
      </div>
      <div className="flex justify-evenly">
        <div className="flex place-items-center">
          <h3
            className={`bg-white sm:${size} text-xs  rounded-3xl lg:px-10 p-1 sm:p-3 px-3 font-light text-justify`}
          >
            {text}
          </h3>
          {image ? (
            <img
              className={`bg-white p-0.5 rounded-full w-8 h-8 sm:w-16 sm:h-16 ml-5`}
              src={image}
              alt=""
            ></img>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
