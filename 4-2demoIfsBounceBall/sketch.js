/**
 * Amir EL, 1/23/26
 * IGME-101: 4-2 demo math operators
 * Description and interaction instructions
 */
 
"use strict"; //catch some common coding errors

/* Global variables */
let x;
let y;
let speedX;
let speedY;

/**
 * setup :
 */
function setup() {
  createCanvas(400, 600);
  speedX = 1; // behavior if -1?
  speedY =1; // behavior if -1?
  x = width/3;
  y = height/3;
  
  fill("red"); //ball color

}
/**
 * draw :
 */

function draw() {
  background(100, 180, 255, 20);

  //draw the ball
  ellipse(x, y, 20);

  //If x is too big (at right edge of canvas), make speedX -1
  if (x > width -10){
    //go towards left
    speedX = 1;
  }
  
    //If x is too big (at right edge of canvas), make speedX -1
  if (y > height -10){
    //go towards left
    speedY = 1;
    console.log("nounce ball",y, speedY)
  }

    //If x is too big (at right edge of canvas), make speedX -1
  if (y < -10){
    //go towards left
    speedY = 1;
  }
  
  //move the ball

  x = x + speedX;
  y = y + speedY;

  
}