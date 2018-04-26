[Introduction](../)

# Random Walker with 9 Outcomes
The first half of the below has not changed from Random Walker with 4 outcomes.
The canvas layout and background is the same, however we now are increasing the amount of posibilities for the movement of the walker.  

The part of the code which is changed is that we are now potentially moving the walker on both axis. We do this by creating a variable stepx and stepy, and creating a random number for them. Using the floor method again the results are either -1,0 or 1. This makes 9 different posibilities. The walker can either move forward backward, or stay in the same spot on the canvas, for each axis call to the step function. The walker is also constrained to the canvas width and height so the walker will not leave the canvas.


```js
this.step = function () {
  var stepx = floor(random(-1, 2));
  var stepy = floor(random(-1, 2));

  this.x = this.x + stepx;
  this.y = this.y + stepy;

  this.x = constrain(this.x, 0, width);
  this.y = constrain(this.y, 0, height);
  }
}
```

[See the Code in action!](index.html)
