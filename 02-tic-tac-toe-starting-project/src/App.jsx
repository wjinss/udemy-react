import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const PLAYERS = {
  "✅": "Player 1",
  "❌": "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActiveplayer(gameTurns) {
  let currentPlayer = "✅";

  if (gameTurns.length > 0 && gameTurns[0].player === "✅") {
    currentPlayer = "❌";
  }

  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquarSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquarSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquarSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquarSymbol &&
      firstSquarSymbol === secondSquarSymbol &&
      firstSquarSymbol === thirdSquarSymbol
    ) {
      winner = players[firstSquarSymbol];
    }
  }

  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  // const [activePlayer, setActivePlayer] = useState("✅");

  const activePlayer = deriveActiveplayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((currentActivePlayer) =>
    //   currentActivePlayer === "✅" ? "❌" : "✅"
    // );
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActiveplayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handelPlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS["✅"]}
            symbol={"✅"}
            isActive={activePlayer === "✅"}
            onChangeName={handelPlayerNameChange}
          />
          <Player
            initialName={PLAYERS["❌"]}
            symbol={"❌"}
            isActive={activePlayer === "❌"}
            onChangeName={handelPlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
