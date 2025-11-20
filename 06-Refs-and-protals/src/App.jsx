import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="쉬움" targetTime={1} />
        <TimerChallenge title="중간" targetTime={5} />
        <TimerChallenge title="어려움" targetTime={10} />
        <TimerChallenge title="매우 어려움" targetTime={15} />
      </div>
    </>
  );
}

export default App;
