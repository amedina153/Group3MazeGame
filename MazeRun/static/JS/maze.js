function Player(width, height, color, x, y)
{
  this.width = width;
  this.height =height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;

  this.Position = function{
    this.x += this.speedX;
    this.y += this.speedY;

  }
}


function getKeyAndMove(e)
{
  var keyCode = e.which || e.keyCode;
  switch(keyCode)
  {
    case  87 // w key moves up
      moveUp();
      break;
    case 83 //s key moves down
      moveDown()
      break;
    case 65 //a key moves left
      moveLeft()
      break;
    case 68 //d key moves right
      moveRight()
      break;
  }
}

function moveUp(){
  character.speedY -= 1;
}

function moveDown(){
  character.speedY +=1;
}

function moveRight(){
  character.speedX -=1;
}


function moveLeft(){
  character.speedX +=1;
}
