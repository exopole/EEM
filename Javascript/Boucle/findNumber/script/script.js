var cont = true;
var find = false;
var number, min = Number(-1), max = Number(1001);
var tmp;


while (cont)
{

	number = Number(getRandomIntExclusive(min, max));
	tmp = prompt(number + " => plus, moins ou egale");
	
	switch(tmp){
		case "plus":
			min = number;
			break;
		case "moins":
			max = number;
			break;
		case "egale" :
			find = true;
			break;
		default :
			alert("Alert Intrus !!!!");
			break;
	}
	if (max - min == 2){
		number = max -1;
		find = true;
	}
	if (find) 
	{
		if (confirm("Votre numeros est le : " +number+ "\nVoulez vous continuez?")) {
			find = false;
			min = Number(-1), max = Number(1001);

		}
		else
			cont = false;
	}
}






function getRandomIntExclusive(min, max) {
	
	
  return Math.floor(Math.random() * ((max-1) - (min+1) +1)) + (min+1);
}