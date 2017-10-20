var width = window.innerWidth;
var aboutInfo = document.querySelector(".about-info");

if (width > 700) {
  aboutInfo.classList.add("grid-1of3");
  aboutInfo.classList.add("grid-cell");
}

window.addEventListener("resize", function() {
 	  var width = window.innerWidth;

    if (width > 700) {
      aboutInfo.classList.add("grid-1of3");
      aboutInfo.classList.add("grid-cell");
    } else {
      aboutInfo.classList.remove("grid-1of3");
      aboutInfo.classList.remove("grid-cell");
    }
  }
);
