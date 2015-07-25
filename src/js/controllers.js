var app = angular.module('regApp', [
  'formly', 
  'formlyBootstrap',
  'ngRoute',
  'regApp.form',
  'regApp.forms',
  'regApp.registrations'
])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/test'});
}]);

//Add a service to control pageTitle -> then use service from partials to control the pageTitle

//Checkout Dragula.js for dragging elements

//Consider architecture - when to use Umbraco - for creating forms or... perhaps implement the single-page-app in a memberarea - YES! that would be awesome.

