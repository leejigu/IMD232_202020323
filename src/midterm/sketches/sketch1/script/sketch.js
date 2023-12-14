const density = '@%#*+=-:. ';
let video;
let asciiDiv;

function setup() {
  noCanvas();
  video = createCapture(VIDEO, function () {
    video.elt.setAttribute('playsinline', ''); // iOS에서 영상이 인라인으로 재생되도록 설정
    video.size(140, 110); // 카메라의 종횡비에 맞게 크기 조절
  });

  asciiDiv = createDiv();
  asciiDiv.style('font-family', 'monospace'); // 정렬을 위해 고정폭 글꼴 설정
  asciiDiv.style('white-space', 'pre'); // 공백 유지
  asciiDiv.style('font-size', '12px'); // 글꼴 크기 조절 (16px로 변경)
  asciiDiv.style('background-color', 'black'); // 검정 배경 설정
  asciiDiv.style('color', 'white'); // 흰색 폰트 설정
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
