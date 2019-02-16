(function () {
    'use strict';

    angular.module('MyApp')
        .component('categories', {
            templateUrl: 'HTML/categories.template.html',
            bindings: {
                categs: '<'
            }
        });
})();
