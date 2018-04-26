var r = 0;
var a = 0;

function setup() {
	createCanvas(800,600);
	background(178, 190, 195);
}

function draw() {
	var x = r *  cos(a);
	var y = r * sin(a);

	noStroke();
	fill(9, 132, 227); 
	ellipse(x + width/2,y + height/2, 10, 10);

	a += 0.05;
	r += 0.1;
}