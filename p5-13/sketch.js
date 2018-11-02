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
let enemy;
let car;

function preload(){
  enemy = loadImage("assets/caren.png");
  car = loadImage("assets/yourcar.png");
}
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
  speed = 15;
  state = 0;
  score = 0;
}

function draw() {
  background(255);
  if (rotationY){
    phone();
  }
  fill(255,0,255);
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
        imageMode(CENTER);
        stroke(40);
        fill(40);
        rect(x*cellSize,y*cellSize, cellSize, cellSize);
        image(car, x*cellSize + cellSize/2,y*cellSize + cellSize/2, cellSize, cellSize);
      }
      else if(grid[y][x] === 1){
        fill(0,0,255);
        ellipse(enemyX[x]*cellSize + cellSize/2, y*cellSize + cellSize/2, cellSize/2);
      }
      else{
        fill(40);
        stroke(40);
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
  if( state === 0){
    if(key === " "){
      state = 1;
    }
  }

  if(playerX > 0){
    if(key === "a" || key === "ArrowLeft"){
      playerX --;
      grid[rows-1][playerX]=2;
      grid[rows-1][playerX+1]=0;
    }

  }
  if(cols-1 > playerX){
    if(key === "d" || keyCode === "39"){
      playerX ++;
      grid[rows-1][playerX]=2;
      grid[rows-1][playerX-1]=0;
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
    imageMode(CENTER);
    image(enemy,enemyX*cellSize + cellSize/2, enemyY,  cellSize, cellSize);
    let newY = floor(enemyY);
    enemyY += speed;
  }
  else{
    pickcol();
    if(speed < 100){
      speed *= 1.01;
    }
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


function phone(){
  if(rotationY < -45){
    playerX = 0;
  }
  else if(rotationY > 45){
    playerX = 2;
  }
  else{
    playerX = 1;
  }
}

function touchMoved(){
  if(state === 0 || state === 2){
    state = 1;
    speed = 15;
    score = 0;
    pickcol();
  }
}
