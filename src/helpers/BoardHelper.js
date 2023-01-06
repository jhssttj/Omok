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
const placeStone = (event) => {
  event.preventDefault();
  console.log(event.target.getAttribute("x"));
  console.log(event.target.getAttribute("y"));
  console.log(typeof(event.target.getAttribute("x")));
}

export {
  initializeBoard,
  placeStone
}