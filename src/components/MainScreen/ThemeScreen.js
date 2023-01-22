import React from 'react';
import {ThemeSelectScreen} from './ThemeSelectScreen';
import '../../styles/Player.css';

function ThemeScreen() {

  return (  
    <div className="themeScreen">
      <h1 className='themeHeading'>Theme</h1>
      <ThemeSelectScreen/>
      <button className="start">PLAY</button>
    </div>
  );
}

export {ThemeScreen};
