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
let roundMin;

function preload(){
  let urlAapl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + "AAPL" + "&interval=5min&outputsize=full&apikey=KZF5VVHCEAG08NU6";
  let urlMsft = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + "MSFT" + "&interval=5min&outputsize=full&apikey=KZF5VVHCEAG08NU6";
  stockOne = loadJSON(urlAapl);
  stockTwo = loadJSON(urlMsft);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  // let Aapl = stockOne["Time Series (5min)"]["2018-10-"+ day+ " "+ hours + ":"+ minutes +":00"];
  // let Msft = stockTwo["Time Series (5min)"]["2018-10-12 15:15:00"];
  // print(Aapl);
  // print(Msft);
  console.log(stockOne);
}

function draw() {
  hours = hour();
  roundMin = minute();
  while(roundMin % 5 !== 0){
    roundMin --;
  }
  minutes = roundMin;

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
  for(let f = hours; f > 9; f --){
    if(f === hours){
      for(let m = minutes; m > 0; m -= 5){
        showStock.push[stockOne["Time Series (5min)"]["2018-10-12 " + int(f) + ":" + int(m) + ":" + "00"]];//["1. open"]];
      }
    }
    else{
      for(let m = 60; m > 0; m -= 5){
        showStock.push[stockOne["Time Series (5min)"]["2018-10-12 " + int(f) + ":" + int(m) + ":" + "00"]];//["1. open"]];
      }
    }
  }
    console.log(showStock);
  // for(let i = 0; i < 10; i ++){
  //   showStock.push[stockOne["Time Series (5min)"]["2018-10-12 " + hr + ":" + min + ":" + "00"]["1. open"]];
  //   console.log(showStock);
  // }
  // for(let i = 0; i < hours*12; i ++){
  //   point = showStock[i];
  //   point2 = showStock[i ++];
  //   x2 += 10;
  //   stroke(0,255,0);
  //   line(x, point, x2, point2);
  //   x = x2;
  // }

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
