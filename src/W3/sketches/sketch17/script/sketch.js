let pos;
let vel;
let acc;
let radius = 50;
let posA;
let velA;
let accA;
let radiusA = 50;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  vel = p5.Vector.random2D();
  vel.mult(0);
  acc = createVector(0, 0.01);
  pos = createVector(width / 2, height / 2);
  vel = p5.Vector.random2D();
  vel.mult(0);
  acc = createVector(0, 0.01);
}
function draw() {
  background('white');
  update();
  infiniteEdge();
  display();

  ellipse(pos.x, pos.y, 2 * radius);
}

function update() {
  vel.add(acc);
  vel.limit(20);
  pos.add(vel);
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= width) {
    pos.y -= height;
  }
  ellipse(pos.x, pos.y, 2 * radius);
}

function display() {
  ellipse(pos.x, pos.y, 2 * radius);
}
