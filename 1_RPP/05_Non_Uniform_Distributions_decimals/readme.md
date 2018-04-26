[Introduction](../)
# Uniform Distribution of Numbers
The only change in this is in the step function

We get a random number from zero to one which is not floored, so it can be any decimal number from 0 to 1. This is another way to manipulate the random aspect.
```js
this.step = function () {
  var r = random (1);
    //A 40% of moving to the right;
    if (r < 0.4) {
      this.x++;
    } else if (r < 0.6) {
        this.x--;
    } else if (r < 0.8) {
        this.y++;
    } else {
        this.y--;
    }
  };

```

[See the code in action!](sketch.html)
