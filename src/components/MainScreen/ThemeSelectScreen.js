import React from 'react';
import {useState} from 'react';
import {themes} from './PlayerData';
import { FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight } from "react-icons/fa";

function ThemeSelectScreen(props) {
  const [current, setCurrent] =useState(props.player===1?0:1);

  //Function to change between pieces
  const nextPiece = () => {
    setCurrent(current===themes.length-1?0:current+1);
  }
  const prevPiece = () => {
    setCurrent(current===0?themes.length-1:current-1);
  }


  return (
    <div className="screen" id="themeScreen">
      <div className="subScreen">
        <FaRegArrowAltCircleLeft className="button left" onClick={prevPiece}/>
        <div className="themeHolder">
          <img src={themes[current]} alt='themeImage' className="imageTheme"/>
        </div>
        <FaRegArrowAltCircleRight className="button right" onClick={nextPiece}/>
      </div>
    </div>
  );
}

export {ThemeSelectScreen};
