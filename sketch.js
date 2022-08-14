var fireballImg, fireball, fireballsGroup;
var robotImg, robot;
var spaceImg, space;
var robotvillainImg, robotvillain;
var invisibleBlockGroup, invisibleBlock;
var spookysound;

var rightBoundary;
var leftBoundary;
var gameState = "play";

function preload(){
    fireballImg = loadImage("Fireball.png");
    robotImg = loadImage("robot_running.png");
    spaceImg = loadImage("Green.jpg");
    spookysound =loadSound("makai-symphony-dragon-slayer.mp3");
    robotvillainImg= loadImage("Robot_spaceship.png");
    
  }
  
  function setup(){
    createCanvas(600,600);
    spookysound.loop();
    space = createSprite(300,300);
    space.addImage("space",spaceImg);
    space.velocityY = 1;
  
    fireballsGroup = new Group();
    //fireball.scale= 0.3;
    invisibleBlockGroup = new Group();
    
    robot = createSprite(310,515,100,100);
    robot.scale = 0.3;
    robot.addImage("robot", robotImg);

    //robot.setCollider("rectangle",0,0,robot.width,robot.height);
   // robot.debug = false;
  
    
  
    

     
    }

    function draw(){
      background(0);
      if (gameState === "play") {
       if(keyDown("left_arrow")){
            robot.x = robot.x - 1;
          }
          
          if(keyDown("right_arrow")){
            robot.x = robot.x + 1;
          }
          
          if(keyDown("space")){
            robot.velocityY = 0;
          }
    
          if(space.y > 300){
           space.y =60
          robot.velocityY= 0;
        }  
        spawnFireballs();

        if(fireballsGroup.isTouching(robot)){
          robot.velocityY = 0;
          robot.destroy();
          gameState = "end"
        }
        if(invisibleBlockGroup.isTouching(robot) || robot.y > 600){
         robot.destroy();
          gameState = "end"
        }
       drawSprites()
    }
    
     
      
      
      if (gameState === "end"){
        stroke("yellow");
        fill("yellow");
        textSize(30);
        text("Game Over", 230,250)
      }
    
    }

    function spawnFireballs() {
      //write code here to spawn the fireballs in the space
      if (frameCount % 240 === 0) {
        var fireball = createSprite(200, 30);
        fireball.scale=0.2;
       
        var invisibleBlock = createSprite(200,15);
        invisibleBlock.width = fireball.width;
        invisibleBlock.height = 2;
        invisibleBlock.scale=0.2;

        var robotvillain = createSprite(200,65);
        robotvillain.scale=0.3;

        fireball.x = Math.round(random(120,400));
        
        invisibleBlock.x = fireball.x;
        robotvillain.x = fireball.x;
        
        
        fireball.addImage(fireballImg);
      
        invisibleBlock.addImage(fireballImg);
        robotvillain.addImage(robotvillainImg);

        fireball.velocityY = 1;
        invisibleBlock.velocityY = 1;
        
      //fireballsGroup.velocityY=fireballsGroup.velocityY + 2
      //invisibleBlock.velocityY=invisibleBlock.velocityY + 3
        
        //assign lifetime to the variable
        fireball.lifetime = 800
        robotvillain.lifetime = 200;
        invisibleBlock.lifetime = 800;
    
        
        //add each fireball to the group
        fireballsGroup.add(fireball);
        fireball.debug = true;
        invisibleBlockGroup.add(invisibleBlock);
        invisibleBlock.debug = true;

      }
    }
   
  
  



