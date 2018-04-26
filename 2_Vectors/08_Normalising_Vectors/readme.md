[Introduction](../) [Vectors](../)

# Normalision Vectors

In this example we are again drawing a line that follows the mouse around the canvas, using a vector.

This time we are normalizning the vector, which reduces it to 1. We then multiply it by a quarter of the height, so that we can see the line following the mouse more easily.

```js
function draw() {
  background(178, 190, 195);

  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width / 2, height / 2);
  var vectorLine = mouse.sub(center);
  
 vectorLine.normalize();
 vectorLine.mult(height/4);

  translate(width / 2, height / 2);
  strokeWeight(1);
  stroke(9, 132, 227);
  line(0, 0, vectorLine.x, vectorLine.y);
}
```
[See the code in action!](sketch.html)
