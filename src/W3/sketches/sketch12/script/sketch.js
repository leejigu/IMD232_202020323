let pas;
let vel;
function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('blue');
  pos = createVector(random(width), random(height));
  //   vel = createVector(random(-5, 5), random(-5, 5));
  // //일정속도방법1
  //   vel = createVector(1, 0);
  //   vel.rotate(random(TAU)); //호더법이란?TAU=2PI(180도=파이 360도=2파이-PI*2)//
  //   vel.mult(5);

  vel = p5.Vector.random2D();
  vel.mult(5);
  console.log('pos', pos);
  console.log('vel', vel);
  console.log('mag', vel.mag());
}

function draw() {
  background('blue');
  update();
  checkEdges();
  display();
}

function update() {
  pos.add(vel);
}

function checkEdges() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > width) {
    pos.y = 0;
  }
}

function display() {
  noStroke();
  fill('chartreuse');
  ellipse(pos.x, pos.y, 50);
}
