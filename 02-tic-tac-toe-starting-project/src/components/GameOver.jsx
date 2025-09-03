export default function GameOver({ winner, handleRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} 우승!!</p>}
      {!winner && <p>무승부입니다!!</p>}
      <p>
        <button type="button" onClick={handleRestart}>
          다시하기!
        </button>
      </p>
    </div>
  );
}
