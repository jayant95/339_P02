function navigationClose(navType) {
  var id = "nav-list-mobile-" + navType;
  document.getElementById(id).style.display = 'none';
}

function navigationOpen(navType) {
  var id = "nav-list-mobile-" + navType;
  document.getElementById(id).style.display = 'flex';
}
