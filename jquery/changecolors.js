$(document).ready(function () {
	var colors = ['red', 'blue', 'green', 'yellow'];
	var i = 0;
	$('.button').on('click', function () {
		i = (i+1) % colors.length;
		$('.theBack').css('background-color', colors[i]);
	});

});