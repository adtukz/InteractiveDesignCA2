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
