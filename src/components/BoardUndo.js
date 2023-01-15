import React from 'react';
import '../styles/Board.css';

function BoardUndo(props) {
  //Carry over values from props
  const history = props.history;
  const setBoard = props.setBoard;

  //Function to bring board back to previous state
  const undo = () => {
    // setBoard("1");
    console.log(history);
  }
  return (
    <button
      onClick={undo}>
      Undo
    </button>
  );
}

export {BoardUndo};
