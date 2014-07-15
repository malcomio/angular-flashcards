'use strict';


// Declare app level module which depends on filters, and services
angular.module('flashcardsApp', [
  'ngRoute',
  'flashcardsApp.filters',
  'flashcardsApp.services',
  'flashcardsApp.directives',
  'flashcardsApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/question', {templateUrl: 'partials/question.html', controller: 'flashcardCtrl'});
  $routeProvider.when('/answer', {templateUrl: 'partials/answer.html', controller: 'flashcardCtrl'});
  $routeProvider.otherwise({redirectTo: '/question'});
}]);
