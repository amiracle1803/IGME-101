/**
 * Amir EL, 1/23/26
 * IGME-101: 1-3: Landscape Shapes
 * Description and interaction instructions
 */
 
"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
  createCanvas(500, 500);
  textSize(14);
  textAlign(LEFT);
}

function draw() {
  // Sky blue background - Color 1: Sky Blue
  background(135, 206, 235);

  // ===== SUN (Ellipse Shape #1) =====
  fill(255, 255, 0);  // Color 2: Yellow
  stroke(255, 165, 0);  // Orange stroke
  strokeWeight(3);
  ellipse(80, 80, 80, 80);

  // ===== TREE TRUNK (Rectangle Shape #2) =====
  fill(139, 69, 19);  // Color 3: Brow n
  noStroke();
  rect(350, 250, 40, 200);

  // ===== TREE LEAVES (Triangle Shape #3) =====
  fill(0, 128, 0);  // Green
  noStroke();
  // Each triangle has top point vertically aligned at x=370
  triangle(370, 200, 330, 250, 410, 250);  // Top point at center (370, 200)
  triangle(370, 170, 340, 220, 400, 220);  // Top point at center (370, 170)
  triangle(370, 140, 350, 190, 390, 190);  // Top point at center (370, 140)

  // ===== BENCH (Rectangles) =====
  fill(128);  // Gray
  rect(100, 350, 150, 20);  // Bench seat
  rect(80, 320, 20, 70);    // Left leg
  rect(250, 320, 20, 70);   // Right leg

  // ===== BOUNCING BALL (Ellipse) =====
  // variables to create interactive animation
  let ballY = height - mouseY * 0.5;  // Inverted mapping
  
  fill(255, 0, 0, 150);  // Color: Semi-transparent red
  stroke(255);  // White stroke
  strokeWeight(2);
  ellipse(200, ballY, 60, 60);

  // Horizontal bounce using sine wave animation with frameCount
  let bounceX = 200 + sin(frameCount * 0.05) * 50;
  fill(255, 100, 0, 120);  // Orange variant for depth
  ellipse(bounceX, ballY, 60, 60);  // Overlapping circles for glow effect

  // ===== TEXT LABELS =====
  fill(0);  // Black text
  textSize(16);
  text("Sunny Park Scene", 20, 30);

  // textSize(12);
  // text("Interactive Ball: Move mouse up/down", 20, height - 60);
  // text("3 Shape Types: Ellipse, Rectangle, Triangle", 20, height - 40);
  // text("3+ Colors: Blue, Yellow, Brown, Green, Red", 20, height - 20);
}