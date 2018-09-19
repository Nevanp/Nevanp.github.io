// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let fish;
let scaler;
function preload(){
  fish = loadImage("assets/nebula.jpg")
}

function mouseWheel(event){
  if(event.delta > 0 && scaler < 2.5){
    scaler = scaler*1.1;
  }
  else if(event.delta < 0 && scaler > 0.2){
    scaler = scaler* 0.9
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  scaler = 0.5;
}

function draw() {
  background("white")
  imageMode(CENTER)
image(fish, mouseX, mouseY, fish.width * scaler, fish.height * scaler)
}
