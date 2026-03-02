/**
 * Amir EL, 1/23/26
 * IGME-101: 3-1 : Landscape Shapes
 * Description and interaction instructions
 */
 
"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
  createCanvas(400, 600);
  textSize(14);
  // frameRate(5);
}

function draw() {
  background("beige");

  //canvas width and height variables
  text(width, 10, 20);
  text(height, 70, 20);


  // frameCount - how many draws
  text(frameCount,110,20);

  // mouse variables
  text(mouseX, 10, 40);
  text(mouseY, 50, 40);
  text(pmouseX, 120 ,40);  
  text(pmouseY, 160 ,40);    
  // is mouse pressed
  text(mouseIsPressed, 220, 40);

  // keyboard variables
  //name of last key pressed
  text(key, 10, 60);

  //number of last key pressed 
  text(keycode, 50, 60);

  // is key pressed
  text(keyIsPressed, 200, 40);
  
  console.log("mouse at", mouseX, mouseY);
}

function mouseClicked(){
  console.log("mouseClicked function:");
  console.log("key variable?",
    key, keycode, 
    keyIsPressed);
  console.log("mouseispressed", mouseIsPressed);
}