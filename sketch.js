var balls = [];
var hoops = [];



function setup() {
  createCanvas(800, 600);
  hoops.push(new Hoop());
  
}

function mousePressed() {
  var b = new Ball(mouseX, mouseY);
  balls.push(b);
}

function draw() {
  background(0);
  for (var j = 0; j < hoops.length; j++){
    hoops[j].show();
     if (hoops[j] <= 1){
       hoops.push(new Hoop());
    }
   
  }
  for (var i = 0; i < balls.length; i++){
    balls[i].display();
    balls[i].move();
    balls[i].bounce();
    if(balls[i].isDone()){
      balls.splice(i, 1);
    }
  }
}
  
function Hoop(){
  this.x = random(0, width);
  this.y = random(0, height);
  
  this.show = function() {
    stroke(255);
    noFill();
    ellipse(this.x, this.y, 48, 48);
  }
  
}

function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.upspeed = 3;
  this.fade = 255;
  
  this.display = function() {
    fill(255, this.fade);
    ellipse(this.x, this.y, 20, 20);
  }
  
  this.isDone = function() {
    if (this.fade < 0){
      return true;
    } else {
      return false;
    }
  } 
  
  this.move = function() {
    this.y = this.y + this.upspeed;
    this.fade = this.fade - 1;
  }
  
  this.bounce = function() {
    if(this.y > height || this.y < 0) {
      this.upspeed = this.upspeed * -1;
    }
  }
}
