// Déclaration du module angular
var app = angular.module('TodoMVC', ['ngStorage']);

// ===========
// Controlleur de l'application
//  Note : $localStorage est ce qu'on appelle un "service". Il est rendu disponible par la dépendance 'ngStorage' ci-dessus
// ===========
app.controller('TodoController', function($localStorage) {

  var todo = this;

  // ======
  // Modèle (accès aux données de l'application)
  // ======

  // A l'initialisation de l'application, on stocke dans notre objet todolist soit :
  // - Le résultat de ce qu'il y avait dans le $localStorage.list
  // - Ou, s'il n'y avait rien, un tableau vide
  todo.todolist = $localStorage.list || [];

  // Création d'une variable représentant la zone de texte (pour l'ajout)
  todo.newTaskName = "";

  // Fonction qui calcule le nombre de tâches restantes
  todo.remaining = function () {
    // Version procédurale :
    // =====================

    /*var restantes = 0;
    for (var i = 0; i < todo.todolist.length; i++) {
      if (todo.todolist[i].done === false) {
        restantes++;
      }
    }
    return restantes;*/

    // Version fonctionnelle :
    // =======================

    return todo.todolist
      .filter(conserverUndone)
      .length;
  };

  // Fonction qui ajoute en début de liste la nouvelle valeur du formulaire
  todo.add = function() {
    if (todo.newTaskName === "")
      return;

    todo.todolist.unshift({
      taskName : todo.newTaskName,
      done     : false
    });

    // Mise à jour du modèle
    saveLocalStorage();

    todo.newTaskName = "";
  };

  // Fonction qui filtre la liste et supprime les tâches effectuées
  todo.archiver = function() {
    todo.todolist = todo.todolist
      .filter(conserverUndone);

    // Mise à jour du modèle
    saveLocalStorage();
  };

  // Transformer : permet sur une collection (array) de conserver une tâche non effectuée
  function conserverUndone(item) {
    return item.done === false
  }

  // Fonction permettant de mettre à jour le modèle ($localStorage) en fonction de la liste
  function saveLocalStorage() {
    $localStorage.list = todo.todolist;
  }

});