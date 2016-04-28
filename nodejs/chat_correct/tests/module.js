// module.js

// Ecrivez 4 fonctions qui renvoient :
// une addition entre a et b
function addition(a, b) {
	return a + b;
}
// une soustraction entre a et b
function soustraction(a, b) {
	return a - b;
}
// une multiplication entre a et b
function multiplication(a, b) {
	return a * b;
}
// une division entre a et b
function division(a, b) {
	return a / b;
}

// Exportez un objet contenant vos 4 fonctions :
module.exports = {
	addition : addition,
	soustraction : soustraction,
	multiplication : multiplication,
	division : division
};