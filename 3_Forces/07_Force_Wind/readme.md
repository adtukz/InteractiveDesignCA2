[Forces](../)


# Applying Force - Wind Chime

In this example we are creating a wind chime. The wind chime will move our mover circles in the direction it is pointing in.

To do this I have created a wind chime at x = 55, y = 55.
It has a random magnitude between 0 and 1.
It has a start angle of 0, and an end angle of 90.

```js
chime = new WindChime(55,55,random(1), 0, 90);
```


Below is the WindChime function. Here we are creating the wind chime and placing it onto the canvas. 

In update we are creating the direction of the windchime, however we use noise so that the chime slightly changes direction and moves the balls around the scren within the specified angles, but slightly randomly. The windchime is a vector force applied to the movers so that they move the direction it is point in.

In display we are creating the visual part of the chime. It is a circle with an arrow in it that points in the direction of the wind. Below the circle displays the magnitude and direction of the wind. This is a visual for the person viewing it to see objects being effected by it but also being able to see the percise info about the force.
```js
function WindChime(x, y, mag, s, e) {

  this.xPos = x;
  this.yPos = y;
  this.windMag = mag;
  this.startAngle = s;
  this.endAngle = e;
  this.windVec = createVector();
  this.time = 1000;

  this.update = function() {

    this.windDir = map(noise(this.time), 0, 1, this.startAngle, this.endAngle);
    this.windVec = p5.Vector.fromAngle(radians(this.windDir), this.windMag);
    this.time = this.time + 0.01;
  }

  this.display= function() {
    push();
    translate(this.xPos, this.yPos);
    scale(0.5, 0.5);
    fill(0);
    noStroke();
    textSize(20);
    textAlign(CENTER);
    text("Magnitude: " + nf(this.windMag, 1, 2), 0, 100);
    text("Wind Direction: " + nf(this.windDir, 1, 2), 0, 125);
    stroke(0);
    strokeWeight(4);
    fill(255, 0);
    ellipse(0, 0, 150, 150);
    rotate(this.windVec.heading());
    line(-65, 0, 65, 0);
    fill(0);
    triangle(40, -15, 65, 0, 40, 15);
    pop();
  }
}
```

We have changed the checkEdges function so that the balls spawn on the oposite side of the scren if they hit an edge, this makes the balls apepar infinite and keep scrolling across the screen without having to create new objects when they reach the edges.
```js
//Makes the ball bounce by reversing the velocity depending on which side it hits.
this.checkEdges = function() {
    if (this.location.x + (this.mass * 5) <= 0) {
        this.location.x = width + (this.mass * 5);
    } 
    else if (this.location.x - (this.mass * 5) >= width) {
        this.location.x = 0 - (this.mass * 5);
    } 
    else if (this.location.y + (this.mass * 5) <= 0) {
        this.location.y = height + (this.mass * 5);
    } 
    else if (this.location.y - (this.mass * 5) >= height) {
        this.location.y = 0 - (this.mass * 5);
    }
}
```

In sketch7.js we are creating an array to hold the number of movers. We are creating 50 movers for this example.

We also create the chime in the setup, and give it a position of 50, 50 so it is in the top left of the screen. The magnitude is random every time we refresh the page.
```js
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
```

[See the code in action!](sketch.html)