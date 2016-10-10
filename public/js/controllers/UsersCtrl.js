/**
 * Created by tonim on 05/10/2016.
 */
angular.module('GeoFinderApp').controller('UsersCtrl',['$scope','$http','$routeParams', function($scope, $http, $routeParams){
    $scope.NewUser = {};

    // when landing on the page, get all user and show them
    $http.get('/users')
        .success(function(data) {
            $scope.users = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.CreateUser = function(){
        $http.post('/users', $scope.NewUser)
            .success(function(data){
                $scope.NewUser = {}; //clear the form
                $scope.users = data;
                console.log(data);
            })
            .error(function(data){
                console.log('Error:' + data);
            });
    };

    $scope.DeleteUser = function(id){
        $http.delete('/users/' + id)
            .success(function(data) {
                $scope.users = data;
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };

    $scope.UpdateUser = function() {
        console.log($scope.NewUser);

        $http.put('/users/' + $scope.NewUser._id, $scope.NewUser)
            .success(function(data){
                $scope.NewUser = {};
                $scope.users = data;
                console.log('Success' + data);
            })
            .error(function(data) {
                console.log('Error' + data);
            });
    };

    $scope.UseUser = function(user) {
        console.log(user);
        angular.copy(user, $scope.NewUser)
        console.log($scope.NewUser);
    };
}]);



