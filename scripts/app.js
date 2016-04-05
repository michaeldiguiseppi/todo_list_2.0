var app = angular.module('todoApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'partials/incomplete.html',
        controller: 'MainController'
      })
      .when('/new', {
        templateUrl: 'partials/new.html',
        controller: 'MainController'
      })
      .when('/complete', {
        templateUrl: 'partials/completed.html',
        controller: 'MainController'
      });
});


app.controller('MainController', function($scope, todoList) {
  $scope.todoList = todoList;
});

app.factory('todoList', function todoFactory() {
  var todoList = {};
  todoList.todoArray = [{task: 'Wash car', completed: false},
    {task: 'Buy groceries', completed: false},
    {task: 'Take dog for a walk', completed: true}
  ];
  todoList.addTodo = function(task) {
    todoList.todoArray.push({
      task: task,
      completed: false,
    });
    todoList.task = '';
    todoList.showIncompleteOnly();
  };
  todoList.changeTodo = function(todo) {
    todo.completed = !todo.completed;
  };
  return todoList;
});
