(function () {
    'use strict';

    angular.module('MyApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'HTML/home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'HTML/categories.template.html',
                controller: 'CategoriesController as catCtrl',
                resolve: {
                    categs: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: '/items-in-category/{catId}',
                templateUrl: 'HTML/items.template.html',
                controller: "ItemsController as itemsCtrl",
                resolve: {
                    dish: ['$stateParams', function ($stateParams) {
                        return $stateParams.catId;
                    }],
                    items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.catId);
                    }]
                }
            });
        
        $urlRouterProvider.otherwise('/');

    }

})();
