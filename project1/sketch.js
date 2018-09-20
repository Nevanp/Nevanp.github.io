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
let ballX = random(50, width);
let ballY = random(50, width);
let ballxSpeed = random(3,5);
let ballySpeed = random(3, 5);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function ball(){
  if((ballX < (windowWidth + 50) && ballY < (windowHeight + 50)) && ((ballX +50) > 0 && (ballY +50) > 0)){
    ballX += ballxSpeed;
    ballY += ballySpeed;
    fill(10, 10, 100);
    ellipse(ballX, ballY, 50);
  }
  if (ballY >= windowHeight || ballY <= 0) {
    ballySpeed = ballySpeed * -1;
  }
  if (ballX >= windowWidth || ballX <= 0) {
    ballxSpeed = ballxSpeed * -1;
  }
}

function boom(){
  if( powerCounter < 60){
  stroke(0);
  noFill();
  ellipse(mouseX, mouseY, powerCounter*2);
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
      boom();
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
    rect(mouseX, mouseY, 10, 10);
    ball();
	   powerTime();
}

function gameStart(){ //This makes the startscreen and starts game
  if(mouseIsPressed){
    mouseClick = true;
  }
  if(mouseClick){
		game();
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
}
