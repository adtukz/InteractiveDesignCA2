[Forces](../)


# Applying Force - Mass

In this exampple we are changing the mover so that the forces are effected by the mass of the mover, so the heavier the mover the less the force will effect the mover.

To show this I have created two balls, one with a mass of 50, one with a mass of 150, the smaller ball is more greatly effected by the force.
```js
//adds a force vector to move the ball in a direction.
this.addForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
}
```

[See the code in action!](index.html)
