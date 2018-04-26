var mover;
var liquid;

function setup() {
	createCanvas(800,600);

	mover = new Mover(width/2, 60,0,0,0,0,5);
	liquid = new Liquid(0, height/2, width, height/2, 0.4);
}

function draw() {

	background(178, 190, 195);

	liquid.display();

	if(liquid.contains(mover)){
		mover.addForce(liquid.calculateDrag(mover));
	}

	var gravity = createVector(0, 0.1 * mover.mass);

	mover.addForce(gravity);
	mover.checkEdges();
	mover.update();
	mover.display();
}