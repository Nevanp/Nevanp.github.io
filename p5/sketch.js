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

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function boom(){
  if( powerCounter < 60){
  stroke(0);
  noFill();
  ellipse(mouseX, mouseY, 50, 50);
  powerCounter += 1;
  }
  else{
    powerUp = false;
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
    rect(pmouseX, pmouseY, 10, 10);
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
