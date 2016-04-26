var connect     	= require("connect");
var serveStatic 	= require("serve-static");
var serveIndex 		= require('serve-index');
var http			= require('http');


// // Creation d'une application connect
// var app = connect();

// // Cette application exécutera la fonction suivante à chaque nouvelle requete
// /*
// app.use(function(requete,  reponse) {
// 	console.log("Nouvelle requete sur ", requete.url)
// });
// */


// // Serve directory indexes for public/ftp folder (with icons)
// app.use(serveIndex("./"))
// //app.use(serveStatic("./"),serveIndex('public/ftp', {'icons': true}));

// app.listen(1337, function(){
// 	console.log("le serveur écoute sur le port 1337");
// })	;



var app = connect();

var server = http.createServer(app)
				 .listen(1337, function(){
						console.log('le serveur ecoute le port 1337');
					});


// cette application executera la function suivante a chaqe nouvelle requete
// app.use(function(requete,reponse){
// 	console.log('Nouvelle requete sur ', requete.url);
// });
app.use(serveStatic("./public"));
app.use(serveIndex("./public"));



var io  = 	require('socket.io')(server);

io.on("connection", function(socket){
	console.log('un client a ouvert un socket');
	socket.emit('newMessage', "coucou depuis le serveur");
	socket.emit('newMessage', "Bienvenue sur le tchat 0.1");
})