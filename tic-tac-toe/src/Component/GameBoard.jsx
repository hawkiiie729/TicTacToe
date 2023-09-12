// GameBoard.js
import React, { useState } from "react";

const GameBoard = ({scores,setScores}) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  // const [scores, setScores] = useState({ blue: 0, red: 0 });

  console.log('====================================');
  console.log('scores',scores);
  console.log('====================================');

  const handleClick = (index) => {
    const newBoard = [...board];

    if (calculateWinner(newBoard) || newBoard[index]) return;

    newBoard[index] = xIsNext ? "X" : "O";

    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => (
    <button
      className={`square ${
        board[index] === "X" ? "X" : board[index] === "O" ? "O" : ""
      }`}
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  );

  const winner = calculateWinner(board);

  // if (winner === 'X') {
  //   setScores((prevScores) => ({
  //     ...prevScores,
  //     blue: prevScores.blue + 1,
  //   }));
  // } else if (winner === 'O') {
  //   setScores((prevScores) => ({
  //     ...prevScores,
  //     red: prevScores.red + 1,
  //   }));
  // }

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "Blue" : "Red"}`;

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setScores({
      blue: 0,
      red: 0,
    });

  };

  return (
    <div className="game-board">
      <div className="status">{status}</div>
      <div className="board">
        {board.map((_, index) => (
          <div key={index} className="square-container">
            {renderSquare(index)}
          </div>
        ))}
      </div>
      <button onClick={resetBoard}>Reset Board</button>
    </div>
  );
};

// Function to determine the winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default GameBoard;
