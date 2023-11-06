class Traffic {
  // 클래스 함수 정의
  constructor() {
    //객체를 생성하기
    this.vehicles = []; // vehicle을 어레이로 정의
  }

  run() {
    //Traffic 클래스의 동작을 정의
    this.vehicles.forEach((eachVehicle) => {
      //"vehicles" 배열의 각 객체를 반복
      const separate = eachVehicle.separate(this.vehicles); //vehicle 상수 선언 this.vehicles의 값을 each.vehicle의 separate 함수에 전달
      //현재 객체와 다른 객체 사이의 분리 힘을 계산하고 서로 밀어냄
      separate.mult(1); // separate에 1 곱하기
      eachVehicle.applyForce(separate); // // separate의 값을 applyForce에 전달
      const align = eachVehicle.align(this.vehicles); //"align" 변수에 저장
      align.mult(0.5); //align 곱하기 0.5
      eachVehicle.applyForce(align); // applyForce함수에 align의 값 적용
      const cohesion = eachVehicle.cohesion(this.vehicles); //응집력 힘을 계산하고 "cohesion" 변수에 저장
      cohesion.mult(0.5); // "cohesion"에 0.5 곱함
      eachVehicle.applyForce(cohesion); //
      eachVehicle.update(); //현재 객체의 위치, 속도, 가속도를 업데이트함
      eachVehicle.borderInfinite(); // 현재 객체가 화면 경계를 넘어가면 반대편으로 이동
      eachVehicle.display(); //객체를 그리기
    });
  }

  addVehicle(x, y) {
    //새로운 객체를 생성, vihicle 열에 추가
    // const mass = floor(random(1, 3));
    const mass = 1; //객체의 질량을 1로 설정
    this.vehicles.push(
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
    ); // "vehicles" 배열에 새로운 "Vehicle" 객체 추가, 초기위치값을 x,y로 설정,질량, 반지름, 최대 속도, 최대 힘 및 무작위 색상 설정
  }
}
