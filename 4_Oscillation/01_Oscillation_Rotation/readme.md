[Forces](../)


# Oscillation - Rotation

In this example we are creating a two circles at the end of a line.

We then spin line and circles, by rotating the canvas.
To do this we first initialize an angle, acceleration and velocity variables.

In draw we then draw the line and circles.
We translate the center point of the canvas to the middle, this means when we rotate the drawing it rotates around the center of the canvas.

We then draw our line and circles after rotate so that they rotate every frame, by increasing  the angle. 

Velocity is equal to velocity + acceleration so that it spins continuously.
We constrain it so that it is not too fast and you can see it.
the angle is then equal to angle + velocity so it spins around.

```js
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
```

[See the code in action!](sketch.html)