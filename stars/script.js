let stars=[];
let n=800;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < n; i++) {
 stars[i]=new star() ;
}
}

function draw() {
translate(width/2,height/2); 
 background(0) ;
for (let i = 0; i < n; i++) {
  stars[i].move() ;
  stars[i].show() ;
}

  
}

class star {
  constructor() {
    this.x = random (-width/2,width/2);
    this.y = random(-height/2,height/2);
    this.z = random (height);
    this. b=random(255);
     }
  move() {
    this. z=this.z-1;
    this.sx=map(this.x/this.z, 0,1,0,width) ;
    this.sy=map(this.y/this.z, 0,1,0,height) ;
    if (this.z<1) {
      this.z=height;
      this.y=random(-height/2,height/2);
      this.x=random(-width/2,width/2);    
}
}  
  show(){
    fill(255,255,this.b) ;
    this.r=map(this.z,height,0,0,4) ;
    circle(this.sx,this.sy,this.r) ;
    }
}