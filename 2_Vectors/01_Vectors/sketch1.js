var xSpeed = 2;
var radius = 20;
var x = 400;
var y = 300;


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(178, 190, 195);

  x = x + xSpeed;

  if ((x + radius > width) || (x - radius < 0) ) {
      xSpeed = xSpeed * -1;
  }

  stroke(45, 52, 54);
  strokeWeight(1);
  fill(9, 132, 227);
  ellipse(x, y, radius*2, radius*2);
}
