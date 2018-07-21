app.controller('DebitCntlr', function ($scope) {
  $scope.message = 'Hello from DebitCntlr';
  $scope.trans = tranList.transactions.filter((tran) => {
    return tran.type == 1;
  });
  $scope.user = function (id) {
    return data.contacts.find((user) => {
      return user.id == id;
    }).name;
  }
});