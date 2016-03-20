(function () {
    'user strict';

    angular.module('app').controller('RestaurantsController', RestaurantsController);

    RestaurantsController.$inject = ['api'];

    function RestaurantsController() {
        var vm = this;
        api.getRestaurants().then(function(data){
            vm.restaurants = data;
        })
    }
})
