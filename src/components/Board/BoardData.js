import {initializeBoard} from './BoardHelper';

//Intialize Board X and Y Size (Played on 19x19)
const rowLength = 19;
const colLength = 19;

//Initalize Board Array
const boardArr = initializeBoard(rowLength,colLength);

export {
  rowLength,
  colLength,
  boardArr
};