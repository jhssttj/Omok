import React from 'react';
import '../../styles/Player.css';
import {PlayerScreen} from './PlayerScreen';

function MainScreen() {
  

  

  return (
    <div className="main">
       
          <PlayerScreen/>
          <div className="startScreen"></div>
          <PlayerScreen/>
    </div>
  );
}

export default MainScreen;
