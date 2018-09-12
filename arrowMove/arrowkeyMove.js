// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 100;
let y = 100;
let ySpeed = 5;
let xSpeed = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(255, 0, 255);
 if(keyIsDown(LEFT_ARROW)){
  x = x -xSpeed;
}
if(keyIsDown(RIGHT_ARROW)){
 x = x + xSpeed;
}
if(keyIsDown(DOWN_ARROW)){
  y = y + ySpeed;
}
if(keyIsDown(UP_ARROW)){
 y = y - ySpeed;
}
  ellipse(x, y, 50, 50);
}
