app.controller('UserDetailsCntlr', function ($scope) {
  console.log(getQueryVariable("uid"));
  var user = findUser(data.contacts, getQueryVariable("uid"));
  $scope.user = user;
  var utransactions = findTrans(tranList.transactions, user.id);
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
  $scope.trancol = function (type) {
    if (type == -1)
      return "red";
  }
  $scope.transym = function (type) {
    if (type == -1)
      return "–";
  }
  //End
});
