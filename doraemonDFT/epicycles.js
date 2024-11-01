function epicycle(x, y, rotate, fourier) {
  for (let i = 0; i < fourier.length; i++) {
    let prex = x
    let prey = y
    let freq = fourier[i].freq
    let radius = fourier[i].amp
    let phase = fourier[i].phase

    x += radius * cos(freq * time + phase + rotate)
    y += radius * sin(freq * time + phase + rotate)
    stroke(200)
    strokeWeight(0.3)
    noFill();
    ellipse(prex, prey, radius * 2)


    stroke(200)
    strokeWeight(1)
    line(prex, prey, x, y)


  }
  return createVector(x, y)
}