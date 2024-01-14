import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  let timerPointer = useRef();
  let dialog = useRef();

  const [remainingTime, setremainingTime] = useState(targetTime * 1000);
  const timerActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  if (remainingTime <= 0) {
    clearInterval(timerPointer.current);
    dialog.current.open();
  }

  function handleReset() {
    setremainingTime(targetTime * 1000);
  }

  function handleStart() {
    timerPointer.current = setInterval(() => {
      setremainingTime((pre) => pre - 10);
    }, 10);
  }
  function handleStop() {
    clearInterval(timerPointer.current);
    dialog.current.open();
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={remainingTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleStart}>
            {timerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerActive ? "active" : undefined}>Time is running...</p>
      </section>
    </>
  );
}
