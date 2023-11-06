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
    // 반경안의 vehicle의 vel(각도)의 평균을 내어 모이도록 하는 함수
    let cnt = 0; // cnt 변수 선언
    const steer = createVector(0, 0); // steer 상수를 선언 하고 벡터 생성
    others.forEach((each) => {
      //others의 각 요소를 하나씩 처리하기 위한 반복문
      if (each !== this) {
        //현재 객체 자신을 제외한 각 객체에 대해 다음을 계산
        const distSq = //거리의 제곱
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          //neighborhooodRad의 제곱보다 작으면 다음을 실행
          steer.add(each.vel); //steer 벡터에 현재 객체와 같은 반경 내에 있는 객체의 속도를 더하기
          //   steer.add(p5.Vector.normalize(each.vel));
          cnt++; //반복문이 끝날 때 마다 1씩 더하기
        }
      }
    });
    if (cnt > 0) {
      // 만약 반경 내에 있는 객체의 수가 0보다 크다면
      steer.div(cnt); //steer벡터를 반경 내의 객체 수로 나누기
      steer.setMag(this.speedMx); //평균 속도의 크기를 최대 속도로 설정
      steer.sub(this.vel); //steer에서 vel을 뺌
      steer.limit(this.forceMx); //steer의 값을 this.forceMx의 값으로 제한
    }
    return steer; //계산된 steer값 반환
  }

  separate(others) {
    //서로 멀어지도록 하는 힘을 계산하는 변수, others의 값을 가져옴
    let cnt = 0; //cnt 변수 선언
    const steer = createVector(0, 0); // steer 상수를 선언 하고 벡터 생성
    others.forEach((each) => {
      //  배열 others의 각 요소를 하나씩 처리하기 위한 반복문
      if (each !== this) {
        //현재 객체  제외한 각 객체에 대해 다음을 계산
        const dist = this.pos.dist(each.pos); // 거리 상수 선언 다른 객체의 위치에서 현재 객체의 위치를 빼서 거리를 구함
        if (dist > 0 && this.rad + each.rad > dist) {
          //실제 거리가 0보다 크고 두 객체의 반지름의 합보다 작다면 다음을 실행.(부딫히는 경우)
          const distNormal = dist / (this.rad + each.rad); //distNormal 상수를 선언
          const towardMeVec = p5.Vector.sub(this.pos, each.pos); // towardMeVec 상수 선언 현재의 객체위치에서 각 다른 객체의 위치를 뺌
          //= 나를 향하는 거리 구함
          towardMeVec.setMag(1 / distNormal); // 거리에 따라 힘이 다르게 작용하도록 벡터 설정
          steer.add(towardMeVec); //"steer" 벡터에 towardMeVec을 추가
          cnt++; //반복문이 끝날 때 마다 1씩 더하기
        }
      }
    });
    if (cnt > 0) {
      // cnt가 0보다 클 때
      steer.div(cnt); //steer을 cnt로 나눔
      steer.setMag(this.speedMx); // steer의 크기를 speedMx값으로 설정
      steer.sub(this.vel); // steer에서 vel을 뺌
      steer.limit(this.forceMx); //steer의 값을 this.forceMx의 값으로 제한
    }
    return steer; //계산된 steer값 반환
  }

  applyForce(force) {
    // 외부에서 힘을 받아오는 함수
    const forceDivedByMass = p5.Vector.div(force, this.mass); // 외부에서 받은 힘을 질량으로 나눈 값을 상수로 정의
    this.acc.add(forceDivedByMass); //외부에서 받은 힘을 가속도에 누적 (객체의 움직임)
  }

  update() {
    this.vel.add(this.acc); //속도에 가속도 더하기
    this.vel.limit(this.speedMx); //최대속도가 넘지 않도록 제한
    this.pos.add(this.vel); //위치에 속도를 더해 움직이게함
    this.acc.mult(0); //가속도를 0으로 초기화
  }

  borderInfinite() {
    if (this.pos.x < -infiniteOffset) {
      //만약 객체의 x값이 화면 왼쪽보다 작다면
      this.pos.x = width + infiniteOffset; //오른쪽에 추가하여 반대편으로 이동시킨다
    } else if (this.pos.x > width + infiniteOffset) {
      //만약 객체의 x값이 화면 오른쪽보다 크다면
      this.pos.x = -infiniteOffset; //왼쪽에 추가하여 반대편으로 이동시킨다
    }
    if (this.pos.y < -infiniteOffset) {
      //만약 객체의 y값이 화면 위쪽보다 작다면
      this.pos.y = height + infiniteOffset; //아래쪽에 추가하여 반대편으로 이동시킨다
    } else if (this.pos.y > height + infiniteOffset) {
      //만약 객체의 y값이 화면 아래쪽보다 크다면
      this.pos.y = -infiniteOffset; //윗쪽에 추가하여 반대편으로 이동시킨다
    }
  }

  display() {
    //화면에 그리기
    push(); // 매 프레임마다 새롭게 적용되는 값의 시작점
    translate(this.pos.x, this.pos.y); //원점 좌표 시스템을 이동
    rotate(this.vel.heading()); //vel을 기준으로 회전
    noStroke(); //윤곽선없애기
    fill(this.color); //외부의 값을 불러와 색 칠하기
    beginShape(); //다각형그리기
    vertex(this.rad, 0); //다각형의 한 꼭짓점 추가
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135))); //두번째 꼭짓점을 -135도의 각도로 생성
    vertex(0, 0); //중심지점
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135))); //네번째 꼭짓점을 135도의 각도로 생성
    endShape(CLOSE); //다각형그리기 끝냄
    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad);
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);
    pop(); //후속작업에 영향을 미치지 않도록 그리기상태 복원
  }
}
