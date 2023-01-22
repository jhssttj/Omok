//Import Pieces image
import piece1 from '../../images/pieces/piece-1.png';
import piece2 from '../../images/pieces/piece-2.png';
import piece3 from '../../images/pieces/piece-3.png';
import piece4 from '../../images/pieces/piece-4.png';
import piece5 from '../../images/pieces/piece-5.png';
import piece6 from '../../images/pieces/piece-6.png';
import piece7 from '../../images/pieces/piece-7.png';
import piece8 from '../../images/pieces/piece-8.png';

//Import Sprites image
import sprite1 from '../../images/sprites/s1.png';
import sprite2 from '../../images/sprites/s2.png';
import sprite3 from '../../images/sprites/s3.png';
import sprite4 from '../../images/sprites/s4.png';
import sprite5 from '../../images/sprites/s5.png';
import sprite6 from '../../images/sprites/s6.png';
import sprite7 from '../../images/sprites/s7.png';
import sprite8 from '../../images/sprites/s8.png';
import sprite9 from '../../images/sprites/s9.png';
import sprite10 from '../../images/sprites/s10.png';
import sprite11 from '../../images/sprites/s11.png';
import sprite12 from '../../images/sprites/s12.png';
import sprite13 from '../../images/sprites/s13.png';
import sprite14 from '../../images/sprites/s14.png';
import sprite15 from '../../images/sprites/s15.png';
import sprite16 from '../../images/sprites/s16.png';
import sprite17 from '../../images/sprites/s17.png';
import sprite18 from '../../images/sprites/s18.png';
import sprite19 from '../../images/sprites/s19.png';


//Import Theme Settings
import theme1 from '../../images/themes/t1.jpg';
import theme2 from '../../images/themes/t2.jpg';
import theme3 from '../../images/themes/t3.jpg';
import theme4 from '../../images/themes/t4.jpg';

//Initialize Array of image for selection
const pieces = [
  piece1,
  piece2,
  piece3,
  piece4,
  piece5,
  piece6,
  piece7,
  piece8
];

const sprites = [
  sprite1,
  sprite2,
  sprite3,
  sprite4,
  sprite5,
  sprite6,
  sprite7,
  sprite8,
  sprite9,
  sprite10,
  sprite11,
  sprite12,
  sprite13,
  sprite14,
  sprite15,
  sprite16,
  sprite17,
  sprite18,
  sprite19
];

const themes = [
  theme1,
  theme2,
  theme3,
  theme4
];

//Initalize Player Object for P1 and P2
const player1 = {
  name: "player1",
  piece: 0,
  sprite: 0,
}

const player2 = {
  name: "player2",
  piece: 1,
  sprite: 1,
}

export {
  player1,
  player2,
  pieces,
  sprites,
  themes
};