'use strict';
angular.module('gozztrip').controller('IndexCtrl',
['$rootScope','$scope','ENV', function($rootScope,$scope,ENV) {
  $scope.ENV=ENV;
  $scope.page = 0;
  $scope.dMoreCon = "加载更多";
  $scope.dMore = function(){
  }
}]);
