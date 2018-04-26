[Introduction](../)

# Random Walker with 4 Outcomes

In this file we create a Walker class which creates walker objects. Each time the step function is called on this object it selects a random number which moves the walker along either the x or y axis.

The main script contains the two main functions, setup() & draw(). The draw function calls the object.

```js
var walker;

function setup() {
    createCanvas(320,640);
    background(178, 190, 195);
    walker = new Walker();
}

function draw() {
    walker.render();
    walker.step();
}
```

Within the Walker class two variables are set up x and y, we also declare values for them. Setting to half the width and half the height so the walker is centered on the canvas We then have two functions added to each object. The render function draws a dot at the designated x and y co-ordinates.

```js
function Walker() {
    this.x = width/2;
    this.y = height/2;

    this.render = function() {
        stroke(0);
        point(this.x,this.y);
    }
```

The step function creates a random number between 0 and 4 and then floors it. That means we get either 0, 1, 2 or 3 returned. We then use the number returned to move the walker along either the x or y axis, in a positive or negative way.

```js
    this.step = function() {
        var choice = floor(random(4));
        if (choice === 0) {
            this.x++;
        } else if (choice === 1) {
            this.x--;
        } else if (choice === 2) {
            this.y++;
        } else {
            this.y--;
        }

        this.x = constrain(this.x,0,width);
        this.y = constrain(this.y,0,height);
    }

}

```

[See the Code in action](index.html)
