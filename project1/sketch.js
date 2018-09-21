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
let ballInfo = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballX = {
    one: random(50,width),
    two: random(50, width)
  };
  ballY ={
     one: random(50, height),
     two: random(50, height)
   };

  ballxSpeed ={
    one: random(3,5),
    two: random(3,5)
  };
  ballySpeed ={
  one: random(3,5),
  two: random(3, 5)
};
ballInfo.push(ballX, ballY, ballxSpeed, ballySpeed)

ball = {
  x: 100,
  y: 4300,
  xSpeed: 12
};
}
}

}

function deathTest(){

  for (let i = 0; i < ballInfo.length ; i++) {
    if (ballInfo[i].one + 25 >= mouseX && ballInfo[i].y )
  }


  // if(ballInfo[0].one + 25 >= mouseX && ballInfo[1].one + 25 >= mouseY && ballInfo[0].one - 25 <= mouseX && ballInfo[1].one -25 <= mouseY || ballInfo[0].two + 25 >= mouseX && ballInfo[1].two + 25 >= mouseY && ballInfo[0].two - 25 <= mouseX && ballInfo[1].two -25 <= mouseY){
  //   death = true;
  // }
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
  if((ballX < (windowWidth + 50) && ballY < (windowHeight + 50)) && ((ballX + 50) > 0 && (ballY + 50) > 0)){
    ballX += ballxSpeed;
    ballY += ballySpeed;
    fill(10, 10, 100);
    ellipse(ballX, ballY, 50);
  }
  if (ballY + 25 >= windowHeight || ballY - 25 <= 0) {
    ballySpeed = ballySpeed * speedUnit;
  }
  if (ballX + 25 >= windowWidth || ballX - 25 <= 0) {
    ballxSpeed = ballxSpeed * speedUnit;
  }
  if(ballxSpeed > 100 || ballySpeed > 100 ){
    speedUnit = -0.95;
  }
  else{
    speedUnit = -1.05;
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
