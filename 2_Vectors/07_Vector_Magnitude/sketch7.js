function setup() {
    createCanvas(800, 600);
}

function draw() {
  background(178, 190, 195);

  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width / 2, height / 2);
  var vectorLine = mouse.sub(center);
  
  var magnitude = vectorLine.mag();
  fill(9, 132, 227);
  stroke(45, 52, 54);
  rect(0, 0, magnitude, 10);

  translate(width / 2, height / 2);
  strokeWeight(1);
  stroke(9, 132, 227);
  line(0, 0, vectorLine.x, vectorLine.y);
}
