// Urukhai --> Orc
function Urukhai(name, strength, wickedness, andurance) {
	Orc.call(this,name, strength);
	this.andurance = andurance || 10;
}

Urukhai.prototype = Object.create( Orc.prototype );
Urukhai.prototype.run = function(){
	console.log(this.name+' cours plus rapidement !');
};