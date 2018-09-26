// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let i = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CENTER);
  background(0,0,0);
  translate(mouseX, mouseY);
  mouseClicked();
  rotate(i);
  rect(0,0,20,20);
}
function mouseClicked(){
  for (i = 0; i < PI; i += PI / 4){
    i += PI / 4;
  }
}
