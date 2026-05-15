function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  background("pink");
  point(30, 75);
  point(140, 330);
  
  line(10, 20, 60, 100);
  
  rect(40, 20, 50, 70);
  
  rect(180, 180, 100);
  line(20, 200, 300, 100)
}/**
 * WM Harris, 1/14/26
 * IGME-101: 1-2 demo intro P5 shapes & colors
 * slide 1-16
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

}

/**
 * draw :
 */
function draw() {
   //background(grayNumber)
   //background(220);

   //background("colorName")
   background("pink");

   stroke("green");
   strokeWeight(10);
   //point(x, y)
   point(30, 75);
   point(300, 200);
   point(220, 300);

   //line(x1, y1, x2, y2)
   stroke("orchid");
   line(10, 20, 60, 100);

   noFill();
      //rect(leftX, topY, w, h)
   //by default

   rect(40, 20, 50, 70);
   //a square
   rect(40, 100, 20);

   fill("slateBlue");
   noStroke();
   //ellipse(centerX, centerY, w, h)
   //by default
   ellipse(100, 200, 60, 100);
   
   //this is ignored
   ellipse(200, 200, 60, "hi");

   //this is a circle!
   ellipse(100, 50, 40);
}/**
 * WM Harris, 1/16/26
 * IGME-101: 1-3 demo animation w.
 *   variables
 * slide 9-11: mouseX, mouseY, 
 *          pmouseX, pmouseY, frameCount
 * slide 15: text, textSize
 * IX: Move mouse to make snow with line
 *    trails
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   background("lightBlue");
   textSize(30);
}

/**
 * draw :
 */
function draw() {
   //background("bisque");
   //rect for partial bg
   noStroke();
   fill("lightBlue");
   rect(200, 0, 200, 400); 

   //text label for scene
   //text(string, x, y, [w])
   fill("slateBlue");
   text("Lines and snow", 230, 40, 170);

   //auto-animate with frameCount
   fill("olive");
   rect(200, 0, 20, frameCount);

   stroke("orange");
   strokeWeight(.5);
   //staid line:
   line(40, 100, 240, 300);

   //mouse-reacting line:
   //(uses mouse variables)
   line(40, mouseY, mouseX, 400);

   //snow flake
   noStroke();
   fill(255);
   ellipse(mouseX, mouseY, 3);

   //sketchy skinny line
   stroke("slateBlue");
   line(pmouseX, pmouseY, mouseX, mouseY);
}/**
 * WM Harris, 1/21/26
 * IGME-101: 2-1 demo mouse var IX
 * slide 3: demo mouse variables
 * slide 4: ellipseMode (similar for rectMode)
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

   background("beige");
}

/**
 * draw :
 */
function draw() {
   //slide 4: shape mode experiments
   //CORNER, CENTER, RADIUS, CORNERS
   noStroke();
   fill("lightGreen");
   ellipseMode(CENTER);
   ellipse(0, 0, 100, 150);

   stroke("lavender");
   noFill();
   ellipseMode(CORNER);
   ellipse(0, 0, 100, 150);

   //slide 3 prior + current mouse coords
   stroke("lightPink");
   strokeWeight(1);
   line(pmouseX, pmouseY, mouseX, mouseY);

   stroke(0); //black
   strokeWeight(5);
   point(mouseX, mouseY);
}/**
 * WM Harris, 1/21/26
 * IGME-101: 2-1 demo color
 * slide 7: RGB color
 * slide 8: HSB color
 * slide 9: RGB transparency (alpha)
 * slide 10: HSB transparency (alpha)
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

   //default colorMode is RGB
   //red green blue color channels
   //all three default 0-255

   //slide 7: RGB color
   //same as background(145) - gray
   background(145, 145, 145);

   strokeWeight(3);
   //very red stroke
   stroke(255, 0, 0);
   //blue-green fill
   fill(0, 144, 180);
   rect(20, 20, 65, 50);

   //slide 8: HSB color
   //hue saturation brightness
   //hue 0-360 default
   //sat and bright 0-100 default
   colorMode(HSB);
   //mid gray
   fill(0, 0, 57);
   rect(200, 0, 200, 400);
   //very red
   stroke(0, 100, 100);
   //blue-green fill
   fill(192, 100, 71);
   rect(220, 20, 65, 50);

   //slide 9 RGB transparency
   //e.g. (red, green, blue, alpha)
   colorMode(RGB);
   //white rects
   noStroke();
   fill(255);
   rect(100, 80, 100, 320);
   rect(300, 80, 100, 320);

   //orange w alpha (or not):
   //alpha range default 0-255 solid

   //very transparent, 40
   fill(255, 90, 0, 40);
   rect(20, 100, 160, 30);
   //sort of transparent, 160
   fill(255, 90, 0, 160);
   rect(20, 140, 160, 30);
   //solid, 255 and no alpha
   fill(255, 90, 0, 255);
   rect(20, 180, 160, 30);
   fill(255, 90, 0);
   rect(20, 220, 160, 30);
   //gray w alpha (or not)
   fill(90, 40);
   rect(20, 260, 160, 30);
   fill(90);
   rect(20, 300, 160, 30);

   //slide 10 HSB transparency
   //alpha default range 0 - 1 solid
   colorMode(HSB);
   //purple w alpha (or not)
   //very transparent, .4
   fill(255, 90, 100, .4);
   rect(220, 100, 360, 30);
   //sort of transparent .7
   fill(255, 90, 100, .7);
   rect(220, 140, 360, 30);
   //solid, 1 and no alpha
   fill(255, 90, 100, 1);
   rect(220, 180, 360, 30);
   fill(255, 90, 100);
   rect(220, 220, 360, 30);
   //gray w alpha (and not)
   fill(30, .4);
   rect(220, 260, 360, 30);
   fill(30);
   rect(220, 300, 360, 30);
}/**
 * WM Harris, 1/21/26
 * IGME-101: 2-1 demo event functions
 * slide 18: mouseClicked & mousePressed
 * slide 19: keyPressed & keyTyped
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   //thicker points
   strokeWeight(5);
   textSize(32);
}

/**
 * draw : mouse-following pts
 */
function draw() {
   stroke(mouseX, mouseY, 0);
   point(mouseX, mouseY);
}

/**
 * mouseClicked: transparent pink bg
 */
function mouseClicked() {
   background(255, 0, 100, 200);
}

/**
 * mousePressed: big white circle
 */
function mousePressed() {
   fill(255);
   ellipse(200, 200, 200);
}

/**
 * keyPressed: respond to all
 * keys with itself at mouse
 */
function keyPressed() {
   fill(0);
   text(key, mouseX, mouseY);
}

/**
 * keyTyped: respond to typable
 * keys with itself at mouse
 */
function keyTyped() {
   fill(100, 255, 100);
   text(key, mouseX, mouseY + 30);
}/**
 * WM Harris, 1/23/26
 * IGME-101: 2-2 demo p5 variables
 * slide 3: sampler of p5 variables
 * slide 4: console.log()
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 600);
   textSize(18);
   //frameRate(5);

   //slide 5 
   console.log("Good morning Minneapolis!");
}

/**
 * draw : show p5 variables on canvas
 */
function draw() {
   background("beige");

   //canvas width and height variables
   text(width, 10, 20);
   text(height, 70, 20);

   //frameCount - how many draws?
   text(frameCount, 110, 20);

   //mouse variables
   // -- current mouse coords
   text(mouseX, 10, 40);
   text(mouseY, 50, 40);
   // -- previous mouse coords
   text(pmouseX, 120, 40);
   text(pmouseY, 160, 40);
   //is mouse pressed now? boolean
   text(mouseIsPressed, 220, 40);

   //keyboard variables
   //name of last key pressed, string
   text(key, 10, 60);
   //number of last key pressed
   text(keyCode, 100, 60);
   //is any key pressed now? boolean
   text(keyIsPressed, 170, 60);

   //console.log("mouse at", mouseX, mouseY);
}

/**
 * mouseClicked: check variables
 *    with console.log
 */
function mouseClicked() {
   console.log("mouseClicked function:");
   console.log("key variables?",
      key, keyCode, keyIsPressed);
   console.log("mouseIsPressed",
      mouseIsPressed);
}

/**
 * mousePressed: check mouseIsPressed
 *    with console.log
 */
function mousePressed() {
   console.log("mousePressed function:");
   console.log("mouseIsPressed",
      mouseIsPressed);
}/**
 * WM Harris, 1/23/26
 * IGME-101: 2-2 demo math operators
 * slide 9-10 : math operators
 * slide 11: string + operator concatenation
 * slide 12: 4 mouse-following circles
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   textSize(18);
   //frameRate(4);
}

/**
 * draw :
 */
function draw() {
   background("beige");
   noStroke();

   //slide 9 arithmetic operators:
   text((mouseY + 40), 10, 24);
   text("<< mouseY + 40", 50, 24);

   text((height - 20), 10, 44);
   text("<< height - 20", 50, 44);

   text((width * 2), 10, 64);
   text("<< width * 2", 50, 64);

   text((frameCount / 1000), 10, 84);
   text("<< frameCount / 1000", 70, 84);

   text((frameCount % 10), 10, 104);
   text("<< frameCount % 10", 50, 104);

   //slide 11
   text((mouseY / 2) + " half-vertical position",
      10, 130);
   text(keyCode + "-code, #" + frameCount +
      " frame", 10, 150);

   text("99! " + 55 + 44, 10, 170);
   text("99! " + (55 + 44), 100, 170);

   //slide 12 mouse following circles
   stroke("green");
   ellipse(mouseX, mouseY, 40);
   //next circle 140px right
   ellipse(mouseX + 140, mouseY, 40);
   //next?
}/**
 * WM Harris, 1/28/26
 * IGME-101: 3-1 demo var expressions
 * slide 12: quartet of mouse-following circles
 * slide 13: use string + to add label text
 * slide 14: canvas-centered ellipses
 * bonus: shape anchored top-right
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 500);
   textSize(20);
}

/**
 * draw :
 */
function draw() {
   background("bisque");
   stroke(0);

   //slide 12 mouse following circles
   ellipse(mouseX, mouseY, 40);
   //next circle 140px right
   ellipse(mouseX + 140, mouseY, 40);
   //next circle 140px down
   ellipse(mouseX, mouseY + 140, 40);
   //last circle 140px right & 140px down
   ellipse(mouseX + 140, mouseY + 140,
      40);
   //slide 13 text w. mouse coords
   text(mouseX + ", " + mouseY, mouseX, mouseY);

   noFill();
   //slide 14 2 canvas-centered ellipses
   ellipse(width / 2, height / 2, 100, 50);
   ellipse(width / 2, height / 2, 50, 100);

   //bonus - top-right 40px circle
   //hard-coded numbers:
   stroke("orange");
   ellipse(310, 20, 40);
   //math expression for x coord
   //width - radius
   stroke(0, 150, 30); //dk green
   ellipse(width - 20, 20, 40);
}/**
 * WM Harris, 1/18/26
 * IGME-101: 3-1 demo math expressions heart
 * slide 15-17: heart combo with numbers
 *    1. calc anchor x and y for the combo
 *    2. make all shape coords relative to 
 *          x and y anchor values
 *    3. replace anchor values with (mouse coord
 *          variables)
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

}

/**
 * draw : 3 shapes => heart
 * Start with static heart
 * End with mouse-following heart
 */
function draw() {
   background(100, 200, 200, 160);
   //slide 15 - static
   fill(255, 0, 100, 100);
   
   //place shapes for heart
   ellipse(80, 100, 40);
   ellipse(120, 100, 40);
   triangle(60, 105,
         140, 105,
         100, 160);

   //slide 16 - prep for moving
   fill(0, 200, 100, 100);
   //anchored at x = 100, y = 100
   //place shapes for heart
   //all x coords relative to 100
   //all y coords relative to 100
   ellipse(100 - 20, 100, 40);
   ellipse(100 + 20, 100, 40);
   triangle(100 - 40, 100 + 5,
         100 + 40, 100 + 5,
         100, 100 + 60);

   //slide 17 - move with mouse!
   fill(0, 100, 200, 100);
   //anchored at x = 100, y = 100
   //place shapes for heart
   //all x coords relative to 100
   //all y coords relative to 100
   ellipse(mouseX - 20, mouseY, 40);
   ellipse(mouseX + 20, mouseY, 40);
   triangle(mouseX - 40, mouseY + 5,
         mouseX + 40, mouseY + 5,
         mouseX, mouseY + 60);  
}/**
 * WM Harris, 1/28/26
 * IGME-101: 3-1 demo custom variables
 * slide 2-3: declaring & initializing vars
 * slide 4-6: assigning values to variables
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   background("beige");

   //slide 2-3
   //declare a variable w. let keyword
   let count;

   //declare and initialize a var w. let
   let starter = 35;

   console.log("count variable?", count);
   //>> count variable? undefined
   console.log("starter variable?", starter);
   //>> starter variable? 35

   ellipse(100, 100, count); //oops!
   /** [sketch.js, line 28] ellipse() 
    * was expecting Number for the third
    * parameter, received an empty
    * variable instead.
    */
   ellipse(200, 100, starter);

   //slide 5-6
   //update count variable by assigning value
   //- static, variable, or expression
   count = frameCount;
   console.log("count variable now?", count);

   count = "Good morning #" + 4359075;

   console.log("count variable again?", count);

   starter = width / 3;
   console.log("starter variable again?", starter);
}

/**
 * draw :
 */
function draw() {

}/**
 * WM Harris, 1/30/26
 * IGME-101: 3-2 demo custom vars
 * slide 9-10: sun coord variables
 * slide 12: local vs global variables
 */

"use strict"; //catch some common coding errors

/* Global variables */
//non-blue bg color channel values:
//slide 12
let colorCount = 0;

//sample other global var declaration:
let otherGlobalVar;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

}

/**
 * draw : sun rays rooted from sun
 * using local vars
 * slide 9-10
 * with changeable blue background
 * using global var colorCount
 * slide 12
 * 
 */
function draw() {
   background("lightBlue");

   //slide 12 - local variable
   let count = 0;

   //increase count by one:
   count = count + 1; //always just 1

   //use count to color background:
   background(count, count, 255);
   text("count is " + count, 10, 100);

   //slide 12 - using global variable
   // for time and space travel

   //increase global variable colorCount:
   colorCount = colorCount + 1;

   //use colorCount to color background:
   background(colorCount, colorCount, 255);
   console.log("global colorCount:", colorCount);
   text("colorCount is " + colorCount,
      10, 140);

   //slide 10 version
   //Sun coordinate variables
   //near top of canvas, moving opposite
   // of mouse
   let sunX = width - mouseX;
   let sunY = 80 - (mouseY / 10);

   //sun rays
   stroke("yellow");
   strokeWeight(5);
   line(sunX, sunY, 0, height - 100);
   line(sunX, sunY, 0, height);
   line(sunX, sunY, 100, height);
   line(sunX, sunY, width / 2, height);
   line(sunX, sunY, width - 100, height);
   line(sunX, sunY, width, height);
   line(sunX, sunY, width, height - 100);

   //Place sun near top of canvas, 
   //   moving opposite of mouse
   fill("Gold");
   strokeWeight(1);
   ellipse(sunX, sunY, 60);


   /** slide 9 version - redundant!
      //sun rays
      stroke("yellow");
      strokeWeight(5);
      line(width - mouseX, 80 - (mouseY / 10),
         0, height - 100);
      line(width - mouseX, 80 - (mouseY / 10),
         0, height);
      line(width - mouseX, 80 - (mouseY / 10),
         100, height);
      line(width - mouseX, 80 - (mouseY / 10),
         width / 2, height);
      line(width - mouseX, 80 - (mouseY / 10),
         width - 100, height);
      line(width - mouseX, 80 - (mouseY / 10),
         width, height);
      line(width - mouseX, 80 - (mouseY / 10),
         width, height - 100);

      //Place sun near top of canvas, 
      //   moving opposite of mouse
      fill("Gold");
      strokeWeight(1);
      ellipse(width - mouseX,
         80 - (mouseY / 10), 60);
   **/
}/**
 * WM Harris, 2/2/26
 * IGME-101: 4-1 demo growing circle
 *    and X Boxes
 * slide 1-2: variable init & update
 * slide 4: X Boxes challenge
 * IX: click to shrink circle to original
 *    size and move boxes to original
 *    position
 */

"use strict"; //catch some common coding errors

/* Global variables */
//diameter of growing circle
let diam = 10;

//slide 4 X Boxes
//y coord of both boxes
let boxY = 0;

//x coord of right box
let boxRX;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   background("slateBlue");
   fill(200, 255, 0, 100);

   //or maybe:  diam = 10;

   boxRX = width - 44;
}

/**
 * draw : draw circle and update 
 *   its diameter +2
 */
function draw() {
   background("slateBlue");
   ellipse(width / 2, height / 2, diam);
   //grow by 2px
   diam = diam + 2;

   //slide 4 challenge:
   //left box:
   rect(boxY + 4, boxY, 40);
   //right box done 2 ways:
   rect(boxRX, boxY, 40);
   //(or just 1 variable for all things)
   rect(width - 44 - boxY, boxY, 40);

   //move both boxes down by 1px
   boxY = boxY + 1;
   //move rt box left 1px
   boxRX = boxRX - 1;
}

/**
 * mousePressed: reset circle size
 *      to 10. 
 *  reset box y coord to 0 and
 *  right box x coord to width - 44
 *   change fill color
 * slide 2-4
 */
function mousePressed() {
   diam = 10;
   boxY = 0;
   boxRX = width - 44;
   fill(mouseX, mouseY, 0, 100);
}/**
 * WM Harris, 2/2/26
 * IGME-101: 4-1 demo remainder % and if-else
 * slide 6: print remainders with % 4
 * slide 7-8: v-bar with remainder 
 * slide 14-15: if for creeping circle
 */

"use strict"; //catch some common coding errors

/* Global variables */
//circle x coord, start off canvas left
//slide 14
let circleX = -10;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   console.log("0 % 4", (0 % 4));
   console.log("1 % 4", (1 % 4));
   console.log("2 % 4", (2 % 4));
   console.log("3 % 4", (3 % 4));
   console.log("4 % 4", (4 % 4));
   console.log("5 % 4", (5 % 4));
   console.log("6 % 4", (6 % 4));
   console.log("7 % 4", (7 % 4));
   console.log("8 % 4", (8 % 4));
   console.log("9 % 4", (9 % 4));
   console.log("10 % 4", (10 % 4));
   console.log("11 % 4", (11 % 4));
   console.log("12 % 4", (12 % 4));

   noStroke();
}

/**
 * draw :
 */
function draw() {
   background("forestGreen");
   fill(255);
   rect(frameCount, 0, 10, height);
   rect(frameCount % width, 0, 10, height);
   //wrap halfway across canvas
   fill(100, 255, 0, 100);
   rect(frameCount % (width / 2), 0, 10, height);

   //start at 100 and wrap at 300
   fill(100, 0, 255, 100);
   rect(100 + (frameCount % 200), 0, 10, height);

   //slide 14 creepiing circle
   fill("orange");
   ellipse(circleX, height / 2, 20);
   circleX = circleX + 1;

   //when circle goes beyond right edge,
   //move it back to start:
   //slide 15
   if (circleX > (width + 10)) {
      circleX = -10;
   }
}/**
 * WM Harris, 2/4/26
 * IGME-101: 4-2 demo ifs
 * slide 17: if for draw/not points/shapes
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   strokeWeight(3);
   background("bisque");
}

/**
 * draw : slide 17 
 * always mouse-following point
 */
function draw() {
   background(200, 200, 100, 5);

   //always draw a point at mouse:
   //slide 17
   strokeWeight(3);
   point(mouseX, mouseY);

   strokeWeight(.5);

   //If mouse at <10px of left edge,
   //draw circle in middle
   if (mouseX < 10) {
      fill(100, 0, 250, 10);
      ellipse(width / 2, mouseY, 20);
   }

   //If mouse at <=10px of right edge,
   //draw square in middle
   if (mouseX >= width - 10) {

      fill(200, 255, 250, 10);
      rect(width / 2, mouseY, 20);
   }
}/**
 * WM Harris, 2/4/26
 * IGME-101: 4-2 demo if w. boolean var
 * slide 21: mouseIsPressed in if
 * IX: press mouse for circle, else
 *    see giant square
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   //consistent shape anchoring
   rectMode(CENTER);
}

/**
 * draw : if mouse pressed- circle
 *       else- square
 */
function draw() {
   background(237, 34, 93);
   fill(0);

   if (mouseIsPressed) {
      ellipse(width / 2, height / 2, width);
   } else {
      rect(width / 2, height / 2,
         width - 40);
   }


   console.log("mouseIsPressed?",
      mouseIsPressed);
}/**
 * WM Harris, 2/4/26
 * IGME-101: 4-2 demo if w. custom
 *       boolean var
 * slide 22 isFirstClick
 * IX: Mouse-following circles 'til
 *    click; then mouse-following
 *    purple points
 */

"use strict"; //catch some common coding errors

/* Global variables */
//Still waiting for first click?
let isFirstClick = true;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   background("lavender");
   //orangish
   fill(255, 200, 100, 50);
}

/**
 * draw : start with mouse-following
 *   circles while isFirstClick.
 *   Otherwise, mouse-following point
 */
function draw() {
   //console.log("isFirstClick?",
   //   isFirstClick);
   if (isFirstClick) {
      ellipse(mouseX, mouseY, 20);
   } else {
      point(mouseX, mouseY);
   }

}

/**
 * mouseClicked: update 
 *  isFirstClick to false
 */
function mouseClicked() {
   isFirstClick = false;
   //purple, thick points
   stroke("purple");
   strokeWeight(5);

   console.log("clicked!",
      isFirstClick);
}/**
 * WM Harris, 2/4/26
 * IGME-101: 4-2 demo if to wrap canvas
 * slide 23: global var x moves v-bar. Use
 *    if to check if x needs to update to 0.
 */

"use strict"; //catch some common coding errors

/* Global variables */
//x coord of animating v-bar:
let x = 0;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

}

/**
 * draw :
 */
function draw() {
   background("darkGreen");
   //v-bar:
   rect(x, 0, 10, height);

   //Update x so bar moves right across
   //canvas .5px every drawn frame
   x = x + .5;

   //If x is larger than the width of the
   //  canvas, update x by setting it to 0.
   if (x > width) {
      //console.log("Inside if, x", x);
      x = 0;
      //console.log("In the if, x is now", x);
   }
}/**
 * WM Harris, 2/4/26
 * IGME-101: 4-2 demo ifs to bounce ball
 * slide 24: ifs control ball 
 */

"use strict"; //catch some common coding errors

/* Global variables */
//Ball position:
let x;
let y;
//Ball speed:
let speedX;
let speedY;

/**
 * setup : init ball variables
 */
function setup() {
   createCanvas(400, 500);
   //init speeds:
   speedX = 1;
   speedY = 1;
   //init location
   x = width / 3;
   y = height / 3;

   //ball color
   fill("red");
}

/**
 * draw :
 */
function draw() {
   background(100, 180, 255, 20);

   //draw the ball
   ellipse(x, y, 20);

   //If x too big (at right edge of
   // canvas), make speedX -1
   if (x > width - 10) {
      //go towards left
      speedX = -1;
      console.log("bounce rt", x, speedX);
   }

   //If x too small (at left edge of
   // canvas), make speedX 1
   if (x < 10) {
      //go towards right
      speedX = 1;
      console.log("bounce left", x, speedX);
   }

   //If y too big (at bottom of
   // canvas), make speedY -1
   if (y > height - 10) {
      //go up
      speedY = -1;
      console.log("bounce bottom", y, speedY);
   }

   //If y too small (at top of
   //canvas), make speedY 1
   if (y < 10) {
      //go down
      speedY = 1;
      console.log("bounce top", y, speedY);
   }

   //Move the ball
   x = x + speedX;
   y = y + speedY;
}/**
 * WM Harris, 2/9/26
 * IGME-101: 5-1 demo logical operators
 * slide 4-5: || or, && and
 * slide 6: ...and ! not q, Q
 * slide 7: boolean global var with ! Not
 */

"use strict"; //catch some common coding errors

/* Global variables */
//Boolean global (slide 7)
let isBlue = true;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

}

/**
 * draw :
 */
function draw() {
   //slide 7 
   if (isBlue) {
      background("dodgerBlue");
      fill(255);
   } else {
      background("beige");
      fill(0);
   }

   //slide 4 testing mouseY
   textSize(28);
   //OR ||
   let myTest = (mouseY < 0) ||
      (mouseY > height);
   text("mouseY: " + mouseY +
      " myTest: " + myTest, 10, 30);

   //AND &&
   let otherTest = (mouseY < 0) &&
      (mouseY > height);
   text("mouseY: " + mouseY +
      " otherTest: " + otherTest, 10, 60);

   //slide 5 mouseIsPressed, keyIsPressed
   //AND &&
   let andTest = mouseIsPressed &&
      keyIsPressed;
   text("mouseIsPressed " + mouseIsPressed +
      ". keyIsPressed " + keyIsPressed +
      ". andTest " + andTest, 10, 90,
      width - 20);
   //OR ||
   let orTest = mouseIsPressed ||
      keyIsPressed;
   text("mouseIsPressed " + mouseIsPressed +
      ". keyIsPressed " + keyIsPressed +
      ". orTest " + orTest, 10, 200,
      width - 20);

   //slide 6 not ! q, Q
   let notTest = !(key === "q" || key === "Q");
   text("key " + key + ". notTest " +
      notTest, 10, 330);

   //only not q
   text("key " + key + ". not q? " +
      !(key === 'q'), 10, 360);

   //slide 10 button rect
   rect(270, 300, 90, 40);
}

/**
 * mousePressed: toggle isBlue value
 *     slide 7
 */
function mousePressed() {
   isBlue = !isBlue;
   console.log("isBlue?", isBlue);
}

/**
 * mousePressed: clicked button?
 *     slide 10
 */
function mouseClicked() {
   //rect(270, 300, 90, 40);
   //left 270, right 270 + 90
   //top 300, bottom 300 + 40

   if (//(left) && (right) && (top) && (bottom)
      (mouseX >= 270) && (mouseX <= 270 + 90) &&
      (mouseY >= 300) && (mouseY <= 300 + 40)) {
      stroke("green");
   } else {
      noStroke();
   }

}/**
 * WM Harris, 2/11/26
 * IGME-101: 5-2 demo bigger ifs
 * slide 13-15: range testing with
 *   separate ifs, nested if-else,
 *   and if-else-ifs
 */

"use strict"; //catch some common coding errors

/* Global variables */
let age = 55;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   background("beige");
   textSize(24);

   //check age range w. 3 ifs
   //slide 13
   if (age <= 25) {
      text(age + " young", 3, 20);
   }
   if (age > 25 && age <= 50) {
      text(age + " mid-age", 3, 20);
   }
   if (age > 50) {
      text(age + " mature", 3, 20);
   }

   //check age range w. nested if
   // will execute either 1 or 2 tests
   //slide 14
   fill("slateBlue");
   if (age <= 25) {
      text(age + " young", 3, 44);
   } else {
      if (age <= 50) {
         text(age + " mid-age", 3, 44);
      } else { //all the rest
         text(age + " mature", 3, 44);
      }
   }

   //check age range w. if-else-if
   //will execute 1 or 2 tests
   //slide 15
   fill("darkorange");
   if (age <= 25) {
      text(age + " young", 3, 68);
   } else if (age <= 50) {
      text(age + " mid-age", 3, 68);
   } else {  // > 50
      text(age + " mature", 3, 68);
   }

   //if-else-if to check 5 segment
   //ranges of decades, 1 - 4 tests
   fill("magenta");
   //<19, 20-29, 30-39, 40-49, 50+
   if (age >= 50) {
      text(age + " over 50", 3, 94);
   } else if (age >= 40) {
      text(age + " 40s", 3, 94);
   } else if (age >= 30) {
      text(age + " 30s", 3, 94);
   } else if (age >= 20) {
      text(age + " 20s", 3, 94);
   } else { //< 20
      text(age + " youngster", 3, 94);
   }

}/**
 * WM Harris, 2/11/26
 * IGME-101: 5-2 demo episodic vs
 *           sustained event handling
 * slide 23
 */

"use strict"; //catch some common coding errors

/* Global variables */
//which shapes to draw?
//start c-circles. also q-squares or t
let shapeMode = "c";

//which fill hue
let sHue = 0; //start red

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   colorMode(HSB);
}

/**
 * draw :
 */
function draw() {
   //should change hue?
   if (keyIsPressed && key === "h") {
      sHue = sHue + 1;
   }
   fill(sHue, 100, 100, .4);
   text(sHue, 0, 20);

   if (shapeMode === "c") {
      ellipse(mouseX, mouseY, 20);
   } else if (shapeMode === "q") {
      rect(mouseX, mouseY, 20);
   } else if (shapeMode === "t") {
      text("triangle", mouseX, mouseY);
   }
}

/**
 * keyTyped: change if key is c, q, t
 *    episodic event!
 */
function keyTyped() {
   if (key === "c") {
      shapeMode = "c";
   } else if (key === "q") {
      shapeMode = "q";
   } else if (key === "t") {
      shapeMode = "t";
   }
}/**
 * WM Harris, 2/13/26
 * IGME-101: 5-3 demo p5 math fcns
 * slide 2-3: random() 0...2 arguments
 *       for strokeWeight
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   background("beige");

   //slide 3
   //no arguments: return value 0 ...1
   console.log("random()", random());

   //1 arg: return value 0 ...arg
   console.log("random(-4)",
      random(-4));

   //2 args: return value arg1 ...arg2
   console.log("random(5, 10)",
      random(5, 10));
}

/**
 * draw :
 */
function draw() {
   //slide 3
   //0 args: range 0 ... 1 weight
   strokeWeight(random());
   stroke("orange");
   line(mouseX, mouseY, pmouseX, pmouseY);

   //1 arg: range 0...10 weight
   strokeWeight(random(10));
   stroke(130, 200, 0, 120);
   line(mouseX, mouseY + 20, pmouseX, pmouseY + 20);

   //2 args: range 5...10 weight
   strokeWeight(random(5, 10));
   stroke(0, 130, 200, 120);
   line(mouseX, mouseY + 50, pmouseX, pmouseY + 50);
}/**
 * WM Harris, 2/11/26
 * IGME-101: 5-3 p5 math fcns
 * slide 4: randomize color & weight
 * slide 5-7: round, floor, ceil
 * slide 8: abs
 * slide 9: max
 * slide 10: min
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   colorMode(HSB);
   background("beige");

   //no extra library needed:
   console.log("Math.random()", Math.random());

   //slide 5: round, floor, & ceil
   //also Math.round, Math.floor, Math.ceil
   let num1 = random(-5, 5);
   let num2 = random(-5, 5);
   console.log(">>> num1, num2:", num1, num2);
   console.log("round()", round(num1),
      round(num2));
   console.log("floor()", floor(num1),
      floor(num2));
   console.log("ceil()", ceil(num1),
      ceil(num2));
   //slide 7 round to n digits
   console.log("round(num1, 3)",
      round(num1, 3));

   //slide 8 abs() - nul2 with round, too
   //also Math.abs
   console.log("abs()", abs(num1),
      round(abs(num2), 3));

   //slide 9: max()
   //also Math.max
   console.log("max(num1, num2, 0)",
      max(num1, num2, 0));

   //slide 10: min()
   // also Math.min
   console.log("min(num1, num2, 0)",
      min(num1, num2, 0));

}

/**
 * draw :
 */
function draw() {
   line(pmouseX, pmouseY, mouseX, mouseY);
}

/**
 * mousePressed: randomize stroke
 *    color and weight
 */
function mousePressed() {
   strokeWeight(random(10));
   stroke(random(360), 100, 100);
}

/**
 * keyPressed: repaint canvas beige
 */
function keyPressed() {
   background("beige");
}/**
 * WM Harris, 2/13/26
 * IGME-101: 5-3 demo max & min, constrain
 * slide 11: shapes constrained by max & min
 * slide 12-13: constrain
 */

"use strict"; //catch some common coding errors

/* Global variables */
//Shape x locations
let ballX;
let boxX;
let textX;

//Boundary x values
let leftX;
let rightX;

//text speed
let txtSpeed;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   rectMode(CENTER); //consistent anchoring

   //set globals:
   ballX = 0; //far left
   boxX = width; //far right
   //boundaries for 30px padding:
   leftX = 30;
   rightX = width - 30;

   //slide 12 constrain
   let num = random(-5, 5);
   console.log(">>> num:", num);
   //get num constrained -3...3
   num = constrain(num, -3, 3);
   console.log("constrain(num, -3, 3)",
      num);

   //slide 13 text constraining globals
   textAlign(CENTER);
   textX = width / 2;
   txtSpeed = 1;
}

/**
 * draw :
 */
function draw() {
   background("beige");
   //ball:
   fill("orange");
   ellipse(ballX, 75, 20);
   ballX = ballX + .5; //go right
   //no further right than rightX
   ballX = min(ballX, rightX);

   //box:
   fill("green");
   rect(boxX, 125, 20);
   boxX = boxX - .5; //go left
   //no further left than leftX
   boxX = max(boxX, leftX);

   //text:
   fill("purple");
   text("Text!", textX, 200);
   textX = textX + txtSpeed;
   //constrain betwn leftX ... rightX
   textX = constrain(textX, leftX, rightX);

   //boundary lines:
   stroke("green");
   line(leftX, 0, leftX, height);
   stroke("orange");
   line(rightX, 0, rightX, height);
   stroke(0);

}

/**
 * mouseClicked: reset shape Xes to
 *    starting values
 */
function mouseClicked() {
   ballX = 0;
   boxX = width;

   textX = width / 2;
   txtSpeed = txtSpeed * -1; //flip!
}/**
 * WM Harris, 2/16/26
 * IGME-101: 6-1 demo more p5 math fcns
 * slide 2-3: lerp()
 * slide 4-5: map()
 */

"use strict"; //catch some common coding errors

/* Global variables */
//coords for slow-mouse-following circle:
//slide 3
let lerpX = 0;
let lerpY = 0;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

   //lerp slide 2
   //lerp(lowend, highEnd, percent)
   console.log("lerp(10, 50, .3):",
      lerp(10, 50, .3));
   console.log("lerp(10, 50, .5):",
      lerp(10, 50, .5));
   console.log("lerp(10, 50, .7):",
      lerp(10, 50, .7));

   //map slide 4
   //scaledNum = map(num, lowAnchor, highAnchor,
   //   lowAnchorTarget, highAnchorTarget, [bound])
   let celc = map(37, 32, 212, 0, 100);
   console.log("37F in Celcius", celc);
   //round celc
   celc = round(celc, 1);
   let farh = map(celc, 0, 100, 32, 212);
   console.log(celc + "C in Farenheit", farh);

   textSize(40);
}

/**
 * draw :
 */
function draw() {
   background(255, 0, 155, 5);

   //lerp slide 3
   //move 5% of distance toward mouse
   lerpX = lerp(lerpX, mouseX, .05);
   lerpY = lerp(lerpY, mouseY, .05);
   ellipse(lerpX, lerpY, 50);

   //map slide 5
   ellipse(mouseX, 200, 25);
   text(mouseX, mouseX, 200);
   //re-map mouseX from canvas width to 
   // narrower range
   let x = map(mouseX, 0, width, 150, 250);
   ellipse(x, 250, 25);
   text(x, x, 250);
   //constrain x within narrower range
   x = map(mouseX, 0, width, 150, 250, true);
   ellipse(x, 300, 25);
   text(x, x, 300);

}/**
 * WM Harris, 2/16/26
 * IGME-101: 6-1 demo shortcut operators
 * slide 2: sampler of shortcuts
 * slide 3: count ++
 * slide 4: bullseye -=
 */

"use strict"; //catch some common coding errors

/* Global variables */
//counts to 3, slide 3
let count = 1;

//bullseye width, slide 4
let w = 300;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   frameRate(5); //slow it down!
   background("beige");
   textSize(28);
   //slide 2 try all shortcuts
   let p = 50;
   let q = 100;
   console.log("p", p, ", q", q);
   p++; //= p + 1
   q--; //= q - 1
   console.log("p++", p, ", q--", q);

   let s = 30;
   let t = 60;
   console.log("s", s, ", t", t);
   s += 10;  // s = s + 10
   t -= 45;  // t = t - 45
   console.log("s += 10", s,
      ", t -= 45", t);

   let u = .6;
   let v = 333;
   console.log("u", u, ", v", v);
   u *= 4.2;  // u = u * 4.2
   v /= 5;  // v = v / 5
   console.log("u *= 4.2", u,
      ", v /= 5", v);
}

/**
 * draw :
 */
function draw() {
   //background("beige");

   //slide 4 - shrinking circles bullseye
   if (w > 0) { //not too small yet?
      //draw another circle
      fill(w);
      ellipse(width / 2, height / 2, w);
      //update for next circle w - 20
      w -= 20;
   }

   //slide 3
   textSize(300);
   fill(0);
   text(count, 100, 300);

   if (count <= 3) {
      console.log("count?", count);
      //add 1 to count
      count++;
   }
}/**
 * WM Harris, 2/16/26
 * IGME-101: 6-1 demo custom function
 * slide 7-9 printNum
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

   printNum(55);
}

/**
 * draw :
 */
function draw() {

}

function mouseClicked() {
   printNum(mouseX);
}

/**
 * printNum: print given number to console
 * @param {number} num1 number to print
 */
function printNum(num1) {
   console.log("Number is", num1);
}/**
 * WM Harris, 2/18/26
 * IGME-101: 6-2 demo custom functions 2
 * slide 14-16: ball bouncing function
 *       organization
 */

"use strict"; //catch some common coding errors

/* Global variables */
//ball coords
let x;
let y;
//ball h-speed
let speedX;


/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   rectMode(CENTER);
   //init globals for ball:
   x = 10;
   y = height / 2; //canvas middle
   speedX = 2;

}

/**
 * draw : call custom functions to
 *   handle ball drawing, bouncing, moving
 *  slide 16 version with original
 *    code in comment at bottom
 */
function draw() {
   //bg transparent white
   background(255, 60);

   drawBall();
   bounceBall();
   moveBall();

   /** prior code ****
   //draw the ball
   fill(255, 0, 0);
   ellipse(x, y, 20);

   //at side edge? Bounce the ball
   //accounting for radius of 10
   if (x > width - 10 || x < 10) {
      //reverse speed
      speedX *= -1;

      //extra insurance against escapes
      //constrain within canvas edges
      x = constrain(x, 10, width - 10);
   }
   
   //move the ball
   x += speedX;
   */
}

/**
 * drawBall: draw ball as red circle
 */
function drawBall() {
   fill(255, 0, 0);
   ellipse(x, y, 20);
}

/**
 * bounceBall: bounce x at canvas edges
 */
function bounceBall() {
   //at side edge? Bounce the ball
   //accounting for radius of 10
   if (x > width - 10 || x < 10) {
      //reverse speed
      speedX *= -1;

      //extra insurance against escapes
      //constrain within canvas edges
      x = constrain(x, 10, width - 10);
   }
}

/**
 * moveBall: update x based on speed
 */
function moveBall() {
   x += speedX;
}/**
 * WM Harris, 2/18/26
 * IGME-101: 6-2 demo custom functions 3
 * slide 17-end: custom functions to
 *    draw heart and flower
 */

"use strict"; //catch some common coding errors

/* Global variables */
//heart anchor coords
let heartX = 100;
let heartY = 100;

//flower anchor coords
let flowerX = 300;
let flowerY = 300;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   noStroke();
   rectMode(CENTER);
   background("lavender");
}

/**
 * draw : draw heart & flower
 *   slide 17/18 version
 */
function draw() {
   background("lavender");
   //draw heart shapes
   drawHeart();

   //draw flower shapes
   drawFlower();
}

/**
 * mouseClicked: update anchor 
 * location vars of shapes
 */
function mouseClicked() {
   //heart to mouse
   heartX = mouseX;
   heartY = mouseY;
   //flower opposite mouse
   flowerX = width - mouseX;
   flowerY = height - mouseY;

   //check 'em
   console.log("flower?", flowerX, flowerY);
   console.log("heart?", heartX, heartY);
}

/**
 * drawHeart: 2 circles + triangle
 *    in pink at anchor variables
 */
function drawHeart() {
   fill("pink");
   ellipse(heartX - 20, heartY, 40);
   ellipse(heartX + 20, heartY, 40);
   triangle(heartX - 40, heartY + 5,
      heartX + 40, heartY + 5,
      heartX, heartY + 60);
}

/**
 * drawFlower: center circle
 *    + 
 *    at anchor variables
 */
function drawFlower() {
   //stem
   fill("olive");
   rect(flowerX, flowerY + 40, 10, 70);

   //petals
   fill("orange");
   ellipse(flowerX, flowerY, 50);
   fill(255, 150, 0);
   ellipse(flowerX, flowerY, 85, 20);
   ellipse(flowerX, flowerY, 20, 85);

   //center
   fill(0);
   ellipse(flowerX, flowerY, 10);
}
/**
 * WM Harris, 2/18/26
 * IGME-101: 6-2 demo custom fcn params
 * slide 4-7: drawHeart accepts parameters
 */

"use strict"; //catch some common coding errors

/* Global variables */
//heart anchor coords
let heartX = 100;
let heartY = 100;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   noStroke();
   background("slateBlue");

   //original - not as flexible
   drawHeartOrig();
   //flexible version
   drawHeart(200, 100, "red");
}

/**
 * draw :
 */
function draw() {

}

/**
 * mouseClicked: place pink heart at mouse
 */
function mouseClicked() {
   drawHeart(mouseX, mouseY, "pink");
}

function keyPressed() {
   drawHeart(random(width),
      random(height), "orange");
}

/**
 * drawHeart: 2 circles + triangle
 *    in given color at given location
 * @param {number} x, anchor coord
 * @param {number} y, anchor coord
 * @param {*} fColor, fill color
 */
function drawHeart(x, y, fColor) {
   //console.log("params?", x, y, fColor);

   fill(fColor);
   ellipse(x - 20, y, 40);
   ellipse(x + 20, y, 40);
   triangle(x - 40, y + 5,
      x + 40, y + 5,
      x, y + 60);
}

/**
 * drawHeartOrig: 2 circles + triangle
 *    in pink at anchor variables
 */
function drawHeartOrig() {
   fill("pink");
   ellipse(heartX - 20, heartY, 40);
   ellipse(heartX + 20, heartY, 40);
   triangle(heartX - 40, heartY + 5,
      heartX + 40, heartY + 5,
      heartX, heartY + 60);
}/**
 * WM Harris, 2/20/26
 * IGME-101: 6-3 demo custom fcn params
 * slide 8: challenge centerShape
 */

"use strict"; //catch some common coding errors

/* Global variables */


/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   background("slateBlue");

   //challenge slide 8
   centerShape("circle");
   //centerShape("text");
   centerShape("ball"); //just checking
}

/**
 * centerShape: draw shape based on
 *  given shape string, "circle" or 
 *  "text".
 * @param {string} shapeStr, either  
 *    "circle" or "text"
 */
function centerShape(shapeStr) {
   console.log("shape?", shapeStr);
   //if "circle" - draw circle
   //if "text" - draw text
   if (shapeStr === "circle") {
      fill("lavender");
      ellipse(width / 2, height / 2, 350);
   } else if (shapeStr === "text") {
      fill("orange");
      text("Good weekend ahead",
         160, height / 2);
   }
}/**
 * WM Harris, 2/20/26
 * IGME-101: 6-3 demo function return
 * slide 5-8: add2Numbers() returns number
 * slide 9-10: pickColor() returns color
 * slide 12: isMouseLeft challenge
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   textSize(32);

   let setTime;
   //calc time roughly 2 secs in future
   //and store in local var
   setTime = add2Numbers(frameCount, 120);
   console.log("future frame:", setTime);
}

function mouseClicked() {
   //if mouse is left, lavender bg
   // instead of beige
   console.log("mouse left?", isMouseLeft(),
      mouseX);

   if (isMouseLeft()) {
      background("lavender");
   } else {
      background("beige");
   }

   fill(pickColor());
   ellipse(mouseX, mouseY, 150);

   //slide 11: draw circle if
   //not too close to right edge
   if (add2Numbers(mouseX, 40) < width) {
      fill(pickColor());
      ellipse(mouseX, mouseY, 80);
   }

   //Returned values from function
   // calls below lost in spaaaaaaace:
   //pickColor();
   //random();

   rect(10, random(300), 40);

}

function keyPressed() {
   let isLeft = isMouseLeft();
   if (isLeft) {
      fill(0);
      text(key, 100, 200);
   } else {
      fill("slateBlue");
      text(key, 300, 200);
   }
   console.log("isLeft and key:",
      isLeft, key);
}

/**
 * add2Numbers: return sum of 
 *    given 2 numbers and show
 *    sum on canvas, slide 8
 * @param {number} num1 addend
 * @param {number} num2 addend
 * @returns {number} sum of addends
 */
function add2Numbers(num1, num2) {
   //calculate sum
   let sum = num1 + num2;

   //show sum on canvas
   text("Sum: " + sum, 10, 30);

   //return the sum after doing work
   return sum;
}

/**
 * pickColor: return random RGB color
 * @returns {color}
 */
function pickColor() {
   //create random RBG color
   let randomColor = color(random(255),
      random(255), random(255));
   //check if this works
   console.log("picked color?",
      randomColor);

   return randomColor;

   //alt:
   //return color(random() ...)
}

/**
 * isMouseLeft: Returns whether
 *    mouse is on canvas left
 * @returns {boolean} true if left
 */
function isMouseLeft() {
   //text("left? " + (mouseX < width / 2),
   //   300, 300);
   return (mouseX < width / 2);
}/**
 * WM Harris, 2/23/26
 * IGME-101: 7-1 demo while loop intro
 * slide 4-6: row of points
 * slide 9, 10: while counting up 
 * slide 11: while counting down
 * slide 12, 13: infinite loop examples
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   strokeWeight(2);

   //slide 4 if
   let locationX = 0;
   if (locationX < 30) {
      point(locationX, 40);

      //move over
      locationX += 2;
   }
   console.log("if locationX?", locationX);

   //slide 5 while
   locationX = 0;
   while (locationX < 30) {
      point(locationX, 50);

      //move over
      locationX += 2;
   }
   console.log("while locationX?", locationX);

   //while counting up, slide 9
   //start count at 1
   //stop at 3, each time add 1 to count
   let count = 1;

   //loop while count <= 3
   while (count <= 3) {  //equiv test: < 4
      console.log("count is", count);
      //add 1
      count++;
   }
   console.log("Left loop at", count);

   //while counting down, slide 11
   let num = random(20);
   //num start at ?, stop before 0
   //each turn -2

   //causes infinite loop: while (num !== 0) {

   while (num > 0) {
      console.log("num is", num);

      //subtract 2 for next turn
      num -= 2;
      //causes infinite loop: num += 2
   }
   console.log("left loop at", num);
}/**
 * WM Harris, 2/23/26
 * IGME-101: 7-1 demo repetitive legs
 * slide 16: type all lines, 
 *    do all arithmetic
 * slide 17: variable for legX,
 *    statement for arithmetic,
 *    copy-pasted N times
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   drawBug16(); //slide 16 hand code all
   drawBug17(); //slide 17 use variable
}

/**
 * drawBug17: use variable for
 *    leg x coord slide 17
 */
function drawBug17() {
   fill(0);
   //body rect
   rect(100, 330, 200, 40);
   //head ellipse
   ellipse(80, 350, 50, 50);

   //v-lines for legs
   strokeWeight(4);

   //variable for x coord of legs
   let legX = 110;
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
}

/**
 * drawBug16: all numbers, slide 16
 */
function drawBug16() {
   fill(0);
   //body rect
   rect(100, 130, 200, 40);
   //head ellipse
   ellipse(80, 150, 50, 50);

   //v-lines for legs
   strokeWeight(4);

   //start legs at body left + 10
   //h-spacing every 15px
   //stop before right edge 300
   line(110, 100, 110, 200);
   line(125, 100, 125, 200);
   line(140, 100, 140, 200);
   line(155, 100, 155, 200);
   line(170, 100, 170, 200);
   line(185, 100, 185, 200);
   line(200, 100, 200, 200);
   line(215, 100, 215, 200);
   line(230, 100, 230, 200);
   line(245, 100, 245, 200);
   line(260, 100, 260, 200);
   line(275, 100, 275, 200);
   line(290, 100, 290, 200);
   //changing: line x coord
   //pattern: add 15 to x coord
}/**
 * WM Harris, 2/25/26
 * IGME-101: 7-2 demo while legs
 * slide 16: type all lines, 
 *    do all arithmetic
 * slide 17: variable for legX,
 *    statement for arithmetic,
 *    copy-pasted N times
 * slide 19- : while loop draws legs
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 600);
   background("lavender");
   drawBug16(); //slide 16 hand code all
   drawBug17(); //slide 17 use variable
   drawBug19(); //slide 19 while loop!
}

/**
 * drawBug19: use while loop to draw
 *    legs slide 19
 */
function drawBug19() {
   fill(0);
   //body rect
   rect(100, 530, 200, 40);
   //head ellipse
   ellipse(80, 550, 50, 50);

   //v-lines for legs
   strokeWeight(4);

   //variable for x coord of legs
   let legX = 110;
   //LCV: legX, start 110
   //stop before 300 (rect 100 + 200)
   //each turn +15
   while (legX < 300) { //110 < 300
      line(legX, 500, legX, 600);
      legX += 15; //for next leg
   }
}

/**
 * drawBug17: use variable for
 *    leg x coord slide 17
 */
function drawBug17() {
   fill(0);
   //body rect
   rect(100, 330, 200, 40);
   //head ellipse
   ellipse(80, 350, 50, 50);

   //v-lines for legs
   strokeWeight(4);

   //variable for x coord of legs
   let legX = 110;
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
}

/**
 * drawBug16: all numbers, slide 16
 */
function drawBug16() {
   fill(0);
   //body rect
   rect(100, 130, 200, 40);
   //head ellipse
   ellipse(80, 150, 50, 50);

   //v-lines for legs
   strokeWeight(4);

   //start legs at body left + 10
   //h-spacing every 15px
   //stop before right edge 300
   line(110, 100, 110, 200);
   line(125, 100, 125, 200);
   line(140, 100, 140, 200);
   line(155, 100, 155, 200);
   line(170, 100, 170, 200);
   line(185, 100, 185, 200);
   line(200, 100, 200, 200);
   line(215, 100, 215, 200);
   line(230, 100, 230, 200);
   line(245, 100, 245, 200);
   line(260, 100, 260, 200);
   line(275, 100, 275, 200);
   line(290, 100, 290, 200);
   //changing: line x coord
   //pattern: add 15 to x coord
}/**
 * WM Harris, 2/25/26
 * IGME-101: 7-2 demo while legs
 * slide 16: type all lines, 
 *    do all arithmetic
 * slide 17: variable for legX,
 *    statement for arithmetic,
 *    copy-pasted N times
 * slide 19- : while loop draws legs
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 600);
   background("lavender");
   drawBug16(); //slide 16 hand code all
   drawBug17(); //slide 17 use variable
   drawBug19(); //slide 19 while loop!
}

/**
 * drawBug19: use while loop to draw
 *    legs slide 19
 */
function drawBug19() {
   fill(0);
   //body rect
   rect(100, 530, 200, 40);
   //head ellipse
   ellipse(80, 550, 50, 50);

   //v-lines for legs
   strokeWeight(4);

   //variable for x coord of legs
   let legX = 110;
   //LCV: legX, start 110
   //stop before 300 (rect 100 + 200)
   //each turn +15
   while (legX < 300) { //110 < 300
      line(legX, 500, legX, 600);
      legX += 15; //for next leg
   }
}

/**
 * drawBug17: use variable for
 *    leg x coord slide 17
 */
function drawBug17() {
   fill(0);
   //body rect
   rect(100, 330, 200, 40);
   //head ellipse
   ellipse(80, 350, 50, 50);

   //v-lines for legs
   strokeWeight(4);

   //variable for x coord of legs
   let legX = 110;
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
   legX += 15; //for next leg
   line(legX, 300, legX, 400);
}

/**
 * drawBug16: all numbers, slide 16
 */
function drawBug16() {
   fill(0);
   //body rect
   rect(100, 130, 200, 40);
   //head ellipse
   ellipse(80, 150, 50, 50);

   //v-lines for legs
   strokeWeight(4);

   //start legs at body left + 10
   //h-spacing every 15px
   //stop before right edge 300
   line(110, 100, 110, 200);
   line(125, 100, 125, 200);
   line(140, 100, 140, 200);
   line(155, 100, 155, 200);
   line(170, 100, 170, 200);
   line(185, 100, 185, 200);
   line(200, 100, 200, 200);
   line(215, 100, 215, 200);
   line(230, 100, 230, 200);
   line(245, 100, 245, 200);
   line(260, 100, 260, 200);
   line(275, 100, 275, 200);
   line(290, 100, 290, 200);
   //changing: line x coord
   //pattern: add 15 to x coord
} /**
 * WM Harris, 2/25/26
 * IGME-101: 7-2 demo more while loops
 * slide 26: canvas lines down canvas
 * slide 27: concentric circles loop
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

}

/**
 * draw :
 */
function draw() {
   background("lavender");
   stroke(180);
   hLines(); //slide 26
   drawBullseye(mouseX, mouseY); //slide 27

   stroke("orange");
   perspectiveLines();
}

/**
 * hLines: h-lines down entire height of
 * canvas, 10px v-spacing, slide 26
 */
function hLines() {

   //LCV: y coord of line, y
   //start 0
   //stop 200 or height
   //each turn +10

   let y = 0;
   while (y <= height) {
      line(0, y, width, y);
      //console.log(y);

      //update for next
      y += 10;
   }
}

/**
 * drawBullseye: draw concentric circles
 * to form 200-wide bullseye at 
 * given location coords
 * @param {number} x center coord
 * @param {number} y center coord
 */
function drawBullseye(x, y) {
   //start w. biggest circle 200px, 
   // then shrink 20px

   //LCV circle width, w
   //start 200px
   //stop at 10px
   //each turn -20px

   let w = 200;

   while (w >= 10) {
      fill(w); //grayscale color
      ellipse(x, y, w);

      //update for next
      w -= 20;
   }
}

/**
 * perspectiveLines:lines reaching beyond
 * canvas converge at distant point
 */
function perspectiveLines() {

   //LCV: y coord of line, y
   //start -600
   //stop height + 600
   //each turn +10

   let y = -600;
   while (y <= height + 600) {
      line(0, y, width + 200, 200);
      //console.log(y);

      //update for next
      y += 10;
   }
}/**
 * WM Harris, 2/27/26
 * IGME-101: 7-3 demo curveVertex
 * https://p5js.org/reference/p5/curveVertex
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

}

/**
 * draw :
 */
function draw() {
   background("beige");
   strokeWeight(3);

   beginShape();
   curveVertex(100, 30);
   curveVertex(100, 30);
   curveVertex(200, -30);
   vertex(300, 200);
   vertex(200, 200);
   vertex(300, 300);
   curveVertex(200, 390);
   curveVertex(80, 100);
   //curveVertex(80, 50);
   curveVertex(100, 31);
   curveVertex(100, 31);
   endShape(CLOSE);
}/**
 * WM Harris, 2/27/26
 * IGME-101: 7-3 demo for loops (clarity!)
 * slide 4-5: row of points, while -> for
 * slide 13: drawBullseye function now for
 * slide 14: drawShiftyRow function for
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

   //slide 4 while loop for point row
   //LCV point x coord, locationX
   //start 0, stop before 30
   //each turn +1

   let locationX = 0;
   while (locationX < 30) {
      //actual loop work
      stroke(random(200), random(200),
         random(200));
      point(locationX, 40);

      //update for next turn
      locationX++;
   }

   //slide 5 for loop for point row
   //LCV point x coord, locationX
   //start 0, stop before 30
   //each turn +1

   for (locationX = 0; //initialization
      locationX < 30; //test condition
      locationX++ /*update each turn*/) {
      console.log("for locationX?", locationX);
      //actual loop work
      stroke(random(200), random(200),
         random(200));
      point(locationX, 50);
   }
   console.log("leave for loop at", locationX);

   //slide 14 for loop, random-spaced squares
   drawShiftyRow(100);
}

/**
 * draw :
 */
function draw() {
   drawBullseye(mouseX, mouseY);
}

/**
 * drawBullseye: draw concentric circles
 * to form 200-wide bullseye at 
 * given location coords, slide 13
 * @param {number} x center coord
 * @param {number} y center coord
 */
function drawBullseye(x, y) {
   //start w. biggest circle 200px, 
   // then shrink 20px

   //LCV circle width, w
   //start 200px
   //stop at 10px
   //each turn -20px

   for (let w = 200; //initialization
      w >= 10; //test  v. stop
      w -= 20 /* update */) {
      fill(w, 10); //grayscale color
      ellipse(x, y, w);
   }
}

/**
 * drawShiftyRow: draw randomly-spaced
 *     row of squares at given y coord
 * slide 14
 * @param {number} y row y coord
 */
function drawShiftyRow(y) {
   fill(100, 50);

   //LCV x coord of squares, xPos
   //start 0, stop at width - 20
   //each turn + random(25)
   for (let xPos = 0; //init
      xPos <= width - 20; //test LCV v. stop
      xPos += random(25) /* update */) {
      rect(xPos, y, 20);
   }
}/**
 * WM Harris, 2/27/26
 * IGME-101: 7-3 demo for loop matching
 * slide 15
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

   /*** 1 - D ***/
   stroke("olive");
   noFill();
   for (let i = 1; i < width;
      i *= 1.1) {
      rect(0, i, i, i * 2);
   }

   /*** 2 - A ***/
   stroke("magenta");
   for (let i = 0; i < 10; i++) {
      rect(i * 20, height / 2, 5);
   }

   /*** 3 - C ***/
   stroke("dodgerBlue");
   let x = 0;
   for (let i = 255; i > 0; i -= 15) {
      fill(i);
      rect(x, height / 3, 10);
      x += 10;
   }

   /** 4 - B ***/
   noFill();
   stroke("darkRed");
   for (let i = 0; i < 10; i++) {
      rect(0, 0, i * 10, i * 20);
   }
}
/**
 * WM Harris, 3/2/26
 * IGME-101: 8-1 demo for loop challenges
 * slide 16 challenges
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   loop1();
   loop2();
   loop3();
}

/**
 * loop1 :
 */
function loop1() {
   //LCV i to count up
   //start 1,   stop at 31
   //each turn +2
   for (let i = 1; i <= 31; i += 2) {
      console.log("loop 1: i is", i);
   }
}

function loop2() {
   //LCV l count down
   //start 515,  stop at 500
   //each turn -.5
   for (let l = 515; l >= 500; l = l - .5) {
      console.log("loop 2: l is", l);
   }
}

function loop3() {
   background("beige");
   //LCV square y coord (square sized 17)
   //start 0, stop before height or 400 or ?
   //each turn +17 + 4  => +21
   for (let y = 0; y < height; y += 21) {
      rect(130, y, 17);
   }
}/**
 * WM Harris, 3/2/26
 * IGME-101: 8-1 demo Image obejcts
 * slide 5: loadImage() in preload, image()
 * slide 9: tint()
 */

"use strict"; //catch some common coding errors

/* Global variables */
//will store images:
let ariaImg;
let javImg;
let artImg;

/**
 * preload: load media files into variables
 *    so they'll be ready in setup, etc.
 */
function preload() {
   //imgVar = loadImage(pathString)
   ariaImg = loadImage("media/Harris_Aria.jpg");
   console.log("image in preload?", ariaImg);
   javImg = loadImage("media/Harris_Shugabanni.jpg");
   console.log("image in preload?", javImg);
   artImg = loadImage("media/thb_art.jpg");
   console.log("image in preload?", artImg);
}

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   //background(img, [a])
   background(ariaImg);

   //place image on canvas
   //image(img, x, y, [w], [h])
   image(javImg, 20, 20);

   tint("navy");
   image(ariaImg, 200, 200);

   noTint();
   image(artImg, 30, 250);

   tint(255, 100);
   image(javImg, 40, 300, 100, 60);
   image(artImg, 240, 10, 10, 380);

   tint(200, 50, 255, 200);
   image(javImg, 140, 300, 100, 60);
   image(artImg, 340, 10, 10, 380);

}/**
 * WM Harris, 3/6/26
 * IGME-101: 8-3 demo Images (as objects)
 * slide 13: image .width & .height
 * slide 14: img.resize(w,h),
 *           img.mask(imgAlpha)
 *           img.filter(MODE)
 * back img from https://www.icosix.com/icon/459/back
 *             IcoSix
 * other imgs from people.rit.edu/wmhics (mine :)
 */

"use strict"; //catch some common coding errors

/* Global variables */
let imgAria;
let imgJav;
let imgBack;

function preload() {
   imgAria = loadImage("media/Harris_Aria.jpg");
   imgJav = loadImage("media/Harris_Shugabanni.jpg");
   imgBack = loadImage("media/back.png");
   console.log("start loading", imgAria, imgJav);


}

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   //leaving images & rects in CORNER mode

   //check imgJav dimensions:
   console.log("imgJav dimensions?",
      imgJav.width, imgJav.height);

   //resize to 200w, with proportional height
   // img.resize(w,h)    slide 14
   imgJav.resize(200, 0);
   console.log("new imgJav dimensions?",
      imgJav.width, imgJav.height);
}

/**
 * draw : frame image with custom
 *    sized rectangle, slide 13
 */
function draw() {
   background("beige");

   //20px frame behind aria image
   //using .width & .height
   fill("navy");
   rect(50 - 20, 80 - 20,
      imgAria.width + 40,
      imgAria.height + 40);
   image(imgAria, 50, 80);


   image(imgJav, 87, 190);

   image(imgBack, 0, 0);
}

/**
 * mouseClicked: apply mask to imgJav
 *   Alpha of imgJav pixels set to alpha
 *   of imgBack pixels (scaled to match)
 *    slide 14
 */
function mouseClicked() {
   imgJav.mask(imgBack);

   imgAria.filter(POSTERIZE, 6);
}/**
 * WM Harris, 3/16/26
 * IGME-101: 9-1 demo classes
 * slide 14-end : creating a class
 */

"use strict"; //catch some common coding errors

/* Global variables */
//Will store Car instances:
let car1;
let car2;

//Will store Pen instance:
let myPen;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

   //Construct 2 new Cars and store
   //in car1 and car2
   car1 = new Car();
   console.log("car1?", car1);

   car2 = new Car();
   console.log("car2?", car2);

   //Construct a new Pen and store
   //in myPen
   myPen = new Pen();
   console.log("myPen?", myPen);

   //use properties of an instance:
   //slide 28
   //set a local var...
   let roof = car1.isConvertible;
   console.log("roof?", roof);

   //set a bg color...
   background(car2.color);

   //update property value...
   car2.color = "orange";
   console.log("car1.color, car2.color?",
      car1.color, car2.color);
   car2.doors = 2;
   console.log("car2.doors?", car2.doors)
}

/**
 * draw :
 */
function draw() {

}

/**  Car.js **********************
 * WM Harris, 3/16/26
 * IGME-101: 9-1 demo classes
 * class Car:
 */
class Car {
    constructor() {
        //Initialize Car properties:
        //this.propertyName = someValue;
        this.color = "purple";
        this.doors = 4;
        this.x = 200;
        this.y = random(50, height - 50);
        this.speed = 0;
        this.isConvertible = false;
    }
}

/** Pen.js *****************
 * WM Harris, 3/16/26
 * IGME-101: 9-1 demo classes
 * class Pen:
 */

class Pen {
    constructor() {
        this.height = 6;
        this.thickness = 1;
        this.inkColor = "black";
        this.clickedOn = false;
    }
}/**
 * WM Harris, 3/18/26
 * IGME-101: 9-2 demo class methods
 * slide 1-13: Ball class and Car class
 * with methods
 */

"use strict"; //catch some common coding errors

/* Global variables */
//will store instance of Ball class:
let bouncer;
let bounder;

//will store Car instance:
let cruiser;
let coupe;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   bouncer = new Ball();
   console.log("bouncer?", bouncer);

   bounder = new Ball();
   bounder.y = 330;
   bounder.x = 200;
   console.log("bounder?", bounder);

   cruiser = new Car();
   console.log("cruiser?", cruiser);
   coupe = new Car();
   coupe.color = "olive";
   console.log("coupe?", coupe);
}

/**
 * draw : display & move
 *    the ball, slide 10
 */
function draw() {
   background("lavender");
   //display a Ball instance:
   bouncer.display();
   bounder.display();
   //move it, too
   bouncer.move();
   bounder.move();

   //display a Car instance
   cruiser.display();
   coupe.display();
   //move it, too
   cruiser.move();
   coupe.move();
}

/**
 * mouseClicked: start the
 *    cars!
 */
function mouseClicked() {
   cruiser.start();
   coupe.start();
}

/** Ball.js ************
 * WM Harris, 3/18/26
 * IGME-101: 9-2 demo class methods
 * Ball class: bouncing circle
 */
class Ball {
    constructor() {
        //position coordinates
        this.x = width / 3;
        this.y = 20;
        //speed for both axes
        this.velX = 1;
        this.velY = 1;
    }

    /**
     * display: draw red circle
     *  at its position (properties)
     * slide 8
     */
    display() {
        fill("red");
        ellipse(this.x, this.y, 20);
    }

    /**
     * move: update position properties
     *   to move acc'ding to velocity
     *   properties. Bounce (update 
     *   velocity properties) at canvas
     *   edges. slide 9
     */
    move() {
        //Bounce if canvas L or R edge
        //by updating sign of .velX
        if (this.x < 10 || this.x > width - 10) {
            this.velX *= -1;
        }

        //Bounce if canvas top or bottom edge
        //by updating sign of .velY
        if (this.y < 10 || this.y > height - 10) {
            this.velY *= -1;
        }
        //update position based on vel
        this.x += this.velX;
        this.y += this.velY;
    }

}

/** Car.js ************
 * WM Harris, 3/18/26
 * IGME-101: 9-2 demo class methods
 * class Car: rectangle that moves sideways
 */
class Car {
    constructor() {
        //Initialize Car properties:
        //this.propertyName = someValue;
        this.color = "purple";
        this.doors = 4;
        this.x = 200;
        this.y = random(50, height - 50);
        this.speed = 0;
        this.isConvertible = false;
    }

    /**
     * display:  place 20x10 rect at its 
     *  location properties, color
     */
    display() {
        fill(this.color);
        rect(this.x, this.y, 20, 10);
    }

    /**
     * move: update .x based on .speed
     *   wrapping at canvas L & R
     * slide 11
     */
    move() {
        this.x += this.speed;
        //wrap x around canvas edge
        if (this.x < -20) {
            this.x = width;
        } else if (this.x > width) {
            this.x = -20;
        }
    }

    /**
     * start: set random .speed
     * slide 11
     */
    start() {
        this.speed = random(-2, 2);
    }
}/**
 * WM Harris, 3/20/26
 * IGME-101: 9-3 demo method parameters
 * slide 15: Ball constructor parameters
 * slide 16: Car constructor + method params
 * slide 18: Car.isInside method returns boolean
 *      used inside class (this.__()) and 
 *     in main sketch draw (varName.___())
 */

"use strict"; //catch some common coding errors

/* Global variables */
//will store Ball instances:
let ball1;
let ball2;

//will store Car instances:
let cruiser;
let coupe;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

   //slide 15 construct, sending args:
   ball1 = new Ball("red", 250, 150, 1, 1);
   ball2 = new Ball("orange", 10, 10, random(-2, 2),
      random(-2, 2));
   console.log("ball1?", ball1);
   console.log("ball2?", ball2);

   //slide 16, construct, sending args
   coupe = new Car("purple", random(width),
      random(20, height - 20));
   cruiser = new Car(color(0, 200, 100),
      10, 300);
   console.log("coupe?", coupe);
   console.log("cruiser?", cruiser);
}

/**
 * draw : display and move both
 *    ball instances and
 *   both cars
 */
function draw() {
   background("lavender");
   ball1.display();
   ball2.display();

   ball1.move();
   ball2.move();

   //slide 18 show circle if mouse
   //pressed inside either car:
   if (mouseIsPressed) {
      //is mouse inside a car?
      if (coupe.isInside(mouseX, mouseY) ||
         cruiser.isInside(mouseX, mouseY)) {
         noFill();
         ellipse(mouseX, mouseY, 30);
      }
   }
   coupe.display();
   cruiser.display();

   coupe.move();
   cruiser.move();
}

/**
 * mouseClicked: re/start both cars
 * so they drive in opposite directions
 */
function mouseClicked() {
   coupe.start(2);
   cruiser.start(-2);
}

/**
 * keyPressed: if mouse on left side
 *    randomly re/start coupe, otherwise
 *    randomly re/start cruiser Car.
 */
function keyPressed() {
   if (mouseX < width / 2) {
      coupe.start(random(-2, 2));
      console.log("coupe speed", coupe.speed);
   } else {
      cruiser.start(random(-2, 2));
      console.log("cruiser speed", cruiser.speed);
   }
}
  

/** Ball.js ************
 * WM Harris, 3/20/26
 * IGME-101: 9-3 demo method
 *  and constructor parameters
 * Ball class: bouncing circle
 */
class Ball {
    /**
     * constructor: set color, position & 
     * velocity properties using parameter values
     * @param {*} _color fill color
     * @param {number} x position coord
     * @param {number} y position coord
     * @param {number} velX velocity-x
     * @param {number} velY velocity-y
     */
    constructor(_color, x, y, velX, velY) {
        this.color = _color;
        //position coordinates
        this.x = x;
        this.y = y;
        //speed for both axes
        this.velX = velX;
        this.velY = velY;
    }

    /**
     * display: draw circle in its .color
     *  at its position (properties)
     * slide 8
     */
    display() {
        fill(this.color);
        ellipse(this.x, this.y, 20);
    }

    /**
     * move: update position properties
     *   to move acc'ding to velocity
     *   properties. Bounce (update 
     *   velocity properties) at canvas
     *   edges. slide 9
     */
    move() {
        //Bounce if canvas L or R edge
        //by updating sign of .velX
        if (this.x < 10 || this.x > width - 10) {
            this.velX *= -1;
        }

        //Bounce if canvas top or bottom edge
        //by updating sign of .velY
        if (this.y < 10 || this.y > height - 10) {
            this.velY *= -1;
        }
        //update position based on vel
        this.x += this.velX;
        this.y += this.velY;
    }

}


/** Car.js ************
 * WM Harris, 3/18/26
 * IGME-101: 9-3 demo class constructor
 *   and method parameters
 * class Car: rectangle that moves sideways
 *          and becomes transparent if mouse inside
 */
class Car {
    /**
     * constructor: set color & position coords
     *   from params, as well as doors, speed,
     *   and isConvertible properties
     * @param {*} _color fill color
     * @param {*} x position coord
     * @param {*} y position coord
     */
    constructor(_color, x, y) {
        //Initialize Car properties:
        //this.propertyName = someValue;
        this.color = _color;
        this.doors = 4;
        this.x = x;
        this.y = y;
        this.speed = 0;
        this.isConvertible = false;
    }

    /**
     * display:  place 20x10 rect at its 
     *  location properties, color
     */
    display() {
        //fill .color unless mouse is inside:
        if (this.isInside(mouseX, mouseY)) {
            fill(100, 30);
        } else { //use actual color
            fill(this.color);
        }
        rect(this.x, this.y, 20, 10);
    }

    /**
     * move: update .x based on .speed
     *   wrapping at canvas L & R
     * slide 11
     */
    move() {
        this.x += this.speed;
        //wrap x around canvas edge
        if (this.x < -20) {
            this.x = width;
        } else if (this.x > width) {
            this.x = -20;
        }
    }

    /**
     * start: set .speed using parameter
     * slide 16
     * @param {number} speed h-speed
     */
    start(speed) {
        this.speed = speed;
    }

    /**
     * isInside: return whether given target
     * point is inside car rect
     * @param {number} x target coord
     * @param {number} y target coord
     * @returns {boolean} true if inside
     */
    isInside(x, y) {
        //rect(this.x, this.y, 20, 10)
        let inside = x >= this.x &&
            x <= this.x + 20 &&
            y >= this.y &&
            y <= this.y + 10;

        //debug testing: show isInside text
        fill(0);
        text(inside, this.x, this.y - 10);

        //return boolean result
        return inside;
    }
}/**  Sun.js **********
 * WM Harris, 3/23/26
 * IGME-101: 10-1 demo trig for
 *  movement, etc animation
 * Sun class: yellow circle
*/
class Sun {
    /**
     * constructor: set x, y, size props
     * @param {number} x center coord
     * @param {number} y center coord
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(80, 380);
    }

    /**
     * display: yellow circle at its
     * location and size
     */
    display() {
        fill("yellow");
        ellipse(this.x, this.y, this.size);
    }

    /**
     * isWithin: return whether given target
     *   point is within this sun's radius
     * @param {number} x target coord
     * @param {number} y target coord
     * @returns {boolean} whether target within
     */
    isWithin(x, y) {
        let distPt = dist(x, y,
            this.x, this.y);
        //show dist in canvas to debug
        fill(0);
        text(distPt, this.x, this.y);

        //return whether distance to
        //target is <= sun radius
        return distPt <= this.size / 2;
    }
}


/** Mover.js **********
 * WM Harris, 3/23/26
 * IGME-101: 10-1 demo trig for
 *  movement, etc animation
 * slide 10: move in circle w. sin(), cos()
 * slide 11: fall & wrap linearly w. %
 * class Mover: small circle that moves 
 *   circularly or fall/wraps
 */
class Mover {
    /**
     * constructor: set color, center coords,
     * & radius props from params; random
     * start angle.
     * @param {*} _color fill color
     * @param {number} xc movement center coord
     * @param {number} yc movement center coord
     * @param {number} radius movement radius
     */
    constructor(_color, xc, yc, radius) {
        //fill color
        this.color = _color;
        //movement center coords
        this.xc = xc;
        this.yc = yc;
        //movement radius
        this.radius = radius;
        //movement angle
        this.angle = random(360);
    }

    /**
     * displayCircle: move around radius
     * of movment circle, slide 10
     */
    displayCircle() {
        //get coords for movement circle@angle
        let x = this.xc + cos(this.angle) *
            this.radius;
        let y = this.yc + sin(this.angle) *
            this.radius;
        //put tiny circle there
        fill(this.color);
        ellipse(x, y, 10);

        //update angle for movement
        this.angle += 1;
    }

    /**
     * displayVWrap: move linearly -
     * fall down and wrap, slide 11
     */
    displayVWrap() {
        let y = this.yc - this.radius +
            (this.angle % (1 + 2 * this.radius));
        fill(this.color);
        ellipse(this.xc, y, 10);

        //update angle for movement
        this.angle += .5;
    }
}/**
 * WM Harris, 3/23,27/26
 * IGME-101: 10-1,-3 demo trig for
 *  movement, etc animation
 * slide 4-5 :p5 dist() function 
 *    w. Sun class instance
 * slide 10: move in circle w. sin(), cos()
 * slide 11: fall & wrap linearly w. %
 * slide 12: move in h-wave w. sin()
 * slide 13: h-oscillate w. cos()
 *       Sun pulsing halo w. sin()
 */

"use strict"; //catch some common coding errors

/* Global variables */
//will store Sun instance:
let sun;

//will store Mover instance:
let circMover;
let fallMover;
let waveMover;
let oscMover;

//will store canvas bg color blueness:
let bgBlue = 255; //range 160...255

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   background("beige");

   angleMode(DEGREES); //0..360 vs radians 0..2*PI

   //slide 5 make a Sun
   sun = new Sun(100, 300);
   console.log("sun?", sun);

   //slide 10 make a circular Mover
   circMover = new Mover("purple", 100, 100,
      50);
   console.log("circMover?", circMover);

   //slide 11 make a fall-wrap Mover
   fallMover = new Mover("orange", 100, 100,
      40);
   console.log("fallMover?", fallMover);

   //slide 12 make h-wave Mover
   waveMover = new Mover("olive", 300, 300, 90);
   console.log("waveMover?", waveMover);

   //slide 13 make h-oscillation Mover
   oscMover = new Mover("teal", 290, 100, 100);
   console.log("oscMover?", oscMover);
}

/**
 * draw :
 */
function draw() {
   //background(100, 160, bgBlue);
   //slide 5
   sun.display();

   //If mouse is within sun,
   // update the bg color:
   if (sun.isWithin(mouseX, mouseY)) {
      updateBG();
      stroke("blue");
   } else {
      stroke(30, 90);
   }

   //slide 10
   circMover.displayCircle();
   //slide 11
   fallMover.displayVWrap();
   //slide 12
   waveMover.displayWave();
   //slide 13
   oscMover.displayOsc();
}

/**
 * updateBG: update blue of bg
 *   to increase (max 255, min 160)
 *  and wrap
 */
function updateBG() {
   bgBlue += .1;
   if (bgBlue > 255) {
      bgBlue = 160;
   }
}

/** Mover.js **********
 * WM Harris, 3/23,27/26
 * IGME-101: 10-1, -3 demo trig for
 *  movement, etc animation
 * slide 10: move in circle w. sin(), cos()
 * slide 11: fall & wrap linearly w. %
 * slide 12: move in h-wave w. sin()
 * slide 13: h-oscillate w. cos()
 * class Mover: small circle that moves 
 *   circularly or fall/wraps
 */
class Mover {
    /**
     * constructor: set color, center coords,
     * & radius props from params; random
     * start angle.
     * @param {*} _color fill color
     * @param {number} xc movement center coord
     * @param {number} yc movement center coord
     * @param {number} radius movement radius
     */
    constructor(_color, xc, yc, radius) {
        //fill color
        this.color = _color;
        //movement center coords
        this.xc = xc;
        this.yc = yc;
        //movement radius
        this.radius = radius;
        //movement angle
        this.angle = random(360);
    }

    /**
     * displayCircle: move around radius
     * of movment circle, slide 10
     */
    displayCircle() {
        //get coords for movement circle@angle
        let x = this.xc + cos(this.angle) *
            this.radius;
        let y = this.yc + sin(this.angle) *
            this.radius;
        //put tiny circle there
        fill(this.color);
        ellipse(x, y, 10);

        //update angle for movement
        this.angle += 1;
    }

    /**
     * displayVWrap: move linearly -
     * fall down and wrap, slide 11
     */
    displayVWrap() {
        let y = this.yc - this.radius +
            (this.angle % (1 + 2 * this.radius));
        fill(this.color);
        ellipse(this.xc, y, 10);

        //update angle for movement
        this.angle += .5;
    }

    /**
     * displayWave: move in h-Wave
     * y uses sin, wrap x to radius
     * using %. slide 12
     */
    displayWave() {
        let x = this.xc - this.radius +
            (this.angle % (1 + 2 * this.radius));
        let y = this.yc + sin(this.angle * 4.3) *
            this.radius;
        fill(this.color);
        ellipse(x, y, 10);

        //update angle for movement
        this.angle += 1;
    }

    /**
     * displayOsc: horizontal oscillation
     *      across center, slide 13
     */
    displayOsc() {
        let x = this.xc + cos(this.angle) *
            this.radius;
        fill(this.color);
        ellipse(x, this.yc, 10);

        //update angle for movement
        this.angle += 1;
    }
}

  /**  Sun.js **********
 * WM Harris, 3/23/26
 * IGME-101: 10-1 demo trig for
 *  movement, etc animation
 * slide 5
 * slide 13: gently oscillating halo
 * Sun class: yellow circle
*/
class Sun {
    /**
     * constructor: set x, y, size props
     * @param {number} x center coord
     * @param {number} y center coord
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(80, 380);
    }

    /**
     * display: yellow circle at its
     * location and size
     * with gently pulsing halo (slide 13)
     */
    display() {
        //halo size pulses using sin
        //halo range this.size +6 to +16
        //   center of oscillation 6 + (10/2)
        //   radius of oscillation 10/2
        noStroke();

        fill(255, 255, 100, 40);
        ellipse(this.x, this.y, this.size + 20);
        fill(100, 100, 255, 10);
        let haloDiam = this.size + 11;
        ellipse(this.x, this.y, haloDiam +
            sin(frameCount) * 5);

        fill(255, 255, 100, 40);
        ellipse(this.x, this.y, this.size);


    }

    /**
     * isWithin: return whether given target
     *   point is within this sun's radius
     * @param {number} x target coord
     * @param {number} y target coord
     * @returns {boolean} whether target within
     */
    isWithin(x, y) {
        let distPt = dist(x, y,
            this.x, this.y);
        //show dist in canvas to debug
        fill(0);
        text(distPt, this.x, this.y);

        //return whether distance to
        //target is <= sun radius
        return distPt <= this.size / 2;
    }
}/**
 * WM Harris, 3/27/26
 * IGME-101: 10-3 demo keyIsDown
 * slide 1: wasd & arrow keys
 */

"use strict"; //catch some common coding errors

/* Global variables */
let nodeX;
let nodeY;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

   nodeX = width / 2;
   nodeY = height / 2;
}

/**
 * draw :
 */
function draw() {
   background(255, 255, 200, 30);

   fill(100, 200, 255, 100);
   ellipse(nodeX, nodeY, 20);
   moveNode();
}

/**
 * moveNode: use keyboard keys to move node
 *  using arrows or WASD
 */
function moveNode() {
   fill(0);
   //a or left
   if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      nodeX -= 1;
      text(key, 20, 120);
   }
   //d or right
   if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      nodeX += 1;
      text(key, 300, 120);
   }
   //w or up
   if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      nodeY -= 1;
      text(key, 170, 20);
   }
   //s or down
   if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      nodeY += 1;

      text(key, 170, 300);
   }
   //dealing with canvas edges
   nodeX = constrain(nodeX, 10, width - 10);
   nodeY = constrain(nodeY, 10, height - 10);
}/**
 * WM Harris, 3/30/26
 * IGME-101: 11-1 demo FSM dragon
 * slide 10-18: plan finite state machine w dragon
 * slide 19: updateState method
 * slide 23: display method
 */

"use strict"; //catch some common coding errors

/* Global variables */
//Will store Dragon instance:
let dragon;

//dragon images:
let imgFaceL;
let imgWalkL;
let imgFaceR;
let imgWalkR;

function preload() {
   imgFaceL = loadImage("media/faceL.png");
   imgWalkL = loadImage("media/walkL.png");
   imgFaceR = loadImage("media/faceR.png");
   imgWalkR = loadImage("media/walkR.png");
}

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   imageMode(CENTER);

   dragon = new Dragon();
   console.log("dragon?", dragon);
}

/**
 * draw :
 */
function draw() {
   background("beige");
   dragon.updateState();
   dragon.display();
}

/** Dragon.js *********
 * WM Harris, 3/30/26
 * IGME-101: 11-1 demo FSM dragon
 * slide 10-18: plan finite state machine w dragon
 * slide 19: updateState method
 * slide 23: display method
 * Dragon class: has 4 states with images to
 * match. Controlled by left & right arrow keys
 */
class Dragon {
    constructor() {
        //.state: "walkL", "walkR",
        //    "faceL", "faceR"
        this.state = "faceR";

        //Assign images for each state:
        this.faceL = imgFaceL;
        this.walkL = imgWalkL;
        this.faceR = imgFaceR;
        this.walkR = imgWalkR;

        //randomize .color:
        this.color = color(random(100, 255),
            random(100, 255), random(100, 255));
    }

    /**
     * display: place the image that
     *  matches current state. slide 23
     */
    display() {
        //for debugging, check this.state
        text(this.state, 20, 200);

        let stateImage; //will store image for .state
        if (this.state === "faceL") {
            stateImage = this.faceL;
        } else if (this.state === "walkL") {
            stateImage = this.walkL;
        } else if (this.state === "faceR") {
            stateImage = this.faceR;
        } else if (this.state === "walkR") {
            stateImage = this.walkR;
        } else { //should NOT get here. YELL
            console.log("Problem state:", this.state);
        }

        //place image at its location:
        tint(this.color);
        image(stateImage, width / 2, height / 2);
        noTint();
    }

    /**
     * updateState: update .state
     *  based on inputs accd'ing to
     *  STx table (slide 19):
     *          next state w. input   
     * state\   Larr    Rarr    other 
     * faceL|   walkL   walkR   faceL
     * walkL|   walkL   walkR   faceL
     * faceR|   walkL   walkR   faceR
     * walkR|   walkL   walkR   faceR
     */
    updateState() {
        //left arrow? always go walkL
        if (keyIsDown(LEFT_ARROW)) {
            this.state = "walkL";

            //right arrow? always go walkR
        } else if (keyIsDown(RIGHT_ARROW)) {
            this.state = "walkR";

            //other? if walking, change to face
        } else if (this.state === "walkL") {
            this.state = "faceL";
        } else if (this.state === "walkR") {
            this.state = "faceR";
        }
    }
}/**
 * WM Harris, 4/1/26
 * IGME-101: 11-2 demo object references
 * slide 2: sharing object references
 *          (aka address)
 * slide 7: null (Object version of "")
 *       vs object instances
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   //object references sharing or not?
   // slide 2
   let myCar = new Car();
   console.log("myCar.x?", myCar.x);

   //what does this mean?
   //copy myCar's address to car2
   let car2 = myCar;
   console.log("car2 and myCar?", car2, myCar);

   car2.x = 100;
   console.log("again car2 and myCar?", car2, myCar);

   console.log("(car2 === myCar)?",
      (car2 === myCar));

   //null Object, slide 7
   let obj1;
   //undefined to start
   console.log("let obj1:", obj1);

   //now null
   obj1 = null;  //Object datatype
   console.log("null obj1?", obj1);

   //then Car instance
   obj1 = new Car();
   console.log("Car obj1?", obj1);

   //then Phone instance
   obj1 = new Phone();
   console.log("Phone obj1?", obj1);
}

/** Phone.js **********
 * VERY EMTPTY BUT still a class :
 * slide 7
 */
class Phone {

}/**
 * WM Harris, 4/1/26
 * IGME-101: 11-2 demo obj refs w. cats
 * slide 8-10: Cat basic pickUp & drop
 *            of a Toy (vs null)
 * slide 11-16: Cat tryPickUp, non-ghosty
 *          drop. Toy .holder, getPickedUp,
 *          and dropped
 * slide 18: movingCat reference
 */

"use strict"; //catch some common coding errors

/* Global variables */
//will store Cat:
let nettie;
let celie;
let movingCat = null;

//will store Toy:
let ducky;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

   //slide 10
   nettie = new Cat("Nettie");
   console.log("nettie?", nettie);
   ducky = new Toy("Ducky", "yellow");
   console.log("ducky?", ducky);

   //Can nettie pick up ducky?
   nettie.tryPickUp(ducky);
   console.log("nettie picked up ducky?",
      nettie);

   //Can nettie drop ducky?
   nettie.drop();
   console.log("nettie dropped ducky?",
      nettie);

   //slide 12
   celie = new Cat("Celie");
   console.log("celie?", celie);

   //slide 16
   //can celie pick up ducky?
   celie.tryPickUp(ducky);
   console.log("celie picked up ducky?",
      celie);
   //Nettie tries again?
   nettie.tryPickUp(ducky);
   console.log("nettie picked up ducky, too?",
      nettie);
   //Celie drops ducky
   celie.drop();
   console.log("celie dropped ducky?",
      celie, ducky);

   //MovingCat does things slide 18
   movingCat = nettie;
   movingCat.tryPickUp(ducky);
   console.log("movingCat picked up " +
      "ducky? ", movingCat);

   movingCat = celie;
   movingCat.tryPickUp(ducky);
   console.log("movingCat picked up " +
      "ducky? ", movingCat);

   movingCat = nettie;
   movingCat.drop();
   console.log("movingCat dropped ducky?",
      movingCat, ducky);
}



/**  Cat.js **************
 * WM Harris, 4/1/26
 * IGME-101: 11-2 demo obj refs w. cats
 * slide 8- :
 */
class Cat {
    /**
     * constructor: name from param and
     * null toy
     * @param {string} name 
     */
    constructor(name) {
        this.name = name;
        this.toy = null; //no toy yet!
    }

    /**
     * tryPickUp: pick up toy property
     * if its available
     * @param {Toy} toy 
     */
    tryPickUp(toy) {
        //tell the toy that This Cat
        //would like to pick it up.
        //will get either toy or null
        this.toy =
            toy.getPickedUp(this);
    }

    /**
     * drop: Let go of toy
     * If it has a toy,
     * Tell toy its dropped before
     * nulling
     */
    drop() {
        //If there is a toy,
        //notify its been dropped
        //and set to null
        if (this.toy !== null) {
            this.toy.dropped();
            this.toy = null;
        }
    }
}

/** Toy.js *******
 * WM Harris, 4/1/26
 * IGME-101: 11-2 demo obj refs w. cats
 * slide 8- :
 */
class Toy {
    /**
     * constructor: name and 
     * color from params,
     * null holder
     * @param {string} name 
     * @param {*} _color 
     */
    constructor(name, _color) {
        this.name = name;
        this.color = _color;
        //start as free
        this.holder = null;
    }

    /**
     * getPickedUp: if free, accept
     *  a holder Cat, slide 15
     * @param {Cat} cat 
     * @returns {Toy} or null
     */
    getPickedUp(cat) {
        if (this.holder === null) {
            //accept the cat
            this.holder = cat;
            //return This Toy instance
            return this;
        } else { //already held
            //reject the cat
            return null;
        }
    }

    /**
     * dropped: lost holder
     * slide 15
     */
    dropped() {
        this.holder = null;
    }
}/**
 * WM Harris, 4/3/26
 * IGME-101: 11-3 demo arrays
 * slide 5-6: creating array
 * slide 6: arr.length property
 * slide 7-8: working with values
 *      using arr[index], index 
 *       must be integer
 * slide 8: last item:
 *            arr[arr.length - 1]
 *     safely put next new item at
 *            arr[arr.length]
 * slide 10: for loop over array
 * slide 11: for loop to fill array
 * slide 12: fill array of class instances
 * slide 13: loop to call methods
 *       of instances in array
 * slide 14: loop to add new instances
 *          to an array
 */

"use strict"; //catch some common coding errors

/* Global variables */
//slide 5. Store collection
//of weight values, but start
// with empty array:
let bulbWeights = [];

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   console.log("bulbWeights empty?",
      bulbWeights);

   //slide 6. Array w. data in it
   bulbWeights = [33, 55, 22, 11, 44];
   console.log("bulbWeights filled?",
      bulbWeights);
   //arr.length : how many items in it
   let numBulbs = bulbWeights.length;

   console.log("how many weights?",
      numBulbs);

   //slide 7. arr[index] = value
   bulbWeights[5] = 22.1;
   bulbWeights[6] = 13;
   bulbWeights[7] = 9.3;

   //Temp test of evil. Don't skip
   // and leave undefined slots!
   //bulbWeights[11] = 1999;

   console.log("bigger bulbWeights",
      bulbWeights, "with .length",
      bulbWeights.length);

   //access array items by index.
   // slide 8
   bulbWeights[5] = 23.2;
   console.log("updated at [5]:",
      bulbWeights[5]);

   //access last item in array
   //using arr.length - 1 as index
   console.log("Last item?",
      bulbWeights[bulbWeights.length - 1]);

   //add new item to end of array
   //using arr.length as index
   bulbWeights[bulbWeights.length] = 27;
   bulbWeights[bulbWeights.length] = 18;
   bulbWeights[bulbWeights.length] = 9.4;
   console.log("larger bulbWeights",
      bulbWeights, "with .length",
      bulbWeights.length);

   //access last item in array
   //using arr.length - 1 as index
   console.log("Last item?",
      bulbWeights[bulbWeights.length - 1]);

   //update last item
   bulbWeights[bulbWeights.length -
      1] = 29;
   console.log("1 update:", bulbWeights);

   //try to access item beyond end?
   //it will be undefined (no error, tho)
   console.log("bulbWeights[42]?",
      bulbWeights[42]);

   //slide 10. for loop over array
   console.log("* for loop w. bulbWeights:")
   //LCV: array index i
   //start 0, stop before .length,
   //each turn +1
   fill("olive");
   for (let i = 0; i < bulbWeights.length;
      i++) {
      console.log("item:", bulbWeights[i]);
      //10px padding, 
      // 18px wide + 2px spacing
      let x = 10 + i * (18 + 2);
      rect(x, 10, 18, bulbWeights[i]);
   }

   //slide 11: for loop to fill array
   //Array will store peep names:
   const peeps = [];
   //LCV array index i
   //start 0, stop before 12, each turn +1
   for (let i = 0; i < 12; i++) {
      peeps[i] = "Peep " + i;
   }
   console.log("array peeps:", peeps);

   //slide 12. array of class instances
   //start with empty array, toys:
   const toys = [];

   toys[0] = new Toy("ducky", "yellow");
   toys[1] = new Toy("feather", "white");
   toys[toys.length] = new Toy("ball", "red");
   toys[toys.length] = new Toy("laser pointer", "silver");
   console.log("cat toys:", toys);

   //slide 13. loop array of instances
   //LCV array index i
   //start 0, stop before .length,
   // each turn +1
   for (let i = 0; i < toys.length; i++) {
      //console.log("instance?", toys[i]);
      //using brackets AND dot notation
      toys[i].display();
   }

   //generate 9 new toys!! with a loop
   //slide 14
   //LCV i, start 0, stop before 9,
   //each turn +1
   for (let i = 0; i < 9; i++) {
      toys[toys.length] = new Toy("toy " + i,
         color(random(255), 0, random(255)));
   }

   console.log("more toys!", toys);
   for (let i = 0; i < toys.length; i++) {
      //set fill color using toy color
      fill(toys[i].color);
      //place name randomly on canvas
      text(toys[i].name,
         random(width - 50), random(20, height));
   }
}/**
 * WM Harris, 4/6/26
 * IGME-101: 12-1 demo looping 
 *       arrays of objects
 * slide 2: loop array of strings
 * slide 3: fill cats 3 ways, call cats[n]'s
 *          method and update property
 * slide 4: loop to fill target array length
 *           of Cell instances
 * slide 5: loop to fill canvas width with
 *        Fish instances
 */

"use strict"; //catch some common coding errors

/* Global variables */
//will store Cell instances:
const gcells = [];

//will store Fish instances
const fishies = [];

/**
 * preload: load fish image, then use
 *  for enough Fish to fill canvas width
 * in fishies array. slide 5
 */
function preload() {
   let imgFish = loadImage("media/fish.png");
   //Fill fishies with enough instances
   //to fill canvas width, 400
   //LCV: x coord of fish
   //start 4, stop before 400,
   // each turn +40 (median fish width)
   for (let x = 4; x < 400; x += 40) {
      fishies[fishies.length] =
         new Fish(x, 150, imgFish);
   }
}

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   background("beige");
   //Loop array of strings to display
   //on canvas, slide 2
   const items = ["item 0", "item 1",
      "item 2", "item 3", "item 4",
      "item 5", "item 6", "item 7",
      "item 8"];
   //LCV: array index i, 0 ... < .length
   for (let i = 0; i < items.length; i++) {
      //20px padding from top, 10px spacing
      const y = 20 + i * 10;
      text(items[i], 20, y);
   }

   //adding cats to array 3 ways
   //slide 3 ***********
   //1. put 'em in the array brackets
   //  to assign literal array
   const cats = [new Cat("Tiger"),
   new Cat("Ginger"), new Cat("Slimer")];
   console.log("cats array:", cats);

   //2. assign constructor result to 
   //    array slot
   cats[3] = new Cat("Geiger");
   console.log("cats array + 1:", cats);

   //3. assign obj var to array slot
   const niner = new Cat("Niner");
   cats[cats.length] = niner;
   console.log("cats array + another 1:",
      cats);

   //access methods and properties of 
   //array'd object: arr[index].prop
   // or arr[index].method(args):
   cats[0].drop();
   cats[cats.length - 1].name += " 49er";
   console.log("adjusted cats:", cats);

   //Fill gcells with 10 instances:
   //slide  4
   //LCV i: 0... < 10
   for (let i = 0; i < 10; i++) {
      //spacing 20px:
      let x = i * 20;
      gcells[i] =
         new Cell("cell " + i, x);
   }
   console.log("gcells full?", gcells);

   //Check fishies array, slide 5.
   console.log("fishies full?", fishies);
}

/**
 * draw : display all gcells, slide 4
 *       display all fishies, slide 5
 */
function draw() {
   fill("aqua");
   //loop over whole .length of gcells
   // to display each instance:
   for (let i = 0;
      i < gcells.length; i++) {
      gcells[i].display();
   }

   //loop over whole .length of fishies
   // to display each instance:
   for (let i = 0;
      i < fishies.length; i++) {
      fishies[i].display();
   }
}

/**  Cat.js **************
 * WM Harris, 4/1/26, 4/6/26
 * IGME-101: 11-2 demo obj refs w. cats
 * slide 6 : add .x .y, .size, 
 * isWithin(), move(), .display()
 */
class Cat {
    /**
     * constructor: name from param and
     * null toy
     * also random x, y, size
     * @param {string} name 
     */
    constructor(name) {
        this.name = name;
        this.toy = null; //no toy yet!
        this.x = random(100, width - 100);
        this.y = random(100, height - 100);
        this.size = random(30, 60);
    }

    /**
     * display: place temp shape at its
     * location & size
     */
    display() {
        fill("tan");
        ellipse(this.x, this.y, this.size);
        fill(0);
        text(this.name, this.x, this.y);
    }

    /**
     * isWithin: return whether given target
     *    is within cat's radius
     * @param {number} x target coord
     * @param {number} y target coord
     * @returns {boolean} true if target within
     */
    isWithin(x, y) {
        return dist(this.x, this.y, x, y) <=
            this.size / 2;
    }

    checkFishes() {
        for (let i = 0; i < fishies.length; i++) {
            //Is current fish within cat's bounds?
            if (this.isWithin(fishies[i].x,
                fishies[i].y)) {
                //catch it!
                this.toy = fishies[i];
            }
        }
    }

    /**
     * drop: Let go of toy
     * If it has a toy,
     * Tell toy its dropped before
     * nulling
     */
    drop() {
        //If there is a toy,
        //notify its been dropped
        //and set to null
        if (this.toy !== null) {
            this.toy.dropped();
            this.toy = null;
        }
    }
}


/** Cell.js ***********
 * WM Harris, 4/6/26
 * IGME-101: 12-1 demo looping 
 *       arrays of objects
 * Cell class: .name displays at
 *      its .x & .y
 */
class Cell {
    /**
     * constructor: set name & location
     *      coords (x == y)
     * @param {string} name 
     * @param {number} x location coord (= y)
     */
    constructor(name, x) {
        this.name = name;
        this.x = x;
        this.y = x;
    }

    /**
     * display: show name at its location
     */
    display() {
        text(this.name, this.x, this.y);
    }
}


/** Fish.js ***********
 * WM Harris, 4/6/26
 * IGME-101: 12-1 demo looping 
 *       arrays of objects
 * Fish class: image displays at
 *      its .x & .y, in its .size
 */
class Fish {
    /**
     * constructor: set location and
     * fish image. randomize img .size
     * @param {number} x coord
     * @param {number} y coord
     * @param {p5.Image} imgFish 
     */
    constructor(x, y, imgFish) {
        this.x = x;
        this.y = y + random(-5, 5);
        this.size = random(30, 50);
        this.img = imgFish;
    }

    display() {
        image(this.img, this.x, this.y,
            this.size, this.size * .6);
    }
}/**
 * WM Harris, 4/8/26
 * IGME-101: 12-2 demo looping 
 *       arrays of objects
 * slide 5: loop to fill canvas width with
 *        Fish instances
 * slide 6: moving Cat hunts Fish - can catch
 *    no more than 1. Can drop fish.
 */

"use strict"; //catch some common coding errors

/* Global variables */
//will store Fish instances
const fishies = [];

//will store Cat instance
let celie;

/**
 * preload: load fish image, then use
 *  for enough Fish to fill canvas width
 * in fishies array. slide 5
 */
function preload() {
   let imgFish = loadImage("media/fish.png");
   //Fill fishies with enough instances
   //to fill canvas width, 400
   //LCV: x coord of fish
   //start 4, stop before 400,
   // each turn +40 (median fish width)
   for (let x = 4; x < 400; x += 40) {
      fishies[fishies.length] =
         new Fish(x, 150, imgFish);
   }
}

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   background("beige");
   imageMode(CENTER); //default CORNER

   //Check fishies array, slide 5.
   console.log("fishies full?", fishies);

   //Make a Cat instance, slide 6
   celie = new Cat("Celie");
   console.log("celie Cat?", celie);

   //test celie.isWithin:
   //celie's center .isWithin celie? true
   console.log("celie.isWithin(celie.x, celie.y)?",
      celie.isWithin(celie.x, celie.y));
   //canvas edge .isWithin celie? false
   console.log("celie.isWithin(0, 0)?",
      celie.isWithin(0, 0));
   //just beyond celie .isWithin celie? false
   console.log("celie.isWithin(celie.x, celie.y + celie.size)?",
      celie.isWithin(celie.x, celie.y + celie.size));

   //Console testing for fish.holder:
   //fishies[0].holder = celie; //should move w. celie
   //fishies[0].holder = null; //independent
}

/**
 * draw : display all fishies, slide 5
 */
function draw() {
   background("beige");

   //move and display Cat celie:
   celie.move();
   celie.display();

   //celie checks and maybe 
   // tries to catch a fish
   celie.checkFishes();

   //loop over whole .length of fishies
   // to display each instance:
   for (let i = 0;
      i < fishies.length; i++) {
      fishies[i].display();
   }
}

/**
 * mouseClicked: cat
 *    should drop fish
 */
function mouseClicked() {
   celie.drop();
}

/**  Cat.js **************
 * WM Harris, 4/1/26, 4/6/26, 4/8/26
 * IGME-101: 11-2 demo obj refs w. cats
 * slide 6 : add .x .y, .size, 
 * isWithin(), move(), .display()
 * tryCatch() or .drop() a .fish
 * checkFishes() to hunt fishies array
 */
class Cat {
    /**
     * constructor: name from param and
     * null fish
     * also random x, y, size
     * @param {string} name 
     */
    constructor(name) {
        this.name = name;
        this.fish = null; //no fish yet!
        this.x = random(100, width - 100);
        this.y = random(100, height - 100);
        this.size = random(30, 60);
    }

    /**
     * display: place temp shape at its
     * location & size
     */
    display() {
        fill("tan");
        ellipse(this.x, this.y, this.size);
        fill(0);
        text(this.name, this.x, this.y);
    }

    /**
     * isWithin: return whether given target
     *    is within cat's radius
     * @param {number} x target coord
     * @param {number} y target coord
     * @returns {boolean} true if target within
     */
    isWithin(x, y) {
        return dist(this.x, this.y, x, y) <=
            this.size / 2;
    }

    /**
     * move: go to mouse location
     */
    move() {
        this.x = mouseX;
        this.y = mouseY;
    }

    /**
     * checkFishies: loop over global fishies array
     * and if one is inWithin() cat, catch it.
     * Cannot catch more fish if already has one.
     */
    checkFishes() {
        if (this.fish === null) {
            for (let i = 0; i < fishies.length; i++) {
                //Is current fish within cat's bounds?
                if (this.isWithin(fishies[i].x, fishies[i].y)) {
                    //TRY to catch it!
                    this.tryCatch(fishies[i]);
                }
            }
        }
    }

    /**
    * tryCatch: catch fish property
    * if don't already have one
    * @param {Fish} fish 
    */
    tryCatch(fish) {
        //if don't have fish..
        if (this.fish === null) {
            //Take this fish &
            //become its holder
            this.fish = fish;
            this.fish.holder = this;
            console.log("picked up", fish);
        }
    }

    /**
     * drop: Let go of fish
     * If it has a fish,
     * Tell fish its dropped before
     * nulling
     */
    drop() {
        //If there is a fish,
        //notify its been dropped
        //and set to null
        if (this.fish !== null) {
            this.fish.dropped();
            this.fish = null;
            console.log("drop!");
        }
    }
}

/** Fish.js ***********
 * WM Harris, 4/6/26, 4/8/26
 * IGME-101: 12-2 demo looping 
 *       arrays of objects
 * Fish class: image displays at
 *      its .x & .y, in its .size
 *      if .holder, follow its location
 *      until .dropped()
 */
class Fish {
    /**
     * constructor: set location and
     * fish image. randomize img .size
     * no .holder
     * @param {number} x coord
     * @param {number} y coord
     * @param {p5.Image} imgFish 
     */
    constructor(x, y, imgFish) {
        this.x = x;
        this.y = y + random(-5, 5);
        this.size = random(30, 50);
        this.img = imgFish;

        //no holder yet
        this.holder = null;
    }

    /**
     * display: if held, update
     * location coords relative
     * to holder. Then 
     * show its image at its 
     * location in its size.
     * 
     */
    display() {
        //if held, base location on
        //holder's location:
        if (this.holder != null) {
            this.x = this.holder.x;
            this.y = this.holder.y + 10;
        }

        //show image at location, size:
        image(this.img, this.x, this.y,
            this.size, this.size * .6);
    }

    /**
     * dropped: no longer held
     *  flop away from holder
     */
    dropped() {
        this.x = this.x - this.holder.size;
        this.y = this.y - this.holder.size;

        //stay somewhat inside canvas:
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);

        this.holder = null;
    }
}/**
 * WM Harris, 4/15/26
 * IGME-101: 13-2challenge arrayIX
 * Move mouse to move follower that makes
 * outlines grow as it intersects them.
 */

"use strict"; //catch some common coding errors

/* Global variables */
//will store Follower instance:
let follow;

//Array for Outline instances:
const outlines = [];

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   strokeWeight(8);

   follow = new Follower();
   console.log("follower?", follow);

   //test Outline class
   //let oneOut = new Outline();
   //console.log("one outline?", oneOut);

   //Fill array of 9 Outline instances:
   for (let i = 0; i < 9; i++) {
      outlines[i] = new Outline();
   }
   console.log("outlines?", outlines);
}

/**
 * draw :
 */
function draw() {
   background("lavender");
   //check if any outline is crossed
   //by the follower:
   crossFollower();

   //move & display follower
   follow.move();
   follow.display();

   //loop to display all outlines:
   for (let i = 0; i < outlines.length; i++) {
      outlines[i].display();
   }

}

/**
 * crossFollower: check each outline to
 * see if follower is within it. If so,
 * .grow the outline.
 */
function crossFollower() {
   //loop over every outline:
   for (let i = 0; i < outlines.length; i++) {
      //debug loop check:
      //console.log("?", i, outlines[i].diam);
   }
}

/** Follower.js ********
 * WM Harris, 4/15/26
 * IGME-101: 13-2challenge arrayIX
 * Follower class:
 */
class Follower {
    /**
     * constructor: set location coords
     * .x and .y to 0
     */
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    /**
     * display: yellow circle
     * at location coords
     */
    display() {
        noStroke();
        fill("yellow");
        ellipse(this.x, this.y, 40);
    }

    /**
     * move: set location coords
     * to mouse coords
     */
    move() {
        this.x = mouseX;
        this.y = mouseY;
    }
}


/** Outline.js ********
 * WM Harris, 4/15/26
 * IGME-101: 13-2challenge arrayIX
 * class Outline:
 */
class Outline {
    /**
     * constructor: randomize values
     * for location coords, diameter,
     * & color
     */
    constructor() {
        //random location
        this.x = random(30, width - 30);
        this.y = random(30, height - 30);
        //random size
        this.diam = random(14, 40);
        //random blue-green color
        this.color = color(60, random(120, 255),
            random(120, 255));
    }

    /**
     * display: draw outline circle in its
     * color, location, and diameter. Also
     * put its diameter text at its location
     */
    display() {
        //draw the outline
        noFill();
        stroke(this.color);
        ellipse(this.x, this.y, this.diam);

        //show its diameter text
        fill(120, 100, 0);
        text(round(this.diam, 1),
            this.x, this.y);
    }

    /**
     * grow: slightly increase .diam
     */
    grow() {
        this.diam += .2;
    }

    /**
     * isWithin: return whether target
     * point is within outline radius
     * @param {number} x target coord
     * @param {number} y target coord
     * @returns {boolean} true if within
     */
    isWithin(x, y) {
        return dist(this.x, this.y,
            x, y) <= this.diam / 2;
    }
}/**
 * WM Harris, 4/15/26
 * IGME-101: 13-2 demo obj references &
 *       arrays of objects
 * slide 2 & 3: clean up of pick up/catch
 *    methods so 2 cats can operate
 * slide 5: add Nettie cat, amd movingCat to
 *       track which cat is the moving one
 */

"use strict"; //catch some common coding errors

/* Global variables */
//will store Fish instances
const fishies = [];

//will store Cat instance
let celie;
let nettie;

//will reference a Cat instance
let movingCat; //TO DO!!

/**
 * preload: load fish image, then use
 *  for enough Fish to fill canvas width
 * in fishies array. slide 5
 */
function preload() {
   let imgFish = loadImage("media/fish.png");
   //Fill fishies with enough instances
   //to fill canvas width, 400
   //LCV: x coord of fish
   //start 4, stop before 400,
   // each turn +40 (median fish width)
   for (let x = 4; x < 400; x += 40) {
      fishies[fishies.length] =
         new Fish(x, 150, imgFish);
   }
}

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   background("beige");
   imageMode(CENTER); //default CORNER

   //Check fishies array
   console.log("fishies full?", fishies);

   //Make a Cat instance
   celie = new Cat("Celie");
   console.log("celie Cat?", celie);

   nettie = new Cat("Nettie");
   console.log("nettie Cat?", nettie);
}

/**
 * draw : display all fishies, slide 5
 */
function draw() {
   background("beige");

   //move and display Cat celie:
   celie.move();
   celie.display();

   //celie checks and maybe 
   // tries to catch a fish
   celie.checkFishes();

   //loop over whole .length of fishies
   // to display each instance:
   for (let i = 0;
      i < fishies.length; i++) {
      fishies[i].display();
   }
}

/**
 * mouseClicked: cat
 *    should drop fish
 */
function mouseClicked() {
   celie.drop();
}

/**  Cat.js **************
 * WM Harris, 4/1/26, 4/6/26, 4/8/26, 4/15
 * IGME-101: 13-2 demo obj refs w. cats
 * Cat class: .x .y, .size, 
 * isWithin(), move(), .display()
 * tryCatch() or .drop() a .fish
 * checkFishes() to hunt fishies array
 */
class Cat {
    /**
     * constructor: name from param and
     * null fish
     * also random x, y, size
     * @param {string} name 
     */
    constructor(name) {
        this.name = name;
        this.fish = null; //no fish yet!
        this.x = random(100, width - 100);
        this.y = random(100, height - 100);
        this.size = random(30, 60);
    }

    /**
     * display: place temp shape at its
     * location & size
     */
    display() {
        fill("tan");
        ellipse(this.x, this.y, this.size);
        fill(0);
        text(this.name, this.x, this.y);
    }

    /**
     * isWithin: return whether given target
     *    is within cat's radius
     * @param {number} x target coord
     * @param {number} y target coord
     * @returns {boolean} true if target within
     */
    isWithin(x, y) {
        return dist(this.x, this.y, x, y) <=
            this.size / 2;
    }

    /**
     * move: go to mouse location
     */
    move() {
        this.x = mouseX;
        this.y = mouseY;
    }

    /**
     * checkFishies: loop over global fishies array
     * and if one is inWithin() cat, catch it.
     * Cannot catch more fish if already has one.
     */
    checkFishes() {
        if (this.fish === null) {
            for (let i = 0; i < fishies.length; i++) {
                //Is current fish within cat's bounds?
                if (this.isWithin(fishies[i].x, fishies[i].y)) {
                    //TRY to catch it!
                    this.tryCatch(fishies[i]);
                }
            }
        }
    }

    /**
    * tryCatch: catch given fish
    * if don't already have one and
    * fish available
    * @param {Fish} fish 
    */
    tryCatch(fish) {
        //if don't have fish..
        if (this.fish === null) {
            //Try to get fish if available
            this.fish = fish.getPickedUp(this);

            console.log("caught?", this.fish);
        }
    }

    /**
     * drop: Let go of fish
     * If it has a fish,
     * Tell fish its dropped before
     * nulling
     */
    drop() {
        //If there is a fish,
        //notify its been dropped
        //and set to null
        if (this.fish !== null) {
            this.fish.dropped();
            this.fish = null;
            console.log("drop!");
        }
    }
}


/** Fish.js ***********
 * WM Harris, 4/6/26, 4/8/26, 4/15/26
 * IGME-101: 13-2 demo obj refs & 
 *       array of fish
 * Fish class: image displays at
 *      its .x & .y, in its .size
 *      if .holder, follow its location
 *      until .dropped()
 */
class Fish {
    /**
     * constructor: set location and
     * fish image. randomize img .size
     * and .color
     * no .holder
     * @param {number} x coord
     * @param {number} y coord
     * @param {p5.Image} imgFish 
     */
    constructor(x, y, imgFish) {
        this.x = x;
        this.y = y + random(-5, 5);
        this.size = random(30, 50);
        this.img = imgFish;
        //hopefully red-blue tints
        this.color = color(random(100, 255),
            100, random(100, 255));

        //no holder yet
        this.holder = null;
    }

    /**
     * display: if held, update
     * location coords relative
     * to holder. Then 
     * show its image at its 
     * location in its size.
     * 
     */
    display() {
        //if held, base location on
        //holder's location:
        if (this.holder != null) {
            this.x = this.holder.x;
            this.y = this.holder.y + 10;
        }

        //show image at location, size:
        tint(this.color);
        image(this.img, this.x, this.y,
            this.size, this.size * .6);
    }

    /**
     * getPickedUp: if free, accept
     * holder and return self, o.w.
     * return null
     * @param {Cat} cat 
     * @returns {null or Fish}
     */
    getPickedUp(cat) {
        if (this.holder === null) {
            this.holder = cat;
            return this; //self given
        } else { //already held
            return null;
        }
    }

    /**
     * dropped: no longer held
     *  flop away from holder
     */
    dropped() {
        if (this.holder !== null) {
            //drop away from holder:
            this.x = this.x - this.holder.size;
            this.y = this.y - this.holder.size;

            //stay somewhat inside canvas:
            this.x = constrain(this.x, 0, width);
            this.y = constrain(this.y, 0, height);

            //forget holder
            this.holder = null;
        }
    }

}/**
 * WM Harris, 4/17/26
 * IGME-101: 13-3 demo obj references &
 *       arrays of objects
 * slide 2 & 3: clean up of pick up/catch
 *    methods so 2 cats can operate
 * slide 5: add Nettie cat, amd movingCat to
 *       track which cat is the moving one
 * If type "c", switch movingCat to other cat
 */

"use strict"; //catch some common coding errors

/* Global variables */
//will store Fish instances
const fishies = [];

//will store Cat instance
let celie;
let nettie;

//will reference a Cat instance
let movingCat;

/**
 * preload: load fish image, then use
 *  for enough Fish to fill canvas width
 * in fishies array. slide 5
 */
function preload() {
   let imgFish = loadImage("media/fish.png");
   //Fill fishies with enough instances
   //to fill canvas width, 400
   //LCV: x coord of fish
   //start 4, stop before 400,
   // each turn +40 (median fish width)
   for (let x = 4; x < 400; x += 40) {
      fishies[fishies.length] =
         new Fish(x, 150, imgFish);
   }
}

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   background("beige");
   imageMode(CENTER); //default CORNER

   //Check fishies array
   console.log("fishies full?", fishies);

   //Make a Cat instance
   celie = new Cat("Celie");
   console.log("celie Cat?", celie);

   nettie = new Cat("Nettie");
   console.log("nettie Cat?", nettie);

   //Make nettie the starting movingCat:
   movingCat = nettie;
}

/**
 * draw : display all fishies, slide 5
 */
function draw() {
   background("beige");

   //move movingCat:
   movingCat.move();
   //display Cats celie & nettie:
   celie.display();
   nettie.display();

   //movingCat checks and maybe 
   // tries to catch a fish
   movingCat.checkFishes();

   //loop over whole .length of fishies
   // to display each instance:
   for (let i = 0;
      i < fishies.length; i++) {
      fishies[i].display();
   }
}

/**
 * mouseClicked: movingCat
 *    should drop fish
 */
function mouseClicked() {
   movingCat.drop();
}

/**
 * keyTyped: if c, switch movingCat
 * to be other cat
 */
function keyTyped() {
   if (key === "c") {
      if (movingCat === celie) {
         movingCat = nettie;
      } else {
         movingCat = celie;
      }
      console.log("switch to", movingCat);
   }

}

/**  Cat.js **************
 * WM Harris, 4/1/26, 4/6/26, 4/8/26, 4/15
 * IGME-101: 13-2 demo obj refs w. cats
 * Cat class: .x .y, .size, 
 * isWithin(), move(), .display()
 * tryCatch() or .drop() a .fish
 * checkFishes() to hunt fishies array
 */
class Cat {
    /**
     * constructor: name from param and
     * null fish
     * also random x, y, size
     * @param {string} name 
     */
    constructor(name) {
        this.name = name;
        this.fish = null; //no fish yet!
        this.x = random(100, width - 100);
        this.y = random(100, height - 100);
        this.size = random(30, 60);
    }

    /**
     * display: place temp shape at its
     * location & size
     */
    display() {
        fill("tan");
        ellipse(this.x, this.y, this.size);
        fill(0);
        text(this.name, this.x, this.y);
    }

    /**
     * isWithin: return whether given target
     *    is within cat's radius
     * @param {number} x target coord
     * @param {number} y target coord
     * @returns {boolean} true if target within
     */
    isWithin(x, y) {
        return dist(this.x, this.y, x, y) <=
            this.size / 2;
    }

    /**
     * move: go to mouse location
     */
    move() {
        this.x = mouseX;
        this.y = mouseY;
    }

    /**
     * checkFishies: loop over global fishies array
     * and if one is inWithin() cat, catch it.
     * Cannot catch more fish if already has one.
     */
    checkFishes() {
        if (this.fish === null) {
            for (let i = 0; i < fishies.length; i++) {
                //Is current fish within cat's bounds?
                if (this.isWithin(fishies[i].x, fishies[i].y)) {
                    //TRY to catch it!
                    this.tryCatch(fishies[i]);
                }
            }
        }
    }

    /**
    * tryCatch: catch given fish
    * if don't already have one and
    * fish available
    * @param {Fish} fish 
    */
    tryCatch(fish) {
        //if don't have fish..
        if (this.fish === null) {
            //Try to get fish if available
            this.fish = fish.getPickedUp(this);

            console.log("caught?", this.fish);
        }
    }

    /**
     * drop: Let go of fish
     * If it has a fish,
     * Tell fish its dropped before
     * nulling
     */
    drop() {
        //If there is a fish,
        //notify its been dropped
        //and set to null
        if (this.fish !== null) {
            this.fish.dropped();
            this.fish = null;
            console.log("drop!");
        }
    }
}

/** Fish.js ***********
 * WM Harris, 4/6/26, 4/8/26, 4/15/26
 * IGME-101: 13-2 demo obj refs & 
 *       array of fish
 * Fish class: image displays at
 *      its .x & .y, in its .size
 *      if .holder, follow its location
 *      until .dropped()
 */
class Fish {
    /**
     * constructor: set location and
     * fish image. randomize img .size
     * and .color
     * no .holder
     * @param {number} x coord
     * @param {number} y coord
     * @param {p5.Image} imgFish 
     */
    constructor(x, y, imgFish) {
        this.x = x;
        this.y = y + random(-5, 5);
        this.size = random(30, 50);
        this.img = imgFish;
        //hopefully red-blue tints
        this.color = color(random(100, 255),
            100, random(100, 255));

        //no holder yet
        this.holder = null;
    }

    /**
     * display: if held, update
     * location coords relative
     * to holder. Then 
     * show its image at its 
     * location in its size.
     * 
     */
    display() {
        //if held, base location on
        //holder's location:
        if (this.holder != null) {
            this.x = this.holder.x;
            this.y = this.holder.y + 10;
        }

        //show image at location, size:
        tint(this.color);
        image(this.img, this.x, this.y,
            this.size, this.size * .6);
    }

    /**
     * getPickedUp: if free, accept
     * holder and return self, o.w.
     * return null
     * @param {Cat} cat 
     * @returns {null or Fish}
     */
    getPickedUp(cat) {
        if (this.holder === null) {
            this.holder = cat;
            return this; //self given
        } else { //already held
            return null;
        }
    }

    /**
     * dropped: no longer held
     *  flop away from holder
     */
    dropped() {
        if (this.holder !== null) {
            //drop away from holder:
            this.x = this.x - this.holder.size;
            this.y = this.y - this.holder.size;

            //stay somewhat inside canvas:
            this.x = constrain(this.x, 0, width);
            this.y = constrain(this.y, 0, height);

            //forget holder
            this.holder = null;
        }
    }

}/**
 * WM Harris, 4/17/26
 * IGME-101: 13-3 demo translate
 * slide 4-8: diag lines
 * slide 9-12:  mouse-following circles
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);


}

/**
 * draw :
 */
function draw() {
   background("beige");
   drawDiags();//slide 4-8

   //Put coord system back to normal:
   resetMatrix();

   //slide 9-12
   stroke(0);
   translate(mouseX, mouseY);
   ellipse(0, 0, 8);
   //shift right 50px
   translate(50, 0);
   ellipse(0, 0, 8);
   //shift down 50px
   translate(0, 50);
   ellipse(0, 0, 8);
   //shift left 50px
   translate(-50, 0);
   ellipse(0, 0, 8);
   //Put coord system back to normal:
   resetMatrix();
}

function drawDiags() {
   strokeWeight(3);
   /**
   line(0, height + 50, width, height);
   translate(0, -5); //move origin up
   line(0, height + 50, width, height);
   translate(0, -5); //move origin up
   line(0, height + 50, width, height);
   translate(0, -5); //move origin up
   line(0, height + 50, width, height);
   */
   //slide 8
   stroke("orange");
   //iterate as i goges 0 to height+50, 5s
   for (let i = 0; i <= height + 50;
      i += 5) {
      line(0, height + 50, width, height);
      translate(0, -5); //move origin up
   }

}

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);


}

/**
 * draw :
 */
function draw() {
   background("beige");
   drawDiags();//slide 4-8

   //Put coord system back to normal:
   resetMatrix();

   //slide 9-12
   stroke(0);
   translate(mouseX, mouseY);
   ellipse(0, 0, 8);
   //shift right 50px
   translate(50, 0);
   ellipse(0, 0, 8);
   //shift down 50px
   translate(0, 50);
   ellipse(0, 0, 8);
   //shift left 50px
   translate(-50, 0);
   ellipse(0, 0, 8);
   //Put coord system back to normal:
   resetMatrix();
}

function drawDiags() {
   strokeWeight(3);
   /**
   line(0, height + 50, width, height);
   translate(0, -5); //move origin up
   line(0, height + 50, width, height);
   translate(0, -5); //move origin up
   line(0, height + 50, width, height);
   translate(0, -5); //move origin up
   line(0, height + 50, width, height);
   */
   //slide 8
   stroke("orange");
   //iterate as i goges 0 to height+50, 5s
   for (let i = 0; i <= height + 50;
      i += 5) {
      line(0, height + 50, width, height);
      translate(0, -5); //move origin up
   }

}/**
 * WM Harris, 4/20/26
 * IGME-101: 14-1 demo translate more
 * slide 4-8: diag lines
 * slide 9-12:  mouse-following circles
 * slide 13: translate challenge
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);


}

/**
 * draw :
 */
function draw() {
   background("beige");
   drawDiags();//slide 4-8

   //Put coord system back to normal:
   resetMatrix();

   //slide 9-12
   stroke(0);
   translate(mouseX, mouseY);
   ellipse(0, 0, 8);
   //shift right 50px
   translate(50, 0);
   ellipse(0, 0, 8);
   //shift down 50px
   translate(0, 50);
   ellipse(0, 0, 8);
   //shift left 50px
   translate(-50, 0);
   ellipse(0, 0, 8);
   //Put coord system back to normal:
   resetMatrix();

   //slide 13 translate challenge
   challenge13();
}

/**
 * drawDiags: translate to draw diags
 * singly, then using loop
 * slide 4-8
 */
function drawDiags() {
   strokeWeight(3);
   /**
   line(0, height + 50, width, height);
   translate(0, -5); //move origin up
   line(0, height + 50, width, height);
   translate(0, -5); //move origin up
   line(0, height + 50, width, height);
   translate(0, -5); //move origin up
   line(0, height + 50, width, height);
   */
   //slide 8
   stroke("orange");
   //iterate as i goes 0 to height+50, 5s
   for (let i = 0; i <= height + 50;
      i += 5) {
      line(0, height + 50, width, height);
      translate(0, -5); //move origin up
   }
}

/**
 * challenge13: slide 13 translate 
 */
function challenge13() {
   fill(255, 100);
   strokeWeight(.5);

   //move to the right
   translate(200, 0);
   rect(0, 0, 200);
   //move halfway left & down
   translate(-100, 100);
   rect(0, 0, 200);
   //move down full square height
   translate(0, 200);
   line(0, 0, -100, 100);

   //put coord system back to factory settings
   resetMatrix();
}/**
 * WM Harris, 4/10/26
 * IGME-101: 14-1 demo rotation, rotate
 * slide 14: trig rotation rose
 * slide 18-19 : square rotation
 * slide 20: rotate() rose
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   background("beige");
   colorMode(HSB);
   angleMode(DEGREES);

   //slide 14: trig rotation
   rainbowRoseTrig(300, 100, 80);

   //slide 16-18: square rotation
   strokeWeight(.5);
   stroke(0);
   fill(100, .4);
   rect(50, 50, 100);
   rotate(45);
   rect(50, 50, 100);

   //slide 19: more square rotation
   resetMatrix();
   rectMode(CENTER);
   //translate to canvas center
   //before rotating
   translate(width / 2, height / 2);
   rect(0, 0, 100);
   rotate(45);
   rect(0, 0, 100);

   resetMatrix();

   rainbowRose(280, 280, 100);
}

/** slide 20
 * rainbowRose: draw rainbow of 
 * lines radiating from circle center
 * @param {number} x, center coord
 * @param {number} y center coord
 * @param {number} radius, rose radius
 */
function rainbowRose(x, y, radius) {
   strokeWeight(10);

   //translate to circle center
   translate(x, y);
   //LCV line angle a
   //start 0, stop before 360,
   // each turn +10 (degrees)
   for (let a = 0; a < 360; a += 10) {
      //stroke hue based on angle a
      stroke(a, 100, 100);

      //=always= line from origin to
      //0 degrees (right)
      line(0, 0, radius, 0);
      //rotate 10deg, matching LCV
      rotate(10);
   }


   noStroke();
   resetMatrix();
}

/** slide 14
 * rainbowRoseTrig: draw rainbow of
 * lines radiating from circle center
 * @param {number} x, center coord
 * @param {number} y center coord
 * @param {number} radius, rose radius
 */
function rainbowRoseTrig(x, y, radius) {
   strokeWeight(10);
   //LCV line angle a
   //start 0, stop before 360, 
   // each turn +10 (degrees)
   for (let a = 0; a < 360; a += 10) {
      //hue based on angle a
      stroke(a, 100, 100);
      //line from center to circle edge
      //at angle a
      line(x, y, x + radius * cos(a),
         y + radius * sin(a));
   }
   noStroke();
}/**
 * WM Harris, 4/20/26
 * IGME-101: 14-1 demo scale, push/pop
 * slide 22-23: scale
 * slide 24-end: push & pop w. rotate
 *       and translate
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);


   strokeWeight(5);
   noFill();

   //slide 23: scale()
   rect(0, 0, width, height);
   //scale to half size
   scale(.5);
   rect(0, 0, width, height);
   //scale unevenly 
   scale(1.7, .7)
   rect(10, 100, width, height);
   resetMatrix();

   //slide 15
   rectMode(CENTER);
   noStroke();
   drawFlower(200, 200, 180)
}

/**
 * drawFlower : draw flower that
 * exercises push & pop
 * @param {number} x, center coord
 * @param {number} y, center coord
 * @param {number} size diameter
 */
function drawFlower(x, y, size) {
   //move origin to flower center
   translate(x, y);
   //LCV angle a of petal
   //start 0, stop before 2 * PI,
   //each turn + PI/7
   for (let a = 0; a < 2 * PI;
      a += PI / 7) {
      //prep to leave flower center
      push();
      //go "right" to petal center
      //petal
      translate(size / 2, 0);
      fill(0, 0, 100, 200);
      ellipse(0, 0, size, size / 6);
      //petal diamond
      rotate(PI / 4);
      fill("dodgerBlue");
      rect(0, 0, size / 9);
      pop();
      //anther to the "right", too
      fill("purple");
      ellipse(size / 4, 0, size / 8, 10);
      //rotate to macth LCV 
      rotate(PI / 7);
   }
}/**
 * WM Harris, 4/24/26
 * IGME-101: 14-3 demo p5.soundFile
 * slide 4: p5.SoundFile
 */

"use strict"; //catch some common coding errors

/* Global variables */
let bassSnd; //for SoundFile, slide 4


function preload() {
   bassSnd = loadSound("media/upright_studio_bassC2.wav");
}
/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   textSize(28);
}

function draw() {
   background("lavender");
   text("bass playing? " + bassSnd.isPlaying(),
      10, 100)
   text("bass looping? " + bassSnd.isLooping(),
      10, 130)
}

/**
 * mouseClicked : if bass is looping,
 * stop it. else start playing/looping
 */
function mouseClicked() {
   if (bassSnd.isLooping()) {
      bassSnd.pause();
   } else {
      //bassSnd.play();
      bassSnd.loop();
   }
}/**
 * WM Harris, 4/24/26
 * IGME-101: 14-3 demo p5.AudioIn
 * slide 5: p5.AudioIn
 * https://p5js.org/reference/p5.sound/p5.AudioIn/
 */

"use strict"; //catch some common coding errors

/* Global variables */
let mic; //for AudioIn, slide 5


/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   textSize(28);
}

function draw() {
   background("lavender");
   if (mic !== undefined) {
      let micLevel = mic.getLevel();
      let y = height - micLevel * height - 20;
      ellipse(width / 2, y, 40);
   } else {
      text("click to start mic", 10, 200);
   }
}

/**
 * mouseClicked : start mic if not 
 *    existing yet.
 */
function mouseClicked() {
   if (mic === undefined) {
      mic = new p5.AudioIn();
      mic.start();
   }
}/**
 * WM Harris, 4/24/26
 * IGME-101: 14-3 demo p5.Oscillator
 * slide 6: p5.Oscillator
 * https://p5js.org/reference/p5.sound/p5.Oscillator/
*/

"use strict"; //catch some common coding errors

/* Global variables */
let osc; //for Oscillator
let playing = false;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   textSize(28);
   osc = new p5.Oscillator("sine");
   osc.freq(240);
   osc.amp(.3); //volume
}

function draw() {
   background("lavender");
   text("playing? " + playing +
      " type: " + osc.getType(),
      10, 100);
   text("frequency " + osc.getFreq(),
      10, 130);
   //base frequency on mouseX, .1sec ramp
   osc.freq(map(mouseX, 0, width,
      50, 400), .1);
}

/**
 * mouseClicked : start or stop
 * oscillator.
 */
function mouseClicked() {
   if (!playing) {
      osc.start();
      playing = true;
   } else {
      osc.stop();
      playing = false;
   }
}

/**
 * keyTyped: change oscillator
 * type: s, q, t, w
 */
function keyTyped() {
   if (key === "s") {
      osc.setType("sine");
   } else if (key === "q") {
      osc.setType("square");
   } else if (key === "t") {
      osc.setType("triangle");
   } else if (key === "w") {
      osc.setType("sawtooth");
   }
}/**
 * WM Harris, 4/24/26
 * IGME-101: 14-3 demo p5.Part/.Phrase, 
 *    p5.Amplitide
 * slide 7: p5.Part & p5.Phrase
 * slide 8: p5.Amplitude
 */

"use strict"; //catch some common coding errors

/* Global variables */
let bassSnd; //for SoundFile, slide 4

let bassPart; //for p5.Part, sound sequence, slide 7

let ampAnalyzer; //for p5.Amplitude //slide 8

function preload() {
   bassSnd = loadSound("media/upright_studio_bassC2.wav");
}
/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   //create a Part from a Phrase
   let myPhrase = new p5.Phrase(
      "bass", beatSound,
      [1, 0, .25, 1, 0, .5]);

   //add bass phrase to part
   bassPart = new p5.Part();
   bassPart.addPhrase(myPhrase);
   bassPart.setBPM(30);

   //slide 8
   ampAnalyzer = new p5.Amplitude();

}

function draw() {
   background("lavender");
   //slide 7
   let bpm = map(mouseX, 0, width, 10, 100);
   bassPart.setBPM(bpm);
   text("BPM on click? " + bpm, 10, 100);

   //slide 8
   //show level as rect width
   rect(10, 150, 200 * ampAnalyzer.getLevel(), 30);
}

/**
 * mouseClicked : start the part
 */
function mouseClicked() {
   bassPart.start();
}

function beatSound(time, rate) {
   bassSnd.rate(rate);
   bassSnd.play(time);
/**
 * WM Harris, 4/24/26
 * IGME-101: 14-3 demo p5.Part/.Phrase, 
 *    p5.Amplitude, p5.FFT
 * slide 7: p5.Part & p5.Phrase
 * slide 8: p5.Amplitude
 * slide 9: p5.FFT
 */

"use strict"; //catch some common coding errors

/* Global variables */
let bassSnd; //for SoundFile, slide 4

let bassPart; //for p5.Part, snd sequence, slide 7

let ampAnalyzer; //for p5.Amplitude,slide 8

let fft; //for p5.FFT, slide 9

function preload() {
   bassSnd = loadSound("media/upright_studio_bassC2.wav");
}
/**
 * setup :
 */
function setup() {
   createCanvas(600, 400);
   //create a Part from a Phrase
   let myPhrase = new p5.Phrase(
      "bass", beatSound,
      [1, 0, .25, 1, 0, .5]);

   //add bass phrase to part
   bassPart = new p5.Part();
   bassPart.addPhrase(myPhrase);
   bassPart.setBPM(30);

   //slide 8
   ampAnalyzer = new p5.Amplitude();

   //slide 9
   fft = new p5.FFT();

}

function draw() {
   background("lavender");
   //slide 7
   let bpm = map(mouseX, 0, width, 10, 100);
   bassPart.setBPM(bpm);
   text("BPM on click? " + bpm, 10, 100);

   //slide 8
   //show level as rect width
   rect(10, 150, 200 * ampAnalyzer.getLevel(), 30);

   //slide 9
   let fspec = fft.analyze(); //returns array

   text("centroid? " + fft.getCentroid(), 10, 130);
   //graph frequency spectrum
   for (let i = 0; i < fspec.length; i++) {
      line(i, height, i, height - fspec[i]);
   }
}

/**
 * mouseClicked : start the part
 */
function mouseClicked() {
   bassPart.start();
}

function beatSound(time, rate) {
   bassSnd.rate(rate);
   bassSnd.play(time);
}
}