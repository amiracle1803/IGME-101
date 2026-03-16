/**
 * Amir EL, 3/16/26
 * IGME-101: Exercise 7-1: Functions Galores
 * using functions to do stuff
 * Description and interaction instructions
 */
 
"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
  createCanvas(600, 400);

  // -------------------------

  // P1: Flexible Compound Shape
  // Call your compound shape 3 times with different arguments
  drawBadge(100, 100, color(200, 50, 80));
  drawBadge(300, 200, color(50, 180, 120));
  drawBadge(500, 80, color(50, 100, 220));

  // -------------------------
  // P2: Many Happy Returns

  // 3. highlight(aQuote)
  let hiPeace = highlight("peace on this earth will be mine");
  let hiClarity = highlight("dawn in its clarity");
  console.log("Highlight peace & clarity:", hiPeace, hiClarity);

  // 4. mult4Numbers(num1, num2, num3, num4)
  let product = mult4Numbers(5, 2, 50, 1);
  console.log("multiply 5 * 2 * 50 * 1:", product);

  // 5. isFavored(aNumber) – test with 5 values
  console.log("Is 7 favored?", isFavored(7));
  console.log("Is 11 favored?", isFavored(11));
  console.log("Is 13 favored?", isFavored(13));
  console.log("Is 20 favored?", isFavored(23));
  console.log("Is 42 favored?", isFavored(42));
}

/**
 * draw :
 */
function draw() {
  // P3: isMouseInside()
  // Do NOT call background

  // Choose rectangle position and size
  let rLeft = 150;
  let rTop = 250;
  let rWidth = 200;
  let rHeight = 100;

  // Colors to show inside vs outside
  let insideColor = color(0, 255, 150);
  let outsideColor = color(200, 200, 200);

  // Check mouse or rectangle using isMouseInside()
  if (isMouseInside(rLeft, rTop, rWidth, rHeight)) {
    fill(insideColor);
  } else {
    fill(outsideColor);
  }

  rect(rLeft, rTop, rWidth, rHeight);
}

/** drawBadge: Draw a compound badge given location coordinates and color
 * @param {number} xAnchor, x coordinate of anchor
 * @param {number} yAnchor, y coordinate of anchor
 * @param {*} fillCol, fill color
 */
function drawBadge(xAnchor, yAnchor, fillCol) {
  // Compound shape made of at least 3 shapes,

  push();                 // Save current drawing style
  translate(xAnchor, yAnchor);
  noStroke();
  fill(fillCol);

  // Circle base
  circle(0, 0, 60);

  // Rectangle banner
  rectMode(CENTER);
  rect(0, 0, 80, 20);

  // Small top triangle
  triangle(-15, -30, 15, -30, 0, -55);

  pop();         // Restore drawing style
}

/** highlight: add highlighted characters around a quote
 * @param {string} aQuote, quote to highlight
 * @returns {string} highlighted version of the quote
 */
function highlight(aQuote) {
  // Return a new string with markers before and after
  return ">>- " + aQuote + " -<<";
}

/** mult4Numbers: multiply four numbers together
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 * @returns {number} product of all four numbers
 */
function mult4Numbers(num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4;
}

/** isFavored: check if the number is one of my favorite numbers
 * @param {number} aNumber
 * @returns {boolean} true if favored, else false
 */
function isFavored(aNumber) {
  // Change to your favorite numbers
  let fav1 = 9;
  let fav2 = 23;
  let fav3 = 52;

  if (aNumber === fav1 || aNumber === fav2 || aNumber === fav3) {
    return true;
  } else {
    return false;
  }
}

/** isMouseInside: check if mouse is inside given rectangle
 * @param {number} rLeft, x coordinate of rectangle
 * @param {number} rTop, y coordinate of rectangle
 * @param {number} rWidth, width of rectangle
 * @param {number} rHeight, height of rectangle
 * @returns {boolean} true if mouse is inside, else false
 */
function isMouseInside(rLeft, rTop, rWidth, rHeight) {
  // Use left & right & top & bottom 
  let isRightOfLeft = mouseX >= rLeft;
  let isLeftOfRight = mouseX <= rLeft + rWidth;
  let isBelowTop = mouseY >= rTop;
  let isAboveBottom = mouseY <= rTop + rHeight;

  if (isRightOfLeft && isLeftOfRight && isBelowTop && isAboveBottom) {
    return true;
  } else {
    return false;
  }
}

// by : amir el