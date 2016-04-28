// Orc
function Orc(name,strength,wickedness){
	Person.call(this, name, strength);
	this.wickedness = wickedness || 10;
}

Orc.prototype = Object.create( Person.prototype );
Orc.prototype.scratch = function(victim){
	if(victim instanceof Orc === false && victim instanceof Hobbit === false || typeof victim === 'undefined') return;
		victim.strength = victim.strength - (this.strength * 0.7);
		console.log(this.name+' à griffé '+victim.name);
		if(victim.strength <= 0){
			victim.alive = false;
			console.log(victim.is_dead());
		}
		else{
			console.log('Il lui reste '+victim.strength+ ' points de force');
		}
};

Orc.prototype.kill = function() {
	console.log("do something");
};