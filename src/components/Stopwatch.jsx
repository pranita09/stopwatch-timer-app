import { useEffect, useState } from "react";

function Stopwatch() {
    const [timerOn, setTimerOn] = useState(false);
    const [millisecs, setMillisecs] = useState(0);
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0);
    const [timeStamp, setTimeStamp] = useState([]);

    useEffect(()=>{
        let interval = null;
        
        if(timerOn){
            interval = setInterval(()=>{
                if(millisecs === 1000){
                    setSeconds(seconds + 1);
                    setMillisecs(0);
                }else{
                    setMillisecs(millisecs + 10);
                }
                if(seconds === 60){
                    setMinutes(minutes + 1)
                    setSeconds(0)
                }
            }, 10)
        } else {
            clearInterval(interval);
        }

        return ()=> clearInterval(interval)

    },[timerOn, millisecs, seconds, minutes])

    const handleStartStopBtn = () =>{
        setTimerOn(!timerOn);
    }

    const handleResetBtn = () =>{
        setTimerOn(false);
        setMillisecs(0);
        setSeconds(0);
        setMinutes(0);
    }

    const handleTimestampBtn = () =>{
        setTimeStamp([...timeStamp, { millisecs: millisecs, seconds: seconds, minutes: minutes}]);
    }


    return (
        <div>
            <h1>{minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds} : {(millisecs/10) < 10 ? '0' + (millisecs/10) : (millisecs/10)}</h1>
            <div>
                <button onClick={()=> handleStartStopBtn()}>{timerOn ? 'Stop' : 'Start'}</button>
                <button onClick={()=> handleResetBtn()}>Reset</button>
                <button onClick={()=> handleTimestampBtn()}>Timestamp</button>
            </div>
            <div>
                {timeStamp?.map(({millisecs, seconds, minutes}, index)=>(
                    <li key={index}>{minutes} : {seconds} : {millisecs}</li>
                ))}
            </div>
        </div>
    )
}

export default Stopwatch;