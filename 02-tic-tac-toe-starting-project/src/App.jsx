import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("✅");

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "✅" ? "❌" : "✅"
    );
    setGameTurns((prevTurns) => {
      let currentPlayer = "✅";

      if (prevTurns.length > 0 && prevTurns[0].player === "✅") {
        currentPlayer = "❌";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={"player 1"}
            symbol={"✅"}
            isActive={activePlayer === "✅"}
          />
          <Player
            initialName={"player 2"}
            symbol={"❌"}
            isActive={activePlayer === "❌"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
