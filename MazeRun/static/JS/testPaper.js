let circleX = 75;
let circleY = 75;
let circleradius = 20;
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
context.beginPath();
context.arc(circleX, circleY, circleradius,0,2*Math.PI);
context.stroke();


context.rect(20,20,700,300);
context.stroke();


context.beginPath();
context.moveTo(200,100);
context.lineTo(200, 300);
context.stroke();



function Key(e){
	var key_code=e.which||e.keyCode;
  console.log(key_code)
	switch(key_code){
		case 65: //left arrow ke
      circleX-=10;
      colCheck()
      //context.clearRect(0, 0, canvas.width, canvas.height);
      rendCircle();
      rendMaze();
			break;
		case 87: //Up arrow key
			circleY-=10;
      colCheck()
      //context.clearRect(0, 0, canvas.width, canvas.height);
      rendCircle();
      rendMaze();
			break;
		case 68: //right arrow key
			circleX+= 10;
      colCheck()
      //context.clearRect(0, 0, canvas.width, canvas.height);
      rendCircle();
      rendMaze();
			break;
		case 83: //down arrow key
			circleY +=10;
      colCheck()
      //context.clearRect(0, 0, canvas.width, canvas.height);
      rendCircle();
      rendMaze();
			break;
		}
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.stroke();
}

function rendCircle() {
  context.beginPath();
  context.arc(circleX, circleY, circleradius,0,2*Math.PI);
  //context.stroke();
}

function rendMaze() {
  context.rect(20,20,700,300);
  //context.stroke();

  context.moveTo(200,100);
  context.lineTo(200, 300);
  //context.stroke();
}


function colCheck(circleX, circleY, rad, dir)
{
    if(dir == "left")
      {
        rad = rad * -1
      }
    if(dir == "right")
      {
        rad = rad
      }
    if(dir == "up")
      {
        rad = rad * -1
      }
    if(dir == "down")
      {
        rad == rad 
      }
    circleX+rad<20 && circleX+rad>720 && circleY+rad<20 && circleY+rad>720;
}



window.addEventListener("keydown", Key)
