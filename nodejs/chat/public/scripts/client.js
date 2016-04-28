$(document).ready(function(){
	'use strict';
	console.log("client");
	var socket = io('http://localhost:1337');

	socket.on("newMessage", function(data){
		console.log("socket.on");
		$('#tchatbox').append('<p>'+data.pseudo + ' : </b>' + data.message+'</p>');
	});

	$('#tchatform').on('submit', function(event){
		event.preventDefault();
		var pseudo = $('input[name=pseudo]').val();
		var message = $('input[name=message]').val();
		// ... et on les envoie au serveur via websocket avec un tag 'newMessage' 
		socket.emit('newMessage', {pseudo:pseudo,message:message} );
		
		// On efface le contenu de l'input, et on lui redonne le focus
		$('input[name=message]').val("").focus();
		
	})
})