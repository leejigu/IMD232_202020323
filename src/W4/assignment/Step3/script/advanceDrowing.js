let pos;
let vel;
let acc;
let rad = 50;

let cv;
let mv;
let accPoint;
let posPoint;
let cvToMv;
let cvToPo;
let cvToAc;

let mouse;
let toMouse;
let isMousePressed;

function setup() {
  setCanvasContainer('canvas', 100, 100, true);
  background('aqua');
  reset();
  mousePressed();
  mouseReleased();
}

function draw() {
  background('aqua');
  update();
  display();
}

function display() {
  fill('fuchsia');
  noStroke(0);
  ellipse(pos.x, pos.y, rad * 2);

  strokeWeight(2);
  stroke('lime');
  cv.set(pos.x, pos.y);
  mv.set(mouseX, mouseY);
  cvToMv = p5.Vector.sub(mv, cv);
  translate(cv.x, cv.y);

  line(0, 0, cvToMv.x, cvToMv.y);

  strokeWeight(3);
  stroke('yellow');
  posPoint.set(pos.x + vel.x, pos.y + vel.y);
  cvToPo = p5.Vector.sub(posPoint, cv);

  line(0, 0, cvToPo.x * 10, cvToPo.y * 10);
}

function reset() {
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);

  toMouse = createVector();
  mouse = createVector();

  cv = createVector();
  mv = createVector();
  accPoint = createVector();
  posPoint = createVector();
  cvToPo = createVector();
}

function update() {
  if (isMousePressed == true) {
    mouse.set(mouseX, mouseY);
    toMouse = p5.Vector.sub(mouse, pos);
    console.log(toMouse.x, toMouse.y);

    acc = createVector(-toMouse.x, -toMouse.y);
    acc.normalize();
    acc.mult(0.1);

    vel.limit(5);
    vel.add(acc);
    pos.add(vel);

    console.log(vel.x, vel.y);
  } else if (isMousePressed == false) {
    mouse.set(mouseX, mouseY);
    toMouse = p5.Vector.sub(mouse, pos);
    console.log(toMouse.x, toMouse.y);

    acc = createVector(toMouse.x, toMouse.y);
    acc.normalize();
    acc.mult(0.1);

    vel.limit(5);
    vel.add(acc);
    pos.add(vel);
  }
}

function mousePressed() {
  isMousePressed = true;
}

function mouseReleased() {
  isMousePressed = false;
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x > width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y > height) {
    pos.y -= height;
  }
}
