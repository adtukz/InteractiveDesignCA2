function setup() {
    createCanvas(640, 360);
    background(178, 190, 195);
}

function draw() {
  var xloc = randomGaussian();

  var sd = 80;
  var mean = width /2;
  xloc = (xloc * sd) + mean;

  fill(45,52,54,20);
  noStroke();
  ellipse(xloc, height / 2, 16, 16);
}
