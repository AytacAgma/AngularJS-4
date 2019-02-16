(function () {
    'use strict';

    angular.module('MyApp')
        .controller('ItemsController', ItemsController);

    // Version with resolving to 1 item based on $stateParams in route config
    ItemsController.$inject = ['dish', 'items'];
    function ItemsController(dish, items) {
        var itemsCtrl = this;
        itemsCtrl.dish = dish;
        itemsCtrl.items = items.menu_items;
    }

})();
