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