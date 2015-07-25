'use strict';

angular.module('regApp.forms', ['ngRoute','ui.grid'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/forms', {
    templateUrl: 'views/forms.html',
    controller: 'FormsCtrl'
  });
}])
.controller('FormsCtrl', function($http, $scope) {
  
  $http.get('/showForm').success(function(data) {
    console.log("is here");

    var fields = data;

    $scope.myData = fields.map(function (obj) {
        return {"id":obj.id, "title":obj.title, "createdAt":obj.createdAt, "updatedAt":obj.updatedAt};
    });


  });
    

});

 