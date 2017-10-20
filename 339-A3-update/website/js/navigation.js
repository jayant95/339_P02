function navigationClose(navType) {
  var id = "nav-list-mobile-" + navType;
  document.getElementById(id).style.display = 'none';
}

function navigationOpen(navType) {
  var id = "nav-list-mobile-" + navType;
  // This is when the media query changes so the navigation is on the bottom
  if (screen.width < 517) {
    document.getElementById(id).style.display = 'flex';
  }

}
