
export default function GameBoard({ onSelectSquare, board }) {

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     // updating the state array or object is a mutable way of updation which will
  //     // update the old value in memory immediately even before setGameboard schedules for the update
  //     // This leads to strange state behavior and bugs
  //     // prevGameBoard[rowIndex][colIndex] = 'X';
  //     // return prevGameBoard

  //     // Immutable approach: Create a new game board const with deep coping array and its inner array
  //     //  updating it and returning it to schdule to state update for setGameboard
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled ={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
