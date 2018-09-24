// Project Title
// Nevan
// 9/18/18
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Project Title
// Nevan
// 9/18/18
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let death = false;
let powerup = 0;
let mouseClick = false;
let powerUp = false;
let powerLoading = 0;
let powerCounter= 0;
let ballX;
let ballY;
let ballxSpeed;
let ballySpeed;
let speedUnit = -1.05;
let ballWidth = 500;
let rectSize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballX = random(ballWidth/2, width - ballWidth/2);
  ballY = random(ballWidth/2, height- ballWidth/2);
  ballxSpeed = random(3, 5);
  ballySpeed = random(3, 5);
}


function deathTest(){

    if (ballX + ballWidth/2 >= mouseX + rectSize && ballY + ballWidth/2 >= mouseY+ rectSize && ballX - ballWidth/2 <= mouseX + rectSize && ballY - ballWidth/2 <= mouseY + rectSize ){
      death = true
    }

}

function gameOver(){
  if (second() % 2 !== 0){
    textSize(100);
    fill(255, 0, 0);
    text("Game Over", width/2 - 300, height/2);
  }
  else{
    background(220);
  }
}

function ball(){
  if((ballX < (windowWidth + ballWidth) && ballY < (windowHeight + ballWidth)) && ((ballX + ballWidth) > 0 && (ballY + ballWidth) > 0)){
    ballX += ballxSpeed;
    ballY += ballySpeed;
    fill(10, 10, 100);
    ellipse(ballX, ballY, ballWidth);
  }
  if (ballY + ballWidth/2 >= windowHeight || ballY - ballWidth/2 <= 0) {
    ballySpeed = ballySpeed * speedUnit;
  }
  if (ballX + ballWidth/2 >= windowWidth || ballX - ballWidth/2 <= 0) {
    ballxSpeed = ballxSpeed * speedUnit;
  }
  if(ballxSpeed > 100 || ballySpeed > 100 ){
    speedUnit = -0.95;
  }
  else{
    speedUnit = -1.05;
    }
}

function levelUp(){
  if( powerCounter < 60){
  stroke(0);
  noFill();
  ellipse(mouseX, mouseY, powerCounter*2);
  rectSize += 0.5;
  powerCounter += 1;
  }
  else{
    powerUp = false;
    powerCounter = 0;
  }
}

function powerTime(){ // load power up for game
	if (powerUp === false){
		powerLoading = frameCount % 1000;
		fill(255, 0, 0, powerLoading);
    noStroke();
		ellipse(25,25, 50, 50);
    if( frameCount % 1000 === 0){
      powerUp = true;
    }
  }
  else{
      fill(0, 255, 0);
      noStroke();
      ellipse(25,25,50,50);
      levelUp();
      }

}


function flashWord (){ // make word flash in start screen
  if (second() % 2 !== 0){
    textSize(100);
    fill(255, 0, 255);
    text("Click to Start", width/2 - 300, height/2);
  }
  else{
    background(220);
  }

}

function game(){
	//rectMode(CENTER);
		//translate(-(width/2), -(height/2));
		//rotate(PI/ 3.0);
    fill(10, 10 , 10);
    rectMode(CENTER);
    rect(mouseX, mouseY, rectSize, rectSize);
    ball();
	   powerTime();
}

function gameStart(){ //This makes the startscreen and starts game
  if(mouseIsPressed){
    mouseClick = true;
  }
  if(mouseClick){
		game();
    deathTest();
  }

  else{
    flashWord();
  }
}

function draw() {
  background(220);
  if( death === false){
    gameStart();
  }
  else{
    gameOver();
  }
}
