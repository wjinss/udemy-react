import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
      // 업데이트된 남은 시간을 10 밀리초마다 업데이트하는 함수
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      {/* ref 자체를 props으로 전달할 수 있는건 리액트19부터라 가능! 그전엔 forwardRef를 사용했어야 됨 */}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            챌린지 {timerIsActive ? "멈춰!" : "시작"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "째깍째깍" : "..."}
        </p>
      </section>
    </>
  );
}

// ---------------------------------------------

// (function TimerChallenge2({ title, targetTime }) {
//   const timer2 = useRef();
//   // 타이머의 포인터를 참조로 지정(변수로 지정하지 않은 이유는 값이 바뀌면 리렌더링되어 메모리 주소값이 변경되기 때문)
//   // setTimeOut을 멈추기 위한 clearTimeOut의 매개변수로 사용
//   const [timerStarted2, setTimerStarted2] = useState(false);
//   const [timerExpired2, setTimerExpired2] = useState(false);
//   // 타이머 시작, 종료를 상태로 지정

//   function handleStart2() {
//     timer2.current = setTimeout(() => {
//       setTimerExpired2(true);
//     }, targetTime * 1000); // 참조의 타이머 포인터를 지정 및 시간이 다 지나면 종료 상태 변경(true로)

//     setTimerStarted2(true); // 함수 시작가 동시에 시작 상태 변경(true로)
//   }

//   function handleStop2() {
//     clearTimeout(timer2.current); // 함수 실행시 타이머 종료
//   }

//   return (
//     <section className="challenge">
//       <h2>{title}</h2>
//       {timerExpired2 && <p>졌어용</p>}
//       {/* 타이머 종료시 졌어용 메세지 출력 */}
//       <p className="challenge-time">{targetTime}초</p>
//       <p>
//         <button onClick={timerStarted2 ? handleStop2 : handleStart2}>
//           {/* 타이머가 시작 여부에 따라 실행되는 함수 변경   */}
//           챌린지 {timerStarted2 ? "멈춰!" : "시작"}
//           {/* 타이머가 시작 여부에 따라 메세지 변경   */}
//         </button>
//       </p>
//       <p className={timerStarted2 ? "active" : undefined}>
//         {timerStarted2 ? "째깍째깍" : "..."}
//         {/* 타이머가 시작 여부에 따라 클래스명, 메세지 변경   */}
//       </p>
//     </section>
//   );
// });

// 최신화
// ---------------------------------------------
(function TimerChallenge3({ title, targetTime }) {
  const timer3 = useRef(); // setInterval의 id를 받을 수 있게 ref로 설정
  const dialog3 = useRef(); // 모달 컴포넌트를 참조하기 위해 ref로 설정

  const [timeRemaining2, setTimeRemaining2] = useState(targetTime * 1000);
  // 남은 시간을 상태로 관리 / targetTime * 1000는 밀리초를 초로 계산

  const timerIsActive2 =
    timeRemaining2 > 0 && timeRemaining2 < targetTime * 1000;
  // 타이머가 작동 중인지 확인하는 함수
  // 남은 시간이 0보다 크고, 타겟시간(초)보다 작으면 타이머가 작동 중이다~

  if (timeRemaining2 <= 0) {
    clearInterval(timer3.current);
    dialog3.current.open();
  } // 남은 시간이 0보다 작을 때, 즉 시간이 다 흘렀을때 처리
  // 타이머(셋인터벌) 중단, 모달창 오픈

  function handleReset3() {
    setTimeRemaining2(targetTime * 1000);
  } // 리셋 함수: 남은 시간을 초기화(초 기준의 타겟타임으로 설정)

  function handleStart3() {
    timer3.current = setInterval(() => {
      setTimeRemaining2((prevTimeRemaining2) => prevTimeRemaining2 - 10);
    }, 10);
  } // 타이머 함수 : 0.01초(10밀리초) 마다 반복되며, 남은 시간 상태를 이전 시간에서 0.01초마다 뺀 값으로 최신화한다(즉 5 > 4.99 > 4.98 > 4.97 ...)

  function handleStop3() {
    dialog3.current.open();
    clearInterval(timer3.current);
  } // 정지 함수 : 모달을 열며, 타이머를 멈춤

  return (
    <>
      <ResultModal
        ref={dialog3}
        targetTime={targetTime}
        remainingTime={timeRemaining2}
        onReset={handleReset3}
        // 모달 참조, 타겟타임, 남은 시간, 리셋함수를 하위 컴포넌트로 전달
        // 참조를 하위 컴포넌트로 props로 전달하는 건 리액트19부터 가능하며, 이전 버전에선 forwardRef를 사용해 넘긴다
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive2 ? handleStop3 : handleStart3}>
            {/* 타이머가 작동 중이면 정지 함수를, 작동 전이면 타이머 함수(시작) 실행 */}
            챌린지 {timerIsActive2 ? "멈춰!" : "시작"}
          </button>
        </p>
        <p className={timerIsActive2 ? "active" : undefined}>
          {timerIsActive2 ? "째깍째깍" : "..."}
        </p>
      </section>
    </>
  );
});
