let pos;
let vel;
let acc;
let rad = 50;

let cv;
let mv;
let accA;
let Apos;
let cvtomv;
let cvtopos;
let cvtoacc;

let mouse;
let toMouse;

function setup() {
  setCanvasContainer('canvas', 100, 100, true);
  background('yellow');
  reset();
}

function draw() {
  background('yellow');
  update();
  infiniteEdge();
  display();
}

function display() {
  fill('lime');
  noStroke(0);
  ellipse(pos.x, pos.y, rad * 2);

  strokeWeight(2);
  stroke('blue');
  cv.set(pos.x, pos.y);
  mv.set(mouseX, mouseY);
  cvtomv = p5.Vector.sub(mv, cv);
  translate(cv.x, cv.y);

  line(0, 0, cvtomv.x, cvtomv.y);

  strokeWeight(3);
  stroke('fuchsia');
  Apos.set(pos.x + vel.x, pos.y + vel.y);
  cvtopos = p5.Vector.sub(Apos, cv);

  line(0, 0, cvtopos.x * 10, cvtopos.y * 10);
}

function reset() {
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);

  toMouse = createVector();
  mouse = createVector();

  cv = createVector();
  mv = createVector();
  accA = createVector();
  Apos = createVector();
  cvtopos = createVector();
}

function update() {
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

function infiniteEdge() {}
