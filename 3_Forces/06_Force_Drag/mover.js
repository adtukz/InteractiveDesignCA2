function Mover(x, y, vx, vy, ax, ay, m) {

    this.location = createVector(x, y);
    this.velocity = createVector(vx, vy);
    this.acceleration =createVector(ax, ay);
    this.mass = m;
    
    //every frame add the acceleration to the velocity, so that it keeps moving 
    //in the direction given by the force. It is limited to 15 pixels at a time.
    //adds the inital vector also
    this.update = function () {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }

    //draws the ball on the screen
    this.display = function () {
        stroke(45, 52, 54);
        strokeWeight(1);
        fill(9, 132, 227);

        ellipse(this.location.x, this.location.y, this.mass*10, this.mass*10);
    }

    //Makes the ball bounce by reversing the velocity depending on which side it hits.
    this.checkEdges = function () {
        if (this.location.x + this.mass * 10 / 2 >= width) {
          this.velocity.x = this.velocity.x * -1;
          this.location.x = width - this.mass / 2;
        }
        if (this.location.x - this.mass * 10 / 2 <= 0) {
          this.velocity.x = this.velocity.x * -1;
          this.location.x = 0 + this.mass / 2;
        }

        if (this.location.y + this.mass * 10 / 2 >= height) {
          this.velocity.y = this.velocity.y * -1;
          this.location.y = height - this.mass * 10 / 2;
        }
        if (this.location.y - this.mass * 10 / 2 <= 0) {
          this.velocity.y = this.velocity.y * -1;
          this.location.y = 0 + this.mass / 2;
        }
    }

    //adds a force vector to move the ball in a direction.
    this.addForce = function(force) {
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }
}