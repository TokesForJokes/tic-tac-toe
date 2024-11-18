import React from 'react';
import Square from './Square';
import './GameGrid.css';

function GameGrid({ moves, onSquareClick }) {
  return (
    <div className="game-grid">
      {moves.map((player, index) => (
        <Square key={index} player={player} onClick={() => onSquareClick(index)} />
      ))}
    </div>
  );
}

export default GameGrid;