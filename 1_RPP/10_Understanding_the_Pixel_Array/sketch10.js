function setup() {
  createCanvas(300, 200);
  background(178, 190, 195);
}


function draw() {
  loadPixels();

  var index = (18)*300
    pixels[index+0] = 9;
    pixels[index+1] = 132;
    pixels[index+2] = 227;
    pixels[index+3] = 255;

  updatePixels();
}
