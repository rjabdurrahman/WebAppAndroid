app.controller('HomeCntlr', function ($scope) {
  $scope.message = 'Hello from HomeController';
  $scope.trans = tranList.transactions;
  $scope.user = function (id){
    return data.contacts.find((user) => {
      return user.id == id;
    }).name;
  }
});