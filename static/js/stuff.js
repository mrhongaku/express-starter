alert('Some Stuff'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  alert("Hello World!") // WRITE CODE HERE
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
	$(houdini_text).hide();
});

$('#reappear').click(function() {
  	$(houdini_text).show();
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
// WRITE CODE HERE
$('#pink').click(function() {
	$(tickled_text).css('color', 'pink')
});

$('#depink').click(function() {
	$(tickled_text).css('color', 'black')
});

// Problem 4 (Greet Me) -----------------------------------------------------
// WRITE CODE HERE
$('#greet').click(function() {
	alert('Hello ' + $('#my_name').val() + '!')
});