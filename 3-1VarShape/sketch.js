let rabbitX = 200;
let rabbitY = 250;
let bgRed = 100;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(bgRed,135, 200);
  
  //Body - main anchor
  fill(240, 200, 180); //Light brown fur
  noStroke();
  ellipse(rabbitX, rabbitY, 80, 50);
  
  //Head - forward and up from body
  fill(240, 200, 180);
  ellipse(rabbitX -30,rabbitY -25, 45, 45);
  
  //Left ear - tall thin ellipse from head
  ellipse(rabbitX -50, rabbitY -54, 18, 45);
  
    //Right ear - tall thin ellipse from head
  ellipse(rabbitX -18, rabbitY -55, 18, 45);
  
  
    // Ear insides 
  fill(200, 150, 100);
  ellipse(rabbitX - 50, rabbitY - 56, 10, 35);
  ellipse(rabbitX - 18, rabbitY - 58, 10, 34);
  
    // Eyes - black small circles -   L,R
  fill(0);
  ellipse(rabbitX - 38.5, rabbitY - 28.5, 6, 6);
  ellipse(rabbitX - 24, rabbitY - 30, 6, 6);
  
   // Nose - pink triangle -L,T,R
  fill(255, 192, 203);
  stroke(0);
  strokeWeight(1);
  triangle(rabbitX - 38, rabbitY - 20, 
           rabbitX - 32, rabbitY - 14, 
           rabbitX - 27, rabbitY - 21);
  
  // Animate bgRed smoothly
  bgRed += 0.8;
  if (bgRed > 255) {
    bgRed = 0;
  }  

  function mouseClicked() {
  rabbitX = mouseX;
  rabbitY = mouseY;

  }
}