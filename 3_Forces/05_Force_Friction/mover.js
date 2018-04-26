function Mover(m) {

    this.radius = 20;
    this.location = createVector(width/2, height/2);
    this.velocity = createVector(0, 0);
    this.acceleration =createVector(0, 0);
    this.mass = m;
    
    //every frame add the acceleration to the velocity, so that it keeps moving 
    //in the direction given by the force. It is limited to 15 pixels at a time.
    //adds the inital vector also
    this.update = function () {
        this.velocity.add(this.acceleration);
        this.velocity.limit(15);
        this.location.add(this.velocity);
    }

    //draws the ball on the screen
    this.display = function () {
        stroke(45, 52, 54);
        strokeWeight(1);
        fill(9, 132, 227);

        ellipse(this.location.x, this.location.y, this.mass, this.mass);
    }

    //Makes the ball bounce by reversing the velocity depending on which side it hits.
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

    //adds a force vector to move the ball in a direction.
    this.addForce = function(force) {
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }
}