import React from 'react';
import {sprites} from './PlayerData';
import { FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight } from "react-icons/fa";

function PlayerSpriteScreen(props) {

  const currentS=props.currentS;
  const setCurrentS=props.setCurrentS;

  //Function to change between pieces
  const nextPiece = () => {
    setCurrentS(currentS===sprites.length-1?0:currentS+1);
  }
  const prevPiece = () => {
    setCurrentS(currentS===0?sprites.length-1:currentS-1);
  }


  return (
    <div className="screen">
      <h1 className="heading">Sprite</h1>
      <div className="subScreen">
        <FaRegArrowAltCircleLeft className={props.start?"buttonHide":"button left"} onClick={prevPiece}/>
        <div className="spriteHolder">
          <img src={sprites[currentS]} alt='pieceImage' className="imageSprite"/>
        </div>
        <FaRegArrowAltCircleRight className={props.start?"buttonHide":"button right"} onClick={nextPiece}/>
      </div>
    </div>
  );
}

export {PlayerSpriteScreen};
