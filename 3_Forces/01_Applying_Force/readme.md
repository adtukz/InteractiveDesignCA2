[Forces](../)


# Applying Force

To apply a force to an object, we must create a function in the object to add the force to its acceleration. We must also create the force in our sketch and apply it in the draw so the object is being effected by the force every frame.

Below is sketch1.js. Here we have created "wind" force. It is a vector which will move the mover 0.3x and 0.03y every frame. pushing it to the right and down.

We then check if the mover hits the edges, and it bounces back so it will not leave the canvas.

```js
function draw() {

  var wind = createVector(0.3, 0.03);

  mover.addForce(wind);

  mover.checkEdges();
  mover.update();
  mover.display();
}
```

Function which checks if the ball is hitting an edge of the canvas
```js
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
```

Function to addforce to the acceleration.
```js
//adds a force vector to move the ball in a direction.
this.addForce = function(force) {
    this.acceleration = force;
}
```

[See the code in action!](index.html)
