// $(document).ready(function($) {
// 			$('.my-slider').unslider({
// 				arrows : {
// 					prev : '<a class="unslider-arrow prev fa fa-chevron-circl...',
// 					prev : '<a class="unslider-arrow prev fa fa-chevron-circl...'
// 				} 
// 				});


// });
$(document).ready(function() {
	$('.js-scrollTo').on('click', function(){
		var cible = $(this).attr('href');
		var speed = 3000;
		$('html,body').animate(
			{scrollTop : $(cible).offset().top}, speed);
		return false;
	});

	$('.shadow').hide();



// Création d'une lightbox
// 1. au clic sur les images

// 2. Un masque sur tout l'écran

// 3. l'image est zoomé
// centrée verticalement et horizontalement

// Un titre s'affiche
// il contient la valeur de alt 

// 4. Un bouton "fermer"
	
	var lightbox = function(){
		console.log("coucou");
		$('body').append('<div id="lightbox" class="shadow">'
								+ '<img src="Image/1bouteille.jpg" class="picture" alt="Image test"/>'
						+'</div>'
		);


		var $picture = $('.picture');
		var pictureWidth = $picture.width();
		var modifiedPictureWidth = -(pictureWidth / 2);
		var pictureHeight = $picture.height();
		var modifiedPictureHeigth = -(pictureHeight/2);

		var legend = $picture.attr('alt');

		$picture.css({
			'max-Height': $(window).innerHeight()
		});

		console.log(legend);
	}

	$(".img").on('click', lightbox);
});