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
  let newBoard = [...board]
  if (newBoard[y][x] === "") {
    newBoard[y][x] = player;
    return newBoard;
  }
}

//Function to check if a win condition has been found
const checkBoard = (board) => {
  for (let i=0;i<board.length;i++) {
    for (let j=0;j<board.length;j++) {
      
    }
  }
  return false;
}

//Function check if 5 rows match in the array
const checkRow = (board,x,y) => {
  console.log(board[x][y])
  
}

export {
  initializeBoard,
  updateBoard,
  checkBoard
}