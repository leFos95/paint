function setup() {
  createCanvas(600, 400);
  
  background(250, 250, 100);
}

function draw() {
  
  noStroke();
  fill(250, 200, 200, 50);
  ellipse(mouseX, mouseY, 25, 25);
  
}

function mousePressed() {
  background(250, 250, 100);
}