let dataPoint = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  frameRate(5); //초당 5프레임으로 제한

  for (let i = 0; i < 50; i++) {
    dataPoint.push(0.5);
  }

  background(255);
}

function draw() {
  dataPoint[dataPoint.length - 1] = map(mouseY, 0, height, 1, 0);
  background(255);
  noStroke();
  fill(0);
  for (let i = 0; i < dataPoint.length; i++) {
    //매프레임마다 어레이 하나 뒤로 넘어가게함
    const x = (width / (dataPoint.length + 1)) * (i + 1);
    const y = map(dataPoint[i], 0, 1, height, 0);
    ellipse(x, y, 10);
  }
  for (let i = 0; i < dataPoint.length - 1; i++) {
    dataPoint[i] = dataPoint[i + 1];
  }
}
