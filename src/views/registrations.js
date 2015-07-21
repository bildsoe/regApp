'use strict';

angular.module('regApp.registrations', ['ngRoute','ui.grid'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/registrations', {
    templateUrl: 'views/registrations.html',
    controller: 'GridCtrl'
  });
}])
.controller('GridCtrl', [function() {
  var gm = this;

  gm.myData = [
    {
      "firstName": "Cox",
      "lastName": "Carney",
      "company": "Enormo",
      "employed": true
    },
    {
      "firstName": "Lorraine",
      "lastName": "Wise",
      "company": "Comveyer",
      "employed": false
    },
    {
      "firstName": "Nancy",
      "lastName": "Waters",
      "company": "Fuelton",
      "employed": false
    }
  ];
    

}]);

 