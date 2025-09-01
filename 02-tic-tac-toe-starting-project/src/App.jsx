import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName={"player 1"} symbol={"✅"} />
          <Player initialName={"player 2"} symbol={"❌"} />
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
