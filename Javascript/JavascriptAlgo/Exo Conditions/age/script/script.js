
while(true){
	var age = prompt("donne ton age en jour/mois/annee");
	var now = new Date();

	var annee   = now.getFullYear();
	var mois    = now.getMonth() + 1;
	var jour    = now.getDate();

	var str = "How are you doing today?";
	var res = age.split("/");
	alert(res.length)
	alert(res[0].length)
	alert(res[1].length)
	alert(res[2].length)

	if (res.length == 3 && res[0].length > 0 && res[0].length <= 2 && res[1].length > 0 && res[1].length <= 2 && res[2].length == 4) 
	{


		var monAnne =annee - res[2];
		alert(monAnne);
		var monMois = res[1];
		var monJour = res[0];

		if (monAnne < 0)
			alert ("Vous n'avez jamais exister ..... Sorry .... ");
		
		else if (monAnne < 17) 
			alert("Vous n'êtes pas encore majeur");
		
		else if (monAnne == 18){
			if (monMois < mois)
				alert("Vous n'êtes pas encore majeur");
			else if (monMois == mois)
			{
				if (monJour < jour) 
					alert("Vous n'êtes pas encore majeur");
				else
					alert("Vous êtes majeur mais pas encore senior");
			}
		}


		else if (monAnne < 49)
			alert("Vous êtes majeur mais pas encore senior");

		else if (monAnne == 50)
		{
			if (monMois < mois)
				alert("Vous êtes majeur mais pas encore senior");
			else if (monMois == mois)
			{
				if (monJour < jour) 
					alert("Vous êtes majeur mais pas encore senior");
				else
					alert("Vous êtes senior mais pas encore retraité");
			}
		}
		

		else  if (monAnne < 59)
			alert("Vous êtes senior mais pas encore retraité");

		else if (monAnne == 60){
			if (monMois < mois)
				alert("Vous êtes senior mais pas encore retraité");
			else if (monMois == mois)
			{
				if (monJour < jour) 
					alert("Vous êtes senior mais pas encore retraité");
				else
					alert("Vous êtes retraité");
			}
		}
	}
	else 
		alert("la date n'est pas correcte !!!! ");
}
