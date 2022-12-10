import { useEffect, useState } from "react";
import { useQueue } from "../../../hooks/useQueue";
import "./style.scss"



export function Timer() {
  const [timer, setTimer] = useState<number>(200);
  const { CallPatient, automaticTimePaused } = useQueue();

  useEffect(() => {
    const timeEvent = setInterval(() => {
      if (!automaticTimePaused) {
        setTimer(timer-1);
        
        if (timer == 0) {
          CallPatient();
          setTimer(200);
        }
      }
      
    }, 1000);
    return () => clearInterval(timeEvent);
  });

  return (
    <span id="timer">
      {
        !automaticTimePaused
        ? <> Nova chamada em <span className="time">{timer}</span> segundos </>
        : "Chamada automática pausada"
      }
    </span>
  );
}