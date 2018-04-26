function WindChime(x, y, mag, s, e) {

  this.xPos = x;
  this.yPos = y;
  this.windMag = mag;
  this.startAngle = s;
  this.endAngle = e;
  this.windVec = createVector();
  this.time = 1000;

  this.update = function() {

    this.windDir = map(noise(this.time), 0, 1, this.startAngle, this.endAngle);
    this.windVec = p5.Vector.fromAngle(radians(this.windDir), this.windMag);
    this.time = this.time + 0.01;
  }

  this.display= function() {
    push();
    translate(this.xPos, this.yPos);
    scale(0.5, 0.5);
    fill(9, 132, 227);
    noStroke();
    textSize(20);
    textAlign(CENTER);
    text("Magnitude: " + nf(this.windMag, 1, 2), 0, 100);
    text("Wind Direction: " + nf(this.windDir, 1, 2), 0, 125);
    stroke(9, 132, 227);
    strokeWeight(4);
    fill(9, 132, 227, 0);
    ellipse(0, 0, 150, 150);
    rotate(this.windVec.heading());
    noStroke();
    line(-65, 0, 65, 0);
    fill(9, 132, 227);
    triangle(20, -15, 45, 0, 20, 15);
    pop();
  }
}