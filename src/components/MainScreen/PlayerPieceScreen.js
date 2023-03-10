import React from 'react';
import {pieces} from './PlayerData';
import { FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight } from "react-icons/fa";
import { soundEffects } from './SoundData';


function PlayerPieceScreen(props) {

  const currentP=props.currentP;
  const setCurrentP=props.setCurrentP;

  const clickSound = () => {
    new Audio(soundEffects.click).play()
  } 

  //Function to change between pieces
  const nextPiece = () => {
    setCurrentP(currentP===pieces.length-1?0:currentP+1);
    clickSound();
  }
  const prevPiece = () => {
    setCurrentP(currentP===0?pieces.length-1:currentP-1);
    clickSound();
  }


  return (
    <div className="screen">
      <h1 className="heading">Piece</h1>
      <div className="subScreen">
        <FaRegArrowAltCircleLeft className={props.start?"buttonHide":"button left"} onClick={prevPiece}/>
        <div className="pieceHolder">
          <img src={pieces[currentP]} alt='pieceImage' className="imagePiece"/>
        </div>
        <FaRegArrowAltCircleRight className={props.start?"buttonHide":"button right"} onClick={nextPiece}/>
      </div>
    </div>
  );
}

export {PlayerPieceScreen};
