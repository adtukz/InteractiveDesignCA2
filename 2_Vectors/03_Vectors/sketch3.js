var position;
var velocity;
var radius = 20;

function setup() {
    createCanvas(800, 600);
    position = createVector(width/2, height/2);
    velocity = createVector(2, 8);
}

function draw() {
    background(178, 190, 195);

    //Add the current speed to the position
    position.x = position.x + velocity.x;
    position.y = position.y + velocity.y;

    if ((position.x + radius > width) || (position.x - radius < 0)) {
      velocity.x = velocity.x * -1;
    }
    if ((position.y + radius > height) || (position.y - radius < 0)) {
      velocity.y = velocity.y * -1;
    }

    //Display cirlce at x position
    stroke(45, 52, 54);
    strokeWeight(1);
    fill(9, 132, 227);
    ellipse(position.x, position.y, radius*2, radius*2);
}