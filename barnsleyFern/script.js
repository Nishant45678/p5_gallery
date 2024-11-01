let x=0;
let y=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  for (let i = 0; i < 100; i++) {
     drawpoint();
     nextpoint();
   // if (frameCount===100) {
      // noLoop() ;
    //}
    
  }
  
  
}
function drawpoint() {
  stroke(0,128,0);
  strokeWeight (0.8);
  let px= map(x,-2.1820,2.6558,0,width);
  let py= map(y,0,9.9983,height,0); 
  point(px, py) ;
}

function nextpoint() {
  let p= random (1);
  let x_;
  let y_;
  
  if (p<0.01) {
    x_=0;
    y_=0.16*y;
  } else if (p<0.86) {
    x_=0.85*x+0.04*y;
    y_= -0.04*x+0.85*y+1.6; 
  }
    else if(p<0.93){
      x_=0.2*x-0.26*y;
      y_=0.23*x+0.22*y+1.6;
  }else {
    x_= -0.15*x+0.28*y;
    y_=0.26*x+0.24*y+0.44;
  }

  x=x_;
  y=y_;
}