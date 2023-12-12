
// scroll smoothly
$(document).ready(function(){
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
});

// scrollspy
$('body').scrollspy({ target: '#navbar' });

// scroll to top
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});
	$('.scroll-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});

