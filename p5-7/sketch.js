// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let stockOne;
let stockTwo;
let state = 0;
let input, button, greeting;


function preload(){
  let urlAapl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + "AAPL" + "&interval=5min&outputsize=full&apikey=KZF5VVHCEAG08NU6";
  let urlMsft = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + "MSFT" + "&interval=5min&outputsize=full&apikey=KZF5VVHCEAG08NU6";
  stockOne = loadJSON(urlAapl);
  stockTwo = loadJSON(urlMsft);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
   input = createInput();
   input.position(20, 65);

   button = createButton('submit');
   button.position(input.x + input.width, 65);
   button.mousePressed(greet);

   greeting = createElement('h2', 'what is your name?');
   greeting.position(20, 5);

   textAlign(CENTER);
   textSize(50);
}


function draw() {

  // if(state === 0){
  //   menu();
  // }
  // else if(state === 1){
  //   getStock();
  // }
}


// function getStock(){
//
// }


// function mouseClicked(){
//   if(mouseX > width/2){
//     state = 1;
//     background(0);
//   }
//   // else if(mouseX < width/2){
//   //   state = 2;
//   //   background(0);
//   // }
// }


function menu(){
  input = createInput();
   input.position(20, 65);

   button = createButton('submit');
   button.position(input.x + input.width, 65);
   button.mousePressed(greet);

   greeting = createElement('h2', 'what is your name?');
   greeting.position(20, 5);

   textAlign(CENTER);
   textSize(50);
}
