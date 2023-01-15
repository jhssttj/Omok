import React from 'react';
import {useState} from 'react';
import {player1,player2,pieces} from './PlayerData';

function PlayerScreen() {
  
  const [p1, setP1] = useState(player1);
  const [p2, setP2] = useState(player2);
  
  console.log(p1,p2)

  return (
    <div>
      <input type="text">
      </input>
    </div>
  );
}

export default PlayerScreen;
