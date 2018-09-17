// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let death = false;
let powerup = 0;
let mouseClick = false;
let powerUp = false;
let powerLoading = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function powerTime(){ // load power up for game
	if (powerUp === false){
		powerloading = frameCount % 300;
		fill(255, 0, 0, powerLoading);
		ellipse(10,10, 10, 10);
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
    rect(mouseX - 5, mouseY - 5, 10, 10);
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
