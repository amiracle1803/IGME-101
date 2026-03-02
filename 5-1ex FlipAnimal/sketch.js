/**
 * Amir EL, 2/16/26
 * IGME-101: 5-1 ex Flip Animals
 * Description and interaction instructions
 */
 
"use strict"; //catch some common coding errors

/* Global variables */
let showAnimal = true;  // true = show bird, false = show info
let bgColor = 100;      // background brightness (50-200)

/**
 * setup :
 */
function setup() {
  createCanvas(800, 500);     // bigger canvas
  colorMode(RGB, 255);        // simple RGB colors
  loop1();
  loop2();
  loop3();
}
/**
 * draw :
 */

// function draw() {

function loop1(){

  for (let i = 0; i <= 30; i += 1) {
    console.log("loop is i", i); 
  }

}
  
 
function loop2(){

  for (let m = 515; m >= 500; m -= .5) {
    console.log("loop is i", m); 
  }

}

function loop3(){

  for (let m = 510 ; m >= 590; m -= .5) {
    console.log("loop is i", m); 
  }

}



// by amir 