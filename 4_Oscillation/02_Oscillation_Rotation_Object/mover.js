function Mover(m) {

    this.location = createVector(width/2, height/2);
    this.velocity = createVector(0, 0);
    this.acceleration =createVector(0, 0);
    this.mass = m;

    this.angle = 0;
    this.v = 0;
    this.a = 0.05;
    
    //every frame add the acceleration to the velocity, so that it keeps moving 
    //in the direction given by the force. It is limited to 15 pixels at a time.
    //adds the inital vector also
    this.update = function () {
        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.location.add(this.velocity);
        this.acceleration.mult(0);

        this.a = this.velocity.x;
        this.v += this.a;
        this.v = constrain(this.v, -0.05, -0.05);
        this.angle += this.v;
    }

    //draws the square on the screen
    this.display = function () {
        stroke(45, 52, 54);
        strokeWeight(1);
        fill(9, 132, 227);

        push();
        translate(this.location.x, this.location.y);
        rotate(this.angle);
        rectMode(CENTER);
        rect(0,0,this.mass,this.mass);
        pop();
    }

    //Makes the square bounce by reversing the velocity depending on which side it hits.
    this.checkEdges = function () {
        if (this.location.x + this.mass / 2 >= width) {
          this.velocity.x = this.velocity.x * -1;
          this.location.x = width - this.mass / 2;
        }
        if (this.location.x - this.mass / 2 <= 0) {
          this.velocity.x = this.velocity.x * -1;
          this.location.x = 0 + this.mass / 2;
        }

        if (this.location.y + this.mass / 2 >= height) {
          this.velocity.y = this.velocity.y * -1;
          this.location.y = height - this.mass / 2;
        }
        if (this.location.y - this.mass / 2 <= 0) {
          this.velocity.y = this.velocity.y * -1;
          this.location.y = 0 + this.mass / 2;
        }
    }

    //adds a force vector to move the square in a direction.
    this.addForce = function(force) {
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }
}