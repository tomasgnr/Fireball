function Food() {
  // Vector objects from p5 store an X and a Y component
  this.position = createVector(
    random(-width * 8, width * 8),
    random(-height * 8, height * 8)
  );
  this.r = 16;
  this.vel = createVector(0, 0);
  this.colors = [
    { r: 255, g: 50, b: 50 },
    { r: 50, g: 255, b: 50 },
    { r: 50, g: 50, b: 255 },
    { r: 255, g: 255, b: 0 },
    { r: 255, g: 0, b: 255 },
    { r: 0, g: 255, b: 255 }
  ];
  this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
}

// Draws the food
Food.prototype.show = function() {
  this.show = function() {
    // Sets color
    fill(this.color.r, this.color.g, this.color.b);
    // Sets shape
    ellipse(this.position.x, this.position.y, this.r * 2, this.r * 2);
  };
};
