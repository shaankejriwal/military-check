var bullet1,wall1;
var bullet2,wall2;
var bullet3,wall3;
var bullet4,wall4;
var parkingline1,parkingline2,parkingline3;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,800);
  bullet1 = createSprite(100, 100, 40, 20);
  bullet1.shapeColor = "white";
  wall1 = createSprite(1500,100,20,60);
  bullet2 = createSprite(100,300,40,20);
  bullet2.shapeColor = "white";
  wall2 = createSprite(1500,300,20,60);
  bullet3 = createSprite(100,500,40,20);
  bullet3.shapeColor = "white";
  wall3 = createSprite(1500,500,20,60);
  bullet4 = createSprite(100,750,40,20);
  bullet4.shapeColor = "white";
  wall4 = createSprite(1500,750,20,60);
  parkingline1 = createSprite(800,200,1600,5);
  parkingline1.shapeColor = "white";
  parkingline2 = createSprite(800,400,1600,5);
  parkingline2.shapeColor = "white";
  parkingline3 = createSprite(800,600,1600,5);
  parkingline3.shapeColor = "white";
  speed = random(223,321);
  weight = random(30,52);
  thickness = (22,83)

  bullet1.velocityX = 4;
  bullet2.velocityX = 4;
  bullet3.velocityX = 4;
  bullet4.velocityX = 4;
}

function draw() {
  background(0); 
  
  bulletcheck();

  drawSprites();
}

function bulletcheck(){
  if(wall1.x-bullet1.x < (bullet1.width+wall1.width)/2)
  {
    bullet1.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180)
    {
      wall1.shapeColor = color(255,0,0)
    }

    if(deformation<180 && deformation>100)
    {
      wall1.shapeColor = color(230,230,0);
    }

    if(deformation<100)
    {
      wall1.shapeColor = color(0,255,0);
    }
  }

  if(wall2.x-bullet2.x < (bullet2.width+wall2.width)/2)
  {
    bullet2.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180)
    {
      wall2.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      wall2.shapeColor = color(230,230,0);
    }

    if(deformation<100)
    {
      wall2.shapeColor = color(0,255,0);
    }
  }

  if(wall3.x-bullet3.x < (bullet3.width+wall3.width)/2)
  {
    bullet3.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180)
    {
      wall3.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      wall3.shapeColor = color(230,230,0);
    }

    if(deformation<100)
    {
      wall3.shapeColor = color(0,255,0);
    }
  }

  if(wall4.x-bullet4.x < (bullet4.width+wall4.width)/2)
  {
    bullet4.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180)
    {
      wall4.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      wall4.shapeColor = color(230,230,0);
    }

    if(deformation<100)
    {
      wall4.shapeColor = color(0,255,0);
    }
  }
}