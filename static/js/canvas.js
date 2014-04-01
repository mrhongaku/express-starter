$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //

  $('#p1').click(function() {
  	context.strokeRect(40, 330, 200, 100);
  })

  $('#p2').click(function() {
  	context.strokeRect(260, 30, 100, 100);
  })

  $('#p3').click(function() {
  	context.beginPath();
  	context.arc(260, 230, 55, 0, Math.PI);
  	context.stroke();
  })

  $('#p4').click(function() {
    context.beginPath();
    context.arc(100, 100, 55, 0, 180);
    context.closePath();
    context.stroke();
  })

  $('#p5').click(function() {
    context.beginPath();
    context.moveTo(50, 150);
    context.lineTo(50, 200);
    context.closePath();
    context.stroke();
  })

  $('#p6').click(function() {
    context.strokeRect(250, 330, 200, 100, context.strokeStyle='green');
  })

  $('#p7').click(function() {
    context.beginPath();
    context.arc(300, 300, 55, 0, Math.PI*2, context.strokeStyle='red', context.fillStyle='red');
    context.closePath();
    context.fill();
  })

  $('#p8').click(function() {
    context.beginPath();
    context.strokeStyle = "blue";
    context.fillStyle = "#FFFF00";
    context.strokeRect(100, 100, 100, 100);
    context.closePath();
  })

  $('#p9').click(function() {
    for (var i = 0; i <=4; i++) {
        context.strokeRect(50*i, 100, 50, 50)
    }
  })

  $('#p10').click(function() {
    for (var i = 0; i <= 99; i++) {
        context.strokeRect(5*i, 200, 5, 5)
    }
  })

    }
  })
});
