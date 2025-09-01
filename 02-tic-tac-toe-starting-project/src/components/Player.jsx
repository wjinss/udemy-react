import { useId, useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    // 이전값의 기반한 상태를 변경할땐 상태(값) 자체를 바꾸지 말고, 업데이트 함수를 통해 변경한다.
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };
  const inputID = useId();

  let ediablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    ediablePlayerName = (
      <>
        <label htmlFor={inputID}></label>
        <input
          type="text"
          required
          id={inputID}
          value={playerName}
          onChange={handleChange}
        />
      </>
    );
  }
  return (
    <li>
      <span className="player">
        {ediablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button type="button" onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
