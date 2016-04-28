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