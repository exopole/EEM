// ==============
// Fichier Client
// ==============

// On attend que le DOM soit chargé
$(document).ready(function() {
	'use strict';
	
	// Cette ligne établie la connexion "Websocket" avec le serveur. Sans elle, aucun canal de communication ne sera ouvert.
	// La fonction io() est disponible grâce à la librairie client "socket.io.js" 
	var socket = io('http://localhost:1400');
	

	// Quand le serveur enverra un nouveau message via websocket ...
	socket.on('newMessage', function(data) {
		// ... on l'ajoutera dans un <p> qu'on injectera ensuite dans la <div id="tchatbox">
		$('#tchatbox').append('<p><b>'+ data.pseudo +' :</b>'+ data.message +'</p>');
	});
	
	
	// Quand le client validera le formulaire HTML ...
	$('#tchatform').on('submit', function(event) {
		
		// Arrêt du comportement par défaut du navigateur, qui serait de recharger la page web
		event.preventDefault();
		
		// On récupère son pseudo et message ...
		var pseudo = $('input[name=pseudo]').val();
		var message = $('input[name=message]').val();
		// ... et on les envoie au serveur via websocket avec un tag 'newMessage' 
		socket.emit('newMessage', {pseudo:pseudo,message:message} );
		
		// On efface le contenu de l'input, et on lui redonne le focus
		$('input[name=message]').val("").focus();
		
	});
	
});