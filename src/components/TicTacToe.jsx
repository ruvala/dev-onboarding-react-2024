import { useState } from 'react';
import Board from './Board';

const boardWidth = 3;
const boardHeight = 3;

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(boardWidth * boardHeight).fill(null)]); // History of moves
  const [stepNumber, setStepNumber] = useState(0); // Current move step
  const [xIsNext, setXIsNext] = useState(true); // Player turn

  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];

    // If the square is already filled or there's a winner, return
    if (squares[i] || winner) return;

    // Mark the square
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXIsNext(!xIsNext);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info">
        <p>{winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}</p>
      </div>
    </div>
  );
}

// Helper function to determine the winner
function calculateWinner(squares) {
  const lines = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
