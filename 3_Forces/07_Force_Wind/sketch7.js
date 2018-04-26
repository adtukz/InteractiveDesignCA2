var movers = [];

var noOfMovers = 50;

function setup() {
	createCanvas(800,600);

	for(var i = 0; i < noOfMovers; i++) {
		movers[i] = new Mover(floor(random(width)), floor(random(height)),0,0,0,0, random(0.5,5));
	}

	chime = new WindChime(50,50,random(0.5), 0, 90);
}

function draw() {
	background(178, 190, 195, 200);

	for(var i = 0; i < movers.length; i++) {
		movers[i].addForce(chime.windVec);
		movers[i].checkEdges();
		movers[i].update();
		movers[i].display();
	}


	chime.update();
	chime.display();
}