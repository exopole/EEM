
while(true)
{

var nombre = Number(prompt("Donnez un nombre premier !"));

var premier = true;

var i = Number(2);

while(premier && i < nombre/2)
{
	if (nombre%i == 0) 
		premier = false;
	i++;
}


if (!premier || nombre ==2)
	alert(nombre + " n'est pas un nombre premier");

else 
	alert(nombre + " est un nombre premier");
}