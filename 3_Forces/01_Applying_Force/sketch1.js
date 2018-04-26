var mover;

function setup() {
  createCanvas(800,600);
  mover = new Mover(50);
}

function draw() {

  var wind = createVector(0.3, 0.03);

  background(178, 190, 195);

  mover.addForce(wind);

  mover.checkEdges();
  mover.update();
  mover.display();
}