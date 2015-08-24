app.controller('EmpListCtrl', function ($scope, $http){
    $http.get('emp.json').success(function(data) {
      $scope.emparr = data;
    });
    $scope.showform = true;
    $scope.adduser = false;
    $scope.edituser = false;

    $scope.toggle=function(){
    $scope.showform = false;
    $(".addform h2").text("Add User");
    $scope.id='';
    $scope.name='';
    $scope.desg = '';
    $scope.adduser = true;
    $scope.edituser = false;
    $scope.submitted=false;
    $scope.idnotnoerror=false;
    };
    $scope.formsubmit=function() {
      $scope.submitted=true;
    }
    $scope.Save = function (isValid) {
         var inputid= $scope.emparr.id;
         if(inputid.match('^[0-9]*$')) {
           $scope.idnotnoerror=false;
          }
          else if (inputid == "")
          {
             $scope.idnotnoerror=false; 
          }
         else 
           { $scope.idnotnoerror=true; 
           }

        if (isValid && !$scope.idnotnoerror) {
        $scope.emparr.push({ 'id': $scope.emparr.id, 
        'name': $scope.emparr.name, 'desg': $scope.emparr.desg });
        $scope.emparr.id = '';
        $scope.emparr.name = '';
        $scope.emparr.desg = '';
        console.log($scope.emparr);
        $scope.showform = true;
        $scope.submitted=false;
      }
    };
    var key;
    $scope.Edit = function (emp, indx) {
      $scope.showform = false;
      $(".addform h2").text("Edit User");
      $scope.edituser = true;
      $scope.adduser = false;
                    key = indx;                
                    $scope.emparr.id = emp.id;
                    $scope.emparr.name = emp.name;
                    $scope.emparr.desg = emp.desg;
    };

    $scope.Update = function (isValid) {
      var inputid= $scope.emparr.id;
         if(inputid.match('^[0-9]*$')) {
           $scope.idnotnoerror=false;
          }
          else if (inputid == "")
          {
             $scope.idnotnoerror=false; 
          }
         else 
           { $scope.idnotnoerror=true; 
           }
           if (isValid && !$scope.idnotnoerror) {
                $scope.emparr[key].id =$scope.emparr.id;
                $scope.emparr[key].name =$scope.emparr.name;
                $scope.emparr[key].desg =$scope.emparr.desg;
                $scope.emparr.id = '';
                $scope.emparr.name = '';
                $scope.emparr.desg = '';
                $scope.showform = true;
            }
          };

    $scope.Delete = function (id) {
                 $scope.emparr.splice(id, 1);
    };        
/*    var parameter = JSON.stringify({"id":"1", "name":"adad", "desg":"sdsad"});
    $http.post('emp.json', parameter).
    success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        console.log("post success:"+data);
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log("post :"+data);
      });*/

});