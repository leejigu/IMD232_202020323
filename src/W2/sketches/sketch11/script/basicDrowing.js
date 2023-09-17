function setup() {
  setCanvasContainer('p5-canvas', 500, 500);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  linearGradient(
    width / 1 - 200,
    height / 2 - 200, //Start point
    width / 3 + 200,
    height / 3 + 200, //End point
    color(100, 99, 205), //Start color
    color(208, 201, 177) //End color
  );
  rect(width / 2, height / 2, 500, 500);
}

function linearGradient(sX, sY, eX, eY, colorS, colorE) {
  let gradient = drawingContext.createLinearGradient(sX, sY, eX, eY);
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;
  // drawingContext.strokeStyle = gradient;
}
