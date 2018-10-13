var fireball;
var food = [];
var zoom = 1;

var startGame = false;
var submit = document.getElementById("submit");
var intro = document.getElementById("intro");

submit.addEventListener("click", function() {
  name = document.getElementById("name").value;
  if (name) {
    startGame = true;
    intro.style.display = "none";
    fireball.setName(name);
  } else {
    alert("Please enter your name!");
  }
});

function setup() {
  createCanvas(document.body.clientWidth, document.body.clientHeight);

  // Creates three fireball
  // The fireball needs to start at 0,0 so the world is drawn relative to the fireballs negative position for scaling
  fireball = new Fireball(name, 0, 0, 64);

  // Creates the food
  for (var i = 0; i < 2000; i++) {
    food[i] = new Food();
  }
}

function draw() {
  background(0);

  if (food.length < 2000) {
    food.push(new Food());
  }

  // Translate shifts the origin so the fireball it's always centered (the view shifts)(world/2 to get middle point)
  translate(width / 2, height / 2);
  var newZoom = 64 / fireball.r;
  //p5 Lerp it's used to smothens value transitions
  zoom = lerp(zoom, newZoom, 0.1);
  // Scale function scales the world
  scale(zoom);
  translate(-fireball.position.x, -fireball.position.y);

  // Loops backwards to prevent skyping an element by accident
  for (var i = food.length - 1; i >= 0; i--) {
    food[i].show();
    if (fireball.eats(food[i])) {
      food.splice(i, 1);
    }
  }

  fireball.show();
  fireball.update();
}
