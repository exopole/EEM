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
		var src = $(this).find('img').attr('src');
		var alt = $(this).find('img').attr('alt');

		console.log("coucou");
		$('body').append('<div id="lightbox" class="shadow">'
								+ '<div class="lightbox-container">'
								+ '<img src='+ src + ' 	class="picture" alt="Image test"/>'
								+ '<div id= "close" class= "fa fa-times-circle fa-3x"</div>'
								+ '</div>'
						+'</div>'

		);
		console.log(src + " ////// " + alt)

		var $picture = $('.picture');
		var pictureWidth = $picture.width();
		var modifiedPictureWidth = -(pictureWidth / 2);
		var pictureHeight = $picture.height();
		var modifiedPictureHeigth = -(pictureHeight/2);



		$picture.css({
			'max-Height': $(window).innerHeight()
		});

		$picture.after("<p>" + alt + "</p>");
		$picture.next('p').addClass('lightbox-legend');

		var close = function(){
			$("#lightbox").remove();
		}
		$("#close,.shadow").on('click', close)
	}

	$(".img").on('click', lightbox);