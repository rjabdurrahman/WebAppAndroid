app.controller('HomeCntlr', function ($scope) {
  $scope.message = 'Hello from HomeController';
  $scope.htrans = tranList.transactions;
  $scope.user = function (id) {
    return data.contacts.find((user) => {
      return user.id == id;
    }).name;
  }
  $scope.trancol = function (type) {
    if (type == -1)
      return "red";
  }
  $scope.transym = function (type) {
    if (type == -1)
      return "–";
  }
  $scope.debit = 0;
  $scope.htrans.filter((tran) => {
    return tran.type == 1;
  }).forEach((tran) => {
    $scope.debit += tran.amount;
  });
  $scope.credit = 0;
  $scope.htrans.filter((tran) => {
    return tran.type == -1;
  }).forEach((tran) => {
    $scope.credit += tran.amount;
  });
  $scope.net = $scope.debit - $scope.credit;
  if ($scope.debit > $scope.credit) {
    $scope.debst = 100;
    $scope.crest = Math.round(($scope.credit / $scope.debit) * 100);
    $scope.netst = Math.round(($scope.net / $scope.debit) * 100);
  }
  else {
    $scope.crest = 100;
    $scope.debst = Math.round(($scope.debit / $scope.credit) * 100);
    $scope.netst = Math.round(($scope.net / $scope.credit) * 100);
  }
  if ($scope.netst < 0) {
    $scope.netcol = "red";
    $scope.netst *= -1;
  }
  else {
    $scope.netcol = "green";
  }
});