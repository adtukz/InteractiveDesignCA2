[Introduction](../)
# Uniform Distribution of Numbers
What is the uniform of Distribution of numbers if the system has a certain number of outcomes, what is the possibility of the same number coming out twice.

The below code we are setting up an array called probArray. Within this array we are setting particular outcomes. 1, 2 and 3 are the potential outcomes. There is a 40% chance of 1, 20% chance of 2 and 40% chance of 3 being the outcome.

We then get a random number by going to an random index of the array, and taking the number associated with that index. This makes it less random, as the numbers have a set chance of being selected.

```js
this.step = function () {
    var probArray = [];
    probArray[0] = 1;
    probArray[1] = 1;
    probArray[2] = 2;
    probArray[3] = 3;
    probArray[4] = 3;

    var xindex = floor(random(probArray.length));
    var yindex = floor(random(probArray.length));

    var xdirection = probArray[xindex];
    var ydirection = probArray[yindex];

    this.x = this.x + xdirection;
    this.y = this.y + ydirection;
    
    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  };
}
```

[See the code in action!](index.html)
