// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let stockOne;
let state = 0;
let input, button, info;
let minutes;
let hours;
//
// function preload(){
//   let urlAapl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + "AAPL" + "&interval=5min&outputsize=full&apikey=KZF5VVHCEAG08NU6";
//   let urlMsft = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + "MSFT" + "&interval=5min&outputsize=full&apikey=KZF5VVHCEAG08NU6";
//   stockOne = loadJSON(urlAapl);
//   stockTwo = loadJSON(urlMsft);
// }


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  minutes = minute();
  hours = hour();
  input = createInput();
   input.position(20, 65);

   button = createButton("search");
   button.position(input.x + input.width, 65);
   button.mouseClicked(changeState);
}


function draw() {
  while(minutes % 5 !== 0){
    minutes -= 1;
  }
  if (hours > 16 || hours < 9){
    hours = 16;
    minutes = "00";
  }
  if(state === 0){
    menu();
  }
  else if(state === 1){
    getStock();
  }
  else{
    wait();
  }
}


function getStock(){
  background(255);
    let getUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + input.value() + "&interval=5min&outputsize=full&apikey=KZF5VVHCEAG08NU6";
    let displayStock = loadJSON(getUrl);
    stockOne = displayStock["Time Series (5min)"]["2018-10-" + day() + " "  + hours + ":" + minutes + ":" + "00"];
    text(stockOne, width/2, height/2);
    state = 2;
}


function menu(){
  background(255);
  textSize(100);
  textAlign(CENTER);
  text("Enter in stock id in all caps to search stock", width/2, height/2);
}

function changeState(){
  state = 1;
}

function wait(){
  if(keyIsPressed){
    state = 0;
  }
}
