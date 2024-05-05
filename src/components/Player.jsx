import { useState } from "react";

export default function Player({ initialName, symbol, ...remainingProps }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function clickHandler() {
    setIsEditing((prevState) => !prevState);
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
    <li>
      <span className="player">
        {PlayerElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}>{btnCaption}</button>
    </li>
  );
}
