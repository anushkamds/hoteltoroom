(function () {
    'use strict';
    angular.module('app').factory('api', apiFactory);

    apiFactory.$inject = ['$http'];

    function apiFactory($http) {
        return {
            getRestaurants: getResturants
        };

        function getResturants() {
            $http.get('/order/apis/resturants')
                .then(function (resposne) {
                        vm.restuarant = resposne.data;
                    },
                    function (reason) {
                        console.log(reason);
                    })
                .catch(function (err) {
                    console.log(err);
                })
        }

        function getResturantDetails(restId) {
            $http.get('/order/apis/resturants')
                .then(function (resposne) {
                        vm.restuarant = resposne.data;
                    },
                    function (reason) {
                        console.log(reason);
                    })
                .catch(function (err) {
                    console.log(err);
                })
        }

        function createOrder(food) {
            return $http.post('/order/api/create-order', food)
                .then(function (response) {
                    return response.data;
                });
        }
    }

})