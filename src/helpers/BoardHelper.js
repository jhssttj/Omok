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

//Function to render x squares to form within a y row
const renderSquare = (x) => {
  let squares = [];
  for (let i=0; i<x; i++) {
    squares.push(<div className = "square"></div>)
  }
  return squares;
}

export {
  initializeBoard,
  renderSquare
}