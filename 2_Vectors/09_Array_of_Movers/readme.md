[Introduction](../)

# Array of Movers

Here we have created a seperate js for a class called Mover. This allows us to instantiate many Mover objects within our canvas with the simple for loop in the setup of sketch9.js.

We use sketch9.js to spawn 15 Mover objects and have them move around our canvas, using the .update(),.display() and .checkEdges() custom functions within the Mover object.

By changing the for loop to be i < x we could create x number of mover objects.

###sketch9.js
```js
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
```

The mover object is below. The goal is to have a circle which follows the mouse around the canvas, however it does so using vectors, so it does not move directly to the mouse, it moves toward the mouse at all times. This means it moves loosely following the mouse. and it never stops moving.

To do this we create a vector at a random spot on the canvas(random height and width for the x and y positions). We give it an initial velocity vector. In the update function we create a vector to the mouse co-ordinates. The acceloration of our Mover's is relative to the distance the mouse is from the Mover. We limit the velocity to 5, so that the circles do not move too quickly, and glide towards the mouse.

In the display function we are drawing the circle, giving them the stroke, strokeWeight and fill required, as well as the co-ordinates at which to draw our circle.

In checkEdges(), we are checking to make sure the circle does not leave the canvas. This allows us to see the circles at all times, if we didn't do this they would leave the canvas if the mouse did.

###Mover.js
```js
var Mover = function () {

    this.radius = 20;
    this.location = createVector(random(width-(this.radius*2)), random(height-(this.radius*2)));
    this.velocity = createVector(1, 5);
    this.acceleration = createVector();
    
    this.update = function () {
        var mouse = createVector(mouseX, mouseY);

        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.setMag(0.2);
   
        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.location.add(this.velocity);
    }

    this.display = function () {
        //pick a brush
        stroke(45, 52, 54);
        strokeWeight(1);
        fill(9, 132, 227);

        //And draw an ellipse at the new location vector points
        ellipse(this.location.x, this.location.y, 40, 40);
    }

    this.checkEdges = function () {
        if (this.location.x + this.radius > width || this.location.x - this.radius < 0) {
            this.velocity.x = this.velocity.x * -1;
        }
        if (this.location.y + this.radius > height || this.location.y - this.radius < 0) {
            this.velocity.y = this.velocity.y * -1;
        }
    }
}
```
[See the code in action!](sketch.html)