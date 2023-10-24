let particles = [];
let gravity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  rectMode(CENTER);
  colorMode(HSL, 360, 100, 100, 100);
  gravity = createVector(0, 0.05);
  background(0, 100, 100);
}

function draw() {
  background(0, 100, 100);
  particles.push(
    new Particle(random(width), -10, 8, color(random(360), 100, 50))
  );

  for (let idx = particles.length - 1; idx >= 0; idx--) {
    const scaledGravity = p5.Vector.mult(gravity, particles[idx].mass);
    particles[idx].applyForce(scaledGravity);
    particles[idx].update();
    if (particles[idx].isDead()) {
      particles.splice(idx, 1);
    }
    particles[idx].display();
  }
  console.log(particles.length);
}
