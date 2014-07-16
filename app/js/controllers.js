'use strict';

/* Controllers */

angular.module('flashcardsApp.controllers', [])
  .controller('flashcardCtrl', [
    '$scope', function ($scope, $location) {
      $scope.cards = [
        {
          'question': 'Nexus Sausage',
          'answer': 'Fast just got faster with Nexus S.'
        },
        {
          'question': 'Cake ',
          'answer': 'blah'
        },
      ];

      $scope.counter = $scope.score = $scope.attempts = 0;
      $scope.scorePct = 100;

      $scope.answerCorrect = function () {
        $scope.score++;
        $scope.attempt();
      }

      $scope.answerWrong = function () {
        $scope.attempt();
      }

      $scope.attempt = function () {
        $scope.counter++;

        // Wrap around when we go past the last card.
        if ($scope.counter == $scope.cards.length) {
          $scope.counter = 0;
        }

        $scope.attempts++;
        $scope.scorePct = ($scope.score / $scope.attempts) * 100;
      }
    }
  ]);
