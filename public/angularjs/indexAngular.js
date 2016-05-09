var adminNgApp = angular.module("indexApp", ['ngRoute']);

adminNgApp.controller('indexCtrl', function($scope,$http) {
    $scope.transactionId = "ABC";
    var bitcoin = new WebSocket('wss://ws.blockchain.info/inv');
    var myEl = angular.element( document.querySelector( '#row' ) );
     //  myEl.append("<table class='table'> <tr><th>Transaction ID</th><th> Timestamp</th><th>Price</th><th>Volume</th></tr> ");
    bitcoin.onopen = function(){
      bitcoin.send(JSON.stringify({"op" : "unconfirmed_sub"}));
    }
    bitcoin.onmessage = function(onmsg){
      $scope.$apply(function(){


     var index = String((JSON.parse(onmsg.data)).x.out[0].tx_index);
     var timestamp = String((JSON.parse(onmsg.data)).x.time);
 
     var price = (Number((JSON.parse(onmsg.data)).x.out[0].value))/100000000;
    var address = String((JSON.parse(onmsg.data)).x.out[0].addr);

     myEl.prepend("<table class='table'><tr><td>"+index+"</td><td>"+timestamp+"</td><td>"+price+" BTC</td><td>"+address+"</td></tr>");     
    

           //var td = angular.element(document.querySelector('transactionId'));
           //td.prepend((JSON.parse(onmsg.data)).x.out[0].tx_index);

      })
    
    }

      
  });