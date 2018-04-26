[Forces](../)


# Oscillation - Spiral

This time we are creating an ellipse which rotates around away from the center of the canvas in a spiral.

To do this we create two variables rotation and angle.(r + a)

We then draw the canvas and backround in setup, so that we can see the circle rotating, by not drawing over it every frame

In draw we make the x and y equal to r * cos/sin of the angle. This is how the circle rotates. as the angle increases the x and y change.

We then draw the circle in the middle + x/y so it moves around.

```js
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
```

[See the code in action!](index.html)