<script type = "text/javascript">

var character = null;
function player(){
  character = document.getElementById


}


function getKeyAndMove(e){
  var keyCode = e.which || e.keyCode;
  switch(keyCode){
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
