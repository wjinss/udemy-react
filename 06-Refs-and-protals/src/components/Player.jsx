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
