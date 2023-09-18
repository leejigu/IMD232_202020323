function setup() {
  setCanvasContainer('p5-canvas', 500, 500);
  background('slategray');
}

function draw() {
  background('slategray');
  //   rect(가로위치, 세로위치, 그림가로, 그림세로);

  fill(100, 99, 206);
  rect(0, 0, 500, 350);
  noStroke(0);

  //달
  fill('yellow');
  circle(400, 80, 140);

  //남산타워
  fill('#414549');
  rect(350, 240, 70, 20);
  noStroke(0);
  fill('#414549');
  rect(360, 230, 50, 20);
  noStroke(0);
  fill('#414549');
  rect(379, 130, 12, 100);
  noStroke(0);
  fill('#414549');
  rect(370, 110, 30, 30);
  noStroke(0);
  fill('#414549');
  rect(375, 100, 20, 20);
  noStroke(0);
  fill('#414549');
  rect(383, 70, 5, 50);
  noStroke(0);
  fill('#414549');
  rect(380.5, 70, 10, 7);
  fill('#414549');
  triangle(387, 20, 384, 70, 387, 70);

  //뒷산
  fill('#414549');
  rect(300, 250, 140, 60);
  noStroke(0);
  fill('#414549');
  triangle(300, 350, 440, 250, 515, 350);
  fill('#414549');
  triangle(120, 350, 300, 200, 400, 350);

  //맨밑에창틀
  fill('#C3CBD9');
  rect(0, 350, 500, 20);
  noStroke(0);

  fill('#ABBAC8');
  rect(0, 350, 500, 7);
  noStroke(0);

  //중간창틀
  fill('#C3CBD9');
  rect(160, 00, 20, 370);
  noStroke(0);
  fill('#ABBAC8');
  rect(160, 00, 7, 257);
  noStroke(0);
  fill('#ABBAC8');
  rect(160, 270, 7, 87);
  noStroke(0);

  //오른쪽창틀
  fill('#C3CBD9');
  rect(450, 00, 20, 370);
  noStroke(0);
  fill('#ABBAC8');
  rect(450, 00, 7, 357);
  noStroke(0);

  //가로창틀
  fill('#C3CBD9');
  rect(0, 250, 160, 20);
  noStroke(0);

  fill('#ABBAC8');
  rect(0, 250, 160, 7);
  noStroke(0);

  //의자

  fill('188,188,188');
  quad(50, 500, 170, 500, 150, 400, 70, 400);
  erase();
  quad(65, 500, 155, 500, 140, 420, 80, 420);
  noErase();

  fill(82, 96, 110);
  quad(65, 500, 155, 500, 140, 420, 80, 420);
  noStroke(0);

  fill('188,188,188');
  rect(70, 450, 90, 17);
  noStroke(0);

  fill('#041546');
  ellipse(110, 370, 66, 66);
  fill('#041546');
  ellipse(110, 320, 46, 46);
  triangle(130, 325, 90, 325, 90, 290);
  triangle(130, 325, 90, 325, 130, 290);
  fill('#041546');

  fill('#CAC6B2');
  rect(69, 390, 83, 17);
  noStroke(0);
}
