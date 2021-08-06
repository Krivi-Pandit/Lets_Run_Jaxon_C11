var pathImage, path;
var powerImage, power;
var runnerImage, runner;
var bombImage, bomb;
var coinImage, coin;
var energyDrinkImage, energyDrink;

var invisibleWall1;
var invisibleWall2;

function preload(){
  pathImage = loadImage("path.png");
  powerImage = loadImage("power.png");
  runnerImage = loadAnimation("Runner-1.png", "Runner-2.png");
  bombImage = loadImage("bomb.png");
  coinImage = loadImage("coin.png");
  energyDrinkImage = loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200)
  path.addImage("path", pathImage);
  path.velocityY = 4;
  path.scale=1.2;

  

  runner = createSprite(350,325,20,20);
  runner.addAnimation("run", runnerImage);
  runner.scale = 0.1;

  invisibleWall1 = createSprite(0,200,50,400)
  invisibleWall1.visible = false;
  invisibleWall2 = createSprite(400,200,50,400)
  invisibleWall2.visible = false;


}

function draw() {
  background(0);
  
  if(path.y > 400){
    path.y = height/4;
  }

  runner.x = World.mouseX;
  
  runner.collide(invisibleWall1)
  runner.collide(invisibleWall2)
  
  drawSprites();
}
