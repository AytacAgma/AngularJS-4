(function () {
    'use strict';

    angular.module('MyApp')
        .component('items', {
            templateUrl: 'HTML/items.template.html',
            bindings: {
                items: '<'
            }
        });
})();
