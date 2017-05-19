/**
 * ndComnav Directives
 */
'use strict';
angular.module('gozztrip').directive('ndComnav', [
  function () {
    return {
      restrict: 'E',
      templateUrl: '/templates/public/head.html',
      link: function (scope, element) {
        scope.user = {};
      }
    }
  }
]);