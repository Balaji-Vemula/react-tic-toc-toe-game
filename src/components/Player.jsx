import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName, ...remainingProps }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((prevEditing) => !prevEditing);
    if (isEditing) {
      onChangeName(symbol, playerName)
    }
  }
  function playerNameChangeHandler(event){
    setPlayerName(event.target.value);
  }
  let PlayerElement = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    PlayerElement = <input type="text" value={playerName} onChange={playerNameChangeHandler} required />;
    btnCaption = "Save";
  }
  return (
    <li className={isActive ? 'active': undefined}>
      <span className="player">
        {PlayerElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
