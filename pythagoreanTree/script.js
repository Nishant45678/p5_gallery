
let x = 50;
let i=1

function setup() {
  createCanvas(windowWidth, windowHeight);
 // rectMode(CENTER) ;
  
}

function draw() {
  background(255);
  stroke (0);
  strokeWeight (1);
  noFill();
  translate ((width-x) /2 -50, height/2);
  noLoop();
  branch(x, i) ;
  
  
  
}

function branch(len,i) {
  let angle=PI/3;
  push();
  rotate(-PI/2);
  fill(random(255));
  square(0,0,len); 
  pop() ;
  if (i>0) {
   push(); 
    translate(0,-len) ;
   // rotate (-PI/3) ;
    rotate(-angle) ;
  //  branch(len/2,i-1) ;
    branch(len*cos(angle),i-1 );
    pop();
  
    push();
    translate(len,-len) ;
    //rotate(PI/6)   ;
    rotate (HALF_PI-angle) ;
    translate (-len*sin(angle),0) 
    //translate (-len*sqrt(3)/2,0) ;
   // branch(len*sqrt(3)/2, i-1);
    branch(len*sin(angle),i-1);
    pop() ;
    
  }
}

function mousePressed() {
   i++;
  loop() ;
}

