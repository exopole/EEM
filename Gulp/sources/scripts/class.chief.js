// Chief --> Orc
function Chief(name, strength, wickedness, authority){
	Orc.call(this,name, strength);
	this.authority = authority || 15;
}

Chief.prototype = Object.create( Orc.prototype );
Chief.prototype.command = function(target){
	console.log(this.name+' donne un ordre à '+target.name +'!');
};