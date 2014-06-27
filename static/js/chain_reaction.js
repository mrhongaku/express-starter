$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  var numBalls = 10;
  var balls = [];
  var color = ['black', 'blue', 'green', 'red', 'purple'];
  var reactions = [];
  var randomcolor;
  var reacting = false;
  var numReacted = 0;
  var gameState = "menu";
  var menuText = "Click to play!";
  var num;
  var minReactions;
  var lev1 = {num: 1, minReactions: 1, numBalls: 5};
  var lev2 = {num: 2, minReactions: 2, numBalls: 10};
  var lev3 = {num: 3, minReactions: 4, numBalls: 10};
  var lev4 = {num: 4, minReactions: 5, numBalls: 10};
  var lev5 = {num: 5, minReactions: 7, numBalls: 10};
  var lev6 = {num: 6, minReactions: 10, numBalls: 15};
  var lev7 = {num: 7, minReactions: 12, numBalls: 15};
  var lev8 = {num: 8, minReactions: 14, numBalls: 15};
  var lev9 = {num: 9, minReactions: 1, numBalls: 15};
  var levels = [lev1, lev2, lev3, lev4, lev5, lev6, lev7, lev8, lev9];
  var curLevel = 0
  var levelText = "Level 1 - React 1 out of 5 balls"
  var




  $('#game_canvas').click(function(e) {
    if (gameState === "menu") {
      gameState = "playing"
      reacting = false
      numReacted = 0
      balls.length = 0
      console.log(curLevel);
      for (var i = 0; i < levels[curLevel].numBalls; i++) {
          randomcolor = color[Math.floor(Math.random()*color.length)];
          var Circle = {xCoor: canvas.width*Math.random(), 
                        yCoor: canvas.height*Math.random(), 
                        radius: 20, 
                        xv: 5*Math.random(), 
                        yv: 5*Math.random(), 
                        color: randomcolor};
          balls.push(Circle);
        }
      levelText = "Level " + levels[curLevel].num + " - React " + levels[curLevel].minReactions + " out of " + levels[curLevel].numBalls + " balls";
    } else if (gameState === "playing" && reacting === false) {
        
      reacting = true

      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;
      var new_ball = {xCoor: x, yCoor: y, radius: 1, timer: 0};
      reactions.push(new_ball);
    };
  });


  // Run an interation of the game
  var updateGame = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (gameState === "menu") {  
      context.fillStyle = 'green';
      context.font = "20px Corbel";
      context.fillText(menuText, 450, 300);
    } else if (gameState === "playing") {
      for (var i = 0; i < balls.length; i++) {
        var collided = false;
        for (var j = 0; j < reactions.length; j++) {
          var xdiff = Math.abs(balls[i].xCoor-reactions[j].xCoor);
          var ydiff = Math.abs(balls[i].yCoor-reactions[j].yCoor);
          var dist = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
          if (dist < balls[i].radius + reactions[j].radius) {
            collided = true;
          }
        }
        if (collided) {
          var reactionobject = {xCoor:balls[i].xCoor, yCoor:balls[i].yCoor, radius: 1, timer: 0}
          reactions.push(reactionobject);
          numReacted ++
          balls.splice(i, 1);
          i --;
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

      for (var i = 0; i < balls.length; i++) {
        context.beginPath();
        context.arc(balls[i].xCoor, balls[i].yCoor, balls[i].radius, 0, 2*Math.PI);
        context.closePath();
        context.stroke(context.strokeStyle = balls[i].color);
      }
      for (var i = 0; i < reactions.length; i++) {
        reactions[i].timer ++;
        if (reactions[i].timer > 50) {
          reactions[i].radius --;
        } else if (reactions[i].radius <= 30) {
          reactions[i].radius += reactions[i].radius +1;
        }
        if (reactions[i].radius == 0) {
          reactions.splice(i, 1);
          i --;
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
      context.fillStyle = 'green';
      context.font = "20px Corbel";
      context.fillText("reactions: " + numReacted, 450, 50);
      context.fillText(levelText, 50, 50);
      if (reacting === true && reactions.length == 0) {
          console.log(numReacted);
          console.log(levels[curLevel].minReactions);
          gameState = "menu";
          if (numReacted >= levels[curLevel].minReactions) {
            curLevel ++;
            menuText = "Get ready for the next level!"
          } else {
            menuText = "Click to try the level again!"
          }
          if (curLevel === levels.length) {
            curLevel = 0;
            menuText = "Congratulations! You won!"
          }
      }
    }
    requestAnimationFrame(updateGame);
  };


  // Handle a canvas click event

    // PUT STUFF HERE

  updateGame();

});
