function setup() {
    createCanvas(640, 360);
    background(178,190,195);
}

function draw() {
  var xloc = randomGaussian();
  var yloc = randomGaussian();

  var xsd = 120;
  var ysd = 50;

  var xMean = width / 2;
  var yMean = height / 2;

  xloc = (xloc * xsd) + xMean;
  yloc = (yloc * ysd) + yMean;

  fill(45, 52, 54, 20);
  noStroke();
  ellipse(xloc, yloc, 12, 12);
}