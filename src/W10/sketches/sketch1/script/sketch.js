let cam;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  cam = createCapture(VIDEO);
  cam.hide();
  console.log(cam);
  noLoop();
}
function draw() {
  background ('white');
  image (cam, 0, 0, width, (cam.height / cam.width) * width
  cam. loadPixels ();
  console. log('width', cam.width);
  console. log('height', cam. height); 
  console. log('pixel', cam.pixels[0];
  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.width; x++) {
      const idx = cam width * y + x;
      const brightmess = brifhtness[color];
      ellipse(x,y,brifhtness / 255 * 20);
      
    }
  }