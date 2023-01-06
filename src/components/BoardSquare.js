import React from 'react';
import '../styles/Board.css';

function BoardSquare(props) {
  
  const className = props.className;
  const value = props.value;

  return (
    <div className={className} value={value}></div>
  );
}

export {BoardSquare};
