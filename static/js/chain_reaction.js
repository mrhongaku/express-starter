$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  var numBalls = 1;
  var balls = [];
  var color = ['black', 'blue', 'pink', 'green', 'orange', 'red', 'purple', 'yellow'];
  var reactions = [];
  var randomcolor;

  for (var i = 0; i < numBalls; i++) {
    randomcolor = color[Math.floor(Math.random()*color.length)];
    var Circle = {xCoor: canvas.width*Math.random(), yCoor: canvas.height*Math.random(), radius: 50*Math.random(), xv: 5*Math.random(), yv: 5*Math.random(), color: randomcolor};
    balls.push(Circle);
  };


  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    var new_ball = {xCoor: x, yCoor: y, radius: 1}
    reactions.push(new_ball);
    });



  // Run an interation of the game
  var updateGame = function() {
    for (var i = 0; i < balls.length; i++) {
      for (var j = i+1; j < reactions.length; j++) {
        var ball1 = balls[i];
        var ball2 = reactions[j];
        var xdiff = Math.abs(ball1.xCoor-ball2.xCoor);
        var ydiff = Math.abs(ball1.yCoor-ball2.yCoor);
        var dist = Math.sqrt(xdiff*xdiff + ydiff* ydiff);
        alert(xdiff + ',' + ydiff + ',' + dist);

        if(dist <= ball1.radius + ball2.radius) {
          alert('BOOM');
        }
 
      }
    }
    for (var i = 0; i < balls.length; i++) {
        balls[i].xCoor += balls[i].xv;
          if ((balls[i].xv > 0 && balls[i].xCoor+balls[i].radius >= canvas.width)
          || (balls[i].xv < 0 && balls[i].xCoor <=0)) {
          balls[i].xv = -balls[i].xv;
          }
        balls[i].yCoor += balls[i].yv;
        if ((balls[i].yv > 0 && balls[i].yCoor+balls[i].radius >= canvas.height)
        || (balls[i].yv < 0 && balls[i].yCoor <=0)) {
          balls[i].yv = -balls[i].yv;
        }
      };
      context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < balls.length; i++) {
      context.beginPath();
      context.arc(balls[i].xCoor, balls[i].yCoor, balls[i].radius, 0, 2*Math.PI);
      context.closePath();
      context.stroke(context.strokeStyle = balls[i].color);
    }
    for (var i = 0; i < reactions.length; i++) {
      if (reactions[i].radius <= 30) {
      reactions[i].radius += reactions[i].radius+1 
      }
    }

    for (var i = 0; i < reactions.length; i++) {
      context.beginPath();
      context.arc(reactions[i].xCoor, reactions[i].yCoor, reactions[i].radius, 0, 2*Math.PI);
      context.closePath();
      context.fillStyle = 'red';
      context.fill();
      context.stroke(context.strokeStyle = 'red');
    }


    requestAnimationFrame(updateGame);
  };


  // Handle a canvas click event

    // PUT STUFF HERE

  updateGame();

});
