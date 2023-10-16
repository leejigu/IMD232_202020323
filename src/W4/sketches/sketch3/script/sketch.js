let mover;
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  mover = new movernomass(width / 2, height / 2, 50);
  gravity = createVector(0, 0.1);
  wind = createVector(0.2, 0);
}

function draw() {
  background(255);

  mover.addAcc(gravity);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    //캔버스안에서눌러야 적용
    mover.addAcc(wind);
  }
  mover.update();
  mover.checkEdges();
  mover.display();
  mover.displayVectors();
}
