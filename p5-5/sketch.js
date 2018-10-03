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
let average = 0;
let it = 0;
let ave = 0;
let state = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  point = height/2;
}

function draw() {
  frameRate(10);
  pointchange = random(-30, 30);
  point2 = point + pointchange;
  if(state === 0){
    menu();
  }
  if(state === 1){
    graph();
    stocks();
  }
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
    push();
    stroke(0,255, 0);
    line(x, point, x2, point2);
    x = x2;
    x2 += 10;
    point= point2;
    it++;
  }
}

function menu(){
  let side1 = 150;
  let side2 = 150;
  noStroke();
  if(mouseX < width/2){
    side1 = 200;
    side2 = 150;
  }
  else{
    side1 = 150;
    side2 = 200;
  }
  fill(side1);
  rect(0, 0, width/2, height);
  fill(side2);
  rect(width/2,0, width/2,height);
}
