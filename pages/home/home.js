app.controller('HomeCntlr', function ($scope) {
  $scope.message = 'Hello from HomeController';
  $scope.trans = tranList.transactions;
  $scope.user = function (id) {
    return data.contacts.find((user) => {
      return user.id == id;
    }).name;
  }

  $scope.debit = 0;
  $scope.trans.filter((tran) => {
    return tran.type == 1;
  }).forEach((tran) => {
    $scope.debit += tran.amount;
  });
  $scope.credit = 0;
  $scope.trans.filter((tran) => {
    return tran.type == -1;
  }).forEach((tran) => {
    $scope.credit += tran.amount;
  });
  $scope.net = $scope.debit -$scope.credit;
});