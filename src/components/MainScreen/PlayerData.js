import piece1 from '../../images/pieces/piece-1.png';
import piece2 from '../../images/pieces/piece-2.png';
import piece3 from '../../images/pieces/piece-3.png';
import piece4 from '../../images/pieces/piece-4.png';
import piece5 from '../../images/pieces/piece-5.png';
import piece6 from '../../images/pieces/piece-6.png';
import piece7 from '../../images/pieces/piece-7.png';
import piece8 from '../../images/pieces/piece-8.png';

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

//Initalize Player Object for P1 and P2
const player1 = {
  name: "player1",
  piece: pieces[0]
}

const player2 = {
  name: "player2",
  piece: pieces[1]
}

export {
  player1,
  player2,
  pieces
};