app.controller('AddTransactionCntlr', function ($scope) {
    $scope.getQueryVar = function (variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split("=");
          if (pair[0] == variable) { return pair[1]; }
        }
        return (false);
      };
      var user = data.contacts.find((user) => {
        return user.id == $scope.getQueryVar("uid");
      });
      $scope.user = user;
});
