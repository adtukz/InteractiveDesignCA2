[Introduction](../)


# Understanding the Pixel Array

Here we are changing a particular pixel on the canvas.

the pixel is located at (18)*300, which is the 5400th pixel on the screen. We then target the rgba values of that pixel. Setting the pixels rgba to (9,132,227,255). A blue colour, so that we can see which pixel we have changed.
We then call updatePixels(); to change the pixel to the colour we have declared.

```js
function setup() {
  createCanvas(300, 200);
  background(178, 190, 195);
}


function draw() {
  loadPixels();

  var index = (18)*300
    pixels[index+0] = 9;
    pixels[index+1] = 132;
    pixels[index+2] = 227;
    pixels[index+3] = 255;

  updatePixels();
}

```

[See the code in action!](index.html)
