let pos;
let vel;
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector();
  console.log(pos);
  console.log(vel);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background(255);
  update();
  infiniteEdge();
  // acc = p5.Vector.random2D();
  // acc.mult(0.5);
  // vel.add(acc);
  // pos.add(vel);
  function infiniteEdge(){
    acc = p5.Vector.random2D();
    acc.mult(0.5);
    vel.add(acc);
    pos.add(vel);
  // if (pos.x < 0) {
  //   vel.x *= -1;
  // } else if (pos.x > width) {
  //   vel.x *= -1;
  //

  // if (pos.x - radius < 0 || pos.x + radius > width) {
  //   vel.x *= -1;
  // }
  // if (pos.y - radius < 0 || pos.y + radius > height) {
  //   vel.y *= -1;
  // }
  // if(pos.x<0)
  // pos.x=width
  // else if(pos.x>width)
  // ellipse(pos.x, pos.y, 2 * radius);
}

function infiniteEdge(){
  if(pos.x<0)
  pos.x=width
  else if(pos.x>width)
}