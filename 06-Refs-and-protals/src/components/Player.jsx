import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlaterName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  // function handelChange(e) {
  //   setSubmitted(false);
  //   setEnteredPlaterName(e.target.value);
  // }

  function handelClick() {
    setEnteredPlaterName(playerName.current.value);
    // useRef로 받는 참조는 항상 js객체이며, current로 접근해야된다.
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          type="text"
          ref={playerName}
          // onChange={handelChange}
          // value={enteredPlayerName}
        />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}

// ---------------------------------------------
(function Player2() {
  const playerName2 = useRef();
  // 인풋을 참조값으로 설정
  const [enteredPlayerName2, setEnteredPlayerName2] = useState(null);
  // 입력된 사용자 이름을 상태로 지정

  function handleClick2() {
    setEnteredPlayerName2(playerName2.current.value);
    // 클릭하면 사용자 이름을 인풋의 현재 값으로 변경하는 함수
  }

  return (
    <section>
      <h2>환영합니다 {enteredPlayerName2 ?? "익명의 사용자"}</h2>
      {/* 입력된 사용자 값이 있으면(true)면 보여주고 없으면(false) '익명의 사용자' 표시 */}
      <p>
        <input type="text" ref={playerName2} />
        {/* 인풋을 참조로 지정 */}
        <button type="button" onClick={handleClick2}>
          이름 설정
        </button>
        {/* 클릭시 handleClick2 함수 실행 */}
      </p>
    </section>
  );
});
