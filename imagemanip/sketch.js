// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let water;
let makeGray;

function preload(){
  water = loadImage("assets/water.jpeg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  image(water, 0,0);
}

function draw() {

}

function greyScale(sourceImage){
  let img = createImage(sourceImage.width, sourceImage.height);

  sourceImage.loadPixels();
  img.loadPixels();
  for(let x = 0; x < img.width; x ++){
    for(let y = 0; y < img.height; y ++){
      let thisPixel = img.get(x, y);

      let r = red(thisPixel);
      let g = green(thisPixel);
      let b = blue(thisPixel);

      let average = (r+g+b)/3;

      let newPixel = color(average, average, average);

      img.set(x, y, newPixel);
    }
  }
  img.updatePixels();

  return img;
}
