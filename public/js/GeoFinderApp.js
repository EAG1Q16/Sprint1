/**
 * Created by tonim on 05/10/2016.
 */
var GeoFinderApp = angular.module('GeoFinderApp', ['ngRoute']);

GeoFinderApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/users', {
            templateUrl: './views/users.html',
            controller: 'UsersCtrl'
        })
        .otherwise({
            redirectTo: '/users'
        });

    }]);


