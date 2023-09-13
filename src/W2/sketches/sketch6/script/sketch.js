function setup() {
  let canvas;
  canvas = createCanvas(400, 300);
  let canvasParent;
  canvasParent = select('#canvas-goes-hear');
  canvas.parent(canvasParent);
  background(255);
}

function draw() {
  background(255, 0, 0);
  circle(mouseX, mouseY, 50);
}
