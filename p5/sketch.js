// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let death = false;
let powerup = 0;
let mouseClick = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function gameStart(){ //This makes startscreen and starts game
  if(mouseIsPressed){
    mouseClick = true;
  }
  if(mouseClick){
    triangle(mouseX, mouseY - 10, mouseX + 10 ,mouseY + 10, mouseX - 10, mouseY + 10);
  }

  else{
    textSize(100);
    text("Click to Start", 40, height/2);
    fill(255, 0, 255);
  }
}

function draw() {
  background(220);
  if( death === false){
    gameStart();
  }
}
