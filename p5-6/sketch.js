// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let stockOne;
let stockTwo;
let showStock = [];
let minutes;
let hours;
let point;
let x = 0;
let point2;
let x2 = 5;
let state = 0;

function preload(){
  let urlAapl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + "AAPL" + "&interval=5min&outputsize=full&apikey=KZF5VVHCEAG08NU6";
  let urlMsft = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + "MSFT" + "&interval=5min&outputsize=full&apikey=KZF5VVHCEAG08NU6";
  stockOne = loadJSON(urlAapl);
  stockTwo = loadJSON(urlMsft);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  hours = hour();
  minutes = minute();
  let Aapl = stockOne["Time Series (5min)"]["2018-10-"+ day+ " "+ hours + ":"+ minutes +":00"];
  let Msft = stockTwo["Time Series (5min)"]["2018-10-12 15:15:00"];
  // print(Aapl);
  // print(Msft);

}

function draw() {
  hours = hour();
  minutes = minute();

  if(state === 0){
    menu();
  }
  else if(state === 1){
    getStock();
  }
}


function getStock(){
  let newPoint;
  let newPoint2;
  for(let f = hours; f > 0; f --){
    for(let m = minutes; m > 0; m --){
      showStock.push[stockOne["Time Series (5min)"]["2018-10-12 " + f + ":" + m + ":" + "00"][0]["1. open"]];
    }
  }
  for(let i = 0; i < hours; i ++){
    point = showStock[i];
    point2 = showStock[i ++];
    x = x2;
    x2 += 10;
    fill(0, 255, 0);
    line(x, point[0], x2, point2[0]);
  }
}


function mouseClicked(){
  if(mouseX > width/2){
    state = 1;
    background(0);
  }
  // else if(mouseX < width/2){
  //   state = 2;
  //   background(0);
  // }
}




function menu(){
  background(255);
  let side1 = 50;
  let side2 = 50;
  noStroke();
  if(mouseX < width/2){
    side1 = 100;
    side2 = 50;
  }
  else{
    side1 = 50;
    side2 = 100;
  }
  fill(0,0, 255, side1);
  rect(0, 0, width/2, height);
  fill(0,0, 255, side2);
  rect(width/2,0, width/2,height);
  textAlign(CENTER);
  fill(0);
  textSize(100);
  text("Apple stock", width/1.25, height/2);
  fill(0);
  text("Risky Stock", width/4, height/2);


}
