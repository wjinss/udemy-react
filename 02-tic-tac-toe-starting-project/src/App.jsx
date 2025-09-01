import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName={"player 1"} symbol={"✅"} />
          <Player initialName={"player 2"} symbol={"❌"} />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
