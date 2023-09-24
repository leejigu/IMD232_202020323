// let x;
// let y;
let position;
// let velocityX = 3;
// let velocityY = 5;
let velocity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  // x = width / 2.0;
  // y = height / 2.0;
  position = createVector(width / 2, height / 2);
  velocity = createVector(3, 5);
}
function draw() {
  background(255);
  // x += velocityX;
  // y += velocityY;
  position.add(velocity);
  ellipse(position.x, position.y, 50);

  if (position.x < 0 || position.x > width) {
    velocity.x *= -1;
  }

  if (position.y < 0 || position.y > height) {
    velocity.y *= -1;
  }
}
