var walker; //Declaring the walker

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
  this.x = width/2;
  this.y = height/2;

  this.render = function(){
      stroke(0);
      point(this.x, this.y);
  }
    this.step = function() {
      var choice = floor(random(4));
      if (choice === 0) {
        this.x++;
      }else if (choice === 1) {
        this.x--;
      }else if (choice === 2) {
        this.y++;
      }else {
        this.y--;
      }
    }
}
