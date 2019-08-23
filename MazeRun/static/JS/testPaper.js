let circleX = 40;
let circleY = 40;
let circleradius = 20;
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
context.beginPath();
context.arc(circleX, circleY, circleradius,0,2*Math.PI);
context.stroke();


context.rect(20,20,700,300);
context.stroke();


context.beginPath();
context.moveTo(60,20);
context.lineTo(60, 280);
context.stroke();



function Key(e){
	var key_code=e.which||e.keyCode;
  console.log(key_code)
	switch(key_code){
		case 65: //left arrow ke
			if (! colCheck(circleX,circleY, circleradius, "left")) {
				circleX-=10
			}

      //context.clearRect(0, 0, canvas.width, canvas.height);
      rendCircle();
      rendMaze();
			break;
		case 87: //Up arrow key
			if (! colCheck(circleX,circleY, circleradius, "up")) {
				circleY-=10
			}
      //context.clearRect(0, 0, canvas.width, canvas.height);
      rendCircle();
      rendMaze();
			break;
		case 68: //right arrow key
			if (! colCheck(circleX,circleY, circleradius, "")) {
				circleX+=10
			}

      //context.clearRect(0, 0, canvas.width, canvas.height);
      rendCircle();
      rendMaze();
			break;
		case 83: //down arrow key
			if (! colCheck(circleX,circleY, circleradius, "")) {
				circleY+=10
			}

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

  context.moveTo(60,20);
  context.lineTo(60, 280);
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
      console.log(cirX+rad<20 || cirX+rad>720 || cirY+rad<20 || cirY+rad>320)
    return cirX+rad<20 || cirX+rad>720 || cirY+rad<20 || cirY+rad>320;
}



window.addEventListener("keydown", Key)
