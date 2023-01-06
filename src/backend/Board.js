import {initializeBoard} from '../helpers/BoardHelper';

//Intialize Board X and Y Size (Played on 19x19)
const x = 19;
const y = 19;

//Initalize Board Array
const boardArr = initializeBoard(x,y);

export {
  x,
  y,
  boardArr
};