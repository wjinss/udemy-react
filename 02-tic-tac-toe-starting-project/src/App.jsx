import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={"player 1"} symbol={"✅"} />
          <Player name={"player 2"} symbol={"❌"} />
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
