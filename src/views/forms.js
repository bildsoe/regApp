'use strict';

angular.module('regApp.forms', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/forms', {
    templateUrl: 'views/forms.html',
    controller: 'FormCtrl'
  });
}])
.controller('FormCtrl', [function() {
  var vm = this;

  vm.model = {};
  vm.fields = [
    {
      type: 'input',
      key: 'text',
      templateOptions: {
        label: 'First input',
        placeholder: 'It works!'
      }
    },
    {
      type: 'select',
      key: 'avenger',
      templateOptions: {
        label: 'Favorite Avenger',
        options: [
          {name: 'Iron Man', value: 'iron_man', gender: 'Male'},
          {name: 'Captain America', value: 'captain_america', gender: 'Male'},
          {name: 'Black Widow', value: 'black_widow', gender: 'Female'},
          {name: 'Hulk', value: 'hulk', gender: 'Male'},
          {name: 'Captain Marvel', value: 'captain_marvel', gender: 'Female'}
        ],
        groupProp: 'gender'
      }
    }
  ];
}]);

 