angular
    .module("Contacts",['ngRoute'])
    .config(function($routeProvider){
        //console.log($routeProvider);
        $routeProvider
            .when('/contact/:index',{
                templateUrl: 'view.html',
                controller: 'View'
            })
            .when('/add',{
                templateUrl: 'view.html',
                controller: 'Add'
            })
            .when('/',{
                templateUrl: 'list.html'
            });
    })
    .controller("ContactsMain", function($scope, $location){
        $scope.contacts = [
            {name: "John", number: "987654321"},
            {name: "Rick", number: "557654321"},
            {name: "Shane", number: "287654321"},
            {name: "Josh", number: "9117654321"},
        ];

        $scope.home = function(){
            $location.path('/');
        };
    })
    .controller("View", function($scope, $routeParams, $location){
        $scope.contact = $scope.contacts[$routeParams.index];

        $scope.delete = function(){
            $scope.contacts.splice($routeParams.index, 1);
            $location.path('/');
        };

    })
    .controller("Add", function($scope){
        $scope.contacts.push({
            name: "New Contact",
            number : "90909090"
        });
        $scope.contact = $scope.contacts[$scope.contacts.length - 1];
    });