let cv;
let mv;
let cvtomv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('slateblue');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvtomv = createVector();
}
function draw() {
  background('slateblue');

  mv.set(mouseX, mouseY);
  cvtomv = p5.Vector.sub(mv, cv);
  let mag = cvtomv.mag();
  console.log(mag);
  noStroke();
  fill(255);
  rect(10, 10, mag, 10);

  strokeWeight(2);
  stroke('white');
  translate(cv.x, cv.y);
  line(0, 0, cvtomv.x, cvtomv.y);
}
