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
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'flashcardCtrl'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'flashcardCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
