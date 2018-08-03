var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home/home.html',
    controller  : 'HomeCntlr'
  })

  .when('/addContact', {
    templateUrl : 'pages/addcontact/addcontact.html',
    controller  : 'AddContactCntlr'
  })

  .when('/allContacts', {
    templateUrl : 'pages/allcontacts/allcontacts.html',
    controller  : 'AllContactsCntlr'
  })

  .when('/credit', {
    templateUrl : 'pages/credit/credit.html',
    controller  : 'CreditCntlr'
  })

  .when('/debit', {
    templateUrl : 'pages/debit/debit.html',
    controller  : 'DebitCntlr'
  })

  .when('/backup', {
    templateUrl : 'pages/backup/backup.html',
    controller  : 'BackupCntlr'
  })

  //Sub-Page Routing
  .when('/addtransaction', {
    templateUrl : 'pages/addtransaction/addtransaction.html',
    controller  : 'AddTransactionCntlr'
  })

  .when('/userdetails', {
    templateUrl : 'pages/userdetails/userdetails.html',
    controller  : 'UserDetailsCntlr'
  })

  .otherwise({redirectTo: '/'});
});

app.run(function($rootScope) {
  $rootScope.yourname = 'blue';
})