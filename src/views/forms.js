'use strict';

angular.module('regApp.forms', ['ngRoute','ui.grid', 'ui.grid.selection'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/forms', {
    templateUrl: 'views/forms.html',
    controller: 'FormsCtrl'
  });
}])
.controller('FormsCtrl', function($http, $scope) {
  
  $scope.columns = [{ field: 'id' }, { field: 'title' }, { field: 'createdAt' }, { field: 'updatedAt' }];

  $scope.myGridOptions = {
    enableSorting: true,
    enableRowHeaderSelection: false,
    enableRowSelection: true,
    multiSelect: false,
    modifierKeysToMultiSelect: false,
    noUnselect: true,
    columnDefs: $scope.columns,
    onRegisterApi: function( gridApi ) {
      $scope.grid2Api = gridApi;
    }
  }

  $http.get('/Form').success(function(data) {
    console.log("is here");

    var fields = data;

    $scope.myGridOptions.data = fields.map(function (obj) {
        return {"id":obj.id, "title":obj.title, "createdAt":obj.createdAt, "updatedAt":obj.updatedAt};
    });

    $scope.columns.push({ 
      'field': 'link', 
      'enableSorting': false,
      'cellTemplate': '<div><a href="http://localhost:3000/#/views/form/{{row.entity.id}}">Click me</a></div>'
    });
  });


});

 