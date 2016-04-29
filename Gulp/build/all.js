// Chief --> Orc
function Chief(name, strength, wickedness, authority){
	Orc.call(this,name, strength);
	this.authority = authority || 15;
}

Chief.prototype = Object.create( Orc.prototype );
Chief.prototype.command = function(target){
	console.log(this.name+' donne un ordre à '+target.name +'!');
};
// Hobbit
function Hobbit(name, strength, steal, equipment){
	Person.call(this,name, strength);
	this.steal = steal || 7;
	this.equipment 	= equipment || [];
}

Hobbit.prototype = Object.create( Person.prototype );
Hobbit.prototype.heal = function(target) {
	if (target instanceof Hobbit === false || typeof target === 'undefined')
    return;

		target.strength = target.strength + 3;
		console.log(this.name+' à soigné '+target.name +' + 3 point de force');
};
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
// Person
function Person(name,strength){
	
	this.name 		= name || 'Anonyme';
	this.strength 	= strength || 10;
	this.alive 		= true;
	
}
Person.prototype = {
	say:function(message){
		console.log(this.name+' dit : '+"'"+message+"'");
	},
	hit:function(victim){
		if(victim instanceof Orc === false && victim instanceof Hobbit === false || typeof victim === 'undefined') return;

		victim.strength = victim.strength - (this.strength * 0.3);
		console.log(this.name+' à frappé '+victim.name);
		if(victim.strength <= 0){
			victim.alive = false;
			console.log(victim.is_dead());
		}
		else{
			console.log('Il lui reste '+victim.strength+ ' points de force');
		}
	},
	is_dead:function(){
		if(this.alive === false){
			console.log(this.name+' est décédé !');
		}
	}
};
// Urukhai --> Orc
function Urukhai(name, strength, wickedness, andurance) {
	Orc.call(this,name, strength);
	this.andurance = andurance || 10;
}

Urukhai.prototype = Object.create( Orc.prototype );
Urukhai.prototype.run = function(){
	console.log(this.name+' cours plus rapidement !');
};