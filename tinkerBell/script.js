//Tikerbell map
let x=-0.72;
let y=-0.64;
let a=0.9;
let b=-0.6013;
let c=2;
let d=0.5;
let i=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background (255); 
}
function draw() {
 //background(255);
for(let i = 0; i <100 ; i++) {
   drawPoint() ;
   nextPoint() ; 
}

  //console. log(x, y) ;
  
}
function drawPoint(){
   stroke(0);
   strokeWeight(0.7) ;
   let px=map(x, -2, 1, 0, width);
   let py=map(y, -2, 1,0,height) ;
   point(px, py) ;
}

function nextPoint(){
   let x_;
   let y_;


   x_=(x)**2-(y)**2 + a * x + b * y 
   y_=2 * x * y + c * x + d * y

   x=x_;
   y=y_;
  
}