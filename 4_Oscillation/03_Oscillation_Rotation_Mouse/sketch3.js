var movers = [];

var noOfMovers = 20;

function setup() {
	createCanvas(800,600);

	for(var i = 0; i < noOfMovers; i++) {
		movers[i] = new Mover(floor(random(10,30)));
	}
}

function draw() {
	background(178, 190, 195);

	for(var i = 0; i < movers.length; i++) {
		movers[i].checkEdges();
		movers[i].update();
		movers[i].display();
	}

}