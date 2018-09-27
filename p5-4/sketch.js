// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let i = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  rectMode(CENTER);

  translate(mouseX, mouseY);
  if (mouseIsPressed){
    if(i < PI*2){
      i += 0.1;
    }
    else{
      i = 0;
    }
    rotate(i);
    rect(0 , 0, 200, 200);
  }
  // else{
  //   rotate(i);
  //   rect(0,0,200,200);
  // }
}
// function mousePressed(){
//   for (let i = 0; i < PI*2; i += PI / 4){
//     rotate(i);
//     rect(0 , 0, 20, 20);
//   }
// }
