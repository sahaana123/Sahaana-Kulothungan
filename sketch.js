
function setup() {
createCanvas(400,400);
var Sprite=createSprite(200,200,70,70)
}
function draw() 
{
background("yellow");

if(keyIsDown(RIGHT_ARROW)){
  background("blue");
}
if(keyIsDown(LEFT_ARROW)){
  background("pink");
}
if(keyIsDown(DOWN_ARROW)){
  background("green");
}
if(keyIsDown(UP_ARROW)){
  background("orange");
}
drawSprites()
}





