var movers = [];

function setup() {
  	createCanvas(800,600);
	for (var i = 0; i < 15; i++){
	  movers[i] = new Mover();
	}
  	mover = new Mover();  
}

function draw() {
  	background(178, 190, 195);
	for (var i = 0; i < movers.length; i++){
	  movers[i].update();
	  movers[i].display();
	  movers[i].checkEdges();
  	}
}