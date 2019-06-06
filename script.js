var app = angular.module('myApp', []);
app.controller('AngularCtrl', function($scope, $http) {
    $http.get("http://13.235.27.170:8000/api/v1/customers")
    .then(function successCallback(response) {
        $scope.response = response.data;
      },
      function errorCallback(response) {
        console.log("Unable to perform get request");
      }
    );
});