

while(true)
{
var value1 = prompt("donnez un chiffre");
var op = prompt("donnez un operateur venant de : +, -, *, /, %");

var value2 = prompt("donnez un second chiffre");

value1 = parseInt(value1);
value2 = parseInt(value2);

switch(op){

	case "+" :
		alert( "result : " + (value1 + value2));
		break;
	case "-":
		alert("result : " + (value1 - value2));
		break;
	case "*":
		alert("result : " + (value1 * value2));
		break;
	case "/":
		alert("result : " + (value1 / value2));
		break;
	case "%":
		alert("result : " + (value1 % value2));
		break;
	default :
		alert("MAIS QU'EST CE QUE T'AS FOUTU !!!!!!!! BOUGRE D'ANDOUILLE !!!!!!!!!!")

}

}