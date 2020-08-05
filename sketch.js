let d = [];
function setup() {
  createCanvas(600, 500);
  for(var i=0;i<200;++i){
   d[i] = new Drop();
  }
}

function draw() {
  background(0);
   for(var i=0;i<d.length;++i){
   d[i].show();
   d[i].fall(); 
  }
  
}

class Drop{
 constructor(){
  this.x = random(width);
  this.y = random(-100,-70);
  this.vy = random(3,7);
  this.gravity = .05;
   this.z =random(10,20);
  this.len = map(this.z,15,20,10,20); 
   
 }
 
 show(){
  let thick = map(this.z,10,20,1,3);
  stroke(255,0,0);
  strokeWeight(thick); 
  line(this.x,this.y,this.x,this.y+this.len);
 }  
 fall(){
  this.y+=this.vy;
  this.vy+=this.gravity;
   if(this.y>height){
     this.y = random(-100,-70);
     this.vy = random(3,7);
      }
 } 
}