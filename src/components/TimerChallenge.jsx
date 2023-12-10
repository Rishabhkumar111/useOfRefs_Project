import { useRef, useState } from "react"

export default function TimerChallenge({title, targetTime}){
    let timerPointer = useRef();
    const [buttonText, setbuttonText] = useState(false);
    const [isLose, setisLose] = useState(false);

    function handleStart(){
        console.log('start hua');
        setbuttonText(true);
        timerPointer.current = setTimeout(()=>{
            handleStop();
            setisLose(true);
        },1000*targetTime);
    }
    function handleStop(){
        console.log('stop hua');
        clearTimeout(timerPointer.current);
    }
    return <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime>1 ? 's':''}
        </p>
        {
            isLose && <p>You lost</p>
        }
        <p>
            <button onClick={buttonText ? handleStop : handleStart}>
                {buttonText ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className="">
            Time is running...
        </p>
    </section>
}