// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let y = 0;
let ySpeed = 5;
let xSpeed = 6;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if((x < (windowWidth + 50) && y < (windowHeight + 50)) && ((x+50) > 0 && (y+50) > 0)){
    background(255, 0, 255);
    x += xSpeed;
    y += ySpeed;
    ellipse(x, y, 50, 50);
  }
  if (y >= windowHeight || y <= 0) {
    ySpeed = ySpeed * -1;
  }
  if (x >= windowWidth || x <= 0) {
    xSpeed = xSpeed * -1;
  }



}
