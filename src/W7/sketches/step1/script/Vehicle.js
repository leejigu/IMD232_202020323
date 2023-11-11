class Vehicle {
  //vehicle[탈것]
  constructor(x, y, mass, rad, speedMx, forceMx) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = rad;
    this.speedMx = speedMx; //최대속도를 밖에서 받아온다
    this.forceMx = forceMx;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass); //힘을 질량으로나눠준다
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    // const headingAngle = atan2(this.vel.y, this.vel.x);
    const headingAngle = this.vel.heading();
    push();
    translate(this.pos.x, this.pos.y); //원점을 우리의 위치로 변환해줌
    rotate(headingAngle); //돌아가게하기
    fill(0);
    noStroke();
    beginShape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    noFill();
    stroke('red');
    ellipse(0, 0, 2 * this.rad);
    pop();
  }

  seek(target) {
    //공을 따라오게 하자
    const desiredVelocity = p5.Vector.sub(target, this.pos); //타켓에서 내 위치를 빼면 디자이어벨로시티
    desiredVelocity.setMag(this.speedMx); //일정속도를 최대로 제한시킨다
    const steer = p5.Vector.sub(desiredVelocity, this.vel); //고개를 자연스럽게 돌리도록함
    steer.limit(this.forceMx);
    this.applyForce(steer);
  }
}
