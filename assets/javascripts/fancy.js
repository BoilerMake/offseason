var xPos = 0;
var yPos = 0;
var xOffset = 0;
var yOffset = 0;
var degreeOfMovement = 100;

var updateLogo = function() {
  $('#main').css({
    // transform: "translateY(-50%) rotateX("+yOffset/0+"deg) rotateY("+xOffset/-0+"deg)"
  });
  $('#blur1').css({
    left: xOffset/(degreeOfMovement/2)+'px',
    top: yOffset/(degreeOfMovement/2)+'px'
  });
  $('#blur2').css({
    left: xOffset/(degreeOfMovement/3)+'px',
    top: yOffset/(degreeOfMovement/3)+'px'
  });
  $('#blur3').css({
    left: xOffset/(degreeOfMovement/4)+'px',
    top: yOffset/(degreeOfMovement/4)+'px'
  });
}

var mouseListener = function() {
  var wWidth = $(document).width();
  var wHeight = $(document).height();

  $(document).mousemove(function(event){
    xPos = event.pageX;
    yPos = event.pageY;
    xOffset = wWidth / 2 - xPos;
    yOffset = wHeight / 2 - yPos;
    updateLogo();
  });
}

$(document).ready(function() {
  mouseListener();
});
