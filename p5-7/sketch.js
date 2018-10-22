// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x;
let time = 0;
let rects = [];
let numOfRects;
let rectWidth;
function setup() {
  createCanvas(windowWidth, windowHeight);
  numOfRects = width/2;
  rectWidth = width/ numOfRects;
}

function draw() {
  background(0, 0, 220);
  fill(0);
  displayRects();
  // fill(0);
  // x = noise(time) * width;
  // ellipse(x, height/2, 30,30);
  // time += 0.01;
}

function terrain(){
  rects = [];
  for(let i = 0; i < numOfRects; i ++){
    let rectHeight = noise(time)* height;
    let someRect = {
      x: i * rectWidth,
      y: height - rectHeight,
      width: rectWidth,
      height: rectHeight,
    };

    rects.push(someRect);
    time += 0.01;

  }
}
function displayRects(){
  fill(10, 255, 10);
  noStroke();
  for( let i = 0; i < rects.length; i ++){
    rect(rects[i].x, rects[i].y, rects[i].width, rects[i].height);
  }
}

function keyTyped(){
  terrain();
}
