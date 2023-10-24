class Particle {
  constructor(x, y, rad, color) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.mass = 1;
    this.rad = rad;
    this.color = color;
    this.angle = 0;
    this.angleVel = radians(random(-5, 5));
    this.angeAcc = radians(random(-0.05, 0.05));
  }

  applyForce(force) {
    let calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.angleVel += this.angleAcc;
    this.angle += this.angleVel;
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    fill(this.color);
    noStroke();
    rect(0, 0, this.rad);

    pop();
  }
}
