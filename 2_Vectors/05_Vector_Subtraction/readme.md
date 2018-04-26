[Introduction](.../)  [Vectors](../)


# Vector Subtraction

Here we are creating a vector of the mouse co-ordinates and subtracting a vector created in the center. By translating to the center of the canvas this creates a line which follows the mouse around the canvas.

```js
function setup() {
    createCanvas(800, 600);
}

function draw() {
  background(178, 190, 195);

  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width / 2, height / 2);
  var vectorLine = mouse.sub(center);

  translate(width / 2, height / 2);
  strokeWeight(1);
  stroke(9, 132, 227);
  line(0, 0, vectorLine.x, vectorLine.y);
}

```

[See the code in action!](sketch.html)
