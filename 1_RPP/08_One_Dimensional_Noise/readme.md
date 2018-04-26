[Introduction](../)

# One Dimensional Noise
Here we are introducing Perlin noise, named after Ken Perlin. Ken invented Perlin noise to be used to generate movie effects for the movie Tron in the 1980's.

We are drawing a circle that movies solely on the x axis. It has an low opacity so it leaves a trail. The Perlin noise means it will move on the x axis in a random back and forth movement.

Using the noise() function we get a number returned similar to the previous number, this is what creates the back and forth movement, as it doesnt randomly jump to a new co-ordinate, its co-ordinate is related back to its previous spot on the axis.
```js
var walker;

function setup() {
    createCanvas(900, 600);
    walker = new Walker();
    background(178, 190, 195);
}

function draw() {
    noStroke();
    fill(178, 190, 195, 15);
    rect(0, 0, width, height);
    walker.render();
    walker.step();
}

function Walker() {
    this.x = width / 2;
    this.xOff = random(width);

    this.render = function () {
      noStroke();
      fill(9, 132, 227, 50);
      ellipse(this.x, height/2, 50, 50)
    }
    this.step = function(){
      this.x = map(noise(this.xOff), 0, 1, 0, width);
      this.xOff += 0.003;
    }
}
```

[See the code in action!](sketch.html)
