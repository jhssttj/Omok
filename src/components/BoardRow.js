import React from 'react';
import {BoardSquare} from './BoardSquare';
import {rowLength,colLength} from '../backend/BoardData';
import '../styles/Board.css';

function BoardRow(props) {
  
  //Carry over current row value from props
  const value = props.value;
  const placePiece = props.placePiece;
  const board = props.board;
  const piece = props.piece;
  const player = props.player;

  //Function to render x squares to form within a y row
  const renderSquare = (rowLength) => {
    let squares = [];
    for (let i=0; i<rowLength; i++) {
      let className = "square"
      //Determine if square is at edge of the board
      if (value === 0) {
        className += " top";
      } 
      if (value === colLength-1) {
        className += " bot";
      }
      if (i === 0) {
        className += " left";
      }
      if (i === rowLength-1) {
        className += " right";
      }
      squares.push(<BoardSquare className={className} x={i} y={value} key={i} piece={piece} placePiece={placePiece} board={board} player={player}/>);
    }
    return squares;
  };

  return (
    <div className= "row">
      {renderSquare(rowLength)}
    </div>
  );
}

export {BoardRow};
