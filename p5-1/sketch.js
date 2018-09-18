// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let dvd;
let x = 100;
let y = 500;
let ySpeed = 5;
let xSpeed = 4;

function preload(){
  dvd = loadImage("assets/dvd.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(70,70,70);
  if((x < (windowWidth + 100) && y < (windowHeight + 100)) && ((x) > 0 && (y) > 0)){
    x += xSpeed;
    y += ySpeed;
    image(dvd, x, y, 100, 100);
}
if (y + 100 >= windowHeight || y <= 0) {
  ySpeed = ySpeed * -1.02;
  y += ySpeed;
}
if (x + 100 >= windowWidth || x <= 0) {
  xSpeed = xSpeed * -1.02;
  x += xSpeed;
}

}
