app.controller('UserDetailsCntlr', function ($scope, $window) {
  function $js(id) {
    return document.getElementById(id);
  }
  function $lsGet(id) {
    return localStorage.getItem(id);
  }
  function $lsSet(id, data) {
    localStorage.setItem(id, data);
  }
  function $lsSetJ(id, data) {
    localStorage.setItem(id, JSON.stringify(data));
  }
  $scope.getQueryVar = function (variable) {
    var query = $window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
  };
  console.log($scope.getQueryVar("uid"));
  function findArrEl(arr, data) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i].id == data){
        return arr[i];
        break;
      }
    }
  }
  var data =  $lsGet("contactList") ? JSON.parse($lsGet("contactList")) : {
    contacts : []
  };
  var user = findArrEl(data.contacts, $scope.getQueryVar("uid"));
  $scope.user = user;
  var tranList =  $lsGet("tranList") ? JSON.parse($lsGet("tranList")) : {
    transactions : []
  };
  function filterArr(arr, data){
    var rdata = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i].userid == data){
        rdata.push(arr[i]);
      }
    }
    return rdata;
  }
  var utransactions = filterArr(tranList.transactions, user.id);
  console.log(utransactions);
  $scope.utrans = utransactions;
  // $scope.debit = 0;
  // $scope.utrans().filter((tran) => {
  //   return tran.type == 1;
  // }).forEach(function(tran) {
  //   $scope.debit += tran.amount;
  // });
  // $scope.credit = 0;
  // $scope.utrans().filter((tran) => {
  //   return tran.type == -1;
  // }).forEach(function(tran) {
  //   $scope.credit += tran.amount;
  // });
  // $scope.trancol = function (type) {
  //   if (type == -1)
  //     return "red";
  // }
  // $scope.transym = function (type) {
  //   if (type == -1)
  //     return "–";
  // }
  //End
});
