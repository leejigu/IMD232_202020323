let cv;
let mv;
let cvtomv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('pink');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvtomv = createVector;
}
function draw() {
  background('pink');
  strokeWeight(2);
  stroke(255);
  line(0, 0, cv.x, cv.y);

  mv.set(mouseX, mouseY);
  stroke('fuchsia');
  line(0, 0, mv.x, mv.y);

  cvtomv = p5.Vector.sub(mv, cv);
  stroke('lime');
  translate(cv.x, cv.y);
  line(0, 0, cvtomv.x, cvtomv.y);

  cvtomv.mult(0.5);
  strokeWeight(4);
  stroke('black');
  line(0, 0, cvtomv.x, cvtomv.y);
}
