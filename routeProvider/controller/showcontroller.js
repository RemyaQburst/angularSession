/*sampleApp.controller('ShowOrdersController', function($scope) {
    $scope.message = 'This is Show orders screen';
});*/

sampleApp.controller('ShowOrderController', function($scope, $routeParams) {
    $scope.order_id = $routeParams.orderId;
});