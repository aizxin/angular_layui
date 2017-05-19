/**
 * ndFooter Directives
 */
'use strict';
angular.module('gozztrip').directive('ndFooter', ['Api',
  function (Api) {
    return {
      restrict: 'E',
      templateUrl: '/templates/public/foot.html',
      link: function (scope, element) {
        /**
         * 初始化变量
         */
         scope.user = {};
      }
    }
  }
]);
