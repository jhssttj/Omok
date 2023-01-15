import React from 'react';
import {useState} from 'react';
import {pieces} from './PlayerData';

function PlayerPieceScreen(props) {
  const [current, setCurrent] =useState(props.player===1?pieces[0]:pieces[1]);

  //Render all piece image
  const pieceRender = pieces.map((image,index) => {
    return (
      <div key={index}>
        <img src={image} alt='pieceImage'/>
      </div>
    )
  })

  return (
    <div>
      <button onClick={console.log("lef")}>Left</button>
      <button onClick={console.log("rig")}>Right</button>
      {pieceRender}
    </div>
  );
}

export {PlayerPieceScreen};
