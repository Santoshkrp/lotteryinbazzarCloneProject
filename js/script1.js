$(document).ready(function() {
	setInterval(function(){
		$('#time').load('time.php')
	}, 1000);
});


$(document).ready(function(){
    $('.box_skitter_large').skitter({label: false, numbers: false, theme: 'square'});
});


