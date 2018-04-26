function Mover(m) {

    this.location = createVector(floor(random(width)), floor(random(height)));
    this.velocity = createVector(1, 3);
    this.acceleration =createVector(0, 0);
    this.mass = m;

    this.update = function () {
        var mouse = createVector(mouseX, mouseY);
        var direction = p5.Vector.sub(mouse, this.location);
        direction.normalize();
        direction.mult(0.2);
        this.acceleration = direction;

        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.location.add(this.velocity);
    }

    this.display = function () {
        stroke(45, 52, 54);
        strokeWeight(1);
        fill(9, 132, 227);

        var angle = this.acceleration.heading();
        push();
        translate(this.location.x, this.location.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.mass,this.mass);
        pop();
    }

    this.checkEdges = function () {
        if (this.location.x + this.mass / 2 >= width) {
          this.velocity.x = this.velocity.x * -1;
        }
        if (this.location.x - this.mass / 2 <= 0) {
          this.velocity.x = this.velocity.x * -1;
        }

        if (this.location.y + this.mass / 2 >= height) {
          this.velocity.y = this.velocity.y * -1;
        }
        if (this.location.y - this.mass / 2 <= 0) {
          this.velocity.y = this.velocity.y * -1;
        }
    }

}