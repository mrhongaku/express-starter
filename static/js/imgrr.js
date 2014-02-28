// Problem 2 (Peekaboo) ------------------------------------------------------

$('#toggle_img').click(function() {
if ($(toggle_img).text() === 'Go Away!') {
	$(main_img).hide() ;
	$(toggle_img).text('Come Back!') ;
} else if ($(toggle_img).text() === 'Come Back!') {
	$(main_img).show() ;
	$(toggle_img).text('Go Away!') ;
}
});
// WRITE CODE HERE

// Problem 3 (Swap Em) -----------------------------------------------
// WRITE CODE HERE
$('#change_img').click(function() {
if ($(new_img_file).val() === 'giraffe.jpg') {
	$(main_img).attr('src', '/static/img/giraffe.jpg')
} if ($(new_img_file).val() === 'red_panda.jpg') {
	$(main_img).attr('src', '/static/img/red_panda.jpg')
} if ($(new_img_file).val() === 'gorilla.jpg') {
	$(main_img).attr('src', '/static/img/gorilla.jpg')
}

});
// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
	$(this).attr('width', '200px')
	alert($('.clickable').attr('src')); 
});

// Problem 5 (Imgrr) -------------------------------------------------
// WRITE CODE HERE
$('.small').click(function() {
if ($(this).attr('src') === '/static/img/giraffe.jpg') {
	$(imgrr).attr('src', '/static/img/giraffe.jpg')
} if ($(this).attr('src') === '/static/img/red_panda.jpg') {
	$(imgrr).attr('src', '/static/img/red_panda.jpg')
} if ($(this).attr('src') === '/static/img/gorilla.jpg') {
	$(imgrr).attr('src', '/static/img/gorilla.jpg')
}
});