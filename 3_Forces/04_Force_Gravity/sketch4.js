var movers = [];

var noOfMovers = 15;

function setup() {
	createCanvas(800,600);
	for(var i = 0; i < noOfMovers; i ++) {
		movers[i] = new Mover(floor(random(10,50)), 50+ ((width-100)/noOfMovers * i), 150);
	}
}

function draw() {

	background(178, 190, 195);

	for(var i = 0; i < noOfMovers; i++) {
		var gravity = createVector(0, 0.01 * movers[i].mass);

		movers[i].addForce(gravity);

		movers[i].checkEdges();
		movers[i].update();
		movers[i].display();
	}	
}