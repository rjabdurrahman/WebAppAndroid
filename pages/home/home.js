app.controller('HomeCntlr', function ($scope, $window) {
  $scope.debit = 0;
  $scope.credit = 0;
  $scope.htrans = tranList.transactions;
  $scope.user = function (id) {
    return (findUser(data.contacts, id));
  };
  $scope.trancol = function (type) {
    if (type == -1)
      return "red";
  }
  $scope.transym = function (type) {
    if (type == -1)
      return "–";
  }
  tranList.transactions.forEach(function (x) {
    x.type == 1 ? $scope.debit += x.amount : $scope.credit += x.amount;
  });
  $scope.net = $scope.debit - $scope.credit;
  $scope.debst = 0;
  $scope.crest = 0;
  $scope.netst = 0;
  if ($scope.debit > $scope.credit & $scope.debit != 0) {
    $scope.debst = 100;
    $scope.crest = Math.round(($scope.credit / $scope.debit) * 100);
    $scope.netst = Math.round(($scope.net / $scope.debit) * 100);
  }
  else if($scope.debit < $scope.credit & $scope.credit != 0) {
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
  $scope.dateForm = dateFormater;
});