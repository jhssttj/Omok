import React from 'react';
import '../styles/Board.css';

function BoardSquare(props) {

  const className = props.className

  return (
    <div className = {className}></div>
  );
}

export {BoardSquare};
