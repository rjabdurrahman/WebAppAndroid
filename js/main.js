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
var data =  $lsGet("contactList") ? JSON.parse($lsGet("contactList")) : {
  contacts : []
};
var tranList =  $lsGet("tranList") ? JSON.parse($lsGet("tranList")) : {
  transactions : []
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