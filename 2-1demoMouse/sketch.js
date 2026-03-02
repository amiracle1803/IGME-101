/**
 * Amir EL, 1/21/26
 * IGME-101: 2-1 demo mouse var IX
 * Description and interaction instructions
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   strokeWeight(7);
   background("blue");

}

/**
 * draw :
 */
function draw() {
    // // background(220);
    // point(34, 79);
    // point(78, 38);
    // line(10, 20, 60, 100);

    // rect(40, 20, 50, 70);

    // stroke("blue");
    // strokeWeight(7);

    // point(30, 100);

    noStroke();
    fill("lightGreen");
    ellipseMode("Center");
    ellipse(0, 0, 100, 150);

    Stroke();
    fill("lightGreen");
    ellipse(0, 0, 100, 150);


    stroke("blue");
    strokeweight(2);
    line(pmouseX,pmouseY,mouseX,mouseY);



    stroke(0);

    strokeWeight(7);
    line(pmouseX,pmouseY);
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

    fill(2,3,40);
    rect(10,42,42,45);

    //slide 
    colorMode(RGB);
    //White
    noStroke();
    fill(255);
    rect(100, 80, 100, 320);
    rect(300, 80, 100, 320);



    //orange w alpha (or not)
    fill( 255, 90, 0, 40);
    rect(20, 100, 160, 30);



}







