import { useState, useEffect } from "react";
import img from "../public/img.png";
import InfoCard from "../components/Infocard";

function App() {
  //example time 'December 17, 1995 09:52:00'
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [apiData, setApiData] = useState({});
  const [time, setTime] = useState("Loading...");
  const [period, setPeriod] = useState("Loading...");
  const [timeleft, setTimeleft] = useState("Loading...");
  const [selectedOption1, setSelectedOption1] = useState("Regular");
  const [selectedOption2, setSelectedOption2] = useState("Quote");
  const [meme, setMeme] = useState("Loading...");
  const [quote, setQuote] = useState("Loading...");

  const [endOf, setEndOf] = useState([]);
  const [startOf, setStartOf] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Conroe,Texas&units=imperial&appid=${process.env.REACT_APP_W_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);
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
    const endMin = [486, 537, 591, 642, 667, 697, 727, 778, 829, 880];
    const startMin = [440, 491, 542, 596, 642, 672, 702, 732, 783, 834];

    const endActMin = [481, 527, 578, 624, 709, 758, 804, 850, 880]; //need to do this
    const startActMin = [440, 486, 532, 583, 629, 717, 763, 809, 850];

    if (selectedOption1 === "Regular") {
      setEndOf(endMin);
      setStartOf(startMin);
    } else if (selectedOption1 === "Activity") {
      setEndOf(endActMin);
      setStartOf(startActMin);
    }
  }, [selectedOption1]);
  useEffect(() => {
    if (selectedOption2 === "Memes") {
      getMeme();
    } else if (selectedOption2 === "Quote") {
      getQuote();
    }
  }, [selectedOption2]);
  const getMeme = async () => {
    let rand = Math.floor(Math.random() * 23);
    const querystring = `?number=${rand}`;
    const response = await fetch(
      "https://MemeApi.neoprint777.repl.co/Memes" +
        querystring
    );
    // update the state
    setMeme(response);
  };

  const getQuote = async () => {
    const response = await (await fetch("https://type.fit/api/quotes")).json();
    // update the state
    setQuote(response[Math.floor(Math.random() * response.length)]);
  };

  const checktime = () => {
    //gets period

    let total = new Date().getHours() * 60 + new Date().getMinutes();
    if (total >= startOf[0] && total <= endOf[9]) {
      if (total >= startOf[0] && total <= endOf[0]) {
        setPeriod(1);
      } else if (total >= startOf[1] && total <= endOf[1]) {
        setPeriod(2);
      } else if (total >= startOf[2] && total <= endOf[2]) {
        setPeriod(3);
      } else if (total >= startOf[3] && total <= endOf[3]) {
        setPeriod(4);
      } else if (total >= startOf[4] && total <= endOf[4]) {
        setPeriod("A Lunch");
      } else if (total >= startOf[5] && total <= endOf[5]) {
        setPeriod("B Lunch");
      } else if (total >= startOf[6] && total <= endOf[6]) {
        setPeriod("C Lunch");
      } else if (total >= startOf[7] && total <= endOf[7]) {
        setPeriod(6);
      } else if (total >= startOf[8] && total <= endOf[8]) {
        setPeriod(7);
      } else if (total >= startOf[9] && total <= endOf[9]) {
        setPeriod(8);
      } else if (startOf.length === 10 && endOf.length === 10) {
        if (total >= startOf[11] && total <= endOf[11]) {
          setPeriod("Activity");
        }
      } else {
        setPeriod("In between bells");
      }
    }
    //time left
    if (total >= startOf[0] && total <= endOf[9]) {
      if (period === 1) {
        setTimeleft(`${endOf[0] - total} min`);
      } else if (period !== "In between bells") {
        if (period >= 6) {
          setTimeleft(`${endOf[period + 1] - total} min`);
        } else if (period == "Loading...") {
          setTimeleft(`Eat up`);
        }
        else {
          setTimeleft(`You made it on time`);
        }
      } else {
        setTimeleft("You made it on time");
      }
    }
  };
  return (
      <div className="blue ">
        <div className="border-full yellow px-2 pb-3 rounded-3xl text-md font-light">
          <div className="flex justify-center ">
            <h5
              className={`px-32 text-center text-3xl font-bold bg-white rounded-3xl p-3 mt-5 `}
            >
              Lake Creek
            </h5>
          </div>
          <div className="flex justify-center mt-3">
            <select
              className={`rounded-3xl p-2 bg-white mr-3`}
              value={selectedOption1}
              onChange={(e) => setSelectedOption1(e.target.value)}
            >
              <option value="Regular">Regular</option>
              <option value="Activity">Activity</option>
            </select>
            <select
              className={`rounded-3xl p-2 bg-white mr-3`}
              value={selectedOption2}
              onChange={(e) => setSelectedOption2(e.target.value)}
            >
              <option value="Quote">Quote</option>
              <option value="Memes">Memes</option>
            </select>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundSize: "350px",
          }}
          alt="lake"
          className={`mt-4`}
        >
          <div
            className={`justify-evenly grid gap-x-5 gap-y-4 grid-cols-3 place-items-center mt-3`}
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
            {selectedOption2 === "Quote" ? (
              <InfoCard
                title={`Quote`}
                text={`"${quote.text}" -${quote.author || "unknown"}`}
                size="text-xs"
              />
            ) : (
              <InfoCard title="Memes" image={`${meme.url}`} />
            )}
            <InfoCard title={`Class Ends`} text={timeleft} />
          </div>
        </div>
      <footer className='flex justify-evenly mt-3 yellow p-2 border-top rounded-t-3xl'>
        <h5 className="bg-white rounded-2xl px-5">Made by NeoPrint3D</h5>
      </footer>
      </div>
  );
}




export default App;
