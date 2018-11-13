// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Walker{
  constructor(color){
    this.x  = width/2;
    this.y  =height/2;
    this.color = color;
    this.speed = 5;
  }

  display(){
    fill(this.color);
    stroke(this.color);
    ellipse(this.x,this.y, 2);
  }
  move(){
    let choice = random(0,100);
    if(choice< 25){
      //up
      this.y -= this.speed;
    }
    else if(choice < 50){
      //down
      this.y += this.speed;
    }
    else if(choice < 75){
      this.x -= this.speed;
    }
    else{
      this.x += this.speed;
    }
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  tyler = new Walker("red");
  nevan = new Walker("blue");
}
let tyler;
let nevan;


function draw() {
  tyler.move();
  tyler.display();
  nevan.move();
  nevan.display();
}
