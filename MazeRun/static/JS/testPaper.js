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
      colCheck(circleX,circleY, circleradius, "left")
      //context.clearRect(0, 0, canvas.width, canvas.height);
      rendCircle();
      rendMaze();
			break;
		case 87: //Up arrow key
			circleY-=10;
      colCheck(circleX,circleY, circleradius, "up")
      //context.clearRect(0, 0, canvas.width, canvas.height);
      rendCircle();
      rendMaze();
			break;
		case 68: //right arrow key
			circleX+= 10;
      colCheck(circleX,circleY, circleradius, "")
      //context.clearRect(0, 0, canvas.width, canvas.height);
      rendCircle();
      rendMaze();
			break;
		case 83: //down arrow key
			circleY +=10;
      colCheck(circleX,circleY, circleradius, "")
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


function colCheck(cirX, cirY, rad, dir)
{
    if(dir == "left")
      {
        rad = rad * -1
      }
    if(dir == "up")
      {
        rad = rad * -1
      }
      console.log(cirX+rad<20 && cirX+rad>720 && cirY+rad<20 && cirY+rad>720)
    return cirX+rad<20 && cirX+rad>720 && cirY+rad<20 && cirY+rad>720;
}



window.addEventListener("keydown", Key)
