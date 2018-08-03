app.controller('DebitCntlr', function ($scope) {
  $scope.message = 'Hello from DebitCntlr';
  $scope.dtrans = findTransByType(tranList.transactions, 1);
  $scope.user = function (id) {
    return (findUser(data.contacts, id));
  };
});