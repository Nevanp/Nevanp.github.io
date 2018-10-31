// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rows = 10;
let cols = 3;
let grid;
let cellSize;
let playerX;
let enemyX;
let enemyY;
let speed;
let state;
let score;


function setup() {
  if(windowHeight > windowWidth){
    createCanvas(windowWidth,windowWidth);
  }
  else{
    createCanvas(windowHeight, windowHeight);
  }
  cellSize = width / rows;
  grid = makeGrid(cols, rows);
  playerX = 0;
  pickcol();
  grid[rows-1][playerX] = 2;
  speed = random(15,25);
  state = 0;
  score = 0;
  noStroke();
}

function draw() {
  background(255);
  text(score, width/2, 75);
  if(state === 1){
    displayGrid();
    detect();
  }
  else if(state === 2){
    dead();
  }
  else if (state=== 0){
    menu();
  }

}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill(255);
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
      if(grid[y][x] === 2){
        stroke(69);
        fill(69);
        rect(x*cellSize,y*cellSize, cellSize, cellSize);
        noStroke();
        fill(255,0,0);
        ellipse(x*cellSize + cellSize/2,y*cellSize + cellSize/2, cellSize/2);
      }
      else if(grid[y][x] === 1){
        fill(0,0,255);
        ellipse(enemyX[x]*cellSize + cellSize/2, y*cellSize + cellSize/2, cellSize/2);
      }
      else{
        fill(69);
        stroke(69);
        rect(x*cellSize,y*cellSize, cellSize, cellSize);
      }
    }
  }
  objects();
}

function makeGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
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
  if(state === 2){
    if(key === "r"){
      state = 1;
      speed = 15;
      score = 0;
      pickcol();
      enemyY = 0;
    }
  }
  if(key === "c"){
    resetGrid();
  }
  if( state === 0){
    if(key === " "){
      state = 1;
    }
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
  score ++;
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
    speed *= 1.05;
  }
}

function detect(){
  if(enemyY >= (rows-1)*cellSize && playerX=== enemyX){
    state = 2;
  }
}


function dead(){
  background(0);
  textSize(75);
  textAlign(CENTER);
  fill(0,255,0);
  text("GAMEOVER",width/2, height/2);
  text("PRESS R TO RESET", width/2, height/2 + 60);
  text(score, width/2, 75);
}


function menu(){
  background(0);
  textAlign(CENTER);
  textSize(75);
  fill(0,255,0);
  text("press space to start", width/2, height/2);
}
