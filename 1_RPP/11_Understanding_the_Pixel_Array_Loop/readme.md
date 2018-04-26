[Introduction](../)


# Understanding the Pixel Array - Loop

In this instance we make a loop to select every pixel on the screen and change all of their rgba values. This means we are essentially changing the entire canvas to the blue colour, just doing it individually, rather than creating a rect or changing the background.

```js
function setup() {
  createCanvas(300, 200);
}

function draw() {
  loadPixels();
  for (var y = 0; y < height; y++ ) {
      for (var x = 0; x < width; x++) {
        var index = (x + y * width) * 4
          pixels[index+0] = 9;
          pixels[index+1] = 132;
          pixels[index+2] = 227;
          pixels[index+3] = 255;
      }
  }
  updatePixels();
}
```

[See the code in action!](sketch.html)
