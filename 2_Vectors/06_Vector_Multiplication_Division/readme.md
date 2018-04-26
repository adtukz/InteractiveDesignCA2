[Introduction](.../) [Vectors](../)

# Vector Multiplication Division

This time we are doing the same as the last example, except we are using mult instead of sub. This means we get a line that is half way to where the mouse is placed on the canvas. As we are multiplying it by 0.5, a half.

```js
function draw() {
  background(178, 190, 195);

  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width / 2, height / 2);
  var vectorLine = mouse.sub(center);
  vectorLine.mult(0.5);

  translate(width / 2, height / 2);
  strokeWeight(1);
  stroke(9, 132, 227);
  line(0, 0, vectorLine.x, vectorLine.y);
}
}
```

[See the code in action!](index.html)
