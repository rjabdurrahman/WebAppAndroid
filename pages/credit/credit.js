app.controller('CreditCntlr', function ($scope) {
    $scope.message = 'Hello from CreditCntlr';
    $scope.ctrans = tranList.transactions.filter((tran) => {
        return tran.type == -1;
    });
    $scope.user = function (id) {
        return data.contacts.find((user) => {
            return user.id == id;
        }).name;
    }
});