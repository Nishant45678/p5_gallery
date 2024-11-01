let p=[];
let r=150;
let a;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < TWO_PI; i+=TWO_PI/6) {
     p.push(createVector(r*cos(i), r*sin(i))); 
  }

 a=createVector(random (width/2), random (height/2));
  background (255) ;
}
function draw() {

 // point(a.x,a.y) ;
  translate (width/2, height/2) ; 
  rotate(PI/2) ;
  for (let i = 0; i < 10; i++) {
   
   let b = random (p) ;
   a.x=a.x+(2/3)*(b.x-a.x);
   a.y=a.y+(2/3)*(b.y-a.y);
    stroke(0) ;

    strokeWeight(1) ;
    point(a.x, a.y) ;
  }
  
}