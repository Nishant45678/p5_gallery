

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
}

function draw() {
  background(255);

  loadPixels();
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {

      let dx = (i - width / 2 - 20) / 50;
      let dy = (j - height / 2) / 50;
      let a = dx;
      let b = dy;
      for (let t = 0; t < 100; t++) {
        let d = (a * a) - (b * b) + dx;
        b = 2 * a * b + dy;
        a = d
        let H = Math. sqrt(d)> 16;
        let r_ = 255;
        let g_ = 255;
        let b_ = 255;
        let bright = map(t, 0, 100, 0, 255);
        if (H) {
          r_ = bright * 3;
          g_ = 0;
          b_ = bright * 0.5;
          pixels_(r_, g_, b_, i, j);
          break;
        }

      }



    }
  }

  updatePixels();
  noLoop();
}

function pixels_(k, l, m, i, j) {
  let index = (i + j * width) * 4;
  pixels[index + 0] = k;
  pixels[index + 1] = l;
  pixels[index + 2] = m;
  pixels[index + 3] = 255;
}