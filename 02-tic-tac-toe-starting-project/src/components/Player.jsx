import { useId, useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };
  const inputID = useId();

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = (
      <>
        <label htmlFor={inputID}></label>
        <input type="text" required id={inputID} value={name} />
      </>
    );
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button type="button" onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
