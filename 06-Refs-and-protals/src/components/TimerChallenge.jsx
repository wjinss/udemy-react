import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>졌어용</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button type="button" onClick={timerStarted ? handleStop : handleStart}>
          챌린지 {timerStarted ? "멈춰!" : "시작"}
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "째깍째깍" : "..."}
      </p>
    </section>
  );
}

// ---------------------------------------------

(function TimerChallenge2({ title, targetTime }) {
  const timer2 = useRef();
  // 타이머의 포인터를 참조로 지정(변수로 지정하지 않은 이유는 값이 바뀌면 리렌더링되어 메모리 주소값이 변경되기 때문)
  // setTimeOut을 멈추기 위한 clearTimeOut의 매개변수로 사용
  const [timerStarted2, setTimerStarted2] = useState(false);
  const [timerExpired2, setTimerExpired2] = useState(false);
  // 타이머 시작, 종료를 상태로 지정

  function handleStart2() {
    timer2.current = setTimeout(() => {
      setTimerExpired2(true);
    }, targetTime * 1000); // 참조의 타이머 포인터를 지정 및 시간이 다 지나면 종료 상태 변경(true로)

    setTimerStarted2(true); // 함수 시작가 동시에 시작 상태 변경(true로)
  }

  function handleStop2() {
    clearTimeout(timer2.current); // 함수 실행시 타이머 종료
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired2 && <p>졌어용</p>}
      {/* 타이머 종료시 졌어용 메세지 출력 */}
      <p className="challenge-time">{targetTime}초</p>
      <p>
        <button onClick={timerStarted2 ? handleStop2 : handleStart2}>
          {/* 타이머가 시작 여부에 따라 실행되는 함수 변경   */}
          챌린지 {timerStarted2 ? "멈춰!" : "시작"}
          {/* 타이머가 시작 여부에 따라 메세지 변경   */}
        </button>
      </p>
      <p className={timerStarted2 ? "active" : undefined}>
        {timerStarted2 ? "째깍째깍" : "..."}
        {/* 타이머가 시작 여부에 따라 클래스명, 메세지 변경   */}
      </p>
    </section>
  );
});
