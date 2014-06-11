'use strict';

/* Controllers */

angular.module('flashcardsApp.controllers', [])
    .controller('flashcardCtrl', ['$scope', function ($scope) {
        $scope.card = {
            'question': 'Nexus Sausage',
            'answer': 'Fast just got faster with Nexus S.'};
    }])
    .controller('MyCtrl2', ['$scope', function ($scope) {

    }]);
