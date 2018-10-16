// Project Title
// Nevan Parsley
// 10/16/18
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let stockOne = "";
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


function setup() {   //Set up input box
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


function draw() { //grab current time to the nearest hour and minute and change states/display text
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
    background(255);
    wait();
    let i=0;
    for (let info in stockOne) {
      if (stockOne.hasOwnProperty(info)) {
        text(info + ":", width/2-200, height/2 - 100 + i);
        text(stockOne[info], width/2 + 200, height/2 - 100 + i);
      }
      i += 60;
    }
    // text(stockOne, width/2, height/2);
  }
}


function getStock(){//load stock JSON
  background(255);
    let getUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + input.value() + "&interval=5min&outputsize=full&apikey=KZF5VVHCEAG08NU6";
    loadJSON(getUrl, showStock);
    state = 2;
}


function menu(){ //display text menu
  background(255);
  textSize(65);
  textAlign(CENTER);
  text("Enter in stock id in all caps to search stock", width/2, height/2);
}

function changeState(){ //lets search button change text
  state = 1;
}

function wait(){ //take back to menu
  if(keyIsPressed){
    state = 0;
  }
}
function showStock(theStock){ //loads stock to variable so you can use it
  stockOne = theStock["Time Series (5min)"]["2018-10-" + day() + " "  + hours + ":" + minutes + ":" + "00"];

}
