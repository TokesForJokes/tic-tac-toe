import React, { useState } from 'react';
import GameGrid from './GameGrid';

function Game() {
  const [moves, setMoves] = useState(Array(9).fill(''));
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6], // Diagonal top-right to bottom-left
  ];

  const checkWinner = (moves) => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
        return moves[a];
      }
    }
    return null;
  };

  const handleSquareClick = (index) => {
    if (!winner && moves[index] === '') {
      const newMoves = [...moves];
      newMoves[index] = turn;
      setMoves(newMoves);

      const gameWinner = checkWinner(newMoves);
      if (gameWinner) {
        setWinner(gameWinner);
      } else {
        setTurn(turn === 'X' ? 'O' : 'X');
      }
    }
  };

  const handleNewGame = () => {
    setMoves(Array(9).fill(''));
    setTurn('X');
    setWinner(null);
  };

  return (
    <div>
      <GameGrid moves={moves} onSquareClick={handleSquareClick} />
      {winner ? <p>Winner: {winner}</p> : <p>Turn: {turn}</p>}
      <button onClick={handleNewGame}>New Game</button>
    </div>
  );
}

export default Game;
