// serveur.js

var http = require('http'); // Récupération du "core module" Node nommé HTTP
var fs   = require('fs');

var serveur = http.createServer(function(requete, reponse) {
	console.log("On m'interroge sur "+ requete.url+ " ("+ requete.method +")");

	// Si l'URL est égale à /images/Hydrangeas.jpg, alors lire ce fichier et l'envoyer à l'utilisateur comme réponse
	if (requete.url === '/images/Hydrangeas.jpg') {
		// Lecture...
		fs.readFile('images/Hydrangeas.jpg', function (erreur, data) {
			if (!erreur) {
				reponse.writeHead(200, {'Content-Type': 'image/jpeg'});
				reponse.end(data);
			}
		});
	}
	// Sinon, afficher le message d'accueil
	else {
		reponse.end("Salut toi !");
	}
});

serveur.listen(1337, function() {
	console.log("Le serveur écoute sur le port 1337...");
});

// node serveur.js    dans votre terminal
// Dans votre navigateur favori : Naviguez vers http://localhost:1337 