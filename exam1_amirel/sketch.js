/**
 * Amir EL, 2/16/26
 * IGME-101: Practrical 1 Exam
 * Description and interaction instructions
 */

"use strict"; //catch some common coding errors

/* Global variables */

// declare and initialize a global number to store the coordinate of the wide rectangle
//stores the long rect coordinate
let rectangleY = 0;


// declare another global variables to stor the sunny count - initialize it to 0
let sunnyCount = 0;

// declare a global boolean variable to control whether the sunny shape is a circle of not (a square)- initialized it to false.
//make a t/f variable fot sun shape true for (circle)false for (square)
let sunnyShape = false;


/**
 * setup :
 */
function setup() {
  createCanvas(800, 500);     // bigger canvas
  textSize(30);
  ellipseMode(CORNER);
  noStroke();
//sunnyCount increasing


} 
/**
 * draw :
 */

function draw() {
  //transparent color background
  background(220);
  rect(0,100,800,40);

  rectangleY = rectangleY + 1

  //rising rect   rectangleX

  //
  if (rectangleY > 255) {
    rectangleY = 0;
    

    fill(4, 80, 255);
    strokeWeight(35);
  }  else { 
    fill (192,100,71)
    //draw thin rectange
    strokeWeight(15);
    rectangleY -= .5


  }
  if (rectangleY >=0){
    rectangleY = 500
  }











  if(mouseClicked){
  fill (192,100,71);

  //insert sunny shape function
  if (sunnyShape = 'true') {
    //draw a circle in upper right
    ellipse(600, 100, 40, 40);
    text(sunnyCount)

  }  else { 
  //draw a square in the same upper right
  rect(600,100, 40, 40);
  

    text(sunnyCount)


  }


  
}

//when mouse is press amd held number increase shaped doen't change
function keyIsPressed(){
  //toggle true/false value 
  sunnyShape = !sunnyShape;

}
}
// by amir 