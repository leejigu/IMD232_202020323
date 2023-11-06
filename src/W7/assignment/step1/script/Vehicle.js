class Vehicle {
  //Vehicle 클래스 생성
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    // vihicle의 객체 생성, 위치, 질량, 반지름, 최대속도, 최대힘, 색상설정
    this.pos = createVector(x, y); // 위치 벡터 생성
    this.vel = p5.Vector.random2D(); //무작위로 향하는 속도로 시작하게 함
    this.acc = createVector(); // 가속도를 나타내는 벡터
    this.mass = mass; //질량 설정
    this.rad = rad; //반지름 설정
    this.speedMx = speedMx; //최대속도
    this.forceMx = forceMx; //최대 힘
    this.neighborhooodRad = 50; //다른객체와의 반경설정
    this.color = color; //색상설정
  }

  cohesion(others) {
    //모든 객체가 한곳으로 모이도록 하는 힘을 계산
    let cnt = 0; //cnt 변수 선언하고 0으로 초기화
    const steer = createVector(0, 0); // steer벡터 생성
    others.forEach((each) => {
      //others에 각 요소에 대해 반복문을 시작
      if (each !== this) {
        //현재 객체 자신을 제외하고 수행
        const distSq = // 거리에 제곱을 계산
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          //만약 거리의 제곱이 주어진 "neighborhooodRad"의 제곱보다 작으면
          steer.add(each.pos); // steer백터에 현재 객체와 같은 반경 내에 있는 객체의 위치를 더함
          cnt++; // 반복문이 끝날 때 마다 cnt에 1씩 더함
        }
      }
    });
    if (cnt > 0) {
      //  만약 cnt가 0보다 클 때
      steer.div(cnt); //steer을 cnt로 나눔
      steer.sub(this.pos); //steer에서 pos를 뺌
      steer.setMag(this.speedMx); //steer의 크기를 최대속도값으로 설정
      steer.sub(this.vel); // 현재 객체의 현재 속도를 뺌
      steer.limit(this.forceMx); //steer의 값을 this.forceMx의 값으로 제한
    }
    return steer; //steer의 값 반환
  }

  align(others) {
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.vel);
          //   steer.add(p5.Vector.normalize(each.vel));
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  separate(others) {
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        const dist = this.pos.dist(each.pos);
        if (dist > 0 && this.rad + each.rad > dist) {
          const distNormal = dist / (this.rad + each.rad);
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          towardMeVec.setMag(1 / distNormal);
          steer.add(towardMeVec);
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  applyForce(force) {
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDivedByMass);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx); // speedMx 제한
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  borderInfinite() {
    if (this.pos.x < -infiniteOffset) {
      this.pos.x = width + infiniteOffset;
    } else if (this.pos.x > width + infiniteOffset) {
      this.pos.x = -infiniteOffset;
    }
    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset;
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset;
    }
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    noStroke();
    fill(this.color);
    beginShape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad);
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);
    pop();
  }
}
