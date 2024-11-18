import React from 'react';
import './Square.css';

function Square({ player, onClick }) {
  return (
    <button className={`square ${player}`} onClick={onClick}>
      {player}
    </button>
  );
}

export default Square;