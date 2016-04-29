var app = angular.module('TodoMVC', []);

var todolist = [
	{taskName: 'Eve online', done:true},
	{taskName: 'League of legend', done:true},
	{taskName: 'Medecin', done:false},
	{taskName: 'Courir', done:false},
	{taskName: 'Wordpress', done:true}
];

app.controller('TodoController', function() {

	this.todos = todolist;

	this.remaining = function(){
		var undone = todolist.length;
		todolist.forEach(function(el){
			if (el.done){
				undone--;
			}
		});
		return undone;
	
	};


	this.add = function() {
	    todolist.unshift({
	      taskName : this.newTaskName,
	      done : false
	    });
	    this.newTaskName = '';
 	};


});
