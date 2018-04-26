function getRandomSize() {
  //create randomsizes for each snowflake
  let r = pow(random(0, 1), 3);
  return constrain(r * 32, 2, 32);
}


class Snowflake {

  //constructor contains x, y and img that are passed in upon intialization
  constructor(sx, sy, img) {
    //random width on canvas if nothing is passed into it
    let x = sx || random(width);
    //height between -100 and -10, above canvas if there is nothing passed in
    let y = sy || random(-100, -10);
    //image = to random image given to it
    this.img = img;
    //position = x,y vector
    this.pos = createVector(x, y);
    //velocity stars at 0
    this.vel = createVector(0, 0);
    //acceleration is not yet given, just initalized
    this.acc = createVector();
    //angle starts at 0
    this.angle = 0;
    //direction so that the particle flutters in the air.
    this.dir = (random(-1,1));
    //flutter starts at 0
    this.xOff = 0;
    //random size
    this.r = getRandomSize();
  }

  applyForce(force) {
    //copy the vector for the force into the variable f
    let f = force.copy();
    //multiply f by the size of the snowflake so the bigger they are the more they move
    f.mult(this.r);

    //add the force to the acceleration to move the particles
    this.acc.add(f);
  }

  randomize() {
    //when a snowflake reaches the edge of the canvas it remakes it with a new position so that it isnt a set pattern of movement
    let x = random(width);
    let y = random(-100, -10);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = getRandomSize();
  }

  update() {

    //creates the flutters that the snowflake moves around the canvas as
    this.xOff = sin(this.angle * 2) * 2 * this.r;

    //velocity = acceleration of the particle
    this.vel.add(this.acc);
    //velocity is limited so it doesnt move too fast
    this.vel.limit(this.r * 0.2);

    //if the magnitude is too low make it 1
    if (this.vel.mag() < 1) {
      this.vel.normalize();
    }

    //keeps particles moving
    this.pos.add(this.vel);
    //resets acceleration
    this.acc.mult(0);

    //if the snowflake hits bottom of the screen randomize/reset the snowflake
    if (this.pos.y > height + this.r) {
      this.randomize();
    }

    //if the snowflake if the snowflake moves the wrong way reset it
    if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }

    //if the snowflake if the snowflake moves the wrong way reset it
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    }

    //the angle is equal to angle + direction + veloicty / 100
    //keeps the speed of the particles from going too fast
    this.angle += this.dir * this.vel.mag() / 200;
  }

  render() {
    //renders the snowflake image in the middle and rotates it slighty as its moving to improve how it looks
    push();
    translate(this.pos.x + this.xOff, this.pos.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.img, 0, 0, this.r, this.r);
    pop();
  }
}
