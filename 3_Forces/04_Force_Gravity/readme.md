[Forces](../)


# Applying Force - Gravity

Gravity is uneffected by the mass of the object. Gravity is the force the earth attracts objects with. Weight is the sum of mass times gravity.

For this exampple we give our balls co-ordinates so that they can be spread out. I have created a loop to spawn multiple mover objects. They are spread across the x axis. 

Gravity force is also changed to have the mass included, so when it is divided by the mass in the object, it is equaled out to be uneffected by mass.

Below is the loop to create the movers on the canvas spread out.
```js
var movers = [];

var noOfMovers = 15;

function setup() {
	createCanvas(800,600);
	for(var i = 0; i < noOfMovers; i ++) {
		movers[i] = new Mover(floor(random(10,50)), 50+ ((width-100)/noOfMovers * i), 150);
	}
}
```


Below is the loop to draw all the objects, here we create gravity and multiply it by the objects mass so that the objects fall uniformly with each other.
```js
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
```
[See the code in action!](sketch.html)
