import React from 'react';
import {ThemeSelectScreen} from './ThemeSelectScreen';
import '../../styles/Player.css';

function ThemeScreen() {

  return (  
    <div className="themeScreen">
      <h1>Select your theme</h1>
      <ThemeSelectScreen/>
      <button>Hi</button>
    </div>
  );
}

export {ThemeScreen};
