[Introduction](../)
# Gaussian Distribution
The Gaussian Distribution allows you to get the standard deviation of 0 to 1. We assign this to xLoc.

This allows us to get the placement of circles to be drawn on the canvas to match the standard deviation. 68% of the circles will be drawn within one standard deviation. 97% within two standard deviations.

We make the center of our canvas the center of the deviations so that we can see where the circles will be drawn. The middle of the canvas should be filled the most. The circles will spread out according to standard deviations.

```js
function draw() {
  var xloc = randomGaussian();

  var sd = 80;
  var mean = width /2;
  xloc = (xloc * sd) + mean;

  fill(45,52,54);
  noStroke();
  ellipse(xloc, height / 2, 16, 16);
}
```

[See the code in action!](sketch.html)
