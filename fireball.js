// fireball consturction function
function Fireball(name, x, y, r) {
  // p5 Vector objects from p5 store an X and a Y component
  this.position = createVector(x, y);
  this.r = r;
  // Starts with empty vector
  this.vel = createVector(0, 0);
  this.colors = [
    { r: 255, g: 100, b: 100 },
    { r: 100, g: 255, b: 100 },
    { r: 100, g: 100, b: 255 },
    { r: 255, g: 255, b: 100 },
    { r: 255, g: 100, b: 255 },
    { r: 100, g: 255, b: 255 }
  ];
  this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  this.name = name;
}
Fireball.prototype.setName = function(newName) {
  this.name = newName;
};
// Makes the fireball follow the mouse cursor
// Creates a vector from the center of the fireball to the cursos and follows that direction
Fireball.prototype.update = function() {
  var newVel = createVector(mouseX - width / 2, mouseY - height / 2);
  // setMag takes the vector and sets it to that specific magnitude
  newVel.setMag(3);
  //p5 Lerp it's used to smothens value transitions for turning
  this.vel.lerp(newVel, 0.2);
  this.position.add(this.vel);
  this.position.x = this.position.x.clamp(-width * 8, width * 8);
  this.position.y = this.position.y.clamp(-height * 8, height * 8);
};

//Eats revcieves another fireball
Fireball.prototype.eats = function(other) {
  //p5.Vector function to determine distance between to elements
  var distance = p5.Vector.dist(this.position, other.position);

  if (distance < this.r + other.r) {
    // If fireball eats, the area of the fireball an the food are added
    var sum = PI * this.r * this.r + PI * other.r * other.r;
    this.r = sqrt(sum / PI);
    return true;
  } else {
    return false;
  }
};

// Draws the fireball
Fireball.prototype.show = function() {
  // Sets color
  fill(this.color.r, this.color.g, this.color.b);

  textAlign(CENTER);
  text(`${this.name}`, this.position.x, this.position.y - this.r * 1.5);

  // Sets shape
  ellipse(this.position.x, this.position.y, this.r * 2, this.r * 2);
};
