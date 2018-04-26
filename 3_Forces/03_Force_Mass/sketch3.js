var mover;
var mover2;

function setup() {
  createCanvas(800,600);
  mover = new Mover(150);
  mover2 = new Mover(50);
}

function draw() {
  var wind = createVector(0.3, 0.03);
  var gravity = createVector(0, 0.01 * mover.mass);

  background(178, 190, 195);

  mover.addForce(wind);
  mover.addForce(gravity);

  mover.checkEdges();
  mover.update();
  mover.display();

  mover2.addForce(wind);
  mover2.addForce(gravity);

  mover2.checkEdges();
  mover2.update();
  mover2.display();
}