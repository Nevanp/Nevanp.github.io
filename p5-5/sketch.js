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
let state = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  point = height/2;
}

function draw() {
  frameRate(10);
  if(state === 0){
    menu();
  }
  if(state === 1){
    graph();
    stocks();
  }
  if(state === 2){
    graph();
    stock2();
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
  pointchange = random(-30, 30);
  point2 = point + pointchange;
  if (point2 < height && point2 > 0){
    stroke(0,255, 0);
    line(x, point, x2, point2);
    x = x2;
    x2 += 10;
    point= point2;
  }
}

function stock2(){
  pointchange = random(-35, 50);
  point2 = point + pointchange;
  if (point2 < height && point2 > 0){
    stroke(0, 0, 255);
    line(x, point, x2, point2);
    x = x2;
    x2 += 10;
    point= point2;
  }
}

function menu(){
  background(255);
  let side1 = 50;
  let side2 = 50;
  noStroke();
  if(mouseX < width/2){
    side1 = 100;
    side2 = 50;
  }
  else{
    side1 = 50;
    side2 = 100;
  }
  fill(0,0, 255, side1);
  rect(0, 0, width/2, height);
  fill(0,0, 255, side2);
  rect(width/2,0, width/2,height);
  textAlign(CENTER);
  fill(0);
  textSize(100);
  text("Safe Stock", width/1.25, height/2);
  fill(0);
  text("Risky Stock", width/4, height/2);


}

function mouseClicked(){
  if(mouseX > width/2){
    state = 1;
    background(0);
  }
  else if(mouseX < width/2){
    state = 2;
    background(0);
  }
}
