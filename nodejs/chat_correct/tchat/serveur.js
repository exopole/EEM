var connect = require('connect');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');
var http = require('http');

// Création d'un application "connect"
var app = connect();

// Cette application écoute sur le port 1337 de l'ordinateur
var server = http.createServer(app);
server.listen(1400, function() {
	console.log('Le serveur écoute sur le port 1400');
});

// Utilisation de 2 "middlewares" qui servent les fichiers statiques (.html .css .js ...) depuis le dossier ./public/
app.use(serveStatic("./public"));
app.use(serveIndex("./public"));

// Création d'un objet socket.io pour gérer les websockets (canaux de communication bi-directionnels entre clients et serveur)
var io = require('socket.io')(server);

// Si un client demande l'établissement d'une connexion Websocket, c'est ici qu'il sera géré.
io.on('connection', function(socket) {
	
	// Si le serveur reçoit un nouveau message d'un client ...
	socket.on('newMessage', function(data) {
		// Il le retransmet à tous les clients connectés en websocket : d'ou le "io.sockets" (avec un `s`) qui signifie : TOUS les sockets ouverts
		io.sockets.emit('newMessage', data);
	});

});