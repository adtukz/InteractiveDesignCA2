[Introduction](../)


# Understanding the Pixel Array - White Noise

In this example we are creating an old tv effect, where there is white noise being displayed. To do this we update the pixels with a random number, between 0 and 255. This means each pixel is a varying level of grey. this creates a white noise effect due to the contrast between each pixel next to each other.

```js
function setup() {
  createCanvas(300, 200);
  }


function draw() {
  loadPixels();

  for (var y = 0; y < height; y++ ) {
      for (var x = 0; x < width; x++) {
        var index = (x + y * width) * 4
        var white = floor(random(255));
          pixels[index + 0] = white;
          pixels[index + 1] = white;
          pixels[index + 2] = white;
          pixels[index + 3] = 255;
      }
  }
    updatePixels();
}
```

[See the code in action!](sketch.html)