import React from 'react';
import '../styles/Board.css';
import piece1 from '../images/piece-black.png'
import piece2 from '../images/piece-white.png'

function BoardSquare(props) {
  //Carry over values from props
  const className = props.className;
  const x = props.x;
  const y = props.y;
  const placeStone = props.placeStone;
  const board = props.board;
  //Find if piece has already been placed or not and disable onclick if so
  const placed = board[y][x] !== "";
  return (
    <div 
    className={className} 
    x={x} 
    y={y} 
    onClick={placed? ()=>{} : (event)=>{placeStone(event)}}>
      {board[y][x] === 1 &&
        <img src={piece1} alt='p1' className='p1 stone'/>
      }
      {board[y][x] === 2 &&
        <img src={piece2} alt='p2' className='p2 stone'/>
      }
    </div>
  );
}

export {BoardSquare};
