const density = '*@%#:.  ';
let video;
let asciiDiv;

function setup() {
  dom = select('#canvas');
  //   console.log('p5 select', dom);
  //   console.log('p5 select', dom.width);

  htmlDom = document.querySelector('#canvas');
  //   console.log('querySelector', htmlDom);
  noCanvas();
  video = createCapture(VIDEO, function () {
    video.elt.setAttribute('playsinline', ''); // iOS에서 영상이 인라인으로 재생되도록 설정
    video.size(120, 95); // 카메라의 종횡비에 맞게 크기 조절
  });

  asciiDiv = createDiv();
  asciiDiv.style('font-family', 'monospace'); // 정렬을 위해 고정폭 글꼴 설정
  asciiDiv.style('white-space', 'pre'); // 공백 유지
  asciiDiv.style('font-size', '16px'); // 글꼴 크기 조절 (16px로 변경)
  asciiDiv.style('background-color', 'black'); // 검정 배경 설정
  asciiDiv.style('color', '#ff00ff'); // 흰색 폰트 설정
  // 추가: 아스키 아트에 흰색 여백 추가
  asciiDiv.style('margin', '4px');
  asciiDiv.style('border', '6px solid #e8e8d8');
  asciiDiv.style('border-bottom', '46px solid #e8e8d8'); // 하단의 border를 12px로 설정
  asciiDiv.style('padding', '2px '); // 테두리 안쪽에 여백 추가
}

function draw() {
  video.loadPixels();
  let asciiImage = '';
  for (let j = 0; j < video.height; j += 4) {
    // 성능 향상을 위해 스텝 증가
    for (let i = video.width; i > 0; i -= 2) {
      // 좌우 반전
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      const c = density.charAt(charIndex);
      asciiImage += c;
    }
    asciiImage += '\n';
  }
  asciiDiv.html(asciiImage);
}
