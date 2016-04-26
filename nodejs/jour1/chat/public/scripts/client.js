$(document).ready(function(){
	'use strict';
	var socket = io("http://localhost:1337");
	socket.on("newMessage", function(data){
		$('#tchatbox').append('<p>'+data+'</p>');
	})
})