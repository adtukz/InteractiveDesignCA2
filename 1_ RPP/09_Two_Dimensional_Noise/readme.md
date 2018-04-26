[Introduction](../)

# Two Dimensional Noise - Perlin Noise

In this we are moving the circle on a second axis, the y axis. The step function will get new positions on the axes.

The circle gros the further along each axes it goes.

```js
var walker;

function setup() {
  createCanvas(900, 600);
  walker = new Walker();
  background(178, 190, 195);
}

function draw() {
  fill(178, 190, 195, 15);
  rect(0, 0, width, height);
  walker.step();
  walker.render();
}

function Walker() {
  this.position = createVector(width / 2, height / 2);
  this.noff = createVector(floor(random(width)), floor(random(height)));

  this.render = function (){
    noStroke();
    fill(9, 132, 227);
    ellipse(this.position.x, this.position.y, map(noise(this.noff.x), 0, 1, 20, 200), map(noise(this.noff.x), 0, 1, 20, 200));

  }
    this.step = function () {
      this.position.x = map(noise(this.noff.x), 0, 1, 0, width);
      this.position.y = map(noise(this.noff.y), 0, 1, 0, height);
      this.noff.add(0.003, 0.003);
    }
}
```

[See the code in action!](index.html)
