[Forces](../)


# Applying Force - Friction

Friction is a dissipative force. This means the total energy of the system decreases if the object is in motion.

Friction = -u * N * v
Friction = -1 * coeffecient of friction * normal * velocity

Below we are writing this for our mover object.
C is the coeffecient.
Normal is the normal
Mover.velocity is the velocity.
```js

var m = mover.mass;

var c = 0.5;
var normal = 1;
var frictionMag = normal * c;
var friction = p5.Vector.mult(mover.velocity, -1);
friction.normalize();
friction.mult(frictionMag);

```

[See the code in action!](index.html)

