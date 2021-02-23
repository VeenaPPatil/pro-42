var hour , minute , second;
var hr , mc , sc


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
  
}

function draw() {
  background(255,255,255); 
  
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc , 0 , 60 , 0 , 360);
  mnAngle = map(mn , 0 , 60 , 0 , 360);
  hrAngle = map(hr , 0 , 60 , 0 , 360);
  
  push();
  rotate(scAngle);
  stroke("lightpink");
  strokeWeight(6);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("skyblue");
  strokeWeight(6);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("lightgreen");
  strokeWeight(6);
  line(0,0,100,0);
  pop();

 arc(50, 55, 50, 50, 0, HALF_PI);
  noFill();
  arc(50, 55, 60, 60, HALF_PI, PI);
  arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
  arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);

  translate(200,200);
  drawSprites();
}