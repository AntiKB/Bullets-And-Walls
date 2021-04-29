var Bullet;
var Wall;

var Damage;

var Speed;
var Weight;
var Thickness;
function setup() {
  createCanvas(1600,400);
  
  Bullet = createSprite(50,200,50,5);
  Bullet.shapeColor = "WHITE";
  Wall = createSprite(1200,200,Thickness,height/2);
  Wall.shapeColor = "WHITE";

  Bullet.depth = Wall.depth + 1;
}

function draw() {
  background(0,0,0);  
  
  if (keyWentDown("SPACE")){
    Speed = random(223,321);
    Thickness = random(22,83);

    Wall.width = Thickness;
    Bullet.x = 50;
    Bullet.velocityX = Speed;
  }
  
  if(BulletCollided(Bullet,Wall)){
    Bullet.velocityX = 0;
    Weight = random(30,52);
    Damage = (0.5*Weight*Speed*Speed)/(Thickness*Thickness*Thickness);
    if(Damage >= 10){
      Wall.shapeColor = color(255,0,0);
    }
    if(Damage < 10){
      Wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}

function BulletCollided(){
  var BulletCollideEdge = Bullet.x + Bullet.width;
  var WallCollideEdge = Wall.x;
  if(BulletCollideEdge >= WallCollideEdge){
    return true;
  }
  return false;
}