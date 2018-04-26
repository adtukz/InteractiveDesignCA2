var Mover = function () {

    this.radius = 20;
    this.location = createVector(random(width-(this.radius*2)), random(height-(this.radius*2)));
    this.velocity = createVector(1, 5);
    this.acceleration =createVector();
    
    this.update = function () {
        var mouse = createVector(mouseX, mouseY);

        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.setMag(0.2);
   
        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.location.add(this.velocity);
    }

    this.display = function () {
        //pick a brush
        stroke(45, 52, 54);
        strokeWeight(1);
        fill(9, 132, 227);

        //And draw an ellipse at the new location vector points
        ellipse(this.location.x, this.location.y, 40, 40);
    }

    this.checkEdges = function () {
        if (this.location.x + this.radius > width || this.location.x - this.radius < 0) {
            this.velocity.x = this.velocity.x * -1;
        }
        if (this.location.y + this.radius > height || this.location.y - this.radius < 0) {
            this.velocity.y = this.velocity.y * -1;
        }
    }
}