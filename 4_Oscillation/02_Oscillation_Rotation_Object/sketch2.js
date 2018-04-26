var mover;

function setup() {
	createCanvas(800,600);

	mover = new Mover(50);
}

function draw() {
	background(178, 190, 195);

	var force = createVector(1,3);

	mover.addForce(force);

	mover.checkEdges();
	mover.update();
	mover.display();
}