app.controller('UserDetailsCntlr', function ($scope) {
  console.log(getQueryVariable("uid"));
  var user = findUser(data.contacts, getQueryVariable("uid"));
  $scope.user = user;
  var utransactions = findTrans(tranList.transactions, user.id);
  $scope.utrans = utransactions;
  $scope.debit = 0;
  $scope.credit = 0;
  utransactions.forEach(function (x) {
    x.type == 1 ? $scope.debit += x.amount : $scope.credit += x.amount;
  });
  $scope.trancol = function (type) {
    if (type == -1)
      return "red";
  }
  $scope.transym = function (type) {
    if (type == -1)
      return "–";
  }
  $scope.dateForm = dateFormater;
  //End
});
