'use strict';

/* Controllers */

angular.module('flashcardsApp.controllers', [])
  .controller('flashcardCtrl', [
    '$scope', function ($scope) {
      $scope.card = {
        'question': 'Nexus Sausage',
        'answer': 'Fast just got faster with Nexus S.'
      };

      $scope.score = $scope.attempts = 0;
      $scope.scorePct = 100;

      $scope.answerCorrect = function () {
        $scope.score++;
        $scope.attempt();
      }

      $scope.answerWrong = function () {
        $scope.attempt();
      }

      $scope.attempt = function () {
        $scope.attempts++;
        $scope.scorePct = ($scope.score / $scope.attempts) * 100;
      }
    }
  ]);
