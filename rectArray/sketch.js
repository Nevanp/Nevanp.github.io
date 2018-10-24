// Grid
// Dan Schellenberg
// Oct 24, 2018

let rows = 9;
let cols = 9;
let grid;
let cellSize;

function setup() {
  createCanvas(600, 600);
  cellSize = width / cols;
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  background(255);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let y = 0; y < rows; y++) {
    randomGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        randomGrid[y].push(0);
      }
      else {
        randomGrid[y].push(1);
      }
    }
  }
  return randomGrid;
}


function mouseClicked(){
  for(let y = 0; y < rows; y ++){
    for(let x = 0; x < cols; x ++){
      if(mouseX >= x*cellSize && mouseX <= (x + 1)* cellSize && mouseY >= y*cellSize && mouseY <= (y + 1)* cellSize){
        if (grid[y][x]=== 1){
          grid[y][x]= 0;
        }
        else{
          grid[y][x]= 1;
        }
      }
    }
  }
}
