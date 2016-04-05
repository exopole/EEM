
var valid = false;
var login = "";
var password = "";
var loginValid = "Lizard";
var passwordValid = "Spock";


while (valid===false)
{
	login = prompt("Entrez le login : ");

	password = prompt("Entrez le password :");

	if (login.length == loginValid.length && password.length == passwordValid.length && login === loginValid && password === passwordValid) {
		valid =true;
		alert("ACCÈS AUTORISÉ !\nVoici les codes secrets : X15SD-45D6S-21D6C-E456F-ZZ126");
	}
	else
		alert("ACCÈS REFUSEE !!!")
}