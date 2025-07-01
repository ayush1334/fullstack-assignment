import { useEffect, useState } from "react";
import axios from "axios";
import ShowTimer from "./show-timer";
import dayjs from "dayjs";

function App() {
  const [timer, setTimer] = useState(100);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    getTimer();
  }, []);

  const updateTimer = async () => {
    try {
      const res = await axios({
        url: "http://localhost:3000/update-timer",
        method: "POST",
        params:{
          updatedTimer: timer,
          updatedAt: new Date()
        }
      });
      const { data } = res;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTimer = async () => {
    try {
      const res = await axios({
        url: "http://localhost:3000/get-timer",
        method: "GET",
      });
      const { data } = res;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (timer > 0) {
      handlTimer();
    }
  }, [timer]);

  const handlTimer = () => {
    if (timer <= 0) {
      return;
    }
    setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
  };

  return (
    <>
      <div className="">Start a timer</div>
      {showInput ? (
        <input
          className="border border-amber-800"
          type="time"
          value={dayjs.unix(timer).format("HH:mm:ss")}
          onChange={(e) => setTimer(dayjs(e.target.value).unix())}
        />
      ) : (
        <ShowTimer time={timer} />
      )}
      <div>
        <button onClick={() => setTimer(0)}>reset</button>
        <button onClick={() => setShowInput(!showInput)}>
          {!showInput ? "update" : "cancel"}
        </button>
      </div>
    </>
  );
}

export default App;
