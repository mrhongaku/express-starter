$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.strokeRect(x, y, sideLen, sideLen, context.strokeStyle=color);
    // Write square drawing code here
    // Delete the alerts when done
  };

  var drawCircle = function(x, y, radius, color) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.closePath();
    context.stroke(context.strokeStyle=color);
    // Write circle drawing code here
    // Delete the alert when done
  };

  // Write drawTriplet function here

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //

  $('#p5').click(function() {
    drawCircle(50, 50, 25, 'blue');
    drawCircle(75, 50, 25, 'green');
    drawCircle(25, 50, 25, 'green');
    drawCircle(50, 25, 25, 'green');
    drawCircle(50, 75, 25, 'green');
    drawSquare(25, 25, 50, 'red');
  });
});
