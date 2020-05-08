var Bullet,Wall,thicknes;
var speed,weight,damage;

function setup() {
  createCanvas(1600,400);

  thicknes = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  Bullet = createSprite(50,200,100,20);
  Bullet.shapeColor = "white"
  Bullet.velocityX = speed;
  
  Wall = createSprite(1500,200,thicknes,height/2);  
  Wall.shapeColor = "blue";
}

function draw() {
  background(0); 

  damage = 0.5 * weight * speed * speed / (thicknes * thicknes * thicknes);
  console.log(damage);

if(hasCollided(Bullet,Wall)){
  Bullet.velocityX = 0;
  
  if(damage > 10){
   Wall.shapeColor = "red";
  }

  if(damage < 10){
  Wall.shapeColor = "green";
  Bullet.x = Wall.x-30;
  }

}

  drawSprites();
}
