// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let point;
let pointchange;
let x = 0;
let point2;
let x2 = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  point = height/2;
}

function draw() {
  graph();
  frameRate(10);
  pointchange = random(-30, 30);
  point2 = point + pointchange;
  stocks();
  if(x > width){
    background("black");
    x = 0;
    x2 = 0;
  }

}
function graph(){
  for(let i = 0; i < height; i += 100){
    stroke(255);
    line(0,i,width,i);
  }
}
function stocks(){
  if (point2 < height && point2 > 0){
    stroke(0,255, 0);
    line(x, point, x2, point2);
    x = x2;
    x2 += 10;
    point= point2;
  }
}
