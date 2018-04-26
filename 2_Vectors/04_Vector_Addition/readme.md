[Introduction](.../)  [Vectors](../)


# Vector Addition

Here we are adding a vector, velocity, into our object, so that it moves the direction of the vector.

```js
var position;
var velocity;
var radius = 20;

function setup() {
  createCanvas(800, 600);
  position = createVector(width/2, height/2);
  velocity = createVector(3, 6);  
}

function draw() {
  background(178, 190, 195);

  //Add the current speed to the position.
  position.add(velocity);

  if ((position.x + radius >= width) || (position.x -  radius <= 0)) {
    velocity.x = velocity.x * -1;
  }
  if ((position.y + radius >= height) || (position.y - radius <= 0)) {
    velocity.y = velocity.y * -1;
  }
    //Display circle at x position
    stroke(45, 52, 54);
    strokeWeight(1);
    fill(9, 132, 227);
    ellipse(position.x, position.y, radius*2, radius*2);
}
```

[See the code in action!](sketch.html)
