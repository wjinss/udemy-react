import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  function handleStart() {
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handelStop() {}
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>졌어용</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button type="button" onClick={handleStart}>
          챌린지 {timerStarted ? "멈춰!" : "시작"}
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "째깍째깍" : "..."}
      </p>
    </section>
  );
}
