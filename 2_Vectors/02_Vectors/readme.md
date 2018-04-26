[Introduction](.../)

# Vectors - 2 directions

Now the circle moves along the x and y axes. Bouncing around the screen, we now have two if statements checking for the ball bouncing off either axis.

```js
var x = 400;
var y = 300;
var xSpeed = 3;
var ySpeed = 6;
var radius = 20;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(178, 190, 195);

  // Add the current speed to the position.
  x = x + xSpeed;
  y = y + ySpeed;

  if (( x + radius > width) || (x - radius < 0)) {
    xSpeed = xSpeed * -1;
  }
  if (( y + radius > height) || (y - radius < 0)) {
    ySpeed = ySpeed * -1;
  }
 
  //Display circle at x position
  stroke(45, 52, 54);
  strokeWeight(1);
  fill(9, 132, 227);
  ellipse(x, y, radius*2, radius*2);
}

```

[See the code in action!](sketch.html)
