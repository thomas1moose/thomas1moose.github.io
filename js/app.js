'use strict';

/* Main application */

angular.module('thomasApp', ['thomasApp.filters', 'thomasApp.services', 'thomasApp.directives', 'thomasApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/events', {templateUrl: 'partials/events.html', controller: 'EventsCtrl'});
    $routeProvider.otherwise({redirectTo: '/events'});
  }]);
