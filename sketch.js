var hero;
var ground;
var distance=0;
var obstacle;
var monster;
var background;
var GunBullet;
var gameState = "start";

function preload(){
  heroRunning = loadAnimation("Hero/Hero1.png","Hero/Hero2.png","Hero/Hero3.png","Hero/Hero4.png","Hero/Hero5.png","Hero/Hero6.png")
  heroStatic = loadAnimation("Hero/Hero6.png");
  heroBackward = loadAnimation("HeroBackward/HeroBackward6.png")
  groundImg = loadImage("ground.png");
  obstacleImg = loadImage("Obstacle.png");
  backgroundImg = loadImage("bg.png")
  bulletImg = loadImage("GunBullet.png");
  monsterAni = loadAnimation("Monster/Monster1.png","Monster/Monster2.png","Monster/Monster3.png","Monster/Monster4.png","Monster/Monster5.png","Monster/Monster6.png","Monster/Monster7.png","Monster/Monster8.png")
}

function setup(){
  createCanvas(1400,700)

  hero = createSprite(150,490,30,30);
  hero.addAnimation("standing",heroStatic);
  hero.scale = 0.8

}

function draw(){
  if(gameState === "start"){

  }
  else if (gameState=== "play"){
  background(backgroundImg);
  image(groundImg,0,350,5600,400);
  fill(255);
  textSize(30)
  text("Distance: " + distance,camera.position.x +500,110)


  if(keyDown("space")){
    var bullet = createBullet();
  }

  if(keyWentDown(RIGHT_ARROW)){
    hero.addAnimation("running",heroRunning);
    hero.changeAnimation("running",heroRunning);
    hero.x = hero.x +10;   
    distance ++
    if(distance >= 60 && distance < 470){
      camera.position.x += 10;
      
    }

  }

 else if(keyWentDown(LEFT_ARROW)){
    hero.addAnimation("running",heroRunning);
    hero.changeAnimation("running",heroRunning);
    hero.x = hero.x - 10;   
    distance ++
    if(distance >= 60 && distance < 470){
      camera.position.x -= 10;
      
    }
  }
  
  else{
    hero.changeAnimation("standing",heroStatic)
  }


  spawnObstacle();
  spawnMonster();
  drawSprites();
  }
}

function spawnObstacle(){
  if(frameCount % 140 === 0){
    var obstacle = createSprite(1400,520,20,20);
    obstacle.addImage(obstacleImg);
    obstacle.scale = 0.3;
  }
}


function spawnMonster(){
  if(frameCount % 140 === 0){
    var monster= createSprite(1400,520,20,20);
    monster.addAnimation("MONSTER",monsterAni);
    monster.velocityX = -(7+2*distance/650);
    monster.scale = 0.3;
  }
}

function createBullet(){
  var bullet = createSprite(hero.x,hero.y,5,10);
  bullet.velocityX = 5;
  bullet.scale=0.1
  bullet.addImage(bulletImg);
}

//if(keyDown("right")){ mario.x+=8; if(distance >= 60 && distance <= 650){ camera.position.x+=8; } distance++; mario.changeAnimation("running",marioAni); }else if(keyDown("left")){ mario.x-=8; if(distance >= 60){ camera.position.x-=8; } distance--; mario.changeAnimation("back",marioBack); }else if(keyDown("up")){ mario.velocityY = -9; mario.x+=3; if(distance >= 60){ camera.position.x+=3; } distance++; }else{ mario.changeAnimation("standing",marioStanding); }