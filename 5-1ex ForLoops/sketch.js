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
}
/**
 * draw :
 */

function draw() {
  
  // DRAW BUTTON (always visible)
  fill(100);                  // gray button
  rect(20, 20, 200, 50, 10);  // wide button, rounded
  
  // button text
  fill(255);                  // white text
  textSize(20);
  textAlign(CENTER);
  if (showAnimal) {
    text("Show Info", 120, 50);
  } else {
    text("Show Bird", 120, 50);
  }
  
  // MAIN SCENES
  if (showAnimal) {
    // === BIRD SCENE ===
    
    // background changes with mouse hold
    background(50 + bgColor, 120, 80);  // green swamp colors
    
    // BIG BIRD - easier to click (center at x=500, y=250)
    let birdX = 500;
    let birdY = 250;
    
    // HIT BOX: big rectangle around bird (400-600 x, 160-340 y)
    // COMMENT: birdLeft=400, birdRight=600, birdTop=160, birdBottom=340
    let birdLeft = 400;
    let birdRight = 600;
    let birdTop = 160;
    let birdBottom = 340;
    
    // swamp ground
    fill(60, 80, 40);
    rect(0, 350, 800, 150);
    
    // tree trunks (3 rectangles)
    fill(80, 60, 40);
    rect(100, 200, 25, 200);
    rect(200, 180, 30, 220);
    rect(300, 210, 20, 190);
    
    // BIRD SHAPES (6+ shapes)
    
    // 1. BODY (big yellow oval)
    fill(255, 240, 100);
    noStroke();
    ellipse(birdX, birdY, 140, 90);
    
    // 2. HEAD (yellow circle)
    fill(255, 240, 100);
    ellipse(birdX + 60, birdY - 30, 55, 50);
    
    // 3. BACK (green oval)
    fill(80, 140, 60);
    ellipse(birdX - 6, birdY - 3, 110, 70);
    
    // 4. BLACK CAP (black semicircle)
    fill(0);
    arc(birdX + 60, birdY - 42, 46, 30, PI, 0);
    
    // 5. BLACK THROAT (black triangle)tl,tr,b
    triangle(birdX + 60, birdY - 15, birdX + 87, birdY - 20, birdX + 65, birdY + 5);
    
    // 6. Beak (thin triangle)
    fill(200, 150, 100);
    triangle(birdX + 185, birdY - 30, birdX + 87, birdY - 35, birdX + 88, birdY - 25);
    
    // 7. EYE (black dot)
    fill(0);
    ellipse(birdX + 68, birdY - 30, 6, 6);
    
    // 8. TAIL (triangle) tr
    fill(70, 130, 50);
    triangle(birdX - 70, birdY + 5, birdX - 130, birdY + 40, birdX - 63, birdY + 20);
    
    // branch
    stroke(100, 80, 60);
    strokeWeight(12);
    line(birdX - 150, birdY + 70, birdX + 100, birdY + 50);
    
    // === MOUSE HOLD TO CHANGE COLOR ===
    
    // is mouse OVER bird AND PRESSED?
    let mouseOverBird = 
      mouseX > birdLeft && mouseX < birdRight && 
      mouseY > birdTop && mouseY < birdBottom;
    
    // change color slowly if holding mouse on bird
    if (mouseIsPressed && mouseOverBird) {
      bgColor = bgColor + 1;    // slow change
      if (bgColor > 150) {      // reset when too bright
        bgColor = 50;
      }
    }
    
    // SHOW DEBUG INFO (big text)
    fill(0);
    textSize(18);
    textAlign(LEFT);
    text("Hold mouse on yellow bird → background gets brighter!", 20, height - 60);
    text("bgColor = " + bgColor, 20, height - 35);
    text("mouse = (" + mouseX + ", " + mouseY + ")", 20, height - 10);
    
    // show if mouse is over bird
    fill(mouseOverBird ? [0,255,0] : [255,0,0]);
    textSize(24);
    text(mouseOverBird ? "MOUSE OVER BIRD ✓" : "MOVE TO BIRD →", 20, 100);
    
  } else {
    // === INFO SCENE ===
    background(50, 60, 80);  // blue-gray
    
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text("Bachman's Warbler", width/2, 100);
    
    textSize(18);
    textAlign(LEFT);
    textWrap(WORD);
    text("Scientific name: Vermivora bachmanii\n\n" +
         "Small yellow warbler with black cap (males).\n\n" +
         "Lived in swamp forests with canebrakes\n" +
         "in southeastern USA. Now extinct.", 
         40, 150, width - 80);
  }
  
  textAlign(LEFT);  // reset
}

function mouseClicked() {
  // button area: 20,20 to 220,70
  if (mouseX > 20 && mouseX < 220 && mouseY > 20 && mouseY < 70) {
    showAnimal = !showAnimal;  // flip true/false
  }
  print("showAnimal =", showAnimal, " at", mouseX, mouseY);
}

// by amir 