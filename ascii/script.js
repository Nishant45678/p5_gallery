let drm
const density = "   Ñ@#W$9876543210?!abc;:+=-,._ " 

function preload(){
  drm=loadImage("a.jpg")
  
}
function setup() {
  noCanvas()
  drm.loadPixels()
  for (let j = 0; j < drm.height; j++) {
    let row=""
    for (let i = 0; i < drm.width; i++) {
     const pixelIndex=(i+j*drm.width)*4
     const r=drm.pixels[pixelIndex+0]
     const g=drm.pixels[pixelIndex+1]
     const b=drm.pixels[pixelIndex+2]
     const avg=(r+g+b)/3
     const len=density.length
     const charIndex=floor(map(avg, 0,255,len, 0))
    const c = density.charAt(charIndex)
     if(c==" ")
     row += "&nbsp;"
     else
     row += c
    }
    createDiv(row)
    
  }

}
