var walker;

function setup() {
    createCanvas(640, 320);
    background(178, 190, 195);
    walker = new Walker();
}

function draw() {
  walker.render();
  walker.step();
}

function Walker() {
  this.x = width / 2;
  this.y = height /2;

  this.render = function (){
    stroke(0);
    point(this.x, this.y);
  };

  this.step = function () {
    var r = random (1);
      //A 40% of moving to the right;
      if (r < 0.4) {
        this.x++;
      } else if (r < 0.6) {
          this.x--;
      } else if (r < 0.8) {
          this.y++;
      } else {
          this.y--;
      }
      this.x = constrain(this.x, 0, width-1);
      this.y = constrain(this.y, 0, height-1);
    };
  }
