var sampleApp = angular.module('sampleApp', []);
  
sampleApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'templates/add-order.html',
        controller: 'HomeController'
      })
      .when('/showOrders', {
        templateUrl: 'templates/show-order.html',
      })
       .when('/ShowOrder/:orderId', {
    templateUrl: 'templates/show_order.html',
    controller: 'ShowOrderController'
      })
      .otherwise({
        redirectTo: '/home'
      });
}]);