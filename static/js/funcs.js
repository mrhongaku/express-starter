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
  var drawTriplet = function(x, y, color) {
    drawCircle(x+25, y-75, 25, color);
    drawCircle(x, y-50, 25, color);
    drawCircle(x+50, y-50, 25, color);
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

  $('#p6').click(function() {
    drawTriplet(200, 200, 'green');
  });

  $('#p7').click(function() {
    drawTriplet(300, 300, 'blue');
  });

  $('#p8').click(function() {
    drawTriplet(200, 150, 'blue');
    drawTriplet(300, 400, 'green');
    drawTriplet(100, 200, 'black');
    drawTriplet(50, 275, 'red');
  });
});
