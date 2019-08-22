
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
  character.style.left=parseInt(character.style.left)-5 +'px';
}
function moveUp(){
	character.style.top=parseInt(character.style.top)-5 +'px';
}
function moveRight(){
	character.style.left=parseInt(character.style.left)+5 +'px';
}
function moveDown(){
	character.style.top=parseInt(character.style.top)+5 +'px';
}
window.onload=init;

window.onFrame = ()=>{console.log("hi")}
