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

//Function to update board Array when piece is placed
const updateBoard = (board,player,x,y) => {
  let newBoard = [...board]
  if (newBoard[y][x] === "") {
    newBoard[y][x] = player;
    return newBoard;
  }
}

//Function to check if a win condition has been found
const checkWin = (board) => {
  for (let i=0;i<board.length;i++) {
    for (let j=0;j<board.length;j++) {
      //Dont check for 5 in a row if empty
      if (board[i][j] === '') {
        continue;
      }
      //Check different win conditions
      if (checkRow(board,i,j)||checkColumn(board,i,j)||checkDiagLR(board,i,j)||checkDiagRL(board,i,j)) {
        return true;
      }
    }
  }
  return false;
}

//Function check if 5 rows match in the array
const checkRow = (board,x,y) => {
  const piece = board[x][y];
  for (let i=1;i<=2;i++) {
    let left = board[x][y-i];
    let right = board[x][y+i];
    if (left !== piece || right !== piece) {
      return false;
    }
  }
  return true;
}

//Function check if 5 column match in the array
const checkColumn = (board,x,y) => {
  const piece = board[x][y];
  for (let i=1;i<=2;i++) {
    let bottom = board[x-i][y];
    let top = board[x+i][y];
    if (top !== piece || bottom !== piece) {
      return false;
    }
  }
  return true;
}

//Function check if 5 down slope diagonal match in the array
const checkDiagLR = (board,x,y) => {
  const piece = board[x][y];
  for (let i=1;i<=2;i++) {
    let topL = board[x-i][y+i];
    let botR = board[x+i][y-i];
    if (topL !== piece || botR !== piece) {
      return false;
    }
  }
  return true;
}

//Function check if 5 up slope diagonal match in the array
const checkDiagRL = (board,x,y) => {
  const piece = board[x][y];
  for (let i=1;i<=2;i++) {
    let topR = board[x+i][y+i];
    let botL = board[x-i][y-i];
    if (topR !== piece || botL !== piece) {
      return false;
    }
  }
  return true;
}

export {
  initializeBoard,
  updateBoard,
  checkWin
}