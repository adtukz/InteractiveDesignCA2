[Introduction](.../)  [Vectors](../)  


# Vectors

Creating a circle which moves along the x axis and bounces of each side of the canvas. We redraw the background to make it look as though the circle is moving.

The x position is increased by xSpeed every frame.

We create an if statement to check if the ball touches the edge of the canvas, if it does we reverse xSpeed to change the direction of the ball.


```js
var xSpeed = 2;
var radius = 20;
var x = 400;
var y = 300;


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(178, 190, 195);

  x = x + xSpeed;

  if ((x + radius > width) || (x - radius < 0) ) {
      xSpeed = xSpeed * -1;
  }

  stroke(45, 52, 54);
  strokeWeight(1);
  fill(9, 132, 227);
  ellipse(x, y, radius*2, radius*2);
}

}
```
[See the code in action!](sketch.html)
