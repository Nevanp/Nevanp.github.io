// Project Title
// Your Name
// Date
//
// Extra for Experts:
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage is where I got the refernce for saving to the browser
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
let crash;
let engine;
let highscore;
let myStorage;
let item;
let itemY = 0;
let itemX = 0;
let powerUpOn = 0;

//load images and sounds
function preload(){
  enemy = loadImage("assets/caren.png");
  car = loadImage("assets/yourcar.png");
  crash = loadSound("assets/carcrash.mp3");
  engine = loadSound("assets/formula1.wav");
  item = loadImage("assets/powerup.png");
}


function setup() {
  myStorage = window.localStorage;
  createCanvas(windowHeight, windowHeight);
  cellSize = width / rows;

  //make grid
  grid = makeGrid(cols, rows);
  playerX = 0;

  //set enemy x
  pickcol();
  //make player
  grid[rows-1][playerX] = 2;
  speed = 15;
  state = 0;
  score = 0;
  //grab highscore from computer memory
  highscore = myStorage.getItem("highscore");
}

function draw() {
  background(255);

  //check if on a phone (buggy)
  if (rotationY){
    phone();
  }

  //display score
  fill(255,0,255);
  text(score, width/2, 75);

  //drive screen
  if(state === 1){
    displayGrid();
    detect();
    powerUp();
  }

  //game over menu
  else if(state === 2){
    dead();
  }

  //start menu
  else if (state=== 0){
    menu();
  }

  //set highscore
  scoreDetect();

  //display speed
  push();
  textSize(50);
  fill(255);
  text(speed, width - width/10, height - 200);
  pop();
}

function displayGrid() {
  //show lines and road and player
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill(255);
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
      if(grid[y][x] === 2){
        //player
        imageMode(CENTER);
        stroke(40);
        fill(40);
        rect(x*cellSize,y*cellSize, cellSize, cellSize);
        image(car, x*cellSize + cellSize/2,y*cellSize + cellSize/2, cellSize, cellSize);
      }

      else{
        //makes lines on road
        if(x !== 1){
          fill(40);
          stroke(40);
          rect(x*cellSize,y*cellSize, cellSize, cellSize);
        }
        else{
          fill(40);
          stroke(40);
          rect(x*cellSize,y*cellSize, cellSize, cellSize);
          fill(255);
          rect(1*cellSize + cellSize/2- cellSize/8, y*cellSize, cellSize/4, cellSize/2);
        }
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
      //restart
      state = 1;
      speed = 15;
      score = 0;
      pickcol();
      enemyY = 0;
      driveSound();
    }
  }
  if( state === 0){
    if(key === " "){
      //start
      state = 1;
      driveSound();
    }
  }
//move player
  if(playerX > 0){
    if(key === "a" ){
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



function pickcol(type){
  //pick enemy x
  if(type === 1){
    enemyX = round(random(0, cols-1));
    enemyY= 0;
    score ++;
  }
  else{
    //pick item x
    itemX = round(random(0, cols-1));
    itemY= 0;
    score ++;
  }
}

function objects(){
  //display enemy + move
  if (enemyY<height){
    fill(0,0,255);
    imageMode(CENTER);
    image(enemy,enemyX*cellSize + cellSize/2, enemyY,  cellSize, cellSize);
    let newY = floor(enemyY);
    enemyY += speed;
  }
  else{
    pickcol(1);
    if(speed < 100){
      speed *= 1.02;
    }
  }
}

function detect(){
  //see if enemy is touching player
  if(enemyY >= (rows-1)*cellSize && playerX=== enemyX){
    state = 2;
    crash.play();
    engine.stop();
  }
}


function dead(){
  //death menu + reset settings
  background(0);
  powerUpOn = 0;
  textSize(75);
  textAlign(CENTER);
  fill(0,255,0);
  text("GAMEOVER",width/2, height/2);
  text("PRESS R TO RESET", width/2, height/2 + 60);
  text(score, width/2, 75);
}


function menu(){
  //menu
  background(0);
  textAlign(CENTER);
  textSize(75);
  fill(0,255,0);
  text("press space to start", width/2, height/2);
}


function phone(){
  // movement with phone tilt (buggy)
  if(rotationY < -30){
    playerX = 0;
    grid[rows-1][playerX]=2;
    grid[rows-1][2]=0;
    grid[rows-1][1] = 0;
  }
  else if(rotationY > 30){
    playerX = 2;
    grid[rows-1][playerX]=2;
    grid[rows-1][1]=0;
    grid[rows-1][0] = 0;
  }
  else{
    playerX = 1;
    grid[rows-1][playerX]=2;
    grid[rows-1][2]=0;
    grid[rows-1][0] = 0;
  }
}

function touchMoved(){
  //start/restart on phone
  if(state === 0 || state === 2){
    state = 1;
    speed = 15;
    score = 0;
    pickcol();
  }
}


function driveSound(){
  //make sound loop
  if(engine.isPlaying()){
    engine.stop();
  }
  else{
    engine.loop();
  }
}

function scoreDetect(){
  //change  highscores
  fill(255,255,0);
  if(state === 1){
    textAlign(CENTER);
    textSize(50);
    text("highscore: "+ highscore, width/2, height/2);
  }
  else{
    textSize(100);
    text("highscore: "+ highscore, width/2, height - 50);
  }
  if(score > highscore){
    highscore = score;
    myStorage.setItem("highscore", highscore);
  }
}


function powerUp(){
  //move and display powerup
  let numberone = round(random(1, 1000));
  let numbertwo = round(random(1, 1000));
  if(powerUpOn === 0 && numberone === numbertwo){
    powerUpOn = 1;
  }
  if(powerUpOn ===1){
    fill(0,0,255);
    imageMode(CENTER);
    image(item,itemX*cellSize + cellSize/2, itemY,  cellSize, cellSize);

    itemY += speed/1.25;
  }

  if(itemY >= height){
    pickcol(2);
    powerUpOn= 0;
  }
  else if(itemY >= (rows -1)* cellSize && playerX === itemX){
    speed *= 0.95;
    pickcol(2);
    powerUpOn= 0;
  }
}
