/**
 * ndNav Directives
 */
'use strict';
angular.module('gozztrip').directive('ndNav', [
  function () {
    return {
      restrict: 'E',
      templateUrl: '/templates/public/nav.html',
      link: function (scope, element) {
        /**
         * 初始化变量
         */
        scope.user = {};
      }
    }
  }
]);