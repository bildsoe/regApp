var app = angular.module('regApp', [
  'formly', 
  'formlyBootstrap',
  'ngRoute',
  'regApp.forms',
  'regApp.registrations'
])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/views/forms'});
}]);

//Add a service to control pageTitle -> then use service from partials

