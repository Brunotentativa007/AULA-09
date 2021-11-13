var square;

function setup() {
  createCanvas(400,400);
  square = createSprite(200,200,15,15);
  
  


}

function draw() 
{
  background("red");

  if (keyIsDown(LEFT_ARROW)){
    square.position.x = square.position.x-2;

  }
  if (keyIsDown(RIGHT_ARROW)){
    square.position.x = square.position.x+2;

  }
  if (keyIsDown(UP_ARROW)){
    square.position.y = square.position.y-2;

  }
  if (keyIsDown(DOWN_ARROW)){
    square.position.y = square.position.y+2;

  }




  drawSprites();

}




