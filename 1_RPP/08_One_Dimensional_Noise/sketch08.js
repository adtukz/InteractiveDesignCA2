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
