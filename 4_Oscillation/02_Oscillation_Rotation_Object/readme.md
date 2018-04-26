[Forces](../)


# Oscillation - Rotating Object

This time we are doing the same but using an object that rotates instead.

To do this we take the mover class from the previous examples, and modify it.

We must add angle, velocity and acceleration just like the previous example.

We then in thje update function make the angle = to the velocity so that it spins.

In display we now must translate the axes to the center of the object and the rotate them so that it spins.

```js
function Mover(m) {
    this.angle = 0;
    this.v = 0;
    this.a = 0.05;

    this.update = function () {
      this.a = this.velocity.x;
      this.v += this.a;
      this.v = constrain(this.v, -0.05, -0.05);
      this.angle += this.v;
    }

    this.display = function () {
        push();
        translate(this.location.x, this.location.y);
        rotate(this.angle);
        rectMode(CENTER);
        rect(0,0,this.mass,this.mass);
        pop();
    }
}
```

[See the code in action!](sketch.html)