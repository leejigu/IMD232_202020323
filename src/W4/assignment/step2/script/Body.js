class Body {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = Math.random() * 84 + 16; //0~84, 16~100
    this.rad = Math.sqrt(this.mass) * 5; //4~10 *5(제곱근) 20~50
  }

  attract(body) {
    const force = p5.Vector.sub(this.pos, body.pos);
    let distance = constrain(force.mag(), 16, 100);
    let strength = (G * (this.mass * body.mass)) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    const forceDividedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDividedByMass);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  display() {
    noStroke();
    fill(0, 127);
    circle(this.pos.x, this.pos.y, this.rad * 2);
  }
}
