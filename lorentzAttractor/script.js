//Lorenz attractor
let x=0.01;
let y= 0;
let z= 0;
let a= 10;
let b= 28;
let c= 8/3;
let points= [];
let hu = 0;

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  colorMode(HSB, 100) ;
}

function draw() {
  background (0) ;
  rotateX(frameCount*0.01);
  rotateY(frameCount*0.01);
  rotateZ(frameCount*0.01);
orbitControl () ;
 let dt=0.01;
 let dx =(a*(y-x))*dt;
 let dy =(x*(b-z) -y)*dt ;
 let dz =(x*y-c*z)*dt ;
  x+=dx;
  y+=dy;
  z+=dz;
  points.push(createVector(x,y,z));
  scale(3) ;
  
  strokeWeight(0.7) ;
  noFill();
  stroke(hu,100,100)
  beginShape() ;
  for(let i=0; i<points.length; i++){ 
                                     vertex(points[i].x,points[i].y,points[i].z);
  
  }
  
  endShape() ;
  
  if (points.length>5000){
    points.shift();
  }
  if (hu>100 || hu<0) {
     hu=0;
  } else {
     hu+=0.1;
  }
  
}
