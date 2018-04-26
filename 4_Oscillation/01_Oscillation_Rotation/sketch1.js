var angle = 0;
var a = 0.05;
var v = 0;

function setup() {
	createCanvas(800,600);
}

function draw() {
	background(178, 190, 195);

	stroke(45, 52, 54);
	push();
	translate(width/2,height/2);
	rotate(angle);
	stroke(45, 52, 54);
	strokeWeight(5);
	line(-50,0,50,0);
	noStroke();
	fill(9, 132, 227);
	ellipse(50,0,20,20);
	ellipse(-50,0,20,20);
	pop();

	v = v + a;
	v = constrain(v, 0, 0.05);
	angle = angle + v;
}