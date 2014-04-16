$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;
  var Circle = {x: 20, y: 20, radius: 20, xv: 5, yv: 5};
  //PUT STUFF HERE
  //run an iteration of the game
  var updateGame = function() {
    Circle.x += Circle.xv;
    if ((Circle.xv > 0 && Circle.x+Circle.radius >= canvas.width)
      || (Circle.xv < 0 && Circle.x <=0)) {
      Circle.xv = -Circle.xv;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(Circle.x, Circle.y, Circle.radius, 0, 2*Math.PI);
    context.closePath();
    context.stroke(context.strokeStyle='black');


    setTimeout(updateGame, 10);
    //PUT STUFF HERE
  };
updateGame();

});
