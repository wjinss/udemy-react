import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlaterName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handelChange(e) {
    setSubmitted(false);
    setEnteredPlaterName(e.target.value);
  }

  function handelClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handelChange} value={enteredPlayerName} />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
