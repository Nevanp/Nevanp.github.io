// Grid
// Dan Schellenberg
// Oct 24, 2018

let rows = 10;
let cols = 2;
let grid;
let cellSize;
let playerX;
let enemyX;
let enemyY;
let speed;


function setup() {
  if(windowHeight > windowWidth){
    createCanvas(windowWidth,windowWidth);
  }
  else{
    createCanvas(windowHeight, windowHeight);
  }
  cellSize = width / rows;
  grid = createRandom2dArray(cols, rows);
  playerX = 0;
  pickcol();
  grid[rows-1][playerX] = 2;
  speed = random(15,25);
}

function draw() {
  background(255);
  displayGrid();
  detect();

}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill(255);
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
      if(grid[y][x] === 2){
        fill(255,0,0);
        ellipse(x*cellSize + cellSize/2,y*cellSize + cellSize/2, cellSize/2);
      }
      else if(grid[y][x] === 1){
        fill(0,0,255);
        ellipse(enemyX[x]*cellSize + cellSize/2, y*cellSize + cellSize/2, cellSize/2);
      }
      else{
        fill(255);
        rect(x*cellSize,y*cellSize, cellSize, cellSize);
      }
    }
  }
  objects();
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
        grid[y][x] = 2;
      }
    }
  }
}


function keyTyped(){
  if(key === "r"){
    grid = createRandom2dArray(cols, rows);
  }
  if(key === "c"){
    resetGrid();
  }
  if(playerX > 0){
    if(key === "a"){
      playerX --;
      grid[rows-1][playerX]=2;
      grid[rows-1][playerX+1]=0;
    }
  }
  if(cols-1 > playerX){
    if(key === "d"){
      playerX ++;
      grid[rows-1][playerX]=2;
      grid[rows-1][playerX-1]=0;
    }
  }
}

function resetGrid() {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      grid[y][x] = 0;
    }
  }
}


function pickcol(){
  enemyX = round(random(0, cols-1));
  enemyY= 0;
}

function objects(){
  if (enemyY<height){
    fill(0,0,255);
    ellipse(enemyX*cellSize + cellSize/2, enemyY, cellSize/2);
    let newY = floor(enemyY);
    enemyY += speed;
  }
  else{
    pickcol();
    speed *= 1.11;
  }
}

function detect(){
  if(enemyY >= (rows-1)*cellSize && playerX=== enemyX){
    grid = 0;
  }
}
