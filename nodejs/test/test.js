var os = require('os');
var dns = require('dns');

console.log(
'hellp ! je tourne sous ',
os.platform(),
'et je suis de type ',
os.type(),
'Cette machine a également ',
os.cpus().length,
' CPUs\nServeur DNS :',
dns.getServers()

	);