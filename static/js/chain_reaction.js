$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  var numBalls = 1;
  var balls = [];
  var color = ['black', 'blue', 'pink', 'green', 'orange'];
  for (var i = 0; i < numBalls; i++) {

    var Circle = {xCoor: canvas.width*Math.random(), yCoor: canvas.height*Math.random(), radius: 50*Math.random(), xv: 5*Math.random(), yv: 5*Math.random()};
    balls.push(Circle);
  };

  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    var randomcolor = color[Math.floor(Math.random()*color.length)];
    var new_ball = {xCoor: x, yCoor: y, radius: 20 * Math.random(), xv: 20 * Math.random(), yv: 20 * Math.random()};
    balls.push(new_ball);
    });

  // Run an interation of the game
  var updateGame = function() {
    for (var i = 0; i < balls.length; i++) {
        balls[i].xCoor += balls[i].xv;
          if ((balls[i].xv > 0 && balls[i].xCoor+balls[i].radius >= canvas.width)
          || (balls[i].xv < 0 && balls[i].xCoor <=0)) {
          balls[i].xv = -balls[i].xv;
          }
        }
      context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < balls.length; i++) {
      context.beginPath();
      context.arc(balls[i].xCoor, balls[i].yCoor, balls[i].radius, 0, 2*Math.PI);
      context.closePath();
      context.stroke(context.strokeStyle = randomcolor);
    }

    requestAnimationFrame(updateGame);
  };

  // Handle a canvas click event

    // PUT STUFF HERE

  updateGame();

});
