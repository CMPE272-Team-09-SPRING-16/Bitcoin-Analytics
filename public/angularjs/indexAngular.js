var adminNgApp = angular.module("indexApp", ['ngRoute']);

adminNgApp.controller('indexCtrl', function($scope,$http) {

  var fetchLiveTransaction = function(){

      $http({

        method:"GET",
        url:'/getAPIData'

      }).success(function(data)
      {
        console.log("Done");
        if(data.statusCode==200)
        {
          if(data.results != ""){
          }else{
          }


        }
      }).error(function(error) {
        $scope.unexpectedError = false;
        $scope.invalidLogin = true;
      });
  }
  fetchLiveTransaction();
});
