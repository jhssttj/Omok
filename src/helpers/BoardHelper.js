//Function to initialize board Array x by y size
const initializeBoard = (x,y) => {
  let array = [];
  for (let i=0; i<y; i++) {
    let tempArray = [];
    for (let j=0; j<x; j++) {
      tempArray.push("");
    }
    array.push(tempArray);
  }
  return array;
};

//Function to update board Array when stone is placed
const updateBoard = (board,player,x,y) => {
  if (board[y][x] === "") {
    board[y][x] = player;
    return board;
  }
  return board[y][x];
}

export {
  initializeBoard,
  updateBoard
}