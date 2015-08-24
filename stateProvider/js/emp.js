  var app = angular.module('EmpApp', ['ui.router']);
/* app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'home.html',
      }).
      when('/Empmanagement', {
        templateUrl: 'empmanagement.html',
        controller: 'EmpListCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);*/

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
             onEnter: function(){
                alert("entering");
             },
            onExit: function(){
                alert("leaving");
            }
        })
        .state('empmanagement', {
          url: '/empmanagement',
        views: {

            '': {  
                   abstract: true,  
                   templateUrl: 'templates/empmanagement.html',
                   controller: 'EmpListCtrl'
                },
            'addeditformView@empmanagement': { 
                parent: 'empManagement',
                templateUrl: 'templates/addeditform.html'
            }
        }
        
    });
});
