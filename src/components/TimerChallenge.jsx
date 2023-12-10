import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  let timerPointer = useRef();
  let dialog = useRef();

  const [buttonText, setbuttonText] = useState(false);
  const [isLose, setisLose] = useState(false);

  function handleStart() {
    console.log("start hua");
    setbuttonText(true);
    timerPointer.current = setTimeout(() => {
      handleStop();
      dialog.current.open();
      setisLose(true);
    }, 1000 * targetTime);
  }
  function handleStop() {
    console.log("stop hua");
    clearTimeout(timerPointer.current);
  }
  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={buttonText ? handleStop : handleStart}>
            {buttonText ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className="">Time is running...</p>
      </section>
    </>
  );
}
