export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {/*  행과 열의 조합을 Key로 설정 */}
          {turn.player} 가 {turn.square.row}, {turn.square.col} 를 선택했습니다{" "}
          {/* props로 받은 배열의 객체의 값을 할당 */}
        </li>
      ))}
    </ol>
  );
}
