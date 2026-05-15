/**
 * ============================================================
 *  sketch_Full_CodeGuide.js
 *  IGME-101 — Full Semester p5.js Cheat Sheet
 *  Based on WM Harris demos, Spring 2026
 * ============================================================
 *  HOW TO USE:
 *  Search (Ctrl+F / Cmd+F) for any topic keyword.
 *  Copy the block you need and paste into your sketch.
 *  All explanations are written as comments above each block.
 * ============================================================
 *
 *  TABLE OF CONTENTS
 *  -----------------
 *  1.  SKETCH STRUCTURE         (setup, draw, "use strict")
 *  2.  DRAWING SHAPES           (point, line, rect, ellipse, triangle, text, arc)
 *  3.  SHAPE MODES              (rectMode, ellipseMode)
 *  4.  STYLING                  (fill, stroke, strokeWeight, noFill, noStroke)
 *  5.  COLOR MODES              (RGB, HSB, alpha/transparency)
 *  6.  SYSTEM VARIABLES         (mouseX, mouseY, pmouseX, width, height, frameCount, key, keyCode)
 *  7.  CUSTOM VARIABLES         (let, const, global vs local, shortcut operators)
 *  8.  MATH & P5 MATH FUNCTIONS (random, round, floor, ceil, abs, max, min, constrain, lerp, map, dist, sin, cos)
 *  9.  EVENT HANDLERS           (mouseClicked, mousePressed, mouseReleased, mouseDragged, keyPressed, keyTyped, keyReleased)
 * 10.  CONDITIONALS             (if, else if, else, boolean vars, logical operators &&, ||, !)
 * 11.  LOOPS                    (while, for — counting up, down, wrapping, patterns)
 * 12.  CUSTOM FUNCTIONS         (no params, with params, with return values)
 * 13.  CLASSES & OOP            (constructor, properties, methods, method params, isInside, object references, null)
 * 14.  ARRAYS                   (create, access, fill, loop, array of objects)
 * 15.  COORDINATE TRANSFORMS    (translate, rotate, scale, push, pop, resetMatrix)
 * 16.  IMAGES                   (preload, loadImage, image, tint, noTint, image methods)
 * 17.  FINITE STATE MACHINE     (state variable, transition logic)
 * 18.  TRIG & ANIMATION         (sin, cos, circular motion, waves, oscillation, lerp easing)
 * 19.  SOUND                    (SoundFile, AudioIn, Oscillator, Phrase/Part, Amplitude, FFT)
 * ============================================================
 */
 
"use strict"; // Always include this — catches common coding errors like typos in variable names
 
 
 
 
/* ============================================================
   1. SKETCH STRUCTURE
   Every p5.js sketch needs setup() and draw().
   setup()  runs ONCE when the sketch loads.
   draw()   runs over and over (~60 times/sec by default).
   ============================================================ */
 
// Global variables go here — ABOVE setup() so all functions can use them.
// Example:
let myVar = 0;
 
// setup() — runs once at start. Create canvas, set defaults.
function setup() {
  createCanvas(400, 400);   // sets canvas width and height in pixels
  background(255);          // white background painted once
  // background("pink");    // or use color names
  frameRate(30);            // optional: slow down to 30fps (default is 60)
  textSize(18);             // set default text size
}
 
// draw() — runs repeatedly (animation loop)
function draw() {
  background(255);          // repaint background to erase previous frame (animation)
  // background(255, 60);  // semi-transparent bg creates trail effect (alpha 0-255)
 
  // Put drawing code here — it reruns every frame.
}
 
 
 
 
/* ============================================================
   2. DRAWING SHAPES
   Coordinates: X increases LEFT→RIGHT, Y increases TOP→DOWN.
   ============================================================ */
 
// point(x, y) — draws a single pixel dot
point(30, 75);
 
// line(x1, y1, x2, y2) — draws a line between two points
line(10, 20, 60, 100);
 
// rect(x, y, w, h) — rectangle. Default anchor = top-left corner.
rect(40, 20, 50, 70);
rect(40, 100, 20);          // square — only 1 size arg needed
 
// ellipse(cx, cy, w, h) — ellipse. Default anchor = center.
ellipse(110, 110, 100, 100);
ellipse(100, 50, 40);       // circle — only 1 size arg needed
 
// circle(cx, cy, diameter) — shorthand for a circle
circle(200, 200, 50);
 
// triangle(x1,y1, x2,y2, x3,y3) — three corner points
triangle(30, 75, 58, 20, 86, 75);
 
// quad(x1,y1, x2,y2, x3,y3, x4,y4) — four corner points
quad(10, 10, 90, 10, 80, 90, 20, 90);
 
// text(string, x, y) — displays text on canvas
text("Hello!", 10, 30);
text("Mouse at: " + mouseX + ", " + mouseY, 10, 50);   // string concatenation
text(frameCount, 10, 70);  // also works with numbers
 
// arc(cx, cy, w, h, startAngle, stopAngle) — partial ellipse
arc(100, 100, 80, 80, 0, PI);       // half circle (bottom)
arc(200, 200, 80, 80, 0, TWO_PI);   // full circle
 
 
 
 
/* ============================================================
   3. SHAPE MODES
   Change how coordinates anchor shapes.
   Call BEFORE the shape function.
   ============================================================ */
 
// rectMode — changes what x,y means for rect()
rectMode(CORNER);    // default: x,y = top-left corner
rectMode(CENTER);    // x,y = center of rectangle
 
// ellipseMode — changes what x,y means for ellipse()
ellipseMode(CENTER); // default: x,y = center
ellipseMode(CORNER); // x,y = top-left of bounding box
 
// imageMode — changes what x,y means for image()
imageMode(CORNER);   // default: x,y = top-left
imageMode(CENTER);   // x,y = center of image
 
 
 
 
/* ============================================================
   4. STYLING
   Always call fill/stroke BEFORE calling the shape function.
   The style applies to everything drawn after it until changed.
   ============================================================ */
 
fill("red");                  // fill by color name
fill(0, 144, 180);            // fill by RGB values (0-255 each)
fill(0, 144, 180, 128);       // fill by RGBA (128 = ~50% transparent)
fill(255);                    // white
fill(0);                      // black
fill(128);                    // gray
 
stroke("orchid");             // outline color by name
stroke(255, 0, 0);            // red outline (RGB)
stroke(128, 119, 251);        // custom RGB outline
 
strokeWeight(5);              // thickness of lines and outlines (in pixels)
strokeWeight(0.5);            // thin line
strokeWeight(10);             // thick
 
noFill();                     // shapes have NO fill (transparent inside)
noStroke();                   // shapes have NO outline
 
 
 
 
/* ============================================================
   5. COLOR MODES
   Default mode is RGB (red, green, blue, each 0-255).
   ============================================================ */
 
// --- RGB (default) ---
// background(r, g, b) or fill(r, g, b, [alpha])
colorMode(RGB);               // red 0-255, green 0-255, blue 0-255
fill(255, 90, 0);             // orange
fill(255, 90, 0, 160);        // orange, sort-of transparent (alpha 0-255)
fill(255, 90, 0, 40);         // orange, very transparent
fill(90, 40);                 // gray (value 90) with alpha 40
 
// --- HSB (Hue, Saturation, Brightness) ---
// Hue:        0-360  (color wheel position — 0=red, 120=green, 240=blue)
// Saturation: 0-100  (0=gray, 100=full color)
// Brightness: 0-100  (0=black, 100=full brightness)
colorMode(HSB);
fill(0, 100, 100);            // pure red
fill(192, 100, 71);           // blue-green
fill(0, 0, 57);               // mid gray
fill(255, 90, 100, 0.4);      // purple, 40% opacity (alpha 0-1 in HSB)
fill(255, 90, 100, 1);        // purple, fully opaque
 
// Switch back to RGB:
colorMode(RGB);
 
// --- color() function — stores a color in a variable ---
let c = color(255, 100, 50);  // create an RGB color object
fill(c);                      // use stored color
let r = red(c);               // extract red channel value
let g = green(c);
let b = blue(c);
 
 
 
 
/* ============================================================
   6. SYSTEM (BUILT-IN) VARIABLES
   p5.js provides these automatically — no need to declare them.
   ============================================================ */
 
// Canvas size:
width;    // canvas pixel width
height;   // canvas pixel height
 
// Animation:
frameCount;  // number of times draw() has run (counts up from 0)
 
// Mouse position:
mouseX;        // current X of mouse cursor
mouseY;        // current Y of mouse cursor
pmouseX;       // mouse X from the PREVIOUS frame (useful for drawing lines)
pmouseY;       // mouse Y from the previous frame
mouseIsPressed; // true while any mouse button is held down (boolean)
 
// Keyboard:
key;           // string of the most recently pressed key (e.g., "a", " ", "Enter")
keyCode;       // numeric code of last key (e.g., ENTER, LEFT_ARROW, BACKSPACE)
keyIsPressed;  // true while any key is held down (boolean)
 
// Example — draw a brush stroke that follows mouse movement:
function draw_example_brush() {
  stroke("slateBlue");
  line(pmouseX, pmouseY, mouseX, mouseY);  // connects previous to current mouse pos
}
 
// Example — display system variables as text:
function draw_example_display_vars() {
  background("beige");
  text("width: " + width,           10, 20);
  text("height: " + height,         10, 40);
  text("frameCount: " + frameCount, 10, 60);
  text("mouseX: " + mouseX,         10, 80);
  text("mouseY: " + mouseY,         10, 100);
  text("pmouseX: " + pmouseX,       10, 120);
  text("mouseIsPressed: " + mouseIsPressed, 10, 140);
  text("key: " + key,               10, 160);
  text("keyCode: " + keyCode,       10, 180);
  text("keyIsPressed: " + keyIsPressed,   10, 200);
}
 
 
 
 
/* ============================================================
   7. CUSTOM VARIABLES
   Use `let` to declare your own variables.
   Global variables (declared above setup) are accessible everywhere.
   Local variables (declared inside a function) only exist in that function.
   ============================================================ */
 
// --- Declaring and initializing ---
let count;           // declared but undefined (no value yet)
let starter = 35;    // declared AND initialized to 35
 
// --- Global vs local ---
let colorCount = 0;  // GLOBAL — persists between every draw() call
 
function draw_example_global_vs_local() {
  // LOCAL variable — resets to 0 EVERY draw() call, never changes
  let localCount = 0;
  localCount = localCount + 1;  // always just 1
  text("local: " + localCount, 10, 30);
 
  // GLOBAL variable — keeps accumulating each frame
  colorCount = colorCount + 1;
  text("global: " + colorCount, 10, 60);
}
 
// --- Assignment and update ---
let x = 0;
x = x + 5;    // update x by adding 5
x = mouseX;   // assign a system variable
x = width / 2; // assign a math expression
 
// --- Shortcut (compound assignment) operators ---
x++;          // x = x + 1
x--;          // x = x - 1
x += 10;      // x = x + 10
x -= 45;      // x = x - 45
x *= 4.2;     // x = x * 4.2
x /= 5;       // x = x / 5
x %= 4;       // x = x % 4  (remainder)
 
// --- Remainder operator % ---
// Returns the remainder after division.
// Very useful for WRAPPING — making something loop/cycle.
// Example: frameCount % width  → bar wraps across the canvas
// Example: frameCount % 10     → cycles 0,1,2,3,4,5,6,7,8,9,0,1,2...
rect(frameCount % width, 0, 10, height);  // v-bar wraps across canvas
 
// --- Arithmetic operators ---
// +  addition        mouseY + 40
// -  subtraction     height - 20
// *  multiplication  width * 2
// /  division        frameCount / 1000
// %  remainder       frameCount % 10
 
// --- String concatenation with + ---
text(mouseX + ", " + mouseY, mouseX, mouseY);    // prints "200, 150"
text("Frame #" + frameCount, 10, 30);
text("99! " + (55 + 44), 10, 50);  // parens force math BEFORE string join → "99! 99"
text("99! " + 55 + 44, 10, 70);    // without parens → "99! 5544" (string concat)
 
 
 
 
/* ============================================================
   8. MATH & p5 MATH FUNCTIONS
   ============================================================ */
 
// random() — returns a random floating point number
random();              // 0 up to (but not including) 1
random(-4);            // 0 up to -4 (or just use abs range)
random(100);           // 0 up to 100
random(50, 150);       // 50 up to 150
random(["a","b","c"]); // picks random element from array
 
// round, floor, ceil — rounding functions
round(3.7);    // 4  — nearest integer
floor(3.7);    // 3  — always rounds DOWN
ceil(3.2);     // 4  — always rounds UP
round(3.456, 2); // 3.46 — round to 2 decimal places
 
// abs() — absolute value (removes negative sign)
abs(-5);    // 5
abs(5);     // 5
 
// max() — returns the largest value
max(3, 7, 2);   // 7
max(ballX, leftX);  // ensures ballX is never less than leftX (good for boundary)
 
// min() — returns the smallest value
min(3, 7, 2);   // 2
min(ballX, rightX); // ensures ballX is never greater than rightX
 
// constrain(value, low, high) — clamps a value within a range
let cx = constrain(mouseX, 30, 370); // keeps cx between 30 and 370
let cy = constrain(mouseY, 0, height);
 
// lerp(start, stop, amount) — linear interpolation
// Returns a value that is `amount` percent of the way from start to stop.
// Use for SMOOTH / EASING movement.
lerp(10, 50, 0.3);   // 22 (30% of the way from 10 to 50)
lerp(10, 50, 0.5);   // 30 (halfway)
lerp(10, 50, 0.7);   // 38 (70% of the way)
 
// Smooth mouse-following circle using lerp:
let lerpX = 0;
let lerpY = 0;
function draw_lerp_example() {
  lerpX = lerp(lerpX, mouseX, 0.05); // moves 5% of distance toward mouse each frame
  lerpY = lerp(lerpY, mouseY, 0.05);
  ellipse(lerpX, lerpY, 50);
}
 
// map(value, fromLow, fromHigh, toLow, toHigh, [clamp]) — rescales a number
// Converts a value from one range to another.
let sz = map(mouseX, 0, width, 10, 100);          // mouseX controls circle size
let angle = map(mouseY, 0, height, 0, TWO_PI);    // mouseY controls rotation
let celc = map(37, 32, 212, 0, 100);              // 37°F to Celsius
let x2 = map(mouseX, 0, width, 150, 250, true);   // true = constrain to target range
 
// dist(x1, y1, x2, y2) — distance between two points
let d = dist(mouseX, mouseY, 200, 200);  // distance from mouse to canvas center
// Use for checking if mouse is near/inside a circle:
if (d < 50) {
  fill("red"); // mouse is within 50px of center
}
 
// Trig functions (work in DEGREES if angleMode(DEGREES) is set)
angleMode(DEGREES);    // use 0-360 degrees instead of radians
angleMode(RADIANS);    // default: 0 to TWO_PI
 
sin(angle);   // returns -1 to 1, use for vertical oscillation
cos(angle);   // returns -1 to 1, use for horizontal oscillation
 
// Circular motion using sin and cos:
// x = centerX + cos(angle) * radius
// y = centerY + sin(angle) * radius
 
// Math constants
PI;       // 3.14159...
TWO_PI;   // 6.28318... (full circle in radians)
HALF_PI;  // 1.5707...  (quarter circle)
 
// JavaScript's own Math library also works:
Math.random();   // same as random() but no p5 shortcuts
Math.abs(-5);    // 5
Math.round(3.7); // 4
Math.floor(3.7); // 3
Math.ceil(3.2);  // 4
Math.max(3, 7);  // 7
Math.min(3, 7);  // 3
 
 
 
 
/* ============================================================
   9. EVENT HANDLERS
   These functions run ONCE when the named event occurs.
   They live OUTSIDE setup() and draw().
   ============================================================ */
 
// mouseClicked() — fires once when mouse button is pressed AND released
function mouseClicked() {
  background(random(255));  // repaint canvas with random gray
  console.log("Clicked at", mouseX, mouseY);
}
 
// mousePressed() — fires the moment the button is pressed down
function mousePressed() {
  fill(255);
  ellipse(200, 200, 200);  // big white circle on press
  console.log("mouseIsPressed inside mousePressed?", mouseIsPressed); // true
}
 
// mouseReleased() — fires when the mouse button is let go
function mouseReleased() {
  console.log("Mouse released");
}
 
// mouseDragged() — fires every frame while mouse is held AND moving
function mouseDragged() {
  ellipse(mouseX, mouseY, 20); // draw circles while dragging
}
 
// mouseMoved() — fires every frame while mouse moves WITHOUT button held
function mouseMoved() {
  point(mouseX, mouseY);
}
 
// keyPressed() — fires once per key press (includes arrow keys, Enter, Backspace, etc.)
function keyPressed() {
  console.log("Key pressed:", key, "keyCode:", keyCode);
 
  if (key === ' ') {
    background(255);         // spacebar clears canvas
  }
  if (keyCode === LEFT_ARROW) {
    x -= 5;                  // move something left
  }
  if (keyCode === RIGHT_ARROW) {
    x += 5;
  }
  if (keyCode === UP_ARROW) {
    y -= 5;
  }
  if (keyCode === DOWN_ARROW) {
    y += 5;
  }
  if (keyCode === ENTER) {
    console.log("Enter pressed");
  }
}
 
// keyTyped() — fires for TYPEABLE keys only (letters, numbers — NOT arrows, Enter, Backspace)
function keyTyped() {
  fill(0);
  text(key, mouseX, mouseY + 30); // draw typed character at mouse
}
 
// keyReleased() — fires once when a key is let go
function keyReleased() {
  console.log("Key released:", key);
}
 
// keyIsDown(keyCode) — use INSIDE draw() to check if a key is HELD continuously
// (different from keyPressed which fires once per press)
function draw_keyIsDown_example() {
  if (keyIsDown(LEFT_ARROW)  || keyIsDown(65)) { x -= 1; }  // 65 = 'A'
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) { x += 1; }  // 68 = 'D'
  if (keyIsDown(UP_ARROW)    || keyIsDown(87)) { y -= 1; }  // 87 = 'W'
  if (keyIsDown(DOWN_ARROW)  || keyIsDown(83)) { y += 1; }  // 83 = 'S'
  x = constrain(x, 10, width - 10);
  y = constrain(y, 10, height - 10);
}
 
 
 
 
/* ============================================================
   10. CONDITIONALS
   if / else if / else — control what code runs based on conditions.
   ============================================================ */
 
// Simple if
if (mouseX < 10) {
  fill(100, 0, 250, 10);
  ellipse(width / 2, mouseY, 20); // only draw when mouse is near left edge
}
 
// if / else — one OR the other runs, never both
if (mouseIsPressed) {
  ellipse(width / 2, height / 2, width);   // circle when pressed
} else {
  rect(width / 2, height / 2, width - 40); // square otherwise
}
 
// if / else if / else — check multiple conditions in order
if (mouseX < width / 2) {
  fill("blue");
} else if (mouseX < width * 0.75) {
  fill("green");
} else {
  fill("red");
}
 
// Age ranges example — only ONE branch executes
let age = 55;
if (age >= 50) {
  text(age + " over 50", 3, 94);
} else if (age >= 40) {
  text(age + " 40s", 3, 94);
} else if (age >= 30) {
  text(age + " 30s", 3, 94);
} else if (age >= 20) {
  text(age + " 20s", 3, 94);
} else {
  text(age + " youngster", 3, 94);
}
 
// Boundary wrapping with if — move a shape off canvas, reset it
let circleX = -10;
function draw_wrap_example() {
  ellipse(circleX, height / 2, 20);
  circleX = circleX + 1;
  if (circleX > width + 10) {
    circleX = -10;   // teleport back to left
  }
}
 
// Boundary bouncing with if — reverse direction at edges
let bx = 0, by = 0, speedBX = 2, speedBY = 1;
function draw_bounce_example() {
  if (bx > width - 10)  { speedBX = -1; }
  if (bx < 10)          { speedBX = 1; }
  if (by > height - 10) { speedBY = -1; }
  if (by < 10)          { speedBY = 1; }
  ellipse(bx, by, 20);
  bx += speedBX;
  by += speedBY;
}
 
// Custom boolean variable — track a one-time state
let isFirstClick = true;
function draw_firstclick_example() {
  if (isFirstClick) {
    ellipse(mouseX, mouseY, 20);  // circles before first click
  } else {
    point(mouseX, mouseY);        // points after first click
  }
}
function mouseClicked_firstclick() {
  isFirstClick = false;  // flip once
}
 
// Toggling a boolean with !  (NOT operator)
let isBlue = true;
function mousePressed_toggle() {
  isBlue = !isBlue;  // flips true→false or false→true
  console.log("isBlue?", isBlue);
}
 
// --- LOGICAL OPERATORS ---
 
// && (AND) — BOTH conditions must be true
if (mouseIsPressed && keyIsPressed) {
  fill("green");  // only fills green if BOTH mouse and key are held
}
 
// || (OR) — AT LEAST ONE condition must be true
if (mouseY < 0 || mouseY > height) {
  console.log("Mouse is outside canvas vertically");
}
 
// ! (NOT) — reverses a boolean
if (!mouseIsPressed) {
  fill("blue");  // fill blue when mouse is NOT pressed
}
 
// Checking if mouse is inside a rectangle (hit detection)
function mouseClicked_button() {
  // rect drawn at: rect(270, 300, 90, 40)
  // left=270, right=270+90=360, top=300, bottom=300+40=340
  if ((mouseX >= 270) && (mouseX <= 360) &&
      (mouseY >= 300) && (mouseY <= 340)) {
    stroke("green");  // mouse WAS inside the button
  }
}
 
// Episodic vs sustained input
// keyTyped() = EPISODIC — fires ONCE per key press, changes a mode
// keyIsPressed in draw() = SUSTAINED — keeps doing something while held
let shapeMode = "c";
let sHue = 0;
function draw_episodic_sustained() {
  if (keyIsPressed && key === "h") {
    sHue = sHue + 1;  // sustained: hue changes while 'h' is held
  }
  fill(sHue, 100, 100, 0.4);
  if (shapeMode === "c")      { ellipse(mouseX, mouseY, 20); }
  else if (shapeMode === "q") { rect(mouseX, mouseY, 20); }
}
function keyTyped_episodic() {
  if (key === "c")      { shapeMode = "c"; }  // episodic: mode switches once
  else if (key === "q") { shapeMode = "q"; }
}
 
 
 
 
/* ============================================================
   11. LOOPS
   while and for — repeat code without copy-pasting.
   LCV = Loop Control Variable (the variable that changes each turn).
   ============================================================ */
 
// --- while loop structure ---
// while (test is true) { do work; update LCV; }
// LCV:  start, test (stop condition), update each turn
 
// Count UP from 1 to 3:
let count_w = 1;
while (count_w <= 3) {
  console.log("count is", count_w);
  count_w++;  // update — NEVER forget this or you get an infinite loop!
}
 
// Count DOWN:
let num_w = 20;
while (num_w > 0) {
  console.log("num is", num_w);
  num_w -= 2;
}
 
// Draw horizontal lines across the whole canvas (10px spacing):
function hLines() {
  let y_w = 0;
  while (y_w <= height) {
    line(0, y_w, width, y_w);
    y_w += 10;
  }
}
 
// Draw concentric circles (bullseye) using while:
function drawBullseye_while(cx, cy) {
  let w_b = 200;
  while (w_b >= 10) {
    fill(w_b);               // grayscale color based on width
    ellipse(cx, cy, w_b);
    w_b -= 20;
  }
}
 
// Draw bug legs using while:
function drawBug_while(bodyX, bodyY) {
  rect(bodyX, bodyY, 200, 40);    // body
  ellipse(bodyX - 20, bodyY + 20, 50); // head
  let legX = bodyX + 10;          // LCV: start at body left + 10
  while (legX < bodyX + 190) {    // stop before body right edge
    line(legX, bodyY, legX, bodyY + 50);
    legX += 15;                   // next leg position
  }
}
 
// --- for loop structure ---
// for (initialize LCV; test; update) { do work; }
// Equivalent to while but more compact — LCV stays local to the loop.
 
// Count up, draw row of squares across canvas:
for (let x_f = 0; x_f <= width; x_f += 20) {
  rect(x_f, 100, 10, 10);
}
 
// Count down (same bullseye as above but with for):
function drawBullseye_for(cx, cy) {
  for (let w_f = 200; w_f >= 10; w_f -= 20) {
    fill(w_f, 10);
    ellipse(cx, cy, w_f);
  }
}
 
// Nested for loop — 2D grid of ellipses:
for (let gx = 0; gx < width; gx += 50) {
  for (let gy = 0; gy < height; gy += 50) {
    ellipse(gx, gy, 20, 20);
  }
}
 
// for loop over an array (most common pattern):
let items_f = ["red", "green", "blue"];
for (let i = 0; i < items_f.length; i++) {
  fill(items_f[i]);
  rect(i * 60, 100, 50, 50);
}
 
// for...of — shorter syntax when you don't need the index:
for (let color_f of items_f) {
  console.log(color_f);
}
 
// Loop challenges from class:
// 1 — count ODD numbers from 1 to 31
for (let i = 1; i <= 31; i += 2) { console.log("odd:", i); }
// 2 — count down from 515 by 0.5 until 500
for (let l = 515; l >= 500; l -= 0.5) { console.log("l:", l); }
// 3 — draw column of squares at x=130, 17px tall, 4px gap
for (let yy = 0; yy < height; yy += 21) { rect(130, yy, 17); }
 
 
 
 
/* ============================================================
   12. CUSTOM FUNCTIONS
   Group code into named reusable blocks.
   DECLARE: function name(params) { ...body... }
   CALL:    name(arguments);
   ============================================================ */
 
// --- No parameters, no return ---
// Just organizes code — call it from draw() to keep draw() readable.
function drawHeart_noparams() {
  fill("pink");
  ellipse(100 - 20, 100, 40);
  ellipse(100 + 20, 100, 40);
  triangle(100 - 40, 100 + 5, 100 + 40, 100 + 5, 100, 100 + 60);
}
 
// --- With parameters — flexible, reusable ---
// Parameters are LOCAL variables that receive the values you pass in.
/**
 * drawHeart: draws a 3-shape heart at the given location in the given color.
 * @param {number} hx  x anchor coordinate
 * @param {number} hy  y anchor coordinate
 * @param {*} fColor   fill color (any valid p5 color)
 */
function drawHeart(hx, hy, fColor) {
  fill(fColor);
  ellipse(hx - 20, hy, 40);
  ellipse(hx + 20, hy, 40);
  triangle(hx - 40, hy + 5, hx + 40, hy + 5, hx, hy + 60);
}
// Usage:
// drawHeart(200, 100, "red");
// drawHeart(mouseX, mouseY, "pink");
// drawHeart(random(width), random(height), "orange");
 
/**
 * printNum: logs a number to the console.
 * @param {number} num1  number to print
 */
function printNum(num1) {
  console.log("Number is", num1);
}
 
/**
 * centerShape: draws a shape in the center of canvas based on a string.
 * @param {string} shapeStr  "circle" or "text"
 */
function centerShape(shapeStr) {
  if (shapeStr === "circle") {
    fill("lavender");
    ellipse(width / 2, height / 2, 350);
  } else if (shapeStr === "text") {
    fill("orange");
    text("Good weekend ahead", 160, height / 2);
  }
}
 
// --- With return value — function GIVES BACK a result ---
// Use `return` to send a value back to whoever called the function.
// The caller must STORE or USE the return value or it's lost.
 
/**
 * add2Numbers: returns the sum of two numbers.
 * @param {number} num1
 * @param {number} num2
 * @returns {number} their sum
 */
function add2Numbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
// Usage:
// let result = add2Numbers(10, 20);  // result = 30
// if (add2Numbers(mouseX, 40) < width) { ... }
 
/**
 * pickColor: returns a random RGB color object.
 * @returns {color}
 */
function pickColor() {
  let randomColor = color(random(255), random(255), random(255));
  return randomColor;
}
// Usage:
// fill(pickColor());
 
/**
 * isMouseLeft: returns whether the mouse is on the left side of the canvas.
 * @returns {boolean} true if mouse is on left half
 */
function isMouseLeft() {
  return (mouseX < width / 2);  // returns true or false
}
// Usage:
// if (isMouseLeft()) { fill("lavender"); }
 
 
 
 
/* ============================================================
   13. CLASSES & OBJECT-ORIENTED PROGRAMMING (OOP)
   A class is a TEMPLATE for creating objects (instances).
   Each instance gets its own copy of the properties.
   Methods are functions that belong to the class.
   ============================================================ */
 
/**
 * Ball class — a bouncing circle with position and velocity.
 * Constructor sets initial values.
 * Methods: display(), move(), bounce().
 */
class Ball {
  /**
   * @param {*} _color  fill color
   * @param {number} startX  starting x position
   * @param {number} startY  starting y position
   * @param {number} velX  horizontal speed (can be negative)
   * @param {number} velY  vertical speed (can be negative)
   */
  constructor(_color, startX, startY, velX, velY) {
    this.color = _color;   // this.propName stores data ON the instance
    this.x = startX;
    this.y = startY;
    this.velX = velX;
    this.velY = velY;
    this.size = 20;
  }
 
  // display() — draws the ball using its own properties
  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
 
  // move() — updates position and bounces off canvas edges
  move() {
    // Reverse horizontal speed at left/right edges
    if (this.x < 10 || this.x > width - 10) {
      this.velX *= -1;
    }
    // Reverse vertical speed at top/bottom edges
    if (this.y < 10 || this.y > height - 10) {
      this.velY *= -1;
    }
    this.x += this.velX;
    this.y += this.velY;
  }
}
 
/**
 * Car class — a rectangle that moves horizontally and wraps.
 */
class Car {
  /**
   * @param {*} _color   fill color
   * @param {number} startX  starting x
   * @param {number} startY  starting y
   */
  constructor(_color, startX, startY) {
    this.color = _color;
    this.x = startX;
    this.y = startY;
    this.speed = 0;
    this.doors = 4;
    this.isConvertible = false;
  }
 
  // display() — draws the car rectangle
  display() {
    if (this.isInside(mouseX, mouseY)) {
      fill(100, 30);        // transparent if mouse is hovering over it
    } else {
      fill(this.color);
    }
    rect(this.x, this.y, 20, 10);
  }
 
  // move() — moves horizontally, wraps around canvas edges
  move() {
    this.x += this.speed;
    if (this.x < -20)     { this.x = width; }
    else if (this.x > width) { this.x = -20; }
  }
 
  // start(speed) — sets the car's speed
  start(speed) {
    this.speed = speed;
  }
 
  /**
   * isInside: returns true if target point (x,y) is inside this car's rect.
   * @param {number} px  target x
   * @param {number} py  target y
   * @returns {boolean}
   */
  isInside(px, py) {
    return px >= this.x &&
           px <= this.x + 20 &&
           py >= this.y &&
           py <= this.y + 10;
  }
}
 
// --- Creating instances ---
let ball1 = new Ball("red", 250, 150, 1, 1);     // one ball
let ball2 = new Ball("orange", 10, 10, random(-2, 2), random(-2, 2));
 
let cruiser = new Car("purple", 200, random(50, height - 50));
let coupe   = new Car("olive",  10,  random(50, height - 50));
 
// --- Using instances in setup/draw ---
function setup_oop_example() {
  createCanvas(400, 400);
  ball1 = new Ball("red", 250, 150, 1, 1);
  cruiser = new Car("purple", 200, 150);
}
function draw_oop_example() {
  background("lavender");
  ball1.display();
  ball1.move();
  cruiser.display();
  cruiser.move();
}
function mouseClicked_oop() {
  cruiser.start(2);    // start moving on click
}
 
// --- Accessing and updating properties ---
console.log(cruiser.x);        // read a property
cruiser.color = "orange";      // update a property
cruiser.doors = 2;
 
// --- Object references ---
// Variables store a REFERENCE (address), not a copy.
let myCar = new Car("purple", 200, 200);
let car2 = myCar;            // car2 points to the SAME object
car2.x = 100;
console.log(myCar.x);        // 100! Both variables point to the same Car.
 
// --- null — no object assigned yet ---
let toy = null;              // explicitly "no object here"
if (toy !== null) {
  toy.display();             // safe — only call methods when not null
}
 
// --- dist() used in isWithin() (circle-based hit detection) ---
// (Alternative to the rectangle-based isInside above)
class CircleActor {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  isWithin(px, py) {
    return dist(this.x, this.y, px, py) <= this.size / 2;
  }
}
 
 
 
 
/* ============================================================
   14. ARRAYS
   An array is an ordered list of values.
   Index starts at 0. Last item = arr[arr.length - 1].
   ============================================================ */
 
// --- Creating arrays ---
let scores = [10, 20, 30];       // array with 3 numbers
let names = [];                   // empty array — fill it later
 
// --- Accessing items by index ---
console.log(scores[0]);           // 10  (first item)
console.log(scores[1]);           // 20
console.log(scores[scores.length - 1]); // 30 (last item)
 
// --- Updating items ---
scores[1] = 99;                   // change second item to 99
 
// --- Adding items ---
scores[scores.length] = 44;       // safely add at end (same as push)
scores.push(55);                  // push() also adds to end
 
// --- Removing items ---
let lastScore = scores.pop();     // removes and returns last item
scores.splice(0, 1);              // removes 1 item starting at index 0
 
// --- Array length ---
console.log(scores.length);       // number of items in array
 
// --- Filling an array with a for loop ---
let weights = [];
for (let i = 0; i < 12; i++) {
  weights[i] = round(random(3, 14));  // fill with 12 random integers
}
console.log(weights);
 
// --- Looping over an array to use its values ---
for (let i = 0; i < scores.length; i++) {
  let xPos = 10 + i * 20;
  rect(xPos, 10, 18, scores[i]);  // bar chart from array data
}
 
// --- Array of class instances ---
const balls_arr = [];   // use const for arrays you'll fill (not reassign)
 
function setup_array_example() {
  createCanvas(400, 400);
  // Fill array with 10 Ball instances
  for (let i = 0; i < 10; i++) {
    balls_arr[i] = new Ball("red", random(width), random(height), 1, 1);
  }
}
 
function draw_array_example() {
  background(255);
  for (let i = 0; i < balls_arr.length; i++) {
    balls_arr[i].display();
    balls_arr[i].move();
  }
}
 
// --- Adding new instances to array dynamically ---
function mouseClicked_add_ball() {
  // Add a new ball at mouse position
  balls_arr[balls_arr.length] = new Ball("blue", mouseX, mouseY, random(-2,2), random(-2,2));
}
 
// --- for...of to loop array of objects (no index needed) ---
for (let ball_item of balls_arr) {
  ball_item.display();
  ball_item.move();
}
 
 
 
 
/* ============================================================
   15. COORDINATE TRANSFORMS
   Transforms change WHERE/HOW drawing coordinates work.
   Always use push() and pop() to isolate transforms.
   resetMatrix() resets ALL transforms back to defaults.
   ============================================================ */
 
// translate(x, y) — moves the coordinate origin
// Everything drawn AFTER this is shifted by x, y.
function draw_translate_example() {
  background("beige");
 
  translate(mouseX, mouseY);     // move origin to mouse
  ellipse(0, 0, 8);              // draw AT origin (= mouse pos)
  translate(50, 0);              // shift 50px right from current origin
  ellipse(0, 0, 8);              // draws 50px to right of mouse
  translate(0, 50);              // shift 50px down
  ellipse(0, 0, 8);
 
  resetMatrix();                 // put coordinate system back to normal
}
 
// Translate loop — diagonal lines pattern:
function drawDiags() {
  stroke("orange");
  strokeWeight(3);
  for (let i = 0; i <= height + 50; i += 5) {
    line(0, height + 50, width, height);  // always the same line
    translate(0, -5);                     // but origin moves up each time
  }
}
 
// rotate(angle) — rotates the coordinate system
// Default is RADIANS. Use angleMode(DEGREES) for degrees.
// Always translate to center BEFORE rotating, or things spin off-canvas.
function draw_rotate_example() {
  background("beige");
  rectMode(CENTER);
  translate(width / 2, height / 2);  // move origin to canvas center
  rect(0, 0, 100);                   // rect at center
  rotate(PI / 4);                    // rotate 45 degrees (PI/4 radians)
  rect(0, 0, 100);                   // same rect, now rotated
  resetMatrix();
}
 
// Rotating rainbow rose using translate + rotate in a for loop:
function rainbowRose(rx, ry, radius) {
  strokeWeight(10);
  translate(rx, ry);                  // move origin to rose center
  for (let a = 0; a < 360; a += 10) {
    stroke(a, 100, 100);              // HSB: hue = angle
    line(0, 0, radius, 0);           // always draw line to the RIGHT
    rotate(10);                       // then rotate 10 degrees for next line
  }
  noStroke();
  resetMatrix();
}
 
// scale(factor) — zooms in/out
// scale(0.5) = half size, scale(2) = double size
function draw_scale_example() {
  noFill();
  rect(0, 0, width, height);   // full canvas rect
  scale(0.5);                  // everything after is half size
  rect(0, 0, width, height);   // half-size rect
  resetMatrix();
}
 
// push() and pop() — SAVE and RESTORE transform state
// Use these to apply transforms to just ONE thing without affecting others.
function draw_pushpop_example() {
  background("beige");
  ellipse(50, 50, 30);          // normal drawing
 
  push();                       // SAVE: remembers current origin + rotation
    translate(200, 200);
    rotate(PI / 4);             // 45 degrees
    rect(-25, -25, 50, 50);     // this rect is rotated
  pop();                        // RESTORE: back to normal before the push
 
  rect(10, 10, 20, 20);         // back to normal, not rotated
}
 
// Complex example — flower petals with push/pop:
function drawFlower(fx, fy, size) {
  translate(fx, fy);            // move to flower center
  for (let a = 0; a < TWO_PI; a += PI / 7) {
    push();
      translate(size / 2, 0);  // move outward along x-axis
      fill(0, 0, 100, 200);
      ellipse(0, 0, size, size / 6);  // petal
      rotate(PI / 4);
      fill("dodgerBlue");
      rect(0, 0, size / 9);           // petal diamond
    pop();                      // back to flower center
    fill("purple");
    ellipse(size / 4, 0, size / 8, 10); // anther
    rotate(PI / 7);             // rotate for next petal
  }
}
 
 
 
 
/* ============================================================
   16. IMAGES
   Images must be loaded in preload() BEFORE setup() runs.
   Store them in global variables so setup() and draw() can use them.
   ============================================================ */
 
let myImg;   // global variable to hold image
let imgBack; // a second image (e.g., a mask)
 
// preload() — special p5 function that runs BEFORE setup.
// Use loadImage() here so the image is ready immediately.
function preload() {
  myImg   = loadImage("media/robot.png");   // loads from /media folder
  imgBack = loadImage("media/back.png");
}
 
function setup_img_example() {
  createCanvas(400, 400);
}
 
function draw_img_example() {
  background(255);
 
  // image(img, x, y) — draw image at (x, y), natural size
  image(myImg, 10, 10);
 
  // image(img, x, y, w, h) — draw image at (x,y) with explicit width and height
  image(myImg, 10, 10, 80, 80);
 
  // background(img) — use an image as the canvas background
  // background(myImg);
 
  // tint(r, g, b) — colorize the image
  tint("navy");
  image(myImg, 200, 200);
 
  // tint(255, alpha) — make image semi-transparent
  tint(255, 100);      // 100/255 opacity
  image(myImg, 100, 100);
 
  // tint(r, g, b, alpha) — color + transparency
  tint(200, 50, 255, 200);
  image(myImg, 150, 150);
 
  noTint();            // remove any tint for subsequent images
  image(imgBack, 0, 0);
}
 
// Image object properties and methods:
function setup_img_methods() {
  createCanvas(400, 400);
  console.log(myImg.width, myImg.height);  // natural dimensions
 
  myImg.resize(200, 0);          // resize to 200px wide, height proportional (0 = auto)
  myImg.resize(0, 100);          // resize to 100px tall, width proportional
 
  // image.filter(MODE) — apply filter to the image itself
  myImg.filter(POSTERIZE, 6);    // posterize to 6 levels
  myImg.filter(GRAY);            // convert to grayscale
  myImg.filter(BLUR, 3);         // blur
 
  // image.mask(alphaImg) — use another image's alpha channel as a mask
  myImg.mask(imgBack);           // pixels of myImg get the alpha of imgBack
}
 
// Using .width and .height to frame an image:
function draw_img_frame() {
  fill("navy");
  rect(50 - 20, 80 - 20, myImg.width + 40, myImg.height + 40);  // frame behind
  image(myImg, 50, 80);  // image on top
}
 
 
 
 
/* ============================================================
   17. FINITE STATE MACHINE (FSM)
   Track the "state" of your program with a string variable.
   Use if/else-if in draw() to decide what to show.
   Use event handlers to change the state.
   ============================================================ */
 
// State variable — stores the current state as a string
let state = "menu";   // possible values: "menu", "play", "over"
 
function draw_fsm() {
  background(255);
 
  if (state === "menu") {
    drawMenuScreen();
  } else if (state === "play") {
    drawGameScreen();
  } else if (state === "over") {
    drawGameOverScreen();
  } else {
    console.log("Unexpected state:", state);  // safety check
  }
}
 
// Transition states from event handlers:
function mouseClicked_fsm() {
  if (state === "menu") {
    state = "play";    // click on menu → start playing
  } else if (state === "over") {
    state = "menu";    // click on game over → back to menu
  }
}
 
// Dragon example — 4 states driven by arrow keys:
// state values: "faceL", "walkL", "faceR", "walkR"
function keyIsDown_dragon_update(dragonState) {
  if (keyIsDown(LEFT_ARROW)) {
    return "walkL";
  } else if (keyIsDown(RIGHT_ARROW)) {
    return "walkR";
  } else if (dragonState === "walkL") {
    return "faceL";     // stopped walking left → face left
  } else if (dragonState === "walkR") {
    return "faceR";     // stopped walking right → face right
  }
  return dragonState;   // no change
}
 
// State with keyboard press + release:
let charState = "standing";
function keyPressed_charState() {
  if (key === 'w') { charState = "walking"; }
}
function keyReleased_charState() {
  charState = "standing";
}
 
// Placeholder drawing functions (replace with real content):
function drawMenuScreen()    { text("MENU", width/2, height/2); }
function drawGameScreen()    { text("GAME", width/2, height/2); }
function drawGameOverScreen(){ text("GAME OVER", width/2, height/2); }
 
 
 
 
/* ============================================================
   18. TRIG & ADVANCED ANIMATION
   sin() and cos() produce values between -1 and 1 as angle changes.
   Multiply by a radius to get circular or wave motion.
   ============================================================ */
 
// angleMode — DEGREES (0-360) is usually easier to think about
angleMode(DEGREES);
 
// Circular motion:
// x = centerX + cos(angle) * radius
// y = centerY + sin(angle) * radius
let circAngle = 0;
function draw_circular_motion() {
  let cx = 200, cy = 200, r = 80;
  let movX = cx + cos(circAngle) * r;
  let movY = cy + sin(circAngle) * r;
  ellipse(movX, movY, 10);
  circAngle += 1;   // increment angle each frame to animate
}
 
// Horizontal oscillation (ping-pong back and forth):
// x = centerX + cos(angle) * radius  — uses only x, not y
let oscAngle = 0;
function draw_oscillate() {
  let x_osc = 200 + cos(oscAngle) * 100;
  ellipse(x_osc, 200, 10);
  oscAngle += 1;
}
 
// Vertical wave (moves horizontally, wiggles vertically):
let waveAngle = 0;
function draw_wave() {
  let x_wave = waveAngle % (width + 1);  // wrap across canvas width
  let y_wave = 200 + sin(waveAngle * 4.3) * 80;
  ellipse(x_wave, y_wave, 10);
  waveAngle += 1;
}
 
// Pulsing halo — size oscillates using sin:
function draw_pulse() {
  let baseSize = 100;
  let haloDiam = baseSize + sin(frameCount) * 10;  // ±10px pulse
  noFill();
  ellipse(200, 200, haloDiam);
}
 
// Vertical fall + wrap using %:
// y = top + (angle % totalHeight)
let fallAngle = 0;
function draw_fall_wrap() {
  let y_fall = 100 - 50 + (fallAngle % (1 + 2 * 50));
  ellipse(200, y_fall, 10);
  fallAngle += 0.5;
}
 
// dist() for proximity checking:
function draw_dist_check() {
  let d_check = dist(mouseX, mouseY, 200, 200);
  if (d_check < 50) {
    fill("yellow");  // mouse is within 50px of canvas center
  } else {
    fill("gray");
  }
  ellipse(200, 200, 100);
}
 
// Smooth mouse-follow with lerp (revisited for animation section):
let smoothX = 0, smoothY = 0;
function draw_smooth_follow() {
  smoothX = lerp(smoothX, mouseX, 0.05);
  smoothY = lerp(smoothY, mouseY, 0.05);
  ellipse(smoothX, smoothY, 50);
}
 
 
 
 
/* ============================================================
   19. SOUND  (requires p5.sound library)
   All sound objects should be created in setup().
   Sound files must be loaded in preload().
   IMPORTANT: Most browsers require a user gesture (click) before audio plays.
   ============================================================ */
 
// --- SoundFile — play audio files ---
let bassSnd;
 
function preload_sound() {
  // loadSound() works like loadImage() — must be in preload()
  bassSnd = loadSound("media/upright_studio_bassC2.wav");
}
 
function setup_soundfile() {
  createCanvas(400, 400);
}
 
function mouseClicked_soundfile() {
  if (bassSnd.isLooping()) {
    bassSnd.pause();         // stop looping
  } else {
    bassSnd.play();          // play once
    // bassSnd.loop();       // play repeatedly
  }
}
 
// SoundFile methods:
// bassSnd.play()           — plays once from the start
// bassSnd.loop()           — loops until stopped
// bassSnd.pause()          — pauses (resume with play/loop again)
// bassSnd.stop()           — stops and resets to beginning
// bassSnd.isPlaying()      — returns true/false
// bassSnd.isLooping()      — returns true/false
// bassSnd.setVolume(0.5)   — 0.0 (silent) to 1.0 (full)
// bassSnd.rate(1.5)        — playback speed (1 = normal, 2 = double)
 
// --- AudioIn — microphone input ---
let mic;
 
function mouseClicked_mic() {
  if (mic === undefined) {
    mic = new p5.AudioIn();  // create mic object
    mic.start();             // start capturing audio
  }
}
 
function draw_mic() {
  if (mic !== undefined) {
    let micLevel = mic.getLevel();           // 0.0 to 1.0
    let y_mic = height - micLevel * height; // louder = higher on canvas
    ellipse(width / 2, y_mic, 40);
  }
}
 
// --- Oscillator — generate tones programmatically ---
let osc_sound;
let playing_osc = false;
 
function setup_oscillator() {
  createCanvas(400, 400);
  osc_sound = new p5.Oscillator("sine");    // wave type: "sine", "square", "triangle", "sawtooth"
  osc_sound.freq(240);                      // frequency in Hz (pitch)
  osc_sound.amp(0.3);                       // amplitude (volume, 0-1)
}
 
function draw_oscillator() {
  // Map mouseX to frequency 50-400Hz
  osc_sound.freq(map(mouseX, 0, width, 50, 400), 0.1); // 0.1 = ramp time in seconds
}
 
function mouseClicked_oscillator() {
  if (!playing_osc) {
    osc_sound.start();
    playing_osc = true;
  } else {
    osc_sound.stop();
    playing_osc = false;
  }
}
 
function keyTyped_oscillator() {
  if (key === "s")      { osc_sound.setType("sine"); }
  else if (key === "q") { osc_sound.setType("square"); }
  else if (key === "t") { osc_sound.setType("triangle"); }
  else if (key === "w") { osc_sound.setType("sawtooth"); }
}
 
// Oscillator methods:
// osc.start()             — start generating sound
// osc.stop()              — stop
// osc.freq(hz)            — set pitch (e.g., 440 = A4)
// osc.amp(vol)            — set volume (0-1)
// osc.setType("sine")     — change wave shape
// osc.getType()           — returns wave type string
// osc.getFreq()           — returns current frequency
 
// --- Phrase & Part — sequencing rhythmic sounds ---
let bassPart_seq;
 
function setup_phrase_part() {
  createCanvas(400, 400);
  // p5.Phrase(name, callback, sequence)
  // sequence: array where 0 = silent, >0 = play (value becomes `rate`)
  let myPhrase = new p5.Phrase("bass", beatCallback, [1, 0, 0.25, 1, 0, 0.5]);
 
  bassPart_seq = new p5.Part();
  bassPart_seq.addPhrase(myPhrase);
  bassPart_seq.setBPM(30);     // beats per minute
}
 
function mouseClicked_phrase() {
  bassPart_seq.start();        // start the sequence
}
 
function draw_phrase() {
  let bpm_new = map(mouseX, 0, width, 10, 100);
  bassPart_seq.setBPM(bpm_new);  // change tempo with mouse
}
 
// beatCallback runs on every beat where sequence value > 0
function beatCallback(time, rate) {
  bassSnd.rate(rate);    // pitch based on sequence value
  bassSnd.play(time);    // schedule playback
}
 
// --- Amplitude — measure overall loudness ---
let ampAnalyzer_sound;
 
function setup_amplitude() {
  createCanvas(400, 400);
  ampAnalyzer_sound = new p5.Amplitude();  // analyzes all audio output
}
 
function draw_amplitude() {
  let level = ampAnalyzer_sound.getLevel();  // 0.0 to 1.0
  rect(10, 150, 200 * level, 30);           // bar grows with volume
}
 
// --- FFT — frequency spectrum analysis ---
let fft_sound;
 
function setup_fft() {
  createCanvas(600, 400);
  fft_sound = new p5.FFT();  // Fast Fourier Transform analyzer
}
 
function draw_fft() {
  let spectrum = fft_sound.analyze();         // returns array of frequency values (0-255 each)
  let centroid = fft_sound.getCentroid();     // weighted center frequency
 
  text("centroid: " + centroid, 10, 20);
 
  // Draw spectrum as a bar graph:
  for (let fi = 0; fi < spectrum.length; fi++) {
    let barX = map(fi, 0, spectrum.length, 0, width);
    let barH = map(spectrum[fi], 0, 255, 0, height);
    rect(barX, height, width / spectrum.length, -barH);
  }
}
 
 
 
 
/* ============================================================
   QUICK REFERENCE — COMMON PATTERNS
   ============================================================ */
 
// Pattern 1: Animated variable that loops/wraps
let wrapX = 0;
function draw_pattern_wrap() {
  background(255);
  rect(wrapX, 200, 20, 20);
  wrapX += 2;
  if (wrapX > width) { wrapX = 0; }       // wrap
  // OR use modulo: wrapX = (wrapX + 2) % width;
}
 
// Pattern 2: Click to reset
function mousePressed_reset() {
  wrapX = 0;
}
 
// Pattern 3: Smooth follow with lerp
let followX = 0, followY = 0;
function draw_pattern_follow() {
  background(255);
  followX = lerp(followX, mouseX, 0.05);
  followY = lerp(followY, mouseY, 0.05);
  ellipse(followX, followY, 30);
}
 
// Pattern 4: Object-following-mouse interaction
// (The Cat/Fish pattern from class — see Section 13 and 14 for full version)
// Summary:
//   - cat.move() sets cat.x = mouseX, cat.y = mouseY
//   - cat.checkFishes() loops fishies[], calls isWithin() on each
//   - cat.tryCatch(fish) calls fish.getPickedUp(this) — returns self or null
//   - fish.display() checks if fish.holder !== null and follows holder
//   - cat.drop() calls fish.dropped() then sets cat.fish = null
 
// Pattern 5: Two objects, movingCat reference pattern
// let movingCat = nettie;  (set in setup)
// In draw: movingCat.move(); both cats display
// In keyTyped: if key === "c", toggle movingCat between celie and nettie
function keyTyped_swap_active() {
  if (key === "c") {
    // if (movingCat === celie) { movingCat = nettie; }
    // else { movingCat = celie; }
  }
}
 
// Pattern 6: console.log for debugging
// Use it constantly while developing!
// console.log("varName:", varName);
// console.log("obj?", myObject);        // logs full object
// console.log("x, y:", x, y);           // logs multiple values
 
/* ============================================================
   END OF GUIDE
   Good luck on your final exam!
   ============================================================ */