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