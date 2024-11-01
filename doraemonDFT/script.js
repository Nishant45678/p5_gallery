
let x = []

let fourierx
let time = 0

let path = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < drawing.length; i++) {
    const c = new Complex(drawing[i].x, -drawing[i].y)
    x.push(c)
  }
  fourierx = dft(x)

  fourierx.sort((a, b) => b.amp - a.amp)
}



function draw() {
  background(255)
  let v = epicycle(width / 2, height / 2, 0, fourierx)
  path.unshift(v)
  noFill()
  stroke(0)
  beginShape()
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].x, path[i].y)

  }
  endShape()
  let dt = TWO_PI / fourierx.length
  time += dt
  if (time > TWO_PI) {
    time = 0
    path = []

  }

}
