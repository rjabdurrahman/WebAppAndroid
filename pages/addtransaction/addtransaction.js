app.controller('AddTransactionCntlr', function ($rootScope, $scope) {
  var user = findUser(data.contacts, getQueryVariable("uid"));
  $scope.user = user;
  $scope.trans = findTrans(tranList.transactions, user.id);
  // $scope.debit = 0;
  // $scope.trans().filter((tran) => {
  //   return tran.type == 1;
  // }).forEach(function (tran) {
  //   $scope.debit += tran.amount;
  // });
  // $scope.credit = 0;
  // $scope.trans().filter((tran) => {
  //   return tran.type == -1;
  // }).forEach(function (tran) {
  //   $scope.credit += tran.amount;
  // });
});
