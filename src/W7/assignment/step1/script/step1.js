const bodies = [];
const bodynum = 30;
const G = 1;

let showVector = false;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  init();
  background(255);
}

function draw() {
  background(255);

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      if (i !== j) {
        let forceForJ = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(forceForJ);
      }
    }
    bodies[i].update();
    bodies[i].display();
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    init();
  }
}

function init() {
  for (let i = 0; i < 20; i++) {
    bodies[i] = new Body(random(width), random(height), random(0.1, 2));
  }
}
