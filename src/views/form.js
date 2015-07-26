'use strict';

angular.module('regApp.form', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/form/:id', {
    templateUrl: 'views/form.html',
    controller: 'FormCtrl'
  });
}])
.controller('FormCtrl', ['$scope','$http','$routeParams',function($scope, $http, $routeParams) {
  
  console.log($routeParams);

  var vm = this;

  $scope.vm = vm;

  $http.get('/Form/' + $routeParams.id).success(function(data) {
    vm.model = {};
    vm.fields = JSON.parse(data[0].schema);
  });

}]);

 