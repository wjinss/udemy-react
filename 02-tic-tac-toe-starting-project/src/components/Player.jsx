import { useId, useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const inputID = useId();
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <>
            <label htmlFor={inputID}></label>
            <input type="text" required id={inputID} />
          </>
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button type="button" onClick={handleEditClick}>
        Edit
      </button>
    </li>
  );
}
