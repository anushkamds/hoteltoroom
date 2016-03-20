(function () {
    'use strict';

    angular
        .module('app')
        .controller('MenuController', MenuController);

    MenuController.$inject = ['api', '$routeParams', 'ngDialog'];

    function MenuController(api, $routeParams, ngDialog) {
        var vm = this;

        api.getRestaurantsDetails($routeParams.restId)
            .then(function (data) {
                vm.restaurant = data;
            });
        vm.viweItem = function (item) {
            vm.activeItem = item;
            vm.activeItem.options = [];

            ngDialog.open({
                template: 'item.html',
                className: 'ngdialog-theme-default',
                scope: $scope
            })
        }
    }
})