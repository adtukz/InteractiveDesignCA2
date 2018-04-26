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
