# p5.js Cheat Sheet

---

## 1. Basics — Sketch Structure

### setup() + draw() skeleton
```js
function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  // runs ~60 fps
  // background(255); // uncomment to clear each frame
}
```

### Canvas sizes
```js
createCanvas(400, 400);                    // square
createCanvas(600, 400);                    // landscape
createCanvas(windowWidth, windowHeight);   // fullscreen
```

### frameRate & background
```js
frameRate(30);        // slow to 30 fps
background(0);        // black
background(255);      // white
background(200);      // gray
background(255,0,0);  // red (RGB)
```

---

## 2. Shapes — 2D Shapes

### Basic primitives
```js
point(30, 75);
line(10, 20, 60, 100);
rect(40, 20, 50, 70);
ellipse(110, 110, 100, 100);
circle(200, 200, 50);
triangle(30,75, 58,20, 86,75);
quad(10,10, 90,10, 80,90, 20,90);
```

### Text & arc
```js
text("Hello!", 10, 30);
textSize(24);
textAlign(CENTER);

arc(100, 100, 80, 80, 0, PI);       // half circle
arc(200, 200, 80, 80, 0, TWO_PI);   // full
```

### rectMode & ellipseMode
```js
rectMode(CORNER);    // default: x,y = top-left
rectMode(CENTER);    // x,y = center

ellipseMode(CENTER); // default: x,y = center
ellipseMode(CORNER); // x,y = top-left
```

---

## 3. Style — Colors & Styling

### fill, stroke, weight
```js
fill("red");
fill(0, 144, 180);          // RGB
fill(0, 144, 180, 128);     // RGBA (128 = 50% alpha)
stroke(128, 119, 251);
strokeWeight(5);
noFill();
noStroke();
```

### HSB color mode
```js
colorMode(HSB);         // H:0-360, S:0-100, B:0-100
fill(200, 80, 90);      // nice blue
colorMode(RGB);         // switch back
```

### Color variables
```js
let c = color(255, 100, 50);
fill(c);

let r = red(c);    // extract red channel
let g = green(c);
let b = blue(c);
```

---

## 4. Interaction — Mouse & Keyboard

### System variables
```js
mouseX          // current mouse X
mouseY          // current mouse Y
pmouseX         // previous mouse X
pmouseY         // previous mouse Y
mouseIsPressed  // true while button held
keyIsPressed    // true while key held
key             // last key as string e.g. 'a'
keyCode         // e.g. ENTER, BACKSPACE, LEFT_ARROW
```

### Event handlers
```js
function mouseClicked() {
  background(random(255));
}

function mousePressed() { }
function mouseReleased() { }
function mouseDragged() { }
function mouseMoved() { }

function keyPressed() {
  console.log(key);
  if (key === ' ') { /* spacebar */ }
  if (keyCode === LEFT_ARROW) { }
}

function keyReleased() { }
function keyTyped() { }
```

### Draw with mouse
```js
function draw() {
  ellipse(mouseX, mouseY, 30, 30);
}

// smooth brush stroke
function draw() {
  line(pmouseX, pmouseY, mouseX, mouseY);
}
```

---

## 5. Logic — Conditionals

### if / else if / else
```js
if (mouseX < width / 2) {
  fill("blue");
} else if (mouseX < width * 0.75) {
  fill("green");
} else {
  fill("red");
}
```

### Logical operators
```js
// AND
if (mouseIsPressed && keyIsPressed) { }

// OR
if (mouseY < 0 || mouseY > height) { }

// NOT
if (!mouseIsPressed) { }

// Comparison: == === != !== < > <= >=
```

### Boundary / wrap check
```js
if (x > width)  { x = 0; }       // wrap right
if (x < 0)      { x = width; }   // wrap left
if (y > height) { y = 0; }
if (y < 0)      { y = height; }
```

---

## 6. Loops — Iteration

### for loop
```js
for (let x = 0; x <= width; x += 20) {
  rect(x, 100, 10, 10);
}

// nested for loop (grid)
for (let x = 0; x < width; x += 50) {
  for (let y = 0; y < height; y += 50) {
    ellipse(x, y, 20, 20);
  }
}
```

### while loop
```js
let y = 0;
while (y <= height) {
  line(0, y, width, y);
  y += 10;
}
```

### Bug legs pattern
```js
function drawBug(bodyX, bodyY) {
  rect(bodyX, bodyY, 200, 40);
  let legX = bodyX + 10;
  while (legX < bodyX + 190) {
    line(legX, bodyY, legX, bodyY + 50);
    legX += 15;
  }
}
```

---

## 7. Functions — Custom Functions

### Basic function
```js
function drawStar(x, y) {
  fill("yellow");
  ellipse(x, y, 40, 40);
}

// call it:
drawStar(200, 200);
drawStar(mouseX, mouseY);
```

### Function with parameters
```js
function drawHeart(x, y, fColor) {
  fill(fColor);
  ellipse(x - 20, y, 40);
  ellipse(x + 20, y, 40);
  triangle(x-40, y+5, x+40, y+5, x, y+60);
}
```

### Function with return value
```js
function pickColor() {
  let c = color(random(255), random(255), random(255));
  return c;
}

// usage:
fill(pickColor());

function randomRange(lo, hi) {
  return random(lo, hi);
}
```

---

## 8. OOP — Classes & Objects

### Class template
```js
class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.speedX = random(-3, 3);
    this.speedY = random(-3, 3);
  }

  display() {
    ellipse(this.x, this.y, this.size);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  bounce() {
    if (this.x < 0 || this.x > width)  this.speedX *= -1;
    if (this.y < 0 || this.y > height) this.speedY *= -1;
  }
}
```

### Creating one object
```js
let b;

function setup() {
  createCanvas(400, 400);
  b = new Ball(200, 200);
}

function draw() {
  background(255);
  b.display();
  b.move();
  b.bounce();
}
```

### Array of objects
```js
const balls = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    balls[i] = new Ball(random(width), random(height));
  }
}

function draw() {
  background(255);
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
    balls[i].bounce();
  }
}
```

---

## 9. Arrays — Data Collections

### Declaring & accessing
```js
let scores = [10, 20, 30];
console.log(scores[0]);     // 10 (zero-indexed)
console.log(scores.length); // 3

scores[1] = 99;             // update value
```

### push, pop, splice
```js
let items = [];
items.push("apple");     // add to end
items.push("banana");
let last = items.pop();  // remove from end
items.splice(0, 1);      // remove 1 item at index 0
```

### Loop through array
```js
let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  fill(colors[i]);
  rect(i * 60, 100, 50, 50);
}

// for...of shorthand:
for (let c of colors) {
  console.log(c);
}
```

### Fill array with loop
```js
let weights = [];

function setup() {
  for (let i = 0; i < 12; i++) {
    weights[i] = round(random(3, 14));
  }
  console.log(weights);
}
```

---

## 10. Transform — Coordinate Transformations

### translate, rotate, scale
```js
function draw() {
  translate(200, 200);         // move origin to center
  rotate(frameCount * 0.02);   // spin over time
  rect(-25, -25, 50, 50);      // draw centered rect
}
```

### push / pop (save state)
```js
function draw() {
  ellipse(50, 50, 30);

  push();                    // save current transform
    translate(200, 200);
    rotate(PI / 4);
    rect(-25, -25, 50, 50);
  pop();                     // restore previous transform

  // back to normal coordinates
  rect(10, 10, 20, 20);
}
```

---

## 11. Motion — Math & Movement

### lerp (smooth follow)
```js
let x = 0;
let y = 0;

function draw() {
  x = lerp(x, mouseX, 0.05); // 5% closer each frame
  y = lerp(y, mouseY, 0.05);
  ellipse(x, y, 50);
}
```

### map (remap range)
```js
// map(value, fromLow, fromHigh, toLow, toHigh)
let sz = map(mouseX, 0, width, 10, 100);
ellipse(200, 200, sz);

let angle = map(mouseY, 0, height, 0, TWO_PI);
```

### random & noise
```js
random(100);           // 0–100
random(50, 150);       // 50–150
random(["a","b","c"]); // pick from array

let n = noise(frameCount * 0.01); // smooth 0-1
let x = map(n, 0, 1, 0, width);
```

### Math helpers
```js
abs(-5);         // 5
floor(3.7);      // 3
ceil(3.2);       // 4
round(3.5);      // 4
sqrt(16);        // 4
pow(2, 8);       // 256
min(3, 7, 2);    // 2
max(3, 7, 2);    // 7
constrain(x, 0, width); // clamp x between 0 and width

sin(angle);  cos(angle);  tan(angle);
radians(180); // PI
degrees(PI);  // 180
```

---

## 12. State — Finite State Machine

### State variable pattern
```js
let state = "menu"; // "menu" | "play" | "over"

function draw() {
  background(255);
  if (state === "menu")      { drawMenu(); }
  else if (state === "play") { drawGame(); }
  else if (state === "over") { drawGameOver(); }
}

function mouseClicked() {
  if (state === "menu") state = "play";
  else if (state === "over") state = "menu";
}

function keyPressed() {
  if (key === 'w') state = "walking";
}

function keyReleased() {
  state = "standing";
}
```

---

## 13. Images

### Load & draw image
```js
let myImg;

function preload() {
  myImg = loadImage("media/robot.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  image(myImg, 10, 10);          // at x, y
  image(myImg, 10, 10, 80, 80);  // with w, h
}
```

### tint & noTint
```js
tint(255, 0, 0);           // red overlay
tint(255, 128);             // 50% transparent
tint(0, 153, 204, 126);    // color + alpha
noTint();                   // remove tint
```

---

## 14. Sound — p5.sound Library

### Load & play sound
```js
let snd;

function preload() {
  snd = loadSound("media/beat.mp3");
}

function mouseClicked() {
  snd.play();
}

// other methods:
snd.stop();
snd.loop();
snd.setVolume(0.5); // 0.0 - 1.0
```

### FFT spectrum analyzer
```js
let myFFT;

function setup() {
  myFFT = new p5.FFT();
}

function draw() {
  let spectrum = myFFT.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, -(height - h));
  }
}
```
