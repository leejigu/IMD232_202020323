let pos;
let vel;
let acc;
let rad = 50;

let cv;
let mv;
let accA;
let posA;
let cvtomv;
let cvtopos;
let cvtoac;

function setup() {
  setCanvasContainer('canvas', 100, 100, true);
  background('white');
  reset();
}

function draw() {
  background('white');
  update();
  infiniteEdge();
  display();
}

function display() {
  fill('yellow');
  noStroke(0);
  ellipse(pos.x, pos.y, rad * 2);

  strokeWeight(2);
  stroke('fuchsia');
  cv.set(pos.x, pos.y);
  mv.set(mouseX, mouseY);
  cvtomv = p5.Vector.sub(mv, cv);
  translate(cv.x, cv.y);

  line(0, 0, cvtomv.x, cvtomv.y);

  strokeWeight(2);
  stroke('blue');
  accA.set(acc.x + pos.x, acc.y + pos.y);
  cvtoac = p5.Vector.sub(accA, cv);
  line(0, 0, cvtoac.x * 100, cvtoac.y * 100);
  console.log(mag(cvtoac.x, cvtoac.y));

  strokeWeight(3);
  stroke('purple');
  posA.set(pos.x + vel.x, pos.y + vel.y);
  cvtopos = p5.Vector.sub(posA, cv);

  line(0, 0, cvtopos.x * 10, cvtopos.y * 10);
}

function reset() {
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector();
  cv = createVector();
  mv = createVector();
  accA = createVector();
  posA = createVector();
  cvtopos = createVector();
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(2);
  vel.limit(5);
  vel.add(acc);
  pos.add(vel);
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
