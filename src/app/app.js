angular.module('gozztrip', ['ui.router', 'ngResource'])

.config(['$stateProvider', '$httpProvider', function($stateProvider, $httpProvider) {
        'use strict';
        $stateProvider
        .state("admin", {
            // url: '/',
            templateUrl: '/templates/home.html',
        })
        .state("admin.index", {//子路由
            url: '/admin',
            templateUrl: '/templates/home/index.html',
            controller: 'IndexCtrl'
        })
        .state("admin.user", {//子路由
            url: '/user',
            templateUrl: '/templates/user/index.html',
            controller: 'IndexCtrl'
        })

    }])
    .run(['$location', '$rootScope', function($location, $rootScope) {
        $location.path('/admin').replace();
    }]);
