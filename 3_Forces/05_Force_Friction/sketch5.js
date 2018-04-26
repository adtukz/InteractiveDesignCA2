var mover;

function setup() {
	createCanvas(800,600);
	mover = new Mover(50);
}

function draw() {

	background(178, 190, 195);

	var m = mover.mass;

	var wind = createVector(0.05, 0);
    var gravity = createVector(0, 0.1 * mover.mass);

    var c = 0.5;
    var normal = 1;
    var frictionMag = normal * c;
	var friction = p5.Vector.mult(mover.velocity, -1);
	friction.normalize();
	friction.mult(frictionMag);


	mover.addForce(friction);
	mover.addForce(wind);
	mover.addForce(gravity);

	mover.checkEdges();
	mover.update();
	mover.display();
}