var app = angular.module('TodoMVC', []);

var data = [
	{taskName: 'Eve online', done:true},
	{taskName: 'League of legend', done:true},
	{taskName: 'Medecin', done:false},
	{taskName: 'Courir', done:false},
	{taskName: 'Wordpress', done:true}
];

app.controller('TodoController', function() {

	var todo = this;
	todo.todolist = data;
	todo.newTaskName = '';

	todo.remaining = function(){
		var undone = data.length;
		data.forEach(function(el){
			if (el.done){
				undone--;
			}
		});
		return undone;
	
	};


	todo.add = function() {
		if (todo.newTaskName !== '') {
		    data.unshift({
		      taskName : todo.newTaskName,
		      done : false
		    });
			
		}
 	};

 	todo.archiver  = function(){
 		todo.todolist  = todo.todolist
			 			.filter(conserverUnDone);
 	};

 	function conserverUnDone(item){
 		return item.done === false
 	}


});
