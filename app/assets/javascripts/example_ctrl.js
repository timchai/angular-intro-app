(function () {
  "use strict";

  angular.module("app").controller("exampleCtrl", function($scope) {

    // $scope.message = "Hello!";
    // $scope.message_2 = "Bye";
    // $scope.message_3 = "I'm hungry";
    // $scope.message_4 = "I'm ready for lunch";

    $scope.reviews = ["Angular is awesome", "Angular is the bomb", "Angular is bougie"]

    $scope.addReview = function(review) {
      $scope.reviews.push(review);
    }

    window.$scope = $scope;

  });
}());

  