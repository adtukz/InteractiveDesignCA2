var walker;

function setup() {
    createCanvas(320, 640);
    background(178, 190, 195);
    walker = new Walker();
}

function draw() {
  walker.render();
  walker.step();
}

function Walker() {
  this.x = width / 2; //Dividing the canvas width by 2
  this.y = height /2; //Dividing the canvas height by 2

  this.render = function (){
    stroke(0); // 
    point(this.x, this.y);
  }

  this.step = function () {
    var stepx = floor(random(-1, 2));
    var stepy = floor(random(-1, 2));

    this.x = this.x + stepx;
    this.y = this.y + stepy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

}
