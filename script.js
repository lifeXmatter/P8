var cryptApp = angular.module("CryptApp",[]);
  cryptApp.controller("cCtrl",function($scope){
    $scope.query = {}
    $scope.queryBy = '$'
    $scope.cdata = [
      {
        "rank" : "1",
        "name" : "Bitcoin",
        "totals" : "21M",
        "consensus" : "PoW",
        "ticker" : "BTC"
      },
      {
        "rank" : "2",
        "name" : "Ethereum",
        "totals" : "144M",
        "consensus" : "PoW, PoS",
        "ticker" : "ETH"
      }
    ];
    $scope.orderProp="rank";                
  });
