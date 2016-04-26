
// serveur js

var http = require('http'); //récupératio du core module node nommé http
var fs   = require('fs');

var serveur = http.createServer(function(requete, response){
	console.log("Quelqu'un m'interroge .... ? Bonjour ! \n On m'interroge sur : " , requete.url ,"("  + requete.method + ")"	 );

	if (requete.url === '/images'){
		fs.readFile('images/jax.jpg', function(erreur, data){
			if (!erreur) {
				response.writeHead(200, {"Content-Type": 'image/png'});
				response.end(data);
			}
		});
	}

	else
		response.end('Miaou is here .... Or not ... Do you see it ? The law of universe inside the miaou ... ');
	
});

serveur.listen(1337, function(){
	console.log('Le serveur écoute sur le port 1337 ...')
});


