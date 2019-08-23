
//init object globally
var character= null;
function init(){
	character=document.getElementById("image1");
	character.style.position='relative';
	character.style.left='0px';
	character.style.top='0px';
}

function getKeyAndMove(e){
	var key_code=e.which||e.keyCode;
	switch(key_code){
		case 65: //left arrow key
			moveLeft();
			break;
		case 87: //Up arrow key
			moveUp();
			break;
		case 68: //right arrow key
			moveRight();
			break;
		case 83: //down arrow key
			moveDown();
			break;
		}
}

function moveLeft(){
  character.style.left=parseInt(character.style.left)-10 +'px';
}
function moveUp(){
	character.style.top=parseInt(character.style.top)-10 +'px';
}
function moveRight(){
	character.style.left=parseInt(character.style.left)+10 +'px';
}
function moveDown(){
	character.style.top=parseInt(character.style.top)+10 +'px';
}
window.onload=init;

window.onFrame = ()=>{console.log("hi")}

var h2= document.getElementById('oof')[0]
seconds=0, minutes=0, hours=0,
t = 0;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    oof.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();
