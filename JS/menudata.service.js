(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('MenuPath', "https://davids-restaurant.herokuapp.com");
    
    MenuDataService.$inject = ['$http', 'MenuPath']
    function MenuDataService ($http, MenuPath) {
        var mdServ = this;

        mdServ.getAllCategories = function () {
            return $http({
                method: 'GET',
                url: (MenuPath + "/categories.json")
            }).then(function (result) {
                return result.data;
            }).catch(function (error) {
                console.log(error);
                return [];
            });
        };

        mdServ.getItemsForCategory = function (catShortName) {
            return $http({
                method: 'GET',
                url: (MenuPath + "/menu_items.json?category=" + catShortName)
            }).then(function (result) {
                return result.data;
            }).catch(function (error) {
                console.log(error);
                return [];
            });
        };
    };

})();