var circleTest;
var Circle = document.getElementById("myCanvas");
var cir = Circle.getContext("2d");
cir.beginPath();
cir.arc(100,75,50,0,2*Math.PI);
cir.stroke();

var testRec
var square = document.getElementById("myCanvas");
var sqr = square.getcontext("2d");
sqr.beginPath();
sqr.arc(100,75,100);
sqr.stroke();

function drawBasic(){
  circleTest = circle(100, 100, 20)
}

function drawRec(){
  testRec = Rectangle(100,100,200,500)
}
