var balloon, balloonImg;
var bg, bgImg;
var topGround, bottomGround;
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3;
var obstacleTop, obsTop1, obsTop2;
var gameOver, gameOverImg;
var restart, restartImg;
var score;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
 bgImg = loadImage("assets/bg.png");
 balloonImg = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png");
 obsBottom1 = loadImage("assets/obsBottom1.png");
 obsBottom2 = loadImage("assets/obsBottom2.png");  
 obsBottom3 = loadImage("assets/obsBottom3.png");
 obsTop1 = loadImage("assets/obsTop1.png");  
 obsTop2 = loadImage("assets/obsTop2.png");
 gameOverImg = loadImage("assets/gameOver.png");
 restartImg = loadImage("assets/restart.png");      
}

function setup(){

//background image
bg = createSprite(165, 485, 1, 1);
bg.addImage(bgImg);
bg.scale = 1.3;

//creating top and bottom grounds
bottomGround = createSprite(200, 390, 800, 20);
bottomGround.visible = false;

topGround = createSprite(200, 10, 800, 20);
topGround.visible = false;
      
//creating balloon     

balloon = createSprite(100, 200, 20, 50);
balloon.addAnimation("balloon", balloonImg);
balloon.scale = 0.2;

//


}

function draw() {
  background("black");
        
//making the hot air balloon jump
  if(keyDown("space")){
  balloon.velocityY = -6;
  }
//adding gravity
  balloon.velocityY = balloon.velocityY + 0.5;         
  spawnObstaclesTop();
  drawSprites();        
}


function spawnObstaclesTop(){
  if(World.frameCount % 60 === 0) {
  obstacleTop = createSprite(400, 50, 40, 50);
  obstacleTop.velocityX = -4;
  obstacleTop.y = Math.round(random(10,100));
  obstacleTop.scale = 0.1;

  var rand = Math.round(random(1,2));
  switch(rand){
    case 1:obstacleTop.addImage(obsTop1);
     break;
    case 2:obstacleTop.addImage(obsTop2);
     break;
      default:break;
  }
  obstacleTop.lifetime = 100;
  balloon.depth = balloon.depth+1;

  }


}
