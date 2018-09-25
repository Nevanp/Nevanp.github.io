// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/
let timer = 1;
let redTime = 3500;
let greenTime = 5000;
let yellowTime = 2000;
let milliTimer = 0;
let whatTimeIs = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  if(timer === 1){
    fill(255, 0, 0);
    ellipse(width/2, height/2 - 65, 50, 50); //top
    fill(255);
    ellipse(width/2, height/2, 50, 50); //middle
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
  else if( timer === 2){
    fill(255, 255, 0);
    ellipse(width/2, height/2, 50, 50); //middle
    fill(255);
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }
  else if (timer === 3){
    fill(0, 255, 0);
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
    fill(255);
    ellipse(width/2, height/2, 50, 50); //middle
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }
  lights();
}

function lights(){
  whatTimeIs = millis() - milliTimer
  if( whatTimeIs % yellowTime === 0 && timer === 2 || whatTimeIs % greenTime === 0 && timer === 3 || whatTimeIs % redTime && timer === 1){
    if(timer === 1){
      timer = 3;
      milliTimer = millis();
    }
    else if(timer === 2){
      timer = 1;
      milliTimer = millis();
    }
    else if(timer === 3){
      timer = 2;
      milliTimer = millis();
    }
  }
}


// function stayGreen(){
//   ellipse(500, height/2, 100);
//   if(mouseX >= 500 && mouseX <= 600 && mouseY >+)
// }
