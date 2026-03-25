/**
 * Amir EL, 3/21/26
 * IGME-101: Exercise 9-3:  lasses, object, and methods
 * using functions to do stuff
 * Description and interaction instructions
 */

"use strict"; //catch some common coding errors

/**Assignment details
  *Design and create 3 classes, then place a pair of instances from each class on the canvas - 6 instances altogether.
  *Duplicate the template to create a new folder in nmProgram names"9-3Classes_Name" for this Work.

/*Planning Stage

construct 3 classes
give each class 2 instances
each class must have at least 3 properties.

(Properties class may have: x coordinate, y coordinate, size, and color(or color aspect, e.g., red,blue, transparency, or hue).

each class should be able to display 2-3 grouoed shape.
 
each class constructor should accept parameters to help run at least one of it property values.
make sure each class is definition is in it s own file(classname.js) linked in index.html

dont forget to provide a header comment for every class file and each medthos within it  and comment about the constructor parameter like data type and purpose.
**/

/* for sketch .js 
declare and comment 6 global variables -they will later store a class instance 
2 of each class.

for setup fuction
 Make a good size canvas
 hanfle any mode, stroke, or text setting you will need.
 assign each global variable to the new instance of a class, setting appropriae
  argument to each class constructor .
  There should be  2 not - indentical  instance of each class 
  print the  each variable to the console so you can check that all properties were assign properlu.
  sample console result.


for draw function
  set a background
  call the display method oof  each instance variable.
  make any needed repair and be sure every instance displays properly and is distant from each other.


appwar
what 3 classed type do i want? lets try pac man 
pac man - circle with triangle cut out
ghost = half circle, square, multiple have circle connnected horizenly to the endpoint of the rect
Candy is like a super small white circle.
 




**/

/* Global variables */

/**
 * setup :
 */
function setup() {
  createCanvas(600, 400);

// for setup fuction
//  Make a good size canvas --
//  handle any mode, stroke, or text setting you will need.
//  assign each global variable to the new instance of a class, setting appropriae
//   argument to each class constructor .
//   There should be  2 not - indentical  instance of each class 
//   print the  each variable to the console so you can check that all properties were assign properlu.
//   sample console result.


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
}

class PacMan {
  constructor(){
    this.pacHeight = 15;
    this.propertyname = someValue;
    this.color = "Yellow";
    this.propertyname = someValue;


  }
}
}

/**
 * draw :
 */
function draw() {

}

// by : amir el