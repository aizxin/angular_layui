'use strict';
angular.module('gozztrip').factory('Api',['ENV','$http', function(ENV,$http) {
  var ApiUrl = ENV.api;
  return {
    getConfList: function () {
      return $http({
          url: ApiUrl+'Home/Base/Config',
          method: "GET"
      });
    },
    getCategory: function () {
      return $http({
          url: ApiUrl+'Api/V1/getCategory',
          method: "GET"
      });
    },
    getDList: function (data) {
      return $http({
          url: ApiUrl+'Api/V1/getDList',
          method: "POST",
          data:data
      });
    }
  }
}]);
