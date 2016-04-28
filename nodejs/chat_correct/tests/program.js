var os = require('os');

console.log(
	'Hello ! Je tourne sous ',
	os.platform(),
	' et je suis de type',
	os.type(),
	'Cette machine a également ',
	os.cpus().length,
	'CPUs'
);

// Enregistrez ce fichier en .js
// Dans votre terminal : naviguer vers le dossier contenant ce fichier, et exécuter la commande : node [NOM_FICHIER].js