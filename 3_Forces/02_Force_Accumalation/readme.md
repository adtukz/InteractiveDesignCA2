[Forces](../)


# Applying Force - Accumalation

In this exampple we are creating two froces and adding them to our mover. This is done by changing the movers addForce function. We also add a new force into the draw method and apply it to the mover.

```js
function draw() {
  var wind = createVector(0.3, 0.03);
  var gravity = createVector(0,0.03);

  mover.addForce(wind);
  mover.addForce(gravity);
}
```

Function to addforce to the acceleration. This allows us to add multiple forces as we are adding it to the acceleration instead of setting the acceleration to equal the force given.
```js
//adds a force vector to move the ball in a direction.
this.addForce = function(force) {
    this.acceleration.add(force);
}
```

[See the code in action!](sketch.html)