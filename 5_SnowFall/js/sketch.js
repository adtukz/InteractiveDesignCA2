//create array to hold the snowflake objects we will create
var snow = [];
//create variable to hold gravity force
var gravity;

//sprite sheet to load images off
var spritesheet;
//textures to hold all the indidual snowflake images
var textures = [];

//preload the spritesheet
function preload() {
  spritesheet = loadImage('flakes32.png');
}

function setup() {
  //create 800,600 canvas
  createCanvas(800, 600);
  //gravity is a vector with 0x movement and 0.3y movement
  gravity = createVector(0, 0.3);

  //divide the sprite sheet up into individual images and put it into textures
  for (var x = 0; x < spritesheet.width; x += 32) {
    for (var y = 0; y < spritesheet.height; y += 32) {
      var img = spritesheet.get(x, y, 32, 32);
      image(img, x, y);
      textures.push(img);
    }
  }

  //create 1000 snowflakes to display on the screen at random positions, and random snowflake image for each one
  for (var i = 0; i < 1000; i++) {
    var x = random(width);
    var y = random(height);
    var design = random(textures);
    snow.push(new Snowflake(x, y, design));
  }

  //create wind chime which will effect the snowflakes and move them around the screen
  chime = new WindChime(60,50,random(0.5,2), 0, 45);
}

//draw objects
function draw() {
  //change background colour
  background(45, 52, 54);

  //for each snowflake apply forces, update and render them
  for (flake of snow) {
    flake.applyForce(gravity);
    flake.applyForce(chime.windVec);
    flake.update();
    flake.render();
  }

  //display and update the chime
  chime.update();
  chime.display();
}
