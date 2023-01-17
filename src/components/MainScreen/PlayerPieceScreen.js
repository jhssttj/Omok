import React from 'react';
import {useState} from 'react';
import {pieces} from './PlayerData';
import { FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight } from "react-icons/fa";

function PlayerPieceScreen(props) {
  const [current, setCurrent] =useState(props.player===1?0:1);

  //Function to change between pieces
  const nextPiece = () => {
    setCurrent(current===pieces.length-1?0:current+1);
  }
  const prevPiece = () => {
    setCurrent(current===0?pieces.length-1:current-1);
  }


  return (
    <div className="screen">
      <h1 className="heading">Piece</h1>
      <div className="subScreen">
        <FaRegArrowAltCircleLeft className="button left" onClick={prevPiece}/>
        <div className="pieceHolder">
          <img src={pieces[current]} alt='pieceImage' className="imagePiece"/>
        </div>
        <FaRegArrowAltCircleRight className="button right" onClick={nextPiece}/>
      </div>
    </div>
  );
}

export {PlayerPieceScreen};
