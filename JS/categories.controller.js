(function () {
    'use strict';

    angular.module('MyApp')
        .controller('CategoriesController', CategoriesController);

    // Version with resolving to 1 item based on $stateParams in route config
    CategoriesController.$inject = ['categs'];
    function CategoriesController(categs) {
        var catCtrl = this;
        catCtrl.categs = categs;
    }

})();
