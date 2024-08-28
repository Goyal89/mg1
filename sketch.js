function setup() {
  createCanvas(400, 400,WEBGL);
   background(209, 172, 223)
}

function draw() {
  
  
  
  
  noStroke()
  
  

   rotateY(frameCount * 0.01);


  rect(-80, -60,200,200);
  
  fill(mouseX,mouseY,200,200)
  stroke(50,30,20)
  
}