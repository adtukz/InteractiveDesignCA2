[Introduction](../)

# Gaussian Distribution
The main difference with this, is we are now spreading the circles across both the x and y axis. So they should spread out in standard deviations from the middle of the canvas.

We use xloc and yloc for the two randomGausian();

xsd and ysd are used for the standard deviation.

xMean and yMean are used to center it on our canvas.

We then calculate the x and y position of each circle before it is drawn, in the xloc and yloc variables.

The circles will then be distributed across the canvas in a standard deviation, most appearing towards the center and outliers towards the edge of the canvas.

```js
function draw() {
  var xloc = randomGaussian();
  var yloc = randomGaussian();

  var xsd = 120;
  var ysd = 50;

  var xMean = width / 2;
  var yMean = height / 2;

  xloc = (xloc * xsd) + xMean;
  yloc = (yloc * ysd) + yMean;

  fill(45, 52, 54, 20);
  noStroke();
  ellipse(xloc, yloc, 12, 12);
}
```
[See the code in action!](sketch.html)
