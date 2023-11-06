let traffic; // traffic 변수 설정
let infiniteOffset = 80; // 변수 설정

function setup() {
  // 프로그램 초기화 및 실행하는 함수
  setCanvasContainer('canvas', 3, 2, true); // 캔버스 크기
  colorMode(HSL, 360, 100, 100, 100); //그래픽의 색상 모드를 HSL로 설정
  background('white'); //화면의 배경색을 흰색으로 설정
  traffic = new Traffic(); //Traffic 클래스의 인스턴스를 생성
  for (let n = 0; n < 10; n++) {
    //10번 반복하는 루프를 실행
    traffic.addVehicle(random(width), random(height)); //traffic.addVehicle 함수를 호출하여 화면 내의 무작위 위치에 10개의 객체를 추가함
  }
}

function draw() {
  //매 프래임마다 실행되는 함수
  background('white'); //배경색 흰색 설정
  traffic.run(); //traffic의 run함수 실행
}

function mouseDragged() {
  //마우스 드래그로 추가 (드래그할 때만 작동)
  traffic.addVehicle(mouseX, mouseY); //(새로 생성되는 vehicle의 좌표값으로 설정)
}
