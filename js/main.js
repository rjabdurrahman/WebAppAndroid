function $js(id) {
  return document.getElementById(id);
}
function $lsGet(id) {
  return localStorage.getItem(id);
}
function $lsSet(id, data) {
  localStorage.setItem(id, data);
}
function $lsSetJ(id, data) {
  localStorage.setItem(id, JSON.stringify(data));
}
var lastContactId = $lsGet("lastContactId") ? $lsGet("lastContactId") : 0;
var lastTranId = $lsGet("lastTranId") ? $lsGet("lastTranId") : 0;
var data = $lsGet("contactList") ? JSON.parse($lsGet("contactList")) : {
  contacts: []
};
var tranList = $lsGet("tranList") ? JSON.parse($lsGet("tranList")) : {
  transactions: []
};
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) { return pair[1]; }
  }
  return (false);
};
function findUser(arr, data) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].id == data) {
      return arr[i];
      break;
    }
  }
}
function findTrans(arr, data) {
  var rdata = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].userid == data) {
      rdata.push(arr[i]);
    }
  }
  return rdata;
}
function findTransByType(arr, data) {
  var rdata = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].type == data) {
      rdata.push(arr[i]);
    }
  }
  return rdata;
}
function dateFormater(d) {
  var date = new Date(d);
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return (date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear());
}
// function loadContacts() {
//   $js('contactList').innerHTML = "";
//   for (var item in data.contacts) {
//       if (data.contacts.hasOwnProperty(item)) {
//           $js('contactList').innerHTML +=
//               '<li class="w3-border-bottom" style="position: relative;">' +
//               '<a href="?uid=' + data.contacts[item].id + '#userdetails">' +
//               '<div style="width: calc(100% - 50px);">' +
//               '<span class="w3-large">' + data.contacts[item].name + '</span>' +
//               '<br>' +
//               '<span>' + data.contacts[item].phone + '</span>' +
//               '<br>' +
//               '<span>' + data.contacts[item].address + '</span>' +
//               '</div></a>' +
//               '<a href="?uid=' + data.contacts[item].id + '#addtransaction"><span class="w3-container w3-round-xlarge w3-red" style="position: absolute; right: 10px; top: 40px; height : 25px;"> – </span></a>' +
//               '<a href="?uid=' + data.contacts[item].id + '#addtransaction"><span class="w3-container w3-round-xlarge w3-green" style="position: absolute; right: 10px; top: 8px; height : 25px;"> + </span></a></li>';
//       }
//   }
// }