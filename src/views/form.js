'use strict';

angular.module('regApp.form', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/form', {
    templateUrl: 'views/form.html',
    controller: 'FormCtrl'
  });
}])
.controller('FormCtrl', function($scope,$http) {
  
  var vm = this;

  $http.get('/showForm').success(function(data) {
    vm.model = {};
    vm.fields = JSON.parse(data[0].schema);
  });

});

 