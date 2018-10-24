// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let rows;
let cols;
let rectSize;
let colour = [];

function setup() {
  createCanvas(600, 600);
  rows = 8;
  cols = 8;
  rectSize = width/cols;


}

function draw() {
  // for(let i = 0; i < rows; i++){
  //   for(let j = 0; j < cols; j ++){
  //     if(colour[i][j] === 1){
  //       fill(0);
  //     }
  //     else{
  //       fill(255);
  //     }
  //     rect(i*30, j*30, 30,30);
  //   }
  // }
  // for(let i = 0; i < rows; i++){
  //   for(let j = 0; j < cols; j ++){
  //     if(colour[i][j] === 1){
  //       fill(0);
  //     }
  //     else if(colour[i][j] === 0){
  //       fill(255);
  //     }
  //     else{
  //       fill(255,0,0);
  //     }
  //     rect(i*30, j*30, 30,30);
  //   }
  // }
}


function keyTyped(){
  for(let i = 0; i < rows; i ++){
    colour[i] = [];
    for(let j = 0; j < cols; j ++){
      colour[i][j] = round(random(0,1));
    }
  }
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j ++){
      if(colour[i][j] === 1){
        fill(0);
      }
      else if(colour[i][j] === 0){
        fill(255);
      }
      else{
        fill(255,0,0);
      }
      rect(i*rectSize, j*rectSize, rectSize,rectSize);
    }
  }
}



function mouseClicked(){
  for(let i = 0; i < rows; i ++){
    for(let j = 0; j < cols; j ++){
      if(mouseX >= j*rectSize && mouseX <= (j + 1)* rectSize && mouseY >= i*rectSize && mouseY <= (i + 1)* rectSize){
        // fill(255,0,0);
        // ellipse(j * rectSize + rectSize/2, i * rectSize + rectSize/2, rectSize/2,rectSize/2);
      }
    }
  }
}
