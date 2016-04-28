var connect     	= require("connect");
var serveStatic 	= require("serve-static");
var serveIndex 		= require('serve-index');
var http			= require('http');





var app = connect();

var server = http.createServer(app);
server.listen(1337, function(){
						console.log('le serveur ecoute le port 1337');
					});


// cette application executera la function suivante a chaqe nouvelle requete
// app.use(function(requete,reponse){
// 	console.log('Nouvelle requete sur ', requete.url);
// });
app.use(serveStatic("./public"));
app.use(serveIndex("./public"));



var io  = 	require('socket.io')(server);

io.on('connection', function(socket){
	// console.log('un client a ouvert un socket');
	// socket.emit('newMessage', "coucou depuis le serveur");
	// socket.emit('newMessage', "Bienvenue sur le tchat 0.1");

	socket.on('newMessage', function(data){
		io.sockets.emit('newMessage', data);
	});
});