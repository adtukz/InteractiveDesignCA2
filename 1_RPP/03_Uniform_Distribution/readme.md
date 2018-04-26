[Introduction](../)

# Uniform Distribution of Numbers

We are declaring two global variables at the start of the sketch. This allows us to use them further on in the setup and draw methods.

Within in the setup() we have created a canvas with a width and height.  
There is a loop that which populates the randomCounts array, with value is equal to the global variable total.

```js
  for (var i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
```

The draw function we are redrawing the background on each frame.  This makes the objects look as though they are moving.

Each time the draw function is called we use the floor method with a random number between zero and total we then increases the size of the rectangle located at the random number selected. So that the rectangles being drawn will randomly grow in size.

We are givin a strokeWeight of two and setting the background of the canvas to grey.

The below code loops 20 times this is for each bar and it creates the rectangle with height taken from the randomCounts array for the object, which we increase each frame, above.

The width of each rectangle is the width of the page divided by the total number of rectangles.

```js
function draw() {
  background(127);
  var index = floor(random(total));
  randomCounts[index]++;

//Draw a rectangle to graph results
stroke(0);
strokeWeight(2);
fill(255);

var w = width/randomCounts.length;

for (var x = 0; x < randomCounts.length; x++) {
  rect(x*w, height-randomCounts[x], w-1,
      randomCounts[x]);
    }

```

[See the code in action!](sketch.html)