import React from 'react';
import {useState} from 'react';
import {BoardPiece} from './BoardPiece';
import '../../styles/Board.css';

function BoardSquare(props) {
  //Carry over values from props
  const className = props.className;
  const x = props.x;
  const y = props.y;
  const placePiece = props.placePiece;
  const board = props.board;
  const piece = props.piece
  const player = props.player;
  //Find if piece has already been placed or not and disable onclick if so
  const placed = (board[y][x] !== "");
  //Set hover state to render pre-placed Piece location
  const [hover, setHover] = useState(false);

  return (
    <div 
    className={className} 
    x={x} 
    y={y} 
    onClick={placed? ()=>{} : (event)=>placePiece(event)}
    onMouseEnter={placed? ()=>setHover(false) : ()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    >
      {(hover && player === 1) &&
        <BoardPiece img={piece.p1} x={x} y={y} className='piece hover'/>
      }
      {(hover && player === 2) &&
        <BoardPiece img={piece.p2} x={x} y={y} className='piece hover'/>
      }

      {board[y][x] === 1 &&
        <BoardPiece img={piece.p1} className='piece'/>
      }
      {board[y][x] === 2 &&
        <BoardPiece img={piece.p2} className='piece'/>
      }
    </div>
  );
}

export {BoardSquare};
