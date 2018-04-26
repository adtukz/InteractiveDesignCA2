[Introduction](../)


# Understanding The Pixel Array - Cloud

This example will be using the noise function to create a cloud like effect, by changing each pixel individually, but keeping its value close to its previous value.

```js
var yoff = 0.0;

function setup() {
  frameRate(5);
  createCanvas(800, 600);
  pixelDensity(1);
  noiseDetail(5);
  }

function draw() {
  loadPixels();

  for (var y = 0; y < height; y++ ) {
      var xoff = 0.0;
      for (var x = 0; x < width; x++) {
        var index = (x + y * width) * 4
        var white = map(noise(xoff, yoff), 0, 1, 0, 255);
          pixels[index + 0] = white;
          pixels[index + 1] = white;
          pixels[index + 2] = white;
          pixels[index + 3] = 255;

          xoff += 0.003;
      }
          yoff += 0.003;
  }
    updatePixels();
}
```

[See the code in action!](sketch.html)
