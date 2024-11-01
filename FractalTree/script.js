let it = 1
function setup() {
  background(255);

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(0.8);
  translate(width / 2, height/2);
  noLoop() ;
  FractalTree(80, it);
  //if (mouseIsPressed) {
  //  it++;
  //}

}

function FractalTree(len, i) {
  if (i > 0) {
    let angle = PI/6;
    line(0, 0, 0, -len);
    translate(0, -len);

    push();
    rotate(angle);
    FractalTree(len * 0.71, i - 1);
    pop();
    push();
    rotate(-angle);
    FractalTree(len * 0.71, i - 1);
    pop();
  }

}

function mousePressed() {
  it++;
  loop() ;
}
