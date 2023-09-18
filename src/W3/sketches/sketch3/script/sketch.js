// let x;
// let y;
let position;
// let velocityX = 3;
// let velocityY = 5;
let velocity;
function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  x = width / 2.0;
  y = height / 2.0;
}
function draw() {
  background(255);
  x += velocityX;
  y += velocityY;
  ellipse(x, y, 50);

  if (x < 0 || x > width) {
    velocityX *= -1;
  }

  if (y < 0 || y > height) {
    velocityY *= -1;
  }
}
