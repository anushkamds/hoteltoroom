(function () {
    'user strict';

    angular.module('app').config(config)

    config.$inject = ['$routeProvider']

    function config($routeProvider) {
        $routeProvider
            .when('/restaurants', {
                templateUrl: 'js/app/restaurants/restaurants.html',
                controller: 'RestaurantsController',
                controllerAs: 'vm '
            })
            .when('/menu/:restId', {
                templateUrl: 'js/app/menu/menu.html',
                controller: 'MenuController',
                controllerAs: 'vm'
            });
    }
})
