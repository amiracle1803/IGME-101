
/**
 * Amir EL, 3/2/26
 * IGME-101: Project 1: Tributes
 * Animals: Rangifer tarandus groenlandicus & Castor fiber birulai
 * Description and interaction instructions
 */
 
"use strict"; //catch some common coding errors

/* Global variables */
let currentScene = 0; // 0 = caribou, 1 = beaver

// Button
let btnX = 20;
let btnY = 20;
let btnW = 230;
let btnH = 40;

// Caribou scene state
let herdOffset = 0;
let stormTint = 0;

// Beaver scene state
let beaverX = 200;
let beaverY = 360;
let riverOffset = 0;
let buildProgress = 0; // how many logs to show

/**
 * setup :
 */
function setup() {
  createCanvas(800, 600);
  textFont("sans-serif");
}

/**
 * draw :
 */
function draw() {
  if (currentScene === 0) {
    drawCaribouScene();
  } else {
    drawBeaverScene();
  }

  drawSceneButton();
  drawSceneLabels();
}

/*** interface ***/

function drawSceneButton() {
  stroke(0);
  strokeWeight(2);
  fill(isMouseOverButton() ? 230 : 200);
  rect(btnX, btnY, btnW, btnH, 10);

  noStroke();
  fill(0);
  textSize(14);
  textAlign(CENTER, CENTER);
  let label = (currentScene === 0)
    ? "Switch to Mongolian beaver"
    : "Switch to barren-ground caribou";
  text(label, btnX, btnY, btnW, btnH);
}

function drawSceneLabels() {
  fill(0);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(12);

if (currentScene === 0) {
  text("Barren-ground caribou (Rangifer tarandus groenlandicus)", 20, 80);
  text("Lives on Arctic and sub-Arctic tundra with low shrubs and lichens.", 20, 100);
  text("Found across northern Canada and Greenland in migrating herds.", 20, 120);
  text("Move your mouse sideways to slide the caribou along the slope.", 20, 140);
  text("Hold the mouse button to kick up a stronger tundra storm.", 20, 160);
} else {
  text("Mongolian / Sino-Mongolian beaver (Castor fiber birulai)", 20, 80);
  text("Lives along narrow desert and steppe rivers lined with willows and poplars.", 20, 100);
  text("Found on the Bulgan River in Mongolia and the Ulungur River system in China.", 20, 120);
  text("Guide the beaver along the river with your mouse.", 20, 140);
  text("Hold the mouse button to make it build faster.", 20, 160);
}

}

function mousePressed() {
  if (isMouseOverButton()) {
    currentScene = 1 - currentScene;
  }
}

function isMouseOverButton() {
  return mouseX > btnX && mouseX < btnX + btnW &&
         mouseY > btnY && mouseY < btnY + btnH;
}

/*********** Scene 1: Caribou raindeer kinda ************/

function drawCaribouScene() {
  // Simple sky gradient with slight color motion
  let skyTop = color(150, 190, 230);
  let skyBottom = color(70, 110, 170);
  for (let y = 0; y < height; y++) {
    let t = y / height;
    stroke(lerpColor(skyTop, skyBottom, t));
    line(0, y, width, y);
  }

  noStroke();

  // Distant tundra hills 
  fill(170, 190, 200);
  ellipse(200, 350, 400, 150);
  ellipse(600, 380, 500, 180);

  // Foreground tundra ground
  fill(210, 215, 210);
  rect(0, height - 180, width, 180);

  // Low shrubs 
  drawTundraPlants();

  // Automatic animation: herd sliding across screen
  herdOffset -= 0.7;
  if (herdOffset < -width) herdOffset = 0;

  drawCaribouHerd(herdOffset);

  // Lead caribou that depends on mouseX
  drawLeadCaribou();

  // Continuous interaction: while pressed, tint & "storm"
  if (mouseIsPressed && !isMouseOverButton()) {
    stormTint = min(stormTint + 5, 120);
  } else {
    stormTint = max(stormTint - 3, 0);
  }
  if (stormTint > 0) {
    fill(120, 130, 160, stormTint);
    rect(0, 0, width, height);
  }

  // should i add small snow flurries or wind streaks for extra animation
}

function drawTundraPlants() {
  fill(160, 180, 160);
  for (let i = 0; i < 25; i++) {
    let x = (i * 30 + 40) % width;
    let y = height - 160 + (i % 5) * 6;
    rect(x, y, 12, 18, 4);
  }
}

function drawCaribouHerd(offset) {
  fill(150, 120, 90);
  for (let i = 0; i < 4; i++) {
    let x = (i * 200 + offset + width) % width;
    let y = height - 210 - (i % 2) * 10;
    // very simplified distant caribou shapes
    ellipse(x, y, 40, 20);         // body
    rect(x - 15, y + 10, 6, 16);   // legs
    rect(x + 5, y + 10, 6, 16);
    ellipse(x + 20, y - 5, 18, 14); // head
  }
}

function drawLeadCaribou() {
  // Lead caribou moves up/down slope with mouseX
  let baseX = width * 0.4;
  let baseY = height - 220;
  let slopeOffset = map(mouseX, 0, width, -40, 40);
  let y = baseY + slopeOffset;

  fill(180, 140, 100);
  // Body
  rect(baseX - 60, y, 120, 40, 20);
  
  // Neck & head
  rect(baseX + 40, y - 20, 20, 30, 10);
  ellipse(baseX + 60, y - 10, 40, 30);
  
  // Legs
  rect(baseX - 40, y + 35, 12, 35, 5);
  rect(baseX - 10, y + 35, 12, 35, 5);
  rect(baseX + 20, y + 35, 12, 35, 5);
  rect(baseX + 50, y + 35, 12, 35, 5);
  
  // Antlers
  stroke(80, 50, 30);
  strokeWeight(3);
  noFill();
  beginShape();
  vertex(baseX + 55, y - 25);
  vertex(baseX + 40, y - 60);
  vertex(baseX + 30, y - 70);
  endShape();
  beginShape();
  vertex(baseX + 65, y - 25);
  vertex(baseX + 80, y - 60);
  vertex(baseX + 90, y - 72);
  endShape();
  noStroke();
}

/*********** Scene 2: Beaver ************/

function drawBeaverScene() {
  // Desert/steppe sky
  background(220, 190, 150);

  noStroke();

  // Distant hills
  fill(190, 160, 120);
  ellipse(200, 380, 380, 200);
  ellipse(600, 360, 420, 210);

  // River corridor
  riverOffset += 0.03;
  drawRiver();

  // Sandbank banks
  fill(205, 175, 135);
  rect(0, height - 150, width, 150);

  // Riparian trees/bushes near river
  drawRiparianPlants();

  // Beaver follows mouse with easing along river
  beaverX += (mouseX - beaverX) * 0.05;
  beaverY += (mouseY - beaverY) * 0.02;
  beaverY = constrain(beaverY, height - 230, height - 120);

  // Continuous interaction: while mouse pressed, increase building progress
  if (mouseIsPressed && !isMouseOverButton()) {
    buildProgress += 0.2;
  } else {
    buildProgress -= 0.1;
  }
  buildProgress = constrain(buildProgress, 0, 20);

  drawBeaver(beaverX, beaverY);
  drawDam(buildProgress);
}

function drawRiver() {
  // Simple animated stripes for water flow
  fill(70, 150, 200);
  rect(0, height - 260, width, 110);

  stroke(220, 240, 255, 180);
  strokeWeight(3);
  for (let i = 0; i < 6; i++) {
    let y = height - 250 + i * 15;
    beginShape();
    for (let x = 0; x <= width; x += 30) {
      let yy = y + 4 * sin(0.03 * x + riverOffset + i);
      vertex(x, yy);
    }
    endShape();
  }
  noStroke();
}

function drawRiparianPlants() {
  
  // Simple green verticals for willows trunks
  fill(60, 130, 80);
  for (let i = 0; i < 8; i++) {
    let x = 60 + i * 90;
    rect(x, height - 220, 12, 70, 6);
    ellipse(x + 6, height - 230, 40, 40);
  }
}

function drawBeaver(x, y) {
  
  // Body
  fill(120, 85, 60);
  ellipse(x, y, 90, 50);
  
  // Head
  ellipse(x + 40, y - 5, 35, 30);
  
  // Tail (flat paddle)
  ellipse(x - 55, y + 10, 30, 55);
  
  // Eye
  fill(0);
  ellipse(x + 46, y - 8, 5, 5);
  
  // Teeth
  fill(240);
  rect(x + 42, y + 3, 8, 10, 2);
}

function drawDam(level) {
  // Draw up to 'level' logs on river surface near beaver
  fill(140, 100, 70);
  for (let i = 0; i < level; i++) {
    let x = 350 + i * 10;
    let y = height - 210 + (i % 3) * 5;
    rect(x, y, 30, 8, 3);
  }
}


// by amir El
