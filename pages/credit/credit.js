app.controller('CreditCntlr', function ($scope) {
    $scope.message = 'Hello from CreditCntlr';
    $scope.ctrans = findTransByType(tranList.transactions, -1);
    // $scope.user = function (id) {
    //     return data.contacts.find((user) => {
    //         return user.id == id;
    //     }).name;
    // }
});