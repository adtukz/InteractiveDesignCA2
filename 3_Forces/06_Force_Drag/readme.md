[Forces](../)


# Applying Force - Drag

For drag we are creating a object which, applys a force to objects which enter it. Like a ball dropping into a liquid and then sinking slowly through it.

To do this we create a liquid object, at a certain x and y location with a set width and height as well as a coeffecient of friction the object passing through the "liquid" will be effected by.

In the liquid object we have a function called contains, to check if the liquid contains any mover objects, if it does it returns true, so we can apply the co-effecient to the mover.

The calculateDrag() method is used to calculate how much an object will be effected by the liquid. We get the magnitude of the object and apply friction to it, with the coeffecient of the liquid.
```js
function Liquid (x, y, w, h, co){

  this.location = createVector(x, y);
  this.size = createVector(w, h);
  this.coefficient = co;

  this.display = function(){
    noStroke();
    fill(45, 52, 54);
    rect(this.location.x, this.location.y, this.size.x, this.size.y);
  }

  this.contains = function(mover){
    if(mover.location.x > this.location.x && mover.location.x < this.location.x + this.size.x && mover.location.y > this.location.y && mover.location.y < this.location.y + this.size.y){
      return true;
    }
    else{
      return false;
    }
  }

  this.calculateDrag = function(mover){
    var speed = mover.velocity.mag();
    var drag = this.coefficient * speed * speed;

    var dragForce = p5.Vector.mult(mover.velocity, -1);

    dragForce.normalize();
    dragForce.mult(drag);
    return dragForce;
  }
}
```


Below we are instantiating the liquid. placing it on the x axis at 0.
We move it half way down the screen.
Makes it width, the width of the canvas.
And its height half that of the canvas.
The coeffecient of friction or drag is 0.4, is the ball will be slowed to 0.4 of its magnitude when entering the liquid.
```js
liquid = new Liquid(0, height/2, width, height/2, 0.4);


liquid.display();

if(liquid.contains(mover)){
	mover.addForce(liquid.calculateDrag(mover));
}
```


[See the code in action!](index.html)