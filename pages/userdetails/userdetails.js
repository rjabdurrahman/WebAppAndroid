app.controller('UserDetailsCntlr', function ($scope) {
  $scope.getQueryVar = function (variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
  };
  console.log($scope.getQueryVar("uid"));
  var user = data.contacts.find((user) => {
    return user.id == $scope.getQueryVar("uid");
  });
  $scope.user = user;
  $scope.utrans = function () {
    return tranList.transactions.filter((tran) => {
      return tran.userid == user.id;
    });
  }
  $scope.debit = 0;
  $scope.utrans().filter((tran) => {
    return tran.type == 1;
  }).forEach(function(tran) {
    $scope.debit += tran.amount;
  });
  $scope.credit = 0;
  $scope.utrans().filter((tran) => {
    return tran.type == -1;
  }).forEach(function(tran) {
    $scope.credit += tran.amount;
  });
  //End
});
