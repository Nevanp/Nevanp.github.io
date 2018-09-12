// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let size = 0
let colourCode = 255
function setup() {
    createCanvas(400, 400);
    background(colourCode);
}

function draw() {
	if(mouseIsPressed && key === "r" && keyIsPressed){
      size += 1
      background(colourCode);
      rect(mouseX, mouseY, size, size);
    }
  	else if(mouseIsPressed && keyCode === 69){
      size += 1
      background(colourCode);
      ellipse(mouseX, mouseY, size, size);
    }
  	else if(keyCode === 87){
      colourCode= 255;
      background(colourCode);
    }
  	else if(keyCode === 66){
      colourCode = 0;
      background(colourCode);
    }
  	else{
    size = 0;
  }


}
