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
