[Introduction](../)


# Understanding the Pixel Array - Gradient

Here are changing the pixels, and creating a gradient. The pixels positions relates to the opacity, so the close the number to 0 the lower the colour of the pixel, this creates a gradient effect.
```js
function setup() {
  createCanvas(300, 200);
}

function draw() {
  loadPixels();

  for (var y = 0; y < height; y++ ) {
      for (var x = 0; x < width; x++) {
        var index = (x + y * width) * 4
          pixels[index + 0] = 9;
          pixels[index + 1] = 132;
          pixels[index + 2] = 227;
          pixels[index + 3] = x+y;
      }
  }
    updatePixels();
}
```

[See the code in action!](sketch.html)